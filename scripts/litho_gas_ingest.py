"""Build 5 m sample intervals from mudlog lithology ASCII and drill-gas ASCII/TXT."""

from __future__ import annotations

import os
import re

import numpy as np
import pandas as pd

WORKSPACE = (
    os.environ.get("WORKSPACE")
    or os.environ.get("GITHUB_WORKSPACE")
    or os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
)

FT_TO_M = 0.3048
BIN_SIZE_M = 5.0

# Geolog / mudlog lithology codes observed in McKinlay 10–15 ASCII exports.
SANDSTONE_CODES = {400, 401, 402, 403, 404, 405}
SILTSTONE_CODES = {406}
SHALE_CODES = {407, 408, 800}


def _resolve_path(path: str) -> str:
    return path if os.path.isabs(path) else os.path.join(WORKSPACE, path)


def _to_depth_m(value: float, unit: str) -> float:
    if unit.lower() in {"ft", "feet"}:
        return value * FT_TO_M
    return value


def _pct_sandstone_from_codes(code_pcts: list[tuple[float, int]]) -> float | None:
    if not code_pcts:
        return None
    ss = sum(p for p, c in code_pcts if c in SANDSTONE_CODES)
    silt = sum(p for p, c in code_pcts if c in SILTSTONE_CODES)
    shale = sum(p for p, c in code_pcts if c in SHALE_CODES)
    other = sum(p for p, c in code_pcts if c not in SANDSTONE_CODES | SILTSTONE_CODES | SHALE_CODES)
    total = ss + silt + shale + other
    if total <= 0:
        return None
    return 100.0 * ss / total


def parse_litho_line(parts: list[str]) -> tuple[float, float | None] | None:
    """Parse one litho ASCII row → (depth_m, pct_ss)."""
    if len(parts) < 3:
        return None
    try:
        depth_raw = float(parts[0])
    except ValueError:
        return None

    code_pcts: list[tuple[float, int]] = []
    col3 = int(float(parts[1]))
    if col3 > 0:
        code_pcts.append((100.0, col3))

    idx = 2
    for _ in range(5):
        if idx + 1 >= len(parts):
            break
        try:
            pct = float(parts[idx])
            code = int(float(parts[idx + 1]))
        except ValueError:
            break
        idx += 2
        if pct > 0 and code > 0:
            code_pcts.append((pct, code))

    pct_ss = _pct_sandstone_from_codes(code_pcts)
    return depth_raw, pct_ss


def load_litho_series(path: str, depth_unit: str = "ft") -> pd.DataFrame:
    """Load lithology ASCII/TXT as depth (m MD) + pct_ss."""
    path = _resolve_path(path)
    rows: list[dict] = []
    with open(path, encoding="utf-8", errors="replace") as f:
        for line in f:
            if not line.strip() or line.lower().startswith("measdpth"):
                continue
            parts = line.split()
            parsed = parse_litho_line(parts)
            if parsed is None:
                continue
            depth_raw, pct_ss = parsed
            rows.append(
                {
                    "depth_m": _to_depth_m(depth_raw, depth_unit),
                    "pct_ss": pct_ss,
                }
            )
    if not rows:
        raise ValueError(f"No lithology rows parsed from {path}")
    return pd.DataFrame(rows).sort_values("depth_m").reset_index(drop=True)


def load_gas_series(path: str, depth_unit: str = "ft") -> pd.DataFrame:
    """Load drill-gas ASCII/TXT as depth (m MD) + total gas (Units_20)."""
    path = _resolve_path(path)
    rows: list[dict] = []
    gas_col_idx = None

    with open(path, encoding="utf-8", errors="replace") as f:
        for line in f:
            lower = line.lower()
            if "bit depth" in lower and "gas" in lower:
                continue
            if gas_col_idx is None and "units_20" in lower:
                parts = line.split()
                for i, token in enumerate(parts):
                    if "units_20" in token.lower():
                        gas_col_idx = i
                        break
                continue
            if gas_col_idx is None:
                continue
            parts = line.split()
            if len(parts) <= gas_col_idx:
                continue
            try:
                depth_raw = float(parts[0])
                gas = float(parts[gas_col_idx])
            except ValueError:
                continue
            rows.append({"depth_m": _to_depth_m(depth_raw, depth_unit), "gas_u": gas})

    if not rows:
        raise ValueError(f"No drill-gas rows parsed from {path}")
    return pd.DataFrame(rows).sort_values("depth_m").reset_index(drop=True)


def _bin_edges(mck_start: float, mck_end: float, bin_size: float = BIN_SIZE_M) -> np.ndarray:
    first_center = float(np.ceil(mck_start / bin_size) * bin_size)
    if first_center <= mck_start:
        first_center += bin_size
    centers = np.arange(first_center, mck_end + 0.01, bin_size)
    if centers.size == 0:
        centers = np.array([mck_start + bin_size / 2])
    return centers


def aggregate_to_bins(
    litho: pd.DataFrame,
    gas: pd.DataFrame,
    mck_start: float,
    mck_end: float,
    bin_size: float = BIN_SIZE_M,
) -> pd.DataFrame:
    """Aggregate litho %SS and mean gas to 5 m sample bins."""
    centers = _bin_edges(mck_start, mck_end, bin_size)
    records = []

    litho_depths = litho["depth_m"].values
    litho_ss = litho["pct_ss"].values
    gas_depths = gas["depth_m"].values
    gas_vals = gas["gas_u"].values

    for center in centers:
        top = center - bin_size / 2
        bot = center + bin_size / 2
        if bot <= mck_start or top >= mck_end:
            continue

        litho_mask = (litho_depths >= top) & (litho_depths < bot)
        gas_mask = (gas_depths >= top) & (gas_depths < bot)

        ss_vals = litho_ss[litho_mask]
        ss_vals = ss_vals[~np.isnan(ss_vals)]
        pct_ss = float(np.mean(ss_vals)) if ss_vals.size else np.nan

        g_vals = gas_vals[gas_mask]
        gas_u = float(np.mean(g_vals)) if g_vals.size else np.nan

        desc_parts = [f"Sample {center:.0f}m:"]
        if not np.isnan(pct_ss):
            desc_parts.append(f"{pct_ss:.0f}% Sandstone (litho ASCII aggregate)")
        else:
            desc_parts.append("lithology from ASCII (no SS estimate)")
        if not np.isnan(gas_u):
            desc_parts.append(f"TG {gas_u:.1f}U (drill-gas ASCII)")

        records.append(
            {
                "Depth_mMD": center,
                "Pct_Sandstone": pct_ss,
                "Grain_Size": np.nan,
                "Max_Grain_Size": np.nan,
                "Pct_Fluor": np.nan,
                "Brightness": np.nan,
                "Gas_U": gas_u,
                "FeCO3_SLTST": np.nan,
                "FeCO3_SST": np.nan,
                "long_desc": " ".join(desc_parts),
            }
        )

    samples = pd.DataFrame(records)
    if samples.empty:
        raise ValueError("No litho/gas bins generated in McKinlay window")

    depths = samples["Depth_mMD"].values
    tops, bots = [], []
    for i in range(len(depths)):
        if i == 0:
            top = depths[0] - bin_size / 2
            bot = (depths[0] + depths[1]) / 2 if len(depths) > 1 else depths[0] + bin_size / 2
        elif i == len(depths) - 1:
            top = (depths[i - 1] + depths[i]) / 2
            bot = depths[i] + bin_size / 2
        else:
            top = (depths[i - 1] + depths[i]) / 2
            bot = (depths[i] + depths[i + 1]) / 2
        tops.append(top)
        bots.append(bot)
    samples["interval_top"] = tops
    samples["interval_bottom"] = bots
    return samples


def build_sample_intervals(cfg: dict, mck_start: float, mck_end: float) -> tuple[pd.DataFrame, dict]:
    """Return (samples_df, long_map) compatible with load_samples() output."""
    depth_unit = cfg.get("depth_unit", "ft")
    litho = load_litho_series(cfg["litho"], depth_unit)
    gas = load_gas_series(cfg["gas"], depth_unit)
    samples = aggregate_to_bins(litho, gas, mck_start, mck_end)
    long_map = {float(row["Depth_mMD"]): row["long_desc"] for _, row in samples.iterrows()}
    return samples, long_map
