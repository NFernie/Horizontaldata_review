export interface Bm25Document {
  id: string;
  dl: number;
  tf: Record<string, number>;
}

export interface Bm25SearchIndex {
  k1: number;
  b: number;
  avg_dl: number;
  document_count: number;
  idf: Record<string, number>;
  documents: Bm25Document[];
}

export interface Bm25Hit {
  id: string;
  score: number;
}

const K1 = 1.5;
const B = 0.75;

export function bm25Search(
  queryTerms: string[],
  index: Bm25SearchIndex,
  limit = 5,
): Bm25Hit[] {
  if (!queryTerms.length) return [];

  const scores = new Map<string, number>();

  for (const doc of index.documents) {
    let score = 0;
    for (const term of queryTerms) {
      const tf = doc.tf[term] ?? 0;
      if (!tf) continue;
      const idf = index.idf[term] ?? 0;
      const denom = tf + K1 * (1 - B + (B * doc.dl) / index.avg_dl);
      score += idf * ((tf * (K1 + 1)) / denom);
    }
    if (score > 0) scores.set(doc.id, score);
  }

  return [...scores.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([id, score]) => ({ id, score }));
}
