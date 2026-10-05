const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function cleanImages() {
  const dir = path.resolve('public/assets/catalogues/bar-counter');

  // 1. Model 06
  const f6 = path.join(dir, 'bar-counter-06.jpg');
  const buf6 = fs.readFileSync(f6);
  const m6 = await sharp(buf6).metadata();
  console.log('Image 6 size:', m6.width, m6.height);
  const patchW6 = Math.round(m6.width * 0.18);
  const patchH6 = Math.round(m6.height * 0.08);
  const patch6 = await sharp(buf6)
    .extract({
      left: m6.width - patchW6 - 20,
      top: m6.height - patchH6 - 70,
      width: patchW6,
      height: patchH6
    })
    .blur(1)
    .toBuffer();

  const cleaned6 = await sharp(buf6)
    .composite([
      {
        input: patch6,
        left: m6.width - patchW6 - 5,
        top: m6.height - patchH6 - 5
      }
    ])
    .jpeg({ quality: 95 })
    .toBuffer();
  fs.writeFileSync(f6, cleaned6);
  console.log('Cleaned bar-counter-06.jpg');

  // 2. Model 10
  const f10 = path.join(dir, 'bar-counter-10.jpg');
  const buf10 = fs.readFileSync(f10);
  const m10 = await sharp(buf10).metadata();
  console.log('Image 10 size:', m10.width, m10.height);
  const patchW10 = Math.round(m10.width * 0.12);
  const patchH10 = Math.round(m10.height * 0.06);
  const patch10 = await sharp(buf10)
    .extract({
      left: 10,
      top: m10.height - patchH10 - 50,
      width: patchW10,
      height: patchH10
    })
    .blur(1)
    .toBuffer();

  const cleaned10 = await sharp(buf10)
    .composite([
      {
        input: patch10,
        left: 5,
        top: m10.height - patchH10 - 5
      }
    ])
    .jpeg({ quality: 95 })
    .toBuffer();
  fs.writeFileSync(f10, cleaned10);
  console.log('Cleaned bar-counter-10.jpg');

  // 3. Model 21
  const f21 = path.join(dir, 'bar-counter-21.jpg');
  const buf21 = fs.readFileSync(f21);
  const m21 = await sharp(buf21).metadata();
  console.log('Image 21 size:', m21.width, m21.height);
  const patchW21 = Math.round(m21.width * 0.12);
  const patchH21 = Math.round(m21.height * 0.06);
  const patch21 = await sharp(buf21)
    .extract({
      left: m21.width - patchW21 - 20,
      top: m21.height - patchH21 - 50,
      width: patchW21,
      height: patchH21
    })
    .blur(1)
    .toBuffer();

  const cleaned21 = await sharp(buf21)
    .composite([
      {
        input: patch21,
        left: m21.width - patchW21 - 5,
        top: m21.height - patchH21 - 5
      }
    ])
    .jpeg({ quality: 95 })
    .toBuffer();
  fs.writeFileSync(f21, cleaned21);
  console.log('Cleaned bar-counter-21.jpg');
}

cleanImages().catch(console.error);
