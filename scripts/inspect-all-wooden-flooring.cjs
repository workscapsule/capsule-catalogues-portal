const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function makeSheets() {
  const dir = path.join(__dirname, '..', 'public', 'assets', 'wooden-flooring');
  const scratchDir = path.join(__dirname, '..', 'scratch');

  // Create 3 sheets of 10 images each (2 rows x 5 cols)
  for (let s = 0; s < 3; s++) {
    const start = s * 10 + 1;
    const end = start + 10;
    const resized = [];

    for (let i = start; i < end; i++) {
      const fn = `wf-${String(i).padStart(2, '0')}.jpg`;
      const full = path.join(dir, fn);
      const buf = await sharp(full)
        .resize(300, 400, { fit: 'cover', position: 'center' })
        .toBuffer();
      resized.push(buf);
    }

    const comps = [];
    resized.forEach((buf, idx) => {
      const col = idx % 5;
      const row = Math.floor(idx / 5);
      comps.push({ input: buf, left: col * 300, top: row * 400 });
    });

    await sharp({
      create: { width: 1500, height: 800, channels: 3, background: { r: 240, g: 240, b: 240 } }
    }).composite(comps).jpeg({ quality: 85 }).toFile(path.join(scratchDir, `wf_batch_${s + 1}.jpg`));

    console.log(`Saved wf_batch_${s + 1}.jpg`);
  }
}
makeSheets().catch(console.error);
