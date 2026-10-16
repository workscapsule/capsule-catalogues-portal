import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Search, Phone, MessageSquare, HelpCircle, ArrowRight } from 'lucide-react';
import { faqData } from '../data/faqData';
import { companyConfig } from '../config/company';
import { ConsultationForm } from '../components/sections/ConsultationForm';

export const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'General', 'Construction', 'Interiors', 'Consultation', 'Process'];

  const filteredFaqs = faqData.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || item.category?.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 sm:pt-28 pb-16 w-full">
      {/* Header Banner */}
      <div className="bg-brand-black text-white py-14 sm:py-20 relative overflow-hidden border-b border-brand-copper/30">
        <div className="absolute inset-0 bg-[radial-gradient(#B86D43_1px,transparent_1px)] [background-size:28px_28px] opacity-15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-brand-copper uppercase mb-3">
            <Link to="/" className="hover:underline">HOME</Link>
            <span>/</span>
            <span>FAQ</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase max-w-3xl leading-tight">
            FREQUENTLY ASKED <span className="text-brand-copper">QUESTIONS</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
            Clear, honest answers about our construction process, interior timelines, pricing structure, material warranties, and free site inspections in Bengaluru.
          </p>
        </div>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg border border-brand-border space-y-4">

          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, service, material, or keyword..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-brand-ivory border border-brand-border focus:border-brand-copper focus:ring-1 focus:ring-brand-copper text-xs sm:text-sm font-medium outline-none transition-all"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${selectedCategory === cat
                    ? 'bg-brand-black text-white shadow-xs'
                    : 'bg-brand-ivory hover:bg-brand-cream text-brand-black/80 border border-brand-border/60'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Accordion FAQ List */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-brand-border overflow-hidden transition-all duration-200 shadow-2xs hover:border-brand-copper/50"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-display text-sm sm:text-base font-bold text-brand-black uppercase leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-brand-ivory border border-brand-border flex items-center justify-center shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 bg-brand-copper text-white border-brand-copper' : 'text-brand-muted'
                    }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {openIndex === idx && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-brand-muted leading-relaxed border-t border-brand-border/60 pt-4 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-brand-border p-8">
              <HelpCircle className="w-10 h-10 text-brand-copper mx-auto mb-3" />
              <h3 className="font-display text-base font-bold uppercase text-brand-black">No matching questions found</h3>
              <p className="text-xs text-brand-muted mt-1">Try a different search term or connect with our team directly.</p>
            </div>
          )}
        </div>

        {/* Ask Question Strip */}
        <div className="mt-12 rounded-2xl bg-brand-ivory border border-brand-border p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-base sm:text-lg font-bold uppercase text-brand-black">
              Have a specific question not listed here?
            </h3>
            <p className="text-xs text-brand-muted mt-1">
              Speak directly with our Bengaluru structural engineers and interior planners.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-2 w-full lg:w-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:flex lg:flex-wrap items-center gap-2">
              {companyConfig.phones.map((p, idx) => (
                <a
                  key={p.number}
                  href={`tel:${p.raw}`}
                  className="px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-full bg-brand-black text-white text-[11px] sm:text-xs font-bold tracking-wider hover:bg-brand-copper transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap active:scale-95"
                  title={`Call Line ${idx + 1}: ${p.display}`}
                >
                  <Phone className="w-3.5 h-3.5 text-brand-copper shrink-0" />
                  <span>{p.display}</span>
                </a>
              ))}
            </div>
            <a
              href={`https://wa.me/${companyConfig.whatsappNumber}?text=${encodeURIComponent('Hi Capsule Company, I have a question regarding my project.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#1ebd5b] transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Consultation Form */}
      <div className="mt-16">
        <ConsultationForm />
      </div>
    </div>
  );
};
