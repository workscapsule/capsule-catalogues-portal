import React, { useState, useEffect } from 'react';
import { modularKitchenLuxuryData } from '../../data/modularKitchenLuxuryData';
import { KitchenCoverPage } from './KitchenCoverPage';
import { KitchenItemPage } from './KitchenItemPage';
import { KitchenContactPage } from './KitchenContactPage';
import { Printer, ChevronLeft, ChevronRight, LayoutGrid, Eye, ArrowLeft, Download, Check, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const KitchenCatalogueViewer: React.FC = () => {
  const [viewMode, setViewMode] = useState<'a4-sheet' | 'presentation'>('a4-sheet');
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  // Total pages:
  // Page 0: Cover
  // Pages 1..40: 40 Kitchen Designs (MK-S01 to MK-S40)
  // Page 41: Final Contact Page
  // Total: 42 pages
  const totalDesigns = modularKitchenLuxuryData.designs.length;
  const totalPages = totalDesigns + 2;

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

  const handleCopyDesign = (name: string, code: string) => {
    const text = `${code} - ${name} | Capsule Modular Kitchen`;
    navigator.clipboard.writeText(text);
    setCopiedItem(code);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <div className="w-full min-h-screen bg-[#0E0F12] text-neutral-100 flex flex-col selection:bg-[#C59A6F] selection:text-white">
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
              <span>{modularKitchenLuxuryData.brand}</span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#C59A6F]/30 text-[#F3D7B5] border border-[#C59A6F]/40">
                Modular Kitchen Catalogue
              </span>
            </h1>
            <p className="text-[11px] text-neutral-400">
              42-Page Master Architectural Catalogue • 40 Modern Designs • A4 Print & Digital
            </p>
          </div>
        </div>

        {/* View Mode Switcher & Actions */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          {/* Jump to Design Dropdown */}
          <div className="hidden lg:flex items-center text-xs">
            <select
              value={currentPageIndex}
              onChange={(e) => {
                const targetPage = Number(e.target.value);
                setCurrentPageIndex(targetPage);
                if (viewMode === 'a4-sheet') {
                  const element = document.getElementById(`kitchen-page-block-${targetPage}`);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }
              }}
              aria-label="Jump to Kitchen Design"
              className="bg-black/50 border border-white/15 rounded-lg px-2.5 py-1.5 text-neutral-200 text-xs focus:outline-none focus:border-[#C59A6F]"
            >
              <option value={0}>Page 01: Luxury Cover</option>
              {modularKitchenLuxuryData.designs.map((d, i) => (
                <option key={d.code} value={i + 1}>
                  Page {String(i + 2).padStart(2, '0')}: {d.code} — {d.name}
                </option>
              ))}
              <option value={totalPages - 1}>Page 42: Official Contact Page</option>
            </select>
          </div>

          {/* Mode Switcher */}
          <div className="bg-black/40 p-0.5 rounded-lg border border-white/10 flex items-center text-xs">
            <button
              onClick={() => setViewMode('a4-sheet')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                viewMode === 'a4-sheet'
                  ? 'bg-[#C59A6F] text-white shadow-sm font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="A4 Continuous Document View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">A4 Document View</span>
            </button>
            <button
              onClick={() => setViewMode('presentation')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                viewMode === 'presentation'
                  ? 'bg-[#C59A6F] text-white shadow-sm font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
              title="Single Page Presentation Mode"
            >
              <Eye className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Presentation Mode</span>
            </button>
          </div>

          {/* Download PDF button */}
          <a
            href="/Capsule_Interiors_Modular_Kitchen_Catalogue.pdf"
            download="Capsule_Interiors_Modular_Kitchen_Catalogue.pdf"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#C59A6F] hover:bg-[#A37446] text-black font-bold text-xs transition-all shadow-md"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Download PDF</span>
          </a>

          {/* Print / Save to PDF */}
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold border border-white/15 transition-all"
            title="Print or Export to PDF"
          >
            <Printer className="w-3.5 h-3.5 text-[#C59A6F]" />
            <span>Print / PDF</span>
          </button>
        </div>
      </header>

      {/* Main Magazine Layout Body */}
      <main className="flex-1 py-8 px-2 sm:px-6 flex flex-col items-center">
        {/* CONTINUOUS A4 SHEET DOCUMENT VIEW */}
        {viewMode === 'a4-sheet' && (
          <div className="catalogue-print-container w-full max-w-[220mm] flex flex-col items-center gap-12 sm:gap-16">
            {/* Quick Summary Banner (Hidden during Print) */}
            <div className="no-print w-full bg-[#18191E] border border-[#C59A6F]/40 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs shadow-xl">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-[#C59A6F]/20 border border-[#C59A6F]/40 flex items-center justify-center shrink-0">
                  <FileCheck className="w-5 h-5 text-[#F3D7B5]" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">
                    Modular Kitchen Architectural Series (40 Designs)
                  </h3>
                  <p className="text-neutral-400 text-xs mt-0.5">
                    10 L-Shape • 10 Parallel • 10 Island • 10 Straight • Master TV Unit reference design system.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="px-3 py-1.5 rounded bg-black/60 text-[#C59A6F] font-mono text-xs border border-white/10 font-bold">
                  42 Pages Total
                </span>
              </div>
            </div>

            {/* Page 01: Cover */}
            <section
              id="kitchen-page-block-0"
              className="print-page-break w-full flex justify-center shadow-2xl rounded-sm"
            >
              <KitchenCoverPage />
            </section>

            {/* Pages 02..41: 40 Kitchen Design Pages */}
            {modularKitchenLuxuryData.designs.map((item, idx) => (
              <section
                key={item.code}
                id={`kitchen-page-block-${idx + 1}`}
                className="print-page-break w-full flex flex-col items-center group relative shadow-2xl rounded-sm"
              >
                {/* Screen helper pill to copy ref (Hidden during Print) */}
                <div className="no-print w-full max-w-[210mm] flex justify-end mb-2 pr-2">
                  <button
                    onClick={() => handleCopyDesign(item.name, item.code)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-black/60 hover:bg-neutral-800 text-[11px] font-mono text-neutral-300 hover:text-white border border-white/10 transition-all cursor-pointer"
                  >
                    {copiedItem === item.code ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied {item.code}</span>
                      </>
                    ) : (
                      <>
                        <span>{item.code}: {item.name}</span>
                        <span className="text-neutral-500">• Click to Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <KitchenItemPage item={item} />
              </section>
            ))}

            {/* Page 42: Final Official Contact Page */}
            <section
              id={`kitchen-page-block-${totalPages - 1}`}
              className="print-page-break w-full flex justify-center shadow-2xl rounded-sm"
            >
              <KitchenContactPage />
            </section>
          </div>
        )}

        {/* SINGLE PAGE PRESENTATION MODE */}
        {viewMode === 'presentation' && (
          <div className="w-full max-w-4xl flex flex-col items-center">
            {/* Page Navigation Bar */}
            <div className="no-print flex items-center justify-between w-full max-w-[820px] mb-4 px-2 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="font-mono text-white font-bold">
                  Page {currentPageIndex + 1} of {totalPages}
                </span>
                <span className="text-neutral-500">•</span>
                <span className="text-neutral-300">
                  {currentPageIndex === 0
                    ? 'Cover Page'
                    : currentPageIndex === totalPages - 1
                    ? 'Official Contact Page'
                    : `${modularKitchenLuxuryData.designs[currentPageIndex - 1].code} — ${modularKitchenLuxuryData.designs[currentPageIndex - 1].name}`}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  disabled={currentPageIndex === 0}
                  onClick={() => setCurrentPageIndex((prev) => Math.max(0, prev - 1))}
                  className="p-1.5 rounded bg-neutral-800 hover:bg-neutral-700 disabled:opacity-30 disabled:pointer-events-none text-white transition-colors"
                  aria-label="Previous Page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  disabled={currentPageIndex === totalPages - 1}
                  onClick={() => setCurrentPageIndex((prev) => Math.min(totalPages - 1, prev + 1))}
                  className="p-1.5 rounded bg-neutral-800 hover:bg-neutral-700 disabled:opacity-30 disabled:pointer-events-none text-white transition-colors"
                  aria-label="Next Page"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Active Display Page */}
            <div className="w-full flex justify-center shadow-2xl rounded-sm">
              {currentPageIndex === 0 ? (
                <KitchenCoverPage />
              ) : currentPageIndex === totalPages - 1 ? (
                <KitchenContactPage />
              ) : (
                <KitchenItemPage item={modularKitchenLuxuryData.designs[currentPageIndex - 1]} />
              )}
            </div>

            {/* Thumbnail Quick Navigation Bar */}
            <div className="no-print mt-6 flex items-center gap-2 overflow-x-auto p-2.5 bg-neutral-900/90 rounded-xl border border-white/10 max-w-[820px] scrollbar-none">
              <button
                onClick={() => setCurrentPageIndex(0)}
                className={`px-3 py-1.5 rounded text-xs font-semibold whitespace-nowrap transition-all ${
                  currentPageIndex === 0
                    ? 'bg-[#C59A6F] text-black font-bold shadow-sm ring-1 ring-white/30'
                    : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                }`}
              >
                Cover
              </button>
              {modularKitchenLuxuryData.designs.map((item, idx) => (
                <button
                  key={item.code}
                  onClick={() => setCurrentPageIndex(idx + 1)}
                  className={`px-2.5 py-1.5 rounded text-xs font-mono font-medium whitespace-nowrap transition-all ${
                    currentPageIndex === idx + 1
                      ? 'bg-[#C59A6F] text-black font-bold shadow-sm ring-1 ring-white/30'
                      : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                  }`}
                  title={`${item.code}: ${item.name}`}
                >
                  {item.number}
                </button>
              ))}
              <button
                onClick={() => setCurrentPageIndex(totalPages - 1)}
                className={`px-3 py-1.5 rounded text-xs font-semibold whitespace-nowrap transition-all ${
                  currentPageIndex === totalPages - 1
                    ? 'bg-[#C59A6F] text-black font-bold shadow-sm ring-1 ring-white/30'
                    : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                }`}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default KitchenCatalogueViewer;
