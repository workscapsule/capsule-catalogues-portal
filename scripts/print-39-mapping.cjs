const fs = require('fs');
const mapping = JSON.parse(fs.readFileSync('scratch/bar_counter_39_unique_mapping.json', 'utf8'));

console.log('List of all 39 unique mappings:');
mapping.forEach(m => {
  console.log(`[P/${String(m.index).padStart(2, '0')}] ${m.modelCode} -> ${m.imagePath} (Orig: ${m.originalName})`);
});
