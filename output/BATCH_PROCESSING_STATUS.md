# Batch McKinlay Member Processing — Status

**Generated:** 2026-07-07

## Wells Completed (5 / 5 with data in repository)

| Well | Tops Name | Intervals | Mudlog Match | Output Files |
|------|-----------|-----------|--------------|--------------|
| JENA 31 | Jena Dev C Oil Lateral 1_Ops | 201 | 200/201 | `JENA31_*` |
| JENA 31DW1 | Jena Dev C Oil Lateral 2_Ops | 178 | 178/178 | `JENA31DW1_*` |
| BIALA 19 | BIALA 19 | 219 | 218/219 | `BIALA19_*` |
| BIALA 20 | BIALA 20 | 211 | 209/211 | `BIALA20_*` |
| BIALA 21 | BIALA 21 | 145 | 144/145 | `BIALA21_*` |

**Total McKinlay intervals analysed:** 954

## Wells in Formation Tops — Data Not in Repository

The following 12 wells appear in `DC30.xlsx` / `Mck_Murta.xlsx` but **do not have mudlog PDF, sample Excel, or LAS files** in the repository root. They cannot be processed until data is uploaded.

| Well | DC30 (m MD) |
|------|-------------|
| FROSTILLICUS 2 | 1614.15 |
| GRANCHIO 4 | 1678.34 |
| HOBBES 4 | 1630.71 |
| HOBBES 5 | 1701.15 |
| HOBBES 6 | 1685.47 |
| MCKINLAY 20 | 1633.24 |
| MCKINLAY 21 | 1769.69 |
| MCKINLAY 22 | 1671.61 |
| MCKINLAY 23 | 1678.59 |
| MCKINLAY 24 | 1633.50 |
| STIMPEE 6 | 1631.04 |
| STIMPEE 7 | 1704.52 |
| TERINGIE 6 | 1580.02 |

## Exclusion Logic Applied

Per updated workflow requirements:

1. **Pre-reservoir:** Samples above shallowest McKinlay Member top excluded
2. **Overburden intersections:** ±10 m around McKinlay tops paired with Murta tops (within 5 m)
3. **Target re-entry:** ±10 m around McKinlay tops without corresponding Murta tops

## Processing Script

Re-run all wells:

```bash
python3 scripts/process_mckinlay_wells.py
```

## Output Files per Well

- `[WELL]_McKinlay_Cuttings_Interpretation.md` — detailed per-interval data
- `[WELL]_Process_Summary.md` — methodology and findings
