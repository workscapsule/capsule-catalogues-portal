import fs from 'fs';

let html = `<!DOCTYPE html>
<html>
<head>
  <title>Wardrobe 30 Images Review</title>
  <style>
    body { background: #111; color: #eee; font-family: sans-serif; padding: 20px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
    .card { background: #222; border-radius: 8px; overflow: hidden; border: 1px solid #444; }
    .card img { width: 100%; height: 340px; object-fit: contain; background: #000; }
    .card .info { padding: 10px; font-size: 13px; }
  </style>
</head>
<body>
  <h1>Review 30 Wardrobe Images</h1>
  <div class="grid">
`;

for (let i = 1; i <= 30; i++) {
  const numStr = String(i).padStart(2, '0');
  const filename = `customized-wardrobe-${numStr}.jpg`;
  html += `
    <div class="card">
      <img src="/assets/gallery/customized-wardrobe/${filename}" />
      <div class="info">
        <strong>#${numStr}: ${filename}</strong>
      </div>
    </div>
  `;
}

html += `
  </div>
</body>
</html>
`;

fs.writeFileSync('public/review-wardrobes.html', html);
console.log('Created public/review-wardrobes.html');
