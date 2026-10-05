const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const uploadedPath = 'C:\\Users\\Yashwanth Gowda\\.gemini\\antigravity-ide\\brain\\d554d34f-276c-435e-8a61-8ce1ff2ca5f3\\.user_uploaded\\media_1791030538328.jpg';

const dest1 = path.join(__dirname, '..', 'public', 'covers', 'wooden-flooring-cover-reference.jpg');
const dest2 = path.join(__dirname, '..', 'covers', 'wooden-flooring-cover-reference.jpg');
const a4CoverPath = path.join(__dirname, '..', 'public', 'covers', 'wooden-flooring-cover-a4.jpg');

async function processCover() {
  // Save original reference cover
  fs.copyFileSync(uploadedPath, dest1);
  if (fs.existsSync(path.dirname(dest2))) {
    fs.copyFileSync(uploadedPath, dest2);
  }
  console.log('Copied original cover to public/covers and covers');

  // Create high-res A4 version for PDF rendering (1240 x 1754)
  await sharp(uploadedPath)
    .resize(1240, 1754, { fit: 'cover', position: 'center' })
    .sharpen({ sigma: 1.2, m1: 1.5, m2: 0.5 })
    .jpeg({ quality: 96 })
    .toFile(a4CoverPath);
  console.log('Saved high-res A4 cover to', a4CoverPath);
}

processCover().catch(console.error);
