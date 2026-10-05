import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const finalDir = path.resolve('public/assets/catalogues/kitchen/final');
fs.mkdirSync(finalDir, { recursive: true });

// Map of 40 selected images:
const selection = {
  'l-shape': [
    { src: 'public/assets/catalogues/kitchen/l-shape/l-shape-01.jpg', out: 'l-shape-01.jpg' },
    { src: 'public/assets/catalogues/kitchen/l-shape/l-shape-04.jpg', out: 'l-shape-02.jpg' },
    { src: 'public/assets/catalogues/kitchen/l-shape/l-shape-06.jpg', out: 'l-shape-03.jpg' },
    { src: 'public/assets/catalogues/kitchen/l-shape/l-shape-08.jpg', out: 'l-shape-04.jpg' },
    { src: 'public/assets/catalogues/kitchen/l-shape/l-shape-09.jpg', out: 'l-shape-05.jpg' },
    { src: 'public/assets/catalogues/kitchen/l-shape/l-shape-12.jpg', out: 'l-shape-06.jpg' },
    { src: 'public/assets/catalogues/kitchen/l-shape/l-shape-13.jpg', out: 'l-shape-07.jpg' },
    { src: 'public/assets/catalogues/kitchen/l-shape/l-shape-15.jpg', out: 'l-shape-08.jpg' },
    { src: 'public/assets/catalogues/kitchen/l-shape/l-shape-17.jpg', out: 'l-shape-09.jpg' },
    { src: 'public/assets/catalogues/kitchen/l-shape/l-shape-19.jpg', out: 'l-shape-10.jpg' },
  ],
  'parallel': [
    { src: 'public/assets/catalogues/kitchen/parallel-candidates/parallel-cand-02.jpg', out: 'parallel-01.jpg' },
    { src: 'public/assets/catalogues/kitchen/parallel-candidates/parallel-cand-03.jpg', out: 'parallel-02.jpg' },
    { src: 'public/assets/catalogues/kitchen/parallel-candidates/parallel-cand-05.jpg', out: 'parallel-03.jpg' },
    { src: 'public/assets/catalogues/kitchen/parallel-candidates/parallel-cand-06.jpg', out: 'parallel-04.jpg' },
    { src: 'public/assets/catalogues/kitchen/parallel-candidates/parallel-cand-08.jpg', out: 'parallel-05.jpg' },
    { src: 'public/assets/catalogues/kitchen/parallel-candidates/parallel-cand-09.jpg', out: 'parallel-06.jpg' },
    { src: 'public/assets/catalogues/kitchen/parallel-candidates/parallel-cand-14.jpg', out: 'parallel-07.jpg' },
    { src: 'public/assets/catalogues/kitchen/parallel-candidates/parallel-cand-20.jpg', out: 'parallel-08.jpg' },
    { src: 'public/assets/catalogues/kitchen/parallel-candidates/parallel-cand-22.jpg', out: 'parallel-09.jpg' },
    { src: 'public/assets/catalogues/kitchen/parallel-candidates/parallel-cand-24.jpg', out: 'parallel-10.jpg' },
  ],
  'island': [
    { src: 'public/assets/catalogues/kitchen/island/island-01.jpg', out: 'island-01.jpg' },
    { src: 'public/assets/catalogues/kitchen/island/island-02.jpg', out: 'island-02.jpg' },
    { src: 'public/assets/catalogues/kitchen/island/island-03.jpg', out: 'island-03.jpg' },
    { src: 'public/assets/catalogues/kitchen/island/island-04.jpg', out: 'island-04.jpg' },
    { src: 'public/assets/catalogues/kitchen/island/island-06.jpg', out: 'island-05.jpg' },
    { src: 'public/assets/catalogues/kitchen/island/island-07.jpg', out: 'island-06.jpg' },
    { src: 'public/assets/catalogues/kitchen/island/island-08.jpg', out: 'island-07.jpg' },
    { src: 'public/assets/catalogues/kitchen/island/island-09.jpg', out: 'island-08.jpg' },
    { src: 'public/assets/catalogues/kitchen/island/island-12.jpg', out: 'island-09.jpg' },
    { src: 'public/assets/catalogues/kitchen/island/island-13.jpg', out: 'island-10.jpg' },
  ],
  'straight': [
    { src: 'public/assets/catalogues/kitchen/straight/straight-01.jpg', out: 'straight-01.jpg' },
    { src: 'public/assets/catalogues/kitchen/straight/straight-03.jpg', out: 'straight-02.jpg' },
    { src: 'public/assets/catalogues/kitchen/straight/straight-04.jpg', out: 'straight-03.jpg' },
    { src: 'public/assets/catalogues/kitchen/straight/straight-05.jpg', out: 'straight-04.jpg' },
    { src: 'public/assets/catalogues/kitchen/straight/straight-06.jpg', out: 'straight-05.jpg' },
    { src: 'public/assets/catalogues/kitchen/straight/straight-08.jpg', out: 'straight-06.jpg' },
    { src: 'public/assets/catalogues/kitchen/straight/straight-11.jpg', out: 'straight-07.jpg' },
    { src: 'public/assets/catalogues/kitchen/straight/straight-12.jpg', out: 'straight-08.jpg' },
    { src: 'public/assets/catalogues/kitchen/straight/straight-13.jpg', out: 'straight-09.jpg' },
    { src: 'public/assets/catalogues/kitchen/straight/straight-15.jpg', out: 'straight-10.jpg' },
  ]
};

async function processAll() {
  let count = 0;
  for (const [category, items] of Object.entries(selection)) {
    console.log(`\nProcessing ${category} (10 items)...`);
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const srcPath = path.resolve(item.src);
      const outPath = path.join(finalDir, item.out);

      if (!fs.existsSync(srcPath)) {
        console.error(`Missing file: ${srcPath}`);
        continue;
      }

      // Check with Sharp and copy
      const meta = await sharp(srcPath).metadata();
      // Ensure high quality jpeg output
      await sharp(srcPath)
        .jpeg({ quality: 92, mozjpeg: true })
        .toFile(outPath);

      count++;
      console.log(`[${category} #${i + 1}] -> ${item.out} (${meta.width}x${meta.height})`);
    }
  }

  console.log(`\nFinished copying and optimizing all ${count} final kitchen images!`);
}

processAll().catch(console.error);
