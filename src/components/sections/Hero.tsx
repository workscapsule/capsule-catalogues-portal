import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Phone, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { companyConfig } from '../../config/company';

interface HeroProps {
  onOpenConsultation: (source?: any) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const navigate = useNavigate();

  return (
    <section 
      id="home" 
      className="relative min-h-[72vh] sm:min-h-[78vh] lg:min-h-[85vh] max-h-[840px] flex items-center justify-center overflow-hidden bg-brand-black"
    >
      {/* ==========================================================================
          1. ULTRA-HIGH-RESOLUTION LUXURY ARCHITECTURAL INTERIOR VISUAL
             - Crisp, photorealistic 2400px modern architectural living space
             - Subtle dual-tone gradient preserves vibrant interior details while ensuring text pops
          ========================================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/assets/hero/luxury-living-room.jpg"
          alt="Luxury architectural living room and bespoke interior by Capsule Company Bengaluru"
          className="w-full h-full object-cover object-center scale-[1.01] transition-transform duration-1000 ease-out"
          loading="eager"
        />

        {/* Tailored cinematic gradients: Deep left vignette for text legibility, clear right view */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/60 to-brand-black/25 sm:via-brand-black/50 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-brand-black/50" />
      </div>

      {/* ==========================================================================
          2. AESTHETIC CLIENT-ATTRACTING EDITORIAL CONTENT
             - Clean luxury typography
             - Client-centric value proposition
             - Value badges & dual high-conversion CTAs
          ========================================================================== */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 flex flex-col justify-between min-h-[72vh] sm:min-h-[78vh] lg:min-h-[85vh] max-h-[840px]">
        
        {/* Subtle Luxury Brand Pill */}
        <div className="pt-2 sm:pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-brand-copper animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] uppercase text-white">
              CAPSULE COMPANY
            </span>
            <span className="text-white/30 text-[10px]">•</span>
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-brand-copperLight uppercase">
              BENGALURU
            </span>
          </div>
        </div>

        {/* Main Architectural Headline & Compelling Subtitle */}
        <div className="my-auto max-w-2xl lg:max-w-3xl space-y-4 sm:space-y-5 py-4 sm:py-6">
          
          {/* Headline with Luxury Copper Gradient Accent */}
          <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[52px] font-extrabold text-white tracking-tight uppercase leading-[1.12] drop-shadow-2xl">
            BUILDING SPACES. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-copper via-brand-copperLight to-amber-300">
              CREATING VALUE.
            </span>
          </h1>

          {/* Subtitle & Tagline */}
          <div className="space-y-1.5 max-w-xl drop-shadow-md">
            <p className="text-sm sm:text-base md:text-lg text-white font-semibold tracking-wide">
              Construction • Interiors • Exteriors
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-200 italic font-medium leading-relaxed">
              One team for your complete project.
            </p>
          </div>

          {/* Service Scope */}
          <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-1.5 pt-0.5 text-xs sm:text-sm text-gray-300 font-medium">
            <span>Construction</span>
            <span className="text-brand-copper">•</span>
            <span>Civil Works</span>
            <span className="text-brand-copper">•</span>
            <span>Interiors</span>
            <span className="text-brand-copper">•</span>
            <span>Exteriors</span>
            <span className="text-brand-copper">•</span>
            <span>Renovation</span>
          </div>

          {/* Two Clean, Responsive CTA Buttons */}
          <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
            <button
              onClick={() => onOpenConsultation('Book A Consultation')}
              className="px-6 sm:px-8 py-3 sm:py-3.5 bg-brand-copper hover:bg-brand-copperLight text-white text-xs sm:text-sm font-bold tracking-widest uppercase rounded-full shadow-xl hover:shadow-brand-copper/40 transition-all duration-300 flex items-center justify-center gap-2.5 group cursor-pointer active:scale-95"
            >
              <span>BOOK A CONSULTATION</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => navigate('/gallery')}
              className="px-6 sm:px-8 py-3 sm:py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/60 text-xs sm:text-sm font-bold tracking-widest uppercase rounded-full backdrop-blur-md shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <span>VIEW OUR WORK</span>
              <ChevronRight className="w-4 h-4 text-brand-copperLight" />
            </button>
          </div>

        </div>

        {/* ==========================================================================
            3. MINIMALIST ARCHITECTURAL TRUST DOCK (Clean, Responsive)
            ========================================================================== */}
        <div className="pt-4 border-t border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-white text-xs font-medium">
          
          {/* Core Guarantees */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-gray-200 text-[11px] sm:text-xs">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-copper shrink-0" />
              <span>Transparent BOQ (No Hidden Costs)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-brand-copper shrink-0" />
              <span>10-Year Warranty</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-brand-copper shrink-0" />
              <span>In-House Master Craftsmen</span>
            </div>
          </div>

          {/* Direct Phone Consultation Links */}
          <div className="w-full md:w-auto flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5 text-gray-300 text-[11px] sm:text-xs">
            <div className="flex items-center gap-1.5 shrink-0 text-white font-medium">
              <Phone className="w-3.5 h-3.5 text-brand-copper shrink-0" />
              <span>Direct Site Consultation:</span>
            </div>
            <div className="flex items-center flex-wrap gap-x-2 gap-y-1">
              {companyConfig.phones.map((p, idx) => (
                <span key={p.number} className="inline-flex items-center gap-1.5 sm:gap-2">
                  {idx > 0 && <span className="text-gray-500 text-[10px] hidden xs:inline">•</span>}
                  <a 
                    href={`tel:${p.raw}`} 
                    className="text-white hover:text-brand-copperLight font-bold underline underline-offset-2 transition-colors whitespace-nowrap text-[11px] sm:text-xs"
                    title={`Call Line ${idx + 1}: ${p.display}`}
                  >
                    {p.display}
                  </a>
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

