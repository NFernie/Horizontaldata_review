# Reusable Workflow Prompt — Horizontal Well Cuttings & Log Integration

## Processing Status — All Available Wells Complete (23 wells)

| # | Well | Intervals | Ingest | Status |
|---|------|-----------|--------|--------|
| 1 | JENA 31 | 201 | Excel | Complete |
| 2 | JENA 31DW1 | 182 | Excel | Complete |
| 3 | BIALA 19 | 219 | Excel | Complete |
| 4 | BIALA 20 | 175 | Excel | Complete |
| 5 | BIALA 21 | 145 | Excel | Complete |
| 6 | FROSTILLICUS 2 | 370 | Excel | Complete |
| 7 | GRANCHIO 4 | 126 | Excel | Complete |
| 8 | HOBBES 5 | 114 | Excel | Complete |
| 9 | HOBBES 6 | 81 | Excel | Complete |
| 10 | MCKINLAY 10 | 96 | Litho+gas | Complete |
| 11 | MCKINLAY 11 | 70 | Litho+gas | Complete |
| 12 | MCKINLAY 12 | 172 | Litho+gas | Complete |
| 13 | MCKINLAY 13 | 247 | Litho+gas | Complete |
| 14 | MCKINLAY 14 | 113 | Litho+gas | Complete |
| 15 | MCKINLAY 15 | 57 | Litho+gas | Complete |
| 16 | MCKINLAY 20 | 276 | Excel | Complete |
| 17 | MCKINLAY 21 | 118 | Excel | Complete |
| 18 | MCKINLAY 22 | 306 | Excel | Complete |
| 19 | MCKINLAY 23 | 180 | Excel | Complete |
| 20 | MCKINLAY 24 | 167 | Excel | Complete |
| 21 | STIMPEE 6 | 143 | Excel | Complete |
| 22 | STIMPEE 7 | 93 | Excel | Complete |
| 23 | TERINGIE 6 | 166 | Excel | Complete |

**Pending:** HOBBES 4 (formation tops only — no data files in repo)

---

## Standard workflow (sample Excel wells)

Copy and paste the prompt below for any new well dataset with a sample description spreadsheet:

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

---

## Alternate workflow (litho + drill-gas wells — no sample Excel)

Use when sample description spreadsheets are unavailable (e.g. McKinlay 10–15). Implemented in `scripts/litho_gas_ingest.py` and `scripts/trajectory.py`.

```
For well [WELL_NAME], integrate McKinlay Member data WITHOUT sample Excel:

DATA FILES (workspace root):
- Mudlog PDF: McKinlay NN_Mudlog_*.pdf
- Lithology ASCII/TXT: Petrel litho export (depths in feet)
- Drill-gas ASCII/TXT: Petrel drill-gas export (depths in feet)
- Formation tops: DC30.xlsx and Mck_Murta.xlsx
- Wireline LAS: Mck_NN (GR, RES_DEEP, RES_SHALLOW)
- Trajectory: Mck_NN_trajectory (Petrel export — MD and Z columns; Z = mTVDss subsea)

INGESTION:
1. Convert litho and drill-gas depths from feet to metres MD (× 0.3048)
2. Aggregate lithology and gas to fixed 5 m sample bins (bin centre = interval midpoint)
3. Derive %SS from lithology codes: 405/400 = sandstone, 406 = siltstone, 407/800 = shale
4. Parse trajectory via scripts/trajectory.py → interpolate_mtvds(md) for each interval
5. Apply same classify_tops / exclusion_zones horizontal logic as Excel wells
6. Match mudlog PDF cuttings text per interval (±15 m window)

WELLS REGISTRY (scripts/process_mckinlay_wells.py):
- Set ingest: "litho_gas", litho, gas, trajectory, depth_unit: "ft" keys on WELLS entry

OUTPUT:
1. output/MCKINLAYNN_McKinlay_Cuttings_Interpretation.md (includes mTVDss per interval)
2. output/MCKINLAYNN_Process_Summary.md
3. output/MCKINLAY NN/pay-summary.md (via compute_pay_summary.py)

KNOWN GAPS:
- No %Fluor / fluorescence brightness → cuttings pay and matching pay will be zero
- Grain size mostly NaN from litho codes
- Resistivity pay only; verify overburden exclusion with compute_pay_summary exit code 0
```

## Batch Re-run

```bash
python3 scripts/process_mckinlay_wells.py
python3 scripts/process_mckinlay_wells.py --only MCKINLAY10
python3 scripts/compute_pay_summary.py
```

See `BATCH_PROCESSING_STATUS.md` for full summary.
