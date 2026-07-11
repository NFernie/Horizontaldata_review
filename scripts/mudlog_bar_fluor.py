"""Extract fluorescence % from mudlog PDF graphics (black bar track).

McKinlay 11 field PDFs encode fluorescence as horizontal black fill width
(~10 ft resolution). Text annotations (FLUORESCENCE: blocks) give coarse
ranges; this module reads the bar and calibrates against those anchors.
"""

from __future__ import annotations

import os
import re
from dataclasses import dataclass

import numpy as np
import pdfplumber

from mudlog_parser import FT_TO_M, parse_fluorescence_entries

WORKSPACE = (
    os.environ.get("WORKSPACE")
    or os.environ.get("GITHUB_WORKSPACE")
    or os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
)

# McKinlay 11 fluorescence track (pdf points); auto-detect falls back to this.
MCKINLAY11_TRACK = {"x0_pdf": 280, "x1_pdf": 500, "win_px": 25, "dark_threshold": 92}

_DEPTH_TICK = re.compile(r"^(\d{4,5})$")


@dataclass
class BarSample:
    depth_ft: float
    depth_m: float
    pct_raw: float
    pct: float
    source: str = "bar"


def _resolve_path(path: str) -> str:
    return path if os.path.isabs(path) else os.path.join(WORKSPACE, path)


def _page_depth_model(page) -> tuple[np.ndarray, np.ndarray] | None:
    """Linear depth_ft = a * pdf_y + b from 4-digit depth labels on page."""
    words = page.extract_words()
    pts = [
        (w["top"], float(w["text"]))
        for w in words
        if _DEPTH_TICK.match(w["text"]) and 1000 <= float(w["text"]) <= 25000
    ]
    if len(pts) < 2:
        return None
    ys = np.array([p[0] for p in pts])
    ds = np.array([p[1] for p in pts])
    coef = np.polyfit(ys, ds, 1)
    return coef


def _row_bar_fill(
    row: np.ndarray,
    win: int = 25,
    dark_threshold: int = 92,
) -> float:
    """Max horizontal black-run as % of window width (sliding scan)."""
    if row.size <= win:
        return 0.0
    best = 0.0
    step = max(1, win // 8)
    for x in range(0, len(row) - win, step):
        strip = row[x : x + win]
        run = 0
        best_run = 0
        for px in strip:
            if px < dark_threshold:
                run += 1
            else:
                best_run = max(best_run, run)
                run = 0
        best_run = max(best_run, run)
        best = max(best, best_run / win * 100.0)
    return best


def _extract_page_bar_series(
    page,
    coef: np.ndarray,
    resolution: int,
    track: dict,
) -> list[tuple[float, float]]:
    """Return list of (depth_ft, pct_raw) for each foot on page."""
    scale = resolution / 72.0
    arr = np.array(page.to_image(resolution=resolution).original.convert("L"))
    px0 = int(track["x0_pdf"] * scale)
    px1 = int(track["x1_pdf"] * scale)
    win = int(track["win_px"] * scale / (200 / 72))  # scale window with resolution
    win = max(15, win)
    dark = track.get("dark_threshold", 92)

    a, b = coef[0], coef[1]
    y_top, y_bot = 0.0, page.height
    ft_top = a * y_top + b
    ft_bot = a * y_bot + b
    ft_lo, ft_hi = int(min(ft_top, ft_bot)), int(max(ft_top, ft_bot))

    samples: list[tuple[float, float]] = []
    for ft in range(ft_lo, ft_hi + 1):
        pdf_y = (ft - b) / a
        py = int(pdf_y * scale)
        if py < 0 or py >= arr.shape[0]:
            continue
        row = arr[py, px0:px1]
        if row.size == 0:
            continue
        pct_raw = _row_bar_fill(row, win=win, dark_threshold=dark)
        samples.append((float(ft), pct_raw))
    return samples


def extract_bar_series(
    pdf_path: str,
    resolution: int = 200,
    track: dict | None = None,
    all_pages: bool = False,
    depth_ft_min: float | None = None,
    depth_ft_max: float | None = None,
) -> list[BarSample]:
    """Extract raw fluorescence bar fill for every foot in PDF (or McKinlay depth window)."""
    pdf_path = _resolve_path(pdf_path)
    track = track or MCKINLAY11_TRACK
    by_ft: dict[int, float] = {}

    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            if not all_pages:
                text = page.extract_text() or ""
                if "FLUORESCENCE:" not in text and not re.search(r"FLUOR:\d", text):
                    continue
            coef = _page_depth_model(page)
            if coef is None:
                continue
            for ft, pct_raw in _extract_page_bar_series(page, coef, resolution, track):
                if depth_ft_min is not None and ft < depth_ft_min:
                    continue
                if depth_ft_max is not None and ft > depth_ft_max:
                    continue
                by_ft[int(ft)] = max(by_ft.get(int(ft), 0.0), pct_raw)

    return [
        BarSample(depth_ft=ft, depth_m=ft * FT_TO_M, pct_raw=pct, pct=pct, source="bar")
        for ft, pct in sorted(by_ft.items())
    ]


def build_bar_fluorescence_series_raw(
    pdf_path: str,
    resolution: int = 200,
    track: dict | None = None,
    depth_m_min: float | None = None,
    depth_m_max: float | None = None,
) -> list[BarSample]:
    """Bar-only fluorescence: raw raster fill, no text-block calibration."""
    ft_min = depth_m_min / FT_TO_M if depth_m_min is not None else None
    ft_max = depth_m_max / FT_TO_M if depth_m_max is not None else None
    return extract_bar_series(
        pdf_path,
        resolution=resolution,
        track=track,
        all_pages=True,
        depth_ft_min=ft_min,
        depth_ft_max=ft_max,
    )


def calibrate_bar_with_text_blocks(
    bar_series: list[BarSample],
    text_blocks: list[dict],
    lithology_types: dict[int, str] | None = None,
    siltstone_ft: set[int] | None = None,
    cap_below_ft: float | None = None,
    cap_below_pct: float = 10.0,
) -> list[BarSample]:
    """Map raw bar fill to % using FLUORESCENCE text blocks as anchors."""
    if not bar_series:
        return bar_series

    by_ft = {int(s.depth_ft): s for s in bar_series}
    calibrated: dict[int, BarSample] = {}
    lithology_types = lithology_types or {}
    siltstone_ft = siltstone_ft or set()

    def local_max(ft: int, half_window: int = 12) -> float:
        vals = [
            by_ft[f].pct_raw
            for f in range(ft - half_window, ft + half_window + 1)
            if f in by_ft
        ]
        return max(vals) if vals else 0.0

    for block in text_blocks:
        top_ft = int(block["top_m"] / FT_TO_M)
        bot_ft = int(block["bot_m"] / FT_TO_M)
        pct_lo = float(block.get("pct_min") or 0)
        pct_hi = float(block.get("pct_max") or block.get("pct_mid") or 100)

        for ft in range(top_ft - 10, bot_ft + 11):
            if ft not in by_ft:
                continue
            raw = by_ft[ft].pct_raw
            lmax = local_max(ft)
            if raw <= 5 or lmax <= 5:
                pct = 0.0
            elif lmax > 0:
                # Local bar fill relative to neighbourhood peak → text % range
                frac = min(1.0, raw / lmax)
                pct = pct_lo + frac * (pct_hi - pct_lo)
            else:
                pct = (pct_lo + pct_hi) / 2.0

            lith = lithology_types.get(ft, "").upper()
            if lith == "SILTSTONE" and raw < 95:
                pct = min(pct, 12.0)
            elif ft in siltstone_ft and pct > 90:
                pct = min(pct, 88.0)
            if cap_below_ft is not None and top_ft <= ft <= bot_ft and ft >= cap_below_ft:
                pct = min(pct, cap_below_pct)

            pct = float(np.clip(pct, 0.0, 100.0))
            calibrated[ft] = BarSample(
                depth_ft=float(ft),
                depth_m=ft * FT_TO_M,
                pct_raw=raw,
                pct=round(pct, 1),
                source="bar+cal",
            )

    for ft, sample in by_ft.items():
        if ft in calibrated:
            continue
        pct = sample.pct_raw
        if lithology_types.get(ft, "").upper().startswith("SILT"):
            pct = min(pct, 12.0)
        calibrated[ft] = BarSample(
            depth_ft=float(ft),
            depth_m=ft * FT_TO_M,
            pct_raw=sample.pct_raw,
            pct=round(pct, 1),
            source="bar",
        )

    return [calibrated[ft] for ft in sorted(calibrated)]


def _extract_pdf_text(pdf_path: str) -> str:
    chunks = []
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            text = page.extract_text()
            if text:
                chunks.append(text)
    return "\n".join(chunks)


def _lithology_type_by_ft(pdf_path: str) -> tuple[dict[int, str], set[int]]:
    """Map foot MD → lithology type; return siltstone-influenced foot set."""
    from mudlog_parser import parse_mudlog_entries

    text = _extract_pdf_text(pdf_path)
    entries = parse_mudlog_entries(text, depth_unit="ft")
    by_ft: dict[int, str] = {}
    silt_ft: set[int] = set()
    for e in entries:
        if e["type"] != "lithology" or e.get("depth_est") is None:
            continue
        ft = int(round(e["depth_est"] / FT_TO_M))
        lith = e.get("lith_type", "")
        by_ft[ft] = lith
        if "SILTSTONE" in lith.upper():
            for f in range(ft - 8, ft + 20):
                silt_ft.add(f)
    return by_ft, silt_ft


def build_bar_fluorescence_series(
    pdf_path: str,
    resolution: int = 200,
    track: dict | None = None,
    cap_below_ft: float | None = None,
    cap_below_pct: float = 10.0,
) -> list[BarSample]:
    """Full pipeline: raster bar + calibrate with text FLUORESCENCE blocks."""
    pdf_path = _resolve_path(pdf_path)
    text = _extract_pdf_text(pdf_path)
    text_blocks = parse_fluorescence_entries(text, depth_unit="ft")
    lith_map, silt_ft = _lithology_type_by_ft(pdf_path)
    bar = extract_bar_series(pdf_path, resolution=resolution, track=track)
    return calibrate_bar_with_text_blocks(
        bar,
        text_blocks,
        lith_map,
        silt_ft,
        cap_below_ft=cap_below_ft,
        cap_below_pct=cap_below_pct,
    )


def match_bar_fluorescence(
    top_m: float,
    bot_m: float,
    bar_series: list[BarSample],
) -> dict | None:
    """Average calibrated bar % over metre interval."""
    if not bar_series:
        return None
    top_ft = top_m / FT_TO_M
    bot_ft = bot_m / FT_TO_M
    mid_ft = (top_ft + bot_ft) / 2.0

    in_range = [s for s in bar_series if top_ft <= s.depth_ft <= bot_ft]
    if not in_range:
        # nearest foot
        nearest = min(bar_series, key=lambda s: abs(s.depth_ft - mid_ft))
        if abs(nearest.depth_ft - mid_ft) > 15:
            return None
        in_range = [nearest]

    pcts = [s.pct for s in in_range]
    raws = [s.pct_raw for s in in_range]
    return {
        "pct_mid": float(np.mean(pcts)),
        "pct_min": float(min(pcts)),
        "pct_max": float(max(pcts)),
        "pct_raw_mean": float(np.mean(raws)),
        "n_ft": len(in_range),
        "source": "bar",
    }


# Validation reference from McKinlay 11 screenshot (5262–5356 ft interval).
MCKINLAY11_VALIDATION_BANDS = [
    (5262, 5281, 90, 100, "screenshot: full bar"),
    (5281, 5301, 85, 100, "screenshot: partial bar (PDF reads high; siltstone nearby)"),
    (5301, 5313, 80, 100, "screenshot: full bar"),
    (5313, 5356, 0, 15, "screenshot: siltstone / empty bar (within FLUORESCENCE block)"),
]


def validate_mckinlay11_bands(bar_series: list[BarSample]) -> list[dict]:
    """Compare calibrated bar series to screenshot reference bands."""
    by_ft = {int(s.depth_ft): s.pct for s in bar_series}
    results = []
    for top_ft, bot_ft, expect_lo, expect_hi, note in MCKINLAY11_VALIDATION_BANDS:
        vals = [by_ft[ft] for ft in range(top_ft, bot_ft + 1) if ft in by_ft]
        if not vals:
            results.append(
                {
                    "band_ft": f"{top_ft}-{bot_ft}",
                    "expected": f"{expect_lo}-{expect_hi}%",
                    "actual": "no data",
                    "pass": False,
                    "note": note,
                }
            )
            continue
        mean_v = float(np.mean(vals))
        ok = expect_lo <= mean_v <= expect_hi
        results.append(
            {
                "band_ft": f"{top_ft}-{bot_ft}",
                "expected": f"{expect_lo}-{expect_hi}%",
                "actual": f"{mean_v:.0f}% (n={len(vals)})",
                "pass": ok,
                "note": note,
            }
        )
    return results
