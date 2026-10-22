// measurement board: every scored high-school team, ranked. Rendered by measurement.html.
window.SCOUT_MEASUREMENT = [
 {
  "slug": "gems-taiwan",
  "team": "GEMS-Taiwan",
  "url": "https://2026.igem.wiki/gems-taiwan/measurement",
  "type": "inline bioreactor OD600 photometers, pre-registered signal-processing calibration, protein and plant assays",
  "c1": 4.5,
  "c2": 4.5,
  "c3": 4.5,
  "c4": 5.0,
  "total": 18.5,
  "j1": "The OD600 work is reproducible down to the arithmetic: the 20-reading burst structure, dark-median subtraction, the median plus or minus 3 MAD fence, the OD equation with its path-length factor of 5, the blank-refusal conditions and the single-path fallback are all written out, and the raw CSVs, replay script, firmware ports and pre-registration are published under od600-signal-processing in the team GitLab, which I confirmed exists and holds analysis, data and src folders plus PREREGISTRATION.md. The wet-lab arms are thinner, with several tables built from single wells.",
  "j2": "Protocols are at SOP depth across very different methods: the withdraw-one add-one silica ladder with its concentration formula, the flow-meter pulse arithmetic and the divider and ADC chain for the pressure transmitters, the Western casting and transfer steps, the ELISA plate layout with per-well reagent volumes, and a DNPH assay scaled twenty-fold down to a microplate with every reagent recipe. The page is sprawling enough that the weaker assays get the same formatting as the strong ones.",
  "j3": "The transferable core is the burst-logging protocol: print individual samples inside a burst, replay eleven estimators on identical input, and gate rather than estimate. It runs in four working days on any photometer that can log raw samples, and the spread and jump gates cut the worst bubble error from 2.44 to 0.016 OD. The LED-to-optogenetic-system wavelength table and the twenty-fold DNPH scale-down are separately reusable.",
  "j4": "This is the strongest aspect. The concentration axis is set by pipetted volume and a measured loop volume, not by any instrument under test, so the BioDrop is a comparison and not the source of the scale; eight predictions with numeric thresholds were committed before the run and all eight are reported including the five that failed; seven of the eleven algorithms are deliberate controls; replaying raw bursts reproduced the firmware outputs within 0.005 OD; ELISA plates carry blank, NSB and B0 controls with the 11% B0 spread disclosed; the DNPH linear range is bounded at 2.049 mM and the all-eight-level R-squared of 0.950 is named as the number not to quote. Most telling, the untransformed WB800 control reads in the same range as four constructs and the team says the construct ranking therefore cannot be used.",
  "strengths": [
   "Pre-registered predictions, metrics and exclusion rules, with failures reported",
   "Instrument-independent silica and titanium dioxide concentration standards, eight weeks apart",
   "Raw CSVs, replay script and pre-registration published and reachable on iGEM GitLab",
   "Negative controls allowed to invalidate the team's own ELISA and optogenetic claims"
  ],
  "weaknesses": [
   "Most protein and plant results are single wells, so trends cannot be separated from plate noise",
   "ACCD ELISA values all fall below the lowest standard and are extrapolations",
   "Transmembrane pressure is still not computed; every pressure figure is a lumen drop",
   "The silica ladder calibrates particles, not cells; a washed-cell dilution series is still owed"
  ],
  "red_flags": [
   "The clean bubble record of run 6 is confounded because the permeate draw was halved at the same time the gate was fitted, which the page states",
   "Optogenetic Western bands run near 63 to 75 kDa while the constitutive ACCD band is about 37 kDa, so band identity is unsettled"
  ],
  "one_line": "Pre-registered, control-heavy instrument calibration of a kind rarely seen at any level, carrying a weaker but honestly labelled set of biological assays alongside it.",
  "one_line_zh": "預先登記、對照組極為紮實的儀器校正，水準在任何層級都少見，同時併帶一組較弱但標示誠實的生物學試驗。",
  "change_note_en": "The page is substantively the same as the 21 October snapshot, with the lux-to-OD derivation, the slope confidence intervals and the run 5 against run 6 comparison all still present; I score it 18.5 rather than 19 because on re-reading, the protein and plant chapters rest largely on single wells and the ELISA negative-control failure limits what the biology can support.",
  "change_note_zh": "本頁與10月21日快照大致相同，照度轉OD的推導、斜率信賴區間與第5、6次運轉的比較都仍在；我給18.5而非19，因為重讀後發現蛋白與植物章節多半只有單孔數據，且ELISA陰性對照的失敗限制了生物學部分能支持的結論。",
  "prev_total": 19.0,
  "rank": 1,
  "ours": true
 },
 {
  "slug": "korea-hs",
  "team": "Korea-HS",
  "url": "https://2026.igem.wiki/korea-hs/measurement",
  "type": "melanin identity by gravimetry plus spectral slope, and flame mass loss and char on coated oak",
  "c1": 4.0,
  "c2": 4.0,
  "c3": 4.5,
  "c4": 4.5,
  "total": 17.0,
  "j1": "Every quantitative value is on the page at per-tube resolution: Table 4 logs each preparation's OD600, pH, dry pellet mass, A400, slope and R-squared, Table 7 gives all three specimens per formulation, and instrument settings are named (SU5000, 15.0 kV, x150, working distances 10.0 to 11.3 mm). It stops short of 5 because nothing is downloadable, no code is published, and four flame-test parameters (exposure duration aside, burner distance, flame temperature, oak moisture) were admittedly never recorded.",
  "j2": "Protocols read as executable steps with concentrations, volumes and wavelengths (acidify to pH 2 with 6 M HCl, redissolve in 1 mL of 1 M NaOH, scan 250 to 700 nm at 5 nm giving 91 points, fit log10 A over a pre-specified 400 to 650 nm window, 20 spray actuations per layer, 180 s exposure). Missing are setup photographs, a troubleshooting section and any downloadable SOP.",
  "j3": "Section 7 packages four transferable items: the balance-plus-spectrophotometer melanin identity assay, carrying a commercial standard through the whole procedure rather than measuring it separately, the bare-substrate exposure control for any coating test, and recording three standard curves instead of one, which is how they found two of theirs carried no signal.",
  "j4": "Table 10 pairs every claim with a same-day control measured by the same procedure: empty vector at all four tyrosine levels, a melanin standard carried through precipitation, washing, drying and scanning, a triplicate solvent blank, bare oak under identical flame exposure, and a marketed flame retardant as an external performance reference. Units are handled honestly: four measurands in physical units, the pigment index declared dimensionless, and the Bradford values flagged as extrapolations because 11 of 18 fell outside the 0.1 to 0.5 mg/mL calibrated range.",
  "strengths": [
   "Per-replicate tables for every number, including the blanks",
   "Melanin standard carried through the full procedure, 2.5% CV on dry mass",
   "Bare-oak char control cut the claimed effect from 183.7 to 77 micrometres",
   "CV reported for all fifteen measurements and used to pick W9 over a lower mean"
  ],
  "weaknesses": [
   "No downloadable data files, scripts or SOPs",
   "Four flame-apparatus parameters were never recorded, so absolute severity is not reproducible",
   "Total protein rests on one usable Bradford curve with R-squared 0.9225 and mostly extrapolated values",
   "Three specimens per group leaves most coating comparisons non-significant after Holm correction"
  ],
  "red_flags": [
   "Round 1 single-specimen table ranks W9 worst (10.10% loss) while round 2 ranks it best, explained by layer count but on one specimen each"
  ],
  "one_line": "A disciplined, control-first measurement page whose honesty about what each number cannot support is as strong as the data itself.",
  "one_line_zh": "一個以對照組為核心、紀律嚴謹的測量頁面，對每個數字不能支持什麼的誠實說明，和數據本身一樣有力。",
  "change_note_en": "No substantive change found since the 21 October snapshot; the score holds at 17 because the same per-replicate tables, carried-through standard and bare-oak control are still the page's backbone and the same gaps (no downloadable data, unrecorded flame parameters) remain.",
  "change_note_zh": "與10月21日快照相比未見實質變動，分數維持17分：逐重複表格、全程帶入的標準品與裸橡木對照仍是全頁骨幹，而同樣的缺口（無可下載數據、火焰參數未記錄）也依舊存在。",
  "prev_total": 17.0,
  "rank": 2,
  "ours": false
 },
 {
  "slug": "wist",
  "team": "WIST",
  "url": "https://2026.igem.wiki/wist/measurement",
  "type": "nitrate and lactate promoter dose-response by a chloroform-free Miller beta-galactosidase assay",
  "c1": 4.5,
  "c2": 4.5,
  "c3": 4.0,
  "c4": 3.5,
  "total": 16.5,
  "j1": "The tube-level CSV is live and holds all 31 tubes with each one's own OD600, A420, A550, time, volume and assayed flag, nothing pre-averaged; the plotting script carries its seed and refuses to run unless it loads exactly 21 assayed tubes; the run-day protocol is published as its own file with the Z-buffer recipe, the ONPG volume, the 30 degree equilibration and the Miller formula with its t and V. All three files returned HTTP 200 on the frozen wiki.",
  "j2": "The protocol file is a genuine run card, and the page adds the reasoning a repeater needs: the anaerobiosis indicator strip as a pass or void gate, aerobic pre-grow then inducer-first dispensing then a fixed four-hour shift, and the reagent substitutions spelled out against the standard method. Short of 5 only because the absolute exposure of the sfGFP channel is abandoned rather than documented and some design decisions sit on other pages.",
  "j3": "Two things travel: Triton X-100 in place of chloroform and 1 mM DTT in place of 50 mM beta-mercaptoethanol, which puts a Miller assay in a school lab with no fume hood, and the choice to put the quantitative channel on absorbance rather than a fluorescent reporter they could not read. Publishing the lactate arm as a failure against the same pre-registered gate is itself a usable example.",
  "j4": "Controls are real where they matter: a no-plasmid host and a reporter-less logic plasmid both near zero at 0 and 16 mM, which rules out nitrite absorbance leaking into A420, plus three void days held in the record on the anoxia criterion. Calibration is the weak aspect and the team says so: no standard of known beta-galactosidase activity, so a Miller unit here is not a Miller unit in the 1972 protocol, the constitutive-lacZ control is designed and unrun, and the six-blank reagent noise floor specified in the run card has never been run across four runs.",
  "strengths": [
   "Pre-registered acceptance gate set 15 days before the run, applied to both arms",
   "Tube-level CSV, seeded analysis script and run-day protocol all downloadable and live",
   "A failed arm published rather than dropped, with the same gate shown applied to it",
   "Chloroform-free, mercaptoethanol-free Miller assay that secondary students can run"
  ],
  "weaknesses": [
   "Six of nine rungs report two tubes, and the two replicates reaching the plateau disagree about twofold",
   "No external activity standard, so the unit is internal to this team",
   "The assay noise-floor blank and the constitutive-lacZ control are both specified and never run",
   "The one quantified gas-vesicle readout uses a superseded reporter and probe"
  ],
  "red_flags": [
   "Several plateau tubes sit at A420 2.19 to 2.36 while the team's own card names an A420 ceiling, so the top of the ladder may be outside the linear range",
   "Only 21 of 27 ladder tubes were assayed and the missing cultures are gone, so the gap cannot be closed"
  ],
  "one_line": "A small dataset handled with unusual rigour: pre-registered criteria, published raw tubes and code, and a failure reported on the same terms as the success.",
  "one_line_zh": "資料量不大，卻處理得異常嚴謹：預先登記的判準、公開的逐管原始數據與程式碼，並以和成功相同的標準報告失敗。",
  "change_note_en": "No change found since the 21 October snapshot; the score holds at 16.5, and re-fetching the three linked files confirmed the CSV, script and protocol are all still served, while the uncalibrated unit and the never-run reagent blank still cap the controls aspect.",
  "change_note_zh": "與10月21日快照相比未見變動，分數維持16.5分；重新抓取三個連結檔案確認CSV、腳本與實驗protocol仍可取得，而未校正的單位與始終未執行的試劑空白仍限制了對照組這一項的分數。",
  "prev_total": 16.5,
  "rank": 3,
  "ours": false
 },
 {
  "slug": "hfi",
  "team": "HFI",
  "url": "https://2026.igem.wiki/hfi/measurement",
  "type": "lysine quantification by ninhydrin against FDAA HPLC-MS, plus three orthogonal kill-switch readouts",
  "c1": 3.5,
  "c2": 4.0,
  "c3": 4.0,
  "c4": 3.5,
  "total": 15.0,
  "j1": "Every assay links to a numbered protocol on the Experiments page, which I confirmed carries sections 3.1 to 3.7 with an instrument table and models, and the HPLC-MS method is identified concretely enough to repeat: FDAA derivative at 17.04 minutes retention, m/z 398.1, carbon-13 labelled lysine internal standard added before derivatisation, standard curve R-squared 0.9985. Raw data, ImageJ macros and per-replicate sheets are absent, and the protocols live off the measurement page.",
  "j2": "Protocols are genuine SOPs rather than outlines, each with purpose, materials, equipment and numbered steps, and the page narrates each method's failure mode in its Results rather than hiding it. Troubleshooting sections and downloadable SOP files are the only real gaps.",
  "j3": "The transferable content is deliberately framed for reuse: a three-way comparison of kill-switch readouts (OD600 against CFU against supernatant GFP release) with a selection table saying which to use for screening, confirmation and kinetics, and a documented demonstration that ninhydrin colorimetry is unusable in a whole-cell catalytic broth with FDAA HPLC-MS as the arbiter. Any team with a lysis circuit or an amino-acid readout can take both tables.",
  "j4": "Controls run throughout: a blank that rules out abiotic lysine loss, wild-type EcN against the ldcC knockout, uninduced against arabinose-induced for all three RBS variants, and a no-SpyTag/SpyCatcher negative that shows the two strains do not self-aggregate. Two standard curves are reported with R-squared and the isotope internal standard gives absolute quantification independent of derivatisation efficiency. Weakened by lysine consumption never being normalised to biomass, no positive control for aggregation, and ImageJ cluster counts taken per single field.",
  "strengths": [
   "Carbon-13 lysine internal standard, so quantification survives variable derivatisation",
   "Method-comparison tables that tell another team which readout to pick and why",
   "Its own failed colorimetric assay published with the reason it failed",
   "Results in absolute units, mg/mL lysine and CFU/mL, with significance tests"
  ],
  "weaknesses": [
   "Protocols are off the measurement page, on Experiments",
   "No raw data, no ImageJ macro and no per-replicate numbers",
   "Aggregation quantification rests on single fields with no positive control",
   "Lysine consumption is never normalised to biomass, so per-cell activity is unknown"
  ],
  "red_flags": [
   "Two section headings are swapped: Validation of Kill-Switch Triggering introduces the aggregation work and Quantification of Bacterial Co-aggregation introduces the kill-switch work",
   "Figure 4 aggregation counts (3, 16 and 14 per field) come from an unstated number of fields"
  ],
  "one_line": "Three method comparisons done properly, each driven by a real failure, with absolute units and the right controls but no raw data to check them against.",
  "one_line_zh": "三組方法比較做得紮實，每一組都由真實的失敗推動，具備絕對單位與適當對照，但缺少可供查核的原始數據。",
  "change_note_en": "No change found since the 21 October snapshot and the total holds at 15; re-checking the Experiments page confirmed the linked protocols 3.1 to 3.7 are real SOPs, so the off-page protocol placement stays a documentation weakness rather than a missing-content one.",
  "change_note_zh": "與10月21日快照相比未見變動，總分維持15分；重新檢查Experiments頁確認所連結的3.1至3.7是真正的SOP，因此protocol不在本頁僅屬文件配置的缺點，而非內容缺失。",
  "prev_total": 15.0,
  "rank": 4,
  "ours": false
 },
 {
  "slug": "aei-prep-taiwan",
  "team": "AEI Prep-Taiwan",
  "url": "https://2026.igem.wiki/aei-prep-taiwan/measurement",
  "type": "Calibrated HPLC method resolving BHET, MHET and TPA from PET hydrolysis in absolute micromolar",
  "c1": 3.5,
  "c2": 3.5,
  "c3": 4.0,
  "c4": 3.5,
  "total": 14.5,
  "j1": "The calibration design is fully stated and repeatable in principle: nine two-fold TPA standards from 0.78 to 200 uM in triplicate, linear range 0.78 to 50 uM, slope 208,465 uV.s per uM, R-squared 0.9999 inside the range against 0.983 across all nine, and every sample concentration kept inside the validated window. The chromatographic conditions themselves are absent from this page and sit on the team's notebook (Phenomenex Luna C18 4.6 x 150 mm, 20 mM phosphoric acid and methanol, 0.6 mL/min, 40 C, UV 240 nm), so a reader of the measurement page alone could not reproduce the separation.",
  "j2": "What is on the page is written precisely, including triplicate standards, standard error on peak areas, the saturation behaviour quantified at 194,550 and 153,770 uV.s per uM at 100 and 200 uM, and the BCA and anti-His Western identity checks that provide the denominator for specific activity. The missing gradient, column and detection details are a real gap for a measurement page.",
  "j3": "This is the clearest reuse case in the batch: any team working on PET depolymerisation needs the three cascade products resolved separately, and the page explains that the transferable part is the discipline around the chromatography, namely a dilution series that establishes the linear range, a stated saturation point, triplicate standards and keeping samples inside the range.",
  "j4": "A real calibration curve with a declared working range and a published saturation limit, plus a no-enzyme buffer control, an empty-vector control and a qualitative PET agar clearing-halo check, give this aspect genuine weight. It falls short because only TPA standards were run: BHET and MHET concentrations are reported in micromolar without their own calibrants or stated response factors.",
  "strengths": [
   "Nine-point triplicate calibration with declared linear range and R-squared",
   "Detector saturation point reported and excluded from the fit, not hidden",
   "All reported sample concentrations confirmed inside the validated range",
   "Separate quantification of the three cascade products revealed where the enzyme stalls and a 73.0 percent two-enzyme synergy"
  ],
  "weaknesses": [
   "Chromatographic conditions are not on the measurement page",
   "Only TPA standards: BHET and MHET quantified without their own calibration",
   "No raw chromatogram data or peak-area tables offered",
   "Single method, so the page is narrow compared with its claims"
  ],
  "red_flags": [
   "Absolute BHET and MHET micromolar values rest on a TPA calibration curve, which the page does not acknowledge"
  ],
  "one_line": "The batch's best calibration work, with a stated working range and a published saturation limit, weakened by missing chromatographic conditions and by two of three analytes lacking their own standards.",
  "one_line_zh": "本批次校準做得最到位，明確交代線性範圍與偵測器飽和點；但層析條件未列於本頁，三個分析物中有兩個沒有自己的標準品。",
  "change_note_en": "Up from 10.0 to 14.5: the earlier pass appears to have scored the page as thin, but the calibration series, stated working range, saturation limit and empty-vector control are the handbook pattern, and the HPLC conditions were found on the team's own notebook page.",
  "change_note_zh": "由 10.0 大幅上調至 14.5：前次評分似將此頁視為內容單薄，實際上校準系列、線性範圍、飽和上限與空載體對照正合評審手冊所示模式，層析條件亦在該隊 notebook 頁找到。",
  "prev_total": 10.0,
  "rank": 5,
  "ours": false
 },
 {
  "slug": "fhs-china",
  "team": "FHS-China",
  "url": "https://2026.igem.wiki/fhs-china/measurement",
  "type": "Viable-count and OD characterisation of a food-grade L. paracasei chassis, with a two-instrument DNA cross-check",
  "c1": 4.0,
  "c2": 4.0,
  "c3": 3.5,
  "c4": 3.0,
  "total": 14.5,
  "j1": "Runs are dated and fully specified (inoculum volumes, 5 percent seed into 422.5 mL MRS, 42 tubes at 37 C, heat inactivation at 100 C for 20 s, centrifugation at 14,000 rpm and 4 C for 10 min, drying at 55 C overnight), with per-tube gravimetric weights and per-replicate UV and fluorometer values printed. The page admits the 10 mL scale-up record lacks sterilisation and centrifugation settings, and nothing is downloadable.",
  "j2": "Five numbered SOPs sit on the page, each with a stated critical point, including glucose added only after autoclaving and the 30 to 60 s Gram decolorisation window, and the lysozyme pre-digest for plasmid extraction from a Gram-positive host.",
  "j3": "Three results transfer: OD630 saturates and turns non-monotonic above about 1.2 while OD600 stays monotonic, so a 630 nm filter is only usable in early exponential phase; UV A260 reads 2 to 4 times higher than dye-based fluorometry on the same preps; and gravimetric pellet weight is retired as too noisy, published as a negative result with the CV that killed it.",
  "j4": "Each readout carries a control (uninoculated medium, empty-cuvette zero, empty-tube tare, blank plus standard for the fluorometer) and the fluorometer has a calibration coefficient, but the viable-count series that the regulatory comparison rests on is a single plate per time point, the temperature comparison is n=1 per condition, and no viability standard or CFU replication exists.",
  "strengths": [
   "Measurand defined against a named regulatory threshold, with the shelf-life limit of the comparison stated",
   "A documented negative result (gravimetry) kept rather than deleted, at two scales",
   "Two instruments cross-checked on the same samples, with the direction of the disagreement explained",
   "Data-quality section lists n, control and failure mode for every table"
  ],
  "weaknesses": [
   "CFU series has no replicates, so the headline 1e8 CFU/mL rests on single plates",
   "Temperature pre-experiment is one tube per condition",
   "Much of the page is sequence analysis rather than measurement",
   "No raw data files or scripts"
  ],
  "red_flags": [
   "Peak CFU/mL at 7 h is quoted alongside OD600 0.431 in one place and 0.429 in the growth table"
  ],
  "one_line": "An honest, well controlled bench readout suite with a clear measurand and two kept negative results, held back by unreplicated viable counts.",
  "one_line_zh": "量測目標明確、對照完整，並保留兩項陰性結果；但活菌計數每個時間點只有單一培養皿，限制了整體說服力。",
  "change_note_en": "Up from 13.5 to 14.5: closer reading of the SOPs and the per-tube gravimetric and dual-instrument tables shows more reproducible detail than the earlier pass credited, while single-plate CFU still caps the controls aspect.",
  "change_note_zh": "由 13.5 上調至 14.5：細讀 SOP 與逐管重量、雙儀器對照表後，可重複性高於前次評分；但單一培養皿的 CFU 仍限制對照面向。",
  "prev_total": 13.5,
  "rank": 6,
  "ours": false
 },
 {
  "slug": "cataverse-beijing",
  "team": "Cataverse-Beijing",
  "url": "https://2026.igem.wiki/cataverse-beijing/measurement",
  "type": "phage receptor-binding-protein magnetic capture with a cerium MOF nanozyme colorimetric bacterial readout",
  "c1": 3.5,
  "c2": 4.0,
  "c3": 3.5,
  "c4": 2.5,
  "total": 13.5,
  "j1": "The preparation and assay protocols carry real numbers throughout: 6 mg of beads coupled with 360 micrograms of RBP at 1 mg to 60 micrograms, 60 microlitres each of freshly prepared 50 mg/mL EDC and Sulfo-NHS, 15 minute activation, 90 minute coupling, 2.9 g ceric ammonium nitrate in 10 mL, 100 degree oil bath for 15 minutes, then 30 microlitres of beads plus 5 microlitres of composite, 37 degrees for 20 minutes, 200 microlitres of 5 mM pNPP for 10 minutes. The readout tool and the LOD and RSD formulas are named. No raw RGB values, no per-replicate data and no images of the colour series are published.",
  "j2": "The best-formatted protocols in this batch after the anchors: separate Materials and numbered Procedures for bead coupling, MOF synthesis, TEM, sensitivity, specificity and spiked-milk testing, with concentrations, buffers, temperatures and times at every step. Missing are troubleshooting notes, photographs of the measurement step and any downloadable SOP.",
  "j3": "The smartphone (R+G)/B colour-ratio quantification and the cheap cerium nanozyme amplifier are adoptable by any team with a colour-generating assay, and the materials-cost comparison against a noble-metal nanoflower system is an argument other teams can act on. It stops short because the pipeline is only ever demonstrated with this team's own probes and never cross-checked against an instrument method.",
  "j4": "There are standard curves (R-squared 0.9481 and 0.9746), a PBS blank, a non-target E. coli control, an unspiked-milk control, claimed triplicates and LOD and RSD arithmetic. But the unit is an arbitrary colour ratio never back-calculated to CFU/mL, the bacterial concentrations themselves are never confirmed by plate count or OD calibration, no spike recovery percentage is computed for the milk test, and the third RBP (T7Mtfp for E. coli) is introduced and never characterised.",
  "strengths": [
   "Protocols with reagent masses, buffers, temperatures and times at every step",
   "Coupling conditions optimised on a measured temperature and time grid, with significance marks",
   "Specificity and spiked-milk matrix tests both run, not just claimed",
   "Explicit cost argument against a precious-metal alternative"
  ],
  "weaknesses": [
   "Readout unit is an uncalibrated colour ratio, never converted back to CFU/mL",
   "Input bacterial concentrations never verified by plate count or OD",
   "No raw values or per-replicate data anywhere on the page",
   "T7Mtfp is listed as a selected RBP but no E. coli detection data appear"
  ],
  "red_flags": [
   "An LOD of 10.4 to 12.7 CFU/mL is derived from fits with R-squared 0.9481 and 0.9746 across six orders of magnitude, which the scatter cannot support",
   "The specificity claim that performance is unaffected in a mixed culture is drawn from a mixture that contains the target, so it tests tolerance rather than specificity",
   "No recovery percentage for the spiked milk, so matrix effect is asserted rather than measured"
  ],
  "one_line": "Well-written protocols and a genuinely cheap colorimetric pipeline, reporting single-digit CFU detection limits that the published fits cannot carry.",
  "one_line_zh": "protocol撰寫良好、比色流程確實低成本，但所報告的個位數CFU檢測下限，並非公開的擬合結果所能支撐。",
  "change_note_en": "No change found since the 21 October snapshot and the total holds at 13.5; the protocols remain the strength and the uncalibrated colour-ratio unit, unverified bacterial input and over-reached LOD remain the limits.",
  "change_note_zh": "與10月21日快照相比未見變動，總分維持13.5分；protocol仍是優勢，而未校正的色比單位、未驗證的菌液濃度與過度推論的LOD仍是限制。",
  "prev_total": 13.5,
  "rank": 7,
  "ours": false
 },
 {
  "slug": "essential-korea",
  "team": "ESSENTIAL KOREA",
  "url": "https://2026.igem.wiki/essential-korea/measurement",
  "type": "Bradford, DNS reducing-sugar and cellular ROS assays for alginate lyase expression and activity",
  "c1": 3.5,
  "c2": 4.0,
  "c3": 2.5,
  "c4": 3.5,
  "total": 13.5,
  "j1": "Each assay is numbered with concentrations, volumes, wavelengths, incubation times and triplicate requirements, and the raw absorbance of every standard and every replicate is tabulated, so another team could repeat and compare directly. No instrument models, no raw files and no stated linear ranges keep it from higher.",
  "j2": "The protocols are the strongest part of the page: Bradford with six BSA levels, DNS with eight glucose standards, 95 C for 5 min then ice, and an 18 h LPS induction with DCFH-DA at 10 uM read at 485/528 nm, including the OD600 x volume rule used to normalise biomass before SDS-PAGE.",
  "j3": "These are textbook assays applied cleanly rather than a method contribution; the OD600-times-volume loading rule and the two calibration tables are the only parts another project would lift, and nothing is framed for reuse.",
  "j4": "Two genuine calibration curves with their full raw standard data (BSA and D-glucose), blank subtraction, a heat-inactivated enzyme negative control for the DNS reaction, an empty-vector control throughout and triplicate measurement give real unit traceability. Activity is still reported as reducing-sugar concentration rather than enzyme units, and the assumed conversion of OD600 1 to 8e8 cells/mL is not verified for this strain.",
  "strengths": [
   "Full raw replicate tables for standards and samples",
   "Two real calibration curves with blanks and heat-inactivated controls",
   "Biomass normalisation rule stated before gel loading",
   "Mean and SD computed for every condition"
  ],
  "weaknesses": [
   "No enzyme activity units (U/mg) despite having protein and product concentrations",
   "ROS data show no clear effect for AOS but no statistical test or interpretation is given",
   "OD600 to cell-number conversion assumed, not measured",
   "No reuse framing or instrument identification"
  ],
  "red_flags": [
   "The BSA curve spans 0.016 to 2.0 mg/mL with a clearly non-linear low end, and no linear working range is declared before samples are read against it"
  ],
  "one_line": "Clean, complete assay protocols with real calibration curves and raw data, but the numbers stop short of activity units and no interpretation or method contribution is offered.",
  "one_line_zh": "實驗流程完整、附真實標準曲線與原始數據，但未換算成酵素活性單位，也缺乏結果解讀與可供他隊沿用的方法貢獻。",
  "change_note_en": "Up from 12.0 to 13.5 because the raw standard-curve tables and the heat-inactivated and empty-vector controls are stronger calibration evidence than the earlier pass credited; usefulness to others stays low.",
  "change_note_zh": "由 12.0 上調至 13.5：原始標準曲線與熱失活、空載體對照屬較強的校準證據；但對其他團隊的可用性仍低。",
  "prev_total": 12.0,
  "rank": 8,
  "ours": false
 },
 {
  "slug": "hk-joint-school",
  "team": "HK-Joint-School",
  "url": "https://2026.igem.wiki/hk-joint-school/measurement",
  "type": "School-adapted UL 94 and NFPA 701 flame tests plus DIY weathering chambers on protein-coated wood and netting",
  "c1": 3.5,
  "c2": 4.0,
  "c3": 3.5,
  "c4": 2.5,
  "total": 13.5,
  "j1": "Specimen dimensions (200 x 3 x 10 mm sticks, 100 x 200 mm netting), flame angle 25 degrees, 10 s and 30 s applications, marking positions, three trials per formulation and the burning-rate formula R = 60d/t are all given, and stopwatch readings were calibrated against video frames. Against that, the coating solution strength is never stated in protein units, and no raw data file is offered.",
  "j2": "Procedures for soaking (90 rpm, 2 min wood, 10 min net, turn and repeat, 60 C overnight dry, 48 h conditioning at 23 C and 50 percent RH) and for both UL 94 orientations are written step by step, and each protocol modification carries its reason, including why a torch replaced a lighter and why NaOH pre-treatment was dropped.",
  "j3": "The reusable content is the set of school-scale adaptations: a cut-down NFPA 701 rig from stands and clamps, a DIY UV box, rainfall and humidity boxes and an oven-freezer thermal cycle referenced to ASTM D6944 temperature limits. Useful mainly to other fire-coating teams, and the methods they rejected (3D printing, Mayer rod, brushing) are documented with reasons.",
  "j4": "Controls are present (uncoated wood, CsgA-only, water plus APP/EG, PE-binding-peptide variants) and each formulation has three trials, but nothing is calibrated: protein yield is read as visual band intensity against a single 3 ug BSA spot, the two standard instrument tests (cone calorimeter, TGA-FTIR) have no results, and no flame output or heat flux is measured.",
  "strengths": [
   "Named standards adapted explicitly for a school lab, with each modification justified",
   "Three trials per formulation and per-trial char lengths reported",
   "Ingredient-only and uncoated controls separate the protein from the intumescent package",
   "Video calibration of stopwatch timings"
  ],
  "weaknesses": [
   "Protein quantification is visual densitometry against one BSA amount",
   "Cone calorimeter and TGA-FTIR sections carry method text but no data",
   "No calibration of the flame source or of coating mass applied per specimen",
   "Results tables are referenced but key values live in figures"
  ],
  "red_flags": [
   "Weathering percentages do not add up: a char length rising from 4.8 to 4.8 cm is reported as a 1 percent drop, and increases in char length are described as performance drops without the sign being defined",
   "Self-extinguishment is quoted as 5.085 s in one section and about 1 s in the discussion for the same double-layer coating"
  ],
  "one_line": "Wide, well documented fire testing adapted for a school bench, weakened by uncalibrated protein and flame inputs and by two headline tests that returned no data.",
  "one_line_zh": "以校內設備改造標準燃燒測試，記錄詳盡且面向廣，但蛋白與火源皆未校準，兩項主力儀器測試也沒有數據。",
  "change_note_en": "Up from 12.0 to 13.5 after reading the full protocol and modification sections, which are more reproducible than the earlier pass credited, while the inconsistent weathering percentages hold the controls aspect down.",
  "change_note_zh": "由 12.0 上調至 13.5：完整閱讀протокол與修改說明後，可重複性優於前次評分；但耐候百分比前後不一致，仍壓低對照面向。",
  "prev_total": 12.0,
  "rank": 9,
  "ours": false
 },
 {
  "slug": "yucai-sz",
  "team": "Yucai-SZ",
  "url": "https://2026.igem.wiki/yucai-sz/measurement",
  "type": "UV delta-OD screening of pigment-binding proteins, pigment photostability, copper-soap lipase activity",
  "c1": 3.0,
  "c2": 4.0,
  "c3": 3.0,
  "c4": 3.5,
  "total": 13.5,
  "j1": "Four methods are described with their fit equations and R-squared values (binder curve y = 0.388x + 0.03, R-squared 0.990; delta-OD curve y = 0.108x - 0.006, R-squared 0.993; lycopene y = 0.1109x - 0.00223, R-squared 0.994; oleic acid y = 0.0123x + 0.0452, R-squared 0.999), with n = 3 and the seven-group interference design at 215 microlitres each. No raw sheets are downloadable and all results are figures rather than numeric tables.",
  "j2": "Each method carries a numbered setup, the scan range and increment (240 to 320 nm in 5 nm steps), the fixed reaction conditions (1 mg/mL binder, 15 microlitres pigment stock, 30 minutes protected from light) and the reaction conditions for the lipase assay (37 degrees, pH 7.0, 10 minutes, olive oil, toluene extraction). Every method also carries an explicit Methodological Boundaries section, which is unusual and useful.",
  "j3": "Two ideas travel beyond this project: selecting a detection wavelength against five simultaneous absorbance backgrounds in a biphasic system, and proving analyte photostability before attributing any OD change to protein activity, which is what the lycopene half-life work does. Both are useful mainly to teams doing pigment or small-molecule binding by absorbance.",
  "j4": "A negative protein control (egg white) that absorbs near 280 nm but shows no comparable delta-OD, concentration-matched solvent blanks, four standard curves with R-squared, n = 3 with SD and independent-samples t-tests, and lipase reported in defined U/mL against an oleic acid curve with the kit's unit definition stated. Held back because delta-OD is an arbitrary semi-quantitative readout with no positive binding control and no way to separate bound from free pigment.",
  "strengths": [
   "Methodological Boundaries written for every method, limiting what each number may claim",
   "Lycopene stability test that disqualified the team's own transferred method",
   "Negative protein control plus t-tests to establish protein specificity",
   "143% per-catalytic-centre figure explicitly labelled a theoretical correction, not a measurement"
  ],
  "weaknesses": [
   "Delta-OD cannot distinguish bound from free pigment or give a Kd",
   "All results are figures; no numeric tables or downloadable data",
   "Lipase measured at one temperature and pH, not the alkaline wash conditions the product targets",
   "The 1.63x molecular-weight ratio underpinning the molar correction was never verified by mass spectrometry"
  ],
  "red_flags": [
   "Significance legend is garbled, reading ****p<0.01 and ***p<0.001",
   "Figure 2.4 caption is duplicated verbatim, suggesting a page assembled from fragments",
   "Binder-2 is described both as significantly decreasing delta-OD (p < 0.001) and as having the highest delta-OD at 0.102, and the sign conflict is never resolved"
  ],
  "one_line": "Careful, self-limiting absorbance work whose best contribution is proving its own assay unstable, undercut by a semi-quantitative readout and a sign conflict left unexplained.",
  "one_line_zh": "謹慎且自我設限的吸光度工作，最大貢獻是證明自家試驗不穩定，但半定量讀值與未解釋的正負號矛盾削弱了成果。",
  "change_note_en": "No change found since the 21 October snapshot and the total holds at 13.5; the same four methods, the same boundaries sections and the same unresolved Binder-2 sign conflict are present, so neither the strengths nor the limits moved.",
  "change_note_zh": "與10月21日快照相比未見變動，總分維持13.5分；同樣的四種方法、同樣的方法邊界段落，以及同樣未解決的Binder-2正負號矛盾都仍在，優勢與限制皆無變化。",
  "prev_total": 13.5,
  "rank": 10,
  "ours": false
 },
 {
  "slug": "mammothedu-united",
  "team": "MammothEdu-United",
  "url": "https://2026.igem.wiki/mammothedu-united/measurement",
  "type": "Data-provenance audit of OD600, provider LC-MS features and a photographic plus plate-reader RBS-GFP screen",
  "c1": 3.5,
  "c2": 3.5,
  "c3": 3.5,
  "c4": 2.5,
  "total": 13.0,
  "j1": "The computational half is unusually reproducible: ROI rectangles are given as 80 x 144 pixels in the 4096 x 3072 originals, the ExG formula and the normalisation denominator are printed, a worked example is shown (sample 286.810 minus background 24.186), and plate-reader settings include 485/520 nm, bottom optics and gain 944. The bench half is weaker: no instrument model or cuvette path for the early OD readings, and the notebook records conflicting dilution factors.",
  "j2": "Methods are stated with their own limits attached, including the provider UHPLC-MS/MS column, gradient and extraction steps, and an explicit note that the liquid-branch extraction solvent composition and internal standards are not unambiguously defined in the supplied record.",
  "j3": "The reusable item is the source-to-result template: keep original identifier, analytical alias, factors, culture replicate, raw readout, processing definition, unit and source location together, version rather than overwrite, and record orientation, ROI coordinates, channel maths and denominator for image analysis. That is a method other teams can copy without sharing the host.",
  "j4": "Medium blanks and a wild-type reference are used, and 72 of 72 IDs, 216 of 216 source values and 72 of 72 dilution calculations were checked, but the page itself states these are integrity checks rather than calibration: no fluorescence calibrant, no compound-specific LC-MS calibration, no OD-to-biomass conversion, and fluorescence and OD were acquired on different days.",
  "strengths": [
   "Pixel-level and arithmetic auditability, with a worked example and explicit formulas",
   "Clear separation of what each readout can and cannot establish",
   "Integrity checks reported with counts (72/72, 216/216)",
   "Honest refusal to convert peak areas into yields or conversion efficiencies"
  ],
  "weaknesses": [
   "No calibration of any channel: fluorescence, chemistry or biomass",
   "Fluorescence and OD600 for the RBS comparison measured on separate days",
   "Mostly technical rather than biological replicates, with n=2 in the chemical panel",
   "A 484-fold RBS7 signal is reported from uncalibrated RFU with no sequence-to-host crosswalk"
  ],
  "red_flags": [
   "The notebook carries conflicting dilution factors (x3 and x4) for the same style of preparation, which the page flags but cannot resolve",
   "A transcription error ('822' for 0.822) is retained in the source record"
  ],
  "one_line": "A rigorous audit of how numbers were produced and what they cannot mean, strong on provenance and weak on calibration, with no polymer measurement to anchor the project claim.",
  "one_line_zh": "這頁嚴謹稽核數字的來源與界限，溯源做得好但完全沒有校準，也沒有任何高分子產物的實測數據支撐專案主張。",
  "change_note_en": "Up from 11.0 to 13.0 after the ROI, formula and plate-reader detail proved more reproducible than the earlier pass credited; the absence of any calibration still holds the controls aspect at 2.5.",
  "change_note_zh": "由 11.0 上調至 13.0：ROI、公式與讀板機參數的可重現性高於前次評分；但完全缺乏校準，對照面向仍維持 2.5。",
  "prev_total": 11.0,
  "rank": 11,
  "ours": false
 },
 {
  "slug": "worldshaper-shmed",
  "team": "Worldshaper-SHMed",
  "url": "https://2026.igem.wiki/worldshaper-shmed/measurement",
  "type": "succinate and butyrate dual-input circuit characterised by GFP per OD600 dose-response and logic endpoints",
  "c1": 3.0,
  "c2": 3.5,
  "c3": 3.0,
  "c4": 3.5,
  "total": 13.0,
  "j1": "The measurement conditions are stated well enough to repeat the shape of the experiment: 485 nm excitation and 528 nm emission, 200 microlitres per well at 37 degrees, readings every 30 minutes, nine-point succinate ladder from 0 to 1.5 g/L, eleven-point butyrate ladder to 10 mM with succinate held at 1.0 g/L, and three independent biological replicates each in two technical wells with the distinction between them spelled out. No raw data, no plate layout, no strain or plasmid identifiers in the protocol and no instrument model.",
  "j2": "The normalisation is the best-documented part: the GFP over OD600 formula is given with its blank terms, and the page then lists the three conditions under which the ratio becomes unstable (corrected OD near zero, readings outside the linear range, treatments that alter physiology) and says raw RFU, OD600 and growth curves were read alongside it. Fitting is specified as four-parameter logistic, increasing for succinate and decreasing for butyrate.",
  "j3": "What transfers is mostly good practice rather than a method: separating technical from biological replicates and averaging in the right order, normalising with its failure modes stated, and running a growth-burden comparison so a loss of signal is not read as repression. The selectivity panel design, each strain compared against its own untreated control rather than across strains, is a point other teams could copy directly.",
  "j4": "Controls are present and purposeful: medium blanks for both channels, each sensor strain compared with its own untreated control in the selectivity panel, five non-target organic acids tested, an uninduced control in the time course, and a four-way growth comparison of wild-type, empty-vector, uninduced and induced that quantifies a 12.6% final OD600 cost. Units are arbitrary throughout, with no fluorescein or MEFL calibration, which is what keeps this from 4.5.",
  "strengths": [
   "Technical and biological replicates distinguished and aggregated in the stated order",
   "Normalisation published together with the conditions that break it",
   "Selectivity tested against five non-target acids, each strain against its own control",
   "Growth burden measured so signal loss is not confused with repression"
  ],
  "weaknesses": [
   "Fluorescence is in arbitrary units with no calibrant, so nothing is comparable across labs",
   "All results are figures and fitted parameters; no raw data or per-replicate values",
   "Each panel appears to be a single experiment with no independent repeat",
   "The NAPE lipid readout central to the project claim is planned, not measured"
  ],
  "red_flags": [
   "Section 3.3 reports an approximately 12.3-fold butyrate response in a branch whose designed behaviour is suppression, which conflicts with the inverse dose-response in section 3.2",
   "The 13.3-fold succinate figure appears as both a maximum induction from the fit and as a selectivity-panel response, so it may be one number reused"
  ],
  "one_line": "Textbook circuit characterisation with the right controls and an explicit treatment of normalisation, reported in arbitrary units with one fold-change that contradicts its own figure.",
  "one_line_zh": "教科書式的線路特性分析，對照組齊備且明確處理正規化，但以任意單位呈現，且有一個倍數變化與自身圖表矛盾。",
  "rank": 12,
  "ours": false
 },
 {
  "slug": "baltimore",
  "team": "Baltimore",
  "url": "https://2026.igem.wiki/baltimore/measurement",
  "type": "3D-printed hair washfastness rig with smartphone CIELab colorimetry and a tensile tester",
  "c1": 3.0,
  "c2": 3.5,
  "c3": 3.0,
  "c4": 3.0,
  "total": 12.5,
  "j1": "The rig and the pipeline are now described in enough detail to rebuild approximately: 3D-printed containment chamber, motor, commercial pump on a 2 s on, 5 s off duty cycle, 80 mL distilled water with 8 mL of 5% sodium lauryl sulfate per wash, 0.6 g hair per sample from a named commercial supplier, photographs on an iPhone 16 inside a biosafety cabinet against white, two named colorimeter apps, and colour read after washes 1, 6 and 12. Against that, no design files or pump code are linked, the runoff spectrophotometry wavelength is not given, and results appear only as four figures with no numeric table.",
  "j2": "The washfastness protocol is a numbered sequence with masses, volumes, bleach and dye products named by brand, processing times and rinse steps, and the sRGB to CIELab conversion is written out in full with the linearisation condition, the D65 matrix and the delta-E formula. The tensile protocol is four sentences and gives no load units, crosshead speed or sample count.",
  "j3": "An automated wash rig plus a phone-camera CIELab pipeline is reusable by any team working on dyes, coatings or textile and fibre binding, and the closing advice on controlling macro switching, auto-exposure and auto-white-balance is the kind of practical warning other teams would otherwise learn the hard way. It remains a method validated only against commercial dyes, with no colour reference card in the imaging chain.",
  "j4": "The validation design is the right one: three commercial dyes of known permanence class (1, 10 and 30 wash) stand in as calibrants for the method, unbleached and bleached undyed hair serve as controls, two independent colorimeter apps cross-check each other (Pearson r 0.63, p 0.0275), and repeatability is reported as CV across replicates, 9.34 to 55.86%. One-way ANOVA (F 8.77, p 0.0077) with Tukey post-hoc supports the separation of the 30-wash dye. Still uncalibrated in the strict sense: no white or grey reference card, no spectrophotometer standard, and horse hair substituted for human hair.",
  "strengths": [
   "Commercial dyes of known permanence used as calibrants for the assay itself",
   "Full sRGB to CIELab conversion published, with the camera settings that corrupt it",
   "Cross-validation between two independent colorimetry apps",
   "CV and ANOVA reported, including a 55.86% CV that is not hidden"
  ],
  "weaknesses": [
   "The team's own dye was never applied, so nothing measures the actual project product",
   "No colour reference card in the imaging chain and no spectrophotometer wavelength stated",
   "No design files, STL or pump code for the rig",
   "Tensile assay is described in outline and cannot resolve a single hair"
  ],
  "red_flags": [
   "Sample size is given as n = 5 in the hair preparation and n = 4 in the analysis, with no explanation",
   "The claim that achieving p < 0.01 proves the assay robust does not follow from a 55.86% CV",
   "The 10-wash dye loses more colour than the 1-wash dye, which is explained narratively rather than tested"
  ],
  "one_line": "A cheap wash rig and phone colorimetry validated against known commercial dyes, with real statistics but never applied to the team's own product.",
  "one_line_zh": "以已知市售染劑驗證的低成本洗滌裝置與手機比色法，統計處理確實，但從未用於團隊自己的產品。",
  "change_note_en": "The page has gained its entire results and validation section since the 21 October snapshot, when it reported no numbers at all: there are now four result figures, delta-E means for the three dye classes, an ANOVA with post-hoc tests, a CV range and a two-app correlation, which moves the score from 4.5 to 12.5.",
  "change_note_zh": "自10月21日快照以來，本頁新增了完整的結果與驗證段落，當時完全沒有任何數字：現在有四張結果圖、三類染劑的delta-E平均值、ANOVA與事後檢定、CV範圍以及兩款App的相關性，分數因此由4.5提升至12.5。",
  "prev_total": 4.5,
  "rank": 13,
  "ours": false
 },
 {
  "slug": "greatbay-scie",
  "team": "GreatBay-SCIE",
  "url": "https://2026.igem.wiki/greatbay-scie/measurement",
  "type": "Ellman DTNB thiol assay as an indirect readout of axillary odour precursor cleavage",
  "c1": 3.0,
  "c2": 3.5,
  "c3": 3.0,
  "c4": 3.0,
  "total": 12.5,
  "j1": "The protocol gives a full serial-dilution table, reagent ratio of 1:35, 20 uL sample plus 180 uL reagent, 15 min at 20 to 25 C, 412 nm read and 10,000 rpm 4 C 10 min clarification, which another team could follow directly. Results exist only as figures, with no tabulated values or data file, so the numbers themselves cannot be re-checked.",
  "j2": "Apparatus, materials, standard-curve preparation and sample quantification are set out as numbered steps with a stated blank, and the assay principle (DTNB to TNB at 1:1 stoichiometry) is explained with its reference.",
  "j3": "The page argues the method is accessible: cheap commercial reagents and a plate reader, suited to any team needing a free-thiol readout. It is a standard assay rather than a new one, and the team states plainly that it does not detect 3M3SH specifically.",
  "j4": "A seven-point GSH standard curve in mM with triplicate technical replicates, buffer blank subtraction and significance marks against matched controls give real unit traceability, but there are no biological replicates (the page admits batch-to-batch variation) and no positive 3M3SH standard to validate specificity.",
  "strengths": [
   "Complete, cheap and genuinely repeatable protocol with a dilution table",
   "GSH calibration curve with triplicates and error bars",
   "Explicit statement that the readout is indirect and semi-quantitative",
   "Future-improvement section names the missing biological replicates"
  ],
  "weaknesses": [
   "All results presented as figures, with no numeric tables or raw data",
   "No biological replicates, only technical ones",
   "No specificity control for the thiol attributed to 3M3SH",
   "Significance asterisks given without a named test"
  ],
  "red_flags": [],
  "one_line": "A clean, accessible calibrated thiol assay with honest limits, let down by figure-only results and no biological replication.",
  "one_line_zh": "以標準曲線校準的硫醇定量方法簡潔易用，限制也說得清楚；但結果僅以圖呈現，且沒有生物重複。",
  "change_note_en": "Nudged from 12.0 to 12.5 after the payload source confirmed the full protocol and the triplicate-calibrated standard curve; figure-only results keep repeatability at 3.0.",
  "change_note_zh": "由 12.0 微調至 12.5：原始內容確認了完整流程與三重複標準曲線；但結果僅有圖檔，可重複性維持 3.0。",
  "prev_total": 12.0,
  "rank": 14,
  "ours": false
 },
 {
  "slug": "ucs-b",
  "team": "UCS-B",
  "url": "https://2026.igem.wiki/ucs-b/measurement",
  "type": "L-asparaginase mutant screening by ammonia colorimetry, Michaelis-Menten kinetics and thermal half-life",
  "c1": 3.0,
  "c2": 4.0,
  "c3": 3.0,
  "c4": 2.5,
  "total": 12.5,
  "j1": "The recipes are repeatable to the microlitre and the docking run is fully specified (grid centre 5.604, -30.07, -21.967; box 40 x 40 x 40; exhaustiveness 8; 50 poses), but only derived numbers are published. Tables 3 and 4 give Km, kcat and kcat/Km with no replicate count, no error and none of the underlying absorbances, the activity standard curve was supplied by an outside company rather than measured in house, and all activity and half-life results appear only as figures.",
  "j2": "The strongest aspect: numbered procedures with reagent tables in microlitres, incubation times and temperatures, 12,000 rpm spins with duration and temperature, exact 10 and 20 minute colour-development windows, buffer molarity and pH, the full ligand and receptor preparation chain, and the simplified activity equation with its V1, V2, V3 and T terms defined.",
  "j3": "The written comparison of indophenol blue against Nessler's reagent, with throughput and batch-variability reasoning for using one to screen and the other for kinetics, is reusable by any team quantifying ammonia, and the docking to kinetics to half-life pipeline is a sensible template. Nothing here is calibrated or benchmarked in a way another project would adopt independently of this enzyme.",
  "j4": "Per-tube TCA blanks and substrate-free controls are run, both colorimetric methods have standard curves, and the half-life standard curve reports R-squared 0.9833. Against that, the kinetics and half-life tables carry no replicates or error at all, no commercial asparaginase of known specific activity is run as a positive benchmark, and half-lives of 8.5 to 22 hours are extrapolated from a time course the procedure samples only out to 48 minutes.",
  "strengths": [
   "Protocols written to the microlitre, with times, temperatures and pH throughout",
   "Docking parameters fully specified, so the in silico screen is repeatable",
   "Method choice argued and switched for a stated reason between screening and kinetics",
   "Limitations sections name the right gaps, including serum matrix and product inhibition"
  ],
  "weaknesses": [
   "No raw absorbances, no replicate counts and no error bars on the kinetics or half-life tables",
   "Activity standard curve came from an outside company, not measured by the team",
   "No positive benchmark enzyme of known activity",
   "Half-lives in hours derived from a time course sampled in minutes"
  ],
  "red_flags": [
   "Table 4 text states 214-pelB at 604.44 remained superior to 214-fedA at 605.00, which contradicts its own numbers",
   "The half-life rationale says 37 degrees while the procedure incubates at 30 degrees, and the discussion acknowledges this only afterwards",
   "Table 4 lists 214-pelB kcat/Km identical to the variant 214 row in Table 3, suggesting one value was carried over rather than measured"
  ],
  "one_line": "Protocol writing is the clear strength, but the numbers arrive without replicates, error or raw data and two tables contradict their own text.",
  "one_line_zh": "實驗protocol的撰寫是明顯優勢，但數據缺少重複、誤差與原始資料，且有兩張表格與自身文字互相矛盾。",
  "change_note_en": "No content change found since the 21 October snapshot; I score 12.5 rather than 13.5 because the kcat/Km contradiction between Table 4's text and its numbers, and the 30 against 37 degree inconsistency, weigh more heavily on the controls and calibration aspect than the earlier pass allowed.",
  "change_note_zh": "與10月21日快照相比未見內容變動；我給12.5而非13.5，因為表4文字與數字之間的kcat/Km矛盾，以及30度與37度的不一致，對對照與校正這一項的影響比前一輪評分所給的更重。",
  "prev_total": 13.5,
  "rank": 15,
  "ours": false
 },
 {
  "slug": "ais-china",
  "team": "AIS-China",
  "url": "https://2026.igem.wiki/ais-china/measurement",
  "type": "Reporter-gene screen, spot-dilution CFU assay for toxin kill switches and a WST-8 SOD activity assay",
  "c1": 3.0,
  "c2": 3.5,
  "c3": 3.0,
  "c4": 2.5,
  "total": 12.0,
  "j1": "The spot-dilution workflow is reproducible step by step (one row of eight wells, 30 uL neat into well 1, 90 uL diluent in wells 2 to 8, 10 uL transfers, 6 uL spots to 10^-7, 37 C), and inducer concentrations are stated. Against that, no wavelengths, gain or instrument model are given for the fluorescence work, and not one numeric result appears on the page: everything is in figures or prose.",
  "j2": "Each assay has background, principle, apparatus, materials and numbered procedure, including the full WST-8 working-solution composition and the inhibition formula, which is clearer than most pages at this level.",
  "j3": "Two things are offered for reuse and are genuinely useful: a parallel comparison of four reporters in one chassis showing eforRed is unsuitable for gradient screening, and the finding that promoter strength measured with mCherry did not predict toxin killing, traced to a weak RBS and confirmed by sequencing all recoverable toxin plasmids.",
  "j4": "Biological triplicates, LB blank wells, mCherry negative controls per promoter and pre-optimised induction times and concentrations are in place, but nothing is calibrated: viability is reported as the endpoint dilution at which colonies appear rather than CFU/mL, fluorescence is uncalibrated RFU, and the SOD assay reports inhibition percentage without an enzyme standard.",
  "strengths": [
   "Clear, numbered protocols with reagent volumes and inducer concentrations",
   "Reporter-choice comparison documented as a contribution, including the negative results",
   "Promoter-versus-toxin discrepancy chased down with sequencing and an RBS explanation",
   "Biological triplicates and matched reporter controls"
  ],
  "weaknesses": [
   "No numeric results anywhere on the page: no tables, no counts, no values",
   "Viability expressed as endpoint dilution, not CFU/mL",
   "No standard curves for fluorescence or SOD activity",
   "Fluorescence instrument settings not reported"
  ],
  "red_flags": [
   "Killing claims rest entirely on visual comparison of spot plates with no counted colonies or quantified fold reduction"
  ],
  "one_line": "Well written protocols and a useful negative finding about reporter and promoter choice, undercut by results that are never reported as numbers.",
  "one_line_zh": "流程書寫清楚，且關於報告基因與啟動子選擇的陰性發現對他隊有用；但所有結果都沒有以數字呈現。",
  "change_note_en": "Up from 10.0 to 12.0 after the full spot-dilution protocol and the reporter-comparison contribution proved more substantial than the earlier pass credited; the absence of any reported numbers keeps repeatability and controls modest.",
  "change_note_zh": "由 10.0 上調至 12.0：完整的點滴稀釋流程與報告基因比較貢獻比前次評分所見更實在；但結果毫無數字，可重複性與對照仍受限。",
  "prev_total": 10.0,
  "rank": 16,
  "ours": false
 },
 {
  "slug": "boston-boslab",
  "team": "Boston-BOSLab",
  "url": "https://2026.igem.wiki/boston-boslab/measurement",
  "type": "Bacterial and cell-free two-hybrid assays to validate designed Dae2 binders, both inconclusive",
  "c1": 3.5,
  "c2": 3.5,
  "c3": 3.0,
  "c4": 2.0,
  "total": 12.0,
  "j1": "Another team could run these: strain TK310 with its genotype, M9 with kanamycin, 28 to 30 C, back-dilution ratios, master-mix tables in uL for every component, final DNA concentrations of 5 nM reporter and 2.5 nM each fragment, and read settings of 485/528 nm kinetic every 30 min. The page also states what was not controlled, including no OD600 and no temperature control on the BioTek FLx800.",
  "j2": "Both protocols are written as working documents, with the plasmid-instead-of-linear-DNA shortcut explained and the mistaken 1:10 dilution recorded rather than hidden.",
  "j3": "What transfers is a warning rather than a method: the truncated CI DNA-binding domain they used is the non-functional variant from the source paper, which is exactly the trap another team would fall into, plus a clear account of why an uncalibrated plate reader without OD or incubation cannot support this assay.",
  "j4": "The control design is correct on paper (O1 and O2 interacting pair, uninduced background arms, SpyCatcher and SpyTag, GCN4, reporter alone, mScarlet kit check) but it did not work: in the incubator arm the uninduced control exceeded the induced positive control, one experiment had no replicates, error-bar definitions are unrecorded, and nothing is OD-normalised or converted to calibrated units.",
  "strengths": [
   "Protocols with full master-mix tables and final concentrations",
   "Failures and mistakes reported plainly, including the design error found by rereading the paper",
   "Instrument limitations named and their consequences spelled out",
   "Published figures clearly labelled as source material rather than team data"
  ],
  "weaknesses": [
   "No assay reached a valid control response, so nothing is measured",
   "No OD normalisation or calibrated fluorescence units",
   "Two of the four described assays have no results at all",
   "Replication is 2 to 3 technical replicates, and one run has none"
  ],
  "red_flags": [
   "Positive-control inversion in the incubator arm is unexplained, so even the descriptive comparison in the plate arm cannot be relied on"
  ],
  "one_line": "Honest, reproducible documentation of two assays that never established their own controls, so the page shows good practice without producing a measurement.",
  "one_line_zh": "兩套檢測都未能建立有效對照，等於沒有量測結果；但流程記錄誠實且可重現，呈現了良好的實驗習慣。",
  "change_note_en": "Held at 12.0: the protocol detail is strong enough to keep repeatability high, but with the positive control inverted and two assays unperformed the controls aspect stays at 2.0.",
  "change_note_zh": "維持 12.0：流程細節足以支撐可重複性，但陽性對照反轉且兩項檢測未執行，對照面向維持 2.0。",
  "prev_total": 12.0,
  "rank": 17,
  "ours": false
 },
 {
  "slug": "tji-seoul",
  "team": "TJI-Seoul",
  "url": "https://2026.igem.wiki/tji-seoul/measurement",
  "type": "Laccase expression, ABTS and guaiacol activity, colorimetric phenol kit and a lettuce germination assay",
  "c1": 3.0,
  "c2": 3.0,
  "c3": 2.5,
  "c4": 3.5,
  "total": 12.0,
  "j1": "The plant assay is specified well enough to repeat: seven soil conditions, three independent experiments, five seeds each, day 7 endpoint, non-germinated scored zero, per-experiment averaging before the mean. The enzyme assays are described in prose without concentrations, volumes, buffer or path length, and no raw data appear anywhere on the page.",
  "j2": "The page explains what each method measures and why, but it reads as commentary on figures rather than protocol: ABTS and guaiacol conditions, lysis buffer, induction details and the CHEMetrics procedure are referenced instead of written out.",
  "j3": "The transferable idea is measurement-driven redesign of a model substrate, swapping burned leaf ash (0.4 to 0.6 ppm) for incompletely burned sawdust (4 to 6 ppm) to widen the analytical window. Useful as a lesson, but with no protocol detail or calibration another team cannot lift the method itself.",
  "j4": "Controls are the strongest aspect: empty vector for expression and activity, CuSO4-only for ABTS specificity, apo versus holo enzyme, DDW for colorimetry, burned-material and potting-soil references, plus Welch t-tests with Holm adjustment and a stated statistical unit of n=3 independent experiments. Calibration is largely absent, with phenol read by colour matching to a ppm card and no enzyme units reported.",
  "strengths": [
   "Pseudo-replication avoided explicitly, with experiment-level averaging and Holm-adjusted Welch tests",
   "Matched controls at every stage, including apo versus holo enzyme",
   "Semi-quantitative methods labelled as such rather than overclaimed",
   "Honest statement that processed citrus soil performed similarly to the integrated product"
  ],
  "weaknesses": [
   "Enzyme assay protocols lack concentrations, volumes and buffer details",
   "No enzyme activity units and no phenol standard curve beyond a single 1 ppm reference",
   "No raw data tables or files",
   "A self-defined composite recovery score (40/30/30) with arbitrary weights"
  ],
  "red_flags": [
   "Phenol reduction to 'approximately 0 to 1 ppm' is read by eye from a colour card, yet is used as a headline treatment effect"
  ],
  "one_line": "Good control discipline and honest statistics around a set of assays that are described rather than documented, with little that another team could calibrate against.",
  "one_line_zh": "對照設計與統計處理相當嚴謹，但各項分析多為敘述而非可操作流程，也缺少可供他隊校準的單位與標準曲線。",
  "change_note_en": "Up from 11.0 to 12.0: the lettuce assay's statistical-unit discipline and the apo/holo and CuSO4-only controls are stronger than the earlier pass credited, while the prose-only enzyme protocols keep c2 at 3.0.",
  "change_note_zh": "由 11.0 上調至 12.0：萵苣試驗的統計單位處理與 apo/holo、僅加銅等對照優於前次評分；但酵素流程僅有敘述，c2 維持 3.0。",
  "prev_total": 11.0,
  "rank": 18,
  "ours": false
 },
 {
  "slug": "vis",
  "team": "VIS",
  "url": "https://2026.igem.wiki/vis/measurement",
  "type": "plate-reader OD600 and GFP time course of cadmium biosensor constructs across six concentrations",
  "c1": 3.5,
  "c2": 3.5,
  "c3": 2.0,
  "c4": 2.0,
  "total": 11.0,
  "j1": "The instrument programme is unusually complete and another team could reproduce it exactly: OD600 at 600 nm, X-Line pattern, 3 by 3 reads per well, 500 micrometre border, 25 flashes; GFP at 488 and 528 nm, top mode, manual Z at 20,000 micrometres, 2 by 2 reads, 5 flashes, gain 70, zero lag, 40 microsecond integration; 35 kinetic cycles at 37 degrees with 15 s then 835 s orbital shaking at 1 mm and 87.6 rpm. What is missing is everything after acquisition: no replicate count, no results and no raw data, with the outputs pushed to the Results page.",
  "j2": "Six numbered steps with real quantities (350 microlitres kanamycin and 11.6 mL glucose into 350 mL LB; EDTA at 2 microlitres per 1998; 700 microlitres medium plus 7 microlitres stock plus 3.5 microlitres culture per condition; 200 microlitres per well; Parafilm seal; peripheral water wells against evaporation) plus two full settings tables. Below higher marks because there are no setup figures, no failure-mode record and no downloadable SOP.",
  "j3": "The workflow characterises a published sensor, pMH45 from He et al. 2021, on one team's reader using gain and Z values that are specific to that instrument, and the page itself states the assays did not measure cadmium binding, removal from solution or treatment performance. The cross-run normalisation equation is the one portable artefact and it is presented unvalidated, with no demonstration that it preserves fold-change.",
  "j4": "There are controls of a kind: positive (pYC08) and negative (pTK03) plasmid controls, a 0 nM cadmium condition, EDTA pre-treatment to strip residual metal from the preculture, and evaporation wells. Nothing is calibrated: fluorescence is in arbitrary reader units at a fixed gain with no fluorescein or other calibrant, OD600 has no microsphere conversion to cell count, and the baseline correction subtracts each series' own minimum, which bakes a different offset into every series.",
  "strengths": [
   "Plate-reader settings complete enough to reproduce the acquisition exactly",
   "Quantities given for medium, EDTA, cadmium stocks and well volumes",
   "Positive and negative plasmid controls plus a zero-cadmium condition",
   "Scope limits stated upfront: this measures growth and reporter output, not cadmium removal"
  ],
  "weaknesses": [
   "No results, no replicate count and no raw data on the measurement page",
   "Arbitrary fluorescence units with no calibrant, so nothing is comparable between labs",
   "Cross-run normalisation to control wells is unvalidated and could absorb real differences",
   "Baseline correction by each series' own minimum is applied without justification"
  ],
  "red_flags": [
   "Normalising every run onto a reference dataset through its own positive and negative controls can manufacture agreement between runs, and no check against that is shown"
  ],
  "one_line": "The acquisition is documented to a standard few teams reach, but nothing on the page is calibrated and no result is reported.",
  "one_line_zh": "數據採集的紀錄達到少數團隊才有的水準，但頁面上沒有任何校正，也未報告任何結果。",
  "change_note_en": "No content change found since the 21 October snapshot; I score 11 rather than 10.5 because the acquisition parameters are complete enough that another team could reproduce the plate programme exactly, while the arbitrary units and unvalidated normalisation hold the other two aspects down.",
  "change_note_zh": "與10月21日快照相比未見內容變動；我給11分而非10.5分，因為採集參數完整到足以讓其他團隊完全重現該讀板程式，但任意單位與未驗證的正規化仍壓低了另兩項分數。",
  "prev_total": 10.5,
  "rank": 19,
  "ours": false
 },
 {
  "slug": "mammothedu-east",
  "team": "MammothEdu-East",
  "url": "https://2026.igem.wiki/mammothedu-east/measurement",
  "type": "Qubit and OD600 instrument procedures plus outsourced UPLC-MS/MS and GC-MS volatile quantification",
  "c1": 2.5,
  "c2": 3.5,
  "c3": 2.5,
  "c4": 2.0,
  "total": 10.5,
  "j1": "The instrument side is reproducible: the Qubit and OD600 steps are complete down to volumes and incubation times, and the chromatography sections give the calibration ranges, the extraction and centrifugation steps and the quantification equation with units defined. But there is not one measured value, no sample list, no replicate count, no calibration coefficients and no raw data, and the chromatographic parameters themselves sit in seven tables that are images rather than text in the dump.",
  "j2": "The strongest aspect by a distance: numbered steps with real volumes and times (190 microlitres working solution plus 10 microlitres standard; 198 plus 2 microlitres for samples; 2 to 3 s vortex; 2 minute dark incubation; 0.1 mL sample plus 0.2 mL ethanol, 10 minute ultrasonication, 4,000 rpm for 10 minutes), the quantification equation spelled out, and a documented method re-optimisation after severe GC peak tailing. Marked down because the Qubit and OD600 sections are transcribed manufacturer instructions rather than the team's own practice.",
  "j3": "Working ranges for three volatile semiochemicals (methyl salicylate 0.05 to 100 micrograms/mL, beta-caryophyllene 0.05 to 10 ng/mL, E-beta-farnesene 1 to 50 ng/mL) with external-standard calibration are of real use to any team quantifying these compounds. This is standard contract-lab methodology reproduced rather than a method the team developed, improved or benchmarked.",
  "j4": "Calibration is designed properly on paper: two-point Qubit standard calibration, seven, eight and five point external standard curves, peak area against concentration fitted by regression. No correlation coefficient or curve is ever shown, no blank, negative or spike-recovery control is described, no replicates are stated, and the page reports no measurement in any unit at all.",
  "strengths": [
   "Sample preparation and quantification steps given with real volumes, times and units",
   "Calibration ranges stated for all three target compounds",
   "A method failure, severe GC peak tailing, documented along with its re-optimisation",
   "Instrument models named for both the UPLC-MS/MS and the GC-MS"
  ],
  "weaknesses": [
   "Not a single measured value anywhere on the page",
   "No blanks, no recovery controls, no replicates and no R-squared",
   "The chromatographic parameter tables carry no readable content in the text",
   "Qubit and OD600 sections are transcribed vendor instructions"
  ],
  "red_flags": [
   "The analysis was commissioned to an outside company, and the page does not distinguish what the team measured from what the vendor measured"
  ],
  "one_line": "Clean procedure writing with proper calibration design and no results at all, for analyses the team sent out rather than ran.",
  "one_line_zh": "程序書寫清楚、校正設計正確，卻完全沒有結果，而且這些分析是委外而非團隊自行執行。",
  "change_note_en": "No change found since the 21 October snapshot and the total holds at 10.5; the procedures and calibration ranges are still the only substance and the page still reports no measured value in any unit.",
  "change_note_zh": "與10月21日快照相比未見變動，總分維持10.5分；程序與校正範圍仍是全頁唯一實質內容，頁面依舊沒有任何以單位表示的測量值。",
  "prev_total": 10.5,
  "rank": 20,
  "ours": false
 },
 {
  "slug": "georgetownprep",
  "team": "GeorgetownPrep",
  "url": "https://2026.igem.wiki/georgetownprep/measurement",
  "type": "paired whole-cell metal biosensors and bismuth-film stripping voltammetry, designed but not run",
  "c1": 2.5,
  "c2": 3.0,
  "c3": 3.0,
  "c4": 1.5,
  "total": 10.0,
  "j1": "Nothing on the page can be reproduced in the sense of repeating a result, because no result exists: every cell in the instrument-validation, calibration, matrix-effect and sensor-parameter tables is an em dash, the page states that no instrument run produced data before the freeze and that the raw data folder holds only its directory marker, and the one completed check, the OD600 linear ceiling, is marked established with its value not entered. What another team can repeat is the setup, which is specified with a named potentiostat, electrode type, buffer and approximate cost.",
  "j2": "The methods are written clearly and in the right order: in-situ bismuth film from Bi(III) in 0.1 M acetate at pH 4.5, deposition at -1.1 to -1.2 V for 120 to 300 s with stirring, 15 s quiescent rest, strip to -0.3 V, and on the biological side wash out of LB into M9, normalise to OD600 1.0, permeabilise with 0.1% Triton and read A420 against the A550 scatter correction. The team states that square-wave frequency, step and amplitude were never fixed, and the linked Protocols page is brief (about 550 words) with several Materials and Procedure headings left empty.",
  "j3": "Two lessons are genuinely portable and cost a reader nothing to adopt: that lead largely precipitates in phosphate-containing minimal media so the sensor never sees the nominal concentration, which the team handles by carrying nominal and verified concentration as separate columns, and that mCherry absorbs on top of amilCP at 588 nm so an absorbance-only reader physically cannot separate signal from reference. The IUPAC blank-plus-3-SD definition contrasted against EC50 is standard but correctly argued.",
  "j4": "This is where the absence of data bites hardest. Blanks per session, standard addition with at least four spikes, matrix-effect slope ratios, spike-recovery windows of 95 to 105%, weighted least squares and bootstrap intervals are all specified in detail, and none were performed; no unit is calibrated and no control is reported. The score above zero reflects that the calibration design itself is correct and that one instrument check was carried out.",
  "strengths": [
   "Verified against nominal concentration treated as a measurement problem and designed into the data schema",
   "Detection limit defined from blank statistics rather than a curve midpoint, with the distinction enforced in code",
   "Orthogonal biological and electrochemical methods chosen because they fail differently",
   "States plainly which rows were never measured instead of filling them"
  ],
  "weaknesses": [
   "No measurement result anywhere on the page; every data cell is empty",
   "Square-wave parameters never fixed, so the stripping method is not fully specified",
   "Linked Protocols page is short with several empty Materials and Procedure sections",
   "No calibration, no blanks, no spike recovery actually performed"
  ],
  "red_flags": [
   "Detection limits, removal percentages and SAFE or ACTION calls are described as things the project claims, while no run produced data to support any of them",
   "Reproduce this section points to a software repository and an analysis command for a pipeline with no input data"
  ],
  "one_line": "An unusually well-reasoned measurement plan with the honesty to show its own empty tables, but no measurement was made.",
  "one_line_zh": "一份論理異常清楚的測量規劃，誠實地呈現自己空白的表格，但並未完成任何測量。",
  "change_note_en": "The page has clearly been rewritten since the 21 October snapshot: the SWASV settings now carry real values, the broken figures and template protocol text are gone, and the empty rows are explicitly labelled as not measured with their methods and acceptance criteria stated, which lifts the score from 3.5 to 10. It is still a design document, so the controls and calibration aspect stays near the floor.",
  "change_note_zh": "本頁自10月21日快照以來明顯改寫：SWASV參數已填入實際數值，失連圖片與樣板protocol文字已移除，空白列則明確標示為未測量並載明方法與驗收標準，因此分數由3.5提升至10。但它仍是設計文件，對照與校正一項維持在接近底限。",
  "prev_total": 3.5,
  "rank": 21,
  "ours": false
 },
 {
  "slug": "texas",
  "team": "Texas",
  "url": "https://2026.igem.wiki/texas/measurement",
  "type": "two-tier plate-reader strategy for fatty acid amide hydrolase activity, one tier executed",
  "c1": 1.5,
  "c2": 3.0,
  "c3": 2.5,
  "c4": 2.0,
  "total": 9.0,
  "j1": "One measurement was performed and it is reported as prose: SDS-PAGE on 15 September of uninduced culture, induced pellet and induced supernatant for three constructs, induced with doxycycline at 1 microgram/mL for three hours at 37 degrees, with expected masses listed. There is no gel image, no gel percentage, no ladder, no lysis or sample-prep detail and no raw data, and the two assays the project turns on exist only as designs with no buffers, substrate concentrations, incubation times or wavelengths.",
  "j2": "The designed assays are laid out in a clear numbered logic, react then timepoint-quench then develop then read then quantify against a same-plate oleic acid curve, and every control is named with what it detects. There is not a single volume, concentration, temperature and time pair or kit catalogue number for either assay, and no downloadable SOP.",
  "j3": "The core idea is transferable and well argued: measure the appearance of the free fatty acid product with a commercial NEFA kit on a plate reader instead of the disappearance of the substrate by LC-MS, with the catalytic mutant named as the control not to cut. What another team can adopt is the strategy and the control panel, not a validated method or any data.",
  "j4": "On paper the control design is strong, with a no-enzyme blank, a no-substrate blank for lysate and medium background, an empty-backbone lysate, a catalytic mutant, a heat-inactivated enzyme and a same-plate triplicate oleic acid standard curve with R-squared reported and no extrapolation. Almost none of it was executed: the one real experiment has only an uninduced lane, no unit is calibrated, and the team states the catalytic mutant that gates both activity assays has not been built.",
  "strengths": [
   "Clear separation of the protein question from the chemistry question, with a status table",
   "Control panel designed with the purpose of each control stated",
   "Standard-curve discipline specified: same plate every time, report R-squared, no extrapolation",
   "States plainly that the induced band is not yet confirmed to be the tagged protein"
  ],
  "weaknesses": [
   "Only an SDS-PAGE expression check was run, and it is reported without an image or raw data",
   "No concentrations, volumes, times or wavelengths for either designed assay",
   "No calibration and no kinetic constants",
   "The control that makes both assays interpretable has not been built"
  ],
  "red_flags": [
   "The status table marks Tier 0 Western blot as in progress while the text treats band identity as unconfirmed, so no measurement supports the central project claim"
  ],
  "one_line": "A well-reasoned measurement strategy honestly labelled as mostly unbuilt, resting on a single gel reported without an image.",
  "one_line_zh": "論理清楚的測量策略，誠實標示大部分尚未完成，目前僅有一張未附圖的膠體結果作為支撐。",
  "change_note_en": "No content change found since the 21 October snapshot; I score 9 rather than 8 because on this reading the designed protocols are more completely specified in their logic and control purpose than the earlier pass credited, while the absence of executed measurement keeps every aspect low.",
  "change_note_zh": "與10月21日快照相比未見內容變動；我給9分而非8分，因為本次閱讀認為所設計protocol在邏輯與對照目的上的說明比前一輪所給的更完整，但缺乏實際執行的測量仍使各項分數偏低。",
  "prev_total": 8.0,
  "rank": 22,
  "ours": false
 },
 {
  "slug": "bgi-college",
  "team": "BGI-College",
  "url": "https://2026.igem.wiki/bgi-college/lab/measurement",
  "type": "GC-TCD hydrogen and HPLC organic-acid method tables for a fermentation strain, mostly planned",
  "c1": 2.0,
  "c2": 2.5,
  "c3": 1.5,
  "c4": 1.5,
  "total": 7.5,
  "j1": "Instrument parameters are tabulated (Fuli F80 GC, GDX-502 and Porapak N columns, nitrogen at 20 mL/min, TCD held at 30 C then ramped to 130 C at 10 C/min, 10 mL injection; Thermo U3000 HPLC, C18 column, 10 percent methanol and 2 percent phosphoric acid, 1 mL/min, 210 nm, 20 uL), but there is no sampling procedure, no fermentation condition, no standard preparation and no data, so nothing can actually be repeated.",
  "j2": "The protocol is a settings table plus principle text. Most of the method is written in the future tense, with gas and broth samples that 'will be collected and analyzed', so the description is incomplete as a protocol.",
  "j3": "Nothing here is reusable beyond generic instrument settings that any supplier manual carries; no analysis choice is justified against alternatives and no result is offered for comparison.",
  "j4": "A wild-type baseline run in parallel is named and an external standard method is mentioned for organic acids, but no standard curve, no calibration data and no replicate values appear, and the page itself states that only gas composition in volume percent exists because total gas volume was never recorded.",
  "strengths": [
   "Instrument and column parameters stated for both methods",
   "Limitations section is specific about what the data cannot support",
   "A named wild-type baseline control run in parallel"
  ],
  "weaknesses": [
   "No measurement results at all on the page",
   "Methods written as plans rather than completed work",
   "N=2 biological replicates claimed but no data shown",
   "Absolute hydrogen yield impossible because total gas volume was not recorded"
  ],
  "red_flags": [
   "The page claims rigorous measurement practices and biological replicates while presenting no data to support either"
  ],
  "one_line": "A method plan with instrument tables and an honest limitations section, but no measurements to judge.",
  "one_line_zh": "只有儀器參數表與誠實的限制說明，實際上沒有任何量測數據可供評分。",
  "change_note_en": "Up from 6.0 to 7.5 on the strength of the explicit instrument parameter tables and the specific limitations section; the absence of any data keeps every aspect low.",
  "change_note_zh": "由 6.0 上調至 7.5：儀器參數表與具體限制說明值得肯定；但完全沒有數據，各面向分數仍低。",
  "prev_total": 6.0,
  "rank": 23,
  "ours": false
 },
 {
  "slug": "this-china",
  "team": "THIS-China",
  "url": "https://2026.igem.wiki/this-china/measurement",
  "type": "Sanger verification of a plant expression cassette plus a fluorescence check that was abandoned",
  "c1": 2.0,
  "c2": 1.5,
  "c3": 1.5,
  "c4": 1.5,
  "total": 6.5,
  "j1": "The sequencing part is the most reproducible content: four primers with sequences and binding coordinates, the elements each one covers, the reference plasmid length of 11,044 bp and a link to the map, plus a statement that only QC-passing samples were analysed. The fluorescence part names no microscope, filter set, exposure, days post-infiltration or Agrobacterium OD, and the qPCR the page says replaced it is not shown here at all.",
  "j2": "There is no infiltration protocol, no siRNA dose or timing and no sequencing sample preparation; the primer table is the only operational detail. The fluorescence section is a short account of why the first design failed rather than a method.",
  "j3": "A primer set for one pEG100 cassette is useful mainly to someone using the same plasmid. The observation that pre-accumulated fluorescent protein masks silencing in a protein-level readout, and that Western blotting would hit the same wall, is sensible and correctly reasoned but well known.",
  "j4": "Reads are compared against a reference plasmid, and the team states which regions were not sequenced and were assumed correct, which is the right disclosure. But 8 of 12 reactions failed and were cancelled with no account of why, the single fluorescence image has no scale bar and no non-infiltrated or empty-vector panel, nothing is quantified, and no unit is calibrated anywhere on the page.",
  "strengths": [
   "Primer sequences with binding coordinates and the elements each covers",
   "Explicit statement of which plasmid regions were not sequenced",
   "The failed fluorescence readout reported with the reason it failed",
   "A clear reason given for moving to a transcript-level readout"
  ],
  "weaknesses": [
   "No quantitative measurement on the page at all",
   "Fluorescence imaging conditions entirely unspecified",
   "8 of 12 sequencing reactions failed with no explanation",
   "The qPCR that replaced the fluorescence readout is not presented here"
  ],
  "red_flags": [
   "Unsequenced backbone regions are assumed correct, so the plasmid is only partly verified",
   "The one fluorescence image carries no control panel, scale bar or quantification"
  ],
  "one_line": "A solid sequencing verification and an honest account of a failed readout, but nothing on the page is quantitative.",
  "one_line_zh": "一份紮實的定序驗證與對失敗讀值的誠實說明，但頁面上沒有任何定量內容。",
  "change_note_en": "No change found since the 21 October snapshot; I score 6.5 rather than 6 because the explicit statement of unsequenced regions and the reasoning for abandoning the protein-level readout are worth a little more than the earlier pass allowed, while the page is still entirely non-quantitative.",
  "change_note_zh": "與10月21日快照相比未見變動；我給6.5而非6分，因為明確說明未定序區域以及放棄蛋白層級讀值的理由，價值略高於前一輪評分所給，但本頁仍完全沒有定量內容。",
  "prev_total": 6.0,
  "rank": 24,
  "ours": false
 },
 {
  "slug": "shsd",
  "team": "SHSD",
  "url": "https://2026.igem.wiki/shsd/measurement",
  "type": "routine plant-transformation checkpoints: nucleic acid purity, digestion check, OD600, RT-qPCR, flowering time",
  "c1": 1.5,
  "c2": 1.5,
  "c3": 1.0,
  "c4": 2.0,
  "total": 6.0,
  "j1": "Five measurements are listed with their pass criteria and the RT-qPCR input is normalised to 500 ng of RNA, but the qPCR has no reference gene, primer sequences, kit or instrument named, the cycling programme is pushed to another page, biological and technical replicate counts are not given, and no Ct values, raw sheets or flowering-day counts are provided, so the results cannot be checked or repeated.",
  "j2": "Each section is an objective, an indicator and a criterion (A260/A280 cut-offs, OD600 0.8 to 1.2 for floral dipping, blank zeroing against culture medium) rather than a protocol. There are no volumes, digestion times or temperatures, no gel percentage or ladder identity, no phenotyping schedule, and the qPCR steps are only a cross-reference to Experimental Method 10.",
  "j3": "These are textbook checkpoints that other plant teams already use: NanoDrop purity ratios, a linearisation check against an uncut control, OD600 for Agrobacterium dipping, and the 2 to the minus delta delta Ct method. Nothing here is a new method, a calibration or a reusable dataset, and the flowering-time result matters only for this construct.",
  "j4": "Real controls appear where they count: an undigested plasmid lane on the linearisation gel with migration compared on the same gel, wild-type plants sown at the same time and grown alongside, and a wild-type baseline for qPCR across five independent lines giving 4.4 to 11.9 fold with all differences stated as significant. But the test, the n, the reference gene and the error type are not stated, and the flowering phenotype is reported as about 5 days earlier with no counts or variance.",
  "strengths": [
   "Pass criteria stated in advance for each checkpoint",
   "Undigested plasmid run on the same gel as the linearisation check",
   "Wild-type plants sown at the same time as the controls for the phenotype",
   "RNA input standardised to 500 ng per reverse-transcription reaction"
  ],
  "weaknesses": [
   "No raw values, Ct data or flowering-day counts anywhere",
   "qPCR reference gene, primers, kit and instrument all unnamed",
   "Replicate counts and statistical tests not stated",
   "Methods are criteria rather than protocols, with the cycling programme off-page"
  ],
  "red_flags": [
   "All differences are described as statistically significant with no test, n or error type given",
   "The headline 5-day flowering shift is reported without counts, variance or a sample size"
  ],
  "one_line": "Standard quality checkpoints with sensible criteria and side-by-side wild-type controls, but no data and no protocol detail to repeat them.",
  "one_line_zh": "具備合理判準與同步野生型對照的標準品管檢查點，但缺少數據與可供重現的protocol細節。",
  "change_note_en": "No change found since the 21 October snapshot and the total holds at 6; the same five checkpoints with the same missing replicate counts, reference gene and raw values are present, so neither the controls strength nor the documentation gap moved.",
  "change_note_zh": "與10月21日快照相比未見變動，總分維持6分；同樣的五個檢查點、同樣缺少的重複數、內參基因與原始數值都仍在，對照組的優點與文件缺口皆無變化。",
  "prev_total": 6.0,
  "rank": 25,
  "ours": false
 },
 {
  "slug": "aiglon-college",
  "team": "Aiglon College",
  "url": "https://2026.igem.wiki/aiglon-college/measurement",
  "type": "sfGFP fusion as an optical reporter for kaolin and grape-surface retention, mostly still planned",
  "c1": 1.5,
  "c2": 1.0,
  "c3": 1.5,
  "c4": 1.5,
  "total": 5.5,
  "j1": "Transformation efficiency is quoted as roughly 45,750 to 46,665 CFU per microgram for the best construct, but the colony counts, DNA mass and plating volume behind that range are not given, so the figure cannot be checked. The three measurements the project depends on, kaolin binding, grape-surface binding and retention after simulated rainfall, are described as logic with the protocols still being developed.",
  "j2": "There is no protocol for transformation, induction or any of the planned assays: no IPTG concentration, no temperatures or times, no wash volumes, no rainfall simulation parameters and no fluorescence readout instrument or settings. The expression check is described only as a blue-light torch giving a yes or no.",
  "j3": "Using an sfGFP fusion as a non-destructive retention reporter on clay and fruit surfaces is a sound, transferable idea, and sharing one backbone across variants so that only the binding peptide differs is the right design for attributing a difference. It is an idea only, since none of the retention measurements exist.",
  "j4": "The control design is reasonable on paper: two negative controls named for the retention assay (a construct with the grape-binding site but no kaolin-binding site, and GFP alone) and an identical-backbone argument that isolates the binding peptide. Against that, the one reported number is compared only against a published range for competent cells, there are no replicates, no standard and no calibration, and the fluorescence check is qualitative.",
  "strengths": [
   "Reporter chosen for a stated measurement reason: non-destructive, same sample before and after washing",
   "Shared backbone across variants so a difference can be attributed to the binding peptide",
   "Transformation efficiency compared against published values with plausible causes for the shortfall",
   "Negative controls for the planned assay named explicitly"
  ],
  "weaknesses": [
   "The measurements the project turns on have not been made",
   "No protocol detail anywhere: no concentrations, times, volumes or instrument settings",
   "The one quantitative figure has no underlying counts or replicates",
   "Expression confirmed only qualitatively under a torch"
  ],
  "red_flags": [
   "CFU per microgram is reported as a narrow range (45,750 to 46,665) with no counts, which implies a precision the method cannot give"
  ],
  "one_line": "A sensible reporter design and control plan with one unverifiable number and none of the measurements the project depends on.",
  "one_line_zh": "報導基因設計與對照規劃合理，但只有一個無法查核的數字，且專題所依賴的測量全部尚未完成。",
  "change_note_en": "No change found since the 21 October snapshot; I score 5.5 rather than 4.5 because the stated reason for choosing sfGFP as the instrument and the shared-backbone control argument are a little stronger than the earlier pass credited, but the retention measurements are still absent.",
  "change_note_zh": "與10月21日快照相比未見變動；我給5.5而非4.5分，因為選用sfGFP作為量測工具的理由與共用骨架的對照論述，略強於前一輪評分所給，但保留率的測量仍然缺席。",
  "prev_total": 4.5,
  "rank": 26,
  "ours": false
 },
 {
  "slug": "tsinglan",
  "team": "Tsinglan",
  "url": "https://2026.igem.wiki/tsinglan/results",
  "type": "Colour-retention photographs under heat, pH and ethanol, a three-group tensile test and a hanging-load adhesion test",
  "c1": 1.5,
  "c2": 1.0,
  "c3": 1.5,
  "c4": 1.5,
  "total": 5.5,
  "j1": "There is no /measurement page (all four standard paths return 404), so the quantitative work was read on /results. Conditions are labelled (20 min at 50 to 100 C, pH 3 to 14 for 60 min, ethanol at 25, 37.5 and 50 percent, 65 C for 60 min) and the adhesion readout is given as 0.0068 N maximum separation load and 0.085 kPa apparent strength, but specimen geometry, bonded area, tensile machine settings and raw force-displacement records are all missing, and the page itself notes that notebook and report conditions disagree (30 versus 60 min, 65 versus 68 C).",
  "j2": "No numbered protocol exists anywhere for these measurements: conditions appear only in figure captions and summary sentences, with no buffer, volume, sample format, crosshead speed or imaging conditions.",
  "j3": "Two things are mildly transferable: the improvised separation-load test using a PCR-tube top bonded to a Petri dish under incremental gravity loading, and the page's practice of keeping construct, batch and source record attached to every readout. Neither is validated, and the page warns against reusing the numbers.",
  "j4": "The tensile comparison has three specimens per group with error bars described as SD, which is the best-controlled data here, but no numeric SD, no statistics and no specimen dimensions are supplied, the earlier stress-strain plot has a duplicated series label, the adhesion test explicitly has no untreated control, and colour is judged by eye with no calibrated colour coordinates.",
  "strengths": [
   "Consistently states what each photograph does not establish, including folding, stability thresholds and solvent resistance of the final film",
   "Tensile comparison reports three specimens per group with means for strength and strain at break",
   "Conflicting condition records between notebook and report are flagged rather than reconciled silently",
   "A qualitative soil-burial observation is labelled as not a degradation rate"
  ],
  "weaknesses": [
   "No measurement page at all: every standard path returns 404",
   "Most evidence is photographic colour judged by eye, with no calibrated colour measurement",
   "No protocol, specimen geometry, tensile settings or raw traces",
   "Adhesion test has no untreated control, so the enzyme's contribution cannot be separated"
  ],
  "red_flags": [
   "/tsinglan/measurement returns 404, so judges following the standard page would find nothing",
   "The historical stress-strain figure carries a duplicated series label and no trace-to-specimen mapping"
  ],
  "one_line": "No measurement page exists; the real quantitative content on the results page is honest about its limits but almost entirely uncalibrated and unprotocolled.",
  "one_line_zh": "該隊沒有測量頁面；結果頁上的量化內容對自身限制交代誠實，但幾乎沒有校準，也沒有可操作的實驗流程。",
  "change_note_en": "Held at 5.5: a live check confirms /measurement returns 404, and the off-page tensile and adhesion data carry the same gaps (no specimen geometry, no numeric SD, no untreated control) that the 21 October pass recorded.",
  "change_note_zh": "維持 5.5：實地查證確認 /measurement 回傳 404，結果頁上的拉伸與黏著數據仍有同樣缺口（無試片尺寸、無標準差數值、無未處理對照）。",
  "prev_total": 5.5,
  "rank": 27,
  "ours": false
 },
 {
  "slug": "westviewhs-sandiego",
  "team": "WestviewHS SanDiego",
  "url": "https://2026.igem.wiki/westviewhs-sandiego/measurement",
  "type": "a fixed 1 mM rare-earth concentration and pH 5 buffer for an Alizarin binding assay",
  "c1": 1.0,
  "c2": 1.0,
  "c3": 1.0,
  "c4": 1.5,
  "total": 4.5,
  "j1": "The page states only that neodymium, europium and gadolinium were each used at 1 mM in an acetate buffer at pH 5 for an Alizarin colorimetric assay. There is no protocol, no instrument, no wavelength, no incubation time, no replicate count and no result, so nothing here could be repeated beyond mixing the same concentration.",
  "j2": "There is no protocol. Two conditions are named and justified in prose; the assay itself, the washing stages it refers to and the readout are never described.",
  "j3": "The only generalisable content is the reasoning that holding metal concentration and pH constant makes a between-protein comparison fair, plus a short honest note that 1 mM is far above environmental concentrations. Neither gives another team a method to adopt.",
  "j4": "Holding concentration and pH constant across trials is a real control choice and is explained correctly, and the caveat that the comparison concentration is not the deployment concentration is the right disclosure. But no blank, no negative control, no standard and no calibration is described, and no number is reported.",
  "strengths": [
   "Fixed concentration and pH across all trials, explained as a fairness condition",
   "Plain statement that 1 mM is not an environmentally realistic concentration",
   "Honest account of what the project could not express"
  ],
  "weaknesses": [
   "No protocol, no instrument and no readout described",
   "No data, no replicates and no controls reported",
   "Most of the page is a reflection on scientific honesty rather than measurement",
   "The alternatives suggested are literature names with no measurement plan attached"
  ],
  "red_flags": [
   "Binding of the two proteins is discussed as comparable although no binding result appears on the page"
  ],
  "one_line": "Two sensible assay conditions and a page of reflection, with no protocol, no instrument and no measurement.",
  "one_line_zh": "兩個合理的試驗條件加上一整頁反思，沒有protocol、沒有儀器，也沒有任何測量。",
  "rank": 28,
  "ours": false
 },
 {
  "slug": "anatolia-college-gr",
  "team": "Anatolia College-GR",
  "url": "https://2026.igem.wiki/anatolia-college-gr/measurement",
  "type": "Table of computational iron-speciation and ferritin-model quantities, with no experimental measurement",
  "c1": 1.0,
  "c2": 0.5,
  "c3": 0.5,
  "c4": 0.5,
  "total": 2.5,
  "j1": "The page lists model quantities with units (total iron fixed at 50 uM, pH 3 and 7, redox potentials of +400, +150 and +100 mV, soluble Fe2+ as the sum of named species) and the 4PL parameters, so the calculation could be re-run, but no experimental procedure exists to repeat.",
  "j2": "There is no protocol: the only procedural content is the summation formula for soluble ferrous species and the statement that ferric species and precipitates were wrongly included at first and then removed.",
  "j3": "Nothing is offered for other projects beyond the general reminder to separate computed estimates from measurements, and the model inputs are declared to be assumptions rather than values from algal digests.",
  "j4": "No controls and no calibration, as the page states plainly: the redox potentials and ascorbate concentrations are modelling assumptions, and the ferritin response is calculated rather than observed.",
  "strengths": [
   "Explicitly separates computed estimates from biological measurements",
   "Units given for every modelled quantity",
   "A spreadsheet error found and corrected, with the correction documented"
  ],
  "weaknesses": [
   "No experimental measurement of any kind",
   "No protocol, no controls, no calibration",
   "Model inputs are assumptions with no stated source"
  ],
  "red_flags": [],
  "one_line": "An honest statement that the project has modelled quantities and no measurements yet, which is the right framing but leaves almost nothing to score.",
  "one_line_zh": "誠實說明專案目前只有模型估算、尚無實測資料；立場正確，但幾乎沒有可評分的量測內容。",
  "change_note_en": "Up slightly from 1.5 to 2.5 because the quantity table with units and the documented spreadsheet correction are worth a little more than a token mention; there is still no experimental measurement.",
  "change_note_zh": "由 1.5 微調至 2.5：附單位的量表與已記錄的試算表更正略高於僅提及的程度；但仍無任何實驗量測。",
  "prev_total": 1.5,
  "rank": 29,
  "ours": false
 },
 {
  "slug": "bwya",
  "team": "BWYA",
  "url": "https://2026.igem.wiki/bwya/measurement",
  "type": "Measurement page containing only allergen background and the team's project inspiration",
  "c1": 0.0,
  "c2": 0.0,
  "c3": 0.0,
  "c4": 0.0,
  "total": 0.0,
  "j1": "The live page (517 words, checked 22 October 2026) holds a literature review of Fel d 1 prevalence and a story about a campus cat. The 'Our Project' heading is present in the HTML but carries no content, and there is no measurement to repeat.",
  "j2": "No protocol, no instrument, no assay described.",
  "j3": "Nothing is offered to other projects.",
  "j4": "No controls, no calibration, no units and no data.",
  "strengths": [],
  "weaknesses": [
   "Page contains background and inspiration only",
   "The 'Our Project' section heading has no content behind it",
   "No assay, unit or number anywhere on the page"
  ],
  "red_flags": [
   "The page is titled Best Measurement but contains no measurement content"
  ],
  "one_line": "A measurement page that is entirely background reading and project motivation, with no measurement at all.",
  "one_line_zh": "這頁全是文獻背景與專案動機，完全沒有任何量測內容。",
  "change_note_en": "Held at 0.0: a live fetch confirms the page carries only background and inspiration, with the 'Our Project' section empty.",
  "change_note_zh": "維持 0.0：實地抓取確認該頁僅有背景與動機，'Our Project' 一節為空。",
  "prev_total": 0.0,
  "rank": 30,
  "ours": false
 },
 {
  "slug": "cataverse-greatbay",
  "team": "Cataverse-GreatBay",
  "url": "https://2026.igem.wiki/cataverse-greatbay/measurement",
  "type": "unfilled iGEM measurement template, no project content",
  "c1": 0.0,
  "c2": 0.0,
  "c3": 0.0,
  "c4": 0.0,
  "total": 0.0,
  "j1": "I fetched the live page on the frozen wiki: 211 words, all of it the iGEM template prompt and the inspirations list, with the heading Measurement repeated six times and a line reading that the section is ready for verified measurement content during the content-filling phase. There is nothing to repeat.",
  "j2": "No protocol of any kind appears on the page.",
  "j3": "No method, result or lesson is present, so nothing can be useful to another project.",
  "j4": "No controls, standards, units or calibration are mentioned.",
  "strengths": [],
  "weaknesses": [
   "Page is the unmodified iGEM template",
   "The team's own note says the section awaits content filling",
   "No measurement content anywhere on the page"
  ],
  "red_flags": [],
  "one_line": "An unfilled template page with no measurement content, confirmed against the live frozen wiki.",
  "one_line_zh": "一個未填寫的樣板頁面，沒有任何測量內容，已對照凍結後的線上維基確認。",
  "change_note_en": "No change since the 21 October snapshot and the score holds at 0; I re-fetched the live page to be sure, and it still contains only the iGEM template text and a placeholder note about content filling.",
  "change_note_zh": "與10月21日快照相比未見變動，分數維持0分；為求確認我重新抓取了線上頁面，內容仍只有iGEM樣板文字與一則待填內容的佔位說明。",
  "prev_total": 0.0,
  "rank": 31,
  "ours": false
 },
 {
  "slug": "cataverse-shanghai",
  "team": "Cataverse-Shanghai",
  "url": "https://2026.igem.wiki/cataverse-shanghai/measurement",
  "type": "placeholder page whose body is the word content repeated",
  "c1": 0.0,
  "c2": 0.0,
  "c3": 0.0,
  "c4": 0.0,
  "total": 0.0,
  "j1": "I fetched the live page: 301 words arranged as page 1, page 1-1, page 1-2, page 2, page 2-1 and page 3, whose paragraphs consist of the word content repeated. Nothing is described, so nothing can be repeated.",
  "j2": "No protocol appears on the page.",
  "j3": "No method or finding is present, so there is nothing another team could use.",
  "j4": "No controls, units or calibration are mentioned.",
  "strengths": [],
  "weaknesses": [
   "Body text is filler, the word content repeated",
   "Section headings are placeholders, page 1 through page 3",
   "No measurement content anywhere on the page"
  ],
  "red_flags": [],
  "one_line": "A placeholder page of filler text with no measurement content, confirmed against the live frozen wiki.",
  "one_line_zh": "一個以填充文字構成的佔位頁面，沒有任何測量內容，已對照凍結後的線上維基確認。",
  "change_note_en": "No change since the 21 October snapshot and the score holds at 0; the live page still shows placeholder headings and filler paragraphs rather than any measurement work.",
  "change_note_zh": "與10月21日快照相比未見變動，分數維持0分；線上頁面仍只有佔位標題與填充段落，而非任何測量工作。",
  "prev_total": 0.0,
  "rank": 32,
  "ours": false
 },
 {
  "slug": "hongkong-jss",
  "team": "HongKong-JSS",
  "url": "https://2026.igem.wiki/hongkong-jss/measurement",
  "type": "No measurement page on the wiki",
  "c1": 0.0,
  "c2": 0.0,
  "c3": 0.0,
  "c4": 0.0,
  "total": 0.0,
  "j1": "Checked live on 22 October 2026: /measurement, /measurements, /wet-lab/measurement and /lab/measurement all return HTTP 404, so no measurement work is published.",
  "j2": "No page, so no protocol.",
  "j3": "No page, so nothing transferable.",
  "j4": "No page, so no controls or calibration.",
  "strengths": [],
  "weaknesses": [
   "No measurement page exists at any of the standard paths",
   "Nothing was captured in the text dump either"
  ],
  "red_flags": [
   "All candidate measurement URLs return 404"
  ],
  "one_line": "The team published no measurement page, so there is nothing to score.",
  "one_line_zh": "該隊未建立測量頁面，無任何可評分內容。",
  "change_note_en": "Held at 0.0: live checks of four standard paths all return 404, confirming no measurement page.",
  "change_note_zh": "維持 0.0：四個常見路徑實地查證皆回傳 404，確認沒有測量頁。",
  "prev_total": 0.0,
  "rank": 33,
  "ours": false
 },
 {
  "slug": "icjfls",
  "team": "ICJFLS",
  "url": "https://2026.igem.wiki/icjfls/measurement",
  "type": "No measurement page: the URL serves the team's Design page",
  "c1": 0.0,
  "c2": 0.0,
  "c3": 0.0,
  "c4": 0.0,
  "total": 0.0,
  "j1": "Checked live on 22 October 2026: https://2026.igem.wiki/icjfls/measurement returns HTTP 200 but renders the Design page, and Measurement does not appear in the site navigation. There is no measurement work to repeat.",
  "j2": "No protocol is present. The served content is chassis selection, enzyme choice, circuit design and a four-layer biosafety plan, all written as intentions.",
  "j3": "Nothing is offered for other projects as measurement; the page is design rationale with literature citations.",
  "j4": "No controls, no calibration, no units and no data of any kind.",
  "strengths": [],
  "weaknesses": [
   "No measurement page exists on the frozen wiki",
   "The URL silently serves Design content instead",
   "Project content is design and plan, with no quantitative results anywhere on this page"
  ],
  "red_flags": [
   "The /measurement URL resolves to a different page with no redirect notice, which could be mistaken for a measurement page"
  ],
  "one_line": "There is no measurement page: the address serves the Design page, so nothing can be scored.",
  "one_line_zh": "該隊並無測量頁面，此網址顯示的是設計頁，無任何可評分內容。",
  "change_note_en": "Held at 0.0 after a live check confirmed the measurement URL serves the Design page and Measurement is absent from the navigation.",
  "change_note_zh": "維持 0.0：實地查證確認該網址顯示設計頁，導覽中也沒有測量頁。",
  "prev_total": 0.0,
  "rank": 34,
  "ours": false
 },
 {
  "slug": "lhwhs-missouri",
  "team": "LHWHS Missouri",
  "url": "https://2026.igem.wiki/lhwhs-missouri/measurement",
  "type": "No measurement page: every path returns the project home page",
  "c1": 0.0,
  "c2": 0.0,
  "c3": 0.0,
  "c4": 0.0,
  "total": 0.0,
  "j1": "Checked live on 22 October 2026: /measurement, /measurements, /wet-lab/measurement and /lab/measurement all return the same 551-word home page, so no measurement content exists to repeat.",
  "j2": "No protocol. The home page describes a seven-step planned screening workflow (40 siRNAs against 10 genes, barcoded beads, photoporation, imaging of over 80,000 cells) in future terms, with no procedure, instrument or reagent detail.",
  "j3": "Nothing is published as a method others could adopt; the workflow is a proposal.",
  "j4": "No controls, no calibration, no units, no data.",
  "strengths": [],
  "weaknesses": [
   "No measurement page on the frozen wiki",
   "Project content is a proposed framework with no wet-lab readouts",
   "Clinician quotations are offered in place of measurement evidence"
  ],
  "red_flags": [
   "All measurement-style URLs resolve to the home page, so a reader may mistake the fallback for a real page"
  ],
  "one_line": "No measurement page exists and the project presents a planned screening framework rather than any measurement.",
  "one_line_zh": "該隊沒有測量頁面，專案僅提出篩選流程構想，並無任何量測數據。",
  "rank": 35,
  "ours": false
 },
 {
  "slug": "shsid",
  "team": "SHSID",
  "url": "https://2026.igem.wiki/shsid/measurement",
  "type": "Unfilled page template with placeholder copy",
  "c1": 0.0,
  "c2": 0.0,
  "c3": 0.0,
  "c4": 0.0,
  "total": 0.0,
  "j1": "Checked live on 22 October 2026: the page contains only template text about fonts and layout, repeated headings and placeholder entries reading 'xxxxx'. There is no measurement to repeat.",
  "j2": "No protocol content at all; the body text describes how the template will hold content once written.",
  "j3": "Nothing is offered to other projects.",
  "j4": "No controls, calibration, units or data.",
  "strengths": [],
  "weaknesses": [
   "Page was never filled in before the freeze",
   "Placeholder headings ('1.1.1 xxxxx', 'Business Plan') remain in the measurement page"
  ],
  "red_flags": [
   "Live page is a design template, so the word count in the dump reflects boilerplate rather than content"
  ],
  "one_line": "The measurement page is an unfilled template, so there is nothing to assess.",
  "one_line_zh": "測量頁仍是未填寫的版型範本，沒有任何可評估的內容。",
  "change_note_en": "Held at 0.0: a live check confirms the page is still template boilerplate with placeholder headings.",
  "change_note_zh": "維持 0.0：實地查證確認該頁仍為版型範本，標題仍是佔位文字。",
  "prev_total": 0.0,
  "rank": 36,
  "ours": false
 },
 {
  "slug": "squirrel-guangzhou",
  "team": "Squirrel-Guangzhou",
  "url": "https://2026.igem.wiki/squirrel-guangzhou/measurement",
  "type": "Unedited iGEM prize-description boilerplate",
  "c1": 0.0,
  "c2": 0.0,
  "c3": 0.0,
  "c4": 0.0,
  "total": 0.0,
  "j1": "The page carries the stock iGEM Best Measurement description and a list of inspiration teams from 2025, with no team content, so nothing can be repeated.",
  "j2": "No protocol. The only instructional text is the template line inviting the team to describe their work.",
  "j3": "Nothing is offered to other projects.",
  "j4": "No controls, no calibration, no units and no data.",
  "strengths": [],
  "weaknesses": [
   "Page is unedited template text",
   "Only team-specific content is a list of other teams' pages as inspiration"
  ],
  "red_flags": [
   "The page reproduces the iGEM prize description rather than the team's own work"
  ],
  "one_line": "The page is untouched iGEM boilerplate, so there is nothing to score.",
  "one_line_zh": "這頁仍是 iGEM 原始範本文字，沒有任何可評分的團隊內容。",
  "change_note_en": "Held at 0.0: the page is still the unedited prize-description template with an inspiration list.",
  "change_note_zh": "維持 0.0：該頁仍為未修改的獎項說明範本，僅附上參考團隊清單。",
  "prev_total": 0.0,
  "rank": 37,
  "ours": false
 },
 {
  "slug": "yha-hwfla",
  "team": "YHA-HWFLA",
  "url": "https://2026.igem.wiki/yha-hwfla/measurement",
  "type": "unfilled iGEM measurement template, no project content",
  "c1": 0.0,
  "c2": 0.0,
  "c3": 0.0,
  "c4": 0.0,
  "total": 0.0,
  "j1": "I fetched the live page: 230 words, entirely the iGEM prompt text (Describe your measurement approaches on this page), the Best Measurement blurb and the inspirations list. There is no measurement to repeat.",
  "j2": "No protocol appears on the page.",
  "j3": "No method or result is present, so nothing transfers to another project.",
  "j4": "No controls, standards or calibration are mentioned.",
  "strengths": [],
  "weaknesses": [
   "Page is the unmodified iGEM template",
   "Only the award blurb and inspiration links are present",
   "No measurement content anywhere on the page"
  ],
  "red_flags": [],
  "one_line": "An unfilled template page with no measurement content, confirmed against the live frozen wiki.",
  "one_line_zh": "一個未填寫的樣板頁面，沒有任何測量內容，已對照凍結後的線上維基確認。",
  "change_note_en": "No change since the 21 October snapshot and the score holds at 0; the live page still carries only the iGEM template prompt and the inspirations list.",
  "change_note_zh": "與10月21日快照相比未見變動，分數維持0分；線上頁面仍只有iGEM樣板提示文字與靈感範例清單。",
  "prev_total": 0.0,
  "rank": 38,
  "ours": false
 }
];
