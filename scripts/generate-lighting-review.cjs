const sharp = require('sharp');
const fs = require('path');

(async () => {
  const assetsDir = 'public/assets/lighting-fixtures';
  const files = [];
  for (let i = 1; i <= 49; i++) files.push('lighting-' + String(i).padStart(2, '0') + '.jpg');
  
  const cols = 7;
  const rows = 7;
  const w = 260;
  const h = 340;
  const composites = [];

  for (let i = 0; i < files.length; i++) {
    const f = files[i];
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = col * w;
    const y = row * h;

    const buf = await sharp(assetsDir + '/' + f).resize(w - 12, h - 40, { fit: 'cover' }).toBuffer();
    composites.push({ input: buf, left: x + 6, top: y + 6 });

    const label = `<svg width="${w}" height="30"><rect width="${w}" height="30" fill="#111"/><text x="10" y="20" fill="#B86D43" font-family="sans-serif" font-size="14" font-weight="bold">LTG-${String(i+1).padStart(2,'0')}</text></svg>`;
    composites.push({ input: Buffer.from(label), left: x, top: y + h - 30 });
  }

  await sharp({ create: { width: cols * w, height: rows * h, channels: 3, background: { r: 18, g: 16, b: 14 } } })
    .composite(composites)
    .jpeg({ quality: 85 })
    .toFile('scratch/lighting_all_49_review.jpg');
  console.log('Saved scratch/lighting_all_49_review.jpg');
})();
