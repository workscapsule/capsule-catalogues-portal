const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function cleanTvImages() {
  const dir = path.resolve('public/assets/catalogues/tv-units');

  // 1. tv-11.jpg (Meta AI watermark at bottom right)
  {
    const file = path.join(dir, 'tv-11.jpg');
    const buf = fs.readFileSync(file);
    const meta = await sharp(buf).metadata();
    console.log('tv-11 size:', meta.width, meta.height);
    // Meta AI is around bottom right: right 15%, bottom 6%
    const patchW = Math.round(meta.width * 0.14);
    const patchH = Math.round(meta.height * 0.05);
    const patch = await sharp(buf)
      .extract({
        left: meta.width - patchW - Math.round(meta.width * 0.12),
        top: meta.height - patchH - 10,
        width: patchW,
        height: patchH
      })
      .blur(0.5)
      .toBuffer();

    const cleaned = await sharp(buf)
      .composite([{
        input: patch,
        left: meta.width - patchW - 10,
        top: meta.height - patchH - 10
      }])
      .jpeg({ quality: 95 })
      .toBuffer();
    fs.writeFileSync(file, cleaned);
    console.log('Cleaned tv-11.jpg');
  }

  // 2. tv-17.jpg (Blue circle at bottom right)
  {
    const file = path.join(dir, 'tv-17.jpg');
    const buf = fs.readFileSync(file);
    const meta = await sharp(buf).metadata();
    console.log('tv-17 size:', meta.width, meta.height);
    const patchW = Math.round(meta.width * 0.14);
    const patchH = Math.round(meta.height * 0.13);
    const patch = await sharp(buf)
      .extract({
        left: meta.width - patchW - Math.round(meta.width * 0.15),
        top: meta.height - patchH - 10,
        width: patchW,
        height: patchH
      })
      .toBuffer();

    const cleaned = await sharp(buf)
      .composite([{
        input: patch,
        left: meta.width - patchW - 15,
        top: meta.height - patchH - 10
      }])
      .jpeg({ quality: 95 })
      .toBuffer();
    fs.writeFileSync(file, cleaned);
    console.log('Cleaned tv-17.jpg');
  }

  // 3. tv-20.jpg (Star icon at bottom right)
  {
    const file = path.join(dir, 'tv-20.jpg');
    const buf = fs.readFileSync(file);
    const meta = await sharp(buf).metadata();
    console.log('tv-20 size:', meta.width, meta.height);
    const patchW = Math.round(meta.width * 0.08);
    const patchH = Math.round(meta.height * 0.06);
    const patch = await sharp(buf)
      .extract({
        left: meta.width - patchW - Math.round(meta.width * 0.10),
        top: meta.height - patchH - 20,
        width: patchW,
        height: patchH
      })
      .toBuffer();

    const cleaned = await sharp(buf)
      .composite([{
        input: patch,
        left: meta.width - patchW - 15,
        top: meta.height - patchH - 20
      }])
      .jpeg({ quality: 95 })
      .toBuffer();
    fs.writeFileSync(file, cleaned);
    console.log('Cleaned tv-20.jpg');
  }

  // 4. tv-24.jpg (Left chevron < and right ... and bottom-left white mark)
  {
    const file = path.join(dir, 'tv-24.jpg');
    const buf = fs.readFileSync(file);
    const meta = await sharp(buf).metadata();
    console.log('tv-24 size:', meta.width, meta.height);

    // Left chevron at left: ~15% to 23%, top: ~20% to 30%
    const patchLeft = await sharp(buf)
      .extract({
        left: Math.round(meta.width * 0.18),
        top: Math.round(meta.height * 0.35),
        width: Math.round(meta.width * 0.08),
        height: Math.round(meta.height * 0.12)
      })
      .toBuffer();

    // Right ... at right: ~78% to 85%, top: ~20% to 30%
    const patchRight = await sharp(buf)
      .extract({
        left: Math.round(meta.width * 0.77),
        top: Math.round(meta.height * 0.12),
        width: Math.round(meta.width * 0.08),
        height: Math.round(meta.height * 0.12)
      })
      .toBuffer();

    // Bottom left mark at left: ~15%, bottom: ~25%
    const patchBL = await sharp(buf)
      .extract({
        left: Math.round(meta.width * 0.25),
        top: Math.round(meta.height * 0.72),
        width: Math.round(meta.width * 0.06),
        height: Math.round(meta.height * 0.06)
      })
      .toBuffer();

    const cleaned = await sharp(buf)
      .composite([
        {
          input: patchLeft,
          left: Math.round(meta.width * 0.155),
          top: Math.round(meta.height * 0.20)
        },
        {
          input: patchRight,
          left: Math.round(meta.width * 0.77),
          top: Math.round(meta.height * 0.20)
        },
        {
          input: patchBL,
          left: Math.round(meta.width * 0.15),
          top: Math.round(meta.height * 0.73)
        }
      ])
      .jpeg({ quality: 95 })
      .toBuffer();
    fs.writeFileSync(file, cleaned);
    console.log('Cleaned tv-24.jpg');
  }
}

cleanTvImages().catch(console.error);
