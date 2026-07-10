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


def load_trajectory(path: str) -> tuple[np.ndarray, np.ndarray]:
    """Load MD (m) and Z / mTVDss (m subsea) from a Petrel *_trajectory file."""
    if not os.path.isabs(path):
        path = os.path.join(WORKSPACE, path)

    md_vals: list[float] = []
    z_vals: list[float] = []
    md_idx = z_idx = None

    with open(path, encoding="utf-8", errors="replace") as f:
        for line in f:
            if line.startswith("#"):
                continue
            stripped = line.strip()
            if not stripped:
                continue
            parts = stripped.split()
            if HEADER_RE.match(stripped):
                lowered = [p.lower() for p in parts]
                md_idx = lowered.index("md") if "md" in lowered else 0
                z_idx = lowered.index("z") if "z" in lowered else None
                if z_idx is None:
                    raise ValueError(f"Trajectory file missing Z column: {path}")
                continue
            if md_idx is None:
                continue
            try:
                md = float(parts[md_idx])
                z = float(parts[z_idx])
            except (IndexError, ValueError):
                continue
            md_vals.append(md)
            z_vals.append(z)

    if not md_vals:
        raise ValueError(f"No trajectory samples parsed from {path}")

    md_arr = np.array(md_vals, dtype=float)
    z_arr = np.array(z_vals, dtype=float)
    order = np.argsort(md_arr)
    md_arr = md_arr[order]
    z_arr = z_arr[order]

    # Collapse duplicate MD (keep last)
    uniq_md, uniq_idx = np.unique(md_arr, return_index=True)
    z_arr = z_arr[uniq_idx]
    md_arr = uniq_md
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
