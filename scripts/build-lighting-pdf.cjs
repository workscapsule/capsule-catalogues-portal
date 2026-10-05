const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const dataPath = path.join(__dirname, '..', 'public', 'assets', 'lighting-fixtures', 'lighting-fixtures-data.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const logoPath = path.join(__dirname, '..', 'public', 'logo.png');
const logoBase64 = fs.readFileSync(logoPath).toString('base64');
const logoSrc = `data:image/png;base64,${logoBase64}`;

// Full-bleed Cover Reference
const coverPath = path.join(__dirname, '..', 'covers', 'lighting-design-cover-reference.jpg');
const coverBase64 = fs.readFileSync(coverPath).toString('base64');
const coverA4Src = `data:image/jpeg;base64,${coverBase64}`;

const items = data.orderedItems;
const totalPages = items.length + 2; // Cover + 49 Models + Contact Page = 51

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Capsule Company - Architectural Lighting Design Catalogue 2026</title>
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
      background-color: #2B241F;
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      color: #2D2722;
      -webkit-font-smoothing: antialiased;
      line-height: 1.5;
    }

    .a4-page {
      width: 210mm;
      height: 297mm;
      page-break-after: always;
      position: relative;
      background: #FFFFFF;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      padding: 13mm 14mm 11mm 14mm;
    }

    /* Cover Page */
    .cover-page {
      padding: 0 !important;
      background: #12100E;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .cover-page img {
      width: 210mm;
      height: 297mm;
      object-fit: cover;
      display: block;
    }

    /* Page Header - Exactly identical to UPVC */
    .header-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1.5px solid #B86D43;
      padding-bottom: 7px;
      margin-bottom: 8px;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .header-logo-box {
      width: 32px;
      height: 32px;
      background: #FFFFFF;
      border: 1px solid #D5C9BD;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px;
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
      font-size: 11.5px;
      font-weight: 800;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #12100E;
      line-height: 1.1;
    }
    .header-brand-sub {
      font-size: 7.5px;
      font-weight: 700;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: #B86D43;
      line-height: 1.1;
      margin-top: 1.5px;
    }

    .header-right {
      text-align: right;
    }
    .header-collection {
      font-size: 8.5px;
      font-weight: 700;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: #555555;
    }
    .header-category {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9.5px;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #B86D43;
      margin-top: 1px;
    }

    /* Model Information Block */
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
      font-size: 20px;
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
      font-size: 10px;
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
      font-size: 9px;
      line-height: 1.35;
      color: #2D2722;
      display: flex;
      align-items: baseline;
      gap: 6px;
    }
    .model-bullets-list li::before {
      content: '◆';
      font-size: 6.5px;
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
      image-rendering: -webkit-optimize-contrast;
      image-rendering: high-quality;
    }

    .image-meta-bar {
      height: 28px;
      background: #1C1815;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 14px;
      color: #FFFFFF;
      flex-shrink: 0;
      border-top: 1px solid rgba(184, 109, 67, 0.3);
    }
    .image-ref-badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: 8.5px;
      letter-spacing: 0.14em;
      color: #C0B7B0;
      text-transform: uppercase;
      font-weight: 600;
    }
    .image-ref-badge span.copper {
      color: #E29B6C;
      font-weight: 700;
    }
    .image-meta-text {
      font-size: 8px;
      letter-spacing: 0.1em;
      color: #A09489;
      text-transform: uppercase;
      font-weight: 500;
    }

    /* Footer Bar - Exactly identical to UPVC */
    .footer-bar {
      border-top: 1px solid #E5DDD3;
      padding-top: 6px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 8px;
      letter-spacing: 0.12em;
      color: #8C7E74;
      text-transform: uppercase;
      font-family: 'JetBrains Mono', monospace;
    }
    .footer-brand {
      color: #12100E;
      font-weight: 700;
    }
    .footer-page-num {
      color: #B86D43;
      font-weight: 700;
    }

    /* Contact Page */
    .contact-page {
      background: #12100E;
      color: #FFFFFF;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 22mm 20mm;
    }

    .contact-header {
      border-bottom: 1px solid rgba(184, 109, 67, 0.35);
      padding-bottom: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .contact-body {
      margin: auto 0;
    }
    .contact-eyebrow {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      letter-spacing: 0.22em;
      color: #CE7F53;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .contact-title {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 36px;
      font-weight: 700;
      color: #FFFFFF;
      line-height: 1.15;
      margin-bottom: 16px;
    }
    .contact-desc {
      font-size: 12px;
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
    <img src="${coverA4Src}" alt="Architectural Lighting & Fixtures Design Catalogue 2026 Cover">
  </div>

  <!-- ================= PAGES 2 to 50: 49 MODEL PAGES ================= -->
  ${items.map((item, idx) => {
    const pageNum = idx + 2;
    const pagePad = String(idx + 1).padStart(2, '0');
    const imgPath = path.join(__dirname, '..', 'public', 'assets', 'lighting-fixtures', item.fileName);
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
          <div class="header-collection">ARCHITECTURAL LIGHTING CATALOGUE</div>
          <div class="header-category">${item.category}</div>
        </div>
      </header>

      <!-- Model Specifications -->
      <div class="model-info-block">
        <div class="model-meta-row">
          <div class="model-title-wrap">
            <div class="model-pre-tag">ARCHITECTURAL ILLUMINATION • COLLECTION 2026</div>
            <h2 class="model-title">${item.title}</h2>
          </div>
          <div class="model-code-badge">CODE: ${item.refId || item.code}</div>
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
          <div class="image-ref-badge">DESIGN REF: <span class="copper">${item.refId || item.code}</span></div>
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

  <!-- ================= PAGE 51: STUDIO CONTACT PAGE ================= -->
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
        Experience our complete range of architectural profile lights, magnetic track systems, luxury crystal statement chandeliers, and IP65+ weather-sealed outdoor landscape fixtures in person. Schedule a dedicated lighting design and lux-level simulation consultation with our architectural lighting team.
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
          <div class="contact-card-sub">Turnkey Lighting Design & Architectural BOQ</div>
        </div>

        <div class="contact-card full-width">
          <div class="contact-card-label">EXPERIENCE CENTER & OFFICE</div>
          <div class="contact-card-val">SLV Complex, 17/3, Outer Ring Rd, Kariyana Layout, Hebbal Kempapura, Bengaluru, Karnataka 560024</div>
          <div class="contact-card-sub">Complimentary Parking & Live Architectural Lighting & Lux Simulation Gallery</div>
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
  const htmlPath = path.join(__dirname, 'lighting-catalogue-template.html');
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

  console.log(`Rendering ${totalPages}-page A4 PDF...`);
  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: false,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });

  const outPdfRoot = path.join(__dirname, '..', 'Capsule_Company_Lighting_Design_Catalogue.pdf');
  const outPdfPublic = path.join(__dirname, '..', 'public', 'Capsule_Company_Lighting_Design_Catalogue.pdf');

  fs.writeFileSync(outPdfRoot, pdfBuffer);
  fs.writeFileSync(outPdfPublic, pdfBuffer);

  console.log(`PDF built successfully! Size: ${(pdfBuffer.length / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Saved to ${outPdfRoot} and copied to ${outPdfPublic}`);

  // Take sample page previews for verification
  const scratchDir = path.join(__dirname, '..', 'scratch');
  const pages = await page.$$('.a4-page');
  if (pages.length >= totalPages) {
    await pages[0].screenshot({ path: path.join(scratchDir, 'lighting_preview_p01_cover.jpg'), type: 'jpeg', quality: 85 });
    await pages[1].screenshot({ path: path.join(scratchDir, 'lighting_preview_p02_profile.jpg'), type: 'jpeg', quality: 85 });
    await pages[15].screenshot({ path: path.join(scratchDir, 'lighting_preview_p16_chandelier.jpg'), type: 'jpeg', quality: 85 });
    await pages[40].screenshot({ path: path.join(scratchDir, 'lighting_preview_p41_outdoor.jpg'), type: 'jpeg', quality: 85 });
    await pages[totalPages - 1].screenshot({ path: path.join(scratchDir, 'lighting_preview_contact.jpg'), type: 'jpeg', quality: 85 });
    console.log('Saved previews to scratch/');
  }

  await browser.close();
  console.log('Done!');
}

buildPdf().catch(err => {
  console.error('PDF Build error:', err);
  process.exit(1);
});
