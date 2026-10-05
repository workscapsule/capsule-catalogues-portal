const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function auditTopStrips() {
  const dir = path.join(__dirname, '..', 'public', 'assets', 'upvc-windows-doors');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg')).sort();
  const scratchDir = path.join(__dirname, '..', 'scratch');

  const topStrips = [];
  for (let i = 0; i < files.length; i++) {
    const f = files[i];
    const p = path.join(dir, f);
    const meta = await sharp(p).metadata();
    
    // Top 15% strip
    const stripH = Math.round(meta.height * 0.15);
    const strip = await sharp(p)
      .extract({ left: 0, top: 0, width: meta.width, height: stripH })
      .resize(400, 60, { fit: 'fill' })
      .toBuffer();

    topStrips.push({ f, strip });
  }

  const cols = 2;
  const rows = Math.ceil(topStrips.length / cols);
  const cellW = 480;
  const cellH = 75;
  const comp = [];

  for (let i = 0; i < topStrips.length; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = col * cellW;
    const y = row * cellH;

    comp.push({
      input: topStrips[i].strip,
      left: x + 70,
      top: y + 5
    });

    const svg = `
      <svg width="65" height="${cellH}">
        <rect width="65" height="${cellH}" fill="#1a1a1a"/>
        <text x="5" y="42" font-family="Arial" font-size="12" font-weight="bold" fill="#00D2FF">UPVC-${String(i+1).padStart(2,'0')}</text>
      </svg>
    `;
    comp.push({
      input: Buffer.from(svg),
      left: x,
      top: y
    });
  }

  await sharp({
    create: {
      width: cols * cellW,
      height: rows * cellH,
      channels: 4,
      background: { r: 15, g: 15, b: 15, alpha: 1 }
    }
  })
  .composite(comp)
  .jpeg({ quality: 85 })
  .toFile(path.join(scratchDir, 'upvc_top_strips_audit.jpg'));

  console.log('Saved scratch/upvc_top_strips_audit.jpg');
}

auditTopStrips().catch(console.error);
