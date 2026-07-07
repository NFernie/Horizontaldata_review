import Fuse from "fuse.js";
import type { AssistantResult } from "@/types/assistant";
import type { CorpusChunk } from "@/types/corpus";
import type { ParsedQuery } from "../types";
import { loadChunks } from "../corpusLoader";

let fuseInstance: Fuse<CorpusChunk> | null = null;

async function getFuse(): Promise<Fuse<CorpusChunk>> {
  if (!fuseInstance) {
    const chunks = await loadChunks();
    fuseInstance = new Fuse(chunks, {
      keys: ["title", "text"],
      threshold: 0.35,
      ignoreLocation: true,
      minMatchCharLength: 3,
    });
  }
  return fuseInstance;
}

export async function handleKeywordSearch(parsed: ParsedQuery): Promise<AssistantResult> {
  const fuse = await getFuse();
  const hits = fuse.search(parsed.rawQuery, { limit: 5 });

  if (!hits.length) {
    return {
      intent: "KEYWORD_FALLBACK",
      title: "No matches found",
      summary: "Try including a well name, depth (m MD), or method keyword such as WRCI or pay summary.",
      citations: [{ label: "Corpus index", source: "corpus/chunks.jsonl" }],
    };
  }

  const lines = hits.map(
    (hit, index) =>
      `${index + 1}. **${hit.item.title}** (${hit.item.type}, score ${hit.score?.toFixed(3) ?? "—"})`,
  );

  const top = hits[0].item;
  return {
    intent: "KEYWORD_FALLBACK",
    title: `Keyword matches (${hits.length})`,
    summary: {
      Query: parsed.rawQuery,
      "Top match": top.title,
      Type: top.type,
    },
    detail_markdown: [
      `# Keyword search results`,
      "",
      ...lines,
      "",
      "## Top match detail",
      "",
      top.detail_markdown ?? top.text,
    ].join("\n"),
    citations: hits.map((hit) => ({
      label: hit.item.title,
      source: hit.item.source,
      route:
        hit.item.type === "interval" && hit.item.alias
          ? `/well/${hit.item.alias}`
          : undefined,
    })),
  };
}

export function resetKeywordIndex(): void {
  fuseInstance = null;
}
