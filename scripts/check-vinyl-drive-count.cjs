const fs = require('fs');
const html = fs.readFileSync('scratch/vinyl_flooring_gdrive.html', 'utf8');
const unescaped = html.replace(/\\x22/g, '"').replace(/\\x5b/g, '[').replace(/\\x5d/g, ']').replace(/\\\//g, '/');

const folderId = '1RF3YQ3HRJKTW6yrrtLLVR36kwnjS1v8j';
let count = 0;
let pos = 0;
while ((pos = unescaped.indexOf(folderId, pos)) !== -1) {
  count++;
  pos += folderId.length;
}
console.log('Folder ID occurrences:', count);

const regex = /"([a-zA-Z0-9_-]{25,40})",\["1RF3YQ3HRJKTW6yrrtLLVR36kwnjS1v8j"\],"([^"]+?)"/gi;
const found = new Map();
let m;
while ((m = regex.exec(unescaped)) !== null) {
  found.set(m[1], m[2]);
}
console.log('Total unique files in folder with parent match:', found.size);

// Also any image file mentioned in the HTML
const imgRegex = /"([a-zA-Z0-9_-]{28,40})","([^"]+?\.(?:jpg|jpeg|png|webp|avif))"/gi;
while ((m = imgRegex.exec(unescaped)) !== null) {
  if (m[1] !== folderId && !found.has(m[1])) {
    found.set(m[1], m[2]);
  }
}
console.log('Total unique files found overall:', found.size);
for (const [id, name] of found.entries()) {
  console.log(id, '->', name);
}

const fileList = Array.from(found.entries()).map(([id, name]) => ({ id, name }));
fs.writeFileSync('scratch/vinyl_flooring_files.json', JSON.stringify(fileList, null, 2));
