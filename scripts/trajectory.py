"""Parse Petrel well trajectory exports and interpolate mTVDss (subsea Z) at MD."""

from __future__ import annotations

import os
import re

import numpy as np

WORKSPACE = (
    os.environ.get("WORKSPACE")
    or os.environ.get("GITHUB_WORKSPACE")
    or os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
)

HEADER_RE = re.compile(r"^\s*MD\b", re.I)

COLUMN_ALIASES: dict[str, tuple[str, ...]] = {
    "md": ("md",),
    "x": ("x",),
    "y": ("y",),
    "z": ("z", "tvd_z", "mtvds"),
    "tvd": ("tvd",),
    "incl": ("incl", "inc"),
    "azim": ("azim_tn", "azim_gn", "azim"),
}


def _resolve_column_indices(parts: list[str]) -> dict[str, int | None]:
    lowered = [p.lower() for p in parts]
    indices: dict[str, int | None] = {}
    for key, aliases in COLUMN_ALIASES.items():
        idx = None
        for alias in aliases:
            if alias in lowered:
                idx = lowered.index(alias)
                break
        indices[key] = idx
    return indices


def _read_station_row(parts: list[str], indices: dict[str, int | None]) -> dict[str, float] | None:
    md_idx = indices.get("md")
    z_idx = indices.get("z")
    if md_idx is None or z_idx is None:
        return None
    try:
        md = float(parts[md_idx])
        z = float(parts[z_idx])
    except (IndexError, ValueError):
        return None

    def _optional(key: str) -> float | None:
        idx = indices.get(key)
        if idx is None or idx >= len(parts):
            return None
        try:
            return float(parts[idx])
        except ValueError:
            return None

    station: dict[str, float] = {"md": md, "mtvds": z}
    for key in ("x", "y", "tvd", "incl", "azim"):
        val = _optional(key)
        if val is not None:
            station[key] = val
    return station


def load_trajectory_stations(path: str) -> list[dict[str, float]]:
    """Load full trajectory stations (MD, mTVDss/Z, X, Y, INCL, …) from Petrel export."""
    if not os.path.isabs(path):
        path = os.path.join(WORKSPACE, path)

    stations: list[dict[str, float]] = []
    indices: dict[str, int | None] | None = None

    with open(path, encoding="utf-8", errors="replace") as f:
        for line in f:
            if line.startswith("#"):
                continue
            stripped = line.strip()
            if not stripped:
                continue
            parts = stripped.split()
            if HEADER_RE.match(stripped):
                indices = _resolve_column_indices(parts)
                if indices.get("md") is None or indices.get("z") is None:
                    raise ValueError(f"Trajectory file missing MD/Z columns: {path}")
                continue
            if indices is None:
                continue
            station = _read_station_row(parts, indices)
            if station is not None:
                stations.append(station)

    if not stations:
        raise ValueError(f"No trajectory samples parsed from {path}")

    stations.sort(key=lambda s: s["md"])
    # Collapse duplicate MD (keep last sample)
    deduped: dict[float, dict[str, float]] = {}
    for station in stations:
        deduped[station["md"]] = station
    return [deduped[md] for md in sorted(deduped)]


def load_trajectory(path: str) -> tuple[np.ndarray, np.ndarray]:
    """Load MD (m) and Z / mTVDss (m subsea) from a Petrel *_trajectory file."""
    if not os.path.isabs(path):
        path = os.path.join(WORKSPACE, path)

    stations = load_trajectory_stations(path)
    md_arr = np.array([s["md"] for s in stations], dtype=float)
    z_arr = np.array([s["mtvds"] for s in stations], dtype=float)
    return md_arr, z_arr


class TrajectoryInterpolator:
    """Linear MD → mTVDss (Z subsea) interpolator."""

    def __init__(self, md: np.ndarray, z: np.ndarray):
        self.md = md
        self.z = z

    @classmethod
    def from_file(cls, path: str) -> TrajectoryInterpolator:
        md, z = load_trajectory(path)
        return cls(md, z)

    def interpolate_mtvds(self, md: float | np.ndarray) -> float | np.ndarray | None:
        """Return mTVDss (Z column) at given MD(s). Extrapolates linearly at ends."""
        if self.md.size == 0:
            return None
        scalar = np.isscalar(md)
        md_query = np.atleast_1d(np.asarray(md, dtype=float))
        z_out = np.interp(md_query, self.md, self.z)
        if scalar:
            return float(z_out[0])
        return z_out


def interpolate_mtvds(md: float, trajectory_path: str) -> float:
    """Convenience: load trajectory file and interpolate Z at MD."""
    return TrajectoryInterpolator.from_file(trajectory_path).interpolate_mtvds(md)
