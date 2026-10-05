import React, { useState, useEffect } from 'react';
import { barCounterLuxuryData } from '../../data/barCounterLuxuryData';
import { BarCounterCoverPage } from './BarCounterCoverPage';
import { BarCounterItemPage, defaultSampleBarCounter } from './BarCounterItemPage';
import { BarCounterContactPage } from './BarCounterContactPage';
import { Printer, ChevronLeft, ChevronRight, Eye, ArrowLeft, Layers, Check, Download, CheckCircle2, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BarCounterCatalogueViewer: React.FC = () => {
  const [viewMode, setViewMode] = useState<'a4-sheet' | 'presentation' | 'sample-model'>('a4-sheet');
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const totalPages = 41; // Cover (1) + 39 Models (39) + Contact (1)

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
    const text = `${modelCode} - ${modelName} (${pageNumber}) | Capsule Interiors Bar Counter`;
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
                Bar Counter Catalogue
              </span>
            </h1>
            <p className="text-[11px] text-neutral-400">
              Complete 39 Models • P/01 (CASK) to P/39 (VINTAGE) • Official Edition 2026
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
                  ? 'bg-[#C5A059] text-neutral-950 font-bold shadow'
                  : 'text-neutral-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Continuous A4 View</span>
            </button>

            <button
              onClick={() => setViewMode('presentation')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                viewMode === 'presentation'
                  ? 'bg-[#C5A059] text-neutral-950 font-bold shadow'
                  : 'text-neutral-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Slide Mode</span>
            </button>

            <button
              onClick={() => setViewMode('sample-model')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                viewMode === 'sample-model'
                  ? 'bg-[#C5A059] text-neutral-950 font-bold shadow'
                  : 'text-neutral-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <FileCheck className="w-3.5 h-3.5" />
              <span>Model P/01 (CASK)</span>
            </button>
          </div>

          {/* Download Official High-Res Print PDF */}
          <a
            href="/Capsule_Interiors_Bar_Counter_Catalogue.pdf"
            download="Capsule_Interiors_Bar_Counter_Catalogue.pdf"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md active:scale-95 border border-emerald-400/40"
            title="Download Complete 41-Page Print-Ready PDF"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Download PDF (41 Pages)</span>
            <span className="sm:hidden">PDF</span>
          </a>

          {/* Quick Print Button */}
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all border border-white/20 shadow-sm active:scale-95"
            title="Print or Save as PDF via Browser"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Print / Save PDF</span>
          </button>
        </div>
      </header>

      {/* Sub-Header / Presentation Navigation Bar */}
      {viewMode === 'presentation' && (
        <div className="no-print sticky top-[57px] z-20 bg-neutral-900/90 backdrop-blur-sm border-b border-white/10 py-2 px-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-neutral-400">Viewing Page:</span>
            <span className="font-mono font-bold text-amber-300">
              {currentPageIndex + 1} of {totalPages}
            </span>
            <span className="text-neutral-500 text-[10px]">
              {currentPageIndex === 0
                ? '(Master Cover)'
                : currentPageIndex === totalPages - 1
                ? '(Contact Page)'
                : `(${barCounterLuxuryData[currentPageIndex - 1]?.pageNumber} • ${barCounterLuxuryData[currentPageIndex - 1]?.modelName})`}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPageIndex((prev) => Math.max(prev - 1, 0))}
              disabled={currentPageIndex === 0}
              className="p-1 rounded bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white text-xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentPageIndex((prev) => Math.min(prev + 1, totalPages - 1))}
              disabled={currentPageIndex === totalPages - 1}
              className="p-1 rounded bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white text-xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Quick Model Selector Pills (Continuous Mode only) */}
      {viewMode === 'a4-sheet' && (
        <div className="no-print bg-[#131417] border-b border-white/10 px-4 py-2 overflow-x-auto text-[11px] flex items-center gap-1.5 scrollbar-thin">
          <span className="text-neutral-400 font-mono text-[10px] uppercase mr-1">Quick Jump:</span>
          <a
            href="#bar-counter-cover"
            className="px-2 py-0.5 rounded bg-white/10 text-neutral-300 hover:text-white hover:bg-white/20 whitespace-nowrap"
          >
            Cover
          </a>
          {barCounterLuxuryData.map((item) => (
            <a
              key={item.number}
              href={`#bar-counter-item-page-${item.number}`}
              className="px-2 py-0.5 rounded bg-white/5 hover:bg-brand-copper/30 text-neutral-300 hover:text-white transition-colors whitespace-nowrap font-mono"
            >
              {item.pageNumber} {item.modelName}
            </a>
          ))}
          <a
            href="#bar-counter-contact"
            className="px-2 py-0.5 rounded bg-white/10 text-neutral-300 hover:text-white hover:bg-white/20 whitespace-nowrap"
          >
            Contact
          </a>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 py-8 sm:py-12 px-2 sm:px-6 flex flex-col items-center">
        {/* MODE 1: CONTINUOUS A4 SHEET VIEW (All 41 Pages) */}
        {viewMode === 'a4-sheet' && (
          <div className="w-full flex flex-col items-center space-y-12 print:space-y-0 print:p-0">
            {/* Page 1: Master Cover */}
            <div className="w-full flex justify-center">
              <BarCounterCoverPage />
            </div>

            {/* Pages 2 to 40: 39 Unique Bar Counter Designs */}
            {barCounterLuxuryData.map((item) => (
              <div key={item.number} className="w-full flex flex-col items-center">
                {/* Floating Model Helper Tag for Digital Browsing */}
                <div className="no-print mb-2 flex items-center gap-3 text-xs text-neutral-400">
                  <span className="font-mono text-amber-300 font-bold">{item.pageNumber}</span>
                  <span className="font-extrabold text-white">{item.modelName}</span>
                  <span>•</span>
                  <span className="text-neutral-300">{item.variant}</span>
                  <button
                    onClick={() => handleCopyDesign(item.modelName, item.modelCode, item.pageNumber)}
                    className="ml-2 inline-flex items-center gap-1 text-[11px] text-[#C5A059] hover:underline"
                  >
                    {copiedItem === item.modelCode ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>Copy Ref Code</>
                    )}
                  </button>
                </div>

                <BarCounterItemPage item={item} />
              </div>
            ))}

            {/* Page 41: Contact Page */}
            <div className="w-full flex justify-center">
              <BarCounterContactPage />
            </div>
          </div>
        )}

        {/* MODE 2: PRESENTATION SLIDE MODE (1 Page at a Time) */}
        {viewMode === 'presentation' && (
          <div className="w-full max-w-4xl flex flex-col items-center">
            {currentPageIndex === 0 && <BarCounterCoverPage />}

            {currentPageIndex >= 1 && currentPageIndex <= barCounterLuxuryData.length && (
              <BarCounterItemPage item={barCounterLuxuryData[currentPageIndex - 1]} />
            )}

            {currentPageIndex === totalPages - 1 && <BarCounterContactPage />}
          </div>
        )}

        {/* MODE 3: SAMPLE MODEL INSPECTION MODE (Model P/01) */}
        {viewMode === 'sample-model' && (
          <div className="w-full max-w-4xl flex flex-col items-center">
            <div className="no-print mb-4 bg-emerald-950/60 border border-emerald-500/40 p-3 rounded-lg text-emerald-300 text-xs flex items-center gap-2 max-w-[210mm] w-full">
              <CheckCircle2 className="w-4 h-4 flex-none" />
              <span>
                <strong>Layout Verification:</strong> Inspecting <strong>P/01 (CASK)</strong> matching the exact Capsule Company design, single-column vertical highlights, framed image container, and typography.
              </span>
            </div>
            <BarCounterItemPage item={barCounterLuxuryData[0]} />
          </div>
        )}
      </main>

      {/* Print Stylesheet overrides */}
      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 0;
          }
          body {
            background: white !important;
            color: black !important;
            margin: 0 !important;
            padding: 0 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .no-print {
            display: none !important;
          }
          .catalogue-page {
            page-break-after: always !important;
            break-after: page !important;
            margin: 0 !important;
            border: none !important;
            box-shadow: none !important;
            width: 210mm !important;
            height: 297mm !important;
            min-height: 297mm !important;
            max-height: 297mm !important;
          }
        }
      `}</style>
    </div>
  );
};

export default BarCounterCatalogueViewer;
