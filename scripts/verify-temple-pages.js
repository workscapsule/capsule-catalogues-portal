import puppeteer from 'puppeteer-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function verifyTemple() {
  const browser = await puppeteer.launch({ executablePath: EDGE_PATH, headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1240, height: 1754, deviceScaleFactor: 1 });
  await page.goto('http://localhost:5173/temple-catalogue', { waitUntil: 'networkidle0' });

  const testIds = [
    { id: 'temple-cover', name: 'temple_page_01_cover.png' },
    { id: 'temple-intro', name: 'temple_page_02_intro.png' },
    { id: 'temple-page-1', name: 'temple_page_03_model01.png' },
    { id: 'temple-page-6', name: 'temple_page_08_model06.png' },
    { id: 'temple-page-42', name: 'temple_page_44_model42.png' },
    { id: 'temple-contact', name: 'temple_page_45_contact.png' }
  ];

  for (const item of testIds) {
    const el = await page.$(`#${item.id}`);
    if (el) {
      await el.screenshot({ path: path.join(projectRoot, 'scripts', item.name) });
      console.log('Captured', item.name);
    } else {
      console.log('Element not found:', item.id);
    }
  }

  await browser.close();
  console.log('Finished capturing screenshots');
}

verifyTemple().catch(console.error);
