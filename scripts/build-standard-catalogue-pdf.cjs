const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const data = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'public', 'assets', 'wall-panels', 'wall-panels-data.json'), 'utf8'));
const logoBase64 = fs.readFileSync(path.join(__dirname, '..', 'public', 'logo.png')).toString('base64');
const logoSrc = `data:image/png;base64,${logoBase64}`;

const coverA4Path = path.join(__dirname, '..', 'public', 'covers', 'wall-panel-cover-a4.jpg');
const coverA4Base64 = fs.readFileSync(coverA4Path).toString('base64');
const coverA4Src = `data:image/jpeg;base64,${coverA4Base64}`;

// Comprehensive curated highlights and taglines mapped by code
const modelMeta = {
  // 1. FLUTED
  'WP-FL-01': {
    name: 'DARK WALNUT FLUTED',
    desc: 'A statement architectural wall panelling system defined by vertical rhythm, precision joinery, and warm perimeter ambient illumination.',
    highlights: [
      'Natural walnut veneer surface with protective matte seal',
      'Sound-dampening acoustic felt core backing',
      'Precision 18mm relief vertical fluted profiles',
      'Concealed wall-cleat mounting system for seamless joints'
    ],
    tagline: 'Natural Walnut • Acoustic Felt • Capsule Company'
  },
  'WP-FL-02': {
    name: 'CONCENTRIC ARCH FLUTE',
    desc: 'Curvilinear architectural timber arches with graduating vertical flutes, engineered for double-height living salons and formal foyers.',
    highlights: [
      'Dual-tone natural teak and white oak composites',
      'Concentric arched silhouette with radius-milled curves',
      'Integrated warm LED cove grazing channel',
      'High-stability moisture-resistant architectural substrate'
    ],
    tagline: 'Dual-Tone Oak • Architectural Arch • Capsule Company'
  },
  'WP-FL-03': {
    name: 'NORDIC CREAM SLATS',
    desc: 'Minimalist Scandinavian ribbed slatted wall treatment in warm off-white lacquer, ideal for clean entertainment media backdrops.',
    highlights: [
      'Matte warm off-white polyurethane protective coating',
      'Vertical rhythmic acoustic relief with uniform groove depth',
      'Seamless panel-to-panel tongue-and-groove interlocking',
      'Hidden cable access raceways for audio-video integration'
    ],
    tagline: 'Nordic Cream • Minimalist Flute • Capsule Company'
  },
  'WP-FL-04': {
    name: 'SMOKED OAK SLATS',
    desc: 'Deep smoked oak slatted paneling paired with charcoal acoustic felt backing, delivering superior acoustic absorption and bold contrast.',
    highlights: [
      'Authentic smoked oak timber with natural open grain',
      'High-performance sound dampening acoustic underlay',
      'Ultra-crisp 12mm slender relief vertical fins',
      'Scratch-resistant and UV-stable commercial grade seal'
    ],
    tagline: 'Smoked Oak • Acoustic Slats • Capsule Company'
  },
  'WP-FL-05': {
    name: 'CURVED RADIUS FLUTING',
    desc: 'Continuous radius-curved corner wall panelling offering soft sculptural transitions between dining spaces and luxury living rooms.',
    highlights: [
      'Natural ash wood veneer with continuous grain matching',
      'Flexible radius backing engineered for curved partition walls',
      'Zero visible hardware with rear interlocking clips',
      'Protective clear satin coat resisting household stains'
    ],
    tagline: 'Ash Wood • Curved Radius • Capsule Company'
  },

  // 2. WOODEN
  'WP-WD-01': {
    name: 'QUARTER-CUT TEAK',
    desc: 'Refined architectural teak wall panelling with vertical shadow-line reveals, handcrafted for executive suites and living backdrops.',
    highlights: [
      'Authentic quarter-cut natural teak architectural veneers',
      'Precision 6mm black shadow-line vertical reveals',
      'Pre-finished multi-coat UV polyurethane protective seal',
      'Modular aluminum z-clip fastening for rapid alignment'
    ],
    tagline: 'Quarter-Cut Teak • Warm Grain • Capsule Company'
  },
  'WP-WD-02': {
    name: 'AMERICAN WALNUT BLOCKS',
    desc: 'Staggered rectangular American walnut veneer blocks creating a rich textured checkerboard rhythm across expansive interior walls.',
    highlights: [
      'Solid core MDF faced with prime American walnut veneer',
      'Dynamic staggered relief depths casting subtle shadows',
      'Chamfered edge profiles preventing chipped corners',
      'Eco-friendly zero-VOC organic timber wax finish'
    ],
    tagline: 'American Walnut • Bookmatched • Capsule Company'
  },
  'WP-WD-03': {
    name: 'HORIZONTAL SLATTED OAK',
    desc: 'Horizontal linear timber paneling that visually expands room width while dampening reverberation in luxury home theaters and bedrooms.',
    highlights: [
      'European white oak with distinctive straight grain figure',
      'Horizontal architectural slats with recessed dark felt lines',
      'Concealed screwless mounting system',
      'Acoustic reverberation control for calm living spaces'
    ],
    tagline: 'Horizontal Oak • Linear Rhythm • Capsule Company'
  },
  'WP-WD-04': {
    name: 'WALNUT & BRASS INLAY',
    desc: 'Bespoke combination of vertical dark walnut panelling accented by razor-thin satin brushed brass inlays for opulent master suites.',
    highlights: [
      'Dark stained walnut veneer with deep color saturation',
      'Solid hairline brushed brass metal divider inlays',
      'Factory precision-milled joints with zero tolerance',
      'Luxury residential focal wall for headboards and salons'
    ],
    tagline: 'Walnut & Brass • Metallic Accent • Capsule Company'
  },
  'WP-WD-05': {
    name: 'CHEVRON PARQUET WALL',
    desc: 'Artisanal French chevron patterned wood wall panelling showcasing dynamic natural grain directions and refined craftsmanship.',
    highlights: [
      'Hand-assembled chevron angled natural timber blocks',
      'Contrasting light and shadow grain reflections',
      'Tongue-and-groove perimeter for seamless expanses',
      'Hardwearing commercial matte lacquer topcoat'
    ],
    tagline: 'Chevron Parquet • Artisanal Grain • Capsule Company'
  },

  // 3. WPC
  'WP-WP-01': {
    name: 'FLUTED COMPOSITE WPC',
    desc: 'High-density Wood-Plastic Composite fluted panels combining authentic timber aesthetics with zero maintenance and 100% moisture immunity.',
    highlights: [
      'High-grade Wood-Plastic Composite polymer formulation',
      '100% moisture-proof, termite-resistant, and rot-proof',
      'Realistic embossed 3D natural wood grain texture',
      'Interlocking tongue-and-groove profile for invisible joints'
    ],
    tagline: 'Composite WPC • Moisture-Proof • Capsule Company'
  },
  'WP-WP-02': {
    name: 'CHARCOAL LOUVER WPC',
    desc: 'Architectural matte charcoal WPC slats designed for heavy-traffic corridors, foyer feature walls, and semi-outdoor living patios.',
    highlights: [
      'Deep charcoal tone through-color non-fading pigmentation',
      'High impact resistance against daily scuffs and dents',
      'Easy wipe-clean surface requiring no periodic polishing',
      'Lightweight modular structure reducing wall load'
    ],
    tagline: 'Charcoal WPC • Zero Maintenance • Capsule Company'
  },
  'WP-WP-03': {
    name: 'NORDIC OAK WPC SLATS',
    desc: 'Scandinavian blonde oak aesthetic rendered in durable composite material, bringing warmth to contemporary residential interiors.',
    highlights: [
      'Scandinavian light oak timber grain finish',
      'Fire-retardant B1 class interior building certification',
      'Thermal insulation and minor sound-deadening properties',
      'Concealed starter and finishing trim accessories'
    ],
    tagline: 'Natural Oak Tone • Fire-Retardant • Capsule Company'
  },
  'WP-WP-04': {
    name: 'WIDE FLUTED WPC WALL',
    desc: 'Substantial wide-profile fluted composite paneling delivering architectural scale and depth to large entertainment wall surfaces.',
    highlights: [
      'Wide scalloped fluted contour with deep visual relief',
      'Unaffected by high humidity, air-conditioning, or moisture',
      'Eco-friendly composition containing recycled polymers',
      'Snap-lock installation system reducing site labor time'
    ],
    tagline: 'Wide Flute • Humidity-Resistant • Capsule Company'
  },
  'WP-WP-05': {
    name: 'DUAL-TONE WPC ACCENT',
    desc: 'Modern dual-tone composite paneling with alternating contrasting ribs, delivering high visual energy to modern apartments.',
    highlights: [
      'Dual-color contrast rib profile design',
      'Superior dimensional stability resisting temperature warpage',
      'Hidden clip mounting system compatible with any wall type',
      'Maintenance-free long-term residential warranty'
    ],
    tagline: 'Dual-Tone WPC • Eco-Polymer • Capsule Company'
  },

  // 4. 3D
  'WP-3D-01': {
    name: 'FLORAL SCULPTED WOOD RELIEF',
    desc: 'Sculptural three-dimensional floral petal relief wall carved with precision contouring, creating dynamic shadows under directional lighting.',
    highlights: [
      'Artisanal floral petal geometric 3D relief carving',
      'Natural beechwood tone with protective matte satin finish',
      'Dynamic shadow play that transforms with room lighting',
      'Modular panel installation with precision interlocking seams'
    ],
    tagline: 'Floral Relief • Sculptural Wood • Capsule Company'
  },
  'WP-3D-02': {
    name: 'UNDULATING WAVE 3D',
    desc: 'Fluid vertical undulating ribbon relief that flows seamlessly across walls, bringing dynamic organic rhythm into contemporary lounges.',
    highlights: [
      'Continuous vertical fluid wave contours with 35mm relief depth',
      'High-density reinforced mineral gypsum composite substrate',
      'Seamless joinery ready for bespoke designer paint finishes',
      'Integrated ceiling cove lighting projection compatibility'
    ],
    tagline: 'Fluid Waves • Seamless Gypsum • Capsule Company'
  },
  'WP-3D-03': {
    name: 'FACETED ORIGAMI 3D',
    desc: 'Angular geometric origami topography featuring crisp multifaceted peaks and valleys for bold cutting-edge architectural statements.',
    highlights: [
      'Multi-faceted geometric angular pyramid composition',
      'Crisp precision creases generating dramatic shadow gradients',
      'Lightweight high-impact engineered polymer construction',
      'Ultra-modern focal point for executive offices and lounges'
    ],
    tagline: 'Faceted Origami • Dynamic Shadow • Capsule Company'
  },
  'WP-3D-04': {
    name: 'PYRAMIDAL DIAMOND 3D',
    desc: 'Geometric diamond pyramid modular panel system offering tactile texture and acoustic diffusion for luxury media and entertainment rooms.',
    highlights: [
      'Three-dimensional diamond pyramid modular relief pattern',
      'Acoustic diffusion performance breaking room sound flutter',
      'Pre-formed tiles with interlocking rear mounting clips',
      'Durable scratch-proof surface with satin pearl finish'
    ],
    tagline: 'Pyramidal Grid • Acoustic Diffusion • Capsule Company'
  },
  'WP-3D-05': {
    name: 'UNDULATING RIBBON WAVE 3D',
    desc: 'Continuous horizontal undulating wave contours sculpted in high-relief acoustic gypsum, enhanced by warm integrated linear cove backlighting.',
    highlights: [
      'Sculptural undulating ribbon wave contours with 40mm relief depth',
      'Integrated concealed warm 3000K LED linear cove backlighting',
      'Reinforced acoustic mineral gypsum composite construction',
      'Seamless architectural statement wall for luxury living salons'
    ],
    tagline: 'Undulating Waves • Cove Illumination • Capsule Company'
  },

  // 5. CNC CUT
  'WP-CN-01': {
    name: 'GEOMETRIC LASER JALI',
    desc: 'Computer-controlled laser cut geometric latticework paneling, ideal for partition screens, temple backdrops, and decorative accent walls.',
    highlights: [
      'High-precision CNC laser cut geometric latticework pattern',
      'High-density exterior-grade moisture-resistant MDF substrate',
      'Automotive-grade polyurethane spray coat in flawless white',
      'Subtle shadow projection with rear ambient backlight'
    ],
    tagline: 'Laser Cut Jali • Precision Fretwork • Capsule Company'
  },
  'WP-CN-02': {
    name: 'ARABESQUE BACKLIT SCREEN',
    desc: 'Intricate traditional arabesque filigree screen backed by a milky acrylic light diffuser for radiant, diffused evening illumination.',
    highlights: [
      'Intricate interlocking floral arabesque motif fretwork',
      'Integrated shatterproof acrylic light diffuser panel',
      'Even light distribution with energy-efficient 3000K warm LEDs',
      'Precision chamfered edge finishing on all cutouts'
    ],
    tagline: 'Arabesque Motif • Backlit Acrylic • Capsule Company'
  },
  'WP-CN-03': {
    name: 'BOTANICAL FOLIAGE WALL',
    desc: 'Organic branching tree and leaf laser-cut silhouette paneling creating an enchanting forest canopy effect inside contemporary residences.',
    highlights: [
      'Fluid botanical leaf and branch silhouette pattern',
      'Solid surface acrylic polymer substrate resistant to warping',
      'Concealed edge profile framing with hidden wiring conduit',
      'Creates a peaceful biophilic visual centerpiece'
    ],
    tagline: 'Botanical Filigree • Luminous Glow • Capsule Company'
  },
  'WP-CN-04': {
    name: 'SACRED MANDALA PANEL',
    desc: 'Concentric circular mandala fretwork carved with microscopic precision, enriched with a luminous brushed brass backing plate.',
    highlights: [
      'Concentric sacred geometry mandala radial relief',
      'Luminous brushed brass metal underlay for rich contrast',
      'Hand-finished smooth internal cutout radii',
      'Designed specifically for pooja mandirs and meditative foyers'
    ],
    tagline: 'Sacred Mandala • Brass Underlayer • Capsule Company'
  },
  'WP-CN-05': {
    name: 'LINEAR SLIT SCREEN',
    desc: 'Modern architectural vertical slit fretwork with varying slot frequencies, delivering sophisticated privacy filtering and light interplay.',
    highlights: [
      'Variable-frequency vertical linear slit cutouts',
      'Dual-layer composition with sound-absorbing acoustic backing',
      'High-stability marine-grade substrate with matte black seal',
      'Architectural divider screen between living and dining zones'
    ],
    tagline: 'Linear Slit • Variable Rhythm • Capsule Company'
  },

  // 6. GEOMETRIC
  'WP-GM-01': {
    name: 'HEXAGONAL HONEYCOMB',
    desc: 'Modular interlocking hexagonal panels in staggered depths and alternating finishes, crafting an energetic contemporary statement wall.',
    highlights: [
      'Interlocking hexagonal honeycomb modular modules',
      'Multi-depth panel projection creating architectural dimensionality',
      'Contrast finishes combining natural oak with matte charcoal',
      'Concealed magnetic mounting system for modular flexibility'
    ],
    tagline: 'Hexagonal Grid • Multi-Depth • Capsule Company'
  },
  'WP-GM-02': {
    name: 'DIAGONAL BRASS INLAY',
    desc: 'Dramatic angular diagonal grooving inlaid with real satin brushed brass strips against a rich dark walnut timber wall surface.',
    highlights: [
      'Dynamic angled diagonal groove pattern geometry',
      'Genuine brushed satin brass metal T-profile inlays',
      'Deep American walnut natural veneer backdrop',
      'Statement wall design for executive dining salons'
    ],
    tagline: 'Diagonal Brass • Walnut Backdrop • Capsule Company'
  },
  'WP-GM-03': {
    name: 'POLYGONAL FACETED WALL',
    desc: 'Asymmetrical faceted architectural wall cladding featuring integrated perimeter light channels that trace every polygonal facet.',
    highlights: [
      'Asymmetric polygonal faceted panels with sharp fold lines',
      'Recessed warm LED light ribbons outlining geometric edges',
      'Smooth acoustic microfiber upholstery on selected facets',
      'Ultra-luxurious media wall for penthouse living salons'
    ],
    tagline: 'Polygonal Facet • Concealed LED • Capsule Company'
  },
  'WP-GM-04': {
    name: 'RECTILINEAR BLOCK GRID',
    desc: 'Proportioned rectilinear modules combining rich timber veneers, matte stone panels, and subtle recessed bronze reveal channels.',
    highlights: [
      'Balanced rectilinear grid layout with architectural proportions',
      'Harmonious interplay of warm wood, soft stone, and metal',
      'Uniform 8mm recessed shadow reveals between panels',
      'Hidden cable access for integrated display shelving'
    ],
    tagline: 'Rectilinear Grid • Harmonious Blend • Capsule Company'
  },
  'WP-GM-05': {
    name: 'CHEVRON ACCENT WALL',
    desc: 'Bold chevron-patterned panelling directing the eye upward to increase perceived room height while delivering tailored luxury.',
    highlights: [
      'Sharp angled chevron layout with precision mitred corner joints',
      'Natural honey oak grain flow aligned with diagonal pattern',
      'Non-reflective satin lacquer protecting against UV fading',
      'Seamless modular sections for fast, accurate site assembly'
    ],
    tagline: 'Chevron Oak • Vertical Dimension • Capsule Company'
  },

  // 7. MARBLE
  'WP-MB-01': {
    name: 'BOOKMATCHED CALACATTA',
    desc: 'Ultra-luxury bookmatched porcelain marble slabs with mirror-image golden and grey veining, flanked by fluted timber reveals.',
    highlights: [
      'Mirror-image bookmatched Calacatta Gold veining layout',
      'Large-format sintered stone porcelain with zero porosity',
      'Flanked by vertical walnut fluted timber side accents',
      'Stain-proof, heat-proof, and impervious to household cleaners'
    ],
    tagline: 'Calacatta Gold • Bookmatched Slabs • Capsule Company'
  },
  'WP-MB-02': {
    name: 'NERO MARQUINA MARBLE',
    desc: 'Dramatic deep black marble slab featuring striking high-contrast white crystalline veining, finished in a honed satin texture.',
    highlights: [
      'Deep black base with dramatic lightning-bolt white veins',
      'Honed anti-glare satin surface that resists fingerprints',
      'Lightweight sintered stone construction reducing wall load',
      'Concealed mechanical hanging brackets for absolute safety'
    ],
    tagline: 'Nero Marquina • Dramatic Contrast • Capsule Company'
  },
  'WP-MB-03': {
    name: 'TRANSLUCENT ONYX SLAB',
    desc: 'Luminous natural onyx-effect stone slab engineered with continuous LED backlighting, glowing warmly as an architectural light sculpture.',
    highlights: [
      'Translucent stone-composite slab with amber and cream veining',
      'Uniform rear LED light sheet with zero hot spots or dark zones',
      'Dimmable 2700K to 4000K tunable white illumination control',
      'Centerpiece installation for luxury entertainment bars'
    ],
    tagline: 'Statuario Onyx • Translucent Glow • Capsule Company'
  },
  'WP-MB-04': {
    name: 'ARMANI GREY COMBO',
    desc: 'Understated Grigio Armani marble finish paired with matte black vertical fluting, offering balanced masculine elegance.',
    highlights: [
      'Refined Armani grey stone surface with subtle linear veining',
      'Contrasting matte charcoal vertical fluted side framing',
      'Precision mitred edge joinery with seamless corner returns',
      'Integrated floating credenza mount point with wire concealment'
    ],
    tagline: 'Armani Grey • Marble & Flute • Capsule Company'
  },
  'WP-MB-05': {
    name: 'CALACATTA & FLUTED VITRINE',
    desc: 'Grand architectural entertainment wall uniting a bookmatched Calacatta marble slab, dark vertical fluted timber slats, and glass vitrines.',
    highlights: [
      'Large-format bookmatched Calacatta marble sintered slab',
      'Dark stained vertical fluted timber accent columns',
      'Integrated floating media credenza with warm under-glow',
      'Flanked by ambient illuminated glass-front display vitrines'
    ],
    tagline: 'Calacatta Gold • Fluted Slats • Capsule Company'
  },

  // 8. STONE
  'WP-ST-01': {
    name: 'SPLIT-FACE SLATE ROCK',
    desc: 'Rugged cleft natural split-face slate stone feature wall bringing authentic raw earthy texture and mountain-lodge warmth indoors.',
    highlights: [
      'Natural cleft split-face slate with raw tactile dimensionality',
      'Dramatic texture accentuated by perimeter raking spotlights',
      'Tightly interlocked stone tiles with concealed mortar joints',
      'Dust-sealed with breathable matte architectural protective coat'
    ],
    tagline: 'Split-Face Slate • Tactile Relief • Capsule Company'
  },
  'WP-ST-02': {
    name: 'LINEAR STACKED STONE',
    desc: 'Precision cut dry-stacked natural sandstone ledger strips forming a continuous horizontal linear stone tapestry for living rooms.',
    highlights: [
      'Multi-tonal dry-stacked sandstone with subtle ochre accents',
      'Continuous horizontal rhythm enhancing room width',
      'Natural thermal mass and acoustic reverberation absorption',
      'Resistant to heat, making it ideal for fireplace surroundings'
    ],
    tagline: 'Stacked Stone • Earthy Palette • Capsule Company'
  },
  'WP-ST-03': {
    name: 'VOLCANIC BASALT STONE',
    desc: 'Deep charcoal volcanic basalt stone panels with porous cleft relief, lending rich organic drama to luxury apartment interiors.',
    highlights: [
      'Dark volcanic basalt stone texture with authentic cleft relief',
      'Engineered ultra-thin stone veneer technology for easy wall loading',
      'Moisture-impervious and non-combustible building material',
      'Industrial-luxe statement wall for dining and cocktail zones'
    ],
    tagline: 'Volcanic Basalt • Industrial Luxe • Capsule Company'
  },
  'WP-ST-04': {
    name: 'CHISELED LIMESTONE',
    desc: 'Soft ivory natural limestone wall cladding featuring hand-chiseled surface variations that reflect gentle ambient illumination.',
    highlights: [
      'Soft cream and ivory limestone with authentic chiseled texture',
      'Subtle mineral fossil details and natural tonal gradations',
      'Smooth calibrated reverse side for flush wall adherence',
      'Evokes Mediterranean villa and Tuscan estate elegance'
    ],
    tagline: 'Cream Limestone • Chiseled Texture • Capsule Company'
  },
  'WP-ST-05': {
    name: 'BOARD-FORMED CONCRETE',
    desc: 'Architectural board-formed stone concrete panels with authentic timber grain imprints and industrial tie-rod indentation accents.',
    highlights: [
      'Architectural board-formed concrete texture with wood grain grain',
      'Realistic tie-rod holes and formwork relief detailing',
      'Lightweight fiber-reinforced composite with easy drywall mounting',
      'Water-repellent nano-seal that prevents dusting and staining'
    ],
    tagline: 'Concrete Stone • Board-Formed • Capsule Company'
  },

  // 9. PAINT TEXTURE
  'WP-PT-01': {
    name: 'VENETIAN LIME STUCCO',
    desc: 'Artisanal Italian Venetian stucco hand-troweled in multiple burnished layers to produce a smooth, cloud-like mineral finish.',
    highlights: [
      'Hand-burnished multi-layer Italian slaked lime plaster',
      'Subtle mineral tonal variations and marble-like silky sheen',
      'Eco-friendly, VOC-free, and naturally anti-bacterial',
      'Seamless monolithic continuous wall without any visible seams'
    ],
    tagline: 'Venetian Stucco • Burnished Sheen • Capsule Company'
  },
  'WP-PT-02': {
    name: 'TUSCAN LIME-WASH',
    desc: 'Traditional Mediterranean lime-wash wall finish characterized by soft brush stroke textures and a tranquil velvety matte appearance.',
    highlights: [
      'Organic mineral lime wash with gentle tonal clouding',
      'Ultra-matte chalk finish that diffuses room light softly',
      'Micro-porous breathable finish regulating ambient moisture',
      'Bespoke hand-applied finish unique to each interior wall'
    ],
    tagline: 'Tuscan Lime-Wash • Velvety Matte • Capsule Company'
  },
  'WP-PT-03': {
    name: 'SEAMLESS MICROCEMENT',
    desc: 'Ultra-thin architectural microcement finish creating a clean monolithic concrete aesthetic for modern urban residences.',
    highlights: [
      'High-performance polymer-modified microcement coating',
      'Only 3mm thin profile adhering over existing drywall surfaces',
      'Waterproof polyurethane topcoat resisting household spills',
      'Sleek modern minimalist aesthetic with delicate trowel marks'
    ],
    tagline: 'Microcement • Monolithic Wall • Capsule Company'
  },
  'WP-PT-04': {
    name: 'EARTH CLAY PLASTER',
    desc: 'Raw natural earth clay plaster with delicate straw and sand fibers, creating an authentic Wabi-Sabi tactile interior wall.',
    highlights: [
      'Natural unprocessed earthen clay with fine mineral aggregates',
      'Superior humidity regulation and natural air filtration',
      'Warm terracotta and beige organic natural pigmentation',
      'Creates a restful, grounding environment for master bedrooms'
    ],
    tagline: 'Clay Plaster • Earthy Texture • Capsule Company'
  },
  'WP-PT-05': {
    name: 'METALLIC PEARL SPONGE',
    desc: 'Multi-layered artisanal metallic glaze with subtle mica pearl reflections that glisten softly under natural and artificial light.',
    highlights: [
      'Hand-applied sponge technique creating soft metallic mists',
      'Reflective mica pigments providing dynamic depth as light shifts',
      'Wipe-clean washable surface suitable for dining rooms and entries',
      'Elegant champagne bronze undertones enhancing chandeliers'
    ],
    tagline: 'Metallic Glaze • Dynamic Luster • Capsule Company'
  },

  // 10. PU
  'WP-PU-01': {
    name: 'FRENCH BOISERIE CLASSIC',
    desc: 'Architectural high-density polyurethane wall mouldings creating classic Parisian boiserie wall paneling with timeless elegance.',
    highlights: [
      'High-density impact-resistant polyurethane moulding profiles',
      'Classic French symmetrical wainscoting panel proportions',
      'Pre-primed surface ready for smooth designer lacquer finishes',
      'Zero shrinkage, expansion, or cracking over long-term seasonal cycles'
    ],
    tagline: 'French Boiserie • Classic Trim • Capsule Company'
  },
  'WP-PU-02': {
    name: 'NEOCLASSICAL BOX MOULDING',
    desc: 'Double-framed neoclassical box mouldings tailored to wall dimensions, framing wall art and lighting sconces with grand symmetry.',
    highlights: [
      'Double-frame concentric moulding design with mitred corners',
      'Lightweight construction easily affixed with architectural adhesive',
      'Completely impervious to moisture and humidity',
      'Timeless architectural sophistication for living and dining spaces'
    ],
    tagline: 'Box Moulding • Symmetrical • Capsule Company'
  },
  'WP-PU-03': {
    name: 'MODERN GEOMETRIC PU',
    desc: 'Contemporary slimline polyurethane grid paneling creating floor-to-ceiling geometric divisions finished in a monochromatic lacquer.',
    highlights: [
      'Slender 25mm contemporary square-edge moulding profiles',
      'Precision floor-to-ceiling grid division geometry',
      'Seamless corner and intersection spackling with no visible gaps',
      'Finished in rich designer matte interior paint colors'
    ],
    tagline: 'Geometric PU • Clean Lines • Capsule Company'
  },
  'WP-PU-04': {
    name: 'CHAIR RAIL WAINSCOT',
    desc: 'Traditional lower-wall wainscot paneling with continuous chair rail and baseboard trim, protecting high-traffic walls with grace.',
    highlights: [
      'Continuous architectural chair rail moulding at 36-inch datum',
      'Recessed rectangular lower wall panels with bevel profiles',
      'High impact resistance protecting walls against furniture bumps',
      'Classic heritage styling ideal for hallways and dining rooms'
    ],
    tagline: 'Chair Rail Wainscot • Architectural Depth • Capsule Company'
  },
  'WP-PU-05': {
    name: 'PARISIAN BOISERIE SUITE',
    desc: 'Classical French box moulding paneling with symmetric vertical frames and fine shadow lines, handcrafted for stately living and master suites.',
    highlights: [
      'High-density architectural polyurethane moulding trims',
      'Symmetric double-frame Parisian boiserie wall layout',
      'Pre-primed surface with durable satin lacquer finish',
      'Crack-free, moisture-proof, and impact-resistant formulation'
    ],
    tagline: 'Parisian Boiserie • Classic Framing • Capsule Company'
  },

  // 11. LOUVERS
  'WP-LV-01': {
    name: 'SOLID OAK VERTICAL LOUVERS',
    desc: 'Architectural vertical solid oak timber louvers engineered with deep shadow lines, providing acoustic baffling and visual rhythm.',
    highlights: [
      'Authentic European white oak vertical architectural fins',
      'Concealed aluminum sub-rail mounting system with zero fasteners',
      'Natural sound baffling properties dampening room reverberation',
      'Hand-rubbed natural matte oil finish enhancing wood warmth'
    ],
    tagline: 'European Oak • Acoustic Fins • Capsule Company'
  },
  'WP-LV-02': {
    name: 'NATURAL TEAK LOUVER PARTITION',
    desc: 'Architectural vertical solid teak timber louver divider screen integrated with a floating wood planter console, defining elegant spatial transitions.',
    highlights: [
      'Solid natural teak timber vertical architectural slats',
      'Integrated low-profile wooden console bench and display base',
      'Creates delicate visual privacy while maintaining open sightlines',
      'Satin clear polyurethane protective coat celebrating natural grain'
    ],
    tagline: 'Teak Louvers • Spatial Divider • Capsule Company'
  },
  'WP-LV-03': {
    name: 'BACKLIT LOUVER WALL',
    desc: 'Vertical architectural louvers integrated with hidden LED channels that illuminate the rear wall surface with warm linear glows.',
    highlights: [
      'Vertical timber louvers set against a dark recessed backdrop',
      'Integrated continuous LED light channels behind each louver',
      'Concealed wire management channels for audio-video equipment',
      'Dramatic focal point for luxury TV walls and master suites'
    ],
    tagline: 'Backlit Louvers • Linear Glow • Capsule Company'
  },
  'WP-LV-04': {
    name: 'ALUMINUM-CORE LOUVERS',
    desc: 'Wood veneer wrapped aluminum louvers engineered for extraordinary vertical heights with guaranteed zero warpage or bending.',
    highlights: [
      'Extruded structural aluminum core wrapped in genuine wood veneer',
      'Guaranteed straightness across double-height wall installations',
      'Non-combustible core complying with luxury high-rise fire codes',
      'Scratch-resistant UV-cured matte architectural polyurethane seal'
    ],
    tagline: 'Aluminum-Core • Zero Warpage • Capsule Company'
  },
  'WP-LV-05': {
    name: 'CURVED RADIUS LOUVERS',
    desc: 'Gracefully radiused vertical louver array that flows along curved interior walls, softening room angles with organic movement.',
    highlights: [
      'Custom curved track following architectural wall radii',
      'Precision angled vertical louvers with continuous grain match',
      'Smooth transition between entrance lobbies and formal living spaces',
      'Clear satin protective coat highlighting ash timber beauty'
    ],
    tagline: 'Curved Radius • Fluid Rhythm • Capsule Company'
  },

  // 12. DECORATIVE
  'WP-DC-01': {
    name: 'WALNUT & BRASS ART WALL',
    desc: 'Bespoke artisan wall composition uniting rich dark walnut woodwork, polished brass inlays, and warm integrated perimeter halo lighting.',
    highlights: [
      'Bespoke composition of prime American walnut and brass',
      'Hand-brushed satin brass metallic dividers with anti-tarnish coat',
      'Integrated warm 3000K perimeter LED halo lighting',
      'Artisan handcrafted showpiece for luxury dining and drawing rooms'
    ],
    tagline: 'Walnut & Brass • Artisan Crafted • Capsule Company'
  },
  'WP-DC-02': {
    name: 'CALACATTA MARBLE & VERTICAL FLUTE',
    desc: 'Symmetric architectural feature wall combining bookmatched Calacatta marble porcelain slabs with precision vertical ribbed flutes and continuous warm LED illumination.',
    highlights: [
      'Calacatta gold porcelain slab flanked by architectural fluted fins',
      'Integrated dual vertical warm LED light channels with concealed wiring',
      'Flush precision shadow-line reveals with brushed metallic trims',
      'Opulent centerpiece wall designed for modern luxury salons and foyers'
    ],
    tagline: 'Calacatta Marble • Fluted Pilasters • Capsule Company'
  },
  'WP-DC-03': {
    name: 'PADDED LEATHER TILES',
    desc: 'Handcrafted upholstered full-grain leather wall tiles offering supreme acoustic noise absorption and bespoke luxury tactility.',
    highlights: [
      'Full-grain Italian aniline leather with saddle-stitch edge details',
      'High-density acoustic memory foam core absorbing sound flutter',
      'Modular magnetic cleat system allowing easy tile maintenance',
      'Ultimate acoustic and comfort panelling for master headboard walls'
    ],
    tagline: 'Italian Leather • Acoustic Padding • Capsule Company'
  },
  'WP-DC-04': {
    name: 'MARBLE & FLUTED LIGHT WALL',
    desc: 'Bespoke multi-material architectural composition featuring Calacatta gold marble facets, vertical fluted pilasters, and recessed warm edge illumination.',
    highlights: [
      'Calacatta gold porcelain slab with mirror-finish brass trims',
      'Vertical fluted pilasters with integrated warm cove lighting',
      'Concealed aluminum frame structural sub-assembly',
      'Architectural focal statement wall for grand entrance foyers'
    ],
    tagline: 'Marble & Flute • Brass Trims • Capsule Company'
  },
  'WP-DC-05': {
    name: 'BRONZE BEVELED MIRRORS',
    desc: 'Geometric bronze-tinted mirror panels with beveled edges set in dark timber framing, reflecting room light and amplifying space.',
    highlights: [
      'Warm bronze-tinted crystal mirrors with 25mm beveled edges',
      'Ebonized timber framing grid creating dramatic architectural depth',
      'Amplifies natural daylight and visually doubles room volume',
      'Centerpiece feature wall for luxury dining salons and grand foyers'
    ],
    tagline: 'Bronze Mirror • Beveled Edge • Capsule Company'
  }
};

let globalPageNum = 1;

// Collect all 60 items with sequential numbering
const allItems = [];
data.categories.forEach(cat => {
  cat.items.forEach((item, itemIdx) => {
    const meta = modelMeta[item.refId] || {
      name: item.name.toUpperCase(),
      desc: item.specs || 'Bespoke architectural wall panelling engineered with precision joinery.',
      highlights: [
        item.finish || 'Premium architectural finish',
        item.application || 'Residential interior feature wall',
        item.specs || 'Precision engineered joinery',
        'Concealed wall-cleat mounting system'
      ],
      tagline: `${item.finish || 'Luxury Finish'} • Capsule Company`
    };

    allItems.push({
      ...item,
      categoryName: cat.name,
      sectionCode: cat.sectionCode,
      sectionNum: cat.sectionNum,
      categoryDesc: cat.description,
      modelSeq: `${itemIdx + 1}/5`,
      pageCode: `P/${String(globalPageNum).padStart(2, '0')}`,
      pageNum: globalPageNum,
      displayName: meta.name,
      displayDesc: meta.desc,
      highlights: meta.highlights,
      displayTagline: meta.tagline
    });
    globalPageNum++;
  });
});

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Capsule Company - Wall Panel Design Catalogue 2026</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap');

    @page {
      size: A4 portrait;
      margin: 0;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background-color: #555;
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
      color: #1A1A1A;
      -webkit-font-smoothing: antialiased;
      line-height: 1.5;
    }

    .a4-page {
      width: 210mm;
      height: 297mm;
      min-height: 297mm;
      max-height: 297mm;
      background: #FDFBF7;
      margin: 0 auto;
      page-break-after: always;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10mm 15mm 8mm 15mm;
      box-sizing: border-box;
    }

    /* 1. COVER PAGE */
    .cover-page {
      background: #FAF6F0;
      padding: 0 !important;
      margin: 0 auto;
      display: block;
      width: 210mm;
      height: 297mm;
      overflow: hidden;
    }
    .cover-page img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .cover-top-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 5px 16px;
      border-radius: 9999px;
      border: 1px solid rgba(184, 109, 67, 0.4);
      background: rgba(184, 109, 67, 0.12);
      color: #CE7F53;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.24em;
      text-transform: uppercase;
      margin: 0 auto 12px;
    }

    .cover-logo-frame {
      width: 68px;
      height: 68px;
      border-radius: 50%;
      background: linear-gradient(135deg, #CE7F53, #FFFFFF, #B86D43);
      padding: 2px;
      margin: 0 auto 16px;
      box-shadow: 0 10px 25px rgba(184, 109, 67, 0.25);
    }
    .cover-logo-inner {
      width: 100%;
      height: 100%;
      background: #FFFFFF;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
    }
    .cover-logo-inner img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .cover-main-title {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 40px;
      font-weight: 700;
      letter-spacing: 0.04em;
      line-height: 1.15;
      text-transform: uppercase;
      color: #FFFFFF;
      margin-bottom: 6px;
    }
    .cover-main-title span.italic-gold {
      color: #CE7F53;
      font-style: italic;
      font-weight: 400;
      text-transform: none;
      font-family: 'Playfair Display', Georgia, serif;
    }

    .cover-rule {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      max-width: 240px;
      margin: 12px auto;
    }
    .cover-rule::before, .cover-rule::after {
      content: '';
      flex: 1;
      height: 1px;
      background: linear-gradient(90deg, transparent, #B86D43, transparent);
    }
    .cover-diamond {
      width: 6px;
      height: 6px;
      background: #CE7F53;
      transform: rotate(45deg);
    }

    .cover-desc {
      font-size: 12.5px;
      line-height: 1.6;
      color: #D6CBC1;
      max-width: 150mm;
      margin: 0 auto 18px;
    }

    .cover-categories-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 6px 14px;
      text-align: left;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(184, 109, 67, 0.25);
      border-radius: 8px;
      padding: 12px 16px;
      max-width: 165mm;
      margin: 0 auto 16px;
    }
    .cover-cat-pill {
      font-size: 9px;
      color: #E6DDD5;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .cover-cat-num {
      color: #CE7F53;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 700;
    }
    .cover-cat-range {
      margin-left: auto;
      font-size: 8px;
      color: #9C8E84;
      font-family: 'JetBrains Mono', monospace;
    }

    .cover-footer {
      border-top: 1px solid rgba(255, 255, 255, 0.12);
      padding-top: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 9px;
      color: #8C7E74;
      text-transform: uppercase;
      letter-spacing: 0.14em;
    }

    /* 2. DIRECTORY INDEX PAGE */
    .directory-page {
      padding: 12mm 15mm;
    }
    .directory-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px 14px;
      margin-top: 14px;
      flex: 1;
    }
    .directory-card {
      background: #FFFFFF;
      border: 1px solid #E5DDD3;
      border-left: 3px solid #A3704C;
      border-radius: 6px;
      padding: 8px 12px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .directory-sec-num {
      font-size: 8.5px;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 700;
      color: #A3704C;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      margin-bottom: 2px;
    }
    .directory-sec-title {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 13.5px;
      font-weight: 700;
      color: #12100E;
      line-height: 1.25;
      margin-bottom: 3px;
    }
    .directory-sec-desc {
      font-size: 9px;
      color: #6B5E54;
      line-height: 1.35;
      margin-bottom: 5px;
    }
    .directory-sec-models {
      font-size: 8.5px;
      font-family: 'JetBrains Mono', monospace;
      color: #8C7E74;
      display: flex;
      justify-content: space-between;
      border-top: 1px dashed #EFE8DE;
      padding-top: 4px;
    }

    /* 3. STANDARD MODEL PAGES (EXACT REFERENCE DESIGN) */
    .page-header {
      flex: none;
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(212, 204, 195, 0.8);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .header-brand-wrap {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .header-logo-box {
      width: 36px;
      height: 36px;
      background: #FFFFFF;
      border: 1px solid #E5DDD3;
      border-radius: 4px;
      padding: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }
    .header-logo-box img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .header-brand-title {
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: #1A1A1A;
      line-height: 1.15;
    }
    .header-brand-sub {
      font-size: 8.5px;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #A3704C;
    }
    .header-category-box {
      text-align: right;
    }
    .header-cat-eyebrow {
      font-size: 9px;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 600;
      color: #9E9E9E;
      letter-spacing: 0.22em;
      text-transform: uppercase;
    }
    .header-cat-name {
      font-size: 12.5px;
      font-weight: 700;
      color: #A3704C;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-top: 1px;
    }

    /* Editorial Details Section */
    .editorial-section {
      flex: none;
      padding-top: 10px;
      padding-bottom: 4px;
    }
    .editorial-top-row {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 2px;
    }
    .eyebrow-wrap {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-bottom: 2px;
    }
    .eyebrow-main {
      font-size: 9.5px;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 700;
      letter-spacing: 0.22em;
      color: #A3704C;
      text-transform: uppercase;
    }
    .eyebrow-dot {
      color: #D0C8BF;
      font-size: 9.5px;
    }
    .eyebrow-sub {
      font-size: 9.5px;
      font-family: 'JetBrains Mono', monospace;
      letter-spacing: 0.16em;
      color: #888888;
      text-transform: uppercase;
    }
    .model-title {
      font-size: 24px;
      font-weight: 800;
      color: #12100E;
      line-height: 1.15;
      text-transform: uppercase;
      letter-spacing: -0.01em;
    }
    .model-code-badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10.5px;
      font-weight: 700;
      background: #1A1A1A;
      color: #FFFFFF;
      padding: 4px 10px;
      border-radius: 4px;
      letter-spacing: 0.08em;
      white-space: nowrap;
      box-shadow: 0 1px 3px rgba(0,0,0,0.15);
    }
    .model-code-badge span.label {
      color: #8E8E8E;
    }
    .model-code-badge span.val {
      color: #F3C769;
      font-weight: 800;
    }

    .model-desc {
      font-size: 11.5px;
      line-height: 1.45;
      color: #403B36;
      margin-top: 4px;
      margin-bottom: 6px;
      max-width: 96%;
    }

    .highlights-divider {
      border-top: 1px solid rgba(212, 204, 195, 0.7);
      padding-top: 5px;
      margin-bottom: 4px;
    }
    .highlights-header {
      font-size: 10px;
      font-weight: 800;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #1A1A1A;
      display: flex;
      align-items: center;
      gap: 5px;
      margin-bottom: 4px;
    }
    .highlight-dot {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #A3704C;
      display: inline-block;
    }
    .highlights-list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .highlights-list li {
      display: flex;
      align-items: flex-start;
      gap: 6px;
      font-size: 10.8px;
      color: #443F3A;
      line-height: 1.35;
    }
    .highlights-list li span.bullet {
      color: #A3704C;
      font-weight: 800;
      font-size: 11px;
      line-height: 1;
      margin-top: 1.5px;
    }

    /* Main High-Res Image Box */
    .image-showcase-box {
      flex: 1;
      min-height: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 4px;
      margin-bottom: 4px;
    }
    .image-canvas-outer {
      flex: 1;
      min-height: 0;
      background: #FFFFFF;
      border: 1.5px solid #DDD7CE;
      border-radius: 4px;
      padding: 5px;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.02);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .image-canvas-inner {
      width: 100%;
      height: 100%;
      background: #F6F4EE;
      border-radius: 2px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .image-canvas-inner img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
      display: block;
    }

    /* Sub-Image Reference Bar */
    .under-image-bar {
      flex: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 5px;
      padding: 0 2px;
    }
    .sub-code-badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9.5px;
      font-weight: 700;
      background: #1A1A1A;
      color: #FFFFFF;
      padding: 3px 8px;
      border-radius: 4px;
      letter-spacing: 0.08em;
    }
    .sub-code-badge span.label {
      color: #8E8E8E;
    }
    .sub-code-badge span.val {
      color: #F3C769;
      font-weight: 800;
    }
    .sub-tagline {
      font-style: italic;
      font-size: 11.5px;
      font-weight: 500;
      color: #4A443E;
      letter-spacing: 0.02em;
    }

    /* Bottom Page Footer */
    .page-footer {
      flex: none;
      padding-top: 7px;
      border-top: 1px solid rgba(212, 204, 195, 0.8);
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 9.5px;
    }
    .footer-left-brand {
      display: flex;
      align-items: center;
      gap: 7px;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      color: #555555;
      font-weight: 600;
    }
    .footer-left-brand strong {
      color: #1A1A1A;
      font-weight: 800;
    }
    .footer-left-brand span.copper {
      color: #A3704C;
      font-weight: 700;
    }
    .footer-page-wrap {
      font-family: 'JetBrains Mono', monospace;
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 10.5px;
      font-weight: 700;
      color: #1A1A1A;
    }
    .footer-page-wrap span.label {
      color: #777777;
      font-weight: 500;
    }
    .footer-page-box {
      background: #EAE5DE;
      border: 1px solid #D8D2C8;
      padding: 1.5px 7px;
      border-radius: 3px;
      font-weight: 800;
    }

    /* 4. FINAL CONTACT PAGE */
    .contact-page {
      background: #12100E;
      color: #FFFFFF;
      padding: 18mm 16mm 14mm 16mm;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .contact-header {
      border-bottom: 1px solid rgba(255, 255, 255, 0.15);
      padding-bottom: 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .contact-hero {
      margin: auto 0;
    }
    .contact-eyebrow {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.24em;
      color: #CE7F53;
      text-transform: uppercase;
      margin-bottom: 8px;
      display: block;
    }
    .contact-title {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 30px;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 12px;
    }
    .contact-desc {
      font-size: 12px;
      line-height: 1.6;
      color: #D6CBC1;
      max-width: 140mm;
      margin-bottom: 20px;
    }
    .contact-cards-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      margin-bottom: 18px;
    }
    .contact-box {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(184, 109, 67, 0.3);
      border-radius: 8px;
      padding: 12px 14px;
    }
    .contact-box-label {
      font-size: 8.5px;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 700;
      color: #CE7F53;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      margin-bottom: 4px;
    }
    .contact-box-val {
      font-size: 12.5px;
      font-weight: 700;
      color: #FFFFFF;
      margin-bottom: 2px;
    }
    .contact-box-sub {
      font-size: 9.5px;
      color: #8C7E74;
    }
    .contact-footer-bar {
      border-top: 1px solid rgba(255, 255, 255, 0.12);
      padding-top: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 9px;
      color: #8C7E74;
    }
  </style>
</head>
<body>

  <!-- ================= PAGE 1: COVER PAGE ================= -->
  <div class="a4-page cover-page">
    <img src="${coverA4Src}" alt="Wall Panel Design Catalogue 2026 Cover">
  </div>

  <!-- ================= PAGES 2 to 61: THE 60 MODEL PAGES ================= -->
  ${allItems.map((item) => {
    // Read local image as base64 so Puppeteer renders it instantly with zero network delay
    let relPath = item.image.startsWith('/') ? item.image.slice(1) : item.image;
    // ensure verified clean images with 0 watermarks/logos
    const cleanOverrides = {
      'WP-FL-01': 'assets/wall-panels/01-fluted-wall-panels/wp-fl-01_clean.png',
      'WP-FL-05': 'assets/wall-panels/01-fluted-wall-panels/wp-fl-05_clean.jpg',
      'WP-WP-04': 'assets/wall-panels/03-wpc-wall-panels/wp-wp-04_clean.jpg',
      'WP-3D-01': 'assets/wall-panels/04-3d-wall-panels/wp-3d-01_clean.jpg',
      'WP-3D-04': 'assets/wall-panels/04-3d-wall-panels/wp-3d-04_clean.jpg',
      'WP-3D-05': 'assets/wall-panels/04-3d-wall-panels/wp-3d-05_clean.png',
      'WP-CNC-04': 'assets/wall-panels/05-cnc-cut-wall-panels/wp-cnc-04_clean.jpg',
      'WP-MB-03': 'assets/wall-panels/07-marble-finish-wall-panels/wp-mb-03_clean.png',
      'WP-MB-05': 'assets/wall-panels/07-marble-finish-wall-panels/wp-mb-05_clean.png',
      'WP-PU-05': 'assets/wall-panels/10-pu-wall-panels/wp-pu-05_clean.jpg',
      'WP-LV-02': 'assets/wall-panels/11-louvers-wall-panels/wp-lv-02_clean.jpg',
      'WP-DC-01': 'assets/wall-panels/12-decorative-wall-panels/wp-dc-01_clean.jpg',
      'WP-DC-02': 'assets/wall-panels/12-decorative-wall-panels/wp-dc-02_clean.png',
      'WP-DC-04': 'assets/wall-panels/12-decorative-wall-panels/wp-dc-04_clean.png'
    };
    if (cleanOverrides[item.refId]) {
      relPath = cleanOverrides[item.refId];
    }
    const localImgPath = path.join(__dirname, '..', 'public', relPath);
    let imgSrc = '';
    if (fs.existsSync(localImgPath)) {
      const ext = path.extname(localImgPath).toLowerCase() === '.png' ? 'png' : 'jpeg';
      const b64 = fs.readFileSync(localImgPath).toString('base64');
      imgSrc = `data:image/${ext};base64,${b64}`;
    }

    return `
    <div class="a4-page">
      <!-- 1. TOP HEADER (MATCHING EXACT REFERENCE) -->
      <header class="page-header">
        <div class="header-brand-wrap">
          <div class="header-logo-box">
            <img src="${logoSrc}" alt="Capsule Company">
          </div>
          <div>
            <div class="header-brand-title">CAPSULE COMPANY</div>
            <div class="header-brand-sub">YOUR SPACE MAKER</div>
          </div>
        </div>
        <div class="header-category-box">
          <div class="header-cat-eyebrow">WALL PANEL CATALOGUE</div>
          <div class="header-cat-name">${item.categoryName}</div>
        </div>
      </header>

      <!-- 2. EDITORIAL SPECIFICATION BLOCK (MATCHING EXACT REFERENCE) -->
      <section class="editorial-section">
        <!-- Row 1: Model Title & Code Badge -->
        <div class="editorial-top-row">
          <div>
            <div class="eyebrow-wrap">
              <span class="eyebrow-main">WALL PANEL DESIGN</span>
              <span class="eyebrow-dot">•</span>
              <span class="eyebrow-sub">COLLECTION 2026</span>
            </div>
            <h1 class="model-title">${item.displayName}</h1>
          </div>
          <div class="model-code-badge">
            <span class="label">CODE: </span>
            <span class="val">${item.refId}</span>
          </div>
        </div>

        <!-- Row 2: Short Description -->
        <p class="model-desc">
          ${item.displayDesc}
        </p>

        <!-- Row 3: DESIGN HIGHLIGHTS -->
        <div class="highlights-divider">
          <div class="highlights-header">
            <span class="highlight-dot"></span>
            <span>DESIGN HIGHLIGHTS:</span>
          </div>
          <ul class="highlights-list">
            ${item.highlights.map(h => `
              <li>
                <span class="bullet">•</span>
                <span>${h}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </section>

      <!-- 3. MAIN DESIGN IMAGE WITH CLEAN MATTE FRAME -->
      <section class="image-showcase-box">
        <div class="image-canvas-outer">
          <div class="image-canvas-inner">
            <img src="${imgSrc}" alt="${item.displayName} - ${item.refId} - Capsule Wall Panel">
          </div>
        </div>
        <div class="under-image-bar">
          <div class="sub-code-badge">
            <span class="label">DESIGN REF: </span>
            <span class="val">${item.refId}</span>
          </div>
          <div class="sub-tagline">${item.displayTagline}</div>
        </div>
      </section>

      <!-- 4. BOTTOM FOOTER BAR (MATCHING EXACT REFERENCE) -->
      <footer class="page-footer">
        <div class="footer-left-brand">
          <strong>CAPSULE COMPANY</strong>
          <span>•</span>
          <span class="copper">YOUR SPACE MAKER</span>
          <span>•</span>
          <span>BANGALORE</span>
        </div>
        <div class="footer-page-wrap">
          <span class="label">PAGE</span>
          <span class="footer-page-box">${item.pageCode}</span>
        </div>
      </footer>
    </div>
    `;
  }).join('')}

  <!-- ================= PAGE 63: STUDIO CONTACT PAGE ================= -->
  <div class="a4-page contact-page">
    <header class="contact-header">
      <div class="header-brand-wrap">
        <div class="header-logo-box">
          <img src="${logoSrc}" alt="Capsule Company">
        </div>
        <div>
          <div class="header-brand-title" style="color: #FFFFFF;">CAPSULE COMPANY</div>
          <div class="header-brand-sub">YOUR SPACE MAKER</div>
        </div>
      </div>
      <div style="font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #CE7F53; letter-spacing: 0.16em;">
        STUDIO PRESENCE • BENGALURU
      </div>
    </header>

    <div class="contact-hero">
      <span class="contact-eyebrow">Design Consultations & Execution</span>
      <h2 class="contact-title">Experience Capsule Craftsmanship</h2>
      <p class="contact-desc">
        Connect directly with our architectural woodwork team for site measurements, structural panel framing, custom finish sampling, and turnkey interior installation across Bengaluru.
      </p>

      <div class="contact-cards-grid">
        <div class="contact-box">
          <div class="contact-box-label">Direct Studio Phone</div>
          <div class="contact-box-val">+91 91879 24723</div>
          <div class="contact-box-sub">Mon–Sat • 9:30 AM to 7:00 PM</div>
        </div>

        <div class="contact-box">
          <div class="contact-box-label">Project Inquiries</div>
          <div class="contact-box-val">project@capsulecompany.in</div>
          <div class="contact-box-sub">Architecture & RFQ Submissions</div>
        </div>

        <div class="contact-box">
          <div class="contact-box-label">General Email</div>
          <div class="contact-box-val">works.capsule@gmail.com</div>
          <div class="contact-box-sub">Client Support & Inquiries</div>
        </div>

        <div class="contact-box">
          <div class="contact-box-label">Corporate Website</div>
          <div class="contact-box-val">capsulecompany.in</div>
          <div class="contact-box-sub">Online Catalogues & Portfolio</div>
        </div>
      </div>

      <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(184, 109, 67, 0.25); border-radius: 8px; padding: 12px 14px; font-size: 11px; line-height: 1.5; color: #D6CBC1;">
        <strong style="color: #CE7F53;">Experience Studio:</strong> SLV COMPLEX, 17/3, Outer Ring Rd, Kariyana Layout, Hebbal Kempapura, Bengaluru, Karnataka 560024.
      </div>
    </div>

    <footer class="contact-footer-bar">
      <span>© 2026 CAPSULE COMPANY. ALL RIGHTS RESERVED.</span>
      <span>BESPOKE ARCHITECTURAL WALL SYSTEMS</span>
      <span>PAGE 62 / 62</span>
    </footer>
  </div>

</body>
</html>`;

const templatePath = path.join(__dirname, 'wall-panel-standard-template.html');
fs.writeFileSync(templatePath, htmlContent, 'utf8');
console.log('Saved updated template HTML to', templatePath);

(async () => {
  console.log('Generating Standard 62-Page PDF via Puppeteer Edge...');
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-gpu',
      '--font-render-hinting=max',
      '--enable-font-antialiasing'
    ]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1240, height: 1754 });

  await page.goto(`file://${templatePath.replace(/\\/g, '/')}`, {
    waitUntil: 'load',
    timeout: 120000
  });

  await new Promise(r => setTimeout(r, 2000));

  const outputPdfPath = path.join(__dirname, '..', 'Capsule_Interiors_Wall_Panel_Design_Catalogue.pdf');
  const publicPdfPath = path.join(__dirname, '..', 'public', 'Capsule_Interiors_Wall_Panel_Design_Catalogue.pdf');

  await page.pdf({
    path: outputPdfPath,
    format: 'A4',
    landscape: false,
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });

  console.log('Saved PDF to', outputPdfPath);
  fs.copyFileSync(outputPdfPath, publicPdfPath);
  console.log('Copied to public:', publicPdfPath);

  const stats = fs.statSync(outputPdfPath);
  console.log('Final Standard PDF Size:', (stats.size / (1024 * 1024)).toFixed(2), 'MB');

  await browser.close();
})();
