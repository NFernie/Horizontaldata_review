# Reusable Workflow Prompt — Horizontal Well Cuttings & Log Integration

## Processing Status — All Available Wells Complete

| # | Well | Intervals | Status |
|---|------|-----------|--------|
| 1 | JENA 31 | 201 | Complete |
| 2 | JENA 31DW1 | 182 | Complete |
| 3 | BIALA 19 | 219 | Complete |
| 4 | BIALA 20 | 175 | Complete |
| 5 | BIALA 21 | 145 | Complete |
| 6 | FROSTILLICUS 2 | 370 | Complete |
| 7 | GRANCHIO 4 | 126 | Complete |
| 8 | HOBBES 5 | 114 | Complete |
| 9 | HOBBES 6 | 81 | Complete |
| 10 | MCKINLAY 20 | 276 | Complete |
| 11 | MCKINLAY 21 | 118 | Complete |
| 12 | MCKINLAY 22 | 306 | Complete |
| 13 | MCKINLAY 23 | 180 | Complete |
| 14 | MCKINLAY 24 | 167 | Complete |
| 15 | STIMPEE 6 | 143 | Complete |
| 16 | STIMPEE 7 | 93 | Complete |
| 17 | TERINGIE 6 | 166 | Complete |

**Pending:** HOBBES 4 (formation tops only — no data files in repo)

---

Copy and paste the prompt below for any new well dataset:

```
For well [WELL_NAME], integrate the following data sources for the McKinlay Member only:

DATA FILES (in workspace root):
- Mudlog PDF: [WELL_NAME]_ML_Mudlog_*.pdf
- Sample Descriptions Excel: [WELL_NAME] Hz Section Samples Descriptions*.xlsx (use Input Sheet ONLY, or Sheet1 for legacy format)
- Formation tops: DC30.xlsx and Mck_Murta.xlsx
- Wireline log (LAS): [well_folder]/LAS file with GR, RES_DEEP, RES_SHALLOW

WELL IDENTIFICATION:
- Map the mudlog well name to the corresponding entry in DC30.xlsx and Mck_Murta.xlsx
- Verify by matching TD depth and lateral naming convention
- Note: Jena wells may use JENA 31 OPS / JENA 31DW1 in Mck_Murta vs lateral names in DC30

MCKINLAY MEMBER FILTERING (horizontal well logic):
1. Initial reservoir intersection = shallowest McKinlay Member top MD, cross-reference with DC30 top
2. Overburden entry = Murta + corresponding McKinlay top at similar depth (within 5 m)
   → EXCLUDE from entry depth to next lone McKinlay re-entry below (or entry + 50 m). Entry pairs inside an existing exclusion share that zone.
3. Target re-entry = lone McKinlay top below an overburden entry pair (NOT the initial shallowest McKinlay)
4. If no re-entry top exists below a pair, assume re-entry at entry + 50 m MD
5. Only include sample intervals from McKinlay Member start to TD, outside overburden exclusion intervals
6. Do NOT include overburden/Murta formation data above the initial McKinlay intersection

FOR EACH MCKINLAY SAMPLE INTERVAL:
1. Compute depth interval from Input Sheet sample depths (midpoints between consecutive samples)
2. Extract matching mudlog PDF cuttings description (lithology text)
3. Include sample description properties: % Sandstone, grain size, fluorescence, gas, FeCO3
4. From LAS file, compute average RES_DEEP and RES_SHALLOW over the interval
5. Calculate Δ Res = RES_DEEP − RES_SHALLOW
6. Add permeability proxy comment: greater separation = higher inferred permeability

OUTPUT — Create markdown files:
1. [WELL_NAME]_McKinlay_Cuttings_Interpretation.md
2. [WELL_NAME]_Process_Summary.md

REQUIREMENTS:
- Be explicit about ALL shortcomings and data quality issues
- Note any discrepancies between mudlog picks and tops file picks
- Flag intervals with missing mudlog matches or sparse log data
- Do not use Calculations Sheet or other Excel tabs beyond Input Sheet
```

## Batch Re-run

```bash
python3 scripts/process_mckinlay_wells.py
```

See `BATCH_PROCESSING_STATUS.md` for full summary.
