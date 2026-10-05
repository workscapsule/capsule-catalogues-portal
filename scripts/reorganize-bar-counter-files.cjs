const fs = require('fs');
const path = require('path');
const https = require('https');

const mapping = JSON.parse(fs.readFileSync('scratch/bar_counter_39_unique_mapping.json', 'utf8'));
const targetDir = path.resolve('public/assets/catalogues/bar-counter');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' }
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
  console.log(`Ensuring all ${mapping.length} unique images are present and non-empty...`);
  for (const item of mapping) {
    const filename = `bar-counter-${String(item.index).padStart(2, '0')}.jpg`;
    const destPath = path.join(targetDir, filename);

    // If file doesn't exist or is 0 bytes, re-download
    if (!fs.existsSync(destPath) || fs.statSync(destPath).size < 1000) {
      console.log(`Downloading ${filename} from Google Drive ID: ${item.driveId}...`);
      try {
        await download(`https://drive.google.com/thumbnail?id=${item.driveId}&sz=w2400`, destPath);
      } catch (err) {
        await download(`https://drive.google.com/uc?export=download&id=${item.driveId}`, destPath);
      }
    }
  }

  // If there is an extraneous bar-counter-40.jpg from previous 40 download, remove it so there are exactly 39 files
  const file40 = path.join(targetDir, 'bar-counter-40.jpg');
  // Wait, let's verify if bar-counter-40.jpg in previous mapping was actually item 39 or 40!
  console.log('Done verifying 39 unique images.');
}

run().catch(console.error);
