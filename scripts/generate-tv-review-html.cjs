const fs = require('fs');

const mapping = JSON.parse(fs.readFileSync('scratch/tv_unit_48_mapping.json', 'utf8'));

let html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Review All 48 TV Unit Images</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #0c0d10; color: #eee; padding: 24px; margin: 0; }
    h1 { font-size: 24px; margin-bottom: 20px; color: #fff; text-transform: uppercase; letter-spacing: 2px; }
    .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
    .card { background: #16181f; border-radius: 8px; overflow: hidden; border: 1px solid #2a2d3a; padding: 12px; display: flex; flex-col; }
    .card img { width: 100%; height: 260px; object-fit: contain; background: #08090b; border-radius: 6px; }
    .info { margin-top: 10px; }
    .num { font-size: 16px; font-weight: 700; color: #e5c378; }
    .orig { font-size: 10px; color: #71717a; margin-top: 4px; word-break: break-all; }
  </style>
</head>
<body>
  <h1>All 48 Google Drive TV Unit Images (1 to 48)</h1>
  <div class="grid">
`;

mapping.forEach(item => {
  html += `
    <div class="card" id="card-${item.index}">
      <img src="../public/assets/catalogues/tv-units/${item.destName}" alt="TV Unit ${item.index}">
      <div class="info">
        <div class="num">TV Unit #${item.index} (${item.destName})</div>
        <div class="orig">${item.originalName} • ${(item.size / 1024).toFixed(1)} KB</div>
      </div>
    </div>
  `;
});

html += `
  </div>
</body>
</html>
`;

fs.writeFileSync('scratch/review_tv_units_48.html', html);
console.log('Created scratch/review_tv_units_48.html');
