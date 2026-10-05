import React from 'react';
import { WardrobeModel, wardrobeLuxuryData } from '../../data/wardrobeLuxuryData';

interface WardrobeItemPageProps {
  item?: WardrobeModel;
}

export const defaultSampleWardrobe: WardrobeModel = wardrobeLuxuryData[0];

export const WardrobeItemPage: React.FC<WardrobeItemPageProps> = ({ item = defaultSampleWardrobe }) => {
  const modelHighlights = item?.highlights || [
    'Modern design',
    'Elegant finish',
    'Smart storage',
    'Space-efficient layout',
    'Contemporary look',
  ];

  return (
    <article
      id={`wardrobe-item-page-${item?.number || 1}`}
      className="catalogue-page wardrobe-magazine-page relative bg-[#FDFBF7] text-[#1A1A1A] flex flex-col justify-between p-9 sm:p-10 select-none border border-neutral-200/90 shadow-md print:border-none print:shadow-none overflow-hidden mx-auto"
      style={{
        width: '210mm',
        height: '297mm',
        minHeight: '297mm',
        maxHeight: '297mm',
        boxSizing: 'border-box',
      }}
    >
      {/* 1. TOP HEADER: CAPSULE LOGO, BRAND IDENTITY & VARIANT */}
      <header className="flex-none pb-3.5 border-b border-neutral-300/80">
        <div className="flex items-center justify-between">
          {/* Left: Capsule Logo & Slogan */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-white rounded p-1 flex items-center justify-center border border-neutral-200 shadow-2xs">
              <img
                src="/assets/logo.jpeg"
                alt="Capsule Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <span className="block text-xs uppercase tracking-[0.24em] font-extrabold text-neutral-900 font-display">
                CAPSULE INTERIORS
              </span>
              <span className="block text-[9px] tracking-[0.2em] text-[#A3704C] uppercase font-semibold">
                Your Space Maker
              </span>
            </div>
          </div>

          {/* Right: Category & Design Variant */}
          <div className="text-right">
            <div className="text-[9.5px] font-mono tracking-[0.22em] text-neutral-400 uppercase font-semibold">
              WARDROBE CATALOGUE
            </div>
            <div className="text-[13px] font-bold uppercase tracking-wider text-[#A3704C] font-display mt-0.5">
              {item.variant}
            </div>
          </div>
        </div>
      </header>

      {/* 2. TOP EDITORIAL SECTION: MODEL NAME, DESCRIPTION & DESIGN HIGHLIGHTS */}
      <section className="flex-none pt-4 pb-2 space-y-3">
        {/* Row 1: Model Title & Code Badge */}
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono font-bold tracking-[0.24em] text-[#A3704C] uppercase">
                WARDROBE DESIGN
              </span>
              <span className="text-neutral-300">•</span>
              <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                COLLECTION 2026
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-[2.65rem] font-black uppercase tracking-tight text-neutral-900 leading-none">
              {item.modelName}
            </h1>
          </div>

          <div className="text-right flex-none">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-neutral-900 text-white font-mono text-[11px] font-bold tracking-wider shadow-2xs">
              <span className="text-neutral-400">CODE:</span>
              <span className="text-amber-300 font-extrabold">{item.modelCode}</span>
            </div>
          </div>
        </div>

        {/* Row 2: Short Description (Concise 1–2 lines) */}
        <p className="text-[13px] leading-relaxed text-neutral-700 font-normal max-w-4xl">
          {item.description}
        </p>

        {/* Row 3: DESIGN HIGHLIGHTS (Single vertical column directly above main design image) */}
        <div className="pt-2 pb-1 border-t border-neutral-200/90">
          <div className="mb-2">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-900 font-display flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A3704C]" />
              <span>DESIGN HIGHLIGHTS:</span>
            </h2>
          </div>

          <ul className="space-y-1.5 text-[12px] text-neutral-700">
            {modelHighlights.map((highlight: string, idx: number) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#A3704C] font-bold text-sm leading-none mt-0.5">•</span>
                <span className="leading-snug">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. MAIN DESIGN IMAGE WITH CLEAR FRAME (Prominent Placement) */}
      <section className="flex-1 min-h-0 flex flex-col justify-between py-2">
        <div className="w-full flex-1 bg-white rounded-sm p-3 border-2 border-neutral-300/90 shadow-sm flex items-center justify-center min-h-[460px]">
          <div className="w-full h-full bg-[#F6F4EE] rounded-xs overflow-hidden flex items-center justify-center relative">
            <img
              src={item.image}
              alt={`${item.modelName} - ${item.modelCode} - Capsule Wardrobe`}
              className="w-full h-full object-contain object-center"
              loading="eager"
            />
          </div>
        </div>

        {/* Under-Image Bar: Model Unique Code & Tagline */}
        <div className="flex-none mt-3 flex items-center justify-between px-1">
          {/* Left: Model Unique Code */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-neutral-900 text-white font-mono text-[11px] font-bold tracking-wider shadow-2xs">
            <span className="text-neutral-400">DESIGN REF:</span>
            <span className="text-amber-300 font-extrabold">{item.modelCode}</span>
          </div>

          {/* Right: Design Tagline */}
          <div className="text-[13px] font-medium tracking-wide text-neutral-800 italic">
            {item.tagline}
          </div>
        </div>
      </section>

      {/* 4. BOTTOM FOOTER BAR */}
      <footer className="flex-none pt-3 border-t border-neutral-300/80">
        <div className="flex items-center justify-between">
          {/* Left: Capsule Interiors Branding */}
          <div className="text-neutral-600 font-semibold tracking-wider text-[11px] uppercase flex items-center gap-2">
            <span className="font-extrabold text-neutral-900">CAPSULE INTERIORS</span>
            <span className="text-neutral-300">•</span>
            <span className="text-[#A3704C] font-semibold">YOUR SPACE MAKER</span>
            <span className="text-neutral-300">•</span>
            <span className="text-neutral-400 font-normal">BANGALORE</span>
          </div>

          {/* Right: Sequential Page Number */}
          <div className="font-mono font-bold tracking-widest text-neutral-900 text-sm flex items-center gap-1.5">
            <span className="text-neutral-400 text-xs font-normal">PAGE</span>
            <span className="text-neutral-900 px-2.5 py-0.5 rounded bg-neutral-200/70 border border-neutral-300 font-bold">
              {item.pageNumber}
            </span>
          </div>
        </div>
      </footer>
    </article>
  );
};

export default WardrobeItemPage;
