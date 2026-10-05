const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const CHROME_PATH = 'C:\\Users\\Yashwanth Gowda\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe';
const BROWSER_PATH = fs.existsSync(EDGE_PATH) ? EDGE_PATH : CHROME_PATH;

async function checkDrive() {
  const browser = await puppeteer.launch({
    executablePath: BROWSER_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 900 });

  const url = 'https://drive.google.com/drive/folders/17euvrqwm2zqMVWa5KnBqiL44ke-EV074?usp=sharing';
  console.log('Navigating to Google Drive folder...');
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

  await new Promise(r => setTimeout(r, 4000));

  // Scroll several times to trigger any infinite scrolling
  for (let i = 0; i < 10; i++) {
    await page.evaluate(() => {
      window.scrollBy(0, 1000);
      const scrollable = document.querySelector('c-wiz') || document.body;
      scrollable.scrollTop += 1000;
    });
    await new Promise(r => setTimeout(r, 1000));
  }

  const renderedHtml = await page.content();
  fs.writeFileSync('scratch/tv_drive_rendered.html', renderedHtml);

  // Extract all file elements
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

  console.log('Elements with data-id:', files.length);

  // Also parse with regex
  const fileRegex = /aria-label="([^"]+\.(?:jpg|jpeg|png|webp))[^"]*"[\s\S]*?ssk='5:auSv138:([a-zA-Z0-9_-]{25,})-0-16'/gi;
  let m;
  const items = new Map();
  while ((m = fileRegex.exec(renderedHtml)) !== null) {
    items.set(m[1], m[2]);
  }

  // Also match [data-target="doc"] or similar
  const docRegex = /data-id="([a-zA-Z0-9_-]{25,})"[^>]*aria-label="([^"]+)"/gi;
  while ((m = docRegex.exec(renderedHtml)) !== null) {
    if (m[2].match(/\.(jpg|jpeg|png|webp)$/i)) {
      items.set(m[2], m[1]);
    }
  }

  const results = Array.from(items.entries()).map(([name, id]) => ({ name, id }));
  results.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));

  console.log(`Total unique images detected: ${results.length}`);
  fs.writeFileSync('scratch/tv_unit_drive_unique.json', JSON.stringify(results, null, 2));

  await browser.close();
}

checkDrive().catch(console.error);
