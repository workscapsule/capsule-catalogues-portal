const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const RAW_FILE = path.join(__dirname, 'wall-panels-scraped-raw.json');
const STAGING_DIR = path.join(__dirname, 'candidates_images');

if (!fs.existsSync(STAGING_DIR)) {
  fs.mkdirSync(STAGING_DIR, { recursive: true });
}

const rawData = JSON.parse(fs.readFileSync(RAW_FILE, 'utf8'));

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      return resolve(dest);
    }
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      if (res.statusCode === 200) {
        const fileStream = fs.createWriteStream(dest);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          resolve(dest);
        });
      } else if (res.statusCode === 301 || res.statusCode === 302) {
        downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      } else {
        reject(new Error(`Status ${res.statusCode} for ${url}`));
      }
    });
    req.on('error', reject);
    req.setTimeout(25000, () => {
      req.destroy();
      reject(new Error(`Timeout downloading ${url}`));
    });
  });
}

async function run() {
  console.log('Downloading candidates for review...');
  for (const [catKey, pins] of Object.entries(rawData)) {
    const catDir = path.join(STAGING_DIR, catKey);
    if (!fs.existsSync(catDir)) fs.mkdirSync(catDir, { recursive: true });

    console.log(`\nProcessing ${catKey} (${pins.length} pins)...`);
    for (let i = 0; i < pins.length; i++) {
      const pin = pins[i];
      const ext = path.extname(new URL(pin.imageUrl).pathname) || '.jpg';
      const dest = path.join(catDir, `cand_${i + 1}_${pin.pinId}${ext}`);
      try {
        await downloadFile(pin.imageUrl, dest);
        pin.localPath = dest;
        pin.relativeLocal = `candidates_images/${catKey}/cand_${i + 1}_${pin.pinId}${ext}`;
        process.stdout.write(`.`);
      } catch (err) {
        console.error(`\nFailed cand ${i + 1}: ${err.message}`);
      }
    }
  }

  // Update raw JSON with local paths
  fs.writeFileSync(RAW_FILE, JSON.stringify(rawData, null, 2));
  console.log('\nAll candidate downloads completed!');
}

run().catch(console.error);
