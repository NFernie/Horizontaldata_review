"""Oil–water contact field lookup and proximity tiering."""

from __future__ import annotations

import csv
import os

import config

WORKSPACE = (
    os.environ.get("WORKSPACE")
    or os.environ.get("GITHUB_WORKSPACE")
    or os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
)

# Well alias → OWC field name (must match normalised keys in OWC_BY_FIELD)
WELL_FIELD_MAP = {
    "JENA31": "Jena",
    "JENA31DW1": "Jena",
    "BIALA19": "Biala",
    "BIALA20": "Biala",
    "BIALA21": "Biala",
    "FROSTILLICUS2": "Frostillicus",
    "GRANCHIO4": "Granchio",
    "HOBBES5": "Hobbes",
    "HOBBES6": "Hobbes",
    "MCKINLAY10": "McKinlay",
    "MCKINLAY11": "McKinlay",
    "MCKINLAY12": "McKinlay",
    "MCKINLAY13": "McKinlay",
    "MCKINLAY14": "McKinlay",
    "MCKINLAY15": "McKinlay",
    "MCKINLAY20": "McKinlay",
    "MCKINLAY21": "McKinlay",
    "MCKINLAY22": "McKinlay",
    "MCKINLAY23": "McKinlay",
    "MCKINLAY24": "McKinlay",
    "STIMPEE6": "Stimpee",
    "STIMPEE7": "Stimpee",
    "TERINGIE6": "Teringie",
}


def load_owc_by_field(csv_path: str | None = None) -> dict[str, float]:
    """Load field → OWC mTVDss from Oil_Water_Contact.csv (normalise trailing spaces)."""
    path = csv_path or os.path.join(WORKSPACE, "Oil_Water_Contact.csv")
    out: dict[str, float] = {}
    with open(path, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            field_key = next(iter(row.keys())).strip() if row else "Field"
            field = (row.get(field_key) or row.get("Field") or row.get("Field ")).strip()
            owc_raw = row.get("Oil Water Contact") or row.get("Oil Water Contact ")
            if field and owc_raw:
                out[field] = float(owc_raw)
    return out


OWC_BY_FIELD = load_owc_by_field()


def field_for_alias(alias: str) -> str | None:
    return WELL_FIELD_MAP.get(alias)


def owc_for_alias(alias: str) -> float | None:
    field = field_for_alias(alias)
    if not field:
        return None
    return OWC_BY_FIELD.get(field)


def owc_distance_m(mtvds: float | None, owc_mtvds: float | None) -> float | None:
    if mtvds is None or owc_mtvds is None:
        return None
    return abs(float(mtvds) - float(owc_mtvds))


def owc_proximity_tier(distance_m: float | None, rqi: float | None, is_zoi: bool = False) -> str | None:
    """
    Return High / Elevated / Low tier per updated-plan §5.2.

    Good-rock bands (RQI >= threshold or ZOI). Poor rock (RQI < threshold, not ZOI)
    never receives OWC proximity flags — always Low.
    """
    if distance_m is None:
        return None
    good = (rqi is not None and rqi >= config.RQI_THRESHOLD) or is_zoi
    if not good:
        return "Low"
    bands = config.OWC_BANDS_GOOD
    d = float(distance_m)
    if d < bands["high_lt"]:
        return "High"
    if d < bands["elevated_lt"]:
        return "Elevated"
    return "Low"


def owc_severity(tier: str | None) -> float:
    if tier == "High":
        return config.OWC_SEVERITY_HIGH
    if tier == "Elevated":
        return config.OWC_SEVERITY_ELEVATED
    return config.OWC_SEVERITY_LOW


def apply_owc_res_suppress(tier: str | None, res_deep: float | None) -> str | None:
    """Clear OWC tier when deep resistivity indicates good electrical rock."""
    if tier is None or res_deep is None:
        return tier
    try:
        res = float(res_deep)
    except (TypeError, ValueError):
        return tier
    if res > config.OWC_RES_SUPPRESS:
        return "Low"
    return tier
