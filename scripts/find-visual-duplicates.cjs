const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function getSmallPixelArray(file) {
  // Resize to 16x16 grayscale to create a quick 256-pixel fingerprint
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
      if (diff < 5.0) { // threshold for visual duplicate
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

  console.log('Visual duplicate pairs found (diff < 5.0):', duplicates);
  fs.writeFileSync('scratch/visual_duplicates.json', JSON.stringify(duplicates, null, 2));
}

run().catch(console.error);
