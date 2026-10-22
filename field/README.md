# Field dataset: iGEM 2026 high-school section

Everything gathered for the finalist read, kept so the next analysis of the
high-school field does not have to start from scratch. Snapshot: 23 October 2026,
after the wiki freeze.

## Files

| File | What it holds |
|---|---|
| `teams.json` | One record per team, all 147: iGEM id, village, country, organiser type, wiki URL, the gate it reached, words of project documentation, every BBa ID seen on its wiki, word and image counts per page crawled, the screening record (what they built, best evidence and page, evidence level, DBTL level, 13 aspect estimates, 4–6 sentence field notes), and for the 24 deep-judged teams all three judges' ballots (scores, per-aspect justifications, strengths, weaknesses, red flags, pages read, calibrated scores) plus the final panel row |
| `panel.json` | The three judges' calibration memos and the examiner's check, the shortlist, the aggregate table, each judge's calibration notes and ranking, the skeptic's challenges and the chair's verdict |
| `corpus-2026-10-23.tar.gz` | Plain text of every crawled wiki page (`corpus/<slug>/<page>.txt`; non-standard pages as `x__<path>.txt`). iGEM wiki content is licensed CC BY 4.0 by each team; this is an unmodified text extraction for analysis, attributed to the teams at `https://2026.igem.wiki/<slug>/` |
| `crawl_meta.json` | Per-page crawl metrics (HTTP status, words, images, tables, BBa IDs, whether rendered by headless Chrome, discarded Not Found or duplicate pages) |
| `hs.json` | The 147 accepted high-school teams from `api.igem.org/v1/teams?year=2026`, with village names |
| `gates_in.json` | Gate A results and the screening batches |
| `JUDGING_BRIEF.md` | The brief every agent read before the handbook |
| `memo_i18n.json`, `overrides.json` | Translated judge memo summaries; the lede and verdict paragraphs written after the panel (skeptic-adjusted reading, attribution caveat) |
| `scripts/` | The pipeline, below |

## Pipeline

Run from a scratch directory `S` that holds `hs.json` (all scripts take `S` as the first argument):

1. `crawl.py S` fetches 24 standard pages per team as static HTML into `S/corpus`.
2. `render.py S` re-renders pages under 150 words in headless Chrome (JavaScript-only wikis).
3. `discover.py S` follows each wiki's own navigation to up to 40 non-standard pages.
4. `clean.py S` discards Not Found and duplicate pages.
5. `packs.py S` builds the capped screening packs (`S/packs/<slug>.md`).
6. `hs-finalist-panel.workflow.js` is the multi-agent run: train three judges and examine their memos, screen every team from its pack (Gate B), deep-judge the shortlist three times independently, let each judge calibrate its own ballots, skeptic, chair. It needs the Claude Code Workflow tool.
7. `build_finalist.py S result.json <repo> memo_i18n.json overrides.json` writes `data/finalist.js`, `field/teams.json` and `field/panel.json`.

## Gates

- **Gate A, documentation:** under 10,000 words of project documentation on the wiki (team, home, attribution and safety pages not counted) stops a team. 3 teams.
- **Gate B, screening:** a triage officer reads a capped pack (the first part of each key page, about 5–15k words) and estimates all 13 aspects. A team advances if its Project estimate was 3.5 or more or it was flagged a possible finalist, capped at 22, plus named strong teams (GEMS-Taiwan, BASIS-China, GreatBay-SCIE, Lambert-GA, and the earlier prize-board leaders Korea-HS, MammothEdu-United, HongKong-JSS). 120 teams stopped here; 24 were judged in full.

## Known limits

- Screening scores were compressed (many teams 3.9–4.25), so the cap fell inside a cluster near 3.9; some teams just below it were never read in full.
- Presentation videos and Q&A cannot be seen from public pages and are not scored.
- The judges could not reach the Registry; part documentation was scored from wiki tables.
- From 2026 the attribution form lives on the iGEM team page (handbook p.26). The judges read only the wiki's attribution page, so aspect 6 is understated for teams whose wiki page is empty.
- The handbook does not publish the Project/Wiki/Presentation weights; the panel used 0.75 Project + 0.25 Wiki.
