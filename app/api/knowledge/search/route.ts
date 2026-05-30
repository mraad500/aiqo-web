// AiQo knowledge search — backs the `searchKnowledge` OpenAI Action.
//
// Keyword search over the public knowledge JSON served from /ai/*.json.
// No external dependencies, no user data, no LLM calls. Reads the same files
// that are served to clients (single source of truth), scores them against the
// query, and returns the top chunks with a citable `source`.
//
// GET /api/knowledge/search?q=...&limit=5

export const dynamic = "force-dynamic";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "content-type",
} as const;

interface Chunk {
  title: string;
  body: string;
  source: string;
}

const STOP = new Set([
  "the", "a", "an", "of", "to", "is", "are", "in", "on", "for", "and", "or",
  "what", "how", "do", "does", "can", "i", "my", "it", "with", "about", "me",
]);

function tokenize(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter((t) => t.length > 1 && !STOP.has(t));
}

// Turn the served JSON files into flat, searchable chunks.
async function loadChunks(origin: string): Promise<Chunk[]> {
  const get = async (path: string): Promise<unknown> => {
    try {
      const res = await fetch(`${origin}${path}`, { cache: "no-store" });
      if (!res.ok) return null;
      return await res.json();
    } catch {
      return null;
    }
  };

  const [info, features, pricing, captain, glossary, faq] = await Promise.all([
    get("/ai/info.json"),
    get("/ai/features.json"),
    get("/ai/pricing.json"),
    get("/ai/captain.json"),
    get("/ai/glossary.json"),
    get("/ai/faq.json"),
  ]);

  const chunks: Chunk[] = [];
  const j = (v: unknown) => (typeof v === "object" && v !== null ? (v as Record<string, unknown>) : {});

  const i = j(info);
  if (i.name) {
    chunks.push({
      title: `${i.name}: ${i.tagline ?? ""}`.trim(),
      body: `${i.description ?? ""} Category: ${i.category ?? ""}. Platforms: ${(i.platforms as string[] | undefined)?.join(", ") ?? ""}. ${i.privacySummary ?? ""}`,
      source: "AIQO_KNOWLEDGE_BASE.md (info.json)",
    });
  }

  for (const f of (j(features).features as Record<string, unknown>[] | undefined) ?? []) {
    chunks.push({
      title: `Feature: ${f.name} (${f.minTier} tier)`,
      body: `${f.summary} Minimum tier: ${f.minTier}.`,
      source: `AIQO_FEATURES.md#${f.id}`,
    });
  }

  for (const t of (j(pricing).tiers as Record<string, unknown>[] | undefined) ?? []) {
    chunks.push({
      title: `Pricing: ${t.name}${t.priceMonthlyUsd ? ` — $${t.priceMonthlyUsd}/mo` : " (free)"}`,
      body: `${t.tagline ?? ""} Includes: ${(t.highlights as string[] | undefined)?.join("; ") ?? ""}`,
      source: "AIQO_FAQ.md (pricing.json)",
    });
  }

  const c = j(captain);
  if (c.name) {
    chunks.push({
      title: `${c.name} — ${c.role}`,
      body: `${c.personality ?? ""} Dialect: ${c.dialect ?? ""}. Capabilities: ${(c.capabilities as string[] | undefined)?.join("; ") ?? ""}. Safety: ${c.safety ?? ""}`,
      source: "CAPTAIN_HAMMOUDI_PROFILE.md (captain.json)",
    });
  }

  for (const term of (j(glossary).terms as Record<string, unknown>[] | undefined) ?? []) {
    chunks.push({
      title: `Glossary: ${term.term}`,
      body: `${term.definition}`,
      source: "AIQO_GLOSSARY.md",
    });
  }

  for (const entry of (j(faq).faq as Record<string, unknown>[] | undefined) ?? []) {
    chunks.push({
      title: `FAQ: ${entry.question}`,
      body: `${entry.answer}`,
      source: `AIQO_FAQ.md#${entry.category ?? "faq"}`,
    });
  }

  return chunks;
}

function score(chunk: Chunk, terms: string[]): number {
  if (terms.length === 0) return 0;
  const title = chunk.title.toLowerCase();
  const body = chunk.body.toLowerCase();
  let s = 0;
  for (const term of terms) {
    if (title.includes(term)) s += 3;
    const matches = body.split(term).length - 1;
    s += matches;
  }
  return s / terms.length;
}

export async function OPTIONS(): Promise<Response> {
  return new Response(null, { status: 204, headers: CORS });
}

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const q = (url.searchParams.get("q") ?? "").trim();
  const limit = Math.min(10, Math.max(1, Number(url.searchParams.get("limit") ?? 5) || 5));

  if (q.length < 2) {
    return Response.json(
      { error: "invalid_query", message: "Provide a query of at least 2 characters via ?q=" },
      { status: 400, headers: CORS },
    );
  }

  const origin = url.origin;
  const terms = tokenize(q);
  const chunks = await loadChunks(origin);

  const ranked = chunks
    .map((chunk) => ({ chunk, raw: score(chunk, terms) }))
    .filter((r) => r.raw > 0)
    .sort((a, b) => b.raw - a.raw)
    .slice(0, limit);

  const max = ranked[0]?.raw ?? 1;
  const results = ranked.map((r) => ({
    title: r.chunk.title,
    snippet: r.chunk.body.length > 400 ? `${r.chunk.body.slice(0, 397)}...` : r.chunk.body,
    source: r.chunk.source,
    score: Math.round((r.raw / max) * 100) / 100,
  }));

  return Response.json({ query: q, results }, { headers: CORS });
}
