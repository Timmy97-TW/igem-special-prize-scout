import json, re, sys, os, subprocess, urllib.request, urllib.parse, hashlib, concurrent.futures as cf
sys.path.insert(0, os.path.dirname(__file__))
from crawl_lib import text_of
S = sys.argv[1]
C = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
m = json.load(open(f'{S}/crawl_meta.json'))
STD = set(m['gems-taiwan'].keys())
def render(url, tag):
    try:
        return subprocess.run([C, '--headless=new', '--disable-gpu', f'--user-data-dir=/tmp/chr-d-{tag}',
                               '--virtual-time-budget=10000', '--dump-dom', url], capture_output=True, timeout=60).stdout.decode('utf-8', 'replace')
    except Exception:
        return ''
def static(url):
    try:
        return urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'}), timeout=40).read().decode('utf-8', 'replace')
    except Exception:
        return ''
def links(sl, h, base):
    out = set()
    for href in re.findall(r'href="([^"#]+)', h):
        u = urllib.parse.urljoin(base, href)
        pre = f'https://2026.igem.wiki/{sl}/'
        if not u.startswith(pre): continue
        path = u[len(pre):].split('?')[0].strip('/')
        if not path or re.search(r'\.(css|js|png|jpe?g|webp|svg|pdf|ttf|woff2?|ico|gif|mp4|zip|xlsx?|csv)$', path, re.I): continue
        out.add(path)
    return out
def team(sl):
    base = f'https://2026.igem.wiki/{sl}/'
    h = render(base, sl) + static(base)
    found = links(sl, h, base)
    # also links from standard pages that exist
    for p in ['description', 'engineering', 'results', 'experiments', 'human-practices']:
        h2 = static(base + p)
        found |= links(sl, h2, base + p)
    new = sorted(p for p in found if p.replace('.html', '') not in STD)[:40]
    res = {}
    for p in new:
        url = base + p
        hh = static(url)
        t = text_of(hh) if hh else ''
        if len(t.split()) < 150:
            hh = render(url, sl + '-' + hashlib.md5(p.encode()).hexdigest()[:6]); t = text_of(hh) if hh else ''
        w = len(t.split())
        if w < 80 or re.search(r'Not Found|Page not found', t[:300], re.I): continue
        fn = 'x__' + re.sub(r'[^A-Za-z0-9]+', '_', p)
        open(f'{S}/corpus/{sl}/{fn}.txt', 'w').write(t)
        res[fn] = {'code': 200, 'words': w, 'path': p, 'extra': True, 'imgs': len(re.findall(r'(?i)<img\b', hh)),
                   'bba': sorted(set(re.findall(r'BBa_[A-Za-z0-9]+', hh)))}
    return sl, res
with cf.ThreadPoolExecutor(8) as ex:
    for sl, res in ex.map(team, list(m)):
        m[sl].update(res)
        print(sl, len(res), flush=True)
json.dump(m, open(f'{S}/crawl_meta.json', 'w'), indent=1)
print('done')
