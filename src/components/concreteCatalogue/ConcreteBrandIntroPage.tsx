import React from 'react';

export const ConcreteBrandIntroPage: React.FC = () => {
  return (
    <div
      id="concrete-intro"
      className="catalogue-page concrete-magazine-page relative bg-[#FBF8F5] text-[#1A1A1A] flex flex-col justify-between p-8 sm:p-14 select-none border border-neutral-200/80 shadow-sm print:border-none print:shadow-none mx-auto"
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
              CAPSULE INTERIORS
            </span>
            <span className="block text-[10px] tracking-[0.2em] text-[#A3704C] uppercase font-medium">
              Your Space Maker
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
        {/* Left Column: Concrete Unit Design Philosophy */}
        <div className="md:col-span-6 flex flex-col justify-center">
          <span className="text-[11px] font-mono tracking-widest text-[#A3704C] uppercase font-bold mb-2">
            ARCHITECTURAL JOINERY & DISPLAY
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-neutral-900 leading-tight">
            CURATING SPACES WITH TIMELESS ELEGANCE
          </h2>

          <p className="mt-4 text-xs sm:text-[13px] leading-relaxed text-neutral-700 font-normal">
            Capsule Interiors designs and crafts bespoke dining showcases, crockery hutches, and architectural vitrines tailored to modern lifestyles. Each piece unites high-precision joinery, smoked glass façades, and subtle ambient illumination to transform ordinary dining spaces into luxury sanctuaries.
          </p>

          {/* 3 Core Pillars */}
          <div className="mt-6 pt-5 border-t border-neutral-300/80 space-y-3">
            <div className="flex items-start gap-2.5">
              <span className="text-[#A3704C] font-mono font-bold text-xs mt-0.5 shrink-0">01.</span>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 inline">
                  PRECISION JOINERY:
                </h4>
                <span className="text-[11px] text-neutral-600 ml-1.5 leading-relaxed">
                  German-engineered concealed soft-close hinges, synchronized runner systems, and mitred carcasses.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="text-[#A3704C] font-mono font-bold text-xs mt-0.5 shrink-0">02.</span>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 inline">
                  CURATED GLASS & METALLICS:
                </h4>
                <span className="text-[11px] text-neutral-600 ml-1.5 leading-relaxed">
                  Smoked bronze and fluted glass profiles paired with brushed brass, champagne gold, and matte graphite accents.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="text-[#A3704C] font-mono font-bold text-xs mt-0.5 shrink-0">03.</span>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 inline">
                  INTEGRATED LUMINESCENCE:
                </h4>
                <span className="text-[11px] text-neutral-600 ml-1.5 leading-relaxed">
                  Warm 3000K recessed LED channels engineered to dramatize crystal collections without harsh glare.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Premium Feature Photography */}
        <div className="md:col-span-6 flex flex-col items-center">
          <div className="w-full aspect-[4/5] rounded-sm overflow-hidden border border-neutral-300 shadow-md relative group">
            <img
              src="/assets/catalogues/concrete-unit/concrete-19.jpg"
              alt="Capsule Luxury Vitrine Craftsmanship"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 text-white">
              <p className="text-xs font-semibold tracking-wider uppercase font-display text-[#E5C39E]">
                Bespoke Vitrines & Ambient Bar Architecture
              </p>
              <p className="text-[10px] text-white/80 tracking-wide font-light mt-0.5">
                Smoked tempered glass façades with under-shelf concealed linear illumination
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-between pt-4 border-t border-neutral-300/80 text-xs">
        <div className="text-neutral-500 font-medium text-[11px] tracking-wider uppercase">
          CAPSULE INTERIORS • CONCRETE UNIT CATALOGUE
        </div>
        <div className="font-bold font-mono tracking-widest text-neutral-900 text-xs">
          INTRO / 01
        </div>
      </footer>
    </div>
  );
};

export default ConcreteBrandIntroPage;
