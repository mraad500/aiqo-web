import sharp from 'sharp';
import { readdir, mkdir, rm, stat } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import os from 'os';

const SOURCE_DIR = path.join(os.homedir(), 'Desktop', 'AiQo screen images');
const OUTPUT_DIR = path.join(process.cwd(), 'public', 'screens');

const FILENAME_MAP = {
  'AiQo Home Screen.png': 'home.webp',
  "Captain Hamoudi's picture.png": 'captain-portrait.webp',
  "Captain Hamoudi's screen.PNG": 'captain-chat.webp',

  'sleep1.PNG': 'sleep-1.webp',
  'sleep2.PNG': 'sleep-2.webp',
  'sleep3.PNG': 'sleep-3.webp',
  'sleep4.PNG': 'sleep-4.webp',
  'sleep5.PNG': 'sleep-5.webp',

  'kitchen.jpg': 'kitchen-1.webp',
  'kitchen2.jpg': 'kitchen-2.webp',
  'kitchen3.jpg': 'kitchen-3.webp',
  'kitchen4.jpg': 'kitchen-4.webp',

  '(Peaks) feature for breaking records.jpg': 'legendary-1.webp',
  '(Peaks) feature for breaking records2.jpg': 'legendary-2.webp',
  '(Peaks) feature for breaking records3.PNG': 'legendary-3.webp',
  '(Peaks) feature for breaking records4.PNG': 'legendary-4.webp',
  '(Peaks) feature for breaking records5.PNG': 'legendary-5.webp',
  '(Peaks) feature for breaking records6.PNG': 'legendary-6.webp',
  '(Peaks) feature for breaking records7.PNG': 'legendary-7.webp',
  '(Peaks) feature for breaking records8.jpg': 'legendary-8.webp',
  '(Peaks) feature for breaking records9.jpg': 'legendary-9.webp',
  '(Peaks) feature for breaking records10.jpg': 'legendary-10.webp',

  '(Battle) Challenge Feature1.PNG': 'daily-quest-1.webp',
  '(Battle) Challenge Feature2.PNG': 'daily-quest-2.webp',

  'Exercises.jpg': 'workout.webp',
  'Profile.jpg': 'profile.webp',
  'my vibe .jpg': 'vibe.webp',
};

async function processImages() {
  if (existsSync(OUTPUT_DIR)) await rm(OUTPUT_DIR, { recursive: true });
  await mkdir(OUTPUT_DIR, { recursive: true });

  const files = await readdir(SOURCE_DIR);
  let processed = 0, skipped = 0, totalIn = 0, totalOut = 0;

  for (const file of files) {
    if (!FILENAME_MAP[file]) {
      if (!file.startsWith('.')) console.log(`⚠️  Skipping unmapped: ${file}`);
      skipped++;
      continue;
    }

    const inputPath = path.join(SOURCE_DIR, file);
    const outputPath = path.join(OUTPUT_DIR, FILENAME_MAP[file]);

    const inStat = await stat(inputPath);
    const inSize = inStat.size;

    await sharp(inputPath)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 92, effort: 6 })
      .toFile(outputPath);

    const outStat = await stat(outputPath);
    const outSize = outStat.size;
    totalIn += inSize;
    totalOut += outSize;
    processed++;

    const reduction = ((1 - outSize/inSize) * 100).toFixed(0);
    console.log(`✓ ${FILENAME_MAP[file].padEnd(22)} ${(inSize/1024).toFixed(0)}KB → ${(outSize/1024).toFixed(0)}KB (-${reduction}%)`);
  }

  console.log(`\n✅ Done. ${processed} processed, ${skipped} skipped.`);
  console.log(`   Total: ${(totalIn/1024/1024).toFixed(1)}MB → ${(totalOut/1024/1024).toFixed(1)}MB`);
}

processImages().catch(err => { console.error(err); process.exit(1); });
