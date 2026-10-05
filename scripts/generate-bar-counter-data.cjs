const fs = require('fs');

const barCounterModels = [
  {
    number: 1,
    modelName: "CASK",
    modelCode: "BC-S1-CASK",
    variant: "Reclaimed Wood Alcove Bar",
    pageNumber: "P/01",
    description: "A warm and inviting residential corner bar crafted from rich reclaimed timber beams, featuring an overhead coffered ceiling canopy, dual Edison pendant lights, and an integrated under-counter beverage cooler.",
    highlights: [
      "Custom overhead timber soffit canopy with concealed recessed downlights",
      "Solid rustic hardwood bar counter with natural wood grain texture",
      "Integrated dual-zone beverage refrigerator and enclosed prep station",
      "Back-bar open display shelving with integrated ambient backlight strip",
      "Heavy-duty industrial steel-framed counter stools with solid wood seats"
    ],
    tagline: "Rustic • Authentic • Handcrafted",
    image: "/assets/catalogues/bar-counter/bar-counter-01.jpg"
  },
  {
    number: 2,
    modelName: "ALCOVE",
    modelCode: "BC-S2-ALCOVE",
    variant: "Natural Oak Architectural Niche Bar",
    pageNumber: "P/02",
    description: "A bespoke built-in niche bar framed in natural light oak woodwork, showcasing vertical fluted cladding, a honed quartz prep surface, and tiered illuminated glassware shelving.",
    highlights: [
      "Symmetrical built-in niche architecture with solid oak surround framing",
      "Vertical fluted timber front paneling with continuous lower footrail",
      "Warm 2700K integrated LED light channels beneath all glass display tiers",
      "Integrated polished chrome wet-bar faucet and concealed prep basin",
      "Curved natural wood minimalist bar stools with padded leather seats"
    ],
    tagline: "Architectural • Symmetrical • Refined",
    image: "/assets/catalogues/bar-counter/bar-counter-02.jpg"
  },
  {
    number: 3,
    modelName: "HORIZON",
    modelCode: "BC-S3-HORIZON",
    variant: "Penthouse Window Lounge Bar",
    pageNumber: "P/03",
    description: "An airy high-rise apartment lounge bar positioned against panoramic city skyline windows, featuring floating back-lit natural wood ledges and a compact linear cocktail counter.",
    highlights: [
      "Linear space-saving dry bar layout optimized for luxury apartment living",
      "Dual floating timber display shelves with continuous diffused LED edge-glow",
      "Honed white composite stone countertop with clean square-edge profiling",
      "Wall-mounted concealed storage drawers with touch-latch mechanisms",
      "Modern swivel bar stools with warm walnut curved shells and brass posts"
    ],
    tagline: "Airy • Panoramic • Contemporary",
    image: "/assets/catalogues/bar-counter/bar-counter-03.jpg"
  },
  {
    number: 4,
    modelName: "CHALET",
    modelCode: "BC-S4-CHALET",
    variant: "Solid Timber Lodge Bar",
    pageNumber: "P/04",
    description: "An authentic lodge-style bar built with thick rustic timber framing, an overhead post-and-beam canopy with vintage pendants, and a multi-tiered display back-bar.",
    highlights: [
      "Hand-hewn timber post and beam overhead canopy structure",
      "Substantial heavy-plank wooden serving counter with protective seal",
      "Illuminated stemware suspension rack and multi-tier liquor display",
      "Full lower service bar counter equipped with concealed cabinetry",
      "Classic three-legged turned timber bar stools in rich natural honey stain"
    ],
    tagline: "Substantial • Hand-Hewn • Warm",
    image: "/assets/catalogues/bar-counter/bar-counter-04.jpg"
  },
  {
    number: 5,
    modelName: "VERANDA",
    modelCode: "BC-S5-VERANDA",
    variant: "Modern Walnut Garden Patio Bar",
    pageNumber: "P/05",
    description: "A sophisticated freestanding architectural bar console in natural American walnut, framed by garden views, equipped with dual wine chillers and full-height backlit shelving.",
    highlights: [
      "Full-height American walnut display tower with perimeter LED illumination",
      "Integrated dual-temperature glass door wine preservation cellar",
      "Angled bottle presentation rack and horizontal storage cubbies",
      "Solid quartz stone preparation counter with stain-resistant coating",
      "Seamless flush handle-free push-to-open bottom storage cabinetry"
    ],
    tagline: "Sophisticated • Organic • Functional",
    image: "/assets/catalogues/bar-counter/bar-counter-05.jpg"
  },
  {
    number: 6,
    modelName: "ESTATE",
    modelCode: "BC-S6-ESTATE",
    variant: "Traditional Hardwood Island Bar",
    pageNumber: "P/06",
    description: "A rich cherry-toned traditional home bar suite with an arched coffered overhead ceiling, integrated recessed task downlights, polished granite countertop, and natural stone backsplash.",
    highlights: [
      "Custom coffered hardwood overhead canopy with integrated pot lights",
      "Polished natural granite service counter with beveled bullnose edge",
      "Multi-tiered back-bar cabinet with warm under-cabinet task illumination",
      "Solid hardwood frame bar stools with contoured saddle seats",
      "Textured natural slate tile backsplash complementing rich wood tones"
    ],
    tagline: "Timeless • Prestigious • Substantial",
    image: "/assets/catalogues/bar-counter/bar-counter-06.jpg"
  },
  {
    number: 7,
    modelName: "TAMBOUR",
    modelCode: "BC-S7-TAMBOUR",
    variant: "Illuminated Fluted Tambour Island Bar",
    pageNumber: "P/07",
    description: "A contemporary Scandinavian-inspired island bar featuring vertical fluted tambour wood cladding, warm under-counter halo glow, and a recessed chevron-tile display alcove.",
    highlights: [
      "Curved corner island bar wrapped in bespoke vertical oak tambour slats",
      "Concealed 3000K warm LED light strip beneath the cantilevered countertop",
      "Built-in niche with grey herringbone tile backsplash and floating shelves",
      "Integrated dual beverage refrigeration and glassware storage credenza",
      "Ergonomic bar stools with ivory boucle upholstery and black metal legs"
    ],
    tagline: "Tactile • Illuminated • Scandinavian",
    image: "/assets/catalogues/bar-counter/bar-counter-07.jpg"
  },
  {
    number: 8,
    modelName: "METRO",
    modelCode: "BC-S8-METRO",
    variant: "Compact Urban Corner Bar",
    pageNumber: "P/08",
    description: "An efficiently planned urban residential bar nestled into a dedicated corner alcove, featuring built-in wine storage lattice, under-counter cooling, and mirrored shelving.",
    highlights: [
      "Space-efficient corner alcove layout tailored for modern luxury apartments",
      "Built-in 24-bottle diagonal wine storage lattice in rich espresso wood",
      "Integrated stainless steel front under-counter beverage cooler",
      "Overhead stemware suspension tracks with warm recessed spotlights",
      "Space-saving nesting timber and steel bar stools"
    ],
    tagline: "Intelligent • Compact • Urban",
    image: "/assets/catalogues/bar-counter/bar-counter-08.jpg"
  },
  {
    number: 9,
    modelName: "FOUNDRY",
    modelCode: "BC-S9-FOUNDRY",
    variant: "Industrial Brick & Copper Bar",
    pageNumber: "P/09",
    description: "A dramatic industrial-chic bar counter set against exposed red brickwork, featuring charcoal shiplap cabinetry, twin brushed copper dome pendants, and an overhanging service top.",
    highlights: [
      "Exposed heritage brick feature wall creating authentic urban ambiance",
      "Dual brushed copper dome hanging pendant fixtures with warm glow",
      "Textured charcoal shiplap cabinetry with industrial matte black hardware",
      "Overhead timber bulkhead canopy with integrated stemware hanging rails",
      "Thick solid butcher-block timber service counter with natural oiled finish"
    ],
    tagline: "Industrial • Bold • Characterful",
    image: "/assets/catalogues/bar-counter/bar-counter-09.jpg"
  },
  {
    number: 10,
    modelName: "REGENT",
    modelCode: "BC-S10-REGENT",
    variant: "Classic Arched Alcove Bar",
    pageNumber: "P/10",
    description: "A refined classic dry bar finished in sophisticated slate blue lacquer, featuring a graceful arched alcove, natural travertine marble tiles, and custom brass accents.",
    highlights: [
      "Architectural arched niche design with classic crown molding details",
      "Deep slate blue painted cabinetry with satin finish protective coating",
      "Travertine stone tile niche lining with overhead warm directional spot",
      "Dual full-height flanking display piers with adjustable glass shelving",
      "Integrated glassware storage and dedicated mobile cocktail cart nook"
    ],
    tagline: "Classic • Stately • Sophisticated",
    image: "/assets/catalogues/bar-counter/bar-counter-10.jpg"
  },
  {
    number: 11,
    modelName: "RESERVE",
    modelCode: "BC-S11-RESERVE",
    variant: "Grand Marble & Walnut Wine Wall",
    pageNumber: "P/11",
    description: "An ultra-luxury wall-to-wall bar and wine sanctuary featuring bookmatched marble backsplash, fluted glass vitrines, a full-height wine conditioning tower, and warm concealed lighting.",
    highlights: [
      "Full-height wine cellar column with individual illuminated bottle cradles",
      "Polished marble splashback and prep counter with waterfall edge detail",
      "Fluted glass display vitrines with warm ambient edge illumination",
      "Integrated stemware hanging rack with solid walnut framing",
      "Soft-close wide format storage drawers for cocktail tools and accessories"
    ],
    tagline: "Grandeur • Opulent • Connoisseur",
    image: "/assets/catalogues/bar-counter/bar-counter-11.jpg"
  },
  {
    number: 12,
    modelName: "ONYX",
    modelCode: "BC-S12-ONYX",
    variant: "Charcoal Minimalist Waterfall Bar",
    pageNumber: "P/12",
    description: "A sleek modern bar counter combining matte charcoal cabinetry with a warm natural timber waterfall overhang, textured geometric wall tiles, and smoked glass pendants.",
    highlights: [
      "Warm natural timber waterfall cocktail counter seating up to three guests",
      "Textured charcoal geometric feature wall adding depth and tactile contrast",
      "Integrated rear bar service counter with concealed preparation sink",
      "Back-bar open display shelves with warm 2700K ambient LED linear glow",
      "Minimalist black metal low-back bar stools with matte finish"
    ],
    tagline: "Minimalist • Sleek • Contemporary",
    image: "/assets/catalogues/bar-counter/bar-counter-12.jpg"
  },
  {
    number: 13,
    modelName: "AMBER",
    modelCode: "BC-S13-AMBER",
    variant: "Intimate Residential Dry Bar",
    pageNumber: "P/13",
    description: "An intimate, beautifully illuminated residential bar station featuring dark walnut cabinetry, built-in wine refrigeration, horizontal bottle lattice, and soft warm backlight shelving.",
    highlights: [
      "Deep espresso wood cabinetry with integrated temperature-controlled cooler",
      "Floating solid wood liquor display ledges with concealed soft warm backlights",
      "Built-in horizontal wine bottle storage lattice holding up to 16 bottles",
      "Directional overhead brass spotlight highlighting spirits and crystal glassware",
      "Compact footprint ideal for dining rooms, dens, and living room corners"
    ],
    tagline: "Intimate • Glowing • Functional",
    image: "/assets/catalogues/bar-counter/bar-counter-13.jpg"
  },
  {
    number: 14,
    modelName: "BOTANIC",
    modelCode: "BC-S14-BOTANIC",
    variant: "Verdant Terrace Cocktail Bar",
    pageNumber: "P/14",
    description: "An organic indoor-outdoor terrace bar crafted with warm oak framing, a solid cast concrete counter, hanging exposed Edison filaments, and integrated botanical display ledges.",
    highlights: [
      "Cast concrete bar top with smooth polished surface and organic character",
      "Natural vertical oak wall paneling with integrated plant display ledges",
      "Exposed retro Edison filament cluster lights suspended at varying heights",
      "Lower prep counter with integrated bar sink and storage cabinetry",
      "Modern minimalist charcoal fabric counter stools with tapered timber legs"
    ],
    tagline: "Organic • Biophilic • Relaxed",
    image: "/assets/catalogues/bar-counter/bar-counter-14.jpg"
  },
  {
    number: 15,
    modelName: "CELLAR",
    modelCode: "BC-S15-CELLAR",
    variant: "Bespoke Corner Wine Cellar Bar",
    pageNumber: "P/15",
    description: "A tailored corner wine room bar wrapped in warm wood cabinetry, featuring glass-front illuminated display vitrines, a built-in wine conditioning fridge, and stemware racks.",
    highlights: [
      "L-shaped corner configuration maximizing storage and display potential",
      "Full-surround illuminated display cabinetry with bronze-tinted glass doors",
      "Integrated dual-zone wine conditioning unit flush mounted into base unit",
      "Warm continuous LED halo lighting accentuating fine spirits and glassware",
      "Polished quartz preparation ledge with concealed electrical pop-up outlets"
    ],
    tagline: "Bespoke • Tailored • Collector",
    image: "/assets/catalogues/bar-counter/bar-counter-15.jpg"
  },
  {
    number: 16,
    modelName: "LUNA",
    modelCode: "BC-S16-LUNA",
    variant: "Modern Fluted Cocktail Counter",
    pageNumber: "P/16",
    description: "A polished residential bar counter featuring a curved fluted panel front, continuous under-counter LED light halo, floating walnut back-shelves, and sleek modern stools.",
    highlights: [
      "Curved bar front finished in fine vertical fluting with dark bronze finish",
      "Continuous concealed LED light ribbon casting warm ambient floor wash",
      "Full-height wall unit with integrated liquor display and mirror backing",
      "Cantilevered stone countertop providing generous legroom for guests",
      "Contemporary matte black bar stools with ergonomic bucket seating"
    ],
    tagline: "Fluid • Illuminated • Modern",
    image: "/assets/catalogues/bar-counter/bar-counter-16.jpg"
  },
  {
    number: 17,
    modelName: "SOLARIS",
    modelCode: "BC-S17-SOLARIS",
    variant: "Backlit Translucent Onyx Bar",
    pageNumber: "P/17",
    description: "A showstopping luxury lounge bar featuring an expansive wall and island clad in real translucent onyx marble, illuminated from within to cast a breathtaking golden amber radiance.",
    highlights: [
      "Full-height backlit genuine onyx marble feature wall and island facade",
      "Even, dimmable LED backlight matrix creating warm golden ambient luxury",
      "Tiered floating brass display shelves showcasing collector spirits",
      "Charcoal quartz waterfall countertop with sleek integrated service prep area",
      "Modern sculptural bar stools upholstered in dark leather with slim metal legs"
    ],
    tagline: "Luminous • Grand • Showstopping",
    image: "/assets/catalogues/bar-counter/bar-counter-17.jpg"
  },
  {
    number: 18,
    modelName: "SCANDI",
    modelCode: "BC-S18-SCANDI",
    variant: "Scandinavian Fluted Oak Island Bar",
    pageNumber: "P/18",
    description: "A warm minimalist bar island featuring vertical solid oak reeded slats, an illuminated counter lip, a chevron marble tile backsplash, and textured white boucle bar chairs.",
    highlights: [
      "Solid white oak reeded tambour front paneling with continuous perimeter reveal",
      "Concealed 3000K warm LED illumination casting gentle downward wash",
      "Back-wall bar credenza featuring chevron marble tile and glassware shelves",
      "Integrated wine refrigeration and enclosed spirits storage cabinet",
      "Plush cream boucle counter stools offering exceptional lounging comfort"
    ],
    tagline: "Nordic • Fluted • Cozy",
    image: "/assets/catalogues/bar-counter/bar-counter-18.jpg"
  },
  {
    number: 19,
    modelName: "SYLVAN",
    modelCode: "BC-S19-SYLVAN",
    variant: "Live-Edge Solid Wood Bar",
    pageNumber: "P/19",
    description: "An organic rustic bar counter crafted from an authentic live-edge solid slab of natural hardwood, paired with a floating illuminated back-shelf, hanging greenery, and turned stools.",
    highlights: [
      "Genuine single-slab live-edge hardwood countertop with organic contours",
      "Warm illuminated floating timber shelf with trailing potted indoor flora",
      "Built-in tabletop stemware hanging rack and cross-hatch wine bottle lattice",
      "Turned solid oak four-legged counter stools with contoured circular tops",
      "Natural hand-rubbed oil finish highlighting tree rings and authentic grain"
    ],
    tagline: "Natural • Live-Edge • Organic",
    image: "/assets/catalogues/bar-counter/bar-counter-19.jpg"
  },
  {
    number: 20,
    modelName: "SPEAKEASY",
    modelCode: "BC-S20-SPEAKEASY",
    variant: "Concealed Armoire Bar Cabinet",
    pageNumber: "P/20",
    description: "A secret cocktail lounge bar cleverly concealed within a full-height rustic timber armoire with bifold doors, opening to reveal a luminous bar station complete with wine cooler and glass racks.",
    highlights: [
      "Concealed speakeasy design with heavy textured timber bi-fold doors",
      "Automatic door-sensor illumination illuminating interior when opened",
      "Integrated stainless steel dual-zone wine conditioning unit",
      "Tiered bottle display shelving with mirrored back for optical depth",
      "Integrated 16-bottle horizontal wine lattice and glassware hanging racks"
    ],
    tagline: "Mysterious • Concealed • Clever",
    image: "/assets/catalogues/bar-counter/bar-counter-20.jpg"
  },
  {
    number: 21,
    modelName: "LINEAR",
    modelCode: "BC-S21-LINEAR",
    variant: "Slatted Timber Architectural Bar",
    pageNumber: "P/21",
    description: "A contemporary architectural bar counter defined by full-height vertical wooden acoustic slats, a polished white quartz waterfall counter, and minimalist Scandinavian stools.",
    highlights: [
      "Floor-to-ceiling vertical oak battens providing acoustic warmth and visual texture",
      "Polished white composite quartz countertop with durable seamless joints",
      "Integrated open liquor display shelving recessed between slatted piers",
      "Integrated under-counter LED strip washing the fluted front paneling",
      "Light grey Scandinavian low-back bar stools with tapered oak legs"
    ],
    tagline: "Linear • Architectural • Pure",
    image: "/assets/catalogues/bar-counter/bar-counter-21.jpg"
  },
  {
    number: 22,
    modelName: "VORTEX",
    modelCode: "BC-S22-VORTEX",
    variant: "Curved Lounge Wrap-Around Bar",
    pageNumber: "P/22",
    description: "A grand circular wrap-around cocktail bar featuring dark fluted wood paneling, a polished black granite surface, an illuminated ceiling cove, and modern wireframe bar stools.",
    highlights: [
      "Sweeping curved bar geometry creating an engaging 360-degree social focal point",
      "Fine dark wood vertical fluted cladding with continuous bronze footrail",
      "Recessed ceiling lighting cove echoing the curvature of the bar below",
      "Full-height back-bar display with warm edge-lit glass liquor shelves",
      "Modern wireframe bar stools with padded leather seats and footrests"
    ],
    tagline: "Circular • Social • Sculptural",
    image: "/assets/catalogues/bar-counter/bar-counter-22.jpg"
  },
  {
    number: 23,
    modelName: "CALACATTA",
    modelCode: "BC-S23-CALACATTA",
    variant: "Calacatta Gold Marble Island Bar",
    pageNumber: "P/23",
    description: "An ultra-chic Art Deco inspired bar island showcasing bookmatched Calacatta marble with polished brass trim, teal velvet upholstered stools, and suspended brass orb pendants.",
    highlights: [
      "Bookmatched Calacatta marble waterfall island with brushed brass plinth reveal",
      "Lush teal velvet luxury bar stools with polished gold stiletto legs",
      "Back-bar display framed in deep teal lacquer with warm gold-toned shelving",
      "Cluster of suspended satin brass sphere pendant lights at varied elevations",
      "Integrated ice well, speed rail, and concealed glassware storage compartments"
    ],
    tagline: "Opulent • Art Deco • Glamorous",
    image: "/assets/catalogues/bar-counter/bar-counter-23.jpg"
  },
  {
    number: 24,
    modelName: "GRAPHITE",
    modelCode: "BC-S24-GRAPHITE",
    variant: "Dark Slate & Glass Cooler Bar",
    pageNumber: "P/24",
    description: "A contemporary dark-toned entertaining bar featuring matte charcoal wall cabinetry, twin glass-front beverage chillers, illuminated warm timber shelves, and a polished stone top.",
    highlights: [
      "Twin under-counter glass door beverage chillers with blue/warm LED interior",
      "Matte graphite cabinetry with seamless handle-free touch-to-open hardware",
      "Warm oak floating shelves with recessed 2700K downward linear illumination",
      "Polished dark quartz preparation and service counter with high spill lip",
      "Concealed electrical and HDMI wiring for entertainment and sound systems"
    ],
    tagline: "Moody • Executive • Refined",
    image: "/assets/catalogues/bar-counter/bar-counter-24.jpg"
  },
  {
    number: 25,
    modelName: "CANOPY",
    modelCode: "BC-S25-CANOPY",
    variant: "Slatted Ceiling Architectural Bar",
    pageNumber: "P/25",
    description: "An architectural tour de force featuring a slatted natural wood ceiling canopy that folds down into a full-height wine tower, glass display vitrines, and dual refrigeration.",
    highlights: [
      "Continuous slatted timber ceiling canopy integrating recessed directional spots",
      "Full-height vertical wine cellar vitrine with individual backlit bottle display",
      "Illuminated fluted glass upper cabinetry with soft ambient internal glow",
      "Terrazzo-style stone backsplash complemented by warm under-cabinet strip LEDs",
      "Dual commercial-grade under-counter wine preservation units"
    ],
    tagline: "Architectural • Continuous • Masterpiece",
    image: "/assets/catalogues/bar-counter/bar-counter-25.jpg"
  },
  {
    number: 26,
    modelName: "NEBULA",
    modelCode: "BC-S26-NEBULA",
    variant: "Illuminated Canopy Minimalist Bar",
    pageNumber: "P/26",
    description: "A dramatic modern cocktail station defined by a suspended cloud-pattern ceiling light feature, a vertical fluted black counter with perimeter under-glow, and slim black bar stools.",
    highlights: [
      "Custom suspended backlit cloud-texture ceiling light installation",
      "Vertical fluted black bar island with concealed 360-degree LED halo glow",
      "Cantilevered matte black composite countertop with integrated bar sink",
      "Floating back-wall steel bottle ledge with hanging wine glass suspension rail",
      "Sculptural minimalist matte black bar stools with ergonomic contouring"
    ],
    tagline: "Dramatic • Futuristic • Minimalist",
    image: "/assets/catalogues/bar-counter/bar-counter-26.jpg"
  },
  {
    number: 27,
    modelName: "MONARCH",
    modelCode: "BC-S27-MONARCH",
    variant: "Walnut & Marble Wine Wall Bar",
    pageNumber: "P/27",
    description: "A stately built-in entertaining bar featuring warm walnut cabinetry, a bookmatched marble splashback, an integrated full-height wine column, and warm ambient vitrine lighting.",
    highlights: [
      "Floor-to-ceiling integrated wine preservation column holding up to 80 bottles",
      "Bookmatched natural grey marble backsplash and preparation surface",
      "Rich American walnut cabinetry with concealed finger-pull edge profiles",
      "Tiered back-bar display shelves with continuous warm LED under-lighting",
      "Recessed ceiling downlights providing task illumination over the service area"
    ],
    tagline: "Stately • Warm • Prestigious",
    image: "/assets/catalogues/bar-counter/bar-counter-27.jpg"
  },
  {
    number: 28,
    modelName: "NOIR",
    modelCode: "BC-S28-NOIR",
    variant: "Matte Black & Timber Compact Bar",
    pageNumber: "P/28",
    description: "A compact modern home bar designed for cozy corners, featuring matte black cabinetry, a warm timber counter ledge, open wine bottle display cubbies, and ambient illumination.",
    highlights: [
      "Compact footprint crafted specifically for modern dining or living room nooks",
      "Contrast finish pairing matte black lacquer with warm natural honey oak",
      "Horizontal bottle storage compartments and overhead stemware hanging tracks",
      "Integrated warm LED accent lighting creating a welcoming evening glow",
      "Soft-close lower storage cupboard for glassware, shakers, and cocktail tools"
    ],
    tagline: "Compact • Contrast • Stylish",
    image: "/assets/catalogues/bar-counter/bar-counter-28.jpg"
  },
  {
    number: 29,
    modelName: "RUSTICUS",
    modelCode: "BC-S29-RUSTICUS",
    variant: "Masonry Stone & Timber Lodge Bar",
    pageNumber: "P/29",
    description: "An authentic rustic basement tavern bar built with real stacked fieldstone pillars, distressed hickory cabinets, criss-cross wine storage, and mullioned glass display doors.",
    highlights: [
      "Natural stacked fieldstone masonry columns framing the bar station",
      "Distressed hickory wood cabinetry with historic wrought iron hardware",
      "Integrated diamond-pattern wooden wine bottle storage lattice",
      "Mullioned glass cabinet doors with internal warm display lighting",
      "Heavy stone composite countertop engineered for rugged durability"
    ],
    tagline: "Tavern • Masonry • Enduring",
    image: "/assets/catalogues/bar-counter/bar-counter-29.jpg"
  },
  {
    number: 30,
    modelName: "TIMBERLAND",
    modelCode: "BC-S30-TIMBERLAND",
    variant: "Reclaimed Oak Post & Beam Bar",
    pageNumber: "P/30",
    description: "A robust artisan home bar constructed with heavy reclaimed oak beams, corrugated metal accents, custom pendant fixtures, and solid hardwood counter stools.",
    highlights: [
      "Heavy reclaimed solid timber post and lintel framing architecture",
      "Industrial corrugated galvanized metal front paneling with wood trim",
      "Multi-tier back-bar liquor shelf with integrated mirrored back wall",
      "Solid timber counter stools with contoured wooden seats and footbars",
      "Warm filament glass pendants casting a classic speakeasy ambiance"
    ],
    tagline: "Artisan • Robust • Authentic",
    image: "/assets/catalogues/bar-counter/bar-counter-30.jpg"
  },
  {
    number: 31,
    modelName: "APEX",
    modelCode: "BC-S31-APEX",
    variant: "Contemporary Wine Station & Bar",
    pageNumber: "P/31",
    description: "A high-performance modern dry bar and beverage center featuring a stainless steel refrigeration station, warm subway-tiled backsplash, and integrated glassware shelving.",
    highlights: [
      "Commercial-grade stainless steel beverage and wine refrigeration suite",
      "Warm textured tile backsplash complemented by continuous under-shelf LEDs",
      "Wall-mounted horizontal wine rack and modular display cubbies",
      "Clean white quartz prep countertop with scratch and heat resistance",
      "Matte grey soft-close cabinetry with brushed brass slim bar handles"
    ],
    tagline: "High-Performance • Sleek • Modern",
    image: "/assets/catalogues/bar-counter/bar-counter-31.jpg"
  },
  {
    number: 32,
    modelName: "TAVERN",
    modelCode: "BC-S32-TAVERN",
    variant: "Solid Oak U-Shaped Corner Bar",
    pageNumber: "P/32",
    description: "A wrap-around solid wood tavern bar featuring an L-shaped butcher-block counter, dark stained cabinetry, overhead spotlighting, and comfortable swivel bar chairs.",
    highlights: [
      "Wrap-around L-shaped counter configuration seating four or more guests",
      "Rich solid oak butcher-block counter with rounded comfort edges",
      "Full rear bar prep counter equipped with sink, speed rail, and storage",
      "Recessed track spotlighting directing focused light onto cocktail prep areas",
      "Tufted leatherette swivel bar chairs with sturdy four-prong metal bases"
    ],
    tagline: "Wrap-Around • Social • Classic",
    image: "/assets/catalogues/bar-counter/bar-counter-32.jpg"
  },
  {
    number: 33,
    modelName: "CREDENZA",
    modelCode: "BC-S33-CREDENZA",
    variant: "Mid-Century Modern Bar Credenza",
    pageNumber: "P/33",
    description: "A refined mid-century modern freestanding bar sideboard in rich walnut, featuring a 24-bottle integrated wine grid, fluted timber accents, and brass-tipped tapered legs.",
    highlights: [
      "Mid-century modern aesthetic with warm American walnut wood grain",
      "Integrated 24-bottle horizontal wine rack integrated into base console",
      "Upper display shelf with concealed warm LED strip casting soft wall illumination",
      "Tapered mid-century furniture legs with brushed brass ferrule accents",
      "Dual soft-close utility drawers for mixology accessories and linens"
    ],
    tagline: "Mid-Century • Elegant • Freestanding",
    image: "/assets/catalogues/bar-counter/bar-counter-33.jpg"
  },
  {
    number: 34,
    modelName: "CORONA",
    modelCode: "BC-S34-CORONA",
    variant: "Backlit Fluted Arch Cocktail Bar",
    pageNumber: "P/34",
    description: "A breathtaking architectural home bar featuring an illuminated fluted timber arch, a curved tambour island bar, integrated glassware storage, and velvet bar stools.",
    highlights: [
      "Dramatic semicircular timber arch with perimeter concealed LED backlight",
      "Curved fluted island bar counter with continuous warm under-counter halo",
      "Suspended brass stemware rack holding up to 18 cocktail glasses",
      "Integrated back-bar bottle display tier with mirrored accent backing",
      "Sculptural curved counter stools upholstered in warm neutral fabric"
    ],
    tagline: "Architectural • Arched • Luminous",
    image: "/assets/catalogues/bar-counter/bar-counter-34.jpg"
  },
  {
    number: 35,
    modelName: "MINIMALIST",
    modelCode: "BC-S35-MINIMALIST",
    variant: "Urban Studio Compact Bar",
    pageNumber: "P/35",
    description: "A smart minimalist apartment bar unit designed for compact luxury spaces, featuring a clean timber counter, vertical bottle cubbies, and warm ambient spotlights.",
    highlights: [
      "Compact vertical orientation ideal for modern studio or flat layouts",
      "Vertical bottle display alcoves with individual illumination",
      "Durable laminate service counter with warm wood grain finish",
      "Concealed glassware storage cabinet with push-to-open latching",
      "Lightweight minimalist counter stools easily tucked under the counter"
    ],
    tagline: "Compact • Efficient • Modern",
    image: "/assets/catalogues/bar-counter/bar-counter-35.jpg"
  },
  {
    number: 36,
    modelName: "NORDIC",
    modelCode: "BC-S36-NORDIC",
    variant: "Light Ash & Fluted Glass Bar",
    pageNumber: "P/36",
    description: "A clean Scandinavian home bar characterized by light ash woodwork, illuminated fluted glass cabinet doors, a warm stone counter, and modern low-back stools.",
    highlights: [
      "Light Scandinavian ash wood cabinetry with moisture-resistant clear coat",
      "Fluted reeded glass cabinet doors diffusing interior warm illumination",
      "Smooth composite stone preparation counter with undermount bar sink",
      "Integrated open bottle display shelving with concealed LED strips",
      "Minimalist ergonomic bar stools with slender black steel frames"
    ],
    tagline: "Nordic • Clean • Serene",
    image: "/assets/catalogues/bar-counter/bar-counter-36.jpg"
  },
  {
    number: 37,
    modelName: "HERITAGE",
    modelCode: "BC-S37-HERITAGE",
    variant: "Bespoke Pub-Style Timber Bar",
    pageNumber: "P/37",
    description: "A rich bespoke pub-inspired home bar built with solid timber paneling, brass foot rails, warm amber hanging pendants, and generous under-counter storage.",
    highlights: [
      "Solid timber front paneling finished in rich hand-applied chestnut stain",
      "Continuous heavy-gauge polished brass foot rail along counter base",
      "Cluster of amber glass Edison pendant fixtures providing warm tavern mood",
      "Deep service counter with dedicated speed rail and cocktail prep zone",
      "Classic padded leatherette bar stools with 360-degree smooth swivel action"
    ],
    tagline: "Heritage • Classic • Welcoming",
    image: "/assets/catalogues/bar-counter/bar-counter-37.jpg"
  },
  {
    number: 38,
    modelName: "SERENADE",
    modelCode: "BC-S38-SERENADE",
    variant: "Curved Fluted Lounge Cocktail Bar",
    pageNumber: "P/38",
    description: "A luxurious curved cocktail bar featuring vertical timber fluting, a continuous amber halo under-counter glow, round wooden stools, and an illuminated liquor display.",
    highlights: [
      "Gracefully contoured curved bar facade with vertical timber reed cladding",
      "Concealed 360-degree warm amber LED strip casting a soft floor halo",
      "Recessed display shelves with mirror backing showcasing top-shelf spirits",
      "Honed quartz countertop with smooth waterfall corner edges",
      "Matching solid wood round bar stools with integrated footrest rings"
    ],
    tagline: "Sculptural • Warm • Intimate",
    image: "/assets/catalogues/bar-counter/bar-counter-38.jpg"
  },
  {
    number: 39,
    modelName: "SOMMELIER",
    modelCode: "BC-S39-SOMMELIER",
    variant: "Luxury Glass Vitrine Wine Bar",
    pageNumber: "P/39",
    description: "An elite home bar and tasting sanctuary featuring dark oak cabinetry, dual glass vitrine wine cabinets, integrated climate control, and warm focused spotlights.",
    highlights: [
      "Dual full-height illuminated glass vitrines with tinted UV-protective glass",
      "Integrated climate-controlled wine preservation cellar and decanting station",
      "Rich dark smoked oak cabinetry with concealed soft-close European hinges",
      "Back-bar preparation ledge in polished quartz with integrated drip tray",
      "Dimmable ambient 2700K lighting with multi-scene smart home control"
    ],
    tagline: "Elite • Connoisseur • Luminous",
    image: "/assets/catalogues/bar-counter/bar-counter-39.jpg"
  }
];

const fileContent = `// Autogenerated Bar Counter Luxury Catalogue Data (39 Unique Models)
// Strictly mapped: Image -> Name -> Variant -> Description -> Highlights -> Code
export interface BarCounterModel {
  number: number;
  modelName: string;
  modelCode: string;
  variant: string;
  pageNumber: string;
  description: string;
  highlights: string[];
  tagline: string;
  image: string;
}

export const barCounterLuxuryData: BarCounterModel[] = ${JSON.stringify(barCounterModels, null, 2)};
`;

fs.writeFileSync('src/data/barCounterLuxuryData.ts', fileContent);
console.log('Successfully wrote src/data/barCounterLuxuryData.ts with 39 unique models.');
