import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import puppeteer from 'puppeteer-core';

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const pins = JSON.parse(fs.readFileSync('scripts/parallel-pinterest-pins.json', 'utf8'));
const outDir = path.resolve('public/assets/catalogues/kitchen/parallel-candidates');
fs.mkdirSync(outDir, { recursive: true });

async function downloadAll() {
  console.log(`Downloading ${pins.length} parallel candidates...`);
  const valid = [];

  for (let i = 0; i < pins.length; i++) {
    const p = pins[i];
    const filename = `parallel-cand-${String(i + 1).padStart(2, '0')}.jpg`;
    const filePath = path.join(outDir, filename);

    try {
      const res = await fetch(p.image);
      if (!res.ok) continue;
      const buf = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(filePath, buf);
      const meta = await sharp(filePath).metadata();
      valid.push({
        file: filename,
        width: meta.width,
        height: meta.height,
        src: `/assets/catalogues/kitchen/parallel-candidates/${filename}`
      });
      console.log(`Downloaded ${filename} (${meta.width}x${meta.height})`);
    } catch (e) {
      console.error(`Error on ${p.image}: ${e.message}`);
    }
  }

  // Create review HTML
  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Review Parallel Candidates</title>
  <style>
    body { font-family: sans-serif; background: #121212; color: #fff; padding: 20px; }
    h1 { color: #C59A6F; }
    .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 16px; }
    .card { background: #1e1e1e; border-radius: 8px; overflow: hidden; border: 1px solid #333; }
    .card img { width: 100%; height: 280px; object-fit: cover; display: block; }
    .card-info { padding: 12px; }
    .card-title { font-weight: bold; font-size: 14px; color: #C59A6F; }
    .card-size { font-size: 12px; color: #888; margin-top: 4px; }
  </style>
</head>
<body>
  <h1>Parallel / Galley Kitchen Candidates (${valid.length})</h1>
  <div class="grid">
    ${valid.map(v => `
      <div class="card">
        <img src="${v.src}" />
        <div class="card-info">
          <div class="card-title">${v.file}</div>
          <div class="card-size">${v.width}x${v.height}</div>
        </div>
      </div>
    `).join('')}
  </div>
</body>
</html>`;

  fs.writeFileSync('public/review-parallel-candidates.html', html);
  console.log('Saved HTML review page.');

  // Screenshot with Puppeteer
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 2400 });
  await page.goto('http://localhost:5173/review-parallel-candidates.html', {
    waitUntil: 'domcontentloaded',
  });
  await new Promise(r => setTimeout(r, 4000));
  await page.screenshot({ path: path.resolve('scripts/review-parallel-all.png'), fullPage: true });
  console.log('Saved full screenshot to scripts/review-parallel-all.png');
  await browser.close();
}

downloadAll().catch(console.error);
