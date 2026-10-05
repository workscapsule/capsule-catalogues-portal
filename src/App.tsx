import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Preloader } from './components/common/Preloader';
import { NoiseOverlay } from './components/common/NoiseOverlay';
import { ScrollToTop } from './components/common/ScrollToTop';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/interactive/WhatsAppButton';
import { Chatbot } from './components/interactive/Chatbot';
import { ProjectModal } from './components/interactive/ProjectModal';
import { EnquiryModal } from './components/interactive/EnquiryModal';
import { ProjectItem, EnquirySource } from './types';

// Dedicated Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProcessPage } from './pages/ProcessPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { GalleryPage } from './pages/GalleryPage';
import { WhyCapsulePage } from './pages/WhyCapsulePage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { WallPanelsCataloguePage } from './pages/WallPanelsCataloguePage';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquirySource, setEnquirySource] = useState<EnquirySource>('Free Consultation');

  const handleOpenConsultation = (arg?: unknown) => {
    let source: EnquirySource = 'Free Consultation';
    if (typeof arg === 'string') {
      if (arg === 'Book Free Consultation' || arg === 'Free Consultation' || arg === 'Get Free Estimate') {
        source = arg;
      } else if (arg.toLowerCase().includes('estimate')) {
        source = 'Get Free Estimate';
      } else if (arg.toLowerCase().includes('book')) {
        source = 'Book Free Consultation';
      }
    } else if (arg && typeof arg === 'object') {
      const obj = arg as Record<string, any>;
      const text = `${obj.subject || ''} ${obj.source || ''}`.toLowerCase();
      if (text.includes('estimate')) {
        source = 'Get Free Estimate';
      } else if (text.includes('book')) {
        source = 'Book Free Consultation';
      }
    }
    setEnquirySource(source);
    setIsEnquiryOpen(true);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen w-full flex flex-col bg-brand-ivory text-brand-black relative selection:bg-brand-copper selection:text-white overflow-x-clip">
        {/* Scroll To Top on Route Changes */}
        <ScrollToTop />

        {/* 1. Architectural Preloader Reveal */}
        <Preloader />

        {/* 2. Tactile Film Grain Texture Overlay */}
        <NoiseOverlay />

        {/* 3. Sticky Glassmorphism Header */}
        <Header onOpenConsultation={() => handleOpenConsultation('Free Consultation')} />

        {/* Main Content Area Routing */}
        <main className="flex-1 w-full">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenConsultation={handleOpenConsultation}
                  onSelectProject={(p) => setSelectedProject(p)}
                />
              }
            />
            <Route
              path="/about"
              element={<AboutPage onOpenConsultation={handleOpenConsultation} />}
            />
            <Route
              path="/services"
              element={<ServicesPage onOpenConsultation={handleOpenConsultation} />}
            />
            <Route
              path="/process"
              element={<ProcessPage onOpenConsultation={handleOpenConsultation} />}
            />
            <Route
              path="/projects"
              element={
                <ProjectsPage
                  onSelectProject={(p) => setSelectedProject(p)}
                  onOpenConsultation={handleOpenConsultation}
                />
              }
            />
            <Route
              path="/gallery"
              element={<GalleryPage onOpenConsultation={handleOpenConsultation} />}
            />
            <Route
              path="/why-capsule"
              element={<WhyCapsulePage onOpenConsultation={handleOpenConsultation} />}
            />
            <Route path="/faq" element={<FAQPage />} />
            <Route
              path="/contact"
              element={<ContactPage onOpenConsultation={handleOpenConsultation} />}
            />
            <Route path="/wall-panels-catalogue" element={<WallPanelsCataloguePage />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer with Routing Links */}
        <Footer onOpenConsultation={() => handleOpenConsultation('Free Consultation')} />

        {/* Floating Interactive Utilities */}
        <WhatsAppButton />
        <Chatbot onOpenConsultationModal={() => handleOpenConsultation('Book Free Consultation')} />

        {/* Project Lightbox Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onConsultation={() => {
            setSelectedProject(null);
            handleOpenConsultation('Book Free Consultation');
          }}
        />

        {/* Unified 6-Field Enquiry Modal */}
        <EnquiryModal
          isOpen={isEnquiryOpen}
          onClose={() => setIsEnquiryOpen(false)}
          initialSource={enquirySource}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
