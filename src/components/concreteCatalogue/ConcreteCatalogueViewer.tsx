import React, { useState, useEffect } from 'react';
import { concreteUnitLuxuryData } from '../../data/concreteUnitLuxuryData';
import { ConcreteCoverPage } from './ConcreteCoverPage';
import { ConcreteItemPage, defaultSampleModel } from './ConcreteItemPage';
import { ConcreteContactPage } from './ConcreteContactPage';
import { Printer, ChevronLeft, ChevronRight, Eye, ArrowLeft, Layers, Check, Download, CheckCircle2, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ConcreteCatalogueViewer: React.FC = () => {
  const [viewMode, setViewMode] = useState<'a4-sheet' | 'presentation' | 'sample-model'>('a4-sheet');
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const totalPages = 52; // Cover (1) + 50 Models (50) + Contact (1)

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
    const text = `${modelCode} - ${modelName} (${pageNumber}) | Capsule Interiors Concrete Unit`;
    navigator.clipboard.writeText(text);
    setCopiedItem(modelCode);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <div className="w-full min-h-screen bg-[#111215] text-neutral-100 flex flex-col selection:bg-brand-copper selection:text-white">
      {/* Top Controls Toolbar (Hidden during Print) */}
      <header className="no-print sticky top-0 z-30 bg-[#18191D]/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-4 shadow-xl">
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
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-brand-copper/30 text-brand-copperLight border border-brand-copper/40">
                Concrete Unit Catalogue
              </span>
            </h1>
            <p className="text-[11px] text-neutral-400">
              Complete 50 Models • P/01 (VETRO) to P/50 (MONARCH) • Official Edition 2026
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
                  ? 'bg-brand-copper text-white shadow-sm font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="Continuous A4 Magazine Layout (All 50 Models)"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>All 50 Models (A4 View)</span>
            </button>
            <button
              onClick={() => setViewMode('presentation')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                viewMode === 'presentation'
                  ? 'bg-brand-copper text-white shadow-sm font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="Single Slide Presentation View"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Slide Mode</span>
            </button>
            <button
              onClick={() => setViewMode('sample-model')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                viewMode === 'sample-model'
                  ? 'bg-amber-600 text-white shadow-sm font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="Inspect Model P/01"
            >
              <FileCheck className="w-3.5 h-3.5" />
              <span>Model P/01 View</span>
            </button>
          </div>

          {/* Download Generated High-Res PDF */}
          <a
            href="/Capsule_Interiors_Concrete_Unit_Catalogue.pdf"
            download="Capsule_Interiors_Concrete_Unit_Catalogue.pdf"
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-100 rounded-lg text-xs font-semibold border border-white/15 transition-all shadow-sm"
          >
            <Download className="w-3.5 h-3.5 text-brand-copperLight" />
            <span className="hidden sm:inline">Download PDF</span>
          </a>

          {/* Print A4 Button */}
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-4 py-1.5 bg-brand-copper hover:bg-brand-copperDark text-white rounded-lg text-xs font-bold transition-all shadow-md active:scale-95"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print A4</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      {viewMode === 'sample-model' ? (
        /* Single Sample Model Verification View */
        <main className="flex-1 py-10 px-4 sm:px-6 md:px-8 flex flex-col items-center gap-6 max-w-5xl mx-auto w-full">
          {/* Verification Checklist Card */}
          <div className="no-print w-full max-w-[210mm] bg-neutral-900/90 border border-neutral-700 rounded-xl p-5 shadow-lg">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <h3 className="font-bold text-sm text-white">
                  Official Concrete Unit Verification (P/01: VETRO)
                </h3>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                OFFICIAL 50-MODEL EDITION
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mt-3.5 text-xs text-neutral-300">
              <div className="flex items-center gap-1.5">
                <span className="text-green-400 font-bold">✓</span>
                <span><strong>Model Name:</strong> Large, bold heading</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-green-400 font-bold">✓</span>
                <span><strong>Variant:</strong> Clear top-right position</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-green-400 font-bold">✓</span>
                <span><strong>Description:</strong> 2-4 lines readable copy</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-green-400 font-bold">✓</span>
                <span><strong>Design Highlights:</strong> Single vertical column</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-green-400 font-bold">✓</span>
                <span><strong>Model Code:</strong> CU-S1-VETRO format</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-green-400 font-bold">✓</span>
                <span><strong>Image Frame:</strong> 4-sided spacing, uncropped</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-green-400 font-bold">✓</span>
                <span><strong>Tagline:</strong> Architectural • Refined • Contemporary</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-green-400 font-bold">✓</span>
                <span><strong>Page Number:</strong> Prominent P/01 footer</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-green-400 font-bold">✓</span>
                <span><strong>Zero Overlap:</strong> Clean separated zones</span>
              </div>
            </div>
          </div>

          {/* The Single Sample Page Component */}
          <div className="w-full flex justify-center">
            <ConcreteItemPage item={defaultSampleModel} />
          </div>
        </main>
      ) : viewMode === 'a4-sheet' ? (
        /* Continuous A4 Sheet View */
        <main className="catalogue-print-container flex-1 py-10 px-4 sm:px-6 md:px-8 flex flex-col items-center gap-12 max-w-5xl mx-auto w-full">
          {/* Page 0: Cover */}
          <div id="concrete-cover" className="catalogue-item-wrapper w-full flex justify-center">
            <ConcreteCoverPage />
          </div>

          {/* Pages 1..50: 50 Concrete Unit Models (P/01 to P/50) */}
          {concreteUnitLuxuryData.map((item, idx) => (
            <div
              id={`concrete-page-${idx + 1}`}
              key={item.modelCode}
              className="catalogue-item-wrapper w-full flex flex-col items-center relative group"
            >
              <div className="no-print w-full max-w-[210mm] flex items-center justify-between text-[11px] text-neutral-400 mb-1 px-1">
                <span className="font-mono text-neutral-300">
                  Model {item.number} of 50 • Page {idx + 2} of {totalPages}
                </span>
                <button
                  onClick={() => handleCopyDesign(item.modelName, item.modelCode, item.pageNumber)}
                  className="px-2 py-0.5 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors flex items-center gap-1 text-[10px]"
                >
                  {copiedItem === item.modelCode ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <span>Copy Code</span>
                  )}
                </button>
              </div>
              <ConcreteItemPage item={item} />
            </div>
          ))}

          {/* Page 51: Final Contact Page */}
          <div id="concrete-contact" className="catalogue-item-wrapper w-full flex justify-center">
            <ConcreteContactPage />
          </div>
        </main>
      ) : (
        /* Slide Presentation Mode */
        <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8">
          <div className="w-full max-w-[210mm] flex flex-col items-center">
            <div className="no-print w-full flex items-center justify-between mb-4 bg-neutral-900/90 border border-white/10 px-4 py-2 rounded-lg text-xs">
              <button
                disabled={currentPageIndex === 0}
                onClick={() => setCurrentPageIndex((prev) => Math.max(prev - 1, 0))}
                className="flex items-center gap-1 px-3 py-1.5 rounded bg-neutral-800 hover:bg-neutral-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <div className="font-mono text-xs flex items-center gap-2">
                <span className="text-neutral-400">Slide</span>
                <span className="font-bold text-brand-copperLight text-sm">
                  {String(currentPageIndex + 1).padStart(2, '0')}
                </span>
                <span className="text-neutral-500">/ {totalPages}</span>
              </div>

              <button
                disabled={currentPageIndex === totalPages - 1}
                onClick={() => setCurrentPageIndex((prev) => Math.min(prev + 1, totalPages - 1))}
                className="flex items-center gap-1 px-3 py-1.5 rounded bg-neutral-800 hover:bg-neutral-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {currentPageIndex === 0 && <ConcreteCoverPage />}
            {currentPageIndex >= 1 && currentPageIndex <= 50 && (
              <ConcreteItemPage item={concreteUnitLuxuryData[currentPageIndex - 1]} />
            )}
            {currentPageIndex === 51 && <ConcreteContactPage />}
          </div>
        </main>
      )}
    </div>
  );
};

export default ConcreteCatalogueViewer;
