const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');
const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function snapCard() {
  const browser = await puppeteer.launch({ executablePath: EDGE_PATH, headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 900 });
  await page.goto('http://localhost:5173/capsule-catalogue-index.html', { waitUntil: 'networkidle0' });
  
  const cardHandle = await page.evaluateHandle(() => document.querySelector('a[href="Capsule_Interiors_Wall_Panel_Design_Catalogue.pdf"]'));
  const card = cardHandle.asElement();
  if (card) {
    await card.screenshot({ path: path.join(__dirname, '..', 'scratch', 'card_09_preview.png') });
    console.log('Snapped card 09 preview');
  }
  await browser.close();
}
snapCard();
