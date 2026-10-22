import json, re, sys, os, html, urllib.request, concurrent.futures as cf
S = sys.argv[1]
hs = json.load(open(f'{S}/hs.json'))
PAGES = ['', 'description', 'engineering', 'results', 'contribution', 'experiments', 'notebook', 'model',
         'human-practices', 'hardware', 'measurement', 'safety-and-security', 'attributions', 'parts',
         'software', 'education', 'entrepreneurship', 'inclusivity', 'sustainability', 'team',
         'proof-of-concept', 'implementation', 'protocols', 'design']
def slug(n): return n.lower().replace(' ', '-')
def text_of(h):
    h = re.sub(r'(?is)<(script|style|noscript|svg)[^>]*>.*?</\1>', ' ', h)
    h = re.sub(r'(?is)<!--.*?-->', ' ', h)
    h = re.sub(r'(?i)<br\s*/?>|</(p|div|h[1-6]|li|tr|section|figcaption)>', '\n', h)
    t = html.unescape(re.sub(r'<[^>]+>', ' ', h))
    t = re.sub(r'[ \t\r\f\v]+', ' ', t)
    return re.sub(r'\n\s*\n+', '\n\n', t).strip()
def fetch(job):
    sl, p = job
    url = f'https://2026.igem.wiki/{sl}/{p}'
    try:
        r = urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'}), timeout=40)
        h = r.read().decode('utf-8', 'replace'); code = r.status
    except Exception as e:
        return sl, p, getattr(e, 'code', 0), '', {}
    t = text_of(h)
    m = {'imgs': len(re.findall(r'(?i)<img\b', h)), 'videos': len(re.findall(r'(?i)<video\b|video\.igem\.org|<iframe', h)),
         'bba': sorted(set(re.findall(r'BBa_[A-Za-z0-9]+', h))), 'tables': len(re.findall(r'(?i)<table\b', h)),
         'words': len(t.split())}
    return sl, p, code, t, m
jobs = [(slug(x['name']), p) for x in hs for p in PAGES]
out = {}
with cf.ThreadPoolExecutor(24) as ex:
    for sl, p, code, t, m in ex.map(fetch, jobs):
        os.makedirs(f'{S}/corpus/{sl}', exist_ok=True)
        if t:
            open(f'{S}/corpus/{sl}/{p or "home"}.txt', 'w').write(t)
        out.setdefault(sl, {})[p or 'home'] = {'code': code, **m}
json.dump(out, open(f'{S}/crawl_meta.json', 'w'), indent=1)
print('done', len(out))
