const fs = require('fs');
const path = require('path');

// Let's generate a full-page review with all 39 images, each with its current index,
// and take high-resolution screenshots so we can inspect all 39 one by one.
const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Inspect 39 Bar Counters</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, sans-serif; background: #111; color: #eee; padding: 20px; }
    .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
    .card { background: #222; border: 1px solid #444; border-radius: 6px; padding: 8px; text-align: center; }
    img { width: 100%; height: 260px; object-fit: contain; background: #000; border-radius: 4px; }
    .label { font-size: 14px; font-weight: bold; margin-top: 6px; color: #E5C378; }
    .filename { font-size: 11px; color: #888; font-family: monospace; }
  </style>
</head>
<body>
  <h2>All 39 Bar Counter Images for Visual Inspection</h2>
  <div class="grid">
    ${Array.from({ length: 39 }, (_, i) => {
      const num = String(i + 1).padStart(2, '0');
      return `
        <div class="card">
          <img src="/assets/catalogues/bar-counter/bar-counter-${num}.jpg" />
          <div class="label">Index ${num} (P/${num})</div>
          <div class="filename">bar-counter-${num}.jpg</div>
        </div>
      `;
    }).join('')}
  </div>
</body>
</html>`;

fs.writeFileSync('public/inspect-all-39.html', html);
console.log('Created public/inspect-all-39.html');
