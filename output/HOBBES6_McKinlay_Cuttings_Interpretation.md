# HOBBES 6 — McKinlay Member Cuttings & Log Interpretation

**Generated:** 2026-07-07 12:42 UTC  
**Well:** HOBBES 6 (HOBBES 6)  
**TD:** 2500 m MD  

---

## 1. Data Sources & Methodology

| Source | File | Role |
|--------|------|------|
| Mudlog PDF | `Hobbes 6_Mudlog_Spud-2500m_TD_Field Final.pdf` | Cuttings lithology descriptions |
| Sample Descriptions | `Hobbes 6 Hz Section Samples Descriptions_Rev3.xlsx` (Input Sheet) | Depth intervals & sample properties |
| Formation Tops | `DC30.xlsx`, `Mck_Murta.xlsx` | Reservoir entry & overburden identification |
| Wireline Log (LAS) | `Hobbes_6` | GR, RES_DEEP, RES_SHALLOW |

## 2. Formation Top Analysis

### 2.1 Key Tops

| Marker | Depth (m MD) | Source |
|--------|-------------|--------|
| DC30 | 1685.47 | DC30.xlsx |
| McKinlay Member (shallowest) | 1685.70 | Mck_Murta.xlsx |

### 2.2 McKinlay Member Top Classification

**Initial reservoir entry (DC30 + shallowest McKinlay):** 1685.70 m MD

**Target re-entry (lone McKinlay below an overburden entry pair):**
- 1967.35 m MD
- 2077.33 m MD

**Overburden entry (Murta + corresponding McKinlay within 5 m):**
| McKinlay entry (m MD) | Murta (m MD) | Δ (m) | Re-entry (m MD) | Zone length (m) |
|-----------------------|-------------|-------|-----------------|-----------------|
| 1934.99 | 1936.48 | 1.49 | 1967.35 | 32.4 |
| 2041.92 | 2041.92 | 0.00 | 2077.33 | 35.4 |
| 2334.51 | 2332.00 | 2.51 | 2384.51 (assumed +50 m) | 50.0 |

**McKinlay Member analysis window:** 1685.7 – 2500.0 m MD

**Excluded overburden intervals (entry → re-entry, pay resumes at re-entry):** 1935–1967 m (overburden), 2042–2077 m (overburden), 2335–2385 m (overburden)

**Samples in McKinlay Member:** 78 of 111 total
- Excluded pre-reservoir: 17
- Excluded overburden intervals: 16

## 3. Known Shortcomings

> **Read this section before using the output.**

1. **Mudlog PDF text extraction is imperfect.** Depth-to-description assignment uses ±15 m proximity heuristics.
2. **Formation top discrepancies** between Mck_Murta.xlsx and mudlog PDF picks are noted where present.
3. **Well name mapping:** HOBBES 6 → `HOBBES 6` (verified by TD and LAS WELL header).
4. **Sample intervals** are midpoints between consecutive sample depths — variable widths where spacing is irregular.
5. **Resistivity permeability proxy** is qualitative only (Δ Res = RES_DEEP − RES_SHALLOW).
6. **NULL LAS values** (-999.25) excluded from averages.
7. **Exclusion zones** span from each Murta/McKinlay overburden entry to the next lone McKinlay re-entry below (or entry + 50 m MD if none mapped). Later entry pairs inside an existing exclusion interval are treated as the same overburden excursion. Initial DC30/McKinlay reservoir entry is not excluded.
8. **Input Sheet only** — Calculations Sheet not used.
## 4. McKinlay Member Sample Intervals

Each section: depth interval, spreadsheet sample, mudlog cuttings, wireline log averages.

### 1686 m MD — Interval 1684.5 – 1687.5 m

**Sample Description (spreadsheet):** Sample 1686m: Tr siderite in 70% Siltstone, Tr siderite in 30% very fine  to  medium Sandstone, 20% moderately bright  to  bright FLUOR in SST. TG 38U

| Property | Value |
|----------|-------|
| % Sandstone | 30 |
| Grain Size | vf - med (max: M ) |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 20.0% mod bri - bri |
| Total Gas | 38 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 115.3 | 19 |
| RES_DEEP (ohm.m) | 30.10 | 19 |
| RES_SHALLOW (ohm.m) | 22.56 | 19 |
| **Δ Res (Deep − Shallow)** | **7.54** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1689 m MD — Interval 1687.5 – 1690.5 m

**Sample Description (spreadsheet):** Sample 1689m: Tr siderite in 70% Siltstone, Tr siderite in 30% very fine  to  medium Sandstone, 50% moderately bright  to  bright FLUOR in SST. TG 113U

| Property | Value |
|----------|-------|
| % Sandstone | 30 |
| Grain Size | vf - med (max: M) |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 50.0% mod bri - bri |
| Total Gas | 113 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.0 | 20 |
| RES_DEEP (ohm.m) | 31.90 | 20 |
| RES_SHALLOW (ohm.m) | 26.24 | 20 |
| **Δ Res (Deep − Shallow)** | **5.66** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1692 m MD — Interval 1690.5 – 1693.5 m

**Sample Description (spreadsheet):** Sample 1692m: Tr siderite in 30% Siltstone, Tr siderite in 70% very fine  to  coarse Sandstone, 70% moderately bright  to  bright FLUOR in SST. TG 199U

| Property | Value |
|----------|-------|
| % Sandstone | 70 |
| Grain Size | vf - crs (max: C) |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 70.0% mod bri - bri |
| Total Gas | 199 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.5 | 20 |
| RES_DEEP (ohm.m) | 30.02 | 20 |
| RES_SHALLOW (ohm.m) | 29.68 | 20 |
| **Δ Res (Deep − Shallow)** | **0.34** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1695 m MD — Interval 1693.5 – 1696.5 m

**Sample Description (spreadsheet):** Sample 1695m: Tr siderite in 20% Siltstone, Tr siderite in 80% very fine  to  coarse Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 140U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | vf - crs (max: C) |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 80.0% mod bri - bri |
| Total Gas | 140 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 62.9 | 19 |
| RES_DEEP (ohm.m) | 25.80 | 19 |
| RES_SHALLOW (ohm.m) | 25.18 | 19 |
| **Δ Res (Deep − Shallow)** | **0.62** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1698 m MD — Interval 1696.5 – 1699.5 m

**Sample Description (spreadsheet):** Sample 1698m: Tr siderite in 10% Siltstone, Tr siderite in 90% fine  to  very coarse Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 133U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f - v crs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 80.0% mod bri - bri |
| Total Gas | 133 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.2 | 20 |
| RES_DEEP (ohm.m) | 26.00 | 20 |
| RES_SHALLOW (ohm.m) | 26.11 | 20 |
| **Δ Res (Deep − Shallow)** | **-0.12** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1701 m MD — Interval 1699.5 – 1702.5 m

**Sample Description (spreadsheet):** Sample 1701m: Tr siderite in 10% Siltstone, Tr siderite in 90% fine  to  very coarse Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 128U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f - v crs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 80.0% mod bri - bri |
| Total Gas | 128 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.9 | 20 |
| RES_DEEP (ohm.m) | 26.84 | 20 |
| RES_SHALLOW (ohm.m) | 25.97 | 20 |
| **Δ Res (Deep − Shallow)** | **0.87** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1704 m MD — Interval 1702.5 – 1705.5 m

**Sample Description (spreadsheet):** Sample 1704m: Tr siderite in 10% Siltstone, Tr siderite in 90% fine  to  very coarse Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 158U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f - v crs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 80.0% mod bri - bri |
| Total Gas | 158 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.5 | 19 |
| RES_DEEP (ohm.m) | 25.11 | 19 |
| RES_SHALLOW (ohm.m) | 23.85 | 19 |
| **Δ Res (Deep − Shallow)** | **1.26** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1707 m MD — Interval 1705.5 – 1708.5 m

**Sample Description (spreadsheet):** Sample 1707m: Tr siderite in 0% Siltstone, 100% very fine  to  coarse Sandstone, 90% moderately bright  to  bright FLUOR in SST. TG 128U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf - crs (max: C) |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 90.0% mod bri - bri |
| Total Gas | 128 U |
| FeCO₃ in Siltstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.9 | 20 |
| RES_DEEP (ohm.m) | 24.99 | 20 |
| RES_SHALLOW (ohm.m) | 22.18 | 20 |
| **Δ Res (Deep − Shallow)** | **2.80** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1710 m MD — Interval 1708.5 – 1711.5 m

**Sample Description (spreadsheet):** Sample 1710m: Tr siderite in 0% Siltstone, 100% very fine  to  coarse Sandstone, 90% moderately bright  to  bright FLUOR in SST. TG 189U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf - crs (max: C) |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 90.0% mod bri - bri |
| Total Gas | 189 U |
| FeCO₃ in Siltstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.0 | 20 |
| RES_DEEP (ohm.m) | 24.45 | 20 |
| RES_SHALLOW (ohm.m) | 20.89 | 20 |
| **Δ Res (Deep − Shallow)** | **3.56** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1713 m MD — Interval 1711.5 – 1714.5 m

**Sample Description (spreadsheet):** Sample 1713m: Tr siderite in 30% Siltstone, Tr siderite in 70% very fine  to  medium Sandstone, 50% moderately bright    FLUOR in SST. TG 73U

| Property | Value |
|----------|-------|
| % Sandstone | 70 |
| Grain Size | vf - med (max: M ) |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 50.0% mod bri    |
| Total Gas | 73 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 111.2 | 20 |
| RES_DEEP (ohm.m) | 22.82 | 20 |
| RES_SHALLOW (ohm.m) | 20.48 | 20 |
| **Δ Res (Deep − Shallow)** | **2.34** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1716 m MD — Interval 1714.5 – 1717.5 m

**Sample Description (spreadsheet):** Sample 1716m: Tr siderite in 30% Siltstone, Tr siderite in 70% very fine  to  medium Sandstone, 50% moderately bright    FLUOR in SST. TG 60U

| Property | Value |
|----------|-------|
| % Sandstone | 70 |
| Grain Size | vf - med (max: M ) |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 50.0% mod bri    |
| Total Gas | 60 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 110.6 | 20 |
| RES_DEEP (ohm.m) | 23.25 | 20 |
| RES_SHALLOW (ohm.m) | 21.19 | 20 |
| **Δ Res (Deep − Shallow)** | **2.06** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1719 m MD — Interval 1717.5 – 1720.5 m

**Sample Description (spreadsheet):** Sample 1719m: Tr siderite in 40% Siltstone, Tr siderite in 60% very fine  to  medium Sandstone, 30% moderately bright    FLUOR in SST. TG 79U

| Property | Value |
|----------|-------|
| % Sandstone | 60 |
| Grain Size | vf - med (max: M) |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 30.0% mod bri    |
| Total Gas | 79 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 109.2 | 20 |
| RES_DEEP (ohm.m) | 23.60 | 20 |
| RES_SHALLOW (ohm.m) | 20.80 | 20 |
| **Δ Res (Deep − Shallow)** | **2.80** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1722 m MD — Interval 1720.5 – 1723.5 m

**Sample Description (spreadsheet):** Sample 1722m: Tr siderite in 40% Siltstone, Tr siderite in 60% very fine  to  medium Sandstone, 30% moderately bright    FLUOR in SST. TG 79U

| Property | Value |
|----------|-------|
| % Sandstone | 60 |
| Grain Size | vf - med (max: M) |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 30.0% mod bri    |
| Total Gas | 79 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 108.6 | 20 |
| RES_DEEP (ohm.m) | 23.55 | 20 |
| RES_SHALLOW (ohm.m) | 20.58 | 20 |
| **Δ Res (Deep − Shallow)** | **2.98** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1725 m MD — Interval 1723.5 – 1726.5 m

**Sample Description (spreadsheet):** Sample 1725m: Tr siderite in 20% Siltstone, Tr siderite in 80% very fine  to  medium Sandstone, 50% moderately bright    FLUOR in SST. TG 86U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | vf - med (max: M) |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 50.0% mod bri    |
| Total Gas | 86 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.5 | 19 |
| RES_DEEP (ohm.m) | 23.61 | 19 |
| RES_SHALLOW (ohm.m) | 20.25 | 19 |
| **Δ Res (Deep − Shallow)** | **3.36** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1728 m MD — Interval 1726.5 – 1729.5 m

**Sample Description (spreadsheet):** Sample 1728m: Tr siderite in 20% Siltstone, Tr siderite in 80% very fine  to  medium Sandstone, 50% moderately bright    FLUOR in SST. TG 82U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | vf - med (max: M) |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 50.0% mod bri    |
| Total Gas | 82 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.0 | 20 |
| RES_DEEP (ohm.m) | 23.61 | 20 |
| RES_SHALLOW (ohm.m) | 20.83 | 20 |
| **Δ Res (Deep − Shallow)** | **2.78** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1731 m MD — Interval 1729.5 – 1732.5 m

**Sample Description (spreadsheet):** Sample 1731m: Tr siderite in 20% Siltstone, Tr siderite in 80% very fine  to  medium Sandstone, 60% moderately bright    FLUOR in SST. TG 85U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | vf - med (max: M) |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 60.0% mod bri    |
| Total Gas | 85 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.1 | 20 |
| RES_DEEP (ohm.m) | 23.55 | 20 |
| RES_SHALLOW (ohm.m) | 21.44 | 20 |
| **Δ Res (Deep − Shallow)** | **2.12** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1734 m MD — Interval 1732.5 – 1737.0 m

**Sample Description (spreadsheet):** Sample 1734m: Tr siderite in 20% Siltstone, Tr siderite in 80% very fine  to  medium Sandstone, 60% moderately bright    FLUOR in SST. TG 123U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | vf - med (max: M) |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 60.0% mod bri    |
| Total Gas | 123 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.4 | 29 |
| RES_DEEP (ohm.m) | 24.22 | 29 |
| RES_SHALLOW (ohm.m) | 22.75 | 29 |
| **Δ Res (Deep − Shallow)** | **1.47** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1740 m MD — Interval 1737.0 – 1745.0 m

**Sample Description (spreadsheet):** Sample 1740m: Tr siderite in 10% Siltstone, Tr siderite in 90% very fine  to  medium Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 215U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf - med (max: M) |
| Porosity Class | gd |
| Loose Grains | Yes |
| Fluorescence | 80.0% mod bri - bri |
| Total Gas | 215 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1760m: lt gry,lt brn,trnsl,opq, vf-med,rr crs grs,mod wl srt,dom 78 / 6 / 4 / 5 / 7 314 U sbang-sbrnd,com wk sil cmt,com lt gry slty mtx,tr carb flks,fri aggs,com lse, v pr vis-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.9 | 53 |
| RES_DEEP (ohm.m) | 25.32 | 53 |
| RES_SHALLOW (ohm.m) | 24.58 | 53 |
| **Δ Res (Deep − Shallow)** | **0.74** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1750 m MD — Interval 1745.0 – 1755.0 m

**Sample Description (spreadsheet):** Sample 1750m: Tr siderite in 10% Siltstone, Tr siderite in 90% very fine  to  medium Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 190U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf - med (max: M) |
| Porosity Class | gd |
| Loose Grains | Yes |
| Fluorescence | 80.0% mod bri - bri |
| Total Gas | 190 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1760m: lt gry,lt brn,trnsl,opq, vf-med,rr crs grs,mod wl srt,dom 78 / 6 / 4 / 5 / 7 314 U sbang-sbrnd,com wk sil cmt,com lt gry slty mtx,tr carb flks,fri aggs,com lse, v pr vis-gd inf por,fluor.
- **SANDSTONE** @ ~1770m: lt gry,lt brn gry, trnsl,dom vf-f aggs,f-med i/p,mod wl srt,dom sbang-rnd,com wk sil cmt,com lt gry-lt brn slty mtx,tr slty lams, tr sid,tr carb flks,fri aggs,mnr lse,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.0 | 65 |
| RES_DEEP (ohm.m) | 26.33 | 65 |
| RES_SHALLOW (ohm.m) | 26.09 | 65 |
| **Δ Res (Deep − Shallow)** | **0.24** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1760 m MD — Interval 1755.0 – 1765.0 m

**Sample Description (spreadsheet):** Sample 1760m: Tr siderite in 10% Siltstone, Tr siderite in 90% very fine  to  medium Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 208U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf - med (max: M) |
| Porosity Class | gd |
| Loose Grains | Yes |
| Fluorescence | 80.0% mod bri - bri |
| Total Gas | 208 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1760m: lt gry,lt brn,trnsl,opq, vf-med,rr crs grs,mod wl srt,dom 78 / 6 / 4 / 5 / 7 314 U sbang-sbrnd,com wk sil cmt,com lt gry slty mtx,tr carb flks,fri aggs,com lse, v pr vis-gd inf por,fluor.
- **SANDSTONE** @ ~1770m: lt gry,lt brn gry, trnsl,dom vf-f aggs,f-med i/p,mod wl srt,dom sbang-rnd,com wk sil cmt,com lt gry-lt brn slty mtx,tr slty lams, tr sid,tr carb flks,fri aggs,mnr lse,
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.3 | 66 |
| RES_DEEP (ohm.m) | 25.65 | 66 |
| RES_SHALLOW (ohm.m) | 23.53 | 66 |
| **Δ Res (Deep − Shallow)** | **2.13** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1770 m MD — Interval 1765.0 – 1775.0 m

**Sample Description (spreadsheet):** Sample 1770m: Tr siderite in 10% Siltstone, Tr siderite in 90% very fine  to  medium Sandstone, 70% moderately bright  to  bright FLUOR in SST. TG 99U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf - med (max: M) |
| Porosity Class | gd |
| Loose Grains | Yes |
| Fluorescence | 70.0% mod bri - bri |
| Total Gas | 99 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1760m: lt gry,lt brn,trnsl,opq, vf-med,rr crs grs,mod wl srt,dom 78 / 6 / 4 / 5 / 7 314 U sbang-sbrnd,com wk sil cmt,com lt gry slty mtx,tr carb flks,fri aggs,com lse, v pr vis-gd inf por,fluor.
- **SANDSTONE** @ ~1770m: lt gry,lt brn gry, trnsl,dom vf-f aggs,f-med i/p,mod wl srt,dom sbang-rnd,com wk sil cmt,com lt gry-lt brn slty mtx,tr slty lams, tr sid,tr carb flks,fri aggs,mnr lse,
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.8 | 65 |
| RES_DEEP (ohm.m) | 23.45 | 65 |
| RES_SHALLOW (ohm.m) | 17.40 | 65 |
| **Δ Res (Deep − Shallow)** | **6.05** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1780 m MD — Interval 1775.0 – 1785.0 m

**Sample Description (spreadsheet):** Sample 1780m: Tr siderite in 10% Siltstone, Tr siderite in 90% very fine  to  medium Sandstone, 70% dull  to  moderately bright FLUOR in SST. TG 90U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf - med (max: M ) |
| Porosity Class | gd |
| Loose Grains | Yes |
| Fluorescence | 70.0% dull - mod bri |
| Total Gas | 90 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1760m: lt gry,lt brn,trnsl,opq, vf-med,rr crs grs,mod wl srt,dom 78 / 6 / 4 / 5 / 7 314 U sbang-sbrnd,com wk sil cmt,com lt gry slty mtx,tr carb flks,fri aggs,com lse, v pr vis-gd inf por,fluor.
- **SANDSTONE** @ ~1770m: lt gry,lt brn gry, trnsl,dom vf-f aggs,f-med i/p,mod wl srt,dom sbang-rnd,com wk sil cmt,com lt gry-lt brn slty mtx,tr slty lams, tr sid,tr carb flks,fri aggs,mnr lse,
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.1 | 66 |
| RES_DEEP (ohm.m) | 26.60 | 66 |
| RES_SHALLOW (ohm.m) | 19.93 | 66 |
| **Δ Res (Deep − Shallow)** | **6.67** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1790 m MD — Interval 1785.0 – 1795.0 m

**Sample Description (spreadsheet):** Sample 1790m: Tr siderite in 10% Siltstone, Tr siderite in 90% very fine  to  medium Sandstone, 70% moderately bright  to  bright FLUOR in SST. TG 159U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf - med (max: M) |
| Porosity Class | fr |
| Loose Grains | Yes |
| Fluorescence | 70.0% mod bri - bri |
| Total Gas | 159 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1770m: lt gry,lt brn gry, trnsl,dom vf-f aggs,f-med i/p,mod wl srt,dom sbang-rnd,com wk sil cmt,com lt gry-lt brn slty mtx,tr slty lams, tr sid,tr carb flks,fri aggs,mnr lse,
- **SANDSTONE** @ ~1780m: lt gry,lt brn gry, trnsl,vf-f aggs,f-med i/p,mod wl srt, MW: 9.7 dom sbang-rnd,com wk sil cmt,com lt FV: 43 gry-lt brn slty mtx,tr slty lams,tr sid, PV: 11 1790 tr carb flks,fri aggs,mnr lse,v pr-pr
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.0 | 66 |
| RES_DEEP (ohm.m) | 22.36 | 66 |
| RES_SHALLOW (ohm.m) | 20.33 | 66 |
| **Δ Res (Deep − Shallow)** | **2.03** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1800 m MD — Interval 1795.0 – 1805.0 m

**Sample Description (spreadsheet):** Sample 1800m: Tr siderite in 5% Siltstone, Tr siderite in 95% very fine  to  medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 344U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf - med (max: M) |
| Porosity Class | fr |
| Loose Grains | Yes |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 344 U |
| FeCO₃ in Siltstone | Tr |
| FeCO₃ in Sandstone | Tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1780m: lt gry,lt brn gry, trnsl,vf-f aggs,f-med i/p,mod wl srt, MW: 9.7 dom sbang-rnd,com wk sil cmt,com lt FV: 43 gry-lt brn slty mtx,tr slty lams,tr sid, PV: 11 1790 tr carb flks,fri aggs,mnr lse,v pr-pr
- **SANDSTONE** @ ~1810m: off wh,v pl gry,trnsl, vf-f,rr med,wl srt,sbang,wk-mod sil cmt,mnr kaol mtx,rr slty/carb lams,fri, v pr-pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.7 | 65 |
| RES_DEEP (ohm.m) | 27.40 | 65 |
| RES_SHALLOW (ohm.m) | 26.14 | 65 |
| **Δ Res (Deep − Shallow)** | **1.27** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1810 m MD — Interval 1805.0 – 1815.0 m

**Sample Description (spreadsheet):** Sample 1810m: 0% Siltstone, 100% very fine  to  coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 255U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf - crs (max: C) |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 255 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1810m: off wh,v pl gry,trnsl, vf-f,rr med,wl srt,sbang,wk-mod sil cmt,mnr kaol mtx,rr slty/carb lams,fri, v pr-pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.1 | 66 |
| RES_DEEP (ohm.m) | 33.81 | 66 |
| RES_SHALLOW (ohm.m) | 33.27 | 66 |
| **Δ Res (Deep − Shallow)** | **0.54** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1820 m MD — Interval 1815.0 – 1825.0 m

**Sample Description (spreadsheet):** Sample 1820m: 0% Siltstone, 100% very fine  to  medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 285U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf - med (max: M) |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 285 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1810m: off wh,v pl gry,trnsl, vf-f,rr med,wl srt,sbang,wk-mod sil cmt,mnr kaol mtx,rr slty/carb lams,fri, v pr-pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.8 | 66 |
| RES_DEEP (ohm.m) | 30.50 | 66 |
| RES_SHALLOW (ohm.m) | 28.80 | 66 |
| **Δ Res (Deep − Shallow)** | **1.69** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1830 m MD — Interval 1825.0 – 1835.0 m

**Sample Description (spreadsheet):** Sample 1830m: 0% Siltstone, 100% very fine to medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 327U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: M) |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 327 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1810m: off wh,v pl gry,trnsl, vf-f,rr med,wl srt,sbang,wk-mod sil cmt,mnr kaol mtx,rr slty/carb lams,fri, v pr-pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.3 | 65 |
| RES_DEEP (ohm.m) | 25.40 | 65 |
| RES_SHALLOW (ohm.m) | 24.27 | 65 |
| **Δ Res (Deep − Shallow)** | **1.13** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1840 m MD — Interval 1835.0 – 1845.0 m

**Sample Description (spreadsheet):** Sample 1840m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 297U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 297 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.2 | 66 |
| RES_DEEP (ohm.m) | 29.74 | 66 |
| RES_SHALLOW (ohm.m) | 28.02 | 66 |
| **Δ Res (Deep − Shallow)** | **1.72** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1850 m MD — Interval 1845.0 – 1855.0 m

**Sample Description (spreadsheet):** Sample 1850m: 10% Siltstone, 90% very fine to coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 321U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 321 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.7 | 65 |
| RES_DEEP (ohm.m) | 26.26 | 65 |
| RES_SHALLOW (ohm.m) | 24.78 | 65 |
| **Δ Res (Deep − Shallow)** | **1.49** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1860 m MD — Interval 1855.0 – 1865.0 m

**Sample Description (spreadsheet):** Sample 1860m: 5% Siltstone, 95% very fine to coarse Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 306U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-crs (max: C) |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 80.0% mod bri - bri |
| Total Gas | 306 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.2 | 66 |
| RES_DEEP (ohm.m) | 21.57 | 66 |
| RES_SHALLOW (ohm.m) | 20.18 | 66 |
| **Δ Res (Deep − Shallow)** | **1.38** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1870 m MD — Interval 1865.0 – 1875.0 m

**Sample Description (spreadsheet):** Sample 1870m: 0% Siltstone, 100% very fine to medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 268U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: C) |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 268 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1890m: dk gry,arg,carb i/p,tr micmic,mod hd,sbblky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.1 | 66 |
| RES_DEEP (ohm.m) | 23.66 | 66 |
| RES_SHALLOW (ohm.m) | 22.03 | 66 |
| **Δ Res (Deep − Shallow)** | **1.63** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1880 m MD — Interval 1875.0 – 1885.0 m

**Sample Description (spreadsheet):** Sample 1880m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 240U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f (max: M) |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 240 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1890m: dk gry,arg,carb i/p,tr micmic,mod hd,sbblky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.8 | 65 |
| RES_DEEP (ohm.m) | 26.86 | 65 |
| RES_SHALLOW (ohm.m) | 25.97 | 65 |
| **Δ Res (Deep − Shallow)** | **0.89** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1890 m MD — Interval 1885.0 – 1895.0 m

**Sample Description (spreadsheet):** Sample 1890m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 455U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f (max: M) |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 455 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1890m: dk gry,arg,carb i/p,tr micmic,mod hd,sbblky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.7 | 66 |
| RES_DEEP (ohm.m) | 32.37 | 66 |
| RES_SHALLOW (ohm.m) | 31.58 | 66 |
| **Δ Res (Deep − Shallow)** | **0.79** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1900 m MD — Interval 1895.0 – 1905.0 m

**Sample Description (spreadsheet):** Sample 1900m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 322U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f (max: M) |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 322 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1890m: dk gry,arg,carb i/p,tr micmic,mod hd,sbblky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.7 | 66 |
| RES_DEEP (ohm.m) | 39.41 | 66 |
| RES_SHALLOW (ohm.m) | 37.72 | 66 |
| **Δ Res (Deep − Shallow)** | **1.68** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1910 m MD — Interval 1905.0 – 1915.0 m

**Sample Description (spreadsheet):** Sample 1910m: 0% Siltstone, 100% very fine to fine Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 294U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f (max: C) |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 80.0% mod bri - bri |
| Total Gas | 294 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1890m: dk gry,arg,carb i/p,tr micmic,mod hd,sbblky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.1 | 66 |
| RES_DEEP (ohm.m) | 43.82 | 66 |
| RES_SHALLOW (ohm.m) | 40.46 | 66 |
| **Δ Res (Deep − Shallow)** | **3.36** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1920 m MD — Interval 1915.0 – 1925.0 m

**Sample Description (spreadsheet):** Sample 1920m: 0% Siltstone, 100% very fine to fine Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 317U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f (max: M) |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 317 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1940m: off wh,v pl gry,trnsl,vf aggs,mnr f-med,mod wl srt,sbang,mod strg sil cmt,mnr kaol mtx,com kaol mtx,mod hd aggs,v pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.7 | 66 |
| RES_DEEP (ohm.m) | 43.26 | 66 |
| RES_SHALLOW (ohm.m) | 37.94 | 66 |
| **Δ Res (Deep − Shallow)** | **5.32** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1980 m MD — Interval 1975.0 – 1985.0 m

**Sample Description (spreadsheet):** Sample 1980m: Y siderite in 60% Siltstone, 40% very fine to fine Sandstone, 80% moderately bright  to  bright FLUOR in SST. TG 365U

| Property | Value |
|----------|-------|
| % Sandstone | 40 |
| Grain Size | vf-f (max: M) |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 80.0% mod bri - bri |
| Total Gas | 365 U |
| FeCO₃ in Siltstone | Y |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.3 | 65 |
| RES_DEEP (ohm.m) | 33.09 | 65 |
| RES_SHALLOW (ohm.m) | 27.53 | 65 |
| **Δ Res (Deep − Shallow)** | **5.56** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1990 m MD — Interval 1985.0 – 1995.0 m

**Sample Description (spreadsheet):** Sample 1990m: Y siderite in 25% Siltstone, 75% very fine to fine Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 282U

| Property | Value |
|----------|-------|
| % Sandstone | 75 |
| Grain Size | vf-f (max: M) |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 282 U |
| FeCO₃ in Siltstone | Y |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.5 | 66 |
| RES_DEEP (ohm.m) | 27.96 | 66 |
| RES_SHALLOW (ohm.m) | 26.13 | 66 |
| **Δ Res (Deep − Shallow)** | **1.83** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2000 m MD — Interval 1995.0 – 2005.0 m

**Sample Description (spreadsheet):** Sample 2000m: 10% Siltstone, 90% very fine to fine Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 385U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-f (max: M) |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 385 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.3 | 66 |
| RES_DEEP (ohm.m) | 24.78 | 66 |
| RES_SHALLOW (ohm.m) | 23.13 | 66 |
| **Δ Res (Deep − Shallow)** | **1.65** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2010 m MD — Interval 2005.0 – 2015.0 m

**Sample Description (spreadsheet):** Sample 2010m: 0% Siltstone, 100% very fine to fine Sandstone, 100% bright FLUOR in SST. TG 317U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f (max: M) |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% bri |
| Total Gas | 317 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.1 | 65 |
| RES_DEEP (ohm.m) | 23.17 | 65 |
| RES_SHALLOW (ohm.m) | 21.61 | 65 |
| **Δ Res (Deep − Shallow)** | **1.56** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2020 m MD — Interval 2015.0 – 2025.0 m

**Sample Description (spreadsheet):** Sample 2020m: 0% Siltstone, 100% very fine to fine Sandstone, 100% bright FLUOR in SST. TG 400U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f (max: M) |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% bri |
| Total Gas | 400 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2040m: dk gry,gry,arg,arg,mnr carb,tr micmic,frm-mod hd,sbblky- blky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.5 | 66 |
| RES_DEEP (ohm.m) | 23.42 | 66 |
| RES_SHALLOW (ohm.m) | 21.77 | 66 |
| **Δ Res (Deep − Shallow)** | **1.65** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2030 m MD — Interval 2025.0 – 2035.0 m

**Sample Description (spreadsheet):** Sample 2030m: 0% Siltstone, 100% very fine to fine Sandstone, 100% bright FLUOR in SST. TG 391U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% bri |
| Total Gas | 391 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2040m: dk gry,gry,arg,arg,mnr carb,tr micmic,frm-mod hd,sbblky- blky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.7 | 66 |
| RES_DEEP (ohm.m) | 25.45 | 66 |
| RES_SHALLOW (ohm.m) | 23.28 | 66 |
| **Δ Res (Deep − Shallow)** | **2.17** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2090 m MD — Interval 2085.0 – 2095.0 m

**Sample Description (spreadsheet):** Sample 2090m: 10% Siltstone, 90% very fine  to  very coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 330U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf - v crs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 330 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.3 | 65 |
| RES_DEEP (ohm.m) | 24.02 | 65 |
| RES_SHALLOW (ohm.m) | 21.28 | 65 |
| **Δ Res (Deep − Shallow)** | **2.74** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2100 m MD — Interval 2095.0 – 2105.0 m

**Sample Description (spreadsheet):** Sample 2100m: 0% Siltstone, 100% m  to  very coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 320U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | m - v crs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 320 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.5 | 66 |
| RES_DEEP (ohm.m) | 26.21 | 66 |
| RES_SHALLOW (ohm.m) | 23.87 | 66 |
| **Δ Res (Deep − Shallow)** | **2.34** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2110 m MD — Interval 2105.0 – 2115.0 m

**Sample Description (spreadsheet):** Sample 2110m: 0% Siltstone, 100% very fine  to  very coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 192U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf - v crs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 192 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.0 | 65 |
| RES_DEEP (ohm.m) | 24.28 | 65 |
| RES_SHALLOW (ohm.m) | 21.94 | 65 |
| **Δ Res (Deep − Shallow)** | **2.34** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2120 m MD — Interval 2115.0 – 2125.0 m

**Sample Description (spreadsheet):** Sample 2120m: 0% Siltstone, 100% very fine  to  very coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 333U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf - v crs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Loose Grains | Yes |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 333 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2140m: clr-trnsl,opq clr,dom f aggs,med-crs lse,mod-pr srt,tr sil cmt,tr mtx,dom lse,fr-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.7 | 66 |
| RES_DEEP (ohm.m) | 23.80 | 66 |
| RES_SHALLOW (ohm.m) | 22.29 | 66 |
| **Δ Res (Deep − Shallow)** | **1.52** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2130 m MD — Interval 2125.0 – 2135.0 m

**Sample Description (spreadsheet):** Sample 2130m: 5% Siltstone, 95% very fine  to  very coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 327U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf - v crs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Loose Grains | Yes |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 327 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2140m: clr-trnsl,opq clr,dom f aggs,med-crs lse,mod-pr srt,tr sil cmt,tr mtx,dom lse,fr-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.7 | 66 |
| RES_DEEP (ohm.m) | 26.75 | 66 |
| RES_SHALLOW (ohm.m) | 23.52 | 66 |
| **Δ Res (Deep − Shallow)** | **3.23** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2140 m MD — Interval 2135.0 – 2145.0 m

**Sample Description (spreadsheet):** Sample 2140m: 20% Siltstone, 80% fine  to  coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 188U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | f - crs (max: C) |
| Porosity Class | fr-gd |
| Loose Grains | Yes |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 188 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2140m: clr-trnsl,opq clr,dom f aggs,med-crs lse,mod-pr srt,tr sil cmt,tr mtx,dom lse,fr-gd inf por,fluor.
- **SANDSTONE** @ ~2160m: clr-trnsl,opq clr,com f aggs,mnr med-crs lse,mod-pr srt,tr sil cmt,tr mtx,dom lse,fr-gd inf por,fluor. SURVEY @ 2168.9m INC:90.5° AZI:202.2°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.0 | 65 |
| RES_DEEP (ohm.m) | 27.95 | 65 |
| RES_SHALLOW (ohm.m) | 24.65 | 65 |
| **Δ Res (Deep − Shallow)** | **3.30** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2150 m MD — Interval 2145.0 – 2155.0 m

**Sample Description (spreadsheet):** Sample 2150m: 20% Siltstone, 80% fine  to  coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 263U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | f - crs (max: C) |
| Porosity Class | fr-gd |
| Loose Grains | Yes |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 263 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2140m: clr-trnsl,opq clr,dom f aggs,med-crs lse,mod-pr srt,tr sil cmt,tr mtx,dom lse,fr-gd inf por,fluor.
- **SANDSTONE** @ ~2160m: clr-trnsl,opq clr,com f aggs,mnr med-crs lse,mod-pr srt,tr sil cmt,tr mtx,dom lse,fr-gd inf por,fluor. SURVEY @ 2168.9m INC:90.5° AZI:202.2°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 109.5 | 66 |
| RES_DEEP (ohm.m) | 26.15 | 66 |
| RES_SHALLOW (ohm.m) | 23.33 | 66 |
| **Δ Res (Deep − Shallow)** | **2.82** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2160 m MD — Interval 2155.0 – 2165.0 m

**Sample Description (spreadsheet):** Sample 2160m: 5% Siltstone, 95% very fine  to  coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 241U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf - crs (max: C) |
| Porosity Class | fr-gd |
| Loose Grains | Yes |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 241 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2140m: clr-trnsl,opq clr,dom f aggs,med-crs lse,mod-pr srt,tr sil cmt,tr mtx,dom lse,fr-gd inf por,fluor.
- **SANDSTONE** @ ~2160m: clr-trnsl,opq clr,com f aggs,mnr med-crs lse,mod-pr srt,tr sil cmt,tr mtx,dom lse,fr-gd inf por,fluor. SURVEY @ 2168.9m INC:90.5° AZI:202.2°G

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 111.2 | 66 |
| RES_DEEP (ohm.m) | 26.74 | 66 |
| RES_SHALLOW (ohm.m) | 24.90 | 66 |
| **Δ Res (Deep − Shallow)** | **1.85** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2170 m MD — Interval 2165.0 – 2175.0 m

**Sample Description (spreadsheet):** Sample 2170m: 0% Siltstone, 100% very fine  to  coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 221U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf - crs (max: C) |
| Porosity Class | fr-gd |
| Loose Grains | Yes |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 221 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2160m: clr-trnsl,opq clr,com f aggs,mnr med-crs lse,mod-pr srt,tr sil cmt,tr mtx,dom lse,fr-gd inf por,fluor. SURVEY @ 2168.9m INC:90.5° AZI:202.2°G
- **SANDSTONE** @ ~2190m: lt gry,trnsl,opq,com f aggs,dom med lse,mnr-com wk sil cmt, 82 / 6 / 3 / 4 / 5 291 U mnr lt gry arg mtx,tr carb flks,fri aggs-com lse,v pr-pr vis por,fr-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.6 | 65 |
| RES_DEEP (ohm.m) | 27.15 | 65 |
| RES_SHALLOW (ohm.m) | 26.55 | 65 |
| **Δ Res (Deep − Shallow)** | **0.60** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2180 m MD — Interval 2175.0 – 2185.0 m

**Sample Description (spreadsheet):** Sample 2180m: 0% Siltstone, 100% very fine  to  coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 215U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf - crs (max: C) |
| Porosity Class | fr-gd |
| Loose Grains | Yes |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 215 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2160m: clr-trnsl,opq clr,com f aggs,mnr med-crs lse,mod-pr srt,tr sil cmt,tr mtx,dom lse,fr-gd inf por,fluor. SURVEY @ 2168.9m INC:90.5° AZI:202.2°G
- **SANDSTONE** @ ~2190m: lt gry,trnsl,opq,com f aggs,dom med lse,mnr-com wk sil cmt, 82 / 6 / 3 / 4 / 5 291 U mnr lt gry arg mtx,tr carb flks,fri aggs-com lse,v pr-pr vis por,fr-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.4 | 66 |
| RES_DEEP (ohm.m) | 26.08 | 66 |
| RES_SHALLOW (ohm.m) | 24.06 | 66 |
| **Δ Res (Deep − Shallow)** | **2.01** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2190 m MD — Interval 2185.0 – 2195.0 m

**Sample Description (spreadsheet):** Sample 2190m: 0% Siltstone, 100% very fine  to  medium Sandstone, 90% moderately bright  to  bright FLUOR in SST. TG 201U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf - med (max: M ) |
| Porosity Class | fr-gd |
| Loose Grains | Yes |
| Fluorescence | 90.0% mod bri - bri |
| Total Gas | 201 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2190m: lt gry,trnsl,opq,com f aggs,dom med lse,mnr-com wk sil cmt, 82 / 6 / 3 / 4 / 5 291 U mnr lt gry arg mtx,tr carb flks,fri aggs-com lse,v pr-pr vis por,fr-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 110.6 | 65 |
| RES_DEEP (ohm.m) | 25.49 | 65 |
| RES_SHALLOW (ohm.m) | 23.07 | 65 |
| **Δ Res (Deep − Shallow)** | **2.41** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2200 m MD — Interval 2195.0 – 2205.0 m

**Sample Description (spreadsheet):** Sample 2200m: 0% Siltstone, 100% fine  to  medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 263U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f - med (max: M ) |
| Porosity Class | fr-gd |
| Loose Grains | Yes |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 263 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2190m: lt gry,trnsl,opq,com f aggs,dom med lse,mnr-com wk sil cmt, 82 / 6 / 3 / 4 / 5 291 U mnr lt gry arg mtx,tr carb flks,fri aggs-com lse,v pr-pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~2220m: lt gry,trnsl,opq,dom f- crs lse,mnr vf-f aggs,mnr-com wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs-dom lse,v pr-pr vis por,fr-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.5 | 66 |
| RES_DEEP (ohm.m) | 25.92 | 66 |
| RES_SHALLOW (ohm.m) | 23.16 | 66 |
| **Δ Res (Deep − Shallow)** | **2.76** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2210 m MD — Interval 2205.0 – 2215.0 m

**Sample Description (spreadsheet):** Sample 2210m: 0% Siltstone, 100% fine  to  medium Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 210U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f - med (max: M ) |
| Porosity Class | fr-gd |
| Loose Grains | Yes |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 210 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2190m: lt gry,trnsl,opq,com f aggs,dom med lse,mnr-com wk sil cmt, 82 / 6 / 3 / 4 / 5 291 U mnr lt gry arg mtx,tr carb flks,fri aggs-com lse,v pr-pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~2220m: lt gry,trnsl,opq,dom f- crs lse,mnr vf-f aggs,mnr-com wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs-dom lse,v pr-pr vis por,fr-gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.3 | 66 |
| RES_DEEP (ohm.m) | 27.00 | 66 |
| RES_SHALLOW (ohm.m) | 23.78 | 66 |
| **Δ Res (Deep − Shallow)** | **3.21** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2220 m MD — Interval 2215.0 – 2225.0 m

**Sample Description (spreadsheet):** Sample 2220m: 0% Siltstone, 100% very fine  to  coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 282U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf - crs (max: C) |
| Porosity Class | fr-gd |
| Loose Grains | Yes |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 282 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2220m: lt gry,trnsl,opq,dom f- crs lse,mnr vf-f aggs,mnr-com wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs-dom lse,v pr-pr vis por,fr-gd inf por,fluor.
- **SILTSTONE** @ ~2240m: med-lt gry,arg,mnr aren i/p,tr carb flks,tr micmic,frm- mo hd,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.3 | 65 |
| RES_DEEP (ohm.m) | 24.89 | 65 |
| RES_SHALLOW (ohm.m) | 22.04 | 65 |
| **Δ Res (Deep − Shallow)** | **2.85** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2230 m MD — Interval 2225.0 – 2235.0 m

**Sample Description (spreadsheet):** Sample 2230m: 0% Siltstone, 100% very fine  to  coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 376U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf - crs (max: C) |
| Porosity Class | fr-gd |
| Loose Grains | Yes |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 376 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2220m: lt gry,trnsl,opq,dom f- crs lse,mnr vf-f aggs,mnr-com wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs-dom lse,v pr-pr vis por,fr-gd inf por,fluor.
- **SILTSTONE** @ ~2240m: med-lt gry,arg,mnr aren i/p,tr carb flks,tr micmic,frm- mo hd,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.5 | 66 |
| RES_DEEP (ohm.m) | 21.83 | 66 |
| RES_SHALLOW (ohm.m) | 20.10 | 66 |
| **Δ Res (Deep − Shallow)** | **1.72** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2240 m MD — Interval 2235.0 – 2245.0 m

**Sample Description (spreadsheet):** Sample 2240m: 0% Siltstone, 100% very fine  to  very coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 267U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf - v crs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Loose Grains | Yes |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 267 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2220m: lt gry,trnsl,opq,dom f- crs lse,mnr vf-f aggs,mnr-com wk sil cmt,mnr lt gry arg mtx,tr carb flks,fri aggs-dom lse,v pr-pr vis por,fr-gd inf por,fluor.
- **SILTSTONE** @ ~2240m: med-lt gry,arg,mnr aren i/p,tr carb flks,tr micmic,frm- mo hd,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.7 | 65 |
| RES_DEEP (ohm.m) | 22.56 | 65 |
| RES_SHALLOW (ohm.m) | 20.94 | 65 |
| **Δ Res (Deep − Shallow)** | **1.62** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2250 m MD — Interval 2245.0 – 2255.0 m

**Sample Description (spreadsheet):** Sample 2250m: 5% Siltstone, 95% fine  to  very coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 336U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f - v crs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 336 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2240m: med-lt gry,arg,mnr aren i/p,tr carb flks,tr micmic,frm- mo hd,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.9 | 66 |
| RES_DEEP (ohm.m) | 22.08 | 66 |
| RES_SHALLOW (ohm.m) | 20.88 | 66 |
| **Δ Res (Deep − Shallow)** | **1.20** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2260 m MD — Interval 2255.0 – 2265.0 m

**Sample Description (spreadsheet):** Sample 2260m: 5% Siltstone, 95% fine  to  very coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 314U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f - v crs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Loose Grains | Yes |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 314 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2240m: med-lt gry,arg,mnr aren i/p,tr carb flks,tr micmic,frm- mo hd,sbblky-sbfiss.
- **SANDSTONE** @ ~2280m: clr,trnsl,lt gry,lt brn,vf-dom f aggs,f-v crs lse,mod pr srt,dom sbang-sbrnd,mnr ang grs, mnr wk-mod strg sil cmt,mnr lt gry arg mtx,tr carb flks,tr ovgths,fri-mod hd

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.0 | 66 |
| RES_DEEP (ohm.m) | 24.75 | 66 |
| RES_SHALLOW (ohm.m) | 22.00 | 66 |
| **Δ Res (Deep − Shallow)** | **2.74** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2270 m MD — Interval 2265.0 – 2275.0 m

**Sample Description (spreadsheet):** Sample 2270m: 0% Siltstone, 100% very fine  to  very coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 316U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf - v crs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Loose Grains | Yes |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 316 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2280m: clr,trnsl,lt gry,lt brn,vf-dom f aggs,f-v crs lse,mod pr srt,dom sbang-sbrnd,mnr ang grs, mnr wk-mod strg sil cmt,mnr lt gry arg mtx,tr carb flks,tr ovgths,fri-mod hd

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.4 | 65 |
| RES_DEEP (ohm.m) | 26.62 | 65 |
| RES_SHALLOW (ohm.m) | 23.47 | 65 |
| **Δ Res (Deep − Shallow)** | **3.15** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2280 m MD — Interval 2275.0 – 2285.0 m

**Sample Description (spreadsheet):** Sample 2280m: 5% Siltstone, 95% very fine  to  very coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 270U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf - v crs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Loose Grains | Yes |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 270 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2280m: clr,trnsl,lt gry,lt brn,vf-dom f aggs,f-v crs lse,mod pr srt,dom sbang-sbrnd,mnr ang grs, mnr wk-mod strg sil cmt,mnr lt gry arg mtx,tr carb flks,tr ovgths,fri-mod hd

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.0 | 66 |
| RES_DEEP (ohm.m) | 25.33 | 66 |
| RES_SHALLOW (ohm.m) | 21.18 | 66 |
| **Δ Res (Deep − Shallow)** | **4.15** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2290 m MD — Interval 2285.0 – 2295.0 m

**Sample Description (spreadsheet):** Sample 2290m: 10% Siltstone, 90% very fine  to  very coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 255U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf - v crs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Loose Grains | Yes |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 255 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2280m: clr,trnsl,lt gry,lt brn,vf-dom f aggs,f-v crs lse,mod pr srt,dom sbang-sbrnd,mnr ang grs, mnr wk-mod strg sil cmt,mnr lt gry arg mtx,tr carb flks,tr ovgths,fri-mod hd

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.7 | 66 |
| RES_DEEP (ohm.m) | 24.47 | 66 |
| RES_SHALLOW (ohm.m) | 21.95 | 66 |
| **Δ Res (Deep − Shallow)** | **2.52** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2300 m MD — Interval 2295.0 – 2305.0 m

**Sample Description (spreadsheet):** Sample 2300m: 5% Siltstone, 95% very fine  to  coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 276U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf - crs (max: C) |
| Porosity Class | fr |
| Loose Grains | Yes |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 276 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2280m: clr,trnsl,lt gry,lt brn,vf-dom f aggs,f-v crs lse,mod pr srt,dom sbang-sbrnd,mnr ang grs, mnr wk-mod strg sil cmt,mnr lt gry arg mtx,tr carb flks,tr ovgths,fri-mod hd
- **SANDSTONE** @ ~2320m: off wh,v pl brn,trnsl, pred vf aggs,occ lse f-med,rr crs,mod srt,sbang,mod sil cmt,mnr kaol mtx,v pr vis por,fr inf por,fluor. 83 / 6 / 3 / 4 / 4 401 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.7 | 65 |
| RES_DEEP (ohm.m) | 23.72 | 65 |
| RES_SHALLOW (ohm.m) | 23.02 | 65 |
| **Δ Res (Deep − Shallow)** | **0.71** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2310 m MD — Interval 2305.0 – 2315.0 m

**Sample Description (spreadsheet):** Sample 2310m: 5% Siltstone, 95% very fine  to  very coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 326U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf - v crs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Loose Grains | Yes |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 326 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2320m: off wh,v pl brn,trnsl, pred vf aggs,occ lse f-med,rr crs,mod srt,sbang,mod sil cmt,mnr kaol mtx,v pr vis por,fr inf por,fluor. 83 / 6 / 3 / 4 / 4 401 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.0 | 66 |
| RES_DEEP (ohm.m) | 23.09 | 66 |
| RES_SHALLOW (ohm.m) | 23.88 | 66 |
| **Δ Res (Deep − Shallow)** | **-0.79** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2320 m MD — Interval 2315.0 – 2325.0 m

**Sample Description (spreadsheet):** Sample 2320m: 5% Siltstone, 95% fine  to  very coarse Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 297U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f - v crs (max: VC) |
| Grain Ordinal | 5 |
| Porosity Class | fr |
| Loose Grains | Yes |
| Fluorescence | 100.0% mod bri - bri |
| Total Gas | 297 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2320m: off wh,v pl brn,trnsl, pred vf aggs,occ lse f-med,rr crs,mod srt,sbang,mod sil cmt,mnr kaol mtx,v pr vis por,fr inf por,fluor. 83 / 6 / 3 / 4 / 4 401 U
- **SANDSTONE** @ ~2340m: off wh,wh,trnsl-clr, vf-slty,occ med,rr crs,mod-occ pr srt, sbang,mod strg sil cmt,mod-com kaol mtx in vf aggs,occ slty lams,mnr lse, v pr-ti vis por,mnr pr inf por,no fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.5 | 65 |
| RES_DEEP (ohm.m) | 24.49 | 65 |
| RES_SHALLOW (ohm.m) | 23.64 | 65 |
| **Δ Res (Deep − Shallow)** | **0.85** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2390 m MD — Interval 2385.0 – 2395.0 m

**Sample Description (spreadsheet):** Sample 2390m: 70% Siltstone, 30% very fine to fine Sandstone, NO FLUOR in SST. TG 67U

| Property | Value |
|----------|-------|
| % Sandstone | 30 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Loose Grains | No |
| Fluorescence | 0.0% nan |
| Total Gas | 67 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2370m: med-dk gry,brnsh gry, pl-med brn,arg,occ carb,micmic i/p, mnr vf aren,mod hd,sbblky-sbfiss. 81 / 4 / 2 / 3 / 10 2380 SURVEY @ 2379.8m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 127.5 | 66 |
| RES_DEEP (ohm.m) | 11.24 | 66 |
| RES_SHALLOW (ohm.m) | 10.60 | 66 |
| **Δ Res (Deep − Shallow)** | **0.65** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2400 m MD — Interval 2395.0 – 2405.0 m

**Sample Description (spreadsheet):** Sample 2400m: 60% Siltstone, 40% very fine to fine Sandstone, NO FLUOR in SST. TG 69U

| Property | Value |
|----------|-------|
| % Sandstone | 40 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | Yes |
| Fluorescence | 0.0% nan |
| Total Gas | 69 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2420m: off wh-wh,pl gry,trnsl- 84 / 5 / 2 / 3 / 6 occ clr,vf-occ f,rr med,gen wl srt,sbang, mod strg sil cmt,mod-com kaol mtx,occ slty lams,mod hd aggs,mnr lse,v pr vis por,no fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 127.7 | 65 |
| RES_DEEP (ohm.m) | 10.87 | 65 |
| RES_SHALLOW (ohm.m) | 10.33 | 65 |
| **Δ Res (Deep − Shallow)** | **0.54** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2410 m MD — Interval 2405.0 – 2415.0 m

**Sample Description (spreadsheet):** Sample 2410m: 60% Siltstone, 40% very fine to fine Sandstone, NO FLUOR in SST. TG 68U

| Property | Value |
|----------|-------|
| % Sandstone | 40 |
| Grain Size | vf-f (max: VF) |
| Grain Ordinal | 1 |
| Porosity Class | fr |
| Loose Grains | Yes |
| Fluorescence | 0.0% nan |
| Total Gas | 68 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2420m: off wh-wh,pl gry,trnsl- 84 / 5 / 2 / 3 / 6 occ clr,vf-occ f,rr med,gen wl srt,sbang, mod strg sil cmt,mod-com kaol mtx,occ slty lams,mod hd aggs,mnr lse,v pr vis por,no fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 129.3 | 66 |
| RES_DEEP (ohm.m) | 10.74 | 66 |
| RES_SHALLOW (ohm.m) | 10.33 | 66 |
| **Δ Res (Deep − Shallow)** | **0.41** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2420 m MD — Interval 2415.0 – 2425.0 m

**Sample Description (spreadsheet):** Sample 2420m: 70% Siltstone, 30% very fine to fine Sandstone, NO FLUOR in SST. TG 67U

| Property | Value |
|----------|-------|
| % Sandstone | 30 |
| Grain Size | vf-f (max: VF) |
| Grain Ordinal | 1 |
| Porosity Class | fr |
| Loose Grains | Yes |
| Fluorescence | 0.0% nan |
| Total Gas | 67 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2420m: off wh-wh,pl gry,trnsl- 84 / 5 / 2 / 3 / 6 occ clr,vf-occ f,rr med,gen wl srt,sbang, mod strg sil cmt,mod-com kaol mtx,occ slty lams,mod hd aggs,mnr lse,v pr vis por,no fluor.
- **SANDSTONE** @ ~2440m: off wh-wh,pl gry,trnsl- occ clr,vf-occ f,rr med,gen wl srt,sbang, mod strg sil cmt,mod-com kaol mtx,occ slty lams,mod hd aggs,mnr lse,v pr vis por,no fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 121.0 | 66 |
| RES_DEEP (ohm.m) | 10.90 | 66 |
| RES_SHALLOW (ohm.m) | 10.43 | 66 |
| **Δ Res (Deep − Shallow)** | **0.47** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2430 m MD — Interval 2425.0 – 2435.0 m

**Sample Description (spreadsheet):** Sample 2430m: 60% Siltstone, 40% very fine to fine Sandstone, NO FLUOR in SST. TG 61U

| Property | Value |
|----------|-------|
| % Sandstone | 40 |
| Grain Size | vf-f (max: M) |
| Porosity Class | fr |
| Loose Grains | Yes |
| Fluorescence | 0.0% nan |
| Total Gas | 61 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2420m: off wh-wh,pl gry,trnsl- 84 / 5 / 2 / 3 / 6 occ clr,vf-occ f,rr med,gen wl srt,sbang, mod strg sil cmt,mod-com kaol mtx,occ slty lams,mod hd aggs,mnr lse,v pr vis por,no fluor.
- **SANDSTONE** @ ~2440m: off wh-wh,pl gry,trnsl- occ clr,vf-occ f,rr med,gen wl srt,sbang, mod strg sil cmt,mod-com kaol mtx,occ slty lams,mod hd aggs,mnr lse,v pr vis por,no fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 124.4 | 65 |
| RES_DEEP (ohm.m) | 11.51 | 65 |
| RES_SHALLOW (ohm.m) | 11.01 | 65 |
| **Δ Res (Deep − Shallow)** | **0.50** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2440 m MD — Interval 2435.0 – 2445.0 m

**Sample Description (spreadsheet):** Sample 2440m: 50% Siltstone, 50% very fine to fine Sandstone, NO FLUOR in SST. TG 64U

| Property | Value |
|----------|-------|
| % Sandstone | 50 |
| Grain Size | vf-f (max: M) |
| Porosity Class | fr |
| Loose Grains | Yes |
| Fluorescence | 0.0% nan |
| Total Gas | 64 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2420m: off wh-wh,pl gry,trnsl- 84 / 5 / 2 / 3 / 6 occ clr,vf-occ f,rr med,gen wl srt,sbang, mod strg sil cmt,mod-com kaol mtx,occ slty lams,mod hd aggs,mnr lse,v pr vis por,no fluor.
- **SANDSTONE** @ ~2440m: off wh-wh,pl gry,trnsl- occ clr,vf-occ f,rr med,gen wl srt,sbang, mod strg sil cmt,mod-com kaol mtx,occ slty lams,mod hd aggs,mnr lse,v pr vis por,no fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 125.2 | 66 |
| RES_DEEP (ohm.m) | 12.79 | 66 |
| RES_SHALLOW (ohm.m) | 11.48 | 66 |
| **Δ Res (Deep − Shallow)** | **1.32** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2450 m MD — Interval 2445.0 – 2455.0 m

**Sample Description (spreadsheet):** Sample 2450m: Y siderite in 80% Siltstone, 20% very fine to fine Sandstone, NO FLUOR in SST. TG 54U

| Property | Value |
|----------|-------|
| % Sandstone | 20 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | Yes |
| Fluorescence | 0.0% nan |
| Total Gas | 54 U |
| FeCO₃ in Siltstone | Y |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2440m: off wh-wh,pl gry,trnsl- occ clr,vf-occ f,rr med,gen wl srt,sbang, mod strg sil cmt,mod-com kaol mtx,occ slty lams,mod hd aggs,mnr lse,v pr vis por,no fluor.
- **SANDSTONE** @ ~2460m: off wh-wh,pl gry,trnsl- occ clr,vf-occ f,rr med,gen wl srt,sbang, mod strg sil cmt,mod-com kaol mtx,occ slty lams,mod hd aggs,mnr lse,v pr vis por,no fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 114.6 | 65 |
| RES_DEEP (ohm.m) | 13.87 | 65 |
| RES_SHALLOW (ohm.m) | 12.91 | 65 |
| **Δ Res (Deep − Shallow)** | **0.96** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2460 m MD — Interval 2455.0 – 2465.0 m

**Sample Description (spreadsheet):** Sample 2460m: Y siderite in 80% Siltstone, 20% very fine to fine Sandstone, NO FLUOR in SST. TG 60U

| Property | Value |
|----------|-------|
| % Sandstone | 20 |
| Grain Size | vf-f (max: F) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Loose Grains | Yes |
| Fluorescence | 0.0% nan |
| Total Gas | 60 U |
| FeCO₃ in Siltstone | Y |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2440m: off wh-wh,pl gry,trnsl- occ clr,vf-occ f,rr med,gen wl srt,sbang, mod strg sil cmt,mod-com kaol mtx,occ slty lams,mod hd aggs,mnr lse,v pr vis por,no fluor.
- **SANDSTONE** @ ~2460m: off wh-wh,pl gry,trnsl- occ clr,vf-occ f,rr med,gen wl srt,sbang, mod strg sil cmt,mod-com kaol mtx,occ slty lams,mod hd aggs,mnr lse,v pr vis por,no fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 112.0 | 66 |
| RES_DEEP (ohm.m) | 15.04 | 66 |
| RES_SHALLOW (ohm.m) | 14.44 | 66 |
| **Δ Res (Deep − Shallow)** | **0.59** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2470 m MD — Interval 2465.0 – 2475.0 m

**Sample Description (spreadsheet):** Sample 2470m: Y siderite in 80% Siltstone, 20% very fine Sandstone, NO FLUOR in SST. TG 53U

| Property | Value |
|----------|-------|
| % Sandstone | 20 |
| Grain Size | vf (max: VF) |
| Grain Ordinal | 1 |
| Porosity Class | fr |
| Loose Grains | Yes |
| Fluorescence | 0.0% nan |
| Total Gas | 53 U |
| FeCO₃ in Siltstone | Y |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2460m: off wh-wh,pl gry,trnsl- occ clr,vf-occ f,rr med,gen wl srt,sbang, mod strg sil cmt,mod-com kaol mtx,occ slty lams,mod hd aggs,mnr lse,v pr vis por,no fluor.
- **SILTSTONE** @ ~2470m: med-occ dk gry,brn gry i/p, arg,mnr vf aren,micmic,tr carb spks, mod hd,sbblky-sbfiss. SURVEY @ 24745.5m INC:89.3° AZI:202.3°G
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.8 | 66 |
| RES_DEEP (ohm.m) | 13.33 | 66 |
| RES_SHALLOW (ohm.m) | 12.91 | 66 |
| **Δ Res (Deep − Shallow)** | **0.42** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2480 m MD — Interval 2475.0 – 2485.0 m

**Sample Description (spreadsheet):** Sample 2480m: Y siderite in 75% Siltstone, 25% very fine Sandstone, NO FLUOR in SST. TG 55U

| Property | Value |
|----------|-------|
| % Sandstone | 25 |
| Grain Size | vf (max: VF) |
| Grain Ordinal | 1 |
| Porosity Class | fr |
| Loose Grains | Yes |
| Fluorescence | 0.0% nan |
| Total Gas | 55 U |
| FeCO₃ in Siltstone | Y |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2460m: off wh-wh,pl gry,trnsl- occ clr,vf-occ f,rr med,gen wl srt,sbang, mod strg sil cmt,mod-com kaol mtx,occ slty lams,mod hd aggs,mnr lse,v pr vis por,no fluor.
- **SILTSTONE** @ ~2470m: med-occ dk gry,brn gry i/p, arg,mnr vf aren,micmic,tr carb spks, mod hd,sbblky-sbfiss. SURVEY @ 24745.5m INC:89.3° AZI:202.3°G
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 117.0 | 65 |
| RES_DEEP (ohm.m) | 12.43 | 65 |
| RES_SHALLOW (ohm.m) | 11.72 | 65 |
| **Δ Res (Deep − Shallow)** | **0.71** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2490 m MD — Interval 2485.0 – 2495.0 m

**Sample Description (spreadsheet):** Sample 2490m: Y siderite in 80% Siltstone, 20% very fine Sandstone, NO FLUOR in SST. TG 54U

| Property | Value |
|----------|-------|
| % Sandstone | 20 |
| Grain Size | vf (max: VF) |
| Grain Ordinal | 1 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 0.0% nan |
| Total Gas | 54 U |
| FeCO₃ in Siltstone | Y |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2470m: med-occ dk gry,brn gry i/p, arg,mnr vf aren,micmic,tr carb spks, mod hd,sbblky-sbfiss. SURVEY @ 24745.5m INC:89.3° AZI:202.3°G
- **SANDSTONE** @ ~2490m: off wh,v pl brn,trnsl,vf aggs,sbang,wl srt,mod strg sil cmt, mod-com kaol mtx,occ slty lams,mod hd aggs,ti vis por,no fluor. 91 / 4 / 2 / 1 / 2

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 131.7 | 17 |
| RES_DEEP (ohm.m) | 11.57 | 36 |
| RES_SHALLOW (ohm.m) | 10.31 | 36 |
| **Δ Res (Deep − Shallow)** | **1.27** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2500 m MD — Interval 2495.0 – 2502.5 m

**Sample Description (spreadsheet):** Sample 2500m: Y siderite in 70% Siltstone, 30% very fine Sandstone, NO FLUOR in SST. TG 52U

| Property | Value |
|----------|-------|
| % Sandstone | 30 |
| Grain Size | vf (max: VF) |
| Grain Ordinal | 1 |
| Porosity Class | fr |
| Loose Grains | No |
| Fluorescence | 0.0% nan |
| Total Gas | 52 U |
| FeCO₃ in Siltstone | Y |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2490m: off wh,v pl brn,trnsl,vf aggs,sbang,wl srt,mod strg sil cmt, mod-com kaol mtx,occ slty lams,mod hd aggs,ti vis por,no fluor. 91 / 4 / 2 / 1 / 2

**Wireline Log Averages:** _No log data in interval_

---

## 5. Summary Statistics (McKinlay Member)

| Metric | Value |
|--------|-------|
| Intervals analysed | 78 |
| Depth range | 1686 – 2500 m |
| Avg % Sandstone | 80.1% |
| Avg Δ Res (Deep−Shallow) | 2.04 ohm.m |
| Max Δ Res | 7.54 ohm.m |
| Min Δ Res | -0.79 ohm.m |
| Mudlog matches | 51 / 78 |
