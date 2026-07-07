# Batch McKinlay Member Processing — Status

**Generated:** 2026-07-07 (updated)

## Wells Completed (17 / 17 with data in repository)

| Well | Tops Name (Mck_Murta) | Intervals | Mudlog Match | Output |
|------|----------------------|-----------|--------------|--------|
| JENA 31 | JENA 31 OPS | 201 | 200/201 | `JENA31_*` |
| JENA 31DW1 | JENA 31DW1 | 182 | 182/182 | `JENA31DW1_*` |
| BIALA 19 | BIALA 19 | 219 | 218/219 | `BIALA19_*` |
| BIALA 20 | BIALA 20 | 175 | 173/175 | `BIALA20_*` |
| BIALA 21 | BIALA 21 | 145 | 144/145 | `BIALA21_*` |
| FROSTILLICUS 2 | FROSTILLICUS 2 | 370 | 248/370 | `FROSTILLICUS2_*` |
| GRANCHIO 4 | GRANCHIO 4 | 126 | 93/126 | `GRANCHIO4_*` |
| HOBBES 5 | HOBBES 5 | 114 | 60/114 | `HOBBES5_*` |
| HOBBES 6 | HOBBES 6 | 81 | 55/81 | `HOBBES6_*` |
| MCKINLAY 20 | MCKINLAY 20 | 276 | 211/276 | `MCKINLAY20_*` |
| MCKINLAY 21 | MCKINLAY 21 | 118 | 81/118 | `MCKINLAY21_*` |
| MCKINLAY 22 | MCKINLAY 22 | 306 | 221/306 | `MCKINLAY22_*` |
| MCKINLAY 23 | MCKINLAY 23 | 180 | 78/180 | `MCKINLAY23_*` |
| MCKINLAY 24 | MCKINLAY 24 | 167 | 125/167 | `MCKINLAY24_*` |
| STIMPEE 6 | STIMPEE 6 | 143 | 115/143 | `STIMPEE6_*` |
| STIMPEE 7 | STIMPEE 7 | 93 | 81/93 | `STIMPEE7_*` |
| TERINGIE 6 | TERINGIE 6 | 166 | 165/166 | `TERINGIE6_*` |

**Total McKinlay intervals analysed:** 2,892

## Well Awaiting Data Upload

| Well | DC30 (m MD) | Status |
|------|-------------|--------|
| HOBBES 4 | 1630.71 | No mudlog PDF, sample Excel, or LAS file in repository |

## Excel Format Notes

Two sample spreadsheet formats are supported:

| Format | Wells | Sheet |
|--------|-------|-------|
| Standard | Jena, Biala, Granchio, Hobbes, Stimpee, Teringie | `Input Sheet` |
| McKinlay legacy format | Frostillicus 2, McKinlay 20–24 | `Sheet1` (F=TG, G=%SS, H=%fluoro + col A text) |

Legacy format provides description text, **Sheet1 columns F (TG), G (%SS), H (%fluoro)**, plus parsed grain size and fluorescence brightness from column A.

## Formation Tops Name Mapping

`Mck_Murta.xlsx` uses updated well names for Jena laterals:

| Mudlog / LAS | DC30.xlsx | Mck_Murta.xlsx |
|--------------|-----------|----------------|
| JENA 31 | Jena Dev C Oil Lateral 1_Ops | JENA 31 OPS |
| JENA 31DW1 | Jena Dev C Oil Lateral 2_Ops | JENA 31DW1 |

## Exclusion Logic Applied

1. Pre-reservoir samples above shallowest McKinlay top — excluded
2. **Overburden entry** — Murta + corresponding McKinlay top (within 5 m) marks entry into overburden
3. **Target re-entry** — next lone McKinlay top below the entry pair marks return to reservoir
4. **Excluded interval** — full MD from overburden entry to re-entry (pay resumes at re-entry)
5. If no re-entry top exists below a pair, assume re-entry at entry + 50 m MD
6. Initial reservoir entry (DC30 + shallowest McKinlay) is **not** excluded

## Re-run

```bash
python3 scripts/process_mckinlay_wells.py
```

## Known Data Quality Issues

- **Mudlog match rates vary** — older field PDFs (Hobbes, McKinlay 23) have lower text extraction match rates
- **HOBBES 4** — listed in tops files only; no well data files uploaded
- **McKinlay legacy spreadsheets** — grain size / fluorescence fields not available
