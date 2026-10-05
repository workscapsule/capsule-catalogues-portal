const fs = require('fs');
const https = require('https');

const html = fs.readFileSync('scratch/gdrive_page.html', 'utf8');

// Regex for aria-label="filename" ... ssk='5:auSv138:ID-0-16'
// Or data-id or similar
const fileRegex = /aria-label="([a-f0-9]{32}\.jpg)[^"]*"[\s\S]*?ssk='5:auSv138:([a-zA-Z0-9_-]{25,})-0-16'/g;

let match;
const items = [];
while ((match = fileRegex.exec(html)) !== null) {
  items.push({ name: match[1], id: match[2] });
}

console.log('Extracted items count:', items.length);
if (items.length < 42) {
  // Let's try alternative regex
  const altRegex = /ssk='5:auSv138:([a-zA-Z0-9_-]{25,})-0-16'[\s\S]*?aria-label="([a-f0-9]{32}\.jpg)/g;
  while ((match = altRegex.exec(html)) !== null) {
    items.push({ name: match[2], id: match[1] });
  }
  console.log('With alt regex count:', items.length);
}

// Write to json
fs.writeFileSync('scratch/gdrive_files.json', JSON.stringify(items, null, 2));
console.log('First 5 items:', items.slice(0, 5));

// Test downloading the first item
if (items.length > 0) {
  const testId = items[0].id;
  const testName = items[0].name;
  console.log(`Testing download of ${testName} (ID: ${testId})...`);
  
  function download(url, dest) {
    return new Promise((resolve, reject) => {
      https.get(url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
      }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return download(res.headers.location, dest).then(resolve).catch(reject);
        }
        if (res.statusCode !== 200) {
          return reject(new Error(`Failed with status ${res.statusCode}`));
        }
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => {
          file.close(() => resolve(fs.statSync(dest).size));
        });
      }).on('error', reject);
    });
  }

  // Google Drive thumbnail with max resolution w2000 or export=download
  download(`https://drive.google.com/thumbnail?id=${testId}&sz=w2000`, 'scratch/test_img1.jpg')
    .then(size => console.log(`Thumbnail downloaded! Size: ${size} bytes`))
    .catch(err => {
      console.log('Thumbnail failed:', err.message);
      return download(`https://drive.google.com/uc?export=download&id=${testId}`, 'scratch/test_img1.jpg')
        .then(size => console.log(`UC export downloaded! Size: ${size} bytes`));
    })
    .catch(console.error);
}
