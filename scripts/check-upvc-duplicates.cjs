const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

async function checkPerceptual() {
  const dir = path.join(__dirname, '..', 'public', 'assets', 'upvc-windows-doors');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg')).sort();
  const thumbs = [];

  for (const f of files) {
    const raw = await sharp(path.join(dir, f))
      .resize(16, 16, { fit: 'fill' })
      .grayscale()
      .raw()
      .toBuffer();
    thumbs.push({ file: f, raw });
  }

  const dupes = [];
  for (let i = 0; i < thumbs.length; i++) {
    for (let j = i + 1; j < thumbs.length; j++) {
      let diff = 0;
      for (let k = 0; k < 256; k++) {
        diff += Math.abs(thumbs[i].raw[k] - thumbs[j].raw[k]);
      }
      const avgDiff = diff / 256;
      if (avgDiff < 14) {
        console.log(`Visual match: ${thumbs[i].file} and ${thumbs[j].file} (diff: ${avgDiff.toFixed(2)})`);
        dupes.push({ file1: thumbs[i].file, file2: thumbs[j].file, diff: avgDiff });
      }
    }
  }

  console.log(`Total close visual matches: ${dupes.length}`);
}

checkPerceptual().catch(console.error);
