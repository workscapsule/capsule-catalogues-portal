const fs = require('fs');

const html = fs.readFileSync('scratch/tv_unit_drive_raw.html', 'utf8');

// Check all occurrences of file extensions
const exts = ['jpg', 'jpeg', 'png', 'webp', 'JPG', 'JPEG', 'PNG', 'WEBP'];
const allFound = new Set();
for (const ext of exts) {
  const matches = html.match(new RegExp(`[a-zA-Z0-9_.-]+\\.${ext}`, 'g')) || [];
  matches.forEach(m => allFound.add(m));
}
console.log('Total file matches by extension in raw HTML:', allFound.size);

// Check if there are other files or folders
const dataBlocks = html.match(/\["([a-zA-Z0-9_-]{28,35})",\["([^"]+)"/g) || [];
console.log('Data blocks:', dataBlocks.length);

// Check if any items are in items json
const items = JSON.parse(fs.readFileSync('scratch/tv_unit_drive_items.json', 'utf8'));
console.log('Parsed items in json:', items.length);

// Print all names
items.forEach((it, idx) => {
  console.log(`${idx + 1}: ${it.name} (${it.id})`);
});
