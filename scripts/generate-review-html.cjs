const fs = require('fs');
const path = require('path');

const RAW_FILE = path.join(__dirname, 'wall-panels-scraped-raw.json');
const rawData = JSON.parse(fs.readFileSync(RAW_FILE, 'utf8'));

// Also copy or serve candidates from public or relative
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Wall Panel Candidates Review - Capsule Company</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #121214; color: #E5E7EB; margin: 0; padding: 20px; }
    h1 { color: #D97706; text-align: center; margin-bottom: 5px; }
    .subtitle { text-align: center; color: #9CA3AF; margin-bottom: 30px; }
    .cat-section { margin-bottom: 40px; background: #1F2937; border-radius: 12px; padding: 20px; border: 1px solid #374151; }
    .cat-title { font-size: 1.3rem; font-weight: bold; color: #F59E0B; margin-bottom: 15px; border-bottom: 1px solid #374151; padding-bottom: 10px; display: flex; justify-content: space-between; align-items: center; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px; }
    .card { background: #111827; border-radius: 8px; overflow: hidden; border: 2px solid #374151; display: flex; flex-direction: column; transition: transform 0.2s, border-color 0.2s; position: relative; }
    .card:hover { transform: translateY(-3px); border-color: #F59E0B; }
    .card img { width: 100%; height: 260px; object-fit: cover; background: #000; cursor: pointer; }
    .card-body { padding: 10px; flex: 1; display: flex; flex-direction: column; justify-content: space-between; font-size: 12px; }
    .card-title { font-weight: bold; color: #F3F4F6; margin-bottom: 4px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .card-meta { color: #9CA3AF; margin-bottom: 8px; font-size: 11px; }
    .card-actions { display: flex; justify-content: space-between; align-items: center; margin-top: auto; }
    .pin-link { color: #60A5FA; text-decoration: none; font-size: 11px; }
    .pin-link:hover { text-decoration: underline; }
    .badge { position: absolute; top: 8px; left: 8px; background: rgba(0,0,0,0.75); color: #fff; padding: 2px 6px; border-radius: 4px; font-size: 11px; font-weight: bold; }
  </style>
</head>
<body>
  <h1>WALL PANEL CANDIDATES AUDIT</h1>
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
            <a href="${p.imageUrl}" target="_blank">
              <img src="${p.imageUrl}" alt="Candidate ${idx + 1}" loading="lazy" />
            </a>
            <div class="card-body">
              <div class="card-title" title="${p.title || 'Pinterest Pin'}">${p.title || 'Pinterest Pin'}</div>
              <div class="card-meta">Res: ${p.width || '?'} × ${p.height || '?'}</div>
              <div class="card-actions">
                <a href="${p.pinUrl}" target="_blank" class="pin-link">View Pin ↗</a>
                <span style="color: #F59E0B; font-weight: bold;">ID: ${p.pinId.slice(-6)}</span>
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

fs.writeFileSync(path.join(__dirname, '..', 'public', 'review-wall-panels.html'), htmlContent);
console.log('Saved public/review-wall-panels.html');
