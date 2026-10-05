const fs = require('fs');
const path = require('path');

const targets = ['public', 'dist', 'build'];

for (const target of targets) {
  const targetDir = path.join(__dirname, target);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // Remove any misplaced vercel.json in target directory
  const misplacedVercelJson = path.join(targetDir, 'vercel.json');
  if (fs.existsSync(misplacedVercelJson)) {
    fs.unlinkSync(misplacedVercelJson);
  }

  // If in dist, preserve the corporate React website build if generated
  if (target === 'dist') {
    const distIndex = path.join(targetDir, 'index.html');
    const distCorporate = path.join(targetDir, 'corporate.html');
    if (fs.existsSync(distIndex)) {
      const content = fs.readFileSync(distIndex, 'utf8');
      if (content.includes('id="root"')) {
        fs.writeFileSync(distCorporate, content, 'utf8');
        console.log('Preserved corporate React website to dist/corporate.html');
      }
    }
  }

  // For the catalogue portal, index.html in dist and public MUST be the 17-catalogue portal!
  const cataloguePortalSrc = path.join(__dirname, 'capsule-catalogue-index.html');
  if (fs.existsSync(cataloguePortalSrc)) {
    fs.copyFileSync(cataloguePortalSrc, path.join(targetDir, 'index.html'));
    fs.copyFileSync(cataloguePortalSrc, path.join(targetDir, 'capsule-catalogue-index.html'));
  }

  // Copy root web assets (excluding config files like vercel.json)
  const rootFiles = ['logo.png', 'logo-transparent.png', 'capsule-logo-transparent.png'];
  for (const f of rootFiles) {
    const src = path.join(__dirname, f);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(targetDir, f));
    }
  }

  // Copy all PDFs from root
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
