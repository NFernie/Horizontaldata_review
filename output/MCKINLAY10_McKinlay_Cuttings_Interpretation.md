# MCKINLAY 10 — McKinlay Member Cuttings & Log Interpretation

**Generated:** 2026-07-10 03:42 UTC  
**Well:** MCKINLAY 10 (MCKINLAY 10)  
**TD:** 2111 m MD  

---

## 1. Data Sources & Methodology

| Source | File | Role |
|--------|------|------|
| Mudlog PDF | `McKinlay 10_Mudlog_Spud-6936'.pdf` | Cuttings lithology descriptions |
| Litho / drill-gas ASCII | `McKINLAY_10_LITHO_100-6935'.ASC`, `McKINLAY_10_DRILL_GAS_6936'.ASC` | 5 m bins (ft→m MD) |
| Formation Tops | `DC30.xlsx`, `Mck_Murta.xlsx` | Reservoir entry & overburden identification |
| Wireline Log (LAS) | `Mck_10` | GR, RES_DEEP, RES_SHALLOW |
| Trajectory | `Mck_10_trajectory` | mTVDss (Z subsea) |

## 2. Formation Top Analysis

### 2.1 Key Tops

| Marker | Depth (m MD) | Source |
|--------|-------------|--------|
| DC30 | 1579.69 | DC30.xlsx |
| McKinlay Member (shallowest) | 1581.45 | Mck_Murta.xlsx |

### 2.2 McKinlay Member Top Classification

**Initial reservoir entry (DC30 + shallowest McKinlay):** 1581.45 m MD

**Target re-entry (lone McKinlay below an overburden entry pair):**
- 1911.71 m MD
- 2015.34 m MD

**Overburden entry (Murta + corresponding McKinlay within 5 m):**
| McKinlay entry (m MD) | Murta (m MD) | Δ (m) | Re-entry (m MD) | Zone length (m) |
|-----------------------|-------------|-------|-----------------|-----------------|
| 1881.53 | 1880.91 | 0.62 | 1911.71 | 30.2 |
| 2003.15 | 2001.78 | 1.37 | 2015.34 | 12.2 |

**McKinlay Member analysis window:** 1581.5 – 2111.0 m MD

**Excluded overburden intervals (entry → re-entry, pay resumes at re-entry):** 1882–1912 m (overburden), 2003–2015 m (overburden)

**Samples in McKinlay Member:** 96 of 106 total
- Excluded pre-reservoir: 0
- Excluded overburden intervals: 10

## 3. Known Shortcomings

> **Read this section before using the output.**

1. **Mudlog PDF text extraction is imperfect.** Depth-to-description assignment uses ±15 m proximity heuristics.
2. **Formation top discrepancies** between Mck_Murta.xlsx and mudlog PDF picks are noted where present.
3. **Well name mapping:** MCKINLAY 10 → `MCKINLAY 10` (verified by TD and LAS WELL header).
4. **Sample intervals** are midpoints between consecutive sample depths — variable widths where spacing is irregular.
5. **Resistivity permeability proxy** is qualitative only (Δ Res = RES_DEEP − RES_SHALLOW).
6. **NULL LAS values** (-999.25) excluded from averages.
7. **Exclusion zones** span from each Murta/McKinlay overburden entry to the next lone McKinlay re-entry below (or entry + 50 m MD if none mapped). Later entry pairs inside an existing exclusion interval are treated as the same overburden excursion. Initial DC30/McKinlay reservoir entry is not excluded.
8. **Litho/gas ASCII ingestion:** 5 m bins from ft→m MD; %SS from lithology codes; **no fluorescence %** in ASCII — cuttings pay may be unavailable.
9. **Grain size / brightness** not parsed from litho ASCII — derived from mudlog text where matched.

## 4. McKinlay Member Sample Intervals

Each section: depth interval, spreadsheet sample, mudlog cuttings, wireline log averages.

### 1585 m MD — Interval 1582.5 – 1587.5 m

**Sample Description (spreadsheet):** Sample 1585m: 100% Sandstone (litho ASCII aggregate) TG 465.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 465.28125 U |
| mTVDss | -1192.64 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.4 | 33 |
| RES_DEEP (ohm.m) | 37.73 | 33 |
| RES_SHALLOW (ohm.m) | 25.67 | 33 |
| **Δ Res (Deep − Shallow)** | **12.06** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1590 m MD — Interval 1587.5 – 1592.5 m

**Sample Description (spreadsheet):** Sample 1590m: 100% Sandstone (litho ASCII aggregate) TG 536.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 536.80625 U |
| mTVDss | -1192.77 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.6 | 33 |
| RES_DEEP (ohm.m) | 32.83 | 33 |
| RES_SHALLOW (ohm.m) | 26.37 | 33 |
| **Δ Res (Deep − Shallow)** | **6.46** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1595 m MD — Interval 1592.5 – 1597.5 m

**Sample Description (spreadsheet):** Sample 1595m: 100% Sandstone (litho ASCII aggregate) TG 602.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Loose Grains | Yes |
| Total Gas | 601.9882352941177 U |
| mTVDss | -1192.89 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1610m: trnsl-clr,off wh,opq,lt (1615) gry,f-crs,rr v crs,pr srt,sbang-sbrnd, 1620 mod strg calc cmt,occ off wh arg mtx, occ liths,tr carb spks & strks,rr qtz ovgths,fri-mod hd,occ lse grs,pr-fr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.7 | 33 |
| RES_DEEP (ohm.m) | 31.32 | 33 |
| RES_SHALLOW (ohm.m) | 26.78 | 33 |
| **Δ Res (Deep − Shallow)** | **4.54** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1600 m MD — Interval 1597.5 – 1602.5 m

**Sample Description (spreadsheet):** Sample 1600m: 100% Sandstone (litho ASCII aggregate) TG 626.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Loose Grains | Yes |
| Total Gas | 626.36875 U |
| mTVDss | -1192.99 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1610m: trnsl-clr,off wh,opq,lt (1615) gry,f-crs,rr v crs,pr srt,sbang-sbrnd, 1620 mod strg calc cmt,occ off wh arg mtx, occ liths,tr carb spks & strks,rr qtz ovgths,fri-mod hd,occ lse grs,pr-fr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.7 | 33 |
| RES_DEEP (ohm.m) | 28.14 | 33 |
| RES_SHALLOW (ohm.m) | 24.72 | 33 |
| **Δ Res (Deep − Shallow)** | **3.42** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1605 m MD — Interval 1602.5 – 1607.5 m

**Sample Description (spreadsheet):** Sample 1605m: 100% Sandstone (litho ASCII aggregate) TG 503.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Loose Grains | Yes |
| Total Gas | 502.95625 U |
| mTVDss | -1193.07 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1610m: trnsl-clr,off wh,opq,lt (1615) gry,f-crs,rr v crs,pr srt,sbang-sbrnd, 1620 mod strg calc cmt,occ off wh arg mtx, occ liths,tr carb spks & strks,rr qtz ovgths,fri-mod hd,occ lse grs,pr-fr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.0 | 32 |
| RES_DEEP (ohm.m) | 31.05 | 32 |
| RES_SHALLOW (ohm.m) | 22.91 | 32 |
| **Δ Res (Deep − Shallow)** | **8.14** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1610 m MD — Interval 1607.5 – 1612.5 m

**Sample Description (spreadsheet):** Sample 1610m: 100% Sandstone (litho ASCII aggregate) TG 466.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Loose Grains | Yes |
| Total Gas | 466.7352941176471 U |
| mTVDss | -1193.16 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1610m: trnsl-clr,off wh,opq,lt (1615) gry,f-crs,rr v crs,pr srt,sbang-sbrnd, 1620 mod strg calc cmt,occ off wh arg mtx, occ liths,tr carb spks & strks,rr qtz ovgths,fri-mod hd,occ lse grs,pr-fr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.8 | 33 |
| RES_DEEP (ohm.m) | 28.28 | 33 |
| RES_SHALLOW (ohm.m) | 20.34 | 33 |
| **Δ Res (Deep − Shallow)** | **7.95** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1615 m MD — Interval 1612.5 – 1617.5 m

**Sample Description (spreadsheet):** Sample 1615m: 100% Sandstone (litho ASCII aggregate) TG 210.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Loose Grains | Yes |
| Total Gas | 210.09999999999997 U |
| mTVDss | -1193.25 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1610m: trnsl-clr,off wh,opq,lt (1615) gry,f-crs,rr v crs,pr srt,sbang-sbrnd, 1620 mod strg calc cmt,occ off wh arg mtx, occ liths,tr carb spks & strks,rr qtz ovgths,fri-mod hd,occ lse grs,pr-fr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 114.1 | 33 |
| RES_DEEP (ohm.m) | 28.83 | 33 |
| RES_SHALLOW (ohm.m) | 19.71 | 33 |
| **Δ Res (Deep − Shallow)** | **9.12** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1620 m MD — Interval 1617.5 – 1622.5 m

**Sample Description (spreadsheet):** Sample 1620m: 100% Sandstone (litho ASCII aggregate) TG 319.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Loose Grains | Yes |
| Total Gas | 319.0235294117647 U |
| mTVDss | -1193.34 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1610m: trnsl-clr,off wh,opq,lt (1615) gry,f-crs,rr v crs,pr srt,sbang-sbrnd, 1620 mod strg calc cmt,occ off wh arg mtx, occ liths,tr carb spks & strks,rr qtz ovgths,fri-mod hd,occ lse grs,pr-fr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 115.9 | 33 |
| RES_DEEP (ohm.m) | 27.92 | 33 |
| RES_SHALLOW (ohm.m) | 19.09 | 33 |
| **Δ Res (Deep − Shallow)** | **8.83** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1625 m MD — Interval 1622.5 – 1627.5 m

**Sample Description (spreadsheet):** Sample 1625m: 100% Sandstone (litho ASCII aggregate) TG 289.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Loose Grains | Yes |
| Total Gas | 289.82500000000005 U |
| mTVDss | -1193.40 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1610m: trnsl-clr,off wh,opq,lt (1615) gry,f-crs,rr v crs,pr srt,sbang-sbrnd, 1620 mod strg calc cmt,occ off wh arg mtx, occ liths,tr carb spks & strks,rr qtz ovgths,fri-mod hd,occ lse grs,pr-fr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 109.1 | 33 |
| RES_DEEP (ohm.m) | 28.48 | 33 |
| RES_SHALLOW (ohm.m) | 20.24 | 33 |
| **Δ Res (Deep − Shallow)** | **8.23** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1630 m MD — Interval 1627.5 – 1632.5 m

**Sample Description (spreadsheet):** Sample 1630m: 100% Sandstone (litho ASCII aggregate) TG 491.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 491.41249999999997 U |
| mTVDss | -1193.38 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.8 | 32 |
| RES_DEEP (ohm.m) | 32.77 | 32 |
| RES_SHALLOW (ohm.m) | 23.20 | 32 |
| **Δ Res (Deep − Shallow)** | **9.58** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1635 m MD — Interval 1632.5 – 1637.5 m

**Sample Description (spreadsheet):** Sample 1635m: 100% Sandstone (litho ASCII aggregate) TG 514.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 514.5117647058823 U |
| mTVDss | -1193.36 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.3 | 33 |
| RES_DEEP (ohm.m) | 35.52 | 33 |
| RES_SHALLOW (ohm.m) | 24.41 | 33 |
| **Δ Res (Deep − Shallow)** | **11.12** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1640 m MD — Interval 1637.5 – 1642.5 m

**Sample Description (spreadsheet):** Sample 1640m: 100% Sandstone (litho ASCII aggregate) TG 459.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 459.45333333333326 U |
| mTVDss | -1193.34 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.2 | 33 |
| RES_DEEP (ohm.m) | 37.18 | 33 |
| RES_SHALLOW (ohm.m) | 26.67 | 33 |
| **Δ Res (Deep − Shallow)** | **10.51** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1645 m MD — Interval 1642.5 – 1647.5 m

**Sample Description (spreadsheet):** Sample 1645m: 100% Sandstone (litho ASCII aggregate) TG 460.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 460.2176470588235 U |
| mTVDss | -1193.32 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1660m: med brn gry,lt- 1670 med gry,arg,aren,com carb spks/ micrlams,tr liths,frm-occ mod hd,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.8 | 33 |
| RES_DEEP (ohm.m) | 42.07 | 33 |
| RES_SHALLOW (ohm.m) | 30.94 | 33 |
| **Δ Res (Deep − Shallow)** | **11.13** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1650 m MD — Interval 1647.5 – 1652.5 m

**Sample Description (spreadsheet):** Sample 1650m: 100% Sandstone (litho ASCII aggregate) TG 495.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 494.9625000000001 U |
| mTVDss | -1193.30 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1660m: med brn gry,lt- 1670 med gry,arg,aren,com carb spks/ micrlams,tr liths,frm-occ mod hd,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.1 | 33 |
| RES_DEEP (ohm.m) | 41.28 | 33 |
| RES_SHALLOW (ohm.m) | 30.07 | 33 |
| **Δ Res (Deep − Shallow)** | **11.21** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1655 m MD — Interval 1652.5 – 1657.5 m

**Sample Description (spreadsheet):** Sample 1655m: 100% Sandstone (litho ASCII aggregate) TG 480.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 480.2125 U |
| mTVDss | -1193.20 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1660m: med brn gry,lt- 1670 med gry,arg,aren,com carb spks/ micrlams,tr liths,frm-occ mod hd,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.7 | 32 |
| RES_DEEP (ohm.m) | 41.05 | 32 |
| RES_SHALLOW (ohm.m) | 29.93 | 32 |
| **Δ Res (Deep − Shallow)** | **11.12** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1660 m MD — Interval 1657.5 – 1662.5 m

**Sample Description (spreadsheet):** Sample 1660m: 100% Sandstone (litho ASCII aggregate) TG 309.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 309.48823529411766 U |
| mTVDss | -1193.09 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1660m: med brn gry,lt- 1670 med gry,arg,aren,com carb spks/ micrlams,tr liths,frm-occ mod hd,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.9 | 33 |
| RES_DEEP (ohm.m) | 42.32 | 33 |
| RES_SHALLOW (ohm.m) | 29.91 | 33 |
| **Δ Res (Deep − Shallow)** | **12.41** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1665 m MD — Interval 1662.5 – 1667.5 m

**Sample Description (spreadsheet):** Sample 1665m: 100% Sandstone (litho ASCII aggregate) TG 447.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 447.36 U |
| mTVDss | -1192.97 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1660m: med brn gry,lt- 1670 med gry,arg,aren,com carb spks/ micrlams,tr liths,frm-occ mod hd,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.6 | 33 |
| RES_DEEP (ohm.m) | 40.84 | 33 |
| RES_SHALLOW (ohm.m) | 27.93 | 33 |
| **Δ Res (Deep − Shallow)** | **12.91** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1670 m MD — Interval 1667.5 – 1672.5 m

**Sample Description (spreadsheet):** Sample 1670m: 100% Sandstone (litho ASCII aggregate) TG 486.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 486.2375 U |
| mTVDss | -1192.86 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1660m: med brn gry,lt- 1670 med gry,arg,aren,com carb spks/ micrlams,tr liths,frm-occ mod hd,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 109.1 | 33 |
| RES_DEEP (ohm.m) | 38.88 | 33 |
| RES_SHALLOW (ohm.m) | 28.49 | 33 |
| **Δ Res (Deep − Shallow)** | **10.39** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1675 m MD — Interval 1672.5 – 1677.5 m

**Sample Description (spreadsheet):** Sample 1675m: 100% Sandstone (litho ASCII aggregate) TG 662.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 662.71875 U |
| mTVDss | -1192.74 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1660m: med brn gry,lt- 1670 med gry,arg,aren,com carb spks/ micrlams,tr liths,frm-occ mod hd,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.3 | 33 |
| RES_DEEP (ohm.m) | 38.41 | 33 |
| RES_SHALLOW (ohm.m) | 27.99 | 33 |
| **Δ Res (Deep − Shallow)** | **10.42** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1680 m MD — Interval 1677.5 – 1682.5 m

**Sample Description (spreadsheet):** Sample 1680m: 100% Sandstone (litho ASCII aggregate) TG 670.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 670.1058823529411 U |
| mTVDss | -1192.61 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.0 | 33 |
| RES_DEEP (ohm.m) | 37.52 | 33 |
| RES_SHALLOW (ohm.m) | 26.83 | 33 |
| **Δ Res (Deep − Shallow)** | **10.70** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1685 m MD — Interval 1682.5 – 1687.5 m

**Sample Description (spreadsheet):** Sample 1685m: 100% Sandstone (litho ASCII aggregate) TG 607.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 607.0875000000001 U |
| mTVDss | -1192.45 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.0 | 32 |
| RES_DEEP (ohm.m) | 33.80 | 32 |
| RES_SHALLOW (ohm.m) | 24.39 | 32 |
| **Δ Res (Deep − Shallow)** | **9.41** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1690 m MD — Interval 1687.5 – 1692.5 m

**Sample Description (spreadsheet):** Sample 1690m: 100% Sandstone (litho ASCII aggregate) TG 462.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 462.4125 U |
| mTVDss | -1192.29 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.7 | 33 |
| RES_DEEP (ohm.m) | 33.80 | 33 |
| RES_SHALLOW (ohm.m) | 24.04 | 33 |
| **Δ Res (Deep − Shallow)** | **9.76** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1695 m MD — Interval 1692.5 – 1697.5 m

**Sample Description (spreadsheet):** Sample 1695m: 100% Sandstone (litho ASCII aggregate) TG 520.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 519.9666666666667 U |
| mTVDss | -1192.13 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.6 | 33 |
| RES_DEEP (ohm.m) | 33.78 | 33 |
| RES_SHALLOW (ohm.m) | 23.63 | 33 |
| **Δ Res (Deep − Shallow)** | **10.15** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1700 m MD — Interval 1697.5 – 1702.5 m

**Sample Description (spreadsheet):** Sample 1700m: 100% Sandstone (litho ASCII aggregate) TG 561.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 561.23125 U |
| mTVDss | -1191.97 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.2 | 33 |
| RES_DEEP (ohm.m) | 33.54 | 33 |
| RES_SHALLOW (ohm.m) | 23.65 | 33 |
| **Δ Res (Deep − Shallow)** | **9.89** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1705 m MD — Interval 1702.5 – 1707.5 m

**Sample Description (spreadsheet):** Sample 1705m: 100% Sandstone (litho ASCII aggregate) TG 531.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | Yes |
| Total Gas | 531.564705882353 U |
| mTVDss | -1191.81 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1720m: mott,trnsl,clr, med gry,grn gry,vf-f,occ med,wl srt, sbrnd-rnd,occ sbang,strg calc cmt,gry arg mtx,com glauc,tr mic, pred lse grs,hd aggs i/p,ti-pr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 111.9 | 33 |
| RES_DEEP (ohm.m) | 33.18 | 33 |
| RES_SHALLOW (ohm.m) | 22.93 | 33 |
| **Δ Res (Deep − Shallow)** | **10.25** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1710 m MD — Interval 1707.5 – 1712.5 m

**Sample Description (spreadsheet):** Sample 1710m: 100% Sandstone (litho ASCII aggregate) TG 476.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | Yes |
| Total Gas | 476.7 U |
| mTVDss | -1191.63 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1720m: mott,trnsl,clr, med gry,grn gry,vf-f,occ med,wl srt, sbrnd-rnd,occ sbang,strg calc cmt,gry arg mtx,com glauc,tr mic, pred lse grs,hd aggs i/p,ti-pr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 112.6 | 32 |
| RES_DEEP (ohm.m) | 34.32 | 32 |
| RES_SHALLOW (ohm.m) | 23.51 | 32 |
| **Δ Res (Deep − Shallow)** | **10.82** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1715 m MD — Interval 1712.5 – 1717.5 m

**Sample Description (spreadsheet):** Sample 1715m: 100% Sandstone (litho ASCII aggregate) TG 284.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | Yes |
| Total Gas | 284.94375 U |
| mTVDss | -1191.45 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1720m: mott,trnsl,clr, med gry,grn gry,vf-f,occ med,wl srt, sbrnd-rnd,occ sbang,strg calc cmt,gry arg mtx,com glauc,tr mic, pred lse grs,hd aggs i/p,ti-pr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 118.2 | 33 |
| RES_DEEP (ohm.m) | 32.85 | 33 |
| RES_SHALLOW (ohm.m) | 23.39 | 33 |
| **Δ Res (Deep − Shallow)** | **9.46** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1720 m MD — Interval 1717.5 – 1722.5 m

**Sample Description (spreadsheet):** Sample 1720m: 100% Sandstone (litho ASCII aggregate) TG 259.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | Yes |
| Total Gas | 259.9294117647059 U |
| mTVDss | -1191.27 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1720m: mott,trnsl,clr, med gry,grn gry,vf-f,occ med,wl srt, sbrnd-rnd,occ sbang,strg calc cmt,gry arg mtx,com glauc,tr mic, pred lse grs,hd aggs i/p,ti-pr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 114.5 | 33 |
| RES_DEEP (ohm.m) | 32.88 | 33 |
| RES_SHALLOW (ohm.m) | 22.35 | 33 |
| **Δ Res (Deep − Shallow)** | **10.53** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1725 m MD — Interval 1722.5 – 1727.5 m

**Sample Description (spreadsheet):** Sample 1725m: 100% Sandstone (litho ASCII aggregate) TG 361.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | Yes |
| Total Gas | 361.1125 U |
| mTVDss | -1191.09 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1720m: mott,trnsl,clr, med gry,grn gry,vf-f,occ med,wl srt, sbrnd-rnd,occ sbang,strg calc cmt,gry arg mtx,com glauc,tr mic, pred lse grs,hd aggs i/p,ti-pr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.8 | 33 |
| RES_DEEP (ohm.m) | 35.78 | 33 |
| RES_SHALLOW (ohm.m) | 23.45 | 33 |
| **Δ Res (Deep − Shallow)** | **12.33** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1730 m MD — Interval 1727.5 – 1732.5 m

**Sample Description (spreadsheet):** Sample 1730m: 60% Sandstone (litho ASCII aggregate) TG 382.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | Yes |
| Total Gas | 382.29411764705884 U |
| mTVDss | -1190.91 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1720m: mott,trnsl,clr, med gry,grn gry,vf-f,occ med,wl srt, sbrnd-rnd,occ sbang,strg calc cmt,gry arg mtx,com glauc,tr mic, pred lse grs,hd aggs i/p,ti-pr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.0 | 33 |
| RES_DEEP (ohm.m) | 41.87 | 33 |
| RES_SHALLOW (ohm.m) | 29.24 | 33 |
| **Δ Res (Deep − Shallow)** | **12.63** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1735 m MD — Interval 1732.5 – 1737.5 m

**Sample Description (spreadsheet):** Sample 1735m: 27% Sandstone (litho ASCII aggregate) TG 692.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 26.666666666666668 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | Yes |
| Total Gas | 692.0999999999999 U |
| mTVDss | -1190.76 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1720m: mott,trnsl,clr, med gry,grn gry,vf-f,occ med,wl srt, sbrnd-rnd,occ sbang,strg calc cmt,gry arg mtx,com glauc,tr mic, pred lse grs,hd aggs i/p,ti-pr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.2 | 32 |
| RES_DEEP (ohm.m) | 54.47 | 32 |
| RES_SHALLOW (ohm.m) | 37.18 | 32 |
| **Δ Res (Deep − Shallow)** | **17.29** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1740 m MD — Interval 1737.5 – 1742.5 m

**Sample Description (spreadsheet):** Sample 1740m: 0% Sandstone (litho ASCII aggregate) TG 540.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 0.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 540.79375 U |
| mTVDss | -1190.65 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.2 | 33 |
| RES_DEEP (ohm.m) | 43.29 | 33 |
| RES_SHALLOW (ohm.m) | 32.66 | 33 |
| **Δ Res (Deep − Shallow)** | **10.63** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1745 m MD — Interval 1742.5 – 1747.5 m

**Sample Description (spreadsheet):** Sample 1745m: 6% Sandstone (litho ASCII aggregate) TG 254.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 5.882352941176471 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 254.60625 U |
| mTVDss | -1190.54 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.1 | 33 |
| RES_DEEP (ohm.m) | 42.45 | 33 |
| RES_SHALLOW (ohm.m) | 31.92 | 33 |
| **Δ Res (Deep − Shallow)** | **10.54** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1750 m MD — Interval 1747.5 – 1752.5 m

**Sample Description (spreadsheet):** Sample 1750m: 0% Sandstone (litho ASCII aggregate) TG 365.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 0.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 365.125 U |
| mTVDss | -1190.42 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.6 | 33 |
| RES_DEEP (ohm.m) | 37.03 | 33 |
| RES_SHALLOW (ohm.m) | 27.37 | 33 |
| **Δ Res (Deep − Shallow)** | **9.66** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1755 m MD — Interval 1752.5 – 1757.5 m

**Sample Description (spreadsheet):** Sample 1755m: 0% Sandstone (litho ASCII aggregate) TG 641.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 0.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 641.5294117647059 U |
| mTVDss | -1190.31 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1770m: med brn gry,lt- med gry,arg,mnr aren,tr carb frags/spks,sft-frm,sbblky-occ sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.6 | 33 |
| RES_DEEP (ohm.m) | 40.09 | 33 |
| RES_SHALLOW (ohm.m) | 29.59 | 33 |
| **Δ Res (Deep − Shallow)** | **10.50** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1760 m MD — Interval 1757.5 – 1762.5 m

**Sample Description (spreadsheet):** Sample 1760m: 8% Sandstone (litho ASCII aggregate) TG 306.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 7.6923076923076925 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 305.9625 U |
| mTVDss | -1190.20 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1770m: med brn gry,lt- med gry,arg,mnr aren,tr carb frags/spks,sft-frm,sbblky-occ sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.1 | 32 |
| RES_DEEP (ohm.m) | 39.29 | 32 |
| RES_SHALLOW (ohm.m) | 28.31 | 32 |
| **Δ Res (Deep − Shallow)** | **10.98** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1765 m MD — Interval 1762.5 – 1767.5 m

**Sample Description (spreadsheet):** Sample 1765m: 47% Sandstone (litho ASCII aggregate) TG 217.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 46.666666666666664 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 217.16875 U |
| mTVDss | -1190.15 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1770m: med brn gry,lt- med gry,arg,mnr aren,tr carb frags/spks,sft-frm,sbblky-occ sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.2 | 33 |
| RES_DEEP (ohm.m) | 41.25 | 33 |
| RES_SHALLOW (ohm.m) | 27.29 | 33 |
| **Δ Res (Deep − Shallow)** | **13.96** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1770 m MD — Interval 1767.5 – 1772.5 m

**Sample Description (spreadsheet):** Sample 1770m: 0% Sandstone (litho ASCII aggregate) TG 282.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 0.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 282.74705882352947 U |
| mTVDss | -1190.11 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1770m: med brn gry,lt- med gry,arg,mnr aren,tr carb frags/spks,sft-frm,sbblky-occ sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.8 | 33 |
| RES_DEEP (ohm.m) | 45.94 | 33 |
| RES_SHALLOW (ohm.m) | 29.50 | 33 |
| **Δ Res (Deep − Shallow)** | **16.44** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1775 m MD — Interval 1772.5 – 1777.5 m

**Sample Description (spreadsheet):** Sample 1775m: 0% Sandstone (litho ASCII aggregate) TG 246.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 0.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 246.8375 U |
| mTVDss | -1190.07 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1770m: med brn gry,lt- med gry,arg,mnr aren,tr carb frags/spks,sft-frm,sbblky-occ sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.4 | 33 |
| RES_DEEP (ohm.m) | 38.72 | 33 |
| RES_SHALLOW (ohm.m) | 24.43 | 33 |
| **Δ Res (Deep − Shallow)** | **14.29** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1780 m MD — Interval 1777.5 – 1782.5 m

**Sample Description (spreadsheet):** Sample 1780m: 75% Sandstone (litho ASCII aggregate) TG 287.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 287.6823529411765 U |
| mTVDss | -1190.03 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1770m: med brn gry,lt- med gry,arg,mnr aren,tr carb frags/spks,sft-frm,sbblky-occ sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.2 | 33 |
| RES_DEEP (ohm.m) | 44.30 | 33 |
| RES_SHALLOW (ohm.m) | 28.93 | 33 |
| **Δ Res (Deep − Shallow)** | **15.37** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1785 m MD — Interval 1782.5 – 1787.5 m

**Sample Description (spreadsheet):** Sample 1785m: 50% Sandstone (litho ASCII aggregate) TG 153.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 50.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 153.85625 U |
| mTVDss | -1189.99 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1770m: med brn gry,lt- med gry,arg,mnr aren,tr carb frags/spks,sft-frm,sbblky-occ sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.8 | 33 |
| RES_DEEP (ohm.m) | 42.51 | 33 |
| RES_SHALLOW (ohm.m) | 28.08 | 33 |
| **Δ Res (Deep − Shallow)** | **14.44** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1790 m MD — Interval 1787.5 – 1792.5 m

**Sample Description (spreadsheet):** Sample 1790m: 14% Sandstone (litho ASCII aggregate) TG 160.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 14.285714285714286 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 160.81875000000002 U |
| mTVDss | -1189.95 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.0 | 32 |
| RES_DEEP (ohm.m) | 48.34 | 32 |
| RES_SHALLOW (ohm.m) | 31.95 | 32 |
| **Δ Res (Deep − Shallow)** | **16.40** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1795 m MD — Interval 1792.5 – 1797.5 m

**Sample Description (spreadsheet):** Sample 1795m: 15% Sandstone (litho ASCII aggregate) TG 146.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 15.384615384615385 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 146.5470588235294 U |
| mTVDss | -1189.90 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.3 | 33 |
| RES_DEEP (ohm.m) | 52.18 | 33 |
| RES_SHALLOW (ohm.m) | 31.92 | 33 |
| **Δ Res (Deep − Shallow)** | **20.26** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1800 m MD — Interval 1797.5 – 1802.5 m

**Sample Description (spreadsheet):** Sample 1800m: 100% Sandstone (litho ASCII aggregate) TG 138.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 138.8125 U |
| mTVDss | -1189.86 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.0 | 33 |
| RES_DEEP (ohm.m) | 55.02 | 33 |
| RES_SHALLOW (ohm.m) | 33.06 | 33 |
| **Δ Res (Deep − Shallow)** | **21.96** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1805 m MD — Interval 1802.5 – 1807.5 m

**Sample Description (spreadsheet):** Sample 1805m: 100% Sandstone (litho ASCII aggregate) TG 140.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 140.18823529411767 U |
| mTVDss | -1189.82 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1820m: mott,pl gry,mlky, trnsl,vf-f,wl srt,sbang-sbrnd,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.6 | 33 |
| RES_DEEP (ohm.m) | 65.98 | 33 |
| RES_SHALLOW (ohm.m) | 34.82 | 33 |
| **Δ Res (Deep − Shallow)** | **31.16** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1810 m MD — Interval 1807.5 – 1812.5 m

**Sample Description (spreadsheet):** Sample 1810m: 0% Sandstone (litho ASCII aggregate) TG 93.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 0.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 93.84375 U |
| mTVDss | -1189.78 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1820m: mott,pl gry,mlky, trnsl,vf-f,wl srt,sbang-sbrnd,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 61.1 | 33 |
| RES_DEEP (ohm.m) | 61.09 | 33 |
| RES_SHALLOW (ohm.m) | 35.46 | 33 |
| **Δ Res (Deep − Shallow)** | **25.63** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1815 m MD — Interval 1812.5 – 1817.5 m

**Sample Description (spreadsheet):** Sample 1815m: 4% Sandstone (litho ASCII aggregate) TG 115.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 3.5714285714285716 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 115.1625 U |
| mTVDss | -1189.74 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1820m: mott,pl gry,mlky, trnsl,vf-f,wl srt,sbang-sbrnd,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 61.8 | 32 |
| RES_DEEP (ohm.m) | 55.95 | 32 |
| RES_SHALLOW (ohm.m) | 37.49 | 32 |
| **Δ Res (Deep − Shallow)** | **18.46** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1820 m MD — Interval 1817.5 – 1822.5 m

**Sample Description (spreadsheet):** Sample 1820m: 57% Sandstone (litho ASCII aggregate) TG 140.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 57.142857142857146 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 140.6058823529412 U |
| mTVDss | -1189.71 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1820m: mott,pl gry,mlky, trnsl,vf-f,wl srt,sbang-sbrnd,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.2 | 33 |
| RES_DEEP (ohm.m) | 53.22 | 33 |
| RES_SHALLOW (ohm.m) | 39.01 | 33 |
| **Δ Res (Deep − Shallow)** | **14.21** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1825 m MD — Interval 1822.5 – 1827.5 m

**Sample Description (spreadsheet):** Sample 1825m: 67% Sandstone (litho ASCII aggregate) TG 174.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 66.66666666666667 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 174.61875 U |
| mTVDss | -1189.69 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1820m: mott,pl gry,mlky, trnsl,vf-f,wl srt,sbang-sbrnd,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.1 | 33 |
| RES_DEEP (ohm.m) | 50.32 | 33 |
| RES_SHALLOW (ohm.m) | 32.68 | 33 |
| **Δ Res (Deep − Shallow)** | **17.64** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1830 m MD — Interval 1827.5 – 1832.5 m

**Sample Description (spreadsheet):** Sample 1830m: 85% Sandstone (litho ASCII aggregate) TG 142.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 84.61538461538461 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 142.45294117647057 U |
| mTVDss | -1189.67 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1820m: mott,pl gry,mlky, trnsl,vf-f,wl srt,sbang-sbrnd,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.6 | 33 |
| RES_DEEP (ohm.m) | 49.79 | 33 |
| RES_SHALLOW (ohm.m) | 29.48 | 33 |
| **Δ Res (Deep − Shallow)** | **20.31** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1835 m MD — Interval 1832.5 – 1837.5 m

**Sample Description (spreadsheet):** Sample 1835m: 100% Sandstone (litho ASCII aggregate) TG 123.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 123.01764705882354 U |
| mTVDss | -1189.65 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1820m: mott,pl gry,mlky, trnsl,vf-f,wl srt,sbang-sbrnd,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.9 | 33 |
| RES_DEEP (ohm.m) | 56.04 | 33 |
| RES_SHALLOW (ohm.m) | 31.13 | 33 |
| **Δ Res (Deep − Shallow)** | **24.91** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1840 m MD — Interval 1837.5 – 1842.5 m

**Sample Description (spreadsheet):** Sample 1840m: 100% Sandstone (litho ASCII aggregate) TG 115.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 115.18125 U |
| mTVDss | -1189.63 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.1 | 32 |
| RES_DEEP (ohm.m) | 69.15 | 32 |
| RES_SHALLOW (ohm.m) | 34.59 | 32 |
| **Δ Res (Deep − Shallow)** | **34.56** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1845 m MD — Interval 1842.5 – 1847.5 m

**Sample Description (spreadsheet):** Sample 1845m: 77% Sandstone (litho ASCII aggregate) TG 124.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 76.92307692307692 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 124.75294117647057 U |
| mTVDss | -1189.64 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1860m: med brn gry,lt- med gry,pl brn,tr dk gry,arg,mnr aren,tr carb spks/micrlams,frm- occ mod hd,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.1 | 33 |
| RES_DEEP (ohm.m) | 54.72 | 33 |
| RES_SHALLOW (ohm.m) | 30.81 | 33 |
| **Δ Res (Deep − Shallow)** | **23.90** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1850 m MD — Interval 1847.5 – 1852.5 m

**Sample Description (spreadsheet):** Sample 1850m: 79% Sandstone (litho ASCII aggregate) TG 123.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 78.57142857142857 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 123.03125 U |
| mTVDss | -1189.68 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1860m: med brn gry,lt- med gry,pl brn,tr dk gry,arg,mnr aren,tr carb spks/micrlams,frm- occ mod hd,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.8 | 33 |
| RES_DEEP (ohm.m) | 56.06 | 33 |
| RES_SHALLOW (ohm.m) | 29.22 | 33 |
| **Δ Res (Deep − Shallow)** | **26.84** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1855 m MD — Interval 1852.5 – 1857.5 m

**Sample Description (spreadsheet):** Sample 1855m: 33% Sandstone (litho ASCII aggregate) TG 123.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 33.333333333333336 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 123.16470588235295 U |
| mTVDss | -1189.71 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1860m: med brn gry,lt- med gry,pl brn,tr dk gry,arg,mnr aren,tr carb spks/micrlams,frm- occ mod hd,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.8 | 33 |
| RES_DEEP (ohm.m) | 51.85 | 33 |
| RES_SHALLOW (ohm.m) | 28.42 | 33 |
| **Δ Res (Deep − Shallow)** | **23.42** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1860 m MD — Interval 1857.5 – 1862.5 m

**Sample Description (spreadsheet):** Sample 1860m: 92% Sandstone (litho ASCII aggregate) TG 120.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 92.3076923076923 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 120.6 U |
| mTVDss | -1189.74 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1860m: med brn gry,lt- med gry,pl brn,tr dk gry,arg,mnr aren,tr carb spks/micrlams,frm- occ mod hd,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.8 | 33 |
| RES_DEEP (ohm.m) | 41.75 | 33 |
| RES_SHALLOW (ohm.m) | 25.66 | 33 |
| **Δ Res (Deep − Shallow)** | **16.09** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1865 m MD — Interval 1862.5 – 1867.5 m

**Sample Description (spreadsheet):** Sample 1865m: 92% Sandstone (litho ASCII aggregate) TG 135.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 92.3076923076923 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 135.19375000000002 U |
| mTVDss | -1189.77 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1860m: med brn gry,lt- med gry,pl brn,tr dk gry,arg,mnr aren,tr carb spks/micrlams,frm- occ mod hd,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.6 | 32 |
| RES_DEEP (ohm.m) | 49.84 | 32 |
| RES_SHALLOW (ohm.m) | 28.54 | 32 |
| **Δ Res (Deep − Shallow)** | **21.29** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1870 m MD — Interval 1867.5 – 1872.5 m

**Sample Description (spreadsheet):** Sample 1870m: 38% Sandstone (litho ASCII aggregate) TG 119.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 38.46153846153846 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 119.74705882352941 U |
| mTVDss | -1189.83 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1860m: med brn gry,lt- med gry,pl brn,tr dk gry,arg,mnr aren,tr carb spks/micrlams,frm- occ mod hd,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.4 | 33 |
| RES_DEEP (ohm.m) | 57.25 | 33 |
| RES_SHALLOW (ohm.m) | 30.69 | 33 |
| **Δ Res (Deep − Shallow)** | **26.56** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1875 m MD — Interval 1872.5 – 1877.5 m

**Sample Description (spreadsheet):** Sample 1875m: 47% Sandstone (litho ASCII aggregate) TG 120.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 46.666666666666664 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 120.80625 U |
| mTVDss | -1189.95 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1860m: med brn gry,lt- med gry,pl brn,tr dk gry,arg,mnr aren,tr carb spks/micrlams,frm- occ mod hd,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.6 | 33 |
| RES_DEEP (ohm.m) | 43.93 | 33 |
| RES_SHALLOW (ohm.m) | 27.07 | 33 |
| **Δ Res (Deep − Shallow)** | **16.86** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1915 m MD — Interval 1912.5 – 1917.5 m

**Sample Description (spreadsheet):** Sample 1915m: 100% Sandstone (litho ASCII aggregate) TG 122.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 122.19411764705883 U |
| mTVDss | -1191.22 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1910m: mott,off wh,med gry,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.3 | 33 |
| RES_DEEP (ohm.m) | 53.34 | 33 |
| RES_SHALLOW (ohm.m) | 30.37 | 33 |
| **Δ Res (Deep − Shallow)** | **22.97** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1920 m MD — Interval 1917.5 – 1922.5 m

**Sample Description (spreadsheet):** Sample 1920m: 83% Sandstone (litho ASCII aggregate) TG 128.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 83.33333333333333 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 128.275 U |
| mTVDss | -1191.42 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1910m: mott,off wh,med gry,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.8 | 32 |
| RES_DEEP (ohm.m) | 40.65 | 32 |
| RES_SHALLOW (ohm.m) | 27.76 | 32 |
| **Δ Res (Deep − Shallow)** | **12.90** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1925 m MD — Interval 1922.5 – 1927.5 m

**Sample Description (spreadsheet):** Sample 1925m: 33% Sandstone (litho ASCII aggregate) TG 118.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 33.333333333333336 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 118.51875 U |
| mTVDss | -1191.65 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1910m: mott,off wh,med gry,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.0 | 33 |
| RES_DEEP (ohm.m) | 37.53 | 33 |
| RES_SHALLOW (ohm.m) | 29.16 | 33 |
| **Δ Res (Deep − Shallow)** | **8.38** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1930 m MD — Interval 1927.5 – 1932.5 m

**Sample Description (spreadsheet):** Sample 1930m: 29% Sandstone (litho ASCII aggregate) TG 110.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 28.571428571428573 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 110.40588235294118 U |
| mTVDss | -1191.88 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.6 | 33 |
| RES_DEEP (ohm.m) | 37.75 | 33 |
| RES_SHALLOW (ohm.m) | 29.56 | 33 |
| **Δ Res (Deep − Shallow)** | **8.19** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1935 m MD — Interval 1932.5 – 1937.5 m

**Sample Description (spreadsheet):** Sample 1935m: 25% Sandstone (litho ASCII aggregate) TG 90.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 25.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 90.07647058823531 U |
| mTVDss | -1192.12 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.9 | 33 |
| RES_DEEP (ohm.m) | 37.03 | 33 |
| RES_SHALLOW (ohm.m) | 28.73 | 33 |
| **Δ Res (Deep − Shallow)** | **8.30** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1940 m MD — Interval 1937.5 – 1942.5 m

**Sample Description (spreadsheet):** Sample 1940m: 67% Sandstone (litho ASCII aggregate) TG 76.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 66.66666666666667 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 76.74117647058823 U |
| mTVDss | -1192.35 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.5 | 33 |
| RES_DEEP (ohm.m) | 32.86 | 33 |
| RES_SHALLOW (ohm.m) | 24.90 | 33 |
| **Δ Res (Deep − Shallow)** | **7.96** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1945 m MD — Interval 1942.5 – 1947.5 m

**Sample Description (spreadsheet):** Sample 1945m: 32% Sandstone (litho ASCII aggregate) TG 107.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 32.142857142857146 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 107.88749999999999 U |
| mTVDss | -1192.58 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1960m: lt-med gry,med brn gry,arg,aren i/p,com carb spks/ frags,frm-mod hd,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.6 | 32 |
| RES_DEEP (ohm.m) | 29.97 | 32 |
| RES_SHALLOW (ohm.m) | 22.73 | 32 |
| **Δ Res (Deep − Shallow)** | **7.24** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1950 m MD — Interval 1947.5 – 1952.5 m

**Sample Description (spreadsheet):** Sample 1950m: 69% Sandstone (litho ASCII aggregate) TG 101.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 69.23076923076923 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 101.275 U |
| mTVDss | -1192.81 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1960m: lt-med gry,med brn gry,arg,aren i/p,com carb spks/ frags,frm-mod hd,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.3 | 33 |
| RES_DEEP (ohm.m) | 27.87 | 33 |
| RES_SHALLOW (ohm.m) | 20.94 | 33 |
| **Δ Res (Deep − Shallow)** | **6.92** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1955 m MD — Interval 1952.5 – 1957.5 m

**Sample Description (spreadsheet):** Sample 1955m: 50% Sandstone (litho ASCII aggregate) TG 95.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 50.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 95.45882352941175 U |
| mTVDss | -1192.97 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1960m: lt-med gry,med brn gry,arg,aren i/p,com carb spks/ frags,frm-mod hd,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.8 | 33 |
| RES_DEEP (ohm.m) | 26.23 | 33 |
| RES_SHALLOW (ohm.m) | 21.62 | 33 |
| **Δ Res (Deep − Shallow)** | **4.61** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1960 m MD — Interval 1957.5 – 1962.5 m

**Sample Description (spreadsheet):** Sample 1960m: 44% Sandstone (litho ASCII aggregate) TG 107.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 43.75 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 107.7375 U |
| mTVDss | -1193.13 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1960m: lt-med gry,med brn gry,arg,aren i/p,com carb spks/ frags,frm-mod hd,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.4 | 33 |
| RES_DEEP (ohm.m) | 26.14 | 33 |
| RES_SHALLOW (ohm.m) | 21.03 | 33 |
| **Δ Res (Deep − Shallow)** | **5.11** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1965 m MD — Interval 1962.5 – 1967.5 m

**Sample Description (spreadsheet):** Sample 1965m: 47% Sandstone (litho ASCII aggregate) TG 92.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 47.05882352941177 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 92.71176470588235 U |
| mTVDss | -1193.29 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1960m: lt-med gry,med brn gry,arg,aren i/p,com carb spks/ frags,frm-mod hd,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.4 | 33 |
| RES_DEEP (ohm.m) | 24.94 | 33 |
| RES_SHALLOW (ohm.m) | 20.78 | 33 |
| **Δ Res (Deep − Shallow)** | **4.16** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1970 m MD — Interval 1967.5 – 1972.5 m

**Sample Description (spreadsheet):** Sample 1970m: 61% Sandstone (litho ASCII aggregate) TG 125.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 60.714285714285715 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 125.90625 U |
| mTVDss | -1193.45 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1960m: lt-med gry,med brn gry,arg,aren i/p,com carb spks/ frags,frm-mod hd,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.8 | 32 |
| RES_DEEP (ohm.m) | 24.82 | 32 |
| RES_SHALLOW (ohm.m) | 20.92 | 32 |
| **Δ Res (Deep − Shallow)** | **3.90** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1975 m MD — Interval 1972.5 – 1977.5 m

**Sample Description (spreadsheet):** Sample 1975m: 33% Sandstone (litho ASCII aggregate) TG 112.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 33.333333333333336 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 112.23750000000001 U |
| mTVDss | -1193.61 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1960m: lt-med gry,med brn gry,arg,aren i/p,com carb spks/ frags,frm-mod hd,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.0 | 33 |
| RES_DEEP (ohm.m) | 24.91 | 33 |
| RES_SHALLOW (ohm.m) | 21.03 | 33 |
| **Δ Res (Deep − Shallow)** | **3.88** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1980 m MD — Interval 1977.5 – 1982.5 m

**Sample Description (spreadsheet):** Sample 1980m: 11% Sandstone (litho ASCII aggregate) TG 107.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 10.714285714285714 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 107.74117647058823 U |
| mTVDss | -1193.72 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.4 | 33 |
| RES_DEEP (ohm.m) | 26.16 | 33 |
| RES_SHALLOW (ohm.m) | 21.72 | 33 |
| **Δ Res (Deep − Shallow)** | **4.44** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1985 m MD — Interval 1982.5 – 1987.5 m

**Sample Description (spreadsheet):** Sample 1985m: 53% Sandstone (litho ASCII aggregate) TG 114.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 53.333333333333336 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Loose Grains | No |
| Total Gas | 113.98124999999999 U |
| mTVDss | -1193.79 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2000m: mott,off wh,med gry, mlky,clr-trnsl,vf-f,wl srt,sbang-sbrnd, strg calc cmt,off wh arg mtx,tr liths, mod hd-hd,v pr vis por,no fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.7 | 33 |
| RES_DEEP (ohm.m) | 32.66 | 33 |
| RES_SHALLOW (ohm.m) | 24.29 | 33 |
| **Δ Res (Deep − Shallow)** | **8.37** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1990 m MD — Interval 1987.5 – 1992.5 m

**Sample Description (spreadsheet):** Sample 1990m: 29% Sandstone (litho ASCII aggregate) TG 97.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 29.41176470588235 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Loose Grains | No |
| Total Gas | 97.76470588235293 U |
| mTVDss | -1193.86 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2000m: mott,off wh,med gry, mlky,clr-trnsl,vf-f,wl srt,sbang-sbrnd, strg calc cmt,off wh arg mtx,tr liths, mod hd-hd,v pr vis por,no fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.4 | 33 |
| RES_DEEP (ohm.m) | 37.18 | 33 |
| RES_SHALLOW (ohm.m) | 27.85 | 33 |
| **Δ Res (Deep − Shallow)** | **9.33** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1995 m MD — Interval 1992.5 – 1997.5 m

**Sample Description (spreadsheet):** Sample 1995m: 50% Sandstone (litho ASCII aggregate) TG 96.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 50.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Loose Grains | No |
| Total Gas | 96.83125 U |
| mTVDss | -1193.93 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2000m: mott,off wh,med gry, mlky,clr-trnsl,vf-f,wl srt,sbang-sbrnd, strg calc cmt,off wh arg mtx,tr liths, mod hd-hd,v pr vis por,no fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.4 | 32 |
| RES_DEEP (ohm.m) | 33.35 | 32 |
| RES_SHALLOW (ohm.m) | 22.64 | 32 |
| **Δ Res (Deep − Shallow)** | **10.71** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2000 m MD — Interval 1997.5 – 2002.5 m

**Sample Description (spreadsheet):** Sample 2000m: 31% Sandstone (litho ASCII aggregate) TG 115.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 31.25 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Loose Grains | No |
| Total Gas | 115.7875 U |
| mTVDss | -1194.00 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2000m: mott,off wh,med gry, mlky,clr-trnsl,vf-f,wl srt,sbang-sbrnd, strg calc cmt,off wh arg mtx,tr liths, mod hd-hd,v pr vis por,no fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.3 | 33 |
| RES_DEEP (ohm.m) | 35.95 | 33 |
| RES_SHALLOW (ohm.m) | 24.46 | 33 |
| **Δ Res (Deep − Shallow)** | **11.49** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2020 m MD — Interval 2017.5 – 2022.5 m

**Sample Description (spreadsheet):** Sample 2020m: 100% Sandstone (litho ASCII aggregate) TG 142.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 142.60625 U |
| mTVDss | -1194.21 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.3 | 32 |
| RES_DEEP (ohm.m) | 41.58 | 32 |
| RES_SHALLOW (ohm.m) | 27.86 | 32 |
| **Δ Res (Deep − Shallow)** | **13.72** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2025 m MD — Interval 2022.5 – 2027.5 m

**Sample Description (spreadsheet):** Sample 2025m: 100% Sandstone (litho ASCII aggregate) TG 174.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 174.26875 U |
| mTVDss | -1194.25 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.9 | 33 |
| RES_DEEP (ohm.m) | 37.68 | 33 |
| RES_SHALLOW (ohm.m) | 26.73 | 33 |
| **Δ Res (Deep − Shallow)** | **10.95** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2030 m MD — Interval 2027.5 – 2032.5 m

**Sample Description (spreadsheet):** Sample 2030m: 100% Sandstone (litho ASCII aggregate) TG 173.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 173.54117647058823 U |
| mTVDss | -1194.30 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.8 | 33 |
| RES_DEEP (ohm.m) | 38.81 | 33 |
| RES_SHALLOW (ohm.m) | 28.89 | 33 |
| **Δ Res (Deep − Shallow)** | **9.91** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2035 m MD — Interval 2032.5 – 2037.5 m

**Sample Description (spreadsheet):** Sample 2035m: 100% Sandstone (litho ASCII aggregate) TG 183.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 183.14375 U |
| mTVDss | -1194.36 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.1 | 33 |
| RES_DEEP (ohm.m) | 40.27 | 33 |
| RES_SHALLOW (ohm.m) | 30.22 | 33 |
| **Δ Res (Deep − Shallow)** | **10.05** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2040 m MD — Interval 2037.5 – 2042.5 m

**Sample Description (spreadsheet):** Sample 2040m: 100% Sandstone (litho ASCII aggregate) TG 223.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 223.4 U |
| mTVDss | -1194.44 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.0 | 33 |
| RES_DEEP (ohm.m) | 35.89 | 33 |
| RES_SHALLOW (ohm.m) | 26.89 | 33 |
| **Δ Res (Deep − Shallow)** | **9.00** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2045 m MD — Interval 2042.5 – 2047.5 m

**Sample Description (spreadsheet):** Sample 2045m: 100% Sandstone (litho ASCII aggregate) TG 136.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 136.82941176470587 U |
| mTVDss | -1194.51 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2060m: lt-med gry,brn gry, arg,mnr aren,tr carb spks/frags, tr liths,sft-frm,occ mod hd, sbblky-blky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.1 | 33 |
| RES_DEEP (ohm.m) | 34.48 | 33 |
| RES_SHALLOW (ohm.m) | 26.88 | 33 |
| **Δ Res (Deep − Shallow)** | **7.60** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2050 m MD — Interval 2047.5 – 2052.5 m

**Sample Description (spreadsheet):** Sample 2050m: 100% Sandstone (litho ASCII aggregate) TG 165.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 165.90625 U |
| mTVDss | -1194.58 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2060m: lt-med gry,brn gry, arg,mnr aren,tr carb spks/frags, tr liths,sft-frm,occ mod hd, sbblky-blky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.3 | 32 |
| RES_DEEP (ohm.m) | 35.42 | 32 |
| RES_SHALLOW (ohm.m) | 27.53 | 32 |
| **Δ Res (Deep − Shallow)** | **7.89** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2055 m MD — Interval 2052.5 – 2057.5 m

**Sample Description (spreadsheet):** Sample 2055m: 100% Sandstone (litho ASCII aggregate) TG 164.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 164.22941176470587 U |
| mTVDss | -1194.65 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2060m: lt-med gry,brn gry, arg,mnr aren,tr carb spks/frags, tr liths,sft-frm,occ mod hd, sbblky-blky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.8 | 33 |
| RES_DEEP (ohm.m) | 41.77 | 33 |
| RES_SHALLOW (ohm.m) | 33.27 | 33 |
| **Δ Res (Deep − Shallow)** | **8.50** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2060 m MD — Interval 2057.5 – 2062.5 m

**Sample Description (spreadsheet):** Sample 2060m: 100% Sandstone (litho ASCII aggregate) TG 147.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 147.075 U |
| mTVDss | -1194.73 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2060m: lt-med gry,brn gry, arg,mnr aren,tr carb spks/frags, tr liths,sft-frm,occ mod hd, sbblky-blky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.4 | 33 |
| RES_DEEP (ohm.m) | 35.32 | 33 |
| RES_SHALLOW (ohm.m) | 28.20 | 33 |
| **Δ Res (Deep − Shallow)** | **7.12** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2065 m MD — Interval 2062.5 – 2067.5 m

**Sample Description (spreadsheet):** Sample 2065m: 100% Sandstone (litho ASCII aggregate) TG 166.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 166.77647058823527 U |
| mTVDss | -1194.80 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2060m: lt-med gry,brn gry, arg,mnr aren,tr carb spks/frags, tr liths,sft-frm,occ mod hd, sbblky-blky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 108.1 | 33 |
| RES_DEEP (ohm.m) | 33.76 | 33 |
| RES_SHALLOW (ohm.m) | 26.16 | 33 |
| **Δ Res (Deep − Shallow)** | **7.60** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2070 m MD — Interval 2067.5 – 2072.5 m

**Sample Description (spreadsheet):** Sample 2070m: 100% Sandstone (litho ASCII aggregate) TG 168.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 168.24375 U |
| mTVDss | -1194.87 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2060m: lt-med gry,brn gry, arg,mnr aren,tr carb spks/frags, tr liths,sft-frm,occ mod hd, sbblky-blky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.9 | 33 |
| RES_DEEP (ohm.m) | 29.61 | 33 |
| RES_SHALLOW (ohm.m) | 22.71 | 33 |
| **Δ Res (Deep − Shallow)** | **6.90** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2075 m MD — Interval 2072.5 – 2077.5 m

**Sample Description (spreadsheet):** Sample 2075m: 100% Sandstone (litho ASCII aggregate) TG 144.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 144.2375 U |
| mTVDss | -1194.94 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2060m: lt-med gry,brn gry, arg,mnr aren,tr carb spks/frags, tr liths,sft-frm,occ mod hd, sbblky-blky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.1 | 32 |
| RES_DEEP (ohm.m) | 32.87 | 32 |
| RES_SHALLOW (ohm.m) | 25.40 | 32 |
| **Δ Res (Deep − Shallow)** | **7.47** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2080 m MD — Interval 2077.5 – 2082.5 m

**Sample Description (spreadsheet):** Sample 2080m: 100% Sandstone (litho ASCII aggregate) TG 117.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 117.02352941176473 U |
| mTVDss | -1195.02 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.2 | 33 |
| RES_DEEP (ohm.m) | 45.09 | 33 |
| RES_SHALLOW (ohm.m) | 30.63 | 33 |
| **Δ Res (Deep − Shallow)** | **14.46** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2085 m MD — Interval 2082.5 – 2087.5 m

**Sample Description (spreadsheet):** Sample 2085m: 69% Sandstone (litho ASCII aggregate) TG 116.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 69.23076923076923 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 116.48125 U |
| mTVDss | -1195.09 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.0 | 33 |
| RES_DEEP (ohm.m) | 59.67 | 33 |
| RES_SHALLOW (ohm.m) | 33.70 | 33 |
| **Δ Res (Deep − Shallow)** | **25.96** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2090 m MD — Interval 2087.5 – 2092.5 m

**Sample Description (spreadsheet):** Sample 2090m: 21% Sandstone (litho ASCII aggregate) TG 116.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 21.428571428571427 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 116.64117647058822 U |
| mTVDss | -1195.16 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.3 | 33 |
| RES_DEEP (ohm.m) | 83.05 | 33 |
| RES_SHALLOW (ohm.m) | 36.17 | 33 |
| **Δ Res (Deep − Shallow)** | **46.89** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2095 m MD — Interval 2092.5 – 2097.5 m

**Sample Description (spreadsheet):** Sample 2095m: 44% Sandstone (litho ASCII aggregate) TG 108.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 43.75 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 108.075 U |
| mTVDss | -1195.24 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 57.5 | 33 |
| RES_DEEP (ohm.m) | 70.50 | 33 |
| RES_SHALLOW (ohm.m) | 38.43 | 33 |
| **Δ Res (Deep − Shallow)** | **32.07** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2100 m MD — Interval 2097.5 – 2102.5 m

**Sample Description (spreadsheet):** Sample 2100m: 6% Sandstone (litho ASCII aggregate) TG 72.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 6.25 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 72.68125 U |
| mTVDss | -1195.33 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.7 | 32 |
| RES_DEEP (ohm.m) | 43.25 | 32 |
| RES_SHALLOW (ohm.m) | 28.87 | 32 |
| **Δ Res (Deep − Shallow)** | **14.39** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2105 m MD — Interval 2102.5 – 2107.5 m

**Sample Description (spreadsheet):** Sample 2105m: 10% Sandstone (litho ASCII aggregate) TG 80.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 10.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 80.10588235294117 U |
| mTVDss | -1195.42 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2120m: lt-med gry,brn gry, arg,mnr aren,tr calc,tr carb spks/ 2130 frags,tr liths,sft-frm,occ mod hd, sbblky-blky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.8 | 33 |
| RES_DEEP (ohm.m) | 40.15 | 33 |
| RES_SHALLOW (ohm.m) | 27.93 | 33 |
| **Δ Res (Deep − Shallow)** | **12.22** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2110 m MD — Interval 2107.5 – 2112.5 m

**Sample Description (spreadsheet):** Sample 2110m: 0% Sandstone (litho ASCII aggregate) TG 98.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 0.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 98.36875 U |
| mTVDss | -1195.52 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2120m: lt-med gry,brn gry, arg,mnr aren,tr calc,tr carb spks/ 2130 frags,tr liths,sft-frm,occ mod hd, sbblky-blky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.9 | 23 |
| RES_DEEP (ohm.m) | 41.03 | 24 |
| RES_SHALLOW (ohm.m) | 28.55 | 24 |
| **Δ Res (Deep − Shallow)** | **12.48** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

## 5. Summary Statistics (McKinlay Member)

| Metric | Value |
|--------|-------|
| Intervals analysed | 96 |
| Depth range | 1585 – 2110 m |
| Avg % Sandstone | 68.4% |
| Avg Δ Res (Deep−Shallow) | 13.06 ohm.m |
| Max Δ Res | 46.89 ohm.m |
| Min Δ Res | 3.42 ohm.m |
| Mudlog matches | 65 / 96 |
