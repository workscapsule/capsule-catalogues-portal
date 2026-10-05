const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function fetchDrive() {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 900 });

  const url = 'https://drive.google.com/drive/folders/1qNLSPH8FWZAa8-iPEtfM1BzihZAYm5Ot?usp=sharing';
  console.log('Navigating to Wooden Flooring Google Drive folder:', url);
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

  await new Promise(r => setTimeout(r, 4000));

  // Scroll to load all files
  for (let i = 0; i < 15; i++) {
    await page.evaluate(() => {
      window.scrollBy(0, 1000);
      const scrollable = document.querySelector('c-wiz') || document.body;
      scrollable.scrollTop += 1000;
    });
    await new Promise(r => setTimeout(r, 800));
  }

  const renderedHtml = await page.content();
  const scratchDir = path.join(__dirname, '..', 'scratch');
  if (!fs.existsSync(scratchDir)) fs.mkdirSync(scratchDir, { recursive: true });
  fs.writeFileSync(path.join(scratchDir, 'wooden_flooring_gdrive.html'), renderedHtml);

  // Extract file elements
  const files = await page.evaluate(() => {
    const list = [];
    const elements = document.querySelectorAll('[data-id]');
    elements.forEach(el => {
      const id = el.getAttribute('data-id');
      const aria = el.getAttribute('aria-label') || '';
      if (id && id.length > 20 && aria) {
        list.push({ id, aria });
      }
    });
    return list;
  });

  console.log('DOM elements with data-id:', files.length);

  // Match file labels and IDs via regex as well
  const itemsMap = new Map();
  files.forEach(f => {
    const cleanName = f.aria.replace(/^File\s*:\s*/i, '').trim();
    if (/\.(jpg|jpeg|png|webp|avif)$/i.test(cleanName) || f.aria.toLowerCase().includes('image')) {
      itemsMap.set(f.id, cleanName);
    }
  });

  // Also check string patterns in rendered HTML
  const pattern1 = /aria-label="([^"]+?\.(?:jpg|jpeg|png|webp))[^"]*"[\s\S]*?ssk='5:auSv138:([a-zA-Z0-9_-]{25,})-0-16'/gi;
  let m;
  while ((m = pattern1.exec(renderedHtml)) !== null) {
    itemsMap.set(m[2], m[1]);
  }

  // Generic data-id match with image extension
  const pattern2 = /\[\"([a-zA-Z0-9_-]{25,})\",\[\"([^\"]+?\.(?:jpg|jpeg|png|webp))\"/gi;
  while ((m = pattern2.exec(renderedHtml)) !== null) {
    itemsMap.set(m[1], m[2]);
  }

  const result = Array.from(itemsMap.entries()).map(([id, name]) => ({ id, name }));
  console.log(`Total unique images identified: ${result.length}`);
  fs.writeFileSync(path.join(scratchDir, 'wooden_flooring_files.json'), JSON.stringify(result, null, 2));

  await browser.close();
}

fetchDrive().catch(console.error);
