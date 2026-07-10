# Batch McKinlay Member Processing — Status

**Generated:** 2026-07-10 (updated — Phase 1: McKinlay 10–15)

## Wells Completed (23 / 23 with data in repository)

| Well | Tops Name (Mck_Murta) | Intervals | Mudlog Match | mTVDss | Ingest | Output |
|------|----------------------|-----------|--------------|--------|--------|--------|
| JENA 31 | JENA 31 OPS | 201 | 200/201 | — | Excel | `JENA31_*` |
| JENA 31DW1 | JENA 31DW1 | 182 | 182/182 | — | Excel | `JENA31DW1_*` |
| BIALA 19 | BIALA 19 | 219 | 218/219 | — | Excel | `BIALA19_*` |
| BIALA 20 | BIALA 20 | 175 | 173/175 | — | Excel | `BIALA20_*` |
| BIALA 21 | BIALA 21 | 145 | 144/145 | — | Excel | `BIALA21_*` |
| FROSTILLICUS 2 | FROSTILLICUS 2 | 370 | 248/370 | — | Excel | `FROSTILLICUS2_*` |
| GRANCHIO 4 | GRANCHIO 4 | 126 | 93/126 | — | Excel | `GRANCHIO4_*` |
| HOBBES 5 | HOBBES 5 | 114 | 60/114 | — | Excel | `HOBBES5_*` |
| HOBBES 6 | HOBBES 6 | 81 | 55/81 | — | Excel | `HOBBES6_*` |
| MCKINLAY 10 | MCKINLAY 10 | 96 | 65/96 | 96/96 | Litho+gas | `MCKINLAY10_*` |
| MCKINLAY 11 | MCKINLAY 11 | 70 | 47/70 | 70/70 | Litho+gas | `MCKINLAY11_*` |
| MCKINLAY 12 | MCKINLAY 12 | 172 | 130/172 | 172/172 | Litho+gas | `MCKINLAY12_*` |
| MCKINLAY 13 | MCKINLAY 13 | 247 | 95/247 | 247/247 | Litho+gas | `MCKINLAY13_*` |
| MCKINLAY 14 | MCKINLAY 14 | 113 | 20/113 | 113/113 | Litho+gas | `MCKINLAY14_*` |
| MCKINLAY 15 | MCKINLAY 15 | 57 | 42/57 | 57/57 | Litho+gas | `MCKINLAY15_*` |
| MCKINLAY 20 | MCKINLAY 20 | 276 | 211/276 | — | Excel | `MCKINLAY20_*` |
| MCKINLAY 21 | MCKINLAY 21 | 118 | 81/118 | — | Excel | `MCKINLAY21_*` |
| MCKINLAY 22 | MCKINLAY 22 | 306 | 221/306 | — | Excel | `MCKINLAY22_*` |
| MCKINLAY 23 | MCKINLAY 23 | 180 | 78/180 | — | Excel | `MCKINLAY23_*` |
| MCKINLAY 24 | MCKINLAY 24 | 167 | 125/167 | — | Excel | `MCKINLAY24_*` |
| STIMPEE 6 | STIMPEE 6 | 143 | 115/143 | — | Excel | `STIMPEE6_*` |
| STIMPEE 7 | STIMPEE 7 | 93 | 81/93 | — | Excel | `STIMPEE7_*` |
| TERINGIE 6 | TERINGIE 6 | 166 | 165/166 | — | Excel | `TERINGIE6_*` |

**Total McKinlay intervals analysed:** 3,647

## Well Awaiting Data Upload

| Well | DC30 (m MD) | Status |
|------|-------------|--------|
| HOBBES 4 | 1630.71 | No mudlog PDF, sample Excel, or LAS file in repository |

## Ingestion Formats

| Format | Wells | Source |
|--------|-------|--------|
| Standard Excel | Jena, Biala, Granchio, Hobbes, Stimpee, Teringie | `Input Sheet` |
| McKinlay legacy Excel | Frostillicus 2, McKinlay 20–24 | `Sheet1` (F=TG, G=%SS, H=%fluoro + col A text) |
| **Litho + drill-gas ASCII/TXT** | **McKinlay 10–15** | Petrel litho + drill-gas exports (ft → m); **5 m bins**; mudlog PDF; Petrel `*_trajectory` → **mTVDss** |

### Litho/gas wells — data gaps

- No sample Excel → **no %Fluor** or fluorescence brightness; **cuttings pay = 0 m** for all six wells
- %SS derived from lithology codes (405/400 sandstone, 406 siltstone, 407/800 shale)
- Grain size mostly unavailable from litho ASCII; porosity/loose grains from mudlog text where matched
- Mudlog match rate varies (MCKINLAY 14 lowest at 20/113 — older field PDF)
- Resistivity pay from LAS only; overburden zones clipped via `subtract_exclusion_zones`

## Excel Format Notes

Two sample spreadsheet formats are supported for Excel-ingest wells:

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
4. **Excluded interval** — full MD from overburden entry to re-entry (or entry + 50 m); nested entry pairs inside an open exclusion share the same zone
5. If no re-entry top exists below a pair, assume re-entry at entry + 50 m MD
6. Initial reservoir entry (DC30 + shallowest McKinlay) is **not** excluded

## Re-run

```bash
# All wells
python3 scripts/process_mckinlay_wells.py

# Single well (e.g. Phase 1 litho/gas wells)
python3 scripts/process_mckinlay_wells.py --only MCKINLAY10

# Pay summaries (overburden overlap verified on exit)
python3 scripts/compute_pay_summary.py
python3 scripts/compute_pay_summary.py MCKINLAY10 MCKINLAY11 MCKINLAY12 MCKINLAY13 MCKINLAY14 MCKINLAY15
```

## Known Data Quality Issues

- **Mudlog match rates vary** — older field PDFs (Hobbes, McKinlay 14, McKinlay 23) have lower text extraction match rates
- **HOBBES 4** — listed in tops files only; no well data files uploaded
- **McKinlay legacy spreadsheets** — grain size / fluorescence fields not available
- **McKinlay 10–15** — no fluorescence from litho/gas ingest; resistivity pay only until fluorescence source added
