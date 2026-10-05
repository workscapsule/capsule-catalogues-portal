const fs = require('fs');
const path = require('path');

let html = fs.readFileSync(path.join(__dirname, '..', 'scratch', 'wall_fabric_gdrive.html'), 'utf8');

// Unescape hex sequences
const unescaped = html.replace(/\\x22/g, '"').replace(/\\x5b/g, '[').replace(/\\x5d/g, ']').replace(/\\\//g, '/');

const regex = /"([a-zA-Z0-9_-]{25,40})",\["1BHguq0FeiIqmUhliLvu8tPlk2dE634Mk"\],"([^"]+?\.(?:jpg|jpeg|png|webp|avif))"/gi;
let match;
const filesMap = new Map();

while ((match = regex.exec(unescaped)) !== null) {
  const id = match[1];
  const name = match[2];
  if (!filesMap.has(id)) {
    filesMap.set(id, name);
  }
}

// Also check aria-label elements if any IDs are associated
const ariaRegex = /aria-label="([^"]+?\.(?:jpg|jpeg|png|webp|avif))(?:\s+Image\s+Shared)?"/gi;
const allNames = [];
while ((match = ariaRegex.exec(html)) !== null) {
  allNames.push(match[1]);
}

console.log(`Found ${filesMap.size} files in Drive internal data matching parent folder!`);
console.log(`Found ${allNames.length} names in aria-labels:`, [...new Set(allNames)]);

const fileList = Array.from(filesMap.entries()).map(([id, name]) => ({ id, name }));
console.log('List of files:');
fileList.forEach((f, i) => console.log(`${i + 1}. [${f.id}] ${f.name}`));

fs.writeFileSync(path.join(__dirname, '..', 'scratch', 'wall_fabric_files.json'), JSON.stringify(fileList, null, 2));
console.log(`Saved ${fileList.length} files to scratch/wall_fabric_files.json`);
