const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const data = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'public', 'assets', 'wall-panels', 'wall-panels-data.json'), 'utf8'));

(async () => {
  const images = [];
  for (const cat of data.categories) {
    for (const item of cat.items) {
      let rel = item.image.startsWith('/') ? item.image.slice(1) : item.image;
      if (item.refId === 'WP-3D-01') rel = 'assets/wall-panels/04-3d-wall-panels/wp-3d-01_clean.jpg';
      const full = path.join(__dirname, '..', 'public', rel);
      if (fs.existsSync(full)) {
        images.push({ id: item.refId, path: full });
      }
    }
  }

  console.log(`Auditing ${images.length} images...`);

  // Create 6 grids of 10 images each
  for (let batch = 0; batch < 6; batch++) {
    const slice = images.slice(batch * 10, (batch + 1) * 10);
    const thumbs = await Promise.all(slice.map(async (img) => {
      return sharp(img.path)
        .resize(300, 300, { fit: 'cover' })
        .toBuffer();
    }));

    // Composite 5x2 grid
    const gridImg = sharp({
      create: {
        width: 1500,
        height: 600,
        channels: 3,
        background: { r: 240, g: 240, b: 240 }
      }
    });

    const composites = thumbs.map((buf, i) => ({
      input: buf,
      left: (i % 5) * 300,
      top: Math.floor(i / 5) * 300
    }));

    const outPath = path.join(__dirname, '..', 'scratch', `audit-grid-batch-${batch + 1}.jpg`);
    await gridImg.composite(composites).jpeg().toFile(outPath);
    console.log(`Saved audit grid ${batch + 1} to:`, outPath);
  }
})();
