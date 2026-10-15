import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award,
  PhoneCall,
  Sparkles
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { ConsultationForm } from '../components/sections/ConsultationForm';

interface ServicesPageProps {
  onOpenConsultation: (options?: any) => void;
}

// 8 Custom SVG Icons matching the reference creative flyer
const PaintRollerIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="3" width="14" height="6" rx="1.5" stroke="currentColor" strokeWidth="2" />
    <line x1="4" y1="6" x2="18" y2="6" stroke="currentColor" strokeWidth="1.2" />
    <path d="M18 6h2a1.5 1.5 0 0 1 1.5 1.5v4a2 2 0 0 1-2 2h-8v3" stroke="currentColor" strokeWidth="2" />
    <rect x="10" y="16.5" width="3" height="5.5" rx="1" fill="currentColor" stroke="none" />
  </svg>
);

const POPTrowelIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3,17.5 21,17.5 18.5,10.5 5.5,10.5" stroke="currentColor" strokeWidth="2" fill="none" />
    <line x1="12" y1="10.5" x2="12" y2="6.5" stroke="currentColor" strokeWidth="2.2" />
    <rect x="7.5" y="4" width="9" height="3" rx="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const CarpenterFrameIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3.5" y="3" width="17" height="18" rx="1.5" stroke="currentColor" strokeWidth="2" />
    <line x1="12" y1="3" x2="12" y2="21" stroke="currentColor" strokeWidth="1.8" />
    <line x1="3.5" y1="18.5" x2="20.5" y2="18.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="6" y="5.5" width="4" height="10.5" rx="0.5" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2" />
    <rect x="14" y="5.5" width="4" height="10.5" rx="0.5" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2" />
  </svg>
);

const WardrobeDoorsIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2.5" width="16" height="19" rx="1" stroke="currentColor" strokeWidth="2" />
    <line x1="3" y1="2.5" x2="21" y2="2.5" stroke="currentColor" strokeWidth="2" />
    <line x1="12" y1="2.5" x2="12" y2="21.5" stroke="currentColor" strokeWidth="1.8" />
    <line x1="10" y1="9.5" x2="10" y2="14.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="14" y1="9.5" x2="14" y2="14.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="4" y1="19" x2="20" y2="19" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const WelderMaskIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 10c0-3.3 2.7-6 6-6s6 2.7 6 6v5a6 6 0 0 1-12 0v-5z" stroke="currentColor" strokeWidth="2" />
    <rect x="8.5" y="8.5" width="7" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.4" />
    <circle cx="4.5" cy="11.5" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="19.5" cy="11.5" r="1.2" fill="currentColor" stroke="none" />
    <path d="M9 17.5h6" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const PlumbingPipeIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6.5h7a2 2 0 0 1 2 2v6.5a2 2 0 0 0 2 2h5" stroke="currentColor" strokeWidth="2.4" />
    <line x1="4" y1="4" x2="4" y2="9" stroke="currentColor" strokeWidth="2.5" />
    <line x1="20" y1="14.5" x2="20" y2="19.5" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="13" cy="11.5" r="2.5" stroke="currentColor" strokeWidth="1.6" fill="currentColor" fillOpacity="0.3" />
    <line x1="13" y1="9" x2="13" y2="7" stroke="currentColor" strokeWidth="2" />
    <line x1="10.5" y1="7" x2="15.5" y2="7" stroke="currentColor" strokeWidth="2.2" />
  </svg>
);

const ElectricalLightningIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M13.5 2L4.5 13h6l-1.5 9 10.5-12h-6.5l2.5-8z" />
  </svg>
);

const TilesDiamondIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <g transform="translate(12, 12) rotate(45) translate(-12, -12)">
      <rect x="5" y="5" width="6.5" height="6.5" rx="0.8" stroke="currentColor" strokeWidth="1.8" />
      <rect x="12.5" y="5" width="6.5" height="6.5" rx="0.8" stroke="currentColor" strokeWidth="1.8" />
      <rect x="5" y="12.5" width="6.5" height="6.5" rx="0.8" stroke="currentColor" strokeWidth="1.8" />
      <rect x="12.5" y="12.5" width="6.5" height="6.5" rx="0.8" stroke="currentColor" strokeWidth="1.8" />
      <rect x="7.5" y="7.5" width="1.5" height="1.5" fill="currentColor" stroke="none" />
      <rect x="15" y="7.5" width="1.5" height="1.5" fill="currentColor" stroke="none" />
      <rect x="7.5" y="15" width="1.5" height="1.5" fill="currentColor" stroke="none" />
      <rect x="15" y="15" width="1.5" height="1.5" fill="currentColor" stroke="none" />
    </g>
  </svg>
);

const UPVCWindowsDoorsIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="1.5" stroke="currentColor" strokeWidth="2" />
    <line x1="12" y1="3" x2="12" y2="21" stroke="currentColor" strokeWidth="2" />
    <line x1="3" y1="10.5" x2="12" y2="10.5" stroke="currentColor" strokeWidth="1.6" />
    <line x1="14.5" y1="10.5" x2="14.5" y2="14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="3" y1="19" x2="21" y2="19" stroke="currentColor" strokeWidth="1.2" />
    <line x1="5.5" y1="5.5" x2="8" y2="8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5" />
    <line x1="14.5" y1="5.5" x2="17" y2="8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5" />
  </svg>
);

const HomeTheatreIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2.5" y="4" width="19" height="12" rx="1.5" stroke="currentColor" strokeWidth="2" />
    <polygon points="10.5,7.5 15,10 10.5,12.5" fill="currentColor" stroke="none" />
    <rect x="5.5" y="18" width="13" height="3" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="8" cy="19.5" r="0.75" fill="currentColor" stroke="none" />
    <circle cx="16" cy="19.5" r="0.75" fill="currentColor" stroke="none" />
    <line x1="10.5" y1="19.5" x2="13.5" y2="19.5" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenConsultation }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const getServiceIcon = (iconName: string, className = "w-6 h-6") => {
    switch (iconName) {
      case 'PaintRoller': return <PaintRollerIcon className={className} />;
      case 'POPTrowel': return <POPTrowelIcon className={className} />;
      case 'CarpenterFrame': return <CarpenterFrameIcon className={className} />;
      case 'WardrobeDoors': return <WardrobeDoorsIcon className={className} />;
      case 'WelderMask': return <WelderMaskIcon className={className} />;
      case 'PlumbingPipe': return <PlumbingPipeIcon className={className} />;
      case 'ElectricalLightning': return <ElectricalLightningIcon className={className} />;
      case 'TilesDiamond': return <TilesDiamondIcon className={className} />;
      case 'UPVCWindowsDoors': return <UPVCWindowsDoorsIcon className={className} />;
      case 'HomeTheatre': return <HomeTheatreIcon className={className} />;
      default: return <PaintRollerIcon className={className} />;
    }
  };

  const scrollToCategory = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16 w-full overflow-x-hidden">
      {/* Header Banner */}
      <div className="bg-brand-black text-white py-12 sm:py-16 relative overflow-hidden border-b border-brand-copper/30">
        <div className="absolute inset-0 bg-[radial-gradient(#B86D43_1px,transparent_1px)] [background-size:28px_28px] opacity-15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-brand-copper uppercase mb-2.5">
            <Link to="/" className="hover:underline">HOME</Link>
            <span>/</span>
            <span>SERVICES</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase max-w-4xl leading-tight">
            OUR 10 ARCHITECTURAL <span className="text-brand-copper">SERVICES</span>
          </h1>
          <p className="mt-3.5 text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
            All 10 core categories executed under one roof with dedicated in-house master craftsmen, certified materials, and 100% price transparency across Bengaluru.
          </p>
        </div>
      </div>

      {/* Floating Quick-Jump 10 Category Bar - 100% visible on all screen sizes */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 -mt-6 sm:-mt-7 relative z-20">
        <div className="bg-white rounded-2xl p-2.5 sm:p-3.5 shadow-xl border border-brand-border">
          <div className="flex items-center justify-between gap-2 mb-2 px-1">
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-brand-black uppercase">
              QUICK JUMP TO ALL 10 SERVICES:
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono text-brand-copper font-bold">
              10 OF 10 AVAILABLE
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1.5 sm:gap-2 w-full">
            {servicesData.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToCategory(s.id)}
                className="px-2.5 sm:px-3 py-2 rounded-xl sm:rounded-full bg-brand-ivory/80 hover:bg-brand-black hover:text-white text-brand-black/85 border border-brand-border/90 hover:border-brand-black text-[11px] sm:text-xs font-bold tracking-wide shadow-2xs flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 transition-all cursor-pointer text-center sm:text-left group"
              >
                <span 
                  className="w-2 h-2 rounded-full shrink-0 shadow-xs group-hover:scale-125 transition-transform"
                  style={{ backgroundColor: s.badgeColor }} 
                />
                <span className="truncate leading-tight">
                  {s.number}. {s.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* All 8 Categories Displayed Together in a Balanced, Accessible 2-Column Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {servicesData.map((srv) => (
            <div
              key={srv.id}
              id={srv.id}
              className="bg-white rounded-2xl sm:rounded-3xl border border-brand-border/90 shadow-md hover:shadow-xl transition-all duration-300 p-5 sm:p-7 flex flex-col justify-between space-y-4 group scroll-mt-28"
            >
              {/* Card Header: Icon & Category Tag */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <span 
                      className="text-white text-[10px] sm:text-[11px] font-bold font-mono tracking-widest px-3 py-1 rounded-full shadow-xs"
                      style={{ backgroundColor: srv.badgeColor }}
                    >
                      CATEGORY {srv.number} / 10
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-brand-muted uppercase tracking-wider">
                      Bengaluru
                    </span>
                  </div>

                  {/* Colored SVG Architectural Icon */}
                  <div 
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center text-white shadow-md border border-white/20 shrink-0 group-hover:scale-105 transition-transform"
                    style={{ backgroundColor: srv.badgeColor }}
                  >
                    {getServiceIcon(srv.iconName, "w-6 h-6")}
                  </div>
                </div>

                {/* Title & Short Description */}
                <h2 className="font-display text-xl sm:text-2xl font-extrabold uppercase text-brand-black tracking-tight leading-snug">
                  {srv.number}. {srv.title}
                </h2>
                <p 
                  className="text-xs sm:text-sm font-bold tracking-wide mt-1"
                  style={{ color: srv.badgeColor }}
                >
                  {srv.shortDesc}
                </p>
                <p className="text-xs text-brand-muted leading-relaxed mt-2 line-clamp-3">
                  {srv.fullDesc}
                </p>
              </div>

              {/* Uncropped Visual Preview with Ambient Backdrop */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-inner border border-brand-border aspect-16/9 bg-brand-black flex items-center justify-center p-2.5 sm:p-3 group/img">
                {/* Ambient Blurred Background Glow */}
                <img
                  src={srv.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-40 pointer-events-none"
                />
                
                {/* Vignette */}
                <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/70 pointer-events-none" />

                {/* Foreground Sharp Uncropped Framed Image */}
                <div className="relative z-10 w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-md flex items-center justify-center bg-black/40 border border-white/10">
                  <img
                    src={srv.image}
                    alt={`${srv.number}. ${srv.title}`}
                    className="w-full h-full object-contain object-center group-hover/img:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Floating Category Stamp Pill */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white z-20 pointer-events-none">
                  <span
                    className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-lg text-white flex items-center gap-1.5"
                    style={{ backgroundColor: `${srv.badgeColor}EE` }}
                  >
                    {getServiceIcon(srv.iconName, "w-3 h-3")}
                    <span>{srv.title.split('/')[0].trim()}</span>
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-white bg-black/80 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/20 shadow-lg">
                    {srv.number} / 10
                  </span>
                </div>
              </div>

              {/* Specifications & Scope of Work */}
              <div className="pt-1">
                <h3 className="text-[11px] font-bold tracking-widest uppercase text-brand-black mb-2">
                  SPECIFICATIONS & SCOPE:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {srv.features.slice(0, 4).map((feat, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-brand-black/90 p-1.5 rounded-md bg-brand-ivory border border-brand-border/60">
                      <CheckCircle2 
                        className="w-3.5 h-3.5 shrink-0" 
                        style={{ color: srv.badgeColor }}
                      />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 border-t border-brand-border/70 flex flex-wrap items-center gap-2.5 w-full">
                <button
                  onClick={() => onOpenConsultation('Get Free Estimate')}
                  className="flex-1 px-4 py-2.5 bg-brand-copper hover:bg-brand-copperLight text-white text-xs font-bold tracking-wider uppercase rounded-full shadow-xs transition-all cursor-pointer flex items-center justify-center gap-1.5 active:scale-95"
                >
                  <span>GET FREE ESTIMATE</span>
                  <ArrowRight className="w-3 h-3" />
                </button>

                <Link
                  to="/gallery"
                  className="px-4 py-2.5 bg-brand-ivory hover:bg-white text-brand-black border border-brand-border text-xs font-bold tracking-wider uppercase rounded-full transition-all hover:border-brand-copper active:scale-95 text-center"
                >
                  WORK PHOTOS
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Turnkey Combined Package Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-18">
        <div className="rounded-3xl bg-brand-black text-white p-6 sm:p-10 relative overflow-hidden border border-brand-copper/40">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold tracking-widest text-brand-copper uppercase block mb-2">
              SEAMLESS INTEGRATED EXECUTION
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase mb-3">
              Planning Complete Home Construction + Turnkey Interiors?
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-5">
              Skip the coordination headache between different sub-contractors. Capsule Company unifies painting, POP false ceilings, carpentry, modular kitchens, metal fabrication, plumbing, electricals, and marble/tile laying under a single dedicated project manager and site engineer.
            </p>
            <button
              onClick={() => onOpenConsultation('Book Free Consultation')}
              className="px-6 py-3.5 bg-brand-copper hover:bg-brand-copperLight text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-xl transition-all active:scale-95 cursor-pointer"
            >
              BOOK YOUR FREE SITE CONSULTATION
            </button>
          </div>
        </div>
      </div>

      {/* Lead Generation Form */}
      <div className="mt-14">
        <ConsultationForm />
      </div>
    </div>
  );
};
