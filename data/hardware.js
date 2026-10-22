// hardware board: every scored high-school team, ranked. Rendered by hardware.html.
window.SCOUT_HARDWARE = [
 {
  "slug": "lambert-ga",
  "team": "Lambert-GA",
  "url": "https://2026.igem.wiki/lambert-ga/hardware",
  "type": "Vapor-X, an 80 dollar automated vacuum dryer for biological and chemical samples",
  "c1": 4.5,
  "c2": 4.5,
  "c3": 4.0,
  "c4": 4.5,
  "total": 17.5,
  "j1": "The need is concrete and quantified: benchtop lyophilisers cost 5,000 to 25,000 dollars, which rules out drying work for school teams and underfunded labs, and the team hit the problem themselves when they needed to store minibinders. Vapor-X answers it with a pressure-reduced chamber at 80.07 dollars in parts, and the listed uses (buffer exchange, concentration, drying reagents for cell-free work) are ordinary synthetic-biology tasks.",
  "j2": "Three independent external user groups, each with feedback that changed something. Mr Moore at UAB asked for a microcentrifuge-tube rack; the team built one, found residual liquid from the conical geometry, tried a heated lid, and reports the attempt as unsuccessful rather than hiding it. A Georgia Tech researcher commented on ease of use and the absence of pre-freezing. A biotechnology student's complaint about opening the jar produced a decision to shrink the heating pad that currently folds over the rim.",
  "j3": "Several independent lines of evidence, with the weak ones labelled. UAB's amino acid analyser detected all 43 measured compounds after drying, 38 within 5 percent of the undried control, with the 3MHIS outlier at 131 percent called out. Georgia Tech reports about 87 percent DNA recovery and GFP expression at roughly 98 percent of the fresh control when both plasmid and lysate were dried. In-house drying curves at four temperatures feed a calculator. GFP fluorescence retention was only 7.2 percent, rising to 26.9 percent with sucrose, and the team states two variables changed so the improvement cannot be attributed to sucrose.",
  "j4": "The most complete package in this batch: an itemised BOM with quantities, prices and purchase links totalling 80.07 dollars, a construction manual PDF that loads, GitLab trees for the MicroPython source, PCB production files, 3D print files and both external labs' raw data, a breadboard schematic, a program logic figure and a table of protective components. No separate hardware licence is stated beyond the wiki's CC-BY.",
  "strengths": [
   "External validation at two independent labs plus a classroom, with raw data published",
   "User suggestions produce documented design attempts, including one that failed",
   "Complete reproduction package: BOM with links, construction manual, code, PCB and print files",
   "Weak and inconsistent results are flagged by the team rather than smoothed over"
  ],
  "weaknesses": [
   "Bradford recovery table is internally inconsistent and the underlying calculations are not resolved",
   "Protein function after drying is only weakly preserved for GFP, with no matched comparison to a lyophiliser",
   "Chamber pressure is never properly measured; the 29 kPa reading sits outside the sensor's range",
   "No shelf-life data yet for the dried minibinders the device was built for"
  ],
  "red_flags": [
   "Reported BSA concentrations do not track mean absorbance, and apparent recoveries exceed 100 percent",
   "Input fuse is 15 A against a 5 A power supply, which the team notes gives no protection at the rated current",
   "The web control interface ships with a published default password, so anyone on the hotspot can drive the heater"
  ],
  "one_line": "Tied with GEMS-Taiwan at 17.5 and placed first, because the handbook asks for utility shown through user testing and two outside labs actually ran this device: external validation at two labs and a classroom with a complete $80 rebuild package (BOM with links, manual, MicroPython, Gerbers, STLs, all verified), held back by weak protein-function data and an unmeasured chamber pressure.",
  "one_line_zh": "與 GEMS-Taiwan 同為 17.5 分，排第一，因為評審手冊重視透過使用者測試證明實用性，而這台儀器確實由兩個外部實驗室操作過：兩個外部實驗室與一個教室實際驗證，80 美元的重製套件完整（附連結的物料清單、手冊、程式、電路板與 STL 檔皆已確認可下載），但蛋白功能數據偏弱，腔體壓力也未實測。",
  "final_note": "Held at 17.5 and now level with GEMS-Taiwan, which fell; GitLab trees (3 STLs, main.py plus firmware, Gerbers with BOM and CPL) and the manual PDF were confirmed, and the external-lab evidence checks out on the page.",
  "finalist": true,
  "rank": 1,
  "ours": false
 },
 {
  "slug": "gems-taiwan",
  "team": "GEMS-Taiwan",
  "url": "https://2026.igem.wiki/gems-taiwan/hardware",
  "type": "Hollow-fiber perfusion bioreactor with in-line OD600 photometer (Pro and Slim), optogenetic light plate and floating hydroponics plate",
  "c1": 4.5,
  "c2": 4.0,
  "c3": 4.5,
  "c4": 4.5,
  "total": 17.5,
  "j1": "Each of the four devices answers a stated measurement or containment problem: in-line OD600 so a long run is never opened or sampled, a 0.2 um membrane so engineered B. subtilis stays inside while the product leaves, a 24-culture LED array for a CcaS/CcaR dose question, and a floating plate so hydroponic seedlings stay at one depth as the medium falls. The photometer is explicitly offered as a reusable instrument for any team needing in-line density. Scored 4.5 rather than 5 because two of the four devices (the hydroponics plate and the bioreactor as built) serve this project's own workflow more than a general synthetic-biology need.",
  "j2": "Three classmates outside the team built the Slim photometer from its assembly guide on 15 and 16 October and three guide changes came out of it, which is a real build test but by schoolmates, not by a lab using the device. The bioreactor's input is expert design review (Prof. Chang Jo-Shu, Owl Lab) rather than outside operation, and the LPA page states it has had no outside user testing.",
  "j3": "The photometer and bioreactor evidence is deep: a 434 h in-line OD600 run with the unusable range marked, silica and TiO2 calibrations against a BioDrop (Pro slope 1.001; Slim R2 0.992, x5.57), a membrane pressure-flow fit, lumen and shell ELISA and DNPH activity, and shell-side platings. It stops short of a 5 because the Slim rests on one silica run with no culture validation, the LPA intensity experiment has not been run, and the hydroponics plate has only a qualitative pre-test.",
  "j4": "All 37 external links on the five hardware pages resolve (checked 22 Oct): STLs for every printed part, assembly guides, user manual, brochure, priced USD materials lists, the photometer app ZIP, LPA firmware and the 434 h raw CSV on GitLab, under CC BY. The gap is the flagship bioreactor: its materials list omits the controller (Arduino UNO Q), mainboard and dosing pump, and the bioreactor page links no control code, so the rig itself cannot be rebuilt from this page alone.",
  "strengths": [
   "Outside builders reproduced the Slim from the guide and the guide changed as a result",
   "434 h in-line run, two calibration standards and a membrane hydraulic model with instrument-read data",
   "Complete file set: STLs, firmware, priced BOMs, assembly guides and raw data, all resolving",
   "Failures and unreliable data ranges are marked rather than smoothed over"
  ],
  "weaknesses": [
   "Outside builders were classmates; no lab outside the team has run any of the devices",
   "Bioreactor controller, mainboard and control code are not listed or linked on the bioreactor page",
   "LPA untested by users and its intensity experiment not run; Slim not yet checked on culture"
  ],
  "red_flags": [
   "Editorial notes left in HTML comments leak into extracted text, though not visible on the rendered page",
   "Owl Lab review date reads 'on 20 and September 22', a garbled date"
  ],
  "one_line": "Tied with Lambert-GA at 17.5 and placed second: the deepest proof of concept among the finalists and a near-complete file set, but its user testing is classmates and expert review, and the bioreactor's controller and code are missing from its reproduction section.",
  "one_line_zh": "與 Lambert-GA 同為 17.5 分，排第二：決賽隊伍中概念驗證最深入、檔案幾近完整，但使用者測試僅限同校同學與專家審查，生物反應器的控制器與程式碼也未列入重現章節。",
  "final_note": "Down 2.0 from 19.5: need to 4.5 because half the suite is project-specific, user testing to 4 because the builders were classmates and the bioreactor input is expert review, proof of concept to 4.5 for the untested LPA and single-run Slim, and documentation to 4.5 because the bioreactor controller and code are absent.",
  "finalist": true,
  "rank": 2,
  "ours": true
 },
 {
  "slug": "hongkong-jss",
  "team": "HongKong-JSS",
  "url": "https://2026.igem.wiki/hongkong-jss/hardware",
  "type": "Portable fluorescence reader (C12880 spectrometer) plus modular soil/water sample extraction platform for a mercury biosensor",
  "c1": 4.5,
  "c2": 4.5,
  "c3": 4.5,
  "c4": 3.5,
  "total": 17.0,
  "j1": "The detector answers a real readout gap for whole-cell fluorescent sensors, and its swappable LED and bandpass filters let other reporters be read; the extraction unit covers sample preparation. Scored 4.5 rather than 5 because the overall system is built around one mercury assay and soil/water matrices.",
  "j2": "User testing drives named changes: farm trials of Extraction Platform V1.0 produced complaints about syringe force and retained liquid, answered by push-button peristaltic pumping and 1 mm bore tubing in V2.0; on-site trials at Blue Girl Organic Farm and Yeung Marine Products led to a red/yellow/green status indicator and a reinforced housing; a 195-person public demonstration (84.1% found the readout clear) pushed them to separate device status from a safety judgement. They also report a stakeholder who did not want a device at all, and state plainly that end-to-end usability is still unvalidated.",
  "j3": "Three experiments on V3.0: a reporter dilution series (2,560 to 15,844 ADC counts, R2 = 0.9998), Hg-exposed cell pellets (2,567 to 24,367 counts with standard errors, R2 = 0.9898) and a centrifugation-free liquid-culture route (2,593 to 2,805 counts, R2 = 0.9524). Extraction V3 adds 20 automated delivery runs inside a 9.5 to 10.5 mL band (CV 1.95% against 7.41% manual), 19 of 20 soil runs within 2% of target ratio, and eight fault-injection tests. The team states that no detection limit or mercury calibration is established, which is the right boundary.",
  "j4": "The Onshape model link, the BOM PDF (2 MB) and the extraction firmware repository resolve, and the page gives a priced core component table, wiring diagrams, a calibration workflow and a CC BY licence. But the Detection Unit code repository (github.com/hkjssplkchc2026/mercurysense) still returns 404, so the main instrument's firmware is not available, and no STL or STEP exports are released.",
  "strengths": [
   "Feedback-to-design loop traced for each user complaint, with the unproven parts named",
   "Quantitative optical validation with matched non-reporter controls and reported R2",
   "Extraction unit validated with delivery CV, dosing error and deliberate fault injection",
   "Priced component list, BOM PDF, Onshape CAD and firmware repository linked"
  ],
  "weaknesses": [
   "No STL/STEP exports released, so the enclosure cannot be reprinted as built",
   "USD 357 component cost is far above the USD 40 target stakeholders asked for",
   "Detector packet alignment and wavelength mapping admitted as unverified"
  ],
  "red_flags": [
   "The Detection Unit code link github.com/hkjssplkchc2026/mercurysense returns 404; the extraction firmware repo resolves"
  ],
  "one_line": "Third: the strongest real-user testing of the finalists (farms, a wet market, a 195-person demonstration, each tied to a version change) and solid optical data, but the detector's firmware link is dead and no printable files are released.",
  "one_line_zh": "第三名：決賽隊伍中真實使用者測試最強（農場、市場與 195 人示範，皆對應到版本修改），光學數據紮實，但偵測器韌體連結失效，也沒有釋出可列印檔案。",
  "final_note": "Down 1.0 from 18: the need drops to 4.5 for a system scoped to one assay, and documentation to 3.5 because the main detector's firmware repository still 404s and no STL/STEP files exist.",
  "finalist": true,
  "rank": 3,
  "ours": false
 },
 {
  "slug": "plklfc",
  "team": "PLKLFC",
  "url": "https://2026.igem.wiki/plklfc/hardware",
  "type": "COLOPrinter, a USD 55 FDM printer converted into a multi-material hydrogel bioprinter, with a low-cost aseptic isolator",
  "c1": 4.5,
  "c2": 3.5,
  "c3": 4.0,
  "c4": 3.5,
  "total": 15.5,
  "j1": "Commercial bioprinters start around USD 5,000 and the team converts a USD 55 printer with six printed parts, which directly addresses accessibility for schools and underfunded labs. The aseptic isolator at about USD 200 answers a real second problem, extruding live GMOs in open air, that standard biosafety cabinets price out of reach for this setting.",
  "j2": "Two industry experts (DreamTec, Link Spider) each drove a mechanical change, and CUHK iGEM BeeTrix acted as beta-testers whose wobble and gear-binding report led to the Geneva mechanism. The tester feedback is qualitative and comes from one peer team, with no measured before-and-after, so this is good iteration rather than structured user testing.",
  "j3": "V1 is characterised properly: offset distance at sharp corners measured under phase contrast microscopy against turning angle, filament width tuned from 150 to 400 um across extrusion multipliers 0.5x to 7x, and a shaker test at 37 C and 50 rpm over nine squares that identifies 4x (300 um filament) as the setting that survives, which then feeds the erosion model. A complex 15.3 x 9.9 x 6.6 mm scaffold and E. coli-laden pills were printed. V2 is admitted non-operational, and V3's improvements are reported qualitatively with no new measurements, which is what keeps this below a 5.",
  "j4": "The G-code translator and simulation repositories resolve on iGEM GitLab with licences, and the COLOPrinter (7.3 MB) and isolator user manual PDFs download from the separate /manuals page. The STLs are on Thingiverse, which refuses automated checks, so they could not be confirmed; there is no itemised priced BOM, no electronics or wiring documentation, and no hardware licence on the page.",
  "strengths": [
   "A real cost argument: USD 55 printer plus printed parts against USD 5,000 commercial units",
   "Quantitative V1 characterisation feeding directly into the erosion model's 300 um parameter",
   "Three external reviewers, each producing a traceable mechanical redesign",
   "STLs, software repositories and multi-part user manuals all published and reachable"
  ],
  "weaknesses": [
   "V3 improvements are described qualitatively with no repeat of the V1 measurements",
   "No itemised BOM with prices and no electronics or wiring documentation",
   "The planned negative-pressure and HEPA/PES filtration in the isolator is future work, so containment is not yet demonstrated"
  ],
  "red_flags": [
   "Thingiverse links could not be verified automatically because the site refuses automated requests; the thing IDs are stated on the page",
   "The isolator currently has UV-C and a sealed shell but no active negative pressure, while the text describes containment of GMOs as solved"
  ],
  "one_line": "Tied with Mingdao at 15.5 and placed ahead of it because its V1 printer was characterised with measured numbers, while its documentation lacks a priced BOM and its STLs sit on an unverifiable third-party site.",
  "one_line_zh": "與 Mingdao 同為 15.5 分，但因 V1 列印機有實際量測數據而排在其前；文件缺少附價格的物料清單，STL 檔放在無法驗證的第三方網站。",
  "final_note": "Down 1.0 from 16.5: user testing to 3.5 because the only hands-on tester was one peer team giving qualitative notes, and documentation to 3.5 for no priced BOM, no licence and STLs that could not be verified.",
  "finalist": true,
  "rank": 4,
  "ours": false
 },
 {
  "slug": "mingdao",
  "team": "Mingdao",
  "url": "https://2026.igem.wiki/mingdao/hardware",
  "type": "Benchtop frame running shredding, one-pot saccharification and fermentation, distillation and condensation",
  "c1": 4.0,
  "c2": 4.0,
  "c3": 3.0,
  "c4": 4.5,
  "total": 15.5,
  "j1": "The need is well chosen and specific to small labs: the cellulosic ethanol pipeline normally needs a shredder, an incubator, a fermenter and a still, and every transfer between vessels loses material and adds variation. Their answer, a rail that carries the vessel and its hotplate between reaction and distillation stations so the mixture is never poured out, is a real design idea rather than a packaging exercise. They also say what they deliberately did not build, the shredder, and why.",
  "j2": "Eight students ran the platform using the wiki page as their only instructions and filled a 13-item questionnaire; per-question score distributions and verbatim comments are published. The testers are unnamed students, and most responses are stated as intentions ('we are labeling the two stations') rather than built and re-tested changes, so this is 4 rather than 4.5.",
  "j3": "The machine was built and each subsystem checked: shredding, temperature holding at setpoint, rail travel, seal integrity under heating, and distillation of a known ethanol-water mixture that was collected. That covers the right things, but every result in the table is qualitative, with no logged temperature trace, no leak rate, no distillate volume or concentration, and no ethanol yield from the biological run, which happened separately.",
  "j4": "A complete and checkable package: laser-cutting drawings at 1:1, a parts and assemblies PDF covering 42 parts, 24 individual STL links, editable STEP and DXF sources on GitLab, an itemised BOM totalling NT$2,868 (about US$90), a seven-step assembly sequence, a safety section and a limitations list. The warning to print the sealing adapter to your own vessel rim rather than a nominal dimension is the kind of detail that makes a rebuild work.",
  "strengths": [
   "Eight-person user test run from the wiki alone, with scores, verbatim complaints and a response to each",
   "Full design file set: 1:1 cut drawings, 24 STLs, editable CAD, itemised priced BOM",
   "Design idea that removes transfers rather than just enclosing existing equipment",
   "Limitations and the failed motorised rail are reported, not hidden"
  ],
  "weaknesses": [
   "All validation results are qualitative; no numbers for temperature stability, leak rate or distillate",
   "No ethanol yield or product measurement from a biological run on the machine",
   "Delamination remains a manual off-machine step, so the pipeline is not actually continuous",
   "Temperature and stirring are manual dials with no logging or closed-loop control"
  ],
  "red_flags": [
   "Validation table reports outcomes as well controlled and worked properly with no measured values",
   "Hotplate stirrer, the central heating and mixing element, is listed at NT$0 as borrowed, so the US$90 total understates a rebuild",
   "Figure 4 shows the earlier motorised version while the text says the vessel is now pushed by hand"
  ],
  "one_line": "Tied with PLKLFC at 15.5 and placed just behind it: the best file set outside the top three (24 STLs, STEP/DXF on GitLab, NT$ BOM) and a real documentation-driven user test, but validation reports no numbers at all.",
  "one_line_zh": "與 PLKLFC 同為 15.5 分但略居其後：前三名以外檔案最完整（24 個 STL、GitLab 上的 STEP/DXF、新台幣物料清單），使用者測試也真實，可惜驗證結果完全沒有數字。",
  "final_note": "Down 0.5 from 16: user testing to 4 because testers are anonymous students and most responses are planned rather than built; all 24 STLs, both PDFs and the GitLab CAD tree were confirmed.",
  "finalist": true,
  "rank": 5,
  "ours": false
 },
 {
  "slug": "nacis-shanghai",
  "team": "NACIS SHANGHAI",
  "url": "https://2026.igem.wiki/nacis-shanghai/hardware",
  "type": "Photostability imaging box with scheduled capture plus a K230 field terminal counting candidate insects on a white surface",
  "c1": 4.0,
  "c2": 3.5,
  "c3": 3.5,
  "c4": 3.5,
  "total": 14.5,
  "j1": "Both devices answer stated experimental needs: a single end-point photograph cannot show when a sample changed, so the box fixes lamp, camera and sample geometry and captures a timed series; and farm interviews reported monitoring devices that record video nobody has time to review, so counting moves onto the device. The imaging box in particular is a traceable-conditions tool other teams running light-exposure work could reuse.",
  "j2": "Engineering expert Mingshao Xue produced two concrete changes: a smaller integrated box with a fixed positioning base and the lamp moved inside the top cover, and the move from nine video-streaming ESP32 nodes to on-device K230 counting with LoRa telemetry after being told to estimate bandwidth and power first. He also caught that leaving the lamp on during capture lets the camera re-expose, which produced the lamp-off then white-fill firmware sequence. Hands-on task tests with lab researchers and growers are reported as completed, but only the workflows assessed are described; no findings, errors or times are given, and no change is traced to them.",
  "j3": "The box runs its lamp-control, timed-capture, storage and ROI analysis chain end to end, with firmware and server code shown. The field terminal has real field evidence: deployment photographs, insects retained on the sticky board, and four cross-date rounds (2, 5, 18, 22 September) with same-image MAE of 1.6 to 2.8 targets per image. The team is scrupulous about what this does not establish: the 48 h endurance figures are acceptance targets not results, the K230 does no species classification, the WS2812 ring is not a spectrally verified UVA source, and the nine-point map is one real node plus eight simulated.",
  "j4": "Two MIT-licensed GitHub repositories exist and are reachable, with the imaging-box repo carrying the server app, static web pages, config and reference images. Wiring, pin assignments, firmware excerpts, ROI defaults, housing dimensions and a per-component cost table in RMB are all on the page, plus a stated version-baseline concept (hardware version, firmware commit, BOM version, SHA-256). Against that, the Hardware2 repo holds only eleven files with no CAD, no STL and no LoRa code, the BOM is called a budget estimate with several items uncosted, and the team states that complete CAD release and independent assembly have not been demonstrated.",
  "strengths": [
   "Unusually disciplined evidence boundaries, including an explicit claim-to-evidence index",
   "Four cross-date counting rounds with reported MAE against manual annotation",
   "Two MIT-licensed repositories that resolve, with server, firmware and web code",
   "Expert review changed both the box geometry and the whole network architecture"
  ],
  "weaknesses": [
   "User task tests are asserted as completed but no results or resulting changes are reported",
   "No CAD or STL released, so the printed housing cannot be reproduced",
   "LoRa link, nine physical nodes and the UVA light source are all untested"
  ],
  "red_flags": [
   "The '>99% reduction in transmission volume' figure is a design estimate against video streaming, which the team labels as such",
   "Heatmap thresholds shown on the page (8/18/50) differ from those in the text (8/18/30), acknowledged but unresolved"
  ],
  "one_line": "Two working prototypes with real counting data, open MIT-licensed code (both repositories confirmed) and careful evidence boundaries, but no CAD and user tests reported without results.",
  "one_line_zh": "兩套可運作的原型，計數數據真實、MIT 授權程式碼兩個倉庫皆已確認，證據邊界清楚，但缺少 CAD，使用者測試也未報告結果。",
  "final_note": "Held at 14.5: both GitHub repositories resolve with firmware and server code, and nothing checked changed the first-round reading.",
  "finalist": true,
  "rank": 6,
  "ours": false
 },
 {
  "slug": "city-of-london-uk",
  "team": "City-of-London-UK",
  "url": "https://2026.igem.wiki/city-of-london-uk/hardware",
  "type": "Portable heated, stirred chassis with LDR fluorescence detection for a cell-free GFP smoke-taint biosensor in grapes",
  "c1": 4.0,
  "c2": 2.5,
  "c3": 3.5,
  "c4": 3.5,
  "total": 13.5,
  "j1": "The device is a genuinely reusable subsystem: a low-power external homeostasis unit holding temperature within 0.3 C while mixing at both 100 mL and 100 uL scales, with filtered optical detection. The team argues correctly that swapping the filter and the voltage-divider resistors retargets it to other wavelengths and sensitivities, so it is not locked to GFP or to grapes.",
  "j2": "The team states outright that no hardware-dedicated user testing was done, which is the honest answer and the reason for the score. The stakeholder input that exists did change the design: Greg Dunn of Campden BRI reframed the product as a triage tool rather than a lab replacement, which released them from maximising sensitivity, and Tony Bernado's request for a low-cost rapid test drove the move to injection-moulded ABS and commodity components. That is useful but it is consultation, not testing.",
  "j3": "Temperature control was verified against digital thermometers to within 0.3 C, both stirring mechanisms were confirmed with dye, power draw was computed against battery capacity, and a fluorescein dilution series was run through the actual optics to produce a calibration table converting raw readings to equivalent concentration, with the raw files published. The detection chain has therefore been exercised on a fluorophore but never on the cell-free biosensor itself, and the predicted 63 to 123 minute detection window is a model output awaiting experimental validation.",
  "j4": "The GitLab repository holds the ESP32 firmware, the Grapher.py visualisation tool, eleven LDR experiment output files covering 0.039 to 10 uM plus two controls, and a complete KiCad project with Gerbers, drill files and schematic, so the board can be ordered as-is. Wiring diagrams and CAD views are on the wiki. What is missing is an itemised BOM with prices (only an under-5.00 GBP chassis estimate), printable CAD files rather than diagrams, and a step-by-step assembly procedure.",
  "strengths": [
   "Full KiCad project with Gerbers and drill files, verified in the repository",
   "Fluorescein calibration series run through the real optics, raw data published",
   "Clear design-iteration log including the servo-to-magnetic-stirrer and insulation decisions",
   "Self-aware about the voltage-divider orientation limiting low-light resolution"
  ],
  "weaknesses": [
   "No user testing of the hardware, by the team's own statement",
   "Detection never tested with the cell-free biosensor, only with fluorescein",
   "No itemised BOM with prices and no downloadable CAD"
  ],
  "red_flags": [
   "The page repeatedly says files are on GitHub while the repository is on iGEM GitLab, which costs a reader time"
  ],
  "one_line": "Tied at 13.5 with HK-League and placed ahead of it for a fluorescein calibration run through the real optics with raw files and an orderable KiCad board, though there is no user testing and no test with the biosensor.",
  "one_line_zh": "與 HK-League 同為 13.5 分，但因以真實光路完成螢光素校正並公開原始檔、PCB 可直接下單而排在其前；缺少使用者測試，也未以生物感測器測試。",
  "final_note": "Held at 13.5: the GitLab tree was confirmed to hold the ESP32 sketch, eleven LDR output files and a full KiCad project with Gerbers.",
  "finalist": true,
  "rank": 7,
  "ours": false
 },
 {
  "slug": "hk-league",
  "team": "HK League",
  "url": "https://2026.igem.wiki/hk-league/hardware",
  "type": "Desktop FDM printer converted to a room-temperature alginate bioprinter, with BioPrintCAD toolpath software",
  "c1": 3.5,
  "c2": 2.5,
  "c3": 3.5,
  "c4": 4.0,
  "total": 13.5,
  "j1": "The need is argued through the project: printed hydrogel geometries with open channels and shorter diffusion distances are proposed as an alternative to packed beads for immobilised-cell metal recovery, and a 400 dollar conversion replaces a commercial bioprinter costing over 10,000 dollars with proprietary consumables. The design rationale for a stationary bench pump and cold needle path is stated in engineering terms.",
  "j2": "The DreamTec visit led to a specific change, the acrylic cabinet enclosure around the motion frame, and a conversation with Dr Keith Kwong set two named next steps. Both are expert consultations that shaped the design rather than user testing: nobody outside the team is reported operating the machine, and the page itself defers usability review to a future drawing-based exercise.",
  "j3": "Real prints exist and are compared against commanded geometry: two serpentine patterns measured at 29.9 x 19.9 mm against 30 x 20, and 41.0 x 29.6 mm against 40 x 30, plus alginate lines on calcium-loaded paper and two shallow lattices containing engineered E. coli. The limits are stated carefully: one specimen per pattern, photographic estimates without perspective correction, no Z movement in the test files, no viability assay, and the quoted 6.3 kPa shear and 93 percent viability belong to a different 3 percent alginate preset.",
  "j4": "BioPrintCAD is released under Apache 2.0 with 22 automated checks, an example project and exported G-code, all of which load, and there are assembly instructions, a commissioning record, a pump and tubing specification, a 14-step build schematic and proposed STL files. Cost is a single 400 dollar estimate rather than an itemised priced BOM, and the base machine is a commercial printer, so the reproducible part is the conversion plus the software.",
  "strengths": [
   "Toolpath software published with a licence, tests and example files that all resolve",
   "Printed patterns compared numerically against the exported G-code",
   "Scope statements consistently separate what was printed from what is proposed",
   "Formulation problem solved in the open: flotation in the calcium bath fixed with 10 percent sucrose"
  ],
  "weaknesses": [
   "No user testing of the machine by anyone outside the team",
   "One specimen per test pattern, with photographic rather than calibrated measurements",
   "Cost is a round estimate with no itemised bill of materials",
   "Cell viability, delivered volume and strand dimensions all still unmeasured"
  ],
  "red_flags": [
   "Shear and viability figures on the page come from a 3 percent alginate preset, not the printed 2 percent plus sucrose ink",
   "The enclosure is drawn with HEPA filter and UV fixture but no airflow or protection performance is recorded",
   "The printed cartridge geometry is proposed only; recovery results come from a separate packed bead stack"
  ],
  "one_line": "Tied at 13.5 with City of London and placed behind it: Apache-licensed, tested toolpath software and a careful print-versus-file comparison, but single specimens, no user testing and no itemised BOM.",
  "one_line_zh": "與 City of London 同為 13.5 分但略居其後：路徑軟體以 Apache 授權開源並附測試，列印與檔案對照謹慎，但每種圖樣只有一個樣本，沒有使用者測試，也沒有逐項物料清單。",
  "final_note": "Held at 13.5: the bioprintcad repository, licence, example G-code and test file all resolve as described.",
  "finalist": true,
  "rank": 8,
  "ours": false
 },
 {
  "slug": "shsid",
  "team": "SHSID",
  "url": "https://2026.igem.wiki/shsid/hardware",
  "type": "Camera and sensor unit reading colour-change beads to trigger drip irrigation for drought response",
  "c1": 3.5,
  "c2": 3.5,
  "c3": 3.0,
  "c4": 3.0,
  "total": 13.0,
  "j1": "The hardware exists to read a biological output that otherwise needs a human to look at it: an ESP32-CAM extracts blue intensity and blue-pixel count from alginate beads expressing amilCP, with light, temperature and humidity as correction terms, and triggers a pump. The argument that machine reading handles colony-to-colony variability in pigment output better than eyesight is the clearest synthetic-biology justification on the page.",
  "j2": "Three rounds of outside input produce named changes: the Dongtan farm visit moved the design to a networked array, expert review produced the dual-threshold design and replaceable camera modules, and Researcher Zhou's points produced perforated retrievable housings. These are visits and reviews rather than people operating the built unit, so 3.5 side by side with the teams that ran real user trials.",
  "j3": "The unit was built and exercised in pieces, with videos: camera blue value and pixel count, environmental sensors, pump start-up repeated over trials, ESP32-CAM wireless link, a browser dashboard updating live, and a hardware run on yeast at 0.3 and 0.6 Osm/L over seven trials that separated the two conditions. The drought formula is a three-term fit of modest provenance, no closed-loop sense-to-irrigate run is shown end to end, and the pump test is on or off rather than flow rate.",
  "j4": "The linked GitHub repository holds more than the page shows: a SolidWorks assembly file, Cinema 4D models, a priced hardware selection spreadsheet (two versions), a firmware project folder and design documents. But the BOM CSVs are near-empty stubs, the reproducibility and user-manual docs are a few hundred bytes, there is no wiring diagram on the page, and the files are in Chinese with no build path through them.",
  "strengths": [
   "Expert and farm feedback is converted into specific, traceable hardware and construct changes",
   "Hardware reading of bead colour is tested against two osmotic conditions rather than asserted",
   "Module-by-module functional tests with video evidence",
   "Operation manual and maintenance steps written for a non-expert user"
  ],
  "weaknesses": [
   "Cost list published only as an image; no itemised priced BOM in text",
   "No wiring diagram, pin mapping, CAD download or licence",
   "Drought equation is a small ad hoc fit and the page admits ambient light shifts the result",
   "No demonstrated closed loop from bead colour through threshold to irrigation"
  ],
  "red_flags": [
   "Soil-improvement text switches between dcsA cellulose and hasA-hasB hyaluronic acid without reconciling which construct the final module uses",
   "The dual-module result reads absence of blue colour as success while admitting nutrient competition is an equally consistent explanation",
   "Hardware parts list names ESP32-S3 as controller while the rest of the page uses ESP32-C3"
  ],
  "one_line": "Tied at 13 with Squirrel-Beijing and placed ahead of it because the built unit was actually run on two osmotic conditions; its repository holds more CAD and costing than the page shows, but reproduction is still hard to follow.",
  "one_line_zh": "與 Squirrel-Beijing 同為 13 分，但因實際以兩種滲透壓條件運行而排在其前；程式庫中的 CAD 與報價比頁面呈現的多，但仍難以照著重製。",
  "final_note": "Unchanged at 13 overall: documentation rose 0.5 after the GitHub repo was found to hold a SolidWorks assembly, priced selection sheets and firmware, while user testing fell 0.5 because the input was visits and reviews, not hands-on use.",
  "finalist": true,
  "rank": 9,
  "ours": false
 },
 {
  "slug": "squirrel-beijing",
  "team": "Squirrel-Beijing",
  "url": "https://2026.igem.wiki/squirrel-beijing/hardware",
  "type": "Field soil-sampling tube kit with phone reading and heatmap, plus a dual-pod spraying retrofit on a consumer drone",
  "c1": 4.0,
  "c2": 3.5,
  "c3": 2.5,
  "c4": 3.0,
  "total": 13.0,
  "j1": "The stated bottleneck is sharp and generalisable: whole-cell biosensors move detection from chemistry to biology, but reading the fluorescent output still needs a plate reader, so the hardware stays in the lab. Their answer, a vacuum blood tube preloaded with lyophilised cells plus phone-based reading, is pollutant-agnostic by design, and the drone retrofit closes the loop from map to treatment.",
  "j2": "Three stakeholder groups changed the design: water-treatment engineers' rejection of notebook records produced the Gen 2 scan-and-photograph workflow, community cleaners' dosing complaints pushed map-driven spraying, and an equipment manufacturer ended the DIY airframe route. These are design consultations, though; nobody outside the team is reported operating the kit, so this is 3.5 by the side-by-side standard.",
  "j3": "The functional evidence is thin and mostly demonstrative. The Gen 2 DIY drone could not take off under full payload, by their own account. Gen 3 reports takeoff, hover, spraying and light-triggering as working but gives no flight time, spray rate, coverage or droplet data. On the detection side there is no accuracy, repeatability or limit-of-detection data for the phone fluorescence reading, no heatmap validated against lab measurement, and the Gen 3 box-free workflow depends on a cold-induction strain that the page says is another team's ongoing work. Demonstrations used LB powder, not the engineered strain.",
  "j4": "There is a complete BOM with CNY and USD prices and purchase channels for both China and the US/EU, substitute parts, a build and user manual PDF and a troubleshooting guide PDF, both of which download and read sensibly, plus a drone compliance section by jurisdiction. What is missing is everything machine-readable: no CAD or STL for any mount, no circuit diagram for the light-sensitive switch, no app source or release, and the manual's assembly section is video timestamps rather than drawings.",
  "strengths": [
   "Clear generalisable gap: field readout for any fluorescent whole-cell sensor",
   "Three stakeholder groups each caused a documented design pivot, including abandoning the DIY airframe",
   "BOM with regional sourcing, substitutes, build manual and troubleshooting guide as PDFs",
   "Light-controlled trigger via the drone's own landing lamp is a neat zero-disassembly solution"
  ],
  "weaknesses": [
   "No quantitative performance data for detection accuracy or spraying",
   "No CAD, circuit schematic or app source released",
   "Gen 3 detection relies on a cold-tolerant strain developed by another team and not yet integrated"
  ],
  "red_flags": [
   "Cost comparisons of 1/50 and 1/500 against lab instruments rest on an unvalidated phone readout",
   "Field demonstrations used LB powder rather than the engineered strain, so no field performance is shown"
  ],
  "one_line": "Tied at 13 with SHSID and placed behind it: a cheap, well-sourced field kit with stakeholder-driven pivots and working PDF manuals, but no measured detection or spraying performance and no CAD or app code.",
  "one_line_zh": "與 SHSID 同為 13 分但略居其後：低成本、採購資訊清楚的田間套件，設計轉向由利害關係人推動，PDF 手冊可下載，但偵測與噴灑沒有量測數據，也沒有 CAD 或 App 程式碼。",
  "final_note": "Down 0.5 from 13.5: user testing to 3.5 because the stakeholder input was consultation, not hands-on use, judged against Hong Kong JSS and Lambert side by side.",
  "finalist": true,
  "rank": 10,
  "ours": false
 },
 {
  "slug": "asij-tokyo",
  "team": "ASIJ-Tokyo",
  "url": "https://2026.igem.wiki/asij-tokyo/hardware",
  "type": "2 L Arduino bioreactor with 1.5 L working volume, closed-loop temperature, aeration, magnetic stirring and SD logging",
  "c1": 4.0,
  "c2": 1.0,
  "c3": 3.5,
  "c4": 4.0,
  "total": 12.5,
  "j1": "A benchtop bioreactor is out of reach for a school, and the team's answer is a 1.5 L working-volume reactor built from an Arduino and parts that are either in a school lab or orderable, holding 30 C within 0.35 C and logging every two seconds while running standalone off a phone charger. That is a clearly useful capability for any team wanting controlled culture conditions without an incubator.",
  "j2": "No user testing appears anywhere on the page or in the manuals. No external expert reviewed the build, no one outside the team ran it, and nothing in the design is traced to feedback. The development log is a record of the team's own failures, which is valuable but is not user feedback.",
  "j3": "The reactor ran a real 49 h yeast experiment against two incubator controls, with raw absorbance at thirteen time points and derived means: bioreactor 1.160 against 0.903 and 0.948 in the later phase, and an average rate of OD change 33.7% and 13.5% above the two controls. Control parameters were measured on the build rather than quoted: 0.35 C band, 30.44 C peak overshoot, 38.5 min warm-up, 23% steady-state duty cycle, 1.6 A pad current and a latching 38 C cutoff confirmed firing. The weaknesses are the team's own: irregular sampling with gaps between 5 and 22 h and 31 and 43 h, no independent replicates, and the flask control at 50 mL in the operating manual against 200 and 1000 mL in the experiment.",
  "j4": "Three PDFs cover build, development log and operating procedure, and all download. The build manual gives a full parts inventory with models and pin assignments, the two-power-domain electrical architecture, the dedicated ground wire and why the first Arduino died without it, safety rules each mapped to a failure, and a leak-test and dry-run procedure. The operating manual gives the pre-run checklist, sampling schedule, log format and shutdown sequence. What is missing is prices anywhere in the parts list, the firmware source itself, and any CAD for the lid port layout.",
  "strengths": [
   "Every control parameter measured on this build rather than quoted from a datasheet",
   "A real 49 h culture against two controls, with raw absorbance published",
   "Development log documents the ground-fault that destroyed the first Arduino and how it presented",
   "Build and operating manuals are detailed enough to follow, with pin-level wiring"
  ],
  "weaknesses": [
   "No user testing or external review at all",
   "Irregular sampling with long gaps and no independent replicates",
   "Parts list carries no prices and the firmware source is not published"
  ],
  "red_flags": [
   "The build manual notes aeration flow was not re-measured with the 0.22 um filter inline, while the hardware summary states a measured 1.5 L/min",
   "Control flask volume differs between the operating manual (50 mL) and the reported experiment (200 and 1000 mL)"
  ],
  "one_line": "An honestly engineered school bioreactor with measured control parameters, a real comparative culture run and three PDF manuals that download, but no user testing, no prices and no published firmware.",
  "one_line_zh": "這台校園自製發酵槽工程誠實，控制參數皆為實測，並完成對照培養，三份 PDF 手冊皆可下載，但沒有使用者測試、沒有價格，也未公開韌體。",
  "final_note": "Held at 12.5: the three manuals on /appendix download and the team GitLab repository holds no firmware, as first recorded.",
  "finalist": true,
  "rank": 11,
  "ours": false
 },
 {
  "slug": "concordia-shanghai",
  "team": "Concordia-Shanghai",
  "url": "https://2026.igem.wiki/concordia-shanghai/hardware",
  "type": "HALO: 3D-printed modular wheelchair-mounted lab storage carrier to make synthetic biology labs accessible",
  "c1": 3.0,
  "c2": 3.5,
  "c3": 3.0,
  "c4": 2.0,
  "total": 11.5,
  "j1": "Lab accessibility for wheelchair users is a real, under-addressed barrier in synthetic biology practice, grounded in a disabled scientist's account.",
  "j2": "Two wheelchair users reviewed CAD (top handles chosen on her advice; rail ideations added for power chairs), then two more users and a Shanghai advocacy group handled the PLA prototype. Their feedback (grip material, front-rigging mount) is recorded but not yet built in.",
  "j3": "Curriculum-based load test from 25% to 120% proof load (6,322.84 g) with deflection of 0 to 2 mm, plus users moving a Petri dish to the incubator. No repeated trials or timed task comparison.",
  "j4": "Priced materials list (1,720 RMB), adaptation dimensions table and an engineering notebook PDF, but no CAD or STL files are linked and the full notebook is offered by email.",
  "strengths": [
   "Real users with different chair types",
   "Load test tied to actual lab payloads",
   "Candid list of what users disliked"
  ],
  "weaknesses": [
   "No CAD or STL files to download",
   "Latest user feedback not yet implemented",
   "Single prototype, single load test"
  ],
  "red_flags": [
   "Says the design is open to the community but no design files are linked"
  ],
  "one_line": "A genuine accessibility tool with real user testing, held back by missing design files.",
  "one_line_zh": "真正的無障礙實驗工具並有實際使用者測試，但缺少可下載的設計檔。",
  "rank": 12,
  "ours": false
 },
 {
  "slug": "denmark-ga",
  "team": "Denmark-GA",
  "url": "https://2026.igem.wiki/denmark-ga/pages/hardware.html",
  "type": "Arduino humidity and temperature chamber with PID control, built to test a coffee-ring malaria diagnostic under field conditions",
  "c1": 3.5,
  "c2": 1.0,
  "c3": 4.0,
  "c4": 3.0,
  "total": 11.5,
  "j1": "The need is specific and well argued: HRP2-deletion regions span 5 to 34 C and 28 to 90% RH, and relative humidity sets the evaporation rate that shapes a coffee ring, so testing the diagnostic in those conditions requires a controlled chamber. A low-cost humidity chamber is reusable by other teams doing droplet or drying work, though it is narrower than a general-purpose instrument.",
  "j2": "There is no user testing. The only external input is correspondence with Martinez-Puig et al., the authors of the paper the chamber is based on, who recommended the DHT22 over the DHT11 for its wider range and tighter tolerance, and that recommendation was adopted. That is useful sourcing, not feedback from anyone using the device.",
  "j3": "This is the strongest part of the page. Humidity reached setpoint in 30 to 90 seconds and held within 3% RH for a full 20 minutes at low, moderate and high setpoints. The heating system is tracked across three builds with trial counts: one heater 30 to 35 minutes to 30 C (n=3), two heaters 20 to 25 (n=3), two heaters with XPS lining 6.3 to 8.5 (n=5), reaching a 34.8 C mean maximum. They also measured the chamber's own artefact, a Sherwood-style correction of 1.65 from five paired droplet drying trials, and fed it back into the model. Limitations (no cooling, ambient dependence, the two systems fighting each other) are stated clearly.",
  "j4": "There is a complete parts table with quantities and per-unit prices totalling about USD 103, a technical drawing of each iteration, an electrical schematic and a described PID approach, plus a note that a soldering iron is required. Against that, the Onshape or STL files are not linked, and although the page says to visit the GitLab repository for the source code, the repository I could reach contains the wiki build only, with no Arduino sketch or web-app code.",
  "strengths": [
   "Quantified performance across three build stages with trial counts",
   "Measured and corrected the chamber's own effect on droplet drying (factor 1.65, n=5)",
   "Itemised BOM with prices totalling about USD 103",
   "Limitations section names cooling, ambient dependence and system conflict"
  ],
  "weaknesses": [
   "No user testing or external review of the device",
   "Chamber code and CAD files are referenced but not actually available",
   "Cannot cool, so the lower half of the target regional range is untestable"
  ],
  "red_flags": [
   "The page header reads 'Denmark-GA iGEM 2025' on a 2026 wiki",
   "Several figures are labelled as drawn or plotted with the help of an AI assistant, and the source code the page points to is not in the linked repository"
  ],
  "one_line": "A cheap chamber with genuinely quantified performance and a measured self-correction factor, let down by the absence of user testing and by code and CAD that are promised but not published.",
  "one_line_zh": "低成本環境箱的效能有確實量測，連裝置本身造成的乾燥偏差都量化並修正，但缺少使用者測試，承諾的程式碼與 CAD 檔案也並未實際公開。",
  "rank": 13,
  "ours": false
 },
 {
  "slug": "bist-china",
  "team": "Bist-China",
  "url": "https://2026.igem.wiki/bist-china/hardware",
  "type": "PyrLac Glow: 3D-printed 16-well rotary dual-LED photoresistor fluorescence reader with Streamlit interface",
  "c1": 3.0,
  "c2": 1.5,
  "c3": 2.5,
  "c4": 3.5,
  "total": 10.5,
  "j1": "A cheap ratiometric fluorescence reader for metabolite biosensors addresses a real point-of-care measurement need.",
  "j2": "Interviews with a doctor and a community hospital shaped scope (concentration not diagnosis, disposable disk), but no user operated the prototype.",
  "j3": "16-position rotation run and LED switching shown; YFP vs water with and without a 520/20 filter, n=3, signal-to-blank 4.1x to 10.6x. Real biosensor proteins not tested, the integrated scan firmware does not exist, and the Streamlit demo uses simulated data.",
  "j4": "Priced BOM (~USD 77), Fritzing circuit, STL files and Arduino test sketches on GitHub, plus Streamlit source. No licence, no assembly steps, and some code links point to misspelled file names.",
  "strengths": [
   "Clear separation of done vs planned",
   "STL files on GitHub",
   "Filter effect shown with replicates"
  ],
  "weaknesses": [
   "No hands-on user testing",
   "Only YFP substitute tested",
   "Software demo uses simulated data"
  ],
  "red_flags": [
   "GitHub links for Arduino_Servo_control and Photoresistor_ADC_Test do not match repo file names (Adruino_, _ACD_), so those links break",
   "No licence in the hardware repo"
  ],
  "one_line": "An honestly scoped reader prototype with files, but only bench-tested on a YFP stand-in and never tried by users.",
  "one_line_zh": "讀取器原型範圍誠實且有檔案，但只用 YFP 替代品做過桌面測試，未經使用者試用。",
  "rank": 14,
  "ours": false
 },
 {
  "slug": "wlsa-shanghaiacademy",
  "team": "WLSA-ShanghaiAcademy",
  "url": "https://2026.igem.wiki/wlsa-shanghaiacademy/hardware",
  "type": "Solar-powered off-grid fermentation monitor and bang-bang temperature controller",
  "c1": 3.0,
  "c2": 0.5,
  "c3": 3.0,
  "c4": 4.0,
  "total": 10.5,
  "j1": "The stated need is reasonable for a fermentation project: continuous gravity, pH, temperature and humidity logging without opening the vessel, running off-grid, with a floating hydrometer replacing an MQ-3 gas sensor whose quoted accuracy was plus or minus 50 percent. The contamination argument for not opening the vessel is the clearest link to laboratory practice. It is a monitoring rig built from catalogue modules rather than a new capability.",
  "j2": "No user testing and no feedback from anyone outside the team. The troubleshooting table reads like hard-won build experience, which is useful, but it is self-reported debugging rather than observation of a user.",
  "j3": "The system was built and run: a continuous 48-hour fermentation with ambient from 27.4 to 37.8 C, held inside the 40-45 C band. That is a real end-to-end demonstration, but it is reported in two sentences with no plot or table, and the team states that every energy figure on the page is still a calculation rather than a measurement.",
  "j4": "Documentation is strong for reproduction: a two-sided wiring table, a thirteen-step assembly sequence with three named destructive mistakes to avoid, a two-point pH calibration procedure with the constants to edit, a troubleshooting table and a BOM broken into category subtotals. Weak points are that the BOM is by category rather than itemised, the firmware is reached only through the team's GitLab root, and no licence is stated.",
  "strengths": [
   "Honest 48-hour continuous run with the control band held across a 10 C ambient swing",
   "Fail-safe reasoning stated at component level: low-trigger relays, fuse before any branch, self-limiting PTC",
   "Assembly, calibration and troubleshooting written so another team could repeat the build",
   "Future-work list names the exact weaknesses, including that the energy budget is unmeasured"
  ],
  "weaknesses": [
   "No user testing or outside feedback at all",
   "The 48-hour validation is asserted with no data, plot or log excerpt shown",
   "BOM is by category subtotal, not itemised with parts and prices",
   "Firmware and post-processing script are not directly linked; only the team repository root is given"
  ],
  "red_flags": [
   "Cost given as about 940 yuan (US$149) in the introduction and 965.93 yuan (US$134) in the BOM, with inconsistent conversion",
   "Measured draw stated as 2 W by day and 3-4 W overnight while the same page says all power figures are calculations",
   "Plus or minus 0.13 percent ABV resolution is derived from the hydrometer's display precision, not from any comparison measurement"
  ],
  "one_line": "A solidly documented off-grid monitoring build with a real multi-day run, but no users, no run data shown and inconsistent cost figures.",
  "one_line_zh": "離網監測裝置的組裝與校正文件紮實、也真的連續跑了兩天，但沒有使用者測試、沒有呈現運行數據，成本數字還前後不一致。",
  "rank": 15,
  "ours": false
 },
 {
  "slug": "basis-china",
  "team": "BASIS-China",
  "url": "https://2026.igem.wiki/basis-china/hardware",
  "type": "Calcium alginate microcapsules for gastric-protected bacterial delivery, plus an ESP32 load-cell feeder and companion app",
  "c1": 2.5,
  "c2": 3.0,
  "c3": 2.5,
  "c4": 2.0,
  "total": 10.0,
  "j1": "The microcapsule addresses a real delivery problem for their engineered probiotic, getting live cells past gastric acid, and the pH-triggered release logic is sound and literature-backed. The smart feeder is further from synthetic biology: it records food intake and organises owner observations, which is health monitoring rather than something that makes work with standard parts easier. Together they cover the product rather than the laboratory.",
  "j2": "Feedback is collected at several points and two changes are traceable. Cat owners said separate programs for device connection and interface were inconvenient, so the team merged them into a single executable, and that the AI responses felt slow, so output was changed to streaming. Earlier, owners, iGEM peers at the South China meeting and Professor Wang pushed them off the freeze-dried powder concept toward an encapsulated formulation. The feeder itself, however, was never put in front of a cat owner in use.",
  "j3": "The microcapsule work carries real data: bead diameters by dropper opening (1.989 to 4.892 mm, n=10 each, with 6 mm giving amorphous beads), dissolution behaviour across pH, and plate counts showing 1.76 x 10^5 CFU/mL for intestinal fluid, no colonies after gastric acid alone, and 1.186 x 10^5 CFU/mL after sequential treatment, giving the roughly 67% protection figure. The feeder is weaker: the verification log ticks five tasks but reports no reference values, errors or variation, and handling and interrupted operation are still 'to be verified'.",
  "j4": "The GitLab repository exists and holds the application (main.py, ui2.py, launcher.py, the executables and the Healthy Habits PDF), which covers the software. For the hardware there is no wiring diagram, no pin assignment, no load-cell or HX711 calibration procedure, no enclosure CAD and no BOM with prices, so the 'accompanying hardware project files' promised on the page are not in the repository. The microcapsule protocol is described well enough to repeat.",
  "strengths": [
   "Microcapsule survival demonstrated with CFU counts across three treatment groups",
   "Bead size reproducibly controlled by dropper opening, with the failure point identified",
   "Two user complaints produced concrete software fixes",
   "Application source and executables published in a reachable repository"
  ],
  "weaknesses": [
   "The feeder verification log reports ticks rather than measurements",
   "No wiring, calibration procedure, CAD or BOM for the hardware",
   "Feeder never trialled by a cat owner in real use"
  ],
  "red_flags": [
   "The repository described as holding hardware project files contains only the application; no hardware files are present",
   "Group labelling in the gastrointestinal table does not match the result text (group 1 is defined as gastric acid only but reported as intestinal fluid)"
  ],
  "one_line": "Solid, quantified microcapsule work paired with a feeder prototype that is documented as software only, with no hardware files and no measured weighing performance.",
  "one_line_zh": "微膠囊部分數據紮實且量化，但智慧餵食器僅有軟體文件，沒有硬體檔案，秤重效能也缺乏實測數據。",
  "rank": 16,
  "ours": false
 },
 {
  "slug": "puiching-macau",
  "team": "PuiChing-Macau",
  "url": "https://2026.igem.wiki/puiching-macau/hardware",
  "type": "Two-channel servo capsule dispenser with replaceable cartridge, display and buttons, aimed at scheduled dosing for older adults",
  "c1": 1.5,
  "c2": 2.5,
  "c3": 2.5,
  "c4": 3.5,
  "total": 10.0,
  "j1": "Framed as scheduling lab additions, but the built device dispenses whole capsules for older adults and the page itself says a wet-lab version would need a different module; the link to synthetic biology work is weak.",
  "j2": "Care-home residents tried an earlier powder dispenser; reported difficult refilling and a small screen led to capsules, a removable cartridge and a larger display in V3. A MUST consultation on clumping also drove the change. No retest with residents after V3.",
  "j3": "Whole-load trials with 10 runs per condition: early prototype 3/10 and 2/10, newer prototype 10/10 (4 capsules) and 7/10 (8 capsules). Scheduling and Bluetooth-to-hardware operation are not integrated.",
  "j4": "GLB CAD for V1 to V3, SVG wiring with pin tables, BOM CSV (no prices, several TBC), print settings, MIT demo code and an Apache 2.0 firmware repo with tests on iGEM GitLab. No STL or 3MF print files.",
  "strengths": [
   "Honest 23-week diary with failures",
   "Repeated load trials with counts",
   "Licensed firmware repo with tests"
  ],
  "weaknesses": [
   "Weak tie to synthetic biology",
   "BOM unpriced and partly unconfirmed",
   "Only mesh GLB, no printable files"
  ],
  "red_flags": [],
  "one_line": "Well documented and honestly tested capsule dispenser, but it is an elder-care device rather than a synthetic biology tool.",
  "one_line_zh": "膠囊分配器文件完整、測試誠實，但屬於長者照護裝置，與合成生物學工具的關聯薄弱。",
  "rank": 17,
  "ours": false
 },
 {
  "slug": "mpayf-usa",
  "team": "MPAYF-USA",
  "url": "https://2026.igem.wiki/mpayf-usa/hardware",
  "type": "Three-generation 3D-printed webcam diffraction-grating spectrometer for reading GFP from a 2,4-DNT biosensor",
  "c1": 3.0,
  "c2": 2.5,
  "c3": 1.5,
  "c4": 2.0,
  "total": 9.0,
  "j1": "A low-cost portable fluorescence reader for a GFP biosensor is a real need, and they aim at a general spectroscopy platform.",
  "j2": "An ecologist's field trial reported reading drift from hand-holding and sample position, which drove the sealed Generation 3 shell; an instrument engineer shaped the light source and cooling. Testing by classmates is anecdotal.",
  "j3": "One comparison table against a plate reader (R2 0.998), but the device column is labelled 'Predicted Reading' with rounded values and no replicates or raw spectra; a broadband halogen source with no excitation filter makes a GFP fluorescence reading questionable.",
  "j4": "Priced BOM (~USD 10), print parameters, user manual and troubleshooting PDFs. STEP files only by email and the software is third-party Theremino code, not shared on the page.",
  "strengths": [
   "Clear stakeholder-to-generation table",
   "Low priced BOM",
   "User manual and troubleshooting guide"
  ],
  "weaknesses": [
   "Validation data look modelled, not measured",
   "CAD only by email",
   "No excitation filtering for fluorescence"
  ],
  "red_flags": [
   "Device readings are labelled 'Predicted Reading', so the validation may not be measured data",
   "BOM omits the diffraction grating, the core optical part",
   "Claims STEP upload and file links are not allowed, yet CAD is withheld; third-party Theremino PDF re-hosted"
  ],
  "one_line": "A good iteration story, but the key validation reads as predicted rather than measured and the build files are not on the wiki.",
  "one_line_zh": "迭代故事完整，但關鍵驗證數據看似推估而非實測，且建構檔案未放在 wiki 上。",
  "rank": 18,
  "ours": false
 },
 {
  "slug": "otia-hangzhou",
  "team": "OTIA-Hangzhou",
  "url": "https://2026.igem.wiki/otia-hangzhou/hardware",
  "type": "Three-generation light-tight box with air pump and smartphone long-exposure imaging for a bioluminescent VOC biosensor, plus GrainLens Android app",
  "c1": 3.0,
  "c2": 0.5,
  "c3": 3.0,
  "c4": 2.5,
  "total": 9.0,
  "j1": "A cheap reader for weak bioluminescence from whole-cell VOC sensors meets a real synthetic biology measurement need.",
  "j2": "The page states no field user testing has been done; changes were driven by internal test failures (LDR, OPT101).",
  "j3": "21 paired samples (7 VOC levels x 3 biological replicates) against a plate reader gave R2 0.9717; earlier LDR failure is reported with counts. The airflow and imaging subsystems have not been tested together.",
  "j4": "Priced BOM (305.64 CNY), wiring diagrams, one STL of the assembled device, and the app APK plus source on iGEM GitLab. Firmware shown only as a screenshot; no per-part STLs or licence for the app.",
  "strengths": [
   "Comparison to plate reader with replicates",
   "Candid record of failed detector routes",
   "App source and APK published"
  ],
  "weaknesses": [
   "No user testing",
   "Subsystems not integrated",
   "Single combined STL only"
  ],
  "red_flags": [],
  "one_line": "Solid imaging validation against a plate reader, but no user testing and an unintegrated device.",
  "one_line_zh": "影像驗證與酶標儀對比扎實，但沒有使用者測試，裝置也未整合。",
  "rank": 19,
  "ours": false
 },
 {
  "slug": "bk-denmark",
  "team": "BK-Denmark",
  "url": "https://2026.igem.wiki/bk-denmark/hardware",
  "type": "Five-generation concept design for a single-use methanol test device for drinks, with an ultrafiltration colour-reduction study",
  "c1": 3.0,
  "c2": 2.5,
  "c3": 2.0,
  "c4": 1.0,
  "total": 8.5,
  "j1": "The problem is well framed and specific to deploying a biosensor outside the lab: reagents and engineered enzymes must never reach the drink, so the design is driven by containment, and colored drinks threaten a colorimetric readout. That is a genuine constraint for whole-cell and enzyme sensors generally, though the device is single-purpose rather than a reusable tool for other teams.",
  "j2": "Human practices did steer the design: interviews with medical professionals prioritised avoiding false negatives, Bangkok questionnaires found a third cite cost and half cite social awkwardness, and that feedback killed the two-piece pipette design and produced the palm-shaped discreet exterior. But no user handled any version, so this is requirement-gathering rather than user testing of hardware.",
  "j3": "Only one piece of functional evidence exists, and it is not the device: an ultrafiltration study with a 30 kDa Amicon filter giving a mean 73.19% absorbance reduction across three dyes (blue 48.65%, yellow 93.12%, red 77.80%) and 97.09% for a real carbonated alcoholic drink, with calibration curves at named wavelengths. The five generations themselves were never built beyond Tinkercad prints of generation 4; the final integrated cassette exists only as a Blender render, and the ball valve, membrane and detection scale are untested.",
  "j4": "There are no CAD files, no STL, no dimensioned drawings, no BOM and no assembly instructions. The under-5 GBP equivalent cost claim is not itemised. A reader could not build any generation from this page; the design is described in prose and renders only.",
  "strengths": [
   "Containment and regulatory reasoning drove each generation change",
   "Ultrafiltration colour-reduction experiment with calibration curves and a real beverage",
   "Honest that colour reduction only helps because the readout is binary"
  ],
  "weaknesses": [
   "No working prototype; the final design is a render",
   "No CAD, BOM or assembly documentation at all",
   "No user ever handled the device"
  ],
  "red_flags": [
   "The device animation is stated to be made with ChatGPT and 'not an accurate representation', which is honest but leaves the flow path unverified"
  ],
  "one_line": "A thoughtful five-stage design narrative with one real filtration experiment attached, but nothing built, nothing user-tested and no files anyone could reproduce.",
  "one_line_zh": "五個世代的設計脈絡思考完整，並附上一項真實的過濾實驗，但沒有實際製作、沒有使用者測試，也沒有任何可供重現的檔案。",
  "rank": 20,
  "ours": false
 },
 {
  "slug": "boston-boslab",
  "team": "Boston-BOSLab",
  "url": "https://2026.igem.wiki/boston-boslab/hardware",
  "type": "DIY single-channel fluorometer for fluorescein and EGFP using a TSL2591 and 90 degree optics",
  "c1": 3.5,
  "c2": 1.0,
  "c3": 1.5,
  "c4": 2.5,
  "total": 8.5,
  "j1": "The need arose from their own problem, measuring binding without access to a plate reader, and generalises well: a roughly 80 dollar parts estimate against a commercial instrument, with an interchangeable parts list so a lab can substitute what it already owns. The 90 degree geometry with a longpass filter is explained in the right terms, as keeping the much brighter excitation out of the detector.",
  "j2": "No user testing. Iterations on the sample holder (a hole in the top panel, then a bent copper wire, then a cut-down pipette tip rack) are internal build decisions, and no one outside the team is reported using the instrument.",
  "j3": "One comparison only: 100 micromolar fluorescein read about 103 counts against an 88-count empty-chamber background, a ratio of 1.17, over about ten seconds with variation of at most one count. The team states that this establishes neither sensitivity nor reproducibility, that there is no dilution series, calibration curve or limit of detection, and that roughly 85 percent of the signal is background. It also does not do FRET, the readout it was designed for.",
  "j4": "There is a parts table with picks, approximate costs and how each was obtained, plus a downloadable buying guide, and the enclosure and filter placement are described in prose. Missing are any CAD or cut files for the eight-panel box, the firmware actually used beyond a reference to an Adafruit sample library, and the gain and integration-time settings, whose absence the page itself says prevents reproduction of the result.",
  "strengths": [
   "Honest accounting of the background problem and what the single measurement does not prove",
   "Interchangeable parts list aimed at labs that already own some components",
   "Concrete, testable fixes proposed for the background: excitation bandpass, lower LED drive",
   "Optical geometry choice explained rather than copied"
  ],
  "weaknesses": [
   "A single measurement at one concentration; no dilution series, calibration or detection limit",
   "No user testing or external use",
   "Sensor gain and integration time unrecorded, so the reading cannot be reproduced",
   "No enclosure drawings, cut files or firmware published"
  ],
  "red_flags": [
   "About 85 percent of the sample reading is background light, so the 1.17 signal ratio is close to the noise floor of the design",
   "The roughly 80 dollar figure mixes bought and already-owned parts; the team says it is not a from-zero quote",
   "The instrument does not measure FRET, the purpose it was designed for, and the page says so"
  ],
  "one_line": "A frank, cheap proof-of-concept fluorometer that works at one point and says so, but it was never user tested and cannot be reproduced from what is published.",
  "one_line_zh": "一台便宜且誠實的螢光計雛型，只在單一濃度下驗證並如實說明，但未經使用者測試，現有文件也無法重現結果。",
  "rank": 21,
  "ours": false
 },
 {
  "slug": "greatbay-scie",
  "team": "GreatBay-SCIE",
  "url": "https://2026.igem.wiki/greatbay-scie/hardware",
  "type": "Roll-on deodorant packaging concept and formulation for protein actives, with accessibility features and cost model",
  "c1": 2.5,
  "c2": 3.0,
  "c3": 1.5,
  "c4": 1.5,
  "total": 8.5,
  "j1": "The stated need is real for their own product: proteins adsorb and aggregate at polymer and air-liquid interfaces, so packaging choice decides whether the actives survive. The reasoning is literature-backed (PP ranked poorly for protein stability, hydrophilic inner coating, smaller ball to shrink the air-liquid interface). But this is product packaging and formulation, not hardware that makes work with standard parts easier, faster or more accessible for other synthetic biology teams.",
  "j2": "Consultation is wide and specific: formulation expert Mr Su, skincare expert Ms Zhu, packaging expert Ms Chen, an EMC director, KleanK (Yinwei Care), plus a 486-response domestic survey and a 105-response international survey across 19 countries that fed the roll-on choice and the fragrance profile. What is missing is testing of the object itself: nobody held a prototype bottle, so the feedback shapes a format decision rather than an iterated device.",
  "j3": "No physical prototype is reported as built or tested. Protein-in-bottle stability, fabric staining, delivery volume per swipe and seal integrity are all listed as a future validation roadmap with target criteria, and the preservative system is explicitly 'anticipated rather than validated' pending ISO 11930. The accessibility features (braille, press-to-open hinged lid, grip texture) are renders inspired by Degree Inclusive, with no handling test by a low-vision or limited-dexterity user.",
  "j4": "There is a detailed per-bottle cost table with supplier quotes and a stated CNY-USD planning rate, which is more than most teams give. There are no CAD or STL files, no drawings with dimensions beyond a bottle spec line, no assembly or filling protocol and no licence statement for the design, so another team could not reproduce the container.",
  "strengths": [
   "Format choice argued from protein stability, with named experts opposing specific options",
   "Itemised formulation and packaging cost model with supplier quotes",
   "Honest labelling of the preservative system as unvalidated"
  ],
  "weaknesses": [
   "Nothing was built or physically tested; all validation is future work",
   "No CAD, drawings or files, so the design cannot be reproduced",
   "Accessibility features are concept renders with no user trial"
  ],
  "red_flags": [
   "Terpenoid ester cost of roughly 2,300-3,300 CNY per gram makes the headline 'about 1.18 CNY per bottle' true only because the fragrance is excluded from it"
  ],
  "one_line": "A well-researched packaging and formulation decision document rather than built hardware, strong on expert input and costing but with no prototype, no test data and no reproducible files.",
  "one_line_zh": "這比較像是資料充分的包裝與配方決策文件而非實作硬體，專家訪談與成本估算紮實，但沒有實體原型、測試數據或可重現的檔案。",
  "rank": 22,
  "ours": false
 },
 {
  "slug": "shsbnu-china",
  "team": "SHSBNU-China",
  "url": "https://2026.igem.wiki/shsbnu-china/hardware",
  "type": "Improved fermenter (continued from prior team), self-made 12-well absorbance reader, and a 3D-printed microscope with Gram staining kit",
  "c1": 3.0,
  "c2": 2.0,
  "c3": 2.0,
  "c4": 1.5,
  "total": 8.5,
  "j1": "Low-cost fermenter, plate reader and microscope all serve school-lab synthetic biology work.",
  "j2": "A BNU teacher's advice moved the reader filter away from the light source; the microscope user-feedback section is an unfilled template with '[Name]' and '[actual words]'.",
  "j3": "One absorbance comparison against a commercial reader across five samples, no replicates or statistics; no fermenter performance data; microscope images only.",
  "j4": "Fermenter parts list and print/cut settings; no CAD, STL or code links, and design-file links are literal placeholders ('[iGEM upload link] | [GitHub]').",
  "strengths": [
   "Several practical lab tools",
   "Reader iteration V1 to V5 is clear",
   "Fermenter sterilisation split is sensible"
  ],
  "weaknesses": [
   "Unfilled template text throughout PrintScope section",
   "No files to build from",
   "Thin validation data"
  ],
  "red_flags": [
   "Microplate reader section is headed 'iGEM 2025 Hardware Project', suggesting reused prior-year work",
   "Unfilled placeholders: '[Name]', '[actual words]', '[ ? ]' cost and print time, '[iGEM upload link]'",
   "Fermenter is an upgrade of a previous team's device"
  ],
  "one_line": "Useful tools, but placeholder text and possibly reused 2025 content undermine trust.",
  "one_line_zh": "工具實用，但未填的範本文字與疑似沿用 2025 年內容削弱可信度。",
  "rank": 23,
  "ours": false
 },
 {
  "slug": "yk-pao",
  "team": "YK Pao",
  "url": "https://2026.igem.wiki/yk-pao/hardware",
  "type": "Two-chamber electrolysis cell for sequential potential-controlled recovery of Pb, Cd and Zn from biomass",
  "c1": 4.0,
  "c2": 0.5,
  "c3": 1.0,
  "c4": 3.0,
  "total": 8.5,
  "j1": "The gap the hardware fills is stated precisely: biosorption captures metals but leaves them on the biomass, and precipitation returns a mixed sludge, so the device adds acid release plus stepwise potential control to return each metal separately. The three hardware requirements are derived from the biology (retain the cells behind a UF membrane, release the bound metals with acid, recover them one at a time), which is the right chain of reasoning.",
  "j2": "Essentially absent. No operator, researcher or stakeholder is reported using or commenting on the device, and the only mention of outside input is a future-work line about publishing files so others can reproduce it. The user manual is written for a user who has not yet been observed.",
  "j3": "There is no measured result anywhere on the page. Every potential, residual concentration and window comes from the Nernst equation for ideal solutions, and the page itself says the set-points are starting values to be confirmed by LSV/CV and ICP or AAS, which was not done. Version 1's listed problems imply something was assembled, but Version 2's dimensions and mass are given as design values and targets, and no run, deposit or recovery figure is reported.",
  "j4": "Documentation is the strongest part: full Arduino source in the appendix, a complete pin-by-pin wiring table, an error budget for the ADC and reference electrode, a build and calibration appendix with an offset procedure, and module specifications with materials and areas. Missing are any CAD or drawing files, a priced bill of materials, and a licence, so the tank and membrane stack must be rebuilt from prose.",
  "strengths": [
   "Clear derivation of hardware requirements from the engineered cells' behaviour",
   "Separation potentials, window edges and hydrogen interference worked through with citations",
   "Complete firmware listing, wiring table and calibration procedure",
   "Measurement error budget distinguishes ADC limits from reference drift and IR drop"
  ],
  "weaknesses": [
   "No experimental data at all: no electrolysis run, deposit or residual concentration",
   "No user testing or feedback of any kind",
   "No CAD files, drawings or priced BOM; licence promised as future work",
   "Operator must hold the potential by hand on a DC supply, with no closed-loop control"
  ],
  "red_flags": [
   "All quoted residual concentrations are ideal-solution calculations presented alongside WHO limits",
   "Version 2 mass and size given as targets, so it is unclear whether the current cell was built",
   "The acknowledged 39 percent cathodic efficiency for zinc at pH 3 is not carried into any recovery estimate"
  ],
  "one_line": "Thorough electrochemical and electronic design with publishable build notes, but no measurements, no users and no fabrication files.",
  "one_line_zh": "電化學與電子設計完整、組裝與校正紀錄可供他人參考，但完全沒有實測數據、沒有使用者測試，也沒有製造檔案。",
  "rank": 24,
  "ours": false
 },
 {
  "slug": "wuxi-dsas",
  "team": "WUXI-DSAS",
  "url": "https://2026.igem.wiki/wuxi-dsas/hardware",
  "type": "Paper design for a single-use microfluidic chip and reader for urinary gentisic acid screening",
  "c1": 4.0,
  "c2": 1.0,
  "c3": 1.0,
  "c4": 2.0,
  "total": 8.0,
  "j1": "The need is well posed and the hardware answers it at the right level: a whole-cell biosensor cannot leave the lab without metering, reconstitution of dried medium, 37 C control, a defined optical path and a creatinine reference. Specific constraints are traced back to the biology (1:1 buffered dilution to fix chamber pH, cells loaded above culture density because a static chamber does not grow them, a read point on the fluorescence plateau), and the page states which biology decisions the hardware forced.",
  "j2": "No user testing. Feedback came from teammates and instructors inside a design-model-review-learn loop, and the page says so. There is no contact with clinicians, patients or operators about the device itself, and the interface wording and tiered report, which would be the natural thing to test with users, were not put in front of any.",
  "j3": "The page states plainly that no physical device was built and that performance figures are design targets. The mini-program demo runs a 30-second simulated run. The engineering content is drawings, fluidic and optical reasoning and control logic, with a prioritised list of validation experiments; none has been performed, so utility and functionality are unproven.",
  "j4": "The hardware parameters PDF loads and tags each value SPEC, TARGET or EST, which is an honest and useful artefact, and cost tables are itemised for both chip and enclosure. But there are no CAD files, no STL, no schematic or firmware, and no assembly procedure, so another team could reproduce the reasoning but not the object. Dimensions appear only inside figure captions and prose.",
  "strengths": [
   "Design decisions are traced to the biology and to failures in earlier generations",
   "Parameters document separates specifications, targets and literature assumptions",
   "Interference handling is thought through: blank chamber, ascorbate oxidase, temporal and spatial baselines",
   "Prioritised validation list states what each experiment would settle"
  ],
  "weaknesses": [
   "No prototype, so no measured performance of any kind",
   "No user testing or feedback from intended operators",
   "No CAD, STL, schematic or code published",
   "Provisional cutoffs rest on small published cohorts the team acknowledges are unvalidated"
  ],
  "red_flags": [
   "All performance figures are design targets, stated by the team as such",
   "Tenfold creatinine dilution carried over from an unrelated picric acid method and described as speculative",
   "Mini-program demonstration is a simulated run with a fixed access code, not device output"
  ],
  "one_line": "An unusually disciplined paper design with honest labelling throughout, but nothing was built, tested or published as files.",
  "one_line_zh": "紙上設計相當嚴謹、對不確定處標示誠實，但沒有做出實體、沒有任何實測，也沒有釋出可重建的檔案。",
  "rank": 25,
  "ours": false
 },
 {
  "slug": "ghcis",
  "team": "GHCIS",
  "url": "https://2026.igem.wiki/ghcis/hardware",
  "type": "ARGUS: PC-FR printed heating enclosure with LED and smartphone port for RPA and toehold colorimetric strip card",
  "c1": 3.0,
  "c2": 0.0,
  "c3": 1.0,
  "c4": 3.0,
  "total": 7.0,
  "j1": "A cheap 37 C incubator with fixed lighting for smartphone reading of paper toehold assays meets a field-diagnostics need.",
  "j2": "No user testing; user trials are listed under future plans.",
  "j3": "Five half-scale fit iterations and a prototype-1 to 2 change table, but no temperature measurements, no imaging tests and no assay run in the device.",
  "j4": "Priced BOMs for both prototypes, controller settings, and STEP/STL files on the contribution page; no wiring diagram or test protocol.",
  "strengths": [
   "Design files published as STEP/STL",
   "Priced BOM",
   "Reduced-scale print iteration"
  ],
  "weaknesses": [
   "No temperature characterisation",
   "No assay run in device",
   "No users"
  ],
  "red_flags": [],
  "one_line": "Neat, documented enclosure, but never shown to hold temperature or read an assay.",
  "one_line_zh": "外殼設計整齊且有文件，但未證明能控溫或判讀檢測結果。",
  "rank": 26,
  "ours": false
 },
 {
  "slug": "khanlab-bayarea",
  "team": "KhanLab-BayArea",
  "url": "https://2026.igem.wiki/khanlab-bayarea/hardware",
  "type": "Concept for a meat-tray absorbent pad replaced by a hydrogel biosensor behind a Janus membrane",
  "c1": 3.0,
  "c2": 1.5,
  "c3": 0.5,
  "c4": 1.5,
  "total": 6.5,
  "j1": "The need comes from a real observation: a food pantry discards more chicken than it distributes because spoilage is judged by smell and sight. Replacing the absorbent pad with a sensing layer is a sensible deployment route for a cadaverine biosensor, and the material reasoning is specific, with agarose chosen over alginate because chelators in meat exudate strip calcium crosslinks.",
  "j2": "Stakeholder conversations with West Valley Community Services, grocery stores and restaurants set the form factor and ruled out a gauze pad, test strip and lateral-flow assay. That is useful problem framing, but no prototype was put in front of any of them, and no feedback on a made object is reported.",
  "j3": "Nothing was built or tested. Assays were run only at room temperature for plasmid characterisation, and the page says cold-temperature behaviour, response speed and real-world performance all need testing. The honest note that agarose pore size cannot exclude E. coli, with containment left to the membrane, is good reasoning but not evidence.",
  "j4": "There is a materials table with suppliers, prices and the matching FDA regulation for each component, and an EPA TSCA Tier 1 analysis mapping four requirements to design features. There are no dimensions, no drawings or CAD, no casting or assembly protocol with parameters, and no licence, so the pad could not be made from this page.",
  "strengths": [
   "Problem and form factor come directly from food pantry and retailer conversations",
   "Hydrogel and membrane material choices are justified against failure modes in meat exudate",
   "Regulatory mapping against TSCA Tier 1 and per-material FDA citations",
   "States plainly that agarose alone cannot exclude the bacteria"
  ],
  "weaknesses": [
   "No prototype, no fabrication and no measurement of any kind",
   "No user testing of a built sensor with the stakeholders who framed the need",
   "No dimensions, drawings, CAD or assembly protocol",
   "Cold-chain performance, the actual operating condition, is entirely future work"
  ],
  "red_flags": [
   "DMSO casting solvent is acknowledged as needing removal from a food-contact part with no protocol or limit given",
   "Supplier prices are bulk trade listings (for example PET film at about 1 dollar per 500 kg) that do not translate to a per-unit cost",
   "Kanamycin and IPTG are included in a food-contact pad with only the assertion that they do not interact with food products"
  ],
  "one_line": "A well-motivated packaging concept with careful material and regulatory reasoning, but nothing built, tested or documented well enough to reproduce.",
  "one_line_zh": "包裝概念的動機清楚、材料與法規推理也用心，但沒有做出實體、沒有測試，文件也不足以重現。",
  "rank": 27,
  "ours": false
 },
 {
  "slug": "sehs",
  "team": "SEHS",
  "url": "https://2026.igem.wiki/sehs/hardware",
  "type": "Compact 470 nm blue-light detection box with heated stage and USB microscope for organoid chip imaging",
  "c1": 2.5,
  "c2": 0.5,
  "c3": 2.5,
  "c4": 1.0,
  "total": 6.5,
  "j1": "The need is stated reasonably: plate readers are large and costly and do not suit miniaturised organoid chips, so a chip-sized chamber with 37 C control, blue excitation and imaging would help. But the literature review compares four alternatives without establishing what measurement the team actually could not make, and the device is tied to their own chip rather than offered as a general tool.",
  "j2": "No user testing of any kind is reported. The page cites three journal articles and compares commercial options, but no researcher, teacher or student is recorded using the device, and no feedback changed the design. The two design pivots described (buying an industrial heating stage instead of building Arduino control, buying a digital microscope instead of a printed lens tube) came from internal difficulty, not from users.",
  "j3": "The device was built and three modules were tested with named procedures: no-load heating time, 30 minutes of stability sampled every 5 minutes, 40 minutes of continuous operation, repeated start-stop cycles, LED illumination and uniformity, 20 minutes of LED endurance, and imaging of a graduated scale and a blank chip. The problem is that the results are entirely qualitative. No temperature value, fluctuation range, time-to-setpoint, illuminance or resolution figure appears anywhere, and the team states that biological validation with fluorescent standards has not been done.",
  "j4": "SolidWorks models were made and STL files exported for printing, but nothing is linked or downloadable. There is no BOM, no prices, no wiring diagram, no pin assignment, no code and no assembly instructions, and the three references are Chinese-language journal articles rather than build sources. Another team could not rebuild this.",
  "strengths": [
   "A real device was built and three modules were systematically exercised",
   "Known limitations named: PID oscillation, uneven illumination, lens coaxial misalignment",
   "A concrete five-area iteration plan including a diffuser and an emission filter"
  ],
  "weaknesses": [
   "Every test result is qualitative; not one measured number is given",
   "No user testing or feedback at all",
   "No files, BOM, wiring or code released"
  ],
  "red_flags": [
   "Fluorescence detection is claimed while the page states no emission filter is fitted, so blue excitation light reaches the camera unfiltered"
  ],
  "one_line": "A built and exercised benchtop box whose test section reports no numbers, has no user testing and releases no files, leaving the claimed fluorescence capability unsupported.",
  "one_line_zh": "機器確實做出來也做了測試，但測試段落沒有任何數值、沒有使用者測試、也沒有釋出檔案，所宣稱的螢光偵測能力因此缺乏佐證。",
  "rank": 28,
  "ours": false
 },
 {
  "slug": "sses",
  "team": "SSES",
  "url": "https://2026.igem.wiki/sses/hardware",
  "type": "Air deodoriser enclosure bubbling isovaleric acid through a replaceable bottle of engineered bacteria",
  "c1": 2.5,
  "c2": 1.0,
  "c3": 0.5,
  "c4": 1.0,
  "total": 5.0,
  "j1": "There is a stated need: a consumer device that houses living bacteria has to hold temperature for a thermally controlled kill switch, keep the organisms contained through transport and disposal, and allow cartridge replacement. Those are genuine requirements for deploying an engineered strain, and the switch from a one-sided solid plate to a liquid bottle with two tubes, inspired by a limewater bubbler, is a sensible gas-contact improvement.",
  "j2": "The sections headed user testing and feedback contain no users. They restate requirements and the drawbacks the team noticed themselves. A survey is mentioned once as the source of the usage scenarios, with no numbers, questions or respondents given, and nobody is reported handling the device.",
  "j3": "No functional evidence. The testing section is explicitly headed as future development, and every module is described in terms of what it is intended to do. There is no measured isovaleric acid removal, no temperature trace, no airflow figure and no photograph of a built unit, only CAD renderings across versions 1.0 to 6.7.",
  "j4": "Reproduction is not possible from this page. There are no dimensions, no bill of materials, no cost, no component specifications, no sensor or controller part numbers, no CAD or STL downloads, no code and no licence. The only procedural content is a five-step consumable replacement routine.",
  "strengths": [
   "Seven design generations each tied to a named drawback, which is honest iteration",
   "Container redesign to a liquid bubbler addresses a real gas-contact limitation",
   "Safety features reason about the engineered strain: UV step, electric lid lock, kill switch sequencing"
  ],
  "weaknesses": [
   "No functional testing of any module; the test section is future work",
   "No real user testing despite sections labelled as such",
   "No BOM, dimensions, part numbers, files or cost anywhere",
   "No evidence a physical unit was ever built"
  ],
  "red_flags": [
   "Sections titled user testing and feedback contain no users or feedback",
   "An isovaleric acid sensor is central to the control loop but no sensor type, range or calibration is named",
   "The outlet monitoring and recirculation claim rests on a sensor that is never specified or tested"
  ],
  "one_line": "An iterated enclosure concept with reasonable safety thinking, but nothing tested, no users and no documentation another team could use.",
  "one_line_zh": "外殼概念歷經多次迭代、安全考量尚可，但沒有任何測試、沒有使用者，也沒有別人能用的文件。",
  "rank": 29,
  "ours": false
 },
 {
  "slug": "byhs-chn",
  "team": "BYHS-CHN",
  "url": "https://2026.igem.wiki/byhs-chn/hardware",
  "type": "Drawing-based concept for a replaceable filter cartridge to test a protein-coated collection medium",
  "c1": 2.5,
  "c2": 0.5,
  "c3": 0.5,
  "c4": 1.0,
  "total": 4.5,
  "j1": "The biological question is well framed: whether a Bio Glue protein coating lets a cartridge retain more test material than the same uncoated medium while preserving airflow and coating integrity, with a replaceable carrier so the medium can be compared independently of the frame. That is a legitimate hardware question for a synthetic-biology project, and the page is clear that the cartridge, not the fan or frame, is the point.",
  "j2": "None. A drawing-based review with prospective research users is described as a future possibility, and no one outside the team has seen or commented on the concept.",
  "j3": "Nothing exists but a Blender reconstruction of a supplied drawing. The page states repeatedly that filtration performance and biological integration remain to be validated, that the model is not a disassembly procedure, and that the layout is open rather than a sealed test enclosure. There is no retention, airflow or coating measurement.",
  "j4": "Only one dimension is published, a 470 mm body height, and the page says a complete specification is a separate design task. No CAD or STL downloads, no BOM, no material specifications beyond candidate names, no code and no licence, so nothing can be reproduced.",
  "strengths": [
   "The coated-versus-uncoated comparison is specified with blanks, references and material balance before any claim",
   "Unusually disciplined about what each planned measurement could and could not show",
   "Explicitly refuses the overreach that particle counts could identify asbestos"
  ],
  "weaknesses": [
   "No physical build, no measurement, no test data",
   "No user testing or external review",
   "Essentially no dimensions, files, BOM or specifications",
   "Three candidate materials are listed with none selected or characterised"
  ],
  "red_flags": [
   "The entire page is a design-stage reconstruction of a drawing; even the 3D model is illustrative",
   "Bio Glue coating, gelatin carrier and HEPA comparator are all candidates with no compatibility data",
   "The proposed collection boundary, sealing and airflow path are undefined, so planned retention numbers would not be interpretable yet"
  ],
  "one_line": "An honest and carefully scoped evaluation plan around a drawing, with no hardware built, measured or specified.",
  "one_line_zh": "圍繞一張圖面寫出誠實且範圍明確的評估計畫，但硬體完全沒有製作、沒有量測，也沒有規格。",
  "rank": 30,
  "ours": false
 },
 {
  "slug": "georgetownprep",
  "team": "GeorgetownPrep",
  "url": "https://2026.igem.wiki/georgetownprep/hardware",
  "type": "Planned open-source Rodeostat potentiostat with bismuth-film SWASV, a sorbent flow cartridge and printed enclosure; not yet run",
  "c1": 3.0,
  "c2": 0.0,
  "c3": 0.5,
  "c4": 1.0,
  "total": 4.5,
  "j1": "The rationale is the best thing on the page and is genuinely transferable: a biosensor that reports its own success is unfalsifiable, so measuring residual lead and cadmium by a method sharing no physics with the biology gives a check that can disagree with the cells. Square-wave anodic stripping voltammetry with an in-situ bismuth film, with Cd and Pb stripping at separated potentials so one sweep reports both, is an appropriate choice for that job.",
  "j2": "No user testing and no stakeholder input on the hardware is reported anywhere on the page.",
  "j3": "The team states that no SWASV run has been performed, that nothing has been optimised on their own electrodes and that no complete test run has been carried out. The deposition potential is given as a range from two disagreeing sources, and square-wave frequency, amplitude, step and the cleaning step are deliberately left blank rather than copied from a paper. The half point is for the hardware physically existing, with the Rodeostat photographed and electrodes received.",
  "j4": "The bill of materials table is present but every quantity, unit cost and note cell is empty or a dash, and the page carries an editorial instruction to the authors to put the total build cost there. No CAD or STL for the four printed parts, no analysis code and no licence statement for the design are linked, although the Rodeostat itself is open source.",
  "strengths": [
   "A clear and transferable argument for an orthogonal measurement to check the biology",
   "Refuses to present literature parameters as its own measured values",
   "The designed run sequence, measuring the same water before and after the cartridge, is sound"
  ],
  "weaknesses": [
   "No run has been performed, so there is no functional evidence",
   "The BOM is an empty table with no costs or quantities",
   "No CAD, code or files released; no user testing"
  ],
  "red_flags": [
   "An unedited instruction to the authors ('put it here and repeat it on Implementation') is left in the bill of materials table on the published page"
  ],
  "one_line": "A well-argued measurement plan with the hardware in hand but no run performed, an empty bill of materials and no files, so almost nothing is demonstrated.",
  "one_line_zh": "量測構想論述清楚、硬體也已到位，但尚未實際執行任何量測，材料表空白且無檔案釋出，因此幾乎沒有可佐證的成果。",
  "rank": 31,
  "ours": false
 },
 {
  "slug": "mammothedu-united",
  "team": "MammothEdu-United",
  "url": "https://2026.igem.wiki/mammothedu-united/hardware",
  "type": "Design and calculations for a foamed PHA radiosonde shell made from Halomonas-produced polymer",
  "c1": 3.0,
  "c2": 0.0,
  "c3": 0.5,
  "c4": 1.0,
  "total": 4.5,
  "j1": "The problem is well defined by an external constraint: a national standard caps the whole radiosonde at 120 g inside a 90 x 65 x 280 mm envelope, and a solid PHA shell of that geometry would weigh about 590 g while taking over a decade to erode in seawater. Foaming is the proposed answer to both, and the link back to the biology is real, since foamability depends on the 4HB fraction set by the engineered pathway.",
  "j2": "None at all. No operator, meteorological service or manufacturer is consulted, and the page does not claim otherwise.",
  "j3": "No foam, mould or shell was produced. Every number is calculated from literature: twenty-fold expansion from a related PHA foam gives 30 g for the 6 mm wall, and pooled marine erosion rates of 0.04 to 0.09 mg per square centimetre per day give 4 to 10 months for a 100 micrometre skin. The team labels these as estimates and shortest lifetimes to expect, which is honest, but there is no functional demonstration.",
  "j4": "The forming route is described step by step with constraints that matter, notably that PHB loses more than 95 percent of its chain length after 30 minutes at 180 C so the press must be fast. But there are no model files, no mould drawings or dimensions beyond the standard envelope and wall thickness, no BOM, no press or vessel specification and no licence, so nothing could be rebuilt.",
  "strengths": [
   "Weight and degradation targets taken from a real national standard rather than invented",
   "Wall thickness and window options compared on material volume and resulting mass",
   "Foamability tied back to the polymer composition the strain engineering controls",
   "Estimates are labelled as upper-bound-speed estimates derived from pooled literature rates"
  ],
  "weaknesses": [
   "No foam, mould or shell was made; the whole page is calculation and 3D modelling",
   "No user testing, consultation or external input",
   "No model files, mould drawings, BOM or process parameters for the press and pressure vessel",
   "Mechanical strength of the foam at 4 or 6 mm, which decides the design, is entirely unknown"
  ],
  "red_flags": [
   "Shell mass, float time and degradation time all rest on a twenty-fold expansion ratio taken from a different PHA foam study",
   "A litre of culture is said to hold roughly the mass of one shell, which assumes a reported high-density Halomonas yield without the team's own production data",
   "No files or dimensions are published, so the reproduction requirement is not met at all"
  ],
  "one_line": "A clear, honest materials and geometry calculation for a biodegradable shell, with no fabrication, no testing and nothing published to rebuild from.",
  "one_line_zh": "針對可降解外殼做了清楚誠實的材料與幾何計算，但沒有製作、沒有測試，也沒有釋出任何可重建的檔案。",
  "rank": 32,
  "ours": false
 },
 {
  "slug": "qingdao-china",
  "team": "Qingdao-China",
  "url": "https://2026.igem.wiki/qingdao-china/hardware",
  "type": "AureoFlow feed-planning software plus designed (not built) STM32 PWM methanol pump controller for Pichia fed-batch",
  "c1": 2.5,
  "c2": 0.0,
  "c3": 0.5,
  "c4": 1.5,
  "total": 4.5,
  "j1": "Planned methanol feeding for fed-batch yeast is a genuine synthetic biology production need.",
  "j2": "No user testing.",
  "j3": "The page states the hardware prototype has not been built; only a software example output is shown.",
  "j4": "Equations, component table and schematic image are given, but no code, PCB files or priced BOM are linked.",
  "strengths": [
   "Clear feed model",
   "Thoughtful safety and validation plan"
  ],
  "weaknesses": [
   "Hardware not built",
   "No files",
   "No users"
  ],
  "red_flags": [
   "Overview says hardware design is 'complete' while limitations say no prototype exists"
  ],
  "one_line": "A sound plan and model, but the controller was never built.",
  "one_line_zh": "規劃與模型合理，但控制器從未製作。",
  "rank": 33,
  "ours": false
 },
 {
  "slug": "fhs-china",
  "team": "FHS-China",
  "url": "https://2026.igem.wiki/fhs-china/hardware",
  "type": "Firmware and UI for a commercial fluorescence module plus touch display, with a proposed LAMP readout",
  "c1": 2.5,
  "c2": 0.0,
  "c3": 0.5,
  "c4": 1.0,
  "total": 4.0,
  "j1": "A bench fluorometer for probiotic viability or strain identity is relevant, though built around a vendor module.",
  "j2": "No user testing.",
  "j3": "All functions are verified only in a desktop simulator; the page states there is no on-device verification, no bench data and CRC is unchecked.",
  "j4": "Detailed protocol and firmware description, but the repository is private, there are no photos, wiring or BOM.",
  "strengths": [
   "Unusually honest status table",
   "Clear UART and calibration description"
  ],
  "weaknesses": [
   "No physical test data",
   "Private repository",
   "No photos of the device"
  ],
  "red_flags": [
   "Repository holding the build is stated to be private"
  ],
  "one_line": "Software for a reader that has not been tested on the device itself, with files kept private.",
  "one_line_zh": "讀取器軟體尚未在實機上測試，檔案也未公開。",
  "rank": 34,
  "ours": false
 },
 {
  "slug": "sre-china",
  "team": "SRE-China",
  "url": "https://2026.igem.wiki/sre-china/hardware",
  "type": "Workflow note stating that the assay runs on ordinary dry blocks or water baths at 30 and 60 C",
  "c1": 2.0,
  "c2": 1.0,
  "c3": 0.5,
  "c4": 0.5,
  "total": 4.0,
  "j1": "There is a coherent accessibility argument, that the two-temperature workflow should not require a real-time PCR instrument, and five stated design goals including closed-tube operation and minimal training. But the conclusion is to use equipment that already exists, so no hardware need is addressed: the page says the team deliberately avoided custom electronics or controllers in this generation.",
  "j2": "Interviews with clinicians, community health workers and high-school educators are credited with setting the requirements, but no interviewee, date, question or quotation is given, and nothing was put in front of a user to test. The requirement list reads as assumed rather than gathered.",
  "j3": "No device and no data. Nothing was built, so there is no temperature trace, no fluorescence readout from the described setup, and no demonstration that the two holds work on the equipment named. The smartphone reader and dual-temperature incubator are both future directions.",
  "j4": "There is nothing to reproduce. No part numbers, no BOM, no cost figure despite a stated cost goal, no drawings, no code, no protocol with volumes or hold times, and no licence. The page is a half-screen of design philosophy.",
  "strengths": [
   "Honest that the first-generation system intentionally uses standard laboratory heating equipment",
   "Closed-tube single-pipetting workflow is a reasonable accessibility choice for a school lab",
   "Design goals are stated explicitly and are the right ones for the setting"
  ],
  "weaknesses": [
   "No hardware was designed or built; the page describes using existing equipment",
   "Human practices input is asserted with no detail, participant or evidence",
   "No cost figure, part list, protocol, drawing or code",
   "Nothing measured, so no utility or functionality is demonstrated"
  ],
  "red_flags": [
   "A cost threshold is set as a design goal but no cost is ever given",
   "Interviews with clinicians and educators are credited with the requirements but none are identified or quoted",
   "Figure 1 is described as a schematic of the support system that was never built"
  ],
  "one_line": "A short design-philosophy note explaining why no hardware was built, with no device, data, files or evidence of user input.",
  "one_line_zh": "一篇簡短的設計理念說明，解釋為何不自製硬體，既無裝置、數據、檔案，也無使用者意見的證據。",
  "rank": 35,
  "ours": false
 },
 {
  "slug": "worldshaper-hangzhou",
  "team": "Worldshaper-Hangzhou",
  "url": "https://2026.igem.wiki/worldshaper-hangzhou/hardware",
  "type": "ESP32 sensor-triggered piezo atomiser that sprays an enzyme deodoriser in five operating modes",
  "c1": 1.0,
  "c2": 0.0,
  "c3": 1.5,
  "c4": 1.5,
  "total": 4.0,
  "j1": "A smart sprayer for a deodoriser product does not make work with standard parts easier; it is a product delivery device.",
  "j2": "No user testing or stakeholder feedback on the device is described; field trials are listed as future work.",
  "j3": "Three versions with described test methods and videos, but no reported numbers (mist mass, trigger accuracy) appear on the page.",
  "j4": "Pin assignments, thresholds and mode logic are written out, but there is no code, CAD, wiring diagram file or priced BOM.",
  "strengths": [
   "Clear control logic and thresholds",
   "Stepwise version build-up"
  ],
  "weaknesses": [
   "No test data reported",
   "No user feedback",
   "No build files"
  ],
  "red_flags": [],
  "one_line": "A described sensor-driven sprayer with no data, users or files.",
  "one_line_zh": "感測觸發噴霧器有描述，但沒有數據、使用者或檔案。",
  "rank": 36,
  "ours": false
 },
 {
  "slug": "hset-china",
  "team": "HSET-China",
  "url": "https://2026.igem.wiki/hset-china/hardware",
  "type": "Standardised pot-cultivation protocol for salt and silicon stress tests (substrate weighing, fixed watering, position rotation)",
  "c1": 1.5,
  "c2": 0.0,
  "c3": 0.5,
  "c4": 1.5,
  "total": 3.5,
  "j1": "Reducing variation in plant stress experiments is useful, but the 'hardware' is a protocol built from commercial pots, a balance and a cylinder, with no device.",
  "j2": "No user testing or external feedback on the platform is reported.",
  "j3": "No data: the page states quantitative validation of repeatability remains a future target.",
  "j4": "Clear SOP with parameters (90 g substrate, 30 mL dosing, rotation rules) and a component list, but nothing to fabricate and no validation protocol results.",
  "strengths": [
   "Clear written SOP",
   "Sensible randomisation and rotation scheme"
  ],
  "weaknesses": [
   "No device built",
   "No validation data",
   "No user testing"
  ],
  "red_flags": [
   "Engineering cycle lists CV retests that are not reported"
  ],
  "one_line": "A reasonable lab protocol presented as hardware, with no device and no data.",
  "one_line_zh": "以硬體名義呈現的實驗流程，沒有裝置也沒有數據。",
  "rank": 37,
  "ours": false
 },
 {
  "slug": "kcis-xiugang-taipei",
  "team": "KCIS-Xiugang-Taipei",
  "url": "https://2026.igem.wiki/kcis-xiugang-taipei/final-product-hardware",
  "type": "Proposed two-chamber enzymatic kitchen food-waste appliance and an enzyme drain unblocker, neither built",
  "c1": 2.0,
  "c2": 0.5,
  "c3": 0.5,
  "c4": 0.5,
  "total": 3.5,
  "j1": "There is a reasoned product need, pretreating lipids and proteins in household food waste ahead of Taiwan's 2027 incineration policy change, and one sound design idea: separating the Tgl1p and Pep4p chambers so the protease does not degrade the lipase, since the two enzymes also want different pH. But this is an appliance concept for an end user, not hardware that helps synthetic biology work get done, and the team notes the enzymes' operating conditions for mixed food waste are not established.",
  "j2": "A hot pot restaurant case study is referenced as the origin of the drain-unblocker product, which is the only user input visible, and it shapes product scope rather than any design detail. No prototype was shown to anyone, and no feedback changed anything.",
  "j3": "Nothing was built. The page says directly that no working full-sized appliance has been produced, that the pH and temperature settings are left for the customer to experiment with, and that Tgl1p has not been shown to break down kitchen grease or unclog a drain. There is no test, no measurement and no demonstration.",
  "j4": "There are no drawings, dimensions, CAD files, BOM, control scheme or assembly steps. The only numbers are commercial: hardware at NTD 14,659, refills at NTD 500 a month, and a twelve-month total of NTD 26,659. None of it supports reproduction.",
  "strengths": [
   "Sequential two-chamber design is justified by protease degradation of the lipase",
   "Unusually candid about what has not been demonstrated"
  ],
  "weaknesses": [
   "No prototype, no test data and no measurements",
   "No drawings, CAD, BOM or control design",
   "No user testing of anything physical"
  ],
  "red_flags": [
   "Comparative claims against dehydrators and drain cleaners rest on an appliance that does not exist",
   "There is no page at /hardware; the content sits at /final-product-hardware"
  ],
  "one_line": "A product and business concept with cost figures rather than hardware, with nothing built, nothing tested and nothing a team could reproduce.",
  "one_line_zh": "這是帶有成本估算的產品與商業構想而非硬體，沒有製作、沒有測試，也沒有任何可供他隊重現的內容。",
  "rank": 38,
  "ours": false
 },
 {
  "slug": "aei-prep-taiwan",
  "team": "AEI Prep-Taiwan",
  "url": "https://2026.igem.wiki/aei-prep-taiwan/hardware",
  "type": "Clinostat for simulated microgravity, mechanically assembled but motors never driven",
  "c1": 1.5,
  "c2": 0.0,
  "c3": 0.5,
  "c4": 0.5,
  "total": 2.5,
  "j1": "A clinostat could support microgravity tests of their organisms, but it is a generic device and was not used.",
  "j2": "No user testing.",
  "j3": "Only hand-cranked; the page states motors never produced rotation and the clinostat was not used to test organisms.",
  "j4": "Part photos and CAD images only; no files, prices, wiring or code.",
  "strengths": [
   "Honest statement that it does not work"
  ],
  "weaknesses": [
   "Non-functional",
   "No files",
   "Design credited to one person without clear team role"
  ],
  "red_flags": [
   "Leftover internal note asks readers to double-check mismatched part photos",
   "Design attributed to 'Preston' with unclear role, possibly not team work"
  ],
  "one_line": "An unfinished clinostat that never ran under power.",
  "one_line_zh": "未完成的回轉器，從未通電運轉。",
  "rank": 39,
  "ours": false
 },
 {
  "slug": "qingdaoacademy",
  "team": "QingdaoAcademy",
  "url": "https://2026.igem.wiki/qingdaoacademy/hardware",
  "type": "CAD-only concept of a small ROV with mesh basket for collecting floating Ulva",
  "c1": 1.0,
  "c2": 0.0,
  "c3": 0.0,
  "c4": 1.5,
  "total": 2.5,
  "j1": "Collecting algae biomass is upstream feedstock logistics, not a tool that helps work with standard parts.",
  "j2": "No user testing.",
  "j3": "Nothing was built or tested.",
  "j4": "A downloadable STEP assembly and dimensioned views; no BOM, electronics, code or assembly steps.",
  "strengths": [
   "STEP assembly downloadable",
   "Clear component descriptions"
  ],
  "weaknesses": [
   "Not built",
   "No electronics or code",
   "Off-target for synbio hardware"
  ],
  "red_flags": [],
  "one_line": "A CAD concept only, with no build and little link to synthetic biology tooling.",
  "one_line_zh": "僅有 CAD 概念，未製作，與合成生物學工具關聯薄弱。",
  "rank": 40,
  "ours": false
 },
 {
  "slug": "bwya",
  "team": "BWYA",
  "url": "https://2026.igem.wiki/bwya/hardware",
  "type": "No hardware; the hardware page contains only project background on Fel d 1 cat allergy and the team's inspiration",
  "c1": 0.5,
  "c2": 0.0,
  "c3": 0.0,
  "c4": 0.0,
  "total": 0.5,
  "j1": "The page is headed 'Best Hardware' and then contains only two sections, Background and Inspiration, covering Fel d 1 prevalence, its transfer from saliva to dander, and the story of a cat named Dean outside the lab. No device, need statement or design appears. I confirmed against the live page that nothing further loads. The half point acknowledges a described problem area, not a hardware need.",
  "j2": "No user testing is reported and there is no hardware to test.",
  "j3": "No proof of concept of any kind is present. The page contains no design, prototype, measurement or demonstration.",
  "j4": "There is no documentation: no BOM, CAD, code, assembly steps, licence or files. Nothing could be reproduced.",
  "strengths": [
   "The allergy background is referenced to the literature",
   "The problem framing identifies why Fel d 1 is hard to remove from homes"
  ],
  "weaknesses": [
   "The hardware page contains no hardware",
   "No design, test or documentation of any kind"
  ],
  "red_flags": [
   "The page is titled 'Best Hardware' but presents only project background, which reads as an unfinished page at the freeze"
  ],
  "one_line": "The hardware page carries only project background and an origin story, with no device, no data and nothing to reproduce.",
  "one_line_zh": "硬體頁面只有專案背景與發想故事，沒有任何裝置、數據或可供重現的內容。",
  "rank": 41,
  "ours": false
 },
 {
  "slug": "vga-pinion",
  "team": "VGA-Pinion",
  "url": "https://2026.igem.wiki/vga-pinion/hardware",
  "type": "No hardware; the hardware URL serves a PhysiCell/BioFVM tissue model page",
  "c1": 0.5,
  "c2": 0.0,
  "c3": 0.0,
  "c4": 0.0,
  "total": 0.5,
  "j1": "The page reached at /hardware is Model 2, a 3D PhysiCell and BioFVM simulation of a 240 x 240 x 400 um skin slab. A status line states plainly 'Notebook equipment, no custom device supplied' and that device validation remains a separate requirement. The half point reflects that the microneedle delivery context is at least adjacent to a hardware need; nothing on the page addresses one.",
  "j2": "No user testing is reported, and there is no device for anyone to test.",
  "j3": "No hardware proof of concept exists. The page's content is simulation output: intracellular cargo after 27 h and mean ROS states of 0.633 for HaCaT and 0.603 for HDF, with the team noting cell death and proliferation are switched off so the viability state staying at 1.0 must not be read as protection.",
  "j4": "There is no hardware documentation: no BOM, CAD, code, assembly steps or licence for any device. A model parameter PDF is linked, which belongs to the modelling work.",
  "strengths": [
   "The page states clearly that no custom device was supplied, rather than implying one",
   "The modelling itself is carefully caveated about what it cannot show"
  ],
  "weaknesses": [
   "No hardware of any kind on the standard hardware page",
   "Nothing to test, demonstrate or reproduce"
  ],
  "red_flags": [
   "The /hardware URL serves modelling content, so a judge looking for hardware finds a model page"
  ],
  "one_line": "There is no hardware here: the hardware page serves a tissue simulation and says so explicitly, so nothing can be scored against the rubric.",
  "one_line_zh": "這裡沒有硬體：hardware 頁面實際呈現的是組織模擬，團隊也明白標示未提供自製裝置，因此無從依評分標準評分。",
  "rank": 42,
  "ours": false
 },
 {
  "slug": "lhwhs-missouri",
  "team": "LHWHS Missouri",
  "url": "https://2026.igem.wiki/lhwhs-missouri/hardware",
  "type": "No hardware page; /hardware returns the home page",
  "c1": 0.0,
  "c2": 0.0,
  "c3": 0.0,
  "c4": 0.0,
  "total": 0.0,
  "j1": "The /hardware URL serves the home page text and the site navigation has no Hardware entry.",
  "j2": "No content.",
  "j3": "No content.",
  "j4": "No content.",
  "strengths": [
   "None"
  ],
  "weaknesses": [
   "No hardware page"
  ],
  "red_flags": [
   "/hardware falls back to the homepage; checked live HTML and JS bundle"
  ],
  "one_line": "No hardware entry exists.",
  "one_line_zh": "沒有硬體頁面。",
  "rank": 43,
  "ours": false
 },
 {
  "slug": "texas",
  "team": "Texas",
  "url": "https://2026.igem.wiki/texas/hardware",
  "type": "No hardware page; the slug serves the team home page",
  "c1": 0.0,
  "c2": 0.0,
  "c3": 0.0,
  "c4": 0.0,
  "total": 0.0,
  "j1": "There is no hardware page. Requesting /texas/hardware returns the team home page, and the site's own navigation and prerendered route list contain no hardware route. The wet lab menu offers Experiments, Notebook, Parts, Measurement, Alternative Platform and Safety and Security only.",
  "j2": "No hardware content exists, so no user testing of hardware is reported. The Alternative Platform page, the nearest related content, discusses strain choice and a localisation panel rather than any device.",
  "j3": "No hardware proof of concept of any kind. Nothing was built, and the project's engineering work is molecular, centred on secreting FAAH from E. coli Nissle 1917.",
  "j4": "No hardware documentation: no BOM, CAD, assembly steps, code, calibration or licence, because there is no hardware.",
  "strengths": [],
  "weaknesses": [
   "No hardware page exists on the wiki",
   "No hardware route in the site navigation or prerendered pages",
   "No device, drawing, file or hardware data anywhere on the project pages"
  ],
  "red_flags": [
   "/texas/hardware resolves to the home page content, which is why the text dump looks like a homepage fallback"
  ],
  "one_line": "The team has no hardware page and no hardware work; the URL falls back to their home page.",
  "one_line_zh": "該隊沒有硬體頁面也沒有硬體工作，該網址只會回到首頁內容。",
  "rank": 44,
  "ours": false
 }
];
