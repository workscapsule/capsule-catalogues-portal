const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function inspect() {
  const dir = path.join(__dirname, '..', 'public', 'assets', 'vinyl-flooring');
  for (let i = 1; i <= 30; i++) {
    const fn = `vfl-${String(i).padStart(2, '0')}.jpg`;
    const fp = path.join(dir, fn);
    if (fs.existsSync(fp)) {
      const meta = await sharp(fp).metadata();
      console.log(`${fn}: ${meta.width}x${meta.height}, format: ${meta.format}`);
    }
  }
}
inspect();
