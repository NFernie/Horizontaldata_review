import Fuse from "fuse.js";
import type { FuseResult } from "fuse.js";
import type { AssistantResult, KeywordHit } from "@/types/assistant";
import type { CorpusChunk } from "@/types/corpus";
import { bm25Search } from "../bm25";
import { loadBm25Index, loadChunks } from "../corpusLoader";
import { buildSnippet } from "../snippets";
import { expandQuery, queryTerms } from "../synonyms";
import type { ParsedQuery } from "../types";

let fuseInstance: Fuse<CorpusChunk> | null = null;
let chunkMap: Map<string, CorpusChunk> | null = null;

async function getSearchContext(): Promise<{ fuse: Fuse<CorpusChunk>; chunkMap: Map<string, CorpusChunk> }> {
  if (!fuseInstance || !chunkMap) {
    const chunks = await loadChunks();
    chunkMap = new Map(chunks.map((chunk) => [chunk.id, chunk]));
    fuseInstance = new Fuse(chunks, {
      keys: [
        { name: "title", weight: 0.45 },
        { name: "text", weight: 0.35 },
        { name: "alias", weight: 0.15 },
        { name: "type", weight: 0.05 },
      ],
      threshold: 0.4,
      ignoreLocation: true,
      minMatchCharLength: 2,
      includeScore: true,
    });
  }
  return { fuse: fuseInstance, chunkMap: chunkMap! };
}

function mergeRankedIds(
  bm25Ids: Array<{ id: string; score: number }>,
  fuseHits: FuseResult<CorpusChunk>[],
  limit: number,
): Array<{ id: string; score: number }> {
  const scores = new Map<string, number>();

  bm25Ids.forEach((hit, index) => {
    scores.set(hit.id, (scores.get(hit.id) ?? 0) + hit.score + (limit - index) * 0.05);
  });

  fuseHits.forEach((hit, index) => {
    const fuseScore = 1 - (hit.score ?? 1);
    scores.set(hit.item.id, (scores.get(hit.item.id) ?? 0) + fuseScore + (limit - index) * 0.03);
  });

  return [...scores.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([id, score]) => ({ id, score }));
}

function toKeywordHits(
  ranked: Array<{ id: string; score: number }>,
  chunkMap: Map<string, CorpusChunk>,
  query: string,
): KeywordHit[] {
  const hits: KeywordHit[] = [];

  for (const { id, score } of ranked) {
    const chunk = chunkMap.get(id);
    if (!chunk) continue;
    hits.push({
      title: chunk.title,
      snippet: buildSnippet(chunk.text || chunk.title, query),
      score,
      source: chunk.source,
      ...(chunk.type === "interval" && chunk.alias ? { route: `/well/${chunk.alias}` } : {}),
    });
  }

  return hits;
}

export async function handleKeywordSearch(parsed: ParsedQuery): Promise<AssistantResult> {
  const expanded = expandQuery(parsed.rawQuery);
  const terms = queryTerms(parsed.rawQuery);
  const { fuse, chunkMap } = await getSearchContext();

  const bm25Index = await loadBm25Index();
  const bm25Ids = bm25Search(terms, bm25Index, 8);
  const fuseHits = fuse.search(expanded, { limit: 8 });
  const ranked = mergeRankedIds(bm25Ids, fuseHits, 5);
  const keywordHits = toKeywordHits(ranked, chunkMap, parsed.rawQuery);

  if (!keywordHits.length) {
    return {
      intent: "KEYWORD_FALLBACK",
      title: "No matches found",
      summary:
        "Try including a well name, depth (m MD), or method keyword such as WRCI, RQI, or pay summary.",
      citations: [{ label: "Corpus index", source: "corpus/chunks.jsonl" }],
    };
  }

  const lines = keywordHits.map(
    (hit, index) => `${index + 1}. **${hit.title}** — ${hit.snippet} _(score ${hit.score.toFixed(3)})_`,
  );

  const top = chunkMap.get(ranked[0].id)!;

  return {
    intent: "KEYWORD_FALLBACK",
    title: `Keyword matches (${keywordHits.length})`,
    summary: {
      Query: parsed.rawQuery,
      "Top match": keywordHits[0].title,
      Type: top.type,
    },
    keyword_hits: keywordHits,
    detail_markdown: ["# Keyword search results", "", ...lines].join("\n"),
    citations: keywordHits.map((hit) => ({
      label: hit.title,
      source: hit.source,
      route: hit.route,
    })),
  };
}

export function resetKeywordIndex(): void {
  fuseInstance = null;
  chunkMap = null;
}
