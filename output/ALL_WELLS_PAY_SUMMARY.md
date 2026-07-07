# All Wells — McKinlay Pay Comparison

**Generated:** 2026-07-07 04:53 UTC

## Summary Table

| Well | DC30 (m) | TD (m) | Lateral (m) | Cuttings Pay (m) | Cuttings % | Res Pay (m) | Res % | Matching Pay (m) | Matching % |
|------|----------|--------|-------------|------------------|------------|-------------|-------|------------------|------------|
| BIALA 19 | 1730.4 | 3730.0 | 1999.6 | 1692.0 | 84.6% | 1488.9 | 74.5% | 1413.0 | 70.7% |
| BIALA 20 | 1583.4 | 3315.0 | 1731.6 | 1202.5 | 69.4% | 1283.5 | 74.1% | 1202.5 | 69.4% |
| BIALA 21 | 1920.6 | 3278.1 | 1357.6 | 1040.5 | 76.6% | 1294.0 | 95.3% | 1034.0 | 76.2% |
| FROSTILLICUS 2 | 1614.2 | 3724.0 | 2109.8 | 1677.0 | 79.5% | 1862.8 | 88.3% | 1677.0 | 79.5% |
| GRANCHIO 4 | 1678.3 | 2825.0 | 1146.7 | 802.5 | 70.0% | 796.7 | 69.5% | 767.5 | 66.9% |
| HOBBES 5 | 1701.2 | 2590.0 | 888.8 | 407.0 | 45.8% | 267.8 | 30.1% | 234.5 | 26.4% |
| HOBBES 6 | 1685.5 | 2500.0 | 814.5 | 526.0 | 64.6% | 545.9 | 67.0% | 516.0 | 63.3% |
| JENA 31 | 2249.7 | 3394.0 | 1144.3 | 940.0 | 82.1% | 972.8 | 85.0% | 920.0 | 80.4% |
| JENA 31DW1 | 2060.8 | 3658.0 | 1597.2 | 1180.0 | 73.9% | 1176.7 | 73.7% | 1140.0 | 71.4% |
| MCKINLAY 20 | 1633.2 | 3000.0 | 1366.8 | 1168.0 | 85.5% | 828.6 | 60.6% | 746.0 | 54.6% |
| MCKINLAY 21 | 1769.7 | 2417.0 | 647.3 | 470.0 | 72.6% | 497.0 | 76.8% | 400.0 | 61.8% |
| MCKINLAY 22 | 1671.6 | 3206.3 | 1534.7 | 1302.0 | 84.8% | 1045.0 | 68.1% | 922.0 | 60.1% |
| MCKINLAY 23 | 1678.6 | 2590.0 | 911.4 | 870.0 | 95.5% | 866.5 | 95.1% | 850.0 | 93.3% |
| MCKINLAY 24 | 1633.5 | 2598.0 | 964.5 | 749.5 | 77.7% | 582.8 | 60.4% | 544.5 | 56.5% |
| STIMPEE 6 | 1631.0 | 3186.1 | 1555.0 | 1111.0 | 71.4% | 1181.9 | 76.0% | 1105.5 | 71.1% |
| STIMPEE 7 | 1704.5 | 2840.1 | 1135.6 | 707.5 | 62.3% | 795.5 | 70.1% | 707.5 | 62.3% |
| TERINGIE 6 | 1580.0 | 3444.4 | 1864.4 | 1005.0 | 53.9% | 680.3 | 36.5% | 480.0 | 25.7% |

## Portfolio Totals (arithmetic sum — not normalised by well count)

| Metric | Total MD (m) | Avg per well (m) |
|--------|-------------|------------------|
| Lateral length | 22769.9 | 1339.4 |
| Cuttings pay | 16850.5 | 991.2 |
| Resistivity pay | 16166.7 | 951.0 |
| Matching pay | 14660.0 | 862.4 |

## Key Issues & Limitations

1. **Lateral length** = TD (or deepest sample/LAS) minus DC30 top — not horizontal displacement (TVD/VS).
2. **Cuttings pay** uses sample interval midpoints; irregular spacing means overlapping intervals are merged.
3. **Resistivity pay** scans LAS at ~0.15 m steps; NULL values (-999.25) excluded; gaps may break or shorten pay zones.
4. **Matching pay** uses *average* RES_DEEP per sample interval — not point-by-point LAS; can differ from res-only totals.
5. **Cutoffs:** %Fluor > 75%, %SS > 50%, RES_DEEP > 20 ohm.m.
6. **McKinlay Member only** — overburden intervals (Murta/McKinlay entry → lone McKinlay re-entry) excluded from pay.
7. **HOBBES 4** not included — no data files in repository.
8. **Legacy McKinlay spreadsheets** (20–24) — fluorescence/sandstone from Sheet1 cols G/H; parsing quality varies.

## Interpretation Notes

- **High cuttings % + low res %** suggests fluorescent sand at cuttings scale but low deep resistivity on log (tight, fresh, or invasion effects).
- **High res % + low cuttings %** suggests log-quality reservoir with cuttings not meeting fluorescence/sandstone cutoffs.
- **Matching pay** is the most conservative — requires both datasets to agree at sample resolution.
