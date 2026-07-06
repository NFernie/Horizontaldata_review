# JENA 31 — McKinlay Member Cuttings & Log Interpretation

**Generated:** 2026-07-06 23:33 UTC  
**Well:** JENA 31 (Jena Dev C Oil Lateral 1_Ops)  
**TD:** 3394 m MD  

---

## 1. Data Sources & Methodology

| Source | File | Role |
|--------|------|------|
| Mudlog PDF | `JENA 31_ML_Mudlog_Spud-3394_MD_Final.pdf` | Cuttings lithology descriptions |
| Sample Descriptions | `Jena 31- Hz Section Samples Descriptions_3394_TD.xlsx` (Input Sheet) | Depth intervals & sample properties |
| Formation Tops | `DC30.xlsx`, `Mck_Murta.xlsx` | Reservoir entry & overburden identification |
| Wireline Log (LAS) | `Jena_31` | GR, RES_DEEP, RES_SHALLOW |

## 2. Formation Top Analysis

### 2.1 Key Tops

| Marker | Depth (m MD) | Source |
|--------|-------------|--------|
| DC30 | 2249.74 | DC30.xlsx |
| McKinlay Member (mudlog) | 2325.0 | Mudlog PDF |
| McKinlay Member (shallowest, tops file) | 2250.62 | Mck_Murta.xlsx |
| Murta Formation Base (mudlog) | 3345.0 | Mudlog PDF |

### 2.2 McKinlay Member Top Classification

For this horizontal well, formation tops were classified as:

**Target re-entry (McKinlay without paired Murta):**
- 2250.62 m MD
- 2842.67 m MD

**Overburden intersections (McKinlay ≈ Murta within 5 m):**
| McKinlay (m MD) | Murta (m MD) | Δ (m) |
|-----------------|-------------|-------|
| 2794.81 | 2791.94 | 2.87 |
| 3197.73 | 3197.73 | 0.00 |
| 3238.04 | 3237.50 | 0.54 |
| 3332.41 | 3331.56 | 0.85 |

**McKinlay Member analysis window:** 2250.6 – 3394.0 m MD

**Excluded overburden zones (±10 m):** 2785–2805, 3188–3208, 3228–3248, 3322–3342

**Samples in McKinlay Member:** 208 of 309 total (101 excluded as overburden/pre-reservoir)

## 3. Known Shortcomings

> **Read this section before using the output.**

1. **Mudlog PDF text extraction is imperfect.** Depth-to-description assignment uses proximity heuristics (±15 m window). Some descriptions may be mis-assigned or missed due to multi-column PDF layout.
2. **Formation top discrepancy:** McKinlay Member is picked at 2250.62 m in Mck_Murta.xlsx but 2325.0 m in the mudlog PDF (Δ ≈ 74 m). The analysis uses the tops file (2250.62 m) per your instructions; mudlog descriptions near 2250–2325 m should be reviewed manually.
3. **Well name mapping:** JENA 31 maps to `Jena Dev C Oil Lateral 1_Ops` in formation top files. This was inferred from TD (3394 m) and lateral naming — verify if a different mapping is intended.
4. **Sample intervals** are computed as midpoints between consecutive sample depths (not from a dedicated interval column). Irregular sample spacing creates variable interval widths.
5. **Resistivity permeability proxy** is a qualitative indicator only. Separation of deep vs shallow resistivity suggests invasion profile and is not a calibrated permeability measurement.
6. **NULL values** in LAS data (-999.25) are excluded from averages. Intervals with sparse log coverage report partial or no data.
7. **Overburden exclusion** uses a fixed ±10 m buffer around paired tops. Actual overburden thickness may differ.
8. **No Calculations Sheet used** — per your instruction, only the Input Sheet was used for sample data.

## 4. McKinlay Member Sample Intervals

Each row shows: depth interval, sample description (spreadsheet), matched mudlog cuttings, and average wireline log values.

### 2255 m MD — Interval 2252.5 – 2257.5 m

**Sample Description (spreadsheet):** Sample 2255m: 65% Siltstone, 35% fine Sandstone, 100% moderately bright FLUOR in SST. TG 45.8U

| Property | Value |
|----------|-------|
| % Sandstone | 35 |
| Grain Size | f (max: F) |
| Fluorescence | 100% mod bri |
| Total Gas | 45.8 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2243m: off wh,lt-med gry,lt gry brn,vf-f,wl srt, lt gry wk sil cmt,tr off wh-gry arg mtx,mnr micmic,rr liths,rr carb spks,mod hd,pr vis por,mod bri fluor.
- **SILTSTONE** @ ~2256m: lt-med gry,med gry brn,aren,rr arg, 2260 mnr micmic,rr sid frags,rr carb flks,frm,sbblky. 1232.4
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 126.1 | 32 |
| RES_DEEP (ohm.m) | 26.56 | 32 |
| RES_SHALLOW (ohm.m) | 18.61 | 32 |
| **Δ Res (Deep − Shallow)** | **7.95** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2260 m MD — Interval 2257.5 – 2262.5 m

**Sample Description (spreadsheet):** Sample 2260m: rare siderite in 65% Siltstone, 35% fine Sandstone, 100% moderately bright FLUOR in SST. TG 110.5U

| Property | Value |
|----------|-------|
| % Sandstone | 35 |
| Grain Size | f (max: F) |
| Fluorescence | 100% mod bri |
| Total Gas | 110.5 U |
| FeCO₃ in Siltstone | rr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2243m: off wh,lt-med gry,lt gry brn,vf-f,wl srt, lt gry wk sil cmt,tr off wh-gry arg mtx,mnr micmic,rr liths,rr carb spks,mod hd,pr vis por,mod bri fluor.
- **SILTSTONE** @ ~2256m: lt-med gry,med gry brn,aren,rr arg, 2260 mnr micmic,rr sid frags,rr carb flks,frm,sbblky. 1232.4
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.3 | 33 |
| RES_DEEP (ohm.m) | 25.20 | 33 |
| RES_SHALLOW (ohm.m) | 18.42 | 33 |
| **Δ Res (Deep − Shallow)** | **6.78** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2265 m MD — Interval 2262.5 – 2267.5 m

**Sample Description (spreadsheet):** Sample 2265m: 50% Siltstone, 50% fine Sandstone, 100% bright FLUOR in SST. TG 73.2U

| Property | Value |
|----------|-------|
| % Sandstone | 50 |
| Grain Size | f (max: F) |
| Fluorescence | 100% bri |
| Total Gas | 73.2 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2256m: lt-med gry,med gry brn,aren,rr arg, 2260 mnr micmic,rr sid frags,rr carb flks,frm,sbblky. 1232.4
- **SANDSTONE** @ ~2262m: off wh-lt gry,lt gry brn,trnsl,opq,vf-f, mod wl srt,sbang-sbrnd,off wh wk sil cmt,tr off wh-lt gry arg mtx,mnr micmic,mnr qtz frags,tr carb flks,tr liths,fri-mod hd,v pr vis por,pr inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.6 | 33 |
| RES_DEEP (ohm.m) | 22.75 | 33 |
| RES_SHALLOW (ohm.m) | 18.88 | 33 |
| **Δ Res (Deep − Shallow)** | **3.87** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2270 m MD — Interval 2267.5 – 2272.5 m

**Sample Description (spreadsheet):** Sample 2270m: 50% Siltstone, 50% fine Sandstone, 100% bright FLUOR in SST. TG 109.3U

| Property | Value |
|----------|-------|
| % Sandstone | 50 |
| Grain Size | f (max: F) |
| Fluorescence | 100% bri |
| Total Gas | 109.3 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2256m: lt-med gry,med gry brn,aren,rr arg, 2260 mnr micmic,rr sid frags,rr carb flks,frm,sbblky. 1232.4
- **SANDSTONE** @ ~2262m: off wh-lt gry,lt gry brn,trnsl,opq,vf-f, mod wl srt,sbang-sbrnd,off wh wk sil cmt,tr off wh-lt gry arg mtx,mnr micmic,mnr qtz frags,tr carb flks,tr liths,fri-mod hd,v pr vis por,pr inf por,bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.3 | 33 |
| RES_DEEP (ohm.m) | 23.63 | 33 |
| RES_SHALLOW (ohm.m) | 18.86 | 33 |
| **Δ Res (Deep − Shallow)** | **4.77** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2275 m MD — Interval 2272.5 – 2277.5 m

**Sample Description (spreadsheet):** Sample 2275m: 50% Siltstone, 50% fine Sandstone, 100% bright FLUOR in SST. TG 79.4U

| Property | Value |
|----------|-------|
| % Sandstone | 50 |
| Grain Size | f (max: F) |
| Fluorescence | 100% bri |
| Total Gas | 79.4 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2262m: off wh-lt gry,lt gry brn,trnsl,opq,vf-f, mod wl srt,sbang-sbrnd,off wh wk sil cmt,tr off wh-lt gry arg mtx,mnr micmic,mnr qtz frags,tr carb flks,tr liths,fri-mod hd,v pr vis por,pr inf por,bri fluor.
- **SILTSTONE** @ ~2276m: med gry brn,med-dk gry,aren,tr arg, mnr micmic,rr carb spks,tr sid,frm,sbblky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.5 | 33 |
| RES_DEEP (ohm.m) | 23.98 | 33 |
| RES_SHALLOW (ohm.m) | 18.05 | 33 |
| **Δ Res (Deep − Shallow)** | **5.93** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2280 m MD — Interval 2277.5 – 2282.5 m

**Sample Description (spreadsheet):** Sample 2280m: trace siderite in 50% Siltstone, 50% fine Sandstone, 100% bright FLUOR in SST. TG 65.3U

| Property | Value |
|----------|-------|
| % Sandstone | 50 |
| Grain Size | f (max: F) |
| Fluorescence | 100% bri |
| Total Gas | 65.3 U |
| FeCO₃ in Siltstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2276m: med gry brn,med-dk gry,aren,tr arg, mnr micmic,rr carb spks,tr sid,frm,sbblky.
- **SANDSTONE** @ ~2284m: lt gry,off wh,clr trnsl,opq,vf-f,mod wl 2288 srt,sbang-sbrnd,off wh wk sil cmt,rr off wh-lt gry arg 1232.4 mtx,tr-com qtz frags,com-loc sid frags,mnr micmic, rr carb spks,fri-mod hd,v pr vis por,mod-bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.8 | 33 |
| RES_DEEP (ohm.m) | 23.05 | 33 |
| RES_SHALLOW (ohm.m) | 17.41 | 33 |
| **Δ Res (Deep − Shallow)** | **5.64** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2285 m MD — Interval 2282.5 – 2287.5 m

**Sample Description (spreadsheet):** Sample 2285m: 40% Siltstone, 60% fine Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 70.3U

| Property | Value |
|----------|-------|
| % Sandstone | 60 |
| Grain Size | f (max: F) |
| Fluorescence | 100% mod bri - bri |
| Total Gas | 70.3 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2276m: med gry brn,med-dk gry,aren,tr arg, mnr micmic,rr carb spks,tr sid,frm,sbblky.
- **SANDSTONE** @ ~2284m: lt gry,off wh,clr trnsl,opq,vf-f,mod wl 2288 srt,sbang-sbrnd,off wh wk sil cmt,rr off wh-lt gry arg 1232.4 mtx,tr-com qtz frags,com-loc sid frags,mnr micmic, rr carb spks,fri-mod hd,v pr vis por,mod-bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.2 | 32 |
| RES_DEEP (ohm.m) | 23.25 | 32 |
| RES_SHALLOW (ohm.m) | 17.83 | 32 |
| **Δ Res (Deep − Shallow)** | **5.41** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2290 m MD — Interval 2287.5 – 2292.5 m

**Sample Description (spreadsheet):** Sample 2290m: 40% Siltstone, common siderite in 60% fine Sandstone, 100% moderately bright  to  bright FLUOR in SST. TG 122.8U

| Property | Value |
|----------|-------|
| % Sandstone | 60 |
| Grain Size | f (max: F) |
| Fluorescence | 100% mod bri - bri |
| Total Gas | 122.8 U |
| FeCO₃ in Sandstone | com |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2276m: med gry brn,med-dk gry,aren,tr arg, mnr micmic,rr carb spks,tr sid,frm,sbblky.
- **SANDSTONE** @ ~2284m: lt gry,off wh,clr trnsl,opq,vf-f,mod wl 2288 srt,sbang-sbrnd,off wh wk sil cmt,rr off wh-lt gry arg 1232.4 mtx,tr-com qtz frags,com-loc sid frags,mnr micmic, rr carb spks,fri-mod hd,v pr vis por,mod-bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.7 | 33 |
| RES_DEEP (ohm.m) | 22.26 | 33 |
| RES_SHALLOW (ohm.m) | 18.27 | 33 |
| **Δ Res (Deep − Shallow)** | **4.00** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2295 m MD — Interval 2292.5 – 2297.5 m

**Sample Description (spreadsheet):** Sample 2295m: 40% Siltstone, 60% fine Sandstone, 100% bright FLUOR in SST. TG 110.7U

| Property | Value |
|----------|-------|
| % Sandstone | 60 |
| Grain Size | f (max: F) |
| Fluorescence | 100% bri |
| Total Gas | 110.7 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2284m: lt gry,off wh,clr trnsl,opq,vf-f,mod wl 2288 srt,sbang-sbrnd,off wh wk sil cmt,rr off wh-lt gry arg 1232.4 mtx,tr-com qtz frags,com-loc sid frags,mnr micmic, rr carb spks,fri-mod hd,v pr vis por,mod-bri fluor.
- **SANDSTONE** @ ~2296m: lt gry,off wh,clr trnsl,opq,vf-f,mod wl srt,sbang-sbrnd,off wh wk sil cmt,rr off wh-lt gry arg mtx,tr-com qtz frags,com-loc sid frags,mnr micmic, rr carb spks,fri-mod hd,v pr vis por,mod-bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.8 | 33 |
| RES_DEEP (ohm.m) | 23.78 | 33 |
| RES_SHALLOW (ohm.m) | 19.55 | 33 |
| **Δ Res (Deep − Shallow)** | **4.22** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2300 m MD — Interval 2297.5 – 2302.5 m

**Sample Description (spreadsheet):** Sample 2300m: 40% Siltstone, 60% fine Sandstone, 100% bright FLUOR in SST. TG 133.7U

| Property | Value |
|----------|-------|
| % Sandstone | 60 |
| Grain Size | f (max: F) |
| Fluorescence | 100% bri |
| Total Gas | 133.7 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2284m: lt gry,off wh,clr trnsl,opq,vf-f,mod wl 2288 srt,sbang-sbrnd,off wh wk sil cmt,rr off wh-lt gry arg 1232.4 mtx,tr-com qtz frags,com-loc sid frags,mnr micmic, rr carb spks,fri-mod hd,v pr vis por,mod-bri fluor.
- **SANDSTONE** @ ~2296m: lt gry,off wh,clr trnsl,opq,vf-f,mod wl srt,sbang-sbrnd,off wh wk sil cmt,rr off wh-lt gry arg mtx,tr-com qtz frags,com-loc sid frags,mnr micmic, rr carb spks,fri-mod hd,v pr vis por,mod-bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.9 | 33 |
| RES_DEEP (ohm.m) | 24.49 | 33 |
| RES_SHALLOW (ohm.m) | 19.47 | 33 |
| **Δ Res (Deep − Shallow)** | **5.02** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2305 m MD — Interval 2302.5 – 2307.5 m

**Sample Description (spreadsheet):** Sample 2305m: 35% Siltstone, 65% fine Sandstone, 100% bright FLUOR in SST. TG 102.7U

| Property | Value |
|----------|-------|
| % Sandstone | 65 |
| Grain Size | f (max: F) |
| Fluorescence | 100% bri |
| Total Gas | 102.7 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2296m: lt gry,off wh,clr trnsl,opq,vf-f,mod wl srt,sbang-sbrnd,off wh wk sil cmt,rr off wh-lt gry arg mtx,tr-com qtz frags,com-loc sid frags,mnr micmic, rr carb spks,fri-mod hd,v pr vis por,mod-bri fluor.
- **SANDSTONE** @ ~2304m: off wh-lt gry,gry,clr,opq,vf-f,wl srt,lt gry wk sil cmt,tr off wh arg mtx,com-loc sid frags, mnr qtz frags,tr liths,fri,v pr vis por,bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.0 | 33 |
| RES_DEEP (ohm.m) | 25.29 | 33 |
| RES_SHALLOW (ohm.m) | 20.06 | 33 |
| **Δ Res (Deep − Shallow)** | **5.23** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2310 m MD — Interval 2307.5 – 2312.5 m

**Sample Description (spreadsheet):** Sample 2310m: 35% Siltstone, common siderite in 65% fine Sandstone, 100% bright FLUOR in SST. TG 92.8U

| Property | Value |
|----------|-------|
| % Sandstone | 65 |
| Grain Size | f (max: F) |
| Fluorescence | 100% bri |
| Total Gas | 92.8 U |
| FeCO₃ in Sandstone | com |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2296m: lt gry,off wh,clr trnsl,opq,vf-f,mod wl srt,sbang-sbrnd,off wh wk sil cmt,rr off wh-lt gry arg mtx,tr-com qtz frags,com-loc sid frags,mnr micmic, rr carb spks,fri-mod hd,v pr vis por,mod-bri fluor.
- **SANDSTONE** @ ~2304m: off wh-lt gry,gry,clr,opq,vf-f,wl srt,lt gry wk sil cmt,tr off wh arg mtx,com-loc sid frags, mnr qtz frags,tr liths,fri,v pr vis por,bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.9 | 32 |
| RES_DEEP (ohm.m) | 25.62 | 32 |
| RES_SHALLOW (ohm.m) | 20.15 | 32 |
| **Δ Res (Deep − Shallow)** | **5.47** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2315 m MD — Interval 2312.5 – 2317.5 m

**Sample Description (spreadsheet):** Sample 2315m: 30% Siltstone, 70% fine Sandstone, 100% bright FLUOR in SST. TG 90.3U

| Property | Value |
|----------|-------|
| % Sandstone | 70 |
| Grain Size | f (max: F) |
| Fluorescence | 100% bri |
| Total Gas | 90.3 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2304m: off wh-lt gry,gry,clr,opq,vf-f,wl srt,lt gry wk sil cmt,tr off wh arg mtx,com-loc sid frags, mnr qtz frags,tr liths,fri,v pr vis por,bri fluor.
- **SILTSTONE** @ ~2312m: med-dk gry,med gry brn,aren,tr arg, mnr micmic,tr liths,mod hd,sbblky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 109.3 | 33 |
| RES_DEEP (ohm.m) | 25.46 | 33 |
| RES_SHALLOW (ohm.m) | 19.38 | 33 |
| **Δ Res (Deep − Shallow)** | **6.08** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2320 m MD — Interval 2317.5 – 2322.5 m

**Sample Description (spreadsheet):** Sample 2320m: 30% Siltstone, 70% fine Sandstone, 100% bright FLUOR in SST. TG 123.9U

| Property | Value |
|----------|-------|
| % Sandstone | 70 |
| Grain Size | f (max: F) |
| Fluorescence | 100% bri |
| Total Gas | 123.9 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2304m: off wh-lt gry,gry,clr,opq,vf-f,wl srt,lt gry wk sil cmt,tr off wh arg mtx,com-loc sid frags, mnr qtz frags,tr liths,fri,v pr vis por,bri fluor.
- **SILTSTONE** @ ~2312m: med-dk gry,med gry brn,aren,tr arg, mnr micmic,tr liths,mod hd,sbblky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 113.8 | 33 |
| RES_DEEP (ohm.m) | 29.43 | 33 |
| RES_SHALLOW (ohm.m) | 22.25 | 33 |
| **Δ Res (Deep − Shallow)** | **7.17** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2325 m MD — Interval 2322.5 – 2327.5 m

**Sample Description (spreadsheet):** Sample 2325m: 5% Siltstone, 95% fine Sandstone, 100% moderately bright FLUOR in SST. TG 63.8U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f (max: F) |
| Fluorescence | 100% mod bri |
| Total Gas | 63.8 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2312m: med-dk gry,med gry brn,aren,tr arg, mnr micmic,tr liths,mod hd,sbblky.
- **SANDSTONE** @ ~2319m: lt gry brn,trnsl,f,wl srt,sbrnd-sbang, 1232.4 wk sil cmt,rr of wh arg mtx,rr liths,rr mic,lse-fri aggs, pr-fr vis & inf por,mod bri fluor. of SST,dll-bri yel-grn evn fluor,mod bldng
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.4 | 33 |
| RES_DEEP (ohm.m) | 44.46 | 33 |
| RES_SHALLOW (ohm.m) | 27.65 | 33 |
| **Δ Res (Deep − Shallow)** | **16.81** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2330 m MD — Interval 2327.5 – 2332.5 m

**Sample Description (spreadsheet):** Sample 2330m: 5% Siltstone, 95% fine Sandstone, 100% moderately bright FLUOR in SST. TG 160U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f (max: F) |
| Fluorescence | 100% mod bri |
| Total Gas | 160 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2319m: lt gry brn,trnsl,f,wl srt,sbrnd-sbang, 1232.4 wk sil cmt,rr of wh arg mtx,rr liths,rr mic,lse-fri aggs, pr-fr vis & inf por,mod bri fluor. of SST,dll-bri yel-grn evn fluor,mod bldng
- **SANDSTONE** @ ~2340m: trnsl,lt brn gry,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,rr mtx,rr mic,rr liths,lse-fri 2344 aggs,fr vis & inf por,mod bri fluor. 1232.5 20-02-2026 82 / 6 / 4 / 5 / 3 193 U
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.5 | 33 |
| RES_DEEP (ohm.m) | 74.02 | 33 |
| RES_SHALLOW (ohm.m) | 42.93 | 33 |
| **Δ Res (Deep − Shallow)** | **31.09** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2335 m MD — Interval 2332.5 – 2337.5 m

**Sample Description (spreadsheet):** Sample 2335m: 0% Siltstone, 100% fine Sandstone, 100% moderately bright FLUOR in SST. TG 158U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f (max: F) |
| Fluorescence | 100% mod bri |
| Total Gas | 158 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2319m: lt gry brn,trnsl,f,wl srt,sbrnd-sbang, 1232.4 wk sil cmt,rr of wh arg mtx,rr liths,rr mic,lse-fri aggs, pr-fr vis & inf por,mod bri fluor. of SST,dll-bri yel-grn evn fluor,mod bldng
- **SANDSTONE** @ ~2340m: trnsl,lt brn gry,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,rr mtx,rr mic,rr liths,lse-fri 2344 aggs,fr vis & inf por,mod bri fluor. 1232.5 20-02-2026 82 / 6 / 4 / 5 / 3 193 U
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 50.4 | 32 |
| RES_DEEP (ohm.m) | 100.15 | 32 |
| RES_SHALLOW (ohm.m) | 54.76 | 32 |
| **Δ Res (Deep − Shallow)** | **45.39** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2340 m MD — Interval 2337.5 – 2342.5 m

**Sample Description (spreadsheet):** Sample 2340m: 0% Siltstone, 100% fine Sandstone, 100% moderately bright FLUOR in SST. TG 159U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f (max: F) |
| Fluorescence | 100% mod bri |
| Total Gas | 159 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2340m: trnsl,lt brn gry,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,rr mtx,rr mic,rr liths,lse-fri 2344 aggs,fr vis & inf por,mod bri fluor. 1232.5 20-02-2026 82 / 6 / 4 / 5 / 3 193 U
- **SANDSTONE** @ ~2338m: trnsl,lt gry brn,f-med,mod wl srt, sbang-sbrnd,wk sil cmt,rr off wh arg mtx,rr mic,lse, fr inf por,mod bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 49.8 | 33 |
| RES_DEEP (ohm.m) | 102.60 | 33 |
| RES_SHALLOW (ohm.m) | 59.78 | 33 |
| **Δ Res (Deep − Shallow)** | **42.82** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2345 m MD — Interval 2342.5 – 2347.5 m

**Sample Description (spreadsheet):** Sample 2345m: 5% Siltstone, 95% fine to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 161.8U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% mod bri |
| Total Gas | 161.8 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2340m: trnsl,lt brn gry,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,rr mtx,rr mic,rr liths,lse-fri 2344 aggs,fr vis & inf por,mod bri fluor. 1232.5 20-02-2026 82 / 6 / 4 / 5 / 3 193 U
- **SANDSTONE** @ ~2338m: trnsl,lt gry brn,f-med,mod wl srt, sbang-sbrnd,wk sil cmt,rr off wh arg mtx,rr mic,lse, fr inf por,mod bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 55.4 | 33 |
| RES_DEEP (ohm.m) | 112.23 | 33 |
| RES_SHALLOW (ohm.m) | 62.77 | 33 |
| **Δ Res (Deep − Shallow)** | **49.46** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2350 m MD — Interval 2347.5 – 2352.5 m

**Sample Description (spreadsheet):** Sample 2350m: 5% Siltstone, 95% fine to coarse Sandstone, 100% moderately bright FLUOR in SST. TG 156.1U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% mod bri |
| Total Gas | 156.1 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2340m: trnsl,lt brn gry,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,rr mtx,rr mic,rr liths,lse-fri 2344 aggs,fr vis & inf por,mod bri fluor. 1232.5 20-02-2026 82 / 6 / 4 / 5 / 3 193 U
- **SANDSTONE** @ ~2338m: trnsl,lt gry brn,f-med,mod wl srt, sbang-sbrnd,wk sil cmt,rr off wh arg mtx,rr mic,lse, fr inf por,mod bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 49.9 | 33 |
| RES_DEEP (ohm.m) | 126.95 | 33 |
| RES_SHALLOW (ohm.m) | 68.11 | 33 |
| **Δ Res (Deep − Shallow)** | **58.84** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2355 m MD — Interval 2352.5 – 2357.5 m

**Sample Description (spreadsheet):** Sample 2355m: 0% Siltstone, 100% fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 128.8U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% mod bri |
| Total Gas | 128.8 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2340m: trnsl,lt brn gry,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,rr mtx,rr mic,rr liths,lse-fri 2344 aggs,fr vis & inf por,mod bri fluor. 1232.5 20-02-2026 82 / 6 / 4 / 5 / 3 193 U
- **SANDSTONE** @ ~2338m: trnsl,lt gry brn,f-med,mod wl srt, sbang-sbrnd,wk sil cmt,rr off wh arg mtx,rr mic,lse, fr inf por,mod bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 49.0 | 33 |
| RES_DEEP (ohm.m) | 133.16 | 33 |
| RES_SHALLOW (ohm.m) | 68.85 | 33 |
| **Δ Res (Deep − Shallow)** | **64.32** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2360 m MD — Interval 2357.5 – 2362.5 m

**Sample Description (spreadsheet):** Sample 2360m: 0% Siltstone, 100% fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 109.8U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% mod bri |
| Total Gas | 109.8 U |

**Mudlog Cuttings Description (PDF):** _No matching entry found in extracted text_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 50.4 | 32 |
| RES_DEEP (ohm.m) | 146.06 | 32 |
| RES_SHALLOW (ohm.m) | 73.88 | 32 |
| **Δ Res (Deep − Shallow)** | **72.18** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2365 m MD — Interval 2362.5 – 2367.5 m

**Sample Description (spreadsheet):** Sample 2365m: 5% Siltstone, 95% fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 109.6U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% mod bri |
| Total Gas | 109.6 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2380m: trnsl,clr,f-med,wl srt,sbang-sbrnd,wk sil cmt,nil vis mtx,lse & cln,fr inf por,mod bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 56.2 | 33 |
| RES_DEEP (ohm.m) | 147.70 | 33 |
| RES_SHALLOW (ohm.m) | 76.62 | 33 |
| **Δ Res (Deep − Shallow)** | **71.08** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2370 m MD — Interval 2367.5 – 2372.5 m

**Sample Description (spreadsheet):** Sample 2370m: 5% Siltstone, 95% fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 117.2U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% mod bri |
| Total Gas | 117.2 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2380m: trnsl,clr,f-med,wl srt,sbang-sbrnd,wk sil cmt,nil vis mtx,lse & cln,fr inf por,mod bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.9 | 33 |
| RES_DEEP (ohm.m) | 165.16 | 33 |
| RES_SHALLOW (ohm.m) | 74.78 | 33 |
| **Δ Res (Deep − Shallow)** | **90.39** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2375 m MD — Interval 2372.5 – 2377.5 m

**Sample Description (spreadsheet):** Sample 2375m: 10% Siltstone, 90% fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 125.9U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% mod bri |
| Total Gas | 125.9 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2380m: trnsl,clr,f-med,wl srt,sbang-sbrnd,wk sil cmt,nil vis mtx,lse & cln,fr inf por,mod bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 71.2 | 33 |
| RES_DEEP (ohm.m) | 167.08 | 33 |
| RES_SHALLOW (ohm.m) | 71.21 | 33 |
| **Δ Res (Deep − Shallow)** | **95.87** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2380 m MD — Interval 2377.5 – 2382.5 m

**Sample Description (spreadsheet):** Sample 2380m: 10% Siltstone, 90% fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 115.6U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% mod bri |
| Total Gas | 115.6 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2380m: trnsl,clr,f-med,wl srt,sbang-sbrnd,wk sil cmt,nil vis mtx,lse & cln,fr inf por,mod bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.8 | 33 |
| RES_DEEP (ohm.m) | 209.42 | 33 |
| RES_SHALLOW (ohm.m) | 68.63 | 33 |
| **Δ Res (Deep − Shallow)** | **140.79** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2385 m MD — Interval 2382.5 – 2387.5 m

**Sample Description (spreadsheet):** Sample 2385m: 0% Siltstone, 100% fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 122.2U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% mod bri |
| Total Gas | 122.2 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2380m: trnsl,clr,f-med,wl srt,sbang-sbrnd,wk sil cmt,nil vis mtx,lse & cln,fr inf por,mod bri fluor.
- **SILTSTONE** @ ~2400m: lt-dk gry,aren,arg i/p,sli micmic,tr liths,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.9 | 33 |
| RES_DEEP (ohm.m) | 153.24 | 33 |
| RES_SHALLOW (ohm.m) | 48.73 | 33 |
| **Δ Res (Deep − Shallow)** | **104.51** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2390 m MD — Interval 2387.5 – 2392.5 m

**Sample Description (spreadsheet):** Sample 2390m: 0% Siltstone, 100% fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 148.9U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% mod bri |
| Total Gas | 148.9 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2380m: trnsl,clr,f-med,wl srt,sbang-sbrnd,wk sil cmt,nil vis mtx,lse & cln,fr inf por,mod bri fluor.
- **SILTSTONE** @ ~2400m: lt-dk gry,aren,arg i/p,sli micmic,tr liths,

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.9 | 32 |
| RES_DEEP (ohm.m) | 109.84 | 32 |
| RES_SHALLOW (ohm.m) | 34.46 | 32 |
| **Δ Res (Deep − Shallow)** | **75.38** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2395 m MD — Interval 2392.5 – 2397.5 m

**Sample Description (spreadsheet):** Sample 2395m: 20% Siltstone, 80% fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 140U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% mod bri |
| Total Gas | 140 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2380m: trnsl,clr,f-med,wl srt,sbang-sbrnd,wk sil cmt,nil vis mtx,lse & cln,fr inf por,mod bri fluor.
- **SILTSTONE** @ ~2400m: lt-dk gry,aren,arg i/p,sli micmic,tr liths,
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.1 | 33 |
| RES_DEEP (ohm.m) | 52.94 | 33 |
| RES_SHALLOW (ohm.m) | 23.19 | 33 |
| **Δ Res (Deep − Shallow)** | **29.75** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2400 m MD — Interval 2397.5 – 2402.5 m

**Sample Description (spreadsheet):** Sample 2400m: 20% Siltstone, 80% fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 78.5U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% mod bri |
| Total Gas | 78.5 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2400m: lt-dk gry,aren,arg i/p,sli micmic,tr liths,
- **SANDSTONE** @ ~2412m: trnsl,lt gry brn,f-med,wl srt, sbang-sbrnd,wk sil cmt,rr off wh arg mtx,rr mic flks, rr liths,lse-fri aggs,fr vis & inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 116.5 | 33 |
| RES_DEEP (ohm.m) | 37.60 | 33 |
| RES_SHALLOW (ohm.m) | 19.87 | 33 |
| **Δ Res (Deep − Shallow)** | **17.73** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2405 m MD — Interval 2402.5 – 2407.5 m

**Sample Description (spreadsheet):** Sample 2405m: 5% Siltstone, 95% fine to medium Sandstone, 100% bright FLUOR in SST. TG 95.2U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 95.2 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2400m: lt-dk gry,aren,arg i/p,sli micmic,tr liths,
- **SANDSTONE** @ ~2412m: trnsl,lt gry brn,f-med,wl srt, sbang-sbrnd,wk sil cmt,rr off wh arg mtx,rr mic flks, rr liths,lse-fri aggs,fr vis & inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 115.0 | 33 |
| RES_DEEP (ohm.m) | 32.41 | 33 |
| RES_SHALLOW (ohm.m) | 18.10 | 33 |
| **Δ Res (Deep − Shallow)** | **14.30** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2410 m MD — Interval 2407.5 – 2412.5 m

**Sample Description (spreadsheet):** Sample 2410m: 5% Siltstone, 95% fine to medium Sandstone, 100% bright FLUOR in SST. TG 114.9U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 114.9 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2400m: lt-dk gry,aren,arg i/p,sli micmic,tr liths,
- **SANDSTONE** @ ~2412m: trnsl,lt gry brn,f-med,wl srt, sbang-sbrnd,wk sil cmt,rr off wh arg mtx,rr mic flks, rr liths,lse-fri aggs,fr vis & inf por,bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 110.1 | 33 |
| RES_DEEP (ohm.m) | 27.85 | 33 |
| RES_SHALLOW (ohm.m) | 16.87 | 33 |
| **Δ Res (Deep − Shallow)** | **10.99** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2415 m MD — Interval 2412.5 – 2417.5 m

**Sample Description (spreadsheet):** Sample 2415m: 10% Siltstone, 90% fine to medium Sandstone, 100% bright FLUOR in SST. TG 108.9U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 108.9 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2400m: lt-dk gry,aren,arg i/p,sli micmic,tr liths,
- **SANDSTONE** @ ~2412m: trnsl,lt gry brn,f-med,wl srt, sbang-sbrnd,wk sil cmt,rr off wh arg mtx,rr mic flks, rr liths,lse-fri aggs,fr vis & inf por,bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 119.0 | 32 |
| RES_DEEP (ohm.m) | 31.66 | 32 |
| RES_SHALLOW (ohm.m) | 17.61 | 32 |
| **Δ Res (Deep − Shallow)** | **14.05** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2420 m MD — Interval 2417.5 – 2422.5 m

**Sample Description (spreadsheet):** Sample 2420m: 10% Siltstone, 90% fine to medium Sandstone, 100% bright FLUOR in SST. TG 80.9U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 80.9 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2412m: trnsl,lt gry brn,f-med,wl srt, sbang-sbrnd,wk sil cmt,rr off wh arg mtx,rr mic flks, rr liths,lse-fri aggs,fr vis & inf por,bri fluor.
- **SILTSTONE** @ ~2416m: lt-dk gry,aren,arg i/p,sli micmic,tr liths, tr carb spks,mod hd,sbblky-sbfiss.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 116.0 | 33 |
| RES_DEEP (ohm.m) | 37.59 | 33 |
| RES_SHALLOW (ohm.m) | 18.56 | 33 |
| **Δ Res (Deep − Shallow)** | **19.03** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2425 m MD — Interval 2422.5 – 2427.5 m

**Sample Description (spreadsheet):** Sample 2425m: 10% Siltstone, 90% fine to medium Sandstone, 100% bright FLUOR in SST. TG 71.9U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 71.9 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2412m: trnsl,lt gry brn,f-med,wl srt, sbang-sbrnd,wk sil cmt,rr off wh arg mtx,rr mic flks, rr liths,lse-fri aggs,fr vis & inf por,bri fluor.
- **SILTSTONE** @ ~2416m: lt-dk gry,aren,arg i/p,sli micmic,tr liths, tr carb spks,mod hd,sbblky-sbfiss.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 116.2 | 33 |
| RES_DEEP (ohm.m) | 47.03 | 33 |
| RES_SHALLOW (ohm.m) | 20.01 | 33 |
| **Δ Res (Deep − Shallow)** | **27.02** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2430 m MD — Interval 2427.5 – 2432.5 m

**Sample Description (spreadsheet):** Sample 2430m: 10% Siltstone, 90% fine to medium Sandstone, 100% bright FLUOR in SST. TG 105.1U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 105.1 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2416m: lt-dk gry,aren,arg i/p,sli micmic,tr liths, tr carb spks,mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~2424m: trnsl,clr,lt gry brn,f-occ med,wl srt, sbang-sbrnd,wk sil cmt,rr off wh arg mtx,rr mic flks, rr liths,fri-lse,fr vis & inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 113.8 | 33 |
| RES_DEEP (ohm.m) | 57.06 | 33 |
| RES_SHALLOW (ohm.m) | 22.41 | 33 |
| **Δ Res (Deep − Shallow)** | **34.65** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2435 m MD — Interval 2432.5 – 2437.5 m

**Sample Description (spreadsheet):** Sample 2435m: 5% Siltstone, 95% fine to medium Sandstone, 100% bright FLUOR in SST. TG 64.2U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 64.2 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2424m: trnsl,clr,lt gry brn,f-occ med,wl srt, sbang-sbrnd,wk sil cmt,rr off wh arg mtx,rr mic flks, rr liths,fri-lse,fr vis & inf por,bri fluor.
- **SANDSTONE** @ ~2444m: clr,trnsl,f-med,wl srt,sbrnd-sbang,wk sil cmt,nil vis mtx,rr liths,lse & cln,gd inf por,bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 110.3 | 33 |
| RES_DEEP (ohm.m) | 66.28 | 33 |
| RES_SHALLOW (ohm.m) | 24.48 | 33 |
| **Δ Res (Deep − Shallow)** | **41.79** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2440 m MD — Interval 2437.5 – 2442.5 m

**Sample Description (spreadsheet):** Sample 2440m: 5% Siltstone, 95% fine to medium Sandstone, 100% bright FLUOR in SST. TG 125.5U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 125.5 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2424m: trnsl,clr,lt gry brn,f-occ med,wl srt, sbang-sbrnd,wk sil cmt,rr off wh arg mtx,rr mic flks, rr liths,fri-lse,fr vis & inf por,bri fluor.
- **SANDSTONE** @ ~2444m: clr,trnsl,f-med,wl srt,sbrnd-sbang,wk sil cmt,nil vis mtx,rr liths,lse & cln,gd inf por,bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.0 | 32 |
| RES_DEEP (ohm.m) | 355.11 | 32 |
| RES_SHALLOW (ohm.m) | 51.85 | 32 |
| **Δ Res (Deep − Shallow)** | **303.26** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2445 m MD — Interval 2442.5 – 2447.5 m

**Sample Description (spreadsheet):** Sample 2445m: 0% Siltstone, 100% fine to medium Sandstone, 100% bright FLUOR in SST. TG 115.3U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 115.3 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2444m: clr,trnsl,f-med,wl srt,sbrnd-sbang,wk sil cmt,nil vis mtx,rr liths,lse & cln,gd inf por,bri fluor.
- **SANDSTONE** @ ~2460m: clr,trnsl,f-med,rr crs,mod srt, sbrnd-sbang,wk sil cmt,nil vis mtx,rr mic flks,lse & cln,gd inf por,bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 62.4 | 33 |
| RES_DEEP (ohm.m) | 269.78 | 33 |
| RES_SHALLOW (ohm.m) | 59.90 | 33 |
| **Δ Res (Deep − Shallow)** | **209.89** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2450 m MD — Interval 2447.5 – 2452.5 m

**Sample Description (spreadsheet):** Sample 2450m: 0% Siltstone, 100% fine to medium Sandstone, 100% bright FLUOR in SST. TG 121.7U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 121.7 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2444m: clr,trnsl,f-med,wl srt,sbrnd-sbang,wk sil cmt,nil vis mtx,rr liths,lse & cln,gd inf por,bri fluor.
- **SANDSTONE** @ ~2460m: clr,trnsl,f-med,rr crs,mod srt, sbrnd-sbang,wk sil cmt,nil vis mtx,rr mic flks,lse & cln,gd inf por,bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 60.2 | 33 |
| RES_DEEP (ohm.m) | 196.09 | 33 |
| RES_SHALLOW (ohm.m) | 57.59 | 33 |
| **Δ Res (Deep − Shallow)** | **138.50** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2455 m MD — Interval 2452.5 – 2457.5 m

**Sample Description (spreadsheet):** Sample 2455m: 5% Siltstone, 95% fine to medium Sandstone, 100% bright FLUOR in SST. TG 80.2U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 80.2 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2444m: clr,trnsl,f-med,wl srt,sbrnd-sbang,wk sil cmt,nil vis mtx,rr liths,lse & cln,gd inf por,bri fluor.
- **SANDSTONE** @ ~2460m: clr,trnsl,f-med,rr crs,mod srt, sbrnd-sbang,wk sil cmt,nil vis mtx,rr mic flks,lse & cln,gd inf por,bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 61.7 | 33 |
| RES_DEEP (ohm.m) | 199.36 | 33 |
| RES_SHALLOW (ohm.m) | 47.80 | 33 |
| **Δ Res (Deep − Shallow)** | **151.56** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2460 m MD — Interval 2457.5 – 2462.5 m

**Sample Description (spreadsheet):** Sample 2460m: 5% Siltstone, 95% fine to medium Sandstone, 100% bright FLUOR in SST. TG 113.7U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 113.7 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2444m: clr,trnsl,f-med,wl srt,sbrnd-sbang,wk sil cmt,nil vis mtx,rr liths,lse & cln,gd inf por,bri fluor.
- **SANDSTONE** @ ~2460m: clr,trnsl,f-med,rr crs,mod srt, sbrnd-sbang,wk sil cmt,nil vis mtx,rr mic flks,lse & cln,gd inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.4 | 33 |
| RES_DEEP (ohm.m) | 160.26 | 33 |
| RES_SHALLOW (ohm.m) | 65.31 | 33 |
| **Δ Res (Deep − Shallow)** | **94.95** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2465 m MD — Interval 2462.5 – 2467.5 m

**Sample Description (spreadsheet):** Sample 2465m: 10% Siltstone, 90% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 109.6U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 109.6 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2460m: clr,trnsl,f-med,rr crs,mod srt, sbrnd-sbang,wk sil cmt,nil vis mtx,rr mic flks,lse & cln,gd inf por,bri fluor.
- **SANDSTONE** @ ~2476m: clr,trnsl,f-med,wl srt,sbrnd-sbang,wk sil cmt,nil vis mtx,rr mic flks,rr liths,lse & cln,gd inf por,bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 67.6 | 32 |
| RES_DEEP (ohm.m) | 152.10 | 32 |
| RES_SHALLOW (ohm.m) | 60.20 | 32 |
| **Δ Res (Deep − Shallow)** | **91.90** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2470 m MD — Interval 2467.5 – 2472.5 m

**Sample Description (spreadsheet):** Sample 2470m: 10% Siltstone, 90% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 118.7U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 118.7 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2460m: clr,trnsl,f-med,rr crs,mod srt, sbrnd-sbang,wk sil cmt,nil vis mtx,rr mic flks,lse & cln,gd inf por,bri fluor.
- **SANDSTONE** @ ~2476m: clr,trnsl,f-med,wl srt,sbrnd-sbang,wk sil cmt,nil vis mtx,rr mic flks,rr liths,lse & cln,gd inf por,bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 66.6 | 33 |
| RES_DEEP (ohm.m) | 146.00 | 33 |
| RES_SHALLOW (ohm.m) | 50.25 | 33 |
| **Δ Res (Deep − Shallow)** | **95.75** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2475 m MD — Interval 2472.5 – 2477.5 m

**Sample Description (spreadsheet):** Sample 2475m: 10% Siltstone, 90% fine to medium Sandstone, 100% bright FLUOR in SST. TG 57.3U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 57.3 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2460m: clr,trnsl,f-med,rr crs,mod srt, sbrnd-sbang,wk sil cmt,nil vis mtx,rr mic flks,lse & cln,gd inf por,bri fluor.
- **SANDSTONE** @ ~2476m: clr,trnsl,f-med,wl srt,sbrnd-sbang,wk sil cmt,nil vis mtx,rr mic flks,rr liths,lse & cln,gd inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 68.0 | 33 |
| RES_DEEP (ohm.m) | 151.02 | 33 |
| RES_SHALLOW (ohm.m) | 45.08 | 33 |
| **Δ Res (Deep − Shallow)** | **105.94** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2480 m MD — Interval 2477.5 – 2482.5 m

**Sample Description (spreadsheet):** Sample 2480m: 10% Siltstone, 90% fine to medium Sandstone, 100% bright FLUOR in SST. TG 115U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 115 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2476m: clr,trnsl,f-med,wl srt,sbrnd-sbang,wk sil cmt,nil vis mtx,rr mic flks,rr liths,lse & cln,gd inf por,bri fluor.
- **SILTSTONE** @ ~2488m: lt-dk gry,aren,arg i/p,sli micmic,com LMST & sid frags,mod hd-hd,blky-sbblky. MW: 9.9 FV: 43 PV: 11 MD:2491.3 m
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.4 | 33 |
| RES_DEEP (ohm.m) | 100.03 | 33 |
| RES_SHALLOW (ohm.m) | 37.81 | 33 |
| **Δ Res (Deep − Shallow)** | **62.22** | — |

**Permeability Proxy:** High inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2485 m MD — Interval 2482.5 – 2487.5 m

**Sample Description (spreadsheet):** Sample 2485m: 0% Siltstone, 100% fine to medium Sandstone, 100% bright FLUOR in SST. TG 96.6U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 96.6 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2476m: clr,trnsl,f-med,wl srt,sbrnd-sbang,wk sil cmt,nil vis mtx,rr mic flks,rr liths,lse & cln,gd inf por,bri fluor.
- **SILTSTONE** @ ~2488m: lt-dk gry,aren,arg i/p,sli micmic,com LMST & sid frags,mod hd-hd,blky-sbblky. MW: 9.9 FV: 43 PV: 11 MD:2491.3 m
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 111.9 | 33 |
| RES_DEEP (ohm.m) | 63.26 | 33 |
| RES_SHALLOW (ohm.m) | 30.01 | 33 |
| **Δ Res (Deep − Shallow)** | **33.25** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2490 m MD — Interval 2487.5 – 2492.5 m

**Sample Description (spreadsheet):** Sample 2490m: 0% Siltstone, 100% fine to medium Sandstone, 100% bright FLUOR in SST. TG 70.4U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 70.4 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2476m: clr,trnsl,f-med,wl srt,sbrnd-sbang,wk sil cmt,nil vis mtx,rr mic flks,rr liths,lse & cln,gd inf por,bri fluor.
- **SILTSTONE** @ ~2488m: lt-dk gry,aren,arg i/p,sli micmic,com LMST & sid frags,mod hd-hd,blky-sbblky. MW: 9.9 FV: 43 PV: 11 MD:2491.3 m
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 109.1 | 32 |
| RES_DEEP (ohm.m) | 38.51 | 32 |
| RES_SHALLOW (ohm.m) | 22.03 | 32 |
| **Δ Res (Deep − Shallow)** | **16.48** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2495 m MD — Interval 2492.5 – 2497.5 m

**Sample Description (spreadsheet):** Sample 2495m: 0% Siltstone, 100% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 61.3U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 61.3 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2488m: lt-dk gry,aren,arg i/p,sli micmic,com LMST & sid frags,mod hd-hd,blky-sbblky. MW: 9.9 FV: 43 PV: 11 MD:2491.3 m
- **SANDSTONE** @ ~2496m: clr,trnsl,f-med,wl srt,sbrnd-sbang,wk sil cmt,nil vis mtx,rr mic flks,rr liths,lse & cln,gd inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.6 | 33 |
| RES_DEEP (ohm.m) | 27.84 | 33 |
| RES_SHALLOW (ohm.m) | 18.60 | 33 |
| **Δ Res (Deep − Shallow)** | **9.24** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2500 m MD — Interval 2497.5 – 2502.5 m

**Sample Description (spreadsheet):** Sample 2500m: common siderite in 0% Siltstone, 100% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 94.9U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 94.9 U |
| FeCO₃ in Siltstone | com |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2488m: lt-dk gry,aren,arg i/p,sli micmic,com LMST & sid frags,mod hd-hd,blky-sbblky. MW: 9.9 FV: 43 PV: 11 MD:2491.3 m
- **SANDSTONE** @ ~2496m: clr,trnsl,f-med,wl srt,sbrnd-sbang,wk sil cmt,nil vis mtx,rr mic flks,rr liths,lse & cln,gd inf por,bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 65.6 | 33 |
| RES_DEEP (ohm.m) | 22.92 | 33 |
| RES_SHALLOW (ohm.m) | 17.98 | 33 |
| **Δ Res (Deep − Shallow)** | **4.93** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2505 m MD — Interval 2502.5 – 2507.5 m

**Sample Description (spreadsheet):** Sample 2505m: 20% Siltstone, 80% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 92U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 92 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2488m: lt-dk gry,aren,arg i/p,sli micmic,com LMST & sid frags,mod hd-hd,blky-sbblky. MW: 9.9 FV: 43 PV: 11 MD:2491.3 m
- **SANDSTONE** @ ~2496m: clr,trnsl,f-med,wl srt,sbrnd-sbang,wk sil cmt,nil vis mtx,rr mic flks,rr liths,lse & cln,gd inf por,bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.4 | 33 |
| RES_DEEP (ohm.m) | 23.58 | 33 |
| RES_SHALLOW (ohm.m) | 18.93 | 33 |
| **Δ Res (Deep − Shallow)** | **4.65** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2510 m MD — Interval 2507.5 – 2512.5 m

**Sample Description (spreadsheet):** Sample 2510m: 20% Siltstone, 80% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 84.1U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 84.1 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2496m: clr,trnsl,f-med,wl srt,sbrnd-sbang,wk sil cmt,nil vis mtx,rr mic flks,rr liths,lse & cln,gd inf por,bri fluor.
- **SANDSTONE** @ ~2508m: trnsl,clr,off wh,f-med,wl srt, sbrnd-sbang,off wh wk sil cmt,nil vis mtx,tr mic flks, tr liths,lse,gd inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.7 | 33 |
| RES_DEEP (ohm.m) | 24.35 | 33 |
| RES_SHALLOW (ohm.m) | 20.12 | 33 |
| **Δ Res (Deep − Shallow)** | **4.23** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2515 m MD — Interval 2512.5 – 2517.5 m

**Sample Description (spreadsheet):** Sample 2515m: 10% Siltstone, 90% fine to medium Sandstone, 100% bright FLUOR in SST. TG 78.3U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 78.3 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2508m: trnsl,clr,off wh,f-med,wl srt, sbrnd-sbang,off wh wk sil cmt,nil vis mtx,tr mic flks, tr liths,lse,gd inf por,bri fluor.
- **SANDSTONE** @ ~2516m: trnsl,clr,off wh,f-med,wl srt, sbrnd-sbang,off wh wk sil cmt,nil vis mtx,tr mic flks, tr liths,lse,gd inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 114.7 | 33 |
| RES_DEEP (ohm.m) | 25.11 | 33 |
| RES_SHALLOW (ohm.m) | 20.56 | 33 |
| **Δ Res (Deep − Shallow)** | **4.55** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2520 m MD — Interval 2517.5 – 2522.5 m

**Sample Description (spreadsheet):** Sample 2520m: 10% Siltstone, 90% fine to medium Sandstone, 100% bright FLUOR in SST. TG 42.8U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 42.8 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2508m: trnsl,clr,off wh,f-med,wl srt, sbrnd-sbang,off wh wk sil cmt,nil vis mtx,tr mic flks, tr liths,lse,gd inf por,bri fluor.
- **SANDSTONE** @ ~2516m: trnsl,clr,off wh,f-med,wl srt, sbrnd-sbang,off wh wk sil cmt,nil vis mtx,tr mic flks, tr liths,lse,gd inf por,bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.4 | 32 |
| RES_DEEP (ohm.m) | 25.30 | 32 |
| RES_SHALLOW (ohm.m) | 19.57 | 32 |
| **Δ Res (Deep − Shallow)** | **5.73** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2525 m MD — Interval 2522.5 – 2527.5 m

**Sample Description (spreadsheet):** Sample 2525m: 10% Siltstone, 90% fine to medium Sandstone, 100% bright FLUOR in SST. TG 105.6U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 105.6 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2508m: trnsl,clr,off wh,f-med,wl srt, sbrnd-sbang,off wh wk sil cmt,nil vis mtx,tr mic flks, tr liths,lse,gd inf por,bri fluor.
- **SANDSTONE** @ ~2516m: trnsl,clr,off wh,f-med,wl srt, sbrnd-sbang,off wh wk sil cmt,nil vis mtx,tr mic flks, tr liths,lse,gd inf por,bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.2 | 33 |
| RES_DEEP (ohm.m) | 26.02 | 33 |
| RES_SHALLOW (ohm.m) | 20.36 | 33 |
| **Δ Res (Deep − Shallow)** | **5.66** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2530 m MD — Interval 2527.5 – 2532.5 m

**Sample Description (spreadsheet):** Sample 2530m: trace siderite in 10% Siltstone, 90% fine to medium Sandstone, 100% bright FLUOR in SST. TG 49.7U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 49.7 U |
| FeCO₃ in Siltstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2516m: trnsl,clr,off wh,f-med,wl srt, sbrnd-sbang,off wh wk sil cmt,nil vis mtx,tr mic flks, tr liths,lse,gd inf por,bri fluor.
- **SILTSTONE** @ ~2528m: lt-med gry,aren,mnr arg,rr micmic,tr sid frags,mod hd,sbblky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.9 | 33 |
| RES_DEEP (ohm.m) | 26.20 | 33 |
| RES_SHALLOW (ohm.m) | 20.56 | 33 |
| **Δ Res (Deep − Shallow)** | **5.64** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2535 m MD — Interval 2532.5 – 2537.5 m

**Sample Description (spreadsheet):** Sample 2535m: 10% Siltstone, 90% fine to medium Sandstone, 100% bright FLUOR in SST. TG 98.8U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 98.8 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2528m: lt-med gry,aren,mnr arg,rr micmic,tr sid frags,mod hd,sbblky.
- **SANDSTONE** @ ~2536m: trnsl,clr,off wh,f-med,wl srt, sbrnd-sbang,off wh wk sil cmt,nil vis mtx,tr mic flks, tr liths,lse,gd inf por,bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.5 | 33 |
| RES_DEEP (ohm.m) | 27.43 | 33 |
| RES_SHALLOW (ohm.m) | 21.63 | 33 |
| **Δ Res (Deep − Shallow)** | **5.81** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2540 m MD — Interval 2537.5 – 2542.5 m

**Sample Description (spreadsheet):** Sample 2540m: 10% Siltstone, 90% fine to medium Sandstone, 100% bright FLUOR in SST. TG 101.5U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 101.5 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2528m: lt-med gry,aren,mnr arg,rr micmic,tr sid frags,mod hd,sbblky.
- **SANDSTONE** @ ~2536m: trnsl,clr,off wh,f-med,wl srt, sbrnd-sbang,off wh wk sil cmt,nil vis mtx,tr mic flks, tr liths,lse,gd inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.3 | 33 |
| RES_DEEP (ohm.m) | 26.62 | 33 |
| RES_SHALLOW (ohm.m) | 20.69 | 33 |
| **Δ Res (Deep − Shallow)** | **5.93** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2545 m MD — Interval 2542.5 – 2547.5 m

**Sample Description (spreadsheet):** Sample 2545m: 20% Siltstone, 80% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 118.6U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 118.6 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2528m: lt-med gry,aren,mnr arg,rr micmic,tr sid frags,mod hd,sbblky.
- **SANDSTONE** @ ~2536m: trnsl,clr,off wh,f-med,wl srt, sbrnd-sbang,off wh wk sil cmt,nil vis mtx,tr mic flks, tr liths,lse,gd inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.8 | 32 |
| RES_DEEP (ohm.m) | 26.07 | 32 |
| RES_SHALLOW (ohm.m) | 20.37 | 32 |
| **Δ Res (Deep − Shallow)** | **5.70** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2550 m MD — Interval 2547.5 – 2552.5 m

**Sample Description (spreadsheet):** Sample 2550m: 20% Siltstone, 80% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 52.8U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 52.8 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2536m: trnsl,clr,off wh,f-med,wl srt, sbrnd-sbang,off wh wk sil cmt,nil vis mtx,tr mic flks, tr liths,lse,gd inf por,bri fluor.
- **SANDSTONE** @ ~2556m: trnsl,clr,vf-med,wl srt,sbrnd-sbang, 1231.8 off wh wk sil cmt,nil vis mtx,tr mic,tr liths,lse,gd inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.8 | 33 |
| RES_DEEP (ohm.m) | 24.99 | 33 |
| RES_SHALLOW (ohm.m) | 19.80 | 33 |
| **Δ Res (Deep − Shallow)** | **5.19** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2555 m MD — Interval 2552.5 – 2557.5 m

**Sample Description (spreadsheet):** Sample 2555m: 5% Siltstone, 95% fine to medium Sandstone, 100% bright FLUOR in SST. TG 124.2U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 124.2 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2556m: trnsl,clr,vf-med,wl srt,sbrnd-sbang, 1231.8 off wh wk sil cmt,nil vis mtx,tr mic,tr liths,lse,gd inf por,bri fluor.
- **SILTSTONE** @ ~2567m: med-dk gry,aren,mnr arg,mnr micmic, tr sid,mod hd,sbblky-blky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.2 | 33 |
| RES_DEEP (ohm.m) | 25.66 | 33 |
| RES_SHALLOW (ohm.m) | 20.62 | 33 |
| **Δ Res (Deep − Shallow)** | **5.05** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2560 m MD — Interval 2557.5 – 2562.5 m

**Sample Description (spreadsheet):** Sample 2560m: 5% Siltstone, 95% fine to medium Sandstone, 100% bright FLUOR in SST. TG 105.2U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 105.2 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2556m: trnsl,clr,vf-med,wl srt,sbrnd-sbang, 1231.8 off wh wk sil cmt,nil vis mtx,tr mic,tr liths,lse,gd inf por,bri fluor.
- **SILTSTONE** @ ~2567m: med-dk gry,aren,mnr arg,mnr micmic, tr sid,mod hd,sbblky-blky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.1 | 33 |
| RES_DEEP (ohm.m) | 25.72 | 33 |
| RES_SHALLOW (ohm.m) | 20.66 | 33 |
| **Δ Res (Deep − Shallow)** | **5.06** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2565 m MD — Interval 2562.5 – 2567.5 m

**Sample Description (spreadsheet):** Sample 2565m: 10% Siltstone, 90% fine to medium Sandstone, 100% bright FLUOR in SST. TG 106.3U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 106.3 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2556m: trnsl,clr,vf-med,wl srt,sbrnd-sbang, 1231.8 off wh wk sil cmt,nil vis mtx,tr mic,tr liths,lse,gd inf por,bri fluor.
- **SILTSTONE** @ ~2567m: med-dk gry,aren,mnr arg,mnr micmic, tr sid,mod hd,sbblky-blky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.5 | 33 |
| RES_DEEP (ohm.m) | 25.31 | 33 |
| RES_SHALLOW (ohm.m) | 20.59 | 33 |
| **Δ Res (Deep − Shallow)** | **4.72** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2570 m MD — Interval 2567.5 – 2572.5 m

**Sample Description (spreadsheet):** Sample 2570m: trace siderite in 10% Siltstone, 90% fine to medium Sandstone, 100% bright FLUOR in SST. TG 65.7U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 65.7 U |
| FeCO₃ in Siltstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2556m: trnsl,clr,vf-med,wl srt,sbrnd-sbang, 1231.8 off wh wk sil cmt,nil vis mtx,tr mic,tr liths,lse,gd inf por,bri fluor.
- **SILTSTONE** @ ~2567m: med-dk gry,aren,mnr arg,mnr micmic, tr sid,mod hd,sbblky-blky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.9 | 32 |
| RES_DEEP (ohm.m) | 23.42 | 32 |
| RES_SHALLOW (ohm.m) | 18.88 | 32 |
| **Δ Res (Deep − Shallow)** | **4.54** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2575 m MD — Interval 2572.5 – 2577.5 m

**Sample Description (spreadsheet):** Sample 2575m: 5% Siltstone, 95% fine to medium Sandstone, 100% bright FLUOR in SST. TG 118.8U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 118.8 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2567m: med-dk gry,aren,mnr arg,mnr micmic, tr sid,mod hd,sbblky-blky.
- **SANDSTONE** @ ~2572m: clr,trnsl,f-med,crs i/p,wl srt, 84 / 5 / 4 / 4 / 3 sbrnd-sbang,wk sil cmt,nil vis mtx,rr mic flks,rr liths, lse,gd inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.4 | 33 |
| RES_DEEP (ohm.m) | 22.43 | 33 |
| RES_SHALLOW (ohm.m) | 17.49 | 33 |
| **Δ Res (Deep − Shallow)** | **4.93** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2580 m MD — Interval 2577.5 – 2582.5 m

**Sample Description (spreadsheet):** Sample 2580m: 5% Siltstone, 95% fine to medium Sandstone, 100% bright FLUOR in SST. TG 83.2U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 83.2 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2567m: med-dk gry,aren,mnr arg,mnr micmic, tr sid,mod hd,sbblky-blky.
- **SANDSTONE** @ ~2572m: clr,trnsl,f-med,crs i/p,wl srt, 84 / 5 / 4 / 4 / 3 sbrnd-sbang,wk sil cmt,nil vis mtx,rr mic flks,rr liths, lse,gd inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.0 | 33 |
| RES_DEEP (ohm.m) | 21.55 | 33 |
| RES_SHALLOW (ohm.m) | 16.80 | 33 |
| **Δ Res (Deep − Shallow)** | **4.75** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2585 m MD — Interval 2582.5 – 2587.5 m

**Sample Description (spreadsheet):** Sample 2585m: 5% Siltstone, 95% fine to medium Sandstone, 100% bright FLUOR in SST. TG 102.7U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 102.7 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2572m: clr,trnsl,f-med,crs i/p,wl srt, 84 / 5 / 4 / 4 / 3 sbrnd-sbang,wk sil cmt,nil vis mtx,rr mic flks,rr liths, lse,gd inf por,bri fluor.
- **SANDSTONE** @ ~2588m: clr,trnsl,f-med,crs i/p,wl srt, sbrnd-sbang,wk sil cmt,nil vis mtx,rr mic flks,rr liths, lse,gd inf por,bri fluor. MW: 9.9 FV: 42

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.0 | 33 |
| RES_DEEP (ohm.m) | 20.16 | 33 |
| RES_SHALLOW (ohm.m) | 15.07 | 33 |
| **Δ Res (Deep − Shallow)** | **5.09** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2590 m MD — Interval 2587.5 – 2592.5 m

**Sample Description (spreadsheet):** Sample 2590m: 5% Siltstone, 95% fine to medium Sandstone, 100% bright FLUOR in SST. TG 75.1U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 75.1 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2588m: clr,trnsl,f-med,crs i/p,wl srt, sbrnd-sbang,wk sil cmt,nil vis mtx,rr mic flks,rr liths, lse,gd inf por,bri fluor. MW: 9.9 FV: 42

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.1 | 33 |
| RES_DEEP (ohm.m) | 20.43 | 33 |
| RES_SHALLOW (ohm.m) | 15.03 | 33 |
| **Δ Res (Deep − Shallow)** | **5.40** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2595 m MD — Interval 2592.5 – 2597.5 m

**Sample Description (spreadsheet):** Sample 2595m: 10% Siltstone, 90% fine to medium Sandstone, 100% bright FLUOR in SST. TG 78.6U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 78.6 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2588m: clr,trnsl,f-med,crs i/p,wl srt, sbrnd-sbang,wk sil cmt,nil vis mtx,rr mic flks,rr liths, lse,gd inf por,bri fluor. MW: 9.9 FV: 42
- **SANDSTONE** @ ~2608m: clr,trnsl,opq,off wh,f-med,wl srt, sbrnd-sbang,wk sil cmt,tr lt gry arg mtx,rr mic flks,rr liths,lse,gd inf por,mod bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 112.5 | 32 |
| RES_DEEP (ohm.m) | 20.36 | 32 |
| RES_SHALLOW (ohm.m) | 16.07 | 32 |
| **Δ Res (Deep − Shallow)** | **4.29** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2600 m MD — Interval 2597.5 – 2602.5 m

**Sample Description (spreadsheet):** Sample 2600m: 10% Siltstone, 90% fine to medium Sandstone, 100% bright FLUOR in SST. TG 72.4U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 72.4 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2588m: clr,trnsl,f-med,crs i/p,wl srt, sbrnd-sbang,wk sil cmt,nil vis mtx,rr mic flks,rr liths, lse,gd inf por,bri fluor. MW: 9.9 FV: 42
- **SANDSTONE** @ ~2608m: clr,trnsl,opq,off wh,f-med,wl srt, sbrnd-sbang,wk sil cmt,tr lt gry arg mtx,rr mic flks,rr liths,lse,gd inf por,mod bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 109.4 | 33 |
| RES_DEEP (ohm.m) | 19.91 | 33 |
| RES_SHALLOW (ohm.m) | 15.73 | 33 |
| **Δ Res (Deep − Shallow)** | **4.19** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2605 m MD — Interval 2602.5 – 2607.5 m

**Sample Description (spreadsheet):** Sample 2605m: 0% Siltstone, 100% fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 79.2U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% mod bri |
| Total Gas | 79.2 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2588m: clr,trnsl,f-med,crs i/p,wl srt, sbrnd-sbang,wk sil cmt,nil vis mtx,rr mic flks,rr liths, lse,gd inf por,bri fluor. MW: 9.9 FV: 42
- **SANDSTONE** @ ~2608m: clr,trnsl,opq,off wh,f-med,wl srt, sbrnd-sbang,wk sil cmt,tr lt gry arg mtx,rr mic flks,rr liths,lse,gd inf por,mod bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.9 | 33 |
| RES_DEEP (ohm.m) | 19.77 | 33 |
| RES_SHALLOW (ohm.m) | 15.45 | 33 |
| **Δ Res (Deep − Shallow)** | **4.32** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2610 m MD — Interval 2607.5 – 2612.5 m

**Sample Description (spreadsheet):** Sample 2610m: 0% Siltstone, 100% fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 70.2U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% mod bri |
| Total Gas | 70.2 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2608m: clr,trnsl,opq,off wh,f-med,wl srt, sbrnd-sbang,wk sil cmt,tr lt gry arg mtx,rr mic flks,rr liths,lse,gd inf por,mod bri fluor.
- **SILTSTONE** @ ~2620m: med-dk gry,aren,mnr micmic,mod hd-hd,sbblky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.1 | 33 |
| RES_DEEP (ohm.m) | 20.27 | 33 |
| RES_SHALLOW (ohm.m) | 15.59 | 33 |
| **Δ Res (Deep − Shallow)** | **4.68** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2615 m MD — Interval 2612.5 – 2617.5 m

**Sample Description (spreadsheet):** Sample 2615m: 5% Siltstone, 95% fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 71.4U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% mod bri |
| Total Gas | 71.4 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2608m: clr,trnsl,opq,off wh,f-med,wl srt, sbrnd-sbang,wk sil cmt,tr lt gry arg mtx,rr mic flks,rr liths,lse,gd inf por,mod bri fluor.
- **SILTSTONE** @ ~2620m: med-dk gry,aren,mnr micmic,mod hd-hd,sbblky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.0 | 33 |
| RES_DEEP (ohm.m) | 20.90 | 33 |
| RES_SHALLOW (ohm.m) | 15.71 | 33 |
| **Δ Res (Deep − Shallow)** | **5.19** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2620 m MD — Interval 2617.5 – 2622.5 m

**Sample Description (spreadsheet):** Sample 2620m: 5% Siltstone, 95% fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 81.4U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% mod bri |
| Total Gas | 81.4 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2608m: clr,trnsl,opq,off wh,f-med,wl srt, sbrnd-sbang,wk sil cmt,tr lt gry arg mtx,rr mic flks,rr liths,lse,gd inf por,mod bri fluor.
- **SILTSTONE** @ ~2620m: med-dk gry,aren,mnr micmic,mod hd-hd,sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.5 | 33 |
| RES_DEEP (ohm.m) | 21.33 | 33 |
| RES_SHALLOW (ohm.m) | 15.83 | 33 |
| **Δ Res (Deep − Shallow)** | **5.50** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2625 m MD — Interval 2622.5 – 2627.5 m

**Sample Description (spreadsheet):** Sample 2625m: 0% Siltstone, 100% fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 88.3U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% mod bri |
| Total Gas | 88.3 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2608m: clr,trnsl,opq,off wh,f-med,wl srt, sbrnd-sbang,wk sil cmt,tr lt gry arg mtx,rr mic flks,rr liths,lse,gd inf por,mod bri fluor.
- **SILTSTONE** @ ~2620m: med-dk gry,aren,mnr micmic,mod hd-hd,sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.5 | 32 |
| RES_DEEP (ohm.m) | 21.72 | 32 |
| RES_SHALLOW (ohm.m) | 16.19 | 32 |
| **Δ Res (Deep − Shallow)** | **5.53** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2630 m MD — Interval 2627.5 – 2632.5 m

**Sample Description (spreadsheet):** Sample 2630m: 0% Siltstone, 100% very fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 84U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% mod bri |
| Total Gas | 84 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2620m: med-dk gry,aren,mnr micmic,mod hd-hd,sbblky.
- **SANDSTONE** @ ~2628m: clr,trnsl,vf-f,wl srt,sbrnd,wk sil cmt,no vis mtx,mnr mic flks,lse,fr-gd inf por,mod bri fluor. 85 / 5 / 3 / 3 / 4 FLUORESCENCE:2625.0m-2640.0m,100% of SST,dll-bri yel-grn evn fluor,mod bldng 26 12 3 3 2 1.1 cut,blu-wh c/c,thk r/r.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.1 | 33 |
| RES_DEEP (ohm.m) | 19.38 | 33 |
| RES_SHALLOW (ohm.m) | 14.50 | 33 |
| **Δ Res (Deep − Shallow)** | **4.89** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2635 m MD — Interval 2632.5 – 2637.5 m

**Sample Description (spreadsheet):** Sample 2635m: 5% Siltstone, 95% very fine to medium Sandstone, 100% bright FLUOR in SST. TG 66.8U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 66.8 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2620m: med-dk gry,aren,mnr micmic,mod hd-hd,sbblky.
- **SANDSTONE** @ ~2628m: clr,trnsl,vf-f,wl srt,sbrnd,wk sil cmt,no vis mtx,mnr mic flks,lse,fr-gd inf por,mod bri fluor. 85 / 5 / 3 / 3 / 4 FLUORESCENCE:2625.0m-2640.0m,100% of SST,dll-bri yel-grn evn fluor,mod bldng 26 12 3 3 2 1.1 cut,blu-wh c/c,thk r/r.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.5 | 33 |
| RES_DEEP (ohm.m) | 19.71 | 33 |
| RES_SHALLOW (ohm.m) | 14.75 | 33 |
| **Δ Res (Deep − Shallow)** | **4.96** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2640 m MD — Interval 2637.5 – 2642.5 m

**Sample Description (spreadsheet):** Sample 2640m: 5% Siltstone, 95% very fine to medium Sandstone, 100% bright FLUOR in SST. TG 62.1U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 62.1 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2628m: clr,trnsl,vf-f,wl srt,sbrnd,wk sil cmt,no vis mtx,mnr mic flks,lse,fr-gd inf por,mod bri fluor. 85 / 5 / 3 / 3 / 4 FLUORESCENCE:2625.0m-2640.0m,100% of SST,dll-bri yel-grn evn fluor,mod bldng 26 12 3 3 2 1.1 cut,blu-wh c/c,thk r/r.
- **SANDSTONE** @ ~2636m: clr,trnsl,vf-f,wl srt,sbrnd,wk sil cmt,nil vis mtx,mnr mic flks,lse,fr-gd inf por,bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 109.2 | 33 |
| RES_DEEP (ohm.m) | 20.43 | 33 |
| RES_SHALLOW (ohm.m) | 15.45 | 33 |
| **Δ Res (Deep − Shallow)** | **4.98** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2645 m MD — Interval 2642.5 – 2647.5 m

**Sample Description (spreadsheet):** Sample 2645m: 5% Siltstone, 95% very fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 48.1U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% mod bri |
| Total Gas | 48.1 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2628m: clr,trnsl,vf-f,wl srt,sbrnd,wk sil cmt,no vis mtx,mnr mic flks,lse,fr-gd inf por,mod bri fluor. 85 / 5 / 3 / 3 / 4 FLUORESCENCE:2625.0m-2640.0m,100% of SST,dll-bri yel-grn evn fluor,mod bldng 26 12 3 3 2 1.1 cut,blu-wh c/c,thk r/r.
- **SANDSTONE** @ ~2636m: clr,trnsl,vf-f,wl srt,sbrnd,wk sil cmt,nil vis mtx,mnr mic flks,lse,fr-gd inf por,bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 111.1 | 33 |
| RES_DEEP (ohm.m) | 21.27 | 33 |
| RES_SHALLOW (ohm.m) | 16.35 | 33 |
| **Δ Res (Deep − Shallow)** | **4.92** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2650 m MD — Interval 2647.5 – 2652.5 m

**Sample Description (spreadsheet):** Sample 2650m: 5% Siltstone, 95% very fine to medium Sandstone, 100% moderately bright FLUOR in SST. TG 68.6U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% mod bri |
| Total Gas | 68.6 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2636m: clr,trnsl,vf-f,wl srt,sbrnd,wk sil cmt,nil vis mtx,mnr mic flks,lse,fr-gd inf por,bri fluor.
- **SANDSTONE** @ ~2648m: clr,trnsl,vf-f,wl srt,sbrnd,wk sil cmt,no vis mtx,mnr mic flks,lse,fr-gd inf por,mod bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 114.0 | 32 |
| RES_DEEP (ohm.m) | 22.05 | 32 |
| RES_SHALLOW (ohm.m) | 17.01 | 32 |
| **Δ Res (Deep − Shallow)** | **5.04** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2655 m MD — Interval 2652.5 – 2657.5 m

**Sample Description (spreadsheet):** Sample 2655m: 5% Siltstone, 95% very fine to medium Sandstone, 100% bright FLUOR in SST. TG 76.5U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 76.5 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2648m: clr,trnsl,vf-f,wl srt,sbrnd,wk sil cmt,no vis mtx,mnr mic flks,lse,fr-gd inf por,mod bri fluor.
- **SILTSTONE** @ ~2656m: med-dk gry,aren,rr arg,tr micmic,tr carb spks,mod hd,sbfiss-sbblky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 112.5 | 33 |
| RES_DEEP (ohm.m) | 21.20 | 33 |
| RES_SHALLOW (ohm.m) | 16.04 | 33 |
| **Δ Res (Deep − Shallow)** | **5.16** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2660 m MD — Interval 2657.5 – 2662.5 m

**Sample Description (spreadsheet):** Sample 2660m: 5% Siltstone, 95% very fine to medium Sandstone, 100% bright FLUOR in SST. TG 79.1U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 79.1 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2648m: clr,trnsl,vf-f,wl srt,sbrnd,wk sil cmt,no vis mtx,mnr mic flks,lse,fr-gd inf por,mod bri fluor.
- **SILTSTONE** @ ~2656m: med-dk gry,aren,rr arg,tr micmic,tr carb spks,mod hd,sbfiss-sbblky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 112.4 | 33 |
| RES_DEEP (ohm.m) | 22.71 | 33 |
| RES_SHALLOW (ohm.m) | 16.99 | 33 |
| **Δ Res (Deep − Shallow)** | **5.72** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2665 m MD — Interval 2662.5 – 2667.5 m

**Sample Description (spreadsheet):** Sample 2665m: 10% Siltstone, 90% very fine to medium Sandstone, 100% bright FLUOR in SST. TG 52.5U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 52.5 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2648m: clr,trnsl,vf-f,wl srt,sbrnd,wk sil cmt,no vis mtx,mnr mic flks,lse,fr-gd inf por,mod bri fluor.
- **SILTSTONE** @ ~2656m: med-dk gry,aren,rr arg,tr micmic,tr carb spks,mod hd,sbfiss-sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.1 | 33 |
| RES_DEEP (ohm.m) | 23.38 | 33 |
| RES_SHALLOW (ohm.m) | 17.46 | 33 |
| **Δ Res (Deep − Shallow)** | **5.93** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2670 m MD — Interval 2667.5 – 2672.5 m

**Sample Description (spreadsheet):** Sample 2670m: 10% Siltstone, 90% very fine to medium Sandstone, 100% bright FLUOR in SST. TG 88.5U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 88.5 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2656m: med-dk gry,aren,rr arg,tr micmic,tr carb spks,mod hd,sbfiss-sbblky.
- **SANDSTONE** @ ~2668m: clr,trnsl,vf-med,mod wl srt, sbrnd-sbang,off wh wk sil cmt,tr off wh mtx,mnr mic flks,tr liths,lse-fri,pr-fr vis por,fr inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.4 | 33 |
| RES_DEEP (ohm.m) | 24.94 | 33 |
| RES_SHALLOW (ohm.m) | 18.14 | 33 |
| **Δ Res (Deep − Shallow)** | **6.79** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2675 m MD — Interval 2672.5 – 2677.5 m

**Sample Description (spreadsheet):** Sample 2675m: 5% Siltstone, 95% very fine to medium Sandstone, 100% bright FLUOR in SST. TG 95.7U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 95.7 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2668m: clr,trnsl,vf-med,mod wl srt, sbrnd-sbang,off wh wk sil cmt,tr off wh mtx,mnr mic flks,tr liths,lse-fri,pr-fr vis por,fr inf por,bri fluor.
- **SILTSTONE** @ ~2682m: med-dk gry,mnr micmic,tr liths,tr sid, mod hd,sbfiss-sbblky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.4 | 32 |
| RES_DEEP (ohm.m) | 23.70 | 32 |
| RES_SHALLOW (ohm.m) | 15.41 | 32 |
| **Δ Res (Deep − Shallow)** | **8.29** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2680 m MD — Interval 2677.5 – 2682.5 m

**Sample Description (spreadsheet):** Sample 2680m: 5% Siltstone, 95% very fine to medium Sandstone, 100% bright FLUOR in SST. TG 100U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 100 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2668m: clr,trnsl,vf-med,mod wl srt, sbrnd-sbang,off wh wk sil cmt,tr off wh mtx,mnr mic flks,tr liths,lse-fri,pr-fr vis por,fr inf por,bri fluor.
- **SILTSTONE** @ ~2682m: med-dk gry,mnr micmic,tr liths,tr sid, mod hd,sbfiss-sbblky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.3 | 33 |
| RES_DEEP (ohm.m) | 24.42 | 33 |
| RES_SHALLOW (ohm.m) | 15.68 | 33 |
| **Δ Res (Deep − Shallow)** | **8.74** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2685 m MD — Interval 2682.5 – 2687.5 m

**Sample Description (spreadsheet):** Sample 2685m: 40% Siltstone, 60% very fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 46U

| Property | Value |
|----------|-------|
| % Sandstone | 60 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 46 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2668m: clr,trnsl,vf-med,mod wl srt, sbrnd-sbang,off wh wk sil cmt,tr off wh mtx,mnr mic flks,tr liths,lse-fri,pr-fr vis por,fr inf por,bri fluor.
- **SILTSTONE** @ ~2682m: med-dk gry,mnr micmic,tr liths,tr sid, mod hd,sbfiss-sbblky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.8 | 33 |
| RES_DEEP (ohm.m) | 25.24 | 33 |
| RES_SHALLOW (ohm.m) | 19.56 | 33 |
| **Δ Res (Deep − Shallow)** | **5.68** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2690 m MD — Interval 2687.5 – 2692.5 m

**Sample Description (spreadsheet):** Sample 2690m: 40% Siltstone, 60% very fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 59U

| Property | Value |
|----------|-------|
| % Sandstone | 60 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 59 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2682m: med-dk gry,mnr micmic,tr liths,tr sid, mod hd,sbfiss-sbblky.
- **SANDSTONE** @ ~2692m: clr,trnsl,lt gry brn,vf-f,wl srt, sbrnd-sbang,off wh wk sil cmt,tr off wh arg mtx,mnr mic flks,tr liths,lse-fri aggs,pr-fr vis por,fr inf por,bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.8 | 33 |
| RES_DEEP (ohm.m) | 25.60 | 33 |
| RES_SHALLOW (ohm.m) | 20.29 | 33 |
| **Δ Res (Deep − Shallow)** | **5.31** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2695 m MD — Interval 2692.5 – 2697.5 m

**Sample Description (spreadsheet):** Sample 2695m: 10% Siltstone, 90% very fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 64U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 64 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2682m: med-dk gry,mnr micmic,tr liths,tr sid, mod hd,sbfiss-sbblky.
- **SANDSTONE** @ ~2692m: clr,trnsl,lt gry brn,vf-f,wl srt, sbrnd-sbang,off wh wk sil cmt,tr off wh arg mtx,mnr mic flks,tr liths,lse-fri aggs,pr-fr vis por,fr inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.7 | 33 |
| RES_DEEP (ohm.m) | 24.94 | 33 |
| RES_SHALLOW (ohm.m) | 19.89 | 33 |
| **Δ Res (Deep − Shallow)** | **5.06** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2700 m MD — Interval 2697.5 – 2702.5 m

**Sample Description (spreadsheet):** Sample 2700m: 10% Siltstone, 90% very fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 72U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 72 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2692m: clr,trnsl,lt gry brn,vf-f,wl srt, sbrnd-sbang,off wh wk sil cmt,tr off wh arg mtx,mnr mic flks,tr liths,lse-fri aggs,pr-fr vis por,fr inf por,bri fluor.
- **SANDSTONE** @ ~2708m: clr,trnsl,lt gry brn,vf-f,wl srt, sbrnd-sbang,off wh wk sil cmt,tr off wh arg mtx,mnr mic flks,tr liths,lse-fri aggs,pr-fr vis por,fr inf por,bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.8 | 32 |
| RES_DEEP (ohm.m) | 27.05 | 32 |
| RES_SHALLOW (ohm.m) | 20.67 | 32 |
| **Δ Res (Deep − Shallow)** | **6.38** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2705 m MD — Interval 2702.5 – 2707.5 m

**Sample Description (spreadsheet):** Sample 2705m: 10% Siltstone, 90% very fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 52U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 52 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2692m: clr,trnsl,lt gry brn,vf-f,wl srt, sbrnd-sbang,off wh wk sil cmt,tr off wh arg mtx,mnr mic flks,tr liths,lse-fri aggs,pr-fr vis por,fr inf por,bri fluor.
- **SANDSTONE** @ ~2708m: clr,trnsl,lt gry brn,vf-f,wl srt, sbrnd-sbang,off wh wk sil cmt,tr off wh arg mtx,mnr mic flks,tr liths,lse-fri aggs,pr-fr vis por,fr inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.2 | 33 |
| RES_DEEP (ohm.m) | 26.31 | 33 |
| RES_SHALLOW (ohm.m) | 20.38 | 33 |
| **Δ Res (Deep − Shallow)** | **5.93** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2710 m MD — Interval 2707.5 – 2712.5 m

**Sample Description (spreadsheet):** Sample 2710m: 10% Siltstone, 90% very fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 75U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 75 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2708m: clr,trnsl,lt gry brn,vf-f,wl srt, sbrnd-sbang,off wh wk sil cmt,tr off wh arg mtx,mnr mic flks,tr liths,lse-fri aggs,pr-fr vis por,fr inf por,bri fluor.
- **SILTSTONE** @ ~2720m: med-dk gry,aren,mnr arg,mnr micmic, tr carb spks,,mod hd-hd,sbfiss-sbblky.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.3 | 33 |
| RES_DEEP (ohm.m) | 25.64 | 33 |
| RES_SHALLOW (ohm.m) | 20.33 | 33 |
| **Δ Res (Deep − Shallow)** | **5.31** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2715 m MD — Interval 2712.5 – 2717.5 m

**Sample Description (spreadsheet):** Sample 2715m: 10% Siltstone, 90% very fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 77U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 77 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2708m: clr,trnsl,lt gry brn,vf-f,wl srt, sbrnd-sbang,off wh wk sil cmt,tr off wh arg mtx,mnr mic flks,tr liths,lse-fri aggs,pr-fr vis por,fr inf por,bri fluor.
- **SILTSTONE** @ ~2720m: med-dk gry,aren,mnr arg,mnr micmic, tr carb spks,,mod hd-hd,sbfiss-sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.7 | 33 |
| RES_DEEP (ohm.m) | 25.31 | 33 |
| RES_SHALLOW (ohm.m) | 19.61 | 33 |
| **Δ Res (Deep − Shallow)** | **5.70** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2720 m MD — Interval 2717.5 – 2722.5 m

**Sample Description (spreadsheet):** Sample 2720m: 10% Siltstone, 90% very fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 68U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 68 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2708m: clr,trnsl,lt gry brn,vf-f,wl srt, sbrnd-sbang,off wh wk sil cmt,tr off wh arg mtx,mnr mic flks,tr liths,lse-fri aggs,pr-fr vis por,fr inf por,bri fluor.
- **SILTSTONE** @ ~2720m: med-dk gry,aren,mnr arg,mnr micmic, tr carb spks,,mod hd-hd,sbfiss-sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.1 | 33 |
| RES_DEEP (ohm.m) | 26.82 | 33 |
| RES_SHALLOW (ohm.m) | 20.97 | 33 |
| **Δ Res (Deep − Shallow)** | **5.85** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2725 m MD — Interval 2722.5 – 2727.5 m

**Sample Description (spreadsheet):** Sample 2725m: 40% Siltstone, 60% very fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 81U

| Property | Value |
|----------|-------|
| % Sandstone | 60 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 81 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2708m: clr,trnsl,lt gry brn,vf-f,wl srt, sbrnd-sbang,off wh wk sil cmt,tr off wh arg mtx,mnr mic flks,tr liths,lse-fri aggs,pr-fr vis por,fr inf por,bri fluor.
- **SILTSTONE** @ ~2720m: med-dk gry,aren,mnr arg,mnr micmic, tr carb spks,,mod hd-hd,sbfiss-sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.0 | 32 |
| RES_DEEP (ohm.m) | 26.77 | 32 |
| RES_SHALLOW (ohm.m) | 20.48 | 32 |
| **Δ Res (Deep − Shallow)** | **6.29** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2730 m MD — Interval 2727.5 – 2732.5 m

**Sample Description (spreadsheet):** Sample 2730m: 50% Siltstone, 50% very fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 92U

| Property | Value |
|----------|-------|
| % Sandstone | 50 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 92 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2720m: med-dk gry,aren,mnr arg,mnr micmic, tr carb spks,,mod hd-hd,sbfiss-sbblky.
- **SILTSTONE** @ ~2728m: med-dk gry,aren,mnr arg,mnr micmic, tr carb spks,,mod hd-hd,sbfiss-sbblky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.3 | 33 |
| RES_DEEP (ohm.m) | 30.66 | 33 |
| RES_SHALLOW (ohm.m) | 22.60 | 33 |
| **Δ Res (Deep − Shallow)** | **8.05** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2735 m MD — Interval 2732.5 – 2737.5 m

**Sample Description (spreadsheet):** Sample 2735m: 10% Siltstone, 90% very fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 102U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 102 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2720m: med-dk gry,aren,mnr arg,mnr micmic, tr carb spks,,mod hd-hd,sbfiss-sbblky.
- **SILTSTONE** @ ~2728m: med-dk gry,aren,mnr arg,mnr micmic, tr carb spks,,mod hd-hd,sbfiss-sbblky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.6 | 33 |
| RES_DEEP (ohm.m) | 29.43 | 33 |
| RES_SHALLOW (ohm.m) | 21.42 | 33 |
| **Δ Res (Deep − Shallow)** | **8.02** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2740 m MD — Interval 2737.5 – 2742.5 m

**Sample Description (spreadsheet):** Sample 2740m: 10% Siltstone, 90% very fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 102U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 102 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2728m: med-dk gry,aren,mnr arg,mnr micmic, tr carb spks,,mod hd-hd,sbfiss-sbblky.
- **SANDSTONE** @ ~2732m: clr,trnsl,lt brn,vf-med,mod wl srt,lt gry wk sil cmt,rr lt gry arg mtx,mnr mic flks,rr liths, lse-fri aggs,pr vis por,,fr--gd inf por,bri fluor. 87 / 5 / 3 / 3 / 2 2736 FLUORESCENCE:2730.0m-2760.0m,100%
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.9 | 33 |
| RES_DEEP (ohm.m) | 28.08 | 33 |
| RES_SHALLOW (ohm.m) | 20.06 | 33 |
| **Δ Res (Deep − Shallow)** | **8.01** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2745 m MD — Interval 2742.5 – 2747.5 m

**Sample Description (spreadsheet):** Sample 2745m: 20% Siltstone, 80% very fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 76U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 76 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2728m: med-dk gry,aren,mnr arg,mnr micmic, tr carb spks,,mod hd-hd,sbfiss-sbblky.
- **SANDSTONE** @ ~2732m: clr,trnsl,lt brn,vf-med,mod wl srt,lt gry wk sil cmt,rr lt gry arg mtx,mnr mic flks,rr liths, lse-fri aggs,pr vis por,,fr--gd inf por,bri fluor. 87 / 5 / 3 / 3 / 2 2736 FLUORESCENCE:2730.0m-2760.0m,100%
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 91.6 | 33 |
| RES_DEEP (ohm.m) | 29.83 | 33 |
| RES_SHALLOW (ohm.m) | 21.64 | 33 |
| **Δ Res (Deep − Shallow)** | **8.18** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2750 m MD — Interval 2747.5 – 2752.5 m

**Sample Description (spreadsheet):** Sample 2750m: 20% Siltstone, 80% very fine to medium Sandstone, 100% moderately bright to bright FLUOR in SST. TG 70U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% mod bri-bri |
| Total Gas | 70 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2748m: clr,trnsl,lt gry brn,vf-med,dom med,
- **SILTSTONE** @ ~2756m: med-dk gry,med lt gry i/p,aren,rr arg,tr micmic,frm,mod hd i/p,sbblky-blky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.0 | 33 |
| RES_DEEP (ohm.m) | 30.57 | 33 |
| RES_SHALLOW (ohm.m) | 21.79 | 33 |
| **Δ Res (Deep − Shallow)** | **8.78** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2755 m MD — Interval 2752.5 – 2757.5 m

**Sample Description (spreadsheet):** 20% Siltstone, 80% f-med Sandstone, 100% bri FLUOR. TG 76.2U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 76.2 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2748m: clr,trnsl,lt gry brn,vf-med,dom med,
- **SILTSTONE** @ ~2756m: med-dk gry,med lt gry i/p,aren,rr arg,tr micmic,frm,mod hd i/p,sbblky-blky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.1 | 32 |
| RES_DEEP (ohm.m) | 32.55 | 32 |
| RES_SHALLOW (ohm.m) | 23.50 | 32 |
| **Δ Res (Deep − Shallow)** | **9.04** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2760 m MD — Interval 2757.5 – 2762.5 m

**Sample Description (spreadsheet):** Sample 2760m: 20% Siltstone, 80% fine to medium Sandstone, 100% bright FLUOR in SST. TG 42U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 42 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2748m: clr,trnsl,lt gry brn,vf-med,dom med,
- **SILTSTONE** @ ~2756m: med-dk gry,med lt gry i/p,aren,rr arg,tr micmic,frm,mod hd i/p,sbblky-blky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.5 | 33 |
| RES_DEEP (ohm.m) | 27.94 | 33 |
| RES_SHALLOW (ohm.m) | 21.66 | 33 |
| **Δ Res (Deep − Shallow)** | **6.28** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2765 m MD — Interval 2762.5 – 2767.5 m

**Sample Description (spreadsheet):** 15% Siltstone, 85% f-med Sandstone, 100% bri FLUOR. TG 87.7U

| Property | Value |
|----------|-------|
| % Sandstone | 85 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 87.7 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2748m: clr,trnsl,lt gry brn,vf-med,dom med,
- **SILTSTONE** @ ~2756m: med-dk gry,med lt gry i/p,aren,rr arg,tr micmic,frm,mod hd i/p,sbblky-blky.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.8 | 33 |
| RES_DEEP (ohm.m) | 27.89 | 33 |
| RES_SHALLOW (ohm.m) | 22.00 | 33 |
| **Δ Res (Deep − Shallow)** | **5.89** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2770 m MD — Interval 2767.5 – 2772.5 m

**Sample Description (spreadsheet):** Sample 2770m: 15% Siltstone, 85% fine to medium Sandstone, 100% bright FLUOR in SST. TG 63U

| Property | Value |
|----------|-------|
| % Sandstone | 85 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 63 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2756m: med-dk gry,med lt gry i/p,aren,rr arg,tr micmic,frm,mod hd i/p,sbblky-blky.
- **SANDSTONE** @ ~2764m: clr,trnsl,lt gry brn,vf-med,dom med, mod wl srt,lt gry brn wk sil cmt,rr lt gry arg mtx,mnr mic flks,rr liths,lse-fri aggs,pr vis por,gd inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.8 | 33 |
| RES_DEEP (ohm.m) | 26.79 | 33 |
| RES_SHALLOW (ohm.m) | 19.38 | 33 |
| **Δ Res (Deep − Shallow)** | **7.41** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2775 m MD — Interval 2772.5 – 2777.5 m

**Sample Description (spreadsheet):** 10% Siltstone, 90% vf-med Sandstone, 100% bri FLUOR. TG 98.6U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 98.6 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2764m: clr,trnsl,lt gry brn,vf-med,dom med, mod wl srt,lt gry brn wk sil cmt,rr lt gry arg mtx,mnr mic flks,rr liths,lse-fri aggs,pr vis por,gd inf por,bri fluor.
- **SANDSTONE** @ ~2778m: clr,trnsl,lt brn,vf-f,occ med,mod wl srt,sbang-sbrnd,wk sil cmt,tr lt brn arg mtx,tr liths, 2780 lse-fri aggs,pr vis por,fr inf por,bri fluor. 1229.2
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.3 | 33 |
| RES_DEEP (ohm.m) | 27.43 | 33 |
| RES_SHALLOW (ohm.m) | 19.89 | 33 |
| **Δ Res (Deep − Shallow)** | **7.54** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2780 m MD — Interval 2777.5 – 2782.5 m

**Sample Description (spreadsheet):** Sample 2780m: 10% Siltstone, 90% very fine to medium Sandstone, 100% bright FLUOR in SST. TG 53U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 53 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2764m: clr,trnsl,lt gry brn,vf-med,dom med, mod wl srt,lt gry brn wk sil cmt,rr lt gry arg mtx,mnr mic flks,rr liths,lse-fri aggs,pr vis por,gd inf por,bri fluor.
- **SANDSTONE** @ ~2778m: clr,trnsl,lt brn,vf-f,occ med,mod wl srt,sbang-sbrnd,wk sil cmt,tr lt brn arg mtx,tr liths, 2780 lse-fri aggs,pr vis por,fr inf por,bri fluor. 1229.2
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.4 | 32 |
| RES_DEEP (ohm.m) | 27.84 | 32 |
| RES_SHALLOW (ohm.m) | 20.12 | 32 |
| **Δ Res (Deep − Shallow)** | **7.72** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2810 m MD — Interval 2807.5 – 2812.5 m

**Sample Description (spreadsheet):** Sample 2810m: 5% Siltstone, 95% very fine to medium Sandstone, 100% bright FLUOR in SST. TG 76U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 76 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2797m: clr,trnsl,lt brn,vf-f,occ med,mod wl srt,sbang-sbrnd,wk sil cmt,tr lt brn arg mtx,tr liths, lse-fri aggs,pr vis por,fr inf por,bri fluor.
- **SANDSTONE** @ ~2804m: clr,lt brn,trnsl,vf-med,mod srt, sbang-sbrnd,wk sil cmt,lt brn arg mtx,tr carb spks, fri-lse,pr vis por,fr-gd inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 139.2 | 33 |
| RES_DEEP (ohm.m) | 65.58 | 33 |
| RES_SHALLOW (ohm.m) | 28.11 | 33 |
| **Δ Res (Deep − Shallow)** | **37.47** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2815 m MD — Interval 2812.5 – 2817.5 m

**Sample Description (spreadsheet):** 10% Siltstone, 90% vf-med Sandstone, 100% bri FLUOR. TG 65.4U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 65.4 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2804m: clr,lt brn,trnsl,vf-med,mod srt, sbang-sbrnd,wk sil cmt,lt brn arg mtx,tr carb spks, fri-lse,pr vis por,fr-gd inf por,bri fluor.
- **SILTSTONE** @ ~2820m: med gry-med dk gry,aren,arg i/p,tr carb spks,tr micmic,frm-mod hd,sbblky-sbfiss i/p.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 116.0 | 33 |
| RES_DEEP (ohm.m) | 51.80 | 33 |
| RES_SHALLOW (ohm.m) | 25.95 | 33 |
| **Δ Res (Deep − Shallow)** | **25.85** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2820 m MD — Interval 2817.5 – 2822.5 m

**Sample Description (spreadsheet):** Sample 2820m: 10% Siltstone, 90% very fine to medium Sandstone, 100% bright FLUOR in SST. TG 88U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 88 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2804m: clr,lt brn,trnsl,vf-med,mod srt, sbang-sbrnd,wk sil cmt,lt brn arg mtx,tr carb spks, fri-lse,pr vis por,fr-gd inf por,bri fluor.
- **SILTSTONE** @ ~2820m: med gry-med dk gry,aren,arg i/p,tr carb spks,tr micmic,frm-mod hd,sbblky-sbfiss i/p.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 140.1 | 33 |
| RES_DEEP (ohm.m) | 60.84 | 33 |
| RES_SHALLOW (ohm.m) | 25.95 | 33 |
| **Δ Res (Deep − Shallow)** | **34.88** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2825 m MD — Interval 2822.5 – 2827.5 m

**Sample Description (spreadsheet):** 10% Siltstone, 90% vf-med Sandstone, 100% bri FLUOR. TG 58.5U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 58.5 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2820m: med gry-med dk gry,aren,arg i/p,tr carb spks,tr micmic,frm-mod hd,sbblky-sbfiss i/p.
- **SANDSTONE** @ ~2828m: clr,lt brn,trnsl,vf-med,mod srt, sbang-sbrnd,wk sil cmt,lt brn arg mtx,tr carb spks, 2832 fri-lse,pr vis por,fr-gd inf por,bri fluor. 1228.8

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 118.0 | 33 |
| RES_DEEP (ohm.m) | 56.63 | 33 |
| RES_SHALLOW (ohm.m) | 27.60 | 33 |
| **Δ Res (Deep − Shallow)** | **29.02** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2830 m MD — Interval 2827.5 – 2832.5 m

**Sample Description (spreadsheet):** Sample 2830m: 10% Siltstone, 90% very fine to medium Sandstone, 100% bright FLUOR in SST. TG 67U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 67 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2820m: med gry-med dk gry,aren,arg i/p,tr carb spks,tr micmic,frm-mod hd,sbblky-sbfiss i/p.
- **SANDSTONE** @ ~2828m: clr,lt brn,trnsl,vf-med,mod srt, sbang-sbrnd,wk sil cmt,lt brn arg mtx,tr carb spks, 2832 fri-lse,pr vis por,fr-gd inf por,bri fluor. 1228.8
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 128.9 | 32 |
| RES_DEEP (ohm.m) | 45.53 | 32 |
| RES_SHALLOW (ohm.m) | 23.80 | 32 |
| **Δ Res (Deep − Shallow)** | **21.73** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2835 m MD — Interval 2832.5 – 2837.5 m

**Sample Description (spreadsheet):** 5% Siltstone, 95% vf-med Sandstone, 100% bri FLUOR. TG 100.5U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 100.5 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2820m: med gry-med dk gry,aren,arg i/p,tr carb spks,tr micmic,frm-mod hd,sbblky-sbfiss i/p.
- **SANDSTONE** @ ~2828m: clr,lt brn,trnsl,vf-med,mod srt, sbang-sbrnd,wk sil cmt,lt brn arg mtx,tr carb spks, 2832 fri-lse,pr vis por,fr-gd inf por,bri fluor. 1228.8
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 130.1 | 33 |
| RES_DEEP (ohm.m) | 42.68 | 33 |
| RES_SHALLOW (ohm.m) | 23.76 | 33 |
| **Δ Res (Deep − Shallow)** | **18.92** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2840 m MD — Interval 2837.5 – 2842.5 m

**Sample Description (spreadsheet):** Sample 2840m: 5% Siltstone, 95% very fine to medium Sandstone, 100% bright FLUOR in SST. TG 123U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 123 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2828m: clr,lt brn,trnsl,vf-med,mod srt, sbang-sbrnd,wk sil cmt,lt brn arg mtx,tr carb spks, 2832 fri-lse,pr vis por,fr-gd inf por,bri fluor. 1228.8
- **SANDSTONE** @ ~2844m: clr,lt brn,trnsl,vf-med,mod srt, sbang-sbrnd,wk sil cmt,lt brn arg mtx,tr carb spks, fri-lse,pr vis por,fr-gd inf por,bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 117.2 | 33 |
| RES_DEEP (ohm.m) | 51.77 | 33 |
| RES_SHALLOW (ohm.m) | 28.96 | 33 |
| **Δ Res (Deep − Shallow)** | **22.80** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2845 m MD — Interval 2842.5 – 2847.5 m

**Sample Description (spreadsheet):** 5% Siltstone, 95% vf-med Sandstone, 100% bri FLUOR. TG 87.6U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 87.6 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2828m: clr,lt brn,trnsl,vf-med,mod srt, sbang-sbrnd,wk sil cmt,lt brn arg mtx,tr carb spks, 2832 fri-lse,pr vis por,fr-gd inf por,bri fluor. 1228.8
- **SANDSTONE** @ ~2844m: clr,lt brn,trnsl,vf-med,mod srt, sbang-sbrnd,wk sil cmt,lt brn arg mtx,tr carb spks, fri-lse,pr vis por,fr-gd inf por,bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.7 | 33 |
| RES_DEEP (ohm.m) | 51.36 | 33 |
| RES_SHALLOW (ohm.m) | 28.47 | 33 |
| **Δ Res (Deep − Shallow)** | **22.89** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2850 m MD — Interval 2847.5 – 2852.5 m

**Sample Description (spreadsheet):** Sample 2850m: 5% Siltstone, 95% very fine to medium Sandstone, 100% bright FLUOR in SST. TG 114U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 114 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2844m: clr,lt brn,trnsl,vf-med,mod srt, sbang-sbrnd,wk sil cmt,lt brn arg mtx,tr carb spks, fri-lse,pr vis por,fr-gd inf por,bri fluor.
- **SILTSTONE** @ ~2856m: med gry-med dk gry,occ med lt gry, aren,mnr arg,tr carb spks,frm-mod hd,sbblky-blky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 109.2 | 33 |
| RES_DEEP (ohm.m) | 50.61 | 33 |
| RES_SHALLOW (ohm.m) | 28.46 | 33 |
| **Δ Res (Deep − Shallow)** | **22.15** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2855 m MD — Interval 2852.5 – 2857.5 m

**Sample Description (spreadsheet):** 15% Siltstone, 85% vf-med Sandstone, 100% bri FLUOR. TG 55.5U

| Property | Value |
|----------|-------|
| % Sandstone | 85 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 55.5 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2844m: clr,lt brn,trnsl,vf-med,mod srt, sbang-sbrnd,wk sil cmt,lt brn arg mtx,tr carb spks, fri-lse,pr vis por,fr-gd inf por,bri fluor.
- **SILTSTONE** @ ~2856m: med gry-med dk gry,occ med lt gry, aren,mnr arg,tr carb spks,frm-mod hd,sbblky-blky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 100.7 | 33 |
| RES_DEEP (ohm.m) | 48.52 | 33 |
| RES_SHALLOW (ohm.m) | 28.21 | 33 |
| **Δ Res (Deep − Shallow)** | **20.32** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2860 m MD — Interval 2857.5 – 2862.5 m

**Sample Description (spreadsheet):** Sample 2860m: 15% Siltstone, 85% very fine to medium Sandstone, 100% bright FLUOR in SST. TG 136U

| Property | Value |
|----------|-------|
| % Sandstone | 85 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 136 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2844m: clr,lt brn,trnsl,vf-med,mod srt, sbang-sbrnd,wk sil cmt,lt brn arg mtx,tr carb spks, fri-lse,pr vis por,fr-gd inf por,bri fluor.
- **SILTSTONE** @ ~2856m: med gry-med dk gry,occ med lt gry, aren,mnr arg,tr carb spks,frm-mod hd,sbblky-blky.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.8 | 33 |
| RES_DEEP (ohm.m) | 48.80 | 33 |
| RES_SHALLOW (ohm.m) | 30.74 | 33 |
| **Δ Res (Deep − Shallow)** | **18.06** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2865 m MD — Interval 2862.5 – 2867.5 m

**Sample Description (spreadsheet):** 10% Siltstone, 90% vf-med Sandstone, 100% bri FLUOR. TG 131U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 131 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2856m: med gry-med dk gry,occ med lt gry, aren,mnr arg,tr carb spks,frm-mod hd,sbblky-blky.
- **SANDSTONE** @ ~2856m: trnsl,lt brn,clr,vf-med,mod srt, 28 12 6 2 0 9.1 sbrnd-sbang,wk sil cmt,tr lt brn arg mtx,tr carb spks, lse-occ fri,pr vis por,fr inf por,bri fluor. of SST,dll-mod bri yel-grn evn fluor,slw-mod
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.2 | 33 |
| RES_DEEP (ohm.m) | 39.69 | 33 |
| RES_SHALLOW (ohm.m) | 26.02 | 33 |
| **Δ Res (Deep − Shallow)** | **13.68** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2870 m MD — Interval 2867.5 – 2872.5 m

**Sample Description (spreadsheet):** Sample 2870m: 10% Siltstone, 90% very fine to medium Sandstone, 100% bright FLUOR in SST. TG 88U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 88 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2856m: med gry-med dk gry,occ med lt gry, aren,mnr arg,tr carb spks,frm-mod hd,sbblky-blky.
- **SANDSTONE** @ ~2856m: trnsl,lt brn,clr,vf-med,mod srt, 28 12 6 2 0 9.1 sbrnd-sbang,wk sil cmt,tr lt brn arg mtx,tr carb spks, lse-occ fri,pr vis por,fr inf por,bri fluor. of SST,dll-mod bri yel-grn evn fluor,slw-mod
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 82.2 | 33 |
| RES_DEEP (ohm.m) | 36.91 | 33 |
| RES_SHALLOW (ohm.m) | 24.06 | 33 |
| **Δ Res (Deep − Shallow)** | **12.86** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2875 m MD — Interval 2872.5 – 2877.5 m

**Sample Description (spreadsheet):** 15% Siltstone, 85% vf-med Sandstone, 100% bri FLUOR. TG 48.6U

| Property | Value |
|----------|-------|
| % Sandstone | 85 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 48.6 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2876m: med gry-med dk gry,occ med lt gry, 2880 aren,mnr arg,tr carb spks,frm-mod hd,sbblky-blky. 1229.4
- **SANDSTONE** @ ~2873m: trnsl,lt brn,clr,vf-med,mod srt, sbrnd-sbang,wk sil cmt,tr lt brn arg mtx,tr carb spks, lse-occ fri,pr vis por,fr inf por,bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.0 | 33 |
| RES_DEEP (ohm.m) | 36.29 | 33 |
| RES_SHALLOW (ohm.m) | 25.25 | 33 |
| **Δ Res (Deep − Shallow)** | **11.04** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2880 m MD — Interval 2877.5 – 2882.5 m

**Sample Description (spreadsheet):** Sample 2880m: 15% Siltstone, 85% very fine to medium Sandstone, 100% bright FLUOR in SST. TG 89U

| Property | Value |
|----------|-------|
| % Sandstone | 85 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 89 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2876m: med gry-med dk gry,occ med lt gry, 2880 aren,mnr arg,tr carb spks,frm-mod hd,sbblky-blky. 1229.4
- **SANDSTONE** @ ~2873m: trnsl,lt brn,clr,vf-med,mod srt, sbrnd-sbang,wk sil cmt,tr lt brn arg mtx,tr carb spks, lse-occ fri,pr vis por,fr inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.8 | 33 |
| RES_DEEP (ohm.m) | 34.82 | 33 |
| RES_SHALLOW (ohm.m) | 24.76 | 33 |
| **Δ Res (Deep − Shallow)** | **10.06** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2885 m MD — Interval 2882.5 – 2887.5 m

**Sample Description (spreadsheet):** 10% Siltstone, 90% vf-med Sandstone, 100% bri FLUOR. TG 101.7U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 101.7 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2876m: med gry-med dk gry,occ med lt gry, 2880 aren,mnr arg,tr carb spks,frm-mod hd,sbblky-blky. 1229.4
- **SANDSTONE** @ ~2873m: trnsl,lt brn,clr,vf-med,mod srt, sbrnd-sbang,wk sil cmt,tr lt brn arg mtx,tr carb spks, lse-occ fri,pr vis por,fr inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 69.8 | 32 |
| RES_DEEP (ohm.m) | 33.86 | 32 |
| RES_SHALLOW (ohm.m) | 22.99 | 32 |
| **Δ Res (Deep − Shallow)** | **10.87** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2890 m MD — Interval 2887.5 – 2892.5 m

**Sample Description (spreadsheet):** Sample 2890m: 10% Siltstone, 90% very fine to medium Sandstone, 100% bright FLUOR in SST. TG 115.5U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 115.5 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2876m: med gry-med dk gry,occ med lt gry, 2880 aren,mnr arg,tr carb spks,frm-mod hd,sbblky-blky. 1229.4
- **SANDSTONE** @ ~2873m: trnsl,lt brn,clr,vf-med,mod srt, sbrnd-sbang,wk sil cmt,tr lt brn arg mtx,tr carb spks, lse-occ fri,pr vis por,fr inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.6 | 33 |
| RES_DEEP (ohm.m) | 33.28 | 33 |
| RES_SHALLOW (ohm.m) | 21.98 | 33 |
| **Δ Res (Deep − Shallow)** | **11.30** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2895 m MD — Interval 2892.5 – 2897.5 m

**Sample Description (spreadsheet):** 5% Siltstone, 95% f-med Sandstone, 100% bri FLUOR. TG 104.2U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 104.2 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2896m: trnsl,clr,f-med,rr crs,mod wl srt, sbang-sbrnd,wk sil cmt,nil vis mtx,rr liths,rr alt off
- **SANDSTONE** @ ~2912m: clr,trnsl,f-crs,pr srt,sbang-sbrnd,wk sil cmt,nil vis mtx,rr liths,lse,gd inf por,bri fluor. of SST,mod bri-bri yel-grn evn fluor,slw-mod bldng cut,blu-wh c/c,thk r/r.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.8 | 33 |
| RES_DEEP (ohm.m) | 30.90 | 33 |
| RES_SHALLOW (ohm.m) | 20.95 | 33 |
| **Δ Res (Deep − Shallow)** | **9.94** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2900 m MD — Interval 2897.5 – 2902.5 m

**Sample Description (spreadsheet):** Sample 2900m: 5% Siltstone, 95% fine to medium Sandstone, 100% bright FLUOR in SST. TG 120.4U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 120.4 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2896m: trnsl,clr,f-med,rr crs,mod wl srt, sbang-sbrnd,wk sil cmt,nil vis mtx,rr liths,rr alt off
- **SANDSTONE** @ ~2912m: clr,trnsl,f-crs,pr srt,sbang-sbrnd,wk sil cmt,nil vis mtx,rr liths,lse,gd inf por,bri fluor. of SST,mod bri-bri yel-grn evn fluor,slw-mod bldng cut,blu-wh c/c,thk r/r.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.5 | 33 |
| RES_DEEP (ohm.m) | 30.18 | 33 |
| RES_SHALLOW (ohm.m) | 20.66 | 33 |
| **Δ Res (Deep − Shallow)** | **9.52** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2905 m MD — Interval 2902.5 – 2907.5 m

**Sample Description (spreadsheet):** Sample 2905m: 5% Siltstone, 95% fine to medium Sandstone, 100% bright FLUOR in SST. TG 114.3U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 114.3 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2896m: trnsl,clr,f-med,rr crs,mod wl srt, sbang-sbrnd,wk sil cmt,nil vis mtx,rr liths,rr alt off
- **SANDSTONE** @ ~2912m: clr,trnsl,f-crs,pr srt,sbang-sbrnd,wk sil cmt,nil vis mtx,rr liths,lse,gd inf por,bri fluor. of SST,mod bri-bri yel-grn evn fluor,slw-mod bldng cut,blu-wh c/c,thk r/r.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.6 | 33 |
| RES_DEEP (ohm.m) | 27.37 | 33 |
| RES_SHALLOW (ohm.m) | 18.35 | 33 |
| **Δ Res (Deep − Shallow)** | **9.02** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2910 m MD — Interval 2907.5 – 2912.5 m

**Sample Description (spreadsheet):** Sample 2910m: 5% Siltstone, 95% fine to medium Sandstone, 100% bright FLUOR in SST. TG 103.4U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 103.4 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2896m: trnsl,clr,f-med,rr crs,mod wl srt, sbang-sbrnd,wk sil cmt,nil vis mtx,rr liths,rr alt off
- **SANDSTONE** @ ~2912m: clr,trnsl,f-crs,pr srt,sbang-sbrnd,wk sil cmt,nil vis mtx,rr liths,lse,gd inf por,bri fluor. of SST,mod bri-bri yel-grn evn fluor,slw-mod bldng cut,blu-wh c/c,thk r/r.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.4 | 32 |
| RES_DEEP (ohm.m) | 30.15 | 32 |
| RES_SHALLOW (ohm.m) | 19.81 | 32 |
| **Δ Res (Deep − Shallow)** | **10.35** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2915 m MD — Interval 2912.5 – 2917.5 m

**Sample Description (spreadsheet):** Sample 2915m: 5% Siltstone, 95% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 88.4U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 88.4 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2912m: clr,trnsl,f-crs,pr srt,sbang-sbrnd,wk sil cmt,nil vis mtx,rr liths,lse,gd inf por,bri fluor. of SST,mod bri-bri yel-grn evn fluor,slw-mod bldng cut,blu-wh c/c,thk r/r.
- **SILTSTONE** @ ~2920m: lt-med gry,aren,sli micmic,mod hd, blky-sbfiss.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.6 | 33 |
| RES_DEEP (ohm.m) | 31.86 | 33 |
| RES_SHALLOW (ohm.m) | 20.02 | 33 |
| **Δ Res (Deep − Shallow)** | **11.84** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2920 m MD — Interval 2917.5 – 2922.5 m

**Sample Description (spreadsheet):** Sample 2920m: 5% Siltstone, 95% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 76.1U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 76.1 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2912m: clr,trnsl,f-crs,pr srt,sbang-sbrnd,wk sil cmt,nil vis mtx,rr liths,lse,gd inf por,bri fluor. of SST,mod bri-bri yel-grn evn fluor,slw-mod bldng cut,blu-wh c/c,thk r/r.
- **SILTSTONE** @ ~2920m: lt-med gry,aren,sli micmic,mod hd, blky-sbfiss.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.2 | 33 |
| RES_DEEP (ohm.m) | 32.50 | 33 |
| RES_SHALLOW (ohm.m) | 20.10 | 33 |
| **Δ Res (Deep − Shallow)** | **12.40** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2925 m MD — Interval 2922.5 – 2927.5 m

**Sample Description (spreadsheet):** Sample 2925m: 5% Siltstone, 95% medium to very coarse Sandstone, 100% bright FLUOR in SST. TG 106U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | med-v crs (max: VC) |
| Fluorescence | 100% bri |
| Total Gas | 106 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2912m: clr,trnsl,f-crs,pr srt,sbang-sbrnd,wk sil cmt,nil vis mtx,rr liths,lse,gd inf por,bri fluor. of SST,mod bri-bri yel-grn evn fluor,slw-mod bldng cut,blu-wh c/c,thk r/r.
- **SILTSTONE** @ ~2920m: lt-med gry,aren,sli micmic,mod hd, blky-sbfiss.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 102.4 | 33 |
| RES_DEEP (ohm.m) | 41.48 | 33 |
| RES_SHALLOW (ohm.m) | 25.55 | 33 |
| **Δ Res (Deep − Shallow)** | **15.94** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2930 m MD — Interval 2927.5 – 2932.5 m

**Sample Description (spreadsheet):** Sample 2930m: 5% Siltstone, 95% medium to very coarse Sandstone, 100% bright FLUOR in SST. TG 130.2U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | med-v crs (max: VC) |
| Fluorescence | 100% bri |
| Total Gas | 130.2 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2920m: lt-med gry,aren,sli micmic,mod hd, blky-sbfiss.
- **SANDSTONE** @ ~2930m: clr,trnsl,med-v crs,pr srt,sbang-sbrnd, 1229.5 wk sil cmt,nil vis mtx,qtz ovgths,frstd & glassy qtz grs,mrr liths,lse,gd inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.9 | 33 |
| RES_DEEP (ohm.m) | 45.29 | 33 |
| RES_SHALLOW (ohm.m) | 27.00 | 33 |
| **Δ Res (Deep − Shallow)** | **18.29** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2935 m MD — Interval 2932.5 – 2937.5 m

**Sample Description (spreadsheet):** Sample 2935m: 5% Siltstone, 95% medium to very coarse Sandstone, 100% bright FLUOR in SST. TG 133.3U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | med-v crs (max: VC) |
| Fluorescence | 100% bri |
| Total Gas | 133.3 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2920m: lt-med gry,aren,sli micmic,mod hd, blky-sbfiss.
- **SANDSTONE** @ ~2930m: clr,trnsl,med-v crs,pr srt,sbang-sbrnd, 1229.5 wk sil cmt,nil vis mtx,qtz ovgths,frstd & glassy qtz grs,mrr liths,lse,gd inf por,bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.0 | 32 |
| RES_DEEP (ohm.m) | 38.62 | 32 |
| RES_SHALLOW (ohm.m) | 23.22 | 32 |
| **Δ Res (Deep − Shallow)** | **15.40** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2940 m MD — Interval 2937.5 – 2942.5 m

**Sample Description (spreadsheet):** Sample 2940m: 5% Siltstone, 95% medium to very coarse Sandstone, 100% bright FLUOR in SST. TG 127.3U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | med-v crs (max: VC) |
| Fluorescence | 100% bri |
| Total Gas | 127.3 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2930m: clr,trnsl,med-v crs,pr srt,sbang-sbrnd, 1229.5 wk sil cmt,nil vis mtx,qtz ovgths,frstd & glassy qtz grs,mrr liths,lse,gd inf por,bri fluor.
- **SILTSTONE** @ ~2944m: lt-med gry,aren,sli micmic,mod hd, blky-sbfiss.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 115.1 | 33 |
| RES_DEEP (ohm.m) | 36.37 | 33 |
| RES_SHALLOW (ohm.m) | 21.63 | 33 |
| **Δ Res (Deep − Shallow)** | **14.74** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2945 m MD — Interval 2942.5 – 2947.5 m

**Sample Description (spreadsheet):** Sample 2945m: 0% Siltstone, 100% medium to very coarse Sandstone, 100% bright FLUOR in SST. TG 127U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | med-v crs (max: VC) |
| Fluorescence | 100% bri |
| Total Gas | 127 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2930m: clr,trnsl,med-v crs,pr srt,sbang-sbrnd, 1229.5 wk sil cmt,nil vis mtx,qtz ovgths,frstd & glassy qtz grs,mrr liths,lse,gd inf por,bri fluor.
- **SILTSTONE** @ ~2944m: lt-med gry,aren,sli micmic,mod hd, blky-sbfiss.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 121.3 | 33 |
| RES_DEEP (ohm.m) | 33.21 | 33 |
| RES_SHALLOW (ohm.m) | 19.61 | 33 |
| **Δ Res (Deep − Shallow)** | **13.60** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2950 m MD — Interval 2947.5 – 2952.5 m

**Sample Description (spreadsheet):** Sample 2950m: 0% Siltstone, 100% medium to very coarse Sandstone, 100% bright FLUOR in SST. TG 74.4U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | med-v crs (max: VC) |
| Fluorescence | 100% bri |
| Total Gas | 74.4 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2944m: lt-med gry,aren,sli micmic,mod hd, blky-sbfiss.
- **SANDSTONE** @ ~2949m: clr,trnsl,pl brn,f-crs,dom f-med,mod

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 117.2 | 33 |
| RES_DEEP (ohm.m) | 31.84 | 33 |
| RES_SHALLOW (ohm.m) | 19.19 | 33 |
| **Δ Res (Deep − Shallow)** | **12.65** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2955 m MD — Interval 2952.5 – 2957.5 m

**Sample Description (spreadsheet):** Sample 2955m: 0% Siltstone, 100% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 104.4U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 104.4 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2944m: lt-med gry,aren,sli micmic,mod hd, blky-sbfiss.
- **SANDSTONE** @ ~2949m: clr,trnsl,pl brn,f-crs,dom f-med,mod
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 110.7 | 33 |
| RES_DEEP (ohm.m) | 33.09 | 33 |
| RES_SHALLOW (ohm.m) | 22.13 | 33 |
| **Δ Res (Deep − Shallow)** | **10.96** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2960 m MD — Interval 2957.5 – 2962.5 m

**Sample Description (spreadsheet):** Sample 2960m: 0% Siltstone, 100% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 97.2U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 97.2 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~2944m: lt-med gry,aren,sli micmic,mod hd, blky-sbfiss.
- **SANDSTONE** @ ~2949m: clr,trnsl,pl brn,f-crs,dom f-med,mod
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 101.4 | 32 |
| RES_DEEP (ohm.m) | 31.13 | 32 |
| RES_SHALLOW (ohm.m) | 21.09 | 32 |
| **Δ Res (Deep − Shallow)** | **10.04** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2965 m MD — Interval 2962.5 – 2967.5 m

**Sample Description (spreadsheet):** Sample 2965m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 113.2U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 113.2 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2949m: clr,trnsl,pl brn,f-crs,dom f-med,mod
- **SANDSTONE** @ ~2968m: clr,trnsl,pl brn,vf-crs,sbrnd,lse-fri aggs,gd vis & inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.8 | 33 |
| RES_DEEP (ohm.m) | 29.56 | 33 |
| RES_SHALLOW (ohm.m) | 20.38 | 33 |
| **Δ Res (Deep − Shallow)** | **9.18** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2970 m MD — Interval 2967.5 – 2972.5 m

**Sample Description (spreadsheet):** Sample 2970m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 79.2U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 79.2 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2968m: clr,trnsl,pl brn,vf-crs,sbrnd,lse-fri aggs,gd vis & inf por,bri fluor.
- **SANDSTONE** @ ~2980m: clr,trnsl,pl yel,pl brn,vf-crs,sbrnd, lse-fri aggs,gd vis & inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 96.5 | 33 |
| RES_DEEP (ohm.m) | 27.49 | 33 |
| RES_SHALLOW (ohm.m) | 20.17 | 33 |
| **Δ Res (Deep − Shallow)** | **7.32** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2975 m MD — Interval 2972.5 – 2977.5 m

**Sample Description (spreadsheet):** Sample 2975m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 65.1U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 65.1 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2968m: clr,trnsl,pl brn,vf-crs,sbrnd,lse-fri aggs,gd vis & inf por,bri fluor.
- **SANDSTONE** @ ~2980m: clr,trnsl,pl yel,pl brn,vf-crs,sbrnd, lse-fri aggs,gd vis & inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.6 | 33 |
| RES_DEEP (ohm.m) | 29.24 | 33 |
| RES_SHALLOW (ohm.m) | 21.99 | 33 |
| **Δ Res (Deep − Shallow)** | **7.26** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2980 m MD — Interval 2977.5 – 2982.5 m

**Sample Description (spreadsheet):** Sample 2980m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 80.7U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 80.7 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2968m: clr,trnsl,pl brn,vf-crs,sbrnd,lse-fri aggs,gd vis & inf por,bri fluor.
- **SANDSTONE** @ ~2980m: clr,trnsl,pl yel,pl brn,vf-crs,sbrnd, lse-fri aggs,gd vis & inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.4 | 33 |
| RES_DEEP (ohm.m) | 29.36 | 33 |
| RES_SHALLOW (ohm.m) | 21.66 | 33 |
| **Δ Res (Deep − Shallow)** | **7.69** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2985 m MD — Interval 2982.5 – 2987.5 m

**Sample Description (spreadsheet):** Sample 2985m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 67.5U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 67.5 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2968m: clr,trnsl,pl brn,vf-crs,sbrnd,lse-fri aggs,gd vis & inf por,bri fluor.
- **SANDSTONE** @ ~2980m: clr,trnsl,pl yel,pl brn,vf-crs,sbrnd, lse-fri aggs,gd vis & inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.2 | 33 |
| RES_DEEP (ohm.m) | 30.06 | 33 |
| RES_SHALLOW (ohm.m) | 20.90 | 33 |
| **Δ Res (Deep − Shallow)** | **9.16** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2990 m MD — Interval 2987.5 – 2992.5 m

**Sample Description (spreadsheet):** Sample 2990m: 0% Siltstone, 100% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 102.4U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 102.4 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2980m: clr,trnsl,pl yel,pl brn,vf-crs,sbrnd, lse-fri aggs,gd vis & inf por,bri fluor.
- **SANDSTONE** @ ~2987m: lt gry brn,clr,trnsl,vf-med,rr crs,pr srt, sbrnd-sbang,wk sil cmt,rr off wh arg mtx,rr liths, fri-occ lse,fr-gd vis & inf por,bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 83.1 | 32 |
| RES_DEEP (ohm.m) | 29.31 | 32 |
| RES_SHALLOW (ohm.m) | 21.49 | 32 |
| **Δ Res (Deep − Shallow)** | **7.81** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 2995 m MD — Interval 2992.5 – 2997.5 m

**Sample Description (spreadsheet):** Sample 2995m: 5% Siltstone, 95% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 71.5U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 71.5 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2980m: clr,trnsl,pl yel,pl brn,vf-crs,sbrnd, lse-fri aggs,gd vis & inf por,bri fluor.
- **SANDSTONE** @ ~2987m: lt gry brn,clr,trnsl,vf-med,rr crs,pr srt, sbrnd-sbang,wk sil cmt,rr off wh arg mtx,rr liths, fri-occ lse,fr-gd vis & inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.4 | 33 |
| RES_DEEP (ohm.m) | 29.18 | 33 |
| RES_SHALLOW (ohm.m) | 20.51 | 33 |
| **Δ Res (Deep − Shallow)** | **8.67** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3000 m MD — Interval 2997.5 – 3002.5 m

**Sample Description (spreadsheet):** Sample 3000m: 5% Siltstone, 95% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 67.9U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 67.9 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~2987m: lt gry brn,clr,trnsl,vf-med,rr crs,pr srt, sbrnd-sbang,wk sil cmt,rr off wh arg mtx,rr liths, fri-occ lse,fr-gd vis & inf por,bri fluor.
- **SILTSTONE** @ ~3012m: med gry,med brn gry,aren,micmic,tr 3016 liths,mod hd,sbblky-sbfiss. 1228.1

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.0 | 33 |
| RES_DEEP (ohm.m) | 27.94 | 33 |
| RES_SHALLOW (ohm.m) | 16.82 | 33 |
| **Δ Res (Deep − Shallow)** | **11.12** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3005 m MD — Interval 3002.5 – 3007.5 m

**Sample Description (spreadsheet):** Sample 3005m: 5% Siltstone, 95% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 70.6U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 70.6 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3012m: med gry,med brn gry,aren,micmic,tr 3016 liths,mod hd,sbblky-sbfiss. 1228.1

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.2 | 33 |
| RES_DEEP (ohm.m) | 26.82 | 33 |
| RES_SHALLOW (ohm.m) | 15.59 | 33 |
| **Δ Res (Deep − Shallow)** | **11.22** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3010 m MD — Interval 3007.5 – 3012.5 m

**Sample Description (spreadsheet):** Sample 3010m: 5% Siltstone, 95% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 62.1U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 62.1 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3012m: med gry,med brn gry,aren,micmic,tr 3016 liths,mod hd,sbblky-sbfiss. 1228.1
- **SANDSTONE** @ ~3025m: trnsl,clr,pl brn,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,ni-rr off wh arg mtx,rr off wh alt feld grs,rr liths,fri-lse,fr vis & inf por,bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.0 | 33 |
| RES_DEEP (ohm.m) | 25.35 | 33 |
| RES_SHALLOW (ohm.m) | 15.26 | 33 |
| **Δ Res (Deep − Shallow)** | **10.08** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3015 m MD — Interval 3012.5 – 3017.5 m

**Sample Description (spreadsheet):** Sample 3015m: 5% Siltstone, 95% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 83U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 83 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3012m: med gry,med brn gry,aren,micmic,tr 3016 liths,mod hd,sbblky-sbfiss. 1228.1
- **SANDSTONE** @ ~3025m: trnsl,clr,pl brn,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,ni-rr off wh arg mtx,rr off wh alt feld grs,rr liths,fri-lse,fr vis & inf por,bri fluor.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.1 | 32 |
| RES_DEEP (ohm.m) | 25.65 | 32 |
| RES_SHALLOW (ohm.m) | 15.87 | 32 |
| **Δ Res (Deep − Shallow)** | **9.78** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3020 m MD — Interval 3017.5 – 3022.5 m

**Sample Description (spreadsheet):** Sample 3020m: 5% Siltstone, 95% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 56.7U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 56.7 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3012m: med gry,med brn gry,aren,micmic,tr 3016 liths,mod hd,sbblky-sbfiss. 1228.1
- **SANDSTONE** @ ~3025m: trnsl,clr,pl brn,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,ni-rr off wh arg mtx,rr off wh alt feld grs,rr liths,fri-lse,fr vis & inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.1 | 33 |
| RES_DEEP (ohm.m) | 26.62 | 33 |
| RES_SHALLOW (ohm.m) | 16.67 | 33 |
| **Δ Res (Deep − Shallow)** | **9.95** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3025 m MD — Interval 3022.5 – 3027.5 m

**Sample Description (spreadsheet):** Sample 3025m: 5% Siltstone, 95% very fine to coarse Sandstone, 100% bright FLUOR in SST. TG 73.8U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 73.8 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3012m: med gry,med brn gry,aren,micmic,tr 3016 liths,mod hd,sbblky-sbfiss. 1228.1
- **SANDSTONE** @ ~3025m: trnsl,clr,pl brn,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,ni-rr off wh arg mtx,rr off wh alt feld grs,rr liths,fri-lse,fr vis & inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.1 | 33 |
| RES_DEEP (ohm.m) | 26.72 | 33 |
| RES_SHALLOW (ohm.m) | 18.41 | 33 |
| **Δ Res (Deep − Shallow)** | **8.31** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3030 m MD — Interval 3027.5 – 3032.5 m

**Sample Description (spreadsheet):** Sample 3030m: 5% Siltstone, 95% very fine to medium, rare coarse Sandstone, 100% bright FLUOR in SST. TG 68.6U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | vf-med, rr crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 68.6 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3025m: trnsl,clr,pl brn,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,ni-rr off wh arg mtx,rr off wh alt feld grs,rr liths,fri-lse,fr vis & inf por,bri fluor.
- **SANDSTONE** @ ~3036m: trnsl,clr,pl brn,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,ni-rr off wh arg mtx,rr mic flx, 3040 rr liths,fri-lse,fr vis & inf por,bri fluor. 1228.0 30 12 4 2 4 8.0 M VD D : : 3 1 0 2 4 2 4 8 . . 0 0 m m

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 80.1 | 33 |
| RES_DEEP (ohm.m) | 26.69 | 33 |
| RES_SHALLOW (ohm.m) | 19.95 | 33 |
| **Δ Res (Deep − Shallow)** | **6.74** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3035 m MD — Interval 3032.5 – 3037.5 m

**Sample Description (spreadsheet):** Sample 3035m: 0% Siltstone, 100% very fine to medium, rare coarse Sandstone, 100% bright FLUOR in SST. TG 107U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med, rr crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 107 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3025m: trnsl,clr,pl brn,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,ni-rr off wh arg mtx,rr off wh alt feld grs,rr liths,fri-lse,fr vis & inf por,bri fluor.
- **SANDSTONE** @ ~3036m: trnsl,clr,pl brn,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,ni-rr off wh arg mtx,rr mic flx, 3040 rr liths,fri-lse,fr vis & inf por,bri fluor. 1228.0 30 12 4 2 4 8.0 M VD D : : 3 1 0 2 4 2 4 8 . . 0 0 m m
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 74.2 | 33 |
| RES_DEEP (ohm.m) | 27.91 | 33 |
| RES_SHALLOW (ohm.m) | 20.26 | 33 |
| **Δ Res (Deep − Shallow)** | **7.65** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3040 m MD — Interval 3037.5 – 3042.5 m

**Sample Description (spreadsheet):** Sample 3040m: 0% Siltstone, 100% very fine to medium, rare coarse Sandstone, 100% bright FLUOR in SST. TG 57.3U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med, rr crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 57.3 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3025m: trnsl,clr,pl brn,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,ni-rr off wh arg mtx,rr off wh alt feld grs,rr liths,fri-lse,fr vis & inf por,bri fluor.
- **SANDSTONE** @ ~3036m: trnsl,clr,pl brn,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,ni-rr off wh arg mtx,rr mic flx, 3040 rr liths,fri-lse,fr vis & inf por,bri fluor. 1228.0 30 12 4 2 4 8.0 M VD D : : 3 1 0 2 4 2 4 8 . . 0 0 m m
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 81.0 | 32 |
| RES_DEEP (ohm.m) | 28.78 | 32 |
| RES_SHALLOW (ohm.m) | 20.95 | 32 |
| **Δ Res (Deep − Shallow)** | **7.83** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3045 m MD — Interval 3042.5 – 3047.5 m

**Sample Description (spreadsheet):** Sample 3045m: 0% Siltstone, 100% very fine to medium Sandstone, 100% bright FLUOR in SST. TG 35.8U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 35.8 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3036m: trnsl,clr,pl brn,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,ni-rr off wh arg mtx,rr mic flx, 3040 rr liths,fri-lse,fr vis & inf por,bri fluor. 1228.0 30 12 4 2 4 8.0 M VD D : : 3 1 0 2 4 2 4 8 . . 0 0 m m
- **SANDSTONE** @ ~3048m: clr,trnsl,pl brn,f-med,mod wl srt, sbang-dom sbrnd,wk sil cmt,nil-rr off wh arg mtx,rr mic flx,fri-lse,fr vis & inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.2 | 33 |
| RES_DEEP (ohm.m) | 28.89 | 33 |
| RES_SHALLOW (ohm.m) | 20.99 | 33 |
| **Δ Res (Deep − Shallow)** | **7.90** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3050 m MD — Interval 3047.5 – 3052.5 m

**Sample Description (spreadsheet):** Sample 3050m: 0% Siltstone, 100% very fine to medium Sandstone, 100% bright FLUOR in SST. TG 56.5U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 56.5 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3036m: trnsl,clr,pl brn,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,ni-rr off wh arg mtx,rr mic flx, 3040 rr liths,fri-lse,fr vis & inf por,bri fluor. 1228.0 30 12 4 2 4 8.0 M VD D : : 3 1 0 2 4 2 4 8 . . 0 0 m m
- **SANDSTONE** @ ~3048m: clr,trnsl,pl brn,f-med,mod wl srt, sbang-dom sbrnd,wk sil cmt,nil-rr off wh arg mtx,rr mic flx,fri-lse,fr vis & inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.6 | 33 |
| RES_DEEP (ohm.m) | 29.81 | 33 |
| RES_SHALLOW (ohm.m) | 21.76 | 33 |
| **Δ Res (Deep − Shallow)** | **8.04** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3055 m MD — Interval 3052.5 – 3057.5 m

**Sample Description (spreadsheet):** Sample 3055m: 5% Siltstone, 95% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 81.1U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 81.1 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3048m: clr,trnsl,pl brn,f-med,mod wl srt, sbang-dom sbrnd,wk sil cmt,nil-rr off wh arg mtx,rr mic flx,fri-lse,fr vis & inf por,bri fluor.
- **SANDSTONE** @ ~3056m: clr,trnsl,f-crs,pr srt,sbang-sbrnd,wk sil cmt,nil-rr off wh arg mtx,rr liths,rr mic,fri-lse,fr vis 3060 & inf por,bri fluor. 1228.0
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 113.7 | 33 |
| RES_DEEP (ohm.m) | 31.42 | 33 |
| RES_SHALLOW (ohm.m) | 22.43 | 33 |
| **Δ Res (Deep − Shallow)** | **8.99** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3060 m MD — Interval 3057.5 – 3062.5 m

**Sample Description (spreadsheet):** Sample 3060m: 5% Siltstone, 95% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 63.7U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 63.7 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3048m: clr,trnsl,pl brn,f-med,mod wl srt, sbang-dom sbrnd,wk sil cmt,nil-rr off wh arg mtx,rr mic flx,fri-lse,fr vis & inf por,bri fluor.
- **SANDSTONE** @ ~3056m: clr,trnsl,f-crs,pr srt,sbang-sbrnd,wk sil cmt,nil-rr off wh arg mtx,rr liths,rr mic,fri-lse,fr vis 3060 & inf por,bri fluor. 1228.0
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 113.1 | 33 |
| RES_DEEP (ohm.m) | 32.67 | 33 |
| RES_SHALLOW (ohm.m) | 21.21 | 33 |
| **Δ Res (Deep − Shallow)** | **11.47** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3065 m MD — Interval 3062.5 – 3067.5 m

**Sample Description (spreadsheet):** Sample 3065m: 10% Siltstone, 90% very fine to medium Sandstone, 100% bright FLUOR in SST. TG 40.4U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 40.4 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3048m: clr,trnsl,pl brn,f-med,mod wl srt, sbang-dom sbrnd,wk sil cmt,nil-rr off wh arg mtx,rr mic flx,fri-lse,fr vis & inf por,bri fluor.
- **SANDSTONE** @ ~3056m: clr,trnsl,f-crs,pr srt,sbang-sbrnd,wk sil cmt,nil-rr off wh arg mtx,rr liths,rr mic,fri-lse,fr vis 3060 & inf por,bri fluor. 1228.0
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 109.6 | 32 |
| RES_DEEP (ohm.m) | 33.36 | 32 |
| RES_SHALLOW (ohm.m) | 22.41 | 32 |
| **Δ Res (Deep − Shallow)** | **10.95** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3070 m MD — Interval 3067.5 – 3072.5 m

**Sample Description (spreadsheet):** Sample 3070m: 10% Siltstone, 90% very fine to medium Sandstone, 100% bright FLUOR in SST. TG 95U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | vf-med (max: M) |
| Fluorescence | 100% bri |
| Total Gas | 95 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3056m: clr,trnsl,f-crs,pr srt,sbang-sbrnd,wk sil cmt,nil-rr off wh arg mtx,rr liths,rr mic,fri-lse,fr vis 3060 & inf por,bri fluor. 1228.0
- **SILTSTONE** @ ~3068m: med gry,aren,sli micmic,tr liths,rr carb spks,mod hd,sbblky-sbfiss.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 107.2 | 33 |
| RES_DEEP (ohm.m) | 34.00 | 33 |
| RES_SHALLOW (ohm.m) | 22.84 | 33 |
| **Δ Res (Deep − Shallow)** | **11.16** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3075 m MD — Interval 3072.5 – 3077.5 m

**Sample Description (spreadsheet):** Sample 3075m: 0% Siltstone, 100% fine to medium, rare coarse Sandstone, 100% bright FLUOR in SST. TG 99.7U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 99.7 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3068m: med gry,aren,sli micmic,tr liths,rr carb spks,mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~3076m: clr,trnsl,pl brn,f-med,rr crs,mod srt, sbrnd,wk sil cmt,nil vis mtx,rr mic,lse-fri,fr vis & inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 108.0 | 33 |
| RES_DEEP (ohm.m) | 34.39 | 33 |
| RES_SHALLOW (ohm.m) | 22.87 | 33 |
| **Δ Res (Deep − Shallow)** | **11.53** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3080 m MD — Interval 3077.5 – 3082.5 m

**Sample Description (spreadsheet):** Sample 3080m: 0% Siltstone, 100% fine to medium, rare coarse Sandstone, 100% bright FLUOR in SST. TG 73.4U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 73.4 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3068m: med gry,aren,sli micmic,tr liths,rr carb spks,mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~3076m: clr,trnsl,pl brn,f-med,rr crs,mod srt, sbrnd,wk sil cmt,nil vis mtx,rr mic,lse-fri,fr vis & inf por,bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 108.6 | 33 |
| RES_DEEP (ohm.m) | 30.80 | 33 |
| RES_SHALLOW (ohm.m) | 19.60 | 33 |
| **Δ Res (Deep − Shallow)** | **11.21** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3085 m MD — Interval 3082.5 – 3087.5 m

**Sample Description (spreadsheet):** Sample 3085m: 5% Siltstone, 95% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 66.6U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 66.6 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3068m: med gry,aren,sli micmic,tr liths,rr carb spks,mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~3076m: clr,trnsl,pl brn,f-med,rr crs,mod srt, sbrnd,wk sil cmt,nil vis mtx,rr mic,lse-fri,fr vis & inf por,bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.8 | 33 |
| RES_DEEP (ohm.m) | 30.90 | 33 |
| RES_SHALLOW (ohm.m) | 22.22 | 33 |
| **Δ Res (Deep − Shallow)** | **8.68** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3090 m MD — Interval 3087.5 – 3092.5 m

**Sample Description (spreadsheet):** Sample 3090m: 5% Siltstone, 95% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 109.2U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 109.2 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3076m: clr,trnsl,pl brn,f-med,rr crs,mod srt, sbrnd,wk sil cmt,nil vis mtx,rr mic,lse-fri,fr vis & inf por,bri fluor.
- **SANDSTONE** @ ~3088m: clr,trnsl,pl brn,f-crs,pr srt, sbrnd-sbang,wk sil cmt,tr off wh arg mtx,rr liths,rr mic,lse-rr fri aggs,fr inf & vis por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 115.0 | 32 |
| RES_DEEP (ohm.m) | 37.33 | 32 |
| RES_SHALLOW (ohm.m) | 24.89 | 32 |
| **Δ Res (Deep − Shallow)** | **12.44** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3095 m MD — Interval 3092.5 – 3097.5 m

**Sample Description (spreadsheet):** Sample 3095m: 5% Siltstone, 95% fine to medium, rare coarse Sandstone, 100% bright FLUOR in SST. TG 146.8U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 146.8 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3088m: clr,trnsl,pl brn,f-crs,pr srt, sbrnd-sbang,wk sil cmt,tr off wh arg mtx,rr liths,rr mic,lse-rr fri aggs,fr inf & vis por,bri fluor.
- **SANDSTONE** @ ~3096m: clr,trnsl,pl brn,f-med,rr crs,pr srt, sbrnd-sbang,wk sil cmt,tr off wh arg mtx,rr liths,rr mic,lse-rr fri aggs,fr inf & vis por,bri fluor. Rmf:0.087 ohm.m at 75°F
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 105.4 | 33 |
| RES_DEEP (ohm.m) | 42.01 | 33 |
| RES_SHALLOW (ohm.m) | 26.02 | 33 |
| **Δ Res (Deep − Shallow)** | **16.00** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3100 m MD — Interval 3097.5 – 3102.5 m

**Sample Description (spreadsheet):** Sample 3100m: 5% Siltstone, 95% fine to medium, rare coarse Sandstone, 100% bright FLUOR in SST. TG 137.7U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 137.7 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3088m: clr,trnsl,pl brn,f-crs,pr srt, sbrnd-sbang,wk sil cmt,tr off wh arg mtx,rr liths,rr mic,lse-rr fri aggs,fr inf & vis por,bri fluor.
- **SANDSTONE** @ ~3096m: clr,trnsl,pl brn,f-med,rr crs,pr srt, sbrnd-sbang,wk sil cmt,tr off wh arg mtx,rr liths,rr mic,lse-rr fri aggs,fr inf & vis por,bri fluor. Rmf:0.087 ohm.m at 75°F
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 99.3 | 33 |
| RES_DEEP (ohm.m) | 39.13 | 33 |
| RES_SHALLOW (ohm.m) | 25.41 | 33 |
| **Δ Res (Deep − Shallow)** | **13.72** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3105 m MD — Interval 3102.5 – 3107.5 m

**Sample Description (spreadsheet):** Sample 3105m: 10% Siltstone, 90% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 110.1U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 110.1 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3088m: clr,trnsl,pl brn,f-crs,pr srt, sbrnd-sbang,wk sil cmt,tr off wh arg mtx,rr liths,rr mic,lse-rr fri aggs,fr inf & vis por,bri fluor.
- **SANDSTONE** @ ~3096m: clr,trnsl,pl brn,f-med,rr crs,pr srt, sbrnd-sbang,wk sil cmt,tr off wh arg mtx,rr liths,rr mic,lse-rr fri aggs,fr inf & vis por,bri fluor. Rmf:0.087 ohm.m at 75°F
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 104.6 | 33 |
| RES_DEEP (ohm.m) | 29.38 | 33 |
| RES_SHALLOW (ohm.m) | 21.26 | 33 |
| **Δ Res (Deep − Shallow)** | **8.12** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3110 m MD — Interval 3107.5 – 3112.5 m

**Sample Description (spreadsheet):** Sample 3110m: 10% Siltstone, 90% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 130.4U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 130.4 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3096m: clr,trnsl,pl brn,f-med,rr crs,pr srt, sbrnd-sbang,wk sil cmt,tr off wh arg mtx,rr liths,rr mic,lse-rr fri aggs,fr inf & vis por,bri fluor. Rmf:0.087 ohm.m at 75°F
- **SANDSTONE** @ ~3108m: clr,trnsl,pl brn,f-crs,pr srt, sbrnd-sbang,wk sil cmt,tr off wh arg mtx,rr liths,rr mic,lse-rr fri aggs,fr inf & vis por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.0 | 33 |
| RES_DEEP (ohm.m) | 36.60 | 33 |
| RES_SHALLOW (ohm.m) | 22.68 | 33 |
| **Δ Res (Deep − Shallow)** | **13.92** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3115 m MD — Interval 3112.5 – 3117.5 m

**Sample Description (spreadsheet):** Sample 3115m: 5% Siltstone, 95% fine to medium, rare coarse Sandstone, 100% bright FLUOR in SST. TG 120.9U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 120.9 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3108m: clr,trnsl,pl brn,f-crs,pr srt, sbrnd-sbang,wk sil cmt,tr off wh arg mtx,rr liths,rr mic,lse-rr fri aggs,fr inf & vis por,bri fluor.
- **SANDSTONE** @ ~3116m: clr,trnsl,pl yel brn,f-med,rr crs,pr srt, 81 / 5 / 4 / 5 / 5 sbang-sbrnd,wk sil cmt,nil vis mtx,rr feld grs,rr mic flx,lse-fri aggs,fr-gd vis & inf por,bri fluor. 31 12 2 2 0 8.6 M VD D : : 3 1 1 2 2 2 0 8 . . 2 6 m m
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.9 | 33 |
| RES_DEEP (ohm.m) | 30.83 | 33 |
| RES_SHALLOW (ohm.m) | 22.53 | 33 |
| **Δ Res (Deep − Shallow)** | **8.30** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3120 m MD — Interval 3117.5 – 3122.5 m

**Sample Description (spreadsheet):** Sample 3120m: 5% Siltstone, 95% fine to medium, rare coarse Sandstone, 100% bright FLUOR in SST. TG 142.6U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 142.6 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3108m: clr,trnsl,pl brn,f-crs,pr srt, sbrnd-sbang,wk sil cmt,tr off wh arg mtx,rr liths,rr mic,lse-rr fri aggs,fr inf & vis por,bri fluor.
- **SANDSTONE** @ ~3116m: clr,trnsl,pl yel brn,f-med,rr crs,pr srt, 81 / 5 / 4 / 5 / 5 sbang-sbrnd,wk sil cmt,nil vis mtx,rr feld grs,rr mic flx,lse-fri aggs,fr-gd vis & inf por,bri fluor. 31 12 2 2 0 8.6 M VD D : : 3 1 1 2 2 2 0 8 . . 2 6 m m
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 86.3 | 32 |
| RES_DEEP (ohm.m) | 30.16 | 32 |
| RES_SHALLOW (ohm.m) | 21.51 | 32 |
| **Δ Res (Deep − Shallow)** | **8.64** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3125 m MD — Interval 3122.5 – 3127.5 m

**Sample Description (spreadsheet):** Sample 3125m: 5% Siltstone, 95% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 119.8U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 119.8 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3108m: clr,trnsl,pl brn,f-crs,pr srt, sbrnd-sbang,wk sil cmt,tr off wh arg mtx,rr liths,rr mic,lse-rr fri aggs,fr inf & vis por,bri fluor.
- **SANDSTONE** @ ~3116m: clr,trnsl,pl yel brn,f-med,rr crs,pr srt, 81 / 5 / 4 / 5 / 5 sbang-sbrnd,wk sil cmt,nil vis mtx,rr feld grs,rr mic flx,lse-fri aggs,fr-gd vis & inf por,bri fluor. 31 12 2 2 0 8.6 M VD D : : 3 1 1 2 2 2 0 8 . . 2 6 m m
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.5 | 33 |
| RES_DEEP (ohm.m) | 33.07 | 33 |
| RES_SHALLOW (ohm.m) | 24.75 | 33 |
| **Δ Res (Deep − Shallow)** | **8.33** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3130 m MD — Interval 3127.5 – 3132.5 m

**Sample Description (spreadsheet):** Sample 3130m: 5% Siltstone, 95% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 142.5U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 142.5 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3116m: clr,trnsl,pl yel brn,f-med,rr crs,pr srt, 81 / 5 / 4 / 5 / 5 sbang-sbrnd,wk sil cmt,nil vis mtx,rr feld grs,rr mic flx,lse-fri aggs,fr-gd vis & inf por,bri fluor. 31 12 2 2 0 8.6 M VD D : : 3 1 1 2 2 2 0 8 . . 2 6 m m
- **SANDSTONE** @ ~3128m: clr,trnsl,pl brn,f-crs,pr srt, sbang-sbrnd,wk sil cmt,nil vis mtx,tr frstd qtz grs,tr mic,tr feld grs,fri-lse,fr-gd vis & inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 78.7 | 33 |
| RES_DEEP (ohm.m) | 33.49 | 33 |
| RES_SHALLOW (ohm.m) | 23.35 | 33 |
| **Δ Res (Deep − Shallow)** | **10.14** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3135 m MD — Interval 3132.5 – 3137.5 m

**Sample Description (spreadsheet):** Sample 3135m: 5% Siltstone, 95% fine to medium, rare coarse Sandstone, 100% bright FLUOR in SST. TG 150.3U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 150.3 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3128m: clr,trnsl,pl brn,f-crs,pr srt, sbang-sbrnd,wk sil cmt,nil vis mtx,tr frstd qtz grs,tr mic,tr feld grs,fri-lse,fr-gd vis & inf por,bri fluor.
- **SANDSTONE** @ ~3136m: clr,trnsl,pl brn,f-med,rr crs,pr srt, sbang-sbrnd,wk sil cmt,rr off wh arg mtx,tr mic flx, fri-lse,fr-gd inf & vis por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 89.9 | 33 |
| RES_DEEP (ohm.m) | 38.71 | 33 |
| RES_SHALLOW (ohm.m) | 23.64 | 33 |
| **Δ Res (Deep − Shallow)** | **15.07** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3140 m MD — Interval 3137.5 – 3142.5 m

**Sample Description (spreadsheet):** Sample 3140m: 5% Siltstone, 95% fine to medium, rare coarse Sandstone, 100% bright FLUOR in SST. TG 145.3U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 145.3 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3128m: clr,trnsl,pl brn,f-crs,pr srt, sbang-sbrnd,wk sil cmt,nil vis mtx,tr frstd qtz grs,tr mic,tr feld grs,fri-lse,fr-gd vis & inf por,bri fluor.
- **SANDSTONE** @ ~3136m: clr,trnsl,pl brn,f-med,rr crs,pr srt, sbang-sbrnd,wk sil cmt,rr off wh arg mtx,tr mic flx, fri-lse,fr-gd inf & vis por,bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 90.7 | 33 |
| RES_DEEP (ohm.m) | 37.88 | 33 |
| RES_SHALLOW (ohm.m) | 24.28 | 33 |
| **Δ Res (Deep − Shallow)** | **13.60** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3145 m MD — Interval 3142.5 – 3147.5 m

**Sample Description (spreadsheet):** Sample 3145m: 5% Siltstone, 95% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 126.4U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 126.4 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3128m: clr,trnsl,pl brn,f-crs,pr srt, sbang-sbrnd,wk sil cmt,nil vis mtx,tr frstd qtz grs,tr mic,tr feld grs,fri-lse,fr-gd vis & inf por,bri fluor.
- **SANDSTONE** @ ~3136m: clr,trnsl,pl brn,f-med,rr crs,pr srt, sbang-sbrnd,wk sil cmt,rr off wh arg mtx,tr mic flx, fri-lse,fr-gd inf & vis por,bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 87.0 | 32 |
| RES_DEEP (ohm.m) | 38.71 | 32 |
| RES_SHALLOW (ohm.m) | 25.50 | 32 |
| **Δ Res (Deep − Shallow)** | **13.20** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3150 m MD — Interval 3147.5 – 3152.5 m

**Sample Description (spreadsheet):** Sample 3150m: 5% Siltstone, 95% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 159.2U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 159.2 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3136m: clr,trnsl,pl brn,f-med,rr crs,pr srt, sbang-sbrnd,wk sil cmt,rr off wh arg mtx,tr mic flx, fri-lse,fr-gd inf & vis por,bri fluor.
- **SANDSTONE** @ ~3148m: clr,trnsl,pl brn,f-crs,pr srt, sbang-sbrnd,wk sil cmt,rr off wh arg mtx,tr mic flx, fri-lse,fr-gd inf & vis por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.2 | 33 |
| RES_DEEP (ohm.m) | 34.72 | 33 |
| RES_SHALLOW (ohm.m) | 22.70 | 33 |
| **Δ Res (Deep − Shallow)** | **12.02** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3155 m MD — Interval 3152.5 – 3157.5 m

**Sample Description (spreadsheet):** Sample 3155m: 0% Siltstone, 100% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 171.6U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 171.6 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3148m: clr,trnsl,pl brn,f-crs,pr srt, sbang-sbrnd,wk sil cmt,rr off wh arg mtx,tr mic flx, fri-lse,fr-gd inf & vis por,bri fluor.
- **SANDSTONE** @ ~3156m: clr,trnsl,pl brn,f-crs,pr srt, sbang-sbrnd,wk sil cmt,rr off wh arg mtx,tr mic flx, fri-lse,fr-gd inf & vis por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 94.3 | 33 |
| RES_DEEP (ohm.m) | 33.16 | 33 |
| RES_SHALLOW (ohm.m) | 22.55 | 33 |
| **Δ Res (Deep − Shallow)** | **10.61** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3160 m MD — Interval 3157.5 – 3162.5 m

**Sample Description (spreadsheet):** Sample 3160m: 0% Siltstone, 100% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 69.4U

| Property | Value |
|----------|-------|
| % Sandstone | 100 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 69.4 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3148m: clr,trnsl,pl brn,f-crs,pr srt, sbang-sbrnd,wk sil cmt,rr off wh arg mtx,tr mic flx, fri-lse,fr-gd inf & vis por,bri fluor.
- **SANDSTONE** @ ~3156m: clr,trnsl,pl brn,f-crs,pr srt, sbang-sbrnd,wk sil cmt,rr off wh arg mtx,tr mic flx, fri-lse,fr-gd inf & vis por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 93.6 | 33 |
| RES_DEEP (ohm.m) | 34.88 | 33 |
| RES_SHALLOW (ohm.m) | 24.44 | 33 |
| **Δ Res (Deep − Shallow)** | **10.44** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3165 m MD — Interval 3162.5 – 3167.5 m

**Sample Description (spreadsheet):** Sample 3165m: 5% Siltstone, 95% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 125.6U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 125.6 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3148m: clr,trnsl,pl brn,f-crs,pr srt, sbang-sbrnd,wk sil cmt,rr off wh arg mtx,tr mic flx, fri-lse,fr-gd inf & vis por,bri fluor.
- **SANDSTONE** @ ~3156m: clr,trnsl,pl brn,f-crs,pr srt, sbang-sbrnd,wk sil cmt,rr off wh arg mtx,tr mic flx, fri-lse,fr-gd inf & vis por,bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 97.9 | 33 |
| RES_DEEP (ohm.m) | 33.65 | 33 |
| RES_SHALLOW (ohm.m) | 23.83 | 33 |
| **Δ Res (Deep − Shallow)** | **9.82** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3170 m MD — Interval 3167.5 – 3172.5 m

**Sample Description (spreadsheet):** Sample 3170m: 5% Siltstone, 95% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 131.1U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 131.1 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3156m: clr,trnsl,pl brn,f-crs,pr srt, sbang-sbrnd,wk sil cmt,rr off wh arg mtx,tr mic flx, fri-lse,fr-gd inf & vis por,bri fluor.
- **SILTSTONE** @ ~3168m: med-dk gry,aren,mnr arg,tr micmic, frm-mod hd,sbblky-blky.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 98.9 | 32 |
| RES_DEEP (ohm.m) | 34.83 | 32 |
| RES_SHALLOW (ohm.m) | 24.06 | 32 |
| **Δ Res (Deep − Shallow)** | **10.77** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3175 m MD — Interval 3172.5 – 3177.5 m

**Sample Description (spreadsheet):** Sample 3175m: 20% Siltstone, 80% fine to coarse Sandstone, 80% bright FLUOR in SST. TG 122.2U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 80% bri |
| Total Gas | 122.2 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3168m: med-dk gry,aren,mnr arg,tr micmic, frm-mod hd,sbblky-blky.
- **SANDSTONE** @ ~3178m: clr,trnsl,pl brn,f-med,rr crs,pr srt, sbang-sbrnd,wk sil cmt,rr off wh arg mtx,tr liths, 31 12 8 2 0 9.6 lse-fri aggs i/p,fr-gd inf & vis por,bri fluor. of SST,dll-bri yel grn evn fluor,slw-mod bldng
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 95.0 | 33 |
| RES_DEEP (ohm.m) | 32.71 | 33 |
| RES_SHALLOW (ohm.m) | 24.01 | 33 |
| **Δ Res (Deep − Shallow)** | **8.70** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3180 m MD — Interval 3177.5 – 3182.5 m

**Sample Description (spreadsheet):** Sample 3180m: 20% Siltstone, 80% fine to coarse Sandstone, 80% bright FLUOR in SST. TG 68.6U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 80% bri |
| Total Gas | 68.6 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3168m: med-dk gry,aren,mnr arg,tr micmic, frm-mod hd,sbblky-blky.
- **SANDSTONE** @ ~3178m: clr,trnsl,pl brn,f-med,rr crs,pr srt, sbang-sbrnd,wk sil cmt,rr off wh arg mtx,tr liths, 31 12 8 2 0 9.6 lse-fri aggs i/p,fr-gd inf & vis por,bri fluor. of SST,dll-bri yel grn evn fluor,slw-mod bldng
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.6 | 33 |
| RES_DEEP (ohm.m) | 34.22 | 33 |
| RES_SHALLOW (ohm.m) | 24.49 | 33 |
| **Δ Res (Deep − Shallow)** | **9.73** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3185 m MD — Interval 3182.5 – 3187.5 m

**Sample Description (spreadsheet):** Sample 3185m: 5% Siltstone, 95% fine to medium, rare coarse Sandstone, 100% bright FLUOR in SST. TG 110.8U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 110.8 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3168m: med-dk gry,aren,mnr arg,tr micmic, frm-mod hd,sbblky-blky.
- **SANDSTONE** @ ~3178m: clr,trnsl,pl brn,f-med,rr crs,pr srt, sbang-sbrnd,wk sil cmt,rr off wh arg mtx,tr liths, 31 12 8 2 0 9.6 lse-fri aggs i/p,fr-gd inf & vis por,bri fluor. of SST,dll-bri yel grn evn fluor,slw-mod bldng
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 88.1 | 33 |
| RES_DEEP (ohm.m) | 35.53 | 33 |
| RES_SHALLOW (ohm.m) | 24.93 | 33 |
| **Δ Res (Deep − Shallow)** | **10.60** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3215 m MD — Interval 3212.5 – 3217.5 m

**Sample Description (spreadsheet):** Sample 3215m: 5% Siltstone, 95% fine to medium, rare coarse Sandstone, 90% moderately bright FLUOR in SST. TG 88U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 90% mod bri |
| Total Gas | 88 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3208m: pl brn,clr,trnsl,f-med,tr crs,mod srt, sbang-sbrnd,wk sil cmt,tr off wh arg mtx,rr liths, fri-lse,fr-gd inf & vis por,bri fluor. 32 12 1 3 2 0.3 o sl f w S - S m T o ,d d i m bl - d m ng o d c u b t r , i b y lu e - l w g h rn c p /c tc ,t h h y k - e r/ v r. n fluor,
- **SANDSTONE** @ ~3215m: clr,trnsl,pl brn,vf-med,,sbang-sbrnd, wk sil cmt,nil vis mtx,tr carb spks,lse,fr-gd inf por,bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 131.9 | 33 |
| RES_DEEP (ohm.m) | 24.58 | 33 |
| RES_SHALLOW (ohm.m) | 15.75 | 33 |
| **Δ Res (Deep − Shallow)** | **8.83** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3220 m MD — Interval 3217.5 – 3222.5 m

**Sample Description (spreadsheet):** Sample 3220m: 5% Siltstone, 95% fine to medium, rare coarse Sandstone, 90% moderately bright FLUOR in SST. TG 76.3U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 90% mod bri |
| Total Gas | 76.3 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3208m: pl brn,clr,trnsl,f-med,tr crs,mod srt, sbang-sbrnd,wk sil cmt,tr off wh arg mtx,rr liths, fri-lse,fr-gd inf & vis por,bri fluor. 32 12 1 3 2 0.3 o sl f w S - S m T o ,d d i m bl - d m ng o d c u b t r , i b y lu e - l w g h rn c p /c tc ,t h h y k - e r/ v r. n fluor,
- **SANDSTONE** @ ~3215m: clr,trnsl,pl brn,vf-med,,sbang-sbrnd, wk sil cmt,nil vis mtx,tr carb spks,lse,fr-gd inf por,bri fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 132.6 | 33 |
| RES_DEEP (ohm.m) | 29.28 | 33 |
| RES_SHALLOW (ohm.m) | 18.04 | 33 |
| **Δ Res (Deep − Shallow)** | **11.24** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3225 m MD — Interval 3222.5 – 3227.5 m

**Sample Description (spreadsheet):** Sample 3225m: trace siderite in 20% Siltstone, 80% fine to medium, rare coarse Sandstone, 50% moderately bright FLUOR in SST. TG 90.2U

| Property | Value |
|----------|-------|
| % Sandstone | 80 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 50% mod bri |
| Total Gas | 90.2 U |
| FeCO₃ in Siltstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3208m: pl brn,clr,trnsl,f-med,tr crs,mod srt, sbang-sbrnd,wk sil cmt,tr off wh arg mtx,rr liths, fri-lse,fr-gd inf & vis por,bri fluor. 32 12 1 3 2 0.3 o sl f w S - S m T o ,d d i m bl - d m ng o d c u b t r , i b y lu e - l w g h rn c p /c tc ,t h h y k - e r/ v r. n fluor,
- **SANDSTONE** @ ~3215m: clr,trnsl,pl brn,vf-med,,sbang-sbrnd, wk sil cmt,nil vis mtx,tr carb spks,lse,fr-gd inf por,bri fluor.
- _(4 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 142.8 | 32 |
| RES_DEEP (ohm.m) | 28.26 | 32 |
| RES_SHALLOW (ohm.m) | 18.20 | 32 |
| **Δ Res (Deep − Shallow)** | **10.06** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3255 m MD — Interval 3252.5 – 3257.5 m

**Sample Description (spreadsheet):** Sample 3255m: 15% Siltstone, 85% fine to medium, rare coarse Sandstone, 100% bright FLUOR in SST. TG 63U

| Property | Value |
|----------|-------|
| % Sandstone | 85 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 63 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3240m: clr,trnsl,pl yel brn,f-csr,pr srt, 3244 sbang-sbrnd,wk sil cmt,tr off wh arg mtx,tr liths, 1231.3 lse-fri aggs,fr vis & inf por,mod bri fluor. of SST,dll-mod bri yel grn ptchy-evn fluor,slw-
- **SANDSTONE** @ ~3248m: clr,trnsl,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,nil mtx,lse,gd inf por,mod bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 112.0 | 33 |
| RES_DEEP (ohm.m) | 46.28 | 33 |
| RES_SHALLOW (ohm.m) | 27.29 | 33 |
| **Δ Res (Deep − Shallow)** | **18.99** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3260 m MD — Interval 3257.5 – 3262.5 m

**Sample Description (spreadsheet):** Sample 3260m: 15% Siltstone, 85% fine to medium, rare coarse Sandstone, 100% bright FLUOR in SST. TG 96.6U

| Property | Value |
|----------|-------|
| % Sandstone | 85 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 96.6 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3248m: clr,trnsl,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,nil mtx,lse,gd inf por,mod bri fluor.
- **SANDSTONE** @ ~3256m: clr,trnsl,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,nil mtx,lse,gd inf por,dll-bri fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.5 | 33 |
| RES_DEEP (ohm.m) | 37.89 | 33 |
| RES_SHALLOW (ohm.m) | 25.70 | 33 |
| **Δ Res (Deep − Shallow)** | **12.19** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3265 m MD — Interval 3262.5 – 3267.5 m

**Sample Description (spreadsheet):** Sample 3265m: 10% Siltstone, 90% fine to medium, rare coarse Sandstone, 100% bright FLUOR in SST. TG 127.9U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 127.9 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3248m: clr,trnsl,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,nil mtx,lse,gd inf por,mod bri fluor.
- **SANDSTONE** @ ~3256m: clr,trnsl,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,nil mtx,lse,gd inf por,dll-bri fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 70.1 | 33 |
| RES_DEEP (ohm.m) | 35.86 | 33 |
| RES_SHALLOW (ohm.m) | 24.44 | 33 |
| **Δ Res (Deep − Shallow)** | **11.42** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3270 m MD — Interval 3267.5 – 3272.5 m

**Sample Description (spreadsheet):** Sample 3270m: 10% Siltstone, 90% fine to medium, rare coarse Sandstone, 100% bright FLUOR in SST. TG 135.6U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 135.6 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3256m: clr,trnsl,f-med,rr crs,mod srt, sbang-sbrnd,wk sil cmt,nil mtx,lse,gd inf por,dll-bri fluor.
- **SANDSTONE** @ ~3264m: clr,trnsl,f-med,rr crs,mod srt, 3268 sbang-sbrnd,wk sil cmt,nil mtx,lse,gd inf por,bri 1232.1 fluor. 81 / 5 / 4 / 5 / 5
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 73.1 | 33 |
| RES_DEEP (ohm.m) | 35.39 | 33 |
| RES_SHALLOW (ohm.m) | 23.08 | 33 |
| **Δ Res (Deep − Shallow)** | **12.31** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3275 m MD — Interval 3272.5 – 3277.5 m

**Sample Description (spreadsheet):** Sample 3275m: 5% Siltstone, 95% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 66.8U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 66.8 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3264m: clr,trnsl,f-med,rr crs,mod srt, 3268 sbang-sbrnd,wk sil cmt,nil mtx,lse,gd inf por,bri 1232.1 fluor. 81 / 5 / 4 / 5 / 5
- **SANDSTONE** @ ~3273m: clr,trnsl,f-crs,pr srt,sbrnd,wk sil cmt,tr off wh arg mtx,fri-lse,fr vis & inf por,bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.3 | 32 |
| RES_DEEP (ohm.m) | 45.87 | 32 |
| RES_SHALLOW (ohm.m) | 28.42 | 32 |
| **Δ Res (Deep − Shallow)** | **17.45** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3280 m MD — Interval 3277.5 – 3282.5 m

**Sample Description (spreadsheet):** Sample 3280m: 5% Siltstone, 95% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 148.2U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 148.2 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3264m: clr,trnsl,f-med,rr crs,mod srt, 3268 sbang-sbrnd,wk sil cmt,nil mtx,lse,gd inf por,bri 1232.1 fluor. 81 / 5 / 4 / 5 / 5
- **SANDSTONE** @ ~3273m: clr,trnsl,f-crs,pr srt,sbrnd,wk sil cmt,tr off wh arg mtx,fri-lse,fr vis & inf por,bri fluor.
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.0 | 33 |
| RES_DEEP (ohm.m) | 44.35 | 33 |
| RES_SHALLOW (ohm.m) | 27.31 | 33 |
| **Δ Res (Deep − Shallow)** | **17.04** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3285 m MD — Interval 3282.5 – 3287.5 m

**Sample Description (spreadsheet):** Sample 3285m: 10% Siltstone, 90% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 119.7U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 119.7 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3273m: clr,trnsl,f-crs,pr srt,sbrnd,wk sil cmt,tr off wh arg mtx,fri-lse,fr vis & inf por,bri fluor.
- **SANDSTONE** @ ~3284m: clr,trnsl,pl yel brn,f-crs,pr srt,sbrnd, wk sil cmt,rr off wh arg mtx,rr mic flks,fri-lse,fr-gd vis & inf por,bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 84.1 | 33 |
| RES_DEEP (ohm.m) | 42.31 | 33 |
| RES_SHALLOW (ohm.m) | 25.61 | 33 |
| **Δ Res (Deep − Shallow)** | **16.70** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3290 m MD — Interval 3287.5 – 3292.5 m

**Sample Description (spreadsheet):** Sample 3290m: 10% Siltstone, 90% fine to coarse Sandstone, 100% bright FLUOR in SST. TG 101.9U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 101.9 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3273m: clr,trnsl,f-crs,pr srt,sbrnd,wk sil cmt,tr off wh arg mtx,fri-lse,fr vis & inf por,bri fluor.
- **SANDSTONE** @ ~3284m: clr,trnsl,pl yel brn,f-crs,pr srt,sbrnd, wk sil cmt,rr off wh arg mtx,rr mic flks,fri-lse,fr-gd vis & inf por,bri fluor.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 85.3 | 33 |
| RES_DEEP (ohm.m) | 46.48 | 33 |
| RES_SHALLOW (ohm.m) | 28.64 | 33 |
| **Δ Res (Deep − Shallow)** | **17.84** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3295 m MD — Interval 3292.5 – 3297.5 m

**Sample Description (spreadsheet):** Sample 3295m: 5% Siltstone, 95% fine to coarse Sandstone, 90% bright FLUOR in SST. TG 108U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 90% bri |
| Total Gas | 108 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3284m: clr,trnsl,pl yel brn,f-crs,pr srt,sbrnd, wk sil cmt,rr off wh arg mtx,rr mic flks,fri-lse,fr-gd vis & inf por,bri fluor.
- **SANDSTONE** @ ~3296m: clr,trnsl,pl yel brn,f-crs,pr srt,sbrnd, wk sil cmt,rr off wh arg mtx,rr mic flks,fri-lse,fr-gd vis & inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 79.1 | 33 |
| RES_DEEP (ohm.m) | 40.75 | 33 |
| RES_SHALLOW (ohm.m) | 27.04 | 33 |
| **Δ Res (Deep − Shallow)** | **13.71** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3300 m MD — Interval 3297.5 – 3302.5 m

**Sample Description (spreadsheet):** Sample 3300m: 5% Siltstone, 95% fine to coarse Sandstone, 90% bright FLUOR in SST. TG 144.8U

| Property | Value |
|----------|-------|
| % Sandstone | 95 |
| Grain Size | f-crs (max: C) |
| Fluorescence | 90% bri |
| Total Gas | 144.8 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3284m: clr,trnsl,pl yel brn,f-crs,pr srt,sbrnd, wk sil cmt,rr off wh arg mtx,rr mic flks,fri-lse,fr-gd vis & inf por,bri fluor.
- **SANDSTONE** @ ~3296m: clr,trnsl,pl yel brn,f-crs,pr srt,sbrnd, wk sil cmt,rr off wh arg mtx,rr mic flks,fri-lse,fr-gd vis & inf por,bri fluor.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 77.9 | 32 |
| RES_DEEP (ohm.m) | 43.56 | 32 |
| RES_SHALLOW (ohm.m) | 29.18 | 32 |
| **Δ Res (Deep − Shallow)** | **14.38** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3305 m MD — Interval 3302.5 – 3307.5 m

**Sample Description (spreadsheet):** Sample 3305m: 10% Siltstone, 90% fine to medium, rare coarse Sandstone, 100% bright FLUOR in SST. TG 155.1U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 155.1 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3296m: clr,trnsl,pl yel brn,f-crs,pr srt,sbrnd, wk sil cmt,rr off wh arg mtx,rr mic flks,fri-lse,fr-gd vis & inf por,bri fluor.
- **SILTSTONE** @ ~3312m: lt-med gry,aren,micmic,com sid frags, tr liths,mod hd,sbblky-sbfiss.

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 92.1 | 33 |
| RES_DEEP (ohm.m) | 42.43 | 33 |
| RES_SHALLOW (ohm.m) | 25.80 | 33 |
| **Δ Res (Deep − Shallow)** | **16.62** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3310 m MD — Interval 3307.5 – 3312.5 m

**Sample Description (spreadsheet):** Sample 3310m: 10% Siltstone, 90% fine to medium, rare coarse Sandstone, 100% bright FLUOR in SST. TG 140.8U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 140.8 U |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3296m: clr,trnsl,pl yel brn,f-crs,pr srt,sbrnd, wk sil cmt,rr off wh arg mtx,rr mic flks,fri-lse,fr-gd vis & inf por,bri fluor.
- **SILTSTONE** @ ~3312m: lt-med gry,aren,micmic,com sid frags, tr liths,mod hd,sbblky-sbfiss.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 103.9 | 33 |
| RES_DEEP (ohm.m) | 44.19 | 33 |
| RES_SHALLOW (ohm.m) | 27.14 | 33 |
| **Δ Res (Deep − Shallow)** | **17.05** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3315 m MD — Interval 3312.5 – 3317.5 m

**Sample Description (spreadsheet):** Sample 3315m: 10% Siltstone, 90% fine to medium, rare coarse Sandstone, 100% bright FLUOR in SST. TG 138.1U

| Property | Value |
|----------|-------|
| % Sandstone | 90 |
| Grain Size | f-med, rr crs (max: C) |
| Fluorescence | 100% bri |
| Total Gas | 138.1 U |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3312m: lt-med gry,aren,micmic,com sid frags, tr liths,mod hd,sbblky-sbfiss.
- **LIMESTONE** @ ~3324m: lt-med gry brn,micr,arg,sid,hd, 75 / 6 / 5 / 7 / 7 166 U blky-sbblky,ang.
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 106.8 | 33 |
| RES_DEEP (ohm.m) | 56.54 | 33 |
| RES_SHALLOW (ohm.m) | 32.15 | 33 |
| **Δ Res (Deep − Shallow)** | **24.40** | — |

**Permeability Proxy:** Moderate-high inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3345 m MD — Interval 3342.5 – 3347.5 m

**Sample Description (spreadsheet):** Sample 3345m: common siderite in 25% Siltstone, 75% very fine to coarse Sandstone, 80% moderately bright FLUOR in SST. TG U

| Property | Value |
|----------|-------|
| % Sandstone | 75 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 80% mod bri |
| FeCO₃ in Siltstone | com |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3332m: clr,trnsl,f-crs,pr srt,sbrnd,wk sil cmt, nil vis mtx,com sid frags,tr off wh alt feld grs,tr mic flks,lse,gd inf por,dll-mod bri fluor.
- **SILTSTONE** @ ~3340m: lt-dk gry,aren,micmic,tr liths,com sid,tr carb spks,mod hd,blky-sbfiss.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 132.9 | 33 |
| RES_DEEP (ohm.m) | 25.55 | 33 |
| RES_SHALLOW (ohm.m) | 16.43 | 33 |
| **Δ Res (Deep − Shallow)** | **9.12** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3350 m MD — Interval 3347.5 – 3352.5 m

**Sample Description (spreadsheet):** Sample 3350m: common siderite in 25% Siltstone, 75% very fine to coarse Sandstone, 80% moderately bright FLUOR in SST. TG U

| Property | Value |
|----------|-------|
| % Sandstone | 75 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 80% mod bri |
| FeCO₃ in Siltstone | com |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3340m: lt-dk gry,aren,micmic,tr liths,com sid,tr carb spks,mod hd,blky-sbfiss.
- **SANDSTONE** @ ~3352m: pl brn,trnsl,vf-f,wl srt,sbrnd-sbang,sil cmt,tr off wh arg mtx,rr liths,fri,pr-fr vis por,mod bri fluor. 76 / 4 / 4 / 7 / 9 FLUORESCENCE:3345.0m-3370.0m,80% of SST,dll-mod bri yel grn ptchy-evn fluor,slw
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 142.6 | 33 |
| RES_DEEP (ohm.m) | 24.92 | 33 |
| RES_SHALLOW (ohm.m) | 16.06 | 33 |
| **Δ Res (Deep − Shallow)** | **8.86** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3355 m MD — Interval 3352.5 – 3357.5 m

**Sample Description (spreadsheet):** Sample 3355m: trace siderite in 30% Siltstone, 70% very fine to coarse Sandstone, 80% moderately bright FLUOR in SST. TG U

| Property | Value |
|----------|-------|
| % Sandstone | 70 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 80% mod bri |
| FeCO₃ in Siltstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3340m: lt-dk gry,aren,micmic,tr liths,com sid,tr carb spks,mod hd,blky-sbfiss.
- **SANDSTONE** @ ~3352m: pl brn,trnsl,vf-f,wl srt,sbrnd-sbang,sil cmt,tr off wh arg mtx,rr liths,fri,pr-fr vis por,mod bri fluor. 76 / 4 / 4 / 7 / 9 FLUORESCENCE:3345.0m-3370.0m,80% of SST,dll-mod bri yel grn ptchy-evn fluor,slw
- _(3 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 137.3 | 32 |
| RES_DEEP (ohm.m) | 20.68 | 32 |
| RES_SHALLOW (ohm.m) | 14.74 | 32 |
| **Δ Res (Deep − Shallow)** | **5.94** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3360 m MD — Interval 3357.5 – 3362.5 m

**Sample Description (spreadsheet):** Sample 3360m: trace siderite in 30% Siltstone, 70% very fine to coarse Sandstone, 80% moderately bright FLUOR in SST. TG U

| Property | Value |
|----------|-------|
| % Sandstone | 70 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 80% mod bri |
| FeCO₃ in Siltstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3352m: pl brn,trnsl,vf-f,wl srt,sbrnd-sbang,sil cmt,tr off wh arg mtx,rr liths,fri,pr-fr vis por,mod bri fluor. 76 / 4 / 4 / 7 / 9 FLUORESCENCE:3345.0m-3370.0m,80% of SST,dll-mod bri yel grn ptchy-evn fluor,slw
- **SILTSTONE** @ ~3360m: lt-dk gry,aren,arg i/p,sli micmic,tr liths, mod hd,sbblky-sbfiss.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 140.1 | 33 |
| RES_DEEP (ohm.m) | 19.39 | 33 |
| RES_SHALLOW (ohm.m) | 14.15 | 33 |
| **Δ Res (Deep − Shallow)** | **5.24** | — |

**Permeability Proxy:** Moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3365 m MD — Interval 3362.5 – 3367.5 m

**Sample Description (spreadsheet):** Sample 3365m: trace siderite in 35% Siltstone, 65% very fine to coarse Sandstone, 80% moderately bright FLUOR in SST. TG U

| Property | Value |
|----------|-------|
| % Sandstone | 65 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 80% mod bri |
| FeCO₃ in Siltstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3352m: pl brn,trnsl,vf-f,wl srt,sbrnd-sbang,sil cmt,tr off wh arg mtx,rr liths,fri,pr-fr vis por,mod bri fluor. 76 / 4 / 4 / 7 / 9 FLUORESCENCE:3345.0m-3370.0m,80% of SST,dll-mod bri yel grn ptchy-evn fluor,slw
- **SILTSTONE** @ ~3360m: lt-dk gry,aren,arg i/p,sli micmic,tr liths, mod hd,sbblky-sbfiss.
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 114.2 | 33 |
| RES_DEEP (ohm.m) | 19.99 | 33 |
| RES_SHALLOW (ohm.m) | 15.21 | 33 |
| **Δ Res (Deep − Shallow)** | **4.79** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3370 m MD — Interval 3367.5 – 3372.5 m

**Sample Description (spreadsheet):** Sample 3370m: trace siderite in 35% Siltstone, 65% very fine to coarse Sandstone, 80% moderately bright FLUOR in SST. TG U

| Property | Value |
|----------|-------|
| % Sandstone | 65 |
| Grain Size | vf-crs (max: C) |
| Fluorescence | 80% mod bri |
| FeCO₃ in Siltstone | tr |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3360m: lt-dk gry,aren,arg i/p,sli micmic,tr liths, mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~3369m: pl brn,lt gry,vf-f,wl srt,sbrnd-sbang,sil 3372 cmt,tr off wh-wh arg tmx,tr liths,loc com sid frags,fri, 1232.4 pr vis por,mod bri fluor. 72 / 4 / 4 / 8 / 12 FLUORESCENCE:3370.0m-3394.0m,80% of SST,dll-mod bri yel grn ptchy-evn fluor,slw
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 129.0 | 33 |
| RES_DEEP (ohm.m) | 18.31 | 33 |
| RES_SHALLOW (ohm.m) | 13.71 | 33 |
| **Δ Res (Deep − Shallow)** | **4.60** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3375 m MD — Interval 3372.5 – 3377.5 m

**Sample Description (spreadsheet):** Sample 3375m: common siderite in 45% Siltstone, 55% very fine to fine Sandstone, 80% moderately bright FLUOR in SST. TG U

| Property | Value |
|----------|-------|
| % Sandstone | 55 |
| Grain Size | vf-f (max: VF) |
| Fluorescence | 80% mod bri |
| FeCO₃ in Siltstone | com |

**Mudlog Cuttings Description (PDF):**
- **SILTSTONE** @ ~3360m: lt-dk gry,aren,arg i/p,sli micmic,tr liths, mod hd,sbblky-sbfiss.
- **SANDSTONE** @ ~3369m: pl brn,lt gry,vf-f,wl srt,sbrnd-sbang,sil 3372 cmt,tr off wh-wh arg tmx,tr liths,loc com sid frags,fri, 1232.4 pr vis por,mod bri fluor. 72 / 4 / 4 / 8 / 12 FLUORESCENCE:3370.0m-3394.0m,80% of SST,dll-mod bri yel grn ptchy-evn fluor,slw
- _(2 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 139.4 | 33 |
| RES_DEEP (ohm.m) | 16.99 | 33 |
| RES_SHALLOW (ohm.m) | 12.63 | 33 |
| **Δ Res (Deep − Shallow)** | **4.36** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3380 m MD — Interval 3377.5 – 3382.5 m

**Sample Description (spreadsheet):** Sample 3380m: common siderite in 45% Siltstone, 55% very fine to fine Sandstone, 80% moderately bright FLUOR in SST. TG U

| Property | Value |
|----------|-------|
| % Sandstone | 55 |
| Grain Size | vf-f (max: VF) |
| Fluorescence | 80% mod bri |
| FeCO₃ in Siltstone | com |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3369m: pl brn,lt gry,vf-f,wl srt,sbrnd-sbang,sil 3372 cmt,tr off wh-wh arg tmx,tr liths,loc com sid frags,fri, 1232.4 pr vis por,mod bri fluor. 72 / 4 / 4 / 8 / 12 FLUORESCENCE:3370.0m-3394.0m,80% of SST,dll-mod bri yel grn ptchy-evn fluor,slw
- **LIMESTONE** @ ~3384m: lt-med gry brn,micr,arg,sid,hd, blky-sbblky,ang. R SP P P M : : 2 1 7 1 6 0 8 -1 -3 1 5 2 60 psi 33 12 8 3 8 2.2
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| GR (gAPI) | 134.7 | 24 |
| RES_DEEP (ohm.m) | 16.21 | 32 |
| RES_SHALLOW (ohm.m) | 12.73 | 32 |
| **Δ Res (Deep − Shallow)** | **3.48** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3385 m MD — Interval 3382.5 – 3387.5 m

**Sample Description (spreadsheet):** Sample 3385m: common siderite in 50% Siltstone, 50% very fine to fine Sandstone, 80% moderately bright FLUOR in SST. TG U

| Property | Value |
|----------|-------|
| % Sandstone | 50 |
| Grain Size | vf-f (max: VF) |
| Fluorescence | 80% mod bri |
| FeCO₃ in Siltstone | com |

**Mudlog Cuttings Description (PDF):**
- **SANDSTONE** @ ~3369m: pl brn,lt gry,vf-f,wl srt,sbrnd-sbang,sil 3372 cmt,tr off wh-wh arg tmx,tr liths,loc com sid frags,fri, 1232.4 pr vis por,mod bri fluor. 72 / 4 / 4 / 8 / 12 FLUORESCENCE:3370.0m-3394.0m,80% of SST,dll-mod bri yel grn ptchy-evn fluor,slw
- **LIMESTONE** @ ~3384m: lt-med gry brn,micr,arg,sid,hd, blky-sbblky,ang. R SP P P M : : 2 1 7 1 6 0 8 -1 -3 1 5 2 60 psi 33 12 8 3 8 2.2
- _(1 additional mudlog entries in interval)_

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|
| RES_DEEP (ohm.m) | 15.74 | 11 |
| RES_SHALLOW (ohm.m) | 12.35 | 11 |
| **Δ Res (Deep − Shallow)** | **3.39** | — |

**Permeability Proxy:** Low-moderate inferred permeability
> Greater deep-shallow resistivity separation → higher inferred permeability (invasion profile indicator).

---

### 3390 m MD — Interval 3387.5 – 3392.0 m

**Sample Description (spreadsheet):** Sample 3390m: common siderite in 50% Siltstone, 50% very fine to fine Sandstone, 80% moderately bright FLUOR in SST. TG U

| Property | Value |
|----------|-------|
| % Sandstone | 50 |
| Grain Size | vf-f (max: VF) |
| Fluorescence | 80% mod bri |
| FeCO₃ in Siltstone | com |

**Mudlog Cuttings Description (PDF):**
- **LIMESTONE** @ ~3384m: lt-med gry brn,micr,arg,sid,hd, blky-sbblky,ang. R SP P P M : : 2 1 7 1 6 0 8 -1 -3 1 5 2 60 psi 33 12 8 3 8 2.2

**Wireline Log Averages (LAS):**
| Curve | Average | Data Points |
|-------|---------|-------------|

**Permeability Proxy:** Insufficient resistivity data
---

## 5. Summary Statistics (McKinlay Member)

| Metric | Value |
|--------|-------|
| Intervals analysed | 208 |
| Depth range | 2255 – 3390 m |
| Avg % Sandstone | 88.4% |
| Avg Δ Res (Deep−Shallow) | 20.07 ohm.m |
| Max Δ Res | 303.26 ohm.m |
| Min Δ Res | 3.39 ohm.m |
