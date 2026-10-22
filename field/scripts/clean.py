import json, os, sys, hashlib, re
S = sys.argv[1]
m = json.load(open(f'{S}/crawl_meta.json'))
for sl, pg in m.items():
    d = f'{S}/corpus/{sl}'
    hashes = {}
    for p in list(pg):
        f = f'{d}/{p}.txt'
        if not os.path.exists(f): pg[p]['words'] = 0; continue
        t = open(f).read()
        head = t[:300]
        if re.search(r'Not Found|404|Page not found|Redirecting', head, re.I) and len(t.split()) < 400:
            os.rename(f, f + '.void'); pg[p]['words'] = 0; pg[p]['void'] = 'notfound'; continue
        hashes.setdefault(hashlib.md5(t.encode()).hexdigest(), []).append(p)
    for h, ps in hashes.items():
        if len(ps) >= 2:
            keep = 'home' if 'home' in ps else ps[0]
            for p in ps:
                if p != keep:
                    os.rename(f'{d}/{p}.txt', f'{d}/{p}.txt.void'); pg[p]['words'] = 0; pg[p]['void'] = 'dup:' + keep
json.dump(m, open(f'{S}/crawl_meta.json', 'w'), indent=1)
