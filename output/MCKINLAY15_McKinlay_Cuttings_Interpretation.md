# MCKINLAY 15 — McKinlay Member Cuttings & Log Interpretation

**Generated:** 2026-07-10 03:39 UTC  
**Well:** MCKINLAY 15 (MCKINLAY 15)  
**TD:** 2589 m MD  

---

## 1. Data Sources & Methodology

| Source | File | Role |
|--------|------|------|
| Mudlog PDF | `McKinlay 15_Mudlog_Spud-8495ft_Final Field.pdf` | Cuttings lithology descriptions |
| Litho / drill-gas ASCII | `McKinlay 15_Litho_Spud-8495ft.ASC`, `McKinlay 15_Drill-Gas_Spud-8495ft.ASC` | 5 m bins (ft→m MD) |
| Formation Tops | `DC30.xlsx`, `Mck_Murta.xlsx` | Reservoir entry & overburden identification |
| Wireline Log (LAS) | `Mck_15` | GR, RES_DEEP, RES_SHALLOW |
| Trajectory | `Mck_15_trajectory` | mTVDss (Z subsea) |

## 2. Formation Top Analysis

### 2.1 Key Tops

| Marker | Depth (m MD) | Source |
|--------|-------------|--------|
| DC30 | 1717.85 | DC30.xlsx |
| McKinlay Member (shallowest) | 1717.85 | Mck_Murta.xlsx |

### 2.2 McKinlay Member Top Classification

**Initial reservoir entry (DC30 + shallowest McKinlay):** 1717.85 m MD

**Target re-entry (lone McKinlay below an overburden entry pair):**
- 1968.09 m MD
- 2495.41 m MD

**Overburden entry (Murta + corresponding McKinlay within 5 m):**
| McKinlay entry (m MD) | Murta (m MD) | Δ (m) | Re-entry (m MD) | Zone length (m) |
|-----------------------|-------------|-------|-----------------|-----------------|
| 1838.25 | 1841.35 | 3.10 | 1968.09 | 129.8 |
| 2048.35 | 2048.35 | 0.00 | 2495.41 | 447.1 |

**McKinlay Member analysis window:** 1717.8 – 2589.1 m MD

**Excluded overburden intervals (entry → re-entry, pay resumes at re-entry):** 1838–1968 m (overburden), 2048–2495 m (overburden)

**Samples in McKinlay Member:** 57 of 174 total
- Excluded pre-reservoir: 0
- Excluded overburden intervals: 117

## 3. Known Shortcomings

> **Read this section before using the output.**

1. **Mudlog PDF text extraction is imperfect.** Depth-to-description assignment uses ±15 m proximity heuristics.
2. **Formation top discrepancies** between Mck_Murta.xlsx and mudlog PDF picks are noted where present.
3. **Well name mapping:** MCKINLAY 15 → `MCKINLAY 15` (verified by TD and LAS WELL header).
4. **Sample intervals** are midpoints between consecutive sample depths — variable widths where spacing is irregular.
5. **Resistivity permeability proxy** is qualitative only (Δ Res = RES_DEEP − RES_SHALLOW).
6. **NULL LAS values** (-999.25) excluded from averages.
7. **Exclusion zones** span from each Murta/McKinlay overburden entry to the next lone McKinlay re-entry below (or entry + 50 m MD if none mapped). Later entry pairs inside an existing exclusion interval are treated as the same overburden excursion. Initial DC30/McKinlay reservoir entry is not excluded.
8. **Litho/gas ASCII ingestion:** 5 m bins from ft→m MD; %SS from lithology codes; **no fluorescence %** in ASCII — cuttings pay may be unavailable.
9. **Grain size / brightness** not parsed from litho ASCII — derived from mudlog text where matched.

## 4. McKinlay Member Sample Intervals

Each section: depth interval, spreadsheet sample, mudlog cuttings, wireline log averages.

### 1720 m MD — Interval 1717.5 – 1722.5 m

**Sample Description (spreadsheet):** Sample 1720m: 100% Sandstone (litho ASCII aggregate) TG 24.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 24.058823529411764 U |
| mTVDss | -1192.91 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1720m: v dk brn,aren- 1730 occ arg,rr liths,frm-mod hd,sbblky- blky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.4 | 33 |
| RES_DEEP (ohm.m) | 30.66 | 33 |
| RES_SHALLOW (ohm.m) | 21.44 | 33 |
| **Δ Res (Deep − Shallow)** | **9.23** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1725 m MD — Interval 1722.5 – 1727.5 m

**Sample Description (spreadsheet):** Sample 1725m: 100% Sandstone (litho ASCII aggregate) TG 107.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 107.3625 U |
| mTVDss | -1193.06 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1720m: v dk brn,aren- 1730 occ arg,rr liths,frm-mod hd,sbblky- blky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.0 | 33 |
| RES_DEEP (ohm.m) | 38.00 | 33 |
| RES_SHALLOW (ohm.m) | 24.52 | 33 |
| **Δ Res (Deep − Shallow)** | **13.48** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1730 m MD — Interval 1727.5 – 1732.5 m

**Sample Description (spreadsheet):** Sample 1730m: 100% Sandstone (litho ASCII aggregate) TG 206.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 206.35882352941175 U |
| mTVDss | -1193.22 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1720m: v dk brn,aren- 1730 occ arg,rr liths,frm-mod hd,sbblky- blky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.4 | 33 |
| RES_DEEP (ohm.m) | 40.33 | 33 |
| RES_SHALLOW (ohm.m) | 25.67 | 33 |
| **Δ Res (Deep − Shallow)** | **14.66** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1735 m MD — Interval 1732.5 – 1737.5 m

**Sample Description (spreadsheet):** Sample 1735m: 100% Sandstone (litho ASCII aggregate) TG 201.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 201.0125 U |
| mTVDss | -1193.38 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1720m: v dk brn,aren- 1730 occ arg,rr liths,frm-mod hd,sbblky- blky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.8 | 32 |
| RES_DEEP (ohm.m) | 33.05 | 32 |
| RES_SHALLOW (ohm.m) | 23.21 | 32 |
| **Δ Res (Deep − Shallow)** | **9.84** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1740 m MD — Interval 1737.5 – 1742.5 m

**Sample Description (spreadsheet):** Sample 1740m: 100% Sandstone (litho ASCII aggregate) TG 208.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 208.925 U |
| mTVDss | -1193.53 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.9 | 33 |
| RES_DEEP (ohm.m) | 34.24 | 33 |
| RES_SHALLOW (ohm.m) | 24.37 | 33 |
| **Δ Res (Deep − Shallow)** | **9.87** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1745 m MD — Interval 1742.5 – 1747.5 m

**Sample Description (spreadsheet):** Sample 1745m: 100% Sandstone (litho ASCII aggregate) TG 166.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Loose Grains | Yes |
| Total Gas | 166.50588235294117 U |
| mTVDss | -1193.69 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1760m: lt gry-med gry,grn gry,f-vf,v wl srt,sbang-sbrnd, 1770 mod calc cmt,wh arg mtx,com carb spks,glauc & liths,pred lse,rr fri-mod hd aggs,pr vis & inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.5 | 33 |
| RES_DEEP (ohm.m) | 36.95 | 33 |
| RES_SHALLOW (ohm.m) | 27.11 | 33 |
| **Δ Res (Deep − Shallow)** | **9.84** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1750 m MD — Interval 1747.5 – 1752.5 m

**Sample Description (spreadsheet):** Sample 1750m: 100% Sandstone (litho ASCII aggregate) TG 140.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Loose Grains | Yes |
| Total Gas | 140.34375 U |
| mTVDss | -1193.85 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1760m: lt gry-med gry,grn gry,f-vf,v wl srt,sbang-sbrnd, 1770 mod calc cmt,wh arg mtx,com carb spks,glauc & liths,pred lse,rr fri-mod hd aggs,pr vis & inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.0 | 33 |
| RES_DEEP (ohm.m) | 35.99 | 33 |
| RES_SHALLOW (ohm.m) | 26.21 | 33 |
| **Δ Res (Deep − Shallow)** | **9.78** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1755 m MD — Interval 1752.5 – 1757.5 m

**Sample Description (spreadsheet):** Sample 1755m: 100% Sandstone (litho ASCII aggregate) TG 191.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Loose Grains | Yes |
| Total Gas | 191.4875 U |
| mTVDss | -1193.99 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1760m: lt gry-med gry,grn gry,f-vf,v wl srt,sbang-sbrnd, 1770 mod calc cmt,wh arg mtx,com carb spks,glauc & liths,pred lse,rr fri-mod hd aggs,pr vis & inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.2 | 33 |
| RES_DEEP (ohm.m) | 33.69 | 33 |
| RES_SHALLOW (ohm.m) | 24.22 | 33 |
| **Δ Res (Deep − Shallow)** | **9.47** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1760 m MD — Interval 1757.5 – 1762.5 m

**Sample Description (spreadsheet):** Sample 1760m: 100% Sandstone (litho ASCII aggregate) TG 146.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Loose Grains | Yes |
| Total Gas | 146.525 U |
| mTVDss | -1194.10 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1760m: lt gry-med gry,grn gry,f-vf,v wl srt,sbang-sbrnd, 1770 mod calc cmt,wh arg mtx,com carb spks,glauc & liths,pred lse,rr fri-mod hd aggs,pr vis & inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.3 | 32 |
| RES_DEEP (ohm.m) | 31.56 | 32 |
| RES_SHALLOW (ohm.m) | 22.92 | 32 |
| **Δ Res (Deep − Shallow)** | **8.64** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1765 m MD — Interval 1762.5 – 1767.5 m

**Sample Description (spreadsheet):** Sample 1765m: 100% Sandstone (litho ASCII aggregate) TG 119.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Loose Grains | Yes |
| Total Gas | 119.09375 U |
| mTVDss | -1194.20 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1760m: lt gry-med gry,grn gry,f-vf,v wl srt,sbang-sbrnd, 1770 mod calc cmt,wh arg mtx,com carb spks,glauc & liths,pred lse,rr fri-mod hd aggs,pr vis & inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.9 | 33 |
| RES_DEEP (ohm.m) | 30.06 | 33 |
| RES_SHALLOW (ohm.m) | 22.08 | 33 |
| **Δ Res (Deep − Shallow)** | **7.98** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1770 m MD — Interval 1767.5 – 1772.5 m

**Sample Description (spreadsheet):** Sample 1770m: 100% Sandstone (litho ASCII aggregate) TG 99.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Loose Grains | Yes |
| Total Gas | 98.97058823529412 U |
| mTVDss | -1194.30 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1760m: lt gry-med gry,grn gry,f-vf,v wl srt,sbang-sbrnd, 1770 mod calc cmt,wh arg mtx,com carb spks,glauc & liths,pred lse,rr fri-mod hd aggs,pr vis & inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.2 | 33 |
| RES_DEEP (ohm.m) | 29.24 | 33 |
| RES_SHALLOW (ohm.m) | 21.72 | 33 |
| **Δ Res (Deep − Shallow)** | **7.52** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1775 m MD — Interval 1772.5 – 1777.5 m

**Sample Description (spreadsheet):** Sample 1775m: 100% Sandstone (litho ASCII aggregate) TG 154.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Loose Grains | Yes |
| Total Gas | 154.15 U |
| mTVDss | -1194.41 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1760m: lt gry-med gry,grn gry,f-vf,v wl srt,sbang-sbrnd, 1770 mod calc cmt,wh arg mtx,com carb spks,glauc & liths,pred lse,rr fri-mod hd aggs,pr vis & inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.9 | 33 |
| RES_DEEP (ohm.m) | 28.61 | 33 |
| RES_SHALLOW (ohm.m) | 21.32 | 33 |
| **Δ Res (Deep − Shallow)** | **7.29** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1780 m MD — Interval 1777.5 – 1782.5 m

**Sample Description (spreadsheet):** Sample 1780m: 100% Sandstone (litho ASCII aggregate) TG 167.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 167.25882352941176 U |
| mTVDss | -1194.51 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.0 | 33 |
| RES_DEEP (ohm.m) | 27.44 | 33 |
| RES_SHALLOW (ohm.m) | 20.85 | 33 |
| **Δ Res (Deep − Shallow)** | **6.59** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1785 m MD — Interval 1782.5 – 1787.5 m

**Sample Description (spreadsheet):** Sample 1785m: 100% Sandstone (litho ASCII aggregate) TG 141.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 141.0625 U |
| mTVDss | -1194.58 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.2 | 33 |
| RES_DEEP (ohm.m) | 25.96 | 33 |
| RES_SHALLOW (ohm.m) | 21.00 | 33 |
| **Δ Res (Deep − Shallow)** | **4.96** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1790 m MD — Interval 1787.5 – 1792.5 m

**Sample Description (spreadsheet):** Sample 1790m: 100% Sandstone (litho ASCII aggregate) TG 121.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 121.7 U |
| mTVDss | -1194.63 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.1 | 32 |
| RES_DEEP (ohm.m) | 25.96 | 32 |
| RES_SHALLOW (ohm.m) | 20.61 | 32 |
| **Δ Res (Deep − Shallow)** | **5.35** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1795 m MD — Interval 1792.5 – 1797.5 m

**Sample Description (spreadsheet):** Sample 1795m: 100% Sandstone (litho ASCII aggregate) TG 125.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 125.06470588235294 U |
| mTVDss | -1194.67 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.1 | 33 |
| RES_DEEP (ohm.m) | 23.89 | 33 |
| RES_SHALLOW (ohm.m) | 19.11 | 33 |
| **Δ Res (Deep − Shallow)** | **4.78** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1800 m MD — Interval 1797.5 – 1802.5 m

**Sample Description (spreadsheet):** Sample 1800m: 100% Sandstone (litho ASCII aggregate) TG 138.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 138.08125 U |
| mTVDss | -1194.71 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.3 | 33 |
| RES_DEEP (ohm.m) | 23.80 | 33 |
| RES_SHALLOW (ohm.m) | 19.25 | 33 |
| **Δ Res (Deep − Shallow)** | **4.55** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1805 m MD — Interval 1802.5 – 1807.5 m

**Sample Description (spreadsheet):** Sample 1805m: 100% Sandstone (litho ASCII aggregate) TG 174.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 174.08823529411765 U |
| mTVDss | -1194.75 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1820m: pl brn-brn,occ dk brn,aren,grd to vf SST,com carb spks,tr liths,sft-occ frm, 1830 sbfiss-sbblky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.3 | 33 |
| RES_DEEP (ohm.m) | 25.01 | 33 |
| RES_SHALLOW (ohm.m) | 19.78 | 33 |
| **Δ Res (Deep − Shallow)** | **5.22** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1810 m MD — Interval 1807.5 – 1812.5 m

**Sample Description (spreadsheet):** Sample 1810m: 100% Sandstone (litho ASCII aggregate) TG 142.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 142.40625 U |
| mTVDss | -1194.79 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1820m: pl brn-brn,occ dk brn,aren,grd to vf SST,com carb spks,tr liths,sft-occ frm, 1830 sbfiss-sbblky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.1 | 33 |
| RES_DEEP (ohm.m) | 27.02 | 33 |
| RES_SHALLOW (ohm.m) | 21.15 | 33 |
| **Δ Res (Deep − Shallow)** | **5.87** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1815 m MD — Interval 1812.5 – 1817.5 m

**Sample Description (spreadsheet):** Sample 1815m: 100% Sandstone (litho ASCII aggregate) TG 134.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 134.21875 U |
| mTVDss | -1194.82 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1820m: pl brn-brn,occ dk brn,aren,grd to vf SST,com carb spks,tr liths,sft-occ frm, 1830 sbfiss-sbblky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.2 | 32 |
| RES_DEEP (ohm.m) | 31.01 | 32 |
| RES_SHALLOW (ohm.m) | 21.59 | 32 |
| **Δ Res (Deep − Shallow)** | **9.42** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1820 m MD — Interval 1817.5 – 1822.5 m

**Sample Description (spreadsheet):** Sample 1820m: 100% Sandstone (litho ASCII aggregate) TG 162.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 162.41176470588232 U |
| mTVDss | -1194.83 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1820m: pl brn-brn,occ dk brn,aren,grd to vf SST,com carb spks,tr liths,sft-occ frm, 1830 sbfiss-sbblky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.8 | 33 |
| RES_DEEP (ohm.m) | 33.32 | 33 |
| RES_SHALLOW (ohm.m) | 24.57 | 33 |
| **Δ Res (Deep − Shallow)** | **8.75** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1825 m MD — Interval 1822.5 – 1827.5 m

**Sample Description (spreadsheet):** Sample 1825m: 100% Sandstone (litho ASCII aggregate) TG 189.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 189.25625 U |
| mTVDss | -1194.85 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1820m: pl brn-brn,occ dk brn,aren,grd to vf SST,com carb spks,tr liths,sft-occ frm, 1830 sbfiss-sbblky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.4 | 33 |
| RES_DEEP (ohm.m) | 35.85 | 33 |
| RES_SHALLOW (ohm.m) | 26.24 | 33 |
| **Δ Res (Deep − Shallow)** | **9.61** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1830 m MD — Interval 1827.5 – 1832.5 m

**Sample Description (spreadsheet):** Sample 1830m: 100% Sandstone (litho ASCII aggregate) TG 200.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 200.14705882352942 U |
| mTVDss | -1194.86 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1820m: pl brn-brn,occ dk brn,aren,grd to vf SST,com carb spks,tr liths,sft-occ frm, 1830 sbfiss-sbblky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.4 | 33 |
| RES_DEEP (ohm.m) | 35.42 | 33 |
| RES_SHALLOW (ohm.m) | 26.34 | 33 |
| **Δ Res (Deep − Shallow)** | **9.08** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1835 m MD — Interval 1832.5 – 1837.5 m

**Sample Description (spreadsheet):** Sample 1835m: 100% Sandstone (litho ASCII aggregate) TG 202.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 202.19375 U |
| mTVDss | -1194.88 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1820m: pl brn-brn,occ dk brn,aren,grd to vf SST,com carb spks,tr liths,sft-occ frm, 1830 sbfiss-sbblky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.9 | 33 |
| RES_DEEP (ohm.m) | 36.71 | 33 |
| RES_SHALLOW (ohm.m) | 23.55 | 33 |
| **Δ Res (Deep − Shallow)** | **13.16** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1975 m MD — Interval 1972.5 – 1977.5 m

**Sample Description (spreadsheet):** Sample 1975m: 100% Sandstone (litho ASCII aggregate) TG 151.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Loose Grains | Yes |
| Total Gas | 151.2875 U |
| mTVDss | -1199.31 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1960m: lt gry,grnsh gry,f- vf,wl srt,sbang-sbrnd,wk calc 1980 cmt,off wh arg mtx,com carb spks, occ glauc & liths,com lse,fri aggs,fr vis & inf por,no fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.1 | 33 |
| RES_DEEP (ohm.m) | 21.26 | 33 |
| RES_SHALLOW (ohm.m) | 17.12 | 33 |
| **Δ Res (Deep − Shallow)** | **4.14** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1980 m MD — Interval 1977.5 – 1982.5 m

**Sample Description (spreadsheet):** Sample 1980m: 100% Sandstone (litho ASCII aggregate) TG 157.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 157.38823529411764 U |
| mTVDss | -1199.57 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.5 | 33 |
| RES_DEEP (ohm.m) | 21.50 | 33 |
| RES_SHALLOW (ohm.m) | 18.21 | 33 |
| **Δ Res (Deep − Shallow)** | **3.29** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1985 m MD — Interval 1982.5 – 1987.5 m

**Sample Description (spreadsheet):** Sample 1985m: 100% Sandstone (litho ASCII aggregate) TG 137.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 137.61875 U |
| mTVDss | -1199.81 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 111.3 | 33 |
| RES_DEEP (ohm.m) | 20.81 | 33 |
| RES_SHALLOW (ohm.m) | 16.50 | 33 |
| **Δ Res (Deep − Shallow)** | **4.31** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1990 m MD — Interval 1987.5 – 1992.5 m

**Sample Description (spreadsheet):** Sample 1990m: 100% Sandstone (litho ASCII aggregate) TG 127.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 127.74117647058823 U |
| mTVDss | -1199.94 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.3 | 33 |
| RES_DEEP (ohm.m) | 20.77 | 33 |
| RES_SHALLOW (ohm.m) | 16.58 | 33 |
| **Δ Res (Deep − Shallow)** | **4.19** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 1995 m MD — Interval 1992.5 – 1997.5 m

**Sample Description (spreadsheet):** Sample 1995m: 100% Sandstone (litho ASCII aggregate) TG 147.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 147.5625 U |
| mTVDss | -1200.04 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2010m: lt brn,grysh brn, arg-aren i/p,grd to vf SST, 2020 com carb spks & liths,frm,occ mod hd,sbblky-blky. (2020)

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.4 | 32 |
| RES_DEEP (ohm.m) | 20.33 | 32 |
| RES_SHALLOW (ohm.m) | 16.21 | 32 |
| **Δ Res (Deep − Shallow)** | **4.12** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2000 m MD — Interval 1997.5 – 2002.5 m

**Sample Description (spreadsheet):** Sample 2000m: 100% Sandstone (litho ASCII aggregate) TG 164.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 164.20625 U |
| mTVDss | -1200.14 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2010m: lt brn,grysh brn, arg-aren i/p,grd to vf SST, 2020 com carb spks & liths,frm,occ mod hd,sbblky-blky. (2020)

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.4 | 33 |
| RES_DEEP (ohm.m) | 21.31 | 33 |
| RES_SHALLOW (ohm.m) | 16.95 | 33 |
| **Δ Res (Deep − Shallow)** | **4.36** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2005 m MD — Interval 2002.5 – 2007.5 m

**Sample Description (spreadsheet):** Sample 2005m: 100% Sandstone (litho ASCII aggregate) TG 147.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 147.5842105263158 U |
| mTVDss | -1200.24 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2010m: lt brn,grysh brn, arg-aren i/p,grd to vf SST, 2020 com carb spks & liths,frm,occ mod hd,sbblky-blky. (2020)

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.7 | 33 |
| RES_DEEP (ohm.m) | 20.31 | 33 |
| RES_SHALLOW (ohm.m) | 16.85 | 33 |
| **Δ Res (Deep − Shallow)** | **3.46** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2010 m MD — Interval 2007.5 – 2012.5 m

**Sample Description (spreadsheet):** Sample 2010m: 100% Sandstone (litho ASCII aggregate) TG 146.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 146.71333333333334 U |
| mTVDss | -1200.33 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2010m: lt brn,grysh brn, arg-aren i/p,grd to vf SST, 2020 com carb spks & liths,frm,occ mod hd,sbblky-blky. (2020)

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.1 | 33 |
| RES_DEEP (ohm.m) | 19.30 | 33 |
| RES_SHALLOW (ohm.m) | 15.97 | 33 |
| **Δ Res (Deep − Shallow)** | **3.33** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2015 m MD — Interval 2012.5 – 2017.5 m

**Sample Description (spreadsheet):** Sample 2015m: 100% Sandstone (litho ASCII aggregate) TG 146.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 146.81176470588233 U |
| mTVDss | -1200.43 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2010m: lt brn,grysh brn, arg-aren i/p,grd to vf SST, 2020 com carb spks & liths,frm,occ mod hd,sbblky-blky. (2020)

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.7 | 33 |
| RES_DEEP (ohm.m) | 19.05 | 33 |
| RES_SHALLOW (ohm.m) | 15.13 | 33 |
| **Δ Res (Deep − Shallow)** | **3.92** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2020 m MD — Interval 2017.5 – 2022.5 m

**Sample Description (spreadsheet):** Sample 2020m: 100% Sandstone (litho ASCII aggregate) TG 151.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 151.09375 U |
| mTVDss | -1200.42 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2010m: lt brn,grysh brn, arg-aren i/p,grd to vf SST, 2020 com carb spks & liths,frm,occ mod hd,sbblky-blky. (2020)

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.5 | 32 |
| RES_DEEP (ohm.m) | 19.05 | 32 |
| RES_SHALLOW (ohm.m) | 16.66 | 32 |
| **Δ Res (Deep − Shallow)** | **2.38** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2025 m MD — Interval 2022.5 – 2027.5 m

**Sample Description (spreadsheet):** Sample 2025m: 100% Sandstone (litho ASCII aggregate) TG 167.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 167.88823529411764 U |
| mTVDss | -1200.40 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2010m: lt brn,grysh brn, arg-aren i/p,grd to vf SST, 2020 com carb spks & liths,frm,occ mod hd,sbblky-blky. (2020)

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.4 | 33 |
| RES_DEEP (ohm.m) | 19.30 | 33 |
| RES_SHALLOW (ohm.m) | 16.71 | 33 |
| **Δ Res (Deep − Shallow)** | **2.58** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2030 m MD — Interval 2027.5 – 2032.5 m

**Sample Description (spreadsheet):** Sample 2030m: 100% Sandstone (litho ASCII aggregate) TG 182.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 181.98235294117646 U |
| mTVDss | -1200.38 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.8 | 33 |
| RES_DEEP (ohm.m) | 19.04 | 33 |
| RES_SHALLOW (ohm.m) | 16.99 | 33 |
| **Δ Res (Deep − Shallow)** | **2.05** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2035 m MD — Interval 2032.5 – 2037.5 m

**Sample Description (spreadsheet):** Sample 2035m: 100% Sandstone (litho ASCII aggregate) TG 211.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 211.63125 U |
| mTVDss | -1200.37 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2050m: lt gry-grnsh gry, 2060 off wh,clr-trnsl,vf-f,wl srt, sbang-sbrnd,mod strg calc cmt, com wh arg mtx,com carb spks, occ liths & glauc,mod hd-hd,pr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.0 | 33 |
| RES_DEEP (ohm.m) | 20.16 | 33 |
| RES_SHALLOW (ohm.m) | 17.77 | 33 |
| **Δ Res (Deep − Shallow)** | **2.39** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2040 m MD — Interval 2037.5 – 2042.5 m

**Sample Description (spreadsheet):** Sample 2040m: 100% Sandstone (litho ASCII aggregate) TG 205.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 205.9411764705882 U |
| mTVDss | -1200.35 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2050m: lt gry-grnsh gry, 2060 off wh,clr-trnsl,vf-f,wl srt, sbang-sbrnd,mod strg calc cmt, com wh arg mtx,com carb spks, occ liths & glauc,mod hd-hd,pr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 115.3 | 33 |
| RES_DEEP (ohm.m) | 21.01 | 33 |
| RES_SHALLOW (ohm.m) | 17.09 | 33 |
| **Δ Res (Deep − Shallow)** | **3.92** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2045 m MD — Interval 2042.5 – 2047.5 m

**Sample Description (spreadsheet):** Sample 2045m: 100% Sandstone (litho ASCII aggregate) TG 143.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 143.25625 U |
| mTVDss | -1200.34 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2050m: lt gry-grnsh gry, 2060 off wh,clr-trnsl,vf-f,wl srt, sbang-sbrnd,mod strg calc cmt, com wh arg mtx,com carb spks, occ liths & glauc,mod hd-hd,pr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.6 | 33 |
| RES_DEEP (ohm.m) | 17.59 | 33 |
| RES_SHALLOW (ohm.m) | 14.24 | 33 |
| **Δ Res (Deep − Shallow)** | **3.35** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2500 m MD — Interval 2497.5 – 2502.5 m

**Sample Description (spreadsheet):** Sample 2500m: 100% Sandstone (litho ASCII aggregate) TG 24.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 24.629411764705882 U |
| mTVDss | -1201.58 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2510m: lt gry-med gry,sli 2530 brnsh gry,arg-aren i/p,tr carb spks,frm-mod hd,occ sft,sbblky- sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 121.5 | 33 |
| RES_DEEP (ohm.m) | 11.15 | 33 |
| RES_SHALLOW (ohm.m) | 10.45 | 33 |
| **Δ Res (Deep − Shallow)** | **0.70** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2505 m MD — Interval 2502.5 – 2507.5 m

**Sample Description (spreadsheet):** Sample 2505m: 100% Sandstone (litho ASCII aggregate) TG 26.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 26.78125 U |
| mTVDss | -1201.59 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2510m: lt gry-med gry,sli 2530 brnsh gry,arg-aren i/p,tr carb spks,frm-mod hd,occ sft,sbblky- sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 115.0 | 33 |
| RES_DEEP (ohm.m) | 12.20 | 33 |
| RES_SHALLOW (ohm.m) | 11.05 | 33 |
| **Δ Res (Deep − Shallow)** | **1.15** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2510 m MD — Interval 2507.5 – 2512.5 m

**Sample Description (spreadsheet):** Sample 2510m: 100% Sandstone (litho ASCII aggregate) TG 26.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 26.45294117647059 U |
| mTVDss | -1201.60 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2510m: lt gry-med gry,sli 2530 brnsh gry,arg-aren i/p,tr carb spks,frm-mod hd,occ sft,sbblky- sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 114.5 | 33 |
| RES_DEEP (ohm.m) | 12.11 | 33 |
| RES_SHALLOW (ohm.m) | 11.17 | 33 |
| **Δ Res (Deep − Shallow)** | **0.94** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2515 m MD — Interval 2512.5 – 2517.5 m

**Sample Description (spreadsheet):** Sample 2515m: 100% Sandstone (litho ASCII aggregate) TG 21.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 21.88125 U |
| mTVDss | -1201.62 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2510m: lt gry-med gry,sli 2530 brnsh gry,arg-aren i/p,tr carb spks,frm-mod hd,occ sft,sbblky- sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 118.3 | 33 |
| RES_DEEP (ohm.m) | 12.45 | 33 |
| RES_SHALLOW (ohm.m) | 10.61 | 33 |
| **Δ Res (Deep − Shallow)** | **1.85** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2520 m MD — Interval 2517.5 – 2522.5 m

**Sample Description (spreadsheet):** Sample 2520m: 100% Sandstone (litho ASCII aggregate) TG 19.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 18.975 U |
| mTVDss | -1201.63 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2510m: lt gry-med gry,sli 2530 brnsh gry,arg-aren i/p,tr carb spks,frm-mod hd,occ sft,sbblky- sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.8 | 32 |
| RES_DEEP (ohm.m) | 12.64 | 32 |
| RES_SHALLOW (ohm.m) | 11.42 | 32 |
| **Δ Res (Deep − Shallow)** | **1.22** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2525 m MD — Interval 2522.5 – 2527.5 m

**Sample Description (spreadsheet):** Sample 2525m: 100% Sandstone (litho ASCII aggregate) TG 17.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 17.41176470588235 U |
| mTVDss | -1201.65 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2510m: lt gry-med gry,sli 2530 brnsh gry,arg-aren i/p,tr carb spks,frm-mod hd,occ sft,sbblky- sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 109.9 | 33 |
| RES_DEEP (ohm.m) | 12.53 | 33 |
| RES_SHALLOW (ohm.m) | 11.14 | 33 |
| **Δ Res (Deep − Shallow)** | **1.39** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2530 m MD — Interval 2527.5 – 2532.5 m

**Sample Description (spreadsheet):** Sample 2530m: 100% Sandstone (litho ASCII aggregate) TG 18.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 18.125 U |
| mTVDss | -1201.67 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.5 | 33 |
| RES_DEEP (ohm.m) | 11.71 | 33 |
| RES_SHALLOW (ohm.m) | 11.64 | 33 |
| **Δ Res (Deep − Shallow)** | **0.07** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2535 m MD — Interval 2532.5 – 2537.5 m

**Sample Description (spreadsheet):** Sample 2535m: 100% Sandstone (litho ASCII aggregate) TG 18.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 18.88235294117647 U |
| mTVDss | -1201.69 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 120.1 | 33 |
| RES_DEEP (ohm.m) | 12.30 | 33 |
| RES_SHALLOW (ohm.m) | 11.90 | 33 |
| **Δ Res (Deep − Shallow)** | **0.40** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2540 m MD — Interval 2537.5 – 2542.5 m

**Sample Description (spreadsheet):** Sample 2540m: 100% Sandstone (litho ASCII aggregate) TG 18.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 18.174999999999997 U |
| mTVDss | -1201.69 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 126.4 | 33 |
| RES_DEEP (ohm.m) | 11.43 | 33 |
| RES_SHALLOW (ohm.m) | 10.50 | 33 |
| **Δ Res (Deep − Shallow)** | **0.93** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2545 m MD — Interval 2542.5 – 2547.5 m

**Sample Description (spreadsheet):** Sample 2545m: 100% Sandstone (litho ASCII aggregate) TG 20.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 20.65 U |
| mTVDss | -1201.68 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 127.5 | 32 |
| RES_DEEP (ohm.m) | 11.14 | 32 |
| RES_SHALLOW (ohm.m) | 9.86 | 32 |
| **Δ Res (Deep − Shallow)** | **1.28** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2550 m MD — Interval 2547.5 – 2552.5 m

**Sample Description (spreadsheet):** Sample 2550m: 100% Sandstone (litho ASCII aggregate) TG 19.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 18.970588235294116 U |
| mTVDss | -1201.67 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 126.2 | 33 |
| RES_DEEP (ohm.m) | 11.32 | 33 |
| RES_SHALLOW (ohm.m) | 9.96 | 33 |
| **Δ Res (Deep − Shallow)** | **1.37** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2555 m MD — Interval 2552.5 – 2557.5 m

**Sample Description (spreadsheet):** Sample 2555m: 100% Sandstone (litho ASCII aggregate) TG 20.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 20.623529411764704 U |
| mTVDss | -1201.65 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2570m: lt gry-med gry,sli brnsh gry,arg-aren i/p,tr carb spks,rr loc glauc grs,frm-mod hd, occ sft,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 126.0 | 33 |
| RES_DEEP (ohm.m) | 10.79 | 33 |
| RES_SHALLOW (ohm.m) | 9.32 | 33 |
| **Δ Res (Deep − Shallow)** | **1.47** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2560 m MD — Interval 2557.5 – 2562.5 m

**Sample Description (spreadsheet):** Sample 2560m: 100% Sandstone (litho ASCII aggregate) TG 22.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 22.2 U |
| mTVDss | -1201.64 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2570m: lt gry-med gry,sli brnsh gry,arg-aren i/p,tr carb spks,rr loc glauc grs,frm-mod hd, occ sft,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 125.9 | 33 |
| RES_DEEP (ohm.m) | 10.95 | 33 |
| RES_SHALLOW (ohm.m) | 9.80 | 33 |
| **Δ Res (Deep − Shallow)** | **1.15** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2565 m MD — Interval 2562.5 – 2567.5 m

**Sample Description (spreadsheet):** Sample 2565m: 100% Sandstone (litho ASCII aggregate) TG 22.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 22.743750000000002 U |
| mTVDss | -1201.63 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2570m: lt gry-med gry,sli brnsh gry,arg-aren i/p,tr carb spks,rr loc glauc grs,frm-mod hd, occ sft,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 125.5 | 33 |
| RES_DEEP (ohm.m) | 10.99 | 33 |
| RES_SHALLOW (ohm.m) | 9.65 | 33 |
| **Δ Res (Deep − Shallow)** | **1.34** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2570 m MD — Interval 2567.5 – 2572.5 m

**Sample Description (spreadsheet):** Sample 2570m: 100% Sandstone (litho ASCII aggregate) TG 23.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 23.7875 U |
| mTVDss | -1201.61 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2570m: lt gry-med gry,sli brnsh gry,arg-aren i/p,tr carb spks,rr loc glauc grs,frm-mod hd, occ sft,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 123.6 | 32 |
| RES_DEEP (ohm.m) | 10.88 | 32 |
| RES_SHALLOW (ohm.m) | 9.82 | 32 |
| **Δ Res (Deep − Shallow)** | **1.06** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2575 m MD — Interval 2572.5 – 2577.5 m

**Sample Description (spreadsheet):** Sample 2575m: 100% Sandstone (litho ASCII aggregate) TG 22.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 22.211764705882356 U |
| mTVDss | -1201.59 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2570m: lt gry-med gry,sli brnsh gry,arg-aren i/p,tr carb spks,rr loc glauc grs,frm-mod hd, occ sft,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 124.9 | 33 |
| RES_DEEP (ohm.m) | 10.94 | 33 |
| RES_SHALLOW (ohm.m) | 9.71 | 33 |
| **Δ Res (Deep − Shallow)** | **1.23** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2580 m MD — Interval 2577.5 – 2582.5 m

**Sample Description (spreadsheet):** Sample 2580m: 100% Sandstone (litho ASCII aggregate) TG 21.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 21.775 U |
| mTVDss | -1201.57 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2570m: lt gry-med gry,sli brnsh gry,arg-aren i/p,tr carb spks,rr loc glauc grs,frm-mod hd, occ sft,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 125.5 | 31 |
| RES_DEEP (ohm.m) | 11.09 | 19 |
| RES_SHALLOW (ohm.m) | 9.92 | 19 |
| **Δ Res (Deep − Shallow)** | **1.17** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2585 m MD — Interval 2582.5 – 2587.5 m

**Sample Description (spreadsheet):** Sample 2585m: 100% Sandstone (litho ASCII aggregate) TG 23.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 23.47647058823529 U |
| mTVDss | -1201.56 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2570m: lt gry-med gry,sli brnsh gry,arg-aren i/p,tr carb spks,rr loc glauc grs,frm-mod hd, occ sft,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|

**Permeability Proxy:** Insufficient resistivity data
---

## 5. Summary Statistics (McKinlay Member)

| Metric | Value |
|--------|-------|
| Intervals analysed | 57 |
| Depth range | 1720 – 2585 m |
| Avg % Sandstone | 100.0% |
| Avg Δ Res (Deep−Shallow) | 4.92 ohm.m |
| Max Δ Res | 14.66 ohm.m |
| Min Δ Res | 0.07 ohm.m |
| Mudlog matches | 42 / 57 |
