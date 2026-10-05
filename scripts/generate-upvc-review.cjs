const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function createReviewSheet() {
  const assetsDir = path.join(__dirname, '..', 'public', 'assets', 'upvc-windows-doors');
  const files = fs.readdirSync(assetsDir).filter(f => f.startsWith('upvc-') && f.endsWith('.jpg')).sort();

  console.log(`Creating contact sheet for ${files.length} UPVC images...`);

  // 7 columns x 7 rows = 49
  const cols = 7;
  const rows = Math.ceil(files.length / cols);
  const cellW = 280;
  const cellH = 340;
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
      .resize(cellW - 16, cellH - 45, { fit: 'contain', background: '#222' })
      .toBuffer();

    composites.push({
      input: imgBuf,
      left: x + 8,
      top: y + 8
    });

    const indexNum = i + 1;
    const svgLabel = `
      <svg width="${cellW}" height="36">
        <rect x="0" y="0" width="${cellW}" height="36" fill="#111" />
        <text x="10" y="22" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#00D2FF">UPVC-${String(indexNum).padStart(2, '0')}</text>
        <text x="85" y="22" font-family="Arial, sans-serif" font-size="11" fill="#CCC">${file}</text>
      </svg>
    `;

    composites.push({
      input: Buffer.from(svgLabel),
      left: x,
      top: y + cellH - 38
    });
  }

  const outPath = path.join(__dirname, '..', 'scratch', 'upvc_all_49_review.jpg');
  await sharp({
    create: {
      width: totalW,
      height: totalH,
      channels: 4,
      background: { r: 18, g: 18, b: 18, alpha: 1 }
    }
  })
  .composite(composites)
  .jpeg({ quality: 85 })
  .toFile(outPath);

  console.log('Saved contact sheet to', outPath);
}

createReviewSheet().catch(console.error);
