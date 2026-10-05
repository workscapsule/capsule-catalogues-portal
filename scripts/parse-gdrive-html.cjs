const fs = require('fs');

const html = fs.readFileSync('scratch/gdrive_page.html', 'utf8');

// Search for where these hashes appear
const regex = /([a-f0-9]{32}\.jpg)/g;
let match;
const files = [];

// In Google Drive folder HTML, files are often embedded in JS data arrays like:
// [id, name, mimeType, ...] or similar JSON/array structures.
// Let's find each hash and look at surrounding text (300 chars before and after).

const foundNames = [...new Set(html.match(regex) || [])];
console.log('Total unique jpg names found:', foundNames.length);

foundNames.forEach((name, idx) => {
  const pos = html.indexOf(name);
  const snippet = html.substring(Math.max(0, pos - 200), Math.min(html.length, pos + 200));
  // Check if there are drive IDs (typically 33 chars alnum, or 28-40 chars)
  // Let's print the first 2 snippets
  if (idx < 2) {
    console.log(`\n--- Snippet for ${name} ---`);
    console.log(snippet);
  }
});
