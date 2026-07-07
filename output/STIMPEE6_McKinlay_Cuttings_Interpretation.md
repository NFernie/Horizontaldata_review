# STIMPEE 6 — McKinlay Member Cuttings & Log Interpretation

**Generated:** 2026-07-07 04:17 UTC  
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

**Initial reservoir entry (DC30 + shallowest McKinlay):** 1632.38 m MD

**Target re-entry (lone McKinlay below an overburden entry pair):**
- 1993.00 m MD
- 2396.93 m MD
- 2939.30 m MD

**Overburden entry (Murta + corresponding McKinlay within 5 m):**
| McKinlay entry (m MD) | Murta (m MD) | Δ (m) | Re-entry (m MD) | Zone length (m) |
|-----------------------|-------------|-------|-----------------|-----------------|
| 1767.21 | 1765.88 | 1.33 | 1993.00 | 225.8 |
| 1954.34 | 1956.00 | 1.66 | 2396.93 | 442.6 |
| 2353.86 | 2352.74 | 1.12 | 2939.30 | 585.4 |
| 2845.46 | 2844.00 | 1.46 | 2895.46 (assumed +50 m) | 50.0 |

**McKinlay Member analysis window:** 1632.4 – 3186.1 m MD

**Excluded overburden intervals (entry → re-entry, pay resumes at re-entry):** 1767–1993 m (overburden), 1954–2397 m (overburden), 2354–2939 m (overburden), 2845–2895 m (overburden)

**Samples in McKinlay Member:** 43 of 185 total
- Excluded pre-reservoir: 19
- Excluded overburden intervals: 123

## 3. Known Shortcomings

> **Read this section before using the output.**

1. **Mudlog PDF text extraction is imperfect.** Depth-to-description assignment uses ±15 m proximity heuristics.
2. **Formation top discrepancies** between Mck_Murta.xlsx and mudlog PDF picks are noted where present.
3. **Well name mapping:** STIMPEE 6 → `STIMPEE 6` (verified by TD and LAS WELL header).
4. **Sample intervals** are midpoints between consecutive sample depths — variable widths where spacing is irregular.
5. **Resistivity permeability proxy** is qualitative only (Δ Res = RES_DEEP − RES_SHALLOW).
6. **NULL LAS values** (-999.25) excluded from averages.
7. **Exclusion zones** span from each Murta/McKinlay overburden entry to the next lone McKinlay re-entry below (or entry + 50 m MD if no re-entry is mapped). Initial DC30/McKinlay reservoir entry is not excluded.
8. **Input Sheet only** — Calculations Sheet not used.
## 4. McKinlay Member Sample Intervals

Each section: depth interval, spreadsheet sample, mudlog cuttings, wireline log averages.

### 1635 m MD — Interval 1632.5 – 1637.5 m

**Sample Description (spreadsheet):** Sample 1635m: Tr siderite in 30% Siltstone, Tr siderite in 70% very fine to medium Sandstone, 60% dull  to  bright FLUOR in SST. TG 250U

| Property | Value |
|----------|-------|
| % Sandstone | 70 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 60.0% dll - bri |
| Total Gas | 250 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.4 | 33 |
| RES_DEEP (ohm.m) | 62.38 | 33 |
| RES_SHALLOW (ohm.m) | 48.23 | 33 |
| **Δ Res (Deep − Shallow)** | **14.15** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1640 m MD — Interval 1637.5 – 1642.5 m

**Sample Description (spreadsheet):** Sample 1640m: 10% Siltstone, Tr siderite in 90% fine to medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 255U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 255 U |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.3 | 33 |
| RES_DEEP (ohm.m) | 44.89 | 33 |
| RES_SHALLOW (ohm.m) | 40.21 | 33 |
| **Δ Res (Deep − Shallow)** | **4.69** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

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

### 1760 m MD — Interval 1755.0 – 1765.0 m

**Sample Description (spreadsheet):** Sample 1760m: 0% Siltstone, 100% very fine to medium, rare coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 311U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med, rr crs (max: M ) |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 311 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.5 | 66 |
| RES_DEEP (ohm.m) | 39.74 | 66 |
| RES_SHALLOW (ohm.m) | 35.64 | 66 |
| **Δ Res (Deep − Shallow)** | **4.10** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2950 m MD — Interval 2945.0 – 2955.0 m

**Sample Description (spreadsheet):** Sample 2950m: trace siderite in 30% Siltstone, rare siderite in 70% very fine to fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 209U

| Property | Value |
|----------|-------|
| % Sandstone | 70 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 209 U |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | rr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2940m: v lt gry brn,off wh, vf-f,wl srt,sbang-sbrnd,sil cmt,tr wh-off wh arg mtx,rr sid,rr mic flks, rr carb spks,fri-mod hd,pr-ti vis por, mod bri-bri fluor.
- **SANDSTONE** @ ~2960m: v lt gry brn,off wh, trnsl,vf-f aggs,occ crs lse grs,mod wl srt,sbang-sbrnd,sil cmt,tr wh-off wh arg mtx,rr carb spks,fri-mod hd aggs,lse i/p,pr vis & inf por,bri

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.2 | 65 |
| RES_DEEP (ohm.m) | 35.24 | 65 |
| RES_SHALLOW (ohm.m) | 30.92 | 65 |
| **Δ Res (Deep − Shallow)** | **4.32** | — |

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
| Intervals analysed | 43 |
| Depth range | 1635 – 3186 m |
| Avg % Sandstone | 93.8% |
| Avg Δ Res (Deep−Shallow) | 3.29 ohm.m |
| Max Δ Res | 14.15 ohm.m |
| Min Δ Res | -1.78 ohm.m |
| Mudlog matches | 31 / 43 |
