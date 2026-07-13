# MCKINLAY 23 — McKinlay Member Cuttings & Log Interpretation

**Generated:** 2026-07-13 02:07 UTC  
**Well:** MCKINLAY 23 (MCKINLAY 23)  
**TD:** 2590 m MD  

---

## 1. Data Sources & Methodology

| Source | File | Role |
|--------|------|------|
| Mudlog PDF | `McKinlay 23_Mudlog_Spud-2590m_TD_Field Final.pdf` | Cuttings lithology descriptions |
| Sample Descriptions | `McKinlay 23 Hz Section Samples Descriptions.xlsx` (Sheet1 (cols F=TG, G=%SS, H=%fluoro + col A descriptions)) | Depth intervals & sample properties |
| Formation Tops | `DC30.xlsx`, `Mck_Murta.xlsx` | Reservoir entry & overburden identification |
| Wireline Log (LAS) | `Mck_23` | GR, RES_DEEP, RES_SHALLOW |
| Trajectory | `Mck_23_trajectory` | mTVDss (Z subsea) |

## 2. Formation Top Analysis

### 2.1 Key Tops

| Marker | Depth (m MD) | Source |
|--------|-------------|--------|
| DC30 | 1678.59 | DC30.xlsx |
| McKinlay Member (shallowest) | 1679.01 | Mck_Murta.xlsx |

### 2.2 McKinlay Member Top Classification

**Initial reservoir entry (DC30 + shallowest McKinlay):** 1679.01 m MD

**Target re-entry (lone McKinlay below an overburden entry pair):**
- _none identified_

**Overburden entry (Murta + corresponding McKinlay within 5 m):**
| McKinlay entry (m MD) | Murta (m MD) | Δ (m) | Re-entry (m MD) | Zone length (m) |
|-----------------------|-------------|-------|-----------------|-----------------|
| _none identified_ | — | — | — | — |

**McKinlay Member analysis window:** 1679.0 – 2590.0 m MD

**Excluded overburden intervals (entry → re-entry, pay resumes at re-entry):** none

**Samples in McKinlay Member:** 183 of 197 total
- Excluded pre-reservoir: 14
- Excluded overburden intervals: 0

## 3. Known Shortcomings

> **Read this section before using the output.**

1. **Mudlog PDF text extraction is imperfect.** Depth-to-description assignment uses ±15 m proximity heuristics.
2. **Formation top discrepancies** between Mck_Murta.xlsx and mudlog PDF picks are noted where present.
3. **Well name mapping:** MCKINLAY 23 → `MCKINLAY 23` (verified by TD and LAS WELL header).
4. **Sample intervals** are midpoints between consecutive sample depths — variable widths where spacing is irregular.
5. **Water-risk flags** use RQI, fluorescence, resistivity, GR, ZOI, and OWC proximity (see export).
6. **NULL LAS values** (-999.25) excluded from averages.
7. **Exclusion zones** span from each Murta/McKinlay overburden entry to the next lone McKinlay re-entry below (or entry + 50 m MD if none mapped). Later entry pairs inside an existing exclusion interval are treated as the same overburden excursion. Initial DC30/McKinlay reservoir entry is not excluded.
8. **Input Sheet only** — Calculations Sheet not used.
9. **McKinlay legacy spreadsheet:** Sheet1 columns F (TG), G (%SS), H (%fluoro) used directly; column A description text parsed for grain size, fluorescence brightness, and siderite.

## 4. McKinlay Member Sample Intervals

Each section: depth interval, spreadsheet sample, mudlog cuttings, wireline log averages.

### 1680 m MD — Interval 1677.5 – 1682.5 m

**Sample Description (spreadsheet):** Sample 1680m: 35% Siltstone, 65% very fine to fine aggs (loc com sid cmt), minor fine-coarse loose grains sandstone. TG: 9U. TRACE dull fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 65.0 |
| Grain Size | very fine to fine aggs (loc com sid cmt), minor fine-coarse loose grains (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 0.0% Siltstone, 65% very fine to fine aggs (loc com sid cmt), minor fine-coarse loose grains sandstone. TG: 9U. TRACE dull |
| Total Gas | 9.0 U |
| mTVDss | -1198.10 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1670m: v lt gry,off wh,lt gry,lt gry brn,vf-f,tr med-crs,tr-loc com slty lams,wl srt,sbang-sbrnd,mod sil cmt, tr sid cmt,com wh arg-gry slty mtx, mod hd-fri,mnr hd,rr disagg f-crs
- **SANDSTONE** @ ~1680m: v lt gry,off wh,lt-med gry brn,clr,trnsl,vf-v crs,vf-f aggs,pr srt, sbang-sbrnd,tr ang,mod sil cmt,com str sid cmt,com wh arg-gry slty mtx,mod hd- hd,fri i/p,v hd i/p,mnr disagg f-v crs qtz
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 108.2 | 33 |
| RES_DEEP (ohm.m) | 18.43 | 33 |
| RES_SHALLOW (ohm.m) | 15.88 | 33 |

---

### 1685 m MD — Interval 1682.5 – 1687.5 m

**Sample Description (spreadsheet):** Sample 1685m: 30% Siltstone, 70% predominantly very fine to fine aggs (loc com sid cmt), minor fine-very coarse loose grains, sandstone. TG: 14U. 25% dull fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | predominantly very fine to fine aggs (loc com sid cmt), minor fine-very coarse loose grains (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 25.0% Siltstone, 70% predominantly very fine to fine aggs (loc com sid cmt), minor fine-very coarse loose grains, sandstone. TG: 14U. 25% dull |
| Total Gas | 14.0 U |
| mTVDss | -1198.27 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1670m: v lt gry,off wh,lt gry,lt gry brn,vf-f,tr med-crs,tr-loc com slty lams,wl srt,sbang-sbrnd,mod sil cmt, tr sid cmt,com wh arg-gry slty mtx, mod hd-fri,mnr hd,rr disagg f-crs
- **SANDSTONE** @ ~1680m: v lt gry,off wh,lt-med gry brn,clr,trnsl,vf-v crs,vf-f aggs,pr srt, sbang-sbrnd,tr ang,mod sil cmt,com str sid cmt,com wh arg-gry slty mtx,mod hd- hd,fri i/p,v hd i/p,mnr disagg f-v crs qtz
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 115.9 | 32 |
| RES_DEEP (ohm.m) | 21.59 | 32 |
| RES_SHALLOW (ohm.m) | 18.83 | 32 |

---

### 1690 m MD — Interval 1687.5 – 1692.5 m

**Sample Description (spreadsheet):** Sample 1690m: 20% Siltstone, 80% very fine to fine agg, common fine-very coarse loose grains, (loc com sid cmt) sandstone. TG: 133U. 90% mod bri-dll fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | very fine to fine agg, common fine-very coarse loose grains, (loc com sid cmt (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 90.0% Siltstone, 80% very fine to fine agg, common fine-very coarse loose grains, (loc com sid cmt) sandstone. TG: 133U. 90% mod bri-dll |
| Total Gas | 133.0 U |
| mTVDss | -1198.43 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1680m: v lt gry,off wh,lt-med gry brn,clr,trnsl,vf-v crs,vf-f aggs,pr srt, sbang-sbrnd,tr ang,mod sil cmt,com str sid cmt,com wh arg-gry slty mtx,mod hd- hd,fri i/p,v hd i/p,mnr disagg f-v crs qtz
- **SANDSTONE** @ ~1680m: pl gry brn,pl-lt gry,med gry brn,clr,trnsl,vf-v crs,vf-f in aggs,pr srt, sbang-sbrnd,tr ang,mod sil cmt,rr sid cmt, 1690 mnr gry brn-wh arg mtx,tr slty lams,tr micmic,fri-mod hd,hd i/p,mnr f-v crs
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.2 | 33 |
| RES_DEEP (ohm.m) | 21.23 | 33 |
| RES_SHALLOW (ohm.m) | 19.34 | 33 |

---

### 1695 m MD — Interval 1692.5 – 1697.5 m

**Sample Description (spreadsheet):** Sample 1695m: 5% Siltstone, 95% very fine to fine aggs, minor fine-very coarse loose grains, (rare localised sid cmt) sandstone. TG: 145U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs, minor fine-very coarse loose grains, (rare localised sid cmt (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | mod hd (0.30) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone, 95% very fine to fine aggs, minor fine-very coarse loose grains, (rare localised sid cmt) sandstone. TG: 145U. 100% mod bri |
| Total Gas | 145.0 U |
| mTVDss | -1198.54 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1680m: v lt gry,off wh,lt-med gry brn,clr,trnsl,vf-v crs,vf-f aggs,pr srt, sbang-sbrnd,tr ang,mod sil cmt,com str sid cmt,com wh arg-gry slty mtx,mod hd- hd,fri i/p,v hd i/p,mnr disagg f-v crs qtz
- **SANDSTONE** @ ~1680m: pl gry brn,pl-lt gry,med gry brn,clr,trnsl,vf-v crs,vf-f in aggs,pr srt, sbang-sbrnd,tr ang,mod sil cmt,rr sid cmt, 1690 mnr gry brn-wh arg mtx,tr slty lams,tr micmic,fri-mod hd,hd i/p,mnr f-v crs
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.5 | 33 |
| RES_DEEP (ohm.m) | 21.05 | 33 |
| RES_SHALLOW (ohm.m) | 20.75 | 33 |

---

### 1700 m MD — Interval 1697.5 – 1702.5 m

**Sample Description (spreadsheet):** Sample 1700m: 5% Siltstone, 95% very fine to fine aggs, minor fine-very coarse loose grains, (tr localised sid cmt) sandstone. TG: 131U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs, minor fine-very coarse loose grains, (tr localised sid cmt (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% Siltstone, 95% very fine to fine aggs, minor fine-very coarse loose grains, (tr localised sid cmt) sandstone. TG: 131U. 100% mod bri-bri |
| Total Gas | 131.0 U |
| mTVDss | -1198.65 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.1 | 33 |
| RES_DEEP (ohm.m) | 20.44 | 33 |
| RES_SHALLOW (ohm.m) | 20.07 | 33 |

---

### 1705 m MD — Interval 1702.5 – 1707.5 m

**Sample Description (spreadsheet):** Sample 1705m: 5% Siltstone, 95% very fine to fine aggs, minor fine-very coarse loose grains, (tr localised sid cmt) sandstone. TG: 110U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs, minor fine-very coarse loose grains, (tr localised sid cmt (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone, 95% very fine to fine aggs, minor fine-very coarse loose grains, (tr localised sid cmt) sandstone. TG: 110U. 100% mod bri |
| Total Gas | 110.0 U |
| mTVDss | -1198.73 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1720m: med lt gry,med gry,dk gry brn,vf aren,tr sndy lams,tr carb spks, tr micmic,mod hd-frm,sbblky-blky,mnr CONTROL DRILL @ 25M/HR sbfiss. FROM 1724-2209m
- **SANDSTONE** @ ~1720m: pl gry brn,pl-lt gry,clr,trnsl, vf-f aggs,rr med-v crs,mod-wl srt,sbang- sbrnd,tr rnd,mod sil cmt,mnr gry brn arg mtx,tr slty lams,tr micmic,tr carb spks,fri- mod hd,rr f-v crs disagg qtz grs,pr vis
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.8 | 33 |
| RES_DEEP (ohm.m) | 20.89 | 33 |
| RES_SHALLOW (ohm.m) | 20.48 | 33 |

---

### 1710 m MD — Interval 1707.5 – 1712.5 m

**Sample Description (spreadsheet):** Sample 1710m: 5% Siltstone, 95% very fine to fine aggs, rare medium-very coarse loose grains sandstone. TG: 110U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs, rare medium-very coarse loose grains (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone, 95% very fine to fine aggs, rare medium-very coarse loose grains sandstone. TG: 110U. 100% mod bri |
| Total Gas | 110.0 U |
| mTVDss | -1198.78 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1720m: med lt gry,med gry,dk gry brn,vf aren,tr sndy lams,tr carb spks, tr micmic,mod hd-frm,sbblky-blky,mnr CONTROL DRILL @ 25M/HR sbfiss. FROM 1724-2209m
- **SANDSTONE** @ ~1720m: pl gry brn,pl-lt gry,clr,trnsl, vf-f aggs,rr med-v crs,mod-wl srt,sbang- sbrnd,tr rnd,mod sil cmt,mnr gry brn arg mtx,tr slty lams,tr micmic,tr carb spks,fri- mod hd,rr f-v crs disagg qtz grs,pr vis
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.8 | 32 |
| RES_DEEP (ohm.m) | 21.76 | 32 |
| RES_SHALLOW (ohm.m) | 21.10 | 32 |

---

### 1715 m MD — Interval 1712.5 – 1717.5 m

**Sample Description (spreadsheet):** Sample 1710m: 5% Siltstone, 95% very fine to fine aggs, rare medium-very coarse loose grains sandstone. TG: 110U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs, rare medium-very coarse loose grains (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone, 95% very fine to fine aggs, rare medium-very coarse loose grains sandstone. TG: 110U. 100% mod bri |
| Total Gas | 118.0 U |
| mTVDss | -1198.80 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1720m: med lt gry,med gry,dk gry brn,vf aren,tr sndy lams,tr carb spks, tr micmic,mod hd-frm,sbblky-blky,mnr CONTROL DRILL @ 25M/HR sbfiss. FROM 1724-2209m
- **SANDSTONE** @ ~1720m: pl gry brn,pl-lt gry,clr,trnsl, vf-f aggs,rr med-v crs,mod-wl srt,sbang- sbrnd,tr rnd,mod sil cmt,mnr gry brn arg mtx,tr slty lams,tr micmic,tr carb spks,fri- mod hd,rr f-v crs disagg qtz grs,pr vis
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.3 | 33 |
| RES_DEEP (ohm.m) | 22.39 | 33 |
| RES_SHALLOW (ohm.m) | 22.03 | 33 |

---

### 1720 m MD — Interval 1717.5 – 1722.5 m

**Sample Description (spreadsheet):** Sample 1720m: 5% Siltstone, 95% very fine to fine aggs, minor fine-coarse loose grained sandstone. TG: 115U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs, minor fine-coarse loose grained (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone, 95% very fine to fine aggs, minor fine-coarse loose grained sandstone. TG: 115U. 100% mod bri |
| Total Gas | 115.0 U |
| mTVDss | -1198.80 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1720m: med lt gry,med gry,dk gry brn,vf aren,tr sndy lams,tr carb spks, tr micmic,mod hd-frm,sbblky-blky,mnr CONTROL DRILL @ 25M/HR sbfiss. FROM 1724-2209m
- **SANDSTONE** @ ~1720m: pl gry brn,pl-lt gry,clr,trnsl, vf-f aggs,rr med-v crs,mod-wl srt,sbang- sbrnd,tr rnd,mod sil cmt,mnr gry brn arg mtx,tr slty lams,tr micmic,tr carb spks,fri- mod hd,rr f-v crs disagg qtz grs,pr vis
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.1 | 33 |
| RES_DEEP (ohm.m) | 20.97 | 33 |
| RES_SHALLOW (ohm.m) | 19.96 | 33 |

---

### 1725 m MD — Interval 1722.5 – 1727.5 m

**Sample Description (spreadsheet):** Sample 1725m: 10% Siltstone, 90% very fine to fine aggs, minor fine-very coarse loose grained sandstone. TG: 107U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine aggs, minor fine-very coarse loose grained (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone, 90% very fine to fine aggs, minor fine-very coarse loose grained sandstone. TG: 107U. 100% mod bri |
| Total Gas | 107.0 U |
| mTVDss | -1198.79 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1720m: med lt gry,med gry,dk gry brn,vf aren,tr sndy lams,tr carb spks, tr micmic,mod hd-frm,sbblky-blky,mnr CONTROL DRILL @ 25M/HR sbfiss. FROM 1724-2209m
- **SANDSTONE** @ ~1720m: pl gry brn,pl-lt gry,clr,trnsl, vf-f aggs,rr med-v crs,mod-wl srt,sbang- sbrnd,tr rnd,mod sil cmt,mnr gry brn arg mtx,tr slty lams,tr micmic,tr carb spks,fri- mod hd,rr f-v crs disagg qtz grs,pr vis
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.8 | 33 |
| RES_DEEP (ohm.m) | 22.02 | 33 |
| RES_SHALLOW (ohm.m) | 21.51 | 33 |

---

### 1730 m MD — Interval 1727.5 – 1732.5 m

**Sample Description (spreadsheet):** Sample 1730m: Trace Siltstone, 100% very fine to fine aggs, minor fine-very coarse loose grained sandstone. TG: 209U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, minor fine-very coarse loose grained (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, minor fine-very coarse loose grained sandstone. TG: 209U. 100% mod bri |
| Total Gas | 209.0 U |
| mTVDss | -1198.77 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1720m: med lt gry,med gry,dk gry brn,vf aren,tr sndy lams,tr carb spks, tr micmic,mod hd-frm,sbblky-blky,mnr CONTROL DRILL @ 25M/HR sbfiss. FROM 1724-2209m
- **SANDSTONE** @ ~1720m: pl gry brn,pl-lt gry,clr,trnsl, vf-f aggs,rr med-v crs,mod-wl srt,sbang- sbrnd,tr rnd,mod sil cmt,mnr gry brn arg mtx,tr slty lams,tr micmic,tr carb spks,fri- mod hd,rr f-v crs disagg qtz grs,pr vis
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.3 | 33 |
| RES_DEEP (ohm.m) | 22.16 | 33 |
| RES_SHALLOW (ohm.m) | 21.64 | 33 |

---

### 1735 m MD — Interval 1732.5 – 1737.5 m

**Sample Description (spreadsheet):** Sample 1735m: Trace Siltstone, 100% very fine to fine aggs, rare fine-very coarse loose grained sandstone. TG: 210U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, rare fine-very coarse loose grained (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, rare fine-very coarse loose grained sandstone. TG: 210U. 100% bri |
| Total Gas | 210.0 U |
| mTVDss | -1198.73 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~1720m: med lt gry,med gry,dk gry brn,vf aren,tr sndy lams,tr carb spks, tr micmic,mod hd-frm,sbblky-blky,mnr CONTROL DRILL @ 25M/HR sbfiss. FROM 1724-2209m
- **SANDSTONE** @ ~1720m: pl gry brn,pl-lt gry,clr,trnsl, vf-f aggs,rr med-v crs,mod-wl srt,sbang- sbrnd,tr rnd,mod sil cmt,mnr gry brn arg mtx,tr slty lams,tr micmic,tr carb spks,fri- mod hd,rr f-v crs disagg qtz grs,pr vis
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.3 | 32 |
| RES_DEEP (ohm.m) | 21.78 | 32 |
| RES_SHALLOW (ohm.m) | 21.54 | 32 |

---

### 1740 m MD — Interval 1737.5 – 1742.5 m

**Sample Description (spreadsheet):** Sample 1740m: 100% very fine to fine aggs, rare fine-coarse loose grained sandstone. TG: 217U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, rare fine-coarse loose grained (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% very fine to fine aggs, rare fine-coarse loose grained sandstone. TG: 217U. 100% bri |
| Total Gas | 217.0 U |
| mTVDss | -1198.70 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.4 | 33 |
| RES_DEEP (ohm.m) | 22.23 | 33 |
| RES_SHALLOW (ohm.m) | 20.98 | 33 |

---

### 1745 m MD — Interval 1742.5 – 1747.5 m

**Sample Description (spreadsheet):** Sample 1745m: 100% very fine to fine aggs, com fine-coarse loose grained sandstone. TG: 163U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, com fine-coarse loose grained (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, com fine-coarse loose grained sandstone. TG: 163U. 100% mod bri-bri |
| Total Gas | 163.0 U |
| mTVDss | -1198.66 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1760m: pl-lt gry,pl-lt gry brn,pl brn,clr,trnsl,vf-f aggs,rr med,wl srt, sbang-sbrnd,mod sil cmt,mnr gry-brn arg mtx,tr slty lams,tr micmic,tr carb spks,fri-mod hd,rr f-med disagg qtz grs,
- **SILTSTONE** @ ~1760m: med lt gry,lt gry,vf aren,g/t slty SST i/p,tr-loc mnr carb spks & incls, com micmic,mod hd-frm,sbblky-blky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.2 | 33 |
| RES_DEEP (ohm.m) | 21.59 | 33 |
| RES_SHALLOW (ohm.m) | 20.13 | 33 |

---

### 1750 m MD — Interval 1747.5 – 1752.5 m

**Sample Description (spreadsheet):** Sample 1750m: 5% siltstone, 95% very fine to fine aggs, (g/t siltstone i/p), trace fine-medium loose grained sandstone. TG: 132U. 100% mod bri-dll fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs, (g/t siltstone i/p), trace fine-medium loose grained (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% siltstone, 95% very fine to fine aggs, (g/t siltstone i/p), trace fine-medium loose grained sandstone. TG: 132U. 100% mod bri-dll |
| Total Gas | 132.0 U |
| mTVDss | -1198.62 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1760m: pl-lt gry,pl-lt gry brn,pl brn,clr,trnsl,vf-f aggs,rr med,wl srt, sbang-sbrnd,mod sil cmt,mnr gry-brn arg mtx,tr slty lams,tr micmic,tr carb spks,fri-mod hd,rr f-med disagg qtz grs,
- **SILTSTONE** @ ~1760m: med lt gry,lt gry,vf aren,g/t slty SST i/p,tr-loc mnr carb spks & incls, com micmic,mod hd-frm,sbblky-blky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.5 | 33 |
| RES_DEEP (ohm.m) | 21.47 | 33 |
| RES_SHALLOW (ohm.m) | 19.90 | 33 |

---

### 1755 m MD — Interval 1752.5 – 1757.5 m

**Sample Description (spreadsheet):** Sample 1755m: 5% siltstone, 95% very fine to fine aggs, (g/t siltstone i/p), trace fine loose grained sandstone. TG: 110U. 100% dll-mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs, (g/t siltstone i/p), trace fine loose grained (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% siltstone, 95% very fine to fine aggs, (g/t siltstone i/p), trace fine loose grained sandstone. TG: 110U. 100% dll-mod bri |
| Total Gas | 110.0 U |
| mTVDss | -1198.58 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1760m: pl-lt gry,pl-lt gry brn,pl brn,clr,trnsl,vf-f aggs,rr med,wl srt, sbang-sbrnd,mod sil cmt,mnr gry-brn arg mtx,tr slty lams,tr micmic,tr carb spks,fri-mod hd,rr f-med disagg qtz grs,
- **SILTSTONE** @ ~1760m: med lt gry,lt gry,vf aren,g/t slty SST i/p,tr-loc mnr carb spks & incls, com micmic,mod hd-frm,sbblky-blky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.5 | 33 |
| RES_DEEP (ohm.m) | 21.86 | 33 |
| RES_SHALLOW (ohm.m) | 20.48 | 33 |

---

### 1760 m MD — Interval 1757.5 – 1762.5 m

**Sample Description (spreadsheet):** Sample 1760m: 5% siltstone, 95% very fine to fine aggs, (g/t siltstone i/p), trace fine loose grained sandstone. TG: 125U. 100% mod bri-dll fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs, (g/t siltstone i/p), trace fine loose grained (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% siltstone, 95% very fine to fine aggs, (g/t siltstone i/p), trace fine loose grained sandstone. TG: 125U. 100% mod bri-dll |
| Total Gas | 125.0 U |
| mTVDss | -1198.53 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1760m: pl-lt gry,pl-lt gry brn,pl brn,clr,trnsl,vf-f aggs,rr med,wl srt, sbang-sbrnd,mod sil cmt,mnr gry-brn arg mtx,tr slty lams,tr micmic,tr carb spks,fri-mod hd,rr f-med disagg qtz grs,
- **SILTSTONE** @ ~1760m: med lt gry,lt gry,vf aren,g/t slty SST i/p,tr-loc mnr carb spks & incls, com micmic,mod hd-frm,sbblky-blky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.2 | 32 |
| RES_DEEP (ohm.m) | 20.72 | 32 |
| RES_SHALLOW (ohm.m) | 19.33 | 32 |

---

### 1765 m MD — Interval 1762.5 – 1767.5 m

**Sample Description (spreadsheet):** Sample 1765m: Trace siltstone, 100% very fine to fine aggs, trace fine-med loose grained sandstone. TG: 127U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, trace fine-med loose grained (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, trace fine-med loose grained sandstone. TG: 127U. 100% mod bri |
| Total Gas | 127.0 U |
| mTVDss | -1198.49 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1760m: pl-lt gry,pl-lt gry brn,pl brn,clr,trnsl,vf-f aggs,rr med,wl srt, sbang-sbrnd,mod sil cmt,mnr gry-brn arg mtx,tr slty lams,tr micmic,tr carb spks,fri-mod hd,rr f-med disagg qtz grs,
- **SILTSTONE** @ ~1760m: med lt gry,lt gry,vf aren,g/t slty SST i/p,tr-loc mnr carb spks & incls, com micmic,mod hd-frm,sbblky-blky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.4 | 33 |
| RES_DEEP (ohm.m) | 21.14 | 33 |
| RES_SHALLOW (ohm.m) | 19.48 | 33 |

---

### 1770 m MD — Interval 1767.5 – 1772.5 m

**Sample Description (spreadsheet):** Sample 1770m: 5%siltstone, 95% very fine to fine aggs, rare fine-med loose grained sandstone. TG: 125U. 100% mod bri-dll fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs, rare fine-med loose grained (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, rare fine-med loose grained sandstone. TG: 125U. 100% mod bri-dll |
| Total Gas | 125.0 U |
| mTVDss | -1198.45 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1760m: pl-lt gry,pl-lt gry brn,pl brn,clr,trnsl,vf-f aggs,rr med,wl srt, sbang-sbrnd,mod sil cmt,mnr gry-brn arg mtx,tr slty lams,tr micmic,tr carb spks,fri-mod hd,rr f-med disagg qtz grs,
- **SILTSTONE** @ ~1760m: med lt gry,lt gry,vf aren,g/t slty SST i/p,tr-loc mnr carb spks & incls, com micmic,mod hd-frm,sbblky-blky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.7 | 33 |
| RES_DEEP (ohm.m) | 20.53 | 33 |
| RES_SHALLOW (ohm.m) | 19.08 | 33 |

---

### 1775 m MD — Interval 1772.5 – 1777.5 m

**Sample Description (spreadsheet):** Sample 1775m: 5% siltstone, 95% very fine to fine aggs (g/t siltstone i/p), trace fine loose grained sandstone. TG: 104U. 100% dll-mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs (g/t siltstone i/p), trace fine loose grained (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% siltstone, 95% very fine to fine aggs (g/t siltstone i/p), trace fine loose grained sandstone. TG: 104U. 100% dll-mod bri |
| Total Gas | 104.0 U |
| mTVDss | -1198.40 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1760m: pl-lt gry,pl-lt gry brn,pl brn,clr,trnsl,vf-f aggs,rr med,wl srt, sbang-sbrnd,mod sil cmt,mnr gry-brn arg mtx,tr slty lams,tr micmic,tr carb spks,fri-mod hd,rr f-med disagg qtz grs,
- **SILTSTONE** @ ~1760m: med lt gry,lt gry,vf aren,g/t slty SST i/p,tr-loc mnr carb spks & incls, com micmic,mod hd-frm,sbblky-blky.
- _(10 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.4 | 33 |
| RES_DEEP (ohm.m) | 20.71 | 33 |
| RES_SHALLOW (ohm.m) | 19.90 | 33 |

---

### 1780 m MD — Interval 1777.5 – 1782.5 m

**Sample Description (spreadsheet):** Sample 1780m: 5% siltstone, 95% very fine to fine aggs (g/t siltstone i/p) sandstone. TG: 113U. 100% dll-mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs (g/t siltstone i/p (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% siltstone, 95% very fine to fine aggs (g/t siltstone i/p) sandstone. TG: 113U. 100% dll-mod bri |
| Total Gas | 113.0 U |
| mTVDss | -1198.34 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1780m: lt gry,lt gry brn,pl brn,vf- f,g/t aren SLTST i/p,v wl srt,sbang- sbrnd,mod sil cmt,mnr-loc com gry-brn arg mtx,tr slty lams,com micmic,tr-mnr carb spks & incls,fri-mod hd,tr f disagg
- **SANDSTONE** @ ~1780m: lt gry,lt gry brn,pl brn,clr, trnsl,vf-f aggs,mnr med,wel srt,sbang- sbrnd,mod sil cmt,mnr gry,-brn arg mtx,tr slty lams,tr micmic,tr carb spks,fri-mod
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.5 | 33 |
| RES_DEEP (ohm.m) | 20.55 | 33 |
| RES_SHALLOW (ohm.m) | 19.43 | 33 |

---

### 1785 m MD — Interval 1782.5 – 1787.5 m

**Sample Description (spreadsheet):** Sample 1785m: Trace siltstone, 100% very fine to fine aggs (g/t siltstone i/p) sandstone. TG: 123U. 100% mod bri-dll fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs (g/t siltstone i/p (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs (g/t siltstone i/p) sandstone. TG: 123U. 100% mod bri-dll |
| Total Gas | 123.0 U |
| mTVDss | -1198.28 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1780m: lt gry,lt gry brn,pl brn,vf- f,g/t aren SLTST i/p,v wl srt,sbang- sbrnd,mod sil cmt,mnr-loc com gry-brn arg mtx,tr slty lams,com micmic,tr-mnr carb spks & incls,fri-mod hd,tr f disagg
- **SANDSTONE** @ ~1780m: lt gry,lt gry brn,pl brn,clr, trnsl,vf-f aggs,mnr med,wel srt,sbang- sbrnd,mod sil cmt,mnr gry,-brn arg mtx,tr slty lams,tr micmic,tr carb spks,fri-mod
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.8 | 33 |
| RES_DEEP (ohm.m) | 21.70 | 33 |
| RES_SHALLOW (ohm.m) | 21.31 | 33 |

---

### 1790 m MD — Interval 1787.5 – 1792.5 m

**Sample Description (spreadsheet):** Sample 1790m: Trace siltstone, 100% very fine to fine aggs, minor fine to medium loose sandstone. TG: 146U. 100% mod bri-dll fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, minor fine to medium loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, minor fine to medium loose sandstone. TG: 146U. 100% mod bri-dll |
| Total Gas | 146.0 U |
| mTVDss | -1198.20 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1780m: lt gry,lt gry brn,pl brn,vf- f,g/t aren SLTST i/p,v wl srt,sbang- sbrnd,mod sil cmt,mnr-loc com gry-brn arg mtx,tr slty lams,com micmic,tr-mnr carb spks & incls,fri-mod hd,tr f disagg
- **SANDSTONE** @ ~1780m: lt gry,lt gry brn,pl brn,clr, trnsl,vf-f aggs,mnr med,wel srt,sbang- sbrnd,mod sil cmt,mnr gry,-brn arg mtx,tr slty lams,tr micmic,tr carb spks,fri-mod
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.1 | 32 |
| RES_DEEP (ohm.m) | 21.02 | 32 |
| RES_SHALLOW (ohm.m) | 20.93 | 32 |

---

### 1795 m MD — Interval 1792.5 – 1797.5 m

**Sample Description (spreadsheet):** Sample 1795m: 5% siltstone, 95% very fine to fine aggs, minor fine to medium loose sandstone. TG: 189U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs, minor fine to medium loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% siltstone, 95% very fine to fine aggs, minor fine to medium loose sandstone. TG: 189U. 100% mod bri-bri |
| Total Gas | 189.0 U |
| mTVDss | -1198.11 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1780m: lt gry,lt gry brn,pl brn,vf- f,g/t aren SLTST i/p,v wl srt,sbang- sbrnd,mod sil cmt,mnr-loc com gry-brn arg mtx,tr slty lams,com micmic,tr-mnr carb spks & incls,fri-mod hd,tr f disagg
- **SANDSTONE** @ ~1780m: lt gry,lt gry brn,pl brn,clr, trnsl,vf-f aggs,mnr med,wel srt,sbang- sbrnd,mod sil cmt,mnr gry,-brn arg mtx,tr slty lams,tr micmic,tr carb spks,fri-mod
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.2 | 33 |
| RES_DEEP (ohm.m) | 20.40 | 33 |
| RES_SHALLOW (ohm.m) | 19.97 | 33 |

---

### 1800 m MD — Interval 1797.5 – 1802.5 m

**Sample Description (spreadsheet):** Sample 1800m: 5% siltstone, 95% very fine to fine aggs, minor fine to medium loose sandstone. TG: 184U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs, minor fine to medium loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% siltstone, 95% very fine to fine aggs, minor fine to medium loose sandstone. TG: 184U. 100% mod bri-bri |
| Total Gas | 184.0 U |
| mTVDss | -1198.02 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1790m: lt gry,lt gry brn,pl brn,clr, trnsl,vf-f,tr med,wl srt,sbang-sbrnd,mod sil cmt,mnr gry-brn,tr-loc com slty lams, tr-loc mnr micmic,tr-mnr carb spks,fri- mod hd,mnr f-med disagg qtz grs,pr vis
- **SILTSTONE** @ ~1790m: 1592-1828psi SILTSTONE:med gry,med lt gry,aren,g/t FLW: 248-271gpm slty SST i/p,com micmic,tr-mnr carb spks & incls,frm-mod hd,sbblky-blky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.2 | 33 |
| RES_DEEP (ohm.m) | 20.52 | 33 |
| RES_SHALLOW (ohm.m) | 20.26 | 33 |

---

### 1805 m MD — Interval 1802.5 – 1807.5 m

**Sample Description (spreadsheet):** Sample 1805m: 5% siltstone, 95% very fine to fine aggs, minor fine to medium loose sandstone. TG: 157U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs, minor fine to medium loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | v wl (1.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% siltstone, 95% very fine to fine aggs, minor fine to medium loose sandstone. TG: 157U. 100% mod bri-bri |
| Total Gas | 157.0 U |
| mTVDss | -1197.92 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1790m: lt gry,lt gry brn,pl brn,clr, trnsl,vf-f,tr med,wl srt,sbang-sbrnd,mod sil cmt,mnr gry-brn,tr-loc com slty lams, tr-loc mnr micmic,tr-mnr carb spks,fri- mod hd,mnr f-med disagg qtz grs,pr vis
- **SILTSTONE** @ ~1790m: 1592-1828psi SILTSTONE:med gry,med lt gry,aren,g/t FLW: 248-271gpm slty SST i/p,com micmic,tr-mnr carb spks & incls,frm-mod hd,sbblky-blky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.4 | 33 |
| RES_DEEP (ohm.m) | 19.96 | 33 |
| RES_SHALLOW (ohm.m) | 19.92 | 33 |

---

### 1810 m MD — Interval 1807.5 – 1812.5 m

**Sample Description (spreadsheet):** Sample 1810m: 5% siltstone, 95% very fine to fine aggs, minor fine to medium loose sandstone. TG: 148U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs, minor fine to medium loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 100.0% siltstone, 95% very fine to fine aggs, minor fine to medium loose sandstone. TG: 148U. 100% mod bri |
| Total Gas | 148.0 U |
| mTVDss | -1197.82 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.2 | 33 |
| RES_DEEP (ohm.m) | 20.32 | 33 |
| RES_SHALLOW (ohm.m) | 20.49 | 33 |

---

### 1815 m MD — Interval 1812.5 – 1817.5 m

**Sample Description (spreadsheet):** Sample 1815m: Trace siltstone, 100% very fine to fine aggs, minor fine loose sandstone. TG: 127U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, minor fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 100.0% very fine to fine aggs, minor fine loose sandstone. TG: 127U. 100% mod bri |
| Total Gas | 127.0 U |
| mTVDss | -1197.72 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.8 | 32 |
| RES_DEEP (ohm.m) | 20.50 | 32 |
| RES_SHALLOW (ohm.m) | 19.52 | 32 |

---

### 1820 m MD — Interval 1817.5 – 1822.5 m

**Sample Description (spreadsheet):** Sample 1820m: Trace siltstone, 100% very fine to fine aggs, minor fine loose sandstone. TG: 130U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, minor fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 100.0% very fine to fine aggs, minor fine loose sandstone. TG: 130U. 100% mod bri |
| Total Gas | 130.0 U |
| mTVDss | -1197.62 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.1 | 33 |
| RES_DEEP (ohm.m) | 20.70 | 33 |
| RES_SHALLOW (ohm.m) | 20.06 | 33 |

---

### 1825 m MD — Interval 1822.5 – 1827.5 m

**Sample Description (spreadsheet):** Sample 1825m: Trace siltstone, 100% very fine to fine aggs, trace fine loose sandstone. TG: 132U. 100% mod bri fluor

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, trace fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, trace fine loose sandstone. TG: 132U. 100% mod bri |
| Total Gas | 132.0 U |
| mTVDss | -1197.53 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1840m: lt gry brn,pl brn,vf-f,slty i/p,wl srt,sbang-sbrnd,mod-wk sil cmt, mnr gry brn arg mtx,mnr micmic,tr carb spks,rr-tr slty lams,fri-mod hd,pr-mnr fr vis por,fluor.
- **SANDSTONE** @ ~1840m: lt gry brn,pl brn,vf-f,slty FLW: 247-271gpm vis por,fluor.
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.6 | 33 |
| RES_DEEP (ohm.m) | 20.53 | 33 |
| RES_SHALLOW (ohm.m) | 19.62 | 33 |

---

### 1830 m MD — Interval 1827.5 – 1832.5 m

**Sample Description (spreadsheet):** Sample 1830m: 100% very fine to fine aggs, rare fine loose sandstone. TG: 135U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, rare fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, rare fine loose sandstone. TG: 135U. 100% mod bri-bri |
| Total Gas | 135.0 U |
| mTVDss | -1197.44 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1840m: lt gry brn,pl brn,vf-f,slty i/p,wl srt,sbang-sbrnd,mod-wk sil cmt, mnr gry brn arg mtx,mnr micmic,tr carb spks,rr-tr slty lams,fri-mod hd,pr-mnr fr vis por,fluor.
- **SANDSTONE** @ ~1840m: lt gry brn,pl brn,vf-f,slty FLW: 247-271gpm vis por,fluor.
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.5 | 33 |
| RES_DEEP (ohm.m) | 21.49 | 33 |
| RES_SHALLOW (ohm.m) | 20.98 | 33 |

---

### 1835 m MD — Interval 1832.5 – 1837.5 m

**Sample Description (spreadsheet):** Sample 1835m: Trace siltstone, 100% very fine to fine aggs, rare fine loose sandstone. TG: 125U. 100% mod bri-occ dl fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, rare fine loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, rare fine loose sandstone. TG: 125U. 100% mod bri-occ dl |
| Total Gas | 125.0 U |
| mTVDss | -1197.36 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1840m: lt gry brn,pl brn,vf-f,slty i/p,wl srt,sbang-sbrnd,mod-wk sil cmt, mnr gry brn arg mtx,mnr micmic,tr carb spks,rr-tr slty lams,fri-mod hd,pr-mnr fr vis por,fluor.
- **SANDSTONE** @ ~1840m: lt gry brn,pl brn,vf-f,slty FLW: 247-271gpm vis por,fluor.
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.3 | 33 |
| RES_DEEP (ohm.m) | 21.17 | 33 |
| RES_SHALLOW (ohm.m) | 20.33 | 33 |

---

### 1840 m MD — Interval 1837.5 – 1842.5 m

**Sample Description (spreadsheet):** Sample 1840m: Trace siltstone, 100% very fine to fine aggs sandstone. TG: 120U. 100% mod bri-occ dl fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs sandstone. TG: 120U. 100% mod bri-occ dl |
| Total Gas | 120.0 U |
| mTVDss | -1197.28 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1840m: lt gry brn,pl brn,vf-f,slty i/p,wl srt,sbang-sbrnd,mod-wk sil cmt, mnr gry brn arg mtx,mnr micmic,tr carb spks,rr-tr slty lams,fri-mod hd,pr-mnr fr vis por,fluor.
- **SANDSTONE** @ ~1840m: lt gry brn,pl brn,vf-f,slty FLW: 247-271gpm vis por,fluor.
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.8 | 32 |
| RES_DEEP (ohm.m) | 21.59 | 32 |
| RES_SHALLOW (ohm.m) | 20.97 | 32 |

---

### 1845 m MD — Interval 1842.5 – 1847.5 m

**Sample Description (spreadsheet):** Sample 1845m: Trace siltstone, 100% very fine to fine aggs sandstone. TG: 120U. 100% mod bri-occ dl fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs sandstone. TG: 120U. 100% mod bri-occ dl |
| Total Gas | 120.0 U |
| mTVDss | -1197.21 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1840m: lt gry brn,pl brn,vf-f,slty i/p,wl srt,sbang-sbrnd,mod-wk sil cmt, mnr gry brn arg mtx,mnr micmic,tr carb spks,rr-tr slty lams,fri-mod hd,pr-mnr fr vis por,fluor.
- **SANDSTONE** @ ~1840m: lt gry brn,pl brn,vf-f,slty FLW: 247-271gpm vis por,fluor.
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.7 | 33 |
| RES_DEEP (ohm.m) | 21.79 | 33 |
| RES_SHALLOW (ohm.m) | 20.91 | 33 |

---

### 1850 m MD — Interval 1847.5 – 1852.5 m

**Sample Description (spreadsheet):** Sample 1850: 100% very fine to fine aggs sandstone. TG: 125U. 100% mod bri-occ dl fluor. Fluor has changed in this sample, from a diffuse cut to more slow blooming cut

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 125.0 U |
| mTVDss | -1197.15 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1840m: lt gry brn,pl brn,vf-f,slty i/p,wl srt,sbang-sbrnd,mod-wk sil cmt, mnr gry brn arg mtx,mnr micmic,tr carb spks,rr-tr slty lams,fri-mod hd,pr-mnr fr vis por,fluor.
- **SANDSTONE** @ ~1840m: lt gry brn,pl brn,vf-f,slty FLW: 247-271gpm vis por,fluor.
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.8 | 33 |
| RES_DEEP (ohm.m) | 22.30 | 33 |
| RES_SHALLOW (ohm.m) | 21.38 | 33 |

---

### 1855 m MD — Interval 1852.5 – 1857.5 m

**Sample Description (spreadsheet):** Sample 1855m: 100% very fine to fine aggs sandstone. TG: 134U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs sandstone. TG: 134U. 100% mod bri |
| Total Gas | 134.0 U |
| mTVDss | -1197.09 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1840m: lt gry brn,pl brn,vf-f,slty i/p,wl srt,sbang-sbrnd,mod-wk sil cmt, mnr gry brn arg mtx,mnr micmic,tr carb spks,rr-tr slty lams,fri-mod hd,pr-mnr fr vis por,fluor.
- **SANDSTONE** @ ~1840m: lt gry brn,pl brn,vf-f,slty FLW: 247-271gpm vis por,fluor.
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.2 | 33 |
| RES_DEEP (ohm.m) | 23.96 | 33 |
| RES_SHALLOW (ohm.m) | 23.22 | 33 |

---

### 1860 m MD — Interval 1857.5 – 1862.5 m

**Sample Description (spreadsheet):** Sample 1860m: 100% very fine to fine aggs sandstone. TG: 137U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 100.0% very fine to fine aggs sandstone. TG: 137U. 100% mod bri |
| Total Gas | 137.0 U |
| mTVDss | -1197.03 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.5 | 33 |
| RES_DEEP (ohm.m) | 24.50 | 33 |
| RES_SHALLOW (ohm.m) | 23.93 | 33 |

---

### 1865 m MD — Interval 1862.5 – 1867.5 m

**Sample Description (spreadsheet):** Sample 1865m: 100% very fine to fine aggs sandstone. TG: 136U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 100.0% very fine to fine aggs sandstone. TG: 136U. 100% mod bri |
| Total Gas | 136.0 U |
| mTVDss | -1196.96 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.0 | 32 |
| RES_DEEP (ohm.m) | 25.63 | 32 |
| RES_SHALLOW (ohm.m) | 23.52 | 32 |

---

### 1870 m MD — Interval 1867.5 – 1872.5 m

**Sample Description (spreadsheet):** Sample 1870m: 100% very fine to fine aggs, minor to common loose grains sandstone. TG: 137U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, minor to common loose grains (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 100.0% very fine to fine aggs, minor to common loose grains sandstone. TG: 137U. 100% mod bri |
| Total Gas | 137.0 U |
| mTVDss | -1196.90 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.2 | 33 |
| RES_DEEP (ohm.m) | 25.60 | 33 |
| RES_SHALLOW (ohm.m) | 23.81 | 33 |

---

### 1875 m MD — Interval 1872.5 – 1877.5 m

**Sample Description (spreadsheet):** Sample 1875m: 100% very fine to fine aggs, rare loose grains sandstone. TG: 135U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, rare loose grains (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 100.0% very fine to fine aggs, rare loose grains sandstone. TG: 135U. 100% mod bri |
| Total Gas | 135.0 U |
| mTVDss | -1196.82 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.9 | 33 |
| RES_DEEP (ohm.m) | 26.37 | 33 |
| RES_SHALLOW (ohm.m) | 24.91 | 33 |

---

### 1880 m MD — Interval 1877.5 – 1882.5 m

**Sample Description (spreadsheet):** Sample 1880m: 100% very fine to fine aggs, sandstone. TG: 139U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 100.0% very fine to fine aggs, sandstone. TG: 139U. 100% mod bri |
| Total Gas | 139.0 U |
| mTVDss | -1196.73 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.7 | 33 |
| RES_DEEP (ohm.m) | 26.77 | 33 |
| RES_SHALLOW (ohm.m) | 24.36 | 33 |

---

### 1885 m MD — Interval 1882.5 – 1887.5 m

**Sample Description (spreadsheet):** Sample 1885m: 100% very fine to fine aggs, sandstone. TG: 134U. 100% mod bri fluor. 20% Siderite cement.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 134.0 U |
| mTVDss | -1196.63 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.0 | 33 |
| RES_DEEP (ohm.m) | 27.06 | 33 |
| RES_SHALLOW (ohm.m) | 25.34 | 33 |

---

### 1890 m MD — Interval 1887.5 – 1892.5 m

**Sample Description (spreadsheet):** Sample 1890m: 100% very fine to fine aggs, sandstone. TG: 134U. 100% mod bri fluor. 10% Siderite cement.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 134.0 U |
| mTVDss | -1196.50 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.2 | 32 |
| RES_DEEP (ohm.m) | 27.87 | 32 |
| RES_SHALLOW (ohm.m) | 24.81 | 32 |

---

### 1895 m MD — Interval 1892.5 – 1897.5 m

**Sample Description (spreadsheet):** Sample 1895m: 100% very fine to fine aggs, sandstone. TG: 134U. 100% mod bri fluor. 10% Siderite cement.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 134.0 U |
| mTVDss | -1196.37 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1910m: lt gry-pl brn,trnsl-clr,vf-f, 1920 tr-med,wl srt,sbang-sbrnd,wk sil cmt,com pl brn slty-arg mtx,tr-mnr micmic,tr carb spks,rr slty lams,fri,mnr disagg,pr-fr vis por,fluor.
- **SANDSTONE** @ ~1910m: lt gry-pl brn,trnsl-clr,vf-f, tr med,wl srt,sbang-sbrnd,wk sil cmt,com pl brn slty-arg mtx,tr-mnr micmic,tr carb spks,tr carb lams,rr slty lams,fri,mnr disagg,pr-fr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.1 | 33 |
| RES_DEEP (ohm.m) | 26.85 | 33 |
| RES_SHALLOW (ohm.m) | 24.66 | 33 |

---

### 1900 m MD — Interval 1897.5 – 1902.5 m

**Sample Description (spreadsheet):** Sample 1900m: 100% very fine to fine aggs, sandstone. TG: 132U. 100% mod bri fluor. 5% Siderite cement

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 132.0 U |
| mTVDss | -1196.22 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1910m: lt gry-pl brn,trnsl-clr,vf-f, 1920 tr-med,wl srt,sbang-sbrnd,wk sil cmt,com pl brn slty-arg mtx,tr-mnr micmic,tr carb spks,rr slty lams,fri,mnr disagg,pr-fr vis por,fluor.
- **SANDSTONE** @ ~1910m: lt gry-pl brn,trnsl-clr,vf-f, tr med,wl srt,sbang-sbrnd,wk sil cmt,com pl brn slty-arg mtx,tr-mnr micmic,tr carb spks,tr carb lams,rr slty lams,fri,mnr disagg,pr-fr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.4 | 33 |
| RES_DEEP (ohm.m) | 25.94 | 33 |
| RES_SHALLOW (ohm.m) | 24.43 | 33 |

---

### 1905 m MD — Interval 1902.5 – 1907.5 m

**Sample Description (spreadsheet):** Sample 1905m: 100% very fine to fine aggs, sandstone. TG: 130U. 100% mod bri fluor. Trace Siderite cement.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 130.0 U |
| mTVDss | -1196.07 m |
| FeCO₃ in Siltstone | trace |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1910m: lt gry-pl brn,trnsl-clr,vf-f, 1920 tr-med,wl srt,sbang-sbrnd,wk sil cmt,com pl brn slty-arg mtx,tr-mnr micmic,tr carb spks,rr slty lams,fri,mnr disagg,pr-fr vis por,fluor.
- **SANDSTONE** @ ~1910m: lt gry-pl brn,trnsl-clr,vf-f, tr med,wl srt,sbang-sbrnd,wk sil cmt,com pl brn slty-arg mtx,tr-mnr micmic,tr carb spks,tr carb lams,rr slty lams,fri,mnr disagg,pr-fr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.8 | 33 |
| RES_DEEP (ohm.m) | 24.67 | 33 |
| RES_SHALLOW (ohm.m) | 22.17 | 33 |

---

### 1910 m MD — Interval 1907.5 – 1912.5 m

**Sample Description (spreadsheet):** Sample 1910m: 100% very fine to fine aggs, sandstone. TG: 129U. 100% mod bri-dl fluor. Trace Siderite cement.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 129.0 U |
| mTVDss | -1195.91 m |
| FeCO₃ in Siltstone | trace |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1910m: lt gry-pl brn,trnsl-clr,vf-f, 1920 tr-med,wl srt,sbang-sbrnd,wk sil cmt,com pl brn slty-arg mtx,tr-mnr micmic,tr carb spks,rr slty lams,fri,mnr disagg,pr-fr vis por,fluor.
- **SANDSTONE** @ ~1910m: lt gry-pl brn,trnsl-clr,vf-f, tr med,wl srt,sbang-sbrnd,wk sil cmt,com pl brn slty-arg mtx,tr-mnr micmic,tr carb spks,tr carb lams,rr slty lams,fri,mnr disagg,pr-fr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.1 | 33 |
| RES_DEEP (ohm.m) | 25.32 | 33 |
| RES_SHALLOW (ohm.m) | 23.34 | 33 |

---

### 1915 m MD — Interval 1912.5 – 1917.5 m

**Sample Description (spreadsheet):** Sample 1915m: 100% very fine to fine aggs, trace loose sandstone. TG: 140U. 100% mod bri-dl fluor. Siderite cement has dissapeared.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, trace loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% loose sandstone. TG: 140U. 100% mod bri-dl |
| Total Gas | 140.0 U |
| mTVDss | -1195.75 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1910m: lt gry-pl brn,trnsl-clr,vf-f, 1920 tr-med,wl srt,sbang-sbrnd,wk sil cmt,com pl brn slty-arg mtx,tr-mnr micmic,tr carb spks,rr slty lams,fri,mnr disagg,pr-fr vis por,fluor.
- **SANDSTONE** @ ~1910m: lt gry-pl brn,trnsl-clr,vf-f, tr med,wl srt,sbang-sbrnd,wk sil cmt,com pl brn slty-arg mtx,tr-mnr micmic,tr carb spks,tr carb lams,rr slty lams,fri,mnr disagg,pr-fr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.6 | 33 |
| RES_DEEP (ohm.m) | 25.31 | 33 |
| RES_SHALLOW (ohm.m) | 24.26 | 33 |

---

### 1920 m MD — Interval 1917.5 – 1922.5 m

**Sample Description (spreadsheet):** Sample 1920m: 100% very fine to fine aggs, minor loose sandstone. TG: 140U. 100% mod bri-dl fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, minor loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, minor loose sandstone. TG: 140U. 100% mod bri-dl |
| Total Gas | 140.0 U |
| mTVDss | -1195.60 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1910m: lt gry-pl brn,trnsl-clr,vf-f, 1920 tr-med,wl srt,sbang-sbrnd,wk sil cmt,com pl brn slty-arg mtx,tr-mnr micmic,tr carb spks,rr slty lams,fri,mnr disagg,pr-fr vis por,fluor.
- **SANDSTONE** @ ~1910m: lt gry-pl brn,trnsl-clr,vf-f, tr med,wl srt,sbang-sbrnd,wk sil cmt,com pl brn slty-arg mtx,tr-mnr micmic,tr carb spks,tr carb lams,rr slty lams,fri,mnr disagg,pr-fr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.9 | 32 |
| RES_DEEP (ohm.m) | 25.78 | 32 |
| RES_SHALLOW (ohm.m) | 24.02 | 32 |

---

### 1925 m MD — Interval 1922.5 – 1927.5 m

**Sample Description (spreadsheet):** Sample 1925m: 100% very fine to fine aggs, tr med gns, minor loose sandstone. TG: 160U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, tr med gns, minor loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, tr med gns, minor loose sandstone. TG: 160U. 100% mod bri-bri |
| Total Gas | 160.0 U |
| mTVDss | -1195.44 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1910m: lt gry-pl brn,trnsl-clr,vf-f, 1920 tr-med,wl srt,sbang-sbrnd,wk sil cmt,com pl brn slty-arg mtx,tr-mnr micmic,tr carb spks,rr slty lams,fri,mnr disagg,pr-fr vis por,fluor.
- **SANDSTONE** @ ~1910m: lt gry-pl brn,trnsl-clr,vf-f, tr med,wl srt,sbang-sbrnd,wk sil cmt,com pl brn slty-arg mtx,tr-mnr micmic,tr carb spks,tr carb lams,rr slty lams,fri,mnr disagg,pr-fr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.7 | 33 |
| RES_DEEP (ohm.m) | 24.64 | 33 |
| RES_SHALLOW (ohm.m) | 22.00 | 33 |

---

### 1930 m MD — Interval 1927.5 – 1932.5 m

**Sample Description (spreadsheet):** Sample 1930m: 100% very fine to fine aggs, tr med gns, minor loose sandstone. TG: 170U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, tr med gns, minor loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 100.0% very fine to fine aggs, tr med gns, minor loose sandstone. TG: 170U. 100% mod bri-bri |
| Total Gas | 170.0 U |
| mTVDss | -1195.29 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.1 | 33 |
| RES_DEEP (ohm.m) | 22.23 | 33 |
| RES_SHALLOW (ohm.m) | 20.08 | 33 |

---

### 1935 m MD — Interval 1932.5 – 1937.5 m

**Sample Description (spreadsheet):** Sample 1935m: 100% very fine to fine aggs, tr med gns, minor loose sandstone. TG: 180U. 100% bri-mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, tr med gns, minor loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 100.0% very fine to fine aggs, tr med gns, minor loose sandstone. TG: 180U. 100% bri-mod bri |
| Total Gas | 180.0 U |
| mTVDss | -1195.15 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.1 | 33 |
| RES_DEEP (ohm.m) | 21.55 | 33 |
| RES_SHALLOW (ohm.m) | 19.31 | 33 |

---

### 1940 m MD — Interval 1937.5 – 1942.5 m

**Sample Description (spreadsheet):** Sample 1940m: 100% very fine to fine aggs, tr med gns, minor loose sandstone. TG: 188U. 100% bri-mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, tr med gns, minor loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 100.0% very fine to fine aggs, tr med gns, minor loose sandstone. TG: 188U. 100% bri-mod bri |
| Total Gas | 188.0 U |
| mTVDss | -1195.02 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.3 | 33 |
| RES_DEEP (ohm.m) | 21.20 | 33 |
| RES_SHALLOW (ohm.m) | 19.51 | 33 |

---

### 1945 m MD — Interval 1942.5 – 1947.5 m

**Sample Description (spreadsheet):** Sample 1945m: 100% very fine to fine aggs, tr-rr med gns, minor loose sandstone. TG: 220U. 100% bri-mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, tr-rr med gns, minor loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 100.0% very fine to fine aggs, tr-rr med gns, minor loose sandstone. TG: 220U. 100% bri-mod bri |
| Total Gas | 220.0 U |
| mTVDss | -1194.92 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.6 | 32 |
| RES_DEEP (ohm.m) | 22.49 | 32 |
| RES_SHALLOW (ohm.m) | 20.60 | 32 |

---

### 1950 m MD — Interval 1947.5 – 1952.5 m

**Sample Description (spreadsheet):** Sample 1950m: 100% very fine to fine aggs, tr-rr med gns, minor-com loose sandstone. TG: 225U. 100% bri-mnr mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, tr-rr med gns, minor-com loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 100.0% very fine to fine aggs, tr-rr med gns, minor-com loose sandstone. TG: 225U. 100% bri-mnr mod bri |
| Total Gas | 225.0 U |
| mTVDss | -1194.82 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.0 | 33 |
| RES_DEEP (ohm.m) | 27.94 | 33 |
| RES_SHALLOW (ohm.m) | 27.58 | 33 |

---

### 1955 m MD — Interval 1952.5 – 1957.5 m

**Sample Description (spreadsheet):** Sample 1955m: 100% very fine to fine aggs, tr-rr med gns, minor-com loose sandstone. TG: 215U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, tr-rr med gns, minor-com loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, tr-rr med gns, minor-com loose sandstone. TG: 215U. 100% bri |
| Total Gas | 215.0 U |
| mTVDss | -1194.75 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1970m: pl brn gry,pl brn,tr clr- trnsl,vf-f,rr med,sbrnd-occ sbang,wk-tr mod sil cmt,com pl brn slty-arg mtx,tr micmic,rr liths,fri-mod hd,mnr disagg,fr- tr pr vis & inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.0 | 33 |
| RES_DEEP (ohm.m) | 24.56 | 33 |
| RES_SHALLOW (ohm.m) | 21.84 | 33 |

---

### 1960 m MD — Interval 1957.5 – 1962.5 m

**Sample Description (spreadsheet):** Sample 1960m: 100% very fine to fine aggs, tr-rr med gns, minor loose sandstone. TG: 205U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, tr-rr med gns, minor loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, tr-rr med gns, minor loose sandstone. TG: 205U. 100% bri |
| Total Gas | 205.0 U |
| mTVDss | -1194.68 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1970m: pl brn gry,pl brn,tr clr- trnsl,vf-f,rr med,sbrnd-occ sbang,wk-tr mod sil cmt,com pl brn slty-arg mtx,tr micmic,rr liths,fri-mod hd,mnr disagg,fr- tr pr vis & inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.5 | 33 |
| RES_DEEP (ohm.m) | 26.42 | 33 |
| RES_SHALLOW (ohm.m) | 22.42 | 33 |

---

### 1965 m MD — Interval 1962.5 – 1967.5 m

**Sample Description (spreadsheet):** Sample 1965m: 100% very fine to fine aggs, rr med gns, tr loose sandstone. TG: 190U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, rr med gns, tr loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, rr med gns, tr loose sandstone. TG: 190U. 100% mod bri-bri |
| Total Gas | 190.0 U |
| mTVDss | -1194.63 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1970m: pl brn gry,pl brn,tr clr- trnsl,vf-f,rr med,sbrnd-occ sbang,wk-tr mod sil cmt,com pl brn slty-arg mtx,tr micmic,rr liths,fri-mod hd,mnr disagg,fr- tr pr vis & inf por,fluor.
- **SANDSTONE** @ ~1980m: pl brn gry,pl brn,tr clr- trnsl,vf-f,rr med,sbrnd-occ sbang,wk-tr mod sil cmt,com pl brn slty-arg mtx,tr micmic,rr liths,fri-mod hd,mnr disagg,fr- tr pr vis & inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.4 | 33 |
| RES_DEEP (ohm.m) | 27.17 | 33 |
| RES_SHALLOW (ohm.m) | 23.06 | 33 |

---

### 1970 m MD — Interval 1967.5 – 1972.5 m

**Sample Description (spreadsheet):** Sample 1970m: 100% very fine to fine aggs, mnr loose sandstone. TG: 220U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, mnr loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr |
| Hardness | fri-mod hd (0.55) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, mnr loose sandstone. TG: 220U. 100% bri |
| Total Gas | 220.0 U |
| mTVDss | -1194.58 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1970m: pl brn gry,pl brn,tr clr- trnsl,vf-f,rr med,sbrnd-occ sbang,wk-tr mod sil cmt,com pl brn slty-arg mtx,tr micmic,rr liths,fri-mod hd,mnr disagg,fr- tr pr vis & inf por,fluor.
- **SANDSTONE** @ ~1980m: pl brn gry,pl brn,tr clr- trnsl,vf-f,rr med,sbrnd-occ sbang,wk-tr mod sil cmt,com pl brn slty-arg mtx,tr micmic,rr liths,fri-mod hd,mnr disagg,fr- tr pr vis & inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.2 | 32 |
| RES_DEEP (ohm.m) | 24.37 | 32 |
| RES_SHALLOW (ohm.m) | 22.40 | 32 |

---

### 1975 m MD — Interval 1972.5 – 1977.5 m

**Sample Description (spreadsheet):** Sample 1975m: 100% very fine to fine aggs, mnr loose sandstone. TG: 210U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, mnr loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, mnr loose sandstone. TG: 210U. 100% bri |
| Total Gas | 210.0 U |
| mTVDss | -1194.53 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1970m: pl brn gry,pl brn,tr clr- trnsl,vf-f,rr med,sbrnd-occ sbang,wk-tr mod sil cmt,com pl brn slty-arg mtx,tr micmic,rr liths,fri-mod hd,mnr disagg,fr- tr pr vis & inf por,fluor.
- **SANDSTONE** @ ~1980m: pl brn gry,pl brn,tr clr- trnsl,vf-f,rr med,sbrnd-occ sbang,wk-tr mod sil cmt,com pl brn slty-arg mtx,tr micmic,rr liths,fri-mod hd,mnr disagg,fr- tr pr vis & inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.0 | 33 |
| RES_DEEP (ohm.m) | 22.69 | 33 |
| RES_SHALLOW (ohm.m) | 20.06 | 33 |

---

### 1980 m MD — Interval 1977.5 – 1982.5 m

**Sample Description (spreadsheet):** Sample 1980m: 100% very fine to fine aggs, mnr loose sandstone. TG: 200U. 100% bri fluor. Good cut, instant diffuse cut.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, mnr loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 200.0 U |
| mTVDss | -1194.50 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1970m: pl brn gry,pl brn,tr clr- trnsl,vf-f,rr med,sbrnd-occ sbang,wk-tr mod sil cmt,com pl brn slty-arg mtx,tr micmic,rr liths,fri-mod hd,mnr disagg,fr- tr pr vis & inf por,fluor.
- **SANDSTONE** @ ~1980m: pl brn gry,pl brn,tr clr- trnsl,vf-f,rr med,sbrnd-occ sbang,wk-tr mod sil cmt,com pl brn slty-arg mtx,tr micmic,rr liths,fri-mod hd,mnr disagg,fr- tr pr vis & inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.4 | 33 |
| RES_DEEP (ohm.m) | 23.50 | 33 |
| RES_SHALLOW (ohm.m) | 20.42 | 33 |

---

### 1985 m MD — Interval 1982.5 – 1987.5 m

**Sample Description (spreadsheet):** Sample 1985m: 100% very fine to fine aggs, mnr loose sandstone. TG: 180U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, mnr loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, mnr loose sandstone. TG: 180U. 100% bri |
| Total Gas | 180.0 U |
| mTVDss | -1194.46 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1970m: pl brn gry,pl brn,tr clr- trnsl,vf-f,rr med,sbrnd-occ sbang,wk-tr mod sil cmt,com pl brn slty-arg mtx,tr micmic,rr liths,fri-mod hd,mnr disagg,fr- tr pr vis & inf por,fluor.
- **SANDSTONE** @ ~1980m: pl brn gry,pl brn,tr clr- trnsl,vf-f,rr med,sbrnd-occ sbang,wk-tr mod sil cmt,com pl brn slty-arg mtx,tr micmic,rr liths,fri-mod hd,mnr disagg,fr- tr pr vis & inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.7 | 33 |
| RES_DEEP (ohm.m) | 24.10 | 33 |
| RES_SHALLOW (ohm.m) | 21.15 | 33 |

---

### 1990 m MD — Interval 1987.5 – 1992.5 m

**Sample Description (spreadsheet):** Sample 1990m: 100% very fine to fine aggs, mnr loose sandstone. TG: 190U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, mnr loose (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, mnr loose sandstone. TG: 190U. 100% bri |
| Total Gas | 190.0 U |
| mTVDss | -1194.42 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1980m: pl brn gry,pl brn,tr clr- trnsl,vf-f,rr med,sbrnd-occ sbang,wk-tr mod sil cmt,com pl brn slty-arg mtx,tr micmic,rr liths,fri-mod hd,mnr disagg,fr- tr pr vis & inf por,fluor.
- **SANDSTONE** @ ~1990m: clr-trnsl,pl brn-off wh,vf-f, tr-rr med grs,sbrnd-sbang,wk sil cmt,mnr pl brn arg mtx,rr micmic,disagg,fri,fr-gd inf por,fr vis por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.1 | 33 |
| RES_DEEP (ohm.m) | 25.37 | 33 |
| RES_SHALLOW (ohm.m) | 22.78 | 33 |

---

### 1995 m MD — Interval 1992.5 – 1997.5 m

**Sample Description (spreadsheet):** Sample 1995m: 100% very fine to fine pred lse gns, tr medium grains, vf-f aggs sandstone. TG: 220U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine pred lse gns, tr medium grains, vf-f aggs (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine pred lse gns, tr medium grains, vf-f aggs sandstone. TG: 220U. 100% bri |
| Total Gas | 220.0 U |
| mTVDss | -1194.39 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1980m: pl brn gry,pl brn,tr clr- trnsl,vf-f,rr med,sbrnd-occ sbang,wk-tr mod sil cmt,com pl brn slty-arg mtx,tr micmic,rr liths,fri-mod hd,mnr disagg,fr- tr pr vis & inf por,fluor.
- **SANDSTONE** @ ~1990m: clr-trnsl,pl brn-off wh,vf-f, tr-rr med grs,sbrnd-sbang,wk sil cmt,mnr pl brn arg mtx,rr micmic,disagg,fri,fr-gd inf por,fr vis por,fluor.
- _(11 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.5 | 32 |
| RES_DEEP (ohm.m) | 26.00 | 32 |
| RES_SHALLOW (ohm.m) | 23.72 | 32 |

---

### 2000 m MD — Interval 1997.5 – 2002.5 m

**Sample Description (spreadsheet):** Sample 2000m: 100% very fine to fine pred lse gns, rr medium grains, vf-f aggs sandstone. TG: 160U. 100% mod bri fluor. weaker cut

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine pred lse gns, rr medium grains, vf-f aggs (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 160.0 U |
| mTVDss | -1194.36 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1990m: clr-trnsl,pl brn-off wh,vf-f, tr-rr med grs,sbrnd-sbang,wk sil cmt,mnr pl brn arg mtx,rr micmic,disagg,fri,fr-gd inf por,fr vis por,fluor.
- **SANDSTONE** @ ~1990m: clr-trnsl,pl brn-off wh,vf-f, tr-rr med grs,sbrnd-sbang,wk-tr mod sil 79 / 6 / 4 / 5 / 6 226 U cmt,mnr pl brn arg mtx,rr micmic,disagg, fri,fr inf por,fr vis por,fluor.
- _(10 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.2 | 33 |
| RES_DEEP (ohm.m) | 26.92 | 33 |
| RES_SHALLOW (ohm.m) | 23.20 | 33 |

---

### 2005 m MD — Interval 2002.5 – 2007.5 m

**Sample Description (spreadsheet):** Sample 2005m: 100% very fine to fine pred lse gns, rr medium grains, vf-f aggs sandstone. TG: 200U. 100% mod bri fluor. weaker cut, a/a higher GR

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine pred lse gns, rr medium grains, vf-f aggs (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 200.0 U |
| mTVDss | -1194.34 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~1990m: clr-trnsl,pl brn-off wh,vf-f, tr-rr med grs,sbrnd-sbang,wk sil cmt,mnr pl brn arg mtx,rr micmic,disagg,fri,fr-gd inf por,fr vis por,fluor.
- **SANDSTONE** @ ~1990m: clr-trnsl,pl brn-off wh,vf-f, tr-rr med grs,sbrnd-sbang,wk-tr mod sil 79 / 6 / 4 / 5 / 6 226 U cmt,mnr pl brn arg mtx,rr micmic,disagg, fri,fr inf por,fr vis por,fluor.
- _(10 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.6 | 33 |
| RES_DEEP (ohm.m) | 34.56 | 33 |
| RES_SHALLOW (ohm.m) | 29.98 | 33 |

---

### 2010 m MD — Interval 2007.5 – 2012.5 m

**Sample Description (spreadsheet):** Sample 2010m: 100% very fine to fine pred lse gns, rr medium grains, vf-f aggs sandstone. TG: 240U. 100% bri fluor. Stronger cut.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine pred lse gns, rr medium grains, vf-f aggs (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 240.0 U |
| mTVDss | -1194.31 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2010m: clr-trnsl,pl brn,tr off wh, vf-f,rr med grs,sbrnd-sbang,wk-rr mod sil cmt,mnr pl brn arg mtx,tr micmic,fri,com disagg,fr-gd inf por,fr vis por,fluor.
- **SANDSTONE** @ ~2010m: clr-trnsl,pl brn,tr off wh, vf-f,tr-rr med grs,wl srt,sbrnd-sbang,wk sil cmt,mnr pl brn arg mtx,tr micmic,fri, com disagg,fr-gd inf por,fr vis por,fluor. ADDED 1% STARGLIDE
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.3 | 33 |
| RES_DEEP (ohm.m) | 44.28 | 33 |
| RES_SHALLOW (ohm.m) | 37.30 | 33 |

---

### 2015 m MD — Interval 2012.5 – 2017.5 m

**Sample Description (spreadsheet):** Sample 2015m: 100% very fine to fine pred lse gns, rr medium grains, vf-f aggs sandstone. TG: 225U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine pred lse gns, rr medium grains, vf-f aggs (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine pred lse gns, rr medium grains, vf-f aggs sandstone. TG: 225U. 100% bri |
| Total Gas | 225.0 U |
| mTVDss | -1194.28 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2010m: clr-trnsl,pl brn,tr off wh, vf-f,rr med grs,sbrnd-sbang,wk-rr mod sil cmt,mnr pl brn arg mtx,tr micmic,fri,com disagg,fr-gd inf por,fr vis por,fluor.
- **SANDSTONE** @ ~2010m: clr-trnsl,pl brn,tr off wh, vf-f,tr-rr med grs,wl srt,sbrnd-sbang,wk sil cmt,mnr pl brn arg mtx,tr micmic,fri, com disagg,fr-gd inf por,fr vis por,fluor. ADDED 1% STARGLIDE
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.5 | 33 |
| RES_DEEP (ohm.m) | 44.34 | 33 |
| RES_SHALLOW (ohm.m) | 34.31 | 33 |

---

### 2020 m MD — Interval 2017.5 – 2022.5 m

**Sample Description (spreadsheet):** Sample 2020m: 100% very fine to fine pred lse gns, rr medium grains, vf-f aggs sandstone. TG: 195U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine pred lse gns, rr medium grains, vf-f aggs (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine pred lse gns, rr medium grains, vf-f aggs sandstone. TG: 195U. 100% bri |
| Total Gas | 195.0 U |
| mTVDss | -1194.24 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2010m: clr-trnsl,pl brn,tr off wh, vf-f,rr med grs,sbrnd-sbang,wk-rr mod sil cmt,mnr pl brn arg mtx,tr micmic,fri,com disagg,fr-gd inf por,fr vis por,fluor.
- **SANDSTONE** @ ~2010m: clr-trnsl,pl brn,tr off wh, vf-f,tr-rr med grs,wl srt,sbrnd-sbang,wk sil cmt,mnr pl brn arg mtx,tr micmic,fri, com disagg,fr-gd inf por,fr vis por,fluor. ADDED 1% STARGLIDE
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.5 | 32 |
| RES_DEEP (ohm.m) | 39.86 | 32 |
| RES_SHALLOW (ohm.m) | 28.70 | 32 |

---

### 2025 m MD — Interval 2022.5 – 2027.5 m

**Sample Description (spreadsheet):** Sample 2025m: 100% very fine to fine aggs, vf-f lse gns sandstone. TG: 180U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, vf-f lse gns (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, vf-f lse gns sandstone. TG: 180U. 100% mod bri |
| Total Gas | 180.0 U |
| mTVDss | -1194.18 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2010m: clr-trnsl,pl brn,tr off wh, vf-f,rr med grs,sbrnd-sbang,wk-rr mod sil cmt,mnr pl brn arg mtx,tr micmic,fri,com disagg,fr-gd inf por,fr vis por,fluor.
- **SANDSTONE** @ ~2010m: clr-trnsl,pl brn,tr off wh, vf-f,tr-rr med grs,wl srt,sbrnd-sbang,wk sil cmt,mnr pl brn arg mtx,tr micmic,fri, com disagg,fr-gd inf por,fr vis por,fluor. ADDED 1% STARGLIDE
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.5 | 33 |
| RES_DEEP (ohm.m) | 36.44 | 33 |
| RES_SHALLOW (ohm.m) | 29.56 | 33 |

---

### 2030 m MD — Interval 2027.5 – 2032.5 m

**Sample Description (spreadsheet):** Sample 2030m: 100% very fine to fine aggs, vf-f lse gns sandstone. TG: 198U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, vf-f lse gns (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Hardness | lse (1.00) |
| Fluorescence | 100.0% very fine to fine aggs, vf-f lse gns sandstone. TG: 198U. 100% mod bri |
| Total Gas | 198.0 U |
| mTVDss | -1194.12 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.3 | 33 |
| RES_DEEP (ohm.m) | 44.37 | 33 |
| RES_SHALLOW (ohm.m) | 35.52 | 33 |

---

### 2035 m MD — Interval 2032.5 – 2037.5 m

**Sample Description (spreadsheet):** Sample 2035m: 100% very fine to fine aggs, vf-f lse gns sandstone. TG: 204U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, vf-f lse gns (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Hardness | lse (1.00) |
| Fluorescence | 100.0% very fine to fine aggs, vf-f lse gns sandstone. TG: 204U. 100% mod bri |
| Total Gas | 204.0 U |
| mTVDss | -1194.04 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.0 | 33 |
| RES_DEEP (ohm.m) | 43.46 | 33 |
| RES_SHALLOW (ohm.m) | 33.72 | 33 |

---

### 2040 m MD — Interval 2037.5 – 2042.5 m

**Sample Description (spreadsheet):** Sample 2040m: 100% very fine to fine aggs, vf-f lse gns sandstone. TG: 231U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, vf-f lse gns (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Hardness | lse (1.00) |
| Fluorescence | 100.0% very fine to fine aggs, vf-f lse gns sandstone. TG: 231U. 100% mod bri |
| Total Gas | 231.0 U |
| mTVDss | -1193.95 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.5 | 33 |
| RES_DEEP (ohm.m) | 34.76 | 33 |
| RES_SHALLOW (ohm.m) | 27.64 | 33 |

---

### 2045 m MD — Interval 2042.5 – 2047.5 m

**Sample Description (spreadsheet):** Sample 2045m: 100% very fine to fine aggs, vf-f lse gns sandstone. TG: 218U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, vf-f lse gns (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Hardness | lse (1.00) |
| Fluorescence | 100.0% very fine to fine aggs, vf-f lse gns sandstone. TG: 218U. 100% mod bri |
| Total Gas | 218.0 U |
| mTVDss | -1193.85 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.0 | 33 |
| RES_DEEP (ohm.m) | 27.72 | 33 |
| RES_SHALLOW (ohm.m) | 23.39 | 33 |

---

### 2050 m MD — Interval 2047.5 – 2052.5 m

**Sample Description (spreadsheet):** Sample 2050m: 100% very fine to fine aggs, vf-f lse, tr med-crs gns sandstone. TG: 208U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, vf-f lse, tr med-crs gns (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Hardness | lse (1.00) |
| Fluorescence | 100.0% very fine to fine aggs, vf-f lse, tr med-crs gns sandstone. TG: 208U. 100% mod bri-bri |
| Total Gas | 208.0 U |
| mTVDss | -1193.74 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.3 | 32 |
| RES_DEEP (ohm.m) | 30.63 | 32 |
| RES_SHALLOW (ohm.m) | 25.18 | 32 |

---

### 2055 m MD — Interval 2052.5 – 2057.5 m

**Sample Description (spreadsheet):** Sample 2055m: 5% siltstone, 95% very fine to fine aggs, vf-f lse gns sandstone. TG: 192U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs, vf-f lse gns (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% siltstone, 95% very fine to fine aggs, vf-f lse gns sandstone. TG: 192U. 100% mod bri |
| Total Gas | 192.0 U |
| mTVDss | -1193.62 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2070m: lt gry,lt gry brn,pl brn,clr, trnsl,vf-f,wl srt,sbang-sbrnd,wk sil cmt,tr gry-brn arg mtx,tr carb spks,tr micmic, fri,com disagg,fr vis por,fr-gd inf por, fluor.
- **SANDSTONE** @ ~2070m: lt gry,lt gry brn,pl brn,clr, trnsl,vf-f,rr med-v crs,mod-wl srt,sbang- sbrnd,wk sil cmt,tr gry-brn arg mtx,tr carb spks,tr micmic,fri,com disagg,fr vis por,gd-fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.0 | 33 |
| RES_DEEP (ohm.m) | 31.93 | 33 |
| RES_SHALLOW (ohm.m) | 26.51 | 33 |

---

### 2060 m MD — Interval 2057.5 – 2062.5 m

**Sample Description (spreadsheet):** Sample 2060m: 5% siltstone, 95% very fine to fine aggs, vf-f lse gns sandstone. TG: 210U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs, vf-f lse gns (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% siltstone, 95% very fine to fine aggs, vf-f lse gns sandstone. TG: 210U. 100% mod bri-bri |
| Total Gas | 210.0 U |
| mTVDss | -1193.50 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2070m: lt gry,lt gry brn,pl brn,clr, trnsl,vf-f,wl srt,sbang-sbrnd,wk sil cmt,tr gry-brn arg mtx,tr carb spks,tr micmic, fri,com disagg,fr vis por,fr-gd inf por, fluor.
- **SANDSTONE** @ ~2070m: lt gry,lt gry brn,pl brn,clr, trnsl,vf-f,rr med-v crs,mod-wl srt,sbang- sbrnd,wk sil cmt,tr gry-brn arg mtx,tr carb spks,tr micmic,fri,com disagg,fr vis por,gd-fr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.0 | 33 |
| RES_DEEP (ohm.m) | 33.38 | 33 |
| RES_SHALLOW (ohm.m) | 26.91 | 33 |

---

### 2065 m MD — Interval 2062.5 – 2067.5 m

**Sample Description (spreadsheet):** Sample 2065m: trace siltstone, 100% very fine to fine aggs, vf-f, trace med lse gns sandstone. TG: 219U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, vf-f, trace med lse gns (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, vf-f, trace med lse gns sandstone. TG: 219U. 100% mod bri-bri |
| Total Gas | 219.0 U |
| mTVDss | -1193.37 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2070m: lt gry,lt gry brn,pl brn,clr, trnsl,vf-f,wl srt,sbang-sbrnd,wk sil cmt,tr gry-brn arg mtx,tr carb spks,tr micmic, fri,com disagg,fr vis por,fr-gd inf por, fluor.
- **SANDSTONE** @ ~2070m: lt gry,lt gry brn,pl brn,clr, trnsl,vf-f,rr med-v crs,mod-wl srt,sbang- sbrnd,wk sil cmt,tr gry-brn arg mtx,tr carb spks,tr micmic,fri,com disagg,fr vis por,gd-fr inf por,fluor.
- _(19 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.1 | 33 |
| RES_DEEP (ohm.m) | 34.06 | 33 |
| RES_SHALLOW (ohm.m) | 27.92 | 33 |

---

### 2070 m MD — Interval 2067.5 – 2072.5 m

**Sample Description (spreadsheet):** Sample 2070m: 100% very fine to fine aggs, vf-f gns sandstone. TG: 225U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, vf-f gns (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, vf-f gns sandstone. TG: 225U. 100% mod bri-bri |
| Total Gas | 225.0 U |
| mTVDss | -1193.23 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2070m: lt gry,lt gry brn,pl brn,clr, trnsl,vf-f,wl srt,sbang-sbrnd,wk sil cmt,tr gry-brn arg mtx,tr carb spks,tr micmic, fri,com disagg,fr vis por,fr-gd inf por, fluor.
- **SANDSTONE** @ ~2070m: lt gry,lt gry brn,pl brn,clr, trnsl,vf-f,rr med-v crs,mod-wl srt,sbang- sbrnd,wk sil cmt,tr gry-brn arg mtx,tr carb spks,tr micmic,fri,com disagg,fr vis por,gd-fr inf por,fluor.
- _(19 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.8 | 33 |
| RES_DEEP (ohm.m) | 37.62 | 33 |
| RES_SHALLOW (ohm.m) | 31.59 | 33 |

---

### 2075 m MD — Interval 2072.5 – 2077.5 m

**Sample Description (spreadsheet):** Sample 2075m: 100% very fine to fine aggs, vf-f gns sandstone. TG: 245U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, vf-f gns (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, vf-f gns sandstone. TG: 245U. 100% mod bri-bri |
| Total Gas | 245.0 U |
| mTVDss | -1193.09 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2070m: lt gry,lt gry brn,pl brn,clr, trnsl,vf-f,wl srt,sbang-sbrnd,wk sil cmt,tr gry-brn arg mtx,tr carb spks,tr micmic, fri,com disagg,fr vis por,fr-gd inf por, fluor.
- **SANDSTONE** @ ~2070m: lt gry,lt gry brn,pl brn,clr, trnsl,vf-f,rr med-v crs,mod-wl srt,sbang- sbrnd,wk sil cmt,tr gry-brn arg mtx,tr carb spks,tr micmic,fri,com disagg,fr vis por,gd-fr inf por,fluor.
- _(19 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 57.5 | 32 |
| RES_DEEP (ohm.m) | 40.97 | 32 |
| RES_SHALLOW (ohm.m) | 35.16 | 32 |

---

### 2080 m MD — Interval 2077.5 – 2082.5 m

**Sample Description (spreadsheet):** Sample 2080m: 100% very fine to fine aggs, vf-f, rr med-v crs gns sandstone. TG: 232U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, vf-f, rr med-v crs gns (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, vf-f, rr med-v crs gns sandstone. TG: 232U. 100% mod bri-bri |
| Total Gas | 232.0 U |
| mTVDss | -1192.93 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2070m: lt gry,lt gry brn,pl brn,clr, trnsl,vf-f,wl srt,sbang-sbrnd,wk sil cmt,tr gry-brn arg mtx,tr carb spks,tr micmic, fri,com disagg,fr vis por,fr-gd inf por, fluor.
- **SANDSTONE** @ ~2070m: lt gry,lt gry brn,pl brn,clr, trnsl,vf-f,rr med-v crs,mod-wl srt,sbang- sbrnd,wk sil cmt,tr gry-brn arg mtx,tr carb spks,tr micmic,fri,com disagg,fr vis por,gd-fr inf por,fluor.
- _(19 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.4 | 33 |
| RES_DEEP (ohm.m) | 34.15 | 33 |
| RES_SHALLOW (ohm.m) | 28.25 | 33 |

---

### 2085 m MD — Interval 2082.5 – 2087.5 m

**Sample Description (spreadsheet):** Sample 2085m: 100% very fine to fine aggs, vf-f, rr med-crs gns sandstone. TG: 206U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, vf-f, rr med-crs gns (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, vf-f, rr med-crs gns sandstone. TG: 206U. 100% mod bri-bri |
| Total Gas | 206.0 U |
| mTVDss | -1192.76 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2070m: lt gry,lt gry brn,pl brn,clr, trnsl,vf-f,wl srt,sbang-sbrnd,wk sil cmt,tr gry-brn arg mtx,tr carb spks,tr micmic, fri,com disagg,fr vis por,fr-gd inf por, fluor.
- **SANDSTONE** @ ~2070m: lt gry,lt gry brn,pl brn,clr, trnsl,vf-f,rr med-v crs,mod-wl srt,sbang- sbrnd,wk sil cmt,tr gry-brn arg mtx,tr carb spks,tr micmic,fri,com disagg,fr vis por,gd-fr inf por,fluor.
- _(19 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.6 | 33 |
| RES_DEEP (ohm.m) | 35.06 | 33 |
| RES_SHALLOW (ohm.m) | 25.70 | 33 |

---

### 2090 m MD — Interval 2087.5 – 2092.5 m

**Sample Description (spreadsheet):** Sample 2090m: 100% very fine to fine aggs, vf-f, tr med-crs gns sandstone. TG: 216U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, vf-f, tr med-crs gns (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, vf-f, tr med-crs gns sandstone. TG: 216U. 100% mod bri-bri |
| Total Gas | 216.0 U |
| mTVDss | -1192.58 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2080m: lt gry,lt gry brn,pl brn,clr, trnsl,vf-f,tr med-crs,mod wl srt,sbang- sbrnd,wk sil cmt,tr-loc mnr gry-brn arg mtx,tr carb spks,tr micmic,fri,com disagg,fr-pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~2080m: lt gry,lt gry brn,pl brn,clr, trnsl,vf-f,tr med-crs,mod wl srt,sbang- sbrnd,tr rnd, tr ang,wk sil cmt,tr-loc mnr gry-brn arg mtx,tr carb spks,tr micmic,fri, mnr disagg,fr-pr vis por,fr-gd inf por,fluor.
- _(17 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.4 | 33 |
| RES_DEEP (ohm.m) | 33.67 | 33 |
| RES_SHALLOW (ohm.m) | 25.32 | 33 |

---

### 2095 m MD — Interval 2092.5 – 2097.5 m

**Sample Description (spreadsheet):** Sample 2095m: 100% very fine to fine aggs, vf-f, tr med-v crs gns sandstone. TG: 202U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, vf-f, tr med-v crs gns (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | mod wl (0.60) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, vf-f, tr med-v crs gns sandstone. TG: 202U. 100% mod bri-bri |
| Total Gas | 202.0 U |
| mTVDss | -1192.39 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2080m: lt gry,lt gry brn,pl brn,clr, trnsl,vf-f,tr med-crs,mod wl srt,sbang- sbrnd,wk sil cmt,tr-loc mnr gry-brn arg mtx,tr carb spks,tr micmic,fri,com disagg,fr-pr vis por,fr-gd inf por,fluor.
- **SANDSTONE** @ ~2080m: lt gry,lt gry brn,pl brn,clr, trnsl,vf-f,tr med-crs,mod wl srt,sbang- sbrnd,tr rnd, tr ang,wk sil cmt,tr-loc mnr gry-brn arg mtx,tr carb spks,tr micmic,fri, mnr disagg,fr-pr vis por,fr-gd inf por,fluor.
- _(17 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.2 | 33 |
| RES_DEEP (ohm.m) | 37.41 | 33 |
| RES_SHALLOW (ohm.m) | 29.64 | 33 |

---

### 2100 m MD — Interval 2097.5 – 2102.5 m

**Sample Description (spreadsheet):** Sample 2100m: 100% very fine to fine aggs, vf-f gns sandstone. TG: 184U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, vf-f gns (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 100.0% very fine to fine aggs, vf-f gns sandstone. TG: 184U. 100% mod bri-bri |
| Total Gas | 184.0 U |
| mTVDss | -1192.19 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.2 | 32 |
| RES_DEEP (ohm.m) | 39.15 | 32 |
| RES_SHALLOW (ohm.m) | 31.52 | 32 |

---

### 2105 m MD — Interval 2102.5 – 2107.5 m

**Sample Description (spreadsheet):** Sample 2105m: Trace siltstone, 100% very fine to fine aggs, vf-f gns sandstone. TG: 190U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, vf-f gns (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 100.0% very fine to fine aggs, vf-f gns sandstone. TG: 190U. 100% mod bri-bri |
| Total Gas | 190.0 U |
| mTVDss | -1191.98 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.8 | 33 |
| RES_DEEP (ohm.m) | 38.21 | 33 |
| RES_SHALLOW (ohm.m) | 30.80 | 33 |

---

### 2110 m MD — Interval 2107.5 – 2112.5 m

**Sample Description (spreadsheet):** Sample 2110m: Trace siltstone, 100% very fine to fine aggs, mnr vf-f gns sandstone. TG: 215U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, mnr vf-f gns (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 100.0% very fine to fine aggs, mnr vf-f gns sandstone. TG: 215U. 100% mod bri-bri |
| Total Gas | 215.0 U |
| mTVDss | -1191.76 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.0 | 33 |
| RES_DEEP (ohm.m) | 37.40 | 33 |
| RES_SHALLOW (ohm.m) | 31.13 | 33 |

---

### 2115 m MD — Interval 2112.5 – 2117.5 m

**Sample Description (spreadsheet):** Sample 2115m: 100% very fine to fine aggs, mnr vf-f, tr med-crs gns sandstone. TG: 201U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, mnr vf-f, tr med-crs gns (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% very fine to fine aggs, mnr vf-f, tr med-crs gns sandstone. TG: 201U. 100% mod bri-bri |
| Total Gas | 201.0 U |
| mTVDss | -1191.55 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.7 | 33 |
| RES_DEEP (ohm.m) | 37.24 | 33 |
| RES_SHALLOW (ohm.m) | 31.98 | 33 |

---

### 2120 m MD — Interval 2117.5 – 2122.5 m

**Sample Description (spreadsheet):** Sample 2120m: 100% very fine to fine aggs, mnr vf-f gns sandstone. TG: 203U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, mnr vf-f gns (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 100.0% very fine to fine aggs, mnr vf-f gns sandstone. TG: 203U. 100% mod bri-bri |
| Total Gas | 203.0 U |
| mTVDss | -1191.34 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.4 | 33 |
| RES_DEEP (ohm.m) | 29.19 | 33 |
| RES_SHALLOW (ohm.m) | 25.49 | 33 |

---

### 2125 m MD — Interval 2122.5 – 2127.5 m

**Sample Description (spreadsheet):** Sample 2125m: 100% very fine to fine aggs, tr vf-f gns sandstone. TG: 200U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, tr vf-f gns (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 100.0% very fine to fine aggs, tr vf-f gns sandstone. TG: 200U. 100% mod bri-bri |
| Total Gas | 200.0 U |
| mTVDss | -1191.12 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 109.6 | 32 |
| RES_DEEP (ohm.m) | 19.57 | 32 |
| RES_SHALLOW (ohm.m) | 16.56 | 32 |

---

### 2130 m MD — Interval 2127.5 – 2132.5 m

**Sample Description (spreadsheet):** Sample 2130m: 10% siltstone, 90% very fine to fine (g/t siltstone i/p) aggs, tr vf-f gns sandstone. TG: 143U. 60% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine (g/t siltstone i/p) aggs, tr vf-f gns (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 60.0% siltstone, 90% very fine to fine (g/t siltstone i/p) aggs, tr vf-f gns sandstone. TG: 143U. 60% mod bri |
| Total Gas | 143.0 U |
| mTVDss | -1190.91 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 109.5 | 33 |
| RES_DEEP (ohm.m) | 17.70 | 33 |
| RES_SHALLOW (ohm.m) | 15.75 | 33 |

---

### 2135 m MD — Interval 2132.5 – 2137.5 m

**Sample Description (spreadsheet):** Sample 2135m: 10% siltstone, 90% very fine to fine (g/t siltstone i/p) aggs, tr vf-f gns sandstone. TG: 104U. 40% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine (g/t siltstone i/p) aggs, tr vf-f gns (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 40.0% siltstone, 90% very fine to fine (g/t siltstone i/p) aggs, tr vf-f gns sandstone. TG: 104U. 40% mod bri |
| Total Gas | 104.0 U |
| mTVDss | -1190.69 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 110.4 | 33 |
| RES_DEEP (ohm.m) | 18.93 | 33 |
| RES_SHALLOW (ohm.m) | 16.26 | 33 |

---

### 2140 m MD — Interval 2137.5 – 2142.5 m

**Sample Description (spreadsheet):** Sample 2140m: 10% siltstone, 90% very fine to fine (g/t siltstone i/p) aggs, tr vf-f gns sandstone. TG: 114U. 40% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | very fine to fine (g/t siltstone i/p) aggs, tr vf-f gns (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 40.0% siltstone, 90% very fine to fine (g/t siltstone i/p) aggs, tr vf-f gns sandstone. TG: 114U. 40% mod bri |
| Total Gas | 114.0 U |
| mTVDss | -1190.48 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.9 | 33 |
| RES_DEEP (ohm.m) | 19.52 | 33 |
| RES_SHALLOW (ohm.m) | 16.19 | 33 |

---

### 2145 m MD — Interval 2142.5 – 2147.5 m

**Sample Description (spreadsheet):** Sample 2145m: 5% siltstone, 95% very fine to fine (g/t siltstone i/p) aggs, tr vf-f gns sandstone. TG: 125U. 50% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine (g/t siltstone i/p) aggs, tr vf-f gns (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 50.0% siltstone, 95% very fine to fine (g/t siltstone i/p) aggs, tr vf-f gns sandstone. TG: 125U. 50% mod bri |
| Total Gas | 125.0 U |
| mTVDss | -1190.26 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.9 | 33 |
| RES_DEEP (ohm.m) | 21.48 | 33 |
| RES_SHALLOW (ohm.m) | 17.58 | 33 |

---

### 2150 m MD — Interval 2147.5 – 2152.5 m

**Sample Description (spreadsheet):** Sample 2150m: Trace siltstone, 100% very fine to fine (g/t siltstone i/p) aggs, tr vf-f gns sandstone. TG: 123U. 60% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (g/t siltstone i/p) aggs, tr vf-f gns (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 60.0% very fine to fine (g/t siltstone i/p) aggs, tr vf-f gns sandstone. TG: 123U. 60% mod bri |
| Total Gas | 123.0 U |
| mTVDss | -1190.05 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.4 | 33 |
| RES_DEEP (ohm.m) | 22.18 | 33 |
| RES_SHALLOW (ohm.m) | 17.40 | 33 |

---

### 2155 m MD — Interval 2152.5 – 2157.5 m

**Sample Description (spreadsheet):** Sample 2155m: Trace siltstone, 100% very fine to fine (g/t siltstone i/p) aggs, tr vf-f gns sandstone. TG: 122U. 60% mod bri fluor.Sample 2155m: Trace siltstone, 100% very fine to fine (g/t siltstone i/p) aggs, tr vf-f gns sandstone. TG: 122U. 60% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine (g/t siltstone i/p) aggs, tr vf-f gns (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 60.0% very fine to fine (g/t siltstone i/p) aggs, tr vf-f gns sandstone. TG: 122U. 60% mod bri fluor.Sample 2155m: Trace siltstone, 100% very fine to fine (g/t siltstone i/p) aggs, tr vf-f gns sandstone. TG: 122U. 60% mod bri |
| Total Gas | 122.0 U |
| mTVDss | -1189.83 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.5 | 32 |
| RES_DEEP (ohm.m) | 22.82 | 32 |
| RES_SHALLOW (ohm.m) | 17.95 | 32 |

---

### 2160 m MD — Interval 2157.5 – 2162.5 m

**Sample Description (spreadsheet):** Sample 2160m: 100% very fine to fine aggs, tr vf-f gns sandstone. TG: 119U. 75% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, tr vf-f gns (max: nan) |
| Grain Ordinal | 2 |
| Porosity Class | none |
| Fluorescence | 75.0% very fine to fine aggs, tr vf-f gns sandstone. TG: 119U. 75% mod bri |
| Total Gas | 119.0 U |
| mTVDss | -1189.61 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.7 | 33 |
| RES_DEEP (ohm.m) | 24.73 | 33 |
| RES_SHALLOW (ohm.m) | 19.26 | 33 |

---

### 2165 m MD — Interval 2162.5 – 2167.5 m

**Sample Description (spreadsheet):** Sample 2165m: 100% very fine to fine aggs, tr vf-med gns sandstone. TG: 135U. 100% mod bri-dll fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, tr vf-med gns (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% very fine to fine aggs, tr vf-med gns sandstone. TG: 135U. 100% mod bri-dll |
| Total Gas | 135.0 U |
| mTVDss | -1189.40 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2180m: pl-lt brn,lt gry brn,med lt gry,clr,trnsl,vf-v crs,vf-f in aggs,v pr srt, sbrnd-sbang,mnr rnd-ang,mod-wk sil cmt,mnr brn-gry arg mtx,tr slty lams,tr carb lith spks,tr micmic,mod hd-fri,com

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.8 | 33 |
| RES_DEEP (ohm.m) | 30.06 | 33 |
| RES_SHALLOW (ohm.m) | 24.30 | 33 |

---

### 2170 m MD — Interval 2167.5 – 2172.5 m

**Sample Description (spreadsheet):** Sample 2170m: 100% very fine to fine aggs, rr vf-med gns sandstone. TG: 146U. 100% mod bri-dll fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, rr vf-med gns (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% very fine to fine aggs, rr vf-med gns sandstone. TG: 146U. 100% mod bri-dll |
| Total Gas | 146.0 U |
| mTVDss | -1189.18 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2180m: pl-lt brn,lt gry brn,med lt gry,clr,trnsl,vf-v crs,vf-f in aggs,v pr srt, sbrnd-sbang,mnr rnd-ang,mod-wk sil cmt,mnr brn-gry arg mtx,tr slty lams,tr carb lith spks,tr micmic,mod hd-fri,com

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.7 | 33 |
| RES_DEEP (ohm.m) | 31.91 | 33 |
| RES_SHALLOW (ohm.m) | 26.93 | 33 |

---

### 2175 m MD — Interval 2172.5 – 2177.5 m

**Sample Description (spreadsheet):** Sample 2175m: 100% very fine to fine aggs, rr f-crs gns sandstone. TG: 199U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, rr f-crs gns (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, rr f-crs gns sandstone. TG: 199U. 100% mod bri-bri |
| Total Gas | 199.0 U |
| mTVDss | -1188.97 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2180m: pl-lt brn,lt gry brn,med lt gry,clr,trnsl,vf-v crs,vf-f in aggs,v pr srt, sbrnd-sbang,mnr rnd-ang,mod-wk sil cmt,mnr brn-gry arg mtx,tr slty lams,tr carb lith spks,tr micmic,mod hd-fri,com
- **SANDSTONE** @ ~2190m: pl-lt brn,lt gry brn,med lt gry,clr,trnsl,vf-v crs,pred vf-f aggs,v pr srt,sbrnd-sbang,mnr ang,mod-wk sil cmt, mnr brn-gry arg mtx,tr slty lams,tr carb & lith spks,tr micmic,mod hd-fri,mnr disagg
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.4 | 33 |
| RES_DEEP (ohm.m) | 34.93 | 33 |
| RES_SHALLOW (ohm.m) | 30.15 | 33 |

---

### 2180 m MD — Interval 2177.5 – 2182.5 m

**Sample Description (spreadsheet):** Sample 2180m: Trace Siltstone, 100% very fine to fine aggs (tr siderite cement), rr f-v crs gns sandstone. TG: 198U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs (tr siderite cement), rr f-v crs gns (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs (tr siderite cement), rr f-v crs gns sandstone. TG: 198U. 100% mod bri-bri |
| Total Gas | 198.0 U |
| mTVDss | -1188.76 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2180m: pl-lt brn,lt gry brn,med lt gry,clr,trnsl,vf-v crs,vf-f in aggs,v pr srt, sbrnd-sbang,mnr rnd-ang,mod-wk sil cmt,mnr brn-gry arg mtx,tr slty lams,tr carb lith spks,tr micmic,mod hd-fri,com
- **SANDSTONE** @ ~2190m: pl-lt brn,lt gry brn,med lt gry,clr,trnsl,vf-v crs,pred vf-f aggs,v pr srt,sbrnd-sbang,mnr ang,mod-wk sil cmt, mnr brn-gry arg mtx,tr slty lams,tr carb & lith spks,tr micmic,mod hd-fri,mnr disagg
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.6 | 32 |
| RES_DEEP (ohm.m) | 37.49 | 32 |
| RES_SHALLOW (ohm.m) | 35.36 | 32 |

---

### 2185 m MD — Interval 2182.5 – 2187.5 m

**Sample Description (spreadsheet):** Sample 2185m: 100% very fine to fine aggs (tr siderite cement), tr f-v crs gns sandstone. TG: 240U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs (tr siderite cement), tr f-v crs gns (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs (tr siderite cement), tr f-v crs gns sandstone. TG: 240U. 100% mod bri-bri |
| Total Gas | 240.0 U |
| mTVDss | -1188.56 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2180m: pl-lt brn,lt gry brn,med lt gry,clr,trnsl,vf-v crs,vf-f in aggs,v pr srt, sbrnd-sbang,mnr rnd-ang,mod-wk sil cmt,mnr brn-gry arg mtx,tr slty lams,tr carb lith spks,tr micmic,mod hd-fri,com
- **SANDSTONE** @ ~2190m: pl-lt brn,lt gry brn,med lt gry,clr,trnsl,vf-v crs,pred vf-f aggs,v pr srt,sbrnd-sbang,mnr ang,mod-wk sil cmt, mnr brn-gry arg mtx,tr slty lams,tr carb & lith spks,tr micmic,mod hd-fri,mnr disagg
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.4 | 33 |
| RES_DEEP (ohm.m) | 37.34 | 33 |
| RES_SHALLOW (ohm.m) | 37.07 | 33 |

---

### 2190 m MD — Interval 2187.5 – 2192.5 m

**Sample Description (spreadsheet):** Sample 2190m: 100% very fine to fine aggs, com med-v crs gns sandstone. TG: 200U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, com med-v crs gns (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, com med-v crs gns sandstone. TG: 200U. 100% mod bri-bri |
| Total Gas | 200.0 U |
| mTVDss | -1188.37 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2180m: pl-lt brn,lt gry brn,med lt gry,clr,trnsl,vf-v crs,vf-f in aggs,v pr srt, sbrnd-sbang,mnr rnd-ang,mod-wk sil cmt,mnr brn-gry arg mtx,tr slty lams,tr carb lith spks,tr micmic,mod hd-fri,com
- **SANDSTONE** @ ~2190m: pl-lt brn,lt gry brn,med lt gry,clr,trnsl,vf-v crs,pred vf-f aggs,v pr srt,sbrnd-sbang,mnr ang,mod-wk sil cmt, mnr brn-gry arg mtx,tr slty lams,tr carb & lith spks,tr micmic,mod hd-fri,mnr disagg
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 64.0 | 33 |
| RES_DEEP (ohm.m) | 37.10 | 33 |
| RES_SHALLOW (ohm.m) | 36.84 | 33 |

---

### 2195 m MD — Interval 2192.5 – 2197.5 m

**Sample Description (spreadsheet):** Sample 2195m: 100% very fine to fine aggs, com med-v crs gns sandstone. TG: 210U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, com med-v crs gns (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, com med-v crs gns sandstone. TG: 210U. 100% mod bri-bri |
| Total Gas | 210.0 U |
| mTVDss | -1188.21 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2180m: pl-lt brn,lt gry brn,med lt gry,clr,trnsl,vf-v crs,vf-f in aggs,v pr srt, sbrnd-sbang,mnr rnd-ang,mod-wk sil cmt,mnr brn-gry arg mtx,tr slty lams,tr carb lith spks,tr micmic,mod hd-fri,com
- **SANDSTONE** @ ~2190m: pl-lt brn,lt gry brn,med lt gry,clr,trnsl,vf-v crs,pred vf-f aggs,v pr srt,sbrnd-sbang,mnr ang,mod-wk sil cmt, mnr brn-gry arg mtx,tr slty lams,tr carb & lith spks,tr micmic,mod hd-fri,mnr disagg
- _(9 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.6 | 33 |
| RES_DEEP (ohm.m) | 36.97 | 33 |
| RES_SHALLOW (ohm.m) | 33.33 | 33 |

---

### 2200 m MD — Interval 2197.5 – 2202.5 m

**Sample Description (spreadsheet):** Sample 2200m: 100% very fine to fine aggs, mnr med-v crs gns sandstone. TG: 209U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, mnr med-v crs gns (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, mnr med-v crs gns sandstone. TG: 209U. 100% mod bri-bri |
| Total Gas | 209.0 U |
| mTVDss | -1188.06 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2190m: pl-lt brn,lt gry brn,med lt gry,clr,trnsl,vf-v crs,pred vf-f aggs,v pr srt,sbrnd-sbang,mnr ang,mod-wk sil cmt, mnr brn-gry arg mtx,tr slty lams,tr carb & lith spks,tr micmic,mod hd-fri,mnr disagg
- **SANDSTONE** @ ~2190m: 120 (1229) SANDSTONE:pl-lt brn,lt gry brn,med lt FLW: 248-272gpm sbrnd-sbang,ang i/p,mod-wk sil cmt,mnr brn-gry arg mtx,tr slty lams,tr carb lith 80 / 6 / 4 / 5 / 5 250 U spks,tr micmic,mod hd-fri,com disagg
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.8 | 33 |
| RES_DEEP (ohm.m) | 45.65 | 33 |
| RES_SHALLOW (ohm.m) | 34.24 | 33 |

---

### 2205 m MD — Interval 2202.5 – 2207.5 m

**Sample Description (spreadsheet):** Sample 2205m: 5% siltstone, 95% very fine to fine aggs, com med-v crs gns sandstone. TG: 246U. 100% BRI fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs, com med-v crs gns (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% siltstone, 95% very fine to fine aggs, com med-v crs gns sandstone. TG: 246U. 100% BRI |
| Total Gas | 246.0 U |
| mTVDss | -1187.94 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2190m: pl-lt brn,lt gry brn,med lt gry,clr,trnsl,vf-v crs,pred vf-f aggs,v pr srt,sbrnd-sbang,mnr ang,mod-wk sil cmt, mnr brn-gry arg mtx,tr slty lams,tr carb & lith spks,tr micmic,mod hd-fri,mnr disagg
- **SANDSTONE** @ ~2190m: 120 (1229) SANDSTONE:pl-lt brn,lt gry brn,med lt FLW: 248-272gpm sbrnd-sbang,ang i/p,mod-wk sil cmt,mnr brn-gry arg mtx,tr slty lams,tr carb lith 80 / 6 / 4 / 5 / 5 250 U spks,tr micmic,mod hd-fri,com disagg
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.1 | 32 |
| RES_DEEP (ohm.m) | 51.43 | 32 |
| RES_SHALLOW (ohm.m) | 37.55 | 32 |

---

### 2210 m MD — Interval 2207.5 – 2212.5 m

**Sample Description (spreadsheet):** Sample 2210m: 5% siltstone, 95% very fine to fine aggs, com med-v crs gns sandstone. TG: 225U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs, com med-v crs gns (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% siltstone, 95% very fine to fine aggs, com med-v crs gns sandstone. TG: 225U. 100% bri |
| Total Gas | 225.0 U |
| mTVDss | -1187.85 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.6 | 33 |
| RES_DEEP (ohm.m) | 59.27 | 33 |
| RES_SHALLOW (ohm.m) | 37.30 | 33 |

---

### 2215 m MD — Interval 2212.5 – 2217.5 m

**Sample Description (spreadsheet):** Sample 2215m: 5% siltstone, 95% very fine to fine aggs, mnr med-v crs gns sandstone. TG: 182U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs, mnr med-v crs gns (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% siltstone, 95% very fine to fine aggs, mnr med-v crs gns sandstone. TG: 182U. 100% mod bri-bri |
| Total Gas | 182.0 U |
| mTVDss | -1187.79 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.8 | 33 |
| RES_DEEP (ohm.m) | 57.04 | 33 |
| RES_SHALLOW (ohm.m) | 35.05 | 33 |

---

### 2220 m MD — Interval 2217.5 – 2222.5 m

**Sample Description (spreadsheet):** Sample 2220m: 5% siltstone, 95% very fine to fine aggs, com med-v crs gns sandstone. TG: 187U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs, com med-v crs gns (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% siltstone, 95% very fine to fine aggs, com med-v crs gns sandstone. TG: 187U. 100% mod bri-bri |
| Total Gas | 187.0 U |
| mTVDss | -1187.76 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.3 | 33 |
| RES_DEEP (ohm.m) | 52.66 | 33 |
| RES_SHALLOW (ohm.m) | 37.95 | 33 |

---

### 2225 m MD — Interval 2222.5 – 2227.5 m

**Sample Description (spreadsheet):** Sample 2225m: 100% very fine to fine aggs, com med-v crs gns sandstone. TG: 160U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, com med-v crs gns (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% very fine to fine aggs, com med-v crs gns sandstone. TG: 160U. 100% bri |
| Total Gas | 160.0 U |
| mTVDss | -1187.74 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.9 | 33 |
| RES_DEEP (ohm.m) | 48.95 | 33 |
| RES_SHALLOW (ohm.m) | 42.38 | 33 |

---

### 2230 m MD — Interval 2227.5 – 2232.5 m

**Sample Description (spreadsheet):** Sample 2230m: 100% very fine to fine aggs, com med-v crs gns sandstone. TG: 163U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, com med-v crs gns (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% very fine to fine aggs, com med-v crs gns sandstone. TG: 163U. 100% bri |
| Total Gas | 163.0 U |
| mTVDss | -1187.73 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.5 | 32 |
| RES_DEEP (ohm.m) | 40.57 | 32 |
| RES_SHALLOW (ohm.m) | 36.93 | 32 |

---

### 2235 m MD — Interval 2232.5 – 2237.5 m

**Sample Description (spreadsheet):** Sample 2235m: 100% very fine to fine aggs, com med-v crs gns sandstone. TG: 163U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, com med-v crs gns (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% very fine to fine aggs, com med-v crs gns sandstone. TG: 163U. 100% bri |
| Total Gas | 163.0 U |
| mTVDss | -1187.72 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.0 | 33 |
| RES_DEEP (ohm.m) | 38.67 | 33 |
| RES_SHALLOW (ohm.m) | 36.49 | 33 |

---

### 2240 m MD — Interval 2237.5 – 2242.5 m

**Sample Description (spreadsheet):** Sample 2240m: 100% very fine to fine aggs, mnr-com med-v crs gns sandstone. TG: 180U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, mnr-com med-v crs gns (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% very fine to fine aggs, mnr-com med-v crs gns sandstone. TG: 180U. 100% bri |
| Total Gas | 180.0 U |
| mTVDss | -1187.72 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.7 | 33 |
| RES_DEEP (ohm.m) | 38.78 | 33 |
| RES_SHALLOW (ohm.m) | 37.74 | 33 |

---

### 2245 m MD — Interval 2242.5 – 2247.5 m

**Sample Description (spreadsheet):** Sample 2245m: 100% very fine to fine aggs, mnr-com med-v crs gns sandstone. TG: 230U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, mnr-com med-v crs gns (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% very fine to fine aggs, mnr-com med-v crs gns sandstone. TG: 230U. 100% bri |
| Total Gas | 230.0 U |
| mTVDss | -1187.72 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.3 | 33 |
| RES_DEEP (ohm.m) | 40.31 | 33 |
| RES_SHALLOW (ohm.m) | 40.09 | 33 |

---

### 2250 m MD — Interval 2247.5 – 2252.5 m

**Sample Description (spreadsheet):** Sample 2250m: 100% very fine to fine aggs, trace med- crs gns sandstone. TG: 216U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, trace med- crs gns (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% very fine to fine aggs, trace med- crs gns sandstone. TG: 216U. 100% bri |
| Total Gas | 216.0 U |
| mTVDss | -1187.72 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.0 | 33 |
| RES_DEEP (ohm.m) | 43.33 | 33 |
| RES_SHALLOW (ohm.m) | 41.18 | 33 |

---

### 2255 m MD — Interval 2252.5 – 2257.5 m

**Sample Description (spreadsheet):** Sample 2255m: 100% very fine to fine aggs, trace med- crs gns sandstone. TG: 250U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, trace med- crs gns (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, trace med- crs gns sandstone. TG: 250U. 100% bri |
| Total Gas | 250.0 U |
| mTVDss | -1187.72 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2270m: pl-lt brn,rr off wh,clr-trnsl, vf-f,occ med-crs,mod-wl srt,sbrnd-sbang, wk-tr mod sil cmt,tr-mnr brn gry arg mtx, tr carb spks,rr slty lams,tr micmic,fri-occ- tr mod hd,com disagg,pr-fr vis por,fr-occ

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.6 | 32 |
| RES_DEEP (ohm.m) | 44.79 | 32 |
| RES_SHALLOW (ohm.m) | 44.53 | 32 |

---

### 2260 m MD — Interval 2257.5 – 2262.5 m

**Sample Description (spreadsheet):** Sample 2260m: 100% very fine to fine aggs, trace med loose gns sandstone. TG: 285U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, trace med loose gns (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr |
| Hardness | fri (0.70) |
| Sorting | wl (0.80) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, trace med loose gns sandstone. TG: 285U. 100% mod bri-bri |
| Total Gas | 285.0 U |
| mTVDss | -1187.72 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2270m: pl-lt brn,rr off wh,clr-trnsl, vf-f,occ med-crs,mod-wl srt,sbrnd-sbang, wk-tr mod sil cmt,tr-mnr brn gry arg mtx, tr carb spks,rr slty lams,tr micmic,fri-occ- tr mod hd,com disagg,pr-fr vis por,fr-occ

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.1 | 33 |
| RES_DEEP (ohm.m) | 40.72 | 33 |
| RES_SHALLOW (ohm.m) | 39.65 | 33 |

---

### 2265 m MD — Interval 2262.5 – 2267.5 m

**Sample Description (spreadsheet):** Sample 2265m: 100% very fine to fine aggs, trace med loose gns sandstone. TG: 215U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, trace med loose gns (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, trace med loose gns sandstone. TG: 215U. 100% mod bri-bri |
| Total Gas | 215.0 U |
| mTVDss | -1187.72 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2270m: pl-lt brn,rr off wh,clr-trnsl, vf-f,occ med-crs,mod-wl srt,sbrnd-sbang, wk-tr mod sil cmt,tr-mnr brn gry arg mtx, tr carb spks,rr slty lams,tr micmic,fri-occ- tr mod hd,com disagg,pr-fr vis por,fr-occ
- **SANDSTONE** @ ~2280m: 1/2 SANDSTONE:clr-trnsl,opq,tr mlky,pl-lt Cl: 106k brn,f-crs,tr v crs lse.vf-f aggs,pr-v pr srt,sbrnd-sbang,wk sil cmt,tr brn gry arg mtx,tr carb spks,tr micmic,rr slty lams, dom lse disagg grs,fri,gd vis por,gd-v gd

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.4 | 33 |
| RES_DEEP (ohm.m) | 40.09 | 33 |
| RES_SHALLOW (ohm.m) | 38.38 | 33 |

---

### 2270 m MD — Interval 2267.5 – 2272.5 m

**Sample Description (spreadsheet):** Sample 2270m: 100% very fine to fine aggs, trace med and rare crs loose gns sandstone. TG: 217U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, trace med and rare crs loose gns (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, trace med and rare crs loose gns sandstone. TG: 217U. 100% mod bri-bri |
| Total Gas | 217.0 U |
| mTVDss | -1187.72 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2270m: pl-lt brn,rr off wh,clr-trnsl, vf-f,occ med-crs,mod-wl srt,sbrnd-sbang, wk-tr mod sil cmt,tr-mnr brn gry arg mtx, tr carb spks,rr slty lams,tr micmic,fri-occ- tr mod hd,com disagg,pr-fr vis por,fr-occ
- **SANDSTONE** @ ~2280m: 1/2 SANDSTONE:clr-trnsl,opq,tr mlky,pl-lt Cl: 106k brn,f-crs,tr v crs lse.vf-f aggs,pr-v pr srt,sbrnd-sbang,wk sil cmt,tr brn gry arg mtx,tr carb spks,tr micmic,rr slty lams, dom lse disagg grs,fri,gd vis por,gd-v gd

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.6 | 33 |
| RES_DEEP (ohm.m) | 39.85 | 33 |
| RES_SHALLOW (ohm.m) | 35.28 | 33 |

---

### 2275 m MD — Interval 2272.5 – 2277.5 m

**Sample Description (spreadsheet):** Sample 2275m: 100% very fine to fine aggs, trace med and rare crs loose gns sandstone. TG: 205U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, trace med and rare crs loose gns (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, trace med and rare crs loose gns sandstone. TG: 205U. 100% mod bri-bri |
| Total Gas | 205.0 U |
| mTVDss | -1187.72 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2270m: pl-lt brn,rr off wh,clr-trnsl, vf-f,occ med-crs,mod-wl srt,sbrnd-sbang, wk-tr mod sil cmt,tr-mnr brn gry arg mtx, tr carb spks,rr slty lams,tr micmic,fri-occ- tr mod hd,com disagg,pr-fr vis por,fr-occ
- **SANDSTONE** @ ~2280m: 1/2 SANDSTONE:clr-trnsl,opq,tr mlky,pl-lt Cl: 106k brn,f-crs,tr v crs lse.vf-f aggs,pr-v pr srt,sbrnd-sbang,wk sil cmt,tr brn gry arg mtx,tr carb spks,tr micmic,rr slty lams, dom lse disagg grs,fri,gd vis por,gd-v gd

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.8 | 33 |
| RES_DEEP (ohm.m) | 38.70 | 33 |
| RES_SHALLOW (ohm.m) | 33.76 | 33 |

---

### 2280 m MD — Interval 2277.5 – 2282.5 m

**Sample Description (spreadsheet):** Sample 2280m: 100% very fine to fine aggs, tr-occ med and crs loose gns sandstone. TG: 240U. 100% bri-occ mod bri fluor

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, tr-occ med and crs loose gns (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, tr-occ med and crs loose gns sandstone. TG: 240U. 100% bri-occ mod bri |
| Total Gas | 240.0 U |
| mTVDss | -1187.72 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2270m: pl-lt brn,rr off wh,clr-trnsl, vf-f,occ med-crs,mod-wl srt,sbrnd-sbang, wk-tr mod sil cmt,tr-mnr brn gry arg mtx, tr carb spks,rr slty lams,tr micmic,fri-occ- tr mod hd,com disagg,pr-fr vis por,fr-occ
- **SANDSTONE** @ ~2280m: 1/2 SANDSTONE:clr-trnsl,opq,tr mlky,pl-lt Cl: 106k brn,f-crs,tr v crs lse.vf-f aggs,pr-v pr srt,sbrnd-sbang,wk sil cmt,tr brn gry arg mtx,tr carb spks,tr micmic,rr slty lams, dom lse disagg grs,fri,gd vis por,gd-v gd

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.7 | 33 |
| RES_DEEP (ohm.m) | 36.06 | 33 |
| RES_SHALLOW (ohm.m) | 31.91 | 33 |

---

### 2285 m MD — Interval 2282.5 – 2287.5 m

**Sample Description (spreadsheet):** Sample 2285m: 100% very fine to fine aggs, tr-occ med and crs loose gns sandstone. TG: 215U. 100% bri-occ mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, tr-occ med and crs loose gns (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, tr-occ med and crs loose gns sandstone. TG: 215U. 100% bri-occ mod bri |
| Total Gas | 215.0 U |
| mTVDss | -1187.73 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2270m: pl-lt brn,rr off wh,clr-trnsl, vf-f,occ med-crs,mod-wl srt,sbrnd-sbang, wk-tr mod sil cmt,tr-mnr brn gry arg mtx, tr carb spks,rr slty lams,tr micmic,fri-occ- tr mod hd,com disagg,pr-fr vis por,fr-occ
- **SANDSTONE** @ ~2280m: 1/2 SANDSTONE:clr-trnsl,opq,tr mlky,pl-lt Cl: 106k brn,f-crs,tr v crs lse.vf-f aggs,pr-v pr srt,sbrnd-sbang,wk sil cmt,tr brn gry arg mtx,tr carb spks,tr micmic,rr slty lams, dom lse disagg grs,fri,gd vis por,gd-v gd
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.1 | 32 |
| RES_DEEP (ohm.m) | 31.91 | 32 |
| RES_SHALLOW (ohm.m) | 28.06 | 32 |

---

### 2290 m MD — Interval 2287.5 – 2292.5 m

**Sample Description (spreadsheet):** Sample 2290m: 100% very fine to fine aggs, tr-occ med loose gns sandstone. TG: 204U. 100% bri-occ mod bri fluor

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, tr-occ med loose gns (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% very fine to fine aggs, tr-occ med loose gns sandstone. TG: 204U. 100% bri-occ mod bri |
| Total Gas | 204.0 U |
| mTVDss | -1187.75 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2280m: 1/2 SANDSTONE:clr-trnsl,opq,tr mlky,pl-lt Cl: 106k brn,f-crs,tr v crs lse.vf-f aggs,pr-v pr srt,sbrnd-sbang,wk sil cmt,tr brn gry arg mtx,tr carb spks,tr micmic,rr slty lams, dom lse disagg grs,fri,gd vis por,gd-v gd
- **SANDSTONE** @ ~2300m: 6-10klbs SANDSTONE:clr-trnsl,opq,tr mlky,pl-lt FLW: 271gpm mtx,tr carb spks,tr micmic,rr slty lams, dom lse disagg grs,fri,gd vis por,gd-v
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.6 | 33 |
| RES_DEEP (ohm.m) | 34.01 | 33 |
| RES_SHALLOW (ohm.m) | 26.64 | 33 |

---

### 2295 m MD — Interval 2292.5 – 2297.5 m

**Sample Description (spreadsheet):** Sample 2295m: 100% pred vf-crs loose, tr v crs, very fine to fine aggs, sandstone. TG: 280U. 100% bri fluor. Coarsening, inst diff cut.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | pred vf-crs loose, tr v crs, very fine to fine aggs (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% v crs, very fine to fine aggs, sandstone. TG: 280U. 100% bri |
| Total Gas | 280.0 U |
| mTVDss | -1187.77 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2280m: 1/2 SANDSTONE:clr-trnsl,opq,tr mlky,pl-lt Cl: 106k brn,f-crs,tr v crs lse.vf-f aggs,pr-v pr srt,sbrnd-sbang,wk sil cmt,tr brn gry arg mtx,tr carb spks,tr micmic,rr slty lams, dom lse disagg grs,fri,gd vis por,gd-v gd
- **SANDSTONE** @ ~2300m: 6-10klbs SANDSTONE:clr-trnsl,opq,tr mlky,pl-lt FLW: 271gpm mtx,tr carb spks,tr micmic,rr slty lams, dom lse disagg grs,fri,gd vis por,gd-v
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.7 | 33 |
| RES_DEEP (ohm.m) | 35.37 | 33 |
| RES_SHALLOW (ohm.m) | 30.94 | 33 |

---

### 2300 m MD — Interval 2297.5 – 2302.5 m

**Sample Description (spreadsheet):** Sample 2300m: 100% pred vf-crs loose, mnr v crs, very fine to fine aggs, sandstone. TG: 226U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | pred vf-crs loose, mnr v crs, very fine to fine aggs (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% pred vf-crs loose, mnr v crs, very fine to fine aggs, sandstone. TG: 226U. 100% bri |
| Total Gas | 226.0 U |
| mTVDss | -1187.79 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2300m: 6-10klbs SANDSTONE:clr-trnsl,opq,tr mlky,pl-lt FLW: 271gpm mtx,tr carb spks,tr micmic,rr slty lams, dom lse disagg grs,fri,gd vis por,gd-v
- **SANDSTONE** @ ~2300m: pl-lt brn,clr-trnsl,opq, mlky,trnsl gry,f-crs lse,vf-f aggs,pr-v pr srt,sbrnd-sbang,wk sil cmt,tr brn gry arg mtx,tr carb spks,tr micmic,fri,lse disagg grs,gd vis por,gd inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 66.6 | 33 |
| RES_DEEP (ohm.m) | 40.83 | 33 |
| RES_SHALLOW (ohm.m) | 36.81 | 33 |

---

### 2305 m MD — Interval 2302.5 – 2307.5 m

**Sample Description (spreadsheet):** Sample 2305m: 100% pred f-crs loose, mnr v crs, very fine to fine aggs, sandstone. TG: 225U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | pred f-crs loose, mnr v crs, very fine to fine aggs (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% pred f-crs loose, mnr v crs, very fine to fine aggs, sandstone. TG: 225U. 100% bri |
| Total Gas | 225.0 U |
| mTVDss | -1187.81 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2300m: 6-10klbs SANDSTONE:clr-trnsl,opq,tr mlky,pl-lt FLW: 271gpm mtx,tr carb spks,tr micmic,rr slty lams, dom lse disagg grs,fri,gd vis por,gd-v
- **SANDSTONE** @ ~2300m: pl-lt brn,clr-trnsl,opq, mlky,trnsl gry,f-crs lse,vf-f aggs,pr-v pr srt,sbrnd-sbang,wk sil cmt,tr brn gry arg mtx,tr carb spks,tr micmic,fri,lse disagg grs,gd vis por,gd inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.4 | 33 |
| RES_DEEP (ohm.m) | 43.06 | 33 |
| RES_SHALLOW (ohm.m) | 36.26 | 33 |

---

### 2310 m MD — Interval 2307.5 – 2312.5 m

**Sample Description (spreadsheet):** Sample 2310m: 100% f-crs loose, mnr v crs, very fine to fine aggs, sandstone. TG: 232U. 100% bri fluor. Less dissag gns, inc in vf aggs

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs loose, mnr v crs, very fine to fine aggs (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 232.0 U |
| mTVDss | -1187.83 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2300m: 6-10klbs SANDSTONE:clr-trnsl,opq,tr mlky,pl-lt FLW: 271gpm mtx,tr carb spks,tr micmic,rr slty lams, dom lse disagg grs,fri,gd vis por,gd-v
- **SANDSTONE** @ ~2300m: pl-lt brn,clr-trnsl,opq, mlky,trnsl gry,f-crs lse,vf-f aggs,pr-v pr srt,sbrnd-sbang,wk sil cmt,tr brn gry arg mtx,tr carb spks,tr micmic,fri,lse disagg grs,gd vis por,gd inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.4 | 32 |
| RES_DEEP (ohm.m) | 34.27 | 32 |
| RES_SHALLOW (ohm.m) | 30.33 | 32 |

---

### 2315 m MD — Interval 2312.5 – 2317.5 m

**Sample Description (spreadsheet):** Sample 2315m: 100% f-crs loose, very fine to fine aggs, sandstone. TG: 180U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs loose, very fine to fine aggs (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% f-crs loose, very fine to fine aggs, sandstone. TG: 180U. 100% mod bri |
| Total Gas | 180.0 U |
| mTVDss | -1187.84 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2300m: 6-10klbs SANDSTONE:clr-trnsl,opq,tr mlky,pl-lt FLW: 271gpm mtx,tr carb spks,tr micmic,rr slty lams, dom lse disagg grs,fri,gd vis por,gd-v
- **SANDSTONE** @ ~2300m: pl-lt brn,clr-trnsl,opq, mlky,trnsl gry,f-crs lse,vf-f aggs,pr-v pr srt,sbrnd-sbang,wk sil cmt,tr brn gry arg mtx,tr carb spks,tr micmic,fri,lse disagg grs,gd vis por,gd inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.6 | 33 |
| RES_DEEP (ohm.m) | 28.68 | 33 |
| RES_SHALLOW (ohm.m) | 25.45 | 33 |

---

### 2320 m MD — Interval 2317.5 – 2322.5 m

**Sample Description (spreadsheet):** Sample 2320m: 100% f-crs, tr v crs loose, very fine to fine aggs, sandstone. TG: 290U. 100% bri fluor. Better cut, rpd to inst, inc in res.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs, tr v crs loose, very fine to fine aggs (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% v crs loose, very fine to fine aggs, sandstone. TG: 290U. 100% bri |
| Total Gas | 290.0 U |
| mTVDss | -1187.85 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2320m: pl-lt brn,clr-trnsl,opq,tr mlky,vf-med,mnr crs lse,vf-f aggs,mod- pr srt,sbrnd-sbang,wk sil cmt,tr brn gry arg mtx,tr carb spks,tr micmic,fri,lse disagg grs,gd vis por,gd inf por,fluor.
- **SILTSTONE** @ ~2320m: med gry,med lt gry,vf aren, mnr carb spks,tr micmic,frm,sbblky-blky. SURVEY @ 2334.3m INC: 89.62° AZI: 49.08°G
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.5 | 33 |
| RES_DEEP (ohm.m) | 31.24 | 33 |
| RES_SHALLOW (ohm.m) | 30.71 | 33 |

---

### 2325 m MD — Interval 2322.5 – 2327.5 m

**Sample Description (spreadsheet):** Sample 2325m: Trace Siltstone, 100% f-crs, very fine to fine aggs, sandstone. TG: 260U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs, very fine to fine aggs (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% f-crs, very fine to fine aggs, sandstone. TG: 260U. 100% bri |
| Total Gas | 260.0 U |
| mTVDss | -1187.87 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2320m: pl-lt brn,clr-trnsl,opq,tr mlky,vf-med,mnr crs lse,vf-f aggs,mod- pr srt,sbrnd-sbang,wk sil cmt,tr brn gry arg mtx,tr carb spks,tr micmic,fri,lse disagg grs,gd vis por,gd inf por,fluor.
- **SILTSTONE** @ ~2320m: med gry,med lt gry,vf aren, mnr carb spks,tr micmic,frm,sbblky-blky. SURVEY @ 2334.3m INC: 89.62° AZI: 49.08°G
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.2 | 33 |
| RES_DEEP (ohm.m) | 33.90 | 33 |
| RES_SHALLOW (ohm.m) | 33.34 | 33 |

---

### 2330 m MD — Interval 2327.5 – 2332.5 m

**Sample Description (spreadsheet):** Sample 2330m: 5% Siltstone, 95% f-crs, very fine to fine aggs, sandstone. TG: 245U. 100% bri fluor. Gr cleaning back up after 2330m

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | Siltstone, 95% f-crs, very fine to fine aggs (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% nan |
| Total Gas | 245.0 U |
| mTVDss | -1187.90 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2320m: pl-lt brn,clr-trnsl,opq,tr mlky,vf-med,mnr crs lse,vf-f aggs,mod- pr srt,sbrnd-sbang,wk sil cmt,tr brn gry arg mtx,tr carb spks,tr micmic,fri,lse disagg grs,gd vis por,gd inf por,fluor.
- **SILTSTONE** @ ~2320m: med gry,med lt gry,vf aren, mnr carb spks,tr micmic,frm,sbblky-blky. SURVEY @ 2334.3m INC: 89.62° AZI: 49.08°G
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.6 | 33 |
| RES_DEEP (ohm.m) | 36.19 | 33 |
| RES_SHALLOW (ohm.m) | 36.03 | 33 |

---

### 2335 m MD — Interval 2332.5 – 2337.5 m

**Sample Description (spreadsheet):** Sample 2335m: 5% Siltstone, 95% f-med, mnr crs, very fine to fine aggs, sandstone. TG: 250U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | Siltstone, 95% f-med, mnr crs, very fine to fine aggs (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | gd |
| Hardness | lse (1.00) |
| Sorting | mod (0.40) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% Siltstone, 95% f-med, mnr crs, very fine to fine aggs, sandstone. TG: 250U. 100% bri |
| Total Gas | 250.0 U |
| mTVDss | -1187.92 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2320m: pl-lt brn,clr-trnsl,opq,tr mlky,vf-med,mnr crs lse,vf-f aggs,mod- pr srt,sbrnd-sbang,wk sil cmt,tr brn gry arg mtx,tr carb spks,tr micmic,fri,lse disagg grs,gd vis por,gd inf por,fluor.
- **SILTSTONE** @ ~2320m: med gry,med lt gry,vf aren, mnr carb spks,tr micmic,frm,sbblky-blky. SURVEY @ 2334.3m INC: 89.62° AZI: 49.08°G
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.2 | 32 |
| RES_DEEP (ohm.m) | 35.67 | 32 |
| RES_SHALLOW (ohm.m) | 34.03 | 32 |

---

### 2340 m MD — Interval 2337.5 – 2342.5 m

**Sample Description (spreadsheet):** Sample 2340m: 100% vf-med, tr crs, very fine to fine aggs, sandstone. TG: 265U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, tr crs, very fine to fine aggs (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% vf-med, tr crs, very fine to fine aggs, sandstone. TG: 265U. 100% bri |
| Total Gas | 265.0 U |
| mTVDss | -1187.94 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.0 | 33 |
| RES_DEEP (ohm.m) | 38.13 | 33 |
| RES_SHALLOW (ohm.m) | 34.59 | 33 |

---

### 2345 m MD — Interval 2342.5 – 2347.5 m

**Sample Description (spreadsheet):** Sample 2345m: 100% vf-med, tr crs, very fine to fine aggs, sandstone. TG: 254U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med, tr crs, very fine to fine aggs (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% vf-med, tr crs, very fine to fine aggs, sandstone. TG: 254U. 100% bri |
| Total Gas | 254.0 U |
| mTVDss | -1187.94 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.5 | 33 |
| RES_DEEP (ohm.m) | 41.45 | 33 |
| RES_SHALLOW (ohm.m) | 39.28 | 33 |

---

### 2350 m MD — Interval 2347.5 – 2352.5 m

**Sample Description (spreadsheet):** Sample 2350m: 100% vf-crs, very fine to fine aggs, sandstone. TG: 257U. 100% bri fluor. Better cut, inst diff cut.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs, very fine to fine aggs (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% nan |
| Total Gas | 257.0 U |
| mTVDss | -1187.92 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.0 | 33 |
| RES_DEEP (ohm.m) | 40.05 | 33 |
| RES_SHALLOW (ohm.m) | 40.65 | 33 |

---

### 2355 m MD — Interval 2352.5 – 2357.5 m

**Sample Description (spreadsheet):** Sample 2355m: 100% vf-crs, very fine to fine aggs, sandstone. TG: 290U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs, very fine to fine aggs (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% vf-crs, very fine to fine aggs, sandstone. TG: 290U. 100% bri |
| Total Gas | 290.0 U |
| mTVDss | -1187.89 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2370m: trnsl-clr,opq,mlky,pl-lt brn,f-v crs,pred f-crs lse,vf-pred f aggs, v pr srt,sbang-occ sbrnd,wk sil cmt,rr brn gry arg mtx,tr-rr carb spks,rr micmic,dom lse disagg grs,tr fri,gd vis por,v gd inf por,
- **SANDSTONE** @ ~2370m: trnsl-clr,opq,mlky,pl-lt brn brn,vf-med lse,vf-f aggs,pr srt,sbang- sbrnd,wk sil cmt,occ brn gry arg-slty mtx, rr carb spks,tr micmic,dom lse disagg grs,fri,fr vis por,fr-gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.6 | 33 |
| RES_DEEP (ohm.m) | 33.63 | 33 |
| RES_SHALLOW (ohm.m) | 33.57 | 33 |

---

### 2360 m MD — Interval 2357.5 – 2362.5 m

**Sample Description (spreadsheet):** Sample 2360m: 100% vf-crs, mnr v crs, loose, very fine to fine aggs, sandstone. TG: 230U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs, mnr v crs, loose, very fine to fine aggs (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% vf-crs, mnr v crs, loose, very fine to fine aggs, sandstone. TG: 230U. 100% bri |
| Total Gas | 230.0 U |
| mTVDss | -1187.86 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2370m: trnsl-clr,opq,mlky,pl-lt brn,f-v crs,pred f-crs lse,vf-pred f aggs, v pr srt,sbang-occ sbrnd,wk sil cmt,rr brn gry arg mtx,tr-rr carb spks,rr micmic,dom lse disagg grs,tr fri,gd vis por,v gd inf por,
- **SANDSTONE** @ ~2370m: trnsl-clr,opq,mlky,pl-lt brn brn,vf-med lse,vf-f aggs,pr srt,sbang- sbrnd,wk sil cmt,occ brn gry arg-slty mtx, rr carb spks,tr micmic,dom lse disagg grs,fri,fr vis por,fr-gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.5 | 32 |
| RES_DEEP (ohm.m) | 30.99 | 32 |
| RES_SHALLOW (ohm.m) | 30.52 | 32 |

---

### 2365 m MD — Interval 2362.5 – 2367.5 m

**Sample Description (spreadsheet):** Sample 2365m: 100% vf-crs, mnr v crs loose, very fine to fine aggs, sandstone. TG: 237U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs, mnr v crs loose, very fine to fine aggs (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% vf-crs, mnr v crs loose, very fine to fine aggs, sandstone. TG: 237U. 100% bri |
| Total Gas | 237.0 U |
| mTVDss | -1187.82 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2370m: trnsl-clr,opq,mlky,pl-lt brn,f-v crs,pred f-crs lse,vf-pred f aggs, v pr srt,sbang-occ sbrnd,wk sil cmt,rr brn gry arg mtx,tr-rr carb spks,rr micmic,dom lse disagg grs,tr fri,gd vis por,v gd inf por,
- **SANDSTONE** @ ~2370m: trnsl-clr,opq,mlky,pl-lt brn brn,vf-med lse,vf-f aggs,pr srt,sbang- sbrnd,wk sil cmt,occ brn gry arg-slty mtx, rr carb spks,tr micmic,dom lse disagg grs,fri,fr vis por,fr-gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 64.6 | 33 |
| RES_DEEP (ohm.m) | 34.91 | 33 |
| RES_SHALLOW (ohm.m) | 35.17 | 33 |

---

### 2370 m MD — Interval 2367.5 – 2372.5 m

**Sample Description (spreadsheet):** Sample 2370m: 100% f-crs, com v crs and tr vf loose, very fine to fine aggs, sandstone. TG: 242U. 100% mod bri-bri fluor. Brigtness dropped due to higher % of dissag grains

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs, com v crs and tr vf loose, very fine to fine aggs (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% vf loose, very fine to fine aggs, sandstone. TG: 242U. 100% mod bri-bri |
| Total Gas | 242.0 U |
| mTVDss | -1187.80 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2370m: trnsl-clr,opq,mlky,pl-lt brn,f-v crs,pred f-crs lse,vf-pred f aggs, v pr srt,sbang-occ sbrnd,wk sil cmt,rr brn gry arg mtx,tr-rr carb spks,rr micmic,dom lse disagg grs,tr fri,gd vis por,v gd inf por,
- **SANDSTONE** @ ~2370m: trnsl-clr,opq,mlky,pl-lt brn brn,vf-med lse,vf-f aggs,pr srt,sbang- sbrnd,wk sil cmt,occ brn gry arg-slty mtx, rr carb spks,tr micmic,dom lse disagg grs,fri,fr vis por,fr-gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.9 | 33 |
| RES_DEEP (ohm.m) | 40.25 | 33 |
| RES_SHALLOW (ohm.m) | 41.14 | 33 |

---

### 2375 m MD — Interval 2372.5 – 2377.5 m

**Sample Description (spreadsheet):** Sample 2375m: 100% f-crs, com v crs and tr vf loose, very fine to fine aggs, sandstone. TG: 281U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs, com v crs and tr vf loose, very fine to fine aggs (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% f-crs, com v crs and tr vf loose, very fine to fine aggs, sandstone. TG: 281U. 100% mod bri-bri |
| Total Gas | 281.0 U |
| mTVDss | -1187.77 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2370m: trnsl-clr,opq,mlky,pl-lt brn,f-v crs,pred f-crs lse,vf-pred f aggs, v pr srt,sbang-occ sbrnd,wk sil cmt,rr brn gry arg mtx,tr-rr carb spks,rr micmic,dom lse disagg grs,tr fri,gd vis por,v gd inf por,
- **SANDSTONE** @ ~2370m: trnsl-clr,opq,mlky,pl-lt brn brn,vf-med lse,vf-f aggs,pr srt,sbang- sbrnd,wk sil cmt,occ brn gry arg-slty mtx, rr carb spks,tr micmic,dom lse disagg grs,fri,fr vis por,fr-gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.5 | 33 |
| RES_DEEP (ohm.m) | 40.54 | 33 |
| RES_SHALLOW (ohm.m) | 44.08 | 33 |

---

### 2380 m MD — Interval 2377.5 – 2382.5 m

**Sample Description (spreadsheet):** Sample 2380m: 100% f-crs, com v crs and tr vf loose, very fine to fine aggs, sandstone. TG: 245U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs, com v crs and tr vf loose, very fine to fine aggs (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% f-crs, com v crs and tr vf loose, very fine to fine aggs, sandstone. TG: 245U. 100% bri |
| Total Gas | 245.0 U |
| mTVDss | -1187.75 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2370m: trnsl-clr,opq,mlky,pl-lt brn,f-v crs,pred f-crs lse,vf-pred f aggs, v pr srt,sbang-occ sbrnd,wk sil cmt,rr brn gry arg mtx,tr-rr carb spks,rr micmic,dom lse disagg grs,tr fri,gd vis por,v gd inf por,
- **SANDSTONE** @ ~2370m: trnsl-clr,opq,mlky,pl-lt brn brn,vf-med lse,vf-f aggs,pr srt,sbang- sbrnd,wk sil cmt,occ brn gry arg-slty mtx, rr carb spks,tr micmic,dom lse disagg grs,fri,fr vis por,fr-gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.2 | 33 |
| RES_DEEP (ohm.m) | 38.39 | 33 |
| RES_SHALLOW (ohm.m) | 41.91 | 33 |

---

### 2385 m MD — Interval 2382.5 – 2387.5 m

**Sample Description (spreadsheet):** Sample 2385m: 100% f-crs, com v crs and rr vf loose, very fine to fine aggs, sandstone. TG: 235U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs, com v crs and rr vf loose, very fine to fine aggs (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | lse (1.00) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.80) |
| Fluorescence | 100.0% f-crs, com v crs and rr vf loose, very fine to fine aggs, sandstone. TG: 235U. 100% mod bri-bri |
| Total Gas | 235.0 U |
| mTVDss | -1187.72 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2370m: trnsl-clr,opq,mlky,pl-lt brn,f-v crs,pred f-crs lse,vf-pred f aggs, v pr srt,sbang-occ sbrnd,wk sil cmt,rr brn gry arg mtx,tr-rr carb spks,rr micmic,dom lse disagg grs,tr fri,gd vis por,v gd inf por,
- **SANDSTONE** @ ~2370m: trnsl-clr,opq,mlky,pl-lt brn brn,vf-med lse,vf-f aggs,pr srt,sbang- sbrnd,wk sil cmt,occ brn gry arg-slty mtx, rr carb spks,tr micmic,dom lse disagg grs,fri,fr vis por,fr-gd inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 58.1 | 33 |
| RES_DEEP (ohm.m) | 41.89 | 33 |
| RES_SHALLOW (ohm.m) | 43.68 | 33 |

---

### 2390 m MD — Interval 2387.5 – 2392.5 m

**Sample Description (spreadsheet):** Sample 2390m: 100% f-crs, mnr v crs loose, very fine to pred fine aggs, sandstone. TG: 246U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | f-crs, mnr v crs loose, very fine to pred fine aggs (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% f-crs, mnr v crs loose, very fine to pred fine aggs, sandstone. TG: 246U. 100% mod bri-bri |
| Total Gas | 246.0 U |
| mTVDss | -1187.68 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.3 | 32 |
| RES_DEEP (ohm.m) | 43.44 | 32 |
| RES_SHALLOW (ohm.m) | 39.07 | 32 |

---

### 2395 m MD — Interval 2392.5 – 2397.5 m

**Sample Description (spreadsheet):** Sample 2395m: 100% vf-med loose, very fine to fine aggs, sandstone. TG: 274U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med loose, very fine to fine aggs (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% vf-med loose, very fine to fine aggs, sandstone. TG: 274U. 100% mod bri |
| Total Gas | 274.0 U |
| mTVDss | -1187.66 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2410m: clr-trnsl,opq,tr pl-lt gry,vf- crs,tr v crs lse,vf-f aggs,v pr-pr srt,sbang- sbrnd,wk sil cmt,tr brn gry arg mtx,rr carb spks,rr liths,rr micmic,dom lse disagg grs, mnr mag ox,fri,fr vis por,fr-gd inf por,
- **SANDSTONE** @ ~2410m: 7/8/9 SANDSTONE:clr-trnsl,opq,tr pl-lt gry, WL: 4.4 80 / 6 / 4 / 5 / 5 304 U vf-crs,tr-rr v crs lse,vf-f aggs,v pr-pr Sol: 10 srt,sbang-sbrnd,wk sil cmt,tr brn gry arg pH: 10 mtx,tr carb spks,rr liths,rr micmic,dom Ck: 1/2 lse disagg grs,fri,gd-v gd vis por,gd-v gd
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.7 | 33 |
| RES_DEEP (ohm.m) | 43.02 | 33 |
| RES_SHALLOW (ohm.m) | 37.59 | 33 |

---

### 2400 m MD — Interval 2397.5 – 2402.5 m

**Sample Description (spreadsheet):** Sample 2400m: 100% vf-med loose, very fine to fine aggs, sandstone. TG: 284U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med loose, very fine to fine aggs (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% vf-med loose, very fine to fine aggs, sandstone. TG: 284U. 100% mod bri |
| Total Gas | 284.0 U |
| mTVDss | -1187.64 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2410m: clr-trnsl,opq,tr pl-lt gry,vf- crs,tr v crs lse,vf-f aggs,v pr-pr srt,sbang- sbrnd,wk sil cmt,tr brn gry arg mtx,rr carb spks,rr liths,rr micmic,dom lse disagg grs, mnr mag ox,fri,fr vis por,fr-gd inf por,
- **SANDSTONE** @ ~2410m: 7/8/9 SANDSTONE:clr-trnsl,opq,tr pl-lt gry, WL: 4.4 80 / 6 / 4 / 5 / 5 304 U vf-crs,tr-rr v crs lse,vf-f aggs,v pr-pr Sol: 10 srt,sbang-sbrnd,wk sil cmt,tr brn gry arg pH: 10 mtx,tr carb spks,rr liths,rr micmic,dom Ck: 1/2 lse disagg grs,fri,gd-v gd vis por,gd-v gd
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.3 | 33 |
| RES_DEEP (ohm.m) | 49.88 | 33 |
| RES_SHALLOW (ohm.m) | 40.38 | 33 |

---

### 2405 m MD — Interval 2402.5 – 2407.5 m

**Sample Description (spreadsheet):** Sample 2405m: Trace siltstone, 100% vf-med and tr crs loose, very fine to fine aggs, sandstone. TG: 210U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-med and tr crs loose, very fine to fine aggs (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% vf-med and tr crs loose, very fine to fine aggs, sandstone. TG: 210U. 100% mod bri |
| Total Gas | 210.0 U |
| mTVDss | -1187.64 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2410m: clr-trnsl,opq,tr pl-lt gry,vf- crs,tr v crs lse,vf-f aggs,v pr-pr srt,sbang- sbrnd,wk sil cmt,tr brn gry arg mtx,rr carb spks,rr liths,rr micmic,dom lse disagg grs, mnr mag ox,fri,fr vis por,fr-gd inf por,
- **SANDSTONE** @ ~2410m: 7/8/9 SANDSTONE:clr-trnsl,opq,tr pl-lt gry, WL: 4.4 80 / 6 / 4 / 5 / 5 304 U vf-crs,tr-rr v crs lse,vf-f aggs,v pr-pr Sol: 10 srt,sbang-sbrnd,wk sil cmt,tr brn gry arg pH: 10 mtx,tr carb spks,rr liths,rr micmic,dom Ck: 1/2 lse disagg grs,fri,gd-v gd vis por,gd-v gd
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.6 | 33 |
| RES_DEEP (ohm.m) | 48.31 | 33 |
| RES_SHALLOW (ohm.m) | 39.19 | 33 |

---

### 2410 m MD — Interval 2407.5 – 2412.5 m

**Sample Description (spreadsheet):** Sample 2410m: 5% siltstone, 95% vf-med and tr crs loose, very fine to fine aggs, sandstone. TG: 230U. 95% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf-med and tr crs loose, very fine to fine aggs (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 95.0% siltstone, 95% vf-med and tr crs loose, very fine to fine aggs, sandstone. TG: 230U. 95% mod bri |
| Total Gas | 230.0 U |
| mTVDss | -1187.66 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2410m: clr-trnsl,opq,tr pl-lt gry,vf- crs,tr v crs lse,vf-f aggs,v pr-pr srt,sbang- sbrnd,wk sil cmt,tr brn gry arg mtx,rr carb spks,rr liths,rr micmic,dom lse disagg grs, mnr mag ox,fri,fr vis por,fr-gd inf por,
- **SANDSTONE** @ ~2410m: 7/8/9 SANDSTONE:clr-trnsl,opq,tr pl-lt gry, WL: 4.4 80 / 6 / 4 / 5 / 5 304 U vf-crs,tr-rr v crs lse,vf-f aggs,v pr-pr Sol: 10 srt,sbang-sbrnd,wk sil cmt,tr brn gry arg pH: 10 mtx,tr carb spks,rr liths,rr micmic,dom Ck: 1/2 lse disagg grs,fri,gd-v gd vis por,gd-v gd
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.6 | 33 |
| RES_DEEP (ohm.m) | 48.73 | 33 |
| RES_SHALLOW (ohm.m) | 39.46 | 33 |

---

### 2415 m MD — Interval 2412.5 – 2417.5 m

**Sample Description (spreadsheet):** Sample 2415m: Trace siltstone, 100% vf-crs and tr vcrs loose, very fine to fine aggs, sandstone. TG: 300U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs and tr vcrs loose, very fine to fine aggs (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% vf-crs and tr vcrs loose, very fine to fine aggs, sandstone. TG: 300U. 100% bri |
| Total Gas | 300.0 U |
| mTVDss | -1187.69 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2410m: clr-trnsl,opq,tr pl-lt gry,vf- crs,tr v crs lse,vf-f aggs,v pr-pr srt,sbang- sbrnd,wk sil cmt,tr brn gry arg mtx,rr carb spks,rr liths,rr micmic,dom lse disagg grs, mnr mag ox,fri,fr vis por,fr-gd inf por,
- **SANDSTONE** @ ~2410m: 7/8/9 SANDSTONE:clr-trnsl,opq,tr pl-lt gry, WL: 4.4 80 / 6 / 4 / 5 / 5 304 U vf-crs,tr-rr v crs lse,vf-f aggs,v pr-pr Sol: 10 srt,sbang-sbrnd,wk sil cmt,tr brn gry arg pH: 10 mtx,tr carb spks,rr liths,rr micmic,dom Ck: 1/2 lse disagg grs,fri,gd-v gd vis por,gd-v gd
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.1 | 32 |
| RES_DEEP (ohm.m) | 44.93 | 32 |
| RES_SHALLOW (ohm.m) | 40.24 | 32 |

---

### 2420 m MD — Interval 2417.5 – 2422.5 m

**Sample Description (spreadsheet):** Sample 2420m: 100% vf-crs and tr vcrs loose, very fine to fine aggs, sandstone. TG: 270U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs and tr vcrs loose, very fine to fine aggs (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% vf-crs and tr vcrs loose, very fine to fine aggs, sandstone. TG: 270U. 100% bri |
| Total Gas | 270.0 U |
| mTVDss | -1187.72 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2410m: clr-trnsl,opq,tr pl-lt gry,vf- crs,tr v crs lse,vf-f aggs,v pr-pr srt,sbang- sbrnd,wk sil cmt,tr brn gry arg mtx,rr carb spks,rr liths,rr micmic,dom lse disagg grs, mnr mag ox,fri,fr vis por,fr-gd inf por,
- **SANDSTONE** @ ~2410m: 7/8/9 SANDSTONE:clr-trnsl,opq,tr pl-lt gry, WL: 4.4 80 / 6 / 4 / 5 / 5 304 U vf-crs,tr-rr v crs lse,vf-f aggs,v pr-pr Sol: 10 srt,sbang-sbrnd,wk sil cmt,tr brn gry arg pH: 10 mtx,tr carb spks,rr liths,rr micmic,dom Ck: 1/2 lse disagg grs,fri,gd-v gd vis por,gd-v gd
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.3 | 33 |
| RES_DEEP (ohm.m) | 41.83 | 33 |
| RES_SHALLOW (ohm.m) | 39.92 | 33 |

---

### 2425 m MD — Interval 2422.5 – 2427.5 m

**Sample Description (spreadsheet):** Sample 2425m: 100% vf-crs and tr vcrs loose, very fine to fine aggs, sandstone. TG: 272U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs and tr vcrs loose, very fine to fine aggs (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | fr-gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | wk sil cmt (0.68) |
| Fluorescence | 100.0% vf-crs and tr vcrs loose, very fine to fine aggs, sandstone. TG: 272U. 100% bri |
| Total Gas | 272.0 U |
| mTVDss | -1187.75 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2410m: clr-trnsl,opq,tr pl-lt gry,vf- crs,tr v crs lse,vf-f aggs,v pr-pr srt,sbang- sbrnd,wk sil cmt,tr brn gry arg mtx,rr carb spks,rr liths,rr micmic,dom lse disagg grs, mnr mag ox,fri,fr vis por,fr-gd inf por,
- **SANDSTONE** @ ~2410m: 7/8/9 SANDSTONE:clr-trnsl,opq,tr pl-lt gry, WL: 4.4 80 / 6 / 4 / 5 / 5 304 U vf-crs,tr-rr v crs lse,vf-f aggs,v pr-pr Sol: 10 srt,sbang-sbrnd,wk sil cmt,tr brn gry arg pH: 10 mtx,tr carb spks,rr liths,rr micmic,dom Ck: 1/2 lse disagg grs,fri,gd-v gd vis por,gd-v gd
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 59.4 | 33 |
| RES_DEEP (ohm.m) | 43.10 | 33 |
| RES_SHALLOW (ohm.m) | 37.78 | 33 |

---

### 2430 m MD — Interval 2427.5 – 2432.5 m

**Sample Description (spreadsheet):** Sample 2430m: 100% vf-crs and tr vcrs loose, very fine to fine aggs, sandstone. TG: 290U. 100% bri-mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs and tr vcrs loose, very fine to fine aggs (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% vf-crs and tr vcrs loose, very fine to fine aggs, sandstone. TG: 290U. 100% bri-mod bri |
| Total Gas | 290.0 U |
| mTVDss | -1187.78 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 66.0 | 33 |
| RES_DEEP (ohm.m) | 41.20 | 33 |
| RES_SHALLOW (ohm.m) | 36.36 | 33 |

---

### 2435 m MD — Interval 2432.5 – 2437.5 m

**Sample Description (spreadsheet):** Sample 2435m: 100% vf-crs and tr vcrs loose, very fine to fine aggs, sandstone. TG: 300U. 100% bri-mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs and tr vcrs loose, very fine to fine aggs (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% vf-crs and tr vcrs loose, very fine to fine aggs, sandstone. TG: 300U. 100% bri-mod bri |
| Total Gas | 300.0 U |
| mTVDss | -1187.81 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 66.8 | 33 |
| RES_DEEP (ohm.m) | 38.24 | 33 |
| RES_SHALLOW (ohm.m) | 36.39 | 33 |

---

### 2440 m MD — Interval 2437.5 – 2442.5 m

**Sample Description (spreadsheet):** Sample 2440m: 100% vf-crs and tr vcrs loose, very fine to fine aggs, sandstone. TG: 230U. 100% bri-mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs and tr vcrs loose, very fine to fine aggs (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% vf-crs and tr vcrs loose, very fine to fine aggs, sandstone. TG: 230U. 100% bri-mod bri |
| Total Gas | 230.0 U |
| mTVDss | -1187.84 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.7 | 32 |
| RES_DEEP (ohm.m) | 35.36 | 32 |
| RES_SHALLOW (ohm.m) | 33.73 | 32 |

---

### 2445 m MD — Interval 2442.5 – 2447.5 m

**Sample Description (spreadsheet):** Sample 2445m: 100% vf-crs and tr vcrs loose, very fine to fine aggs, sandstone. TG: 252U. 100% bri-mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf-crs and tr vcrs loose, very fine to fine aggs (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% vf-crs and tr vcrs loose, very fine to fine aggs, sandstone. TG: 252U. 100% bri-mod bri |
| Total Gas | 252.0 U |
| mTVDss | -1187.87 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 62.7 | 33 |
| RES_DEEP (ohm.m) | 39.54 | 33 |
| RES_SHALLOW (ohm.m) | 36.23 | 33 |

---

### 2450 m MD — Interval 2447.5 – 2452.5 m

**Sample Description (spreadsheet):** Sample 2450m: 100% very fine to fine aggs, vf-v crs loose, sandstone. TG: 250U. 100% bri-mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, vf-v crs loose (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% very fine to fine aggs, vf-v crs loose, sandstone. TG: 250U. 100% bri-mod bri |
| Total Gas | 250.0 U |
| mTVDss | -1187.90 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.9 | 33 |
| RES_DEEP (ohm.m) | 44.57 | 33 |
| RES_SHALLOW (ohm.m) | 40.12 | 33 |

---

### 2455 m MD — Interval 2452.5 – 2457.5 m

**Sample Description (spreadsheet):** Sample 2455m: 100% very fine to fine aggs, com f-v crs loose sandstone. TG: 302U. 100% bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, com f-v crs loose (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% very fine to fine aggs, com f-v crs loose sandstone. TG: 302U. 100% bri |
| Total Gas | 302.0 U |
| mTVDss | -1187.94 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.8 | 33 |
| RES_DEEP (ohm.m) | 48.58 | 33 |
| RES_SHALLOW (ohm.m) | 37.75 | 33 |

---

### 2460 m MD — Interval 2457.5 – 2462.5 m

**Sample Description (spreadsheet):** Sample 2460m: 100% very fine to fine aggs, com med-v crs loose sandstone. TG: 259U. 100% bri-mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, com med-v crs loose (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% very fine to fine aggs, com med-v crs loose sandstone. TG: 259U. 100% bri-mod bri |
| Total Gas | 259.0 U |
| mTVDss | -1187.99 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.3 | 33 |
| RES_DEEP (ohm.m) | 47.66 | 33 |
| RES_SHALLOW (ohm.m) | 37.22 | 33 |

---

### 2465 m MD — Interval 2462.5 – 2467.5 m

**Sample Description (spreadsheet):** Sample 2465m: 100% very fine to fine aggs, com f-crs, mnr v crs loose sandstone. TG: 266U. 100% bri-mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, com f-crs, mnr v crs loose (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, com f-crs, mnr v crs loose sandstone. TG: 266U. 100% bri-mod bri |
| Total Gas | 266.0 U |
| mTVDss | -1188.04 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2480m: pl-lt brn,lt gry,clr,trnsl, opq,pred vf-f aggs,com f-v crs grs,v pr srt,sbang-sbrnd,tr ang,wk-mod sil cmt,tr- mnr brn gry arg mtx,tr slty lams,tr carb spks,rr micmic,pred fri-mod hd,com

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.1 | 32 |
| RES_DEEP (ohm.m) | 41.29 | 32 |
| RES_SHALLOW (ohm.m) | 36.60 | 32 |

---

### 2470 m MD — Interval 2467.5 – 2472.5 m

**Sample Description (spreadsheet):** Sample 2470m: 100% very fine to fine aggs, com f-crs, rr v crs loose sandstone. TG: 268U. 100% bri-mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | very fine to fine aggs, com f-crs, rr v crs loose (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% very fine to fine aggs, com f-crs, rr v crs loose sandstone. TG: 268U. 100% bri-mod bri |
| Total Gas | 268.0 U |
| mTVDss | -1188.10 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2480m: pl-lt brn,lt gry,clr,trnsl, opq,pred vf-f aggs,com f-v crs grs,v pr srt,sbang-sbrnd,tr ang,wk-mod sil cmt,tr- mnr brn gry arg mtx,tr slty lams,tr carb spks,rr micmic,pred fri-mod hd,com

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 66.9 | 33 |
| RES_DEEP (ohm.m) | 41.80 | 33 |
| RES_SHALLOW (ohm.m) | 41.68 | 33 |

---

### 2475 m MD — Interval 2472.5 – 2477.5 m

**Sample Description (spreadsheet):** Sample 2475m: 100% pred f-crs, rr v crs loose, mnr very fine to fine aggs, sandstone. TG: 318U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | pred f-crs, rr v crs loose, mnr very fine to fine aggs (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% pred f-crs, rr v crs loose, mnr very fine to fine aggs, sandstone. TG: 318U. 100% mod bri-bri |
| Total Gas | 318.0 U |
| mTVDss | -1188.17 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2480m: pl-lt brn,lt gry,clr,trnsl, opq,pred vf-f aggs,com f-v crs grs,v pr srt,sbang-sbrnd,tr ang,wk-mod sil cmt,tr- mnr brn gry arg mtx,tr slty lams,tr carb spks,rr micmic,pred fri-mod hd,com
- **SILTSTONE** @ ~2490m: dk gry,v dk gry,vf aren i/p, loc com sndy lams,tr-loc com carb spks, micmic i/p,frm-mod hd,sbfiss-sbblky. 75 / 6 / 4 / 6 / 9 301 U
- _(17 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 64.9 | 33 |
| RES_DEEP (ohm.m) | 41.03 | 33 |
| RES_SHALLOW (ohm.m) | 40.56 | 33 |

---

### 2480 m MD — Interval 2477.5 – 2482.5 m

**Sample Description (spreadsheet):** Sample 2480m: 100% pred f-v crs loose, mnr very fine to fine aggs, sandstone. TG: 250U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | pred f-v crs loose, mnr very fine to fine aggs (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% pred f-v crs loose, mnr very fine to fine aggs, sandstone. TG: 250U. 100% mod bri-bri |
| Total Gas | 250.0 U |
| mTVDss | -1188.25 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2480m: pl-lt brn,lt gry,clr,trnsl, opq,pred vf-f aggs,com f-v crs grs,v pr srt,sbang-sbrnd,tr ang,wk-mod sil cmt,tr- mnr brn gry arg mtx,tr slty lams,tr carb spks,rr micmic,pred fri-mod hd,com
- **SILTSTONE** @ ~2490m: dk gry,v dk gry,vf aren i/p, loc com sndy lams,tr-loc com carb spks, micmic i/p,frm-mod hd,sbfiss-sbblky. 75 / 6 / 4 / 6 / 9 301 U
- _(17 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 62.3 | 33 |
| RES_DEEP (ohm.m) | 37.00 | 33 |
| RES_SHALLOW (ohm.m) | 36.06 | 33 |

---

### 2485 m MD — Interval 2482.5 – 2487.5 m

**Sample Description (spreadsheet):** Sample 2485m: 100% pred f-crs,rr v crs loose, com very fine to fine aggs, sandstone. TG: 245U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | pred f-crs,rr v crs loose, com very fine to fine aggs (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% pred f-crs,rr v crs loose, com very fine to fine aggs, sandstone. TG: 245U. 100% mod bri-bri |
| Total Gas | 245.0 U |
| mTVDss | -1188.35 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2480m: pl-lt brn,lt gry,clr,trnsl, opq,pred vf-f aggs,com f-v crs grs,v pr srt,sbang-sbrnd,tr ang,wk-mod sil cmt,tr- mnr brn gry arg mtx,tr slty lams,tr carb spks,rr micmic,pred fri-mod hd,com
- **SILTSTONE** @ ~2490m: dk gry,v dk gry,vf aren i/p, loc com sndy lams,tr-loc com carb spks, micmic i/p,frm-mod hd,sbfiss-sbblky. 75 / 6 / 4 / 6 / 9 301 U
- _(17 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.7 | 33 |
| RES_DEEP (ohm.m) | 39.11 | 33 |
| RES_SHALLOW (ohm.m) | 36.00 | 33 |

---

### 2490 m MD — Interval 2487.5 – 2492.5 m

**Sample Description (spreadsheet):** Sample 2490m: 100% pred very fine to fine aggs, com f-v crs loose, sandstone. TG: 294U. 100% bri-mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | pred very fine to fine aggs, com f-v crs loose (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% pred very fine to fine aggs, com f-v crs loose, sandstone. TG: 294U. 100% bri-mod bri |
| Total Gas | 294.0 U |
| mTVDss | -1188.45 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2480m: pl-lt brn,lt gry,clr,trnsl, opq,pred vf-f aggs,com f-v crs grs,v pr srt,sbang-sbrnd,tr ang,wk-mod sil cmt,tr- mnr brn gry arg mtx,tr slty lams,tr carb spks,rr micmic,pred fri-mod hd,com
- **SILTSTONE** @ ~2490m: dk gry,v dk gry,vf aren i/p, loc com sndy lams,tr-loc com carb spks, micmic i/p,frm-mod hd,sbfiss-sbblky. 75 / 6 / 4 / 6 / 9 301 U
- _(17 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.2 | 32 |
| RES_DEEP (ohm.m) | 37.37 | 32 |
| RES_SHALLOW (ohm.m) | 34.08 | 32 |

---

### 2495 m MD — Interval 2492.5 – 2497.5 m

**Sample Description (spreadsheet):** Sample 2495m: 10% siltstone, 90% pred very fine to fine aggs, com f-v crs loose, sandstone. TG: 297U. 100% bri-mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | siltstone, 90% pred very fine to fine aggs, com f-v crs loose (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% siltstone, 90% pred very fine to fine aggs, com f-v crs loose, sandstone. TG: 297U. 100% bri-mod bri |
| Total Gas | 297.0 U |
| mTVDss | -1188.56 m |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2480m: pl-lt brn,lt gry,clr,trnsl, opq,pred vf-f aggs,com f-v crs grs,v pr srt,sbang-sbrnd,tr ang,wk-mod sil cmt,tr- mnr brn gry arg mtx,tr slty lams,tr carb spks,rr micmic,pred fri-mod hd,com
- **SILTSTONE** @ ~2490m: dk gry,v dk gry,vf aren i/p, loc com sndy lams,tr-loc com carb spks, micmic i/p,frm-mod hd,sbfiss-sbblky. 75 / 6 / 4 / 6 / 9 301 U
- _(17 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.8 | 33 |
| RES_DEEP (ohm.m) | 32.67 | 33 |
| RES_SHALLOW (ohm.m) | 31.70 | 33 |

---

### 2500 m MD — Interval 2497.5 – 2502.5 m

**Sample Description (spreadsheet):** Sample 2500m: 5% siltstone, 95% pred very fine to fine aggs, com f- crs, rr v crs loose, sandstone. TG: 267U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | siltstone, 95% pred very fine to fine aggs, com f- crs, rr v crs loose (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% siltstone, 95% pred very fine to fine aggs, com f- crs, rr v crs loose, sandstone. TG: 267U. 100% mod bri-bri |
| Total Gas | 267.0 U |
| mTVDss | -1188.67 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2490m: dk gry,v dk gry,vf aren i/p, loc com sndy lams,tr-loc com carb spks, micmic i/p,frm-mod hd,sbfiss-sbblky. 75 / 6 / 4 / 6 / 9 301 U
- **SANDSTONE** @ ~2490m: pl-lt brn,lt gry,clr,trnsl,opq, pred vf-f aggs,com f-crs,rr v crs grs,v pr srt,sbang-sbrnd,tr ang,wk-mod sil cmt,tr- mnr brn gry arg mtx,tr slty lams,tr carb spks,rr micmic,pred fri-mod hd,com
- _(16 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.6 | 33 |
| RES_DEEP (ohm.m) | 32.16 | 33 |
| RES_SHALLOW (ohm.m) | 29.47 | 33 |

---

### 2505 m MD — Interval 2502.5 – 2507.5 m

**Sample Description (spreadsheet):** Sample 2505m: 100% pred f- v crs loose, mnr very fine to fine aggs, sandstone. TG: 234U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | pred f- v crs loose, mnr very fine to fine aggs (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | gd |
| Hardness | fri-mod hd (0.55) |
| Sorting | v pr (0.00) |
| Angularity | sbrnd (0.50) |
| Cement | sil cmt (0.68) |
| Fluorescence | 100.0% pred f- v crs loose, mnr very fine to fine aggs, sandstone. TG: 234U. 100% mod bri-bri |
| Total Gas | 234.0 U |
| mTVDss | -1188.79 m |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2490m: dk gry,v dk gry,vf aren i/p, loc com sndy lams,tr-loc com carb spks, micmic i/p,frm-mod hd,sbfiss-sbblky. 75 / 6 / 4 / 6 / 9 301 U
- **SANDSTONE** @ ~2490m: pl-lt brn,lt gry,clr,trnsl,opq, pred vf-f aggs,com f-crs,rr v crs grs,v pr srt,sbang-sbrnd,tr ang,wk-mod sil cmt,tr- mnr brn gry arg mtx,tr slty lams,tr carb spks,rr micmic,pred fri-mod hd,com
- _(16 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.0 | 33 |
| RES_DEEP (ohm.m) | 35.46 | 33 |
| RES_SHALLOW (ohm.m) | 32.33 | 33 |

---

### 2510 m MD — Interval 2507.5 – 2512.5 m

**Sample Description (spreadsheet):** Sample 2510m: 100% pred f- v crs loose, rr very fine to fine aggs, sandstone. TG: 233U. 100% bri-mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | pred f- v crs loose, rr very fine to fine aggs (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% pred f- v crs loose, rr very fine to fine aggs, sandstone. TG: 233U. 100% bri-mod bri |
| Total Gas | 233.0 U |
| mTVDss | -1188.91 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 63.0 | 33 |
| RES_DEEP (ohm.m) | 37.84 | 33 |
| RES_SHALLOW (ohm.m) | 35.81 | 33 |

---

### 2515 m MD — Interval 2512.5 – 2517.5 m

**Sample Description (spreadsheet):** Sample 2515m: 100% pred f- crs, rr v crs loose, trace very fine to fine aggs, sandstone. TG: 279U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | pred f- crs, rr v crs loose, trace very fine to fine aggs (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% pred f- crs, rr v crs loose, trace very fine to fine aggs, sandstone. TG: 279U. 100% mod bri-bri |
| Total Gas | 279.0 U |
| mTVDss | -1189.02 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 55.8 | 33 |
| RES_DEEP (ohm.m) | 40.96 | 33 |
| RES_SHALLOW (ohm.m) | 37.83 | 33 |

---

### 2520 m MD — Interval 2517.5 – 2522.5 m

**Sample Description (spreadsheet):** Sample 2520m: 100% pred f- v crs loose, trace very fine to fine aggs, sandstone. TG: 203U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | pred f- v crs loose, trace very fine to fine aggs (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% pred f- v crs loose, trace very fine to fine aggs, sandstone. TG: 203U. 100% mod bri-bri |
| Total Gas | 203.0 U |
| mTVDss | -1189.13 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 53.1 | 32 |
| RES_DEEP (ohm.m) | 38.33 | 32 |
| RES_SHALLOW (ohm.m) | 35.58 | 32 |

---

### 2525 m MD — Interval 2522.5 – 2527.5 m

**Sample Description (spreadsheet):** Sample 2525m: 100% pred f- v crs loose, trace very fine to fine aggs, sandstone. TG: 185U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | pred f- v crs loose, trace very fine to fine aggs (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% pred f- v crs loose, trace very fine to fine aggs, sandstone. TG: 185U. 100% mod bri-bri |
| Total Gas | 185.0 U |
| mTVDss | -1189.23 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 59.1 | 33 |
| RES_DEEP (ohm.m) | 36.52 | 33 |
| RES_SHALLOW (ohm.m) | 32.74 | 33 |

---

### 2530 m MD — Interval 2527.5 – 2532.5 m

**Sample Description (spreadsheet):** Sample 2530m: 100% pred f- v crs loose, mnr very fine to fine aggs, sandstone. TG: 240U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | pred f- v crs loose, mnr very fine to fine aggs (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% pred f- v crs loose, mnr very fine to fine aggs, sandstone. TG: 240U. 100% mod bri-bri |
| Total Gas | 240.0 U |
| mTVDss | -1189.33 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.0 | 33 |
| RES_DEEP (ohm.m) | 33.09 | 33 |
| RES_SHALLOW (ohm.m) | 29.84 | 33 |

---

### 2535 m MD — Interval 2532.5 – 2537.5 m

**Sample Description (spreadsheet):** Sample 2535m: 5% siltstone, 95% pred very fine to fine aggs, com f-crs, rr v crs loose, sandstone. TG: 240U. 100% bri-mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | siltstone, 95% pred very fine to fine aggs, com f-crs, rr v crs loose (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% siltstone, 95% pred very fine to fine aggs, com f-crs, rr v crs loose, sandstone. TG: 240U. 100% bri-mod bri |
| Total Gas | 240.0 U |
| mTVDss | -1189.42 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.3 | 33 |
| RES_DEEP (ohm.m) | 33.39 | 33 |
| RES_SHALLOW (ohm.m) | 30.49 | 33 |

---

### 2540 m MD — Interval 2537.5 – 2542.5 m

**Sample Description (spreadsheet):** Sample 2540m: 10% siltstone, 90% pred very fine to fine aggs, com f-crs, rr v crs loose, sandstone. TG: 239U. 100% bri-mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | siltstone, 90% pred very fine to fine aggs, com f-crs, rr v crs loose (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% siltstone, 90% pred very fine to fine aggs, com f-crs, rr v crs loose, sandstone. TG: 239U. 100% bri-mod bri |
| Total Gas | 239.0 U |
| mTVDss | -1189.52 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.8 | 33 |
| RES_DEEP (ohm.m) | 33.53 | 33 |
| RES_SHALLOW (ohm.m) | 29.80 | 33 |

---

### 2545 m MD — Interval 2542.5 – 2547.5 m

**Sample Description (spreadsheet):** Sample 2545m: 5% siltstone, 95% pred very fine to fine aggs, com f-v crs loose, sandstone. TG: 222U. 100% bri-mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | siltstone, 95% pred very fine to fine aggs, com f-v crs loose (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% siltstone, 95% pred very fine to fine aggs, com f-v crs loose, sandstone. TG: 222U. 100% bri-mod bri |
| Total Gas | 222.0 U |
| mTVDss | -1189.61 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.3 | 32 |
| RES_DEEP (ohm.m) | 31.98 | 32 |
| RES_SHALLOW (ohm.m) | 28.16 | 32 |

---

### 2550 m MD — Interval 2547.5 – 2552.5 m

**Sample Description (spreadsheet):** Sample 2550m: 5% siltstone, 95% very fine to fine aggs, com f-v crs loose, sandstone. TG: 216U. 100% bri-mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | very fine to fine aggs, com f-v crs loose (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% siltstone, 95% very fine to fine aggs, com f-v crs loose, sandstone. TG: 216U. 100% bri-mod bri |
| Total Gas | 216.0 U |
| mTVDss | -1189.71 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.7 | 33 |
| RES_DEEP (ohm.m) | 26.76 | 33 |
| RES_SHALLOW (ohm.m) | 24.10 | 33 |

---

### 2555 m MD — Interval 2552.5 – 2557.5 m

**Sample Description (spreadsheet):** Sample 2555m: 100% pred f-crs, rr v crs, loose, very fine to fine aggs, sandstone. TG: 214U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | pred f-crs, rr v crs, loose, very fine to fine aggs (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% pred f-crs, rr v crs, loose, very fine to fine aggs, sandstone. TG: 214U. 100% mod bri |
| Total Gas | 214.0 U |
| mTVDss | -1189.81 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.3 | 33 |
| RES_DEEP (ohm.m) | 29.26 | 33 |
| RES_SHALLOW (ohm.m) | 25.84 | 33 |

---

### 2560 m MD — Interval 2557.5 – 2562.5 m

**Sample Description (spreadsheet):** Sample 2560m: 100% pred f-med, tr crs loose, mnr very fine to fine aggs, sandstone. TG: 230U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | pred f-med, tr crs loose, mnr very fine to fine aggs (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% pred f-med, tr crs loose, mnr very fine to fine aggs, sandstone. TG: 230U. 100% mod bri-bri |
| Total Gas | 230.0 U |
| mTVDss | -1189.93 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.9 | 33 |
| RES_DEEP (ohm.m) | 34.12 | 33 |
| RES_SHALLOW (ohm.m) | 29.07 | 33 |

---

### 2565 m MD — Interval 2562.5 – 2567.5 m

**Sample Description (spreadsheet):** Sample 2565m: 10% siltstone, 90% pred very fine to fine aggs, com f-med loose, sandstone. TG: 233U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | siltstone, 90% pred very fine to fine aggs, com f-med loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 100.0% siltstone, 90% pred very fine to fine aggs, com f-med loose, sandstone. TG: 233U. 100% mod bri-bri |
| Total Gas | 233.0 U |
| mTVDss | -1190.04 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.2 | 33 |
| RES_DEEP (ohm.m) | 33.08 | 33 |
| RES_SHALLOW (ohm.m) | 27.72 | 33 |

---

### 2570 m MD — Interval 2567.5 – 2572.5 m

**Sample Description (spreadsheet):** Sample 2570m: 10% siltstone, 90% pred very fine to fine aggs, mnr f-crs, tr v crs loose, sandstone. TG: 268U. 100% mod bri-bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | siltstone, 90% pred very fine to fine aggs, mnr f-crs, tr v crs loose (max: nan) |
| Grain Ordinal | 5 |
| Porosity Class | none |
| Fluorescence | 100.0% siltstone, 90% pred very fine to fine aggs, mnr f-crs, tr v crs loose, sandstone. TG: 268U. 100% mod bri-bri |
| Total Gas | 268.0 U |
| mTVDss | -1190.17 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.5 | 32 |
| RES_DEEP (ohm.m) | 31.83 | 32 |
| RES_SHALLOW (ohm.m) | 26.72 | 32 |

---

### 2575 m MD — Interval 2572.5 – 2577.5 m

**Sample Description (spreadsheet):** Sample 2575m: 10% siltstone, 90% pred very fine to fine aggs, mnr f-med, tr crs loose, sandstone. TG: 238U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | siltstone, 90% pred very fine to fine aggs, mnr f-med, tr crs loose (max: nan) |
| Grain Ordinal | 4 |
| Porosity Class | none |
| Fluorescence | 100.0% siltstone, 90% pred very fine to fine aggs, mnr f-med, tr crs loose, sandstone. TG: 238U. 100% mod bri |
| Total Gas | 238.0 U |
| mTVDss | -1190.30 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.7 | 33 |
| RES_DEEP (ohm.m) | 27.89 | 33 |
| RES_SHALLOW (ohm.m) | 24.26 | 33 |

---

### 2580 m MD — Interval 2577.5 – 2582.5 m

**Sample Description (spreadsheet):** Sample 2580m: 15% siltstone, 85% pred very fine to fine aggs, rr med to very crs loose, sandstone. TG: 199U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | siltstone, 85% pred very fine to fine aggs, rr med to very crs loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 100.0% siltstone, 85% pred very fine to fine aggs, rr med to very crs loose, sandstone. TG: 199U. 100% mod bri |
| Total Gas | 199.0 U |
| mTVDss | -1190.44 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.1 | 1 |
| RES_DEEP (ohm.m) | 24.90 | 21 |
| RES_SHALLOW (ohm.m) | 21.80 | 21 |

---

### 2585 m MD — Interval 2582.5 – 2587.5 m

**Sample Description (spreadsheet):** Sample 2585m: 25% siltstone, 75% very fine to fine aggs, trace med to very crs loose, sandstone. TG: 187U. 75% mod bri-dll fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | very fine to fine aggs, trace med to very crs loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 100.0% siltstone, 75% very fine to fine aggs, trace med to very crs loose, sandstone. TG: 187U. 75% mod bri-dll |
| Total Gas | 187.0 U |
| mTVDss | -1190.57 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|

---

### 2590 m MD — Interval 2587.5 – 2592.5 m

**Sample Description (spreadsheet):** Sample 2590m: 15% siltstone, 85% very fine to fine aggs, mnr fine to medium loose, sandstone. TG: 219U. 100% mod bri fluor.

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | very fine to fine aggs, mnr fine to medium loose (max: nan) |
| Grain Ordinal | 3 |
| Porosity Class | none |
| Fluorescence | 100.0% siltstone, 85% very fine to fine aggs, mnr fine to medium loose, sandstone. TG: 219U. 100% mod bri |
| Total Gas | 219.0 U |
| mTVDss | -1190.71 m |

**Mudlog Cuttings Description (PDF):** _No matching entry found_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|

---

## 5. Summary Statistics (McKinlay Member)

| Metric | Value |
|--------|-------|
| Intervals analysed | 183 |
| Depth range | 1680 – 2590 m |
| Avg % Sandstone | 97.9% |
| Mudlog matches | 111 / 183 |
