#!/usr/bin/env python3
"""Summarize McKinlay 11 bar-only fluorescence test (no text % calibration)."""

import os
import sys

import pandas as pd

SCRIPTS_DIR = os.path.dirname(os.path.abspath(__file__))
if SCRIPTS_DIR not in sys.path:
    sys.path.insert(0, SCRIPTS_DIR)

from compute_pay_summary import analyze_well  # noqa: E402
from mudlog_bar_fluor import build_bar_fluorescence_series_raw  # noqa: E402
from process_mckinlay_wells import WELLS, process_well  # noqa: E402

WORKSPACE = (
    os.environ.get("WORKSPACE")
    or os.environ.get("GITHUB_WORKSPACE")
    or os.path.abspath(os.path.join(SCRIPTS_DIR, ".."))
)


def main():
    cfg = next(w for w in WELLS if w["alias"] == "MCKINLAY11")
    dc30 = pd.read_excel(os.path.join(WORKSPACE, "DC30.xlsx"))
    mck = pd.read_excel(os.path.join(WORKSPACE, "Mck_Murta.xlsx"))

    meta = process_well(cfg, dc30, mck)
    pay = analyze_well(cfg, dc30, mck)
    mck_start, mck_end = meta["mck_start"], meta["mck_end"]

    bar = build_bar_fluorescence_series_raw(
        os.path.join(WORKSPACE, cfg["pdf"]),
        depth_m_min=mck_start,
        depth_m_max=mck_end,
    )

    results = meta["results"]
    fluor_vals = [r["fluor"] for r in results if pd.notna(r["fluor"])]
    gt75 = sum(1 for v in fluor_vals if v > 75)
    gt50 = sum(1 for v in fluor_vals if v > 50)
    missing = sum(1 for r in results if pd.isna(r["fluor"]))

    print("MCKINLAY 11 — bar-only fluorescence test")
    print(f"McKinlay window: {mck_start:.1f} – {mck_end:.1f} m MD")
    print(f"Bar samples (ft): {len(bar)} over {bar[0].depth_ft:.0f}–{bar[-1].depth_ft:.0f} ft" if bar else "No bar data")
    if bar:
        raw = [s.pct_raw for s in bar]
        print(f"Bar raw range: {min(raw):.0f} – {max(raw):.0f}%")
    print(f"Intervals retained: {len(results)}")
    print(f"Fluor populated: {len(fluor_vals)}/{len(results)} (missing {missing})")
    if fluor_vals:
        print(f"Fluor >75%: {gt75}/{len(results)} | >50%: {gt50}/{len(results)}")
        print(f"Fluor mean/median: {pd.Series(fluor_vals).mean():.1f}% / {pd.Series(fluor_vals).median():.1f}%")
    print()
    print("Pay (bar-only fluor, litho %SS unchanged):")
    print(f"  Lateral: {pay['lateral_length']:.0f} m")
    print(f"  Cuttings pay: {pay['cuttings']['md']:.0f} m ({100*pay['cuttings']['md']/pay['lateral_length']:.1f}%)")
    print(f"  Matching pay: {pay['matching']['md']:.0f} m")
    print(f"  Resistivity pay: {pay['resistivity']['md']:.0f} m")
    print()
    print("Sample intervals (5 m centres):")
    for r in sorted(results, key=lambda x: x["depth"]):
        f = r["fluor"]
        fs = f"{f:.0f}%" if pd.notna(f) else "—"
        print(f"  {r['depth']:.0f} m: fluor={fs} ss={r['pct_ss']:.0f}%" if pd.notna(r["pct_ss"]) else f"  {r['depth']:.0f} m: fluor={fs}")


if __name__ == "__main__":
    main()
