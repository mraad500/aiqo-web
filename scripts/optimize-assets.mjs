#!/usr/bin/env node
// AiQo asset pipeline.
// Reads sources from ~/Desktop/AiQo screen images and writes:
//   /public/screens/{slug}-{w}w.{avif,webp}    (3 widths × 2 formats)
//   /public/brand/captain-portrait{,-natural}.{avif,webp}
//   /public/brand/icon/{16,32,180,192,256,512}.png
//   /public/favicon.ico, /public/apple-touch-icon.png
// All outputs stripped of EXIF. Any file > 500 KB aborts the run.

import sharp from "sharp";
import toIco from "to-ico";
import { mkdir, writeFile, stat, readdir } from "node:fs/promises";
import path from "node:path";
import os from "node:os";

const SRC = path.join(os.homedir(), "Desktop", "AiQo screen images");
const PUBLIC = path.join(process.cwd(), "public");
const SCREENS_DIR = path.join(PUBLIC, "screens");
const BRAND_DIR = path.join(PUBLIC, "brand");
const ICON_DIR = path.join(BRAND_DIR, "icon");

const MAX_BYTES = 500 * 1024;
const WIDTHS = [1290, 860, 430];

const SCREENS = [
  { slug: "home",         src: "AiQo Home Screen.png" },
  { slug: "captain-chat", src: "Captain Hamoudi's screen.png" },
  { slug: "sleep-hero",   src: "sleep2.PNG" },
  { slug: "kitchen-scan", src: "kitchen.jpg" },
  { slug: "kitchen-plan", src: "kitchen2.jpg" },
  { slug: "peaks-test",   src: "(Peaks) feature for breaking records4.PNG" },
  { slug: "peaks-plan",   src: "(Peaks) feature for breaking records3.PNG" },
  { slug: "peaks-review", src: "(Peaks) feature for breaking records5.PNG" },
  { slug: "daily-quest",  src: "(Battle) Challenge Feature1.PNG" },
  { slug: "workout",      src: "workout.png" },
  { slug: "my-vibe",      src: "my vibe .jpg" },
  { slug: "watch-hero",   src: "You are not someone who starts from scratch.png" },
  { slug: "profile",      src: "Profile.png" },
  // Learning Spark (شرارة التعلم) — the first quest in Battle (معركة).
  { slug: "ls-battle",    src: "ls-battle.jpg" },
  { slug: "ls-challenge", src: "ls-challenge.jpg" },
  { slug: "ls-courses",   src: "ls-courses.jpg" },
  { slug: "ls-select",    src: "ls-select.jpg" },
  { slug: "ls-proof",     src: "ls-proof.jpg" },
  // Outdoor Run (الجري بالخارج) — GPS run session start → active → summary.
  { slug: "run-start",    src: "run-start.jpg" },
  { slug: "run-active",   src: "run-active.jpg" },
  { slug: "run-summary",  src: "run-summary.jpg" },
];

const CAPTAIN_SRC = "Captain Hamoudi's picture.PNG";
const ICON_SRC = "photo-output 1.png";

const fmt = (n) => `${(n / 1024).toFixed(0).padStart(5)} KB`;
const log = [];

async function processScreen({ slug, src }) {
  const inPath = path.join(SRC, src);
  const meta = await sharp(inPath).metadata();
  const origW = meta.width;
  const origH = meta.height;

  for (const targetW of WIDTHS) {
    const w = Math.min(targetW, origW);
    const h = Math.round((w / origW) * origH);

    const pipeline = sharp(inPath)
      .rotate() // respect orientation before stripping EXIF
      .resize({ width: w, withoutEnlargement: true });

    const avifPath = path.join(SCREENS_DIR, `${slug}-${w}w.avif`);
    const webpPath = path.join(SCREENS_DIR, `${slug}-${w}w.webp`);

    // Higher quality for large widths (detail-rich UI screenshots).
    const avifQ = w >= 1290 ? 78 : w >= 860 ? 70 : 62;
    const webpQ = w >= 1290 ? 88 : w >= 860 ? 82 : 76;

    await pipeline
      .clone()
      .avif({ quality: avifQ, effort: 7, chromaSubsampling: "4:4:4" })
      .toFile(avifPath);
    await pipeline
      .clone()
      .webp({ quality: webpQ, effort: 6, smartSubsample: true })
      .toFile(webpPath);

    const [a, b] = await Promise.all([stat(avifPath), stat(webpPath)]);
    log.push([`${slug}-${w}w`, `${w}×${h}`, fmt(a.size), fmt(b.size)]);
  }

  return { width: origW, height: origH };
}

async function processCaptain() {
  const inPath = path.join(SRC, CAPTAIN_SRC);
  const meta = await sharp(inPath).metadata();
  const longSide = 2048;
  const ratio = meta.width / meta.height;
  const [W, H] =
    ratio >= 1
      ? [longSide, Math.round(longSide / ratio)]
      : [Math.round(longSide * ratio), longSide];

  // Natural
  const natural = sharp(inPath).rotate().resize({ width: W, height: H, fit: "cover" });
  await natural.clone().avif({ quality: 70, effort: 6 }).toFile(path.join(BRAND_DIR, "captain-portrait-natural.avif"));
  await natural.clone().webp({ quality: 82, effort: 6 }).toFile(path.join(BRAND_DIR, "captain-portrait-natural.webp"));

  // Duotone: low-sat base tinted toward ink-2, then soft-light sand overlay
  const sand = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><rect width="100%" height="100%" fill="#EBCF97" fill-opacity="0.18"/></svg>`
  );

  const duotoneBase = sharp(inPath)
    .rotate()
    .resize({ width: W, height: H, fit: "cover" })
    .modulate({ saturation: 0.18, brightness: 0.96 })
    .tint({ r: 0x1c, g: 0x1c, b: 0x1e });

  const duotoneBuf = await duotoneBase
    .composite([{ input: sand, blend: "soft-light" }])
    .png()
    .toBuffer();

  await sharp(duotoneBuf).avif({ quality: 70, effort: 6 }).toFile(path.join(BRAND_DIR, "captain-portrait.avif"));
  await sharp(duotoneBuf).webp({ quality: 82, effort: 6 }).toFile(path.join(BRAND_DIR, "captain-portrait.webp"));

  for (const f of ["captain-portrait-natural.avif", "captain-portrait-natural.webp", "captain-portrait.avif", "captain-portrait.webp"]) {
    const s = await stat(path.join(BRAND_DIR, f));
    log.push([f.replace(/\.(avif|webp)$/, ""), `${W}×${H}`, f.endsWith("avif") ? fmt(s.size) : "—", f.endsWith("webp") ? fmt(s.size) : "—"]);
  }

  return { width: W, height: H };
}

async function processIcon() {
  const inPath = path.join(SRC, ICON_SRC);
  // Normalize to 1024 square once, then downscale — spares sharp from huge source on every call
  const base = await sharp(inPath).rotate().resize({ width: 1024, height: 1024, fit: "cover" }).png().toBuffer();

  const sizes = [16, 32, 180, 192, 256, 512];
  for (const size of sizes) {
    await sharp(base).resize(size, size).png({ compressionLevel: 9 }).toFile(path.join(ICON_DIR, `${size}.png`));
  }

  const buf16 = await sharp(base).resize(16, 16).png().toBuffer();
  const buf32 = await sharp(base).resize(32, 32).png().toBuffer();
  const buf48 = await sharp(base).resize(48, 48).png().toBuffer();
  const ico = await toIco([buf16, buf32, buf48]);
  await writeFile(path.join(PUBLIC, "favicon.ico"), ico);

  await sharp(base).resize(180, 180).png({ compressionLevel: 9 }).toFile(path.join(PUBLIC, "apple-touch-icon.png"));
}

async function enforceSizeLimit(dir) {
  const entries = await readdir(dir, { withFileTypes: true, recursive: true });
  const oversize = [];
  for (const e of entries) {
    if (!e.isFile()) continue;
    const p = path.join(e.parentPath || dir, e.name);
    const s = await stat(p);
    if (s.size > MAX_BYTES) oversize.push([p, s.size]);
  }
  if (oversize.length) {
    console.error("\n❌ Files over 500 KB budget:");
    for (const [p, sz] of oversize) console.error(`   ${p}  ${fmt(sz)}`);
    throw new Error(`${oversize.length} oversize file(s)`);
  }
}

async function main() {
  await mkdir(SCREENS_DIR, { recursive: true });
  await mkdir(BRAND_DIR, { recursive: true });
  await mkdir(ICON_DIR, { recursive: true });

  console.log("→ Processing screens...");
  for (const s of SCREENS) {
    await processScreen(s);
    process.stdout.write(`   ✓ ${s.slug}\n`);
  }

  console.log("→ Processing captain portrait (natural + duotone)...");
  await processCaptain();
  console.log("   ✓ captain-portrait + captain-portrait-natural");

  console.log("→ Processing app icon + favicon...");
  await processIcon();
  console.log("   ✓ favicon.ico + apple-touch-icon.png + /brand/icon/*.png");

  console.log("→ Enforcing 500 KB budget...");
  await enforceSizeLimit(SCREENS_DIR);
  await enforceSizeLimit(BRAND_DIR);
  console.log("   ✓ all files within budget");

  // Summary table
  console.log("\n─── Output sizes ─────────────────────────────────────────");
  console.log("  slug-width            dims          avif       webp");
  for (const row of log) {
    console.log(`  ${row[0].padEnd(22)} ${row[1].padEnd(12)} ${row[2].padStart(9)}  ${row[3].padStart(9)}`);
  }
  console.log("──────────────────────────────────────────────────────────\n");
  console.log(`✅ Pipeline complete. Outputs in /public/screens/ and /public/brand/`);
}

main().catch((err) => {
  console.error("\n❌ Pipeline failed:", err);
  process.exit(1);
});
