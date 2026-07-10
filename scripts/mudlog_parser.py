"""Parse mudlog PDF text with correct depth units (feet vs metres)."""

from __future__ import annotations

import re

FT_TO_M = 0.3048
M_TO_FT = 1.0 / FT_TO_M  # ≈ 3.28084

LITH_TYPES = re.compile(
    r"(SANDSTONE|SILTSTONE|LIMESTONE(?:\([^)]*\))?|SHALE|DOLOMITE|COAL|ANHYDRITE|MUDSTONE|CLAYSTONE)"
)

_DEPTH_TICK = re.compile(r"^(\d{3,5})$")
_LEAD_DEPTH = re.compile(r"^(\d{4,5})\s")
_FORMATION_TOP_FT = re.compile(
    r"(MCKINLAY MEMBER|MURTA[^:]*?|DC\d+)[^:]*?(\d+\.?\d*)'MDRT",
    re.I,
)
_FORMATION_TOP_M = re.compile(
    r"(MCKINLAY MEMBER|MURTA[^:]*|DC30):\s*(\d+\.?\d*)mMDRT",
    re.I,
)
_FLUOR_RANGE = re.compile(
    r"FLUOR:(\d+)'?-(\d+)'?[:;](\d+)-(\d+)%",
    re.I,
)
_FLUORESCENCE_RANGE = re.compile(
    r"FLUORESCENCE:\s*(\d+)-(\d+)'?:",
    re.I,
)


def _to_m(depth: float, unit: str) -> float:
    if unit.lower() in {"ft", "feet"}:
        return depth * FT_TO_M
    return depth


def _parse_fluor_pct(text: str) -> tuple[float | None, float | None, float | None]:
    """Return (pct_min, pct_max, pct_mid) from fluorescence description text."""
    if re.search(r"\bno fluor", text, re.I):
        return 0.0, 0.0, 0.0
    range_m = re.search(r"(\d+)-(\d+)%", text)
    if range_m:
        lo, hi = float(range_m.group(1)), float(range_m.group(2))
        return lo, hi, (lo + hi) / 2.0
    single_m = re.search(r"(\d+(?:\.\d+)?)%", text)
    if single_m:
        v = float(single_m.group(1))
        return v, v, v
    return None, None, None


def _parse_fluor_brightness(text: str) -> str | None:
    range_m = re.search(r"\d+-\d+%[,;:]\s*([^.\n]+)", text)
    if range_m:
        b = re.sub(r"^[:;\s]+", "", range_m.group(1).strip())
        if len(b) > 3 and re.search(r"[a-zA-Z]{2}", b):
            return b[:120]
    single_m = re.search(r"(\d+(?:\.\d+)?)%\s*([^.\n:;]+)", text)
    if single_m:
        b = single_m.group(2).strip()
        if len(b) > 3 and re.search(r"[a-zA-Z]{2}", b):
            return b[:120]
    for phrase in (
        r"mod bri[^.,\n]+",
        r"dll[^.,\n]+",
        r"slw[^.,\n]+cut[^.,\n]*",
        r"ptchy[^.,\n]+",
    ):
        m = re.search(phrase, text, re.I)
        if m:
            return m.group(0).strip()[:120]
    return None


def _update_depth_ft(stripped: str, current: float | None) -> float | None:
    tick = _DEPTH_TICK.match(stripped)
    if tick:
        return float(tick.group(1))
    lead = _LEAD_DEPTH.match(stripped)
    if lead:
        val = float(lead.group(1))
        if 100 <= val <= 25000:
            return val
    paren = re.search(r"\((\d{4,5})\)", stripped)
    if paren:
        return float(paren.group(1))
    survey = re.search(r"SURVEY\s*@\s*(\d+(?:\.\d+)?)'", stripped, re.I)
    if survey:
        return float(survey.group(1))
    return current


def parse_mudlog_entries(text: str, depth_unit: str = "m") -> list[dict]:
    """Parse formation tops and lithology entries; depths stored as depth_est in metres."""
    entries: list[dict] = []
    lines = text.split("\n")
    current_depth_raw: float | None = None
    is_ft = depth_unit.lower() in {"ft", "feet"}

    for i, line in enumerate(lines):
        stripped = line.strip()
        if not stripped:
            continue

        if is_ft:
            top_m = _FORMATION_TOP_FT.search(line)
            if top_m:
                depth_m = _to_m(float(top_m.group(2)), "ft")
                entries.append(
                    {
                        "type": "formation_top",
                        "name": top_m.group(1),
                        "depth": depth_m,
                        "text": line.strip(),
                    }
                )
        else:
            top_m = _FORMATION_TOP_M.search(line)
            if top_m:
                entries.append(
                    {
                        "type": "formation_top",
                        "name": top_m.group(1),
                        "depth": float(top_m.group(2)),
                        "text": line.strip(),
                    }
                )

        md_match = re.search(r"MD:(\d+\.?\d*)\s*m", line)
        if md_match:
            current_depth_raw = float(md_match.group(1))
            if is_ft:
                current_depth_raw = current_depth_raw * M_TO_FT

        if is_ft:
            current_depth_raw = _update_depth_ft(stripped, current_depth_raw)
        elif _DEPTH_TICK.match(stripped):
            current_depth_raw = float(stripped)

        lith_match = LITH_TYPES.search(line)
        if lith_match and ":" in line:
            lith_type = lith_match.group(1)
            desc = line.split(":", 1)[1].strip()
            depth_est = current_depth_raw
            if depth_est is None:
                for j in range(max(0, i - 4), i):
                    depth_est = _update_depth_ft(lines[j].strip(), depth_est)
            if depth_est is not None:
                depth_est = _to_m(depth_est, depth_unit)

            full_desc = desc
            for j in range(i + 1, min(i + 5, len(lines))):
                nl = lines[j].strip()
                if (
                    LITH_TYPES.search(nl)
                    or re.match(r"MD:", nl)
                    or _DEPTH_TICK.match(nl)
                    or _FLUORESCENCE_RANGE.search(nl)
                    or _FLUOR_RANGE.search(nl)
                ):
                    break
                if nl and not re.match(
                    r"^(WOB|RPM|SPP|FLOW|FLUORESCENCE|FLUOR:|MD:|VD |azi )",
                    nl,
                    re.I,
                ):
                    full_desc += " " + nl

            entries.append(
                {
                    "type": "lithology",
                    "lith_type": lith_type,
                    "depth_est": depth_est,
                    "text": full_desc[:600],
                }
            )

    return entries


def parse_fluorescence_entries(text: str, depth_unit: str = "ft") -> list[dict]:
    """Parse FLUOR / FLUORESCENCE depth-range blocks from mudlog text track."""
    entries: list[dict] = []
    lines = text.split("\n")

    for i, line in enumerate(lines):
        fluor_m = _FLUOR_RANGE.search(line)
        if fluor_m:
            top_raw = float(fluor_m.group(1))
            bot_raw = float(fluor_m.group(2))
            pct_lo = float(fluor_m.group(3))
            pct_hi = float(fluor_m.group(4))
            tail = line[fluor_m.end() :].strip()
            desc_parts = [tail] if tail and len(tail) > 3 else []
            for j in range(i + 1, min(i + 5, len(lines))):
                nl = lines[j].strip()
                if _FLUOR_RANGE.search(nl) or _FLUORESCENCE_RANGE.search(nl):
                    break
                if LITH_TYPES.search(nl) and ":" in nl:
                    break
                if nl and not re.match(r"^(WOB|RPM|SPP|FLOW|\d{3,5}$|G\s*W\s*E)", nl):
                    desc_parts.append(nl)
            desc = " ".join(desc_parts)
            entries.append(
                {
                    "top_m": _to_m(top_raw, depth_unit),
                    "bot_m": _to_m(bot_raw, depth_unit),
                    "pct_min": pct_lo,
                    "pct_max": pct_hi,
                    "pct_mid": (pct_lo + pct_hi) / 2.0,
                    "brightness": _parse_fluor_brightness(desc) or _parse_fluor_brightness(line),
                    "text": (line + " " + desc).strip()[:400],
                }
            )
            continue

        fl_m = _FLUORESCENCE_RANGE.search(line)
        if fl_m:
            top_raw = float(fl_m.group(1))
            bot_raw = float(fl_m.group(2))
            desc_parts = []
            for j in range(i + 1, min(i + 5, len(lines))):
                nl = lines[j].strip()
                if _FLUORESCENCE_RANGE.search(nl) or _FLUOR_RANGE.search(nl):
                    break
                if LITH_TYPES.search(nl) and ":" in nl and j > i + 1:
                    break
                if nl:
                    desc_parts.append(nl)
            desc = " ".join(desc_parts)
            pct_min, pct_max, pct_mid = _parse_fluor_pct(desc)
            if pct_mid is None:
                continue
            entries.append(
                {
                    "top_m": _to_m(top_raw, depth_unit),
                    "bot_m": _to_m(bot_raw, depth_unit),
                    "pct_min": pct_min,
                    "pct_max": pct_max,
                    "pct_mid": pct_mid,
                    "brightness": _parse_fluor_brightness(desc),
                    "text": (line + " " + desc).strip()[:400],
                }
            )

    return entries


def find_mudlog(top_m: float, bot_m: float, entries: list[dict], window_m: float = 15.0) -> list[dict]:
    """Return lithology entries whose depth_est falls within the interval (metres MD)."""
    return [
        e
        for e in entries
        if e["type"] == "lithology"
        and e.get("depth_est") is not None
        and (top_m - window_m) <= e["depth_est"] <= (bot_m + window_m)
    ]


def match_fluorescence(top_m: float, bot_m: float, fluor_entries: list[dict]) -> dict | None:
    """Best overlapping fluorescence block for a metre-depth interval."""
    if not fluor_entries:
        return None
    mid_m = (top_m + bot_m) / 2.0
    best: dict | None = None
    best_score = -1.0
    for entry in fluor_entries:
        overlap = min(bot_m, entry["bot_m"]) - max(top_m, entry["top_m"])
        if overlap <= 0 and not (entry["top_m"] <= mid_m <= entry["bot_m"]):
            continue
        score = overlap if overlap > 0 else 0.1
        if mid_m < entry["top_m"] or mid_m > entry["bot_m"]:
            score *= 0.5
        if score > best_score:
            best_score = score
            best = entry
    return best
