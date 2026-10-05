const fs = require('fs');
const path = require('path');

const targetFile = path.resolve(__dirname, '../src/data/modularKitchenLuxuryData.ts');
let code = fs.readFileSync(targetFile, 'utf8');

const variants = {
  1: 'Champagne Lacquer & Fluted Glass',
  2: 'Dual-Tone Timber & Matte White',
  3: 'High-Gloss Greige & Calacatta Stone',
  4: 'Integrated Breakfast Bar & Granite',
  5: 'Scandinavian Oak & White Quartz',
  6: 'Muted Sage & Reeded Glass Vitrine',
  7: 'Matte Taupe & Concealed LED Gola',
  8: 'Vertical Fluted Oak & Deep Quartz',
  9: 'Pantry Appliance Hub & White Stone',
  10: 'Smoked Walnut Veneer & Bronze Glass',
  11: 'Champagne Double Galley & LED Strip',
  12: 'Ultra-Gloss Monochrome Corridor',
  13: 'Symmetrical Window Galley & Quartz',
  14: 'Greige Balcony Galley & Wood Accents',
  15: 'High-Contrast Black Granite & Amber',
  16: 'Bronze Glass Vitrines & Dual Prep',
  17: 'White Oak Window-Framed Galley',
  18: 'Earthy Sage & Brushed Gold Hardware',
  19: 'European Oak Slat Wall & Charcoal',
  20: 'Urban Greige & Integrated Hob',
  21: 'Curved Calacatta Waterfall Island',
  22: 'Grand Fluted Wood Island & Glass Hub',
  23: 'Beige Waterfall Island & Vitrine Storage',
  24: 'Charcoal Prep Island & Open Shelving',
  25: 'Fluted Dark Walnut & White Quartz Island',
  26: 'Linear Grey Island & Integrated Appliances',
  27: 'Arched Display Niche & Breakfast Island',
  28: 'Curved Marble Waterfall Island Showpiece',
  29: 'Gloss Champagne & Matte Black Island',
  30: 'Pure White Quartz Waterfall Island',
  31: 'Warm Oak & White Quartz Linear',
  32: 'Deep Charcoal & Natural Wood Linear',
  33: 'Handleless Cream & Terrazzo Splash',
  34: '3D Fluted Ceramic & Minimalist Strip',
  35: 'Terracotta Shaker & Open Wine Rack',
  36: 'Slate Grey & Double Smoked Glass',
  37: 'Window-Centered Sink & Dual Fluted Glass',
  38: 'Gloss Powder Blue & Subway Tile',
  39: 'Nordic Olive & Vertical Matchstick Tile',
  40: 'Vertical Fluted Wood Wall & Glass Vitrine'
};

if (!code.includes('variant: string;')) {
  code = code.replace(
    /code:\s*string;[^\n]*\n\s*category:/,
    "code: string;\n  variant: string;\n  pageNumber: string;\n  category:"
  );
}

let matched = 0;
for (let i = 1; i <= 40; i++) {
  const numStr = String(i).padStart(2, '0');
  const pageStr = 'P / ' + numStr;
  const variant = variants[i];
  const regex = new RegExp('(rawNumber:\\s*' + i + ',\\s*\\n\\s*name:\\s*\'[^\']+\',\\s*\\n\\s*code:\\s*\'[^\']+\',)');
  if (code.match(regex)) {
    code = code.replace(regex, `$1\n      variant: '${variant}',\n      pageNumber: '${pageStr}',`);
    matched++;
  }
}

fs.writeFileSync(targetFile, code, 'utf8');
console.log('Injected variant and pageNumber into', matched, 'items');
