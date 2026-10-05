import React from 'react';
import { templeDesignLuxuryData } from '../../data/templeDesignLuxuryData';

export const TempleBrandIntroPage: React.FC = () => {
  const { intro, companyName, tagline } = templeDesignLuxuryData;

  return (
    <div className="catalogue-page temple-magazine-page relative bg-[#FBF8F5] text-[#1A1A1A] flex flex-col justify-between p-8 sm:p-14 select-none border border-neutral-200/80 shadow-sm print:border-none print:shadow-none">
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
            <span className="block text-[10px] tracking-[0.2em] text-brand-copper uppercase font-medium">
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
      <main className="my-auto py-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Column: Sacred Architecture Philosophy */}
        <div className="md:col-span-6 flex flex-col justify-center">
          <span className="text-[11px] font-mono tracking-widest text-brand-copper uppercase font-bold mb-2">
            SACRED ARCHITECTURE & JOINERY
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-neutral-900 leading-tight">
            {intro.heading}
          </h2>

          <p className="mt-4 text-xs sm:text-[13px] leading-relaxed text-neutral-700 font-normal">
            {intro.description}
          </p>

          {/* 3 Core Pillars */}
          <div className="mt-6 pt-5 border-t border-neutral-300/80 space-y-3">
            {intro.pillars.map((pillar, idx) => (
              <div key={pillar.title} className="flex items-start gap-2.5">
                <span className="text-brand-copper font-mono font-bold text-xs mt-0.5 shrink-0">
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

        {/* Right Column: Premium Temple Feature Photography */}
        <div className="md:col-span-6 flex flex-col items-center">
          <div className="w-full aspect-[4/5] rounded-sm overflow-hidden border border-neutral-300 shadow-md relative group">
            <img
              src="/assets/catalogues/temple-space/temple-01.jpg"
              alt="Capsule Temple Craftsmanship"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 text-white">
              <p className="text-xs font-semibold tracking-wider uppercase font-display text-brand-copperLight">
                Sacred Vastu & Precision Joinery
              </p>
              <p className="text-[10px] text-white/80 tracking-wide font-light mt-0.5">
                Backlit laser-engraved jaali backplates with heat-resistant quartz diya pull-outs
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-between pt-4 border-t border-neutral-300/80 text-xs">
        <div className="text-neutral-500 font-medium text-[11px] tracking-wider uppercase">
          CAPSULE INTERIORS • TEMPLE DESIGN CATALOGUE
        </div>
        <div className="font-bold font-mono tracking-widest text-neutral-900 text-xs">
          INTRO / 01
        </div>
      </footer>
    </div>
  );
};
