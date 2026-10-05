const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const data = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'public', 'assets', 'wall-panels', 'wall-panels-data.json'), 'utf8'));

(async () => {
  const allItems = [];
  data.categories.forEach(cat => {
    cat.items.forEach(item => {
      let relPath = item.image.startsWith('/') ? item.image.slice(1) : item.image;
      if (item.refId === 'WP-FL-01') relPath = 'assets/wall-panels/01-fluted-wall-panels/wp-fl-01_clean.png';
      if (item.refId === 'WP-3D-01') relPath = 'assets/wall-panels/04-3d-wall-panels/wp-3d-01_clean.jpg';
      if (item.refId === 'WP-MB-05') relPath = 'assets/wall-panels/07-marble-finish-wall-panels/wp-mb-05_clean.png';
      if (item.refId === 'WP-PU-05') relPath = 'assets/wall-panels/10-pu-wall-panels/wp-pu-05_clean.jpg';
      if (item.refId === 'WP-DC-04') relPath = 'assets/wall-panels/12-decorative-wall-panels/wp-dc-04_clean.png';
      allItems.push({ refId: item.refId, name: item.name, path: path.join(__dirname, '..', 'public', relPath) });
    });
  });

  console.log(`Analyzing ${allItems.length} images for text/logos...`);

  // We will generate 6 images, each showing 10 items.
  // For each item, show the bottom 25% of the image (where 99% of logos/watermarks/social handles reside!)
  for (let b = 0; b < 6; b++) {
    const batch = allItems.slice(b * 10, (b + 1) * 10);
    const bottomStrips = await Promise.all(batch.map(async (item) => {
      const meta = await sharp(item.path).metadata();
      const bottomH = Math.floor(meta.height * 0.25);
      const topOffset = meta.height - bottomH;
      return sharp(item.path)
        .extract({ left: 0, top: topOffset, width: meta.width, height: bottomH })
        .resize(300, 150, { fit: 'contain', background: { r: 230, g: 230, b: 230 } })
        .toBuffer();
    }));

    const comp = sharp({
      create: {
        width: 1500,
        height: 300,
        channels: 3,
        background: { r: 240, g: 240, b: 240 }
      }
    });

    const composites = bottomStrips.map((buf, i) => ({
      input: buf,
      left: (i % 5) * 300,
      top: Math.floor(i / 5) * 150
    }));

    const outPath = path.join(__dirname, '..', 'scratch', `bottom-strips-batch-${b + 1}.jpg`);
    await comp.composite(composites).jpeg().toFile(outPath);
    console.log(`Saved bottom strip batch ${b + 1}:`, outPath);
  }

  // Also do top strips for all 6 batches (where top badges or handles reside)
  for (let b = 0; b < 6; b++) {
    const batch = allItems.slice(b * 10, (b + 1) * 10);
    const topStrips = await Promise.all(batch.map(async (item) => {
      const meta = await sharp(item.path).metadata();
      const topH = Math.floor(meta.height * 0.20);
      return sharp(item.path)
        .extract({ left: 0, top: 0, width: meta.width, height: topH })
        .resize(300, 120, { fit: 'contain', background: { r: 230, g: 230, b: 230 } })
        .toBuffer();
    }));

    const comp = sharp({
      create: {
        width: 1500,
        height: 240,
        channels: 3,
        background: { r: 240, g: 240, b: 240 }
      }
    });

    const composites = topStrips.map((buf, i) => ({
      input: buf,
      left: (i % 5) * 300,
      top: Math.floor(i / 5) * 120
    }));

    const outPath = path.join(__dirname, '..', 'scratch', `top-strips-batch-${b + 1}.jpg`);
    await comp.composite(composites).jpeg().toFile(outPath);
    console.log(`Saved top strip batch ${b + 1}:`, outPath);
  }
})();
