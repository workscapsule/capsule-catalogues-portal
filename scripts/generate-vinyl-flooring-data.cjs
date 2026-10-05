const fs = require('fs');
const path = require('path');

const models = [
  // 1
  {
    code: 'VFL-01',
    name: 'MODULEO LUXURY VINYL TILE',
    category: 'LUXURY VINYL TILE (LVT)',
    image: 'assets/vinyl-flooring/vfl-01.jpg',
    desc: 'Embossed-in-register luxury vinyl tile capturing authentic natural wood grain texture with high-performance acoustic dampening for premium residential residences.',
    highlights: [
      'Embossed-in-register (EIR) surface texture synchronizing visual grain and tactile depth',
      'Multi-layer virgin PVC construction with 0.55mm heavy commercial wear layer',
      'Integrated acoustic backing layer reducing footfall transmission sound by up to 18dB',
      '100% waterproof construction ideal for luxury kitchens, living zones, and bathrooms'
    ],
    tagline: 'Authentic EIR Woodgrain • Heavy Commercial Wear • Capsule Company'
  },
  // 2
  {
    code: 'VFL-02',
    name: 'LINDE NATURAL OAK SPC',
    category: 'STONE PLASTIC COMPOSITE (SPC)',
    image: 'assets/vinyl-flooring/vfl-02.jpg',
    desc: 'Ultra-dense rigid core limestone composite flooring in serene Linde blonde oak, providing exceptional dimensional stability and underfoot comfort in modern master bedrooms.',
    highlights: [
      'High-density limestone composite (SPC) core resistant to direct sunlight and thermal changes',
      'Precision click-lock profiling for floating installation without chemical glues',
      'Scratch-resistant UV ceramic bead finish resisting high heels and pet claws',
      'Hypoallergenic zero-formaldehyde composition certified for clean indoor air'
    ],
    tagline: 'Rigid Core SPC • Precision Click-Lock • Capsule Company'
  },
  // 3
  {
    code: 'VFL-03',
    name: 'CARRARA POLISHED MARBLE LVT',
    category: 'MARBLE & STONE LOOK VINYL',
    image: 'assets/vinyl-flooring/vfl-03.jpg',
    desc: 'High-gloss Italian Carrara marble aesthetic rendered in lightweight flexible luxury vinyl, delivering cold-stone luxury without chilly underfoot sensations or brittle tile grout.',
    highlights: [
      'Ultra-high definition digital stone printing capturing natural Carrara grey veining',
      'High-gloss polyurethane top layer creating a brilliant polished marble appearance',
      'Zero-grout seamless edge-to-edge adhesion preventing mold and moisture buildup',
      'Soft and forgiving underfoot feel compared to traditional brittle ceramic or marble'
    ],
    tagline: 'Carrara Marble Aesthetic • High-Gloss Polyurethane • Capsule Company'
  },
  // 4
  {
    code: 'VFL-04',
    name: 'ARCHITECTURAL OAK WIDE PLANK',
    category: 'LUXURY VINYL TILE (LVT)',
    image: 'assets/vinyl-flooring/vfl-04.jpg',
    desc: 'Extra-wide luxury vinyl planks designed for expansive luxury apartments and open-plan living rooms, balancing contemporary refinement with daily resilience.',
    highlights: [
      'Generous 220mm wide plank format accentuating spacious architectural room proportions',
      'Micro-beveled edge perimeter defining individual plank contours subtly',
      'Commercial-grade polyurethane wear layer resistant to heavy daily foot traffic',
      '100% waterproof core safe against spills, liquid accidents, and damp mopping'
    ],
    tagline: 'Wide Plank Architecture • Micro-Beveled Edge • Capsule Company'
  },
  // 5
  {
    code: 'VFL-05',
    name: 'OCEAN BLUE VEINED MARBLE LVT',
    category: 'MARBLE & STONE LOOK VINYL',
    image: 'assets/vinyl-flooring/vfl-05.jpg',
    desc: 'Exotic oceanic lapis veined stone graphics engineered into high-durability luxury vinyl tile, creating a breathless statement floor in luxury entry foyers and powder suites.',
    highlights: [
      'Dramatic lapis blue and gold oceanic river veining pattern with deep visual translucency',
      'Super-durable multi-ply construction engineered for heavy luxury commercial spaces',
      'Stain-proof ceramic shield coating impervious to oils, wines, and acidic spills',
      'Warm and sound-insulating underfoot dynamics unlike cold solid porcelain'
    ],
    tagline: 'Oceanic Blue Vein • Ceramic Shield Coating • Capsule Company'
  },
  // 6
  {
    code: 'VFL-06',
    name: 'ECO-ELEGANCE RIGID SPC',
    category: 'STONE PLASTIC COMPOSITE (SPC)',
    image: 'assets/vinyl-flooring/vfl-06.jpg',
    desc: 'Eco-conscious stone plastic composite flooring crafted with recycled minerals and sustainably harvested components, offering refined organic elegance for holistic living.',
    highlights: [
      'Sustainably engineered core utilizing 70% natural limestone and eco polymers',
      'Built-in 1.5mm high-density IXPE foam underlayment for superior acoustic performance',
      'Drop-lock click jointing enabling rapid, clean, dust-free residential installation',
      'Antibacterial surface treatment inhibiting microbial and bacterial growth'
    ],
    tagline: 'Eco Limestone Core • Integrated IXPE Acoustic Foam • Capsule Company'
  },
  // 7
  {
    code: 'VFL-07',
    name: 'RETRO GEOMETRIC INLAY VINYL',
    category: 'DESIGNER GEOMETRIC & RETRO',
    image: 'assets/vinyl-flooring/vfl-07.jpg',
    desc: 'Mid-century architectural graphic pattern vinyl flooring featuring geometric contrasting shapes that revitalizes creative studios, kitchens, and boutique galleries.',
    highlights: [
      'Graphic mid-century modern geometric repeat pattern with flawless joint registration',
      'Seamless welded sheet application preventing dirt accumulation in grout crevices',
      'Slip-resistant R10 textured finish providing steady traction in wet and dry conditions',
      'UV-stabilized pigment formulation preventing color fading under large picture windows'
    ],
    tagline: 'Mid-Century Graphic • Seamless Welded Sheet • Capsule Company'
  },
  // 8
  {
    code: 'VFL-08',
    name: 'NORDIC ASH RIGID SPC',
    category: 'STONE PLASTIC COMPOSITE (SPC)',
    image: 'assets/vinyl-flooring/vfl-08.jpg',
    desc: 'Muted pale ash tone vinyl planks featuring linear Scandinavian graining that maximizes natural daylight reflection across minimalist modern interior designs.',
    highlights: [
      'Pale Scandinavian ash aesthetic with light-scattering matte urethane finish',
      'Rigid core profile bridging slight subfloor imperfections without telegraphing',
      'Waterproof construction unaffected by bathroom steam and kitchen humidity',
      'Heavy-duty 20 mil commercial wear layer ensuring decades of enduring beauty'
    ],
    tagline: 'Nordic Pale Ash • Matte Urethane • Capsule Company'
  },
  // 9
  {
    code: 'VFL-09',
    name: 'CHARCOAL SLATE ARCHITECTURAL TILE',
    category: 'MARBLE & STONE LOOK VINYL',
    image: 'assets/vinyl-flooring/vfl-09.jpg',
    desc: 'Deep textured charcoal slate aesthetic luxury vinyl tiles providing a moody, grounding architectural foundation for luxury penthouse living rooms and home bars.',
    highlights: [
      'Tactile cleft slate surface texture capturing authentic split-stone character',
      'Large 600x600mm format creating dramatic, expansive monolithic floor expanses',
      'Warm underfoot thermal retention paired with high thermal conductivity over underfloor heating',
      'Resistant to cracking, chipping, or shattering upon impact with dropped heavy objects'
    ],
    tagline: 'Charcoal Cleft Slate • 600x600mm Large Format • Capsule Company'
  },
  // 10
  {
    code: 'VFL-10',
    name: 'HONEY WHEAT EMBOSSED OAK',
    category: 'LUXURY VINYL TILE (LVT)',
    image: 'assets/vinyl-flooring/vfl-10.jpg',
    desc: 'Warm golden honey oak luxury vinyl planks bringing timeless warmth and cozy organic texture to bedrooms, family dens, and master dressing suites.',
    highlights: [
      'Golden amber wood tone with natural cathedral graining and subtle knot detailing',
      'Dual fiberglass stabilization layers preventing expansion, buckling, and warping',
      'Soft and resilient walking comfort easing joint fatigue during long standing hours',
      'Low-VOC certified product creating a pure and healthy home atmosphere'
    ],
    tagline: 'Golden Amber Grain • Dual Fiberglass Core • Capsule Company'
  },
  // 11
  {
    code: 'VFL-11',
    name: 'SMOKED GREY TIMBER SPC',
    category: 'STONE PLASTIC COMPOSITE (SPC)',
    image: 'assets/vinyl-flooring/vfl-11.jpg',
    desc: 'Contemporary cool grey oak vinyl flooring with wire-brushed texture that perfectly complements monochrome minimalism and concrete interior elements.',
    highlights: [
      'Sophisticated weathered grey tone infused with gentle silver wood grain streaks',
      'Ultra-dense stone polymer composite core impervious to temperature swings',
      'Patented Uniclic locking system providing airtight joint strength',
      'Pre-attached IXPE acoustic backing eliminating the need for messy separate underlays'
    ],
    tagline: 'Weathered Grey Tone • Uniclic Precision Joint • Capsule Company'
  },
  // 12
  {
    code: 'VFL-12',
    name: 'STATUARIO GOLD MARBLE VINYL',
    category: 'MARBLE & STONE LOOK VINYL',
    image: 'assets/vinyl-flooring/vfl-12.jpg',
    desc: 'Pure crystalline white marble vinyl tile infused with warm golden ochre veins, recreating Italian palazzo luxury with effortless maintenance and warm walking comfort.',
    highlights: [
      'Hyper-realistic Statuario marble pattern with multi-face non-repeating tile variations',
      'High-gloss ceramic micro-coat resisting scuffs, abrasions, and rubber sole marks',
      'Ideal for moisture-prone luxury bathrooms, master vanity areas, and dining spaces',
      'Impact absorbing resilient core preventing tile cracks and dropped dishware damage'
    ],
    tagline: 'Statuario Gold Veins • Non-Repeating Faces • Capsule Company'
  },
  // 13
  {
    code: 'VFL-13',
    name: 'FRENCH CHEVRON PARQUET VINYL',
    category: 'CHEVRON & HERRINGBONE VINYL',
    image: 'assets/vinyl-flooring/vfl-13.jpg',
    desc: 'Classic Parisian 45-degree angle chevron pattern vinyl planks bringing aristocratic geometric symmetry and refined European luxury to modern open-plan residences.',
    highlights: [
      'Engineered angled chevron ends for precise symmetrical herringbone installations',
      'Four-sided micro-bevel accents showcasing the rhythmic chevron directional flow',
      'Heavy commercial wear rating suitable for luxury boutiques, hotels, and villas',
      '100% moisture immunity preventing the seasonal gaps common in solid wood chevron'
    ],
    tagline: 'Parisian 45° Chevron • Micro-Bevel Contour • Capsule Company'
  },
  // 14
  {
    code: 'VFL-14',
    name: 'METROPOLITAN CONCRETE FINISH',
    category: 'MARBLE & STONE LOOK VINYL',
    image: 'assets/vinyl-flooring/vfl-14.jpg',
    desc: 'Industrial poured concrete effect luxury vinyl tile delivering raw brutalist elegance without dust, curing delays, or uncomfortable underfoot hardness.',
    highlights: [
      'Polished screed concrete visual with subtle tonal shifts and aggregate speckles',
      'Large modular tile format delivering seamless contemporary loft aesthetic',
      'Warm and quiet underfoot compared to cold poured cement or stone slabs',
      'Zero maintenance requirement; completely immune to oil stains and grease'
    ],
    tagline: 'Polished Screed Concrete • Industrial Loft Aesthetic • Capsule Company'
  },
  // 15
  {
    code: 'VFL-15',
    name: 'BLACK STAR VICTORIAN VINYL TILE',
    category: 'DESIGNER GEOMETRIC & RETRO',
    image: 'assets/vinyl-flooring/vfl-15.jpg',
    desc: 'Classic black star and diamond geometric patterned vinyl tiles that infuse artisanal heritage charm into entry foyers, powder rooms, and transitional hallways.',
    highlights: [
      'Crisp high-contrast black and alabaster geometric star tessellation design',
      'Peel-and-stick or glue-down precision installation with razor-tight seams',
      'Waterproof and mold-resistant surface engineered for high-humidity wet zones',
      'Heavy-duty clear vinyl wear layer preserving pattern sharpness against abrasive dust'
    ],
    tagline: 'Victorian Star Tessellation • High-Contrast Design • Capsule Company'
  },
  // 16
  {
    code: 'VFL-16',
    name: 'SEAMLESS ARCHITECTURAL RESIN LOOK',
    category: 'LUXURY VINYL TILE (LVT)',
    image: 'assets/vinyl-flooring/vfl-16.jpg',
    desc: 'Monolithic seamless micro-resin aesthetic vinyl flooring creating continuous fluid floor planes that visually unify sprawling contemporary penthouse spaces.',
    highlights: [
      'Continuous micro-cement resin visual flow without visible grid distractions',
      'Sound absorption rating reducing ambient echoing in open high-ceiling interiors',
      'Matte satin protective sealant resisting fingerprint smudges and glare',
      'Commercial fire-retardant Bfl-s1 certified for complete architectural safety'
    ],
    tagline: 'Monolithic Resin Flow • Ambient Sound Absorption • Capsule Company'
  },
  // 17
  {
    code: 'VFL-17',
    name: 'BRAZILIAN WALNUT RICH PLANK',
    category: 'LUXURY VINYL TILE (LVT)',
    image: 'assets/vinyl-flooring/vfl-17.jpg',
    desc: 'Deep espresso and chocolate-toned exotic hardwood look vinyl planks delivering rich dramatic elegance to formal dining suites and master executive lounges.',
    highlights: [
      'Exotic Brazilian walnut graining with deep tonal richness and organic striations',
      'Extra-thick commercial wear layer rated for high-heeled traffic and heavy furnishings',
      'Superior dimensional stability in tropical humidity without wood cup or curl',
      'UV-inhibited surface preserving deep chocolate luster against window glare'
    ],
    tagline: 'Exotic Brazilian Walnut • Espresso Tonal Depth • Capsule Company'
  },
  // 18
  {
    code: 'VFL-18',
    name: 'HERRINGBONE RIGID SPC AE 29',
    category: 'CHEVRON & HERRINGBONE VINYL',
    image: 'assets/vinyl-flooring/vfl-18.jpg',
    desc: 'Artisanal herringbone stone plastic composite planks arranged in rhythmic classical 90-degree interlocking geometry, infusing bedrooms with timeless elegance.',
    highlights: [
      'Left and right interlocking precision tongues for true herringbone pattern layout',
      'Ultra-compact limestone rigid core with zero susceptibility to thermal expansion',
      'Acoustic IXPE underlay pre-bonded to each plank for whisper-quiet room acoustics',
      'Easy wipe-clean surface resistant to pet stains, water glasses, and spills'
    ],
    tagline: 'Classical Herringbone • Interlocking Rigid Core • Capsule Company'
  },
  // 19
  {
    code: 'VFL-19',
    name: 'CALACATTA GOLD ROYAL MARBLE',
    category: 'MARBLE & STONE LOOK VINYL',
    image: 'assets/vinyl-flooring/vfl-19.jpg',
    desc: 'Regal Calacatta Gold marble visual vinyl tiles displaying warm honey-gold and charcoal veining that imparts five-star hotel grandeur to master bathrooms and living areas.',
    highlights: [
      'Luminous Calacatta gold veining printed with state-of-the-art multi-pass precision',
      'Smooth satin gloss finish offering the beauty of polished stone with anti-slip security',
      'Resistant to thermal shocks, bathroom spills, and beauty cosmetics staining',
      'Lightweight composition suitable for high-rise condos without structural deadweight'
    ],
    tagline: 'Calacatta Gold • Multi-Pass High Definition • Capsule Company'
  },
  // 20
  {
    code: 'VFL-20',
    name: 'FLUSH TRANSITION SEAMLESS SPC',
    category: 'STONE PLASTIC COMPOSITE (SPC)',
    image: 'assets/vinyl-flooring/vfl-20.jpg',
    desc: 'Precision-engineered transition flooring system enabling seamless flush joins between different room zones, creating uninterrupted barrier-free modern layouts.',
    highlights: [
      'Engineered flush transition profiles eliminating clunky raised threshold strips',
      'Ultra-rigid limestone core maintaining plane alignment across expansive doorways',
      'High indentation resistance standing up to concentrated furniture leg pressures',
      'Universal compatibility with underfloor radiant heating mats up to 27°C'
    ],
    tagline: 'Flush Barrier-Free Transition • High Indentation Strength • Capsule Company'
  },
  // 21
  {
    code: 'VFL-21',
    name: 'HIGH-TRAFFIC ACOUSTIC MASTER SPC',
    category: 'STONE PLASTIC COMPOSITE (SPC)',
    image: 'assets/vinyl-flooring/vfl-21.jpg',
    desc: 'Specially engineered high-traffic luxury vinyl flooring featuring enhanced acoustic absorption cushions designed for quiet sanctuaries and high-activity bedrooms.',
    highlights: [
      'Double acoustic dampening layer suppressing hollow footstep echoes completely',
      'Superior 28 mil diamond-hard ceramic wear layer resisting heavy daily wear',
      'Stain-shield surface barrier repelling coffee, wine, ink, and cosmetic spills',
      'Non-slip textured micro-embossing providing confident barefoot stability'
    ],
    tagline: 'Double Acoustic Cushion • 28 Mil Ceramic Wear • Capsule Company'
  },
  // 22
  {
    code: 'VFL-22',
    name: 'GRAND VILLA POLISHED MARBLE LVT',
    category: 'MARBLE & STONE LOOK VINYL',
    image: 'assets/vinyl-flooring/vfl-22.jpg',
    desc: 'Palatial white marble aesthetic luxury vinyl flooring designed for grand villa living spaces, delivering immense visual scale with comfortable daily warmth.',
    highlights: [
      'Massive scale stone pattern minimizing repeat visibility across expansive villa halls',
      'Brilliant mirror finish reflecting chandelier illumination throughout living zones',
      'Resistant to cracking from building settlement or subfloor hairline movement',
      'Easy daily maintenance requiring only damp micro-fiber sweeping without waxing'
    ],
    tagline: 'Palatial Villa Scale • Mirror Gloss Coating • Capsule Company'
  },
  // 23
  {
    code: 'VFL-23',
    name: 'DESERT SAND BOUTIQUE LVT',
    category: 'COMMERCIAL & BOUTIQUE VINYL',
    image: 'assets/vinyl-flooring/vfl-23.jpg',
    desc: 'Sophisticated warm desert sand textured vinyl tiles designed for upscale commercial suites, hospitality lounges, and design-forward boutique retail spaces.',
    highlights: [
      'Curated desert sand tone providing a neutral canvas for designer furniture',
      'Extra heavy commercial rating EN 685 Class 34/43 for maximum durability',
      'Stain-resistant polyurethane reinforcement requiring no costly strip-and-wax routines',
      'Low light-reflectance matte texture eliminating irritating showroom glare'
    ],
    tagline: 'Desert Sand Tone • Class 34/43 Commercial • Capsule Company'
  },
  // 24
  {
    code: 'VFL-24',
    name: 'BLEACHED OAK SPC AE 75',
    category: 'STONE PLASTIC COMPOSITE (SPC)',
    image: 'assets/vinyl-flooring/vfl-24.jpg',
    desc: 'Airy bleached white oak rigid core flooring that visually amplifies light and space in contemporary open-concept apartments and urban penthouses.',
    highlights: [
      'Modern bleached oak tone softening natural contrast for airy coastal tranquility',
      'Rigid limestone polymer composite core engineered for zero expansion or shrinkage',
      'Anti-microbial surface treatment providing a hygienic foundation for young families',
      'Quick click-together joint system enabling single-day residential turnover'
    ],
    tagline: 'Airy Bleached Oak • Zero Expansion Core • Capsule Company'
  },
  // 25
  {
    code: 'VFL-25',
    name: 'ONTARIO SLATE LUXURY TILE LLT218',
    category: 'MARBLE & STONE LOOK VINYL',
    image: 'assets/vinyl-flooring/vfl-25.jpg',
    desc: 'Authentic Canadian Ontario slate aesthetic vinyl tiles featuring textured stratified clefting and cool charcoal-blue nuances for refined architectural drama.',
    highlights: [
      'Detailed cleft rock surface mimicking genuine quarried Canadian slate slabs',
      'Modular square tile proportions compatible with custom perimeter borders and accents',
      'Waterproof construction perfect for walk-in showers, mudrooms, and sculleries',
      'Resistant to discoloration from household cleaning solutions and chemicals'
    ],
    tagline: 'Canadian Ontario Slate • Modular Tile Layout • Capsule Company'
  },
  // 26
  {
    code: 'VFL-26',
    name: 'URBAN CARTAGENA VINYL PLANK',
    category: 'LUXURY VINYL TILE (LVT)',
    image: 'assets/vinyl-flooring/vfl-26.jpg',
    desc: 'Warm weathered timber visual vinyl planks inspired by Colombian colonial architecture, blending historical wood character with modern technical resilience.',
    highlights: [
      'Warm rustic timber visual with authentic saw marks and aged patina details',
      'Reinforced fiberglass stabilizer mesh eliminating plank shrinkage and stretching',
      'Resistant to pet scratches, toy car impacts, and dragged dining chair legs',
      'Certified 100% recyclable material supporting circular architectural design'
    ],
    tagline: 'Cartagena Patina • Reinforced Mesh Core • Capsule Company'
  },
  // 27
  {
    code: 'VFL-27',
    name: 'VOLUTO MATTE FINISH VINYL',
    category: 'LUXURY VINYL TILE (LVT)',
    image: 'assets/vinyl-flooring/vfl-27.jpg',
    desc: 'Understated matte natural oak finish vinyl planks engineered for sleek contemporary interiors seeking quiet luxury, tactile warmth, and durable simplicity.',
    highlights: [
      'Ultra-matte finish with less than 5% gloss level for natural unfinished wood realism',
      'Tactile micro-textured surface offering gentle grip and authentic finger feel',
      'Acoustic sound dampening structure lowering ambient noise across modern lofts',
      'Waterproof core ready for open-plan kitchen and dining room combinations'
    ],
    tagline: 'Voluto Ultra-Matte • Unfinished Wood Realism • Capsule Company'
  },
  // 28
  {
    code: 'VFL-28',
    name: 'MULTI-LAYER RIGID CORE SPC',
    category: 'STONE PLASTIC COMPOSITE (SPC)',
    image: 'assets/vinyl-flooring/vfl-28.jpg',
    desc: 'Advanced 7-layer engineered stone plastic composite flooring combining diamond-shield wear protection, high-density limestone core, and pre-attached silent underlay.',
    highlights: [
      'Comprehensive 7-layer multi-ply structure designed for ultimate physical performance',
      'Limestone composite core virtually immune to direct sunlight warping and cupping',
      'Built-in silent acoustic foam backing absorbing impact vibration from footfalls',
      '100% waterproof seal preventing subfloor moisture damage permanently'
    ],
    tagline: '7-Layer Multi-Ply • Diamond-Shield Protection • Capsule Company'
  },
  // 29
  {
    code: 'VFL-29',
    name: 'WARRINGTON ARTISAN OAK PLANK',
    category: 'LUXURY VINYL TILE (LVT)',
    image: 'assets/vinyl-flooring/vfl-29.jpg',
    desc: 'Artisanal English oak inspired luxury vinyl planks with delicate wire-brushed grain and warm biscuit tones, bringing comforting country house heritage into modern city homes.',
    highlights: [
      'Classic English Warrington oak grain pattern with soft biscuit and tan undertones',
      'Embossed surface matching fine timber pores for convincing visual authenticity',
      'Resistant to staining from spilled red wine, turmeric cooking oils, and condiments',
      'Effortless floating click installation over existing level tile or concrete subfloors'
    ],
    tagline: 'Warrington English Oak • Wire-Brushed Pore Texture • Capsule Company'
  },
  // 30
  {
    code: 'VFL-30',
    name: 'COMMERCIAL BOUTIQUE WOOD SPC',
    category: 'COMMERCIAL & BOUTIQUE VINYL',
    image: 'assets/vinyl-flooring/vfl-30.jpg',
    desc: 'Heavy-duty commercial-grade rigid SPC vinyl flooring designed to endure relentless retail and office traffic while projecting warmth, luxury, and professional refinement.',
    highlights: [
      'Commercial-grade 0.7mm (28 mil) wear layer built for high-footfall retail boutiques',
      'Extreme scratch and scuff resistance maintaining showroom luster under heavy shoes',
      'Acoustic sound barrier reducing high-frequency clatter in bustling retail environments',
      'Slip-resistance certified R10 classification for commercial public safety'
    ],
    tagline: 'Commercial Grade 0.7mm • Extreme Scuff Resistance • Capsule Company'
  }
];

const outputPath = path.join(__dirname, '..', 'public', 'assets', 'vinyl-flooring', 'vinyl-flooring-data.json');
fs.mkdirSync(path.dirname(outputPath), { recursive: true });

const payload = {
  catalogue: {
    id: 'vinyl-flooring',
    title: 'Capsule Company - Vinyl Flooring Design Catalogue 2026',
    subtitle: 'Luxury Vinyl Tile (LVT) & Rigid Core Stone Plastic Composite (SPC) Systems',
    company: 'CAPSULE COMPANY',
    tagline: 'YOUR SPACE MAKER',
    location: 'BANGALORE',
    year: 2026,
    totalModels: models.length,
    totalPages: models.length + 2, // Cover + Models + Contact
    pdfFileName: 'Capsule_Company_Vinyl_Flooring_Catalogue.pdf'
  },
  orderedItems: models
};

fs.writeFileSync(outputPath, JSON.stringify(payload, null, 2));
console.log(`Generated Vinyl Flooring specifications for ${models.length} models to:`);
console.log(outputPath);
