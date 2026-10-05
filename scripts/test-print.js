import puppeteer from 'puppeteer-core';

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function testPrintStyles() {
  const browser = await puppeteer.launch({ executablePath: EDGE_PATH, headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1240, height: 1754 });
  await page.goto('http://localhost:5173/kitchen-catalogue', { waitUntil: 'networkidle0' });
  await page.emulateMediaType('print');
  
  const containerInfo = await page.evaluate(() => {
    const container = document.querySelector('.catalogue-print-container');
    const parents = [];
    let curr = container;
    while (curr) {
      parents.push({
        tag: curr.tagName,
        class: curr.className,
        display: window.getComputedStyle(curr).display,
        gap: window.getComputedStyle(curr).gap,
        margin: window.getComputedStyle(curr).margin,
        padding: window.getComputedStyle(curr).padding,
      });
      curr = curr.parentElement;
    }
    const pageWrappers = Array.from(document.querySelectorAll('[id^="kitchen-page-"]')).map(w => ({
      id: w.id,
      display: window.getComputedStyle(w).display,
      margin: window.getComputedStyle(w).margin,
      padding: window.getComputedStyle(w).padding,
      height: window.getComputedStyle(w).height,
    }));
    return { parents, pageWrappers: pageWrappers.slice(0, 4) };
  });
  
  console.log(JSON.stringify(containerInfo, null, 2));
  await browser.close();
}
testPrintStyles();
