// Capsule Company Official Ceiling Luxury Catalogue Data (30 Curated Architectural Ceiling Designs)
// Mapped: Image -> Model Name -> Variant -> Description -> Highlights -> Model Code -> Style Words

export interface CeilingModel {
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

export const ceilingLuxuryData: CeilingModel[] = [
  {
    number: 1,
    modelName: "AURA",
    modelCode: "CL-S01-AURA",
    variant: "Geometric Intersecting Tray with Cove Illumination",
    pageNumber: "P / 01",
    description: "An architectural false ceiling defined by criss-crossing geometric gypsum troughs, perimeter warm LED cove lighting, and recessed directional spotlights.",
    highlights: [
      "Multi-layered geometric intersecting gypsum channels",
      "Concealed 3000K warm perimeter cove lighting",
      "Flush-mounted architectural directional downlights",
      "Clean sharp-edge corner profile plasterwork",
      "Contemporary hall aesthetic with ceiling fan integration"
    ],
    tagline: "Geometric • Luminous • Architectural",
    image: "/assets/catalogues/ceilings/ceiling-01.jpg"
  },
  {
    number: 2,
    modelName: "NOVA",
    modelCode: "CL-S02-NOVA",
    variant: "Curvilinear Floating Tray & Crystal Chandelier",
    pageNumber: "P / 02",
    description: "A soft curvilinear island ceiling featuring sweeping rounded corners, recessed warm perimeter halos, and a central crystal pendant in an elegant living lounge.",
    highlights: [
      "Sweeping curvilinear floating tray profile",
      "Continuous concealed perimeter warm LED halo",
      "Central crystal chandelier suspension point",
      "Anti-crack gypsum board construction",
      "Creates an inviting and expansive living room ambience"
    ],
    tagline: "Curvilinear • Elegant • Sophisticated",
    image: "/assets/catalogues/ceilings/ceiling-02.jpg"
  },
  {
    number: 3,
    modelName: "LUMEN",
    modelCode: "CL-S03-LUMEN",
    variant: "Flowing Organic Light Channels Across Kitchen",
    pageNumber: "P / 03",
    description: "An expressive parametric ceiling featuring freeform undulating recessed light channels with warm LED strips extending seamlessly across a luxury kitchen and dining space.",
    highlights: [
      "Freeform organic flowing light channels",
      "Recessed flexible warm LED strip lighting",
      "Seamless plaster transition into perimeter soffits",
      "Integrated downlights for focused prep lighting",
      "Dynamic architectural character and movement"
    ],
    tagline: "Organic • Expressive • Dynamic",
    image: "/assets/catalogues/ceilings/ceiling-03.jpg"
  },
  {
    number: 4,
    modelName: "VERVE",
    modelCode: "CL-S04-VERVE",
    variant: "Diamond Coffered Hallway with Perimeter Glow",
    pageNumber: "P / 04",
    description: "A striking corridor ceiling featuring recessed diamond-shaped coffers with central warm spotlights and backlit perimeter cove margins.",
    highlights: [
      "Repetitive diamond coffer geometric pattern",
      "Centrally placed warm beam micro-spotlights",
      "Recessed perimeter ambient light channels",
      "Enhances visual depth in elongated hallways",
      "High-precision laser-aligned gypsum joinery"
    ],
    tagline: "Geometric • Rhythmic • Architectural",
    image: "/assets/catalogues/ceilings/ceiling-04.jpg"
  },
  {
    number: 5,
    modelName: "ELARA",
    modelCode: "CL-S05-ELARA",
    variant: "Timber Louvred Dining Island with Triple Pendants",
    pageNumber: "P / 05",
    description: "A dining room ceiling feature pairing warm horizontal wooden louvres with a recessed perimeter cove and a cluster of contemporary glass pendant fixtures.",
    highlights: [
      "Warm natural timber slatted ceiling inlay",
      "Recessed perimeter warm white cove lighting",
      "Dedicated multi-tier glass pendant suspensions",
      "Defines dining zones in open-concept floor plans",
      "Acoustic dampening with textural warmth"
    ],
    tagline: "Warm • Artisanal • Balanced",
    image: "/assets/catalogues/ceilings/ceiling-05.jpg"
  },
  {
    number: 6,
    modelName: "ZENITH",
    modelCode: "CL-S06-ZENITH",
    variant: "Sculpted S-Curve Corridor Light Channel",
    pageNumber: "P / 06",
    description: "A modern passage ceiling characterized by an illuminated serpentine S-curve light trough that guides movement with ambient warm illumination.",
    highlights: [
      "Continuous serpentine S-curve cove recess",
      "Concealed uniform flexible LED diffusion strip",
      "Integrated minimalist flush downlights",
      "Clean shadow gap detailing along wall edges",
      "Transforms transitional corridors into design journeys"
    ],
    tagline: "Fluid • Sculpted • Modern",
    image: "/assets/catalogues/ceilings/ceiling-06.jpg"
  },
  {
    number: 7,
    modelName: "VORTEX",
    modelCode: "CL-S07-VORTEX",
    variant: "Parametric Relief Wave POP Sculpture",
    pageNumber: "P / 07",
    description: "A dramatic luxury penthouse ceiling featuring three-dimensional sculpted parametric gypsum waves with concealed edge illumination across a grand double-height hall.",
    highlights: [
      "Three-dimensional parametric sculpted waves",
      "Concealed directional light grazing across curves",
      "Custom CNC-formed gypsum fibrous acoustic panels",
      "Dramatic focal point for high-ceiling living rooms",
      "Museum-grade contemporary plaster artistry"
    ],
    tagline: "Parametric • Opulent • Sculptural",
    image: "/assets/catalogues/ceilings/ceiling-07.jpg"
  },
  {
    number: 8,
    modelName: "KINETIC",
    modelCode: "CL-S08-KINETIC",
    variant: "Concentric Angular Gypsum Trays & Spots",
    pageNumber: "P / 08",
    description: "A clean architectural design combining concentric angular ceiling steps with integrated recessed spotlight grids and warm cove perimeter bands.",
    highlights: [
      "Concentric angular ceiling stepped profiles",
      "Precision-aligned dual recessed spotlight rows",
      "Concealed perimeter light channels for ambient wash",
      "Matte white finish enhancing spatial height",
      "Crisp contemporary living hall detailing"
    ],
    tagline: "Crisp • Concentric • Contemporary",
    image: "/assets/catalogues/ceilings/ceiling-08.jpg"
  },
  {
    number: 9,
    modelName: "SOLARIS",
    modelCode: "CL-S09-SOLARIS",
    variant: "Textured Backlit Tray with Perimeter Cove",
    pageNumber: "P / 09",
    description: "A sophisticated living room ceiling featuring a centrally recessed acoustic stippled panel bathed in warm indirect cove light and framed by recessed downlights.",
    highlights: [
      "Central recessed acoustic textured panel field",
      "Perimeter continuous 2700K warm LED cove wash",
      "Evenly spaced perimeter spotlight grid",
      "Enhanced room acoustic balance and softness",
      "Timeless modern luxury aesthetic"
    ],
    tagline: "Textured • Ambient • Serene",
    image: "/assets/catalogues/ceilings/ceiling-09.jpg"
  },
  {
    number: 10,
    modelName: "CASCADE",
    modelCode: "CL-S10-CASCADE",
    variant: "Layered Gypsum Wave Canopy for Grand Halls",
    pageNumber: "P / 10",
    description: "An expansive grand-hall ceiling sculpt featuring undulating multi-layer gypsum contours that ripple outwards across open-plan living and foyer areas.",
    highlights: [
      "Multi-layered cascading gypsum wave contours",
      "Concealed ambient backlighting along stepped curves",
      "Accommodates central ceiling fan and chandeliers",
      "Architectural scale designed for spacious villas",
      "Handcrafted curved transition profiles"
    ],
    tagline: "Cascading • Grand • Architectural",
    image: "/assets/catalogues/ceilings/ceiling-10.jpg"
  },
  {
    number: 11,
    modelName: "STRATA",
    modelCode: "CL-S11-STRATA",
    variant: "Floating Minimalist Island with Warm Halo",
    pageNumber: "P / 11",
    description: "A clean minimalist suspended ceiling slab with a powerful upward warm cove halo and integrated downlights hovering over a contemporary kitchen and dining space.",
    highlights: [
      "Suspended floating island slab architecture",
      "Upward-projecting 3000K indirect cove halo",
      "Flush-mounted glare-free kitchen downlights",
      "Defines functional zones with understated grace",
      "Ultra-matte moisture-resistant ceiling finish"
    ],
    tagline: "Floating • Minimal • Refined",
    image: "/assets/catalogues/ceilings/ceiling-11.jpg"
  },
  {
    number: 12,
    modelName: "CHROMA",
    modelCode: "CL-S12-CHROMA",
    variant: "Multi-Tier Timber Rafter & Gypsum Coffers",
    pageNumber: "P / 12",
    description: "A rich luxury ceiling pairing warm wooden rafters with multi-tiered gypsum tray profiles, accent cove lighting, and perimeter downlights in a formal drawing room.",
    highlights: [
      "Warm walnut timber rafter inlays",
      "Multi-tier stepped gypsum perimeter tray",
      "Warm indirect cove lighting across dual levels",
      "Integrated AC supply diffusers in shadow reveals",
      "Harmonious balance of natural wood and clean white"
    ],
    tagline: "Layered • Warm • Luxurious",
    image: "/assets/catalogues/ceilings/ceiling-12.jpg"
  },
  {
    number: 13,
    modelName: "STELLA",
    modelCode: "CL-S13-STELLA",
    variant: "Intersecting Star Coffers with Crystal Fixture",
    pageNumber: "P / 13",
    description: "A grand neoclassical-modern ceiling featuring an intricate intersecting geometric star coffer, warm cove backlighting, and a central crystal chandelier in a villa drawing room.",
    highlights: [
      "Intricate intersecting star geometric coffer design",
      "Indirect warm LED cove backlighting along all facets",
      "Central crystal chandelier focal mounting",
      "Symmetrical ceiling layout elevating room proportions",
      "Flawless precision molding and seam finishes"
    ],
    tagline: "Stately • Geometric • Masterpiece",
    image: "/assets/catalogues/ceilings/ceiling-13.jpg"
  },
  {
    number: 14,
    modelName: "LINEA",
    modelCode: "CL-S14-LINEA",
    variant: "Waterfall POP-to-Wall Light Ribs",
    pageNumber: "P / 14",
    description: "A futuristic architectural concept featuring illuminated ceiling troughs that waterfall down the wall into vertical light fins with integrated spotlights.",
    highlights: [
      "Continuous ceiling-to-wall waterfall light ribs",
      "Recessed warm LED channel illumination",
      "Punctured directional downlights along ceiling bays",
      "Creates an immersive architectural envelopment",
      "Custom laser-formed gypsum profiles"
    ],
    tagline: "Futuristic • Linear • Immersive",
    image: "/assets/catalogues/ceilings/ceiling-14.jpg"
  },
  {
    number: 15,
    modelName: "ORGANIC",
    modelCode: "CL-S15-ORGANIC",
    variant: "Pebble-Shaped Curved Island with Circular Ring",
    pageNumber: "P / 15",
    description: "A playful organic ceiling island resembling a soft river pebble, featuring recessed warm cove lighting and a suspended concentric black ring chandelier.",
    highlights: [
      "Soft biophilic pebble-shaped island profile",
      "Concealed 360-degree perimeter warm cove glow",
      "Modern minimalist black ring pendant fixture",
      "Softens angular rooms with organic curvature",
      "Even shadow-free ambient room distribution"
    ],
    tagline: "Biophilic • Soft • Luminous",
    image: "/assets/catalogues/ceilings/ceiling-15.jpg"
  },
  {
    number: 16,
    modelName: "RIPPLE",
    modelCode: "CL-S16-RIPPLE",
    variant: "Organic Multi-Tier Waves with Cluster Pendants",
    pageNumber: "P / 16",
    description: "A layered organic ceiling featuring undulating curvilinear profiles that frame a dining area and suspend an artistic cluster of glass globe pendants.",
    highlights: [
      "Multi-tier fluid curvilinear ceiling layers",
      "Integrated warm cove glow between overlapping tiers",
      "Centrally suspended cluster globe pendant lights",
      "Visually delineates open dining and kitchen zones",
      "Seamless skimmed plaster with zero visible joints"
    ],
    tagline: "Fluid • Artistic • Harmonious",
    image: "/assets/catalogues/ceilings/ceiling-16.jpg"
  },
  {
    number: 17,
    modelName: "TERRA",
    modelCode: "CL-S17-TERRA",
    variant: "Curved Wood Veneer Raft with Brass Pendant",
    pageNumber: "P / 17",
    description: "A warm dining ceiling feature crafted from natural wood veneer formed into an organic sweeping raft, accented by perimeter cove light and a modern brass chandelier.",
    highlights: [
      "Organic sweeping curved wood veneer raft",
      "Concealed ambient backlighting casting warm shadows",
      "Suspended multi-arm brass molecular chandelier",
      "Pairs with matching fluted wood wall panelling",
      "Warm organic focal point for contemporary dining"
    ],
    tagline: "Organic • Tactile • Warm",
    image: "/assets/catalogues/ceilings/ceiling-17.jpg"
  },
  {
    number: 18,
    modelName: "TIMBER",
    modelCode: "CL-S18-TIMBER",
    variant: "Coffered Timber Grid with Recessed Downlights",
    pageNumber: "P / 18",
    description: "An architectural open-plan ceiling featuring a rich grid of exposed timber beams and coffers with warm recessed spotlights in a luxury kitchen and dining suite.",
    highlights: [
      "Architectural coffered timber beam grid system",
      "Warm recessed downlights inside every coffer bay",
      "Rich teak-stained timber trim with white ceiling fields",
      "Adds monumental warmth to high-ceiling spaces",
      "Precision structural millwork carpentry"
    ],
    tagline: "Coffered • Monumental • Timeless",
    image: "/assets/catalogues/ceilings/ceiling-18.jpg"
  },
  {
    number: 19,
    modelName: "ELEVATE",
    modelCode: "CL-S19-ELEVATE",
    variant: "Double-Height Grand Living Room POP Design",
    pageNumber: "P / 19",
    description: "A soaring double-height villa ceiling designed with concentric layered perimeter steps, indirect cove washes, recessed spots, and a grand pendant suspension.",
    highlights: [
      "Engineered for double-height architectural living halls",
      "Concentric multi-step perimeter gypsum moldings",
      "Powerful high-output warm LED cove light channels",
      "Ceiling fan integration with decorative crystal pendant",
      "Enhances spatial verticality and volume"
    ],
    tagline: "Soaring • Regal • Grand",
    image: "/assets/catalogues/ceilings/ceiling-19.jpg"
  },
  {
    number: 20,
    modelName: "FLOW",
    modelCode: "CL-S20-FLOW",
    variant: "Dual-Sinuous Light Ribbons Across Penthouse",
    pageNumber: "P / 20",
    description: "A captivating POP design featuring dual meandering light channels running through an open-concept penthouse lounge, accompanied by directional spot arrays.",
    highlights: [
      "Dual meandering curved ceiling light channels",
      "Continuous flexible LED light diffusion",
      "Linear spotlight tracks along main travel paths",
      "Unifies sprawling living and dining areas",
      "Bespoke architectural gypsum craftsmanship"
    ],
    tagline: "Sinuous • Expansive • Visionary",
    image: "/assets/catalogues/ceilings/ceiling-20.jpg"
  },
  {
    number: 21,
    modelName: "MONOLITH",
    modelCode: "CL-S21-MONOLITH",
    variant: "Penthouse Concrete Texture with Linear Light",
    pageNumber: "P / 21",
    description: "An industrial-luxury penthouse living room ceiling featuring micro-cement plaster textures framed by a perimeter dropped soffit and recessed linear LED channels.",
    highlights: [
      "Tactile micro-cement plaster field texture",
      "Perimeter dropped soffit with warm ambient wash",
      "Concealed linear magnetic spotlight tracks",
      "Understated brutalist-contemporary elegance",
      "Seamless transition to full-height glazing"
    ],
    tagline: "Architectural • Industrial • Refined",
    image: "/assets/catalogues/ceilings/ceiling-21.jpg"
  },
  {
    number: 22,
    modelName: "CAPSULE",
    modelCode: "CL-S22-CAPSULE",
    variant: "Curved Stadium Tray with Center Chandelier",
    pageNumber: "P / 22",
    description: "A pill-shaped stadium ceiling tray with rounded semicircular ends, warm recessed cove lighting, and a modern glass chandelier above a dining area.",
    highlights: [
      "Symmetrical pill-shaped stadium tray profile",
      "Soft continuous perimeter cove illumination",
      "Central suspension point for statement lighting",
      "Smooth curved transition to main ceiling plane",
      "Space-defining geometry for dining or halls"
    ],
    tagline: "Rounded • Harmonious • Contemporary",
    image: "/assets/catalogues/ceilings/ceiling-22.jpg"
  },
  {
    number: 23,
    modelName: "PRISM",
    modelCode: "CL-S23-PRISM",
    variant: "Backlit Geometric Acoustic Panel & Ring Chandelier",
    pageNumber: "P / 23",
    description: "A luxury false ceiling combining an illuminated CNC-patterned acoustic panel field with warm stepped coves and circular pendant light fixtures.",
    highlights: [
      "Centrally backlit CNC geometric acoustic ceiling field",
      "Concentric stepped outer cove light channels",
      "Warm diffused glow eliminating surface glare",
      "Integrated wall sconce and halo mirror harmony",
      "High decorative detail for master living suites"
    ],
    tagline: "Intricate • Luminous • Opulent",
    image: "/assets/catalogues/ceilings/ceiling-23.jpg"
  },
  {
    number: 24,
    modelName: "VALLEY",
    modelCode: "CL-S24-VALLEY",
    variant: "Warm Wood Inlay Tray with Perimeter Downlights",
    pageNumber: "P / 24",
    description: "A handsome living room ceiling featuring a centrally recessed natural wood plank tray bordered by warm cove lighting and perimeter gypsum downlights.",
    highlights: [
      "Natural warm timber plank central ceiling insert",
      "Recessed 3000K warm cove halo around wood tray",
      "Perimeter gypsum soffit with flush downlights",
      "Matches media wall and hardwood flooring tones",
      "Brings rich organic warmth into modern spaces"
    ],
    tagline: "Warm • Rich • Architectural",
    image: "/assets/catalogues/ceilings/ceiling-24.jpg"
  },
  {
    number: 25,
    modelName: "FORUM",
    modelCode: "CL-S25-FORUM",
    variant: "Stepped Neoclassical Tray & Crystal Chandelier",
    pageNumber: "P / 25",
    description: "A refined formal drawing room ceiling featuring clean stepped gypsum cornices, perimeter warm cove lighting, and an elegant multi-tier chandelier.",
    highlights: [
      "Stepped neoclassical architectural cornice steps",
      "Concealed perimeter LED halo illumination",
      "Central medallion point for crystal chandeliers",
      "Balanced symmetrical proportions",
      "Creates a grand formal entertaining atmosphere"
    ],
    tagline: "Neoclassical • Stately • Pristine",
    image: "/assets/catalogues/ceilings/ceiling-25.jpg"
  },
  {
    number: 26,
    modelName: "AMBER",
    modelCode: "CL-S26-AMBER",
    variant: "Dual Concentric Light Bands in Living Hall",
    pageNumber: "P / 26",
    description: "A modern dual-concentric POP design featuring twin rectangular light channels casting a warm amber glow over living and dining zones.",
    highlights: [
      "Dual concentric rectangular light troughs",
      "High-efficiency warm white LED strip arrays",
      "Secondary directional spotlight perimeter",
      "Even spatial illumination without harsh glare",
      "Clean geometric ceiling lines"
    ],
    tagline: "Concentric • Luminous • Modern",
    image: "/assets/catalogues/ceilings/ceiling-26.jpg"
  },
  {
    number: 27,
    modelName: "HORIZON",
    modelCode: "CL-S27-HORIZON",
    variant: "Curved Corner Minimalist Tray in Neutral Lounge",
    pageNumber: "P / 27",
    description: "A calming contemporary ceiling featuring soft radius curved corners, warm perimeter cove light, and flush downlights in a serene cream lounge.",
    highlights: [
      "Soft radius curved inner tray corners",
      "Concealed perimeter warm white indirect glow",
      "Low-profile flush-mount ceiling spotlights",
      "Creates a relaxed and inviting living room sanctuary",
      "Seamless matte plaster surface finish"
    ],
    tagline: "Serene • Minimal • Soft",
    image: "/assets/catalogues/ceilings/ceiling-27.jpg"
  },
  {
    number: 28,
    modelName: "RADIUS",
    modelCode: "CL-S28-RADIUS",
    variant: "Symmetrical Tray with Wall Cove Illumination",
    pageNumber: "P / 28",
    description: "A symmetrical recessed tray ceiling featuring continuous warm cove lighting that washes down adjacent walls, complemented by a white ceiling fan.",
    highlights: [
      "Crisp symmetrical rectangular recessed tray",
      "Continuous warm LED cove washing adjacent walls",
      "Dedicated center ceiling fan reinforced junction",
      "Evenly spaced perimeter spotlight grid",
      "Versatile design suitable for living or master bedrooms"
    ],
    tagline: "Balanced • Versatile • Contemporary",
    image: "/assets/catalogues/ceilings/ceiling-28.jpg"
  },
  {
    number: 29,
    modelName: "DIAMOND",
    modelCode: "CL-S29-DIAMOND",
    variant: "Diagonal Lattice Coffers with Chandelier",
    pageNumber: "P / 29",
    description: "A breathtaking villa ceiling featuring an intricate diagonal lattice of gypsum ribs with warm backlit coffers and a central crystal chandelier.",
    highlights: [
      "Intricate diagonal diamond lattice coffer beams",
      "Concealed edge backlighting inside each diamond bay",
      "Suspended multi-tier crystal chandelier centerpiece",
      "Bespoke handcrafted plaster molding profiles",
      "Statement luxury ceiling for grand villas"
    ],
    tagline: "Intricate • Opulent • Magnificent",
    image: "/assets/catalogues/ceilings/ceiling-29.jpg"
  },
  {
    number: 30,
    modelName: "SERENE",
    modelCode: "CL-S30-SERENE",
    variant: "Scandinavian Layered Tray with Soft Cove Wash",
    pageNumber: "P / 30",
    description: "An understated Scandinavian false ceiling defined by subtle layered steps, a soft warm cove halo, and precision glare-free architectural spots.",
    highlights: [
      "Understated subtle layered gypsum steps",
      "Soft 2700K indirect warm cove wash",
      "Deep-recessed glare-free downlight fittings",
      "Expands the feeling of room height and space",
      "Timeless Nordic minimalist architectural aesthetic"
    ],
    tagline: "Understated • Calming • Timeless",
    image: "/assets/catalogues/ceilings/ceiling-30.jpg"
  }
];
