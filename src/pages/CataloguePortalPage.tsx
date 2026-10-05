import React, { useState, useMemo } from 'react';
import { Search, Phone, Mail, Globe, MapPin, ArrowUpRight, FileText } from 'lucide-react';

export interface CatalogueItem {
  id: string;
  numberBadge: string;
  category: string;
  title: string;
  tag: string;
  caption: string;
  pages: number;
  fileSize: string;
  pdfUrl: string;
  coverImage: string;
  keywords: string;
}

export const catalogueItems: CatalogueItem[] = [
  {
    id: 'wardrobe',
    numberBadge: '01 / Storage',
    category: 'bedroom',
    title: 'Wardrobe',
    tag: 'Storage Architecture',
    caption: 'Sliding-door, walk-in, and hinged wardrobe systems with luxury finishes, integrated lighting, and organizers.',
    pages: 32,
    fileSize: '4.25 MB',
    pdfUrl: '/Capsule_Interiors_Wardrobe_Catalogue.pdf',
    coverImage: '/covers/wardrobe-cover-reference.jpg',
    keywords: 'wardrobe closets storage sliding walk-in bedroom',
  },
  {
    id: 'modular-kitchen',
    numberBadge: '02 / Kitchen',
    category: 'kitchen',
    title: 'Modular Kitchen',
    tag: 'Culinary Spaces',
    caption: 'L-shaped, parallel, island, and straight layout kitchens with German mechanisms and quartz surfaces.',
    pages: 42,
    fileSize: '9.99 MB',
    pdfUrl: '/Capsule_Interiors_Modular_Kitchen_Catalogue.pdf',
    coverImage: '/covers/kitchen-cover-reference.jpg',
    keywords: 'modular kitchen island parallel l-shape cabinetry quartz dining',
  },
  {
    id: 'bedrooms',
    numberBadge: '03 / Suites',
    category: 'bedroom',
    title: 'Bedrooms',
    tag: 'Rest & Suites',
    caption: 'Modern master suites, hydraulic storage bedframes, upholstered headboards, and vibrant kids bedrooms.',
    pages: 42,
    fileSize: '7.22 MB',
    pdfUrl: '/Capsule_Interiors_Kids_Bed_Catalogue.pdf',
    coverImage: '/covers/kids-bed-cover-reference.png',
    keywords: 'bedrooms beds kids master bedroom hydraulic storage',
  },
  {
    id: 'tv-units',
    numberBadge: '04 / Media',
    category: 'living',
    title: 'TV Units',
    tag: 'Living & Media',
    caption: 'Architectural entertainment walls, fluted wall panels, floating consoles, and hidden cable management.',
    pages: 50,
    fileSize: '7.22 MB',
    pdfUrl: '/Capsule_Interiors_TV_Unit_Catalogue.pdf',
    coverImage: '/covers/tv-unit-cover-reference.jpg',
    keywords: 'tv units entertainment media consoles fluted panels living',
  },
  {
    id: 'bar-counter',
    numberBadge: '05 / Lounge',
    category: 'living',
    title: 'Bar Counter',
    tag: 'Hospitality',
    caption: 'Bespoke home bar lounges, backlit bottle display shelves, stemware racks, and solid acrylic service counters.',
    pages: 41,
    fileSize: '7.29 MB',
    pdfUrl: '/Capsule_Interiors_Bar_Counter_Catalogue.pdf',
    coverImage: '/covers/bar-counter-cover-reference.jpg',
    keywords: 'bar counter lounge drinks stemware wine bottle rack living',
  },
  {
    id: 'temple-design',
    numberBadge: '06 / Sacred',
    category: 'sacred',
    title: 'Temple Design',
    tag: 'Sacred Architecture',
    caption: 'Vastu-aligned pooja mandirs, CNC jali screen carvings, brass embellishments, and artisanal solid wood sanctuaries.',
    pages: 44,
    fileSize: '7.11 MB',
    pdfUrl: '/Capsule_Interiors_Temple_Design_Catalogue.pdf',
    coverImage: '/covers/temple-homepage-reference.jpg',
    keywords: 'temple design pooja mandir sacred cnc jali vastu',
  },
  {
    id: 'pop-ceiling',
    numberBadge: '07 / Ceiling',
    category: 'sacred',
    title: 'POP',
    tag: 'Ceiling Architecture',
    caption: 'Architectural false ceilings, perimeter cove lighting profiles, wooden rafter accents, and gypsum geometric plans.',
    pages: 32,
    fileSize: '10.64 MB',
    pdfUrl: '/Capsule_Interiors_POP_Design_Catalogue.pdf',
    coverImage: '/covers/pop-cover-reference.jpg',
    keywords: 'pop false ceiling lighting gypsum cove light rafters sacred',
  },
  {
    id: 'crockery-unit',
    numberBadge: '08 / Dining',
    category: 'kitchen',
    title: 'Crockery Unit',
    tag: 'Dining & Display',
    caption: 'Bespoke dining sideboards, fluted and tempered glass display cabinetry, integrated LED strips, and fine storage.',
    pages: 52,
    fileSize: '8.11 MB',
    pdfUrl: '/Capsule_Interiors_Concrete_Unit_Catalogue.pdf',
    coverImage: '/covers/concrete-cover-reference.jpg',
    keywords: 'crockery unit dining display glass sideboard cabinet kitchen',
  },
  {
    id: 'wall-panel-design',
    numberBadge: '09 / Surfaces',
    category: 'wall-panel',
    title: 'Wall Panel Design',
    tag: 'Architectural Surfaces',
    caption: 'Fluted, wooden, WPC, 3D, CNC cut, geometric, marble, stone, paint texture, PU, louvers, and decorative feature panels for luxury interiors.',
    pages: 62,
    fileSize: '76.4 MB',
    pdfUrl: '/Capsule_Interiors_Wall_Panel_Design_Catalogue.pdf',
    coverImage: '/covers/wall-panel-cover-reference.jpg',
    keywords: 'wall panel design fluted wooden wpc 3d cnc cut geometric marble stone paint texture pu louvers decorative panels 2026',
  },
  {
    id: 'wooden-flooring',
    numberBadge: '10 / Flooring',
    category: 'flooring',
    title: 'Wooden Flooring',
    tag: 'Architectural Flooring',
    caption: 'Handcrafted European oak planks, artisanal Versailles marquetry, French chevron, herringbone, and sustainable bamboo & cork flooring systems.',
    pages: 32,
    fileSize: '5.52 MB',
    pdfUrl: '/Capsule_Company_Wooden_Flooring_Catalogue.pdf',
    coverImage: '/covers/wooden-flooring-cover-reference.jpg',
    keywords: 'wooden flooring hardwood parquet chevron herringbone oak walnut teak bamboo cork engineered floor 2026',
  },
  {
    id: 'wall-fabric',
    numberBadge: '11 / Textiles',
    category: 'fabric',
    title: 'Wall Fabric',
    tag: 'Architectural Textiles',
    caption: 'Acoustic upholstered wall panels, Belgian linen textures, plush velvet wall coverings, luxury quilted headboards, and sound-dampening architectural weaves.',
    pages: 40,
    fileSize: '5.75 MB',
    pdfUrl: '/Capsule_Company_Wall_Fabric_Catalogue.pdf',
    coverImage: '/covers/wall-fabric-cover-reference.jpg',
    keywords: 'wall fabric acoustic upholstery upholstered panels velvet bouclé linen silk headboard sound absorption 2026',
  },
  {
    id: 'vinyl-flooring',
    numberBadge: '12 / Flooring',
    category: 'vinyl',
    title: 'Vinyl Flooring',
    tag: 'Architectural Flooring',
    caption: 'Luxury Vinyl Tile (LVT), Rigid Core Stone Plastic Composite (SPC), French chevron, waterproof marble looks, and high-traffic acoustic flooring systems.',
    pages: 32,
    fileSize: '4.85 MB',
    pdfUrl: '/Capsule_Company_Vinyl_Flooring_Catalogue.pdf',
    coverImage: '/covers/vinyl-flooring-cover-reference.jpg',
    keywords: 'vinyl flooring lvt spc rigid core luxury vinyl tile stone plastic composite chevron herringbone waterproof 2026',
  },
  {
    id: 'paint-texture-wall',
    numberBadge: '13 / Walls',
    category: 'paint',
    title: 'Paint Texture Wall',
    tag: 'Architectural Finishes',
    caption: 'Sculptural 3D bas-relief panels, Italian mineral stucco plasters, authentic reclaimed brick masonry, and bespoke architectural wall murals.',
    pages: 35,
    fileSize: '5.82 MB',
    pdfUrl: '/Capsule_Company_Paint_Texture_Catalogue.pdf',
    coverImage: '/covers/paint-texture-cover-reference.jpg',
    keywords: 'paint texture wall stucco bas-relief concrete brick venetian lime plaster mural 2026',
  },
  {
    id: 'wooden-polish',
    numberBadge: '14 / Polish',
    category: 'polish',
    title: 'Wooden Polish',
    tag: 'Architectural Finishes',
    caption: 'Artisanal polyurethane polishes, Italian polyester mirror high-gloss, natural botanical hardwax oils, and bespoke architectural woodwork finishes.',
    pages: 26,
    fileSize: '4.39 MB',
    pdfUrl: '/Capsule_Company_Wooden_Polish_Catalogue.pdf',
    coverImage: '/covers/wooden-polish-cover-reference.jpg',
    keywords: 'wooden polish wood polish pu polyurethane polyester mirror high gloss melamine hardwax oil french polish teak walnut oak lacquer 2026',
  },
  {
    id: 'upvc-windows-doors',
    numberBadge: '15 / Fenestration',
    category: 'upvc',
    title: 'UPVC Windows & Doors',
    tag: 'Architectural Fenestration',
    caption: 'High-performance sliding patio doors, bi-fold concertina glass systems, acoustic casement & tilt-turn windows, and wood-finish entries.',
    pages: 51,
    fileSize: '9.47 MB',
    pdfUrl: '/Capsule_Company_UPVC_Windows_Doors_Catalogue.pdf',
    coverImage: '/covers/upvc-windows-doors-cover-reference.jpg',
    keywords: 'upvc windows doors sliding patio bi-fold casement tilt turn french architectural fenestration glass 2026',
  },
  {
    id: 'mini-home-theater',
    numberBadge: '16 / Cinema',
    category: 'theater',
    title: 'Mini Home Theater',
    tag: 'Cinematic Architecture',
    caption: 'Acoustic fabric wall paneling, fiber-optic starry night ceilings, motorized recliners, and calibrated Dolby Atmos sound chambers.',
    pages: 17,
    fileSize: '3.21 MB',
    pdfUrl: '/Capsule_Company_Mini_Home_Theater_Catalogue.pdf',
    coverImage: '/covers/mini-home-theater-cover-reference.jpg',
    keywords: 'mini home theater cinema acoustic panels soundproofing starlight star ceiling dolby atmos recliner oled projector 2026 living',
  },
  {
    id: 'lighting-design',
    numberBadge: '17 / Illumination',
    category: 'lighting',
    title: 'Lighting & Fixtures',
    tag: 'Architectural Illumination',
    caption: 'Seamless architectural profile lights, luxury crystal statement chandeliers, and IP65+ weather-sealed outdoor facade luminaires.',
    pages: 50,
    fileSize: '38.9 MB',
    pdfUrl: '/Capsule_Company_Lighting_Design_Catalogue.pdf',
    coverImage: '/covers/lighting-design-cover-reference.jpg',
    keywords: 'lighting fixtures profile lights chandeliers outdoor landscape linear led magnetic pendant sconce bollard 2026',
  },
];

const categories = [
  { id: 'all', label: 'All Collections (17)' },
  { id: 'lighting', label: 'Lighting & Fixtures' },
  { id: 'theater', label: 'Mini Home Theater' },
  { id: 'upvc', label: 'UPVC Windows & Doors' },
  { id: 'wall-panel', label: 'Wall Panels' },
  { id: 'paint', label: 'Paint Texture' },
  { id: 'polish', label: 'Wooden Polish' },
  { id: 'flooring', label: 'Wooden Flooring' },
  { id: 'vinyl', label: 'Vinyl Flooring' },
  { id: 'fabric', label: 'Wall Fabric' },
  { id: 'kitchen', label: 'Kitchen & Dining' },
  { id: 'bedroom', label: 'Bedrooms & Storage' },
  { id: 'living', label: 'Living & Lounges' },
  { id: 'sacred', label: 'Sacred & Ceilings' },
];

export const CataloguePortalPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return catalogueItems.filter((item) => {
      const q = searchQuery.toLowerCase().trim();
      const matchCat =
        activeCategory === 'all' ||
        item.category === activeCategory ||
        item.keywords.includes(activeCategory);
      const matchSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.caption.toLowerCase().includes(q) ||
        item.tag.toLowerCase().includes(q) ||
        item.keywords.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#F7F3ED] text-[#2B241F] font-sans selection:bg-[#B86D43] selection:text-white">
      {/* Luxury Lookbook Top Header */}
      <header className="sticky top-0 z-40 bg-[#F7F3ED]/90 backdrop-blur-md border-b border-[#E5DDD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-[#B86D43]/20 p-1 flex items-center justify-center shadow-xs">
              <img src="/logo.png" alt="Capsule Company" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="font-serif text-base sm:text-lg font-bold tracking-tight text-[#12100E] leading-tight">
                CAPSULE COMPANY
              </div>
              <div className="text-[10px] tracking-widest text-[#B86D43] font-bold uppercase">
                DIGITAL DESIGN CATALOGUES
              </div>
            </div>
          </a>

          <a
            href="tel:9187924723"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#B86D43]/30 bg-[#B86D43]/10 text-xs sm:text-sm font-bold text-[#B86D43] hover:bg-[#B86D43] hover:text-white transition-all shadow-xs"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>9187924723</span>
          </a>
        </div>
      </header>

      {/* Editorial Hero */}
      <section className="pt-12 pb-8 sm:pt-16 sm:pb-12 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-block p-2 rounded-2xl bg-white/80 border border-[#B86D43]/20 shadow-sm mb-6">
          <img src="/logo.png" alt="Capsule Monogram" className="w-12 h-12 object-contain mx-auto" />
        </div>

        <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#B86D43] mb-2">
          Bespoke Architectural Archives
        </p>

        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#12100E] tracking-tight mb-4">
          Design Collections <br />
          <span className="italic text-[#B86D43] font-serif">Volume 2026</span>
        </h1>

        <div className="flex items-center justify-center gap-3 my-5">
          <span className="h-px w-16 bg-[#B86D43]/30"></span>
          <span className="w-2 h-2 rotate-45 bg-[#B86D43]"></span>
          <span className="h-px w-16 bg-[#B86D43]/30"></span>
        </div>

        <p className="text-sm sm:text-base text-[#6B5E54] max-w-2xl mx-auto leading-relaxed">
          A curated anthology of handcrafted interior woodwork, luxury modular kitchens, bespoke master suites, and architectural living systems. Click any collection to view its original full-resolution PDF.
        </p>
      </section>

      {/* Filter and Search Controls */}
      <section className="sticky top-18 sm:top-20 z-30 bg-[#F7F3ED]/95 backdrop-blur-md py-3 border-y border-[#E5DDD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#B86D43] text-white shadow-xs'
                    : 'bg-white/80 text-[#6B5E54] hover:bg-white hover:text-[#12100E] border border-[#E5DDD3]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-[#9C8E84] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search catalogues..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-1.5 rounded-full bg-white text-xs border border-[#E5DDD3] focus:outline-none focus:ring-2 focus:ring-[#B86D43]/40 placeholder:text-[#9C8E84]"
            />
          </div>
        </div>
      </section>

      {/* Lookbook 17-Catalogue Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <a
              key={item.id}
              href={item.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden border border-[#E5DDD3] hover:border-[#B86D43]/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col"
            >
              {/* Cover Image Canvas */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                <img
                  src={item.coverImage}
                  alt={`${item.title} Catalogue Cover`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                
                <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                  {item.numberBadge}
                </span>

                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#12100E] text-[11px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 shadow-xs">
                  <FileText className="w-3 h-3 text-[#B86D43]" />
                  <span>{item.pages} Pages</span>
                </span>
              </div>

              {/* Item Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] tracking-widest uppercase font-bold text-[#B86D43] block mb-1">
                    {item.tag}
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#12100E] mb-2 group-hover:text-[#B86D43] transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#6B5E54] line-clamp-3 leading-relaxed mb-4">
                    {item.caption}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-[11px] text-[#9C8E84] pb-4 border-b border-[#E5DDD3] font-medium">
                    <span>{item.pages} Pages</span>
                    <span>•</span>
                    <span>{item.fileSize}</span>
                    <span>•</span>
                    <span>Original PDF</span>
                  </div>

                  <div className="pt-3.5 flex items-center justify-between text-xs font-bold text-[#B86D43] group-hover:translate-x-0.5 transition-transform">
                    <span>View Catalogue</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-[#6B5E54]">
            <p className="text-base font-semibold mb-2">No matching catalogues found</p>
            <p className="text-xs text-[#9C8E84]">Try clearing the search or choosing another collection category.</p>
          </div>
        )}
      </main>

      {/* Contact Cards & Studio Banner */}
      <section className="bg-white border-t border-[#E5DDD3] py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-[#B86D43] block mb-1">
              Direct Inquiries
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#12100E]">
              Consult With Our Space Makers
            </h3>
            <p className="text-xs sm:text-sm text-[#6B5E54] mt-2">
              Have questions regarding any catalogue collection or wish to book a personalized architectural consultation?
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <a
              href="tel:9187924723"
              className="p-5 rounded-xl border border-[#E5DDD3] hover:border-[#B86D43]/40 bg-[#F7F3ED]/40 hover:bg-[#F7F3ED] transition-all flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-full bg-[#B86D43]/10 text-[#B86D43] flex items-center justify-center shrink-0 group-hover:bg-[#B86D43] group-hover:text-white transition-all">
                <Phone className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] text-[#9C8E84] font-semibold uppercase tracking-wider">Direct Phone</div>
                <div className="text-sm font-bold text-[#12100E] truncate">9187924723</div>
              </div>
            </a>

            <a
              href="mailto:works.capsule@gmail.com"
              className="p-5 rounded-xl border border-[#E5DDD3] hover:border-[#B86D43]/40 bg-[#F7F3ED]/40 hover:bg-[#F7F3ED] transition-all flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-full bg-[#B86D43]/10 text-[#B86D43] flex items-center justify-center shrink-0 group-hover:bg-[#B86D43] group-hover:text-white transition-all">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] text-[#9C8E84] font-semibold uppercase tracking-wider">General Email</div>
                <div className="text-sm font-bold text-[#12100E] truncate">works.capsule@gmail.com</div>
              </div>
            </a>

            <a
              href="mailto:project@capsulecompany.in"
              className="p-5 rounded-xl border border-[#E5DDD3] hover:border-[#B86D43]/40 bg-[#F7F3ED]/40 hover:bg-[#F7F3ED] transition-all flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-full bg-[#B86D43]/10 text-[#B86D43] flex items-center justify-center shrink-0 group-hover:bg-[#B86D43] group-hover:text-white transition-all">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] text-[#9C8E84] font-semibold uppercase tracking-wider">Project Enquiries</div>
                <div className="text-sm font-bold text-[#12100E] truncate">project@capsulecompany.in</div>
              </div>
            </a>

            <a
              href="https://capsulecompany.in"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl border border-[#E5DDD3] hover:border-[#B86D43]/40 bg-[#F7F3ED]/40 hover:bg-[#F7F3ED] transition-all flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-full bg-[#B86D43]/10 text-[#B86D43] flex items-center justify-center shrink-0 group-hover:bg-[#B86D43] group-hover:text-white transition-all">
                <Globe className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] text-[#9C8E84] font-semibold uppercase tracking-wider">Main Website</div>
                <div className="text-sm font-bold text-[#12100E] truncate">capsulecompany.in</div>
              </div>
            </a>
          </div>

          {/* Studio Banner */}
          <div className="mt-8 p-6 rounded-2xl bg-[#F7F3ED] border border-[#E5DDD3] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#B86D43]/15 text-[#B86D43] flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-[#12100E]">Capsule Company Studio</h4>
                <p className="text-xs sm:text-sm text-[#6B5E54] mt-0.5">
                  SLV COMPLEX, 17/3, Outer Ring Rd, Kariyana Layout, Hebbal Kempapura, Bengaluru, Karnataka 560024.
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=SLV+COMPLEX,+17/3,+Outer+Ring+Rd,+Kariyana+Layout,+Hebbal+Kempapura,+Bengaluru,+Karnataka+560024"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E5DDD3] text-xs font-bold text-[#12100E] hover:border-[#B86D43] hover:text-[#B86D43] transition-all shadow-xs shrink-0"
            >
              <span>Open in Google Maps</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Luxury Footer */}
      <footer className="bg-[#12100E] text-white py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 p-1 flex items-center justify-center">
              <img src="/logo.png" alt="Capsule Company" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="font-serif font-bold text-white tracking-wider">CAPSULE COMPANY</div>
              <div className="text-[9px] tracking-widest text-[#B86D43] font-bold">YOUR SPACE MAKER</div>
            </div>
          </div>

          <div>SLV COMPLEX, Hebbal Kempapura, Bengaluru 560024</div>

          <div>© 2026 Capsule Company. Original Digital Architectural Catalogues.</div>
        </div>
      </footer>
    </div>
  );
};

export default CataloguePortalPage;
