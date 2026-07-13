# MCKINLAY 21 — McKinlay Member Cuttings & Log Interpretation

**Generated:** 2026-07-13 02:06 UTC  
**Well:** MCKINLAY 21 (MCKINLAY 21)  
**TD:** 2417 m MD  

---

## 1. Data Sources & Methodology

| Source | File | Role |
|--------|------|------|
| Mudlog PDF | `McKinlay 21_Mudlog_Spud-2417m_TD.pdf` | Cuttings lithology descriptions |
| Sample Descriptions | `McKinlay 21 Hz Section Samples Descriptions.xlsx` (Sheet1 (cols F=TG, G=%SS, H=%fluoro + col A descriptions)) | Depth intervals & sample properties |
| Formation Tops | `DC30.xlsx`, `Mck_Murta.xlsx` | Reservoir entry & overburden identification |
| Wireline Log (LAS) | `Mck_21` | GR, RES_DEEP, RES_SHALLOW |
| Trajectory | `Mck_21_trajectory` | mTVDss (Z subsea) |

## 2. Formation Top Analysis

### 2.1 Key Tops

| Marker | Depth (m MD) | Source |
|--------|-------------|--------|
| DC30 | 1769.69 | DC30.xlsx |
| McKinlay Member (shallowest) | 1770.10 | Mck_Murta.xlsx |

### 2.2 McKinlay Member Top Classification

**Initial reservoir entry (DC30 + shallowest McKinlay):** 1770.10 m MD

**Target re-entry (lone McKinlay below an overburden entry pair):**
- 2227.60 m MD

**Overburden entry (Murta + corresponding McKinlay within 5 m):**
| McKinlay entry (m MD) | Murta (m MD) | Δ (m) | Re-entry (m MD) | Zone length (m) |
|-----------------------|-------------|-------|-----------------|-----------------|
| 2212.00 | 2210.33 | 1.67 | 2227.60 | 15.6 |

**McKinlay Member analysis window:** 1770.1 – 2417.0 m MD

**Excluded overburden intervals (entry → re-entry, pay resumes at re-entry):** 2212–2228 m (overburden)

**Samples in McKinlay Member:** 124 of 148 total
- Excluded pre-reservoir: 19
- Excluded overburden intervals: 5

## 3. Known Shortcomings

> **Read this section before using the output.**

1. **Mudlog PDF text extraction is imperfect.** Depth-to-description assignment uses ±15 m proximity heuristics.
2. **Formation top discrepancies** between Mck_Murta.xlsx and mudlog PDF picks are noted where present.
3. **Well name mapping:** MCKINLAY 21 → `MCKINLAY 21` (verified by TD and LAS WELL header).
4. **Sample intervals** are midpoints between consecutive sample depths — variable widths where spacing is irregular.
5. **Water-risk flags** use RQI, fluorescence, resistivity, GR, ZOI, and OWC proximity (see export).
6. **NULL LAS values** (-999.25) excluded from averages.
7. **Exclusion zones** span from each Murta/McKinlay overburden entry to the next lone McKinlay re-entry below (or entry + 50 m MD if none mapped). Later entry pairs inside an existing exclusion interval are treated as the same overburden excursion. Initial DC30/McKinlay reservoir entry is not excluded.
8. **Input Sheet only** — Calculations Sheet not used.
9. **McKinlay legacy spreadsheet:** Sheet1 columns F (TG), G (%SS), H (%fluoro) used directly; column A description text parsed for grain size, fluorescence brightness, and siderite.

## 4. McKinlay Member Sample Intervals

Each section: depth interval, spreadsheet sample, mudlog cuttings, wireline log averages.

### 1775 m MD — Interval 1772.5 – 1777.5 m

**Sample Description (spreadsheet):** Sample 1775m 50% Siltstone, 50% Sandstone. Trace yellow white spotted Fluorescence in Sandstone

| Property | Value |
|----------|-------|
| % Sandstone | 50.0 |
| Grain Size | Siltstone, 50% (max: nan) |
| Porosity Class | fr-gd |
| Hardness | hd (0.20) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.80) |
| Fluorescence | 1.0% yellow white spotted |
| Total Gas | 15.0 U |
| mTVDss | -1192.80 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1780m: clr-trnsl,v pl gry,vf-crs, vf-f aggs,v pr srt,sbang-sbrnd,mod str sil cmt,com pl gry-off wh arg mtx,com med-crs disagg qtz grs,mod 82 / 6 / 4 / 4 / 4 hd-hd aggs,pr vis por,gd inf por,fluor.
- **SILTSTONE** @ ~1780m: med lt gry,med dk gry,med brn gry,aren,mnr carb spks & micmic, 1790 82 / 6 / 4 / 4 / 4 sft-mod hd,sbblky-blky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 121.8 | 33 |
| RES_DEEP (ohm.m) | 21.11 | 33 |
| RES_SHALLOW (ohm.m) | 16.38 | 33 |

---

### 1780 m MD — Interval 1777.5 – 1782.5 m

**Sample Description (spreadsheet):** Sample 1780m: 40% Siltstone. 60% very fine to fine Sandstone. TG: 92U. 10% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | hd (0.20) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.80) |
| Fluorescence | 10.0% Siltstone. 60% very fine to fine Sandstone. TG: 92U. 10% mod bri |
| Total Gas | 92.0 U |
| mTVDss | -1193.01 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1780m: clr-trnsl,v pl gry,vf-crs, vf-f aggs,v pr srt,sbang-sbrnd,mod str sil cmt,com pl gry-off wh arg mtx,com med-crs disagg qtz grs,mod 82 / 6 / 4 / 4 / 4 hd-hd aggs,pr vis por,gd inf por,fluor.
- **SILTSTONE** @ ~1780m: med lt gry,med dk gry,med brn gry,aren,mnr carb spks & micmic, 1790 82 / 6 / 4 / 4 / 4 sft-mod hd,sbblky-blky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.4 | 33 |
| RES_DEEP (ohm.m) | 25.41 | 33 |
| RES_SHALLOW (ohm.m) | 21.34 | 33 |

---

### 1785 m MD — Interval 1782.5 – 1787.5 m

**Sample Description (spreadsheet):** Sample 1785m: 30% Siltstone. 70% very fine to fine aggs, fine to coarse loose, common medium Sandstone. TG: 96U. 80% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | very fine to fine aggs, fine to coarse loose, common medium (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | hd (0.20) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.80) |
| Fluorescence | 80.0% Siltstone. 70% very fine to fine aggs, fine to coarse loose, common medium Sandstone. TG: 96U. 80% bri |
| Total Gas | 96.0 U |
| mTVDss | -1193.22 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1780m: clr-trnsl,v pl gry,vf-crs, vf-f aggs,v pr srt,sbang-sbrnd,mod str sil cmt,com pl gry-off wh arg mtx,com med-crs disagg qtz grs,mod 82 / 6 / 4 / 4 / 4 hd-hd aggs,pr vis por,gd inf por,fluor.
- **SILTSTONE** @ ~1780m: med lt gry,med dk gry,med brn gry,aren,mnr carb spks & micmic, 1790 82 / 6 / 4 / 4 / 4 sft-mod hd,sbblky-blky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.7 | 33 |
| RES_DEEP (ohm.m) | 23.09 | 33 |
| RES_SHALLOW (ohm.m) | 20.61 | 33 |

---

### 1790 m MD — Interval 1787.5 – 1792.5 m

**Sample Description (spreadsheet):** 20% Siltstone, 80% very fine to fine aggs, fine to coarse loose, common coarse Sandstone, 100% Siltstone. 80% very fine to fine aggs, fine to coarse loose, common coarse Sandstone. TG: 84U. 100% mod bri FLUOR, TG 84.0U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine aggs, fine to coarse loose, common coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | hd (0.20) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.80) |
| Fluorescence | 100.0% Siltstone. 80% very fine to fine aggs, fine to coarse loose, common coarse Sandstone. TG: 84U. 100% mod bri |
| Total Gas | 84.0 U |
| mTVDss | -1193.41 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1780m: clr-trnsl,v pl gry,vf-crs, vf-f aggs,v pr srt,sbang-sbrnd,mod str sil cmt,com pl gry-off wh arg mtx,com med-crs disagg qtz grs,mod 82 / 6 / 4 / 4 / 4 hd-hd aggs,pr vis por,gd inf por,fluor.
- **SILTSTONE** @ ~1780m: med lt gry,med dk gry,med brn gry,aren,mnr carb spks & micmic, 1790 82 / 6 / 4 / 4 / 4 sft-mod hd,sbblky-blky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.5 | 32 |
| RES_DEEP (ohm.m) | 24.97 | 32 |
| RES_SHALLOW (ohm.m) | 22.00 | 32 |

---

### 1795 m MD — Interval 1792.5 – 1797.5 m

**Sample Description (spreadsheet):** 20% Siltstone, 80% very fine to fine aggs, minor medium to coarse loose Sandstone, 100% Siltstone. 80% very fine to fine aggs, minor medium to coarse loose Sandstone. TG: 87U. 100% mod bri-bri FLUOR, TG 87.0U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine aggs, minor medium to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | hd (0.20) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.80) |
| Fluorescence | 100.0% Siltstone. 80% very fine to fine aggs, minor medium to coarse loose Sandstone. TG: 87U. 100% mod bri-bri |
| Total Gas | 87.0 U |
| mTVDss | -1193.59 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1780m: clr-trnsl,v pl gry,vf-crs, vf-f aggs,v pr srt,sbang-sbrnd,mod str sil cmt,com pl gry-off wh arg mtx,com med-crs disagg qtz grs,mod 82 / 6 / 4 / 4 / 4 hd-hd aggs,pr vis por,gd inf por,fluor.
- **SILTSTONE** @ ~1780m: med lt gry,med dk gry,med brn gry,aren,mnr carb spks & micmic, 1790 82 / 6 / 4 / 4 / 4 sft-mod hd,sbblky-blky.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.9 | 33 |
| RES_DEEP (ohm.m) | 22.68 | 33 |
| RES_SHALLOW (ohm.m) | 18.51 | 33 |

---

### 1800 m MD — Interval 1797.5 – 1802.5 m

**Sample Description (spreadsheet):** 15% Siltstone, 85% very fine to fine aggs, minor coarse loose Sandstone, 100% Siltstone. 85% very fine to fine aggs, minor coarse loose Sandstone. TG: 82U. 100% mod bri-bri FLUOR, TG 82.0U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine aggs, minor coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 100.0% Siltstone. 85% very fine to fine aggs, minor coarse loose Sandstone. TG: 82U. 100% mod bri-bri |
| Total Gas | 82.0 U |
| mTVDss | -1193.74 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1810m: pl brn,off wh,clr,trnsl,vf- f,v wl srt,sbang-sbrnd,mod str sil cmt,com pl gry brn-off wh arg mtx, occ slty lams,mnr carb spks,mod hd- hd,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.5 | 33 |
| RES_DEEP (ohm.m) | 21.01 | 33 |
| RES_SHALLOW (ohm.m) | 19.38 | 33 |

---

### 1805 m MD — Interval 1802.5 – 1807.5 m

**Sample Description (spreadsheet):** 10% Siltstone, 90% very fine to fine aggs, trace coarse loose Sandstone, 90% Siltstone. 90% very fine to fine aggs, trace coarse loose Sandstone. TG: 74U. 90% mod bri-bri FLUOR, TG 74.0U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggs, trace coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 90.0% Siltstone. 90% very fine to fine aggs, trace coarse loose Sandstone. TG: 74U. 90% mod bri-bri |
| Total Gas | 74.0 U |
| mTVDss | -1193.85 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1810m: pl brn,off wh,clr,trnsl,vf- f,v wl srt,sbang-sbrnd,mod str sil cmt,com pl gry brn-off wh arg mtx, occ slty lams,mnr carb spks,mod hd- hd,pr vis por,fluor.
- **SILTSTONE** @ ~1820m: pl gry,med gry,lt med brn gry,aren,occ-com carb spks & micmic, com sndy lams,mod hd-hd,sbblky- sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.1 | 33 |
| RES_DEEP (ohm.m) | 20.11 | 33 |
| RES_SHALLOW (ohm.m) | 17.80 | 33 |

---

### 1810 m MD — Interval 1807.5 – 1812.5 m

**Sample Description (spreadsheet):** 10% Siltstone, 90% very fine to fine aggs, trace coarse loose Sandstone, 90% Siltstone. 90% very fine to fine aggs, trace coarse loose Sandstone. TG: 87U. 90% mod bri-bri FLUOR, TG 87.0U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggs, trace coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 90.0% Siltstone. 90% very fine to fine aggs, trace coarse loose Sandstone. TG: 87U. 90% mod bri-bri |
| Total Gas | 87.0 U |
| mTVDss | -1193.91 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1810m: pl brn,off wh,clr,trnsl,vf- f,v wl srt,sbang-sbrnd,mod str sil cmt,com pl gry brn-off wh arg mtx, occ slty lams,mnr carb spks,mod hd- hd,pr vis por,fluor.
- **SILTSTONE** @ ~1820m: pl gry,med gry,lt med brn gry,aren,occ-com carb spks & micmic, com sndy lams,mod hd-hd,sbblky- sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.3 | 33 |
| RES_DEEP (ohm.m) | 19.63 | 33 |
| RES_SHALLOW (ohm.m) | 17.60 | 33 |

---

### 1815 m MD — Interval 1812.5 – 1817.5 m

**Sample Description (spreadsheet):** 20% Siltstone, 80% very fine to fine Sandstone, 95% Siltstone. 80% very fine to fine Sandstone. TG: 91U. 95% mod bri-bri FLUOR, TG 91.0U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 95.0% Siltstone. 80% very fine to fine Sandstone. TG: 91U. 95% mod bri-bri |
| Total Gas | 91.0 U |
| mTVDss | -1193.92 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1810m: pl brn,off wh,clr,trnsl,vf- f,v wl srt,sbang-sbrnd,mod str sil cmt,com pl gry brn-off wh arg mtx, occ slty lams,mnr carb spks,mod hd- hd,pr vis por,fluor.
- **SILTSTONE** @ ~1820m: pl gry,med gry,lt med brn gry,aren,occ-com carb spks & micmic, com sndy lams,mod hd-hd,sbblky- sbfiss.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.9 | 32 |
| RES_DEEP (ohm.m) | 19.57 | 32 |
| RES_SHALLOW (ohm.m) | 17.83 | 32 |

---

### 1820 m MD — Interval 1817.5 – 1822.5 m

**Sample Description (spreadsheet):** 20% Siltstone, 80% very fine to fine Sandstone, 100% Siltstone. 80% very fine to fine Sandstone. TG: 112U. 100% bri FLUOR, TG 112.0U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 100.0% Siltstone. 80% very fine to fine Sandstone. TG: 112U. 100% bri |
| Total Gas | 112.0 U |
| mTVDss | -1193.89 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1810m: pl brn,off wh,clr,trnsl,vf- f,v wl srt,sbang-sbrnd,mod str sil cmt,com pl gry brn-off wh arg mtx, occ slty lams,mnr carb spks,mod hd- hd,pr vis por,fluor.
- **SILTSTONE** @ ~1820m: pl gry,med gry,lt med brn gry,aren,occ-com carb spks & micmic, com sndy lams,mod hd-hd,sbblky- sbfiss.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.1 | 33 |
| RES_DEEP (ohm.m) | 19.31 | 33 |
| RES_SHALLOW (ohm.m) | 18.19 | 33 |

---

### 1825 m MD — Interval 1822.5 – 1827.5 m

**Sample Description (spreadsheet):** 25% Siltstone, 75% very fine to fine Sandstone, 100% Siltstone. 75% very fine to fine Sandstone. TG: 89U. 100% bri FLUOR, TG 89.0U

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 100.0% Siltstone. 75% very fine to fine Sandstone. TG: 89U. 100% bri |
| Total Gas | 89.0 U |
| mTVDss | -1193.82 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1810m: pl brn,off wh,clr,trnsl,vf- f,v wl srt,sbang-sbrnd,mod str sil cmt,com pl gry brn-off wh arg mtx, occ slty lams,mnr carb spks,mod hd- hd,pr vis por,fluor.
- **SILTSTONE** @ ~1820m: pl gry,med gry,lt med brn gry,aren,occ-com carb spks & micmic, com sndy lams,mod hd-hd,sbblky- sbfiss.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.0 | 33 |
| RES_DEEP (ohm.m) | 19.12 | 33 |
| RES_SHALLOW (ohm.m) | 17.80 | 33 |

---

### 1830 m MD — Interval 1827.5 – 1832.5 m

**Sample Description (spreadsheet):** 20% Siltstone, 80% very fine to fine Sandstone, 100% Siltstone. 80% very fine to fine Sandstone. TG: 85U. 100% bri FLUOR, TG 85.0U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 100.0% Siltstone. 80% very fine to fine Sandstone. TG: 85U. 100% bri |
| Total Gas | 85.0 U |
| mTVDss | -1193.71 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1820m: pl gry,med gry,lt med brn gry,aren,occ-com carb spks & micmic, com sndy lams,mod hd-hd,sbblky- sbfiss.
- **SANDSTONE** @ ~1830m: pl brn,off wh,clr,trnsl,vf- f,v wl srt,sbang-sbrnd,mod str sil cmt, com pl gry brn-off wh arg mtx,occ slty lams,mnr carb spks,mod hd-hd,rr v hd, 80 / 6 / 4 / 5 / 5 pr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.7 | 33 |
| RES_DEEP (ohm.m) | 19.47 | 33 |
| RES_SHALLOW (ohm.m) | 17.99 | 33 |

---

### 1835 m MD — Interval 1832.5 – 1837.5 m

**Sample Description (spreadsheet):** 20% Siltstone, 80% very fine to fine Sandstone, 95% Siltstone. 80% very fine to fine Sandstone. TG: 120U. 95% bri FLUOR, TG 120.0U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 95.0% Siltstone. 80% very fine to fine Sandstone. TG: 120U. 95% bri |
| Total Gas | 120.0 U |
| mTVDss | -1193.58 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1820m: pl gry,med gry,lt med brn gry,aren,occ-com carb spks & micmic, com sndy lams,mod hd-hd,sbblky- sbfiss.
- **SANDSTONE** @ ~1830m: pl brn,off wh,clr,trnsl,vf- f,v wl srt,sbang-sbrnd,mod str sil cmt, com pl gry brn-off wh arg mtx,occ slty lams,mnr carb spks,mod hd-hd,rr v hd, 80 / 6 / 4 / 5 / 5 pr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.3 | 33 |
| RES_DEEP (ohm.m) | 21.38 | 33 |
| RES_SHALLOW (ohm.m) | 20.31 | 33 |

---

### 1840 m MD — Interval 1837.5 – 1842.5 m

**Sample Description (spreadsheet):** 10% Siltstone, 90% very fine to fine Sandstone, 100% Siltstone. 90% very fine to fine Sandstone. TG: 103U. 100% bri FLUOR, TG 103.0U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 100.0% Siltstone. 90% very fine to fine Sandstone. TG: 103U. 100% bri |
| Total Gas | 103.0 U |
| mTVDss | -1193.41 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1830m: pl brn,off wh,clr,trnsl,vf- f,v wl srt,sbang-sbrnd,mod str sil cmt, com pl gry brn-off wh arg mtx,occ slty lams,mnr carb spks,mod hd-hd,rr v hd, 80 / 6 / 4 / 5 / 5 pr vis por,fluor.
- **SANDSTONE** @ ~1840m: pl brn,off wh,clr,trnsl,vf- f,v wl srt,sbang-sbrnd,mod str sil cmt, com pl gry brn-off wh arg mtx,occ slty lams,mnr carb spks,mod hd-hd,rr v hd, pr vis por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.8 | 32 |
| RES_DEEP (ohm.m) | 23.47 | 32 |
| RES_SHALLOW (ohm.m) | 21.45 | 32 |

---

### 1845 m MD — Interval 1842.5 – 1847.5 m

**Sample Description (spreadsheet):** 15% Siltstone, 85% very fine to fine Sandstone, 100% Siltstone. 85% very fine to fine Sandstone. TG: 100U. 100% bri FLUOR, TG 100.0U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.80) |
| Fluorescence | 100.0% Siltstone. 85% very fine to fine Sandstone. TG: 100U. 100% bri |
| Total Gas | 100.0 U |
| mTVDss | -1193.23 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1830m: pl brn,off wh,clr,trnsl,vf- f,v wl srt,sbang-sbrnd,mod str sil cmt, com pl gry brn-off wh arg mtx,occ slty lams,mnr carb spks,mod hd-hd,rr v hd, 80 / 6 / 4 / 5 / 5 pr vis por,fluor.
- **SANDSTONE** @ ~1840m: pl brn,off wh,clr,trnsl,vf- f,v wl srt,sbang-sbrnd,mod str sil cmt, com pl gry brn-off wh arg mtx,occ slty lams,mnr carb spks,mod hd-hd,rr v hd, pr vis por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.8 | 33 |
| RES_DEEP (ohm.m) | 22.99 | 33 |
| RES_SHALLOW (ohm.m) | 19.78 | 33 |

---

### 1850 m MD — Interval 1847.5 – 1852.5 m

**Sample Description (spreadsheet):** 30% Siltstone, 70% very fine to fine Sandstone, 100% Siltstone. 70% very fine to fine Sandstone. TG: 130U. 100% bri FLUOR, TG 130.0U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.80) |
| Fluorescence | 100.0% Siltstone. 70% very fine to fine Sandstone. TG: 130U. 100% bri |
| Total Gas | 130.0 U |
| mTVDss | -1193.04 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1840m: pl brn,off wh,clr,trnsl,vf- f,v wl srt,sbang-sbrnd,mod str sil cmt, com pl gry brn-off wh arg mtx,occ slty lams,mnr carb spks,mod hd-hd,rr v hd, pr vis por,fluor.
- **SILTSTONE** @ ~1840m: pl gry,med gry,lt med brn gry, dk gry,aren,occ-com carb spks & micmic, com sndy lams,mod hd-hd,sbblky- sbfiss.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.9 | 33 |
| RES_DEEP (ohm.m) | 25.21 | 33 |
| RES_SHALLOW (ohm.m) | 20.79 | 33 |

---

### 1855 m MD — Interval 1852.5 – 1857.5 m

**Sample Description (spreadsheet):** 25% Siltstone, 75% very fine to fine Sandstone, 100% Siltstone. 75% very fine to fine Sandstone. TG: 161U. 100% bri FLUOR, TG 161.0U

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.80) |
| Fluorescence | 100.0% Siltstone. 75% very fine to fine Sandstone. TG: 161U. 100% bri |
| Total Gas | 161.0 U |
| mTVDss | -1192.85 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1840m: pl brn,off wh,clr,trnsl,vf- f,v wl srt,sbang-sbrnd,mod str sil cmt, com pl gry brn-off wh arg mtx,occ slty lams,mnr carb spks,mod hd-hd,rr v hd, pr vis por,fluor.
- **SILTSTONE** @ ~1840m: pl gry,med gry,lt med brn gry, dk gry,aren,occ-com carb spks & micmic, com sndy lams,mod hd-hd,sbblky- sbfiss.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.4 | 33 |
| RES_DEEP (ohm.m) | 27.68 | 33 |
| RES_SHALLOW (ohm.m) | 24.09 | 33 |

---

### 1860 m MD — Interval 1857.5 – 1862.5 m

**Sample Description (spreadsheet):** 20% Siltstone, 80% very fine Sandstone, 80% Siltstone. 80% very fine Sandstone. TG: 152U. 80% mod bri FLUOR, TG 152.0U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% Siltstone. 80% very fine Sandstone. TG: 152U. 80% mod bri |
| Total Gas | 152.0 U |
| mTVDss | -1192.66 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1860m: pl brn,off wh,clr,trnsl,vf, g/t aren SLTST,v wl srt,wk sil cmt,abdt 02-09-2021 pl gry brn arg mtx,occ carb spks,fri, mod hd pr vis por,fluor.
- **SANDSTONE** @ ~1860m: pl brn,off wh,clr,trnsl,vf, g/t aren SLTST i/p,v wl srt,wk sil cmt,abdt pl gry brn arg mtx,occ carb spks,fri,occ hd pr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.2 | 33 |
| RES_DEEP (ohm.m) | 28.75 | 33 |
| RES_SHALLOW (ohm.m) | 23.75 | 33 |

---

### 1865 m MD — Interval 1862.5 – 1867.5 m

**Sample Description (spreadsheet):** 20% Siltstone, 80% very fine Sandstone, 90% nan FLUOR, TG 135.0U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% nan |
| Total Gas | 135.0 U |
| mTVDss | -1192.48 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1860m: pl brn,off wh,clr,trnsl,vf, g/t aren SLTST,v wl srt,wk sil cmt,abdt 02-09-2021 pl gry brn arg mtx,occ carb spks,fri, mod hd pr vis por,fluor.
- **SANDSTONE** @ ~1860m: pl brn,off wh,clr,trnsl,vf, g/t aren SLTST i/p,v wl srt,wk sil cmt,abdt pl gry brn arg mtx,occ carb spks,fri,occ hd pr vis por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.6 | 32 |
| RES_DEEP (ohm.m) | 27.66 | 32 |
| RES_SHALLOW (ohm.m) | 21.70 | 32 |

---

### 1870 m MD — Interval 1867.5 – 1872.5 m

**Sample Description (spreadsheet):** 15% Siltstone, 85% very fine Sandstone, 90% Siltstone. 85% very fine Sandstone. TG: 212U. 90% mod bri - bri FLUOR, TG 212.0U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% Siltstone. 85% very fine Sandstone. TG: 212U. 90% mod bri - bri |
| Total Gas | 212.0 U |
| mTVDss | -1192.32 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1860m: pl brn,off wh,clr,trnsl,vf, g/t aren SLTST,v wl srt,wk sil cmt,abdt 02-09-2021 pl gry brn arg mtx,occ carb spks,fri, mod hd pr vis por,fluor.
- **SANDSTONE** @ ~1860m: pl brn,off wh,clr,trnsl,vf, g/t aren SLTST i/p,v wl srt,wk sil cmt,abdt pl gry brn arg mtx,occ carb spks,fri,occ hd pr vis por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.6 | 33 |
| RES_DEEP (ohm.m) | 27.17 | 33 |
| RES_SHALLOW (ohm.m) | 22.77 | 33 |

---

### 1875 m MD — Interval 1872.5 – 1877.5 m

**Sample Description (spreadsheet):** 10% Siltstone, 90% very fine to fine Sandstone, 100% Siltstone. 90% very fine to fine Sandstone. TG: 355U. 100% bri FLUOR, TG 355.0U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% Siltstone. 90% very fine to fine Sandstone. TG: 355U. 100% bri |
| Total Gas | 355.0 U |
| mTVDss | -1192.16 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1860m: pl brn,off wh,clr,trnsl,vf, g/t aren SLTST,v wl srt,wk sil cmt,abdt 02-09-2021 pl gry brn arg mtx,occ carb spks,fri, mod hd pr vis por,fluor.
- **SANDSTONE** @ ~1860m: pl brn,off wh,clr,trnsl,vf, g/t aren SLTST i/p,v wl srt,wk sil cmt,abdt pl gry brn arg mtx,occ carb spks,fri,occ hd pr vis por,fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.3 | 33 |
| RES_DEEP (ohm.m) | 27.77 | 33 |
| RES_SHALLOW (ohm.m) | 23.50 | 33 |

---

### 1880 m MD — Interval 1877.5 – 1882.5 m

**Sample Description (spreadsheet):** 10% Siltstone, 90% very fine to fine Sandstone, 100% Siltstone. 90% very fine to fine Sandstone. TG: 270U. 100% bri FLUOR, TG 270.0U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 100.0% Siltstone. 90% very fine to fine Sandstone. TG: 270U. 100% bri |
| Total Gas | 270.0 U |
| mTVDss | -1192.03 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1870m: pl brn,off wh,clr,trnsl,vf-f, v wl srt,sbang-sbrnd,str sil cmt,abdt pl gry brn arg mtx,occ carb spks,rr slty lams, hd-mod hd,pr vis por,fluor.
- **SILTSTONE** @ ~1870m: lt gry,lt med gry brn,aren,g/t SST i/p,com carb spks,occ micmic,mnr sndy lams,frm-hd,occ v hd,sbblky-sbfiss.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.3 | 33 |
| RES_DEEP (ohm.m) | 27.92 | 33 |
| RES_SHALLOW (ohm.m) | 22.98 | 33 |

---

### 1885 m MD — Interval 1882.5 – 1887.5 m

**Sample Description (spreadsheet):** 15% Siltstone, 85% very fine to fine Sandstone, 100% Siltstone. 85% very fine to fine Sandstone. TG: 180U. 100% bri FLUOR, TG 180.0U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 100.0% Siltstone. 85% very fine to fine Sandstone. TG: 180U. 100% bri |
| Total Gas | 180.0 U |
| mTVDss | -1191.92 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1870m: pl brn,off wh,clr,trnsl,vf-f, v wl srt,sbang-sbrnd,str sil cmt,abdt pl gry brn arg mtx,occ carb spks,rr slty lams, hd-mod hd,pr vis por,fluor.
- **SILTSTONE** @ ~1870m: lt gry,lt med gry brn,aren,g/t SST i/p,com carb spks,occ micmic,mnr sndy lams,frm-hd,occ v hd,sbblky-sbfiss.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.8 | 33 |
| RES_DEEP (ohm.m) | 28.83 | 33 |
| RES_SHALLOW (ohm.m) | 23.71 | 33 |

---

### 1890 m MD — Interval 1887.5 – 1892.5 m

**Sample Description (spreadsheet):** 20% Siltstone, 80% very fine to fine Sandstone, 100% Siltstone. 80% very fine to fine Sandstone. TG: 146U. 100% bri FLUOR, TG 146.0U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 100.0% Siltstone. 80% very fine to fine Sandstone. TG: 146U. 100% bri |
| Total Gas | 146.0 U |
| mTVDss | -1191.83 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1880m: pl brn,off wh,clr,trnsl,vf-f, v wl srt,sbang-sbrnd,str sil cmt,abdt pl gry brn arg mtx,occ carb spks,rr slty lams, hd-mod hd,occ fri,pr vis por,fluor.
- **SANDSTONE** @ ~1880m: pl brn,off wh,clr,trnsl,vf-f, v wl srt,sbang-sbrnd,str sil cmt,abdt pl gry brn arg mtx,occ carb spks,occ-com slty lams,hd-mod hd,occ fri,pr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.7 | 32 |
| RES_DEEP (ohm.m) | 29.86 | 32 |
| RES_SHALLOW (ohm.m) | 26.45 | 32 |

---

### 1895 m MD — Interval 1892.5 – 1897.5 m

**Sample Description (spreadsheet):** 10% Siltstone, 90% very fine to fine Sandstone, 100% Siltstone. 90% very fine to fine Sandstone. TG: 145U. 100% mod bri FLUOR, TG 145.0U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 100.0% Siltstone. 90% very fine to fine Sandstone. TG: 145U. 100% mod bri |
| Total Gas | 145.0 U |
| mTVDss | -1191.75 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1880m: pl brn,off wh,clr,trnsl,vf-f, v wl srt,sbang-sbrnd,str sil cmt,abdt pl gry brn arg mtx,occ carb spks,rr slty lams, hd-mod hd,occ fri,pr vis por,fluor.
- **SANDSTONE** @ ~1880m: pl brn,off wh,clr,trnsl,vf-f, v wl srt,sbang-sbrnd,str sil cmt,abdt pl gry brn arg mtx,occ carb spks,occ-com slty lams,hd-mod hd,occ fri,pr vis por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.6 | 33 |
| RES_DEEP (ohm.m) | 31.86 | 33 |
| RES_SHALLOW (ohm.m) | 29.79 | 33 |

---

### 1900 m MD — Interval 1897.5 – 1902.5 m

**Sample Description (spreadsheet):** 10% Siltstone, 90% very fine to fine Sandstone, 90% Siltstone. 90% very fine to fine Sandstone. TG: 115U. 90% mod bri FLUOR, TG 115.0U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 90.0% Siltstone. 90% very fine to fine Sandstone. TG: 115U. 90% mod bri |
| Total Gas | 115.0 U |
| mTVDss | -1191.68 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1890m: lt gry,lt med gry brn,dk gry, aren,g/t SST i/p,com carb spks,occ micmic,mnr sndy lams,frm-hd,occ v hd,sbblky-sbfiss.
- **SANDSTONE** @ ~1900m: 100 81 / 6 / 4 / 4 / 5 160 U SANDSTONE:pl brn,off wh,clr,trnsl,vf-f, FLW: 244-270 gpm str sil cmt,abdt pl gry brn arg mtx,occ carb spks,occ-com slty lams,hd-mod hd,occ fri,pr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.8 | 33 |
| RES_DEEP (ohm.m) | 31.50 | 33 |
| RES_SHALLOW (ohm.m) | 28.57 | 33 |

---

### 1905 m MD — Interval 1902.5 – 1907.5 m

**Sample Description (spreadsheet):** 15% Siltstone, 85% very fine to fine Sandstone, 100% Siltstone. 85% very fine to fine Sandstone. TG: 130U. 100% bri FLUOR, TG 130.0U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 100.0% Siltstone. 85% very fine to fine Sandstone. TG: 130U. 100% bri |
| Total Gas | 130.0 U |
| mTVDss | -1191.61 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1890m: lt gry,lt med gry brn,dk gry, aren,g/t SST i/p,com carb spks,occ micmic,mnr sndy lams,frm-hd,occ v hd,sbblky-sbfiss.
- **SANDSTONE** @ ~1900m: 100 81 / 6 / 4 / 4 / 5 160 U SANDSTONE:pl brn,off wh,clr,trnsl,vf-f, FLW: 244-270 gpm str sil cmt,abdt pl gry brn arg mtx,occ carb spks,occ-com slty lams,hd-mod hd,occ fri,pr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.7 | 33 |
| RES_DEEP (ohm.m) | 31.37 | 33 |
| RES_SHALLOW (ohm.m) | 27.68 | 33 |

---

### 1910 m MD — Interval 1907.5 – 1912.5 m

**Sample Description (spreadsheet):** 15% Siltstone, 85% very fine to fine Sandstone, 100% Siltstone. 85% very fine to fine Sandstone. TG: 94U. 100% bri FLUOR, TG 94.0U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 100.0% Siltstone. 85% very fine to fine Sandstone. TG: 94U. 100% bri |
| Total Gas | 94.0 U |
| mTVDss | -1191.54 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1900m: 100 81 / 6 / 4 / 4 / 5 160 U SANDSTONE:pl brn,off wh,clr,trnsl,vf-f, FLW: 244-270 gpm str sil cmt,abdt pl gry brn arg mtx,occ carb spks,occ-com slty lams,hd-mod hd,occ fri,pr vis por,fluor.
- **SILTSTONE** @ ~1900m: lt gry,lt brn gry,aren,g/t SST, CONTROL DRILL @ 25M/HR com carb spks,occ micmic,com sndy FROM 1900m-1945m lams,frm-mod hd,sbblky-sbfiss.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.5 | 33 |
| RES_DEEP (ohm.m) | 29.29 | 33 |
| RES_SHALLOW (ohm.m) | 25.98 | 33 |

---

### 1915 m MD — Interval 1912.5 – 1917.5 m

**Sample Description (spreadsheet):** 10% Siltstone, 90% very fine to fine Sandstone, 90% Siltstone. 90% very fine to fine Sandstone. TG: 260U. 90% bri FLUOR, TG 260.0U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 90.0% Siltstone. 90% very fine to fine Sandstone. TG: 260U. 90% bri |
| Total Gas | 260.0 U |
| mTVDss | -1191.48 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1900m: 100 81 / 6 / 4 / 4 / 5 160 U SANDSTONE:pl brn,off wh,clr,trnsl,vf-f, FLW: 244-270 gpm str sil cmt,abdt pl gry brn arg mtx,occ carb spks,occ-com slty lams,hd-mod hd,occ fri,pr vis por,fluor.
- **SILTSTONE** @ ~1900m: lt gry,lt brn gry,aren,g/t SST, CONTROL DRILL @ 25M/HR com carb spks,occ micmic,com sndy FROM 1900m-1945m lams,frm-mod hd,sbblky-sbfiss.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.9 | 33 |
| RES_DEEP (ohm.m) | 26.57 | 33 |
| RES_SHALLOW (ohm.m) | 24.90 | 33 |

---

### 1920 m MD — Interval 1917.5 – 1922.5 m

**Sample Description (spreadsheet):** 5% Siltstone, 95% very fine to fine Sandstone, 100% Siltstone. 95% very fine to fine Sandstone. TG: 195U. 100% bri FLUOR, TG 195.0U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 100.0% Siltstone. 95% very fine to fine Sandstone. TG: 195U. 100% bri |
| Total Gas | 195.0 U |
| mTVDss | -1191.42 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1910m: pl brn,off wh,clr,trnsl,vf-f, v wl srt,sbang-sbrnd,mod str sil cmt, com pl gry brn-off wh arg mtx,occ-mnr carb spks,occ slty lams,mod hd-hd,pr vis por,fluor.
- **SANDSTONE** @ ~1910m: pl brn,off wh,clr,trnsl,vf- crs,pr srt,sbang-sbrnd,mod str sil cmt, com pl gry brn-off wh arg mtx,occ-mnr carb spks,occ slty lams,com lse qtz grs, mod hd-hd,pr vis por,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.6 | 32 |
| RES_DEEP (ohm.m) | 27.16 | 32 |
| RES_SHALLOW (ohm.m) | 25.58 | 32 |

---

### 1925 m MD — Interval 1922.5 – 1927.5 m

**Sample Description (spreadsheet):** 5% Siltstone, 95% very fine to fine Sandstone, 100% Siltstone. 95% very fine to fine Sandstone. TG: 167U. 100% bri FLUOR, TG 167.0U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 100.0% Siltstone. 95% very fine to fine Sandstone. TG: 167U. 100% bri |
| Total Gas | 167.0 U |
| mTVDss | -1191.36 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1910m: pl brn,off wh,clr,trnsl,vf-f, v wl srt,sbang-sbrnd,mod str sil cmt, com pl gry brn-off wh arg mtx,occ-mnr carb spks,occ slty lams,mod hd-hd,pr vis por,fluor.
- **SANDSTONE** @ ~1910m: pl brn,off wh,clr,trnsl,vf- crs,pr srt,sbang-sbrnd,mod str sil cmt, com pl gry brn-off wh arg mtx,occ-mnr carb spks,occ slty lams,com lse qtz grs, mod hd-hd,pr vis por,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.4 | 33 |
| RES_DEEP (ohm.m) | 28.64 | 33 |
| RES_SHALLOW (ohm.m) | 26.83 | 33 |

---

### 1930 m MD — Interval 1927.5 – 1932.5 m

**Sample Description (spreadsheet):** 5% Siltstone, 95% very fine to coarse, com loose Sandstone, 100% Siltstone. 95% very fine to coarse, com loose Sandstone. TG: 192U. 100% bri FLUOR, TG 192.0U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to coarse, com loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 100.0% Siltstone. 95% very fine to coarse, com loose Sandstone. TG: 192U. 100% bri |
| Total Gas | 192.0 U |
| mTVDss | -1191.30 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1930m: pl brn,off wh,clr,trnsl,vf- crs,vf-f aggs,pr srt,sbang-sbrnd,mod str sil cmt,com pl gry brn-off wh arg mtx,occ- mnr carb spks,occ slty lams,com lse qtz grs,mod hd-hd,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~1930m: trnsl,clr,off wh,vf-crs, pred med,mod wl srt,sbang-pred sbrnd, wk-mod str sil cmt,mnr off wh arg mtx, 1950 pred disagg qtz grs,fri aggs,fr vis por, (1242) fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.9 | 33 |
| RES_DEEP (ohm.m) | 31.75 | 33 |
| RES_SHALLOW (ohm.m) | 31.28 | 33 |

---

### 1935 m MD — Interval 1932.5 – 1937.5 m

**Sample Description (spreadsheet):** 10% Siltstone, 90% very fine to coarse, com loose Sandstone, 100% Siltstone. 90% very fine to coarse, com loose Sandstone. TG: 240U. 100% bri FLUOR, TG 240.0U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to coarse, com loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 100.0% Siltstone. 90% very fine to coarse, com loose Sandstone. TG: 240U. 100% bri |
| Total Gas | 240.0 U |
| mTVDss | -1191.25 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1930m: pl brn,off wh,clr,trnsl,vf- crs,vf-f aggs,pr srt,sbang-sbrnd,mod str sil cmt,com pl gry brn-off wh arg mtx,occ- mnr carb spks,occ slty lams,com lse qtz grs,mod hd-hd,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~1930m: trnsl,clr,off wh,vf-crs, pred med,mod wl srt,sbang-pred sbrnd, wk-mod str sil cmt,mnr off wh arg mtx, 1950 pred disagg qtz grs,fri aggs,fr vis por, (1242) fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.6 | 33 |
| RES_DEEP (ohm.m) | 32.74 | 33 |
| RES_SHALLOW (ohm.m) | 33.00 | 33 |

---

### 1940 m MD — Interval 1937.5 – 1942.5 m

**Sample Description (spreadsheet):** 5% Siltstone, 95% very fine to coarse, predominantly loose Sandstone, 100% Siltstone. 95% very fine to coarse, predominantly loose Sandstone. TG: 190U. 100% bri FLUOR, TG 190.0U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to coarse, predominantly loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 100.0% Siltstone. 95% very fine to coarse, predominantly loose Sandstone. TG: 190U. 100% bri |
| Total Gas | 190.0 U |
| mTVDss | -1191.21 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1930m: pl brn,off wh,clr,trnsl,vf- crs,vf-f aggs,pr srt,sbang-sbrnd,mod str sil cmt,com pl gry brn-off wh arg mtx,occ- mnr carb spks,occ slty lams,com lse qtz grs,mod hd-hd,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~1930m: trnsl,clr,off wh,vf-crs, pred med,mod wl srt,sbang-pred sbrnd, wk-mod str sil cmt,mnr off wh arg mtx, 1950 pred disagg qtz grs,fri aggs,fr vis por, (1242) fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.8 | 33 |
| RES_DEEP (ohm.m) | 36.77 | 33 |
| RES_SHALLOW (ohm.m) | 36.22 | 33 |

---

### 1945 m MD — Interval 1942.5 – 1947.5 m

**Sample Description (spreadsheet):** 5% Siltstone, 95% very fine to coarse, predominantly loose Sandstone, 100% Siltstone. 95% very fine to coarse, predominantly loose Sandstone. TG: 234U. 100% bri FLUOR, TG 234.0U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to coarse, predominantly loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.80) |
| Fluorescence | 100.0% Siltstone. 95% very fine to coarse, predominantly loose Sandstone. TG: 234U. 100% bri |
| Total Gas | 234.0 U |
| mTVDss | -1191.18 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1930m: pl brn,off wh,clr,trnsl,vf- crs,vf-f aggs,pr srt,sbang-sbrnd,mod str sil cmt,com pl gry brn-off wh arg mtx,occ- mnr carb spks,occ slty lams,com lse qtz grs,mod hd-hd,pr vis por,gd inf por,fluor.
- **SANDSTONE** @ ~1930m: trnsl,clr,off wh,vf-crs, pred med,mod wl srt,sbang-pred sbrnd, wk-mod str sil cmt,mnr off wh arg mtx, 1950 pred disagg qtz grs,fri aggs,fr vis por, (1242) fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.3 | 32 |
| RES_DEEP (ohm.m) | 33.91 | 32 |
| RES_SHALLOW (ohm.m) | 31.15 | 32 |

---

### 1950 m MD — Interval 1947.5 – 1952.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% very fine to coarse, predominantly loose Sandstone, 100% very fine to coarse, predominantly loose Sandstone. TG: 288U. 100% bri FLUOR, TG 288.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse, predominantly loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.80) |
| Fluorescence | 100.0% very fine to coarse, predominantly loose Sandstone. TG: 288U. 100% bri |
| Total Gas | 288.0 U |
| mTVDss | -1191.15 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1960m: trnsl,clr,off wh,vf-crs, 75 / 7 / 5 / 6 / 7 325 U pred med,mod wl srt,sbang-pred sbrnd, wk-mod str sil cmt,mnr off wh arg mtx, pred disagg qtz grs,fri aggs,fr vis por,
- **SANDSTONE** @ ~1960m: trnsl,clr,off wh,vf-crs, pred med,mod wl srt,sbang-pred sbrnd, 80 / 6 / 4 / 4 / 6 231 U wk-mod str sil cmt,mnr off wh arg mtx, pred disagg qtz grs,fri aggs,fr vis por, fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.8 | 33 |
| RES_DEEP (ohm.m) | 32.57 | 33 |
| RES_SHALLOW (ohm.m) | 28.20 | 33 |

---

### 1955 m MD — Interval 1952.5 – 1957.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% very fine to coarse, predominantly loose Sandstone, 100% very fine to coarse, predominantly loose Sandstone. TG: 300U. 100% bri FLUOR, TG 300.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse, predominantly loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.80) |
| Fluorescence | 100.0% very fine to coarse, predominantly loose Sandstone. TG: 300U. 100% bri |
| Total Gas | 300.0 U |
| mTVDss | -1191.15 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1960m: trnsl,clr,off wh,vf-crs, 75 / 7 / 5 / 6 / 7 325 U pred med,mod wl srt,sbang-pred sbrnd, wk-mod str sil cmt,mnr off wh arg mtx, pred disagg qtz grs,fri aggs,fr vis por,
- **SANDSTONE** @ ~1960m: trnsl,clr,off wh,vf-crs, pred med,mod wl srt,sbang-pred sbrnd, 80 / 6 / 4 / 4 / 6 231 U wk-mod str sil cmt,mnr off wh arg mtx, pred disagg qtz grs,fri aggs,fr vis por, fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.1 | 33 |
| RES_DEEP (ohm.m) | 30.09 | 33 |
| RES_SHALLOW (ohm.m) | 26.92 | 33 |

---

### 1960 m MD — Interval 1957.5 – 1962.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% very fine to coarse, predominantly loose Sandstone, 100% very fine to coarse, predominantly loose Sandstone. TG: 320U. 100% bri FLUOR, TG 320.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to coarse, predominantly loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.80) |
| Fluorescence | 100.0% very fine to coarse, predominantly loose Sandstone. TG: 320U. 100% bri |
| Total Gas | 320.0 U |
| mTVDss | -1191.15 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1960m: trnsl,clr,off wh,vf-crs, 75 / 7 / 5 / 6 / 7 325 U pred med,mod wl srt,sbang-pred sbrnd, wk-mod str sil cmt,mnr off wh arg mtx, pred disagg qtz grs,fri aggs,fr vis por,
- **SANDSTONE** @ ~1960m: trnsl,clr,off wh,vf-crs, pred med,mod wl srt,sbang-pred sbrnd, 80 / 6 / 4 / 4 / 6 231 U wk-mod str sil cmt,mnr off wh arg mtx, pred disagg qtz grs,fri aggs,fr vis por, fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.3 | 33 |
| RES_DEEP (ohm.m) | 31.99 | 33 |
| RES_SHALLOW (ohm.m) | 26.75 | 33 |

---

### 1965 m MD — Interval 1962.5 – 1967.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% fine to coarse, predominantly medium grained Sandstone, 100% fine to coarse, predominantly medium grained Sandstone. BG;280U 100% bright yellow green FLUOR, TG 280.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | fine to coarse, predominantly medium grained (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.80) |
| Fluorescence | 100.0% fine to coarse, predominantly medium grained Sandstone. BG;280U 100% bright yellow green |
| Total Gas | 280.0 U |
| mTVDss | -1191.20 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1960m: trnsl,clr,off wh,vf-crs, 75 / 7 / 5 / 6 / 7 325 U pred med,mod wl srt,sbang-pred sbrnd, wk-mod str sil cmt,mnr off wh arg mtx, pred disagg qtz grs,fri aggs,fr vis por,
- **SANDSTONE** @ ~1960m: trnsl,clr,off wh,vf-crs, pred med,mod wl srt,sbang-pred sbrnd, 80 / 6 / 4 / 4 / 6 231 U wk-mod str sil cmt,mnr off wh arg mtx, pred disagg qtz grs,fri aggs,fr vis por, fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.9 | 33 |
| RES_DEEP (ohm.m) | 32.00 | 33 |
| RES_SHALLOW (ohm.m) | 26.29 | 33 |

---

### 1970 m MD — Interval 1967.5 – 1972.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% predominantly medium grained Sandstone, 100% predominantly medium grained Sandstone. FLUOR, TG 190.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | predominantly medium grained (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.80) |
| Fluorescence | 100.0% predominantly medium grained Sandstone. |
| Total Gas | 190.0 U |
| mTVDss | -1191.25 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1960m: trnsl,clr,off wh,vf-crs, 75 / 7 / 5 / 6 / 7 325 U pred med,mod wl srt,sbang-pred sbrnd, wk-mod str sil cmt,mnr off wh arg mtx, pred disagg qtz grs,fri aggs,fr vis por,
- **SANDSTONE** @ ~1960m: trnsl,clr,off wh,vf-crs, pred med,mod wl srt,sbang-pred sbrnd, 80 / 6 / 4 / 4 / 6 231 U wk-mod str sil cmt,mnr off wh arg mtx, pred disagg qtz grs,fri aggs,fr vis por, fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.1 | 32 |
| RES_DEEP (ohm.m) | 32.22 | 32 |
| RES_SHALLOW (ohm.m) | 27.98 | 32 |

---

### 1975 m MD — Interval 1972.5 – 1977.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% predominantly medium grained Sandstone, 100% predominantly medium grained Sandstone. BG 220U FLUOR, TG 220.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | predominantly medium grained (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.80) |
| Fluorescence | 100.0% predominantly medium grained Sandstone. BG 220U |
| Total Gas | 220.0 U |
| mTVDss | -1191.33 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1960m: trnsl,clr,off wh,vf-crs, 75 / 7 / 5 / 6 / 7 325 U pred med,mod wl srt,sbang-pred sbrnd, wk-mod str sil cmt,mnr off wh arg mtx, pred disagg qtz grs,fri aggs,fr vis por,
- **SANDSTONE** @ ~1960m: trnsl,clr,off wh,vf-crs, pred med,mod wl srt,sbang-pred sbrnd, 80 / 6 / 4 / 4 / 6 231 U wk-mod str sil cmt,mnr off wh arg mtx, pred disagg qtz grs,fri aggs,fr vis por, fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.7 | 33 |
| RES_DEEP (ohm.m) | 32.13 | 33 |
| RES_SHALLOW (ohm.m) | 30.07 | 33 |

---

### 1980 m MD — Interval 1977.5 – 1982.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% predominantly medium grained Sandstone, 100% predominantly medium grained Sandstone. BG; 180 U, FLUOR, TG 180.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | predominantly medium grained (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | — |
| Fluorescence | 100.0% predominantly medium grained Sandstone. BG; 180 U, |
| Total Gas | 180.0 U |
| mTVDss | -1191.43 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.2 | 33 |
| RES_DEEP (ohm.m) | 29.85 | 33 |
| RES_SHALLOW (ohm.m) | 27.28 | 33 |

---

### 1985 m MD — Interval 1982.5 – 1987.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% fine to medium grained Sandstone, 100% fine to medium grained Sandstone, BG: 180U. FLUOR, TG 180.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | fine to medium grained (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | — |
| Fluorescence | 100.0% fine to medium grained Sandstone, BG: 180U. |
| Total Gas | 180.0 U |
| mTVDss | -1191.55 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.0 | 33 |
| RES_DEEP (ohm.m) | 26.93 | 33 |
| RES_SHALLOW (ohm.m) | 23.95 | 33 |

---

### 1990 m MD — Interval 1987.5 – 1992.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% fine to medium grained Sandstone, 100% fine to medium grained Sandstone. BG 190U. FLUOR, TG 190.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | fine to medium grained (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | — |
| Fluorescence | 100.0% fine to medium grained Sandstone. BG 190U. |
| Total Gas | 190.0 U |
| mTVDss | -1191.68 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.7 | 33 |
| RES_DEEP (ohm.m) | 27.12 | 33 |
| RES_SHALLOW (ohm.m) | 27.20 | 33 |

---

### 1995 m MD — Interval 1992.5 – 1997.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% fine to med grained Sandstone, 100% fine to med grained Sandstone. BG: 190U. FLUOR, TG 190.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | fine to med grained (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | — |
| Fluorescence | 100.0% fine to med grained Sandstone. BG: 190U. |
| Total Gas | 190.0 U |
| mTVDss | -1191.83 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.2 | 32 |
| RES_DEEP (ohm.m) | 27.14 | 32 |
| RES_SHALLOW (ohm.m) | 26.42 | 32 |

---

### 2000 m MD — Interval 1997.5 – 2002.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% fine to coarse predominantly medium grain Sandstone, 100% nan FLUOR, TG 180.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | fine to coarse predominantly medium grain (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | — |
| Fluorescence | 100.0% nan |
| Total Gas | 180.0 U |
| mTVDss | -1191.99 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.8 | 33 |
| RES_DEEP (ohm.m) | 24.73 | 33 |
| RES_SHALLOW (ohm.m) | 22.48 | 33 |

---

### 2005 m MD — Interval 2002.5 – 2007.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% fine to coarse, predominantly medium grained Sandstone, 100% fine to coarse, predominantly medium grained Sandstone. BG: 160U. FLUOR, TG 160.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | fine to coarse, predominantly medium grained (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | — |
| Fluorescence | 100.0% fine to coarse, predominantly medium grained Sandstone. BG: 160U. |
| Total Gas | 160.0 U |
| mTVDss | -1192.15 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.6 | 33 |
| RES_DEEP (ohm.m) | 23.41 | 33 |
| RES_SHALLOW (ohm.m) | 19.27 | 33 |

---

### 2010 m MD — Interval 2007.5 – 2012.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% fine to coarse predominantly medium grey, minor silty matrix Sandstone, 80% medium grey Siltstone, 100% fine to coarse predominantly medium grey, minor silty matrix, Sandstone. BG: 200U FLUOR, TG 200.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | fine to coarse predominantly medium grey, minor silty matrix (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | — |
| Fluorescence | 80.0% medium grey Siltstone, 100% fine to coarse predominantly medium grey, minor silty matrix, Sandstone. BG: 200U |
| Total Gas | 200.0 U |
| mTVDss | -1192.30 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.7 | 33 |
| RES_DEEP (ohm.m) | 26.92 | 33 |
| RES_SHALLOW (ohm.m) | 21.63 | 33 |

---

### 2015 m MD — Interval 2012.5 – 2017.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% fine to coarse grained, predominantly dis-aggregated Sandstone, 90% fine to coarse grained, predominantly dis-aggregated Sandstone. BG: 196U. FLUOR, TG 196.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | fine to coarse grained, predominantly dis-aggregated (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% fine to coarse grained, predominantly dis-aggregated Sandstone. BG: 196U. |
| Total Gas | 196.0 U |
| mTVDss | -1192.45 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2030m: off wh trnsl, clr,f-med, mod srt,sbang-pred sbrnd,wh sil cmt, com off wh arg mtx,tr carb incls,fri,fr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.6 | 33 |
| RES_DEEP (ohm.m) | 27.99 | 33 |
| RES_SHALLOW (ohm.m) | 22.89 | 33 |

---

### 2020 m MD — Interval 2017.5 – 2022.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% off white, fine grained, weak siliceous cement, common off white argillaceous matrix Sandstone, 85% off white, fine grained, weak siliceous cement, common off white argillaceous matrix Sandstone. BG: 200U. FLUOR, TG 200.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | off white, fine grained, weak siliceous cement, common off white argillaceous matrix (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 85.0% off white, fine grained, weak siliceous cement, common off white argillaceous matrix Sandstone. BG: 200U. |
| Total Gas | 200.0 U |
| mTVDss | -1192.56 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2030m: off wh trnsl, clr,f-med, mod srt,sbang-pred sbrnd,wh sil cmt, com off wh arg mtx,tr carb incls,fri,fr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.5 | 32 |
| RES_DEEP (ohm.m) | 32.43 | 32 |
| RES_SHALLOW (ohm.m) | 26.42 | 32 |

---

### 2025 m MD — Interval 2022.5 – 2027.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% fine grained Sandstone, 90% fine grained Sandstone. BG 200U. FLUOR, TG 200.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | fine grained (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% fine grained Sandstone. BG 200U. |
| Total Gas | 200.0 U |
| mTVDss | -1192.64 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2030m: off wh trnsl, clr,f-med, mod srt,sbang-pred sbrnd,wh sil cmt, com off wh arg mtx,tr carb incls,fri,fr vis por,fluor.
- **SANDSTONE** @ ~2040m: trnsl,clr,off wh,f-med,mod FLW: 245-270 gpm
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.2 | 33 |
| RES_DEEP (ohm.m) | 35.62 | 33 |
| RES_SHALLOW (ohm.m) | 28.68 | 33 |

---

### 2030 m MD — Interval 2027.5 – 2032.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% fine grained Sandstone, 80% fine grained Sandstone, BG: 195U. FLUOR, TG 195.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | fine grained (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% fine grained Sandstone, BG: 195U. |
| Total Gas | 195.0 U |
| mTVDss | -1192.70 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2030m: off wh trnsl, clr,f-med, mod srt,sbang-pred sbrnd,wh sil cmt, com off wh arg mtx,tr carb incls,fri,fr vis por,fluor.
- **SANDSTONE** @ ~2040m: trnsl,clr,off wh,f-med,mod FLW: 245-270 gpm
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.3 | 33 |
| RES_DEEP (ohm.m) | 37.72 | 33 |
| RES_SHALLOW (ohm.m) | 31.84 | 33 |

---

### 2035 m MD — Interval 2032.5 – 2037.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% fine grained, common off white argillaceous matrix, friable Sandstone, 80% fine grained, common off white argillaceous matrix, friable, Sandstone. BG 185U. FLUOR, TG 185.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | fine grained, common off white argillaceous matrix, friable (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% fine grained, common off white argillaceous matrix, friable, Sandstone. BG 185U. |
| Total Gas | 185.0 U |
| mTVDss | -1192.73 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2030m: off wh trnsl, clr,f-med, mod srt,sbang-pred sbrnd,wh sil cmt, com off wh arg mtx,tr carb incls,fri,fr vis por,fluor.
- **SANDSTONE** @ ~2040m: trnsl,clr,off wh,f-med,mod FLW: 245-270 gpm
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.6 | 33 |
| RES_DEEP (ohm.m) | 37.13 | 33 |
| RES_SHALLOW (ohm.m) | 31.89 | 33 |

---

### 2040 m MD — Interval 2037.5 – 2042.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% off white, fine to medium, weak siliceous cement, common off white argillaceous matrix, friable Sandstone, 90% off white, fine to medium, weak siliceous cement, common off white argillaceous matrix, friable Sandstone. BG 180U FLUOR, TG 180.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | off white, fine to medium, weak siliceous cement, common off white argillaceous matrix, friable (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% off white, fine to medium, weak siliceous cement, common off white argillaceous matrix, friable Sandstone. BG 180U |
| Total Gas | 180.0 U |
| mTVDss | -1192.75 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2030m: off wh trnsl, clr,f-med, mod srt,sbang-pred sbrnd,wh sil cmt, com off wh arg mtx,tr carb incls,fri,fr vis por,fluor.
- **SANDSTONE** @ ~2040m: trnsl,clr,off wh,f-med,mod FLW: 245-270 gpm
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.7 | 33 |
| RES_DEEP (ohm.m) | 37.11 | 33 |
| RES_SHALLOW (ohm.m) | 31.49 | 33 |

---

### 2045 m MD — Interval 2042.5 – 2047.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% fine to medium grained Sandstone, 80% fine to medium grained Sandstone, BG 205U FLUOR, TG 250.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | fine to medium grained (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 80.0% fine to medium grained Sandstone, BG 205U |
| Total Gas | 250.0 U |
| mTVDss | -1192.73 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2030m: off wh trnsl, clr,f-med, mod srt,sbang-pred sbrnd,wh sil cmt, com off wh arg mtx,tr carb incls,fri,fr vis por,fluor.
- **SANDSTONE** @ ~2040m: trnsl,clr,off wh,f-med,mod FLW: 245-270 gpm
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.1 | 33 |
| RES_DEEP (ohm.m) | 34.06 | 33 |
| RES_SHALLOW (ohm.m) | 28.05 | 33 |

---

### 2050 m MD — Interval 2047.5 – 2052.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% fine to medium grained Sandstone, 95% fine to medium grained Sandstone. BG 242U FLUOR, TG 242.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | fine to medium grained (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 95.0% fine to medium grained Sandstone. BG 242U |
| Total Gas | 242.0 U |
| mTVDss | -1192.71 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2040m: trnsl,clr,off wh,f-med,mod FLW: 245-270 gpm
- **SANDSTONE** @ ~2040m: v lt brn,gry,brn,off wh, 78 / 6 / 4 / 5 / 7 215 U trnsl i/p,vf-f,wl srt,sbang-sbrnd, wk-mod sil cmt,com v lt brn arg mtx, tr carb spks,fri-mod hd ,por vis por,
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.2 | 32 |
| RES_DEEP (ohm.m) | 32.18 | 32 |
| RES_SHALLOW (ohm.m) | 26.71 | 32 |

---

### 2055 m MD — Interval 2052.5 – 2057.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% fine grained Sandstone, 95% fine grained Sandstone, BG 180U, FLUOR, TG 180.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | fine grained (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 95.0% fine grained Sandstone, BG 180U, |
| Total Gas | 180.0 U |
| mTVDss | -1192.68 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2040m: trnsl,clr,off wh,f-med,mod FLW: 245-270 gpm
- **SANDSTONE** @ ~2040m: v lt brn,gry,brn,off wh, 78 / 6 / 4 / 5 / 7 215 U trnsl i/p,vf-f,wl srt,sbang-sbrnd, wk-mod sil cmt,com v lt brn arg mtx, tr carb spks,fri-mod hd ,por vis por,
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.4 | 33 |
| RES_DEEP (ohm.m) | 32.64 | 33 |
| RES_SHALLOW (ohm.m) | 26.88 | 33 |

---

### 2060 m MD — Interval 2057.5 – 2062.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% fine grained Sandstone, 90% fine grained Sandstone, BG 186U FLUOR, TG 186.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | fine grained (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | — |
| Fluorescence | 90.0% fine grained Sandstone, BG 186U |
| Total Gas | 186.0 U |
| mTVDss | -1192.66 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.7 | 33 |
| RES_DEEP (ohm.m) | 30.85 | 33 |
| RES_SHALLOW (ohm.m) | 23.71 | 33 |

---

### 2065 m MD — Interval 2062.5 – 2067.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% very light brown/off white, very fine to fine Sandstone, 90% very light brown/off white, very fine to fine Sandstone. BG: 150U FLUOR, TG 150.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very light brown/off white, very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | — |
| Fluorescence | 90.0% very light brown/off white, very fine to fine Sandstone. BG: 150U |
| Total Gas | 150.0 U |
| mTVDss | -1192.64 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.5 | 33 |
| RES_DEEP (ohm.m) | 28.56 | 33 |
| RES_SHALLOW (ohm.m) | 22.59 | 33 |

---

### 2070 m MD — Interval 2067.5 – 2072.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% fine grained Sandstone, 90% fine grained Sandstone. BG: 156U FLUOR, TG 156.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | fine grained (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | — |
| Fluorescence | 90.0% fine grained Sandstone. BG: 156U |
| Total Gas | 156.0 U |
| mTVDss | -1192.61 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.9 | 33 |
| RES_DEEP (ohm.m) | 29.06 | 33 |
| RES_SHALLOW (ohm.m) | 23.91 | 33 |

---

### 2075 m MD — Interval 2072.5 – 2077.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% very fine to fine grained Sandstone, 90% very fine to fine grained Sandstone, BG 162U, FLUOR, TG 162.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine grained (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | — |
| Fluorescence | 90.0% very fine to fine grained Sandstone, BG 162U, |
| Total Gas | 162.0 U |
| mTVDss | -1192.58 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.1 | 32 |
| RES_DEEP (ohm.m) | 29.00 | 32 |
| RES_SHALLOW (ohm.m) | 24.36 | 32 |

---

### 2080 m MD — Interval 2077.5 – 2082.5 m

**Sample Description (spreadsheet):** 10% Siltstone, 90% very fine to fine grained arg/silty Sandstone, 70% medium grey Siltstone, 90% very fine to fine grained arg/silty Sandstone, BG: 164U FLUOR, TG 164.0U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine grained arg/silty (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | — |
| Fluorescence | 70.0% medium grey Siltstone, 90% very fine to fine grained arg/silty Sandstone, BG: 164U |
| Total Gas | 164.0 U |
| mTVDss | -1192.52 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.0 | 33 |
| RES_DEEP (ohm.m) | 30.93 | 33 |
| RES_SHALLOW (ohm.m) | 25.95 | 33 |

---

### 2085 m MD — Interval 2082.5 – 2087.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% very fine grained , argillaceous/silty matrix Sandstone, 70% very fine grained , argillaceous/silty matrix Sandstone. BG: 168U FLUOR, TG 168.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine grained , argillaceous/silty matrix (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | — |
| Fluorescence | 70.0% very fine grained , argillaceous/silty matrix Sandstone. BG: 168U |
| Total Gas | 168.0 U |
| mTVDss | -1192.45 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.2 | 33 |
| RES_DEEP (ohm.m) | 29.87 | 33 |
| RES_SHALLOW (ohm.m) | 25.40 | 33 |

---

### 2090 m MD — Interval 2087.5 – 2092.5 m

**Sample Description (spreadsheet):** 20% Siltstone, 80% very fine to fine, argillacous/silty matrix Sandstone, 60% med gry, brownish grey Siltstone. 80% very fine to fine, argillacous/silty matrix Sandstone. BG: 158U FLUOR, TG 158.0U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine, argillacous/silty matrix (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | — |
| Fluorescence | 60.0% med gry, brownish grey Siltstone. 80% very fine to fine, argillacous/silty matrix Sandstone. BG: 158U |
| Total Gas | 158.0 U |
| mTVDss | -1192.37 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.3 | 33 |
| RES_DEEP (ohm.m) | 28.08 | 33 |
| RES_SHALLOW (ohm.m) | 22.77 | 33 |

---

### 2095 m MD — Interval 2092.5 – 2097.5 m

**Sample Description (spreadsheet):** 5% Siltstone, 95% very fine to fine grained silty Sandstone, 60% Siltstone, 95% very fine to fine grained silty Sandstone. BG 160U FLUOR, TG 160.0U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine grained silty (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | — |
| Fluorescence | 60.0% Siltstone, 95% very fine to fine grained silty Sandstone. BG 160U |
| Total Gas | 160.0 U |
| mTVDss | -1192.28 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.7 | 33 |
| RES_DEEP (ohm.m) | 26.82 | 33 |
| RES_SHALLOW (ohm.m) | 22.38 | 33 |

---

### 2100 m MD — Interval 2097.5 – 2102.5 m

**Sample Description (spreadsheet):** 5% Siltstone, 95% very fine to fine grained silty Sandstone, 60% Siltstone, 95% very fine to fine grained silty Sandstone, BG 160U. FLUOR, TG 160.0U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine grained silty (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | — |
| Fluorescence | 60.0% Siltstone, 95% very fine to fine grained silty Sandstone, BG 160U. |
| Total Gas | 160.0 U |
| mTVDss | -1192.20 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.1 | 32 |
| RES_DEEP (ohm.m) | 26.18 | 32 |
| RES_SHALLOW (ohm.m) | 21.67 | 32 |

---

### 2105 m MD — Interval 2102.5 – 2107.5 m

**Sample Description (spreadsheet):** 5% Siltstone, 95% Siltstone, 95% verfy fine grained Sandstone, 60% nan FLUOR, TG 150.0U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | Siltstone, 95% verfy fine grained (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | — |
| Fluorescence | 60.0% nan |
| Total Gas | 150.0 U |
| mTVDss | -1192.13 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.9 | 33 |
| RES_DEEP (ohm.m) | 25.95 | 33 |
| RES_SHALLOW (ohm.m) | 21.75 | 33 |

---

### 2110 m MD — Interval 2107.5 – 2112.5 m

**Sample Description (spreadsheet):** 5% Siltstone, 95% Siltstone. 95% veryf fine to fine grained Sandstone, 60% Siltstone. 95% veryf fine to fine grained Sandstone. BG: 170U FLUOR, TG 170.0U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | Siltstone. 95% veryf fine to fine grained (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | — |
| Fluorescence | 60.0% Siltstone. 95% veryf fine to fine grained Sandstone. BG: 170U |
| Total Gas | 170.0 U |
| mTVDss | -1192.06 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.4 | 33 |
| RES_DEEP (ohm.m) | 27.70 | 33 |
| RES_SHALLOW (ohm.m) | 22.27 | 33 |

---

### 2115 m MD — Interval 2112.5 – 2117.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% very fine to fine grained Sandstone, 75% very fine to fine grained Sandstone. BG: 186U FLUOR, TG 186.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine grained (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 75.0% very fine to fine grained Sandstone. BG: 186U |
| Total Gas | 186.0 U |
| mTVDss | -1192.01 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2130m: trnsl,clr,off wh,f-med, sbang-pred sbrnd,mod srt,wk sil cmt, mnr v lt brn arg/slty mtx,tr carb spks, fri-disagg,fr-gd vis por,fluor.
- **SANDSTONE** @ ~2130m: clr,trnsl,off wh,vf-f, rr med-crs,mod wl srt,sbang-sbrnd, mod str sil cmt,com pl brn arg/slty mtx,tr carb spks,rr qtz o/grths,mnr slty lams,mod hd-fri,pr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.5 | 33 |
| RES_DEEP (ohm.m) | 26.12 | 33 |
| RES_SHALLOW (ohm.m) | 21.28 | 33 |

---

### 2120 m MD — Interval 2117.5 – 2122.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% very fine to medium, predominantly fine grained Sandstone, 85% very fine to medium, predominantly fine grained Sandstone. BG 179U FLUOR, TG 179.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, predominantly fine grained (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 85.0% very fine to medium, predominantly fine grained Sandstone. BG 179U |
| Total Gas | 179.0 U |
| mTVDss | -1191.98 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2130m: trnsl,clr,off wh,f-med, sbang-pred sbrnd,mod srt,wk sil cmt, mnr v lt brn arg/slty mtx,tr carb spks, fri-disagg,fr-gd vis por,fluor.
- **SANDSTONE** @ ~2130m: clr,trnsl,off wh,vf-f, rr med-crs,mod wl srt,sbang-sbrnd, mod str sil cmt,com pl brn arg/slty mtx,tr carb spks,rr qtz o/grths,mnr slty lams,mod hd-fri,pr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.9 | 33 |
| RES_DEEP (ohm.m) | 25.10 | 33 |
| RES_SHALLOW (ohm.m) | 20.06 | 33 |

---

### 2125 m MD — Interval 2122.5 – 2127.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% very fine to medium, pred fine grained Sandstone, 85% very fine to medium, pred fine grained Sandstone. BG 188U FLUOR, TG 188.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, pred fine grained (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 85.0% very fine to medium, pred fine grained Sandstone. BG 188U |
| Total Gas | 188.0 U |
| mTVDss | -1191.95 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2130m: trnsl,clr,off wh,f-med, sbang-pred sbrnd,mod srt,wk sil cmt, mnr v lt brn arg/slty mtx,tr carb spks, fri-disagg,fr-gd vis por,fluor.
- **SANDSTONE** @ ~2130m: clr,trnsl,off wh,vf-f, rr med-crs,mod wl srt,sbang-sbrnd, mod str sil cmt,com pl brn arg/slty mtx,tr carb spks,rr qtz o/grths,mnr slty lams,mod hd-fri,pr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.2 | 32 |
| RES_DEEP (ohm.m) | 27.64 | 32 |
| RES_SHALLOW (ohm.m) | 24.08 | 32 |

---

### 2130 m MD — Interval 2127.5 – 2132.5 m

**Sample Description (spreadsheet):** 5% Siltstone, 95% fine grained Sandstone, 80% Siltstone, 95% fine grained Sandstone. BG: 145U FLUOR, TG 145.0U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | fine grained (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% Siltstone, 95% fine grained Sandstone. BG: 145U |
| Total Gas | 145.0 U |
| mTVDss | -1191.92 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2130m: trnsl,clr,off wh,f-med, sbang-pred sbrnd,mod srt,wk sil cmt, mnr v lt brn arg/slty mtx,tr carb spks, fri-disagg,fr-gd vis por,fluor.
- **SANDSTONE** @ ~2130m: clr,trnsl,off wh,vf-f, rr med-crs,mod wl srt,sbang-sbrnd, mod str sil cmt,com pl brn arg/slty mtx,tr carb spks,rr qtz o/grths,mnr slty lams,mod hd-fri,pr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.0 | 33 |
| RES_DEEP (ohm.m) | 26.80 | 33 |
| RES_SHALLOW (ohm.m) | 23.04 | 33 |

---

### 2135 m MD — Interval 2132.5 – 2137.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% very fine to medium predominantly fine grained Sandstone, 80% very fine to medium predominantly fine grained Sandstone: BG 145U FLUOR, TG 145.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium predominantly fine grained (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% very fine to medium predominantly fine grained Sandstone: BG 145U |
| Total Gas | 145.0 U |
| mTVDss | -1191.87 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2130m: trnsl,clr,off wh,f-med, sbang-pred sbrnd,mod srt,wk sil cmt, mnr v lt brn arg/slty mtx,tr carb spks, fri-disagg,fr-gd vis por,fluor.
- **SANDSTONE** @ ~2130m: clr,trnsl,off wh,vf-f, rr med-crs,mod wl srt,sbang-sbrnd, mod str sil cmt,com pl brn arg/slty mtx,tr carb spks,rr qtz o/grths,mnr slty lams,mod hd-fri,pr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.8 | 33 |
| RES_DEEP (ohm.m) | 26.74 | 33 |
| RES_SHALLOW (ohm.m) | 21.92 | 33 |

---

### 2140 m MD — Interval 2137.5 – 2142.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% very fine to medium, pred fine grained Sandstone, 95% Siltstone, 100% very fine to medium, pred fine grained sandstone. BG 205U FLUOR, TG 205.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to medium, pred fine grained (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 95.0% Siltstone, 100% very fine to medium, pred fine grained sandstone. BG 205U |
| Total Gas | 205.0 U |
| mTVDss | -1191.81 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2130m: trnsl,clr,off wh,f-med, sbang-pred sbrnd,mod srt,wk sil cmt, mnr v lt brn arg/slty mtx,tr carb spks, fri-disagg,fr-gd vis por,fluor.
- **SANDSTONE** @ ~2130m: clr,trnsl,off wh,vf-f, rr med-crs,mod wl srt,sbang-sbrnd, mod str sil cmt,com pl brn arg/slty mtx,tr carb spks,rr qtz o/grths,mnr slty lams,mod hd-fri,pr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.0 | 33 |
| RES_DEEP (ohm.m) | 26.91 | 33 |
| RES_SHALLOW (ohm.m) | 22.32 | 33 |

---

### 2145 m MD — Interval 2142.5 – 2147.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% fine to medium grained Sandstone, 100% fine to medium grained Sandstone. BG 186U FLUOR, TG 186.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | fine to medium grained (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% fine to medium grained Sandstone. BG 186U |
| Total Gas | 186.0 U |
| mTVDss | -1191.74 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2130m: trnsl,clr,off wh,f-med, sbang-pred sbrnd,mod srt,wk sil cmt, mnr v lt brn arg/slty mtx,tr carb spks, fri-disagg,fr-gd vis por,fluor.
- **SANDSTONE** @ ~2130m: clr,trnsl,off wh,vf-f, rr med-crs,mod wl srt,sbang-sbrnd, mod str sil cmt,com pl brn arg/slty mtx,tr carb spks,rr qtz o/grths,mnr slty lams,mod hd-fri,pr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.4 | 33 |
| RES_DEEP (ohm.m) | 25.18 | 33 |
| RES_SHALLOW (ohm.m) | 22.80 | 33 |

---

### 2150 m MD — Interval 2147.5 – 2152.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% fine to medium grained Sandstone, 100% fine to medium grained Sandstone. BG 186U FLUOR, TG 186.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | fine to medium grained (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | — |
| Fluorescence | 100.0% fine to medium grained Sandstone. BG 186U |
| Total Gas | 186.0 U |
| mTVDss | -1191.65 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.8 | 33 |
| RES_DEEP (ohm.m) | 25.70 | 33 |
| RES_SHALLOW (ohm.m) | 24.61 | 33 |

---

### 2155 m MD — Interval 2152.5 – 2157.5 m

**Sample Description (spreadsheet):** Sample 2155m: 5% Siltstone. 95% fine to medium, common loose Sandstone. TG: 182U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | fine to medium, common loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 100.0% Siltstone. 95% fine to medium, common loose Sandstone. TG: 182U. 100% bri |
| Total Gas | 182.0 U |
| mTVDss | -1191.57 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2170m: clr,trnsl,off wh,vf-f, FROM 2182-2192m rr med-crs,mod wl srt,sbang-sbrnd, mod str sil cmt,com pl brn arg/slty mtx,tr carb spks,occ-com med-crs disagg qtz grs,mnr slty lams,mod hd-
- **SANDSTONE** @ ~2170m: clr-trnsl,off wh,vf-crs, pr srt,sbang-sbrnd,str sil cmt,occ- com pl brn-off wh arg/slty mtx,tr carb spks,tr slty lams,abdt med-crs disagg qtz grs,rr qtz o/grths,fri-mod
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.1 | 32 |
| RES_DEEP (ohm.m) | 26.37 | 32 |
| RES_SHALLOW (ohm.m) | 24.37 | 32 |

---

### 2160 m MD — Interval 2157.5 – 2162.5 m

**Sample Description (spreadsheet):** Sample 2160m: 10% Siltstone. 90% very fine to fine, rare medium to coarse Sandstone. TG: 185U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, rare medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 100.0% Siltstone. 90% very fine to fine, rare medium to coarse Sandstone. TG: 185U. 100% bri |
| Total Gas | 185.0 U |
| mTVDss | -1191.48 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2170m: clr,trnsl,off wh,vf-f, FROM 2182-2192m rr med-crs,mod wl srt,sbang-sbrnd, mod str sil cmt,com pl brn arg/slty mtx,tr carb spks,occ-com med-crs disagg qtz grs,mnr slty lams,mod hd-
- **SANDSTONE** @ ~2170m: clr-trnsl,off wh,vf-crs, pr srt,sbang-sbrnd,str sil cmt,occ- com pl brn-off wh arg/slty mtx,tr carb spks,tr slty lams,abdt med-crs disagg qtz grs,rr qtz o/grths,fri-mod
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.4 | 33 |
| RES_DEEP (ohm.m) | 25.58 | 33 |
| RES_SHALLOW (ohm.m) | 23.54 | 33 |

---

### 2165 m MD — Interval 2162.5 – 2167.5 m

**Sample Description (spreadsheet):** Sample 2165m: 10% Siltstone. 90% very fine to fine, rare medium to coarse Sandstone. TG: 243U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, rare medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 100.0% Siltstone. 90% very fine to fine, rare medium to coarse Sandstone. TG: 243U. 100% bri |
| Total Gas | 243.0 U |
| mTVDss | -1191.40 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2170m: clr,trnsl,off wh,vf-f, FROM 2182-2192m rr med-crs,mod wl srt,sbang-sbrnd, mod str sil cmt,com pl brn arg/slty mtx,tr carb spks,occ-com med-crs disagg qtz grs,mnr slty lams,mod hd-
- **SANDSTONE** @ ~2170m: clr-trnsl,off wh,vf-crs, pr srt,sbang-sbrnd,str sil cmt,occ- com pl brn-off wh arg/slty mtx,tr carb spks,tr slty lams,abdt med-crs disagg qtz grs,rr qtz o/grths,fri-mod
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.5 | 33 |
| RES_DEEP (ohm.m) | 28.90 | 33 |
| RES_SHALLOW (ohm.m) | 26.04 | 33 |

---

### 2170 m MD — Interval 2167.5 – 2172.5 m

**Sample Description (spreadsheet):** Sample 2170m: 10% Siltstone. 90% very fine to fine, occasional to common medium to coarse Sandstone. TG: 221U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, occasional to common medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 100.0% Siltstone. 90% very fine to fine, occasional to common medium to coarse Sandstone. TG: 221U. 100% bri |
| Total Gas | 221.0 U |
| mTVDss | -1191.31 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2170m: clr,trnsl,off wh,vf-f, FROM 2182-2192m rr med-crs,mod wl srt,sbang-sbrnd, mod str sil cmt,com pl brn arg/slty mtx,tr carb spks,occ-com med-crs disagg qtz grs,mnr slty lams,mod hd-
- **SANDSTONE** @ ~2170m: clr-trnsl,off wh,vf-crs, pr srt,sbang-sbrnd,str sil cmt,occ- com pl brn-off wh arg/slty mtx,tr carb spks,tr slty lams,abdt med-crs disagg qtz grs,rr qtz o/grths,fri-mod
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.2 | 33 |
| RES_DEEP (ohm.m) | 33.62 | 33 |
| RES_SHALLOW (ohm.m) | 26.70 | 33 |

---

### 2175 m MD — Interval 2172.5 – 2177.5 m

**Sample Description (spreadsheet):** Sample 2175m: 10% Siltstone. 90% very fine to fine, occasional to common medium to coarse Sandstone. TG: 200U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, occasional to common medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 100.0% Siltstone. 90% very fine to fine, occasional to common medium to coarse Sandstone. TG: 200U. 100% bri |
| Total Gas | 200.0 U |
| mTVDss | -1191.22 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2170m: clr,trnsl,off wh,vf-f, FROM 2182-2192m rr med-crs,mod wl srt,sbang-sbrnd, mod str sil cmt,com pl brn arg/slty mtx,tr carb spks,occ-com med-crs disagg qtz grs,mnr slty lams,mod hd-
- **SANDSTONE** @ ~2170m: clr-trnsl,off wh,vf-crs, pr srt,sbang-sbrnd,str sil cmt,occ- com pl brn-off wh arg/slty mtx,tr carb spks,tr slty lams,abdt med-crs disagg qtz grs,rr qtz o/grths,fri-mod
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.0 | 33 |
| RES_DEEP (ohm.m) | 31.76 | 33 |
| RES_SHALLOW (ohm.m) | 24.85 | 33 |

---

### 2180 m MD — Interval 2177.5 – 2182.5 m

**Sample Description (spreadsheet):** Sample 2180m: 20% Siltstone. 80% very fine to fine, occasional to common medium to coarse Sandstone. TG: 195U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine, occasional to common medium to coarse (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 100.0% Siltstone. 80% very fine to fine, occasional to common medium to coarse Sandstone. TG: 195U. 100% bri |
| Total Gas | 195.0 U |
| mTVDss | -1191.12 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2170m: clr,trnsl,off wh,vf-f, FROM 2182-2192m rr med-crs,mod wl srt,sbang-sbrnd, mod str sil cmt,com pl brn arg/slty mtx,tr carb spks,occ-com med-crs disagg qtz grs,mnr slty lams,mod hd-
- **SANDSTONE** @ ~2170m: clr-trnsl,off wh,vf-crs, pr srt,sbang-sbrnd,str sil cmt,occ- com pl brn-off wh arg/slty mtx,tr carb spks,tr slty lams,abdt med-crs disagg qtz grs,rr qtz o/grths,fri-mod
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.5 | 32 |
| RES_DEEP (ohm.m) | 35.31 | 32 |
| RES_SHALLOW (ohm.m) | 25.60 | 32 |

---

### 2185 m MD — Interval 2182.5 – 2187.5 m

**Sample Description (spreadsheet):** Sample 2185m: 15% Siltstone. 85% very fine to coarse, abundant medium to coarse loose Sandstone. TG: 160U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to coarse, abundant medium to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 100.0% Siltstone. 85% very fine to coarse, abundant medium to coarse loose Sandstone. TG: 160U. 100% bri |
| Total Gas | 160.0 U |
| mTVDss | -1191.06 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2170m: clr,trnsl,off wh,vf-f, FROM 2182-2192m rr med-crs,mod wl srt,sbang-sbrnd, mod str sil cmt,com pl brn arg/slty mtx,tr carb spks,occ-com med-crs disagg qtz grs,mnr slty lams,mod hd-
- **SANDSTONE** @ ~2170m: clr-trnsl,off wh,vf-crs, pr srt,sbang-sbrnd,str sil cmt,occ- com pl brn-off wh arg/slty mtx,tr carb spks,tr slty lams,abdt med-crs disagg qtz grs,rr qtz o/grths,fri-mod
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 108.0 | 33 |
| RES_DEEP (ohm.m) | 32.59 | 33 |
| RES_SHALLOW (ohm.m) | 23.39 | 33 |

---

### 2190 m MD — Interval 2187.5 – 2192.5 m

**Sample Description (spreadsheet):** Sample 2190m: 20% Siltstone. 80% very fine to coarse, occasional to common medium to coarse loose Sandstone. TG: 120U. 60% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to coarse, occasional to common medium to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 60.0% Siltstone. 80% very fine to coarse, occasional to common medium to coarse loose Sandstone. TG: 120U. 60% bri |
| Total Gas | 120.0 U |
| mTVDss | -1191.04 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.3 | 33 |
| RES_DEEP (ohm.m) | 37.66 | 33 |
| RES_SHALLOW (ohm.m) | 25.40 | 33 |

---

### 2195 m MD — Interval 2192.5 – 2197.5 m

**Sample Description (spreadsheet):** Sample 2195m: 60% Siltstone. 40% very fine to coarse, occasional to common medium to coarse loose Sandstone. TG: 97U. 50% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 40.0 |
| Grain Size | very fine to coarse, occasional to common medium to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 50.0% Siltstone. 40% very fine to coarse, occasional to common medium to coarse loose Sandstone. TG: 97U. 50% bri |
| Total Gas | 97.0 U |
| mTVDss | -1191.06 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2210m: med brn,med brn gry,lt-med gry,aren,loc mnr sndy lams,mnr sid,hd- 03-09-2021 mod hd,occ v hd,sbblky-blky. 04-09-2021
- **SANDSTONE** @ ~2210m: pl brn-off wh,clr-trnsl,vf- f,wl srt,g/t SLTST i/p,sbang-sbrnd,mod str sil cmt,com pl gry-off wh arg mtx, mnr slty lams,fri-mod hd,occ v hd, pr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 110.5 | 33 |
| RES_DEEP (ohm.m) | 35.41 | 33 |
| RES_SHALLOW (ohm.m) | 24.54 | 33 |

---

### 2200 m MD — Interval 2197.5 – 2202.5 m

**Sample Description (spreadsheet):** Sample 2200m: 50% Siltstone. 50% very fine to coarse, occasional to common medium to coarse loose Sandstone. TG: 100U. 40% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 50.0 |
| Grain Size | very fine to coarse, occasional to common medium to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 40.0% Siltstone. 50% very fine to coarse, occasional to common medium to coarse loose Sandstone. TG: 100U. 40% bri |
| Total Gas | 100.0 U |
| mTVDss | -1191.13 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2210m: med brn,med brn gry,lt-med gry,aren,loc mnr sndy lams,mnr sid,hd- 03-09-2021 mod hd,occ v hd,sbblky-blky. 04-09-2021
- **SANDSTONE** @ ~2210m: pl brn-off wh,clr-trnsl,vf- f,wl srt,g/t SLTST i/p,sbang-sbrnd,mod str sil cmt,com pl gry-off wh arg mtx, mnr slty lams,fri-mod hd,occ v hd, pr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 112.5 | 33 |
| RES_DEEP (ohm.m) | 36.97 | 33 |
| RES_SHALLOW (ohm.m) | 24.74 | 33 |

---

### 2205 m MD — Interval 2202.5 – 2207.5 m

**Sample Description (spreadsheet):** Sample 2205m: 55% Siltstone. 45% very fine to fine, rare medium to coarse, occasional medium loose Sandstone. TG: 94U. 30% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 44.99999999999999 |
| Grain Size | very fine to fine, rare medium to coarse, occasional medium loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 30.0% Siltstone. 45% very fine to fine, rare medium to coarse, occasional medium loose Sandstone. TG: 94U. 30% bri |
| Total Gas | 94.0 U |
| mTVDss | -1191.25 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2210m: med brn,med brn gry,lt-med gry,aren,loc mnr sndy lams,mnr sid,hd- 03-09-2021 mod hd,occ v hd,sbblky-blky. 04-09-2021
- **SANDSTONE** @ ~2210m: pl brn-off wh,clr-trnsl,vf- f,wl srt,g/t SLTST i/p,sbang-sbrnd,mod str sil cmt,com pl gry-off wh arg mtx, mnr slty lams,fri-mod hd,occ v hd, pr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.5 | 32 |
| RES_DEEP (ohm.m) | 33.35 | 32 |
| RES_SHALLOW (ohm.m) | 22.83 | 32 |

---

### 2235 m MD — Interval 2232.5 – 2237.5 m

**Sample Description (spreadsheet):** Sample 2235m: 60% Siltstone. 40% very fine to fine, Sandstone. TG: 83U. 30% mod bri-dll fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 40.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.68) |
| Fluorescence | 30.0% Siltstone. 40% very fine to fine, Sandstone. TG: 83U. 30% mod bri-dll |
| Total Gas | 83.0 U |
| mTVDss | -1192.13 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2240m: pl brn-off wh,clr,trnsl,vf, g/t SLTST i/p,v wl srt,sbang-sbrnd,mod str sil cmt,com pl brn gry arg mtx,tr carb spks,tr slty lams,tr disagg qtz grs,mod hd-hd,occ fri,v pr vis por,pr-
- **SANDSTONE** @ ~2240m: 6-16 klbs 2250 SANDSTONE:clr,trnsl,pl brn-off wh,vf- FLW: 248-270 gpm carb spks,com-occ med-crs disagg qtz grs,mod hd-hd,v pr vis por,gd inf
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.4 | 33 |
| RES_DEEP (ohm.m) | 24.88 | 33 |
| RES_SHALLOW (ohm.m) | 19.44 | 33 |

---

### 2240 m MD — Interval 2237.5 – 2242.5 m

**Sample Description (spreadsheet):** Sample 2240m: 70% Siltstone. 30% very fine to fine, trace loose Sandstone. TG: 103U. 20% mod bri-dll fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 30.000000000000004 |
| Grain Size | very fine to fine, trace loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.68) |
| Fluorescence | 20.0% Siltstone. 30% very fine to fine, trace loose Sandstone. TG: 103U. 20% mod bri-dll |
| Total Gas | 103.0 U |
| mTVDss | -1192.30 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2240m: pl brn-off wh,clr,trnsl,vf, g/t SLTST i/p,v wl srt,sbang-sbrnd,mod str sil cmt,com pl brn gry arg mtx,tr carb spks,tr slty lams,tr disagg qtz grs,mod hd-hd,occ fri,v pr vis por,pr-
- **SANDSTONE** @ ~2240m: 6-16 klbs 2250 SANDSTONE:clr,trnsl,pl brn-off wh,vf- FLW: 248-270 gpm carb spks,com-occ med-crs disagg qtz grs,mod hd-hd,v pr vis por,gd inf
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 110.4 | 33 |
| RES_DEEP (ohm.m) | 28.60 | 33 |
| RES_SHALLOW (ohm.m) | 23.39 | 33 |

---

### 2245 m MD — Interval 2242.5 – 2247.5 m

**Sample Description (spreadsheet):** Sample 2245m: 50% Siltstone. 50% very fine to fine aggregates , common to occasional medium to coarse loose Sandstone. TG: 190U. 70% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 50.0 |
| Grain Size | very fine to fine aggregates , common to occasional medium to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.68) |
| Fluorescence | 70.0% Siltstone. 50% very fine to fine aggregates , common to occasional medium to coarse loose Sandstone. TG: 190U. 70% mod bri |
| Total Gas | 190.0 U |
| mTVDss | -1192.47 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2240m: pl brn-off wh,clr,trnsl,vf, g/t SLTST i/p,v wl srt,sbang-sbrnd,mod str sil cmt,com pl brn gry arg mtx,tr carb spks,tr slty lams,tr disagg qtz grs,mod hd-hd,occ fri,v pr vis por,pr-
- **SANDSTONE** @ ~2240m: 6-16 klbs 2250 SANDSTONE:clr,trnsl,pl brn-off wh,vf- FLW: 248-270 gpm carb spks,com-occ med-crs disagg qtz grs,mod hd-hd,v pr vis por,gd inf
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.4 | 33 |
| RES_DEEP (ohm.m) | 26.58 | 33 |
| RES_SHALLOW (ohm.m) | 22.87 | 33 |

---

### 2250 m MD — Interval 2247.5 – 2252.5 m

**Sample Description (spreadsheet):** Sample 2250m: 20% Siltstone80% very fine to fine aggregates, common to occasional medium to coarse loose Sandstone. TG: 195U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine aggregates, common to occasional medium to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone80% very fine to fine aggregates, common to occasional medium to coarse loose Sandstone. TG: 195U. 100% mod bri |
| Total Gas | 195.0 U |
| mTVDss | -1192.64 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2240m: pl brn-off wh,clr,trnsl,vf, g/t SLTST i/p,v wl srt,sbang-sbrnd,mod str sil cmt,com pl brn gry arg mtx,tr carb spks,tr slty lams,tr disagg qtz grs,mod hd-hd,occ fri,v pr vis por,pr-
- **SANDSTONE** @ ~2240m: 6-16 klbs 2250 SANDSTONE:clr,trnsl,pl brn-off wh,vf- FLW: 248-270 gpm carb spks,com-occ med-crs disagg qtz grs,mod hd-hd,v pr vis por,gd inf
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.8 | 33 |
| RES_DEEP (ohm.m) | 21.79 | 33 |
| RES_SHALLOW (ohm.m) | 21.25 | 33 |

---

### 2255 m MD — Interval 2252.5 – 2257.5 m

**Sample Description (spreadsheet):** Sample 2255m: 15% Siltstone 85% very fine to fine aggregates, common to occasional medium to coarse loose Sandstone. TG: 158U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine aggregates, common to occasional medium to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone 85% very fine to fine aggregates, common to occasional medium to coarse loose Sandstone. TG: 158U. 100% mod bri |
| Total Gas | 158.0 U |
| mTVDss | -1192.80 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2240m: pl brn-off wh,clr,trnsl,vf, g/t SLTST i/p,v wl srt,sbang-sbrnd,mod str sil cmt,com pl brn gry arg mtx,tr carb spks,tr slty lams,tr disagg qtz grs,mod hd-hd,occ fri,v pr vis por,pr-
- **SANDSTONE** @ ~2240m: 6-16 klbs 2250 SANDSTONE:clr,trnsl,pl brn-off wh,vf- FLW: 248-270 gpm carb spks,com-occ med-crs disagg qtz grs,mod hd-hd,v pr vis por,gd inf
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.8 | 32 |
| RES_DEEP (ohm.m) | 20.31 | 32 |
| RES_SHALLOW (ohm.m) | 18.54 | 32 |

---

### 2260 m MD — Interval 2257.5 – 2262.5 m

**Sample Description (spreadsheet):** Sample 2260m: 20% Siltstone 80% very fine to fine aggregates, common to occasional medium to coarse loose Sandstone. TG: 156U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine aggregates, common to occasional medium to coarse loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 100.0% Siltstone 80% very fine to fine aggregates, common to occasional medium to coarse loose Sandstone. TG: 156U. 100% mod bri |
| Total Gas | 156.0 U |
| mTVDss | -1192.95 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2270m: pl gry,pl brn gry,lt med brn gry,g/t vf SST,com micmic,occ sndy lams,frm-mod hd,sbblky-blky. SURVEY @ 2276.9m INC: 89.17° AZI: 326.69°G
- **SANDSTONE** @ ~2270m: clr,trnsl,pl brn,vf-f,v wl srt,sbang-sbrnd,mod str sil cmt,com off wh-pl brn gry,arg/slty mtx,occ slty lams,occ carb spks,tr qtz o/grths,mod hd-hd,occ fri,v pr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.9 | 33 |
| RES_DEEP (ohm.m) | 18.79 | 33 |
| RES_SHALLOW (ohm.m) | 16.05 | 33 |

---

### 2265 m MD — Interval 2262.5 – 2267.5 m

**Sample Description (spreadsheet):** Sample 2265m: 30% Siltstone 70% very fine, minor loose Sandstone. TG: 132U. 80% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | very fine, minor loose (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 80.0% Siltstone 70% very fine, minor loose Sandstone. TG: 132U. 80% bri |
| Total Gas | 132.0 U |
| mTVDss | -1193.08 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2270m: pl gry,pl brn gry,lt med brn gry,g/t vf SST,com micmic,occ sndy lams,frm-mod hd,sbblky-blky. SURVEY @ 2276.9m INC: 89.17° AZI: 326.69°G
- **SANDSTONE** @ ~2270m: clr,trnsl,pl brn,vf-f,v wl srt,sbang-sbrnd,mod str sil cmt,com off wh-pl brn gry,arg/slty mtx,occ slty lams,occ carb spks,tr qtz o/grths,mod hd-hd,occ fri,v pr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 113.4 | 33 |
| RES_DEEP (ohm.m) | 17.90 | 33 |
| RES_SHALLOW (ohm.m) | 14.72 | 33 |

---

### 2270 m MD — Interval 2267.5 – 2272.5 m

**Sample Description (spreadsheet):** Sample 2270m: 40% Siltstone 60% very fine, minor loose Sandstone. TG: 118U. 40% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | very fine, minor loose (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 40.0% Siltstone 60% very fine, minor loose Sandstone. TG: 118U. 40% bri |
| Total Gas | 118.0 U |
| mTVDss | -1193.19 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2270m: pl gry,pl brn gry,lt med brn gry,g/t vf SST,com micmic,occ sndy lams,frm-mod hd,sbblky-blky. SURVEY @ 2276.9m INC: 89.17° AZI: 326.69°G
- **SANDSTONE** @ ~2270m: clr,trnsl,pl brn,vf-f,v wl srt,sbang-sbrnd,mod str sil cmt,com off wh-pl brn gry,arg/slty mtx,occ slty lams,occ carb spks,tr qtz o/grths,mod hd-hd,occ fri,v pr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 111.3 | 33 |
| RES_DEEP (ohm.m) | 18.60 | 33 |
| RES_SHALLOW (ohm.m) | 15.96 | 33 |

---

### 2275 m MD — Interval 2272.5 – 2277.5 m

**Sample Description (spreadsheet):** Sample 2275m: 60% Siltstone 40% very fine Sandstone. TG: 115U. 70% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 40.0 |
| Grain Size | very fine (max: nan) |
| Grain Ordinal | 1 |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 70.0% Siltstone 40% very fine Sandstone. TG: 115U. 70% mod bri |
| Total Gas | 115.0 U |
| mTVDss | -1193.29 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2270m: pl gry,pl brn gry,lt med brn gry,g/t vf SST,com micmic,occ sndy lams,frm-mod hd,sbblky-blky. SURVEY @ 2276.9m INC: 89.17° AZI: 326.69°G
- **SANDSTONE** @ ~2270m: clr,trnsl,pl brn,vf-f,v wl srt,sbang-sbrnd,mod str sil cmt,com off wh-pl brn gry,arg/slty mtx,occ slty lams,occ carb spks,tr qtz o/grths,mod hd-hd,occ fri,v pr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.2 | 33 |
| RES_DEEP (ohm.m) | 19.36 | 33 |
| RES_SHALLOW (ohm.m) | 17.59 | 33 |

---

### 2280 m MD — Interval 2277.5 – 2282.5 m

**Sample Description (spreadsheet):** Sample 2280m: 30% Siltstone 70% very fine to fine Sandstone. TG: 250U. 80% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 80.0% Siltstone 70% very fine to fine Sandstone. TG: 250U. 80% bri |
| Total Gas | 250.0 U |
| mTVDss | -1193.35 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2270m: pl gry,pl brn gry,lt med brn gry,g/t vf SST,com micmic,occ sndy lams,frm-mod hd,sbblky-blky. SURVEY @ 2276.9m INC: 89.17° AZI: 326.69°G
- **SANDSTONE** @ ~2270m: clr,trnsl,pl brn,vf-f,v wl srt,sbang-sbrnd,mod str sil cmt,com off wh-pl brn gry,arg/slty mtx,occ slty lams,occ carb spks,tr qtz o/grths,mod hd-hd,occ fri,v pr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.3 | 33 |
| RES_DEEP (ohm.m) | 19.70 | 33 |
| RES_SHALLOW (ohm.m) | 18.42 | 33 |

---

### 2285 m MD — Interval 2282.5 – 2287.5 m

**Sample Description (spreadsheet):** Sample 2285m: 10% Siltstone 90% very fine to fine, common loose Sandstone. TG: 230U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, common loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone 90% very fine to fine, common loose Sandstone. TG: 230U. 100% bri |
| Total Gas | 230.0 U |
| mTVDss | -1193.41 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2270m: pl gry,pl brn gry,lt med brn gry,g/t vf SST,com micmic,occ sndy lams,frm-mod hd,sbblky-blky. SURVEY @ 2276.9m INC: 89.17° AZI: 326.69°G
- **SANDSTONE** @ ~2270m: clr,trnsl,pl brn,vf-f,v wl srt,sbang-sbrnd,mod str sil cmt,com off wh-pl brn gry,arg/slty mtx,occ slty lams,occ carb spks,tr qtz o/grths,mod hd-hd,occ fri,v pr vis por,fluor.
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.3 | 32 |
| RES_DEEP (ohm.m) | 20.26 | 32 |
| RES_SHALLOW (ohm.m) | 19.27 | 32 |

---

### 2290 m MD — Interval 2287.5 – 2292.5 m

**Sample Description (spreadsheet):** Sample 2290m: 100% very fine to fine, abundant loose Sandstone. TG: 154U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine, abundant loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine, abundant loose Sandstone. TG: 154U. 100% bri |
| Total Gas | 154.0 U |
| mTVDss | -1193.43 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2300m: clr,trnsl,pl brn,vf-f,v wl srt,sbang-sbrnd,mod str sil cmt,com off wh-pl brn gry,arg/slty mtx,occ slty lams,occ carb spks,tr qtz o/grths,mod hd-hd,occ fri,v pr vis por,gd inf por,fluor.
- **SILTSTONE** @ ~2300m: 6-10 klbs SILTSTONE:med gry,med dk gry,med brn FLW: 246-270 gpm 2310 FLUORESCENCE:2310-2340m,
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.0 | 33 |
| RES_DEEP (ohm.m) | 20.08 | 33 |
| RES_SHALLOW (ohm.m) | 19.38 | 33 |

---

### 2295 m MD — Interval 2292.5 – 2297.5 m

**Sample Description (spreadsheet):** Sample 2295m: 10% Siltstone. 90% very fine to fine, minor loose Sandstone. TG: 116U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine, minor loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone. 90% very fine to fine, minor loose Sandstone. TG: 116U. 100% bri |
| Total Gas | 116.0 U |
| mTVDss | -1193.45 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2300m: clr,trnsl,pl brn,vf-f,v wl srt,sbang-sbrnd,mod str sil cmt,com off wh-pl brn gry,arg/slty mtx,occ slty lams,occ carb spks,tr qtz o/grths,mod hd-hd,occ fri,v pr vis por,gd inf por,fluor.
- **SILTSTONE** @ ~2300m: 6-10 klbs SILTSTONE:med gry,med dk gry,med brn FLW: 246-270 gpm 2310 FLUORESCENCE:2310-2340m,
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.1 | 33 |
| RES_DEEP (ohm.m) | 21.09 | 33 |
| RES_SHALLOW (ohm.m) | 19.71 | 33 |

---

### 2300 m MD — Interval 2297.5 – 2302.5 m

**Sample Description (spreadsheet):** Sample 2300m: 20% Siltstone. 80% very fine to fine Sandstone. TG: 138U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone. 80% very fine to fine Sandstone. TG: 138U. 100% bri |
| Total Gas | 138.0 U |
| mTVDss | -1193.44 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2300m: clr,trnsl,pl brn,vf-f,v wl srt,sbang-sbrnd,mod str sil cmt,com off wh-pl brn gry,arg/slty mtx,occ slty lams,occ carb spks,tr qtz o/grths,mod hd-hd,occ fri,v pr vis por,gd inf por,fluor.
- **SILTSTONE** @ ~2300m: 6-10 klbs SILTSTONE:med gry,med dk gry,med brn FLW: 246-270 gpm 2310 FLUORESCENCE:2310-2340m,
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.0 | 33 |
| RES_DEEP (ohm.m) | 22.90 | 33 |
| RES_SHALLOW (ohm.m) | 20.49 | 33 |

---

### 2305 m MD — Interval 2302.5 – 2307.5 m

**Sample Description (spreadsheet):** Sample 2305m: 15% Siltstone. 85% very fine to fine Sandstone. TG: 128U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone. 85% very fine to fine Sandstone. TG: 128U. 100% bri |
| Total Gas | 128.0 U |
| mTVDss | -1193.43 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2300m: clr,trnsl,pl brn,vf-f,v wl srt,sbang-sbrnd,mod str sil cmt,com off wh-pl brn gry,arg/slty mtx,occ slty lams,occ carb spks,tr qtz o/grths,mod hd-hd,occ fri,v pr vis por,gd inf por,fluor.
- **SILTSTONE** @ ~2300m: 6-10 klbs SILTSTONE:med gry,med dk gry,med brn FLW: 246-270 gpm 2310 FLUORESCENCE:2310-2340m,
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.3 | 33 |
| RES_DEEP (ohm.m) | 23.23 | 33 |
| RES_SHALLOW (ohm.m) | 20.61 | 33 |

---

### 2310 m MD — Interval 2307.5 – 2312.5 m

**Sample Description (spreadsheet):** Sample 2310m: 20% Siltstone. 80% very fine to fine Sandstone. TG: 145U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone. 80% very fine to fine Sandstone. TG: 145U. 100% bri |
| Total Gas | 145.0 U |
| mTVDss | -1193.41 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2300m: clr,trnsl,pl brn,vf-f,v wl srt,sbang-sbrnd,mod str sil cmt,com off wh-pl brn gry,arg/slty mtx,occ slty lams,occ carb spks,tr qtz o/grths,mod hd-hd,occ fri,v pr vis por,gd inf por,fluor.
- **SILTSTONE** @ ~2300m: 6-10 klbs SILTSTONE:med gry,med dk gry,med brn FLW: 246-270 gpm 2310 FLUORESCENCE:2310-2340m,
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.4 | 32 |
| RES_DEEP (ohm.m) | 22.12 | 32 |
| RES_SHALLOW (ohm.m) | 19.73 | 32 |

---

### 2315 m MD — Interval 2312.5 – 2317.5 m

**Sample Description (spreadsheet):** Sample 2315m: 10% Siltstone. 90% very fine to fine Sandstone. TG: 185U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | mod hd (0.30) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone. 90% very fine to fine Sandstone. TG: 185U. 100% bri |
| Total Gas | 185.0 U |
| mTVDss | -1193.39 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2300m: clr,trnsl,pl brn,vf-f,v wl srt,sbang-sbrnd,mod str sil cmt,com off wh-pl brn gry,arg/slty mtx,occ slty lams,occ carb spks,tr qtz o/grths,mod hd-hd,occ fri,v pr vis por,gd inf por,fluor.
- **SILTSTONE** @ ~2300m: 6-10 klbs SILTSTONE:med gry,med dk gry,med brn FLW: 246-270 gpm 2310 FLUORESCENCE:2310-2340m,
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.5 | 33 |
| RES_DEEP (ohm.m) | 21.81 | 33 |
| RES_SHALLOW (ohm.m) | 19.52 | 33 |

---

### 2320 m MD — Interval 2317.5 – 2322.5 m

**Sample Description (spreadsheet):** Sample 2320m: 100% very fine to fine Sandstone. TG: 195U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine Sandstone. TG: 195U. 100% bri |
| Total Gas | 195.0 U |
| mTVDss | -1193.35 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2320m: clr,trnsl,pl brn gry,vf,wl srt,sbang-sbrnd,mod sil cmt,com pl gry arg/slty mtx,occ carb spks,mnr slty lams,fri-mod hd,pr vis por,fluor.
- **SANDSTONE** @ ~2330m: clr,trnsl,v lt brnsh gry, f-med,mod srt,sbang-pred sbrnd,wk sil cmt,tr lt gry arg mtx,pred lse-disagg, gd inf por,fluor. 81 / 6 / 3 / 4 / 6 148 U
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.3 | 33 |
| RES_DEEP (ohm.m) | 22.16 | 33 |
| RES_SHALLOW (ohm.m) | 19.88 | 33 |

---

### 2325 m MD — Interval 2322.5 – 2327.5 m

**Sample Description (spreadsheet):** Sample 2325m: 100% very fine to fine Sandstone. TG: 185U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine Sandstone. TG: 185U. 100% bri |
| Total Gas | 185.0 U |
| mTVDss | -1193.30 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2320m: clr,trnsl,pl brn gry,vf,wl srt,sbang-sbrnd,mod sil cmt,com pl gry arg/slty mtx,occ carb spks,mnr slty lams,fri-mod hd,pr vis por,fluor.
- **SANDSTONE** @ ~2330m: clr,trnsl,v lt brnsh gry, f-med,mod srt,sbang-pred sbrnd,wk sil cmt,tr lt gry arg mtx,pred lse-disagg, gd inf por,fluor. 81 / 6 / 3 / 4 / 6 148 U
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.8 | 33 |
| RES_DEEP (ohm.m) | 21.49 | 33 |
| RES_SHALLOW (ohm.m) | 19.64 | 33 |

---

### 2330 m MD — Interval 2327.5 – 2332.5 m

**Sample Description (spreadsheet):** Sample 2330m: 100% very fine to fine Sandstone. TG: 160U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine Sandstone. TG: 160U. 100% bri |
| Total Gas | 160.0 U |
| mTVDss | -1193.23 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2320m: clr,trnsl,pl brn gry,vf,wl srt,sbang-sbrnd,mod sil cmt,com pl gry arg/slty mtx,occ carb spks,mnr slty lams,fri-mod hd,pr vis por,fluor.
- **SANDSTONE** @ ~2330m: clr,trnsl,v lt brnsh gry, f-med,mod srt,sbang-pred sbrnd,wk sil cmt,tr lt gry arg mtx,pred lse-disagg, gd inf por,fluor. 81 / 6 / 3 / 4 / 6 148 U
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.2 | 33 |
| RES_DEEP (ohm.m) | 19.88 | 33 |
| RES_SHALLOW (ohm.m) | 18.16 | 33 |

---

### 2335 m MD — Interval 2332.5 – 2337.5 m

**Sample Description (spreadsheet):** Sample 2335m: 100% very fine to fine Sandstone. TG: 147U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine Sandstone. TG: 147U. 100% bri |
| Total Gas | 147.0 U |
| mTVDss | -1193.15 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2320m: clr,trnsl,pl brn gry,vf,wl srt,sbang-sbrnd,mod sil cmt,com pl gry arg/slty mtx,occ carb spks,mnr slty lams,fri-mod hd,pr vis por,fluor.
- **SANDSTONE** @ ~2330m: clr,trnsl,v lt brnsh gry, f-med,mod srt,sbang-pred sbrnd,wk sil cmt,tr lt gry arg mtx,pred lse-disagg, gd inf por,fluor. 81 / 6 / 3 / 4 / 6 148 U
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.6 | 32 |
| RES_DEEP (ohm.m) | 18.00 | 32 |
| RES_SHALLOW (ohm.m) | 16.37 | 32 |

---

### 2340 m MD — Interval 2337.5 – 2342.5 m

**Sample Description (spreadsheet):** Sample 2340m: 100% very fine to fine Sandstone, occasional to common loose. TG: 146U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% very fine to fine Sandstone, occasional to common loose. TG: 146U. 100% bri |
| Total Gas | 146.0 U |
| mTVDss | -1193.06 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2330m: clr,trnsl,v lt brnsh gry, f-med,mod srt,sbang-pred sbrnd,wk sil cmt,tr lt gry arg mtx,pred lse-disagg, gd inf por,fluor. 81 / 6 / 3 / 4 / 6 148 U
- **SILTSTONE** @ ~2330m: med gry,vf aren,mnr carb spks,mod hd,sbblky-blky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.4 | 33 |
| RES_DEEP (ohm.m) | 18.93 | 33 |
| RES_SHALLOW (ohm.m) | 17.29 | 33 |

---

### 2345 m MD — Interval 2342.5 – 2347.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% fine to medium grained Sandstone, 100% nan FLUOR, TG 135.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | fine to medium grained (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% nan |
| Total Gas | 135.0 U |
| mTVDss | -1192.97 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2330m: clr,trnsl,v lt brnsh gry, f-med,mod srt,sbang-pred sbrnd,wk sil cmt,tr lt gry arg mtx,pred lse-disagg, gd inf por,fluor. 81 / 6 / 3 / 4 / 6 148 U
- **SILTSTONE** @ ~2330m: med gry,vf aren,mnr carb spks,mod hd,sbblky-blky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.1 | 33 |
| RES_DEEP (ohm.m) | 19.45 | 33 |
| RES_SHALLOW (ohm.m) | 18.08 | 33 |

---

### 2350 m MD — Interval 2347.5 – 2352.5 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% fine to med grained, loose/dis-aggregated Sandstone, 100% Siltstone, 100% fine to med grained, loose/dis-aggregated Sandstone. BG 120U FLUOR, TG 120.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | fine to med grained, loose/dis-aggregated (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 100.0% Siltstone, 100% fine to med grained, loose/dis-aggregated Sandstone. BG 120U |
| Total Gas | 120.0 U |
| mTVDss | -1192.89 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2360m: 120k SANDSTONE:v lt gry,trnsl,clr,off wh, vf-f,mod wl srt,sbang-sbrnd,mod str sil cmt,com lt gry arg/slty mtx,tr carb spks,fri-mod hd,v pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.8 | 33 |
| RES_DEEP (ohm.m) | 19.55 | 33 |
| RES_SHALLOW (ohm.m) | 17.62 | 33 |

---

### 2355 m MD — Interval 2352.5 – 2357.5 m

**Sample Description (spreadsheet):** 10% Siltstone, 90% fine to med grained Sandstone, 80% Siltstone, 90% fine to med grained Sandstone. BG 116U FLUOR, TG 116.0U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | fine to med grained (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 80.0% Siltstone, 90% fine to med grained Sandstone. BG 116U |
| Total Gas | 116.0 U |
| mTVDss | -1192.80 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2360m: 120k SANDSTONE:v lt gry,trnsl,clr,off wh, vf-f,mod wl srt,sbang-sbrnd,mod str sil cmt,com lt gry arg/slty mtx,tr carb spks,fri-mod hd,v pr vis por,fluor.
- **SANDSTONE** @ ~2370m: v lt gry,trnsl,clr,off wh, f-med,mod wl srt,sbang-sbrnd,mod str sil cmt,com lt gry arg/slty mtx,tr carb spks,fri-mod hd,v pr vis por,fluor. 79 / 6 / 4 / 5 / 6 121 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.8 | 33 |
| RES_DEEP (ohm.m) | 22.24 | 33 |
| RES_SHALLOW (ohm.m) | 19.04 | 33 |

---

### 2360 m MD — Interval 2357.5 – 2362.5 m

**Sample Description (spreadsheet):** 20% Siltstone, 80% fine grained Sandstone, 40% Siltstone 80% fine grained Sandstone. BG: 100U FLUOR, TG 100.0U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | fine grained (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 40.0% Siltstone 80% fine grained Sandstone. BG: 100U |
| Total Gas | 100.0 U |
| mTVDss | -1192.72 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2360m: 120k SANDSTONE:v lt gry,trnsl,clr,off wh, vf-f,mod wl srt,sbang-sbrnd,mod str sil cmt,com lt gry arg/slty mtx,tr carb spks,fri-mod hd,v pr vis por,fluor.
- **SANDSTONE** @ ~2370m: v lt gry,trnsl,clr,off wh, f-med,mod wl srt,sbang-sbrnd,mod str sil cmt,com lt gry arg/slty mtx,tr carb spks,fri-mod hd,v pr vis por,fluor. 79 / 6 / 4 / 5 / 6 121 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.0 | 32 |
| RES_DEEP (ohm.m) | 21.12 | 32 |
| RES_SHALLOW (ohm.m) | 18.69 | 32 |

---

### 2365 m MD — Interval 2362.5 – 2367.5 m

**Sample Description (spreadsheet):** 10% Siltstone, 90% fine grained Sandstone, 80% Siltstone, 90% fine grained Sandstone. BG 110U FLUOR, TG 110.0U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | fine grained (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.68) |
| Fluorescence | 80.0% Siltstone, 90% fine grained Sandstone. BG 110U |
| Total Gas | 110.0 U |
| mTVDss | -1192.64 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2360m: 120k SANDSTONE:v lt gry,trnsl,clr,off wh, vf-f,mod wl srt,sbang-sbrnd,mod str sil cmt,com lt gry arg/slty mtx,tr carb spks,fri-mod hd,v pr vis por,fluor.
- **SANDSTONE** @ ~2370m: v lt gry,trnsl,clr,off wh, f-med,mod wl srt,sbang-sbrnd,mod str sil cmt,com lt gry arg/slty mtx,tr carb spks,fri-mod hd,v pr vis por,fluor. 79 / 6 / 4 / 5 / 6 121 U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.7 | 33 |
| RES_DEEP (ohm.m) | 19.19 | 33 |
| RES_SHALLOW (ohm.m) | 17.12 | 33 |

---

### 2370 m MD — Interval 2367.5 – 2372.5 m

**Sample Description (spreadsheet):** 20% Siltstone, 80% fine grained Sandstone, 40% Siltstone, 80% fine grained Sandstone. BG 90U FLUOR, TG 90.0U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | fine grained (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.68) |
| Fluorescence | 40.0% Siltstone, 80% fine grained Sandstone. BG 90U |
| Total Gas | 90.0 U |
| mTVDss | -1192.55 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2360m: 120k SANDSTONE:v lt gry,trnsl,clr,off wh, vf-f,mod wl srt,sbang-sbrnd,mod str sil cmt,com lt gry arg/slty mtx,tr carb spks,fri-mod hd,v pr vis por,fluor.
- **SANDSTONE** @ ~2370m: v lt gry,trnsl,clr,off wh, f-med,mod wl srt,sbang-sbrnd,mod str sil cmt,com lt gry arg/slty mtx,tr carb spks,fri-mod hd,v pr vis por,fluor. 79 / 6 / 4 / 5 / 6 121 U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.2 | 33 |
| RES_DEEP (ohm.m) | 20.41 | 33 |
| RES_SHALLOW (ohm.m) | 17.58 | 33 |

---

### 2375 m MD — Interval 2372.5 – 2377.5 m

**Sample Description (spreadsheet):** 25% Siltstone, 75% fine to medium grained Sandstone, 50% Siltstone, 75% fine to medium grained Sandstone. BG 110U, FLUOR, TG 110.0U

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | fine to medium grained (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.68) |
| Fluorescence | 50.0% Siltstone, 75% fine to medium grained Sandstone. BG 110U, |
| Total Gas | 110.0 U |
| mTVDss | -1192.46 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2360m: 120k SANDSTONE:v lt gry,trnsl,clr,off wh, vf-f,mod wl srt,sbang-sbrnd,mod str sil cmt,com lt gry arg/slty mtx,tr carb spks,fri-mod hd,v pr vis por,fluor.
- **SANDSTONE** @ ~2370m: v lt gry,trnsl,clr,off wh, f-med,mod wl srt,sbang-sbrnd,mod str sil cmt,com lt gry arg/slty mtx,tr carb spks,fri-mod hd,v pr vis por,fluor. 79 / 6 / 4 / 5 / 6 121 U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.7 | 33 |
| RES_DEEP (ohm.m) | 19.91 | 33 |
| RES_SHALLOW (ohm.m) | 17.70 | 33 |

---

### 2380 m MD — Interval 2377.5 – 2382.5 m

**Sample Description (spreadsheet):** 20% Siltstone, 80% fine to medium grained Sandstone, 30% Siltstone, 80% fine to medium grained Sandstone. BG 80U, FLUOR, TG 80.0U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | fine to medium grained (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.68) |
| Fluorescence | 30.0% Siltstone, 80% fine to medium grained Sandstone. BG 80U, |
| Total Gas | 80.0 U |
| mTVDss | -1192.37 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2370m: v lt gry,trnsl,clr,off wh, f-med,mod wl srt,sbang-sbrnd,mod str sil cmt,com lt gry arg/slty mtx,tr carb spks,fri-mod hd,v pr vis por,fluor. 79 / 6 / 4 / 5 / 6 121 U
- **SANDSTONE** @ ~2380m: v lt brnsh gry,off wh,trnsl, vf-med,pred f,fr-mod srt,sbang-sbrnd, wk-mod sil cmt,com lt gry/off wh arg mtx,tr carb spks,fri,v pr vis por, fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.4 | 33 |
| RES_DEEP (ohm.m) | 17.91 | 33 |
| RES_SHALLOW (ohm.m) | 16.22 | 33 |

---

### 2385 m MD — Interval 2382.5 – 2387.5 m

**Sample Description (spreadsheet):** 10% Siltstone, 90% fine to medium grained Sandstone, 30% Siltstone 90% fine to medium grained Sandstone, BG 115U FLUOR, TG 115.0U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | fine to medium grained (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.68) |
| Fluorescence | 30.0% Siltstone 90% fine to medium grained Sandstone, BG 115U |
| Total Gas | 115.0 U |
| mTVDss | -1192.26 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2370m: v lt gry,trnsl,clr,off wh, f-med,mod wl srt,sbang-sbrnd,mod str sil cmt,com lt gry arg/slty mtx,tr carb spks,fri-mod hd,v pr vis por,fluor. 79 / 6 / 4 / 5 / 6 121 U
- **SANDSTONE** @ ~2380m: v lt brnsh gry,off wh,trnsl, vf-med,pred f,fr-mod srt,sbang-sbrnd, wk-mod sil cmt,com lt gry/off wh arg mtx,tr carb spks,fri,v pr vis por, fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.0 | 33 |
| RES_DEEP (ohm.m) | 17.69 | 33 |
| RES_SHALLOW (ohm.m) | 15.70 | 33 |

---

### 2390 m MD — Interval 2387.5 – 2392.5 m

**Sample Description (spreadsheet):** 10% Siltstone, 90% fine grained Sandstone, 50% nan FLUOR, TG 85.0U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | fine grained (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 50.0% nan |
| Total Gas | 85.0 U |
| mTVDss | -1192.15 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2380m: v lt brnsh gry,off wh,trnsl, vf-med,pred f,fr-mod srt,sbang-sbrnd, wk-mod sil cmt,com lt gry/off wh arg mtx,tr carb spks,fri,v pr vis por, fluor.
- **SILTSTONE** @ ~2380m: 252-270 gpm SILTSTONE:med gry,occ med dk gry, vf aren,intb w/- vf SST,tr carb spks,mod hd,blky-sbblky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.9 | 32 |
| RES_DEEP (ohm.m) | 18.71 | 32 |
| RES_SHALLOW (ohm.m) | 16.73 | 32 |

---

### 2395 m MD — Interval 2392.5 – 2397.5 m

**Sample Description (spreadsheet):** 20% Siltstone, 80% fine grained Sandstone, 20% Siltstone, 80% fine grained Sandstone, BG 110Y FLUOR, TG 110.0U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | fine grained (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 20.0% Siltstone, 80% fine grained Sandstone, BG 110Y |
| Total Gas | 110.0 U |
| mTVDss | -1192.03 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2380m: v lt brnsh gry,off wh,trnsl, vf-med,pred f,fr-mod srt,sbang-sbrnd, wk-mod sil cmt,com lt gry/off wh arg mtx,tr carb spks,fri,v pr vis por, fluor.
- **SILTSTONE** @ ~2380m: 252-270 gpm SILTSTONE:med gry,occ med dk gry, vf aren,intb w/- vf SST,tr carb spks,mod hd,blky-sbblky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.3 | 33 |
| RES_DEEP (ohm.m) | 18.73 | 33 |
| RES_SHALLOW (ohm.m) | 17.48 | 33 |

---

### 2400 m MD — Interval 2397.5 – 2402.5 m

**Sample Description (spreadsheet):** 20% Siltstone, 80% fine to medium grained Sandstone, 30% Siltstone 80% fine to medium grained Sandstone. BG 115U FLUOR, TG 115.0U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | fine to medium grained (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 30.0% Siltstone 80% fine to medium grained Sandstone. BG 115U |
| Total Gas | 115.0 U |
| mTVDss | -1191.91 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2410m: v lt brnsh gry,off wh,trnsl, vf-med,pred f,mod wl srt,sbang-pred sbrnd,mod str sil cmt,com off wh/v lt brn arg mtx,tr carb spks,mod hd aggs, fri,lse i/p,v pr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.2 | 20 |
| RES_DEEP (ohm.m) | 18.79 | 33 |
| RES_SHALLOW (ohm.m) | 17.39 | 33 |

---

### 2405 m MD — Interval 2402.5 – 2407.5 m

**Sample Description (spreadsheet):** 20% Siltstone, 80% fine grained Sandstone, 30% Siltstone, 80% fine grained Sandstone, BG 125U FLUOR, TG 125.0U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | fine grained (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 30.0% Siltstone, 80% fine grained Sandstone, BG 125U |
| Total Gas | 125.0 U |
| mTVDss | -1191.78 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2410m: v lt brnsh gry,off wh,trnsl, vf-med,pred f,mod wl srt,sbang-pred sbrnd,mod str sil cmt,com off wh/v lt brn arg mtx,tr carb spks,mod hd aggs, fri,lse i/p,v pr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| RES_DEEP (ohm.m) | 19.15 | 33 |
| RES_SHALLOW (ohm.m) | 17.72 | 33 |

---

### 2410 m MD — Interval 2407.5 – 2412.5 m

**Sample Description (spreadsheet):** 10% Siltstone, 90% fine to occasionally medium grained Sandstone, 70% Siltstone, 90% fine to occasionally medium grained Sandstone. BG 110U FLUOR, TG 110.0U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | fine to occasionally medium grained (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 70.0% Siltstone, 90% fine to occasionally medium grained Sandstone. BG 110U |
| Total Gas | 110.0 U |
| mTVDss | -1191.66 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2410m: v lt brnsh gry,off wh,trnsl, vf-med,pred f,mod wl srt,sbang-pred sbrnd,mod str sil cmt,com off wh/v lt brn arg mtx,tr carb spks,mod hd aggs, fri,lse i/p,v pr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| RES_DEEP (ohm.m) | 18.53 | 10 |
| RES_SHALLOW (ohm.m) | 16.89 | 10 |

---

### 2415 m MD — Interval 2412.5 – 2416.0 m

**Sample Description (spreadsheet):** 5% Siltstone, 95% fine grained Sandstone, 50% Siltstone, 95% fine grained Sandstone, BG 130U FLUOR, TG 130.0U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | fine grained (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 50.0% Siltstone, 95% fine grained Sandstone, BG 130U |
| Total Gas | 130.0 U |
| mTVDss | -1191.53 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2410m: v lt brnsh gry,off wh,trnsl, vf-med,pred f,mod wl srt,sbang-pred sbrnd,mod str sil cmt,com off wh/v lt brn arg mtx,tr carb spks,mod hd aggs, fri,lse i/p,v pr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|

---

## 5. Summary Statistics (McKinlay Member)

| Metric | Value |
|--------|-------|
| Intervals analysed | 124 |
| Depth range | 1775 – 2415 m |
| Avg % Sandstone | 87.2% |
| Mudlog matches | 104 / 124 |
