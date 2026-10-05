import React from 'react';
import { CatalogueCategoryConfig } from '../../types/catalogue';

interface CatalogueCoverProps {
  config: CatalogueCategoryConfig;
}

export const CatalogueCover: React.FC<CatalogueCoverProps> = ({ config }) => {
  return (
    <section className="catalogue-page catalogue-cover bg-[#161719] text-white flex flex-col justify-between p-8 sm:p-12 md:p-16 relative overflow-hidden select-none">
      {/* Subtle architectural grain / ambient light gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-white/[0.03] pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-copper/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header / Brand Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-6">
        <div className="flex items-center gap-3">
          <div className="h-12 w-auto bg-white rounded-md p-1 flex items-center justify-center shadow-md">
            <img
              src="/assets/logo.jpeg"
              alt="Capsule Company"
              className="h-10 w-auto object-contain"
            />
          </div>
          <div>
            <span className="block text-xs uppercase tracking-[0.25em] font-semibold text-white/90">
              Capsule Company
            </span>
            <span className="block text-[10px] tracking-[0.2em] text-brand-copper uppercase">
              Ideas Into Space
            </span>
          </div>
        </div>

        <div className="text-right">
          <span className="inline-block text-[11px] font-mono tracking-widest px-3 py-1 bg-white/10 rounded-full text-white/80 border border-white/10">
            {config.editionYear || 'LATEST 2026'}
          </span>
        </div>
      </div>

      {/* Main Massive Editorial Title (Mirroring Reference PDF Cover) */}
      <div className="relative z-10 my-auto py-12">
        <div className="leading-[0.85] tracking-tighter select-none font-display font-extrabold text-white/95">
          <div className="text-[clamp(4.5rem,14vw,8.5rem)]">CATAL</div>
          <div className="text-[clamp(4.5rem,14vw,8.5rem)] text-white/90">OUGE</div>
        </div>

        <div className="mt-8 pt-6 border-t-2 border-brand-copper max-w-xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight uppercase text-white">
            {config.coverTitle}
          </h2>
          <p className="mt-2 text-xs sm:text-sm tracking-[0.18em] uppercase text-white/60 font-medium">
            {config.coverSubtitle || 'Capsule Design Collection'}
          </p>
        </div>
      </div>

      {/* Footer Strip */}
      <div className="relative z-10 pt-6 border-t border-white/10 flex items-end justify-between text-xs text-white/60">
        <div>
          <p className="font-semibold text-white/80 uppercase tracking-widest text-[11px]">
            Capsule Company Design Selection
          </p>
          <p className="text-[10px] text-white/40 tracking-wider mt-0.5">
            Architectural Joinery & Premium Interior Solutions
          </p>
        </div>
        <div className="text-right">
          <p className="font-mono text-brand-copper text-xs tracking-wider">
            {config.codePrefix}-SERIES
          </p>
          <p className="text-[10px] text-white/40 tracking-widest uppercase">
            A4 Selection Edition
          </p>
        </div>
      </div>
    </section>
  );
};
