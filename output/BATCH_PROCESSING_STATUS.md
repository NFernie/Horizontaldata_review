# Batch McKinlay Member Processing — Status

**Generated:** 2026-07-13 (Phase 6 full pipeline rerun — RQI v2, WRCI v2, ZOI, OWC, trajectory on all wells)

## Wells Completed (23 / 23 with data in repository)

| Well | Tops Name (Mck_Murta) | Intervals | Mudlog Match | mTVDss | Ingest | Fluor source | Cuttings pay (m) | Output |
|------|----------------------|-----------|--------------|--------|--------|--------------|------------------|--------|
| JENA 31 | JENA 31 OPS | 197 | 197/197 | 197/197 | Excel | Spreadsheet | 940 | `JENA31_*` |
| JENA 31DW1 | JENA 31DW1 | 165 | 165/165 | 165/165 | Excel | Spreadsheet | 1180 | `JENA31DW1_*` |
| BIALA 19 | BIALA 19 | 237 | 237/237 | 237/237 | Excel | Spreadsheet | 1692 | `BIALA19_*` |
| BIALA 20 | BIALA 20 | 156 | 156/156 | 156/156 | Excel | Spreadsheet | 1202.5 | `BIALA20_*` |
| BIALA 21 | BIALA 21 | 134 | 133/134 | 134/134 | Excel | Spreadsheet | 910.5 | `BIALA21_*` |
| FROSTILLICUS 2 | FROSTILLICUS 2 | 373 | 285/373 | 373/373 | Excel | Spreadsheet | 1677 | `FROSTILLICUS2_*` |
| GRANCHIO 4 | GRANCHIO 4 | 127 | 109/127 | 127/127 | Excel | Spreadsheet | 990 | `GRANCHIO4_*` |
| HOBBES 5 | HOBBES 5 | 96 | 72/96 | 96/96 | Excel | Spreadsheet | 407 | `HOBBES5_*` |
| HOBBES 6 | HOBBES 6 | 78 | 62/78 | 78/78 | Excel | Spreadsheet | 466 | `HOBBES6_*` |
| MCKINLAY 10 | MCKINLAY 10 | 96 | 96/96 | 96/96 | Litho+gas | **Bar-only** | **260** | `MCKINLAY10_*` |
| MCKINLAY 11 | MCKINLAY 11 | 70 | 70/70 | 70/70 | Litho+gas | **Bar-only** | **310** | `MCKINLAY11_*` |
| MCKINLAY 12 | MCKINLAY 12 | 172 | 172/172 | 172/172 | Litho+gas | **Text max** | **795** | `MCKINLAY12_*` |
| MCKINLAY 13 | MCKINLAY 13 | 247 | 247/247 | 247/247 | Litho+gas | **Text max** | **1035** | `MCKINLAY13_*` |
| MCKINLAY 14 | MCKINLAY 14 | 113 | 113/113 | 113/113 | Litho+gas | **Text max** | **440** | `MCKINLAY14_*` |
| MCKINLAY 15 | MCKINLAY 15 | 57 | 57/57 | 57/57 | Litho+gas | **Text max** | **170** | `MCKINLAY15_*` |
| MCKINLAY 20 | MCKINLAY 20 | 275 | 225/275 | 275/275 | Excel | Spreadsheet | 1168 | `MCKINLAY20_*` |
| MCKINLAY 21 | MCKINLAY 21 | 124 | 104/124 | 124/124 | Excel | Spreadsheet | 470 | `MCKINLAY21_*` |
| MCKINLAY 22 | MCKINLAY 22 | 309 | 253/309 | 309/309 | Excel | Spreadsheet | 1302 | `MCKINLAY22_*` |
| MCKINLAY 23 | MCKINLAY 23 | 183 | 111/183 | 183/183 | Excel | Spreadsheet | 870 | `MCKINLAY23_*` |
| MCKINLAY 24 | MCKINLAY 24 | 164 | 138/164 | 164/164 | Excel | Spreadsheet | 749.5 | `MCKINLAY24_*` |
| STIMPEE 6 | STIMPEE 6 | 130 | 116/130 | 130/130 | Excel | Spreadsheet | 1158.5 | `STIMPEE6_*` |
| STIMPEE 7 | STIMPEE 7 | 84 | 79/84 | 84/84 | Excel | Spreadsheet | 707.5 | `STIMPEE7_*` |
| TERINGIE 6 | TERINGIE 6 | 159 | 159/159 | 159/159 | Excel | Spreadsheet | 955 | `TERINGIE6_*` |

**Total McKinlay intervals analysed:** 3,746

### Phase 6 export flags (all 23 wells)

- **RQI v2** (8 components) and **WRCI v2** (`0.40·RQI + 0.20·lowres + 0.20·lowfluor + 0.20·owc_severity`)
- **ZOI** — ±3 neighbour window; ≥2 metrics drop >15% vs neighbours
- **OWC proximity** — `mTVDss` from Petrel `*_trajectory`; tiers from `Oil_Water_Contact.csv`
- **Retired:** `res_sep`, `highperm`, ΔRes — absent from JSON and site
- **Spot-check:** JENA 31 @ 2500 m MD — `mTVDss` −1194.2, `owc_distance_m` 3.79, `owc_near` High, RQI 0.657

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
| Trajectory → mTVDss | **All 23 wells** | Petrel `*_trajectory` ASCII; OWC distance computed at export |

### Litho/gas wells — data gaps

- No sample Excel → fluorescence from mudlog PDF:
  - **Mck 10–11:** graphics bar track (bar-only, raw fill %)
  - **Mck 12–15:** text `FLUOR:` / `FLUORESCENCE:` blocks (ft→m); **upper bound** of each range (e.g. 60–90% → 90%); single-value blocks (`:90%`) now parsed; short gaps (≤55 m) between consecutive blocks bridged; 0% outside blocks
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
| MCKINLAY 12 | Text max | 795 | 65.0% | Single-value `FLUOR:` blocks + gap bridge |
| MCKINLAY 13 | Text max | 1035 | 74.1% | |
| MCKINLAY 14 | Text max | 440 | 54.3% | |
| MCKINLAY 15 | Text max | 170 | 19.5% | |
