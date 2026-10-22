import json, re, sys, os, subprocess, concurrent.futures as cf
sys.path.insert(0, os.path.dirname(__file__))
from crawl_lib import text_of
S = sys.argv[1]
C = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
m = json.load(open(f'{S}/crawl_meta.json'))
jobs = [(sl, p) for sl, pg in m.items() for p, v in pg.items() if v.get('words', 0) < 150]
print('jobs', len(jobs), flush=True)
def run(job):
    sl, p = job
    url = f'https://2026.igem.wiki/{sl}/' + ('' if p == 'home' else p)
    try:
        h = subprocess.run([C, '--headless=new', '--disable-gpu', f'--user-data-dir=/tmp/chr-{os.getpid()}-{abs(hash(job))%9999}',
                            '--virtual-time-budget=10000', '--dump-dom', url], capture_output=True, timeout=60).stdout.decode('utf-8', 'replace')
    except Exception:
        return sl, p, None
    return sl, p, h
with cf.ThreadPoolExecutor(8) as ex:
    for sl, p, h in ex.map(run, jobs):
        if not h: continue
        t = text_of(h)
        w = len(t.split())
        if w > m[sl][p].get('words', 0):
            open(f'{S}/corpus/{sl}/{p}.txt', 'w').write(t)
            m[sl][p].update(words=w, rendered=True, imgs=len(re.findall(r'(?i)<img\b', h)),
                            bba=sorted(set(re.findall(r'BBa_[A-Za-z0-9]+', h))))
json.dump(m, open(f'{S}/crawl_meta.json', 'w'), indent=1)
print('done')
