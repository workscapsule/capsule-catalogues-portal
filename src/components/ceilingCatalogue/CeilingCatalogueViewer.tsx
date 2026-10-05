import React, { useState, useEffect } from 'react';
import { ceilingLuxuryData } from '../../data/ceilingLuxuryData';
import { CeilingCoverPage } from './CeilingCoverPage';
import { CeilingItemPage, defaultSampleCeiling } from './CeilingItemPage';
import { CeilingContactPage } from './CeilingContactPage';
import { Printer, ChevronLeft, ChevronRight, Eye, ArrowLeft, Layers, Check, Download, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CeilingCatalogueViewer: React.FC = () => {
  const [viewMode, setViewMode] = useState<'a4-sheet' | 'presentation' | 'sample-model'>('a4-sheet');
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const totalModels = ceilingLuxuryData.length;
  const totalPages = totalModels + 2; // Cover (1) + Models (30) + Contact (1) = 32 pages
  const firstModelName = ceilingLuxuryData[0]?.modelName || 'AURA';
  const lastModelName = ceilingLuxuryData[totalModels - 1]?.modelName || 'SERENE';
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
    const text = `${modelCode} - ${modelName} (${pageNumber}) | Capsule Company POP Design`;
    navigator.clipboard.writeText(text);
    setCopiedItem(modelCode);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <div className="w-full min-h-screen bg-[#0E0F12] text-neutral-100 flex flex-col selection:bg-[#A3704C] selection:text-white">
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
              <span>Capsule Company</span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#C5A059]/30 text-[#E5C378] border border-[#C5A059]/40">
                POP Design Catalogue
              </span>
            </h1>
            <p className="text-[11px] text-neutral-400">
              Complete {totalModels} Curated Designs • P / 01 ({firstModelName}) to P / {lastPageStr} ({lastModelName}) • Official Edition
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
            href="/Capsule_Interiors_POP_Design_Catalogue.pdf"
            download="Capsule_Interiors_POP_Design_Catalogue.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#A3704C] hover:bg-[#8B5E3C] text-white text-xs font-bold transition-all shadow-md active:scale-95"
            title={`Download Complete ${totalPages}-Page POP PDF Catalogue`}
          >
            <Download className="w-4 h-4" />
            <span>DOWNLOAD POP CATALOG</span>
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
                  <div className="font-bold text-white text-sm">
                    Complete 32-Page POP Design Catalogue
                  </div>
                  <div className="text-neutral-400 text-xs mt-0.5">
                    1 Luxury Split Cover + 30 Curated POP Designs (CL-S01 to CL-S30) + 1 Official Contact Page
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/Capsule_Interiors_POP_Design_Catalogue.pdf"
                  download="Capsule_Interiors_POP_Design_Catalogue.pdf"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#C5A059]/20 hover:bg-[#C5A059]/30 border border-[#C5A059]/50 text-[#F0D59D] rounded-lg font-bold text-xs transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>

            {/* Page 1: Official Cover Page */}
            <div className="catalogue-page-wrapper w-full flex justify-center">
              <CeilingCoverPage />
            </div>

            {/* Pages 2 to 31: 30 Model Design Pages */}
            {ceilingLuxuryData.map((item, idx) => (
              <div key={item.number} className="catalogue-page-wrapper w-full flex flex-col items-center gap-2">
                <div className="no-print w-full max-w-[210mm] flex items-center justify-between px-2 text-[11px] text-neutral-400">
                  <span className="font-mono">
                    DESIGN {idx + 1} OF {totalModels} • {item.modelCode}
                  </span>
                  <button
                    onClick={() => handleCopyDesign(item.modelName, item.modelCode, item.pageNumber)}
                    className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    {copiedItem === item.modelCode ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>Copy Ref</>
                    )}
                  </button>
                </div>
                <CeilingItemPage item={item} />
              </div>
            ))}

            {/* Page 32: Official Contact Page */}
            <div className="catalogue-page-wrapper w-full flex justify-center">
              <CeilingContactPage />
            </div>
          </div>
        )}

        {/* MODE 2: INTERACTIVE PRESENTATION MODE */}
        {viewMode === 'presentation' && (
          <div className="w-full max-w-5xl flex flex-col items-center">
            {/* Slide Navigation Header */}
            <div className="no-print w-full flex items-center justify-between bg-[#18191E] border border-white/10 px-4 py-2.5 rounded-xl mb-6 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-mono text-neutral-400">PAGE</span>
                <span className="font-mono font-bold text-[#C5A059] text-sm">
                  {currentPageIndex + 1} / {totalPages}
                </span>
                <span className="text-neutral-500">•</span>
                <span className="text-neutral-300 font-medium">
                  {currentPageIndex === 0
                    ? 'Cover Page'
                    : currentPageIndex === totalPages - 1
                    ? 'Contact & Consultation'
                    : `${ceilingLuxuryData[currentPageIndex - 1]?.modelName} (${ceilingLuxuryData[currentPageIndex - 1]?.modelCode})`}
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setCurrentPageIndex((prev) => Math.max(prev - 1, 0))}
                  disabled={currentPageIndex === 0}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none text-white transition-all"
                  title="Previous Page (Left Arrow)"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentPageIndex((prev) => Math.min(prev + 1, totalPages - 1))}
                  disabled={currentPageIndex === totalPages - 1}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none text-white transition-all"
                  title="Next Page (Right Arrow)"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Current Slide Display */}
            <div className="w-full flex justify-center transition-all duration-300">
              {currentPageIndex === 0 && <CeilingCoverPage />}
              {currentPageIndex > 0 && currentPageIndex <= totalModels && (
                <CeilingItemPage item={ceilingLuxuryData[currentPageIndex - 1]} />
              )}
              {currentPageIndex === totalPages - 1 && <CeilingContactPage />}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CeilingCatalogueViewer;
