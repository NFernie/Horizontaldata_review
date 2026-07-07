import type { CorpusWellEntry } from "@/types/corpus";

export interface WellMatch {
  alias: string;
  display: string;
}

const ABBREVIATIONS: Record<string, string> = {
  j31: "JENA31",
  j31dw1: "JENA31DW1",
  jena31: "JENA31",
  jena31dw1: "JENA31DW1",
};

function normalizeToken(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

export function resolveWell(query: string, wells: CorpusWellEntry[]): WellMatch | null {
  const lower = query.toLowerCase();
  const compact = normalizeToken(query);

  const sorted = [...wells].sort((a, b) => b.display.length - a.display.length);

  for (const well of sorted) {
    const displayLower = well.display.toLowerCase();
    const aliasLower = well.alias.toLowerCase();
    const displayCompact = normalizeToken(well.display);
    const aliasCompact = normalizeToken(well.alias);

    if (lower.includes(displayLower)) {
      return { alias: well.alias, display: well.display };
    }
    if (lower.includes(aliasLower)) {
      return { alias: well.alias, display: well.display };
    }
    if (compact.includes(displayCompact) || compact.includes(aliasCompact)) {
      return { alias: well.alias, display: well.display };
    }
  }

  const abbrevEntries = Object.entries(ABBREVIATIONS).sort(
    (a, b) => b[0].length - a[0].length,
  );
  for (const [abbrev, alias] of abbrevEntries) {
    if (compact.includes(abbrev)) {
      const well = wells.find((w) => w.alias === alias);
      if (well) {
        return { alias: well.alias, display: well.display };
      }
    }
  }

  return null;
}

export function stripWellTokens(query: string, well: WellMatch): string {
  let stripped = query;
  const patterns = [
    well.display,
    well.alias,
    well.display.replace(/\s+/g, ""),
    well.alias.replace(/\s+/g, ""),
  ];
  for (const pattern of patterns) {
    stripped = stripped.replace(new RegExp(pattern, "gi"), " ");
  }
  return stripped.replace(/\s+/g, " ").trim();
}
