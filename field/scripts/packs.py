import json, os, sys
S = sys.argv[1]
m = json.load(open(f'{S}/crawl_meta.json'))
hs = {x['slug']: x for x in json.load(open(f'{S}/hs.json'))}
# words budget per page in the screening pack
BUDGET = [('description', 1500), ('results', 3500), ('engineering', 2000), ('proof-of-concept', 800),
          ('contribution', 500), ('parts', 700), ('human-practices', 1200), ('model', 600),
          ('attributions', 600), ('home', 400), ('experiments', 400), ('hardware', 400)]
os.makedirs(f'{S}/packs', exist_ok=True)
for sl, t in hs.items():
    out = [f"# {t['name']}  (slug {sl}, village {t['village']}, {t['country']})",
           f"Wiki: https://2026.igem.wiki/{sl}/",
           'Page word counts: ' + ', '.join(f"{p}={v.get('words',0)}" for p, v in m[sl].items()),
           'BBa IDs seen anywhere: ' + ' '.join(sorted({b for v in m[sl].values() for b in v.get('bba', [])})[:80]), '']
    for p, n in BUDGET:
        f = f'{S}/corpus/{sl}/{p}.txt'
        if not os.path.exists(f): continue
        w = open(f).read().split()
        if len(w) < 30: continue
        out.append(f'\n## /{p}  ({len(w)} words{", truncated to first %d" % n if len(w) > n else ""})\n')
        out.append(' '.join(w[:n]))
    import re
    extras = [(p, v) for p, v in m[sl].items() if v.get('extra') and v.get('words', 0) >= 80]
    key = lambda pv: (0 if re.search(r'result|experiment|wet|engineer|proof|data|lab|validat|test|charact|measure|part', pv[1]['path'], re.I) else 1, -pv[1]['words'])
    left = 6000
    for p, v in sorted(extras, key=key):
        if left <= 0: break
        f = f'{S}/corpus/{sl}/{p}.txt'
        if not os.path.exists(f): continue
        w = open(f).read().split(); n = min(1500, left); left -= min(n, len(w))
        out.append(f'\n## /{v["path"]}  (non-standard page, {len(w)} words{", truncated to first %d" % n if len(w) > n else ""})\n')
        out.append(' '.join(w[:n]))
    open(f'{S}/packs/{sl}.md', 'w').write('\n'.join(out))
print('packs', len(hs))
