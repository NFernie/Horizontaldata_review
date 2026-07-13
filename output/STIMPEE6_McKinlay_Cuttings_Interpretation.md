# STIMPEE 6 — McKinlay Member Cuttings & Log Interpretation

**Generated:** 2026-07-13 02:07 UTC  
**Well:** STIMPEE 6 (STIMPEE 6)  
**TD:** 3186 m MD  

---

## 1. Data Sources & Methodology

| Source | File | Role |
|--------|------|------|
| Mudlog PDF | `Stimpee 6_Mudlog_Spud-3186m_TD_Field_Final.pdf` | Cuttings lithology descriptions |
| Sample Descriptions | `Stimpee 6_Hz Section Samples Descriptions_Rev3.xlsx` (Input Sheet) | Depth intervals & sample properties |
| Formation Tops | `DC30.xlsx`, `Mck_Murta.xlsx` | Reservoir entry & overburden identification |
| Wireline Log (LAS) | `Stimpee_6` | GR, RES_DEEP, RES_SHALLOW |
| Trajectory | `Stimpee_6_trajectory` | mTVDss (Z subsea) |

## 2. Formation Top Analysis

### 2.1 Key Tops

| Marker | Depth (m MD) | Source |
|--------|-------------|--------|
| DC30 | 1631.04 | DC30.xlsx |
| McKinlay Member (shallowest) | 1632.38 | Mck_Murta.xlsx |

### 2.2 McKinlay Member Top Classification

**Initial reservoir entry (DC30 + shallowest McKinlay):** 1632.38 m MD

**Target re-entry (lone McKinlay below an overburden entry pair):**
- 1894.66 m MD
- 1993.00 m MD
- 2396.93 m MD
- 2939.30 m MD

**Overburden entry (Murta + corresponding McKinlay within 5 m):**
| McKinlay entry (m MD) | Murta (m MD) | Δ (m) | Re-entry (m MD) | Zone length (m) |
|-----------------------|-------------|-------|-----------------|-----------------|
| 1767.21 | 1765.88 | 1.33 | 1894.66 | 127.5 |
| 1954.34 | 1956.00 | 1.66 | 1993.00 | 38.7 |
| 2353.86 | 2352.74 | 1.12 | 2396.93 | 43.1 |
| 2845.46 | 2844.00 | 1.46 | 2939.30 | 93.8 |

**McKinlay Member analysis window:** 1632.4 – 3186.1 m MD

**Excluded overburden intervals (entry → re-entry, pay resumes at re-entry):** 1767–1895 m (overburden), 1954–1993 m (overburden), 2354–2397 m (overburden), 2845–2939 m (overburden)

**Samples in McKinlay Member:** 130 of 185 total
- Excluded pre-reservoir: 19
- Excluded overburden intervals: 36

## 3. Known Shortcomings

> **Read this section before using the output.**

1. **Mudlog PDF text extraction is imperfect.** Depth-to-description assignment uses ±15 m proximity heuristics.
2. **Formation top discrepancies** between Mck_Murta.xlsx and mudlog PDF picks are noted where present.
3. **Well name mapping:** STIMPEE 6 → `STIMPEE 6` (verified by TD and LAS WELL header).
4. **Sample intervals** are midpoints between consecutive sample depths — variable widths where spacing is irregular.
5. **Water-risk flags** use RQI, fluorescence, resistivity, GR, ZOI, and OWC proximity (see export).
6. **NULL LAS values** (-999.25) excluded from averages.
7. **Exclusion zones** span from each Murta/McKinlay overburden entry to the next lone McKinlay re-entry below (or entry + 50 m MD if none mapped). Later entry pairs inside an existing exclusion interval are treated as the same overburden excursion. Initial DC30/McKinlay reservoir entry is not excluded.
8. **Input Sheet only** — Calculations Sheet not used.
## 4. McKinlay Member Sample Intervals

Each section: depth interval, spreadsheet sample, mudlog cuttings, wireline log averages.

### 1635 m MD — Interval 1632.5 – 1637.5 m

**Sample Description (spreadsheet):** Sample 1635m: Tr siderite in 30% Siltstone, Tr siderite in 70% very fine to medium Sandstone, 60% dull  to  bright FLUOR in SST. TG 250U

| Property | Value |
|----------|-------|
| % Sandstone | 70 |
| Grain Size | vf-med (max: M) |
| Porosity Class | none |
| Fluorescence | 60.0% dll - bri |
| Total Gas | 250 U |
| mTVDss | -1208.64 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.4 | 33 |
| RES_DEEP (ohm.m) | 83.24 | 33 |
| RES_SHALLOW (ohm.m) | 48.23 | 33 |

---

### 1640 m MD — Interval 1637.5 – 1642.5 m

**Sample Description (spreadsheet):** Sample 1640m: 10% Siltstone, Tr siderite in 90% fine to medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 255U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-med (max: M) |
| Porosity Class | none |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 255 U |
| mTVDss | -1208.71 m |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.3 | 33 |
| RES_DEEP (ohm.m) | 54.31 | 33 |
| RES_SHALLOW (ohm.m) | 40.21 | 33 |

---

### 1645 m MD — Interval 1642.5 – 1647.5 m

**Sample Description (spreadsheet):** Sample 1645m: 0% Siltstone, Tr siderite in 100% fine to medium, rare coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 267U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med, rr crs (max: C) |
| Porosity Class | none |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.55) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 267 U |
| mTVDss | -1208.78 m |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1660m: lt brn,trnsl,opq,lt gry,vf-med,rr crs,dom f agg,mod wl srt, dom sbang-sbrnd,com wk sil cmt,mnr lt brn-lt gry arg mtx,tr carb flks & micrlams,rr sid,fri agg,mnr-com lse,
- **SANDSTONE** @ ~1660m: lt brn,opq,trnsl,lt gry,f-v crs,dom med,mod srt,dom sbang- sbrnd,mnr wk-occ mod strg sil cmt, mnr-tr lt gry arg mtx,tr carb flks, rr sid,fri-mod hd agg,com-dom lse,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.3 | 33 |
| RES_DEEP (ohm.m) | 46.90 | 33 |
| RES_SHALLOW (ohm.m) | 42.54 | 33 |

---

### 1650 m MD — Interval 1647.5 – 1652.5 m

**Sample Description (spreadsheet):** Sample 1650m: 5% Siltstone, 95% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 224U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-crs (max: C) |
| Porosity Class | none |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.55) |
| Fluorescence | 100.0% bri |
| Total Gas | 224 U |
| mTVDss | -1208.84 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1660m: lt brn,trnsl,opq,lt gry,vf-med,rr crs,dom f agg,mod wl srt, dom sbang-sbrnd,com wk sil cmt,mnr lt brn-lt gry arg mtx,tr carb flks & micrlams,rr sid,fri agg,mnr-com lse,
- **SANDSTONE** @ ~1660m: lt brn,opq,trnsl,lt gry,f-v crs,dom med,mod srt,dom sbang- sbrnd,mnr wk-occ mod strg sil cmt, mnr-tr lt gry arg mtx,tr carb flks, rr sid,fri-mod hd agg,com-dom lse,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.0 | 33 |
| RES_DEEP (ohm.m) | 43.05 | 33 |
| RES_SHALLOW (ohm.m) | 39.74 | 33 |

---

### 1655 m MD — Interval 1652.5 – 1657.5 m

**Sample Description (spreadsheet):** Sample 1655m: 0% Siltstone, Tr siderite in 100% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 235U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-crs (max: C) |
| Porosity Class | none |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.55) |
| Fluorescence | 100.0% bri |
| Total Gas | 235 U |
| mTVDss | -1208.86 m |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1660m: lt brn,trnsl,opq,lt gry,vf-med,rr crs,dom f agg,mod wl srt, dom sbang-sbrnd,com wk sil cmt,mnr lt brn-lt gry arg mtx,tr carb flks & micrlams,rr sid,fri agg,mnr-com lse,
- **SANDSTONE** @ ~1660m: lt brn,opq,trnsl,lt gry,f-v crs,dom med,mod srt,dom sbang- sbrnd,mnr wk-occ mod strg sil cmt, mnr-tr lt gry arg mtx,tr carb flks, rr sid,fri-mod hd agg,com-dom lse,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.5 | 32 |
| RES_DEEP (ohm.m) | 37.29 | 32 |
| RES_SHALLOW (ohm.m) | 35.23 | 32 |

---

### 1660 m MD — Interval 1657.5 – 1662.5 m

**Sample Description (spreadsheet):** Sample 1660m: 0% Siltstone, rare siderite in 100% dominantly fine to medium, rare coarse Sandstone, 100% bright FLUOR in SST. TG 185U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | dom f-med, rr crs (max: C) |
| Porosity Class | none |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.55) |
| Fluorescence | 100.0% bri |
| Total Gas | 185 U |
| mTVDss | -1208.84 m |
| FeCO₃ in Sandstone | rr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1660m: lt brn,trnsl,opq,lt gry,vf-med,rr crs,dom f agg,mod wl srt, dom sbang-sbrnd,com wk sil cmt,mnr lt brn-lt gry arg mtx,tr carb flks & micrlams,rr sid,fri agg,mnr-com lse,
- **SANDSTONE** @ ~1660m: lt brn,opq,trnsl,lt gry,f-v crs,dom med,mod srt,dom sbang- sbrnd,mnr wk-occ mod strg sil cmt, mnr-tr lt gry arg mtx,tr carb flks, rr sid,fri-mod hd agg,com-dom lse,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.6 | 33 |
| RES_DEEP (ohm.m) | 37.80 | 33 |
| RES_SHALLOW (ohm.m) | 34.61 | 33 |

---

### 1665 m MD — Interval 1662.5 – 1667.5 m

**Sample Description (spreadsheet):** Sample 1665m: 5% Siltstone, rare siderite in 95% very fine to medium, rare coarse Sandstone, 100% bright FLUOR in SST. TG 179U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-med, rr crs (max: C) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.55) |
| Fluorescence | 100.0% bri |
| Total Gas | 179 U |
| mTVDss | -1208.83 m |
| FeCO₃ in Sandstone | rr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1660m: lt brn,trnsl,opq,lt gry,vf-med,rr crs,dom f agg,mod wl srt, dom sbang-sbrnd,com wk sil cmt,mnr lt brn-lt gry arg mtx,tr carb flks & micrlams,rr sid,fri agg,mnr-com lse,
- **SANDSTONE** @ ~1660m: lt brn,opq,trnsl,lt gry,f-v crs,dom med,mod srt,dom sbang- sbrnd,mnr wk-occ mod strg sil cmt, mnr-tr lt gry arg mtx,tr carb flks, rr sid,fri-mod hd agg,com-dom lse,
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.3 | 33 |
| RES_DEEP (ohm.m) | 35.37 | 33 |
| RES_SHALLOW (ohm.m) | 32.27 | 33 |

---

### 1670 m MD — Interval 1667.5 – 1672.5 m

**Sample Description (spreadsheet):** Sample 1670m: 0% Siltstone, rare siderite in 100% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 218U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.55) |
| Fluorescence | 100.0% bri |
| Total Gas | 218 U |
| mTVDss | -1208.82 m |
| FeCO₃ in Sandstone | rr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1660m: lt brn,trnsl,opq,lt gry,vf-med,rr crs,dom f agg,mod wl srt, dom sbang-sbrnd,com wk sil cmt,mnr lt brn-lt gry arg mtx,tr carb flks & micrlams,rr sid,fri agg,mnr-com lse,
- **SANDSTONE** @ ~1660m: lt brn,opq,trnsl,lt gry,f-v crs,dom med,mod srt,dom sbang- sbrnd,mnr wk-occ mod strg sil cmt, mnr-tr lt gry arg mtx,tr carb flks, rr sid,fri-mod hd agg,com-dom lse,
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 52.6 | 33 |
| RES_DEEP (ohm.m) | 39.15 | 33 |
| RES_SHALLOW (ohm.m) | 39.33 | 33 |

---

### 1675 m MD — Interval 1672.5 – 1677.5 m

**Sample Description (spreadsheet):** Sample 1675m: 0% Siltstone, rare siderite in 100% very fine to coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 378U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.55) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 378 U |
| mTVDss | -1208.79 m |
| FeCO₃ in Sandstone | rr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1660m: lt brn,trnsl,opq,lt gry,vf-med,rr crs,dom f agg,mod wl srt, dom sbang-sbrnd,com wk sil cmt,mnr lt brn-lt gry arg mtx,tr carb flks & micrlams,rr sid,fri agg,mnr-com lse,
- **SANDSTONE** @ ~1660m: lt brn,opq,trnsl,lt gry,f-v crs,dom med,mod srt,dom sbang- sbrnd,mnr wk-occ mod strg sil cmt, mnr-tr lt gry arg mtx,tr carb flks, rr sid,fri-mod hd agg,com-dom lse,
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 64.7 | 33 |
| RES_DEEP (ohm.m) | 48.62 | 33 |
| RES_SHALLOW (ohm.m) | 49.87 | 33 |

---

### 1680 m MD — Interval 1677.5 – 1685.0 m

**Sample Description (spreadsheet):** Sample 1680m: 0% Siltstone, rare siderite in 100% fine to coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 370U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-crs (max: C) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 370 U |
| mTVDss | -1208.75 m |
| FeCO₃ in Sandstone | rr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1680m: lt brn,opq,trnsl,lt gry,vf-v crs,mod srt,dom sbang-sbrnd, mnr wk-occ mod strg sil cmt,mnr-tr lt gry arg mtx,tr carb flks,rr sid,fri- mod hd agg,com-dom lse,v pr-fr vis por,
- **SANDSTONE** @ ~1680m: lt brn,opq,trnsl,lt gry,f-crs,dom med,mod srt, sbang- sbrnd,mnr wk-occ mod strg sil cmt, mnr-tr lt gry arg mtx,tr carb flks, rr sid,fri-mod hd agg,com lse,v pr-fr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 62.6 | 49 |
| RES_DEEP (ohm.m) | 45.88 | 49 |
| RES_SHALLOW (ohm.m) | 44.63 | 49 |

---

### 1690 m MD — Interval 1685.0 – 1695.0 m

**Sample Description (spreadsheet):** Sample 1690m:   siderite in 0% Siltstone, 100% fine to verycoarse Sandstone, 100% bright FLUOR in SST. TG 312U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-vcrs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% bri |
| Total Gas | 312 U |
| mTVDss | -1208.69 m |
| FeCO₃ in Siltstone |   |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1680m: lt brn,opq,trnsl,lt gry,vf-v crs,mod srt,dom sbang-sbrnd, mnr wk-occ mod strg sil cmt,mnr-tr lt gry arg mtx,tr carb flks,rr sid,fri- mod hd agg,com-dom lse,v pr-fr vis por,
- **SANDSTONE** @ ~1680m: lt brn,opq,trnsl,lt gry,f-crs,dom med,mod srt, sbang- sbrnd,mnr wk-occ mod strg sil cmt, mnr-tr lt gry arg mtx,tr carb flks, rr sid,fri-mod hd agg,com lse,v pr-fr
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.9 | 66 |
| RES_DEEP (ohm.m) | 47.24 | 66 |
| RES_SHALLOW (ohm.m) | 43.01 | 66 |

---

### 1700 m MD — Interval 1695.0 – 1705.0 m

**Sample Description (spreadsheet):** Sample 1700m: 0% Siltstone, 100% very fine to verycoarse Sandstone, 100% bright FLUOR in SST. TG 399U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-vcrs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% bri |
| Total Gas | 399 U |
| mTVDss | -1208.69 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1680m: lt brn,opq,trnsl,lt gry,vf-v crs,mod srt,dom sbang-sbrnd, mnr wk-occ mod strg sil cmt,mnr-tr lt gry arg mtx,tr carb flks,rr sid,fri- mod hd agg,com-dom lse,v pr-fr vis por,
- **SANDSTONE** @ ~1680m: lt brn,opq,trnsl,lt gry,f-crs,dom med,mod srt, sbang- sbrnd,mnr wk-occ mod strg sil cmt, mnr-tr lt gry arg mtx,tr carb flks, rr sid,fri-mod hd agg,com lse,v pr-fr
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.5 | 65 |
| RES_DEEP (ohm.m) | 48.48 | 65 |
| RES_SHALLOW (ohm.m) | 45.72 | 65 |

---

### 1710 m MD — Interval 1705.0 – 1715.0 m

**Sample Description (spreadsheet):** Sample 1710m: 0% Siltstone, 100% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 340U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-crs (max: C) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% bri |
| Total Gas | 340 U |
| mTVDss | -1208.70 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1710m: lt brn,opq,trnsl,lt gry,f-crs,dom med,mod srt, sbang- 70 / 6 / 5 / 8 / 11 432 U sbrnd,mnr wk-occ mod strg sil cmt, mnr-tr lt gry arg mtx,tr carb flks, 1720 rr sid,fri-mod hd agg,com lse,v pr-fr
- **SILTSTONE** @ ~1710m: med-dk gry,brn gry,arg,tr- 14 18 28 1K 10K mnr aren,tr micmic,tr carb flks,tr sid, mod hd-v hd,sbblky-occ sbfiss. 80%-100% of SST;bri yel-yel wh evn
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.5 | 66 |
| RES_DEEP (ohm.m) | 47.19 | 66 |
| RES_SHALLOW (ohm.m) | 45.68 | 66 |

---

### 1720 m MD — Interval 1715.0 – 1725.0 m

**Sample Description (spreadsheet):** Sample 1720m: 0% Siltstone, 100% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 432U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-crs (max: C) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% bri |
| Total Gas | 432 U |
| mTVDss | -1208.74 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1710m: lt brn,opq,trnsl,lt gry,f-crs,dom med,mod srt, sbang- 70 / 6 / 5 / 8 / 11 432 U sbrnd,mnr wk-occ mod strg sil cmt, mnr-tr lt gry arg mtx,tr carb flks, 1720 rr sid,fri-mod hd agg,com lse,v pr-fr
- **SILTSTONE** @ ~1710m: med-dk gry,brn gry,arg,tr- 14 18 28 1K 10K mnr aren,tr micmic,tr carb flks,tr sid, mod hd-v hd,sbblky-occ sbfiss. 80%-100% of SST;bri yel-yel wh evn
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.3 | 65 |
| RES_DEEP (ohm.m) | 48.90 | 65 |
| RES_SHALLOW (ohm.m) | 46.56 | 65 |

---

### 1730 m MD — Interval 1725.0 – 1735.0 m

**Sample Description (spreadsheet):** Sample 1730m: 5% Siltstone, 95% fine to medium,trace coarse Sandstone, 100% bright FLUOR in SST. TG 404U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med,tr crs (max: C) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% bri |
| Total Gas | 404 U |
| mTVDss | -1208.79 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1710m: lt brn,opq,trnsl,lt gry,f-crs,dom med,mod srt, sbang- 70 / 6 / 5 / 8 / 11 432 U sbrnd,mnr wk-occ mod strg sil cmt, mnr-tr lt gry arg mtx,tr carb flks, 1720 rr sid,fri-mod hd agg,com lse,v pr-fr
- **SILTSTONE** @ ~1710m: med-dk gry,brn gry,arg,tr- 14 18 28 1K 10K mnr aren,tr micmic,tr carb flks,tr sid, mod hd-v hd,sbblky-occ sbfiss. 80%-100% of SST;bri yel-yel wh evn
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.5 | 66 |
| RES_DEEP (ohm.m) | 49.88 | 66 |
| RES_SHALLOW (ohm.m) | 38.94 | 66 |

---

### 1740 m MD — Interval 1735.0 – 1745.0 m

**Sample Description (spreadsheet):** Sample 1740m: 10% Siltstone, 90% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 351U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-crs (max: C) |
| Porosity Class | none |
| Fluorescence | 100.0% bri |
| Total Gas | 351 U |
| mTVDss | -1208.88 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.1 | 66 |
| RES_DEEP (ohm.m) | 50.16 | 66 |
| RES_SHALLOW (ohm.m) | 43.76 | 66 |

---

### 1750 m MD — Interval 1745.0 – 1755.0 m

**Sample Description (spreadsheet):** Sample 1750m: 0% Siltstone, 100% fine to medium,trace coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 478U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med,tr crs (max: C) |
| Porosity Class | none |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 478 U |
| mTVDss | -1208.98 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.0 | 65 |
| RES_DEEP (ohm.m) | 43.08 | 65 |
| RES_SHALLOW (ohm.m) | 41.51 | 65 |

---

### 1760 m MD — Interval 1755.0 – 1765.0 m

**Sample Description (spreadsheet):** Sample 1760m: 0% Siltstone, 100% very fine to medium, rare coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 311U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med, rr crs (max: M ) |
| Porosity Class | none |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 311 U |
| mTVDss | -1209.11 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.5 | 66 |
| RES_DEEP (ohm.m) | 43.80 | 66 |
| RES_SHALLOW (ohm.m) | 35.64 | 66 |

---

### 1900 m MD — Interval 1897.5 – 1902.5 m

**Sample Description (spreadsheet):** Sample 1900m: 5% Siltstone, 95% very fine to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 175U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 175 U |
| mTVDss | -1206.75 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1890m: v pl brn,off wh,trnsl,clr, vf-crs,ang-sbrnd,pr srt,wk sil cmt, tr wh-off wh arg mtx,loc com slty lams, com crs frstd qtz grs,lse-mod hd aggs, fr vis & inf por,fluor.
- **SANDSTONE** @ ~1890m: v pl brn,off wh,trnsl,clr, vf-crs,ang-sbrnd,pr srt,wk sil cmt, tr wh-off wh arg mtx,loc com slty lams, com crs frstd qtz grs,lse-mod hd aggs, fr vis & inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.1 | 33 |
| RES_DEEP (ohm.m) | 46.67 | 33 |
| RES_SHALLOW (ohm.m) | 40.62 | 33 |

---

### 1905 m MD — Interval 1902.5 – 1907.5 m

**Sample Description (spreadsheet):** Sample 1905m: 10% Siltstone, 90% very fine to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 206U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 206 U |
| mTVDss | -1206.62 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1890m: v pl brn,off wh,trnsl,clr, vf-crs,ang-sbrnd,pr srt,wk sil cmt, tr wh-off wh arg mtx,loc com slty lams, com crs frstd qtz grs,lse-mod hd aggs, fr vis & inf por,fluor.
- **SANDSTONE** @ ~1890m: v pl brn,off wh,trnsl,clr, vf-crs,ang-sbrnd,pr srt,wk sil cmt, tr wh-off wh arg mtx,loc com slty lams, com crs frstd qtz grs,lse-mod hd aggs, fr vis & inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.0 | 33 |
| RES_DEEP (ohm.m) | 45.95 | 33 |
| RES_SHALLOW (ohm.m) | 43.33 | 33 |

---

### 1910 m MD — Interval 1907.5 – 1912.5 m

**Sample Description (spreadsheet):** Sample 1910m: 5% Siltstone, 95% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 145U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% bri |
| Total Gas | 145 U |
| mTVDss | -1206.48 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1910m: pl brn,v lt gry brn, off wh,trnsl,vf-f,rr crs,mod wl srt, 76 / 6 / 4 / 6 / 8 208 U sbang-sbrnd,sil cmt,tr wh-off wh arg mtx,tr slty lams,rr mic,fri-mod hd, pr vis por,bri fluor.
- **SANDSTONE** @ ~1910m: pl brn,v lt gry brn, off wh,trnsl,vf-f,rr crs,mod wl srt, sbang-sbrnd,sil cmt,tr wh-off wh arg mtx,tr slty lams,tr rock flour,rr mic, fri-mod hd,pr vis por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.8 | 33 |
| RES_DEEP (ohm.m) | 48.22 | 33 |
| RES_SHALLOW (ohm.m) | 45.50 | 33 |

---

### 1915 m MD — Interval 1912.5 – 1917.5 m

**Sample Description (spreadsheet):** Sample 1915m: 5% Siltstone, 95% very fine to fine, rare coarse Sandstone, 100% bright FLUOR in SST. TG 166U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-f, rr crs (max: C) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% bri |
| Total Gas | 166 U |
| mTVDss | -1206.35 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1910m: pl brn,v lt gry brn, off wh,trnsl,vf-f,rr crs,mod wl srt, 76 / 6 / 4 / 6 / 8 208 U sbang-sbrnd,sil cmt,tr wh-off wh arg mtx,tr slty lams,rr mic,fri-mod hd, pr vis por,bri fluor.
- **SANDSTONE** @ ~1910m: pl brn,v lt gry brn, off wh,trnsl,vf-f,rr crs,mod wl srt, sbang-sbrnd,sil cmt,tr wh-off wh arg mtx,tr slty lams,tr rock flour,rr mic, fri-mod hd,pr vis por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.7 | 33 |
| RES_DEEP (ohm.m) | 51.24 | 33 |
| RES_SHALLOW (ohm.m) | 48.35 | 33 |

---

### 1920 m MD — Interval 1917.5 – 1922.5 m

**Sample Description (spreadsheet):** Sample 1920m: 5% Siltstone, 95% very fine to fine, rare coarse Sandstone, 100% bright FLUOR in SST. TG 189U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-f, rr crs (max: C) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% bri |
| Total Gas | 189 U |
| mTVDss | -1206.23 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1910m: pl brn,v lt gry brn, off wh,trnsl,vf-f,rr crs,mod wl srt, 76 / 6 / 4 / 6 / 8 208 U sbang-sbrnd,sil cmt,tr wh-off wh arg mtx,tr slty lams,rr mic,fri-mod hd, pr vis por,bri fluor.
- **SANDSTONE** @ ~1910m: pl brn,v lt gry brn, off wh,trnsl,vf-f,rr crs,mod wl srt, sbang-sbrnd,sil cmt,tr wh-off wh arg mtx,tr slty lams,tr rock flour,rr mic, fri-mod hd,pr vis por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.2 | 32 |
| RES_DEEP (ohm.m) | 54.63 | 32 |
| RES_SHALLOW (ohm.m) | 48.85 | 32 |

---

### 1925 m MD — Interval 1922.5 – 1927.5 m

**Sample Description (spreadsheet):** Sample 1925m: 5% Siltstone, 95% very fine to fine, rare coarse Sandstone, 100% bright FLUOR in SST. TG 267U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-f, rr crs (max: C) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% bri |
| Total Gas | 267 U |
| mTVDss | -1206.24 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1910m: pl brn,v lt gry brn, off wh,trnsl,vf-f,rr crs,mod wl srt, 76 / 6 / 4 / 6 / 8 208 U sbang-sbrnd,sil cmt,tr wh-off wh arg mtx,tr slty lams,rr mic,fri-mod hd, pr vis por,bri fluor.
- **SANDSTONE** @ ~1910m: pl brn,v lt gry brn, off wh,trnsl,vf-f,rr crs,mod wl srt, sbang-sbrnd,sil cmt,tr wh-off wh arg mtx,tr slty lams,tr rock flour,rr mic, fri-mod hd,pr vis por,bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.0 | 33 |
| RES_DEEP (ohm.m) | 52.42 | 33 |
| RES_SHALLOW (ohm.m) | 48.49 | 33 |

---

### 1930 m MD — Interval 1927.5 – 1935.0 m

**Sample Description (spreadsheet):** Sample 1930m: 5% Siltstone, 95% very fine to fine, rare coarse Sandstone, 100% bright FLUOR in SST. TG 191U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-f, rr crs (max: C) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% bri |
| Total Gas | 191 U |
| mTVDss | -1206.26 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1940m: v lt gry brn,trnsl, off wh,vf-f,wl srt,sbrnd-sbang,sil cmt,tr off wh arg mtx,tr slty lams, rr carb spks,fri-mod hd,pr vis por, mod bri-bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.2 | 49 |
| RES_DEEP (ohm.m) | 61.61 | 49 |
| RES_SHALLOW (ohm.m) | 49.13 | 49 |

---

### 1940 m MD — Interval 1935.0 – 1945.0 m

**Sample Description (spreadsheet):** Sample 1940m: 5% Siltstone, 95% very fine to medium, rare coarse Sandstone, 100% bright FLUOR in SST. TG 245U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-med, rr crs (max: C) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% bri |
| Total Gas | 245 U |
| mTVDss | -1206.32 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1940m: v lt gry brn,trnsl, off wh,vf-f,wl srt,sbrnd-sbang,sil cmt,tr off wh arg mtx,tr slty lams, rr carb spks,fri-mod hd,pr vis por, mod bri-bri fluor.
- **SILTSTONE** @ ~1960m: lt-med gry,med brn gry,aren,micmic,com sid frags,tr 46 / 6 / 8 / 16 / 24 liths,mod hd-hd,blky-sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.3 | 66 |
| RES_DEEP (ohm.m) | 63.94 | 66 |
| RES_SHALLOW (ohm.m) | 44.50 | 66 |

---

### 2000 m MD — Interval 1995.0 – 2005.0 m

**Sample Description (spreadsheet):** Sample 2000m: common siderite in 50% Siltstone, 50% very fine to fine Sandstone, 90% dull to moderately bright FLUOR in SST. TG 247U

| Property | Value |
|----------|-------|
| % Sandstone | 50 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% dll-mod bri |
| Total Gas | 247 U |
| mTVDss | -1208.60 m |
| FeCO₃ in Siltstone | com |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1980m: lt-med gry,med brn gry,aren,micmic,com sid frags,tr liths,mod hd-hd,blky-sbblky.
- **SANDSTONE** @ ~1990m: pl brn,lt brn gry,off wh,vf-f,grd to SLTST,wl srt,sbang- sbrnd,sil cmt tr off wh arg mtx,com slty lams,loc com sid,tr liths,fri- 76 / 6 / 4 / 6 / 8 297 U mod hd,pr vis por,dll-mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.6 | 66 |
| RES_DEEP (ohm.m) | 44.64 | 66 |
| RES_SHALLOW (ohm.m) | 37.28 | 66 |

---

### 2010 m MD — Interval 2005.0 – 2015.0 m

**Sample Description (spreadsheet):** Sample 2010m: trace siderite in 20% Siltstone, 80% very fine to fine, rare coarse Sandstone, 100% bright FLUOR in SST. TG 135U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | vf-f, rr crs (max: C) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% bri |
| Total Gas | 135 U |
| mTVDss | -1209.04 m |
| FeCO₃ in Siltstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1990m: pl brn,lt brn gry,off wh,vf-f,grd to SLTST,wl srt,sbang- sbrnd,sil cmt tr off wh arg mtx,com slty lams,loc com sid,tr liths,fri- 76 / 6 / 4 / 6 / 8 297 U mod hd,pr vis por,dll-mod bri fluor.
- **SANDSTONE** @ ~1990m: pl brn,lt brn gry, trnsl,vf-f,rr lse crs grs,mod wl srt, sbang-sbrnd,sil cmt,tr off wh arg mtx, com slty lams,rr carb spks,fri-mod hd,pr vis por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.7 | 65 |
| RES_DEEP (ohm.m) | 33.75 | 65 |
| RES_SHALLOW (ohm.m) | 26.77 | 65 |

---

### 2020 m MD — Interval 2015.0 – 2025.0 m

**Sample Description (spreadsheet):** Sample 2020m: 10% Siltstone, 90% very fine to fine,trace medium,rare coarse Sandstone, 80% moderately bright to bright FLUOR in SST. TG 154U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-f,tr med,rr crs (max: C) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% mod bri-bri |
| Total Gas | 154 U |
| mTVDss | -1209.37 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2010m: pl brn,lt brn gry, 72 / 6 / 4 / 7 / 11 176 U trnsl,vf-f,mnr med,rr crs,mod srt, sbang-sbrnd,sil cmt,tr off wh arg mtx, com slty lams,rr carb spks,fri-mod hd,pr vis por,bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.8 | 66 |
| RES_DEEP (ohm.m) | 26.64 | 66 |
| RES_SHALLOW (ohm.m) | 21.09 | 66 |

---

### 2030 m MD — Interval 2025.0 – 2035.0 m

**Sample Description (spreadsheet):** Sample 2030m: trace siderite in 30% Siltstone, 70% very fine to medium, rare coarse Sandstone, 50% moderately bright to bright FLUOR in SST. TG 165U

| Property | Value |
|----------|-------|
| % Sandstone | 70 |
| Grain Size | vf-med, rr crs (max: C) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 50.0% mod bri-bri |
| Total Gas | 165 U |
| mTVDss | -1209.52 m |
| FeCO₃ in Siltstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2010m: pl brn,lt brn gry, 72 / 6 / 4 / 7 / 11 176 U trnsl,vf-f,mnr med,rr crs,mod srt, sbang-sbrnd,sil cmt,tr off wh arg mtx, com slty lams,rr carb spks,fri-mod hd,pr vis por,bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.9 | 66 |
| RES_DEEP (ohm.m) | 26.49 | 66 |
| RES_SHALLOW (ohm.m) | 21.49 | 66 |

---

### 2040 m MD — Interval 2035.0 – 2045.0 m

**Sample Description (spreadsheet):** Sample 2040m: trace siderite in 10% Siltstone, rare siderite in 90% very fine to medium, rare coarse Sandstone, 80% moderately bright to bright FLUOR in SST. TG 200U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-med, rr crs (max: C) |
| Porosity Class | none |
| Fluorescence | 80.0% mod bri-bri |
| Total Gas | 200 U |
| mTVDss | -1209.57 m |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | rr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.8 | 65 |
| RES_DEEP (ohm.m) | 27.41 | 65 |
| RES_SHALLOW (ohm.m) | 23.39 | 65 |

---

### 2050 m MD — Interval 2045.0 – 2055.0 m

**Sample Description (spreadsheet):** Sample 2050m: 10% Siltstone, rare siderite in 90% very fine to fine, minor medium Sandstone, 80% moderately bright to bright FLUOR in SST. TG 150U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-f, mnr med (max: M) |
| Porosity Class | none |
| Hardness | hd (0.20) |
| Fluorescence | 80.0% mod bri-bri |
| Total Gas | 150 U |
| mTVDss | -1209.51 m |
| FeCO₃ in Sandstone | rr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2070m: med gry,gry brn,lt gry,arg,com aren i/p,grd to vf SST, com sandy lams,tr-mnr carb flks & micrlams,trmicmic,frm-hd,sbblky- micrlams,tr micmic,frmhd,sbblky

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.2 | 66 |
| RES_DEEP (ohm.m) | 24.79 | 66 |
| RES_SHALLOW (ohm.m) | 21.72 | 66 |

---

### 2060 m MD — Interval 2055.0 – 2065.0 m

**Sample Description (spreadsheet):** Sample 2060m: 5% Siltstone, 95% very fine to fine, minor medium Sandstone, 80% moderately bright to bright FLUOR in SST. TG 195U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-f, mnr med (max: M ) |
| Porosity Class | none |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | mnr wk sil cmt (0.71) |
| Fluorescence | 80.0% mod bri-bri |
| Total Gas | 195 U |
| mTVDss | -1209.37 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2070m: med gry,gry brn,lt gry,arg,com aren i/p,grd to vf SST, com sandy lams,tr-mnr carb flks & micrlams,trmicmic,frm-hd,sbblky- micrlams,tr micmic,frmhd,sbblky
- **SANDSTONE** @ ~2080m: clr,trnsl,opq,lt gry,lt brn,mnr vf-f aggs,f-v crs lse, com-dom crs,mod-pr srt,dom sbang- sbrnd,tr-mnr wk sil cmt,tr-mnr lt brn- lt gry slty mtx,tr carb flks,tr sid,fri

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.6 | 65 |
| RES_DEEP (ohm.m) | 31.06 | 65 |
| RES_SHALLOW (ohm.m) | 27.11 | 65 |

---

### 2070 m MD — Interval 2065.0 – 2075.0 m

**Sample Description (spreadsheet):** Sample 2070m: 10% Siltstone, rare siderite in 90% very fine to fine, fine to medium lse Sandstone, 60% moderately bright to bright FLUOR in SST. TG 156U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-f, f-med lse (max: M ) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | mnr wk sil cmt (0.71) |
| Fluorescence | 60.0% mod bri-bri |
| Total Gas | 156 U |
| mTVDss | -1209.17 m |
| FeCO₃ in Sandstone | rr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2070m: med gry,gry brn,lt gry,arg,com aren i/p,grd to vf SST, com sandy lams,tr-mnr carb flks & micrlams,trmicmic,frm-hd,sbblky- micrlams,tr micmic,frmhd,sbblky
- **SANDSTONE** @ ~2080m: clr,trnsl,opq,lt gry,lt brn,mnr vf-f aggs,f-v crs lse, com-dom crs,mod-pr srt,dom sbang- sbrnd,tr-mnr wk sil cmt,tr-mnr lt brn- lt gry slty mtx,tr carb flks,tr sid,fri
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.7 | 66 |
| RES_DEEP (ohm.m) | 34.79 | 66 |
| RES_SHALLOW (ohm.m) | 28.06 | 66 |

---

### 2080 m MD — Interval 2075.0 – 2085.0 m

**Sample Description (spreadsheet):** Sample 2080m: 10% Siltstone, 90% dominantly fine Sandstone, 70% moderately bright to bright FLUOR in SST. TG 189U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | dom f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | mnr wk sil cmt (0.71) |
| Fluorescence | 70.0% mod bri-bri |
| Total Gas | 189 U |
| mTVDss | -1208.93 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2070m: med gry,gry brn,lt gry,arg,com aren i/p,grd to vf SST, com sandy lams,tr-mnr carb flks & micrlams,trmicmic,frm-hd,sbblky- micrlams,tr micmic,frmhd,sbblky
- **SANDSTONE** @ ~2080m: clr,trnsl,opq,lt gry,lt brn,mnr vf-f aggs,f-v crs lse, com-dom crs,mod-pr srt,dom sbang- sbrnd,tr-mnr wk sil cmt,tr-mnr lt brn- lt gry slty mtx,tr carb flks,tr sid,fri
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 110.3 | 66 |
| RES_DEEP (ohm.m) | 39.66 | 66 |
| RES_SHALLOW (ohm.m) | 28.06 | 66 |

---

### 2090 m MD — Interval 2085.0 – 2095.0 m

**Sample Description (spreadsheet):** Sample 2090m: trace siderite in 10% Siltstone, trace siderite in 90% very fine to very coarse Sandstone, 100% bright  FLUOR in SST. TG 229U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-v crs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | mnr wk sil cmt (0.71) |
| Fluorescence | 100.0% bri  |
| Total Gas | 229 U |
| mTVDss | -1208.68 m |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2070m: med gry,gry brn,lt gry,arg,com aren i/p,grd to vf SST, com sandy lams,tr-mnr carb flks & micrlams,trmicmic,frm-hd,sbblky- micrlams,tr micmic,frmhd,sbblky
- **SANDSTONE** @ ~2080m: clr,trnsl,opq,lt gry,lt brn,mnr vf-f aggs,f-v crs lse, com-dom crs,mod-pr srt,dom sbang- sbrnd,tr-mnr wk sil cmt,tr-mnr lt brn- lt gry slty mtx,tr carb flks,tr sid,fri
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.4 | 65 |
| RES_DEEP (ohm.m) | 42.95 | 65 |
| RES_SHALLOW (ohm.m) | 30.19 | 65 |

---

### 2100 m MD — Interval 2095.0 – 2105.0 m

**Sample Description (spreadsheet):** Sample 2100m: 10% Siltstone, 90% medium to coarse Sandstone, 100% bright  FLUOR in SST. TG 167U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | med-crs (max: C) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | mnr wk sil cmt (0.71) |
| Fluorescence | 100.0% bri  |
| Total Gas | 167 U |
| mTVDss | -1208.41 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2080m: clr,trnsl,opq,lt gry,lt brn,mnr vf-f aggs,f-v crs lse, com-dom crs,mod-pr srt,dom sbang- sbrnd,tr-mnr wk sil cmt,tr-mnr lt brn- lt gry slty mtx,tr carb flks,tr sid,fri
- **SANDSTONE** @ ~2090m: clr,trnsl,opq,med- v crs,mod-pr srt,dom sbang-sbrnd, tr ang,tr sil cmt,tr mtx,cln,dom lse, fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.5 | 66 |
| RES_DEEP (ohm.m) | 35.82 | 66 |
| RES_SHALLOW (ohm.m) | 26.19 | 66 |

---

### 2110 m MD — Interval 2105.0 – 2115.0 m

**Sample Description (spreadsheet):** Sample 2110m: 0% Siltstone, 100% medium to verycoarse Sandstone, 100% bright  FLUOR in SST. TG 155U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | med-vcrs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 100.0% bri  |
| Total Gas | 155 U |
| mTVDss | -1208.14 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2090m: clr,trnsl,opq,med- v crs,mod-pr srt,dom sbang-sbrnd, tr ang,tr sil cmt,tr mtx,cln,dom lse, fr inf por,fluor.
- **SANDSTONE** @ ~2110m: clr,trnsl,opq,crs- v crs,mod-pr srt,dom sbang-sbrnd, tr ang,tr sil cmt,tr mtx,lse,cln,fr-gd inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.4 | 65 |
| RES_DEEP (ohm.m) | 40.22 | 65 |
| RES_SHALLOW (ohm.m) | 28.90 | 65 |

---

### 2120 m MD — Interval 2115.0 – 2125.0 m

**Sample Description (spreadsheet):** Sample 2120m: 0% Siltstone, 100% coarse to verycoarse Sandstone, 100% bright  FLUOR in SST. TG 144U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | crs-vcrs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 100.0% bri  |
| Total Gas | 144 U |
| mTVDss | -1207.87 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2110m: clr,trnsl,opq,crs- v crs,mod-pr srt,dom sbang-sbrnd, tr ang,tr sil cmt,tr mtx,lse,cln,fr-gd inf por,fluor.
- **SANDSTONE** @ ~2120m: clr,trnsl,opq,crs- d td b b d v crs,mod-pr srt,dom sbang-sbrnd, tr ang,tr sil cmt,tr mtx,lse,cln,fr-gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.1 | 66 |
| RES_DEEP (ohm.m) | 40.12 | 66 |
| RES_SHALLOW (ohm.m) | 28.94 | 66 |

---

### 2130 m MD — Interval 2125.0 – 2135.0 m

**Sample Description (spreadsheet):** Sample 2130m: 0% Siltstone, 100% medium to very coarse Sandstone, 100% bright  FLUOR in SST. TG 162U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | med-v crs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 100.0% bri  |
| Total Gas | 162 U |
| mTVDss | -1207.59 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2110m: clr,trnsl,opq,crs- v crs,mod-pr srt,dom sbang-sbrnd, tr ang,tr sil cmt,tr mtx,lse,cln,fr-gd inf por,fluor.
- **SANDSTONE** @ ~2120m: clr,trnsl,opq,crs- d td b b d v crs,mod-pr srt,dom sbang-sbrnd, tr ang,tr sil cmt,tr mtx,lse,cln,fr-gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.8 | 66 |
| RES_DEEP (ohm.m) | 45.94 | 66 |
| RES_SHALLOW (ohm.m) | 33.07 | 66 |

---

### 2140 m MD — Interval 2135.0 – 2145.0 m

**Sample Description (spreadsheet):** Sample 2140m: 0% Siltstone, 100% medium to very coarse Sandstone, 100% bright  FLUOR in SST. TG 142U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | med-v crs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 100.0% bri  |
| Total Gas | 142 U |
| mTVDss | -1207.28 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2120m: clr,trnsl,opq,crs- d td b b d v crs,mod-pr srt,dom sbang-sbrnd, tr ang,tr sil cmt,tr mtx,lse,cln,fr-gd inf por,fluor.
- **SANDSTONE** @ ~2140m: clr,trnsl,opq,crs- v crs,mod-pr srt,dom sbang-sbrnd, tr ang,tr sil cmt,tr mtx,lse,cln,fr-gd inf por,fluor. 70 / 6 / 5 / 8 / 11
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.9 | 65 |
| RES_DEEP (ohm.m) | 40.87 | 65 |
| RES_SHALLOW (ohm.m) | 30.28 | 65 |

---

### 2150 m MD — Interval 2145.0 – 2155.0 m

**Sample Description (spreadsheet):** Sample 2150m: 0% Siltstone, 100% coarse to very coarse Sandstone, 100% bright  FLUOR in SST. TG 157U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | crs-v crs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 100.0% bri  |
| Total Gas | 157 U |
| mTVDss | -1206.97 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2140m: clr,trnsl,opq,crs- v crs,mod-pr srt,dom sbang-sbrnd, tr ang,tr sil cmt,tr mtx,lse,cln,fr-gd inf por,fluor. 70 / 6 / 5 / 8 / 11
- **SANDSTONE** @ ~2140m: clr,trnsl,opq,crs- v crs,mod-pr srt,dom sbang-sbrnd, (1252) tr ang,tr sil cmt,tr mtx,lse,cln,fr-gd inf por,fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.7 | 66 |
| RES_DEEP (ohm.m) | 44.33 | 66 |
| RES_SHALLOW (ohm.m) | 32.44 | 66 |

---

### 2160 m MD — Interval 2155.0 – 2165.0 m

**Sample Description (spreadsheet):** Sample 2160m: 0% Siltstone, 100% coarse to very coarse Sandstone, 100% bright  FLUOR in SST. TG 234U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | crs-v crs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 100.0% bri  |
| Total Gas | 234 U |
| mTVDss | -1206.74 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2140m: clr,trnsl,opq,crs- v crs,mod-pr srt,dom sbang-sbrnd, tr ang,tr sil cmt,tr mtx,lse,cln,fr-gd inf por,fluor. 70 / 6 / 5 / 8 / 11
- **SANDSTONE** @ ~2140m: clr,trnsl,opq,crs- v crs,mod-pr srt,dom sbang-sbrnd, (1252) tr ang,tr sil cmt,tr mtx,lse,cln,fr-gd inf por,fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.5 | 66 |
| RES_DEEP (ohm.m) | 41.20 | 66 |
| RES_SHALLOW (ohm.m) | 33.69 | 66 |

---

### 2170 m MD — Interval 2165.0 – 2175.0 m

**Sample Description (spreadsheet):** Sample 2170m: 0% Siltstone, rare siderite in 100% fine to very coarse Sandstone, 100% bright  FLUOR in SST. TG 147U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-v crs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 100.0% bri  |
| Total Gas | 147 U |
| mTVDss | -1206.51 m |
| FeCO₃ in Sandstone | rr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2160m: clr,trnsl,opq,med- v crs,mod-pr srt,dom sbang-sbrnd, tr ang,tr sil cmt,tr mtx,med-v crs lse,cln,fr-gd inf por,fluor. 2170 SURVEY @ 2169.2m
- **SANDSTONE** @ ~2160m: clr,trnsl,opq,f-v crs,pr srt,dom sbang-sbrnd,tr ang,tr sil cmt,tr mtx,med-crs lse,cln,fr-gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 110.3 | 65 |
| RES_DEEP (ohm.m) | 36.99 | 65 |
| RES_SHALLOW (ohm.m) | 27.86 | 65 |

---

### 2180 m MD — Interval 2175.0 – 2185.0 m

**Sample Description (spreadsheet):** Sample 2180m: 0% Siltstone, 100% fine to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 156U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-v crs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 156 U |
| mTVDss | -1206.31 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2160m: clr,trnsl,opq,med- v crs,mod-pr srt,dom sbang-sbrnd, tr ang,tr sil cmt,tr mtx,med-v crs lse,cln,fr-gd inf por,fluor. 2170 SURVEY @ 2169.2m
- **SANDSTONE** @ ~2160m: clr,trnsl,opq,f-v crs,pr srt,dom sbang-sbrnd,tr ang,tr sil cmt,tr mtx,med-crs lse,cln,fr-gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.7 | 66 |
| RES_DEEP (ohm.m) | 41.58 | 66 |
| RES_SHALLOW (ohm.m) | 32.66 | 66 |

---

### 2190 m MD — Interval 2185.0 – 2195.0 m

**Sample Description (spreadsheet):** Sample 2190m: 0% Siltstone, 100% very fine to fine agg, fine to verycoarse lse Sandstone, 100% bright  FLUOR in SST. TG 248U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f agg, f-vcrs lse (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% bri  |
| Total Gas | 248 U |
| mTVDss | -1206.10 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2210m: lt brn,trnsl,opq,vf-dom f aggs,f-med lse,mnr crs-v crs lse,mod- mod wl srt,dom sbang-sbrnd,com wk- occ mod strg sil cmt,mnr lt brn slty mtx, tr-mnr carb flks & miclams,tr sid,fri-
- **SANDSTONE** @ ~2210m: lt brn,trnsl,opq,f-v crs aggs,f-med lse,mnr crs-v crs lse,mod- pr srt,dom sbang-sbrnd,com wk-occ mod strg sil cmt,mnr lt brn slty mtx,tr-mnr carb flks & miclams,tr sid,fri-occ mod
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.6 | 65 |
| RES_DEEP (ohm.m) | 48.44 | 65 |
| RES_SHALLOW (ohm.m) | 36.41 | 65 |

---

### 2200 m MD — Interval 2195.0 – 2205.0 m

**Sample Description (spreadsheet):** Sample 2200m: 0% Siltstone, 100% very fine to fine agg, fine to verycoarse lse Sandstone, 100% bright  FLUOR in SST. TG 198U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f agg, f-vcrs lse (max: C) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% bri  |
| Total Gas | 198 U |
| mTVDss | -1205.88 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2210m: lt brn,trnsl,opq,vf-dom f aggs,f-med lse,mnr crs-v crs lse,mod- mod wl srt,dom sbang-sbrnd,com wk- occ mod strg sil cmt,mnr lt brn slty mtx, tr-mnr carb flks & miclams,tr sid,fri-
- **SANDSTONE** @ ~2210m: lt brn,trnsl,opq,f-v crs aggs,f-med lse,mnr crs-v crs lse,mod- pr srt,dom sbang-sbrnd,com wk-occ mod strg sil cmt,mnr lt brn slty mtx,tr-mnr carb flks & miclams,tr sid,fri-occ mod
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.5 | 66 |
| RES_DEEP (ohm.m) | 42.88 | 66 |
| RES_SHALLOW (ohm.m) | 33.01 | 66 |

---

### 2210 m MD — Interval 2205.0 – 2215.0 m

**Sample Description (spreadsheet):** Sample 2210m: 0% Siltstone, 100% very fine to fine agg, fine to verycoarse lse Sandstone, 100% bright  FLUOR in SST. TG 224U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f agg, f-vcrs lse (max: C) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% bri  |
| Total Gas | 224 U |
| mTVDss | -1205.65 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2210m: lt brn,trnsl,opq,vf-dom f aggs,f-med lse,mnr crs-v crs lse,mod- mod wl srt,dom sbang-sbrnd,com wk- occ mod strg sil cmt,mnr lt brn slty mtx, tr-mnr carb flks & miclams,tr sid,fri-
- **SANDSTONE** @ ~2210m: lt brn,trnsl,opq,f-v crs aggs,f-med lse,mnr crs-v crs lse,mod- pr srt,dom sbang-sbrnd,com wk-occ mod strg sil cmt,mnr lt brn slty mtx,tr-mnr carb flks & miclams,tr sid,fri-occ mod
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.6 | 66 |
| RES_DEEP (ohm.m) | 36.09 | 66 |
| RES_SHALLOW (ohm.m) | 26.45 | 66 |

---

### 2220 m MD — Interval 2215.0 – 2225.0 m

**Sample Description (spreadsheet):** Sample 2220m: 0% Siltstone, rare siderite in 100% very fine to dominantly fine agg, fine to coarse lse Sandstone, 100% bright  FLUOR in SST. TG 186U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-dom f agg, f-crs lse (max: C) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% bri  |
| Total Gas | 186 U |
| mTVDss | -1205.39 m |
| FeCO₃ in Sandstone | rr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2210m: lt brn,trnsl,opq,vf-dom f aggs,f-med lse,mnr crs-v crs lse,mod- mod wl srt,dom sbang-sbrnd,com wk- occ mod strg sil cmt,mnr lt brn slty mtx, tr-mnr carb flks & miclams,tr sid,fri-
- **SANDSTONE** @ ~2210m: lt brn,trnsl,opq,f-v crs aggs,f-med lse,mnr crs-v crs lse,mod- pr srt,dom sbang-sbrnd,com wk-occ mod strg sil cmt,mnr lt brn slty mtx,tr-mnr carb flks & miclams,tr sid,fri-occ mod
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.4 | 65 |
| RES_DEEP (ohm.m) | 42.24 | 65 |
| RES_SHALLOW (ohm.m) | 31.09 | 65 |

---

### 2230 m MD — Interval 2225.0 – 2235.0 m

**Sample Description (spreadsheet):** Sample 2230m: 0% Siltstone, 100% very fine to fine,fine to verycoarse lse Sandstone, 100% bright  FLUOR in SST. TG 155U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f,f-vcrs lse (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% bri  |
| Total Gas | 155 U |
| mTVDss | -1205.15 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2210m: lt brn,trnsl,opq,vf-dom f aggs,f-med lse,mnr crs-v crs lse,mod- mod wl srt,dom sbang-sbrnd,com wk- occ mod strg sil cmt,mnr lt brn slty mtx, tr-mnr carb flks & miclams,tr sid,fri-
- **SANDSTONE** @ ~2210m: lt brn,trnsl,opq,f-v crs aggs,f-med lse,mnr crs-v crs lse,mod- pr srt,dom sbang-sbrnd,com wk-occ mod strg sil cmt,mnr lt brn slty mtx,tr-mnr carb flks & miclams,tr sid,fri-occ mod
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.1 | 66 |
| RES_DEEP (ohm.m) | 47.84 | 66 |
| RES_SHALLOW (ohm.m) | 37.50 | 66 |

---

### 2240 m MD — Interval 2235.0 – 2245.0 m

**Sample Description (spreadsheet):** Sample 2240m: 0% Siltstone, 100% very fine to verycoarse Sandstone, 100% bright  FLUOR in SST. TG 272U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-vcrs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% bri  |
| Total Gas | 272 U |
| mTVDss | -1204.94 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.5 | 65 |
| RES_DEEP (ohm.m) | 52.87 | 65 |
| RES_SHALLOW (ohm.m) | 44.20 | 65 |

---

### 2250 m MD — Interval 2245.0 – 2255.0 m

**Sample Description (spreadsheet):** Sample 2250m: 0% Siltstone, 100% very fine to verycoarse Sandstone, 100% bright  FLUOR in SST. TG 249U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-vcrs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% bri  |
| Total Gas | 249 U |
| mTVDss | -1204.83 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.2 | 66 |
| RES_DEEP (ohm.m) | 44.72 | 66 |
| RES_SHALLOW (ohm.m) | 37.16 | 66 |

---

### 2260 m MD — Interval 2255.0 – 2265.0 m

**Sample Description (spreadsheet):** Sample 2260m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% bright  FLUOR in SST. TG 246U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri  |
| Total Gas | 246 U |
| mTVDss | -1204.86 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2280m: pl brn,off wh,trnsl,clr, vf-f aggs,med-crs lse grs,pr srt, sbang-sbrnd,wk sil cmt,tr off wh arg mtx,occ frstd qtz grs,tr rk flour,fri- mod hd aggs,fr-gd vis & inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.4 | 66 |
| RES_DEEP (ohm.m) | 32.05 | 66 |
| RES_SHALLOW (ohm.m) | 27.10 | 66 |

---

### 2270 m MD — Interval 2265.0 – 2275.0 m

**Sample Description (spreadsheet):** Sample 2270m: 0% Siltstone, 100% very fine to verycoarse Sandstone, 100% bright FLUOR in SST. TG 290U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-vcrs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% bri |
| Total Gas | 290 U |
| mTVDss | -1204.98 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2280m: pl brn,off wh,trnsl,clr, vf-f aggs,med-crs lse grs,pr srt, sbang-sbrnd,wk sil cmt,tr off wh arg mtx,occ frstd qtz grs,tr rk flour,fri- mod hd aggs,fr-gd vis & inf por,fluor.
- **SILTSTONE** @ ~2290m: lt-med gry,aren,micmic,tr liths,tr mic flks,rr carb spks,mod hd-hd,blky-sbblky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.9 | 65 |
| RES_DEEP (ohm.m) | 26.73 | 65 |
| RES_SHALLOW (ohm.m) | 23.61 | 65 |

---

### 2280 m MD — Interval 2275.0 – 2285.0 m

**Sample Description (spreadsheet):** Sample 2280m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 253U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% bri |
| Total Gas | 253 U |
| mTVDss | -1205.22 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2280m: pl brn,off wh,trnsl,clr, vf-f aggs,med-crs lse grs,pr srt, sbang-sbrnd,wk sil cmt,tr off wh arg mtx,occ frstd qtz grs,tr rk flour,fri- mod hd aggs,fr-gd vis & inf por,fluor.
- **SILTSTONE** @ ~2290m: lt-med gry,aren,micmic,tr liths,tr mic flks,rr carb spks,mod hd-hd,blky-sbblky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.7 | 66 |
| RES_DEEP (ohm.m) | 29.59 | 66 |
| RES_SHALLOW (ohm.m) | 24.53 | 66 |

---

### 2290 m MD — Interval 2285.0 – 2295.0 m

**Sample Description (spreadsheet):** Sample 2290m: 5% Siltstone, 95% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 300U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% bri |
| Total Gas | 300 U |
| mTVDss | -1205.54 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2280m: pl brn,off wh,trnsl,clr, vf-f aggs,med-crs lse grs,pr srt, sbang-sbrnd,wk sil cmt,tr off wh arg mtx,occ frstd qtz grs,tr rk flour,fri- mod hd aggs,fr-gd vis & inf por,fluor.
- **SILTSTONE** @ ~2290m: lt-med gry,aren,micmic,tr liths,tr mic flks,rr carb spks,mod hd-hd,blky-sbblky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.3 | 66 |
| RES_DEEP (ohm.m) | 41.82 | 66 |
| RES_SHALLOW (ohm.m) | 29.31 | 66 |

---

### 2300 m MD — Interval 2295.0 – 2305.0 m

**Sample Description (spreadsheet):** Sample 2300m: 10% Siltstone, 90% very fine to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 303U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 303 U |
| mTVDss | -1205.92 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2280m: pl brn,off wh,trnsl,clr, vf-f aggs,med-crs lse grs,pr srt, sbang-sbrnd,wk sil cmt,tr off wh arg mtx,occ frstd qtz grs,tr rk flour,fri- mod hd aggs,fr-gd vis & inf por,fluor.
- **SILTSTONE** @ ~2290m: lt-med gry,aren,micmic,tr liths,tr mic flks,rr carb spks,mod hd-hd,blky-sbblky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.3 | 65 |
| RES_DEEP (ohm.m) | 50.98 | 65 |
| RES_SHALLOW (ohm.m) | 34.86 | 65 |

---

### 2310 m MD — Interval 2305.0 – 2315.0 m

**Sample Description (spreadsheet):** Sample 2310m: 15% Siltstone, 85% very fine to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 316U

| Property | Value |
|----------|-------|
| % Sandstone | 85 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 316 U |
| mTVDss | -1206.36 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2290m: lt-med gry,aren,micmic,tr liths,tr mic flks,rr carb spks,mod hd-hd,blky-sbblky.
- **SANDSTONE** @ ~2290m: pl brn,off wh,trnsl,vf-f, rr lse crs grs,mod wl srt,sbang-sbrnd, sil cmt,tr off wh arg mtx,com slty lams, rr liths,rr mic flks,fri-mod hd,pr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.2 | 66 |
| RES_DEEP (ohm.m) | 42.10 | 66 |
| RES_SHALLOW (ohm.m) | 36.08 | 66 |

---

### 2320 m MD — Interval 2315.0 – 2325.0 m

**Sample Description (spreadsheet):** Sample 2320m: 5% Siltstone, 95% very fine to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 265U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbang (0.25) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 265 U |
| mTVDss | -1206.83 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2340m: 2-6 klbs 2350 SANDSTONE:pl brn,off wh,trnsl,clr, FLW: 245-270 gpm tr carb spks & strks,rr liths,fri-mod hd,lse i/p,fr vis & inf por,fluor.
- **SANDSTONE** @ ~2340m: pl brn,lt gry,vf-f,grd to SLTST,rr lse crs grs,mod-wl srt,sbang- sbrns,sil cmt,com off wh-lt gry arg mtx, occ slty lams,tr carb spks,tr liths,fri- mod hd,tr lse,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.6 | 65 |
| RES_DEEP (ohm.m) | 40.52 | 65 |
| RES_SHALLOW (ohm.m) | 32.46 | 65 |

---

### 2330 m MD — Interval 2325.0 – 2335.0 m

**Sample Description (spreadsheet):** Sample 2330m: 0% Siltstone, 100% very fine to verycoarse Sandstone, 100% moderately bright FLUOR in SST. TG 295U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-vcrs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbang (0.25) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 295 U |
| mTVDss | -1207.20 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2340m: 2-6 klbs 2350 SANDSTONE:pl brn,off wh,trnsl,clr, FLW: 245-270 gpm tr carb spks & strks,rr liths,fri-mod hd,lse i/p,fr vis & inf por,fluor.
- **SANDSTONE** @ ~2340m: pl brn,lt gry,vf-f,grd to SLTST,rr lse crs grs,mod-wl srt,sbang- sbrns,sil cmt,com off wh-lt gry arg mtx, occ slty lams,tr carb spks,tr liths,fri- mod hd,tr lse,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.2 | 66 |
| RES_DEEP (ohm.m) | 32.22 | 66 |
| RES_SHALLOW (ohm.m) | 24.76 | 66 |

---

### 2340 m MD — Interval 2335.0 – 2345.0 m

**Sample Description (spreadsheet):** Sample 2340m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 234U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbang (0.25) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 234 U |
| mTVDss | -1207.53 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2340m: 2-6 klbs 2350 SANDSTONE:pl brn,off wh,trnsl,clr, FLW: 245-270 gpm tr carb spks & strks,rr liths,fri-mod hd,lse i/p,fr vis & inf por,fluor.
- **SANDSTONE** @ ~2340m: pl brn,lt gry,vf-f,grd to SLTST,rr lse crs grs,mod-wl srt,sbang- sbrns,sil cmt,com off wh-lt gry arg mtx, occ slty lams,tr carb spks,tr liths,fri- mod hd,tr lse,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.4 | 66 |
| RES_DEEP (ohm.m) | 33.94 | 66 |
| RES_SHALLOW (ohm.m) | 24.31 | 66 |

---

### 2410 m MD — Interval 2405.0 – 2415.0 m

**Sample Description (spreadsheet):** Sample 2410m: 20% Siltstone, 80% very fine to fine Sandstone, 100% dull FLUOR in SST. TG 172U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% dll |
| Total Gas | 172 U |
| mTVDss | -1208.17 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2410m: v lt gry brn,pl brn, vf-f,grd to SLTST,wl srt,sbang-sbrnd, sil cmt,tr-com off wh arg mtx,com slty lams,rr carb spks,rr liths,rr lse crs grs,fri-mod hd,pr vis por,
- **SANDSTONE** @ ~2420m: lt brn gry,rr pl brn, vf-f,wl srt,rr lse crs grs,sbang-sbrnd, sil cmt,tr off wh arg mtx,com slty lams, rr liths,rr carb spks,fri-mod hd,pr-ti 2430 1 100 1K vis por,dll-mod bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 108.0 | 66 |
| RES_DEEP (ohm.m) | 27.05 | 66 |
| RES_SHALLOW (ohm.m) | 23.08 | 66 |

---

### 2420 m MD — Interval 2415.0 – 2425.0 m

**Sample Description (spreadsheet):** Sample 2420m: 15% Siltstone, 85% very fine to fine Sandstone, 100% dull FLUOR in SST. TG 169U

| Property | Value |
|----------|-------|
| % Sandstone | 85 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% dll |
| Total Gas | 169 U |
| mTVDss | -1208.28 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2410m: v lt gry brn,pl brn, vf-f,grd to SLTST,wl srt,sbang-sbrnd, sil cmt,tr-com off wh arg mtx,com slty lams,rr carb spks,rr liths,rr lse crs grs,fri-mod hd,pr vis por,
- **SANDSTONE** @ ~2420m: lt brn gry,rr pl brn, vf-f,wl srt,rr lse crs grs,sbang-sbrnd, sil cmt,tr off wh arg mtx,com slty lams, rr liths,rr carb spks,fri-mod hd,pr-ti 2430 1 100 1K vis por,dll-mod bri fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.0 | 66 |
| RES_DEEP (ohm.m) | 28.80 | 66 |
| RES_SHALLOW (ohm.m) | 24.70 | 66 |

---

### 2430 m MD — Interval 2425.0 – 2435.0 m

**Sample Description (spreadsheet):** Sample 2430m: 10% Siltstone, 90% very fine to fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 191U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 191 U |
| mTVDss | -1208.38 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2410m: v lt gry brn,pl brn, vf-f,grd to SLTST,wl srt,sbang-sbrnd, sil cmt,tr-com off wh arg mtx,com slty lams,rr carb spks,rr liths,rr lse crs grs,fri-mod hd,pr vis por,
- **SANDSTONE** @ ~2420m: lt brn gry,rr pl brn, vf-f,wl srt,rr lse crs grs,sbang-sbrnd, sil cmt,tr off wh arg mtx,com slty lams, rr liths,rr carb spks,fri-mod hd,pr-ti 2430 1 100 1K vis por,dll-mod bri fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.8 | 65 |
| RES_DEEP (ohm.m) | 28.14 | 65 |
| RES_SHALLOW (ohm.m) | 23.32 | 65 |

---

### 2440 m MD — Interval 2435.0 – 2445.0 m

**Sample Description (spreadsheet):** Sample 2440m: 5% Siltstone, 95% very fine to fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 205U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 205 U |
| mTVDss | -1208.49 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2420m: lt brn gry,rr pl brn, vf-f,wl srt,rr lse crs grs,sbang-sbrnd, sil cmt,tr off wh arg mtx,com slty lams, rr liths,rr carb spks,fri-mod hd,pr-ti 2430 1 100 1K vis por,dll-mod bri fluor.
- **SANDSTONE** @ ~2440m: lt gry,lt brn gry,rr pl brn,vf-f,rr med,mod wl srt,sbang- sbrnd,sil cmt,tr off wh arg mtx,com slty lams,rr liths,rr carb spks,fri- mod hd,pr-ti vis por,dll-mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.6 | 66 |
| RES_DEEP (ohm.m) | 32.29 | 66 |
| RES_SHALLOW (ohm.m) | 26.28 | 66 |

---

### 2450 m MD — Interval 2445.0 – 2455.0 m

**Sample Description (spreadsheet):** Sample 2450m: 5% Siltstone, 95% very fine to fine, rare medium Sandstone, 100% dull to moderately bright FLUOR in SST. TG 169U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-f, rr med (max: M) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 169 U |
| mTVDss | -1208.55 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2440m: lt gry,lt brn gry,rr pl brn,vf-f,rr med,mod wl srt,sbang- sbrnd,sil cmt,tr off wh arg mtx,com slty lams,rr liths,rr carb spks,fri- mod hd,pr-ti vis por,dll-mod bri fluor.
- **SANDSTONE** @ ~2440m: lt gry,lt brn gry,rr pl brn,vf-f,mod wl srt,sbang-sbrnd, 2460 sil cmt,tr off wh arg mtx,com slty lams,rr liths,rr carb spks,fri-mod hd,pr-ti vis por,dll-mod bri fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.4 | 65 |
| RES_DEEP (ohm.m) | 32.47 | 65 |
| RES_SHALLOW (ohm.m) | 24.84 | 65 |

---

### 2460 m MD — Interval 2455.0 – 2465.0 m

**Sample Description (spreadsheet):** Sample 2460m: 5% Siltstone, 95% very fine to fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 176U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 176 U |
| mTVDss | -1208.60 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2440m: lt gry,lt brn gry,rr pl brn,vf-f,rr med,mod wl srt,sbang- sbrnd,sil cmt,tr off wh arg mtx,com slty lams,rr liths,rr carb spks,fri- mod hd,pr-ti vis por,dll-mod bri fluor.
- **SANDSTONE** @ ~2440m: lt gry,lt brn gry,rr pl brn,vf-f,mod wl srt,sbang-sbrnd, 2460 sil cmt,tr off wh arg mtx,com slty lams,rr liths,rr carb spks,fri-mod hd,pr-ti vis por,dll-mod bri fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.6 | 66 |
| RES_DEEP (ohm.m) | 30.52 | 66 |
| RES_SHALLOW (ohm.m) | 24.31 | 66 |

---

### 2470 m MD — Interval 2465.0 – 2475.0 m

**Sample Description (spreadsheet):** Sample 2470m: 10% Siltstone, 90% very fine to fine Sandstone, 90% dull to moderately bright FLUOR in SST. TG 181U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% dll-mod bri |
| Total Gas | 181 U |
| mTVDss | -1208.64 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2470m: lt brn gry,vf,grd to SLTST,wl srt,sbang,sil cmt,com lt gry arg/slty mtx,tr liths,rr carb spks, rr mic,fri-mod hd,ti vis por,dll fluor. 2480 77 / 6 / 4 / 5 / 8 254 U
- **SILTSTONE** @ ~2470m: lt-med gry,lt brn gry,aren,grd to vf SST,micmic,tr liths,rr carb spks & stks,rr mic flks, mod hd-rr hd,blky-sbblky.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.6 | 66 |
| RES_DEEP (ohm.m) | 32.56 | 66 |
| RES_SHALLOW (ohm.m) | 24.03 | 66 |

---

### 2480 m MD — Interval 2475.0 – 2485.0 m

**Sample Description (spreadsheet):** Sample 2480m: 40% Siltstone, 60% very fine Sandstone, 90% dull FLUOR in SST. TG 209U

| Property | Value |
|----------|-------|
| % Sandstone | 60 |
| Grain Size | vf (max: VF) |
| Grain Ordinal | 1 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% dll |
| Total Gas | 209 U |
| mTVDss | -1208.73 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2470m: lt brn gry,vf,grd to SLTST,wl srt,sbang,sil cmt,com lt gry arg/slty mtx,tr liths,rr carb spks, rr mic,fri-mod hd,ti vis por,dll fluor. 2480 77 / 6 / 4 / 5 / 8 254 U
- **SILTSTONE** @ ~2470m: lt-med gry,lt brn gry,aren,grd to vf SST,micmic,tr liths,rr carb spks & stks,rr mic flks, mod hd-rr hd,blky-sbblky.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.6 | 65 |
| RES_DEEP (ohm.m) | 35.81 | 65 |
| RES_SHALLOW (ohm.m) | 25.43 | 65 |

---

### 2490 m MD — Interval 2485.0 – 2495.0 m

**Sample Description (spreadsheet):** Sample 2490m: 15% Siltstone, 85% very fine to fine Sandstone, 90% dull to moderately bright FLUOR in SST. TG 214U

| Property | Value |
|----------|-------|
| % Sandstone | 85 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% dll-mod bri |
| Total Gas | 214 U |
| mTVDss | -1208.91 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2470m: lt brn gry,vf,grd to SLTST,wl srt,sbang,sil cmt,com lt gry arg/slty mtx,tr liths,rr carb spks, rr mic,fri-mod hd,ti vis por,dll fluor. 2480 77 / 6 / 4 / 5 / 8 254 U
- **SILTSTONE** @ ~2470m: lt-med gry,lt brn gry,aren,grd to vf SST,micmic,tr liths,rr carb spks & stks,rr mic flks, mod hd-rr hd,blky-sbblky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.6 | 66 |
| RES_DEEP (ohm.m) | 35.02 | 66 |
| RES_SHALLOW (ohm.m) | 24.51 | 66 |

---

### 2500 m MD — Interval 2495.0 – 2505.0 m

**Sample Description (spreadsheet):** Sample 2500m: 10% Siltstone, 90% very fine to fine, rare medium Sandstone, 90% dull to moderately bright FLUOR in SST. TG 191U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-f, rr med (max: M) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% dll-mod bri |
| Total Gas | 191 U |
| mTVDss | -1209.12 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2490m: lt brn gry,vf-f,rr med,mod wl srt,sbang-sbrnd,sil cmt, com off wh-lt gry arg/slty mtx,grd to SLTST i/p,tr liths,fri-mod hd,pr-ti vis por,dll-mod bri fluor.
- **SILTSTONE** @ ~2490m: 1-6 klbs 2500 76 / 6 / 4 / 6 / 8 196 U SILTSTONE:lt-med gry,lt brn FLW: 245-272 gpm mod hd-rr hd,blky-sbblky.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.3 | 66 |
| RES_DEEP (ohm.m) | 32.88 | 66 |
| RES_SHALLOW (ohm.m) | 25.36 | 66 |

---

### 2510 m MD — Interval 2505.0 – 2515.0 m

**Sample Description (spreadsheet):** Sample 2510m: 30% Siltstone, 70% very fine to  rare fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 157U

| Property | Value |
|----------|-------|
| % Sandstone | 70 |
| Grain Size | vf- rr f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 157 U |
| mTVDss | -1209.38 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2490m: lt brn gry,vf-f,rr med,mod wl srt,sbang-sbrnd,sil cmt, com off wh-lt gry arg/slty mtx,grd to SLTST i/p,tr liths,fri-mod hd,pr-ti vis por,dll-mod bri fluor.
- **SILTSTONE** @ ~2490m: 1-6 klbs 2500 76 / 6 / 4 / 6 / 8 196 U SILTSTONE:lt-med gry,lt brn FLW: 245-272 gpm mod hd-rr hd,blky-sbblky.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.4 | 65 |
| RES_DEEP (ohm.m) | 29.29 | 65 |
| RES_SHALLOW (ohm.m) | 24.94 | 65 |

---

### 2520 m MD — Interval 2515.0 – 2525.0 m

**Sample Description (spreadsheet):** Sample 2520m: 20% Siltstone, 80% very fine to fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 185U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Hardness | mod hd (0.40) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 185 U |
| mTVDss | -1209.60 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2510m: lt-med gry,lt brn gry,aren,grd to vf SST,micmic,tr liths,rr carb spks & stks,rr mic flks, mod hd-rr hd,blky-sbblky.
- **SANDSTONE** @ ~2520m: lt brn,lt brn gry,com v slty,grd to aren SLTST,mnr-com trnsl-opq,f-med,mod wl-wl srt,dom sbang-sbrnd,com wk-occ mod strg sil 0 0.5 1 4 14 2530 1 10 100 1K cmt,com gry slty mtx,tr carb flks,
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.4 | 66 |
| RES_DEEP (ohm.m) | 30.97 | 66 |
| RES_SHALLOW (ohm.m) | 26.98 | 66 |

---

### 2530 m MD — Interval 2525.0 – 2535.0 m

**Sample Description (spreadsheet):** Sample 2530m: 15% Siltstone, 85% very fine to fine, rare coarse Sandstone, 100% dull to moderately bright FLUOR in SST. TG 210U

| Property | Value |
|----------|-------|
| % Sandstone | 85 |
| Grain Size | vf-f, rr crs (max: C) |
| Porosity Class | none |
| Hardness | mod hd (0.40) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 210 U |
| mTVDss | -1209.77 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2510m: lt-med gry,lt brn gry,aren,grd to vf SST,micmic,tr liths,rr carb spks & stks,rr mic flks, mod hd-rr hd,blky-sbblky.
- **SANDSTONE** @ ~2520m: lt brn,lt brn gry,com v slty,grd to aren SLTST,mnr-com trnsl-opq,f-med,mod wl-wl srt,dom sbang-sbrnd,com wk-occ mod strg sil 0 0.5 1 4 14 2530 1 10 100 1K cmt,com gry slty mtx,tr carb flks,
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.6 | 65 |
| RES_DEEP (ohm.m) | 29.51 | 65 |
| RES_SHALLOW (ohm.m) | 25.41 | 65 |

---

### 2540 m MD — Interval 2535.0 – 2545.0 m

**Sample Description (spreadsheet):** Sample 2540m: 20% Siltstone, 80% very fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 170U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | vf-med (max: M ) |
| Porosity Class | none |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 170 U |
| mTVDss | -1209.93 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2520m: lt brn,lt brn gry,com v slty,grd to aren SLTST,mnr-com trnsl-opq,f-med,mod wl-wl srt,dom sbang-sbrnd,com wk-occ mod strg sil 0 0.5 1 4 14 2530 1 10 100 1K cmt,com gry slty mtx,tr carb flks,
- **SANDSTONE** @ ~2540m: lt brn,lt brn gry,com v slty,grd to aren SLTST,mnr-com trnsl-opq,f-med,mod wl-wl srt,dom sbang-sbrnd,com wk-occ mod strg sil cmt,com gry slty mtx,tr carb flks,
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.3 | 66 |
| RES_DEEP (ohm.m) | 27.43 | 66 |
| RES_SHALLOW (ohm.m) | 24.39 | 66 |

---

### 2550 m MD — Interval 2545.0 – 2555.0 m

**Sample Description (spreadsheet):** Sample 2550m: 30% Siltstone, rare siderite in 70% very fine to medium Sandstone, 80% moderately bright FLUOR in SST. TG 161U

| Property | Value |
|----------|-------|
| % Sandstone | 70 |
| Grain Size | vf-med (max: M ) |
| Porosity Class | none |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 80.0% mod bri |
| Total Gas | 161 U |
| mTVDss | -1210.07 m |
| FeCO₃ in Sandstone | rr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2540m: lt brn,lt brn gry,com v slty,grd to aren SLTST,mnr-com trnsl-opq,f-med,mod wl-wl srt,dom sbang-sbrnd,com wk-occ mod strg sil cmt,com gry slty mtx,tr carb flks,
- **SANDSTONE** @ ~2560m: 13 SANDSTONE:clr,trnsl,opq,lt YP: 23 gry,lt brn,mnr vf-f aggs,f-dom med Gel: 7/9/12 lse,rr crs,mod wl srt,dom sbang-sbrnd, WL: 4.8 mnr wk sil cmt,mnr lt gry arg mtx,fri Sol: 10 aggs,com-dom lse,mod bri-bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.4 | 66 |
| RES_DEEP (ohm.m) | 27.00 | 66 |
| RES_SHALLOW (ohm.m) | 23.82 | 66 |

---

### 2560 m MD — Interval 2555.0 – 2565.0 m

**Sample Description (spreadsheet):** Sample 2560m: 10% Siltstone, 90% very fine to fine, minor medium Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 160U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-f, mnr med (max: M ) |
| Porosity Class | none |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 80.0% mod bri - bri |
| Total Gas | 160 U |
| mTVDss | -1210.19 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2540m: lt brn,lt brn gry,com v slty,grd to aren SLTST,mnr-com trnsl-opq,f-med,mod wl-wl srt,dom sbang-sbrnd,com wk-occ mod strg sil cmt,com gry slty mtx,tr carb flks,
- **SANDSTONE** @ ~2560m: 13 SANDSTONE:clr,trnsl,opq,lt YP: 23 gry,lt brn,mnr vf-f aggs,f-dom med Gel: 7/9/12 lse,rr crs,mod wl srt,dom sbang-sbrnd, WL: 4.8 mnr wk sil cmt,mnr lt gry arg mtx,fri Sol: 10 aggs,com-dom lse,mod bri-bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.7 | 65 |
| RES_DEEP (ohm.m) | 26.51 | 65 |
| RES_SHALLOW (ohm.m) | 22.74 | 65 |

---

### 2570 m MD — Interval 2565.0 – 2575.0 m

**Sample Description (spreadsheet):** Sample 2570m: 0% Siltstone, 100% very fine to coarse,dominantly medium lse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 190U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-crs,dom med lse (max: C) |
| Porosity Class | none |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | mnr wk sil cmt (0.71) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 190 U |
| mTVDss | -1210.30 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2560m: 13 SANDSTONE:clr,trnsl,opq,lt YP: 23 gry,lt brn,mnr vf-f aggs,f-dom med Gel: 7/9/12 lse,rr crs,mod wl srt,dom sbang-sbrnd, WL: 4.8 mnr wk sil cmt,mnr lt gry arg mtx,fri Sol: 10 aggs,com-dom lse,mod bri-bri fluor.
- **SANDSTONE** @ ~2580m: clr,trnsl,opq,lt gry,lt brn,mnr vf-f aggs,f-dom med lse,rr crs,mod wl srt,dom sbang-sbrnd, mnr wk sil cmt,mnr lt gry arg mtx,fri aggs,com-dom lse,mod bri-bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.9 | 66 |
| RES_DEEP (ohm.m) | 26.41 | 66 |
| RES_SHALLOW (ohm.m) | 21.92 | 66 |

---

### 2580 m MD — Interval 2575.0 – 2585.0 m

**Sample Description (spreadsheet):** Sample 2580m: 5% Siltstone, 95% very fine to fine agg, minor medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 184U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-f agg, mnr med (max: M ) |
| Porosity Class | none |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | mnr wk sil cmt (0.71) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 184 U |
| mTVDss | -1210.43 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2560m: 13 SANDSTONE:clr,trnsl,opq,lt YP: 23 gry,lt brn,mnr vf-f aggs,f-dom med Gel: 7/9/12 lse,rr crs,mod wl srt,dom sbang-sbrnd, WL: 4.8 mnr wk sil cmt,mnr lt gry arg mtx,fri Sol: 10 aggs,com-dom lse,mod bri-bri fluor.
- **SANDSTONE** @ ~2580m: clr,trnsl,opq,lt gry,lt brn,mnr vf-f aggs,f-dom med lse,rr crs,mod wl srt,dom sbang-sbrnd, mnr wk sil cmt,mnr lt gry arg mtx,fri aggs,com-dom lse,mod bri-bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.4 | 65 |
| RES_DEEP (ohm.m) | 28.91 | 65 |
| RES_SHALLOW (ohm.m) | 22.83 | 65 |

---

### 2590 m MD — Interval 2585.0 – 2595.0 m

**Sample Description (spreadsheet):** Sample 2590m: 0% Siltstone, 100% fine to medium lse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 185U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med lse (max: M ) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | mnr wk sil cmt (0.61) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 185 U |
| mTVDss | -1210.56 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2580m: clr,trnsl,opq,lt gry,lt brn,mnr vf-f aggs,f-dom med lse,rr crs,mod wl srt,dom sbang-sbrnd, mnr wk sil cmt,mnr lt gry arg mtx,fri aggs,com-dom lse,mod bri-bri fluor.
- **SANDSTONE** @ ~2590m: lt gry,trnsl,clr, opq,vf-f aggs,f-med lse,mod wl srt,
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.8 | 66 |
| RES_DEEP (ohm.m) | 27.20 | 66 |
| RES_SHALLOW (ohm.m) | 22.20 | 66 |

---

### 2600 m MD — Interval 2595.0 – 2605.0 m

**Sample Description (spreadsheet):** Sample 2600m: 0% Siltstone, 100% very fine to medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 175U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: M ) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | mnr wk sil cmt (0.61) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 175 U |
| mTVDss | -1210.69 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2580m: clr,trnsl,opq,lt gry,lt brn,mnr vf-f aggs,f-dom med lse,rr crs,mod wl srt,dom sbang-sbrnd, mnr wk sil cmt,mnr lt gry arg mtx,fri aggs,com-dom lse,mod bri-bri fluor.
- **SANDSTONE** @ ~2590m: lt gry,trnsl,clr, opq,vf-f aggs,f-med lse,mod wl srt,
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.2 | 66 |
| RES_DEEP (ohm.m) | 23.90 | 66 |
| RES_SHALLOW (ohm.m) | 20.97 | 66 |

---

### 2610 m MD — Interval 2605.0 – 2615.0 m

**Sample Description (spreadsheet):** Sample 2610m: 10% Siltstone, 90% very fine to medium Sandstone, 80% dull to moderately bright FLUOR in SST. TG 151U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-med (max: M ) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.61) |
| Fluorescence | 80.0% dll-mod bri |
| Total Gas | 151 U |
| mTVDss | -1210.82 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2590m: lt gry,trnsl,clr, opq,vf-f aggs,f-med lse,mod wl srt,
- **SILTSTONE** @ ~2590m: lt-med gry,brn gry, aren,tr arg,grd to vf SST,tr micmic, tr sid,tr carb flks & micrlams,frm- mod hd,sbblky-sbfiss.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.6 | 65 |
| RES_DEEP (ohm.m) | 24.41 | 65 |
| RES_SHALLOW (ohm.m) | 21.59 | 65 |

---

### 2620 m MD — Interval 2615.0 – 2625.0 m

**Sample Description (spreadsheet):** Sample 2620m: 20% Siltstone, 80% very fine to medium Sandstone, 70% moderately bright  to  bright FLUOR in SST. TG 150U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | vf-med (max: M ) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.61) |
| Fluorescence | 70.0% mod bri - bri |
| Total Gas | 150 U |
| mTVDss | -1210.82 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2610m: lt gry,trnsl,clr, opq,vf-f aggs,f-med lse,mod wl srt, 2620 dom sbang-sbrnd,mnr-com wk sil cmt, mnr lt gry arg mtx,tr carb flks,fri aggs,mnr-com lse,v pr-ti vis por,pr-
- **SANDSTONE** @ ~2610m: lt gry,trnsl,clr, opq,vf-f aggs,f-med lse,tr crs,mod wl srt,dom sbang-sbrnd,mnr-com wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,mnr-com lse,v pr-ti
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.9 | 66 |
| RES_DEEP (ohm.m) | 27.86 | 66 |
| RES_SHALLOW (ohm.m) | 22.51 | 66 |

---

### 2630 m MD — Interval 2625.0 – 2635.0 m

**Sample Description (spreadsheet):** Sample 2630m: 10% Siltstone, 90% very fine to medium Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 157U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-med (max: M) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.61) |
| Fluorescence | 80.0% mod bri - bri |
| Total Gas | 157 U |
| mTVDss | -1210.81 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2610m: lt gry,trnsl,clr, opq,vf-f aggs,f-med lse,mod wl srt, 2620 dom sbang-sbrnd,mnr-com wk sil cmt, mnr lt gry arg mtx,tr carb flks,fri aggs,mnr-com lse,v pr-ti vis por,pr-
- **SANDSTONE** @ ~2610m: lt gry,trnsl,clr, opq,vf-f aggs,f-med lse,tr crs,mod wl srt,dom sbang-sbrnd,mnr-com wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,mnr-com lse,v pr-ti
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.6 | 66 |
| RES_DEEP (ohm.m) | 33.91 | 66 |
| RES_SHALLOW (ohm.m) | 25.21 | 66 |

---

### 2640 m MD — Interval 2635.0 – 2645.0 m

**Sample Description (spreadsheet):** Sample 2640m: 5% Siltstone, 95% very fine to medium Sandstone, 100% bright  FLUOR in SST. TG 247U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-med (max: M) |
| Porosity Class | none |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.61) |
| Fluorescence | 100.0% bri  |
| Total Gas | 247 U |
| mTVDss | -1210.74 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2640m: lt gry,trnsl,clr,opq vf-med aggs,f-med lse,tr crs,mod- wl srt,dom sbang-sbrnd,mnr-com wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,mnr-com lse,v pr-ti vis
- **SANDSTONE** @ ~2640m: lt gry,trnsl,clr,opq 2660 vf-med aggs,f-med lse,tr crs,mod- wl srt,dom sbang-sbrnd,mnr-com wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,mnr-com lse,v pr-ti vis

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.9 | 65 |
| RES_DEEP (ohm.m) | 37.74 | 65 |
| RES_SHALLOW (ohm.m) | 30.14 | 65 |

---

### 2650 m MD — Interval 2645.0 – 2655.0 m

**Sample Description (spreadsheet):** Sample 2650m: 0% Siltstone, 100% very fine to medium Sandstone, 100% bright  FLUOR in SST. TG 246U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: M) |
| Porosity Class | none |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.61) |
| Fluorescence | 100.0% bri  |
| Total Gas | 246 U |
| mTVDss | -1210.68 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2640m: lt gry,trnsl,clr,opq vf-med aggs,f-med lse,tr crs,mod- wl srt,dom sbang-sbrnd,mnr-com wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,mnr-com lse,v pr-ti vis
- **SANDSTONE** @ ~2640m: lt gry,trnsl,clr,opq 2660 vf-med aggs,f-med lse,tr crs,mod- wl srt,dom sbang-sbrnd,mnr-com wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,mnr-com lse,v pr-ti vis
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.2 | 66 |
| RES_DEEP (ohm.m) | 36.74 | 66 |
| RES_SHALLOW (ohm.m) | 31.55 | 66 |

---

### 2660 m MD — Interval 2655.0 – 2665.0 m

**Sample Description (spreadsheet):** Sample 2660m: 0% Siltstone, 100% fine to medium Sandstone, 100% bright  FLUOR in SST. TG 258U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med (max: M) |
| Porosity Class | none |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.61) |
| Fluorescence | 100.0% bri  |
| Total Gas | 258 U |
| mTVDss | -1210.70 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2640m: lt gry,trnsl,clr,opq vf-med aggs,f-med lse,tr crs,mod- wl srt,dom sbang-sbrnd,mnr-com wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,mnr-com lse,v pr-ti vis
- **SANDSTONE** @ ~2640m: lt gry,trnsl,clr,opq 2660 vf-med aggs,f-med lse,tr crs,mod- wl srt,dom sbang-sbrnd,mnr-com wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,mnr-com lse,v pr-ti vis
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.2 | 65 |
| RES_DEEP (ohm.m) | 37.66 | 65 |
| RES_SHALLOW (ohm.m) | 31.04 | 65 |

---

### 2670 m MD — Interval 2665.0 – 2675.0 m

**Sample Description (spreadsheet):** Sample 2670m: 0% Siltstone, 100% very fine to medium Sandstone, 100% bright  FLUOR in SST. TG 264U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: M ) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.61) |
| Fluorescence | 100.0% bri  |
| Total Gas | 264 U |
| mTVDss | -1210.76 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2670m: lt gry,trnsl,clr,opq f-med aggs,f-med lse,tr crs,mod- wl srt,dom sbang-sbrnd,mnr-com wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,mnr-com lse,v pr-ti vis
- **SANDSTONE** @ ~2680m: lt gry,trnsl,clr,opq f-med aggs,f-med lse,tr crs,mod- wl srt,dom sbang-sbrnd,mnr-com wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,mnr-com lse,v pr-ti vis
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.0 | 66 |
| RES_DEEP (ohm.m) | 40.58 | 66 |
| RES_SHALLOW (ohm.m) | 34.38 | 66 |

---

### 2680 m MD — Interval 2675.0 – 2685.0 m

**Sample Description (spreadsheet):** Sample 2680m: 0% Siltstone, 100% fine to medium Sandstone, 100% bright  FLUOR in SST. TG 271U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med (max: M) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.61) |
| Fluorescence | 100.0% bri  |
| Total Gas | 271 U |
| mTVDss | -1210.95 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2670m: lt gry,trnsl,clr,opq f-med aggs,f-med lse,tr crs,mod- wl srt,dom sbang-sbrnd,mnr-com wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,mnr-com lse,v pr-ti vis
- **SANDSTONE** @ ~2680m: lt gry,trnsl,clr,opq f-med aggs,f-med lse,tr crs,mod- wl srt,dom sbang-sbrnd,mnr-com wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,mnr-com lse,v pr-ti vis
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.1 | 66 |
| RES_DEEP (ohm.m) | 36.20 | 66 |
| RES_SHALLOW (ohm.m) | 31.56 | 66 |

---

### 2690 m MD — Interval 2685.0 – 2695.0 m

**Sample Description (spreadsheet):** Sample 2690m: 0% Siltstone, 100% fine to coarse Sandstone, 100% bright  FLUOR in SST. TG 246U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-crs (max: C) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.61) |
| Fluorescence | 100.0% bri  |
| Total Gas | 246 U |
| mTVDss | -1211.13 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2670m: lt gry,trnsl,clr,opq f-med aggs,f-med lse,tr crs,mod- wl srt,dom sbang-sbrnd,mnr-com wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,mnr-com lse,v pr-ti vis
- **SANDSTONE** @ ~2680m: lt gry,trnsl,clr,opq f-med aggs,f-med lse,tr crs,mod- wl srt,dom sbang-sbrnd,mnr-com wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,mnr-com lse,v pr-ti vis
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.7 | 65 |
| RES_DEEP (ohm.m) | 32.19 | 65 |
| RES_SHALLOW (ohm.m) | 25.24 | 65 |

---

### 2700 m MD — Interval 2695.0 – 2705.0 m

**Sample Description (spreadsheet):** Sample 2700m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% bright  FLUOR in SST. TG 180U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.61) |
| Fluorescence | 100.0% bri  |
| Total Gas | 180 U |
| mTVDss | -1211.28 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2680m: lt gry,trnsl,clr,opq f-med aggs,f-med lse,tr crs,mod- wl srt,dom sbang-sbrnd,mnr-com wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,mnr-com lse,v pr-ti vis
- **SANDSTONE** @ ~2690m: lt gry,trnsl,clr,opq f-med aggs,f-med lse,tr crs,mod-
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.5 | 66 |
| RES_DEEP (ohm.m) | 29.27 | 66 |
| RES_SHALLOW (ohm.m) | 21.54 | 66 |

---

### 2710 m MD — Interval 2705.0 – 2715.0 m

**Sample Description (spreadsheet):** Sample 2710m: 5% Siltstone, 95% very fine to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 185U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 185 U |
| mTVDss | -1211.36 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2690m: lt gry,trnsl,clr,opq f-med aggs,f-med lse,tr crs,mod-
- **SANDSTONE** @ ~2690m: clr-trnsl,lt gry,vf-f aggs, f-crs lse,mod srt,dom sbang-sbrnd,mnr wk-mod sil cmt,mnr lt gry arg mtx,tr carb flks & miclams,fri aggs,com-dom lse,v pr vis por,fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.7 | 65 |
| RES_DEEP (ohm.m) | 28.80 | 65 |
| RES_SHALLOW (ohm.m) | 22.21 | 65 |

---

### 2720 m MD — Interval 2715.0 – 2725.0 m

**Sample Description (spreadsheet):** Sample 2720m: 5% Siltstone, 95% fine to coarse Sandstone, 100% bright  FLUOR in SST. TG 177U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-crs (max: C) |
| Porosity Class | none |
| Fluorescence | 100.0% bri  |
| Total Gas | 177 U |
| mTVDss | -1211.32 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.5 | 66 |
| RES_DEEP (ohm.m) | 29.36 | 66 |
| RES_SHALLOW (ohm.m) | 22.52 | 66 |

---

### 2730 m MD — Interval 2725.0 – 2735.0 m

**Sample Description (spreadsheet):** Sample 2730m: 10% Siltstone, 90% very fine to medium Sandstone, 100% bright  FLUOR in SST. TG 196U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-med (max: M) |
| Porosity Class | none |
| Fluorescence | 100.0% bri  |
| Total Gas | 196 U |
| mTVDss | -1211.28 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.5 | 66 |
| RES_DEEP (ohm.m) | 34.00 | 66 |
| RES_SHALLOW (ohm.m) | 25.21 | 66 |

---

### 2740 m MD — Interval 2735.0 – 2745.0 m

**Sample Description (spreadsheet):** Sample 2740m: 5% Siltstone, 95% very fine to medium Sandstone, 100% bright  FLUOR in SST. TG 216U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-med (max: M) |
| Porosity Class | none |
| Fluorescence | 100.0% bri  |
| Total Gas | 216 U |
| mTVDss | -1211.21 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.9 | 65 |
| RES_DEEP (ohm.m) | 37.12 | 65 |
| RES_SHALLOW (ohm.m) | 27.22 | 65 |

---

### 2750 m MD — Interval 2745.0 – 2755.0 m

**Sample Description (spreadsheet):** Sample 2750m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% bright  FLUOR in SST. TG 209U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | none |
| Fluorescence | 100.0% bri  |
| Total Gas | 209 U |
| mTVDss | -1211.20 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.5 | 66 |
| RES_DEEP (ohm.m) | 37.23 | 66 |
| RES_SHALLOW (ohm.m) | 27.61 | 66 |

---

### 2760 m MD — Interval 2755.0 – 2765.0 m

**Sample Description (spreadsheet):** Sample 2760m: 0% Siltstone, 100% fine to very coarse Sandstone, 100% bright  FLUOR in SST. TG 233U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-v crs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% bri  |
| Total Gas | 233 U |
| mTVDss | -1211.25 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2780m: off wh,trnsl,clr,vf-f aggs, med-crs lse grs,pr srt,and-sbrnd, sil cmt,tr wh-off wh arg mtx,com crs frstd qtz grs,rr qtz ovgths,tr gry liths, fri-mod hd aggs,com lse grs,fr-gd vis

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.1 | 66 |
| RES_DEEP (ohm.m) | 36.76 | 66 |
| RES_SHALLOW (ohm.m) | 25.85 | 66 |

---

### 2770 m MD — Interval 2765.0 – 2775.0 m

**Sample Description (spreadsheet):** Sample 2770m: 0% Siltstone, 100% very fine to verycoarse Sandstone, 100% bright FLUOR in SST. TG 249U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-vcrs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% bri |
| Total Gas | 249 U |
| mTVDss | -1211.29 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2780m: off wh,trnsl,clr,vf-f aggs, med-crs lse grs,pr srt,and-sbrnd, sil cmt,tr wh-off wh arg mtx,com crs frstd qtz grs,rr qtz ovgths,tr gry liths, fri-mod hd aggs,com lse grs,fr-gd vis
- **SILTSTONE** @ ~2790m: lt-med gry,aren,sli micmic, tr liths,tr carb spks & lams,rr mic flks,mod hd,blk-rr sbfiss. 78 / 6 / 4 / 5 / 7 239 U
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 111.0 | 65 |
| RES_DEEP (ohm.m) | 37.29 | 65 |
| RES_SHALLOW (ohm.m) | 26.08 | 65 |

---

### 2780 m MD — Interval 2775.0 – 2785.0 m

**Sample Description (spreadsheet):** Sample 2780m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 216U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% bri |
| Total Gas | 216 U |
| mTVDss | -1211.32 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2780m: off wh,trnsl,clr,vf-f aggs, med-crs lse grs,pr srt,and-sbrnd, sil cmt,tr wh-off wh arg mtx,com crs frstd qtz grs,rr qtz ovgths,tr gry liths, fri-mod hd aggs,com lse grs,fr-gd vis
- **SILTSTONE** @ ~2790m: lt-med gry,aren,sli micmic, tr liths,tr carb spks & lams,rr mic flks,mod hd,blk-rr sbfiss. 78 / 6 / 4 / 5 / 7 239 U
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.9 | 66 |
| RES_DEEP (ohm.m) | 36.80 | 66 |
| RES_SHALLOW (ohm.m) | 25.90 | 66 |

---

### 2790 m MD — Interval 2785.0 – 2795.0 m

**Sample Description (spreadsheet):** Sample 2790m: 5% Siltstone, 95% very fine to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 199U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 199 U |
| mTVDss | -1211.29 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2780m: off wh,trnsl,clr,vf-f aggs, med-crs lse grs,pr srt,and-sbrnd, sil cmt,tr wh-off wh arg mtx,com crs frstd qtz grs,rr qtz ovgths,tr gry liths, fri-mod hd aggs,com lse grs,fr-gd vis
- **SILTSTONE** @ ~2790m: lt-med gry,aren,sli micmic, tr liths,tr carb spks & lams,rr mic flks,mod hd,blk-rr sbfiss. 78 / 6 / 4 / 5 / 7 239 U
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.1 | 65 |
| RES_DEEP (ohm.m) | 37.10 | 65 |
| RES_SHALLOW (ohm.m) | 26.07 | 65 |

---

### 2800 m MD — Interval 2795.0 – 2805.0 m

**Sample Description (spreadsheet):** Sample 2800m: 5% Siltstone, 95% very fine to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 230U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 230 U |
| mTVDss | -1211.22 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2780m: off wh,trnsl,clr,vf-f aggs, med-crs lse grs,pr srt,and-sbrnd, sil cmt,tr wh-off wh arg mtx,com crs frstd qtz grs,rr qtz ovgths,tr gry liths, fri-mod hd aggs,com lse grs,fr-gd vis
- **SILTSTONE** @ ~2790m: lt-med gry,aren,sli micmic, tr liths,tr carb spks & lams,rr mic flks,mod hd,blk-rr sbfiss. 78 / 6 / 4 / 5 / 7 239 U
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 108.0 | 66 |
| RES_DEEP (ohm.m) | 41.28 | 66 |
| RES_SHALLOW (ohm.m) | 28.36 | 66 |

---

### 2810 m MD — Interval 2805.0 – 2815.0 m

**Sample Description (spreadsheet):** Sample 2810m: 0% Siltstone, 100% coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 192U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | crs (max: C) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 192 U |
| mTVDss | -1211.11 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2790m: lt-med gry,aren,sli micmic, tr liths,tr carb spks & lams,rr mic flks,mod hd,blk-rr sbfiss. 78 / 6 / 4 / 5 / 7 239 U
- **SANDSTONE** @ ~2790m: 1-5 klbs 2800 SANDSTONE:v lt gry brn,off wh,trnsl, FLW: 250-270 gpm mtx,com thn slty lams,rr liths,rr carb spksfrimodhdaggscomlsegrsfrgd
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.7 | 66 |
| RES_DEEP (ohm.m) | 42.61 | 66 |
| RES_SHALLOW (ohm.m) | 31.45 | 66 |

---

### 2820 m MD — Interval 2815.0 – 2825.0 m

**Sample Description (spreadsheet):** Sample 2820m: 0% Siltstone, 100% coarse Sandstone, 100% bright FLUOR in SST. TG 246U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | crs (max: C) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% bri |
| Total Gas | 246 U |
| mTVDss | -1210.98 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2810m: v lt gry brn,off wh,trnsl, clr,f-crs aggs,pr srt,sbang-sbrnd,sil cmt,nil vis mtx,lse & cln,qtz ovgths, tr gry liths,rr mic flks,tr frstd qtz, gd inf por,fluor.
- **SANDSTONE** @ ~2810m: v pl brn,of wh,trnsl,clr, vf-f aggs,rr med-crs lse grs,mod srt, 2820 78 / 6 / 4 / 5 / 7 247 U sbang-sbrnd,sil cmt,tr off wh arg mtx, rr carb spks,rr mic flks,fri-mod hd aggs,pr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.9 | 65 |
| RES_DEEP (ohm.m) | 44.00 | 65 |
| RES_SHALLOW (ohm.m) | 33.95 | 65 |

---

### 2830 m MD — Interval 2825.0 – 2835.0 m

**Sample Description (spreadsheet):** Sample 2830m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 199U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% bri |
| Total Gas | 199 U |
| mTVDss | -1210.81 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2810m: v lt gry brn,off wh,trnsl, clr,f-crs aggs,pr srt,sbang-sbrnd,sil cmt,nil vis mtx,lse & cln,qtz ovgths, tr gry liths,rr mic flks,tr frstd qtz, gd inf por,fluor.
- **SANDSTONE** @ ~2810m: v pl brn,of wh,trnsl,clr, vf-f aggs,rr med-crs lse grs,mod srt, 2820 78 / 6 / 4 / 5 / 7 247 U sbang-sbrnd,sil cmt,tr off wh arg mtx, rr carb spks,rr mic flks,fri-mod hd aggs,pr vis por,fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.4 | 66 |
| RES_DEEP (ohm.m) | 44.23 | 66 |
| RES_SHALLOW (ohm.m) | 37.57 | 66 |

---

### 2840 m MD — Interval 2835.0 – 2845.0 m

**Sample Description (spreadsheet):** Sample 2840m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 260U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% bri |
| Total Gas | 260 U |
| mTVDss | -1210.63 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2840m: off wh,trnsl,clr,vf-crs,pr srt,sbang-sbrnd,wk sil cmt,nil-tr off wh-wh arg mtx,com gry liths,qtz ovgths, fri-mod hd aggs,dom lse,fr-gd vis & inf por,fluor.
- **SILTSTONE** @ ~2850m: lt-med gry,lt-med gry brn, aren,rr arg,sli micmic,tr liths,rr carb spks,com sid,mod hd-hd,sbblky. 63 / 5 / 5 / 10 / 17 150 U SIDERITE:med gry brn,micr,arg,v hd,
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.8 | 65 |
| RES_DEEP (ohm.m) | 61.49 | 65 |
| RES_SHALLOW (ohm.m) | 36.56 | 65 |

---

### 2950 m MD — Interval 2945.0 – 2955.0 m

**Sample Description (spreadsheet):** Sample 2950m: trace siderite in 30% Siltstone, rare siderite in 70% very fine to fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 209U

| Property | Value |
|----------|-------|
| % Sandstone | 70 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 209 U |
| mTVDss | -1211.96 m |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | rr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2940m: v lt gry brn,off wh, vf-f,wl srt,sbang-sbrnd,sil cmt,tr wh-off wh arg mtx,rr sid,rr mic flks, rr carb spks,fri-mod hd,pr-ti vis por, mod bri-bri fluor.
- **SANDSTONE** @ ~2940m: 2098-2449 psi (1257) SANDSTONE:v lt gry brn,off wh, FLW: 247-272 gpm trnsl,vf-f aggs,occ crs lse grs,mod wl srt,sbang-sbrnd,sil cmt,tr wh-off 83 / 5 / 3 / 4 / 5 212 U wh arg mtx,rr carb spks,fri-mod hd aggs,lse i/p,pr vis & inf por,mod bri-
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.2 | 65 |
| RES_DEEP (ohm.m) | 40.00 | 65 |
| RES_SHALLOW (ohm.m) | 30.92 | 65 |

---

### 2960 m MD — Interval 2955.0 – 2965.0 m

**Sample Description (spreadsheet):** Sample 2960m: 10% Siltstone, 90% very fine to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 168U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 168 U |
| mTVDss | -1212.19 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2940m: v lt gry brn,off wh, vf-f,wl srt,sbang-sbrnd,sil cmt,tr wh-off wh arg mtx,rr sid,rr mic flks, rr carb spks,fri-mod hd,pr-ti vis por, mod bri-bri fluor.
- **SANDSTONE** @ ~2940m: 2098-2449 psi (1257) SANDSTONE:v lt gry brn,off wh, FLW: 247-272 gpm trnsl,vf-f aggs,occ crs lse grs,mod wl srt,sbang-sbrnd,sil cmt,tr wh-off 83 / 5 / 3 / 4 / 5 212 U wh arg mtx,rr carb spks,fri-mod hd aggs,lse i/p,pr vis & inf por,mod bri-
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.4 | 66 |
| RES_DEEP (ohm.m) | 35.92 | 66 |
| RES_SHALLOW (ohm.m) | 30.92 | 66 |

---

### 2970 m MD — Interval 2965.0 – 2975.0 m

**Sample Description (spreadsheet):** Sample 2970m: 5% Siltstone, 95% very fine to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 166U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.61) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 166 U |
| mTVDss | -1212.34 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2960m: v lt gry brn,off wh, trnsl,vf-f aggs,occ crs lse grs,mod wl srt,sbang-sbrnd,sil cmt,tr wh-off wh arg mtx,rr carb spks,fri-mod hd aggs,lse i/p,pr vis & inf por,bri
- **SANDSTONE** @ ~2960m: v lt gry brn,off wh, trnsl,clr,vf-f aggs,med-crs lse grs, 80 / 6 / 4 / 5 / 5 230 U pr srt,sbang-sbrnd,sil cmt,nil-tr off wh-wh arg mtx,rr carb spks,rr liths, 2980 fri-mod hd aggs,com lse,fr-gd inf &
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.7 | 65 |
| RES_DEEP (ohm.m) | 30.99 | 65 |
| RES_SHALLOW (ohm.m) | 26.32 | 65 |

---

### 2980 m MD — Interval 2975.0 – 2985.0 m

**Sample Description (spreadsheet):** Sample 2980m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 220U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.61) |
| Fluorescence | 100.0% bri |
| Total Gas | 220 U |
| mTVDss | -1212.38 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2960m: v lt gry brn,off wh, trnsl,vf-f aggs,occ crs lse grs,mod wl srt,sbang-sbrnd,sil cmt,tr wh-off wh arg mtx,rr carb spks,fri-mod hd aggs,lse i/p,pr vis & inf por,bri
- **SANDSTONE** @ ~2960m: v lt gry brn,off wh, trnsl,clr,vf-f aggs,med-crs lse grs, 80 / 6 / 4 / 5 / 5 230 U pr srt,sbang-sbrnd,sil cmt,nil-tr off wh-wh arg mtx,rr carb spks,rr liths, 2980 fri-mod hd aggs,com lse,fr-gd inf &
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.3 | 66 |
| RES_DEEP (ohm.m) | 29.58 | 66 |
| RES_SHALLOW (ohm.m) | 23.80 | 66 |

---

### 2990 m MD — Interval 2985.0 – 2995.0 m

**Sample Description (spreadsheet):** Sample 2990m: 10% Siltstone, 90% very fine to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 164U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | none |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.61) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 164 U |
| mTVDss | -1212.33 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2990m: med-dk gry,arg,aren 80 / 5 / 4 / 5 / 6 184 U i/p,tr micmic,tr carb flks,interbed w/SST,frm-mod hd,sbblky-sbfiss. 3010 MCKINLAY MEMBER: 3010.0mMDRT (-1212.1mTVDSS)
- **SANDSTONE** @ ~2990m: lt brn,lt gry,trnsl, opq,dom f aggs,f-med lse,mod wl srt, dom sbang-sbrnd,mnr-com wk sil cmt, com lt brn arg mtx,tr carb flks,tr sid,fri aggs,com lse,v pr-pr vis &
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 114.4 | 66 |
| RES_DEEP (ohm.m) | 27.84 | 66 |
| RES_SHALLOW (ohm.m) | 21.72 | 66 |

---

### 3000 m MD — Interval 2995.0 – 3005.0 m

**Sample Description (spreadsheet):** Sample 3000m: 20% Siltstone, 80% very fine to fine agg,fine to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 128U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | vf-f agg,f-crs (max: C) |
| Porosity Class | none |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.61) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 128 U |
| mTVDss | -1212.24 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2990m: med-dk gry,arg,aren 80 / 5 / 4 / 5 / 6 184 U i/p,tr micmic,tr carb flks,interbed w/SST,frm-mod hd,sbblky-sbfiss. 3010 MCKINLAY MEMBER: 3010.0mMDRT (-1212.1mTVDSS)
- **SANDSTONE** @ ~2990m: lt brn,lt gry,trnsl, opq,dom f aggs,f-med lse,mod wl srt, dom sbang-sbrnd,mnr-com wk sil cmt, com lt brn arg mtx,tr carb flks,tr sid,fri aggs,com lse,v pr-pr vis &
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 113.9 | 65 |
| RES_DEEP (ohm.m) | 28.46 | 65 |
| RES_SHALLOW (ohm.m) | 20.95 | 65 |

---

### 3010 m MD — Interval 3005.0 – 3015.0 m

**Sample Description (spreadsheet):** Sample 3010m: 20% Siltstone, 80% very fine to fine agg,fine to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 186U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | vf-f agg,f-crs (max: C) |
| Porosity Class | none |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.61) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 186 U |
| mTVDss | -1212.14 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2990m: med-dk gry,arg,aren 80 / 5 / 4 / 5 / 6 184 U i/p,tr micmic,tr carb flks,interbed w/SST,frm-mod hd,sbblky-sbfiss. 3010 MCKINLAY MEMBER: 3010.0mMDRT (-1212.1mTVDSS)
- **SANDSTONE** @ ~2990m: lt brn,lt gry,trnsl, opq,dom f aggs,f-med lse,mod wl srt, dom sbang-sbrnd,mnr-com wk sil cmt, com lt brn arg mtx,tr carb flks,tr sid,fri aggs,com lse,v pr-pr vis &
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.0 | 66 |
| RES_DEEP (ohm.m) | 37.33 | 66 |
| RES_SHALLOW (ohm.m) | 27.16 | 66 |

---

### 3020 m MD — Interval 3015.0 – 3025.0 m

**Sample Description (spreadsheet):** Sample 3020m: 10% Siltstone, 90% fine to medium Sandstone, 100% bright  FLUOR in SST. TG 161U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-med (max: M) |
| Porosity Class | none |
| Fluorescence | 100.0% bri  |
| Total Gas | 161 U |
| mTVDss | -1212.09 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.3 | 66 |
| RES_DEEP (ohm.m) | 39.01 | 66 |
| RES_SHALLOW (ohm.m) | 30.56 | 66 |

---

### 3030 m MD — Interval 3025.0 – 3035.0 m

**Sample Description (spreadsheet):** Sample 3030m: 5% Siltstone, 95% fine to medium Sandstone, 100% bright  FLUOR in SST. TG 164U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med (max: M) |
| Porosity Class | none |
| Fluorescence | 100.0% bri  |
| Total Gas | 164 U |
| mTVDss | -1212.08 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.9 | 65 |
| RES_DEEP (ohm.m) | 31.00 | 65 |
| RES_SHALLOW (ohm.m) | 25.28 | 65 |

---

### 3040 m MD — Interval 3035.0 – 3045.0 m

**Sample Description (spreadsheet):** Sample 3040m: 20% Siltstone, 80% very fine to medium Sandstone, 100% bright  FLUOR in SST. TG 187U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | vf-med (max: M) |
| Porosity Class | none |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.61) |
| Fluorescence | 100.0% bri  |
| Total Gas | 187 U |
| mTVDss | -1212.11 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3060m: lt brn,lt gry,trnsl, opq,dom f aggs,f-dom med lse,tr crs, mod wl srt,dom sbang-sbrnd,mnr-com wk sil cmt,com lt brn arg mtx,tr carb flks,tr sid,fri aggs,com lse,v pr-pr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.7 | 66 |
| RES_DEEP (ohm.m) | 32.10 | 66 |
| RES_SHALLOW (ohm.m) | 27.38 | 66 |

---

### 3050 m MD — Interval 3045.0 – 3055.0 m

**Sample Description (spreadsheet):** Sample 3050m: 10% Siltstone, 90% very fine to medium Sandstone, 100% bright  FLUOR in SST. TG 198U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-med (max: M) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.61) |
| Fluorescence | 100.0% bri  |
| Total Gas | 198 U |
| mTVDss | -1212.15 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3060m: lt brn,lt gry,trnsl, opq,dom f aggs,f-dom med lse,tr crs, mod wl srt,dom sbang-sbrnd,mnr-com wk sil cmt,com lt brn arg mtx,tr carb flks,tr sid,fri aggs,com lse,v pr-pr
- **SANDSTONE** @ ~3070m: clr,trnsl,lt gry,f-med,mnr crs,mod-mod wl srt,dom sbang-sbrnd, wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,com-dom lse,v pr vis-fr 3080 inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.0 | 65 |
| RES_DEEP (ohm.m) | 36.81 | 65 |
| RES_SHALLOW (ohm.m) | 28.56 | 65 |

---

### 3060 m MD — Interval 3055.0 – 3065.0 m

**Sample Description (spreadsheet):** Sample 3060m: 10% Siltstone, rare siderite in 90% very fine to medium Sandstone, 100% bright  FLUOR in SST. TG 140U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-med (max: M) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.61) |
| Fluorescence | 100.0% bri  |
| Total Gas | 140 U |
| mTVDss | -1212.15 m |
| FeCO₃ in Sandstone | rr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3060m: lt brn,lt gry,trnsl, opq,dom f aggs,f-dom med lse,tr crs, mod wl srt,dom sbang-sbrnd,mnr-com wk sil cmt,com lt brn arg mtx,tr carb flks,tr sid,fri aggs,com lse,v pr-pr
- **SANDSTONE** @ ~3070m: clr,trnsl,lt gry,f-med,mnr crs,mod-mod wl srt,dom sbang-sbrnd, wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,com-dom lse,v pr vis-fr 3080 inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.6 | 66 |
| RES_DEEP (ohm.m) | 36.54 | 66 |
| RES_SHALLOW (ohm.m) | 27.13 | 66 |

---

### 3070 m MD — Interval 3065.0 – 3075.0 m

**Sample Description (spreadsheet):** Sample 3070m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% bright  FLUOR in SST. TG 158U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.61) |
| Fluorescence | 100.0% bri  |
| Total Gas | 158 U |
| mTVDss | -1212.15 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3060m: lt brn,lt gry,trnsl, opq,dom f aggs,f-dom med lse,tr crs, mod wl srt,dom sbang-sbrnd,mnr-com wk sil cmt,com lt brn arg mtx,tr carb flks,tr sid,fri aggs,com lse,v pr-pr
- **SANDSTONE** @ ~3070m: clr,trnsl,lt gry,f-med,mnr crs,mod-mod wl srt,dom sbang-sbrnd, wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,com-dom lse,v pr vis-fr 3080 inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.1 | 66 |
| RES_DEEP (ohm.m) | 30.88 | 66 |
| RES_SHALLOW (ohm.m) | 25.21 | 66 |

---

### 3080 m MD — Interval 3075.0 – 3085.0 m

**Sample Description (spreadsheet):** Sample 3080m: 20% Siltstone, 80% fine to coarse Sandstone, 100% bright  FLUOR in SST. TG 150U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | f-crs (max: C) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.61) |
| Fluorescence | 100.0% bri  |
| Total Gas | 150 U |
| mTVDss | -1212.05 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3060m: lt brn,lt gry,trnsl, opq,dom f aggs,f-dom med lse,tr crs, mod wl srt,dom sbang-sbrnd,mnr-com wk sil cmt,com lt brn arg mtx,tr carb flks,tr sid,fri aggs,com lse,v pr-pr
- **SANDSTONE** @ ~3070m: clr,trnsl,lt gry,f-med,mnr crs,mod-mod wl srt,dom sbang-sbrnd, wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,com-dom lse,v pr vis-fr 3080 inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.5 | 65 |
| RES_DEEP (ohm.m) | 32.75 | 65 |
| RES_SHALLOW (ohm.m) | 25.10 | 65 |

---

### 3090 m MD — Interval 3085.0 – 3095.0 m

**Sample Description (spreadsheet):** Sample 3090m: 10% Siltstone, 90% fine to coarse Sandstone, 100% bright  FLUOR in SST. TG 190U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-crs (max: C) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri  |
| Total Gas | 190 U |
| mTVDss | -1211.93 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3070m: clr,trnsl,lt gry,f-med,mnr crs,mod-mod wl srt,dom sbang-sbrnd, wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,com-dom lse,v pr vis-fr 3080 inf por,fluor.
- **SANDSTONE** @ ~3070m: clr,trnsl,lt gry,f-crs,mnr vf-f,mod-mod wl srt,dom sbang-sbrnd, wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,com-dom lse,v pr vis-fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.3 | 66 |
| RES_DEEP (ohm.m) | 30.92 | 66 |
| RES_SHALLOW (ohm.m) | 23.90 | 66 |

---

### 3100 m MD — Interval 3095.0 – 3105.0 m

**Sample Description (spreadsheet):** Sample 3100m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% bright  FLUOR in SST. TG 180U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri  |
| Total Gas | 180 U |
| mTVDss | -1211.72 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3120m: clr,trnsl,lt gry,f-med,mnr crs,mod-mod wl srt,dom sbang-sbrnd, wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,com-dom lse,v pr vis-fr inf por,fluor.
- **SANDSTONE** @ ~3120m: clr,trnsl,lt gry,f-crs,dom med,mod-mod wl srt,dom sbang-sbrnd, wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,com-dom lse,v pr vis-fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 108.8 | 66 |
| RES_DEEP (ohm.m) | 28.53 | 66 |
| RES_SHALLOW (ohm.m) | 21.77 | 66 |

---

### 3110 m MD — Interval 3105.0 – 3115.0 m

**Sample Description (spreadsheet):** Sample 3110m: 0% Siltstone, 100% very fine to medium Sandstone, 90% bright  FLUOR in SST. TG 138U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: M) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% bri  |
| Total Gas | 138 U |
| mTVDss | -1211.51 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3120m: clr,trnsl,lt gry,f-med,mnr crs,mod-mod wl srt,dom sbang-sbrnd, wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,com-dom lse,v pr vis-fr inf por,fluor.
- **SANDSTONE** @ ~3120m: clr,trnsl,lt gry,f-crs,dom med,mod-mod wl srt,dom sbang-sbrnd, wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,com-dom lse,v pr vis-fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 113.8 | 65 |
| RES_DEEP (ohm.m) | 24.60 | 65 |
| RES_SHALLOW (ohm.m) | 20.48 | 65 |

---

### 3120 m MD — Interval 3115.0 – 3125.0 m

**Sample Description (spreadsheet):** Sample 3120m: 10% Siltstone, 90% fine to coarse Sandstone, 80% moderately bright to bright FLUOR in SST. TG 215U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-crs (max: C) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.71) |
| Fluorescence | 80.0% mod bri-bri |
| Total Gas | 215 U |
| mTVDss | -1211.26 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3120m: clr,trnsl,lt gry,f-med,mnr crs,mod-mod wl srt,dom sbang-sbrnd, wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,com-dom lse,v pr vis-fr inf por,fluor.
- **SANDSTONE** @ ~3120m: clr,trnsl,lt gry,f-crs,dom med,mod-mod wl srt,dom sbang-sbrnd, wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,com-dom lse,v pr vis-fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 112.1 | 66 |
| RES_DEEP (ohm.m) | 26.52 | 66 |
| RES_SHALLOW (ohm.m) | 21.72 | 66 |

---

### 3130 m MD — Interval 3125.0 – 3135.0 m

**Sample Description (spreadsheet):** Sample 3130m: 10% Siltstone, 90% fine to coarse Sandstone, 100% bright  FLUOR in SST. TG 204U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-crs (max: C) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.71) |
| Fluorescence | 100.0% bri  |
| Total Gas | 204 U |
| mTVDss | -1211.01 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3120m: clr,trnsl,lt gry,f-med,mnr crs,mod-mod wl srt,dom sbang-sbrnd, wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,com-dom lse,v pr vis-fr inf por,fluor.
- **SANDSTONE** @ ~3120m: clr,trnsl,lt gry,f-crs,dom med,mod-mod wl srt,dom sbang-sbrnd, wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,com-dom lse,v pr vis-fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.8 | 65 |
| RES_DEEP (ohm.m) | 34.05 | 65 |
| RES_SHALLOW (ohm.m) | 25.66 | 65 |

---

### 3140 m MD — Interval 3135.0 – 3145.0 m

**Sample Description (spreadsheet):** Sample 3140m: 0% Siltstone, 100% fine to coarse Sandstone, 100% bright  FLUOR in SST. TG 180U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-crs (max: C) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.71) |
| Fluorescence | 100.0% bri  |
| Total Gas | 180 U |
| mTVDss | -1210.82 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3120m: clr,trnsl,lt gry,f-med,mnr crs,mod-mod wl srt,dom sbang-sbrnd, wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,com-dom lse,v pr vis-fr inf por,fluor.
- **SANDSTONE** @ ~3120m: clr,trnsl,lt gry,f-crs,dom med,mod-mod wl srt,dom sbang-sbrnd, wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,com-dom lse,v pr vis-fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.4 | 66 |
| RES_DEEP (ohm.m) | 41.64 | 66 |
| RES_SHALLOW (ohm.m) | 32.07 | 66 |

---

### 3150 m MD — Interval 3145.0 – 3155.0 m

**Sample Description (spreadsheet):** Sample 3150m: 0% Siltstone, 100% fine to medium Sandstone, 100% bright  FLUOR in SST. TG 174U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med (max: M) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | mnr wk sil cmt (0.71) |
| Fluorescence | 100.0% bri  |
| Total Gas | 174 U |
| mTVDss | -1210.66 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3140m: 3-7 klbs 3150 SANDSTONE:lt gry,trnsl,clr,opq,f-med, FLW: 250-270 gpm lt gry arg mtx,tr carb flks,tr liths, fri aggs,com-dom lse,v pr vis por,fr
- **SANDSTONE** @ ~3140m: lt gry,trnsl,clr,opq,f-med, tr vf aggs,tr crs lse,mod wl srt,dom sbang-sbrnd,tr-mnr wk sil cmt,tr-mnr lt gry arg mtx,tr carb flks,tr liths, fri aggs,com-dom lse,v pr vis por,fr
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.9 | 66 |
| RES_DEEP (ohm.m) | 49.91 | 66 |
| RES_SHALLOW (ohm.m) | 39.10 | 66 |

---

### 3160 m MD — Interval 3155.0 – 3165.0 m

**Sample Description (spreadsheet):** Sample 3160m: 0% Siltstone, 100% fine to medium Sandstone, 100% bright  FLUOR in SST. TG 178U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med (max: M) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | mnr wk sil cmt (0.71) |
| Fluorescence | 100.0% bri  |
| Total Gas | 178 U |
| mTVDss | -1210.59 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3140m: 3-7 klbs 3150 SANDSTONE:lt gry,trnsl,clr,opq,f-med, FLW: 250-270 gpm lt gry arg mtx,tr carb flks,tr liths, fri aggs,com-dom lse,v pr vis por,fr
- **SANDSTONE** @ ~3140m: lt gry,trnsl,clr,opq,f-med, tr vf aggs,tr crs lse,mod wl srt,dom sbang-sbrnd,tr-mnr wk sil cmt,tr-mnr lt gry arg mtx,tr carb flks,tr liths, fri aggs,com-dom lse,v pr vis por,fr
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.0 | 65 |
| RES_DEEP (ohm.m) | 47.35 | 65 |
| RES_SHALLOW (ohm.m) | 38.07 | 65 |

---

### 3170 m MD — Interval 3165.0 – 3175.0 m

**Sample Description (spreadsheet):** Sample 3170m: 0% Siltstone, 100% fine to very coarse Sandstone, 100% bright  FLUOR in SST. TG 191U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-v crs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | mnr wk sil cmt (0.71) |
| Fluorescence | 100.0% bri  |
| Total Gas | 191 U |
| mTVDss | -1210.54 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3170m: lt gry,trnsl,clr,opq,f-v crs,tr vf aggs,tr crs lse,mod wl srt, sbang-sbrnd,tr-mnr wk sil cmt,tr-mnr lt gry arg mtx,tr carb flks,tr liths,fri aggs,com-dom lse,v pr vis por,fr inf

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.7 | 60 |
| RES_DEEP (ohm.m) | 50.04 | 66 |
| RES_SHALLOW (ohm.m) | 39.49 | 66 |

---

### 3180 m MD — Interval 3175.0 – 3183.0 m

**Sample Description (spreadsheet):** Sample 3180m: 0% Siltstone, 100% fine to very coarse Sandstone, 100% bright  FLUOR in SST. TG 181U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-v crs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | mnr wk sil cmt (0.71) |
| Fluorescence | 100.0% bri  |
| Total Gas | 181 U |
| mTVDss | -1210.53 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3170m: lt gry,trnsl,clr,opq,f-v crs,tr vf aggs,tr crs lse,mod wl srt, sbang-sbrnd,tr-mnr wk sil cmt,tr-mnr lt gry arg mtx,tr carb flks,tr liths,fri aggs,com-dom lse,v pr vis por,fr inf

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| RES_DEEP (ohm.m) | 50.33 | 13 |
| RES_SHALLOW (ohm.m) | 38.56 | 13 |

---

### 3186 m MD — Interval 3183.0 – 3188.5 m

**Sample Description (spreadsheet):** Sample 3186m: 0% Siltstone, 100% fine to very coarse Sandstone, 100% bright  FLUOR in SST. TG 190U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-v crs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | mnr wk sil cmt (0.71) |
| Fluorescence | 100.0% bri  |
| Total Gas | 190 U |
| mTVDss | -1210.52 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3170m: lt gry,trnsl,clr,opq,f-v crs,tr vf aggs,tr crs lse,mod wl srt, sbang-sbrnd,tr-mnr wk sil cmt,tr-mnr lt gry arg mtx,tr carb flks,tr liths,fri aggs,com-dom lse,v pr vis por,fr inf

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|

---

## 5. Summary Statistics (McKinlay Member)

| Metric | Value |
|--------|-------|
| Intervals analysed | 130 |
| Depth range | 1635 – 3186 m |
| Avg % Sandstone | 93.3% |
| Mudlog matches | 116 / 130 |
