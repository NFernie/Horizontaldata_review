# MCKINLAY 12 — McKinlay Member Cuttings & Log Interpretation

**Generated:** 2026-07-13 23:20 UTC  
**Well:** MCKINLAY 12 (MCKINLAY 12)  
**TD:** 2904 m MD  

---

## 1. Data Sources & Methodology

| Source | File | Role |
|--------|------|------|
| Mudlog PDF | `McKinlay 12_Mudlog_Spud-9526ft(TD)_Prelim.pdf` | Cuttings lithology descriptions |
| Litho / drill-gas ASCII | `Mckinlay 12_Litho_Spud-9526ft(TD) Prelim.txt`, `Mckinlay 12_Drill-Gas_Spud-9526ft(TD) Prelim.txt` | 5 m bins (ft→m MD) |
| Formation Tops | `DC30.xlsx`, `Mck_Murta.xlsx` | Reservoir entry & overburden identification |
| Wireline Log (LAS) | `Mck_12` | GR, RES_DEEP, RES_SHALLOW |
| Trajectory | `Mck_12_trajectory` | mTVDss (Z subsea) |

## 2. Formation Top Analysis

### 2.1 Key Tops

| Marker | Depth (m MD) | Source |
|--------|-------------|--------|
| DC30 | 1680.36 | DC30.xlsx |
| McKinlay Member (shallowest) | 1680.36 | Mck_Murta.xlsx |

### 2.2 McKinlay Member Top Classification

**Initial reservoir entry (DC30 + shallowest McKinlay):** 1680.36 m MD

**Target re-entry (lone McKinlay below an overburden entry pair):**
- 1872.08 m MD
- 2289.66 m MD
- 2658.77 m MD
- 2892.25 m MD

**Overburden entry (Murta + corresponding McKinlay within 5 m):**
| McKinlay entry (m MD) | Murta (m MD) | Δ (m) | Re-entry (m MD) | Zone length (m) |
|-----------------------|-------------|-------|-----------------|-----------------|
| 1859.40 | 1857.95 | 1.45 | 1872.08 | 12.7 |
| 2199.74 | 2198.71 | 1.03 | 2289.66 | 89.9 |
| 2642.01 | 2644.32 | 2.31 | 2658.77 | 16.8 |
| 2671.57 | 2673.45 | 1.88 | 2892.25 | 220.7 |

**McKinlay Member analysis window:** 1680.4 – 2903.5 m MD

**Excluded overburden intervals (entry → re-entry, pay resumes at re-entry):** 1859–1872 m (overburden), 2200–2290 m (overburden), 2642–2659 m (overburden), 2672–2892 m (overburden)

**Samples in McKinlay Member:** 172 of 244 total
- Excluded pre-reservoir: 0
- Excluded overburden intervals: 72

## 3. Known Shortcomings

> **Read this section before using the output.**

1. **Mudlog PDF text extraction is imperfect.** Depth-to-description assignment uses ±15 m proximity heuristics.
2. **Formation top discrepancies** between Mck_Murta.xlsx and mudlog PDF picks are noted where present.
3. **Well name mapping:** MCKINLAY 12 → `MCKINLAY 12` (verified by TD and LAS WELL header).
4. **Sample intervals** are midpoints between consecutive sample depths — variable widths where spacing is irregular.
5. **Water-risk flags** use RQI, fluorescence, resistivity, GR, ZOI, and OWC proximity (see export).
6. **NULL LAS values** (-999.25) excluded from averages.
7. **Exclusion zones** span from each Murta/McKinlay overburden entry to the next lone McKinlay re-entry below (or entry + 50 m MD if none mapped). Later entry pairs inside an existing exclusion interval are treated as the same overburden excursion. Initial DC30/McKinlay reservoir entry is not excluded.
8. **Litho/gas ASCII ingestion:** 5 m bins from ft→m MD; %SS from lithology codes. **Fluorescence %** from mudlog PDF text blocks (`FLUOR:` / `FLUORESCENCE:` ranges, ft→m); upper bound of each range used (e.g. 60–90% → 90%), not the midpoint. Gaps ≤55 m between consecutive `FLUOR:` blocks are bridged; intervals outside all blocks/zones are set to 0%.
9. **Grain size** not parsed from litho ASCII — derived from mudlog lithology text where matched.

## 4. McKinlay Member Sample Intervals

Each section: depth interval, spreadsheet sample, mudlog cuttings, wireline log averages.

### 1685 m MD — Interval 1682.5 – 1687.5 m

**Sample Description (spreadsheet):** Sample 1685m: 100% Sandstone (litho ASCII aggregate) TG 263.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 60.0% mod bri wh blmng cut |
| Total Gas | 263.45625 U |
| mTVDss | -1196.78 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1673m: wh-off wh,v lt gry,lt brnsh gry,trnsl,clr,vf-pred 94 / 6 f,com lse med-crs qtz grs,pr srt,sbang-sbrnd,mod strg sil cmt 5500 in f aggs,mnr-com wh-off wh arg
- **SANDSTONE** @ ~1686m: trnsl,clr,v lt brn gry,f-med,tr crs,mod srt,sbang- sbrnd,wk sil cmt,mnr wh arg mtx, fri aggs,fr inf por,fluor. (4099) 74 / 7 / 5 / 6 / 8 381 U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.9 | 32 |
| RES_DEEP (ohm.m) | 27.22 | 32 |
| RES_SHALLOW (ohm.m) | 18.75 | 32 |

---

### 1690 m MD — Interval 1687.5 – 1692.5 m

**Sample Description (spreadsheet):** Sample 1690m: 100% Sandstone (litho ASCII aggregate) TG 309.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 60.0% mod bri wh blmng cut |
| Total Gas | 309.8875 U |
| mTVDss | -1196.96 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1673m: wh-off wh,v lt gry,lt brnsh gry,trnsl,clr,vf-pred 94 / 6 f,com lse med-crs qtz grs,pr srt,sbang-sbrnd,mod strg sil cmt 5500 in f aggs,mnr-com wh-off wh arg
- **SANDSTONE** @ ~1686m: trnsl,clr,v lt brn gry,f-med,tr crs,mod srt,sbang- sbrnd,wk sil cmt,mnr wh arg mtx, fri aggs,fr inf por,fluor. (4099) 74 / 7 / 5 / 6 / 8 381 U
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.8 | 33 |
| RES_DEEP (ohm.m) | 22.15 | 33 |
| RES_SHALLOW (ohm.m) | 17.46 | 33 |

---

### 1695 m MD — Interval 1692.5 – 1697.5 m

**Sample Description (spreadsheet):** Sample 1695m: 100% Sandstone (litho ASCII aggregate) TG 218.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri wh blmng cut |
| Total Gas | 218.45294117647057 U |
| mTVDss | -1197.14 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1686m: trnsl,clr,v lt brn gry,f-med,tr crs,mod srt,sbang- sbrnd,wk sil cmt,mnr wh arg mtx, fri aggs,fr inf por,fluor. (4099) 74 / 7 / 5 / 6 / 8 381 U
- **SANDSTONE** @ ~1692m: trnsl,clr,v lt brn gry,pred med qtz,mod srt,sbang- sbrnd,wk sil cmt,mnr wh arg mtx, fri aggs,fr inf por,fluor. 73 / 7 / 5 / 7 / 8 233U
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.4 | 33 |
| RES_DEEP (ohm.m) | 22.13 | 33 |
| RES_SHALLOW (ohm.m) | 17.84 | 33 |

---

### 1700 m MD — Interval 1697.5 – 1702.5 m

**Sample Description (spreadsheet):** Sample 1700m: 100% Sandstone (litho ASCII aggregate) TG 216.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel grn evn |
| Total Gas | 216.78125 U |
| mTVDss | -1197.23 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1686m: trnsl,clr,v lt brn gry,f-med,tr crs,mod srt,sbang- sbrnd,wk sil cmt,mnr wh arg mtx, fri aggs,fr inf por,fluor. (4099) 74 / 7 / 5 / 6 / 8 381 U
- **SANDSTONE** @ ~1692m: trnsl,clr,v lt brn gry,pred med qtz,mod srt,sbang- sbrnd,wk sil cmt,mnr wh arg mtx, fri aggs,fr inf por,fluor. 73 / 7 / 5 / 7 / 8 233U
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.0 | 33 |
| RES_DEEP (ohm.m) | 19.74 | 33 |
| RES_SHALLOW (ohm.m) | 16.04 | 33 |

---

### 1705 m MD — Interval 1702.5 – 1707.5 m

**Sample Description (spreadsheet):** Sample 1705m: 100% Sandstone (litho ASCII aggregate) TG 196.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel grn evn |
| Total Gas | 196.36470588235292 U |
| mTVDss | -1197.32 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1692m: trnsl,clr,v lt brn gry,pred med qtz,mod srt,sbang- sbrnd,wk sil cmt,mnr wh arg mtx, fri aggs,fr inf por,fluor. 73 / 7 / 5 / 7 / 8 233U
- **SANDSTONE** @ ~1695m: trnsl,clr,v lt brn, dom med-crs grs,f aggs,pr-mod
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.5 | 33 |
| RES_DEEP (ohm.m) | 19.36 | 33 |
| RES_SHALLOW (ohm.m) | 14.92 | 33 |

---

### 1710 m MD — Interval 1707.5 – 1712.5 m

**Sample Description (spreadsheet):** Sample 1710m: 100% Sandstone (litho ASCII aggregate) TG 159.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel grn evn |
| Total Gas | 159.4875 U |
| mTVDss | -1197.41 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1695m: trnsl,clr,v lt brn, dom med-crs grs,f aggs,pr-mod
- **SANDSTONE** @ ~1704m: v lt brn,trnsl,clr, dom vf-f,med crs grs,mod srt, sbrnd-sbang,wk sil cmt,com lt brn arg mtx,tr mic,mnr qtz ovgths,fri aggs, 0 0.5 1 4 14 5600 cln lse grs,fr-gd inf & fr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.3 | 32 |
| RES_DEEP (ohm.m) | 19.22 | 32 |
| RES_SHALLOW (ohm.m) | 15.97 | 32 |

---

### 1715 m MD — Interval 1712.5 – 1717.5 m

**Sample Description (spreadsheet):** Sample 1715m: 100% Sandstone (litho ASCII aggregate) TG 131.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel grn evn |
| Total Gas | 130.95625 U |
| mTVDss | -1197.50 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1704m: v lt brn,trnsl,clr, dom vf-f,med crs grs,mod srt, sbrnd-sbang,wk sil cmt,com lt brn arg mtx,tr mic,mnr qtz ovgths,fri aggs, 0 0.5 1 4 14 5600 cln lse grs,fr-gd inf & fr vis por,fluor.
- **SANDSTONE** @ ~1710m: lt brn,trnsl,clr,vf-f, tr crs grs,mod wl srt,sbrnd-sbang, 5620 wk sil cmt,pl brn arg mtx,tr carb micrlams,tr mic,fri aggs,fr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.8 | 33 |
| RES_DEEP (ohm.m) | 18.87 | 33 |
| RES_SHALLOW (ohm.m) | 15.60 | 33 |

---

### 1720 m MD — Interval 1717.5 – 1722.5 m

**Sample Description (spreadsheet):** Sample 1720m: 100% Sandstone (litho ASCII aggregate) TG 102.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel grn evn |
| Total Gas | 102.86470588235295 U |
| mTVDss | -1197.59 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1704m: v lt brn,trnsl,clr, dom vf-f,med crs grs,mod srt, sbrnd-sbang,wk sil cmt,com lt brn arg mtx,tr mic,mnr qtz ovgths,fri aggs, 0 0.5 1 4 14 5600 cln lse grs,fr-gd inf & fr vis por,fluor.
- **SANDSTONE** @ ~1710m: lt brn,trnsl,clr,vf-f, tr crs grs,mod wl srt,sbrnd-sbang, 5620 wk sil cmt,pl brn arg mtx,tr carb micrlams,tr mic,fri aggs,fr vis por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.2 | 33 |
| RES_DEEP (ohm.m) | 19.49 | 33 |
| RES_SHALLOW (ohm.m) | 15.49 | 33 |

---

### 1725 m MD — Interval 1722.5 – 1727.5 m

**Sample Description (spreadsheet):** Sample 1725m: 100% Sandstone (litho ASCII aggregate) TG 78.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel grn evn |
| Total Gas | 78.80625 U |
| mTVDss | -1197.65 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1710m: lt brn,trnsl,clr,vf-f, tr crs grs,mod wl srt,sbrnd-sbang, 5620 wk sil cmt,pl brn arg mtx,tr carb micrlams,tr mic,fri aggs,fr vis por,fluor.
- **SANDSTONE** @ ~1719m: lt brn,trnsl,clr,vf-f, tr crs grs,mod wl srt,sbrnd-sbang, wk sil cmt,pl brn arg mtx,tr carb micrlams,tr mic,fri aggs,fr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.8 | 33 |
| RES_DEEP (ohm.m) | 19.15 | 33 |
| RES_SHALLOW (ohm.m) | 16.14 | 33 |

---

### 1730 m MD — Interval 1727.5 – 1732.5 m

**Sample Description (spreadsheet):** Sample 1730m: 100% Sandstone (litho ASCII aggregate) TG 72.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel grn evn |
| Total Gas | 72.63529411764706 U |
| mTVDss | -1197.59 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1719m: lt brn,trnsl,clr,vf-f, tr crs grs,mod wl srt,sbrnd-sbang, wk sil cmt,pl brn arg mtx,tr carb micrlams,tr mic,fri aggs,fr vis por,fluor.
- **SANDSTONE** @ ~1725m: lt brn,clr,trnsl, f-vf,rr med,mod wl srt,sbrnd- 13-11-2017 sbang,wk-occ mod strg sil cmt, mod abdt lt brn arg mtx,rr carb spks, 5670 tr carb micrlams,pred fri-occ mod
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.9 | 33 |
| RES_DEEP (ohm.m) | 19.26 | 33 |
| RES_SHALLOW (ohm.m) | 15.85 | 33 |

---

### 1735 m MD — Interval 1732.5 – 1737.5 m

**Sample Description (spreadsheet):** Sample 1735m: 100% Sandstone (litho ASCII aggregate) TG 76.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel grn evn |
| Total Gas | 76.30000000000001 U |
| mTVDss | -1197.54 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1719m: lt brn,trnsl,clr,vf-f, tr crs grs,mod wl srt,sbrnd-sbang, wk sil cmt,pl brn arg mtx,tr carb micrlams,tr mic,fri aggs,fr vis por,fluor.
- **SANDSTONE** @ ~1725m: lt brn,clr,trnsl, f-vf,rr med,mod wl srt,sbrnd- 13-11-2017 sbang,wk-occ mod strg sil cmt, mod abdt lt brn arg mtx,rr carb spks, 5670 tr carb micrlams,pred fri-occ mod
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.1 | 32 |
| RES_DEEP (ohm.m) | 19.70 | 32 |
| RES_SHALLOW (ohm.m) | 15.68 | 32 |

---

### 1740 m MD — Interval 1737.5 – 1742.5 m

**Sample Description (spreadsheet):** Sample 1740m: 100% Sandstone (litho ASCII aggregate) TG 68.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel grn evn |
| Total Gas | 68.90625 U |
| mTVDss | -1197.48 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1725m: lt brn,clr,trnsl, f-vf,rr med,mod wl srt,sbrnd- 13-11-2017 sbang,wk-occ mod strg sil cmt, mod abdt lt brn arg mtx,rr carb spks, 5670 tr carb micrlams,pred fri-occ mod
- **SANDSTONE** @ ~1731m: lt brnsh gry,tr off wh,clr,trnsl,f-vf,rr med,mod wl srt, sbrnd-sbang,wk-occ mod strg sil cmt,mod abdt lt brnsh gry arg mtx,tr off wh arg mtx,rr carb spks & liths,
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.0 | 33 |
| RES_DEEP (ohm.m) | 20.66 | 33 |
| RES_SHALLOW (ohm.m) | 16.43 | 33 |

---

### 1745 m MD — Interval 1742.5 – 1747.5 m

**Sample Description (spreadsheet):** Sample 1745m: 100% Sandstone (litho ASCII aggregate) TG 81.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel grn evn |
| Total Gas | 81.60000000000001 U |
| mTVDss | -1197.43 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1731m: lt brnsh gry,tr off wh,clr,trnsl,f-vf,rr med,mod wl srt, sbrnd-sbang,wk-occ mod strg sil cmt,mod abdt lt brnsh gry arg mtx,tr off wh arg mtx,rr carb spks & liths,
- **SILTSTONE** @ ~1734m: lt-med gry,lt brnsh FLW:496-547 gpm gry,aren,grd to & intbd w/ vf SST, tr carb spks,tr micmic,mod hd, 5710 blky-sbblky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.2 | 33 |
| RES_DEEP (ohm.m) | 20.78 | 33 |
| RES_SHALLOW (ohm.m) | 16.57 | 33 |

---

### 1750 m MD — Interval 1747.5 – 1752.5 m

**Sample Description (spreadsheet):** Sample 1750m: 100% Sandstone (litho ASCII aggregate) TG 118.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel grn evn |
| Total Gas | 118.9 U |
| mTVDss | -1197.37 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1734m: lt-med gry,lt brnsh FLW:496-547 gpm gry,aren,grd to & intbd w/ vf SST, tr carb spks,tr micmic,mod hd, 5710 blky-sbblky.
- **SANDSTONE** @ ~1743m: lt brnsh gry,clr, trnsl,f-vf,wl srt,mod strg sil cmt, mod abdt lt brnsh gry arg mtx,rr carb spks & micrlams,tr mica flks,mod hd 68 / 5 / 5 / 8 / 14 109 U aggs,pr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.5 | 33 |
| RES_DEEP (ohm.m) | 21.32 | 33 |
| RES_SHALLOW (ohm.m) | 16.79 | 33 |

---

### 1755 m MD — Interval 1752.5 – 1757.5 m

**Sample Description (spreadsheet):** Sample 1755m: 100% Sandstone (litho ASCII aggregate) TG 139.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel grn evn |
| Total Gas | 139.0529411764706 U |
| mTVDss | -1197.29 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1743m: lt brnsh gry,clr, trnsl,f-vf,wl srt,mod strg sil cmt, mod abdt lt brnsh gry arg mtx,rr carb spks & micrlams,tr mica flks,mod hd 68 / 5 / 5 / 8 / 14 109 U aggs,pr vis por,fluor.
- **SANDSTONE** @ ~1750m: lt brnsh gry,clr, trnsl,f-vf,tr med,wl srt,mod strg sil cmt,mod abdt lt brnsh gry arg mtx,rr carb spks & micrlams,tr mica flks, 62 / 5 / 5 / 10 / 18 146 U
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.7 | 33 |
| RES_DEEP (ohm.m) | 21.27 | 33 |
| RES_SHALLOW (ohm.m) | 16.13 | 33 |

---

### 1760 m MD — Interval 1757.5 – 1762.5 m

**Sample Description (spreadsheet):** Sample 1760m: 100% Sandstone (litho ASCII aggregate) TG 157.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel grn evn |
| Total Gas | 157.59375 U |
| mTVDss | -1197.19 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1743m: lt brnsh gry,clr, trnsl,f-vf,wl srt,mod strg sil cmt, mod abdt lt brnsh gry arg mtx,rr carb spks & micrlams,tr mica flks,mod hd 68 / 5 / 5 / 8 / 14 109 U aggs,pr vis por,fluor.
- **SANDSTONE** @ ~1750m: lt brnsh gry,clr, trnsl,f-vf,tr med,wl srt,mod strg sil cmt,mod abdt lt brnsh gry arg mtx,rr carb spks & micrlams,tr mica flks, 62 / 5 / 5 / 10 / 18 146 U
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.0 | 32 |
| RES_DEEP (ohm.m) | 22.20 | 32 |
| RES_SHALLOW (ohm.m) | 17.08 | 32 |

---

### 1765 m MD — Interval 1762.5 – 1767.5 m

**Sample Description (spreadsheet):** Sample 1765m: 100% Sandstone (litho ASCII aggregate) TG 122.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel grn evn |
| Total Gas | 122.45625000000001 U |
| mTVDss | -1197.09 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1750m: lt brnsh gry,clr, trnsl,f-vf,tr med,wl srt,mod strg sil cmt,mod abdt lt brnsh gry arg mtx,rr carb spks & micrlams,tr mica flks, 62 / 5 / 5 / 10 / 18 146 U
- **SANDSTONE** @ ~1756m: lt brnsh gry,lt 5770 gry,clr,trnsl,f-vf,mod wl srt,sbrnd- sbang,wk sil cmt,mod abdt lt brnsh gry-lt gry arg mtx,occ mica flks,mnr 69 / 6 / 5 / 7 / 13 170 U carb spks & micrlams,fri aggs,pr vis
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.1 | 33 |
| RES_DEEP (ohm.m) | 23.42 | 33 |
| RES_SHALLOW (ohm.m) | 18.49 | 33 |

---

### 1770 m MD — Interval 1767.5 – 1772.5 m

**Sample Description (spreadsheet):** Sample 1770m: 100% Sandstone (litho ASCII aggregate) TG 136.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri thn r/r |
| Total Gas | 136.54117647058823 U |
| mTVDss | -1196.98 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1756m: lt brnsh gry,lt 5770 gry,clr,trnsl,f-vf,mod wl srt,sbrnd- sbang,wk sil cmt,mod abdt lt brnsh gry-lt gry arg mtx,occ mica flks,mnr 69 / 6 / 5 / 7 / 13 170 U carb spks & micrlams,fri aggs,pr vis
- **SANDSTONE** @ ~1762m: v lt brnsh gry,tr
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.5 | 33 |
| RES_DEEP (ohm.m) | 23.37 | 33 |
| RES_SHALLOW (ohm.m) | 19.07 | 33 |

---

### 1775 m MD — Interval 1772.5 – 1777.5 m

**Sample Description (spreadsheet):** Sample 1775m: 100% Sandstone (litho ASCII aggregate) TG 131.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri thn r/r |
| Total Gas | 131.575 U |
| mTVDss | -1196.88 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1762m: v lt brnsh gry,tr
- **SANDSTONE** @ ~1771m: v lt brn,lt brnsh
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.7 | 33 |
| RES_DEEP (ohm.m) | 21.99 | 33 |
| RES_SHALLOW (ohm.m) | 15.80 | 33 |

---

### 1780 m MD — Interval 1777.5 – 1782.5 m

**Sample Description (spreadsheet):** Sample 1780m: 100% Sandstone (litho ASCII aggregate) TG 108.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri thn r/r |
| Total Gas | 108.31764705882352 U |
| mTVDss | -1196.78 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1771m: v lt brn,lt brnsh
- **SILTSTONE** @ ~1780m: med dk gry,aren, FLW:270-557 gpm
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.7 | 33 |
| RES_DEEP (ohm.m) | 22.55 | 33 |
| RES_SHALLOW (ohm.m) | 17.13 | 33 |

---

### 1785 m MD — Interval 1782.5 – 1787.5 m

**Sample Description (spreadsheet):** Sample 1785m: 100% Sandstone (litho ASCII aggregate) TG 103.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | uncons (0.85) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri thn r/r |
| Total Gas | 103.31875 U |
| mTVDss | -1196.67 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1771m: v lt brn,lt brnsh
- **SILTSTONE** @ ~1780m: med dk gry,aren, FLW:270-557 gpm
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.9 | 33 |
| RES_DEEP (ohm.m) | 21.34 | 33 |
| RES_SHALLOW (ohm.m) | 16.70 | 33 |

---

### 1790 m MD — Interval 1787.5 – 1792.5 m

**Sample Description (spreadsheet):** Sample 1790m: 100% Sandstone (litho ASCII aggregate) TG 109.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | uncons (0.85) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel/grn |
| Total Gas | 109.79374999999999 U |
| mTVDss | -1196.57 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1780m: med dk gry,aren, FLW:270-557 gpm
- **SANDSTONE** @ ~1786m: off wh,wh,trnsl, clr,f-crs,pr srt,sbang-sbrnd,wk sil cmt,tr wh arg mtx,tr liths,tr carb spks,fri-pred lse,fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.9 | 32 |
| RES_DEEP (ohm.m) | 22.10 | 32 |
| RES_SHALLOW (ohm.m) | 18.77 | 32 |

---

### 1795 m MD — Interval 1792.5 – 1797.5 m

**Sample Description (spreadsheet):** Sample 1795m: 100% Sandstone (litho ASCII aggregate) TG 145.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | uncons (0.85) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel/grn |
| Total Gas | 145.36470588235295 U |
| mTVDss | -1196.47 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1780m: med dk gry,aren, FLW:270-557 gpm
- **SANDSTONE** @ ~1786m: off wh,wh,trnsl, clr,f-crs,pr srt,sbang-sbrnd,wk sil cmt,tr wh arg mtx,tr liths,tr carb spks,fri-pred lse,fr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.3 | 33 |
| RES_DEEP (ohm.m) | 21.57 | 33 |
| RES_SHALLOW (ohm.m) | 18.58 | 33 |

---

### 1800 m MD — Interval 1797.5 – 1802.5 m

**Sample Description (spreadsheet):** Sample 1800m: 100% Sandstone (litho ASCII aggregate) TG 224.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | uncons (0.85) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel/grn |
| Total Gas | 224.075 U |
| mTVDss | -1196.37 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1786m: off wh,wh,trnsl, clr,f-crs,pr srt,sbang-sbrnd,wk sil cmt,tr wh arg mtx,tr liths,tr carb spks,fri-pred lse,fr inf por,fluor.
- **SANDSTONE** @ ~1792m: trnsl,clr,f-crs, pr srt,sbang-pred sbrnd,tr sil cmt, tr wh arg mtx,pred lse qtz grs,gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.6 | 33 |
| RES_DEEP (ohm.m) | 20.20 | 33 |
| RES_SHALLOW (ohm.m) | 16.76 | 33 |

---

### 1805 m MD — Interval 1802.5 – 1807.5 m

**Sample Description (spreadsheet):** Sample 1805m: 100% Sandstone (litho ASCII aggregate) TG 367.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | uncons (0.85) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel/grn |
| Total Gas | 367.8176470588235 U |
| mTVDss | -1196.27 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1792m: trnsl,clr,f-crs, pr srt,sbang-pred sbrnd,tr sil cmt, tr wh arg mtx,pred lse qtz grs,gd inf por,fluor.
- **SANDSTONE** @ ~1798m: trnsl,clr,v lt 5910 brn,f-crs,pred med,sbang-sbrnd, mod srt,wk sil cmt,rr off wh arg mtx,fri-lse,fr inf por,fluor. 66 / 7 / 6 / 9 / 12 443 U
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.0 | 33 |
| RES_DEEP (ohm.m) | 20.43 | 33 |
| RES_SHALLOW (ohm.m) | 17.99 | 33 |

---

### 1810 m MD — Interval 1807.5 – 1812.5 m

**Sample Description (spreadsheet):** Sample 1810m: 100% Sandstone (litho ASCII aggregate) TG 341.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | uncons (0.85) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel/grn |
| Total Gas | 340.96875 U |
| mTVDss | -1196.17 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1798m: trnsl,clr,v lt 5910 brn,f-crs,pred med,sbang-sbrnd, mod srt,wk sil cmt,rr off wh arg mtx,fri-lse,fr inf por,fluor. 66 / 7 / 6 / 9 / 12 443 U
- **SILTSTONE** @ ~1804m: med dk gry,aren, tr carb incl,tr micmic,mod hd, ROP RESTRICTED 5930 blky-sbblky. TO 50 ft/hr WHILE REPAIRING
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.5 | 33 |
| RES_DEEP (ohm.m) | 21.45 | 33 |
| RES_SHALLOW (ohm.m) | 18.37 | 33 |

---

### 1815 m MD — Interval 1812.5 – 1817.5 m

**Sample Description (spreadsheet):** Sample 1815m: 100% Sandstone (litho ASCII aggregate) TG 331.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | uncons (0.85) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel/grn |
| Total Gas | 331.71875 U |
| mTVDss | -1196.05 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1798m: trnsl,clr,v lt 5910 brn,f-crs,pred med,sbang-sbrnd, mod srt,wk sil cmt,rr off wh arg mtx,fri-lse,fr inf por,fluor. 66 / 7 / 6 / 9 / 12 443 U
- **SILTSTONE** @ ~1804m: med dk gry,aren, tr carb incl,tr micmic,mod hd, ROP RESTRICTED 5930 blky-sbblky. TO 50 ft/hr WHILE REPAIRING
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.3 | 32 |
| RES_DEEP (ohm.m) | 21.57 | 32 |
| RES_SHALLOW (ohm.m) | 17.29 | 32 |

---

### 1820 m MD — Interval 1817.5 – 1822.5 m

**Sample Description (spreadsheet):** Sample 1820m: 100% Sandstone (litho ASCII aggregate) TG 337.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel/grn |
| Total Gas | 337.72941176470584 U |
| mTVDss | -1195.93 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1804m: med dk gry,aren, tr carb incl,tr micmic,mod hd, ROP RESTRICTED 5930 blky-sbblky. TO 50 ft/hr WHILE REPAIRING
- **SANDSTONE** @ ~1811m: 21 SANDSTONE:v lt brn,trnsl, Gel:9/11/12 clr i/p,f-occ med,mod wl srt, WL:6 sbang-sbrnd,wk sil cmt,mnr Sol:8.5 off wh-lt brn arg mtx,fri,pr-fr pH:9.6 5960 vis por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.5 | 33 |
| RES_DEEP (ohm.m) | 22.39 | 33 |
| RES_SHALLOW (ohm.m) | 17.09 | 33 |

---

### 1825 m MD — Interval 1822.5 – 1827.5 m

**Sample Description (spreadsheet):** Sample 1825m: 100% Sandstone (litho ASCII aggregate) TG 308.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel/grn |
| Total Gas | 308.225 U |
| mTVDss | -1195.81 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1811m: 21 SANDSTONE:v lt brn,trnsl, Gel:9/11/12 clr i/p,f-occ med,mod wl srt, WL:6 sbang-sbrnd,wk sil cmt,mnr Sol:8.5 off wh-lt brn arg mtx,fri,pr-fr pH:9.6 5960 vis por,fluor.
- **SANDSTONE** @ ~1820m: v lt brn,trnsl, clr i/p,f-occ med,rr crs,mod 5980 wl srt,sbang-sbrnd,wk sil cmt, mnr off wh-lt brn arg mtx,fri, pr-fr vis por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.8 | 33 |
| RES_DEEP (ohm.m) | 22.06 | 33 |
| RES_SHALLOW (ohm.m) | 16.17 | 33 |

---

### 1830 m MD — Interval 1827.5 – 1832.5 m

**Sample Description (spreadsheet):** Sample 1830m: 100% Sandstone (litho ASCII aggregate) TG 324.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel/grn |
| Total Gas | 324.74705882352947 U |
| mTVDss | -1195.69 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1820m: v lt brn,trnsl, clr i/p,f-occ med,rr crs,mod 5980 wl srt,sbang-sbrnd,wk sil cmt, mnr off wh-lt brn arg mtx,fri, pr-fr vis por,fluor.
- **SILTSTONE** @ ~1826m: med dk gry,aren, tr carb incl,tr micmic,mod hd, blky-sbblky. 67 / 6 / 5 / 9 / 13 341 U
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.7 | 33 |
| RES_DEEP (ohm.m) | 21.44 | 33 |
| RES_SHALLOW (ohm.m) | 16.52 | 33 |

---

### 1835 m MD — Interval 1832.5 – 1837.5 m

**Sample Description (spreadsheet):** Sample 1835m: 100% Sandstone (litho ASCII aggregate) TG 334.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel/grn evn |
| Total Gas | 334.82500000000005 U |
| mTVDss | -1195.57 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1820m: v lt brn,trnsl, clr i/p,f-occ med,rr crs,mod 5980 wl srt,sbang-sbrnd,wk sil cmt, mnr off wh-lt brn arg mtx,fri, pr-fr vis por,fluor.
- **SILTSTONE** @ ~1826m: med dk gry,aren, tr carb incl,tr micmic,mod hd, blky-sbblky. 67 / 6 / 5 / 9 / 13 341 U
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.9 | 33 |
| RES_DEEP (ohm.m) | 22.41 | 33 |
| RES_SHALLOW (ohm.m) | 18.14 | 33 |

---

### 1840 m MD — Interval 1837.5 – 1842.5 m

**Sample Description (spreadsheet):** Sample 1840m: 100% Sandstone (litho ASCII aggregate) TG 387.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel/grn evn |
| Total Gas | 387.80625 U |
| mTVDss | -1195.44 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1826m: med dk gry,aren, tr carb incl,tr micmic,mod hd, blky-sbblky. 67 / 6 / 5 / 9 / 13 341 U
- **SANDSTONE** @ ~1826m: v lt brn,trnsl, 14 18 28 clr i/p,f-occ med,tr crs,mod wl srt,sbang-sbrnd,wk sil cmt, mnr off wh-lt brn arg mtx,fri, pr-fr vis por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.3 | 32 |
| RES_DEEP (ohm.m) | 26.20 | 32 |
| RES_SHALLOW (ohm.m) | 20.99 | 32 |

---

### 1845 m MD — Interval 1842.5 – 1847.5 m

**Sample Description (spreadsheet):** Sample 1845m: 100% Sandstone (litho ASCII aggregate) TG 378.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | uncons (0.85) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel/grn evn |
| Total Gas | 378.55882352941177 U |
| mTVDss | -1195.31 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1835m: v lt brn,trnsl, clr i/p,f,bec med i/p,tr crs,mod wl srt,sbang-sbrnd,wk sil cmt, mnr off wh-lt brn arg mtx,fri, 6030 pr-fr vis por,fluor.
- **SANDSTONE** @ ~1841m: v lt brn,trnsl, clr i/p,f-med,tr crs,fr srt,sbang- sbrnd,wk sil cmt,mnr off wh-lt brn 6050 arg mtx,fri,pr-fr vis por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.9 | 33 |
| RES_DEEP (ohm.m) | 26.20 | 33 |
| RES_SHALLOW (ohm.m) | 20.99 | 33 |

---

### 1850 m MD — Interval 1847.5 – 1852.5 m

**Sample Description (spreadsheet):** Sample 1850m: 100% Sandstone (litho ASCII aggregate) TG 406.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | uncons (0.85) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel/grn evn |
| Total Gas | 406.03125 U |
| mTVDss | -1195.18 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1835m: v lt brn,trnsl, clr i/p,f,bec med i/p,tr crs,mod wl srt,sbang-sbrnd,wk sil cmt, mnr off wh-lt brn arg mtx,fri, 6030 pr-fr vis por,fluor.
- **SANDSTONE** @ ~1841m: v lt brn,trnsl, clr i/p,f-med,tr crs,fr srt,sbang- sbrnd,wk sil cmt,mnr off wh-lt brn 6050 arg mtx,fri,pr-fr vis por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.3 | 33 |
| RES_DEEP (ohm.m) | 28.28 | 33 |
| RES_SHALLOW (ohm.m) | 19.46 | 33 |

---

### 1855 m MD — Interval 1852.5 – 1857.5 m

**Sample Description (spreadsheet):** Sample 1855m: 100% Sandstone (litho ASCII aggregate) TG 328.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | uncons (0.85) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel/grn evn |
| Total Gas | 328.7882352941176 U |
| mTVDss | -1195.05 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1841m: v lt brn,trnsl, clr i/p,f-med,tr crs,fr srt,sbang- sbrnd,wk sil cmt,mnr off wh-lt brn 6050 arg mtx,fri,pr-fr vis por,fluor.
- **SANDSTONE** @ ~1847m: v lt brn,clr,trnsl, f-mede,tr crs,mod wl srt,sbang- sbrnd,wk sil cmt,rr v lt brn arg mtx, rr mica flks,fri aggs,pr-fr vis por, no fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.5 | 33 |
| RES_DEEP (ohm.m) | 28.91 | 33 |
| RES_SHALLOW (ohm.m) | 17.68 | 33 |

---

### 1875 m MD — Interval 1872.5 – 1877.5 m

**Sample Description (spreadsheet):** Sample 1875m: 100% Sandstone (litho ASCII aggregate) TG 214.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | uncons (0.85) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 40.0% mod bri yel grn sptd-ptchy |
| Total Gas | 214.73125 U |
| mTVDss | -1194.60 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1859m: lt gry,med gry i/p, aren,tr f carb spks,mod hd,sbblky- 6110 blky.
- **SANDSTONE** @ ~1862m: v lt brn,trnsl, clr,f-med,tr crs,fr srt,sbang- 6120 sbrnd,wk sil cmt,rr v lt brn arg mtx,tr micmic,fri-lse,fr vis por, fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.3 | 33 |
| RES_DEEP (ohm.m) | 30.41 | 33 |
| RES_SHALLOW (ohm.m) | 20.29 | 33 |

---

### 1880 m MD — Interval 1877.5 – 1882.5 m

**Sample Description (spreadsheet):** Sample 1880m: 100% Sandstone (litho ASCII aggregate) TG 288.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | uncons (0.85) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 40.0% mod bri yel grn sptd-ptchy |
| Total Gas | 288.72941176470584 U |
| mTVDss | -1194.54 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1875m: trnsl,clr,v lt brn, f-crs,pred med,pr-fr srt,sbang- sbrnd,wk sil cmt,rr lt brn arg 6160 mtx,fri-lse,fr vis por,fluor. 71 / 6 / 4 / 7 / 12 352 U
- **SANDSTONE** @ ~1881m: trnsl,clr,v lt brn,f- crs,pred med,pr-fr srt,sbang- sbrnd,wk sil cmt,rr lt brn arg mtx, 6180 fri-lse,fr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.2 | 33 |
| RES_DEEP (ohm.m) | 33.38 | 33 |
| RES_SHALLOW (ohm.m) | 20.02 | 33 |

---

### 1885 m MD — Interval 1882.5 – 1887.5 m

**Sample Description (spreadsheet):** Sample 1885m: 100% Sandstone (litho ASCII aggregate) TG 344.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | uncons (0.85) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 40.0% mod bri yel grn sptd-ptchy |
| Total Gas | 344.86875 U |
| mTVDss | -1194.47 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1875m: trnsl,clr,v lt brn, f-crs,pred med,pr-fr srt,sbang- sbrnd,wk sil cmt,rr lt brn arg 6160 mtx,fri-lse,fr vis por,fluor. 71 / 6 / 4 / 7 / 12 352 U
- **SANDSTONE** @ ~1881m: trnsl,clr,v lt brn,f- crs,pred med,pr-fr srt,sbang- sbrnd,wk sil cmt,rr lt brn arg mtx, 6180 fri-lse,fr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.9 | 33 |
| RES_DEEP (ohm.m) | 30.88 | 33 |
| RES_SHALLOW (ohm.m) | 19.83 | 33 |

---

### 1890 m MD — Interval 1887.5 – 1892.5 m

**Sample Description (spreadsheet):** Sample 1890m: 100% Sandstone (litho ASCII aggregate) TG 378.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | uncons (0.85) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel grn sptd-ptchy |
| Total Gas | 378.05 U |
| mTVDss | -1194.40 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1875m: trnsl,clr,v lt brn, f-crs,pred med,pr-fr srt,sbang- sbrnd,wk sil cmt,rr lt brn arg 6160 mtx,fri-lse,fr vis por,fluor. 71 / 6 / 4 / 7 / 12 352 U
- **SANDSTONE** @ ~1881m: trnsl,clr,v lt brn,f- crs,pred med,pr-fr srt,sbang- sbrnd,wk sil cmt,rr lt brn arg mtx, 6180 fri-lse,fr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.4 | 32 |
| RES_DEEP (ohm.m) | 29.12 | 32 |
| RES_SHALLOW (ohm.m) | 20.57 | 32 |

---

### 1895 m MD — Interval 1892.5 – 1897.5 m

**Sample Description (spreadsheet):** Sample 1895m: 100% Sandstone (litho ASCII aggregate) TG 416.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | uncons (0.85) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel grn sptd-ptchy |
| Total Gas | 416.3411764705882 U |
| mTVDss | -1194.33 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1881m: trnsl,clr,v lt brn,f- crs,pred med,pr-fr srt,sbang- sbrnd,wk sil cmt,rr lt brn arg mtx, 6180 fri-lse,fr vis por,fluor.
- **SANDSTONE** @ ~1887m: v lt brn,trnsl,dom vf- 73 / 6 / 4 / 7 / 10 med,tr crs,mod srt,sbrnd-sbang,wk sil cmt,mnr lt brn arg mtx,fri aggs, lse grs,fr vis & inf por,fluor. 0 0.5 1 4 14 6200
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.8 | 33 |
| RES_DEEP (ohm.m) | 30.48 | 33 |
| RES_SHALLOW (ohm.m) | 22.13 | 33 |

---

### 1900 m MD — Interval 1897.5 – 1902.5 m

**Sample Description (spreadsheet):** Sample 1900m: 100% Sandstone (litho ASCII aggregate) TG 410.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel grn sptd-ptchy |
| Total Gas | 410.18125 U |
| mTVDss | -1194.29 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1887m: v lt brn,trnsl,dom vf- 73 / 6 / 4 / 7 / 10 med,tr crs,mod srt,sbrnd-sbang,wk sil cmt,mnr lt brn arg mtx,fri aggs, lse grs,fr vis & inf por,fluor. 0 0.5 1 4 14 6200
- **SANDSTONE** @ ~1896m: v lt brn,trnsl,dom vf-med,tr crs,mod srt,sbrnd-sbang, 70 / 6 / 5 / 8 / 11 432 U wk sil cmt,mnr lt brn arg mtx,tr mic, fri aggs,lse grs,fr vis & inf por,
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.8 | 33 |
| RES_DEEP (ohm.m) | 33.78 | 33 |
| RES_SHALLOW (ohm.m) | 22.82 | 33 |

---

### 1905 m MD — Interval 1902.5 – 1907.5 m

**Sample Description (spreadsheet):** Sample 1905m: 100% Sandstone (litho ASCII aggregate) TG 408.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% None |
| Total Gas | 408.0764705882353 U |
| mTVDss | -1194.31 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1896m: v lt brn,trnsl,dom vf-med,tr crs,mod srt,sbrnd-sbang, 70 / 6 / 5 / 8 / 11 432 U wk sil cmt,mnr lt brn arg mtx,tr mic, fri aggs,lse grs,fr vis & inf por,
- **SANDSTONE** @ ~1905m: v lt brn,trnsl,dom PV:5 vf-med,tr crs,mod srt,sbrnd-sbang, YP:21 wk sil cmt,mnr lt brn arg mtx,tr mic,
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.3 | 33 |
| RES_DEEP (ohm.m) | 35.59 | 33 |
| RES_SHALLOW (ohm.m) | 20.94 | 33 |

---

### 1910 m MD — Interval 1907.5 – 1912.5 m

**Sample Description (spreadsheet):** Sample 1910m: 100% Sandstone (litho ASCII aggregate) TG 386.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% None |
| Total Gas | 386.51875 U |
| mTVDss | -1194.33 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1896m: v lt brn,trnsl,dom vf-med,tr crs,mod srt,sbrnd-sbang, 70 / 6 / 5 / 8 / 11 432 U wk sil cmt,mnr lt brn arg mtx,tr mic, fri aggs,lse grs,fr vis & inf por,
- **SANDSTONE** @ ~1905m: v lt brn,trnsl,dom PV:5 vf-med,tr crs,mod srt,sbrnd-sbang, YP:21 wk sil cmt,mnr lt brn arg mtx,tr mic,
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.2 | 33 |
| RES_DEEP (ohm.m) | 43.01 | 33 |
| RES_SHALLOW (ohm.m) | 20.70 | 33 |

---

### 1915 m MD — Interval 1912.5 – 1917.5 m

**Sample Description (spreadsheet):** Sample 1915m: 100% Sandstone (litho ASCII aggregate) TG 314.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% None |
| Total Gas | 314.7823529411765 U |
| mTVDss | -1194.35 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1905m: v lt brn,trnsl,dom PV:5 vf-med,tr crs,mod srt,sbrnd-sbang, YP:21 wk sil cmt,mnr lt brn arg mtx,tr mic,
- **SANDSTONE** @ ~1911m: v lt brn,trnsl,clr, 6280 dom vf-f,tr med-crs,mod srt,sbrnd- sbang,wk sil cmt,mnr lt brn arg/ slty mtx,tr qtz grs,tr mic,fri aggs, 65 / 6 / 5 / 9 / 15
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.6 | 33 |
| RES_DEEP (ohm.m) | 37.02 | 33 |
| RES_SHALLOW (ohm.m) | 20.16 | 33 |

---

### 1920 m MD — Interval 1917.5 – 1922.5 m

**Sample Description (spreadsheet):** Sample 1920m: 100% Sandstone (litho ASCII aggregate) TG 357.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% None |
| Total Gas | 357.8125 U |
| mTVDss | -1194.37 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1905m: v lt brn,trnsl,dom PV:5 vf-med,tr crs,mod srt,sbrnd-sbang, YP:21 wk sil cmt,mnr lt brn arg mtx,tr mic,
- **SANDSTONE** @ ~1911m: v lt brn,trnsl,clr, 6280 dom vf-f,tr med-crs,mod srt,sbrnd- sbang,wk sil cmt,mnr lt brn arg/ slty mtx,tr qtz grs,tr mic,fri aggs, 65 / 6 / 5 / 9 / 15
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.4 | 32 |
| RES_DEEP (ohm.m) | 35.81 | 32 |
| RES_SHALLOW (ohm.m) | 21.42 | 32 |

---

### 1925 m MD — Interval 1922.5 – 1927.5 m

**Sample Description (spreadsheet):** Sample 1925m: 100% Sandstone (litho ASCII aggregate) TG 223.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% None |
| Total Gas | 223.45 U |
| mTVDss | -1194.39 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1911m: v lt brn,trnsl,clr, 6280 dom vf-f,tr med-crs,mod srt,sbrnd- sbang,wk sil cmt,mnr lt brn arg/ slty mtx,tr qtz grs,tr mic,fri aggs, 65 / 6 / 5 / 9 / 15
- **SILTSTONE** @ ~1917m: 1087-1214 psi SILTSTONE:med gry,lt-med brnsh FLW:430-457 gpm 6300 gry,aren,tr micro carb spks,mnr micmic,mod hd,sbblky-blky.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.7 | 33 |
| RES_DEEP (ohm.m) | 34.42 | 33 |
| RES_SHALLOW (ohm.m) | 22.27 | 33 |

---

### 1930 m MD — Interval 1927.5 – 1932.5 m

**Sample Description (spreadsheet):** Sample 1930m: 100% Sandstone (litho ASCII aggregate) TG 282.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% None |
| Total Gas | 282.7529411764706 U |
| mTVDss | -1194.43 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1917m: 1087-1214 psi SILTSTONE:med gry,lt-med brnsh FLW:430-457 gpm 6300 gry,aren,tr micro carb spks,mnr micmic,mod hd,sbblky-blky.
- **SANDSTONE** @ ~1923m: v lt brn,trnsl,clr,lt gry, dom vf-f,tr med-crs,mod srt,sbrnd- sbang,wk sil cmt,mnr lt brn arg/ 6320 slty mtx,tr qtz grs,tr mic,fri aggs, lse grs i/p,fr vis & inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.6 | 33 |
| RES_DEEP (ohm.m) | 34.90 | 33 |
| RES_SHALLOW (ohm.m) | 22.87 | 33 |

---

### 1935 m MD — Interval 1932.5 – 1937.5 m

**Sample Description (spreadsheet):** Sample 1935m: 100% Sandstone (litho ASCII aggregate) TG 282.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% None |
| Total Gas | 282.40625 U |
| mTVDss | -1194.49 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1923m: v lt brn,trnsl,clr,lt gry, dom vf-f,tr med-crs,mod srt,sbrnd- sbang,wk sil cmt,mnr lt brn arg/ 6320 slty mtx,tr qtz grs,tr mic,fri aggs, lse grs i/p,fr vis & inf por,fluor.
- **SILTSTONE** @ ~1929m: med gry,med brnsh gry, aren,tr micro carb spks,mod hd-hd, (4091) 6340 sbblky-blky.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.8 | 33 |
| RES_DEEP (ohm.m) | 31.34 | 33 |
| RES_SHALLOW (ohm.m) | 20.43 | 33 |

---

### 1940 m MD — Interval 1937.5 – 1942.5 m

**Sample Description (spreadsheet):** Sample 1940m: 100% Sandstone (litho ASCII aggregate) TG 268.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% None |
| Total Gas | 268.3117647058823 U |
| mTVDss | -1194.55 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1923m: v lt brn,trnsl,clr,lt gry, dom vf-f,tr med-crs,mod srt,sbrnd- sbang,wk sil cmt,mnr lt brn arg/ 6320 slty mtx,tr qtz grs,tr mic,fri aggs, lse grs i/p,fr vis & inf por,fluor.
- **SILTSTONE** @ ~1929m: med gry,med brnsh gry, aren,tr micro carb spks,mod hd-hd, (4091) 6340 sbblky-blky.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.3 | 33 |
| RES_DEEP (ohm.m) | 32.38 | 33 |
| RES_SHALLOW (ohm.m) | 21.72 | 33 |

---

### 1945 m MD — Interval 1942.5 – 1947.5 m

**Sample Description (spreadsheet):** Sample 1945m: 100% Sandstone (litho ASCII aggregate) TG 301.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | mod hd (0.30) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% None |
| Total Gas | 301.5375 U |
| mTVDss | -1194.61 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1929m: med gry,med brnsh gry, aren,tr micro carb spks,mod hd-hd, (4091) 6340 sbblky-blky.
- **SANDSTONE** @ ~1935m: v lt brn,trnsl,clr, 6360 dom vf-f,mnr med-crs,mod srt, 70 / 6 / 4 / 8 / 12 sbang-sbrnd,wk sil cmt,mnr lt brn arg/slty mtx,tr qtz grs,fri, fr vis & inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.7 | 32 |
| RES_DEEP (ohm.m) | 31.82 | 32 |
| RES_SHALLOW (ohm.m) | 21.57 | 32 |

---

### 1950 m MD — Interval 1947.5 – 1952.5 m

**Sample Description (spreadsheet):** Sample 1950m: 100% Sandstone (litho ASCII aggregate) TG 330.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% None |
| Total Gas | 330.2125 U |
| mTVDss | -1194.66 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1935m: v lt brn,trnsl,clr, 6360 dom vf-f,mnr med-crs,mod srt, 70 / 6 / 4 / 8 / 12 sbang-sbrnd,wk sil cmt,mnr lt brn arg/slty mtx,tr qtz grs,fri, fr vis & inf por,fluor.
- **SILTSTONE** @ ~1945m: med gry,med brnsh gry,mod dk gry,aren,tr arg,mnr 6390 micro carb spks,micmic,mod hd, blky-sbblky. 70 / 6 / 4 / 8 / 12
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.3 | 33 |
| RES_DEEP (ohm.m) | 30.83 | 33 |
| RES_SHALLOW (ohm.m) | 21.79 | 33 |

---

### 1955 m MD — Interval 1952.5 – 1957.5 m

**Sample Description (spreadsheet):** Sample 1955m: 100% Sandstone (litho ASCII aggregate) TG 328.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% None |
| Total Gas | 328.3588235294118 U |
| mTVDss | -1194.72 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1945m: med gry,med brnsh gry,mod dk gry,aren,tr arg,mnr 6390 micro carb spks,micmic,mod hd, blky-sbblky. 70 / 6 / 4 / 8 / 12
- **SANDSTONE** @ ~1948m: v lt brn,trnsl,frstd, clr,dom vf-f,tr med-crs,mod srt, 6410 sbrnd-sbang,wk sil cmt,rr lt brn arg/slty mtx,tr mic,mnr qtz ovgths, fri aggs,mnr cln lse grs,fr vis &
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.0 | 33 |
| RES_DEEP (ohm.m) | 29.47 | 33 |
| RES_SHALLOW (ohm.m) | 21.71 | 33 |

---

### 1960 m MD — Interval 1957.5 – 1962.5 m

**Sample Description (spreadsheet):** Sample 1960m: 100% Sandstone (litho ASCII aggregate) TG 232.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% None |
| Total Gas | 232.4875 U |
| mTVDss | -1194.77 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1945m: med gry,med brnsh gry,mod dk gry,aren,tr arg,mnr 6390 micro carb spks,micmic,mod hd, blky-sbblky. 70 / 6 / 4 / 8 / 12
- **SANDSTONE** @ ~1948m: v lt brn,trnsl,frstd, clr,dom vf-f,tr med-crs,mod srt, 6410 sbrnd-sbang,wk sil cmt,rr lt brn arg/slty mtx,tr mic,mnr qtz ovgths, fri aggs,mnr cln lse grs,fr vis &
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.4 | 33 |
| RES_DEEP (ohm.m) | 30.05 | 33 |
| RES_SHALLOW (ohm.m) | 22.86 | 33 |

---

### 1965 m MD — Interval 1962.5 – 1967.5 m

**Sample Description (spreadsheet):** Sample 1965m: 100% Sandstone (litho ASCII aggregate) TG 166.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% None |
| Total Gas | 166.58888888888887 U |
| mTVDss | -1194.82 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1948m: v lt brn,trnsl,frstd, clr,dom vf-f,tr med-crs,mod srt, 6410 sbrnd-sbang,wk sil cmt,rr lt brn arg/slty mtx,tr mic,mnr qtz ovgths, fri aggs,mnr cln lse grs,fr vis &
- **SANDSTONE** @ ~1972m: v lt brn,trnsl,frstd, clr,dom vf-f,mnr med-crs,mod srt, sbrnd-sbang,wk sil cmt,mnr lt brn 72 / 6 / 4 / 7 / 11 465 U arg mtx,tr mic,mnr qtz grs,fri aggs,
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.5 | 33 |
| RES_DEEP (ohm.m) | 29.88 | 33 |
| RES_SHALLOW (ohm.m) | 23.55 | 33 |

---

### 1970 m MD — Interval 1967.5 – 1972.5 m

**Sample Description (spreadsheet):** Sample 1970m: 100% Sandstone (litho ASCII aggregate) TG 344.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% None |
| Total Gas | 344.01874999999995 U |
| mTVDss | -1194.87 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1972m: v lt brn,trnsl,frstd, clr,dom vf-f,mnr med-crs,mod srt, sbrnd-sbang,wk sil cmt,mnr lt brn 72 / 6 / 4 / 7 / 11 465 U arg mtx,tr mic,mnr qtz grs,fri aggs,
- **SANDSTONE** @ ~1981m: v lt brn,trnsl,frstd,clr, dom vf-f,mnr med-crs,mod srt, sbrnd-sbang,wk sil cmt,mnr lt brn arg mtx,tr mic,mnr qtz grs,fri aggs,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.4 | 32 |
| RES_DEEP (ohm.m) | 29.01 | 32 |
| RES_SHALLOW (ohm.m) | 23.72 | 32 |

---

### 1975 m MD — Interval 1972.5 – 1977.5 m

**Sample Description (spreadsheet):** Sample 1975m: 100% Sandstone (litho ASCII aggregate) TG 409.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% None |
| Total Gas | 409.4375 U |
| mTVDss | -1194.91 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1972m: v lt brn,trnsl,frstd, clr,dom vf-f,mnr med-crs,mod srt, sbrnd-sbang,wk sil cmt,mnr lt brn 72 / 6 / 4 / 7 / 11 465 U arg mtx,tr mic,mnr qtz grs,fri aggs,
- **SANDSTONE** @ ~1981m: v lt brn,trnsl,frstd,clr, dom vf-f,mnr med-crs,mod srt, sbrnd-sbang,wk sil cmt,mnr lt brn arg mtx,tr mic,mnr qtz grs,fri aggs,
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.0 | 33 |
| RES_DEEP (ohm.m) | 30.52 | 33 |
| RES_SHALLOW (ohm.m) | 23.39 | 33 |

---

### 1980 m MD — Interval 1977.5 – 1982.5 m

**Sample Description (spreadsheet):** Sample 1980m: 100% Sandstone (litho ASCII aggregate) TG 506.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% None |
| Total Gas | 506.24117647058813 U |
| mTVDss | -1194.96 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1972m: v lt brn,trnsl,frstd, clr,dom vf-f,mnr med-crs,mod srt, sbrnd-sbang,wk sil cmt,mnr lt brn 72 / 6 / 4 / 7 / 11 465 U arg mtx,tr mic,mnr qtz grs,fri aggs,
- **SANDSTONE** @ ~1981m: v lt brn,trnsl,frstd,clr, dom vf-f,mnr med-crs,mod srt, sbrnd-sbang,wk sil cmt,mnr lt brn arg mtx,tr mic,mnr qtz grs,fri aggs,
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.9 | 33 |
| RES_DEEP (ohm.m) | 31.48 | 33 |
| RES_SHALLOW (ohm.m) | 24.20 | 33 |

---

### 1985 m MD — Interval 1982.5 – 1987.5 m

**Sample Description (spreadsheet):** Sample 1985m: 100% Sandstone (litho ASCII aggregate) TG 448.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn |
| Total Gas | 448.7875 U |
| mTVDss | -1195.00 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1972m: v lt brn,trnsl,frstd, clr,dom vf-f,mnr med-crs,mod srt, sbrnd-sbang,wk sil cmt,mnr lt brn 72 / 6 / 4 / 7 / 11 465 U arg mtx,tr mic,mnr qtz grs,fri aggs,
- **SANDSTONE** @ ~1981m: v lt brn,trnsl,frstd,clr, dom vf-f,mnr med-crs,mod srt, sbrnd-sbang,wk sil cmt,mnr lt brn arg mtx,tr mic,mnr qtz grs,fri aggs,
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.6 | 33 |
| RES_DEEP (ohm.m) | 33.38 | 33 |
| RES_SHALLOW (ohm.m) | 26.22 | 33 |

---

### 1990 m MD — Interval 1987.5 – 1992.5 m

**Sample Description (spreadsheet):** Sample 1990m: 100% Sandstone (litho ASCII aggregate) TG 539.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn |
| Total Gas | 539.3705882352942 U |
| mTVDss | -1195.05 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1981m: v lt brn,trnsl,frstd,clr, dom vf-f,mnr med-crs,mod srt, sbrnd-sbang,wk sil cmt,mnr lt brn arg mtx,tr mic,mnr qtz grs,fri aggs,
- **SANDSTONE** @ ~1990m: lt brn,trnsl,clr,dom vf-f,mnr med-crs,mod srt,sbrnd- 73 / 6 / 4 / 7 / 10 597 U sbang,wk sil cmt,mnr lt brn arg mtx,tr v thn intbd SLTST i/p,tr (4093) mic,mnr qtz grs,fri aggs,fr vis
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.5 | 33 |
| RES_DEEP (ohm.m) | 36.54 | 33 |
| RES_SHALLOW (ohm.m) | 26.35 | 33 |

---

### 1995 m MD — Interval 1992.5 – 1997.5 m

**Sample Description (spreadsheet):** Sample 1995m: 100% Sandstone (litho ASCII aggregate) TG 383.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn |
| Total Gas | 383.8875 U |
| mTVDss | -1195.09 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1981m: v lt brn,trnsl,frstd,clr, dom vf-f,mnr med-crs,mod srt, sbrnd-sbang,wk sil cmt,mnr lt brn arg mtx,tr mic,mnr qtz grs,fri aggs,
- **SANDSTONE** @ ~1990m: lt brn,trnsl,clr,dom vf-f,mnr med-crs,mod srt,sbrnd- 73 / 6 / 4 / 7 / 10 597 U sbang,wk sil cmt,mnr lt brn arg mtx,tr v thn intbd SLTST i/p,tr (4093) mic,mnr qtz grs,fri aggs,fr vis
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.5 | 32 |
| RES_DEEP (ohm.m) | 39.30 | 32 |
| RES_SHALLOW (ohm.m) | 26.14 | 32 |

---

### 2000 m MD — Interval 1997.5 – 2002.5 m

**Sample Description (spreadsheet):** Sample 2000m: 100% Sandstone (litho ASCII aggregate) TG 409.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn |
| Total Gas | 409.10625 U |
| mTVDss | -1195.13 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1990m: lt brn,trnsl,clr,dom vf-f,mnr med-crs,mod srt,sbrnd- 73 / 6 / 4 / 7 / 10 597 U sbang,wk sil cmt,mnr lt brn arg mtx,tr v thn intbd SLTST i/p,tr (4093) mic,mnr qtz grs,fri aggs,fr vis
- **SANDSTONE** @ ~1996m: v lt brn,trnsl,frstd, clr,dom vf-f,mnr med-crs,mod srt, sbrnd-sbang,wk sil cmt,mnr lt brn arg mtx,tr mic,mnr qtz grs,fri aggs, 6560 fr vis & inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.4 | 33 |
| RES_DEEP (ohm.m) | 39.45 | 33 |
| RES_SHALLOW (ohm.m) | 25.62 | 33 |

---

### 2005 m MD — Interval 2002.5 – 2007.5 m

**Sample Description (spreadsheet):** Sample 2005m: 100% Sandstone (litho ASCII aggregate) TG 449.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn |
| Total Gas | 449.05882352941177 U |
| mTVDss | -1195.17 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1990m: lt brn,trnsl,clr,dom vf-f,mnr med-crs,mod srt,sbrnd- 73 / 6 / 4 / 7 / 10 597 U sbang,wk sil cmt,mnr lt brn arg mtx,tr v thn intbd SLTST i/p,tr (4093) mic,mnr qtz grs,fri aggs,fr vis
- **SANDSTONE** @ ~1996m: v lt brn,trnsl,frstd, clr,dom vf-f,mnr med-crs,mod srt, sbrnd-sbang,wk sil cmt,mnr lt brn arg mtx,tr mic,mnr qtz grs,fri aggs, 6560 fr vis & inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.9 | 33 |
| RES_DEEP (ohm.m) | 43.95 | 33 |
| RES_SHALLOW (ohm.m) | 26.42 | 33 |

---

### 2010 m MD — Interval 2007.5 – 2012.5 m

**Sample Description (spreadsheet):** Sample 2010m: 100% Sandstone (litho ASCII aggregate) TG 490.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn |
| Total Gas | 490.11875 U |
| mTVDss | -1195.21 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1996m: v lt brn,trnsl,frstd, clr,dom vf-f,mnr med-crs,mod srt, sbrnd-sbang,wk sil cmt,mnr lt brn arg mtx,tr mic,mnr qtz grs,fri aggs, 6560 fr vis & inf por,fluor.
- **SANDSTONE** @ ~2006m: lt brn,trnsl,clr,dom vf-f,mnr med-crs,mod srt,sbrnd- sbang,wk sil cmt,mnr lt brn arg 69 / 6 / 5 / 8 / 12 mtx,tr mic,mnr qtz grs,fri aggs,fr vis & inf por,no fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.1 | 33 |
| RES_DEEP (ohm.m) | 46.42 | 33 |
| RES_SHALLOW (ohm.m) | 26.97 | 33 |

---

### 2015 m MD — Interval 2012.5 – 2017.5 m

**Sample Description (spreadsheet):** Sample 2015m: 100% Sandstone (litho ASCII aggregate) TG 635.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn |
| Total Gas | 634.9941176470588 U |
| mTVDss | -1195.25 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2006m: lt brn,trnsl,clr,dom vf-f,mnr med-crs,mod srt,sbrnd- sbang,wk sil cmt,mnr lt brn arg 69 / 6 / 5 / 8 / 12 mtx,tr mic,mnr qtz grs,fri aggs,fr vis & inf por,no fluor.
- **SANDSTONE** @ ~2015m: 268-544 gpm SANDSTONE:lt brn,trnsl,smky,clr, 6620 frstd,dom f-med,tr crs,mod srt, sbrnd-sbang,wk sil cmt,tr lt brn arg mtx,tr mic,fri aggs,lse grs, fr vis & inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.3 | 33 |
| RES_DEEP (ohm.m) | 48.65 | 33 |
| RES_SHALLOW (ohm.m) | 27.06 | 33 |

---

### 2020 m MD — Interval 2017.5 – 2022.5 m

**Sample Description (spreadsheet):** Sample 2020m: 100% Sandstone (litho ASCII aggregate) TG 403.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn |
| Total Gas | 403.6375 U |
| mTVDss | -1195.31 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2006m: lt brn,trnsl,clr,dom vf-f,mnr med-crs,mod srt,sbrnd- sbang,wk sil cmt,mnr lt brn arg 69 / 6 / 5 / 8 / 12 mtx,tr mic,mnr qtz grs,fri aggs,fr vis & inf por,no fluor.
- **SANDSTONE** @ ~2015m: 268-544 gpm SANDSTONE:lt brn,trnsl,smky,clr, 6620 frstd,dom f-med,tr crs,mod srt, sbrnd-sbang,wk sil cmt,tr lt brn arg mtx,tr mic,fri aggs,lse grs, fr vis & inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.2 | 32 |
| RES_DEEP (ohm.m) | 37.43 | 32 |
| RES_SHALLOW (ohm.m) | 24.55 | 32 |

---

### 2025 m MD — Interval 2022.5 – 2027.5 m

**Sample Description (spreadsheet):** Sample 2025m: 100% Sandstone (litho ASCII aggregate) TG 377.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn |
| Total Gas | 377.55625 U |
| mTVDss | -1195.37 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2015m: 268-544 gpm SANDSTONE:lt brn,trnsl,smky,clr, 6620 frstd,dom f-med,tr crs,mod srt, sbrnd-sbang,wk sil cmt,tr lt brn arg mtx,tr mic,fri aggs,lse grs, fr vis & inf por,fluor.
- **SANDSTONE** @ ~2024m: lt brn,trnsl,smky, clr,frstd,dom f-med,tr crs,mod srt, 6650 sbrnd-sbang,wk sil cmt,tr lt brn 71 / 6 / 4 / 8 / 11 arg mtx,tr mic,fri aggs,lse grs,fr vis & inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.1 | 33 |
| RES_DEEP (ohm.m) | 35.55 | 33 |
| RES_SHALLOW (ohm.m) | 23.46 | 33 |

---

### 2030 m MD — Interval 2027.5 – 2032.5 m

**Sample Description (spreadsheet):** Sample 2030m: 100% Sandstone (litho ASCII aggregate) TG 515.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn |
| Total Gas | 515.8058823529411 U |
| mTVDss | -1195.42 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2015m: 268-544 gpm SANDSTONE:lt brn,trnsl,smky,clr, 6620 frstd,dom f-med,tr crs,mod srt, sbrnd-sbang,wk sil cmt,tr lt brn arg mtx,tr mic,fri aggs,lse grs, fr vis & inf por,fluor.
- **SANDSTONE** @ ~2024m: lt brn,trnsl,smky, clr,frstd,dom f-med,tr crs,mod srt, 6650 sbrnd-sbang,wk sil cmt,tr lt brn 71 / 6 / 4 / 8 / 11 arg mtx,tr mic,fri aggs,lse grs,fr vis & inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.7 | 33 |
| RES_DEEP (ohm.m) | 34.95 | 33 |
| RES_SHALLOW (ohm.m) | 23.81 | 33 |

---

### 2035 m MD — Interval 2032.5 – 2037.5 m

**Sample Description (spreadsheet):** Sample 2035m: 100% Sandstone (litho ASCII aggregate) TG 543.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn |
| Total Gas | 543.5062499999999 U |
| mTVDss | -1195.48 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2024m: lt brn,trnsl,smky, clr,frstd,dom f-med,tr crs,mod srt, 6650 sbrnd-sbang,wk sil cmt,tr lt brn 71 / 6 / 4 / 8 / 11 arg mtx,tr mic,fri aggs,lse grs,fr vis & inf por,fluor.
- **SANDSTONE** @ ~2033m: lt brn,trnsl,clr,med 6680 gry i/p,vf-f,tr med-crs,mod srt, sbang-sbrnd,wk sil cmt,tr lt brn arg/slty mtx,tr intbd w/ SLTST, tr mic,tr qtz grs,fri aggs,fr vis
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.0 | 33 |
| RES_DEEP (ohm.m) | 32.22 | 33 |
| RES_SHALLOW (ohm.m) | 23.04 | 33 |

---

### 2040 m MD — Interval 2037.5 – 2042.5 m

**Sample Description (spreadsheet):** Sample 2040m: 100% Sandstone (litho ASCII aggregate) TG 636.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn |
| Total Gas | 636.9235294117648 U |
| mTVDss | -1195.53 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2024m: lt brn,trnsl,smky, clr,frstd,dom f-med,tr crs,mod srt, 6650 sbrnd-sbang,wk sil cmt,tr lt brn 71 / 6 / 4 / 8 / 11 arg mtx,tr mic,fri aggs,lse grs,fr vis & inf por,fluor.
- **SANDSTONE** @ ~2033m: lt brn,trnsl,clr,med 6680 gry i/p,vf-f,tr med-crs,mod srt, sbang-sbrnd,wk sil cmt,tr lt brn arg/slty mtx,tr intbd w/ SLTST, tr mic,tr qtz grs,fri aggs,fr vis
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.8 | 33 |
| RES_DEEP (ohm.m) | 28.39 | 33 |
| RES_SHALLOW (ohm.m) | 22.75 | 33 |

---

### 2045 m MD — Interval 2042.5 – 2047.5 m

**Sample Description (spreadsheet):** Sample 2045m: 100% Sandstone (litho ASCII aggregate) TG 650.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn |
| Total Gas | 650.59375 U |
| mTVDss | -1195.59 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2033m: lt brn,trnsl,clr,med 6680 gry i/p,vf-f,tr med-crs,mod srt, sbang-sbrnd,wk sil cmt,tr lt brn arg/slty mtx,tr intbd w/ SLTST, tr mic,tr qtz grs,fri aggs,fr vis
- **SANDSTONE** @ ~2045m: lt brn,trnsl,clr, 70 / 6 / 4 / 8 / 12 688 U smky,vf-f,tr med-crs,mod srt, 6720 sbang-sbrnd,wk sil cmt,tr lt brn arg/slty mtx,tr intbd w/ SLTST, tr mic,tr qtz grs,fri aggs,fr vis
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.1 | 33 |
| RES_DEEP (ohm.m) | 26.69 | 33 |
| RES_SHALLOW (ohm.m) | 22.41 | 33 |

---

### 2050 m MD — Interval 2047.5 – 2052.5 m

**Sample Description (spreadsheet):** Sample 2050m: 100% Sandstone (litho ASCII aggregate) TG 495.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn |
| Total Gas | 495.21875 U |
| mTVDss | -1195.64 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2033m: lt brn,trnsl,clr,med 6680 gry i/p,vf-f,tr med-crs,mod srt, sbang-sbrnd,wk sil cmt,tr lt brn arg/slty mtx,tr intbd w/ SLTST, tr mic,tr qtz grs,fri aggs,fr vis
- **SANDSTONE** @ ~2045m: lt brn,trnsl,clr, 70 / 6 / 4 / 8 / 12 688 U smky,vf-f,tr med-crs,mod srt, 6720 sbang-sbrnd,wk sil cmt,tr lt brn arg/slty mtx,tr intbd w/ SLTST, tr mic,tr qtz grs,fri aggs,fr vis
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.2 | 32 |
| RES_DEEP (ohm.m) | 27.00 | 32 |
| RES_SHALLOW (ohm.m) | 22.85 | 32 |

---

### 2055 m MD — Interval 2052.5 – 2057.5 m

**Sample Description (spreadsheet):** Sample 2055m: 100% Sandstone (litho ASCII aggregate) TG 524.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn |
| Total Gas | 524.0499999999998 U |
| mTVDss | -1195.70 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2045m: lt brn,trnsl,clr, 70 / 6 / 4 / 8 / 12 688 U smky,vf-f,tr med-crs,mod srt, 6720 sbang-sbrnd,wk sil cmt,tr lt brn arg/slty mtx,tr intbd w/ SLTST, tr mic,tr qtz grs,fri aggs,fr vis
- **SANDSTONE** @ ~2051m: 11-16 klbs 6750 SANDSTONE:lt brn,trnsl,clr, FLW:492-543 gpm arg/slty mtx,tr mic,tr qtz grs,fri 71 / 6 / 4 / 8 / 11 555 U aggs,fr vis & inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.9 | 33 |
| RES_DEEP (ohm.m) | 27.49 | 33 |
| RES_SHALLOW (ohm.m) | 22.55 | 33 |

---

### 2060 m MD — Interval 2057.5 – 2062.5 m

**Sample Description (spreadsheet):** Sample 2060m: 100% Sandstone (litho ASCII aggregate) TG 530.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn |
| Total Gas | 530.6312499999999 U |
| mTVDss | -1195.75 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2045m: lt brn,trnsl,clr, 70 / 6 / 4 / 8 / 12 688 U smky,vf-f,tr med-crs,mod srt, 6720 sbang-sbrnd,wk sil cmt,tr lt brn arg/slty mtx,tr intbd w/ SLTST, tr mic,tr qtz grs,fri aggs,fr vis
- **SANDSTONE** @ ~2051m: 11-16 klbs 6750 SANDSTONE:lt brn,trnsl,clr, FLW:492-543 gpm arg/slty mtx,tr mic,tr qtz grs,fri 71 / 6 / 4 / 8 / 11 555 U aggs,fr vis & inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.5 | 33 |
| RES_DEEP (ohm.m) | 25.18 | 33 |
| RES_SHALLOW (ohm.m) | 20.79 | 33 |

---

### 2065 m MD — Interval 2062.5 – 2067.5 m

**Sample Description (spreadsheet):** Sample 2065m: 100% Sandstone (litho ASCII aggregate) TG 480.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn |
| Total Gas | 480.25294117647064 U |
| mTVDss | -1195.80 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2051m: 11-16 klbs 6750 SANDSTONE:lt brn,trnsl,clr, FLW:492-543 gpm arg/slty mtx,tr mic,tr qtz grs,fri 71 / 6 / 4 / 8 / 11 555 U aggs,fr vis & inf por,fluor.
- **SANDSTONE** @ ~2067m: v lt brn,trnsl, clr,tr lt gry,pred f-vf,mnr med- crs,mod srt,sbang-sbrnd,wk sil cmt,rr v lt brn-lt gry arg mtx,tr mica flks,tr bit sep qtz grs,fri
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.9 | 33 |
| RES_DEEP (ohm.m) | 24.05 | 33 |
| RES_SHALLOW (ohm.m) | 19.12 | 33 |

---

### 2070 m MD — Interval 2067.5 – 2072.5 m

**Sample Description (spreadsheet):** Sample 2070m: 100% Sandstone (litho ASCII aggregate) TG 448.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn |
| Total Gas | 448.775 U |
| mTVDss | -1195.86 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2067m: v lt brn,trnsl, clr,tr lt gry,pred f-vf,mnr med- crs,mod srt,sbang-sbrnd,wk sil cmt,rr v lt brn-lt gry arg mtx,tr mica flks,tr bit sep qtz grs,fri
- **SANDSTONE** @ ~2079m: v lt brn,clr,trnsl, tr lt gry,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,rr v lt brn- lt gry arg mtx,occ mica flks,fri aggs,mnr lse,pr-fr vis por,fr inf

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.2 | 33 |
| RES_DEEP (ohm.m) | 23.40 | 33 |
| RES_SHALLOW (ohm.m) | 18.10 | 33 |

---

### 2075 m MD — Interval 2072.5 – 2077.5 m

**Sample Description (spreadsheet):** Sample 2075m: 100% Sandstone (litho ASCII aggregate) TG 417.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri yel grn ptchy-evn |
| Total Gas | 417.15625 U |
| mTVDss | -1195.88 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2067m: v lt brn,trnsl, clr,tr lt gry,pred f-vf,mnr med- crs,mod srt,sbang-sbrnd,wk sil cmt,rr v lt brn-lt gry arg mtx,tr mica flks,tr bit sep qtz grs,fri
- **SANDSTONE** @ ~2079m: v lt brn,clr,trnsl, tr lt gry,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,rr v lt brn- lt gry arg mtx,occ mica flks,fri aggs,mnr lse,pr-fr vis por,fr inf
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.4 | 32 |
| RES_DEEP (ohm.m) | 25.14 | 32 |
| RES_SHALLOW (ohm.m) | 18.59 | 32 |

---

### 2080 m MD — Interval 2077.5 – 2082.5 m

**Sample Description (spreadsheet):** Sample 2080m: 100% Sandstone (litho ASCII aggregate) TG 347.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri-dll grn/yel ptchy |
| Total Gas | 347.4222222222222 U |
| mTVDss | -1195.89 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2067m: v lt brn,trnsl, clr,tr lt gry,pred f-vf,mnr med- crs,mod srt,sbang-sbrnd,wk sil cmt,rr v lt brn-lt gry arg mtx,tr mica flks,tr bit sep qtz grs,fri
- **SANDSTONE** @ ~2079m: v lt brn,clr,trnsl, tr lt gry,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,rr v lt brn- lt gry arg mtx,occ mica flks,fri aggs,mnr lse,pr-fr vis por,fr inf
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.2 | 33 |
| RES_DEEP (ohm.m) | 25.32 | 33 |
| RES_SHALLOW (ohm.m) | 17.90 | 33 |

---

### 2085 m MD — Interval 2082.5 – 2087.5 m

**Sample Description (spreadsheet):** Sample 2085m: 100% Sandstone (litho ASCII aggregate) TG 272.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri-dll grn/yel ptchy |
| Total Gas | 272.10625000000005 U |
| mTVDss | -1195.89 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2079m: v lt brn,clr,trnsl, tr lt gry,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,rr v lt brn- lt gry arg mtx,occ mica flks,fri aggs,mnr lse,pr-fr vis por,fr inf
- **SANDSTONE** @ ~2088m: v lt brn,clr, trnsl,pred f-vf,mnr med-rr crs, mod wl srt,sbang-sbrnd,wk sil cmt,rr v lt brn arg mtx,mnr micmic, fri aggs,mnr lse,pr vis por,pr-fr inf
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.0 | 33 |
| RES_DEEP (ohm.m) | 24.94 | 33 |
| RES_SHALLOW (ohm.m) | 18.04 | 33 |

---

### 2090 m MD — Interval 2087.5 – 2092.5 m

**Sample Description (spreadsheet):** Sample 2090m: 100% Sandstone (litho ASCII aggregate) TG 322.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri-dll grn/yel ptchy |
| Total Gas | 322.8529411764706 U |
| mTVDss | -1195.90 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2079m: v lt brn,clr,trnsl, tr lt gry,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,rr v lt brn- lt gry arg mtx,occ mica flks,fri aggs,mnr lse,pr-fr vis por,fr inf
- **SANDSTONE** @ ~2088m: v lt brn,clr, trnsl,pred f-vf,mnr med-rr crs, mod wl srt,sbang-sbrnd,wk sil cmt,rr v lt brn arg mtx,mnr micmic, fri aggs,mnr lse,pr vis por,pr-fr inf
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.7 | 33 |
| RES_DEEP (ohm.m) | 25.08 | 33 |
| RES_SHALLOW (ohm.m) | 16.98 | 33 |

---

### 2095 m MD — Interval 2092.5 – 2097.5 m

**Sample Description (spreadsheet):** Sample 2095m: 100% Sandstone (litho ASCII aggregate) TG 286.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri-dll grn/yel ptchy |
| Total Gas | 286.78125 U |
| mTVDss | -1195.91 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2079m: v lt brn,clr,trnsl, tr lt gry,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,rr v lt brn- lt gry arg mtx,occ mica flks,fri aggs,mnr lse,pr-fr vis por,fr inf
- **SANDSTONE** @ ~2088m: v lt brn,clr, trnsl,pred f-vf,mnr med-rr crs, mod wl srt,sbang-sbrnd,wk sil cmt,rr v lt brn arg mtx,mnr micmic, fri aggs,mnr lse,pr vis por,pr-fr inf
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.2 | 33 |
| RES_DEEP (ohm.m) | 26.55 | 33 |
| RES_SHALLOW (ohm.m) | 19.23 | 33 |

---

### 2100 m MD — Interval 2097.5 – 2102.5 m

**Sample Description (spreadsheet):** Sample 2100m: 100% Sandstone (litho ASCII aggregate) TG 289.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri-dll grn/yel ptchy |
| Total Gas | 289.6125 U |
| mTVDss | -1195.91 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2088m: v lt brn,clr, trnsl,pred f-vf,mnr med-rr crs, mod wl srt,sbang-sbrnd,wk sil cmt,rr v lt brn arg mtx,mnr micmic, fri aggs,mnr lse,pr vis por,pr-fr inf
- **SANDSTONE** @ ~2094m: v lt brn,clr,trnsl, 6880 vf-f,med i/p,rr crs,mod wl srt,sbang- sbrnd,wk sil cmt,rr v lt brn arg mtx, fri aggs,pr vis por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.8 | 32 |
| RES_DEEP (ohm.m) | 27.12 | 32 |
| RES_SHALLOW (ohm.m) | 20.48 | 32 |

---

### 2105 m MD — Interval 2102.5 – 2107.5 m

**Sample Description (spreadsheet):** Sample 2105m: 100% Sandstone (litho ASCII aggregate) TG 276.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri-dll grn/yel ptchy |
| Total Gas | 276.85294117647067 U |
| mTVDss | -1195.87 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2088m: v lt brn,clr, trnsl,pred f-vf,mnr med-rr crs, mod wl srt,sbang-sbrnd,wk sil cmt,rr v lt brn arg mtx,mnr micmic, fri aggs,mnr lse,pr vis por,pr-fr inf
- **SANDSTONE** @ ~2094m: v lt brn,clr,trnsl, 6880 vf-f,med i/p,rr crs,mod wl srt,sbang- sbrnd,wk sil cmt,rr v lt brn arg mtx, fri aggs,pr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.2 | 33 |
| RES_DEEP (ohm.m) | 24.31 | 33 |
| RES_SHALLOW (ohm.m) | 17.94 | 33 |

---

### 2110 m MD — Interval 2107.5 – 2112.5 m

**Sample Description (spreadsheet):** Sample 2110m: 100% Sandstone (litho ASCII aggregate) TG 251.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri-dll grn/yel ptchy |
| Total Gas | 251.73125 U |
| mTVDss | -1195.81 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2094m: v lt brn,clr,trnsl, 6880 vf-f,med i/p,rr crs,mod wl srt,sbang- sbrnd,wk sil cmt,rr v lt brn arg mtx, fri aggs,pr vis por,fluor.
- **SANDSTONE** @ ~2106m: v lt brn,clr,trnsl, tr lt gry,f-med,rr crs,mod srt,sbang- sbrnd,wk sil cmt,rr v lt brn-lt gry, arg mtx,fri aggs,mnr lse,pr fr vis 6920 por,fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.4 | 33 |
| RES_DEEP (ohm.m) | 22.94 | 33 |
| RES_SHALLOW (ohm.m) | 17.62 | 33 |

---

### 2115 m MD — Interval 2112.5 – 2117.5 m

**Sample Description (spreadsheet):** Sample 2115m: 100% Sandstone (litho ASCII aggregate) TG 304.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri-dll grn/yel ptchy |
| Total Gas | 304.5529411764706 U |
| mTVDss | -1195.76 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2106m: v lt brn,clr,trnsl, tr lt gry,f-med,rr crs,mod srt,sbang- sbrnd,wk sil cmt,rr v lt brn-lt gry, arg mtx,fri aggs,mnr lse,pr fr vis 6920 por,fr inf por,fluor.
- **SANDSTONE** @ ~2118m: v lt brn,clr,trnsl, tr lt gry,f-med,rr crs,mod srt,sbang- sbrnd,wk sil cmt,rr v lt brn-lt gry, arg mtx,fri aggs,mnr lse,pr fr vis por,fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.8 | 33 |
| RES_DEEP (ohm.m) | 21.71 | 33 |
| RES_SHALLOW (ohm.m) | 16.23 | 33 |

---

### 2120 m MD — Interval 2117.5 – 2122.5 m

**Sample Description (spreadsheet):** Sample 2120m: 100% Sandstone (litho ASCII aggregate) TG 273.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri-dll grn/yel ptchy |
| Total Gas | 273.91875 U |
| mTVDss | -1195.70 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2106m: v lt brn,clr,trnsl, tr lt gry,f-med,rr crs,mod srt,sbang- sbrnd,wk sil cmt,rr v lt brn-lt gry, arg mtx,fri aggs,mnr lse,pr fr vis 6920 por,fr inf por,fluor.
- **SANDSTONE** @ ~2118m: v lt brn,clr,trnsl, tr lt gry,f-med,rr crs,mod srt,sbang- sbrnd,wk sil cmt,rr v lt brn-lt gry, arg mtx,fri aggs,mnr lse,pr fr vis por,fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.4 | 33 |
| RES_DEEP (ohm.m) | 21.83 | 33 |
| RES_SHALLOW (ohm.m) | 16.02 | 33 |

---

### 2125 m MD — Interval 2122.5 – 2127.5 m

**Sample Description (spreadsheet):** Sample 2125m: 100% Sandstone (litho ASCII aggregate) TG 234.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri-dll grn/yel ptchy |
| Total Gas | 234.45 U |
| mTVDss | -1195.64 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2118m: v lt brn,clr,trnsl, tr lt gry,f-med,rr crs,mod srt,sbang- sbrnd,wk sil cmt,rr v lt brn-lt gry, arg mtx,fri aggs,mnr lse,pr fr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2124m: v lt brn,clr,trnsl, tr lt gry,pred f-vf,med i/p,rr crs, mod wl srt,sbang-sbrnd,wk sil cmt, rr v lt brn-lt gry arg mtx,mnr carb
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.1 | 32 |
| RES_DEEP (ohm.m) | 21.86 | 32 |
| RES_SHALLOW (ohm.m) | 15.82 | 32 |

---

### 2130 m MD — Interval 2127.5 – 2132.5 m

**Sample Description (spreadsheet):** Sample 2130m: 100% Sandstone (litho ASCII aggregate) TG 245.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri-dll yel/grn ppt-ptchy |
| Total Gas | 245.30588235294115 U |
| mTVDss | -1195.59 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2118m: v lt brn,clr,trnsl, tr lt gry,f-med,rr crs,mod srt,sbang- sbrnd,wk sil cmt,rr v lt brn-lt gry, arg mtx,fri aggs,mnr lse,pr fr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2124m: v lt brn,clr,trnsl, tr lt gry,pred f-vf,med i/p,rr crs, mod wl srt,sbang-sbrnd,wk sil cmt, rr v lt brn-lt gry arg mtx,mnr carb
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.7 | 33 |
| RES_DEEP (ohm.m) | 22.54 | 33 |
| RES_SHALLOW (ohm.m) | 16.77 | 33 |

---

### 2135 m MD — Interval 2132.5 – 2137.5 m

**Sample Description (spreadsheet):** Sample 2135m: 100% Sandstone (litho ASCII aggregate) TG 201.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 10.0% mod bri-dll yel/grn ppt-ptchy |
| Total Gas | 201.71249999999998 U |
| mTVDss | -1195.53 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2118m: v lt brn,clr,trnsl, tr lt gry,f-med,rr crs,mod srt,sbang- sbrnd,wk sil cmt,rr v lt brn-lt gry, arg mtx,fri aggs,mnr lse,pr fr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2124m: v lt brn,clr,trnsl, tr lt gry,pred f-vf,med i/p,rr crs, mod wl srt,sbang-sbrnd,wk sil cmt, rr v lt brn-lt gry arg mtx,mnr carb
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.3 | 33 |
| RES_DEEP (ohm.m) | 21.21 | 33 |
| RES_SHALLOW (ohm.m) | 15.45 | 33 |

---

### 2140 m MD — Interval 2137.5 – 2142.5 m

**Sample Description (spreadsheet):** Sample 2140m: 100% Sandstone (litho ASCII aggregate) TG 180.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 10.0% mod bri-dll yel/grn ppt-ptchy |
| Total Gas | 180.90526315789472 U |
| mTVDss | -1195.47 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2124m: v lt brn,clr,trnsl, tr lt gry,pred f-vf,med i/p,rr crs, mod wl srt,sbang-sbrnd,wk sil cmt, rr v lt brn-lt gry arg mtx,mnr carb
- **SILTSTONE** @ ~2131m: lt brnsh gry,lt- 14 18 28 med gry,rr dk gry,aren grd to vf SST i/p,occ carb spks & liths,micmic, frm-mod hd,sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.3 | 33 |
| RES_DEEP (ohm.m) | 21.50 | 33 |
| RES_SHALLOW (ohm.m) | 15.82 | 33 |

---

### 2145 m MD — Interval 2142.5 – 2147.5 m

**Sample Description (spreadsheet):** Sample 2145m: 100% Sandstone (litho ASCII aggregate) TG 184.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 10.0% mod bri-dll yel/grn ppt-ptchy |
| Total Gas | 184.73125 U |
| mTVDss | -1195.41 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2131m: lt brnsh gry,lt- 14 18 28 med gry,rr dk gry,aren grd to vf SST i/p,occ carb spks & liths,micmic, frm-mod hd,sbblky.
- **SANDSTONE** @ ~2137m: v lt brn-lt brn, clr,trnsl,vf-f,mnr med,wl srt, 7020 sbrnd-sbang,wk sil cmt,v lt brn- lt brn arg/slty mtx,rr carb spks, mnr micmic,tr slty lams,fri aggs,
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.0 | 33 |
| RES_DEEP (ohm.m) | 24.03 | 33 |
| RES_SHALLOW (ohm.m) | 18.33 | 33 |

---

### 2150 m MD — Interval 2147.5 – 2152.5 m

**Sample Description (spreadsheet):** Sample 2150m: 100% Sandstone (litho ASCII aggregate) TG 172.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 10.0% mod bri-dll yel/grn ppt-ptchy |
| Total Gas | 172.25882352941176 U |
| mTVDss | -1195.35 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2137m: v lt brn-lt brn, clr,trnsl,vf-f,mnr med,wl srt, 7020 sbrnd-sbang,wk sil cmt,v lt brn- lt brn arg/slty mtx,rr carb spks, mnr micmic,tr slty lams,fri aggs,
- **SANDSTONE** @ ~2152m: v lt brn,brnsh gry, clr,trnsl,vf-f,med i/p,rr crs,mod wl srt,sbrnd-sbang,wk sil cmt,com lt 7070 brn-brnsh gry arg/slty mtx,tr carb spks & liths,mnr micmic,fri aggs,pr
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.6 | 33 |
| RES_DEEP (ohm.m) | 24.57 | 33 |
| RES_SHALLOW (ohm.m) | 17.92 | 33 |

---

### 2155 m MD — Interval 2152.5 – 2157.5 m

**Sample Description (spreadsheet):** Sample 2155m: 100% Sandstone (litho ASCII aggregate) TG 210.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri-dll yel/grn ppt-ptchy |
| Total Gas | 210.3125 U |
| mTVDss | -1195.29 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2152m: v lt brn,brnsh gry, clr,trnsl,vf-f,med i/p,rr crs,mod wl srt,sbrnd-sbang,wk sil cmt,com lt 7070 brn-brnsh gry arg/slty mtx,tr carb spks & liths,mnr micmic,fri aggs,pr
- **SANDSTONE** @ ~2164m: trnsl,clr,v lt brn,f-med,tr crs,tr srt,sbang-pred sbrnd,wk sil cmt,tr off wh arg mtx, tr liths,rr car incl & lams,tr micmic, 73 / 6 / 4 / 7 / 10 282 U
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.4 | 32 |
| RES_DEEP (ohm.m) | 25.24 | 32 |
| RES_SHALLOW (ohm.m) | 17.72 | 32 |

---

### 2160 m MD — Interval 2157.5 – 2162.5 m

**Sample Description (spreadsheet):** Sample 2160m: 100% Sandstone (litho ASCII aggregate) TG 222.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri-dll yel/grn ppt-ptchy |
| Total Gas | 222.3375 U |
| mTVDss | -1195.23 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2152m: v lt brn,brnsh gry, clr,trnsl,vf-f,med i/p,rr crs,mod wl srt,sbrnd-sbang,wk sil cmt,com lt 7070 brn-brnsh gry arg/slty mtx,tr carb spks & liths,mnr micmic,fri aggs,pr
- **SANDSTONE** @ ~2164m: trnsl,clr,v lt brn,f-med,tr crs,tr srt,sbang-pred sbrnd,wk sil cmt,tr off wh arg mtx, tr liths,rr car incl & lams,tr micmic, 73 / 6 / 4 / 7 / 10 282 U
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.6 | 33 |
| RES_DEEP (ohm.m) | 26.65 | 33 |
| RES_SHALLOW (ohm.m) | 18.44 | 33 |

---

### 2165 m MD — Interval 2162.5 – 2167.5 m

**Sample Description (spreadsheet):** Sample 2165m: 100% Sandstone (litho ASCII aggregate) TG 233.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel/grn ptchy |
| Total Gas | 233.5529411764706 U |
| mTVDss | -1195.17 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2152m: v lt brn,brnsh gry, clr,trnsl,vf-f,med i/p,rr crs,mod wl srt,sbrnd-sbang,wk sil cmt,com lt 7070 brn-brnsh gry arg/slty mtx,tr carb spks & liths,mnr micmic,fri aggs,pr
- **SANDSTONE** @ ~2164m: trnsl,clr,v lt brn,f-med,tr crs,tr srt,sbang-pred sbrnd,wk sil cmt,tr off wh arg mtx, tr liths,rr car incl & lams,tr micmic, 73 / 6 / 4 / 7 / 10 282 U
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.9 | 33 |
| RES_DEEP (ohm.m) | 26.09 | 33 |
| RES_SHALLOW (ohm.m) | 18.46 | 33 |

---

### 2170 m MD — Interval 2167.5 – 2172.5 m

**Sample Description (spreadsheet):** Sample 2170m: 100% Sandstone (litho ASCII aggregate) TG 233.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel/grn ptchy |
| Total Gas | 233.01875 U |
| mTVDss | -1195.12 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2164m: trnsl,clr,v lt brn,f-med,tr crs,tr srt,sbang-pred sbrnd,wk sil cmt,tr off wh arg mtx, tr liths,rr car incl & lams,tr micmic, 73 / 6 / 4 / 7 / 10 282 U
- **SANDSTONE** @ ~2167m: trnsl,clr,v lt-lt brn, 7140 72 / 6 / 4 / 7 / 11 298 U f-med,tr crs,tr srt,sbang-pred (4096) sbrnd,wk sil cmt,tr off wh arg mtx,tr liths,rr car incl & lams,tr micmic,fri,lse i/p,fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.3 | 33 |
| RES_DEEP (ohm.m) | 25.46 | 33 |
| RES_SHALLOW (ohm.m) | 18.88 | 33 |

---

### 2175 m MD — Interval 2172.5 – 2177.5 m

**Sample Description (spreadsheet):** Sample 2175m: 100% Sandstone (litho ASCII aggregate) TG 270.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel/grn ptchy |
| Total Gas | 270.0176470588235 U |
| mTVDss | -1195.06 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2164m: trnsl,clr,v lt brn,f-med,tr crs,tr srt,sbang-pred sbrnd,wk sil cmt,tr off wh arg mtx, tr liths,rr car incl & lams,tr micmic, 73 / 6 / 4 / 7 / 10 282 U
- **SANDSTONE** @ ~2167m: trnsl,clr,v lt-lt brn, 7140 72 / 6 / 4 / 7 / 11 298 U f-med,tr crs,tr srt,sbang-pred (4096) sbrnd,wk sil cmt,tr off wh arg mtx,tr liths,rr car incl & lams,tr micmic,fri,lse i/p,fr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.2 | 33 |
| RES_DEEP (ohm.m) | 27.97 | 33 |
| RES_SHALLOW (ohm.m) | 19.88 | 33 |

---

### 2180 m MD — Interval 2177.5 – 2182.5 m

**Sample Description (spreadsheet):** Sample 2180m: 100% Sandstone (litho ASCII aggregate) TG 269.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel/grn ptchy |
| Total Gas | 268.9625 U |
| mTVDss | -1195.00 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2164m: trnsl,clr,v lt brn,f-med,tr crs,tr srt,sbang-pred sbrnd,wk sil cmt,tr off wh arg mtx, tr liths,rr car incl & lams,tr micmic, 73 / 6 / 4 / 7 / 10 282 U
- **SANDSTONE** @ ~2167m: trnsl,clr,v lt-lt brn, 7140 72 / 6 / 4 / 7 / 11 298 U f-med,tr crs,tr srt,sbang-pred (4096) sbrnd,wk sil cmt,tr off wh arg mtx,tr liths,rr car incl & lams,tr micmic,fri,lse i/p,fr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.3 | 32 |
| RES_DEEP (ohm.m) | 31.31 | 32 |
| RES_SHALLOW (ohm.m) | 22.94 | 32 |

---

### 2185 m MD — Interval 2182.5 – 2187.5 m

**Sample Description (spreadsheet):** Sample 2185m: 100% Sandstone (litho ASCII aggregate) TG 261.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel/grn ptchy |
| Total Gas | 261.3375 U |
| mTVDss | -1194.94 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2188m: trnsl,clr,v lt brn, f-med,rr crs,tr srt,sbang-pred 7190 sbrnd,wk sil cmt,tr off wh arg mtx, tr liths,rr car incl & lams,tr micmic, fri,lse i/p,fr inf por,fluor.
- **SANDSTONE** @ ~2198m: trnsl,clr,v lt brn, f-med,tr crs,tr srt,sbang-pred sbrnd,wk sil cmt,tr off wh arg mtx,tr liths,rr car incl & lams,tr mic,fri,lse i/p,fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.6 | 33 |
| RES_DEEP (ohm.m) | 33.17 | 33 |
| RES_SHALLOW (ohm.m) | 22.99 | 33 |

---

### 2190 m MD — Interval 2187.5 – 2192.5 m

**Sample Description (spreadsheet):** Sample 2190m: 100% Sandstone (litho ASCII aggregate) TG 286.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel/grn ptchy |
| Total Gas | 286.2470588235294 U |
| mTVDss | -1194.92 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2188m: trnsl,clr,v lt brn, f-med,rr crs,tr srt,sbang-pred 7190 sbrnd,wk sil cmt,tr off wh arg mtx, tr liths,rr car incl & lams,tr micmic, fri,lse i/p,fr inf por,fluor.
- **SANDSTONE** @ ~2198m: trnsl,clr,v lt brn, f-med,tr crs,tr srt,sbang-pred sbrnd,wk sil cmt,tr off wh arg mtx,tr liths,rr car incl & lams,tr mic,fri,lse i/p,fr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.6 | 33 |
| RES_DEEP (ohm.m) | 33.95 | 33 |
| RES_SHALLOW (ohm.m) | 18.04 | 33 |

---

### 2195 m MD — Interval 2192.5 – 2197.5 m

**Sample Description (spreadsheet):** Sample 2195m: 100% Sandstone (litho ASCII aggregate) TG 193.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel grn ppt |
| Total Gas | 193.0 U |
| mTVDss | -1194.93 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2188m: trnsl,clr,v lt brn, f-med,rr crs,tr srt,sbang-pred 7190 sbrnd,wk sil cmt,tr off wh arg mtx, tr liths,rr car incl & lams,tr micmic, fri,lse i/p,fr inf por,fluor.
- **SANDSTONE** @ ~2198m: trnsl,clr,v lt brn, f-med,tr crs,tr srt,sbang-pred sbrnd,wk sil cmt,tr off wh arg mtx,tr liths,rr car incl & lams,tr mic,fri,lse i/p,fr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.4 | 33 |
| RES_DEEP (ohm.m) | 28.79 | 33 |
| RES_SHALLOW (ohm.m) | 16.15 | 33 |

---

### 2295 m MD — Interval 2292.5 – 2297.5 m

**Sample Description (spreadsheet):** Sample 2295m: 100% Sandstone (litho ASCII aggregate) TG 231.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | uncons (0.85) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 5.0% mod bri yel/grn ptchy |
| Total Gas | 231.66250000000002 U |
| mTVDss | -1196.76 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2295m: trnsl,clr,v lt gry,wh,f-crs,pr srt,sbang-sbrnd, wk sil cmt,rr v lt brn arg mtx,tr carb spks,tr liths,fri-lse,fr inf por,fluor.
- **SANDSTONE** @ ~2307m: trnsl,clr,v lt gry,wh,med-crs,pr srt,sbang- sbrnd,wk sil cmt,rr v lt brn arg mtx,tr carb spks,tr liths,fri-lse, fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.5 | 33 |
| RES_DEEP (ohm.m) | 26.88 | 33 |
| RES_SHALLOW (ohm.m) | 19.20 | 33 |

---

### 2300 m MD — Interval 2297.5 – 2302.5 m

**Sample Description (spreadsheet):** Sample 2300m: 100% Sandstone (litho ASCII aggregate) TG 253.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | uncons (0.85) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 30.0% mod bri yel/grn ptchy |
| Total Gas | 253.71764705882353 U |
| mTVDss | -1196.89 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2295m: trnsl,clr,v lt gry,wh,f-crs,pr srt,sbang-sbrnd, wk sil cmt,rr v lt brn arg mtx,tr carb spks,tr liths,fri-lse,fr inf por,fluor.
- **SANDSTONE** @ ~2307m: trnsl,clr,v lt gry,wh,med-crs,pr srt,sbang- sbrnd,wk sil cmt,rr v lt brn arg mtx,tr carb spks,tr liths,fri-lse, fr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.3 | 33 |
| RES_DEEP (ohm.m) | 27.57 | 33 |
| RES_SHALLOW (ohm.m) | 20.79 | 33 |

---

### 2305 m MD — Interval 2302.5 – 2307.5 m

**Sample Description (spreadsheet):** Sample 2305m: 100% Sandstone (litho ASCII aggregate) TG 172.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | uncons (0.85) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri yel/grn ptchy |
| Total Gas | 172.89375 U |
| mTVDss | -1197.01 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2295m: trnsl,clr,v lt gry,wh,f-crs,pr srt,sbang-sbrnd, wk sil cmt,rr v lt brn arg mtx,tr carb spks,tr liths,fri-lse,fr inf por,fluor.
- **SANDSTONE** @ ~2307m: trnsl,clr,v lt gry,wh,med-crs,pr srt,sbang- sbrnd,wk sil cmt,rr v lt brn arg mtx,tr carb spks,tr liths,fri-lse, fr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.4 | 33 |
| RES_DEEP (ohm.m) | 24.89 | 33 |
| RES_SHALLOW (ohm.m) | 18.48 | 33 |

---

### 2310 m MD — Interval 2307.5 – 2312.5 m

**Sample Description (spreadsheet):** Sample 2310m: 100% Sandstone (litho ASCII aggregate) TG 150.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | uncons (0.85) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri yel/grn ptchy |
| Total Gas | 150.93124999999998 U |
| mTVDss | -1197.09 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2295m: trnsl,clr,v lt gry,wh,f-crs,pr srt,sbang-sbrnd, wk sil cmt,rr v lt brn arg mtx,tr carb spks,tr liths,fri-lse,fr inf por,fluor.
- **SANDSTONE** @ ~2307m: trnsl,clr,v lt gry,wh,med-crs,pr srt,sbang- sbrnd,wk sil cmt,rr v lt brn arg mtx,tr carb spks,tr liths,fri-lse, fr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.1 | 32 |
| RES_DEEP (ohm.m) | 23.83 | 32 |
| RES_SHALLOW (ohm.m) | 16.51 | 32 |

---

### 2315 m MD — Interval 2312.5 – 2317.5 m

**Sample Description (spreadsheet):** Sample 2315m: 100% Sandstone (litho ASCII aggregate) TG 225.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | uncons (0.85) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri yel/grn ptchy |
| Total Gas | 225.4941176470588 U |
| mTVDss | -1197.17 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2307m: trnsl,clr,v lt gry,wh,med-crs,pr srt,sbang- sbrnd,wk sil cmt,rr v lt brn arg mtx,tr carb spks,tr liths,fri-lse, fr inf por,fluor.
- **SANDSTONE** @ ~2313m: trnsl,clr,wh-v lt gry,f-pred med-crs,fr srt,sbang- pred sbrnd,tr sil cmt,tr wh arg mtx, 76 / 6 / 4 / 6 / 8 263 U pred lse cln qtz grs,gd inf por, 0 0.5 1 4 14 7600 fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.8 | 33 |
| RES_DEEP (ohm.m) | 19.75 | 33 |
| RES_SHALLOW (ohm.m) | 10.85 | 33 |

---

### 2320 m MD — Interval 2317.5 – 2322.5 m

**Sample Description (spreadsheet):** Sample 2320m: 100% Sandstone (litho ASCII aggregate) TG 147.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | uncons (0.85) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri yel/grn ptchy |
| Total Gas | 147.21875 U |
| mTVDss | -1197.25 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2307m: trnsl,clr,v lt gry,wh,med-crs,pr srt,sbang- sbrnd,wk sil cmt,rr v lt brn arg mtx,tr carb spks,tr liths,fri-lse, fr inf por,fluor.
- **SANDSTONE** @ ~2313m: trnsl,clr,wh-v lt gry,f-pred med-crs,fr srt,sbang- pred sbrnd,tr sil cmt,tr wh arg mtx, 76 / 6 / 4 / 6 / 8 263 U pred lse cln qtz grs,gd inf por, 0 0.5 1 4 14 7600 fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.1 | 33 |
| RES_DEEP (ohm.m) | 21.10 | 33 |
| RES_SHALLOW (ohm.m) | 14.28 | 33 |

---

### 2325 m MD — Interval 2322.5 – 2327.5 m

**Sample Description (spreadsheet):** Sample 2325m: 100% Sandstone (litho ASCII aggregate) TG 36.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.80) |
| Fluorescence | 100.0% mod bri yel/grn ptchy |
| Total Gas | 36.517647058823535 U |
| mTVDss | -1197.33 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2313m: trnsl,clr,wh-v lt gry,f-pred med-crs,fr srt,sbang- pred sbrnd,tr sil cmt,tr wh arg mtx, 76 / 6 / 4 / 6 / 8 263 U pred lse cln qtz grs,gd inf por, 0 0.5 1 4 14 7600 fluor.
- **SANDSTONE** @ ~2329m: v lt brn,trnsl,v lt gry, (4103)
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.3 | 33 |
| RES_DEEP (ohm.m) | 21.89 | 33 |
| RES_SHALLOW (ohm.m) | 17.15 | 33 |

---

### 2330 m MD — Interval 2327.5 – 2332.5 m

**Sample Description (spreadsheet):** Sample 2330m: 100% Sandstone (litho ASCII aggregate) TG 36.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.80) |
| Fluorescence | 100.0% mod bri yel/grn evn |
| Total Gas | 36.70625 U |
| mTVDss | -1197.41 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2313m: trnsl,clr,wh-v lt gry,f-pred med-crs,fr srt,sbang- pred sbrnd,tr sil cmt,tr wh arg mtx, 76 / 6 / 4 / 6 / 8 263 U pred lse cln qtz grs,gd inf por, 0 0.5 1 4 14 7600 fluor.
- **SANDSTONE** @ ~2329m: v lt brn,trnsl,v lt gry, (4103)
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.7 | 33 |
| RES_DEEP (ohm.m) | 21.42 | 33 |
| RES_SHALLOW (ohm.m) | 16.34 | 33 |

---

### 2335 m MD — Interval 2332.5 – 2337.5 m

**Sample Description (spreadsheet):** Sample 2335m: 100% Sandstone (litho ASCII aggregate) TG 79.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri yel/grn evn |
| Total Gas | 79.73124999999999 U |
| mTVDss | -1197.47 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2329m: v lt brn,trnsl,v lt gry, (4103)
- **SANDSTONE** @ ~2338m: v lt gry,trnsl,v lt brn, clr,tr Fe stn yel,dom vf-f,tr med- crs,dom mod wl srt,sbang-sbrnd,wk sil cmt,tr-com v lt gry arg mtx,tr 7680 mic,fri,tr qtz grs,fr-gd vis & inf
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.2 | 32 |
| RES_DEEP (ohm.m) | 20.95 | 32 |
| RES_SHALLOW (ohm.m) | 16.50 | 32 |

---

### 2340 m MD — Interval 2337.5 – 2342.5 m

**Sample Description (spreadsheet):** Sample 2340m: 100% Sandstone (litho ASCII aggregate) TG 159.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri yel/grn evn |
| Total Gas | 159.19411764705885 U |
| mTVDss | -1197.47 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2329m: v lt brn,trnsl,v lt gry, (4103)
- **SANDSTONE** @ ~2338m: v lt gry,trnsl,v lt brn, clr,tr Fe stn yel,dom vf-f,tr med- crs,dom mod wl srt,sbang-sbrnd,wk sil cmt,tr-com v lt gry arg mtx,tr 7680 mic,fri,tr qtz grs,fr-gd vis & inf
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.2 | 33 |
| RES_DEEP (ohm.m) | 20.30 | 33 |
| RES_SHALLOW (ohm.m) | 16.68 | 33 |

---

### 2345 m MD — Interval 2342.5 – 2347.5 m

**Sample Description (spreadsheet):** Sample 2345m: 100% Sandstone (litho ASCII aggregate) TG 183.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri yel/grn evn |
| Total Gas | 183.73529411764707 U |
| mTVDss | -1197.48 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2329m: v lt brn,trnsl,v lt gry, (4103)
- **SANDSTONE** @ ~2338m: v lt gry,trnsl,v lt brn, clr,tr Fe stn yel,dom vf-f,tr med- crs,dom mod wl srt,sbang-sbrnd,wk sil cmt,tr-com v lt gry arg mtx,tr 7680 mic,fri,tr qtz grs,fr-gd vis & inf
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.7 | 33 |
| RES_DEEP (ohm.m) | 20.16 | 33 |
| RES_SHALLOW (ohm.m) | 16.32 | 33 |

---

### 2350 m MD — Interval 2347.5 – 2352.5 m

**Sample Description (spreadsheet):** Sample 2350m: 100% Sandstone (litho ASCII aggregate) TG 169.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri yel/grn evn |
| Total Gas | 169.31111111111113 U |
| mTVDss | -1197.49 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2338m: v lt gry,trnsl,v lt brn, clr,tr Fe stn yel,dom vf-f,tr med- crs,dom mod wl srt,sbang-sbrnd,wk sil cmt,tr-com v lt gry arg mtx,tr 7680 mic,fri,tr qtz grs,fr-gd vis & inf
- **SANDSTONE** @ ~2350m: v lt gry,trnsl,v lt brn, clr,dom vf-f,tr med-crs,dom mod wl srt,sbang-sbrnd,wk sil cmt,tr-com 7720 v lt gry arg mtx,tr mic,fri,tr qtz grs,fr-gd vis & inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.3 | 33 |
| RES_DEEP (ohm.m) | 19.98 | 33 |
| RES_SHALLOW (ohm.m) | 16.50 | 33 |

---

### 2355 m MD — Interval 2352.5 – 2357.5 m

**Sample Description (spreadsheet):** Sample 2355m: 100% Sandstone (litho ASCII aggregate) TG 188.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri yel/grn evn |
| Total Gas | 188.26874999999998 U |
| mTVDss | -1197.50 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2338m: v lt gry,trnsl,v lt brn, clr,tr Fe stn yel,dom vf-f,tr med- crs,dom mod wl srt,sbang-sbrnd,wk sil cmt,tr-com v lt gry arg mtx,tr 7680 mic,fri,tr qtz grs,fr-gd vis & inf
- **SANDSTONE** @ ~2350m: v lt gry,trnsl,v lt brn, clr,dom vf-f,tr med-crs,dom mod wl srt,sbang-sbrnd,wk sil cmt,tr-com 7720 v lt gry arg mtx,tr mic,fri,tr qtz grs,fr-gd vis & inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.7 | 33 |
| RES_DEEP (ohm.m) | 20.37 | 33 |
| RES_SHALLOW (ohm.m) | 16.49 | 33 |

---

### 2360 m MD — Interval 2357.5 – 2362.5 m

**Sample Description (spreadsheet):** Sample 2360m: 100% Sandstone (litho ASCII aggregate) TG 166.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri yel/grn evn |
| Total Gas | 166.19375000000002 U |
| mTVDss | -1197.51 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2350m: v lt gry,trnsl,v lt brn, clr,dom vf-f,tr med-crs,dom mod wl srt,sbang-sbrnd,wk sil cmt,tr-com 7720 v lt gry arg mtx,tr mic,fri,tr qtz grs,fr-gd vis & inf por,fluor.
- **SILTSTONE** @ ~2365m: lt-med gry,lt brn,aren, occ grd to vf SST,tr micro carb spks,tr micmic,frm,sbblky-blky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.1 | 32 |
| RES_DEEP (ohm.m) | 20.32 | 32 |
| RES_SHALLOW (ohm.m) | 16.70 | 32 |

---

### 2365 m MD — Interval 2362.5 – 2367.5 m

**Sample Description (spreadsheet):** Sample 2365m: 100% Sandstone (litho ASCII aggregate) TG 188.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% mod bri yel/grn evn |
| Total Gas | 188.9470588235294 U |
| mTVDss | -1197.48 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2350m: v lt gry,trnsl,v lt brn, clr,dom vf-f,tr med-crs,dom mod wl srt,sbang-sbrnd,wk sil cmt,tr-com 7720 v lt gry arg mtx,tr mic,fri,tr qtz grs,fr-gd vis & inf por,fluor.
- **SILTSTONE** @ ~2365m: lt-med gry,lt brn,aren, occ grd to vf SST,tr micro carb spks,tr micmic,frm,sbblky-blky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.8 | 33 |
| RES_DEEP (ohm.m) | 20.30 | 33 |
| RES_SHALLOW (ohm.m) | 16.72 | 33 |

---

### 2370 m MD — Interval 2367.5 – 2372.5 m

**Sample Description (spreadsheet):** Sample 2370m: 100% Sandstone (litho ASCII aggregate) TG 134.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% mod bri yel/grn evn |
| Total Gas | 134.15625 U |
| mTVDss | -1197.42 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2365m: lt-med gry,lt brn,aren, occ grd to vf SST,tr micro carb spks,tr micmic,frm,sbblky-blky.
- **SANDSTONE** @ ~2374m: v lt gry,trnsl,v lt brn, clr,dom vf-f,tr med-crs,dom mod wl srt,sbang-sbrnd,wk sil cmt,tr-com v lt gry arg mtx,tr mic,fri,tr qtz grs,fr-gd vis & inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.9 | 33 |
| RES_DEEP (ohm.m) | 20.28 | 33 |
| RES_SHALLOW (ohm.m) | 16.81 | 33 |

---

### 2375 m MD — Interval 2372.5 – 2377.5 m

**Sample Description (spreadsheet):** Sample 2375m: 100% Sandstone (litho ASCII aggregate) TG 113.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% mod bri yel/grn evn |
| Total Gas | 113.06470588235295 U |
| mTVDss | -1197.36 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2365m: lt-med gry,lt brn,aren, occ grd to vf SST,tr micro carb spks,tr micmic,frm,sbblky-blky.
- **SANDSTONE** @ ~2374m: v lt gry,trnsl,v lt brn, clr,dom vf-f,tr med-crs,dom mod wl srt,sbang-sbrnd,wk sil cmt,tr-com v lt gry arg mtx,tr mic,fri,tr qtz grs,fr-gd vis & inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.4 | 33 |
| RES_DEEP (ohm.m) | 20.38 | 33 |
| RES_SHALLOW (ohm.m) | 16.61 | 33 |

---

### 2380 m MD — Interval 2377.5 – 2382.5 m

**Sample Description (spreadsheet):** Sample 2380m: 100% Sandstone (litho ASCII aggregate) TG 104.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% mod bri yel/grn evn |
| Total Gas | 104.7625 U |
| mTVDss | -1197.29 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2365m: lt-med gry,lt brn,aren, occ grd to vf SST,tr micro carb spks,tr micmic,frm,sbblky-blky.
- **SANDSTONE** @ ~2374m: v lt gry,trnsl,v lt brn, clr,dom vf-f,tr med-crs,dom mod wl srt,sbang-sbrnd,wk sil cmt,tr-com v lt gry arg mtx,tr mic,fri,tr qtz grs,fr-gd vis & inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.5 | 33 |
| RES_DEEP (ohm.m) | 20.62 | 33 |
| RES_SHALLOW (ohm.m) | 16.93 | 33 |

---

### 2385 m MD — Interval 2382.5 – 2387.5 m

**Sample Description (spreadsheet):** Sample 2385m: 100% Sandstone (litho ASCII aggregate) TG 73.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | uncons (0.85) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% mod bri yel/grn ptchy |
| Total Gas | 73.37647058823529 U |
| mTVDss | -1197.23 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2374m: v lt gry,trnsl,v lt brn, clr,dom vf-f,tr med-crs,dom mod wl srt,sbang-sbrnd,wk sil cmt,tr-com v lt gry arg mtx,tr mic,fri,tr qtz grs,fr-gd vis & inf por,fluor.
- **SANDSTONE** @ ~2384m: :3388 SANDSTONE:v lt gry,trnsl,clr, PPVV::88 med gry i/p,tr Fe stn yel,dom vf-f,tr YYPP::2211 med,mod wl srt,sbrnd-sbang,wk GGeell::99//1122//1144 sil cmt,nil-mnr v lt gry arg mtx,bit WWLL::66 7840 sep cln lse grs,fri aggs,fr vis &
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.8 | 33 |
| RES_DEEP (ohm.m) | 21.73 | 33 |
| RES_SHALLOW (ohm.m) | 17.98 | 33 |

---

### 2390 m MD — Interval 2387.5 – 2392.5 m

**Sample Description (spreadsheet):** Sample 2390m: 100% Sandstone (litho ASCII aggregate) TG 71.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | uncons (0.85) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% mod bri yel/grn ptchy |
| Total Gas | 71.0375 U |
| mTVDss | -1197.17 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2374m: v lt gry,trnsl,v lt brn, clr,dom vf-f,tr med-crs,dom mod wl srt,sbang-sbrnd,wk sil cmt,tr-com v lt gry arg mtx,tr mic,fri,tr qtz grs,fr-gd vis & inf por,fluor.
- **SANDSTONE** @ ~2384m: :3388 SANDSTONE:v lt gry,trnsl,clr, PPVV::88 med gry i/p,tr Fe stn yel,dom vf-f,tr YYPP::2211 med,mod wl srt,sbrnd-sbang,wk GGeell::99//1122//1144 sil cmt,nil-mnr v lt gry arg mtx,bit WWLL::66 7840 sep cln lse grs,fri aggs,fr vis &
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.7 | 32 |
| RES_DEEP (ohm.m) | 22.19 | 32 |
| RES_SHALLOW (ohm.m) | 18.15 | 32 |

---

### 2395 m MD — Interval 2392.5 – 2397.5 m

**Sample Description (spreadsheet):** Sample 2395m: 100% Sandstone (litho ASCII aggregate) TG 68.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | uncons (0.85) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% mod bri yel/grn ptchy |
| Total Gas | 68.8625 U |
| mTVDss | -1197.08 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2384m: :3388 SANDSTONE:v lt gry,trnsl,clr, PPVV::88 med gry i/p,tr Fe stn yel,dom vf-f,tr YYPP::2211 med,mod wl srt,sbrnd-sbang,wk GGeell::99//1122//1144 sil cmt,nil-mnr v lt gry arg mtx,bit WWLL::66 7840 sep cln lse grs,fri aggs,fr vis &
- **SANDSTONE** @ ~2399m: trnsl,clr,lt brnsh gry, vf-pred f,tr med,mod srt,sbang- sbrnd,wk sil cmt,mnr lt brnsh gry arg mtx,fri-lse,fr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.7 | 33 |
| RES_DEEP (ohm.m) | 22.68 | 33 |
| RES_SHALLOW (ohm.m) | 18.38 | 33 |

---

### 2400 m MD — Interval 2397.5 – 2402.5 m

**Sample Description (spreadsheet):** Sample 2400m: 100% Sandstone (litho ASCII aggregate) TG 71.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | uncons (0.85) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% mod bri yel/grn ptchy |
| Total Gas | 71.92222222222222 U |
| mTVDss | -1196.97 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2384m: :3388 SANDSTONE:v lt gry,trnsl,clr, PPVV::88 med gry i/p,tr Fe stn yel,dom vf-f,tr YYPP::2211 med,mod wl srt,sbrnd-sbang,wk GGeell::99//1122//1144 sil cmt,nil-mnr v lt gry arg mtx,bit WWLL::66 7840 sep cln lse grs,fri aggs,fr vis &
- **SANDSTONE** @ ~2399m: trnsl,clr,lt brnsh gry, vf-pred f,tr med,mod srt,sbang- sbrnd,wk sil cmt,mnr lt brnsh gry arg mtx,fri-lse,fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.6 | 33 |
| RES_DEEP (ohm.m) | 22.75 | 33 |
| RES_SHALLOW (ohm.m) | 18.67 | 33 |

---

### 2405 m MD — Interval 2402.5 – 2407.5 m

**Sample Description (spreadsheet):** Sample 2405m: 100% Sandstone (litho ASCII aggregate) TG 72.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | uncons (0.85) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri yel/grn ptchy |
| Total Gas | 72.1375 U |
| mTVDss | -1196.87 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2399m: trnsl,clr,lt brnsh gry, vf-pred f,tr med,mod srt,sbang- sbrnd,wk sil cmt,mnr lt brnsh gry arg mtx,fri-lse,fr inf por,fluor.
- **SANDSTONE** @ ~2408m: trnsl,clr,lt brnsh gry, 7910 vf-pred f,tr med,mod srt,sbang- sbrnd,wk sil cmt,mnr lt brnsh gry arg mtx,tr mic,fri-lse,fr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.4 | 33 |
| RES_DEEP (ohm.m) | 23.12 | 33 |
| RES_SHALLOW (ohm.m) | 18.64 | 33 |

---

### 2410 m MD — Interval 2407.5 – 2412.5 m

**Sample Description (spreadsheet):** Sample 2410m: 100% Sandstone (litho ASCII aggregate) TG 92.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | uncons (0.85) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri yel/grn ptchy |
| Total Gas | 92.18235294117649 U |
| mTVDss | -1196.76 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2399m: trnsl,clr,lt brnsh gry, vf-pred f,tr med,mod srt,sbang- sbrnd,wk sil cmt,mnr lt brnsh gry arg mtx,fri-lse,fr inf por,fluor.
- **SANDSTONE** @ ~2408m: trnsl,clr,lt brnsh gry, 7910 vf-pred f,tr med,mod srt,sbang- sbrnd,wk sil cmt,mnr lt brnsh gry arg mtx,tr mic,fri-lse,fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.7 | 33 |
| RES_DEEP (ohm.m) | 23.42 | 33 |
| RES_SHALLOW (ohm.m) | 18.41 | 33 |

---

### 2415 m MD — Interval 2412.5 – 2417.5 m

**Sample Description (spreadsheet):** Sample 2415m: 100% Sandstone (litho ASCII aggregate) TG 110.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | uncons (0.85) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri yel/grn ptchy |
| Total Gas | 110.55625 U |
| mTVDss | -1196.66 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2399m: trnsl,clr,lt brnsh gry, vf-pred f,tr med,mod srt,sbang- sbrnd,wk sil cmt,mnr lt brnsh gry arg mtx,fri-lse,fr inf por,fluor.
- **SANDSTONE** @ ~2408m: trnsl,clr,lt brnsh gry, 7910 vf-pred f,tr med,mod srt,sbang- sbrnd,wk sil cmt,mnr lt brnsh gry arg mtx,tr mic,fri-lse,fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.2 | 32 |
| RES_DEEP (ohm.m) | 26.09 | 32 |
| RES_SHALLOW (ohm.m) | 19.87 | 32 |

---

### 2420 m MD — Interval 2417.5 – 2422.5 m

**Sample Description (spreadsheet):** Sample 2420m: 100% Sandstone (litho ASCII aggregate) TG 106.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | uncons (0.85) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri yel/grn ptchy |
| Total Gas | 106.34375 U |
| mTVDss | -1196.55 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2408m: trnsl,clr,lt brnsh gry, 7910 vf-pred f,tr med,mod srt,sbang- sbrnd,wk sil cmt,mnr lt brnsh gry arg mtx,tr mic,fri-lse,fr inf por,fluor.
- **SANDSTONE** @ ~2414m: trnsl,clr,lt brnsh gry, vf-pred f,com med,mod srt,sbang- 7930 sbrnd,wk sil cmt,mnr lt brnsh gry arg mtx,fri-abdt cln lse grs,fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.6 | 33 |
| RES_DEEP (ohm.m) | 27.09 | 33 |
| RES_SHALLOW (ohm.m) | 20.99 | 33 |

---

### 2425 m MD — Interval 2422.5 – 2427.5 m

**Sample Description (spreadsheet):** Sample 2425m: 100% Sandstone (litho ASCII aggregate) TG 111.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | uncons (0.85) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri yel/grn ptchy |
| Total Gas | 111.87058823529412 U |
| mTVDss | -1196.50 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2408m: trnsl,clr,lt brnsh gry, 7910 vf-pred f,tr med,mod srt,sbang- sbrnd,wk sil cmt,mnr lt brnsh gry arg mtx,tr mic,fri-lse,fr inf por,fluor.
- **SANDSTONE** @ ~2414m: trnsl,clr,lt brnsh gry, vf-pred f,com med,mod srt,sbang- 7930 sbrnd,wk sil cmt,mnr lt brnsh gry arg mtx,fri-abdt cln lse grs,fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.4 | 33 |
| RES_DEEP (ohm.m) | 26.02 | 33 |
| RES_SHALLOW (ohm.m) | 20.59 | 33 |

---

### 2430 m MD — Interval 2427.5 – 2432.5 m

**Sample Description (spreadsheet):** Sample 2430m: 100% Sandstone (litho ASCII aggregate) TG 97.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel/grn ptchy |
| Total Gas | 97.2375 U |
| mTVDss | -1196.45 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2414m: trnsl,clr,lt brnsh gry, vf-pred f,com med,mod srt,sbang- 7930 sbrnd,wk sil cmt,mnr lt brnsh gry arg mtx,fri-abdt cln lse grs,fr inf por,fluor.
- **SANDSTONE** @ ~2426m: trnsl,clr,f-crs, pred med,fr srt,sbang-pred sbrnd, tr sil cmt,tr lt gry arg mtx,tr carb frags,gd inf por,fluor. 75 / 6 / 4 / 6 / 9
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.5 | 33 |
| RES_DEEP (ohm.m) | 26.42 | 33 |
| RES_SHALLOW (ohm.m) | 19.67 | 33 |

---

### 2435 m MD — Interval 2432.5 – 2437.5 m

**Sample Description (spreadsheet):** Sample 2435m: 100% Sandstone (litho ASCII aggregate) TG 119.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | mod hd (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 90.0% mod bri yel/grn ptchy |
| Total Gas | 119.61764705882354 U |
| mTVDss | -1196.41 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2426m: trnsl,clr,f-crs, pred med,fr srt,sbang-pred sbrnd, tr sil cmt,tr lt gry arg mtx,tr carb frags,gd inf por,fluor. 75 / 6 / 4 / 6 / 9
- **SANDSTONE** @ ~2435m: trnsl,clr,f-crs, 14 18 28 pred med,fr srt,sbang-pred sbrnd, tr sil cmt,tr lt gry arg mtx,tr carb frags,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.3 | 33 |
| RES_DEEP (ohm.m) | 31.35 | 33 |
| RES_SHALLOW (ohm.m) | 21.03 | 33 |

---

### 2440 m MD — Interval 2437.5 – 2442.5 m

**Sample Description (spreadsheet):** Sample 2440m: 100% Sandstone (litho ASCII aggregate) TG 116.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel/grn evn |
| Total Gas | 116.78125 U |
| mTVDss | -1196.36 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2426m: trnsl,clr,f-crs, pred med,fr srt,sbang-pred sbrnd, tr sil cmt,tr lt gry arg mtx,tr carb frags,gd inf por,fluor. 75 / 6 / 4 / 6 / 9
- **SANDSTONE** @ ~2435m: trnsl,clr,f-crs, 14 18 28 pred med,fr srt,sbang-pred sbrnd, tr sil cmt,tr lt gry arg mtx,tr carb frags,gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.1 | 32 |
| RES_DEEP (ohm.m) | 31.15 | 32 |
| RES_SHALLOW (ohm.m) | 20.54 | 32 |

---

### 2445 m MD — Interval 2442.5 – 2447.5 m

**Sample Description (spreadsheet):** Sample 2445m: 100% Sandstone (litho ASCII aggregate) TG 98.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel/grn evn |
| Total Gas | 98.61875 U |
| mTVDss | -1196.32 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2435m: trnsl,clr,f-crs, 14 18 28 pred med,fr srt,sbang-pred sbrnd, tr sil cmt,tr lt gry arg mtx,tr carb frags,gd inf por,fluor.
- **SILTSTONE** @ ~2441m: med gry,med brnsh 8020 gry,aren,occ carb spks,micmic,frm- mod hd,sbblky-blky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.4 | 33 |
| RES_DEEP (ohm.m) | 26.22 | 33 |
| RES_SHALLOW (ohm.m) | 18.64 | 33 |

---

### 2450 m MD — Interval 2447.5 – 2452.5 m

**Sample Description (spreadsheet):** Sample 2450m: 100% Sandstone (litho ASCII aggregate) TG 101.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel/grn evn |
| Total Gas | 101.44117647058822 U |
| mTVDss | -1196.29 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2435m: trnsl,clr,f-crs, 14 18 28 pred med,fr srt,sbang-pred sbrnd, tr sil cmt,tr lt gry arg mtx,tr carb frags,gd inf por,fluor.
- **SILTSTONE** @ ~2441m: med gry,med brnsh 8020 gry,aren,occ carb spks,micmic,frm- mod hd,sbblky-blky.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.7 | 33 |
| RES_DEEP (ohm.m) | 28.96 | 33 |
| RES_SHALLOW (ohm.m) | 20.08 | 33 |

---

### 2455 m MD — Interval 2452.5 – 2457.5 m

**Sample Description (spreadsheet):** Sample 2455m: 100% Sandstone (litho ASCII aggregate) TG 120.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel/grn evn |
| Total Gas | 120.78125 U |
| mTVDss | -1196.34 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2441m: med gry,med brnsh 8020 gry,aren,occ carb spks,micmic,frm- mod hd,sbblky-blky.
- **SANDSTONE** @ ~2451m: trnsl,clr,f-crs, pred med,fr srt,sbang-pred sbrnd, tr sil cmt,tr lt gry arg mtx,tr carb (4100) frags,gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.6 | 33 |
| RES_DEEP (ohm.m) | 32.34 | 33 |
| RES_SHALLOW (ohm.m) | 21.02 | 33 |

---

### 2460 m MD — Interval 2457.5 – 2462.5 m

**Sample Description (spreadsheet):** Sample 2460m: 100% Sandstone (litho ASCII aggregate) TG 115.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel/grn evn |
| Total Gas | 115.68235294117648 U |
| mTVDss | -1196.38 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2451m: trnsl,clr,f-crs, pred med,fr srt,sbang-pred sbrnd, tr sil cmt,tr lt gry arg mtx,tr carb (4100) frags,gd inf por,fluor.
- **SANDSTONE** @ ~2457m: clr,trnsl,rr lt 76 / 6 / 4 / 6 / 8 170 U brnsh gry,vf-f,rr med,wl srt,sbang- sbrnd,tr wk-occ mod strg sil cmt, tr lt brnsh gry arg mtx,pred lse, 8070 fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.6 | 33 |
| RES_DEEP (ohm.m) | 32.82 | 33 |
| RES_SHALLOW (ohm.m) | 20.91 | 33 |

---

### 2465 m MD — Interval 2462.5 – 2467.5 m

**Sample Description (spreadsheet):** Sample 2465m: 100% Sandstone (litho ASCII aggregate) TG 133.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel/grn evn |
| Total Gas | 133.475 U |
| mTVDss | -1196.43 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2451m: trnsl,clr,f-crs, pred med,fr srt,sbang-pred sbrnd, tr sil cmt,tr lt gry arg mtx,tr carb (4100) frags,gd inf por,fluor.
- **SANDSTONE** @ ~2457m: clr,trnsl,rr lt 76 / 6 / 4 / 6 / 8 170 U brnsh gry,vf-f,rr med,wl srt,sbang- sbrnd,tr wk-occ mod strg sil cmt, tr lt brnsh gry arg mtx,pred lse, 8070 fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.4 | 32 |
| RES_DEEP (ohm.m) | 34.49 | 32 |
| RES_SHALLOW (ohm.m) | 23.99 | 32 |

---

### 2470 m MD — Interval 2467.5 – 2472.5 m

**Sample Description (spreadsheet):** Sample 2470m: 100% Sandstone (litho ASCII aggregate) TG 136.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel/grn evn |
| Total Gas | 136.50588235294117 U |
| mTVDss | -1196.48 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2457m: clr,trnsl,rr lt 76 / 6 / 4 / 6 / 8 170 U brnsh gry,vf-f,rr med,wl srt,sbang- sbrnd,tr wk-occ mod strg sil cmt, tr lt brnsh gry arg mtx,pred lse, 8070 fr inf por,fluor.
- **SANDSTONE** @ ~2466m: trnsl,clr,f-crs, pred med,fr srt,sbang-pred sbrnd, tr sil cmt,tr lt gry arg mtx,tr carb frags,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.9 | 33 |
| RES_DEEP (ohm.m) | 30.18 | 33 |
| RES_SHALLOW (ohm.m) | 23.44 | 33 |

---

### 2475 m MD — Interval 2472.5 – 2477.5 m

**Sample Description (spreadsheet):** Sample 2475m: 100% Sandstone (litho ASCII aggregate) TG 129.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 90.0% mod bri yel/grn evn |
| Total Gas | 129.9333333333333 U |
| mTVDss | -1196.53 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2466m: trnsl,clr,f-crs, pred med,fr srt,sbang-pred sbrnd, tr sil cmt,tr lt gry arg mtx,tr carb frags,gd inf por,fluor.
- **SANDSTONE** @ ~2472m: clr,trnsl,rr lt brnsh gry,pred med,f-crs,pr-fr srt, sbang-sbrnd,tr wk sil cmt,rr lt 8120 brnsh gry arg mtx,tr carb spks & incl,pred lse grs,gd inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.7 | 33 |
| RES_DEEP (ohm.m) | 27.89 | 33 |
| RES_SHALLOW (ohm.m) | 21.80 | 33 |

---

### 2480 m MD — Interval 2477.5 – 2482.5 m

**Sample Description (spreadsheet):** Sample 2480m: 100% Sandstone (litho ASCII aggregate) TG 138.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 90.0% mod bri yel/grn evn |
| Total Gas | 138.725 U |
| mTVDss | -1196.58 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2466m: trnsl,clr,f-crs, pred med,fr srt,sbang-pred sbrnd, tr sil cmt,tr lt gry arg mtx,tr carb frags,gd inf por,fluor.
- **SANDSTONE** @ ~2472m: clr,trnsl,rr lt brnsh gry,pred med,f-crs,pr-fr srt, sbang-sbrnd,tr wk sil cmt,rr lt 8120 brnsh gry arg mtx,tr carb spks & incl,pred lse grs,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.0 | 33 |
| RES_DEEP (ohm.m) | 26.14 | 33 |
| RES_SHALLOW (ohm.m) | 22.26 | 33 |

---

### 2485 m MD — Interval 2482.5 – 2487.5 m

**Sample Description (spreadsheet):** Sample 2485m: 100% Sandstone (litho ASCII aggregate) TG 132.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.90) |
| Fluorescence | 90.0% mod bri yel/grn evn |
| Total Gas | 132.5705882352941 U |
| mTVDss | -1196.65 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2472m: clr,trnsl,rr lt brnsh gry,pred med,f-crs,pr-fr srt, sbang-sbrnd,tr wk sil cmt,rr lt 8120 brnsh gry arg mtx,tr carb spks & incl,pred lse grs,gd inf por,fluor.
- **SANDSTONE** @ ~2487m: clr,trnsl,f-crs, pr-fr srt,sbang-sbrnd,tr wk sil cmt,rr lt brnsh gry arg mtx,tr carb spks & incl,pred lse grs,gd inf por, fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.2 | 33 |
| RES_DEEP (ohm.m) | 25.37 | 33 |
| RES_SHALLOW (ohm.m) | 21.16 | 33 |

---

### 2490 m MD — Interval 2487.5 – 2492.5 m

**Sample Description (spreadsheet):** Sample 2490m: 100% Sandstone (litho ASCII aggregate) TG 105.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.68) |
| Fluorescence | 90.0% mod bri yel/grn evn |
| Total Gas | 105.9375 U |
| mTVDss | -1196.71 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2487m: clr,trnsl,f-crs, pr-fr srt,sbang-sbrnd,tr wk sil cmt,rr lt brnsh gry arg mtx,tr carb spks & incl,pred lse grs,gd inf por, fluor.
- **SANDSTONE** @ ~2493m: clr,trnsl,f-crs, 8190 pr-fr srt,sbang-sbrnd,tr wk sil cmt,rr lt brnsh gry arg mtx,tr carb spks & incl,pred lse grs,gd inf por, fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.5 | 32 |
| RES_DEEP (ohm.m) | 26.89 | 32 |
| RES_SHALLOW (ohm.m) | 21.11 | 32 |

---

### 2495 m MD — Interval 2492.5 – 2497.5 m

**Sample Description (spreadsheet):** Sample 2495m: 100% Sandstone (litho ASCII aggregate) TG 101.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.68) |
| Fluorescence | 90.0% mod bri yel/grn ptchy-evn |
| Total Gas | 101.46875 U |
| mTVDss | -1196.78 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2487m: clr,trnsl,f-crs, pr-fr srt,sbang-sbrnd,tr wk sil cmt,rr lt brnsh gry arg mtx,tr carb spks & incl,pred lse grs,gd inf por, fluor.
- **SANDSTONE** @ ~2493m: clr,trnsl,f-crs, 8190 pr-fr srt,sbang-sbrnd,tr wk sil cmt,rr lt brnsh gry arg mtx,tr carb spks & incl,pred lse grs,gd inf por, fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.2 | 33 |
| RES_DEEP (ohm.m) | 24.52 | 33 |
| RES_SHALLOW (ohm.m) | 20.15 | 33 |

---

### 2500 m MD — Interval 2497.5 – 2502.5 m

**Sample Description (spreadsheet):** Sample 2500m: 100% Sandstone (litho ASCII aggregate) TG 116.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.68) |
| Fluorescence | 90.0% mod bri yel/grn ptchy-evn |
| Total Gas | 116.01176470588236 U |
| mTVDss | -1196.84 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2487m: clr,trnsl,f-crs, pr-fr srt,sbang-sbrnd,tr wk sil cmt,rr lt brnsh gry arg mtx,tr carb spks & incl,pred lse grs,gd inf por, fluor.
- **SANDSTONE** @ ~2493m: clr,trnsl,f-crs, 8190 pr-fr srt,sbang-sbrnd,tr wk sil cmt,rr lt brnsh gry arg mtx,tr carb spks & incl,pred lse grs,gd inf por, fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.0 | 33 |
| RES_DEEP (ohm.m) | 24.03 | 33 |
| RES_SHALLOW (ohm.m) | 19.63 | 33 |

---

### 2505 m MD — Interval 2502.5 – 2507.5 m

**Sample Description (spreadsheet):** Sample 2505m: 100% Sandstone (litho ASCII aggregate) TG 113.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.68) |
| Fluorescence | 90.0% mod bri yel/grn ptchy-evn |
| Total Gas | 113.09375 U |
| mTVDss | -1196.90 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2493m: clr,trnsl,f-crs, 8190 pr-fr srt,sbang-sbrnd,tr wk sil cmt,rr lt brnsh gry arg mtx,tr carb spks & incl,pred lse grs,gd inf por, fluor.
- **SANDSTONE** @ ~2505m: trnsl,clr,com yel/orng Fe stng,f-med,tr crs, mod srt,sbang-sbrnd,mod sil cmt,occ wl cmt,rr lt gry arg mtx, tr mica,tr carb incl,fri-mod hd,
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.8 | 33 |
| RES_DEEP (ohm.m) | 23.52 | 33 |
| RES_SHALLOW (ohm.m) | 19.75 | 33 |

---

### 2510 m MD — Interval 2507.5 – 2512.5 m

**Sample Description (spreadsheet):** Sample 2510m: 100% Sandstone (litho ASCII aggregate) TG 112.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel/grn ptchy-evn |
| Total Gas | 112.02941176470588 U |
| mTVDss | -1196.96 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2493m: clr,trnsl,f-crs, 8190 pr-fr srt,sbang-sbrnd,tr wk sil cmt,rr lt brnsh gry arg mtx,tr carb spks & incl,pred lse grs,gd inf por, fluor.
- **SANDSTONE** @ ~2505m: trnsl,clr,com yel/orng Fe stng,f-med,tr crs, mod srt,sbang-sbrnd,mod sil cmt,occ wl cmt,rr lt gry arg mtx, tr mica,tr carb incl,fri-mod hd,
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.0 | 33 |
| RES_DEEP (ohm.m) | 23.32 | 33 |
| RES_SHALLOW (ohm.m) | 19.94 | 33 |

---

### 2515 m MD — Interval 2512.5 – 2517.5 m

**Sample Description (spreadsheet):** Sample 2515m: 100% Sandstone (litho ASCII aggregate) TG 117.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel/grn ptchy-evn |
| Total Gas | 117.41874999999999 U |
| mTVDss | -1197.00 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2505m: trnsl,clr,com yel/orng Fe stng,f-med,tr crs, mod srt,sbang-sbrnd,mod sil cmt,occ wl cmt,rr lt gry arg mtx, tr mica,tr carb incl,fri-mod hd,
- **SANDSTONE** @ ~2518m: clr,trnsl,tr lt 8270 brnsh gry,f-crs,pred med,pr-fr srt, sbang-sbrnd,tr wk sil cmt,tr lt brnsh gry arg mtx,rr mica flks,pred cln lse grs,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.8 | 33 |
| RES_DEEP (ohm.m) | 24.21 | 33 |
| RES_SHALLOW (ohm.m) | 19.59 | 33 |

---

### 2520 m MD — Interval 2517.5 – 2522.5 m

**Sample Description (spreadsheet):** Sample 2520m: 100% Sandstone (litho ASCII aggregate) TG 101.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel/grn ptchy-evn |
| Total Gas | 101.35 U |
| mTVDss | -1197.04 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2505m: trnsl,clr,com yel/orng Fe stng,f-med,tr crs, mod srt,sbang-sbrnd,mod sil cmt,occ wl cmt,rr lt gry arg mtx, tr mica,tr carb incl,fri-mod hd,
- **SANDSTONE** @ ~2518m: clr,trnsl,tr lt 8270 brnsh gry,f-crs,pred med,pr-fr srt, sbang-sbrnd,tr wk sil cmt,tr lt brnsh gry arg mtx,rr mica flks,pred cln lse grs,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.0 | 32 |
| RES_DEEP (ohm.m) | 24.82 | 32 |
| RES_SHALLOW (ohm.m) | 20.30 | 32 |

---

### 2525 m MD — Interval 2522.5 – 2527.5 m

**Sample Description (spreadsheet):** Sample 2525m: 100% Sandstone (litho ASCII aggregate) TG 123.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel/grn ptchy-evn |
| Total Gas | 123.75882352941177 U |
| mTVDss | -1197.09 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2518m: clr,trnsl,tr lt 8270 brnsh gry,f-crs,pred med,pr-fr srt, sbang-sbrnd,tr wk sil cmt,tr lt brnsh gry arg mtx,rr mica flks,pred cln lse grs,gd inf por,fluor.
- **SANDSTONE** @ ~2527m: clr,trnsl,v lt brnsh gry,yelsh orng,vf-med,mnr crs,pr srt,sbrnd-sbang,tr wk-occ mod strg sil cmt,tr v lt brnsh arg mtx,mnr yelsh orng Fe stng,tr mica
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.7 | 33 |
| RES_DEEP (ohm.m) | 25.17 | 33 |
| RES_SHALLOW (ohm.m) | 19.50 | 33 |

---

### 2530 m MD — Interval 2527.5 – 2532.5 m

**Sample Description (spreadsheet):** Sample 2530m: 100% Sandstone (litho ASCII aggregate) TG 126.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel/grn ptchy-evn |
| Total Gas | 126.06875000000001 U |
| mTVDss | -1197.13 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2518m: clr,trnsl,tr lt 8270 brnsh gry,f-crs,pred med,pr-fr srt, sbang-sbrnd,tr wk sil cmt,tr lt brnsh gry arg mtx,rr mica flks,pred cln lse grs,gd inf por,fluor.
- **SANDSTONE** @ ~2527m: clr,trnsl,v lt brnsh gry,yelsh orng,vf-med,mnr crs,pr srt,sbrnd-sbang,tr wk-occ mod strg sil cmt,tr v lt brnsh arg mtx,mnr yelsh orng Fe stng,tr mica
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.2 | 33 |
| RES_DEEP (ohm.m) | 26.22 | 33 |
| RES_SHALLOW (ohm.m) | 21.42 | 33 |

---

### 2535 m MD — Interval 2532.5 – 2537.5 m

**Sample Description (spreadsheet):** Sample 2535m: 100% Sandstone (litho ASCII aggregate) TG 119.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel/grn ptchy-evn |
| Total Gas | 119.80588235294118 U |
| mTVDss | -1197.17 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2518m: clr,trnsl,tr lt 8270 brnsh gry,f-crs,pred med,pr-fr srt, sbang-sbrnd,tr wk sil cmt,tr lt brnsh gry arg mtx,rr mica flks,pred cln lse grs,gd inf por,fluor.
- **SANDSTONE** @ ~2527m: clr,trnsl,v lt brnsh gry,yelsh orng,vf-med,mnr crs,pr srt,sbrnd-sbang,tr wk-occ mod strg sil cmt,tr v lt brnsh arg mtx,mnr yelsh orng Fe stng,tr mica
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.4 | 33 |
| RES_DEEP (ohm.m) | 26.28 | 33 |
| RES_SHALLOW (ohm.m) | 21.05 | 33 |

---

### 2540 m MD — Interval 2537.5 – 2542.5 m

**Sample Description (spreadsheet):** Sample 2540m: 100% Sandstone (litho ASCII aggregate) TG 117.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel/grn ptchy-evn |
| Total Gas | 117.425 U |
| mTVDss | -1197.21 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2527m: clr,trnsl,v lt brnsh gry,yelsh orng,vf-med,mnr crs,pr srt,sbrnd-sbang,tr wk-occ mod strg sil cmt,tr v lt brnsh arg mtx,mnr yelsh orng Fe stng,tr mica
- **SILTSTONE** @ ~2530m: 9 SILTSTONE:med gry,yel gry, YP:20 8310 aren,tr carb incl,mod hd,blky. Gel:9/12/14 WL:5.9 Rmf: 0.060 ohmm @ 75°F Sol:8.0
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.2 | 33 |
| RES_DEEP (ohm.m) | 30.85 | 33 |
| RES_SHALLOW (ohm.m) | 21.73 | 33 |

---

### 2545 m MD — Interval 2542.5 – 2547.5 m

**Sample Description (spreadsheet):** Sample 2545m: 100% Sandstone (litho ASCII aggregate) TG 115.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 90.0% mod bri yel/grn ptchy-evn |
| Total Gas | 115.13529411764706 U |
| mTVDss | -1197.25 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2530m: 9 SILTSTONE:med gry,yel gry, YP:20 8310 aren,tr carb incl,mod hd,blky. Gel:9/12/14 WL:5.9 Rmf: 0.060 ohmm @ 75°F Sol:8.0
- **SANDSTONE** @ ~2539m: trnsl,clr,f-crs, pred med,pr-fr srt,sbang-sbrnd, tr sil cmt,tr off wh arg mtx,pred lse,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.4 | 32 |
| RES_DEEP (ohm.m) | 33.03 | 32 |
| RES_SHALLOW (ohm.m) | 23.43 | 32 |

---

### 2550 m MD — Interval 2547.5 – 2552.5 m

**Sample Description (spreadsheet):** Sample 2550m: 100% Sandstone (litho ASCII aggregate) TG 107.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 90.0% mod bri wh cut |
| Total Gas | 106.98823529411764 U |
| mTVDss | -1197.29 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2539m: trnsl,clr,f-crs, pred med,pr-fr srt,sbang-sbrnd, tr sil cmt,tr off wh arg mtx,pred lse,gd inf por,fluor.
- **SANDSTONE** @ ~2551m: trnsl,clr,f-crs, pred med,pr-fr srt,sbang-sbrnd, tr sil cmt,tr off wh arg mtx,pred lse,gd inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.9 | 33 |
| RES_DEEP (ohm.m) | 31.19 | 33 |
| RES_SHALLOW (ohm.m) | 23.32 | 33 |

---

### 2555 m MD — Interval 2552.5 – 2557.5 m

**Sample Description (spreadsheet):** Sample 2555m: 100% Sandstone (litho ASCII aggregate) TG 117.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 90.0% mod bri wh cut |
| Total Gas | 117.2375 U |
| mTVDss | -1197.33 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2539m: trnsl,clr,f-crs, pred med,pr-fr srt,sbang-sbrnd, tr sil cmt,tr off wh arg mtx,pred lse,gd inf por,fluor.
- **SANDSTONE** @ ~2551m: trnsl,clr,f-crs, pred med,pr-fr srt,sbang-sbrnd, tr sil cmt,tr off wh arg mtx,pred lse,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.9 | 33 |
| RES_DEEP (ohm.m) | 32.42 | 33 |
| RES_SHALLOW (ohm.m) | 22.78 | 33 |

---

### 2560 m MD — Interval 2557.5 – 2562.5 m

**Sample Description (spreadsheet):** Sample 2560m: 100% Sandstone (litho ASCII aggregate) TG 134.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 90.0% mod bri wh cut |
| Total Gas | 134.20588235294122 U |
| mTVDss | -1197.36 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2551m: trnsl,clr,f-crs, pred med,pr-fr srt,sbang-sbrnd, tr sil cmt,tr off wh arg mtx,pred lse,gd inf por,fluor.
- **SANDSTONE** @ ~2557m: trnsl,clr,f-crs, 14 18 28 predmed,pr-frsrt,sbang-sbrnd, 14 18 28 pred med,prfr srt,sbangsbrnd, tr sil cmt,tr off wh arg mtx,pred lse,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.7 | 33 |
| RES_DEEP (ohm.m) | 29.16 | 33 |
| RES_SHALLOW (ohm.m) | 21.14 | 33 |

---

### 2565 m MD — Interval 2562.5 – 2567.5 m

**Sample Description (spreadsheet):** Sample 2565m: 100% Sandstone (litho ASCII aggregate) TG 136.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 90.0% mod bri wh cut |
| Total Gas | 136.61874999999998 U |
| mTVDss | -1197.40 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2551m: trnsl,clr,f-crs, pred med,pr-fr srt,sbang-sbrnd, tr sil cmt,tr off wh arg mtx,pred lse,gd inf por,fluor.
- **SANDSTONE** @ ~2557m: trnsl,clr,f-crs, 14 18 28 predmed,pr-frsrt,sbang-sbrnd, 14 18 28 pred med,prfr srt,sbangsbrnd, tr sil cmt,tr off wh arg mtx,pred lse,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.4 | 33 |
| RES_DEEP (ohm.m) | 29.07 | 33 |
| RES_SHALLOW (ohm.m) | 21.87 | 33 |

---

### 2570 m MD — Interval 2567.5 – 2572.5 m

**Sample Description (spreadsheet):** Sample 2570m: 100% Sandstone (litho ASCII aggregate) TG 141.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 90.0% mod bri wh cut |
| Total Gas | 141.0 U |
| mTVDss | -1197.47 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2557m: trnsl,clr,f-crs, 14 18 28 predmed,pr-frsrt,sbang-sbrnd, 14 18 28 pred med,prfr srt,sbangsbrnd, tr sil cmt,tr off wh arg mtx,pred lse,gd inf por,fluor.
- **SANDSTONE** @ ~2569m: trnsl,clr,f-crs, pred med,pr-fr srt,sbang-sbrnd, tr sil cmt,tr off wh arg mtx,pred lse,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.1 | 32 |
| RES_DEEP (ohm.m) | 28.58 | 32 |
| RES_SHALLOW (ohm.m) | 21.85 | 32 |

---

### 2575 m MD — Interval 2572.5 – 2577.5 m

**Sample Description (spreadsheet):** Sample 2575m: 100% Sandstone (litho ASCII aggregate) TG 140.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 90.0% mod bri wh cut |
| Total Gas | 140.78235294117644 U |
| mTVDss | -1197.54 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2569m: trnsl,clr,f-crs, pred med,pr-fr srt,sbang-sbrnd, tr sil cmt,tr off wh arg mtx,pred lse,gd inf por,fluor.
- **SANDSTONE** @ ~2576m: trnsl,clr,f-crs, pred med,pr-fr srt,sbang-sbrnd, tr sil cmt,tr off wh arg mtx,pred lse,gd inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.5 | 33 |
| RES_DEEP (ohm.m) | 29.96 | 33 |
| RES_SHALLOW (ohm.m) | 20.49 | 33 |

---

### 2580 m MD — Interval 2577.5 – 2582.5 m

**Sample Description (spreadsheet):** Sample 2580m: 100% Sandstone (litho ASCII aggregate) TG 133.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 90.0% mod bri wh cut |
| Total Gas | 133.9375 U |
| mTVDss | -1197.62 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2569m: trnsl,clr,f-crs, pred med,pr-fr srt,sbang-sbrnd, tr sil cmt,tr off wh arg mtx,pred lse,gd inf por,fluor.
- **SANDSTONE** @ ~2576m: trnsl,clr,f-crs, pred med,pr-fr srt,sbang-sbrnd, tr sil cmt,tr off wh arg mtx,pred lse,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.7 | 33 |
| RES_DEEP (ohm.m) | 31.45 | 33 |
| RES_SHALLOW (ohm.m) | 20.44 | 33 |

---

### 2585 m MD — Interval 2582.5 – 2587.5 m

**Sample Description (spreadsheet):** Sample 2585m: 100% Sandstone (litho ASCII aggregate) TG 313.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 90.0% mod bri wh cut |
| Total Gas | 313.23529411764713 U |
| mTVDss | -1197.69 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2569m: trnsl,clr,f-crs, pred med,pr-fr srt,sbang-sbrnd, tr sil cmt,tr off wh arg mtx,pred lse,gd inf por,fluor.
- **SANDSTONE** @ ~2576m: trnsl,clr,f-crs, pred med,pr-fr srt,sbang-sbrnd, tr sil cmt,tr off wh arg mtx,pred lse,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.0 | 33 |
| RES_DEEP (ohm.m) | 31.93 | 33 |
| RES_SHALLOW (ohm.m) | 21.85 | 33 |

---

### 2590 m MD — Interval 2587.5 – 2592.5 m

**Sample Description (spreadsheet):** Sample 2590m: 100% Sandstone (litho ASCII aggregate) TG 489.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 90.0% mod bri wh cut |
| Total Gas | 489.72499999999997 U |
| mTVDss | -1197.76 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2576m: trnsl,clr,f-crs, pred med,pr-fr srt,sbang-sbrnd, tr sil cmt,tr off wh arg mtx,pred lse,gd inf por,fluor.
- **SANDSTONE** @ ~2585m: trnsl,clr,f-crs, pred med,pr-fr srt,sbang-sbrnd, tr sil cmt,tr off wh arg mtx,pred lse,gd inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.9 | 33 |
| RES_DEEP (ohm.m) | 31.19 | 33 |
| RES_SHALLOW (ohm.m) | 20.85 | 33 |

---

### 2595 m MD — Interval 2592.5 – 2597.5 m

**Sample Description (spreadsheet):** Sample 2595m: 100% Sandstone (litho ASCII aggregate) TG 517.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 90.0% mod bri wh cut |
| Total Gas | 517.48125 U |
| mTVDss | -1197.84 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2585m: trnsl,clr,f-crs, pred med,pr-fr srt,sbang-sbrnd, tr sil cmt,tr off wh arg mtx,pred lse,gd inf por,fluor.
- **SANDSTONE** @ ~2594m: clr,trnsl,tr v lt 8520 brnsh gry,f-crs,pred med,fr srt, sbang-sbrnd,tr wk sil cmt,tr v lt brnsh gry arg mtx,occ crab spks & incl,pred cln lse grs,fri aggs,fr-
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.1 | 32 |
| RES_DEEP (ohm.m) | 36.39 | 32 |
| RES_SHALLOW (ohm.m) | 22.28 | 32 |

---

### 2600 m MD — Interval 2597.5 – 2602.5 m

**Sample Description (spreadsheet):** Sample 2600m: 100% Sandstone (litho ASCII aggregate) TG 548.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 90.0% mod bri wh cut |
| Total Gas | 548.8176470588235 U |
| mTVDss | -1197.95 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2585m: trnsl,clr,f-crs, pred med,pr-fr srt,sbang-sbrnd, tr sil cmt,tr off wh arg mtx,pred lse,gd inf por,fluor.
- **SANDSTONE** @ ~2594m: clr,trnsl,tr v lt 8520 brnsh gry,f-crs,pred med,fr srt, sbang-sbrnd,tr wk sil cmt,tr v lt brnsh gry arg mtx,occ crab spks & incl,pred cln lse grs,fri aggs,fr-
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.5 | 33 |
| RES_DEEP (ohm.m) | 37.22 | 33 |
| RES_SHALLOW (ohm.m) | 22.56 | 33 |

---

### 2605 m MD — Interval 2602.5 – 2607.5 m

**Sample Description (spreadsheet):** Sample 2605m: 100% Sandstone (litho ASCII aggregate) TG 436.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.90) |
| Fluorescence | 90.0% mod bri yel/grn ptchy-evn |
| Total Gas | 436.74705882352947 U |
| mTVDss | -1198.06 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2594m: clr,trnsl,tr v lt 8520 brnsh gry,f-crs,pred med,fr srt, sbang-sbrnd,tr wk sil cmt,tr v lt brnsh gry arg mtx,occ crab spks & incl,pred cln lse grs,fri aggs,fr-
- **SILTSTONE** @ ~2609m: med gry,med brnsh gry,aren,rr carb spks & frags,micmic, frm-mod hd,sbblky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.5 | 33 |
| RES_DEEP (ohm.m) | 36.26 | 33 |
| RES_SHALLOW (ohm.m) | 20.79 | 33 |

---

### 2610 m MD — Interval 2607.5 – 2612.5 m

**Sample Description (spreadsheet):** Sample 2610m: 100% Sandstone (litho ASCII aggregate) TG 353.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.90) |
| Fluorescence | 90.0% mod bri yel/grn ptchy-evn |
| Total Gas | 353.5352941176471 U |
| mTVDss | -1198.17 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2594m: clr,trnsl,tr v lt 8520 brnsh gry,f-crs,pred med,fr srt, sbang-sbrnd,tr wk sil cmt,tr v lt brnsh gry arg mtx,occ crab spks & incl,pred cln lse grs,fri aggs,fr-
- **SILTSTONE** @ ~2609m: med gry,med brnsh gry,aren,rr carb spks & frags,micmic, frm-mod hd,sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.5 | 33 |
| RES_DEEP (ohm.m) | 36.75 | 33 |
| RES_SHALLOW (ohm.m) | 22.36 | 33 |

---

### 2615 m MD — Interval 2612.5 – 2617.5 m

**Sample Description (spreadsheet):** Sample 2615m: 100% Sandstone (litho ASCII aggregate) TG 501.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | mod hd (0.40) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.90) |
| Fluorescence | 90.0% mod bri yel/grn ptchy-evn |
| Total Gas | 501.525 U |
| mTVDss | -1198.28 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2609m: med gry,med brnsh gry,aren,rr carb spks & frags,micmic, frm-mod hd,sbblky.
- **SANDSTONE** @ ~2615m: clr,trnsl,v lt brnsh gry,f-crs,pred med,mod srt, sbang-sbrnd,tr wk sil cmt,rr v lt 70 / 6 / 5 / 8 / 11 619 U brnsh gry arg mtx,occ carb spks &
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.3 | 33 |
| RES_DEEP (ohm.m) | 34.36 | 33 |
| RES_SHALLOW (ohm.m) | 24.66 | 33 |

---

### 2620 m MD — Interval 2617.5 – 2622.5 m

**Sample Description (spreadsheet):** Sample 2620m: 100% Sandstone (litho ASCII aggregate) TG 645.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | mod hd (0.40) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.90) |
| Fluorescence | 90.0% mod bri yel/grn ptchy-evn |
| Total Gas | 645.5823529411764 U |
| mTVDss | -1198.40 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2609m: med gry,med brnsh gry,aren,rr carb spks & frags,micmic, frm-mod hd,sbblky.
- **SANDSTONE** @ ~2615m: clr,trnsl,v lt brnsh gry,f-crs,pred med,mod srt, sbang-sbrnd,tr wk sil cmt,rr v lt 70 / 6 / 5 / 8 / 11 619 U brnsh gry arg mtx,occ carb spks &
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.3 | 33 |
| RES_DEEP (ohm.m) | 31.20 | 33 |
| RES_SHALLOW (ohm.m) | 23.25 | 33 |

---

### 2625 m MD — Interval 2622.5 – 2627.5 m

**Sample Description (spreadsheet):** Sample 2625m: 100% Sandstone (litho ASCII aggregate) TG 575.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | mod hd (0.40) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.90) |
| Fluorescence | 90.0% mod bri yel/grn ptchy-evn |
| Total Gas | 574.9625 U |
| mTVDss | -1198.51 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2609m: med gry,med brnsh gry,aren,rr carb spks & frags,micmic, frm-mod hd,sbblky.
- **SANDSTONE** @ ~2615m: clr,trnsl,v lt brnsh gry,f-crs,pred med,mod srt, sbang-sbrnd,tr wk sil cmt,rr v lt 70 / 6 / 5 / 8 / 11 619 U brnsh gry arg mtx,occ carb spks &
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.0 | 32 |
| RES_DEEP (ohm.m) | 29.88 | 32 |
| RES_SHALLOW (ohm.m) | 21.92 | 32 |

---

### 2630 m MD — Interval 2627.5 – 2632.5 m

**Sample Description (spreadsheet):** Sample 2630m: 100% Sandstone (litho ASCII aggregate) TG 606.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.90) |
| Fluorescence | 90.0% mod bri yel/grn ptchy-evn |
| Total Gas | 606.15625 U |
| mTVDss | -1198.61 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2615m: clr,trnsl,v lt brnsh gry,f-crs,pred med,mod srt, sbang-sbrnd,tr wk sil cmt,rr v lt 70 / 6 / 5 / 8 / 11 619 U brnsh gry arg mtx,occ carb spks &
- **SANDSTONE** @ ~2627m: clr,trnsl,v lt brnshgryf-crspredmedmodsrt brnsh gry,f-crs,pred med,mod srt, sbang-sbrnd,tr wk sil cmt,rr v lt brnsh gry arg mtx,occ carb spks &
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.2 | 33 |
| RES_DEEP (ohm.m) | 28.50 | 33 |
| RES_SHALLOW (ohm.m) | 21.24 | 33 |

---

### 2635 m MD — Interval 2632.5 – 2637.5 m

**Sample Description (spreadsheet):** Sample 2635m: 100% Sandstone (litho ASCII aggregate) TG 506.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.90) |
| Fluorescence | 90.0% mod bri yel/grn ptchy-evn |
| Total Gas | 506.72941176470584 U |
| mTVDss | -1198.72 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2627m: clr,trnsl,v lt brnshgryf-crspredmedmodsrt brnsh gry,f-crs,pred med,mod srt, sbang-sbrnd,tr wk sil cmt,rr v lt brnsh gry arg mtx,occ carb spks &
- **SILTSTONE** @ ~2640m: med gry,med brnsh gry,aren,rr carb spks & frags,micmic, frm-mod hd,sbblky. 69 / 6 / 5 / 8 / 12 619 U
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.5 | 33 |
| RES_DEEP (ohm.m) | 28.47 | 33 |
| RES_SHALLOW (ohm.m) | 19.46 | 33 |

---

### 2665 m MD — Interval 2662.5 – 2667.5 m

**Sample Description (spreadsheet):** Sample 2665m: 100% Sandstone (litho ASCII aggregate) TG 576.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.90) |
| Fluorescence | 90.0% mod bri wh cut |
| Total Gas | 576.6 U |
| mTVDss | -1199.21 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2664m: clr,trnsl,opq, f-crs,pred med,pr-fr srt,sbang- sbrnd,tr wk sil cmt,nil vis mtx, rr carb incl,pred cln lse grs,
- **SANDSTONE** @ ~2676m: clr,trnsl,opq,trnsl 8790 lt brnsh gry,vf-tr crs,com med,v pr-pr srt,sbrnd-rnd,tr wk sil cmt, tr lt brn slty mtx,rr liths,pred cln lse grd,rr fri aggs,fr inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.0 | 33 |
| RES_DEEP (ohm.m) | 25.49 | 33 |
| RES_SHALLOW (ohm.m) | 18.40 | 33 |

---

### 2895 m MD — Interval 2892.5 – 2897.5 m

**Sample Description (spreadsheet):** Sample 2895m: 100% Sandstone (litho ASCII aggregate) TG 68.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | mnr wk sil cmt (0.71) |
| Fluorescence | 0.0% None |
| Total Gas | 68.18235294117646 U |
| mTVDss | -1198.85 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2886m: med gry,lt gry,lt olv gry i/p,arg,aren i/p,tr carb flks,
- **SANDSTONE** @ ~2896m: off wh,clr,trnsl, tr lt gry,vf-pred f,mod wl srt,sbrnd- sbang,mnr wk sil cmt,com off wh 9510 arg mtx,tr carb spks,fri aggs,mnr 66 / 5 / 4 / 7 / 18 95 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 115.0 | 25 |
| RES_DEEP (ohm.m) | 24.81 | 13 |
| RES_SHALLOW (ohm.m) | 14.68 | 13 |

---

### 2900 m MD — Interval 2897.5 – 2902.5 m

**Sample Description (spreadsheet):** Sample 2900m: 100% Sandstone (litho ASCII aggregate) TG 76.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | fri (0.70) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | mnr wk sil cmt (0.71) |
| Fluorescence | 0.0% None |
| Total Gas | 76.15625 U |
| mTVDss | -1198.84 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2886m: med gry,lt gry,lt olv gry i/p,arg,aren i/p,tr carb flks,
- **SANDSTONE** @ ~2896m: off wh,clr,trnsl, tr lt gry,vf-pred f,mod wl srt,sbrnd- sbang,mnr wk sil cmt,com off wh 9510 arg mtx,tr carb spks,fri aggs,mnr 66 / 5 / 4 / 7 / 18 95 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|

---

## 5. Summary Statistics (McKinlay Member)

| Metric | Value |
|--------|-------|
| Intervals analysed | 172 |
| Depth range | 1685 – 2900 m |
| Avg % Sandstone | 100.0% |
| Mudlog matches | 172 / 172 |
