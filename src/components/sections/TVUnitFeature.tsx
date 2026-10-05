import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Download, Sparkles, Check, ArrowRight, ExternalLink } from 'lucide-react';
import { tvUnitLuxuryData } from '../../data/tvUnitLuxuryData';
import { Link } from 'react-router-dom';

interface TVUnitFeatureProps {
  onOpenConsultation?: () => void;
}

export const TVUnitFeature: React.FC<TVUnitFeatureProps> = ({ onOpenConsultation }) => {
  // Curated showcase of featured designs for the main page
  const featuredUnits = tvUnitLuxuryData.slice(0, 6);

  return (
    <section id="tv-units" className="py-20 sm:py-28 bg-[#0D0E12] text-white relative overflow-hidden border-t border-white/10">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C5A059]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#E5C378] font-mono text-[11px] font-bold tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OFFICIAL CATALOGUE SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white">
              ARCHITECTURAL <span className="text-[#C5A059]">TV UNITS</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-2xl leading-relaxed">
              Crafted entertainment walls and floating media consoles engineered with integrated cabling, ambient lighting, and bespoke storage solutions.
            </p>
          </div>

          {/* Primary Action Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
            <a
              href="/Capsule_Interiors_TV_Unit_Catalogue.pdf"
              download="Capsule_Interiors_TV_Unit_Catalogue.pdf"
              className="px-6 py-3.5 rounded-xl bg-[#C5A059] hover:bg-[#B38D48] text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2.5 transition-all shadow-xl hover:shadow-[#C5A059]/20 active:scale-95"
            >
              <Download className="w-4 h-4 text-black" />
              <span>DOWNLOAD TV UNIT CATALOG</span>
            </a>

            <Link
              to="/tv-unit-catalogue"
              className="px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm border border-white/10 transition-all flex items-center gap-2"
            >
              <span>View All {tvUnitLuxuryData.length} Designs</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059]" />
            </Link>
          </div>
        </div>

        {/* Selected TV Unit Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredUnits.map((unit) => (
            <div
              key={unit.number}
              className="group bg-[#16171B] rounded-2xl border border-white/10 overflow-hidden shadow-xl hover:border-[#C5A059]/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Prominent TV Unit Image */}
              <div className="relative h-64 sm:h-72 w-full bg-[#111215] overflow-hidden p-4 flex items-center justify-center">
                <img
                  src={unit.image}
                  alt={`${unit.modelName} - Capsule TV Unit`}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-xs text-[10px] font-mono text-[#E5C378] border border-white/10">
                  {unit.modelCode}
                </div>
              </div>

              {/* Editorial Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono text-[#C5A059] uppercase tracking-wider font-semibold mb-1">
                    {unit.variant}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black font-display uppercase tracking-tight text-white mb-2">
                    {unit.modelName}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    {unit.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="pt-4 border-t border-white/10">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                    KEY HIGHLIGHTS:
                  </div>
                  <ul className="space-y-1.5 text-xs text-neutral-300">
                    {unit.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with DOWNLOAD TV UNIT CATALOG button */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-[#1B1A17] via-[#231F17] to-[#1B1A17] border border-[#C5A059]/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold font-display uppercase text-white">
              Looking for the Complete TV Unit Catalogue?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
              Get all {tvUnitLuxuryData.length} authentic models, material configurations, and design specifications in high-resolution PDF format.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="/Capsule_Interiors_TV_Unit_Catalogue.pdf"
              download="Capsule_Interiors_TV_Unit_Catalogue.pdf"
              className="px-6 py-3.5 rounded-xl bg-[#C5A059] hover:bg-[#B38D48] text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2 transition-all shadow-lg active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD TV UNIT CATALOG</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TVUnitFeature;
