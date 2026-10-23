"""Rebuild the workflow result JSON that build_finalist.py consumes, from the archived
field/ dataset. Lets the finalist read be rescored (see field/scoring.json) without
re-running the panel.

usage (from the repo root): python3 field/scripts/rebuild_result.py <out.json>
"""
import json, sys

out = sys.argv[1]
teams = json.load(open('field/teams.json'))
panel = json.load(open('field/panel.json'))

cards, calibrated = [], {}
for t in teams:
    for j, c in (t['deep'] or {}).items():
        cal = c.get('calibrated')
        cards.append({k: v for k, v in c.items() if k != 'calibrated'})
        if cal:
            calibrated.setdefault(j, {'judge': j, 'final': [], **panel['calibration_notes'].get(j, {})})['final'].append(cal)

json.dump({'panel': panel['panel'], 'shortlist': panel['shortlist'], 'cutLine': panel['cutLine'],
           'table': panel['table'], 'skeptic': panel['skeptic'], 'chair': panel['chair'],
           'screened': [t['screen'] for t in teams if t.get('screen')], 'missing': [],
           'cards': cards, 'calibrated': list(calibrated.values())},
          open(out, 'w'), ensure_ascii=False)
print('rebuilt', out, len(cards), 'cards', len(calibrated), 'calibrated')
