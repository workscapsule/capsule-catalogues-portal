const fs = require('fs');
const https = require('https');
const path = require('path');
const sharp = require('sharp');

const filesPath = path.join(__dirname, '..', 'scratch', 'lighting_files.json');
if (!fs.existsSync(filesPath)) {
  console.error('lighting_files.json not found yet.');
  process.exit(1);
}

const files = JSON.parse(fs.readFileSync(filesPath, 'utf8'));
console.log(`Starting download of ${files.length} authentic Google Drive Lighting images...`);

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
      timeout: 15000
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        res.resume();
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        res.resume();
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(fs.statSync(dest).size));
      });
    });
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Timeout'));
    });
    req.on('error', reject);
  });
}

async function run() {
  const targetDir = path.resolve(__dirname, '..', 'public', 'assets', 'lighting-fixtures');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const results = [];

  for (let i = 0; i < files.length; i++) {
    const item = files[i];
    const index = i + 1;
    const destName = `lighting-${String(index).padStart(2, '0')}.jpg`;
    const destPath = path.join(targetDir, destName);

    // If already downloaded and valid, skip download
    if (fs.existsSync(destPath) && fs.statSync(destPath).size > 1000) {
      try {
        const meta = await sharp(destPath).metadata();
        const size = fs.statSync(destPath).size;
        console.log(`[${index}/${files.length}] Already downloaded: ${destName} (${meta.width}x${meta.height}, ${(size / 1024).toFixed(1)} KB)`);
        results.push({
          index,
          refId: `LTG-${String(index).padStart(2, '0')}`,
          originalName: item.name,
          driveId: item.id,
          fileName: destName,
          relPath: `assets/lighting-fixtures/${destName}`,
          width: meta.width,
          height: meta.height,
          size
        });
        continue;
      } catch (err) {
        // file corrupt, re-download
      }
    }

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
        refId: `LTG-${String(index).padStart(2, '0')}`,
        originalName: item.name,
        driveId: item.id,
        fileName: destName,
        relPath: `assets/lighting-fixtures/${destName}`,
        width: meta.width,
        height: meta.height,
        size
      });
    } catch (e) {
      console.error(` -> FAILED: ${destName}`, e.message);
    }
  }

  fs.writeFileSync(path.join(__dirname, '..', 'scratch', 'downloaded_lighting_results.json'), JSON.stringify(results, null, 2));
  console.log(`\nSuccessfully saved ${results.length} / ${files.length} Lighting files!`);
}

run().catch(console.error);
