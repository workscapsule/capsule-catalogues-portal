import fs from 'fs';
import path from 'path';

let html = `<!DOCTYPE html>
<html>
<head>
  <title>Final 30 Ceiling Catalogue Images Review</title>
  <style>
    body { background: #0c0d0e; color: #eee; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 24px; margin: 0; }
    h1 { font-size: 24px; margin-bottom: 8px; color: #fff; }
    p.subtitle { color: #888; margin-top: 0; margin-bottom: 24px; font-size: 14px; }
    .grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; }
    .card { background: #16181a; border: 1px solid #2a2d32; border-radius: 8px; overflow: hidden; display: flex; flex-direction: column; }
    .img-box { width: 100%; height: 260px; background: #000; display: flex; align-items: center; justify-content: center; overflow: hidden; }
    img { width: 100%; height: 100%; object-fit: contain; }
    .info { padding: 10px 12px; font-size: 12px; border-top: 1px solid #222; }
    .badge { display: inline-block; background: #222; color: #c5a880; padding: 2px 6px; border-radius: 4px; font-weight: 600; font-size: 11px; margin-bottom: 4px; }
    .filename { color: #aaa; font-family: monospace; font-size: 11px; }
  </style>
</head>
<body>
  <h1>Final 30 Ceiling Catalogue Selection</h1>
  <p class="subtitle">Inspected for 100% cleanliness: No logos, no watermarks, no construction debris. Curated architectural ceiling designs.</p>
  <div class="grid">
`;

for (let i = 1; i <= 30; i++) {
  const numStr = String(i).padStart(2, '0');
  const filename = `ceiling-${numStr}.jpg`;
  html += `
    <div class="card">
      <div class="img-box">
        <img src="/assets/catalogues/ceilings/${filename}" />
      </div>
      <div class="info">
        <div class="badge">CL-S${numStr}</div>
        <div class="filename">${filename}</div>
      </div>
    </div>
  `;
}

html += `
  </div>
</body>
</html>
`;

fs.writeFileSync('public/review-final-ceilings.html', html);
console.log('Created public/review-final-ceilings.html');

import('puppeteer-core').then(async ({ default: puppeteer }) => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: 'new',
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 2200 });
  await page.goto('http://localhost:5173/review-final-ceilings.html', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'scratch/final_30_ceilings_review.png', fullPage: true });
  await browser.close();
  console.log('Saved scratch/final_30_ceilings_review.png');
});
