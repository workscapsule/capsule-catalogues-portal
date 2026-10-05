const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Bar Counter Images Review (40 Images)</title>
  <style>
    body { font-family: sans-serif; background: #121212; color: #fff; padding: 20px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px; }
    .card { background: #1e1e1e; border: 1px solid #333; border-radius: 8px; overflow: hidden; padding: 12px; }
    img { width: 100%; height: 300px; object-fit: contain; background: #000; border-radius: 6px; }
    h3 { margin: 10px 0 4px 0; font-size: 15px; color: #E5C378; }
    p { margin: 0; font-size: 12px; color: #bbb; }
  </style>
</head>
<body>
  <h1 style="color:#E5C378;">Capsule Bar Counter Collection — 40 Images Review</h1>
  <div class="grid">
    ${Array.from({ length: 40 }, (_, i) => {
      const num = String(i + 1).padStart(2, '0');
      return `
        <div class="card">
          <img src="/assets/catalogues/bar-counter/bar-counter-${num}.jpg" alt="bar-counter-${num}">
          <h3>Model ${num} (bar-counter-${num}.jpg)</h3>
          <p>Index: ${i + 1} | File: bar-counter-${num}.jpg</p>
        </div>
      `;
    }).join('')}
  </div>
</body>
</html>`;

fs.writeFileSync('public/review-bar-counter.html', html);
console.log('Created public/review-bar-counter.html');

async function analyze() {
  const infoList = [];
  for (let i = 1; i <= 40; i++) {
    const num = String(i).padStart(2, '0');
    const file = path.resolve(`public/assets/catalogues/bar-counter/bar-counter-${num}.jpg`);
    const meta = await sharp(file).metadata();
    infoList.push({
      index: i,
      file: `bar-counter-${num}.jpg`,
      width: meta.width,
      height: meta.height,
      aspect: (meta.width / meta.height).toFixed(2),
      format: meta.format
    });
  }
  fs.writeFileSync('scratch/bar_counter_image_analysis.json', JSON.stringify(infoList, null, 2));
  console.log('Saved scratch/bar_counter_image_analysis.json');
}

analyze().catch(console.error);
