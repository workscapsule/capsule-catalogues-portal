const fs = require('fs');

const modelsData = [
  {
    num: 1,
    name: "PADMA",
    variant: "Wall-Mounted Backlit Sanctum",
    tagline: "Lotus • Radiance • Serenity",
    description: "A warm and radiant wall sanctum featuring an illuminated lotus petal mandala around a sacred Om on polished marble. Flanked by vertical geometric jaali panels and capped with a wood-panelled ceiling raft with hanging temple bells.",
    highlights: [
      "Backlit lotus petal mandala with glowing central Om symbol",
      "Timber ceiling raft with four suspended brass bells and recessed spotlights",
      "Dual flanking laser-cut geometric jaali lattice side screens",
      "Two-tier marble altar platform resting over a wide wooden drawer base",
      "Side floating shelves with brass lamps and floor prayer seating"
    ],
    specs: {
      style: "Neo-Classical Indian",
      finish: "Warm Teak & Marble",
      mountType: "Wall Mounted Floating",
      idealFor: "Modern Living Sanctums & Foyer Corners"
    }
  },
  {
    num: 2,
    name: "AARAMBH",
    variant: "Contemporary Wood CNC Mandir",
    tagline: "Carved • Devotional • Heritage",
    description: "An exquisite freestanding mandir crafted in rich walnut timber featuring an ornate floral pediment and an overhead canopy with floral downlight modules. The sanctum back wall integrates a nine-bell brass grid with side jali panels and drapery.",
    highlights: [
      "Hand-carved floral pediment arch and turned wood pillar pilasters",
      "Integrated 9-niche backdrop holding genuine brass temple bells",
      "Slanted overhead timber canopy with sculpted floral downlight modules",
      "Side lattice jali panels with elegant tied linen drapery",
      "Solid wood base cabinet with dual storage drawers and brass pull knobs"
    ],
    specs: {
      style: "Heritage Wooden Mandapa",
      finish: "Natural Walnut & Satin Brass",
      mountType: "Floor Standing Console",
      idealFor: "Dedicated Pooja Rooms & Living Alcoves"
    }
  },
  {
    num: 3,
    name: "SAMPRITI",
    variant: "Compact Floating Apartment Mandir",
    tagline: "Compact • Integrated • Pristine",
    description: "A modern full-height architectural cabinetry unit in soft champagne-cream finish integrating a sacred arched pooja alcove. Features an illuminated marble arch with 3D gold Om, twin brass hanging bells, fluted lower shutters, and adjacent glass display.",
    highlights: [
      "Scalloped backlit marble arch alcove with 3D gold Om symbol",
      "Twin brass bells suspended on ceiling-mounted brass link chains",
      "Dual utility drawers and fluted lower storage cabinets with brass knobs",
      "Integrated full-height glass-front vitrine with internal LED shelf lighting",
      "Seamless floor-to-ceiling space-saving apartment design"
    ],
    specs: {
      style: "Contemporary Apartment Built-In",
      finish: "Champagne Greige Lacquer & White Marble",
      mountType: "Full-Height Floor Standing Unit",
      idealFor: "Compact Apartments & Dining Area Niches"
    }
  },
  {
    num: 4,
    name: "VISTARA",
    variant: "Pristine Marble Altar Pavilion",
    tagline: "Architectural • Grand • Symmetrical",
    description: "A majestic full-wall pooja ensemble combining rich walnut wood textures with off-white gloss surfaces. The central arched sanctum boasts a radiant backlit sunburst mandala with Om, framed by full-height glowing jaali lattice columns and open display niches.",
    highlights: [
      "Grand scalloped arch sanctum with glowing sunburst Om backplate",
      "Twin illuminated vertical geometric lattice jaali pilasters",
      "Open side display niches with warm LED spotlights for sacred brass idols",
      "Extensive four-drawer lower credenza with satin brass handles",
      "Overhead loft cabinetry with integrated downlight pelmet canopy"
    ],
    specs: {
      style: "Grand Symmetrical Ensemble",
      finish: "American Walnut & Off-White Lacquer",
      mountType: "Full-Wall Built-In Architectural Unit",
      idealFor: "Villas & Large Residential Pooja Rooms"
    }
  },
  {
    num: 5,
    name: "MAHAPITHA",
    variant: "Full-Height Architectural Mandir",
    tagline: "Monumental • Sanctum • Serene",
    description: "A magnificent dedicated sacred room entered through grand floor-to-ceiling timber lattice doors adorned with sacred Om emblems. The interior features a floating marble altar with perimeter LED underglow, a scalloped backlit halo, and a patterned brass drum chandelier.",
    highlights: [
      "Floor-to-ceiling solid timber double doors with jaali and Om medallions",
      "Scalloped halo back-panel with radiant warm LED perimeter glow",
      "Floating white marble altar plinth with continuous under-cabinet LED strip",
      "Ornate brass fretwork drum chandelier with cove ceiling lighting",
      "Vertical fluted accents and open side illuminated curio shelves"
    ],
    specs: {
      style: "Luxury Residential Temple Room",
      finish: "Smoked Teak & Pristine Calacatta Marble",
      mountType: "Walk-In Pooja Sanctuary",
      idealFor: "Luxury Independent Bungalows & Penthouse Suites"
    }
  },
  {
    num: 6,
    name: "SHWETA",
    variant: "Modern Charcoal & Gold Pooja Niche",
    tagline: "Luminous • Bi-Fold • Sacred",
    description: "A pristine white freestanding mandir cabinet featuring laser-perforated bi-fold doors with sacred Om and bell motifs. Inside, an illuminated petal-burst Om backdrop bathes multi-tiered side deity shelves and a spacious bottom drawer on sleek metal legs.",
    highlights: [
      "Bi-fold laser-cut jali doors with mandala Om and bell cutouts",
      "Central backlit sunburst screen casting warm devotional radiance",
      "Multi-level stepped side shelves for framed deities and brass idols",
      "Spacious bottom storage drawer and dual-door storage cabinet",
      "Elevated moisture-proof metallic cylinder legs"
    ],
    specs: {
      style: "Contemporary Freestanding Mandir",
      finish: "High-Gloss White PU & Warm Amber Backlight",
      mountType: "Floor Standing Cabinet",
      idealFor: "Modern Living Rooms & Compact Prayer Corners"
    }
  },
  {
    num: 7,
    name: "ANANTA",
    variant: "Handcrafted Teak Heritage Shrine",
    tagline: "Floating • Minimalist • Divine",
    description: "A sleek cantilevered wall mandir designed for modern open-plan living, anchored to an architectural partition column. Features a floating drawer console with brass lotus motif, a glowing scalloped arch stone backdrop, hanging floral toran with brass bells, and a fluted timber rafter.",
    highlights: [
      "Floating cantilever console with brass lotus emblem and LED underglow",
      "Scalloped halo backlit stone backplate with 3D brass Om",
      "Timber pelmet canopy with recessed spotlights and hanging bells",
      "Side fluted wooden rafter column with open display shelves",
      "Integrated vertical LED wall profile light accent"
    ],
    specs: {
      style: "Modern Floating Partition Mandir",
      finish: "Natural Teak & Satin White Quartz",
      mountType: "Wall Mounted Cantilever",
      idealFor: "Open-Plan Living & Dining Partition Walls"
    }
  },
  {
    num: 8,
    name: "KALPAVRIKSHA",
    variant: "Illuminated Lotus Altar Alcove",
    tagline: "Sacred • Tree-of-Life • Symmetrical",
    description: "A grand symmetrical timber temple console featuring illuminated tree-of-life laser-cut panels and an elegant onion-dome backlit halo niche with etched mandala. Flanked by open display towers and anchored by a walnut credenza with a central brass lotus medallion.",
    highlights: [
      "Backlit tree-of-life perforated panels casting golden silhouettes",
      "Onion-arch curved halo niche with laser-etched mandala and Om",
      "Twin suspended brass-and-glass cylindrical pendant lanterns",
      "Four-drawer walnut storage console with fluted brass lotus medallion",
      "Solid quartz stone countertop with stepped idol plinth and underglow"
    ],
    specs: {
      style: "Artisanal Architectural Shrine",
      finish: "Rich Walnut & Polished Quartz",
      mountType: "Floor Standing Console with Wall Panelling",
      idealFor: "Independent Villas & Formal Prayer Alcoves"
    }
  },
  {
    num: 9,
    name: "UDAYA",
    variant: "Minimalist Floating Quartz Shelf",
    tagline: "Radiant • Elegant • Compact",
    description: "A graceful white floor-standing mandir unit featuring an ornamental floral jaali pediment crest and a radiantly glowing lotus mandala backplate with Om. Tiered side ledges provide ample space for daily lamps, supported by a dual-door utility cabinet on metal legs.",
    highlights: [
      "Laser-cut floral jaali crest pediment with decorative bell cutouts",
      "Radiant central backlit floral mandala with sacred Om",
      "Warm LED edge-lit stepped side shelves for lamps and offerings",
      "Wide top utility drawer with smooth curved handle",
      "Spacious double-door storage cabinet raised on metallic legs"
    ],
    specs: {
      style: "Neo-Classical White Mandir",
      finish: "Smooth Matte White & Warm Gold Glow",
      mountType: "Floor Standing Cabinet",
      idealFor: "Apartments & Compact Prayer Corners"
    }
  },
  {
    num: 10,
    name: "MANDAPAM",
    variant: "Classical Pillar Carved Shrine",
    tagline: "Monumental • Mandapa • Heritage",
    description: "A palatial architectural wooden mandapa creating an independent temple sanctuary within the residence. Defined by four fluted walnut pillars supporting a coffered timber canopy with downlights, housing an elevated stepped wooden podium and an arched golden shrine niche.",
    highlights: [
      "Four monumental fluted walnut timber pillars forming a sacred mandapa",
      "Cantilevered stepped timber ceiling canopy with recessed spotlights",
      "Multi-tiered solid wood podium platform with inlaid prayer carpet",
      "Arched shrine niche with gold-leaf backplate framing deity sculpture",
      "Suspended traditional multi-tier brass bell chain and temple chandelier"
    ],
    specs: {
      style: "Classical Dravidian & Temple Mandapa",
      finish: "Solid Walnut & Brushed Brass Trims",
      mountType: "Freestanding Pavilion Structure",
      idealFor: "Spacious Dedicated Pooja Halls & Luxury Mansions"
    }
  },
  {
    num: 11,
    name: "TRIPTI",
    variant: "Grounded Granite & Wood Plinth Unit",
    tagline: "Serene • Sanctuary • Balanced",
    description: "A warm and meditative pooja room anchored by a full-height backlit marble feature wall with glowing Om and gold mandala etching. Flanked by twin walnut display towers and a full-height illuminated leaf-pattern jaali screen with timber tray ceiling.",
    highlights: [
      "Full-height backlit marble feature slab with illuminated Om and mandala",
      "Twin vertical walnut display columns with warm LED undershelf lighting",
      "Floor-to-ceiling backlit leaf-pattern jaali wall with fluted surround",
      "Floating white drawer console with continuous floor LED underglow",
      "Geometric timber tray ceiling with suspended cage pendant chandelier"
    ],
    specs: {
      style: "Contemporary Devotional Room",
      finish: "Calacatta Gold Marble & Walnut Veneer",
      mountType: "Integrated Room Architecture",
      idealFor: "Dedicated Family Prayer Rooms & Spiritual Spaces"
    }
  },
  {
    num: 12,
    name: "CHANDRA",
    variant: "Soft Arched Backlit Mandir",
    tagline: "Minimalist • Arched • Contemporary",
    description: "A sleek contemporary arched mandir cabinet finished in matte ivory lacquer with subtle black metal frame detailing. Features an arched sanctum alcove with 3D brass Om, bi-fold perforated dot-matrix ventilation doors, and three deep utility drawers.",
    highlights: [
      "Architectural arched sanctum alcove with warm interior spotlighting",
      "Perforated dot-matrix metal bi-fold doors for ventilation and privacy",
      "Concealed telescopic pull-out brass diya and prasadam tray",
      "Three spacious storage drawers with minimalist matte black round knobs",
      "Slim-profile black metal outer framing for contemporary stability"
    ],
    specs: {
      style: "Modern Minimalist Sanctum",
      finish: "Matte Ivory & Industrial Black Metal",
      mountType: "Floor Standing Cabinet",
      idealFor: "Urban Apartments & Modern Living Rooms"
    }
  },
  {
    num: 13,
    name: "TEJASVI",
    variant: "Warm Amber Acrylic Jaali Shrine",
    tagline: "Symmetrical • Harmonious • Warm",
    description: "A balanced recessed wall temple framed in rich walnut wood with a glowing sunburst floral mandala and Om at its core. Bordered by twin full-height cross-star jaali lattice panels, hanging brass bells, and a dual-tone white and walnut storage console.",
    highlights: [
      "Radiant sunburst floral mandala with illuminated sacred Om",
      "Twin vertical laser-cut cross-star geometric jaali screens",
      "Walnut pelmet with recessed downlight and hanging brass bells",
      "Dual-tone white storage cabinet with decorative brass rosette knobs",
      "Side open display cubbies with integrated warm accent lighting"
    ],
    specs: {
      style: "Symmetrical Recessed Shrine",
      finish: "American Walnut & Matte White Lacquer",
      mountType: "Wall Recessed Built-In",
      idealFor: "Dining Room Niches & Living Room Pooja Alcoves"
    }
  },
  {
    num: 14,
    name: "SAMSKRITA",
    variant: "Twin Column Floating Pooja Unit",
    tagline: "Heritage • Intricate • Devotional",
    description: "A dignified full-height devotional cabinet crafted in deep walnut timber with grand double doors featuring ornate fretwork and brass Om medallions. Inside, a scalloped backlit halo arch illuminates brass deities above dual storage drawers.",
    highlights: [
      "Full-height double wooden doors with intricate jaali and brass Om plates",
      "Scalloped halo arch alcove with radiant warm perimeter backlight",
      "Twin brass bells suspended on heavy chains with festive floral garland",
      "Elevated stepped deity plinth finished in rich dark walnut",
      "Spacious dual drawer chest with solid brass round pull handles"
    ],
    specs: {
      style: "Heritage Wooden Sanctum Cabinet",
      finish: "Rich Dark Walnut & Brushed Brass",
      mountType: "Floor Standing Tall Cabinet",
      idealFor: "Living Room Prayer Corners & Private Sanctums"
    }
  },
  {
    num: 15,
    name: "GOPURAM",
    variant: "Traditional South Indian Gopuram Mandir",
    tagline: "Classical • Marble Pillars • Kalash",
    description: "A traditional South Indian inspired mandapa shrine blending white marble pillars with hand-carved teakwood joinery. A majestic backlit geometric arch frames a carved canopy with solid brass kalash pinnacle and illuminated marble deity niche.",
    highlights: [
      "Turned white marble columns with carved floral wooden capitals",
      "Hand-carved teak entablature crowned with a solid brass kalash pinnacle",
      "Grand outer arch backed by warm illuminated geometric lattice jaali",
      "Warm glowing marble alcove with suspended brass temple bell",
      "Carved teak drawer credenza with decorative brass bail pulls"
    ],
    specs: {
      style: "South Indian Classical Mandapa",
      finish: "Teak Wood, Makrana Marble & Cast Brass",
      mountType: "Floor Standing Heritage Mandir",
      idealFor: "Traditional Households & Dedicated Pooja Halls"
    }
  },
  {
    num: 16,
    name: "VINAYAKA",
    variant: "Polished Corian & Brass Inlay Altar",
    tagline: "Contemporary • Fluted Timber • Ganesha",
    description: "A contemporary prayer alcove framed by full-height vertical teak fluted slats that transition continuously into the ceiling. The focal wall showcases a sculpted brass Ganesha-Om silhouette against a warm backlit textured plaster backdrop under a white jaali pediment.",
    highlights: [
      "Vertical teak fluted timber wall cladding extending overhead",
      "Sculpted brass Ganesha-Om graphic on warm illuminated texture wall",
      "White laser-cut scalloped jaali arch valence with delicate arabesque",
      "Clustered tubular brass pendant downlights hung at staggered levels",
      "Two-tier floating white console with drawers and satin brass knobs"
    ],
    specs: {
      style: "Modern Indian Minimalist",
      finish: "Natural Teak Slats & Textured Ivory Plaster",
      mountType: "Recessed Wall Alcove Unit",
      idealFor: "Modern Apartments & High-End Living Sanctums"
    }
  },
  {
    num: 17,
    name: "SVAYAMBHU",
    variant: "Symmetric Fluted Timber Pooja Console",
    tagline: "Nordic • Shikhara • Luminous",
    description: "A light natural ash mandir cabinet showcasing a sculpted temple shikhara pediment with illuminated Om and bell perforations. Features double bi-fold lattice doors opening to a radiant mandala backdrop, silk toran, and double storage shutters on brass ball feet.",
    highlights: [
      "Sculpted temple shikhara pediment with backlit Om and diya cutouts",
      "Bi-fold doors with stylized openwork botanical ventilation cutouts",
      "Radiant circular sunburst mandala backdrop with warm ambient halo",
      "Festive silk fabric toran with hanging brass temple bells",
      "Base storage cabinet with long brass handles and spherical brass bun feet"
    ],
    specs: {
      style: "Nordic Ash Contemporary Mandir",
      finish: "Bleached Natural Oak & Polished Brass",
      mountType: "Floor Standing Cabinet",
      idealFor: "Contemporary Homes & Compact Devotional Corners"
    }
  },
  {
    num: 18,
    name: "PRAKRITI",
    variant: "Ornate Carved Door Mandir Cabinet",
    tagline: "Botanical • Sage Green • Moon Mandala",
    description: "A refreshing bio-devotional sanctum combining sage green fluted wall panels with a massive circular backlit moon mandala and 3D brass Om. Flanked by tall illuminated arched niche columns with hanging bells and topped with an indoor cascading planter shelf.",
    highlights: [
      "Sage green vertical fluted wall cladding creating natural serenity",
      "Grand circular backlit moon mandala panel with polished brass Om",
      "Twin full-height arched alcoves with concealed perimeter LED cove glow",
      "Overhead floating timber ledge displaying lush cascading indoor plants",
      "Low floating white drawer credenza with natural timber countertop"
    ],
    specs: {
      style: "Biophilic Sacred Design",
      finish: "Sage Green Satin PU & White Corian",
      mountType: "Architectural Feature Wall Unit",
      idealFor: "Modern Nature-Inspired Homes & Villa Sanctums"
    }
  },
  {
    num: 19,
    name: "SHANTAM",
    variant: "Compact Backlit Sacred Geometry Unit",
    tagline: "Courtyard • Earthy • Meditative",
    description: "A peaceful sanctuary nook opening out to garden greenery through floor-to-ceiling glass. Features an architectural scalloped multifoil niche with fluted backplate, paired suspended brass bells, carved stone jharokha accents, and a suspended teak drawer console.",
    highlights: [
      "Architectural scalloped multifoil niche with vertical fluted texture",
      "Floor-to-ceiling sliding glass facade bringing in natural daylight",
      "Paired suspended brass temple bells hanging on slender links",
      "Side wall carved stone medallion relief and recessed arched diya alcove",
      "Cantilevered marble altar slab with suspended three-drawer teak unit"
    ],
    specs: {
      style: "Verandah & Courtyard Sanctum",
      finish: "Lime Plaster, Natural Teak & Quartz",
      mountType: "Recessed Courtyard Nook",
      idealFor: "Garden-Facing Niches & Courtyard Residences"
    }
  },
  {
    num: 20,
    name: "AMRITA",
    variant: "Rich Rosewood Finish Pooja Room",
    tagline: "Pastel • Classical • Chandelier",
    description: "An ethereal luxury prayer room finished in soothing pastel seafoam blue with classical French and Indian mouldings. Features an arched multifoil sanctum with illuminated mandala, an L-shaped marble counter with shaker drawers, a hanging lotus chandelier, and backlit wall jaali.",
    highlights: [
      "Scalloped multifoil sanctum alcove with warm halo glow and etched mandala",
      "Custom lotus petal glass and brass chandelier suspended from cove ceiling",
      "Framed Gayatri Mantra calligraphy panel on left wall with hanging bell",
      "Full-height arched backlit jaali lattice screen on opposing wall",
      "L-shaped marble countertop with seafoam blue shaker drawers and brass knobs"
    ],
    specs: {
      style: "Neo-Classical Fusion Sanctuary",
      finish: "Pastel Seafoam Satin & Bianco Carrara Marble",
      mountType: "Dedicated Room Interior",
      idealFor: "Luxury Residences & Dedicated Pooja Rooms"
    }
  },
  {
    num: 21,
    name: "RADHA",
    variant: "Floating Drawer Console with Diya Pull-Out",
    tagline: "Minimalist • Halo Arch • Foyer Niche",
    description: "A minimalist contemporary foyer mandir featuring a serene arched alcove illuminated by a seamless 360-degree perimeter halo light. Complemented by twin cylindrical brass pendant downlights and a suspended fluted greige console below a white quartz altar.",
    highlights: [
      "Minimalist architectural arched niche with continuous concealed LED halo",
      "Suspended tubular satin brass pendant downlights framing the shrine",
      "Floating fluted greige drawer console with brass edge-pull profile",
      "Seamless white quartz slab altar surface with under-cabinet ambient glow",
      "Flanked by full-height wood grain panel with integrated vertical LED strip"
    ],
    specs: {
      style: "Nordic Minimalist Alcove",
      finish: "Fluted Warm Greige & Satin Gold",
      mountType: "Wall-Hung Floating Console",
      idealFor: "Foyers, Entryways & Modern Apartment Niches"
    }
  },
  {
    num: 22,
    name: "KAMADHENU",
    variant: "Warm Timber Mandir with Integrated Coves",
    tagline: "Pichwai • Heritage Teak • Sacred",
    description: "A traditional handcrafted teakwood temple pavilion crowned with carved floral relief mouldings and turned baluster columns. The sanctum backdrop is adorned with an authentic Pichwai painting of the sacred Kamadhenu cow, rising above three tiers of pristine white marble.",
    highlights: [
      "Solid teakwood carved cornice with intricate floral frieze and turned pillars",
      "Traditional handcrafted Pichwai painting backdrop of sacred Kamadhenu",
      "Three-tier stepped white marble altar for ceremonial deity placement",
      "Heavy-duty telescopic pull-out brass diya and preparation tray",
      "White laminate plinth base housing wide concealed storage drawers"
    ],
    specs: {
      style: "Heritage Rajasthani Mandir",
      finish: "Solid Teak & White Indian Marble",
      mountType: "Floor Standing Pavilion Unit",
      idealFor: "Spacious Living Halls & Devotional Corners"
    }
  },
  {
    num: 23,
    name: "RATNAGARBH",
    variant: "Minimalist White Acrylic Wall Mandir",
    tagline: "Glass Mandir • Walnut • Singhasan",
    description: "A breathtaking walk-in glass-enclosed temple room structured with dark walnut mullions and arched glass double doors embedded with individual brass temple bells. Rests on a floating tiered timber plinth with perimeter lighting, housing a hand-carved heritage deity singhasan.",
    highlights: [
      "Freestanding walk-in glass temple pavilion with walnut framing",
      "Arched glass double doors with authentic brass bells set in window panes",
      "Cantilevered stepped dark timber plinth with warm LED perimeter skirt",
      "Hand-carved heritage dark wood deity singhasan and throne inside",
      "Perimeter ceiling cove lighting with sheer drapery and marble flooring"
    ],
    specs: {
      style: "Walk-In Architectural Glass Mandir",
      finish: "Smoked Walnut, Fluted Glass & Cast Brass",
      mountType: "Freestanding Room-in-Room Pavilion",
      idealFor: "Grand Villa Living Rooms & Luxury Penthouse Salons"
    }
  },
  {
    num: 24,
    name: "VENU",
    variant: "Brass Frame & Natural Stone Altar",
    tagline: "Cane Webbing • Teak • Woven Lattice",
    description: "A harmonious organic-modern temple niche framed in warm teak wood with vertical fluted panelling. A backlit scalloped arch illuminates an intricate woven jaali lattice screen, paired with a floating marble counter and three drawers with natural cane webbing.",
    highlights: [
      "Vertical teak fluted timber panelling framing the entire niche",
      "Backlit scalloped arch enclosing an intricate woven wooden lattice",
      "Central ceiling-mounted hanging brass temple bell and dual spotlights",
      "Suspended three-drawer console with natural woven cane webbing fronts",
      "Polished white marble altar top with warm recessed floor underglow"
    ],
    specs: {
      style: "Japandi-Indian Organic Fusion",
      finish: "Natural Teak & Hand-Woven Rattan Cane",
      mountType: "Recessed Niche Console",
      idealFor: "Natural-Textured Modern Homes & Apartment Niches"
    }
  },
  {
    num: 25,
    name: "SHILPA",
    variant: "Modern Veneer Clad Temple Wall",
    tagline: "Stacked Stone • Glass • Podium",
    description: "A sophisticated corner temple pavilion wrapped in frameless structural glass and crowned with a cantilevered walnut ceiling canopy. The backdrop showcases textured white stacked ledger stone, fronted by a two-tiered illuminated marble podium.",
    highlights: [
      "Two-sided frameless glass corner enclosure offering 270-degree view",
      "Textured white stacked ledger stone feature wall with warm grazing lights",
      "Cantilevered walnut timber ceiling canopy with flush recessed downlights",
      "Two-tier raised marble podium steps with integrated LED riser strip",
      "Ornate bronze deity plinth platform positioned as central focal point"
    ],
    specs: {
      style: "Contemporary Architectural Pavilion",
      finish: "White Ledger Stone, Clear Glass & Walnut",
      mountType: "Corner Architectural Feature",
      idealFor: "Modern Living Areas & Stairwell Foyers"
    }
  },
  {
    num: 26,
    name: "PARAMITA",
    variant: "Wall-Hung Mandir with Bell Accents",
    tagline: "Stately • Walnut • 5-Tier Display",
    description: "A stately devotional sanctuary corridor featuring a symmetrical walnut architectural unit with a central scalloped arch and radiant halo glow. The sanctum is bordered by twin five-tiered illuminated display columns and an expansive walnut drawer credenza.",
    highlights: [
      "Symmetrical built-in walnut cabinetry with central multi-foil halo arch",
      "Backlit stone feature panel etched with circular mandala and sacred Om",
      "Twin five-level illuminated open display columns for brass artifacts",
      "Suspended brass temple bell aligned with walnut tray ceiling lighting",
      "Continuous four-drawer walnut storage credenza with plinth LED skirt"
    ],
    specs: {
      style: "Grand Symmetrical Wall Unit",
      finish: "American Walnut & Warm Travertine Stone",
      mountType: "Full-Wall Built-In Architectural Credenza",
      idealFor: "Dedicated Prayer Corridors & Villa Pooja Rooms"
    }
  },
  {
    num: 27,
    name: "MANDALA",
    variant: "Backlit Golden Mandala Shrine",
    tagline: "Intricate • Jali Doors • 3D Mandala",
    description: "A refined space-saving apartment temple alcove set behind a decorative geometric timber partition screen. Features a sculpted 3D relief mandala in a warm arched niche, flanked by hanging brass bells, and a marble-top lower cabinet with glowing jaali shutters.",
    highlights: [
      "Sculpted 3D relief floral mandala with central Om medallion in arched niche",
      "Twin hanging brass temple bells suspended on brass ceiling links",
      "Upper tier stepped marble shelf for sacred kalash and oil lamps",
      "Polished marble countertop altar with warm ceiling spotlight",
      "Double-door lower storage cabinet with illuminated laser-cut jaali panels"
    ],
    specs: {
      style: "Apartment Alcove Shrine",
      finish: "Warm Cream PU & Walnut Fretwork",
      mountType: "Recessed Niche Unit",
      idealFor: "Apartments & Dining Area Prayer Niches"
    }
  },
  {
    num: 28,
    name: "DEVAM",
    variant: "Understated Marble Plinth Shrine",
    tagline: "Lotus Dome • Bas-Relief • Palatial",
    description: "A palatial sacred room centered around a breathtaking concentric circular ceiling dome with sculpted lotus carvings. A full-height scalloped marble alcove displays a white bas-relief mandala with gold Om, flanked by twin glowing timber jaali screens and a teak console.",
    highlights: [
      "Illuminated concentric circular ceiling dome with carved lotus medallion",
      "Full-height scalloped arch marble alcove with bas-relief mandala and gold Om",
      "Twin full-height floor-to-ceiling illuminated timber jaali screens",
      "Cantilevered three-drawer floating teak credenza with perimeter underglow",
      "Right wall integrated open wooden cubbies and ceremonial display shelving"
    ],
    specs: {
      style: "Palatial Neo-Classical Mandir",
      finish: "Calacatta White Marble & Burma Teak",
      mountType: "Dedicated Room Architectural Ensemble",
      idealFor: "Luxury Bungalows & Sprawling Estates"
    }
  },
  {
    num: 29,
    name: "RISHIKESH",
    variant: "High-Gloss Corian Pooja Pavilion",
    tagline: "Gold Jaali Doors • Etched Mandala • Opulent",
    description: "An ultra-luxurious prayer sanctum screened by full-height gold metallic fretwork jaali pivot doors. Inside, a glowing scalloped arch frames an intricate laser-etched mandala on polished marble, set over a floating white drawer console with underglow.",
    highlights: [
      "Full-height pivoting gold metallic fretwork jaali screen doors",
      "Scalloped halo arch marble backdrop with laser-etched mandala and Om",
      "Twin traditional heavy brass temple bells hanging on extended brass chains",
      "Two-tier stepped white marble altar platform for ceremonial worship",
      "Floating three-drawer storage console with continuous floor LED glow"
    ],
    specs: {
      style: "Opulent Golden Screen Sanctuary",
      finish: "Brushed Gold Metallic Jaali & Pure White Marble",
      mountType: "Recessed Sanctum with Pivoting Screens",
      idealFor: "Luxury Living Rooms & Private Worship Suites"
    }
  },
  {
    num: 30,
    name: "GAYATRI",
    variant: "Warm Scandinavian Oak Pooja Niche",
    tagline: "Gayatri Mantra • Gloss Walnut • Samai Diya",
    description: "A distinctive freestanding temple tower finished in high-gloss rich walnut with intricate cross-diamond lattice jaali side panels. The illuminated timber backdrop features glowing Sanskrit Gayatri Mantra calligraphy, a radiant Om mandala, and glowing samai diya silhouettes.",
    highlights: [
      "Glowing Sanskrit Gayatri Mantra inscription in luminous Devanagari script",
      "Radiant central backlit Om mandala with silhouette samai diya illumination",
      "Full-height side panels and arched pediment with cross-diamond lattice jaali",
      "Two-tier pristine white acrylic/marble stepped altar surface",
      "Dual pull-out bottom utility drawers with polished chrome knobs"
    ],
    specs: {
      style: "Inscribed Devotional Tower",
      finish: "High-Gloss Walnut & Translucent Acrylic",
      mountType: "Floor Standing Mandir Tower",
      idealFor: "Living Rooms & Dedicated Meditation Spaces"
    }
  },
  {
    num: 31,
    name: "SURYA",
    variant: "Wave-Pattern CNC Backlit Shrine",
    tagline: "Rustic Stone • Surya Chandra • Earthy",
    description: "An earthy and spiritual temple niche defined by a textured rustic stone brick feature wall. Centered with a solid brass celestial Surya-Chandra plaque and four hanging brass bells of staggered heights, anchored by a low walnut drawer plinth and brass urli bowl.",
    highlights: [
      "Natural textured stacked stone brick cladding feature wall backdrop",
      "Handcrafted brass celestial Surya-Chandra (Sun-Moon) wall plaque",
      "Four hanging brass temple bells suspended at staggered architectural heights",
      "Cantilevered wooden ceiling canopy with dual recessed spotlights",
      "Low-profile walnut drawer chest resting over polished marble flooring"
    ],
    specs: {
      style: "Rustic Earthy Devotional Niche",
      finish: "Exposed Split-Stone Brick & Natural Walnut",
      mountType: "Floor Standing Console with Clad Wall",
      idealFor: "Farmhouses, Earthy Villas & Corridor Niches"
    }
  },
  {
    num: 32,
    name: "ARADHANA",
    variant: "Open-Air Floating Cantilever Mandir",
    tagline: "Tree-of-Life • Carved Ceiling • Gallery",
    description: "A private prayer corridor entered past a sliding timber door with an illuminated tree-of-life laser cutout. The altar features a sunburst petal backlit Om on white marble, framed by twin full-height glowing geometric jaali screens and a carved ceiling dome medallion.",
    highlights: [
      "Full-height timber sliding entrance door with backlit tree-of-life silhouette",
      "Central white marble shrine wall with radiant sunburst petal backlit Om",
      "Twin floor-to-ceiling floral geometric jaali screens with suspended brass bells",
      "Ornate circular ceiling medallion rose with perimeter ambient LED cove",
      "Low cantilevered drawer plinth with continuous floor underglow"
    ],
    specs: {
      style: "Private Gallery Shrine",
      finish: "Burma Teak & Statuario Marble",
      mountType: "Dedicated Devotional Passage Unit",
      idealFor: "Passage Foyers & Dedicated Pooja Corridors"
    }
  },
  {
    num: 33,
    name: "SWARNA",
    variant: "Radiant Brass & Onyx Stone Altar",
    tagline: "Yantra Dome • Marble Inlay • Stool",
    description: "A magnificent classical temple portal in pristine white marble with a scalloped multifoil arch and corner backlit filigree jaali. Houses a celestial yantra ceiling dome, glowing 3D Om halo, marble steps with gold floral inlay, and lower cabinets with a matching prayer stool.",
    highlights: [
      "Scalloped multifoil marble portal arch with corner backlit filigree screens",
      "Circular celestial yantra dome ceiling with indirect warm cove illumination",
      "Multi-tier marble altar steps adorned with gold mother-of-pearl floral inlays",
      "Vertical fluted marble side pilasters with twin hanging brass temple bells",
      "Lower cabinetry featuring engraved gold lotus medallions and roll-out stool"
    ],
    specs: {
      style: "Classical Marble Portal Mandir",
      finish: "Pure White Thassos Marble & Mother-of-Pearl Inlay",
      mountType: "Recessed Architectural Portal",
      idealFor: "Luxury Pooja Chambers & Villa Sanctuaries"
    }
  },
  {
    num: 34,
    name: "DARSHAN",
    variant: "Double-Tiered Idol Sanctum Cabinet",
    tagline: "Carved Teak • Turned Pillars • Halo Arch",
    description: "A heritage-inspired teakwood mandir ensemble combining traditional hand-carved timber arches with contemporary backlit elements. Features an ornate floral carved teak arch with turned pillars, illuminated circular top Om medallion, glowing marble alcove, and full-height side jaali screens.",
    highlights: [
      "Hand-carved solid teak archway with floral spandrels and turned pillars",
      "Upper timber frieze with illuminated circular Om medallion and spotlights",
      "Scalloped halo arched marble backdrop with central glowing brass Om",
      "Flanking full-height laser-cut geometric lattice screens with hanging bells",
      "Wide dual-tone floating credenza with off-white handleless drawer storage"
    ],
    specs: {
      style: "Heritage Teak Architectural Shrine",
      finish: "Hand-Carved Teak & Honed White Marble",
      mountType: "Built-In Wall Credenza Ensemble",
      idealFor: "Spacious Pooja Rooms & Traditional Residences"
    }
  },
  {
    num: 35,
    name: "KASTHIRA",
    variant: "Classical Mandapa-Style Home Temple",
    tagline: "Solid Sheesham • Starburst Jaali • Stepped",
    description: "A distinguished freestanding mandir tower handcrafted in premium Sheesham hardwood with exquisite starburst geometric lattice screens. Inside, a carved wooden circular mandala adorns the timber backdrop above stepped wooden deity risers and brass-accented drawers.",
    highlights: [
      "Handcrafted solid Sheesham hardwood construction with rich natural grains",
      "Starburst geometric openwork jaali on side walls and arched top valence",
      "Sculpted circular mandala relief plaque on solid timber back-panel",
      "Multi-tier stepped solid wood risers for multiple deity sculptures",
      "Dual utility storage drawers and lower shutter cabinet with brass knobs"
    ],
    specs: {
      style: "Solid Hardwood Heritage Tower",
      finish: "Natural Sheesham with Hand-Rubbed Oil Polish",
      mountType: "Freestanding Temple Tower",
      idealFor: "Living Rooms & Devotional Study Areas"
    }
  },
  {
    num: 36,
    name: "NIRVANA",
    variant: "Sacred Om Feature Wall Pooja Unit",
    tagline: "Glass Pavilion • Deck Plinth • Gopuram",
    description: "An extraordinary modern architectural garden prayer pavilion enclosed in floor-to-ceiling frameless glass. Stepped timber deck plinths lead inside to an elevated marble floor with a hand-carved miniature stone gopuram sanctum and golden sunburst relief under a timber ceiling.",
    highlights: [
      "Floor-to-ceiling frameless glass facade with brushed metallic vertical pull",
      "Stepped timber deck entry plinth with integrated floor-level diya lanterns",
      "Architectural portal surround with continuous linear LED lighting channels",
      "Hand-carved miniature stone gopuram shrine with golden sunburst relief",
      "Warm timber tongue-and-groove ceiling with precision grid downlights"
    ],
    specs: {
      style: "Modern Garden Glass Pavilion",
      finish: "Structural Glass, Ipe Wood Decking & Carved Stone",
      mountType: "Garden / Verandah Enclosure",
      idealFor: "Courtyard Villas, Penthouse Terraces & Luxury Estates"
    }
  },
  {
    num: 37,
    name: "VAIDURYA",
    variant: "Modern Architectural Glass-Enclosed Mandir",
    tagline: "Thassos Marble • Floral Inlay • Yantra",
    description: "An exquisite all-white sanctum pavilion celebrating classical Indian stonecraft. Boasts an ornate scalloped multifoil arch with backlit filigree tracery, a celestial yantra ceiling dome, and pristine marble steps inlaid with mother-of-pearl floral patterns.",
    highlights: [
      "Scalloped multifoil marble arch with corner backlit filigree jaali panels",
      "Celestial geometric yantra ceiling dome with indirect perimeter cove light",
      "Pristine white marble stepped altar with gold floral mother-of-pearl inlays",
      "Vertical fluted marble side walls with twin suspended brass temple bells",
      "Integrated lower vanity drawers with gold lotus engravings and mobile stool"
    ],
    specs: {
      style: "Palatial White Stone Sanctum",
      finish: "Pure Thassos Marble & Gold Leaf Highlights",
      mountType: "Recessed Marble Portal",
      idealFor: "Grand Devotional Chambers & Villa Sanctuaries"
    }
  },
  {
    num: 38,
    name: "GANESHAYA",
    variant: "Zen-Inspired Natural Ashwood Mandir",
    tagline: "Backlit Ganesha • Walnut • Telescopic Tray",
    description: "A graceful walnut floor-standing mandir console distinguished by a luminous central Lord Ganesha silhouette backdrop flanked by glowing diya motifs. Features a white fretwork arch valance with bell cutouts, side idol ledges, and a concealed telescopic diya tray.",
    highlights: [
      "Radiant backlit Lord Ganesha silhouette backplate with glowing diya icons",
      "White laser-cut floral fretwork arch valance with bell-shaped cutouts",
      "Multi-tiered stepped side ledges for supplementary deity placement",
      "Concealed telescopic slide-out diya and incense preparation tray",
      "Deep double-door walnut storage cabinet on chrome cylinder legs"
    ],
    specs: {
      style: "Contemporary Freestanding Console",
      finish: "Warm American Walnut & Translucent Acrylic",
      mountType: "Floor Standing Console on Metal Legs",
      idealFor: "Apartments & Living Room Pooja Corners"
    }
  },
  {
    num: 39,
    name: "GAJARAJA",
    variant: "Full-Wall Pooja Room with Hidden Storages",
    tagline: "Olive Sage • Royal Elephants • Jharokha",
    description: "A majestic full-height architectural temple wall finished in bespoke olive sage lacquer. The commanding double doors feature intricately carved panels of royal elephants, sacred lotuses, and jharokha arches, opening to a glowing central Om sanctum.",
    highlights: [
      "Full-height bi-fold doors with carved elephant, lotus, and jharokha motifs",
      "Central scalloped halo arch alcove with radiant sunburst Om mandala",
      "Suspended solid brass temple bell aligned with warm ceiling downlight",
      "Intermediate illuminated display alcove above double shaker cabinets",
      "Full-length satin brass vertical bar handles and matching cabinet knobs"
    ],
    specs: {
      style: "Heritage Architectural Cabinetry",
      finish: "Olive Sage Satin Lacquer & Warm Brass Accents",
      mountType: "Floor-to-Ceiling Built-In Wall Unit",
      idealFor: "Villas & Dedicated Residential Pooja Rooms"
    }
  },
  {
    num: 40,
    name: "SHIVALAYA",
    variant: "Sculpted Stone & Warm Cove Sanctum",
    tagline: "Pure White • Floral Jaali • Classical Credenza",
    description: "A sublime all-white neo-classical pooja room radiating divine tranquility. Features a central scalloped arch with a glowing sunburst petal Om backplate, framed by twin full-height illuminated floral jaali screens, an upper showcase ledge, and a shaker credenza.",
    highlights: [
      "Scalloped halo arched niche with luminous sunburst petal Om backplate",
      "Twin full-height illuminated white floral fretwork jaali screen panels",
      "Suspended traditional brass temple bells with ceiling downlight focus",
      "Upper illuminated display ledge showcasing miniature temple architecture",
      "Four-door shaker credenza with gold brass knobs and continuous underglow"
    ],
    specs: {
      style: "Neo-Classical Pure White Sanctuary",
      finish: "High-Durability Matte White PU & Cast Brass Accents",
      mountType: "Full-Wall Devotional Architecture",
      idealFor: "Large Luxury Residences & Dedicated Pooja Rooms"
    }
  },
  {
    num: 41,
    name: "SURYAJYOTI",
    variant: "Sunburst Carved Backplate Pooja Shrine",
    tagline: "Fluted Column • Folding Jaali • Sunburst Om",
    description: "An elegant built-in white pooja niche seamlessly integrated between architectural fluted columns. Double folding geometric jaali doors reveal an illuminated scalloped arch with a radiant sunburst lotus Om mandala, suspended brass bell, and multi-tier drawer console.",
    highlights: [
      "Bi-fold laser-cut geometric jaali doors folding flush into side reveals",
      "Scalloped arch alcove with radiant sunburst lotus mandala and glowing Om",
      "Interior flanking backlit geometric lattice vertical border strips",
      "Suspended brass temple bell centered beneath recessed spotlight",
      "Tiered white drawer console with brass hardware and illuminated plinth shelf"
    ],
    specs: {
      style: "Column-Integrated Sanctum Niche",
      finish: "Satin White Lacquer & Fluted Millwork",
      mountType: "Recessed Architectural Column Unit",
      idealFor: "Living Room Partition Columns & Entryway Niches"
    }
  },
  {
    num: 42,
    name: "MURLIDHAR",
    variant: "Complete Luxury Residential Pooja Chamber",
    tagline: "Black Marquina • Krishna • Burnt Sienna",
    description: "A dramatic monumental prayer chamber of dark luxury and spiritual grandeur. Features a stepped black Marquina marble podium with golden riser lighting, a burnt sienna backdrop with sculpted 3D bronze lotus blossoms, and dark smoked oak fluted panelling.",
    highlights: [
      "Two-tier stepped black Marquina marble podium with glowing LED riser strip",
      "Burnt sienna textured alcove with hand-sculpted 3D bronze lotus blossoms",
      "Grand scalloped arch frame with warm indirect perimeter halo glow",
      "Smoked oak dark vertical fluted wall cladding extending to tray ceiling",
      "Twin oversized brass temple bells suspended on heavy architectural chains"
    ],
    specs: {
      style: "Dramatic Dark Luxury Chamber",
      finish: "Black Marquina Marble, Burnt Sienna & Smoked Oak",
      mountType: "Monumental Walk-In Sacred Chamber",
      idealFor: "Ultra-Luxury Penthouse & Villa Devotional Sanctuaries"
    }
  }
];

const entries = modelsData.map(m => {
  const numStr = String(m.num).padStart(2, '0');
  const code = `TD-S${m.num}-${m.name}`;
  const pageNum = `P/${numStr}`;
  const imgPath = `/assets/catalogues/temple-space/temple-${numStr}.jpg`;

  return `    {
      number: "${numStr}",
      rawNumber: ${m.num},
      modelName: "${m.name}",
      modelCode: "${code}",
      variant: "${m.variant}",
      pageNumber: "${pageNum}",
      description: "${m.description.replace(/"/g, '\\"')}",
      highlights: [
${m.highlights.map(h => `        "${h.replace(/"/g, '\\"')}"`).join(',\n')}
      ],
      tagline: "${m.tagline}",
      specs: {
        style: "${m.specs.style}",
        finish: "${m.specs.finish}",
        mountType: "${m.specs.mountType}",
        idealFor: "${m.specs.idealFor}"
      },
      image: "${imgPath}"
    }`;
}).join(',\n');

const fullContent = `export interface TempleDesignSpec {
  style: string;
  finish: string;
  mountType: string;
  idealFor: string;
}

export interface TempleDesignEntry {
  number: string; // e.g. "01"
  rawNumber: number;
  modelName: string; // e.g. "PADMA"
  modelCode: string; // e.g. "TD-S1-PADMA"
  variant: string; // exact manager variant
  pageNumber: string; // e.g. "P/01"
  description: string; // concise, professional summary matching exact image
  highlights?: string[]; // 4-5 bullet points appearing vertically
  tagline: string; // e.g. "Lotus • Radiance • Serenity"
  specs: TempleDesignSpec;
  image: string;
}

export interface TempleCatalogueData {
  title: string;
  subtitle: string;
  tagline: string;
  companyName: string;
  collectionName: string;
  intro: {
    heading: string;
    description: string;
    pillars: { title: string; desc: string }[];
  };
  contact: {
    tagline: string;
    statement: string;
    phone: string;
    email: string;
    website: string;
    location: string;
    instagram: string;
  };
  designs: TempleDesignEntry[];
}

export const templeDesignLuxuryData: TempleCatalogueData = {
  title: 'TEMPLE DESIGN',
  subtitle: 'SACRED SANCTUMS & POOJA ARCHITECTURE',
  tagline: 'Ideas Into Spaces',
  companyName: 'CAPSULE INTERIORS',
  collectionName: 'Capsule Temple Design Master Catalogue',
  intro: {
    heading: 'SACRED ARCHITECTURE FOR MODERN HOMES',
    description:
      'At Capsule Interiors, we believe the temple space is the spiritual heart of every home. Our devotional shrines seamlessly bridge sacred Vastu principles with contemporary craftsmanship. Each temple unit is thoughtfully engineered with warm halo illumination, precision laser-cut jaali screens, concealed diya trays, and moisture-resistant finishes that honor your prayer traditions with timeless serenity.',
    pillars: [
      {
        title: 'Vastu & Harmony',
        desc: 'Proportions and orientations crafted according to time-tested sacred geometry for peaceful household energy.',
      },
      {
        title: 'Master Craftsmanship',
        desc: 'Precision laser-cut brass, hand-buffed hardwoods, and pristine stone plinths built for devotional longevity.',
      },
      {
        title: 'Thoughtful Utility',
        desc: 'Concealed telescopic brass diya drawers, integrated agarbatti storage, and soft indirect halo lighting.',
      },
    ],
  },
  contact: {
    tagline: 'BRING DIVINE HARMONY TO YOUR HOME',
    statement:
      'Every Capsule temple unit is custom-scaled and manufactured to order. Connect with our sacred space designers to tailor your devotional sanctum.',
    phone: '+91 99000 88888 / +91 98450 12345',
    email: 'designs@capsulecompany.in',
    website: 'www.capsulecompany.in',
    location: 'Indiranagar & HSR Layout, Bengaluru, Karnataka',
    instagram: '@capsuleinteriors.in',
  },
  designs: [
${entries}
  ]
};
`;

fs.writeFileSync('src/data/templeDesignLuxuryData.ts', fullContent, 'utf8');
console.log('Successfully updated src/data/templeDesignLuxuryData.ts with all 42 models!');
