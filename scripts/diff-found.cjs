const fs = require('fs');
const html = fs.readFileSync('scratch/tv_unit_drive_raw.html', 'utf8');

const exts = ['jpg', 'jpeg', 'png', 'webp', 'JPG', 'JPEG', 'PNG', 'WEBP'];
const allFound = new Set();
for (const ext of exts) {
  const matches = html.match(new RegExp(`[a-zA-Z0-9_.-]+\\.${ext}`, 'gi')) || [];
  matches.forEach(m => allFound.add(m));
}

const items = JSON.parse(fs.readFileSync('scratch/tv_unit_drive_items.json', 'utf8'));
const itemNames = new Set(items.map(i => i.name));

const notInItems = [];
for (const f of allFound) {
  if (!itemNames.has(f)) {
    notInItems.push(f);
  }
}

console.log('Files in allFound but not in items:', notInItems);
