#!/usr/bin/env node
// IndexNow ping — notifies Bing/Yandex/Seznam (and thus ChatGPT search, which
// uses Bing's index) that AiQo pages changed, so they re-crawl sooner. No deps.
//
//   node scripts/indexnow-ping.mjs
//
// Ownership is proven by the key file served at https://aiqo.app/<KEY>.txt.
// IndexNow only *invites* a re-crawl — the engines still decide when to index.
// Re-run after any deploy that changes public content or the /ai/ knowledge.

const HOST = "aiqo.app";
const KEY = "f72f53f8523a2d9642c0923854a41143";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// The URLs that changed and matter most for discovery.
const urlList = [
  `https://${HOST}/`,
  `https://${HOST}/ai/features.json`,
  `https://${HOST}/ai/glossary.json`,
  `https://${HOST}/ai/faq.json`,
  `https://${HOST}/ai/context.md`,
  `https://${HOST}/ai/info.json`,
  `https://${HOST}/llms.txt`,
  `https://${HOST}/sitemap.xml`,
];

const body = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList };

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});

const text = await res.text();
console.log(`IndexNow → ${res.status} ${res.statusText}`);
console.log(`Submitted ${urlList.length} URLs from ${HOST}`);
if (text.trim()) console.log("Response:", text.trim());
// 200 = accepted; 202 = accepted, key validation pending; 4xx = problem.
process.exit(res.status >= 200 && res.status < 300 ? 0 : 1);
