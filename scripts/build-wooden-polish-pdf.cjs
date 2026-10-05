const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const dataPath = path.join(__dirname, '..', 'public', 'assets', 'wooden-polish', 'wooden-polish-data.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const logoPath = path.join(__dirname, '..', 'public', 'logo.png');
const logoBase64 = fs.readFileSync(logoPath).toString('base64');
const logoSrc = `data:image/png;base64,${logoBase64}`;

// Full-bleed Cover Reference from user
const coverPath = path.join(__dirname, '..', 'covers', 'wooden-polish-cover-reference.jpg');
const coverBase64 = fs.readFileSync(coverPath).toString('base64');
const coverA4Src = `data:image/jpeg;base64,${coverBase64}`;

const items = data.orderedItems;
const totalPages = items.length + 2; // Cover + 25 Models + Contact Page = 27

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Capsule Company - Wooden Polish Design Catalogue 2026</title>
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
      border-radius: 50%;
      background: linear-gradient(135deg, #CE7F53, #FFFFFF, #B86D43);
      padding: 2px;
      margin: 0 auto 12px;
      box-shadow: 0 10px 25px rgba(184, 109, 67, 0.25);
    }
    .cover-logo-inner {
      width: 100%;
      height: 100%;
      background: #FFFFFF;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
    }
    .cover-logo-inner img {
      width: 100%;
      height: 100%;
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
      font-size: 34px;
      font-weight: 700;
      letter-spacing: 0.04em;
      color: #FFFFFF;
      line-height: 1.15;
      text-transform: uppercase;
    }
    .cover-main-title span.italic-gold {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      color: #E29B6C;
      font-size: 32px;
      text-transform: capitalize;
    }

    .cover-rule {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      margin: 10px auto 10px auto;
      max-width: 240px;
    }
    .cover-rule::before, .cover-rule::after {
      content: '';
      flex: 1;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(206, 127, 83, 0.6), transparent);
    }
    .cover-diamond {
      width: 6px;
      height: 6px;
      background: #CE7F53;
      transform: rotate(45deg);
    }

    .cover-desc {
      font-size: 11px;
      font-weight: 400;
      color: #BDB4AC;
      line-height: 1.55;
      max-width: 520px;
      margin: 0 auto;
    }

    .cover-hero-box {
      width: 100%;
      height: 145mm;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid rgba(206, 127, 83, 0.35);
      position: relative;
      box-shadow: 0 16px 40px rgba(0,0,0,0.6);
      margin: 10px 0;
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
      background: linear-gradient(to top, rgba(20, 17, 14, 0.75) 0%, rgba(20, 17, 14, 0.1) 40%, transparent 100%);
    }
    .cover-hero-tag {
      position: absolute;
      bottom: 12px;
      left: 16px;
      background: rgba(20, 17, 14, 0.85);
      border: 1px solid rgba(206, 127, 83, 0.4);
      border-radius: 4px;
      padding: 4px 10px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 9.5px;
      color: #F3C769;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }

    .cover-categories-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 6px 12px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(206, 127, 83, 0.2);
      border-radius: 8px;
      padding: 10px 14px;
      margin-bottom: 8px;
    }
    .cover-cat-pill {
      font-size: 9.5px;
      color: #D3CBC4;
      display: flex;
      align-items: center;
      gap: 6px;
      white-space: nowrap;
    }
    .cover-cat-num {
      color: #CE7F53;
      font-family: 'JetBrains Mono', monospace;
      font-size: 8.5px;
      font-weight: 700;
    }

    .cover-footer {
      border-top: 1px solid rgba(206, 127, 83, 0.25);
      padding-top: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: 'JetBrains Mono', monospace;
      font-size: 8.5px;
      letter-spacing: 0.16em;
      color: #8C7E74;
      text-transform: uppercase;
    }

    /* ================= 2. MODEL PAGE TEMPLATE (EXACT WALL PANEL CLONE) ================= */
    .header-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1.5px solid #1A1A1A;
      padding-bottom: 7px;
      margin-bottom: 7px;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .header-logo-box {
      width: 38px;
      height: 38px;
      background: #FFFFFF;
      border: 1px solid #E5DDD3;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.04);
    }
    .header-logo-box img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .header-brand {
      display: flex;
      flex-direction: column;
    }
    .header-brand-title {
      font-size: 13px;
      font-weight: 800;
      letter-spacing: 0.22em;
      color: #12100E;
      text-transform: uppercase;
      line-height: 1.2;
    }
    .header-brand-sub {
      font-size: 9px;
      font-weight: 700;
      letter-spacing: 0.24em;
      color: #B86D43;
      text-transform: uppercase;
    }

    .header-right {
      text-align: right;
    }
    .header-collection {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      letter-spacing: 0.16em;
      color: #888888;
      text-transform: uppercase;
    }
    .header-category {
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.16em;
      color: #B86D43;
      text-transform: uppercase;
    }

    /* Model Specification Header */
    .model-info-block {
      margin-bottom: 7px;
    }

    .model-meta-row {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 16px;
      margin-bottom: 4px;
    }

    .model-title-wrap {
      flex: 1;
    }
    .model-pre-tag {
      font-family: 'JetBrains Mono', monospace;
      font-size: 8.5px;
      font-weight: 600;
      letter-spacing: 0.16em;
      color: #888888;
      text-transform: uppercase;
    }
    .model-title {
      font-size: 21px;
      font-weight: 800;
      color: #12100E;
      line-height: 1.15;
      text-transform: uppercase;
      letter-spacing: -0.01em;
    }

    .model-code-badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 700;
      background: #B86D43;
      color: #FFFFFF;
      padding: 4px 12px;
      border-radius: 4px;
      letter-spacing: 0.12em;
      white-space: nowrap;
      box-shadow: 0 2px 4px rgba(184, 109, 67, 0.25);
    }

    .model-desc-bullets-grid {
      display: grid;
      grid-template-columns: 1.15fr 1.25fr;
      gap: 14px;
      align-items: start;
      margin-top: 4px;
    }

    .model-desc {
      font-size: 10.5px;
      line-height: 1.45;
      color: #403B36;
    }

    .model-bullets-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 2.5px;
    }
    .model-bullets-list li {
      font-size: 9.5px;
      line-height: 1.35;
      color: #2D2722;
      display: flex;
      align-items: baseline;
      gap: 6px;
    }
    .model-bullets-list li::before {
      content: '◆';
      font-size: 7px;
      color: #B86D43;
      flex-shrink: 0;
    }

    /* Image Showcase Frame */
    .image-showcase-frame {
      flex: 1;
      width: 100%;
      background: #FFFFFF;
      border: 1px solid #E5DDD3;
      border-radius: 8px;
      box-shadow: 0 4px 18px rgba(0,0,0,0.06);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      margin-bottom: 7px;
      position: relative;
    }

    .image-container-inner {
      flex: 1;
      width: 100%;
      height: 182mm;
      position: relative;
      background: #FDFBF7;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
    .image-container-inner img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .image-meta-bar {
      height: 32px;
      background: #FFFFFF;
      border-top: 1px solid #EFE8DE;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 14px;
      font-size: 9.5px;
    }
    .image-ref-badge {
      background: #1A1A1A;
      color: #FFFFFF;
      font-family: 'JetBrains Mono', monospace;
      font-size: 8.5px;
      font-weight: 700;
      padding: 2px 8px;
      border-radius: 3px;
      letter-spacing: 0.1em;
    }
    .image-ref-badge span.copper {
      color: #F3C769;
    }
    .image-meta-text {
      color: #6B5E54;
      font-style: italic;
      font-family: 'Playfair Display', Georgia, serif;
    }

    /* Page Footer Bar */
    .footer-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid #D6CCC2;
      padding-top: 7px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      letter-spacing: 0.16em;
      color: #6B5E54;
      text-transform: uppercase;
    }
    .footer-brand {
      font-weight: 700;
      color: #12100E;
    }
    .footer-page-num {
      font-weight: 700;
      background: #EFE8DE;
      padding: 2px 7px;
      border-radius: 3px;
      color: #12100E;
    }

    /* ================= 3. CONTACT PAGE ================= */
    .contact-page {
      background: #12100E;
      color: #F7F3ED;
      padding: 14mm 16mm 10mm 16mm !important;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .contact-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(184, 109, 67, 0.35);
      padding-bottom: 12px;
    }

    .contact-body {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 20px 0;
    }
    .contact-eyebrow {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 700;
      color: #CE7F53;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .contact-title {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 36px;
      color: #FFFFFF;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 16px;
    }
    .contact-desc {
      font-size: 12.5px;
      color: #BDB4AC;
      line-height: 1.65;
      max-width: 600px;
      margin-bottom: 34px;
    }

    .contact-details-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }
    .contact-card {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(184, 109, 67, 0.25);
      border-radius: 8px;
      padding: 16px 20px;
    }
    .contact-card.full-width {
      grid-column: span 2;
    }
    .contact-card-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      letter-spacing: 0.16em;
      color: #CE7F53;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .contact-card-val {
      font-size: 15px;
      font-weight: 700;
      color: #FFFFFF;
      line-height: 1.35;
    }
    .contact-card-sub {
      font-size: 11px;
      color: #8C7E74;
      margin-top: 4px;
    }

    .contact-footer {
      border-top: 1px solid rgba(184, 109, 67, 0.35);
      padding-top: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 9px;
      color: #8C7E74;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      font-family: 'JetBrains Mono', monospace;
    }
  </style>
</head>
<body>

  <!-- ================= PAGE 1: COVER PAGE ================= -->
  <div class="a4-page cover-page" id="page-cover">
    <img src="${coverA4Src}" alt="Wooden Polish Design Catalogue 2026 Cover">
  </div>

  <!-- ================= PAGES 2 to 26: 25 MODEL PAGES ================= -->
  ${items.map((item, idx) => {
    const pageNum = idx + 2;
    const pagePad = String(idx + 1).padStart(2, '0');
    const imgPath = path.join(__dirname, '..', 'public', 'assets', 'wooden-polish', item.fileName);
    let imgSrc = '';
    if (fs.existsSync(imgPath)) {
      const base64 = fs.readFileSync(imgPath).toString('base64');
      imgSrc = `data:image/jpeg;base64,${base64}`;
    }

    return `
    <div class="a4-page">
      <!-- Top Header -->
      <header class="header-bar">
        <div class="header-left">
          <div class="header-logo-box">
            <img src="${logoSrc}" alt="Capsule Company">
          </div>
          <div class="header-brand">
            <span class="header-brand-title">CAPSULE COMPANY</span>
            <span class="header-brand-sub">YOUR SPACE MAKER</span>
          </div>
        </div>
        <div class="header-right">
          <div class="header-collection">WOODEN POLISH CATALOGUE</div>
          <div class="header-category">${item.category}</div>
        </div>
      </header>

      <!-- Model Specifications -->
      <div class="model-info-block">
        <div class="model-meta-row">
          <div class="model-title-wrap">
            <div class="model-pre-tag">WOODEN POLISH DESIGN • COLLECTION 2026</div>
            <h2 class="model-title">${item.title}</h2>
          </div>
          <div class="model-code-badge">CODE: ${item.code}</div>
        </div>

        <div class="model-desc-bullets-grid">
          <p class="model-desc">${item.desc}</p>
          <ul class="model-bullets-list">
            ${item.bullets.map(b => `<li>${b}</li>`).join('')}
          </ul>
        </div>
      </div>

      <!-- Main Showcase Frame -->
      <div class="image-showcase-frame">
        <div class="image-container-inner">
          <img src="${imgSrc}" alt="${item.title}">
        </div>
        <div class="image-meta-bar">
          <div class="image-ref-badge">DESIGN REF: <span class="copper">${item.code}</span></div>
          <div class="image-meta-text">${item.subtitle}</div>
        </div>
      </div>

      <!-- Page Footer -->
      <footer class="footer-bar">
        <div>
          <span class="footer-brand">CAPSULE COMPANY</span> • YOUR SPACE MAKER • BANGALORE
        </div>
        <div>
          PAGE <span class="footer-page-num">P/${pagePad}</span>
        </div>
      </footer>
    </div>
    `;
  }).join('')}

  <!-- ================= PAGE 27: STUDIO CONTACT PAGE ================= -->
  <div class="a4-page contact-page">
    <div class="contact-header">
      <div class="header-left">
        <div class="header-logo-box">
          <img src="${logoSrc}" alt="Capsule Company">
        </div>
        <div class="header-brand">
          <span class="header-brand-title" style="color: #FFFFFF;">CAPSULE COMPANY</span>
          <span class="header-brand-sub">YOUR SPACE MAKER</span>
        </div>
      </div>
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 9.5px; color: #CE7F53; letter-spacing: 0.16em; text-transform: uppercase;">
        STUDIO PRESENCE • BENGALURU
      </div>
    </div>

    <div class="contact-body">
      <div class="contact-eyebrow">DIRECT CONSULTATION & IN-PERSON EXPERIENCE</div>
      <h2 class="contact-title">Visit Our Bengaluru Design Studio</h2>
      <p class="contact-desc">
        Experience our complete range of natural open-pore matte sealers, Italian polyester mirror finishes, traditional French spirit polishes, and bespoke architectural woodwork in person. Schedule a dedicated material consultation with our design and execution team.
      </p>

      <div class="contact-details-grid">
        <div class="contact-card">
          <div class="contact-card-label">DIRECT STUDIO HOTLINE</div>
          <div class="contact-card-val">9187924723</div>
          <div class="contact-card-sub">Mon - Sat: 9:30 AM to 8:30 PM</div>
        </div>

        <div class="contact-card">
          <div class="contact-card-label">OFFICIAL CORRESPONDENCE</div>
          <div class="contact-card-val">info@capsuleinteriors.com</div>
          <div class="contact-card-sub">Turnkey Estimates & Technical Inquiries</div>
        </div>

        <div class="contact-card full-width">
          <div class="contact-card-label">EXPERIENCE CENTER & OFFICE</div>
          <div class="contact-card-val">SLV Complex, 17/3, Outer Ring Rd, Kariyana Layout, Hebbal Kempapura, Bengaluru, Karnataka 560024</div>
          <div class="contact-card-sub">Complimentary Parking & Live Material Gallery</div>
        </div>
      </div>
    </div>

    <footer class="contact-footer">
      <div>CAPSULE COMPANY • YOUR SPACE MAKER • BENGALURU</div>
      <div>PAGE ${totalPages} / ${totalPages}</div>
    </footer>
  </div>

</body>
</html>
`;

async function buildPdf() {
  const htmlPath = path.join(__dirname, 'wooden-polish-catalogue-template.html');
  fs.writeFileSync(htmlPath, htmlContent);
  console.log(`Saved template HTML to ${htmlPath} (${(htmlContent.length / (1024 * 1024)).toFixed(2)} MB)`);

  console.log('Launching browser with Puppeteer...');
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-web-security',
      '--allow-file-access-from-files'
    ]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 1600, deviceScaleFactor: 2 });

  console.log('Setting HTML content in page...');
  await page.setContent(htmlContent, { waitUntil: 'load' });
  await page.evaluateHandle('document.fonts.ready');
  console.log('Fonts loaded.');

  // Preserve original high-resolution user uploaded cover reference
  const userCoverSrc = 'C:\\\\Users\\\\Yashwanth Gowda\\\\.gemini\\\\antigravity-ide\\\\brain\\\\d554d34f-276c-435e-8a61-8ce1ff2ca5f3\\\\.user_uploaded\\\\media_1791042171847.jpg';
  const coversDir = path.join(__dirname, '..', 'public', 'covers');
  const rootCoversDir = path.join(__dirname, '..', 'covers');
  if (fs.existsSync(userCoverSrc)) {
    fs.copyFileSync(userCoverSrc, path.join(coversDir, 'wooden-polish-cover-reference.jpg'));
    fs.copyFileSync(userCoverSrc, path.join(rootCoversDir, 'wooden-polish-cover-reference.jpg'));
    console.log('Preserved high-resolution cover reference.');
  }

  console.log(`Rendering ${totalPages}-page A4 PDF...`);
  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: false,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });

  const outPdfRoot = path.join(__dirname, '..', 'Capsule_Company_Wooden_Polish_Catalogue.pdf');
  const outPdfPublic = path.join(__dirname, '..', 'public', 'Capsule_Company_Wooden_Polish_Catalogue.pdf');

  fs.writeFileSync(outPdfRoot, pdfBuffer);
  fs.writeFileSync(outPdfPublic, pdfBuffer);

  console.log(`PDF built successfully! Size: ${(pdfBuffer.length / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Saved to ${outPdfRoot} and copied to ${outPdfPublic}`);

  // Take sample page previews for verification
  const scratchDir = path.join(__dirname, '..', 'scratch');
  const pages = await page.$$('.a4-page');
  if (pages.length >= totalPages) {
    await pages[0].screenshot({ path: path.join(scratchDir, 'wpl_preview_p01_cover.jpg'), type: 'jpeg', quality: 85 });
    await pages[1].screenshot({ path: path.join(scratchDir, 'wpl_preview_p02_model1.jpg'), type: 'jpeg', quality: 85 });
    await pages[10].screenshot({ path: path.join(scratchDir, 'wpl_preview_p11_door_cleaned.jpg'), type: 'jpeg', quality: 85 });
    await pages[totalPages - 1].screenshot({ path: path.join(scratchDir, 'wpl_preview_contact.jpg'), type: 'jpeg', quality: 85 });
    console.log('Saved previews to scratch/');
  }

  await browser.close();
  console.log('Done!');
}

buildPdf().catch(err => {
  console.error('PDF Build error:', err);
  process.exit(1);
});
