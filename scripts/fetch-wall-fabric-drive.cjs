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

  const url = 'https://drive.google.com/drive/folders/1BHguq0FeiIqmUhliLvu8tPlk2dE634Mk?usp=drive_link';
  console.log('Navigating to Wall Fabric Google Drive folder:', url);
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });

  await new Promise(r => setTimeout(r, 6000));

  // Scroll to load all files
  for (let i = 0; i < 20; i++) {
    await page.evaluate(() => {
      window.scrollBy(0, 1200);
      const scrollable = document.querySelector('c-wiz') || document.querySelector('[role="main"]') || document.body;
      scrollable.scrollTop += 1200;
    });
    await new Promise(r => setTimeout(r, 600));
  }

  const renderedHtml = await page.content();
  const scratchDir = path.join(__dirname, '..', 'scratch');
  if (!fs.existsSync(scratchDir)) fs.mkdirSync(scratchDir, { recursive: true });
  fs.writeFileSync(path.join(scratchDir, 'wall_fabric_gdrive.html'), renderedHtml);

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

  // Also parse regex from HTML
  const regex = /\["([a-zA-Z0-9_-]{25,50})",\["([^"]+\.(?:jpg|jpeg|png|webp|avif))"/gi;
  let match;
  const itemsMap = new Map();

  files.forEach(f => {
    const cleanName = f.aria.replace(/^File\s*:\s*/i, '').trim();
    if (/\.(jpg|jpeg|png|webp|avif)$/i.test(cleanName) || f.aria.toLowerCase().includes('image')) {
      itemsMap.set(f.id, cleanName);
    }
  });

  while ((match = regex.exec(renderedHtml)) !== null) {
    const id = match[1];
    const name = match[2];
    if (!itemsMap.has(id)) {
      itemsMap.set(id, name);
    }
  }

  // Also check general Drive format
  const regex2 = /"([a-zA-Z0-9_-]{28,40})","([^"]+?\.(?:jpg|jpeg|png|webp|avif))"/gi;
  while ((match = regex2.exec(renderedHtml)) !== null) {
    const id = match[1];
    const name = match[2];
    if (!itemsMap.has(id) && id !== '1BHguq0FeiIqmUhliLvu8tPlk2dE634Mk') {
      itemsMap.set(id, name);
    }
  }

  const result = Array.from(itemsMap.entries()).map(([id, name]) => ({ id, name }));
  console.log(`Found ${result.length} image files in Wall Fabric folder:`);
  result.forEach((r, idx) => console.log(`${idx + 1}. [${r.id}] ${r.name}`));

  fs.writeFileSync(path.join(scratchDir, 'wall_fabric_files.json'), JSON.stringify(result, null, 2));
  console.log(`Saved file list to scratch/wall_fabric_files.json`);

  await browser.close();
}

fetchDrive().catch(err => {
  console.error('Fetch error:', err);
  process.exit(1);
});
