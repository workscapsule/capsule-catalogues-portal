const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const raw = JSON.parse(fs.readFileSync('scratch/bar_counter_files.json', 'utf8'));

// Deduplicate by name and also by content hash
const targetDir = path.resolve('public/assets/catalogues/bar-counter');
const uniqueFiles = [];
const seenHashes = new Set();
const seenNames = new Set();

// Sort raw by original name
const sorted = [...raw].sort((a, b) => a.name.localeCompare(b.name));

for (let i = 0; i < sorted.length; i++) {
  const item = sorted[i];
  // Remove " (1)" if present to detect duplicate uploads
  const cleanName = item.name.replace(/\s*\(\d+\)/, '');
  
  // Also check file hash of downloaded file if exists
  const candidateIndex = i + 1;
  const candidatePath = path.join(targetDir, `bar-counter-${String(candidateIndex).padStart(2, '0')}.jpg`);
  let hash = '';
  if (fs.existsSync(candidatePath)) {
    hash = crypto.createHash('sha256').update(fs.readFileSync(candidatePath)).digest('hex');
  }

  if (seenHashes.has(hash) && hash !== '') {
    console.log(`Skipping exact content duplicate: ${item.name} (hash match)`);
    continue;
  }
  if (seenNames.has(cleanName)) {
    console.log(`Skipping name duplicate: ${item.name}`);
    continue;
  }

  seenHashes.add(hash);
  seenNames.add(cleanName);
  uniqueFiles.push(item);
}

console.log(`Total unique Bar Counter images: ${uniqueFiles.length}`);

// Now save cleanly organized files 1 to 39
const reindexedDir = path.resolve('public/assets/catalogues/bar-counter');
const mapping = [];

for (let i = 0; i < uniqueFiles.length; i++) {
  const item = uniqueFiles[i];
  const newIndex = i + 1;
  const newFilename = `bar-counter-${String(newIndex).padStart(2, '0')}.jpg`;
  
  mapping.push({
    index: newIndex,
    modelCode: `BC-S${newIndex}`,
    pageNumber: `P/${String(newIndex).padStart(2, '0')}`,
    originalName: item.name,
    driveId: item.id,
    imagePath: `/assets/catalogues/bar-counter/${newFilename}`
  });
}

fs.writeFileSync('scratch/bar_counter_39_unique_mapping.json', JSON.stringify(mapping, null, 2));
console.log('Saved scratch/bar_counter_39_unique_mapping.json');
