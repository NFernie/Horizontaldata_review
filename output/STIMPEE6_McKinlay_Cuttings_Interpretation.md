# STIMPEE 6 — McKinlay Member Cuttings & Log Interpretation

**Generated:** 2026-07-07 02:31 UTC  
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

## 2. Formation Top Analysis

### 2.1 Key Tops

| Marker | Depth (m MD) | Source |
|--------|-------------|--------|
| DC30 | 1631.04 | DC30.xlsx |
| McKinlay Member (shallowest) | 1632.38 | Mck_Murta.xlsx |

### 2.2 McKinlay Member Top Classification

**Target re-entry (McKinlay without paired Murta):**
- 1632.38 m MD
- 1993.00 m MD
- 2396.93 m MD
- 2939.30 m MD

**Overburden intersections (McKinlay ≈ Murta within 5 m):**
| McKinlay (m MD) | Murta (m MD) | Δ (m) |
|-----------------|-------------|-------|
| 1767.21 | 1765.88 | 1.33 |
| 1954.34 | 1956.00 | 1.66 |
| 2353.86 | 2352.74 | 1.12 |
| 2845.46 | 2844.00 | 1.46 |

**McKinlay Member analysis window:** 1632.4 – 3186.1 m MD

**Excluded zones (±10 m around overburden & target re-entry tops):** 1757–1777 (overburden), 1944–1964 (overburden), 2344–2364 (overburden), 2835–2855 (overburden), 1622–1642 (target_reentry), 1983–2003 (target_reentry), 2387–2407 (target_reentry), 2929–2949 (target_reentry)

**Samples in McKinlay Member:** 143 of 185 total
- Excluded pre-reservoir: 19
- Excluded overburden intersections: 12
- Excluded target re-entry tops: 11

## 3. Known Shortcomings

> **Read this section before using the output.**

1. **Mudlog PDF text extraction is imperfect.** Depth-to-description assignment uses ±15 m proximity heuristics.
2. **Formation top discrepancies** between Mck_Murta.xlsx and mudlog PDF picks are noted where present.
3. **Well name mapping:** STIMPEE 6 → `STIMPEE 6` (verified by TD and LAS WELL header).
4. **Sample intervals** are midpoints between consecutive sample depths — variable widths where spacing is irregular.
5. **Resistivity permeability proxy** is qualitative only (Δ Res = RES_DEEP − RES_SHALLOW).
6. **NULL LAS values** (-999.25) excluded from averages.
7. **Exclusion zones** use ±10 m around paired overburden tops AND McKinlay target re-entry tops without Murta pairs.
8. **Input Sheet only** — Calculations Sheet not used.

## 4. McKinlay Member Sample Intervals

Each section: depth interval, spreadsheet sample, mudlog cuttings, wireline log averages.

### 1645 m MD — Interval 1642.5 – 1647.5 m

**Sample Description (spreadsheet):** Sample 1645m: 0% Siltstone, Tr siderite in 100% fine to medium, rare coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 267U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 267 U |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1660m: lt brn,trnsl,opq,lt gry,vf-med,rr crs,dom f agg,mod wl srt, dom sbang-sbrnd,com wk sil cmt,mnr lt brn-lt gry arg mtx,tr carb flks & micrlams,rr sid,fri agg,mnr-com lse,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.3 | 33 |
| RES_DEEP (ohm.m) | 43.34 | 33 |
| RES_SHALLOW (ohm.m) | 42.54 | 33 |
| **Δ Res (Deep − Shallow)** | **0.80** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1650 m MD — Interval 1647.5 – 1652.5 m

**Sample Description (spreadsheet):** Sample 1650m: 5% Siltstone, 95% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 224U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100.0% bri |
| Total Gas | 224 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1660m: lt brn,trnsl,opq,lt gry,vf-med,rr crs,dom f agg,mod wl srt, dom sbang-sbrnd,com wk sil cmt,mnr lt brn-lt gry arg mtx,tr carb flks & micrlams,rr sid,fri agg,mnr-com lse,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.0 | 33 |
| RES_DEEP (ohm.m) | 41.12 | 33 |
| RES_SHALLOW (ohm.m) | 39.74 | 33 |
| **Δ Res (Deep − Shallow)** | **1.38** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1655 m MD — Interval 1652.5 – 1657.5 m

**Sample Description (spreadsheet):** Sample 1655m: 0% Siltstone, Tr siderite in 100% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 235U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100.0% bri |
| Total Gas | 235 U |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1660m: lt brn,trnsl,opq,lt gry,vf-med,rr crs,dom f agg,mod wl srt, dom sbang-sbrnd,com wk sil cmt,mnr lt brn-lt gry arg mtx,tr carb flks & micrlams,rr sid,fri agg,mnr-com lse,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.5 | 32 |
| RES_DEEP (ohm.m) | 35.81 | 32 |
| RES_SHALLOW (ohm.m) | 35.23 | 32 |
| **Δ Res (Deep − Shallow)** | **0.58** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1660 m MD — Interval 1657.5 – 1662.5 m

**Sample Description (spreadsheet):** Sample 1660m: 0% Siltstone, rare siderite in 100% dominantly fine to medium, rare coarse Sandstone, 100% bright FLUOR in SST. TG 185U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | dom f-med, rr crs (max: C) |
| Fluorescence | 100.0% bri |
| Total Gas | 185 U |
| FeCO₃ in Sandstone | rr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1660m: lt brn,trnsl,opq,lt gry,vf-med,rr crs,dom f agg,mod wl srt, dom sbang-sbrnd,com wk sil cmt,mnr lt brn-lt gry arg mtx,tr carb flks & micrlams,rr sid,fri agg,mnr-com lse,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.6 | 33 |
| RES_DEEP (ohm.m) | 36.49 | 33 |
| RES_SHALLOW (ohm.m) | 34.61 | 33 |
| **Δ Res (Deep − Shallow)** | **1.88** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1665 m MD — Interval 1662.5 – 1667.5 m

**Sample Description (spreadsheet):** Sample 1665m: 5% Siltstone, rare siderite in 95% very fine to medium, rare coarse Sandstone, 100% bright FLUOR in SST. TG 179U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-med, rr crs (max: C) |
| Fluorescence | 100.0% bri |
| Total Gas | 179 U |
| FeCO₃ in Sandstone | rr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1660m: lt brn,trnsl,opq,lt gry,vf-med,rr crs,dom f agg,mod wl srt, dom sbang-sbrnd,com wk sil cmt,mnr lt brn-lt gry arg mtx,tr carb flks & micrlams,rr sid,fri agg,mnr-com lse,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.3 | 33 |
| RES_DEEP (ohm.m) | 34.02 | 33 |
| RES_SHALLOW (ohm.m) | 32.27 | 33 |
| **Δ Res (Deep − Shallow)** | **1.75** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1670 m MD — Interval 1667.5 – 1672.5 m

**Sample Description (spreadsheet):** Sample 1670m: 0% Siltstone, rare siderite in 100% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 218U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100.0% bri |
| Total Gas | 218 U |
| FeCO₃ in Sandstone | rr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1660m: lt brn,trnsl,opq,lt gry,vf-med,rr crs,dom f agg,mod wl srt, dom sbang-sbrnd,com wk sil cmt,mnr lt brn-lt gry arg mtx,tr carb flks & micrlams,rr sid,fri agg,mnr-com lse,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 52.6 | 33 |
| RES_DEEP (ohm.m) | 38.70 | 33 |
| RES_SHALLOW (ohm.m) | 39.33 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.63** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1675 m MD — Interval 1672.5 – 1677.5 m

**Sample Description (spreadsheet):** Sample 1675m: 0% Siltstone, rare siderite in 100% very fine to coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 378U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 378 U |
| FeCO₃ in Sandstone | rr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1660m: lt brn,trnsl,opq,lt gry,vf-med,rr crs,dom f agg,mod wl srt, dom sbang-sbrnd,com wk sil cmt,mnr lt brn-lt gry arg mtx,tr carb flks & micrlams,rr sid,fri agg,mnr-com lse,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 64.7 | 33 |
| RES_DEEP (ohm.m) | 48.09 | 33 |
| RES_SHALLOW (ohm.m) | 49.87 | 33 |
| **Δ Res (Deep − Shallow)** | **-1.78** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1680 m MD — Interval 1677.5 – 1685.0 m

**Sample Description (spreadsheet):** Sample 1680m: 0% Siltstone, rare siderite in 100% fine to coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 370U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 370 U |
| FeCO₃ in Sandstone | rr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 62.6 | 49 |
| RES_DEEP (ohm.m) | 44.41 | 49 |
| RES_SHALLOW (ohm.m) | 44.63 | 49 |
| **Δ Res (Deep − Shallow)** | **-0.22** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1690 m MD — Interval 1685.0 – 1695.0 m

**Sample Description (spreadsheet):** Sample 1690m:   siderite in 0% Siltstone, 100% fine to verycoarse Sandstone, 100% bright FLUOR in SST. TG 312U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-vcrs (max: VC) |
| Fluorescence | 100.0% bri |
| Total Gas | 312 U |
| FeCO₃ in Siltstone |   |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1710m: lt brn,opq,trnsl,lt gry,f-crs,dom med,mod srt, sbang- 70 / 6 / 5 / 8 / 11 432 U sbrnd,mnr wk-occ mod strg sil cmt, mnr-tr lt gry arg mtx,tr carb flks, 1720 rr sid,fri-mod hd agg,com lse,v pr-fr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.9 | 66 |
| RES_DEEP (ohm.m) | 44.64 | 66 |
| RES_SHALLOW (ohm.m) | 43.01 | 66 |
| **Δ Res (Deep − Shallow)** | **1.63** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1700 m MD — Interval 1695.0 – 1705.0 m

**Sample Description (spreadsheet):** Sample 1700m: 0% Siltstone, 100% very fine to verycoarse Sandstone, 100% bright FLUOR in SST. TG 399U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-vcrs (max: VC) |
| Fluorescence | 100.0% bri |
| Total Gas | 399 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1710m: lt brn,opq,trnsl,lt gry,f-crs,dom med,mod srt, sbang- 70 / 6 / 5 / 8 / 11 432 U sbrnd,mnr wk-occ mod strg sil cmt, mnr-tr lt gry arg mtx,tr carb flks, 1720 rr sid,fri-mod hd agg,com lse,v pr-fr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.5 | 65 |
| RES_DEEP (ohm.m) | 45.59 | 65 |
| RES_SHALLOW (ohm.m) | 45.72 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.13** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1710 m MD — Interval 1705.0 – 1715.0 m

**Sample Description (spreadsheet):** Sample 1710m: 0% Siltstone, 100% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 340U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100.0% bri |
| Total Gas | 340 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1710m: lt brn,opq,trnsl,lt gry,f-crs,dom med,mod srt, sbang- 70 / 6 / 5 / 8 / 11 432 U sbrnd,mnr wk-occ mod strg sil cmt, mnr-tr lt gry arg mtx,tr carb flks, 1720 rr sid,fri-mod hd agg,com lse,v pr-fr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.5 | 66 |
| RES_DEEP (ohm.m) | 44.84 | 66 |
| RES_SHALLOW (ohm.m) | 45.68 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.85** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1720 m MD — Interval 1715.0 – 1725.0 m

**Sample Description (spreadsheet):** Sample 1720m: 0% Siltstone, 100% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 432U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100.0% bri |
| Total Gas | 432 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1710m: lt brn,opq,trnsl,lt gry,f-crs,dom med,mod srt, sbang- 70 / 6 / 5 / 8 / 11 432 U sbrnd,mnr wk-occ mod strg sil cmt, mnr-tr lt gry arg mtx,tr carb flks, 1720 rr sid,fri-mod hd agg,com lse,v pr-fr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.3 | 65 |
| RES_DEEP (ohm.m) | 45.78 | 65 |
| RES_SHALLOW (ohm.m) | 46.56 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.78** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1730 m MD — Interval 1725.0 – 1735.0 m

**Sample Description (spreadsheet):** Sample 1730m: 5% Siltstone, 95% fine to medium,trace coarse Sandstone, 100% bright FLUOR in SST. TG 404U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med,tr crs (max: C) |
| Fluorescence | 100.0% bri |
| Total Gas | 404 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1710m: lt brn,opq,trnsl,lt gry,f-crs,dom med,mod srt, sbang- 70 / 6 / 5 / 8 / 11 432 U sbrnd,mnr wk-occ mod strg sil cmt, mnr-tr lt gry arg mtx,tr carb flks, 1720 rr sid,fri-mod hd agg,com lse,v pr-fr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.5 | 66 |
| RES_DEEP (ohm.m) | 42.67 | 66 |
| RES_SHALLOW (ohm.m) | 38.94 | 66 |
| **Δ Res (Deep − Shallow)** | **3.72** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1740 m MD — Interval 1735.0 – 1745.0 m

**Sample Description (spreadsheet):** Sample 1740m: 10% Siltstone, 90% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 351U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100.0% bri |
| Total Gas | 351 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.1 | 66 |
| RES_DEEP (ohm.m) | 45.01 | 66 |
| RES_SHALLOW (ohm.m) | 43.76 | 66 |
| **Δ Res (Deep − Shallow)** | **1.25** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1750 m MD — Interval 1745.0 – 1755.0 m

**Sample Description (spreadsheet):** Sample 1750m: 0% Siltstone, 100% fine to medium,trace coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 478U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med,tr crs (max: C) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 478 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.0 | 65 |
| RES_DEEP (ohm.m) | 40.48 | 65 |
| RES_SHALLOW (ohm.m) | 41.51 | 65 |
| **Δ Res (Deep − Shallow)** | **-1.03** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1790 m MD — Interval 1785.0 – 1795.0 m

**Sample Description (spreadsheet):** Sample 1790m: 10% Siltstone, 90% very fine to medium  Sandstone, 80% moderately bright to bright FLUOR in SST. TG 213U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-med  (max: M) |
| Fluorescence | 80.0% mod bri-bri |
| Total Gas | 213 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1790m: lt brn,trnsl,opq,vf-crs, mod-wl srt,sbang-sbrnd,com wk sil cmt,tr-mnr brn slty-arg mtx,tr sid, tr carb flks,com slty sand,fri-occ mod hd,mnr-com lse,v pr vis por,fr inf

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.3 | 66 |
| RES_DEEP (ohm.m) | 34.23 | 66 |
| RES_SHALLOW (ohm.m) | 30.18 | 66 |
| **Δ Res (Deep − Shallow)** | **4.05** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1800 m MD — Interval 1795.0 – 1805.0 m

**Sample Description (spreadsheet):** Sample 1800m: 5% Siltstone, rare siderite in 95% fine to medium,trace coarse Sandstone, 100% bright  FLUOR in SST. TG 222U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med,tr crs (max: C) |
| Fluorescence | 100.0% bri  |
| Total Gas | 222 U |
| FeCO₃ in Sandstone | rr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1790m: lt brn,trnsl,opq,vf-crs, mod-wl srt,sbang-sbrnd,com wk sil cmt,tr-mnr brn slty-arg mtx,tr sid, tr carb flks,com slty sand,fri-occ mod hd,mnr-com lse,v pr vis por,fr inf

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.5 | 65 |
| RES_DEEP (ohm.m) | 37.21 | 65 |
| RES_SHALLOW (ohm.m) | 31.91 | 65 |
| **Δ Res (Deep − Shallow)** | **5.29** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1810 m MD — Interval 1805.0 – 1815.0 m

**Sample Description (spreadsheet):** Sample 1810m: 20% Siltstone, 80% very fine to fine, rare coarse Sandstone, 100% bright FLUOR in SST. TG 125U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | vf-f, rr crs (max: C) |
| Fluorescence | 100.0% bri |
| Total Gas | 125 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1790m: lt brn,trnsl,opq,vf-crs, mod-wl srt,sbang-sbrnd,com wk sil cmt,tr-mnr brn slty-arg mtx,tr sid, tr carb flks,com slty sand,fri-occ mod hd,mnr-com lse,v pr vis por,fr inf

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.8 | 66 |
| RES_DEEP (ohm.m) | 28.90 | 66 |
| RES_SHALLOW (ohm.m) | 25.39 | 66 |
| **Δ Res (Deep − Shallow)** | **3.52** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1820 m MD — Interval 1815.0 – 1825.0 m

**Sample Description (spreadsheet):** Sample 1820m: 50% Siltstone, 50% very fine to fine, rare coarse Sandstone, 100% bright FLUOR in SST. TG 195U

| Property | Value |
|----------|-------|
| % Sandstone | 50 |
| Grain Size | vf-f, rr crs (max: C) |
| Fluorescence | 100.0% bri |
| Total Gas | 195 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.2 | 66 |
| RES_DEEP (ohm.m) | 27.69 | 66 |
| RES_SHALLOW (ohm.m) | 24.68 | 66 |
| **Δ Res (Deep − Shallow)** | **3.01** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1830 m MD — Interval 1825.0 – 1835.0 m

**Sample Description (spreadsheet):** Sample 1830m: 20% Siltstone, 80% very fine to fine, rare coarse Sandstone, 100% moderately bright FLUOR in SST. TG 152U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | vf-f, rr crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 152 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.3 | 65 |
| RES_DEEP (ohm.m) | 28.52 | 65 |
| RES_SHALLOW (ohm.m) | 25.94 | 65 |
| **Δ Res (Deep − Shallow)** | **2.57** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1840 m MD — Interval 1835.0 – 1845.0 m

**Sample Description (spreadsheet):** Sample 1840m: 10% Siltstone, 90% very fine to fine, rare coarse Sandstone, 100% moderately bright FLUOR in SST. TG 235U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-f, rr crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 235 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.5 | 66 |
| RES_DEEP (ohm.m) | 30.70 | 66 |
| RES_SHALLOW (ohm.m) | 28.04 | 66 |
| **Δ Res (Deep − Shallow)** | **2.66** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1850 m MD — Interval 1845.0 – 1855.0 m

**Sample Description (spreadsheet):** Sample 1850m: 0% Siltstone, 100% very fine to fine, rare coarse Sandstone, 100% bright FLUOR in SST. TG 183U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f, rr crs (max: C) |
| Fluorescence | 100.0% bri |
| Total Gas | 183 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.2 | 65 |
| RES_DEEP (ohm.m) | 31.39 | 65 |
| RES_SHALLOW (ohm.m) | 27.96 | 65 |
| **Δ Res (Deep − Shallow)** | **3.42** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1860 m MD — Interval 1855.0 – 1865.0 m

**Sample Description (spreadsheet):** Sample 1860m: 0% Siltstone, 100% very fine to fine, rare coarse Sandstone, 100% bright FLUOR in SST. TG 185U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f, rr crs (max: C) |
| Fluorescence | 100.0% bri |
| Total Gas | 185 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1880m: lt-med gry,rr dk gry, aren,tr micmic,com carb spks & miclam, com sandy lams,tr liths,mod hd-hd, sbblky-sbfiss. 73 / 6 / 4 / 7 / 10

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.9 | 66 |
| RES_DEEP (ohm.m) | 34.22 | 66 |
| RES_SHALLOW (ohm.m) | 30.85 | 66 |
| **Δ Res (Deep − Shallow)** | **3.37** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1870 m MD — Interval 1865.0 – 1875.0 m

**Sample Description (spreadsheet):** Sample 1870m: 0% Siltstone, 100% very fine to fine, rare coarse Sandstone, 100% bright FLUOR in SST. TG 190U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f, rr crs (max: C) |
| Fluorescence | 100.0% bri |
| Total Gas | 190 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1880m: lt-med gry,rr dk gry, aren,tr micmic,com carb spks & miclam, com sandy lams,tr liths,mod hd-hd, sbblky-sbfiss. 73 / 6 / 4 / 7 / 10
- **SANDSTONE** @ ~1890m: v pl brn,off wh,trnsl,clr, vf-crs,ang-sbrnd,pr srt,wk sil cmt, tr wh-off wh arg mtx,loc com slty lams, com crs frstd qtz grs,lse-mod hd aggs, fr vis & inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.5 | 66 |
| RES_DEEP (ohm.m) | 33.35 | 66 |
| RES_SHALLOW (ohm.m) | 30.04 | 66 |
| **Δ Res (Deep − Shallow)** | **3.30** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1880 m MD — Interval 1875.0 – 1882.5 m

**Sample Description (spreadsheet):** Sample 1880m: 10% Siltstone, 90% very fine to fine Sandstone, 100% bright FLUOR in SST. TG 124U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100.0% bri |
| Total Gas | 124 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1880m: lt-med gry,rr dk gry, aren,tr micmic,com carb spks & miclam, com sandy lams,tr liths,mod hd-hd, sbblky-sbfiss. 73 / 6 / 4 / 7 / 10
- **SANDSTONE** @ ~1890m: v pl brn,off wh,trnsl,clr, vf-crs,ang-sbrnd,pr srt,wk sil cmt, tr wh-off wh arg mtx,loc com slty lams, com crs frstd qtz grs,lse-mod hd aggs, fr vis & inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.9 | 49 |
| RES_DEEP (ohm.m) | 31.23 | 49 |
| RES_SHALLOW (ohm.m) | 27.35 | 49 |
| **Δ Res (Deep − Shallow)** | **3.88** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1885 m MD — Interval 1882.5 – 1887.5 m

**Sample Description (spreadsheet):** Sample 1885m: 30% Siltstone, 70% very fine to fine, rare coarse Sandstone, 100% moderately bright FLUOR in SST. TG 135U

| Property | Value |
|----------|-------|
| % Sandstone | 70 |
| Grain Size | vf-f, rr crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 135 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1880m: lt-med gry,rr dk gry, aren,tr micmic,com carb spks & miclam, com sandy lams,tr liths,mod hd-hd, sbblky-sbfiss. 73 / 6 / 4 / 7 / 10
- **SANDSTONE** @ ~1890m: v pl brn,off wh,trnsl,clr, vf-crs,ang-sbrnd,pr srt,wk sil cmt, tr wh-off wh arg mtx,loc com slty lams, com crs frstd qtz grs,lse-mod hd aggs, fr vis & inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.0 | 33 |
| RES_DEEP (ohm.m) | 35.53 | 33 |
| RES_SHALLOW (ohm.m) | 30.41 | 33 |
| **Δ Res (Deep − Shallow)** | **5.12** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1890 m MD — Interval 1887.5 – 1892.5 m

**Sample Description (spreadsheet):** Sample 1890m: 20% Siltstone, 80% very fine to fine Sandstone, 100% moderately bright FLUOR in SST. TG 160U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 160 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1880m: lt-med gry,rr dk gry, aren,tr micmic,com carb spks & miclam, com sandy lams,tr liths,mod hd-hd, sbblky-sbfiss. 73 / 6 / 4 / 7 / 10
- **SANDSTONE** @ ~1890m: v pl brn,off wh,trnsl,clr, vf-crs,ang-sbrnd,pr srt,wk sil cmt, tr wh-off wh arg mtx,loc com slty lams, com crs frstd qtz grs,lse-mod hd aggs, fr vis & inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.5 | 32 |
| RES_DEEP (ohm.m) | 36.75 | 32 |
| RES_SHALLOW (ohm.m) | 30.99 | 32 |
| **Δ Res (Deep − Shallow)** | **5.76** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1895 m MD — Interval 1892.5 – 1897.5 m

**Sample Description (spreadsheet):** Sample 1895m: 15% Siltstone, 85% very fine to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 130U

| Property | Value |
|----------|-------|
| % Sandstone | 85 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 130 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1880m: lt-med gry,rr dk gry, aren,tr micmic,com carb spks & miclam, com sandy lams,tr liths,mod hd-hd, sbblky-sbfiss. 73 / 6 / 4 / 7 / 10
- **SANDSTONE** @ ~1890m: v pl brn,off wh,trnsl,clr, vf-crs,ang-sbrnd,pr srt,wk sil cmt, tr wh-off wh arg mtx,loc com slty lams, com crs frstd qtz grs,lse-mod hd aggs, fr vis & inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.5 | 33 |
| RES_DEEP (ohm.m) | 35.93 | 33 |
| RES_SHALLOW (ohm.m) | 31.44 | 33 |
| **Δ Res (Deep − Shallow)** | **4.50** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1900 m MD — Interval 1897.5 – 1902.5 m

**Sample Description (spreadsheet):** Sample 1900m: 5% Siltstone, 95% very fine to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 175U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 175 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1890m: v pl brn,off wh,trnsl,clr, vf-crs,ang-sbrnd,pr srt,wk sil cmt, tr wh-off wh arg mtx,loc com slty lams, com crs frstd qtz grs,lse-mod hd aggs, fr vis & inf por,fluor.
- **SANDSTONE** @ ~1910m: pl brn,v lt gry brn, off wh,trnsl,vf-f,rr crs,mod wl srt, 76 / 6 / 4 / 6 / 8 208 U sbang-sbrnd,sil cmt,tr wh-off wh arg mtx,tr slty lams,rr mic,fri-mod hd, pr vis por,bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.1 | 33 |
| RES_DEEP (ohm.m) | 43.21 | 33 |
| RES_SHALLOW (ohm.m) | 40.62 | 33 |
| **Δ Res (Deep − Shallow)** | **2.59** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1905 m MD — Interval 1902.5 – 1907.5 m

**Sample Description (spreadsheet):** Sample 1905m: 10% Siltstone, 90% very fine to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 206U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 206 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1890m: v pl brn,off wh,trnsl,clr, vf-crs,ang-sbrnd,pr srt,wk sil cmt, tr wh-off wh arg mtx,loc com slty lams, com crs frstd qtz grs,lse-mod hd aggs, fr vis & inf por,fluor.
- **SANDSTONE** @ ~1910m: pl brn,v lt gry brn, off wh,trnsl,vf-f,rr crs,mod wl srt, 76 / 6 / 4 / 6 / 8 208 U sbang-sbrnd,sil cmt,tr wh-off wh arg mtx,tr slty lams,rr mic,fri-mod hd, pr vis por,bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.0 | 33 |
| RES_DEEP (ohm.m) | 43.85 | 33 |
| RES_SHALLOW (ohm.m) | 43.33 | 33 |
| **Δ Res (Deep − Shallow)** | **0.52** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1910 m MD — Interval 1907.5 – 1912.5 m

**Sample Description (spreadsheet):** Sample 1910m: 5% Siltstone, 95% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 145U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100.0% bri |
| Total Gas | 145 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1910m: pl brn,v lt gry brn, off wh,trnsl,vf-f,rr crs,mod wl srt, 76 / 6 / 4 / 6 / 8 208 U sbang-sbrnd,sil cmt,tr wh-off wh arg mtx,tr slty lams,rr mic,fri-mod hd, pr vis por,bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.8 | 33 |
| RES_DEEP (ohm.m) | 45.96 | 33 |
| RES_SHALLOW (ohm.m) | 45.50 | 33 |
| **Δ Res (Deep − Shallow)** | **0.47** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1915 m MD — Interval 1912.5 – 1917.5 m

**Sample Description (spreadsheet):** Sample 1915m: 5% Siltstone, 95% very fine to fine, rare coarse Sandstone, 100% bright FLUOR in SST. TG 166U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-f, rr crs (max: C) |
| Fluorescence | 100.0% bri |
| Total Gas | 166 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1910m: pl brn,v lt gry brn, off wh,trnsl,vf-f,rr crs,mod wl srt, 76 / 6 / 4 / 6 / 8 208 U sbang-sbrnd,sil cmt,tr wh-off wh arg mtx,tr slty lams,rr mic,fri-mod hd, pr vis por,bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.7 | 33 |
| RES_DEEP (ohm.m) | 48.03 | 33 |
| RES_SHALLOW (ohm.m) | 48.35 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.32** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1920 m MD — Interval 1917.5 – 1922.5 m

**Sample Description (spreadsheet):** Sample 1920m: 5% Siltstone, 95% very fine to fine, rare coarse Sandstone, 100% bright FLUOR in SST. TG 189U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-f, rr crs (max: C) |
| Fluorescence | 100.0% bri |
| Total Gas | 189 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1910m: pl brn,v lt gry brn, off wh,trnsl,vf-f,rr crs,mod wl srt, 76 / 6 / 4 / 6 / 8 208 U sbang-sbrnd,sil cmt,tr wh-off wh arg mtx,tr slty lams,rr mic,fri-mod hd, pr vis por,bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.2 | 32 |
| RES_DEEP (ohm.m) | 50.00 | 32 |
| RES_SHALLOW (ohm.m) | 48.85 | 32 |
| **Δ Res (Deep − Shallow)** | **1.15** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1925 m MD — Interval 1922.5 – 1927.5 m

**Sample Description (spreadsheet):** Sample 1925m: 5% Siltstone, 95% very fine to fine, rare coarse Sandstone, 100% bright FLUOR in SST. TG 267U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-f, rr crs (max: C) |
| Fluorescence | 100.0% bri |
| Total Gas | 267 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1910m: pl brn,v lt gry brn, off wh,trnsl,vf-f,rr crs,mod wl srt, 76 / 6 / 4 / 6 / 8 208 U sbang-sbrnd,sil cmt,tr wh-off wh arg mtx,tr slty lams,rr mic,fri-mod hd, pr vis por,bri fluor.
- **SANDSTONE** @ ~1940m: v lt gry brn,trnsl, off wh,vf-f,wl srt,sbrnd-sbang,sil cmt,tr off wh arg mtx,tr slty lams, rr carb spks,fri-mod hd,pr vis por, mod bri-bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.0 | 33 |
| RES_DEEP (ohm.m) | 48.45 | 33 |
| RES_SHALLOW (ohm.m) | 48.49 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.03** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1930 m MD — Interval 1927.5 – 1935.0 m

**Sample Description (spreadsheet):** Sample 1930m: 5% Siltstone, 95% very fine to fine, rare coarse Sandstone, 100% bright FLUOR in SST. TG 191U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-f, rr crs (max: C) |
| Fluorescence | 100.0% bri |
| Total Gas | 191 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1940m: v lt gry brn,trnsl, off wh,vf-f,wl srt,sbrnd-sbang,sil cmt,tr off wh arg mtx,tr slty lams, rr carb spks,fri-mod hd,pr vis por, mod bri-bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.2 | 49 |
| RES_DEEP (ohm.m) | 53.60 | 49 |
| RES_SHALLOW (ohm.m) | 49.13 | 49 |
| **Δ Res (Deep − Shallow)** | **4.48** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1970 m MD — Interval 1965.0 – 1975.0 m

**Sample Description (spreadsheet):** Sample 1970m: common siderite in 70% Siltstone, 30% very fine to fine Sandstone, 50% moderately bright FLUOR in SST. TG 150U

| Property | Value |
|----------|-------|
| % Sandstone | 30 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 50.0% mod bri |
| Total Gas | 150 U |
| FeCO₃ in Siltstone | com |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1960m: lt-med gry,med brn gry,aren,micmic,com sid frags,tr 46 / 6 / 8 / 16 / 24 liths,mod hd-hd,blky-sbblky.
- **SANDSTONE** @ ~1970m: pl brn,lt brn gry,off wh,vf-f,grd to SLTST,wl srt,sbang- sbrnd,sil cmt tr off wh arg mtx,com slty lams,loc com sid,tr liths,fri- mod hd,pr vis por,dll-mod bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 126.1 | 66 |
| RES_DEEP (ohm.m) | 15.42 | 66 |
| RES_SHALLOW (ohm.m) | 13.91 | 66 |
| **Δ Res (Deep − Shallow)** | **1.52** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2010 m MD — Interval 2005.0 – 2015.0 m

**Sample Description (spreadsheet):** Sample 2010m: trace siderite in 20% Siltstone, 80% very fine to fine, rare coarse Sandstone, 100% bright FLUOR in SST. TG 135U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | vf-f, rr crs (max: C) |
| Fluorescence | 100.0% bri |
| Total Gas | 135 U |
| FeCO₃ in Siltstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2010m: pl brn,lt brn gry, 72 / 6 / 4 / 7 / 11 176 U trnsl,vf-f,mnr med,rr crs,mod srt, sbang-sbrnd,sil cmt,tr off wh arg mtx, com slty lams,rr carb spks,fri-mod hd,pr vis por,bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.7 | 65 |
| RES_DEEP (ohm.m) | 30.26 | 65 |
| RES_SHALLOW (ohm.m) | 26.77 | 65 |
| **Δ Res (Deep − Shallow)** | **3.49** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2020 m MD — Interval 2015.0 – 2025.0 m

**Sample Description (spreadsheet):** Sample 2020m: 10% Siltstone, 90% very fine to fine,trace medium,rare coarse Sandstone, 80% moderately bright to bright FLUOR in SST. TG 154U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-f,tr med,rr crs (max: C) |
| Fluorescence | 80.0% mod bri-bri |
| Total Gas | 154 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2010m: pl brn,lt brn gry, 72 / 6 / 4 / 7 / 11 176 U trnsl,vf-f,mnr med,rr crs,mod srt, sbang-sbrnd,sil cmt,tr off wh arg mtx, com slty lams,rr carb spks,fri-mod hd,pr vis por,bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.8 | 66 |
| RES_DEEP (ohm.m) | 23.69 | 66 |
| RES_SHALLOW (ohm.m) | 21.09 | 66 |
| **Δ Res (Deep − Shallow)** | **2.60** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2030 m MD — Interval 2025.0 – 2035.0 m

**Sample Description (spreadsheet):** Sample 2030m: trace siderite in 30% Siltstone, 70% very fine to medium, rare coarse Sandstone, 50% moderately bright to bright FLUOR in SST. TG 165U

| Property | Value |
|----------|-------|
| % Sandstone | 70 |
| Grain Size | vf-med, rr crs (max: C) |
| Fluorescence | 50.0% mod bri-bri |
| Total Gas | 165 U |
| FeCO₃ in Siltstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2010m: pl brn,lt brn gry, 72 / 6 / 4 / 7 / 11 176 U trnsl,vf-f,mnr med,rr crs,mod srt, sbang-sbrnd,sil cmt,tr off wh arg mtx, com slty lams,rr carb spks,fri-mod hd,pr vis por,bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.9 | 66 |
| RES_DEEP (ohm.m) | 23.76 | 66 |
| RES_SHALLOW (ohm.m) | 21.49 | 66 |
| **Δ Res (Deep − Shallow)** | **2.27** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2040 m MD — Interval 2035.0 – 2045.0 m

**Sample Description (spreadsheet):** Sample 2040m: trace siderite in 10% Siltstone, rare siderite in 90% very fine to medium, rare coarse Sandstone, 80% moderately bright to bright FLUOR in SST. TG 200U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-med, rr crs (max: C) |
| Fluorescence | 80.0% mod bri-bri |
| Total Gas | 200 U |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | rr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.8 | 65 |
| RES_DEEP (ohm.m) | 25.31 | 65 |
| RES_SHALLOW (ohm.m) | 23.39 | 65 |
| **Δ Res (Deep − Shallow)** | **1.92** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2050 m MD — Interval 2045.0 – 2055.0 m

**Sample Description (spreadsheet):** Sample 2050m: 10% Siltstone, rare siderite in 90% very fine to fine, minor medium Sandstone, 80% moderately bright to bright FLUOR in SST. TG 150U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-f, mnr med (max: M) |
| Fluorescence | 80.0% mod bri-bri |
| Total Gas | 150 U |
| FeCO₃ in Sandstone | rr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2070m: med gry,gry brn,lt gry,arg,com aren i/p,grd to vf SST, com sandy lams,tr-mnr carb flks & micrlams,trmicmic,frm-hd,sbblky- micrlams,tr micmic,frmhd,sbblky

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.2 | 66 |
| RES_DEEP (ohm.m) | 23.14 | 66 |
| RES_SHALLOW (ohm.m) | 21.72 | 66 |
| **Δ Res (Deep − Shallow)** | **1.42** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2060 m MD — Interval 2055.0 – 2065.0 m

**Sample Description (spreadsheet):** Sample 2060m: 5% Siltstone, 95% very fine to fine, minor medium Sandstone, 80% moderately bright to bright FLUOR in SST. TG 195U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-f, mnr med (max: M ) |
| Fluorescence | 80.0% mod bri-bri |
| Total Gas | 195 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2070m: med gry,gry brn,lt gry,arg,com aren i/p,grd to vf SST, com sandy lams,tr-mnr carb flks & micrlams,trmicmic,frm-hd,sbblky- micrlams,tr micmic,frmhd,sbblky
- **SANDSTONE** @ ~2080m: clr,trnsl,opq,lt gry,lt brn,mnr vf-f aggs,f-v crs lse, com-dom crs,mod-pr srt,dom sbang- sbrnd,tr-mnr wk sil cmt,tr-mnr lt brn- lt gry slty mtx,tr carb flks,tr sid,fri

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.6 | 65 |
| RES_DEEP (ohm.m) | 29.15 | 65 |
| RES_SHALLOW (ohm.m) | 27.11 | 65 |
| **Δ Res (Deep − Shallow)** | **2.04** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2070 m MD — Interval 2065.0 – 2075.0 m

**Sample Description (spreadsheet):** Sample 2070m: 10% Siltstone, rare siderite in 90% very fine to fine, fine to medium lse Sandstone, 60% moderately bright to bright FLUOR in SST. TG 156U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-f, f-med lse (max: M ) |
| Fluorescence | 60.0% mod bri-bri |
| Total Gas | 156 U |
| FeCO₃ in Sandstone | rr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2070m: med gry,gry brn,lt gry,arg,com aren i/p,grd to vf SST, com sandy lams,tr-mnr carb flks & micrlams,trmicmic,frm-hd,sbblky- micrlams,tr micmic,frmhd,sbblky
- **SANDSTONE** @ ~2080m: clr,trnsl,opq,lt gry,lt brn,mnr vf-f aggs,f-v crs lse, com-dom crs,mod-pr srt,dom sbang- sbrnd,tr-mnr wk sil cmt,tr-mnr lt brn- lt gry slty mtx,tr carb flks,tr sid,fri

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.7 | 66 |
| RES_DEEP (ohm.m) | 31.81 | 66 |
| RES_SHALLOW (ohm.m) | 28.06 | 66 |
| **Δ Res (Deep − Shallow)** | **3.75** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2080 m MD — Interval 2075.0 – 2085.0 m

**Sample Description (spreadsheet):** Sample 2080m: 10% Siltstone, 90% dominantly fine Sandstone, 70% moderately bright to bright FLUOR in SST. TG 189U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | dom f (max: F) |
| Fluorescence | 70.0% mod bri-bri |
| Total Gas | 189 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2070m: med gry,gry brn,lt gry,arg,com aren i/p,grd to vf SST, com sandy lams,tr-mnr carb flks & micrlams,trmicmic,frm-hd,sbblky- micrlams,tr micmic,frmhd,sbblky
- **SANDSTONE** @ ~2080m: clr,trnsl,opq,lt gry,lt brn,mnr vf-f aggs,f-v crs lse, com-dom crs,mod-pr srt,dom sbang- sbrnd,tr-mnr wk sil cmt,tr-mnr lt brn- lt gry slty mtx,tr carb flks,tr sid,fri

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 110.3 | 66 |
| RES_DEEP (ohm.m) | 34.64 | 66 |
| RES_SHALLOW (ohm.m) | 28.06 | 66 |
| **Δ Res (Deep − Shallow)** | **6.58** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2090 m MD — Interval 2085.0 – 2095.0 m

**Sample Description (spreadsheet):** Sample 2090m: trace siderite in 10% Siltstone, trace siderite in 90% very fine to very coarse Sandstone, 100% bright  FLUOR in SST. TG 229U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-v crs (max: VC) |
| Fluorescence | 100.0% bri  |
| Total Gas | 229 U |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2070m: med gry,gry brn,lt gry,arg,com aren i/p,grd to vf SST, com sandy lams,tr-mnr carb flks & micrlams,trmicmic,frm-hd,sbblky- micrlams,tr micmic,frmhd,sbblky
- **SANDSTONE** @ ~2080m: clr,trnsl,opq,lt gry,lt brn,mnr vf-f aggs,f-v crs lse, com-dom crs,mod-pr srt,dom sbang- sbrnd,tr-mnr wk sil cmt,tr-mnr lt brn- lt gry slty mtx,tr carb flks,tr sid,fri
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.4 | 65 |
| RES_DEEP (ohm.m) | 37.33 | 65 |
| RES_SHALLOW (ohm.m) | 30.19 | 65 |
| **Δ Res (Deep − Shallow)** | **7.14** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2100 m MD — Interval 2095.0 – 2105.0 m

**Sample Description (spreadsheet):** Sample 2100m: 10% Siltstone, 90% medium to coarse Sandstone, 100% bright  FLUOR in SST. TG 167U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | med-crs (max: C) |
| Fluorescence | 100.0% bri  |
| Total Gas | 167 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2080m: clr,trnsl,opq,lt gry,lt brn,mnr vf-f aggs,f-v crs lse, com-dom crs,mod-pr srt,dom sbang- sbrnd,tr-mnr wk sil cmt,tr-mnr lt brn- lt gry slty mtx,tr carb flks,tr sid,fri
- **SANDSTONE** @ ~2110m: clr,trnsl,opq,crs- v crs,mod-pr srt,dom sbang-sbrnd, tr ang,tr sil cmt,tr mtx,lse,cln,fr-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.5 | 66 |
| RES_DEEP (ohm.m) | 31.38 | 66 |
| RES_SHALLOW (ohm.m) | 26.19 | 66 |
| **Δ Res (Deep − Shallow)** | **5.19** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2110 m MD — Interval 2105.0 – 2115.0 m

**Sample Description (spreadsheet):** Sample 2110m: 0% Siltstone, 100% medium to verycoarse Sandstone, 100% bright  FLUOR in SST. TG 155U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | med-vcrs (max: VC) |
| Fluorescence | 100.0% bri  |
| Total Gas | 155 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2110m: clr,trnsl,opq,crs- v crs,mod-pr srt,dom sbang-sbrnd, tr ang,tr sil cmt,tr mtx,lse,cln,fr-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.4 | 65 |
| RES_DEEP (ohm.m) | 35.33 | 65 |
| RES_SHALLOW (ohm.m) | 28.90 | 65 |
| **Δ Res (Deep − Shallow)** | **6.43** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2120 m MD — Interval 2115.0 – 2125.0 m

**Sample Description (spreadsheet):** Sample 2120m: 0% Siltstone, 100% coarse to verycoarse Sandstone, 100% bright  FLUOR in SST. TG 144U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | crs-vcrs (max: VC) |
| Fluorescence | 100.0% bri  |
| Total Gas | 144 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2110m: clr,trnsl,opq,crs- v crs,mod-pr srt,dom sbang-sbrnd, tr ang,tr sil cmt,tr mtx,lse,cln,fr-gd inf por,fluor.
- **SANDSTONE** @ ~2140m: clr,trnsl,opq,crs- v crs,mod-pr srt,dom sbang-sbrnd, tr ang,tr sil cmt,tr mtx,lse,cln,fr-gd inf por,fluor. 70 / 6 / 5 / 8 / 11

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.1 | 66 |
| RES_DEEP (ohm.m) | 35.32 | 66 |
| RES_SHALLOW (ohm.m) | 28.94 | 66 |
| **Δ Res (Deep − Shallow)** | **6.37** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2130 m MD — Interval 2125.0 – 2135.0 m

**Sample Description (spreadsheet):** Sample 2130m: 0% Siltstone, 100% medium to very coarse Sandstone, 100% bright  FLUOR in SST. TG 162U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | med-v crs (max: VC) |
| Fluorescence | 100.0% bri  |
| Total Gas | 162 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2110m: clr,trnsl,opq,crs- v crs,mod-pr srt,dom sbang-sbrnd, tr ang,tr sil cmt,tr mtx,lse,cln,fr-gd inf por,fluor.
- **SANDSTONE** @ ~2140m: clr,trnsl,opq,crs- v crs,mod-pr srt,dom sbang-sbrnd, tr ang,tr sil cmt,tr mtx,lse,cln,fr-gd inf por,fluor. 70 / 6 / 5 / 8 / 11

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.8 | 66 |
| RES_DEEP (ohm.m) | 40.55 | 66 |
| RES_SHALLOW (ohm.m) | 33.07 | 66 |
| **Δ Res (Deep − Shallow)** | **7.48** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2140 m MD — Interval 2135.0 – 2145.0 m

**Sample Description (spreadsheet):** Sample 2140m: 0% Siltstone, 100% medium to very coarse Sandstone, 100% bright  FLUOR in SST. TG 142U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | med-v crs (max: VC) |
| Fluorescence | 100.0% bri  |
| Total Gas | 142 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2140m: clr,trnsl,opq,crs- v crs,mod-pr srt,dom sbang-sbrnd, tr ang,tr sil cmt,tr mtx,lse,cln,fr-gd inf por,fluor. 70 / 6 / 5 / 8 / 11
- **SANDSTONE** @ ~2160m: clr,trnsl,opq,med- v crs,mod-pr srt,dom sbang-sbrnd, tr ang,tr sil cmt,tr mtx,med-v crs lse,cln,fr-gd inf por,fluor. 2170 SURVEY @ 2169.2m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.9 | 65 |
| RES_DEEP (ohm.m) | 36.15 | 65 |
| RES_SHALLOW (ohm.m) | 30.28 | 65 |
| **Δ Res (Deep − Shallow)** | **5.87** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2150 m MD — Interval 2145.0 – 2155.0 m

**Sample Description (spreadsheet):** Sample 2150m: 0% Siltstone, 100% coarse to very coarse Sandstone, 100% bright  FLUOR in SST. TG 157U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | crs-v crs (max: VC) |
| Fluorescence | 100.0% bri  |
| Total Gas | 157 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2140m: clr,trnsl,opq,crs- v crs,mod-pr srt,dom sbang-sbrnd, tr ang,tr sil cmt,tr mtx,lse,cln,fr-gd inf por,fluor. 70 / 6 / 5 / 8 / 11
- **SANDSTONE** @ ~2160m: clr,trnsl,opq,med- v crs,mod-pr srt,dom sbang-sbrnd, tr ang,tr sil cmt,tr mtx,med-v crs lse,cln,fr-gd inf por,fluor. 2170 SURVEY @ 2169.2m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.7 | 66 |
| RES_DEEP (ohm.m) | 39.59 | 66 |
| RES_SHALLOW (ohm.m) | 32.44 | 66 |
| **Δ Res (Deep − Shallow)** | **7.15** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2160 m MD — Interval 2155.0 – 2165.0 m

**Sample Description (spreadsheet):** Sample 2160m: 0% Siltstone, 100% coarse to very coarse Sandstone, 100% bright  FLUOR in SST. TG 234U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | crs-v crs (max: VC) |
| Fluorescence | 100.0% bri  |
| Total Gas | 234 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2140m: clr,trnsl,opq,crs- v crs,mod-pr srt,dom sbang-sbrnd, tr ang,tr sil cmt,tr mtx,lse,cln,fr-gd inf por,fluor. 70 / 6 / 5 / 8 / 11
- **SANDSTONE** @ ~2160m: clr,trnsl,opq,med- v crs,mod-pr srt,dom sbang-sbrnd, tr ang,tr sil cmt,tr mtx,med-v crs lse,cln,fr-gd inf por,fluor. 2170 SURVEY @ 2169.2m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.5 | 66 |
| RES_DEEP (ohm.m) | 38.40 | 66 |
| RES_SHALLOW (ohm.m) | 33.69 | 66 |
| **Δ Res (Deep − Shallow)** | **4.71** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2170 m MD — Interval 2165.0 – 2175.0 m

**Sample Description (spreadsheet):** Sample 2170m: 0% Siltstone, rare siderite in 100% fine to very coarse Sandstone, 100% bright  FLUOR in SST. TG 147U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-v crs (max: VC) |
| Fluorescence | 100.0% bri  |
| Total Gas | 147 U |
| FeCO₃ in Sandstone | rr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2160m: clr,trnsl,opq,med- v crs,mod-pr srt,dom sbang-sbrnd, tr ang,tr sil cmt,tr mtx,med-v crs lse,cln,fr-gd inf por,fluor. 2170 SURVEY @ 2169.2m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 110.3 | 65 |
| RES_DEEP (ohm.m) | 33.17 | 65 |
| RES_SHALLOW (ohm.m) | 27.86 | 65 |
| **Δ Res (Deep − Shallow)** | **5.30** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2180 m MD — Interval 2175.0 – 2185.0 m

**Sample Description (spreadsheet):** Sample 2180m: 0% Siltstone, 100% fine to very coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 156U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-v crs (max: VC) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 156 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2160m: clr,trnsl,opq,med- v crs,mod-pr srt,dom sbang-sbrnd, tr ang,tr sil cmt,tr mtx,med-v crs lse,cln,fr-gd inf por,fluor. 2170 SURVEY @ 2169.2m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.7 | 66 |
| RES_DEEP (ohm.m) | 37.87 | 66 |
| RES_SHALLOW (ohm.m) | 32.66 | 66 |
| **Δ Res (Deep − Shallow)** | **5.20** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2190 m MD — Interval 2185.0 – 2195.0 m

**Sample Description (spreadsheet):** Sample 2190m: 0% Siltstone, 100% very fine to fine agg, fine to verycoarse lse Sandstone, 100% bright  FLUOR in SST. TG 248U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f agg, f-vcrs lse (max: VC) |
| Fluorescence | 100.0% bri  |
| Total Gas | 248 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.6 | 65 |
| RES_DEEP (ohm.m) | 43.58 | 65 |
| RES_SHALLOW (ohm.m) | 36.41 | 65 |
| **Δ Res (Deep − Shallow)** | **7.18** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2200 m MD — Interval 2195.0 – 2205.0 m

**Sample Description (spreadsheet):** Sample 2200m: 0% Siltstone, 100% very fine to fine agg, fine to verycoarse lse Sandstone, 100% bright  FLUOR in SST. TG 198U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f agg, f-vcrs lse (max: C) |
| Fluorescence | 100.0% bri  |
| Total Gas | 198 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.5 | 66 |
| RES_DEEP (ohm.m) | 38.62 | 66 |
| RES_SHALLOW (ohm.m) | 33.01 | 66 |
| **Δ Res (Deep − Shallow)** | **5.60** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2210 m MD — Interval 2205.0 – 2215.0 m

**Sample Description (spreadsheet):** Sample 2210m: 0% Siltstone, 100% very fine to fine agg, fine to verycoarse lse Sandstone, 100% bright  FLUOR in SST. TG 224U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f agg, f-vcrs lse (max: C) |
| Fluorescence | 100.0% bri  |
| Total Gas | 224 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.6 | 66 |
| RES_DEEP (ohm.m) | 31.71 | 66 |
| RES_SHALLOW (ohm.m) | 26.45 | 66 |
| **Δ Res (Deep − Shallow)** | **5.25** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2220 m MD — Interval 2215.0 – 2225.0 m

**Sample Description (spreadsheet):** Sample 2220m: 0% Siltstone, rare siderite in 100% very fine to dominantly fine agg, fine to coarse lse Sandstone, 100% bright  FLUOR in SST. TG 186U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-dom f agg, f-crs lse (max: C) |
| Fluorescence | 100.0% bri  |
| Total Gas | 186 U |
| FeCO₃ in Sandstone | rr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.4 | 65 |
| RES_DEEP (ohm.m) | 37.49 | 65 |
| RES_SHALLOW (ohm.m) | 31.09 | 65 |
| **Δ Res (Deep − Shallow)** | **6.41** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2230 m MD — Interval 2225.0 – 2235.0 m

**Sample Description (spreadsheet):** Sample 2230m: 0% Siltstone, 100% very fine to fine,fine to verycoarse lse Sandstone, 100% bright  FLUOR in SST. TG 155U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f,f-vcrs lse (max: VC) |
| Fluorescence | 100.0% bri  |
| Total Gas | 155 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.1 | 66 |
| RES_DEEP (ohm.m) | 44.13 | 66 |
| RES_SHALLOW (ohm.m) | 37.50 | 66 |
| **Δ Res (Deep − Shallow)** | **6.63** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2240 m MD — Interval 2235.0 – 2245.0 m

**Sample Description (spreadsheet):** Sample 2240m: 0% Siltstone, 100% very fine to verycoarse Sandstone, 100% bright  FLUOR in SST. TG 272U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-vcrs (max: VC) |
| Fluorescence | 100.0% bri  |
| Total Gas | 272 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.5 | 65 |
| RES_DEEP (ohm.m) | 50.12 | 65 |
| RES_SHALLOW (ohm.m) | 44.20 | 65 |
| **Δ Res (Deep − Shallow)** | **5.92** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2250 m MD — Interval 2245.0 – 2255.0 m

**Sample Description (spreadsheet):** Sample 2250m: 0% Siltstone, 100% very fine to verycoarse Sandstone, 100% bright  FLUOR in SST. TG 249U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-vcrs (max: VC) |
| Fluorescence | 100.0% bri  |
| Total Gas | 249 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.2 | 66 |
| RES_DEEP (ohm.m) | 41.93 | 66 |
| RES_SHALLOW (ohm.m) | 37.16 | 66 |
| **Δ Res (Deep − Shallow)** | **4.76** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2260 m MD — Interval 2255.0 – 2265.0 m

**Sample Description (spreadsheet):** Sample 2260m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% bright  FLUOR in SST. TG 246U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100.0% bri  |
| Total Gas | 246 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2280m: pl brn,off wh,trnsl,clr, vf-f aggs,med-crs lse grs,pr srt, sbang-sbrnd,wk sil cmt,tr off wh arg mtx,occ frstd qtz grs,tr rk flour,fri- mod hd aggs,fr-gd vis & inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.4 | 66 |
| RES_DEEP (ohm.m) | 29.57 | 66 |
| RES_SHALLOW (ohm.m) | 27.10 | 66 |
| **Δ Res (Deep − Shallow)** | **2.47** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2270 m MD — Interval 2265.0 – 2275.0 m

**Sample Description (spreadsheet):** Sample 2270m: 0% Siltstone, 100% very fine to verycoarse Sandstone, 100% bright FLUOR in SST. TG 290U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-vcrs (max: VC) |
| Fluorescence | 100.0% bri |
| Total Gas | 290 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2280m: pl brn,off wh,trnsl,clr, vf-f aggs,med-crs lse grs,pr srt, sbang-sbrnd,wk sil cmt,tr off wh arg mtx,occ frstd qtz grs,tr rk flour,fri- mod hd aggs,fr-gd vis & inf por,fluor.
- **SILTSTONE** @ ~2290m: lt-med gry,aren,micmic,tr liths,tr mic flks,rr carb spks,mod hd-hd,blky-sbblky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.9 | 65 |
| RES_DEEP (ohm.m) | 24.92 | 65 |
| RES_SHALLOW (ohm.m) | 23.61 | 65 |
| **Δ Res (Deep − Shallow)** | **1.31** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2280 m MD — Interval 2275.0 – 2285.0 m

**Sample Description (spreadsheet):** Sample 2280m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 253U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100.0% bri |
| Total Gas | 253 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2280m: pl brn,off wh,trnsl,clr, vf-f aggs,med-crs lse grs,pr srt, sbang-sbrnd,wk sil cmt,tr off wh arg mtx,occ frstd qtz grs,tr rk flour,fri- mod hd aggs,fr-gd vis & inf por,fluor.
- **SILTSTONE** @ ~2290m: lt-med gry,aren,micmic,tr liths,tr mic flks,rr carb spks,mod hd-hd,blky-sbblky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.7 | 66 |
| RES_DEEP (ohm.m) | 27.14 | 66 |
| RES_SHALLOW (ohm.m) | 24.53 | 66 |
| **Δ Res (Deep − Shallow)** | **2.61** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2290 m MD — Interval 2285.0 – 2295.0 m

**Sample Description (spreadsheet):** Sample 2290m: 5% Siltstone, 95% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 300U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100.0% bri |
| Total Gas | 300 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2280m: pl brn,off wh,trnsl,clr, vf-f aggs,med-crs lse grs,pr srt, sbang-sbrnd,wk sil cmt,tr off wh arg mtx,occ frstd qtz grs,tr rk flour,fri- mod hd aggs,fr-gd vis & inf por,fluor.
- **SILTSTONE** @ ~2290m: lt-med gry,aren,micmic,tr liths,tr mic flks,rr carb spks,mod hd-hd,blky-sbblky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.3 | 66 |
| RES_DEEP (ohm.m) | 35.52 | 66 |
| RES_SHALLOW (ohm.m) | 29.31 | 66 |
| **Δ Res (Deep − Shallow)** | **6.21** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2300 m MD — Interval 2295.0 – 2305.0 m

**Sample Description (spreadsheet):** Sample 2300m: 10% Siltstone, 90% very fine to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 303U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 303 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2280m: pl brn,off wh,trnsl,clr, vf-f aggs,med-crs lse grs,pr srt, sbang-sbrnd,wk sil cmt,tr off wh arg mtx,occ frstd qtz grs,tr rk flour,fri- mod hd aggs,fr-gd vis & inf por,fluor.
- **SILTSTONE** @ ~2290m: lt-med gry,aren,micmic,tr liths,tr mic flks,rr carb spks,mod hd-hd,blky-sbblky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.3 | 65 |
| RES_DEEP (ohm.m) | 42.80 | 65 |
| RES_SHALLOW (ohm.m) | 34.86 | 65 |
| **Δ Res (Deep − Shallow)** | **7.94** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2310 m MD — Interval 2305.0 – 2315.0 m

**Sample Description (spreadsheet):** Sample 2310m: 15% Siltstone, 85% very fine to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 316U

| Property | Value |
|----------|-------|
| % Sandstone | 85 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 316 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2290m: lt-med gry,aren,micmic,tr liths,tr mic flks,rr carb spks,mod hd-hd,blky-sbblky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.2 | 66 |
| RES_DEEP (ohm.m) | 39.39 | 66 |
| RES_SHALLOW (ohm.m) | 36.08 | 66 |
| **Δ Res (Deep − Shallow)** | **3.31** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2320 m MD — Interval 2315.0 – 2325.0 m

**Sample Description (spreadsheet):** Sample 2320m: 5% Siltstone, 95% very fine to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 265U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 265 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.6 | 65 |
| RES_DEEP (ohm.m) | 37.30 | 65 |
| RES_SHALLOW (ohm.m) | 32.46 | 65 |
| **Δ Res (Deep − Shallow)** | **4.84** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2330 m MD — Interval 2325.0 – 2335.0 m

**Sample Description (spreadsheet):** Sample 2330m: 0% Siltstone, 100% very fine to verycoarse Sandstone, 100% moderately bright FLUOR in SST. TG 295U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-vcrs (max: VC) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 295 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.2 | 66 |
| RES_DEEP (ohm.m) | 28.83 | 66 |
| RES_SHALLOW (ohm.m) | 24.76 | 66 |
| **Δ Res (Deep − Shallow)** | **4.06** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2370 m MD — Interval 2365.0 – 2375.0 m

**Sample Description (spreadsheet):** Sample 2370m: 5% Siltstone, 95% very fine to fine, rare coarse Sandstone, 100% dull to moderately bright FLUOR in SST. TG 184U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-f, rr crs (max: C) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 184 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2380m: pl brn,lt gry,vf-f,grd to SLTST,rr lse crs grs,mod-wl srt,sbang- sbrns,sil cmt,com off wh-lt gry arg mtx, occ slty lams,tr carb spks,tr liths,fri- mod hd,tr lse,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.7 | 65 |
| RES_DEEP (ohm.m) | 31.53 | 65 |
| RES_SHALLOW (ohm.m) | 27.35 | 65 |
| **Δ Res (Deep − Shallow)** | **4.18** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2380 m MD — Interval 2375.0 – 2385.0 m

**Sample Description (spreadsheet):** Sample 2380m: 10% Siltstone, 90% very fine to fine, rare coarse Sandstone, 100% dull to moderately bright FLUOR in SST. TG 193U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-f, rr crs (max: C) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 193 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2380m: pl brn,lt gry,vf-f,grd to SLTST,rr lse crs grs,mod-wl srt,sbang- sbrns,sil cmt,com off wh-lt gry arg mtx, occ slty lams,tr carb spks,tr liths,fri- mod hd,tr lse,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.4 | 66 |
| RES_DEEP (ohm.m) | 29.07 | 66 |
| RES_SHALLOW (ohm.m) | 25.70 | 66 |
| **Δ Res (Deep − Shallow)** | **3.37** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2420 m MD — Interval 2415.0 – 2425.0 m

**Sample Description (spreadsheet):** Sample 2420m: 15% Siltstone, 85% very fine to fine Sandstone, 100% dull FLUOR in SST. TG 169U

| Property | Value |
|----------|-------|
| % Sandstone | 85 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100.0% dll |
| Total Gas | 169 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2410m: v lt gry brn,pl brn, vf-f,grd to SLTST,wl srt,sbang-sbrnd, sil cmt,tr-com off wh arg mtx,com slty lams,rr carb spks,rr liths,rr lse crs grs,fri-mod hd,pr vis por,
- **SANDSTONE** @ ~2420m: lt brn gry,rr pl brn, vf-f,wl srt,rr lse crs grs,sbang-sbrnd, sil cmt,tr off wh arg mtx,com slty lams, rr liths,rr carb spks,fri-mod hd,pr-ti 2430 1 100 1K vis por,dll-mod bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.0 | 66 |
| RES_DEEP (ohm.m) | 26.91 | 66 |
| RES_SHALLOW (ohm.m) | 24.70 | 66 |
| **Δ Res (Deep − Shallow)** | **2.21** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2430 m MD — Interval 2425.0 – 2435.0 m

**Sample Description (spreadsheet):** Sample 2430m: 10% Siltstone, 90% very fine to fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 191U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 191 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2410m: v lt gry brn,pl brn, vf-f,grd to SLTST,wl srt,sbang-sbrnd, sil cmt,tr-com off wh arg mtx,com slty lams,rr carb spks,rr liths,rr lse crs grs,fri-mod hd,pr vis por,
- **SANDSTONE** @ ~2420m: lt brn gry,rr pl brn, vf-f,wl srt,rr lse crs grs,sbang-sbrnd, sil cmt,tr off wh arg mtx,com slty lams, rr liths,rr carb spks,fri-mod hd,pr-ti 2430 1 100 1K vis por,dll-mod bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.8 | 65 |
| RES_DEEP (ohm.m) | 25.79 | 65 |
| RES_SHALLOW (ohm.m) | 23.32 | 65 |
| **Δ Res (Deep − Shallow)** | **2.47** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2440 m MD — Interval 2435.0 – 2445.0 m

**Sample Description (spreadsheet):** Sample 2440m: 5% Siltstone, 95% very fine to fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 205U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 205 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2420m: lt brn gry,rr pl brn, vf-f,wl srt,rr lse crs grs,sbang-sbrnd, sil cmt,tr off wh arg mtx,com slty lams, rr liths,rr carb spks,fri-mod hd,pr-ti 2430 1 100 1K vis por,dll-mod bri fluor.
- **SANDSTONE** @ ~2440m: lt gry,lt brn gry,rr pl brn,vf-f,rr med,mod wl srt,sbang- sbrnd,sil cmt,tr off wh arg mtx,com slty lams,rr liths,rr carb spks,fri- mod hd,pr-ti vis por,dll-mod bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.6 | 66 |
| RES_DEEP (ohm.m) | 29.63 | 66 |
| RES_SHALLOW (ohm.m) | 26.28 | 66 |
| **Δ Res (Deep − Shallow)** | **3.35** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2450 m MD — Interval 2445.0 – 2455.0 m

**Sample Description (spreadsheet):** Sample 2450m: 5% Siltstone, 95% very fine to fine, rare medium Sandstone, 100% dull to moderately bright FLUOR in SST. TG 169U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-f, rr med (max: M) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 169 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2440m: lt gry,lt brn gry,rr pl brn,vf-f,rr med,mod wl srt,sbang- sbrnd,sil cmt,tr off wh arg mtx,com slty lams,rr liths,rr carb spks,fri- mod hd,pr-ti vis por,dll-mod bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.4 | 65 |
| RES_DEEP (ohm.m) | 28.93 | 65 |
| RES_SHALLOW (ohm.m) | 24.84 | 65 |
| **Δ Res (Deep − Shallow)** | **4.10** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2460 m MD — Interval 2455.0 – 2465.0 m

**Sample Description (spreadsheet):** Sample 2460m: 5% Siltstone, 95% very fine to fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 176U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 176 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2440m: lt gry,lt brn gry,rr pl brn,vf-f,rr med,mod wl srt,sbang- sbrnd,sil cmt,tr off wh arg mtx,com slty lams,rr liths,rr carb spks,fri- mod hd,pr-ti vis por,dll-mod bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.6 | 66 |
| RES_DEEP (ohm.m) | 27.55 | 66 |
| RES_SHALLOW (ohm.m) | 24.31 | 66 |
| **Δ Res (Deep − Shallow)** | **3.24** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2470 m MD — Interval 2465.0 – 2475.0 m

**Sample Description (spreadsheet):** Sample 2470m: 10% Siltstone, 90% very fine to fine Sandstone, 90% dull to moderately bright FLUOR in SST. TG 181U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 90.0% dll-mod bri |
| Total Gas | 181 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2490m: lt brn gry,vf-f,rr med,mod wl srt,sbang-sbrnd,sil cmt, com off wh-lt gry arg/slty mtx,grd to SLTST i/p,tr liths,fri-mod hd,pr-ti vis por,dll-mod bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.6 | 66 |
| RES_DEEP (ohm.m) | 28.59 | 66 |
| RES_SHALLOW (ohm.m) | 24.03 | 66 |
| **Δ Res (Deep − Shallow)** | **4.56** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2480 m MD — Interval 2475.0 – 2485.0 m

**Sample Description (spreadsheet):** Sample 2480m: 40% Siltstone, 60% very fine Sandstone, 90% dull FLUOR in SST. TG 209U

| Property | Value |
|----------|-------|
| % Sandstone | 60 |
| Grain Size | vf (max: VF) |
| Fluorescence | 90.0% dll |
| Total Gas | 209 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2490m: lt brn gry,vf-f,rr med,mod wl srt,sbang-sbrnd,sil cmt, com off wh-lt gry arg/slty mtx,grd to SLTST i/p,tr liths,fri-mod hd,pr-ti vis por,dll-mod bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.6 | 65 |
| RES_DEEP (ohm.m) | 31.03 | 65 |
| RES_SHALLOW (ohm.m) | 25.43 | 65 |
| **Δ Res (Deep − Shallow)** | **5.60** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2490 m MD — Interval 2485.0 – 2495.0 m

**Sample Description (spreadsheet):** Sample 2490m: 15% Siltstone, 85% very fine to fine Sandstone, 90% dull to moderately bright FLUOR in SST. TG 214U

| Property | Value |
|----------|-------|
| % Sandstone | 85 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 90.0% dll-mod bri |
| Total Gas | 214 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2490m: lt brn gry,vf-f,rr med,mod wl srt,sbang-sbrnd,sil cmt, com off wh-lt gry arg/slty mtx,grd to SLTST i/p,tr liths,fri-mod hd,pr-ti vis por,dll-mod bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.6 | 66 |
| RES_DEEP (ohm.m) | 30.25 | 66 |
| RES_SHALLOW (ohm.m) | 24.51 | 66 |
| **Δ Res (Deep − Shallow)** | **5.74** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2500 m MD — Interval 2495.0 – 2505.0 m

**Sample Description (spreadsheet):** Sample 2500m: 10% Siltstone, 90% very fine to fine, rare medium Sandstone, 90% dull to moderately bright FLUOR in SST. TG 191U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-f, rr med (max: M) |
| Fluorescence | 90.0% dll-mod bri |
| Total Gas | 191 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2490m: lt brn gry,vf-f,rr med,mod wl srt,sbang-sbrnd,sil cmt, com off wh-lt gry arg/slty mtx,grd to SLTST i/p,tr liths,fri-mod hd,pr-ti vis por,dll-mod bri fluor.
- **SANDSTONE** @ ~2520m: lt brn,lt brn gry,com v slty,grd to aren SLTST,mnr-com trnsl-opq,f-med,mod wl-wl srt,dom sbang-sbrnd,com wk-occ mod strg sil 0 0.5 1 4 14 2530 1 10 100 1K cmt,com gry slty mtx,tr carb flks,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.3 | 66 |
| RES_DEEP (ohm.m) | 29.63 | 66 |
| RES_SHALLOW (ohm.m) | 25.36 | 66 |
| **Δ Res (Deep − Shallow)** | **4.27** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2510 m MD — Interval 2505.0 – 2515.0 m

**Sample Description (spreadsheet):** Sample 2510m: 30% Siltstone, 70% very fine to  rare fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 157U

| Property | Value |
|----------|-------|
| % Sandstone | 70 |
| Grain Size | vf- rr f (max: F) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 157 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2490m: lt brn gry,vf-f,rr med,mod wl srt,sbang-sbrnd,sil cmt, com off wh-lt gry arg/slty mtx,grd to SLTST i/p,tr liths,fri-mod hd,pr-ti vis por,dll-mod bri fluor.
- **SANDSTONE** @ ~2520m: lt brn,lt brn gry,com v slty,grd to aren SLTST,mnr-com trnsl-opq,f-med,mod wl-wl srt,dom sbang-sbrnd,com wk-occ mod strg sil 0 0.5 1 4 14 2530 1 10 100 1K cmt,com gry slty mtx,tr carb flks,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.4 | 65 |
| RES_DEEP (ohm.m) | 27.38 | 65 |
| RES_SHALLOW (ohm.m) | 24.94 | 65 |
| **Δ Res (Deep − Shallow)** | **2.44** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2520 m MD — Interval 2515.0 – 2525.0 m

**Sample Description (spreadsheet):** Sample 2520m: 20% Siltstone, 80% very fine to fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 185U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 185 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2520m: lt brn,lt brn gry,com v slty,grd to aren SLTST,mnr-com trnsl-opq,f-med,mod wl-wl srt,dom sbang-sbrnd,com wk-occ mod strg sil 0 0.5 1 4 14 2530 1 10 100 1K cmt,com gry slty mtx,tr carb flks,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.4 | 66 |
| RES_DEEP (ohm.m) | 29.06 | 66 |
| RES_SHALLOW (ohm.m) | 26.98 | 66 |
| **Δ Res (Deep − Shallow)** | **2.07** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2530 m MD — Interval 2525.0 – 2535.0 m

**Sample Description (spreadsheet):** Sample 2530m: 15% Siltstone, 85% very fine to fine, rare coarse Sandstone, 100% dull to moderately bright FLUOR in SST. TG 210U

| Property | Value |
|----------|-------|
| % Sandstone | 85 |
| Grain Size | vf-f, rr crs (max: C) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 210 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2520m: lt brn,lt brn gry,com v slty,grd to aren SLTST,mnr-com trnsl-opq,f-med,mod wl-wl srt,dom sbang-sbrnd,com wk-occ mod strg sil 0 0.5 1 4 14 2530 1 10 100 1K cmt,com gry slty mtx,tr carb flks,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.6 | 65 |
| RES_DEEP (ohm.m) | 27.57 | 65 |
| RES_SHALLOW (ohm.m) | 25.41 | 65 |
| **Δ Res (Deep − Shallow)** | **2.16** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2540 m MD — Interval 2535.0 – 2545.0 m

**Sample Description (spreadsheet):** Sample 2540m: 20% Siltstone, 80% very fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 170U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | vf-med (max: M ) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 170 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2520m: lt brn,lt brn gry,com v slty,grd to aren SLTST,mnr-com trnsl-opq,f-med,mod wl-wl srt,dom sbang-sbrnd,com wk-occ mod strg sil 0 0.5 1 4 14 2530 1 10 100 1K cmt,com gry slty mtx,tr carb flks,
- **SANDSTONE** @ ~2560m: 13 SANDSTONE:clr,trnsl,opq,lt YP: 23 gry,lt brn,mnr vf-f aggs,f-dom med Gel: 7/9/12 lse,rr crs,mod wl srt,dom sbang-sbrnd, WL: 4.8 mnr wk sil cmt,mnr lt gry arg mtx,fri Sol: 10 aggs,com-dom lse,mod bri-bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.3 | 66 |
| RES_DEEP (ohm.m) | 25.91 | 66 |
| RES_SHALLOW (ohm.m) | 24.39 | 66 |
| **Δ Res (Deep − Shallow)** | **1.52** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2550 m MD — Interval 2545.0 – 2555.0 m

**Sample Description (spreadsheet):** Sample 2550m: 30% Siltstone, rare siderite in 70% very fine to medium Sandstone, 80% moderately bright FLUOR in SST. TG 161U

| Property | Value |
|----------|-------|
| % Sandstone | 70 |
| Grain Size | vf-med (max: M ) |
| Fluorescence | 80.0% mod bri |
| Total Gas | 161 U |
| FeCO₃ in Sandstone | rr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2560m: 13 SANDSTONE:clr,trnsl,opq,lt YP: 23 gry,lt brn,mnr vf-f aggs,f-dom med Gel: 7/9/12 lse,rr crs,mod wl srt,dom sbang-sbrnd, WL: 4.8 mnr wk sil cmt,mnr lt gry arg mtx,fri Sol: 10 aggs,com-dom lse,mod bri-bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.4 | 66 |
| RES_DEEP (ohm.m) | 25.44 | 66 |
| RES_SHALLOW (ohm.m) | 23.82 | 66 |
| **Δ Res (Deep − Shallow)** | **1.62** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2560 m MD — Interval 2555.0 – 2565.0 m

**Sample Description (spreadsheet):** Sample 2560m: 10% Siltstone, 90% very fine to fine, minor medium Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 160U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-f, mnr med (max: M ) |
| Fluorescence | 80.0% mod bri - bri |
| Total Gas | 160 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2560m: 13 SANDSTONE:clr,trnsl,opq,lt YP: 23 gry,lt brn,mnr vf-f aggs,f-dom med Gel: 7/9/12 lse,rr crs,mod wl srt,dom sbang-sbrnd, WL: 4.8 mnr wk sil cmt,mnr lt gry arg mtx,fri Sol: 10 aggs,com-dom lse,mod bri-bri fluor.
- **SANDSTONE** @ ~2580m: clr,trnsl,opq,lt gry,lt brn,mnr vf-f aggs,f-dom med lse,rr crs,mod wl srt,dom sbang-sbrnd, mnr wk sil cmt,mnr lt gry arg mtx,fri aggs,com-dom lse,mod bri-bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.7 | 65 |
| RES_DEEP (ohm.m) | 24.78 | 65 |
| RES_SHALLOW (ohm.m) | 22.74 | 65 |
| **Δ Res (Deep − Shallow)** | **2.04** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2570 m MD — Interval 2565.0 – 2575.0 m

**Sample Description (spreadsheet):** Sample 2570m: 0% Siltstone, 100% very fine to coarse,dominantly medium lse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 190U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-crs,dom med lse (max: C) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 190 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2560m: 13 SANDSTONE:clr,trnsl,opq,lt YP: 23 gry,lt brn,mnr vf-f aggs,f-dom med Gel: 7/9/12 lse,rr crs,mod wl srt,dom sbang-sbrnd, WL: 4.8 mnr wk sil cmt,mnr lt gry arg mtx,fri Sol: 10 aggs,com-dom lse,mod bri-bri fluor.
- **SANDSTONE** @ ~2580m: clr,trnsl,opq,lt gry,lt brn,mnr vf-f aggs,f-dom med lse,rr crs,mod wl srt,dom sbang-sbrnd, mnr wk sil cmt,mnr lt gry arg mtx,fri aggs,com-dom lse,mod bri-bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.9 | 66 |
| RES_DEEP (ohm.m) | 24.48 | 66 |
| RES_SHALLOW (ohm.m) | 21.92 | 66 |
| **Δ Res (Deep − Shallow)** | **2.56** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2580 m MD — Interval 2575.0 – 2585.0 m

**Sample Description (spreadsheet):** Sample 2580m: 5% Siltstone, 95% very fine to fine agg, minor medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 184U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-f agg, mnr med (max: M ) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 184 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2560m: 13 SANDSTONE:clr,trnsl,opq,lt YP: 23 gry,lt brn,mnr vf-f aggs,f-dom med Gel: 7/9/12 lse,rr crs,mod wl srt,dom sbang-sbrnd, WL: 4.8 mnr wk sil cmt,mnr lt gry arg mtx,fri Sol: 10 aggs,com-dom lse,mod bri-bri fluor.
- **SANDSTONE** @ ~2580m: clr,trnsl,opq,lt gry,lt brn,mnr vf-f aggs,f-dom med lse,rr crs,mod wl srt,dom sbang-sbrnd, mnr wk sil cmt,mnr lt gry arg mtx,fri aggs,com-dom lse,mod bri-bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.4 | 65 |
| RES_DEEP (ohm.m) | 26.19 | 65 |
| RES_SHALLOW (ohm.m) | 22.83 | 65 |
| **Δ Res (Deep − Shallow)** | **3.36** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2590 m MD — Interval 2585.0 – 2595.0 m

**Sample Description (spreadsheet):** Sample 2590m: 0% Siltstone, 100% fine to medium lse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 185U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med lse (max: M ) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 185 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2580m: clr,trnsl,opq,lt gry,lt brn,mnr vf-f aggs,f-dom med lse,rr crs,mod wl srt,dom sbang-sbrnd, mnr wk sil cmt,mnr lt gry arg mtx,fri aggs,com-dom lse,mod bri-bri fluor.
- **SANDSTONE** @ ~2610m: lt gry,trnsl,clr, opq,vf-f aggs,f-med lse,mod wl srt, 2620 dom sbang-sbrnd,mnr-com wk sil cmt, mnr lt gry arg mtx,tr carb flks,fri aggs,mnr-com lse,v pr-ti vis por,pr-

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.8 | 66 |
| RES_DEEP (ohm.m) | 25.08 | 66 |
| RES_SHALLOW (ohm.m) | 22.20 | 66 |
| **Δ Res (Deep − Shallow)** | **2.88** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2600 m MD — Interval 2595.0 – 2605.0 m

**Sample Description (spreadsheet):** Sample 2600m: 0% Siltstone, 100% very fine to medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 175U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: M ) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 175 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2580m: clr,trnsl,opq,lt gry,lt brn,mnr vf-f aggs,f-dom med lse,rr crs,mod wl srt,dom sbang-sbrnd, mnr wk sil cmt,mnr lt gry arg mtx,fri aggs,com-dom lse,mod bri-bri fluor.
- **SANDSTONE** @ ~2610m: lt gry,trnsl,clr, opq,vf-f aggs,f-med lse,mod wl srt, 2620 dom sbang-sbrnd,mnr-com wk sil cmt, mnr lt gry arg mtx,tr carb flks,fri aggs,mnr-com lse,v pr-ti vis por,pr-

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.2 | 66 |
| RES_DEEP (ohm.m) | 22.73 | 66 |
| RES_SHALLOW (ohm.m) | 20.97 | 66 |
| **Δ Res (Deep − Shallow)** | **1.76** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2610 m MD — Interval 2605.0 – 2615.0 m

**Sample Description (spreadsheet):** Sample 2610m: 10% Siltstone, 90% very fine to medium Sandstone, 80% dull to moderately bright FLUOR in SST. TG 151U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-med (max: M ) |
| Fluorescence | 80.0% dll-mod bri |
| Total Gas | 151 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2610m: lt gry,trnsl,clr, opq,vf-f aggs,f-med lse,mod wl srt, 2620 dom sbang-sbrnd,mnr-com wk sil cmt, mnr lt gry arg mtx,tr carb flks,fri aggs,mnr-com lse,v pr-ti vis por,pr-

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.6 | 65 |
| RES_DEEP (ohm.m) | 23.22 | 65 |
| RES_SHALLOW (ohm.m) | 21.59 | 65 |
| **Δ Res (Deep − Shallow)** | **1.63** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2620 m MD — Interval 2615.0 – 2625.0 m

**Sample Description (spreadsheet):** Sample 2620m: 20% Siltstone, 80% very fine to medium Sandstone, 70% moderately bright  to  bright FLUOR in SST. TG 150U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | vf-med (max: M ) |
| Fluorescence | 70.0% mod bri - bri |
| Total Gas | 150 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2610m: lt gry,trnsl,clr, opq,vf-f aggs,f-med lse,mod wl srt, 2620 dom sbang-sbrnd,mnr-com wk sil cmt, mnr lt gry arg mtx,tr carb flks,fri aggs,mnr-com lse,v pr-ti vis por,pr-

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.9 | 66 |
| RES_DEEP (ohm.m) | 25.48 | 66 |
| RES_SHALLOW (ohm.m) | 22.51 | 66 |
| **Δ Res (Deep − Shallow)** | **2.97** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2630 m MD — Interval 2625.0 – 2635.0 m

**Sample Description (spreadsheet):** Sample 2630m: 10% Siltstone, 90% very fine to medium Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 157U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 80.0% mod bri - bri |
| Total Gas | 157 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2610m: lt gry,trnsl,clr, opq,vf-f aggs,f-med lse,mod wl srt, 2620 dom sbang-sbrnd,mnr-com wk sil cmt, mnr lt gry arg mtx,tr carb flks,fri aggs,mnr-com lse,v pr-ti vis por,pr-

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.6 | 66 |
| RES_DEEP (ohm.m) | 30.06 | 66 |
| RES_SHALLOW (ohm.m) | 25.21 | 66 |
| **Δ Res (Deep − Shallow)** | **4.85** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2640 m MD — Interval 2635.0 – 2645.0 m

**Sample Description (spreadsheet):** Sample 2640m: 5% Siltstone, 95% very fine to medium Sandstone, 100% bright  FLUOR in SST. TG 247U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100.0% bri  |
| Total Gas | 247 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.9 | 65 |
| RES_DEEP (ohm.m) | 34.57 | 65 |
| RES_SHALLOW (ohm.m) | 30.14 | 65 |
| **Δ Res (Deep − Shallow)** | **4.44** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2650 m MD — Interval 2645.0 – 2655.0 m

**Sample Description (spreadsheet):** Sample 2650m: 0% Siltstone, 100% very fine to medium Sandstone, 100% bright  FLUOR in SST. TG 246U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100.0% bri  |
| Total Gas | 246 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2670m: lt gry,trnsl,clr,opq f-med aggs,f-med lse,tr crs,mod- wl srt,dom sbang-sbrnd,mnr-com wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,mnr-com lse,v pr-ti vis

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.2 | 66 |
| RES_DEEP (ohm.m) | 34.23 | 66 |
| RES_SHALLOW (ohm.m) | 31.55 | 66 |
| **Δ Res (Deep − Shallow)** | **2.68** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2660 m MD — Interval 2655.0 – 2665.0 m

**Sample Description (spreadsheet):** Sample 2660m: 0% Siltstone, 100% fine to medium Sandstone, 100% bright  FLUOR in SST. TG 258U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100.0% bri  |
| Total Gas | 258 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2670m: lt gry,trnsl,clr,opq f-med aggs,f-med lse,tr crs,mod- wl srt,dom sbang-sbrnd,mnr-com wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,mnr-com lse,v pr-ti vis
- **SANDSTONE** @ ~2680m: lt gry,trnsl,clr,opq f-med aggs,f-med lse,tr crs,mod- wl srt,dom sbang-sbrnd,mnr-com wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,mnr-com lse,v pr-ti vis

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.2 | 65 |
| RES_DEEP (ohm.m) | 34.00 | 65 |
| RES_SHALLOW (ohm.m) | 31.04 | 65 |
| **Δ Res (Deep − Shallow)** | **2.97** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2670 m MD — Interval 2665.0 – 2675.0 m

**Sample Description (spreadsheet):** Sample 2670m: 0% Siltstone, 100% very fine to medium Sandstone, 100% bright  FLUOR in SST. TG 264U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: M ) |
| Fluorescence | 100.0% bri  |
| Total Gas | 264 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2670m: lt gry,trnsl,clr,opq f-med aggs,f-med lse,tr crs,mod- wl srt,dom sbang-sbrnd,mnr-com wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,mnr-com lse,v pr-ti vis
- **SANDSTONE** @ ~2680m: lt gry,trnsl,clr,opq f-med aggs,f-med lse,tr crs,mod- wl srt,dom sbang-sbrnd,mnr-com wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,mnr-com lse,v pr-ti vis
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.0 | 66 |
| RES_DEEP (ohm.m) | 37.08 | 66 |
| RES_SHALLOW (ohm.m) | 34.38 | 66 |
| **Δ Res (Deep − Shallow)** | **2.70** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2680 m MD — Interval 2675.0 – 2685.0 m

**Sample Description (spreadsheet):** Sample 2680m: 0% Siltstone, 100% fine to medium Sandstone, 100% bright  FLUOR in SST. TG 271U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100.0% bri  |
| Total Gas | 271 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2670m: lt gry,trnsl,clr,opq f-med aggs,f-med lse,tr crs,mod- wl srt,dom sbang-sbrnd,mnr-com wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,mnr-com lse,v pr-ti vis
- **SANDSTONE** @ ~2680m: lt gry,trnsl,clr,opq f-med aggs,f-med lse,tr crs,mod- wl srt,dom sbang-sbrnd,mnr-com wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,mnr-com lse,v pr-ti vis
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.1 | 66 |
| RES_DEEP (ohm.m) | 33.98 | 66 |
| RES_SHALLOW (ohm.m) | 31.56 | 66 |
| **Δ Res (Deep − Shallow)** | **2.42** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2690 m MD — Interval 2685.0 – 2695.0 m

**Sample Description (spreadsheet):** Sample 2690m: 0% Siltstone, 100% fine to coarse Sandstone, 100% bright  FLUOR in SST. TG 246U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100.0% bri  |
| Total Gas | 246 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2670m: lt gry,trnsl,clr,opq f-med aggs,f-med lse,tr crs,mod- wl srt,dom sbang-sbrnd,mnr-com wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,mnr-com lse,v pr-ti vis
- **SANDSTONE** @ ~2680m: lt gry,trnsl,clr,opq f-med aggs,f-med lse,tr crs,mod- wl srt,dom sbang-sbrnd,mnr-com wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,mnr-com lse,v pr-ti vis
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.7 | 65 |
| RES_DEEP (ohm.m) | 29.10 | 65 |
| RES_SHALLOW (ohm.m) | 25.24 | 65 |
| **Δ Res (Deep − Shallow)** | **3.86** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2700 m MD — Interval 2695.0 – 2705.0 m

**Sample Description (spreadsheet):** Sample 2700m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% bright  FLUOR in SST. TG 180U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100.0% bri  |
| Total Gas | 180 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2680m: lt gry,trnsl,clr,opq f-med aggs,f-med lse,tr crs,mod- wl srt,dom sbang-sbrnd,mnr-com wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,mnr-com lse,v pr-ti vis
- **SANDSTONE** @ ~2690m: lt gry,trnsl,clr,opq f-med aggs,f-med lse,tr crs,mod-

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.5 | 66 |
| RES_DEEP (ohm.m) | 25.57 | 66 |
| RES_SHALLOW (ohm.m) | 21.54 | 66 |
| **Δ Res (Deep − Shallow)** | **4.04** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2710 m MD — Interval 2705.0 – 2715.0 m

**Sample Description (spreadsheet):** Sample 2710m: 5% Siltstone, 95% very fine to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 185U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 185 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2690m: lt gry,trnsl,clr,opq f-med aggs,f-med lse,tr crs,mod-

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.7 | 65 |
| RES_DEEP (ohm.m) | 25.70 | 65 |
| RES_SHALLOW (ohm.m) | 22.21 | 65 |
| **Δ Res (Deep − Shallow)** | **3.49** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2720 m MD — Interval 2715.0 – 2725.0 m

**Sample Description (spreadsheet):** Sample 2720m: 5% Siltstone, 95% fine to coarse Sandstone, 100% bright  FLUOR in SST. TG 177U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100.0% bri  |
| Total Gas | 177 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.5 | 66 |
| RES_DEEP (ohm.m) | 26.34 | 66 |
| RES_SHALLOW (ohm.m) | 22.52 | 66 |
| **Δ Res (Deep − Shallow)** | **3.83** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2730 m MD — Interval 2725.0 – 2735.0 m

**Sample Description (spreadsheet):** Sample 2730m: 10% Siltstone, 90% very fine to medium Sandstone, 100% bright  FLUOR in SST. TG 196U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100.0% bri  |
| Total Gas | 196 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.5 | 66 |
| RES_DEEP (ohm.m) | 30.03 | 66 |
| RES_SHALLOW (ohm.m) | 25.21 | 66 |
| **Δ Res (Deep − Shallow)** | **4.82** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2740 m MD — Interval 2735.0 – 2745.0 m

**Sample Description (spreadsheet):** Sample 2740m: 5% Siltstone, 95% very fine to medium Sandstone, 100% bright  FLUOR in SST. TG 216U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100.0% bri  |
| Total Gas | 216 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.9 | 65 |
| RES_DEEP (ohm.m) | 32.69 | 65 |
| RES_SHALLOW (ohm.m) | 27.22 | 65 |
| **Δ Res (Deep − Shallow)** | **5.47** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2750 m MD — Interval 2745.0 – 2755.0 m

**Sample Description (spreadsheet):** Sample 2750m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% bright  FLUOR in SST. TG 209U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100.0% bri  |
| Total Gas | 209 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.5 | 66 |
| RES_DEEP (ohm.m) | 33.05 | 66 |
| RES_SHALLOW (ohm.m) | 27.61 | 66 |
| **Δ Res (Deep − Shallow)** | **5.44** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2760 m MD — Interval 2755.0 – 2765.0 m

**Sample Description (spreadsheet):** Sample 2760m: 0% Siltstone, 100% fine to very coarse Sandstone, 100% bright  FLUOR in SST. TG 233U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-v crs (max: VC) |
| Fluorescence | 100.0% bri  |
| Total Gas | 233 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2780m: off wh,trnsl,clr,vf-f aggs, med-crs lse grs,pr srt,and-sbrnd, sil cmt,tr wh-off wh arg mtx,com crs frstd qtz grs,rr qtz ovgths,tr gry liths, fri-mod hd aggs,com lse grs,fr-gd vis

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.1 | 66 |
| RES_DEEP (ohm.m) | 31.78 | 66 |
| RES_SHALLOW (ohm.m) | 25.85 | 66 |
| **Δ Res (Deep − Shallow)** | **5.93** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2770 m MD — Interval 2765.0 – 2775.0 m

**Sample Description (spreadsheet):** Sample 2770m: 0% Siltstone, 100% very fine to verycoarse Sandstone, 100% bright FLUOR in SST. TG 249U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-vcrs (max: VC) |
| Fluorescence | 100.0% bri |
| Total Gas | 249 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2780m: off wh,trnsl,clr,vf-f aggs, med-crs lse grs,pr srt,and-sbrnd, sil cmt,tr wh-off wh arg mtx,com crs frstd qtz grs,rr qtz ovgths,tr gry liths, fri-mod hd aggs,com lse grs,fr-gd vis
- **SILTSTONE** @ ~2790m: lt-med gry,aren,sli micmic, tr liths,tr carb spks & lams,rr mic flks,mod hd,blk-rr sbfiss. 78 / 6 / 4 / 5 / 7 239 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 111.0 | 65 |
| RES_DEEP (ohm.m) | 32.04 | 65 |
| RES_SHALLOW (ohm.m) | 26.08 | 65 |
| **Δ Res (Deep − Shallow)** | **5.96** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2780 m MD — Interval 2775.0 – 2785.0 m

**Sample Description (spreadsheet):** Sample 2780m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 216U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100.0% bri |
| Total Gas | 216 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2780m: off wh,trnsl,clr,vf-f aggs, med-crs lse grs,pr srt,and-sbrnd, sil cmt,tr wh-off wh arg mtx,com crs frstd qtz grs,rr qtz ovgths,tr gry liths, fri-mod hd aggs,com lse grs,fr-gd vis
- **SILTSTONE** @ ~2790m: lt-med gry,aren,sli micmic, tr liths,tr carb spks & lams,rr mic flks,mod hd,blk-rr sbfiss. 78 / 6 / 4 / 5 / 7 239 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.9 | 66 |
| RES_DEEP (ohm.m) | 31.85 | 66 |
| RES_SHALLOW (ohm.m) | 25.90 | 66 |
| **Δ Res (Deep − Shallow)** | **5.96** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2790 m MD — Interval 2785.0 – 2795.0 m

**Sample Description (spreadsheet):** Sample 2790m: 5% Siltstone, 95% very fine to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 199U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 199 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2780m: off wh,trnsl,clr,vf-f aggs, med-crs lse grs,pr srt,and-sbrnd, sil cmt,tr wh-off wh arg mtx,com crs frstd qtz grs,rr qtz ovgths,tr gry liths, fri-mod hd aggs,com lse grs,fr-gd vis
- **SILTSTONE** @ ~2790m: lt-med gry,aren,sli micmic, tr liths,tr carb spks & lams,rr mic flks,mod hd,blk-rr sbfiss. 78 / 6 / 4 / 5 / 7 239 U
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.1 | 65 |
| RES_DEEP (ohm.m) | 31.91 | 65 |
| RES_SHALLOW (ohm.m) | 26.07 | 65 |
| **Δ Res (Deep − Shallow)** | **5.84** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2800 m MD — Interval 2795.0 – 2805.0 m

**Sample Description (spreadsheet):** Sample 2800m: 5% Siltstone, 95% very fine to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 230U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 230 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2780m: off wh,trnsl,clr,vf-f aggs, med-crs lse grs,pr srt,and-sbrnd, sil cmt,tr wh-off wh arg mtx,com crs frstd qtz grs,rr qtz ovgths,tr gry liths, fri-mod hd aggs,com lse grs,fr-gd vis
- **SILTSTONE** @ ~2790m: lt-med gry,aren,sli micmic, tr liths,tr carb spks & lams,rr mic flks,mod hd,blk-rr sbfiss. 78 / 6 / 4 / 5 / 7 239 U
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 108.0 | 66 |
| RES_DEEP (ohm.m) | 35.27 | 66 |
| RES_SHALLOW (ohm.m) | 28.36 | 66 |
| **Δ Res (Deep − Shallow)** | **6.91** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2810 m MD — Interval 2805.0 – 2815.0 m

**Sample Description (spreadsheet):** Sample 2810m: 0% Siltstone, 100% coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 192U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | crs (max: C) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 192 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2790m: lt-med gry,aren,sli micmic, tr liths,tr carb spks & lams,rr mic flks,mod hd,blk-rr sbfiss. 78 / 6 / 4 / 5 / 7 239 U
- **SANDSTONE** @ ~2810m: v lt gry brn,off wh,trnsl, clr,f-crs aggs,pr srt,sbang-sbrnd,sil cmt,nil vis mtx,lse & cln,qtz ovgths, tr gry liths,rr mic flks,tr frstd qtz, gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.7 | 66 |
| RES_DEEP (ohm.m) | 37.30 | 66 |
| RES_SHALLOW (ohm.m) | 31.45 | 66 |
| **Δ Res (Deep − Shallow)** | **5.85** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2820 m MD — Interval 2815.0 – 2825.0 m

**Sample Description (spreadsheet):** Sample 2820m: 0% Siltstone, 100% coarse Sandstone, 100% bright FLUOR in SST. TG 246U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | crs (max: C) |
| Fluorescence | 100.0% bri |
| Total Gas | 246 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2810m: v lt gry brn,off wh,trnsl, clr,f-crs aggs,pr srt,sbang-sbrnd,sil cmt,nil vis mtx,lse & cln,qtz ovgths, tr gry liths,rr mic flks,tr frstd qtz, gd inf por,fluor.
- **SANDSTONE** @ ~2840m: off wh,trnsl,clr,vf-crs,pr srt,sbang-sbrnd,wk sil cmt,nil-tr off wh-wh arg mtx,com gry liths,qtz ovgths, fri-mod hd aggs,dom lse,fr-gd vis & inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.9 | 65 |
| RES_DEEP (ohm.m) | 39.68 | 65 |
| RES_SHALLOW (ohm.m) | 33.95 | 65 |
| **Δ Res (Deep − Shallow)** | **5.73** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2830 m MD — Interval 2825.0 – 2835.0 m

**Sample Description (spreadsheet):** Sample 2830m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 199U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100.0% bri |
| Total Gas | 199 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2810m: v lt gry brn,off wh,trnsl, clr,f-crs aggs,pr srt,sbang-sbrnd,sil cmt,nil vis mtx,lse & cln,qtz ovgths, tr gry liths,rr mic flks,tr frstd qtz, gd inf por,fluor.
- **SANDSTONE** @ ~2840m: off wh,trnsl,clr,vf-crs,pr srt,sbang-sbrnd,wk sil cmt,nil-tr off wh-wh arg mtx,com gry liths,qtz ovgths, fri-mod hd aggs,dom lse,fr-gd vis & inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.4 | 66 |
| RES_DEEP (ohm.m) | 41.17 | 66 |
| RES_SHALLOW (ohm.m) | 37.57 | 66 |
| **Δ Res (Deep − Shallow)** | **3.60** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2870 m MD — Interval 2865.0 – 2875.0 m

**Sample Description (spreadsheet):** Sample 2870m: common siderite in 70% Siltstone, trace siderite in 30% very fine to fine Sandstone, 90% dull FLUOR in SST. TG 134U

| Property | Value |
|----------|-------|
| % Sandstone | 30 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 90.0% dll |
| Total Gas | 134 U |
| FeCO₃ in Siltstone | com |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2890m: lt brn gry,pl brn,off wh,vf-f,wl srt,sbang-sbrnd,sil cmt, tr wh-off wh arg mtx,grd to SLTST i/p, rr carb spks,fri-mod hd,pr-ti vis por, 27-09-2023 dll-mod bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 129.4 | 65 |
| RES_DEEP (ohm.m) | 14.79 | 65 |
| RES_SHALLOW (ohm.m) | 13.24 | 65 |
| **Δ Res (Deep − Shallow)** | **1.55** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2880 m MD — Interval 2875.0 – 2885.0 m

**Sample Description (spreadsheet):** Sample 2880m: common siderite in 60% Siltstone, trace siderite in 40% very fine to fine Sandstone, 90% dull FLUOR in SST. TG 130U

| Property | Value |
|----------|-------|
| % Sandstone | 40 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 90.0% dll |
| Total Gas | 130 U |
| FeCO₃ in Siltstone | com |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2890m: lt brn gry,pl brn,off wh,vf-f,wl srt,sbang-sbrnd,sil cmt, tr wh-off wh arg mtx,grd to SLTST i/p, rr carb spks,fri-mod hd,pr-ti vis por, 27-09-2023 dll-mod bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 134.1 | 66 |
| RES_DEEP (ohm.m) | 15.80 | 66 |
| RES_SHALLOW (ohm.m) | 13.33 | 66 |
| **Δ Res (Deep − Shallow)** | **2.47** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2890 m MD — Interval 2885.0 – 2895.0 m

**Sample Description (spreadsheet):** Sample 2890m: common siderite in 50% Siltstone, trace siderite in 50% very fine to fine Sandstone, 90% dull to moderately bright FLUOR in SST. TG 121U

| Property | Value |
|----------|-------|
| % Sandstone | 50 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 90.0% dll-mod bri |
| Total Gas | 121 U |
| FeCO₃ in Siltstone | com |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2890m: lt brn gry,pl brn,off wh,vf-f,wl srt,sbang-sbrnd,sil cmt, tr wh-off wh arg mtx,grd to SLTST i/p, rr carb spks,fri-mod hd,pr-ti vis por, 27-09-2023 dll-mod bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 118.9 | 66 |
| RES_DEEP (ohm.m) | 14.41 | 66 |
| RES_SHALLOW (ohm.m) | 13.22 | 66 |
| **Δ Res (Deep − Shallow)** | **1.18** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2900 m MD — Interval 2895.0 – 2905.0 m

**Sample Description (spreadsheet):** Sample 2900m: rare siderite in 45% Siltstone, rare siderite in 55% very fine to fine Sandstone, 90% dull to moderately bright FLUOR in SST. TG 118U

| Property | Value |
|----------|-------|
| % Sandstone | 55 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 90.0% dll-mod bri |
| Total Gas | 118 U |
| FeCO₃ in Siltstone | rr |
| FeCO₃ in Sandstone | rr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2890m: lt brn gry,pl brn,off wh,vf-f,wl srt,sbang-sbrnd,sil cmt, tr wh-off wh arg mtx,grd to SLTST i/p, rr carb spks,fri-mod hd,pr-ti vis por, 27-09-2023 dll-mod bri fluor.
- **SILTSTONE** @ ~2920m: lt-med gry,med brn gry, aren,rr arg,sli micmic,com sid frags, rr carb spks,rr liths,mod hd-hd,sbblky. 4 14 2930 14 18 28 1K 10K

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 119.1 | 65 |
| RES_DEEP (ohm.m) | 12.96 | 65 |
| RES_SHALLOW (ohm.m) | 12.22 | 65 |
| **Δ Res (Deep − Shallow)** | **0.75** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2910 m MD — Interval 2905.0 – 2915.0 m

**Sample Description (spreadsheet):** Sample 2910m: trace siderite in 35% Siltstone, rare siderite in 65% very fine to fine Sandstone, 90% dull to moderately bright FLUOR in SST. TG 128U

| Property | Value |
|----------|-------|
| % Sandstone | 65 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 90.0% dll-mod bri |
| Total Gas | 128 U |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | rr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2890m: lt brn gry,pl brn,off wh,vf-f,wl srt,sbang-sbrnd,sil cmt, tr wh-off wh arg mtx,grd to SLTST i/p, rr carb spks,fri-mod hd,pr-ti vis por, 27-09-2023 dll-mod bri fluor.
- **SILTSTONE** @ ~2920m: lt-med gry,med brn gry, aren,rr arg,sli micmic,com sid frags, rr carb spks,rr liths,mod hd-hd,sbblky. 4 14 2930 14 18 28 1K 10K

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 126.5 | 66 |
| RES_DEEP (ohm.m) | 13.12 | 66 |
| RES_SHALLOW (ohm.m) | 11.91 | 66 |
| **Δ Res (Deep − Shallow)** | **1.21** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2920 m MD — Interval 2915.0 – 2925.0 m

**Sample Description (spreadsheet):** Sample 2920m: trace siderite in 30% Siltstone, rare siderite in 70% very fine to fine Sandstone, 90% dull to moderately bright FLUOR in SST. TG 113U

| Property | Value |
|----------|-------|
| % Sandstone | 70 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 90.0% dll-mod bri |
| Total Gas | 113 U |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | rr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2920m: lt-med gry,med brn gry, aren,rr arg,sli micmic,com sid frags, rr carb spks,rr liths,mod hd-hd,sbblky. 4 14 2930 14 18 28 1K 10K
- **SANDSTONE** @ ~2940m: v lt gry brn,off wh, vf-f,wl srt,sbang-sbrnd,sil cmt,tr wh-off wh arg mtx,rr sid,rr mic flks, rr carb spks,fri-mod hd,pr-ti vis por, mod bri-bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 123.2 | 65 |
| RES_DEEP (ohm.m) | 18.30 | 65 |
| RES_SHALLOW (ohm.m) | 15.42 | 65 |
| **Δ Res (Deep − Shallow)** | **2.89** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2960 m MD — Interval 2955.0 – 2965.0 m

**Sample Description (spreadsheet):** Sample 2960m: 10% Siltstone, 90% very fine to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 168U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 168 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2940m: v lt gry brn,off wh, vf-f,wl srt,sbang-sbrnd,sil cmt,tr wh-off wh arg mtx,rr sid,rr mic flks, rr carb spks,fri-mod hd,pr-ti vis por, mod bri-bri fluor.
- **SANDSTONE** @ ~2960m: v lt gry brn,off wh, trnsl,vf-f aggs,occ crs lse grs,mod wl srt,sbang-sbrnd,sil cmt,tr wh-off wh arg mtx,rr carb spks,fri-mod hd aggs,lse i/p,pr vis & inf por,bri

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.4 | 66 |
| RES_DEEP (ohm.m) | 33.62 | 66 |
| RES_SHALLOW (ohm.m) | 30.92 | 66 |
| **Δ Res (Deep − Shallow)** | **2.70** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2970 m MD — Interval 2965.0 – 2975.0 m

**Sample Description (spreadsheet):** Sample 2970m: 5% Siltstone, 95% very fine to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 166U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 166 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2960m: v lt gry brn,off wh, trnsl,vf-f aggs,occ crs lse grs,mod wl srt,sbang-sbrnd,sil cmt,tr wh-off wh arg mtx,rr carb spks,fri-mod hd aggs,lse i/p,pr vis & inf por,bri

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.7 | 65 |
| RES_DEEP (ohm.m) | 28.79 | 65 |
| RES_SHALLOW (ohm.m) | 26.32 | 65 |
| **Δ Res (Deep − Shallow)** | **2.47** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2980 m MD — Interval 2975.0 – 2985.0 m

**Sample Description (spreadsheet):** Sample 2980m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 220U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100.0% bri |
| Total Gas | 220 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2960m: v lt gry brn,off wh, trnsl,vf-f aggs,occ crs lse grs,mod wl srt,sbang-sbrnd,sil cmt,tr wh-off wh arg mtx,rr carb spks,fri-mod hd aggs,lse i/p,pr vis & inf por,bri

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.3 | 66 |
| RES_DEEP (ohm.m) | 26.78 | 66 |
| RES_SHALLOW (ohm.m) | 23.80 | 66 |
| **Δ Res (Deep − Shallow)** | **2.98** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2990 m MD — Interval 2985.0 – 2995.0 m

**Sample Description (spreadsheet):** Sample 2990m: 10% Siltstone, 90% very fine to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 164U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 164 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 114.4 | 66 |
| RES_DEEP (ohm.m) | 24.98 | 66 |
| RES_SHALLOW (ohm.m) | 21.72 | 66 |
| **Δ Res (Deep − Shallow)** | **3.26** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3000 m MD — Interval 2995.0 – 3005.0 m

**Sample Description (spreadsheet):** Sample 3000m: 20% Siltstone, 80% very fine to fine agg,fine to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 128U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | vf-f agg,f-crs (max: C) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 128 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 113.9 | 65 |
| RES_DEEP (ohm.m) | 25.03 | 65 |
| RES_SHALLOW (ohm.m) | 20.95 | 65 |
| **Δ Res (Deep − Shallow)** | **4.08** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3010 m MD — Interval 3005.0 – 3015.0 m

**Sample Description (spreadsheet):** Sample 3010m: 20% Siltstone, 80% very fine to fine agg,fine to coarse Sandstone, 100% moderately bright to bright FLUOR in SST. TG 186U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | vf-f agg,f-crs (max: C) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 186 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.0 | 66 |
| RES_DEEP (ohm.m) | 32.23 | 66 |
| RES_SHALLOW (ohm.m) | 27.16 | 66 |
| **Δ Res (Deep − Shallow)** | **5.07** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3020 m MD — Interval 3015.0 – 3025.0 m

**Sample Description (spreadsheet):** Sample 3020m: 10% Siltstone, 90% fine to medium Sandstone, 100% bright  FLUOR in SST. TG 161U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100.0% bri  |
| Total Gas | 161 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.3 | 66 |
| RES_DEEP (ohm.m) | 34.58 | 66 |
| RES_SHALLOW (ohm.m) | 30.56 | 66 |
| **Δ Res (Deep − Shallow)** | **4.01** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3030 m MD — Interval 3025.0 – 3035.0 m

**Sample Description (spreadsheet):** Sample 3030m: 5% Siltstone, 95% fine to medium Sandstone, 100% bright  FLUOR in SST. TG 164U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100.0% bri  |
| Total Gas | 164 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.9 | 65 |
| RES_DEEP (ohm.m) | 28.21 | 65 |
| RES_SHALLOW (ohm.m) | 25.28 | 65 |
| **Δ Res (Deep − Shallow)** | **2.93** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3040 m MD — Interval 3035.0 – 3045.0 m

**Sample Description (spreadsheet):** Sample 3040m: 20% Siltstone, 80% very fine to medium Sandstone, 100% bright  FLUOR in SST. TG 187U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100.0% bri  |
| Total Gas | 187 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3060m: lt brn,lt gry,trnsl, opq,dom f aggs,f-dom med lse,tr crs, mod wl srt,dom sbang-sbrnd,mnr-com wk sil cmt,com lt brn arg mtx,tr carb flks,tr sid,fri aggs,com lse,v pr-pr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.7 | 66 |
| RES_DEEP (ohm.m) | 29.93 | 66 |
| RES_SHALLOW (ohm.m) | 27.38 | 66 |
| **Δ Res (Deep − Shallow)** | **2.56** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3050 m MD — Interval 3045.0 – 3055.0 m

**Sample Description (spreadsheet):** Sample 3050m: 10% Siltstone, 90% very fine to medium Sandstone, 100% bright  FLUOR in SST. TG 198U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100.0% bri  |
| Total Gas | 198 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3060m: lt brn,lt gry,trnsl, opq,dom f aggs,f-dom med lse,tr crs, mod wl srt,dom sbang-sbrnd,mnr-com wk sil cmt,com lt brn arg mtx,tr carb flks,tr sid,fri aggs,com lse,v pr-pr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.0 | 65 |
| RES_DEEP (ohm.m) | 33.53 | 65 |
| RES_SHALLOW (ohm.m) | 28.56 | 65 |
| **Δ Res (Deep − Shallow)** | **4.97** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3060 m MD — Interval 3055.0 – 3065.0 m

**Sample Description (spreadsheet):** Sample 3060m: 10% Siltstone, rare siderite in 90% very fine to medium Sandstone, 100% bright  FLUOR in SST. TG 140U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100.0% bri  |
| Total Gas | 140 U |
| FeCO₃ in Sandstone | rr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3060m: lt brn,lt gry,trnsl, opq,dom f aggs,f-dom med lse,tr crs, mod wl srt,dom sbang-sbrnd,mnr-com wk sil cmt,com lt brn arg mtx,tr carb flks,tr sid,fri aggs,com lse,v pr-pr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.6 | 66 |
| RES_DEEP (ohm.m) | 33.10 | 66 |
| RES_SHALLOW (ohm.m) | 27.13 | 66 |
| **Δ Res (Deep − Shallow)** | **5.97** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3070 m MD — Interval 3065.0 – 3075.0 m

**Sample Description (spreadsheet):** Sample 3070m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% bright  FLUOR in SST. TG 158U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100.0% bri  |
| Total Gas | 158 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3060m: lt brn,lt gry,trnsl, opq,dom f aggs,f-dom med lse,tr crs, mod wl srt,dom sbang-sbrnd,mnr-com wk sil cmt,com lt brn arg mtx,tr carb flks,tr sid,fri aggs,com lse,v pr-pr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.1 | 66 |
| RES_DEEP (ohm.m) | 28.95 | 66 |
| RES_SHALLOW (ohm.m) | 25.21 | 66 |
| **Δ Res (Deep − Shallow)** | **3.74** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3080 m MD — Interval 3075.0 – 3085.0 m

**Sample Description (spreadsheet):** Sample 3080m: 20% Siltstone, 80% fine to coarse Sandstone, 100% bright  FLUOR in SST. TG 150U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100.0% bri  |
| Total Gas | 150 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3060m: lt brn,lt gry,trnsl, opq,dom f aggs,f-dom med lse,tr crs, mod wl srt,dom sbang-sbrnd,mnr-com wk sil cmt,com lt brn arg mtx,tr carb flks,tr sid,fri aggs,com lse,v pr-pr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.5 | 65 |
| RES_DEEP (ohm.m) | 29.75 | 65 |
| RES_SHALLOW (ohm.m) | 25.10 | 65 |
| **Δ Res (Deep − Shallow)** | **4.66** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3090 m MD — Interval 3085.0 – 3095.0 m

**Sample Description (spreadsheet):** Sample 3090m: 10% Siltstone, 90% fine to coarse Sandstone, 100% bright  FLUOR in SST. TG 190U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100.0% bri  |
| Total Gas | 190 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.3 | 66 |
| RES_DEEP (ohm.m) | 27.93 | 66 |
| RES_SHALLOW (ohm.m) | 23.90 | 66 |
| **Δ Res (Deep − Shallow)** | **4.03** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3100 m MD — Interval 3095.0 – 3105.0 m

**Sample Description (spreadsheet):** Sample 3100m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% bright  FLUOR in SST. TG 180U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100.0% bri  |
| Total Gas | 180 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3120m: clr,trnsl,lt gry,f-med,mnr crs,mod-mod wl srt,dom sbang-sbrnd, wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,com-dom lse,v pr vis-fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 108.8 | 66 |
| RES_DEEP (ohm.m) | 25.86 | 66 |
| RES_SHALLOW (ohm.m) | 21.77 | 66 |
| **Δ Res (Deep − Shallow)** | **4.09** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3110 m MD — Interval 3105.0 – 3115.0 m

**Sample Description (spreadsheet):** Sample 3110m: 0% Siltstone, 100% very fine to medium Sandstone, 90% bright  FLUOR in SST. TG 138U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 90.0% bri  |
| Total Gas | 138 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3120m: clr,trnsl,lt gry,f-med,mnr crs,mod-mod wl srt,dom sbang-sbrnd, wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,com-dom lse,v pr vis-fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 113.8 | 65 |
| RES_DEEP (ohm.m) | 23.05 | 65 |
| RES_SHALLOW (ohm.m) | 20.48 | 65 |
| **Δ Res (Deep − Shallow)** | **2.57** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3120 m MD — Interval 3115.0 – 3125.0 m

**Sample Description (spreadsheet):** Sample 3120m: 10% Siltstone, 90% fine to coarse Sandstone, 80% moderately bright to bright FLUOR in SST. TG 215U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 80.0% mod bri-bri |
| Total Gas | 215 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3120m: clr,trnsl,lt gry,f-med,mnr crs,mod-mod wl srt,dom sbang-sbrnd, wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,com-dom lse,v pr vis-fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 112.1 | 66 |
| RES_DEEP (ohm.m) | 24.67 | 66 |
| RES_SHALLOW (ohm.m) | 21.72 | 66 |
| **Δ Res (Deep − Shallow)** | **2.95** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3130 m MD — Interval 3125.0 – 3135.0 m

**Sample Description (spreadsheet):** Sample 3130m: 10% Siltstone, 90% fine to coarse Sandstone, 100% bright  FLUOR in SST. TG 204U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100.0% bri  |
| Total Gas | 204 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3120m: clr,trnsl,lt gry,f-med,mnr crs,mod-mod wl srt,dom sbang-sbrnd, wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,com-dom lse,v pr vis-fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.8 | 65 |
| RES_DEEP (ohm.m) | 30.70 | 65 |
| RES_SHALLOW (ohm.m) | 25.66 | 65 |
| **Δ Res (Deep − Shallow)** | **5.04** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3140 m MD — Interval 3135.0 – 3145.0 m

**Sample Description (spreadsheet):** Sample 3140m: 0% Siltstone, 100% fine to coarse Sandstone, 100% bright  FLUOR in SST. TG 180U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100.0% bri  |
| Total Gas | 180 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3120m: clr,trnsl,lt gry,f-med,mnr crs,mod-mod wl srt,dom sbang-sbrnd, wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs,com-dom lse,v pr vis-fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.4 | 66 |
| RES_DEEP (ohm.m) | 37.94 | 66 |
| RES_SHALLOW (ohm.m) | 32.07 | 66 |
| **Δ Res (Deep − Shallow)** | **5.86** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3150 m MD — Interval 3145.0 – 3155.0 m

**Sample Description (spreadsheet):** Sample 3150m: 0% Siltstone, 100% fine to medium Sandstone, 100% bright  FLUOR in SST. TG 174U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100.0% bri  |
| Total Gas | 174 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3170m: lt gry,trnsl,clr,opq,f-v crs,tr vf aggs,tr crs lse,mod wl srt, sbang-sbrnd,tr-mnr wk sil cmt,tr-mnr lt gry arg mtx,tr carb flks,tr liths,fri aggs,com-dom lse,v pr vis por,fr inf

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.9 | 66 |
| RES_DEEP (ohm.m) | 46.35 | 66 |
| RES_SHALLOW (ohm.m) | 39.10 | 66 |
| **Δ Res (Deep − Shallow)** | **7.25** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3160 m MD — Interval 3155.0 – 3165.0 m

**Sample Description (spreadsheet):** Sample 3160m: 0% Siltstone, 100% fine to medium Sandstone, 100% bright  FLUOR in SST. TG 178U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100.0% bri  |
| Total Gas | 178 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3170m: lt gry,trnsl,clr,opq,f-v crs,tr vf aggs,tr crs lse,mod wl srt, sbang-sbrnd,tr-mnr wk sil cmt,tr-mnr lt gry arg mtx,tr carb flks,tr liths,fri aggs,com-dom lse,v pr vis por,fr inf

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.0 | 65 |
| RES_DEEP (ohm.m) | 44.62 | 65 |
| RES_SHALLOW (ohm.m) | 38.07 | 65 |
| **Δ Res (Deep − Shallow)** | **6.56** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3170 m MD — Interval 3165.0 – 3175.0 m

**Sample Description (spreadsheet):** Sample 3170m: 0% Siltstone, 100% fine to very coarse Sandstone, 100% bright  FLUOR in SST. TG 191U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-v crs (max: VC) |
| Fluorescence | 100.0% bri  |
| Total Gas | 191 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3170m: lt gry,trnsl,clr,opq,f-v crs,tr vf aggs,tr crs lse,mod wl srt, sbang-sbrnd,tr-mnr wk sil cmt,tr-mnr lt gry arg mtx,tr carb flks,tr liths,fri aggs,com-dom lse,v pr vis por,fr inf

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.7 | 60 |
| RES_DEEP (ohm.m) | 47.12 | 66 |
| RES_SHALLOW (ohm.m) | 39.49 | 66 |
| **Δ Res (Deep − Shallow)** | **7.63** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3180 m MD — Interval 3175.0 – 3183.0 m

**Sample Description (spreadsheet):** Sample 3180m: 0% Siltstone, 100% fine to very coarse Sandstone, 100% bright  FLUOR in SST. TG 181U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-v crs (max: VC) |
| Fluorescence | 100.0% bri  |
| Total Gas | 181 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3170m: lt gry,trnsl,clr,opq,f-v crs,tr vf aggs,tr crs lse,mod wl srt, sbang-sbrnd,tr-mnr wk sil cmt,tr-mnr lt gry arg mtx,tr carb flks,tr liths,fri aggs,com-dom lse,v pr vis por,fr inf

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| RES_DEEP (ohm.m) | 46.45 | 13 |
| RES_SHALLOW (ohm.m) | 38.56 | 13 |
| **Δ Res (Deep − Shallow)** | **7.89** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3186 m MD — Interval 3183.0 – 3188.5 m

**Sample Description (spreadsheet):** Sample 3186m: 0% Siltstone, 100% fine to very coarse Sandstone, 100% bright  FLUOR in SST. TG 190U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-v crs (max: VC) |
| Fluorescence | 100.0% bri  |
| Total Gas | 190 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3170m: lt gry,trnsl,clr,opq,f-v crs,tr vf aggs,tr crs lse,mod wl srt, sbang-sbrnd,tr-mnr wk sil cmt,tr-mnr lt gry arg mtx,tr carb flks,tr liths,fri aggs,com-dom lse,v pr vis por,fr inf

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|

**Permeability Proxy:** Insufficient resistivity data
---

## 5. Summary Statistics (McKinlay Member)

| Metric | Value |
|--------|-------|
| Intervals analysed | 143 |
| Depth range | 1645 – 3186 m |
| Avg % Sandstone | 91.0% |
| Avg Δ Res (Deep−Shallow) | 3.58 ohm.m |
| Max Δ Res | 7.94 ohm.m |
| Min Δ Res | -1.78 ohm.m |
| Mudlog matches | 115 / 143 |
