import { queryTerms } from "./synonyms";

export function highlightSnippet(text: string, terms: string[], radius = 90): string {
  const lower = text.toLowerCase();
  let bestIndex = -1;
  let bestTerm = "";

  for (const term of terms) {
    const idx = lower.indexOf(term);
    if (idx >= 0 && (bestIndex < 0 || idx < bestIndex)) {
      bestIndex = idx;
      bestTerm = term;
    }
  }

  const slice =
    bestIndex >= 0
      ? text.slice(Math.max(0, bestIndex - radius), Math.min(text.length, bestIndex + bestTerm.length + radius))
      : text.slice(0, radius * 2);

  const prefix = bestIndex > radius ? "…" : "";
  const suffix = bestIndex >= 0 && bestIndex + bestTerm.length + radius < text.length ? "…" : "";

  let highlighted = slice;
  for (const term of [...terms].sort((a, b) => b.length - a.length)) {
    if (!term) continue;
    const pattern = new RegExp(`(${escapeRegExp(term)})`, "gi");
    highlighted = highlighted.replace(pattern, "**$1**");
  }

  return `${prefix}${highlighted}${suffix}`;
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function buildSnippet(text: string, query: string): string {
  return highlightSnippet(text, queryTerms(query));
}
