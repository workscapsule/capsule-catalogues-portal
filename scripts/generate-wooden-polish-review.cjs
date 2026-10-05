const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function createReviewSheet() {
  const assetsDir = path.join(__dirname, '..', 'public', 'assets', 'wooden-polish');
  const files = fs.readdirSync(assetsDir).filter(f => f.startsWith('wpl-') && f.endsWith('.jpg')).sort();

  console.log(`Creating contact sheet for ${files.length} Wooden Polish images...`);

  // 5 columns x 5 rows = 25
  const cols = 5;
  const rows = Math.ceil(files.length / cols);
  const cellW = 320;
  const cellH = 380;
  const totalW = cols * cellW;
  const totalH = rows * cellH;

  const composites = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const filePath = path.join(assetsDir, file);
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = col * cellW;
    const y = row * cellH;

    const imgBuf = await sharp(filePath)
      .resize(cellW - 16, cellH - 50, { fit: 'contain', background: '#222' })
      .toBuffer();

    composites.push({
      input: imgBuf,
      left: x + 8,
      top: y + 8
    });

    const indexNum = i + 1;
    const svgLabel = `
      <svg width="${cellW}" height="40">
        <rect x="0" y="0" width="${cellW}" height="40" fill="#111" />
        <text x="12" y="24" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#F3C769">WPL-${String(indexNum).padStart(2, '0')}</text>
        <text x="100" y="24" font-family="Arial, sans-serif" font-size="12" fill="#CCC">${file}</text>
      </svg>
    `;

    composites.push({
      input: Buffer.from(svgLabel),
      left: x,
      top: y + cellH - 42
    });
  }

  const base = await sharp({
    create: {
      width: totalW,
      height: totalH,
      channels: 4,
      background: { r: 18, g: 18, b: 18, alpha: 1 }
    }
  })
  .composite(composites)
  .jpeg({ quality: 85 })
  .toFile(path.join(__dirname, '..', 'scratch', 'wooden_polish_all_25_review.jpg'));

  console.log(`Saved contact sheet to scratch/wooden_polish_all_25_review.jpg (${totalW}x${totalH})`);
}

createReviewSheet().catch(console.error);
