import {
  FLAG_LABELS,
  FLAG_LOW_GR,
  FLAG_LOWFLUOR_PCT,
  FLAG_LOWRES_RES_DEEP,
  OWC_BANDS_GOOD,
  OWC_RES_SUPPRESS,
  RQI_THRESHOLD,
  WRCI_ELEVATED_THRESHOLD,
  WRCI_HIGH_MIN_FLAGS,
  WRCI_HIGH_MULTI_FLAGS,
  WRCI_HIGH_THRESHOLD,
  ZOI_DROP_PCT,
  ZOI_MIN_DROPS,
} from "@/config";
import type { IntervalRecord } from "@/types/intervals";
import type { FlaggedZone } from "@/types/waterRisk";
import type { RiskClass } from "@/types/wells";
import { formatNumber, formatPercent } from "@/lib/utils";

export interface FlagEvidence {
  RQI?: number | null;
  WRCI?: number | null;
  risk_class?: RiskClass;
  flags?: string[];
  pct_ss?: number | null;
  grain_ordinal?: number | null;
  poro_class?: string | null;
  hardness_score?: number | null;
  fluor?: number | null;
  avg_GR?: number | null;
  avg_RES_DEEP?: number | null;
  mTVDss?: number | null;
  hafwl_m?: number | null;
  owc_distance_m?: number | null;
  owc_near?: string | null;
  isolated?: boolean;
}

export interface RiskExplainResult {
  depthLabel: string;
  riskClass: RiskClass;
  wrci: number | null;
  rqi: number | null;
  flagLines: string[];
  ruleSummary: string;
  owcSuppressedHigh: boolean;
  isolated: boolean;
}

function rockQualityLabel(rqi: number | null | undefined): string {
  if (rqi == null) return "unknown RQI";
  return rqi >= RQI_THRESHOLD ? `good rock RQI ${formatNumber(rqi, 2)}` : `poor rock RQI ${formatNumber(rqi, 2)}`;
}

export function evidenceFromInterval(iv: IntervalRecord): FlagEvidence {
  return {
    RQI: iv.RQI,
    WRCI: iv.WRCI,
    risk_class: iv.risk_class,
    flags: iv.flags,
    pct_ss: iv.pct_ss,
    grain_ordinal: iv.grain_ordinal,
    poro_class: iv.poro_class,
    fluor: iv.fluor,
    avg_GR: iv.log?.avg_GR,
    avg_RES_DEEP: iv.log?.avg_RES_DEEP,
    mTVDss: iv.mTVDss,
    hafwl_m: iv.hafwl_m,
    owc_distance_m: iv.owc_distance_m,
    owc_near: iv.owc_near,
    isolated: iv.isolated,
  };
}

export function evidenceFromZone(zone: FlaggedZone): FlagEvidence {
  const ev = zone.evidence;
  return {
    RQI: zone.RQI,
    WRCI: zone.WRCI,
    risk_class: zone.risk_class,
    flags: zone.flags,
    pct_ss: ev.pct_ss,
    grain_ordinal: ev.grain_ordinal,
    poro_class: ev.poro_class,
    hardness_score: ev.hardness_score,
    fluor: ev.fluor,
    avg_GR: ev.avg_GR,
    avg_RES_DEEP: ev.avg_RES_DEEP,
    mTVDss: ev.mTVDss,
    hafwl_m: ev.hafwl_m,
    owc_distance_m: ev.owc_distance_m,
    owc_near: ev.owc_near,
    isolated: zone.isolated ?? ev.isolated,
  };
}

export function explainFlag(flag: string, ev: FlagEvidence): string {
  const label = FLAG_LABELS[flag as keyof typeof FLAG_LABELS] ?? flag;
  const rqi = ev.RQI;
  const good = rqi != null && rqi >= RQI_THRESHOLD;

  switch (flag) {
    case "lowres": {
      const res = ev.avg_RES_DEEP;
      return `${label} — RES_DEEP ${formatNumber(res, 1)} Ω·m (<${FLAG_LOWRES_RES_DEEP} on ${rockQualityLabel(rqi)})`;
    }
    case "lowfluor": {
      return `${label} — fluorescence ${formatPercent(ev.fluor, 0)} (<${FLAG_LOWFLUOR_PCT}% on ${rockQualityLabel(rqi)})`;
    }
    case "low_GR": {
      return `${label} — GR ${formatNumber(ev.avg_GR, 1)} gAPI (<${FLAG_LOW_GR} on ${rockQualityLabel(rqi)})`;
    }
    case "ZOI": {
      return `${label} — petrophysical drop >${Math.round(ZOI_DROP_PCT * 100)}% vs neighbours (≥${ZOI_MIN_DROPS} metrics) with similar RQI`;
    }
    case "owc_high": {
      const dist = ev.owc_distance_m;
      const distStr = dist != null ? `${formatNumber(dist, 1)} m` : "—";
      return `${label} — OWC distance ${distStr} (<${OWC_BANDS_GOOD.high_lt} m), ${rockQualityLabel(rqi)}`;
    }
    case "owc_elevated": {
      const dist = ev.owc_distance_m;
      const distStr = dist != null ? `${formatNumber(dist, 1)} m` : "—";
      return `${label} — OWC distance ${distStr} (${OWC_BANDS_GOOD.high_lt}–${OWC_BANDS_GOOD.elevated_lt} m), ${rockQualityLabel(rqi)}`;
    }
    default:
      return good ? `${label} — flagged on good rock` : `${label}`;
  }
}

function owcSeverityTier(owcNear: string | null | undefined, resDeep: number | null | undefined): string | null {
  if (!owcNear || owcNear === "Low") return owcNear ?? null;
  if (resDeep != null && resDeep > OWC_RES_SUPPRESS) return "Low";
  return owcNear;
}

function classifyRulePath(ev: FlagEvidence): { rulePath: string; owcSuppressedHigh: boolean } {
  const wrci = ev.WRCI ?? 0;
  const flags = ev.flags ?? [];
  const hasLowres = flags.includes("lowres");
  const hasLowfluor = flags.includes("lowfluor");
  const hasLowGr = flags.includes("low_GR");
  const boolCount = [hasLowres, hasLowfluor, hasLowGr].filter(Boolean).length;
  const owcHigh = flags.includes("owc_high");
  const owcElev = flags.includes("owc_elevated");
  const hasZoi = flags.includes("ZOI");
  const resDeep = ev.avg_RES_DEEP;
  const owcNear = ev.owc_near;
  const owcSevTier = owcSeverityTier(owcNear, resDeep);
  const owcHighWrci = owcSevTier === "High";
  const redFlagCount = boolCount + (owcHigh ? 1 : 0);
  const resSuppress =
    resDeep != null && resDeep > OWC_RES_SUPPRESS;

  const highCandidate =
    redFlagCount >= WRCI_HIGH_MULTI_FLAGS ||
    (wrci >= WRCI_HIGH_THRESHOLD && (owcHighWrci || boolCount >= WRCI_HIGH_MIN_FLAGS)) ||
    (hasZoi && wrci >= WRCI_HIGH_THRESHOLD);

  if (highCandidate && !resSuppress) {
    if (redFlagCount >= WRCI_HIGH_MULTI_FLAGS) {
      return { rulePath: `≥${WRCI_HIGH_MULTI_FLAGS} red flags (${redFlagCount})`, owcSuppressedHigh: false };
    }
    if (hasZoi && wrci >= WRCI_HIGH_THRESHOLD) {
      return { rulePath: `ZOI + WRCI ≥ ${WRCI_HIGH_THRESHOLD}`, owcSuppressedHigh: false };
    }
    return { rulePath: `WRCI ≥ ${WRCI_HIGH_THRESHOLD} with qualifying flags/OWC severity`, owcSuppressedHigh: false };
  }

  if (highCandidate && resSuppress) {
    return {
      rulePath: `High criteria met but capped at Elevated — RES_DEEP ${formatNumber(resDeep, 1)} Ω·m > ${OWC_RES_SUPPRESS} Ω·m suppresses High`,
      owcSuppressedHigh: true,
    };
  }

  if (wrci >= WRCI_ELEVATED_THRESHOLD && wrci < WRCI_HIGH_THRESHOLD) {
    return { rulePath: `WRCI ${WRCI_ELEVATED_THRESHOLD}–${WRCI_HIGH_THRESHOLD}`, owcSuppressedHigh: false };
  }
  if (boolCount >= 1) {
    return { rulePath: "At least one petrophysical red flag on good rock", owcSuppressedHigh: false };
  }
  if (owcHigh || owcElev) {
    return { rulePath: "OWC proximity flag (raw tier — not suppressed for classification)", owcSuppressedHigh: false };
  }
  if (hasZoi && wrci >= WRCI_ELEVATED_THRESHOLD) {
    return { rulePath: `ZOI + WRCI ≥ ${WRCI_ELEVATED_THRESHOLD}`, owcSuppressedHigh: false };
  }

  return { rulePath: "Elevated by composite WRCI / flag rules", owcSuppressedHigh: false };
}

export function buildRiskExplanation(
  depth: number,
  top: number,
  bot: number,
  ev: FlagEvidence,
): RiskExplainResult {
  const riskClass = ev.risk_class ?? "Low";
  const flags = ev.flags ?? [];
  const { rulePath, owcSuppressedHigh } = classifyRulePath(ev);
  const flagLines = flags.length
    ? flags.map((f) => explainFlag(f, ev))
    : ["No red flags — elevated by WRCI band only"];

  const wrciStr = ev.WRCI != null ? formatNumber(ev.WRCI, 1) : "—";
  const ruleSummary = `WRCI ${wrciStr} → ${riskClass}. ${rulePath}.`;

  return {
    depthLabel: `${depth.toFixed(0)} m MD (${top.toFixed(0)}–${bot.toFixed(0)})`,
    riskClass,
    wrci: ev.WRCI ?? null,
    rqi: ev.RQI ?? null,
    flagLines,
    ruleSummary,
    owcSuppressedHigh,
    isolated: Boolean(ev.isolated),
  };
}

export function explainInterval(iv: IntervalRecord): RiskExplainResult {
  return buildRiskExplanation(iv.depth, iv.top, iv.bot, evidenceFromInterval(iv));
}

export function explainZone(zone: FlaggedZone): RiskExplainResult {
  return buildRiskExplanation(zone.depth, zone.top, zone.bot, evidenceFromZone(zone));
}

export function isExplainableRisk(risk: RiskClass | null | undefined, flags?: string[]): boolean {
  if (risk === "Elevated" || risk === "High") return true;
  return (flags?.length ?? 0) > 0;
}
