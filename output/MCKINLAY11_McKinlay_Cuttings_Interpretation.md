# MCKINLAY 11 — McKinlay Member Cuttings & Log Interpretation

**Generated:** 2026-07-10 03:38 UTC  
**Well:** MCKINLAY 11 (MCKINLAY 11)  
**TD:** 2068 m MD  

---

## 1. Data Sources & Methodology

| Source | File | Role |
|--------|------|------|
| Mudlog PDF | `McKinlay 11_Mudlog Spud-6800'_Final.pdf` | Cuttings lithology descriptions |
| Litho / drill-gas ASCII | `McKinlay 11_Litho ASCII_90-6786'.ASC`, `McKinlay 11_Drill-Gas ASCII_Spud-6786'.ASC` | 5 m bins (ft→m MD) |
| Formation Tops | `DC30.xlsx`, `Mck_Murta.xlsx` | Reservoir entry & overburden identification |
| Wireline Log (LAS) | `Mck_11` | GR, RES_DEEP, RES_SHALLOW |
| Trajectory | `Mck_11_trajectory` | mTVDss (Z subsea) |

## 2. Formation Top Analysis

### 2.1 Key Tops

| Marker | Depth (m MD) | Source |
|--------|-------------|--------|
| DC30 | 1600.20 | DC30.xlsx |
| McKinlay Member (shallowest) | 1603.25 | Mck_Murta.xlsx |

### 2.2 McKinlay Member Top Classification

**Initial reservoir entry (DC30 + shallowest McKinlay):** 1603.25 m MD

**Target re-entry (lone McKinlay below an overburden entry pair):**
- 1930.69 m MD
- 2028.44 m MD

**Overburden entry (Murta + corresponding McKinlay within 5 m):**
| McKinlay entry (m MD) | Murta (m MD) | Δ (m) | Re-entry (m MD) | Zone length (m) |
|-----------------------|-------------|-------|-----------------|-----------------|
| 1876.81 | 1875.35 | 1.46 | 1930.69 | 53.9 |
| 1978.76 | 1977.29 | 1.47 | 2028.44 | 49.7 |

**McKinlay Member analysis window:** 1603.2 – 2068.2 m MD

**Excluded overburden intervals (entry → re-entry, pay resumes at re-entry):** 1877–1931 m (overburden), 1979–2028 m (overburden)

**Samples in McKinlay Member:** 70 of 93 total
- Excluded pre-reservoir: 0
- Excluded overburden intervals: 23

## 3. Known Shortcomings

> **Read this section before using the output.**

1. **Mudlog PDF text extraction is imperfect.** Depth-to-description assignment uses ±15 m proximity heuristics.
2. **Formation top discrepancies** between Mck_Murta.xlsx and mudlog PDF picks are noted where present.
3. **Well name mapping:** MCKINLAY 11 → `MCKINLAY 11` (verified by TD and LAS WELL header).
4. **Sample intervals** are midpoints between consecutive sample depths — variable widths where spacing is irregular.
5. **Resistivity permeability proxy** is qualitative only (Δ Res = RES_DEEP − RES_SHALLOW).
6. **NULL LAS values** (-999.25) excluded from averages.
7. **Exclusion zones** span from each Murta/McKinlay overburden entry to the next lone McKinlay re-entry below (or entry + 50 m MD if none mapped). Later entry pairs inside an existing exclusion interval are treated as the same overburden excursion. Initial DC30/McKinlay reservoir entry is not excluded.
8. **Litho/gas ASCII ingestion:** 5 m bins from ft→m MD; %SS from lithology codes; **no fluorescence %** in ASCII — cuttings pay may be unavailable.
9. **Grain size / brightness** not parsed from litho ASCII — derived from mudlog text where matched.

## 4. McKinlay Member Sample Intervals

Each section: depth interval, spreadsheet sample, mudlog cuttings, wireline log averages.

### 1605 m MD — Interval 1602.5 – 1607.5 m

**Sample Description (spreadsheet):** Sample 1605m: 100% Sandstone (litho ASCII aggregate) TG 183.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 183.6625 U |
| mTVDss | -1196.21 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1590m: clr-trnsl,off wh, 1600 mott lt gry,f-med,crs-v crs i/p,pr srt,sbang-sbrnd,mod strg calc cmt, tr off wh-lt gry arg mtx,mnr liths,tr 99 / 1 no pyr,tr qtz ovgths,tr carb spks,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.7 | 32 |
| RES_DEEP (ohm.m) | 62.94 | 32 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1610 m MD — Interval 1607.5 – 1612.5 m

**Sample Description (spreadsheet):** Sample 1610m: 100% Sandstone (litho ASCII aggregate) TG 172.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 172.8764705882353 U |
| mTVDss | -1196.50 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.9 | 33 |
| RES_DEEP (ohm.m) | 58.03 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1615 m MD — Interval 1612.5 – 1617.5 m

**Sample Description (spreadsheet):** Sample 1615m: 100% Sandstone (litho ASCII aggregate) TG 217.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 217.85625 U |
| mTVDss | -1196.78 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.5 | 33 |
| RES_DEEP (ohm.m) | 45.33 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1620 m MD — Interval 1617.5 – 1622.5 m

**Sample Description (spreadsheet):** Sample 1620m: 100% Sandstone (litho ASCII aggregate) TG 253.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 253.73529411764707 U |
| mTVDss | -1197.07 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.9 | 33 |
| RES_DEEP (ohm.m) | 37.46 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1625 m MD — Interval 1622.5 – 1627.5 m

**Sample Description (spreadsheet):** Sample 1625m: 100% Sandstone (litho ASCII aggregate) TG 309.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 309.1 U |
| mTVDss | -1197.25 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.5 | 33 |
| RES_DEEP (ohm.m) | 39.15 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1630 m MD — Interval 1627.5 – 1632.5 m

**Sample Description (spreadsheet):** Sample 1630m: 100% Sandstone (litho ASCII aggregate) TG 355.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 355.69375 U |
| mTVDss | -1197.36 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.2 | 32 |
| RES_DEEP (ohm.m) | 41.27 | 32 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1635 m MD — Interval 1632.5 – 1637.5 m

**Sample Description (spreadsheet):** Sample 1635m: 100% Sandstone (litho ASCII aggregate) TG 239.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Loose Grains | Yes |
| Total Gas | 239.8764705882353 U |
| mTVDss | -1197.43 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1650m: mott,pl gry,trnsl,opq, vf-f,med i/p,mod wl srt,sbang-sbrnd,wk sil cmt,com pl gry arg mtx,tr carb micr spks,tr glauc,pred lse,occ fri aggs, SLIDING 1660 pr vis por,fr inf por,no fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.4 | 33 |
| RES_DEEP (ohm.m) | 39.75 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1640 m MD — Interval 1637.5 – 1642.5 m

**Sample Description (spreadsheet):** Sample 1640m: 100% Sandstone (litho ASCII aggregate) TG 265.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Loose Grains | Yes |
| Total Gas | 265.20624999999995 U |
| mTVDss | -1197.49 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1650m: mott,pl gry,trnsl,opq, vf-f,med i/p,mod wl srt,sbang-sbrnd,wk sil cmt,com pl gry arg mtx,tr carb micr spks,tr glauc,pred lse,occ fri aggs, SLIDING 1660 pr vis por,fr inf por,no fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.9 | 33 |
| RES_DEEP (ohm.m) | 40.28 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1645 m MD — Interval 1642.5 – 1647.5 m

**Sample Description (spreadsheet):** Sample 1645m: 100% Sandstone (litho ASCII aggregate) TG 192.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Loose Grains | Yes |
| Total Gas | 192.65294117647062 U |
| mTVDss | -1197.55 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1650m: mott,pl gry,trnsl,opq, vf-f,med i/p,mod wl srt,sbang-sbrnd,wk sil cmt,com pl gry arg mtx,tr carb micr spks,tr glauc,pred lse,occ fri aggs, SLIDING 1660 pr vis por,fr inf por,no fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.2 | 33 |
| RES_DEEP (ohm.m) | 35.69 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1650 m MD — Interval 1647.5 – 1652.5 m

**Sample Description (spreadsheet):** Sample 1650m: 100% Sandstone (litho ASCII aggregate) TG 286.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Loose Grains | Yes |
| Total Gas | 285.98125 U |
| mTVDss | -1197.62 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1650m: mott,pl gry,trnsl,opq, vf-f,med i/p,mod wl srt,sbang-sbrnd,wk sil cmt,com pl gry arg mtx,tr carb micr spks,tr glauc,pred lse,occ fri aggs, SLIDING 1660 pr vis por,fr inf por,no fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.0 | 33 |
| RES_DEEP (ohm.m) | 29.85 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1655 m MD — Interval 1652.5 – 1657.5 m

**Sample Description (spreadsheet):** Sample 1655m: 100% Sandstone (litho ASCII aggregate) TG 269.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Loose Grains | Yes |
| Total Gas | 269.01874999999995 U |
| mTVDss | -1197.67 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1650m: mott,pl gry,trnsl,opq, vf-f,med i/p,mod wl srt,sbang-sbrnd,wk sil cmt,com pl gry arg mtx,tr carb micr spks,tr glauc,pred lse,occ fri aggs, SLIDING 1660 pr vis por,fr inf por,no fluor.
- **SILTSTONE** @ ~1670m: lt-med gry,med brn 1680 gry,arg,aren i/p,occ carb spks & lams, sft-frm,sbblky-mnr sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.2 | 32 |
| RES_DEEP (ohm.m) | 28.21 | 32 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1660 m MD — Interval 1657.5 – 1662.5 m

**Sample Description (spreadsheet):** Sample 1660m: 100% Sandstone (litho ASCII aggregate) TG 236.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Loose Grains | Yes |
| Total Gas | 236.0176470588235 U |
| mTVDss | -1197.64 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1650m: mott,pl gry,trnsl,opq, vf-f,med i/p,mod wl srt,sbang-sbrnd,wk sil cmt,com pl gry arg mtx,tr carb micr spks,tr glauc,pred lse,occ fri aggs, SLIDING 1660 pr vis por,fr inf por,no fluor.
- **SILTSTONE** @ ~1670m: lt-med gry,med brn 1680 gry,arg,aren i/p,occ carb spks & lams, sft-frm,sbblky-mnr sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.0 | 33 |
| RES_DEEP (ohm.m) | 26.92 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1665 m MD — Interval 1662.5 – 1667.5 m

**Sample Description (spreadsheet):** Sample 1665m: 100% Sandstone (litho ASCII aggregate) TG 209.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Loose Grains | Yes |
| Total Gas | 209.01250000000002 U |
| mTVDss | -1197.61 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1650m: mott,pl gry,trnsl,opq, vf-f,med i/p,mod wl srt,sbang-sbrnd,wk sil cmt,com pl gry arg mtx,tr carb micr spks,tr glauc,pred lse,occ fri aggs, SLIDING 1660 pr vis por,fr inf por,no fluor.
- **SILTSTONE** @ ~1670m: lt-med gry,med brn 1680 gry,arg,aren i/p,occ carb spks & lams, sft-frm,sbblky-mnr sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 108.0 | 33 |
| RES_DEEP (ohm.m) | 27.88 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1670 m MD — Interval 1667.5 – 1672.5 m

**Sample Description (spreadsheet):** Sample 1670m: 100% Sandstone (litho ASCII aggregate) TG 116.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 116.0470588235294 U |
| mTVDss | -1197.58 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1670m: lt-med gry,med brn 1680 gry,arg,aren i/p,occ carb spks & lams, sft-frm,sbblky-mnr sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 108.2 | 33 |
| RES_DEEP (ohm.m) | 29.29 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1675 m MD — Interval 1672.5 – 1677.5 m

**Sample Description (spreadsheet):** Sample 1675m: 100% Sandstone (litho ASCII aggregate) TG 169.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 169.925 U |
| mTVDss | -1197.55 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1670m: lt-med gry,med brn 1680 gry,arg,aren i/p,occ carb spks & lams, sft-frm,sbblky-mnr sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.8 | 33 |
| RES_DEEP (ohm.m) | 30.94 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1680 m MD — Interval 1677.5 – 1682.5 m

**Sample Description (spreadsheet):** Sample 1680m: 100% Sandstone (litho ASCII aggregate) TG 245.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 245.18823529411765 U |
| mTVDss | -1197.53 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1670m: lt-med gry,med brn 1680 gry,arg,aren i/p,occ carb spks & lams, sft-frm,sbblky-mnr sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.9 | 33 |
| RES_DEEP (ohm.m) | 28.17 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1685 m MD — Interval 1682.5 – 1687.5 m

**Sample Description (spreadsheet):** Sample 1685m: 100% Sandstone (litho ASCII aggregate) TG 276.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 276.70625 U |
| mTVDss | -1197.47 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1670m: lt-med gry,med brn 1680 gry,arg,aren i/p,occ carb spks & lams, sft-frm,sbblky-mnr sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.1 | 32 |
| RES_DEEP (ohm.m) | 32.24 | 32 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1690 m MD — Interval 1687.5 – 1692.5 m

**Sample Description (spreadsheet):** Sample 1690m: 100% Sandstone (litho ASCII aggregate) TG 241.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 240.95625 U |
| mTVDss | -1197.40 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.6 | 33 |
| RES_DEEP (ohm.m) | 31.39 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1695 m MD — Interval 1692.5 – 1697.5 m

**Sample Description (spreadsheet):** Sample 1695m: 100% Sandstone (litho ASCII aggregate) TG 100.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 100.27058823529413 U |
| mTVDss | -1197.33 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 109.1 | 33 |
| RES_DEEP (ohm.m) | 31.37 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1700 m MD — Interval 1697.5 – 1702.5 m

**Sample Description (spreadsheet):** Sample 1700m: 100% Sandstone (litho ASCII aggregate) TG 190.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 190.14375 U |
| mTVDss | -1197.26 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.5 | 33 |
| RES_DEEP (ohm.m) | 37.28 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1705 m MD — Interval 1702.5 – 1707.5 m

**Sample Description (spreadsheet):** Sample 1705m: 100% Sandstone (litho ASCII aggregate) TG 351.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 351.6470588235294 U |
| mTVDss | -1197.19 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.7 | 33 |
| RES_DEEP (ohm.m) | 41.06 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1710 m MD — Interval 1707.5 – 1712.5 m

**Sample Description (spreadsheet):** Sample 1710m: 100% Sandstone (litho ASCII aggregate) TG 324.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 324.08125 U |
| mTVDss | -1197.12 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.8 | 32 |
| RES_DEEP (ohm.m) | 39.92 | 32 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1715 m MD — Interval 1712.5 – 1717.5 m

**Sample Description (spreadsheet):** Sample 1715m: 100% Sandstone (litho ASCII aggregate) TG 318.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 318.34375 U |
| mTVDss | -1197.06 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.5 | 33 |
| RES_DEEP (ohm.m) | 41.22 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1720 m MD — Interval 1717.5 – 1722.5 m

**Sample Description (spreadsheet):** Sample 1720m: 100% Sandstone (litho ASCII aggregate) TG 258.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 258.65882352941173 U |
| mTVDss | -1197.00 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.9 | 33 |
| RES_DEEP (ohm.m) | 34.59 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1725 m MD — Interval 1722.5 – 1727.5 m

**Sample Description (spreadsheet):** Sample 1725m: 100% Sandstone (litho ASCII aggregate) TG 253.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 252.97499999999997 U |
| mTVDss | -1196.94 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1740m: med brn gry,lt SLIDING 1750 gry-med gry,arg,aren i/p,com liths, 1750'-1775' 99 / 1 tr carb spks & lams,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.8 | 33 |
| RES_DEEP (ohm.m) | 38.17 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1730 m MD — Interval 1727.5 – 1732.5 m

**Sample Description (spreadsheet):** Sample 1730m: 100% Sandstone (litho ASCII aggregate) TG 168.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 168.04117647058825 U |
| mTVDss | -1196.87 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1740m: med brn gry,lt SLIDING 1750 gry-med gry,arg,aren i/p,com liths, 1750'-1775' 99 / 1 tr carb spks & lams,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.7 | 33 |
| RES_DEEP (ohm.m) | 42.15 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1735 m MD — Interval 1732.5 – 1737.5 m

**Sample Description (spreadsheet):** Sample 1735m: 100% Sandstone (litho ASCII aggregate) TG 62.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 62.16470588235294 U |
| mTVDss | -1196.81 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1740m: med brn gry,lt SLIDING 1750 gry-med gry,arg,aren i/p,com liths, 1750'-1775' 99 / 1 tr carb spks & lams,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.8 | 32 |
| RES_DEEP (ohm.m) | 40.19 | 32 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1740 m MD — Interval 1737.5 – 1742.5 m

**Sample Description (spreadsheet):** Sample 1740m: 100% Sandstone (litho ASCII aggregate) TG 63.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 63.85625 U |
| mTVDss | -1196.77 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1740m: med brn gry,lt SLIDING 1750 gry-med gry,arg,aren i/p,com liths, 1750'-1775' 99 / 1 tr carb spks & lams,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.8 | 33 |
| RES_DEEP (ohm.m) | 39.13 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1745 m MD — Interval 1742.5 – 1747.5 m

**Sample Description (spreadsheet):** Sample 1745m: 100% Sandstone (litho ASCII aggregate) TG 64.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 64.54705882352943 U |
| mTVDss | -1196.74 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1740m: med brn gry,lt SLIDING 1750 gry-med gry,arg,aren i/p,com liths, 1750'-1775' 99 / 1 tr carb spks & lams,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.0 | 33 |
| RES_DEEP (ohm.m) | 36.01 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1750 m MD — Interval 1747.5 – 1752.5 m

**Sample Description (spreadsheet):** Sample 1750m: 100% Sandstone (litho ASCII aggregate) TG 85.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 85.19999999999999 U |
| mTVDss | -1196.71 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1740m: med brn gry,lt SLIDING 1750 gry-med gry,arg,aren i/p,com liths, 1750'-1775' 99 / 1 tr carb spks & lams,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.0 | 33 |
| RES_DEEP (ohm.m) | 35.86 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1755 m MD — Interval 1752.5 – 1757.5 m

**Sample Description (spreadsheet):** Sample 1755m: 100% Sandstone (litho ASCII aggregate) TG 91.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 91.04117647058824 U |
| mTVDss | -1196.68 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1740m: med brn gry,lt SLIDING 1750 gry-med gry,arg,aren i/p,com liths, 1750'-1775' 99 / 1 tr carb spks & lams,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.1 | 33 |
| RES_DEEP (ohm.m) | 37.49 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1760 m MD — Interval 1757.5 – 1762.5 m

**Sample Description (spreadsheet):** Sample 1760m: 100% Sandstone (litho ASCII aggregate) TG 86.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 86.8 U |
| mTVDss | -1196.65 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.8 | 32 |
| RES_DEEP (ohm.m) | 39.37 | 32 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1765 m MD — Interval 1762.5 – 1767.5 m

**Sample Description (spreadsheet):** Sample 1765m: 100% Sandstone (litho ASCII aggregate) TG 78.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 78.93125 U |
| mTVDss | -1196.62 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.3 | 33 |
| RES_DEEP (ohm.m) | 35.86 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1770 m MD — Interval 1767.5 – 1772.5 m

**Sample Description (spreadsheet):** Sample 1770m: 100% Sandstone (litho ASCII aggregate) TG 75.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 75.35882352941178 U |
| mTVDss | -1196.58 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.4 | 33 |
| RES_DEEP (ohm.m) | 33.60 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1775 m MD — Interval 1772.5 – 1777.5 m

**Sample Description (spreadsheet):** Sample 1775m: 100% Sandstone (litho ASCII aggregate) TG 70.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 70.80625 U |
| mTVDss | -1196.54 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.1 | 33 |
| RES_DEEP (ohm.m) | 30.46 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1780 m MD — Interval 1777.5 – 1782.5 m

**Sample Description (spreadsheet):** Sample 1780m: 100% Sandstone (litho ASCII aggregate) TG 59.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 59.53529411764707 U |
| mTVDss | -1196.50 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.9 | 33 |
| RES_DEEP (ohm.m) | 30.14 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1785 m MD — Interval 1782.5 – 1787.5 m

**Sample Description (spreadsheet):** Sample 1785m: 100% Sandstone (litho ASCII aggregate) TG 58.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 58.6375 U |
| mTVDss | -1196.47 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.5 | 33 |
| RES_DEEP (ohm.m) | 30.57 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1790 m MD — Interval 1787.5 – 1792.5 m

**Sample Description (spreadsheet):** Sample 1790m: 100% Sandstone (litho ASCII aggregate) TG 65.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 65.25 U |
| mTVDss | -1196.43 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.3 | 32 |
| RES_DEEP (ohm.m) | 31.18 | 32 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1795 m MD — Interval 1792.5 – 1797.5 m

**Sample Description (spreadsheet):** Sample 1795m: 100% Sandstone (litho ASCII aggregate) TG 62.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 62.48235294117647 U |
| mTVDss | -1196.37 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.9 | 33 |
| RES_DEEP (ohm.m) | 31.45 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1800 m MD — Interval 1797.5 – 1802.5 m

**Sample Description (spreadsheet):** Sample 1800m: 100% Sandstone (litho ASCII aggregate) TG 81.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 81.54375 U |
| mTVDss | -1196.31 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.9 | 33 |
| RES_DEEP (ohm.m) | 30.52 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1805 m MD — Interval 1802.5 – 1807.5 m

**Sample Description (spreadsheet):** Sample 1805m: 100% Sandstone (litho ASCII aggregate) TG 106.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 106.11764705882354 U |
| mTVDss | -1196.24 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.4 | 33 |
| RES_DEEP (ohm.m) | 31.75 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1810 m MD — Interval 1807.5 – 1812.5 m

**Sample Description (spreadsheet):** Sample 1810m: 100% Sandstone (litho ASCII aggregate) TG 93.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 93.6 U |
| mTVDss | -1196.18 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.8 | 33 |
| RES_DEEP (ohm.m) | 36.64 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1815 m MD — Interval 1812.5 – 1817.5 m

**Sample Description (spreadsheet):** Sample 1815m: 100% Sandstone (litho ASCII aggregate) TG 88.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 88.11250000000001 U |
| mTVDss | -1196.11 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1830m: lt-med gry,grnsh gry, clr-trnsl,pred f,tr vf,wl srt,sbang- sbrnd,mod wk calc cmt,off wh-lt gry arg mtx,tr liths,tr carb spks,rr qtz SLIDING 1840 ovgths,rr pyr nods,tr-mnr glauc,pred

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.8 | 32 |
| RES_DEEP (ohm.m) | 36.83 | 32 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1820 m MD — Interval 1817.5 – 1822.5 m

**Sample Description (spreadsheet):** Sample 1820m: 100% Sandstone (litho ASCII aggregate) TG 86.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 86.92941176470588 U |
| mTVDss | -1196.04 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1830m: lt-med gry,grnsh gry, clr-trnsl,pred f,tr vf,wl srt,sbang- sbrnd,mod wk calc cmt,off wh-lt gry arg mtx,tr liths,tr carb spks,rr qtz SLIDING 1840 ovgths,rr pyr nods,tr-mnr glauc,pred

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.4 | 33 |
| RES_DEEP (ohm.m) | 34.05 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1825 m MD — Interval 1822.5 – 1827.5 m

**Sample Description (spreadsheet):** Sample 1825m: 100% Sandstone (litho ASCII aggregate) TG 77.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 77.18125 U |
| mTVDss | -1195.95 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1830m: lt-med gry,grnsh gry, clr-trnsl,pred f,tr vf,wl srt,sbang- sbrnd,mod wk calc cmt,off wh-lt gry arg mtx,tr liths,tr carb spks,rr qtz SLIDING 1840 ovgths,rr pyr nods,tr-mnr glauc,pred

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.3 | 33 |
| RES_DEEP (ohm.m) | 35.21 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1830 m MD — Interval 1827.5 – 1832.5 m

**Sample Description (spreadsheet):** Sample 1830m: 100% Sandstone (litho ASCII aggregate) TG 77.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 77.15294117647059 U |
| mTVDss | -1195.86 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1830m: lt-med gry,grnsh gry, clr-trnsl,pred f,tr vf,wl srt,sbang- sbrnd,mod wk calc cmt,off wh-lt gry arg mtx,tr liths,tr carb spks,rr qtz SLIDING 1840 ovgths,rr pyr nods,tr-mnr glauc,pred

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.1 | 33 |
| RES_DEEP (ohm.m) | 37.20 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1835 m MD — Interval 1832.5 – 1837.5 m

**Sample Description (spreadsheet):** Sample 1835m: 100% Sandstone (litho ASCII aggregate) TG 64.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 64.51875 U |
| mTVDss | -1195.76 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1830m: lt-med gry,grnsh gry, clr-trnsl,pred f,tr vf,wl srt,sbang- sbrnd,mod wk calc cmt,off wh-lt gry arg mtx,tr liths,tr carb spks,rr qtz SLIDING 1840 ovgths,rr pyr nods,tr-mnr glauc,pred

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.6 | 33 |
| RES_DEEP (ohm.m) | 40.56 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1840 m MD — Interval 1837.5 – 1842.5 m

**Sample Description (spreadsheet):** Sample 1840m: 100% Sandstone (litho ASCII aggregate) TG 77.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 77.275 U |
| mTVDss | -1195.67 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1830m: lt-med gry,grnsh gry, clr-trnsl,pred f,tr vf,wl srt,sbang- sbrnd,mod wk calc cmt,off wh-lt gry arg mtx,tr liths,tr carb spks,rr qtz SLIDING 1840 ovgths,rr pyr nods,tr-mnr glauc,pred

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.9 | 32 |
| RES_DEEP (ohm.m) | 38.97 | 32 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1845 m MD — Interval 1842.5 – 1847.5 m

**Sample Description (spreadsheet):** Sample 1845m: 100% Sandstone (litho ASCII aggregate) TG 68.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 68.28823529411763 U |
| mTVDss | -1195.58 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1830m: lt-med gry,grnsh gry, clr-trnsl,pred f,tr vf,wl srt,sbang- sbrnd,mod wk calc cmt,off wh-lt gry arg mtx,tr liths,tr carb spks,rr qtz SLIDING 1840 ovgths,rr pyr nods,tr-mnr glauc,pred
- **LIMESTONE(Tr)** @ ~1860m: lt-med gry brn, MW:9.4 crm-buff,lut,spar i/p,arg-aren,micrxln, FV:43 mnr liths,hd-v hd. PV:10 1870 YP:21

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.2 | 33 |
| RES_DEEP (ohm.m) | 40.51 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1850 m MD — Interval 1847.5 – 1852.5 m

**Sample Description (spreadsheet):** Sample 1850m: 100% Sandstone (litho ASCII aggregate) TG 66.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 66.45 U |
| mTVDss | -1195.46 m |

**Mudlog Cuttings Description (PDF):**
- **LIMESTONE(Tr)** @ ~1860m: lt-med gry brn, MW:9.4 crm-buff,lut,spar i/p,arg-aren,micrxln, FV:43 mnr liths,hd-v hd. PV:10 1870 YP:21

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.8 | 33 |
| RES_DEEP (ohm.m) | 41.28 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1855 m MD — Interval 1852.5 – 1857.5 m

**Sample Description (spreadsheet):** Sample 1855m: 100% Sandstone (litho ASCII aggregate) TG 73.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 73.86470588235295 U |
| mTVDss | -1195.34 m |

**Mudlog Cuttings Description (PDF):**
- **LIMESTONE(Tr)** @ ~1860m: lt-med gry brn, MW:9.4 crm-buff,lut,spar i/p,arg-aren,micrxln, FV:43 mnr liths,hd-v hd. PV:10 1870 YP:21

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.1 | 33 |
| RES_DEEP (ohm.m) | 43.33 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1860 m MD — Interval 1857.5 – 1862.5 m

**Sample Description (spreadsheet):** Sample 1860m: 100% Sandstone (litho ASCII aggregate) TG 79.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 79.30625 U |
| mTVDss | -1195.23 m |

**Mudlog Cuttings Description (PDF):**
- **LIMESTONE(Tr)** @ ~1860m: lt-med gry brn, MW:9.4 crm-buff,lut,spar i/p,arg-aren,micrxln, FV:43 mnr liths,hd-v hd. PV:10 1870 YP:21

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.2 | 33 |
| RES_DEEP (ohm.m) | 41.21 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1865 m MD — Interval 1862.5 – 1867.5 m

**Sample Description (spreadsheet):** Sample 1865m: 100% Sandstone (litho ASCII aggregate) TG 75.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 75.8125 U |
| mTVDss | -1195.11 m |

**Mudlog Cuttings Description (PDF):**
- **LIMESTONE(Tr)** @ ~1860m: lt-med gry brn, MW:9.4 crm-buff,lut,spar i/p,arg-aren,micrxln, FV:43 mnr liths,hd-v hd. PV:10 1870 YP:21

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.3 | 32 |
| RES_DEEP (ohm.m) | 39.80 | 32 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1870 m MD — Interval 1867.5 – 1872.5 m

**Sample Description (spreadsheet):** Sample 1870m: 100% Sandstone (litho ASCII aggregate) TG 72.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 72.47058823529413 U |
| mTVDss | -1194.99 m |

**Mudlog Cuttings Description (PDF):**
- **LIMESTONE(Tr)** @ ~1860m: lt-med gry brn, MW:9.4 crm-buff,lut,spar i/p,arg-aren,micrxln, FV:43 mnr liths,hd-v hd. PV:10 1870 YP:21

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.5 | 33 |
| RES_DEEP (ohm.m) | 37.03 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1935 m MD — Interval 1932.5 – 1937.5 m

**Sample Description (spreadsheet):** Sample 1935m: 100% Sandstone (litho ASCII aggregate) TG 44.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 44.3875 U |
| mTVDss | -1192.94 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1930m: pl brn,lt-med gry, med brn gry,arg,mnr aren,tr carb spks & micrlams,tr dissem pyr frm-occ mod

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 112.1 | 33 |
| RES_DEEP (ohm.m) | 24.38 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1940 m MD — Interval 1937.5 – 1942.5 m

**Sample Description (spreadsheet):** Sample 1940m: 100% Sandstone (litho ASCII aggregate) TG 68.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 68.23529411764704 U |
| mTVDss | -1192.73 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1930m: pl brn,lt-med gry, med brn gry,arg,mnr aren,tr carb spks & micrlams,tr dissem pyr frm-occ mod

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 108.5 | 33 |
| RES_DEEP (ohm.m) | 31.32 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1945 m MD — Interval 1942.5 – 1947.5 m

**Sample Description (spreadsheet):** Sample 1945m: 100% Sandstone (litho ASCII aggregate) TG 77.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Loose Grains | Yes |
| Total Gas | 77.19375 U |
| mTVDss | -1192.51 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1930m: pl brn,lt-med gry, med brn gry,arg,mnr aren,tr carb spks & micrlams,tr dissem pyr frm-occ mod
- **SANDSTONE** @ ~1960m: pl gry-off wh,grnsh 100% C1 gry,vf-f,wl srt,sbang-sbrnd,wk-mod SLIDING 1970 calc cmt,com off wh-lt gry arg mtx, 1970'-1990' com carb spks,occ glauc,tr liths, mod hd aggs,lse i/p,ti vis por,fr inf

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.6 | 32 |
| RES_DEEP (ohm.m) | 32.77 | 32 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1950 m MD — Interval 1947.5 – 1952.5 m

**Sample Description (spreadsheet):** Sample 1950m: 100% Sandstone (litho ASCII aggregate) TG 85.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Loose Grains | Yes |
| Total Gas | 85.70588235294117 U |
| mTVDss | -1192.30 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1960m: pl gry-off wh,grnsh 100% C1 gry,vf-f,wl srt,sbang-sbrnd,wk-mod SLIDING 1970 calc cmt,com off wh-lt gry arg mtx, 1970'-1990' com carb spks,occ glauc,tr liths, mod hd aggs,lse i/p,ti vis por,fr inf

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.2 | 33 |
| RES_DEEP (ohm.m) | 36.34 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1955 m MD — Interval 1952.5 – 1957.5 m

**Sample Description (spreadsheet):** Sample 1955m: 100% Sandstone (litho ASCII aggregate) TG 95.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Loose Grains | Yes |
| Total Gas | 95.50588235294117 U |
| mTVDss | -1192.08 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1960m: pl gry-off wh,grnsh 100% C1 gry,vf-f,wl srt,sbang-sbrnd,wk-mod SLIDING 1970 calc cmt,com off wh-lt gry arg mtx, 1970'-1990' com carb spks,occ glauc,tr liths, mod hd aggs,lse i/p,ti vis por,fr inf

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.7 | 33 |
| RES_DEEP (ohm.m) | 44.08 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1960 m MD — Interval 1957.5 – 1962.5 m

**Sample Description (spreadsheet):** Sample 1960m: 100% Sandstone (litho ASCII aggregate) TG 87.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Loose Grains | Yes |
| Total Gas | 87.11875 U |
| mTVDss | -1191.88 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1960m: pl gry-off wh,grnsh 100% C1 gry,vf-f,wl srt,sbang-sbrnd,wk-mod SLIDING 1970 calc cmt,com off wh-lt gry arg mtx, 1970'-1990' com carb spks,occ glauc,tr liths, mod hd aggs,lse i/p,ti vis por,fr inf

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.3 | 33 |
| RES_DEEP (ohm.m) | 46.52 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1965 m MD — Interval 1962.5 – 1967.5 m

**Sample Description (spreadsheet):** Sample 1965m: 29% Sandstone (litho ASCII aggregate) TG 103.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 28.571428571428573 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Loose Grains | Yes |
| Total Gas | 103.58823529411765 U |
| mTVDss | -1191.68 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1960m: pl gry-off wh,grnsh 100% C1 gry,vf-f,wl srt,sbang-sbrnd,wk-mod SLIDING 1970 calc cmt,com off wh-lt gry arg mtx, 1970'-1990' com carb spks,occ glauc,tr liths, mod hd aggs,lse i/p,ti vis por,fr inf

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.3 | 33 |
| RES_DEEP (ohm.m) | 47.11 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1970 m MD — Interval 1967.5 – 1972.5 m

**Sample Description (spreadsheet):** Sample 1970m: 21% Sandstone (litho ASCII aggregate) TG 106.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 21.428571428571427 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Loose Grains | Yes |
| Total Gas | 106.725 U |
| mTVDss | -1191.48 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1960m: pl gry-off wh,grnsh 100% C1 gry,vf-f,wl srt,sbang-sbrnd,wk-mod SLIDING 1970 calc cmt,com off wh-lt gry arg mtx, 1970'-1990' com carb spks,occ glauc,tr liths, mod hd aggs,lse i/p,ti vis por,fr inf

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.2 | 32 |
| RES_DEEP (ohm.m) | 47.73 | 32 |

**Permeability Proxy:** Insufficient resistivity data
---

### 1975 m MD — Interval 1972.5 – 1977.5 m

**Sample Description (spreadsheet):** Sample 1975m: 43% Sandstone (litho ASCII aggregate) TG 123.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 43.214285714285715 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Loose Grains | Yes |
| Total Gas | 123.26875 U |
| mTVDss | -1191.28 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1960m: pl gry-off wh,grnsh 100% C1 gry,vf-f,wl srt,sbang-sbrnd,wk-mod SLIDING 1970 calc cmt,com off wh-lt gry arg mtx, 1970'-1990' com carb spks,occ glauc,tr liths, mod hd aggs,lse i/p,ti vis por,fr inf
- **SILTSTONE** @ ~1990m: pl gry,lt gry-med gry,lt-med brn gry,arg,aren,grd to vf SST i/p,tr liths,tr carb spks, 2000 frm-mod hd,sbblky-sbfiss,fiss i/p. SLIDING 2010

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.7 | 33 |
| RES_DEEP (ohm.m) | 59.87 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 2035 m MD — Interval 2032.5 – 2037.5 m

**Sample Description (spreadsheet):** Sample 2035m: 100% Sandstone (litho ASCII aggregate) TG 149.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 149.50625000000002 U |
| mTVDss | -1191.34 m |

**Mudlog Cuttings Description (PDF):**
- **LIMESTONE(Tr)** @ ~2030m: lt-med brn,spar, arg,tr liths,cryptxln,hd.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 112.4 | 33 |
| RES_DEEP (ohm.m) | 45.10 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 2040 m MD — Interval 2037.5 – 2042.5 m

**Sample Description (spreadsheet):** Sample 2040m: 100% Sandstone (litho ASCII aggregate) TG 151.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 151.01764705882354 U |
| mTVDss | -1191.55 m |

**Mudlog Cuttings Description (PDF):**
- **LIMESTONE(Tr)** @ ~2030m: lt-med brn,spar, arg,tr liths,cryptxln,hd.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.8 | 33 |
| RES_DEEP (ohm.m) | 44.28 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 2045 m MD — Interval 2042.5 – 2047.5 m

**Sample Description (spreadsheet):** Sample 2045m: 100% Sandstone (litho ASCII aggregate) TG 128.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 128.01875 U |
| mTVDss | -1191.76 m |

**Mudlog Cuttings Description (PDF):**
- **LIMESTONE(Tr)** @ ~2030m: lt-med brn,spar, arg,tr liths,cryptxln,hd.
- **SILTSTONE** @ ~2060m: lt-med gry,lt-med brnsh gry,gry,arg,aren,grd to vf SST i/p,tr liths,tr carb 2070 micro spks,frm-mod hd,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.9 | 33 |
| RES_DEEP (ohm.m) | 40.55 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 2050 m MD — Interval 2047.5 – 2052.5 m

**Sample Description (spreadsheet):** Sample 2050m: 100% Sandstone (litho ASCII aggregate) TG 110.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 109.9875 U |
| mTVDss | -1191.97 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2060m: lt-med gry,lt-med brnsh gry,gry,arg,aren,grd to vf SST i/p,tr liths,tr carb 2070 micro spks,frm-mod hd,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.9 | 32 |
| RES_DEEP (ohm.m) | 31.30 | 32 |

**Permeability Proxy:** Insufficient resistivity data
---

### 2055 m MD — Interval 2052.5 – 2057.5 m

**Sample Description (spreadsheet):** Sample 2055m: 100% Sandstone (litho ASCII aggregate) TG 97.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 97.42941176470588 U |
| mTVDss | -1192.23 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2060m: lt-med gry,lt-med brnsh gry,gry,arg,aren,grd to vf SST i/p,tr liths,tr carb 2070 micro spks,frm-mod hd,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.3 | 33 |
| RES_DEEP (ohm.m) | 26.09 | 33 |

**Permeability Proxy:** Insufficient resistivity data
---

### 2060 m MD — Interval 2057.5 – 2062.5 m

**Sample Description (spreadsheet):** Sample 2060m: 100% Sandstone (litho ASCII aggregate) TG 93.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 93.1875 U |
| mTVDss | -1192.48 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2060m: lt-med gry,lt-med brnsh gry,gry,arg,aren,grd to vf SST i/p,tr liths,tr carb 2070 micro spks,frm-mod hd,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.3 | 20 |
| RES_DEEP (ohm.m) | 22.60 | 6 |

**Permeability Proxy:** Insufficient resistivity data
---

### 2065 m MD — Interval 2062.5 – 2067.5 m

**Sample Description (spreadsheet):** Sample 2065m: 100% Sandstone (litho ASCII aggregate) TG 106.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Loose Grains | No |
| Total Gas | 106.15294117647058 U |
| mTVDss | -1192.73 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2060m: lt-med gry,lt-med brnsh gry,gry,arg,aren,grd to vf SST i/p,tr liths,tr carb 2070 micro spks,frm-mod hd,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|

**Permeability Proxy:** Insufficient resistivity data
---

## 5. Summary Statistics (McKinlay Member)

| Metric | Value |
|--------|-------|
| Intervals analysed | 70 |
| Depth range | 1605 – 2065 m |
| Avg % Sandstone | 97.0% |
| Mudlog matches | 47 / 70 |
