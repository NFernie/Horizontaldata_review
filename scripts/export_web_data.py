#!/usr/bin/env python3
"""Export McKinlay well statistics and interval data as JSON for the static site."""

from __future__ import annotations

import json
import math
import os
import sys
from datetime import datetime, timezone

import numpy as np
import pandas as pd
from scipy.cluster.hierarchy import linkage
from scipy.spatial.distance import pdist, squareform
from scipy.stats import ks_2samp, spearmanr

WORKSPACE = (
    os.environ.get("WORKSPACE")
    or os.environ.get("GITHUB_WORKSPACE")
    or os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
)
sys.path.insert(0, os.path.join(WORKSPACE, "scripts"))

import config  # noqa: E402
from compute_pay_summary import analyze_well, pct_of_lateral  # noqa: E402
from process_mckinlay_wells import WELLS, process_well  # noqa: E402

DATA_ROOT = os.path.join(WORKSPACE, config.DATA_DIR)


def clean_scalar(val):
    """Convert pandas/numpy missing and non-JSON floats to None for browser-safe JSON."""
    if val is None:
        return None
    try:
        if pd.isna(val):
            return None
    except (TypeError, ValueError):
        pass
    if isinstance(val, (np.floating, float)):
        f = float(val)
        if math.isnan(f) or math.isinf(f):
            return None
        return f
    if isinstance(val, np.integer):
        return int(val)
    if isinstance(val, (np.bool_,)):
        return bool(val)
    return val


def sanitize_for_json(obj):
    """Recursively replace NaN/Inf with null so JSON.parse works in browsers."""
    if isinstance(obj, dict):
        return {k: sanitize_for_json(v) for k, v in obj.items()}
    if isinstance(obj, (list, tuple)):
        return [sanitize_for_json(v) for v in obj]
    if isinstance(obj, (np.floating, float)):
        f = float(obj)
        if math.isnan(f) or math.isinf(f):
            return None
        return f
    if isinstance(obj, np.integer):
        return int(obj)
    if isinstance(obj, (np.bool_,)):
        return bool(obj)
    if isinstance(obj, np.ndarray):
        return sanitize_for_json(obj.tolist())
    try:
        if pd.isna(obj):
            return None
    except (TypeError, ValueError):
        pass
    return obj


def _json_default(obj):
    if isinstance(obj, (np.integer,)):
        return int(obj)
    if isinstance(obj, (np.floating,)):
        val = float(obj)
        if math.isnan(val) or math.isinf(val):
            return None
        return val
    if isinstance(obj, np.ndarray):
        return obj.tolist()
    if isinstance(obj, (np.bool_,)):
        return bool(obj)
    raise TypeError(f"Object of type {type(obj)} is not JSON serializable")


def write_json(path, data):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w") as f:
        json.dump(sanitize_for_json(data), f, indent=2, allow_nan=False)


def clamp(value, lo=0.0, hi=1.0):
    if value is None or (isinstance(value, float) and math.isnan(value)):
        return 0.0
    return max(lo, min(hi, float(value)))


def robust_norm(series):
    """Min–max normalise within a well, clipping to P5–P95."""
    arr = pd.to_numeric(pd.Series(series), errors="coerce").dropna()
    if arr.empty:
        return pd.Series([np.nan] * len(series), index=range(len(series)))
    p_lo, p_hi = np.percentile(arr, config.ROBUST_NORM_PERCENTILES)
    if p_hi <= p_lo:
        return pd.Series([0.5] * len(series))
    clipped = arr.clip(p_lo, p_hi)
    normed = (clipped - p_lo) / (p_hi - p_lo)
    out = pd.Series([np.nan] * len(series))
    out.loc[arr.index] = normed.values
    return out


def percentile_value(series, pct):
    arr = pd.to_numeric(pd.Series(series), errors="coerce").dropna()
    if arr.empty:
        return np.nan
    return float(np.percentile(arr, pct))


def interval_log_value(item, key):
    log = item.get("log") or {}
    return log.get(key)


def build_enriched_intervals(results):
    """Attach log scalars and pay/matching flags to each retained interval."""
    rows = []
    for item in results:
        row = {
            **item,
            "avg_GR": interval_log_value(item, "avg_GR"),
            "avg_RES_DEEP": interval_log_value(item, "avg_RES_DEEP"),
            "avg_RES_SHALLOW": interval_log_value(item, "avg_RES_SHALLOW"),
            "res_sep": interval_log_value(item, "res_sep"),
        }
        ss = row.get("pct_ss")
        fluor = row.get("fluor")
        res = row.get("avg_RES_DEEP")
        row["matching_pay"] = bool(
            pd.notna(ss)
            and pd.notna(fluor)
            and pd.notna(res)
            and ss > config.SS_CUTOFF
            and fluor > config.FLUOR_CUTOFF
            and res > config.RES_DEEP_CUTOFF
        )
        rows.append(row)
    return rows


def compute_rqi_components(rows):
    pct_ss = [r.get("pct_ss") for r in rows]
    grain_ord = [r.get("grain_ordinal") for r in rows]
    gr = [r.get("avg_GR") for r in rows]
    poro = [config.PORO_SCORES.get(r.get("poro_class") or "none", 0.0) for r in rows]
    loose = [1.0 if r.get("loose_grains") else 0.0 for r in rows]

    n_pct = robust_norm(pct_ss)
    n_grain = robust_norm(grain_ord)
    n_low_gr = robust_norm([1.0 - x if pd.notna(x) else np.nan for x in gr])
    n_poro = pd.Series(poro)
    n_loose = pd.Series(loose)

    w = config.RQI_WEIGHTS
    rqi = (
        w["pct_ss"] * n_pct
        + w["grain_ordinal"] * n_grain
        + w["low_gr"] * n_low_gr
        + w["porosity"] * n_poro
        + w["loose_grains"] * n_loose
    )
    for i, row in enumerate(rows):
        row["RQI"] = float(rqi.iloc[i]) if pd.notna(rqi.iloc[i]) else None
    return rows


def compute_flags_and_wrci(rows):
    res_sep_vals = [r.get("res_sep") for r in rows]
    res_sep_p75 = percentile_value(res_sep_vals, config.FLAG_RES_SEP_PERCENTILE)
    highperm_norm = robust_norm(res_sep_vals)

    for i, row in enumerate(rows):
        rqi = row.get("RQI")
        good = rqi is not None and rqi >= config.RQI_THRESHOLD
        res_sep = row.get("res_sep")
        res_deep = row.get("avg_RES_DEEP")
        fluor = pd.to_numeric(row.get("fluor"), errors="coerce")

        flags = []
        if good:
            if res_sep is not None and res_sep_p75 is not None and not math.isnan(res_sep_p75):
                if res_sep >= res_sep_p75:
                    flags.append("highperm")
            if res_deep is not None and res_deep < config.FLAG_LOWRES_RES_DEEP:
                flags.append("lowres")
            if fluor is not None and not pd.isna(fluor) and fluor < config.FLAG_LOWFLUOR_PCT:
                flags.append("lowfluor")

        row["flags"] = flags
        row["flag_highperm"] = "highperm" in flags
        row["flag_lowres"] = "lowres" in flags
        row["flag_lowfluor"] = "lowfluor" in flags

        hp_norm = float(highperm_norm.iloc[i]) if pd.notna(highperm_norm.iloc[i]) else 0.0
        lowres_sev = clamp((config.LOWRES_SEVERITY_REF - res_deep) / config.LOWRES_SEVERITY_REF) if res_deep is not None else 0.0
        lowfluor_sev = clamp((config.LOWFLUOR_SEVERITY_REF - fluor) / config.LOWFLUOR_SEVERITY_REF) if fluor is not None and not pd.isna(fluor) else 0.0

        ww = config.WRCI_WEIGHTS
        wrci = 100.0 * (
            ww["rqi"] * (rqi or 0.0)
            + ww["highperm"] * hp_norm
            + ww["lowres_severity"] * lowres_sev
            + ww["lowfluor_severity"] * lowfluor_sev
        )
        row["WRCI"] = round(wrci, 2)

        flag_count = len(flags)
        if wrci >= config.WRCI_HIGH_THRESHOLD and flag_count >= config.WRCI_HIGH_MIN_FLAGS:
            row["risk_class"] = "High"
        elif wrci >= config.WRCI_ELEVATED_THRESHOLD or flag_count >= 1:
            row["risk_class"] = "Elevated"
        else:
            row["risk_class"] = "Low"

    return rows


def modified_zscores(rows):
    z_by_metric = {}
    for metric in config.ZSCORE_METRICS:
        values = pd.to_numeric(pd.Series([r.get(metric) for r in rows]), errors="coerce")
        median = values.median()
        mad = np.median(np.abs(values.dropna() - median))
        zvals = []
        for val in values:
            if pd.isna(val) or mad == 0:
                zvals.append(None)
            else:
                zvals.append(config.MAD_SCALE * (val - median) / mad)
        z_by_metric[metric] = zvals

    for i, row in enumerate(rows):
        zvec = {}
        anomalies = []
        for metric in config.ZSCORE_METRICS:
            z = z_by_metric[metric][i]
            zvec[metric] = round(z, 3) if z is not None else None
            if z is not None and abs(z) > config.ZSCORE_THRESHOLD:
                anomalies.append(metric)
        row["z_scores"] = zvec
        row["anomalies"] = anomalies
    return rows


def spearman_matrix(rows):
    data = {}
    for var in config.SPEARMAN_VARS:
        data[var] = pd.to_numeric(pd.Series([r.get(var) for r in rows]), errors="coerce")
    df = pd.DataFrame(data).dropna(how="all")
    n = len(df)
    matrix = {v: {u: None for u in config.SPEARMAN_VARS} for v in config.SPEARMAN_VARS}
    p_matrix = {v: {u: None for u in config.SPEARMAN_VARS} for v in config.SPEARMAN_VARS}
    for a in config.SPEARMAN_VARS:
        for b in config.SPEARMAN_VARS:
            sub = df[[a, b]].dropna()
            if len(sub) < 3:
                continue
            rho, p = spearmanr(sub[a], sub[b])
            rho = float(np.asarray(rho).ravel()[0])
            p = float(np.asarray(p).ravel()[0])
            if math.isnan(rho):
                continue
            matrix[a][b] = round(float(rho), 4)
            p_matrix[a][b] = round(float(p), 6)

    decoupling = None
    rqi_vals = [r.get("RQI") for r in rows]
    res_vals = [r.get("avg_RES_DEEP") for r in rows]
    sub = pd.DataFrame({"RQI": rqi_vals, "avg_RES_DEEP": res_vals}).dropna()
    if len(sub) >= 3:
        rho, _ = spearmanr(sub["RQI"], sub["avg_RES_DEEP"])
        rho = float(np.asarray(rho).ravel()[0])
        if not math.isnan(rho):
            decoupling = round(rho, 4)

    return {"n": n, "rho": matrix, "p_value": p_matrix, "decoupling_score": decoupling}


def jaccard_sets(rows):
    n = len(rows)
    if n == 0:
        return set()

    gr_p25 = percentile_value([r.get("avg_GR") for r in rows], config.LOW_GR_PERCENTILE)
    present = set()
    thresholds = config.JACCARD_PRESENCE_PCT / 100.0

    def pct_true(predicate):
        return sum(1 for r in rows if predicate(r)) / n

    checks = {
        "good_rock": lambda r: (r.get("RQI") or 0) >= config.RQI_THRESHOLD,
        "highperm": lambda r: r.get("flag_highperm"),
        "lowres_over_good": lambda r: r.get("flag_lowres"),
        "lowfluor_over_good": lambda r: r.get("flag_lowfluor"),
        "matching_pay": lambda r: r.get("matching_pay"),
        "coarse_grain": lambda r: (r.get("grain_ordinal") or 0) >= config.COARSE_GRAIN_ORDINAL,
        "low_GR": lambda r: r.get("avg_GR") is not None and gr_p25 is not None and not math.isnan(gr_p25) and r.get("avg_GR") <= gr_p25,
        "loose_grains": lambda r: r.get("loose_grains"),
    }
    for feat, fn in checks.items():
        if pct_true(fn) >= thresholds:
            present.add(feat)
    return present


def jaccard(a, b):
    if not a and not b:
        return 1.0
    union = a | b
    if not union:
        return 0.0
    return len(a & b) / len(union)


def depth_binned_flags(rows, mck_start, mck_end):
    """Per-bin OR of any water-risk flag along normalised lateral position."""
    bins = config.JACCARD_DEPTH_BINS
    if mck_end <= mck_start:
        return [0] * bins
    counts = [0] * bins
    for row in rows:
        mid = (row["top"] + row["bot"]) / 2.0
        pos = clamp((mid - mck_start) / (mck_end - mck_start), 0.0, 0.999999)
        idx = min(int(pos * bins), bins - 1)
        flagged = row.get("risk_class") in ("High", "Elevated") or bool(row.get("flags"))
        if flagged:
            counts[idx] = 1
    return counts


def depth_binned_jaccard(rows_a, meta_a, rows_b, meta_b):
    bins_a = depth_binned_flags(rows_a, meta_a["mck_start"], meta_a["mck_end"])
    bins_b = depth_binned_flags(rows_b, meta_b["mck_start"], meta_b["mck_end"])
    intersection = sum(1 for i in range(config.JACCARD_DEPTH_BINS) if bins_a[i] and bins_b[i])
    union = sum(1 for i in range(config.JACCARD_DEPTH_BINS) if bins_a[i] or bins_b[i])
    return intersection / union if union else 0.0


def well_cluster_vector(rows, pay_pct):
    def mean_of(key):
        vals = pd.Series([r.get(key) for r in rows], dtype=float).dropna()
        return float(vals.mean()) if len(vals) else 0.0

    high_risk = sum(1 for r in rows if r.get("risk_class") == "High")
    n = len(rows) or 1
    return np.array(
        [
            mean_of("pct_ss"),
            mean_of("grain_ordinal"),
            mean_of("avg_GR"),
            mean_of("res_sep"),
            mean_of("avg_RES_DEEP"),
            pay_pct,
            mean_of("WRCI"),
            100.0 * high_risk / n,
        ],
        dtype=float,
    )


def standardize_matrix(vectors):
    mat = np.vstack(vectors)
    mean = mat.mean(axis=0)
    std = mat.std(axis=0)
    std[std == 0] = 1.0
    return (mat - mean) / std, mean.tolist(), std.tolist()


def cosine_similarity_matrix(mat):
    norms = np.linalg.norm(mat, axis=1, keepdims=True)
    norms[norms == 0] = 1.0
    normed = mat / norms
    sim = normed @ normed.T
    return sim


def serialize_interval(row):
    log = row.get("log") or {}
    clean_log = {k: clean_scalar(v) for k, v in log.items()}
    return {
        "depth": row["depth"],
        "top": row["top"],
        "bot": row["bot"],
        "pct_ss": clean_scalar(row.get("pct_ss")),
        "pct_slt": clean_scalar(row.get("pct_slt")),
        "grain": row.get("grain") if pd.notna(row.get("grain")) else None,
        "max_grain": row.get("max_grain") if pd.notna(row.get("max_grain")) else None,
        "grain_ordinal": row.get("grain_ordinal"),
        "poro_class": row.get("poro_class"),
        "loose_grains": row.get("loose_grains"),
        "fluor": clean_scalar(row.get("fluor")),
        "bright": row.get("bright") if pd.notna(row.get("bright")) else None,
        "gas": clean_scalar(row.get("gas")),
        "fec03_slt": row.get("fec03_slt") if pd.notna(row.get("fec03_slt")) else None,
        "fec03_sst": row.get("fec03_sst") if pd.notna(row.get("fec03_sst")) else None,
        "long_desc": row.get("long_desc"),
        "log": clean_log,
        "perm": row.get("perm"),
        "matching_pay": row.get("matching_pay"),
        "RQI": clean_scalar(row.get("RQI")),
        "WRCI": clean_scalar(row.get("WRCI")),
        "risk_class": row.get("risk_class"),
        "flags": row.get("flags", []),
        "z_scores": {k: clean_scalar(v) for k, v in row.get("z_scores", {}).items()},
        "anomalies": row.get("anomalies", []),
    }


def water_risk_payload(rows):
    flagged = [
        r for r in rows
        if r.get("flags") or r.get("risk_class") in ("High", "Elevated")
    ]
    flagged.sort(key=lambda r: (-(r.get("WRCI") or 0), r["depth"]))
    return [
        {
            "depth": r["depth"],
            "top": r["top"],
            "bot": r["bot"],
            "WRCI": r.get("WRCI"),
            "RQI": r.get("RQI"),
            "risk_class": r.get("risk_class"),
            "flags": r.get("flags", []),
            "evidence": {
                "pct_ss": r.get("pct_ss"),
                "grain_ordinal": r.get("grain_ordinal"),
                "poro_class": r.get("poro_class"),
                "loose_grains": r.get("loose_grains"),
                "fluor": r.get("fluor"),
                "avg_GR": r.get("avg_GR"),
                "avg_RES_DEEP": r.get("avg_RES_DEEP"),
                "res_sep": r.get("res_sep"),
            },
        }
        for r in flagged
    ]


def run_ks_tests(all_rows_by_alias):
    results = {}
    portfolio = []
    for rows in all_rows_by_alias.values():
        portfolio.extend(rows)

    for focus in config.KS_FOCUS_ALIASES:
        focus_rows = all_rows_by_alias.get(focus, [])
        results[focus] = {"vs_analogs": {}, "vs_portfolio": {}}
        for prop in config.KS_PROPERTIES:
            focus_vals = pd.to_numeric(pd.Series([r.get(prop) for r in focus_rows]), errors="coerce").dropna()
            port_vals = pd.to_numeric(pd.Series([r.get(prop) for r in portfolio if r]), errors="coerce").dropna()
            if len(focus_vals) >= 2 and len(port_vals) >= 2:
                d, p = ks_2samp(focus_vals, port_vals)
                results[focus]["vs_portfolio"][prop] = {"D": round(float(d), 4), "p_value": round(float(p), 6)}
            for alias, rows in all_rows_by_alias.items():
                if alias == focus:
                    continue
                analog_vals = pd.to_numeric(pd.Series([r.get(prop) for r in rows]), errors="coerce").dropna()
                if len(focus_vals) >= 2 and len(analog_vals) >= 2:
                    d, p = ks_2samp(focus_vals, analog_vals)
                    results[focus]["vs_analogs"].setdefault(alias, {})[prop] = {
                        "D": round(float(d), 4),
                        "p_value": round(float(p), 6),
                    }
    return results


def main():
    dc30_df = pd.read_excel(os.path.join(WORKSPACE, "DC30.xlsx"))
    mck_murta_df = pd.read_excel(os.path.join(WORKSPACE, "Mck_Murta.xlsx"))

    well_metas = []
    enriched_by_alias = {}
    jaccard_feature_sets = {}

    for cfg in WELLS:
        print(f"Exporting {cfg['display']}...")
        meta = process_well(cfg, dc30_df, mck_murta_df)
        pay = analyze_well(cfg, dc30_df, mck_murta_df)

        rows = build_enriched_intervals(meta["results"])
        rows = compute_rqi_components(rows)
        rows = compute_flags_and_wrci(rows)
        rows = modified_zscores(rows)

        alias = cfg["alias"]
        enriched_by_alias[alias] = rows
        jaccard_feature_sets[alias] = jaccard_sets(rows)

        meta["enriched_rows"] = rows
        meta["pay"] = pay
        well_metas.append(meta)

        write_json(
            os.path.join(DATA_ROOT, "intervals", f"{alias}.json"),
            {
                "alias": alias,
                "display": cfg["display"],
                "interval_count": len(rows),
                "intervals": [serialize_interval(r) for r in rows],
            },
        )
        write_json(
            os.path.join(DATA_ROOT, "zones", f"{alias}.json"),
            {
                "alias": alias,
                "display": cfg["display"],
                "zones": [
                    {
                        "entry": zd["entry"],
                        "murta": zd["murta"],
                        "re_entry": zd["re_entry"],
                        "length": zd["length"],
                        "default_reentry": zd.get("default_reentry", False),
                    }
                    for zd in meta.get("zone_details", [])
                ],
            },
        )
        write_json(
            os.path.join(DATA_ROOT, "water_risk", f"{alias}.json"),
            {
                "alias": alias,
                "display": cfg["display"],
                "flagged_zones": water_risk_payload(rows),
            },
        )

    # Spearman correlations per well
    correlations = {}
    for meta in well_metas:
        alias = meta["cfg"]["alias"]
        correlations[alias] = spearman_matrix(meta["enriched_rows"])
    write_json(os.path.join(DATA_ROOT, "stats", "correlations.json"), correlations)

    # Jaccard matrices
    aliases = [m["cfg"]["alias"] for m in well_metas]
    n = len(aliases)
    feature_matrix = [[0.0] * n for _ in range(n)]
    depth_matrix = [[0.0] * n for _ in range(n)]
    meta_by_alias = {m["cfg"]["alias"]: m for m in well_metas}
    for i, a in enumerate(aliases):
        for j, b in enumerate(aliases):
            feature_matrix[i][j] = round(jaccard(jaccard_feature_sets[a], jaccard_feature_sets[b]), 4)
            depth_matrix[i][j] = round(
                depth_binned_jaccard(
                    enriched_by_alias[a],
                    meta_by_alias[a],
                    enriched_by_alias[b],
                    meta_by_alias[b],
                ),
                4,
            )

    jena_analogs = {}
    for focus in config.KS_FOCUS_ALIASES:
        scores = [
            (aliases[j], feature_matrix[aliases.index(focus)][j])
            for j in range(n)
            if aliases[j] != focus
        ]
        scores.sort(key=lambda x: -x[1])
        jena_analogs[focus] = [{"alias": a, "jaccard": s} for a, s in scores[:5]]

    write_json(
        os.path.join(DATA_ROOT, "stats", "jaccard.json"),
        {
            "aliases": aliases,
            "feature_vocabulary": list(config.JACCARD_FEATURES),
            "presence_pct": config.JACCARD_PRESENCE_PCT,
            "feature_sets": {a: sorted(jaccard_feature_sets[a]) for a in aliases},
            "matrix": feature_matrix,
            "depth_binned_matrix": depth_matrix,
            "jena_analog_ranking": jena_analogs,
        },
    )

    # Clustering
    pay_pcts = {}
    vectors = []
    for meta in well_metas:
        alias = meta["cfg"]["alias"]
        pay_md = meta["pay"]["matching"]["md"]
        lat = meta["pay"]["lateral_length"]
        pay_pct = pct_of_lateral(pay_md, lat)
        if pd.isna(pay_pct):
            pay_pct = 0.0
        pay_pcts[alias] = round(float(pay_pct), 2)
        vectors.append(well_cluster_vector(meta["enriched_rows"], pay_pct))

    std_mat, feat_mean, feat_std = standardize_matrix(vectors)
    cos_sim = cosine_similarity_matrix(std_mat)
    eucl_dist = squareform(pdist(std_mat, metric="euclidean"))
    link = linkage(std_mat, method="ward")
    n_clusters = min(4, len(aliases))
    from scipy.cluster.hierarchy import fcluster

    cluster_ids = fcluster(link, n_clusters, criterion="maxclust")
    cluster_by_alias = {aliases[i]: int(cluster_ids[i]) for i in range(n)}

    write_json(
        os.path.join(DATA_ROOT, "stats", "clusters.json"),
        {
            "aliases": aliases,
            "features": list(config.CLUSTER_FEATURES),
            "feature_means": feat_mean,
            "feature_stds": feat_std,
            "cosine_similarity": np.round(cos_sim, 4).tolist(),
            "euclidean_distance": np.round(eucl_dist, 4).tolist(),
            "linkage": np.round(link, 6).tolist(),
            "cluster_ids": cluster_by_alias,
        },
    )

    # KS tests
    write_json(os.path.join(DATA_ROOT, "stats", "ks.json"), run_ks_tests(enriched_by_alias))

    # wells.json index
    wells_index = []
    for meta in well_metas:
        cfg = meta["cfg"]
        alias = cfg["alias"]
        rows = meta["enriched_rows"]
        high_risk = sum(1 for r in rows if r.get("risk_class") == "High")
        elevated = sum(1 for r in rows if r.get("risk_class") == "Elevated")
        wells_index.append(
            {
                "alias": alias,
                "display": cfg["display"],
                "tops_name": meta["tops_name"],
                "dc30": round(meta["dc30_top"], 2),
                "td": round(meta["mck_end"], 1),
                "lateral": round(meta["pay"]["lateral_length"], 1),
                "interval_count": len(rows),
                "pay_pct": pay_pcts[alias],
                "high_risk_count": high_risk,
                "elevated_risk_count": elevated,
                "cluster_id": cluster_by_alias[alias],
                "data_missing": False,
            }
        )

    wells_index.append(
        {
            "alias": config.HOBBES4_ALIAS,
            "display": "HOBBES 4",
            "tops_name": None,
            "dc30": None,
            "td": None,
            "lateral": None,
            "interval_count": 0,
            "pay_pct": None,
            "high_risk_count": 0,
            "elevated_risk_count": 0,
            "cluster_id": None,
            "data_missing": True,
        }
    )

    write_json(
        os.path.join(DATA_ROOT, "wells.json"),
        {
            "generated": datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC"),
            "well_count": len(WELLS),
            "wells": wells_index,
            "notes": {
                "hobbes4": "HOBBES 4 has no data files in repository; marked data_missing.",
                "exclusions": "All statistics exclude overburden intervals via exclusion_zones.",
            },
        },
    )

    print(f"\nWrote JSON export to {DATA_ROOT}/")
    return well_metas


if __name__ == "__main__":
    main()
