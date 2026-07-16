import type { FlaggedZone } from "@/types/waterRisk";

export type WsoTier = "A" | "B" | "C";

export interface WsoCandidate {
  alias: string;
  display: string;
  rank: number;
  tier: WsoTier;
  score: number;
  depth: number;
  top: number;
  bot: number;
  mdSpan: string;
  mTVDss: number | null;
  WRCI: number | null;
  RQI: number | null;
  risk_class: string;
  flags: string[];
  isolated: boolean;
  owc_near: string | null;
  rationale: string;
}

export interface WsoScoreResult {
  score: number;
  tier: WsoTier;
  rationale: string;
}

export function scoreWsoZone(zone: FlaggedZone): WsoScoreResult {
  if (zone.isolated) {
    return {
      score: 0,
      tier: "C",
      rationale: "Mechanically isolated — lower WSO priority",
    };
  }

  if (zone.risk_class !== "Elevated" && zone.risk_class !== "High") {
    return { score: 0, tier: "C", rationale: "Below Elevated/High concern threshold" };
  }

  const flags = zone.flags ?? [];
  const owc = zone.evidence?.owc_near ?? null;
  let score = zone.risk_class === "High" ? 40 : 22;

  if (owc === "High" || flags.includes("owc_high")) score += 35;
  else if (owc === "Elevated" || flags.includes("owc_elevated")) score += 20;

  if (flags.includes("ZOI")) score += 14;
  if (flags.includes("lowres")) score += 10;
  if (flags.includes("lowfluor")) score += 8;
  if (flags.includes("low_GR")) score += 6;
  if (zone.WRCI != null) score += zone.WRCI / 4;

  let tier: WsoTier = "C";
  const owcDriver = owc === "High" || flags.includes("owc_high");
  if ((zone.risk_class === "High" || owcDriver) && score >= 55) tier = "A";
  else if (score >= 34) tier = "B";

  const parts: string[] = [];
  if (owcDriver) parts.push("OWC-proximate");
  if (flags.includes("ZOI")) parts.push("ZOI deterioration");
  if (flags.includes("lowres")) parts.push("low resistivity");
  if (zone.risk_class === "High") parts.push("High WRCI");
  else parts.push("Elevated WRCI");
  parts.push("open interval");

  return {
    score: Math.round(score * 10) / 10,
    tier,
    rationale: parts.join("; "),
  };
}

export function rankWsoCandidates(
  alias: string,
  display: string,
  zones: FlaggedZone[],
  options?: { minTier?: WsoTier; limit?: number },
): WsoCandidate[] {
  const minTier = options?.minTier ?? "B";
  const tierRank: Record<WsoTier, number> = { A: 3, B: 2, C: 1 };
  const minRank = tierRank[minTier];

  const ranked = zones
    .map((zone) => {
      const result = scoreWsoZone(zone);
      return {
        alias,
        display,
        rank: 0,
        tier: result.tier,
        score: result.score,
        depth: zone.depth,
        top: zone.top,
        bot: zone.bot,
        mdSpan: `${zone.top.toFixed(0)}–${zone.bot.toFixed(0)} m`,
        mTVDss: zone.evidence?.mTVDss ?? null,
        WRCI: zone.WRCI,
        RQI: zone.RQI,
        risk_class: zone.risk_class,
        flags: zone.flags ?? [],
        isolated: Boolean(zone.isolated),
        owc_near: zone.evidence?.owc_near ?? null,
        rationale: result.rationale,
      };
    })
    .filter((c) => tierRank[c.tier] >= minRank)
    .sort(
      (a, b) =>
        tierRank[b.tier] - tierRank[a.tier] ||
        b.score - a.score ||
        a.top - b.top,
    );

  const limit = options?.limit ?? ranked.length;
  return ranked.slice(0, limit).map((entry, index) => ({ ...entry, rank: index + 1 }));
}

export function wsoCandidatesToCsv(candidates: WsoCandidate[]): string {
  const headers = [
    "rank",
    "tier",
    "alias",
    "display",
    "md_top",
    "md_base",
    "depth_mid",
    "mTVDss",
    "risk_class",
    "WRCI",
    "RQI",
    "owc_near",
    "isolated",
    "flags",
    "score",
    "rationale",
  ];
  const rows = candidates.map((c) =>
    [
      c.rank,
      c.tier,
      c.alias,
      c.display,
      c.top.toFixed(1),
      c.bot.toFixed(1),
      c.depth.toFixed(1),
      c.mTVDss?.toFixed(2) ?? "",
      c.risk_class,
      c.WRCI?.toFixed(2) ?? "",
      c.RQI?.toFixed(3) ?? "",
      c.owc_near ?? "",
      c.isolated,
      c.flags.join("|"),
      c.score.toFixed(1),
      `"${c.rationale.replace(/"/g, '""')}"`,
    ].join(","),
  );
  return [headers.join(","), ...rows].join("\n");
}
