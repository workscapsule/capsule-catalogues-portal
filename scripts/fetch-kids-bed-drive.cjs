const https = require('https');
const fs = require('fs');
const path = require('path');

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
  const url = 'https://drive.google.com/drive/folders/1aboaHyTUOYoy819eXCNB15txzsldnGjD?usp=sharing';
  console.log('Fetching Google Drive folder:', url);
  const html = await fetchUrl(url);
  fs.writeFileSync('scratch/kids_bed_gdrive.html', html);
  console.log('Saved scratch/kids_bed_gdrive.html, size:', html.length);

  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  console.log('Folder Title:', titleMatch ? titleMatch[1] : 'Unknown');

  // Match file labels and IDs
  // Regex 1: aria-label="filename.ext ... ssk='5:auSv138:ID-0-16'
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

  // If none or few, extract JSON data blobs in HTML
  if (items.length === 0) {
    // Look for patterns like [\"id\",\"filename.jpg\"...] or similar
    const dataBlocks = html.match(/\[\"[a-zA-Z0-9_-]{25,}\",\[\"[^\"]+\.(?:jpg|jpeg|png|webp)\"/gi) || [];
    console.log('Alternative data blocks found:', dataBlocks.length);
  }

  fs.writeFileSync('scratch/kids_bed_files.json', JSON.stringify(items, null, 2));
}

run().catch(console.error);
