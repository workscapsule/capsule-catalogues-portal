const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const dataPath = path.join(__dirname, '..', 'public', 'assets', 'wooden-flooring', 'wooden-flooring-data.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const logoPath = path.join(__dirname, '..', 'public', 'logo.png');
const logoBase64 = fs.readFileSync(logoPath).toString('base64');
const logoSrc = `data:image/png;base64,${logoBase64}`;

const coverA4Path = path.join(__dirname, '..', 'public', 'covers', 'wooden-flooring-cover-a4.jpg');
const coverA4Base64 = fs.readFileSync(coverA4Path).toString('base64');
const coverA4Src = `data:image/jpeg;base64,${coverA4Base64}`;

const items = data.orderedItems;

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Capsule Company - Wooden Flooring Design Catalogue 2026</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap');

    @page {
      size: A4 portrait;
      margin: 0;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background-color: #444;
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
      color: #1A1A1A;
      -webkit-font-smoothing: antialiased;
      line-height: 1.5;
    }

    .a4-page {
      width: 210mm;
      height: 297mm;
      min-height: 297mm;
      max-height: 297mm;
      background: #FDFBF7;
      margin: 0 auto;
      page-break-after: always;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10mm 15mm 8mm 15mm;
      box-sizing: border-box;
    }

    /* ================= 1. COVER PAGE ================= */
    .cover-page {
      background: #FAF6F0;
      padding: 0 !important;
      margin: 0 auto;
      display: block;
      width: 210mm;
      height: 297mm;
      overflow: hidden;
    }
    .cover-page img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    /* ================= 2. MODEL PAGES ================= */
    .page-header {
      flex: none;
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(212, 204, 195, 0.8);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .header-brand-wrap {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .header-logo-box {
      width: 36px;
      height: 36px;
      background: #FFFFFF;
      border: 1px solid #E5DDD3;
      border-radius: 4px;
      padding: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }
    .header-logo-box img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .header-brand-title {
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: #1A1A1A;
      line-height: 1.15;
    }
    .header-brand-sub {
      font-size: 8.5px;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #A3704C;
    }
    .header-category-box {
      text-align: right;
    }
    .header-cat-eyebrow {
      font-size: 9px;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 600;
      color: #9E9E9E;
      letter-spacing: 0.22em;
      text-transform: uppercase;
    }
    .header-cat-name {
      font-size: 12.5px;
      font-weight: 700;
      color: #A3704C;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-top: 1px;
    }

    /* Editorial Details Section */
    .editorial-section {
      flex: none;
      padding-top: 10px;
      padding-bottom: 4px;
    }
    .editorial-top-row {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 2px;
    }
    .eyebrow-wrap {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-bottom: 2px;
    }
    .eyebrow-main {
      font-size: 9.5px;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 700;
      letter-spacing: 0.22em;
      color: #A3704C;
      text-transform: uppercase;
    }
    .eyebrow-dot {
      color: #D0C8BF;
      font-size: 9.5px;
    }
    .eyebrow-sub {
      font-size: 9.5px;
      font-family: 'JetBrains Mono', monospace;
      letter-spacing: 0.16em;
      color: #888888;
      text-transform: uppercase;
    }
    .model-title {
      font-size: 24px;
      font-weight: 800;
      color: #12100E;
      line-height: 1.15;
      text-transform: uppercase;
      letter-spacing: -0.01em;
    }
    .model-code-badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10.5px;
      font-weight: 700;
      background: #1A1A1A;
      color: #FFFFFF;
      padding: 4px 10px;
      border-radius: 4px;
      letter-spacing: 0.08em;
      white-space: nowrap;
      box-shadow: 0 1px 3px rgba(0,0,0,0.15);
    }
    .model-code-badge span.label {
      color: #8E8E8E;
    }
    .model-code-badge span.val {
      color: #F3C769;
      font-weight: 800;
    }

    .model-desc {
      font-size: 11.5px;
      line-height: 1.45;
      color: #403B36;
      margin-top: 4px;
      margin-bottom: 6px;
      max-width: 96%;
    }

    .highlights-divider {
      border-top: 1px solid rgba(212, 204, 195, 0.7);
      padding-top: 5px;
      margin-bottom: 4px;
    }
    .highlights-header {
      font-size: 10px;
      font-weight: 800;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #1A1A1A;
      display: flex;
      align-items: center;
      gap: 5px;
      margin-bottom: 4px;
    }
    .highlight-dot {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #A3704C;
      display: inline-block;
    }
    .highlights-list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .highlights-list li {
      display: flex;
      align-items: flex-start;
      gap: 6px;
      font-size: 10.8px;
      color: #443F3A;
      line-height: 1.35;
    }
    .highlights-list li span.bullet {
      color: #A3704C;
      font-weight: 800;
      font-size: 11px;
      line-height: 1;
      margin-top: 1.5px;
    }

    /* Main High-Res Image Box */
    .image-showcase-box {
      flex: 1;
      min-height: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 4px;
      margin-bottom: 4px;
    }
    .image-canvas-outer {
      flex: 1;
      min-height: 0;
      background: #FFFFFF;
      border: 1.5px solid #DDD7CE;
      border-radius: 4px;
      padding: 5px;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .image-canvas-inner {
      width: 100%;
      height: 100%;
      background: #F6F4EE;
      border-radius: 2px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .image-canvas-inner img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
      display: block;
    }

    /* Sub-Image Reference Bar */
    .under-image-bar {
      flex: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 5px;
      padding: 0 2px;
    }
    .sub-code-badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9.5px;
      font-weight: 700;
      background: #1A1A1A;
      color: #FFFFFF;
      padding: 3px 8px;
      border-radius: 4px;
      letter-spacing: 0.08em;
    }
    .sub-code-badge span.label {
      color: #8E8E8E;
    }
    .sub-code-badge span.val {
      color: #F3C769;
      font-weight: 800;
    }
    .sub-tagline {
      font-style: italic;
      font-size: 11.5px;
      font-weight: 500;
      color: #4A443E;
      letter-spacing: 0.02em;
    }

    /* Bottom Page Footer */
    .page-footer {
      flex: none;
      padding-top: 7px;
      border-top: 1px solid rgba(212, 204, 195, 0.8);
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 9.5px;
    }
    .footer-left-brand {
      display: flex;
      align-items: center;
      gap: 7px;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      color: #555555;
      font-weight: 600;
    }
    .footer-left-brand strong {
      color: #1A1A1A;
      font-weight: 800;
    }
    .footer-left-brand span.copper {
      color: #A3704C;
      font-weight: 700;
    }
    .footer-page-wrap {
      font-family: 'JetBrains Mono', monospace;
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 10.5px;
      font-weight: 700;
      color: #1A1A1A;
    }
    .footer-page-wrap span.label {
      color: #777777;
      font-weight: 500;
    }
    .footer-page-box {
      background: #EAE5DE;
      border: 1px solid #D8D2C8;
      padding: 1.5px 7px;
      border-radius: 3px;
      font-weight: 800;
    }

    /* ================= 3. FINAL CONTACT PAGE ================= */
    .contact-page {
      background: #12100E;
      color: #FFFFFF;
      padding: 18mm 16mm 14mm 16mm;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .contact-header {
      border-bottom: 1px solid rgba(255, 255, 255, 0.15);
      padding-bottom: 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .contact-hero {
      margin: auto 0;
    }
    .contact-eyebrow {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.24em;
      color: #CE7F53;
      text-transform: uppercase;
      margin-bottom: 8px;
      display: block;
    }
    .contact-title {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 30px;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 12px;
    }
    .contact-desc {
      font-size: 12px;
      line-height: 1.6;
      color: #D6CBC1;
      max-width: 140mm;
      margin-bottom: 20px;
    }
    .contact-cards-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      margin-bottom: 18px;
    }
    .contact-box {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(184, 109, 67, 0.3);
      border-radius: 8px;
      padding: 12px 14px;
    }
    .contact-box-label {
      font-size: 8.5px;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 700;
      color: #CE7F53;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      margin-bottom: 4px;
    }
    .contact-box-val {
      font-size: 12.5px;
      font-weight: 700;
      color: #FFFFFF;
      margin-bottom: 2px;
    }
    .contact-box-sub {
      font-size: 9.5px;
      color: #8C7E74;
    }
    .contact-footer-bar {
      border-top: 1px solid rgba(255, 255, 255, 0.12);
      padding-top: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 9px;
      color: #8C7E74;
    }
  </style>
</head>
<body>

  <!-- ================= PAGE 1: COVER PAGE ================= -->
  <div class="a4-page cover-page" id="page-cover">
    <img src="${coverA4Src}" alt="Wooden Flooring Design Catalogue 2026 Cover">
  </div>

  <!-- ================= PAGES 2 to 31: 30 MODEL PAGES ================= -->
  ${items.map((item, idx) => {
    const pageNum = idx + 1;
    const pageCode = `P/${String(pageNum).padStart(2, '0')}`;
    const localImgPath = path.join(__dirname, '..', 'public', item.image);
    let imgSrc = '';
    if (fs.existsSync(localImgPath)) {
      const ext = path.extname(localImgPath).toLowerCase() === '.png' ? 'png' : 'jpeg';
      const b64 = fs.readFileSync(localImgPath).toString('base64');
      imgSrc = `data:image/${ext};base64,${b64}`;
    }

    return `
    <div class="a4-page">
      <!-- 1. TOP HEADER (MATCHING EXACT APPROVED REFERENCE) -->
      <header class="page-header">
        <div class="header-brand-wrap">
          <div class="header-logo-box">
            <img src="${logoSrc}" alt="Capsule Company">
          </div>
          <div>
            <div class="header-brand-title">CAPSULE COMPANY</div>
            <div class="header-brand-sub">YOUR SPACE MAKER</div>
          </div>
        </div>
        <div class="header-category-box">
          <div class="header-cat-eyebrow">WOODEN FLOORING CATALOGUE</div>
          <div class="header-cat-name">${item.categoryName}</div>
        </div>
      </header>

      <!-- 2. EDITORIAL SPECIFICATION BLOCK (MATCHING EXACT APPROVED REFERENCE) -->
      <section class="editorial-section">
        <!-- Row 1: Model Title & Code Badge -->
        <div class="editorial-top-row">
          <div>
            <div class="eyebrow-wrap">
              <span class="eyebrow-main">WOODEN FLOORING DESIGN</span>
              <span class="eyebrow-dot">•</span>
              <span class="eyebrow-sub">COLLECTION 2026</span>
            </div>
            <h1 class="model-title">${item.name}</h1>
          </div>
          <div class="model-code-badge">
            <span class="label">CODE: </span>
            <span class="val">${item.code}</span>
          </div>
        </div>

        <!-- Row 2: Short Architectural Description -->
        <p class="model-desc">
          ${item.desc}
        </p>

        <!-- Row 3: DESIGN HIGHLIGHTS -->
        <div class="highlights-divider">
          <div class="highlights-header">
            <span class="highlight-dot"></span>
            <span>DESIGN HIGHLIGHTS:</span>
          </div>
          <ul class="highlights-list">
            ${item.highlights.map(h => `
              <li>
                <span class="bullet">•</span>
                <span>${h}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </section>

      <!-- 3. MAIN DESIGN IMAGE WITH CLEAN MATTE FRAME -->
      <section class="image-showcase-box">
        <div class="image-canvas-outer">
          <div class="image-canvas-inner">
            <img src="${imgSrc}" alt="${item.name} - ${item.code} - Capsule Wooden Flooring">
          </div>
        </div>
        <div class="under-image-bar">
          <div class="sub-code-badge">
            <span class="label">DESIGN REF: </span>
            <span class="val">${item.code}</span>
          </div>
          <div class="sub-tagline">${item.tagline}</div>
        </div>
      </section>

      <!-- 4. BOTTOM FOOTER BAR (MATCHING EXACT APPROVED REFERENCE) -->
      <footer class="page-footer">
        <div class="footer-left-brand">
          <strong>CAPSULE COMPANY</strong>
          <span>•</span>
          <span class="copper">YOUR SPACE MAKER</span>
          <span>•</span>
          <span>BANGALORE</span>
        </div>
        <div class="footer-page-wrap">
          <span class="label">PAGE</span>
          <span class="footer-page-box">${pageCode}</span>
        </div>
      </footer>
    </div>
    `;
  }).join('')}

  <!-- ================= PAGE 32: STUDIO CONTACT PAGE ================= -->
  <div class="a4-page contact-page">
    <header class="contact-header">
      <div class="header-brand-wrap">
        <div class="header-logo-box">
          <img src="${logoSrc}" alt="Capsule Company">
        </div>
        <div>
          <div class="header-brand-title" style="color: #FFFFFF;">CAPSULE COMPANY</div>
          <div class="header-brand-sub">YOUR SPACE MAKER</div>
        </div>
      </div>
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #CE7F53; letter-spacing: 0.16em;">
        STUDIO PRESENCE • BENGALURU
      </div>
    </header>

    <div class="contact-hero">
      <span class="contact-eyebrow">Design Consultations & Execution</span>
      <h2 class="contact-title">Experience Capsule Craftsmanship</h2>
      <p class="contact-desc">
        Connect directly with our architectural flooring specialists for on-site moisture profiling, subfloor preparation, custom stain sampling, and precision turnkey installation across Bengaluru.
      </p>

      <div class="contact-cards-grid">
        <div class="contact-box">
          <div class="contact-box-label">Direct Studio Phone</div>
          <div class="contact-box-val">+91 91879 24723</div>
          <div class="contact-box-sub">Mon–Sat • 9:30 AM to 7:00 PM</div>
        </div>

        <div class="contact-box">
          <div class="contact-box-label">Project Inquiries</div>
          <div class="contact-box-val">project@capsulecompany.in</div>
          <div class="contact-box-sub">Architecture & RFQ Submissions</div>
        </div>

        <div class="contact-box">
          <div class="contact-box-label">General Email</div>
          <div class="contact-box-val">works.capsule@gmail.com</div>
          <div class="contact-box-sub">Client Support & Inquiries</div>
        </div>

        <div class="contact-box">
          <div class="contact-box-label">Experience Studio</div>
          <div class="contact-box-val">Bengaluru, Karnataka</div>
          <div class="contact-box-sub">Material Library & Tactile Samples</div>
        </div>
      </div>
    </div>

    <footer class="contact-footer-bar">
      <div>CAPSULE COMPANY • ARCHITECTURAL FLOORING SYSTEMS • VOLUME 2026</div>
      <div style="font-family: 'JetBrains Mono', monospace; font-weight: 700; color: #CE7F53;">PAGE 32 / 32</div>
    </footer>
  </div>

</body>
</html>
`;

// Save template HTML to scripts/wooden-flooring-catalogue-template.html for review/caching
const templatePath = path.join(__dirname, 'wooden-flooring-catalogue-template.html');
fs.writeFileSync(templatePath, htmlContent, 'utf8');
console.log(`Saved template HTML to ${templatePath} (${(htmlContent.length / 1024 / 1024).toFixed(2)} MB)`);

async function buildPDF() {
  console.log('Launching browser with Puppeteer...');
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--font-render-hinting=none'
    ]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1240, height: 1754, deviceScaleFactor: 2 });

  console.log('Setting HTML content in page...');
  await page.setContent(htmlContent, { waitUntil: 'load' });
  await page.evaluateHandle('document.fonts.ready');
  console.log('Fonts loaded.');

  // Generate complete 32-page PDF
  const outPdfRoot = path.join(__dirname, '..', 'Capsule_Company_Wooden_Flooring_Catalogue.pdf');
  const outPdfPublic = path.join(__dirname, '..', 'public', 'Capsule_Company_Wooden_Flooring_Catalogue.pdf');

  console.log('Rendering 32-page A4 PDF...');
  await page.pdf({
    path: outPdfRoot,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    preferCSSPageSize: true
  });

  fs.copyFileSync(outPdfRoot, outPdfPublic);
  const stats = fs.statSync(outPdfRoot);
  console.log(`PDF built successfully! Size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Saved to ${outPdfRoot} and copied to ${outPdfPublic}`);

  // Snapshot sample pages for visual inspection
  const pagesToSnapshot = [
    { num: 1, selector: '.a4-page:nth-of-type(1)', name: 'scratch/wf_preview_p01_cover.jpg' },
    { num: 2, selector: '.a4-page:nth-of-type(2)', name: 'scratch/wf_preview_p02_model1.jpg' },
    { num: 13, selector: '.a4-page:nth-of-type(13)', name: 'scratch/wf_preview_p13_sunburst.jpg' },
    { num: 32, selector: '.a4-page:nth-of-type(32)', name: 'scratch/wf_preview_p32_contact.jpg' }
  ];

  for (const snap of pagesToSnapshot) {
    const el = await page.$(snap.selector);
    if (el) {
      await el.screenshot({
        path: path.join(__dirname, '..', snap.name),
        type: 'jpeg',
        quality: 90
      });
      console.log(`Saved preview: ${snap.name}`);
    }
  }

  await browser.close();
  console.log('Done!');
}

buildPDF().catch(err => {
  console.error('Build error:', err);
  process.exit(1);
});
