const fs = require('fs');
const path = require('path');

const list = JSON.parse(fs.readFileSync('scratch/concrete_50_mapping.json', 'utf8'));

let html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>50 Concrete Unit Images Review</title>
  <style>
    body { font-family: sans-serif; background: #111; color: #eee; padding: 20px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
    .card { background: #222; border-radius: 8px; overflow: hidden; padding: 10px; }
    img { width: 100%; height: 220px; object-fit: contain; background: #000; border-radius: 4px; }
    .info { margin-top: 8px; font-size: 13px; }
    .num { font-weight: bold; color: #f59e0b; }
  </style>
</head>
<body>
  <h1>Review of 50 Concrete Unit Images</h1>
  <div class="grid">
`;

list.forEach(item => {
  html += `    <div class="card">
      <div class="num">#${item.index} - ${item.destName}</div>
      <img src="../public/assets/catalogues/concrete-unit/${item.destName}" alt="${item.destName}" />
      <div class="info">Drive ID: ${item.driveId}<br>Original: ${item.originalName.slice(0, 16)}...</div>
    </div>\n`;
});

html += `  </div>
</body>
</html>`;

fs.writeFileSync('scratch/review_all_50_concrete.html', html);
console.log('Written scratch/review_all_50_concrete.html');
