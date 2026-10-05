const fs = require('fs');

const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Kids Bed Images Review (40 Images)</title>
  <style>
    body { font-family: sans-serif; background: #1a1a1a; color: #fff; padding: 20px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
    .card { background: #2a2a2a; border-radius: 8px; overflow: hidden; padding: 10px; }
    img { width: 100%; height: 260px; object-fit: contain; background: #fff; border-radius: 4px; }
    h3 { margin: 8px 0 4px 0; font-size: 14px; }
    p { margin: 0; font-size: 11px; color: #aaa; }
  </style>
</head>
<body>
  <h1>Review of 40 Kids Bed Images</h1>
  <div class="grid">
    ${Array.from({ length: 40 }, (_, i) => {
      const num = String(i + 1).padStart(2, '0');
      return `
        <div class="card">
          <img src="/assets/catalogues/kids-bed/kids-bed-${num}.jpg" alt="kids-bed-${num}">
          <h3>Model ${num} (kids-bed-${num}.jpg)</h3>
        </div>
      `;
    }).join('')}
  </div>
</body>
</html>`;

fs.writeFileSync('public/review-kids-bed.html', html);
console.log('Created public/review-kids-bed.html');
