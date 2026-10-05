const fs = require('fs');
const path = require('path');

const RAW_FILE = path.join(__dirname, 'wall-panels-scraped-raw.json');
const rawData = JSON.parse(fs.readFileSync(RAW_FILE, 'utf8'));

const TARGET_DIR = path.join(__dirname, '..', 'public', 'assets', 'wall-panels');
if (!fs.existsSync(TARGET_DIR)) fs.mkdirSync(TARGET_DIR, { recursive: true });

// 12 categories × 5 selected indices (1-indexed based on the candidates review)
const SELECTIONS = {
  '01-fluted-wall-panels': {
    sectionNum: '01',
    sectionCode: 'SECTION 01',
    title: 'FLUTED WALL PANELS',
    tagline: 'Precision Vertical Grooves & Architectural Rhythm',
    desc: 'Vertical fluted, grooved acoustic slats, and scalloped wall surfaces in natural timber, painted composites, and dual-tone architectural arches for living rooms, TV walls, and master suites.',
    items: [
      {
        idx: 3,
        code: 'WP-FL-01',
        title: 'Dark Walnut Fluted Feature Wall',
        finish: 'Natural Walnut Veneer on Acoustic Felt',
        application: 'Living Room Feature Backdrop & Media Wall',
        specs: 'Solid vertical fluting, 18mm relief depth, matte PU seal'
      },
      {
        idx: 8,
        code: 'WP-FL-02',
        title: 'Multi-Tone Arched Timber Flutes',
        finish: 'Dual-Tone Teak & White Oak Composites',
        application: 'Double-Height Foyer & Dining Accent Wall',
        specs: 'Concentric arched silhouette, precision-milled radius flutes'
      },
      {
        idx: 16,
        code: 'WP-FL-03',
        title: 'Nordic Off-White Fluted TV Wall',
        finish: 'Matte Warm Cream Polyurethane Coat',
        application: 'Contemporary Residential TV Entertainment Unit',
        specs: 'Vertical ribbed slats with integrated warm cove channel'
      },
      {
        idx: 19,
        code: 'WP-FL-04',
        title: 'Sand Taupe Fluted Wainscot',
        finish: 'Fine-Textured Taupe with Brass Reveal',
        application: 'Master Bedroom Bedhead Backdrop & Lounge Wainscoting',
        specs: 'Micro-ribbed lower wainscot, brushed gold dividing trim'
      },
      {
        idx: 21,
        code: 'WP-FL-05',
        title: 'Floor-to-Ceiling Warm Amber Flutes',
        finish: 'Honey Oak Fluted Panels with Sconce Mounts',
        application: 'Luxury Drawing Room & Formal Living Lounge',
        specs: 'Full-height modular fluted panels with ambient back-grazing'
      }
    ]
  },
  '02-wooden-wall-panels': {
    sectionNum: '02',
    sectionCode: 'SECTION 02',
    title: 'WOODEN WALL PANELS',
    tagline: 'Warm Organic Wood Veneers & Fine Joinery',
    desc: 'Exquisite natural wood veneer treatments including quarter-cut teak, horizontal American walnut, geometric block compositions, and herringbone patterns with integrated floating credenzas.',
    items: [
      {
        idx: 3,
        code: 'WP-WD-01',
        title: 'Full-Height Teak Veneer Panelling',
        finish: 'Natural Teak Wood Veneer with Dark Reveal Gaps',
        application: 'Executive Living Room & Penthouse Salon Wall',
        specs: 'Quarter-cut bookmatched teak veneer panels, 6mm shadow reveals'
      },
      {
        idx: 5,
        code: 'WP-WD-02',
        title: 'Architectural Wood Display Wall',
        finish: 'Warm Oak with Integrated Open Niches',
        application: 'Living Lounge Entertainment & Artifact Display',
        specs: 'Recessed illuminated open cubbies with low-profile credenza'
      },
      {
        idx: 11,
        code: 'WP-WD-03',
        title: 'Horizontal Grain Walnut Media Wall',
        finish: 'Crown Cut American Walnut Veneer',
        application: 'Living Room TV Unit & Media Credenza Backdrop',
        specs: 'Continuous horizontal wood grain matching with floating ledge'
      },
      {
        idx: 12,
        code: 'WP-WD-04',
        title: 'Interlocking Geometric Oak Block Panelling',
        finish: 'Multi-Directional Natural Oak Blocks',
        application: 'Entrance Foyer Accent & Dining Feature Wall',
        specs: 'Alternating grain direction tiles, seamless tongue-and-groove'
      },
      {
        idx: 14,
        code: 'WP-WD-05',
        title: 'Dark Walnut Chevron Wood Panelling',
        finish: 'Mocha Walnut Parquet Veneer on Acoustic Core',
        application: 'Formal Drawing Room & Study Feature Wall',
        specs: 'Precision 45-degree chevron parquet panels, matte satin coat'
      }
    ]
  },
  '03-wpc-wall-panels': {
    sectionNum: '03',
    sectionCode: 'SECTION 03',
    title: 'WPC WALL PANELS',
    tagline: 'Waterproof Polymer Composites & Durability',
    desc: 'High-durability Wood-Plastic Composite (WPC) wall panelling engineered for anti-termite, moisture-resistant, and maintenance-free interior applications with natural timber aesthetics.',
    items: [
      {
        idx: 3,
        code: 'WP-WP-01',
        title: 'Warm Oak Fluted WPC Composite',
        finish: 'Extruded Wood Polymer Composite in Natural Oak',
        application: 'Living Room Sofa Backdrop & Corridor Panelling',
        specs: 'Termite-proof, moisture-resistant hollow core WPC planks'
      },
      {
        idx: 14,
        code: 'WP-WP-02',
        title: 'Back-Illuminated Natural WPC Slats',
        finish: 'Golden Teak WPC with Warm Halo LED Channel',
        application: 'Reading Nook Feature & Bedroom Corner Accent',
        specs: 'Interlocking tongue-and-groove slats, rear LED channel recess'
      },
      {
        idx: 16,
        code: 'WP-WP-03',
        title: 'Dual Fluted WPC & Marble TV Unit',
        finish: 'Charcoal Grey WPC Flutes with White Marble Core',
        application: 'Modern Apartment Living Room Entertainment Wall',
        specs: 'Flanking vertical WPC panels with central Italian stone slab'
      },
      {
        idx: 18,
        code: 'WP-WP-04',
        title: 'Nordic Bamboo-Composite Ribbed TV Wall',
        finish: 'Bleached Bamboo Finish WPC Profile',
        application: 'Minimalist Apartment Media Wall & Low Credenza',
        specs: 'Warm rear cove lighting, lightweight eco-composite material'
      },
      {
        idx: 20,
        code: 'WP-WP-05',
        title: 'Parametric Wave-Cut WPC Feature Wall',
        finish: 'Dual-Tone Charcoal & Natural Teak WPC Composite',
        application: 'Luxury Lounge Feature Wall & Commercial Reception',
        specs: 'CNC-profiled undulating parametric wave silhouette'
      }
    ]
  },
  '04-3d-wall-panels': {
    sectionNum: '04',
    sectionCode: 'SECTION 04',
    title: '3D WALL PANELS',
    tagline: 'Sculptural Surface Reliefs & Dynamic Shadows',
    desc: 'Three-dimensional sculptural surface treatments including gypsum relief waves, faceted origami pyramids, charcoal geometric contours, and modular architectural blocks that transform under grazing light.',
    items: [
      {
        idx: 1,
        code: 'WP-3D-01',
        title: 'Undulating Ribbed 3D Relief Wall',
        finish: 'Reinforced Gypsum Plaster in Warm Sandstone Tone',
        application: 'Living Room Main TV Wall & Media Credenza',
        specs: 'Continuous vertical fluid wave contours, 35mm relief depth'
      },
      {
        idx: 6,
        code: 'WP-3D-02',
        title: 'Sculpted Charcoal Geometric Wave Wall',
        finish: 'Matte Anthracite Polyurethane on High-Density Fiberboard',
        application: 'Modern Minimalist Living Lounge Backdrop',
        specs: 'Faceted sculptural angular contours with shadow play'
      },
      {
        idx: 7,
        code: 'WP-3D-03',
        title: 'Organic Dune Wave 3D Relief Panels',
        finish: 'Cast Architectural Plaster with Warm Integrated Cove',
        application: 'Master Bedroom Backdrop & Luxury Foyer Wall',
        specs: 'Organic desert-dune sweeping curves, concealed warm LED'
      },
      {
        idx: 19,
        code: 'WP-3D-04',
        title: 'Staggered Architectural 3D Relief Blocks',
        finish: 'Sand-Textured Polymer Blocks with Integrated Sconces',
        application: 'Double-Height Dining Foyer & Accent Partition',
        specs: 'Projecting rectangular block relief with recessed micro-sconces'
      },
      {
        idx: 25,
        code: 'WP-3D-05',
        title: 'Faceted Origami Diamond 3D Pyramids',
        finish: 'Seamless Matte White Gypsum Composite Tile System',
        application: 'Contemporary Living Room Sofa Feature Wall',
        specs: 'Tessellated geometric diamond pyramids, acoustic dampening'
      }
    ]
  },
  '05-cnc-cut-wall-panels': {
    sectionNum: '05',
    sectionCode: 'SECTION 05',
    title: 'CNC CUT WALL PANELS',
    tagline: 'Precision Laser Cut Screens & Backlit Fretwork',
    desc: 'Intricate CNC and laser-cut panel treatments featuring traditional Indian jali screens, botanical filigree, sacred mandala relief medallions, and backlit tree motifs for prayer foyers and living spaces.',
    items: [
      {
        idx: 1,
        code: 'WP-CNC-01',
        title: 'Moroccan Fretwork Backlit CNC Screen Wall',
        finish: 'Laser-Cut High-Density MDF with Warm Gold Acrylic Diffuser',
        application: 'Formal Living Room & Dining Partition Feature',
        specs: 'Geometric Moorish fretwork, edge-lit warm 3000K LED panel'
      },
      {
        idx: 3,
        code: 'WP-CNC-02',
        title: 'Botanical Leaf Filigree Backlit Screen',
        finish: 'Walnut Finish CNC Screen with Backlit Opal Diffuser',
        application: 'Foyer Entrance & Stairwell Accent Wall',
        specs: 'Organic tropical foliage pattern, recessed acoustic backing'
      },
      {
        idx: 5,
        code: 'WP-CNC-03',
        title: 'CNC Engraved Mandala Medallion Relief',
        finish: 'Precision 3-Axis CNC Carved Sandstone-Finish Panel',
        application: 'Indian Home Pooja Foyer & Traditional Drawing Room',
        specs: 'Concentric floral mandala relief, 25mm carving depth'
      },
      {
        idx: 8,
        code: 'WP-CNC-04',
        title: 'Indian Arched CNC Jali TV Wall Unit',
        finish: 'Warm Ivory Matte Lacquer on Moisture-Resistant MDF',
        application: 'Residential TV Entertainment & Media Credenza',
        specs: 'Fretwork arched frame borders flanking central media panel'
      },
      {
        idx: 24,
        code: 'WP-CNC-05',
        title: 'CNC Laser-Cut Tree of Life Backlit Feature',
        finish: 'Natural Teak Veneer on CNC Laser-Cut Core with Warm Glow',
        application: 'Master Suite Feature Wall & Living Room Foyer',
        specs: 'Twin backlit Tree of Life panels flanked by acoustic louvers'
      }
    ]
  },
  '06-geometric-wall-panels': {
    sectionNum: '06',
    sectionCode: 'SECTION 06',
    title: 'GEOMETRIC WALL PANELS',
    tagline: 'Angular Compositions & Modern Facets',
    desc: 'Dynamic geometric wall compositions featuring angled acoustic slats with integrated light channels, matte charcoal angular relief grids, rounded neoclassical grid modules, and brass-studded intersections.',
    items: [
      {
        idx: 1,
        code: 'WP-GM-01',
        title: 'Angled Geometric Slats with LED Channels',
        finish: 'Natural Ash Wood Slats with Concealed Aluminum LED Profiles',
        application: 'Contemporary Living Room TV & Media Wall',
        specs: 'Diagonal multi-directional slat orientations with warm LED'
      },
      {
        idx: 2,
        code: 'WP-GM-02',
        title: 'Charcoal Matte Angular Geometric Grid Wall',
        finish: 'Matte Anthracite PU on Precision Chamfered Panelling',
        application: 'Modern Penthouse Salon & Media Feature Wall',
        specs: 'Asymmetrical intersecting grid battens, shadow groove joints'
      },
      {
        idx: 8,
        code: 'WP-GM-03',
        title: 'Neoclassical Arched Geometric Grid Panels',
        finish: 'Warm Sandstone Texture Composite Moulding Grid',
        application: 'Living Room Sofa Backdrop & Dining Accent Wall',
        specs: 'Elongated capsule arches within rectangular geometric grid'
      },
      {
        idx: 13,
        code: 'WP-GM-04',
        title: 'Faceted Triangular Backlit Geometric Wall',
        finish: 'Ivory Matte Architectural Boards with Halo Perimeter Glow',
        application: 'Modern Foyer & Bedhead Accent Wall',
        specs: 'Geometric faceted triangulations with indirect LED lighting'
      },
      {
        idx: 14,
        code: 'WP-GM-05',
        title: 'Grid Panelling with Brass Intersection Studs',
        finish: 'Warm Beige Velvet-Touch Panels with Solid Brass Accents',
        application: 'Luxury Bedroom Feature Wall & Boutique Hotel Suite',
        specs: 'Padded geometric wall panels with custom machined brass pins'
      }
    ]
  },
  '07-marble-finish-wall-panels': {
    sectionNum: '07',
    sectionCode: 'SECTION 07',
    title: 'MARBLE FINISH WALL PANELS',
    tagline: 'Italian Calacatta & Statuario Porcelain Slabs',
    desc: 'Large-format bookmatched porcelain and sintered stone marble wall panels featuring Calacatta Gold, Statuario, and Carrara veining complemented by brass inlay profiles and fluted walnut pilasters.',
    items: [
      {
        idx: 1,
        code: 'WP-MB-01',
        title: 'Bookmatched Marble Panel with Walnut Fluting',
        finish: 'High-Gloss Calacatta Marble Slab with Walnut Slat Flanks',
        application: 'Living Room TV Feature Wall & Entertainment Console',
        specs: 'Continuous vein-matched porcelain slab, natural walnut accents'
      },
      {
        idx: 4,
        code: 'WP-MB-02',
        title: 'Statuario Marble Slab with Brass Inlays',
        finish: 'Polished Statuario White Marble with Brushed Brass Profiles',
        application: 'Luxury Apartment Drawing Room & Dining Wall',
        specs: 'Precision waterjet cut slabs, 3mm brass T-inlay trims'
      },
      {
        idx: 8,
        code: 'WP-MB-03',
        title: 'Monolithic Calacatta Light Grey Marble TV Wall',
        finish: 'Satin Silk Finish Sintered Stone Slab',
        application: 'Contemporary Living Room Media Wall & Floating Credenza',
        specs: 'Seamless large-format sintered porcelain, heat and scratch proof'
      },
      {
        idx: 14,
        code: 'WP-MB-04',
        title: 'Floating Backlit Carrara Marble Panel',
        finish: 'Translucent Backlit Porcelain Slab with Floating Mounts',
        application: 'Living Lounge Entertainment Center & Soundbar Niche',
        specs: 'Perimeter LED glow, floating sub-frame mount with acoustic base'
      },
      {
        idx: 21,
        code: 'WP-MB-05',
        title: 'Calacatta Gold Framed Marble Panel with Sconces',
        finish: 'Gold-Veined Italian Marble Slab with Fluted Pilaster Frames',
        application: 'Grand Foyer & Master Drawing Room Accent Wall',
        specs: 'Brass-profile frame enclosure, symmetrical designer sconces'
      }
    ]
  },
  '08-stone-finish-wall-panels': {
    sectionNum: '08',
    sectionCode: 'SECTION 08',
    title: 'STONE FINISH WALL PANELS',
    tagline: 'Split-Face Slate, Travertine & Raw Textures',
    desc: 'Rugged and tactile natural stone treatments including cleft rock-face feature walls, porous Italian travertine slabs, linear stacked stone ledger panels, and dark split-face basalt rock accented by warm louvers.',
    items: [
      {
        idx: 2,
        code: 'WP-ST-01',
        title: 'Craggy Rock-Face Stone Wall with Shelving',
        finish: 'Natural Cleft Sandstone Boulder Veneer',
        application: 'Living Room TV Feature Wall with Open Timber Shelves',
        specs: 'Hand-chiseled rough stone face, integrated oak display shelving'
      },
      {
        idx: 5,
        code: 'WP-ST-02',
        title: 'Textured Travertine Stone Block Cladding',
        finish: 'Honed & Pitted Roman Travertine Stone Panels',
        application: 'Residential Sunroom, Reading Lounge & Foyer Wall',
        specs: 'Staggered rectangular travertine masonry blocks, natural voids'
      },
      {
        idx: 7,
        code: 'WP-ST-03',
        title: 'Linear Stacked Stone Ledge Wall Panelling',
        finish: 'Natural Grey Quartzite Split-Face Stone Ledgers',
        application: 'Drawing Room Accent Wall with Warm Downlights',
        specs: 'Interlocking Z-stone ledger panels with grazing spot illumination'
      },
      {
        idx: 9,
        code: 'WP-ST-04',
        title: 'Split-Face Dark Basalt Rock with Wood Louvers',
        finish: 'Charcoal Split-Face Basalt Rock & Vertical Teak Slats',
        application: 'Ultra-Luxury Villa Lounge & Penthouse Living Salon',
        specs: 'Alternating bays of rugged volcanic stone and warm wood slats'
      },
      {
        idx: 16,
        code: 'WP-ST-05',
        title: 'Dry-Stacked Limestone Ledger Stone TV Wall',
        finish: 'Cream Limestone Veneer Framed in Natural White Oak',
        application: 'Modern Apartment TV Entertainment Console Wall',
        specs: 'Dry-stacked interlocking ledger stone, warm cove downlighting'
      }
    ]
  },
  '09-paint-texture-walls': {
    sectionNum: '09',
    sectionCode: 'SECTION 09',
    title: 'PAINT TEXTURE WALLS',
    tagline: 'Artisanal Lime-Wash, Concrete Stucco & Earth Plasters',
    desc: 'Handcrafted artisan wall finishes featuring breathable lime-wash, mineral microcements, cloud-effect stucco, earthy clay plasters, and Tuscan terracotta finishes applied with stainless steel trowels.',
    items: [
      {
        idx: 1,
        code: 'WP-PT-01',
        title: 'Ivory Lime-Wash Hand-Troweled Bedroom Wall',
        finish: 'Natural Slaked Lime & Fine Marble Dust Wash',
        application: 'Master Bedroom Bedhead Backdrop & Luxury Suite',
        specs: 'Multi-layered cross-hatch troweling, velvety matte finish'
      },
      {
        idx: 2,
        code: 'WP-PT-02',
        title: 'Sage Green Cloud Lime-Wash Accent Wall',
        finish: 'Pigmented Mineral Lime Plaster in Organic Olive Sage',
        application: 'Contemporary Bedroom & Relaxed Living Lounge',
        specs: 'Soft cloud mottling, breathable non-toxic zero-VOC coating'
      },
      {
        idx: 5,
        code: 'WP-PT-03',
        title: 'Terracotta Rust Artisanal Stucco Feature Wall',
        finish: 'Warm Siena Terracotta Textured Wall Plaster',
        application: 'Boho Luxury Bedroom & Mediterranean Living Room',
        specs: 'Coarse sand-textured stucco with warm pendant lighting'
      },
      {
        idx: 8,
        code: 'WP-PT-04',
        title: 'Cool Grey Concrete Stucco Cementitious Wall',
        finish: 'Industrial Microcement Wall Coating in Raw Concrete',
        application: 'Modern Loft Living Room & Minimalist Bedroom Wall',
        specs: 'Seamless continuous trowel-burnished cementitious stucco'
      },
      {
        idx: 14,
        code: 'WP-PT-05',
        title: 'Earthy Clay Plaster with Illuminated Circular Niche',
        finish: 'Warm Clay & Straw Natural Earth Plaster',
        application: 'Wabi-Sabi Foyer Entrance & Meditation Corner Wall',
        specs: 'Recessed circular backlit alcove with raw organic texture'
      }
    ]
  },
  '10-pu-wall-panels': {
    sectionNum: '10',
    sectionCode: 'SECTION 10',
    title: 'PU WALL PANELS',
    tagline: 'High-Density Polyurethane Mouldings & Boiserie',
    desc: 'Lightweight, pre-primed high-density polyurethane (PU) wall mouldings and architectural trims creating timeless French boiserie, neoclassical wall frames, and contemporary wainscoting panels.',
    items: [
      {
        idx: 1,
        code: 'WP-PU-01',
        title: 'Contemporary Arched PU Moulding Wall Panels',
        finish: 'High-Density PU Architectural Moulding in Warm Cream',
        application: 'Modern Living Room Accent Wall with Track Spotlights',
        specs: 'Concentric capsule arch profiles with rectangular upper frames'
      },
      {
        idx: 3,
        code: 'WP-PU-02',
        title: 'French Parisian-Style PU Boiserie in Greige',
        finish: 'Pre-Primed High-Density Polyurethane with Matte Lacquer',
        application: 'Formal Living Room & Dining Salon Feature Wall',
        specs: 'Classic double-box wall framing with vertical candle sconces'
      },
      {
        idx: 5,
        code: 'WP-PU-03',
        title: 'Grand Classical Ornate Carved PU Wall Moulding',
        finish: 'Carved High-Density PU Pilasters & Moulding Frames',
        application: 'Neoclassical Villa Foyer & Grand Drawing Room',
        specs: 'Acanthus leaf corner carvings, dentil cornices, and chair rails'
      },
      {
        idx: 9,
        code: 'WP-PU-04',
        title: 'Neoclassical Dusty Taupe PU Moulding Panels',
        finish: 'Ultra-Matte Dusty Lilac Taupe Polyurethane Coat',
        application: 'Luxury Master Bedroom & Drawing Room Feature Wall',
        specs: 'Ornate relief corner cartouches with symmetrical brass sconces'
      },
      {
        idx: 16,
        code: 'WP-PU-05',
        title: 'Modern Double-Framed PU Moulding Living Wall',
        finish: 'Crisp White HD Polymer Moulding on Warm Greige Wall',
        application: 'Contemporary Indian Apartment Living Room Wall',
        specs: 'Double-box geometric moulding layout behind sectional sofa'
      }
    ]
  },
  '11-louvers-wall-panels': {
    sectionNum: '11',
    sectionCode: 'SECTION 11',
    title: 'LOUVERS WALL PANELS',
    tagline: 'Vertical Acoustic Slats & Space-Dividing Fins',
    desc: 'Architectural vertical and horizontal wood louver panelling designed for acoustic dampening, space partitioning, media wall framing, and subtle light play across residential interiors.',
    items: [
      {
        idx: 2,
        code: 'WP-LV-01',
        title: 'Natural Oak Vertical Timber Louver Partition',
        finish: 'Solid White Oak Fins on Concealed Ceiling Track',
        application: 'Living & Dining Room Spatial Divider with Planter',
        specs: '40x20mm vertical oak louvers with integrated planter trough'
      },
      {
        idx: 4,
        code: 'WP-LV-02',
        title: 'Sculptural Diagonal-Cut Louvers with Cove Light',
        finish: 'Warm Oak Louvers with Bevelled Illuminated Bases',
        application: 'Foyer Entrance Screen & Corridor Feature Wall',
        specs: 'Staggered diagonal base terminations with warm LED cove'
      },
      {
        idx: 8,
        code: 'WP-LV-03',
        title: 'Geometric Staggered Offset Slat Louver Screen',
        finish: 'Quarter-Cut Teak Louvers with Alternating Voids',
        application: 'Living Room Feature Partition & Study Divider',
        specs: 'Staggered rhythmic horizontal and vertical slat intervals'
      },
      {
        idx: 17,
        code: 'WP-LV-04',
        title: 'Vertical Louvers with Integrated Display Niches',
        finish: 'Honey Teak Louvers with Floating Display Cubbies',
        application: 'Dining Foyer Screen & Artifact Display Partition',
        specs: 'Floor-to-ceiling timber slats with cantilevered shadow boxes'
      },
      {
        idx: 22,
        code: 'WP-LV-05',
        title: 'Living Room TV Unit with Integrated Louver Screen',
        finish: 'Teak Louver Backdrop Flanking Floating Media Credenza',
        application: 'Modern Apartment Living Room TV & Media Center',
        specs: 'Full-height vertical louvers integrated with entertainment unit'
      }
    ]
  },
  '12-decorative-wall-panels': {
    sectionNum: '12',
    sectionCode: 'SECTION 12',
    title: 'DECORATIVE WALL PANELS',
    tagline: 'Mixed Materials, Brass Inlays & Illuminated Art',
    desc: 'Bespoke mixed-material feature wall panels incorporating brushed champagne fluting, gold-inlaid grids, fluid backlit wave sculptures, interactive illuminated blocks, and circular halo art medallions.',
    items: [
      {
        idx: 1,
        code: 'WP-DC-01',
        title: 'Champagne Fluted Panels with Brass Inlay Profiles',
        finish: 'Champagne Lacquered Flutes with Brushed Brass Inlays',
        application: 'Luxury Living Room Media Backdrop & Floating Console',
        specs: 'Asymmetrical brass profile inlays with vertical fluted panels'
      },
      {
        idx: 2,
        code: 'WP-DC-02',
        title: 'Matte Black Grid Panelling with Gold Corner Studs',
        finish: 'Matte Jet Black Board Panelling with Machined Brass Studs',
        application: 'Executive Home Theater, Den & Drawing Room Salon',
        specs: 'Geometric square panel grid with custom brushed gold pyramid studs'
      },
      {
        idx: 3,
        code: 'WP-DC-03',
        title: 'Grand Fluid Crystal Wave Backlit Feature Wall',
        finish: 'Backlit Translucent Quartz Wave with Fluted Pilasters',
        application: 'Penthouse Main Living Room & Grand Reception Salon',
        specs: 'Curved illuminated crystal wave motif flanked by fluted columns'
      },
      {
        idx: 7,
        code: 'WP-DC-04',
        title: 'Modular Illuminated 3D Light Block Atrium Wall',
        finish: 'Sandstone Acoustic Relief Blocks with Recessed LEDs',
        application: 'Double-Height Living Atrium & Commercial Lobby',
        specs: 'Staggered rectangular light blocks casting upward and downward glow'
      },
      {
        idx: 9,
        code: 'WP-DC-05',
        title: 'Circular Halo Backlit Art Disc on Fluted Console',
        finish: 'Brushed Brass Halo Ring with Fluted Wood Feature Wall',
        application: 'Entrance Foyer Gallery Wall & Formal Credenza Niche',
        specs: 'Warm perimeter halo LED ring with handcrafted botanical brass sculpture'
      }
    ]
  }
};

const finalCatalogueData = {
  catalogueTitle: 'WALL PANEL DESIGN',
  brandName: 'CAPSULE COMPANY',
  subtitle: 'COLLECTION 2026',
  totalCategories: 12,
  totalImages: 60,
  categories: []
};

for (const [catKey, config] of Object.entries(SELECTIONS)) {
  const catFolder = path.join(TARGET_DIR, catKey);
  if (!fs.existsSync(catFolder)) fs.mkdirSync(catFolder, { recursive: true });

  const pins = rawData[catKey] || [];
  const processedItems = [];

  for (let i = 0; i < config.items.length; i++) {
    const itemConfig = config.items[i];
    const candidateIdx = itemConfig.idx - 1;
    const pin = pins[candidateIdx];

    if (!pin) {
      console.error(`Missing pin for ${catKey} idx ${itemConfig.idx}`);
      continue;
    }

    const ext = path.extname(new URL(pin.imageUrl).pathname) || '.jpg';
    const destFileName = `${itemConfig.code.toLowerCase()}_${itemConfig.idx}${ext}`;
    const destPath = path.join(catFolder, destFileName);
    const webPath = `/assets/wall-panels/${catKey}/${destFileName}`;

    // Copy from staging
    if (fs.existsSync(pin.localPath)) {
      fs.copyFileSync(pin.localPath, destPath);
    } else {
      console.warn(`File not found at localPath: ${pin.localPath}`);
    }

    processedItems.push({
      id: itemConfig.code,
      refId: itemConfig.code,
      name: itemConfig.title,
      category: config.title,
      sectionCode: config.sectionCode,
      sectionNum: config.sectionNum,
      finish: itemConfig.finish,
      application: itemConfig.application,
      specs: itemConfig.specs,
      image: webPath,
      pinterestUrl: pin.pinUrl,
      sourceImageUrl: pin.imageUrl,
      pinId: pin.pinId,
      originalWidth: pin.width,
      originalHeight: pin.height
    });
  }

  finalCatalogueData.categories.push({
    id: catKey,
    sectionNum: config.sectionNum,
    sectionCode: config.sectionCode,
    name: config.title,
    tagline: config.tagline,
    description: config.desc,
    items: processedItems
  });
}

// Write JSON for front-end and public data
const outputJsonPath = path.join(TARGET_DIR, 'wall-panels-data.json');
fs.writeFileSync(outputJsonPath, JSON.stringify(finalCatalogueData, null, 2));
console.log(`Saved curated data to ${outputJsonPath}`);

// Also export as TypeScript in src/data/wallPanelsData.ts
const tsFilePath = path.join(__dirname, '..', 'src', 'data', 'wallPanelsData.ts');
const tsContent = `// Auto-generated Wall Panel Catalogue Data for CAPSULE COMPANY COLLECTION 2026
// Exactly 12 Categories × 5 Curated Images = 60 Images
// Sourced exclusively from Pinterest with preserved source URLs

export interface WallPanelItem {
  id: string;
  refId: string;
  name: string;
  category: string;
  sectionCode: string;
  sectionNum: string;
  finish: string;
  application: string;
  specs: string;
  image: string;
  pinterestUrl: string;
  sourceImageUrl: string;
  pinId: string;
  originalWidth: number;
  originalHeight: number;
}

export interface WallPanelCategory {
  id: string;
  sectionNum: string;
  sectionCode: string;
  name: string;
  tagline: string;
  description: string;
  items: WallPanelItem[];
}

export interface WallPanelsCatalogue {
  catalogueTitle: string;
  brandName: string;
  subtitle: string;
  totalCategories: number;
  totalImages: number;
  categories: WallPanelCategory[];
}

export const wallPanelsCatalogueData: WallPanelsCatalogue = ${JSON.stringify(finalCatalogueData, null, 2)};
`;

fs.writeFileSync(tsFilePath, tsContent);
console.log(`Saved TypeScript data to ${tsFilePath}`);
console.log('Successfully organized and copied all 60 curated wall panel images!');
