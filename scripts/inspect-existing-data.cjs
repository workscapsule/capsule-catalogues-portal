const fs = require('fs');
const content = fs.readFileSync('src/data/templeDesignLuxuryData.ts', 'utf8');

const regex = /"rawNumber":\s*(\d+),[\s\S]*?"modelName":\s*"([^"]+)",[\s\S]*?"variant":\s*"([^"]+)"/g;
let m;
const list = [];
while ((m = regex.exec(content)) !== null) {
  list.push({ num: parseInt(m[1]), name: m[2], variant: m[3] });
}
console.log('Total entries:', list.length);
list.forEach(item => {
  console.log(`${String(item.num).padStart(2, '0')}: Variant="${item.variant}" | CurrentName="${item.name}"`);
});
