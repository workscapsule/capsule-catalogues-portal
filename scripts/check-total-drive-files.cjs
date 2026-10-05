const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function checkTotalFiles() {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 900 });

  const url = 'https://drive.google.com/drive/folders/1qNLSPH8FWZAa8-iPEtfM1BzihZAYm5Ot?usp=sharing';
  console.log('Navigating with domcontentloaded...');
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });

  await new Promise(r => setTimeout(r, 5000));

  // Scroll down repeatedly
  let lastCount = 0;
  for (let i = 0; i < 20; i++) {
    await page.evaluate(() => {
      window.scrollBy(0, 1500);
      const allDivs = document.querySelectorAll('div');
      for (const d of allDivs) {
        if (d.scrollHeight > d.clientHeight && d.clientHeight > 300) {
          d.scrollTop += 1500;
        }
      }
    });
    await new Promise(r => setTimeout(r, 1000));
  }

  const html = await page.content();
  fs.writeFileSync(path.join(__dirname, '..', 'scratch', 'wf_drive_scrolled.html'), html);

  const ids = new Set();
  const reg = /data-id="([a-zA-Z0-9_-]{25,})"/g;
  let m;
  while ((m = reg.exec(html)) !== null) {
    ids.add(m[1]);
  }

  console.log('Total unique data-id found after scroll:', ids.size);
  await browser.close();
}
checkTotalFiles().catch(console.error);
