import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer-core';

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const categories = [
  { name: 'L-SHAPE (10 Designs)', prefix: 'l-shape' },
  { name: 'PARALLEL / GALLEY (10 Designs)', prefix: 'parallel' },
  { name: 'ISLAND (10 Designs)', prefix: 'island' },
  { name: 'STRAIGHT / SINGLE-WALL (10 Designs)', prefix: 'straight' },
];

const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Final 40 Modular Kitchen Designs Review</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #0F1012; color: #fff; padding: 24px; }
    h1 { color: #C59A6F; font-size: 24px; margin-bottom: 8px; }
    p { color: #aaa; font-size: 14px; margin-bottom: 24px; }
    h2 { border-left: 4px solid #C59A6F; padding-left: 12px; margin-top: 36px; color: #eee; font-size: 18px; }
    .grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; margin-top: 16px; }
    .card { background: #18191C; border-radius: 6px; overflow: hidden; border: 1px solid #2a2b30; }
    .card img { width: 100%; height: 240px; object-fit: cover; display: block; }
    .card-info { padding: 10px 12px; }
    .card-title { font-weight: 700; font-size: 13px; color: #C59A6F; font-family: monospace; }
    .card-sub { font-size: 11px; color: #888; margin-top: 2px; }
  </style>
</head>
<body>
  <h1>Final 40 Modular Kitchen Collection Verification</h1>
  <p>10 L-Shape • 10 Parallel/Galley • 10 Island • 10 Straight/Single-Wall</p>

  ${categories.map(cat => `
    <h2>${cat.name}</h2>
    <div class="grid">
      ${Array.from({ length: 10 }).map((_, idx) => {
        const num = String(idx + 1).padStart(2, '0');
        const filename = `${cat.prefix}-${num}.jpg`;
        const src = `/assets/catalogues/kitchen/final/${filename}`;
        return `
          <div class="card">
            <img src="${src}" />
            <div class="card-info">
              <div class="card-title">${filename}</div>
              <div class="card-sub">${cat.prefix.toUpperCase()} #${num}</div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `).join('')}
</body>
</html>`;

fs.writeFileSync('public/review-final-40.html', html);
console.log('Saved public/review-final-40.html');

async function snapshot() {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1500, height: 2600 });
  await page.goto('http://localhost:5173/review-final-40.html', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 4000));
  await page.screenshot({ path: path.resolve('scripts/review-final-40.png'), fullPage: true });
  console.log('Saved scripts/review-final-40.png');
  await browser.close();
}

snapshot().catch(console.error);
