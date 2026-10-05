const https = require('https');
const fs = require('fs');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  const url = 'https://drive.google.com/drive/folders/1kuxZIEjRpV2V_RCXhYQ-G1U8jEUuZN_h?usp=sharing';
  const html = await fetchUrl(url);
  fs.writeFileSync('scratch/concrete_gdrive.html', html);
  console.log('Saved concrete_gdrive.html, size:', html.length);

  // Parse files
  // Match aria-label="filename.ext ... ssk='5:auSv138:ID-0-16'
  const fileRegex = /aria-label="([^"]+\.(?:jpg|jpeg|png|webp))[^"]*"[\s\S]*?ssk='5:auSv138:([a-zA-Z0-9_-]{25,})-0-16'/gi;
  let m;
  const items = [];
  const map = new Map();
  while ((m = fileRegex.exec(html)) !== null) {
    if (!map.has(m[1])) {
      map.set(m[1], m[2]);
      items.push({ name: m[1], id: m[2] });
    }
  }

  console.log('Found items with primary regex:', items.length);

  // If less than expected or zero, check general image extensions
  const imgHashes = [...new Set(html.match(/[a-f0-9]{32}\.(?:jpg|jpeg|png|webp)/gi) || [])];
  console.log('Found md5 hash images:', imgHashes.length);

  const anyImgs = [...new Set(html.match(/[a-zA-Z0-9_.-]+\.(?:jpg|jpeg|png|webp)/gi) || [])];
  console.log('Any images count:', anyImgs.length);
  console.log('Sample any images:', anyImgs.slice(0, 15));

  // Write what was found
  fs.writeFileSync('scratch/concrete_files.json', JSON.stringify(items, null, 2));
}

run().catch(console.error);
