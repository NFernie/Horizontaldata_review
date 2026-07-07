# All Wells — McKinlay Pay Comparison

**Generated:** 2026-07-07 03:25 UTC

## Summary Table

| Well | DC30 (m) | TD (m) | Lateral (m) | Cuttings Pay (m) | Cuttings % | Res Pay (m) | Res % | Matching Pay (m) | Matching % |
|------|----------|--------|-------------|------------------|------------|-------------|-------|------------------|------------|
| BIALA 19 | 1730.4 | 3730.0 | 1999.6 | 1544.0 | 77.2% | 1372.1 | 68.6% | 1270.0 | 63.5% |
| BIALA 20 | 1583.4 | 3315.0 | 1731.6 | 1140.0 | 65.8% | 1492.3 | 86.2% | 1127.5 | 65.1% |
| BIALA 21 | 1920.6 | 3278.1 | 1357.6 | 950.5 | 70.0% | 1253.9 | 92.4% | 944.0 | 69.5% |
| FROSTILLICUS 2 | 1614.2 | 3724.0 | 2109.8 | 1624.0 | 77.0% | 1857.1 | 88.0% | 1624.0 | 77.0% |
| GRANCHIO 4 | 1678.3 | 2825.0 | 1146.7 | 945.0 | 82.4% | 1023.7 | 89.3% | 910.0 | 79.4% |
| HOBBES 5 | 1701.2 | 2590.0 | 888.8 | 368.0 | 41.4% | 222.7 | 25.0% | 201.5 | 22.7% |
| HOBBES 6 | 1685.5 | 2500.0 | 814.5 | 463.0 | 56.8% | 522.6 | 64.2% | 453.0 | 55.6% |
| JENA 31 | 2249.7 | 3394.0 | 1144.3 | 965.0 | 84.3% | 978.6 | 85.5% | 920.0 | 80.4% |
| JENA 31DW1 | 2060.8 | 3658.0 | 1597.2 | 1137.5 | 71.2% | 1141.6 | 71.5% | 1082.5 | 67.8% |
| MCKINLAY 20 | 1633.2 | 3000.0 | 1366.8 | 1149.0 | 84.1% | 803.1 | 58.8% | 727.0 | 53.2% |
| MCKINLAY 21 | 1769.7 | 2417.0 | 647.3 | 470.0 | 72.6% | 475.6 | 73.5% | 400.0 | 61.8% |
| MCKINLAY 22 | 1671.6 | 3206.3 | 1534.7 | 1302.0 | 84.8% | 1039.8 | 67.8% | 922.0 | 60.1% |
| MCKINLAY 23 | 1678.6 | 2590.0 | 911.4 | 865.0 | 94.9% | 858.5 | 94.2% | 845.0 | 92.7% |
| MCKINLAY 24 | 1633.5 | 2598.0 | 964.5 | 728.5 | 75.5% | 549.1 | 56.9% | 523.5 | 54.3% |
| STIMPEE 6 | 1631.0 | 3186.1 | 1555.0 | 1246.0 | 80.1% | 1306.7 | 84.0% | 1210.5 | 77.8% |
| STIMPEE 7 | 1704.5 | 2840.1 | 1135.6 | 637.5 | 56.1% | 899.8 | 79.2% | 637.5 | 56.1% |
| TERINGIE 6 | 1580.0 | 3444.4 | 1864.4 | 945.0 | 50.7% | 664.5 | 35.6% | 420.0 | 22.5% |

## Portfolio Totals (arithmetic sum — not normalised by well count)

| Metric | Total MD (m) | Avg per well (m) |
|--------|-------------|------------------|
| Lateral length | 22769.9 | 1339.4 |
| Cuttings pay | 16480.0 | 969.4 |
| Resistivity pay | 16461.6 | 968.3 |
| Matching pay | 14218.0 | 836.4 |

## Key Issues & Limitations

1. **Lateral length** = TD (or deepest sample/LAS) minus DC30 top — not horizontal displacement (TVD/VS).
2. **Cuttings pay** uses sample interval midpoints; irregular spacing means overlapping intervals are merged.
3. **Resistivity pay** scans LAS at ~0.15 m steps; NULL values (-999.25) excluded; gaps may break or shorten pay zones.
4. **Matching pay** uses *average* RES_DEEP per sample interval — not point-by-point LAS; can differ from res-only totals.
5. **Cutoffs:** %Fluor > 75%, %SS > 50%, RES_DEEP > 20 ohm.m.
6. **McKinlay Member only** — overburden and re-entry exclusion zones applied (same as cuttings interpretation).
7. **HOBBES 4** not included — no data files in repository.
8. **Legacy McKinlay spreadsheets** (20–24) — fluorescence/sandstone from Sheet1 cols G/H; parsing quality varies.

## Interpretation Notes

- **High cuttings % + low res %** suggests fluorescent sand at cuttings scale but low deep resistivity on log (tight, fresh, or invasion effects).
- **High res % + low cuttings %** suggests log-quality reservoir with cuttings not meeting fluorescence/sandstone cutoffs.
- **Matching pay** is the most conservative — requires both datasets to agree at sample resolution.
