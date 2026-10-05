import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const replacements = [
  {
    src: 'public/assets/catalogues/kitchen/parallel-candidates/parallel-cand-28.jpg',
    dest: 'public/assets/catalogues/kitchen/final/parallel-06.jpg'
  },
  {
    src: 'public/assets/catalogues/kitchen/island/island-14.jpg',
    dest: 'public/assets/catalogues/kitchen/final/island-05.jpg'
  },
  {
    src: 'public/assets/catalogues/kitchen/straight/straight-16.jpg',
    dest: 'public/assets/catalogues/kitchen/final/straight-05.jpg'
  }
];

async function run() {
  for (const r of replacements) {
    const srcPath = path.resolve(r.src);
    const destPath = path.resolve(r.dest);
    await sharp(srcPath).jpeg({ quality: 92, mozjpeg: true }).toFile(destPath);
    console.log(`Replaced ${r.dest} from ${r.src}`);
  }
}

run().catch(console.error);
