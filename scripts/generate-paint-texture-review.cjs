const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function review() {
  const targetDir = path.join(__dirname, '..', 'public', 'assets', 'paint-texture');
  let html = `<!DOCTYPE html><html><head><style>
    body { background: #181818; color: #fff; font-family: sans-serif; padding: 20px; }
    .grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 12px; }
    .card { background: #262626; border-radius: 6px; padding: 8px; text-align: center; }
    .card img { width: 100%; height: 180px; object-fit: cover; border-radius: 4px; display: block; }
    .name { font-size: 11px; margin-top: 5px; color: #E5A93C; font-weight: bold; }
  </style></head><body>
  <h2>Paint Texture Wall Image Review (33 Images)</h2>
  <div class="grid">
  `;

  for (let i = 1; i <= 33; i++) {
    const name = `ptw-${String(i).padStart(2, '0')}.jpg`;
    const imgPath = path.join(targetDir, name);
    let src = '';
    if (fs.existsSync(imgPath)) {
      const b64 = fs.readFileSync(imgPath).toString('base64');
      src = `data:image/jpeg;base64,${b64}`;
    }
    html += `<div class="card"><img src="${src}"/><div class="name">${name}</div></div>`;
  }

  html += `</div></body></html>`;

  fs.writeFileSync(path.join(__dirname, '..', 'scratch', 'paint_texture_review.html'), html);
  console.log('Saved scratch/paint_texture_review.html');

  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 1800 });
  await page.setContent(html, { waitUntil: 'load' });
  await page.screenshot({ path: path.join(__dirname, '..', 'scratch', 'paint_texture_all_33_review.jpg'), type: 'jpeg', quality: 85, fullPage: true });
  console.log('Saved scratch/paint_texture_all_33_review.jpg');
  await browser.close();
}

review().catch(console.error);
