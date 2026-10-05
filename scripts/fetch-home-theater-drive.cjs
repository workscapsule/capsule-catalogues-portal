const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const FOLDER_ID = '1QMPAGYD5eTqNJMiRlb0MclwxdLXTTO3Y';
const FOLDER_URL = `https://drive.google.com/drive/folders/${FOLDER_ID}?usp=sharing`;

async function fetchDrive() {
  console.log('Launching browser to scrape Mini Home Theater folder:', FOLDER_URL);
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-http2',
      '--disable-blink-features=AutomationControlled'
    ]
  });

  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36');
  await page.setViewport({ width: 1400, height: 900 });

  let loaded = false;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      console.log(`Navigation attempt ${attempt}...`);
      await page.goto(FOLDER_URL, { waitUntil: 'domcontentloaded', timeout: 45000 });
      loaded = true;
      break;
    } catch (e) {
      console.warn(`Attempt ${attempt} failed:`, e.message);
      await new Promise(r => setTimeout(r, 3000));
    }
  }

  if (!loaded) {
    await browser.close();
    throw new Error('Failed to load Google Drive folder after 3 attempts');
  }

  console.log('Page loaded, waiting for items to render...');
  await new Promise(r => setTimeout(r, 6000));

  // Scroll thoroughly to trigger lazy loading of all files
  for (let i = 0; i < 40; i++) {
    await page.evaluate(() => {
      window.scrollBy(0, 1200);
      const scrollable = document.querySelector('c-wiz') || document.querySelector('[role="main"]') || document.body;
      if (scrollable) scrollable.scrollTop += 1200;
    });
    await new Promise(r => setTimeout(r, 400));
  }

  const renderedHtml = await page.content();
  const scratchDir = path.join(__dirname, '..', 'scratch');
  if (!fs.existsSync(scratchDir)) fs.mkdirSync(scratchDir, { recursive: true });
  fs.writeFileSync(path.join(scratchDir, 'home_theater_gdrive.html'), renderedHtml);

  // Unescape hex sequences
  const unescaped = renderedHtml.replace(/\\x22/g, '"').replace(/\\x5b/g, '[').replace(/\\x5d/g, ']').replace(/\\\//g, '/');

  const regex = new RegExp(`"([a-zA-Z0-9_-]{25,45})",\\["${FOLDER_ID}"\\],"([^"]+?\\.(?:jpg|jpeg|png|webp|avif))"`, 'gi');
  let match;
  const filesMap = new Map();

  while ((match = regex.exec(unescaped)) !== null) {
    const id = match[1];
    const name = match[2];
    if (!filesMap.has(id)) {
      filesMap.set(id, name);
    }
  }

  // Also check alternative pattern without explicit parent folder
  const altRegex = /"([a-zA-Z0-9_-]{28,45})","([^"]+?\.(?:jpg|jpeg|png|webp|avif))"/gi;
  while ((match = altRegex.exec(unescaped)) !== null) {
    const id = match[1];
    const name = match[2];
    if (!filesMap.has(id) && id !== FOLDER_ID) {
      filesMap.set(id, name);
    }
  }

  console.log(`Found ${filesMap.size} files in Mini Home Theater folder!`);
  const fileList = Array.from(filesMap.entries()).map(([id, name]) => ({ id, name }));
  fileList.forEach((f, i) => console.log(`${i + 1}. [${f.id}] ${f.name}`));

  fs.writeFileSync(path.join(scratchDir, 'home_theater_files.json'), JSON.stringify(fileList, null, 2));
  console.log(`Saved ${fileList.length} files to scratch/home_theater_files.json`);

  await browser.close();
}

fetchDrive().catch(err => {
  console.error('Fetch error:', err);
  process.exit(1);
});
