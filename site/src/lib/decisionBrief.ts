import { JENA31_DUAL_ALIAS } from "@/config";
import { getCosineScore } from "@/lib/clusterAnalogs";
import { downloadTextFile } from "@/lib/download";
import { getJaccardScore } from "@/lib/jaccardRanking";
import type { ClustersPayload, JaccardPayload, KsPayload } from "@/types/stats";
import type { WaterRiskPayload } from "@/types/waterRisk";
import type { WellRecord, WellsPayload } from "@/types/wells";
import {
  rankWsoCandidates,
  type WsoCandidate,
  wsoCandidatesToCsv,
} from "@/lib/wsoCandidates";

export const JENA_LATERALS = ["JENA31", "JENA31DW1"] as const;
export type JenaLateralAlias = (typeof JENA_LATERALS)[number];

/** KS #2 for JENA31 — preferred drill analog over HOBBES5 (low pay, cluster 3). */
export const JENA31_KS_ANALOG = "BIALA20";
/** Cluster cosine lead for JENA31 drill benchmark. */
export const JENA31_CLUSTER_ANALOG = "FROSTILLICUS2";
export const JENA31DW1_KS_ANALOG = "FROSTILLICUS2";
export const JENA31DW1_CLUSTER_ANALOG = "MCKINLAY23";
export const JENA_DUAL_ANALOG = "STIMPEE6";

export interface WaterRiskBurden {
  openElevatedHigh: number;
  owcProximate: number;
  highOpen: number;
  tierA: number;
  tierB: number;
  concernPer100m: number;
}

export interface AnalogSimilarity {
  jaccard: number | null;
  cosine: number | null;
  ksMeanP: number | null;
}

export interface AnalogBenchmarkRow {
  alias: string;
  display: string;
  role: "focus" | "analog";
  payPct: number | null;
  payRank: number | null;
  payRankTotal: number;
  concernIntervals: number;
  concernRank: number | null;
  concernRankTotal: number;
  openConcernZones: number;
  owcProximate: number;
  concernPer100m: number;
  lateralM: number | null;
  clusterId: number | null;
  similarityToJena31?: AnalogSimilarity;
  similarityToJena31dw1?: AnalogSimilarity;
  similarityToDual?: AnalogSimilarity;
}

export interface PortfolioMedians {
  payPct: number;
  concernIntervals: number;
}

export interface LateralDrillAssessment {
  focusAlias: JenaLateralAlias | typeof JENA31_DUAL_ALIAS;
  focusDisplay: string;
  ksAnalogAlias: string;
  clusterAnalogAlias: string;
  verdict: string;
}

export interface DecisionBriefQuestion {
  id: "q1" | "q2" | "q3";
  title: string;
  question: string;
  answerBullets: string[];
  caveats: string[];
}

export interface DecisionBriefPayload {
  generated: string | null;
  wells: Record<string, WellRecord | undefined>;
  burden: Record<JenaLateralAlias | typeof JENA31_DUAL_ALIAS, WaterRiskBurden>;
  portfolioMedians: PortfolioMedians;
  analogTable: AnalogBenchmarkRow[];
  lateralAssessments: LateralDrillAssessment[];
  jaccardFeature: number | null;
  jaccardDepthBinned: number | null;
  ksMeanPBetweenLaterals: number | null;
  clusterCosineBetweenLaterals: number | null;
  wsoByLateral: Record<JenaLateralAlias, WsoCandidate[]>;
  questions: DecisionBriefQuestion[];
}

export interface DecisionBriefInputs {
  wells: WellsPayload;
  waterRisk: Record<JenaLateralAlias | typeof JENA31_DUAL_ALIAS, WaterRiskPayload>;
  jaccard: JaccardPayload;
  ks: KsPayload;
  clusters: ClustersPayload;
}

function isOwcProximate(zone: WaterRiskPayload["flagged_zones"][number]): boolean {
  const owc = zone.evidence?.owc_near;
  const flags = zone.flags ?? [];
  return (
    owc === "High" ||
    owc === "Elevated" ||
    flags.includes("owc_high") ||
    flags.includes("owc_elevated")
  );
}

function isOpenConcern(zone: WaterRiskPayload["flagged_zones"][number]): boolean {
  return (
    !zone.isolated &&
    !zone.evidence?.isolated &&
    (zone.risk_class === "Elevated" || zone.risk_class === "High")
  );
}

export function computeWaterRiskBurden(
  zones: WaterRiskPayload["flagged_zones"],
  wsoCandidates: WsoCandidate[],
  lateralM?: number | null,
): WaterRiskBurden {
  const open = zones.filter(isOpenConcern);
  const lat = lateralM && lateralM > 0 ? lateralM : null;
  return {
    openElevatedHigh: open.length,
    owcProximate: open.filter(isOwcProximate).length,
    highOpen: open.filter((z) => z.risk_class === "High").length,
    tierA: wsoCandidates.filter((c) => c.tier === "A").length,
    tierB: wsoCandidates.filter((c) => c.tier === "B").length,
    concernPer100m: lat ? (open.length / lat) * 100 : 0,
  };
}

function ksMeanPBetween(ks: KsPayload, left: string, right: string): number | null {
  const row = ks[left]?.vs_analogs?.[right];
  if (!row) return null;
  const pValues = Object.values(row).map((cell) => cell.p_value);
  if (!pValues.length) return null;
  return pValues.reduce((sum, v) => sum + v, 0) / pValues.length;
}

function wellMap(wells: WellsPayload): Record<string, WellRecord> {
  return Object.fromEntries(wells.wells.map((w) => [w.alias, w]));
}

function activeWells(wells: WellsPayload): WellRecord[] {
  return wells.wells.filter((w) => !w.data_missing);
}

function concernIntervals(well: WellRecord): number {
  return well.elevated_risk_count + well.high_risk_count;
}

function rankBy<T>(
  items: T[],
  score: (item: T) => number,
  match: (item: T) => boolean,
): { rank: number; total: number } {
  const sorted = [...items].sort((a, b) => score(b) - score(a));
  const rank = sorted.findIndex(match) + 1;
  return { rank: rank || sorted.length, total: sorted.length };
}

function portfolioMedians(wells: WellsPayload): PortfolioMedians {
  const active = activeWells(wells);
  const pays = active.map((w) => w.pay_pct).filter((p): p is number => p != null);
  const concerns = active.map(concernIntervals);
  const median = (values: number[]) => {
    if (!values.length) return 0;
    const sorted = [...values].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 ? sorted[mid]! : (sorted[mid - 1]! + sorted[mid]!) / 2;
  };
  return { payPct: median(pays), concernIntervals: median(concerns) };
}

function analogSimilarity(
  focus: string,
  analog: string,
  jaccard: JaccardPayload,
  clusters: ClustersPayload,
  ks: KsPayload,
): AnalogSimilarity {
  return {
    jaccard: getJaccardScore(focus, analog, jaccard),
    cosine: getCosineScore(focus, analog, clusters),
    ksMeanP: ksMeanPBetween(ks, focus, analog),
  };
}

function openConcernFromWaterRisk(
  waterRisk: Record<string, WaterRiskPayload>,
  alias: string,
): { open: number; owc: number } {
  const zones = waterRisk[alias]?.flagged_zones ?? [];
  const open = zones.filter(isOpenConcern);
  return { open: open.length, owc: open.filter(isOwcProximate).length };
}

export function buildAnalogTable(inputs: DecisionBriefInputs): AnalogBenchmarkRow[] {
  const wellBy = wellMap(inputs.wells);
  const active = activeWells(inputs.wells);
  const tableAliases = [
    "JENA31",
    "JENA31DW1",
    JENA31_DUAL_ALIAS,
    JENA31_KS_ANALOG,
    JENA31_CLUSTER_ANALOG,
    JENA31DW1_KS_ANALOG,
    JENA31DW1_CLUSTER_ANALOG,
    JENA_DUAL_ANALOG,
  ];
  const unique = [...new Set(tableAliases)];

  return unique.map((alias) => {
    const well = wellBy[alias];
    const { open, owc } = openConcernFromWaterRisk(inputs.waterRisk, alias);
    const lat = well?.lateral ?? null;
    const payRank = well?.pay_pct != null
      ? rankBy(active, (w) => w.pay_pct ?? 0, (w) => w.alias === alias)
      : { rank: 0, total: active.length };
    const concernRank = well
      ? rankBy(active, concernIntervals, (w) => w.alias === alias)
      : { rank: 0, total: active.length };

    const row: AnalogBenchmarkRow = {
      alias,
      display: well?.display ?? alias,
      role:
        alias === "JENA31" || alias === "JENA31DW1" || alias === JENA31_DUAL_ALIAS
          ? "focus"
          : "analog",
      payPct: well?.pay_pct ?? null,
      payRank: well?.pay_pct != null ? payRank.rank : null,
      payRankTotal: payRank.total,
      concernIntervals: well ? concernIntervals(well) : 0,
      concernRank: well ? concernRank.rank : null,
      concernRankTotal: concernRank.total,
      openConcernZones: open,
      owcProximate: owc,
      concernPer100m: lat && lat > 0 ? (open / lat) * 100 : 0,
      lateralM: lat,
      clusterId: well?.cluster_id ?? null,
    };

    if (alias !== "JENA31") {
      row.similarityToJena31 = analogSimilarity(
        "JENA31",
        alias,
        inputs.jaccard,
        inputs.clusters,
        inputs.ks,
      );
    }
    if (alias !== "JENA31DW1") {
      row.similarityToJena31dw1 = analogSimilarity(
        "JENA31DW1",
        alias,
        inputs.jaccard,
        inputs.clusters,
        inputs.ks,
      );
    }
    if (alias !== JENA31_DUAL_ALIAS) {
      row.similarityToDual = analogSimilarity(
        JENA31_DUAL_ALIAS,
        alias,
        inputs.jaccard,
        inputs.clusters,
        inputs.ks,
      );
    }
    return row;
  });
}

function formatTopWso(candidates: WsoCandidate[], limit = 3): string {
  if (!candidates.length) return "none ranked Tier A/B";
  return candidates
    .slice(0, limit)
    .map((c) => `${c.mdSpan} m (Tier ${c.tier}, score ${c.score.toFixed(1)})`)
    .join("; ");
}

function fmtRank(rank: number | null, total: number): string {
  return rank != null ? `#${rank}/${total}` : "—";
}

export function buildDecisionBrief(inputs: DecisionBriefInputs): DecisionBriefPayload {
  const wellByAlias = wellMap(inputs.wells);
  const medians = portfolioMedians(inputs.wells);
  const wsoByLateral = {
    JENA31: rankWsoCandidates(
      "JENA31",
      wellByAlias.JENA31?.display ?? "JENA 31",
      inputs.waterRisk.JENA31.flagged_zones,
    ),
    JENA31DW1: rankWsoCandidates(
      "JENA31DW1",
      wellByAlias.JENA31DW1?.display ?? "JENA 31DW1",
      inputs.waterRisk.JENA31DW1.flagged_zones,
    ),
  };

  const burden = {
    JENA31: computeWaterRiskBurden(
      inputs.waterRisk.JENA31.flagged_zones,
      wsoByLateral.JENA31,
      wellByAlias.JENA31?.lateral,
    ),
    JENA31DW1: computeWaterRiskBurden(
      inputs.waterRisk.JENA31DW1.flagged_zones,
      wsoByLateral.JENA31DW1,
      wellByAlias.JENA31DW1?.lateral,
    ),
    JENA31_DUAL: computeWaterRiskBurden(
      inputs.waterRisk.JENA31_DUAL.flagged_zones,
      [...wsoByLateral.JENA31, ...wsoByLateral.JENA31DW1],
      wellByAlias[JENA31_DUAL_ALIAS]?.lateral,
    ),
  };

  const analogTable = buildAnalogTable(inputs);
  const row = (alias: string) => analogTable.find((r) => r.alias === alias);

  const j31 = wellByAlias.JENA31;
  const jdw1 = wellByAlias.JENA31DW1;
  const dual = wellByAlias[JENA31_DUAL_ALIAS];
  const biala = row(JENA31_KS_ANALOG);
  const frostJ31 = row(JENA31_CLUSTER_ANALOG);
  const frostDw = row(JENA31DW1_KS_ANALOG);
  const mck23 = row(JENA31DW1_CLUSTER_ANALOG);
  const stimpee = row(JENA_DUAL_ANALOG);

  const jaccardFeature = getJaccardScore("JENA31", "JENA31DW1", inputs.jaccard);
  const jIdx = inputs.jaccard.aliases.indexOf("JENA31");
  const dwIdx = inputs.jaccard.aliases.indexOf("JENA31DW1");
  const jaccardDepthBinned =
    jIdx >= 0 && dwIdx >= 0
      ? (inputs.jaccard.depth_binned_matrix?.[jIdx]?.[dwIdx] ?? null)
      : null;

  const ksMeanPBetweenLaterals = ksMeanPBetween(inputs.ks, "JENA31", "JENA31DW1");
  const clusterCosineBetweenLaterals = getCosineScore(
    "JENA31",
    "JENA31DW1",
    inputs.clusters,
  );

  const lateralAssessments: LateralDrillAssessment[] = [
    {
      focusAlias: "JENA31",
      focusDisplay: j31?.display ?? "JENA 31",
      ksAnalogAlias: JENA31_KS_ANALOG,
      clusterAnalogAlias: JENA31_CLUSTER_ANALOG,
      verdict:
        "Acceptable if pre-drill thesis accepted OWC-proximate Elevated concern in exchange for top-quartile pay — not a low-risk lateral.",
    },
    {
      focusAlias: "JENA31DW1",
      focusDisplay: jdw1?.display ?? "JENA 31DW1",
      ksAnalogAlias: JENA31DW1_KS_ANALOG,
      clusterAnalogAlias: JENA31DW1_CLUSTER_ANALOG,
      verdict:
        "Strong drill case — solid pay with among the lowest concern density in the portfolio; resembles STIMPEE6 more than Frostillicus.",
    },
    {
      focusAlias: JENA31_DUAL_ALIAS,
      focusDisplay: dual?.display ?? "JENA 31 Dual Lateral",
      ksAnalogAlias: JENA_DUAL_ANALOG,
      clusterAnalogAlias: JENA_DUAL_ANALOG,
      verdict:
        "Acceptable commingled program if stakeholders expected blending a concern-heavy lateral (31) with a cleaner one (31DW1) — dual totals overstate similarity to STIMPEE6.",
    },
  ];

  const sim = (focus: string, analog: string) =>
    analogSimilarity(focus, analog, inputs.jaccard, inputs.clusters, inputs.ks);

  const j31Biala = sim("JENA31", JENA31_KS_ANALOG);
  const j31Frost = sim("JENA31", JENA31_CLUSTER_ANALOG);
  const dwMck = sim("JENA31DW1", JENA31DW1_CLUSTER_ANALOG);
  const dualStim = sim(JENA31_DUAL_ALIAS, JENA_DUAL_ANALOG);

  const questions: DecisionBriefQuestion[] = [
    {
      id: "q1",
      title: "Drill acceptability",
      question:
        "Given cuttings/log evidence and analog similarity, was drilling Jena an acceptable decision?",
      answerBullets: [
        `Portfolio context: median pay ${medians.payPct.toFixed(1)}% · median concern ${medians.concernIntervals.toFixed(0)} intervals.`,
        `JENA 31 — pay ${j31?.pay_pct?.toFixed(1) ?? "—"}% (${fmtRank(row("JENA31")?.payRank ?? null, row("JENA31")?.payRankTotal ?? 24)}); ${burden.JENA31.openElevatedHigh} open concern zones (${burden.JENA31.concernPer100m.toFixed(2)}/100 m; ${burden.JENA31.owcProximate} OWC-proximate). vs ${biala?.display ?? "BIALA 20"} (KS #2): pay ${biala?.payPct?.toFixed(1) ?? "—"}%, density ${biala?.concernPer100m.toFixed(2)}/100 m. Cluster lead ${frostJ31?.display ?? "FROSTILLICUS 2"} (cos ${j31Frost.cosine?.toFixed(3) ?? "—"}) shows high pay can coexist with heavy flags — Jena 31 is far lighter (${burden.JENA31.concernPer100m.toFixed(2)} vs ${frostJ31?.concernPer100m.toFixed(2)}/100 m).`,
        `JENA 31DW1 — pay ${jdw1?.pay_pct?.toFixed(1) ?? "—"}% (${fmtRank(row("JENA31DW1")?.payRank ?? null, row("JENA31DW1")?.payRankTotal ?? 24)}); ${burden.JENA31DW1.openElevatedHigh} open zones (${burden.JENA31DW1.concernPer100m.toFixed(2)}/100 m). vs ${frostDw?.display ?? "FROSTILLICUS 2"} (KS): concern ${frostDw?.concernIntervals ?? "—"} vs ${jdw1 ? concernIntervals(jdw1) : "—"} intervals; vs ${mck23?.display ?? "MCKINLAY 23"} (cluster, cos ${dwMck.cosine?.toFixed(3) ?? "—"}). Cleanest drill case of the two laterals.`,
        `JENA 31 Dual — pay ${dual?.pay_pct?.toFixed(1) ?? "—"}% (${fmtRank(row(JENA31_DUAL_ALIAS)?.payRank ?? null, row(JENA31_DUAL_ALIAS)?.payRankTotal ?? 24)}); ${burden.JENA31_DUAL.openElevatedHigh} open zones (${burden.JENA31_DUAL.concernPer100m.toFixed(2)}/100 m). vs ${stimpee?.display ?? "STIMPEE 6"}: pay ${stimpee?.payPct?.toFixed(1) ?? "—"}%, density ${stimpee?.concernPer100m.toFixed(2)}/100 m (cos ${dualStim.cosine?.toFixed(3) ?? "—"}, Jaccard ${dualStim.jaccard?.toFixed(3) ?? "—"}) — best whole-asset analog, but dual carries ~${(burden.JENA31_DUAL.concernPer100m / (stimpee?.concernPer100m || 1)).toFixed(1)}× more open concern per metre.`,
        `Asymmetric acceptability: 31DW1 resembles a well we would drill again; 31 required explicit acceptance of OWC-proximate Elevated flags; commingling merges both.`,
      ],
      caveats: [
        "Cuttings, mudlog, and wireline only — no production, water cut, or EUR.",
        "Statistical analog similarity does not guarantee outcomes; KS still shows distinguishable distributions.",
        "Drill acceptability here is separate from WSO intervention planning (Question 3).",
      ],
    },
    {
      id: "q2",
      title: "Lateral similarity",
      question:
        "Are JENA 31 and JENA 31DW1 similar enough to each other — and to portfolio analogs — to share intervention logic?",
      answerBullets: [
        `Feature-set Jaccard (JENA 31 ↔ 31DW1): ${jaccardFeature?.toFixed(3) ?? "—"}; depth-binned: ${jaccardDepthBinned?.toFixed(3) ?? "—"}.`,
        `KS mean p between laterals: ${ksMeanPBetweenLaterals?.toFixed(3) ?? "—"} — property distributions are statistically distinguishable.`,
        `Cluster cosine between laterals: ${clusterCosineBetweenLaterals?.toFixed(3) ?? "—"} — aggregate petrophysical vectors diverge despite shared cluster ID.`,
        `Do not share intervention logic blindly: JENA 31 ↔ ${biala?.display} (KS, cos ${j31Biala.cosine?.toFixed(3) ?? "—"}); 31DW1 ↔ ${mck23?.display} (cluster, cos ${dwMck.cosine?.toFixed(3) ?? "—"}); dual ↔ ${stimpee?.display} (cos ${dualStim.cosine?.toFixed(3) ?? "—"}).`,
      ],
      caveats: [
        "Jaccard compares binary feature presence; KS tests continuous property distributions — read both.",
        "Executive compare dropdowns use cluster cosine; Jaccard rankings appear on /compare.",
        "HOBBES5 is KS #1 for JENA 31 but is a poor drill analog (28.8% pay, cluster 3) — BIALA 20 used instead.",
      ],
    },
    {
      id: "q3",
      title: "WSO shortlist",
      question:
        "Where should water shut-off (WSO) be prioritised on each open lateral interval?",
      answerBullets: [
        `JENA 31: ${burden.JENA31.tierA} Tier A and ${burden.JENA31.tierB} Tier B open windows (${burden.JENA31.openElevatedHigh} Elevated/High; ${burden.JENA31.owcProximate} OWC-proximate). Top: ${formatTopWso(wsoByLateral.JENA31)}.`,
        `JENA 31DW1: ${burden.JENA31DW1.tierA} Tier A and ${burden.JENA31DW1.tierB} Tier B (${burden.JENA31DW1.openElevatedHigh} Elevated/High; ${burden.JENA31DW1.owcProximate} OWC-proximate). Top: ${formatTopWso(wsoByLateral.JENA31DW1)}.`,
        `Burden is asymmetric: JENA 31 carries ${burden.JENA31.openElevatedHigh} open concern windows vs ${burden.JENA31DW1.openElevatedHigh} on 31DW1 — commingled totals mask per-lateral intervention needs.`,
      ],
      caveats: [
        "Tier A/B scoring weights OWC proximity, ZOI, and WRCI; isolated zones are deprioritised.",
        "WSO candidacy is advisory; confirm with completion geometry and field logs.",
        "No rate or water-cut data — flags indicate cuttings-based concern, not proven water production.",
      ],
    },
  ];

  return {
    generated: inputs.wells.generated ?? null,
    wells: {
      JENA31: j31,
      JENA31DW1: jdw1,
      JENA31_DUAL: dual,
    },
    burden,
    portfolioMedians: medians,
    analogTable,
    lateralAssessments,
    jaccardFeature,
    jaccardDepthBinned,
    ksMeanPBetweenLaterals,
    clusterCosineBetweenLaterals,
    wsoByLateral,
    questions,
  };
}

export function buildWsoExportJson(
  brief: DecisionBriefPayload,
): Record<string, unknown> {
  return {
    generated: brief.generated,
    laterals: JENA_LATERALS.map((alias) => ({
      alias,
      display: brief.wells[alias]?.display ?? alias,
      candidates: brief.wsoByLateral[alias],
    })),
  };
}

export function downloadWsoCsv(alias: JenaLateralAlias, brief: DecisionBriefPayload): void {
  const candidates = brief.wsoByLateral[alias];
  downloadTextFile(`wso_candidates_${alias.toLowerCase()}.csv`, wsoCandidatesToCsv(candidates));
}

/** Executive one-paragraph answer for markdown export only — not shown on site. */
export function buildExecutiveAnswerParagraph(brief: DecisionBriefPayload): string {
  const j31 = brief.burden.JENA31;
  const jdw1 = brief.burden.JENA31DW1;
  const dual = brief.burden.JENA31_DUAL;
  const stimpee = brief.analogTable.find((r) => r.alias === JENA_DUAL_ANALOG);
  const frost = brief.analogTable.find((r) => r.alias === JENA31_CLUSTER_ANALOG);

  return (
    `On static evidence, drilling Jena was geologically acceptable: pay is top-quartile ` +
    `(${brief.wells.JENA31?.pay_pct?.toFixed(1) ?? "—"}% / ${brief.wells.JENA31DW1?.pay_pct?.toFixed(1) ?? "—"}% / ${brief.wells.JENA31_DUAL?.pay_pct?.toFixed(1) ?? "—"}% merged), ` +
    `and the commingled asset most resembles ${stimpee?.display ?? "STIMPEE 6"} — similar pay, cluster 1, cosine ${stimpee?.similarityToDual?.cosine?.toFixed(3) ?? "—"}. ` +
    `JENA 31DW1 alone looks like a well we would happily drill again (concern density ${jdw1.concernPer100m.toFixed(2)}/100 m). ` +
    `JENA 31 alone is acceptable only if the pre-drill thesis explicitly accepted OWC-proximate elevated concern ` +
    `(${j31.owcProximate}/${j31.openElevatedHigh} open zones OWC-proximate) in exchange for exceptional pay — ` +
    `the pattern is heavy but far below ${frost?.display ?? "FROSTILLICUS 2"} (${frost?.concernPer100m.toFixed(2) ?? "—"}/100 m). ` +
    `The dual-lateral program is acceptable if stakeholders understood commingling would merge a clean bore with a concern-heavy one — ` +
    `merged density ${dual.concernPer100m.toFixed(2)}/100 m vs ${stimpee?.concernPer100m.toFixed(2) ?? "—"} for ${stimpee?.display ?? "STIMPEE 6"}. ` +
    `BIALA 20 (KS #2) is the preferred JENA 31 property analog — not HOBBES5 (low pay, cluster 3).`
  );
}
