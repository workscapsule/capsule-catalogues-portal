import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const data = JSON.parse(fs.readFileSync('scripts/pinterest-results.json', 'utf8'));

const baseDir = path.resolve('public/assets/catalogues/kitchen');

async function downloadImage(url, destPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(destPath, buffer);
  return buffer;
}

async function main() {
  for (const [category, items] of Object.entries(data)) {
    const catDir = path.join(baseDir, category);
    fs.mkdirSync(catDir, { recursive: true });

    console.log(`\n=== Processing ${category} (${items.length} pins) ===`);
    let count = 0;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const filename = `${category}-${String(i + 1).padStart(2, '0')}.jpg`;
      const filePath = path.join(catDir, filename);

      try {
        await downloadImage(item.image, filePath);
        const metadata = await sharp(filePath).metadata();
        console.log(`[${category}] #${i + 1}: ${metadata.width}x${metadata.height}, format: ${metadata.format} (${(fs.statSync(filePath).size / 1024).toFixed(1)} KB)`);
        count++;
      } catch (err) {
        console.error(`Failed ${item.image}: ${err.message}`);
      }
    }
    console.log(`Successfully downloaded ${count} images for ${category}`);
  }
}

main().catch(console.error);
