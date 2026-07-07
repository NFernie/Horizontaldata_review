/** Synonym groups for query expansion (Phase 4). */
const SYNONYM_GROUPS: string[][] = [
  ["loose", "lse", "grains", "loosegrain"],
  ["perm", "permeability", "res_sep", "separation", "deltares"],
  ["water", "risk", "wrci", "waterrisk"],
  ["rqi", "rock", "quality", "rockquality"],
  ["cuttings", "description", "sample", "interval", "mudlog", "lithology"],
  ["fluor", "fluorescence", "fluoroscopy"],
  ["spearman", "correlation", "rho"],
  ["jaccard", "analog", "similarity"],
  ["pay", "matching"],
];

export function expandQuery(query: string): string {
  const lower = query.toLowerCase();
  const tokens = lower.split(/[^a-z0-9]+/).filter((token) => token.length >= 2);
  const additions = new Set<string>();

  for (const token of tokens) {
    for (const group of SYNONYM_GROUPS) {
      if (group.some((term) => tokenMatchesTerm(token, term))) {
        group.forEach((term) => additions.add(term));
      }
    }
  }

  if (!additions.size) return query;
  return `${query} ${[...additions].join(" ")}`;
}

function tokenMatchesTerm(token: string, term: string): boolean {
  if (token === term) return true;
  if (token.length >= 3 && term.startsWith(token)) return true;
  if (term.length >= 3 && token.startsWith(term)) return true;
  return false;
}

export function queryTerms(query: string): string[] {
  const expanded = expandQuery(query).toLowerCase();
  return [...new Set(expanded.split(/[^a-z0-9]+/).filter((t) => t.length > 1))];
}
