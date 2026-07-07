import type { CorpusWellEntry } from "@/types/corpus";

export interface WellMatch {
  alias: string;
  display: string;
}

const TOKEN_ABBREVIATIONS: Array<{ pattern: RegExp; alias: string }> = [
  { pattern: /\bjena\s*31\s*dw1\b/i, alias: "JENA31DW1" },
  { pattern: /\bjena31dw1\b/i, alias: "JENA31DW1" },
  { pattern: /\bj31dw1\b/i, alias: "JENA31DW1" },
  { pattern: /\bjena\s*31\b/i, alias: "JENA31" },
  { pattern: /\bjena31\b/i, alias: "JENA31" },
  { pattern: /\bj31\b/i, alias: "JENA31" },
  { pattern: /\bjena\b/i, alias: "JENA31" },
];

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

  for (const { pattern, alias } of TOKEN_ABBREVIATIONS) {
    if (pattern.test(query)) {
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
