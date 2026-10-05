const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function removeLogoSeamless() {
  const imgPath = path.join(__dirname, '..', 'public', 'assets', 'wooden-polish', 'wpl-11.jpg');
  const tempCleanedPath = path.join(__dirname, '..', 'scratch', 'wpl-11-temp.jpg');

  // Load into memory buffer first so file is not locked
  const originalBuf = fs.readFileSync(imgPath);
  const img = sharp(originalBuf);
  const { width, height } = await img.metadata();

  const { data, info } = await sharp(originalBuf).raw().toBuffer({ resolveWithObject: true });

  const xStart = 78;
  const xEnd = 185;
  const yStart = 632;
  const yEnd = 768;
  const feather = 12;

  for (let y = yStart - feather; y <= yEnd + feather; y++) {
    const rawT = (y - yStart) / (yEnd - yStart);
    const t = Math.max(0, Math.min(1, rawT));

    // Calculate vertical feather blend factor
    let alpha = 1.0;
    if (y < yStart) {
      alpha = (y - (yStart - feather)) / feather;
    } else if (y > yEnd) {
      alpha = ((yEnd + feather) - y) / feather;
    }

    for (let x = xStart - feather; x <= xEnd + feather; x++) {
      let xAlpha = 1.0;
      if (x < xStart) {
        xAlpha = (x - (xStart - feather)) / feather;
      } else if (x > xEnd) {
        xAlpha = ((xEnd + feather) - x) / feather;
      }

      const totalWeight = alpha * xAlpha;
      if (totalWeight <= 0) continue;

      const idxAbove = ((yStart - 16) * width + x) * info.channels;
      const idxBelow = ((yEnd + 16) * width + x) * info.channels;
      const idxTarget = (y * width + x) * info.channels;

      const noise = (Math.random() - 0.5) * 1.5;

      for (let c = 0; c < 3; c++) {
        const valAbove = data[idxAbove + c];
        const valBelow = data[idxBelow + c];
        const interpolated = valAbove * (1 - t) + valBelow * t + noise;
        const currentVal = data[idxTarget + c];
        const blended = currentVal * (1 - totalWeight) + interpolated * totalWeight;
        data[idxTarget + c] = Math.min(255, Math.max(0, Math.round(blended)));
      }
    }
  }

  const cleanedBuf = await sharp(data, {
    raw: { width, height, channels: info.channels }
  })
  .jpeg({ quality: 96 })
  .toBuffer();

  fs.writeFileSync(tempCleanedPath, cleanedBuf);
  fs.copyFileSync(tempCleanedPath, imgPath);

  // Extract zoom of cleaned area
  await sharp(cleanedBuf)
    .extract({ left: 50, top: 580, width: 180, height: 230 })
    .toFile(path.join(__dirname, '..', 'scratch', 'wpl-11-cleaned-zoom.jpg'));

  console.log('Seamless feathered cleaned image saved to wpl-11.jpg!');
}

removeLogoSeamless().catch(console.error);
