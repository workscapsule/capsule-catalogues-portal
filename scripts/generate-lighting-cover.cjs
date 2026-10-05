const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function generateCover() {
  const logoPath = path.join(__dirname, '..', 'public', 'logo.png');
  const logoB64 = fs.readFileSync(logoPath).toString('base64');
  const logoSrc = `data:image/png;base64,${logoB64}`;

  // Read images for the cover
  const heroPath = path.join(__dirname, '..', 'public', 'assets', 'lighting-fixtures', 'lighting-25.jpg');
  const heroB64 = fs.readFileSync(heroPath).toString('base64');
  const heroSrc = `data:image/jpeg;base64,${heroB64}`;

  const thumb1 = `data:image/jpeg;base64,${fs.readFileSync(path.join(__dirname, '..', 'public', 'assets', 'lighting-fixtures', 'lighting-01.jpg')).toString('base64')}`;
  const thumb2 = `data:image/jpeg;base64,${fs.readFileSync(path.join(__dirname, '..', 'public', 'assets', 'lighting-fixtures', 'lighting-19.jpg')).toString('base64')}`;
  const thumb3 = `data:image/jpeg;base64,${fs.readFileSync(path.join(__dirname, '..', 'public', 'assets', 'lighting-fixtures', 'lighting-37.jpg')).toString('base64')}`;
  const thumb4 = `data:image/jpeg;base64,${fs.readFileSync(path.join(__dirname, '..', 'public', 'assets', 'lighting-fixtures', 'lighting-43.jpg')).toString('base64')}`;

  const coverHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Lighting & Fixtures Cover</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap');

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      width: 1240px;
      height: 1754px;
      overflow: hidden;
      background: #FDFBF7;
      font-family: 'Plus Jakarta Sans', sans-serif;
      position: relative;
    }

    /* Left Editorial Column */
    .left-col {
      position: absolute;
      left: 0;
      top: 0;
      width: 530px;
      height: 1754px;
      background: #F9F6F0;
      padding: 70px 55px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      z-index: 2;
      border-right: 1px solid #E6DCD2;
    }

    .brand-block {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .brand-logo-box {
      width: 64px;
      height: 64px;
      background: #FFFFFF;
      border: 1px solid #D9CEBE;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.04);
    }
    .brand-logo-box img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .brand-title {
      font-size: 15px;
      font-weight: 800;
      letter-spacing: 0.22em;
      color: #12100E;
      text-transform: uppercase;
    }
    .brand-sub {
      font-size: 9.5px;
      font-weight: 700;
      letter-spacing: 0.24em;
      color: #B86D43;
      text-transform: uppercase;
      margin-top: 2px;
    }

    .meta-tag {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      font-weight: 700;
      letter-spacing: 0.22em;
      color: #8C7E74;
      text-transform: uppercase;
      margin-top: 40px;
      margin-bottom: 12px;
    }

    .title-block h1 {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 48px;
      font-weight: 700;
      line-height: 1.08;
      color: #12100E;
      text-transform: uppercase;
      letter-spacing: -0.01em;
    }
    .title-block h1 span.gold {
      color: #B86D43;
      font-style: italic;
      font-weight: 400;
      text-transform: capitalize;
    }
    .title-block .cat-tagline {
      font-size: 15px;
      font-weight: 700;
      letter-spacing: 0.16em;
      color: #403B36;
      text-transform: uppercase;
      margin-top: 14px;
      margin-bottom: 24px;
    }

    .curated-count-badge {
      display: inline-block;
      font-family: 'JetBrains Mono', monospace;
      font-size: 10.5px;
      font-weight: 700;
      color: #B86D43;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      padding: 6px 14px;
      background: rgba(184, 109, 67, 0.1);
      border-left: 3px solid #B86D43;
      margin-bottom: 35px;
    }

    .feature-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-bottom: 40px;
    }
    .feature-item {
      display: flex;
      align-items: center;
      gap: 14px;
    }
    .feature-icon-circle {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: #FFFFFF;
      border: 1px solid #E0D4C5;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #B86D43;
      font-size: 15px;
      flex-shrink: 0;
      box-shadow: 0 2px 6px rgba(0,0,0,0.03);
    }
    .feature-text {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #2D2722;
    }
    .feature-sub {
      font-size: 9px;
      font-weight: 500;
      color: #8C7E74;
      text-transform: none;
      letter-spacing: normal;
      margin-top: 2px;
    }

    .quote-footer {
      border-top: 1px solid #E6DCD2;
      padding-top: 24px;
    }
    .quote-script {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      font-size: 20px;
      color: #B86D43;
      line-height: 1.25;
      margin-bottom: 6px;
    }
    .quote-author {
      font-size: 9.5px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #8C7E74;
      font-family: 'JetBrains Mono', monospace;
    }

    /* Right Visual Showcase */
    .right-col {
      position: absolute;
      right: 0;
      top: 0;
      width: 710px;
      height: 1754px;
      background: #FFFFFF;
    }
    .hero-photo-wrap {
      width: 100%;
      height: 1300px;
      position: relative;
      overflow: hidden;
    }
    .hero-photo-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .hero-overlay-tag {
      position: absolute;
      top: 40px;
      right: 40px;
      background: rgba(18, 16, 14, 0.85);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(184, 109, 67, 0.4);
      color: #FFFFFF;
      padding: 8px 18px;
      border-radius: 4px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 9.5px;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
    }

    /* Bottom 4-Thumbnail Strip */
    .thumbs-strip {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 454px;
      background: #12100E;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
      padding: 24px;
      border-top: 2px solid #B86D43;
    }
    .thumb-card {
      position: relative;
      border-radius: 6px;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.15);
      background: #000;
    }
    .thumb-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.9;
    }
    .thumb-label {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(180deg, transparent, rgba(0,0,0,0.85));
      padding: 8px 10px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 8.5px;
      font-weight: 700;
      color: #FFFFFF;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
  </style>
</head>
<body>

  <!-- Left Editorial Column -->
  <div class="left-col">
    <div>
      <div class="brand-block">
        <div class="brand-logo-box">
          <img src="${logoSrc}" alt="Capsule Company">
        </div>
        <div>
          <div class="brand-title">CAPSULE COMPANY</div>
          <div class="brand-sub">YOUR SPACE MAKER</div>
        </div>
      </div>

      <div class="meta-tag">ARCHITECTURAL ILLUMINATION • 2026</div>

      <div class="title-block">
        <h1>LIGHTING<br>& FIXTURES<br><span class="gold">Collection</span></h1>
        <div class="cat-tagline">Profile Lights • Chandeliers • Outdoor</div>
      </div>

      <div class="curated-count-badge">48 CURATED ARCHITECTURAL FIXTURES</div>

      <div class="feature-list">
        <div class="feature-item">
          <div class="feature-icon-circle">❖</div>
          <div>
            <div class="feature-text">ARCHITECTURAL PROFILE LIGHTS</div>
            <div class="feature-sub">Seamless recessed, magnetic & suspended linear systems</div>
          </div>
        </div>

        <div class="feature-item">
          <div class="feature-icon-circle">◈</div>
          <div>
            <div class="feature-text">STATEMENT CHANDELIERS & PENDANTS</div>
            <div class="feature-sub">Faceted K9 crystals, champagne gold rings & sculptures</div>
          </div>
        </div>

        <div class="feature-item">
          <div class="feature-icon-circle">✦</div>
          <div>
            <div class="feature-text">OUTDOOR & LANDSCAPE LIGHTS</div>
            <div class="feature-sub">IP65+ sealed facade up-down sconces, bollards & spikes</div>
          </div>
        </div>

        <div class="feature-item">
          <div class="feature-icon-circle">◆</div>
          <div>
            <div class="feature-text">PRECISION CRI 90+ OPTICS</div>
            <div class="feature-sub">Glare-free honeycomb diffusion & warm CCT dimming</div>
          </div>
        </div>
      </div>
    </div>

    <div class="quote-footer">
      <div class="quote-script">"Sculpting Spaces with Light,<br>Defining Architectural Emotion."</div>
      <div class="quote-author">CAPSULE COMPANY • BENGALURU</div>
    </div>
  </div>

  <!-- Right Visual Showcase -->
  <div class="right-col">
    <div class="hero-photo-wrap">
      <img src="${heroSrc}" alt="Hero Chandelier Showcase">
      <div class="hero-overlay-tag">PROFILE • CHANDELIER • OUTDOOR</div>
    </div>

    <!-- 4 Thumbnail Previews -->
    <div class="thumbs-strip">
      <div class="thumb-card">
        <img src="${thumb1}" alt="Profile Light">
        <div class="thumb-label">PROFILE</div>
      </div>
      <div class="thumb-card">
        <img src="${thumb2}" alt="Chandelier">
        <div class="thumb-label">CHANDELIER</div>
      </div>
      <div class="thumb-card">
        <img src="${thumb3}" alt="Statement Pendant">
        <div class="thumb-label">STATEMENT</div>
      </div>
      <div class="thumb-card">
        <img src="${thumb4}" alt="Outdoor Light">
        <div class="thumb-label">OUTDOOR</div>
      </div>
    </div>
  </div>

</body>
</html>
`;

  console.log('Rendering high-res cover artwork for Lighting...');
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1240, height: 1754, deviceScaleFactor: 2 });
  await page.setContent(coverHtml, { waitUntil: 'load', timeout: 60000 });
  await page.evaluateHandle('document.fonts.ready');

  const coversDir = path.join(__dirname, '..', 'public', 'covers');
  const rootCoversDir = path.join(__dirname, '..', 'covers');
  if (!fs.existsSync(coversDir)) fs.mkdirSync(coversDir, { recursive: true });
  if (!fs.existsSync(rootCoversDir)) fs.mkdirSync(rootCoversDir, { recursive: true });

  const coverOutPublic = path.join(coversDir, 'lighting-design-cover-reference.jpg');
  const coverOutRoot = path.join(rootCoversDir, 'lighting-design-cover-reference.jpg');

  await page.screenshot({ path: coverOutPublic, type: 'jpeg', quality: 95 });
  fs.copyFileSync(coverOutPublic, coverOutRoot);

  console.log('Saved cover to', coverOutPublic, 'and', coverOutRoot);
  await browser.close();
}

generateCover().catch(console.error);
