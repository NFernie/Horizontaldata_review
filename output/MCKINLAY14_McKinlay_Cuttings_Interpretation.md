# MCKINLAY 14 — McKinlay Member Cuttings & Log Interpretation

**Generated:** 2026-07-14 02:26 UTC  
**Well:** MCKINLAY 14 (MCKINLAY 14)  
**TD:** 2644 m MD  

---

## 1. Data Sources & Methodology

| Source | File | Role |
|--------|------|------|
| Mudlog PDF | `McKinlay 14_Mudlog_Spud-8674ft_Final.pdf` | Cuttings lithology descriptions |
| Litho / drill-gas ASCII | `Mckinlay 14_Litho_Spud-8674ft (TD).txt`, `Mckinlay 14_Drill-Gas_Spud-8674ft (TD).txt` | 5 m bins (ft→m MD) |
| Formation Tops | `DC30.xlsx`, `Mck_Murta.xlsx` | Reservoir entry & overburden identification |
| Wireline Log (LAS) | `Mck_14` | GR, RES_DEEP, RES_SHALLOW |
| Trajectory | `Mck_14_trajectory` | mTVDss (Z subsea) |

## 2. Formation Top Analysis

### 2.1 Key Tops

| Marker | Depth (m MD) | Source |
|--------|-------------|--------|
| DC30 | 1832.76 | DC30.xlsx |
| McKinlay Member (shallowest) | 1832.76 | Mck_Murta.xlsx |

### 2.2 McKinlay Member Top Classification

**Initial reservoir entry (DC30 + shallowest McKinlay):** 1832.76 m MD

**Target re-entry (lone McKinlay below an overburden entry pair):**
- 1997.49 m MD
- 2095.05 m MD
- 2202.82 m MD
- 2444.55 m MD
- 2561.05 m MD

**Overburden entry (Murta + corresponding McKinlay within 5 m):**
| McKinlay entry (m MD) | Murta (m MD) | Δ (m) | Re-entry (m MD) | Zone length (m) |
|-----------------------|-------------|-------|-----------------|-----------------|
| 1943.60 | 1943.60 | 0.00 | 1997.49 | 53.9 |
| 2041.17 | 2039.72 | 1.45 | 2095.05 | 53.9 |
| 2169.32 | 2169.32 | 0.00 | 2202.82 | 33.5 |
| 2402.32 | 2399.41 | 2.91 | 2444.55 | 42.2 |
| 2524.65 | 2523.19 | 1.46 | 2561.05 | 36.4 |

**McKinlay Member analysis window:** 1832.8 – 2643.5 m MD

**Excluded overburden intervals (entry → re-entry, pay resumes at re-entry):** 1944–1997 m (overburden), 2041–2095 m (overburden), 2169–2203 m (overburden), 2402–2445 m (overburden), 2525–2561 m (overburden)

**Samples in McKinlay Member:** 113 of 162 total
- Excluded pre-reservoir: 0
- Excluded overburden intervals: 49

## 3. Known Shortcomings

> **Read this section before using the output.**

1. **Mudlog PDF text extraction is imperfect.** Depth-to-description assignment uses ±15 m proximity heuristics.
2. **Formation top discrepancies** between Mck_Murta.xlsx and mudlog PDF picks are noted where present.
3. **Well name mapping:** MCKINLAY 14 → `MCKINLAY 14` (verified by TD and LAS WELL header).
4. **Sample intervals** are midpoints between consecutive sample depths — variable widths where spacing is irregular.
5. **Water-risk flags** use RQI, fluorescence, resistivity, GR, ZOI, and OWC proximity (see export).
6. **NULL LAS values** (-999.25) excluded from averages.
7. **Exclusion zones** span from each Murta/McKinlay overburden entry to the next lone McKinlay re-entry below (or entry + 50 m MD if none mapped). Later entry pairs inside an existing exclusion interval are treated as the same overburden excursion. Initial DC30/McKinlay reservoir entry is not excluded.
8. **Litho/gas ASCII ingestion:** 5 m bins from ft→m MD; %SS from lithology codes. **Fluorescence %** from mudlog PDF text blocks (`FLUOR:` / `FLUORESCENCE:` ranges, ft→m); upper bound of each range used (e.g. 60–90% → 90%), not the midpoint. Gaps ≤55 m between consecutive `FLUOR:` blocks are bridged; intervals outside all blocks/zones are set to 0%.
9. **Grain size** not parsed from litho ASCII — derived from mudlog lithology text where matched.

## 4. McKinlay Member Sample Intervals

Each section: depth interval, spreadsheet sample, mudlog cuttings, wireline log averages.

### 1835 m MD — Interval 1832.5 – 1837.5 m

**Sample Description (spreadsheet):** Sample 1835m: 100% Sandstone (litho ASCII aggregate) TG 259.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 60.0% mod bri yel wh ptchy |
| Total Gas | 259.51875 U |
| mTVDss | -1199.19 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1820m: wh,off wh,trnsl, clr,lt brn,vf-f,wl srt,sbang-sbrnd, mod strg sil cmt,com lt brn arg mtx, tr carb spks,tr liths,fri-mod hd, v pr vis por,fluor.
- **SANDSTONE** @ ~1832m: 1-11 klbs SANDSTONE:wh,off wh,v lt FLW:453-515 gpm lt brn arg mtx,rr yel/orng stns, mod hd,v pr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 112.7 | 33 |
| RES_DEEP (ohm.m) | 38.36 | 33 |
| RES_SHALLOW (ohm.m) | 26.85 | 33 |

---

### 1840 m MD — Interval 1837.5 – 1842.5 m

**Sample Description (spreadsheet):** Sample 1840m: 100% Sandstone (litho ASCII aggregate) TG 328.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 80.0% mod bri yel wh ptchy |
| Total Gas | 328.74375000000003 U |
| mTVDss | -1199.37 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1832m: 1-11 klbs SANDSTONE:wh,off wh,v lt FLW:453-515 gpm lt brn arg mtx,rr yel/orng stns, mod hd,v pr vis por,fluor.
- **SANDSTONE** @ ~1841m: trnsl,clr,wh, f-crs,pr srt,ang-sbrnd,mod sil cmt 6050 in f aggs,com wh arg mtx in f aggs, med-crs qtz grs pred lse,mod hd f aggs,pr-gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.7 | 32 |
| RES_DEEP (ohm.m) | 35.73 | 32 |
| RES_SHALLOW (ohm.m) | 26.55 | 32 |

---

### 1845 m MD — Interval 1842.5 – 1847.5 m

**Sample Description (spreadsheet):** Sample 1845m: 100% Sandstone (litho ASCII aggregate) TG 437.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 80.0% mod bri yel wh ptchy |
| Total Gas | 437.02352941176474 U |
| mTVDss | -1199.49 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1832m: 1-11 klbs SANDSTONE:wh,off wh,v lt FLW:453-515 gpm lt brn arg mtx,rr yel/orng stns, mod hd,v pr vis por,fluor.
- **SANDSTONE** @ ~1841m: trnsl,clr,wh, f-crs,pr srt,ang-sbrnd,mod sil cmt 6050 in f aggs,com wh arg mtx in f aggs, med-crs qtz grs pred lse,mod hd f aggs,pr-gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.3 | 33 |
| RES_DEEP (ohm.m) | 39.39 | 33 |
| RES_SHALLOW (ohm.m) | 29.84 | 33 |

---

### 1850 m MD — Interval 1847.5 – 1852.5 m

**Sample Description (spreadsheet):** Sample 1850m: 100% Sandstone (litho ASCII aggregate) TG 406.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 80.0% mod bri yel wh ptchy |
| Total Gas | 406.39375 U |
| mTVDss | -1199.61 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1841m: trnsl,clr,wh, f-crs,pr srt,ang-sbrnd,mod sil cmt 6050 in f aggs,com wh arg mtx in f aggs, med-crs qtz grs pred lse,mod hd f aggs,pr-gd inf por,fluor.
- **SILTSTONE** @ ~1850m: med-lt gry,med-lt brnsh gry,pred aren,mnr arg,occ 71 / 7 / 6 / 8 / 8 420U carb spks,micmic,mod hd,sbblky- occ sbfiss.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.2 | 33 |
| RES_DEEP (ohm.m) | 32.58 | 33 |
| RES_SHALLOW (ohm.m) | 24.77 | 33 |

---

### 1855 m MD — Interval 1852.5 – 1857.5 m

**Sample Description (spreadsheet):** Sample 1855m: 100% Sandstone (litho ASCII aggregate) TG 298.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.55) |
| Fluorescence | 80.0% mod bri yel wh ptchy |
| Total Gas | 298.3235294117647 U |
| mTVDss | -1199.74 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1841m: trnsl,clr,wh, f-crs,pr srt,ang-sbrnd,mod sil cmt 6050 in f aggs,com wh arg mtx in f aggs, med-crs qtz grs pred lse,mod hd f aggs,pr-gd inf por,fluor.
- **SILTSTONE** @ ~1850m: med-lt gry,med-lt brnsh gry,pred aren,mnr arg,occ 71 / 7 / 6 / 8 / 8 420U carb spks,micmic,mod hd,sbblky- occ sbfiss.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.1 | 33 |
| RES_DEEP (ohm.m) | 27.40 | 33 |
| RES_SHALLOW (ohm.m) | 22.76 | 33 |

---

### 1860 m MD — Interval 1857.5 – 1862.5 m

**Sample Description (spreadsheet):** Sample 1860m: 100% Sandstone (litho ASCII aggregate) TG 262.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 80.0% mod bri yel wh ptchy |
| Total Gas | 262.86875 U |
| mTVDss | -1199.86 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1850m: med-lt gry,med-lt brnsh gry,pred aren,mnr arg,occ 71 / 7 / 6 / 8 / 8 420U carb spks,micmic,mod hd,sbblky- occ sbfiss.
- **SANDSTONE** @ ~1856m: trnsl,clr,off wh, rr opq,f-crs,pr srt,ang-sbrnd,mod strg sil cmt,in f aggs,com off wh arg mtx,pred med-crs cln lse qtz grs,mod hd aggs,pr-gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.7 | 33 |
| RES_DEEP (ohm.m) | 27.06 | 33 |
| RES_SHALLOW (ohm.m) | 23.30 | 33 |

---

### 1865 m MD — Interval 1862.5 – 1867.5 m

**Sample Description (spreadsheet):** Sample 1865m: 100% Sandstone (litho ASCII aggregate) TG 357.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 80.0% mod bri yel wh ptchy |
| Total Gas | 357.25 U |
| mTVDss | -1199.99 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1850m: med-lt gry,med-lt brnsh gry,pred aren,mnr arg,occ 71 / 7 / 6 / 8 / 8 420U carb spks,micmic,mod hd,sbblky- occ sbfiss.
- **SANDSTONE** @ ~1856m: trnsl,clr,off wh, rr opq,f-crs,pr srt,ang-sbrnd,mod strg sil cmt,in f aggs,com off wh arg mtx,pred med-crs cln lse qtz grs,mod hd aggs,pr-gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.8 | 32 |
| RES_DEEP (ohm.m) | 26.81 | 32 |
| RES_SHALLOW (ohm.m) | 22.76 | 32 |

---

### 1870 m MD — Interval 1867.5 – 1872.5 m

**Sample Description (spreadsheet):** Sample 1870m: 100% Sandstone (litho ASCII aggregate) TG 343.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 80.0% None |
| Total Gas | 343.67058823529413 U |
| mTVDss | -1200.08 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1856m: trnsl,clr,off wh, rr opq,f-crs,pr srt,ang-sbrnd,mod strg sil cmt,in f aggs,com off wh arg mtx,pred med-crs cln lse qtz grs,mod hd aggs,pr-gd inf por,fluor.
- **SANDSTONE** @ ~1862m: trnsl,clr,off wh, 6120 rr opq,f-crs,pr srt,ang-sbrnd,mod strg sil cmt,in f aggs,com off wh arg mtx,pred med-crs cln lse qtz grs,mod hd aggs,pr-gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.6 | 33 |
| RES_DEEP (ohm.m) | 26.50 | 33 |
| RES_SHALLOW (ohm.m) | 20.68 | 33 |

---

### 1875 m MD — Interval 1872.5 – 1877.5 m

**Sample Description (spreadsheet):** Sample 1875m: 100% Sandstone (litho ASCII aggregate) TG 303.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 80.0% None |
| Total Gas | 303.6 U |
| mTVDss | -1200.08 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1862m: trnsl,clr,off wh, 6120 rr opq,f-crs,pr srt,ang-sbrnd,mod strg sil cmt,in f aggs,com off wh arg mtx,pred med-crs cln lse qtz grs,mod hd aggs,pr-gd inf por,fluor.
- **SANDSTONE** @ ~1871m: 2-14 klbs 6150 SANDSTONE:clr,trnsl,off wh, FLW:447-512 gpm abdt off wh-lt gry arg mtx,tr mica flks,pred cln lse grs,fri-occ mod
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.4 | 33 |
| RES_DEEP (ohm.m) | 25.81 | 33 |
| RES_SHALLOW (ohm.m) | 17.82 | 33 |

---

### 1880 m MD — Interval 1877.5 – 1882.5 m

**Sample Description (spreadsheet):** Sample 1880m: 100% Sandstone (litho ASCII aggregate) TG 214.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% , bri yel wh evn,inst bri wh cut,thk bri wh r/r |
| Total Gas | 213.9941176470588 U |
| mTVDss | -1200.08 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1871m: 2-14 klbs 6150 SANDSTONE:clr,trnsl,off wh, FLW:447-512 gpm abdt off wh-lt gry arg mtx,tr mica flks,pred cln lse grs,fri-occ mod
- **SILTSTONE** @ ~1878m: 5.9 6180 SILTSTONE:lt-med gry,lt pH:9.5 brnsh gry,aren,arg i/p,micmic, Ck:1 mod hd,sbblky-sbfiss. Cl:75k
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.7 | 33 |
| RES_DEEP (ohm.m) | 28.04 | 33 |
| RES_SHALLOW (ohm.m) | 18.64 | 33 |

---

### 1885 m MD — Interval 1882.5 – 1887.5 m

**Sample Description (spreadsheet):** Sample 1885m: 100% Sandstone (litho ASCII aggregate) TG 218.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% , bri yel wh evn,inst bri wh cut,thk bri wh r/r |
| Total Gas | 218.04375000000002 U |
| mTVDss | -1200.08 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1871m: 2-14 klbs 6150 SANDSTONE:clr,trnsl,off wh, FLW:447-512 gpm abdt off wh-lt gry arg mtx,tr mica flks,pred cln lse grs,fri-occ mod
- **SILTSTONE** @ ~1878m: 5.9 6180 SILTSTONE:lt-med gry,lt pH:9.5 brnsh gry,aren,arg i/p,micmic, Ck:1 mod hd,sbblky-sbfiss. Cl:75k
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.7 | 33 |
| RES_DEEP (ohm.m) | 26.18 | 33 |
| RES_SHALLOW (ohm.m) | 20.07 | 33 |

---

### 1890 m MD — Interval 1887.5 – 1892.5 m

**Sample Description (spreadsheet):** Sample 1890m: 100% Sandstone (litho ASCII aggregate) TG 309.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% , bri yel wh evn,inst bri wh cut,thk bri wh r/r |
| Total Gas | 309.6125 U |
| mTVDss | -1200.08 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1878m: 5.9 6180 SILTSTONE:lt-med gry,lt pH:9.5 brnsh gry,aren,arg i/p,micmic, Ck:1 mod hd,sbblky-sbfiss. Cl:75k
- **SANDSTONE** @ ~1887m: clr,trnsl,off wh, 14 18 28 med-f,mnr crs,mod srt,sbang-sbrnd, wk sil cmt,com off wh arg mtx,com i flk t t th /lithi l mica flks,tr qtz ovgths w/lith incl,
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.9 | 32 |
| RES_DEEP (ohm.m) | 27.22 | 32 |
| RES_SHALLOW (ohm.m) | 20.40 | 32 |

---

### 1895 m MD — Interval 1892.5 – 1897.5 m

**Sample Description (spreadsheet):** Sample 1895m: 100% Sandstone (litho ASCII aggregate) TG 281.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% , bri yel wh evn,inst bri wh cut,thk bri wh r/r |
| Total Gas | 281.5529411764706 U |
| mTVDss | -1200.07 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1878m: 5.9 6180 SILTSTONE:lt-med gry,lt pH:9.5 brnsh gry,aren,arg i/p,micmic, Ck:1 mod hd,sbblky-sbfiss. Cl:75k
- **SANDSTONE** @ ~1887m: clr,trnsl,off wh, 14 18 28 med-f,mnr crs,mod srt,sbang-sbrnd, wk sil cmt,com off wh arg mtx,com i flk t t th /lithi l mica flks,tr qtz ovgths w/lith incl,
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.0 | 33 |
| RES_DEEP (ohm.m) | 26.18 | 33 |
| RES_SHALLOW (ohm.m) | 20.69 | 33 |

---

### 1900 m MD — Interval 1897.5 – 1902.5 m

**Sample Description (spreadsheet):** Sample 1900m: 100% Sandstone (litho ASCII aggregate) TG 326.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% , bri yel wh evn,inst bri wh cut,thk bri wh r/r |
| Total Gas | 326.3625 U |
| mTVDss | -1200.00 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1887m: clr,trnsl,off wh, 14 18 28 med-f,mnr crs,mod srt,sbang-sbrnd, wk sil cmt,com off wh arg mtx,com i flk t t th /lithi l mica flks,tr qtz ovgths w/lith incl,
- **SANDSTONE** @ ~1902m: clr,trnsl,off wh, 6250 lt gry,vf-med,mod srt,sbrnd-sbang, wk sil cmt,mnr off wh-lt gry arg mtx, occ mica flks,tr carb spks,fri aggs, cln lse grs i/p,pr-fr inf & vis por,
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.2 | 33 |
| RES_DEEP (ohm.m) | 26.86 | 33 |
| RES_SHALLOW (ohm.m) | 20.55 | 33 |

---

### 1905 m MD — Interval 1902.5 – 1907.5 m

**Sample Description (spreadsheet):** Sample 1905m: 100% Sandstone (litho ASCII aggregate) TG 331.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% , bri yel wh evn,inst bri wh cut,thk bri wh r/r |
| Total Gas | 331.1117647058823 U |
| mTVDss | -1199.88 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1902m: clr,trnsl,off wh, 6250 lt gry,vf-med,mod srt,sbrnd-sbang, wk sil cmt,mnr off wh-lt gry arg mtx, occ mica flks,tr carb spks,fri aggs, cln lse grs i/p,pr-fr inf & vis por,
- **SANDSTONE** @ ~1911m: wh,off wh,trnsl,rr clr, vf-med,pred f,fr srt,sbang-sbrnd, 6280 wk sil cmt,mnr wh arg mtx,tr mica, fri aggs,fr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.2 | 33 |
| RES_DEEP (ohm.m) | 28.69 | 33 |
| RES_SHALLOW (ohm.m) | 21.69 | 33 |

---

### 1910 m MD — Interval 1907.5 – 1912.5 m

**Sample Description (spreadsheet):** Sample 1910m: 100% Sandstone (litho ASCII aggregate) TG 363.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% , bri yel wh evn,inst bri wh cut,thk bri wh r/r |
| Total Gas | 363.925 U |
| mTVDss | -1199.76 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1902m: clr,trnsl,off wh, 6250 lt gry,vf-med,mod srt,sbrnd-sbang, wk sil cmt,mnr off wh-lt gry arg mtx, occ mica flks,tr carb spks,fri aggs, cln lse grs i/p,pr-fr inf & vis por,
- **SANDSTONE** @ ~1911m: wh,off wh,trnsl,rr clr, vf-med,pred f,fr srt,sbang-sbrnd, 6280 wk sil cmt,mnr wh arg mtx,tr mica, fri aggs,fr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.4 | 33 |
| RES_DEEP (ohm.m) | 30.77 | 33 |
| RES_SHALLOW (ohm.m) | 22.62 | 33 |

---

### 1915 m MD — Interval 1912.5 – 1917.5 m

**Sample Description (spreadsheet):** Sample 1915m: 100% Sandstone (litho ASCII aggregate) TG 271.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% , bri yel wh evn,inst bri wh cut,thk bri wh r/r |
| Total Gas | 271.7647058823529 U |
| mTVDss | -1199.64 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1902m: clr,trnsl,off wh, 6250 lt gry,vf-med,mod srt,sbrnd-sbang, wk sil cmt,mnr off wh-lt gry arg mtx, occ mica flks,tr carb spks,fri aggs, cln lse grs i/p,pr-fr inf & vis por,
- **SANDSTONE** @ ~1911m: wh,off wh,trnsl,rr clr, vf-med,pred f,fr srt,sbang-sbrnd, 6280 wk sil cmt,mnr wh arg mtx,tr mica, fri aggs,fr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.4 | 33 |
| RES_DEEP (ohm.m) | 32.77 | 33 |
| RES_SHALLOW (ohm.m) | 25.25 | 33 |

---

### 1920 m MD — Interval 1917.5 – 1922.5 m

**Sample Description (spreadsheet):** Sample 1920m: 100% Sandstone (litho ASCII aggregate) TG 329.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% , bri yel wh evn,inst bri wh cut,thk bri wh r/r |
| Total Gas | 328.98125 U |
| mTVDss | -1199.52 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1911m: wh,off wh,trnsl,rr clr, vf-med,pred f,fr srt,sbang-sbrnd, 6280 wk sil cmt,mnr wh arg mtx,tr mica, fri aggs,fr inf por,fluor.
- **SANDSTONE** @ ~1917m: 1053-1464 psi SANDSTONE:clr,trnsl,wh,f-crs,pr FLW: 431-518 gpm srt,sbang-sbrnd,tr sil cmt,pred lse qtz grs,gd inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 110.8 | 32 |
| RES_DEEP (ohm.m) | 36.18 | 32 |
| RES_SHALLOW (ohm.m) | 29.02 | 32 |

---

### 1925 m MD — Interval 1922.5 – 1927.5 m

**Sample Description (spreadsheet):** Sample 1925m: 100% Sandstone (litho ASCII aggregate) TG 393.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% , bri yel wh evn,inst bri wh cut,thk bri wh r/r |
| Total Gas | 393.6875 U |
| mTVDss | -1199.40 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1911m: wh,off wh,trnsl,rr clr, vf-med,pred f,fr srt,sbang-sbrnd, 6280 wk sil cmt,mnr wh arg mtx,tr mica, fri aggs,fr inf por,fluor.
- **SANDSTONE** @ ~1917m: 1053-1464 psi SANDSTONE:clr,trnsl,wh,f-crs,pr FLW: 431-518 gpm srt,sbang-sbrnd,tr sil cmt,pred lse qtz grs,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.2 | 33 |
| RES_DEEP (ohm.m) | 39.40 | 33 |
| RES_SHALLOW (ohm.m) | 29.89 | 33 |

---

### 1930 m MD — Interval 1927.5 – 1932.5 m

**Sample Description (spreadsheet):** Sample 1930m: 100% Sandstone (litho ASCII aggregate) TG 440.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.80) |
| Fluorescence | 80.0% , bri yel wh evn,inst bri wh cut,thk bri wh r/r |
| Total Gas | 440.11176470588236 U |
| mTVDss | -1199.28 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1917m: 1053-1464 psi SANDSTONE:clr,trnsl,wh,f-crs,pr FLW: 431-518 gpm srt,sbang-sbrnd,tr sil cmt,pred lse qtz grs,gd inf por,fluor.
- **SANDSTONE** @ ~1935m: clr,trnsl,wh,f-crs,dom f pr srt,sbang-sbrnd,tr sil cmt,dom lse qtz grs,gd inf por,fluor. 6360 69 / 7 / 6 / 8 / 10 MW:9.5
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.9 | 33 |
| RES_DEEP (ohm.m) | 35.53 | 33 |
| RES_SHALLOW (ohm.m) | 29.15 | 33 |

---

### 1935 m MD — Interval 1932.5 – 1937.5 m

**Sample Description (spreadsheet):** Sample 1935m: 100% Sandstone (litho ASCII aggregate) TG 445.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.80) |
| Fluorescence | 80.0% , bri yel wh evn,inst bri wh cut,thk bri wh r/r |
| Total Gas | 445.61249999999995 U |
| mTVDss | -1199.16 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1935m: clr,trnsl,wh,f-crs,dom f pr srt,sbang-sbrnd,tr sil cmt,dom lse qtz grs,gd inf por,fluor. 6360 69 / 7 / 6 / 8 / 10 MW:9.5
- **SANDSTONE** @ ~1939m: brn/orng,trnsl,clr,lt 6390 brn,f-med,mod srt,sbang-sbrnd,wk sil cmt,com lt brn arg mtx,fri-mod hd,fr vis por,fluor. 0 0.5 1 4 14 6400

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.3 | 33 |
| RES_DEEP (ohm.m) | 39.11 | 33 |
| RES_SHALLOW (ohm.m) | 28.32 | 33 |

---

### 1940 m MD — Interval 1937.5 – 1942.5 m

**Sample Description (spreadsheet):** Sample 1940m: 100% Sandstone (litho ASCII aggregate) TG 381.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.80) |
| Fluorescence | 80.0% , bri yel wh evn,inst bri wh cut,thk bri wh r/r |
| Total Gas | 381.94117647058823 U |
| mTVDss | -1199.04 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1935m: clr,trnsl,wh,f-crs,dom f pr srt,sbang-sbrnd,tr sil cmt,dom lse qtz grs,gd inf por,fluor. 6360 69 / 7 / 6 / 8 / 10 MW:9.5
- **SANDSTONE** @ ~1939m: brn/orng,trnsl,clr,lt 6390 brn,f-med,mod srt,sbang-sbrnd,wk sil cmt,com lt brn arg mtx,fri-mod hd,fr vis por,fluor. 0 0.5 1 4 14 6400

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 118.4 | 33 |
| RES_DEEP (ohm.m) | 44.74 | 33 |
| RES_SHALLOW (ohm.m) | 26.88 | 33 |

---

### 2000 m MD — Interval 1997.5 – 2002.5 m

**Sample Description (spreadsheet):** Sample 2000m: 100% Sandstone (litho ASCII aggregate) TG 235.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 0.0% None |
| Total Gas | 235.73125 U |
| mTVDss | -1198.82 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1990m: lt-med gry,aren,mnr vf carb spks,rr micmic,tr liths,mod ( 6 4 5 0 4 7 0 4) hd,sbblky-blky.
- **SANDSTONE** @ ~1999m: v lt brn,off wh,wh, trnsl,clr,f-crs,pr srt,ang-sbrnd, mod strg sil cmt,com off wh arg 70 / 6 / 5 / 8 / 11 mtx,mod hd,pr vis por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 120.5 | 33 |
| RES_DEEP (ohm.m) | 34.36 | 33 |
| RES_SHALLOW (ohm.m) | 23.69 | 33 |

---

### 2005 m MD — Interval 2002.5 – 2007.5 m

**Sample Description (spreadsheet):** Sample 2005m: 100% Sandstone (litho ASCII aggregate) TG 243.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 70.0% None |
| Total Gas | 243.35294117647058 U |
| mTVDss | -1198.89 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1990m: lt-med gry,aren,mnr vf carb spks,rr micmic,tr liths,mod ( 6 4 5 0 4 7 0 4) hd,sbblky-blky.
- **SANDSTONE** @ ~1999m: v lt brn,off wh,wh, trnsl,clr,f-crs,pr srt,ang-sbrnd, mod strg sil cmt,com off wh arg 70 / 6 / 5 / 8 / 11 mtx,mod hd,pr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 114.1 | 33 |
| RES_DEEP (ohm.m) | 40.42 | 33 |
| RES_SHALLOW (ohm.m) | 25.44 | 33 |

---

### 2010 m MD — Interval 2007.5 – 2012.5 m

**Sample Description (spreadsheet):** Sample 2010m: 100% Sandstone (litho ASCII aggregate) TG 377.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 70.0% None |
| Total Gas | 377.65625 U |
| mTVDss | -1198.97 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1999m: v lt brn,off wh,wh, trnsl,clr,f-crs,pr srt,ang-sbrnd, mod strg sil cmt,com off wh arg 70 / 6 / 5 / 8 / 11 mtx,mod hd,pr vis por,fluor.
- **SANDSTONE** @ ~2006m: clr-trnsl,opq,off wh, lt-med brn i/p,f-med,rr crs,pr- 6590 mod srt,sbrnd-sbang,mod-wk sil cmt,tr off wh arg mtx,tr lt brn sil mtx,com lse qtz grs,gd vis por,
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.7 | 33 |
| RES_DEEP (ohm.m) | 40.15 | 33 |
| RES_SHALLOW (ohm.m) | 28.85 | 33 |

---

### 2015 m MD — Interval 2012.5 – 2017.5 m

**Sample Description (spreadsheet):** Sample 2015m: 100% Sandstone (litho ASCII aggregate) TG 431.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 70.0% None |
| Total Gas | 431.8941176470588 U |
| mTVDss | -1199.05 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1999m: v lt brn,off wh,wh, trnsl,clr,f-crs,pr srt,ang-sbrnd, mod strg sil cmt,com off wh arg 70 / 6 / 5 / 8 / 11 mtx,mod hd,pr vis por,fluor.
- **SANDSTONE** @ ~2006m: clr-trnsl,opq,off wh, lt-med brn i/p,f-med,rr crs,pr- 6590 mod srt,sbrnd-sbang,mod-wk sil cmt,tr off wh arg mtx,tr lt brn sil mtx,com lse qtz grs,gd vis por,
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.6 | 33 |
| RES_DEEP (ohm.m) | 33.35 | 33 |
| RES_SHALLOW (ohm.m) | 26.56 | 33 |

---

### 2020 m MD — Interval 2017.5 – 2022.5 m

**Sample Description (spreadsheet):** Sample 2020m: 100% Sandstone (litho ASCII aggregate) TG 382.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 70.0% None |
| Total Gas | 382.44374999999997 U |
| mTVDss | -1199.16 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2006m: clr-trnsl,opq,off wh, lt-med brn i/p,f-med,rr crs,pr- 6590 mod srt,sbrnd-sbang,mod-wk sil cmt,tr off wh arg mtx,tr lt brn sil mtx,com lse qtz grs,gd vis por,
- **SANDSTONE** @ ~2018m: off wh-v lt brn,clr- trnsl,frstd,f-med,pred f aggs,rr crs,mod-pr srt,sbrnd-sbang,mod wk sil cmt,com v lt brn-off wh arg mtx,com lse qtz grs,fri-mod hd,rr
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.1 | 32 |
| RES_DEEP (ohm.m) | 31.03 | 32 |
| RES_SHALLOW (ohm.m) | 24.71 | 32 |

---

### 2025 m MD — Interval 2022.5 – 2027.5 m

**Sample Description (spreadsheet):** Sample 2025m: 100% Sandstone (litho ASCII aggregate) TG 366.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 70.0% None |
| Total Gas | 366.05625 U |
| mTVDss | -1199.26 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2018m: off wh-v lt brn,clr- trnsl,frstd,f-med,pred f aggs,rr crs,mod-pr srt,sbrnd-sbang,mod wk sil cmt,com v lt brn-off wh arg mtx,com lse qtz grs,fri-mod hd,rr
- **SANDSTONE** @ ~2027m: off wh-v lt brn,clr- trnsl,f-med,pred f aggs,rr crs,mod- pr srt,sbrnd-sbang,mod wk sil cmt, com v lt brn-off wh arg mtx,com 6660 70 / 7 / 6 / 8 / 9 lse qtz grs,fri-mod hd,rr carb spks,
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.9 | 33 |
| RES_DEEP (ohm.m) | 30.27 | 33 |
| RES_SHALLOW (ohm.m) | 24.11 | 33 |

---

### 2030 m MD — Interval 2027.5 – 2032.5 m

**Sample Description (spreadsheet):** Sample 2030m: 100% Sandstone (litho ASCII aggregate) TG 410.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 70.0% None |
| Total Gas | 410.2941176470588 U |
| mTVDss | -1199.37 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2018m: off wh-v lt brn,clr- trnsl,frstd,f-med,pred f aggs,rr crs,mod-pr srt,sbrnd-sbang,mod wk sil cmt,com v lt brn-off wh arg mtx,com lse qtz grs,fri-mod hd,rr
- **SANDSTONE** @ ~2027m: off wh-v lt brn,clr- trnsl,f-med,pred f aggs,rr crs,mod- pr srt,sbrnd-sbang,mod wk sil cmt, com v lt brn-off wh arg mtx,com 6660 70 / 7 / 6 / 8 / 9 lse qtz grs,fri-mod hd,rr carb spks,
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.2 | 33 |
| RES_DEEP (ohm.m) | 32.53 | 33 |
| RES_SHALLOW (ohm.m) | 24.83 | 33 |

---

### 2035 m MD — Interval 2032.5 – 2037.5 m

**Sample Description (spreadsheet):** Sample 2035m: 100% Sandstone (litho ASCII aggregate) TG 405.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 70.0% None |
| Total Gas | 405.4375 U |
| mTVDss | -1199.47 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2018m: off wh-v lt brn,clr- trnsl,frstd,f-med,pred f aggs,rr crs,mod-pr srt,sbrnd-sbang,mod wk sil cmt,com v lt brn-off wh arg mtx,com lse qtz grs,fri-mod hd,rr
- **SANDSTONE** @ ~2027m: off wh-v lt brn,clr- trnsl,f-med,pred f aggs,rr crs,mod- pr srt,sbrnd-sbang,mod wk sil cmt, com v lt brn-off wh arg mtx,com 6660 70 / 7 / 6 / 8 / 9 lse qtz grs,fri-mod hd,rr carb spks,
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 113.2 | 33 |
| RES_DEEP (ohm.m) | 30.11 | 33 |
| RES_SHALLOW (ohm.m) | 23.57 | 33 |

---

### 2100 m MD — Interval 2097.5 – 2102.5 m

**Sample Description (spreadsheet):** Sample 2100m: 100% Sandstone (litho ASCII aggregate) TG 402.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% None |
| Total Gas | 402.14374999999995 U |
| mTVDss | -1200.45 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2091m: clr,trnsl,off wh,rr opq,f-med,rr crs,mod srt, sbrnd-sbang,wk-occ mod strg sil g, g cmt,mnr off wh arg mtx,occ mica
- **SILTSTONE** @ ~2101m: 1-12 klbs 6900 SILTSTONE:med gry,med brnsh FLW:457-513 gpm
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 127.3 | 32 |
| RES_DEEP (ohm.m) | 32.36 | 32 |
| RES_SHALLOW (ohm.m) | 23.63 | 32 |

---

### 2105 m MD — Interval 2102.5 – 2107.5 m

**Sample Description (spreadsheet):** Sample 2105m: 100% Sandstone (litho ASCII aggregate) TG 376.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% None |
| Total Gas | 376.8352941176471 U |
| mTVDss | -1200.50 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2091m: clr,trnsl,off wh,rr opq,f-med,rr crs,mod srt, sbrnd-sbang,wk-occ mod strg sil g, g cmt,mnr off wh arg mtx,occ mica
- **SILTSTONE** @ ~2101m: 1-12 klbs 6900 SILTSTONE:med gry,med brnsh FLW:457-513 gpm
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 114.1 | 33 |
| RES_DEEP (ohm.m) | 42.24 | 33 |
| RES_SHALLOW (ohm.m) | 27.00 | 33 |

---

### 2110 m MD — Interval 2107.5 – 2112.5 m

**Sample Description (spreadsheet):** Sample 2110m: 100% Sandstone (litho ASCII aggregate) TG 368.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% None |
| Total Gas | 368.26875 U |
| mTVDss | -1200.55 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2101m: 1-12 klbs 6900 SILTSTONE:med gry,med brnsh FLW:457-513 gpm
- **SANDSTONE** @ ~2112m: clr,trnsl,off wh, tr opq,f-crs,pr srt,sbang-sbrnd, 67 / 7 / 6 / 9 / 11 430U ang i/p,wk sil cmt,com off wh arg mtx,com mica flks,tr carb spks & liths,fri aggs,cln lse grs i/p,gd inf
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 109.9 | 33 |
| RES_DEEP (ohm.m) | 38.21 | 33 |
| RES_SHALLOW (ohm.m) | 24.57 | 33 |

---

### 2115 m MD — Interval 2112.5 – 2117.5 m

**Sample Description (spreadsheet):** Sample 2115m: 100% Sandstone (litho ASCII aggregate) TG 392.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% None |
| Total Gas | 392.1941176470589 U |
| mTVDss | -1200.61 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2101m: 1-12 klbs 6900 SILTSTONE:med gry,med brnsh FLW:457-513 gpm
- **SANDSTONE** @ ~2112m: clr,trnsl,off wh, tr opq,f-crs,pr srt,sbang-sbrnd, 67 / 7 / 6 / 9 / 11 430U ang i/p,wk sil cmt,com off wh arg mtx,com mica flks,tr carb spks & liths,fri aggs,cln lse grs i/p,gd inf
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.2 | 33 |
| RES_DEEP (ohm.m) | 41.00 | 33 |
| RES_SHALLOW (ohm.m) | 27.68 | 33 |

---

### 2120 m MD — Interval 2117.5 – 2122.5 m

**Sample Description (spreadsheet):** Sample 2120m: 100% Sandstone (litho ASCII aggregate) TG 442.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% None |
| Total Gas | 442.83124999999995 U |
| mTVDss | -1200.66 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2112m: clr,trnsl,off wh, tr opq,f-crs,pr srt,sbang-sbrnd, 67 / 7 / 6 / 9 / 11 430U ang i/p,wk sil cmt,com off wh arg mtx,com mica flks,tr carb spks & liths,fri aggs,cln lse grs i/p,gd inf
- **SANDSTONE** @ ~2124m: clr,trnsl,off wh, tr opq,f-crs,pr srt,sbang-sbrnd, ang i/p,wk sil cmt,com off wh arg mtx,com mica flks,tr carb spks & liths,fri aggs,cln lse grs i/p,gd inf
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.0 | 33 |
| RES_DEEP (ohm.m) | 37.76 | 33 |
| RES_SHALLOW (ohm.m) | 29.46 | 33 |

---

### 2125 m MD — Interval 2122.5 – 2127.5 m

**Sample Description (spreadsheet):** Sample 2125m: 100% Sandstone (litho ASCII aggregate) TG 409.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% None |
| Total Gas | 408.96875 U |
| mTVDss | -1200.72 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2112m: clr,trnsl,off wh, tr opq,f-crs,pr srt,sbang-sbrnd, 67 / 7 / 6 / 9 / 11 430U ang i/p,wk sil cmt,com off wh arg mtx,com mica flks,tr carb spks & liths,fri aggs,cln lse grs i/p,gd inf
- **SANDSTONE** @ ~2124m: clr,trnsl,off wh, tr opq,f-crs,pr srt,sbang-sbrnd, ang i/p,wk sil cmt,com off wh arg mtx,com mica flks,tr carb spks & liths,fri aggs,cln lse grs i/p,gd inf
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.3 | 32 |
| RES_DEEP (ohm.m) | 36.88 | 32 |
| RES_SHALLOW (ohm.m) | 30.40 | 32 |

---

### 2130 m MD — Interval 2127.5 – 2132.5 m

**Sample Description (spreadsheet):** Sample 2130m: 100% Sandstone (litho ASCII aggregate) TG 441.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% None |
| Total Gas | 441.38823529411764 U |
| mTVDss | -1200.77 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2124m: clr,trnsl,off wh, tr opq,f-crs,pr srt,sbang-sbrnd, ang i/p,wk sil cmt,com off wh arg mtx,com mica flks,tr carb spks & liths,fri aggs,cln lse grs i/p,gd inf
- **SANDSTONE** @ ~2131m: clr,trnsl,opq, 14 18 28 off wh,med-crs,mnr f aggs,pr srt, sbang-ang,tr wk sil cmt,tr off wh arg mtx,rr mica flks,pred cln lse 67 / 7 / 6 / 9 / 11 460U
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.5 | 33 |
| RES_DEEP (ohm.m) | 35.20 | 33 |
| RES_SHALLOW (ohm.m) | 28.94 | 33 |

---

### 2135 m MD — Interval 2132.5 – 2137.5 m

**Sample Description (spreadsheet):** Sample 2135m: 100% Sandstone (litho ASCII aggregate) TG 449.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% None |
| Total Gas | 449.03125 U |
| mTVDss | -1200.82 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2124m: clr,trnsl,off wh, tr opq,f-crs,pr srt,sbang-sbrnd, ang i/p,wk sil cmt,com off wh arg mtx,com mica flks,tr carb spks & liths,fri aggs,cln lse grs i/p,gd inf
- **SANDSTONE** @ ~2131m: clr,trnsl,opq, 14 18 28 off wh,med-crs,mnr f aggs,pr srt, sbang-ang,tr wk sil cmt,tr off wh arg mtx,rr mica flks,pred cln lse 67 / 7 / 6 / 9 / 11 460U
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.9 | 33 |
| RES_DEEP (ohm.m) | 35.04 | 33 |
| RES_SHALLOW (ohm.m) | 29.28 | 33 |

---

### 2140 m MD — Interval 2137.5 – 2142.5 m

**Sample Description (spreadsheet):** Sample 2140m: 100% Sandstone (litho ASCII aggregate) TG 412.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% None |
| Total Gas | 412.2058823529412 U |
| mTVDss | -1200.87 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2124m: clr,trnsl,off wh, tr opq,f-crs,pr srt,sbang-sbrnd, ang i/p,wk sil cmt,com off wh arg mtx,com mica flks,tr carb spks & liths,fri aggs,cln lse grs i/p,gd inf
- **SANDSTONE** @ ~2131m: clr,trnsl,opq, 14 18 28 off wh,med-crs,mnr f aggs,pr srt, sbang-ang,tr wk sil cmt,tr off wh arg mtx,rr mica flks,pred cln lse 67 / 7 / 6 / 9 / 11 460U
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.5 | 33 |
| RES_DEEP (ohm.m) | 34.03 | 33 |
| RES_SHALLOW (ohm.m) | 29.29 | 33 |

---

### 2145 m MD — Interval 2142.5 – 2147.5 m

**Sample Description (spreadsheet):** Sample 2145m: 100% Sandstone (litho ASCII aggregate) TG 370.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.90) |
| Fluorescence | 90.0% None |
| Total Gas | 370.08124999999995 U |
| mTVDss | -1200.93 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2131m: clr,trnsl,opq, 14 18 28 off wh,med-crs,mnr f aggs,pr srt, sbang-ang,tr wk sil cmt,tr off wh arg mtx,rr mica flks,pred cln lse 67 / 7 / 6 / 9 / 11 460U
- **SANDSTONE** @ ~2146m: clr,trnsl,opq, (4080) off wh,med-crs,mnr f aggs,pr srt, sbang-ang,tr wk sil cmt,tr off wh arg mtx,rr mica flks,pred cln lse grs,mnr fri aggs,gd vis & inf por,
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.3 | 33 |
| RES_DEEP (ohm.m) | 37.18 | 33 |
| RES_SHALLOW (ohm.m) | 29.19 | 33 |

---

### 2150 m MD — Interval 2147.5 – 2152.5 m

**Sample Description (spreadsheet):** Sample 2150m: 100% Sandstone (litho ASCII aggregate) TG 396.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.90) |
| Fluorescence | 90.0% None |
| Total Gas | 396.1117647058823 U |
| mTVDss | -1200.98 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2146m: clr,trnsl,opq, (4080) off wh,med-crs,mnr f aggs,pr srt, sbang-ang,tr wk sil cmt,tr off wh arg mtx,rr mica flks,pred cln lse grs,mnr fri aggs,gd vis & inf por,
- **SANDSTONE** @ ~2159m: clr,trnsl,opq, 7090 off wh,f-crs,pr-mod srt,sbang-sbrnd, ang i/p,tr wk sil cmt,mnr off wh arg 67 / 7 / 6 / 9 / 11 557 U mtx,mnr mica flks,tr carb spks,fri f grn aggs,med-crs cln lse qtz grs,
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.4 | 33 |
| RES_DEEP (ohm.m) | 34.73 | 33 |
| RES_SHALLOW (ohm.m) | 27.49 | 33 |

---

### 2155 m MD — Interval 2152.5 – 2157.5 m

**Sample Description (spreadsheet):** Sample 2155m: 100% Sandstone (litho ASCII aggregate) TG 407.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.90) |
| Fluorescence | 90.0% None |
| Total Gas | 407.7375 U |
| mTVDss | -1201.03 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2146m: clr,trnsl,opq, (4080) off wh,med-crs,mnr f aggs,pr srt, sbang-ang,tr wk sil cmt,tr off wh arg mtx,rr mica flks,pred cln lse grs,mnr fri aggs,gd vis & inf por,
- **SANDSTONE** @ ~2159m: clr,trnsl,opq, 7090 off wh,f-crs,pr-mod srt,sbang-sbrnd, ang i/p,tr wk sil cmt,mnr off wh arg 67 / 7 / 6 / 9 / 11 557 U mtx,mnr mica flks,tr carb spks,fri f grn aggs,med-crs cln lse qtz grs,
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.9 | 32 |
| RES_DEEP (ohm.m) | 35.71 | 32 |
| RES_SHALLOW (ohm.m) | 28.38 | 32 |

---

### 2160 m MD — Interval 2157.5 – 2162.5 m

**Sample Description (spreadsheet):** Sample 2160m: 100% Sandstone (litho ASCII aggregate) TG 446.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.90) |
| Fluorescence | 90.0% None |
| Total Gas | 446.0 U |
| mTVDss | -1201.07 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2146m: clr,trnsl,opq, (4080) off wh,med-crs,mnr f aggs,pr srt, sbang-ang,tr wk sil cmt,tr off wh arg mtx,rr mica flks,pred cln lse grs,mnr fri aggs,gd vis & inf por,
- **SANDSTONE** @ ~2159m: clr,trnsl,opq, 7090 off wh,f-crs,pr-mod srt,sbang-sbrnd, ang i/p,tr wk sil cmt,mnr off wh arg 67 / 7 / 6 / 9 / 11 557 U mtx,mnr mica flks,tr carb spks,fri f grn aggs,med-crs cln lse qtz grs,
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.3 | 33 |
| RES_DEEP (ohm.m) | 35.69 | 33 |
| RES_SHALLOW (ohm.m) | 25.89 | 33 |

---

### 2165 m MD — Interval 2162.5 – 2167.5 m

**Sample Description (spreadsheet):** Sample 2165m: 100% Sandstone (litho ASCII aggregate) TG 437.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.90) |
| Fluorescence | 90.0% None |
| Total Gas | 437.38823529411764 U |
| mTVDss | -1201.09 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2159m: clr,trnsl,opq, 7090 off wh,f-crs,pr-mod srt,sbang-sbrnd, ang i/p,tr wk sil cmt,mnr off wh arg 67 / 7 / 6 / 9 / 11 557 U mtx,mnr mica flks,tr carb spks,fri f grn aggs,med-crs cln lse qtz grs,
- **SANDSTONE** @ ~2167m: clr,trnsl,opq, off wh,f-crs,pr-mod srt,sbang-sbrnd, 7120 ang i/p,tr wk sil cmt,mnr off wh arg mtx,mnr mica flks,tr carb spks,fri 503U f grn aggs,med-crs cln lse qtz grs,
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 120.0 | 33 |
| RES_DEEP (ohm.m) | 35.32 | 33 |
| RES_SHALLOW (ohm.m) | 24.04 | 33 |

---

### 2210 m MD — Interval 2207.5 – 2212.5 m

**Sample Description (spreadsheet):** Sample 2210m: 100% Sandstone (litho ASCII aggregate) TG 476.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | uncons (0.85) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.84) |
| Fluorescence | 90.0% None |
| Total Gas | 476.8 U |
| mTVDss | -1201.48 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2204m: clr,trnsl,opq, med-crs,sbrnd-sbang,tr wk sil cmt,tr mica flks,pred cln lse grs, 67 / 7 / 6 / 9 / 11 514U fri aggs,gd inf por,fluor.
- **SANDSTONE** @ ~2213m: clr,trnsl,f-crs, pred med,pr-fr srt,sbang-sbrnd, 67 / 7 / 6 / 9 / 11 593U tr sil cmt,tr wh arg mtx,tr mica flks,fri-lse,gd inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.7 | 33 |
| RES_DEEP (ohm.m) | 30.23 | 33 |
| RES_SHALLOW (ohm.m) | 22.20 | 33 |

---

### 2215 m MD — Interval 2212.5 – 2217.5 m

**Sample Description (spreadsheet):** Sample 2215m: 100% Sandstone (litho ASCII aggregate) TG 566.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | uncons (0.85) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.84) |
| Fluorescence | 90.0% None |
| Total Gas | 566.8352941176472 U |
| mTVDss | -1201.54 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2204m: clr,trnsl,opq, med-crs,sbrnd-sbang,tr wk sil cmt,tr mica flks,pred cln lse grs, 67 / 7 / 6 / 9 / 11 514U fri aggs,gd inf por,fluor.
- **SANDSTONE** @ ~2213m: clr,trnsl,f-crs, pred med,pr-fr srt,sbang-sbrnd, 67 / 7 / 6 / 9 / 11 593U tr sil cmt,tr wh arg mtx,tr mica flks,fri-lse,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.0 | 33 |
| RES_DEEP (ohm.m) | 24.91 | 33 |
| RES_SHALLOW (ohm.m) | 20.06 | 33 |

---

### 2220 m MD — Interval 2217.5 – 2222.5 m

**Sample Description (spreadsheet):** Sample 2220m: 100% Sandstone (litho ASCII aggregate) TG 556.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | uncons (0.85) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.84) |
| Fluorescence | 90.0% None |
| Total Gas | 556.89375 U |
| mTVDss | -1201.60 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2204m: clr,trnsl,opq, med-crs,sbrnd-sbang,tr wk sil cmt,tr mica flks,pred cln lse grs, 67 / 7 / 6 / 9 / 11 514U fri aggs,gd inf por,fluor.
- **SANDSTONE** @ ~2213m: clr,trnsl,f-crs, pred med,pr-fr srt,sbang-sbrnd, 67 / 7 / 6 / 9 / 11 593U tr sil cmt,tr wh arg mtx,tr mica flks,fri-lse,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.8 | 33 |
| RES_DEEP (ohm.m) | 22.35 | 33 |
| RES_SHALLOW (ohm.m) | 18.97 | 33 |

---

### 2225 m MD — Interval 2222.5 – 2227.5 m

**Sample Description (spreadsheet):** Sample 2225m: 100% Sandstone (litho ASCII aggregate) TG 482.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | uncons (0.85) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 90.0% None |
| Total Gas | 482.4764705882353 U |
| mTVDss | -1201.65 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2213m: clr,trnsl,f-crs, pred med,pr-fr srt,sbang-sbrnd, 67 / 7 / 6 / 9 / 11 593U tr sil cmt,tr wh arg mtx,tr mica flks,fri-lse,gd inf por,fluor.
- **SANDSTONE** @ ~2225m: clr,trnsl,f-med, mnr crs,pr-fr srt,sbang-sbrnd, trsilcmttrwhargmtxtrmica tr sil cmt,tr wh arg mtx,tr mica flks,fri-lse,gd inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.5 | 33 |
| RES_DEEP (ohm.m) | 21.30 | 33 |
| RES_SHALLOW (ohm.m) | 18.99 | 33 |

---

### 2230 m MD — Interval 2227.5 – 2232.5 m

**Sample Description (spreadsheet):** Sample 2230m: 100% Sandstone (litho ASCII aggregate) TG 424.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | uncons (0.85) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 90.0% None |
| Total Gas | 424.61875 U |
| mTVDss | -1201.71 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2213m: clr,trnsl,f-crs, pred med,pr-fr srt,sbang-sbrnd, 67 / 7 / 6 / 9 / 11 593U tr sil cmt,tr wh arg mtx,tr mica flks,fri-lse,gd inf por,fluor.
- **SANDSTONE** @ ~2225m: clr,trnsl,f-med, mnr crs,pr-fr srt,sbang-sbrnd, trsilcmttrwhargmtxtrmica tr sil cmt,tr wh arg mtx,tr mica flks,fri-lse,gd inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.3 | 32 |
| RES_DEEP (ohm.m) | 19.90 | 32 |
| RES_SHALLOW (ohm.m) | 17.99 | 32 |

---

### 2235 m MD — Interval 2232.5 – 2237.5 m

**Sample Description (spreadsheet):** Sample 2235m: 100% Sandstone (litho ASCII aggregate) TG 470.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | uncons (0.85) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 90.0% None |
| Total Gas | 470.3125 U |
| mTVDss | -1201.76 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2225m: clr,trnsl,f-med, mnr crs,pr-fr srt,sbang-sbrnd, trsilcmttrwhargmtxtrmica tr sil cmt,tr wh arg mtx,tr mica flks,fri-lse,gd inf por,fluor.
- **SANDSTONE** @ ~2231m: 9.5 7340 SANDSTONE:clr,trnsl,opq, Ck:1 off wh,f-med,tr crs,pr-mod srt, Cl:79k (4082) sbang-sbrnd,tr wk sil cmt,tr off wh arg mtx,mnr mica flks,fri aggs, cln lse grs i/p,gd vis & inf por,
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.5 | 33 |
| RES_DEEP (ohm.m) | 19.60 | 33 |
| RES_SHALLOW (ohm.m) | 17.84 | 33 |

---

### 2240 m MD — Interval 2237.5 – 2242.5 m

**Sample Description (spreadsheet):** Sample 2240m: 100% Sandstone (litho ASCII aggregate) TG 465.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | uncons (0.85) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr sil cmt (0.84) |
| Fluorescence | 90.0% None |
| Total Gas | 465.3764705882353 U |
| mTVDss | -1201.81 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2225m: clr,trnsl,f-med, mnr crs,pr-fr srt,sbang-sbrnd, trsilcmttrwhargmtxtrmica tr sil cmt,tr wh arg mtx,tr mica flks,fri-lse,gd inf por,fluor.
- **SANDSTONE** @ ~2231m: 9.5 7340 SANDSTONE:clr,trnsl,opq, Ck:1 off wh,f-med,tr crs,pr-mod srt, Cl:79k (4082) sbang-sbrnd,tr wk sil cmt,tr off wh arg mtx,mnr mica flks,fri aggs, cln lse grs i/p,gd vis & inf por,
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.5 | 33 |
| RES_DEEP (ohm.m) | 18.96 | 33 |
| RES_SHALLOW (ohm.m) | 17.41 | 33 |

---

### 2245 m MD — Interval 2242.5 – 2247.5 m

**Sample Description (spreadsheet):** Sample 2245m: 100% Sandstone (litho ASCII aggregate) TG 483.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.90) |
| Fluorescence | 90.0% None |
| Total Gas | 483.51250000000005 U |
| mTVDss | -1201.86 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2231m: 9.5 7340 SANDSTONE:clr,trnsl,opq, Ck:1 off wh,f-med,tr crs,pr-mod srt, Cl:79k (4082) sbang-sbrnd,tr wk sil cmt,tr off wh arg mtx,mnr mica flks,fri aggs, cln lse grs i/p,gd vis & inf por,
- **SANDSTONE** @ ~2249m: clr,trnsl,opq, 67 / 7 / 6 / 9 / 11 512U off wh,f-med,tr crs,pr-mod srt, sbang-sbrnd,tr wk sil cmt,tr off wh arg mtx,mnr mica flks,fri aggs, cln lse grs i/p,gd vis & inf por,
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.6 | 33 |
| RES_DEEP (ohm.m) | 20.43 | 33 |
| RES_SHALLOW (ohm.m) | 18.47 | 33 |

---

### 2250 m MD — Interval 2247.5 – 2252.5 m

**Sample Description (spreadsheet):** Sample 2250m: 100% Sandstone (litho ASCII aggregate) TG 496.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.90) |
| Fluorescence | 90.0% None |
| Total Gas | 496.05882352941177 U |
| mTVDss | -1201.87 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2249m: clr,trnsl,opq, 67 / 7 / 6 / 9 / 11 512U off wh,f-med,tr crs,pr-mod srt, sbang-sbrnd,tr wk sil cmt,tr off wh arg mtx,mnr mica flks,fri aggs, cln lse grs i/p,gd vis & inf por,
- **SANDSTONE** @ ~2259m: clr,trnsl,opq, off wh,f-med,tr crs,pr-mod srt, sbang-sbrnd,tr wk sil cmt,tr off wh arg mtx,mnr mica flks,fri aggs, cln lse grs i/p,gd vis & inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.3 | 33 |
| RES_DEEP (ohm.m) | 21.25 | 33 |
| RES_SHALLOW (ohm.m) | 19.18 | 33 |

---

### 2255 m MD — Interval 2252.5 – 2257.5 m

**Sample Description (spreadsheet):** Sample 2255m: 100% Sandstone (litho ASCII aggregate) TG 461.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.80) |
| Fluorescence | 90.0% None |
| Total Gas | 461.63125 U |
| mTVDss | -1201.86 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2249m: clr,trnsl,opq, 67 / 7 / 6 / 9 / 11 512U off wh,f-med,tr crs,pr-mod srt, sbang-sbrnd,tr wk sil cmt,tr off wh arg mtx,mnr mica flks,fri aggs, cln lse grs i/p,gd vis & inf por,
- **SANDSTONE** @ ~2259m: clr,trnsl,opq, off wh,f-med,tr crs,pr-mod srt, sbang-sbrnd,tr wk sil cmt,tr off wh arg mtx,mnr mica flks,fri aggs, cln lse grs i/p,gd vis & inf por,
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.5 | 32 |
| RES_DEEP (ohm.m) | 22.34 | 32 |
| RES_SHALLOW (ohm.m) | 19.94 | 32 |

---

### 2260 m MD — Interval 2257.5 – 2262.5 m

**Sample Description (spreadsheet):** Sample 2260m: 100% Sandstone (litho ASCII aggregate) TG 431.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.80) |
| Fluorescence | 90.0% None |
| Total Gas | 431.74375 U |
| mTVDss | -1201.86 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2249m: clr,trnsl,opq, 67 / 7 / 6 / 9 / 11 512U off wh,f-med,tr crs,pr-mod srt, sbang-sbrnd,tr wk sil cmt,tr off wh arg mtx,mnr mica flks,fri aggs, cln lse grs i/p,gd vis & inf por,
- **SANDSTONE** @ ~2259m: clr,trnsl,opq, off wh,f-med,tr crs,pr-mod srt, sbang-sbrnd,tr wk sil cmt,tr off wh arg mtx,mnr mica flks,fri aggs, cln lse grs i/p,gd vis & inf por,
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.6 | 33 |
| RES_DEEP (ohm.m) | 21.56 | 33 |
| RES_SHALLOW (ohm.m) | 18.78 | 33 |

---

### 2265 m MD — Interval 2262.5 – 2267.5 m

**Sample Description (spreadsheet):** Sample 2265m: 100% Sandstone (litho ASCII aggregate) TG 498.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.80) |
| Fluorescence | 90.0% None |
| Total Gas | 498.3117647058823 U |
| mTVDss | -1201.86 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2249m: clr,trnsl,opq, 67 / 7 / 6 / 9 / 11 512U off wh,f-med,tr crs,pr-mod srt, sbang-sbrnd,tr wk sil cmt,tr off wh arg mtx,mnr mica flks,fri aggs, cln lse grs i/p,gd vis & inf por,
- **SANDSTONE** @ ~2259m: clr,trnsl,opq, off wh,f-med,tr crs,pr-mod srt, sbang-sbrnd,tr wk sil cmt,tr off wh arg mtx,mnr mica flks,fri aggs, cln lse grs i/p,gd vis & inf por,
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.0 | 33 |
| RES_DEEP (ohm.m) | 23.02 | 33 |
| RES_SHALLOW (ohm.m) | 20.45 | 33 |

---

### 2270 m MD — Interval 2267.5 – 2272.5 m

**Sample Description (spreadsheet):** Sample 2270m: 100% Sandstone (litho ASCII aggregate) TG 534.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.80) |
| Fluorescence | 90.0% None |
| Total Gas | 534.18125 U |
| mTVDss | -1201.85 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2259m: clr,trnsl,opq, off wh,f-med,tr crs,pr-mod srt, sbang-sbrnd,tr wk sil cmt,tr off wh arg mtx,mnr mica flks,fri aggs, cln lse grs i/p,gd vis & inf por,
- **SANDSTONE** @ ~2268m: trnsl,clr,off wh,f-med,tr crs,mod srt,sbang- sbrnd,wk sil cmt,tr off wh arg mtx, (4083) tr carb spks,fri,lse i/p,gd vis por,
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.5 | 33 |
| RES_DEEP (ohm.m) | 23.70 | 33 |
| RES_SHALLOW (ohm.m) | 21.73 | 33 |

---

### 2275 m MD — Interval 2272.5 – 2277.5 m

**Sample Description (spreadsheet):** Sample 2275m: 100% Sandstone (litho ASCII aggregate) TG 575.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.68) |
| Fluorescence | 90.0% None |
| Total Gas | 575.6705882352941 U |
| mTVDss | -1201.85 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2259m: clr,trnsl,opq, off wh,f-med,tr crs,pr-mod srt, sbang-sbrnd,tr wk sil cmt,tr off wh arg mtx,mnr mica flks,fri aggs, cln lse grs i/p,gd vis & inf por,
- **SANDSTONE** @ ~2268m: trnsl,clr,off wh,f-med,tr crs,mod srt,sbang- sbrnd,wk sil cmt,tr off wh arg mtx, (4083) tr carb spks,fri,lse i/p,gd vis por,
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.3 | 33 |
| RES_DEEP (ohm.m) | 25.71 | 33 |
| RES_SHALLOW (ohm.m) | 22.76 | 33 |

---

### 2280 m MD — Interval 2277.5 – 2282.5 m

**Sample Description (spreadsheet):** Sample 2280m: 100% Sandstone (litho ASCII aggregate) TG 612.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 90.0% None |
| Total Gas | 612.73125 U |
| mTVDss | -1201.84 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2268m: trnsl,clr,off wh,f-med,tr crs,mod srt,sbang- sbrnd,wk sil cmt,tr off wh arg mtx, (4083) tr carb spks,fri,lse i/p,gd vis por,
- **SANDSTONE** @ ~2280m: trnsl,clr,f-crs, pr srt,sbrnd-occ sbang,tr wk sil cmt,tr mica flks,pred lse/cln agg qtz grs,gd inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.9 | 33 |
| RES_DEEP (ohm.m) | 26.74 | 33 |
| RES_SHALLOW (ohm.m) | 23.38 | 33 |

---

### 2285 m MD — Interval 2282.5 – 2287.5 m

**Sample Description (spreadsheet):** Sample 2285m: 100% Sandstone (litho ASCII aggregate) TG 554.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel wh ptchy-evn |
| Total Gas | 554.65625 U |
| mTVDss | -1201.83 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2268m: trnsl,clr,off wh,f-med,tr crs,mod srt,sbang- sbrnd,wk sil cmt,tr off wh arg mtx, (4083) tr carb spks,fri,lse i/p,gd vis por,
- **SANDSTONE** @ ~2280m: trnsl,clr,f-crs, pr srt,sbrnd-occ sbang,tr wk sil cmt,tr mica flks,pred lse/cln agg qtz grs,gd inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.4 | 32 |
| RES_DEEP (ohm.m) | 27.86 | 32 |
| RES_SHALLOW (ohm.m) | 23.89 | 32 |

---

### 2290 m MD — Interval 2287.5 – 2292.5 m

**Sample Description (spreadsheet):** Sample 2290m: 100% Sandstone (litho ASCII aggregate) TG 512.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel wh ptchy-evn |
| Total Gas | 512.3764705882353 U |
| mTVDss | -1201.83 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2280m: trnsl,clr,f-crs, pr srt,sbrnd-occ sbang,tr wk sil cmt,tr mica flks,pred lse/cln agg qtz grs,gd inf por,fluor.
- **SANDSTONE** @ ~2292m: clr,trnsl,opq, off wh,f-crs,pr-mod srt,sbrnd-sbang, t k il il t ff h t tr wk sil sil cmt,mnr off wh arg mtx, 67 / 7 / 6 / 9 / 11 577U tr mica flks,tr carb spks & incl,fri
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.9 | 33 |
| RES_DEEP (ohm.m) | 29.24 | 33 |
| RES_SHALLOW (ohm.m) | 24.98 | 33 |

---

### 2295 m MD — Interval 2292.5 – 2297.5 m

**Sample Description (spreadsheet):** Sample 2295m: 100% Sandstone (litho ASCII aggregate) TG 566.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel wh ptchy-evn |
| Total Gas | 566.48125 U |
| mTVDss | -1201.82 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2280m: trnsl,clr,f-crs, pr srt,sbrnd-occ sbang,tr wk sil cmt,tr mica flks,pred lse/cln agg qtz grs,gd inf por,fluor.
- **SANDSTONE** @ ~2292m: clr,trnsl,opq, off wh,f-crs,pr-mod srt,sbrnd-sbang, t k il il t ff h t tr wk sil sil cmt,mnr off wh arg mtx, 67 / 7 / 6 / 9 / 11 577U tr mica flks,tr carb spks & incl,fri
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.5 | 33 |
| RES_DEEP (ohm.m) | 29.86 | 33 |
| RES_SHALLOW (ohm.m) | 24.01 | 33 |

---

### 2300 m MD — Interval 2297.5 – 2302.5 m

**Sample Description (spreadsheet):** Sample 2300m: 100% Sandstone (litho ASCII aggregate) TG 633.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel wh ptchy-evn |
| Total Gas | 633.3764705882354 U |
| mTVDss | -1201.81 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2292m: clr,trnsl,opq, off wh,f-crs,pr-mod srt,sbrnd-sbang, t k il il t ff h t tr wk sil sil cmt,mnr off wh arg mtx, 67 / 7 / 6 / 9 / 11 577U tr mica flks,tr carb spks & incl,fri
- **SANDSTONE** @ ~2304m: trnsl,clr,f-crs,pred med,pr-fr srt,sbang-sbrnd,tr wk sil cmt,tr wh arg mtx,lse,gd inf
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.6 | 33 |
| RES_DEEP (ohm.m) | 28.77 | 33 |
| RES_SHALLOW (ohm.m) | 23.81 | 33 |

---

### 2305 m MD — Interval 2302.5 – 2307.5 m

**Sample Description (spreadsheet):** Sample 2305m: 100% Sandstone (litho ASCII aggregate) TG 707.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% mod bri-bri yel wh ptchy-evn |
| Total Gas | 707.29375 U |
| mTVDss | -1201.80 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2292m: clr,trnsl,opq, off wh,f-crs,pr-mod srt,sbrnd-sbang, t k il il t ff h t tr wk sil sil cmt,mnr off wh arg mtx, 67 / 7 / 6 / 9 / 11 577U tr mica flks,tr carb spks & incl,fri
- **SANDSTONE** @ ~2304m: trnsl,clr,f-crs,pred med,pr-fr srt,sbang-sbrnd,tr wk sil cmt,tr wh arg mtx,lse,gd inf
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.8 | 33 |
| RES_DEEP (ohm.m) | 28.36 | 33 |
| RES_SHALLOW (ohm.m) | 23.07 | 33 |

---

### 2310 m MD — Interval 2307.5 – 2312.5 m

**Sample Description (spreadsheet):** Sample 2310m: 100% Sandstone (litho ASCII aggregate) TG 713.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.90) |
| Fluorescence | 90.0% mod bri-bri yel wh ptchy-evn |
| Total Gas | 713.85 U |
| mTVDss | -1201.77 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2304m: trnsl,clr,f-crs,pred med,pr-fr srt,sbang-sbrnd,tr wk sil cmt,tr wh arg mtx,lse,gd inf
- **SANDSTONE** @ ~2313m: trnsl,clr,f-crs,pred med,pr-fr srt,sbang-sbrnd,tr wk sil cmt,tr wh arg mtx,cln lse qtz grs,tr mica,gd inf por,fluor. 0 0.5 1 4 14 7600

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.1 | 32 |
| RES_DEEP (ohm.m) | 27.20 | 32 |
| RES_SHALLOW (ohm.m) | 22.95 | 32 |

---

### 2315 m MD — Interval 2312.5 – 2317.5 m

**Sample Description (spreadsheet):** Sample 2315m: 100% Sandstone (litho ASCII aggregate) TG 550.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.90) |
| Fluorescence | 90.0% mod bri-bri yel wh ptchy-evn |
| Total Gas | 550.2823529411764 U |
| mTVDss | -1201.75 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2304m: trnsl,clr,f-crs,pred med,pr-fr srt,sbang-sbrnd,tr wk sil cmt,tr wh arg mtx,lse,gd inf
- **SANDSTONE** @ ~2313m: trnsl,clr,f-crs,pred med,pr-fr srt,sbang-sbrnd,tr wk sil cmt,tr wh arg mtx,cln lse qtz grs,tr mica,gd inf por,fluor. 0 0.5 1 4 14 7600

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.8 | 33 |
| RES_DEEP (ohm.m) | 26.66 | 33 |
| RES_SHALLOW (ohm.m) | 21.64 | 33 |

---

### 2320 m MD — Interval 2317.5 – 2322.5 m

**Sample Description (spreadsheet):** Sample 2320m: 100% Sandstone (litho ASCII aggregate) TG 499.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.90) |
| Fluorescence | 90.0% mod bri-bri yel wh ptchy-evn |
| Total Gas | 499.80625000000003 U |
| mTVDss | -1201.73 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2304m: trnsl,clr,f-crs,pred med,pr-fr srt,sbang-sbrnd,tr wk sil cmt,tr wh arg mtx,lse,gd inf
- **SANDSTONE** @ ~2313m: trnsl,clr,f-crs,pred med,pr-fr srt,sbang-sbrnd,tr wk sil cmt,tr wh arg mtx,cln lse qtz grs,tr mica,gd inf por,fluor. 0 0.5 1 4 14 7600
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.6 | 33 |
| RES_DEEP (ohm.m) | 27.10 | 33 |
| RES_SHALLOW (ohm.m) | 21.83 | 33 |

---

### 2325 m MD — Interval 2322.5 – 2327.5 m

**Sample Description (spreadsheet):** Sample 2325m: 100% Sandstone (litho ASCII aggregate) TG 453.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri-bri yel wh ptchy-evn |
| Total Gas | 453.18823529411765 U |
| mTVDss | -1201.70 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2313m: trnsl,clr,f-crs,pred med,pr-fr srt,sbang-sbrnd,tr wk sil cmt,tr wh arg mtx,cln lse qtz grs,tr mica,gd inf por,fluor. 0 0.5 1 4 14 7600
- **SANDSTONE** @ ~2335m: trnsl,clr,tr v lt brn, f-crs,pred med,pr-fr srt,sbang- sbrnd,tr wk sil cmt,tr wh arg mtx, 67 / 7 / 6 / 9 / 11 cln lse qtz grs,tr mica,gd inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.7 | 33 |
| RES_DEEP (ohm.m) | 26.19 | 33 |
| RES_SHALLOW (ohm.m) | 21.66 | 33 |

---

### 2330 m MD — Interval 2327.5 – 2332.5 m

**Sample Description (spreadsheet):** Sample 2330m: 100% Sandstone (litho ASCII aggregate) TG 474.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri-bri yel wh ptchy-evn |
| Total Gas | 474.29999999999995 U |
| mTVDss | -1201.68 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2313m: trnsl,clr,f-crs,pred med,pr-fr srt,sbang-sbrnd,tr wk sil cmt,tr wh arg mtx,cln lse qtz grs,tr mica,gd inf por,fluor. 0 0.5 1 4 14 7600
- **SANDSTONE** @ ~2335m: trnsl,clr,tr v lt brn, f-crs,pred med,pr-fr srt,sbang- sbrnd,tr wk sil cmt,tr wh arg mtx, 67 / 7 / 6 / 9 / 11 cln lse qtz grs,tr mica,gd inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.0 | 33 |
| RES_DEEP (ohm.m) | 26.68 | 33 |
| RES_SHALLOW (ohm.m) | 22.08 | 33 |

---

### 2335 m MD — Interval 2332.5 – 2337.5 m

**Sample Description (spreadsheet):** Sample 2335m: 100% Sandstone (litho ASCII aggregate) TG 574.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri-bri yel wh ptchy-evn |
| Total Gas | 574.03125 U |
| mTVDss | -1201.65 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2335m: trnsl,clr,tr v lt brn, f-crs,pred med,pr-fr srt,sbang- sbrnd,tr wk sil cmt,tr wh arg mtx, 67 / 7 / 6 / 9 / 11 cln lse qtz grs,tr mica,gd inf por,fluor.
- **SANDSTONE** @ ~2341m: trnsl,clr,off wh,v lt brn,f-med,mod wl srt,sbang- sbrnd,wk sil cmt,mnr off wh arg mtx,tr mica,fri,gd inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.4 | 32 |
| RES_DEEP (ohm.m) | 26.56 | 32 |
| RES_SHALLOW (ohm.m) | 23.28 | 32 |

---

### 2340 m MD — Interval 2337.5 – 2342.5 m

**Sample Description (spreadsheet):** Sample 2340m: 100% Sandstone (litho ASCII aggregate) TG 529.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri-bri yel wh ptchy-evn |
| Total Gas | 529.1529411764706 U |
| mTVDss | -1201.59 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2335m: trnsl,clr,tr v lt brn, f-crs,pred med,pr-fr srt,sbang- sbrnd,tr wk sil cmt,tr wh arg mtx, 67 / 7 / 6 / 9 / 11 cln lse qtz grs,tr mica,gd inf por,fluor.
- **SANDSTONE** @ ~2341m: trnsl,clr,off wh,v lt brn,f-med,mod wl srt,sbang- sbrnd,wk sil cmt,mnr off wh arg mtx,tr mica,fri,gd inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.9 | 33 |
| RES_DEEP (ohm.m) | 28.23 | 33 |
| RES_SHALLOW (ohm.m) | 23.80 | 33 |

---

### 2345 m MD — Interval 2342.5 – 2347.5 m

**Sample Description (spreadsheet):** Sample 2345m: 100% Sandstone (litho ASCII aggregate) TG 556.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri-bri yel wh ptchy-evn |
| Total Gas | 556.69375 U |
| mTVDss | -1201.54 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2335m: trnsl,clr,tr v lt brn, f-crs,pred med,pr-fr srt,sbang- sbrnd,tr wk sil cmt,tr wh arg mtx, 67 / 7 / 6 / 9 / 11 cln lse qtz grs,tr mica,gd inf por,fluor.
- **SANDSTONE** @ ~2341m: trnsl,clr,off wh,v lt brn,f-med,mod wl srt,sbang- sbrnd,wk sil cmt,mnr off wh arg mtx,tr mica,fri,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.4 | 33 |
| RES_DEEP (ohm.m) | 33.03 | 33 |
| RES_SHALLOW (ohm.m) | 24.96 | 33 |

---

### 2350 m MD — Interval 2347.5 – 2352.5 m

**Sample Description (spreadsheet):** Sample 2350m: 100% Sandstone (litho ASCII aggregate) TG 560.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri-bri yel wh ptchy-evn |
| Total Gas | 560.0117647058823 U |
| mTVDss | -1201.49 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2335m: trnsl,clr,tr v lt brn, f-crs,pred med,pr-fr srt,sbang- sbrnd,tr wk sil cmt,tr wh arg mtx, 67 / 7 / 6 / 9 / 11 cln lse qtz grs,tr mica,gd inf por,fluor.
- **SANDSTONE** @ ~2341m: trnsl,clr,off wh,v lt brn,f-med,mod wl srt,sbang- sbrnd,wk sil cmt,mnr off wh arg mtx,tr mica,fri,gd inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.3 | 33 |
| RES_DEEP (ohm.m) | 31.32 | 33 |
| RES_SHALLOW (ohm.m) | 24.17 | 33 |

---

### 2355 m MD — Interval 2352.5 – 2357.5 m

**Sample Description (spreadsheet):** Sample 2355m: 100% Sandstone (litho ASCII aggregate) TG 493.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri-bri yel wh ptchy-evn |
| Total Gas | 493.63749999999993 U |
| mTVDss | -1201.44 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2341m: trnsl,clr,off wh,v lt brn,f-med,mod wl srt,sbang- sbrnd,wk sil cmt,mnr off wh arg mtx,tr mica,fri,gd inf por,fluor.
- **SILTSTONE** @ ~2350m: med dk gry,tr carb spks,tr mica,mod hd,blky-sbblky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.6 | 33 |
| RES_DEEP (ohm.m) | 34.94 | 33 |
| RES_SHALLOW (ohm.m) | 26.46 | 33 |

---

### 2360 m MD — Interval 2357.5 – 2362.5 m

**Sample Description (spreadsheet):** Sample 2360m: 100% Sandstone (litho ASCII aggregate) TG 634.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri-bri yel wh ptchy-evn |
| Total Gas | 633.95 U |
| mTVDss | -1201.39 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2350m: med dk gry,tr carb spks,tr mica,mod hd,blky-sbblky.
- **SANDSTONE** @ ~2362m: clr,opq,trnsl,off wh,f- med,rr crs grs,mod srt,sbang-sbrnd, 7760 mod-wk sil cmt,off wh arg mtx i/p, tr mica,tr liths,rr carb spks,dom lse cln grs,tr fri aggs,gd vis por,
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.0 | 32 |
| RES_DEEP (ohm.m) | 38.79 | 32 |
| RES_SHALLOW (ohm.m) | 28.95 | 32 |

---

### 2365 m MD — Interval 2362.5 – 2367.5 m

**Sample Description (spreadsheet):** Sample 2365m: 100% Sandstone (litho ASCII aggregate) TG 698.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri-bri yel wh ptchy-evn |
| Total Gas | 698.8882352941175 U |
| mTVDss | -1201.32 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2350m: med dk gry,tr carb spks,tr mica,mod hd,blky-sbblky.
- **SANDSTONE** @ ~2362m: clr,opq,trnsl,off wh,f- med,rr crs grs,mod srt,sbang-sbrnd, 7760 mod-wk sil cmt,off wh arg mtx i/p, tr mica,tr liths,rr carb spks,dom lse cln grs,tr fri aggs,gd vis por,
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.5 | 33 |
| RES_DEEP (ohm.m) | 39.36 | 33 |
| RES_SHALLOW (ohm.m) | 31.37 | 33 |

---

### 2370 m MD — Interval 2367.5 – 2372.5 m

**Sample Description (spreadsheet):** Sample 2370m: 100% Sandstone (litho ASCII aggregate) TG 599.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri-bri yel wh ptchy-evn |
| Total Gas | 599.2647058823529 U |
| mTVDss | -1201.25 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2362m: clr,opq,trnsl,off wh,f- med,rr crs grs,mod srt,sbang-sbrnd, 7760 mod-wk sil cmt,off wh arg mtx i/p, tr mica,tr liths,rr carb spks,dom lse cln grs,tr fri aggs,gd vis por,
- **SANDSTONE** @ ~2374m: 434-517 gpm SANDSTONE:trnsl,clr,f-crs,pred med,pr srt,sbang-sbrnd,rr wk sil cmt,pred lse qtz grs,gd vis inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.5 | 33 |
| RES_DEEP (ohm.m) | 44.75 | 33 |
| RES_SHALLOW (ohm.m) | 37.65 | 33 |

---

### 2375 m MD — Interval 2372.5 – 2377.5 m

**Sample Description (spreadsheet):** Sample 2375m: 100% Sandstone (litho ASCII aggregate) TG 617.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri-bri yel wh ptchy-evn |
| Total Gas | 617.1823529411764 U |
| mTVDss | -1201.18 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2362m: clr,opq,trnsl,off wh,f- med,rr crs grs,mod srt,sbang-sbrnd, 7760 mod-wk sil cmt,off wh arg mtx i/p, tr mica,tr liths,rr carb spks,dom lse cln grs,tr fri aggs,gd vis por,
- **SANDSTONE** @ ~2374m: 434-517 gpm SANDSTONE:trnsl,clr,f-crs,pred med,pr srt,sbang-sbrnd,rr wk sil cmt,pred lse qtz grs,gd vis inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.6 | 33 |
| RES_DEEP (ohm.m) | 45.88 | 33 |
| RES_SHALLOW (ohm.m) | 34.62 | 33 |

---

### 2380 m MD — Interval 2377.5 – 2382.5 m

**Sample Description (spreadsheet):** Sample 2380m: 100% Sandstone (litho ASCII aggregate) TG 623.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | rr wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri-bri yel wh ptchy-evn |
| Total Gas | 623.29375 U |
| mTVDss | -1201.11 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2374m: 434-517 gpm SANDSTONE:trnsl,clr,f-crs,pred med,pr srt,sbang-sbrnd,rr wk sil cmt,pred lse qtz grs,gd vis inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.0 | 33 |
| RES_DEEP (ohm.m) | 46.97 | 33 |
| RES_SHALLOW (ohm.m) | 36.64 | 33 |

---

### 2385 m MD — Interval 2382.5 – 2387.5 m

**Sample Description (spreadsheet):** Sample 2385m: 100% Sandstone (litho ASCII aggregate) TG 581.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | rr wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri-bri yel wh evn |
| Total Gas | 581.7882352941176 U |
| mTVDss | -1201.03 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2374m: 434-517 gpm SANDSTONE:trnsl,clr,f-crs,pred med,pr srt,sbang-sbrnd,rr wk sil cmt,pred lse qtz grs,gd vis inf por,
- **SANDSTONE** @ ~2402m: trnsl,clr,f-crs,pred MW:9.4 med,pr srt,sbang-sbrnd,rr wk sil FV:44 cmt,pred lse qtz grs,gd vis inf por,
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.0 | 33 |
| RES_DEEP (ohm.m) | 45.95 | 33 |
| RES_SHALLOW (ohm.m) | 39.13 | 33 |

---

### 2390 m MD — Interval 2387.5 – 2392.5 m

**Sample Description (spreadsheet):** Sample 2390m: 100% Sandstone (litho ASCII aggregate) TG 626.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | rr wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri-bri yel wh evn |
| Total Gas | 626.64375 U |
| mTVDss | -1200.96 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2374m: 434-517 gpm SANDSTONE:trnsl,clr,f-crs,pred med,pr srt,sbang-sbrnd,rr wk sil cmt,pred lse qtz grs,gd vis inf por,
- **SANDSTONE** @ ~2402m: trnsl,clr,f-crs,pred MW:9.4 med,pr srt,sbang-sbrnd,rr wk sil FV:44 cmt,pred lse qtz grs,gd vis inf por,
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.0 | 32 |
| RES_DEEP (ohm.m) | 40.18 | 32 |
| RES_SHALLOW (ohm.m) | 34.14 | 32 |

---

### 2395 m MD — Interval 2392.5 – 2397.5 m

**Sample Description (spreadsheet):** Sample 2395m: 100% Sandstone (litho ASCII aggregate) TG 666.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Fluorescence | 90.0% mod bri-bri yel wh evn |
| Total Gas | 666.325 U |
| mTVDss | -1200.94 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2402m: trnsl,clr,f-crs,pred MW:9.4 med,pr srt,sbang-sbrnd,rr wk sil FV:44 cmt,pred lse qtz grs,gd vis inf por,
- **SILTSTONE** @ ~2402m: med gry,med dk gry,tr 7910 micmic,mod hd,sbblky. mod bri ppt-ptchy,mod bri inst cut,mod bri thn r/r.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.7 | 33 |
| RES_DEEP (ohm.m) | 46.54 | 33 |
| RES_SHALLOW (ohm.m) | 35.62 | 33 |

---

### 2450 m MD — Interval 2447.5 – 2452.5 m

**Sample Description (spreadsheet):** Sample 2450m: 100% Sandstone (litho ASCII aggregate) TG 161.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 90.0% mod bri-bri yel wh evn |
| Total Gas | 161.38235294117646 U |
| mTVDss | -1201.22 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2441m: mod gry,mod dk gry, aren,rr carb spks,rr micmic & liths, frm-mod hd,blky.
- **SANDSTONE** @ ~2451m: off wh,trnsl,clr,v lt brn,f-crs,pr srt,ang-sbrnd,wk-mod strg sil cmt,com off wh-v lt brn (4081) 74 / 6 / 4 / 7 / 9 202 U arg mtx,rr carb spks,tr micmic,tr 8050 liths,fri-mod hd,occ hd,pr inf
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 116.0 | 33 |
| RES_DEEP (ohm.m) | 45.01 | 33 |
| RES_SHALLOW (ohm.m) | 29.17 | 33 |

---

### 2455 m MD — Interval 2452.5 – 2457.5 m

**Sample Description (spreadsheet):** Sample 2455m: 100% Sandstone (litho ASCII aggregate) TG 178.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 90.0% mod bri-bri yel wh evn |
| Total Gas | 178.14375 U |
| mTVDss | -1201.27 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2441m: mod gry,mod dk gry, aren,rr carb spks,rr micmic & liths, frm-mod hd,blky.
- **SANDSTONE** @ ~2451m: off wh,trnsl,clr,v lt brn,f-crs,pr srt,ang-sbrnd,wk-mod strg sil cmt,com off wh-v lt brn (4081) 74 / 6 / 4 / 7 / 9 202 U arg mtx,rr carb spks,tr micmic,tr 8050 liths,fri-mod hd,occ hd,pr inf
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.6 | 33 |
| RES_DEEP (ohm.m) | 46.83 | 33 |
| RES_SHALLOW (ohm.m) | 30.47 | 33 |

---

### 2460 m MD — Interval 2457.5 – 2462.5 m

**Sample Description (spreadsheet):** Sample 2460m: 100% Sandstone (litho ASCII aggregate) TG 191.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel wh ptchy evn |
| Total Gas | 191.1823529411765 U |
| mTVDss | -1201.32 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2451m: off wh,trnsl,clr,v lt brn,f-crs,pr srt,ang-sbrnd,wk-mod strg sil cmt,com off wh-v lt brn (4081) 74 / 6 / 4 / 7 / 9 202 U arg mtx,rr carb spks,tr micmic,tr 8050 liths,fri-mod hd,occ hd,pr inf
- **SILTSTONE** @ ~2457m: med gry,med dk gry, rr med dk gry brn,aren,tr-rr carb 8070 spks,tr micmic,rr liths,frm-mod hd,sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.9 | 33 |
| RES_DEEP (ohm.m) | 47.94 | 33 |
| RES_SHALLOW (ohm.m) | 32.36 | 33 |

---

### 2465 m MD — Interval 2462.5 – 2467.5 m

**Sample Description (spreadsheet):** Sample 2465m: 100% Sandstone (litho ASCII aggregate) TG 187.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 90.0% mod bri yel wh ptchy evn |
| Total Gas | 187.34375 U |
| mTVDss | -1201.38 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2451m: off wh,trnsl,clr,v lt brn,f-crs,pr srt,ang-sbrnd,wk-mod strg sil cmt,com off wh-v lt brn (4081) 74 / 6 / 4 / 7 / 9 202 U arg mtx,rr carb spks,tr micmic,tr 8050 liths,fri-mod hd,occ hd,pr inf
- **SILTSTONE** @ ~2457m: med gry,med dk gry, rr med dk gry brn,aren,tr-rr carb 8070 spks,tr micmic,rr liths,frm-mod hd,sbblky.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.2 | 32 |
| RES_DEEP (ohm.m) | 50.37 | 32 |
| RES_SHALLOW (ohm.m) | 34.20 | 32 |

---

### 2470 m MD — Interval 2467.5 – 2472.5 m

**Sample Description (spreadsheet):** Sample 2470m: 100% Sandstone (litho ASCII aggregate) TG 193.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | uncons (0.85) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.61) |
| Fluorescence | 90.0% mod bri yel wh ptchy evn |
| Total Gas | 193.02499999999998 U |
| mTVDss | -1201.43 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2457m: med gry,med dk gry, rr med dk gry brn,aren,tr-rr carb 8070 spks,tr micmic,rr liths,frm-mod hd,sbblky.
- **SANDSTONE** @ ~2466m: off wh-v lt brn,clr- trnsl,opq,f-crs,dom f aggs,pr srt, sbrnd-sbang,com wk sil cmt,com off wh arg mtx,rr carb spks,tr liths, fri aggs,com cln lse qtz grs,fr vis
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.2 | 33 |
| RES_DEEP (ohm.m) | 48.42 | 33 |
| RES_SHALLOW (ohm.m) | 36.19 | 33 |

---

### 2475 m MD — Interval 2472.5 – 2477.5 m

**Sample Description (spreadsheet):** Sample 2475m: 100% Sandstone (litho ASCII aggregate) TG 251.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | uncons (0.85) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.61) |
| Fluorescence | 90.0% mod bri yel wh ptchy evn |
| Total Gas | 251.48823529411766 U |
| mTVDss | -1201.48 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2466m: off wh-v lt brn,clr- trnsl,opq,f-crs,dom f aggs,pr srt, sbrnd-sbang,com wk sil cmt,com off wh arg mtx,rr carb spks,tr liths, fri aggs,com cln lse qtz grs,fr vis
- **SANDSTONE** @ ~2466m: clr,frstd,trnsl,tr off 8110 wh,dom crs,tr f-med,sbrnd-rnd,tr wk sil cmt,tr off wh arg mtx,dom cln lse grs,tr fri aggs,gd inf por, fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.0 | 33 |
| RES_DEEP (ohm.m) | 42.98 | 33 |
| RES_SHALLOW (ohm.m) | 38.48 | 33 |

---

### 2480 m MD — Interval 2477.5 – 2482.5 m

**Sample Description (spreadsheet):** Sample 2480m: 100% Sandstone (litho ASCII aggregate) TG 295.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | uncons (0.85) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | com wk sil cmt (0.61) |
| Fluorescence | 90.0% mod bri yel wh ptchy evn |
| Total Gas | 295.01250000000005 U |
| mTVDss | -1201.53 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2466m: off wh-v lt brn,clr- trnsl,opq,f-crs,dom f aggs,pr srt, sbrnd-sbang,com wk sil cmt,com off wh arg mtx,rr carb spks,tr liths, fri aggs,com cln lse qtz grs,fr vis
- **SANDSTONE** @ ~2466m: clr,frstd,trnsl,tr off 8110 wh,dom crs,tr f-med,sbrnd-rnd,tr wk sil cmt,tr off wh arg mtx,dom cln lse grs,tr fri aggs,gd inf por, fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.5 | 33 |
| RES_DEEP (ohm.m) | 40.82 | 33 |
| RES_SHALLOW (ohm.m) | 35.43 | 33 |

---

### 2485 m MD — Interval 2482.5 – 2487.5 m

**Sample Description (spreadsheet):** Sample 2485m: 100% Sandstone (litho ASCII aggregate) TG 308.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | uncons (0.85) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel wh ptchy evn |
| Total Gas | 308.40000000000003 U |
| mTVDss | -1201.56 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2478m: trnsl,clr,off wh,f- crs,pr srt,sbang-sbrnd,nil-wk sil 8140 cmt,mnr off wh arg mtx,tr micmic, lse-fri aggs,fr-gd inf por,fluor. (4082)
- **SANDSTONE** @ ~2493m: off wh,clr-trnsl,v lt 8190 brn,f-crs,pr srt-med wl srt aggs, sbrnd-rnd,sbang i/p,mod-wk sil cmt i/p,mnr off wh arg mtx,mnr mica flks, rr carb spks,rr liths,com cln lse grs,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.5 | 33 |
| RES_DEEP (ohm.m) | 41.45 | 33 |
| RES_SHALLOW (ohm.m) | 33.80 | 33 |

---

### 2490 m MD — Interval 2487.5 – 2492.5 m

**Sample Description (spreadsheet):** Sample 2490m: 100% Sandstone (litho ASCII aggregate) TG 264.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | uncons (0.85) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel wh ptchy evn |
| Total Gas | 264.7875 U |
| mTVDss | -1201.59 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2478m: trnsl,clr,off wh,f- crs,pr srt,sbang-sbrnd,nil-wk sil 8140 cmt,mnr off wh arg mtx,tr micmic, lse-fri aggs,fr-gd inf por,fluor. (4082)
- **SANDSTONE** @ ~2493m: off wh,clr-trnsl,v lt 8190 brn,f-crs,pr srt-med wl srt aggs, sbrnd-rnd,sbang i/p,mod-wk sil cmt i/p,mnr off wh arg mtx,mnr mica flks, rr carb spks,rr liths,com cln lse grs,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.6 | 32 |
| RES_DEEP (ohm.m) | 44.60 | 32 |
| RES_SHALLOW (ohm.m) | 36.17 | 32 |

---

### 2495 m MD — Interval 2492.5 – 2497.5 m

**Sample Description (spreadsheet):** Sample 2495m: 100% Sandstone (litho ASCII aggregate) TG 313.9U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | fr-gd |
| Hardness | uncons (0.85) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel wh |
| Total Gas | 313.9125 U |
| mTVDss | -1201.63 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2478m: trnsl,clr,off wh,f- crs,pr srt,sbang-sbrnd,nil-wk sil 8140 cmt,mnr off wh arg mtx,tr micmic, lse-fri aggs,fr-gd inf por,fluor. (4082)
- **SANDSTONE** @ ~2493m: off wh,clr-trnsl,v lt 8190 brn,f-crs,pr srt-med wl srt aggs, sbrnd-rnd,sbang i/p,mod-wk sil cmt i/p,mnr off wh arg mtx,mnr mica flks, rr carb spks,rr liths,com cln lse grs,
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.8 | 33 |
| RES_DEEP (ohm.m) | 41.39 | 33 |
| RES_SHALLOW (ohm.m) | 35.62 | 33 |

---

### 2500 m MD — Interval 2497.5 – 2502.5 m

**Sample Description (spreadsheet):** Sample 2500m: 100% Sandstone (litho ASCII aggregate) TG 360.2U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel wh |
| Total Gas | 360.20000000000005 U |
| mTVDss | -1201.66 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2493m: off wh,clr-trnsl,v lt 8190 brn,f-crs,pr srt-med wl srt aggs, sbrnd-rnd,sbang i/p,mod-wk sil cmt i/p,mnr off wh arg mtx,mnr mica flks, rr carb spks,rr liths,com cln lse grs,
- **SANDSTONE** @ ~2512m: clr,trnsl,tr off wh, (4082) f-crs,pr srt,sbrnd,tr rnd,tr wk sil cmt,tr off wh arg mtx,tr mica flks,dom cln lse grs,gd inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.9 | 33 |
| RES_DEEP (ohm.m) | 45.63 | 33 |
| RES_SHALLOW (ohm.m) | 37.92 | 33 |

---

### 2505 m MD — Interval 2502.5 – 2507.5 m

**Sample Description (spreadsheet):** Sample 2505m: 100% Sandstone (litho ASCII aggregate) TG 362.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 90.0% mod bri yel wh |
| Total Gas | 362.625 U |
| mTVDss | -1201.70 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2493m: off wh,clr-trnsl,v lt 8190 brn,f-crs,pr srt-med wl srt aggs, sbrnd-rnd,sbang i/p,mod-wk sil cmt i/p,mnr off wh arg mtx,mnr mica flks, rr carb spks,rr liths,com cln lse grs,
- **SANDSTONE** @ ~2512m: clr,trnsl,tr off wh, (4082) f-crs,pr srt,sbrnd,tr rnd,tr wk sil cmt,tr off wh arg mtx,tr mica flks,dom cln lse grs,gd inf por,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.3 | 33 |
| RES_DEEP (ohm.m) | 49.51 | 33 |
| RES_SHALLOW (ohm.m) | 37.13 | 33 |

---

### 2510 m MD — Interval 2507.5 – 2512.5 m

**Sample Description (spreadsheet):** Sample 2510m: 100% Sandstone (litho ASCII aggregate) TG 374.7U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri yel wh |
| Total Gas | 374.65882352941173 U |
| mTVDss | -1201.73 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2493m: off wh,clr-trnsl,v lt 8190 brn,f-crs,pr srt-med wl srt aggs, sbrnd-rnd,sbang i/p,mod-wk sil cmt i/p,mnr off wh arg mtx,mnr mica flks, rr carb spks,rr liths,com cln lse grs,
- **SANDSTONE** @ ~2512m: clr,trnsl,tr off wh, (4082) f-crs,pr srt,sbrnd,tr rnd,tr wk sil cmt,tr off wh arg mtx,tr mica flks,dom cln lse grs,gd inf por,
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.0 | 33 |
| RES_DEEP (ohm.m) | 46.13 | 33 |
| RES_SHALLOW (ohm.m) | 35.88 | 33 |

---

### 2515 m MD — Interval 2512.5 – 2517.5 m

**Sample Description (spreadsheet):** Sample 2515m: 100% Sandstone (litho ASCII aggregate) TG 760.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.80) |
| Fluorescence | 80.0% mod bri yel wh |
| Total Gas | 760.2875 U |
| mTVDss | -1201.77 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2512m: clr,trnsl,tr off wh, (4082) f-crs,pr srt,sbrnd,tr rnd,tr wk sil cmt,tr off wh arg mtx,tr mica flks,dom cln lse grs,gd inf por,
- **SANDSTONE** @ ~2527m: off wh,clr,trnsl,v lt brn,f-crs,com f aggs,mod srt, sbrnd-sbang,tr v crs ang fract grs, wk sil cmt,off wh arg mtx i/p,tr

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.8 | 33 |
| RES_DEEP (ohm.m) | 40.12 | 33 |
| RES_SHALLOW (ohm.m) | 30.40 | 33 |

---

### 2520 m MD — Interval 2517.5 – 2522.5 m

**Sample Description (spreadsheet):** Sample 2520m: 100% Sandstone (litho ASCII aggregate) TG 587.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | tr wk sil cmt (0.71) |
| Fluorescence | 90.0% ,bri |
| Total Gas | 587.54375 U |
| mTVDss | -1201.80 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2512m: clr,trnsl,tr off wh, (4082) f-crs,pr srt,sbrnd,tr rnd,tr wk sil cmt,tr off wh arg mtx,tr mica flks,dom cln lse grs,gd inf por,
- **SANDSTONE** @ ~2527m: off wh,clr,trnsl,v lt brn,f-crs,com f aggs,mod srt, sbrnd-sbang,tr v crs ang fract grs, wk sil cmt,off wh arg mtx i/p,tr
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.1 | 32 |
| RES_DEEP (ohm.m) | 40.68 | 32 |
| RES_SHALLOW (ohm.m) | 28.46 | 32 |

---

### 2565 m MD — Interval 2562.5 – 2567.5 m

**Sample Description (spreadsheet):** Sample 2565m: 100% Sandstone (litho ASCII aggregate) TG 214.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | p-fr |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 50.0% ,bri |
| Total Gas | 214.0375 U |
| mTVDss | -1202.10 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2551m: med gry-med dk gry, med dk grysh brn,aren,tr micmic, rr carb spks,mod hd,sbblky.
- **SANDSTONE** @ ~2554m: off wh-lt brn,med brn, clr-opq,trnsl,f-med aggs,med-v crs 8390 lse,pr srt,sbang-sbrnd,occ ang fract v crs grs,mod-strg sil cmt,tr wk sil cmt,off wh-lt brn arg mtx,tr slty
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.3 | 33 |
| RES_DEEP (ohm.m) | 51.54 | 33 |
| RES_SHALLOW (ohm.m) | 34.97 | 33 |

---

### 2570 m MD — Interval 2567.5 – 2572.5 m

**Sample Description (spreadsheet):** Sample 2570m: 100% Sandstone (litho ASCII aggregate) TG 221.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | p-fr |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 50.0% ,bri |
| Total Gas | 221.00625 U |
| mTVDss | -1202.09 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2554m: off wh-lt brn,med brn, clr-opq,trnsl,f-med aggs,med-v crs 8390 lse,pr srt,sbang-sbrnd,occ ang fract v crs grs,mod-strg sil cmt,tr wk sil cmt,off wh-lt brn arg mtx,tr slty
- **SANDSTONE** @ ~2566m: off wh,clr,trnsl, lt brn,f-med,cln lse crs grs,pr-mod 72 / 6 / 5 / 8 / 9 srt,sbang-sbrnd,wk sil cmt,com off wh-lt brn arg mtx,mnr mica flks,fri 8430 aggs,lse crs qtz grs i/p,fr-pr vis
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.7 | 32 |
| RES_DEEP (ohm.m) | 46.20 | 32 |
| RES_SHALLOW (ohm.m) | 34.43 | 32 |

---

### 2575 m MD — Interval 2572.5 – 2577.5 m

**Sample Description (spreadsheet):** Sample 2575m: 100% Sandstone (litho ASCII aggregate) TG 222.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | p-fr |
| Hardness | lse (1.00) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.71) |
| Fluorescence | 50.0% ,bri |
| Total Gas | 222.27058823529413 U |
| mTVDss | -1202.09 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2566m: off wh,clr,trnsl, lt brn,f-med,cln lse crs grs,pr-mod 72 / 6 / 5 / 8 / 9 srt,sbang-sbrnd,wk sil cmt,com off wh-lt brn arg mtx,mnr mica flks,fri 8430 aggs,lse crs qtz grs i/p,fr-pr vis
- **SILTSTONE** @ ~2576m: lt-med gry,med brnsh gry,aren,arg i/p,micmic,occ carb spks,mnr liths,mod hd,sbfiss-sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.0 | 33 |
| RES_DEEP (ohm.m) | 45.32 | 33 |
| RES_SHALLOW (ohm.m) | 30.51 | 33 |

---

### 2580 m MD — Interval 2577.5 – 2582.5 m

**Sample Description (spreadsheet):** Sample 2580m: 100% Sandstone (litho ASCII aggregate) TG 203.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | p-fr |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.55) |
| Fluorescence | 50.0% None |
| Total Gas | 203.375 U |
| mTVDss | -1202.08 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2566m: off wh,clr,trnsl, lt brn,f-med,cln lse crs grs,pr-mod 72 / 6 / 5 / 8 / 9 srt,sbang-sbrnd,wk sil cmt,com off wh-lt brn arg mtx,mnr mica flks,fri 8430 aggs,lse crs qtz grs i/p,fr-pr vis
- **SILTSTONE** @ ~2576m: lt-med gry,med brnsh gry,aren,arg i/p,micmic,occ carb spks,mnr liths,mod hd,sbfiss-sbblky.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 118.0 | 33 |
| RES_DEEP (ohm.m) | 44.65 | 33 |
| RES_SHALLOW (ohm.m) | 26.69 | 33 |

---

### 2585 m MD — Interval 2582.5 – 2587.5 m

**Sample Description (spreadsheet):** Sample 2585m: 100% Sandstone (litho ASCII aggregate) TG 184.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | mnr wk sil cmt (0.55) |
| Fluorescence | 50.0% None |
| Total Gas | 184.55882352941177 U |
| mTVDss | -1202.08 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2576m: lt-med gry,med brnsh gry,aren,arg i/p,micmic,occ carb spks,mnr liths,mod hd,sbfiss-sbblky.
- **SANDSTONE** @ ~2582m: clr,trnsl,opq, lt brn,f-crs,pr srt,sbang-sbrnd, mnr wk sil cmt,occ off wh-lt brn arg mtx,rr carb spks & lith incl, tr mica flks,fri f-med grn aggs,
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 118.8 | 33 |
| RES_DEEP (ohm.m) | 45.54 | 33 |
| RES_SHALLOW (ohm.m) | 28.16 | 33 |

---

### 2590 m MD — Interval 2587.5 – 2592.5 m

**Sample Description (spreadsheet):** Sample 2590m: 100% Sandstone (litho ASCII aggregate) TG 189.3U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | mnr wk sil cmt (0.55) |
| Fluorescence | 50.0% None |
| Total Gas | 189.31875 U |
| mTVDss | -1202.07 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2576m: lt-med gry,med brnsh gry,aren,arg i/p,micmic,occ carb spks,mnr liths,mod hd,sbfiss-sbblky.
- **SANDSTONE** @ ~2582m: clr,trnsl,opq, lt brn,f-crs,pr srt,sbang-sbrnd, mnr wk sil cmt,occ off wh-lt brn arg mtx,rr carb spks & lith incl, tr mica flks,fri f-med grn aggs,
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 123.6 | 33 |
| RES_DEEP (ohm.m) | 57.83 | 33 |
| RES_SHALLOW (ohm.m) | 33.87 | 33 |

---

### 2595 m MD — Interval 2592.5 – 2597.5 m

**Sample Description (spreadsheet):** Sample 2595m: 100% Sandstone (litho ASCII aggregate) TG 208.1U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | mnr wk sil cmt (0.55) |
| Fluorescence | 50.0% None |
| Total Gas | 208.08749999999998 U |
| mTVDss | -1202.07 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2582m: clr,trnsl,opq, lt brn,f-crs,pr srt,sbang-sbrnd, mnr wk sil cmt,occ off wh-lt brn arg mtx,rr carb spks & lith incl, tr mica flks,fri f-med grn aggs,
- **SANDSTONE** @ ~2588m: clr,trnsl,opq, lt brn,f-crs,pr srt,sbang-sbrnd, mnr wk sil cmt,occ off wh-lt brn arg mtx,rr carb spks & lith incl,
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 123.4 | 32 |
| RES_DEEP (ohm.m) | 55.20 | 32 |
| RES_SHALLOW (ohm.m) | 31.67 | 32 |

---

### 2600 m MD — Interval 2597.5 – 2602.5 m

**Sample Description (spreadsheet):** Sample 2600m: 100% Sandstone (litho ASCII aggregate) TG 183.8U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | mnr wk sil cmt (0.55) |
| Fluorescence | 50.0% None |
| Total Gas | 183.8235294117647 U |
| mTVDss | -1202.06 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2588m: clr,trnsl,opq, lt brn,f-crs,pr srt,sbang-sbrnd, mnr wk sil cmt,occ off wh-lt brn arg mtx,rr carb spks & lith incl,
- **SANDSTONE** @ ~2597m: clr,trnsl,opq, 8530 off wh,f-crs,pr-mod srt,sbang-sbrnd, mnr wk-occ mod strg sil cmt,mod abdt off wh arg mtx,mnr mica flks,rr carb spks & lith incl,fri-occ mod
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 125.0 | 33 |
| RES_DEEP (ohm.m) | 56.07 | 33 |
| RES_SHALLOW (ohm.m) | 30.30 | 33 |

---

### 2605 m MD — Interval 2602.5 – 2607.5 m

**Sample Description (spreadsheet):** Sample 2605m: 100% Sandstone (litho ASCII aggregate) TG 161.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | mnr wk sil cmt (0.55) |
| Fluorescence | 50.0% None |
| Total Gas | 161.54375 U |
| mTVDss | -1202.04 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2588m: clr,trnsl,opq, lt brn,f-crs,pr srt,sbang-sbrnd, mnr wk sil cmt,occ off wh-lt brn arg mtx,rr carb spks & lith incl,
- **SANDSTONE** @ ~2597m: clr,trnsl,opq, 8530 off wh,f-crs,pr-mod srt,sbang-sbrnd, mnr wk-occ mod strg sil cmt,mod abdt off wh arg mtx,mnr mica flks,rr carb spks & lith incl,fri-occ mod
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 122.5 | 33 |
| RES_DEEP (ohm.m) | 45.80 | 33 |
| RES_SHALLOW (ohm.m) | 26.03 | 33 |

---

### 2610 m MD — Interval 2607.5 – 2612.5 m

**Sample Description (spreadsheet):** Sample 2610m: 100% Sandstone (litho ASCII aggregate) TG 136.4U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | fri (0.70) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 0.0% None |
| Total Gas | 136.35882352941175 U |
| mTVDss | -1202.03 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2597m: clr,trnsl,opq, 8530 off wh,f-crs,pr-mod srt,sbang-sbrnd, mnr wk-occ mod strg sil cmt,mod abdt off wh arg mtx,mnr mica flks,rr carb spks & lith incl,fri-occ mod
- **SANDSTONE** @ ~2612m: clr,trnsl,opq, off wh,lt brnsh gry,f-crs,pr srt, sbang-sbrnd,mnr wk-occ mod strg sil cmt,com off wh-lt brnsh gry arg mtx,mnr mica,tr carb spks,fri-mod
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 122.2 | 33 |
| RES_DEEP (ohm.m) | 26.87 | 33 |
| RES_SHALLOW (ohm.m) | 18.67 | 33 |

---

### 2615 m MD — Interval 2612.5 – 2617.5 m

**Sample Description (spreadsheet):** Sample 2615m: 100% Sandstone (litho ASCII aggregate) TG 119.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | fri (0.70) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 0.0% None |
| Total Gas | 119.55624999999999 U |
| mTVDss | -1202.02 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2612m: clr,trnsl,opq, off wh,lt brnsh gry,f-crs,pr srt, sbang-sbrnd,mnr wk-occ mod strg sil cmt,com off wh-lt brnsh gry arg mtx,mnr mica,tr carb spks,fri-mod
- **SILTSTONE** @ ~2618m: lt-med gry,med brnsh gry,aren,arg i/p,micmic,occ carb 0 0.5 1 4 14 8600 spks,mnr liths,mod hd,sbfiss-sbblky. 14 28 SURVEY @ 8608.2'MDRT

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 131.3 | 33 |
| RES_DEEP (ohm.m) | 16.38 | 33 |
| RES_SHALLOW (ohm.m) | 12.82 | 33 |

---

### 2620 m MD — Interval 2617.5 – 2622.5 m

**Sample Description (spreadsheet):** Sample 2620m: 100% Sandstone (litho ASCII aggregate) TG 123.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | fri (0.70) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 0.0% None |
| Total Gas | 123.57058823529411 U |
| mTVDss | -1202.00 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2612m: clr,trnsl,opq, off wh,lt brnsh gry,f-crs,pr srt, sbang-sbrnd,mnr wk-occ mod strg sil cmt,com off wh-lt brnsh gry arg mtx,mnr mica,tr carb spks,fri-mod
- **SILTSTONE** @ ~2618m: lt-med gry,med brnsh gry,aren,arg i/p,micmic,occ carb 0 0.5 1 4 14 8600 spks,mnr liths,mod hd,sbfiss-sbblky. 14 28 SURVEY @ 8608.2'MDRT
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 130.8 | 33 |
| RES_DEEP (ohm.m) | 13.81 | 33 |
| RES_SHALLOW (ohm.m) | 11.59 | 33 |

---

### 2625 m MD — Interval 2622.5 – 2627.5 m

**Sample Description (spreadsheet):** Sample 2625m: 100% Sandstone (litho ASCII aggregate) TG 122.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | fri (0.70) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 0.0% None |
| Total Gas | 122.5625 U |
| mTVDss | -1201.99 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2612m: clr,trnsl,opq, off wh,lt brnsh gry,f-crs,pr srt, sbang-sbrnd,mnr wk-occ mod strg sil cmt,com off wh-lt brnsh gry arg mtx,mnr mica,tr carb spks,fri-mod
- **SILTSTONE** @ ~2618m: lt-med gry,med brnsh gry,aren,arg i/p,micmic,occ carb 0 0.5 1 4 14 8600 spks,mnr liths,mod hd,sbfiss-sbblky. 14 28 SURVEY @ 8608.2'MDRT
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 138.2 | 32 |
| RES_DEEP (ohm.m) | 12.71 | 32 |
| RES_SHALLOW (ohm.m) | 10.69 | 32 |

---

### 2630 m MD — Interval 2627.5 – 2632.5 m

**Sample Description (spreadsheet):** Sample 2630m: 100% Sandstone (litho ASCII aggregate) TG 128.5U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | fri (0.70) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 0.0% None |
| Total Gas | 128.51875 U |
| mTVDss | -1201.99 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2618m: lt-med gry,med brnsh gry,aren,arg i/p,micmic,occ carb 0 0.5 1 4 14 8600 spks,mnr liths,mod hd,sbfiss-sbblky. 14 28 SURVEY @ 8608.2'MDRT
- **SANDSTONE** @ ~2633m: clr,trnsl,opq, 50 / 5 / 7 / 15 / 23 off wh,lt brnsh gry,f-crs,pr srt, sbang-sbrnd,mnr wk-occ mod strg sil cmt,com off wh-lt brnsh gry arg mtx,mnr mica,tr carb spks,fri-mod

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 138.5 | 33 |
| RES_DEEP (ohm.m) | 12.80 | 33 |
| RES_SHALLOW (ohm.m) | 10.95 | 33 |

---

### 2635 m MD — Interval 2632.5 – 2637.5 m

**Sample Description (spreadsheet):** Sample 2635m: 100% Sandstone (litho ASCII aggregate) TG 121.0U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | fri (0.70) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 0.0% None |
| Total Gas | 121.02352941176471 U |
| mTVDss | -1201.99 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2618m: lt-med gry,med brnsh gry,aren,arg i/p,micmic,occ carb 0 0.5 1 4 14 8600 spks,mnr liths,mod hd,sbfiss-sbblky. 14 28 SURVEY @ 8608.2'MDRT
- **SANDSTONE** @ ~2633m: clr,trnsl,opq, 50 / 5 / 7 / 15 / 23 off wh,lt brnsh gry,f-crs,pr srt, sbang-sbrnd,mnr wk-occ mod strg sil cmt,com off wh-lt brnsh gry arg mtx,mnr mica,tr carb spks,fri-mod

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 137.5 | 15 |
| RES_DEEP (ohm.m) | 12.93 | 2 |
| RES_SHALLOW (ohm.m) | 10.20 | 2 |

---

### 2640 m MD — Interval 2637.5 – 2642.5 m

**Sample Description (spreadsheet):** Sample 2640m: 100% Sandstone (litho ASCII aggregate) TG 98.6U (drill-gas ASCII)

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | nan (max: nan) |
| Porosity Class | none |
| Hardness | fri (0.70) |
| Sorting | pr (0.20) |
| Angularity | sbrnd (0.50) |
| Cement | strg sil cmt (0.55) |
| Fluorescence | 0.0% None |
| Total Gas | 98.59375 U |
| mTVDss | -1201.99 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2633m: clr,trnsl,opq, 50 / 5 / 7 / 15 / 23 off wh,lt brnsh gry,f-crs,pr srt, sbang-sbrnd,mnr wk-occ mod strg sil cmt,com off wh-lt brnsh gry arg mtx,mnr mica,tr carb spks,fri-mod

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|

---

## 5. Summary Statistics (McKinlay Member)

| Metric | Value |
|--------|-------|
| Intervals analysed | 113 |
| Depth range | 1835 – 2640 m |
| Avg % Sandstone | 100.0% |
| Mudlog matches | 113 / 113 |
