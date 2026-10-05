// Capsule Company Official Wardrobe Luxury Catalogue Data (30 Authorized Designs)
// Mapped: Image -> Model Name -> Variant -> Description -> Highlights -> Model Code -> Style Words

export interface WardrobeModel {
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

export const wardrobeLuxuryData: WardrobeModel[] = [
  {
    number: 1,
    modelName: "AURA",
    modelCode: "WR-S01-AURA",
    variant: "Backlit Smoked Glass Walk-in Suite",
    pageNumber: "P / 01",
    description: "An evocative walk-in wardrobe crafted with floor-to-ceiling tinted glass shutters, slim matte black aluminum profiles, and integrated warm 3000K vertical LED shelf illumination.",
    highlights: [
      "Floor-to-ceiling tinted glass shutters",
      "Slim matte black aluminum profile framing",
      "Vertical 3000K LED interior shelf illumination",
      "Concealed soft-close sliding track mechanism",
      "Modular hanging zones & accessory shelving"
    ],
    tagline: "Luminous • Contemporary • Architectural",
    image: "/assets/catalogues/wardrobes/wardrobe-01.jpg"
  },
  {
    number: 2,
    modelName: "VISTA",
    modelCode: "WR-S02-VISTA",
    variant: "High-Gloss Cashmere Lacquer & Drawers",
    pageNumber: "P / 02",
    description: "A serene, light-reflective wardrobe featuring flawless cashmere beige lacquer shutters, integrated dual lower drawers, and precision vertical brass bar handles.",
    highlights: [
      "High-gloss cashmere lacquer shutter finish",
      "Dual bottom soft-close accessory drawers",
      "Solid brushed brass vertical bar handles",
      "Full-height loft storage compartments",
      "Durable moisture-resistant HDHMR core"
    ],
    tagline: "Minimalist • Serene • Refined",
    image: "/assets/catalogues/wardrobes/wardrobe-02.jpg"
  },
  {
    number: 3,
    modelName: "NOVA",
    modelCode: "WR-S03-NOVA",
    variant: "Frameless Bronze Glass 4-Door Wardrobe",
    pageNumber: "P / 03",
    description: "A refined 4-door wardrobe featuring bronze-tinted glass panels encased in slender metallic trims, offering a subtle glimpse into illuminated interior compartments.",
    highlights: [
      "Bronze-tinted reflective glass shutters",
      "Concealed 110-degree soft-closing hinges",
      "Architectural full-length edge pull handles",
      "Rich dark timber carcass and interior lining",
      "Integrated motion-activated hanger rod LEDs"
    ],
    tagline: "Translucent • Sleek • Elegant",
    image: "/assets/catalogues/wardrobes/wardrobe-03.jpg"
  },
  {
    number: 4,
    modelName: "LUMEN",
    modelCode: "WR-S04-LUMEN",
    variant: "Matte Slate & Fluted Glass Duo",
    pageNumber: "P / 04",
    description: "A contemporary composition combining matte slate grey solid panel doors with an amber-tinted fluted glass vitrine section and integrated drawer storage.",
    highlights: [
      "Tactile matte slate grey polyurethane finish",
      "Ribbed amber fluted glass display vitrine",
      "Lower tiered drawer chests with soft runners",
      "Concealed perimeter LED lighting channels",
      "Optimized dual hanging & folding configuration"
    ],
    tagline: "Textured • Dual-Tone • Functional",
    image: "/assets/catalogues/wardrobes/wardrobe-04.jpg"
  },
  {
    number: 5,
    modelName: "ECLIPSE",
    modelCode: "WR-S05-ECLIPSE",
    variant: "Obsidian Glass & Champagne Framework",
    pageNumber: "P / 05",
    description: "A grand executive wardrobe suite framed in champagne gold anodized aluminum with obsidian glass shutters, dedicated upper display boxes, and multi-tier drawers.",
    highlights: [
      "Obsidian reflective safety glass panels",
      "Champagne gold anodized aluminum borders",
      "Upper showcase boxes with micro-spotlights",
      "Central drawer unit with jewel organizer trays",
      "End-to-end custom ceiling height alignment"
    ],
    tagline: "Executive • Luxurious • Bold",
    image: "/assets/catalogues/wardrobes/wardrobe-05.jpg"
  },
  {
    number: 6,
    modelName: "VALENTINA",
    modelCode: "WR-S06-VALENTINA",
    variant: "Emerald Lacquer & Brushed Brass Inlay",
    pageNumber: "P / 06",
    description: "A dramatic statement piece in deep jewel emerald green lacquer, accented by slender vertical brushed brass inlays and full-height architectural handles.",
    highlights: [
      "Deep jewel-toned emerald green lacquer finish",
      "Precision-machined vertical brass inlays",
      "Bespoke solid brass full-height handles",
      "Concealed European hydraulic soft-close hinges",
      "Custom internal LED downlighting system"
    ],
    tagline: "Dramatic • Opulent • Bespoke",
    image: "/assets/catalogues/wardrobes/wardrobe-06.jpg"
  },
  {
    number: 7,
    modelName: "MONOLITH",
    modelCode: "WR-S07-MONOLITH",
    variant: "Full-Wall Wardrobe & Vanity Workstation",
    pageNumber: "P / 07",
    description: "A comprehensive master bedroom wardrobe wall combining expansive hinged storage, illuminated glass vitrines, and an integrated central dressing desk with fluted timber accents.",
    highlights: [
      "Integrated central vanity table & dressing mirror",
      "Fluted acoustic wood panel back feature wall",
      "Flanked by backlit glass display wardrobes",
      "Overhead loft cabinets for seasonal storage",
      "Built-in LED task lighting and cable management"
    ],
    tagline: "Integrated • Comprehensive • Editorial",
    image: "/assets/catalogues/wardrobes/wardrobe-07.jpg"
  },
  {
    number: 8,
    modelName: "ASTRA",
    modelCode: "WR-S08-ASTRA",
    variant: "Slate Grey with Brass Pulls & Open Niche",
    pageNumber: "P / 08",
    description: "A tailored floor-to-ceiling wardrobe in matte graphite with vertical warm brass bar pulls, featuring an open corner curio shelving unit with recessed warm lighting.",
    highlights: [
      "Matte graphite anti-fingerprint laminate",
      "Continuous vertical brass accent handles",
      "Corner open shelving unit for decor & books",
      "Concealed LED strip illumination on all tiers",
      "Precision soft-close hinges with 3D adjustment"
    ],
    tagline: "Tailored • Modern • Streamlined",
    image: "/assets/catalogues/wardrobes/wardrobe-08.jpg"
  },
  {
    number: 9,
    modelName: "ORION",
    modelCode: "WR-S09-ORION",
    variant: "Sliding Wardrobe with Study & Vanity",
    pageNumber: "P / 09",
    description: "An all-in-one architectural bedroom wall combining smooth sliding wardrobe doors, a dedicated home study desk with shelves, and an illuminated dressing vanity.",
    highlights: [
      "Smooth whisper-quiet sliding wardrobe tracks",
      "Integrated compact workstation and desk",
      "Backlit oval LED dressing vanity mirror",
      "Upper display alcoves with warm spotlighting",
      "Space-maximizing modular bedroom architecture"
    ],
    tagline: "Multifunctional • Modern • Harmonious",
    image: "/assets/catalogues/wardrobes/wardrobe-09.jpg"
  },
  {
    number: 10,
    modelName: "SERENA",
    modelCode: "WR-S10-SERENA",
    variant: "Ivory Built-in with Open Display Alcove",
    pageNumber: "P / 10",
    description: "A serene built-in wardrobe in warm ivory lacquer, punctuated by a central illuminated vertical display niche and a right-side tinted glass closet section.",
    highlights: [
      "Warm ivory matte lacquer front panels",
      "Central illuminated open display shelving niche",
      "Tinted glass shutter section for accent garments",
      "Floor-to-ceiling seamless wall integration",
      "Touch-latch and slim profile hardware options"
    ],
    tagline: "Serene • Subtle • Contemporary",
    image: "/assets/catalogues/wardrobes/wardrobe-10.jpg"
  },
  {
    number: 11,
    modelName: "KINETIC",
    modelCode: "WR-S11-KINETIC",
    variant: "Bronze Glass Wardrobe & Hollywood Vanity",
    pageNumber: "P / 11",
    description: "A sophisticated dressing suite pairing bronze-tinted glass sliding wardrobe shutters with an integrated Hollywood-bulb lit cosmetic vanity table.",
    highlights: [
      "Bronze-tinted reflective glass sliding panels",
      "Integrated vanity station with perimeter bulbs",
      "Interior backlit garment and accessory shelves",
      "Multiple velvet-lined shallow organizer drawers",
      "Anodized black aluminum architectural tracks"
    ],
    tagline: "Glamorous • Reflective • Functional",
    image: "/assets/catalogues/wardrobes/wardrobe-11.jpg"
  },
  {
    number: 12,
    modelName: "SOLIS",
    modelCode: "WR-S12-SOLIS",
    variant: "Natural Oak Walk-in Closet System",
    pageNumber: "P / 12",
    description: "A bright, Scandinavian-inspired walk-in closet engineered in natural oak, featuring open hanging rods, deep folded clothes cubbies, and integrated base drawers.",
    highlights: [
      "Natural warm white oak veneer finish",
      "Open-concept hanging rods with LED illumination",
      "Multi-compartment folded garment shelving",
      "Bottom soft-close pull-out chest drawers",
      "Ergonomic layout for daily wardrobe rotation"
    ],
    tagline: "Organic • Accessible • Ergonomic",
    image: "/assets/catalogues/wardrobes/wardrobe-12.jpg"
  },
  {
    number: 13,
    modelName: "VELVET",
    modelCode: "WR-S13-VELVET",
    variant: "Ambient Backlit Walk-in Dressing Suite",
    pageNumber: "P / 13",
    description: "A high-end walk-in boutique suite featuring perimeter ceiling cove lighting, illuminated glass display vitrines for shoes and handbags, and a plush central ottoman.",
    highlights: [
      "Bespoke illuminated shoe and handbag showcases",
      "Warm perimeter ceiling and floor cove lighting",
      "Full-length backlit arched dressing mirror",
      "Center upholstered dressing ottoman",
      "Integrated luxury walk-in closet layout"
    ],
    tagline: "Boutique • Opulent • Atmospheric",
    image: "/assets/catalogues/wardrobes/wardrobe-13.jpg"
  },
  {
    number: 14,
    modelName: "PRISM",
    modelCode: "WR-S14-PRISM",
    variant: "Monolithic Dove Grey & Timber Accents",
    pageNumber: "P / 14",
    description: "A quiet, architectural wardrobe wall finished in velvety dove grey matte laminate, accented by warm timber insets and framed beneath a sculpted organic cove ceiling.",
    highlights: [
      "Velvet-touch dove grey ultra-matte surfaces",
      "Sculpted vertical solid timber pull handles",
      "Seamless integration with ceiling cove lighting",
      "Concealed internal multi-height hanging rods",
      "Heavy-duty German soft-closing mechanisms"
    ],
    tagline: "Sculptural • Minimal • Calming",
    image: "/assets/catalogues/wardrobes/wardrobe-14.jpg"
  },
  {
    number: 15,
    modelName: "CHROMA",
    modelCode: "WR-S15-CHROMA",
    variant: "High-Gloss Midnight Blue Shutter Suite",
    pageNumber: "P / 15",
    description: "A striking hinged wardrobe finished in mirror-like midnight blue lacquer, accentuated by full-height chrome handles and clean architectural lines.",
    highlights: [
      "Ultra-gloss midnight blue mirror lacquer finish",
      "Sleek full-height polished chrome edge handles",
      "Reinforced heavy-duty wardrobe internal carcass",
      "Modular internal shelving with adjustable heights",
      "Contemporary modern master bedroom presence"
    ],
    tagline: "Distinctive • Glossy • Modern",
    image: "/assets/catalogues/wardrobes/wardrobe-15.jpg"
  },
  {
    number: 16,
    modelName: "TERRA",
    modelCode: "WR-S16-TERRA",
    variant: "Olive Green & Fluted Wall with Arched Vanity",
    pageNumber: "P / 16",
    description: "A rich bespoke suite featuring deep olive green lacquered wardrobe doors, rounded vertical brass pulls, and an adjacent illuminated arched vanity with open shelving.",
    highlights: [
      "Deep olive green matte polyurethane finish",
      "Integrated illuminated arched vanity nook",
      "Backlit open display shelves for perfumes & decor",
      "Custom curved solid brass handle profiles",
      "Harmonious bedroom millwork integration"
    ],
    tagline: "Artisanal • Warm • Characteristic",
    image: "/assets/catalogues/wardrobes/wardrobe-16.jpg"
  },
  {
    number: 17,
    modelName: "VERDANT",
    modelCode: "WR-S17-VERDANT",
    variant: "Sage Lacquer & Slatted Wood Wall Suite",
    pageNumber: "P / 17",
    description: "A calming bedroom wardrobe finished in soft sage green high-gloss lacquer, seamlessly paired with fluted oak accent paneling and brass handles.",
    highlights: [
      "Soft sage green high-gloss lacquer front doors",
      "Fluted natural oak side accent panelling",
      "Dual-height interior garment hanging rails",
      "Top-tier overhead storage for bulky items",
      "Reflective finish that expands natural daylight"
    ],
    tagline: "Refreshing • Balanced • Contemporary",
    image: "/assets/catalogues/wardrobes/wardrobe-17.jpg"
  },
  {
    number: 18,
    modelName: "MILANO",
    modelCode: "WR-S18-MILANO",
    variant: "Dual-Tone Taupe with Pill-Shape Vanity",
    pageNumber: "P / 18",
    description: "An Italian-inspired wardrobe combining dual-tone taupe and cream shutters with upper lofts, brushed gold handles, and an attached illuminated pill-shaped dressing mirror.",
    highlights: [
      "Sophisticated dual-tone taupe & cream palette",
      "Attached dressing table with pill-shaped LED mirror",
      "Integrated drawer chest and side display niche",
      "Brushed champagne gold linear handles",
      "Factory-pressed waterproof marine plywood core"
    ],
    tagline: "Continental • Refined • Luxurious",
    image: "/assets/catalogues/wardrobes/wardrobe-18.jpg"
  },
  {
    number: 19,
    modelName: "NORDIC",
    modelCode: "WR-S19-NORDIC",
    variant: "Full-Height Natural Ash Wood Master Suite",
    pageNumber: "P / 19",
    description: "A minimalist Japandi-inspired wardrobe suite wrapped in vertical-grain natural ash wood veneers, creating a serene, uninterrupted architectural wall.",
    highlights: [
      "Natural vertical-grain ash wood veneer faces",
      "Continuous floor-to-ceiling clean door alignments",
      "Concealed finger-pull channels for handle-less purity",
      "Linear LED ceiling wash highlighting timber texture",
      "Generous full-depth wardrobe compartments"
    ],
    tagline: "Organic • Zen • Architectural",
    image: "/assets/catalogues/wardrobes/wardrobe-19.jpg"
  },
  {
    number: 20,
    modelName: "PANORAMA",
    modelCode: "WR-S20-PANORAMA",
    variant: "Aluminum Sliding Frame Wardrobe System",
    pageNumber: "P / 20",
    description: "A wide-span wardrobe system featuring framed glass sliding doors, rich wooden interior cabinetry, and multi-tier hanging zones with warm track lighting.",
    highlights: [
      "Wide-span glass sliding shutter system",
      "High-grade aluminum perimeter profile frames",
      "Warm wooden interior partitions and drawers",
      "Overhead directional track spotlighting",
      "Effortless top-hung sliding track glide"
    ],
    tagline: "Panoramic • Industrial • Elegant",
    image: "/assets/catalogues/wardrobes/wardrobe-20.jpg"
  },
  {
    number: 21,
    modelName: "METRO",
    modelCode: "WR-S21-METRO",
    variant: "Modernist Grey Hinged System with Dresser",
    pageNumber: "P / 21",
    description: "A smart space-optimizing wardrobe in misty grey with continuous overhead lofts, sleek black bar handles, and an integrated dressing alcove with storage drawers.",
    highlights: [
      "Misty grey matte scratch-resistant finish",
      "Full overhead loft storage reaching ceiling",
      "Integrated side dressing mirror and lower drawers",
      "Contrasting matte black architectural handles",
      "Engineered for urban compact luxury homes"
    ],
    tagline: "Smart • Space-Efficient • Urban",
    image: "/assets/catalogues/wardrobes/wardrobe-21.jpg"
  },
  {
    number: 22,
    modelName: "LIGNUM",
    modelCode: "WR-S22-LIGNUM",
    variant: "Beige Lacquer & Smoked Glass Slide Suite",
    pageNumber: "P / 22",
    description: "A grand sliding wardrobe combining warm beige lacquered panels with smoked bronze glass doors, framed beneath warm ambient ceiling light channels.",
    highlights: [
      "Full-height sliding panels with soft-brake system",
      "Smoked bronze reflective glass door accents",
      "Warm ambient recessed ceiling channel lighting",
      "Deep interior shelves and dual pull-out pant racks",
      "Whisper-smooth heavy-duty sliding hardware"
    ],
    tagline: "Expansive • Sleek • Architectural",
    image: "/assets/catalogues/wardrobes/wardrobe-22.jpg"
  },
  {
    number: 23,
    modelName: "SYMPHONY",
    modelCode: "WR-S23-SYMPHONY",
    variant: "Cream Lacquer & Gold Arc Workstation Suite",
    pageNumber: "P / 23",
    description: "A masterpiece of bespoke joinery combining cream lacquer shutters with sweeping curved gold inlays, illuminated glass display vitrines, and a central study desk.",
    highlights: [
      "Artistic sweeping gold arc inlays across shutters",
      "Integrated central vanity / laptop workstation",
      "Flanked by vertical LED glass display vitrines",
      "Warm under-cabinet ambient task lighting",
      "Premium soft-close drawers with vanity stool"
    ],
    tagline: "Artistic • Opulent • Harmonious",
    image: "/assets/catalogues/wardrobes/wardrobe-23.jpg"
  },
  {
    number: 24,
    modelName: "MODENA",
    modelCode: "WR-S24-MODENA",
    variant: "Charcoal & White Suite with Halo Mirror",
    pageNumber: "P / 24",
    description: "A tailored dual-tone wardrobe featuring charcoal grey loft cabinets, matte white shutters with gold bar handles, and an attached corner vanity with circular halo mirror.",
    highlights: [
      "Dual-tone charcoal grey and warm white doors",
      "Integrated corner dressing table with storage",
      "Floating circular LED backlit halo vanity mirror",
      "Curved open display corner shelves with LEDs",
      "Slim brass vertical bar handles"
    ],
    tagline: "Contemporary • Contrast • Tailored",
    image: "/assets/catalogues/wardrobes/wardrobe-24.jpg"
  },
  {
    number: 25,
    modelName: "CREST",
    modelCode: "WR-S25-CREST",
    variant: "Fluted Panel Texture & Curved Vanity Suite",
    pageNumber: "P / 25",
    description: "An architectural wardrobe featuring fluted tactile paneling, arched backlit vanity mirror, side open display shelving, and an integrated amber glass clothing vitrine.",
    highlights: [
      "Tactile CNC-routed vertical fluted shutter panels",
      "Backlit arched vanity mirror with matching stool",
      "Amber glass wardrobe section with warm LEDs",
      "Open corner display shelving with downlights",
      "Refined cashmere and warm wood color scheme"
    ],
    tagline: "Sculpted • Tactile • Luxurious",
    image: "/assets/catalogues/wardrobes/wardrobe-25.jpg"
  },
  {
    number: 26,
    modelName: "ATELIER",
    modelCode: "WR-S26-ATELIER",
    variant: "French Sliding Glass Walk-in Dressing Suite",
    pageNumber: "P / 26",
    description: "A Parisian-inspired walk-in dressing suite behind sliding grid glass doors, featuring comprehensive warm-lit open shelving, hanging rails, and shoe organizers.",
    highlights: [
      "Sliding grid French-style glass partition doors",
      "Open illuminated walk-in shelving and hanging racks",
      "Integrated soft-close drawer units and cubbies",
      "Warm ambient 2700K recessed ceiling downlights",
      "Boutique-level garment presentation and access"
    ],
    tagline: "Parisian • Boutique • Open-Concept",
    image: "/assets/catalogues/wardrobes/wardrobe-26.jpg"
  },
  {
    number: 27,
    modelName: "IMPERIAL",
    modelCode: "WR-S27-IMPERIAL",
    variant: "Dark Timber Dressing Suite with Ottoman",
    pageNumber: "P / 27",
    description: "An elite walk-in wardrobe gallery finished in rich dark timber and smoked glass, featuring symmetrical floor-to-ceiling storage, central ottoman, and cove lighting.",
    highlights: [
      "Symmetrical dark stained oak & smoked glass cabinetry",
      "Architectural linear ceiling cove illumination",
      "Central plush velvet tufted dressing bench",
      "Specialized pull-out watch & jewelry display vitrines",
      "End-to-end bespoke luxury penthouse execution"
    ],
    tagline: "Regal • Dramatic • Masterpiece",
    image: "/assets/catalogues/wardrobes/wardrobe-27.jpg"
  },
  {
    number: 28,
    modelName: "INFINITY",
    modelCode: "WR-S28-INFINITY",
    variant: "Corridor-Span Matte Slate Wardrobe Wall",
    pageNumber: "P / 28",
    description: "A sleek corridor wardrobe suite stretching floor to ceiling in matte slate grey, featuring integrated dressing mirrors, recessed niches, and minimalist black handles.",
    highlights: [
      "Continuous multi-bay corridor storage configuration",
      "Integrated floor-to-ceiling dressing mirror section",
      "Low-profile horizontal dresser drawer bank",
      "Slim matte black full-length bar handles",
      "Clean linear aesthetic ideal for master suites"
    ],
    tagline: "Sleek • Infinite • Monolithic",
    image: "/assets/catalogues/wardrobes/wardrobe-28.jpg"
  },
  {
    number: 29,
    modelName: "WALNUT",
    modelCode: "WR-S29-WALNUT",
    variant: "Rich Walnut & Graphite Combination Suite",
    pageNumber: "P / 29",
    description: "A harmonious combination wardrobe blending natural rich walnut casing with matte graphite shutters, integrated drawer chest, and subtle overhead LED illumination.",
    highlights: [
      "Rich American walnut veneer perimeter frame",
      "Matte graphite door fronts with wood strip pulls",
      "Built-in side chest of drawers for everyday essentials",
      "Upper recessed LED cove lighting wash",
      "Perfect textural balance of warmth and minimalism"
    ],
    tagline: "Warm • Harmonious • Timeless",
    image: "/assets/catalogues/wardrobes/wardrobe-29.jpg"
  },
  {
    number: 30,
    modelName: "AMBER",
    modelCode: "WR-S30-AMBER",
    variant: "Amber Luminescence Glass Showcase Suite",
    pageNumber: "P / 30",
    description: "A showcase wardrobe defined by transparent glass vitrine shutters illuminated with golden amber internal LEDs, highlighting organized hanging and storage tiers.",
    highlights: [
      "Golden amber LED internal lighting system",
      "Transparent tempered glass vitrine doors",
      "Multi-tier shelving for designer apparel and knitwear",
      "Minimalist slim aluminum frame structure",
      "Creates an enchanting evening bedroom atmosphere"
    ],
    tagline: "Golden • Transparent • Enchanting",
    image: "/assets/catalogues/wardrobes/wardrobe-30.jpg"
  }
];
