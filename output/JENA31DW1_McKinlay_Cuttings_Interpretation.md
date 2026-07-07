# JENA 31DW1 — McKinlay Member Cuttings & Log Interpretation

**Generated:** 2026-07-07 07:01 UTC  
**Well:** JENA 31DW1 (JENA 31DW1)  
**TD:** 3658 m MD  

---

## 1. Data Sources & Methodology

| Source | File | Role |
|--------|------|------|
| Mudlog PDF | `JENA 31DW1_ML_Mudlog_Spud-3658_MD_Final.pdf` | Cuttings lithology descriptions |
| Sample Descriptions | `Jena 31DW1- Hz Section Samples Descriptions.xlsx` (Input Sheet) | Depth intervals & sample properties |
| Formation Tops | `DC30.xlsx`, `Mck_Murta.xlsx` | Reservoir entry & overburden identification |
| Wireline Log (LAS) | `Jena_31DW1` | GR, RES_DEEP, RES_SHALLOW |

## 2. Formation Top Analysis

### 2.1 Key Tops

| Marker | Depth (m MD) | Source |
|--------|-------------|--------|
| DC30 | 2060.75 | DC30.xlsx |
| McKinlay Member (shallowest) | 2067.46 | Mck_Murta.xlsx |

### 2.2 McKinlay Member Top Classification

**Initial reservoir entry (DC30 + shallowest McKinlay):** 2067.46 m MD

**Target re-entry (lone McKinlay below an overburden entry pair):**
- 2407.51 m MD
- 3243.73 m MD
- 3410.55 m MD

**Overburden entry (Murta + corresponding McKinlay within 5 m):**
| McKinlay entry (m MD) | Murta (m MD) | Δ (m) | Re-entry (m MD) | Zone length (m) |
|-----------------------|-------------|-------|-----------------|-----------------|
| 2377.57 | 2375.43 | 2.14 | 2407.51 | 29.9 |
| 2965.71 | 2967.84 | 2.13 | 3243.73 | 278.0 |
| 3369.92 | 3365.64 | 4.28 | 3410.55 | 40.6 |

**McKinlay Member analysis window:** 2067.5 – 3658.0 m MD

**Excluded overburden intervals (entry → re-entry, pay resumes at re-entry):** 2378–2408 m (overburden), 2966–3244 m (overburden), 3370–3411 m (overburden)

**Samples in McKinlay Member:** 165 of 255 total
- Excluded pre-reservoir: 47
- Excluded overburden intervals: 43

## 3. Known Shortcomings

> **Read this section before using the output.**

1. **Mudlog PDF text extraction is imperfect.** Depth-to-description assignment uses ±15 m proximity heuristics.
2. **Formation top discrepancies** between Mck_Murta.xlsx and mudlog PDF picks are noted where present.
3. **Well name mapping:** JENA 31DW1 → `JENA 31DW1` (verified by TD and LAS WELL header).
4. **Sample intervals** are midpoints between consecutive sample depths — variable widths where spacing is irregular.
5. **Resistivity permeability proxy** is qualitative only (Δ Res = RES_DEEP − RES_SHALLOW).
6. **NULL LAS values** (-999.25) excluded from averages.
7. **Exclusion zones** span from each Murta/McKinlay overburden entry to the next lone McKinlay re-entry below (or entry + 50 m MD if none mapped). Later entry pairs inside an existing exclusion interval are treated as the same overburden excursion. Initial DC30/McKinlay reservoir entry is not excluded.
8. **Input Sheet only** — Calculations Sheet not used.
## 4. McKinlay Member Sample Intervals

Each section: depth interval, spreadsheet sample, mudlog cuttings, wireline log averages.

### 2070 m MD — Interval 2065.0 – 2075.0 m

**Sample Description (spreadsheet):** Sample 2070m: 20% Siltstone, 80% medium Sandstone, 100% dull to moderately bright FLUOR in SST. TG 65U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | med (max: crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 65.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2072m: off wh,lt brn,lt gry brn,lt gry,trnsl, med-crs,f-med i/p,mod-srt,sbang,mnr sbrnd, wk-mnr mod strg sil cmt,tr brn-wh arg mtx,fri,mnr 100 U lse disagg grs,tr liths,pr-v pr vis por,pr inf por,fluor. 84 / 5 / 4 / 4 / 3

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 109.2 | 66 |
| RES_DEEP (ohm.m) | 20.96 | 66 |
| RES_SHALLOW (ohm.m) | 16.11 | 66 |
| **Δ Res (Deep − Shallow)** | **4.85** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2080 m MD — Interval 2075.0 – 2085.0 m

**Sample Description (spreadsheet):** Sample 2080m: 25% Siltstone, 75% medium Sandstone, 100% dull to moderately bright FLUOR in SST. TG 71U

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | med (max: crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 71.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2072m: off wh,lt brn,lt gry brn,lt gry,trnsl, med-crs,f-med i/p,mod-srt,sbang,mnr sbrnd, wk-mnr mod strg sil cmt,tr brn-wh arg mtx,fri,mnr 100 U lse disagg grs,tr liths,pr-v pr vis por,pr inf por,fluor. 84 / 5 / 4 / 4 / 3
- **SILTSTONE** @ ~2092m: med-dk gry,gry brn,grd vf SST i/p,tr carb spks,frm-hd,sbblky. 87 U

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.9 | 66 |
| RES_DEEP (ohm.m) | 23.37 | 66 |
| RES_SHALLOW (ohm.m) | 17.83 | 66 |
| **Δ Res (Deep − Shallow)** | **5.54** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2090 m MD — Interval 2085.0 – 2095.0 m

**Sample Description (spreadsheet):** Sample 2090m: 15% Siltstone, 85% fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 38U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | f (max: med) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 38.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2072m: off wh,lt brn,lt gry brn,lt gry,trnsl, med-crs,f-med i/p,mod-srt,sbang,mnr sbrnd, wk-mnr mod strg sil cmt,tr brn-wh arg mtx,fri,mnr 100 U lse disagg grs,tr liths,pr-v pr vis por,pr inf por,fluor. 84 / 5 / 4 / 4 / 3
- **SILTSTONE** @ ~2092m: med-dk gry,gry brn,grd vf SST i/p,tr carb spks,frm-hd,sbblky. 87 U
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.5 | 65 |
| RES_DEEP (ohm.m) | 21.93 | 65 |
| RES_SHALLOW (ohm.m) | 14.77 | 65 |
| **Δ Res (Deep − Shallow)** | **7.16** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2100 m MD — Interval 2095.0 – 2105.0 m

**Sample Description (spreadsheet):** Sample 2100m: 50% Siltstone, 50% very fine Sandstone, 90% bright FLUOR in SST. TG 71U

| Property | Value |
|----------|-------|
| % Sandstone | 50.0 |
| Grain Size | vf (max: f) |
| Fluorescence | 90.0% bri |
| Total Gas | 71.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2092m: med-dk gry,gry brn,grd vf SST i/p,tr carb spks,frm-hd,sbblky. 87 U
- **SANDSTONE** @ ~2104m: clr,trnsl,lt gry,v lt yel brn,f-v crs,pr srt, DATABASE ERROR sbang-ang,mnr sbrnd,wk sil cmt,tr lt brn-off wh arg mtx,lse-fri aggs,tr liths,tr mica,pr-fr vis por,fr inf por, fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.4 | 66 |
| RES_DEEP (ohm.m) | 22.43 | 66 |
| RES_SHALLOW (ohm.m) | 17.68 | 66 |
| **Δ Res (Deep − Shallow)** | **4.75** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2110 m MD — Interval 2105.0 – 2115.0 m

**Sample Description (spreadsheet):** Sample 2110m: 10% Siltstone, 90% fine Sandstone, 100% bright FLUOR in SST. TG 46U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | f (max: v crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 46.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2092m: med-dk gry,gry brn,grd vf SST i/p,tr carb spks,frm-hd,sbblky. 87 U
- **SANDSTONE** @ ~2104m: clr,trnsl,lt gry,v lt yel brn,f-v crs,pr srt, DATABASE ERROR sbang-ang,mnr sbrnd,wk sil cmt,tr lt brn-off wh arg mtx,lse-fri aggs,tr liths,tr mica,pr-fr vis por,fr inf por, fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.6 | 65 |
| RES_DEEP (ohm.m) | 21.93 | 65 |
| RES_SHALLOW (ohm.m) | 16.51 | 65 |
| **Δ Res (Deep − Shallow)** | **5.41** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2120 m MD — Interval 2115.0 – 2125.0 m

**Sample Description (spreadsheet):** Sample 2120m: 30% Siltstone, 70% very fine Sandstone, 100% bright FLUOR in SST. TG 48U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 48.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2104m: clr,trnsl,lt gry,v lt yel brn,f-v crs,pr srt, DATABASE ERROR sbang-ang,mnr sbrnd,wk sil cmt,tr lt brn-off wh arg mtx,lse-fri aggs,tr liths,tr mica,pr-fr vis por,fr inf por, fluor.
- **SILTSTONE** @ ~2116m: med-dk gry,gry brn,grd vf SST i/p,tr carb spks,micmic,mod hd-hd,sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.1 | 66 |
| RES_DEEP (ohm.m) | 23.10 | 66 |
| RES_SHALLOW (ohm.m) | 18.06 | 66 |
| **Δ Res (Deep − Shallow)** | **5.04** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2130 m MD — Interval 2125.0 – 2135.0 m

**Sample Description (spreadsheet):** Sample 2130m: 20% Siltstone, 80% very fine Sandstone, 100% bright FLUOR in SST. TG 131U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 131.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2116m: med-dk gry,gry brn,grd vf SST i/p,tr carb spks,micmic,mod hd-hd,sbblky.
- **SANDSTONE** @ ~2124m: clr,trnsl,lt gry,v lt yel brn,vf-med,mnr crs,rr v crs,pr srt,sbang-sbrnd,wk sil cmt,tr lt brn-off wh arg mtx,lse-fri agg,tr liths,tr mica,pr-fr vis por & inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.5 | 66 |
| RES_DEEP (ohm.m) | 22.97 | 66 |
| RES_SHALLOW (ohm.m) | 17.45 | 66 |
| **Δ Res (Deep − Shallow)** | **5.53** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2140 m MD — Interval 2135.0 – 2145.0 m

**Sample Description (spreadsheet):** Sample 2140m: 10% Siltstone, 90% medium Sandstone, 100% bright FLUOR in SST. TG 53U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | med (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 53.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2124m: clr,trnsl,lt gry,v lt yel brn,vf-med,mnr crs,rr v crs,pr srt,sbang-sbrnd,wk sil cmt,tr lt brn-off wh arg mtx,lse-fri agg,tr liths,tr mica,pr-fr vis por & inf por,fluor.
- **SANDSTONE** @ ~2132m: clr,trnsl,lt gry,v lt yel brn,f-med,mnr crs,mod srt,sbang-sbrnd,wk sil cmt,tr lt brn-off wh arg mtx,lse-fri agg,tr liths,tr mica,pr-fr vis por & inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.3 | 65 |
| RES_DEEP (ohm.m) | 24.14 | 65 |
| RES_SHALLOW (ohm.m) | 18.54 | 65 |
| **Δ Res (Deep − Shallow)** | **5.60** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2150 m MD — Interval 2145.0 – 2155.0 m

**Sample Description (spreadsheet):** Sample 2150m: 10% Siltstone, 90% medium Sandstone, 100% bright FLUOR in SST. TG 110U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | med (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 110.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2132m: clr,trnsl,lt gry,v lt yel brn,f-med,mnr crs,mod srt,sbang-sbrnd,wk sil cmt,tr lt brn-off wh arg mtx,lse-fri agg,tr liths,tr mica,pr-fr vis por & inf por,fluor.
- **SILTSTONE** @ ~2144m: med-dk gry,gry brn,grd vf SST i/p,tr carb spks,micmic,mod hd-hd,sbblky. R SP P P M : : 2 1 0 3 0 0 1 - - 1 2 3 6 1 52 psi 21 12 4 3 8 1.1 M V az D D i : : : 1 2 1 1 1 2 0 4 3 . 7 1 8 . . 7 1 in m c m :9 2.1
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.9 | 66 |
| RES_DEEP (ohm.m) | 23.51 | 66 |
| RES_SHALLOW (ohm.m) | 17.18 | 66 |
| **Δ Res (Deep − Shallow)** | **6.33** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2160 m MD — Interval 2155.0 – 2165.0 m

**Sample Description (spreadsheet):** Sample 2160m: 0% Siltstone, 100% medium Sandstone, 100% bright FLUOR in SST. TG 66U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | med (max: crs) |
| Fluorescence | 100.0% bri |
| Total Gas | 66.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2144m: med-dk gry,gry brn,grd vf SST i/p,tr carb spks,micmic,mod hd-hd,sbblky. R SP P P M : : 2 1 0 3 0 0 1 - - 1 2 3 6 1 52 psi 21 12 4 3 8 1.1 M V az D D i : : : 1 2 1 1 1 2 0 4 3 . 7 1 8 . . 7 1 in m c m :9 2.1
- **SANDSTONE** @ ~2156m: clr,trnsl,lt gry,v lt yel brn,med-crs, mod srt,sbang-ang,mnr sbrnd,wk sil cmt,tr lt brn-off wh arg mtx,com lse,tr liths,fr-gd vis por & inf por, fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.9 | 66 |
| RES_DEEP (ohm.m) | 23.10 | 66 |
| RES_SHALLOW (ohm.m) | 16.05 | 66 |
| **Δ Res (Deep − Shallow)** | **7.06** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2170 m MD — Interval 2165.0 – 2175.0 m

**Sample Description (spreadsheet):** Sample 2170m: 0% Siltstone, 100% medium Sandstone, 80% moderately bright FLUOR in SST. TG 42U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | med (max: crs) |
| Fluorescence | 80.0% mod bri |
| Total Gas | 42.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2156m: clr,trnsl,lt gry,v lt yel brn,med-crs, mod srt,sbang-ang,mnr sbrnd,wk sil cmt,tr lt brn-off wh arg mtx,com lse,tr liths,fr-gd vis por & inf por, fluor.
- **SANDSTONE** @ ~2168m: clr,trnsl,v lt yel brn,med-crs,mod srt, sbang-sbrnd,nil cmt,lse,tr liths,fr-gd vis por,gd inf 2172 84 U por,fluor. 1230.3 80 / 6 / 5 / 5 / 4
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 55.5 | 65 |
| RES_DEEP (ohm.m) | 28.31 | 65 |
| RES_SHALLOW (ohm.m) | 18.97 | 65 |
| **Δ Res (Deep − Shallow)** | **9.33** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2180 m MD — Interval 2175.0 – 2185.0 m

**Sample Description (spreadsheet):** Sample 2180m: 0% Siltstone, 100% medium Sandstone, 80% moderately bright FLUOR in SST. TG 23U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | med (max: crs) |
| Fluorescence | 80.0% mod bri |
| Total Gas | 23.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2168m: clr,trnsl,v lt yel brn,med-crs,mod srt, sbang-sbrnd,nil cmt,lse,tr liths,fr-gd vis por,gd inf 2172 84 U por,fluor. 1230.3 80 / 6 / 5 / 5 / 4
- **SANDSTONE** @ ~2188m: clr,trnsl,v lt yel brn,med-crs,mod srt, sbang-sbrnd,nil cmt,lse,tr liths,fr-gd vis por,gd inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 35.9 | 66 |
| RES_DEEP (ohm.m) | 26.52 | 66 |
| RES_SHALLOW (ohm.m) | 14.47 | 66 |
| **Δ Res (Deep − Shallow)** | **12.05** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2190 m MD — Interval 2185.0 – 2195.0 m

**Sample Description (spreadsheet):** Sample 2190m: 0% Siltstone, 100% medium Sandstone, 80% moderately bright FLUOR in SST. TG 25U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | med (max: crs) |
| Fluorescence | 80.0% mod bri |
| Total Gas | 25.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2188m: clr,trnsl,v lt yel brn,med-crs,mod srt, sbang-sbrnd,nil cmt,lse,tr liths,fr-gd vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2200m: trnsl,clr,opq,pl brn,lt brnsh gry,vf-crs, vf-f in aggs,com med-crs lse grs,pr srt,sbang-sbrnd, MW: 9.9 rr ang,wk-mod strg sil cmt,mnr loc brn-wh arg mtx, F P Y V P V : : : 4 9 1 1 9 v tr i s c a p r o b r , s p p r- k f s r i & n f l i p th o s r, , f f l r u i- o ls r. e disagg grs,mnr mod hd,pr G W e L l: : 7 4 / . 8 8 /9 22 12 0 2 4 9.3 83 / 6 / 4 / 4 / 3
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 46.0 | 65 |
| RES_DEEP (ohm.m) | 25.54 | 65 |
| RES_SHALLOW (ohm.m) | 17.10 | 65 |
| **Δ Res (Deep − Shallow)** | **8.44** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2200 m MD — Interval 2195.0 – 2205.0 m

**Sample Description (spreadsheet):** Sample 2200m: 5% Siltstone, 95% very fine Sandstone, 80% moderately bright FLUOR in SST. TG 48U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 80.0% mod bri |
| Total Gas | 48.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2188m: clr,trnsl,v lt yel brn,med-crs,mod srt, sbang-sbrnd,nil cmt,lse,tr liths,fr-gd vis por,gd inf por,fluor.
- **SANDSTONE** @ ~2200m: trnsl,clr,opq,pl brn,lt brnsh gry,vf-crs, vf-f in aggs,com med-crs lse grs,pr srt,sbang-sbrnd, MW: 9.9 rr ang,wk-mod strg sil cmt,mnr loc brn-wh arg mtx, F P Y V P V : : : 4 9 1 1 9 v tr i s c a p r o b r , s p p r- k f s r i & n f l i p th o s r, , f f l r u i- o ls r. e disagg grs,mnr mod hd,pr G W e L l: : 7 4 / . 8 8 /9 22 12 0 2 4 9.3 83 / 6 / 4 / 4 / 3
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 59.1 | 66 |
| RES_DEEP (ohm.m) | 28.43 | 66 |
| RES_SHALLOW (ohm.m) | 23.22 | 66 |
| **Δ Res (Deep − Shallow)** | **5.21** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2210 m MD — Interval 2205.0 – 2212.5 m

**Sample Description (spreadsheet):** Sample 2210m: 5% Siltstone, 95% very fine Sandstone, 90% moderately bright FLUOR in SST. TG 32U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 90.0% mod bri |
| Total Gas | 32.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2200m: trnsl,clr,opq,pl brn,lt brnsh gry,vf-crs, vf-f in aggs,com med-crs lse grs,pr srt,sbang-sbrnd, MW: 9.9 rr ang,wk-mod strg sil cmt,mnr loc brn-wh arg mtx, F P Y V P V : : : 4 9 1 1 9 v tr i s c a p r o b r , s p p r- k f s r i & n f l i p th o s r, , f f l r u i- o ls r. e disagg grs,mnr mod hd,pr G W e L l: : 7 4 / . 8 8 /9 22 12 0 2 4 9.3 83 / 6 / 4 / 4 / 3
- **SILTSTONE** @ ~2208m: med gry-med dk gry,aren,mnr arg,tr liths,frm-mod hd,sbblky-sbfiss. 80-100% of SST,dll evn-mod bri ptchy fluor, slw bldng cut,thn yel grn r/r.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 60.2 | 49 |
| RES_DEEP (ohm.m) | 26.71 | 49 |
| RES_SHALLOW (ohm.m) | 23.41 | 49 |
| **Δ Res (Deep − Shallow)** | **3.30** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2215 m MD — Interval 2212.5 – 2217.5 m

**Sample Description (spreadsheet):** Sample 2215m: 0% Siltstone, 100% very fine Sandstone, 100% moderately bright FLUOR in SST. TG 39U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 39.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2200m: trnsl,clr,opq,pl brn,lt brnsh gry,vf-crs, vf-f in aggs,com med-crs lse grs,pr srt,sbang-sbrnd, MW: 9.9 rr ang,wk-mod strg sil cmt,mnr loc brn-wh arg mtx, F P Y V P V : : : 4 9 1 1 9 v tr i s c a p r o b r , s p p r- k f s r i & n f l i p th o s r, , f f l r u i- o ls r. e disagg grs,mnr mod hd,pr G W e L l: : 7 4 / . 8 8 /9 22 12 0 2 4 9.3 83 / 6 / 4 / 4 / 3
- **SILTSTONE** @ ~2208m: med gry-med dk gry,aren,mnr arg,tr liths,frm-mod hd,sbblky-sbfiss. 80-100% of SST,dll evn-mod bri ptchy fluor, slw bldng cut,thn yel grn r/r.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 64.2 | 33 |
| RES_DEEP (ohm.m) | 30.92 | 33 |
| RES_SHALLOW (ohm.m) | 27.51 | 33 |
| **Δ Res (Deep − Shallow)** | **3.42** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2220 m MD — Interval 2217.5 – 2222.5 m

**Sample Description (spreadsheet):** Sample 2220m: 5% Siltstone, 95% very fine Sandstone, 90% moderately bright FLUOR in SST. TG 51U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 90.0% mod bri |
| Total Gas | 51.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2208m: med gry-med dk gry,aren,mnr arg,tr liths,frm-mod hd,sbblky-sbfiss. 80-100% of SST,dll evn-mod bri ptchy fluor, slw bldng cut,thn yel grn r/r.
- **SANDSTONE** @ ~2212m: pl brn,lt brnsh gry,trnsl opq,vf-v crs, pred vf-f aggs,com med-crs,rr v crs,pr-v pr srt, sbang-sbrnd,rr ang,wk-mod strg sil cmt,mnr loc 2216 brn-wh arg mtx,tr carb spks & liths,fri-lse disagg 1228.8 grs,mnr mod hd,pr vis por,pr-fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.5 | 33 |
| RES_DEEP (ohm.m) | 36.47 | 33 |
| RES_SHALLOW (ohm.m) | 33.11 | 33 |
| **Δ Res (Deep − Shallow)** | **3.36** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2225 m MD — Interval 2222.5 – 2227.5 m

**Sample Description (spreadsheet):** Sample 2225m: 10% Siltstone, 90% very fine Sandstone, 70% dull to moderately bright FLUOR in SST. TG 53U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 70.0% dll-mod bri |
| Total Gas | 53.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2208m: med gry-med dk gry,aren,mnr arg,tr liths,frm-mod hd,sbblky-sbfiss. 80-100% of SST,dll evn-mod bri ptchy fluor, slw bldng cut,thn yel grn r/r.
- **SANDSTONE** @ ~2212m: pl brn,lt brnsh gry,trnsl opq,vf-v crs, pred vf-f aggs,com med-crs,rr v crs,pr-v pr srt, sbang-sbrnd,rr ang,wk-mod strg sil cmt,mnr loc 2216 brn-wh arg mtx,tr carb spks & liths,fri-lse disagg 1228.8 grs,mnr mod hd,pr vis por,pr-fr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.3 | 33 |
| RES_DEEP (ohm.m) | 33.88 | 33 |
| RES_SHALLOW (ohm.m) | 30.81 | 33 |
| **Δ Res (Deep − Shallow)** | **3.07** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2230 m MD — Interval 2227.5 – 2232.5 m

**Sample Description (spreadsheet):** Sample 2230m: 30% Siltstone, 70% very fine Sandstone, 80% moderately bright FLUOR in SST. TG 65U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 80.0% mod bri |
| Total Gas | 65.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2220m: pl brn,lt brnsh gry,trnsl opq,vf-v crs, pred vf-f aggs,com med-crs,tr v crs,pr-v pr srt, sbang-sbrnd,rr ang,wk-mod strg sil cmt,mnr loc brn-wh arg mtx,tr carb spks & liths,fri-lse disagg 65 U grs,mnr mod hd,pr vis por,pr-fr inf por,fluor.
- **SILTSTONE** @ ~2228m: med lt gry-med dk gry,aren,mnr arg, micmic i/p,rr sandy lams,frm-mod hd,sbblky-sbfiss.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.2 | 32 |
| RES_DEEP (ohm.m) | 39.98 | 32 |
| RES_SHALLOW (ohm.m) | 31.95 | 32 |
| **Δ Res (Deep − Shallow)** | **8.04** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2235 m MD — Interval 2232.5 – 2237.5 m

**Sample Description (spreadsheet):** Sample 2235m: 30% Siltstone, 70% very fine Sandstone, 100% moderately bright FLUOR in SST. TG 70U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 70.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2220m: pl brn,lt brnsh gry,trnsl opq,vf-v crs, pred vf-f aggs,com med-crs,tr v crs,pr-v pr srt, sbang-sbrnd,rr ang,wk-mod strg sil cmt,mnr loc brn-wh arg mtx,tr carb spks & liths,fri-lse disagg 65 U grs,mnr mod hd,pr vis por,pr-fr inf por,fluor.
- **SILTSTONE** @ ~2228m: med lt gry-med dk gry,aren,mnr arg, micmic i/p,rr sandy lams,frm-mod hd,sbblky-sbfiss.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.1 | 33 |
| RES_DEEP (ohm.m) | 30.02 | 33 |
| RES_SHALLOW (ohm.m) | 25.16 | 33 |
| **Δ Res (Deep − Shallow)** | **4.86** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2240 m MD — Interval 2237.5 – 2242.5 m

**Sample Description (spreadsheet):** Sample 2240m: 40% Siltstone, 60% very fine Sandstone, 70% moderately bright FLUOR in SST. TG 47U

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 70.0% mod bri |
| Total Gas | 47.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2228m: med lt gry-med dk gry,aren,mnr arg, micmic i/p,rr sandy lams,frm-mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~2232m: lt brn-pl brn,lt brnsh gry,trnsl,opq,vf-f, mnr med-crs,mod-pr srt,sbang-sbrnd,wk-mod strg sil cmt,mnr brn arg mtx,tr liths,tr mica flks,fri-mod hd,mnr lse disagg grs,pr vis por,pr-fr inf por,fluor. 83 / 6 / 4 / 4 / 3 70 U
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.7 | 33 |
| RES_DEEP (ohm.m) | 25.34 | 33 |
| RES_SHALLOW (ohm.m) | 24.83 | 33 |
| **Δ Res (Deep − Shallow)** | **0.51** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2245 m MD — Interval 2242.5 – 2247.5 m

**Sample Description (spreadsheet):** Sample 2245m: 30% Siltstone, 70% very fine Sandstone, 90% moderately bright FLUOR in SST. TG 54U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 90.0% mod bri |
| Total Gas | 54.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2228m: med lt gry-med dk gry,aren,mnr arg, micmic i/p,rr sandy lams,frm-mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~2232m: lt brn-pl brn,lt brnsh gry,trnsl,opq,vf-f, mnr med-crs,mod-pr srt,sbang-sbrnd,wk-mod strg sil cmt,mnr brn arg mtx,tr liths,tr mica flks,fri-mod hd,mnr lse disagg grs,pr vis por,pr-fr inf por,fluor. 83 / 6 / 4 / 4 / 3 70 U
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.0 | 33 |
| RES_DEEP (ohm.m) | 28.35 | 33 |
| RES_SHALLOW (ohm.m) | 26.00 | 33 |
| **Δ Res (Deep − Shallow)** | **2.35** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2250 m MD — Interval 2247.5 – 2252.5 m

**Sample Description (spreadsheet):** Sample 2250m: 5% Siltstone, 95% very fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 67U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 67.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2240m: lt brn-pl brn,lt brnsh gry,trnsl,opq,vf-f, mnr med,tr crs,mod srt,sbang-sbrnd,wk-mod strg sil cmt,mnr brn arg mtx,tr liths,fri-mod hd,mnr lse disagg grs,pr vis por,pr-fr inf por,fluor.
- **SILTSTONE** @ ~2244m: med gry-med dk gry,aren,mnr arg,tr liths,tr micmic,frm-mod hd,sbblky-sbfiss. 75 / 6 / 6 / 7 / 6 68 U
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.5 | 33 |
| RES_DEEP (ohm.m) | 31.63 | 33 |
| RES_SHALLOW (ohm.m) | 27.51 | 33 |
| **Δ Res (Deep − Shallow)** | **4.12** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2255 m MD — Interval 2252.5 – 2257.5 m

**Sample Description (spreadsheet):** Sample 2255m: 5% Siltstone, 95% very fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 56U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 56.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2240m: lt brn-pl brn,lt brnsh gry,trnsl,opq,vf-f, mnr med,tr crs,mod srt,sbang-sbrnd,wk-mod strg sil cmt,mnr brn arg mtx,tr liths,fri-mod hd,mnr lse disagg grs,pr vis por,pr-fr inf por,fluor.
- **SILTSTONE** @ ~2244m: med gry-med dk gry,aren,mnr arg,tr liths,tr micmic,frm-mod hd,sbblky-sbfiss. 75 / 6 / 6 / 7 / 6 68 U
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.9 | 32 |
| RES_DEEP (ohm.m) | 31.79 | 32 |
| RES_SHALLOW (ohm.m) | 27.19 | 32 |
| **Δ Res (Deep − Shallow)** | **4.60** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2260 m MD — Interval 2257.5 – 2262.5 m

**Sample Description (spreadsheet):** Sample 2260m: 5% Siltstone, 95% very fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 57U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 57.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2244m: med gry-med dk gry,aren,mnr arg,tr liths,tr micmic,frm-mod hd,sbblky-sbfiss. 75 / 6 / 6 / 7 / 6 68 U
- **SANDSTONE** @ ~2248m: lt brn-pl brn,lt brnsh gry,trnsl,opq,vf-f, rr med-crs,mod-wl srt,sbang-sbrnd,wk-mod strg sil cmt,mnr brn arg mtx,tr liths,pred fri-mod hd vf-f aggs,rr lse disagg grs,pr vis por,pr-fr inf por,fluor.
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.1 | 33 |
| RES_DEEP (ohm.m) | 29.74 | 33 |
| RES_SHALLOW (ohm.m) | 26.21 | 33 |
| **Δ Res (Deep − Shallow)** | **3.53** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2265 m MD — Interval 2262.5 – 2267.5 m

**Sample Description (spreadsheet):** Sample 2265m: 10% Siltstone, 90% very fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 70U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 70.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2248m: lt brn-pl brn,lt brnsh gry,trnsl,opq,vf-f, rr med-crs,mod-wl srt,sbang-sbrnd,wk-mod strg sil cmt,mnr brn arg mtx,tr liths,pred fri-mod hd vf-f aggs,rr lse disagg grs,pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~2252m: lt brn-pl brn,lt brnsh gry,trnsl,opq,vf-f, R SP P P M : : 1 1 8 2 3 0 5 - - 1 2 2 4 1 90 psi 22 12 5 2 6 8.1 s a i g l g c s m ,m t,m nr n l r s b e r d n i s a a rg g g m g tx rs ,t , r p l r i t v h i s s , p p r o e r d ,p f r r - i f - r m in o f d p h o d r, f v lu f- o f r.
- _(10 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.9 | 33 |
| RES_DEEP (ohm.m) | 28.88 | 33 |
| RES_SHALLOW (ohm.m) | 27.32 | 33 |
| **Δ Res (Deep − Shallow)** | **1.57** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2270 m MD — Interval 2267.5 – 2272.5 m

**Sample Description (spreadsheet):** Sample 2270m: 10% Siltstone, 90% very fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 68U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 68.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2264m: pl brn-lt brn,lt brnsh gry-brnsh gry, trnsl,clr,vf-f,mnr med-crs,tr v crs,mod-pr srt, sbang-sbrnd,rr arg,wk-mod strg sil cmt,mnr brn-gry arg mtx,tr liths,tr mic flks,tr carb spks,fri-mod hd vf-f aggs,mnr lse disagg grs,pr vis por,pr-fr inf por,
- **SANDSTONE** @ ~2268m: pl brn-lt brn,lt brnsh gry,trnsl,clr,vf-f, mnr med-crs,tr v crs,mod-pr srt,sbang-sbrnd,rr arg, wk-mod strg sil cmt,mnr brn-gry arg mtx,tr liths,tr mic flks,tr carb spks,fri-mod hd vf-f aggs,mnr lse disagg grs,pr vis por,pr-fr inf por,fluor.
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.8 | 33 |
| RES_DEEP (ohm.m) | 29.93 | 33 |
| RES_SHALLOW (ohm.m) | 27.58 | 33 |
| **Δ Res (Deep − Shallow)** | **2.35** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2275 m MD — Interval 2272.5 – 2277.5 m

**Sample Description (spreadsheet):** Sample 2275m: 10% Siltstone, 90% very fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 56U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 56.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2264m: pl brn-lt brn,lt brnsh gry-brnsh gry, trnsl,clr,vf-f,mnr med-crs,tr v crs,mod-pr srt, sbang-sbrnd,rr arg,wk-mod strg sil cmt,mnr brn-gry arg mtx,tr liths,tr mic flks,tr carb spks,fri-mod hd vf-f aggs,mnr lse disagg grs,pr vis por,pr-fr inf por,
- **SANDSTONE** @ ~2268m: pl brn-lt brn,lt brnsh gry,trnsl,clr,vf-f, mnr med-crs,tr v crs,mod-pr srt,sbang-sbrnd,rr arg, wk-mod strg sil cmt,mnr brn-gry arg mtx,tr liths,tr mic flks,tr carb spks,fri-mod hd vf-f aggs,mnr lse disagg grs,pr vis por,pr-fr inf por,fluor.
- _(8 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.1 | 33 |
| RES_DEEP (ohm.m) | 27.85 | 33 |
| RES_SHALLOW (ohm.m) | 25.58 | 33 |
| **Δ Res (Deep − Shallow)** | **2.27** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2280 m MD — Interval 2277.5 – 2282.5 m

**Sample Description (spreadsheet):** Sample 2280m: 5% Siltstone, 95% very fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 57U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: med) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 57.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2264m: pl brn-lt brn,lt brnsh gry-brnsh gry, trnsl,clr,vf-f,mnr med-crs,tr v crs,mod-pr srt, sbang-sbrnd,rr arg,wk-mod strg sil cmt,mnr brn-gry arg mtx,tr liths,tr mic flks,tr carb spks,fri-mod hd vf-f aggs,mnr lse disagg grs,pr vis por,pr-fr inf por,
- **SANDSTONE** @ ~2268m: pl brn-lt brn,lt brnsh gry,trnsl,clr,vf-f, mnr med-crs,tr v crs,mod-pr srt,sbang-sbrnd,rr arg, wk-mod strg sil cmt,mnr brn-gry arg mtx,tr liths,tr mic flks,tr carb spks,fri-mod hd vf-f aggs,mnr lse disagg grs,pr vis por,pr-fr inf por,fluor.
- _(7 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.9 | 33 |
| RES_DEEP (ohm.m) | 27.11 | 33 |
| RES_SHALLOW (ohm.m) | 25.70 | 33 |
| **Δ Res (Deep − Shallow)** | **1.41** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2285 m MD — Interval 2282.5 – 2287.5 m

**Sample Description (spreadsheet):** Sample 2285m: 10% Siltstone, 90% very fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 98U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 98.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2268m: pl brn-lt brn,lt brnsh gry,trnsl,clr,vf-f, mnr med-crs,tr v crs,mod-pr srt,sbang-sbrnd,rr arg, wk-mod strg sil cmt,mnr brn-gry arg mtx,tr liths,tr mic flks,tr carb spks,fri-mod hd vf-f aggs,mnr lse disagg grs,pr vis por,pr-fr inf por,fluor.
- **SILTSTONE** @ ~2272m: med gry-med dk gry,aren,mnr arg,tr liths,tr micmic,frm-mod hd,rr sandy lams, sbblky-sbfiss.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.3 | 32 |
| RES_DEEP (ohm.m) | 26.92 | 32 |
| RES_SHALLOW (ohm.m) | 26.05 | 32 |
| **Δ Res (Deep − Shallow)** | **0.87** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2290 m MD — Interval 2287.5 – 2292.5 m

**Sample Description (spreadsheet):** Sample 2290m: 5% Siltstone, 95% very fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 79U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 79.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2282m: pl brn-lt brn,lt brnsh gry-brnsh gry, trnsl,clr,vf-f,rr med-crs,tr v crs,mod-pr srt, sbang-sbrnd,rr ang,wk-mod strg sil cmt,mnr brn- gry arg mtx,tr liths,tr mic flks,tr carb spks,fri-mod hd 2288 vf-f aggs,rr lse disagg grs,pr vis por,pr-fr inf por,
- **SANDSTONE** @ ~2282m: pl brn-lt brn,lt brnsh gry-brnsh gry, trnsl,clr,vf-f,rr med-crs,tr v crs,mod-pr srt, sbang-sbrnd,rr ang,wk-mod strg sil cmt,mnr brn- 2292 gry arg mtx,tr liths,tr mic flks,tr carb spks,fri-mod hd 1228.8 vf-f aggs,rr lse disagg grs,pr vis por,pr-fr inf por,
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 64.0 | 33 |
| RES_DEEP (ohm.m) | 27.59 | 33 |
| RES_SHALLOW (ohm.m) | 27.17 | 33 |
| **Δ Res (Deep − Shallow)** | **0.42** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2295 m MD — Interval 2292.5 – 2297.5 m

**Sample Description (spreadsheet):** Sample 2295m: 5% Siltstone, 95% very fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 79U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 79.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2282m: pl brn-lt brn,lt brnsh gry-brnsh gry, trnsl,clr,vf-f,rr med-crs,tr v crs,mod-pr srt, sbang-sbrnd,rr ang,wk-mod strg sil cmt,mnr brn- gry arg mtx,tr liths,tr mic flks,tr carb spks,fri-mod hd 2288 vf-f aggs,rr lse disagg grs,pr vis por,pr-fr inf por,
- **SANDSTONE** @ ~2282m: pl brn-lt brn,lt brnsh gry-brnsh gry, trnsl,clr,vf-f,rr med-crs,tr v crs,mod-pr srt, sbang-sbrnd,rr ang,wk-mod strg sil cmt,mnr brn- 2292 gry arg mtx,tr liths,tr mic flks,tr carb spks,fri-mod hd 1228.8 vf-f aggs,rr lse disagg grs,pr vis por,pr-fr inf por,
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 64.9 | 33 |
| RES_DEEP (ohm.m) | 28.19 | 33 |
| RES_SHALLOW (ohm.m) | 26.98 | 33 |
| **Δ Res (Deep − Shallow)** | **1.21** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2300 m MD — Interval 2297.5 – 2305.0 m

**Sample Description (spreadsheet):** Sample 2300m: 0% Siltstone, 100% very fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 72U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf (max: med) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 72.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2296m: pl brn-lt brn,trnsl,clr,vf-f,mnr med, mod srt,sbang-sbrnd,wk-mod strg sil cmt,mnr brn arg mtx,tr mic flks,fri-mod hd,mnr lse disagg grs,pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~2312m: pl brn-lt brn,lt brnsh gry,trnsl,clr,opq, vf-v crs,pr srt,sbang-sbrnd,mnr ang,wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mic flks,vf-f fri-mod hd aggs,com lse disagg med-crs qtz grs,pr vis por,pr- fr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 60.5 | 49 |
| RES_DEEP (ohm.m) | 28.56 | 49 |
| RES_SHALLOW (ohm.m) | 26.30 | 49 |
| **Δ Res (Deep − Shallow)** | **2.26** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2310 m MD — Interval 2305.0 – 2315.0 m

**Sample Description (spreadsheet):** Sample 2310m: 5% Siltstone, 95% very fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 89U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 89.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2296m: pl brn-lt brn,trnsl,clr,vf-f,mnr med, mod srt,sbang-sbrnd,wk-mod strg sil cmt,mnr brn arg mtx,tr mic flks,fri-mod hd,mnr lse disagg grs,pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~2312m: pl brn-lt brn,lt brnsh gry,trnsl,clr,opq, vf-v crs,pr srt,sbang-sbrnd,mnr ang,wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mic flks,vf-f fri-mod hd aggs,com lse disagg med-crs qtz grs,pr vis por,pr- fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.0 | 66 |
| RES_DEEP (ohm.m) | 25.55 | 66 |
| RES_SHALLOW (ohm.m) | 24.46 | 66 |
| **Δ Res (Deep − Shallow)** | **1.09** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2320 m MD — Interval 2315.0 – 2325.0 m

**Sample Description (spreadsheet):** Sample 2320m: 10% Siltstone, 90% very fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 82U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 82.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2312m: pl brn-lt brn,lt brnsh gry,trnsl,clr,opq, vf-v crs,pr srt,sbang-sbrnd,mnr ang,wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mic flks,vf-f fri-mod hd aggs,com lse disagg med-crs qtz grs,pr vis por,pr- fr inf por,fluor.
- **SILTSTONE** @ ~2319m: med gry-med dk gry,aren,mnr arg,tr 1229.4 liths,tr micmic,frm-mod hd,rr sandy lams, sbblky-sbfiss. 78 / 6 / 5 / 6 / 5 96 U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.4 | 65 |
| RES_DEEP (ohm.m) | 24.67 | 65 |
| RES_SHALLOW (ohm.m) | 24.25 | 65 |
| **Δ Res (Deep − Shallow)** | **0.43** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2330 m MD — Interval 2325.0 – 2335.0 m

**Sample Description (spreadsheet):** Sample 2330m: 5% Siltstone, 95% very fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 96U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 96.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2312m: pl brn-lt brn,lt brnsh gry,trnsl,clr,opq, vf-v crs,pr srt,sbang-sbrnd,mnr ang,wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mic flks,vf-f fri-mod hd aggs,com lse disagg med-crs qtz grs,pr vis por,pr- fr inf por,fluor.
- **SILTSTONE** @ ~2319m: med gry-med dk gry,aren,mnr arg,tr 1229.4 liths,tr micmic,frm-mod hd,rr sandy lams, sbblky-sbfiss. 78 / 6 / 5 / 6 / 5 96 U
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.7 | 66 |
| RES_DEEP (ohm.m) | 24.25 | 66 |
| RES_SHALLOW (ohm.m) | 24.00 | 66 |
| **Δ Res (Deep − Shallow)** | **0.25** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2340 m MD — Interval 2335.0 – 2345.0 m

**Sample Description (spreadsheet):** Sample 2340m: 5% Siltstone, 95% very fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 85U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 85.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2328m: pl brn-lt brn,lt brnsh gry,trnsl,clr,opq, vf-v crs,pr srt,sbang-sbrnd,mnr ang,wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mic flks,vf-f fri-mod hd 2332 aggs,com lse disagg med-v crs qtz grs,pr vis por, 1229.5 pr-fr inf por,fluor.
- **SANDSTONE** @ ~2340m: pl brn-lt brn,lt brnsh gry,trnsl,clr,vf-v crs,v pr srt,sbang-sbrnd,occ ang,wk-mod strg sil cmt,mnr brn-gry arg mtx,rr mic flks,vf-f fri-mod hd aggs,com lse disagg med-v crs qtz grs,pr vis por, pr-fr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.0 | 66 |
| RES_DEEP (ohm.m) | 25.77 | 66 |
| RES_SHALLOW (ohm.m) | 25.08 | 66 |
| **Δ Res (Deep − Shallow)** | **0.68** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2350 m MD — Interval 2345.0 – 2355.0 m

**Sample Description (spreadsheet):** Sample 2350m: 5% Siltstone, 95% very fine Sandstone, 90% dull to moderately bright FLUOR in SST. TG 67U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 90.0% dll-mod bri |
| Total Gas | 67.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2340m: pl brn-lt brn,lt brnsh gry,trnsl,clr,vf-v crs,v pr srt,sbang-sbrnd,occ ang,wk-mod strg sil cmt,mnr brn-gry arg mtx,rr mic flks,vf-f fri-mod hd aggs,com lse disagg med-v crs qtz grs,pr vis por, pr-fr inf por,fluor.
- **SANDSTONE** @ ~2352m: trnsl,clr,opq,-pl brn,lt brnsh gry,vf-v crs,v pr srt,sbang-sbrnd,mnr ang,wk-mod strg sil cmt,mnr loc brn-gry arg mtx,tr mic flks,vf-f fri-mod hd aggs,com lse disagg med-v crs qtz grs,pr vis por,fr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.6 | 65 |
| RES_DEEP (ohm.m) | 27.23 | 65 |
| RES_SHALLOW (ohm.m) | 25.02 | 65 |
| **Δ Res (Deep − Shallow)** | **2.21** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2360 m MD — Interval 2355.0 – 2365.0 m

**Sample Description (spreadsheet):** Sample 2360m: 5% Siltstone, 95% very fine Sandstone, 90% dull to moderately bright FLUOR in SST. TG 46U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 90.0% dll-mod bri |
| Total Gas | 46.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2340m: pl brn-lt brn,lt brnsh gry,trnsl,clr,vf-v crs,v pr srt,sbang-sbrnd,occ ang,wk-mod strg sil cmt,mnr brn-gry arg mtx,rr mic flks,vf-f fri-mod hd aggs,com lse disagg med-v crs qtz grs,pr vis por, pr-fr inf por,fluor.
- **SANDSTONE** @ ~2352m: trnsl,clr,opq,-pl brn,lt brnsh gry,vf-v crs,v pr srt,sbang-sbrnd,mnr ang,wk-mod strg sil cmt,mnr loc brn-gry arg mtx,tr mic flks,vf-f fri-mod hd aggs,com lse disagg med-v crs qtz grs,pr vis por,fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.2 | 66 |
| RES_DEEP (ohm.m) | 26.63 | 66 |
| RES_SHALLOW (ohm.m) | 22.94 | 66 |
| **Δ Res (Deep − Shallow)** | **3.69** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2370 m MD — Interval 2365.0 – 2375.0 m

**Sample Description (spreadsheet):** Sample 2370m: 20% Siltstone, 80% very fine Sandstone, 100% dull to bright FLUOR in SST. TG 69U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% dll-bri |
| Total Gas | 69.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2352m: trnsl,clr,opq,-pl brn,lt brnsh gry,vf-v crs,v pr srt,sbang-sbrnd,mnr ang,wk-mod strg sil cmt,mnr loc brn-gry arg mtx,tr mic flks,vf-f fri-mod hd aggs,com lse disagg med-v crs qtz grs,pr vis por,fr inf por,fluor.
- **SILTSTONE** @ ~2364m: med gry-med dk gry,aren,mnr arg, com micmic,frm-mod hd,rr sandy lams, sbblky-sbfiss. MW: 9.8 FV: 40
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.0 | 65 |
| RES_DEEP (ohm.m) | 31.43 | 65 |
| RES_SHALLOW (ohm.m) | 27.36 | 65 |
| **Δ Res (Deep − Shallow)** | **4.07** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2420 m MD — Interval 2415.0 – 2425.0 m

**Sample Description (spreadsheet):** Sample 2420m: 40% Siltstone, 60% fine Sandstone, 80% dull to bright FLUOR in SST. TG 73U

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | f (max: crs) |
| Fluorescence | 80.0% dll-bri |
| Total Gas | 73.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2400m: 100-120 SILTSTONE:lt gry-med gry-med dk gry,aren,mnr Rmf:0.074 ohm.m at 75°F
- **SANDSTONE** @ ~2404m: lt brn,lt brnsh gry,trnsl,opq,clr,vf-f,v crs i/p,pr-wl srt,sbang-sbrnd,mnr ang,wk-mod strg sil cmt,com brn-gry arg mtx,tr mic flks,tr vf fri-mod hd aggs,pred lse disagg f-med qtz grs,v pr vis por, pr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.1 | 66 |
| RES_DEEP (ohm.m) | 28.13 | 66 |
| RES_SHALLOW (ohm.m) | 24.78 | 66 |
| **Δ Res (Deep − Shallow)** | **3.35** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2430 m MD — Interval 2425.0 – 2435.0 m

**Sample Description (spreadsheet):** Sample 2430m: 5% Siltstone, 95% very fine Sandstone, 100% dull to bright FLUOR in SST. TG 99U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: f) |
| Fluorescence | 100.0% dll-bri |
| Total Gas | 99.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2416m: lt brn,lt brnsh gry,trnsl,opq,clr,f-med, crs i/p,pr-wl srt,sbang-sbrnd,mnr ang,wk sil cmt, com brn-gry arg mtx,tr mic flks,,pred lse disagg crs i/p,pr-wl srt,sbang-sbrnd,mnr ang,wk sil cmt, com brn-gry arg mtx,tr mic flks,,pred lse disagg
- **SANDSTONE** @ ~2424m: lt brn,lt brnsh gry,trnsl,opq,clr,vf-f,v 1230.0 wl srt,sbang-sbrnd,mnr ang,wk sil cmt,com brn-gry arg mtx,tr mic flks,pred lse disagg,f-med qtz grs, pr-fr vis por,fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.8 | 65 |
| RES_DEEP (ohm.m) | 27.91 | 65 |
| RES_SHALLOW (ohm.m) | 26.67 | 65 |
| **Δ Res (Deep − Shallow)** | **1.24** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2440 m MD — Interval 2435.0 – 2445.0 m

**Sample Description (spreadsheet):** Sample 2440m: 10% Siltstone, 90% very fine Sandstone, 100% dull to bright FLUOR in SST. TG 95U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf (max: f) |
| Fluorescence | 100.0% dll-bri |
| Total Gas | 95.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2424m: lt brn,lt brnsh gry,trnsl,opq,clr,vf-f,v 1230.0 wl srt,sbang-sbrnd,mnr ang,wk sil cmt,com brn-gry arg mtx,tr mic flks,pred lse disagg,f-med qtz grs, pr-fr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2436m: lt brn,lt brnsh gry,clr,opq,vf-f,rr crs,pr srt,sbang-sbrnd,mnr ang,wk-mod strg sil cmt,mnr loc brn-gry arg mtx,tr mic flks,com f-med fri-mod hd aggs,mnr lse disagg med-crs qtz grs,pr vis por,pr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 63.6 | 66 |
| RES_DEEP (ohm.m) | 25.21 | 66 |
| RES_SHALLOW (ohm.m) | 24.18 | 66 |
| **Δ Res (Deep − Shallow)** | **1.04** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2450 m MD — Interval 2445.0 – 2455.0 m

**Sample Description (spreadsheet):** Sample 2450m: 5% Siltstone, 95% very fine Sandstone, 90% dull to bright FLUOR in SST. TG 84U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: med) |
| Fluorescence | 90.0% dll-bri |
| Total Gas | 84.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2436m: lt brn,lt brnsh gry,clr,opq,vf-f,rr crs,pr srt,sbang-sbrnd,mnr ang,wk-mod strg sil cmt,mnr loc brn-gry arg mtx,tr mic flks,com f-med fri-mod hd aggs,mnr lse disagg med-crs qtz grs,pr vis por,pr inf por,fluor.
- **SILTSTONE** @ ~2444m: med gry-dk gry,aren,grd to vf SST i/p, 1230.7 com micmic,mod hd,sbblky-sbfiss.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 62.6 | 65 |
| RES_DEEP (ohm.m) | 26.80 | 65 |
| RES_SHALLOW (ohm.m) | 24.08 | 65 |
| **Δ Res (Deep − Shallow)** | **2.72** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2460 m MD — Interval 2455.0 – 2465.0 m

**Sample Description (spreadsheet):** Sample 2460m: 5% Siltstone, 95% very fine Sandstone, 90% dull to bright FLUOR in SST. TG 75U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: med) |
| Fluorescence | 90.0% dll-bri |
| Total Gas | 75.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2444m: med gry-dk gry,aren,grd to vf SST i/p, 1230.7 com micmic,mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~2456m: lt-pl brn,lt grysh brn,clr,trnsl,vf-f,mnr med,rr crs,mod srt,sbang-sbrnd,wk-mod strg sil cmt,tr mica,fri-mod hs aggs,com lse disagg grs,pr vis por,pr-fr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 66.6 | 66 |
| RES_DEEP (ohm.m) | 25.46 | 66 |
| RES_SHALLOW (ohm.m) | 23.00 | 66 |
| **Δ Res (Deep − Shallow)** | **2.46** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2470 m MD — Interval 2465.0 – 2475.0 m

**Sample Description (spreadsheet):** Sample 2470m: 0% Siltstone, 100% very fine Sandstone, 90% dull to bright FLUOR in SST. TG 78U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf (max: med) |
| Fluorescence | 90.0% dll-bri |
| Total Gas | 78.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2456m: lt-pl brn,lt grysh brn,clr,trnsl,vf-f,mnr med,rr crs,mod srt,sbang-sbrnd,wk-mod strg sil cmt,tr mica,fri-mod hs aggs,com lse disagg grs,pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~2480m: lt-pl brn,lt grysh brn,clr,trnsl,opq,vf-f, mnr med,tr crs,mod srt,sbang-sbrnd,wk-mod strg sil cmt,tr mica,fri-mod hs aggs,com lse disagg grs, pr vis & inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.2 | 66 |
| RES_DEEP (ohm.m) | 23.34 | 66 |
| RES_SHALLOW (ohm.m) | 21.81 | 66 |
| **Δ Res (Deep − Shallow)** | **1.53** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2480 m MD — Interval 2475.0 – 2485.0 m

**Sample Description (spreadsheet):** Sample 2480m: 0% Siltstone, 100% very fine Sandstone, 90% dull to bright FLUOR in SST. TG 74U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf (max: f) |
| Fluorescence | 90.0% dll-bri |
| Total Gas | 74.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2480m: lt-pl brn,lt grysh brn,clr,trnsl,opq,vf-f, mnr med,tr crs,mod srt,sbang-sbrnd,wk-mod strg sil cmt,tr mica,fri-mod hs aggs,com lse disagg grs, pr vis & inf por,fluor.
- **SILTSTONE** @ ~2491m: med gry-dk gry,aren,grd to vf SST i/p, 82 / 6 / 4 / 4 / 4 71 U com micmic,mod hd,sbblky-sbfiss.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.2 | 65 |
| RES_DEEP (ohm.m) | 24.39 | 65 |
| RES_SHALLOW (ohm.m) | 22.50 | 65 |
| **Δ Res (Deep − Shallow)** | **1.89** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2490 m MD — Interval 2485.0 – 2495.0 m

**Sample Description (spreadsheet):** Sample 2490m: 0% Siltstone, 100% very fine Sandstone, 90% dull to bright FLUOR in SST. TG 72U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf (max: f) |
| Fluorescence | 90.0% dll-bri |
| Total Gas | 72.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2480m: lt-pl brn,lt grysh brn,clr,trnsl,opq,vf-f, mnr med,tr crs,mod srt,sbang-sbrnd,wk-mod strg sil cmt,tr mica,fri-mod hs aggs,com lse disagg grs, pr vis & inf por,fluor.
- **SILTSTONE** @ ~2491m: med gry-dk gry,aren,grd to vf SST i/p, 82 / 6 / 4 / 4 / 4 71 U com micmic,mod hd,sbblky-sbfiss.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.6 | 66 |
| RES_DEEP (ohm.m) | 24.26 | 66 |
| RES_SHALLOW (ohm.m) | 22.95 | 66 |
| **Δ Res (Deep − Shallow)** | **1.32** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2500 m MD — Interval 2495.0 – 2505.0 m

**Sample Description (spreadsheet):** Sample 2500m: 5% Siltstone, 95% very fine Sandstone, 100% dull to bright FLUOR in SST. TG 76U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: f) |
| Fluorescence | 100.0% dll-bri |
| Total Gas | 76.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2480m: lt-pl brn,lt grysh brn,clr,trnsl,opq,vf-f, mnr med,tr crs,mod srt,sbang-sbrnd,wk-mod strg sil cmt,tr mica,fri-mod hs aggs,com lse disagg grs, pr vis & inf por,fluor.
- **SILTSTONE** @ ~2491m: med gry-dk gry,aren,grd to vf SST i/p, 82 / 6 / 4 / 4 / 4 71 U com micmic,mod hd,sbblky-sbfiss.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.9 | 66 |
| RES_DEEP (ohm.m) | 21.55 | 66 |
| RES_SHALLOW (ohm.m) | 21.34 | 66 |
| **Δ Res (Deep − Shallow)** | **0.21** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2510 m MD — Interval 2505.0 – 2515.0 m

**Sample Description (spreadsheet):** Sample 2510m: 5% Siltstone, 95% very fine Sandstone, 100% dull to bright FLUOR in SST. TG 67U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: f) |
| Fluorescence | 100.0% dll-bri |
| Total Gas | 67.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2491m: med gry-dk gry,aren,grd to vf SST i/p, 82 / 6 / 4 / 4 / 4 71 U com micmic,mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~2491m: lt-pl brn,lt grysh brn,clr,trnsl,opq,vf-f, 2504 mnr med,rr crs,mod srt,sbang-sbrnd,wk-mod strg 1231.6 sil cmt,tr mica,fri-mod hs aggs,com lse disagg grs, pr vis & inf por,fluor. 2508 FLUORESCENCE:2490.0m-2520.0m,
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.1 | 65 |
| RES_DEEP (ohm.m) | 23.33 | 65 |
| RES_SHALLOW (ohm.m) | 22.81 | 65 |
| **Δ Res (Deep − Shallow)** | **0.53** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2520 m MD — Interval 2515.0 – 2525.0 m

**Sample Description (spreadsheet):** Sample 2520m: 5% Siltstone, 95% very fine Sandstone, 100% dull to bright FLUOR in SST. TG 82U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% dll-bri |
| Total Gas | 82.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2512m: lt-pl brn,lt grysh brn,clr,trnsl,opq,vf-f, mnr med,rr crs,mod srt,sbang-sbrnd,wk-mod strg 25 12 1 3 6 1.6 s in il f c p m or t , , f f l r u i- o m r. od hd aggs,com lse disagg grs,pr vis & 82 / 6 / 4 / 4 / 4
- **SANDSTONE** @ ~2511m: 6.5 SANDSTONE:trnsl,opq,pl brn,lt gry brn,vf-v crs,v pr pH: 10 srt,sbang-sbrnd,com ang,wk-mod strg sil cmt,mnr Ck: 1/2 brn-gry arg mtx,tr mica flks,tr qtz ovgths,com lse Cl: 71k 2524 disagg med-v crs qtz,vf-f fri-mod hd aggs,fr inf por, 1231.6 pr vis por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.7 | 66 |
| RES_DEEP (ohm.m) | 23.84 | 66 |
| RES_SHALLOW (ohm.m) | 22.10 | 66 |
| **Δ Res (Deep − Shallow)** | **1.74** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2530 m MD — Interval 2525.0 – 2535.0 m

**Sample Description (spreadsheet):** Sample 2530m: 0% Siltstone, 100% very fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 80U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 80.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2512m: lt-pl brn,lt grysh brn,clr,trnsl,opq,vf-f, mnr med,rr crs,mod srt,sbang-sbrnd,wk-mod strg 25 12 1 3 6 1.6 s in il f c p m or t , , f f l r u i- o m r. od hd aggs,com lse disagg grs,pr vis & 82 / 6 / 4 / 4 / 4
- **SANDSTONE** @ ~2511m: 6.5 SANDSTONE:trnsl,opq,pl brn,lt gry brn,vf-v crs,v pr pH: 10 srt,sbang-sbrnd,com ang,wk-mod strg sil cmt,mnr Ck: 1/2 brn-gry arg mtx,tr mica flks,tr qtz ovgths,com lse Cl: 71k 2524 disagg med-v crs qtz,vf-f fri-mod hd aggs,fr inf por, 1231.6 pr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.0 | 65 |
| RES_DEEP (ohm.m) | 23.23 | 65 |
| RES_SHALLOW (ohm.m) | 21.29 | 65 |
| **Δ Res (Deep − Shallow)** | **1.95** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2540 m MD — Interval 2535.0 – 2545.0 m

**Sample Description (spreadsheet):** Sample 2540m: 30% Siltstone, 70% very fine Sandstone, 80% dull to moderately bright FLUOR in SST. TG 70U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 80.0% dll-mod bri |
| Total Gas | 70.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2532m: med dk gry-med lt gry,aren,arg i/p, 1231.5 com micmic,frm-mod hd,sbblky-sbfiss. 81 / 5 / 4 / 5 / 5
- **SANDSTONE** @ ~2544m: pl brn,lt gry brn,trnsl,opq,vf-f,mnr med-v crs,mod-v pr srt,sbang-sbrnd,rr ang,wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mica flks,tr qtz ovgths,pred vf-f fri-mod hd aggs,mnr med-v crs lse qtz grs,pr vis por,fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.0 | 66 |
| RES_DEEP (ohm.m) | 24.63 | 66 |
| RES_SHALLOW (ohm.m) | 22.74 | 66 |
| **Δ Res (Deep − Shallow)** | **1.89** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2550 m MD — Interval 2545.0 – 2555.0 m

**Sample Description (spreadsheet):** Sample 2550m: 15% Siltstone, 85% very fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 80U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 80.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2532m: med dk gry-med lt gry,aren,arg i/p, 1231.5 com micmic,frm-mod hd,sbblky-sbfiss. 81 / 5 / 4 / 5 / 5
- **SANDSTONE** @ ~2544m: pl brn,lt gry brn,trnsl,opq,vf-f,mnr med-v crs,mod-v pr srt,sbang-sbrnd,rr ang,wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mica flks,tr qtz ovgths,pred vf-f fri-mod hd aggs,mnr med-v crs lse qtz grs,pr vis por,fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 63.2 | 66 |
| RES_DEEP (ohm.m) | 22.95 | 66 |
| RES_SHALLOW (ohm.m) | 21.42 | 66 |
| **Δ Res (Deep − Shallow)** | **1.53** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2560 m MD — Interval 2555.0 – 2562.5 m

**Sample Description (spreadsheet):** Sample 2560m: 5% Siltstone, 95% very fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 88U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 88.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2544m: pl brn,lt gry brn,trnsl,opq,vf-f,mnr med-v crs,mod-v pr srt,sbang-sbrnd,rr ang,wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mica flks,tr qtz ovgths,pred vf-f fri-mod hd aggs,mnr med-v crs lse qtz grs,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2549m: pl brn,lt gry brn,trnsl,opq,vf-f,mnr med-crs,tr v crs,mod-wl srt,sbang-sbrnd,rr ang, wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mica 2556 flks,tr qtz ovgths,pred vf-f fri-mod hd aggs,mnr 1231.4 med-v crs lse qtz grs,pr vis por,fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.1 | 49 |
| RES_DEEP (ohm.m) | 24.74 | 49 |
| RES_SHALLOW (ohm.m) | 22.52 | 49 |
| **Δ Res (Deep − Shallow)** | **2.22** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2565 m MD — Interval 2562.5 – 2567.5 m

**Sample Description (spreadsheet):** Sample 2565m: 0% Siltstone, 100% very fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 80U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 80.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2549m: pl brn,lt gry brn,trnsl,opq,vf-f,mnr med-crs,tr v crs,mod-wl srt,sbang-sbrnd,rr ang, wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mica 2556 flks,tr qtz ovgths,pred vf-f fri-mod hd aggs,mnr 1231.4 med-v crs lse qtz grs,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2560m: pl brn,lt gry brn,trnsl,opq,vf-f,rr med-crs,tr v crs,mod-wl srt,sbang-sbrnd,rr ang, wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mica 2564 flks,tr qtz ovgths,pred vf-f fri-mod hd aggs,rr lse 1231.3 disagg grs,pr vis por,fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.0 | 33 |
| RES_DEEP (ohm.m) | 24.46 | 33 |
| RES_SHALLOW (ohm.m) | 23.00 | 33 |
| **Δ Res (Deep − Shallow)** | **1.46** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2570 m MD — Interval 2567.5 – 2572.5 m

**Sample Description (spreadsheet):** Sample 2570m: 5% Siltstone, 95% very fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 78U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 78.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2560m: pl brn,lt gry brn,trnsl,opq,vf-f,rr med-crs,tr v crs,mod-wl srt,sbang-sbrnd,rr ang, wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mica 2564 flks,tr qtz ovgths,pred vf-f fri-mod hd aggs,rr lse 1231.3 disagg grs,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2567m: lt brn-pl brn,lt gry brn,trnsl,opq,vf-f,rr med-crs,tr v crs,mod-wl srt,sbang-sbrnd,tr ang, wk-mod strg sil cmt,mnr brn-gry slty mtx,rr mica flks,tr slty lams,pred vf-f aggs,rr med-crs lse disagg grs,pr vis por,fr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.0 | 32 |
| RES_DEEP (ohm.m) | 26.47 | 32 |
| RES_SHALLOW (ohm.m) | 24.63 | 32 |
| **Δ Res (Deep − Shallow)** | **1.84** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2575 m MD — Interval 2572.5 – 2577.5 m

**Sample Description (spreadsheet):** Sample 2575m: 5% Siltstone, 95% very fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 79U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 79.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2560m: pl brn,lt gry brn,trnsl,opq,vf-f,rr med-crs,tr v crs,mod-wl srt,sbang-sbrnd,rr ang, wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mica 2564 flks,tr qtz ovgths,pred vf-f fri-mod hd aggs,rr lse 1231.3 disagg grs,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2567m: lt brn-pl brn,lt gry brn,trnsl,opq,vf-f,rr med-crs,tr v crs,mod-wl srt,sbang-sbrnd,tr ang, wk-mod strg sil cmt,mnr brn-gry slty mtx,rr mica flks,tr slty lams,pred vf-f aggs,rr med-crs lse disagg grs,pr vis por,fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.0 | 33 |
| RES_DEEP (ohm.m) | 29.26 | 33 |
| RES_SHALLOW (ohm.m) | 25.64 | 33 |
| **Δ Res (Deep − Shallow)** | **3.62** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2580 m MD — Interval 2577.5 – 2582.5 m

**Sample Description (spreadsheet):** Sample 2580m: 10% Siltstone, 90% very fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 78U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 78.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2567m: lt brn-pl brn,lt gry brn,trnsl,opq,vf-f,rr med-crs,tr v crs,mod-wl srt,sbang-sbrnd,tr ang, wk-mod strg sil cmt,mnr brn-gry slty mtx,rr mica flks,tr slty lams,pred vf-f aggs,rr med-crs lse disagg grs,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2576m: lt brn-pl brn,lt gry brn,trnsl,opq,vf-f, mnr med-v crs,mod-pr srt,sbang-sbrnd,rr ang, wk-mod strg sil cmt,mnr brn-gry slty mtx,rr mica 2580 flks,tr slty lams,pred vf-f aggs,mnr med-v crs lse 1231.1 disagg grs,pr vis por,fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.4 | 33 |
| RES_DEEP (ohm.m) | 27.69 | 33 |
| RES_SHALLOW (ohm.m) | 23.76 | 33 |
| **Δ Res (Deep − Shallow)** | **3.93** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2585 m MD — Interval 2582.5 – 2587.5 m

**Sample Description (spreadsheet):** Sample 2585m: 10% Siltstone, 90% very fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 73U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 73.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2576m: lt brn-pl brn,lt gry brn,trnsl,opq,vf-f, mnr med-v crs,mod-pr srt,sbang-sbrnd,rr ang, wk-mod strg sil cmt,mnr brn-gry slty mtx,rr mica 2580 flks,tr slty lams,pred vf-f aggs,mnr med-v crs lse 1231.1 disagg grs,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2588m: lt brn-pl brn,lt gry brn,trnsl,vf-f,tr med-crs,sbang-sbrnd,tr ang,wk-mod strg sil cmt, mnr brn-gry arg mtx,tr mica flks,pred fri-mod hd aggs,tr lse,pr vis por,pr-fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.6 | 33 |
| RES_DEEP (ohm.m) | 25.08 | 33 |
| RES_SHALLOW (ohm.m) | 23.02 | 33 |
| **Δ Res (Deep − Shallow)** | **2.06** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2590 m MD — Interval 2587.5 – 2592.5 m

**Sample Description (spreadsheet):** Sample 2590m: 40% Siltstone, 60% very fine Sandstone, 80% dull to moderately bright FLUOR in SST. TG 57U

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 80.0% dll-mod bri |
| Total Gas | 57.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2576m: lt brn-pl brn,lt gry brn,trnsl,opq,vf-f, mnr med-v crs,mod-pr srt,sbang-sbrnd,rr ang, wk-mod strg sil cmt,mnr brn-gry slty mtx,rr mica 2580 flks,tr slty lams,pred vf-f aggs,mnr med-v crs lse 1231.1 disagg grs,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2588m: lt brn-pl brn,lt gry brn,trnsl,vf-f,tr med-crs,sbang-sbrnd,tr ang,wk-mod strg sil cmt, mnr brn-gry arg mtx,tr mica flks,pred fri-mod hd aggs,tr lse,pr vis por,pr-fr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.6 | 33 |
| RES_DEEP (ohm.m) | 24.28 | 33 |
| RES_SHALLOW (ohm.m) | 21.00 | 33 |
| **Δ Res (Deep − Shallow)** | **3.29** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2595 m MD — Interval 2592.5 – 2597.5 m

**Sample Description (spreadsheet):** Sample 2595m: 35% Siltstone, 65% very fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 66U

| Property | Value |
|----------|-------|
| % Sandstone | 65.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 66.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2588m: lt brn-pl brn,lt gry brn,trnsl,vf-f,tr med-crs,sbang-sbrnd,tr ang,wk-mod strg sil cmt, mnr brn-gry arg mtx,tr mica flks,pred fri-mod hd aggs,tr lse,pr vis por,pr-fr inf por,fluor.
- **SILTSTONE** @ ~2592m: med gry-med dk gry,aren,mnr arg, micmic i/p,rr sandy lams,frm-mod hd,sbblky-sbfiss.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.4 | 32 |
| RES_DEEP (ohm.m) | 24.82 | 32 |
| RES_SHALLOW (ohm.m) | 22.05 | 32 |
| **Δ Res (Deep − Shallow)** | **2.78** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2600 m MD — Interval 2597.5 – 2602.5 m

**Sample Description (spreadsheet):** Sample 2600m: 15% Siltstone, 85% very fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 65U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 65.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2588m: lt brn-pl brn,lt gry brn,trnsl,vf-f,tr med-crs,sbang-sbrnd,tr ang,wk-mod strg sil cmt, mnr brn-gry arg mtx,tr mica flks,pred fri-mod hd aggs,tr lse,pr vis por,pr-fr inf por,fluor.
- **SILTSTONE** @ ~2592m: med gry-med dk gry,aren,mnr arg, micmic i/p,rr sandy lams,frm-mod hd,sbblky-sbfiss.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.0 | 33 |
| RES_DEEP (ohm.m) | 22.94 | 33 |
| RES_SHALLOW (ohm.m) | 21.20 | 33 |
| **Δ Res (Deep − Shallow)** | **1.74** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2605 m MD — Interval 2602.5 – 2607.5 m

**Sample Description (spreadsheet):** Sample 2605m: 10% Siltstone, 90% very fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 68U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 68.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2588m: lt brn-pl brn,lt gry brn,trnsl,vf-f,tr med-crs,sbang-sbrnd,tr ang,wk-mod strg sil cmt, mnr brn-gry arg mtx,tr mica flks,pred fri-mod hd aggs,tr lse,pr vis por,pr-fr inf por,fluor.
- **SILTSTONE** @ ~2592m: med gry-med dk gry,aren,mnr arg, micmic i/p,rr sandy lams,frm-mod hd,sbblky-sbfiss.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.4 | 33 |
| RES_DEEP (ohm.m) | 22.95 | 33 |
| RES_SHALLOW (ohm.m) | 20.90 | 33 |
| **Δ Res (Deep − Shallow)** | **2.05** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2610 m MD — Interval 2607.5 – 2612.5 m

**Sample Description (spreadsheet):** Sample 2610m: 5% Siltstone, 95% very fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 68U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 68.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2596m: lt brn-pl brn,lt gry brn,trnsl,opq,vf-f, mnr med-v crs,mod-pr srt,sbang-sbrnd,rr ang, wk-mod strg sil cmt,mnr brn-gry slty mtx,rr mica
- **SANDSTONE** @ ~2608m: lt brn-pl brn,lt gry brn,trnsl,opq,clr, vf-f,mnr med-crs,rr v crs,mod-pr srt,sbang-sbrnd,rr ang,wk-mod strg sil cmt,mnr brn-gry slty mtx,rr mica flks,pred vf-f aggs,mnr med-crs lse disagg grs, pr vis por,fr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.1 | 33 |
| RES_DEEP (ohm.m) | 22.79 | 33 |
| RES_SHALLOW (ohm.m) | 21.42 | 33 |
| **Δ Res (Deep − Shallow)** | **1.37** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2615 m MD — Interval 2612.5 – 2617.5 m

**Sample Description (spreadsheet):** Sample 2615m: 5% Siltstone, 95% very fine Sandstone, 100% dull to bright FLUOR in SST. TG 72U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 100.0% dll-bri |
| Total Gas | 72.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2608m: lt brn-pl brn,lt gry brn,trnsl,opq,clr, vf-f,mnr med-crs,rr v crs,mod-pr srt,sbang-sbrnd,rr ang,wk-mod strg sil cmt,mnr brn-gry slty mtx,rr mica flks,pred vf-f aggs,mnr med-crs lse disagg grs, pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2616m: lt brn-pl brn,lt gry brn,trnsl,opq,clr, vf-f,rr med-crs,tr v crs,mod-pr srt,sbang-sbrnd,rr ang,wk-mod strg sil cmt,mnr brn-gry slty mtx,rr mica flks,pred vf-f aggs,mnr med-crs lse disagg grs, pr vis por,fr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.9 | 33 |
| RES_DEEP (ohm.m) | 23.40 | 33 |
| RES_SHALLOW (ohm.m) | 21.11 | 33 |
| **Δ Res (Deep − Shallow)** | **2.29** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2620 m MD — Interval 2617.5 – 2622.5 m

**Sample Description (spreadsheet):** Sample 2620m: 5% Siltstone, 95% very fine Sandstone, 100% dull to bright FLUOR in SST. TG 72U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% dll-bri |
| Total Gas | 72.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2608m: lt brn-pl brn,lt gry brn,trnsl,opq,clr, vf-f,mnr med-crs,rr v crs,mod-pr srt,sbang-sbrnd,rr ang,wk-mod strg sil cmt,mnr brn-gry slty mtx,rr mica flks,pred vf-f aggs,mnr med-crs lse disagg grs, pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2616m: lt brn-pl brn,lt gry brn,trnsl,opq,clr, vf-f,rr med-crs,tr v crs,mod-pr srt,sbang-sbrnd,rr ang,wk-mod strg sil cmt,mnr brn-gry slty mtx,rr mica flks,pred vf-f aggs,mnr med-crs lse disagg grs, pr vis por,fr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.5 | 33 |
| RES_DEEP (ohm.m) | 24.82 | 33 |
| RES_SHALLOW (ohm.m) | 22.63 | 33 |
| **Δ Res (Deep − Shallow)** | **2.20** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2625 m MD — Interval 2622.5 – 2627.5 m

**Sample Description (spreadsheet):** Sample 2625m: 0% Siltstone, 100% very fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 76U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 76.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2608m: lt brn-pl brn,lt gry brn,trnsl,opq,clr, vf-f,mnr med-crs,rr v crs,mod-pr srt,sbang-sbrnd,rr ang,wk-mod strg sil cmt,mnr brn-gry slty mtx,rr mica flks,pred vf-f aggs,mnr med-crs lse disagg grs, pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2616m: lt brn-pl brn,lt gry brn,trnsl,opq,clr, vf-f,rr med-crs,tr v crs,mod-pr srt,sbang-sbrnd,rr ang,wk-mod strg sil cmt,mnr brn-gry slty mtx,rr mica flks,pred vf-f aggs,mnr med-crs lse disagg grs, pr vis por,fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.3 | 32 |
| RES_DEEP (ohm.m) | 24.65 | 32 |
| RES_SHALLOW (ohm.m) | 21.46 | 32 |
| **Δ Res (Deep − Shallow)** | **3.19** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2630 m MD — Interval 2627.5 – 2632.5 m

**Sample Description (spreadsheet):** Sample 2630m: 5% Siltstone, 95% very fine Sandstone, 100% dull to bright FLUOR in SST. TG 53U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 100.0% dll-bri |
| Total Gas | 53.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2616m: lt brn-pl brn,lt gry brn,trnsl,opq,clr, vf-f,rr med-crs,tr v crs,mod-pr srt,sbang-sbrnd,rr ang,wk-mod strg sil cmt,mnr brn-gry slty mtx,rr mica flks,pred vf-f aggs,mnr med-crs lse disagg grs, pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2620m: trnsl,clr,lt brn-pl brn,vf-f,rr med-crs, mod-pr srt,sbang-sbrnd,rr ang,wk sil cmt,tr brn arg mtx,rr mic flks,pred lse cln grs,mnr fri aggs,pr vis por,fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.0 | 33 |
| RES_DEEP (ohm.m) | 24.04 | 33 |
| RES_SHALLOW (ohm.m) | 23.09 | 33 |
| **Δ Res (Deep − Shallow)** | **0.94** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2635 m MD — Interval 2632.5 – 2637.5 m

**Sample Description (spreadsheet):** Sample 2635m: 0% Siltstone, 100% very fine Sandstone, 100% dull to bright FLUOR in SST. TG 67U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 100.0% dll-bri |
| Total Gas | 67.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2620m: trnsl,clr,lt brn-pl brn,vf-f,rr med-crs, mod-pr srt,sbang-sbrnd,rr ang,wk sil cmt,tr brn arg mtx,rr mic flks,pred lse cln grs,mnr fri aggs,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2628m: lt brn-pl brn,lt gry brn,trnsl,opq,clr, vf-f,mnr med-crs,tr v crs,mod-pr srt,sbang-sbrnd,rr ang,wk-mod strg sil cmt,mnr brn-gry slty mtx,rr mica flks,pred vf-f aggs,mnr med-crs lse disagg grs, 14-03-2026 pr vis por,fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.5 | 33 |
| RES_DEEP (ohm.m) | 23.65 | 33 |
| RES_SHALLOW (ohm.m) | 22.46 | 33 |
| **Δ Res (Deep − Shallow)** | **1.19** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2640 m MD — Interval 2637.5 – 2642.5 m

**Sample Description (spreadsheet):** Sample 2640m: 0% Siltstone, 100% very fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 71U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 71.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2628m: lt brn-pl brn,lt gry brn,trnsl,opq,clr, vf-f,mnr med-crs,tr v crs,mod-pr srt,sbang-sbrnd,rr ang,wk-mod strg sil cmt,mnr brn-gry slty mtx,rr mica flks,pred vf-f aggs,mnr med-crs lse disagg grs, 14-03-2026 pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2640m: lt brn-lt gry brn,pl brn,trnsl,opq,clr, vf-v crs,v pr srt,sbang-sbrnd,mnr ang,wk-mod strg sil cmt,mnr-loc com brn-gry arg mtx,rr mic flks,tr qtz ovgths,fri-mod hd aggs,com lse disagg qtz grs,pr vis por,pr-fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.0 | 33 |
| RES_DEEP (ohm.m) | 22.52 | 33 |
| RES_SHALLOW (ohm.m) | 22.40 | 33 |
| **Δ Res (Deep − Shallow)** | **0.12** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2645 m MD — Interval 2642.5 – 2647.5 m

**Sample Description (spreadsheet):** Sample 2645m: 0% Siltstone, 100% very fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 77U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 77.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2628m: lt brn-pl brn,lt gry brn,trnsl,opq,clr, vf-f,mnr med-crs,tr v crs,mod-pr srt,sbang-sbrnd,rr ang,wk-mod strg sil cmt,mnr brn-gry slty mtx,rr mica flks,pred vf-f aggs,mnr med-crs lse disagg grs, 14-03-2026 pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2640m: lt brn-lt gry brn,pl brn,trnsl,opq,clr, vf-v crs,v pr srt,sbang-sbrnd,mnr ang,wk-mod strg sil cmt,mnr-loc com brn-gry arg mtx,rr mic flks,tr qtz ovgths,fri-mod hd aggs,com lse disagg qtz grs,pr vis por,pr-fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.4 | 33 |
| RES_DEEP (ohm.m) | 22.70 | 33 |
| RES_SHALLOW (ohm.m) | 21.68 | 33 |
| **Δ Res (Deep − Shallow)** | **1.03** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2650 m MD — Interval 2647.5 – 2652.5 m

**Sample Description (spreadsheet):** Sample 2650m: 0% Siltstone, 100% very fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 78U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 78.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2640m: lt brn-lt gry brn,pl brn,trnsl,opq,clr, vf-v crs,v pr srt,sbang-sbrnd,mnr ang,wk-mod strg sil cmt,mnr-loc com brn-gry arg mtx,rr mic flks,tr qtz ovgths,fri-mod hd aggs,com lse disagg qtz grs,pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~2648m: lt brn-lt gry brn,pl brn,trnsl,opq,clr, vf-crs,mnr v crs,pr-v pr srt,sbang-sbrnd,mnr ang, wk-mod strg sil cmt,mnr-loc com brn-gry arg mtx,rr R SP P P M : : 1 8 8 0 2 - 0 1 - 0 2 0 570 psi disagg qtz grs,pr vis por,pr-fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.2 | 32 |
| RES_DEEP (ohm.m) | 21.35 | 32 |
| RES_SHALLOW (ohm.m) | 20.34 | 32 |
| **Δ Res (Deep − Shallow)** | **1.01** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2655 m MD — Interval 2652.5 – 2657.5 m

**Sample Description (spreadsheet):** Sample 2655m: 0% Siltstone, 100% very fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 79U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 79.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2640m: lt brn-lt gry brn,pl brn,trnsl,opq,clr, vf-v crs,v pr srt,sbang-sbrnd,mnr ang,wk-mod strg sil cmt,mnr-loc com brn-gry arg mtx,rr mic flks,tr qtz ovgths,fri-mod hd aggs,com lse disagg qtz grs,pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~2648m: lt brn-lt gry brn,pl brn,trnsl,opq,clr, vf-crs,mnr v crs,pr-v pr srt,sbang-sbrnd,mnr ang, wk-mod strg sil cmt,mnr-loc com brn-gry arg mtx,rr R SP P P M : : 1 8 8 0 2 - 0 1 - 0 2 0 570 psi disagg qtz grs,pr vis por,pr-fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.4 | 33 |
| RES_DEEP (ohm.m) | 20.75 | 33 |
| RES_SHALLOW (ohm.m) | 17.63 | 33 |
| **Δ Res (Deep − Shallow)** | **3.12** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2660 m MD — Interval 2657.5 – 2662.5 m

**Sample Description (spreadsheet):** Sample 2660m: 0% Siltstone, 100% very fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 76U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 76.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2648m: lt brn-lt gry brn,pl brn,trnsl,opq,clr, vf-crs,mnr v crs,pr-v pr srt,sbang-sbrnd,mnr ang, wk-mod strg sil cmt,mnr-loc com brn-gry arg mtx,rr R SP P P M : : 1 8 8 0 2 - 0 1 - 0 2 0 570 psi disagg qtz grs,pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~2644m: pl brn-lt brn,lt gry brn,trnsl,clr,opq, 1232.2 vf-v crs,v pr srt,sbang-sbrnd,mnr ang,wk-mod strg sil cmt,mnr brn-gry arg mtx,tr qtz ovgths,vf-f fri- mod hd aggs,com lse disagg med-v crs qtz grs,fr inf por,pr vis por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.9 | 33 |
| RES_DEEP (ohm.m) | 20.83 | 33 |
| RES_SHALLOW (ohm.m) | 18.32 | 33 |
| **Δ Res (Deep − Shallow)** | **2.52** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2665 m MD — Interval 2662.5 – 2667.5 m

**Sample Description (spreadsheet):** Sample 2665m: 0% Siltstone, 100% very fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 55U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 55.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2648m: lt brn-lt gry brn,pl brn,trnsl,opq,clr, vf-crs,mnr v crs,pr-v pr srt,sbang-sbrnd,mnr ang, wk-mod strg sil cmt,mnr-loc com brn-gry arg mtx,rr R SP P P M : : 1 8 8 0 2 - 0 1 - 0 2 0 570 psi disagg qtz grs,pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~2660m: trnsl,clr,opq,pl brn-lt brn,lt gry brn, vf-crs,rr v crs,pr-v pr srt,sbang-sbrnd,mnr ang, wk-mod strg sil cmt,mnr brn-gry arg mtx,tr qtz ovgths,lse disagg med-v crs qtz grs,com fri-mod hd aggs.fr inf por,pr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.9 | 33 |
| RES_DEEP (ohm.m) | 20.24 | 33 |
| RES_SHALLOW (ohm.m) | 19.98 | 33 |
| **Δ Res (Deep − Shallow)** | **0.26** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2670 m MD — Interval 2667.5 – 2672.5 m

**Sample Description (spreadsheet):** Sample 2670m: 0% Siltstone, 100% very fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 52U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 52.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2660m: trnsl,clr,opq,pl brn-lt brn,lt gry brn, vf-crs,rr v crs,pr-v pr srt,sbang-sbrnd,mnr ang, wk-mod strg sil cmt,mnr brn-gry arg mtx,tr qtz ovgths,lse disagg med-v crs qtz grs,com fri-mod hd aggs.fr inf por,pr vis por,fluor.
- **SANDSTONE** @ ~2668m: lt brn-pl brn,lt gry brn,trnsl,opq,vf-f, 83 / 6 / 4 / 3 / 4 mnr med-v crs,pr-v pr srt,sbang-sbrnd,rr ang, wk-mod strg sil cmt,mnr brn-gry arg mtx,rr mic flks, vf-f fri-mod hd aggs,mnr med-v crs lse disagg qtz grs,fr inf por,pr vis por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.9 | 33 |
| RES_DEEP (ohm.m) | 20.82 | 33 |
| RES_SHALLOW (ohm.m) | 20.76 | 33 |
| **Δ Res (Deep − Shallow)** | **0.06** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2675 m MD — Interval 2672.5 – 2677.5 m

**Sample Description (spreadsheet):** Sample 2675m: 0% Siltstone, 100% very fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 52U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 52.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2660m: trnsl,clr,opq,pl brn-lt brn,lt gry brn, vf-crs,rr v crs,pr-v pr srt,sbang-sbrnd,mnr ang, wk-mod strg sil cmt,mnr brn-gry arg mtx,tr qtz ovgths,lse disagg med-v crs qtz grs,com fri-mod hd aggs.fr inf por,pr vis por,fluor.
- **SANDSTONE** @ ~2668m: lt brn-pl brn,lt gry brn,trnsl,opq,vf-f, 83 / 6 / 4 / 3 / 4 mnr med-v crs,pr-v pr srt,sbang-sbrnd,rr ang, wk-mod strg sil cmt,mnr brn-gry arg mtx,rr mic flks, vf-f fri-mod hd aggs,mnr med-v crs lse disagg qtz grs,fr inf por,pr vis por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.2 | 32 |
| RES_DEEP (ohm.m) | 20.78 | 32 |
| RES_SHALLOW (ohm.m) | 20.31 | 32 |
| **Δ Res (Deep − Shallow)** | **0.47** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2680 m MD — Interval 2677.5 – 2682.5 m

**Sample Description (spreadsheet):** Sample 2680m: 0% Siltstone, 100% very fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 53U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf (max: f) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 53.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2668m: lt brn-pl brn,lt gry brn,trnsl,opq,vf-f, 83 / 6 / 4 / 3 / 4 mnr med-v crs,pr-v pr srt,sbang-sbrnd,rr ang, wk-mod strg sil cmt,mnr brn-gry arg mtx,rr mic flks, vf-f fri-mod hd aggs,mnr med-v crs lse disagg qtz grs,fr inf por,pr vis por,fluor.
- **SANDSTONE** @ ~2676m: lt brn-pl brn,lt gry brn,trnsl,opq, vf-f,tr med-v crs,pr-v pr srt,sbang-sbrnd,rr ang, wk-mod strg sil cmt,mnr brn-gry arg mtx,rr mic flks,vf-f fri-mod hd aggs,mnr med-v crs lse disagg qtz grs,fr inf por,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.5 | 33 |
| RES_DEEP (ohm.m) | 20.66 | 33 |
| RES_SHALLOW (ohm.m) | 19.96 | 33 |
| **Δ Res (Deep − Shallow)** | **0.69** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2685 m MD — Interval 2682.5 – 2687.5 m

**Sample Description (spreadsheet):** Sample 2685m: 0% Siltstone, 100% very fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 60U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf (max: f) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 60.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2668m: lt brn-pl brn,lt gry brn,trnsl,opq,vf-f, 83 / 6 / 4 / 3 / 4 mnr med-v crs,pr-v pr srt,sbang-sbrnd,rr ang, wk-mod strg sil cmt,mnr brn-gry arg mtx,rr mic flks, vf-f fri-mod hd aggs,mnr med-v crs lse disagg qtz grs,fr inf por,pr vis por,fluor.
- **SANDSTONE** @ ~2676m: lt brn-pl brn,lt gry brn,trnsl,opq, vf-f,tr med-v crs,pr-v pr srt,sbang-sbrnd,rr ang, wk-mod strg sil cmt,mnr brn-gry arg mtx,rr mic flks,vf-f fri-mod hd aggs,mnr med-v crs lse disagg qtz grs,fr inf por,pr vis por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.9 | 33 |
| RES_DEEP (ohm.m) | 20.09 | 33 |
| RES_SHALLOW (ohm.m) | 19.62 | 33 |
| **Δ Res (Deep − Shallow)** | **0.47** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2690 m MD — Interval 2687.5 – 2695.0 m

**Sample Description (spreadsheet):** Sample 2690m: 0% Siltstone, 100% very fine Sandstone, 100% moderately bright FLUOR in SST. TG 76U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf (max: f) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 76.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2676m: lt brn-pl brn,lt gry brn,trnsl,opq, vf-f,tr med-v crs,pr-v pr srt,sbang-sbrnd,rr ang, wk-mod strg sil cmt,mnr brn-gry arg mtx,rr mic flks,vf-f fri-mod hd aggs,mnr med-v crs lse disagg qtz grs,fr inf por,pr vis por,fluor.
- **SANDSTONE** @ ~2704m: lt brn-pl brn,lt gry brn,trnsl,vf-f,mnr med-crs,mod-wl srt,sbang-sbrnd,wk-mod strg sil cmt,mnr-loc com brn-gry arg mtx,rr mic flks,vf-f fri-mod hd aggs,mnr med-crs lse disagg qtz grs, pr-v pr vis por,pr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.3 | 49 |
| RES_DEEP (ohm.m) | 20.92 | 49 |
| RES_SHALLOW (ohm.m) | 20.28 | 49 |
| **Δ Res (Deep − Shallow)** | **0.65** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2700 m MD — Interval 2695.0 – 2705.0 m

**Sample Description (spreadsheet):** Sample 2700m: 5% Siltstone, 95% very fine Sandstone, 100% moderately bright FLUOR in SST. TG 68U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: f) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 68.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2704m: lt brn-pl brn,lt gry brn,trnsl,vf-f,mnr med-crs,mod-wl srt,sbang-sbrnd,wk-mod strg sil cmt,mnr-loc com brn-gry arg mtx,rr mic flks,vf-f fri-mod hd aggs,mnr med-crs lse disagg qtz grs, pr-v pr vis por,pr inf por,fluor.
- **SANDSTONE** @ ~2702m: 21 SANDSTONE:lt brn-pl brn,lt gry brn,trnsl,f-med,rrr Gel: 7/8/9 med-crs,mod-wl srt,sbang-sbrnd,wk-mod strg sil WL: 3.8 cmt,mnr-loc com brn-gry arg mtx,rr mic flks,vf-f Sol: 6.6 fri-mod hd aggs,mnr med-crs lse disagg qtz grs, pH: 10 pr-v pr vis por,pr inf por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.0 | 66 |
| RES_DEEP (ohm.m) | 21.52 | 66 |
| RES_SHALLOW (ohm.m) | 20.97 | 66 |
| **Δ Res (Deep − Shallow)** | **0.56** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2710 m MD — Interval 2705.0 – 2715.0 m

**Sample Description (spreadsheet):** Sample 2710m: 5% Siltstone, 95% very fine Sandstone, 100% moderately bright FLUOR in SST. TG 123U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: f) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 123.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2704m: lt brn-pl brn,lt gry brn,trnsl,vf-f,mnr med-crs,mod-wl srt,sbang-sbrnd,wk-mod strg sil cmt,mnr-loc com brn-gry arg mtx,rr mic flks,vf-f fri-mod hd aggs,mnr med-crs lse disagg qtz grs, pr-v pr vis por,pr inf por,fluor.
- **SANDSTONE** @ ~2702m: 21 SANDSTONE:lt brn-pl brn,lt gry brn,trnsl,f-med,rrr Gel: 7/8/9 med-crs,mod-wl srt,sbang-sbrnd,wk-mod strg sil WL: 3.8 cmt,mnr-loc com brn-gry arg mtx,rr mic flks,vf-f Sol: 6.6 fri-mod hd aggs,mnr med-crs lse disagg qtz grs, pH: 10 pr-v pr vis por,pr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.0 | 65 |
| RES_DEEP (ohm.m) | 20.48 | 65 |
| RES_SHALLOW (ohm.m) | 20.21 | 65 |
| **Δ Res (Deep − Shallow)** | **0.26** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2720 m MD — Interval 2715.0 – 2725.0 m

**Sample Description (spreadsheet):** Sample 2720m: 5% Siltstone, 95% fine Sandstone, 100% moderately bright FLUOR in SST. TG 80U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f (max: med) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 80.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2704m: lt brn-pl brn,lt gry brn,trnsl,vf-f,mnr med-crs,mod-wl srt,sbang-sbrnd,wk-mod strg sil cmt,mnr-loc com brn-gry arg mtx,rr mic flks,vf-f fri-mod hd aggs,mnr med-crs lse disagg qtz grs, pr-v pr vis por,pr inf por,fluor.
- **SANDSTONE** @ ~2702m: 21 SANDSTONE:lt brn-pl brn,lt gry brn,trnsl,f-med,rrr Gel: 7/8/9 med-crs,mod-wl srt,sbang-sbrnd,wk-mod strg sil WL: 3.8 cmt,mnr-loc com brn-gry arg mtx,rr mic flks,vf-f Sol: 6.6 fri-mod hd aggs,mnr med-crs lse disagg qtz grs, pH: 10 pr-v pr vis por,pr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.7 | 66 |
| RES_DEEP (ohm.m) | 22.78 | 66 |
| RES_SHALLOW (ohm.m) | 21.56 | 66 |
| **Δ Res (Deep − Shallow)** | **1.22** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2730 m MD — Interval 2725.0 – 2735.0 m

**Sample Description (spreadsheet):** Sample 2730m: 5% Siltstone, 95% fine Sandstone, 100% moderately bright FLUOR in SST. TG 165U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f (max: med) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 165.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2721m: lt brn-pl brn,lt gry brn,trnsl,vf-f,mnr med-crs,mod-wl srt,sbang-sbrnd,wk-mod strg sil 27 12 2 3 4 1.5 cmt,mnr-loc com brn-gry arg mtx,rr mic flks,vf-f fri-mod hd aggs,mnr med-crs lse disagg qtz grs, pr-v pr vis por,pr inf por,fluor.
- **SILTSTONE** @ ~2721m: med gry-med dk gry,aren,rr arg, 1231.3 micmic i/p,rr sandy lams,frm-mod hd,sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.1 | 66 |
| RES_DEEP (ohm.m) | 25.79 | 66 |
| RES_SHALLOW (ohm.m) | 24.82 | 66 |
| **Δ Res (Deep − Shallow)** | **0.97** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2740 m MD — Interval 2735.0 – 2745.0 m

**Sample Description (spreadsheet):** Sample 2740m: 10% Siltstone, 90% medium Sandstone, 100% moderately bright FLUOR in SST. TG 137U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | med (max: crs) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 137.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2721m: lt brn-pl brn,lt gry brn,trnsl,vf-f,mnr med-crs,mod-wl srt,sbang-sbrnd,wk-mod strg sil 27 12 2 3 4 1.5 cmt,mnr-loc com brn-gry arg mtx,rr mic flks,vf-f fri-mod hd aggs,mnr med-crs lse disagg qtz grs, pr-v pr vis por,pr inf por,fluor.
- **SILTSTONE** @ ~2721m: med gry-med dk gry,aren,rr arg, 1231.3 micmic i/p,rr sandy lams,frm-mod hd,sbblky.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.7 | 65 |
| RES_DEEP (ohm.m) | 27.23 | 65 |
| RES_SHALLOW (ohm.m) | 25.82 | 65 |
| **Δ Res (Deep − Shallow)** | **1.41** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2750 m MD — Interval 2745.0 – 2755.0 m

**Sample Description (spreadsheet):** Sample 2750m: 5% Siltstone, 95% coarse Sandstone, 100% moderately bright FLUOR in SST. TG 137U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | crs (max: v crs) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 137.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2736m: lt brn-pl brn,lt gry brn,trnsl,opq,crs-v crs,rr med grs,mod-wl srt,sbang, mnr ang,wk sil cmt,tr brn-gry arg mtx,rr mic flks,mnr med fri-mod hd aggs,com med-crs lse disagg qtz grs,pr vis por, pr inf por,fluor.
- **SANDSTONE** @ ~2752m: lt brn-pl brn,lt gry brn,trnsl,opq,crs-v crs,mod srt,sbang-ang,wk sil cmt,rr med fri aggs, pred med-crs lse disagg qtz grs,pr-fr vis por,pr inf por,fluor. por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.4 | 66 |
| RES_DEEP (ohm.m) | 25.91 | 66 |
| RES_SHALLOW (ohm.m) | 23.61 | 66 |
| **Δ Res (Deep − Shallow)** | **2.30** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2760 m MD — Interval 2755.0 – 2765.0 m

**Sample Description (spreadsheet):** Sample 2760m: 0% Siltstone, 100% coarse Sandstone, 100% moderately bright FLUOR in SST. TG 186U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | crs (max: v crs) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 186.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2752m: lt brn-pl brn,lt gry brn,trnsl,opq,crs-v crs,mod srt,sbang-ang,wk sil cmt,rr med fri aggs, pred med-crs lse disagg qtz grs,pr-fr vis por,pr inf por,fluor. por,fluor.
- **SANDSTONE** @ ~2760m: lt brn-pl brn,lt gry brn,trnsl,mnr trnsp, opq,v crs,tr f-med,pr-mod srt,sbang-ang,wk sil cmt, 27 12 6 3 4 1.0 rr med fri aggs,pred med-crs lse disagg qtz grs,fr vis por,pr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.8 | 66 |
| RES_DEEP (ohm.m) | 25.85 | 66 |
| RES_SHALLOW (ohm.m) | 23.96 | 66 |
| **Δ Res (Deep − Shallow)** | **1.89** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2770 m MD — Interval 2765.0 – 2775.0 m

**Sample Description (spreadsheet):** Sample 2770m: 5% Siltstone, 95% coarse Sandstone, 100% moderately bright FLUOR in SST. TG 212U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | crs (max: v crs) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 212.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2752m: lt brn-pl brn,lt gry brn,trnsl,opq,crs-v crs,mod srt,sbang-ang,wk sil cmt,rr med fri aggs, pred med-crs lse disagg qtz grs,pr-fr vis por,pr inf por,fluor. por,fluor.
- **SANDSTONE** @ ~2760m: lt brn-pl brn,lt gry brn,trnsl,mnr trnsp, opq,v crs,tr f-med,pr-mod srt,sbang-ang,wk sil cmt, 27 12 6 3 4 1.0 rr med fri aggs,pred med-crs lse disagg qtz grs,fr vis por,pr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.7 | 65 |
| RES_DEEP (ohm.m) | 28.22 | 65 |
| RES_SHALLOW (ohm.m) | 26.13 | 65 |
| **Δ Res (Deep − Shallow)** | **2.08** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2780 m MD — Interval 2775.0 – 2785.0 m

**Sample Description (spreadsheet):** Sample 2780m: 5% Siltstone, 95% very fine Sandstone, 100% moderately bright FLUOR in SST. TG 147U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 147.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2760m: lt brn-pl brn,lt gry brn,trnsl,mnr trnsp, opq,v crs,tr f-med,pr-mod srt,sbang-ang,wk sil cmt, 27 12 6 3 4 1.0 rr med fri aggs,pred med-crs lse disagg qtz grs,fr vis por,pr inf por,fluor.
- **SANDSTONE** @ ~2772m: lt brn-pl brn,lt gry brn,trnsl,rr vf-f,mnr 63 U m m e n d r- - c c o rs m ,m b o rn d - g s r r y t, s a b r a g n m g- tx s , b r r r n m d, i w c k fl - k m s, o v d f- f s t f r r g i- m si o l d c m hd t, aggs,mnr med-crs lse disagg qtz grs,pr-v pr vis por, 2776 pr inf por,fluor. DEPTH DATA MISSING FROM 1231.0
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.9 | 66 |
| RES_DEEP (ohm.m) | 30.42 | 66 |
| RES_SHALLOW (ohm.m) | 28.60 | 66 |
| **Δ Res (Deep − Shallow)** | **1.82** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2790 m MD — Interval 2785.0 – 2795.0 m

**Sample Description (spreadsheet):** Sample 2790m: 0% Siltstone, 100% very fine Sandstone, 100% moderately bright FLUOR in SST. TG 212U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 212.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2772m: lt brn-pl brn,lt gry brn,trnsl,rr vf-f,mnr 63 U m m e n d r- - c c o rs m ,m b o rn d - g s r r y t, s a b r a g n m g- tx s , b r r r n m d, i w c k fl - k m s, o v d f- f s t f r r g i- m si o l d c m hd t, aggs,mnr med-crs lse disagg qtz grs,pr-v pr vis por, 2776 pr inf por,fluor. DEPTH DATA MISSING FROM 1231.0
- **SANDSTONE** @ ~2784m: lt brn-pl brn,lt gry brn,trnsl,tr vf-f,mnr med-crs,mod srt,sbang-sbrnd,wk-mod strg sil cmt, mnr-com brn-gry arg mtx,rr mic flks,vf-f fri-mod hd aggs,mnr med-crs lse disagg qtz grs,pr-v pr vis por, pr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.3 | 65 |
| RES_DEEP (ohm.m) | 25.91 | 65 |
| RES_SHALLOW (ohm.m) | 14.96 | 65 |
| **Δ Res (Deep − Shallow)** | **10.95** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2800 m MD — Interval 2795.0 – 2805.0 m

**Sample Description (spreadsheet):** Sample 2800m: 5% Siltstone, 95% very fine Sandstone, 100% moderately bright FLUOR in SST. TG 234U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% mod bri |
| Total Gas | 234.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2784m: lt brn-pl brn,lt gry brn,trnsl,tr vf-f,mnr med-crs,mod srt,sbang-sbrnd,wk-mod strg sil cmt, mnr-com brn-gry arg mtx,rr mic flks,vf-f fri-mod hd aggs,mnr med-crs lse disagg qtz grs,pr-v pr vis por, pr inf por,fluor.
- **SANDSTONE** @ ~2788m: lt brn-pl brn,lt gry brn,trnsl,opq,tr vf-f, mnr med-crs,mod srt,sbang-sbrnd,wk-mod strg sil cmt,mnr-com brn-gry arg mtx,rr mic flks,vf-f fri-mod hd aggs,mnr med-crs lse disagg qtz grs,pr-v pr vis por,pr inf por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.1 | 66 |
| RES_DEEP (ohm.m) | 26.19 | 66 |
| RES_SHALLOW (ohm.m) | 23.43 | 66 |
| **Δ Res (Deep − Shallow)** | **2.76** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2810 m MD — Interval 2805.0 – 2815.0 m

**Sample Description (spreadsheet):** Sample 2810m: 5% Siltstone, 95% fine Sandstone, 90% dull to moderately bright FLUOR in SST. TG 72U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | f (max: crs) |
| Fluorescence | 90.0% dll-mod bri |
| Total Gas | 72.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2792m: med gry-med dk gry,aren,rr arg, micmic i/p,rr sandy lams,frm-mod hd,sbblky. 14-03-2026
- **SANDSTONE** @ ~2812m: clr,trnsl,lt brn-pl brn,lt gry brn,vf-med, mnr crs,rr v crs,pr-v pr srt,sbang-sbrnd,wk-mod strg sil cmt,mnr-com brn-gry arg mtx,tr mic flks,vf-f fri-mod hd aggs,mnr med-crs lse disagg qtz grs,pr vis por,pr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.5 | 66 |
| RES_DEEP (ohm.m) | 27.55 | 66 |
| RES_SHALLOW (ohm.m) | 26.61 | 66 |
| **Δ Res (Deep − Shallow)** | **0.94** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2820 m MD — Interval 2815.0 – 2825.0 m

**Sample Description (spreadsheet):** Sample 2820m: 15% Siltstone, 85% very fine Sandstone, 100% dull to bright FLUOR in SST. TG 60U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 100.0% dll-bri |
| Total Gas | 60.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2812m: clr,trnsl,lt brn-pl brn,lt gry brn,vf-med, mnr crs,rr v crs,pr-v pr srt,sbang-sbrnd,wk-mod strg sil cmt,mnr-com brn-gry arg mtx,tr mic flks,vf-f fri-mod hd aggs,mnr med-crs lse disagg qtz grs,pr vis por,pr inf por,fluor.
- **SILTSTONE** @ ~2820m: med gry-med dk gry,aren,com micmic, rr sandy lams,frm-mod hd,sbblky-sbfiss.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.5 | 65 |
| RES_DEEP (ohm.m) | 26.38 | 65 |
| RES_SHALLOW (ohm.m) | 25.11 | 65 |
| **Δ Res (Deep − Shallow)** | **1.27** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2830 m MD — Interval 2825.0 – 2832.5 m

**Sample Description (spreadsheet):** Sample 2830m: 10% Siltstone, 90% very fine Sandstone, 100% dull to bright FLUOR in SST. TG 88U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 100.0% dll-bri |
| Total Gas | 88.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2812m: clr,trnsl,lt brn-pl brn,lt gry brn,vf-med, mnr crs,rr v crs,pr-v pr srt,sbang-sbrnd,wk-mod strg sil cmt,mnr-com brn-gry arg mtx,tr mic flks,vf-f fri-mod hd aggs,mnr med-crs lse disagg qtz grs,pr vis por,pr inf por,fluor.
- **SILTSTONE** @ ~2820m: med gry-med dk gry,aren,com micmic, rr sandy lams,frm-mod hd,sbblky-sbfiss.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.7 | 49 |
| RES_DEEP (ohm.m) | 28.73 | 49 |
| RES_SHALLOW (ohm.m) | 23.57 | 49 |
| **Δ Res (Deep − Shallow)** | **5.16** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2835 m MD — Interval 2832.5 – 2837.5 m

**Sample Description (spreadsheet):** Sample 2835m: 0% Siltstone, 100% very fine Sandstone, 100% dull to bright FLUOR in SST. TG 72U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% dll-bri |
| Total Gas | 72.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2820m: med gry-med dk gry,aren,com micmic, rr sandy lams,frm-mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~2828m: clr,trnsl,lt brn-pl brn,lt gry brn,vf-med, rr crs,pr-v pr srt,sbang-sbrnd,wk-mod strg sil cmt, mnr-com brn-gry arg mtx,tr mic flks,vf-f fri-mod hd aggs,com f-crs lse disagg qtz grs,pr vis por,pr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.4 | 33 |
| RES_DEEP (ohm.m) | 24.74 | 33 |
| RES_SHALLOW (ohm.m) | 19.90 | 33 |
| **Δ Res (Deep − Shallow)** | **4.83** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2840 m MD — Interval 2837.5 – 2842.5 m

**Sample Description (spreadsheet):** Sample 2840m: 5% Siltstone, 95% very fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 74U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 74.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2828m: clr,trnsl,lt brn-pl brn,lt gry brn,vf-med, rr crs,pr-v pr srt,sbang-sbrnd,wk-mod strg sil cmt, mnr-com brn-gry arg mtx,tr mic flks,vf-f fri-mod hd aggs,com f-crs lse disagg qtz grs,pr vis por,pr inf por,fluor.
- **SANDSTONE** @ ~2836m: trnsl,clr,opq,lt brn-pl brn,lt gry brn, f-crs,mnr vf,mod-pr srt,sbang-sbrnd,rr ang,wk-mod strg sil cmt,mnr loc brn-gry arg mtx,tr mica flks,pred 80 / 6 / 4 / 5 / 5 75 U f-crs disagg grs,mnr vf-f fri-mod hd aggs,pr-fr inf por,pr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.5 | 33 |
| RES_DEEP (ohm.m) | 26.65 | 33 |
| RES_SHALLOW (ohm.m) | 19.79 | 33 |
| **Δ Res (Deep − Shallow)** | **6.86** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2845 m MD — Interval 2842.5 – 2847.5 m

**Sample Description (spreadsheet):** Sample 2845m: 15% Siltstone, 85% very fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 74U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 74.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2828m: clr,trnsl,lt brn-pl brn,lt gry brn,vf-med, rr crs,pr-v pr srt,sbang-sbrnd,wk-mod strg sil cmt, mnr-com brn-gry arg mtx,tr mic flks,vf-f fri-mod hd aggs,com f-crs lse disagg qtz grs,pr vis por,pr inf por,fluor.
- **SANDSTONE** @ ~2836m: trnsl,clr,opq,lt brn-pl brn,lt gry brn, f-crs,mnr vf,mod-pr srt,sbang-sbrnd,rr ang,wk-mod strg sil cmt,mnr loc brn-gry arg mtx,tr mica flks,pred 80 / 6 / 4 / 5 / 5 75 U f-crs disagg grs,mnr vf-f fri-mod hd aggs,pr-fr inf por,pr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.2 | 33 |
| RES_DEEP (ohm.m) | 30.12 | 33 |
| RES_SHALLOW (ohm.m) | 25.08 | 33 |
| **Δ Res (Deep − Shallow)** | **5.04** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2850 m MD — Interval 2847.5 – 2852.5 m

**Sample Description (spreadsheet):** Sample 2850m: 10% Siltstone, 90% very fine Sandstone, 90% dull to moderately bright FLUOR in SST. TG 68U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 90.0% dll-mod bri |
| Total Gas | 68.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2836m: trnsl,clr,opq,lt brn-pl brn,lt gry brn, f-crs,mnr vf,mod-pr srt,sbang-sbrnd,rr ang,wk-mod strg sil cmt,mnr loc brn-gry arg mtx,tr mica flks,pred 80 / 6 / 4 / 5 / 5 75 U f-crs disagg grs,mnr vf-f fri-mod hd aggs,pr-fr inf por,pr vis por,fluor.
- **SANDSTONE** @ ~2844m: trnsl,clr,opq,lt brn-pl brn,lt gry brn, vf-med,rr crs,tr v crs,mod-pr srt,sbang-sbrnd,tr ang, wk-mod strg sil cmt,mnr brn gry arg mtx,tr mica flks, tr qtz ovgths,pred lse f-crs lse disagg qtz grs,com vf-f fri-mod hd aggs,pr-fr inf por,pr vis por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.0 | 33 |
| RES_DEEP (ohm.m) | 27.02 | 33 |
| RES_SHALLOW (ohm.m) | 24.11 | 33 |
| **Δ Res (Deep − Shallow)** | **2.91** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2855 m MD — Interval 2852.5 – 2857.5 m

**Sample Description (spreadsheet):** Sample 2855m: 5% Siltstone, 95% very fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 82U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: med) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 82.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2844m: trnsl,clr,opq,lt brn-pl brn,lt gry brn, vf-med,rr crs,tr v crs,mod-pr srt,sbang-sbrnd,tr ang, wk-mod strg sil cmt,mnr brn gry arg mtx,tr mica flks, tr qtz ovgths,pred lse f-crs lse disagg qtz grs,com vf-f fri-mod hd aggs,pr-fr inf por,pr vis por,fluor.
- **SANDSTONE** @ ~2856m: trnsl,opq,lt brn-pl brn,lt gry brn, vf-med,mod-wl srt,sbang-sbrnd,wk-mod strg sil cmt, mnr brn gry arg mtx,tr mica flks,pred f-med lse disagg qtz grs,com vf-f fri-mod hd aggs,fr inf por,pr vis por,fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.8 | 33 |
| RES_DEEP (ohm.m) | 26.67 | 33 |
| RES_SHALLOW (ohm.m) | 24.70 | 33 |
| **Δ Res (Deep − Shallow)** | **1.97** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2860 m MD — Interval 2857.5 – 2862.5 m

**Sample Description (spreadsheet):** Sample 2860m: 10% Siltstone, 90% very fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 93U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf (max: med) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 93.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2844m: trnsl,clr,opq,lt brn-pl brn,lt gry brn, vf-med,rr crs,tr v crs,mod-pr srt,sbang-sbrnd,tr ang, wk-mod strg sil cmt,mnr brn gry arg mtx,tr mica flks, tr qtz ovgths,pred lse f-crs lse disagg qtz grs,com vf-f fri-mod hd aggs,pr-fr inf por,pr vis por,fluor.
- **SANDSTONE** @ ~2856m: trnsl,opq,lt brn-pl brn,lt gry brn, vf-med,mod-wl srt,sbang-sbrnd,wk-mod strg sil cmt, mnr brn gry arg mtx,tr mica flks,pred f-med lse disagg qtz grs,com vf-f fri-mod hd aggs,fr inf por,pr vis por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.5 | 33 |
| RES_DEEP (ohm.m) | 24.16 | 33 |
| RES_SHALLOW (ohm.m) | 22.71 | 33 |
| **Δ Res (Deep − Shallow)** | **1.44** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2865 m MD — Interval 2862.5 – 2867.5 m

**Sample Description (spreadsheet):** Sample 2865m: 5% Siltstone, 95% very fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 101U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: med) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 101.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2856m: trnsl,opq,lt brn-pl brn,lt gry brn, vf-med,mod-wl srt,sbang-sbrnd,wk-mod strg sil cmt, mnr brn gry arg mtx,tr mica flks,pred f-med lse disagg qtz grs,com vf-f fri-mod hd aggs,fr inf por,pr vis por,fluor.
- **SILTSTONE** @ ~2874m: med gry-med dk gry,gry brn,aren,mnr 1232.5 arg,com micmic,rr sandy lams,frm-mod hd, sbblky-sbfiss.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.6 | 33 |
| RES_DEEP (ohm.m) | 24.56 | 33 |
| RES_SHALLOW (ohm.m) | 21.68 | 33 |
| **Δ Res (Deep − Shallow)** | **2.88** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2870 m MD — Interval 2867.5 – 2872.5 m

**Sample Description (spreadsheet):** Sample 2870m: 20% Siltstone, 80% very fine Sandstone, 80% dull to bright FLUOR in SST. TG 80U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 80.0% dll-bri |
| Total Gas | 80.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2856m: trnsl,opq,lt brn-pl brn,lt gry brn, vf-med,mod-wl srt,sbang-sbrnd,wk-mod strg sil cmt, mnr brn gry arg mtx,tr mica flks,pred f-med lse disagg qtz grs,com vf-f fri-mod hd aggs,fr inf por,pr vis por,fluor.
- **SILTSTONE** @ ~2874m: med gry-med dk gry,gry brn,aren,mnr 1232.5 arg,com micmic,rr sandy lams,frm-mod hd, sbblky-sbfiss.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.7 | 33 |
| RES_DEEP (ohm.m) | 24.16 | 33 |
| RES_SHALLOW (ohm.m) | 22.79 | 33 |
| **Δ Res (Deep − Shallow)** | **1.37** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2875 m MD — Interval 2872.5 – 2877.5 m

**Sample Description (spreadsheet):** Sample 2875m: 40% Siltstone, 60% very fine Sandstone, 80% dull to bright FLUOR in SST. TG 76U

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 80.0% dll-bri |
| Total Gas | 76.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2874m: med gry-med dk gry,gry brn,aren,mnr 1232.5 arg,com micmic,rr sandy lams,frm-mod hd, sbblky-sbfiss.
- **SANDSTONE** @ ~2874m: lt brn-pl brn,lt gry brn,trnsl,clr,opq, vf-f,mnr med-crs,rr v crs,mod-v pr srt,sbang-sbrnd, rr ang,wk-mod strg sil cmt,mnr brn-gry arg mtx,tr 2880 79 / 6 / 5 / 6 / 6 100 U mic flks,tr qtz ovgths,pred vf-f aggs,mnr med-v crs 1232.6 lse disagg qtz grs,pr vis por,pr-fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.8 | 33 |
| RES_DEEP (ohm.m) | 23.30 | 33 |
| RES_SHALLOW (ohm.m) | 22.29 | 33 |
| **Δ Res (Deep − Shallow)** | **1.01** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2880 m MD — Interval 2877.5 – 2882.5 m

**Sample Description (spreadsheet):** Sample 2880m: 30% Siltstone, 70% very fine Sandstone, 100% dull to bright FLUOR in SST. TG 99U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 100.0% dll-bri |
| Total Gas | 99.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2874m: med gry-med dk gry,gry brn,aren,mnr 1232.5 arg,com micmic,rr sandy lams,frm-mod hd, sbblky-sbfiss.
- **SANDSTONE** @ ~2874m: lt brn-pl brn,lt gry brn,trnsl,clr,opq, vf-f,mnr med-crs,rr v crs,mod-v pr srt,sbang-sbrnd, rr ang,wk-mod strg sil cmt,mnr brn-gry arg mtx,tr 2880 79 / 6 / 5 / 6 / 6 100 U mic flks,tr qtz ovgths,pred vf-f aggs,mnr med-v crs 1232.6 lse disagg qtz grs,pr vis por,pr-fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.9 | 33 |
| RES_DEEP (ohm.m) | 22.30 | 33 |
| RES_SHALLOW (ohm.m) | 21.56 | 33 |
| **Δ Res (Deep − Shallow)** | **0.74** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2885 m MD — Interval 2882.5 – 2887.5 m

**Sample Description (spreadsheet):** Sample 2885m: 10% Siltstone, 90% very fine Sandstone, 100% dull to bright FLUOR in SST. TG 91U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 100.0% dll-bri |
| Total Gas | 91.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2874m: med gry-med dk gry,gry brn,aren,mnr 1232.5 arg,com micmic,rr sandy lams,frm-mod hd, sbblky-sbfiss.
- **SANDSTONE** @ ~2874m: lt brn-pl brn,lt gry brn,trnsl,clr,opq, vf-f,mnr med-crs,rr v crs,mod-v pr srt,sbang-sbrnd, rr ang,wk-mod strg sil cmt,mnr brn-gry arg mtx,tr 2880 79 / 6 / 5 / 6 / 6 100 U mic flks,tr qtz ovgths,pred vf-f aggs,mnr med-v crs 1232.6 lse disagg qtz grs,pr vis por,pr-fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.9 | 32 |
| RES_DEEP (ohm.m) | 22.43 | 32 |
| RES_SHALLOW (ohm.m) | 20.91 | 32 |
| **Δ Res (Deep − Shallow)** | **1.52** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2890 m MD — Interval 2887.5 – 2892.5 m

**Sample Description (spreadsheet):** Sample 2890m: 10% Siltstone, 90% very fine Sandstone, 100% dull to bright FLUOR in SST. TG 83U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 100.0% dll-bri |
| Total Gas | 83.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2874m: med gry-med dk gry,gry brn,aren,mnr 1232.5 arg,com micmic,rr sandy lams,frm-mod hd, sbblky-sbfiss.
- **SANDSTONE** @ ~2874m: lt brn-pl brn,lt gry brn,trnsl,clr,opq, vf-f,mnr med-crs,rr v crs,mod-v pr srt,sbang-sbrnd, rr ang,wk-mod strg sil cmt,mnr brn-gry arg mtx,tr 2880 79 / 6 / 5 / 6 / 6 100 U mic flks,tr qtz ovgths,pred vf-f aggs,mnr med-v crs 1232.6 lse disagg qtz grs,pr vis por,pr-fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.3 | 33 |
| RES_DEEP (ohm.m) | 21.42 | 33 |
| RES_SHALLOW (ohm.m) | 19.23 | 33 |
| **Δ Res (Deep − Shallow)** | **2.19** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2895 m MD — Interval 2892.5 – 2897.5 m

**Sample Description (spreadsheet):** Sample 2895m: 5% Siltstone, 95% very fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 85U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 85.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2884m: lt brn-pl brn,lt gry brn,trnsl,clr,opq, vf-f,mnr med-crs,rr v crs,mod-v pr srt,sbang-sbrnd, rr ang,wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mic flks,tr qtz ovgths,pred vf-f aggs,mnr med-v crs lse disagg qtz grs,pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~2888m: lt brn-pl brn,lt gry brn,trnsl,clr,opq, 16-03-2026 vf-f,mnr med-crs,rr v crs,mod-v pr srt,sbang-sbrnd, rr ang,wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mic flks,tr qtz ovgths,pred vf-f aggs,mnr med-v crs lse disagg qtz grs,pr vis por,pr-fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.3 | 33 |
| RES_DEEP (ohm.m) | 21.41 | 33 |
| RES_SHALLOW (ohm.m) | 19.38 | 33 |
| **Δ Res (Deep − Shallow)** | **2.03** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2900 m MD — Interval 2897.5 – 2902.5 m

**Sample Description (spreadsheet):** Sample 2900m: 5% Siltstone, 95% very fine Sandstone, 80% dull to moderately bright FLUOR in SST. TG 68U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 80.0% dll-mod bri |
| Total Gas | 68.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2884m: lt brn-pl brn,lt gry brn,trnsl,clr,opq, vf-f,mnr med-crs,rr v crs,mod-v pr srt,sbang-sbrnd, rr ang,wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mic flks,tr qtz ovgths,pred vf-f aggs,mnr med-v crs lse disagg qtz grs,pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~2888m: lt brn-pl brn,lt gry brn,trnsl,clr,opq, 16-03-2026 vf-f,mnr med-crs,rr v crs,mod-v pr srt,sbang-sbrnd, rr ang,wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mic flks,tr qtz ovgths,pred vf-f aggs,mnr med-v crs lse disagg qtz grs,pr vis por,pr-fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.8 | 33 |
| RES_DEEP (ohm.m) | 23.05 | 33 |
| RES_SHALLOW (ohm.m) | 22.73 | 33 |
| **Δ Res (Deep − Shallow)** | **0.33** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2905 m MD — Interval 2902.5 – 2907.5 m

**Sample Description (spreadsheet):** Sample 2905m: 10% Siltstone, 90% very fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 76U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 76.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2888m: lt brn-pl brn,lt gry brn,trnsl,clr,opq, 16-03-2026 vf-f,mnr med-crs,rr v crs,mod-v pr srt,sbang-sbrnd, rr ang,wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mic flks,tr qtz ovgths,pred vf-f aggs,mnr med-v crs lse disagg qtz grs,pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~2893m: lt brn-pl brn,lt gry brn,trnsl,clr,opq, vf-f crs,pred f-crs,mod-v pr srt,sbang-sbrnd,rr ang, wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mic flks, tr qtz ovgths,com vf-f fri-mod hd aggs,pred f-crs lse disagg qtz grs,pr vis por,fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.7 | 33 |
| RES_DEEP (ohm.m) | 21.52 | 33 |
| RES_SHALLOW (ohm.m) | 20.47 | 33 |
| **Δ Res (Deep − Shallow)** | **1.05** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2910 m MD — Interval 2907.5 – 2912.5 m

**Sample Description (spreadsheet):** Sample 2910m: 5% Siltstone, 95% very fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 103U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 103.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2893m: lt brn-pl brn,lt gry brn,trnsl,clr,opq, vf-f crs,pred f-crs,mod-v pr srt,sbang-sbrnd,rr ang, wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mic flks, tr qtz ovgths,com vf-f fri-mod hd aggs,pred f-crs lse disagg qtz grs,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2912m: lt brn-pl brn,lt gry brn,trnsl,clr,opq, vf-f,rr med-v crs,v pr srt,sbang-sbrnd,rr ang,wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mic flks,tr qtz ovgths,vf-f fri-mod hd aggs,com med-v crs lse disagg qtz grs,pr vis por,fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 64.0 | 32 |
| RES_DEEP (ohm.m) | 23.35 | 32 |
| RES_SHALLOW (ohm.m) | 21.95 | 32 |
| **Δ Res (Deep − Shallow)** | **1.39** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2915 m MD — Interval 2912.5 – 2917.5 m

**Sample Description (spreadsheet):** Sample 2915m: 10% Siltstone, 90% very fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 109U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 109.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2912m: lt brn-pl brn,lt gry brn,trnsl,clr,opq, vf-f,rr med-v crs,v pr srt,sbang-sbrnd,rr ang,wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mic flks,tr qtz ovgths,vf-f fri-mod hd aggs,com med-v crs lse disagg qtz grs,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2912m: lt brn-pl brn,lt gry brn,trnsl,clr,opq, 29 12 2 3 0 2.8 vf-f,mnr med-v crs,v pr srt,sbang-sbrnd,rr ang, wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mic flks, tr qtz ovgths,vf-f fri-mod hd aggs,mnr med-v crs lse disagg qtz grs,pr vis por,fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.9 | 33 |
| RES_DEEP (ohm.m) | 22.71 | 33 |
| RES_SHALLOW (ohm.m) | 20.62 | 33 |
| **Δ Res (Deep − Shallow)** | **2.09** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2920 m MD — Interval 2917.5 – 2922.5 m

**Sample Description (spreadsheet):** Sample 2920m: 15% Siltstone, 85% very fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 85U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 85.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2912m: lt brn-pl brn,lt gry brn,trnsl,clr,opq, vf-f,rr med-v crs,v pr srt,sbang-sbrnd,rr ang,wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mic flks,tr qtz ovgths,vf-f fri-mod hd aggs,com med-v crs lse disagg qtz grs,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2912m: lt brn-pl brn,lt gry brn,trnsl,clr,opq, 29 12 2 3 0 2.8 vf-f,mnr med-v crs,v pr srt,sbang-sbrnd,rr ang, wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mic flks, tr qtz ovgths,vf-f fri-mod hd aggs,mnr med-v crs lse disagg qtz grs,pr vis por,fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.6 | 33 |
| RES_DEEP (ohm.m) | 22.50 | 33 |
| RES_SHALLOW (ohm.m) | 21.68 | 33 |
| **Δ Res (Deep − Shallow)** | **0.82** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2925 m MD — Interval 2922.5 – 2927.5 m

**Sample Description (spreadsheet):** Sample 2925m: 10% Siltstone, 90% very fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 85U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 85.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2912m: lt brn-pl brn,lt gry brn,trnsl,clr,opq, vf-f,rr med-v crs,v pr srt,sbang-sbrnd,rr ang,wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mic flks,tr qtz ovgths,vf-f fri-mod hd aggs,com med-v crs lse disagg qtz grs,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2912m: lt brn-pl brn,lt gry brn,trnsl,clr,opq, 29 12 2 3 0 2.8 vf-f,mnr med-v crs,v pr srt,sbang-sbrnd,rr ang, wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mic flks, tr qtz ovgths,vf-f fri-mod hd aggs,mnr med-v crs lse disagg qtz grs,pr vis por,fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 59.3 | 33 |
| RES_DEEP (ohm.m) | 22.99 | 33 |
| RES_SHALLOW (ohm.m) | 21.46 | 33 |
| **Δ Res (Deep − Shallow)** | **1.52** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2930 m MD — Interval 2927.5 – 2932.5 m

**Sample Description (spreadsheet):** Sample 2930m: 5% Siltstone, 95% very fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 93U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: v crs) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 93.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2924m: med gry-med dk gry,gry brn,aren,mnr arg,com micmic,rr sandy lams,frm-mod hd, sbblky-sbfiss. 29 12 2 3 8 2.7 S vf A -f N ,m D n S r T m O e N d E -v :l t c b rs rn ,v - p p l r b s r r n t , , l s t b g a r n y g b - r s n b ,t r r n n d s , l r , r c a lr, n o g p , q, wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mic flks,
- **SANDSTONE** @ ~2932m: lt brn-pl brn,lt gry brn,trnsl,clr,opq, vf-f,mnr med,rr crs,mod srt,sbang-sbrnd,wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mic flks,vf-f 2936 fri-mod hd aggs,mnr med-crs lse disagg qtz grs,pr 1232.7 vis por,fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 61.3 | 33 |
| RES_DEEP (ohm.m) | 22.72 | 33 |
| RES_SHALLOW (ohm.m) | 21.33 | 33 |
| **Δ Res (Deep − Shallow)** | **1.38** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2935 m MD — Interval 2932.5 – 2937.5 m

**Sample Description (spreadsheet):** Sample 2935m: 0% Siltstone, 100% very fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 101U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 101.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2924m: med gry-med dk gry,gry brn,aren,mnr arg,com micmic,rr sandy lams,frm-mod hd, sbblky-sbfiss. 29 12 2 3 8 2.7 S vf A -f N ,m D n S r T m O e N d E -v :l t c b rs rn ,v - p p l r b s r r n t , , l s t b g a r n y g b - r s n b ,t r r n n d s , l r , r c a lr, n o g p , q, wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mic flks,
- **SANDSTONE** @ ~2932m: lt brn-pl brn,lt gry brn,trnsl,clr,opq, vf-f,mnr med,rr crs,mod srt,sbang-sbrnd,wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mic flks,vf-f 2936 fri-mod hd aggs,mnr med-crs lse disagg qtz grs,pr 1232.7 vis por,fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 61.2 | 32 |
| RES_DEEP (ohm.m) | 23.71 | 32 |
| RES_SHALLOW (ohm.m) | 22.73 | 32 |
| **Δ Res (Deep − Shallow)** | **0.98** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2940 m MD — Interval 2937.5 – 2942.5 m

**Sample Description (spreadsheet):** Sample 2940m: 5% Siltstone, 95% very fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 89U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 89.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2924m: med gry-med dk gry,gry brn,aren,mnr arg,com micmic,rr sandy lams,frm-mod hd, sbblky-sbfiss. 29 12 2 3 8 2.7 S vf A -f N ,m D n S r T m O e N d E -v :l t c b rs rn ,v - p p l r b s r r n t , , l s t b g a r n y g b - r s n b ,t r r n n d s , l r , r c a lr, n o g p , q, wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mic flks,
- **SANDSTONE** @ ~2932m: lt brn-pl brn,lt gry brn,trnsl,clr,opq, vf-f,mnr med,rr crs,mod srt,sbang-sbrnd,wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mic flks,vf-f 2936 fri-mod hd aggs,mnr med-crs lse disagg qtz grs,pr 1232.7 vis por,fr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.0 | 33 |
| RES_DEEP (ohm.m) | 23.63 | 33 |
| RES_SHALLOW (ohm.m) | 23.64 | 33 |
| **Δ Res (Deep − Shallow)** | **-0.01** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2945 m MD — Interval 2942.5 – 2947.5 m

**Sample Description (spreadsheet):** Sample 2945m: 10% Siltstone, 90% very fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 105U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf (max: med) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 105.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2932m: lt brn-pl brn,lt gry brn,trnsl,clr,opq, vf-f,mnr med,rr crs,mod srt,sbang-sbrnd,wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mic flks,vf-f 2936 fri-mod hd aggs,mnr med-crs lse disagg qtz grs,pr 1232.7 vis por,fr inf por,fluor.
- **SANDSTONE** @ ~2940m: lt brn-pl brn,lt gry brn,trnsl,opq,vf-f, mnr med,mod-wl srt,sbang-sbrnd,wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mic flks,vf-f fri-mod hd aggs,mnr med lse disagg qtz grs,pr vis por,fr inf por, fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.1 | 33 |
| RES_DEEP (ohm.m) | 25.37 | 33 |
| RES_SHALLOW (ohm.m) | 24.40 | 33 |
| **Δ Res (Deep − Shallow)** | **0.97** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2950 m MD — Interval 2947.5 – 2952.5 m

**Sample Description (spreadsheet):** Sample 2950m: 5% Siltstone, 95% very fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 147U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: med) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 147.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2940m: lt brn-pl brn,lt gry brn,trnsl,opq,vf-f, mnr med,mod-wl srt,sbang-sbrnd,wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mic flks,vf-f fri-mod hd aggs,mnr med lse disagg qtz grs,pr vis por,fr inf por, fluor.
- **SANDSTONE** @ ~2944m: lt brn-pl brn,lt gry brn,trnsl,clr,opq, vf-med,tr crs,mod srt,sbang-sbrnd,wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mic flks,vf-f fri-mod hd 2948 aggs,com f-med lse disagg qtz grs,pr vis por,fr inf 1232.6 por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.5 | 33 |
| RES_DEEP (ohm.m) | 26.08 | 33 |
| RES_SHALLOW (ohm.m) | 24.81 | 33 |
| **Δ Res (Deep − Shallow)** | **1.27** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2955 m MD — Interval 2952.5 – 2957.5 m

**Sample Description (spreadsheet):** Sample 2955m: 20% Siltstone, 80% very fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 75U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf (max: med) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 75.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2940m: lt brn-pl brn,lt gry brn,trnsl,opq,vf-f, mnr med,mod-wl srt,sbang-sbrnd,wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mic flks,vf-f fri-mod hd aggs,mnr med lse disagg qtz grs,pr vis por,fr inf por, fluor.
- **SANDSTONE** @ ~2944m: lt brn-pl brn,lt gry brn,trnsl,clr,opq, vf-med,tr crs,mod srt,sbang-sbrnd,wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mic flks,vf-f fri-mod hd 2948 aggs,com f-med lse disagg qtz grs,pr vis por,fr inf 1232.6 por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.2 | 33 |
| RES_DEEP (ohm.m) | 25.09 | 33 |
| RES_SHALLOW (ohm.m) | 23.07 | 33 |
| **Δ Res (Deep − Shallow)** | **2.02** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 2960 m MD — Interval 2957.5 – 2962.5 m

**Sample Description (spreadsheet):** Sample 2960m: 30% Siltstone, trace siderite in 70% very fine Sandstone, 90% moderately bright to bright FLUOR in SST. TG 79U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | vf (max: med) |
| Fluorescence | 90.0% mod bri-bri |
| Total Gas | 79.0 U |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2944m: lt brn-pl brn,lt gry brn,trnsl,clr,opq, vf-med,tr crs,mod srt,sbang-sbrnd,wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mic flks,vf-f fri-mod hd 2948 aggs,com f-med lse disagg qtz grs,pr vis por,fr inf 1232.6 por,fluor.
- **SANDSTONE** @ ~2956m: lt brn-pl brn,lt gry brn,trnsl,clr,opq, vf-med,tr crs,mod srt,sbang-sbrnd,wk-mod strg sil cmt,mnr brn-gry arg mtx,tr mic flks,vf-f fri-mod hd aggs,com f-med lse disagg qtz grs,pr vis por,fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 109.7 | 32 |
| RES_DEEP (ohm.m) | 20.57 | 32 |
| RES_SHALLOW (ohm.m) | 19.05 | 32 |
| **Δ Res (Deep − Shallow)** | **1.52** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3250 m MD — Interval 3245.0 – 3255.0 m

**Sample Description (spreadsheet):** 25% Siltstone, 75% vf Sandstone, 50% dll-mod bri FLUOR, TG 62.0U

| Property | Value |
|----------|-------|
| % Sandstone | 75.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 50.0% dll-mod bri |
| Total Gas | 62.0 U |
| FeCO₃ in Siltstone | mnr |
| FeCO₃ in Sandstone | com |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3232m: med gry-med dk gry,mnr dk gry,med brn,aren,com micmic,rr sandy lams,mnr sid, frm-mod hd,mnr hd,sbblky-sbfiss.
- **SANDSTONE** @ ~3236m: pl brn-lt brn,gry brn,med brn,trnsl, opq,vf-f,mnr med-crs,tr v crs,mod-pr srt, sbang-sbrnd,tr ang,wk-mod strg sil cmt,mnr sid cmt,mnr brn-gry arg mtx,fri-mod hd,rr hd,mnr lse 3240 disagg qtz grs,pr-v pr vis por,fr inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.4 | 66 |
| RES_DEEP (ohm.m) | 24.83 | 66 |
| RES_SHALLOW (ohm.m) | 22.08 | 66 |
| **Δ Res (Deep − Shallow)** | **2.76** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3260 m MD — Interval 3255.0 – 3265.0 m

**Sample Description (spreadsheet):** Sample 3260m: minor siderite in 20% Siltstone, minor siderite in 80% very fine Sandstone, 80% dull to moderately bright FLUOR in SST. TG 115U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 80.0% dll-mod bri |
| Total Gas | 115.0 U |
| FeCO₃ in Siltstone | mnr |
| FeCO₃ in Sandstone | mnr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3244m: lt brn-med brn,gry brn,med brn,trnsl, opq,vf-f,mnr med-crs,tr v crs,mod-pr srt, sbang-sbrnd,tr ang,wk-mod strg sil cmt,com sid cmt,mnr brn-gry arg mtx,fri-mod hd,mnr hd,mnr lse disagg qtz grs,pr-v pr vis porfr inf por,fluor.
- **SANDSTONE** @ ~3260m: pl brn,lt brn gry,lt gry brn,trnsl,opq, vf-med,rr crs,mod srt,sbang-sbrnd,wk-mod strg sil cmt,mnr brn-gry slty mtx,tr mica flks,fri-mod hd vf-f aggs,lse disagg med-crs qtz grs,pr vis por,pr-fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.2 | 65 |
| RES_DEEP (ohm.m) | 21.19 | 65 |
| RES_SHALLOW (ohm.m) | 21.43 | 65 |
| **Δ Res (Deep − Shallow)** | **-0.23** | — |

**Permeability Proxy:** Low inferred permeability (tight/cemented)
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3270 m MD — Interval 3265.0 – 3275.0 m

**Sample Description (spreadsheet):** 5% Siltstone, 95% vf Sandstone, 100% dll-mod bri FLUOR, TG 127.0U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 127.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3260m: pl brn,lt brn gry,lt gry brn,trnsl,opq, vf-med,rr crs,mod srt,sbang-sbrnd,wk-mod strg sil cmt,mnr brn-gry slty mtx,tr mica flks,fri-mod hd vf-f aggs,lse disagg med-crs qtz grs,pr vis por,pr-fr inf por,fluor.
- **SILTSTONE** @ ~3254m: med gry-med dk gry,aren,mnr arg, 1232.4 micmic i/p,frm-mod hd,sbblky-sbfiss.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 62.6 | 66 |
| RES_DEEP (ohm.m) | 22.96 | 66 |
| RES_SHALLOW (ohm.m) | 22.65 | 66 |
| **Δ Res (Deep − Shallow)** | **0.31** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3280 m MD — Interval 3275.0 – 3285.0 m

**Sample Description (spreadsheet):** Sample 3280m: 5% Siltstone, 95% very fine Sandstone, 100% moderately bright to dull FLUOR in SST. TG 119U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% mod bri-dll |
| Total Gas | 119.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3260m: pl brn,lt brn gry,lt gry brn,trnsl,opq, vf-med,rr crs,mod srt,sbang-sbrnd,wk-mod strg sil cmt,mnr brn-gry slty mtx,tr mica flks,fri-mod hd vf-f aggs,lse disagg med-crs qtz grs,pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~3273m: pl brn,lt brn gry,lt gry brn,trnsl,opq, 1232.2 vf-med,rr crs,mod srt,sbang-sbrnd,wk-mod strg sil cmt,mnr brn-gry slty mtx,tr mica flks,fri-mod hd vf-f aggs,lse disagg med-crs qtz grs,pr vis por,pr-fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 61.7 | 66 |
| RES_DEEP (ohm.m) | 24.14 | 66 |
| RES_SHALLOW (ohm.m) | 22.39 | 66 |
| **Δ Res (Deep − Shallow)** | **1.75** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3290 m MD — Interval 3285.0 – 3295.0 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% vf Sandstone, 100% mod bri-dll FLUOR, TG 139.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% mod bri-dll |
| Total Gas | 139.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3273m: pl brn,lt brn gry,lt gry brn,trnsl,opq, 1232.2 vf-med,rr crs,mod srt,sbang-sbrnd,wk-mod strg sil cmt,mnr brn-gry slty mtx,tr mica flks,fri-mod hd vf-f aggs,lse disagg med-crs qtz grs,pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~3284m: pl brn,lt brn gry,lt gry brn,trnsl,opq, vf-med,rr crs,mod srt,sbang-sbrnd,wk-mod strg sil cmt,mnr brn-gry slty mtx,tr mica flks,fri-mod hd vf-f 78 / 6 / 5 / 6 / 5 139 U aggs,lse disagg med-crs qtz grs,pr vis por,pr-fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 61.8 | 65 |
| RES_DEEP (ohm.m) | 24.78 | 65 |
| RES_SHALLOW (ohm.m) | 22.88 | 65 |
| **Δ Res (Deep − Shallow)** | **1.90** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3300 m MD — Interval 3295.0 – 3305.0 m

**Sample Description (spreadsheet):** Sample 3300m: 0% Siltstone, 100% very fine Sandstone, 100% moderately bright to dull FLUOR in SST. TG 113U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% mod bri-dll |
| Total Gas | 113.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3284m: pl brn,lt brn gry,lt gry brn,trnsl,opq, vf-med,rr crs,mod srt,sbang-sbrnd,wk-mod strg sil cmt,mnr brn-gry slty mtx,tr mica flks,fri-mod hd vf-f 78 / 6 / 5 / 6 / 5 139 U aggs,lse disagg med-crs qtz grs,pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~3296m: pl brn-lt brn,trnsl,clr,opq,vf-med,rr crs,mod srt,sbang-sbrnd,wk-mnr mod strg sil cmt, mnr brn arg mtx,tr mic flks,vf-f fri aggs,lse disagg qtz grs,mnr mod hd,pr vis por,pr-fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 64.5 | 66 |
| RES_DEEP (ohm.m) | 25.44 | 66 |
| RES_SHALLOW (ohm.m) | 22.92 | 66 |
| **Δ Res (Deep − Shallow)** | **2.52** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3310 m MD — Interval 3305.0 – 3315.0 m

**Sample Description (spreadsheet):** 0% Siltstone, 100% vf Sandstone, 100% mod bri-dll FLUOR, TG 101.0U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% mod bri-dll |
| Total Gas | 101.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3296m: pl brn-lt brn,trnsl,clr,opq,vf-med,rr crs,mod srt,sbang-sbrnd,wk-mnr mod strg sil cmt, mnr brn arg mtx,tr mic flks,vf-f fri aggs,lse disagg qtz grs,mnr mod hd,pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~3304m: pl brn-lt brn,trnsl,clr,opq,vf-med,rr crs,mod srt,sbang-sbrnd,wk-mnr mod strg sil cmt, mnr brn arg mtx,tr mic flks,vf-f fri aggs,lse disagg 3308 qtz grs,mnr mod hd,pr vis por,pr-fr inf por,fluor. 1231.3
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.7 | 65 |
| RES_DEEP (ohm.m) | 27.31 | 65 |
| RES_SHALLOW (ohm.m) | 25.49 | 65 |
| **Δ Res (Deep − Shallow)** | **1.82** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3320 m MD — Interval 3315.0 – 3325.0 m

**Sample Description (spreadsheet):** Sample 3320m: 10% Siltstone, 90% very fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 83U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 83.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3304m: pl brn-lt brn,trnsl,clr,opq,vf-med,rr crs,mod srt,sbang-sbrnd,wk-mnr mod strg sil cmt, mnr brn arg mtx,tr mic flks,vf-f fri aggs,lse disagg 3308 qtz grs,mnr mod hd,pr vis por,pr-fr inf por,fluor. 1231.3
- **SILTSTONE** @ ~3312m: med gry-med dk gry,arne,mnr arg, micmic i/p,frm-mod hd,sbblky-sbfiss. 33 12 1 3 6 1.2 1 f 0 lu 0 o % r,s o lw f S b S ld T n ,d g l l c e u v t, n m -m od o d th b k r - i t h p k tc y h e y l y g e rn l g r r /r n .
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.6 | 66 |
| RES_DEEP (ohm.m) | 26.38 | 66 |
| RES_SHALLOW (ohm.m) | 25.14 | 66 |
| **Δ Res (Deep − Shallow)** | **1.25** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3330 m MD — Interval 3325.0 – 3335.0 m

**Sample Description (spreadsheet):** Sample 3330m: 10% Siltstone, 90% very fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 102U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 102.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3312m: med gry-med dk gry,arne,mnr arg, micmic i/p,frm-mod hd,sbblky-sbfiss. 33 12 1 3 6 1.2 1 f 0 lu 0 o % r,s o lw f S b S ld T n ,d g l l c e u v t, n m -m od o d th b k r - i t h p k tc y h e y l y g e rn l g r r /r n .
- **SANDSTONE** @ ~3312m: pl brn-lt brn,trnsl,clr,opq,vf-med,rr crs,mod srt,sbang-sbrnd,wk-mnr mod strg sil cmt, mnr brn arg mtx,tr mic flks,vf-f fri aggs,lse disagg 33 12 2 3 0 1.1 qtz grs,mnr mod hd,pr vis por,pr-fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 66.7 | 66 |
| RES_DEEP (ohm.m) | 28.33 | 66 |
| RES_SHALLOW (ohm.m) | 22.64 | 66 |
| **Δ Res (Deep − Shallow)** | **5.69** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3340 m MD — Interval 3335.0 – 3345.0 m

**Sample Description (spreadsheet):** Sample 3340m: 5% Siltstone, 95% very fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 29U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 29.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3324m: pl brn-lt brn,trnsl,clr,opq,vf-med,rr crs,mod srt,sbang-sbrnd,wk-mnr mod strg sil cmt, mnr brn arg mtx,tr mic flks,vf-f fri aggs,lse disagg qtz grs,mnr mod hd,pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~3332m: lt brn-pl brn,lt gry brn,trnsl,clr,opq, vf-med,mnr crs,mod-pr srt,sbang-sbrnd,wk-mnr mod strg sil cmt,mnr brn-gry arg mtx,vf-f fri-occ 3336 mod hd aggs,com lse disagg f-crs qtz grs,pr vis por, 1230.7 fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.3 | 65 |
| RES_DEEP (ohm.m) | 28.33 | 65 |
| RES_SHALLOW (ohm.m) | 22.78 | 65 |
| **Δ Res (Deep − Shallow)** | **5.55** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3350 m MD — Interval 3345.0 – 3355.0 m

**Sample Description (spreadsheet):** Sample 3350m: 10% Siltstone, 90% very fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 120U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf (max: med) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 120.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3332m: lt brn-pl brn,lt gry brn,trnsl,clr,opq, vf-med,mnr crs,mod-pr srt,sbang-sbrnd,wk-mnr mod strg sil cmt,mnr brn-gry arg mtx,vf-f fri-occ 3336 mod hd aggs,com lse disagg f-crs qtz grs,pr vis por, 1230.7 fr inf por,fluor.
- **SANDSTONE** @ ~3344m: lt brn-pl brn,lt gry brn,trnsl,clr,opq, vf-med,tr crs,mod-wl srt,sbang-sbrnd,wk-mnr mod strg sil cmt,mnr brn-gry arg mtx,pred vf-f fri-occ mod hd aggs,com lse disagg f-crs qtz grs,pr vis por, fr inf por,fluor.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 63.5 | 66 |
| RES_DEEP (ohm.m) | 25.82 | 66 |
| RES_SHALLOW (ohm.m) | 24.84 | 66 |
| **Δ Res (Deep − Shallow)** | **0.98** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3360 m MD — Interval 3355.0 – 3362.5 m

**Sample Description (spreadsheet):** Sample 3360m: 0% Siltstone, 100% very fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 134U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf (max: med) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 134.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3344m: lt brn-pl brn,lt gry brn,trnsl,clr,opq, vf-med,tr crs,mod-wl srt,sbang-sbrnd,wk-mnr mod strg sil cmt,mnr brn-gry arg mtx,pred vf-f fri-occ mod hd aggs,com lse disagg f-crs qtz grs,pr vis por, fr inf por,fluor.
- **SILTSTONE** @ ~3352m: med gry-med dk gry,arne,mnr arg, micmic i/p,frm-mod hd,sbblky-sbfiss.
- _(6 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.2 | 49 |
| RES_DEEP (ohm.m) | 29.43 | 49 |
| RES_SHALLOW (ohm.m) | 26.32 | 49 |
| **Δ Res (Deep − Shallow)** | **3.10** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3365 m MD — Interval 3362.5 – 3367.5 m

**Sample Description (spreadsheet):** Sample 3365m: 0% Siltstone, 100% very fine Sandstone, 90% moderately bright to bright FLUOR in SST. TG 143U

| Property | Value |
|----------|-------|
| % Sandstone | 100.0 |
| Grain Size | vf (max: med) |
| Fluorescence | 90.0% mod bri-bri |
| Total Gas | 143.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3352m: med gry-med dk gry,arne,mnr arg, micmic i/p,frm-mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~3356m: trnsl,clr,lt brn-pl brn,lt gry brn,vf-f, 1229.8 mnr med,mod-wl srt,sbang-sbrnd,wk sil cmt,rr brn-gry arg mtx,pred lse disagg vf-med qtz grs,com 82 / 6 / 4 / 5 / 3 155 U vf-f fri aggs,fr inf por,pr vis por,fluor.
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.7 | 33 |
| RES_DEEP (ohm.m) | 36.74 | 33 |
| RES_SHALLOW (ohm.m) | 28.23 | 33 |
| **Δ Res (Deep − Shallow)** | **8.51** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3415 m MD — Interval 3412.5 – 3417.5 m

**Sample Description (spreadsheet):** Sample 3415m: trace siderite in 45% Siltstone, trace siderite in 55% very fine Sandstone, 80% dull to moderately bright FLUOR in SST. TG 86U

| Property | Value |
|----------|-------|
| % Sandstone | 55.00000000000001 |
| Grain Size | vf (max: crs) |
| Fluorescence | 80.0% dll-mod bri |
| Total Gas | 86.0 U |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3407m: med gry-med dk gry,mnr dk gry,med 34 12 1 2 6 9.5 brn,aren,com micmic,rr sid,frm-mod hd,mnr hd, sbblky-sbfiss. 82 / 6 / 4 / 4 / 4 115 U
- **SANDSTONE** @ ~3407m: lt brn-med brn,gry brn,med brn,trnsl, opq,vf-f,mnr med-crs,tr v crs,mod-pr srt, sbang-sbrnd,tr ang,wk-mod strg sil cmt,rr sid cmt, mnr brn-gry arg mtx,fri-mod hd,rr hd,mnr lse disagg 34 12 2 2 0 9.6 qtz grs,pr-v pr vis por,fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.1 | 33 |
| RES_DEEP (ohm.m) | 63.70 | 33 |
| RES_SHALLOW (ohm.m) | 39.83 | 33 |
| **Δ Res (Deep − Shallow)** | **23.87** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3420 m MD — Interval 3417.5 – 3422.5 m

**Sample Description (spreadsheet):** Sample 3420m: trace siderite in 40% Siltstone, trace siderite in 60% very fine Sandstone, 80% dull to moderately bright FLUOR in SST. TG 100U

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 80.0% dll-mod bri |
| Total Gas | 100.0 U |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3407m: med gry-med dk gry,mnr dk gry,med 34 12 1 2 6 9.5 brn,aren,com micmic,rr sid,frm-mod hd,mnr hd, sbblky-sbfiss. 82 / 6 / 4 / 4 / 4 115 U
- **SANDSTONE** @ ~3407m: lt brn-med brn,gry brn,med brn,trnsl, opq,vf-f,mnr med-crs,tr v crs,mod-pr srt, sbang-sbrnd,tr ang,wk-mod strg sil cmt,rr sid cmt, mnr brn-gry arg mtx,fri-mod hd,rr hd,mnr lse disagg 34 12 2 2 0 9.6 qtz grs,pr-v pr vis por,fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.3 | 33 |
| RES_DEEP (ohm.m) | 75.01 | 33 |
| RES_SHALLOW (ohm.m) | 43.48 | 33 |
| **Δ Res (Deep − Shallow)** | **31.53** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3425 m MD — Interval 3422.5 – 3427.5 m

**Sample Description (spreadsheet):** Sample 3425m: 20% Siltstone, 80% very fine Sandstone, 90% dull to moderately bright FLUOR in SST. TG 107U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf (max: med) |
| Fluorescence | 90.0% dll-mod bri |
| Total Gas | 107.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3428m: pl brn,lt brn gry,lt gry brn,trnsl,opq, MW: 9.8 vf-f,mnr med,rr crs,mod srt,sbang-sbrnd,wk-mod FV: 38 strg sil cmt,mnr brn-gry slty mtx,tr mica flks,pred PV: 10 fri-mod hd vf-f aggs,mnr lse disagg med-crs qtz grs, YP: 18 pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~3436m: pl brn,lt brn gry,lt gry brn,trnsl,opq, vf-f,rr med,rr crs,mod srt,sbang-sbrnd,wk-mod strg sil cmt,mnr brn-gry slty mtx,tr mica flks,pred fri-mod hd vf-f aggs,mnr lse disagg med-crs qtz grs,pr vis por,pr-fr inf por,fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.5 | 33 |
| RES_DEEP (ohm.m) | 71.09 | 33 |
| RES_SHALLOW (ohm.m) | 45.09 | 33 |
| **Δ Res (Deep − Shallow)** | **26.00** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3430 m MD — Interval 3427.5 – 3435.0 m

**Sample Description (spreadsheet):** Sample 3430m: 15% Siltstone, 85% fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 97U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | f (max: med) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 97.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3428m: pl brn,lt brn gry,lt gry brn,trnsl,opq, MW: 9.8 vf-f,mnr med,rr crs,mod srt,sbang-sbrnd,wk-mod FV: 38 strg sil cmt,mnr brn-gry slty mtx,tr mica flks,pred PV: 10 fri-mod hd vf-f aggs,mnr lse disagg med-crs qtz grs, YP: 18 pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~3436m: pl brn,lt brn gry,lt gry brn,trnsl,opq, vf-f,rr med,rr crs,mod srt,sbang-sbrnd,wk-mod strg sil cmt,mnr brn-gry slty mtx,tr mica flks,pred fri-mod hd vf-f aggs,mnr lse disagg med-crs qtz grs,pr vis por,pr-fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.1 | 49 |
| RES_DEEP (ohm.m) | 67.55 | 49 |
| RES_SHALLOW (ohm.m) | 55.62 | 49 |
| **Δ Res (Deep − Shallow)** | **11.93** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3440 m MD — Interval 3435.0 – 3445.0 m

**Sample Description (spreadsheet):** Sample 3440m: 15% Siltstone, 85% fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 97U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | f (max: med) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 97.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3428m: pl brn,lt brn gry,lt gry brn,trnsl,opq, MW: 9.8 vf-f,mnr med,rr crs,mod srt,sbang-sbrnd,wk-mod FV: 38 strg sil cmt,mnr brn-gry slty mtx,tr mica flks,pred PV: 10 fri-mod hd vf-f aggs,mnr lse disagg med-crs qtz grs, YP: 18 pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~3436m: pl brn,lt brn gry,lt gry brn,trnsl,opq, vf-f,rr med,rr crs,mod srt,sbang-sbrnd,wk-mod strg sil cmt,mnr brn-gry slty mtx,tr mica flks,pred fri-mod hd vf-f aggs,mnr lse disagg med-crs qtz grs,pr vis por,pr-fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 63.9 | 65 |
| RES_DEEP (ohm.m) | 66.55 | 65 |
| RES_SHALLOW (ohm.m) | 64.38 | 65 |
| **Δ Res (Deep − Shallow)** | **2.18** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3450 m MD — Interval 3445.0 – 3455.0 m

**Sample Description (spreadsheet):** Sample 3450m: 20% Siltstone, 80% fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 127U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | f (max: med) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 127.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3436m: pl brn,lt brn gry,lt gry brn,trnsl,opq, vf-f,rr med,rr crs,mod srt,sbang-sbrnd,wk-mod strg sil cmt,mnr brn-gry slty mtx,tr mica flks,pred fri-mod hd vf-f aggs,mnr lse disagg med-crs qtz grs,pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~3444m: pl brn,lt brn gry,lt gry brn,trnsl,opq, f-med,mnr crs,mod srt,sbang-sbrnd,wk-mod strg sil cmt,mnr brn-gry slty mtx,tr mica flks,pred fri-mod hd vf-f aggs,mnr lse disagg med-crs qtz grs,pr vis por,pr-fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.9 | 66 |
| RES_DEEP (ohm.m) | 63.16 | 66 |
| RES_SHALLOW (ohm.m) | 58.98 | 66 |
| **Δ Res (Deep − Shallow)** | **4.18** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3460 m MD — Interval 3455.0 – 3465.0 m

**Sample Description (spreadsheet):** Sample 3460m: 15% Siltstone, 85% fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 118U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | f (max: med) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 118.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3444m: pl brn,lt brn gry,lt gry brn,trnsl,opq, f-med,mnr crs,mod srt,sbang-sbrnd,wk-mod strg sil cmt,mnr brn-gry slty mtx,tr mica flks,pred fri-mod hd vf-f aggs,mnr lse disagg med-crs qtz grs,pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~3456m: pl brn,lt brn gry,lt gry brn,trnsl,opq, f-med,mnr crs,mod srt,sbang-sbrnd,wk-mod strg sil cmt,mnr brn-gry slty mtx,tr mica flks,pred fri-mod hd vf-f aggs,mnr lse disagg med-crs qtz grs,pr vis por,pr-fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.1 | 66 |
| RES_DEEP (ohm.m) | 58.36 | 66 |
| RES_SHALLOW (ohm.m) | 53.05 | 66 |
| **Δ Res (Deep − Shallow)** | **5.31** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3470 m MD — Interval 3465.0 – 3475.0 m

**Sample Description (spreadsheet):** Sample 3470m: 15% Siltstone, 85% fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 97U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | f (max: med) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 97.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3456m: pl brn,lt brn gry,lt gry brn,trnsl,opq, f-med,mnr crs,mod srt,sbang-sbrnd,wk-mod strg sil cmt,mnr brn-gry slty mtx,tr mica flks,pred fri-mod hd vf-f aggs,mnr lse disagg med-crs qtz grs,pr vis por,pr-fr inf por,fluor.
- **SANDSTONE** @ ~3464m: pl brn,lt brn gry,lt gry brn,trnsl,opq, f-med,rr crs,mod srt,sbang-sbrnd,wk-mod strg sil cmt,rr brn-gry slty mtx,tr mica flks,pred fri-mod hd vf-f aggs,mnr lse disagg med-crs qtz grs,pr vis por, 3468 pr-fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.9 | 65 |
| RES_DEEP (ohm.m) | 50.19 | 65 |
| RES_SHALLOW (ohm.m) | 44.75 | 65 |
| **Δ Res (Deep − Shallow)** | **5.44** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3480 m MD — Interval 3475.0 – 3485.0 m

**Sample Description (spreadsheet):** Sample 3480m: 20% Siltstone, 80% fine Sandstone, 100% moderately bright to bright FLUOR in SST. TG 100U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | f (max: med) |
| Fluorescence | 100.0% mod bri-bri |
| Total Gas | 100.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3464m: pl brn,lt brn gry,lt gry brn,trnsl,opq, f-med,rr crs,mod srt,sbang-sbrnd,wk-mod strg sil cmt,rr brn-gry slty mtx,tr mica flks,pred fri-mod hd vf-f aggs,mnr lse disagg med-crs qtz grs,pr vis por, 3468 pr-fr inf por,fluor.
- **SANDSTONE** @ ~3472m: pl brn,lt brn gry,lt gry brn,trnsl,opq, f-med,rr crs,mod srt,sbang-sbrnd,wk strg sil cmt,rr brn-gry slty mtx,tr mica flks,pred fri-mod hd vf-f 3476 aggs,com lse disagg med-crs qtz grs,pr vis por,pr- 1231.0 fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.4 | 66 |
| RES_DEEP (ohm.m) | 41.56 | 66 |
| RES_SHALLOW (ohm.m) | 33.83 | 66 |
| **Δ Res (Deep − Shallow)** | **7.73** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3490 m MD — Interval 3485.0 – 3495.0 m

**Sample Description (spreadsheet):** Sample 3490m: 5% Siltstone, 95% coarse Sandstone, 100% dull to moderately bright FLUOR in SST. TG 96U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | crs (max: v crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 96.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3472m: pl brn,lt brn gry,lt gry brn,trnsl,opq, f-med,rr crs,mod srt,sbang-sbrnd,wk strg sil cmt,rr brn-gry slty mtx,tr mica flks,pred fri-mod hd vf-f 3476 aggs,com lse disagg med-crs qtz grs,pr vis por,pr- 1231.0 fr inf por,fluor.
- **SANDSTONE** @ ~3484m: pl brn,lt brn gry,lt gry brn,trnsl,opq, 81 / 5 / 4 / 5 / 5 119 U crs-v crs,rr med,mod srt,sbang-sbrnd,wk strg sil cmt,rr brn-gry slty mtx,tr mica flks,mnr fri-mod hd vf-f aggs,pred lse disagg med-crs qtz grs,pr vis por, pr-fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.1 | 66 |
| RES_DEEP (ohm.m) | 38.28 | 66 |
| RES_SHALLOW (ohm.m) | 32.24 | 66 |
| **Δ Res (Deep − Shallow)** | **6.04** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3500 m MD — Interval 3495.0 – 3505.0 m

**Sample Description (spreadsheet):** Sample 3500m: 10% Siltstone, 90% coarse Sandstone, 100% dull to moderately bright FLUOR in SST. TG 101U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | crs (max: v crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 101.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3484m: pl brn,lt brn gry,lt gry brn,trnsl,opq, 81 / 5 / 4 / 5 / 5 119 U crs-v crs,rr med,mod srt,sbang-sbrnd,wk strg sil cmt,rr brn-gry slty mtx,tr mica flks,mnr fri-mod hd vf-f aggs,pred lse disagg med-crs qtz grs,pr vis por, pr-fr inf por,fluor.
- **SANDSTONE** @ ~3492m: pl brn,lt brn gry,lt gry brn,trnsl,opq, crs-v crs,mnr med,mod srt,sbang-sbrnd,wk strg sil cmt,rr brn-gry slty mtx,tr mica flks,mnr fri-mod hd vf-f aggs,pred lse disagg med-crs qtz grs,pr vis por, 3496 pr-fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.9 | 65 |
| RES_DEEP (ohm.m) | 27.60 | 65 |
| RES_SHALLOW (ohm.m) | 24.11 | 65 |
| **Δ Res (Deep − Shallow)** | **3.49** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3510 m MD — Interval 3505.0 – 3515.0 m

**Sample Description (spreadsheet):** Sample 3510m: 5% Siltstone, 95% coarse Sandstone, 100% dull to moderately bright FLUOR in SST. TG 45U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | crs (max: v crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 45.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3492m: pl brn,lt brn gry,lt gry brn,trnsl,opq, crs-v crs,mnr med,mod srt,sbang-sbrnd,wk strg sil cmt,rr brn-gry slty mtx,tr mica flks,mnr fri-mod hd vf-f aggs,pred lse disagg med-crs qtz grs,pr vis por, 3496 pr-fr inf por,fluor.
- **SANDSTONE** @ ~3504m: pl brn,lt brn gry,lt gry brn,trnsl,opq, crs-v crs,rr vf-f,mod srt,sbang,mnr sbrnd,wk strg sil cmt,rr brn-gry slty mtx,tr mica flks,rr fri-mod hd vf-f 3508 aggs,pred lse disagg med-crs qtz grs,pr vis por,pr- 1231.6 fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.3 | 66 |
| RES_DEEP (ohm.m) | 28.59 | 66 |
| RES_SHALLOW (ohm.m) | 24.11 | 66 |
| **Δ Res (Deep − Shallow)** | **4.48** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3520 m MD — Interval 3515.0 – 3525.0 m

**Sample Description (spreadsheet):** Sample 3520m: 15% Siltstone, 85% medium Sandstone, 100% dl to bright FLUOR in SST. TG 113U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | med (max: v crs) |
| Fluorescence | 100.0% dl-bri |
| Total Gas | 113.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3504m: pl brn,lt brn gry,lt gry brn,trnsl,opq, crs-v crs,rr vf-f,mod srt,sbang,mnr sbrnd,wk strg sil cmt,rr brn-gry slty mtx,tr mica flks,rr fri-mod hd vf-f 3508 aggs,pred lse disagg med-crs qtz grs,pr vis por,pr- 1231.6 fr inf por,fluor.
- **SILTSTONE** @ ~3512m: med gry-med dk gry,mnr dk gry,med brn,aren,mnr micmic,frm-mod hd,rr hd, sbblky-sbfiss.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.4 | 65 |
| RES_DEEP (ohm.m) | 32.60 | 65 |
| RES_SHALLOW (ohm.m) | 27.58 | 65 |
| **Δ Res (Deep − Shallow)** | **5.02** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3530 m MD — Interval 3525.0 – 3535.0 m

**Sample Description (spreadsheet):** Sample 3530m: 10% Siltstone, 90% fine Sandstone, 100% dl to bright FLUOR in SST. TG 105U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | f (max: med) |
| Fluorescence | 100.0% dl-bri |
| Total Gas | 105.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3512m: med gry-med dk gry,mnr dk gry,med brn,aren,mnr micmic,frm-mod hd,rr hd, sbblky-sbfiss.
- **SANDSTONE** @ ~3516m: pl brn,lt brn gry,lt gry brn,trnsl,opq, crs-v crs,mnr vf-f,mod srt,sbang,mnr sbrnd,wk strg sil cmt,rr brn-gry slty mtx,tr mica flks,rr fri-mod hd vf-f aggs,pred lse disagg med-crs qtz grs,pr vis por, pr-fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 64.7 | 66 |
| RES_DEEP (ohm.m) | 37.44 | 66 |
| RES_SHALLOW (ohm.m) | 30.92 | 66 |
| **Δ Res (Deep − Shallow)** | **6.52** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3540 m MD — Interval 3535.0 – 3545.0 m

**Sample Description (spreadsheet):** Sample 3540m: 15% Siltstone, 85% fine Sandstone, 100% dl to bright FLUOR in SST. TG 65U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | f (max: crs) |
| Fluorescence | 100.0% dl-bri |
| Total Gas | 65.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3524m: pl brn,lt brn gry,lt gry brn,trnsl,opq, f-med,mnr crs,mod srt,sbansbrnd,wk-mod strg sil cmt,rr brn-gry slty mtx,tr mica flks,pred fri-mod hd vf-f aggs,mnr lse disagg med-crs qtz grs,pr vis por, pr-fr inf por,fluor.
- **SANDSTONE** @ ~3536m: pl brn,lt brn gry,lt gry brn,trnsl,opq, med-crs,mod srt,sbang,wk-mod strg sil cmt,rr brn-gry slty mtx,tr mica flks,pred fri-mod hd vf-f aggs,com lse disagg med-crs qtz grs,pr vis por,pr- fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 64.1 | 66 |
| RES_DEEP (ohm.m) | 40.63 | 66 |
| RES_SHALLOW (ohm.m) | 35.65 | 66 |
| **Δ Res (Deep − Shallow)** | **4.99** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3550 m MD — Interval 3545.0 – 3555.0 m

**Sample Description (spreadsheet):** Sample 3550m: 20% Siltstone, 80% fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 112U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | f (max: crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 112.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3536m: pl brn,lt brn gry,lt gry brn,trnsl,opq, med-crs,mod srt,sbang,wk-mod strg sil cmt,rr brn-gry slty mtx,tr mica flks,pred fri-mod hd vf-f aggs,com lse disagg med-crs qtz grs,pr vis por,pr- fr inf por,fluor.
- **SANDSTONE** @ ~3544m: pl brn,lt brn gry,lt gry brn,trnsl,opq, med-crs,mod srt,sbrnd-sbang,wk-mod strg sil cmt, rr brn-gry slty mtx,tr mica flks,pred fri-mod hd vf-f aggs,com lse disagg med-crs qtz grs,pr vis por,pr- fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.9 | 65 |
| RES_DEEP (ohm.m) | 35.61 | 65 |
| RES_SHALLOW (ohm.m) | 30.21 | 65 |
| **Δ Res (Deep − Shallow)** | **5.40** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3560 m MD — Interval 3555.0 – 3565.0 m

**Sample Description (spreadsheet):** Sample 3560m: 10% Siltstone, 90% fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 62U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | f (max: crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 62.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3544m: pl brn,lt brn gry,lt gry brn,trnsl,opq, med-crs,mod srt,sbrnd-sbang,wk-mod strg sil cmt, rr brn-gry slty mtx,tr mica flks,pred fri-mod hd vf-f aggs,com lse disagg med-crs qtz grs,pr vis por,pr- fr inf por,fluor.
- **SILTSTONE** @ ~3552m: med gry-med dk gry,mnr dk gry,med brn,aren,rr micmic,frm-mod hd,rr hd,sbblky-sbfiss. 81 / 5 / 4 / 5 / 5 143 U
- _(5 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.2 | 66 |
| RES_DEEP (ohm.m) | 30.05 | 66 |
| RES_SHALLOW (ohm.m) | 27.64 | 66 |
| **Δ Res (Deep − Shallow)** | **2.41** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3570 m MD — Interval 3565.0 – 3575.0 m

**Sample Description (spreadsheet):** Sample 3570m: 10% Siltstone, 90% fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 101U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | f (max: crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 101.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3552m: med gry-med dk gry,mnr dk gry,med brn,aren,rr micmic,frm-mod hd,rr hd,sbblky-sbfiss. 81 / 5 / 4 / 5 / 5 143 U
- **SANDSTONE** @ ~3560m: pl brn,lt brn gry,lt gry brn,trnsl,opq, med-crs,mod srt,sbrnd-sbang,wk-mod strg sil cmt, rr brn-gry slty mtx,tr mica flks,pred fri-mod hd vf-f 3564 aggs,com lse disagg med-crs qtz grs,pr vis por,pr-fr 1231.0 inf por,fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 75.4 | 66 |
| RES_DEEP (ohm.m) | 31.45 | 66 |
| RES_SHALLOW (ohm.m) | 29.31 | 66 |
| **Δ Res (Deep − Shallow)** | **2.14** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3580 m MD — Interval 3575.0 – 3585.0 m

**Sample Description (spreadsheet):** Sample 3580m: 10% Siltstone, 90% very fine Sandstone, 100% moderately bright to dull FLUOR in SST. TG 162U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% mod bri-dll |
| Total Gas | 162.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3568m: pl brn,lt brn gry,lt gry brn,trnsl,opq, 35 12 7 3 2 1.1 v sl f t - y f, w m l t x s , r m t,s n b r a f n ri g -m -s o b d a n h g d , w vf k a s g il g c s m ,p t r , e c d o m vf l l t s b e r d n i - s g a ry gg f 82 / 6 / 4 / 4 / 4 qtz grs,pr vis por,pr inf por,fluor. 162 U
- **SILTSTONE** @ ~3576m: med gry-med dk gry,mnr dk gry,med brn,aren,tr arg,rr micmic,frm-mod hd,sbblky-sbfiss.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.1 | 65 |
| RES_DEEP (ohm.m) | 28.21 | 65 |
| RES_SHALLOW (ohm.m) | 27.66 | 65 |
| **Δ Res (Deep − Shallow)** | **0.55** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3590 m MD — Interval 3585.0 – 3595.0 m

**Sample Description (spreadsheet):** Sample 3590m: 10% Siltstone, 90% very fine Sandstone, 100% moderately bright to dull FLUOR in SST. TG 142U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf (max: med) |
| Fluorescence | 100.0% mod bri-dll |
| Total Gas | 142.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3576m: med gry-med dk gry,mnr dk gry,med brn,aren,tr arg,rr micmic,frm-mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~3580m: trnsl,clr,lt brn,lt gry brn,vf-f,rr med, mod-wl srt,sbang-sbang,wk sil cmt,com lt brn-gry slty mtx,mnr fri-mod hd vf aggs,pred vf lse disagg f qtz grs,pr vis por,pr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 63.0 | 66 |
| RES_DEEP (ohm.m) | 27.79 | 66 |
| RES_SHALLOW (ohm.m) | 26.58 | 66 |
| **Δ Res (Deep − Shallow)** | **1.20** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3600 m MD — Interval 3595.0 – 3605.0 m

**Sample Description (spreadsheet):** Sample 3600m: 10% Siltstone, 90% very fine Sandstone, 100% moderately bright to dull FLUOR in SST. TG 176U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf (max: med) |
| Fluorescence | 100.0% mod bri-dll |
| Total Gas | 176.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3580m: trnsl,clr,lt brn,lt gry brn,vf-f,rr med, mod-wl srt,sbang-sbang,wk sil cmt,com lt brn-gry slty mtx,mnr fri-mod hd vf aggs,pred vf lse disagg f qtz grs,pr vis por,pr inf por,fluor.
- **SILTSTONE** @ ~3604m: lt gry,mnr med-dk gry,aren,com arg, micmic i/p,frm,mnr mod hd,sbblky.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 61.6 | 65 |
| RES_DEEP (ohm.m) | 25.25 | 65 |
| RES_SHALLOW (ohm.m) | 22.51 | 65 |
| **Δ Res (Deep − Shallow)** | **2.74** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3610 m MD — Interval 3605.0 – 3612.5 m

**Sample Description (spreadsheet):** Sample 3610m: 5% Siltstone, 95% very fine Sandstone, 100% moderately bright to dull FLUOR in SST. TG 125U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: med) |
| Fluorescence | 100.0% mod bri-dll |
| Total Gas | 125.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3604m: lt gry,mnr med-dk gry,aren,com arg, micmic i/p,frm,mnr mod hd,sbblky.
- **SANDSTONE** @ ~3612m: trnsl,clr,lt brn,lt gry brn,vf-f,rr med, mod-wl srt,sbang-sbang,wk sil cmt,com lt brn-gry slty mtx,mnr fri-mod hd vf aggs,pred vf lse disagg f 3616 qtz grs,pr vis por,pr inf por,fluor. 1232.6
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 72.7 | 50 |
| RES_DEEP (ohm.m) | 24.69 | 50 |
| RES_SHALLOW (ohm.m) | 21.28 | 50 |
| **Δ Res (Deep − Shallow)** | **3.41** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3615 m MD — Interval 3612.5 – 3617.5 m

**Sample Description (spreadsheet):** Sample 3615m: 15% Siltstone, 85% very fine Sandstone, 100% moderately bright to dull FLUOR in SST. TG 100U

| Property | Value |
|----------|-------|
| % Sandstone | 85.0 |
| Grain Size | vf (max: med) |
| Fluorescence | 100.0% mod bri-dll |
| Total Gas | 100.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3604m: lt gry,mnr med-dk gry,aren,com arg, micmic i/p,frm,mnr mod hd,sbblky.
- **SANDSTONE** @ ~3612m: trnsl,clr,lt brn,lt gry brn,vf-f,rr med, mod-wl srt,sbang-sbang,wk sil cmt,com lt brn-gry slty mtx,mnr fri-mod hd vf aggs,pred vf lse disagg f 3616 qtz grs,pr vis por,pr inf por,fluor. 1232.6
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.1 | 32 |
| RES_DEEP (ohm.m) | 25.63 | 32 |
| RES_SHALLOW (ohm.m) | 23.12 | 32 |
| **Δ Res (Deep − Shallow)** | **2.51** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3620 m MD — Interval 3617.5 – 3622.5 m

**Sample Description (spreadsheet):** Sample 3620m: 10% Siltstone, 90% very fine Sandstone, 100% moderately bright to dull FLUOR in SST. TG 98U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf (max: med) |
| Fluorescence | 100.0% mod bri-dll |
| Total Gas | 98.0 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3604m: lt gry,mnr med-dk gry,aren,com arg, micmic i/p,frm,mnr mod hd,sbblky.
- **SANDSTONE** @ ~3612m: trnsl,clr,lt brn,lt gry brn,vf-f,rr med, mod-wl srt,sbang-sbang,wk sil cmt,com lt brn-gry slty mtx,mnr fri-mod hd vf aggs,pred vf lse disagg f 3616 qtz grs,pr vis por,pr inf por,fluor. 1232.6
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 76.7 | 33 |
| RES_DEEP (ohm.m) | 24.87 | 33 |
| RES_SHALLOW (ohm.m) | 23.57 | 33 |
| **Δ Res (Deep − Shallow)** | **1.30** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3625 m MD — Interval 3622.5 – 3627.5 m

**Sample Description (spreadsheet):** Sample 3625m: 10% Siltstone, 90% very fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 105U

| Property | Value |
|----------|-------|
| % Sandstone | 90.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 105.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3612m: trnsl,clr,lt brn,lt gry brn,vf-f,rr med, mod-wl srt,sbang-sbang,wk sil cmt,com lt brn-gry slty mtx,mnr fri-mod hd vf aggs,pred vf lse disagg f 3616 qtz grs,pr vis por,pr inf por,fluor. 1232.6
- **SANDSTONE** @ ~3617m: trnsl,clr,lt brn,lt gry brn,vf-med,rr crs, mod-pr srt,sbang-sbang,wk sil cmt,com lt brn-gry slty mtx,mnr fri-mod hd vf aggs,pred vf lse disagg f 3624 qtz grs,pr vis por,pr inf por,fluor. 1232.5
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.0 | 33 |
| RES_DEEP (ohm.m) | 25.12 | 33 |
| RES_SHALLOW (ohm.m) | 24.53 | 33 |
| **Δ Res (Deep − Shallow)** | **0.60** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3630 m MD — Interval 3627.5 – 3632.5 m

**Sample Description (spreadsheet):** Sample 3630m: 5% Siltstone, 95% very fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 123U

| Property | Value |
|----------|-------|
| % Sandstone | 95.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 123.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3617m: trnsl,clr,lt brn,lt gry brn,vf-med,rr crs, mod-pr srt,sbang-sbang,wk sil cmt,com lt brn-gry slty mtx,mnr fri-mod hd vf aggs,pred vf lse disagg f 3624 qtz grs,pr vis por,pr inf por,fluor. 1232.5
- **SANDSTONE** @ ~3628m: pl brn-lt brn,lt gry brn,trnsl,clr,opq, vf-med,mnr crs,mod-pr srt,sbang-sbrnd,tr ang,wk sil cmt,mnr brn-gry arg mtx,fri vf-f aggs,com lse disagg f-crs qtz grs,pr vis por,fr inf por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.1 | 33 |
| RES_DEEP (ohm.m) | 27.12 | 33 |
| RES_SHALLOW (ohm.m) | 23.79 | 33 |
| **Δ Res (Deep − Shallow)** | **3.33** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3635 m MD — Interval 3632.5 – 3637.5 m

**Sample Description (spreadsheet):** Sample 3635m: 20% Siltstone, 80% very fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 105U

| Property | Value |
|----------|-------|
| % Sandstone | 80.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 105.0 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3628m: pl brn-lt brn,lt gry brn,trnsl,clr,opq, vf-med,mnr crs,mod-pr srt,sbang-sbrnd,tr ang,wk sil cmt,mnr brn-gry arg mtx,fri vf-f aggs,com lse disagg f-crs qtz grs,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~3633m: pl brn-lt brn,lt gry brn,trnsl,clr,opq, vf-med,mnr crs,mod-pr srt,sbang-sbrnd,tr ang,wk sil cmt,mnr brn-gry arg mtx,tr sid cmt,fri vf-f aggs, 3636 com lse disagg f-crs qtz grs,tr hd,pr vis por,fr inf 1232.2 por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 112.5 | 33 |
| RES_DEEP (ohm.m) | 25.11 | 33 |
| RES_SHALLOW (ohm.m) | 22.97 | 33 |
| **Δ Res (Deep − Shallow)** | **2.13** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3640 m MD — Interval 3637.5 – 3642.5 m

**Sample Description (spreadsheet):** Sample 3640m: trace siderite in 30% Siltstone, trace siderite in 70% very fine Sandstone, 100% dull to moderately bright FLUOR in SST. TG 78U

| Property | Value |
|----------|-------|
| % Sandstone | 70.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 100.0% dll-mod bri |
| Total Gas | 78.0 U |
| FeCO₃ in Siltstone | tr |
| FeCO₃ in Sandstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3628m: pl brn-lt brn,lt gry brn,trnsl,clr,opq, vf-med,mnr crs,mod-pr srt,sbang-sbrnd,tr ang,wk sil cmt,mnr brn-gry arg mtx,fri vf-f aggs,com lse disagg f-crs qtz grs,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~3633m: pl brn-lt brn,lt gry brn,trnsl,clr,opq, vf-med,mnr crs,mod-pr srt,sbang-sbrnd,tr ang,wk sil cmt,mnr brn-gry arg mtx,tr sid cmt,fri vf-f aggs, 3636 com lse disagg f-crs qtz grs,tr hd,pr vis por,fr inf 1232.2 por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 126.0 | 32 |
| RES_DEEP (ohm.m) | 19.46 | 32 |
| RES_SHALLOW (ohm.m) | 16.33 | 32 |
| **Δ Res (Deep − Shallow)** | **3.13** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3645 m MD — Interval 3642.5 – 3647.5 m

**Sample Description (spreadsheet):** Sample 3645m: minor siderite in 40% Siltstone, minor siderite in 60% very fine Sandstone, 60% dull to moderately bright FLUOR in SST. TG 79U

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 60.0% dll-mod bri |
| Total Gas | 79.0 U |
| FeCO₃ in Siltstone | mnr |
| FeCO₃ in Sandstone | mnr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3628m: pl brn-lt brn,lt gry brn,trnsl,clr,opq, vf-med,mnr crs,mod-pr srt,sbang-sbrnd,tr ang,wk sil cmt,mnr brn-gry arg mtx,fri vf-f aggs,com lse disagg f-crs qtz grs,pr vis por,fr inf por,fluor.
- **SANDSTONE** @ ~3633m: pl brn-lt brn,lt gry brn,trnsl,clr,opq, vf-med,mnr crs,mod-pr srt,sbang-sbrnd,tr ang,wk sil cmt,mnr brn-gry arg mtx,tr sid cmt,fri vf-f aggs, 3636 com lse disagg f-crs qtz grs,tr hd,pr vis por,fr inf 1232.2 por,fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 124.5 | 5 |
| RES_DEEP (ohm.m) | 18.95 | 24 |
| RES_SHALLOW (ohm.m) | 17.22 | 24 |
| **Δ Res (Deep − Shallow)** | **1.73** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability.

---

### 3650 m MD — Interval 3647.5 – 3654.0 m

**Sample Description (spreadsheet):** Sample 3650m: minor siderite in 40% Siltstone, common siderite in 60% very fine Sandstone, 60% dull to moderately bright FLUOR in SST. TG 90U

| Property | Value |
|----------|-------|
| % Sandstone | 60.0 |
| Grain Size | vf (max: crs) |
| Fluorescence | 60.0% dll-mod bri |
| Total Gas | 90.0 U |
| FeCO₃ in Siltstone | mnr |
| FeCO₃ in Sandstone | com |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3633m: pl brn-lt brn,lt gry brn,trnsl,clr,opq, vf-med,mnr crs,mod-pr srt,sbang-sbrnd,tr ang,wk sil cmt,mnr brn-gry arg mtx,tr sid cmt,fri vf-f aggs, 3636 com lse disagg f-crs qtz grs,tr hd,pr vis por,fr inf 1232.2 por,fluor.
- **SANDSTONE** @ ~3640m: pl brn-lt brn,med brn,lt gry brn,trnsl, opq,vf-f,mnr med,rr crs,mod-pr srt,sbang-sbrnd, wk-mod strg sil cmt,mnr sid cmt,mnr brn-gry arg mtx,fri-mod hd,rr hd,mnr lse disagg med-crs qtz grs, pr-v pr vis por,pr-fr inf por,fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages:** _No log data in interval_

---

### 3658 m MD — Interval 3654.0 – 3660.5 m

**Sample Description (spreadsheet):** Sample 3658m: minor siderite in 45% Siltstone, minor siderite in 55% very fine Sandstone, 70% dull to moderately bright FLUOR in SST. TG 81U

| Property | Value |
|----------|-------|
| % Sandstone | 55.00000000000001 |
| Grain Size | vf (max: crs) |
| Fluorescence | 70.0% dll-mod bri |
| Total Gas | 81.0 U |
| FeCO₃ in Siltstone | mnr |
| FeCO₃ in Sandstone | mnr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3640m: pl brn-lt brn,med brn,lt gry brn,trnsl, opq,vf-f,mnr med,rr crs,mod-pr srt,sbang-sbrnd, wk-mod strg sil cmt,mnr sid cmt,mnr brn-gry arg mtx,fri-mod hd,rr hd,mnr lse disagg med-crs qtz grs, pr-v pr vis por,pr-fr inf por,fluor.
- **SILTSTONE** @ ~3648m: med gry,med brn,med-dk gry,aren,rr
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages:** _No log data in interval_

---

## 5. Summary Statistics (McKinlay Member)

| Metric | Value |
|--------|-------|
| Intervals analysed | 165 |
| Depth range | 2070 – 3658 m |
| Avg % Sandstone | 89.3% |
| Avg Δ Res (Deep−Shallow) | 3.25 ohm.m |
| Max Δ Res | 31.53 ohm.m |
| Min Δ Res | -0.23 ohm.m |
| Mudlog matches | 165 / 165 |
