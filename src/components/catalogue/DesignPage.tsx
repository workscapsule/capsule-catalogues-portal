import React from 'react';
import { CatalogueDesignItem } from '../../types/catalogue';

interface DesignPageProps {
  item: CatalogueDesignItem;
  categoryEyebrow: string;
}

export const DesignPage: React.FC<DesignPageProps> = ({ item, categoryEyebrow }) => {
  return (
    <article className="catalogue-page catalogue-design-page bg-[#FAF9F7] text-[#141414] relative flex flex-col justify-between p-7 sm:p-10 md:p-12 overflow-hidden select-none border border-neutral-200/70 shadow-sm print:border-none print:shadow-none">
      {/* Right Edge Bleed Tab / Brand Spine (Mirroring Reference PDF) */}
      <aside
        className="absolute right-0 top-0 bottom-0 w-7 sm:w-8 bg-[#18191B] text-white flex items-center justify-center rounded-l-md z-20 print:w-7 shadow-xs"
        aria-hidden="true"
      >
        <span
          className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] font-medium text-white/90 whitespace-nowrap"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Capsule Company
        </span>
      </aside>

      {/* Top Header Bar */}
      <header className="relative z-10 flex items-center justify-between pb-4 border-b border-neutral-200/80 pr-10">
        <div className="flex items-center gap-2.5">
          <div className="h-6 w-auto flex items-center justify-center">
            <img
              src="/assets/logo.jpeg"
              alt="Capsule Company"
              className="h-6 w-auto object-contain rounded-xs"
            />
          </div>
          <span className="text-[10px] tracking-[0.24em] uppercase font-bold text-brand-copper">
            Ideas Into Space
          </span>
        </div>

        <div className="text-right">
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-neutral-600">
            {categoryEyebrow || item.category}
          </span>
        </div>
      </header>

      {/* Main Content Area: Left (Name + Description) & Right (Large Image) */}
      <main className="relative z-10 my-auto py-4 sm:py-6 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start pr-8 sm:pr-10">
        {/* Left Editorial Text Column (approx 4.5 cols in 12-col grid) */}
        <div className="md:col-span-5 flex flex-col pt-3 sm:pt-6">
          {/* Design Title */}
          <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.85rem] font-black uppercase tracking-tight text-neutral-900 leading-none">
            {item.name}
          </h1>

          {/* Sub reference tag */}
          <div className="mt-3 mb-5">
            <span className="inline-block text-[11px] font-mono tracking-widest text-brand-copper uppercase font-bold">
              REF. {item.refId}
            </span>
          </div>

          {/* Short Design Description (2-4 lines, clean, professional) */}
          <p className="text-[13px] sm:text-[14.5px] leading-relaxed text-neutral-700 font-normal">
            {item.description}
          </p>
        </div>

        {/* Right Visual Image Column (approx 7.5 cols in 12-col grid) */}
        <div className="md:col-span-7 flex flex-col items-center">
          <div className="relative w-full group pt-3">
            {/* Pill Reference Badge (Overlapping Image Top-Left, Exact Reference PDF Match) */}
            <div className="absolute top-0 left-4 z-20 shadow-md">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#C8563C] text-white text-[10px] sm:text-[11px] font-bold tracking-wider uppercase">
                <span>{item.refId}</span>
                <span className="opacity-60">—</span>
                <span>{item.name}</span>
              </span>
            </div>

            {/* Large Design Image - Tall & Dominant */}
            <div className="w-full aspect-[3/3.8] sm:aspect-[3/3.7] bg-neutral-100 rounded-sm overflow-hidden border border-neutral-200/90 shadow-md">
              <img
                src={item.image}
                alt={`${item.name} - ${item.category} Design ${item.refId}`}
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                loading="eager"
              />
            </div>
          </div>

          {/* Mood Descriptor Line (Italicized, directly beneath image like PDF) */}
          {item.moodTags && (
            <p className="mt-3 text-center text-xs sm:text-[13px] font-serif italic text-neutral-600 tracking-wide">
              {item.moodTags}
            </p>
          )}
        </div>
      </main>

      {/* Page Footer Bar */}
      <footer className="relative z-10 flex items-center justify-between pt-3.5 border-t border-neutral-200/80 pr-10 text-xs">
        <div className="text-neutral-500 font-medium text-[11px] tracking-wider uppercase">
          LATEST 2026
        </div>

        <div className="font-bold font-mono tracking-widest text-neutral-900 text-xs">
          {item.pageNumber}
        </div>
      </footer>
    </article>
  );
};

