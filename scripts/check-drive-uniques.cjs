const fs = require('fs');

const html = fs.readFileSync('scratch/bar_counter_gdrive.html', 'utf8');

// Match all IDs and labels
const fileRegex = /aria-label="([^"]+\.(?:jpg|jpeg|png|webp))[^"]*"[\s\S]*?ssk='5:auSv138:([a-zA-Z0-9_-]{25,})-0-16'/gi;
let m;
const items = [];
const set = new Set();
while ((m = fileRegex.exec(html)) !== null) {
  items.push({ name: m[1], id: m[2] });
  set.add(m[2]);
}

console.log('Total file matches in HTML:', items.length);
console.log('Unique file IDs in HTML:', set.size);

// Look for any other image extensions
const anyImage = html.match(/[\w-]+\.(?:jpg|jpeg|png|webp)/gi) || [];
const uniqueImages = Array.from(new Set(anyImage));
console.log('Unique image names found anywhere in HTML:', uniqueImages.length);
console.log(uniqueImages);
