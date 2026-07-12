# Batch McKinlay Member Processing — Status

**Generated:** 2026-07-12 (updated — bar-only fluorescence: McKinlay 10–15)

## Wells Completed (23 / 23 with data in repository)

| Well | Tops Name (Mck_Murta) | Intervals | Mudlog Match | mTVDss | Ingest | Fluor source | Cuttings pay (m) | Output |
|------|----------------------|-----------|--------------|--------|--------|--------------|------------------|--------|
| JENA 31 | JENA 31 OPS | 201 | 200/201 | — | Excel | Spreadsheet | 940 | `JENA31_*` |
| JENA 31DW1 | JENA 31DW1 | 182 | 182/182 | — | Excel | Spreadsheet | 1180 | `JENA31DW1_*` |
| BIALA 19 | BIALA 19 | 219 | 218/219 | — | Excel | Spreadsheet | 1692 | `BIALA19_*` |
| BIALA 20 | BIALA 20 | 175 | 173/175 | — | Excel | Spreadsheet | 1202 | `BIALA20_*` |
| BIALA 21 | BIALA 21 | 145 | 144/145 | — | Excel | Spreadsheet | 910 | `BIALA21_*` |
| FROSTILLICUS 2 | FROSTILLICUS 2 | 370 | 248/370 | — | Excel | Spreadsheet | 1677 | `FROSTILLICUS2_*` |
| GRANCHIO 4 | GRANCHIO 4 | 126 | 93/126 | — | Excel | Spreadsheet | 990 | `GRANCHIO4_*` |
| HOBBES 5 | HOBBES 5 | 114 | 60/114 | — | Excel | Spreadsheet | 407 | `HOBBES5_*` |
| HOBBES 6 | HOBBES 6 | 81 | 55/81 | — | Excel | Spreadsheet | 466 | `HOBBES6_*` |
| MCKINLAY 10 | MCKINLAY 10 | 96 | 96/96 | 96/96 | Litho+gas | **Bar-only** | **260** | `MCKINLAY10_*` |
| MCKINLAY 11 | MCKINLAY 11 | 70 | 70/70 | 70/70 | Litho+gas | **Bar-only** | **310** | `MCKINLAY11_*` |
| MCKINLAY 12 | MCKINLAY 12 | 172 | 172/172 | 172/172 | Litho+gas | **Text max** | **590** | `MCKINLAY12_*` |
| MCKINLAY 13 | MCKINLAY 13 | 247 | 247/247 | 247/247 | Litho+gas | **Text max** | **1035** | `MCKINLAY13_*` |
| MCKINLAY 14 | MCKINLAY 14 | 113 | 113/113 | 113/113 | Litho+gas | **Text max** | **295** | `MCKINLAY14_*` |
| MCKINLAY 15 | MCKINLAY 15 | 57 | 57/57 | 57/57 | Litho+gas | **Text max** | **170** | `MCKINLAY15_*` |
| MCKINLAY 20 | MCKINLAY 20 | 276 | 211/276 | — | Excel | Spreadsheet | 1168 | `MCKINLAY20_*` |
| MCKINLAY 21 | MCKINLAY 21 | 118 | 81/118 | — | Excel | Spreadsheet | 470 | `MCKINLAY21_*` |
| MCKINLAY 22 | MCKINLAY 22 | 306 | 221/306 | — | Excel | Spreadsheet | 1302 | `MCKINLAY22_*` |
| MCKINLAY 23 | MCKINLAY 23 | 180 | 78/180 | — | Excel | Spreadsheet | 870 | `MCKINLAY23_*` |
| MCKINLAY 24 | MCKINLAY 24 | 167 | 125/167 | — | Excel | Spreadsheet | 749 | `MCKINLAY24_*` |
| STIMPEE 6 | STIMPEE 6 | 143 | 115/143 | — | Excel | Spreadsheet | 1158 | `STIMPEE6_*` |
| STIMPEE 7 | STIMPEE 7 | 93 | 81/93 | — | Excel | Spreadsheet | 707 | `STIMPEE7_*` |
| TERINGIE 6 | TERINGIE 6 | 166 | 165/166 | — | Excel | Spreadsheet | 955 | `TERINGIE6_*` |

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

- No sample Excel → fluorescence from mudlog PDF:
  - **Mck 10–11:** graphics bar track (bar-only, raw fill %)
  - **Mck 12–15:** text `FLUOR:` / `FLUORESCENCE:` blocks (ft→m); **upper bound** of each range (e.g. 60–90% → 90%)
- Mudlog lithology matched at **correct metre depth** (PDF depths converted ft→m before interval lookup)
- %SS derived from lithology codes (405/400 sandstone, 406 siltstone, 407/800 shale)
- Grain size mostly unavailable from litho ASCII; porosity/loose grains from mudlog text where matched
- Resistivity pay from LAS (metres); overburden zones clipped via `subtract_exclusion_zones`

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
- **McKinlay 10–15** — mudlog PDF depths in feet; parser converts to metres before matching intervals and LAS
- **McKinlay 10–11** — bar-only fluorescence (validated against pre-AI estimates)
- **McKinlay 12–15** — text-block fluorescence using range **maximum** (author paints bar at zone minimum; text blocks retain true peak)

## Fluorescence Ingestion (McKinlay 10–15)

| Well | Method | Cuttings pay (m) | % lateral | Notes |
|------|--------|------------------|-----------|-------|
| MCKINLAY 10 | Bar-only | 260 | 48.9% | Unchanged |
| MCKINLAY 11 | Bar-only | 310 | 66.2% | Reference calibration |
| MCKINLAY 12 | Text max | 590 | 48.2% | FLUOR blocks e.g. 5850'–5920':90% |
| MCKINLAY 13 | Text max | 1035 | 74.1% | Long lateral; strong text-block coverage |
| MCKINLAY 14 | Text max | 295 | 36.4% | |
| MCKINLAY 15 | Text max | 170 | 19.5% | Short retained interval count (57) |
