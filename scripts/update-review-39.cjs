const fs = require('fs');

const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Bar Counter Luxury Collection (39 Unique Models)</title>
  <style>
    body { font-family: sans-serif; background: #0E0E0E; color: #fff; padding: 24px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px; }
    .card { background: #181818; border: 1px solid #2e2e2e; border-radius: 8px; overflow: hidden; padding: 12px; }
    img { width: 100%; height: 320px; object-fit: contain; background: #050505; border-radius: 6px; }
    h3 { margin: 10px 0 4px 0; font-size: 15px; color: #C5A059; }
    p { margin: 0; font-size: 12px; color: #888; }
  </style>
</head>
<body>
  <h1 style="color:#C5A059; font-size:24px; margin-bottom: 20px;">Capsule Interiors — 39 Unique Bar Counter Designs</h1>
  <div class="grid">
    ${Array.from({ length: 39 }, (_, i) => {
      const num = String(i + 1).padStart(2, '0');
      return `
        <div class="card">
          <img src="/assets/catalogues/bar-counter/bar-counter-${num}.jpg" alt="bar-counter-${num}">
          <h3>Model ${num} (bar-counter-${num}.jpg)</h3>
          <p>Page: P/${num} | Code: BC-S${i + 1}</p>
        </div>
      `;
    }).join('')}
  </div>
</body>
</html>`;

fs.writeFileSync('public/review-bar-counter.html', html);
console.log('Updated public/review-bar-counter.html for 39 unique models.');
