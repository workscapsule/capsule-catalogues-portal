const fs = require('fs');
const path = require('path');

const targets = ['public', 'dist', 'build'];

for (const target of targets) {
  const targetDir = path.join(__dirname, target);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // Copy root files
  const rootFiles = ['index.html', 'logo.png', 'logo-transparent.png', 'vercel.json'];
  for (const f of rootFiles) {
    const src = path.join(__dirname, f);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(targetDir, f));
    }
  }

  // Copy all PDFs from root if not already in target
  const files = fs.readdirSync(__dirname);
  for (const f of files) {
    if (f.endsWith('.pdf')) {
      const dest = path.join(targetDir, f);
      if (!fs.existsSync(dest)) {
        fs.copyFileSync(path.join(__dirname, f), dest);
      }
    }
  }

  // Copy covers folder
  const coversSrc = path.join(__dirname, 'covers');
  const coversDest = path.join(targetDir, 'covers');
  if (fs.existsSync(coversSrc)) {
    if (!fs.existsSync(coversDest)) {
      fs.mkdirSync(coversDest, { recursive: true });
    }
    const coverFiles = fs.readdirSync(coversSrc);
    for (const cf of coverFiles) {
      fs.copyFileSync(path.join(coversSrc, cf), path.join(coversDest, cf));
    }
  }
  console.log(`Successfully prepared ${target}/ for Vercel deployment.`);
}
