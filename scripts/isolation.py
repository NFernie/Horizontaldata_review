"""Load mechanical isolation depth intervals from Isolation_Depths.xlsx."""

from __future__ import annotations

import os
import re

import pandas as pd

from process_mckinlay_wells import WELLS

WORKSPACE = (
    os.environ.get("WORKSPACE")
    or os.environ.get("GITHUB_WORKSPACE")
    or os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
)

ISOLATION_FILE = "Isolation_Depths.xlsx"


def _norm_well_key(name: str) -> str:
    return re.sub(r"[^a-z0-9]", "", name.lower())


# display / alias → normalised lookup key
_DISPLAY_TO_ALIAS = {_norm_well_key(w["display"]): w["alias"] for w in WELLS}
_DISPLAY_TO_ALIAS.update({_norm_well_key(w["alias"]): w["alias"] for w in WELLS})


def alias_for_isolation_well(well_name: str) -> str | None:
    return _DISPLAY_TO_ALIAS.get(_norm_well_key(well_name))


def load_isolation_by_alias(xlsx_path: str | None = None) -> dict[str, list[dict[str, float]]]:
    """Return alias → list of {top_md, bot_md} isolation intervals."""
    path = xlsx_path or os.path.join(WORKSPACE, ISOLATION_FILE)
    if not os.path.isfile(path):
        return {}

    df = pd.read_excel(path)
    out: dict[str, list[dict[str, float]]] = {}
    for _, row in df.iterrows():
        alias = alias_for_isolation_well(str(row.get("Well", "")).strip())
        if not alias:
            continue
        top = float(row["Top Depth (mMD)"])
        bot = float(row["Bottom Depth (mMD)"])
        if bot < top:
            top, bot = bot, top
        out.setdefault(alias, []).append({"top_md": top, "bot_md": bot})
    return out


def interval_overlaps_isolation(top: float, bot: float, ranges: list[dict[str, float]]) -> bool:
    """True when sample interval [top, bot] overlaps any isolation MD range."""
    for iso in ranges:
        if not (bot < iso["top_md"] or top > iso["bot_md"]):
            return True
    return False


def attach_isolation(rows, alias: str, isolation_by_alias: dict[str, list[dict[str, float]]]) -> list:
    ranges = isolation_by_alias.get(alias, [])
    for row in rows:
        row["isolated"] = interval_overlaps_isolation(float(row["top"]), float(row["bot"]), ranges)
    return rows
