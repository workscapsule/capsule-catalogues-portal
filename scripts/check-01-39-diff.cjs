const sharp = require('sharp');
const path = require('path');

async function getSmallPixelArray(file) {
  const data = await sharp(file)
    .resize(16, 16, { fit: 'fill' })
    .grayscale()
    .raw()
    .toBuffer();
  return data;
}

function difference(bufA, bufB) {
  let diff = 0;
  for (let i = 0; i < bufA.length; i++) {
    diff += Math.abs(bufA[i] - bufB[i]);
  }
  return diff / bufA.length;
}

async function run() {
  const dir = path.resolve('public/assets/catalogues/bar-counter');
  const fp1 = await getSmallPixelArray(path.join(dir, 'bar-counter-01.jpg'));
  const fp39 = await getSmallPixelArray(path.join(dir, 'bar-counter-39.jpg'));
  console.log('Diff between 01 and 39:', difference(fp1, fp39));
}

run().catch(console.error);
