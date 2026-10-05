const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const fixturesDir = path.join(__dirname, '..', 'public', 'assets', 'lighting-fixtures');

async function enhanceAllImages() {
  const files = fs.readdirSync(fixturesDir).filter(f => f.startsWith('lighting-') && f.endsWith('.jpg') && !f.includes('fixed'));
  console.log(`Found ${files.length} images to enhance for maximum clarity...`);

  for (let i = 0; i < files.length; i++) {
    const filename = files[i];
    const filePath = path.join(fixturesDir, filename);
    const buf = fs.readFileSync(filePath);

    try {
      const meta = await sharp(buf, { failOn: 'none' }).metadata();
      const currentW = meta.width || 800;
      const currentH = meta.height || 800;

      // Target high resolution: long edge at least 1800px, short edge at least 1200px
      let targetW = currentW;
      let targetH = currentH;

      const scale = Math.max(1800 / Math.max(currentW, currentH), 1200 / Math.min(currentW, currentH));
      if (scale > 1.0) {
        targetW = Math.round(currentW * scale);
        targetH = Math.round(currentH * scale);
      }

      const enhanced = await sharp(buf, { failOn: 'none' })
        .resize({
          width: targetW,
          height: targetH,
          fit: 'fill',
          kernel: sharp.kernel.lanczos3
        })
        .sharpen({
          sigma: 1.3,
          m1: 1.15,
          m2: 2.4
        })
        .modulate({
          brightness: 1.02,
          saturation: 1.06
        })
        .jpeg({
          quality: 96,
          chromaSubsampling: '4:4:4',
          mozjpeg: true
        })
        .toBuffer();

      fs.writeFileSync(filePath, enhanced);
      console.log(`[${i + 1}/${files.length}] Enhanced ${filename}: ${currentW}x${currentH} -> ${targetW}x${targetH} (${(enhanced.length / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`Error enhancing ${filename}:`, err);
    }
  }

  console.log('All lighting images enhanced with crystal clarity!');
}

enhanceAllImages().catch(console.error);
