# STIMPEE 7 — McKinlay Member Cuttings & Log Interpretation

**Generated:** 2026-07-07 04:18 UTC  
**Well:** STIMPEE 7 (STIMPEE 7)  
**TD:** 2840 m MD  

---

## 1. Data Sources & Methodology

| Source | File | Role |
|--------|------|------|
| Mudlog PDF | `Stimpee 7_Mudlog_Spud-2840m_TD_Field Final.pdf` | Cuttings lithology descriptions |
| Sample Descriptions | `Stimpee 7_Hz Section Samples Descriptions_Rev3.xlsx` (Input Sheet) | Depth intervals & sample properties |
| Formation Tops | `DC30.xlsx`, `Mck_Murta.xlsx` | Reservoir entry & overburden identification |
| Wireline Log (LAS) | `Stimpee_7` | GR, RES_DEEP, RES_SHALLOW |

## 2. Formation Top Analysis

### 2.1 Key Tops

| Marker | Depth (m MD) | Source |
|--------|-------------|--------|
| DC30 | 1704.52 | DC30.xlsx |
| McKinlay Member (shallowest) | 1702.50 | Mck_Murta.xlsx |

### 2.2 McKinlay Member Top Classification

**Initial reservoir entry (DC30 + shallowest McKinlay):** 1702.50 m MD

**Target re-entry (lone McKinlay below an overburden entry pair):**
- 2163.43 m MD
- 2306.00 m MD
- 2675.00 m MD
- 2840.00 m MD

**Overburden entry (Murta + corresponding McKinlay within 5 m):**
| McKinlay entry (m MD) | Murta (m MD) | Δ (m) | Re-entry (m MD) | Zone length (m) |
|-----------------------|-------------|-------|-----------------|-----------------|
| 2108.03 | 2110.62 | 2.59 | 2163.43 | 55.4 |
| 2255.06 | 2258.00 | 2.94 | 2306.00 | 50.9 |
| 2513.48 | 2515.00 | 1.52 | 2675.00 | 161.5 |
| 2765.97 | 2766.00 | 0.03 | 2840.00 | 74.0 |

**McKinlay Member analysis window:** 1702.5 – 2840.1 m MD

**Excluded overburden intervals (entry → re-entry, pay resumes at re-entry):** 2108–2163 m (overburden), 2255–2306 m (overburden), 2513–2675 m (overburden), 2766–2840 m (overburden)

**Samples in McKinlay Member:** 83 of 148 total
- Excluded pre-reservoir: 28
- Excluded overburden intervals: 37

## 3. Known Shortcomings

> **Read this section before using the output.**

1. **Mudlog PDF text extraction is imperfect.** Depth-to-description assignment uses ±15 m proximity heuristics.
2. **Formation top discrepancies** between Mck_Murta.xlsx and mudlog PDF picks are noted where present.
3. **Well name mapping:** STIMPEE 7 → `STIMPEE 7` (verified by TD and LAS WELL header).
4. **Sample intervals** are midpoints between consecutive sample depths — variable widths where spacing is irregular.
5. **Resistivity permeability proxy** is qualitative only (Δ Res = RES_DEEP − RES_SHALLOW).
6. **NULL LAS values** (-999.25) excluded from averages.
7. **Exclusion zones** span from each Murta/McKinlay overburden entry to the next lone McKinlay re-entry below (or entry + 50 m MD if no re-entry is mapped). Initial DC30/McKinlay reservoir entry is not excluded.
8. **Input Sheet only** — Calculations Sheet not used.
## 4. McKinlay Member Sample Intervals

Each section: depth interval, spreadsheet sample, mudlog cuttings, wireline log averages.

### 1705 m MD — Interval 1702.5 – 1707.5 m

**Sample Description (spreadsheet):** Sample 1705m: 30% Siltstone, 70% very fine to fine Sandstone, 60% moderately bright  to  bright FLUOR in SST. TG 55U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | vf-f (max: M) |
| Fluorescence | 70% mod bri - bri |
| Total Gas | 55.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1690m: off wh,pl brn,trnsl,vf-f aggs,occ f-med fri aggs,sbang-sbrnd, mod wl srt,mod sil cmt,mnr-med kaol mtx,mod hd aggs,v pr-pr vis por,fluor. 85 / 6 / 3 / 3 / 3 82 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.8 | 33 |
| RES_DEEP (ohm.m) | 64.38 | 33 |
| RES_SHALLOW (ohm.m) | 49.28 | 33 |
| **Δ Res (Deep − Shallow)** | **15.10** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1710 m MD — Interval 1707.5 – 1712.5 m

**Sample Description (spreadsheet):** Sample 1710m: 30% Siltstone, 70% very fine to fine Sandstone, 70% bright FLUOR in SST. TG 145U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100% bri |
| Total Gas | 145.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.3 | 32 |
| RES_DEEP (ohm.m) | 61.80 | 32 |
| RES_SHALLOW (ohm.m) | 50.52 | 32 |
| **Δ Res (Deep − Shallow)** | **11.27** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1715 m MD — Interval 1712.5 – 1717.5 m

**Sample Description (spreadsheet):** Sample 1715m: 15% Siltstone, 85% very fine to fine Sandstone, 100% bright FLUOR in SST. TG 190U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100% bri |
| Total Gas | 190.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.3 | 33 |
| RES_DEEP (ohm.m) | 58.55 | 33 |
| RES_SHALLOW (ohm.m) | 48.79 | 33 |
| **Δ Res (Deep − Shallow)** | **9.76** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1720 m MD — Interval 1717.5 – 1722.5 m

**Sample Description (spreadsheet):** Sample 1720m: 10% Siltstone, 90% very fine to fine Sandstone, 100% bright FLUOR in SST. TG 230U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100% bri |
| Total Gas | 230.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.7 | 33 |
| RES_DEEP (ohm.m) | 50.88 | 33 |
| RES_SHALLOW (ohm.m) | 42.88 | 33 |
| **Δ Res (Deep − Shallow)** | **8.00** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1725 m MD — Interval 1722.5 – 1727.5 m

**Sample Description (spreadsheet):** Sample 1725m: 0% Siltstone, 100% very fine to fine Sandstone, 100% bright FLUOR in SST. TG 200U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100% bri |
| Total Gas | 200.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1740m: trnsl,lt brn,clr,wh-off wh,f-occ med,mod srt,sbang-sbrnd, wk sil cmt,tr wh arg mtx,fri aggs, fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.8 | 33 |
| RES_DEEP (ohm.m) | 57.23 | 33 |
| RES_SHALLOW (ohm.m) | 47.35 | 33 |
| **Δ Res (Deep − Shallow)** | **9.88** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1730 m MD — Interval 1727.5 – 1732.5 m

**Sample Description (spreadsheet):** Sample 1730m: 5% Siltstone, 95% very fine to fine Sandstone, 100% bright FLUOR in SST. TG 215U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100% bri |
| Total Gas | 215.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1740m: trnsl,lt brn,clr,wh-off wh,f-occ med,mod srt,sbang-sbrnd, wk sil cmt,tr wh arg mtx,fri aggs, fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.5 | 33 |
| RES_DEEP (ohm.m) | 51.66 | 33 |
| RES_SHALLOW (ohm.m) | 43.11 | 33 |
| **Δ Res (Deep − Shallow)** | **8.55** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1735 m MD — Interval 1732.5 – 1737.5 m

**Sample Description (spreadsheet):** Sample 1735m: 0% Siltstone, 100% very fine to fine Sandstone, 100% bright FLUOR in SST. TG 164U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100% bri |
| Total Gas | 164.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1740m: trnsl,lt brn,clr,wh-off wh,f-occ med,mod srt,sbang-sbrnd, wk sil cmt,tr wh arg mtx,fri aggs, fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.1 | 32 |
| RES_DEEP (ohm.m) | 47.23 | 32 |
| RES_SHALLOW (ohm.m) | 42.80 | 32 |
| **Δ Res (Deep − Shallow)** | **4.43** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1740 m MD — Interval 1737.5 – 1742.5 m

**Sample Description (spreadsheet):** Sample 1740m: 5% Siltstone, 95% fine  Sandstone, 100% bright FLUOR in SST. TG 233U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f  (max: F) |
| Fluorescence | 100% bri |
| Total Gas | 233.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1740m: trnsl,lt brn,clr,wh-off wh,f-occ med,mod srt,sbang-sbrnd, wk sil cmt,tr wh arg mtx,fri aggs, fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.1 | 33 |
| RES_DEEP (ohm.m) | 48.54 | 33 |
| RES_SHALLOW (ohm.m) | 45.31 | 33 |
| **Δ Res (Deep − Shallow)** | **3.23** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1745 m MD — Interval 1742.5 – 1747.5 m

**Sample Description (spreadsheet):** Sample 1745m: 5% Siltstone, 95% fine Sandstone, 100% bright FLUOR in SST. TG 233U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f (max: F) |
| Fluorescence | 100% bri |
| Total Gas | 233.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1740m: trnsl,lt brn,clr,wh-off wh,f-occ med,mod srt,sbang-sbrnd, wk sil cmt,tr wh arg mtx,fri aggs, fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.4 | 33 |
| RES_DEEP (ohm.m) | 48.02 | 33 |
| RES_SHALLOW (ohm.m) | 46.24 | 33 |
| **Δ Res (Deep − Shallow)** | **1.79** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1750 m MD — Interval 1747.5 – 1752.5 m

**Sample Description (spreadsheet):** Sample 1750m: 0% Siltstone, 100% fine to medium Sandstone, 100% bright FLUOR in SST. TG 279U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 279.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1740m: trnsl,lt brn,clr,wh-off wh,f-occ med,mod srt,sbang-sbrnd, wk sil cmt,tr wh arg mtx,fri aggs, fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.8 | 33 |
| RES_DEEP (ohm.m) | 45.05 | 33 |
| RES_SHALLOW (ohm.m) | 42.80 | 33 |
| **Δ Res (Deep − Shallow)** | **2.25** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1755 m MD — Interval 1752.5 – 1757.5 m

**Sample Description (spreadsheet):** Sample 1755m: 10% Siltstone, 90% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 229U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 229.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1740m: trnsl,lt brn,clr,wh-off wh,f-occ med,mod srt,sbang-sbrnd, wk sil cmt,tr wh arg mtx,fri aggs, fr inf por,fluor.
- **SANDSTONE** @ ~1770m: trnsl,lt brn,clr,wh-off wh,f-crs,mod srt,sbang-sbrnd, wk sil cmt,tr wh arg mtx,fri aggs, fr inf por,fluor. 81 / 6 / 4 / 4 / 5 238 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.7 | 33 |
| RES_DEEP (ohm.m) | 41.76 | 33 |
| RES_SHALLOW (ohm.m) | 39.78 | 33 |
| **Δ Res (Deep − Shallow)** | **1.97** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1760 m MD — Interval 1757.5 – 1765.0 m

**Sample Description (spreadsheet):** Sample 1760m: 0% Siltstone, 100% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 265U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 265.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1770m: trnsl,lt brn,clr,wh-off wh,f-crs,mod srt,sbang-sbrnd, wk sil cmt,tr wh arg mtx,fri aggs, fr inf por,fluor. 81 / 6 / 4 / 4 / 5 238 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.2 | 49 |
| RES_DEEP (ohm.m) | 41.66 | 49 |
| RES_SHALLOW (ohm.m) | 39.58 | 49 |
| **Δ Res (Deep − Shallow)** | **2.08** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1770 m MD — Interval 1765.0 – 1775.0 m

**Sample Description (spreadsheet):** Sample 1770m: 0% Siltstone, 100% fine to medium Sandstone, 100% bright FLUOR in SST. TG 224U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 224.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1770m: trnsl,lt brn,clr,wh-off wh,f-crs,mod srt,sbang-sbrnd, wk sil cmt,tr wh arg mtx,fri aggs, fr inf por,fluor. 81 / 6 / 4 / 4 / 5 238 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.1 | 65 |
| RES_DEEP (ohm.m) | 39.14 | 65 |
| RES_SHALLOW (ohm.m) | 35.95 | 65 |
| **Δ Res (Deep − Shallow)** | **3.19** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1780 m MD — Interval 1775.0 – 1785.0 m

**Sample Description (spreadsheet):** Sample 1780m: 0% Siltstone, 100% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 204U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 204.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1770m: trnsl,lt brn,clr,wh-off wh,f-crs,mod srt,sbang-sbrnd, wk sil cmt,tr wh arg mtx,fri aggs, fr inf por,fluor. 81 / 6 / 4 / 4 / 5 238 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.2 | 66 |
| RES_DEEP (ohm.m) | 30.53 | 66 |
| RES_SHALLOW (ohm.m) | 27.79 | 66 |
| **Δ Res (Deep − Shallow)** | **2.74** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1790 m MD — Interval 1785.0 – 1795.0 m

**Sample Description (spreadsheet):** Sample 1790m: 0% Siltstone, 100% fine to medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 237U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% mod bri - bri |
| Total Gas | 237.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1770m: trnsl,lt brn,clr,wh-off wh,f-crs,mod srt,sbang-sbrnd, wk sil cmt,tr wh arg mtx,fri aggs, fr inf por,fluor. 81 / 6 / 4 / 4 / 5 238 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.9 | 66 |
| RES_DEEP (ohm.m) | 25.41 | 66 |
| RES_SHALLOW (ohm.m) | 23.14 | 66 |
| **Δ Res (Deep − Shallow)** | **2.27** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1800 m MD — Interval 1795.0 – 1805.0 m

**Sample Description (spreadsheet):** Sample 1800m: 0% Siltstone, 100% fine to medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 258U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% mod bri - bri |
| Total Gas | 258.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.9 | 65 |
| RES_DEEP (ohm.m) | 22.89 | 65 |
| RES_SHALLOW (ohm.m) | 21.02 | 65 |
| **Δ Res (Deep − Shallow)** | **1.87** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1810 m MD — Interval 1805.0 – 1815.0 m

**Sample Description (spreadsheet):** Sample 1810m: 0% Siltstone, 100% fine to medium Sandstone, 100% bright FLUOR in SST. TG 215U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 215.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.9 | 66 |
| RES_DEEP (ohm.m) | 22.17 | 66 |
| RES_SHALLOW (ohm.m) | 20.72 | 66 |
| **Δ Res (Deep − Shallow)** | **1.44** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1820 m MD — Interval 1815.0 – 1825.0 m

**Sample Description (spreadsheet):** Sample 1820m: 0% Siltstone, 100% very fine to medium Sandstone, 100% bright FLUOR in SST. TG 259U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 259.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.0 | 66 |
| RES_DEEP (ohm.m) | 24.12 | 66 |
| RES_SHALLOW (ohm.m) | 21.76 | 66 |
| **Δ Res (Deep − Shallow)** | **2.36** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1830 m MD — Interval 1825.0 – 1835.0 m

**Sample Description (spreadsheet):** Sample 1830m: 0% Siltstone, 100% very fine to medium Sandstone, 100% bright FLUOR in SST. TG 232U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 232.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.0 | 65 |
| RES_DEEP (ohm.m) | 27.60 | 65 |
| RES_SHALLOW (ohm.m) | 24.92 | 65 |
| **Δ Res (Deep − Shallow)** | **2.69** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1840 m MD — Interval 1835.0 – 1845.0 m

**Sample Description (spreadsheet):** Sample 1840m: 0% Siltstone, 100% fine to medium Sandstone, 100% bright FLUOR in SST. TG 364U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 364.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1860m: trnsl,clr,lt brnsh gry,f-crs,pr srt,sbrnd-ang,wk sil cmt in vf-f aggs,com lt brn arg mtx, fri,crs grs pred lse,pr vis-fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.7 | 66 |
| RES_DEEP (ohm.m) | 35.12 | 66 |
| RES_SHALLOW (ohm.m) | 32.42 | 66 |
| **Δ Res (Deep − Shallow)** | **2.70** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1850 m MD — Interval 1845.0 – 1855.0 m

**Sample Description (spreadsheet):** Sample 1850m: 0% Siltstone, 100% very fine to fine Sandstone, 100% bright FLUOR in SST. TG 362U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100% bri |
| Total Gas | 362.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1860m: trnsl,clr,lt brnsh gry,f-crs,pr srt,sbrnd-ang,wk sil cmt in vf-f aggs,com lt brn arg mtx, fri,crs grs pred lse,pr vis-fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.3 | 65 |
| RES_DEEP (ohm.m) | 39.96 | 65 |
| RES_SHALLOW (ohm.m) | 37.24 | 65 |
| **Δ Res (Deep − Shallow)** | **2.72** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1860 m MD — Interval 1855.0 – 1865.0 m

**Sample Description (spreadsheet):** Sample 1860m: 10% Siltstone, 90% fine to coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 187U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 70% mod bri - bri |
| Total Gas | 187.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1860m: trnsl,clr,lt brnsh gry,f-crs,pr srt,sbrnd-ang,wk sil cmt in vf-f aggs,com lt brn arg mtx, fri,crs grs pred lse,pr vis-fr inf por,fluor.
- **SANDSTONE** @ ~1880m: trnsl,clr,lt brnsh gry,f-crs,pr srt,sbrnd-ang,wk sil cmt in vf-f aggs,com lt brn arg mtx, fri,crs grs pred lse,pr vis-fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.9 | 66 |
| RES_DEEP (ohm.m) | 44.53 | 66 |
| RES_SHALLOW (ohm.m) | 41.74 | 66 |
| **Δ Res (Deep − Shallow)** | **2.80** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1870 m MD — Interval 1865.0 – 1875.0 m

**Sample Description (spreadsheet):** Sample 1870m: 0% Siltstone, 100% fine to coarse Sandstone, 70% bright FLUOR in SST. TG 343U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 343.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1860m: trnsl,clr,lt brnsh gry,f-crs,pr srt,sbrnd-ang,wk sil cmt in vf-f aggs,com lt brn arg mtx, fri,crs grs pred lse,pr vis-fr inf por,fluor.
- **SANDSTONE** @ ~1880m: trnsl,clr,lt brnsh gry,f-crs,pr srt,sbrnd-ang,wk sil cmt in vf-f aggs,com lt brn arg mtx, fri,crs grs pred lse,pr vis-fr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 66.4 | 66 |
| RES_DEEP (ohm.m) | 43.68 | 66 |
| RES_SHALLOW (ohm.m) | 39.72 | 66 |
| **Δ Res (Deep − Shallow)** | **3.96** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1880 m MD — Interval 1875.0 – 1885.0 m

**Sample Description (spreadsheet):** Sample 1880m: 0% Siltstone, 100% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 272U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 272.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1860m: trnsl,clr,lt brnsh gry,f-crs,pr srt,sbrnd-ang,wk sil cmt in vf-f aggs,com lt brn arg mtx, fri,crs grs pred lse,pr vis-fr inf por,fluor.
- **SANDSTONE** @ ~1880m: trnsl,clr,lt brnsh gry,f-crs,pr srt,sbrnd-ang,wk sil cmt in vf-f aggs,com lt brn arg mtx, fri,crs grs pred lse,pr vis-fr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.2 | 65 |
| RES_DEEP (ohm.m) | 40.77 | 65 |
| RES_SHALLOW (ohm.m) | 37.71 | 65 |
| **Δ Res (Deep − Shallow)** | **3.06** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1890 m MD — Interval 1885.0 – 1895.0 m

**Sample Description (spreadsheet):** Sample 1890m: 0% Siltstone, 100% fine to medium Sandstone, 100% bright FLUOR in SST. TG 295U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 295.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1880m: trnsl,clr,lt brnsh gry,f-crs,pr srt,sbrnd-ang,wk sil cmt in vf-f aggs,com lt brn arg mtx, fri,crs grs pred lse,pr vis-fr inf por,fluor.
- **SILTSTONE** @ ~1890m: med dk gry,rr dk gry blk,carb i/p,occ vf aren,rr micmic, mod hd,sbblky. 81 / 6 / 4 / 4 / 5 423 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.2 | 66 |
| RES_DEEP (ohm.m) | 44.96 | 66 |
| RES_SHALLOW (ohm.m) | 41.20 | 66 |
| **Δ Res (Deep − Shallow)** | **3.76** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1900 m MD — Interval 1895.0 – 1905.0 m

**Sample Description (spreadsheet):** Sample 1900m: 5% Siltstone, 95% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 423U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 423.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1880m: trnsl,clr,lt brnsh gry,f-crs,pr srt,sbrnd-ang,wk sil cmt in vf-f aggs,com lt brn arg mtx, fri,crs grs pred lse,pr vis-fr inf por,fluor.
- **SILTSTONE** @ ~1890m: med dk gry,rr dk gry blk,carb i/p,occ vf aren,rr micmic, mod hd,sbblky. 81 / 6 / 4 / 4 / 5 423 U
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.6 | 66 |
| RES_DEEP (ohm.m) | 48.54 | 66 |
| RES_SHALLOW (ohm.m) | 44.89 | 66 |
| **Δ Res (Deep − Shallow)** | **3.64** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1910 m MD — Interval 1905.0 – 1915.0 m

**Sample Description (spreadsheet):** Sample 1910m: 0% Siltstone, 100% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 274U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 274.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1890m: med dk gry,rr dk gry blk,carb i/p,occ vf aren,rr micmic, mod hd,sbblky. 81 / 6 / 4 / 4 / 5 423 U
- **SANDSTONE** @ ~1920m: trnsl-clr,wh-off wh, f-crs,pr srt,sbang-sbrnd,tr wk sil cmt,tr lt brn arg mtx,fri-lse,fr inf por,fluor. 82 / 5 / 3 / 4 / 6 305 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.4 | 66 |
| RES_DEEP (ohm.m) | 40.40 | 66 |
| RES_SHALLOW (ohm.m) | 36.38 | 66 |
| **Δ Res (Deep − Shallow)** | **4.02** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1920 m MD — Interval 1915.0 – 1925.0 m

**Sample Description (spreadsheet):** Sample 1920m: 0% Siltstone, 100% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 370U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 370.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1920m: trnsl-clr,wh-off wh, f-crs,pr srt,sbang-sbrnd,tr wk sil cmt,tr lt brn arg mtx,fri-lse,fr inf por,fluor. 82 / 5 / 3 / 4 / 6 305 U
- **SANDSTONE** @ ~1940m: clr-trnsl,pl brn-brn in vf-f aggs,com med-crs,sbang-sbrnd, 78 / 6 / 4 / 5 / 7 350 U mod-occ pr srt,mod sil cmt-wk inf sil cmt,tr arg mtx in vf aggs,gen cln,fri vf aggs,com lse med-crs qtz,pr vis-

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.4 | 66 |
| RES_DEEP (ohm.m) | 37.25 | 66 |
| RES_SHALLOW (ohm.m) | 33.92 | 66 |
| **Δ Res (Deep − Shallow)** | **3.33** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1930 m MD — Interval 1925.0 – 1935.0 m

**Sample Description (spreadsheet):** Sample 1930m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 302U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 302.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1920m: trnsl-clr,wh-off wh, f-crs,pr srt,sbang-sbrnd,tr wk sil cmt,tr lt brn arg mtx,fri-lse,fr inf por,fluor. 82 / 5 / 3 / 4 / 6 305 U
- **SANDSTONE** @ ~1940m: clr-trnsl,pl brn-brn in vf-f aggs,com med-crs,sbang-sbrnd, 78 / 6 / 4 / 5 / 7 350 U mod-occ pr srt,mod sil cmt-wk inf sil cmt,tr arg mtx in vf aggs,gen cln,fri vf aggs,com lse med-crs qtz,pr vis-

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.6 | 65 |
| RES_DEEP (ohm.m) | 30.66 | 65 |
| RES_SHALLOW (ohm.m) | 27.53 | 65 |
| **Δ Res (Deep − Shallow)** | **3.12** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1940 m MD — Interval 1935.0 – 1945.0 m

**Sample Description (spreadsheet):** Sample 1940m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 332U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 332.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1920m: trnsl-clr,wh-off wh, f-crs,pr srt,sbang-sbrnd,tr wk sil cmt,tr lt brn arg mtx,fri-lse,fr inf por,fluor. 82 / 5 / 3 / 4 / 6 305 U
- **SANDSTONE** @ ~1940m: clr-trnsl,pl brn-brn in vf-f aggs,com med-crs,sbang-sbrnd, 78 / 6 / 4 / 5 / 7 350 U mod-occ pr srt,mod sil cmt-wk inf sil cmt,tr arg mtx in vf aggs,gen cln,fri vf aggs,com lse med-crs qtz,pr vis-

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.3 | 66 |
| RES_DEEP (ohm.m) | 31.42 | 66 |
| RES_SHALLOW (ohm.m) | 28.27 | 66 |
| **Δ Res (Deep − Shallow)** | **3.15** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1950 m MD — Interval 1945.0 – 1955.0 m

**Sample Description (spreadsheet):** Sample 1950m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 241U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 80% mod bri - bri |
| Total Gas | 241.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1940m: clr-trnsl,pl brn-brn in vf-f aggs,com med-crs,sbang-sbrnd, 78 / 6 / 4 / 5 / 7 350 U mod-occ pr srt,mod sil cmt-wk inf sil cmt,tr arg mtx in vf aggs,gen cln,fri vf aggs,com lse med-crs qtz,pr vis-
- **SANDSTONE** @ ~1970m: clr-trnsl,pl brn-brn in vf-f aggs,com med-crs,sbang-sbrnd, mod-occ pr srt,mod sil cmt-wk inf sil cmt,tr arg mtx in vf aggs,gen cln,fri vf aggs,com lse med-crs qtz,pr vis-

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.2 | 66 |
| RES_DEEP (ohm.m) | 35.11 | 66 |
| RES_SHALLOW (ohm.m) | 30.76 | 66 |
| **Δ Res (Deep − Shallow)** | **4.35** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1960 m MD — Interval 1955.0 – 1965.0 m

**Sample Description (spreadsheet):** Sample 1960m: 0% Siltstone, 100% very fine to coarse Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 354U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 80% mod bri - bri |
| Total Gas | 354.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1940m: clr-trnsl,pl brn-brn in vf-f aggs,com med-crs,sbang-sbrnd, 78 / 6 / 4 / 5 / 7 350 U mod-occ pr srt,mod sil cmt-wk inf sil cmt,tr arg mtx in vf aggs,gen cln,fri vf aggs,com lse med-crs qtz,pr vis-
- **SANDSTONE** @ ~1970m: clr-trnsl,pl brn-brn in vf-f aggs,com med-crs,sbang-sbrnd, mod-occ pr srt,mod sil cmt-wk inf sil cmt,tr arg mtx in vf aggs,gen cln,fri vf aggs,com lse med-crs qtz,pr vis-

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.0 | 65 |
| RES_DEEP (ohm.m) | 33.16 | 65 |
| RES_SHALLOW (ohm.m) | 29.19 | 65 |
| **Δ Res (Deep − Shallow)** | **3.97** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1970 m MD — Interval 1965.0 – 1975.0 m

**Sample Description (spreadsheet):** Sample 1970m: 0% Siltstone, 100% very fine to coarse Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 296U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 70% mod bri - bri |
| Total Gas | 296.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1970m: clr-trnsl,pl brn-brn in vf-f aggs,com med-crs,sbang-sbrnd, mod-occ pr srt,mod sil cmt-wk inf sil cmt,tr arg mtx in vf aggs,gen cln,fri vf aggs,com lse med-crs qtz,pr vis-

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.9 | 66 |
| RES_DEEP (ohm.m) | 29.70 | 66 |
| RES_SHALLOW (ohm.m) | 27.13 | 66 |
| **Δ Res (Deep − Shallow)** | **2.57** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1980 m MD — Interval 1975.0 – 1985.0 m

**Sample Description (spreadsheet):** Sample 1980m: 0% Siltstone, 100% very fine to coarse Sandstone, 70% moderately bright  to  bright FLUOR in SST. TG 324U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 90% mod bri - bri |
| Total Gas | 324.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1970m: clr-trnsl,pl brn-brn in vf-f aggs,com med-crs,sbang-sbrnd, mod-occ pr srt,mod sil cmt-wk inf sil cmt,tr arg mtx in vf aggs,gen cln,fri vf aggs,com lse med-crs qtz,pr vis-

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.0 | 65 |
| RES_DEEP (ohm.m) | 35.93 | 65 |
| RES_SHALLOW (ohm.m) | 33.01 | 65 |
| **Δ Res (Deep − Shallow)** | **2.92** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1990 m MD — Interval 1985.0 – 1995.0 m

**Sample Description (spreadsheet):** Sample 1990m: 0% Siltstone, 100% very fine to medium Sandstone, 90% bright FLUOR in SST. TG 386U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 386.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1970m: clr-trnsl,pl brn-brn in vf-f aggs,com med-crs,sbang-sbrnd, mod-occ pr srt,mod sil cmt-wk inf sil cmt,tr arg mtx in vf aggs,gen cln,fri vf aggs,com lse med-crs qtz,pr vis-
- **SANDSTONE** @ ~2010m: pl brn-brn,mnr clr- trnsl,vf-f aggs,rr med lse qtz,gen wl srt,sbang-occ sbrnd,mod strg sil cmt,tr kaol mtx in aggs,fri,v pr-pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.1 | 66 |
| RES_DEEP (ohm.m) | 42.29 | 66 |
| RES_SHALLOW (ohm.m) | 39.45 | 66 |
| **Δ Res (Deep − Shallow)** | **2.83** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2000 m MD — Interval 1995.0 – 2005.0 m

**Sample Description (spreadsheet):** Sample 2000m: 0% Siltstone, 100% very fine to fine Sandstone, 100% bright FLUOR in SST. TG 326U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 326.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2010m: pl brn-brn,mnr clr- trnsl,vf-f aggs,rr med lse qtz,gen wl srt,sbang-occ sbrnd,mod strg sil cmt,tr kaol mtx in aggs,fri,v pr-pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.1 | 66 |
| RES_DEEP (ohm.m) | 41.60 | 66 |
| RES_SHALLOW (ohm.m) | 38.02 | 66 |
| **Δ Res (Deep − Shallow)** | **3.59** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2010 m MD — Interval 2005.0 – 2015.0 m

**Sample Description (spreadsheet):** Sample 2010m: 0% Siltstone, 100% very fine to fine Sandstone, 100% bright FLUOR in SST. TG 405U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 405.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2010m: pl brn-brn,mnr clr- trnsl,vf-f aggs,rr med lse qtz,gen wl srt,sbang-occ sbrnd,mod strg sil cmt,tr kaol mtx in aggs,fri,v pr-pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.1 | 65 |
| RES_DEEP (ohm.m) | 38.69 | 65 |
| RES_SHALLOW (ohm.m) | 35.83 | 65 |
| **Δ Res (Deep − Shallow)** | **2.86** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2020 m MD — Interval 2015.0 – 2025.0 m

**Sample Description (spreadsheet):** Sample 2020m: 0% Siltstone, 100% very fine to fine Sandstone, 100% bright FLUOR in SST. TG 285U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 285.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2010m: pl brn-brn,mnr clr- trnsl,vf-f aggs,rr med lse qtz,gen wl srt,sbang-occ sbrnd,mod strg sil cmt,tr kaol mtx in aggs,fri,v pr-pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 62.8 | 66 |
| RES_DEEP (ohm.m) | 34.56 | 66 |
| RES_SHALLOW (ohm.m) | 32.58 | 66 |
| **Δ Res (Deep − Shallow)** | **1.98** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2030 m MD — Interval 2025.0 – 2035.0 m

**Sample Description (spreadsheet):** Sample 2030m: 0% Siltstone, 100% very fine to fine Sandstone, 100% bright FLUOR in SST. TG 419U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 419.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2010m: pl brn-brn,mnr clr- trnsl,vf-f aggs,rr med lse qtz,gen wl srt,sbang-occ sbrnd,mod strg sil cmt,tr kaol mtx in aggs,fri,v pr-pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 63.0 | 66 |
| RES_DEEP (ohm.m) | 39.29 | 66 |
| RES_SHALLOW (ohm.m) | 36.60 | 66 |
| **Δ Res (Deep − Shallow)** | **2.69** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2040 m MD — Interval 2035.0 – 2045.0 m

**Sample Description (spreadsheet):** Sample 2040m: 0% Siltstone, 100% very fine to fine Sandstone, 100% bright FLUOR in SST. TG 223U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 223.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2060m: med dk gry,rr dk gry blk,carb i/p,occ vf aren,rr micmic, mod hd,sbblky. SURVEY @ 2064.7m INC: 89.9° AZI: 273.6°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 66.9 | 65 |
| RES_DEEP (ohm.m) | 35.81 | 65 |
| RES_SHALLOW (ohm.m) | 33.65 | 65 |
| **Δ Res (Deep − Shallow)** | **2.16** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2050 m MD — Interval 2045.0 – 2055.0 m

**Sample Description (spreadsheet):** Sample 2050m: 0% Siltstone, 100% very fine to fine Sandstone, 100% bright FLUOR in SST. TG 286U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 286.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2060m: med dk gry,rr dk gry blk,carb i/p,occ vf aren,rr micmic, mod hd,sbblky. SURVEY @ 2064.7m INC: 89.9° AZI: 273.6°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.7 | 66 |
| RES_DEEP (ohm.m) | 34.16 | 66 |
| RES_SHALLOW (ohm.m) | 30.18 | 66 |
| **Δ Res (Deep − Shallow)** | **3.98** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2060 m MD — Interval 2055.0 – 2065.0 m

**Sample Description (spreadsheet):** Sample 2060m: 0% Siltstone, 100% very fine to fine Sandstone, 100% bright FLUOR in SST. TG 290U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 290.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2060m: med dk gry,rr dk gry blk,carb i/p,occ vf aren,rr micmic, mod hd,sbblky. SURVEY @ 2064.7m INC: 89.9° AZI: 273.6°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.8 | 65 |
| RES_DEEP (ohm.m) | 40.29 | 65 |
| RES_SHALLOW (ohm.m) | 32.40 | 65 |
| **Δ Res (Deep − Shallow)** | **7.89** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2070 m MD — Interval 2065.0 – 2075.0 m

**Sample Description (spreadsheet):** Sample 2070m: 0% Siltstone, 100% very fine to fine Sandstone, 100% bright FLUOR in SST. TG 290U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 290.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2060m: med dk gry,rr dk gry blk,carb i/p,occ vf aren,rr micmic, mod hd,sbblky. SURVEY @ 2064.7m INC: 89.9° AZI: 273.6°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.7 | 66 |
| RES_DEEP (ohm.m) | 40.51 | 66 |
| RES_SHALLOW (ohm.m) | 33.46 | 66 |
| **Δ Res (Deep − Shallow)** | **7.06** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2080 m MD — Interval 2075.0 – 2085.0 m

**Sample Description (spreadsheet):** Sample 2080m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 307U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 80% bri |
| Total Gas | 307.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2060m: med dk gry,rr dk gry blk,carb i/p,occ vf aren,rr micmic, mod hd,sbblky. SURVEY @ 2064.7m INC: 89.9° AZI: 273.6°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 66.1 | 66 |
| RES_DEEP (ohm.m) | 38.69 | 66 |
| RES_SHALLOW (ohm.m) | 35.36 | 66 |
| **Δ Res (Deep − Shallow)** | **3.34** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2090 m MD — Interval 2085.0 – 2095.0 m

**Sample Description (spreadsheet):** Sample 2090m: 0% Siltstone, 100% very fine to coarse Sandstone, 80% bright FLUOR in SST. TG 395U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 90% bri |
| Total Gas | 395.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.2 | 65 |
| RES_DEEP (ohm.m) | 35.29 | 65 |
| RES_SHALLOW (ohm.m) | 33.28 | 65 |
| **Δ Res (Deep − Shallow)** | **2.01** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2100 m MD — Interval 2095.0 – 2105.0 m

**Sample Description (spreadsheet):** Sample 2100m: 0% Siltstone, 100% very fine to coarse Sandstone, 90% bright FLUOR in SST. TG 410U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 90% bri |
| Total Gas | 410.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.9 | 66 |
| RES_DEEP (ohm.m) | 44.31 | 66 |
| RES_SHALLOW (ohm.m) | 38.67 | 66 |
| **Δ Res (Deep − Shallow)** | **5.64** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2170 m MD — Interval 2165.0 – 2175.0 m

**Sample Description (spreadsheet):** Sample 2170m: 0% Siltstone, 100% fine to coarse Sandstone, 85% moderately bright  to  bright FLUOR in SST. TG 283U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 80% mod bri - bri |
| Total Gas | 283.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.3 | 65 |
| RES_DEEP (ohm.m) | 55.18 | 65 |
| RES_SHALLOW (ohm.m) | 44.55 | 65 |
| **Δ Res (Deep − Shallow)** | **10.63** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2180 m MD — Interval 2175.0 – 2185.0 m

**Sample Description (spreadsheet):** Sample 2180m: 0% Siltstone, 100% fine to medium Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 408U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: C) |
| Fluorescence | 90% mod bri - bri |
| Total Gas | 408.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.5 | 66 |
| RES_DEEP (ohm.m) | 41.16 | 66 |
| RES_SHALLOW (ohm.m) | 36.41 | 66 |
| **Δ Res (Deep − Shallow)** | **4.74** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2190 m MD — Interval 2185.0 – 2195.0 m

**Sample Description (spreadsheet):** Sample 2190m: 0% Siltstone, 100% very fine to medium Sandstone, 90% bright FLUOR in SST. TG 285U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 285.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2210m: trnsl,clr,v lt brn/trnsl, f-crs,tr crs,ang-sbrnd,pred sbang, wk sil cmt,rr lt brn arg mtx,fri, disagg,fr inf por,fluor. 0 0.5 1 4 14 2230 1 10 100 1K

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.7 | 65 |
| RES_DEEP (ohm.m) | 27.59 | 65 |
| RES_SHALLOW (ohm.m) | 25.08 | 65 |
| **Δ Res (Deep − Shallow)** | **2.51** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2200 m MD — Interval 2195.0 – 2205.0 m

**Sample Description (spreadsheet):** Sample 2200m: 0% Siltstone, 100% fine to coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 270U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% mod bri - bri |
| Total Gas | 270.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2210m: trnsl,clr,v lt brn/trnsl, f-crs,tr crs,ang-sbrnd,pred sbang, wk sil cmt,rr lt brn arg mtx,fri, disagg,fr inf por,fluor. 0 0.5 1 4 14 2230 1 10 100 1K

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.9 | 66 |
| RES_DEEP (ohm.m) | 25.00 | 66 |
| RES_SHALLOW (ohm.m) | 22.07 | 66 |
| **Δ Res (Deep − Shallow)** | **2.93** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2210 m MD — Interval 2205.0 – 2215.0 m

**Sample Description (spreadsheet):** Sample 2210m: 0% Siltstone, 100% fine to medium Sandstone, 100% bright FLUOR in SST. TG 290U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 290.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2210m: trnsl,clr,v lt brn/trnsl, f-crs,tr crs,ang-sbrnd,pred sbang, wk sil cmt,rr lt brn arg mtx,fri, disagg,fr inf por,fluor. 0 0.5 1 4 14 2230 1 10 100 1K

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.6 | 66 |
| RES_DEEP (ohm.m) | 23.78 | 66 |
| RES_SHALLOW (ohm.m) | 21.27 | 66 |
| **Δ Res (Deep − Shallow)** | **2.51** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2220 m MD — Interval 2215.0 – 2225.0 m

**Sample Description (spreadsheet):** Sample 2220m: 0% Siltstone, 100% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 237U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 237.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2210m: trnsl,clr,v lt brn/trnsl, f-crs,tr crs,ang-sbrnd,pred sbang, wk sil cmt,rr lt brn arg mtx,fri, disagg,fr inf por,fluor. 0 0.5 1 4 14 2230 1 10 100 1K

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.4 | 65 |
| RES_DEEP (ohm.m) | 24.09 | 65 |
| RES_SHALLOW (ohm.m) | 21.09 | 65 |
| **Δ Res (Deep − Shallow)** | **3.01** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2230 m MD — Interval 2225.0 – 2235.0 m

**Sample Description (spreadsheet):** Sample 2230m: 0% Siltstone, 100% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 260U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 260.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2210m: trnsl,clr,v lt brn/trnsl, f-crs,tr crs,ang-sbrnd,pred sbang, wk sil cmt,rr lt brn arg mtx,fri, disagg,fr inf por,fluor. 0 0.5 1 4 14 2230 1 10 100 1K

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.2 | 66 |
| RES_DEEP (ohm.m) | 24.23 | 66 |
| RES_SHALLOW (ohm.m) | 21.50 | 66 |
| **Δ Res (Deep − Shallow)** | **2.73** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2240 m MD — Interval 2235.0 – 2245.0 m

**Sample Description (spreadsheet):** Sample 2240m: 0% Siltstone, 100% fine to medium Sandstone, 100% bright FLUOR in SST. TG 278U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 278.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.7 | 65 |
| RES_DEEP (ohm.m) | 27.58 | 65 |
| RES_SHALLOW (ohm.m) | 25.71 | 65 |
| **Δ Res (Deep − Shallow)** | **1.87** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2250 m MD — Interval 2245.0 – 2255.0 m

**Sample Description (spreadsheet):** Sample 2250m: 5% Siltstone, 95% fine to medium Sandstone, 100% bright FLUOR in SST. TG 252U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 252.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.9 | 66 |
| RES_DEEP (ohm.m) | 39.07 | 66 |
| RES_SHALLOW (ohm.m) | 32.55 | 66 |
| **Δ Res (Deep − Shallow)** | **6.52** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2320 m MD — Interval 2315.0 – 2325.0 m

**Sample Description (spreadsheet):** Sample 2320m: 20% Siltstone, 80% fine to medium Sandstone, 30% moderately bright FLUOR in SST. TG 366U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 60% mod bri |
| Total Gas | 366.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2340m: trnsl,clr,off wh,f-med, mod srt,ang-sbrnd,wk sil cmt,mnr wh arg mtx,fri-lse,pr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.9 | 65 |
| RES_DEEP (ohm.m) | 52.84 | 65 |
| RES_SHALLOW (ohm.m) | 44.43 | 65 |
| **Δ Res (Deep − Shallow)** | **8.41** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2330 m MD — Interval 2325.0 – 2335.0 m

**Sample Description (spreadsheet):** Sample 2330m: 0% Siltstone, 100% fine to medium Sandstone, 60% moderately bright  to  bright FLUOR in SST. TG 292U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% mod bri - bri |
| Total Gas | 292.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2340m: trnsl,clr,off wh,f-med, mod srt,ang-sbrnd,wk sil cmt,mnr wh arg mtx,fri-lse,pr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.4 | 66 |
| RES_DEEP (ohm.m) | 49.35 | 66 |
| RES_SHALLOW (ohm.m) | 41.31 | 66 |
| **Δ Res (Deep − Shallow)** | **8.04** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2340 m MD — Interval 2335.0 – 2345.0 m

**Sample Description (spreadsheet):** Sample 2340m: 0% Siltstone, 100% fine to medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 333U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 90% mod bri - bri |
| Total Gas | 333.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2340m: trnsl,clr,off wh,f-med, mod srt,ang-sbrnd,wk sil cmt,mnr wh arg mtx,fri-lse,pr inf por,fluor.
- **SANDSTONE** @ ~2360m: trnsl,clr,off wh,f-med, mod srt,ang-sbrnd,wk sil cmt,mnr wh arg mtx,fri-lse,pr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.9 | 66 |
| RES_DEEP (ohm.m) | 52.31 | 66 |
| RES_SHALLOW (ohm.m) | 43.83 | 66 |
| **Δ Res (Deep − Shallow)** | **8.48** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2350 m MD — Interval 2345.0 – 2355.0 m

**Sample Description (spreadsheet):** Sample 2350m: 0% Siltstone, 100% fine to medium Sandstone, 90% bright FLUOR in SST. TG 315U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 315.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2340m: trnsl,clr,off wh,f-med, mod srt,ang-sbrnd,wk sil cmt,mnr wh arg mtx,fri-lse,pr inf por,fluor.
- **SANDSTONE** @ ~2360m: trnsl,clr,off wh,f-med, mod srt,ang-sbrnd,wk sil cmt,mnr wh arg mtx,fri-lse,pr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.6 | 65 |
| RES_DEEP (ohm.m) | 46.72 | 65 |
| RES_SHALLOW (ohm.m) | 39.30 | 65 |
| **Δ Res (Deep − Shallow)** | **7.41** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2360 m MD — Interval 2355.0 – 2365.0 m

**Sample Description (spreadsheet):** Sample 2360m: 0% Siltstone, 100% fine to medium Sandstone, 100% bright FLUOR in SST. TG 266U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 90% bri |
| Total Gas | 266.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2340m: trnsl,clr,off wh,f-med, mod srt,ang-sbrnd,wk sil cmt,mnr wh arg mtx,fri-lse,pr inf por,fluor.
- **SANDSTONE** @ ~2360m: trnsl,clr,off wh,f-med, mod srt,ang-sbrnd,wk sil cmt,mnr wh arg mtx,fri-lse,pr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.4 | 66 |
| RES_DEEP (ohm.m) | 42.77 | 66 |
| RES_SHALLOW (ohm.m) | 37.42 | 66 |
| **Δ Res (Deep − Shallow)** | **5.35** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2370 m MD — Interval 2365.0 – 2375.0 m

**Sample Description (spreadsheet):** Sample 2370m: 0% Siltstone, 100% fine to medium Sandstone, 90% bright FLUOR in SST. TG 263U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 263.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2360m: trnsl,clr,off wh,f-med, mod srt,ang-sbrnd,wk sil cmt,mnr wh arg mtx,fri-lse,pr inf por,fluor.
- **SANDSTONE** @ ~2380m: trnsl,clr,v lt gry,lt brnsh gry i/p,f-crs,pr srt,ang-sbrnd, wk sil cmt,mnr off wh/lt brn arg mtx, fri,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.6 | 65 |
| RES_DEEP (ohm.m) | 37.00 | 65 |
| RES_SHALLOW (ohm.m) | 34.69 | 65 |
| **Δ Res (Deep − Shallow)** | **2.32** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2380 m MD — Interval 2375.0 – 2385.0 m

**Sample Description (spreadsheet):** Sample 2380m: 0% Siltstone, 100% very fine to fine Sandstone, 100% bright FLUOR in SST. TG 341U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100% bri |
| Total Gas | 341.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2360m: trnsl,clr,off wh,f-med, mod srt,ang-sbrnd,wk sil cmt,mnr wh arg mtx,fri-lse,pr inf por,fluor.
- **SANDSTONE** @ ~2380m: trnsl,clr,v lt gry,lt brnsh gry i/p,f-crs,pr srt,ang-sbrnd, wk sil cmt,mnr off wh/lt brn arg mtx, fri,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.2 | 66 |
| RES_DEEP (ohm.m) | 31.14 | 66 |
| RES_SHALLOW (ohm.m) | 28.65 | 66 |
| **Δ Res (Deep − Shallow)** | **2.49** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2390 m MD — Interval 2385.0 – 2395.0 m

**Sample Description (spreadsheet):** Sample 2390m: 10% Siltstone, 90% fine to coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 212U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% mod bri - bri |
| Total Gas | 212.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2380m: trnsl,clr,v lt gry,lt brnsh gry i/p,f-crs,pr srt,ang-sbrnd, wk sil cmt,mnr off wh/lt brn arg mtx, fri,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.0 | 66 |
| RES_DEEP (ohm.m) | 23.28 | 66 |
| RES_SHALLOW (ohm.m) | 22.16 | 66 |
| **Δ Res (Deep − Shallow)** | **1.12** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2400 m MD — Interval 2395.0 – 2405.0 m

**Sample Description (spreadsheet):** Sample 2400m: 10% Siltstone, 90% fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 250U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 90% mod bri |
| Total Gas | 250.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2380m: trnsl,clr,v lt gry,lt brnsh gry i/p,f-crs,pr srt,ang-sbrnd, wk sil cmt,mnr off wh/lt brn arg mtx, fri,pr vis por,fluor.
- **SANDSTONE** @ ~2420m: trnsl,clr,v lt gry,lt brnsh gry i/p,f-crs,pr srt,ang-sbrnd, wk sil cmt,mnr off wh/lt brn arg mtx, fri,pr vis por,fluor. 79 / 5 / 4 / 5 / 7 277 U SURVEY @ 2429.2m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 60.1 | 65 |
| RES_DEEP (ohm.m) | 24.57 | 65 |
| RES_SHALLOW (ohm.m) | 23.67 | 65 |
| **Δ Res (Deep − Shallow)** | **0.90** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2410 m MD — Interval 2405.0 – 2415.0 m

**Sample Description (spreadsheet):** Sample 2410m: 0% Siltstone, 100% fine to medium Sandstone, 90% bright FLUOR in SST. TG 238U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 238.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2420m: trnsl,clr,v lt gry,lt brnsh gry i/p,f-crs,pr srt,ang-sbrnd, wk sil cmt,mnr off wh/lt brn arg mtx, fri,pr vis por,fluor. 79 / 5 / 4 / 5 / 7 277 U SURVEY @ 2429.2m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.1 | 66 |
| RES_DEEP (ohm.m) | 24.75 | 66 |
| RES_SHALLOW (ohm.m) | 23.43 | 66 |
| **Δ Res (Deep − Shallow)** | **1.32** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2420 m MD — Interval 2415.0 – 2425.0 m

**Sample Description (spreadsheet):** Sample 2420m: 0% Siltstone, 100% fine to medium Sandstone, 100% bright FLUOR in SST. TG 198U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 198.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2420m: trnsl,clr,v lt gry,lt brnsh gry i/p,f-crs,pr srt,ang-sbrnd, wk sil cmt,mnr off wh/lt brn arg mtx, fri,pr vis por,fluor. 79 / 5 / 4 / 5 / 7 277 U SURVEY @ 2429.2m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.1 | 66 |
| RES_DEEP (ohm.m) | 23.46 | 66 |
| RES_SHALLOW (ohm.m) | 22.51 | 66 |
| **Δ Res (Deep − Shallow)** | **0.96** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2430 m MD — Interval 2425.0 – 2435.0 m

**Sample Description (spreadsheet):** Sample 2430m: 0% Siltstone, 100% fine to medium Sandstone, 100% bright FLUOR in SST. TG 275U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 275.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2420m: trnsl,clr,v lt gry,lt brnsh gry i/p,f-crs,pr srt,ang-sbrnd, wk sil cmt,mnr off wh/lt brn arg mtx, fri,pr vis por,fluor. 79 / 5 / 4 / 5 / 7 277 U SURVEY @ 2429.2m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.5 | 65 |
| RES_DEEP (ohm.m) | 26.70 | 65 |
| RES_SHALLOW (ohm.m) | 25.41 | 65 |
| **Δ Res (Deep − Shallow)** | **1.29** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2440 m MD — Interval 2435.0 – 2445.0 m

**Sample Description (spreadsheet):** Sample 2440m: 20% Siltstone, 80% very fine to fine Sandstone, 100% moderately bright FLUOR in SST. TG 201U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 50% mod bri |
| Total Gas | 201.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2420m: trnsl,clr,v lt gry,lt brnsh gry i/p,f-crs,pr srt,ang-sbrnd, wk sil cmt,mnr off wh/lt brn arg mtx, fri,pr vis por,fluor. 79 / 5 / 4 / 5 / 7 277 U SURVEY @ 2429.2m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.3 | 66 |
| RES_DEEP (ohm.m) | 26.06 | 66 |
| RES_SHALLOW (ohm.m) | 24.26 | 66 |
| **Δ Res (Deep − Shallow)** | **1.80** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2450 m MD — Interval 2445.0 – 2455.0 m

**Sample Description (spreadsheet):** Sample 2450m: 20% Siltstone, 80% very fine to fine Sandstone, 50% moderately bright to bright FLUOR in SST. TG 219U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf-f (max: F) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 219.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2470m: pl brn,gry brn,off wh,vf-occ f,sbang,wl srt,mod strg sil cmt,mnr kaol mtx,slty i/p,mod hd aggs, pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.8 | 65 |
| RES_DEEP (ohm.m) | 29.74 | 65 |
| RES_SHALLOW (ohm.m) | 26.36 | 65 |
| **Δ Res (Deep − Shallow)** | **3.38** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2460 m MD — Interval 2455.0 – 2465.0 m

**Sample Description (spreadsheet):** Sample 2460m: 10% Siltstone, 90% very fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 235U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 70% mod bri-bri |
| Total Gas | 235.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2470m: pl brn,gry brn,off wh,vf-occ f,sbang,wl srt,mod strg sil cmt,mnr kaol mtx,slty i/p,mod hd aggs, pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.0 | 66 |
| RES_DEEP (ohm.m) | 32.81 | 66 |
| RES_SHALLOW (ohm.m) | 28.90 | 66 |
| **Δ Res (Deep − Shallow)** | **3.90** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2470 m MD — Interval 2465.0 – 2475.0 m

**Sample Description (spreadsheet):** Sample 2470m: 5% Siltstone, 95% coarse Sandstone, 70% moderately bright to bright FLUOR in SST. TG 200U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | crs (max: C) |
| Fluorescence | 80% mod bri-bri |
| Total Gas | 200.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2470m: pl brn,gry brn,off wh,vf-occ f,sbang,wl srt,mod strg sil cmt,mnr kaol mtx,slty i/p,mod hd aggs, pr vis por,fluor.
- **SANDSTONE** @ ~2490m: pl brn,gry brn,off wh,vf-occ f,sbang,wl srt,mod strg sil cmt,mnr kaol mtx,slty i/p,mod hd aggs, pr vis por,fluor. 81 / 6 / 4 / 4 / 5 390 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.7 | 66 |
| RES_DEEP (ohm.m) | 36.29 | 66 |
| RES_SHALLOW (ohm.m) | 32.83 | 66 |
| **Δ Res (Deep − Shallow)** | **3.46** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2480 m MD — Interval 2475.0 – 2485.0 m

**Sample Description (spreadsheet):** Sample 2480m: 5% Siltstone, 95% very fine to coarse Sandstone, 80% moderately bright to bright FLUOR in SST. TG 341U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 90% mod bri-bri |
| Total Gas | 341.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2470m: pl brn,gry brn,off wh,vf-occ f,sbang,wl srt,mod strg sil cmt,mnr kaol mtx,slty i/p,mod hd aggs, pr vis por,fluor.
- **SANDSTONE** @ ~2490m: pl brn,gry brn,off wh,vf-occ f,sbang,wl srt,mod strg sil cmt,mnr kaol mtx,slty i/p,mod hd aggs, pr vis por,fluor. 81 / 6 / 4 / 4 / 5 390 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.0 | 65 |
| RES_DEEP (ohm.m) | 39.75 | 65 |
| RES_SHALLOW (ohm.m) | 36.58 | 65 |
| **Δ Res (Deep − Shallow)** | **3.16** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2490 m MD — Interval 2485.0 – 2495.0 m

**Sample Description (spreadsheet):** Sample 2490m: 0% Siltstone, 100% very fine to fine Sandstone, 90% moderately bright to bright FLUOR in SST. TG 330U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: C) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 330.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2470m: pl brn,gry brn,off wh,vf-occ f,sbang,wl srt,mod strg sil cmt,mnr kaol mtx,slty i/p,mod hd aggs, pr vis por,fluor.
- **SANDSTONE** @ ~2490m: pl brn,gry brn,off wh,vf-occ f,sbang,wl srt,mod strg sil cmt,mnr kaol mtx,slty i/p,mod hd aggs, pr vis por,fluor. 81 / 6 / 4 / 4 / 5 390 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.1 | 66 |
| RES_DEEP (ohm.m) | 31.76 | 66 |
| RES_SHALLOW (ohm.m) | 30.06 | 66 |
| **Δ Res (Deep − Shallow)** | **1.70** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2500 m MD — Interval 2495.0 – 2505.0 m

**Sample Description (spreadsheet):** Sample 2500m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 284U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-f (max: M) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 284.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2490m: pl brn,gry brn,off wh,vf-occ f,sbang,wl srt,mod strg sil cmt,mnr kaol mtx,slty i/p,mod hd aggs, pr vis por,fluor. 81 / 6 / 4 / 4 / 5 390 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.1 | 66 |
| RES_DEEP (ohm.m) | 28.87 | 66 |
| RES_SHALLOW (ohm.m) | 27.18 | 66 |
| **Δ Res (Deep − Shallow)** | **1.69** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2680 m MD — Interval 2675.0 – 2685.0 m

**Sample Description (spreadsheet):** Sample 2680m: 10% Siltstone, 90% fine to medium Sandstone, 45% dull  to  moderately bright FLUOR in SST. TG 228U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 60% dll - mod bri |
| Total Gas | 228.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.2 | 66 |
| RES_DEEP (ohm.m) | 50.30 | 66 |
| RES_SHALLOW (ohm.m) | 41.14 | 66 |
| **Δ Res (Deep − Shallow)** | **9.16** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2690 m MD — Interval 2685.0 – 2695.0 m

**Sample Description (spreadsheet):** Sample 2690m: 0% Siltstone, 100% fine to medium Sandstone, 60% moderately bright  to  bright FLUOR in SST. TG 250U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 80% mod bri - bri |
| Total Gas | 250.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2710m: lt-med gry,occ med dk gry, carb i/p,arg,tr micmic,mod hd,sbblky- blky. SURVEY @ 2717.0m INC: 90.3° AZI: 271.8°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.4 | 65 |
| RES_DEEP (ohm.m) | 42.55 | 65 |
| RES_SHALLOW (ohm.m) | 37.68 | 65 |
| **Δ Res (Deep − Shallow)** | **4.87** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2700 m MD — Interval 2695.0 – 2705.0 m

**Sample Description (spreadsheet):** Sample 2700m: 10% Siltstone, 90% fine to medium Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 174U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 80% mod bri - bri |
| Total Gas | 174.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2710m: lt-med gry,occ med dk gry, carb i/p,arg,tr micmic,mod hd,sbblky- blky. SURVEY @ 2717.0m INC: 90.3° AZI: 271.8°G
- **SANDSTONE** @ ~2720m: trnsl,clr,f-pred med, mod wl srt,tr sil cmt,tr lt gry 0 0.5 1 4 14 2730 1 10 100 1K arg mtx,pred lse,gd inf por,fluor. 1K 10K SURVEY @ 2736.2m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.2 | 66 |
| RES_DEEP (ohm.m) | 40.51 | 66 |
| RES_SHALLOW (ohm.m) | 36.97 | 66 |
| **Δ Res (Deep − Shallow)** | **3.54** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2710 m MD — Interval 2705.0 – 2715.0 m

**Sample Description (spreadsheet):** Sample 2710m: 0% Siltstone, 100% fine to medium Sandstone, 80% bright FLUOR in SST. TG 253U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 253.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2710m: lt-med gry,occ med dk gry, carb i/p,arg,tr micmic,mod hd,sbblky- blky. SURVEY @ 2717.0m INC: 90.3° AZI: 271.8°G
- **SANDSTONE** @ ~2720m: trnsl,clr,f-pred med, mod wl srt,tr sil cmt,tr lt gry 0 0.5 1 4 14 2730 1 10 100 1K arg mtx,pred lse,gd inf por,fluor. 1K 10K SURVEY @ 2736.2m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.9 | 65 |
| RES_DEEP (ohm.m) | 43.38 | 65 |
| RES_SHALLOW (ohm.m) | 39.69 | 65 |
| **Δ Res (Deep − Shallow)** | **3.69** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2720 m MD — Interval 2715.0 – 2725.0 m

**Sample Description (spreadsheet):** Sample 2720m: 5% Siltstone, 95% fine to medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 285U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 80% mod bri - bri |
| Total Gas | 285.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2710m: lt-med gry,occ med dk gry, carb i/p,arg,tr micmic,mod hd,sbblky- blky. SURVEY @ 2717.0m INC: 90.3° AZI: 271.8°G
- **SANDSTONE** @ ~2720m: trnsl,clr,f-pred med, mod wl srt,tr sil cmt,tr lt gry 0 0.5 1 4 14 2730 1 10 100 1K arg mtx,pred lse,gd inf por,fluor. 1K 10K SURVEY @ 2736.2m
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.3 | 66 |
| RES_DEEP (ohm.m) | 40.00 | 66 |
| RES_SHALLOW (ohm.m) | 37.40 | 66 |
| **Δ Res (Deep − Shallow)** | **2.60** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2730 m MD — Interval 2725.0 – 2735.0 m

**Sample Description (spreadsheet):** Sample 2730m: 0% Siltstone, 100% fine to medium Sandstone, 80% bright FLUOR in SST. TG 277U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 277.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2710m: lt-med gry,occ med dk gry, carb i/p,arg,tr micmic,mod hd,sbblky- blky. SURVEY @ 2717.0m INC: 90.3° AZI: 271.8°G
- **SANDSTONE** @ ~2720m: trnsl,clr,f-pred med, mod wl srt,tr sil cmt,tr lt gry 0 0.5 1 4 14 2730 1 10 100 1K arg mtx,pred lse,gd inf por,fluor. 1K 10K SURVEY @ 2736.2m
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.3 | 66 |
| RES_DEEP (ohm.m) | 31.81 | 66 |
| RES_SHALLOW (ohm.m) | 28.93 | 66 |
| **Δ Res (Deep − Shallow)** | **2.88** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2740 m MD — Interval 2735.0 – 2745.0 m

**Sample Description (spreadsheet):** Sample 2740m: 0% Siltstone, 100% fine to medium Sandstone, 100% bright FLUOR in SST. TG 246U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 246.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2720m: trnsl,clr,f-pred med, mod wl srt,tr sil cmt,tr lt gry 0 0.5 1 4 14 2730 1 10 100 1K arg mtx,pred lse,gd inf por,fluor. 1K 10K SURVEY @ 2736.2m
- **SANDSTONE** @ ~2740m: clr,trnsl,lt brn-trnsl, f-med,mod wl srt,sbang-sbrnd,wk sil cmt,mnr off wh arg mtx,fri-dssagg,pr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.3 | 65 |
| RES_DEEP (ohm.m) | 26.46 | 65 |
| RES_SHALLOW (ohm.m) | 24.20 | 65 |
| **Δ Res (Deep − Shallow)** | **2.26** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2750 m MD — Interval 2745.0 – 2755.0 m

**Sample Description (spreadsheet):** Sample 2750m: 0% Siltstone, 100% fine to medium Sandstone, 100% bright FLUOR in SST. TG 249U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 249.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2740m: clr,trnsl,lt brn-trnsl, f-med,mod wl srt,sbang-sbrnd,wk sil cmt,mnr off wh arg mtx,fri-dssagg,pr inf por,fluor.
- **SANDSTONE** @ ~2760m: v lt brn-trnsl,off wh, trnsl,clr,f-med,mod wl srt,sbang-occ 80 / 5 / 4 / 5 / 6 sbrnd,wk sil cmt,mnr off wh arg mtx, fri,disagg,pr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.3 | 66 |
| RES_DEEP (ohm.m) | 25.56 | 66 |
| RES_SHALLOW (ohm.m) | 23.22 | 66 |
| **Δ Res (Deep − Shallow)** | **2.34** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2760 m MD — Interval 2755.0 – 2765.0 m

**Sample Description (spreadsheet):** Sample 2760m: 10% Siltstone, 90% fine to medium Sandstone, 100% bright FLUOR in SST. TG 190U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | f-med (max: M) |
| Fluorescence | 80% bri |
| Total Gas | 190.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2740m: clr,trnsl,lt brn-trnsl, f-med,mod wl srt,sbang-sbrnd,wk sil cmt,mnr off wh arg mtx,fri-dssagg,pr inf por,fluor.
- **SANDSTONE** @ ~2760m: v lt brn-trnsl,off wh, trnsl,clr,f-med,mod wl srt,sbang-occ 80 / 5 / 4 / 5 / 6 sbrnd,wk sil cmt,mnr off wh arg mtx, fri,disagg,pr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.2 | 66 |
| RES_DEEP (ohm.m) | 28.37 | 66 |
| RES_SHALLOW (ohm.m) | 25.08 | 66 |
| **Δ Res (Deep − Shallow)** | **3.29** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

## 5. Summary Statistics (McKinlay Member)

| Metric | Value |
|--------|-------|
| Intervals analysed | 83 |
| Depth range | 1705 – 2760 m |
| Avg % Sandstone | 96.8% |
| Avg Δ Res (Deep−Shallow) | 3.98 ohm.m |
| Max Δ Res | 15.10 ohm.m |
| Min Δ Res | 0.90 ohm.m |
| Mudlog matches | 69 / 83 |
