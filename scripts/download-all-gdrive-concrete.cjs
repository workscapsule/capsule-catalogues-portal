const fs = require('fs');
const https = require('https');
const path = require('path');

const raw = JSON.parse(fs.readFileSync('scratch/concrete_files.json', 'utf8'));

// Deduplicate
const map = new Map();
raw.forEach(item => {
  if (!map.has(item.name)) {
    map.set(item.name, item.id);
  }
});

const files = Array.from(map.entries()).map(([name, id]) => ({ name, id }));
files.sort((a, b) => a.name.localeCompare(b.name));

console.log(`Starting download of ${files.length} authentic Google Drive Concrete Unit images...`);

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
  const targetDir = path.resolve('public/assets/catalogues/concrete-unit');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const results = [];

  for (let i = 0; i < files.length; i++) {
    const item = files[i];
    const index = i + 1;
    const destName = `concrete-${String(index).padStart(2, '0')}.jpg`;
    const destPath = path.join(targetDir, destName);

    console.log(`[${index}/${files.length}] Downloading ${item.name} (Drive ID: ${item.id}) -> ${destName}...`);
    try {
      let size = 0;
      try {
        size = await download(`https://drive.google.com/thumbnail?id=${item.id}&sz=w2400`, destPath);
      } catch (err) {
        size = await download(`https://drive.google.com/uc?export=download&id=${item.id}`, destPath);
      }
      console.log(` -> SUCCESS: ${destName} (${size} bytes)`);
      results.push({
        index,
        originalName: item.name,
        driveId: item.id,
        destName,
        size,
        status: 'OK'
      });
    } catch (e) {
      console.error(` -> FAILED: ${destName}`, e.message);
      results.push({
        index,
        originalName: item.name,
        driveId: item.id,
        destName,
        error: e.message,
        status: 'FAILED'
      });
    }
  }

  fs.writeFileSync('scratch/concrete_50_mapping.json', JSON.stringify(results, null, 2));
  console.log('All downloads completed! Mapping written to scratch/concrete_50_mapping.json');
}

run().catch(console.error);
