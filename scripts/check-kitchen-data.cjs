const fs = require('fs');
const content = fs.readFileSync('src/data/modularKitchenLuxuryData.ts', 'utf8');
const matches = content.match(/number:\s*['"](\d+)['"]/g);
console.log('Matches:', matches ? matches.length : 0);
if (matches) {
  console.log('Sample:', matches.slice(0, 5));
  console.log('Last:', matches.slice(-3));
}
