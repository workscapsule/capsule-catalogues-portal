import React, { useState, useEffect } from 'react';
import { tvUnitLuxuryData } from '../../data/tvUnitLuxuryData';
import { TVUnitCoverPage } from './TVUnitCoverPage';
import { TVUnitItemPage, defaultSampleTVUnit } from './TVUnitItemPage';
import { TVUnitContactPage } from './TVUnitContactPage';
import { Printer, ChevronLeft, ChevronRight, Eye, ArrowLeft, Layers, Check, Download, CheckCircle2, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TVUnitCatalogueViewer: React.FC = () => {
  const [viewMode, setViewMode] = useState<'a4-sheet' | 'presentation' | 'sample-model'>('a4-sheet');
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const totalModels = tvUnitLuxuryData.length;
  const totalPages = totalModels + 2; // Cover (1) + Models + Contact (1)
  const firstModelName = tvUnitLuxuryData[0]?.modelName || 'VISTA';
  const lastModelName = tvUnitLuxuryData[totalModels - 1]?.modelName || 'METROPOLITAN';
  const lastPageStr = String(totalModels).padStart(2, '0');

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

  const handleCopyDesign = (modelName: string, modelCode: string, pageNumber: string) => {
    const text = `${modelCode} - ${modelName} (${pageNumber}) | Capsule Interiors TV Unit`;
    navigator.clipboard.writeText(text);
    setCopiedItem(modelCode);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <div className="w-full min-h-screen bg-[#0E0F12] text-neutral-100 flex flex-col selection:bg-brand-copper selection:text-white">
      {/* Top Controls Toolbar (Hidden during Print) */}
      <header className="no-print sticky top-0 z-30 bg-[#16171B]/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            to="/"
            className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors mr-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden md:inline">Back to Website</span>
          </Link>

          <div className="h-9 w-9 bg-white rounded p-0.5 flex items-center justify-center shadow-sm">
            <img
              src="/assets/logo.jpeg"
              alt="Capsule Logo"
              className="h-full w-full object-contain"
            />
          </div>

          <div>
            <h1 className="text-sm sm:text-base font-extrabold text-white flex items-center gap-2 font-display tracking-tight">
              <span>Capsule Interiors</span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#C5A059]/30 text-[#E5C378] border border-[#C5A059]/40">
                TV Unit Catalogue
              </span>
            </h1>
            <p className="text-[11px] text-neutral-400">
              Complete {totalModels} Designs • P/01 ({firstModelName}) to P/{lastPageStr} ({lastModelName}) • Official Edition 2026
            </p>
          </div>
        </div>

        {/* View Mode Switcher & Actions */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          {/* Mode Switcher Tabs */}
          <div className="bg-black/50 p-1 rounded-lg border border-white/15 flex items-center text-xs">
            <button
              onClick={() => setViewMode('a4-sheet')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                viewMode === 'a4-sheet'
                  ? 'bg-neutral-800 text-white font-bold shadow-xs border border-white/10'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title={`All ${totalPages} Pages Sequential A4 Sheet View`}
            >
              <Layers className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="hidden sm:inline">A4 Magazine View</span>
            </button>

            <button
              onClick={() => setViewMode('presentation')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                viewMode === 'presentation'
                  ? 'bg-neutral-800 text-white font-bold shadow-xs border border-white/10'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="Interactive Slide Presentation Mode"
            >
              <Eye className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="hidden sm:inline">Presentation Mode</span>
            </button>
          </div>

          {/* Direct Download Complete PDF Button */}
          <a
            href="/Capsule_Interiors_TV_Unit_Catalogue.pdf"
            download="Capsule_Interiors_TV_Unit_Catalogue.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#A3704C] hover:bg-[#8B5E3C] text-white text-xs font-bold transition-all shadow-md active:scale-95"
            title={`Download Complete ${totalPages}-Page TV Unit PDF Catalogue`}
          >
            <Download className="w-4 h-4" />
            <span>DOWNLOAD TV UNIT CATALOG</span>
          </a>

          {/* Print / Save to PDF Button */}
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium border border-white/15 transition-all shadow-xs active:scale-95"
            title="Export or Print A4 Catalogue"
          >
            <Printer className="w-4 h-4 text-[#C5A059]" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </header>

      {/* Main Content Render Area */}
      <main className="flex-1 py-8 px-2 sm:px-6 flex flex-col items-center">
        {/* MODE 1: A4 MULTI-PAGE MAGAZINE OVERVIEW MODE */}
        {viewMode === 'a4-sheet' && (
          <div className="catalogue-print-container w-full max-w-[220mm] flex flex-col items-center gap-12 sm:gap-16">
            {/* Top Quick Info Notification Banner */}
            <div className="no-print w-full bg-[#18191E] border border-[#C5A059]/40 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs shadow-xl">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center shrink-0">
                  <FileCheck className="w-5 h-5 text-[#E5C378]" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">
                    Complete {totalModels} TV Unit Catalogue • Ready for Sharing & Print
                  </h3>
                  <p className="text-neutral-400 text-xs mt-0.5">
                    Authentic images, small design names, short descriptions, and clean bullet highlights.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="/Capsule_Interiors_TV_Unit_Catalogue.pdf"
                  download="Capsule_Interiors_TV_Unit_Catalogue.pdf"
                  className="px-4 py-2 rounded-md bg-[#C5A059] hover:bg-[#B38D48] text-black font-bold text-xs flex items-center gap-1.5 transition-all shadow-md"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white font-medium text-xs flex items-center gap-1.5 transition-all border border-white/10"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Document</span>
                </button>
              </div>
            </div>

            {/* 1. Cover Page */}
            <section className="print-page-break w-full flex justify-center">
              <TVUnitCoverPage />
            </section>

            {/* 2. All Model Pages Sequentially */}
            {tvUnitLuxuryData.map((model) => (
              <section
                key={model.number}
                className="print-page-break w-full flex flex-col items-center group relative"
              >
                {/* Screen helper pill to copy ref */}
                <div className="no-print w-full max-w-[210mm] flex justify-end mb-2 pr-2">
                  <button
                    onClick={() => handleCopyDesign(model.modelName, model.modelCode, model.pageNumber)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-black/60 hover:bg-neutral-800 text-[11px] font-mono text-neutral-300 hover:text-white border border-white/10 transition-all cursor-pointer"
                  >
                    {copiedItem === model.modelCode ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied {model.modelCode}</span>
                      </>
                    ) : (
                      <>
                        <span>Model {model.number}: {model.modelCode}</span>
                        <span className="text-neutral-500">• Click to Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <TVUnitItemPage item={model} />
              </section>
            ))}

            {/* 3. Back Contact Page */}
            <section className="print-page-break w-full flex justify-center">
              <TVUnitContactPage />
            </section>
          </div>
        )}

        {/* MODE 2: SINGLE-PAGE PRESENTATION MODE */}
        {viewMode === 'presentation' && (
          <div className="w-full max-w-4xl flex flex-col items-center">
            {/* Top Presentation Navigation Toolbar */}
            <div className="w-full max-w-[210mm] bg-[#18191E] border border-white/15 rounded-xl px-4 py-3 mb-6 flex items-center justify-between shadow-xl">
              <button
                onClick={() => setCurrentPageIndex((prev) => Math.max(prev - 1, 0))}
                disabled={currentPageIndex === 0}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 disabled:opacity-30 disabled:pointer-events-none text-xs text-white transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-neutral-400">
                  Page <strong className="text-white">{currentPageIndex + 1}</strong> of {totalPages}
                </span>
                <span className="text-neutral-600">•</span>
                <span className="text-xs text-[#E5C378] font-bold">
                  {currentPageIndex === 0
                    ? 'Cover Page'
                    : currentPageIndex === totalPages - 1
                    ? 'Contact & Info'
                    : tvUnitLuxuryData[currentPageIndex - 1]?.modelCode}
                </span>
              </div>

              <button
                onClick={() => setCurrentPageIndex((prev) => Math.min(prev + 1, totalPages - 1))}
                disabled={currentPageIndex === totalPages - 1}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 disabled:opacity-30 disabled:pointer-events-none text-xs text-white transition-all"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Slide Page Content */}
            <div className="w-full flex justify-center shadow-2xl rounded-sm overflow-hidden">
              {currentPageIndex === 0 && <TVUnitCoverPage />}
              {currentPageIndex > 0 && currentPageIndex < totalPages - 1 && (
                <TVUnitItemPage item={tvUnitLuxuryData[currentPageIndex - 1]} />
              )}
              {currentPageIndex === totalPages - 1 && <TVUnitContactPage />}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default TVUnitCatalogueViewer;
