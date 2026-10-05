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
  const html = await fetchUrl('https://drive.google.com/drive/folders/1IrnIoxYEjj9nReiLxYgOkLYkk9uQM_GU?usp=sharing');
  fs.writeFileSync('scratch/gdrive_page.html', html);
  console.log('Saved gdrive_page.html, size:', html.length);
  
  // Look for file hashes or names
  const regex = /([a-f0-9]{32}\.jpg)/g;
  const matches = [...new Set(html.match(regex) || [])];
  console.log('Matching .jpg hashes found:', matches.length, matches.slice(0, 10));
}

run().catch(console.error);
