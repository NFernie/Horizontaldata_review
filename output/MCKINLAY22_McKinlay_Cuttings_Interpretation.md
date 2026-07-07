# MCKINLAY 22 — McKinlay Member Cuttings & Log Interpretation

**Generated:** 2026-07-07 03:09 UTC  
**Well:** MCKINLAY 22 (MCKINLAY 22)  
**TD:** 3206 m MD  

---

## 1. Data Sources & Methodology

| Source | File | Role |
|--------|------|------|
| Mudlog PDF | `Mckinlay 22_Mudlog_SPUD-3206.4m(TD).pdf` | Cuttings lithology descriptions |
| Sample Descriptions | `McKinlay 22 Hz Section samples descriptions.xlsx` (Input Sheet) | Depth intervals & sample properties |
| Formation Tops | `DC30.xlsx`, `Mck_Murta.xlsx` | Reservoir entry & overburden identification |
| Wireline Log (LAS) | `Mck_22` | GR, RES_DEEP, RES_SHALLOW |

## 2. Formation Top Analysis

### 2.1 Key Tops

| Marker | Depth (m MD) | Source |
|--------|-------------|--------|
| DC30 | 1671.61 | DC30.xlsx |
| McKinlay Member (shallowest) | 1672.50 | Mck_Murta.xlsx |

### 2.2 McKinlay Member Top Classification

**Target re-entry (McKinlay without paired Murta):**
- 1672.50 m MD

**Overburden intersections (McKinlay ≈ Murta within 5 m):**
| McKinlay (m MD) | Murta (m MD) | Δ (m) |
|-----------------|-------------|-------|
| _none identified_ | — | — |

**McKinlay Member analysis window:** 1672.5 – 3206.3 m MD

**Excluded zones (±10 m around overburden & target re-entry tops):** 1662–1682 (target_reentry)

**Samples in McKinlay Member:** 306 of 331 total
- Excluded pre-reservoir: 22
- Excluded overburden intersections: 0
- Excluded target re-entry tops: 3

## 3. Known Shortcomings

> **Read this section before using the output.**

1. **Mudlog PDF text extraction is imperfect.** Depth-to-description assignment uses ±15 m proximity heuristics.
2. **Formation top discrepancies** between Mck_Murta.xlsx and mudlog PDF picks are noted where present.
3. **Well name mapping:** MCKINLAY 22 → `MCKINLAY 22` (verified by TD and LAS WELL header).
4. **Sample intervals** are midpoints between consecutive sample depths — variable widths where spacing is irregular.
5. **Resistivity permeability proxy** is qualitative only (Δ Res = RES_DEEP − RES_SHALLOW).
6. **NULL LAS values** (-999.25) excluded from averages.
7. **Exclusion zones** use ±10 m around paired overburden tops AND McKinlay target re-entry tops without Murta pairs.
8. **Input Sheet only** — Calculations Sheet not used.
9. **McKinlay legacy spreadsheet:** Sheet1 columns F (TG), G (%SS), H (%fluoro) used directly; column A description text parsed for grain size, fluorescence brightness, and siderite.

## 4. McKinlay Member Sample Intervals

Each section: depth interval, spreadsheet sample, mudlog cuttings, wireline log averages.

### 1685 m MD — Interval 1683.0 – 1687.5 m

**Sample Description (spreadsheet):** Sample 1685m: 10% Siltstone. 90% Sandstone. 100% mod bright to dull FLUOR, TG 55U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | Siltstone. 90% (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 55.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1680m: clr,trnsl,v lt brnsh gry, v lt gry,f,mnr med,tr crs,mod srt,sbang- sbrnd,wk sil cmt,mnr brn-wh arg mtx, preddisagg,fri aggs,fr inf por,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.3 | 29 |
| RES_DEEP (ohm.m) | 22.03 | 29 |
| RES_SHALLOW (ohm.m) | 21.70 | 29 |
| **Δ Res (Deep − Shallow)** | **0.33** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1690 m MD — Interval 1687.5 – 1692.5 m

**Sample Description (spreadsheet):** Sample 1690m: 10% Siltstone. 90% Sandstone. 100% mod bright to dull FLUOR, TG 58U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | Siltstone. 90% (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 58.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1680m: clr,trnsl,v lt brnsh gry, v lt gry,f,mnr med,tr crs,mod srt,sbang- sbrnd,wk sil cmt,mnr brn-wh arg mtx, preddisagg,fri aggs,fr inf por,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.3 | 33 |
| RES_DEEP (ohm.m) | 20.43 | 33 |
| RES_SHALLOW (ohm.m) | 20.34 | 33 |
| **Δ Res (Deep − Shallow)** | **0.09** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1695 m MD — Interval 1692.5 – 1697.5 m

**Sample Description (spreadsheet):** Sample 1695m: 10% Siltstone, 90% Sandstone. 100% mod briFLUOR in SST, TG 69U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | Siltstone, 90% (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 69.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1680m: clr,trnsl,v lt brnsh gry, v lt gry,f,mnr med,tr crs,mod srt,sbang- sbrnd,wk sil cmt,mnr brn-wh arg mtx, preddisagg,fri aggs,fr inf por,pr vis por,fluor.
- **SILTSTONE** @ ~1710m: med grysh brn,med-dk gry,aren,g/t slty SST i/p,tr carb spks, mnr sndy lams,mod hd-frm,sbblky- sbfiss. SURVEY @ 1717.9m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.0 | 33 |
| RES_DEEP (ohm.m) | 20.85 | 33 |
| RES_SHALLOW (ohm.m) | 20.81 | 33 |
| **Δ Res (Deep − Shallow)** | **0.04** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1700 m MD — Interval 1697.5 – 1702.5 m

**Sample Description (spreadsheet):** Sample 1700m: 15% Siltstone, 85% Sandstone. 80% bri FLUOR in SST, TG 42U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | Siltstone, 85% (max: nan) |
| Fluorescence | 80.0% nan |
| Total Gas | 42.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1710m: med grysh brn,med-dk gry,aren,g/t slty SST i/p,tr carb spks, mnr sndy lams,mod hd-frm,sbblky- sbfiss. SURVEY @ 1717.9m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.7 | 33 |
| RES_DEEP (ohm.m) | 21.82 | 33 |
| RES_SHALLOW (ohm.m) | 21.53 | 33 |
| **Δ Res (Deep − Shallow)** | **0.28** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1705 m MD — Interval 1702.5 – 1707.5 m

**Sample Description (spreadsheet):** Sample 1705m: 5% Siltstone. 95% Sandstone. 75% mod bright to dull FLUOR, TG 63U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | Siltstone. 95% (max: nan) |
| Fluorescence | 75.0% nan |
| Total Gas | 63.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1710m: med grysh brn,med-dk gry,aren,g/t slty SST i/p,tr carb spks, mnr sndy lams,mod hd-frm,sbblky- sbfiss. SURVEY @ 1717.9m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.1 | 33 |
| RES_DEEP (ohm.m) | 19.97 | 33 |
| RES_SHALLOW (ohm.m) | 18.93 | 33 |
| **Δ Res (Deep − Shallow)** | **1.04** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1710 m MD — Interval 1707.5 – 1712.5 m

**Sample Description (spreadsheet):** Sample 1710m: TR% Siltstone. 100% Sandstone. 75% mod bright to dull FLUOR, TG 50U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 75.0% nan |
| Total Gas | 50.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1710m: med grysh brn,med-dk gry,aren,g/t slty SST i/p,tr carb spks, mnr sndy lams,mod hd-frm,sbblky- sbfiss. SURVEY @ 1717.9m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.9 | 32 |
| RES_DEEP (ohm.m) | 21.33 | 32 |
| RES_SHALLOW (ohm.m) | 20.20 | 32 |
| **Δ Res (Deep − Shallow)** | **1.13** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1715 m MD — Interval 1712.5 – 1716.5 m

**Sample Description (spreadsheet):** Sample 1715m: 15% Siltstone. 85% Sandstone. 75% mod bright to dull FLUOR in SST, TG 38U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | Siltstone. 85% (max: nan) |
| Fluorescence | 75.0% nan |
| Total Gas | 38.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1710m: med grysh brn,med-dk gry,aren,g/t slty SST i/p,tr carb spks, mnr sndy lams,mod hd-frm,sbblky- sbfiss. SURVEY @ 1717.9m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.1 | 27 |
| RES_DEEP (ohm.m) | 20.66 | 27 |
| RES_SHALLOW (ohm.m) | 19.68 | 27 |
| **Δ Res (Deep − Shallow)** | **0.98** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1718 m MD — Interval 1716.5 – 1719.0 m

**Sample Description (spreadsheet):** Spot Sample 1718m: 10% Siltstone. 90% Sandstone. 75% mod bright to dull FLUOR in SST, TG 111U......

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | Siltstone. 90% (max: nan) |
| Fluorescence | 75.0% nan |
| Total Gas | 111.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1710m: med grysh brn,med-dk gry,aren,g/t slty SST i/p,tr carb spks, mnr sndy lams,mod hd-frm,sbblky- sbfiss. SURVEY @ 1717.9m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.5 | 16 |
| RES_DEEP (ohm.m) | 21.99 | 16 |
| RES_SHALLOW (ohm.m) | 20.97 | 16 |
| **Δ Res (Deep − Shallow)** | **1.02** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1720 m MD — Interval 1719.0 – 1722.5 m

**Sample Description (spreadsheet):** Sample 1720m: 10% Siltstone. 90% Sandstone. 70% dull to mod bright FLUOR in SST, TG 44U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | Siltstone. 90% (max: nan) |
| Fluorescence | 70.0% nan |
| Total Gas | 44.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1710m: med grysh brn,med-dk gry,aren,g/t slty SST i/p,tr carb spks, mnr sndy lams,mod hd-frm,sbblky- sbfiss. SURVEY @ 1717.9m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.6 | 23 |
| RES_DEEP (ohm.m) | 21.75 | 23 |
| RES_SHALLOW (ohm.m) | 20.75 | 23 |
| **Δ Res (Deep − Shallow)** | **1.00** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1725 m MD — Interval 1722.5 – 1727.5 m

**Sample Description (spreadsheet):** Sample 1725m: 25% Siltstone. 75% very fine Sandstone. 50% dull FLUOR in SST, TG 43U

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | very fine (max: nan) |
| Fluorescence | 50.0% nan |
| Total Gas | 43.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1710m: med grysh brn,med-dk gry,aren,g/t slty SST i/p,tr carb spks, mnr sndy lams,mod hd-frm,sbblky- sbfiss. SURVEY @ 1717.9m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.9 | 33 |
| RES_DEEP (ohm.m) | 22.43 | 33 |
| RES_SHALLOW (ohm.m) | 21.27 | 33 |
| **Δ Res (Deep − Shallow)** | **1.16** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1730 m MD — Interval 1727.5 – 1732.5 m

**Sample Description (spreadsheet):** Sample 1730m: 30% Siltstone. 70% very fine Sandstone. 60% dull FLUOR in SST, TG 38U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | very fine (max: nan) |
| Fluorescence | 60.0% nan |
| Total Gas | 38.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.8 | 33 |
| RES_DEEP (ohm.m) | 23.50 | 33 |
| RES_SHALLOW (ohm.m) | 22.20 | 33 |
| **Δ Res (Deep − Shallow)** | **1.30** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1735 m MD — Interval 1732.5 – 1736.5 m

**Sample Description (spreadsheet):** Sample 1735m: 40% Siltstone. 60% very fine Sandstone. 60% dull FLUOR in SST, TG 45U

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | very fine (max: nan) |
| Fluorescence | 60.0% nan |
| Total Gas | 45.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.9 | 26 |
| RES_DEEP (ohm.m) | 24.40 | 26 |
| RES_SHALLOW (ohm.m) | 22.93 | 26 |
| **Δ Res (Deep − Shallow)** | **1.47** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1738 m MD — Interval 1736.5 – 1739.0 m

**Sample Description (spreadsheet):** 15% Siltstone, 85% very fine to fine Sandstone, 70% nan FLUOR, TG 98.0U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 70.0% nan |
| Total Gas | 98.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.3 | 16 |
| RES_DEEP (ohm.m) | 24.52 | 16 |
| RES_SHALLOW (ohm.m) | 22.59 | 16 |
| **Δ Res (Deep − Shallow)** | **1.93** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1740 m MD — Interval 1739.0 – 1742.5 m

**Sample Description (spreadsheet):** Sample 1740m: 35% Siltstone. 65% very fine Sandstone. 60% dull FLUOR in SST, TG 60U

| Property | Value |
|----------|-------|
| % Sandstone | 65.0 |
| Grain Size | very fine (max: nan) |
| Fluorescence | 65.0% nan |
| Total Gas | 60.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.1 | 23 |
| RES_DEEP (ohm.m) | 23.19 | 23 |
| RES_SHALLOW (ohm.m) | 22.26 | 23 |
| **Δ Res (Deep − Shallow)** | **0.93** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1745 m MD — Interval 1742.5 – 1747.5 m

**Sample Description (spreadsheet):** Sample 1745m: 55% Siltstone. 45% very fine Sandstone. 50% dull to mod bri FLUOR in SST, TG 43U

| Property | Value |
|----------|-------|
| % Sandstone | 45.0 |
| Grain Size | very fine (max: nan) |
| Fluorescence | 45.0% nan |
| Total Gas | 43.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.3 | 33 |
| RES_DEEP (ohm.m) | 22.55 | 33 |
| RES_SHALLOW (ohm.m) | 21.68 | 33 |
| **Δ Res (Deep − Shallow)** | **0.86** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1750 m MD — Interval 1747.5 – 1751.2 m

**Sample Description (spreadsheet):** Sample 1750m: 40% Siltstone. 60% very fine Sandstone. 60% dull to mod bri FLUOR in SST, TG 80U

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | very fine (max: nan) |
| Fluorescence | 60.0% nan |
| Total Gas | 80.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.1 | 25 |
| RES_DEEP (ohm.m) | 27.15 | 25 |
| RES_SHALLOW (ohm.m) | 26.16 | 25 |
| **Δ Res (Deep − Shallow)** | **0.99** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1752 m MD — Interval 1751.2 – 1753.8 m

**Sample Description (spreadsheet):** Sample 1752.5m: 25% Siltstone. 75% very fine to fine Sandstone. 80% mod bri to dull FLUOR in SST, TG 113U

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 80.0% nan |
| Total Gas | 113.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.1 | 16 |
| RES_DEEP (ohm.m) | 24.91 | 16 |
| RES_SHALLOW (ohm.m) | 24.48 | 16 |
| **Δ Res (Deep − Shallow)** | **0.43** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1755 m MD — Interval 1753.8 – 1757.5 m

**Sample Description (spreadsheet):** Sample 1755m: 25% Siltstone. 75% very fine to fine Sandstone. 75% mod bri to dull FLUOR in SST, TG 131U

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 75.0% nan |
| Total Gas | 131.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.1 | 25 |
| RES_DEEP (ohm.m) | 22.62 | 25 |
| RES_SHALLOW (ohm.m) | 22.20 | 25 |
| **Δ Res (Deep − Shallow)** | **0.42** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1760 m MD — Interval 1757.5 – 1762.5 m

**Sample Description (spreadsheet):** Sample 1760m: 20% Siltstone. 80% very fine Sandstone. 85% mod bri to dull FLUOR in SST, TG 142U peak

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine (max: nan) |
| Fluorescence | 85.0% nan |
| Total Gas | 142.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.8 | 32 |
| RES_DEEP (ohm.m) | 19.55 | 32 |
| RES_SHALLOW (ohm.m) | 18.87 | 32 |
| **Δ Res (Deep − Shallow)** | **0.68** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1765 m MD — Interval 1762.5 – 1767.5 m

**Sample Description (spreadsheet):** Sample 1765m: 45% Siltstone. 55% very fineSandstone. 50% dullFLUOR in SST, TG 93U peak

| Property | Value |
|----------|-------|
| % Sandstone | 45.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 50.0% nan |
| Total Gas | 93.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1780m: lt brn,v lt gry brn, clr-trnsl,vf,g/t aren SLTST,v wl srt,sbang-sbrnd,wk sil cmt,com pl brn gry slty/arg mtx,fri,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.2 | 33 |
| RES_DEEP (ohm.m) | 16.58 | 33 |
| RES_SHALLOW (ohm.m) | 15.79 | 33 |
| **Δ Res (Deep − Shallow)** | **0.79** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1770 m MD — Interval 1767.5 – 1772.5 m

**Sample Description (spreadsheet):** Sample 1770m: 40% Siltstone. 60% very fine Sandstone. 20% dull FLUOR in SST, TG 52U

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | very fine (max: nan) |
| Fluorescence | 20.0% nan |
| Total Gas | 52.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1780m: lt brn,v lt gry brn, clr-trnsl,vf,g/t aren SLTST,v wl srt,sbang-sbrnd,wk sil cmt,com pl brn gry slty/arg mtx,fri,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.4 | 33 |
| RES_DEEP (ohm.m) | 16.20 | 33 |
| RES_SHALLOW (ohm.m) | 15.33 | 33 |
| **Δ Res (Deep − Shallow)** | **0.87** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1775 m MD — Interval 1772.5 – 1777.5 m

**Sample Description (spreadsheet):** Sample 1775m: 30% Siltstone. 70% very fine Sandstone. 50% dull FLUOR in SST, TG 63U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | very fine (max: nan) |
| Fluorescence | 50.0% nan |
| Total Gas | 63.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1780m: lt brn,v lt gry brn, clr-trnsl,vf,g/t aren SLTST,v wl srt,sbang-sbrnd,wk sil cmt,com pl brn gry slty/arg mtx,fri,pr vis por,fluor.
- **SANDSTONE** @ ~1790m: clr-trnsl,pl trnsl brn,vf-f,rr med-crs,mod srt,sbang- sbrnd,wk sil cmt,mnr pl gry arg mtx,com lse,fr inf por,pr vis por, fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.1 | 33 |
| RES_DEEP (ohm.m) | 16.30 | 33 |
| RES_SHALLOW (ohm.m) | 15.32 | 33 |
| **Δ Res (Deep − Shallow)** | **0.98** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1780 m MD — Interval 1777.5 – 1782.5 m

**Sample Description (spreadsheet):** Sample 1780m: 50% Siltstone. 50% very fine Sandstone. 30% dull FLUOR in SST, TG 58U

| Property | Value |
|----------|-------|
| % Sandstone | 50.0 |
| Grain Size | very fine (max: nan) |
| Fluorescence | 30.0% nan |
| Total Gas | 58.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1780m: lt brn,v lt gry brn, clr-trnsl,vf,g/t aren SLTST,v wl srt,sbang-sbrnd,wk sil cmt,com pl brn gry slty/arg mtx,fri,pr vis por,fluor.
- **SANDSTONE** @ ~1790m: clr-trnsl,pl trnsl brn,vf-f,rr med-crs,mod srt,sbang- sbrnd,wk sil cmt,mnr pl gry arg mtx,com lse,fr inf por,pr vis por, fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.8 | 33 |
| RES_DEEP (ohm.m) | 16.62 | 33 |
| RES_SHALLOW (ohm.m) | 15.57 | 33 |
| **Δ Res (Deep − Shallow)** | **1.06** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1785 m MD — Interval 1782.5 – 1787.5 m

**Sample Description (spreadsheet):** Sample 1785m: 40% Siltstone. 60% very fine Sandstone. 20% dull FLUOR in SST, TG 65U

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | very fine (max: nan) |
| Fluorescence | 20.0% nan |
| Total Gas | 65.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1780m: lt brn,v lt gry brn, clr-trnsl,vf,g/t aren SLTST,v wl srt,sbang-sbrnd,wk sil cmt,com pl brn gry slty/arg mtx,fri,pr vis por,fluor.
- **SANDSTONE** @ ~1790m: clr-trnsl,pl trnsl brn,vf-f,rr med-crs,mod srt,sbang- sbrnd,wk sil cmt,mnr pl gry arg mtx,com lse,fr inf por,pr vis por, fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.6 | 33 |
| RES_DEEP (ohm.m) | 17.14 | 33 |
| RES_SHALLOW (ohm.m) | 15.89 | 33 |
| **Δ Res (Deep − Shallow)** | **1.25** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1790 m MD — Interval 1787.5 – 1792.5 m

**Sample Description (spreadsheet):** Sample 1790m: 30% Siltstone. 70% very fine Sandstone. 50% dull FLUOR in SST, TG 67U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | very fine (max: nan) |
| Fluorescence | 50.0% nan |
| Total Gas | 67.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1780m: lt brn,v lt gry brn, clr-trnsl,vf,g/t aren SLTST,v wl srt,sbang-sbrnd,wk sil cmt,com pl brn gry slty/arg mtx,fri,pr vis por,fluor.
- **SANDSTONE** @ ~1790m: clr-trnsl,pl trnsl brn,vf-f,rr med-crs,mod srt,sbang- sbrnd,wk sil cmt,mnr pl gry arg mtx,com lse,fr inf por,pr vis por, fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.4 | 32 |
| RES_DEEP (ohm.m) | 18.23 | 32 |
| RES_SHALLOW (ohm.m) | 16.93 | 32 |
| **Δ Res (Deep − Shallow)** | **1.29** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1795 m MD — Interval 1792.5 – 1797.5 m

**Sample Description (spreadsheet):** Sample 1795m: 20% Siltstone. 80% very fine Sandstone. 50% mod bri FLUOR in SST, TG 64U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | very fine (max: nan) |
| Fluorescence | 50.0% nan |
| Total Gas | 64.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1780m: lt brn,v lt gry brn, clr-trnsl,vf,g/t aren SLTST,v wl srt,sbang-sbrnd,wk sil cmt,com pl brn gry slty/arg mtx,fri,pr vis por,fluor.
- **SANDSTONE** @ ~1790m: clr-trnsl,pl trnsl brn,vf-f,rr med-crs,mod srt,sbang- sbrnd,wk sil cmt,mnr pl gry arg mtx,com lse,fr inf por,pr vis por, fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.3 | 33 |
| RES_DEEP (ohm.m) | 19.28 | 33 |
| RES_SHALLOW (ohm.m) | 17.81 | 33 |
| **Δ Res (Deep − Shallow)** | **1.47** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1800 m MD — Interval 1797.5 – 1802.5 m

**Sample Description (spreadsheet):** Sample 1800m: 10% Siltstone. 90% very fine Sandstone. 90% mod bri FLUOR in SST, TG 104U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 104.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1790m: clr-trnsl,pl trnsl brn,vf-f,rr med-crs,mod srt,sbang- sbrnd,wk sil cmt,mnr pl gry arg mtx,com lse,fr inf por,pr vis por, fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.5 | 33 |
| RES_DEEP (ohm.m) | 19.48 | 33 |
| RES_SHALLOW (ohm.m) | 18.25 | 33 |
| **Δ Res (Deep − Shallow)** | **1.23** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1805 m MD — Interval 1802.5 – 1807.5 m

**Sample Description (spreadsheet):** Sample 1805m: 15% Siltstone. 85% very fine Sandstone. 90% mod bri FLUOR in SST, TG 90U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 90.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1790m: clr-trnsl,pl trnsl brn,vf-f,rr med-crs,mod srt,sbang- sbrnd,wk sil cmt,mnr pl gry arg mtx,com lse,fr inf por,pr vis por, fluor.
- **SANDSTONE** @ ~1820m: clr-trnsl,f-med,mnr crs,mod srt,sbang-sbrnd,mod wh sil cmt,lt brn-gryslty mtx,fri aggs, abdt lse qtz grs,gd inf por,pr vis por, fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.9 | 33 |
| RES_DEEP (ohm.m) | 20.40 | 33 |
| RES_SHALLOW (ohm.m) | 19.52 | 33 |
| **Δ Res (Deep − Shallow)** | **0.87** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1810 m MD — Interval 1807.5 – 1812.5 m

**Sample Description (spreadsheet):** Sample 1810m: 20% Siltstone. 80% very fine Sandstone. 80% mod bri FLUOR in SST, TG 132U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine (max: nan) |
| Fluorescence | 80.0% nan |
| Total Gas | 132.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1820m: clr-trnsl,f-med,mnr crs,mod srt,sbang-sbrnd,mod wh sil cmt,lt brn-gryslty mtx,fri aggs, abdt lse qtz grs,gd inf por,pr vis por, fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.4 | 33 |
| RES_DEEP (ohm.m) | 20.10 | 33 |
| RES_SHALLOW (ohm.m) | 19.20 | 33 |
| **Δ Res (Deep − Shallow)** | **0.90** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1815 m MD — Interval 1812.5 – 1817.5 m

**Sample Description (spreadsheet):** Sample 1815m: 10% Siltstone. 90% very fine to rare medium Sandstone. 100% mod bri FLUOR in SST, TG 130U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to rare medium (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 130.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1820m: clr-trnsl,f-med,mnr crs,mod srt,sbang-sbrnd,mod wh sil cmt,lt brn-gryslty mtx,fri aggs, abdt lse qtz grs,gd inf por,pr vis por, fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.4 | 32 |
| RES_DEEP (ohm.m) | 21.17 | 32 |
| RES_SHALLOW (ohm.m) | 20.81 | 32 |
| **Δ Res (Deep − Shallow)** | **0.36** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1820 m MD — Interval 1817.5 – 1822.5 m

**Sample Description (spreadsheet):** Sample 1820m: 5% Siltstone. 95% fine to med, rare coarse Sandstone. 100% bri FLUOR in SST, TG 105U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | fine to med, rare coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 105.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1820m: clr-trnsl,f-med,mnr crs,mod srt,sbang-sbrnd,mod wh sil cmt,lt brn-gryslty mtx,fri aggs, abdt lse qtz grs,gd inf por,pr vis por, fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.4 | 33 |
| RES_DEEP (ohm.m) | 20.85 | 33 |
| RES_SHALLOW (ohm.m) | 20.43 | 33 |
| **Δ Res (Deep − Shallow)** | **0.42** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1825 m MD — Interval 1822.5 – 1827.5 m

**Sample Description (spreadsheet):** Sample 1825m: 5% Siltstone. 95% fine to med, rare coarse Sandstone. 100% bri FLUOR in SST, TG 126U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | fine to med, rare coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 126.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1820m: clr-trnsl,f-med,mnr crs,mod srt,sbang-sbrnd,mod wh sil cmt,lt brn-gryslty mtx,fri aggs, abdt lse qtz grs,gd inf por,pr vis por, fluor.
- **SANDSTONE** @ ~1840m: clr-trnsl,v pl brn-off wh,vf-f,mnr crs,wl srt,sbang-sbrnd, wk sil cmt,com pl brn arg cmt,mnr lse, tr qtz ovgths,fri-mod hd,pr vis por,fr- gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.6 | 33 |
| RES_DEEP (ohm.m) | 20.20 | 33 |
| RES_SHALLOW (ohm.m) | 20.08 | 33 |
| **Δ Res (Deep − Shallow)** | **0.12** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1830 m MD — Interval 1827.5 – 1832.5 m

**Sample Description (spreadsheet):** Sample 1830m: trace Siltstone. 100% fine to med, minor coarse Sandstone. 100% bri FLUOR in SST, TG 135U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | fine to med, minor coarse (max: nan) |
| Fluorescence | 100.0% Siltstone. 100% fine to med, minor coarse Sandstone. 100% bri |
| Total Gas | 135.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1820m: clr-trnsl,f-med,mnr crs,mod srt,sbang-sbrnd,mod wh sil cmt,lt brn-gryslty mtx,fri aggs, abdt lse qtz grs,gd inf por,pr vis por, fluor.
- **SANDSTONE** @ ~1840m: clr-trnsl,v pl brn-off wh,vf-f,mnr crs,wl srt,sbang-sbrnd, wk sil cmt,com pl brn arg cmt,mnr lse, tr qtz ovgths,fri-mod hd,pr vis por,fr- gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.2 | 33 |
| RES_DEEP (ohm.m) | 20.72 | 33 |
| RES_SHALLOW (ohm.m) | 20.69 | 33 |
| **Δ Res (Deep − Shallow)** | **0.03** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1835 m MD — Interval 1832.5 – 1837.5 m

**Sample Description (spreadsheet):** Sample 1835m: 20% Siltstone. 80% fine to med, minor coarse Sandstone. 100% bri FLUOR in SST, TG 130U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | fine to med, minor coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 130.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1820m: clr-trnsl,f-med,mnr crs,mod srt,sbang-sbrnd,mod wh sil cmt,lt brn-gryslty mtx,fri aggs, abdt lse qtz grs,gd inf por,pr vis por, fluor.
- **SANDSTONE** @ ~1840m: clr-trnsl,v pl brn-off wh,vf-f,mnr crs,wl srt,sbang-sbrnd, wk sil cmt,com pl brn arg cmt,mnr lse, tr qtz ovgths,fri-mod hd,pr vis por,fr- gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.6 | 33 |
| RES_DEEP (ohm.m) | 23.23 | 33 |
| RES_SHALLOW (ohm.m) | 23.50 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.27** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1840 m MD — Interval 1837.5 – 1842.5 m

**Sample Description (spreadsheet):** Sample 1840m: 20% Siltstone. 80% very fine to minor medium Sandstone. 100% bri FLUOR in SST, TG 136U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to minor medium (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 136.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1840m: clr-trnsl,v pl brn-off wh,vf-f,mnr crs,wl srt,sbang-sbrnd, wk sil cmt,com pl brn arg cmt,mnr lse, tr qtz ovgths,fri-mod hd,pr vis por,fr- gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.9 | 32 |
| RES_DEEP (ohm.m) | 23.18 | 32 |
| RES_SHALLOW (ohm.m) | 22.93 | 32 |
| **Δ Res (Deep − Shallow)** | **0.24** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1845 m MD — Interval 1842.5 – 1847.5 m

**Sample Description (spreadsheet):** Sample 1845m: 10% Siltstone. 90% very fine to minor coarse Sandstone. 100% bri FLUOR in SST, TG 100U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to minor coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 100.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1840m: clr-trnsl,v pl brn-off wh,vf-f,mnr crs,wl srt,sbang-sbrnd, wk sil cmt,com pl brn arg cmt,mnr lse, tr qtz ovgths,fri-mod hd,pr vis por,fr- gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.2 | 33 |
| RES_DEEP (ohm.m) | 23.53 | 33 |
| RES_SHALLOW (ohm.m) | 22.64 | 33 |
| **Δ Res (Deep − Shallow)** | **0.89** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1850 m MD — Interval 1847.5 – 1852.5 m

**Sample Description (spreadsheet):** Sample 1850m: 10% Siltstone. 90% very fine to fine Sandstone. 100% bri FLUOR in SST, TG 163U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 163.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1840m: clr-trnsl,v pl brn-off wh,vf-f,mnr crs,wl srt,sbang-sbrnd, wk sil cmt,com pl brn arg cmt,mnr lse, tr qtz ovgths,fri-mod hd,pr vis por,fr- gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.9 | 33 |
| RES_DEEP (ohm.m) | 22.86 | 33 |
| RES_SHALLOW (ohm.m) | 21.82 | 33 |
| **Δ Res (Deep − Shallow)** | **1.05** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1855 m MD — Interval 1852.5 – 1857.5 m

**Sample Description (spreadsheet):** Sample 1855m: 5% Siltstone. 95% very fine to fine Sandstone, occasionally coarse. 100% bri FLUOR in SST, TG 151U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 151.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1840m: clr-trnsl,v pl brn-off wh,vf-f,mnr crs,wl srt,sbang-sbrnd, wk sil cmt,com pl brn arg cmt,mnr lse, tr qtz ovgths,fri-mod hd,pr vis por,fr- gd inf por,fluor.
- **SILTSTONE** @ ~1870m: med dk gry,med gry brn, aren,tr carb flks,mod hd-frm,sbblky- blky. 64 / 6 / 6 / 10 / 14 108 U SURVEY @ 1871.8m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.7 | 33 |
| RES_DEEP (ohm.m) | 23.39 | 33 |
| RES_SHALLOW (ohm.m) | 22.09 | 33 |
| **Δ Res (Deep − Shallow)** | **1.31** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1860 m MD — Interval 1857.5 – 1865.0 m

**Sample Description (spreadsheet):** Sample 1860m: 100% very fine to fine, occasionally coarse Sandstone. 100% bri FLUOR in SST, TG 110U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, occasionally coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 110.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1870m: med dk gry,med gry brn, aren,tr carb flks,mod hd-frm,sbblky- blky. 64 / 6 / 6 / 10 / 14 108 U SURVEY @ 1871.8m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.9 | 49 |
| RES_DEEP (ohm.m) | 24.75 | 49 |
| RES_SHALLOW (ohm.m) | 22.29 | 49 |
| **Δ Res (Deep − Shallow)** | **2.46** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1870 m MD — Interval 1865.0 – 1872.5 m

**Sample Description (spreadsheet):** Sample 1870m: 30% Siltstone. 70% fine to coarse, predominantly medium to coarse Sandstone. 90% bri FLUOR in SST, TG 84U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | fine to coarse, predominantly medium to coarse (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 84.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1870m: med dk gry,med gry brn, aren,tr carb flks,mod hd-frm,sbblky- blky. 64 / 6 / 6 / 10 / 14 108 U SURVEY @ 1871.8m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 114.5 | 49 |
| RES_DEEP (ohm.m) | 23.02 | 49 |
| RES_SHALLOW (ohm.m) | 21.17 | 49 |
| **Δ Res (Deep − Shallow)** | **1.85** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1875 m MD — Interval 1872.5 – 1877.5 m

**Sample Description (spreadsheet):** Sample 1875m: 50% siltstone, 50% sandstone. fine to coarse. 40% Bri Fluor. TG87

| Property | Value |
|----------|-------|
| % Sandstone | 50.0 |
| Grain Size | siltstone, 50% (max: nan) |
| Fluorescence | 40.0% nan |
| Total Gas | 87.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1870m: med dk gry,med gry brn, aren,tr carb flks,mod hd-frm,sbblky- blky. 64 / 6 / 6 / 10 / 14 108 U SURVEY @ 1871.8m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.3 | 33 |
| RES_DEEP (ohm.m) | 22.29 | 33 |
| RES_SHALLOW (ohm.m) | 20.41 | 33 |
| **Δ Res (Deep − Shallow)** | **1.87** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1880 m MD — Interval 1877.5 – 1882.5 m

**Sample Description (spreadsheet):** Sample 1880m: 30% Siltstone. 70% fine to coarse Sandstone. 50% bri FLUOR in SST, TG 110U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | fine to coarse (max: nan) |
| Fluorescence | 50.0% nan |
| Total Gas | 110.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1870m: med dk gry,med gry brn, aren,tr carb flks,mod hd-frm,sbblky- blky. 64 / 6 / 6 / 10 / 14 108 U SURVEY @ 1871.8m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.3 | 33 |
| RES_DEEP (ohm.m) | 22.99 | 33 |
| RES_SHALLOW (ohm.m) | 20.80 | 33 |
| **Δ Res (Deep − Shallow)** | **2.19** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1885 m MD — Interval 1882.5 – 1887.5 m

**Sample Description (spreadsheet):** Sample 1885m: 50% Siltstone. 50% fine to coarse Sandstone. 70% bri FLUOR in SST, TG 70U

| Property | Value |
|----------|-------|
| % Sandstone | 50.0 |
| Grain Size | fine to coarse (max: nan) |
| Fluorescence | 70.0% nan |
| Total Gas | 70.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1870m: med dk gry,med gry brn, aren,tr carb flks,mod hd-frm,sbblky- blky. 64 / 6 / 6 / 10 / 14 108 U SURVEY @ 1871.8m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.0 | 33 |
| RES_DEEP (ohm.m) | 28.93 | 33 |
| RES_SHALLOW (ohm.m) | 26.11 | 33 |
| **Δ Res (Deep − Shallow)** | **2.82** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1890 m MD — Interval 1887.5 – 1892.5 m

**Sample Description (spreadsheet):** Sample 1890m: 100% very fine to fine, occasionally coarse. Predominantly loose Sandstone. 100% bri FLUOR in SST, TG 106U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, occasionally coarse. Predominantly loose (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 106.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.6 | 32 |
| RES_DEEP (ohm.m) | 26.28 | 32 |
| RES_SHALLOW (ohm.m) | 24.27 | 32 |
| **Δ Res (Deep − Shallow)** | **2.01** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1895 m MD — Interval 1892.5 – 1897.5 m

**Sample Description (spreadsheet):** Sample 1895m: 10% Siltstone, 90% very fine to fine, occasionally medium to coarse. abundant loose Sandstone. 100% bri FLUOR in SST, TG 130U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | Siltstone, 90% very fine to fine, occasionally medium to coarse. abundant loose (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 130.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.7 | 33 |
| RES_DEEP (ohm.m) | 25.87 | 33 |
| RES_SHALLOW (ohm.m) | 23.88 | 33 |
| **Δ Res (Deep − Shallow)** | **1.99** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1900 m MD — Interval 1897.5 – 1902.5 m

**Sample Description (spreadsheet):** Sample 1900m: 15% Siltstone, 85% very fine to fine, minor medium. minor loose Sandstone. 100% bri FLUOR in SST, TG 140U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | Siltstone, 85% very fine to fine, minor medium. minor loose (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 140.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.9 | 33 |
| RES_DEEP (ohm.m) | 24.44 | 33 |
| RES_SHALLOW (ohm.m) | 23.53 | 33 |
| **Δ Res (Deep − Shallow)** | **0.90** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1905 m MD — Interval 1902.5 – 1907.5 m

**Sample Description (spreadsheet):** Sample 1905m: 5% Siltstone, 95% very fine to fine, minor medium. minor loose Sandstone. 100% bri FLUOR in SST, TG 110U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | Siltstone, 95% very fine to fine, minor medium. minor loose (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 110.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1920m: v pl brn,v lt gry,clr-trnsl, vf-f,rr med-crs,tr slty intrlams,mod srt, sbang-sbrnd,mod sil cmt,com gry-brn arg mtx,fri-mod hd,rr hd aggs,mnr disagg qtz grs,pr-fr vis por,gd inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.0 | 33 |
| RES_DEEP (ohm.m) | 24.33 | 33 |
| RES_SHALLOW (ohm.m) | 24.07 | 33 |
| **Δ Res (Deep − Shallow)** | **0.27** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1910 m MD — Interval 1907.5 – 1912.5 m

**Sample Description (spreadsheet):** Sample 1910m: 20% Siltstone, 80% very fine to fine, minor medium. occasional to common loose Sandstone. 100% bri FLUOR in SST, TG 114U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | Siltstone, 80% very fine to fine, minor medium. occasional to common loose (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 114.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1920m: v pl brn,v lt gry,clr-trnsl, vf-f,rr med-crs,tr slty intrlams,mod srt, sbang-sbrnd,mod sil cmt,com gry-brn arg mtx,fri-mod hd,rr hd aggs,mnr disagg qtz grs,pr-fr vis por,gd inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.7 | 33 |
| RES_DEEP (ohm.m) | 23.36 | 33 |
| RES_SHALLOW (ohm.m) | 22.88 | 33 |
| **Δ Res (Deep − Shallow)** | **0.48** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1915 m MD — Interval 1912.5 – 1917.5 m

**Sample Description (spreadsheet):** Sample 1915m: 30% Siltstone, 70% very fine to fine, minor medium. occasional to common loose Sandstone. 100% bri FLUOR in SST, TG 105U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | Siltstone, 70% very fine to fine, minor medium. occasional to common loose (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 105.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1920m: v pl brn,v lt gry,clr-trnsl, vf-f,rr med-crs,tr slty intrlams,mod srt, sbang-sbrnd,mod sil cmt,com gry-brn arg mtx,fri-mod hd,rr hd aggs,mnr disagg qtz grs,pr-fr vis por,gd inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.2 | 33 |
| RES_DEEP (ohm.m) | 24.89 | 33 |
| RES_SHALLOW (ohm.m) | 24.22 | 33 |
| **Δ Res (Deep − Shallow)** | **0.67** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1920 m MD — Interval 1917.5 – 1922.5 m

**Sample Description (spreadsheet):** Sample 1920m: 25% Siltstone, 75% very fine to fine, trace medium. occasional loose Sandstone. 100% bri FLUOR in SST, TG 125U

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | Siltstone, 75% very fine to fine, trace medium. occasional loose (max: nan) |
| Fluorescence | 100.0% medium. occasional loose Sandstone. 100% bri |
| Total Gas | 125.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1920m: v pl brn,v lt gry,clr-trnsl, vf-f,rr med-crs,tr slty intrlams,mod srt, sbang-sbrnd,mod sil cmt,com gry-brn arg mtx,fri-mod hd,rr hd aggs,mnr disagg qtz grs,pr-fr vis por,gd inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.1 | 32 |
| RES_DEEP (ohm.m) | 26.80 | 32 |
| RES_SHALLOW (ohm.m) | 25.39 | 32 |
| **Δ Res (Deep − Shallow)** | **1.41** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1925 m MD — Interval 1922.5 – 1927.5 m

**Sample Description (spreadsheet):** Sample 1925m: 25% Siltstone, 75% very fine to fine, rare medium to coarse. occasional loose Sandstone. 100% bri FLUOR in SST, TG 98U

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | Siltstone, 75% very fine to fine, rare medium to coarse. occasional loose (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 98.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1920m: v pl brn,v lt gry,clr-trnsl, vf-f,rr med-crs,tr slty intrlams,mod srt, sbang-sbrnd,mod sil cmt,com gry-brn arg mtx,fri-mod hd,rr hd aggs,mnr disagg qtz grs,pr-fr vis por,gd inf por,
- **SILTSTONE** @ ~1940m: med dk gry,med gry brn, med gry, aren,mnr sndy lams,mnr micmic,frm,mnr mod hd,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.6 | 33 |
| RES_DEEP (ohm.m) | 28.13 | 33 |
| RES_SHALLOW (ohm.m) | 26.23 | 33 |
| **Δ Res (Deep − Shallow)** | **1.89** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1930 m MD — Interval 1927.5 – 1932.5 m

**Sample Description (spreadsheet):** Sample 1930m: 40% Siltstone, 60% very fine to fine, rare medium to coarse. occasional loose Sandstone. 100% mod bri-bri FLUOR in SST, TG 152U

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | Siltstone, 60% very fine to fine, rare medium to coarse. occasional loose (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 152.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1920m: v pl brn,v lt gry,clr-trnsl, vf-f,rr med-crs,tr slty intrlams,mod srt, sbang-sbrnd,mod sil cmt,com gry-brn arg mtx,fri-mod hd,rr hd aggs,mnr disagg qtz grs,pr-fr vis por,gd inf por,
- **SILTSTONE** @ ~1940m: med dk gry,med gry brn, med gry, aren,mnr sndy lams,mnr micmic,frm,mnr mod hd,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.3 | 33 |
| RES_DEEP (ohm.m) | 27.29 | 33 |
| RES_SHALLOW (ohm.m) | 25.39 | 33 |
| **Δ Res (Deep − Shallow)** | **1.90** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1935 m MD — Interval 1932.5 – 1937.5 m

**Sample Description (spreadsheet):** Sample 1935m: 20% Siltstone, 80% very fine to fine, rare medium to very coarse. minor loose Sandstone. 100% bri FLUOR in SST, TG 130U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | Siltstone, 80% very fine to fine, rare medium to very coarse. minor loose (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 130.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1920m: v pl brn,v lt gry,clr-trnsl, vf-f,rr med-crs,tr slty intrlams,mod srt, sbang-sbrnd,mod sil cmt,com gry-brn arg mtx,fri-mod hd,rr hd aggs,mnr disagg qtz grs,pr-fr vis por,gd inf por,
- **SILTSTONE** @ ~1940m: med dk gry,med gry brn, med gry, aren,mnr sndy lams,mnr micmic,frm,mnr mod hd,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.1 | 33 |
| RES_DEEP (ohm.m) | 27.43 | 33 |
| RES_SHALLOW (ohm.m) | 25.70 | 33 |
| **Δ Res (Deep − Shallow)** | **1.72** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1940 m MD — Interval 1937.5 – 1942.5 m

**Sample Description (spreadsheet):** Sample 1940m: 30% Siltstone, 70% very fine to medium, trace coarse to very coarse. minor loose Sandstone. 100% bri FLUOR in SST, TG 132U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | Siltstone, 70% very fine to medium, trace coarse to very coarse. minor loose (max: nan) |
| Fluorescence | 100.0% coarse to very coarse. minor loose Sandstone. 100% bri |
| Total Gas | 132.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1940m: med dk gry,med gry brn, med gry, aren,mnr sndy lams,mnr micmic,frm,mnr mod hd,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.0 | 33 |
| RES_DEEP (ohm.m) | 24.61 | 33 |
| RES_SHALLOW (ohm.m) | 23.43 | 33 |
| **Δ Res (Deep − Shallow)** | **1.19** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1945 m MD — Interval 1942.5 – 1947.5 m

**Sample Description (spreadsheet):** Sample 1945m: 40% Siltstone, 60% very fine to medium, rare coarse. common loose Sandstone. 100% bri-mod bri FLUOR in SST, TG 129U

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | Siltstone, 60% very fine to medium, rare coarse. common loose (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 129.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1940m: med dk gry,med gry brn, med gry, aren,mnr sndy lams,mnr micmic,frm,mnr mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~1960m: v pl brn,clr-trnsl,vf-med, tr crs-v crs,tr slty intrlams,pr srt,sbang- sbrnd,tr ang,mod sil cmt,com brn arg mtx,fri-mod hd,rr hd aggs,com disagg qtz grs,pr-fr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.4 | 32 |
| RES_DEEP (ohm.m) | 22.38 | 32 |
| RES_SHALLOW (ohm.m) | 21.12 | 32 |
| **Δ Res (Deep − Shallow)** | **1.26** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1950 m MD — Interval 1947.5 – 1952.5 m

**Sample Description (spreadsheet):** Sample 1950m: 20% Siltstone, 80% very fine to fine, mnr medium, tr coarse. mnr loose Sandstone. 100% bri FLUOR in SST, TG 188U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | Siltstone, 80% very fine to fine, mnr medium, tr coarse. mnr loose (max: nan) |
| Fluorescence | 100.0% coarse. mnr loose Sandstone. 100% bri |
| Total Gas | 188.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1940m: med dk gry,med gry brn, med gry, aren,mnr sndy lams,mnr micmic,frm,mnr mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~1960m: v pl brn,clr-trnsl,vf-med, tr crs-v crs,tr slty intrlams,pr srt,sbang- sbrnd,tr ang,mod sil cmt,com brn arg mtx,fri-mod hd,rr hd aggs,com disagg qtz grs,pr-fr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.7 | 33 |
| RES_DEEP (ohm.m) | 22.97 | 33 |
| RES_SHALLOW (ohm.m) | 22.02 | 33 |
| **Δ Res (Deep − Shallow)** | **0.95** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1955 m MD — Interval 1952.5 – 1957.5 m

**Sample Description (spreadsheet):** Sample 1955m: 15% Siltstone, 85% very fine to medium, rare coarse to very coarse. minor loose Sandstone. 100% bri FLUOR in SST, TG 174U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | Siltstone, 85% very fine to medium, rare coarse to very coarse. minor loose (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 174.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1940m: med dk gry,med gry brn, med gry, aren,mnr sndy lams,mnr micmic,frm,mnr mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~1960m: v pl brn,clr-trnsl,vf-med, tr crs-v crs,tr slty intrlams,pr srt,sbang- sbrnd,tr ang,mod sil cmt,com brn arg mtx,fri-mod hd,rr hd aggs,com disagg qtz grs,pr-fr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.3 | 33 |
| RES_DEEP (ohm.m) | 22.98 | 33 |
| RES_SHALLOW (ohm.m) | 21.32 | 33 |
| **Δ Res (Deep − Shallow)** | **1.66** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1960 m MD — Interval 1957.5 – 1962.5 m

**Sample Description (spreadsheet):** Sample 1960m: 20% Siltstone, 80% very fine to medium, trace coarse. common loose Sandstone. 100% bri-mod bri FLUOR in SST, TG 130U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | Siltstone, 80% very fine to medium, trace coarse. common loose (max: nan) |
| Fluorescence | 100.0% coarse. common loose Sandstone. 100% bri-mod bri |
| Total Gas | 130.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1960m: v pl brn,clr-trnsl,vf-med, tr crs-v crs,tr slty intrlams,pr srt,sbang- sbrnd,tr ang,mod sil cmt,com brn arg mtx,fri-mod hd,rr hd aggs,com disagg qtz grs,pr-fr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.8 | 33 |
| RES_DEEP (ohm.m) | 22.30 | 33 |
| RES_SHALLOW (ohm.m) | 20.94 | 33 |
| **Δ Res (Deep − Shallow)** | **1.36** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1965 m MD — Interval 1962.5 – 1967.5 m

**Sample Description (spreadsheet):** Sample 1965m: 20% Siltstone, 80% very fine to medium, trace coarse-v coarse. common loose Sandstone. 100% bri FLUOR in SST, TG 172U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | Siltstone, 80% very fine to medium, trace coarse-v coarse. common loose (max: nan) |
| Fluorescence | 100.0% coarse-v coarse. common loose Sandstone. 100% bri |
| Total Gas | 172.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1960m: v pl brn,clr-trnsl,vf-med, tr crs-v crs,tr slty intrlams,pr srt,sbang- sbrnd,tr ang,mod sil cmt,com brn arg mtx,fri-mod hd,rr hd aggs,com disagg qtz grs,pr-fr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.9 | 33 |
| RES_DEEP (ohm.m) | 22.07 | 33 |
| RES_SHALLOW (ohm.m) | 20.84 | 33 |
| **Δ Res (Deep − Shallow)** | **1.23** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1970 m MD — Interval 1967.5 – 1972.5 m

**Sample Description (spreadsheet):** Sample 1970m: 15% Siltstone, 85% very fine to medium, trace coarse. common loose Sandstone. 100% bri FLUOR in SST, TG 174U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | Siltstone, 85% very fine to medium, trace coarse. common loose (max: nan) |
| Fluorescence | 100.0% coarse. common loose Sandstone. 100% bri |
| Total Gas | 174.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1960m: v pl brn,clr-trnsl,vf-med, tr crs-v crs,tr slty intrlams,pr srt,sbang- sbrnd,tr ang,mod sil cmt,com brn arg mtx,fri-mod hd,rr hd aggs,com disagg qtz grs,pr-fr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.6 | 32 |
| RES_DEEP (ohm.m) | 20.31 | 32 |
| RES_SHALLOW (ohm.m) | 19.30 | 32 |
| **Δ Res (Deep − Shallow)** | **1.01** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1975 m MD — Interval 1972.5 – 1977.5 m

**Sample Description (spreadsheet):** Sample 1975m: 5% Siltstone, 95% very fine to fine, mnr medium, trace coarse. common loose Sandstone. 100% bri FLUOR in SST, TG 201U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | Siltstone, 95% very fine to fine, mnr medium, trace coarse. common loose (max: nan) |
| Fluorescence | 100.0% coarse. common loose Sandstone. 100% bri |
| Total Gas | 201.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1960m: v pl brn,clr-trnsl,vf-med, tr crs-v crs,tr slty intrlams,pr srt,sbang- sbrnd,tr ang,mod sil cmt,com brn arg mtx,fri-mod hd,rr hd aggs,com disagg qtz grs,pr-fr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~1990m: v pl brn,clr-trnsl,vf-med tr crs,tr slty lams,mod srt,sbang-sbrnd, mod sil cmt,mnr brn arg mtx,fri-mod hd,mnr disagg qtz grs,pr-fr vis por, fr-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.3 | 33 |
| RES_DEEP (ohm.m) | 19.78 | 33 |
| RES_SHALLOW (ohm.m) | 18.80 | 33 |
| **Δ Res (Deep − Shallow)** | **0.98** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1980 m MD — Interval 1977.5 – 1982.5 m

**Sample Description (spreadsheet):** Sample 1980m: 5% Siltstone, 95% very fine to medium, trace coarse to v coarse. minor loose Sandstone. 100% bri FLUOR in SST, TG 205U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | Siltstone, 95% very fine to medium, trace coarse to v coarse. minor loose (max: nan) |
| Fluorescence | 100.0% coarse to v coarse. minor loose Sandstone. 100% bri |
| Total Gas | 205.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1990m: v pl brn,clr-trnsl,vf-med tr crs,tr slty lams,mod srt,sbang-sbrnd, mod sil cmt,mnr brn arg mtx,fri-mod hd,mnr disagg qtz grs,pr-fr vis por, fr-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.7 | 33 |
| RES_DEEP (ohm.m) | 19.73 | 33 |
| RES_SHALLOW (ohm.m) | 19.01 | 33 |
| **Δ Res (Deep − Shallow)** | **0.72** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1985 m MD — Interval 1982.5 – 1987.5 m

**Sample Description (spreadsheet):** Sample 1985m: 5% Siltstone, 95% very fine to medium, mnr-com loose Sandstone. 100% bri FLUOR in SST, TG 210U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to medium, mnr-com loose (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 210.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1990m: v pl brn,clr-trnsl,vf-med tr crs,tr slty lams,mod srt,sbang-sbrnd, mod sil cmt,mnr brn arg mtx,fri-mod hd,mnr disagg qtz grs,pr-fr vis por, fr-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.1 | 33 |
| RES_DEEP (ohm.m) | 22.70 | 33 |
| RES_SHALLOW (ohm.m) | 22.01 | 33 |
| **Δ Res (Deep − Shallow)** | **0.69** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1990 m MD — Interval 1987.5 – 1992.5 m

**Sample Description (spreadsheet):** Sample 1990m: Tr Siltstone, 100% very fine to fine, mnr medium, tr coarse, mnr loose Sandstone. 100% bri FLUOR in SST, TG 228U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, mnr medium, tr coarse, mnr loose (max: nan) |
| Fluorescence | 100.0% Siltstone, 100% very fine to fine, mnr medium, tr coarse, mnr loose Sandstone. 100% bri |
| Total Gas | 228.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1990m: v pl brn,clr-trnsl,vf-med tr crs,tr slty lams,mod srt,sbang-sbrnd, mod sil cmt,mnr brn arg mtx,fri-mod hd,mnr disagg qtz grs,pr-fr vis por, fr-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.0 | 33 |
| RES_DEEP (ohm.m) | 26.58 | 33 |
| RES_SHALLOW (ohm.m) | 26.18 | 33 |
| **Δ Res (Deep − Shallow)** | **0.40** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1995 m MD — Interval 1992.5 – 1997.5 m

**Sample Description (spreadsheet):** Sample 1995m: 5% Siltstone, 95% very fine to medium, tr coarse, com loose Sandstone. 100% bri FLUOR in SST, TG 215U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to medium, tr coarse, com loose (max: nan) |
| Fluorescence | 100.0% coarse, com loose Sandstone. 100% bri |
| Total Gas | 215.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1990m: v pl brn,clr-trnsl,vf-med tr crs,tr slty lams,mod srt,sbang-sbrnd, mod sil cmt,mnr brn arg mtx,fri-mod hd,mnr disagg qtz grs,pr-fr vis por, fr-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 58.0 | 32 |
| RES_DEEP (ohm.m) | 27.31 | 32 |
| RES_SHALLOW (ohm.m) | 27.60 | 32 |
| **Δ Res (Deep − Shallow)** | **-0.29** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2000 m MD — Interval 1997.5 – 2002.5 m

**Sample Description (spreadsheet):** Sample 2000m: 10% Siltstone, 90% very fine to fine, mnr medium, com loose Sandstone. 100% bri FLUOR in SST, TG 202U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, mnr medium, com loose (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 202.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1990m: v pl brn,clr-trnsl,vf-med tr crs,tr slty lams,mod srt,sbang-sbrnd, mod sil cmt,mnr brn arg mtx,fri-mod hd,mnr disagg qtz grs,pr-fr vis por, fr-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 60.1 | 33 |
| RES_DEEP (ohm.m) | 26.79 | 33 |
| RES_SHALLOW (ohm.m) | 26.32 | 33 |
| **Δ Res (Deep − Shallow)** | **0.48** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2005 m MD — Interval 2002.5 – 2007.5 m

**Sample Description (spreadsheet):** Sample 2005m: 5% Siltstone, 95% very fine to fine, mnr medium Sandstone. 100% bri FLUOR in SST, TG 204U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, mnr medium (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 204.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1990m: v pl brn,clr-trnsl,vf-med tr crs,tr slty lams,mod srt,sbang-sbrnd, mod sil cmt,mnr brn arg mtx,fri-mod hd,mnr disagg qtz grs,pr-fr vis por, fr-gd inf por,fluor.
- **SILTSTONE** @ ~2020m: med dk gry-dk gry,aren, com vf sndy lams,tr carb spks,tr- loc com micmic,sbblky-sbfiss. SURVEY @ 2025.0m INC: 89.90° AZI: 85.91°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.6 | 33 |
| RES_DEEP (ohm.m) | 26.74 | 33 |
| RES_SHALLOW (ohm.m) | 26.04 | 33 |
| **Δ Res (Deep − Shallow)** | **0.71** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2010 m MD — Interval 2007.5 – 2012.5 m

**Sample Description (spreadsheet):** Sample 2010m: 5% Siltstone, 95% very fine to fine, tr medium-coarse Sandstone. 100% bri FLUOR in SST, TG 202U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, tr medium-coarse (max: nan) |
| Fluorescence | 100.0% medium-coarse Sandstone. 100% bri |
| Total Gas | 202.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2020m: med dk gry-dk gry,aren, com vf sndy lams,tr carb spks,tr- loc com micmic,sbblky-sbfiss. SURVEY @ 2025.0m INC: 89.90° AZI: 85.91°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.9 | 33 |
| RES_DEEP (ohm.m) | 27.08 | 33 |
| RES_SHALLOW (ohm.m) | 24.84 | 33 |
| **Δ Res (Deep − Shallow)** | **2.24** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2015 m MD — Interval 2012.5 – 2017.5 m

**Sample Description (spreadsheet):** Sample 2015m: 15% Siltstone, 85% very fine to fine, mnr medium-v coarse Sandstone. 100% bri FLUOR in SST, TG 196U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine, mnr medium-v coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 196.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2020m: med dk gry-dk gry,aren, com vf sndy lams,tr carb spks,tr- loc com micmic,sbblky-sbfiss. SURVEY @ 2025.0m INC: 89.90° AZI: 85.91°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.4 | 33 |
| RES_DEEP (ohm.m) | 25.30 | 33 |
| RES_SHALLOW (ohm.m) | 23.61 | 33 |
| **Δ Res (Deep − Shallow)** | **1.68** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2020 m MD — Interval 2017.5 – 2022.5 m

**Sample Description (spreadsheet):** Sample 2020m: 25% Siltstone, 75% very fine to medium, trace coarse-v coarse Sandstone. 100% bri FLUOR in SST, TG 197U

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | very fine to medium, trace coarse-v coarse (max: nan) |
| Fluorescence | 100.0% coarse-v coarse Sandstone. 100% bri |
| Total Gas | 197.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2020m: med dk gry-dk gry,aren, com vf sndy lams,tr carb spks,tr- loc com micmic,sbblky-sbfiss. SURVEY @ 2025.0m INC: 89.90° AZI: 85.91°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.0 | 32 |
| RES_DEEP (ohm.m) | 21.87 | 32 |
| RES_SHALLOW (ohm.m) | 20.89 | 32 |
| **Δ Res (Deep − Shallow)** | **0.98** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2025 m MD — Interval 2022.5 – 2027.5 m

**Sample Description (spreadsheet):** Sample 2025m: 20% Siltstone, 80% very fine to fine, mnr medium Sandstone. 100% bri FLUOR in SST, TG 200U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine, mnr medium (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 200.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2020m: med dk gry-dk gry,aren, com vf sndy lams,tr carb spks,tr- loc com micmic,sbblky-sbfiss. SURVEY @ 2025.0m INC: 89.90° AZI: 85.91°G
- **SANDSTONE** @ ~2040m: clr-trnsl,v pl brn,lt brnsh gry,vf-med,rr crs-v crs,tr-loc com slty lams,pr srt,sbang-sbrnd,wk-mod sil cmt, mnr-loc com brn-gry arg mtx,tr micmic, disagg,fri-mod hd aggs,fr-gd inf por,pr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.1 | 33 |
| RES_DEEP (ohm.m) | 19.91 | 33 |
| RES_SHALLOW (ohm.m) | 19.41 | 33 |
| **Δ Res (Deep − Shallow)** | **0.49** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2030 m MD — Interval 2027.5 – 2032.5 m

**Sample Description (spreadsheet):** Sample 2030m: 15% Siltstone, 85% very fine to medium, trace coarse to v coarse Sandstone. 100% bri FLUOR in SST, TG 205U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to medium, trace coarse to v coarse (max: nan) |
| Fluorescence | 100.0% coarse to v coarse Sandstone. 100% bri |
| Total Gas | 205.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2020m: med dk gry-dk gry,aren, com vf sndy lams,tr carb spks,tr- loc com micmic,sbblky-sbfiss. SURVEY @ 2025.0m INC: 89.90° AZI: 85.91°G
- **SANDSTONE** @ ~2040m: clr-trnsl,v pl brn,lt brnsh gry,vf-med,rr crs-v crs,tr-loc com slty lams,pr srt,sbang-sbrnd,wk-mod sil cmt, mnr-loc com brn-gry arg mtx,tr micmic, disagg,fri-mod hd aggs,fr-gd inf por,pr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.8 | 33 |
| RES_DEEP (ohm.m) | 19.58 | 33 |
| RES_SHALLOW (ohm.m) | 19.64 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.06** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2035 m MD — Interval 2032.5 – 2037.5 m

**Sample Description (spreadsheet):** Sample 2035m: 5% Siltstone, 95% very fine to medium, trace coarse Sandstone. 100% bri FLUOR in SST, TG 204U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Fluorescence | 100.0% coarse Sandstone. 100% bri |
| Total Gas | 204.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2020m: med dk gry-dk gry,aren, com vf sndy lams,tr carb spks,tr- loc com micmic,sbblky-sbfiss. SURVEY @ 2025.0m INC: 89.90° AZI: 85.91°G
- **SANDSTONE** @ ~2040m: clr-trnsl,v pl brn,lt brnsh gry,vf-med,rr crs-v crs,tr-loc com slty lams,pr srt,sbang-sbrnd,wk-mod sil cmt, mnr-loc com brn-gry arg mtx,tr micmic, disagg,fri-mod hd aggs,fr-gd inf por,pr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.8 | 33 |
| RES_DEEP (ohm.m) | 19.84 | 33 |
| RES_SHALLOW (ohm.m) | 20.31 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.47** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2040 m MD — Interval 2037.5 – 2042.5 m

**Sample Description (spreadsheet):** Sample 2040m: 5% Siltstone, 95% very fine to medium Sandstone. 100% bri FLUOR in SST, TG 167U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to medium (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 167.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2040m: clr-trnsl,v pl brn,lt brnsh gry,vf-med,rr crs-v crs,tr-loc com slty lams,pr srt,sbang-sbrnd,wk-mod sil cmt, mnr-loc com brn-gry arg mtx,tr micmic, disagg,fri-mod hd aggs,fr-gd inf por,pr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.8 | 33 |
| RES_DEEP (ohm.m) | 19.85 | 33 |
| RES_SHALLOW (ohm.m) | 20.13 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.27** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2045 m MD — Interval 2042.5 – 2047.5 m

**Sample Description (spreadsheet):** Sample 2045m: 15% Siltstone, 85% very fine to medium, rare coarse-v coarse Sandstone. 100% bri FLUOR in SST, TG 203U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to medium, rare coarse-v coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 203.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2040m: clr-trnsl,v pl brn,lt brnsh gry,vf-med,rr crs-v crs,tr-loc com slty lams,pr srt,sbang-sbrnd,wk-mod sil cmt, mnr-loc com brn-gry arg mtx,tr micmic, disagg,fri-mod hd aggs,fr-gd inf por,pr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.6 | 33 |
| RES_DEEP (ohm.m) | 20.76 | 33 |
| RES_SHALLOW (ohm.m) | 20.78 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.02** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2050 m MD — Interval 2047.5 – 2052.5 m

**Sample Description (spreadsheet):** Sample 2050m: 20% Siltstone, 80% very fine to medium, trace coarse-v coarse Sandstone. 100% bri FLUOR in SST, TG 192U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to medium, trace coarse-v coarse (max: nan) |
| Fluorescence | 100.0% coarse-v coarse Sandstone. 100% bri |
| Total Gas | 192.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2040m: clr-trnsl,v pl brn,lt brnsh gry,vf-med,rr crs-v crs,tr-loc com slty lams,pr srt,sbang-sbrnd,wk-mod sil cmt, mnr-loc com brn-gry arg mtx,tr micmic, disagg,fri-mod hd aggs,fr-gd inf por,pr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.2 | 32 |
| RES_DEEP (ohm.m) | 21.52 | 32 |
| RES_SHALLOW (ohm.m) | 21.28 | 32 |
| **Δ Res (Deep − Shallow)** | **0.24** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2055 m MD — Interval 2052.5 – 2057.5 m

**Sample Description (spreadsheet):** Sample 2055m: 15% Siltstone, 85% very fine to medium, trace coarse-v coarse Sandstone. 100% bri FLUOR in SST, TG 198U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to medium, trace coarse-v coarse (max: nan) |
| Fluorescence | 100.0% coarse-v coarse Sandstone. 100% bri |
| Total Gas | 198.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2040m: clr-trnsl,v pl brn,lt brnsh gry,vf-med,rr crs-v crs,tr-loc com slty lams,pr srt,sbang-sbrnd,wk-mod sil cmt, mnr-loc com brn-gry arg mtx,tr micmic, disagg,fri-mod hd aggs,fr-gd inf por,pr
- **SANDSTONE** @ ~2070m: lt brnsh gry,vf,g/t aren SLTST i/p,mnr slty lams,v wl srt,sbang- sbrnd,mod sil cmt,com gry-brn slty fri,mnr mod hd,v pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.4 | 33 |
| RES_DEEP (ohm.m) | 21.17 | 33 |
| RES_SHALLOW (ohm.m) | 20.55 | 33 |
| **Δ Res (Deep − Shallow)** | **0.61** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2060 m MD — Interval 2057.5 – 2062.5 m

**Sample Description (spreadsheet):** Sample 2060m: 10% Siltstone, 90% very fine to medium, trace coarse Sandstone. 100% bri-mod bri FLUOR in SST, TG 188U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Fluorescence | 100.0% coarse Sandstone. 100% bri-mod bri |
| Total Gas | 188.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2070m: lt brnsh gry,vf,g/t aren SLTST i/p,mnr slty lams,v wl srt,sbang- sbrnd,mod sil cmt,com gry-brn slty fri,mnr mod hd,v pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.7 | 33 |
| RES_DEEP (ohm.m) | 21.41 | 33 |
| RES_SHALLOW (ohm.m) | 20.90 | 33 |
| **Δ Res (Deep − Shallow)** | **0.52** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2065 m MD — Interval 2062.5 – 2067.5 m

**Sample Description (spreadsheet):** Sample 2065m: 15% Siltstone, 85% very fine, trace medium Sandstone. 90% bri-dull FLUOR in SST, TG 179U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine, trace medium (max: nan) |
| Fluorescence | 90.0% medium Sandstone. 90% bri-dull |
| Total Gas | 179.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2070m: lt brnsh gry,vf,g/t aren SLTST i/p,mnr slty lams,v wl srt,sbang- sbrnd,mod sil cmt,com gry-brn slty fri,mnr mod hd,v pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.7 | 33 |
| RES_DEEP (ohm.m) | 20.52 | 33 |
| RES_SHALLOW (ohm.m) | 20.15 | 33 |
| **Δ Res (Deep − Shallow)** | **0.37** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2070 m MD — Interval 2067.5 – 2072.5 m

**Sample Description (spreadsheet):** Sample 2070m: 10% Siltstone, 90% very fine Sandstone, 80% bri-dull FLUOR in SST, TG 182U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine (max: nan) |
| Fluorescence | 80.0% nan |
| Total Gas | 182.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2070m: lt brnsh gry,vf,g/t aren SLTST i/p,mnr slty lams,v wl srt,sbang- sbrnd,mod sil cmt,com gry-brn slty fri,mnr mod hd,v pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.2 | 33 |
| RES_DEEP (ohm.m) | 20.20 | 33 |
| RES_SHALLOW (ohm.m) | 20.01 | 33 |
| **Δ Res (Deep − Shallow)** | **0.19** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2075 m MD — Interval 2072.5 – 2077.5 m

**Sample Description (spreadsheet):** Sample 2075m: 5% Siltstone, 95% very fine Sandstone, 90% bri-dull FLUOR in SST, TG 183U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 183.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2070m: lt brnsh gry,vf,g/t aren SLTST i/p,mnr slty lams,v wl srt,sbang- sbrnd,mod sil cmt,com gry-brn slty fri,mnr mod hd,v pr vis por,fluor.
- **SANDSTONE** @ ~2090m: lt brnsh gry,lt gry,clr,trnsl, vf-f,g/t aren SLTST i/p,tr slty lams,wl srt,sbang-sbrnd,mod sil cmt,com-loc abdt gry-brn slty mtx,fri-mod hd,mnr disagg f qtz grs,v pr vis por,fr inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.6 | 32 |
| RES_DEEP (ohm.m) | 19.18 | 32 |
| RES_SHALLOW (ohm.m) | 18.69 | 32 |
| **Δ Res (Deep − Shallow)** | **0.49** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2080 m MD — Interval 2077.5 – 2082.5 m

**Sample Description (spreadsheet):** Sample 2080m: 10% Siltstone, 90% very fine Sandstone, 90% bri-dull FLUOR in SST, TG 184U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 184.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2070m: lt brnsh gry,vf,g/t aren SLTST i/p,mnr slty lams,v wl srt,sbang- sbrnd,mod sil cmt,com gry-brn slty fri,mnr mod hd,v pr vis por,fluor.
- **SANDSTONE** @ ~2090m: lt brnsh gry,lt gry,clr,trnsl, vf-f,g/t aren SLTST i/p,tr slty lams,wl srt,sbang-sbrnd,mod sil cmt,com-loc abdt gry-brn slty mtx,fri-mod hd,mnr disagg f qtz grs,v pr vis por,fr inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.7 | 33 |
| RES_DEEP (ohm.m) | 19.07 | 33 |
| RES_SHALLOW (ohm.m) | 18.25 | 33 |
| **Δ Res (Deep − Shallow)** | **0.82** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2085 m MD — Interval 2082.5 – 2087.5 m

**Sample Description (spreadsheet):** Sample 2085m: 5% Siltstone, 95% very fine Sandstone, 90% bri-dull FLUOR in SST, TG 186U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 186.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2070m: lt brnsh gry,vf,g/t aren SLTST i/p,mnr slty lams,v wl srt,sbang- sbrnd,mod sil cmt,com gry-brn slty fri,mnr mod hd,v pr vis por,fluor.
- **SANDSTONE** @ ~2090m: lt brnsh gry,lt gry,clr,trnsl, vf-f,g/t aren SLTST i/p,tr slty lams,wl srt,sbang-sbrnd,mod sil cmt,com-loc abdt gry-brn slty mtx,fri-mod hd,mnr disagg f qtz grs,v pr vis por,fr inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.8 | 33 |
| RES_DEEP (ohm.m) | 18.84 | 33 |
| RES_SHALLOW (ohm.m) | 17.93 | 33 |
| **Δ Res (Deep − Shallow)** | **0.91** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2090 m MD — Interval 2087.5 – 2092.5 m

**Sample Description (spreadsheet):** Sample 2090m: 5% Siltstone, 95% very fine to fine Sandstone, 95% bri-dull FLUOR in SST, TG 191U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 95.0% nan |
| Total Gas | 191.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2090m: lt brnsh gry,lt gry,clr,trnsl, vf-f,g/t aren SLTST i/p,tr slty lams,wl srt,sbang-sbrnd,mod sil cmt,com-loc abdt gry-brn slty mtx,fri-mod hd,mnr disagg f qtz grs,v pr vis por,fr inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.8 | 33 |
| RES_DEEP (ohm.m) | 19.11 | 33 |
| RES_SHALLOW (ohm.m) | 18.48 | 33 |
| **Δ Res (Deep − Shallow)** | **0.63** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2095 m MD — Interval 2092.5 – 2097.5 m

**Sample Description (spreadsheet):** Sample 2095m: 5% Siltstone, 95% very fine to fine Sandstone, 100% mod bri FLUOR in SST, TG 190U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 190.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2090m: lt brnsh gry,lt gry,clr,trnsl, vf-f,g/t aren SLTST i/p,tr slty lams,wl srt,sbang-sbrnd,mod sil cmt,com-loc abdt gry-brn slty mtx,fri-mod hd,mnr disagg f qtz grs,v pr vis por,fr inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.8 | 33 |
| RES_DEEP (ohm.m) | 17.98 | 33 |
| RES_SHALLOW (ohm.m) | 17.51 | 33 |
| **Δ Res (Deep − Shallow)** | **0.46** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2100 m MD — Interval 2097.5 – 2102.5 m

**Sample Description (spreadsheet):** Sample 2100m: 5% Siltstone, 95% very fine to fine Sandstone, 100% mod bri-dull FLUOR in SST, TG 182U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 182.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2090m: lt brnsh gry,lt gry,clr,trnsl, vf-f,g/t aren SLTST i/p,tr slty lams,wl srt,sbang-sbrnd,mod sil cmt,com-loc abdt gry-brn slty mtx,fri-mod hd,mnr disagg f qtz grs,v pr vis por,fr inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.5 | 32 |
| RES_DEEP (ohm.m) | 18.65 | 32 |
| RES_SHALLOW (ohm.m) | 18.29 | 32 |
| **Δ Res (Deep − Shallow)** | **0.36** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2105 m MD — Interval 2102.5 – 2107.5 m

**Sample Description (spreadsheet):** Sample 2105m: 5% Siltstone, 95% very fine Sandstone, 100% dull-mod bri FLUOR in SST, TG 183U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 183.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2090m: lt brnsh gry,lt gry,clr,trnsl, vf-f,g/t aren SLTST i/p,tr slty lams,wl srt,sbang-sbrnd,mod sil cmt,com-loc abdt gry-brn slty mtx,fri-mod hd,mnr disagg f qtz grs,v pr vis por,fr inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.3 | 33 |
| RES_DEEP (ohm.m) | 18.19 | 33 |
| RES_SHALLOW (ohm.m) | 17.58 | 33 |
| **Δ Res (Deep − Shallow)** | **0.61** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2110 m MD — Interval 2107.5 – 2112.5 m

**Sample Description (spreadsheet):** Sample 2110m: 5% Siltstone, 95% very fine Sandstone, 90% mod bri-dull FLUOR in SST, TG 176U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 176.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.8 | 33 |
| RES_DEEP (ohm.m) | 18.33 | 33 |
| RES_SHALLOW (ohm.m) | 17.86 | 33 |
| **Δ Res (Deep − Shallow)** | **0.47** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2115 m MD — Interval 2112.5 – 2117.5 m

**Sample Description (spreadsheet):** Sample 2115m: 5% Siltstone, 95% very fine to fine Sandstone, 90% dull to mod bri FLUOR in SST, TG 173U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 173.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.4 | 33 |
| RES_DEEP (ohm.m) | 18.79 | 33 |
| RES_SHALLOW (ohm.m) | 18.26 | 33 |
| **Δ Res (Deep − Shallow)** | **0.53** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2120 m MD — Interval 2117.5 – 2122.5 m

**Sample Description (spreadsheet):** Sample 2120m: Trace Siltstone, 100% very fine to fine Sandstone, 100% mod bri to dull FLUOR in SST, TG 184U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% Siltstone, 100% very fine to fine Sandstone, 100% mod bri to dull |
| Total Gas | 184.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.2 | 33 |
| RES_DEEP (ohm.m) | 17.93 | 33 |
| RES_SHALLOW (ohm.m) | 17.33 | 33 |
| **Δ Res (Deep − Shallow)** | **0.60** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2125 m MD — Interval 2122.5 – 2127.5 m

**Sample Description (spreadsheet):** Sample 2125m: Trace Siltstone, 100% very fine to fine Sandstone, 100% mod bri FLUOR in SST, TG 181U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% Siltstone, 100% very fine to fine Sandstone, 100% mod bri |
| Total Gas | 181.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2140m: pl brn,pl gry,vf,v wl srt,sbang-sbrnd,mod wk sil cmt,abdt pl gry slty/arg mtx,tr carb spks,tr slty lams,fri-mod hd, pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.9 | 32 |
| RES_DEEP (ohm.m) | 17.54 | 32 |
| RES_SHALLOW (ohm.m) | 16.93 | 32 |
| **Δ Res (Deep − Shallow)** | **0.60** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2130 m MD — Interval 2127.5 – 2132.5 m

**Sample Description (spreadsheet):** Sample 2130m: 5% Siltstone, 95% very fine to fine Sandstone, 100% mod bri FLUOR in SST, TG 177U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 177.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2140m: pl brn,pl gry,vf,v wl srt,sbang-sbrnd,mod wk sil cmt,abdt pl gry slty/arg mtx,tr carb spks,tr slty lams,fri-mod hd, pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.2 | 33 |
| RES_DEEP (ohm.m) | 17.56 | 33 |
| RES_SHALLOW (ohm.m) | 17.04 | 33 |
| **Δ Res (Deep − Shallow)** | **0.52** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2135 m MD — Interval 2132.5 – 2137.5 m

**Sample Description (spreadsheet):** Sample 2135m: 100% very fine to fine Sandstone, 100% mod bri FLUOR in SST, TG 126U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 126.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2140m: pl brn,pl gry,vf,v wl srt,sbang-sbrnd,mod wk sil cmt,abdt pl gry slty/arg mtx,tr carb spks,tr slty lams,fri-mod hd, pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.9 | 33 |
| RES_DEEP (ohm.m) | 18.48 | 33 |
| RES_SHALLOW (ohm.m) | 17.92 | 33 |
| **Δ Res (Deep − Shallow)** | **0.57** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2140 m MD — Interval 2137.5 – 2142.5 m

**Sample Description (spreadsheet):** Sample 2140m: 100% very fine to fine Sandstone, 100% mod bri FLUOR in SST, TG 144U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 144.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2140m: pl brn,pl gry,vf,v wl srt,sbang-sbrnd,mod wk sil cmt,abdt pl gry slty/arg mtx,tr carb spks,tr slty lams,fri-mod hd, pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.2 | 33 |
| RES_DEEP (ohm.m) | 18.43 | 33 |
| RES_SHALLOW (ohm.m) | 17.86 | 33 |
| **Δ Res (Deep − Shallow)** | **0.57** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2145 m MD — Interval 2142.5 – 2147.5 m

**Sample Description (spreadsheet):** Sample 2145m: 100% very fine to fine Sandstone, 100% mod bri FLUOR in SST, TG 140U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 140.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2140m: pl brn,pl gry,vf,v wl srt,sbang-sbrnd,mod wk sil cmt,abdt pl gry slty/arg mtx,tr carb spks,tr slty lams,fri-mod hd, pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.9 | 33 |
| RES_DEEP (ohm.m) | 18.29 | 33 |
| RES_SHALLOW (ohm.m) | 18.00 | 33 |
| **Δ Res (Deep − Shallow)** | **0.28** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2150 m MD — Interval 2147.5 – 2152.5 m

**Sample Description (spreadsheet):** Sample 2150m: trace Siltstone100% very fine Sandstone, 100% mod bri FLUOR in SST, TG 94U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine (max: nan) |
| Fluorescence | 100.0% Siltstone100% very fine Sandstone, 100% mod bri |
| Total Gas | 94.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2140m: pl brn,pl gry,vf,v wl srt,sbang-sbrnd,mod wk sil cmt,abdt pl gry slty/arg mtx,tr carb spks,tr slty lams,fri-mod hd, pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.8 | 33 |
| RES_DEEP (ohm.m) | 18.70 | 33 |
| RES_SHALLOW (ohm.m) | 18.19 | 33 |
| **Δ Res (Deep − Shallow)** | **0.51** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2155 m MD — Interval 2152.5 – 2157.5 m

**Sample Description (spreadsheet):** Sample 2155m: 5% Siltstone. 95% very fine Sandstone, 100% mod bri FLUOR in SST, TG 115U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 115.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2140m: pl brn,pl gry,vf,v wl srt,sbang-sbrnd,mod wk sil cmt,abdt pl gry slty/arg mtx,tr carb spks,tr slty lams,fri-mod hd, pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.2 | 32 |
| RES_DEEP (ohm.m) | 20.34 | 32 |
| RES_SHALLOW (ohm.m) | 19.72 | 32 |
| **Δ Res (Deep − Shallow)** | **0.62** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2160 m MD — Interval 2157.5 – 2162.5 m

**Sample Description (spreadsheet):** Sample 2160m: trace Siltstone. 100% very fine Sandstone, 90% mod bri to pale FLUOR in SST, TG 156U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine (max: nan) |
| Fluorescence | 90.0% Siltstone. 100% very fine Sandstone, 90% mod bri to pale |
| Total Gas | 156.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.0 | 33 |
| RES_DEEP (ohm.m) | 20.59 | 33 |
| RES_SHALLOW (ohm.m) | 20.07 | 33 |
| **Δ Res (Deep − Shallow)** | **0.53** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2165 m MD — Interval 2162.5 – 2167.5 m

**Sample Description (spreadsheet):** Sample 2165m: 100% very fine to fine Sandstone, 90% bri FLUOR in SST, TG 137U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 137.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.1 | 33 |
| RES_DEEP (ohm.m) | 19.09 | 33 |
| RES_SHALLOW (ohm.m) | 19.23 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.14** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2170 m MD — Interval 2167.5 – 2172.5 m

**Sample Description (spreadsheet):** Sample 2170m: 100% very fine to fine, minor coarse Sandstone, 100% bri FLUOR in SST, TG 104U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, minor coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 104.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.3 | 33 |
| RES_DEEP (ohm.m) | 17.54 | 33 |
| RES_SHALLOW (ohm.m) | 17.73 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.20** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2175 m MD — Interval 2172.5 – 2177.5 m

**Sample Description (spreadsheet):** Sample 2175m: 100% very fine to fine, mnr coarse Sandstone, 100% bri FLUOR in SST, TG 108U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, mnr coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 108.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.6 | 33 |
| RES_DEEP (ohm.m) | 17.01 | 33 |
| RES_SHALLOW (ohm.m) | 16.37 | 33 |
| **Δ Res (Deep − Shallow)** | **0.64** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2180 m MD — Interval 2177.5 – 2182.5 m

**Sample Description (spreadsheet):** Sample 2180m: 5% siltstone. 95% very fine to fine, mnr coarse Sandstone, 100% bri FLUOR in SST, TG 76U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, mnr coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 76.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.2 | 32 |
| RES_DEEP (ohm.m) | 17.48 | 32 |
| RES_SHALLOW (ohm.m) | 16.84 | 32 |
| **Δ Res (Deep − Shallow)** | **0.64** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2185 m MD — Interval 2182.5 – 2187.5 m

**Sample Description (spreadsheet):** Sample 2185m: 5% siltstone. 95% very fine to fine, occasional medium to coarse Sandstone, 100% bri FLUOR in SST, TG 140U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, occasional medium to coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 140.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.1 | 33 |
| RES_DEEP (ohm.m) | 18.32 | 33 |
| RES_SHALLOW (ohm.m) | 17.63 | 33 |
| **Δ Res (Deep − Shallow)** | **0.69** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2190 m MD — Interval 2187.5 – 2192.5 m

**Sample Description (spreadsheet):** Sample 2190m: 10% siltstone. 90% very fine to fine, occasional medium to coarse sandstone. 100% bright FLUOR in SST. TG 195U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, occasional medium to coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 195.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.3 | 33 |
| RES_DEEP (ohm.m) | 18.16 | 33 |
| RES_SHALLOW (ohm.m) | 17.04 | 33 |
| **Δ Res (Deep − Shallow)** | **1.12** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2195 m MD — Interval 2192.5 – 2197.5 m

**Sample Description (spreadsheet):** Sample 2195m: 100% fine to medium, occasional coarse sandstone. 100% bright FLUOR in SST. TG 242U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | fine to medium, occasional coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 242.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2210m: clr-trnsl,vf-f,com med -crs,mod pr srt,sbang-sbrnd,mod strg sil cmt,com pl gry-off wh arg mtx,com qtz ovghs,mnr slty lams,com lse qtz grs,mod hd aggs,gd inf por,fr vis

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.0 | 33 |
| RES_DEEP (ohm.m) | 18.69 | 33 |
| RES_SHALLOW (ohm.m) | 17.69 | 33 |
| **Δ Res (Deep − Shallow)** | **1.01** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2200 m MD — Interval 2197.5 – 2202.5 m

**Sample Description (spreadsheet):** Sample 2200m: 100% very fine to fine, occasional medium to coarse sandstone. 100% bright FLUOR in SST. TG 240U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, occasional medium to coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 240.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2210m: clr-trnsl,vf-f,com med -crs,mod pr srt,sbang-sbrnd,mod strg sil cmt,com pl gry-off wh arg mtx,com qtz ovghs,mnr slty lams,com lse qtz grs,mod hd aggs,gd inf por,fr vis

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.4 | 33 |
| RES_DEEP (ohm.m) | 17.47 | 33 |
| RES_SHALLOW (ohm.m) | 16.82 | 33 |
| **Δ Res (Deep − Shallow)** | **0.65** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2205 m MD — Interval 2202.5 – 2207.5 m

**Sample Description (spreadsheet):** Sample 2205m: 100% very fine to fine, occasional medium to coarse sandstone. 100% bright FLUOR in SST. TG 230U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, occasional medium to coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 230.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2210m: clr-trnsl,vf-f,com med -crs,mod pr srt,sbang-sbrnd,mod strg sil cmt,com pl gry-off wh arg mtx,com qtz ovghs,mnr slty lams,com lse qtz grs,mod hd aggs,gd inf por,fr vis

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.9 | 32 |
| RES_DEEP (ohm.m) | 18.39 | 32 |
| RES_SHALLOW (ohm.m) | 18.13 | 32 |
| **Δ Res (Deep − Shallow)** | **0.26** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2210 m MD — Interval 2207.5 – 2212.5 m

**Sample Description (spreadsheet):** Sample 2210m: 5% siltstone. 95% very fine to fine, minor medium to coarse sandstone. 100% bright FLUOR in SST. TG 200U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, minor medium to coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 200.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2210m: clr-trnsl,vf-f,com med -crs,mod pr srt,sbang-sbrnd,mod strg sil cmt,com pl gry-off wh arg mtx,com qtz ovghs,mnr slty lams,com lse qtz grs,mod hd aggs,gd inf por,fr vis

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.2 | 33 |
| RES_DEEP (ohm.m) | 17.16 | 33 |
| RES_SHALLOW (ohm.m) | 17.08 | 33 |
| **Δ Res (Deep − Shallow)** | **0.08** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2215 m MD — Interval 2212.5 – 2217.5 m

**Sample Description (spreadsheet):** Sample 2215m: 5% siltstone. 95% very fine to fine, common medium to coarse sandstone. 100% bright FLUOR in SST. TG 156U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, common medium to coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 156.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2210m: clr-trnsl,vf-f,com med -crs,mod pr srt,sbang-sbrnd,mod strg sil cmt,com pl gry-off wh arg mtx,com qtz ovghs,mnr slty lams,com lse qtz grs,mod hd aggs,gd inf por,fr vis

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.3 | 33 |
| RES_DEEP (ohm.m) | 17.47 | 33 |
| RES_SHALLOW (ohm.m) | 17.49 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.02** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2220 m MD — Interval 2217.5 – 2222.5 m

**Sample Description (spreadsheet):** Sample 2220m: 100% very fine to fine, common medium to coarse sandstone. 100% bright FLUOR in SST. TG 217U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, common medium to coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 217.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2210m: clr-trnsl,vf-f,com med -crs,mod pr srt,sbang-sbrnd,mod strg sil cmt,com pl gry-off wh arg mtx,com qtz ovghs,mnr slty lams,com lse qtz grs,mod hd aggs,gd inf por,fr vis

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.9 | 33 |
| RES_DEEP (ohm.m) | 17.27 | 33 |
| RES_SHALLOW (ohm.m) | 17.22 | 33 |
| **Δ Res (Deep − Shallow)** | **0.04** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2225 m MD — Interval 2222.5 – 2227.5 m

**Sample Description (spreadsheet):** Sample 2225m: 100% very fine to fine, occasional medium to coarse sandstone. 100% bright FLUOR in SST. TG 170U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, occasional medium to coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 170.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2210m: clr-trnsl,vf-f,com med -crs,mod pr srt,sbang-sbrnd,mod strg sil cmt,com pl gry-off wh arg mtx,com qtz ovghs,mnr slty lams,com lse qtz grs,mod hd aggs,gd inf por,fr vis

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.8 | 33 |
| RES_DEEP (ohm.m) | 17.23 | 33 |
| RES_SHALLOW (ohm.m) | 17.14 | 33 |
| **Δ Res (Deep − Shallow)** | **0.09** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2230 m MD — Interval 2227.5 – 2232.5 m

**Sample Description (spreadsheet):** Sample 2230m: 100% very fine to fine, occasional medium to coarse sandstone. 100% bright FLUOR in SST. TG 270U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, occasional medium to coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 270.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.8 | 32 |
| RES_DEEP (ohm.m) | 16.36 | 32 |
| RES_SHALLOW (ohm.m) | 16.50 | 32 |
| **Δ Res (Deep − Shallow)** | **-0.14** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2235 m MD — Interval 2232.5 – 2237.5 m

**Sample Description (spreadsheet):** Sample 2235m: 100% very fine to fine, occasional medium to coarse sandstone. 100% bright FLUOR in SST. TG 270U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, occasional medium to coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 270.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.2 | 33 |
| RES_DEEP (ohm.m) | 17.68 | 33 |
| RES_SHALLOW (ohm.m) | 17.90 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.22** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2240 m MD — Interval 2237.5 – 2242.5 m

**Sample Description (spreadsheet):** Sample 2240m: 100% very fine to fine, occasional medium to coarse sandstone. 100% bright FLUOR in SST. TG 282U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, occasional medium to coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 282.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.2 | 33 |
| RES_DEEP (ohm.m) | 18.51 | 33 |
| RES_SHALLOW (ohm.m) | 18.86 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.34** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2245 m MD — Interval 2242.5 – 2247.5 m

**Sample Description (spreadsheet):** Sample 2245m: 10% siltstone. 90% very fine to fine, occasional medium to coarse sandstone. 100% bright FLUOR in SST. TG 258U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, occasional medium to coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 258.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.1 | 33 |
| RES_DEEP (ohm.m) | 18.02 | 33 |
| RES_SHALLOW (ohm.m) | 18.40 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.38** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2250 m MD — Interval 2247.5 – 2252.5 m

**Sample Description (spreadsheet):** Sample 2250m: 10% siltstone. 90% very fine to fine, occasional medium to coarse sandstone. 100% bright FLUOR in SST. TG 230U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, occasional medium to coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 230.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.1 | 33 |
| RES_DEEP (ohm.m) | 16.80 | 33 |
| RES_SHALLOW (ohm.m) | 17.07 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.27** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2255 m MD — Interval 2252.5 – 2257.5 m

**Sample Description (spreadsheet):** Sample 2255m: 10% siltstone. 90% very fine to fine, occasional medium to coarse sandstone. 100% bright FLUOR in SST. TG 200U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, occasional medium to coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 200.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.8 | 32 |
| RES_DEEP (ohm.m) | 16.72 | 32 |
| RES_SHALLOW (ohm.m) | 16.73 | 32 |
| **Δ Res (Deep − Shallow)** | **-0.02** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2260 m MD — Interval 2257.5 – 2262.5 m

**Sample Description (spreadsheet):** Sample 2260m: 5% siltstone. 95% fine to medium, occasional coarse sandstone. 100% bright FLUOR in SST. TG 260U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | fine to medium, occasional coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 260.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.1 | 33 |
| RES_DEEP (ohm.m) | 17.20 | 33 |
| RES_SHALLOW (ohm.m) | 17.19 | 33 |
| **Δ Res (Deep − Shallow)** | **0.01** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2265 m MD — Interval 2262.5 – 2267.5 m

**Sample Description (spreadsheet):** Sample 2265m: 5% siltstone. 95% fine to medium, occasional coarse sandstone. 100% bright FLUOR in SST. TG 220U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | fine to medium, occasional coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 220.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2280m: clr-trnsl,pl gry,vf-f,mod pr srt,sbang-sbrnd,wk sil cmt,com lt gry arg mtx,tr carb spks,pred lse qtz grs,mod hd aggs,gd inf por,pr vis por, fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.7 | 33 |
| RES_DEEP (ohm.m) | 17.51 | 33 |
| RES_SHALLOW (ohm.m) | 17.78 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.27** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2270 m MD — Interval 2267.5 – 2272.5 m

**Sample Description (spreadsheet):** Sample 2270m: 100% fine to medium, occasional coarse sandstone. 100% bright FLUOR in SST. TG 265U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | fine to medium, occasional coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 265.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2280m: clr-trnsl,pl gry,vf-f,mod pr srt,sbang-sbrnd,wk sil cmt,com lt gry arg mtx,tr carb spks,pred lse qtz grs,mod hd aggs,gd inf por,pr vis por, fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.0 | 33 |
| RES_DEEP (ohm.m) | 17.88 | 33 |
| RES_SHALLOW (ohm.m) | 18.26 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.38** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2275 m MD — Interval 2272.5 – 2277.5 m

**Sample Description (spreadsheet):** Sample 2275m: 100% very fine to fine, occasional medium sandstone. 100% bright FLUOR in SST. TG 273U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, occasional medium (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 273.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2280m: clr-trnsl,pl gry,vf-f,mod pr srt,sbang-sbrnd,wk sil cmt,com lt gry arg mtx,tr carb spks,pred lse qtz grs,mod hd aggs,gd inf por,pr vis por, fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.1 | 33 |
| RES_DEEP (ohm.m) | 18.77 | 33 |
| RES_SHALLOW (ohm.m) | 18.96 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.18** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2280 m MD — Interval 2277.5 – 2282.5 m

**Sample Description (spreadsheet):** Sample 2280m: 100% very fine to fine, occasional medium sandstone. 100% bright FLUOR in SST. TG 281U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, occasional medium (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 281.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2280m: clr-trnsl,pl gry,vf-f,mod pr srt,sbang-sbrnd,wk sil cmt,com lt gry arg mtx,tr carb spks,pred lse qtz grs,mod hd aggs,gd inf por,pr vis por, fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.0 | 33 |
| RES_DEEP (ohm.m) | 18.66 | 33 |
| RES_SHALLOW (ohm.m) | 18.77 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.11** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2285 m MD — Interval 2282.5 – 2287.5 m

**Sample Description (spreadsheet):** Sample 2285m: 100% very fine to fine, sandstone. 100% bright FLUOR in SST. TG 235U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 235.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2280m: clr-trnsl,pl gry,vf-f,mod pr srt,sbang-sbrnd,wk sil cmt,com lt gry arg mtx,tr carb spks,pred lse qtz grs,mod hd aggs,gd inf por,pr vis por, fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.6 | 32 |
| RES_DEEP (ohm.m) | 18.49 | 32 |
| RES_SHALLOW (ohm.m) | 18.61 | 32 |
| **Δ Res (Deep − Shallow)** | **-0.12** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2290 m MD — Interval 2287.5 – 2292.5 m

**Sample Description (spreadsheet):** Sample 2290m: 100% very fine to fine, sandstone. 100% bright FLUOR in SST. TG 258U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 258.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2280m: clr-trnsl,pl gry,vf-f,mod pr srt,sbang-sbrnd,wk sil cmt,com lt gry arg mtx,tr carb spks,pred lse qtz grs,mod hd aggs,gd inf por,pr vis por, fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.1 | 33 |
| RES_DEEP (ohm.m) | 18.94 | 33 |
| RES_SHALLOW (ohm.m) | 19.14 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.19** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2295 m MD — Interval 2292.5 – 2297.5 m

**Sample Description (spreadsheet):** Sample 2295m: 5% siltstone, 95% very fine to fine, sandstone. 100% bright FLUOR in SST. TG 247U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 247.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2280m: clr-trnsl,pl gry,vf-f,mod pr srt,sbang-sbrnd,wk sil cmt,com lt gry arg mtx,tr carb spks,pred lse qtz grs,mod hd aggs,gd inf por,pr vis por, fluor.
- **SILTSTONE** @ ~2310m: med dk gry,dk gry,aren, occ sndy lams,tr carb spks,sft-frm sbblky-blky. 63 / 6 / 5 / 10 / 16 286 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.3 | 33 |
| RES_DEEP (ohm.m) | 19.17 | 33 |
| RES_SHALLOW (ohm.m) | 19.79 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.62** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2300 m MD — Interval 2297.5 – 2302.5 m

**Sample Description (spreadsheet):** Sample 2300m: 5% siltstone, 95% very fine to fine, occasional medium to coarse sandstone. 100% bright FLUOR in SST. TG 253U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, occasional medium to coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 253.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2310m: med dk gry,dk gry,aren, occ sndy lams,tr carb spks,sft-frm sbblky-blky. 63 / 6 / 5 / 10 / 16 286 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.3 | 33 |
| RES_DEEP (ohm.m) | 18.80 | 33 |
| RES_SHALLOW (ohm.m) | 18.91 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.10** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2305 m MD — Interval 2302.5 – 2307.5 m

**Sample Description (spreadsheet):** Sample 2305m: 5% siltstone, 95% very fine to fine, occasional medium to coarse sandstone. 100% bright FLUOR in SST. TG 235U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, occasional medium to coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 235.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2310m: med dk gry,dk gry,aren, occ sndy lams,tr carb spks,sft-frm sbblky-blky. 63 / 6 / 5 / 10 / 16 286 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.7 | 33 |
| RES_DEEP (ohm.m) | 19.82 | 33 |
| RES_SHALLOW (ohm.m) | 19.77 | 33 |
| **Δ Res (Deep − Shallow)** | **0.05** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2310 m MD — Interval 2307.5 – 2312.5 m

**Sample Description (spreadsheet):** Sample 2310m: 5% siltstone, 95% very fine to fine, occasional medium to coarse sandstone. 100% bright FLUOR in SST. TG 273U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, occasional medium to coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 273.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2310m: med dk gry,dk gry,aren, occ sndy lams,tr carb spks,sft-frm sbblky-blky. 63 / 6 / 5 / 10 / 16 286 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.9 | 32 |
| RES_DEEP (ohm.m) | 20.11 | 32 |
| RES_SHALLOW (ohm.m) | 20.00 | 32 |
| **Δ Res (Deep − Shallow)** | **0.11** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2315 m MD — Interval 2312.5 – 2317.5 m

**Sample Description (spreadsheet):** Sample 2315m: 5% siltstone, 95% very fine to fine, occasional medium to coarse sandstone. 100% bright FLUOR in SST. TG 250U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, occasional medium to coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 250.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2310m: med dk gry,dk gry,aren, occ sndy lams,tr carb spks,sft-frm sbblky-blky. 63 / 6 / 5 / 10 / 16 286 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.2 | 33 |
| RES_DEEP (ohm.m) | 18.92 | 33 |
| RES_SHALLOW (ohm.m) | 18.74 | 33 |
| **Δ Res (Deep − Shallow)** | **0.18** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2320 m MD — Interval 2317.5 – 2322.5 m

**Sample Description (spreadsheet):** Sample 2320m: 100% very fine to fine, occasional medium to coarse sandstone. 90% bright FLUOR in SST. TG 253U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, occasional medium to coarse (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 253.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2310m: med dk gry,dk gry,aren, occ sndy lams,tr carb spks,sft-frm sbblky-blky. 63 / 6 / 5 / 10 / 16 286 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.1 | 33 |
| RES_DEEP (ohm.m) | 19.54 | 33 |
| RES_SHALLOW (ohm.m) | 18.93 | 33 |
| **Δ Res (Deep − Shallow)** | **0.61** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2325 m MD — Interval 2322.5 – 2327.5 m

**Sample Description (spreadsheet):** Sample 2325m: 5% siltstone 95% very fine to fine, occasional medium to coarse sandstone. 75% bright FLUOR in SST. TG 240U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, occasional medium to coarse (max: nan) |
| Fluorescence | 75.0% nan |
| Total Gas | 240.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2310m: med dk gry,dk gry,aren, occ sndy lams,tr carb spks,sft-frm sbblky-blky. 63 / 6 / 5 / 10 / 16 286 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.5 | 33 |
| RES_DEEP (ohm.m) | 21.60 | 33 |
| RES_SHALLOW (ohm.m) | 20.75 | 33 |
| **Δ Res (Deep − Shallow)** | **0.85** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2330 m MD — Interval 2327.5 – 2332.5 m

**Sample Description (spreadsheet):** Sample 2330m: 10% siltstone, 90% very fine to fine sandstone. 75% mod bright FLUOR in SST. TG 251U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 75.0% nan |
| Total Gas | 251.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.9 | 33 |
| RES_DEEP (ohm.m) | 24.90 | 33 |
| RES_SHALLOW (ohm.m) | 24.04 | 33 |
| **Δ Res (Deep − Shallow)** | **0.86** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2335 m MD — Interval 2332.5 – 2337.5 m

**Sample Description (spreadsheet):** Sample 2335m: 5% siltstone, 95% very fine to fine, trace medium sandstone. 80% mod bright to bright FLUOR in SST. TG 270U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, trace medium (max: nan) |
| Fluorescence | 80.0% medium sandstone. 80% mod bright to bright |
| Total Gas | 270.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.1 | 32 |
| RES_DEEP (ohm.m) | 24.77 | 32 |
| RES_SHALLOW (ohm.m) | 24.31 | 32 |
| **Δ Res (Deep − Shallow)** | **0.45** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2340 m MD — Interval 2337.5 – 2342.5 m

**Sample Description (spreadsheet):** Sample 2340m: 10% siltstone, 90% very fine to fine, minor medium sandstone. 100% mod bright to bright FLUOR in SST. TG 282U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, minor medium (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 282.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.2 | 33 |
| RES_DEEP (ohm.m) | 23.22 | 33 |
| RES_SHALLOW (ohm.m) | 22.86 | 33 |
| **Δ Res (Deep − Shallow)** | **0.37** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2345 m MD — Interval 2342.5 – 2347.5 m

**Sample Description (spreadsheet):** Sample 2345m: 5% siltstone, 95% very fine to fine, trace medium sandstone. 100% mod bright to bright FLUOR in SST. TG 270U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, trace medium (max: nan) |
| Fluorescence | 100.0% medium sandstone. 100% mod bright to bright |
| Total Gas | 270.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.2 | 33 |
| RES_DEEP (ohm.m) | 23.78 | 33 |
| RES_SHALLOW (ohm.m) | 22.99 | 33 |
| **Δ Res (Deep − Shallow)** | **0.78** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2350 m MD — Interval 2347.5 – 2352.5 m

**Sample Description (spreadsheet):** Sample 2350m: 15% siltstone, 85% very fine to fine, trace medium sandstone. 100% mod bright to bright FLUOR in SST. TG 264U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine, trace medium (max: nan) |
| Fluorescence | 100.0% medium sandstone. 100% mod bright to bright |
| Total Gas | 264.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.2 | 33 |
| RES_DEEP (ohm.m) | 20.98 | 33 |
| RES_SHALLOW (ohm.m) | 20.10 | 33 |
| **Δ Res (Deep − Shallow)** | **0.88** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2355 m MD — Interval 2352.5 – 2357.5 m

**Sample Description (spreadsheet):** Sample 2355m: 15% siltstone, 85% very fine to fine, trace medium sandstone. 100% bright to mod bright FLUOR in SST. TG 285U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine, trace medium (max: nan) |
| Fluorescence | 100.0% medium sandstone. 100% bright to mod bright |
| Total Gas | 285.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2370m: lt-med gry brn,clr-trnsl, vf-f,g/t aren SLTST i/p,com intrlams w/ SLTST,wl srt,sbang-sbrnd,mod-wk sil cmt,mnr gry-brn arg mtx,fri,mnr mod hd aggs,mnr disagg qtz grs,pr vis por,fr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.3 | 33 |
| RES_DEEP (ohm.m) | 18.23 | 33 |
| RES_SHALLOW (ohm.m) | 17.91 | 33 |
| **Δ Res (Deep − Shallow)** | **0.31** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2360 m MD — Interval 2357.5 – 2362.5 m

**Sample Description (spreadsheet):** Sample 2360m: 15% siltstone, 85% very fine to fine, trace medium sandstone. 100% mod bright to bright FLUOR in SST. TG 268U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine, trace medium (max: nan) |
| Fluorescence | 100.0% medium sandstone. 100% mod bright to bright |
| Total Gas | 268.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2370m: lt-med gry brn,clr-trnsl, vf-f,g/t aren SLTST i/p,com intrlams w/ SLTST,wl srt,sbang-sbrnd,mod-wk sil cmt,mnr gry-brn arg mtx,fri,mnr mod hd aggs,mnr disagg qtz grs,pr vis por,fr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.5 | 32 |
| RES_DEEP (ohm.m) | 17.91 | 32 |
| RES_SHALLOW (ohm.m) | 17.58 | 32 |
| **Δ Res (Deep − Shallow)** | **0.33** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2365 m MD — Interval 2362.5 – 2367.5 m

**Sample Description (spreadsheet):** Sample 2365m: 20% siltstone, 80% very fine to fine sandstone. 100% mod bright to bright FLUOR in SST. TG 249U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 249.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2370m: lt-med gry brn,clr-trnsl, vf-f,g/t aren SLTST i/p,com intrlams w/ SLTST,wl srt,sbang-sbrnd,mod-wk sil cmt,mnr gry-brn arg mtx,fri,mnr mod hd aggs,mnr disagg qtz grs,pr vis por,fr
- **SANDSTONE** @ ~2380m: lt-med gry brn,clr-trnsl, vf-f,g/t aren SLTST i/p,loc com intrlam w/ SLTST,wl srt,sbang-sbrnd,mod sil cmt,mnr gry-brn arg mtx,fri-mod hd aggs,mnr disagg qtz grs,pr vis por,fr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.0 | 33 |
| RES_DEEP (ohm.m) | 20.42 | 33 |
| RES_SHALLOW (ohm.m) | 19.39 | 33 |
| **Δ Res (Deep − Shallow)** | **1.03** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2370 m MD — Interval 2367.5 – 2372.5 m

**Sample Description (spreadsheet):** Sample 23670m: 20% siltstone, 80% very fine to fine sandstone. 90% mod bright to bright FLUOR in SST. TG 243U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 243.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2370m: lt-med gry brn,clr-trnsl, vf-f,g/t aren SLTST i/p,com intrlams w/ SLTST,wl srt,sbang-sbrnd,mod-wk sil cmt,mnr gry-brn arg mtx,fri,mnr mod hd aggs,mnr disagg qtz grs,pr vis por,fr
- **SANDSTONE** @ ~2380m: lt-med gry brn,clr-trnsl, vf-f,g/t aren SLTST i/p,loc com intrlam w/ SLTST,wl srt,sbang-sbrnd,mod sil cmt,mnr gry-brn arg mtx,fri-mod hd aggs,mnr disagg qtz grs,pr vis por,fr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.1 | 33 |
| RES_DEEP (ohm.m) | 19.52 | 33 |
| RES_SHALLOW (ohm.m) | 18.66 | 33 |
| **Δ Res (Deep − Shallow)** | **0.86** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2375 m MD — Interval 2372.5 – 2377.5 m

**Sample Description (spreadsheet):** Sample 2375m: 25% siltstone, 75% very fine to fine sandstone. 75% mod bright FLUOR in SST. TG 241U

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 75.0% nan |
| Total Gas | 241.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2370m: lt-med gry brn,clr-trnsl, vf-f,g/t aren SLTST i/p,com intrlams w/ SLTST,wl srt,sbang-sbrnd,mod-wk sil cmt,mnr gry-brn arg mtx,fri,mnr mod hd aggs,mnr disagg qtz grs,pr vis por,fr
- **SANDSTONE** @ ~2380m: lt-med gry brn,clr-trnsl, vf-f,g/t aren SLTST i/p,loc com intrlam w/ SLTST,wl srt,sbang-sbrnd,mod sil cmt,mnr gry-brn arg mtx,fri-mod hd aggs,mnr disagg qtz grs,pr vis por,fr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.8 | 33 |
| RES_DEEP (ohm.m) | 18.27 | 33 |
| RES_SHALLOW (ohm.m) | 17.69 | 33 |
| **Δ Res (Deep − Shallow)** | **0.58** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2380 m MD — Interval 2377.5 – 2382.5 m

**Sample Description (spreadsheet):** Sample 2380m: 15% siltstone, 85% very fine to fine sandstone. 85% mod bright FLUOR in SST. TG 240U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 85.0% nan |
| Total Gas | 240.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2370m: lt-med gry brn,clr-trnsl, vf-f,g/t aren SLTST i/p,com intrlams w/ SLTST,wl srt,sbang-sbrnd,mod-wk sil cmt,mnr gry-brn arg mtx,fri,mnr mod hd aggs,mnr disagg qtz grs,pr vis por,fr
- **SANDSTONE** @ ~2380m: lt-med gry brn,clr-trnsl, vf-f,g/t aren SLTST i/p,loc com intrlam w/ SLTST,wl srt,sbang-sbrnd,mod sil cmt,mnr gry-brn arg mtx,fri-mod hd aggs,mnr disagg qtz grs,pr vis por,fr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.0 | 33 |
| RES_DEEP (ohm.m) | 18.54 | 33 |
| RES_SHALLOW (ohm.m) | 17.84 | 33 |
| **Δ Res (Deep − Shallow)** | **0.70** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2385 m MD — Interval 2382.5 – 2387.5 m

**Sample Description (spreadsheet):** Sample 2385m: 15% siltstone, 85% very fine to fine sandstone. 90% mod bright FLUOR in SST. TG 231U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 231.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2370m: lt-med gry brn,clr-trnsl, vf-f,g/t aren SLTST i/p,com intrlams w/ SLTST,wl srt,sbang-sbrnd,mod-wk sil cmt,mnr gry-brn arg mtx,fri,mnr mod hd aggs,mnr disagg qtz grs,pr vis por,fr
- **SANDSTONE** @ ~2380m: lt-med gry brn,clr-trnsl, vf-f,g/t aren SLTST i/p,loc com intrlam w/ SLTST,wl srt,sbang-sbrnd,mod sil cmt,mnr gry-brn arg mtx,fri-mod hd aggs,mnr disagg qtz grs,pr vis por,fr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.8 | 33 |
| RES_DEEP (ohm.m) | 19.25 | 33 |
| RES_SHALLOW (ohm.m) | 18.60 | 33 |
| **Δ Res (Deep − Shallow)** | **0.65** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2390 m MD — Interval 2387.5 – 2392.5 m

**Sample Description (spreadsheet):** Sample 2390m: 20% siltstone, 80% very fine to fine sandstone. 90% mod bright FLUOR in SST. TG 235U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 235.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2380m: lt-med gry brn,clr-trnsl, vf-f,g/t aren SLTST i/p,loc com intrlam w/ SLTST,wl srt,sbang-sbrnd,mod sil cmt,mnr gry-brn arg mtx,fri-mod hd aggs,mnr disagg qtz grs,pr vis por,fr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.5 | 32 |
| RES_DEEP (ohm.m) | 20.56 | 32 |
| RES_SHALLOW (ohm.m) | 19.66 | 32 |
| **Δ Res (Deep − Shallow)** | **0.89** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2395 m MD — Interval 2392.5 – 2397.5 m

**Sample Description (spreadsheet):** Sample 2395m: 20% siltstone, 80% very fine to fine sandstone. 100% mod bright FLUOR in SST. TG 272U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 272.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2380m: lt-med gry brn,clr-trnsl, vf-f,g/t aren SLTST i/p,loc com intrlam w/ SLTST,wl srt,sbang-sbrnd,mod sil cmt,mnr gry-brn arg mtx,fri-mod hd aggs,mnr disagg qtz grs,pr vis por,fr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.8 | 33 |
| RES_DEEP (ohm.m) | 24.60 | 33 |
| RES_SHALLOW (ohm.m) | 23.85 | 33 |
| **Δ Res (Deep − Shallow)** | **0.75** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2400 m MD — Interval 2397.5 – 2402.5 m

**Sample Description (spreadsheet):** Sample 2400m: 20% siltstone, 80% very fine to fine sandstone. 90% mod bright FLUOR in SST. TG 248U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 248.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.4 | 33 |
| RES_DEEP (ohm.m) | 29.93 | 33 |
| RES_SHALLOW (ohm.m) | 27.98 | 33 |
| **Δ Res (Deep − Shallow)** | **1.95** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2405 m MD — Interval 2402.5 – 2407.5 m

**Sample Description (spreadsheet):** Sample 2405m: 25% siltstone, 75% very fine to fine sandstone. 80% mod bright FLUOR in SST. TG 235U

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 80.0% nan |
| Total Gas | 235.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2420m: clr,trnsl,v lt grysh brn, vf-med,tr crs,tr intrlam w/ SLTST,mod srt,sbang-sbrnd,tr ang,wk-mod sil cmt, mnr gry-brn arg mtx,tr mic flks,pred disagg,com fri,mnr mod hd,fr-gd inf

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.0 | 33 |
| RES_DEEP (ohm.m) | 34.68 | 33 |
| RES_SHALLOW (ohm.m) | 32.03 | 33 |
| **Δ Res (Deep − Shallow)** | **2.65** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2410 m MD — Interval 2407.5 – 2412.5 m

**Sample Description (spreadsheet):** Sample 2410m: 20% siltstone, 80% very fine to fine sandstone. tr medium, 90% mod bright FLUOR in SST. TG 275U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 90.0% medium, 90% mod bright |
| Total Gas | 275.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2420m: clr,trnsl,v lt grysh brn, vf-med,tr crs,tr intrlam w/ SLTST,mod srt,sbang-sbrnd,tr ang,wk-mod sil cmt, mnr gry-brn arg mtx,tr mic flks,pred disagg,com fri,mnr mod hd,fr-gd inf

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.9 | 33 |
| RES_DEEP (ohm.m) | 33.51 | 33 |
| RES_SHALLOW (ohm.m) | 31.99 | 33 |
| **Δ Res (Deep − Shallow)** | **1.52** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2415 m MD — Interval 2412.5 – 2417.5 m

**Sample Description (spreadsheet):** Sample 2415m: 15% siltstone, 85% very fine to fine sandstone. 90% mod bright FLUOR in SST. TG 265U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 265.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2420m: clr,trnsl,v lt grysh brn, vf-med,tr crs,tr intrlam w/ SLTST,mod srt,sbang-sbrnd,tr ang,wk-mod sil cmt, mnr gry-brn arg mtx,tr mic flks,pred disagg,com fri,mnr mod hd,fr-gd inf

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.0 | 32 |
| RES_DEEP (ohm.m) | 34.10 | 32 |
| RES_SHALLOW (ohm.m) | 32.53 | 32 |
| **Δ Res (Deep − Shallow)** | **1.57** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2420 m MD — Interval 2417.5 – 2422.5 m

**Sample Description (spreadsheet):** Sample 2420m: 10% siltstone, 90% very fine to fine sandstone, trace medium, 100% bright to mod bright FLUOR in SST. TG 275U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% medium, 100% bright to mod bright |
| Total Gas | 275.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2420m: clr,trnsl,v lt grysh brn, vf-med,tr crs,tr intrlam w/ SLTST,mod srt,sbang-sbrnd,tr ang,wk-mod sil cmt, mnr gry-brn arg mtx,tr mic flks,pred disagg,com fri,mnr mod hd,fr-gd inf

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.4 | 33 |
| RES_DEEP (ohm.m) | 34.72 | 33 |
| RES_SHALLOW (ohm.m) | 33.91 | 33 |
| **Δ Res (Deep − Shallow)** | **0.80** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2425 m MD — Interval 2422.5 – 2427.5 m

**Sample Description (spreadsheet):** Sample 2425m: 5% siltstone, 95% very fine to medium sandstone, trace coarse, 100% bright  FLUOR in SST. TG 312U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to medium (max: nan) |
| Fluorescence | 100.0% coarse, 100% bright |
| Total Gas | 312.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2420m: clr,trnsl,v lt grysh brn, vf-med,tr crs,tr intrlam w/ SLTST,mod srt,sbang-sbrnd,tr ang,wk-mod sil cmt, mnr gry-brn arg mtx,tr mic flks,pred disagg,com fri,mnr mod hd,fr-gd inf

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.0 | 33 |
| RES_DEEP (ohm.m) | 38.46 | 33 |
| RES_SHALLOW (ohm.m) | 38.17 | 33 |
| **Δ Res (Deep − Shallow)** | **0.29** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2430 m MD — Interval 2427.5 – 2432.5 m

**Sample Description (spreadsheet):** Sample 2430m: trace Siltstone, 100% very fine to medium Sandstone, trace coarse, 100% bright  FLUOR in SST. TG 295U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium (max: nan) |
| Fluorescence | 100.0% Siltstone, 100% very fine to medium Sandstone, trace coarse, 100% bright |
| Total Gas | 295.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2420m: clr,trnsl,v lt grysh brn, vf-med,tr crs,tr intrlam w/ SLTST,mod srt,sbang-sbrnd,tr ang,wk-mod sil cmt, mnr gry-brn arg mtx,tr mic flks,pred disagg,com fri,mnr mod hd,fr-gd inf

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.7 | 33 |
| RES_DEEP (ohm.m) | 38.34 | 33 |
| RES_SHALLOW (ohm.m) | 38.85 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.51** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2435 m MD — Interval 2432.5 – 2437.5 m

**Sample Description (spreadsheet):** Sample 2435m: trace Siltstone, 100% very fine to medium Sandstone, rare coarse-v crs, 100% bright  FLUOR in SST. TG 303U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium (max: nan) |
| Fluorescence | 100.0% Siltstone, 100% very fine to medium Sandstone, rare coarse-v crs, 100% bright |
| Total Gas | 303.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2420m: clr,trnsl,v lt grysh brn, vf-med,tr crs,tr intrlam w/ SLTST,mod srt,sbang-sbrnd,tr ang,wk-mod sil cmt, mnr gry-brn arg mtx,tr mic flks,pred disagg,com fri,mnr mod hd,fr-gd inf

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.6 | 33 |
| RES_DEEP (ohm.m) | 33.98 | 33 |
| RES_SHALLOW (ohm.m) | 33.98 | 33 |
| **Δ Res (Deep − Shallow)** | **0.00** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2440 m MD — Interval 2437.5 – 2442.5 m

**Sample Description (spreadsheet):** Sample 2440m: 5% Siltstone, 95% very fine to medium Sandstone, minor coarse, trace v coarse, 100% bright  FLUOR in SST. TG 292U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to medium (max: nan) |
| Fluorescence | 100.0% v coarse, 100% bright |
| Total Gas | 292.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 66.4 | 32 |
| RES_DEEP (ohm.m) | 35.13 | 32 |
| RES_SHALLOW (ohm.m) | 33.96 | 32 |
| **Δ Res (Deep − Shallow)** | **1.17** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2445 m MD — Interval 2442.5 – 2447.5 m

**Sample Description (spreadsheet):** Sample 2445m: Trace Siltstone, 100% very fine to medium Sandstone, trace coarse. 100% bright FLUOR in SST. TG 324U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium (max: nan) |
| Fluorescence | 100.0% Siltstone, 100% very fine to medium Sandstone, trace coarse. 100% bright |
| Total Gas | 324.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.0 | 33 |
| RES_DEEP (ohm.m) | 37.12 | 33 |
| RES_SHALLOW (ohm.m) | 34.49 | 33 |
| **Δ Res (Deep − Shallow)** | **2.64** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2450 m MD — Interval 2447.5 – 2452.5 m

**Sample Description (spreadsheet):** Sample 2450m: Trace Siltstone, 100% very fine to medium Sandstone, trace coarse-v coarse. 100% bright FLUOR in SST. TG 322U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium (max: nan) |
| Fluorescence | 100.0% Siltstone, 100% very fine to medium Sandstone, trace coarse-v coarse. 100% bright |
| Total Gas | 322.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.4 | 33 |
| RES_DEEP (ohm.m) | 37.33 | 33 |
| RES_SHALLOW (ohm.m) | 34.75 | 33 |
| **Δ Res (Deep − Shallow)** | **2.58** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2455 m MD — Interval 2452.5 – 2457.5 m

**Sample Description (spreadsheet):** Sample 2455m: Trace Siltstone, 100% very fine to fine, mnr medium Sandstone, 100% bright FLUOR in SST. TG 322U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, mnr medium (max: nan) |
| Fluorescence | 100.0% Siltstone, 100% very fine to fine, mnr medium Sandstone, 100% bright |
| Total Gas | 322.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2470m: v lt grysh brn,clr,trnsl, vf-f,mnr med,wl srt,sbang-sbrnd,wk sil cmt,mnr gry-brn arg mtx,fri,com disagg, pr-fr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.8 | 33 |
| RES_DEEP (ohm.m) | 41.91 | 33 |
| RES_SHALLOW (ohm.m) | 38.63 | 33 |
| **Δ Res (Deep − Shallow)** | **3.27** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2460 m MD — Interval 2457.5 – 2462.5 m

**Sample Description (spreadsheet):** Sample 2460m: 100% very fine to fine, trace medium Sandstone, 100% bright FLUOR in SST. TG 302U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace medium (max: nan) |
| Fluorescence | 100.0% medium Sandstone, 100% bright |
| Total Gas | 302.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2470m: v lt grysh brn,clr,trnsl, vf-f,mnr med,wl srt,sbang-sbrnd,wk sil cmt,mnr gry-brn arg mtx,fri,com disagg, pr-fr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.6 | 33 |
| RES_DEEP (ohm.m) | 42.79 | 33 |
| RES_SHALLOW (ohm.m) | 37.27 | 33 |
| **Δ Res (Deep − Shallow)** | **5.52** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2465 m MD — Interval 2462.5 – 2467.5 m

**Sample Description (spreadsheet):** Sample 2465m: Trace Siltstone, 100% very fine to fine, Sandstone with trace medium to coarse, 100% bright FLUOR in SST. TG 299U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% Siltstone, 100% very fine to fine, Sandstone with trace medium to coarse, 100% bright |
| Total Gas | 299.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2470m: v lt grysh brn,clr,trnsl, vf-f,mnr med,wl srt,sbang-sbrnd,wk sil cmt,mnr gry-brn arg mtx,fri,com disagg, pr-fr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.1 | 32 |
| RES_DEEP (ohm.m) | 35.17 | 32 |
| RES_SHALLOW (ohm.m) | 31.78 | 32 |
| **Δ Res (Deep − Shallow)** | **3.39** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2470 m MD — Interval 2467.5 – 2472.5 m

**Sample Description (spreadsheet):** Sample 2470m: Trace Siltstone, 100% very fine to fine, mnr medium Sandstone trace coarse, 100% bright FLUOR in SST. TG 300U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, mnr medium (max: nan) |
| Fluorescence | 100.0% Siltstone, 100% very fine to fine, mnr medium Sandstone trace coarse, 100% bright |
| Total Gas | 300.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2470m: v lt grysh brn,clr,trnsl, vf-f,mnr med,wl srt,sbang-sbrnd,wk sil cmt,mnr gry-brn arg mtx,fri,com disagg, pr-fr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.7 | 33 |
| RES_DEEP (ohm.m) | 35.42 | 33 |
| RES_SHALLOW (ohm.m) | 33.85 | 33 |
| **Δ Res (Deep − Shallow)** | **1.57** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2475 m MD — Interval 2472.5 – 2477.5 m

**Sample Description (spreadsheet):** Sample 2475m: 100% very fine to fine, mnr medium Sandstone 100% bright FLUOR in SST. TG 261U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, mnr medium (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 261.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2470m: v lt grysh brn,clr,trnsl, vf-f,mnr med,wl srt,sbang-sbrnd,wk sil cmt,mnr gry-brn arg mtx,fri,com disagg, pr-fr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.0 | 33 |
| RES_DEEP (ohm.m) | 37.36 | 33 |
| RES_SHALLOW (ohm.m) | 35.39 | 33 |
| **Δ Res (Deep − Shallow)** | **1.97** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2480 m MD — Interval 2477.5 – 2482.5 m

**Sample Description (spreadsheet):** Sample 2480m: 100% very fine to fine, trace medium, Sandstone 100% bright FLUOR in SST. TG 232U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace medium (max: nan) |
| Fluorescence | 100.0% medium, Sandstone 100% bright |
| Total Gas | 232.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2470m: v lt grysh brn,clr,trnsl, vf-f,mnr med,wl srt,sbang-sbrnd,wk sil cmt,mnr gry-brn arg mtx,fri,com disagg, pr-fr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 66.8 | 33 |
| RES_DEEP (ohm.m) | 37.23 | 33 |
| RES_SHALLOW (ohm.m) | 35.17 | 33 |
| **Δ Res (Deep − Shallow)** | **2.06** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2485 m MD — Interval 2482.5 – 2487.5 m

**Sample Description (spreadsheet):** Sample 2485m: 100% very fine to fine, trace medium, Sandstone 100% bright FLUOR in SST. TG 318U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, trace medium (max: nan) |
| Fluorescence | 100.0% medium, Sandstone 100% bright |
| Total Gas | 318.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2470m: v lt grysh brn,clr,trnsl, vf-f,mnr med,wl srt,sbang-sbrnd,wk sil cmt,mnr gry-brn arg mtx,fri,com disagg, pr-fr vis por,gd inf por,fluor.
- **SILTSTONE** @ ~2500m: 1-7klbs SILTSTONE:dk gry-v dk gry,med dk gry, FLW: 247-271gpm SURVEY @ 2506.8m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 63.3 | 33 |
| RES_DEEP (ohm.m) | 38.56 | 33 |
| RES_SHALLOW (ohm.m) | 36.70 | 33 |
| **Δ Res (Deep − Shallow)** | **1.86** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2490 m MD — Interval 2487.5 – 2492.5 m

**Sample Description (spreadsheet):** Sample 2490m: 100% very fine to fine, minor medium to coarse Sandstone, 100% bright FLUOR in SST. TG 321U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, minor medium to coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 321.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2500m: 1-7klbs SILTSTONE:dk gry-v dk gry,med dk gry, FLW: 247-271gpm SURVEY @ 2506.8m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 66.7 | 32 |
| RES_DEEP (ohm.m) | 36.41 | 32 |
| RES_SHALLOW (ohm.m) | 35.57 | 32 |
| **Δ Res (Deep − Shallow)** | **0.84** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2495 m MD — Interval 2492.5 – 2497.5 m

**Sample Description (spreadsheet):** Sample 2495m: 100% very fine to coarse, rare very coarse Sandstone, 100% bright FLUOR in SST. TG 295U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse, rare very coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 295.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2500m: 1-7klbs SILTSTONE:dk gry-v dk gry,med dk gry, FLW: 247-271gpm SURVEY @ 2506.8m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.9 | 33 |
| RES_DEEP (ohm.m) | 34.32 | 33 |
| RES_SHALLOW (ohm.m) | 33.57 | 33 |
| **Δ Res (Deep − Shallow)** | **0.76** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2500 m MD — Interval 2497.5 – 2502.5 m

**Sample Description (spreadsheet):** Sample 2500m: Trace Siltstone, 100% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 296U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse (max: nan) |
| Fluorescence | 100.0% Siltstone, 100% very fine to coarse Sandstone, 100% bright |
| Total Gas | 296.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2500m: 1-7klbs SILTSTONE:dk gry-v dk gry,med dk gry, FLW: 247-271gpm SURVEY @ 2506.8m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.0 | 33 |
| RES_DEEP (ohm.m) | 35.36 | 33 |
| RES_SHALLOW (ohm.m) | 33.77 | 33 |
| **Δ Res (Deep − Shallow)** | **1.59** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2505 m MD — Interval 2502.5 – 2507.5 m

**Sample Description (spreadsheet):** Sample 2505m: 5% Siltstone, 95% very fine to medium Sandstone 100% bright FLUOR in SST. TG 286U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to medium (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 286.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2500m: 1-7klbs SILTSTONE:dk gry-v dk gry,med dk gry, FLW: 247-271gpm SURVEY @ 2506.8m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.7 | 33 |
| RES_DEEP (ohm.m) | 37.23 | 33 |
| RES_SHALLOW (ohm.m) | 35.95 | 33 |
| **Δ Res (Deep − Shallow)** | **1.28** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2510 m MD — Interval 2507.5 – 2512.5 m

**Sample Description (spreadsheet):** Sample 2510m: trace Siltstone, 100% very fine to coarse Sandstone 100% bright FLUOR in SST. TG 321U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse (max: nan) |
| Fluorescence | 100.0% Siltstone, 100% very fine to coarse Sandstone 100% bright |
| Total Gas | 321.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2500m: 1-7klbs SILTSTONE:dk gry-v dk gry,med dk gry, FLW: 247-271gpm SURVEY @ 2506.8m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 66.2 | 33 |
| RES_DEEP (ohm.m) | 36.88 | 33 |
| RES_SHALLOW (ohm.m) | 35.28 | 33 |
| **Δ Res (Deep − Shallow)** | **1.60** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2515 m MD — Interval 2512.5 – 2517.5 m

**Sample Description (spreadsheet):** Sample 2515m: 100% very fine to very coarse Sandstone 100% bright FLUOR in SST. TG 305U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to very coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 305.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2500m: 1-7klbs SILTSTONE:dk gry-v dk gry,med dk gry, FLW: 247-271gpm SURVEY @ 2506.8m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.9 | 33 |
| RES_DEEP (ohm.m) | 39.53 | 33 |
| RES_SHALLOW (ohm.m) | 36.85 | 33 |
| **Δ Res (Deep − Shallow)** | **2.68** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2520 m MD — Interval 2517.5 – 2522.5 m

**Sample Description (spreadsheet):** Sample 2520m: 100% very fine to coarse, rare very coarse Sandstone 100% bright FLUOR in SST. TG 279U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse, rare very coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 279.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.6 | 32 |
| RES_DEEP (ohm.m) | 44.50 | 32 |
| RES_SHALLOW (ohm.m) | 40.05 | 32 |
| **Δ Res (Deep − Shallow)** | **4.46** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2525 m MD — Interval 2522.5 – 2527.5 m

**Sample Description (spreadsheet):** Sample 2525m: 100% very fine to very coarse Sandstone 100% bright FLUOR in SST. TG 274U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to very coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 274.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.1 | 33 |
| RES_DEEP (ohm.m) | 45.26 | 33 |
| RES_SHALLOW (ohm.m) | 39.88 | 33 |
| **Δ Res (Deep − Shallow)** | **5.37** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2530 m MD — Interval 2527.5 – 2532.5 m

**Sample Description (spreadsheet):** Sample 2530m: 100% very fine to coarse, rare very coarse Sandstone 100% bright FLUOR in SST. TG 306U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse, rare very coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 306.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 66.1 | 33 |
| RES_DEEP (ohm.m) | 35.70 | 33 |
| RES_SHALLOW (ohm.m) | 32.88 | 33 |
| **Δ Res (Deep − Shallow)** | **2.81** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2535 m MD — Interval 2532.5 – 2537.5 m

**Sample Description (spreadsheet):** Sample 2535m: 100% very fine to medium, rare coarse to very coarse Sandstone 100% bright FLUOR in SST. TG 290U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, rare coarse to very coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 290.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 66.2 | 33 |
| RES_DEEP (ohm.m) | 32.02 | 33 |
| RES_SHALLOW (ohm.m) | 30.23 | 33 |
| **Δ Res (Deep − Shallow)** | **1.79** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2540 m MD — Interval 2537.5 – 2542.5 m

**Sample Description (spreadsheet):** Sample 2540m: 5% Siltstone, 95% very fine to coarse Sandstone 100% bright FLUOR in SST. TG 289U

| Property | Value |
|----------|-------|
| % Sandstone | 98.0 |
| Grain Size | very fine to coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 289.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.4 | 33 |
| RES_DEEP (ohm.m) | 34.09 | 33 |
| RES_SHALLOW (ohm.m) | 33.60 | 33 |
| **Δ Res (Deep − Shallow)** | **0.49** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2545 m MD — Interval 2542.5 – 2550.0 m

**Sample Description (spreadsheet):** Sample 2545m: 10% Siltstone, 100% very fine to medium, rare coarse Sandstone 100% bright FLUOR in SST. TG 305U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, rare coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 305.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.1 | 49 |
| RES_DEEP (ohm.m) | 38.76 | 49 |
| RES_SHALLOW (ohm.m) | 38.79 | 49 |
| **Δ Res (Deep − Shallow)** | **-0.03** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2555 m MD — Interval 2550.0 – 2557.5 m

**Sample Description (spreadsheet):** Sample 2555m: 15% Siltstone, 85% very fine to medium, trace coarse Sandstone 100% bright FLUOR in SST. TG 278U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Fluorescence | 100.0% coarse Sandstone 100% bright |
| Total Gas | 278.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2570m: pl brn,pl brn gry,clr-trnsl, vf g/t aren SLTST,sbang-sbrnd,mod wk sil cmt,occ pl gry arg mtx,occ carb spks,fri-rr mod hd,v pr-pr vis,por, fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.9 | 49 |
| RES_DEEP (ohm.m) | 35.94 | 49 |
| RES_SHALLOW (ohm.m) | 35.20 | 49 |
| **Δ Res (Deep − Shallow)** | **0.74** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2560 m MD — Interval 2557.5 – 2562.5 m

**Sample Description (spreadsheet):** Sample 2560m: 10% siltsotone, 90% very fine to coarse sanstone. 100% bright FLUOR in SST. TG 287U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 287.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2570m: pl brn,pl brn gry,clr-trnsl, vf g/t aren SLTST,sbang-sbrnd,mod wk sil cmt,occ pl gry arg mtx,occ carb spks,fri-rr mod hd,v pr-pr vis,por, fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.5 | 33 |
| RES_DEEP (ohm.m) | 36.10 | 33 |
| RES_SHALLOW (ohm.m) | 34.64 | 33 |
| **Δ Res (Deep − Shallow)** | **1.45** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2565 m MD — Interval 2562.5 – 2567.5 m

**Sample Description (spreadsheet):** Sample 2565m: 15% siltsotone, 85% very fine to coarse sanstone. 100% bright FLUOR in SST. TG 298U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 298.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2570m: pl brn,pl brn gry,clr-trnsl, vf g/t aren SLTST,sbang-sbrnd,mod wk sil cmt,occ pl gry arg mtx,occ carb spks,fri-rr mod hd,v pr-pr vis,por, fluor.
- **SANDSTONE** @ ~2580m: pl brn,pl brn gry,clr-trnsl, 63 / 6 / 6 / 10 / 15 302 U vf-f,g/t aren SLTST,sbang-sbrnd,mod wk sil cmt,occ pl gry arg mtx,occ carb spks,mnr lse,fri-rr mod hd,pr vis & inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.3 | 33 |
| RES_DEEP (ohm.m) | 35.42 | 33 |
| RES_SHALLOW (ohm.m) | 34.40 | 33 |
| **Δ Res (Deep − Shallow)** | **1.03** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2570 m MD — Interval 2567.5 – 2572.5 m

**Sample Description (spreadsheet):** Sample 2570m: 10% siltsotone, 90% very fine to coarse sanstone., predominantly fine to very fine. 100% bright FLUOR in SST. TG 287U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 287.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2570m: pl brn,pl brn gry,clr-trnsl, vf g/t aren SLTST,sbang-sbrnd,mod wk sil cmt,occ pl gry arg mtx,occ carb spks,fri-rr mod hd,v pr-pr vis,por, fluor.
- **SANDSTONE** @ ~2580m: pl brn,pl brn gry,clr-trnsl, 63 / 6 / 6 / 10 / 15 302 U vf-f,g/t aren SLTST,sbang-sbrnd,mod wk sil cmt,occ pl gry arg mtx,occ carb spks,mnr lse,fri-rr mod hd,pr vis & inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.5 | 32 |
| RES_DEEP (ohm.m) | 34.75 | 32 |
| RES_SHALLOW (ohm.m) | 32.99 | 32 |
| **Δ Res (Deep − Shallow)** | **1.76** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2575 m MD — Interval 2572.5 – 2577.5 m

**Sample Description (spreadsheet):** Sample 2575m: 10% siltstone, 90% very fine to fine sandstone. 90% bright FLUOR in SST. TG 290U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 290.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2570m: pl brn,pl brn gry,clr-trnsl, vf g/t aren SLTST,sbang-sbrnd,mod wk sil cmt,occ pl gry arg mtx,occ carb spks,fri-rr mod hd,v pr-pr vis,por, fluor.
- **SANDSTONE** @ ~2580m: pl brn,pl brn gry,clr-trnsl, 63 / 6 / 6 / 10 / 15 302 U vf-f,g/t aren SLTST,sbang-sbrnd,mod wk sil cmt,occ pl gry arg mtx,occ carb spks,mnr lse,fri-rr mod hd,pr vis & inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.3 | 33 |
| RES_DEEP (ohm.m) | 30.75 | 33 |
| RES_SHALLOW (ohm.m) | 28.46 | 33 |
| **Δ Res (Deep − Shallow)** | **2.29** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2580 m MD — Interval 2577.5 – 2582.5 m

**Sample Description (spreadsheet):** Sample 2580m: 15% siltstone, 85% very fine sandstone. 80% mod bright FLUOR in SST. TG 248U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine (max: nan) |
| Fluorescence | 80.0% nan |
| Total Gas | 248.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2570m: pl brn,pl brn gry,clr-trnsl, vf g/t aren SLTST,sbang-sbrnd,mod wk sil cmt,occ pl gry arg mtx,occ carb spks,fri-rr mod hd,v pr-pr vis,por, fluor.
- **SANDSTONE** @ ~2580m: pl brn,pl brn gry,clr-trnsl, 63 / 6 / 6 / 10 / 15 302 U vf-f,g/t aren SLTST,sbang-sbrnd,mod wk sil cmt,occ pl gry arg mtx,occ carb spks,mnr lse,fri-rr mod hd,pr vis & inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.7 | 33 |
| RES_DEEP (ohm.m) | 26.96 | 33 |
| RES_SHALLOW (ohm.m) | 24.97 | 33 |
| **Δ Res (Deep − Shallow)** | **2.00** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2585 m MD — Interval 2582.5 – 2587.5 m

**Sample Description (spreadsheet):** Sample 2585m: 10% siltstone, 90% very fine sandstone. 80% mod bright FLUOR in SST. TG 271U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine (max: nan) |
| Fluorescence | 80.0% nan |
| Total Gas | 271.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2570m: pl brn,pl brn gry,clr-trnsl, vf g/t aren SLTST,sbang-sbrnd,mod wk sil cmt,occ pl gry arg mtx,occ carb spks,fri-rr mod hd,v pr-pr vis,por, fluor.
- **SANDSTONE** @ ~2580m: pl brn,pl brn gry,clr-trnsl, 63 / 6 / 6 / 10 / 15 302 U vf-f,g/t aren SLTST,sbang-sbrnd,mod wk sil cmt,occ pl gry arg mtx,occ carb spks,mnr lse,fri-rr mod hd,pr vis & inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.2 | 33 |
| RES_DEEP (ohm.m) | 28.42 | 33 |
| RES_SHALLOW (ohm.m) | 26.77 | 33 |
| **Δ Res (Deep − Shallow)** | **1.64** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2590 m MD — Interval 2587.5 – 2592.5 m

**Sample Description (spreadsheet):** Sample 2590m: 10% siltstone, 90% very finesandstone. 90% mod bright FLUOR in SST. TG 220U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | nan (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 220.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2580m: pl brn,pl brn gry,clr-trnsl, 63 / 6 / 6 / 10 / 15 302 U vf-f,g/t aren SLTST,sbang-sbrnd,mod wk sil cmt,occ pl gry arg mtx,occ carb spks,mnr lse,fri-rr mod hd,pr vis & inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.7 | 33 |
| RES_DEEP (ohm.m) | 32.53 | 33 |
| RES_SHALLOW (ohm.m) | 30.58 | 33 |
| **Δ Res (Deep − Shallow)** | **1.96** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2595 m MD — Interval 2592.5 – 2597.5 m

**Sample Description (spreadsheet):** Sample 2595m: 15% siltstone, 85% very fine to fine sandstone. 90% mod bright FLUOR in SST. TG 265U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 265.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2580m: pl brn,pl brn gry,clr-trnsl, 63 / 6 / 6 / 10 / 15 302 U vf-f,g/t aren SLTST,sbang-sbrnd,mod wk sil cmt,occ pl gry arg mtx,occ carb spks,mnr lse,fri-rr mod hd,pr vis & inf por,fluor.
- **SANDSTONE** @ ~2610m: pl brn,pl brn gry,clr-trnsl, vf-f,mnr g/t aren SLTST,sbang-sbrnd, mod sil cmt,com pl gry arg mtx,tr carb spks,tr slty lams,fri-mod hd,pr vis por, fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.6 | 32 |
| RES_DEEP (ohm.m) | 30.66 | 32 |
| RES_SHALLOW (ohm.m) | 28.18 | 32 |
| **Δ Res (Deep − Shallow)** | **2.49** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2600 m MD — Interval 2597.5 – 2602.5 m

**Sample Description (spreadsheet):** Sample 2600m: 15% siltstone, 85% very fine to fine sandstone. 90% bright FLUOR in SST. TG 253U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 253.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2610m: pl brn,pl brn gry,clr-trnsl, vf-f,mnr g/t aren SLTST,sbang-sbrnd, mod sil cmt,com pl gry arg mtx,tr carb spks,tr slty lams,fri-mod hd,pr vis por, fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.7 | 33 |
| RES_DEEP (ohm.m) | 29.24 | 33 |
| RES_SHALLOW (ohm.m) | 26.55 | 33 |
| **Δ Res (Deep − Shallow)** | **2.69** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2605 m MD — Interval 2602.5 – 2607.5 m

**Sample Description (spreadsheet):** Sample 2605m: 20% siltstone, 80% very fine to fine sandstone. 90% bright FLUOR in SST. TG 250U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 250.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2610m: pl brn,pl brn gry,clr-trnsl, vf-f,mnr g/t aren SLTST,sbang-sbrnd, mod sil cmt,com pl gry arg mtx,tr carb spks,tr slty lams,fri-mod hd,pr vis por, fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.6 | 33 |
| RES_DEEP (ohm.m) | 25.64 | 33 |
| RES_SHALLOW (ohm.m) | 23.53 | 33 |
| **Δ Res (Deep − Shallow)** | **2.11** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2610 m MD — Interval 2607.5 – 2612.5 m

**Sample Description (spreadsheet):** Sample 2610m: 20% siltstone, 80% very fine to fine sandstone. 90% bright FLUOR in SST. TG 210U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 210.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2610m: pl brn,pl brn gry,clr-trnsl, vf-f,mnr g/t aren SLTST,sbang-sbrnd, mod sil cmt,com pl gry arg mtx,tr carb spks,tr slty lams,fri-mod hd,pr vis por, fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.3 | 33 |
| RES_DEEP (ohm.m) | 24.92 | 33 |
| RES_SHALLOW (ohm.m) | 23.16 | 33 |
| **Δ Res (Deep − Shallow)** | **1.76** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2615 m MD — Interval 2612.5 – 2617.5 m

**Sample Description (spreadsheet):** Sample 2615m: 10% siltstone, 90% very fine to fine sandstone. 100% bright FLUOR in SST. TG 261U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 261.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2610m: pl brn,pl brn gry,clr-trnsl, vf-f,mnr g/t aren SLTST,sbang-sbrnd, mod sil cmt,com pl gry arg mtx,tr carb spks,tr slty lams,fri-mod hd,pr vis por, fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.6 | 33 |
| RES_DEEP (ohm.m) | 22.96 | 33 |
| RES_SHALLOW (ohm.m) | 22.02 | 33 |
| **Δ Res (Deep − Shallow)** | **0.94** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2620 m MD — Interval 2617.5 – 2622.5 m

**Sample Description (spreadsheet):** Sample 2620m: 5% siltstone, 95% very fine to fine sandstone. 100% bright FLUOR in SST. TG 205U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 205.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2610m: pl brn,pl brn gry,clr-trnsl, vf-f,mnr g/t aren SLTST,sbang-sbrnd, mod sil cmt,com pl gry arg mtx,tr carb spks,tr slty lams,fri-mod hd,pr vis por, fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.5 | 33 |
| RES_DEEP (ohm.m) | 24.12 | 33 |
| RES_SHALLOW (ohm.m) | 22.95 | 33 |
| **Δ Res (Deep − Shallow)** | **1.17** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2625 m MD — Interval 2622.5 – 2627.5 m

**Sample Description (spreadsheet):** Sample 2625m: 5% siltstone, 95% very fine to fine sandstone. 100% bright FLUOR in SST. TG 275U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 275.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2610m: pl brn,pl brn gry,clr-trnsl, vf-f,mnr g/t aren SLTST,sbang-sbrnd, mod sil cmt,com pl gry arg mtx,tr carb spks,tr slty lams,fri-mod hd,pr vis por, fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.5 | 32 |
| RES_DEEP (ohm.m) | 22.98 | 32 |
| RES_SHALLOW (ohm.m) | 22.03 | 32 |
| **Δ Res (Deep − Shallow)** | **0.95** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2630 m MD — Interval 2627.5 – 2632.5 m

**Sample Description (spreadsheet):** Sample 2630m: 5% siltstone, 95% very fine to fine sandstone. 100% bright FLUOR in SST. TG 238U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 238.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.9 | 33 |
| RES_DEEP (ohm.m) | 22.15 | 33 |
| RES_SHALLOW (ohm.m) | 21.16 | 33 |
| **Δ Res (Deep − Shallow)** | **0.99** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2635 m MD — Interval 2632.5 – 2637.5 m

**Sample Description (spreadsheet):** Sample 2635m: 5% siltstone, 95% very fine to fine sandstone. 100% bright FLUOR in SST. TG 252U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 252.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.7 | 33 |
| RES_DEEP (ohm.m) | 22.17 | 33 |
| RES_SHALLOW (ohm.m) | 21.03 | 33 |
| **Δ Res (Deep − Shallow)** | **1.14** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2640 m MD — Interval 2637.5 – 2642.5 m

**Sample Description (spreadsheet):** Sample 2640m: 5% siltstone, 95% very fine to fine sandstone. 100% bright FLUOR in SST. TG 230U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 230.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.8 | 33 |
| RES_DEEP (ohm.m) | 22.12 | 33 |
| RES_SHALLOW (ohm.m) | 20.98 | 33 |
| **Δ Res (Deep − Shallow)** | **1.14** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2645 m MD — Interval 2642.5 – 2647.5 m

**Sample Description (spreadsheet):** Sample 2645m: 10% siltstone, 90% very fine to fine sandstone. 90% bright FLUOR in SST. TG 221U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 221.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.3 | 33 |
| RES_DEEP (ohm.m) | 22.08 | 33 |
| RES_SHALLOW (ohm.m) | 20.85 | 33 |
| **Δ Res (Deep − Shallow)** | **1.23** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2650 m MD — Interval 2647.5 – 2652.5 m

**Sample Description (spreadsheet):** Sample 2650m: 20% siltstone, 80% very fine to fine sandstone. 90% bright FLUOR in SST. TG 216U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 216.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.0 | 32 |
| RES_DEEP (ohm.m) | 22.42 | 32 |
| RES_SHALLOW (ohm.m) | 21.09 | 32 |
| **Δ Res (Deep − Shallow)** | **1.32** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2655 m MD — Interval 2652.5 – 2657.5 m

**Sample Description (spreadsheet):** Sample 2655m: 20% siltstone, 80% very fine to fine sandstone. 90% moderately bright FLUOR in SST. TG 232U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 232.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2670m: med dk gry,dk gry,med gry brn,aren,com carb spks,mnr micmic,frm, sbblky-sbfiss. 04-08-2021 05-08-2021

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.2 | 33 |
| RES_DEEP (ohm.m) | 22.48 | 33 |
| RES_SHALLOW (ohm.m) | 21.27 | 33 |
| **Δ Res (Deep − Shallow)** | **1.21** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2660 m MD — Interval 2657.5 – 2662.5 m

**Sample Description (spreadsheet):** Sample 2660m: 20% siltstone, 80% very fine to fine sandstone. 85% moderately bright FLUOR in SST. TG 215U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 85.0% nan |
| Total Gas | 215.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2670m: med dk gry,dk gry,med gry brn,aren,com carb spks,mnr micmic,frm, sbblky-sbfiss. 04-08-2021 05-08-2021

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.8 | 33 |
| RES_DEEP (ohm.m) | 22.52 | 33 |
| RES_SHALLOW (ohm.m) | 21.55 | 33 |
| **Δ Res (Deep − Shallow)** | **0.97** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2665 m MD — Interval 2662.5 – 2667.5 m

**Sample Description (spreadsheet):** Sample 2665m: 25% siltstone, 75% very fine to fine sandstone. 90% moderately bright FLUOR in SST. TG 241U

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 241.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2670m: med dk gry,dk gry,med gry brn,aren,com carb spks,mnr micmic,frm, sbblky-sbfiss. 04-08-2021 05-08-2021
- **SANDSTONE** @ ~2680m: pl gry brn,pl gry,clr-trnsl, 257 U vf-f,g/t aren SLTST,v wl srt,sbang-sbrnd, mod strg sil cmt,com off wh-pl gry arg mtx,occ-com slty lams,tr qtz ovgths,tr carb spks,mod hd-fri,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.5 | 33 |
| RES_DEEP (ohm.m) | 22.21 | 33 |
| RES_SHALLOW (ohm.m) | 21.10 | 33 |
| **Δ Res (Deep − Shallow)** | **1.11** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2670 m MD — Interval 2667.5 – 2672.5 m

**Sample Description (spreadsheet):** Sample 2670m: 15% siltstone, 85% very fine to fine sandstone. 90% moderately bright to bright FLUOR in SST. TG 222U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 222.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2670m: med dk gry,dk gry,med gry brn,aren,com carb spks,mnr micmic,frm, sbblky-sbfiss. 04-08-2021 05-08-2021
- **SANDSTONE** @ ~2680m: pl gry brn,pl gry,clr-trnsl, 257 U vf-f,g/t aren SLTST,v wl srt,sbang-sbrnd, mod strg sil cmt,com off wh-pl gry arg mtx,occ-com slty lams,tr qtz ovgths,tr carb spks,mod hd-fri,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.4 | 33 |
| RES_DEEP (ohm.m) | 21.96 | 33 |
| RES_SHALLOW (ohm.m) | 20.85 | 33 |
| **Δ Res (Deep − Shallow)** | **1.12** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2675 m MD — Interval 2672.5 – 2677.5 m

**Sample Description (spreadsheet):** Sample 2675m: 15% siltstone, 85% very fine to fine sandstone. 90% moderately bright to bright FLUOR in SST. TG 230U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 230.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2670m: med dk gry,dk gry,med gry brn,aren,com carb spks,mnr micmic,frm, sbblky-sbfiss. 04-08-2021 05-08-2021
- **SANDSTONE** @ ~2680m: pl gry brn,pl gry,clr-trnsl, 257 U vf-f,g/t aren SLTST,v wl srt,sbang-sbrnd, mod strg sil cmt,com off wh-pl gry arg mtx,occ-com slty lams,tr qtz ovgths,tr carb spks,mod hd-fri,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.4 | 32 |
| RES_DEEP (ohm.m) | 21.63 | 32 |
| RES_SHALLOW (ohm.m) | 20.68 | 32 |
| **Δ Res (Deep − Shallow)** | **0.95** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2680 m MD — Interval 2677.5 – 2682.5 m

**Sample Description (spreadsheet):** Sample 2680m: 15% siltstone, 85% very fine to fine sandstone. 90% moderately bright to bright FLUOR in SST. TG 212U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 212.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2670m: med dk gry,dk gry,med gry brn,aren,com carb spks,mnr micmic,frm, sbblky-sbfiss. 04-08-2021 05-08-2021
- **SANDSTONE** @ ~2680m: pl gry brn,pl gry,clr-trnsl, 257 U vf-f,g/t aren SLTST,v wl srt,sbang-sbrnd, mod strg sil cmt,com off wh-pl gry arg mtx,occ-com slty lams,tr qtz ovgths,tr carb spks,mod hd-fri,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.1 | 33 |
| RES_DEEP (ohm.m) | 22.38 | 33 |
| RES_SHALLOW (ohm.m) | 21.32 | 33 |
| **Δ Res (Deep − Shallow)** | **1.06** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2685 m MD — Interval 2682.5 – 2687.5 m

**Sample Description (spreadsheet):** Sample 2685m: 20% siltstone, 80% very fine to fine sandstone. 100% bright FLUOR in SST. TG 246U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 246.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2670m: med dk gry,dk gry,med gry brn,aren,com carb spks,mnr micmic,frm, sbblky-sbfiss. 04-08-2021 05-08-2021
- **SANDSTONE** @ ~2680m: pl gry brn,pl gry,clr-trnsl, 257 U vf-f,g/t aren SLTST,v wl srt,sbang-sbrnd, mod strg sil cmt,com off wh-pl gry arg mtx,occ-com slty lams,tr qtz ovgths,tr carb spks,mod hd-fri,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.5 | 33 |
| RES_DEEP (ohm.m) | 21.89 | 33 |
| RES_SHALLOW (ohm.m) | 21.03 | 33 |
| **Δ Res (Deep − Shallow)** | **0.86** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2690 m MD — Interval 2687.5 – 2692.5 m

**Sample Description (spreadsheet):** Sample 2690m: 20% siltstone, 80% very fine to fine sandstone. 100% bright FLUOR in SST. TG 211U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 211.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2680m: pl gry brn,pl gry,clr-trnsl, 257 U vf-f,g/t aren SLTST,v wl srt,sbang-sbrnd, mod strg sil cmt,com off wh-pl gry arg mtx,occ-com slty lams,tr qtz ovgths,tr carb spks,mod hd-fri,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.1 | 33 |
| RES_DEEP (ohm.m) | 21.92 | 33 |
| RES_SHALLOW (ohm.m) | 21.06 | 33 |
| **Δ Res (Deep − Shallow)** | **0.86** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2695 m MD — Interval 2692.5 – 2697.5 m

**Sample Description (spreadsheet):** Sample 2695m: 15% siltstone, 85% very fine to fine sandstone. 100% bright FLUOR in SST. TG 217U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 217.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2680m: pl gry brn,pl gry,clr-trnsl, 257 U vf-f,g/t aren SLTST,v wl srt,sbang-sbrnd, mod strg sil cmt,com off wh-pl gry arg mtx,occ-com slty lams,tr qtz ovgths,tr carb spks,mod hd-fri,pr vis por,fluor.
- **SANDSTONE** @ ~2710m: pl gry brn,pl gry,clr-trnsl, vf-f,pred vf,g/t aren SLTST,v wl srt, sbang-sbrnd,mod strg sil cmt,com off wh-pl gry arg mtx,occ-com slty lams,tr qtz ovgths,tr carb spks,mod

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.7 | 33 |
| RES_DEEP (ohm.m) | 21.91 | 33 |
| RES_SHALLOW (ohm.m) | 21.26 | 33 |
| **Δ Res (Deep − Shallow)** | **0.66** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2700 m MD — Interval 2697.5 – 2702.5 m

**Sample Description (spreadsheet):** Sample 2700m: 15% siltstone, 85% very fine to fine sandstone. 100% bright FLUOR in SST. TG 222U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 222.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2710m: pl gry brn,pl gry,clr-trnsl, vf-f,pred vf,g/t aren SLTST,v wl srt, sbang-sbrnd,mod strg sil cmt,com off wh-pl gry arg mtx,occ-com slty lams,tr qtz ovgths,tr carb spks,mod

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.4 | 32 |
| RES_DEEP (ohm.m) | 22.24 | 32 |
| RES_SHALLOW (ohm.m) | 21.60 | 32 |
| **Δ Res (Deep − Shallow)** | **0.64** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2705 m MD — Interval 2702.5 – 2707.5 m

**Sample Description (spreadsheet):** Sample 2705m: 20% siltstone, 80% very fine to fine, minor medium sandstone. 100% bright FLUOR in SST. TG 231U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine, minor medium (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 231.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2710m: pl gry brn,pl gry,clr-trnsl, vf-f,pred vf,g/t aren SLTST,v wl srt, sbang-sbrnd,mod strg sil cmt,com off wh-pl gry arg mtx,occ-com slty lams,tr qtz ovgths,tr carb spks,mod
- **SANDSTONE** @ ~2720m: pl gry brn,pl gry,clr-trnsl, vf-f,pred vf,g/t aren SLTST,v wl srt, sbang-sbrnd,mod strg sil cmt,com off wh-pl gry arg mtx,occ-com slty lams,tr qtz ovgths,tr carb spks,mod

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.9 | 33 |
| RES_DEEP (ohm.m) | 21.94 | 33 |
| RES_SHALLOW (ohm.m) | 21.42 | 33 |
| **Δ Res (Deep − Shallow)** | **0.51** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2710 m MD — Interval 2707.5 – 2712.5 m

**Sample Description (spreadsheet):** Sample 2710m: 20% siltstone, 80% very fine to fine, minor medium sandstone. 90% bright FLUOR in SST. TG 232U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine, minor medium (max: nan) |
| Fluorescence | 90.0% nan |
| Total Gas | 232.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2710m: pl gry brn,pl gry,clr-trnsl, vf-f,pred vf,g/t aren SLTST,v wl srt, sbang-sbrnd,mod strg sil cmt,com off wh-pl gry arg mtx,occ-com slty lams,tr qtz ovgths,tr carb spks,mod
- **SANDSTONE** @ ~2720m: pl gry brn,pl gry,clr-trnsl, vf-f,pred vf,g/t aren SLTST,v wl srt, sbang-sbrnd,mod strg sil cmt,com off wh-pl gry arg mtx,occ-com slty lams,tr qtz ovgths,tr carb spks,mod

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.1 | 33 |
| RES_DEEP (ohm.m) | 21.01 | 33 |
| RES_SHALLOW (ohm.m) | 20.49 | 33 |
| **Δ Res (Deep − Shallow)** | **0.51** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2715 m MD — Interval 2712.5 – 2717.5 m

**Sample Description (spreadsheet):** Sample 2715m: 20% siltstone, 80% very fine to fine, sandstone. 100% bright FLUOR in SST. TG 235U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 235.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2710m: pl gry brn,pl gry,clr-trnsl, vf-f,pred vf,g/t aren SLTST,v wl srt, sbang-sbrnd,mod strg sil cmt,com off wh-pl gry arg mtx,occ-com slty lams,tr qtz ovgths,tr carb spks,mod
- **SANDSTONE** @ ~2720m: pl gry brn,pl gry,clr-trnsl, vf-f,pred vf,g/t aren SLTST,v wl srt, sbang-sbrnd,mod strg sil cmt,com off wh-pl gry arg mtx,occ-com slty lams,tr qtz ovgths,tr carb spks,mod

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.9 | 33 |
| RES_DEEP (ohm.m) | 21.14 | 33 |
| RES_SHALLOW (ohm.m) | 20.40 | 33 |
| **Δ Res (Deep − Shallow)** | **0.75** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2720 m MD — Interval 2717.5 – 2722.5 m

**Sample Description (spreadsheet):** Sample 2720m: 10% siltstone, 90% very fine to fine, sandstone. 100% bright FLUOR in SST. TG 235U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 235.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2710m: pl gry brn,pl gry,clr-trnsl, vf-f,pred vf,g/t aren SLTST,v wl srt, sbang-sbrnd,mod strg sil cmt,com off wh-pl gry arg mtx,occ-com slty lams,tr qtz ovgths,tr carb spks,mod
- **SANDSTONE** @ ~2720m: pl gry brn,pl gry,clr-trnsl, vf-f,pred vf,g/t aren SLTST,v wl srt, sbang-sbrnd,mod strg sil cmt,com off wh-pl gry arg mtx,occ-com slty lams,tr qtz ovgths,tr carb spks,mod

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.4 | 33 |
| RES_DEEP (ohm.m) | 22.23 | 33 |
| RES_SHALLOW (ohm.m) | 21.30 | 33 |
| **Δ Res (Deep − Shallow)** | **0.93** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2725 m MD — Interval 2722.5 – 2727.5 m

**Sample Description (spreadsheet):** Sample 2725m: 15% siltstone, 85% very fine to fine, sandstone. 100% bright FLUOR in SST. TG 233U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 233.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2710m: pl gry brn,pl gry,clr-trnsl, vf-f,pred vf,g/t aren SLTST,v wl srt, sbang-sbrnd,mod strg sil cmt,com off wh-pl gry arg mtx,occ-com slty lams,tr qtz ovgths,tr carb spks,mod
- **SANDSTONE** @ ~2720m: pl gry brn,pl gry,clr-trnsl, vf-f,pred vf,g/t aren SLTST,v wl srt, sbang-sbrnd,mod strg sil cmt,com off wh-pl gry arg mtx,occ-com slty lams,tr qtz ovgths,tr carb spks,mod

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.8 | 32 |
| RES_DEEP (ohm.m) | 21.78 | 32 |
| RES_SHALLOW (ohm.m) | 20.74 | 32 |
| **Δ Res (Deep − Shallow)** | **1.04** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2730 m MD — Interval 2727.5 – 2732.5 m

**Sample Description (spreadsheet):** Sample 2730m: 20% siltstone, 80% very fine to fine, sandstone. 100% bright FLUOR in SST. TG 197U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 197.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2720m: pl gry brn,pl gry,clr-trnsl, vf-f,pred vf,g/t aren SLTST,v wl srt, sbang-sbrnd,mod strg sil cmt,com off wh-pl gry arg mtx,occ-com slty lams,tr qtz ovgths,tr carb spks,mod

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.6 | 33 |
| RES_DEEP (ohm.m) | 21.36 | 33 |
| RES_SHALLOW (ohm.m) | 20.35 | 33 |
| **Δ Res (Deep − Shallow)** | **1.02** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2735 m MD — Interval 2732.5 – 2737.5 m

**Sample Description (spreadsheet):** Sample 2735m: 20% siltstone, 80% very fine to fine, sandstone. 100% bright FLUOR in SST. TG 190U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 190.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2720m: pl gry brn,pl gry,clr-trnsl, vf-f,pred vf,g/t aren SLTST,v wl srt, sbang-sbrnd,mod strg sil cmt,com off wh-pl gry arg mtx,occ-com slty lams,tr qtz ovgths,tr carb spks,mod

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.4 | 33 |
| RES_DEEP (ohm.m) | 21.26 | 33 |
| RES_SHALLOW (ohm.m) | 20.29 | 33 |
| **Δ Res (Deep − Shallow)** | **0.97** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2740 m MD — Interval 2737.5 – 2742.5 m

**Sample Description (spreadsheet):** Sample 2740m: 20% siltstone, 80% very fine to fine, sandstone. 100% bright FLUOR in SST. TG 225U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 225.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.2 | 33 |
| RES_DEEP (ohm.m) | 23.06 | 33 |
| RES_SHALLOW (ohm.m) | 22.02 | 33 |
| **Δ Res (Deep − Shallow)** | **1.04** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2745 m MD — Interval 2742.5 – 2747.5 m

**Sample Description (spreadsheet):** Sample 2745m: 10% siltstone, 90% very fine to fine, sandstone. 100% bright FLUOR in SST. TG 160U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 160.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.8 | 33 |
| RES_DEEP (ohm.m) | 23.10 | 33 |
| RES_SHALLOW (ohm.m) | 22.13 | 33 |
| **Δ Res (Deep − Shallow)** | **0.98** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2750 m MD — Interval 2747.5 – 2752.5 m

**Sample Description (spreadsheet):** Sample 2750m: 20% siltstone, 80% very fine to fine sandstone. 100% bright FLUOR in SST. TG 228U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 228.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.2 | 33 |
| RES_DEEP (ohm.m) | 23.73 | 33 |
| RES_SHALLOW (ohm.m) | 23.48 | 33 |
| **Δ Res (Deep − Shallow)** | **0.25** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2755 m MD — Interval 2752.5 – 2757.5 m

**Sample Description (spreadsheet):** Sample 2755m: 20% siltstone, 80% very fine to fine sandstone. 100% bright FLUOR in SST. TG 226U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 226.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.0 | 32 |
| RES_DEEP (ohm.m) | 23.89 | 32 |
| RES_SHALLOW (ohm.m) | 24.02 | 32 |
| **Δ Res (Deep − Shallow)** | **-0.13** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2760 m MD — Interval 2757.5 – 2762.5 m

**Sample Description (spreadsheet):** Sample 2760m: 5% siltstone, 95% very fine to medium sandstone, trace coarse to very coarse. 100% bright FLUOR in SST. TG 243U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to medium (max: nan) |
| Fluorescence | 100.0% coarse to very coarse. 100% bright |
| Total Gas | 243.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.9 | 33 |
| RES_DEEP (ohm.m) | 23.17 | 33 |
| RES_SHALLOW (ohm.m) | 23.28 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.11** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2765 m MD — Interval 2762.5 – 2767.5 m

**Sample Description (spreadsheet):** Sample 2765m: 5% siltstone, 95% very fine to medium sandstone, minor coarse to very coarse. 100% bright-mod bright FLUOR in SST. TG 257U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to medium (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 257.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.7 | 33 |
| RES_DEEP (ohm.m) | 25.13 | 33 |
| RES_SHALLOW (ohm.m) | 24.48 | 33 |
| **Δ Res (Deep − Shallow)** | **0.65** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2770 m MD — Interval 2767.5 – 2772.5 m

**Sample Description (spreadsheet):** Sample 2770m: trace siltstone, 100% very fine to medium sandstone, trace coarse to very coarse. 100% bright-mod bright FLUOR in SST. TG 197U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium (max: nan) |
| Fluorescence | 100.0% siltstone, 100% very fine to medium sandstone, trace coarse to very coarse. 100% bright-mod bright |
| Total Gas | 197.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 56.0 | 33 |
| RES_DEEP (ohm.m) | 27.54 | 33 |
| RES_SHALLOW (ohm.m) | 26.84 | 33 |
| **Δ Res (Deep − Shallow)** | **0.70** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2775 m MD — Interval 2772.5 – 2777.5 m

**Sample Description (spreadsheet):** Sample 2775m: 100% very fine to medium sandstone, trace coarse to very coarse. 100% bright-mod bright FLUOR in SST. TG 215U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium (max: nan) |
| Fluorescence | 100.0% coarse to very coarse. 100% bright-mod bright |
| Total Gas | 215.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 66.8 | 33 |
| RES_DEEP (ohm.m) | 22.65 | 33 |
| RES_SHALLOW (ohm.m) | 22.22 | 33 |
| **Δ Res (Deep − Shallow)** | **0.43** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2780 m MD — Interval 2777.5 – 2782.5 m

**Sample Description (spreadsheet):** Sample 2780m: 100% very fine to medium sandstone, trace coarse to very coarse. 100% bright FLUOR in SST. TG 230U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium (max: nan) |
| Fluorescence | 100.0% coarse to very coarse. 100% bright |
| Total Gas | 230.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.2 | 32 |
| RES_DEEP (ohm.m) | 22.13 | 32 |
| RES_SHALLOW (ohm.m) | 22.03 | 32 |
| **Δ Res (Deep − Shallow)** | **0.10** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2785 m MD — Interval 2782.5 – 2787.5 m

**Sample Description (spreadsheet):** Sample 2785m: 10% Siltstone, 90% very fine to medium sandstone, rare coarse, trace very coarse. 100% bright-mod bright FLUOR in SST. TG 195U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to medium (max: nan) |
| Fluorescence | 100.0% very coarse. 100% bright-mod bright |
| Total Gas | 195.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.4 | 33 |
| RES_DEEP (ohm.m) | 21.03 | 33 |
| RES_SHALLOW (ohm.m) | 20.31 | 33 |
| **Δ Res (Deep − Shallow)** | **0.73** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2790 m MD — Interval 2787.5 – 2792.5 m

**Sample Description (spreadsheet):** Sample 2790m: 15% Siltstone, 85% predominantly very fine to fine, common medium sandstone, rare coarse to very coarse. 100% mod bright to bright FLUOR in SST. TG 180U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | predominantly very fine to fine, common medium (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 180.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.3 | 33 |
| RES_DEEP (ohm.m) | 19.34 | 33 |
| RES_SHALLOW (ohm.m) | 18.54 | 33 |
| **Δ Res (Deep − Shallow)** | **0.80** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2795 m MD — Interval 2792.5 – 2797.5 m

**Sample Description (spreadsheet):** Sample 2795m: 15% Siltstone, 85% very fine to fine, minor medium sandstone, trace coarse. 100% mod bright to bright FLUOR in SST. TG 166U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine, minor medium (max: nan) |
| Fluorescence | 100.0% coarse. 100% mod bright to bright |
| Total Gas | 166.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2810m: dk gry,lt-med gry,aren, g/t slty SST i/p,mnr carb spks,com sndy lams,tr micmic,frm,mnr mod hd, sbblky-sbfiss. SURVEY @ 2814.1m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 121.6 | 33 |
| RES_DEEP (ohm.m) | 18.99 | 33 |
| RES_SHALLOW (ohm.m) | 18.08 | 33 |
| **Δ Res (Deep − Shallow)** | **0.91** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2800 m MD — Interval 2797.5 – 2802.5 m

**Sample Description (spreadsheet):** Sample 2800m: 20% Siltstone, 80% very fine to fine, trace medium sandstone. 80% mod bright FLUOR in SST. TG 166U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine, trace medium (max: nan) |
| Fluorescence | 100.0% medium sandstone. 80% mod bright |
| Total Gas | 166.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2810m: dk gry,lt-med gry,aren, g/t slty SST i/p,mnr carb spks,com sndy lams,tr micmic,frm,mnr mod hd, sbblky-sbfiss. SURVEY @ 2814.1m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 127.3 | 33 |
| RES_DEEP (ohm.m) | 18.36 | 33 |
| RES_SHALLOW (ohm.m) | 17.33 | 33 |
| **Δ Res (Deep − Shallow)** | **1.04** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2805 m MD — Interval 2802.5 – 2807.5 m

**Sample Description (spreadsheet):** Sample 2805m: 15% Siltstone, 85% very fine to fine, trace medium sandstone. 70% mod bright FLUOR in SST. TG 171U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine, trace medium (max: nan) |
| Fluorescence | 70.0% medium sandstone. 70% mod bright |
| Total Gas | 171.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2810m: dk gry,lt-med gry,aren, g/t slty SST i/p,mnr carb spks,com sndy lams,tr micmic,frm,mnr mod hd, sbblky-sbfiss. SURVEY @ 2814.1m
- **SILTSTONE** @ ~2820m: lt-med gry,dk gry,aren, g/t slty SST i/p,com sndy lams,tr carb spks,tr micmic,frm,mnr mod hd, sbblky-sbfiss. 0 0.5 1 4 14 2830 1 10 100 1K

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 108.6 | 32 |
| RES_DEEP (ohm.m) | 19.06 | 32 |
| RES_SHALLOW (ohm.m) | 17.65 | 32 |
| **Δ Res (Deep − Shallow)** | **1.41** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2810 m MD — Interval 2807.5 – 2812.5 m

**Sample Description (spreadsheet):** Sample 2810m: 20% Siltstone, 80% very fine to fine, trace medium sandstone. 75% mod bright FLUOR in SST. TG 159U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine, trace medium (max: nan) |
| Fluorescence | 75.0% medium sandstone. 75% mod bright |
| Total Gas | 159.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2810m: dk gry,lt-med gry,aren, g/t slty SST i/p,mnr carb spks,com sndy lams,tr micmic,frm,mnr mod hd, sbblky-sbfiss. SURVEY @ 2814.1m
- **SILTSTONE** @ ~2820m: lt-med gry,dk gry,aren, g/t slty SST i/p,com sndy lams,tr carb spks,tr micmic,frm,mnr mod hd, sbblky-sbfiss. 0 0.5 1 4 14 2830 1 10 100 1K

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 112.1 | 33 |
| RES_DEEP (ohm.m) | 19.54 | 33 |
| RES_SHALLOW (ohm.m) | 18.08 | 33 |
| **Δ Res (Deep − Shallow)** | **1.45** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2815 m MD — Interval 2812.5 – 2817.5 m

**Sample Description (spreadsheet):** Sample 2815m: 20% Siltstone, 80% very fine to fine, Sandstone, grading to arenaceous siltstone 70% mod bright FLUOR in SST. TG 158U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 70.0% nan |
| Total Gas | 158.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2810m: dk gry,lt-med gry,aren, g/t slty SST i/p,mnr carb spks,com sndy lams,tr micmic,frm,mnr mod hd, sbblky-sbfiss. SURVEY @ 2814.1m
- **SILTSTONE** @ ~2820m: lt-med gry,dk gry,aren, g/t slty SST i/p,com sndy lams,tr carb spks,tr micmic,frm,mnr mod hd, sbblky-sbfiss. 0 0.5 1 4 14 2830 1 10 100 1K

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 111.1 | 33 |
| RES_DEEP (ohm.m) | 19.09 | 33 |
| RES_SHALLOW (ohm.m) | 17.77 | 33 |
| **Δ Res (Deep − Shallow)** | **1.32** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2820 m MD — Interval 2817.5 – 2822.5 m

**Sample Description (spreadsheet):** Sample 2820m: 25% Siltstone, 75% very fine to fine, Sandstone, grading to arenaceous siltstone 75% mod bright FLUOR in SST. TG 176U

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 75.0% nan |
| Total Gas | 176.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2810m: dk gry,lt-med gry,aren, g/t slty SST i/p,mnr carb spks,com sndy lams,tr micmic,frm,mnr mod hd, sbblky-sbfiss. SURVEY @ 2814.1m
- **SILTSTONE** @ ~2820m: lt-med gry,dk gry,aren, g/t slty SST i/p,com sndy lams,tr carb spks,tr micmic,frm,mnr mod hd, sbblky-sbfiss. 0 0.5 1 4 14 2830 1 10 100 1K

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 112.8 | 33 |
| RES_DEEP (ohm.m) | 18.27 | 33 |
| RES_SHALLOW (ohm.m) | 17.26 | 33 |
| **Δ Res (Deep − Shallow)** | **1.01** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2825 m MD — Interval 2822.5 – 2827.5 m

**Sample Description (spreadsheet):** Sample 2825m: 20% Siltstone, 80% very fine to fine Sandstone, grading to arenaceous siltstone 75% mod bright FLUOR in SST. TG 163U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 75.0% nan |
| Total Gas | 163.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2810m: dk gry,lt-med gry,aren, g/t slty SST i/p,mnr carb spks,com sndy lams,tr micmic,frm,mnr mod hd, sbblky-sbfiss. SURVEY @ 2814.1m
- **SILTSTONE** @ ~2820m: lt-med gry,dk gry,aren, g/t slty SST i/p,com sndy lams,tr carb spks,tr micmic,frm,mnr mod hd, sbblky-sbfiss. 0 0.5 1 4 14 2830 1 10 100 1K
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 109.7 | 33 |
| RES_DEEP (ohm.m) | 18.41 | 33 |
| RES_SHALLOW (ohm.m) | 17.34 | 33 |
| **Δ Res (Deep − Shallow)** | **1.07** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2830 m MD — Interval 2827.5 – 2832.5 m

**Sample Description (spreadsheet):** Sample 2830m: 20% Siltstone, 80% very fine to fine Sandstone, grading to arenaceous siltstone 70% mod bright FLUOR in SST. TG 170U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 70.0% nan |
| Total Gas | 170.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2820m: lt-med gry,dk gry,aren, g/t slty SST i/p,com sndy lams,tr carb spks,tr micmic,frm,mnr mod hd, sbblky-sbfiss. 0 0.5 1 4 14 2830 1 10 100 1K
- **SANDSTONE** @ ~2840m: lt-med grey,lt grysh brn, vf-f,g/t aren SLTST i/p,v wl srt,sbang- sbrnd,mnr slty lams,wk-mod sil cmt, com gry-brn slty mtx,tr carb spks,fri, mnr mod hd,v pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 110.8 | 32 |
| RES_DEEP (ohm.m) | 20.40 | 32 |
| RES_SHALLOW (ohm.m) | 18.98 | 32 |
| **Δ Res (Deep − Shallow)** | **1.42** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2835 m MD — Interval 2832.5 – 2837.5 m

**Sample Description (spreadsheet):** Sample 2835m: 20% Siltstone, 80% very fine to fine Sandstone, grading to arenaceous siltstone 65% mod bright FLUOR in SST. TG 168U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 65.0% nan |
| Total Gas | 168.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2820m: lt-med gry,dk gry,aren, g/t slty SST i/p,com sndy lams,tr carb spks,tr micmic,frm,mnr mod hd, sbblky-sbfiss. 0 0.5 1 4 14 2830 1 10 100 1K
- **SANDSTONE** @ ~2840m: lt-med grey,lt grysh brn, vf-f,g/t aren SLTST i/p,v wl srt,sbang- sbrnd,mnr slty lams,wk-mod sil cmt, com gry-brn slty mtx,tr carb spks,fri, mnr mod hd,v pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 110.6 | 33 |
| RES_DEEP (ohm.m) | 19.57 | 33 |
| RES_SHALLOW (ohm.m) | 18.52 | 33 |
| **Δ Res (Deep − Shallow)** | **1.06** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2840 m MD — Interval 2837.5 – 2842.5 m

**Sample Description (spreadsheet):** Sample 2840m: 20% Siltstone, 80% very fine to fine Sandstone, grading to arenaceous siltstone 60% mod bright FLUOR in SST. TG 160U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 60.0% nan |
| Total Gas | 160.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2840m: lt-med grey,lt grysh brn, vf-f,g/t aren SLTST i/p,v wl srt,sbang- sbrnd,mnr slty lams,wk-mod sil cmt, com gry-brn slty mtx,tr carb spks,fri, mnr mod hd,v pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 108.5 | 33 |
| RES_DEEP (ohm.m) | 20.00 | 33 |
| RES_SHALLOW (ohm.m) | 18.91 | 33 |
| **Δ Res (Deep − Shallow)** | **1.09** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2845 m MD — Interval 2842.5 – 2847.5 m

**Sample Description (spreadsheet):** Sample 2845m: 25% Siltstone, 75% very fine to fine Sandstone, grading to arenaceous siltstone 70% mod bright FLUOR in SST. TG 162U

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 70.0% nan |
| Total Gas | 162.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2840m: lt-med grey,lt grysh brn, vf-f,g/t aren SLTST i/p,v wl srt,sbang- sbrnd,mnr slty lams,wk-mod sil cmt, com gry-brn slty mtx,tr carb spks,fri, mnr mod hd,v pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 108.2 | 33 |
| RES_DEEP (ohm.m) | 19.78 | 33 |
| RES_SHALLOW (ohm.m) | 19.01 | 33 |
| **Δ Res (Deep − Shallow)** | **0.77** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2850 m MD — Interval 2847.5 – 2852.5 m

**Sample Description (spreadsheet):** Sample 2850m: 20% Siltstone, 80% very fine to fine Sandstone, grading to arenaceous siltstone 70% mod bright FLUOR in SST. TG 166U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 70.0% nan |
| Total Gas | 166.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2840m: lt-med grey,lt grysh brn, vf-f,g/t aren SLTST i/p,v wl srt,sbang- sbrnd,mnr slty lams,wk-mod sil cmt, com gry-brn slty mtx,tr carb spks,fri, mnr mod hd,v pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.1 | 33 |
| RES_DEEP (ohm.m) | 22.59 | 33 |
| RES_SHALLOW (ohm.m) | 21.54 | 33 |
| **Δ Res (Deep − Shallow)** | **1.06** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2855 m MD — Interval 2852.5 – 2857.5 m

**Sample Description (spreadsheet):** Sample 2855m: 10% Siltstone, 90% very fine to fine Sandstone, grading to arenaceous siltstone 80% mod bright FLUOR in SST. TG 203U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 80.0% nan |
| Total Gas | 203.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2840m: lt-med grey,lt grysh brn, vf-f,g/t aren SLTST i/p,v wl srt,sbang- sbrnd,mnr slty lams,wk-mod sil cmt, com gry-brn slty mtx,tr carb spks,fri, mnr mod hd,v pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.3 | 33 |
| RES_DEEP (ohm.m) | 23.25 | 33 |
| RES_SHALLOW (ohm.m) | 22.02 | 33 |
| **Δ Res (Deep − Shallow)** | **1.23** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2860 m MD — Interval 2857.5 – 2862.5 m

**Sample Description (spreadsheet):** Sample 2860m: 5% Siltstone, 95% very fine to medium Sandstone, 100% mod bright to bright FLUOR in SST. TG 247U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to medium (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 247.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.5 | 33 |
| RES_DEEP (ohm.m) | 22.61 | 33 |
| RES_SHALLOW (ohm.m) | 21.65 | 33 |
| **Δ Res (Deep − Shallow)** | **0.95** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2865 m MD — Interval 2862.5 – 2867.5 m

**Sample Description (spreadsheet):** Sample 2865m: Trace Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% mod bright to bright FLUOR in SST. TG 215U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Fluorescence | 100.0% Siltstone, 100% very fine to medium, trace coarse Sandstone, 100% mod bright to bright |
| Total Gas | 215.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.9 | 33 |
| RES_DEEP (ohm.m) | 21.71 | 33 |
| RES_SHALLOW (ohm.m) | 20.76 | 33 |
| **Δ Res (Deep − Shallow)** | **0.95** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2870 m MD — Interval 2867.5 – 2872.5 m

**Sample Description (spreadsheet):** Sample 2870m: 100% very fine to medium, trace coarse Sandstone, 100% bright FLUOR in SST. TG 236U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Fluorescence | 100.0% coarse Sandstone, 100% bright |
| Total Gas | 236.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.3 | 33 |
| RES_DEEP (ohm.m) | 21.10 | 33 |
| RES_SHALLOW (ohm.m) | 20.45 | 33 |
| **Δ Res (Deep − Shallow)** | **0.65** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2875 m MD — Interval 2872.5 – 2877.5 m

**Sample Description (spreadsheet):** Sample 2875m: 100% very fine to fine, minor medium, trace coarse Sandstone, 100% bright FLUOR in SST. TG 268U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, minor medium, trace coarse (max: nan) |
| Fluorescence | 100.0% coarse Sandstone, 100% bright |
| Total Gas | 268.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.7 | 33 |
| RES_DEEP (ohm.m) | 21.45 | 33 |
| RES_SHALLOW (ohm.m) | 20.83 | 33 |
| **Δ Res (Deep − Shallow)** | **0.61** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2880 m MD — Interval 2877.5 – 2882.5 m

**Sample Description (spreadsheet):** Sample 2880m: 100% very fine to fine, minor medium Sandstone, 100% bright FLUOR in SST. TG 232U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, minor medium (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 232.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.3 | 33 |
| RES_DEEP (ohm.m) | 22.15 | 33 |
| RES_SHALLOW (ohm.m) | 21.69 | 33 |
| **Δ Res (Deep − Shallow)** | **0.46** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2885 m MD — Interval 2882.5 – 2887.5 m

**Sample Description (spreadsheet):** Sample 2885m: 5% Siltstone, 95% very fine to medium, trace coarse, Sandstone, 100% bright FLUOR in SST. TG 244U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Fluorescence | 100.0% coarse, Sandstone, 100% bright |
| Total Gas | 244.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.9 | 32 |
| RES_DEEP (ohm.m) | 20.96 | 32 |
| RES_SHALLOW (ohm.m) | 20.75 | 32 |
| **Δ Res (Deep − Shallow)** | **0.21** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2890 m MD — Interval 2887.5 – 2892.5 m

**Sample Description (spreadsheet):** Sample 2890m: 10% Siltstone, 90% very fine to medium, rare coarse, trace very coarse Sandstone, 100% bright FLUOR in SST. TG 268U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to medium, rare coarse, trace very coarse (max: nan) |
| Fluorescence | 100.0% very coarse Sandstone, 100% bright |
| Total Gas | 268.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.9 | 33 |
| RES_DEEP (ohm.m) | 22.36 | 33 |
| RES_SHALLOW (ohm.m) | 22.25 | 33 |
| **Δ Res (Deep − Shallow)** | **0.11** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2895 m MD — Interval 2892.5 – 2897.5 m

**Sample Description (spreadsheet):** Sample 2895m: 10% Siltstone, 90% very fine to medium, rare coarse to very coarse Sandstone, 100% bright FLUOR in SST. TG 277U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to medium, rare coarse to very coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 277.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2910m: dk gry,med dk gry,med gry, aren,intrlam w/ SST i/p,arg i/p,micmic, tr carb spks,frm-sft,mnr mod hd,sbblky- blky,mnr sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.9 | 33 |
| RES_DEEP (ohm.m) | 23.92 | 33 |
| RES_SHALLOW (ohm.m) | 23.88 | 33 |
| **Δ Res (Deep − Shallow)** | **0.04** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2900 m MD — Interval 2897.5 – 2902.5 m

**Sample Description (spreadsheet):** Sample 2900m: 10% Siltstone, 90% very fine to medium, trace coarse Sandstone, 100% bright FLUOR in SST. TG 283U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Fluorescence | 100.0% coarse Sandstone, 100% bright |
| Total Gas | 283.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2910m: dk gry,med dk gry,med gry, aren,intrlam w/ SST i/p,arg i/p,micmic, tr carb spks,frm-sft,mnr mod hd,sbblky- blky,mnr sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.9 | 33 |
| RES_DEEP (ohm.m) | 22.50 | 33 |
| RES_SHALLOW (ohm.m) | 22.76 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.26** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2905 m MD — Interval 2902.5 – 2907.5 m

**Sample Description (spreadsheet):** Sample 2905m: 5% Siltstone, 95% very fine to medium Sandstone, 100% bright FLUOR in SST. TG 290U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to medium (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 290.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2910m: dk gry,med dk gry,med gry, aren,intrlam w/ SST i/p,arg i/p,micmic, tr carb spks,frm-sft,mnr mod hd,sbblky- blky,mnr sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.0 | 33 |
| RES_DEEP (ohm.m) | 22.20 | 33 |
| RES_SHALLOW (ohm.m) | 22.50 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.30** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2910 m MD — Interval 2907.5 – 2912.5 m

**Sample Description (spreadsheet):** Sample 2910m: 10% Siltstone, 90% very fine to medium, trace coarse to very coarse Sandstone, 100% bright FLUOR in SST. TG 283U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to medium, trace coarse to very coarse (max: nan) |
| Fluorescence | 100.0% coarse to very coarse Sandstone, 100% bright |
| Total Gas | 283.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2910m: dk gry,med dk gry,med gry, aren,intrlam w/ SST i/p,arg i/p,micmic, tr carb spks,frm-sft,mnr mod hd,sbblky- blky,mnr sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.3 | 32 |
| RES_DEEP (ohm.m) | 22.02 | 32 |
| RES_SHALLOW (ohm.m) | 22.17 | 32 |
| **Δ Res (Deep − Shallow)** | **-0.14** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2915 m MD — Interval 2912.5 – 2917.5 m

**Sample Description (spreadsheet):** Sample 2915m: 5% Siltstone, 95% very fine to medium Sandstone, 100% bright FLUOR in SST. TG 282U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to medium (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 282.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2910m: dk gry,med dk gry,med gry, aren,intrlam w/ SST i/p,arg i/p,micmic, tr carb spks,frm-sft,mnr mod hd,sbblky- blky,mnr sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.8 | 33 |
| RES_DEEP (ohm.m) | 21.63 | 33 |
| RES_SHALLOW (ohm.m) | 21.84 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.21** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2920 m MD — Interval 2917.5 – 2922.5 m

**Sample Description (spreadsheet):** Sample 2920m: 10% Siltstone, 90% very fine to medium Sandstone, 100% bright FLUOR in SST. TG 257U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to medium (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 257.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2910m: dk gry,med dk gry,med gry, aren,intrlam w/ SST i/p,arg i/p,micmic, tr carb spks,frm-sft,mnr mod hd,sbblky- blky,mnr sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.9 | 33 |
| RES_DEEP (ohm.m) | 24.73 | 33 |
| RES_SHALLOW (ohm.m) | 25.16 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.43** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2925 m MD — Interval 2922.5 – 2927.5 m

**Sample Description (spreadsheet):** Sample 2925m: 5% Siltstone, 95% very fine to medium Sandstone, 100% bright FLUOR in SST. TG 252U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to medium (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 252.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2910m: dk gry,med dk gry,med gry, aren,intrlam w/ SST i/p,arg i/p,micmic, tr carb spks,frm-sft,mnr mod hd,sbblky- blky,mnr sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.9 | 33 |
| RES_DEEP (ohm.m) | 24.11 | 33 |
| RES_SHALLOW (ohm.m) | 23.81 | 33 |
| **Δ Res (Deep − Shallow)** | **0.29** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2930 m MD — Interval 2927.5 – 2932.5 m

**Sample Description (spreadsheet):** Sample 2930m: 5% Siltstone, 95% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 258U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 258.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.9 | 33 |
| RES_DEEP (ohm.m) | 23.11 | 33 |
| RES_SHALLOW (ohm.m) | 22.96 | 33 |
| **Δ Res (Deep − Shallow)** | **0.15** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2935 m MD — Interval 2932.5 – 2937.5 m

**Sample Description (spreadsheet):** Sample 2935m: 5% Siltstone, 95% very fine to coarse, trace very coarse Sandstone, 100% bright FLUOR in SST. TG 265U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to coarse, trace very coarse (max: nan) |
| Fluorescence | 100.0% very coarse Sandstone, 100% bright |
| Total Gas | 265.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2950m: clr-trnsl,lt grysh brn,pl gry, vf-med,mnr crs,pr srt,sbrnd-sbang,mod wk sil cmt,occ pl gry brn arg mtx,tr carb spks, tr slty lams,com qtz ovgths,occ mod hd aggs,com-pred disagg qtz grs,pr vis por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.5 | 32 |
| RES_DEEP (ohm.m) | 24.96 | 32 |
| RES_SHALLOW (ohm.m) | 25.02 | 32 |
| **Δ Res (Deep − Shallow)** | **-0.06** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2940 m MD — Interval 2937.5 – 2942.5 m

**Sample Description (spreadsheet):** Sample 2940m: 5% Siltstone, 95% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 263U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 263.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2950m: clr-trnsl,lt grysh brn,pl gry, vf-med,mnr crs,pr srt,sbrnd-sbang,mod wk sil cmt,occ pl gry brn arg mtx,tr carb spks, tr slty lams,com qtz ovgths,occ mod hd aggs,com-pred disagg qtz grs,pr vis por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.7 | 33 |
| RES_DEEP (ohm.m) | 24.68 | 33 |
| RES_SHALLOW (ohm.m) | 24.52 | 33 |
| **Δ Res (Deep − Shallow)** | **0.15** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2945 m MD — Interval 2942.5 – 2947.5 m

**Sample Description (spreadsheet):** Sample 2945m: 100% very fine to coarse Sandstone, trace very coarse, 100% bright FLUOR in SST. TG 286U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse (max: nan) |
| Fluorescence | 100.0% very coarse, 100% bright |
| Total Gas | 286.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2950m: clr-trnsl,lt grysh brn,pl gry, vf-med,mnr crs,pr srt,sbrnd-sbang,mod wk sil cmt,occ pl gry brn arg mtx,tr carb spks, tr slty lams,com qtz ovgths,occ mod hd aggs,com-pred disagg qtz grs,pr vis por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.1 | 33 |
| RES_DEEP (ohm.m) | 25.68 | 33 |
| RES_SHALLOW (ohm.m) | 24.91 | 33 |
| **Δ Res (Deep − Shallow)** | **0.77** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2950 m MD — Interval 2947.5 – 2952.5 m

**Sample Description (spreadsheet):** Sample 2950m: 100% very fine to medium Sandstone, trace coarse, 100% bright FLUOR in SST. TG 285U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium (max: nan) |
| Fluorescence | 100.0% coarse, 100% bright |
| Total Gas | 285.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2950m: clr-trnsl,lt grysh brn,pl gry, vf-med,mnr crs,pr srt,sbrnd-sbang,mod wk sil cmt,occ pl gry brn arg mtx,tr carb spks, tr slty lams,com qtz ovgths,occ mod hd aggs,com-pred disagg qtz grs,pr vis por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.6 | 33 |
| RES_DEEP (ohm.m) | 26.55 | 33 |
| RES_SHALLOW (ohm.m) | 25.23 | 33 |
| **Δ Res (Deep − Shallow)** | **1.32** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2955 m MD — Interval 2952.5 – 2957.5 m

**Sample Description (spreadsheet):** Sample 2955m: 5% Siltstone, 95% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 288U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 288.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2950m: clr-trnsl,lt grysh brn,pl gry, vf-med,mnr crs,pr srt,sbrnd-sbang,mod wk sil cmt,occ pl gry brn arg mtx,tr carb spks, tr slty lams,com qtz ovgths,occ mod hd aggs,com-pred disagg qtz grs,pr vis por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.7 | 33 |
| RES_DEEP (ohm.m) | 28.87 | 33 |
| RES_SHALLOW (ohm.m) | 27.40 | 33 |
| **Δ Res (Deep − Shallow)** | **1.47** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2960 m MD — Interval 2957.5 – 2962.5 m

**Sample Description (spreadsheet):** Sample 2960m: 10% Siltstone, 90% very fine to medium, trace coarse Sandstone, 100% bright FLUOR in SST. TG 297U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Fluorescence | 100.0% coarse Sandstone, 100% bright |
| Total Gas | 297.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2950m: clr-trnsl,lt grysh brn,pl gry, vf-med,mnr crs,pr srt,sbrnd-sbang,mod wk sil cmt,occ pl gry brn arg mtx,tr carb spks, tr slty lams,com qtz ovgths,occ mod hd aggs,com-pred disagg qtz grs,pr vis por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.5 | 32 |
| RES_DEEP (ohm.m) | 29.21 | 32 |
| RES_SHALLOW (ohm.m) | 27.17 | 32 |
| **Δ Res (Deep − Shallow)** | **2.04** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2965 m MD — Interval 2962.5 – 2967.5 m

**Sample Description (spreadsheet):** Sample 2965m: 5% Siltstone, 95% very fine to medium, trace coarse Sandstone, 100% bright FLUOR in SST. TG 295U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Fluorescence | 100.0% coarse Sandstone, 100% bright |
| Total Gas | 295.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2950m: clr-trnsl,lt grysh brn,pl gry, vf-med,mnr crs,pr srt,sbrnd-sbang,mod wk sil cmt,occ pl gry brn arg mtx,tr carb spks, tr slty lams,com qtz ovgths,occ mod hd aggs,com-pred disagg qtz grs,pr vis por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.1 | 33 |
| RES_DEEP (ohm.m) | 30.68 | 33 |
| RES_SHALLOW (ohm.m) | 28.40 | 33 |
| **Δ Res (Deep − Shallow)** | **2.28** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2970 m MD — Interval 2967.5 – 2972.5 m

**Sample Description (spreadsheet):** Sample 2970m: 10% Siltstone, 90% very fine to medium, trace coarse Sandstone, 100% bright FLUOR in SST. TG 290U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Fluorescence | 100.0% coarse Sandstone, 100% bright |
| Total Gas | 290.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.2 | 33 |
| RES_DEEP (ohm.m) | 32.21 | 33 |
| RES_SHALLOW (ohm.m) | 29.48 | 33 |
| **Δ Res (Deep − Shallow)** | **2.73** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2975 m MD — Interval 2972.5 – 2977.5 m

**Sample Description (spreadsheet):** Sample 2975m:  10% Siltstone, 90%very fine to coarse Sandstone, 100% brightFLUOR in SST. TG 280U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | Siltstone, 90%very fine to coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 280.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2990m: lt grysh brn,lt gry,clr,trnsl, vf-crs,mnr crs,v pr srt,sbang-sbrnd,tr ang crs,wk-mod sil cmt,mnr gry-brn arg mtx,tr carb spks,tr mic flks,fri,mnr mod hd,com disagg,pr vis por,gd inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.8 | 33 |
| RES_DEEP (ohm.m) | 29.33 | 33 |
| RES_SHALLOW (ohm.m) | 26.92 | 33 |
| **Δ Res (Deep − Shallow)** | **2.41** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2980 m MD — Interval 2977.5 – 2982.5 m

**Sample Description (spreadsheet):** Sample 2980m 15% Siltstone, 85% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 267U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 267.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2990m: lt grysh brn,lt gry,clr,trnsl, vf-crs,mnr crs,v pr srt,sbang-sbrnd,tr ang crs,wk-mod sil cmt,mnr gry-brn arg mtx,tr carb spks,tr mic flks,fri,mnr mod hd,com disagg,pr vis por,gd inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.1 | 33 |
| RES_DEEP (ohm.m) | 26.74 | 33 |
| RES_SHALLOW (ohm.m) | 24.34 | 33 |
| **Δ Res (Deep − Shallow)** | **2.40** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2985 m MD — Interval 2982.5 – 2987.5 m

**Sample Description (spreadsheet):** Sample 2985m 15% Siltstone, 85% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 260U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 260.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2990m: lt grysh brn,lt gry,clr,trnsl, vf-crs,mnr crs,v pr srt,sbang-sbrnd,tr ang crs,wk-mod sil cmt,mnr gry-brn arg mtx,tr carb spks,tr mic flks,fri,mnr mod hd,com disagg,pr vis por,gd inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.5 | 33 |
| RES_DEEP (ohm.m) | 29.77 | 33 |
| RES_SHALLOW (ohm.m) | 26.76 | 33 |
| **Δ Res (Deep − Shallow)** | **3.01** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2990 m MD — Interval 2987.5 – 2992.5 m

**Sample Description (spreadsheet):** Sample 2990m 20% Siltstone, 80% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 232U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 232.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2990m: lt grysh brn,lt gry,clr,trnsl, vf-crs,mnr crs,v pr srt,sbang-sbrnd,tr ang crs,wk-mod sil cmt,mnr gry-brn arg mtx,tr carb spks,tr mic flks,fri,mnr mod hd,com disagg,pr vis por,gd inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 111.8 | 32 |
| RES_DEEP (ohm.m) | 26.89 | 32 |
| RES_SHALLOW (ohm.m) | 23.89 | 32 |
| **Δ Res (Deep − Shallow)** | **3.00** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2995 m MD — Interval 2992.5 – 2997.5 m

**Sample Description (spreadsheet):** Sample 2995m 20% Siltstone, 80% very fine to coarse Sandstone, 85% mod bright FLUOR in SST. TG 214U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to coarse (max: nan) |
| Fluorescence | 85.0% nan |
| Total Gas | 214.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2990m: lt grysh brn,lt gry,clr,trnsl, vf-crs,mnr crs,v pr srt,sbang-sbrnd,tr ang crs,wk-mod sil cmt,mnr gry-brn arg mtx,tr carb spks,tr mic flks,fri,mnr mod hd,com disagg,pr vis por,gd inf por,
- **SANDSTONE** @ ~3010m: clr-trnsl,pl gry,vf-crs,pr srt,sbrnd-sbang,mod strg sil mtx,mnr pl gry brn arg mtx,tr carb spks,rr qtz ovgths, mod hd-fri aggs,pred lse,cln qtz grs,pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.4 | 33 |
| RES_DEEP (ohm.m) | 28.52 | 33 |
| RES_SHALLOW (ohm.m) | 25.30 | 33 |
| **Δ Res (Deep − Shallow)** | **3.22** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3000 m MD — Interval 2997.5 – 3002.5 m

**Sample Description (spreadsheet):** Sample 3000m 20% Siltstone, 80% very fine to coarse Sandstone, 65% mod bright FLUOR in SST. TG 190U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to coarse (max: nan) |
| Fluorescence | 65.0% nan |
| Total Gas | 190.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2990m: lt grysh brn,lt gry,clr,trnsl, vf-crs,mnr crs,v pr srt,sbang-sbrnd,tr ang crs,wk-mod sil cmt,mnr gry-brn arg mtx,tr carb spks,tr mic flks,fri,mnr mod hd,com disagg,pr vis por,gd inf por,
- **SANDSTONE** @ ~3010m: clr-trnsl,pl gry,vf-crs,pr srt,sbrnd-sbang,mod strg sil mtx,mnr pl gry brn arg mtx,tr carb spks,rr qtz ovgths, mod hd-fri aggs,pred lse,cln qtz grs,pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 109.9 | 33 |
| RES_DEEP (ohm.m) | 26.53 | 33 |
| RES_SHALLOW (ohm.m) | 23.84 | 33 |
| **Δ Res (Deep − Shallow)** | **2.68** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3005 m MD — Interval 3002.5 – 3007.5 m

**Sample Description (spreadsheet):** Sample 3005m 30% Siltstone, 70% very fine to coarse Sandstone, 70% mod bright FLUOR in SST. TG 202U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | very fine to coarse (max: nan) |
| Fluorescence | 70.0% nan |
| Total Gas | 202.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2990m: lt grysh brn,lt gry,clr,trnsl, vf-crs,mnr crs,v pr srt,sbang-sbrnd,tr ang crs,wk-mod sil cmt,mnr gry-brn arg mtx,tr carb spks,tr mic flks,fri,mnr mod hd,com disagg,pr vis por,gd inf por,
- **SANDSTONE** @ ~3010m: clr-trnsl,pl gry,vf-crs,pr srt,sbrnd-sbang,mod strg sil mtx,mnr pl gry brn arg mtx,tr carb spks,rr qtz ovgths, mod hd-fri aggs,pred lse,cln qtz grs,pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 113.8 | 33 |
| RES_DEEP (ohm.m) | 24.83 | 33 |
| RES_SHALLOW (ohm.m) | 23.49 | 33 |
| **Δ Res (Deep − Shallow)** | **1.34** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3010 m MD — Interval 3007.5 – 3012.5 m

**Sample Description (spreadsheet):** Sample 3010m 40% Siltstone, 60% very fine to coarse Sandstone, 70% mod bright FLUOR in SST. TG 200U

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | very fine to coarse (max: nan) |
| Fluorescence | 70.0% nan |
| Total Gas | 200.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3010m: clr-trnsl,pl gry,vf-crs,pr srt,sbrnd-sbang,mod strg sil mtx,mnr pl gry brn arg mtx,tr carb spks,rr qtz ovgths, mod hd-fri aggs,pred lse,cln qtz grs,pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 109.4 | 33 |
| RES_DEEP (ohm.m) | 25.33 | 33 |
| RES_SHALLOW (ohm.m) | 24.05 | 33 |
| **Δ Res (Deep − Shallow)** | **1.29** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3015 m MD — Interval 3012.5 – 3017.5 m

**Sample Description (spreadsheet):** Sample 3015m 40% Siltstone, 60% very fine to coarse Sandstone, 70% mod bright FLUOR in SST. TG 234U

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | very fine to coarse (max: nan) |
| Fluorescence | 70.0% nan |
| Total Gas | 234.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3010m: clr-trnsl,pl gry,vf-crs,pr srt,sbrnd-sbang,mod strg sil mtx,mnr pl gry brn arg mtx,tr carb spks,rr qtz ovgths, mod hd-fri aggs,pred lse,cln qtz grs,pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.9 | 32 |
| RES_DEEP (ohm.m) | 24.25 | 32 |
| RES_SHALLOW (ohm.m) | 22.22 | 32 |
| **Δ Res (Deep − Shallow)** | **2.03** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3020 m MD — Interval 3017.5 – 3022.5 m

**Sample Description (spreadsheet):** Sample 3020m 30% Siltstone, 70% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 248U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | very fine to coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 248.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3010m: clr-trnsl,pl gry,vf-crs,pr srt,sbrnd-sbang,mod strg sil mtx,mnr pl gry brn arg mtx,tr carb spks,rr qtz ovgths, mod hd-fri aggs,pred lse,cln qtz grs,pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.8 | 33 |
| RES_DEEP (ohm.m) | 24.07 | 33 |
| RES_SHALLOW (ohm.m) | 22.16 | 33 |
| **Δ Res (Deep − Shallow)** | **1.91** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3025 m MD — Interval 3022.5 – 3027.5 m

**Sample Description (spreadsheet):** Sample 3025m 20% Siltstone, 80% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 253U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 253.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3010m: clr-trnsl,pl gry,vf-crs,pr srt,sbrnd-sbang,mod strg sil mtx,mnr pl gry brn arg mtx,tr carb spks,rr qtz ovgths, mod hd-fri aggs,pred lse,cln qtz grs,pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.8 | 33 |
| RES_DEEP (ohm.m) | 24.74 | 33 |
| RES_SHALLOW (ohm.m) | 22.83 | 33 |
| **Δ Res (Deep − Shallow)** | **1.91** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3030 m MD — Interval 3027.5 – 3032.5 m

**Sample Description (spreadsheet):** Sample 3030m 10% Siltstone, 90% very fine to coarse, predominantly medium-coarse Sandstone, 100% bright FLUOR in SST. TG 295U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to coarse, predominantly medium-coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 295.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.3 | 33 |
| RES_DEEP (ohm.m) | 25.48 | 33 |
| RES_SHALLOW (ohm.m) | 24.85 | 33 |
| **Δ Res (Deep − Shallow)** | **0.62** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3035 m MD — Interval 3032.5 – 3037.5 m

**Sample Description (spreadsheet):** Sample 3035m 10% Siltstone, 90% very fine to coarse, predominantly medium-coarse Sandstone, 100% bright FLUOR in SST. TG 252U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to coarse, predominantly medium-coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 252.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.2 | 33 |
| RES_DEEP (ohm.m) | 23.89 | 33 |
| RES_SHALLOW (ohm.m) | 23.11 | 33 |
| **Δ Res (Deep − Shallow)** | **0.78** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3040 m MD — Interval 3037.5 – 3042.5 m

**Sample Description (spreadsheet):** Sample 3040m 10% Siltstone, 90% very fine to fine, occasional medium-coarse Sandstone, 100% bright FLUOR in SST. TG 255U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, occasional medium-coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 255.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.8 | 32 |
| RES_DEEP (ohm.m) | 24.69 | 32 |
| RES_SHALLOW (ohm.m) | 24.33 | 32 |
| **Δ Res (Deep − Shallow)** | **0.35** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3045 m MD — Interval 3042.5 – 3047.5 m

**Sample Description (spreadsheet):** Sample 3045m 5% Siltstone, 95% very fine to fine, occasional medium-coarse Sandstone, 100% bright FLUOR in SST. TG 270U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine, occasional medium-coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 270.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.0 | 33 |
| RES_DEEP (ohm.m) | 23.20 | 33 |
| RES_SHALLOW (ohm.m) | 23.66 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.46** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3050 m MD — Interval 3047.5 – 3052.5 m

**Sample Description (spreadsheet):** Sample 3050m 10% Siltstone, 90% very fine to fine, occasional medium-coarse Sandstone, 100% bright FLUOR in SST. TG 245U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, occasional medium-coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 245.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.4 | 33 |
| RES_DEEP (ohm.m) | 21.34 | 33 |
| RES_SHALLOW (ohm.m) | 21.64 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.30** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3055 m MD — Interval 3052.5 – 3057.5 m

**Sample Description (spreadsheet):** Sample 3055m 10% Siltstone, 90% very fine to med, occasional coarse Sandstone, 100% bright FLUOR in SST. TG 251U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to med, occasional coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 251.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.1 | 33 |
| RES_DEEP (ohm.m) | 21.76 | 33 |
| RES_SHALLOW (ohm.m) | 22.03 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.27** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3060 m MD — Interval 3057.5 – 3062.5 m

**Sample Description (spreadsheet):** Sample 3060m 20% Siltstone, 80% very fine to med, occasional coarse Sandstone, 100% bright FLUOR in SST. TG 245U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to med, occasional coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 245.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.3 | 33 |
| RES_DEEP (ohm.m) | 22.19 | 33 |
| RES_SHALLOW (ohm.m) | 22.18 | 33 |
| **Δ Res (Deep − Shallow)** | **0.01** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3065 m MD — Interval 3062.5 – 3067.5 m

**Sample Description (spreadsheet):** Sample 3065m 30% Siltstone, 70% very fine to fine, occasional medium to coarse Sandstone, 100% bright FLUOR in SST. TG 232U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | very fine to fine, occasional medium to coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 232.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.2 | 32 |
| RES_DEEP (ohm.m) | 20.91 | 32 |
| RES_SHALLOW (ohm.m) | 21.09 | 32 |
| **Δ Res (Deep − Shallow)** | **-0.18** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3070 m MD — Interval 3067.5 – 3072.5 m

**Sample Description (spreadsheet):** Sample 3070m 20% Siltstone, 80% very fine to fine, occasional medium to coarse Sandstone, 100% bright FLUOR in SST. TG 288U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine, occasional medium to coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 288.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.3 | 33 |
| RES_DEEP (ohm.m) | 21.74 | 33 |
| RES_SHALLOW (ohm.m) | 21.76 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.02** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3075 m MD — Interval 3072.5 – 3077.5 m

**Sample Description (spreadsheet):** Sample 3075m 20% Siltstone, 80% very fine to fine, occasional medium to coarse Sandstone, 100% bright FLUOR in SST. TG 268U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine, occasional medium to coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 268.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3090m: clr-trnsl,v pl gry brn,vf-f, occ med,wl srt,sbang-sbrnd,mod strg sil cmt,com pl gry arg mtx,mod hd-fri, pred lse cln qtz grs,mnr qtz ovgths,pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.3 | 33 |
| RES_DEEP (ohm.m) | 21.69 | 33 |
| RES_SHALLOW (ohm.m) | 21.50 | 33 |
| **Δ Res (Deep − Shallow)** | **0.19** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3080 m MD — Interval 3077.5 – 3082.5 m

**Sample Description (spreadsheet):** Sample 3080m 10% Siltstone, 90% very fine to fine, rare medium Sandstone, 100% bright FLUOR in SST. TG 287U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, rare medium (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 287.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3090m: clr-trnsl,v pl gry brn,vf-f, occ med,wl srt,sbang-sbrnd,mod strg sil cmt,com pl gry arg mtx,mod hd-fri, pred lse cln qtz grs,mnr qtz ovgths,pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.3 | 33 |
| RES_DEEP (ohm.m) | 21.73 | 33 |
| RES_SHALLOW (ohm.m) | 21.77 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.03** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3085 m MD — Interval 3082.5 – 3087.5 m

**Sample Description (spreadsheet):** Sample 3085m 10% Siltstone, 90% very fine to fine, occasionally medium Sandstone, 100% bright FLUOR in SST. TG 282U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, occasionally medium (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 282.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3090m: clr-trnsl,v pl gry brn,vf-f, occ med,wl srt,sbang-sbrnd,mod strg sil cmt,com pl gry arg mtx,mod hd-fri, pred lse cln qtz grs,mnr qtz ovgths,pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.1 | 33 |
| RES_DEEP (ohm.m) | 23.13 | 33 |
| RES_SHALLOW (ohm.m) | 23.85 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.72** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3090 m MD — Interval 3087.5 – 3092.5 m

**Sample Description (spreadsheet):** Sample 3090m: 10% Siltstone, 90% very fine to fine, occasionally medium Sandstone. 100% bright FLUOR in SST. TG 284U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, occasionally medium (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 284.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3090m: clr-trnsl,v pl gry brn,vf-f, occ med,wl srt,sbang-sbrnd,mod strg sil cmt,com pl gry arg mtx,mod hd-fri, pred lse cln qtz grs,mnr qtz ovgths,pr vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.2 | 32 |
| RES_DEEP (ohm.m) | 22.79 | 32 |
| RES_SHALLOW (ohm.m) | 23.00 | 32 |
| **Δ Res (Deep − Shallow)** | **-0.22** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3095 m MD — Interval 3092.5 – 3097.5 m

**Sample Description (spreadsheet):** Sample 3095m: 5% Siltstone, 95% very fine to fine Sandstone. 100% bright FLUOR in SST. TG 302U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 302.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3090m: clr-trnsl,v pl gry brn,vf-f, occ med,wl srt,sbang-sbrnd,mod strg sil cmt,com pl gry arg mtx,mod hd-fri, pred lse cln qtz grs,mnr qtz ovgths,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~3110m: v pl gry brn,clr,trnsl,vf-f, v wl srt,sbang-sbrnd,mod sil cmt,com pl gry arg mtx,fri-mod hd,com vf-f disagg qtz grs,com lse fri,mnr mod hd, pr vis por,fr-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.5 | 33 |
| RES_DEEP (ohm.m) | 22.07 | 33 |
| RES_SHALLOW (ohm.m) | 21.98 | 33 |
| **Δ Res (Deep − Shallow)** | **0.09** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3100 m MD — Interval 3097.5 – 3102.5 m

**Sample Description (spreadsheet):** Sample 3100m: 5% Siltstone, 95% very fine to fine Sandstone. 100% bright FLUOR in SST. TG 294U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 294.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3090m: clr-trnsl,v pl gry brn,vf-f, occ med,wl srt,sbang-sbrnd,mod strg sil cmt,com pl gry arg mtx,mod hd-fri, pred lse cln qtz grs,mnr qtz ovgths,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~3110m: v pl gry brn,clr,trnsl,vf-f, v wl srt,sbang-sbrnd,mod sil cmt,com pl gry arg mtx,fri-mod hd,com vf-f disagg qtz grs,com lse fri,mnr mod hd, pr vis por,fr-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.3 | 33 |
| RES_DEEP (ohm.m) | 21.41 | 33 |
| RES_SHALLOW (ohm.m) | 21.20 | 33 |
| **Δ Res (Deep − Shallow)** | **0.21** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3105 m MD — Interval 3102.5 – 3107.5 m

**Sample Description (spreadsheet):** Sample 3105m: 10% Siltstone, 90% very fine to fine Sandstone. 100% bright FLUOR in SST. TG 255U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 255.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3090m: clr-trnsl,v pl gry brn,vf-f, occ med,wl srt,sbang-sbrnd,mod strg sil cmt,com pl gry arg mtx,mod hd-fri, pred lse cln qtz grs,mnr qtz ovgths,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~3110m: v pl gry brn,clr,trnsl,vf-f, v wl srt,sbang-sbrnd,mod sil cmt,com pl gry arg mtx,fri-mod hd,com vf-f disagg qtz grs,com lse fri,mnr mod hd, pr vis por,fr-gd inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.6 | 33 |
| RES_DEEP (ohm.m) | 20.34 | 33 |
| RES_SHALLOW (ohm.m) | 19.99 | 33 |
| **Δ Res (Deep − Shallow)** | **0.35** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3110 m MD — Interval 3107.5 – 3112.5 m

**Sample Description (spreadsheet):** Sample 3110m: 10% Siltstone, 90% very fine to fine Sandstone, minor loose. 100% bright FLUOR in SST. TG 284U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 284.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3110m: v pl gry brn,clr,trnsl,vf-f, v wl srt,sbang-sbrnd,mod sil cmt,com pl gry arg mtx,fri-mod hd,com vf-f disagg qtz grs,com lse fri,mnr mod hd, pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~3120m: v pl gry brn,lt gry,clr,trnsl, vf-f,tr slty lams,wl srt,sbang-sbrnd,mod sil cmt,com gry-brn arg mtx,fri,mnr mod 69 / 6 / 5 / 9 / 11 314 U hd,mnr disagg f qtz grs,pr-v pr vis por, fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.0 | 33 |
| RES_DEEP (ohm.m) | 19.37 | 33 |
| RES_SHALLOW (ohm.m) | 19.12 | 33 |
| **Δ Res (Deep − Shallow)** | **0.24** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3115 m MD — Interval 3112.5 – 3117.5 m

**Sample Description (spreadsheet):** Sample 3115m: 5% Siltstone, 95% very fine to fine Sandstone, common loose. 100% bright FLUOR in SST. TG 257U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 257.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3110m: v pl gry brn,clr,trnsl,vf-f, v wl srt,sbang-sbrnd,mod sil cmt,com pl gry arg mtx,fri-mod hd,com vf-f disagg qtz grs,com lse fri,mnr mod hd, pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~3120m: v pl gry brn,lt gry,clr,trnsl, vf-f,tr slty lams,wl srt,sbang-sbrnd,mod sil cmt,com gry-brn arg mtx,fri,mnr mod 69 / 6 / 5 / 9 / 11 314 U hd,mnr disagg f qtz grs,pr-v pr vis por, fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.9 | 33 |
| RES_DEEP (ohm.m) | 19.65 | 33 |
| RES_SHALLOW (ohm.m) | 19.22 | 33 |
| **Δ Res (Deep − Shallow)** | **0.43** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3120 m MD — Interval 3117.5 – 3122.5 m

**Sample Description (spreadsheet):** Sample 3120m: 10% Siltstone, 90% very fine to fine, trace medium, Sandstone, common loose. 100% bright FLUOR in SST. TG 266U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, trace medium (max: nan) |
| Fluorescence | 100.0% medium, Sandstone, common loose. 100% bright |
| Total Gas | 266.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3110m: v pl gry brn,clr,trnsl,vf-f, v wl srt,sbang-sbrnd,mod sil cmt,com pl gry arg mtx,fri-mod hd,com vf-f disagg qtz grs,com lse fri,mnr mod hd, pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~3120m: v pl gry brn,lt gry,clr,trnsl, vf-f,tr slty lams,wl srt,sbang-sbrnd,mod sil cmt,com gry-brn arg mtx,fri,mnr mod 69 / 6 / 5 / 9 / 11 314 U hd,mnr disagg f qtz grs,pr-v pr vis por, fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.4 | 32 |
| RES_DEEP (ohm.m) | 18.77 | 32 |
| RES_SHALLOW (ohm.m) | 18.87 | 32 |
| **Δ Res (Deep − Shallow)** | **-0.09** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3125 m MD — Interval 3122.5 – 3127.5 m

**Sample Description (spreadsheet):** Sample 3125m: 5% Siltstone, 95% very fine to fine Sandstone, common loose. 100% bright FLUOR in SST. TG 311U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 311.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3110m: v pl gry brn,clr,trnsl,vf-f, v wl srt,sbang-sbrnd,mod sil cmt,com pl gry arg mtx,fri-mod hd,com vf-f disagg qtz grs,com lse fri,mnr mod hd, pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~3120m: v pl gry brn,lt gry,clr,trnsl, vf-f,tr slty lams,wl srt,sbang-sbrnd,mod sil cmt,com gry-brn arg mtx,fri,mnr mod 69 / 6 / 5 / 9 / 11 314 U hd,mnr disagg f qtz grs,pr-v pr vis por, fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.9 | 33 |
| RES_DEEP (ohm.m) | 19.22 | 33 |
| RES_SHALLOW (ohm.m) | 19.26 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.04** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3130 m MD — Interval 3127.5 – 3132.5 m

**Sample Description (spreadsheet):** Sample 3130m: trace Siltstone, 100% very fine to fine Sandstone, minorloose. 100% bright FLUOR in SST. TG 290U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% Siltstone, 100% very fine to fine Sandstone, minorloose. 100% bright |
| Total Gas | 290.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3120m: v pl gry brn,lt gry,clr,trnsl, vf-f,tr slty lams,wl srt,sbang-sbrnd,mod sil cmt,com gry-brn arg mtx,fri,mnr mod 69 / 6 / 5 / 9 / 11 314 U hd,mnr disagg f qtz grs,pr-v pr vis por, fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.1 | 33 |
| RES_DEEP (ohm.m) | 19.08 | 33 |
| RES_SHALLOW (ohm.m) | 19.11 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.03** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3135 m MD — Interval 3132.5 – 3137.5 m

**Sample Description (spreadsheet):** Sample 3135m: trace Siltstone, 100% very fine to fine Sandstone, minor loose. 100% bright FLUOR in SST. TG 267U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% Siltstone, 100% very fine to fine Sandstone, minor loose. 100% bright |
| Total Gas | 267.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3120m: v pl gry brn,lt gry,clr,trnsl, vf-f,tr slty lams,wl srt,sbang-sbrnd,mod sil cmt,com gry-brn arg mtx,fri,mnr mod 69 / 6 / 5 / 9 / 11 314 U hd,mnr disagg f qtz grs,pr-v pr vis por, fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.6 | 33 |
| RES_DEEP (ohm.m) | 19.15 | 33 |
| RES_SHALLOW (ohm.m) | 19.16 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.02** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3140 m MD — Interval 3137.5 – 3142.5 m

**Sample Description (spreadsheet):** Sample 3140m: trace Siltstone, 100% very fine to medium, rare coarse Sandstone, common loose. 100% bright FLUOR in SST. TG 268U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, rare coarse (max: nan) |
| Fluorescence | 100.0% Siltstone, 100% very fine to medium, rare coarse Sandstone, common loose. 100% bright |
| Total Gas | 268.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.6 | 33 |
| RES_DEEP (ohm.m) | 19.00 | 33 |
| RES_SHALLOW (ohm.m) | 18.87 | 33 |
| **Δ Res (Deep − Shallow)** | **0.13** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3145 m MD — Interval 3142.5 – 3147.5 m

**Sample Description (spreadsheet):** Sample 3145m: 100% very fine to medium, rare coarse Sandstone, common loose. 100% bright FLUOR in SST. TG 269U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, rare coarse (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 269.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.3 | 32 |
| RES_DEEP (ohm.m) | 18.06 | 32 |
| RES_SHALLOW (ohm.m) | 18.01 | 32 |
| **Δ Res (Deep − Shallow)** | **0.05** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3150 m MD — Interval 3147.5 – 3152.5 m

**Sample Description (spreadsheet):** Sample 3150m: 5% Siltstone, 95% very fine to medium, trace coarse Sandstone, common loose. 100% bright FLUOR in SST. TG 276U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to medium, trace coarse (max: nan) |
| Fluorescence | 100.0% coarse Sandstone, common loose. 100% bright |
| Total Gas | 276.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.9 | 33 |
| RES_DEEP (ohm.m) | 17.77 | 33 |
| RES_SHALLOW (ohm.m) | 17.71 | 33 |
| **Δ Res (Deep − Shallow)** | **0.06** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3155 m MD — Interval 3152.5 – 3157.5 m

**Sample Description (spreadsheet):** Sample 3155m: 5% Siltstone, 95% very fine to coarse, trace vrey coarse Sandstone, common loose. 100% bright FLUOR in SST. TG 266U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to coarse, trace vrey coarse (max: nan) |
| Fluorescence | 100.0% vrey coarse Sandstone, common loose. 100% bright |
| Total Gas | 266.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3170m: grysh blk-v dk gry, arg,aren i/p,frm,mnr mod hd,sbfiss. SURVEY @ 3175.4m INC: 88.56° AZI: 82.14°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.5 | 33 |
| RES_DEEP (ohm.m) | 17.47 | 33 |
| RES_SHALLOW (ohm.m) | 17.55 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.08** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3160 m MD — Interval 3157.5 – 3162.5 m

**Sample Description (spreadsheet):** Sample 3160m: 5% Siltstone, 95% very fine to coarse, trace very coarse Sandstone, common loose. 100% bright FLUOR in SST. TG 257U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to coarse, trace very coarse (max: nan) |
| Fluorescence | 100.0% very coarse Sandstone, common loose. 100% bright |
| Total Gas | 257.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3170m: grysh blk-v dk gry, arg,aren i/p,frm,mnr mod hd,sbfiss. SURVEY @ 3175.4m INC: 88.56° AZI: 82.14°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.1 | 33 |
| RES_DEEP (ohm.m) | 18.14 | 33 |
| RES_SHALLOW (ohm.m) | 18.15 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.01** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3165 m MD — Interval 3162.5 – 3167.5 m

**Sample Description (spreadsheet):** Sample 3165m: 5% Siltstone, 95% very fine to fine Sandstone, common loose. 100% bright FLUOR in SST. TG 259U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 259.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3170m: grysh blk-v dk gry, arg,aren i/p,frm,mnr mod hd,sbfiss. SURVEY @ 3175.4m INC: 88.56° AZI: 82.14°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.7 | 33 |
| RES_DEEP (ohm.m) | 18.01 | 33 |
| RES_SHALLOW (ohm.m) | 17.86 | 33 |
| **Δ Res (Deep − Shallow)** | **0.16** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3170 m MD — Interval 3167.5 – 3172.5 m

**Sample Description (spreadsheet):** Sample 3170m: 5% Siltstone, 95% very fine to fine Sandstone, minor Medium, common loose. 100% bright FLUOR in SST. TG 263U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 100.0% nan |
| Total Gas | 263.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3170m: grysh blk-v dk gry, arg,aren i/p,frm,mnr mod hd,sbfiss. SURVEY @ 3175.4m INC: 88.56° AZI: 82.14°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.8 | 32 |
| RES_DEEP (ohm.m) | 18.12 | 32 |
| RES_SHALLOW (ohm.m) | 18.10 | 32 |
| **Δ Res (Deep − Shallow)** | **0.01** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3175 m MD — Interval 3172.5 – 3177.5 m

**Sample Description (spreadsheet):** Sample 3175m: 5% CARB Siltstone, 20, Siltstone, 75% very fine to medium Sandstone, trace coarse, common loose. 50% moderately bright FLUOR in SST. TG 223U

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | very fine to medium (max: nan) |
| Fluorescence | 50.0% coarse, common loose. 50% moderately bright |
| Total Gas | 223.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3170m: grysh blk-v dk gry, arg,aren i/p,frm,mnr mod hd,sbfiss. SURVEY @ 3175.4m INC: 88.56° AZI: 82.14°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.8 | 33 |
| RES_DEEP (ohm.m) | 17.32 | 33 |
| RES_SHALLOW (ohm.m) | 16.70 | 33 |
| **Δ Res (Deep − Shallow)** | **0.62** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3180 m MD — Interval 3177.5 – 3182.5 m

**Sample Description (spreadsheet):** Sample 3180m: 40% Siltstone, 60% very fine to medium Sandstone, trace coarse, common loose. 25% moderately bright to dull FLUOR in SST. TG 186U

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | very fine to medium (max: nan) |
| Fluorescence | 25.0% coarse, common loose. 25% moderately bright to dull |
| Total Gas | 186.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3170m: grysh blk-v dk gry, arg,aren i/p,frm,mnr mod hd,sbfiss. SURVEY @ 3175.4m INC: 88.56° AZI: 82.14°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.3 | 33 |
| RES_DEEP (ohm.m) | 17.29 | 33 |
| RES_SHALLOW (ohm.m) | 16.38 | 33 |
| **Δ Res (Deep − Shallow)** | **0.91** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3185 m MD — Interval 3182.5 – 3187.5 m

**Sample Description (spreadsheet):** Sample 3185m: 20% Siltstone, 80% very fine to fine, minor medium Sandstone, predominantly aggregates. 35% dull to moderately bright FLUOR in SST. TG 175U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine, minor medium (max: nan) |
| Fluorescence | 35.0% nan |
| Total Gas | 175.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3170m: grysh blk-v dk gry, arg,aren i/p,frm,mnr mod hd,sbfiss. SURVEY @ 3175.4m INC: 88.56° AZI: 82.14°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.2 | 33 |
| RES_DEEP (ohm.m) | 16.27 | 33 |
| RES_SHALLOW (ohm.m) | 15.33 | 33 |
| **Δ Res (Deep − Shallow)** | **0.94** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3190 m MD — Interval 3187.5 – 3192.5 m

**Sample Description (spreadsheet):** Sample 3190m: 25% Siltstone, 75% very fine to fine Sandstone, common loose, 40% dull to moderately bright FLUOR in SST. TG 168U

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 40.0% nan |
| Total Gas | 168.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.3 | 11 |
| RES_DEEP (ohm.m) | 16.58 | 33 |
| RES_SHALLOW (ohm.m) | 15.51 | 33 |
| **Δ Res (Deep − Shallow)** | **1.06** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3195 m MD — Interval 3192.5 – 3197.5 m

**Sample Description (spreadsheet):** Sample 3195m: 20% Siltstone, 80% very fine to fine Sandstone, minor loose, 40% dull to moderately bright FLUOR in SST. TG 167U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (max: nan) |
| Fluorescence | 40.0% nan |
| Total Gas | 167.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| RES_DEEP (ohm.m) | 15.70 | 29 |
| RES_SHALLOW (ohm.m) | 14.84 | 29 |
| **Δ Res (Deep − Shallow)** | **0.86** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3200 m MD — Interval 3197.5 – 3202.5 m

**Sample Description (spreadsheet):** Sample 3200m: 15% Siltstone, 85% very fine to fine (grading to siltstone), rare medium Sandstone, minor loose, 40% dull to moderately bright FLUOR in SST. TG 163U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine (grading to siltstone), rare medium (max: nan) |
| Fluorescence | 40.0% nan |
| Total Gas | 163.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|

**Permeability Proxy:** Insufficient resistivity data
---

### 3205 m MD — Interval 3202.5 – 3207.5 m

**Sample Description (spreadsheet):** Sample 3206m(TD): 15% Siltstone, 85% very fine to fine (grading to siltstone), Sandstone, minor loose, 35% dull to moderately bright FLUOR in SST. TG 142U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine (grading to siltstone (max: nan) |
| Fluorescence | 35.0% nan |
| Total Gas | 142.0 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|

**Permeability Proxy:** Insufficient resistivity data
---

## 5. Summary Statistics (McKinlay Member)

| Metric | Value |
|--------|-------|
| Intervals analysed | 306 |
| Depth range | 1685 – 3205 m |
| Avg % Sandstone | 88.0% |
| Avg Δ Res (Deep−Shallow) | 0.87 ohm.m |
| Max Δ Res | 5.52 ohm.m |
| Min Δ Res | -0.72 ohm.m |
| Mudlog matches | 221 / 306 |
