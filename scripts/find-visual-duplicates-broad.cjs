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
  const files = [];
  for (let i = 1; i <= 39; i++) {
    const filename = `bar-counter-${String(i).padStart(2, '0')}.jpg`;
    files.push({ index: i, filename, fullPath: path.join(dir, filename) });
  }

  const fingerprints = [];
  for (const f of files) {
    const fp = await getSmallPixelArray(f.fullPath);
    fingerprints.push({ ...f, fp });
  }

  const duplicates = [];
  for (let i = 0; i < fingerprints.length; i++) {
    for (let j = i + 1; j < fingerprints.length; j++) {
      const diff = difference(fingerprints[i].fp, fingerprints[j].fp);
      if (diff < 15.0) {
        duplicates.push({
          a: fingerprints[i].index,
          b: fingerprints[j].index,
          diff: diff.toFixed(2),
          fileA: fingerprints[i].filename,
          fileB: fingerprints[j].filename
        });
      }
    }
  }

  console.log('All pairs with diff < 15.0:');
  console.log(duplicates);
}

run().catch(console.error);
