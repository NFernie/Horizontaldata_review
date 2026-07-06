# Reusable Workflow Prompt — Horizontal Well Cuttings & Log Integration

Copy and paste the prompt below for each additional well dataset.

---

```
For well [WELL_NAME], integrate the following data sources for the McKinlay Member only:

DATA FILES (in workspace root):
- Mudlog PDF: [WELL_NAME]_ML_Mudlog_*.pdf
- Sample Descriptions Excel: [WELL_NAME] Hz Section Samples Descriptions*.xlsx (use Input Sheet ONLY)
- Formation tops: DC30.xlsx and Mck_Murta.xlsx
- Wireline log (LAS): [well_folder]/LAS file with GR, RES_DEEP, RES_SHALLOW

WELL IDENTIFICATION:
- Map the mudlog well name to the corresponding entry in DC30.xlsx and Mck_Murta.xlsx
- Verify by matching TD depth and lateral naming convention

MCKINLAY MEMBER FILTERING (horizontal well logic):
1. Initial reservoir intersection = shallowest McKinlay Member top MD, cross-reference with DC30 top
2. Overburden intersections = McKinlay and Murta tops at same or similar depths (within 5m)
   → EXCLUDE sample intervals within ±10m of these paired tops
3. Target re-entry = McKinlay Member tops WITHOUT corresponding Murta tops
4. Only include sample intervals from McKinlay Member start to TD
5. Do NOT include overburden/Murta formation data above the initial McKinlay intersection

FOR EACH MCKINLAY SAMPLE INTERVAL:
1. Compute depth interval from Input Sheet sample depths (midpoints between consecutive samples)
2. Extract matching mudlog PDF cuttings description (lithology text)
3. Include sample description properties: % Sandstone, grain size, fluorescence, gas, FeCO3
4. From LAS file, compute average RES_DEEP and RES_SHALLOW over the interval
5. Calculate Δ Res = RES_DEEP − RES_SHALLOW
6. Add permeability proxy comment: greater separation = higher inferred permeability

OUTPUT — Create 3 markdown files:
1. [WELL_NAME]_McKinlay_Cuttings_Interpretation.md — detailed per-interval data
2. [WELL_NAME]_Process_Summary.md — methodology and findings summary
3. REUSABLE_WORKFLOW_PROMPT.md — this prompt (update if process changes)

REQUIREMENTS:
- Be explicit about ALL shortcomings and data quality issues
- Note any discrepancies between mudlog picks and tops file picks
- Flag intervals with missing mudlog matches or sparse log data
- Do not use Calculations Sheet or other Excel tabs beyond Input Sheet
```

## Wells Remaining

| # | Well | Mudlog PDF | Sample Excel | LAS File | Status |
|---|------|-----------|-------------|----------|--------|
| 1 | JENA 31 | ✅ | ✅ | ✅ | **Complete** |
| 2 | Jena_31DW1 | Check workspace | Check workspace | Check workspace | Pending |
| 3 | Biala_19 | Check workspace | Check workspace | Check workspace | Pending |
| 4 | Biala_20 | Check workspace | Check workspace | Check workspace | Pending |
| 5 | Biala_21 | Check workspace | Check workspace | Check workspace | Pending |

## Notes for Batch Processing
- Each well may have different well name mapping in tops files
- Sample Excel interval spacing varies by well
- Some wells may have DW1 (drill-ahead) variants with separate files
- LAS NULL value is -999.25 in Petrel exports
- McKinlay/Murta top pairing tolerance: 5 m (adjust if needed)
