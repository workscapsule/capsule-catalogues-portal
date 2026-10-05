const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const uploadedPath = 'C:\\Users\\Yashwanth Gowda\\.gemini\\antigravity-ide\\brain\\d554d34f-276c-435e-8a61-8ce1ff2ca5f3\\.user_uploaded\\media_1791025202081.jpg';
const scratchDir = path.join(__dirname, '..', 'scratch');

async function main() {
  const buf = fs.readFileSync(uploadedPath);
  const m = await sharp(buf).metadata();
  console.log('Original image:', m.width, 'x', m.height);

  // Also create a version with '60' instead of '42'
  // Sample background color around (x: 40, y: 565)
  // Let's create an SVG overlay
  const svgText = `
    <svg width="${m.width}" height="${m.height}" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="550" width="38" height="25" fill="#FAF6F0" />
      <text x="33" y="567" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="14.5" font-weight="500" fill="#1B1917" letter-spacing="0.16em">60</text>
    </svg>
  `;

  const with60 = await sharp(buf)
    .composite([{ input: Buffer.from(svgText), left: 0, top: 0 }])
    .jpeg({ quality: 98 })
    .toBuffer();

  fs.writeFileSync(path.join(scratchDir, 'cover_with_60.jpg'), with60);
  
  await sharp(with60)
    .extract({ left: 25, top: 535, width: 220, height: 110 })
    .toFile(path.join(scratchDir, 'zoom_60.jpg'));

  console.log('Saved cover_with_60.jpg');
}
main();
