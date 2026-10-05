const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function checkWatermarks() {
  const dir = path.join(__dirname, '..', 'public', 'assets', 'wooden-flooring');
  const scratchDir = path.join(__dirname, '..', 'scratch');

  // Check top 20% and bottom 20% strips
  const topStrips = [];
  const botStrips = [];

  for (let i = 1; i <= 30; i++) {
    const fn = `wf-${String(i).padStart(2, '0')}.jpg`;
    const full = path.join(dir, fn);
    const m = await sharp(full).metadata();

    const topH = Math.round(m.height * 0.2);
    const botH = Math.round(m.height * 0.2);

    const topBuf = await sharp(full)
      .extract({ left: 0, top: 0, width: m.width, height: topH })
      .resize(400, 100, { fit: 'cover' })
      .toBuffer();
    topStrips.push({ input: topBuf, left: (i - 1) % 5 * 400, top: Math.floor((i - 1) / 5) * 100 });

    const botBuf = await sharp(full)
      .extract({ left: 0, top: m.height - botH, width: m.width, height: botH })
      .resize(400, 100, { fit: 'cover' })
      .toBuffer();
    botStrips.push({ input: botBuf, left: (i - 1) % 5 * 400, top: Math.floor((i - 1) / 5) * 100 });
  }

  await sharp({
    create: { width: 2000, height: 600, channels: 3, background: { r: 255, g: 255, b: 255 } }
  }).composite(topStrips).jpeg({ quality: 80 }).toFile(path.join(scratchDir, 'wf_top_strips.jpg'));

  await sharp({
    create: { width: 2000, height: 600, channels: 3, background: { r: 255, g: 255, b: 255 } }
  }).composite(botStrips).jpeg({ quality: 80 }).toFile(path.join(scratchDir, 'wf_bottom_strips.jpg'));

  console.log('Saved top and bottom strips for WF audit');
}
checkWatermarks().catch(console.error);
