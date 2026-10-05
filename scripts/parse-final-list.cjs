const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '..', 'scratch', 'wf_drive_scrolled.html'), 'utf8');

const reg1 = /\["([a-zA-Z0-9_-]{25,})",\["([^"]+?\.(?:jpg|jpeg|png|webp|avif))"/gi;
const map = new Map();
let m;
while ((m = reg1.exec(html)) !== null) {
  map.set(m[1], m[2]);
}

const reg2 = /aria-label="([^"]+?\.(?:jpg|jpeg|png|webp|avif))"[^>]*data-id="([a-zA-Z0-9_-]{25,})"/gi;
while ((m = reg2.exec(html)) !== null) {
  map.set(m[2], m[1]);
}

const reg3 = /data-id="([a-zA-Z0-9_-]{25,})"[^>]*aria-label="([^"]+?\.(?:jpg|jpeg|png|webp|avif))"/gi;
while ((m = reg3.exec(html)) !== null) {
  map.set(m[1], m[2]);
}

console.log('Total verified images in folder:', map.size);
const arr = Array.from(map.entries()).map(([id, name]) => ({ id, name }));
fs.writeFileSync(path.join(__dirname, '..', 'scratch', 'wooden_flooring_final_list.json'), JSON.stringify(arr, null, 2));

arr.forEach((x, i) => {
  console.log(`${i + 1}. [${x.id}] ${x.name}`);
});
