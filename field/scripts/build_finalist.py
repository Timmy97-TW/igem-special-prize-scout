"""Turn the hs-finalist-panel workflow result into data/finalist.js and the field/ dataset.
usage: python3 build_finalist.py <scratch dir> <workflow result json> <repo dir> [memo_i18n json]"""
import json, sys, os
S, RES, REPO = sys.argv[1:4]
I18N = json.load(open(sys.argv[4])) if len(sys.argv) > 4 else {}
OVR = json.load(open(sys.argv[5])) if len(sys.argv) > 5 else {}
r = json.load(open(RES))
hs = {x['slug']: x for x in json.load(open(f'{S}/hs.json'))}
meta = json.load(open(f'{S}/crawl_meta.json'))
gin = json.load(open(f'{S}/gates_in.json'))
P = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8']; W = ['w1', 'w2', 'w3', 'w4', 'w5']
mean = lambda xs: sum(xs) / len(xs)
SC = json.load(open(f'{REPO}/field/scoring.json'))
DROP = set(SC.get('drop_aspects', [])); EXCL = set(SC.get('exclude_teams', []))
PS = [k for k in P if k not in DROP]; WS = [k for k in W if k not in DROP]
comb = lambda s, wp=.75, ww=.25: wp * mean([s[k] for k in PS]) + ww * mean([s[k] for k in WS])

# final per-judge scores (calibrated where available)
fs = {}
for c in r['calibrated']:
    for f in c['final']: fs.setdefault(f['slug'], {})[c['judge']] = f['scores']
for c in r['cards']: fs.setdefault(c['slug'], {}).setdefault(c['judge'], c['scores'])
J = sorted({j for v in fs.values() for j in v})

def rank_by(wp, ww, judge=None, keys=None):
    ps, ws = keys or (PS, WS)
    out = []
    for sl, byj in fs.items():
        if sl in EXCL: continue
        js = [byj[judge]] if judge else list(byj.values())
        out.append((mean([wp * mean([s[k] for k in ps]) + ww * mean([s[k] for k in ws]) for s in js]), sl))
    return [sl for _, sl in sorted(out, key=lambda x: (-round(x[0], 3), x[1]))]

# rescore every team under the scoring config, then re-rank
for t in r['table']:
    byj = fs[t['slug']]
    for j, s in byj.items():
        t['judges'][j] = {'project': round(mean([s[k] for k in PS]), 3), 'wiki': round(mean([s[k] for k in WS]), 3),
                          'combined': round(comb(s), 3)}
    js = list(t['judges'].values())
    t['project_mean'] = round(mean([x['project'] for x in js]), 3)
    t['wiki_mean'] = round(mean([x['wiki'] for x in js]), 3)
    t['combined'] = round(mean([x['combined'] for x in js]), 3)
    t['spread'] = round(max(x['combined'] for x in js) - min(x['combined'] for x in js), 3)
r['table'] = sorted((t for t in r['table'] if t['slug'] not in EXCL), key=lambda t: (-t['combined'], t['slug']))
for i, t in enumerate(r['table']): t['rank'] = i + 1
table = {t['slug']: t for t in r['table']}
judge_rank = {j: {sl: i + 1 for i, sl in enumerate(rank_by(.75, .25, j))} for j in J}
import re as _re
# a slug that is also an ordinary English word must not be substituted ("HAS" the team
# vs "has" the verb); such slugs are only replaced where the surrounding text is a slug list
_STOP = {'has', 'texas', 'vis', 'spc', 'keystone'}
_SUBS = {k: v for k, v in hs.items() if k not in _STOP}
def _names(x):
    if isinstance(x, str):
        return _re.sub(r'\b(' + '|'.join(sorted(map(_re.escape, _SUBS), key=len, reverse=True)) + r')\b(?![-/.\w])', lambda m: _SUBS[m.group(1)]['name'], x)
    if isinstance(x, list): return [_names(v) for v in x]
    if isinstance(x, dict): return {k: (v if k == 'slug' else _names(v)) for k, v in x.items()}
    return x
r['chair'] = _names(r['chair'])
chair = r['chair']; ct = {t['slug']: t for t in chair['teams']}
ranking = []
for t in r['table']:
    sl = t['slug']; byj = fs[sl]
    ranking.append({
        'rank': t['rank'], 'slug': sl, 'team': hs[sl]['name'], 'village': hs[sl]['village'], 'country': hs[sl]['country'],
        'url': f'https://2026.igem.wiki/{sl}/',
        'project': {k: round(mean([s[k] for s in byj.values()]), 2) for k in P},
        'wiki': {k: round(mean([s[k] for s in byj.values()]), 2) for k in W},
        'dropped': sorted(DROP),
        'project_mean': round(t['project_mean'], 3), 'wiki_mean': round(t['wiki_mean'], 3), 'combined': round(t['combined'], 3),
        'judges': {j: {**t['judges'][j], 'rank': judge_rank[j][sl]} for j in t['judges']},
        'spread': t['spread'],
        'one_line': {'en': ct.get(sl, {}).get('one_line_en', ''), 'zh': ct.get(sl, {}).get('one_line_zh', '')},
        'strengths': ct.get(sl, {}).get('strengths', []), 'weaknesses': ct.get(sl, {}).get('weaknesses', []),
        'red_flags': ct.get(sl, {}).get('red_flags', []), 'ours': sl == 'gems-taiwan'})

name = lambda sl: hs[sl]['name']
sens = []
for (wp, ww, en, zh) in [(.75, .25, 'Main read: Project 75 / Wiki 25', '主要讀法：專題 75 / Wiki 25'),
                         (.5, .5, 'Project 50 / Wiki 50', '專題 50 / Wiki 50'),
                         (1, 0, 'Project only', '只看專題')]:
    sens.append({'label': {'en': en, 'zh': zh}, 'top': [name(s) for s in rank_by(wp, ww)[:5]]})
if DROP:
    sens.insert(1, {'label': {'en': 'If the unreadable pages were counted as judged', 'zh': '若把讀不到的頁面照原評分計入'},
                    'top': [name(s) for s in rank_by(.75, .25, keys=(P, W))[:5]]})
delta = {c['slug']: c['suggested_delta'] for c in r['skeptic']['challenges']}
# a deduction that was itself an own-work correction cannot apply once that aspect is dropped
if 'a6' in DROP: delta['hongkong-jss'] = 0.0
adj = sorted(((t['combined'] + delta.get(t['slug'], 0), t['slug']) for t in r['table']), key=lambda x: (-round(x[0], 3), x[1]))
sens.insert(1, {'label': {'en': 'After the skeptic\'s corrections', 'zh': '套用唱反調審查員的修正後'}, 'top': [name(s) for _, s in adj[:5]]})
for j in J:
    sens.append({'label': {'en': f'{j} alone', 'zh': f'只看 {j}'}, 'top': [name(s) for s in rank_by(.75, .25, j)[:5]]})

g = next(x for x in ranking if x['ours'])
second = ranking[1] if g['rank'] != 2 else ranking[2]
gap = round(g['combined'] - (ranking[1]['combined'] if g['rank'] > 2 else ranking[2]['combined']), 3)

screened = {t['slug']: t for t in r['screened']}
deep = set(fs)
gate0 = set(gin['gate0'])
field = []
for sl, t in sorted(hs.items(), key=lambda kv: kv[1]['name'].lower()):
    sc = screened.get(sl)
    gate = 'A' if sl in gate0 else ('deep' if sl in deep else 'B')
    note = (sc or {}).get('what_they_built', '') if gate != 'A' else 'Under 10,000 words of project documentation on the wiki.'
    field.append({'slug': sl, 'team': t['name'], 'village': t['village'], 'country': t['country'], 'url': f'https://2026.igem.wiki/{sl}/',
                  'gate': gate, 'core_words': gin['tot'][sl], 'screen': (sc or {}).get('screen_project'), 'note': note,
                  'excluded': sl in EXCL})

def memo_text(p, lang):
    return I18N.get(p['id'], {}).get(lang) or (p['memo']['memo'] if lang == 'en' else '')
LENS_ZH = {'J1': '濕實驗分子生物學家、大學實驗室主持人：先看實驗證據、對照組、重複與統計。',
           'J2': '業界生物製程與硬體工程師：先看設計-建構-測試-學習循環、標準化與模組化，以及能否在實驗室外運作。',
           'J3': '人文實踐、生命倫理與科學教育專家，曾評審高中組：先看利害關係人意見是否真的改變設計、貢獻歸屬是否誠實、wiki 溝通與引用。'}
n_short = len(deep); n_b_cut = 147 - len(gate0) - n_short
out = {
    'snapshot': '2026-10-23',
    'lede': OVR.get('lede') or {'en': chair['lede_en'], 'zh': chair['lede_zh']},
    'verdict': OVR['verdict'] if 'verdict' in OVR else {
        'en': chair['verdict_en'] + '\n\n' + chair['robustness_en'] + ''.join('\n\n' + p['en'] for p in OVR.get('extra', [])),
        'zh': chair['verdict_zh'] + '\n\n' + chair['robustness_zh'] + ''.join('\n\n' + p['zh'] for p in OVR.get('extra', []))},
    'gems': {'rank': g['rank'], 'of': 147, 'combined': g['combined'], 'gap_to_second': gap},
    'weights': {'en': 'The handbook says finalists come from a weighted average of the Project, Wiki and Presentation ballot sections and that Project is the main determinant (p.28, p.31), but it does not publish the weights. Presentation videos and the Q&A (Project aspect 9) cannot be seen from public pages, so this read scores Project aspects 1-8 and Wiki aspects 1-5 only and combines them as 0.75 x Project + 0.25 x Wiki. The sensitivity cards show the order under other weights and under each judge alone.',
                'zh': '評審手冊寫明決賽隊伍由評分表中「專題」、「Wiki」、「簡報」三部分的加權平均決定，且專題是主要依據（第 28、31 頁），但沒有公開權重。簡報影片與問答（專題第 9 項）無法從公開頁面看到，因此本評估只評專題第 1–8 項與 Wiki 第 1–5 項，綜合分數 = 0.75 × 專題 + 0.25 × Wiki。敏感度卡片顯示改用其他權重、或只看單一評審時的排名。'},
    'method': [
        {'en': 'Crawled all 147 accepted high-school wikis from the iGEM API team list: 24 standard pages each, plus up to 40 more pages linked from each wiki\'s own navigation; JavaScript-only pages were rendered in headless Chrome; Not Found and duplicate pages were discarded.',
         'zh': '依 iGEM API 名單爬取全部 147 支高中組隊伍的 wiki：每隊 24 個標準頁面，加上各隊導覽列連到的最多 40 個其他頁面；只靠 JavaScript 顯示的頁面以無頭 Chrome 渲染；「找不到頁面」與重複頁面已剔除。'},
        {'en': 'Trained three independent judges: each read the 2026 Judge Handbook and wrote its own calibration memo, which an examiner checked against the handbook before any scoring.',
         'zh': '訓練三位獨立評審：每位先讀 2026 評審手冊並寫下自己的校準備忘錄，經「考官」對照手冊檢查通過後才開始評分。'},
        {'en': f'Gate A (documentation): {len(gate0)} wikis with under 10,000 words of project documentation stop here. Gate B (screening): triage officers read a capped screening pack per team (the first part of each key page, about 5-15k words) and estimated every Project and Wiki aspect; a team advanced if its Project estimate was 3.5 or higher or it was flagged as a possible finalist, capped at the top 22, plus the named traditional strong teams and earlier prize-board leaders, which were always read in full.',
         'zh': f'關卡 A（文件量）：專題文件少於 10,000 字的 {len(gate0)} 個 wiki 止步。關卡 B（篩選）：篩選員只讀每隊的精簡篩選包（各關鍵頁面的前段，約 5–15k 字），估計專題與 Wiki 各項分數；專題估計 ≥ 3.5 或被標為可能入圍者晉級（上限 22 隊），另外指定的傳統強隊與先前特別獎榜首一律完整閱讀。'},
        {'en': f'Deep judging: each of the {n_short} shortlisted teams was judged three times, once by each judge, each reading the full wiki without seeing the others. Each judge then reviewed all of its own ballots side by side before freezing them.',
         'zh': f'深度評審：入圍的 {n_short} 隊各由三位評審分別完整閱讀並評分，彼此看不到對方的分數。之後每位評審把自己所有評分表並排複查，再定稿。'},
        {'en': 'An adversarial reviewer argued the overrated and the underrated case for every top-six team and for GEMS-Taiwan, checking the decisive claims against the wikis; a chair then wrote the verdict from the three judges and the reviewer. The scoring agents were not told which team commissioned this read.',
         'zh': '一位「唱反調」審查員針對前六名與 GEMS-Taiwan 分別提出「被高估」與「被低估」的最強論點，並回到 wiki 查證關鍵主張；最後由主席綜合三位評審與審查員寫出結論。評分的代理人不知道是哪一隊委託這份評估。'},
    ] + OVR.get('method_extra', []) + [
    ],
    'gates': [
        {'id': 'A', 'name': {'en': 'Documentation', 'zh': '文件量'},
         'rule': {'en': 'At least 10,000 words of project documentation on the iGEM wiki (team, home, attribution and safety pages not counted). A finalist wiki must hold everything needed to reconstruct the project (Wiki section of the handbook).',
                  'zh': 'iGEM wiki 上至少 10,000 字的專題文件（不計團隊、首頁、貢獻歸屬與安全頁面）。決賽等級的 wiki 必須包含重建整個專題所需的一切（手冊 Wiki 章節）。'},
         'passed': 147 - len(gate0), 'cut': len(gate0)},
        {'id': 'B', 'name': {'en': 'Screening', 'zh': '篩選'},
         'rule': {'en': f'From a capped screening pack, estimated Project mean of 3.5 or more, or flagged as a possible finalist (cap 22), or a named strong team. Lowest score that advanced: {r["cutLine"]}.',
                  'zh': f'依精簡篩選包估計的專題平均 ≥ 3.5，或被標為可能入圍（上限 22 隊），或為指定強隊。晉級者最低分：{r["cutLine"]}。'},
         'passed': n_short, 'cut': n_b_cut},
    ],
    'judges': [{'id': p['id'], 'lens': {'en': p['lens'][0].upper() + p['lens'][1:], 'zh': LENS_ZH.get(p['id'], '')},
                'memo': {'en': memo_text(p, 'en'), 'zh': memo_text(p, 'zh')}} for p in r['panel']],
    'ranking': ranking, 'sensitivity': sens, 'field': field,
    'scoring': {'dropped': sorted(DROP), 'excluded': sorted(EXCL), 'note': SC['note'], 'caveat': SC['caveat']},
}
open(f'{REPO}/data/finalist.js', 'w').write('// Finalist read, generated by field/scripts/build_finalist.py from the three-judge panel. Do not hand-edit.\nwindow.SCOUT_FINALIST = ' + json.dumps(out, ensure_ascii=False, indent=1) + ';\n')

# reusable field dataset
os.makedirs(f'{REPO}/field', exist_ok=True)
cards = {}
for c in r['cards']: cards.setdefault(c['slug'], {})[c['judge']] = c
cal = {c['judge']: {f['slug']: f for f in c['final']} for c in r['calibrated']}
teams = []
for sl, t in sorted(hs.items(), key=lambda kv: kv[1]['name'].lower()):
    pages = {p: {k: v[k] for k in ('words', 'imgs', 'path') if k in v} for p, v in meta[sl].items() if v.get('words')}
    teams.append({'slug': sl, 'team': t['name'], 'id': t['id'], 'village': t['village'], 'country': t['country'], 'city': t.get('city'),
                  'organiser': t.get('organiserType'), 'url': f'https://2026.igem.wiki/{sl}/',
                  'gate': next(f['gate'] for f in field if f['slug'] == sl), 'doc_words': gin['tot'][sl],
                  'bba_seen': sorted({b for v in meta[sl].values() for b in v.get('bba', [])}),
                  'pages': pages, 'screen': screened.get(sl),
                  'deep': {j: {**c, 'calibrated': cal.get(j, {}).get(sl)} for j, c in cards.get(sl, {}).items()} or None,
                  'final': next((x for x in ranking if x['slug'] == sl), None)})
json.dump(teams, open(f'{REPO}/field/teams.json', 'w'), ensure_ascii=False, indent=1)
json.dump({'panel': r['panel'], 'shortlist': r['shortlist'], 'cutLine': r['cutLine'], 'table': r['table'], 'skeptic': r['skeptic'], 'chair': r['chair'],
           'calibration_notes': {c['judge']: {'notes': c['notes'], 'ranking': c['ranking']} for c in r['calibrated']}},
          open(f'{REPO}/field/panel.json', 'w'), ensure_ascii=False, indent=1)
print('ok', len(ranking), 'ranked;', 'gems rank', g['rank'], 'gap', gap)
