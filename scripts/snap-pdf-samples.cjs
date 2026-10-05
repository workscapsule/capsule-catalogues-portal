const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1240, height: 1754 });

  const templatePath = path.join(__dirname, 'wall-panel-standard-template.html');
  console.log('Loading template from:', templatePath);
  await page.goto(`file://${templatePath.replace(/\\/g, '/')}`, { waitUntil: 'load' });

  const pagesToSnap = [
    { num: 1, name: 'pdf-sample-page-01-cover.png' },
    { num: 2, name: 'pdf-sample-page-02-directory.png' },
    { num: 3, name: 'pdf-sample-page-03-model-fluted-01.png' },
    { num: 18, name: 'pdf-sample-page-18-model-3d-01.png' },
    { num: 37, name: 'pdf-sample-page-37-model-marble-05.png' },
    { num: 52, name: 'pdf-sample-page-52-model-pu-05.png' },
    { num: 61, name: 'pdf-sample-page-61-model-decorative-04.png' },
    { num: 63, name: 'pdf-sample-page-63-contact.png' }
  ];

  for (const item of pagesToSnap) {
    const pageHandle = await page.evaluateHandle((idx) => {
      const allPages = document.querySelectorAll('.a4-page');
      return allPages[idx - 1];
    }, item.num);

    if (pageHandle) {
      const outPath = path.join(__dirname, '..', 'scratch', item.name);
      await pageHandle.asElement().screenshot({ path: outPath });
      console.log(`Saved page ${item.num} screenshot to: ${outPath}`);
    }
  }

  await browser.close();
  console.log('Done rendering sample PDF pages!');
})();
