const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');
const https = require('https');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const CATEGORIES = [
  {
    id: '01-fluted-wall-panels',
    name: 'FLUTED WALL PANELS',
    section: 'SECTION 01',
    queries: [
      'fluted wall panel living room indian interior design',
      'fluted wood panel tv wall design contemporary apartment',
      'vertical fluted acoustic wall panel bedroom feature wall'
    ]
  },
  {
    id: '02-wooden-wall-panels',
    name: 'WOODEN WALL PANELS',
    section: 'SECTION 02',
    queries: [
      'wooden wall paneling living room modern luxury interior',
      'wood veneer wall panel tv wall interior design',
      'teak wood panel bedroom accent wall modern apartment'
    ]
  },
  {
    id: '03-wpc-wall-panels',
    name: 'WPC WALL PANELS',
    section: 'SECTION 03',
    queries: [
      'wpc wall panel interior living room design',
      'wpc exterior interior fluted wall paneling luxury home',
      'wpc louvers wall panel modern bedroom foyer'
    ]
  },
  {
    id: '04-3d-wall-panels',
    name: '3D WALL PANELS',
    section: 'SECTION 04',
    queries: [
      '3d wall panel living room textured feature wall interior',
      '3d gypsum wall panel bedroom backdrop modern lighting',
      'contemporary 3d wave wall panel residential interior'
    ]
  },
  {
    id: '05-cnc-cut-wall-panels',
    name: 'CNC CUT WALL PANELS',
    section: 'SECTION 05',
    queries: [
      'cnc cut wall panel back lit living room indian home',
      'laser cut jali wall panel foyer entrance interior design',
      'mdf cnc cut decorative wall panel bedroom tv unit'
    ]
  },
  {
    id: '06-geometric-wall-panels',
    name: 'GEOMETRIC WALL PANELS',
    section: 'SECTION 06',
    queries: [
      'geometric wall panel design modern living room interior',
      'geometric wood acoustic wall panel bedroom feature wall',
      'chevron geometric wall panelling residential interior'
    ]
  },
  {
    id: '07-marble-finish-wall-panels',
    name: 'MARBLE FINISH WALL PANELS',
    section: 'SECTION 07',
    queries: [
      'marble fluted wall panel tv unit luxury living room',
      'marble slab wall paneling living room modern interior',
      'backlit onyx marble wall panel dining foyer luxury apartment'
    ]
  },
  {
    id: '08-stone-finish-wall-panels',
    name: 'STONE FINISH WALL PANELS',
    section: 'SECTION 08',
    queries: [
      'stone finish wall panel living room feature wall interior',
      'travertine stone wall panel modern luxury residence',
      'slate veneer stone wall cladding interior design'
    ]
  },
  {
    id: '09-paint-texture-walls',
    name: 'PAINT TEXTURE WALLS',
    section: 'SECTION 09',
    queries: [
      'limewash textured wall bedroom modern interior design',
      'concrete texture paint wall living room contemporary home',
      'hand textured wall stucco finish feature wall interior'
    ]
  },
  {
    id: '10-pu-wall-panels',
    name: 'PU WALL PANELS',
    section: 'SECTION 10',
    queries: [
      'pu moulding wall paneling neoclassical modern interior',
      'pu wall panel moulding bedroom living room wainscoting',
      'polyurethane decorative wall panel modern home interior'
    ]
  },
  {
    id: '11-louvers-wall-panels',
    name: 'LOUVERS WALL PANELS',
    section: 'SECTION 11',
    queries: [
      'wooden louvers wall panel living room partition interior',
      'vertical louver wall panelling tv unit bedroom modern',
      'slat wall panel louvers foyer contemporary residential'
    ]
  },
  {
    id: '12-decorative-wall-panels',
    name: 'DECORATIVE WALL PANELS',
    section: 'SECTION 12',
    queries: [
      'decorative wall panel living room luxury brass profile interior',
      'luxury feature wall panel mixed materials contemporary apartment',
      'modern bedroom decorative accent wall panel backlit mirror'
    ]
  }
];

async function scrapeCategory(page, category) {
  console.log(`\n========================================`);
  console.log(`Scraping: ${category.name}`);
  console.log(`========================================`);
  
  const candidatePins = [];
  const seenPinIds = new Set();

  for (const query of category.queries) {
    if (candidatePins.length >= 15) break;

    console.log(`Querying Pinterest: "${query}"...`);
    let capturedPins = [];

    const responseHandler = async (res) => {
      if (res.url().includes('BaseSearchResource/get/')) {
        try {
          const json = await res.json();
          const results = json?.resource_response?.data?.results || [];
          for (const item of results) {
            if (item && item.id && item.images) {
              const pinId = String(item.id);
              if (seenPinIds.has(pinId)) continue;
              
              // Highest resolution available
              const orig = item.images.orig?.url;
              const h736 = item.images['736x']?.url;
              const h474 = item.images['474x']?.url;
              const imgUrl = orig || h736 || h474;

              if (imgUrl) {
                seenPinIds.add(pinId);
                capturedPins.push({
                  pinId,
                  pinUrl: `https://www.pinterest.com/pin/${pinId}/`,
                  imageUrl: imgUrl,
                  title: item.title || item.grid_title || '',
                  description: item.description || '',
                  width: item.images.orig?.width || item.images['736x']?.width || 0,
                  height: item.images.orig?.height || item.images['736x']?.height || 0
                });
              }
            }
          }
        } catch (e) {}
      }
    };

    page.on('response', responseHandler);

    try {
      await page.goto(`https://www.pinterest.com/search/pins/?q=${encodeURIComponent(query)}`, {
        waitUntil: 'networkidle2',
        timeout: 45000
      });
      // Scroll to trigger more if needed
      await page.evaluate(() => window.scrollBy(0, 1000));
      await new Promise(r => setTimeout(r, 2500));
    } catch (err) {
      console.log(`Navigation error: ${err.message}`);
    } finally {
      page.off('response', responseHandler);
    }

    console.log(`Got ${capturedPins.length} pins from this query.`);
    candidatePins.push(...capturedPins);
  }

  console.log(`Total unique candidates for ${category.name}: ${candidatePins.length}`);
  return candidatePins;
}

async function main() {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1280,900']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  const allScrapedData = {};

  for (const cat of CATEGORIES) {
    allScrapedData[cat.id] = await scrapeCategory(page, cat);
    await new Promise(r => setTimeout(r, 2000));
  }

  await browser.close();

  const outputPath = path.join(__dirname, 'wall-panels-scraped-raw.json');
  fs.writeFileSync(outputPath, JSON.stringify(allScrapedData, null, 2));
  console.log(`\nDONE! Saved raw scraped data to ${outputPath}`);
}

main().catch(console.error);
