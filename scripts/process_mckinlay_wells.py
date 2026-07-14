#!/usr/bin/env python3
"""Batch process horizontal wells for McKinlay Member cuttings & log integration."""

import glob
import os
import re
import sys
from datetime import datetime, timezone

import numpy as np
import pandas as pd
import pdfplumber

SCRIPTS_DIR = os.path.dirname(os.path.abspath(__file__))
if SCRIPTS_DIR not in sys.path:
    sys.path.insert(0, SCRIPTS_DIR)

from litho_gas_ingest import build_sample_intervals  # noqa: E402
from mudlog_parser import (  # noqa: E402
    bridge_block_gaps,
    fill_fluorescence_gaps,
    find_mudlog,
    match_fluorescence,
    parse_fluorescence_entries,
    parse_mudlog_entries,
)
from mudlog_bar_fluor import (  # noqa: E402
    build_bar_fluorescence_series,
    build_bar_fluorescence_series_raw,
    match_bar_fluorescence,
)
from trajectory import TrajectoryInterpolator  # noqa: E402

WORKSPACE = (
    os.environ.get("WORKSPACE")
    or os.environ.get("GITHUB_WORKSPACE")
    or os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
)
OUTPUT_DIR = os.path.join(WORKSPACE, "output")
NULL = -999.25
PAIR_TOLERANCE = 5.0
DEFAULT_REENTRY_OFFSET = 50.0
MUDLOG_WINDOW = 15.0

WELLS = [
    {
        "alias": "JENA31",
        "display": "JENA 31",
        "tops_name": "Jena Dev C Oil Lateral 1_Ops",
        "pdf": "JENA 31_ML_Mudlog_Spud-3394_MD_Final.pdf",
        "xlsx": "Jena 31- Hz Section Samples Descriptions_3394_TD.xlsx",
        "las": "Jena_31",
        "trajectory": "Jena_31_trajectory",
    },
    {
        "alias": "JENA31DW1",
        "display": "JENA 31DW1",
        "tops_name": "Jena Dev C Oil Lateral 2_Ops",
        "pdf": "JENA 31DW1_ML_Mudlog_Spud-3658_MD_Final.pdf",
        "xlsx": "Jena 31DW1- Hz Section Samples Descriptions.xlsx",
        "las": "Jena_31DW1",
        "trajectory": "Jena_31DW1_trajectory",
    },
    {
        "alias": "BIALA19",
        "display": "BIALA 19",
        "tops_name": "BIALA 19",
        "pdf": "BIALA 19_ML_Mudlog_Spud-3730_MD_Final.pdf",
        "xlsx": "Biala 19 Hz Section Samples Descriptions_Rev3.xlsx",
        "las": "Biala_19",
        "trajectory": "Biala_19_trajectory",
    },
    {
        "alias": "BIALA20",
        "display": "BIALA 20",
        "tops_name": "BIALA 20",
        "pdf": "BIALA 20_ML_Mudlog_Spud-3315_MD_Final.pdf",
        "xlsx": "Biala 20 Hz Section Samples Descriptions_Rev3.xlsx",
        "las": "Biala_20",
        "trajectory": "Biala_20_trajectory",
    },
    {
        "alias": "BIALA21",
        "display": "BIALA 21",
        "tops_name": "BIALA 21",
        "pdf": "BIALA 21_ML_Mudlog_Spud-3278_MD_Final.pdf",
        "xlsx": "Biala 21 Hz Section Samples Descriptions_Rev3-fernc.xlsx",
        "las": "Biala_21",
        "trajectory": "Biala_21_trajectory",
    },
    {
        "alias": "FROSTILLICUS2",
        "display": "FROSTILLICUS 2",
        "tops_name": "FROSTILLICUS 2",
        "pdf": "Frostillicus 2_Mudlog_Spud-3724m_TD_Field_Final.pdf",
        "xlsx": "Frostillicus 2 Hz Section Samples Descriptions.xlsx",
        "las": "Frosti_2",
        "trajectory": "Frosti_2_trajectory",
    },
    {
        "alias": "GRANCHIO4",
        "display": "GRANCHIO 4",
        "tops_name": "GRANCHIO 4",
        "pdf": "Granchio 4_Mudlog_Spud-2825m_TD_Field Final.pdf",
        "xlsx": "Granchio 4 Hz Section Samples Descriptions_Rev3.xlsx",
        "las": "Granchio_4",
        "trajectory": "Granchio_4_trajectory",
    },
    {
        "alias": "HOBBES5",
        "display": "HOBBES 5",
        "tops_name": "HOBBES 5",
        "pdf": "Hobbes 5_Mudlog_Spud-2590m_TD_Field Final.pdf",
        "xlsx": "Hobbes 5_Hz Section Samples Descriptions_Rev3.xlsx",
        "las": "Hobbes_5",
        "trajectory": "Hobbes_5_trajectory",
    },
    {
        "alias": "HOBBES6",
        "display": "HOBBES 6",
        "tops_name": "HOBBES 6",
        "pdf": "Hobbes 6_Mudlog_Spud-2500m_TD_Field Final.pdf",
        "xlsx": "Hobbes 6 Hz Section Samples Descriptions_Rev3.xlsx",
        "las": "Hobbes_6",
        "trajectory": "Hobbes_6_trajectory",
    },
    {
        "alias": "MCKINLAY20",
        "display": "MCKINLAY 20",
        "tops_name": "MCKINLAY 20",
        "pdf": "McKinlay 20_Mudlog_Spud-3000m_TD_Field Final.pdf",
        "xlsx": "McKinlay 20 Hz Section samples descriptions.xlsx",
        "las": "Mck_20",
        "trajectory": "Mck_20_trajectory",
    },
    {
        "alias": "MCKINLAY21",
        "display": "MCKINLAY 21",
        "tops_name": "MCKINLAY 21",
        "pdf": "McKinlay 21_Mudlog_Spud-2417m_TD.pdf",
        "xlsx": "McKinlay 21 Hz Section Samples Descriptions.xlsx",
        "las": "Mck_21",
        "trajectory": "Mck_21_trajectory",
    },
    {
        "alias": "MCKINLAY22",
        "display": "MCKINLAY 22",
        "tops_name": "MCKINLAY 22",
        "pdf": "Mckinlay 22_Mudlog_SPUD-3206.4m(TD).pdf",
        "xlsx": "McKinlay 22 Hz Section samples descriptions.xlsx",
        "las": "Mck_22",
        "trajectory": "Mck_22_trajectory",
    },
    {
        "alias": "MCKINLAY23",
        "display": "MCKINLAY 23",
        "tops_name": "MCKINLAY 23",
        "pdf": "McKinlay 23_Mudlog_Spud-2590m_TD_Field Final.pdf",
        "xlsx": "McKinlay 23 Hz Section Samples Descriptions.xlsx",
        "las": "Mck_23",
        "trajectory": "Mck_23_trajectory",
    },
    {
        "alias": "MCKINLAY24",
        "display": "MCKINLAY 24",
        "tops_name": "MCKINLAY 24",
        "pdf": "McKinlay 24_Mudlog_Spud-2598m_TD_Field Final.pdf",
        "xlsx": "McKinlay 24 Hz Section Samples Descriptions.xlsx",
        "las": "Mck_24",
        "trajectory": "Mck_24_trajectory",
    },
    {
        "alias": "STIMPEE6",
        "display": "STIMPEE 6",
        "tops_name": "STIMPEE 6",
        "pdf": "Stimpee 6_Mudlog_Spud-3186m_TD_Field_Final.pdf",
        "xlsx": "Stimpee 6_Hz Section Samples Descriptions_Rev3.xlsx",
        "las": "Stimpee_6",
        "trajectory": "Stimpee_6_trajectory",
    },
    {
        "alias": "STIMPEE7",
        "display": "STIMPEE 7",
        "tops_name": "STIMPEE 7",
        "pdf": "Stimpee 7_Mudlog_Spud-2840m_TD_Field Final.pdf",
        "xlsx": "Stimpee 7_Hz Section Samples Descriptions_Rev3.xlsx",
        "las": "Stimpee_7",
        "trajectory": "Stimpee_7_trajectory",
    },
    {
        "alias": "TERINGIE6",
        "display": "TERINGIE 6",
        "tops_name": "TERINGIE 6",
        "pdf": "TERINGIE 6_ML_Mudlog_Spud-3441.4_MD_Final.pdf",
        "xlsx": "Teringie 6 Hz Section Samples Descriptions_Rev3.xlsx",
        "las": "Teringie_6",
        "trajectory": "Terignie_6_trajectory",
    },
    {
        "alias": "MCKINLAY10",
        "display": "MCKINLAY 10",
        "tops_name": "MCKINLAY 10",
        "pdf": "McKinlay 10_Mudlog_Spud-6936'.pdf",
        "las": "Mck_10",
        "trajectory": "Mck_10_trajectory",
        "ingest": "litho_gas",
        "litho": "McKINLAY_10_LITHO_100-6935'.ASC",
        "gas": "McKINLAY_10_DRILL_GAS_6936'.ASC",
        "depth_unit": "ft",
        "bar_fluor": True,
        "bar_fluor_only": True,
    },
    {
        "alias": "MCKINLAY11",
        "display": "MCKINLAY 11",
        "tops_name": "MCKINLAY 11",
        "pdf": "McKinlay 11_Mudlog Spud-6800'_Final.pdf",
        "las": "Mck_11",
        "trajectory": "Mck_11_trajectory",
        "ingest": "litho_gas",
        "litho": "McKinlay 11_Litho ASCII_90-6786'.ASC",
        "gas": "McKinlay 11_Drill-Gas ASCII_Spud-6786'.ASC",
        "depth_unit": "ft",
        "bar_fluor": True,
        "bar_fluor_only": True,
    },
    {
        "alias": "MCKINLAY12",
        "display": "MCKINLAY 12",
        "tops_name": "MCKINLAY 12",
        "pdf": "McKinlay 12_Mudlog_Spud-9526ft(TD)_Prelim.pdf",
        "las": "Mck_12",
        "trajectory": "Mck_12_trajectory",
        "ingest": "litho_gas",
        "litho": "Mckinlay 12_Litho_Spud-9526ft(TD) Prelim.txt",
        "gas": "Mckinlay 12_Drill-Gas_Spud-9526ft(TD) Prelim.txt",
        "depth_unit": "ft",
        "fluor_text_max": True,
    },
    {
        "alias": "MCKINLAY13",
        "display": "MCKINLAY 13",
        "tops_name": "MCKINLAY 13",
        "pdf": "McKinlay 13_Mudlog_Spud-10593ft_Final Field.pdf",
        "las": "Mck_13",
        "trajectory": "Mck_13_trajectory",
        "ingest": "litho_gas",
        "litho": "McKinlay 13_Litho_Spud-10593ft.ASC",
        "gas": "McKinlay 13_Drill-Gas_Spud-10593ft.ASC",
        "depth_unit": "ft",
        "fluor_text_max": True,
    },
    {
        "alias": "MCKINLAY14",
        "display": "MCKINLAY 14",
        "tops_name": "MCKINLAY 14",
        "pdf": "McKinlay 14_Mudlog_Spud-8674ft_Final.pdf",
        "las": "Mck_14",
        "trajectory": "Mck_14_trajectory",
        "ingest": "litho_gas",
        "litho": "Mckinlay 14_Litho_Spud-8674ft (TD).txt",
        "gas": "Mckinlay 14_Drill-Gas_Spud-8674ft (TD).txt",
        "depth_unit": "ft",
        "fluor_text_max": True,
    },
    {
        "alias": "MCKINLAY15",
        "display": "MCKINLAY 15",
        "tops_name": "MCKINLAY 15",
        "pdf": "McKinlay 15_Mudlog_Spud-8495ft_Final Field.pdf",
        "las": "Mck_15",
        "trajectory": "Mck_15_trajectory",
        "ingest": "litho_gas",
        "litho": "McKinlay 15_Litho_Spud-8495ft.ASC",
        "gas": "McKinlay 15_Drill-Gas_Spud-8495ft.ASC",
        "depth_unit": "ft",
        "fluor_text_max": True,
    },
]

WELL_TOPS_ALIASES = {
    "Jena Dev C Oil Lateral 1_Ops": ["JENA 31 OPS", "Jena Dev C Oil Lateral 1_Ops", "JENA 31"],
    "Jena Dev C Oil Lateral 2_Ops": ["JENA 31DW1", "Jena Dev C Oil Lateral 2_Ops"],
}


def resolve_well_name(df, cfg):
    candidates = [
        cfg.get("tops_name"),
        cfg.get("display"),
        cfg.get("alias"),
    ]
    candidates.extend(WELL_TOPS_ALIASES.get(cfg.get("tops_name", ""), []))
    seen = set()
    for name in candidates:
        if not name or name in seen:
            continue
        seen.add(name)
        match = df[df["Well identifier (Well name)"] == name]
        if not match.empty:
            return name, match
    raise ValueError(f"No tops match for {cfg.get('display')} in dataframe")


def classify_tops(mck_list, murta_list, tolerance=PAIR_TOLERANCE):
    """Classify McKinlay/Murta tops into overburden entry pairs and lone McKinlay re-entries."""
    overburden = []
    paired_mck = set()
    paired_murta = set()
    for mu in sorted(murta_list):
        best_m = None
        best_delta = None
        for m in mck_list:
            if m in paired_mck:
                continue
            delta = abs(m - mu)
            if delta <= tolerance and (best_delta is None or delta < best_delta):
                best_m = m
                best_delta = delta
        if best_m is not None:
            overburden.append({"mckinlay": best_m, "murta": mu, "delta": best_delta})
            paired_mck.add(best_m)
            paired_murta.add(mu)

    target_reentry = sorted(m for m in mck_list if m not in paired_mck)
    overburden.sort(key=lambda x: x["mckinlay"])
    return overburden, target_reentry


def exclusion_zones(overburden, target_reentry, initial_entry_depth=None, default_offset=DEFAULT_REENTRY_OFFSET):
    """
    Build overburden exclusion intervals per Murta/McKinlay entry pair.

    Rules:
    - Each entry pair excludes from McKinlay entry depth to the next lone McKinlay
      re-entry below, or entry + default_offset when no re-entry is mapped.
    - A later entry pair that falls inside an existing exclusion interval is part of
      the same overburden excursion (not a separate zone).
    - Entry pairs separated by pay (outside any prior exclusion) each get their own zone.
    """
    if initial_entry_depth is None and target_reentry:
        initial_entry_depth = min(target_reentry)

    reentry_markers = sorted(
        d for d in target_reentry
        if initial_entry_depth is None or d > initial_entry_depth + 0.01
    )

    zones = []
    details = []

    for ob in sorted(overburden, key=lambda x: x["mckinlay"]):
        entry = ob["mckinlay"]

        nested = False
        for zt, zb, _ in zones:
            if zt <= entry < zb:
                nested = True
                break
        if nested:
            continue

        re_entry = None
        used_default = False
        for candidate in reentry_markers:
            if candidate > entry:
                re_entry = candidate
                break
        if re_entry is None:
            re_entry = entry + default_offset
            used_default = True

        zones.append((entry, re_entry, "overburden"))
        details.append(
            {
                "entry": entry,
                "murta": ob["murta"],
                "re_entry": re_entry,
                "length": re_entry - entry,
                "default_reentry": used_default,
            }
        )

    return zones, details


def interval_excluded(top, bot, zones):
    """Return True if sample interval overlaps any half-open overburden zone [entry, re_entry)."""
    for zt, zb, _ in zones:
        if top < zb and bot > zt:
            return True
    return False


def avg_log(df, top, bot):
    sub = df[(df["depth"] >= top) & (df["depth"] <= bot)]
    if sub.empty:
        return None
    result = {}
    for col in ["GR", "RES_DEEP", "RES_SHALLOW"]:
        vals = sub[col].replace(NULL, np.nan).dropna()
        result[f"avg_{col}"] = float(vals.mean()) if len(vals) else None
        result[f"n_{col}"] = int(len(vals))
    return result


def extract_mudlog_text(pdf_path):
    chunks = []
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            text = page.extract_text()
            if text:
                chunks.append(text)
    return "\n".join(chunks)


def parse_las_td(las_path):
    with open(las_path) as f:
        for line in f:
            if line.strip().startswith("STOP"):
                return float(line.split(".m")[1].split(":")[0].strip())
    return None


LAS_CURVE_ALIASES = {
    "GR": ("GR", "GR_GOLD"),
    "RES_DEEP": ("RES_DEEP", "RES_DEEP_GOLD", "RD"),
    "RES_SHALLOW": ("RES_SHALLOW", "RES_SHALLOW_GOLD", "RS"),
    "RES_MED": ("RES_MED", "RES_MEDIUM_GOLD"),
}


def _las_mnemonic(line):
    """Extract the curve mnemonic from a ~Curve section line."""
    token = line.strip().split()[0]
    return token.split(".")[0].upper()


def _map_las_columns(curve_names):
    """Map LAS curve mnemonics to canonical column names by name, not position."""
    upper = [name.upper() for name in curve_names]
    col_map = {}
    for canonical, aliases in LAS_CURVE_ALIASES.items():
        for alias in aliases:
            if alias in upper:
                col_map[upper.index(alias)] = canonical
                break
    return col_map


def parse_las(las_path):
    """Read LAS file using ~Curve mnemonics; map aliases to canonical curve names."""
    curve_names = []
    data = []
    section = None
    with open(las_path) as f:
        for line in f:
            stripped = line.strip()
            if stripped.startswith("~"):
                section = stripped[1:].split()[0].lower()
                continue
            if section == "curve" and stripped and not stripped.startswith("#"):
                curve_names.append(_las_mnemonic(line))
                continue
            if section == "ascii" and stripped:
                parts = line.split()
                if len(parts) < 2:
                    continue
                row = {"depth": float(parts[0])}
                col_map = _map_las_columns(curve_names)
                for idx, canonical in col_map.items():
                    if idx < len(parts):
                        row[canonical] = float(parts[idx])
                for canonical in LAS_CURVE_ALIASES:
                    row.setdefault(canonical, NULL)
                data.append(row)
    return pd.DataFrame(data)


def parse_porosity(text):
    """
    Parse porosity class from cuttings description text.

    Returns one of: none, poor, p-fr, fr, fr-gd, gd (or None if text empty).
    """
    if not isinstance(text, str) or not text.strip():
        return None
    t = text.lower()
    if re.search(r"\bno\s+por\b|\bno\s+porosity\b|\bnil\s+por\b", t):
        return "none"
    if re.search(r"\bfr[\s-]?gd\b|\bfr[\s-]?good\b", t):
        return "fr-gd"
    if re.search(r"\bp[\s-]?fr\b|\bfr[\s-]?pr\b|\bpoor[\s-]?fair\b", t):
        return "p-fr"
    if re.search(r"\bgd\b(?!\w)|\bgood\s+por\b|\bgood\s+porosity\b", t):
        return "gd"
    if re.search(r"\bfr\b(?!\w)|\bfair\s+por\b|\bfair\s+porosity\b|\bvis\s+por\b|\binf\s+por\b", t):
        return "fr"
    if re.search(r"\bpoor\s+por\b|\bpoor\s+porosity\b|\bpr\s+por\b", t):
        return "poor"
    if re.search(r"\bpor\b|\bporosity\b", t):
        return "fr"
    return "none"


def parse_sorting(text):
    """Parse sorting class from cuttings text; return 0–1 lookup score or None."""
    if not isinstance(text, str) or not text.strip():
        return None
    t = text.lower()
    gap = r"(?:\d+\s+)*"
    patterns = (
        (rf"v\s+pr\s+{gap}srt", "v pr"),
        (rf"v\s+wl\s+{gap}srt", "v wl"),
        (rf"mod\s+wl\s+{gap}srt", "mod wl"),
        (rf"mod\s+{gap}srt", "mod"),
        (rf"wl\s+{gap}srt", "wl"),
        (rf"pr\s+{gap}srt", "pr"),
    )
    from config import SORTING_SCORES

    for pattern, key in patterns:
        if re.search(pattern, t):
            return SORTING_SCORES[key]
    return None


def parse_angularity(text):
    """Parse angularity from cuttings text; return 0–1 lookup score or None."""
    if not isinstance(text, str) or not text.strip():
        return None
    t = text.lower()
    patterns = (
        (r"v\s+wl\s+rnd", "v wl rnd"),
        (r"sbrnd", "sbrnd"),
        (r"sbang", "sbang"),
        (r"\brnd\b", "rnd"),
        (r"\bang\b", "ang"),
    )
    from config import ANGULARITY_SCORES

    for pattern, key in patterns:
        if re.search(pattern, t):
            return ANGULARITY_SCORES[key]
    return None


def _hardness_token_score(token: str) -> float | None:
    from config import HARDNESS_SCORES

    token = re.sub(r"\s+", " ", token.strip().lower())
    return HARDNESS_SCORES.get(token)


def parse_hardness(text):
    """Parse hardness from cuttings text; return 0–1 reservoir-quality score or None."""
    if not isinstance(text, str) or not text.strip():
        return None
    t = text.lower()
    range_m = re.search(
        r"(lse|uncons|fri|mod\s+hd|v\s+hd|hd)\s*-\s*(lse|uncons|fri|mod\s+hd|v\s+hd|hd)",
        t,
    )
    if range_m:
        a = _hardness_token_score(range_m.group(1))
        b = _hardness_token_score(range_m.group(2))
        if a is not None and b is not None:
            return (a + b) / 2.0
    patterns = (
        (r"\blse\b", "lse"),
        (r"\buncons\b", "uncons"),
        (r"\bfri\b", "fri"),
        (r"\bmod\s+hd\b", "mod hd"),
        (r"\bv\s+hd\b", "v hd"),
        (r"\bhd\b", "hd"),
    )
    for pattern, key in patterns:
        if re.search(pattern, t):
            return _hardness_token_score(key)
    return None


def parse_cement(text):
    """Parse cal/sil/arg cement from cuttings text; return 0–1 RQ score or None."""
    if not isinstance(text, str) or not text.strip():
        return None
    from config import (
        CEMENT_AMOUNT_MULT,
        CEMENT_DEFAULT_AMOUNT_MULT,
        CEMENT_DEFAULT_STRENGTH_MULT,
        CEMENT_STRENGTH_MULT,
        CEMENT_TYPE_PENALTY,
    )

    t = text.lower()
    worst_penalty = None
    for match in re.finditer(
        r"(?:(tr|rr|mnr|com)\s+)?(?:(wk|strg)\s+)?(arg|sil|calc)\s+cmt",
        t,
    ):
        amount = match.group(1)
        strength = match.group(2)
        ctype = match.group(3)
        penalty = (
            CEMENT_TYPE_PENALTY[ctype]
            * CEMENT_AMOUNT_MULT.get(amount, CEMENT_DEFAULT_AMOUNT_MULT)
            * CEMENT_STRENGTH_MULT.get(strength, CEMENT_DEFAULT_STRENGTH_MULT)
        )
        worst_penalty = penalty if worst_penalty is None else max(worst_penalty, penalty)
    if worst_penalty is None:
        return None
    return 1.0 - min(worst_penalty, 1.0)


def parse_hardness_class(text):
    """Return human-readable hardness label for interpretation output."""
    score = parse_hardness(text)
    if score is None:
        return None
    if score >= 0.95:
        return "lse"
    if score >= 0.85:
        return "uncons"
    if score >= 0.65:
        return "fri"
    if score >= 0.45:
        return "fri-mod hd"
    if score >= 0.3:
        return "mod hd"
    if score >= 0.15:
        return "hd"
    return "v hd"


def parse_sorting_class(text):
    """Return sorting label for interpretation output."""
    if not isinstance(text, str) or not text.strip():
        return None
    t = text.lower()
    gap = r"(?:\d+\s+)*"
    labels = (
        (rf"v\s+pr\s+{gap}srt", "v pr"),
        (rf"v\s+wl\s+{gap}srt", "v wl"),
        (rf"mod\s+wl\s+{gap}srt", "mod wl"),
        (rf"mod\s+{gap}srt", "mod"),
        (rf"wl\s+{gap}srt", "wl"),
        (rf"pr\s+{gap}srt", "pr"),
    )
    for pattern, label in labels:
        if re.search(pattern, t):
            return label
    return None


def parse_angularity_class(text):
    """Return angularity label for interpretation output."""
    if not isinstance(text, str) or not text.strip():
        return None
    t = text.lower()
    labels = (
        (r"v\s+wl\s+rnd", "v wl rnd"),
        (r"sbrnd", "sbrnd"),
        (r"sbang", "sbang"),
        (r"\brnd\b", "rnd"),
        (r"\bang\b", "ang"),
    )
    for pattern, label in labels:
        if re.search(pattern, t):
            return label
    return None


def parse_cement_class(text):
    """Return dominant cement phrase for interpretation output."""
    if not isinstance(text, str) or not text.strip():
        return None
    t = text.lower()
    match = re.search(
        r"((?:tr|rr|mnr|com)\s+)?(?:(wk|strg)\s+)?(arg|sil|calc)\s+cmt",
        t,
    )
    if not match:
        return None
    return match.group(0).strip()


def _grain_token_ordinal(token):
    """Map a single grain-size token to ordinal 1..5 (vf..vc), or 0 if unknown."""
    if not isinstance(token, str) or not token.strip():
        return 0
    t = token.strip().lower()
    # Common cuttings abbreviations (Excel Max Grain column: F, M, C, VF, VC, …)
    _SINGLE = {
        "vf": 1,
        "f": 2,
        "fine": 2,
        "m": 3,
        "med": 3,
        "medium": 3,
        "c": 4,
        "crs": 4,
        "coarse": 4,
        "vc": 5,
    }
    if t in _SINGLE:
        return _SINGLE[t]
    if re.search(r"\bvc\b|very\s*coarse|v\s*crs", t):
        return 5
    if re.search(r"\bcrs\b|\bcoarse\b", t) and "very" not in t:
        return 4
    if re.search(r"\bmed\b|\bmedium\b", t):
        return 3
    if re.search(r"\bfine\b|\bf\b(?!\w)", t) and "very" not in t:
        return 2
    if re.search(r"\bvf\b|very\s*fine|v\s*f\b", t):
        return 1
    return 0


def grain_ordinal(grain, max_grain=None):
    """
    Convert grain-size text to ordinal 0..5.

    Parses both grain-size text and max-grain fields; returns the coarsest
    ordinal found (vf=1 … vc=5). Returns 0 when unknown.
    """
    candidates: list[int] = []
    for raw in (grain, max_grain):
        if raw is None or (isinstance(raw, float) and pd.isna(raw)):
            continue
        if not isinstance(raw, str) or not raw.strip():
            continue
        tokens = re.split(r"[,/()\-]|to", raw)
        for tok in tokens:
            o = _grain_token_ordinal(tok)
            if o > 0:
                candidates.append(o)
    return max(candidates) if candidates else 0


def _interval_descriptor_text(long_desc, mud_matches):
    """Combine long_desc (preferred) with matched mudlog lithology text for parsing."""
    parts = []
    if isinstance(long_desc, str) and long_desc.strip():
        parts.append(long_desc.strip())
    for entry in mud_matches or []:
        txt = entry.get("text")
        if isinstance(txt, str) and txt.strip():
            parts.append(txt.strip())
    return " ".join(parts)


def _find_col(columns, *names):
    for c in columns:
        cl = str(c).lower()
        for name in names:
            if name.lower() in cl:
                return c
    return None


def _find_depth_col(df):
    col = _find_col(df.columns, "depth", "mmd")
    if col is not None:
        return col
    for c in df.columns:
        vals = pd.to_numeric(df[c], errors="coerce").dropna()
        if len(vals) >= 5 and (vals.between(500, 5000).mean() > 0.8):
            return c
    return None


def _pct_from_series(series):
    vals = pd.to_numeric(series, errors="coerce")
    if vals.dropna().empty:
        return vals
    if vals.max() <= 1.0:
        return vals * 100
    return vals


def parse_mckinlay_description(desc):
    """Extract sample properties from McKinlay legacy column A description text."""
    if not isinstance(desc, str) or not desc.strip():
        return {}

    parsed = {"long_desc": desc.strip()}

    depth_m = re.search(r"Sample\s+@?\s*(\d+(?:\.\d+)?)\s*m", desc, re.I)
    if depth_m:
        parsed["depth"] = float(depth_m.group(1))

    ss_parts = re.findall(
        r"(\d+(?:\.\d+)?)%\s+((?:very fine|vf|fine|med|medium|crs|coarse|trace|tr|minor|occ|predominantly)[^.%]*?)\s+sandstone",
        desc,
        re.I,
    )
    if not ss_parts:
        ss_parts = re.findall(r"(\d+(?:\.\d+)?)%\s+(.+?)\s+sandstone", desc, re.I)
    if not ss_parts:
        simple_ss = re.search(r"(\d+(?:\.\d+)?)%\s+Sandstone", desc, re.I)
        if simple_ss:
            parsed["pct_ss_text"] = float(simple_ss.group(1))
    elif ss_parts:
        pct, grain = ss_parts[-1]
        parsed["pct_ss_text"] = float(pct)
        parsed["grain_size"] = grain.strip().strip("(),")

    tg_m = re.search(r"TG:\s*([\d.]+)\s*(?:U|Units)?", desc, re.I)
    if tg_m:
        parsed["gas_u"] = float(tg_m.group(1))

    if re.search(r"\bno fluor", desc, re.I):
        parsed["pct_fluor_text"] = 0.0
        parsed["brightness"] = "none"
    else:
        tg_fluor = re.search(r"TG:[^.]*?(\d+(?:\.\d+)?)%\s+(.+?)\s+fluor", desc, re.I)
        end_fluor = re.search(r"(\d+(?:\.\d+)?)%\s+(.+?)\s+fluor\.?\s*$", desc, re.I)
        fluor_m = tg_fluor or end_fluor
        if fluor_m:
            parsed["pct_fluor_text"] = float(fluor_m.group(1))
            parsed["brightness"] = fluor_m.group(2).strip().rstrip(".")
        else:
            trace_m = re.search(r"(?:TRACE|TR)\s+(.+?)\s+fluor", desc, re.I)
            if trace_m:
                parsed["brightness"] = trace_m.group(1).strip().rstrip(".")
            elif re.search(r"fluorescence", desc, re.I):
                flu_m = re.search(
                    r"(\d+(?:\.\d+)?)%\s+(.+?)\s+fluorescence|fluorescence[^.]*?((?:bright|dull|mod)[^.]+)",
                    desc,
                    re.I,
                )
                if flu_m:
                    parsed["brightness"] = (flu_m.group(2) or flu_m.group(3) or "").strip()

    sid_m = re.search(r"(trace|rare|common|minor|mnr)\s+siderite", desc, re.I)
    if sid_m:
        parsed["fec03_sltst"] = sid_m.group(1).lower()

    return parsed


def _to_float(val):
    if pd.isna(val):
        return np.nan
    if isinstance(val, (int, float)):
        return float(val)
    s = str(val).strip().lower()
    if s in {"", "nan", "none", "-"}:
        return np.nan
    if s in {"tr", "trace", "t"}:
        return np.nan
    try:
        return float(s)
    except ValueError:
        return np.nan


def _coalesce_numeric(col_val, text_val):
    val = _to_float(col_val)
    if not np.isnan(val):
        if val <= 1.0:
            return val * 100
        return val
    if text_val is not None:
        return float(text_val)
    return np.nan


def load_legacy_mckinlay_samples(xlsx_path):
    """Load McKinlay 20-24 Sheet1 with columns F=TG, G=%SS, H=%fluoro and parse column A."""
    raw = pd.read_excel(xlsx_path, sheet_name="Sheet1", header=3)
    raw.columns = [str(c).strip() if pd.notna(c) else f"col_{i}" for i, c in enumerate(raw.columns)]

    # Explicit McKinlay layout: E=%SH, F=TG, G=%SS, H=%fluoro (0-based indices 4-7)
    if len(raw.columns) >= 8:
        tg_col = raw.columns[5] if str(raw.columns[5]).upper() == "TG" else _find_col(raw.columns, "TG")
        ss_col = raw.columns[6] if "%SS" in str(raw.columns[6]).upper() else _find_col(raw.columns, "%SS")
        fluor_col = raw.columns[7] if "FLUOR" in str(raw.columns[7]).upper() else _find_col(raw.columns, "%fluoro", "%fluor")
    else:
        tg_col = _find_col(raw.columns, "TG")
        ss_col = _find_col(raw.columns, "%SS")
        fluor_col = _find_col(raw.columns, "%fluoro", "%fluor")

    depth_col = _find_col(raw.columns, "MD", "depth") or _find_depth_col(raw)
    desc_col = _find_col(raw.columns, "description")
    if depth_col is None:
        raise ValueError(f"Depth column not found in legacy sheet for {xlsx_path}")

    rows = []
    long_map = {}
    for _, row in raw.iterrows():
        desc = str(row.get(desc_col, "")) if desc_col else ""
        parsed = parse_mckinlay_description(desc)

        depth = pd.to_numeric(row.get(depth_col), errors="coerce")
        if pd.isna(depth) and "depth" in parsed:
            depth = parsed["depth"]
        if pd.isna(depth):
            continue

        depth = float(depth)
        if desc and "Sample" in desc:
            long_map[depth] = desc

        pct_ss = _coalesce_numeric(row.get(ss_col) if ss_col else np.nan, parsed.get("pct_ss_text"))
        pct_fluor = _coalesce_numeric(row.get(fluor_col) if fluor_col else np.nan, parsed.get("pct_fluor_text"))
        gas_u = _to_float(row.get(tg_col)) if tg_col else np.nan
        if pd.isna(gas_u) and "gas_u" in parsed:
            gas_u = parsed["gas_u"]

        rows.append(
            {
                "Depth_mMD": depth,
                "Pct_Sandstone": pct_ss,
                "Grain_Size": parsed.get("grain_size", np.nan),
                "Max_Grain_Size": np.nan,
                "Pct_Fluor": pct_fluor,
                "Brightness": parsed.get("brightness", np.nan),
                "Gas_U": gas_u,
                "FeCO3_SLTST": parsed.get("fec03_sltst", np.nan),
                "FeCO3_SST": np.nan,
            }
        )

    samples = pd.DataFrame(rows)
    return samples, long_map


def load_samples(xlsx_path):
    xl = pd.ExcelFile(xlsx_path)
    long_map = {}

    if "Input Sheet" in xl.sheet_names:
        raw = pd.read_excel(xlsx_path, sheet_name="Input Sheet", header=2)
        raw.columns = [str(c).strip() if pd.notna(c) else f"col_{i}" for i, c in enumerate(raw.columns)]
        depth_col = _find_col(raw.columns, "Depth")
        if depth_col is None:
            raise ValueError(f"Depth column not found in {xlsx_path}")
        samples = pd.DataFrame(
            {
                "Depth_mMD": pd.to_numeric(raw[depth_col], errors="coerce"),
                "Pct_Sandstone": raw[_find_col(raw.columns, "% Sandstone")]
                if _find_col(raw.columns, "% Sandstone")
                else np.nan,
                "Grain_Size": raw[_find_col(raw.columns, "Grain Size")]
                if _find_col(raw.columns, "Grain Size")
                else np.nan,
                "Max_Grain_Size": raw[_find_col(raw.columns, "Max Grain")]
                if _find_col(raw.columns, "Max Grain")
                else np.nan,
                "Pct_Fluor": raw[_find_col(raw.columns, "% Fluor")]
                if _find_col(raw.columns, "% Fluor")
                else np.nan,
                "Brightness": raw[_find_col(raw.columns, "Brightness")]
                if _find_col(raw.columns, "Brightness")
                else np.nan,
                "Gas_U": raw[_find_col(raw.columns, "Gas")]
                if _find_col(raw.columns, "Gas")
                else np.nan,
                "FeCO3_SLTST": raw[_find_col(raw.columns, "FeCO3 in SLTST")]
                if _find_col(raw.columns, "FeCO3 in SLTST")
                else np.nan,
                "FeCO3_SST": raw[_find_col(raw.columns, "FeCO3 in SST")]
                if _find_col(raw.columns, "FeCO3 in SST")
                else np.nan,
            }
        )
        if "Long Sample Name" in xl.sheet_names:
            long_desc = pd.read_excel(xlsx_path, sheet_name="Long Sample Name")
            for _, row in long_desc.iterrows():
                m = re.match(r"Sample (\d+(?:\.\d+)?)m:", str(row.get("Description", "")))
                if m:
                    long_map[float(m.group(1))] = str(row["Description"])
    else:
        samples, long_map = load_legacy_mckinlay_samples(xlsx_path)

    samples = samples.dropna(subset=["Depth_mMD"]).reset_index(drop=True)
    samples = _assign_interval_bounds(samples)
    return samples, long_map


def _assign_interval_bounds(samples: pd.DataFrame) -> pd.DataFrame:
    depths = samples["Depth_mMD"].values
    tops, bots = [], []
    for i in range(len(depths)):
        if i == 0:
            top = depths[0]
            bot = (depths[0] + depths[1]) / 2 if len(depths) > 1 else depths[0] + 2.5
        elif i == len(depths) - 1:
            top = (depths[i - 1] + depths[i]) / 2
            bot = depths[i] + 2.5
        else:
            top = (depths[i - 1] + depths[i]) / 2
            bot = (depths[i] + depths[i + 1]) / 2
        tops.append(top)
        bots.append(bot)
    samples["interval_top"] = tops
    samples["interval_bottom"] = bots
    return samples


def _text_fluor_pct(block: dict, use_max: bool) -> float:
    """Return fluorescence % from a text block (max or mid of range)."""
    if use_max:
        return float(block["pct_max"])
    return float(block["pct_mid"])


def enrich_samples_from_mudlog(
    cfg: dict,
    samples: pd.DataFrame,
    mck_start: float | None = None,
    mck_end: float | None = None,
) -> pd.DataFrame:
    """Attach fluorescence % from mudlog PDF (bar track and/or text blocks)."""
    if cfg.get("ingest") != "litho_gas":
        return samples
    pdf_path = os.path.join(WORKSPACE, cfg["pdf"])
    mudlog_text = extract_mudlog_text(pdf_path)
    depth_unit = cfg.get("depth_unit", "ft")
    bar_only = bool(cfg.get("bar_fluor_only"))
    text_max = bool(cfg.get("fluor_text_max"))

    bar_series: list = []
    if cfg.get("bar_fluor"):
        if bar_only:
            bar_series = build_bar_fluorescence_series_raw(
                pdf_path,
                depth_m_min=mck_start,
                depth_m_max=mck_end,
            )
        else:
            bar_series = build_bar_fluorescence_series(
                pdf_path,
                cap_below_ft=cfg.get("bar_fluor_cap_below_ft"),
                cap_below_pct=float(cfg.get("bar_fluor_cap_below_pct", 10)),
            )

    fluor_entries = parse_fluorescence_entries(mudlog_text, depth_unit=depth_unit)
    if text_max and fluor_entries:
        fluor_entries = bridge_block_gaps(fluor_entries)
    if not bar_series and not fluor_entries:
        return samples

    out = samples.copy()
    if "Brightness" in out.columns:
        out["Brightness"] = out["Brightness"].astype(object)

    text_brightness: dict[float, str] = {}
    for block in fluor_entries:
        mid_m = (block["top_m"] + block["bot_m"]) / 2.0
        if block.get("brightness"):
            text_brightness[mid_m] = block["brightness"]

    for idx, row in out.iterrows():
        top = float(row["interval_top"])
        bot = float(row["interval_bottom"])
        mid_m = (top + bot) / 2.0

        bar_match = match_bar_fluorescence(top, bot, bar_series) if bar_series else None
        text_match = match_fluorescence(top, bot, fluor_entries) if fluor_entries else None

        if bar_only:
            if bar_match is None:
                out.at[idx, "Pct_Fluor"] = np.nan
            else:
                out.at[idx, "Pct_Fluor"] = bar_match["pct_mid"]
        else:
            if pd.notna(row.get("Pct_Fluor")):
                pass
            else:
                candidates = []
                if bar_match is not None:
                    candidates.append(bar_match["pct_mid"])
                if text_match is not None:
                    candidates.append(_text_fluor_pct(text_match, text_max))
                if candidates:
                    out.at[idx, "Pct_Fluor"] = max(candidates)

        if pd.isna(row.get("Brightness")) or not row.get("Brightness"):
            if text_brightness:
                nearest = min(text_brightness, key=lambda k: abs(k - mid_m))
                if abs(nearest - mid_m) < 30:
                    out.at[idx, "Brightness"] = text_brightness[nearest]
            if (pd.isna(out.at[idx, "Brightness"]) or not out.at[idx, "Brightness"]) and text_match:
                if text_match.get("brightness"):
                    out.at[idx, "Brightness"] = text_match["brightness"]

    if text_max and fluor_entries:
        out = fill_fluorescence_gaps(out)

    return out


def load_well_samples(cfg: dict, mck_start: float, mck_end: float) -> tuple[pd.DataFrame, dict]:
    """Load sample intervals from Excel or litho/gas ASCII (McKinlay 10–15)."""
    if cfg.get("ingest") == "litho_gas":
        samples, long_map = build_sample_intervals(cfg, mck_start, mck_end)
        samples = enrich_samples_from_mudlog(cfg, samples, mck_start, mck_end)
        return samples, long_map
    xlsx_path = os.path.join(WORKSPACE, cfg["xlsx"])
    return load_samples(xlsx_path)


def fmt(val, digits=2):
    if val is None or (isinstance(val, float) and np.isnan(val)):
        return None
    return round(float(val), digits)


def process_well(cfg, dc30_df, mck_murta_df):
    _, dc30_row = resolve_well_name(dc30_df, cfg)
    dc30_top = float(dc30_row["MD"].values[0])

    tops_name, tops = resolve_well_name(mck_murta_df, cfg)
    tops = tops.sort_values("MD")
    mck_tops = sorted(tops[tops["Surface"] == "MCKINLAY MEMBER"]["MD"].tolist())
    murta_tops = sorted(tops[tops["Surface"] == "MURTA MEMBER"]["MD"].tolist())
    if not mck_tops:
        raise ValueError(f"No McKinlay tops for {tops_name}")

    overburden, target_reentry = classify_tops(mck_tops, murta_tops)
    mck_start = min(mck_tops)
    zones, zone_details = exclusion_zones(
        overburden, target_reentry, initial_entry_depth=mck_start
    )
    las_path = os.path.join(WORKSPACE, cfg["las"])
    las_td = parse_las_td(las_path)
    mck_end = float(cfg.get("td") or las_td or max(mck_tops) + 500)

    trajectory = None
    if cfg.get("trajectory"):
        trajectory = TrajectoryInterpolator.from_file(cfg["trajectory"])

    pdf_path = os.path.join(WORKSPACE, cfg["pdf"])

    mudlog_text = extract_mudlog_text(pdf_path)
    depth_unit = cfg.get("depth_unit", "m")
    mudlog_entries = parse_mudlog_entries(mudlog_text, depth_unit=depth_unit)
    bar_only = bool(cfg.get("bar_fluor_only"))
    text_max = bool(cfg.get("fluor_text_max"))
    fluor_entries = (
        parse_fluorescence_entries(mudlog_text, depth_unit=depth_unit)
        if depth_unit == "ft"
        else []
    )
    mudlog_mck = [
        e["depth"]
        for e in mudlog_entries
        if e["type"] == "formation_top" and "MCKINLAY" in e["name"].upper()
    ]

    samples, long_map = load_well_samples(cfg, mck_start, mck_end)
    las_df = parse_las(las_path)
    sample_max = float(samples["Depth_mMD"].max())
    mck_end = max(mck_end, sample_max)

    bar_series: list = []
    if cfg.get("bar_fluor"):
        if bar_only:
            bar_series = build_bar_fluorescence_series_raw(
                pdf_path,
                depth_m_min=mck_start,
                depth_m_max=mck_end,
            )
        else:
            bar_series = build_bar_fluorescence_series(
                pdf_path,
                cap_below_ft=cfg.get("bar_fluor_cap_below_ft"),
                cap_below_pct=float(cfg.get("bar_fluor_cap_below_pct", 10)),
            )

    results = []
    excluded_pre = excluded_ob = 0
    for _, row in samples.iterrows():
        depth = row["Depth_mMD"]
        top = row["interval_top"]
        bot = row["interval_bottom"]
        mid = (top + bot) / 2
        if mid < mck_start or mid > mck_end:
            excluded_pre += 1
            continue
        reason = None
        for zt, zb, ztype in zones:
            if top < zb and bot > zt:
                reason = ztype
                break
        if reason:
            excluded_ob += 1
            continue

        log_stats = avg_log(las_df, top, bot)
        mud_matches = find_mudlog(top, bot, mudlog_entries, window_m=MUDLOG_WINDOW)
        desc_text = _interval_descriptor_text(long_map.get(depth, ""), mud_matches)
        silt = 100 - row["Pct_Sandstone"] if pd.notna(row["Pct_Sandstone"]) else None
        mtvds = trajectory.interpolate_mtvds(depth) if trajectory else None

        fluor = row["Pct_Fluor"]
        bright = row["Brightness"]
        if bar_only:
            bar_match = match_bar_fluorescence(top, bot, bar_series) if bar_series else None
            text_match = match_fluorescence(top, bot, fluor_entries) if fluor_entries else None
            if bar_match is not None:
                fluor = bar_match["pct_mid"]
            else:
                fluor = np.nan
            if (pd.isna(bright) or not bright) and text_match and text_match.get("brightness"):
                bright = text_match["brightness"]
        elif pd.isna(fluor):
            bar_match = match_bar_fluorescence(top, bot, bar_series) if bar_series else None
            text_match = match_fluorescence(top, bot, fluor_entries) if fluor_entries else None
            candidates = []
            if bar_match is not None:
                candidates.append(bar_match["pct_mid"])
            if text_match is not None:
                candidates.append(_text_fluor_pct(text_match, text_max))
                if pd.isna(bright) or (isinstance(bright, float) and np.isnan(bright)):
                    bright = text_match.get("brightness")
            if candidates:
                fluor = max(candidates)
        if not bar_only and pd.isna(fluor):
            mud_parsed = parse_mckinlay_description(desc_text)
            if mud_parsed.get("pct_fluor_text") is not None:
                fluor = mud_parsed["pct_fluor_text"]
            if (pd.isna(bright) or not bright) and mud_parsed.get("brightness"):
                bright = mud_parsed["brightness"]

        results.append(
            {
                "depth": depth,
                "top": top,
                "bot": bot,
                "pct_ss": row["Pct_Sandstone"],
                "pct_slt": silt,
                "grain": row["Grain_Size"],
                "max_grain": row["Max_Grain_Size"],
                "fluor": fluor,
                "bright": bright,
                "gas": row["Gas_U"],
                "fec03_slt": row["FeCO3_SLTST"],
                "fec03_sst": row["FeCO3_SST"],
                "long_desc": long_map.get(depth, ""),
                "mudlog": mud_matches,
                "log": log_stats,
                "poro_class": parse_porosity(desc_text),
                "hardness_score": parse_hardness(desc_text),
                "hardness_class": parse_hardness_class(desc_text),
                "sorting_score": parse_sorting(desc_text),
                "sorting_class": parse_sorting_class(desc_text),
                "angularity_score": parse_angularity(desc_text),
                "angularity_class": parse_angularity_class(desc_text),
                "cement_score": parse_cement(desc_text),
                "cement_class": parse_cement_class(desc_text),
                "grain_ordinal": grain_ordinal(row["Grain_Size"], row["Max_Grain_Size"]),
                "mtvds": mtvds,
            }
        )

    meta = {
        "alias": cfg["display"],
        "tops_name": tops_name,
        "dc30_top": dc30_top,
        "mck_tops": mck_tops,
        "murta_tops": murta_tops,
        "overburden": overburden,
        "target_reentry": target_reentry,
        "zones": zones,
        "zone_details": zone_details,
        "mck_start": mck_start,
        "mck_end": mck_end,
        "mudlog_mck": mudlog_mck,
        "total_samples": len(samples),
        "excluded_pre": excluded_pre,
        "excluded_ob": excluded_ob,
        "results": results,
        "cfg": cfg,
    }
    return meta


def write_interpretation(meta, path):
    r = meta["results"]
    alias = meta["alias"]
    now = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    lines = [
        f"# {alias} — McKinlay Member Cuttings & Log Interpretation\n",
        f"**Generated:** {now}  ",
        f"**Well:** {alias} ({meta['tops_name']})  ",
        f"**TD:** {meta['mck_end']:.0f} m MD  \n",
        "---\n",
        "## 1. Data Sources & Methodology\n",
        "| Source | File | Role |",
        "|--------|------|------|",
        f"| Mudlog PDF | `{meta['cfg']['pdf']}` | Cuttings lithology descriptions |",
    ]
    if meta["cfg"].get("ingest") == "litho_gas":
        lines.append(
            f"| Litho / drill-gas ASCII | `{meta['cfg']['litho']}`, `{meta['cfg']['gas']}` | 5 m bins (ft→m MD) |"
        )
    else:
        lines.append(
            f"| Sample Descriptions | `{meta['cfg']['xlsx']}` ({_sample_sheet_label(meta['cfg']['xlsx'])}) | Depth intervals & sample properties |"
        )
    lines += [
        "| Formation Tops | `DC30.xlsx`, `Mck_Murta.xlsx` | Reservoir entry & overburden identification |",
        f"| Wireline Log (LAS) | `{meta['cfg']['las']}` | GR, RES_DEEP, RES_SHALLOW |",
    ]
    if meta["cfg"].get("trajectory"):
        lines.append(f"| Trajectory | `{meta['cfg']['trajectory']}` | mTVDss (Z subsea) |")
    lines += [
        "",
        "## 2. Formation Top Analysis\n",
        "### 2.1 Key Tops\n",
        "| Marker | Depth (m MD) | Source |",
        "|--------|-------------|--------|",
        f"| DC30 | {meta['dc30_top']:.2f} | DC30.xlsx |",
        f"| McKinlay Member (shallowest) | {meta['mck_start']:.2f} | Mck_Murta.xlsx |",
    ]
    if meta["mudlog_mck"]:
        lines.append(f"| McKinlay Member (mudlog) | {meta['mudlog_mck'][0]:.1f} | Mudlog PDF |")
    lines += [
        "",
        "### 2.2 McKinlay Member Top Classification\n",
        f"**Initial reservoir entry (DC30 + shallowest McKinlay):** {meta['mck_start']:.2f} m MD\n",
        "**Target re-entry (lone McKinlay below an overburden entry pair):**",
    ]
    reentry_markers = [
        zd["re_entry"]
        for zd in meta.get("zone_details", [])
        if not zd.get("default_reentry")
    ]
    if reentry_markers:
        for t in reentry_markers:
            lines.append(f"- {t:.2f} m MD")
    else:
        lines.append("- _none identified_")
    lines += [
        "",
        "**Overburden entry (Murta + corresponding McKinlay within 5 m):**",
        "| McKinlay entry (m MD) | Murta (m MD) | Δ (m) | Re-entry (m MD) | Zone length (m) |",
        "|-----------------------|-------------|-------|-----------------|-----------------|",
    ]
    if meta.get("zone_details"):
        for zd in meta["zone_details"]:
            re_txt = f"{zd['re_entry']:.2f}"
            if zd.get("default_reentry"):
                re_txt += f" (assumed +{DEFAULT_REENTRY_OFFSET:.0f} m)"
            lines.append(
                f"| {zd['entry']:.2f} | {zd['murta']:.2f} | {abs(zd['entry'] - zd['murta']):.2f} | "
                f"{re_txt} | {zd['length']:.1f} |"
            )
    elif meta["overburden"]:
        for ob in meta["overburden"]:
            lines.append(
                f"| {ob['mckinlay']:.2f} | {ob['murta']:.2f} | {ob['delta']:.2f} | — | — |"
            )
    else:
        lines.append("| _none identified_ | — | — | — | — |")

    zone_str = ", ".join(
        [f"{zt:.0f}–{zb:.0f} m ({zt_})" for zt, zb, zt_ in meta["zones"]]
    )
    lines += [
        f"\n**McKinlay Member analysis window:** {meta['mck_start']:.1f} – {meta['mck_end']:.1f} m MD",
        f"\n**Excluded overburden intervals (entry → re-entry, pay resumes at re-entry):** {zone_str or 'none'}",
        f"\n**Samples in McKinlay Member:** {len(r)} of {meta['total_samples']} total",
        f"- Excluded pre-reservoir: {meta['excluded_pre']}",
        f"- Excluded overburden intervals: {meta['excluded_ob']}",
        "",
        "## 3. Known Shortcomings\n",
        "> **Read this section before using the output.**\n",
        "1. **Mudlog PDF text extraction is imperfect.** Depth-to-description assignment uses ±15 m proximity heuristics.",
        "2. **Formation top discrepancies** between Mck_Murta.xlsx and mudlog PDF picks are noted where present.",
        f"3. **Well name mapping:** {alias} → `{meta['tops_name']}` (verified by TD and LAS WELL header).",
        "4. **Sample intervals** are midpoints between consecutive sample depths — variable widths where spacing is irregular.",
        "5. **Water-risk flags** use RQI, fluorescence, resistivity, GR, ZOI, and OWC proximity (see export).",
        "6. **NULL LAS values** (-999.25) excluded from averages.",
        f"7. **Exclusion zones** span from each Murta/McKinlay overburden entry to the next lone McKinlay "
        f"re-entry below (or entry + {DEFAULT_REENTRY_OFFSET:.0f} m MD if none mapped). Later entry pairs "
        f"inside an existing exclusion interval are treated as the same overburden excursion. Initial "
        f"DC30/McKinlay reservoir entry is not excluded.",
    ]
    if meta["cfg"].get("ingest") == "litho_gas":
        if meta["cfg"].get("bar_fluor_only"):
            lines += [
                "8. **Litho/gas ASCII ingestion:** 5 m bins from ft→m MD; %SS from lithology codes. "
                "**Fluorescence %** from mudlog PDF graphics bar track only (raw fill, full McKinlay MD window). "
                "Text block % values are not used; brightness descriptions from text where matched.",
                "9. **Grain size** not parsed from litho ASCII — derived from mudlog lithology text where matched.",
                "",
            ]
        elif meta["cfg"].get("fluor_text_max"):
            lines += [
                "8. **Litho/gas ASCII ingestion:** 5 m bins from ft→m MD; %SS from lithology codes. "
                "**Fluorescence %** from mudlog PDF text blocks (`FLUOR:` / `FLUORESCENCE:` ranges, ft→m); "
                "upper bound of each range used (e.g. 60–90% → 90%), not the midpoint. "
                "Gaps ≤55 m between consecutive `FLUOR:` blocks are bridged; intervals outside all blocks/zones are set to 0%.",
                "9. **Grain size** not parsed from litho ASCII — derived from mudlog lithology text where matched.",
                "",
            ]
        else:
            lines += [
                "8. **Litho/gas ASCII ingestion:** 5 m bins from ft→m MD; %SS from lithology codes; "
                "**no fluorescence %** in litho ASCII — fluorescence from mudlog PDF text track (FLUOR / FLUORESCENCE, ft→m); cuttings pay where matched.",
                "9. **Grain size** not parsed from litho ASCII — derived from mudlog lithology text where matched.",
                "",
            ]
    elif meta["cfg"].get("xlsx"):
        lines += [
            "8. **Input Sheet only** — Calculations Sheet not used.",
        ]
        if "McKinlay" in meta["cfg"]["xlsx"]:
            lines.append(
                "9. **McKinlay legacy spreadsheet:** Sheet1 columns F (TG), G (%SS), H (%fluoro) used directly; "
                "column A description text parsed for grain size, fluorescence brightness, and siderite."
            )
            lines.append("")
    if meta["mudlog_mck"] and abs(meta["mudlog_mck"][0] - meta["mck_start"]) > 10:
        n = len([ln for ln in lines if ln and ln[0].isdigit()]) + 1
        lines.append(
            f"{n}. **McKinlay pick discrepancy:** tops file {meta['mck_start']:.2f} m vs mudlog {meta['mudlog_mck'][0]:.1f} m "
            f"(Δ ≈ {abs(meta['mudlog_mck'][0] - meta['mck_start']):.0f} m)."
        )
        lines.append("")

    lines += [
        "## 4. McKinlay Member Sample Intervals\n",
        "Each section: depth interval, spreadsheet sample, mudlog cuttings, wireline log averages.\n",
    ]

    for item in r:
        lines.append(f"### {item['depth']:.0f} m MD — Interval {item['top']:.1f} – {item['bot']:.1f} m\n")
        if item["long_desc"]:
            lines.append(f"**Sample Description (spreadsheet):** {item['long_desc']}\n")
        else:
            parts = []
            if item["pct_slt"] is not None and item["pct_ss"] is not None:
                parts.append(f"{item['pct_slt']:.0f}% Siltstone, {item['pct_ss']:.0f}% {item['grain']} Sandstone")
            if pd.notna(item["fluor"]):
                parts.append(f"{item['fluor']:.0f}% {item['bright']} FLUOR")
            if pd.notna(item["gas"]):
                parts.append(f"TG {item['gas']}U")
            lines.append(f"**Sample Description (spreadsheet):** {', '.join(parts)}\n")

        lines += ["| Property | Value |", "|----------|-------|"]
        if pd.notna(item["pct_ss"]):
            lines.append(f"| % Sandstone | {item['pct_ss']} |")
        lines.append(f"| Grain Size | {item['grain']} (max: {item['max_grain']}) |")
        go = item.get("grain_ordinal")
        if go is None or (isinstance(go, float) and pd.isna(go)):
            go_disp = "—"
        else:
            go_disp = int(go)
        lines.append(f"| Grain Ordinal | {go_disp} |")
        poro = item.get("poro_class")
        lines.append(f"| Porosity Class | {poro if poro else '—'} |")
        if item.get("hardness_class"):
            hs = item.get("hardness_score")
            hs_txt = f" ({hs:.2f})" if hs is not None else ""
            lines.append(f"| Hardness | {item['hardness_class']}{hs_txt} |")
        if item.get("sorting_class"):
            ss = item.get("sorting_score")
            ss_txt = f" ({ss:.2f})" if ss is not None else ""
            lines.append(f"| Sorting | {item['sorting_class']}{ss_txt} |")
        if item.get("angularity_class"):
            ang = item.get("angularity_score")
            ang_txt = f" ({ang:.2f})" if ang is not None else ""
            lines.append(f"| Angularity | {item['angularity_class']}{ang_txt} |")
        if item.get("cement_class"):
            cs = item.get("cement_score")
            cs_txt = f" ({cs:.2f})" if cs is not None else ""
            lines.append(f"| Cement | {item['cement_class']}{cs_txt} |")
        if pd.notna(item["fluor"]):
            lines.append(f"| Fluorescence | {item['fluor']}% {item['bright']} |")
        if pd.notna(item["gas"]):
            lines.append(f"| Total Gas | {item['gas']} U |")
        if item.get("mtvds") is not None:
            lines.append(f"| mTVDss | {item['mtvds']:.2f} m |")
        if pd.notna(item["fec03_slt"]):
            lines.append(f"| FeCO₃ in Siltstone | {item['fec03_slt']} |")
        if pd.notna(item["fec03_sst"]):
            lines.append(f"| FeCO₃ in Sandstone | {item['fec03_sst']} |")
        lines.append("")

        if item["mudlog"]:
            lines.append("**Mudlog Cuttings Description (PDF):**")
            for m in item["mudlog"][:2]:
                d_str = f" @ ~{m['depth_est']:.0f}m" if m.get("depth_est") else ""
                lines.append(f"- **{m['lith_type']}**{d_str}: {m['text']}")
            if len(item["mudlog"]) > 2:
                lines.append(f"- _({len(item['mudlog']) - 2} additional mudlog entries in interval)_")
            lines.append("")
        else:
            lines.append("**Mudlog Cuttings Description (PDF):** _No matching entry found_\n")

        lg = item["log"]
        if lg:
            lines.append("**Wireline Log Averages (LAS):**")
            lines.append("| Curve | Average | Data Points |")
            lines.append("|-------|---------|-------------|")
            if lg.get("avg_GR") is not None:
                lines.append(f"| GR (gAPI) | {lg['avg_GR']:.1f} | {lg['n_GR']} |")
            if lg.get("avg_RES_DEEP") is not None:
                lines.append(f"| RES_DEEP (ohm.m) | {lg['avg_RES_DEEP']:.2f} | {lg['n_RES_DEEP']} |")
            if lg.get("avg_RES_SHALLOW") is not None:
                lines.append(f"| RES_SHALLOW (ohm.m) | {lg['avg_RES_SHALLOW']:.2f} | {lg['n_RES_SHALLOW']} |")
            lines.append("")
        else:
            lines.append("**Wireline Log Averages:** _No log data in interval_\n")
        lines.append("---\n")

    ss_vals = [x["pct_ss"] for x in r if pd.notna(x["pct_ss"])]
    lines += ["## 5. Summary Statistics (McKinlay Member)\n", "| Metric | Value |", "|--------|-------|"]
    lines.append(f"| Intervals analysed | {len(r)} |")
    if r:
        lines.append(f"| Depth range | {min(x['depth'] for x in r):.0f} – {max(x['depth'] for x in r):.0f} m |")
    if ss_vals:
        lines.append(f"| Avg % Sandstone | {np.mean(ss_vals):.1f}% |")
    lines.append(f"| Mudlog matches | {sum(1 for x in r if x['mudlog'])} / {len(r)} |")
    lines.append("")

    with open(path, "w") as f:
        f.write("\n".join(lines))


def write_summary(meta, path):
    r = meta["results"]
    ss_vals = [x["pct_ss"] for x in r if pd.notna(x["pct_ss"])]
    alias = meta["alias"]
    lines = [
        f"# {alias} Analysis — Process Summary\n",
        f"**Date:** {datetime.now(timezone.utc).strftime('%Y-%m-%d')}\n",
        "## Objective\n",
        f"Integrate mudlog, sample descriptions, formation tops, and LAS data for **McKinlay Member** on {alias}.\n",
        "## Data Files Used\n",
        f"| File | Purpose |",
        f"|------|---------|",
        f"| `{meta['cfg']['pdf']}` | Mudlog cuttings |",
    ]
    if meta["cfg"].get("ingest") == "litho_gas":
        lines.append(
            f"| `{meta['cfg']['litho']}`, `{meta['cfg']['gas']}` | Litho + drill-gas ASCII (5 m bins) |"
        )
    else:
        lines.append(
            f"| `{meta['cfg']['xlsx']}` → {_sample_sheet_label(meta['cfg']['xlsx'])} | Sample intervals |"
        )
    lines += [
        f"| `DC30.xlsx`, `Mck_Murta.xlsx` | Formation tops |",
        f"| `{meta['cfg']['las']}` | GR / resistivity |",
    ]
    if meta["cfg"].get("trajectory"):
        lines.append(f"| `{meta['cfg']['trajectory']}` | Trajectory → mTVDss |")
    lines += [
        "",
        "## Formation Top Results\n",
        f"- DC30: **{meta['dc30_top']:.2f} m** | McKinlay start: **{meta['mck_start']:.2f} m** | TD: **{meta['mck_end']:.0f} m**",
        f"- Overburden entry pairs: **{len(meta['overburden'])}**",
        f"- Overburden exclusion intervals: **{len(meta['zones'])}**",
        f"- Excluded samples: pre-reservoir {meta['excluded_pre']}, overburden {meta['excluded_ob']}",
        f"- **{len(r)}** McKinlay intervals retained\n",
        "## Key Findings\n",
    ]
    if r:
        lines.append(
            f"- Depth range: **{min(x['depth'] for x in r):.0f} – {max(x['depth'] for x in r):.0f} m MD**"
        )
    if ss_vals:
        lines.append(f"- Average sandstone: **{np.mean(ss_vals):.1f}%**")
    lines.append(
        f"- Mudlog matched: **{sum(1 for x in r if x['mudlog'])} / {len(r)}** intervals\n"
    )
    lines.append("## Limitations\n")
    lines.append("See interpretation file Section 3 for full list.\n")
    with open(path, "w") as f:
        f.write("\n".join(lines))


def _sample_sheet_label(xlsx_name):
    if "McKinlay" in xlsx_name or "Frostillicus" in xlsx_name:
        return "Sheet1 (cols F=TG, G=%SS, H=%fluoro + col A descriptions)"
    return "Input Sheet"


def _parse_only_filter(argv: list[str]) -> list[str] | None:
    if not argv:
        return None
    if "--only" in argv:
        idx = argv.index("--only")
        if idx + 1 >= len(argv):
            raise SystemExit("--only requires a well alias (e.g. MCKINLAY10)")
        return [argv[idx + 1].upper().replace(" ", "")]
    return [a.upper().replace(" ", "") for a in argv if not a.startswith("-")]


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    dc30_df = pd.read_excel(os.path.join(WORKSPACE, "DC30.xlsx"))
    mck_murta_df = pd.read_excel(os.path.join(WORKSPACE, "Mck_Murta.xlsx"))

    only = _parse_only_filter(sys.argv[1:])
    wells = WELLS
    if only:
        wells = [w for w in WELLS if w["alias"] in only or w["display"].upper().replace(" ", "") in only]
        if not wells:
            raise SystemExit(f"No wells matched filter: {only}")

    summaries = []
    for cfg in wells:
        print(f"Processing {cfg['display']}...")
        meta = process_well(cfg, dc30_df, mck_murta_df)
        alias = cfg["alias"]
        write_interpretation(
            meta, os.path.join(OUTPUT_DIR, f"{alias}_McKinlay_Cuttings_Interpretation.md")
        )
        write_summary(meta, os.path.join(OUTPUT_DIR, f"{alias}_Process_Summary.md"))
        summaries.append(meta)
        mtvds_count = sum(1 for x in meta["results"] if x.get("mtvds") is not None)
        print(
            f"  -> {len(meta['results'])} intervals, "
            f"mudlog {sum(1 for x in meta['results'] if x['mudlog'])}/{len(meta['results'])}, "
            f"mTVDss {mtvds_count}/{len(meta['results'])}"
        )

    return summaries


if __name__ == "__main__":
    main()
    sys.exit(0)
