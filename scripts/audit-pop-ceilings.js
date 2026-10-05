import fs from 'fs';
import path from 'path';

let html = `<!DOCTYPE html>
<html>
<head>
  <title>Ceiling / POP Images Audit (1-30)</title>
  <style>
    body { background: #0c0d0e; color: #eee; font-family: sans-serif; padding: 24px; margin: 0; }
    h1 { font-size: 22px; color: #fff; margin-bottom: 6px; }
    p { color: #888; font-size: 13px; margin-top: 0; margin-bottom: 20px; }
    .grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; }
    .card { background: #16181a; border: 1px solid #2a2d32; border-radius: 8px; overflow: hidden; display: flex; flex-direction: column; }
    .img-box { width: 100%; height: 260px; background: #000; display: flex; align-items: center; justify-content: center; }
    img { width: 100%; height: 100%; object-fit: contain; }
    .info { padding: 8px 10px; font-size: 12px; border-top: 1px solid #222; }
    .badge { color: #c5a880; font-weight: bold; font-family: monospace; }
  </style>
</head>
<body>
  <h1>Ceiling / POP Gallery Audit (30 Candidates)</h1>
  <p>Reviewing all 30 images in public/assets/gallery/pop/ for ceiling design clarity, lighting features, and zero watermarks.</p>
  <div class="grid">
`;

for (let i = 1; i <= 30; i++) {
  const numStr = String(i).padStart(2, '0');
  const filename = `pop-${numStr}.jpg`;
  html += `
    <div class="card">
      <div class="img-box">
        <img src="/assets/gallery/pop/${filename}" />
      </div>
      <div class="info">
        <span class="badge">#${numStr}: ${filename}</span>
      </div>
    </div>
  `;
}

html += `
  </div>
</body>
</html>
`;

fs.writeFileSync('public/review-pop.html', html);
console.log('Created public/review-pop.html');

import('puppeteer-core').then(async ({ default: puppeteer }) => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: 'new',
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 2200 });
  await page.goto('http://localhost:5173/review-pop.html', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'scratch/pop_audit_grid.png', fullPage: true });
  await browser.close();
  console.log('Saved scratch/pop_audit_grid.png');
});
