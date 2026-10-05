const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'public', 'assets', 'wall-panels', 'wall-panels-data.json'), 'utf8'));

console.log('Auditing all 60 wall panel image files:');
let total = 0;
data.categories.forEach(cat => {
  cat.items.forEach(item => {
    total++;
    const p = path.join(__dirname, '..', 'public', item.image.startsWith('/') ? item.image.slice(1) : item.image);
    const exists = fs.existsSync(p);
    const size = exists ? fs.statSync(p).size : 0;
    if (!exists || size < 20000) {
      console.warn(`[WARNING] Item ${item.id} file issue: ${p} (exists: ${exists}, size: ${size})`);
    }
  });
});
console.log(`Audited ${total} files. All checked.`);
