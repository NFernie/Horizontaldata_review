# HOBBES 5 — McKinlay Member Cuttings & Log Interpretation

**Generated:** 2026-07-07 02:30 UTC  
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

## 2. Formation Top Analysis

### 2.1 Key Tops

| Marker | Depth (m MD) | Source |
|--------|-------------|--------|
| DC30 | 1701.15 | DC30.xlsx |
| McKinlay Member (shallowest) | 1702.19 | Mck_Murta.xlsx |

### 2.2 McKinlay Member Top Classification

**Target re-entry (McKinlay without paired Murta):**
- 1702.19 m MD
- 1843.00 m MD
- 2169.00 m MD
- 2314.07 m MD

**Overburden intersections (McKinlay ≈ Murta within 5 m):**
| McKinlay (m MD) | Murta (m MD) | Δ (m) |
|-----------------|-------------|-------|
| 1758.61 | 1757.00 | 1.61 |
| 2003.67 | 2005.00 | 1.33 |
| 2276.94 | 2276.00 | 0.94 |
| 2533.88 | 2535.00 | 1.12 |

**McKinlay Member analysis window:** 1702.2 – 2590.0 m MD

**Excluded zones (±10 m around overburden & target re-entry tops):** 1749–1769 (overburden), 1994–2014 (overburden), 2267–2287 (overburden), 2524–2544 (overburden), 1692–1712 (target_reentry), 1833–1853 (target_reentry), 2159–2179 (target_reentry), 2304–2324 (target_reentry)

**Samples in McKinlay Member:** 114 of 148 total
- Excluded pre-reservoir: 6
- Excluded overburden intersections: 12
- Excluded target re-entry tops: 16

## 3. Known Shortcomings

> **Read this section before using the output.**

1. **Mudlog PDF text extraction is imperfect.** Depth-to-description assignment uses ±15 m proximity heuristics.
2. **Formation top discrepancies** between Mck_Murta.xlsx and mudlog PDF picks are noted where present.
3. **Well name mapping:** HOBBES 5 → `HOBBES 5` (verified by TD and LAS WELL header).
4. **Sample intervals** are midpoints between consecutive sample depths — variable widths where spacing is irregular.
5. **Resistivity permeability proxy** is qualitative only (Δ Res = RES_DEEP − RES_SHALLOW).
6. **NULL LAS values** (-999.25) excluded from averages.
7. **Exclusion zones** use ±10 m around paired overburden tops AND McKinlay target re-entry tops without Murta pairs.
8. **Input Sheet only** — Calculations Sheet not used.

## 4. McKinlay Member Sample Intervals

Each section: depth interval, spreadsheet sample, mudlog cuttings, wireline log averages.

### 1715 m MD — Interval 1712.5 – 1717.5 m

**Sample Description (spreadsheet):** Sample 1715m: 0 siderite in 10% Siltstone, trace siderite in 90% fine to medium Sandstone, 100% bright FLUOR in SST. TG 120U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100.0% bri |
| Total Gas | 120 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1710m: lt gry,trnsl,trnsp,opq, f-med,rr crs,sbrnd,occ sbang,wl- mod srt,wk sil cmt,lt gry arg mtx i/p,fr vis & inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 29.7 | 33 |
| RES_DEEP (ohm.m) | 27.66 | 33 |
| RES_SHALLOW (ohm.m) | 31.98 | 33 |
| **Δ Res (Deep − Shallow)** | **-4.33** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1720 m MD — Interval 1717.5 – 1722.5 m

**Sample Description (spreadsheet):** Sample 1720m: 0 siderite in 5% Siltstone, trace siderite in 95% fine to medium Sandstone, 100% bright FLUOR in SST. TG 171U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100.0% bri |
| Total Gas | 171 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1710m: lt gry,trnsl,trnsp,opq, f-med,rr crs,sbrnd,occ sbang,wl- mod srt,wk sil cmt,lt gry arg mtx i/p,fr vis & inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 30.7 | 33 |
| RES_DEEP (ohm.m) | 28.67 | 33 |
| RES_SHALLOW (ohm.m) | 32.65 | 33 |
| **Δ Res (Deep − Shallow)** | **-3.98** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1725 m MD — Interval 1722.5 – 1727.5 m

**Sample Description (spreadsheet):** Sample 1725m: trace siderite in 5% Siltstone, 5 siderite in 95% fine to medium Sandstone, 100% bright FLUOR in SST. TG 175U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100.0% bri |
| Total Gas | 175 U |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | 5 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1710m: lt gry,trnsl,trnsp,opq, f-med,rr crs,sbrnd,occ sbang,wl- mod srt,wk sil cmt,lt gry arg mtx i/p,fr vis & inf por,fluor.
- **SILTSTONE** @ ~1740m: dk gry,arg,micmic,carb i/p, sft,blky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 31.5 | 33 |
| RES_DEEP (ohm.m) | 29.18 | 33 |
| RES_SHALLOW (ohm.m) | 33.44 | 33 |
| **Δ Res (Deep − Shallow)** | **-4.26** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1730 m MD — Interval 1727.5 – 1732.5 m

**Sample Description (spreadsheet):** Sample 1730m: 0 siderite in 0% Siltstone, trace siderite in 100% fine to occasional medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 230U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-occ med (max: M) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 230 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1740m: dk gry,arg,micmic,carb i/p, sft,blky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 32.5 | 33 |
| RES_DEEP (ohm.m) | 31.02 | 33 |
| RES_SHALLOW (ohm.m) | 33.97 | 33 |
| **Δ Res (Deep − Shallow)** | **-2.95** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1735 m MD — Interval 1732.5 – 1737.5 m

**Sample Description (spreadsheet):** Sample 1735m: 0 siderite in 0% Siltstone, 0 siderite in 100% fine  to  r medium Sandstone, 100% bright FLUOR in SST. TG 214U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f - r med (max: M) |
| Fluorescence | 100.0% bri |
| Total Gas | 214 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1740m: dk gry,arg,micmic,carb i/p, sft,blky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 32.2 | 32 |
| RES_DEEP (ohm.m) | 31.99 | 32 |
| RES_SHALLOW (ohm.m) | 33.81 | 32 |
| **Δ Res (Deep − Shallow)** | **-1.81** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1740 m MD — Interval 1737.5 – 1745.0 m

**Sample Description (spreadsheet):** Sample 1740m: 0 siderite in 5% Siltstone, 0 siderite in 95% fine  to  medium, r coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 241U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f - med, r crs (max: C) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 241 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1740m: dk gry,arg,micmic,carb i/p, sft,blky.
- **SANDSTONE** @ ~1760m: trnsl,opq,trnsp,lt gry,f-crs, pr srt,sbrnd-sbang,wk-mod sil cmt,lt gry arg mtx i/p,grd to aren SLTST,occ lse, pr vis & inf por,fluor. SURVEY @ 1767.6m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 28.9 | 50 |
| RES_DEEP (ohm.m) | 27.41 | 50 |
| RES_SHALLOW (ohm.m) | 30.92 | 50 |
| **Δ Res (Deep − Shallow)** | **-3.51** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1780 m MD — Interval 1775.0 – 1785.0 m

**Sample Description (spreadsheet):** Sample 1780m: 5 siderite in 70% Siltstone, 20 siderite in 30% fine  to  coarse Sandstone, 0.5% bright FLUOR in SST. TG 78U

| Property | Value |
|----------|-------|
| % Sandstone | 30 |
| Grain Size | f - crs (max: C) |
| Fluorescence | 0.5% bri |
| Total Gas | 78 U |
| FeCO₃ in Siltstone | 5 |
| FeCO₃ in Sandstone | 20 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1760m: trnsl,opq,trnsp,lt gry,f-crs, pr srt,sbrnd-sbang,wk-mod sil cmt,lt gry arg mtx i/p,grd to aren SLTST,occ lse, pr vis & inf por,fluor. SURVEY @ 1767.6m
- **SANDSTONE** @ ~1770m: lt gry,trnsl,trnsp,opq,f,rr med-crs,mod srt,sbrnd-sbang,wk sil cmt, lt gry arg mtx,fri,occ lse,pr vis & inf por, fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 11.7 | 66 |
| RES_DEEP (ohm.m) | 11.05 | 66 |
| RES_SHALLOW (ohm.m) | 12.73 | 66 |
| **Δ Res (Deep − Shallow)** | **-1.68** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1790 m MD — Interval 1785.0 – 1795.0 m

**Sample Description (spreadsheet):** Sample 1790m: 5 siderite in 50% Siltstone, 20 siderite in 50% fine, r medium & coarse Sandstone, 0.5% bright FLUOR in SST. TG 72U

| Property | Value |
|----------|-------|
| % Sandstone | 50 |
| Grain Size | f, r med & crs (max: C) |
| Fluorescence | 0.5% bri |
| Total Gas | 72 U |
| FeCO₃ in Siltstone | 5 |
| FeCO₃ in Sandstone | 20 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1770m: lt gry,trnsl,trnsp,opq,f,rr med-crs,mod srt,sbrnd-sbang,wk sil cmt, lt gry arg mtx,fri,occ lse,pr vis & inf por, fluor.
- **SANDSTONE** @ ~1780m: lt gry,trnsl,trnsp,opq,f,rr med-crs,mod srt,sbrnd-sbang,wk sil cmt, lt gry arg mtx,fri,occ lse,pr vis & inf por, fluor. SURVEY @ 1786.6m
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 11.1 | 66 |
| RES_DEEP (ohm.m) | 10.59 | 66 |
| RES_SHALLOW (ohm.m) | 11.83 | 66 |
| **Δ Res (Deep − Shallow)** | **-1.25** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1800 m MD — Interval 1795.0 – 1805.0 m

**Sample Description (spreadsheet):** Sample 1800m: 0 siderite in 45% Siltstone, 5 siderite in 55% fine, r medium Sandstone, NObright FLUOR in SST. TG 70U

| Property | Value |
|----------|-------|
| % Sandstone | 55 |
| Grain Size | f, r med (max: M) |
| Fluorescence | 0.0% bri |
| Total Gas | 70 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 5 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1780m: lt gry,trnsl,trnsp,opq,f,rr med-crs,mod srt,sbrnd-sbang,wk sil cmt, lt gry arg mtx,fri,occ lse,pr vis & inf por, fluor. SURVEY @ 1786.6m
- **SANDSTONE** @ ~1790m: lt gry,trnsl,trnsp,opq,f,rr med-crs,mod srt,sbrnd-sbang,wk sil cmt, lt gry arg mtx,fri,occ lse,pr vis & inf por, no fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 12.0 | 65 |
| RES_DEEP (ohm.m) | 11.07 | 65 |
| RES_SHALLOW (ohm.m) | 13.16 | 65 |
| **Δ Res (Deep − Shallow)** | **-2.09** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1810 m MD — Interval 1805.0 – 1815.0 m

**Sample Description (spreadsheet):** Sample 1810m: trace siderite in 40% Siltstone, trace siderite in 60% fine, occasional medium & coarse Sandstone, 0.5% bright FLUOR in SST. TG 65U

| Property | Value |
|----------|-------|
| % Sandstone | 60 |
| Grain Size | f, occ med & crs (max: C) |
| Fluorescence | 0.5% bri |
| Total Gas | 65 U |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1790m: lt gry,trnsl,trnsp,opq,f,rr med-crs,mod srt,sbrnd-sbang,wk sil cmt, lt gry arg mtx,fri,occ lse,pr vis & inf por, no fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 15.0 | 66 |
| RES_DEEP (ohm.m) | 13.70 | 66 |
| RES_SHALLOW (ohm.m) | 16.67 | 66 |
| **Δ Res (Deep − Shallow)** | **-2.97** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1820 m MD — Interval 1815.0 – 1825.0 m

**Sample Description (spreadsheet):** Sample 1820m: 10 siderite in 50% Siltstone, 20 siderite in 50% fine, occasional medium  Sandstone, 20% bright FLUOR in SST. TG 64U

| Property | Value |
|----------|-------|
| % Sandstone | 50 |
| Grain Size | f, occ med  (max: M) |
| Fluorescence | 20.0% bri |
| Total Gas | 64 U |
| FeCO₃ in Siltstone | 10 |
| FeCO₃ in Sandstone | 20 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1840m: trnsl,trnsp,lt brn,brn,trnsl brn,mott,f,occ med,wl srt,sbrnd,occ sbang,mod-strg sil-sid cmt,fri-mod hd, pr-ti vis & inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 15.8 | 66 |
| RES_DEEP (ohm.m) | 13.98 | 66 |
| RES_SHALLOW (ohm.m) | 17.81 | 66 |
| **Δ Res (Deep − Shallow)** | **-3.83** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1860 m MD — Interval 1855.0 – 1865.0 m

**Sample Description (spreadsheet):** Sample 1860m: trace siderite in 20% Siltstone, 5 siderite in 80% fine  to  coarse Sandstone, 60% bright FLUOR in SST. TG 214U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | f - crs (max: C) |
| Fluorescence | 60.0% bri |
| Total Gas | 214 U |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | 5 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1840m: trnsl,trnsp,lt brn,brn,trnsl brn,mott,f,occ med,wl srt,sbrnd,occ sbang,mod-strg sil-sid cmt,fri-mod hd, pr-ti vis & inf por,fluor.
- **COAL** @ ~1860m: blk,dll,arg,slty,brit,plty,ang. 78 / 7 / 5 / 5 / 5 245 U 1870 FLUORESCENCE:1870m-1914m 40-80% of SST,mod bri-bri yel wh- yel grn sptd-ptchy fluor,slw diff-

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.9 | 66 |
| RES_DEEP (ohm.m) | 21.35 | 66 |
| RES_SHALLOW (ohm.m) | 24.77 | 66 |
| **Δ Res (Deep − Shallow)** | **-3.42** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1870 m MD — Interval 1865.0 – 1875.0 m

**Sample Description (spreadsheet):** Sample 1870m: trace siderite in 15% Siltstone, 10 siderite in 85% fine to medium, occasional coarse Sandstone, 85% bright FLUOR in SST. TG 120U

| Property | Value |
|----------|-------|
| % Sandstone | 85 |
| Grain Size | f-med, occ crs (max: C) |
| Fluorescence | 85.0% bri |
| Total Gas | 120 U |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | 10 |

**Mudlog Cuttings Description (PDF):**
- **COAL** @ ~1860m: blk,dll,arg,slty,brit,plty,ang. 78 / 7 / 5 / 5 / 5 245 U 1870 FLUORESCENCE:1870m-1914m 40-80% of SST,mod bri-bri yel wh- yel grn sptd-ptchy fluor,slw diff-
- **SILTSTONE** @ ~1890m: 120 SILTSTONE:lt-med brn gry,lt-med gry, FLW: 234-259 gpm tr micmic,sil i/p,frm-hd,sbblky-sbfiss. 75 / 6 / 4 / 6 / 9

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 20.9 | 66 |
| RES_DEEP (ohm.m) | 20.25 | 66 |
| RES_SHALLOW (ohm.m) | 21.74 | 66 |
| **Δ Res (Deep − Shallow)** | **-1.49** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1880 m MD — Interval 1875.0 – 1885.0 m

**Sample Description (spreadsheet):** Sample 1880m: trace siderite in 10% Siltstone, 5 siderite in 90% very fine to fine, minor medium, rare coarse Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 268U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-f, mnr med, rr crs (max: C) |
| Fluorescence | 80.0% mod bri - bri |
| Total Gas | 268 U |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | 5 |

**Mudlog Cuttings Description (PDF):**
- **COAL** @ ~1860m: blk,dll,arg,slty,brit,plty,ang. 78 / 7 / 5 / 5 / 5 245 U 1870 FLUORESCENCE:1870m-1914m 40-80% of SST,mod bri-bri yel wh- yel grn sptd-ptchy fluor,slw diff-
- **SILTSTONE** @ ~1890m: 120 SILTSTONE:lt-med brn gry,lt-med gry, FLW: 234-259 gpm tr micmic,sil i/p,frm-hd,sbblky-sbfiss. 75 / 6 / 4 / 6 / 9

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.8 | 65 |
| RES_DEEP (ohm.m) | 21.78 | 65 |
| RES_SHALLOW (ohm.m) | 21.90 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.12** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1890 m MD — Interval 1885.0 – 1895.0 m

**Sample Description (spreadsheet):** Sample 1890m: 0 siderite in 0% Siltstone, trace to 5 siderite in 100% dominantly fine  to  minor medium Sandstone, 90% moderately bright  to  bright FLUOR in SST. TG 200U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | dom f - mnr med (max: M) |
| Fluorescence | 90.0% mod bri - bri |
| Total Gas | 200 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | tr-5 |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1890m: 120 SILTSTONE:lt-med brn gry,lt-med gry, FLW: 234-259 gpm tr micmic,sil i/p,frm-hd,sbblky-sbfiss. 75 / 6 / 4 / 6 / 9

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 20.9 | 66 |
| RES_DEEP (ohm.m) | 20.30 | 66 |
| RES_SHALLOW (ohm.m) | 21.36 | 66 |
| **Δ Res (Deep − Shallow)** | **-1.06** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1900 m MD — Interval 1895.0 – 1905.0 m

**Sample Description (spreadsheet):** Sample 1900m: 5 siderite in 20% Siltstone, trace   siderite in 80% dominantly fine  to  minor medium Sandstone, 60% moderately bright  to  bright FLUOR in SST. TG 140U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | dom f - mnr med (max: M) |
| Fluorescence | 60.0% mod bri - bri |
| Total Gas | 140 U |
| FeCO₃ in Siltstone | 5 |
| FeCO₃ in Sandstone | tr   |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1890m: 120 SILTSTONE:lt-med brn gry,lt-med gry, FLW: 234-259 gpm tr micmic,sil i/p,frm-hd,sbblky-sbfiss. 75 / 6 / 4 / 6 / 9

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 19.6 | 66 |
| RES_DEEP (ohm.m) | 18.45 | 66 |
| RES_SHALLOW (ohm.m) | 20.65 | 66 |
| **Δ Res (Deep − Shallow)** | **-2.19** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1910 m MD — Interval 1905.0 – 1912.0 m

**Sample Description (spreadsheet):** Sample 1910m: Tr siderite in 10% Siltstone, Tr siderite in 90% dominantly fine  to  trace medium Sandstone, 60% moderately bright  to  bright FLUOR in SST. TG 120U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | dom f - tr med (max: M) |
| Fluorescence | 60.0% mod bri - bri |
| Total Gas | 120 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1890m: 120 SILTSTONE:lt-med brn gry,lt-med gry, FLW: 234-259 gpm tr micmic,sil i/p,frm-hd,sbblky-sbfiss. 75 / 6 / 4 / 6 / 9

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 18.5 | 46 |
| RES_DEEP (ohm.m) | 16.77 | 46 |
| RES_SHALLOW (ohm.m) | 20.03 | 46 |
| **Δ Res (Deep − Shallow)** | **-3.26** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1914 m MD — Interval 1912.0 – 1915.5 m

**Sample Description (spreadsheet):** Sample 1914m: Tr siderite in 10% Siltstone, Tr siderite in 90% dominantly fine Sandstone, 40% dull  to  moderately bright FLUOR in SST. TG 85U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | dom f (max: F) |
| Fluorescence | 40.0% dull - mod bri |
| Total Gas | 85 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 18.4 | 23 |
| RES_DEEP (ohm.m) | 16.46 | 23 |
| RES_SHALLOW (ohm.m) | 20.13 | 23 |
| **Δ Res (Deep − Shallow)** | **-3.67** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1917 m MD — Interval 1915.5 – 1918.5 m

**Sample Description (spreadsheet):** Sample 1917m: Tr siderite in 20% Siltstone, Tr siderite in 80% dominantly fine Sandstone, 40% dull  to  moderately bright FLUOR in SST. TG 85U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | dom f (max: F) |
| Fluorescence | 40.0% dull - mod bri |
| Total Gas | 85 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 18.1 | 20 |
| RES_DEEP (ohm.m) | 16.08 | 20 |
| RES_SHALLOW (ohm.m) | 19.88 | 20 |
| **Δ Res (Deep − Shallow)** | **-3.80** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1920 m MD — Interval 1918.5 – 1921.5 m

**Sample Description (spreadsheet):** Sample 1920m: Tr siderite in 20% Siltstone, Tr siderite in 80% dominantly fine Sandstone, 40% dull  to  moderately bright FLUOR in SST. TG 75U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | dom f (max: F) |
| Fluorescence | 40.0% dll - mod bri |
| Total Gas | 75 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 18.3 | 20 |
| RES_DEEP (ohm.m) | 16.29 | 20 |
| RES_SHALLOW (ohm.m) | 20.01 | 20 |
| **Δ Res (Deep − Shallow)** | **-3.72** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1923 m MD — Interval 1921.5 – 1924.5 m

**Sample Description (spreadsheet):** Sample 1923m: Tr siderite in 30% Siltstone, Tr siderite in 70% fine to medium  Sandstone, 30% dull  to  moderately bright FLUOR in SST. TG 78U

| Property | Value |
|----------|-------|
| % Sandstone | 70 |
| Grain Size | f-med  (max: M) |
| Fluorescence | 30.0% dll - mod bri |
| Total Gas | 78 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 19.1 | 19 |
| RES_DEEP (ohm.m) | 17.16 | 19 |
| RES_SHALLOW (ohm.m) | 20.67 | 19 |
| **Δ Res (Deep − Shallow)** | **-3.50** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1926 m MD — Interval 1924.5 – 1927.5 m

**Sample Description (spreadsheet):** Sample 1926m: Tr siderite in 30% Siltstone, Tr siderite in 70% very fine to fine, trace medium Sandstone, 40% dull  to  moderately bright FLUOR in SST. TG 70U

| Property | Value |
|----------|-------|
| % Sandstone | 70 |
| Grain Size | vf-f, tr med (max: M) |
| Fluorescence | 40.0% dll - mod bri |
| Total Gas | 70 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 19.2 | 20 |
| RES_DEEP (ohm.m) | 17.17 | 20 |
| RES_SHALLOW (ohm.m) | 20.85 | 20 |
| **Δ Res (Deep − Shallow)** | **-3.68** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1929 m MD — Interval 1927.5 – 1930.5 m

**Sample Description (spreadsheet):** Sample 1929m: Tr siderite in 30% Siltstone, Tr siderite in 70% very fine to fine, trace medium Sandstone, 40% dull  to  moderately bright FLUOR in SST. TG 70U

| Property | Value |
|----------|-------|
| % Sandstone | 70 |
| Grain Size | vf-f, tr med (max: M) |
| Fluorescence | 40.0% dll - mod bri |
| Total Gas | 70 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 19.9 | 20 |
| RES_DEEP (ohm.m) | 17.72 | 20 |
| RES_SHALLOW (ohm.m) | 21.66 | 20 |
| **Δ Res (Deep − Shallow)** | **-3.94** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1932 m MD — Interval 1930.5 – 1933.5 m

**Sample Description (spreadsheet):** Sample 1932m: Tr siderite in 60% Siltstone, Tr siderite in 40% very fine  to  fine Sandstone, 40% dull  to  moderately bright FLUOR in SST. TG 80U

| Property | Value |
|----------|-------|
| % Sandstone | 40 |
| Grain Size | vf - f (max: F) |
| Fluorescence | 40.0% dll - mod bri |
| Total Gas | 80 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 19.4 | 20 |
| RES_DEEP (ohm.m) | 17.28 | 20 |
| RES_SHALLOW (ohm.m) | 21.01 | 20 |
| **Δ Res (Deep − Shallow)** | **-3.73** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1935 m MD — Interval 1933.5 – 1936.5 m

**Sample Description (spreadsheet):** Sample 1935m: Tr siderite in 40% Siltstone, Tr siderite in 60% very fine  to  fine Sandstone, 40% dull  to  moderately bright FLUOR in SST. TG 82U

| Property | Value |
|----------|-------|
| % Sandstone | 60 |
| Grain Size | vf - f (max: F) |
| Fluorescence | 40.0% dll - mod bri |
| Total Gas | 82 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 19.7 | 19 |
| RES_DEEP (ohm.m) | 17.34 | 19 |
| RES_SHALLOW (ohm.m) | 21.58 | 19 |
| **Δ Res (Deep − Shallow)** | **-4.24** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1938 m MD — Interval 1936.5 – 1939.5 m

**Sample Description (spreadsheet):** Sample 1938m: Tr siderite in 40% Siltstone, Tr siderite in 60% very fine  to  fine Sandstone, 40% dull  to  moderately bright FLUOR in SST. TG 70U

| Property | Value |
|----------|-------|
| % Sandstone | 60 |
| Grain Size | vf - f (max: F) |
| Fluorescence | 40.0% dll - mod bri |
| Total Gas | 70 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 20.9 | 20 |
| RES_DEEP (ohm.m) | 18.41 | 20 |
| RES_SHALLOW (ohm.m) | 22.91 | 20 |
| **Δ Res (Deep − Shallow)** | **-4.51** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1941 m MD — Interval 1939.5 – 1942.5 m

**Sample Description (spreadsheet):** Sample 1941m: Tr siderite in 20% Siltstone, Tr siderite in 80% very fine  to  fine Sandstone, 60% dull  to  moderately bright FLUOR in SST. TG 120U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | vf - f (max: F) |
| Fluorescence | 60.0% dll - mod bri |
| Total Gas | 120 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.2 | 20 |
| RES_DEEP (ohm.m) | 18.85 | 20 |
| RES_SHALLOW (ohm.m) | 23.25 | 20 |
| **Δ Res (Deep − Shallow)** | **-4.40** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1944 m MD — Interval 1942.5 – 1945.5 m

**Sample Description (spreadsheet):** Sample 1944m: Tr siderite in 30% Siltstone, Tr siderite in 70% very fine  to  fine Sandstone, 50% dull  to  moderately bright FLUOR in SST. TG 90U

| Property | Value |
|----------|-------|
| % Sandstone | 70 |
| Grain Size | vf - f (max: F) |
| Fluorescence | 50.0% dll - mod bri |
| Total Gas | 90 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.6 | 19 |
| RES_DEEP (ohm.m) | 19.96 | 19 |
| RES_SHALLOW (ohm.m) | 25.08 | 19 |
| **Δ Res (Deep − Shallow)** | **-5.12** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1947 m MD — Interval 1945.5 – 1948.5 m

**Sample Description (spreadsheet):** Sample 1947m: Tr siderite in 30% Siltstone, Tr siderite in 70% very fine  to  fine Sandstone, 50% dull  to  moderately bright FLUOR in SST. TG 90U

| Property | Value |
|----------|-------|
| % Sandstone | 70 |
| Grain Size | vf - f (max: F) |
| Fluorescence | 50.0% dll - mod bri |
| Total Gas | 90 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.0 | 20 |
| RES_DEEP (ohm.m) | 19.72 | 20 |
| RES_SHALLOW (ohm.m) | 24.14 | 20 |
| **Δ Res (Deep − Shallow)** | **-4.42** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1950 m MD — Interval 1948.5 – 1951.5 m

**Sample Description (spreadsheet):** Sample 1950m: Tr siderite in 30% Siltstone, Tr siderite in 70% very fine  to  fine Sandstone, 60% dull  to  bright FLUOR in SST. TG 96U

| Property | Value |
|----------|-------|
| % Sandstone | 70 |
| Grain Size | vf - f (max: F) |
| Fluorescence | 60.0% dll - bri |
| Total Gas | 96 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.5 | 20 |
| RES_DEEP (ohm.m) | 19.76 | 20 |
| RES_SHALLOW (ohm.m) | 23.06 | 20 |
| **Δ Res (Deep − Shallow)** | **-3.30** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1953 m MD — Interval 1951.5 – 1954.5 m

**Sample Description (spreadsheet):** Sample 1953m: Tr siderite in 30% Siltstone, Tr siderite in 70% very fine  to  fine Sandstone, 60% dull  to  bright FLUOR in SST. TG 95U

| Property | Value |
|----------|-------|
| % Sandstone | 70 |
| Grain Size | vf - f (max: F) |
| Fluorescence | 60.0% dll - bri |
| Total Gas | 95 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.0 | 19 |
| RES_DEEP (ohm.m) | 19.73 | 19 |
| RES_SHALLOW (ohm.m) | 22.17 | 19 |
| **Δ Res (Deep − Shallow)** | **-2.44** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1956 m MD — Interval 1954.5 – 1957.5 m

**Sample Description (spreadsheet):** Sample 1956m: Tr siderite in 20% Siltstone, Tr siderite in 80% very fine  to  medium Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 101U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | vf - med (max: M) |
| Fluorescence | 80.0% mod bri - bri |
| Total Gas | 101 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.6 | 20 |
| RES_DEEP (ohm.m) | 20.55 | 20 |
| RES_SHALLOW (ohm.m) | 22.38 | 20 |
| **Δ Res (Deep − Shallow)** | **-1.83** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1959 m MD — Interval 1957.5 – 1960.5 m

**Sample Description (spreadsheet):** Sample 1959m: Tr siderite in 20% Siltstone, Tr siderite in 80% very fine  to  medium Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 105U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | vf - med (max: M) |
| Fluorescence | 80.0% mod bri - bri |
| Total Gas | 105 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.1 | 20 |
| RES_DEEP (ohm.m) | 21.18 | 20 |
| RES_SHALLOW (ohm.m) | 22.99 | 20 |
| **Δ Res (Deep − Shallow)** | **-1.81** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1962 m MD — Interval 1960.5 – 1963.5 m

**Sample Description (spreadsheet):** Sample 1962m: Tr siderite in 10% Siltstone, Tr siderite in 90% very fine  to  medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 190U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf - med (max: M) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 190 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 23.0 | 19 |
| RES_DEEP (ohm.m) | 21.38 | 19 |
| RES_SHALLOW (ohm.m) | 23.94 | 19 |
| **Δ Res (Deep − Shallow)** | **-2.55** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1965 m MD — Interval 1963.5 – 1966.5 m

**Sample Description (spreadsheet):** Sample 1965m: Tr siderite in 10% Siltstone, Tr siderite in 90% very fine  to  medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 114U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf - med (max: M) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 114 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 23.3 | 20 |
| RES_DEEP (ohm.m) | 22.21 | 20 |
| RES_SHALLOW (ohm.m) | 24.03 | 20 |
| **Δ Res (Deep − Shallow)** | **-1.83** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1968 m MD — Interval 1966.5 – 1969.5 m

**Sample Description (spreadsheet):** Sample 1968m: Tr siderite in 10% Siltstone, Tr siderite in 90% very fine  to  medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 111U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf - med (max: M) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 111 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 25.9 | 20 |
| RES_DEEP (ohm.m) | 25.00 | 20 |
| RES_SHALLOW (ohm.m) | 26.41 | 20 |
| **Δ Res (Deep − Shallow)** | **-1.42** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1971 m MD — Interval 1969.5 – 1972.5 m

**Sample Description (spreadsheet):** Sample 1971m: Tr siderite in 5% Siltstone, Tr siderite in 95% very fine  to  medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 118U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf - med (max: M) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 118 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 26.0 | 19 |
| RES_DEEP (ohm.m) | 25.21 | 19 |
| RES_SHALLOW (ohm.m) | 26.82 | 19 |
| **Δ Res (Deep − Shallow)** | **-1.61** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1974 m MD — Interval 1972.5 – 1975.5 m

**Sample Description (spreadsheet):** Sample 1974m: Tr siderite in 5% Siltstone, Tr siderite in 95% fine  to  coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 114U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f - crs (max: C) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 114 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 24.0 | 20 |
| RES_DEEP (ohm.m) | 22.79 | 20 |
| RES_SHALLOW (ohm.m) | 25.16 | 20 |
| **Δ Res (Deep − Shallow)** | **-2.37** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1977 m MD — Interval 1975.5 – 1978.5 m

**Sample Description (spreadsheet):** Sample 1977m: Tr siderite in 0% Siltstone, Tr siderite in 100% very fine  to  medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 112U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf - med (max: M) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 112 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 25.1 | 20 |
| RES_DEEP (ohm.m) | 23.86 | 20 |
| RES_SHALLOW (ohm.m) | 26.01 | 20 |
| **Δ Res (Deep − Shallow)** | **-2.14** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1980 m MD — Interval 1978.5 – 1981.5 m

**Sample Description (spreadsheet):** Sample 1980m: Tr siderite in 0% Siltstone, Tr siderite in 100% very fine  to  medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 149U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf - med (max: M) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 149 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 23.6 | 19 |
| RES_DEEP (ohm.m) | 22.91 | 19 |
| RES_SHALLOW (ohm.m) | 24.71 | 19 |
| **Δ Res (Deep − Shallow)** | **-1.81** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1983 m MD — Interval 1981.5 – 1984.5 m

**Sample Description (spreadsheet):** Sample 1983m: Tr siderite in 0% Siltstone, Tr siderite in 100% very fine  to  medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 116U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf - med (max: M) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 116 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.4 | 20 |
| RES_DEEP (ohm.m) | 22.27 | 20 |
| RES_SHALLOW (ohm.m) | 23.11 | 20 |
| **Δ Res (Deep − Shallow)** | **-0.84** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1986 m MD — Interval 1984.5 – 1987.5 m

**Sample Description (spreadsheet):** Sample 1986m: Tr siderite in 0% Siltstone, Tr siderite in 100% very fine  to  medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 118U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf - med (max: M) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 118 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 23.4 | 20 |
| RES_DEEP (ohm.m) | 23.01 | 20 |
| RES_SHALLOW (ohm.m) | 24.24 | 20 |
| **Δ Res (Deep − Shallow)** | **-1.23** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1989 m MD — Interval 1987.5 – 1990.5 m

**Sample Description (spreadsheet):** Sample 1989m: Tr siderite in 5% Siltstone, Tr siderite in 95% fine  to  coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 136U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f - crs (max: C) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 136 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 24.6 | 20 |
| RES_DEEP (ohm.m) | 23.12 | 20 |
| RES_SHALLOW (ohm.m) | 26.48 | 20 |
| **Δ Res (Deep − Shallow)** | **-3.36** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1992 m MD — Interval 1990.5 – 1993.5 m

**Sample Description (spreadsheet):** Sample 1992m: Tr siderite in 5% Siltstone, Tr siderite in 95% fine  to  coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 141U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f - crs (max: C) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 141 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 30.6 | 19 |
| RES_DEEP (ohm.m) | 26.97 | 19 |
| RES_SHALLOW (ohm.m) | 33.49 | 19 |
| **Δ Res (Deep − Shallow)** | **-6.51** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2020 m MD — Interval 2015.0 – 2025.0 m

**Sample Description (spreadsheet):** Sample 2020m: Tr siderite in 40% Siltstone, Tr siderite in 60% very fine  to  medium Sandstone, 40% dull  to  moderately bright FLUOR in SST. TG 57U

| Property | Value |
|----------|-------|
| % Sandstone | 60 |
| Grain Size | vf - med (max: M) |
| Fluorescence | 40.0% dll - mod bri |
| Total Gas | 57 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2020m: brn gry,lt-med gry,arg,com vf aren,com micmic,mnr carb flks, interbedded w/ vf SST,tr carb micrlams, rr LMST frags,frm,sbblky-sbfiss, 0 0.5 1 4 14 2030 1 10 100 1K
- **SILTSTONE** @ ~2040m: med-dk gry,arg,sil i/p, micmic,occ carb spks,sft,blky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 15.4 | 66 |
| RES_DEEP (ohm.m) | 13.94 | 66 |
| RES_SHALLOW (ohm.m) | 16.94 | 66 |
| **Δ Res (Deep − Shallow)** | **-3.00** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2030 m MD — Interval 2025.0 – 2035.0 m

**Sample Description (spreadsheet):** Sample 2030m: Tr siderite in 70% Siltstone, Tr siderite in 30% very fine  to  fine Sandstone, 5% dull FLUOR in SST. TG 54U

| Property | Value |
|----------|-------|
| % Sandstone | 30 |
| Grain Size | vf - f (max: F) |
| Fluorescence | 5.0% dll |
| Total Gas | 54 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2020m: brn gry,lt-med gry,arg,com vf aren,com micmic,mnr carb flks, interbedded w/ vf SST,tr carb micrlams, rr LMST frags,frm,sbblky-sbfiss, 0 0.5 1 4 14 2030 1 10 100 1K
- **SILTSTONE** @ ~2040m: med-dk gry,arg,sil i/p, micmic,occ carb spks,sft,blky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 15.1 | 66 |
| RES_DEEP (ohm.m) | 13.42 | 66 |
| RES_SHALLOW (ohm.m) | 16.87 | 66 |
| **Δ Res (Deep − Shallow)** | **-3.45** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2040 m MD — Interval 2035.0 – 2045.0 m

**Sample Description (spreadsheet):** Sample 2040m: Tr siderite in 90% Siltstone, Tr siderite in 10% very fine Sandstone, NOnone FLUOR in SST. TG 49U

| Property | Value |
|----------|-------|
| % Sandstone | 10 |
| Grain Size | vf (max: VF) |
| Fluorescence | 0.0% none |
| Total Gas | 49 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2020m: brn gry,lt-med gry,arg,com vf aren,com micmic,mnr carb flks, interbedded w/ vf SST,tr carb micrlams, rr LMST frags,frm,sbblky-sbfiss, 0 0.5 1 4 14 2030 1 10 100 1K
- **SILTSTONE** @ ~2040m: med-dk gry,arg,sil i/p, micmic,occ carb spks,sft,blky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 13.9 | 65 |
| RES_DEEP (ohm.m) | 12.71 | 65 |
| RES_SHALLOW (ohm.m) | 15.14 | 65 |
| **Δ Res (Deep − Shallow)** | **-2.43** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2050 m MD — Interval 2045.0 – 2055.0 m

**Sample Description (spreadsheet):** Sample 2050m: Tr siderite in 60% Siltstone, 5 siderite in 40% fine, occasional medium Sandstone, NO0 FLUOR in SST. TG 51U

| Property | Value |
|----------|-------|
| % Sandstone | 40 |
| Grain Size | f, occ med (max: M) |
| Fluorescence | 0.0% 0 |
| Total Gas | 51 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | 5 |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2040m: med-dk gry,arg,sil i/p, micmic,occ carb spks,sft,blky.
- **SANDSTONE** @ ~2040m: 5-12 klbs 2050 81 / 4 / 2 / 4 / 9 SANDSTONE:lt gry,clr,opq,trnsl, FLW: 1227-259 gpm pr vis & inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 12.6 | 66 |
| RES_DEEP (ohm.m) | 12.31 | 66 |
| RES_SHALLOW (ohm.m) | 13.26 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.95** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2060 m MD — Interval 2055.0 – 2065.0 m

**Sample Description (spreadsheet):** Sample 2060m: trace siderite in 45% Siltstone, trace to 5 siderite in 55% very fine  to  medium Sandstone, 5% dull  to  moderately bright FLUOR in SST. TG 51U

| Property | Value |
|----------|-------|
| % Sandstone | 55 |
| Grain Size | vf - med (max: M) |
| Fluorescence | 5.0% dll - mod bri |
| Total Gas | 51 U |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | tr-5 |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2040m: med-dk gry,arg,sil i/p, micmic,occ carb spks,sft,blky.
- **SANDSTONE** @ ~2040m: 5-12 klbs 2050 81 / 4 / 2 / 4 / 9 SANDSTONE:lt gry,clr,opq,trnsl, FLW: 1227-259 gpm pr vis & inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 11.5 | 65 |
| RES_DEEP (ohm.m) | 11.47 | 65 |
| RES_SHALLOW (ohm.m) | 11.70 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.23** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2070 m MD — Interval 2065.0 – 2075.0 m

**Sample Description (spreadsheet):** Sample 2070m: trace siderite in 50% Siltstone, 5 siderite in 50% very fine  to  medium Sandstone, 5% dull  to  moderately bright FLUOR in SST. TG 69U

| Property | Value |
|----------|-------|
| % Sandstone | 50 |
| Grain Size | vf - med (max: M) |
| Fluorescence | 5.0% dll - mod bri |
| Total Gas | 69 U |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | 5 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2080m: trnsl,trnsp,opq,clr, vf,occ med,mod srt,sbrnd,wk sil cmt, lt gry arg mtx,carb spks,fri,occ lse, pr-fr vis & pr- fr inf por,no fluor. 2090 86 / 4 / 2 / 2 / 6

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 10.3 | 66 |
| RES_DEEP (ohm.m) | 10.04 | 66 |
| RES_SHALLOW (ohm.m) | 10.64 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.59** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2080 m MD — Interval 2075.0 – 2085.0 m

**Sample Description (spreadsheet):** Sample 2080m: 0 siderite in 50% Siltstone, trace siderite in 50% very fine  to  fine, r medium Sandstone, 0.1% dull  to  moderately bright FLUOR in SST. TG 70U

| Property | Value |
|----------|-------|
| % Sandstone | 50 |
| Grain Size | vf - f, r med (max: M) |
| Fluorescence | 0.1% dll - mod bri |
| Total Gas | 70 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2080m: trnsl,trnsp,opq,clr, vf,occ med,mod srt,sbrnd,wk sil cmt, lt gry arg mtx,carb spks,fri,occ lse, pr-fr vis & pr- fr inf por,no fluor. 2090 86 / 4 / 2 / 2 / 6

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 10.1 | 66 |
| RES_DEEP (ohm.m) | 9.79 | 66 |
| RES_SHALLOW (ohm.m) | 10.49 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.71** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2090 m MD — Interval 2085.0 – 2095.0 m

**Sample Description (spreadsheet):** Sample 2090m: 0 siderite in 40% Siltstone, trace siderite in 60% very fine  to  fine, r medium Sandstone, NO0 FLUOR in SST. TG 59U

| Property | Value |
|----------|-------|
| % Sandstone | 60 |
| Grain Size | vf - f, r med (max: M) |
| Fluorescence | 0.0% 0 |
| Total Gas | 59 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2080m: trnsl,trnsp,opq,clr, vf,occ med,mod srt,sbrnd,wk sil cmt, lt gry arg mtx,carb spks,fri,occ lse, pr-fr vis & pr- fr inf por,no fluor. 2090 86 / 4 / 2 / 2 / 6
- **SANDSTONE** @ ~2110m: trnsl,trnsp,opq,clr, vf-f,rr med,mod srt,sbrnd,wk sil cmt, lt gry arg mtx,carb spks,fri,occ lse, pr-fr vis & pr- fr inf por,no fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 10.5 | 65 |
| RES_DEEP (ohm.m) | 10.21 | 65 |
| RES_SHALLOW (ohm.m) | 10.84 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.63** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2100 m MD — Interval 2095.0 – 2105.0 m

**Sample Description (spreadsheet):** Sample 2100m: 0 siderite in 50% Siltstone, trace   siderite in 50% very fine to fine, occasional medium Sandstone, NO0 FLUOR in SST. TG 45U

| Property | Value |
|----------|-------|
| % Sandstone | 50 |
| Grain Size | vf-f, occ med (max: M) |
| Fluorescence | 0.0% 0 |
| Total Gas | 45 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | tr   |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2080m: trnsl,trnsp,opq,clr, vf,occ med,mod srt,sbrnd,wk sil cmt, lt gry arg mtx,carb spks,fri,occ lse, pr-fr vis & pr- fr inf por,no fluor. 2090 86 / 4 / 2 / 2 / 6
- **SANDSTONE** @ ~2110m: trnsl,trnsp,opq,clr, vf-f,rr med,mod srt,sbrnd,wk sil cmt, lt gry arg mtx,carb spks,fri,occ lse, pr-fr vis & pr- fr inf por,no fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 10.5 | 66 |
| RES_DEEP (ohm.m) | 10.16 | 66 |
| RES_SHALLOW (ohm.m) | 10.84 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.68** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2110 m MD — Interval 2105.0 – 2115.0 m

**Sample Description (spreadsheet):** Sample 2110m: 0 siderite in 45% Siltstone, trace siderite in 55% very fine to fine, occasional medium Sandstone, NO0 FLUOR in SST. TG 49U

| Property | Value |
|----------|-------|
| % Sandstone | 55 |
| Grain Size | vf-f, occ med (max: M) |
| Fluorescence | 0.0% 0 |
| Total Gas | 49 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2110m: trnsl,trnsp,opq,clr, vf-f,rr med,mod srt,sbrnd,wk sil cmt, lt gry arg mtx,carb spks,fri,occ lse, pr-fr vis & pr- fr inf por,no fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 10.3 | 65 |
| RES_DEEP (ohm.m) | 9.97 | 65 |
| RES_SHALLOW (ohm.m) | 10.66 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.69** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2120 m MD — Interval 2115.0 – 2125.0 m

**Sample Description (spreadsheet):** Sample 2120m: 0 siderite in 40% Siltstone, 0 siderite in 60% very fine to fine, r medium Sandstone, NO0 FLUOR in SST. TG 42U

| Property | Value |
|----------|-------|
| % Sandstone | 60 |
| Grain Size | vf-f, r med (max: M) |
| Fluorescence | 0.0% 0 |
| Total Gas | 42 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2110m: trnsl,trnsp,opq,clr, vf-f,rr med,mod srt,sbrnd,wk sil cmt, lt gry arg mtx,carb spks,fri,occ lse, pr-fr vis & pr- fr inf por,no fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 9.7 | 66 |
| RES_DEEP (ohm.m) | 9.46 | 66 |
| RES_SHALLOW (ohm.m) | 10.11 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.65** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2130 m MD — Interval 2125.0 – 2131.5 m

**Sample Description (spreadsheet):** Sample 2130m: 0 siderite in 45% Siltstone, trace siderite in 55% very fine to fine, r medium Sandstone, NO0 FLUOR in SST. TG 41U

| Property | Value |
|----------|-------|
| % Sandstone | 55 |
| Grain Size | vf-f, r med (max: M) |
| Fluorescence | 0.0% 0 |
| Total Gas | 41 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2110m: trnsl,trnsp,opq,clr, vf-f,rr med,mod srt,sbrnd,wk sil cmt, lt gry arg mtx,carb spks,fri,occ lse, pr-fr vis & pr- fr inf por,no fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 9.7 | 43 |
| RES_DEEP (ohm.m) | 9.36 | 43 |
| RES_SHALLOW (ohm.m) | 10.13 | 43 |
| **Δ Res (Deep − Shallow)** | **-0.77** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2133 m MD — Interval 2131.5 – 2134.5 m

**Sample Description (spreadsheet):** Sample 2133m: 0 siderite in 50% Siltstone, 0 siderite in 50% very fine to fine, r medium Sandstone, NO0 FLUOR in SST. TG 41U

| Property | Value |
|----------|-------|
| % Sandstone | 50 |
| Grain Size | vf-f, r med (max: M) |
| Fluorescence | 0.0% 0 |
| Total Gas | 41 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 9.8 | 19 |
| RES_DEEP (ohm.m) | 9.54 | 19 |
| RES_SHALLOW (ohm.m) | 10.17 | 19 |
| **Δ Res (Deep − Shallow)** | **-0.64** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2136 m MD — Interval 2134.5 – 2137.5 m

**Sample Description (spreadsheet):** Sample 2136m: trace siderite in 45% Siltstone, 0 siderite in 55% very fine to medium, r coarse Sandstone, NO0 FLUOR in SST. TG 37U

| Property | Value |
|----------|-------|
| % Sandstone | 55 |
| Grain Size | vf-med, r crs (max: C) |
| Fluorescence | 0.0% 0 |
| Total Gas | 37 U |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 10.2 | 20 |
| RES_DEEP (ohm.m) | 9.82 | 20 |
| RES_SHALLOW (ohm.m) | 10.61 | 20 |
| **Δ Res (Deep − Shallow)** | **-0.79** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2139 m MD — Interval 2137.5 – 2140.5 m

**Sample Description (spreadsheet):** Sample 2139m: 0 siderite in 55% Siltstone, 0 siderite in 45% very fine to fine, occasional medium Sandstone, NO0 FLUOR in SST. TG 37U

| Property | Value |
|----------|-------|
| % Sandstone | 45 |
| Grain Size | vf-f, occ med (max: M) |
| Fluorescence | 0.0% 0 |
| Total Gas | 37 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 10.6 | 20 |
| RES_DEEP (ohm.m) | 10.59 | 20 |
| RES_SHALLOW (ohm.m) | 10.89 | 20 |
| **Δ Res (Deep − Shallow)** | **-0.30** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2142 m MD — Interval 2140.5 – 2143.5 m

**Sample Description (spreadsheet):** Sample 2142m: 0 siderite in 40% Siltstone, 0 siderite in 60% very fine to medium  Sandstone, NO0 FLUOR in SST. TG 38U

| Property | Value |
|----------|-------|
| % Sandstone | 60 |
| Grain Size | vf-med  (max: M) |
| Fluorescence | 0.0% 0 |
| Total Gas | 38 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 11.0 | 19 |
| RES_DEEP (ohm.m) | 10.56 | 19 |
| RES_SHALLOW (ohm.m) | 11.38 | 19 |
| **Δ Res (Deep − Shallow)** | **-0.82** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2145 m MD — Interval 2143.5 – 2146.5 m

**Sample Description (spreadsheet):** Sample 2145m: 0 siderite in 50% Siltstone, 0 siderite in 50% very fine to occasionalmedium, r coarse Sandstone, NO0 FLUOR in SST. TG 33U

| Property | Value |
|----------|-------|
| % Sandstone | 50 |
| Grain Size | vf-occmed, r crs (max: C) |
| Fluorescence | 0.0% 0 |
| Total Gas | 33 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2160m: med-lt gry,gry brn i/p, 85 / 5 / 3 / 2 / 5 arg,micmic,carb,aren grd to vf SST i/p,sft,fri,sbblky. Tr% of SST,mod bri-bri,occ

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 11.6 | 20 |
| RES_DEEP (ohm.m) | 11.26 | 20 |
| RES_SHALLOW (ohm.m) | 11.96 | 20 |
| **Δ Res (Deep − Shallow)** | **-0.69** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2148 m MD — Interval 2146.5 – 2149.5 m

**Sample Description (spreadsheet):** Sample 2148m: 0 siderite in 50% Siltstone, 0 siderite in 50% very fine to fine, occasional medium Sandstone, NO0 FLUOR in SST. TG 37U

| Property | Value |
|----------|-------|
| % Sandstone | 50 |
| Grain Size | vf-f, occ med (max: M) |
| Fluorescence | 0.0% 0 |
| Total Gas | 37 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2160m: med-lt gry,gry brn i/p, 85 / 5 / 3 / 2 / 5 arg,micmic,carb,aren grd to vf SST i/p,sft,fri,sbblky. Tr% of SST,mod bri-bri,occ

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 11.1 | 20 |
| RES_DEEP (ohm.m) | 11.17 | 20 |
| RES_SHALLOW (ohm.m) | 11.48 | 20 |
| **Δ Res (Deep − Shallow)** | **-0.32** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2151 m MD — Interval 2149.5 – 2152.5 m

**Sample Description (spreadsheet):** Sample 2151m: 5 siderite in 50% Siltstone, 0 siderite in 50% very fine to fine, r medium Sandstone, NO0 FLUOR in SST. TG 34U

| Property | Value |
|----------|-------|
| % Sandstone | 50 |
| Grain Size | vf-f, r med (max: M) |
| Fluorescence | 0.0% 0 |
| Total Gas | 34 U |
| FeCO₃ in Siltstone | 5 |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2160m: med-lt gry,gry brn i/p, 85 / 5 / 3 / 2 / 5 arg,micmic,carb,aren grd to vf SST i/p,sft,fri,sbblky. Tr% of SST,mod bri-bri,occ

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 10.7 | 20 |
| RES_DEEP (ohm.m) | 10.25 | 20 |
| RES_SHALLOW (ohm.m) | 11.30 | 20 |
| **Δ Res (Deep − Shallow)** | **-1.05** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2154 m MD — Interval 2152.5 – 2155.5 m

**Sample Description (spreadsheet):** Sample 2154m: trace siderite in 70% Siltstone, 20 siderite in 30% very fine to fine, r medium Sandstone, NO0 FLUOR in SST. TG 35U

| Property | Value |
|----------|-------|
| % Sandstone | 30 |
| Grain Size | vf-f, r med (max: M) |
| Fluorescence | 0.0% 0 |
| Total Gas | 35 U |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | 20 |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2160m: med-lt gry,gry brn i/p, 85 / 5 / 3 / 2 / 5 arg,micmic,carb,aren grd to vf SST i/p,sft,fri,sbblky. Tr% of SST,mod bri-bri,occ

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 10.7 | 19 |
| RES_DEEP (ohm.m) | 10.44 | 19 |
| RES_SHALLOW (ohm.m) | 11.13 | 19 |
| **Δ Res (Deep − Shallow)** | **-0.68** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2157 m MD — Interval 2155.5 – 2158.5 m

**Sample Description (spreadsheet):** Sample 2157m: 0 siderite in 70% Siltstone, 20 siderite in 30% very fine to fine, r medium & coarse Sandstone, NO0 FLUOR in SST. TG 34U

| Property | Value |
|----------|-------|
| % Sandstone | 30 |
| Grain Size | vf-f, r med & crs (max: C) |
| Fluorescence | 0.0% 0 |
| Total Gas | 34 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 20 |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2160m: med-lt gry,gry brn i/p, 85 / 5 / 3 / 2 / 5 arg,micmic,carb,aren grd to vf SST i/p,sft,fri,sbblky. Tr% of SST,mod bri-bri,occ

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 13.6 | 20 |
| RES_DEEP (ohm.m) | 13.08 | 20 |
| RES_SHALLOW (ohm.m) | 14.10 | 20 |
| **Δ Res (Deep − Shallow)** | **-1.02** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2181 m MD — Interval 2179.5 – 2182.5 m

**Sample Description (spreadsheet):** Sample 2181m: 0 siderite in 10% Siltstone, 0 siderite in 90% fine to occasional medium, r coarse Sandstone, 90% dull  to  bright FLUOR in SST. TG 107U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-occ med, r crs (max: C) |
| Fluorescence | 90.0% dll - bri |
| Total Gas | 107 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2180m: clr,trnsl,trnsp,opq,f-med, CHANGE SHAKER SCREEN occ crs,mod srt,sbrnd,occ sbang,wk sil cmt,occ lt gry arg mtx,fri,com lse,fr vis & fr-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 19.2 | 19 |
| RES_DEEP (ohm.m) | 18.51 | 19 |
| RES_SHALLOW (ohm.m) | 19.64 | 19 |
| **Δ Res (Deep − Shallow)** | **-1.13** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2184 m MD — Interval 2182.5 – 2185.5 m

**Sample Description (spreadsheet):** Sample 2184m: 0 siderite in 15% Siltstone, 5 siderite in 85% fine to medium, occasional coarse Sandstone, 60% dull  to  moderately bright FLUOR in SST. TG 68U

| Property | Value |
|----------|-------|
| % Sandstone | 85 |
| Grain Size | f-med, occ crs (max: C) |
| Fluorescence | 60.0% dll - mod bri |
| Total Gas | 68 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 5 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2180m: clr,trnsl,trnsp,opq,f-med, CHANGE SHAKER SCREEN occ crs,mod srt,sbrnd,occ sbang,wk sil cmt,occ lt gry arg mtx,fri,com lse,fr vis & fr-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 17.9 | 20 |
| RES_DEEP (ohm.m) | 17.55 | 20 |
| RES_SHALLOW (ohm.m) | 18.17 | 20 |
| **Δ Res (Deep − Shallow)** | **-0.62** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2187 m MD — Interval 2185.5 – 2188.5 m

**Sample Description (spreadsheet):** Sample 2187m: 0 siderite in 15% Siltstone, 5 siderite in 85% fine to medium, occasional coarse Sandstone, 60% dull  to  moderately bright FLUOR in SST. TG 83U

| Property | Value |
|----------|-------|
| % Sandstone | 85 |
| Grain Size | f-med, occ crs (max: C) |
| Fluorescence | 60.0% dll - mod bri |
| Total Gas | 83 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 5 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2180m: clr,trnsl,trnsp,opq,f-med, CHANGE SHAKER SCREEN occ crs,mod srt,sbrnd,occ sbang,wk sil cmt,occ lt gry arg mtx,fri,com lse,fr vis & fr-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 18.1 | 20 |
| RES_DEEP (ohm.m) | 17.24 | 20 |
| RES_SHALLOW (ohm.m) | 18.63 | 20 |
| **Δ Res (Deep − Shallow)** | **-1.39** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2190 m MD — Interval 2188.5 – 2191.5 m

**Sample Description (spreadsheet):** Sample 2190m: 0 siderite in 5% Siltstone, trace siderite in 95% fine, occasional medium, r coarse Sandstone, 85% dull  to  bright FLUOR in SST. TG 97U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f, occ med, r crs (max: C) |
| Fluorescence | 85.0% dll - bri |
| Total Gas | 97 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2180m: clr,trnsl,trnsp,opq,f-med, CHANGE SHAKER SCREEN occ crs,mod srt,sbrnd,occ sbang,wk sil cmt,occ lt gry arg mtx,fri,com lse,fr vis & fr-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 17.7 | 19 |
| RES_DEEP (ohm.m) | 16.95 | 19 |
| RES_SHALLOW (ohm.m) | 18.16 | 19 |
| **Δ Res (Deep − Shallow)** | **-1.21** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2193 m MD — Interval 2191.5 – 2194.5 m

**Sample Description (spreadsheet):** Sample 2193m: 0 siderite in 5% Siltstone, 5 siderite in 95% fine, occasional medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 103U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f, occ med (max: M) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 103 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 5 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2180m: clr,trnsl,trnsp,opq,f-med, CHANGE SHAKER SCREEN occ crs,mod srt,sbrnd,occ sbang,wk sil cmt,occ lt gry arg mtx,fri,com lse,fr vis & fr-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 17.7 | 20 |
| RES_DEEP (ohm.m) | 16.90 | 20 |
| RES_SHALLOW (ohm.m) | 18.26 | 20 |
| **Δ Res (Deep − Shallow)** | **-1.36** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2196 m MD — Interval 2194.5 – 2197.5 m

**Sample Description (spreadsheet):** Sample 2196m: 0 siderite in 5% Siltstone, 0 siderite in 95% fine, occasional medium Sandstone, 90% dull  to  bright FLUOR in SST. TG 115U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f, occ med (max: M) |
| Fluorescence | 90.0% dll - bri |
| Total Gas | 115 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2180m: clr,trnsl,trnsp,opq,f-med, CHANGE SHAKER SCREEN occ crs,mod srt,sbrnd,occ sbang,wk sil cmt,occ lt gry arg mtx,fri,com lse,fr vis & fr-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 17.3 | 20 |
| RES_DEEP (ohm.m) | 16.56 | 20 |
| RES_SHALLOW (ohm.m) | 18.00 | 20 |
| **Δ Res (Deep − Shallow)** | **-1.44** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2199 m MD — Interval 2197.5 – 2200.5 m

**Sample Description (spreadsheet):** Sample 2199m: 0 siderite in 0% Siltstone, 0 siderite in 100% fine, occasional medium Sandstone, 95% dull  to  bright FLUOR in SST. TG 99U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f, occ med (max: M) |
| Fluorescence | 95.0% dll - bri |
| Total Gas | 99 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 17.4 | 19 |
| RES_DEEP (ohm.m) | 16.84 | 19 |
| RES_SHALLOW (ohm.m) | 17.93 | 19 |
| **Δ Res (Deep − Shallow)** | **-1.09** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2202 m MD — Interval 2200.5 – 2203.5 m

**Sample Description (spreadsheet):** Sample 2202m: 0 siderite in 0% Siltstone, 0 siderite in 100% fine, occasional medium Sandstone, 80% dull  to  moderately bright FLUOR in SST. TG 91U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f, occ med (max: M) |
| Fluorescence | 80.0% dll - mod bri |
| Total Gas | 91 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 17.8 | 20 |
| RES_DEEP (ohm.m) | 16.87 | 20 |
| RES_SHALLOW (ohm.m) | 18.54 | 20 |
| **Δ Res (Deep − Shallow)** | **-1.67** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2205 m MD — Interval 2203.5 – 2206.5 m

**Sample Description (spreadsheet):** Sample 2205m: 0 siderite in 0% Siltstone, 0 siderite in 100% fine, occasional medium Sandstone, 90% dull  to  bright FLUOR in SST. TG 82U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f, occ med (max: M) |
| Fluorescence | 90.0% dll - bri |
| Total Gas | 82 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 18.7 | 20 |
| RES_DEEP (ohm.m) | 17.59 | 20 |
| RES_SHALLOW (ohm.m) | 19.37 | 20 |
| **Δ Res (Deep − Shallow)** | **-1.78** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2208 m MD — Interval 2206.5 – 2209.5 m

**Sample Description (spreadsheet):** Sample 2208m: 0 siderite in 5% Siltstone, 0 siderite in 95% very fine to very, occasional medium Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 121U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-v, occ med (max: M) |
| Fluorescence | 80.0% mod bri - bri |
| Total Gas | 121 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 18.7 | 20 |
| RES_DEEP (ohm.m) | 17.34 | 20 |
| RES_SHALLOW (ohm.m) | 19.56 | 20 |
| **Δ Res (Deep − Shallow)** | **-2.22** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2211 m MD — Interval 2209.5 – 2212.5 m

**Sample Description (spreadsheet):** Sample 2211m: 0 siderite in 0% Siltstone, 0 siderite in 100% very fine to fine, occasional medium Sandstone, 70% dull  to  moderately bright FLUOR in SST. TG 101U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f, occ med (max: M) |
| Fluorescence | 70.0% dll - mod bri |
| Total Gas | 101 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 18.2 | 19 |
| RES_DEEP (ohm.m) | 17.10 | 19 |
| RES_SHALLOW (ohm.m) | 19.11 | 19 |
| **Δ Res (Deep − Shallow)** | **-2.02** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2214 m MD — Interval 2212.5 – 2215.5 m

**Sample Description (spreadsheet):** Sample 2214m: 0 siderite in 0% Siltstone, trace siderite in 100% very fine to fine, occasional medium Sandstone, 80% dull  to  moderately bright FLUOR in SST. TG 93U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f, occ med (max: M) |
| Fluorescence | 80.0% dll - mod bri |
| Total Gas | 93 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 18.6 | 20 |
| RES_DEEP (ohm.m) | 17.71 | 20 |
| RES_SHALLOW (ohm.m) | 19.25 | 20 |
| **Δ Res (Deep − Shallow)** | **-1.54** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2217 m MD — Interval 2215.5 – 2218.5 m

**Sample Description (spreadsheet):** Sample 2217m: 0 siderite in 0% Siltstone, 0 siderite in 100% very fine to fine Sandstone, 80% dull  to  moderately bright FLUOR in SST. TG 102U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 80.0% dll - mod bri |
| Total Gas | 102 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 19.6 | 20 |
| RES_DEEP (ohm.m) | 18.58 | 20 |
| RES_SHALLOW (ohm.m) | 20.30 | 20 |
| **Δ Res (Deep − Shallow)** | **-1.72** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2220 m MD — Interval 2218.5 – 2221.5 m

**Sample Description (spreadsheet):** Sample 2220m: trace siderite in 0% Siltstone, trace siderite in 100% very fine to fine, fine to medium in part Sandstone, 80% moderately bright FLUOR in SST. TG 80U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f, f-med i/p (max: M) |
| Fluorescence | 80.0% mod bri |
| Total Gas | 80 U |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 19.2 | 19 |
| RES_DEEP (ohm.m) | 17.98 | 19 |
| RES_SHALLOW (ohm.m) | 19.98 | 19 |
| **Δ Res (Deep − Shallow)** | **-2.00** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2223 m MD — Interval 2221.5 – 2224.5 m

**Sample Description (spreadsheet):** Sample 2223m: trace siderite in 0% Siltstone, trace siderite in 100% very fine to fine, fine to medium in part Sandstone, 80% moderately bright FLUOR in SST. TG 72U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f, f-med i/p (max: M) |
| Fluorescence | 80.0% mod bri |
| Total Gas | 72 U |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 18.6 | 20 |
| RES_DEEP (ohm.m) | 17.61 | 20 |
| RES_SHALLOW (ohm.m) | 19.34 | 20 |
| **Δ Res (Deep − Shallow)** | **-1.73** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2226 m MD — Interval 2224.5 – 2227.5 m

**Sample Description (spreadsheet):** Sample 2226m: trace siderite in 0% Siltstone, 0 siderite in 100% very fine to very, occasional medium Sandstone, 80% dull  to  bright FLUOR in SST. TG 80U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-v, occ med (max: M) |
| Fluorescence | 80.0% dll - bri |
| Total Gas | 80 U |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 18.0 | 20 |
| RES_DEEP (ohm.m) | 16.82 | 20 |
| RES_SHALLOW (ohm.m) | 18.85 | 20 |
| **Δ Res (Deep − Shallow)** | **-2.03** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2229 m MD — Interval 2227.5 – 2230.5 m

**Sample Description (spreadsheet):** Sample 2229m: 0 siderite in 0% Siltstone, 0 siderite in 100% very fine to very, occasional medium Sandstone, 80% dull  to  bright FLUOR in SST. TG 119U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-v, occ med (max: M) |
| Fluorescence | 80.0% dll - bri |
| Total Gas | 119 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 18.1 | 19 |
| RES_DEEP (ohm.m) | 16.98 | 19 |
| RES_SHALLOW (ohm.m) | 18.88 | 19 |
| **Δ Res (Deep − Shallow)** | **-1.90** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2232 m MD — Interval 2230.5 – 2233.5 m

**Sample Description (spreadsheet):** Sample 2232m: Tr siderite in 0% Siltstone, Tr siderite in 100% very fine  to  medium Sandstone, 80% dull  to  moderately bright FLUOR in SST. TG 107U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf - med (max: M ) |
| Fluorescence | 80.0% dll - mod bri |
| Total Gas | 107 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 18.9 | 20 |
| RES_DEEP (ohm.m) | 17.79 | 20 |
| RES_SHALLOW (ohm.m) | 19.70 | 20 |
| **Δ Res (Deep − Shallow)** | **-1.91** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2235 m MD — Interval 2233.5 – 2236.5 m

**Sample Description (spreadsheet):** Sample 2235m: Tr siderite in 0% Siltstone, Tr siderite in 100% very fine  to  medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 201U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf - med (max: M ) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 201 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 18.7 | 20 |
| RES_DEEP (ohm.m) | 17.66 | 20 |
| RES_SHALLOW (ohm.m) | 19.48 | 20 |
| **Δ Res (Deep − Shallow)** | **-1.82** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2238 m MD — Interval 2236.5 – 2239.5 m

**Sample Description (spreadsheet):** Sample 2238m: Tr siderite in 0% Siltstone, Tr siderite in 100% very fine  to  medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 94U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf - med (max: M ) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 94 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 18.6 | 19 |
| RES_DEEP (ohm.m) | 17.75 | 19 |
| RES_SHALLOW (ohm.m) | 19.20 | 19 |
| **Δ Res (Deep − Shallow)** | **-1.45** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2241 m MD — Interval 2239.5 – 2242.5 m

**Sample Description (spreadsheet):** Sample 2241m: Tr siderite in 5% Siltstone, Tr siderite in 95% very fine  to  medium Sandstone, 90% moderately bright FLUOR in SST. TG 71U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf - med (max: M) |
| Fluorescence | 90.0% mod bri |
| Total Gas | 71 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 19.8 | 20 |
| RES_DEEP (ohm.m) | 18.76 | 20 |
| RES_SHALLOW (ohm.m) | 20.49 | 20 |
| **Δ Res (Deep − Shallow)** | **-1.73** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2244 m MD — Interval 2242.5 – 2245.5 m

**Sample Description (spreadsheet):** Sample 2244m: Tr siderite in 5% Siltstone, Tr siderite in 95% very fine  to  medium Sandstone, 80% moderately bright FLUOR in SST. TG 68U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf - med (max: M ) |
| Fluorescence | 80.0% mod bri |
| Total Gas | 68 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 19.6 | 20 |
| RES_DEEP (ohm.m) | 18.30 | 20 |
| RES_SHALLOW (ohm.m) | 20.47 | 20 |
| **Δ Res (Deep − Shallow)** | **-2.17** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2247 m MD — Interval 2245.5 – 2248.5 m

**Sample Description (spreadsheet):** Sample 2247m: Tr siderite in 5% Siltstone, Tr siderite in 95% very fine  to  medium Sandstone, 80% moderately bright FLUOR in SST. TG 74U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf - med (max: M ) |
| Fluorescence | 80.0% mod bri |
| Total Gas | 74 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 19.6 | 19 |
| RES_DEEP (ohm.m) | 18.76 | 19 |
| RES_SHALLOW (ohm.m) | 20.26 | 19 |
| **Δ Res (Deep − Shallow)** | **-1.50** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2250 m MD — Interval 2248.5 – 2255.0 m

**Sample Description (spreadsheet):** Sample 2250m: Tr siderite in 10% Siltstone, Tr siderite in 90% very fine  to  medium Sandstone, 80% moderately bright FLUOR in SST. TG 114U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf - med (max: M ) |
| Fluorescence | 80.0% mod bri |
| Total Gas | 114 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 20.6 | 43 |
| RES_DEEP (ohm.m) | 19.83 | 43 |
| RES_SHALLOW (ohm.m) | 21.20 | 43 |
| **Δ Res (Deep − Shallow)** | **-1.37** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2260 m MD — Interval 2255.0 – 2265.0 m

**Sample Description (spreadsheet):** Sample 2260m: Tr siderite in 5% Siltstone, Tr siderite in 95% fine  to  coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 200U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f - crs (max: C) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 200 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.2 | 66 |
| RES_DEEP (ohm.m) | 22.09 | 66 |
| RES_SHALLOW (ohm.m) | 22.40 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.31** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2330 m MD — Interval 2325.0 – 2335.0 m

**Sample Description (spreadsheet):** Sample 2330m: Tr siderite in 30% Siltstone, Tr siderite in 70% fine  to  very coarse Sandstone, 70% moderately bright  to  bright FLUOR in SST. TG 229U

| Property | Value |
|----------|-------|
| % Sandstone | 70 |
| Grain Size | f - v crs (max: VC) |
| Fluorescence | 70.0% mod bri - bri |
| Total Gas | 229 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2310m: lt-med gry,arg,com aren i/p, grd to vf SST,com lams,tr-mnr carb flks & micrlams,mnr micmic,tr mica,tr-mnr sid, frm,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 24.0 | 66 |
| RES_DEEP (ohm.m) | 22.97 | 66 |
| RES_SHALLOW (ohm.m) | 25.23 | 66 |
| **Δ Res (Deep − Shallow)** | **-2.26** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2340 m MD — Interval 2335.0 – 2345.0 m

**Sample Description (spreadsheet):** Sample 2340m: Tr siderite in 20% Siltstone, Tr siderite in 80% fine  to  coarse Sandstone, 90% moderately bright  to  bright FLUOR in SST. TG 233U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | f - crs (max: C) |
| Fluorescence | 90.0% mod bri - bri |
| Total Gas | 233 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.8 | 66 |
| RES_DEEP (ohm.m) | 22.39 | 66 |
| RES_SHALLOW (ohm.m) | 23.31 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.92** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2350 m MD — Interval 2345.0 – 2355.0 m

**Sample Description (spreadsheet):** Sample 2350m: Tr siderite in 10% Siltstone, Tr siderite in 90% fine  to  coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 234U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f - crs (max: C) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 234 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.9 | 65 |
| RES_DEEP (ohm.m) | 21.32 | 65 |
| RES_SHALLOW (ohm.m) | 22.75 | 65 |
| **Δ Res (Deep − Shallow)** | **-1.43** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2360 m MD — Interval 2355.0 – 2365.0 m

**Sample Description (spreadsheet):** Sample 2360m: Tr siderite in 0% Siltstone, Tr siderite in 100% fine  to  coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 244U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f - crs (max: C) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 244 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2380m: lt gry,lt brn,trnsl,opq, f-crs,dom med,mod wl srt,dom sbang- sbrnd,mnr wk-mod strg sil cmt,mnr-tr lt gry arg mtx,tr ovgths,tr sid,fri- mod hd aggs,dom lse,pr vis-fr inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.4 | 66 |
| RES_DEEP (ohm.m) | 21.74 | 66 |
| RES_SHALLOW (ohm.m) | 23.29 | 66 |
| **Δ Res (Deep − Shallow)** | **-1.55** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2370 m MD — Interval 2365.0 – 2375.0 m

**Sample Description (spreadsheet):** Sample 2370m: Tr siderite in 5% Siltstone, Tr siderite in 95% fine  to  coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 239U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f - crs (max: C) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 239 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2380m: lt gry,lt brn,trnsl,opq, f-crs,dom med,mod wl srt,dom sbang- sbrnd,mnr wk-mod strg sil cmt,mnr-tr lt gry arg mtx,tr ovgths,tr sid,fri- mod hd aggs,dom lse,pr vis-fr inf por,
- **SILTSTONE** @ ~2390m: lt-med gry,arg,com aren i/p, grd to vf SST,com lams,tr-mnr carb flks 80 / 6 / 4 / 5 / 5 & micrlams,mnr micmic,tr mica,tr-mnr sid, frm,sbblky-sbfiss. 2400 SURVEY @ 2398.6

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.9 | 65 |
| RES_DEEP (ohm.m) | 22.98 | 65 |
| RES_SHALLOW (ohm.m) | 23.08 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.10** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2380 m MD — Interval 2375.0 – 2385.0 m

**Sample Description (spreadsheet):** Sample 2380m: Tr siderite in 5% Siltstone, Tr siderite in 95% fine  to  coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 275U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f - crs (max: C) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 275 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2380m: lt gry,lt brn,trnsl,opq, f-crs,dom med,mod wl srt,dom sbang- sbrnd,mnr wk-mod strg sil cmt,mnr-tr lt gry arg mtx,tr ovgths,tr sid,fri- mod hd aggs,dom lse,pr vis-fr inf por,
- **SILTSTONE** @ ~2390m: lt-med gry,arg,com aren i/p, grd to vf SST,com lams,tr-mnr carb flks 80 / 6 / 4 / 5 / 5 & micrlams,mnr micmic,tr mica,tr-mnr sid, frm,sbblky-sbfiss. 2400 SURVEY @ 2398.6

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.0 | 66 |
| RES_DEEP (ohm.m) | 20.86 | 66 |
| RES_SHALLOW (ohm.m) | 21.13 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.27** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2390 m MD — Interval 2385.0 – 2395.0 m

**Sample Description (spreadsheet):** Sample 2390m: Tr siderite in 5% Siltstone, Tr siderite in 95% fine  to  medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 238U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f - med (max: M ) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 238 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2380m: lt gry,lt brn,trnsl,opq, f-crs,dom med,mod wl srt,dom sbang- sbrnd,mnr wk-mod strg sil cmt,mnr-tr lt gry arg mtx,tr ovgths,tr sid,fri- mod hd aggs,dom lse,pr vis-fr inf por,
- **SILTSTONE** @ ~2390m: lt-med gry,arg,com aren i/p, grd to vf SST,com lams,tr-mnr carb flks 80 / 6 / 4 / 5 / 5 & micrlams,mnr micmic,tr mica,tr-mnr sid, frm,sbblky-sbfiss. 2400 SURVEY @ 2398.6

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.3 | 66 |
| RES_DEEP (ohm.m) | 22.04 | 66 |
| RES_SHALLOW (ohm.m) | 22.30 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.26** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2400 m MD — Interval 2395.0 – 2405.0 m

**Sample Description (spreadsheet):** Sample 2400m: Tr siderite in 0% Siltstone, Tr siderite in 100% fine  to  coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 174U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f - crs (max: C) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 174 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2380m: lt gry,lt brn,trnsl,opq, f-crs,dom med,mod wl srt,dom sbang- sbrnd,mnr wk-mod strg sil cmt,mnr-tr lt gry arg mtx,tr ovgths,tr sid,fri- mod hd aggs,dom lse,pr vis-fr inf por,
- **SILTSTONE** @ ~2390m: lt-med gry,arg,com aren i/p, grd to vf SST,com lams,tr-mnr carb flks 80 / 6 / 4 / 5 / 5 & micrlams,mnr micmic,tr mica,tr-mnr sid, frm,sbblky-sbfiss. 2400 SURVEY @ 2398.6

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 22.2 | 65 |
| RES_DEEP (ohm.m) | 21.68 | 65 |
| RES_SHALLOW (ohm.m) | 22.24 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.56** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2410 m MD — Interval 2405.0 – 2415.0 m

**Sample Description (spreadsheet):** Sample 2410m: Tr siderite in 0% Siltstone, Tr siderite in 100% fine  to  coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 252U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f - crs (max: C) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 252 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2390m: lt-med gry,arg,com aren i/p, grd to vf SST,com lams,tr-mnr carb flks 80 / 6 / 4 / 5 / 5 & micrlams,mnr micmic,tr mica,tr-mnr sid, frm,sbblky-sbfiss. 2400 SURVEY @ 2398.6

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 21.8 | 66 |
| RES_DEEP (ohm.m) | 21.13 | 66 |
| RES_SHALLOW (ohm.m) | 22.17 | 66 |
| **Δ Res (Deep − Shallow)** | **-1.04** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2420 m MD — Interval 2415.0 – 2425.0 m

**Sample Description (spreadsheet):** Sample 2420m: Tr siderite in 0% Siltstone, Tr siderite in 100% fine  to  very coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 189U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f - v crs (max: VC) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 189 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 20.7 | 66 |
| RES_DEEP (ohm.m) | 20.43 | 66 |
| RES_SHALLOW (ohm.m) | 20.74 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.32** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2430 m MD — Interval 2425.0 – 2435.0 m

**Sample Description (spreadsheet):** Sample 2430m: Tr siderite in 5% Siltstone, Tr siderite in 95% fine  to  very coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 214U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f - v crs (max: VC) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 214 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 19.6 | 65 |
| RES_DEEP (ohm.m) | 19.45 | 65 |
| RES_SHALLOW (ohm.m) | 19.50 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.05** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2440 m MD — Interval 2435.0 – 2445.0 m

**Sample Description (spreadsheet):** Sample 2440m: Tr siderite in 0% Siltstone, Tr siderite in 100% fine  to  very coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 203U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f - v crs (max: VC) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 203 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2460m: med-dk gry,arg,micmic, sil,carb i/p,frm,sbblky-ang.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 19.6 | 66 |
| RES_DEEP (ohm.m) | 19.58 | 66 |
| RES_SHALLOW (ohm.m) | 19.44 | 66 |
| **Δ Res (Deep − Shallow)** | **0.14** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2450 m MD — Interval 2445.0 – 2455.0 m

**Sample Description (spreadsheet):** Sample 2450m: Tr siderite in 0% Siltstone, Tr siderite in 100% dominantly fine  to  coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 208U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | dom f - crs (max: C) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 208 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2460m: med-dk gry,arg,micmic, sil,carb i/p,frm,sbblky-ang.
- **SANDSTONE** @ ~2470m: clr,opq,trnsl,lt brn, trnsl,f-med,occ crs,mod srt,sbrnd, occ sbang-ang,wk sil cmt,mnr lt gry arg mtx,rr carb spks,fri,com lse,fr 2480 vis & fr-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 19.0 | 65 |
| RES_DEEP (ohm.m) | 18.50 | 65 |
| RES_SHALLOW (ohm.m) | 19.05 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.56** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2460 m MD — Interval 2455.0 – 2465.0 m

**Sample Description (spreadsheet):** Sample 2460m: 0 siderite in 0% Siltstone, 0 siderite in 100% fine  to  coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 164U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f - crs (max: C) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 164 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2460m: med-dk gry,arg,micmic, sil,carb i/p,frm,sbblky-ang.
- **SANDSTONE** @ ~2470m: clr,opq,trnsl,lt brn, trnsl,f-med,occ crs,mod srt,sbrnd, occ sbang-ang,wk sil cmt,mnr lt gry arg mtx,rr carb spks,fri,com lse,fr 2480 vis & fr-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 19.1 | 66 |
| RES_DEEP (ohm.m) | 18.56 | 66 |
| RES_SHALLOW (ohm.m) | 19.34 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.78** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2470 m MD — Interval 2465.0 – 2475.0 m

**Sample Description (spreadsheet):** Sample 2470m: trace siderite in 5% Siltstone, 0 siderite in 95% fine to medium, occasional coarse Sandstone, 80% moderately bright FLUOR in SST. TG 195U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med, occ crs (max: C) |
| Fluorescence | 80.0% mod bri |
| Total Gas | 195 U |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2460m: med-dk gry,arg,micmic, sil,carb i/p,frm,sbblky-ang.
- **SANDSTONE** @ ~2470m: clr,opq,trnsl,lt brn, trnsl,f-med,occ crs,mod srt,sbrnd, occ sbang-ang,wk sil cmt,mnr lt gry arg mtx,rr carb spks,fri,com lse,fr 2480 vis & fr-gd inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 18.9 | 66 |
| RES_DEEP (ohm.m) | 18.20 | 66 |
| RES_SHALLOW (ohm.m) | 19.19 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.99** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2480 m MD — Interval 2475.0 – 2485.0 m

**Sample Description (spreadsheet):** Sample 2480m: trace siderite in 0% Siltstone, 0 siderite in 100% fine  to  occasional medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 200U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f - occ med (max: M) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 200 U |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2460m: med-dk gry,arg,micmic, sil,carb i/p,frm,sbblky-ang.
- **SANDSTONE** @ ~2470m: clr,opq,trnsl,lt brn, trnsl,f-med,occ crs,mod srt,sbrnd, occ sbang-ang,wk sil cmt,mnr lt gry arg mtx,rr carb spks,fri,com lse,fr 2480 vis & fr-gd inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 18.6 | 65 |
| RES_DEEP (ohm.m) | 18.23 | 65 |
| RES_SHALLOW (ohm.m) | 18.72 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.50** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2490 m MD — Interval 2485.0 – 2495.0 m

**Sample Description (spreadsheet):** Sample 2490m: trace siderite in 0% Siltstone, 0 siderite in 100% fine  to  medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 194U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f - med (max: M) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 194 U |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2470m: clr,opq,trnsl,lt brn, trnsl,f-med,occ crs,mod srt,sbrnd, occ sbang-ang,wk sil cmt,mnr lt gry arg mtx,rr carb spks,fri,com lse,fr 2480 vis & fr-gd inf por,fluor.
- **SANDSTONE** @ ~2490m: clr,opq,trnsl,lt brn, trnsl,f-med,occ crs,mod srt,sbrnd, occ sbang-ang,wk sil cmt,mnr lt gry arg mtx,rr carb spks,fri,com lse,fr vis & fr-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 19.2 | 66 |
| RES_DEEP (ohm.m) | 18.37 | 66 |
| RES_SHALLOW (ohm.m) | 19.46 | 66 |
| **Δ Res (Deep − Shallow)** | **-1.09** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2500 m MD — Interval 2495.0 – 2505.0 m

**Sample Description (spreadsheet):** Sample 2500m: TR siderite in 0% Siltstone, 0 siderite in 100% fine  to  medium, occasional coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 207U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f - med, occ crs (max: C) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 207 U |
| FeCO₃ in Siltstone | TR |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2490m: clr,opq,trnsl,lt brn, trnsl,f-med,occ crs,mod srt,sbrnd, occ sbang-ang,wk sil cmt,mnr lt gry arg mtx,rr carb spks,fri,com lse,fr vis & fr-gd inf por,fluor.
- **SANDSTONE** @ ~2520m: clr,trnsl,opq,f-med, mod srt,sbrnd,sbang i/p,wk sil cmt, tr lt gry/brn arg mtx,fri & lse, fr vis por & fr-gd inf por,fluor. 0 0.5 1 4 14 2530 1 10 100 1K

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 19.6 | 66 |
| RES_DEEP (ohm.m) | 19.23 | 66 |
| RES_SHALLOW (ohm.m) | 19.60 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.37** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2510 m MD — Interval 2505.0 – 2515.0 m

**Sample Description (spreadsheet):** Sample 2510m: 0 siderite in 0% Siltstone, 0 siderite in 100% fine  to  medium, occasional coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 199U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f - med, occ crs (max: C) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 199 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2490m: clr,opq,trnsl,lt brn, trnsl,f-med,occ crs,mod srt,sbrnd, occ sbang-ang,wk sil cmt,mnr lt gry arg mtx,rr carb spks,fri,com lse,fr vis & fr-gd inf por,fluor.
- **SANDSTONE** @ ~2520m: clr,trnsl,opq,f-med, mod srt,sbrnd,sbang i/p,wk sil cmt, tr lt gry/brn arg mtx,fri & lse, fr vis por & fr-gd inf por,fluor. 0 0.5 1 4 14 2530 1 10 100 1K

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 19.0 | 65 |
| RES_DEEP (ohm.m) | 18.73 | 65 |
| RES_SHALLOW (ohm.m) | 18.99 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.27** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2550 m MD — Interval 2545.0 – 2555.0 m

**Sample Description (spreadsheet):** Sample 2550m: 0 siderite in 5% Siltstone, 0 siderite in 95% medium, occasional fine Sandstone, 80% dull  to  moderately bright FLUOR in SST. TG 111U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | med, occ f (max: M) |
| Fluorescence | 80.0% dll - mod bri |
| Total Gas | 111 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2540m: clr,trnsl,opq,vf-crs,pr (1248) srt,sbrnd-sbang,tr wk sil cmt,lt gry
- **SILTSTONE** @ ~2560m: med-dk gry,arg,grd to SST, sil,micmic,frm,blky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 15.3 | 66 |
| RES_DEEP (ohm.m) | 14.78 | 66 |
| RES_SHALLOW (ohm.m) | 15.89 | 66 |
| **Δ Res (Deep − Shallow)** | **-1.11** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2560 m MD — Interval 2555.0 – 2565.0 m

**Sample Description (spreadsheet):** Sample 2560m: 0 siderite in 40% Siltstone, 0 siderite in 60% very fine to coarse Sandstone, 50% dull  to  moderately bright FLUOR in SST. TG 109U

| Property | Value |
|----------|-------|
| % Sandstone | 60 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 50.0% dll - mod bri |
| Total Gas | 109 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 0 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2540m: clr,trnsl,opq,vf-crs,pr (1248) srt,sbrnd-sbang,tr wk sil cmt,lt gry
- **SILTSTONE** @ ~2560m: med-dk gry,arg,grd to SST, sil,micmic,frm,blky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 12.9 | 65 |
| RES_DEEP (ohm.m) | 12.08 | 65 |
| RES_SHALLOW (ohm.m) | 13.69 | 65 |
| **Δ Res (Deep − Shallow)** | **-1.62** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2570 m MD — Interval 2565.0 – 2575.0 m

**Sample Description (spreadsheet):** Sample 2570m: 0 siderite in 60% Siltstone, 10 siderite in 40% very fine to coarse Sandstone, 10% dull  to  moderately bright FLUOR in SST. TG 100U

| Property | Value |
|----------|-------|
| % Sandstone | 40 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 10.0% dll - mod bri |
| Total Gas | 100 U |
| FeCO₃ in Siltstone | 0 |
| FeCO₃ in Sandstone | 10 |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2560m: med-dk gry,arg,grd to SST, sil,micmic,frm,blky.
- **SANDSTONE** @ ~2560m: clr,trnsl,opq,vf-crs,pr srt,sbrnd-sbang,tr wk sil cmt,lt gry arg mtx,pred lse,fri i/p,fr vis & inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 13.3 | 66 |
| RES_DEEP (ohm.m) | 12.77 | 66 |
| RES_SHALLOW (ohm.m) | 13.93 | 66 |
| **Δ Res (Deep − Shallow)** | **-1.16** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2580 m MD — Interval 2575.0 – 2585.0 m

**Sample Description (spreadsheet):** Sample 2580m: trace siderite in 80% Siltstone, 20 siderite in 20% very fine to coarse Sandstone, 0.5% dull  to  moderately bright FLUOR in SST. TG 95U

| Property | Value |
|----------|-------|
| % Sandstone | 20 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 0.5% dll - mod bri |
| Total Gas | 95 U |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | 20 |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2560m: med-dk gry,arg,grd to SST, sil,micmic,frm,blky.
- **SANDSTONE** @ ~2560m: clr,trnsl,opq,vf-crs,pr srt,sbrnd-sbang,tr wk sil cmt,lt gry arg mtx,pred lse,fri i/p,fr vis & inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 13.3 | 36 |
| RES_DEEP (ohm.m) | 12.58 | 36 |
| RES_SHALLOW (ohm.m) | 14.01 | 36 |
| **Δ Res (Deep − Shallow)** | **-1.43** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2590 m MD — Interval 2585.0 – 2592.5 m

**Sample Description (spreadsheet):** Sample 2590m: trace siderite in 80% Siltstone, 25 siderite in 20% very fine to medium Sandstone, 0.5% dull  to  moderately bright FLUOR in SST. TG 90U

| Property | Value |
|----------|-------|
| % Sandstone | 20 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 0.5% dll - mod bri |
| Total Gas | 90 U |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | 25 |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2580m: clr,trnsl,opq,lt gry,vf-med, mod srt,sbrnd-occ sbang,wk sil cmt,lt gry arg mtx,occ carb spks,sid i/p,com lse, fri-mod frm i/p,pr vis & inf por,fluor. 4-1/2" LINER SHOE

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|

**Permeability Proxy:** Insufficient resistivity data
---

## 5. Summary Statistics (McKinlay Member)

| Metric | Value |
|--------|-------|
| Intervals analysed | 114 |
| Depth range | 1715 – 2590 m |
| Avg % Sandstone | 78.9% |
| Avg Δ Res (Deep−Shallow) | -1.83 ohm.m |
| Max Δ Res | 0.14 ohm.m |
| Min Δ Res | -6.51 ohm.m |
| Mudlog matches | 60 / 114 |
