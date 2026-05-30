import type { MetadataRoute } from "next";

// AiQo welcomes AI crawlers and answer engines. The site is public marketing
// content plus a machine-readable knowledge API under /ai and /api/knowledge.
// We explicitly allow the major AI/search agents (including the training-opt-in
// agents Google-Extended and Applebot-Extended) so AiQo is discoverable and
// citable by assistants. See public/llms.txt for a guided index.
const AI_AGENTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "cohere-ai",
  "Bytespider",
  "Amazonbot",
  "Meta-ExternalAgent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_AGENTS, allow: "/" },
    ],
    sitemap: "https://aiqo.app/sitemap.xml",
    host: "https://aiqo.app",
  };
}
