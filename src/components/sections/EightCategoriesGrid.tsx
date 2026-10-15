import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  X,
  PhoneCall
} from 'lucide-react';
import { homeServicesCategories, HomeServiceCategory } from '../../data/homeServicesData';
import StackingCards, { StackingCardItem } from '@/components/ui/stacking-cards';

interface EightCategoriesGridProps {
  onOpenConsultation: (options?: any) => void;
  showAllDetails?: boolean;
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
    <line x1="13" y1="9" x2="13" y2="7.5" stroke="currentColor" strokeWidth="2" />
    <line x1="10.5" y1="7.5" x2="15.5" y2="7.5" stroke="currentColor" strokeWidth="2.2" />
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

export const EightCategoriesGrid: React.FC<EightCategoriesGridProps> = ({
  onOpenConsultation,
  showAllDetails = false
}) => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<HomeServiceCategory | null>(null);

  const getServiceIcon = (iconName: string, className = "w-7 h-7 sm:w-8 sm:h-8") => {
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

  return (
    <section id="services-grid" className="py-16 sm:py-20 bg-white relative overflow-visible">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#B86D43_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-10 pointer-events-none overflow-hidden" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-brand-copper" />
              <span className="text-xs font-bold tracking-[0.25em] text-brand-copper uppercase">
                ONE COMPANY. EVERY DETAIL.
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-black uppercase">
              OUR SERVICES
            </h2>
            <p className="mt-3 text-sm sm:text-base text-brand-muted leading-relaxed">
              Expert solutions for every corner of your space. Perfectly delivered with dedicated in-house craftsmen across Bengaluru.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/services')}
              className="px-5 py-2.5 rounded-full border border-brand-copper/40 bg-brand-ivory hover:bg-brand-copper hover:text-white text-brand-black text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <span>EXPLORE ALL DETAILS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 8 Categories Scroll Stacking Cards - Refined, Proportional & Balanced on Laptop Screens */}
        <StackingCards
          totalCards={homeServicesCategories.length}
          className="w-full relative pb-10 sm:pb-12"
          scaleMultiplier={0.015}
        >
          {homeServicesCategories.map((srv, idx) => (
            <StackingCardItem
              key={srv.id}
              index={idx}
              topPosition={`calc(4.2rem + ${idx * 6}px)`}
              className="w-full max-w-4xl mx-auto mb-6 sm:mb-8 last:mb-0"
            >
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-brand-border/80 shadow-xl hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.14)] transition-all duration-500 overflow-hidden w-full flex flex-col lg:flex-row items-stretch min-h-0 lg:h-[430px] group">

                {/* Left Column: Rich Architectural Content & Specifications */}
                <div className="w-full lg:w-[53%] p-5 sm:p-6 lg:p-6.5 flex flex-col justify-between space-y-3.5 order-2 lg:order-1 bg-white">

                  {/* Top Metadata Row */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-white text-[10px] sm:text-[11px] font-bold tracking-widest uppercase shadow-xs"
                        style={{ backgroundColor: srv.badgeColor }}
                      >
                        CATEGORY {srv.number} / 10
                      </span>
                      <span className="text-brand-muted/50 text-[10px] sm:text-[11px] font-medium">—</span>
                      <span className="text-[10px] sm:text-[11px] font-bold text-brand-muted uppercase tracking-wider">
                        Bengaluru
                      </span>
                    </div>

                    {/* Proportional Signature Icon */}
                    <div
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-all duration-300 text-white border-2 border-white ring-1 ring-black/10"
                      style={{ backgroundColor: srv.badgeColor }}
                      title={srv.title}
                    >
                      {getServiceIcon(srv.iconName, "w-6 h-6 sm:w-6.5 sm:h-6.5")}
                    </div>
                  </div>

                  {/* Core Heading & Exact Descriptions */}
                  <div className="space-y-1.5 sm:space-y-2">
                    <h3 className="font-display text-xl sm:text-2xl lg:text-[25px] font-extrabold tracking-tight uppercase text-brand-black leading-snug">
                      {srv.number}. {srv.title}
                    </h3>
                    <p 
                      className="text-xs sm:text-sm font-bold leading-tight tracking-wide"
                      style={{ color: srv.badgeColor }}
                    >
                      {srv.shortDesc}
                    </p>
                    <p className="text-xs text-brand-muted leading-relaxed font-normal line-clamp-2 sm:line-clamp-3">
                      {srv.fullDesc}
                    </p>
                  </div>

                  {/* Highlights Grid: 4 Feature Rows (Responsive & cleanly fitting without truncation) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 py-2.5 border-y border-brand-border/70">
                    {srv.features.slice(0, 4).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-1.5 text-[11px] sm:text-xs font-medium text-brand-black/90 leading-snug">
                        <CheckCircle2
                          className="w-3.5 h-3.5 shrink-0 mt-0.5"
                          style={{ color: srv.badgeColor }}
                        />
                        <span className="whitespace-normal break-words">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Action CTAs */}
                  <div className="pt-1 flex flex-wrap items-center gap-2.5">
                    <button
                      onClick={() => onOpenConsultation('Get Free Estimate')}
                      className="flex-1 sm:flex-none px-5 py-2.5 rounded-full bg-brand-black hover:bg-brand-copper text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-xs active:scale-95 text-center flex items-center justify-center gap-1.5 group/btn"
                    >
                      <span>GET FREE ESTIMATE</span>
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>

                    <button
                      onClick={() => setSelectedService(srv)}
                      className="px-4 py-2.5 rounded-full bg-brand-ivory hover:bg-white text-brand-black border border-brand-border hover:border-brand-copper text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer shadow-2xs active:scale-95 group/view"
                    >
                      <span>VIEW DETAILS</span>
                      <ArrowRight className="w-3 h-3 group-hover/view:translate-x-0.5 transition-transform" />
                    </button>
                  </div>

                </div>

                {/* Right Column: Architectural Visual - Proportional and Uncropped */}
                <div className="w-full lg:w-[47%] relative min-h-[220px] sm:min-h-[260px] lg:min-h-0 lg:h-full order-1 lg:order-2 overflow-hidden bg-brand-black flex items-center justify-center p-3 sm:p-4 group/visual">
                  
                  {/* Ambient blurred glow from the same image filling all corners */}
                  <img
                    src={srv.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-40 pointer-events-none select-none"
                  />
                  
                  {/* Subtle dark vignette */}
                  <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/70 pointer-events-none" />

                  {/* High-Resolution Framed Visual: 100% visible on left & right sides */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center rounded-xl sm:rounded-2xl overflow-hidden shadow-xl bg-black/40 border border-white/10">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-contain object-center group-hover/visual:scale-[1.02] transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  </div>

                  {/* Floating Category Stamp Pill */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white z-20 pointer-events-none">
                    <span
                      className="text-[11px] sm:text-xs font-bold tracking-wider uppercase backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-lg text-white flex items-center gap-1.5"
                      style={{ backgroundColor: `${srv.badgeColor}EE` }}
                    >
                      {getServiceIcon(srv.iconName, "w-3.5 h-3.5")}
                      <span>{srv.title.split('/')[0].trim()}</span>
                    </span>
                    <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-white bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 shadow-lg">
                      {srv.number} / 10
                    </span>
                  </div>
                </div>

              </div>
            </StackingCardItem>
          ))}
        </StackingCards>

        {/* Bottom Banner Strip for All 8 Categories */}
        <div className="mt-12 sm:mt-16 rounded-2xl bg-brand-black text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-brand-copper/30">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[11px] font-bold tracking-widest text-brand-copper uppercase block">
              NEED A COMBINED TURNKEY PACKAGE?
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold uppercase">
              Save Up to 15% with End-to-End Construction + Interiors
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl">
              From foundation civil works to fully furnished modular kitchens, painting, and wardrobes, our integrated team handles everything with a single point of contact.
            </p>
          </div>

          <button
            onClick={() => onOpenConsultation('Get Free Estimate')}
            className="px-7 py-3.5 bg-brand-copper hover:bg-brand-copperLight text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-lg transition-all duration-300 whitespace-nowrap active:scale-95 cursor-pointer"
          >
            REQUEST COMBINED ESTIMATE
          </button>
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative bg-brand-ivory rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-brand-border z-10 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white hover:bg-brand-cream text-brand-black border border-brand-border transition-colors cursor-pointer shadow-xs"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="flex items-center gap-2.5 mb-3">
              <span
                className="text-xs font-mono font-bold px-3 py-1 text-white rounded-md shadow-xs"
                style={{ backgroundColor: selectedService.badgeColor }}
              >
                CATEGORY {selectedService.number}
              </span>
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: selectedService.badgeColor }}
              >
                Capsule Company Service
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-black uppercase mb-1">
              {selectedService.number}. {selectedService.title}
            </h3>

            <p
              className="text-sm font-bold mb-3"
              style={{ color: selectedService.badgeColor }}
            >
              {selectedService.shortDesc}
            </p>

            <p className="text-sm text-brand-muted leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            <div className="mb-6 rounded-2xl overflow-hidden border border-brand-border bg-black/60 relative h-60 sm:h-72 flex items-center justify-center">
              <img
                src={selectedService.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-xl opacity-40 scale-110"
              />
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="relative z-10 w-full h-full object-contain"
              />
            </div>

            <h4 className="text-xs font-bold tracking-widest uppercase text-brand-copper mb-3">
              Included Deliverables & Quality Standards
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
              {selectedService.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-xs font-medium text-brand-black/90 p-2.5 rounded-lg bg-white border border-brand-border/60 shadow-2xs">
                  <CheckCircle2
                    className="w-4 h-4 shrink-0 mt-0.5"
                    style={{ color: selectedService.badgeColor }}
                  />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-brand-border">
              <span className="text-xs text-brand-muted">
                Free site inspection available across Bengaluru
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    onOpenConsultation('Book Free Consultation');
                  }}
                  className="flex-1 sm:flex-none px-6 py-3 bg-brand-copper hover:bg-brand-copperLight text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-md transition-all cursor-pointer text-center"
                >
                  BOOK FREE SITE VISIT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
