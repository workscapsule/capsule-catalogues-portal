const fs = require('fs');
const https = require('https');
const path = require('path');
const sharp = require('sharp');

const files = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'scratch', 'paint_texture_files.json'), 'utf8'));

console.log(`Starting download of ${files.length} authentic Google Drive Paint Texture Wall images...`);

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(fs.statSync(dest).size));
      });
    }).on('error', reject);
  });
}

async function run() {
  const targetDir = path.resolve(__dirname, '..', 'public', 'assets', 'paint-texture');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const results = [];

  for (let i = 0; i < files.length; i++) {
    const item = files[i];
    const index = i + 1;
    const destName = `ptw-${String(index).padStart(2, '0')}.jpg`;
    const destPath = path.join(targetDir, destName);

    console.log(`[${index}/${files.length}] Downloading ${item.name} (${item.id})...`);
    try {
      let size = 0;
      try {
        size = await download(`https://drive.google.com/thumbnail?id=${item.id}&sz=w2400`, destPath);
      } catch (err) {
        size = await download(`https://drive.google.com/uc?export=download&id=${item.id}`, destPath);
      }
      const meta = await sharp(destPath).metadata();
      console.log(` -> SUCCESS: ${destName} (${meta.width}x${meta.height}, ${(size / 1024).toFixed(1)} KB)`);
      results.push({
        index,
        refId: `PTW-${String(index).padStart(2, '0')}`,
        originalName: item.name,
        driveId: item.id,
        fileName: destName,
        relPath: `assets/paint-texture/${destName}`,
        width: meta.width,
        height: meta.height,
        size
      });
    } catch (e) {
      console.error(` -> FAILED: ${destName}`, e.message);
    }
  }

  fs.writeFileSync(path.join(__dirname, '..', 'scratch', 'downloaded_paint_texture_results.json'), JSON.stringify(results, null, 2));
  console.log(`\nSuccessfully downloaded ${results.length} / ${files.length} Paint Texture Wall files!`);
}

run().catch(console.error);
