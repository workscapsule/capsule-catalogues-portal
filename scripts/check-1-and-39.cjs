const fs = require('fs');
const mapping = JSON.parse(fs.readFileSync('scratch/bar_counter_39_unique_mapping.json', 'utf8'));

console.log('1:', mapping[0]);
console.log('39:', mapping[38]);
