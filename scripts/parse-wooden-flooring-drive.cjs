const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '..', 'scratch', 'wf_drive.html'), 'utf8');

const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
console.log('Folder Title:', titleMatch ? titleMatch[1] : 'Unknown');

const itemsMap = new Map();

// Look for patterns like ["id",["filename.ext"
const regex1 = /\["([a-zA-Z0-9_-]{25,})",\["([^"]+?\.(?:jpg|jpeg|png|webp|avif))"/gi;
let m;
while ((m = regex1.exec(html)) !== null) {
  itemsMap.set(m[1], m[2]);
}

// Look for pattern like ["id","filename.ext"
const regex2 = /\["([a-zA-Z0-9_-]{25,})","([^"]+?\.(?:jpg|jpeg|png|webp|avif))"/gi;
while ((m = regex2.exec(html)) !== null) {
  itemsMap.set(m[1], m[2]);
}

// Search for ssk pattern
const regex3 = /aria-label="([^"]+?\.(?:jpg|jpeg|png|webp))[^"]*"[\s\S]*?ssk='5:auSv138:([a-zA-Z0-9_-]{25,})-0-16'/gi;
while ((m = regex3.exec(html)) !== null) {
  itemsMap.set(m[2], m[1]);
}

// Look for data-id in html
const regex4 = /data-id="([a-zA-Z0-9_-]{25,})"[^>]*aria-label="([^"]+?\.(?:jpg|jpeg|png|webp))"/gi;
while ((m = regex4.exec(html)) !== null) {
  itemsMap.set(m[1], m[2]);
}

// Reverse aria-label data-id
const regex5 = /aria-label="([^"]+?\.(?:jpg|jpeg|png|webp))"[^>]*data-id="([a-zA-Z0-9_-]{25,})"/gi;
while ((m = regex5.exec(html)) !== null) {
  itemsMap.set(m[2], m[1]);
}

console.log('Total unique images found:', itemsMap.size);

const list = Array.from(itemsMap.entries()).map(([id, name]) => ({ id, name }));
console.log('First 5:', list.slice(0, 5));
console.log('Last 5:', list.slice(-5));

fs.writeFileSync(path.join(__dirname, '..', 'scratch', 'wooden_flooring_files.json'), JSON.stringify(list, null, 2));
