const https = require('https');
const fs = require('fs');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' }
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
  const url = 'https://drive.google.com/drive/folders/17euvrqwm2zqMVWa5KnBqiL44ke-EV074?usp=sharing';
  console.log('Fetching Google Drive folder:', url);
  const html = await fetchUrl(url);
  fs.writeFileSync('scratch/tv_unit_drive_raw.html', html);
  console.log('Saved scratch/tv_unit_drive_raw.html, size:', html.length);

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

  // Also search for JSON blobs in html
  const idMatches = html.match(/\["([a-zA-Z0-9_-]{28,35})",\["([^"]+\.(?:jpg|jpeg|png|webp|JPG|PNG))"/g) || [];
  console.log('Found items with json blob regex:', idMatches.length);
  for (const block of idMatches) {
    const sub = block.match(/\["([a-zA-Z0-9_-]{28,35})",\["([^"]+)"/);
    if (sub && !map.has(sub[2])) {
      map.set(sub[2], sub[1]);
      items.push({ name: sub[2], id: sub[1] });
    }
  }

  console.log('Total items found so far:', items.length);
  fs.writeFileSync('scratch/tv_unit_drive_items.json', JSON.stringify(items, null, 2));
}

run().catch(console.error);
