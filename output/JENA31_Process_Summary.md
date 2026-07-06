# JENA 31 Analysis — Process Summary

**Date:** 2026-07-06

## Objective

Integrate mudlog PDF cuttings descriptions, sample description spreadsheet intervals, formation top data, and wireline log (GR/Resistivity) data for the **McKinlay Member** only, on horizontal well JENA 31.

## Data Files Used

| # | File | Purpose |
|---|------|---------|
| 1 | `JENA 31_ML_Mudlog_Spud-3394_MD_Final.pdf` | Mudlog cuttings lithology descriptions |
| 2 | `Jena 31- Hz Section Samples Descriptions_3394_TD.xlsx` → **Input Sheet only** | Sample depths, lithology %, grain size, fluorescence, gas |
| 3 | `DC30.xlsx` | DC30 formation top depth |
| 4 | `Mck_Murta.xlsx` | McKinlay Member & Murta Member tops |
| 5 | `Jena_31` (LAS format) | GR, RES_DEEP, RES_SHALLOW curves |

## Processing Steps

### Step 1: Well Identification

- JENA 31 (mudlog filename, TD 3394 m) mapped to **`Jena Dev C Oil Lateral 1_Ops`** in formation top spreadsheets.
- Verified by matching TD and lateral naming convention.

### Step 2: Formation Top Analysis

- Loaded DC30 top and all McKinlay/Murta tops from Excel files.
- Classified tops for horizontal well geometry:
  - **Initial reservoir intersection:** Shallowest McKinlay top + DC30 top
  - **Overburden intersections:** McKinlay & Murta tops within 5 m of each other
  - **Target re-entry:** McKinlay tops without paired Murta top
- Results for JENA 31:
  - DC30: 2249.74 m | McKinlay start: 2250.62 m | TD: 3394 m
  - 4 overburden intersections excluded
  - 2 target re-entry points identified

### Step 3: Sample Interval Construction

- Read Input Sheet from sample description Excel (309 sample points, 1715–3394 m).
- Computed depth intervals as midpoints between consecutive samples.
- Filtered to McKinlay Member: 208 intervals retained, 101 excluded.

### Step 4: Mudlog PDF Extraction

- Extracted text from 62-page mudlog PDF using pdfplumber.
- Parsed lithology descriptions (SANDSTONE, SILTSTONE, etc.) with depth proximity matching.
- Matched mudlog entries to sample intervals within ±15 m window.

### Step 5: Wireline Log Integration

- Parsed LAS file (12,396 depth steps, 0.1524 m sampling).
- For each McKinlay interval, computed average GR, RES_DEEP, RES_SHALLOW.
- Calculated Δ Res = RES_DEEP − RES_SHALLOW as permeability proxy.
- NULL values (-999.25) excluded from averages.

### Step 6: Output Generation

- Combined all data into per-interval markdown entries.
- Flagged all known limitations and data quality issues.

## Key Findings

- McKinlay Member productive interval spans **2255 – 3390 m MD** (208 sample intervals).
- Average sandstone content: **88.4%**.
- Resistivity separation ranges from **3.4 to 303.3 ohm.m** (avg 20.1).
- Mudlog matched descriptions for **207** of 208 intervals.

## Limitations

See Section 3 of the detailed interpretation file for full list. Key items:
- PDF text extraction quality
- 74 m discrepancy between tops file and mudlog McKinlay pick
- Qualitative permeability proxy only
- Heuristic overburden zone exclusion
