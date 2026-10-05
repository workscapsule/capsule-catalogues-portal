const fs = require('fs');
const path = require('path');
const https = require('https');

const raw = JSON.parse(fs.readFileSync(path.join(__dirname, 'wall-panels-scraped-raw.json'), 'utf8'));
const list = raw['04-3d-wall-panels'];

console.log('Total 3D items:', list.length);
list.slice(0, 10).forEach((item, i) => {
  console.log(`[${i}] Title: ${item.title} URL: ${item.origUrl || item.url}`);
});
