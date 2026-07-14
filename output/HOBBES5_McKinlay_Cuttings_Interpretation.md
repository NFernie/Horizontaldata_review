# HOBBES 5 — McKinlay Member Cuttings & Log Interpretation

**Generated:** 2026-07-14 05:20 UTC  
**Well:** HOBBES 5 (HOBBES 5)  
**TD:** 2590 m MD  

---

## 1. Data Sources & Methodology

| Source | File | Role |
|--------|------|------|
| Mudlog PDF | `Hobbes 5_Mudlog_Spud-2590m_TD_Field Final.pdf` | Cuttings lithology descriptions |
| Sample Descriptions | `Hobbes 5_Hz Section Samples Descriptions_Rev3.xlsx` (Input Sheet) | Depth intervals & sample properties |
| Formation Tops | `DC30.xlsx`, `Mck_Murta.xlsx` | Reservoir entry & overburden identification |
| Wireline Log (LAS) | `Hobbes_5` | GR, RES_DEEP, RES_SHALLOW |
| Trajectory | `Hobbes_5_trajectory` | mTVDss (Z subsea) |

## 2. Formation Top Analysis

### 2.1 Key Tops

| Marker | Depth (m MD) | Source |
|--------|-------------|--------|
| DC30 | 1701.15 | DC30.xlsx |
| McKinlay Member (shallowest) | 1702.19 | Mck_Murta.xlsx |

### 2.2 McKinlay Member Top Classification

**Initial reservoir entry (DC30 + shallowest McKinlay):** 1702.19 m MD

**Target re-entry (lone McKinlay below an overburden entry pair):**
- 1843.00 m MD
- 2169.00 m MD
- 2314.07 m MD

**Overburden entry (Murta + corresponding McKinlay within 5 m):**
| McKinlay entry (m MD) | Murta (m MD) | Δ (m) | Re-entry (m MD) | Zone length (m) |
|-----------------------|-------------|-------|-----------------|-----------------|
| 1758.61 | 1757.00 | 1.61 | 1843.00 | 84.4 |
| 2003.67 | 2005.00 | 1.33 | 2169.00 | 165.3 |
| 2276.94 | 2276.00 | 0.94 | 2314.07 | 37.1 |
| 2533.88 | 2535.00 | 1.12 | 2583.88 (assumed +50 m) | 50.0 |

**McKinlay Member analysis window:** 1702.2 – 2590.0 m MD

**Excluded overburden intervals (entry → re-entry, pay resumes at re-entry):** 1759–1843 m (overburden), 2004–2169 m (overburden), 2277–2314 m (overburden), 2534–2584 m (overburden)

**Samples in McKinlay Member:** 96 of 148 total
- Excluded pre-reservoir: 6
- Excluded overburden intervals: 46

## 3. Known Shortcomings

> **Read this section before using the output.**

1. **Mudlog PDF text extraction is imperfect.** Depth-to-description assignment uses ±15 m proximity heuristics.
2. **Formation top discrepancies** between Mck_Murta.xlsx and mudlog PDF picks are noted where present.
3. **Well name mapping:** HOBBES 5 → `HOBBES 5` (verified by TD and LAS WELL header).
4. **Sample intervals** are midpoints between consecutive sample depths — variable widths where spacing is irregular.
5. **Water-risk flags** use RQI, fluorescence, resistivity, GR, ZOI, and OWC proximity (see export).
6. **NULL LAS values** (-999.25) excluded from averages.
7. **Exclusion zones** span from each Murta/McKinlay overburden entry to the next lone McKinlay re-entry below (or entry + 50 m MD if none mapped). Later entry pairs inside an existing exclusion interval are treated as the same overburden excursion. Initial DC30/McKinlay reservoir entry is not excluded.
8. **Input Sheet only** — Calculations Sheet not used.
## 4. McKinlay Member Sample Intervals

Each section: depth interval, spreadsheet sample, mudlog cuttings, wireline log averages.

### 1702 m MD — Interval 1701.0 – 1703.5 m

**Sample Description (spreadsheet):** Sample 1702m: trace siderite in 40% Siltstone, trace siderite in 60% fine to coarse Sandstone, 30% bright FLUOR in SST. TG 21U

| Property | Value |
|----------|-------|
| % Sandstone | 60 |
| Grain Size | f-crs (max: C) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 30.0% bri |
| Total Gas | 21 U |
| mTVDss | -1203.78 m |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1710m: lt gry,trnsl,trnsp,opq, f-med,rr crs,sbrnd,occ sbang,wl- mod srt,wk sil cmt,lt gry arg mtx i/p,fr vis & inf por,fluor.
- **SILTSTONE** @ ~1710m: med gry,gry brn,arg, 208 U micmic,carb i/p,occ sil,sft,fri, tr sid,blky-sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 122.9 | 16 |
| RES_DEEP (ohm.m) | 32.30 | 16 |
| RES_SHALLOW (ohm.m) | 23.41 | 16 |

---

### 1705 m MD — Interval 1703.5 – 1707.5 m

**Sample Description (spreadsheet):** Sample 1705m: 0 siderite in 20% Siltstone, trace siderite in 80% fine to coarse Sandstone, 80% bright FLUOR in SST. TG 140U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | f-crs (max: C) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% bri |
| Total Gas | 140 U |
| mTVDss | -1203.87 m |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1710m: lt gry,trnsl,trnsp,opq, f-med,rr crs,sbrnd,occ sbang,wl- mod srt,wk sil cmt,lt gry arg mtx i/p,fr vis & inf por,fluor.
- **SILTSTONE** @ ~1710m: med gry,gry brn,arg, 208 U micmic,carb i/p,occ sil,sft,fri, tr sid,blky-sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.7 | 27 |
| RES_DEEP (ohm.m) | 36.43 | 27 |
| RES_SHALLOW (ohm.m) | 27.20 | 27 |

---

### 1710 m MD — Interval 1707.5 – 1712.5 m

**Sample Description (spreadsheet):** Sample 1710m: 0 siderite in 20% Siltstone, trace siderite in 80% fine to coarse Sandstone, 90% bright FLUOR in SST. TG 170U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | f-crs (max: C) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% bri |
| Total Gas | 170 U |
| mTVDss | -1203.98 m |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1710m: lt gry,trnsl,trnsp,opq, f-med,rr crs,sbrnd,occ sbang,wl- mod srt,wk sil cmt,lt gry arg mtx i/p,fr vis & inf por,fluor.
- **SILTSTONE** @ ~1710m: med gry,gry brn,arg, 208 U micmic,carb i/p,occ sil,sft,fri, tr sid,blky-sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.1 | 32 |
| RES_DEEP (ohm.m) | 36.46 | 32 |
| RES_SHALLOW (ohm.m) | 28.44 | 32 |

---

### 1715 m MD — Interval 1712.5 – 1717.5 m

**Sample Description (spreadsheet):** Sample 1715m: 0 siderite in 10% Siltstone, trace siderite in 90% fine to medium Sandstone, 100% bright FLUOR in SST. TG 120U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-med (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 120 U |
| mTVDss | -1204.03 m |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1710m: lt gry,trnsl,trnsp,opq, f-med,rr crs,sbrnd,occ sbang,wl- mod srt,wk sil cmt,lt gry arg mtx i/p,fr vis & inf por,fluor.
- **SILTSTONE** @ ~1710m: med gry,gry brn,arg, 208 U micmic,carb i/p,occ sil,sft,fri, tr sid,blky-sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.1 | 33 |
| RES_DEEP (ohm.m) | 31.98 | 33 |
| RES_SHALLOW (ohm.m) | 27.66 | 33 |

---

### 1720 m MD — Interval 1717.5 – 1722.5 m

**Sample Description (spreadsheet):** Sample 1720m: 0 siderite in 5% Siltstone, trace siderite in 95% fine to medium Sandstone, 100% bright FLUOR in SST. TG 171U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 171 U |
| mTVDss | -1204.03 m |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1710m: lt gry,trnsl,trnsp,opq, f-med,rr crs,sbrnd,occ sbang,wl- mod srt,wk sil cmt,lt gry arg mtx i/p,fr vis & inf por,fluor.
- **SILTSTONE** @ ~1710m: med gry,gry brn,arg, 208 U micmic,carb i/p,occ sil,sft,fri, tr sid,blky-sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.0 | 33 |
| RES_DEEP (ohm.m) | 32.65 | 33 |
| RES_SHALLOW (ohm.m) | 28.67 | 33 |

---

### 1725 m MD — Interval 1722.5 – 1727.5 m

**Sample Description (spreadsheet):** Sample 1725m: trace siderite in 5% Siltstone, 5 siderite in 95% fine to medium Sandstone, 100% bright FLUOR in SST. TG 175U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 175 U |
| mTVDss | -1203.97 m |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | 5 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1710m: lt gry,trnsl,trnsp,opq, f-med,rr crs,sbrnd,occ sbang,wl- mod srt,wk sil cmt,lt gry arg mtx i/p,fr vis & inf por,fluor.
- **SILTSTONE** @ ~1710m: med gry,gry brn,arg, 208 U micmic,carb i/p,occ sil,sft,fri, tr sid,blky-sbblky.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.2 | 33 |
| RES_DEEP (ohm.m) | 33.44 | 33 |
| RES_SHALLOW (ohm.m) | 29.18 | 33 |

---

### 1730 m MD — Interval 1727.5 – 1732.5 m

**Sample Description (spreadsheet):** Sample 1730m: 0 siderite in 0% Siltstone, trace siderite in 100% fine to occasional medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 230U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-occ med (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 230 U |
| mTVDss | -1203.88 m |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1740m: dk gry,arg,micmic,carb i/p, sft,blky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.7 | 33 |
| RES_DEEP (ohm.m) | 33.97 | 33 |
| RES_SHALLOW (ohm.m) | 31.02 | 33 |

---

### 1735 m MD — Interval 1732.5 – 1737.5 m

**Sample Description (spreadsheet):** Sample 1735m: 0 siderite in 0% Siltstone, 0 siderite in 100% fine  to  r medium Sandstone, 100% bright FLUOR in SST. TG 214U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f - r med (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% bri |
| Total Gas | 214 U |
| mTVDss | -1203.78 m |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1740m: dk gry,arg,micmic,carb i/p, sft,blky.
- **SANDSTONE** @ ~1750m: clr,trnsl,opq,lt gry,f-med, rr crs,mod srt,sbrnd-occ sbang,wk sil cmt,rr lt gry arg mtx,occ carb spks,com lse grns,fr-gd vis & inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.5 | 32 |
| RES_DEEP (ohm.m) | 33.81 | 32 |
| RES_SHALLOW (ohm.m) | 31.99 | 32 |

---

### 1740 m MD — Interval 1737.5 – 1745.0 m

**Sample Description (spreadsheet):** Sample 1740m: 0 siderite in 5% Siltstone, 0 siderite in 95% fine  to  medium, r coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 241U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f - med, r crs (max: C) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 241 U |
| mTVDss | -1203.69 m |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1740m: dk gry,arg,micmic,carb i/p, sft,blky.
- **SANDSTONE** @ ~1750m: clr,trnsl,opq,lt gry,f-med, rr crs,mod srt,sbrnd-occ sbang,wk sil cmt,rr lt gry arg mtx,occ carb spks,com lse grns,fr-gd vis & inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.7 | 50 |
| RES_DEEP (ohm.m) | 30.92 | 50 |
| RES_SHALLOW (ohm.m) | 27.41 | 50 |

---

### 1750 m MD — Interval 1745.0 – 1755.0 m

**Sample Description (spreadsheet):** Sample 1750m: 0 siderite in 5% Siltstone, 0 siderite in 95% fine  to  medium, r coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 230U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f - med, r crs (max: C) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 230 U |
| mTVDss | -1203.54 m |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1740m: dk gry,arg,micmic,carb i/p, sft,blky.
- **SANDSTONE** @ ~1750m: clr,trnsl,opq,lt gry,f-med, rr crs,mod srt,sbrnd-occ sbang,wk sil cmt,rr lt gry arg mtx,occ carb spks,com lse grns,fr-gd vis & inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 110.0 | 65 |
| RES_DEEP (ohm.m) | 28.62 | 65 |
| RES_SHALLOW (ohm.m) | 24.64 | 65 |

---

### 1850 m MD — Interval 1845.0 – 1855.0 m

**Sample Description (spreadsheet):** Sample 1850m: 10 siderite in 50% Siltstone, 15 siderite in 50% fine  to  coarse Sandstone, 20% bright FLUOR in SST. TG 218U

| Property | Value |
|----------|-------|
| % Sandstone | 50 |
| Grain Size | f - crs (max: C) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 20.0% bri |
| Total Gas | 218 U |
| mTVDss | -1205.75 m |
| FeCO₃ in Siltstone | 10 |
| FeCO₃ in Sandstone | 15 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1840m: trnsl,trnsp,lt brn,brn,trnsl brn,mott,f,occ med,wl srt,sbrnd,occ sbang,mod-strg sil-sid cmt,fri-mod hd, pr-ti vis & inf por,fluor.
- **SANDSTONE** @ ~1840m: trnsl,trnsp,opq,clr,f-crs, occ v crs,pr srt,sbrnd-sbang,occ ang, wk sil cmt,lt gry arg mtx,fri,com lse,pr vis por,pr-gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 110.8 | 65 |
| RES_DEEP (ohm.m) | 31.67 | 65 |
| RES_SHALLOW (ohm.m) | 24.47 | 65 |

---

### 1860 m MD — Interval 1855.0 – 1865.0 m

**Sample Description (spreadsheet):** Sample 1860m: trace siderite in 20% Siltstone, 5 siderite in 80% fine  to  coarse Sandstone, 60% bright FLUOR in SST. TG 214U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | f - crs (max: C) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 60.0% bri |
| Total Gas | 214 U |
| mTVDss | -1206.26 m |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | 5 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1840m: trnsl,trnsp,lt brn,brn,trnsl brn,mott,f,occ med,wl srt,sbrnd,occ sbang,mod-strg sil-sid cmt,fri-mod hd, pr-ti vis & inf por,fluor.
- **SANDSTONE** @ ~1840m: trnsl,trnsp,opq,clr,f-crs, occ v crs,pr srt,sbrnd-sbang,occ ang, wk sil cmt,lt gry arg mtx,fri,com lse,pr vis por,pr-gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.3 | 66 |
| RES_DEEP (ohm.m) | 24.77 | 66 |
| RES_SHALLOW (ohm.m) | 21.35 | 66 |

---

### 1870 m MD — Interval 1865.0 – 1875.0 m

**Sample Description (spreadsheet):** Sample 1870m: trace siderite in 15% Siltstone, 10 siderite in 85% fine to medium, occasional coarse Sandstone, 85% bright FLUOR in SST. TG 120U

| Property | Value |
|----------|-------|
| % Sandstone | 85 |
| Grain Size | f-med, occ crs (max: C) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 85.0% bri |
| Total Gas | 120 U |
| mTVDss | -1206.73 m |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | 10 |

**Mudlog Cuttings Description (PDF):**
- **COAL** @ ~1860m: blk,dll,arg,slty,brit,plty,ang. 78 / 7 / 5 / 5 / 5 245 U 1870 FLUORESCENCE:1870m-1914m 40-80% of SST,mod bri-bri yel wh- yel grn sptd-ptchy fluor,slw diff-
- **SANDSTONE** @ ~1860m: lt gry,lt brn,trnsl,opq,vf-f, mnr med-rr crs,lse,mod wl srt,sbang- sbrnd,com wk-mod strg sil cmt,mnr lt gry arg mtx,rr carb flks,tr sid,fri-occ mod hd aggs,mnr lse,v pr-pr vis por,pr-fr inf
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.6 | 66 |
| RES_DEEP (ohm.m) | 21.74 | 66 |
| RES_SHALLOW (ohm.m) | 20.25 | 66 |

---

### 1880 m MD — Interval 1875.0 – 1885.0 m

**Sample Description (spreadsheet):** Sample 1880m: trace siderite in 10% Siltstone, 5 siderite in 90% very fine to fine, minor medium, rare coarse Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 268U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-f, mnr med, rr crs (max: C) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 80.0% mod bri - bri |
| Total Gas | 268 U |
| mTVDss | -1207.08 m |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | 5 |

**Mudlog Cuttings Description (PDF):**
- **COAL** @ ~1860m: blk,dll,arg,slty,brit,plty,ang. 78 / 7 / 5 / 5 / 5 245 U 1870 FLUORESCENCE:1870m-1914m 40-80% of SST,mod bri-bri yel wh- yel grn sptd-ptchy fluor,slw diff-
- **SANDSTONE** @ ~1860m: lt gry,lt brn,trnsl,opq,vf-f, mnr med-rr crs,lse,mod wl srt,sbang- sbrnd,com wk-mod strg sil cmt,mnr lt gry arg mtx,rr carb flks,tr sid,fri-occ mod hd aggs,mnr lse,v pr-pr vis por,pr-fr inf
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.2 | 65 |
| RES_DEEP (ohm.m) | 21.90 | 65 |
| RES_SHALLOW (ohm.m) | 21.78 | 65 |

---

### 1890 m MD — Interval 1885.0 – 1895.0 m

**Sample Description (spreadsheet):** Sample 1890m: 0 siderite in 0% Siltstone, trace to 5 siderite in 100% dominantly fine  to  minor medium Sandstone, 90% moderately bright  to  bright FLUOR in SST. TG 200U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | dom f - mnr med (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 90.0% mod bri - bri |
| Total Gas | 200 U |
| mTVDss | -1207.31 m |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | tr-5 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1880m: lt gry,lt brn,trnsl,opq,vf-f, mnr med lse,dom f aggs,mod wl srt,sbang- sbrnd,com wk-mod strg sil cmt,mnr lt gry arg mtx,rr carb flks,tr sid,fri-occ mod hd aggs,mnr lse,v pr-pr vis por,pr-fr inf
- **SILTSTONE** @ ~1890m: 120 SILTSTONE:lt-med brn gry,lt-med gry, FLW: 234-259 gpm tr micmic,sil i/p,frm-hd,sbblky-sbfiss. 75 / 6 / 4 / 6 / 9
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.8 | 66 |
| RES_DEEP (ohm.m) | 21.36 | 66 |
| RES_SHALLOW (ohm.m) | 20.30 | 66 |

---

### 1900 m MD — Interval 1895.0 – 1905.0 m

**Sample Description (spreadsheet):** Sample 1900m: 5 siderite in 20% Siltstone, trace   siderite in 80% dominantly fine  to  minor medium Sandstone, 60% moderately bright  to  bright FLUOR in SST. TG 140U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | dom f - mnr med (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 60.0% mod bri - bri |
| Total Gas | 140 U |
| mTVDss | -1207.55 m |
| FeCO₃ in Siltstone | 5 |
| FeCO₃ in Sandstone | tr   |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1880m: lt gry,lt brn,trnsl,opq,vf-f, mnr med lse,dom f aggs,mod wl srt,sbang- sbrnd,com wk-mod strg sil cmt,mnr lt gry arg mtx,rr carb flks,tr sid,fri-occ mod hd aggs,mnr lse,v pr-pr vis por,pr-fr inf
- **SILTSTONE** @ ~1890m: 120 SILTSTONE:lt-med brn gry,lt-med gry, FLW: 234-259 gpm tr micmic,sil i/p,frm-hd,sbblky-sbfiss. 75 / 6 / 4 / 6 / 9
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.5 | 66 |
| RES_DEEP (ohm.m) | 20.65 | 66 |
| RES_SHALLOW (ohm.m) | 18.45 | 66 |

---

### 1910 m MD — Interval 1905.0 – 1912.0 m

**Sample Description (spreadsheet):** Sample 1910m: Tr siderite in 10% Siltstone, Tr siderite in 90% dominantly fine  to  trace medium Sandstone, 60% moderately bright  to  bright FLUOR in SST. TG 120U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | dom f - tr med (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 60.0% mod bri - bri |
| Total Gas | 120 U |
| mTVDss | -1207.67 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1890m: 120 SILTSTONE:lt-med brn gry,lt-med gry, FLW: 234-259 gpm tr micmic,sil i/p,frm-hd,sbblky-sbfiss. 75 / 6 / 4 / 6 / 9
- **SANDSTONE** @ ~1900m: lt gry,lt brn,trnsl,opq,vf-f, tr-mnr med,dom f aggs,mod wl srt,sbang- sbrnd,com wk-mod strg sil cmt,mnr lt gry arg mtx,rr carb flks,tr sid,fri-occ mod hd aggs,mnr lse,v pr-pr vis por,pr-fr inf
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 108.8 | 46 |
| RES_DEEP (ohm.m) | 20.03 | 46 |
| RES_SHALLOW (ohm.m) | 16.77 | 46 |

---

### 1914 m MD — Interval 1912.0 – 1915.5 m

**Sample Description (spreadsheet):** Sample 1914m: Tr siderite in 10% Siltstone, Tr siderite in 90% dominantly fine Sandstone, 40% dull  to  moderately bright FLUOR in SST. TG 85U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | dom f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 40.0% dull - mod bri |
| Total Gas | 85 U |
| mTVDss | -1207.67 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1900m: lt gry,lt brn,trnsl,opq,vf-f, tr-mnr med,dom f aggs,mod wl srt,sbang- sbrnd,com wk-mod strg sil cmt,mnr lt gry arg mtx,rr carb flks,tr sid,fri-occ mod hd aggs,mnr lse,v pr-pr vis por,pr-fr inf
- **SANDSTONE** @ ~1910m: lt gry,lt brn,trnsl,opq,vf-f, tr-mnr med,dom f aggs,mod wl srt,sbang- sbrnd,com wk-mod strg sil cmt,mnr lt gry arg mtx,rr carb flks,tr sid,fri-occ mod hd aggs,mnr lse,v pr-pr vis por,pr-fr inf
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.7 | 23 |
| RES_DEEP (ohm.m) | 20.13 | 23 |
| RES_SHALLOW (ohm.m) | 16.46 | 23 |

---

### 1917 m MD — Interval 1915.5 – 1918.5 m

**Sample Description (spreadsheet):** Sample 1917m: Tr siderite in 20% Siltstone, Tr siderite in 80% dominantly fine Sandstone, 40% dull  to  moderately bright FLUOR in SST. TG 85U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | dom f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 40.0% dull - mod bri |
| Total Gas | 85 U |
| mTVDss | -1207.67 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1910m: lt gry,lt brn,trnsl,opq,vf-f, tr-mnr med,dom f aggs,mod wl srt,sbang- sbrnd,com wk-mod strg sil cmt,mnr lt gry arg mtx,rr carb flks,tr sid,fri-occ mod hd aggs,mnr lse,v pr-pr vis por,pr-fr inf
- **SANDSTONE** @ ~1910m: lt gry,lt brn,trnsl,opq,vf-f aggs,mnr f-med lse,grd to aren SLTST i/p, mod wl srt,sbang-sbrnd,com wk-mod strg sil cmt,tr sid,tr carb flks,mnr lt gry arg mtx, fri-mod hd aggs,mnr lse,v pr-pr vis por,pr-
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.3 | 20 |
| RES_DEEP (ohm.m) | 19.88 | 20 |
| RES_SHALLOW (ohm.m) | 16.08 | 20 |

---

### 1920 m MD — Interval 1918.5 – 1921.5 m

**Sample Description (spreadsheet):** Sample 1920m: Tr siderite in 20% Siltstone, Tr siderite in 80% dominantly fine Sandstone, 40% dull  to  moderately bright FLUOR in SST. TG 75U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | dom f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 40.0% dll - mod bri |
| Total Gas | 75 U |
| mTVDss | -1207.66 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1910m: lt gry,lt brn,trnsl,opq,vf-f, tr-mnr med,dom f aggs,mod wl srt,sbang- sbrnd,com wk-mod strg sil cmt,mnr lt gry arg mtx,rr carb flks,tr sid,fri-occ mod hd aggs,mnr lse,v pr-pr vis por,pr-fr inf
- **SANDSTONE** @ ~1910m: lt gry,lt brn,trnsl,opq,vf-f aggs,mnr f-med lse,grd to aren SLTST i/p, mod wl srt,sbang-sbrnd,com wk-mod strg sil cmt,tr sid,tr carb flks,mnr lt gry arg mtx, fri-mod hd aggs,mnr lse,v pr-pr vis por,pr-
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.8 | 20 |
| RES_DEEP (ohm.m) | 20.01 | 20 |
| RES_SHALLOW (ohm.m) | 16.29 | 20 |

---

### 1923 m MD — Interval 1921.5 – 1924.5 m

**Sample Description (spreadsheet):** Sample 1923m: Tr siderite in 30% Siltstone, Tr siderite in 70% fine to medium  Sandstone, 30% dull  to  moderately bright FLUOR in SST. TG 78U

| Property | Value |
|----------|-------|
| % Sandstone | 70 |
| Grain Size | f-med  (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 30.0% dll - mod bri |
| Total Gas | 78 U |
| mTVDss | -1207.66 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1910m: lt gry,lt brn,trnsl,opq,vf-f, tr-mnr med,dom f aggs,mod wl srt,sbang- sbrnd,com wk-mod strg sil cmt,mnr lt gry arg mtx,rr carb flks,tr sid,fri-occ mod hd aggs,mnr lse,v pr-pr vis por,pr-fr inf
- **SANDSTONE** @ ~1910m: lt gry,lt brn,trnsl,opq,vf-f aggs,mnr f-med lse,grd to aren SLTST i/p, mod wl srt,sbang-sbrnd,com wk-mod strg sil cmt,tr sid,tr carb flks,mnr lt gry arg mtx, fri-mod hd aggs,mnr lse,v pr-pr vis por,pr-
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.5 | 19 |
| RES_DEEP (ohm.m) | 20.67 | 19 |
| RES_SHALLOW (ohm.m) | 17.16 | 19 |

---

### 1926 m MD — Interval 1924.5 – 1927.5 m

**Sample Description (spreadsheet):** Sample 1926m: Tr siderite in 30% Siltstone, Tr siderite in 70% very fine to fine, trace medium Sandstone, 40% dull  to  moderately bright FLUOR in SST. TG 70U

| Property | Value |
|----------|-------|
| % Sandstone | 70 |
| Grain Size | vf-f, tr med (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 40.0% dll - mod bri |
| Total Gas | 70 U |
| mTVDss | -1207.63 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1910m: lt gry,lt brn,trnsl,opq,vf-f, tr-mnr med,dom f aggs,mod wl srt,sbang- sbrnd,com wk-mod strg sil cmt,mnr lt gry arg mtx,rr carb flks,tr sid,fri-occ mod hd aggs,mnr lse,v pr-pr vis por,pr-fr inf
- **SANDSTONE** @ ~1910m: lt gry,lt brn,trnsl,opq,vf-f aggs,mnr f-med lse,grd to aren SLTST i/p, mod wl srt,sbang-sbrnd,com wk-mod strg sil cmt,tr sid,tr carb flks,mnr lt gry arg mtx, fri-mod hd aggs,mnr lse,v pr-pr vis por,pr-
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.0 | 20 |
| RES_DEEP (ohm.m) | 20.85 | 20 |
| RES_SHALLOW (ohm.m) | 17.17 | 20 |

---

### 1929 m MD — Interval 1927.5 – 1930.5 m

**Sample Description (spreadsheet):** Sample 1929m: Tr siderite in 30% Siltstone, Tr siderite in 70% very fine to fine, trace medium Sandstone, 40% dull  to  moderately bright FLUOR in SST. TG 70U

| Property | Value |
|----------|-------|
| % Sandstone | 70 |
| Grain Size | vf-f, tr med (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 40.0% dll - mod bri |
| Total Gas | 70 U |
| mTVDss | -1207.60 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1940m: 233-259 gpm SANDSTONE:lt gry,lt brn,trnsl,opq,vf-f aggs,vf-dom f aggs,grd to aren SLTST i/p, mod wl srt,sbang-sbrnd,com wk-mod strg sil cmt,tr sid,tr carb flks,mnr lt gry arg mtx, fri-mod hd aggs,mnr lse,v pr-pr vis por,pr-
- **SANDSTONE** @ ~1940m: lt gry,lt brn,trnsl,opq, vf-f aggs,com f-med lse,mod srt, 25-10-2023 78 / 7 / 5 / 5 / 5 dom sbang-sbrnd,mnr wk-mod strg sil cmt,mnr lt gry arg mtx,tr carb flks, 191 U fri-mod hd aggs,com lse,v pr-pr vis
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.3 | 20 |
| RES_DEEP (ohm.m) | 21.66 | 20 |
| RES_SHALLOW (ohm.m) | 17.72 | 20 |

---

### 1932 m MD — Interval 1930.5 – 1933.5 m

**Sample Description (spreadsheet):** Sample 1932m: Tr siderite in 60% Siltstone, Tr siderite in 40% very fine  to  fine Sandstone, 40% dull  to  moderately bright FLUOR in SST. TG 80U

| Property | Value |
|----------|-------|
| % Sandstone | 40 |
| Grain Size | vf - f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 40.0% dll - mod bri |
| Total Gas | 80 U |
| mTVDss | -1207.55 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1940m: 233-259 gpm SANDSTONE:lt gry,lt brn,trnsl,opq,vf-f aggs,vf-dom f aggs,grd to aren SLTST i/p, mod wl srt,sbang-sbrnd,com wk-mod strg sil cmt,tr sid,tr carb flks,mnr lt gry arg mtx, fri-mod hd aggs,mnr lse,v pr-pr vis por,pr-
- **SANDSTONE** @ ~1940m: lt gry,lt brn,trnsl,opq, vf-f aggs,com f-med lse,mod srt, 25-10-2023 78 / 7 / 5 / 5 / 5 dom sbang-sbrnd,mnr wk-mod strg sil cmt,mnr lt gry arg mtx,tr carb flks, 191 U fri-mod hd aggs,com lse,v pr-pr vis
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.2 | 20 |
| RES_DEEP (ohm.m) | 21.01 | 20 |
| RES_SHALLOW (ohm.m) | 17.28 | 20 |

---

### 1935 m MD — Interval 1933.5 – 1936.5 m

**Sample Description (spreadsheet):** Sample 1935m: Tr siderite in 40% Siltstone, Tr siderite in 60% very fine  to  fine Sandstone, 40% dull  to  moderately bright FLUOR in SST. TG 82U

| Property | Value |
|----------|-------|
| % Sandstone | 60 |
| Grain Size | vf - f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 40.0% dll - mod bri |
| Total Gas | 82 U |
| mTVDss | -1207.49 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1940m: 233-259 gpm SANDSTONE:lt gry,lt brn,trnsl,opq,vf-f aggs,vf-dom f aggs,grd to aren SLTST i/p, mod wl srt,sbang-sbrnd,com wk-mod strg sil cmt,tr sid,tr carb flks,mnr lt gry arg mtx, fri-mod hd aggs,mnr lse,v pr-pr vis por,pr-
- **SANDSTONE** @ ~1940m: lt gry,lt brn,trnsl,opq, vf-f aggs,com f-med lse,mod srt, 25-10-2023 78 / 7 / 5 / 5 / 5 dom sbang-sbrnd,mnr wk-mod strg sil cmt,mnr lt gry arg mtx,tr carb flks, 191 U fri-mod hd aggs,com lse,v pr-pr vis
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.5 | 19 |
| RES_DEEP (ohm.m) | 21.58 | 19 |
| RES_SHALLOW (ohm.m) | 17.34 | 19 |

---

### 1938 m MD — Interval 1936.5 – 1939.5 m

**Sample Description (spreadsheet):** Sample 1938m: Tr siderite in 40% Siltstone, Tr siderite in 60% very fine  to  fine Sandstone, 40% dull  to  moderately bright FLUOR in SST. TG 70U

| Property | Value |
|----------|-------|
| % Sandstone | 60 |
| Grain Size | vf - f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 40.0% dll - mod bri |
| Total Gas | 70 U |
| mTVDss | -1207.43 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1940m: 233-259 gpm SANDSTONE:lt gry,lt brn,trnsl,opq,vf-f aggs,vf-dom f aggs,grd to aren SLTST i/p, mod wl srt,sbang-sbrnd,com wk-mod strg sil cmt,tr sid,tr carb flks,mnr lt gry arg mtx, fri-mod hd aggs,mnr lse,v pr-pr vis por,pr-
- **SANDSTONE** @ ~1940m: lt gry,lt brn,trnsl,opq, vf-f aggs,com f-med lse,mod srt, 25-10-2023 78 / 7 / 5 / 5 / 5 dom sbang-sbrnd,mnr wk-mod strg sil cmt,mnr lt gry arg mtx,tr carb flks, 191 U fri-mod hd aggs,com lse,v pr-pr vis
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.5 | 20 |
| RES_DEEP (ohm.m) | 22.91 | 20 |
| RES_SHALLOW (ohm.m) | 18.41 | 20 |

---

### 1941 m MD — Interval 1939.5 – 1942.5 m

**Sample Description (spreadsheet):** Sample 1941m: Tr siderite in 20% Siltstone, Tr siderite in 80% very fine  to  fine Sandstone, 60% dull  to  moderately bright FLUOR in SST. TG 120U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | vf - f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 60.0% dll - mod bri |
| Total Gas | 120 U |
| mTVDss | -1207.38 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1940m: 233-259 gpm SANDSTONE:lt gry,lt brn,trnsl,opq,vf-f aggs,vf-dom f aggs,grd to aren SLTST i/p, mod wl srt,sbang-sbrnd,com wk-mod strg sil cmt,tr sid,tr carb flks,mnr lt gry arg mtx, fri-mod hd aggs,mnr lse,v pr-pr vis por,pr-
- **SANDSTONE** @ ~1940m: lt gry,lt brn,trnsl,opq, vf-f aggs,com f-med lse,mod srt, 25-10-2023 78 / 7 / 5 / 5 / 5 dom sbang-sbrnd,mnr wk-mod strg sil cmt,mnr lt gry arg mtx,tr carb flks, 191 U fri-mod hd aggs,com lse,v pr-pr vis
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.7 | 20 |
| RES_DEEP (ohm.m) | 23.25 | 20 |
| RES_SHALLOW (ohm.m) | 18.85 | 20 |

---

### 1944 m MD — Interval 1942.5 – 1945.5 m

**Sample Description (spreadsheet):** Sample 1944m: Tr siderite in 30% Siltstone, Tr siderite in 70% very fine  to  fine Sandstone, 50% dull  to  moderately bright FLUOR in SST. TG 90U

| Property | Value |
|----------|-------|
| % Sandstone | 70 |
| Grain Size | vf - f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 50.0% dll - mod bri |
| Total Gas | 90 U |
| mTVDss | -1207.33 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1940m: 233-259 gpm SANDSTONE:lt gry,lt brn,trnsl,opq,vf-f aggs,vf-dom f aggs,grd to aren SLTST i/p, mod wl srt,sbang-sbrnd,com wk-mod strg sil cmt,tr sid,tr carb flks,mnr lt gry arg mtx, fri-mod hd aggs,mnr lse,v pr-pr vis por,pr-
- **SANDSTONE** @ ~1940m: lt gry,lt brn,trnsl,opq, vf-f aggs,com f-med lse,mod srt, 25-10-2023 78 / 7 / 5 / 5 / 5 dom sbang-sbrnd,mnr wk-mod strg sil cmt,mnr lt gry arg mtx,tr carb flks, 191 U fri-mod hd aggs,com lse,v pr-pr vis
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.0 | 19 |
| RES_DEEP (ohm.m) | 25.08 | 19 |
| RES_SHALLOW (ohm.m) | 19.96 | 19 |

---

### 1947 m MD — Interval 1945.5 – 1948.5 m

**Sample Description (spreadsheet):** Sample 1947m: Tr siderite in 30% Siltstone, Tr siderite in 70% very fine  to  fine Sandstone, 50% dull  to  moderately bright FLUOR in SST. TG 90U

| Property | Value |
|----------|-------|
| % Sandstone | 70 |
| Grain Size | vf - f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 50.0% dll - mod bri |
| Total Gas | 90 U |
| mTVDss | -1207.27 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1940m: 233-259 gpm SANDSTONE:lt gry,lt brn,trnsl,opq,vf-f aggs,vf-dom f aggs,grd to aren SLTST i/p, mod wl srt,sbang-sbrnd,com wk-mod strg sil cmt,tr sid,tr carb flks,mnr lt gry arg mtx, fri-mod hd aggs,mnr lse,v pr-pr vis por,pr-
- **SANDSTONE** @ ~1940m: lt gry,lt brn,trnsl,opq, vf-f aggs,com f-med lse,mod srt, 25-10-2023 78 / 7 / 5 / 5 / 5 dom sbang-sbrnd,mnr wk-mod strg sil cmt,mnr lt gry arg mtx,tr carb flks, 191 U fri-mod hd aggs,com lse,v pr-pr vis
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.5 | 20 |
| RES_DEEP (ohm.m) | 24.14 | 20 |
| RES_SHALLOW (ohm.m) | 19.72 | 20 |

---

### 1950 m MD — Interval 1948.5 – 1951.5 m

**Sample Description (spreadsheet):** Sample 1950m: Tr siderite in 30% Siltstone, Tr siderite in 70% very fine  to  fine Sandstone, 60% dull  to  bright FLUOR in SST. TG 96U

| Property | Value |
|----------|-------|
| % Sandstone | 70 |
| Grain Size | vf - f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 60.0% dll - bri |
| Total Gas | 96 U |
| mTVDss | -1207.20 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1940m: 233-259 gpm SANDSTONE:lt gry,lt brn,trnsl,opq,vf-f aggs,vf-dom f aggs,grd to aren SLTST i/p, mod wl srt,sbang-sbrnd,com wk-mod strg sil cmt,tr sid,tr carb flks,mnr lt gry arg mtx, fri-mod hd aggs,mnr lse,v pr-pr vis por,pr-
- **SANDSTONE** @ ~1940m: lt gry,lt brn,trnsl,opq, vf-f aggs,com f-med lse,mod srt, 25-10-2023 78 / 7 / 5 / 5 / 5 dom sbang-sbrnd,mnr wk-mod strg sil cmt,mnr lt gry arg mtx,tr carb flks, 191 U fri-mod hd aggs,com lse,v pr-pr vis
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.1 | 20 |
| RES_DEEP (ohm.m) | 23.06 | 20 |
| RES_SHALLOW (ohm.m) | 19.76 | 20 |

---

### 1953 m MD — Interval 1951.5 – 1954.5 m

**Sample Description (spreadsheet):** Sample 1953m: Tr siderite in 30% Siltstone, Tr siderite in 70% very fine  to  fine Sandstone, 60% dull  to  bright FLUOR in SST. TG 95U

| Property | Value |
|----------|-------|
| % Sandstone | 70 |
| Grain Size | vf - f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 60.0% dll - bri |
| Total Gas | 95 U |
| mTVDss | -1207.15 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1940m: 233-259 gpm SANDSTONE:lt gry,lt brn,trnsl,opq,vf-f aggs,vf-dom f aggs,grd to aren SLTST i/p, mod wl srt,sbang-sbrnd,com wk-mod strg sil cmt,tr sid,tr carb flks,mnr lt gry arg mtx, fri-mod hd aggs,mnr lse,v pr-pr vis por,pr-
- **SANDSTONE** @ ~1940m: lt gry,lt brn,trnsl,opq, vf-f aggs,com f-med lse,mod srt, 25-10-2023 78 / 7 / 5 / 5 / 5 dom sbang-sbrnd,mnr wk-mod strg sil cmt,mnr lt gry arg mtx,tr carb flks, 191 U fri-mod hd aggs,com lse,v pr-pr vis
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.5 | 19 |
| RES_DEEP (ohm.m) | 22.17 | 19 |
| RES_SHALLOW (ohm.m) | 19.73 | 19 |

---

### 1956 m MD — Interval 1954.5 – 1957.5 m

**Sample Description (spreadsheet):** Sample 1956m: Tr siderite in 20% Siltstone, Tr siderite in 80% very fine  to  medium Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 101U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | vf - med (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 80.0% mod bri - bri |
| Total Gas | 101 U |
| mTVDss | -1207.09 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1940m: 233-259 gpm SANDSTONE:lt gry,lt brn,trnsl,opq,vf-f aggs,vf-dom f aggs,grd to aren SLTST i/p, mod wl srt,sbang-sbrnd,com wk-mod strg sil cmt,tr sid,tr carb flks,mnr lt gry arg mtx, fri-mod hd aggs,mnr lse,v pr-pr vis por,pr-
- **SANDSTONE** @ ~1940m: lt gry,lt brn,trnsl,opq, vf-f aggs,com f-med lse,mod srt, 25-10-2023 78 / 7 / 5 / 5 / 5 dom sbang-sbrnd,mnr wk-mod strg sil cmt,mnr lt gry arg mtx,tr carb flks, 191 U fri-mod hd aggs,com lse,v pr-pr vis
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.8 | 20 |
| RES_DEEP (ohm.m) | 22.38 | 20 |
| RES_SHALLOW (ohm.m) | 20.55 | 20 |

---

### 1959 m MD — Interval 1957.5 – 1960.5 m

**Sample Description (spreadsheet):** Sample 1959m: Tr siderite in 20% Siltstone, Tr siderite in 80% very fine  to  medium Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 105U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | vf - med (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 80.0% mod bri - bri |
| Total Gas | 105 U |
| mTVDss | -1207.04 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.6 | 20 |
| RES_DEEP (ohm.m) | 22.99 | 20 |
| RES_SHALLOW (ohm.m) | 21.18 | 20 |

---

### 1962 m MD — Interval 1960.5 – 1963.5 m

**Sample Description (spreadsheet):** Sample 1962m: Tr siderite in 10% Siltstone, Tr siderite in 90% very fine  to  medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 190U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf - med (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 190 U |
| mTVDss | -1206.99 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.8 | 19 |
| RES_DEEP (ohm.m) | 23.94 | 19 |
| RES_SHALLOW (ohm.m) | 21.38 | 19 |

---

### 1965 m MD — Interval 1963.5 – 1966.5 m

**Sample Description (spreadsheet):** Sample 1965m: Tr siderite in 10% Siltstone, Tr siderite in 90% very fine  to  medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 114U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf - med (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.61) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 114 U |
| mTVDss | -1206.95 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1980m: lt-med brn gry,lt-med gry, 1990 arg,mnr aren,tr-mnr carb flks,tr sid, tr micmic,sil i/p,frm-hd,sbblky-sbfiss. 81 / 6 / 4 / 4 / 5 SURVEY @ 1997.0m
- **SANDSTONE** @ ~1980m: 4-10 klbs 2000 SANDSTONE:lt gry,clr,trnsl,opq,mnr FLW: 230-260 gpm gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.0 | 20 |
| RES_DEEP (ohm.m) | 24.03 | 20 |
| RES_SHALLOW (ohm.m) | 22.21 | 20 |

---

### 1968 m MD — Interval 1966.5 – 1969.5 m

**Sample Description (spreadsheet):** Sample 1968m: Tr siderite in 10% Siltstone, Tr siderite in 90% very fine  to  medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 111U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf - med (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.61) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 111 U |
| mTVDss | -1206.92 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1980m: lt-med brn gry,lt-med gry, 1990 arg,mnr aren,tr-mnr carb flks,tr sid, tr micmic,sil i/p,frm-hd,sbblky-sbfiss. 81 / 6 / 4 / 4 / 5 SURVEY @ 1997.0m
- **SANDSTONE** @ ~1980m: 4-10 klbs 2000 SANDSTONE:lt gry,clr,trnsl,opq,mnr FLW: 230-260 gpm gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.6 | 20 |
| RES_DEEP (ohm.m) | 26.41 | 20 |
| RES_SHALLOW (ohm.m) | 25.00 | 20 |

---

### 1971 m MD — Interval 1969.5 – 1972.5 m

**Sample Description (spreadsheet):** Sample 1971m: Tr siderite in 5% Siltstone, Tr siderite in 95% very fine  to  medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 118U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf - med (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.61) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 118 U |
| mTVDss | -1206.91 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1980m: lt-med brn gry,lt-med gry, 1990 arg,mnr aren,tr-mnr carb flks,tr sid, tr micmic,sil i/p,frm-hd,sbblky-sbfiss. 81 / 6 / 4 / 4 / 5 SURVEY @ 1997.0m
- **SANDSTONE** @ ~1980m: 4-10 klbs 2000 SANDSTONE:lt gry,clr,trnsl,opq,mnr FLW: 230-260 gpm gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.1 | 19 |
| RES_DEEP (ohm.m) | 26.82 | 19 |
| RES_SHALLOW (ohm.m) | 25.21 | 19 |

---

### 1974 m MD — Interval 1972.5 – 1975.5 m

**Sample Description (spreadsheet):** Sample 1974m: Tr siderite in 5% Siltstone, Tr siderite in 95% fine  to  coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 114U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f - crs (max: C) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.61) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 114 U |
| mTVDss | -1206.91 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1980m: lt-med brn gry,lt-med gry, 1990 arg,mnr aren,tr-mnr carb flks,tr sid, tr micmic,sil i/p,frm-hd,sbblky-sbfiss. 81 / 6 / 4 / 4 / 5 SURVEY @ 1997.0m
- **SANDSTONE** @ ~1980m: 4-10 klbs 2000 SANDSTONE:lt gry,clr,trnsl,opq,mnr FLW: 230-260 gpm gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.6 | 20 |
| RES_DEEP (ohm.m) | 25.16 | 20 |
| RES_SHALLOW (ohm.m) | 22.79 | 20 |

---

### 1977 m MD — Interval 1975.5 – 1978.5 m

**Sample Description (spreadsheet):** Sample 1977m: Tr siderite in 0% Siltstone, Tr siderite in 100% very fine  to  medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 112U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf - med (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.61) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 112 U |
| mTVDss | -1206.92 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1980m: lt-med brn gry,lt-med gry, 1990 arg,mnr aren,tr-mnr carb flks,tr sid, tr micmic,sil i/p,frm-hd,sbblky-sbfiss. 81 / 6 / 4 / 4 / 5 SURVEY @ 1997.0m
- **SANDSTONE** @ ~1980m: 4-10 klbs 2000 SANDSTONE:lt gry,clr,trnsl,opq,mnr FLW: 230-260 gpm gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.2 | 20 |
| RES_DEEP (ohm.m) | 26.01 | 20 |
| RES_SHALLOW (ohm.m) | 23.86 | 20 |

---

### 1980 m MD — Interval 1978.5 – 1981.5 m

**Sample Description (spreadsheet):** Sample 1980m: Tr siderite in 0% Siltstone, Tr siderite in 100% very fine  to  medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 149U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf - med (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.61) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 149 U |
| mTVDss | -1206.94 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1980m: lt-med brn gry,lt-med gry, 1990 arg,mnr aren,tr-mnr carb flks,tr sid, tr micmic,sil i/p,frm-hd,sbblky-sbfiss. 81 / 6 / 4 / 4 / 5 SURVEY @ 1997.0m
- **SANDSTONE** @ ~1980m: 4-10 klbs 2000 SANDSTONE:lt gry,clr,trnsl,opq,mnr FLW: 230-260 gpm gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.5 | 19 |
| RES_DEEP (ohm.m) | 24.71 | 19 |
| RES_SHALLOW (ohm.m) | 22.91 | 19 |

---

### 1983 m MD — Interval 1981.5 – 1984.5 m

**Sample Description (spreadsheet):** Sample 1983m: Tr siderite in 0% Siltstone, Tr siderite in 100% very fine  to  medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 116U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf - med (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.61) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 116 U |
| mTVDss | -1206.97 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1980m: lt-med brn gry,lt-med gry, 1990 arg,mnr aren,tr-mnr carb flks,tr sid, tr micmic,sil i/p,frm-hd,sbblky-sbfiss. 81 / 6 / 4 / 4 / 5 SURVEY @ 1997.0m
- **SANDSTONE** @ ~1980m: 4-10 klbs 2000 SANDSTONE:lt gry,clr,trnsl,opq,mnr FLW: 230-260 gpm gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.2 | 20 |
| RES_DEEP (ohm.m) | 23.11 | 20 |
| RES_SHALLOW (ohm.m) | 22.27 | 20 |

---

### 1986 m MD — Interval 1984.5 – 1987.5 m

**Sample Description (spreadsheet):** Sample 1986m: Tr siderite in 0% Siltstone, Tr siderite in 100% very fine  to  medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 118U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf - med (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.61) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 118 U |
| mTVDss | -1207.00 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1980m: lt-med brn gry,lt-med gry, 1990 arg,mnr aren,tr-mnr carb flks,tr sid, tr micmic,sil i/p,frm-hd,sbblky-sbfiss. 81 / 6 / 4 / 4 / 5 SURVEY @ 1997.0m
- **SANDSTONE** @ ~1980m: 4-10 klbs 2000 SANDSTONE:lt gry,clr,trnsl,opq,mnr FLW: 230-260 gpm gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.9 | 20 |
| RES_DEEP (ohm.m) | 24.24 | 20 |
| RES_SHALLOW (ohm.m) | 23.01 | 20 |

---

### 1989 m MD — Interval 1987.5 – 1990.5 m

**Sample Description (spreadsheet):** Sample 1989m: Tr siderite in 5% Siltstone, Tr siderite in 95% fine  to  coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 136U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f - crs (max: C) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.61) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 136 U |
| mTVDss | -1207.04 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1980m: lt-med brn gry,lt-med gry, 1990 arg,mnr aren,tr-mnr carb flks,tr sid, tr micmic,sil i/p,frm-hd,sbblky-sbfiss. 81 / 6 / 4 / 4 / 5 SURVEY @ 1997.0m
- **SANDSTONE** @ ~1980m: 4-10 klbs 2000 SANDSTONE:lt gry,clr,trnsl,opq,mnr FLW: 230-260 gpm gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.9 | 20 |
| RES_DEEP (ohm.m) | 26.48 | 20 |
| RES_SHALLOW (ohm.m) | 23.12 | 20 |

---

### 1992 m MD — Interval 1990.5 – 1993.5 m

**Sample Description (spreadsheet):** Sample 1992m: Tr siderite in 5% Siltstone, Tr siderite in 95% fine  to  coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 141U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f - crs (max: C) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.61) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 141 U |
| mTVDss | -1207.10 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1980m: lt-med brn gry,lt-med gry, 1990 arg,mnr aren,tr-mnr carb flks,tr sid, tr micmic,sil i/p,frm-hd,sbblky-sbfiss. 81 / 6 / 4 / 4 / 5 SURVEY @ 1997.0m
- **SANDSTONE** @ ~1980m: 4-10 klbs 2000 SANDSTONE:lt gry,clr,trnsl,opq,mnr FLW: 230-260 gpm gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.7 | 19 |
| RES_DEEP (ohm.m) | 33.49 | 19 |
| RES_SHALLOW (ohm.m) | 26.97 | 19 |

---

### 1995 m MD — Interval 1993.5 – 1997.5 m

**Sample Description (spreadsheet):** Sample 1995m: Tr siderite in 5% Siltstone, Tr siderite in 95% fine  to  coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 77U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f - crs (max: C) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.61) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 77 U |
| mTVDss | -1207.16 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1980m: lt-med brn gry,lt-med gry, 1990 arg,mnr aren,tr-mnr carb flks,tr sid, tr micmic,sil i/p,frm-hd,sbblky-sbfiss. 81 / 6 / 4 / 4 / 5 SURVEY @ 1997.0m
- **SANDSTONE** @ ~1980m: 4-10 klbs 2000 SANDSTONE:lt gry,clr,trnsl,opq,mnr FLW: 230-260 gpm gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.5 | 26 |
| RES_DEEP (ohm.m) | 24.96 | 26 |
| RES_SHALLOW (ohm.m) | 21.28 | 26 |

---

### 2172 m MD — Interval 2170.5 – 2173.5 m

**Sample Description (spreadsheet):** Sample 2172m: trace siderite in 35% Siltstone, 5 siderite in 65% very fine to medium, occasional coarse Sandstone, 60% dull  to  bright FLUOR in SST. TG 95U

| Property | Value |
|----------|-------|
| % Sandstone | 65 |
| Grain Size | vf-med, occ crs (max: C) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 60.0% dll - bri |
| Total Gas | 95 U |
| mTVDss | -1209.39 m |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | 5 |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2160m: med-lt gry,gry brn i/p, 85 / 5 / 3 / 2 / 5 arg,micmic,carb,aren grd to vf SST i/p,sft,fri,sbblky. Tr% of SST,mod bri-bri,occ
- **SANDSTONE** @ ~2160m: trnsp,trnsl,opq,clr,f-med, occ vf,rr med,mod srt,sbrnd-occ sbang, wk sil cmt,occ lt gry arg mtx,com lse 2170 grs,fri,pr vis & fr inf por,fluor. 77 / 7 / 5 / 6 / 5 144 U
- _(12 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.5 | 19 |
| RES_DEEP (ohm.m) | 18.16 | 19 |
| RES_SHALLOW (ohm.m) | 17.56 | 19 |

---

### 2175 m MD — Interval 2173.5 – 2176.5 m

**Sample Description (spreadsheet):** Sample 2175m: trace siderite in 15% Siltstone, trace siderite in 85% fine to medium, occasional coarse Sandstone, 85% dull  to  bright FLUOR in SST. TG 100U

| Property | Value |
|----------|-------|
| % Sandstone | 85 |
| Grain Size | f-med, occ crs (max: C) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 85.0% dll - bri |
| Total Gas | 100 U |
| mTVDss | -1209.49 m |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2160m: med-lt gry,gry brn i/p, 85 / 5 / 3 / 2 / 5 arg,micmic,carb,aren grd to vf SST i/p,sft,fri,sbblky. Tr% of SST,mod bri-bri,occ
- **SANDSTONE** @ ~2160m: trnsp,trnsl,opq,clr,f-med, occ vf,rr med,mod srt,sbrnd-occ sbang, wk sil cmt,occ lt gry arg mtx,com lse 2170 grs,fri,pr vis & fr inf por,fluor. 77 / 7 / 5 / 6 / 5 144 U
- _(12 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.2 | 20 |
| RES_DEEP (ohm.m) | 19.39 | 20 |
| RES_SHALLOW (ohm.m) | 17.98 | 20 |

---

### 2178 m MD — Interval 2176.5 – 2179.5 m

**Sample Description (spreadsheet):** Sample 2178m: 0 siderite in 10% Siltstone, trace siderite in 90% fine, occasional medium, r coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 105U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f, occ med, r crs (max: C) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 105 U |
| mTVDss | -1209.57 m |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2180m: clr,trnsl,trnsp,opq,f-med, CHANGE SHAKER SCREEN occ crs,mod srt,sbrnd,occ sbang,wk sil cmt,occ lt gry arg mtx,fri,com lse,fr vis & fr-gd inf por,fluor.
- **SANDSTONE** @ ~2180m: 42 2190 SANDSTONE:lt gry,trnsl,trnsp,opq,lt brn PV: 11 opq,f-occ med,rr crs,mod srt,sbrnd-occ YP: 20 sbang,wk sil cmt,lt gry/brn arg mtx,fri, Gel: 6/8/11 com lse,pr-fr vis por,fr inf por,fluor. WL: 5
- _(10 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.3 | 20 |
| RES_DEEP (ohm.m) | 20.02 | 20 |
| RES_SHALLOW (ohm.m) | 19.35 | 20 |

---

### 2181 m MD — Interval 2179.5 – 2182.5 m

**Sample Description (spreadsheet):** Sample 2181m: 0 siderite in 10% Siltstone, 0 siderite in 90% fine to occasional medium, r coarse Sandstone, 90% dull  to  bright FLUOR in SST. TG 107U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-occ med, r crs (max: C) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 90.0% dll - bri |
| Total Gas | 107 U |
| mTVDss | -1209.64 m |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2180m: clr,trnsl,trnsp,opq,f-med, CHANGE SHAKER SCREEN occ crs,mod srt,sbrnd,occ sbang,wk sil cmt,occ lt gry arg mtx,fri,com lse,fr vis & fr-gd inf por,fluor.
- **SANDSTONE** @ ~2180m: 42 2190 SANDSTONE:lt gry,trnsl,trnsp,opq,lt brn PV: 11 opq,f-occ med,rr crs,mod srt,sbrnd-occ YP: 20 sbang,wk sil cmt,lt gry/brn arg mtx,fri, Gel: 6/8/11 com lse,pr-fr vis por,fr inf por,fluor. WL: 5
- _(10 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.9 | 19 |
| RES_DEEP (ohm.m) | 19.64 | 19 |
| RES_SHALLOW (ohm.m) | 18.51 | 19 |

---

### 2184 m MD — Interval 2182.5 – 2185.5 m

**Sample Description (spreadsheet):** Sample 2184m: 0 siderite in 15% Siltstone, 5 siderite in 85% fine to medium, occasional coarse Sandstone, 60% dull  to  moderately bright FLUOR in SST. TG 68U

| Property | Value |
|----------|-------|
| % Sandstone | 85 |
| Grain Size | f-med, occ crs (max: C) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 60.0% dll - mod bri |
| Total Gas | 68 U |
| mTVDss | -1209.69 m |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 5 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2180m: clr,trnsl,trnsp,opq,f-med, CHANGE SHAKER SCREEN occ crs,mod srt,sbrnd,occ sbang,wk sil cmt,occ lt gry arg mtx,fri,com lse,fr vis & fr-gd inf por,fluor.
- **SANDSTONE** @ ~2180m: 42 2190 SANDSTONE:lt gry,trnsl,trnsp,opq,lt brn PV: 11 opq,f-occ med,rr crs,mod srt,sbrnd-occ YP: 20 sbang,wk sil cmt,lt gry/brn arg mtx,fri, Gel: 6/8/11 com lse,pr-fr vis por,fr inf por,fluor. WL: 5
- _(10 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.0 | 20 |
| RES_DEEP (ohm.m) | 18.17 | 20 |
| RES_SHALLOW (ohm.m) | 17.55 | 20 |

---

### 2187 m MD — Interval 2185.5 – 2188.5 m

**Sample Description (spreadsheet):** Sample 2187m: 0 siderite in 15% Siltstone, 5 siderite in 85% fine to medium, occasional coarse Sandstone, 60% dull  to  moderately bright FLUOR in SST. TG 83U

| Property | Value |
|----------|-------|
| % Sandstone | 85 |
| Grain Size | f-med, occ crs (max: C) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 60.0% dll - mod bri |
| Total Gas | 83 U |
| mTVDss | -1209.71 m |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 5 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2180m: clr,trnsl,trnsp,opq,f-med, CHANGE SHAKER SCREEN occ crs,mod srt,sbrnd,occ sbang,wk sil cmt,occ lt gry arg mtx,fri,com lse,fr vis & fr-gd inf por,fluor.
- **SANDSTONE** @ ~2180m: 42 2190 SANDSTONE:lt gry,trnsl,trnsp,opq,lt brn PV: 11 opq,f-occ med,rr crs,mod srt,sbrnd-occ YP: 20 sbang,wk sil cmt,lt gry/brn arg mtx,fri, Gel: 6/8/11 com lse,pr-fr vis por,fr inf por,fluor. WL: 5
- _(10 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.4 | 20 |
| RES_DEEP (ohm.m) | 18.63 | 20 |
| RES_SHALLOW (ohm.m) | 17.24 | 20 |

---

### 2190 m MD — Interval 2188.5 – 2191.5 m

**Sample Description (spreadsheet):** Sample 2190m: 0 siderite in 5% Siltstone, trace siderite in 95% fine, occasional medium, r coarse Sandstone, 85% dull  to  bright FLUOR in SST. TG 97U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f, occ med, r crs (max: C) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 85.0% dll - bri |
| Total Gas | 97 U |
| mTVDss | -1209.73 m |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2180m: clr,trnsl,trnsp,opq,f-med, CHANGE SHAKER SCREEN occ crs,mod srt,sbrnd,occ sbang,wk sil cmt,occ lt gry arg mtx,fri,com lse,fr vis & fr-gd inf por,fluor.
- **SANDSTONE** @ ~2180m: 42 2190 SANDSTONE:lt gry,trnsl,trnsp,opq,lt brn PV: 11 opq,f-occ med,rr crs,mod srt,sbrnd-occ YP: 20 sbang,wk sil cmt,lt gry/brn arg mtx,fri, Gel: 6/8/11 com lse,pr-fr vis por,fr inf por,fluor. WL: 5
- _(10 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.2 | 19 |
| RES_DEEP (ohm.m) | 18.16 | 19 |
| RES_SHALLOW (ohm.m) | 16.95 | 19 |

---

### 2193 m MD — Interval 2191.5 – 2194.5 m

**Sample Description (spreadsheet):** Sample 2193m: 0 siderite in 5% Siltstone, 5 siderite in 95% fine, occasional medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 103U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f, occ med (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 103 U |
| mTVDss | -1209.73 m |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 5 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2180m: clr,trnsl,trnsp,opq,f-med, CHANGE SHAKER SCREEN occ crs,mod srt,sbrnd,occ sbang,wk sil cmt,occ lt gry arg mtx,fri,com lse,fr vis & fr-gd inf por,fluor.
- **SANDSTONE** @ ~2180m: 42 2190 SANDSTONE:lt gry,trnsl,trnsp,opq,lt brn PV: 11 opq,f-occ med,rr crs,mod srt,sbrnd-occ YP: 20 sbang,wk sil cmt,lt gry/brn arg mtx,fri, Gel: 6/8/11 com lse,pr-fr vis por,fr inf por,fluor. WL: 5
- _(10 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.1 | 20 |
| RES_DEEP (ohm.m) | 18.26 | 20 |
| RES_SHALLOW (ohm.m) | 16.90 | 20 |

---

### 2196 m MD — Interval 2194.5 – 2197.5 m

**Sample Description (spreadsheet):** Sample 2196m: 0 siderite in 5% Siltstone, 0 siderite in 95% fine, occasional medium Sandstone, 90% dull  to  bright FLUOR in SST. TG 115U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f, occ med (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 90.0% dll - bri |
| Total Gas | 115 U |
| mTVDss | -1209.73 m |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2180m: clr,trnsl,trnsp,opq,f-med, CHANGE SHAKER SCREEN occ crs,mod srt,sbrnd,occ sbang,wk sil cmt,occ lt gry arg mtx,fri,com lse,fr vis & fr-gd inf por,fluor.
- **SANDSTONE** @ ~2180m: 42 2190 SANDSTONE:lt gry,trnsl,trnsp,opq,lt brn PV: 11 opq,f-occ med,rr crs,mod srt,sbrnd-occ YP: 20 sbang,wk sil cmt,lt gry/brn arg mtx,fri, Gel: 6/8/11 com lse,pr-fr vis por,fr inf por,fluor. WL: 5
- _(10 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.8 | 20 |
| RES_DEEP (ohm.m) | 18.00 | 20 |
| RES_SHALLOW (ohm.m) | 16.56 | 20 |

---

### 2199 m MD — Interval 2197.5 – 2200.5 m

**Sample Description (spreadsheet):** Sample 2199m: 0 siderite in 0% Siltstone, 0 siderite in 100% fine, occasional medium Sandstone, 95% dull  to  bright FLUOR in SST. TG 99U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f, occ med (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 95.0% dll - bri |
| Total Gas | 99 U |
| mTVDss | -1209.72 m |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.1 | 19 |
| RES_DEEP (ohm.m) | 17.93 | 19 |
| RES_SHALLOW (ohm.m) | 16.84 | 19 |

---

### 2202 m MD — Interval 2200.5 – 2203.5 m

**Sample Description (spreadsheet):** Sample 2202m: 0 siderite in 0% Siltstone, 0 siderite in 100% fine, occasional medium Sandstone, 80% dull  to  moderately bright FLUOR in SST. TG 91U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f, occ med (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 80.0% dll - mod bri |
| Total Gas | 91 U |
| mTVDss | -1209.69 m |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.2 | 20 |
| RES_DEEP (ohm.m) | 18.54 | 20 |
| RES_SHALLOW (ohm.m) | 16.87 | 20 |

---

### 2205 m MD — Interval 2203.5 – 2206.5 m

**Sample Description (spreadsheet):** Sample 2205m: 0 siderite in 0% Siltstone, 0 siderite in 100% fine, occasional medium Sandstone, 90% dull  to  bright FLUOR in SST. TG 82U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f, occ med (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 90.0% dll - bri |
| Total Gas | 82 U |
| mTVDss | -1209.66 m |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.2 | 20 |
| RES_DEEP (ohm.m) | 19.37 | 20 |
| RES_SHALLOW (ohm.m) | 17.59 | 20 |

---

### 2208 m MD — Interval 2206.5 – 2209.5 m

**Sample Description (spreadsheet):** Sample 2208m: 0 siderite in 5% Siltstone, 0 siderite in 95% very fine to very, occasional medium Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 121U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-v, occ med (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 80.0% mod bri - bri |
| Total Gas | 121 U |
| mTVDss | -1209.62 m |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.3 | 20 |
| RES_DEEP (ohm.m) | 19.56 | 20 |
| RES_SHALLOW (ohm.m) | 17.34 | 20 |

---

### 2211 m MD — Interval 2209.5 – 2212.5 m

**Sample Description (spreadsheet):** Sample 2211m: 0 siderite in 0% Siltstone, 0 siderite in 100% very fine to fine, occasional medium Sandstone, 70% dull  to  moderately bright FLUOR in SST. TG 101U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f, occ med (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 70.0% dll - mod bri |
| Total Gas | 101 U |
| mTVDss | -1209.59 m |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.7 | 19 |
| RES_DEEP (ohm.m) | 19.11 | 19 |
| RES_SHALLOW (ohm.m) | 17.10 | 19 |

---

### 2214 m MD — Interval 2212.5 – 2215.5 m

**Sample Description (spreadsheet):** Sample 2214m: 0 siderite in 0% Siltstone, trace siderite in 100% very fine to fine, occasional medium Sandstone, 80% dull  to  moderately bright FLUOR in SST. TG 93U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f, occ med (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 80.0% dll - mod bri |
| Total Gas | 93 U |
| mTVDss | -1209.55 m |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.0 | 20 |
| RES_DEEP (ohm.m) | 19.25 | 20 |
| RES_SHALLOW (ohm.m) | 17.71 | 20 |

---

### 2217 m MD — Interval 2215.5 – 2218.5 m

**Sample Description (spreadsheet):** Sample 2217m: 0 siderite in 0% Siltstone, 0 siderite in 100% very fine to fine Sandstone, 80% dull  to  moderately bright FLUOR in SST. TG 102U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 80.0% dll - mod bri |
| Total Gas | 102 U |
| mTVDss | -1209.51 m |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.3 | 20 |
| RES_DEEP (ohm.m) | 20.30 | 20 |
| RES_SHALLOW (ohm.m) | 18.58 | 20 |

---

### 2220 m MD — Interval 2218.5 – 2221.5 m

**Sample Description (spreadsheet):** Sample 2220m: trace siderite in 0% Siltstone, trace siderite in 100% very fine to fine, fine to medium in part Sandstone, 80% moderately bright FLUOR in SST. TG 80U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f, f-med i/p (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 80.0% mod bri |
| Total Gas | 80 U |
| mTVDss | -1209.46 m |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.5 | 19 |
| RES_DEEP (ohm.m) | 19.98 | 19 |
| RES_SHALLOW (ohm.m) | 17.98 | 19 |

---

### 2223 m MD — Interval 2221.5 – 2224.5 m

**Sample Description (spreadsheet):** Sample 2223m: trace siderite in 0% Siltstone, trace siderite in 100% very fine to fine, fine to medium in part Sandstone, 80% moderately bright FLUOR in SST. TG 72U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f, f-med i/p (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 80.0% mod bri |
| Total Gas | 72 U |
| mTVDss | -1209.40 m |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.5 | 20 |
| RES_DEEP (ohm.m) | 19.34 | 20 |
| RES_SHALLOW (ohm.m) | 17.61 | 20 |

---

### 2226 m MD — Interval 2224.5 – 2227.5 m

**Sample Description (spreadsheet):** Sample 2226m: trace siderite in 0% Siltstone, 0 siderite in 100% very fine to very, occasional medium Sandstone, 80% dull  to  bright FLUOR in SST. TG 80U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-v, occ med (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 80.0% dll - bri |
| Total Gas | 80 U |
| mTVDss | -1209.34 m |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.4 | 20 |
| RES_DEEP (ohm.m) | 18.85 | 20 |
| RES_SHALLOW (ohm.m) | 16.82 | 20 |

---

### 2229 m MD — Interval 2227.5 – 2230.5 m

**Sample Description (spreadsheet):** Sample 2229m: 0 siderite in 0% Siltstone, 0 siderite in 100% very fine to very, occasional medium Sandstone, 80% dull  to  bright FLUOR in SST. TG 119U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-v, occ med (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 80.0% dll - bri |
| Total Gas | 119 U |
| mTVDss | -1209.28 m |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.4 | 19 |
| RES_DEEP (ohm.m) | 18.88 | 19 |
| RES_SHALLOW (ohm.m) | 16.98 | 19 |

---

### 2232 m MD — Interval 2230.5 – 2233.5 m

**Sample Description (spreadsheet):** Sample 2232m: Tr siderite in 0% Siltstone, Tr siderite in 100% very fine  to  medium Sandstone, 80% dull  to  moderately bright FLUOR in SST. TG 107U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf - med (max: M ) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 80.0% dll - mod bri |
| Total Gas | 107 U |
| mTVDss | -1209.23 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.0 | 20 |
| RES_DEEP (ohm.m) | 19.70 | 20 |
| RES_SHALLOW (ohm.m) | 17.79 | 20 |

---

### 2235 m MD — Interval 2233.5 – 2236.5 m

**Sample Description (spreadsheet):** Sample 2235m: Tr siderite in 0% Siltstone, Tr siderite in 100% very fine  to  medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 201U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf - med (max: M ) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 201 U |
| mTVDss | -1209.17 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.2 | 20 |
| RES_DEEP (ohm.m) | 19.48 | 20 |
| RES_SHALLOW (ohm.m) | 17.66 | 20 |

---

### 2238 m MD — Interval 2236.5 – 2239.5 m

**Sample Description (spreadsheet):** Sample 2238m: Tr siderite in 0% Siltstone, Tr siderite in 100% very fine  to  medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 94U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf - med (max: M ) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 94 U |
| mTVDss | -1209.11 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.6 | 19 |
| RES_DEEP (ohm.m) | 19.20 | 19 |
| RES_SHALLOW (ohm.m) | 17.75 | 19 |

---

### 2241 m MD — Interval 2239.5 – 2242.5 m

**Sample Description (spreadsheet):** Sample 2241m: Tr siderite in 5% Siltstone, Tr siderite in 95% very fine  to  medium Sandstone, 90% moderately bright FLUOR in SST. TG 71U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf - med (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 90.0% mod bri |
| Total Gas | 71 U |
| mTVDss | -1209.05 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 110.3 | 20 |
| RES_DEEP (ohm.m) | 20.49 | 20 |
| RES_SHALLOW (ohm.m) | 18.76 | 20 |

---

### 2244 m MD — Interval 2242.5 – 2245.5 m

**Sample Description (spreadsheet):** Sample 2244m: Tr siderite in 5% Siltstone, Tr siderite in 95% very fine  to  medium Sandstone, 80% moderately bright FLUOR in SST. TG 68U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf - med (max: M ) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 80.0% mod bri |
| Total Gas | 68 U |
| mTVDss | -1208.99 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 108.0 | 20 |
| RES_DEEP (ohm.m) | 20.47 | 20 |
| RES_SHALLOW (ohm.m) | 18.30 | 20 |

---

### 2247 m MD — Interval 2245.5 – 2248.5 m

**Sample Description (spreadsheet):** Sample 2247m: Tr siderite in 5% Siltstone, Tr siderite in 95% very fine  to  medium Sandstone, 80% moderately bright FLUOR in SST. TG 74U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf - med (max: M ) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 80.0% mod bri |
| Total Gas | 74 U |
| mTVDss | -1208.93 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.0 | 19 |
| RES_DEEP (ohm.m) | 20.26 | 19 |
| RES_SHALLOW (ohm.m) | 18.76 | 19 |

---

### 2250 m MD — Interval 2248.5 – 2255.0 m

**Sample Description (spreadsheet):** Sample 2250m: Tr siderite in 10% Siltstone, Tr siderite in 90% very fine  to  medium Sandstone, 80% moderately bright FLUOR in SST. TG 114U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf - med (max: M ) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 80.0% mod bri |
| Total Gas | 114 U |
| mTVDss | -1208.87 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.7 | 43 |
| RES_DEEP (ohm.m) | 21.20 | 43 |
| RES_SHALLOW (ohm.m) | 19.83 | 43 |

---

### 2260 m MD — Interval 2255.0 – 2265.0 m

**Sample Description (spreadsheet):** Sample 2260m: Tr siderite in 5% Siltstone, Tr siderite in 95% fine  to  coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 200U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f - crs (max: C) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 200 U |
| mTVDss | -1208.60 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.8 | 66 |
| RES_DEEP (ohm.m) | 22.40 | 66 |
| RES_SHALLOW (ohm.m) | 22.09 | 66 |

---

### 2270 m MD — Interval 2265.0 – 2275.0 m

**Sample Description (spreadsheet):** Sample 2270m: Tr siderite in 5% Siltstone, Tr siderite in 95% fine  to  coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 300U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f - crs (max: C) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 300 U |
| mTVDss | -1208.33 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2290m: clr,trnsl,lt gry,lt brn,f-v crs,pr srt,dom sbang,mnr mod-wk sil cmt,tr mnr lt gry arg mtx,tr sid,tr carb flks,fri-mod hd aggs,com lse,v pr vis- fr inf por,tr fluor.
- **SANDSTONE** @ ~2290m: 1602-1993 psi SANDSTONE:lt gry,clr,trnsl,opq,f-crs, FLW: 228-258 gpm pr srt,dom sbang-sbrnd,mnr wk-mod strg sil cmt,mnr lt gry arg mtx,tr sid,fri-mod hd aggs,com-dom lse,v pr-pr vis por,fr-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.4 | 65 |
| RES_DEEP (ohm.m) | 22.68 | 65 |
| RES_SHALLOW (ohm.m) | 20.37 | 65 |

---

### 2320 m MD — Interval 2315.0 – 2325.0 m

**Sample Description (spreadsheet):** Sample 2320m: Tr siderite in 30% Siltstone, Tr siderite in 70% fine  to  coarse Sandstone, 60% dull to  moderately bright FLUOR in SST. TG 141U

| Property | Value |
|----------|-------|
| % Sandstone | 70 |
| Grain Size | f - crs (max: C) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 60.0% dll- mod bri |
| Total Gas | 141 U |
| mTVDss | -1208.09 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2310m: lt-med gry,arg,com aren i/p, grd to vf SST,com lams,tr-mnr carb flks & micrlams,mnr micmic,tr mica,tr-mnr sid, frm,sbblky-sbfiss.
- **SANDSTONE** @ ~2320m: lt gry,clr,trnsl,opq,f-crs, pr srt,dom sbang-sbrnd,mnr wk-mod strg sil cmt,mnr lt gry arg mtx,tr sid,fri-mod hd 0 0.5 1 4 14 2330 1 10 100 1K aggs,com-dom lse,v pr-pr vis por,fr-gd 14 18 28 1K 10K inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 114.1 | 65 |
| RES_DEEP (ohm.m) | 24.93 | 65 |
| RES_SHALLOW (ohm.m) | 21.49 | 65 |

---

### 2330 m MD — Interval 2325.0 – 2335.0 m

**Sample Description (spreadsheet):** Sample 2330m: Tr siderite in 30% Siltstone, Tr siderite in 70% fine  to  very coarse Sandstone, 70% moderately bright  to  bright FLUOR in SST. TG 229U

| Property | Value |
|----------|-------|
| % Sandstone | 70 |
| Grain Size | f - v crs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 70.0% mod bri - bri |
| Total Gas | 229 U |
| mTVDss | -1208.16 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2310m: lt-med gry,arg,com aren i/p, grd to vf SST,com lams,tr-mnr carb flks & micrlams,mnr micmic,tr mica,tr-mnr sid, frm,sbblky-sbfiss.
- **SANDSTONE** @ ~2320m: lt gry,clr,trnsl,opq,f-crs, pr srt,dom sbang-sbrnd,mnr wk-mod strg sil cmt,mnr lt gry arg mtx,tr sid,fri-mod hd 0 0.5 1 4 14 2330 1 10 100 1K aggs,com-dom lse,v pr-pr vis por,fr-gd 14 18 28 1K 10K inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.2 | 66 |
| RES_DEEP (ohm.m) | 25.23 | 66 |
| RES_SHALLOW (ohm.m) | 22.97 | 66 |

---

### 2340 m MD — Interval 2335.0 – 2345.0 m

**Sample Description (spreadsheet):** Sample 2340m: Tr siderite in 20% Siltstone, Tr siderite in 80% fine  to  coarse Sandstone, 90% moderately bright  to  bright FLUOR in SST. TG 233U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | f - crs (max: C) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 90.0% mod bri - bri |
| Total Gas | 233 U |
| mTVDss | -1208.27 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2320m: lt gry,clr,trnsl,opq,f-crs, pr srt,dom sbang-sbrnd,mnr wk-mod strg sil cmt,mnr lt gry arg mtx,tr sid,fri-mod hd 0 0.5 1 4 14 2330 1 10 100 1K aggs,com-dom lse,v pr-pr vis por,fr-gd 14 18 28 1K 10K inf por,fluor.
- **SILTSTONE** @ ~2320m: lt-med gry,arg,com aren i/p, grd to vf SST,com lams,tr-mnr carb flks & micrlams,mnr micmic,tr mica,tr-mnr sid, frm,sbblky-sbfiss. 26-10-2023
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.7 | 66 |
| RES_DEEP (ohm.m) | 23.31 | 66 |
| RES_SHALLOW (ohm.m) | 22.39 | 66 |

---

### 2350 m MD — Interval 2345.0 – 2355.0 m

**Sample Description (spreadsheet):** Sample 2350m: Tr siderite in 10% Siltstone, Tr siderite in 90% fine  to  coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 234U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f - crs (max: C) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 234 U |
| mTVDss | -1208.43 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.3 | 65 |
| RES_DEEP (ohm.m) | 22.75 | 65 |
| RES_SHALLOW (ohm.m) | 21.32 | 65 |

---

### 2360 m MD — Interval 2355.0 – 2365.0 m

**Sample Description (spreadsheet):** Sample 2360m: Tr siderite in 0% Siltstone, Tr siderite in 100% fine  to  coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 244U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f - crs (max: C) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 244 U |
| mTVDss | -1208.60 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2380m: lt gry,lt brn,trnsl,opq, f-crs,dom med,mod wl srt,dom sbang- sbrnd,mnr wk-mod strg sil cmt,mnr-tr lt gry arg mtx,tr ovgths,tr sid,fri- mod hd aggs,dom lse,pr vis-fr inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.9 | 66 |
| RES_DEEP (ohm.m) | 23.29 | 66 |
| RES_SHALLOW (ohm.m) | 21.74 | 66 |

---

### 2370 m MD — Interval 2365.0 – 2375.0 m

**Sample Description (spreadsheet):** Sample 2370m: Tr siderite in 5% Siltstone, Tr siderite in 95% fine  to  coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 239U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f - crs (max: C) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.35) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 239 U |
| mTVDss | -1208.76 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2380m: lt gry,lt brn,trnsl,opq, f-crs,dom med,mod wl srt,dom sbang- sbrnd,mnr wk-mod strg sil cmt,mnr-tr lt gry arg mtx,tr ovgths,tr sid,fri- mod hd aggs,dom lse,pr vis-fr inf por,
- **SILTSTONE** @ ~2390m: lt-med gry,arg,com aren i/p, grd to vf SST,com lams,tr-mnr carb flks 80 / 6 / 4 / 5 / 5 & micrlams,mnr micmic,tr mica,tr-mnr sid, frm,sbblky-sbfiss. 2400 SURVEY @ 2398.6
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.1 | 65 |
| RES_DEEP (ohm.m) | 23.08 | 65 |
| RES_SHALLOW (ohm.m) | 22.98 | 65 |

---

### 2380 m MD — Interval 2375.0 – 2385.0 m

**Sample Description (spreadsheet):** Sample 2380m: Tr siderite in 5% Siltstone, Tr siderite in 95% fine  to  coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 275U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f - crs (max: C) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.35) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 275 U |
| mTVDss | -1208.93 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2380m: lt gry,lt brn,trnsl,opq, f-crs,dom med,mod wl srt,dom sbang- sbrnd,mnr wk-mod strg sil cmt,mnr-tr lt gry arg mtx,tr ovgths,tr sid,fri- mod hd aggs,dom lse,pr vis-fr inf por,
- **SILTSTONE** @ ~2390m: lt-med gry,arg,com aren i/p, grd to vf SST,com lams,tr-mnr carb flks 80 / 6 / 4 / 5 / 5 & micrlams,mnr micmic,tr mica,tr-mnr sid, frm,sbblky-sbfiss. 2400 SURVEY @ 2398.6
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.9 | 66 |
| RES_DEEP (ohm.m) | 21.13 | 66 |
| RES_SHALLOW (ohm.m) | 20.86 | 66 |

---

### 2390 m MD — Interval 2385.0 – 2395.0 m

**Sample Description (spreadsheet):** Sample 2390m: Tr siderite in 5% Siltstone, Tr siderite in 95% fine  to  medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 238U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f - med (max: M ) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.35) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 238 U |
| mTVDss | -1209.09 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2380m: lt gry,lt brn,trnsl,opq, f-crs,dom med,mod wl srt,dom sbang- sbrnd,mnr wk-mod strg sil cmt,mnr-tr lt gry arg mtx,tr ovgths,tr sid,fri- mod hd aggs,dom lse,pr vis-fr inf por,
- **SILTSTONE** @ ~2390m: lt-med gry,arg,com aren i/p, grd to vf SST,com lams,tr-mnr carb flks 80 / 6 / 4 / 5 / 5 & micrlams,mnr micmic,tr mica,tr-mnr sid, frm,sbblky-sbfiss. 2400 SURVEY @ 2398.6
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.5 | 66 |
| RES_DEEP (ohm.m) | 22.30 | 66 |
| RES_SHALLOW (ohm.m) | 22.04 | 66 |

---

### 2400 m MD — Interval 2395.0 – 2405.0 m

**Sample Description (spreadsheet):** Sample 2400m: Tr siderite in 0% Siltstone, Tr siderite in 100% fine  to  coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 174U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f - crs (max: C) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.35) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 174 U |
| mTVDss | -1209.25 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2380m: lt gry,lt brn,trnsl,opq, f-crs,dom med,mod wl srt,dom sbang- sbrnd,mnr wk-mod strg sil cmt,mnr-tr lt gry arg mtx,tr ovgths,tr sid,fri- mod hd aggs,dom lse,pr vis-fr inf por,
- **SILTSTONE** @ ~2390m: lt-med gry,arg,com aren i/p, grd to vf SST,com lams,tr-mnr carb flks 80 / 6 / 4 / 5 / 5 & micrlams,mnr micmic,tr mica,tr-mnr sid, frm,sbblky-sbfiss. 2400 SURVEY @ 2398.6
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.1 | 65 |
| RES_DEEP (ohm.m) | 22.24 | 65 |
| RES_SHALLOW (ohm.m) | 21.68 | 65 |

---

### 2410 m MD — Interval 2405.0 – 2415.0 m

**Sample Description (spreadsheet):** Sample 2410m: Tr siderite in 0% Siltstone, Tr siderite in 100% fine  to  coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 252U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f - crs (max: C) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.35) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 252 U |
| mTVDss | -1209.41 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2390m: lt-med gry,arg,com aren i/p, grd to vf SST,com lams,tr-mnr carb flks 80 / 6 / 4 / 5 / 5 & micrlams,mnr micmic,tr mica,tr-mnr sid, frm,sbblky-sbfiss. 2400 SURVEY @ 2398.6
- **SANDSTONE** @ ~2390m: lt gry,lt brn,trnsl,opq, f-dom crs,mod wl srt,dom sbang- sbrnd,mnr wk-mod strg sil cmt,mnr-tr lt gry arg mtx,tr ovgths,tr sid,fri- 2410 mod hd aggs,dom lse,pr vis-fr inf por,
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.9 | 66 |
| RES_DEEP (ohm.m) | 22.17 | 66 |
| RES_SHALLOW (ohm.m) | 21.13 | 66 |

---

### 2420 m MD — Interval 2415.0 – 2425.0 m

**Sample Description (spreadsheet):** Sample 2420m: Tr siderite in 0% Siltstone, Tr siderite in 100% fine  to  very coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 189U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f - v crs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 189 U |
| mTVDss | -1209.56 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.3 | 66 |
| RES_DEEP (ohm.m) | 20.74 | 66 |
| RES_SHALLOW (ohm.m) | 20.43 | 66 |

---

### 2430 m MD — Interval 2425.0 – 2435.0 m

**Sample Description (spreadsheet):** Sample 2430m: Tr siderite in 5% Siltstone, Tr siderite in 95% fine  to  very coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 214U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f - v crs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 214 U |
| mTVDss | -1209.68 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.9 | 65 |
| RES_DEEP (ohm.m) | 19.50 | 65 |
| RES_SHALLOW (ohm.m) | 19.45 | 65 |

---

### 2440 m MD — Interval 2435.0 – 2445.0 m

**Sample Description (spreadsheet):** Sample 2440m: Tr siderite in 0% Siltstone, Tr siderite in 100% fine  to  very coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 203U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f - v crs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Angularity | ang (0.00) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 203 U |
| mTVDss | -1209.75 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2460m: med-dk gry,arg,micmic, sil,carb i/p,frm,sbblky-ang.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.3 | 66 |
| RES_DEEP (ohm.m) | 19.44 | 66 |
| RES_SHALLOW (ohm.m) | 19.58 | 66 |

---

### 2450 m MD — Interval 2445.0 – 2455.0 m

**Sample Description (spreadsheet):** Sample 2450m: Tr siderite in 0% Siltstone, Tr siderite in 100% dominantly fine  to  coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 208U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | dom f - crs (max: C) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 208 U |
| mTVDss | -1209.81 m |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2460m: med-dk gry,arg,micmic, sil,carb i/p,frm,sbblky-ang.
- **SANDSTONE** @ ~2470m: clr,opq,trnsl,lt brn, trnsl,f-med,occ crs,mod srt,sbrnd, occ sbang-ang,wk sil cmt,mnr lt gry arg mtx,rr carb spks,fri,com lse,fr 2480 vis & fr-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.1 | 65 |
| RES_DEEP (ohm.m) | 19.05 | 65 |
| RES_SHALLOW (ohm.m) | 18.50 | 65 |

---

### 2460 m MD — Interval 2455.0 – 2465.0 m

**Sample Description (spreadsheet):** Sample 2460m: 0 siderite in 0% Siltstone, 0 siderite in 100% fine  to  coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 164U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f - crs (max: C) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 164 U |
| mTVDss | -1209.88 m |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2460m: med-dk gry,arg,micmic, sil,carb i/p,frm,sbblky-ang.
- **SANDSTONE** @ ~2470m: clr,opq,trnsl,lt brn, trnsl,f-med,occ crs,mod srt,sbrnd, occ sbang-ang,wk sil cmt,mnr lt gry arg mtx,rr carb spks,fri,com lse,fr 2480 vis & fr-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 111.8 | 66 |
| RES_DEEP (ohm.m) | 19.34 | 66 |
| RES_SHALLOW (ohm.m) | 18.56 | 66 |

---

### 2470 m MD — Interval 2465.0 – 2475.0 m

**Sample Description (spreadsheet):** Sample 2470m: trace siderite in 5% Siltstone, 0 siderite in 95% fine to medium, occasional coarse Sandstone, 80% moderately bright FLUOR in SST. TG 195U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med, occ crs (max: C) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri |
| Total Gas | 195 U |
| mTVDss | -1209.94 m |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2460m: med-dk gry,arg,micmic, sil,carb i/p,frm,sbblky-ang.
- **SANDSTONE** @ ~2470m: clr,opq,trnsl,lt brn, trnsl,f-med,occ crs,mod srt,sbrnd, occ sbang-ang,wk sil cmt,mnr lt gry arg mtx,rr carb spks,fri,com lse,fr 2480 vis & fr-gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.8 | 66 |
| RES_DEEP (ohm.m) | 19.19 | 66 |
| RES_SHALLOW (ohm.m) | 18.20 | 66 |

---

### 2480 m MD — Interval 2475.0 – 2485.0 m

**Sample Description (spreadsheet):** Sample 2480m: trace siderite in 0% Siltstone, 0 siderite in 100% fine  to  occasional medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 200U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f - occ med (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 200 U |
| mTVDss | -1209.94 m |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2460m: med-dk gry,arg,micmic, sil,carb i/p,frm,sbblky-ang.
- **SANDSTONE** @ ~2470m: clr,opq,trnsl,lt brn, trnsl,f-med,occ crs,mod srt,sbrnd, occ sbang-ang,wk sil cmt,mnr lt gry arg mtx,rr carb spks,fri,com lse,fr 2480 vis & fr-gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.8 | 65 |
| RES_DEEP (ohm.m) | 18.72 | 65 |
| RES_SHALLOW (ohm.m) | 18.23 | 65 |

---

### 2490 m MD — Interval 2485.0 – 2495.0 m

**Sample Description (spreadsheet):** Sample 2490m: trace siderite in 0% Siltstone, 0 siderite in 100% fine  to  medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 194U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f - med (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 194 U |
| mTVDss | -1209.92 m |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2470m: clr,opq,trnsl,lt brn, trnsl,f-med,occ crs,mod srt,sbrnd, occ sbang-ang,wk sil cmt,mnr lt gry arg mtx,rr carb spks,fri,com lse,fr 2480 vis & fr-gd inf por,fluor.
- **SANDSTONE** @ ~2490m: clr,opq,trnsl,lt brn, trnsl,f-med,occ crs,mod srt,sbrnd, occ sbang-ang,wk sil cmt,mnr lt gry arg mtx,rr carb spks,fri,com lse,fr vis & fr-gd inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.5 | 66 |
| RES_DEEP (ohm.m) | 19.46 | 66 |
| RES_SHALLOW (ohm.m) | 18.37 | 66 |

---

### 2500 m MD — Interval 2495.0 – 2505.0 m

**Sample Description (spreadsheet):** Sample 2500m: TR siderite in 0% Siltstone, 0 siderite in 100% fine  to  medium, occasional coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 207U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f - med, occ crs (max: C) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 207 U |
| mTVDss | -1209.92 m |
| FeCO₃ in Siltstone | TR |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2490m: clr,opq,trnsl,lt brn, trnsl,f-med,occ crs,mod srt,sbrnd, occ sbang-ang,wk sil cmt,mnr lt gry arg mtx,rr carb spks,fri,com lse,fr vis & fr-gd inf por,fluor.
- **SANDSTONE** @ ~2490m: clr,trnsl,opq,f-med, mod srt,sbrnd,sbang i/p,wk sil cmt, tr lt gry/brn arg mtx,fri & lse, fr vis por & fr-gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.0 | 66 |
| RES_DEEP (ohm.m) | 19.60 | 66 |
| RES_SHALLOW (ohm.m) | 19.23 | 66 |

---

### 2510 m MD — Interval 2505.0 – 2515.0 m

**Sample Description (spreadsheet):** Sample 2510m: 0 siderite in 0% Siltstone, 0 siderite in 100% fine  to  medium, occasional coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 199U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f - med, occ crs (max: C) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 199 U |
| mTVDss | -1209.91 m |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2490m: clr,opq,trnsl,lt brn, trnsl,f-med,occ crs,mod srt,sbrnd, occ sbang-ang,wk sil cmt,mnr lt gry arg mtx,rr carb spks,fri,com lse,fr vis & fr-gd inf por,fluor.
- **SANDSTONE** @ ~2490m: clr,trnsl,opq,f-med, mod srt,sbrnd,sbang i/p,wk sil cmt, tr lt gry/brn arg mtx,fri & lse, fr vis por & fr-gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.4 | 65 |
| RES_DEEP (ohm.m) | 18.99 | 65 |
| RES_SHALLOW (ohm.m) | 18.73 | 65 |

---

### 2520 m MD — Interval 2515.0 – 2525.0 m

**Sample Description (spreadsheet):** Sample 2520m: 0 siderite in 0% Siltstone, 0 siderite in 100% fine to medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 286U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 286 U |
| mTVDss | -1209.89 m |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2520m: clr,trnsl,opq,f-med, mod srt,sbrnd,sbang i/p,wk sil cmt, tr lt gry/brn arg mtx,fri & lse, fr vis por & fr-gd inf por,fluor. 0 0.5 1 4 14 2530 1 10 100 1K
- **SILTSTONE** @ ~2520m: med gry,lt gry,arg,sil, micmic,lam,fri,sbblky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.2 | 66 |
| RES_DEEP (ohm.m) | 17.53 | 66 |
| RES_SHALLOW (ohm.m) | 17.10 | 66 |

---

### 2590 m MD — Interval 2585.0 – 2592.5 m

**Sample Description (spreadsheet):** Sample 2590m: trace siderite in 80% Siltstone, 25 siderite in 20% very fine to medium Sandstone, 0.5% dull  to  moderately bright FLUOR in SST. TG 90U

| Property | Value |
|----------|-------|
| % Sandstone | 20 |
| Grain Size | vf-med (max: M) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 0.5% dll - mod bri |
| Total Gas | 90 U |
| mTVDss | -1210.97 m |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | 25 |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2570m: med-dk gry,arg,grd to SST, sil,micmic,frm,blky.
- **SANDSTONE** @ ~2580m: clr,trnsl,opq,lt gry,vf-med, mod srt,sbrnd-occ sbang,wk sil cmt,lt gry arg mtx,occ carb spks,sid i/p,com lse, fri-mod frm i/p,pr vis & inf por,fluor. 4-1/2" LINER SHOE

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 109.6 | 33 |

---

## 5. Summary Statistics (McKinlay Member)

| Metric | Value |
|--------|-------|
| Intervals analysed | 96 |
| Depth range | 1702 – 2590 m |
| Avg % Sandstone | 88.5% |
| Mudlog matches | 72 / 96 |
