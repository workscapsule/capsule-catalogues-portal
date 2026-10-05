import React from 'react';
import { modularKitchenLuxuryData } from '../../data/modularKitchenLuxuryData';

export const KitchenBrandIntroPage: React.FC = () => {
  const { brand, tagline } = modularKitchenLuxuryData;
  const companyName = brand;
  const intro = (modularKitchenLuxuryData as any).intro || {
    heading: 'Architectural Kitchen Joinery Crafted for Modern Bengaluru Homes',
    description:
      'Capsule Modular Kitchens unite bespoke craftsmanship with European hardware engineering. Every kitchen module is precision-manufactured with moisture-resistant marine substrates and custom ergonomics tailored to your culinary workflow.',
    pillars: [
      { title: 'BWP Marine Grade Core', desc: 'Boiling waterproof plywood substrate engineered to withstand high humidity and tropical moisture.' },
      { title: 'European Motion Hardware', desc: 'Blum soft-closing tandem runners, lift-up aventos systems, and integrated dampeners.' },
      { title: 'Seamless Ergonomic Workflow', desc: 'Strict adherence to the kitchen work triangle: optimal transition between hob, sink, and cooling.' },
      { title: 'Custom Architectural Finishes', desc: 'Anti-fingerprint matte acrylics, high-gloss UV lacquers, natural wood veneers, and fluted glass.' },
      { title: 'Built-in Illumination', desc: 'Recessed 2700K warm LED strips with concealed sensors, illuminating worktops and interior vitrines.' },
    ],
  };

  return (
    <div
      id="kitchen-brand-intro"
      className="catalogue-page kitchen-magazine-page relative bg-[#FBF8F5] text-[#1A1A1A] flex flex-col justify-between p-8 sm:p-14 select-none border border-neutral-200/80 shadow-sm print:border-none print:shadow-none mx-auto"
      style={{
        width: '210mm',
        height: '297mm',
        minHeight: '297mm',
        maxHeight: '297mm',
        boxSizing: 'border-box',
      }}
    >
      {/* Top Header */}
      <header className="flex items-center justify-between pb-4 border-b border-neutral-300/80">
        <div className="flex items-center gap-3">
          <div className="h-14 w-14 bg-white rounded p-1 flex items-center justify-center border border-neutral-200 shadow-xs">
            <img
              src="/assets/logo.jpeg"
              alt="Capsule Logo"
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <span className="block text-xs uppercase tracking-[0.24em] font-bold text-neutral-900">
              {companyName}
            </span>
            <span className="block text-[10px] tracking-[0.2em] text-[#C59A6F] uppercase font-medium">
              {tagline}
            </span>
          </div>
        </div>

        <div className="text-right">
          <span className="text-[11px] font-mono tracking-widest text-neutral-500 uppercase font-semibold">
            BRAND INTRODUCTION
          </span>
        </div>
      </header>

      {/* Main Editorial Content Grid */}
      <main className="my-auto py-4 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Column: Brand Philosophy & 5 Pillars */}
        <div className="md:col-span-6 flex flex-col justify-center">
          <span className="text-[11px] font-mono tracking-widest text-[#C59A6F] uppercase font-bold mb-2">
            CAPSULE ARCHITECTURAL JOINERY
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-neutral-900 leading-tight">
            {intro.heading}
          </h2>

          <p className="mt-4 text-xs sm:text-[12.5px] leading-relaxed text-neutral-700 font-normal">
            {intro.description}
          </p>

          {/* 5 Core Pillars */}
          <div className="mt-6 pt-5 border-t border-neutral-300/80 space-y-3">
            {intro.pillars.map((pillar: { title: string; desc: string }, idx: number) => (
              <div key={pillar.title} className="flex items-start gap-2.5">
                <span className="text-[#C59A6F] font-mono font-bold text-xs mt-0.5 shrink-0">
                  0{idx + 1}.
                </span>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 inline">
                    {pillar.title}:
                  </h4>
                  <span className="text-[11px] text-neutral-600 ml-1.5 leading-relaxed">
                    {pillar.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Premium Kitchen Feature Photography */}
        <div className="md:col-span-6 flex flex-col items-center">
          <div className="w-full aspect-[4/5] rounded-sm overflow-hidden border border-neutral-300 shadow-md relative group">
            <img
              src="/assets/catalogues/kitchen/final/island-02.jpg"
              alt="Capsule Modular Kitchen Craftsmanship"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent p-4 text-white">
              <p className="text-xs font-semibold tracking-wider uppercase font-display text-[#F3D7B5]">
                Precision Craftsmanship
              </p>
              <p className="text-[10px] text-white/90 tracking-wide font-light mt-0.5">
                Engineered with European tandem hardware, acoustic dampeners, and anti-fingerprint surfaces
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-between pt-4 border-t border-neutral-300/80 text-xs">
        <div className="text-neutral-500 font-medium text-[11px] tracking-wider uppercase">
          CAPSULE INTERIORS • MODULAR KITCHEN CATALOGUE
        </div>
        <div className="font-bold font-mono tracking-widest text-neutral-900 text-xs">
          PAGE 02 / 44
        </div>
      </footer>
    </div>
  );
};

export default KitchenBrandIntroPage;
