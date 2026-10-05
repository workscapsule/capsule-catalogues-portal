const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'public', 'assets', 'wall-panels', 'wall-panels-data.json'), 'utf8'));

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title>Wall Panel Design Catalogue 2026 – Capsule Company</title>
  <link rel="icon" type="image/png" href="/logo.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-warm: #F7F3ED;
      --bg-surface: #FFFFFF;
      --bg-cream: #EFE8DE;
      --bg-card: #FFFFFF;
      --text-dark: #12100E;
      --text-primary: #2B241F;
      --text-secondary: #6B5E54;
      --text-light: #9C8E84;
      --copper: #B86D43;
      --copper-bright: #CE7F53;
      --copper-light: #DFC0B0;
      --copper-border: rgba(184, 109, 67, 0.22);
      --copper-glow: rgba(184, 109, 67, 0.16);
      --border-subtle: #E6DFD5;
      --radius-xl: 18px;
      --radius-lg: 12px;
      --radius-md: 8px;
      --font-serif: 'Playfair Display', Georgia, serif;
      --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      background-color: var(--bg-warm);
      color: var(--text-primary);
      font-family: var(--font-sans);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }

    /* Top Sticky Brand Navigation Bar */
    .top-nav {
      position: sticky;
      top: 0;
      z-index: 100;
      background: rgba(247, 243, 237, 0.95);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid var(--border-subtle);
      padding: 0.85rem clamp(1rem, 3vw, 2.5rem);
    }
    .nav-inner {
      max-width: 1400px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }
    .brand-lockup {
      display: flex;
      align-items: center;
      gap: 0.85rem;
      text-decoration: none;
      color: inherit;
    }
    .brand-logo-frame {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      background: #FFFFFF;
      border: 1px solid var(--border-subtle);
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3px;
    }
    .brand-logo-frame img { width: 100%; height: 100%; object-fit: contain; }
    .brand-text-col { display: flex; flex-direction: column; }
    .brand-title {
      font-size: 0.98rem;
      font-weight: 800;
      letter-spacing: 0.12em;
      color: var(--text-dark);
      text-transform: uppercase;
      line-height: 1.15;
    }
    .brand-subtitle {
      font-size: 0.65rem;
      letter-spacing: 0.22em;
      color: var(--copper);
      font-weight: 700;
      text-transform: uppercase;
    }
    .nav-actions {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    .nav-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.5rem 1rem;
      border-radius: 9999px;
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      color: var(--text-dark);
      font-size: 0.82rem;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.2s ease;
      cursor: pointer;
    }
    .nav-btn:hover {
      border-color: var(--copper);
      color: var(--copper);
      transform: translateY(-1px);
    }
    .nav-btn.primary {
      background: var(--text-dark);
      color: #FFFFFF;
      border-color: var(--text-dark);
    }
    .nav-btn.primary:hover {
      background: var(--copper);
      border-color: var(--copper);
      color: #FFFFFF;
    }

    /* 1. EDITORIAL COVER SECTION */
    .catalogue-cover {
      max-width: 1400px;
      margin: 2rem auto 3rem;
      padding: clamp(2.5rem, 5vw, 4.5rem) clamp(1.25rem, 4vw, 3rem);
      background: #FFFFFF;
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-xl);
      box-shadow: 0 10px 40px rgba(43, 36, 31, 0.04);
      position: relative;
      overflow: hidden;
      text-align: center;
    }
    .cover-ornament {
      width: 76px;
      height: 76px;
      margin: 0 auto 1.5rem;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--copper-bright), #FFFFFF, var(--copper));
      padding: 2.5px;
      box-shadow: 0 10px 25px var(--copper-glow);
    }
    .cover-ornament-inner {
      width: 100%;
      height: 100%;
      background: #FFFFFF;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .cover-ornament-inner img { width: 85%; height: 85%; object-fit: contain; }
    .cover-eyebrow {
      font-size: 0.76rem;
      font-weight: 700;
      letter-spacing: 0.26em;
      text-transform: uppercase;
      color: var(--copper);
      margin-bottom: 0.75rem;
      display: block;
    }
    .cover-title {
      font-family: var(--font-serif);
      font-size: clamp(2.6rem, 6vw, 4.5rem);
      font-weight: 600;
      color: var(--text-dark);
      line-height: 1.12;
      letter-spacing: -0.01em;
      margin-bottom: 0.85rem;
      text-transform: uppercase;
    }
    .cover-title span.gold-italics {
      color: var(--copper);
      font-style: italic;
      font-weight: 400;
      text-transform: none;
      font-family: var(--font-serif);
    }
    .copper-rule {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      max-width: 320px;
      margin: 1.5rem auto;
    }
    .copper-rule::before, .copper-rule::after {
      content: '';
      flex: 1;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--copper-light), transparent);
    }
    .copper-diamond {
      width: 7px;
      height: 7px;
      background: var(--copper);
      transform: rotate(45deg);
    }
    .cover-specs-row {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      margin-top: 1.75rem;
      font-size: 0.82rem;
      font-weight: 600;
      color: var(--text-secondary);
      letter-spacing: 0.05em;
    }
    .cover-spec-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      background: var(--bg-warm);
      padding: 0.45rem 1rem;
      border-radius: 9999px;
      border: 1px solid var(--border-subtle);
    }

    /* 2. SECTION JUMP BAR & CONTROLS */
    .controls-wrapper {
      position: sticky;
      top: 65px;
      z-index: 90;
      background: rgba(247, 243, 237, 0.96);
      backdrop-filter: blur(14px);
      border-bottom: 1px solid var(--border-subtle);
      padding: 0.75rem clamp(1rem, 3vw, 2.5rem);
      margin-bottom: 2.5rem;
    }
    .controls-inner {
      max-width: 1400px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      overflow-x: auto;
      scrollbar-width: none;
    }
    .controls-inner::-webkit-scrollbar { display: none; }
    .section-pills {
      display: flex;
      align-items: center;
      gap: 0.45rem;
      flex-wrap: nowrap;
    }
    .section-pill {
      font-size: 0.76rem;
      font-weight: 600;
      padding: 0.4rem 0.85rem;
      border-radius: 9999px;
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      color: var(--text-secondary);
      text-decoration: none;
      white-space: nowrap;
      transition: all 0.2s ease;
    }
    .section-pill:hover, .section-pill.active {
      background: var(--copper);
      color: #FFFFFF;
      border-color: var(--copper);
    }

    /* 3. MAIN CATALOGUE SECTIONS */
    .catalogue-container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 clamp(1rem, 3vw, 2.5rem) 5rem;
    }

    .catalogue-section {
      margin-bottom: 4.5rem;
      scroll-margin-top: 130px;
    }

    .section-header-banner {
      background: #FFFFFF;
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-lg);
      padding: 1.5rem clamp(1.25rem, 3vw, 2.25rem);
      margin-bottom: 1.75rem;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      border-left: 4px solid var(--copper);
      box-shadow: 0 4px 18px rgba(0,0,0,0.02);
    }
    @media (min-width: 768px) {
      .section-header-banner {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
    }
    .section-header-left {
      max-width: 800px;
    }
    .section-code-tag {
      font-size: 0.72rem;
      font-weight: 800;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--copper);
      display: inline-block;
      margin-bottom: 0.25rem;
    }
    .section-title {
      font-family: var(--font-serif);
      font-size: clamp(1.4rem, 2.5vw, 1.85rem);
      font-weight: 600;
      color: var(--text-dark);
      letter-spacing: -0.01em;
      margin-bottom: 0.35rem;
    }
    .section-desc {
      font-size: 0.88rem;
      color: var(--text-secondary);
      line-height: 1.55;
    }
    .section-count-badge {
      font-size: 0.76rem;
      font-weight: 700;
      color: var(--text-dark);
      background: var(--bg-warm);
      padding: 0.4rem 0.9rem;
      border-radius: 9999px;
      border: 1px solid var(--border-subtle);
      white-space: nowrap;
      align-self: flex-start;
    }

    /* 4. DESIGN ITEMS GRID (5 COLUMNS / BALANCED) */
    .items-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 1.5rem;
    }
    @media (min-width: 580px) {
      .items-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (min-width: 960px) {
      .items-grid { grid-template-columns: repeat(3, 1fr); }
    }
    @media (min-width: 1260px) {
      .items-grid { grid-template-columns: repeat(5, 1fr); }
    }

    .design-card {
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-lg);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.02);
    }
    .design-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 16px 32px rgba(184, 109, 67, 0.12);
      border-color: var(--copper-border);
    }

    .card-image-wrap {
      position: relative;
      width: 100%;
      aspect-ratio: 3 / 4;
      background: #ECE5DC;
      overflow: hidden;
      cursor: pointer;
    }
    .card-image-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .design-card:hover .card-image-wrap img {
      transform: scale(1.05);
    }

    /* Floating Model Badge */
    .model-badge {
      position: absolute;
      top: 10px;
      left: 10px;
      z-index: 10;
      background: rgba(18, 16, 14, 0.88);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      color: #FFFFFF;
      font-size: 0.68rem;
      font-family: var(--font-sans);
      font-weight: 700;
      letter-spacing: 0.08em;
      padding: 3px 8px;
      border-radius: 6px;
      border: 1px solid rgba(255, 255, 255, 0.15);
    }

    .zoom-hint-badge {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 10;
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(6px);
      color: var(--text-dark);
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      opacity: 0;
      transform: scale(0.85);
      transition: all 0.25s ease;
    }
    .design-card:hover .zoom-hint-badge {
      opacity: 1;
      transform: scale(1);
    }

    .card-content {
      padding: 1.15rem;
      display: flex;
      flex-direction: column;
      flex: 1;
      background: #FFFFFF;
    }
    .card-finish-tag {
      font-size: 0.68rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--copper);
      margin-bottom: 0.3rem;
    }
    .card-title {
      font-family: var(--font-serif);
      font-size: 1.05rem;
      font-weight: 600;
      color: var(--text-dark);
      line-height: 1.25;
      margin-bottom: 0.45rem;
    }
    .card-app {
      font-size: 0.78rem;
      color: var(--text-secondary);
      line-height: 1.45;
      margin-bottom: 0.85rem;
      flex: 1;
    }
    .card-specs-row {
      font-size: 0.72rem;
      color: var(--text-light);
      border-top: 1px dashed var(--border-subtle);
      padding-top: 0.65rem;
      margin-bottom: 0.85rem;
      line-height: 1.35;
    }

    /* Pinterest Source Link Button */
    .pinterest-source-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.45rem;
      background: var(--bg-warm);
      border: 1px solid var(--border-subtle);
      color: var(--text-dark);
      text-decoration: none;
      font-size: 0.75rem;
      font-weight: 700;
      padding: 0.5rem 0.85rem;
      border-radius: 6px;
      transition: all 0.2s ease;
    }
    .pinterest-source-btn:hover {
      background: #E60023;
      color: #FFFFFF;
      border-color: #E60023;
      box-shadow: 0 4px 12px rgba(230, 0, 35, 0.2);
    }
    .pinterest-icon {
      width: 14px;
      height: 14px;
      fill: currentColor;
    }

    /* 5. LIGHTBOX MODAL */
    .lightbox-modal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(18, 16, 14, 0.94);
      backdrop-filter: blur(14px);
      z-index: 1000;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
      opacity: 0;
      transition: opacity 0.25s ease;
    }
    .lightbox-modal.open {
      display: flex;
      opacity: 1;
    }
    .lightbox-dialog {
      background: #FFFFFF;
      border-radius: var(--radius-lg);
      max-width: 1000px;
      width: 100%;
      max-height: 90vh;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      position: relative;
      box-shadow: 0 25px 60px rgba(0,0,0,0.4);
    }
    @media (min-width: 860px) {
      .lightbox-dialog {
        flex-direction: row;
      }
    }
    .lightbox-img-wrap {
      background: #111;
      flex: 1.3;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      position: relative;
    }
    .lightbox-img-wrap img {
      max-width: 100%;
      max-height: 80vh;
      object-fit: contain;
    }
    .lightbox-details {
      flex: 1;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      background: #FFFFFF;
      overflow-y: auto;
    }
    .lightbox-close-btn {
      position: absolute;
      top: 15px;
      right: 15px;
      z-index: 10;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(0,0,0,0.6);
      color: #FFFFFF;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 1.2rem;
      transition: background 0.2s;
    }
    .lightbox-close-btn:hover { background: #000; }

    /* Footer */
    footer {
      background: #151210;
      color: #D6CBC1;
      padding: 4rem clamp(1rem, 3vw, 2.5rem) 2.5rem;
      border-top: 1px solid rgba(184, 109, 67, 0.2);
    }
    .footer-inner {
      max-width: 1400px;
      margin: 0 auto;
      text-align: center;
    }

    /* Print Styles */
    @media print {
      .top-nav, .controls-wrapper, .pinterest-source-btn, .zoom-hint-badge { display: none !important; }
      body { background: #FFFFFF; color: #000000; }
      .catalogue-cover { break-after: page; box-shadow: none; border: none; margin: 0; padding: 4cm 2cm; }
      .catalogue-section { break-after: page; }
      .items-grid { grid-template-columns: repeat(5, 1fr) !important; gap: 8px !important; }
      .design-card { box-shadow: none !important; border: 1px solid #CCC !important; }
    }
  </style>
</head>
<body>

  <!-- Top Sticky Header -->
  <header class="top-nav">
    <div class="nav-inner">
      <a href="/capsule-catalogue-index.html" class="brand-lockup">
        <div class="brand-logo-frame">
          <img src="/logo.png" alt="Capsule Company Monogram">
        </div>
        <div class="brand-text-col">
          <span class="brand-title">CAPSULE COMPANY</span>
          <span class="brand-subtitle">SURFACE ARCHIVES 2026</span>
        </div>
      </a>

      <div class="nav-actions">
        <a href="/capsule-catalogue-index.html" class="nav-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m15 18-6-6 6-6"/></svg>
          <span>All Catalogues</span>
        </a>
        <button onclick="window.print()" class="nav-btn primary">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>
          <span>Print / Save PDF</span>
        </button>
      </div>
    </div>
  </header>

  <!-- Cover Page Section -->
  <header class="catalogue-cover">
    <div class="cover-ornament">
      <div class="cover-ornament-inner">
        <img src="/logo.png" alt="Capsule Company Official Monogram">
      </div>
    </div>

    <span class="cover-eyebrow">CAPSULE COMPANY • DESIGN LOOKBOOK</span>
    
    <h1 class="cover-title">
      WALL PANEL DESIGN <br>
      <span class="gold-italics">Collection 2026</span>
    </h1>

    <div class="copper-rule">
      <span class="copper-diamond"></span>
    </div>

    <p style="max-width: 780px; margin: 0 auto; color: var(--text-secondary); font-size: 1.05rem; line-height: 1.65;">
      A curated reference anthology of architectural wall surface treatments for bespoke residences and luxury apartments. Encompassing 12 distinct material families and exactly 60 visual design references sourced exclusively from Pinterest.
    </p>

    <div class="cover-specs-row">
      <span class="cover-spec-badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--copper)" stroke-width="2.5"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
        12 Wall-Panel Categories
      </span>
      <span class="cover-spec-badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--copper)" stroke-width="2.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
        60 Curated Visual Designs
      </span>
      <span class="cover-spec-badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--copper)" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
        Clean Interiors (No People, No Logos)
      </span>
      <span class="cover-spec-badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--copper)" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
        Preserved Pinterest Reference Links
      </span>
    </div>
  </header>

  <!-- Quick Category Navigator Bar -->
  <div class="controls-wrapper">
    <div class="controls-inner">
      <div class="section-pills">
        ${data.categories.map((c, i) => `
          <a href="#${c.id}" class="section-pill ${i === 0 ? 'active' : ''}">
            ${c.sectionNum}. ${c.name}
          </a>
        `).join('')}
      </div>
    </div>
  </div>

  <!-- Main Catalogue Presentation -->
  <main class="catalogue-container">
    ${data.categories.map(category => `
      <section class="catalogue-section" id="${category.id}">
        <!-- Section Header Editorial Banner -->
        <div class="section-header-banner">
          <div class="section-header-left">
            <span class="section-code-tag">${category.sectionCode}</span>
            <h2 class="section-title">${category.name}</h2>
            <p class="section-desc">${category.description}</p>
          </div>
          <span class="section-count-badge">5 Curated Designs</span>
        </div>

        <!-- 5 Curated Items Grid -->
        <div class="items-grid">
          ${category.items.map((item, index) => {
            const relImg = item.image.startsWith('/') ? item.image.slice(1) : item.image;
            return `
            <article class="design-card" data-ref="${item.refId}">
              <div class="card-image-wrap" onclick="openLightbox('${relImg}', '${item.refId}', '${item.name.replace(/'/g, "\\'")}', '${item.finish.replace(/'/g, "\\'")}', '${item.application.replace(/'/g, "\\'")}', '${item.specs.replace(/'/g, "\\'")}', '${item.pinterestUrl}')">
                <span class="model-badge">${item.refId}</span>
                <img src="${relImg}" alt="${item.name} - ${item.category}" loading="lazy">
                <div class="zoom-hint-badge" title="Enlarge View">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>
                </div>
              </div>
              <div class="card-content">
                <span class="card-finish-tag">${item.finish}</span>
                <h3 class="card-title">${item.name}</h3>
                <p class="card-app">${item.application}</p>
                <div class="card-specs-row">${item.specs}</div>
                <a href="${item.pinterestUrl}" target="_blank" rel="noopener noreferrer" class="pinterest-source-btn" title="View original Pinterest inspiration pin">
                  <svg class="pinterest-icon" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.365-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
                  <span>Pinterest Reference</span>
                </a>
              </div>
            </article>
            `;
          }).join('')}
        </div>
      </section>
    `).join('')}
  </main>

  <!-- Lightbox Modal -->
  <div class="lightbox-modal" id="lightboxModal" onclick="closeLightbox(event)">
    <div class="lightbox-dialog" onclick="event.stopPropagation()">
      <button class="lightbox-close-btn" onclick="closeLightbox(event)">✕</button>
      <div class="lightbox-img-wrap">
        <img id="lightboxImg" src="" alt="Enlarged Wall Panel Design">
      </div>
      <div class="lightbox-details">
        <span id="lightboxRef" style="font-size: 0.72rem; font-weight: 800; letter-spacing: 0.2em; color: var(--copper); margin-bottom: 0.5rem; text-transform: uppercase;"></span>
        <h2 id="lightboxTitle" style="font-family: var(--font-serif); font-size: 1.6rem; color: var(--text-dark); margin-bottom: 0.75rem; line-height: 1.25;"></h2>
        <div style="margin-bottom: 1.25rem;">
          <strong style="font-size: 0.76rem; text-transform: uppercase; color: var(--text-light); letter-spacing: 0.1em; display: block; margin-bottom: 4px;">Material & Finish:</strong>
          <p id="lightboxFinish" style="font-size: 0.92rem; color: var(--text-primary);"></p>
        </div>
        <div style="margin-bottom: 1.25rem;">
          <strong style="font-size: 0.76rem; text-transform: uppercase; color: var(--text-light); letter-spacing: 0.1em; display: block; margin-bottom: 4px;">Recommended Application:</strong>
          <p id="lightboxApp" style="font-size: 0.92rem; color: var(--text-secondary);"></p>
        </div>
        <div style="margin-bottom: 1.5rem;">
          <strong style="font-size: 0.76rem; text-transform: uppercase; color: var(--text-light); letter-spacing: 0.1em; display: block; margin-bottom: 4px;">Architectural Specs:</strong>
          <p id="lightboxSpecs" style="font-size: 0.85rem; color: var(--text-secondary); background: var(--bg-warm); padding: 0.75rem; border-radius: 6px; border: 1px solid var(--border-subtle);"></p>
        </div>
        <div style="margin-top: auto; display: flex; gap: 0.75rem;">
          <a id="lightboxPinLink" href="#" target="_blank" rel="noopener noreferrer" class="pinterest-source-btn" style="flex: 1; padding: 0.75rem;">
            <svg class="pinterest-icon" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.365-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
            <span>Open Original Pinterest Pin</span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer>
    <div class="footer-inner">
      <div style="font-family: var(--font-serif); font-size: 1.4rem; color: #FFFFFF; margin-bottom: 0.5rem;">CAPSULE COMPANY</div>
      <p style="font-size: 0.85rem; color: #9C8E84; max-width: 600px; margin: 0 auto 1.5rem;">
        Bespoke Architectural Archives • Wall Panel Design Lookbook 2026. Exactly 60 photographic references across 12 signature categories.
      </p>
      <div style="font-size: 0.78rem; color: #6B5E54;">
        © 2026 Capsule Company. All visual reference rights belong to their respective Pinterest creators & original project architects.
      </div>
    </div>
  </footer>

  <script>
    function openLightbox(imgSrc, ref, title, finish, app, specs, pinUrl) {
      document.getElementById('lightboxImg').src = imgSrc;
      document.getElementById('lightboxRef').innerText = 'REF: ' + ref;
      document.getElementById('lightboxTitle').innerText = title;
      document.getElementById('lightboxFinish').innerText = finish;
      document.getElementById('lightboxApp').innerText = app;
      document.getElementById('lightboxSpecs').innerText = specs;
      document.getElementById('lightboxPinLink').href = pinUrl;
      const modal = document.getElementById('lightboxModal');
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox(e) {
      const modal = document.getElementById('lightboxModal');
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });

    // Update active pill on scroll
    window.addEventListener('scroll', () => {
      const sections = document.querySelectorAll('.catalogue-section');
      const pills = document.querySelectorAll('.section-pill');
      let currentId = '';
      sections.forEach(sec => {
        const top = sec.offsetTop - 160;
        if (window.scrollY >= top) currentId = sec.id;
      });
      pills.forEach(p => {
        if (p.getAttribute('href') === '#' + currentId) {
          p.classList.add('active');
        } else {
          p.classList.remove('active');
        }
      });
    });
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, '..', 'public', 'wall-panel-catalogue.html'), html);
console.log('Saved public/wall-panel-catalogue.html successfully!');
