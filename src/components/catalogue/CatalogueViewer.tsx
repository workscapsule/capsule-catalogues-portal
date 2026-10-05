import React, { useState, useEffect } from 'react';
import { CatalogueCategoryConfig } from '../../types/catalogue';
import { CatalogueCover } from './CatalogueCover';
import { DesignPage } from './DesignPage';
import { Printer, ChevronLeft, ChevronRight, LayoutGrid, Eye, Check, Sparkles } from 'lucide-react';
import { catalogueCategoryList } from '../../data/catalogues';

interface CatalogueViewerProps {
  config: CatalogueCategoryConfig;
  onSelectCategory?: (categoryId: string) => void;
}

export const CatalogueViewer: React.FC<CatalogueViewerProps> = ({ config, onSelectCategory }) => {
  const [viewMode, setViewMode] = useState<'a4-sheet' | 'presentation'>('a4-sheet');
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0); // 0 is cover, 1..N are items
  const [copiedRef, setCopiedRef] = useState<string | null>(null);

  // Reset page index when switching catalogues
  useEffect(() => {
    setCurrentPageIndex(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [config.id]);

  const totalPages = config.items.length + 1; // Cover + items

  // Keyboard navigation for presentation mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== 'presentation') return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        setCurrentPageIndex((prev) => Math.min(prev + 1, totalPages - 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        setCurrentPageIndex((prev) => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, totalPages]);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyRef = (refId: string) => {
    navigator.clipboard.writeText(refId);
    setCopiedRef(refId);
    setTimeout(() => setCopiedRef(null), 2000);
  };

  return (
    <div className="w-full min-h-screen bg-[#121316] text-neutral-100 flex flex-col">
      {/* Top Controls Toolbar (Hidden during print) */}
      <header className="no-print sticky top-0 z-30 bg-[#1A1B1E]/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="h-8 w-auto bg-white rounded px-2 py-0.5 flex items-center">
            <img src="/assets/logo.jpeg" alt="Capsule Company" className="h-7 w-auto object-contain" />
          </div>
          <div>
            <h1 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span>{config.name} Catalogue</span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-brand-copper/30 text-brand-copperLight border border-brand-copper/40">
                Design Sample
              </span>
            </h1>
            <p className="text-[11px] text-neutral-400">
              Reference Layout: “Catalogue Straight Kitchen” • Capsule Company
            </p>
          </div>
        </div>

        {/* View Mode & Actions */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          {/* Mode Switcher */}
          <div className="bg-black/40 p-0.5 rounded-lg border border-white/10 flex items-center text-xs">
            <button
              onClick={() => setViewMode('a4-sheet')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                viewMode === 'a4-sheet'
                  ? 'bg-brand-copper text-white shadow-sm font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="A4 Multi-page Print View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">A4 Document View</span>
            </button>
            <button
              onClick={() => setViewMode('presentation')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                viewMode === 'presentation'
                  ? 'bg-brand-copper text-white shadow-sm font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="Single Page Presentation Mode"
            >
              <Eye className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Presentation Mode</span>
            </button>
          </div>

          {/* Print / Save to PDF Button */}
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium border border-white/15 transition-all shadow-sm active:scale-95"
            title="Export or Print A4 Catalogue"
          >
            <Printer className="w-4 h-4 text-brand-copperLight" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </header>

      {/* 8-Category Selector Navigation Bar (Hidden during print) */}
      <nav aria-label="Catalogue Categories" className="no-print bg-[#151619] border-b border-white/10 px-4 sm:px-8 py-2 overflow-x-auto scrollbar-none flex items-center gap-2">
        <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold shrink-0 mr-2 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-brand-copper" />
          <span>Catalogues (8):</span>
        </span>
        {catalogueCategoryList.map((cat, idx) => {
          const isActive = cat.id === config.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory && onSelectCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                isActive
                  ? 'bg-brand-copper text-white shadow-md font-semibold ring-1 ring-white/20'
                  : 'bg-neutral-800/80 hover:bg-neutral-700/80 text-neutral-300 hover:text-white border border-white/5'
              }`}
            >
              <span className="text-[10px] opacity-70 font-mono">0{idx + 1}</span>
              <span>{cat.name}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                isActive ? 'bg-black/25 text-white' : 'bg-black/40 text-neutral-400'
              }`}>
                {cat.count}
              </span>
            </button>
          );
        })}
      </nav>


      {/* Main Content Area */}
      <main className="flex-1 py-6 sm:py-10 px-3 sm:px-6 flex flex-col items-center">
        {/* A4 MULTI-PAGE OVERVIEW MODE */}
        {viewMode === 'a4-sheet' && (
          <div className="catalogue-print-container w-full max-w-4xl flex flex-col items-center gap-8 sm:gap-12">
            {/* Dynamic Catalogue Info Banner (Screen Only) */}
            <div className="no-print w-full max-w-[820px] bg-neutral-900/90 border border-brand-copper/30 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-md">
              <div className="flex items-start gap-2.5">
                <span className="p-1 rounded bg-brand-copper/20 text-brand-copper font-bold text-xs mt-0.5">
                  {config.codePrefix}
                </span>
                <div>
                  <p className="font-semibold text-white flex items-center gap-2">
                    <span>{config.name} Design Selection Catalogue</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/80">
                      {config.items.length} Designs
                    </span>
                  </p>
                  <p className="text-neutral-400 text-[11px] mt-0.5">
                    Modeled after the reference layout with A4 portrait proportions, large image focus, and clear design references.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0 flex-wrap">
                {config.id === 'modular-kitchen' && (
                  <a
                    href="/kitchen-catalogue"
                    className="px-3 py-1.5 rounded-md bg-brand-copper hover:bg-brand-copperLight text-white font-semibold text-xs transition-colors shadow-sm flex items-center gap-1.5"
                  >
                    <span>Open 34-Page Magazine Edition</span>
                    <span>→</span>
                  </a>
                )}
              </div>
            </div>

            {/* Page 0: Catalogue Cover */}
            <div className="w-full flex justify-center shadow-2xl rounded-sm">
              <CatalogueCover config={config} />
            </div>

            {/* Pages 1..N: Design Items */}
            {config.items.map((item) => (
              <div key={item.id} className="w-full flex justify-center shadow-2xl rounded-sm">
                <DesignPage item={item} categoryEyebrow={config.categoryEyebrow} />
              </div>
            ))}
          </div>
        )}

        {/* SINGLE PAGE PRESENTATION MODE */}
        {viewMode === 'presentation' && (
          <div className="w-full max-w-4xl flex flex-col items-center">
            {/* Page Navigation Indicator */}
            <div className="no-print flex items-center justify-between w-full max-w-[820px] mb-4 px-2 text-xs text-neutral-400">
              <span>
                Page {currentPageIndex + 1} of {totalPages}
              </span>
              <div className="flex items-center gap-2">
                <button
                  disabled={currentPageIndex === 0}
                  onClick={() => setCurrentPageIndex((prev) => Math.max(0, prev - 1))}
                  className="p-1.5 rounded bg-neutral-800 hover:bg-neutral-700 disabled:opacity-30 disabled:pointer-events-none text-white"
                  aria-label="Previous Page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  disabled={currentPageIndex === totalPages - 1}
                  onClick={() => setCurrentPageIndex((prev) => Math.min(totalPages - 1, prev + 1))}
                  className="p-1.5 rounded bg-neutral-800 hover:bg-neutral-700 disabled:opacity-30 disabled:pointer-events-none text-white"
                  aria-label="Next Page"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Active Display Page */}
            <div className="w-full flex justify-center shadow-2xl rounded-sm">
              {currentPageIndex === 0 ? (
                <CatalogueCover config={config} />
              ) : (
                <DesignPage
                  item={config.items[currentPageIndex - 1]}
                  categoryEyebrow={config.categoryEyebrow}
                />
              )}
            </div>

            {/* Thumbnail Navigation Bar */}
            <div className="no-print mt-6 flex items-center gap-2 overflow-x-auto p-2 bg-neutral-900/80 rounded-xl border border-white/10 max-w-[820px]">
              <button
                onClick={() => setCurrentPageIndex(0)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  currentPageIndex === 0
                    ? 'bg-brand-copper text-white ring-1 ring-white/30'
                    : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                }`}
              >
                Cover
              </button>
              {config.items.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPageIndex(idx + 1)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium font-mono whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    currentPageIndex === idx + 1
                      ? 'bg-brand-copper text-white ring-1 ring-white/30'
                      : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                  }`}
                >
                  <span>{item.refId}</span>
                  <span className="text-[10px] opacity-70 font-sans">({item.name})</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
