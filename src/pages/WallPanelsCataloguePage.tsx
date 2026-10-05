import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { wallPanelsCatalogueData, WallPanelItem } from '../data/wallPanelsData';
import { ArrowLeft, ExternalLink, Download, Sparkles, ZoomIn, X, Eye, Grid } from 'lucide-react';

export const WallPanelsCataloguePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<WallPanelItem | null>(null);

  const filteredCategories = activeCategory === 'all'
    ? wallPanelsCatalogueData.categories
    : wallPanelsCatalogueData.categories.filter((c) => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-[#F7F3ED] text-[#2B241F] font-sans selection:bg-[#B86D43] selection:text-white">
      {/* Top Utility Bar */}
      <header className="sticky top-0 z-40 bg-[#F7F3ED]/95 backdrop-blur-md border-b border-[#E6DFD5] px-4 sm:px-8 py-3.5 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              to="/capsule-catalogue-index.html"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E6DFD5] text-xs font-semibold text-[#12100E] hover:border-[#B86D43] hover:text-[#B86D43] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Catalogues Index</span>
            </Link>
            <div className="hidden sm:block">
              <span className="text-xs uppercase tracking-widest font-bold text-[#B86D43]">
                Collection 2026
              </span>
              <h1 className="text-sm font-bold text-[#12100E] tracking-tight">
                Wall Panel Design Catalogue
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Capsule_Interiors_Wall_Panel_Design_Catalogue.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#12100E] text-white hover:bg-[#B86D43] transition-colors text-xs font-semibold shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF (58 MB)</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Editorial Cover */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-10 pb-8 text-center">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full p-[2px] bg-gradient-to-tr from-[#CE7F53] via-white to-[#B86D43] shadow-md flex items-center justify-center">
          <div className="w-full h-full bg-white rounded-full flex items-center justify-center p-2">
            <img src="/logo.png" alt="Capsule Company" className="w-full h-full object-contain" />
          </div>
        </div>

        <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#B86D43] mb-2 block">
          Capsule Company • Bespoke Architectural Surface Archives
        </span>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#12100E] tracking-tight mb-3">
          WALL PANEL DESIGN <br />
          <span className="italic font-normal text-[#B86D43]">Collection 2026</span>
        </h1>

        <div className="flex items-center justify-center gap-3 my-4 max-w-xs mx-auto">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#DFC0B0] to-transparent" />
          <span className="w-2 h-2 rotate-45 bg-[#B86D43]" />
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#DFC0B0] to-transparent" />
        </div>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#6B5E54] leading-relaxed mb-6">
          A definitive anthology of bespoke wall paneling systems for modern residences. Exactly 60 photographic references across 12 distinct material types sourced directly from Pinterest.
        </p>

        {/* Feature Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-semibold text-[#6B5E54]">
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#E6DFD5]">
            12 Signature Panel Categories
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#E6DFD5]">
            60 High-Resolution Photographic Designs
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#E6DFD5]">
            Verified Clean Interiors (Zero People / Zero Logos)
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#E6DFD5]">
            Preserved Pinterest Source Links
          </span>
        </div>
      </section>

      {/* Category Pills Bar */}
      <nav className="sticky top-[60px] z-30 bg-[#F7F3ED]/95 backdrop-blur-md border-y border-[#E6DFD5] py-2.5 px-4 sm:px-8 mb-8 overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto flex items-center gap-2 min-w-max">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeCategory === 'all'
                ? 'bg-[#B86D43] text-white shadow-xs'
                : 'bg-white text-[#6B5E54] border border-[#E6DFD5] hover:border-[#B86D43]'
            }`}
          >
            All 12 Categories (60)
          </button>
          {wallPanelsCatalogueData.categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeCategory === c.id
                  ? 'bg-[#B86D43] text-white shadow-xs'
                  : 'bg-white text-[#6B5E54] border border-[#E6DFD5] hover:border-[#B86D43]'
              }`}
            >
              {c.sectionNum}. {c.name}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Categories & Grids */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 pb-20 space-y-16">
        {filteredCategories.map((category) => (
          <section key={category.id} id={category.id} className="scroll-mt-32">
            {/* Section Header */}
            <div className="bg-white border border-[#E6DFD5] rounded-xl p-5 sm:p-6 mb-6 border-l-4 border-l-[#B86D43] flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs">
              <div>
                <span className="text-[11px] font-bold tracking-widest text-[#B86D43] uppercase block mb-1">
                  {category.sectionCode} • {category.tagline}
                </span>
                <h2 className="font-serif text-2xl font-semibold text-[#12100E]">
                  {category.name}
                </h2>
                <p className="text-xs sm:text-sm text-[#6B5E54] mt-1 max-w-3xl leading-relaxed">
                  {category.description}
                </p>
              </div>
              <span className="self-start md:self-auto px-3 py-1 rounded-full bg-[#F7F3ED] border border-[#E6DFD5] text-xs font-bold text-[#12100E] whitespace-nowrap">
                5 Curated Designs
              </span>
            </div>

            {/* 5 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {category.items.map((item) => (
                <article
                  key={item.id}
                  className="bg-white border border-[#E6DFD5] rounded-xl overflow-hidden shadow-xs hover:shadow-lg hover:border-[#B86D43]/40 transition-all duration-300 flex flex-col group"
                >
                  {/* Image Container with Zoom Click */}
                  <div
                    onClick={() => setSelectedItem(item)}
                    className="relative w-full aspect-[3/4] bg-[#ECE5DC] overflow-hidden cursor-pointer"
                  >
                    <span className="absolute top-2.5 left-2.5 z-10 px-2 py-0.5 rounded bg-[#12100E]/85 backdrop-blur-md text-[10px] font-mono font-bold text-white tracking-wider border border-white/10">
                      {item.refId}
                    </span>
                    <img
                      src={item.image}
                      alt={`${item.name} - ${item.category}`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute bottom-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#12100E] opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                      <ZoomIn className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#B86D43] block mb-1">
                        {item.finish}
                      </span>
                      <h3 className="font-serif text-sm font-semibold text-[#12100E] leading-snug mb-1.5">
                        {item.name}
                      </h3>
                      <p className="text-[11px] text-[#6B5E54] line-clamp-2 leading-relaxed mb-2.5">
                        {item.application}
                      </p>
                      <div className="text-[10px] text-[#9C8E84] pt-2 border-t border-dashed border-[#E6DFD5] mb-3 leading-normal">
                        {item.specs}
                      </div>
                    </div>

                    <a
                      href={item.pinterestUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md bg-[#F7F3ED] hover:bg-[#E60023] hover:text-white border border-[#E6DFD5] text-[11px] font-bold text-[#12100E] transition-all"
                      title="View original Pinterest inspiration pin"
                    >
                      <span>Pinterest Reference</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl relative"
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Enlarged Image */}
            <div className="flex-1 bg-black flex items-center justify-center overflow-hidden">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="max-h-[60vh] md:max-h-[85vh] w-auto object-contain"
              />
            </div>

            {/* Details Panel */}
            <div className="w-full md:w-80 p-6 flex flex-col justify-between bg-white overflow-y-auto">
              <div>
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#B86D43] uppercase block mb-1">
                  REF: {selectedItem.refId} • {selectedItem.sectionCode}
                </span>
                <h2 className="font-serif text-xl font-bold text-[#12100E] leading-tight mb-4">
                  {selectedItem.name}
                </h2>

                <div className="space-y-3 text-xs">
                  <div>
                    <strong className="text-[10px] uppercase tracking-wider text-[#9C8E84] block mb-0.5">
                      Material Finish:
                    </strong>
                    <p className="text-[#2B241F] font-medium">{selectedItem.finish}</p>
                  </div>
                  <div>
                    <strong className="text-[10px] uppercase tracking-wider text-[#9C8E84] block mb-0.5">
                      Recommended Application:
                    </strong>
                    <p className="text-[#6B5E54]">{selectedItem.application}</p>
                  </div>
                  <div>
                    <strong className="text-[10px] uppercase tracking-wider text-[#9C8E84] block mb-0.5">
                      Architectural Specs:
                    </strong>
                    <p className="text-[#6B5E54] bg-[#F7F3ED] p-2.5 rounded-lg border border-[#E6DFD5]">
                      {selectedItem.specs}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#E6DFD5] mt-6">
                <a
                  href={selectedItem.pinterestUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#E60023] text-white hover:bg-[#ad081b] text-xs font-bold transition-colors shadow-sm"
                >
                  <span>Open Pinterest Pin</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#151210] text-[#D6CBC1] py-12 px-4 sm:px-8 border-t border-[#B86D43]/20 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="font-serif text-xl font-bold text-white mb-2">CAPSULE COMPANY</div>
          <p className="text-xs text-[#9C8E84] max-w-md mx-auto mb-4">
            Bespoke Architectural Archives • Wall Panel Design Lookbook 2026. Exactly 60 curated designs across 12 signature categories.
          </p>
          <div className="text-[11px] text-[#6B5E54]">
            © 2026 Capsule Company. Sourced exclusively from Pinterest for interior architectural references.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WallPanelsCataloguePage;
