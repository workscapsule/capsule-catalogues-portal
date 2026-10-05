const fs = require('fs');
const path = require('path');

const RAW_FILE = path.join(__dirname, 'wall-panels-scraped-raw.json');
const rawData = JSON.parse(fs.readFileSync(RAW_FILE, 'utf8'));

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Wall Panel Candidates Review - Local</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #121214; color: #E5E7EB; margin: 0; padding: 20px; }
    h1 { color: #D97706; text-align: center; margin-bottom: 5px; }
    .subtitle { text-align: center; color: #9CA3AF; margin-bottom: 30px; }
    .cat-section { margin-bottom: 40px; background: #1F2937; border-radius: 12px; padding: 20px; border: 1px solid #374151; }
    .cat-title { font-size: 1.3rem; font-weight: bold; color: #F59E0B; margin-bottom: 15px; border-bottom: 1px solid #374151; padding-bottom: 10px; display: flex; justify-content: space-between; align-items: center; }
    .grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px; }
    .card { background: #111827; border-radius: 8px; overflow: hidden; border: 2px solid #374151; display: flex; flex-direction: column; position: relative; }
    .card img { width: 100%; height: 240px; object-fit: cover; background: #000; }
    .card-body { padding: 8px; flex: 1; display: flex; flex-direction: column; justify-content: space-between; font-size: 11px; }
    .card-title { font-weight: bold; color: #F3F4F6; margin-bottom: 4px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .card-meta { color: #9CA3AF; margin-bottom: 4px; font-size: 10px; }
    .card-actions { display: flex; justify-content: space-between; align-items: center; margin-top: auto; }
    .pin-link { color: #60A5FA; text-decoration: none; font-size: 10px; }
    .badge { position: absolute; top: 6px; left: 6px; background: rgba(0,0,0,0.8); color: #fff; padding: 2px 6px; border-radius: 4px; font-size: 11px; font-weight: bold; }
  </style>
</head>
<body>
  <h1>WALL PANEL CANDIDATES AUDIT (LOCAL)</h1>
  <div class="subtitle">Reviewing 25 scraped Pinterest candidates per category (Total: 300 images)</div>
  
  ${Object.entries(rawData).map(([catKey, pins]) => `
    <div class="cat-section" id="${catKey}">
      <div class="cat-title">
        <span>${catKey.toUpperCase()}</span>
        <span style="font-size: 13px; color: #9CA3AF;">${pins.length} Candidates</span>
      </div>
      <div class="grid">
        ${pins.map((p, idx) => `
          <div class="card" data-idx="${idx + 1}" data-pinid="${p.pinId}">
            <span class="badge">#${idx + 1}</span>
            <img src="${p.relativeLocal}" alt="Candidate ${idx + 1}" />
            <div class="card-body">
              <div class="card-title" title="${(p.title || '').replace(/"/g, '&quot;')}">${p.title || 'Pin #' + (idx + 1)}</div>
              <div class="card-meta">Res: ${p.width || '?'} × ${p.height || '?'}</div>
              <div class="card-actions">
                <a href="${p.pinUrl}" target="_blank" class="pin-link">View Pin ↗</a>
                <span style="color: #F59E0B; font-weight: bold;">#${idx + 1}</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('')}

</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'review-local.html'), htmlContent);
console.log('Saved scripts/review-local.html');
