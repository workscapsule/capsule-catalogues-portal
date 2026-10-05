const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const dataPath = path.join(__dirname, '..', 'public', 'assets', 'vinyl-flooring', 'vinyl-flooring-data.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const logoPath = path.join(__dirname, '..', 'public', 'logo.png');
const logoBase64 = fs.readFileSync(logoPath).toString('base64');
const logoSrc = `data:image/png;base64,${logoBase64}`;

// Full-bleed Cover Reference from user
const coverPath = path.join(__dirname, '..', 'covers', 'vinyl-flooring-cover-reference.jpg');
const coverBase64 = fs.readFileSync(coverPath).toString('base64');
const coverA4Src = `data:image/jpeg;base64,${coverBase64}`;

const items = data.orderedItems;

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Capsule Company - Vinyl Flooring Design Catalogue 2026</title>
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
      padding: 0 !important;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #000;
    }
    .cover-page img {
      width: 210mm;
      height: 297mm;
      object-fit: cover;
      display: block;
    }

    .cover-top {
      text-align: center;
      position: relative;
      z-index: 2;
    }

    .cover-top-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 5px 18px;
      border-radius: 9999px;
      border: 1px solid rgba(184, 109, 67, 0.4);
      background: rgba(184, 109, 67, 0.12);
      color: #CE7F53;
      font-size: 9.5px;
      font-weight: 700;
      letter-spacing: 0.24em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }

    .cover-logo-frame {
      width: 64px;
      height: 64px;
      margin: 0 auto 10px;
      border-radius: 12px;
      background: #FFFFFF;
      border: 1.5px solid rgba(184, 109, 67, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
    }
    .cover-logo-frame img {
      width: 48px;
      height: 48px;
      object-fit: contain;
    }

    .cover-brand-title {
      font-size: 14px;
      font-weight: 800;
      letter-spacing: 0.28em;
      text-transform: uppercase;
      color: #FFFFFF;
      line-height: 1.2;
    }
    .cover-brand-sub {
      font-size: 9.5px;
      font-weight: 700;
      letter-spacing: 0.26em;
      text-transform: uppercase;
      color: #CE7F53;
      margin-top: 2px;
      margin-bottom: 14px;
    }

    .cover-main-title {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 36px;
      font-weight: 700;
      letter-spacing: 0.04em;
      line-height: 1.15;
      text-transform: uppercase;
      color: #FFFFFF;
      margin-bottom: 4px;
    }
    .cover-main-title span.italic-gold {
      color: #CE7F53;
      font-style: italic;
      font-weight: 400;
      text-transform: none;
      font-family: 'Playfair Display', Georgia, serif;
    }

    .cover-rule {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      max-width: 260px;
      margin: 10px auto;
    }
    .cover-rule::before, .cover-rule::after {
      content: '';
      flex: 1;
      height: 1px;
      background: linear-gradient(90deg, transparent, #B86D43, transparent);
    }
    .cover-diamond {
      width: 6px;
      height: 6px;
      background: #CE7F53;
      transform: rotate(45deg);
    }

    .cover-desc {
      font-size: 11px;
      line-height: 1.55;
      color: #D6CBC1;
      max-width: 145mm;
      margin: 0 auto;
      font-weight: 400;
    }

    .cover-hero-box {
      flex: 1;
      min-height: 0;
      margin: 12px 0;
      border-radius: 8px;
      overflow: hidden;
      position: relative;
      border: 1.5px solid rgba(184, 109, 67, 0.4);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
      background: #1C1916;
    }
    .cover-hero-box img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .cover-hero-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(20, 17, 14, 0.1) 0%, rgba(20, 17, 14, 0.6) 100%);
      pointer-events: none;
    }
    .cover-hero-tag {
      position: absolute;
      bottom: 12px;
      left: 14px;
      background: rgba(18, 16, 14, 0.85);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(184, 109, 67, 0.3);
      border-radius: 4px;
      padding: 4px 10px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      font-weight: 700;
      letter-spacing: 0.14em;
      color: #E6DDD5;
      text-transform: uppercase;
    }

    .cover-categories-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 6px 10px;
      text-align: left;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(184, 109, 67, 0.25);
      border-radius: 6px;
      padding: 10px 14px;
      margin-bottom: 12px;
    }
    .cover-cat-pill {
      font-size: 8.5px;
      color: #E6DDD5;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .cover-cat-num {
      color: #CE7F53;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 700;
    }

    .cover-footer {
      border-top: 1px solid rgba(255, 255, 255, 0.12);
      padding-top: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 8.8px;
      color: #8C7E74;
      font-family: 'JetBrains Mono', monospace;
      letter-spacing: 0.1em;
    }

    /* ================= 2. MODEL SHOWCASE PAGES ================= */
    .page-header {
      flex: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1.5px solid #2B2824;
      padding-bottom: 8px;
    }
    .header-brand-wrap {
      display: flex;
      align-items: center;
      gap: 9px;
    }
    .header-logo-box {
      width: 32px;
      height: 32px;
      border: 1px solid #D6D0C5;
      border-radius: 5px;
      background: #FFFFFF;
      padding: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
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
      border-bottom: 1px solid #E5DFD5;
      padding-bottom: 7px;
      margin-bottom: 8px;
    }
    .eyebrow-wrap {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-bottom: 2px;
    }
    .eyebrow-main {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      font-weight: 700;
      letter-spacing: 0.2em;
      color: #A3704C;
      text-transform: uppercase;
    }
    .eyebrow-dot {
      color: #C0B7A8;
      font-size: 9px;
    }
    .eyebrow-sub {
      font-family: 'JetBrains Mono', monospace;
      font-size: 8.5px;
      font-weight: 600;
      letter-spacing: 0.15em;
      color: #8C8275;
    }
    .model-title {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 20px;
      font-weight: 700;
      color: #1A1A1A;
      letter-spacing: 0.02em;
      line-height: 1.15;
    }
    .model-code-badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 700;
      background: #A3704C;
      color: #FFFFFF;
      padding: 4px 10px;
      border-radius: 4px;
      letter-spacing: 0.1em;
      white-space: nowrap;
    }

    .editorial-body {
      display: grid;
      grid-template-columns: 1.15fr 1fr;
      gap: 16px;
      margin-bottom: 4px;
    }
    .model-desc-text {
      font-size: 9.8px;
      line-height: 1.5;
      color: #4A4238;
      margin: 0;
    }
    .model-highlights-list {
      list-style: none;
      display: grid;
      grid-template-columns: 1fr;
      gap: 2.5px;
    }
    .model-highlights-list li {
      font-size: 9px;
      color: #38322A;
      line-height: 1.35;
      display: flex;
      align-items: flex-start;
      gap: 6px;
    }
    .bullet-diamond {
      color: #A3704C;
      font-size: 7.5px;
      line-height: 1.4;
      flex-shrink: 0;
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
      font-size: 9.5px;
      color: #7A6F62;
    }

    /* Bottom Page Footer */
    .page-footer {
      flex: none;
      border-top: 1.5px solid #2B2824;
      padding-top: 7px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .footer-left-brand {
      font-size: 9.5px;
      letter-spacing: 0.16em;
      color: #262626;
      display: flex;
      align-items: center;
      gap: 7px;
    }
    .footer-left-brand strong {
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
      max-width: 160mm;
    }
    .contact-card {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(206, 127, 83, 0.3);
      border-radius: 6px;
      padding: 12px 14px;
    }
    .contact-card-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      font-weight: 700;
      letter-spacing: 0.16em;
      color: #CE7F53;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .contact-card-val {
      font-size: 13px;
      font-weight: 600;
      color: #FFFFFF;
      line-height: 1.3;
    }
    .contact-card-sub {
      font-size: 9.5px;
      color: #A89D91;
      margin-top: 3px;
    }
    .contact-footer {
      border-top: 1px solid rgba(255, 255, 255, 0.15);
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
    <img src="${coverA4Src}" alt="Vinyl Flooring Design Catalogue 2026 Cover">
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
          <div class="header-cat-eyebrow">VINYL FLOORING CATALOGUE</div>
          <div class="header-cat-name">${item.category}</div>
        </div>
      </header>

      <!-- 2. EDITORIAL SPECIFICATION BLOCK (MATCHING EXACT APPROVED REFERENCE) -->
      <section class="editorial-section">
        <div class="editorial-top-row">
          <div>
            <div class="eyebrow-wrap">
              <span class="eyebrow-main">VINYL FLOORING DESIGN</span>
              <span class="eyebrow-dot">•</span>
              <span class="eyebrow-sub">COLLECTION 2026</span>
            </div>
            <h1 class="model-title">${item.name}</h1>
          </div>
          <div class="model-code-badge">CODE: ${item.code}</div>
        </div>

        <div class="editorial-body">
          <p class="model-desc-text">${item.desc}</p>
          <ul class="model-highlights-list">
            ${item.highlights.map(h => `
              <li>
                <span class="bullet-diamond">◆</span>
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
            <img src="${imgSrc}" alt="${item.name} - ${item.code} - Capsule Vinyl Flooring">
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
      <span class="contact-eyebrow">Direct Consultation & In-Person Experience</span>
      <h2 class="contact-title">Visit Our Bengaluru Design Studio</h2>
      <p class="contact-desc">
        Experience our complete range of Luxury Vinyl Tile (LVT), Rigid Core Stone Plastic Composite (SPC), acoustic underlays, and custom transition systems in person. Schedule a dedicated material curation walkthrough with our senior interior architects.
      </p>

      <div class="contact-cards-grid">
        <div class="contact-card">
          <div class="contact-card-label">Direct Studio Hotline</div>
          <div class="contact-card-val">9636124422</div>
          <div class="contact-card-sub">Mon – Sat: 9:30 AM to 8:30 PM</div>
        </div>
        <div class="contact-card">
          <div class="contact-card-label">Official Correspondence</div>
          <div class="contact-card-val">info@capsuleinteriors.com</div>
          <div class="contact-card-sub">Turnkey Estimates & Technical Inquiries</div>
        </div>
        <div class="contact-card" style="grid-column: span 2;">
          <div class="contact-card-label">Experience Center & Office</div>
          <div class="contact-card-val">SLV Complex, 17/3, Outer Ring Rd, Kariyana Layout, Hebbal Kempapura, Bengaluru, Karnataka 560024</div>
          <div class="contact-card-sub">Complimentary Parking & Live Material Gallery</div>
        </div>
      </div>
    </div>

    <footer class="contact-footer">
      <div>CAPSULE COMPANY • YOUR SPACE MAKER • BENGALURU</div>
      <div>PAGE 32 / 32</div>
    </footer>
  </div>

</body>
</html>`;

async function buildPdf() {
  const templatePath = path.join(__dirname, 'vinyl-flooring-catalogue-template.html');
  fs.writeFileSync(templatePath, htmlContent, 'utf8');
  console.log(`Saved template HTML to ${templatePath} (${(htmlContent.length / (1024 * 1024)).toFixed(2)} MB)`);

  console.log('Launching browser with Puppeteer...');
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--font-render-hinting=max'
    ]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 1600, deviceScaleFactor: 2 });

  console.log('Setting HTML content in page...');
  await page.setContent(htmlContent, { waitUntil: 'load' });
  await page.evaluateHandle('document.fonts.ready');
  console.log('Fonts loaded.');

  // Export cover image reference
  const coverEl = await page.$('#page-cover');
  if (coverEl) {
    const coversDir = path.join(__dirname, '..', 'public', 'covers');
    const rootCoversDir = path.join(__dirname, '..', 'covers');
    if (!fs.existsSync(coversDir)) fs.mkdirSync(coversDir, { recursive: true });
    if (!fs.existsSync(rootCoversDir)) fs.mkdirSync(rootCoversDir, { recursive: true });

    const coverImgPath = path.join(coversDir, 'vinyl-flooring-cover-reference.jpg');
    const rootCoverImgPath = path.join(rootCoversDir, 'vinyl-flooring-cover-reference.jpg');

    await coverEl.screenshot({ path: coverImgPath, type: 'jpeg', quality: 90 });
    fs.copyFileSync(coverImgPath, rootCoverImgPath);
    console.log(`Exported cover image to ${coverImgPath}`);
  }

  console.log('Rendering 32-page A4 PDF...');
  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: false,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });

  const outPdfRoot = path.join(__dirname, '..', 'Capsule_Company_Vinyl_Flooring_Catalogue.pdf');
  const outPdfPublic = path.join(__dirname, '..', 'public', 'Capsule_Company_Vinyl_Flooring_Catalogue.pdf');

  fs.writeFileSync(outPdfRoot, pdfBuffer);
  fs.writeFileSync(outPdfPublic, pdfBuffer);

  console.log(`PDF built successfully! Size: ${(pdfBuffer.length / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Saved to ${outPdfRoot} and copied to ${outPdfPublic}`);

  // Take sample page previews for verification
  const scratchDir = path.join(__dirname, '..', 'scratch');
  const pages = await page.$$('.a4-page');
  if (pages.length >= 32) {
    await pages[0].screenshot({ path: path.join(scratchDir, 'vfl_preview_p01_cover.jpg'), type: 'jpeg', quality: 85 });
    await pages[1].screenshot({ path: path.join(scratchDir, 'vfl_preview_p02_model1.jpg'), type: 'jpeg', quality: 85 });
    await pages[17].screenshot({ path: path.join(scratchDir, 'vfl_preview_p18_herringbone.jpg'), type: 'jpeg', quality: 85 });
    await pages[31].screenshot({ path: path.join(scratchDir, 'vfl_preview_p32_contact.jpg'), type: 'jpeg', quality: 85 });
    console.log('Saved previews to scratch/');
  }

  await browser.close();
  console.log('Done!');
}

buildPdf().catch(err => {
  console.error('PDF Build error:', err);
  process.exit(1);
});
