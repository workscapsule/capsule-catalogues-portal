// TV Unit Luxury Catalogue Data (48 Authentic Models from Google Drive)
// Mapped: Image -> Small Design Name -> Variant -> Description -> Highlights -> Model Code -> Style Words

export interface TVUnitModel {
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

export const tvUnitLuxuryData: TVUnitModel[] = [
  {
    number: 1,
    modelName: "VISTA",
    modelCode: "TV-S01-VISTA",
    variant: "Backlit Marble Slab & Floating Console",
    pageNumber: "P/01",
    description: "A statement media wall defined by a dramatic backlit stone slab, seamless low-profile floating console, and warm perimeter LED halo illumination.",
    highlights: [
      "Backlit translucent stone backdrop",
      "Floating low-profile media console",
      "Ambient perimeter LED cove lighting",
      "Concealed audio-video wire raceways",
      "Contemporary luxury aesthetic"
    ],
    tagline: "Warm • Luminous • Architectural",
    image: "/assets/catalogues/tv-units/tv-01.jpg"
  },
  {
    number: 2,
    modelName: "MONOLITH",
    modelCode: "TV-S02-MONOLITH",
    variant: "Slatted Timber & Recessed Glow",
    pageNumber: "P/02",
    description: "An understated architectural TV wall crafted with vertical fluted timber slats, an integrated floating shelf, and concealed warm perimeter backlighting.",
    highlights: [
      "Vertical fluted timber slats",
      "Recessed perimeter halo illumination",
      "Full-width floating base shelf",
      "Acoustic texture and warmth",
      "Modern minimalist character"
    ],
    tagline: "Architectural • Warm • Refined",
    image: "/assets/catalogues/tv-units/tv-02.jpg"
  },
  {
    number: 3,
    modelName: "FORUM",
    modelCode: "TV-S03-FORUM",
    variant: "Arched Alcoves & Fluted Credenza",
    pageNumber: "P/03",
    description: "A serene neoclassical-modern TV wall featuring soft arched display alcoves with integrated warm shelving lights, fluted textures, and a rounded floating media unit.",
    highlights: [
      "Soft arched display alcoves",
      "Fluted pillar side textures",
      "Integrated warm LED shelf illumination",
      "Rounded edge floating media credenza",
      "Elegant light-toned finish"
    ],
    tagline: "Neoclassical • Soft • Sculptural",
    image: "/assets/catalogues/tv-units/tv-03.jpg"
  },
  {
    number: 4,
    modelName: "SYMPHONY",
    modelCode: "TV-S04-SYMPHONY",
    variant: "Charcoal Slate & Linear Fireplace",
    pageNumber: "P/04",
    description: "A luxurious media feature wall pairing a large dark stone backdrop with rhythmic slatted walnut lower paneling and an integrated linear flame hearth.",
    highlights: [
      "Charcoal stone slab feature panel",
      "Lower slatted acoustic wood paneling",
      "Built-in linear electric fireplace",
      "Concealed perimeter LED halo",
      "Sophisticated dark aesthetic"
    ],
    tagline: "Moody • Dramatic • Refined",
    image: "/assets/catalogues/tv-units/tv-04.jpg"
  },
  {
    number: 5,
    modelName: "OPUS",
    modelCode: "TV-S05-OPUS",
    variant: "Split-Face Stone & Oak Louvres",
    pageNumber: "P/05",
    description: "A multi-layered entertainment wall combining a raw split-face slate accent wall, natural oak vertical louvres, and a cantilevered charcoal storage bench.",
    highlights: [
      "Textured split-face stone wall",
      "Natural oak vertical slat panels",
      "Cantilevered low charcoal storage bench",
      "Flush architectural track downlights",
      "Tactile organic modern presence"
    ],
    tagline: "Organic • Textured • Modern",
    image: "/assets/catalogues/tv-units/tv-05.jpg"
  },
  {
    number: 6,
    modelName: "KINETIC",
    modelCode: "TV-S06-KINETIC",
    variant: "Graphite Millwork & Display Bookcases",
    pageNumber: "P/06",
    description: "A timeless full-height media wall in matte graphite grey, showcasing symmetrical display bookshelves, classic base cabinetry, and soft task lighting.",
    highlights: [
      "Full-height graphite custom joinery",
      "Symmetrical display bookcases",
      "Classic shaker base cabinetry",
      "Integrated reading wall sconce",
      "Generous concealed storage capacity"
    ],
    tagline: "Classic • Structured • Timeless",
    image: "/assets/catalogues/tv-units/tv-06.jpg"
  },
  {
    number: 7,
    modelName: "PANORAMA",
    modelCode: "TV-S07-PANORAMA",
    variant: "Black Gold Marble & Amber Underglow",
    pageNumber: "P/07",
    description: "An opulent entertainment centerpiece showcasing a dramatic black and gold veined marble backdrop, enhanced by warm amber perimeter LED lighting and a floating dark credenza.",
    highlights: [
      "Black & gold veined marble backdrop",
      "Amber LED perimeter cove illumination",
      "Floating dark wood console credenza",
      "Minimalist cable-free mounting",
      "High-contrast luxury atmosphere"
    ],
    tagline: "Luxurious • Dramatic • Sleek",
    image: "/assets/catalogues/tv-units/tv-07.jpg"
  },
  {
    number: 8,
    modelName: "SLATE",
    modelCode: "TV-S08-SLATE",
    variant: "Rough-Hewn Ledge Stone & Warm Timber",
    pageNumber: "P/08",
    description: "A tactile media wall incorporating rustic ledge-stone masonry, vertical timber battens, and warm integrated cove lighting over an earthy floating console.",
    highlights: [
      "Natural ledge-stone textured masonry",
      "Vertical timber batten accents",
      "Integrated warm cove illumination",
      "Earthy floating low-profile console",
      "Warm organic modern sanctuary feel"
    ],
    tagline: "Earthy • Rustic Modern • Warm",
    image: "/assets/catalogues/tv-units/tv-08.jpg"
  },
  {
    number: 9,
    modelName: "MERIDIAN",
    modelCode: "TV-S09-MERIDIAN",
    variant: "Geometric Light Channels & Brass Trim",
    pageNumber: "P/09",
    description: "A contemporary media installation distinguished by diagonal geometric light channels, vertical slatted side accents, and illuminated display cubbies.",
    highlights: [
      "Diagonal LED light channels in stone",
      "Vertical fluted timber side accents",
      "Illuminated open display cubbies",
      "Floating lowboard storage drawers",
      "Dynamic contemporary focal design"
    ],
    tagline: "Geometric • Dynamic • Contemporary",
    image: "/assets/catalogues/tv-units/tv-09.jpg"
  },
  {
    number: 10,
    modelName: "AERO",
    modelCode: "TV-S10-AERO",
    variant: "Bookmatched Granite & Floating Plinth",
    pageNumber: "P/10",
    description: "An expansive media wall highlighted by a bookmatched grey granite slab, sleek brass perimeter reveals, and an ultra-wide floating console plinth.",
    highlights: [
      "Bookmatched natural granite backdrop",
      "Full-width floating console plinth",
      "Warm perimeter top and bottom wash",
      "Clean architectural shadow reveals",
      "Minimalist high-end statement"
    ],
    tagline: "Sleek • Grand • Minimal",
    image: "/assets/catalogues/tv-units/tv-10.jpg"
  },
  {
    number: 11,
    modelName: "LUMINA",
    modelCode: "TV-S11-LUMINA",
    variant: "Curved Timber Halo & Fluted Tambour",
    pageNumber: "P/11",
    description: "A softly sculpted TV wall centered around a curved-corner wood backboard with organic contour lines, a warm halo glow, and a fluted tambour console.",
    highlights: [
      "Curved-corner natural wood backdrop",
      "Continuous warm LED halo lighting",
      "Fluted tambour wood console base",
      "Integrated disc sconce wall lights",
      "Soft organic and inviting silhouette"
    ],
    tagline: "Fluid • Organic • Inviting",
    image: "/assets/catalogues/tv-units/tv-11.jpg"
  },
  {
    number: 12,
    modelName: "STRATA",
    modelCode: "TV-S12-STRATA",
    variant: "Chevron Walnut Veneer & Slat Bench",
    pageNumber: "P/12",
    description: "A designer TV wall spotlighting bookmatched chevron walnut paneling, vertical acoustic slats, and an integrated floating bench with glowing circular motifs.",
    highlights: [
      "Chevron bookmatched walnut veneer wall",
      "Asymmetric open display shelving tower",
      "Slat-faced floating low bench",
      "Integrated glowing circular wall art",
      "Bespoke designer architectural character"
    ],
    tagline: "Tailored • Rich • Architectural",
    image: "/assets/catalogues/tv-units/tv-12.jpg"
  },
  {
    number: 13,
    modelName: "SOLIS",
    modelCode: "TV-S13-SOLIS",
    variant: "Stacked Slate & Walnut Millwork",
    pageNumber: "P/13",
    description: "An atmospheric media wall blending rugged stacked slate stonework with vertical walnut paneling, display niches, and an earthy floating hearth bench.",
    highlights: [
      "Stacked slate masonry feature wall",
      "Vertical walnut side panel cabinetry",
      "Integrated spotlight niche shelving",
      "Robust floating hearth console bench",
      "Deep moody luxury styling"
    ],
    tagline: "Tactile • Robust • Moody",
    image: "/assets/catalogues/tv-units/tv-13.jpg"
  },
  {
    number: 14,
    modelName: "NEXUS",
    modelCode: "TV-S14-NEXUS",
    variant: "Linear Oak Wall & Recessed Media Strip",
    pageNumber: "P/14",
    description: "A clean architectural wall treatment rendered in continuous warm oak planks with a recessed media reveal and soft horizontal cove lighting.",
    highlights: [
      "Horizontal oak plank wall treatment",
      "Recessed architectural media reveal",
      "Soft horizontal top & bottom LED wash",
      "Hardware-free minimalist aesthetic",
      "Seamless natural timber warmth"
    ],
    tagline: "Linear • Pure • Seamless",
    image: "/assets/catalogues/tv-units/tv-14.jpg"
  },
  {
    number: 15,
    modelName: "VELO",
    modelCode: "TV-S15-VELO",
    variant: "Matte Charcoal & Oak Cantilever",
    pageNumber: "P/15",
    description: "A minimalist composition balancing a dark charcoal feature wall with an open vertical display column and an asymmetrical cantilevered oak shelf.",
    highlights: [
      "Matte charcoal feature wall panel",
      "Vertical open display column",
      "Cantilevered light oak storage shelf",
      "Concealed cable routing design",
      "Striking graphic modern contrast"
    ],
    tagline: "Graphic • Contrast • Modern",
    image: "/assets/catalogues/tv-units/tv-15.jpg"
  },
  {
    number: 16,
    modelName: "CELESTE",
    modelCode: "TV-S16-CELESTE",
    variant: "Gold-Framed Marble & Showcase Bookcase",
    pageNumber: "P/16",
    description: "A grand entertainment display featuring an illuminated marble center panel encased in slim gold metal framing, with surrounding showcase shelving.",
    highlights: [
      "Backlit dark marble backdrop panel",
      "Slim gold brass metal frame accents",
      "Integrated open display vitrines",
      "Push-to-open lower base cabinetry",
      "Statement luxury living centerpiece"
    ],
    tagline: "Grand • Opulent • Curated",
    image: "/assets/catalogues/tv-units/tv-16.jpg"
  },
  {
    number: 17,
    modelName: "AURA",
    modelCode: "TV-S17-AURA",
    variant: "Warm Walnut Paneling & Canopy Downlights",
    pageNumber: "P/17",
    description: "A warm contemporary media center crafted with horizontal walnut wall cladding, overhead display canopy with downlights, and practical open-shelf console storage.",
    highlights: [
      "Horizontal walnut wall cladding panels",
      "Overhead canopy with integrated downlights",
      "Dedicated AV component audio slots",
      "Floating tiered wooden media console",
      "Inviting residential living room feel"
    ],
    tagline: "Warm • Practical • Balanced",
    image: "/assets/catalogues/tv-units/tv-17.jpg"
  },
  {
    number: 18,
    modelName: "NOIR",
    modelCode: "TV-S18-NOIR",
    variant: "Matte Black Alcoves & Linear Fire Hearth",
    pageNumber: "P/18",
    description: "A bold architectural TV unit featuring asymmetrical matte black display alcoves, integrated downlighting, and a built-in linear electric fire hearth.",
    highlights: [
      "Matte black architectural frame",
      "Asymmetric open display alcoves",
      "Integrated linear electric flame hearth",
      "Concealed base drawer storage modules",
      "Contemporary edgy interior appeal"
    ],
    tagline: "Bold • Sculpted • Modern",
    image: "/assets/catalogues/tv-units/tv-18.jpg"
  },
  {
    number: 19,
    modelName: "VALKYRIE",
    modelCode: "TV-S19-VALKYRIE",
    variant: "Dark Quartzite & Glowing Timber Niche",
    pageNumber: "P/19",
    description: "An elegant combination of a honed dark quartzite slab, vertical timber slat alcove with warm lighting, and a cantilevered floating console.",
    highlights: [
      "Honed dark quartzite stone slab",
      "Warm timber slat niche lighting",
      "Cantilevered floating credenza plinth",
      "Flush architectural wall transitions",
      "Refined high-end residential ambiance"
    ],
    tagline: "Refined • Serene • Textured",
    image: "/assets/catalogues/tv-units/tv-19.jpg"
  },
  {
    number: 20,
    modelName: "LINEA",
    modelCode: "TV-S20-LINEA",
    variant: "Vertical Oak Battens & Walnut Credenza",
    pageNumber: "P/20",
    description: "A clean modern living room focal point featuring wide vertical oak slats, an extra-long floating walnut console, and concealed overhead track illumination.",
    highlights: [
      "Wide vertical oak battens and paneling",
      "Extra-long floating walnut console",
      "Push-to-open seamless storage drawers",
      "Overhead directional track lighting",
      "Warm contemporary neutral balance"
    ],
    tagline: "Clean • Linear • Balanced",
    image: "/assets/catalogues/tv-units/tv-20.jpg"
  },
  {
    number: 21,
    modelName: "ELEVATE",
    modelCode: "TV-S21-ELEVATE",
    variant: "Fluted Ivory & Illuminated Vitrine",
    pageNumber: "P/21",
    description: "A sophisticated media wall design blending ivory fluted paneling, gold accent reveals, an illuminated glass display vitrine, and a matching base unit.",
    highlights: [
      "Ivory fluted architectural wall panels",
      "Integrated glass vitrine cabinet with LEDs",
      "Gold accent metallic reveal lines",
      "Low-profile floating drawer console",
      "Light and airy luxury aesthetics"
    ],
    tagline: "Luminous • Chic • Refined",
    image: "/assets/catalogues/tv-units/tv-21.jpg"
  },
  {
    number: 22,
    modelName: "TITAN",
    modelCode: "TV-S22-TITAN",
    variant: "Charcoal Fluted Wall & Floating Vitrine",
    pageNumber: "P/22",
    description: "An architectural dark grey media wall composed of full-height vertical acoustic louvres, a floating base with amber underglow, and an integrated side shelving tower.",
    highlights: [
      "Dark grey vertical acoustic louvres",
      "Amber under-console floor illumination",
      "Integrated side shelving display tower",
      "Cantilevered low floating media bench",
      "Metropolitan architectural vibe"
    ],
    tagline: "Metropolitan • Sleek • Architectural",
    image: "/assets/catalogues/tv-units/tv-22.jpg"
  },
  {
    number: 23,
    modelName: "CALIBER",
    modelCode: "TV-S23-CALIBER",
    variant: "Natural Oak Slats & Charcoal Cabinetry",
    pageNumber: "P/23",
    description: "A dynamic media composition uniting vertical oak battens, integrated display shelves with LED lighting, charcoal storage cabinets, and a linear fireplace.",
    highlights: [
      "Natural oak vertical slat battens",
      "Illuminated open display shelving",
      "Matte charcoal storage cabinetry",
      "Built-in linear modern fireplace",
      "Warm textured organic contrast"
    ],
    tagline: "Warm • Dynamic • Cozy",
    image: "/assets/catalogues/tv-units/tv-23.jpg"
  },
  {
    number: 24,
    modelName: "MODENA",
    modelCode: "TV-S24-MODENA",
    variant: "Fluted Timber, Glass Cabinet & Lowline Bench",
    pageNumber: "P/24",
    description: "An expansive entertainment wall incorporating vertical timber slats, a glowing display shelf, a fluted glass vitrine, and an extended matte grey console.",
    highlights: [
      "Vertical timber accent acoustic slats",
      "Integrated top LED display shelf",
      "Fluted glass display vitrine with light",
      "Lowline matte grey drawer console",
      "Complete multi-functional wall system"
    ],
    tagline: "Comprehensive • Modern • Functional",
    image: "/assets/catalogues/tv-units/tv-24.jpg"
  },
  {
    number: 25,
    modelName: "IMPERIAL",
    modelCode: "TV-S25-IMPERIAL",
    variant: "Glossy Gold Marble & Ambient Canopy",
    pageNumber: "P/25",
    description: "An eye-catching media wall showcasing high-gloss black marble with prominent golden veining, framed by soft ambient overhead illumination.",
    highlights: [
      "Black and gold veined marble slab",
      "Overhead ambient cove light canopy",
      "Floating low dark storage console",
      "High-gloss reflective stone finish",
      "Luxury living entertainment focus"
    ],
    tagline: "Glamorous • Opulent • Gloss",
    image: "/assets/catalogues/tv-units/tv-25.jpg"
  },
  {
    number: 26,
    modelName: "ZENITH",
    modelCode: "TV-S26-ZENITH",
    variant: "Grey Marble & Fluted Timber Siding",
    pageNumber: "P/26",
    description: "A balanced contemporary TV wall featuring an illuminated grey stone center panel paired harmoniously with vertical wood slat siding and a dark floating base.",
    highlights: [
      "Grey honed stone feature panel",
      "Vertical timber slat siding accents",
      "Ambient top LED cove illumination",
      "Low-profile floating drawer base",
      "Harmonious balanced materiality"
    ],
    tagline: "Balanced • Elegant • Modern",
    image: "/assets/catalogues/tv-units/tv-26.jpg"
  },
  {
    number: 27,
    modelName: "ARCADIA",
    modelCode: "TV-S27-ARCADIA",
    variant: "Charcoal Millwork & Warm Wood Shelves",
    pageNumber: "P/27",
    description: "A bespoke floor-to-ceiling entertainment wall built with matte charcoal joinery, warm wood display shelves, and integrated warm downlights.",
    highlights: [
      "Floor-to-ceiling custom charcoal joinery",
      "Warm wood open display shelving",
      "Recessed LED strip and niche lights",
      "Deep closed lower storage drawers",
      "Impressive architectural scale"
    ],
    tagline: "Architectural • Deep • Curated",
    image: "/assets/catalogues/tv-units/tv-27.jpg"
  },
  {
    number: 28,
    modelName: "MATRIX",
    modelCode: "TV-S28-MATRIX",
    variant: "Sculptural Wood Wave & Floating Bench",
    pageNumber: "P/28",
    description: "A bespoke statement design displaying undulating parametric wood wave cladding, dynamic perimeter illumination, and a warm floating console.",
    highlights: [
      "Parametric curved wood wave panels",
      "Dynamic perimeter LED illumination",
      "Floating timber storage console",
      "Natural grain rich wood warmth",
      "Distinctive artistic focal point"
    ],
    tagline: "Sculptural • Fluid • Artistic",
    image: "/assets/catalogues/tv-units/tv-28.jpg"
  },
  {
    number: 29,
    modelName: "TESSERA",
    modelCode: "TV-S29-TESSERA",
    variant: "Bronze Joinery & Amber Glow Niches",
    pageNumber: "P/29",
    description: "An immersive entertainment suite defined by dark charcoal cabinetry, warm amber backlit display recesses, and sleek horizontal drawer lines.",
    highlights: [
      "Dark charcoal custom joinery wall",
      "Glowing amber backlit display niches",
      "Horizontal seamless drawer modules",
      "Integrated audio-video cabling system",
      "Cozy immersive mood lighting"
    ],
    tagline: "Immersive • Moody • Modern",
    image: "/assets/catalogues/tv-units/tv-29.jpg"
  },
  {
    number: 30,
    modelName: "EQUINOX",
    modelCode: "TV-S30-EQUINOX",
    variant: "Walnut Slats & Floating Media Shelf",
    pageNumber: "P/30",
    description: "A clean residential media wall featuring rhythmic vertical walnut slats, a cantilevered floating media shelf, and concealed ambient downlighting.",
    highlights: [
      "Rhythmic vertical walnut slats",
      "Cantilevered media shelf and console",
      "Flush architectural wall integration",
      "Concealed cable management tracks",
      "Warm natural grain timber finish"
    ],
    tagline: "Linear • Warm • Minimal",
    image: "/assets/catalogues/tv-units/tv-30.jpg"
  },
  {
    number: 31,
    modelName: "VERVE",
    modelCode: "TV-S31-VERVE",
    variant: "Minimalist Timber Slats & Open Display",
    pageNumber: "P/31",
    description: "A modern media wall composition pairing a dark slatted wood backboard with an elongated charcoal floating bench and open architectural display shelves.",
    highlights: [
      "Dark vertical slatted wood backdrop",
      "Elongated floating charcoal bench",
      "Open vertical display shelf ladders",
      "Clean minimalist geometric lines",
      "Sophisticated restrained color palette"
    ],
    tagline: "Minimal • Graphic • Crisp",
    image: "/assets/catalogues/tv-units/tv-31.jpg"
  },
  {
    number: 32,
    modelName: "URBAN",
    modelCode: "TV-S32-URBAN",
    variant: "Textured Stone Panel & Slat Cabinetry",
    pageNumber: "P/32",
    description: "A sophisticated urban media wall combining a central textured stone panel, sleek grey slatted cabinetry, and illuminated open oak display shelves.",
    highlights: [
      "Textured stone central feature panel",
      "Slatted grey base cabinetry modules",
      "Illuminated open oak display shelves",
      "Concealed multi-tier storage design",
      "Urban contemporary luxury style"
    ],
    tagline: "Industrial • Tailored • Sleek",
    image: "/assets/catalogues/tv-units/tv-32.jpg"
  },
  {
    number: 33,
    modelName: "ORIGAMI",
    modelCode: "TV-S33-ORIGAMI",
    variant: "Geometric Faceted Wood & Angled Credenza",
    pageNumber: "P/33",
    description: "A breathtaking geometric TV wall composed of faceted three-dimensional walnut panels with integrated accent lighting and an angled floating credenza.",
    highlights: [
      "3D faceted geometric wood panels",
      "Angled floating credenza base",
      "Integrated accent perimeter lighting",
      "Bespoke joinery craftsmanship",
      "Futuristic organic design expression"
    ],
    tagline: "Geometric • Avant-Garde • Bold",
    image: "/assets/catalogues/tv-units/tv-33.jpg"
  },
  {
    number: 34,
    modelName: "BOTANIC",
    modelCode: "TV-S34-BOTANIC",
    variant: "Forest Green Cabinetry & Oak Louvres",
    pageNumber: "P/34",
    description: "A distinctive entertainment wall blending soothing forest green cabinetry with a central oak slat acoustic panel and twin illuminated bookcases.",
    highlights: [
      "Forest green bespoke cabinetry",
      "Central vertical oak slat acoustic wall",
      "Symmetrical illuminated side bookcases",
      "Integrated flush wall audio speakers",
      "Calming organic residential palette"
    ],
    tagline: "Organic • Calming • Harmonious",
    image: "/assets/catalogues/tv-units/tv-34.jpg"
  },
  {
    number: 35,
    modelName: "PALLADIO",
    modelCode: "TV-S35-PALLADIO",
    variant: "Arched Architectural Mouldings & Cove Glow",
    pageNumber: "P/35",
    description: "An airy classical-modern TV wall showcasing elegant arched wall mouldings, soft perimeter cove illumination, and a seamless floating white plinth.",
    highlights: [
      "Classical arched wall moulding profiles",
      "Integrated arched cove LED glow",
      "Seamless floating white console plinth",
      "Twin decorative wall sconce lights",
      "Serene timeless neoclassical elegance"
    ],
    tagline: "Classical • Serene • Luminous",
    image: "/assets/catalogues/tv-units/tv-35.jpg"
  },
  {
    number: 36,
    modelName: "NOVO",
    modelCode: "TV-S36-NOVO",
    variant: "Vertical Oak Battens & Display Vitrines",
    pageNumber: "P/36",
    description: "An expansive media wall highlighting rhythmic oak acoustic louvres, integrated glass vitrines with warm lighting, and an extended floating console.",
    highlights: [
      "Rhythmic oak vertical acoustic louvres",
      "Twin illuminated glass display vitrines",
      "Extended floating low console base",
      "Recessed ceiling spotlight grid",
      "Grand luxury living room presence"
    ],
    tagline: "Grand • Textured • Luxurious",
    image: "/assets/catalogues/tv-units/tv-36.jpg"
  },
  {
    number: 37,
    modelName: "SAGE",
    modelCode: "TV-S37-SAGE",
    variant: "Sage Green Millwork & Open Shelving",
    pageNumber: "P/37",
    description: "A charming residential media unit featuring soft sage green cabinetry, upper display shelving, and shaker-style lower storage compartments.",
    highlights: [
      "Soft sage green satin lacquer finish",
      "Upper open book and display shelves",
      "Shaker-style base storage cabinetry",
      "Classic warm transitional charm",
      "Cozy family living room centerpiece"
    ],
    tagline: "Charming • Soft • Timeless",
    image: "/assets/catalogues/tv-units/tv-37.jpg"
  },
  {
    number: 38,
    modelName: "HERITAGE",
    modelCode: "TV-S38-HERITAGE",
    variant: "Picture-Frame Wood Paneling & Traditional Credenza",
    pageNumber: "P/38",
    description: "A regal heritage TV setting defined by classic picture-frame wood boiserie paneling, ornate wall sconces, and a handsome timber credenza.",
    highlights: [
      "Classic picture-frame boiserie wood wall",
      "Traditional timber credenza cabinetry",
      "Dual classic brass wall sconces",
      "Rich dark walnut stain finish",
      "Aristocratic heritage living appeal"
    ],
    tagline: "Regal • Heritage • Traditional",
    image: "/assets/catalogues/tv-units/tv-38.jpg"
  },
  {
    number: 39,
    modelName: "CANYON",
    modelCode: "TV-S39-CANYON",
    variant: "Ledge Stone Texture & Recessed Halo",
    pageNumber: "P/39",
    description: "A dramatic media feature wall utilizing rough-hewn stone texture, glowing ambient light channels, and a minimalist floating media console.",
    highlights: [
      "Rough-hewn stone texture feature panels",
      "Recessed vertical ambient light channels",
      "Minimal floating media console drawer",
      "High-impact warm LED backlighting",
      "Tactile natural stone drama"
    ],
    tagline: "Textured • Dramatic • Glowing",
    image: "/assets/catalogues/tv-units/tv-39.jpg"
  },
  {
    number: 40,
    modelName: "BASALT",
    modelCode: "TV-S40-BASALT",
    variant: "Charcoal Ledge Stone & Fluted Oak",
    pageNumber: "P/40",
    description: "A striking media wall combining a central dark split-face stone field, vertical oak acoustic panels, and an elongated floating timber drawer bench.",
    highlights: [
      "Split-face dark stone central field",
      "Flanking warm oak acoustic slat panels",
      "Elongated floating timber drawer bench",
      "Soft perimeter LED cove illumination",
      "Contemporary modern lodge aesthetic"
    ],
    tagline: "Striking • Earthy • Modern",
    image: "/assets/catalogues/tv-units/tv-40.jpg"
  },
  {
    number: 41,
    modelName: "SAHARA",
    modelCode: "TV-S41-SAHARA",
    variant: "Textured Limestone & Linear Fire Ribbon",
    pageNumber: "P/41",
    description: "A serene media wall centered around a textured stone backdrop with dual illuminated side alcoves, a floating cream bench, and a linear fire feature.",
    highlights: [
      "Textured limestone central feature wall",
      "Twin illuminated vertical side alcoves",
      "Built-in linear fire ribbon feature",
      "Floating low console storage bench",
      "Serene warm neutral earth tones"
    ],
    tagline: "Serene • Neutral • Luminous",
    image: "/assets/catalogues/tv-units/tv-41.jpg"
  },
  {
    number: 42,
    modelName: "ARTISAN",
    modelCode: "TV-S42-ARTISAN",
    variant: "Carved Timber Relief & Fluted Backing",
    pageNumber: "P/42",
    description: "A handcrafted media wall boasting carved floral wood relief work, vertical timber paneling, and an expansive matching floating drawer unit.",
    highlights: [
      "Hand-carved floral wood relief panel",
      "Vertical timber slat background paneling",
      "Multi-compartment floating console unit",
      "Warm natural teak wood grain",
      "Bespoke artisan craft and detailing"
    ],
    tagline: "Handcrafted • Warm • Distinctive",
    image: "/assets/catalogues/tv-units/tv-42.jpg"
  },
  {
    number: 43,
    modelName: "CALACATTA",
    modelCode: "TV-S43-CALACATTA",
    variant: "Veined Calacatta Marble & Fluted Grey Trim",
    pageNumber: "P/43",
    description: "A refined media composition pairing a large-format white veined marble backdrop with vertical fluted grey siding, open display cubbies, and a floating walnut base.",
    highlights: [
      "Large-format white veined marble slab",
      "Vertical fluted grey side trim panels",
      "Open vertical display cubbies with light",
      "Floating walnut media console base",
      "Crisp light modern luxury character"
    ],
    tagline: "Crisp • Light • Sophisticated",
    image: "/assets/catalogues/tv-units/tv-43.jpg"
  },
  {
    number: 44,
    modelName: "WALDORF",
    modelCode: "TV-S44-WALDORF",
    variant: "Floor-to-Ceiling Walnut & Recessed Media Niche",
    pageNumber: "P/44",
    description: "An architectural media wall clad entirely in warm walnut veneers with an integrated TV niche, soft perimeter top lighting, and seamless lower cabinetry.",
    highlights: [
      "Full-height walnut veneer architectural cladding",
      "Deep recessed flush media niche",
      "Soft ceiling perimeter cove wash",
      "Seamless push-latch storage drawers",
      "Monolithic warm architectural purity"
    ],
    tagline: "Monolithic • Warm • Seamless",
    image: "/assets/catalogues/tv-units/tv-44.jpg"
  },
  {
    number: 45,
    modelName: "DUO",
    modelCode: "TV-S45-DUO",
    variant: "Matte Graphite & Honey Oak Framing",
    pageNumber: "P/45",
    description: "A contemporary two-tone entertainment unit featuring a matte graphite wall panel, honey oak display frame with lighting, and floating drawers.",
    highlights: [
      "Two-tone matte graphite and honey oak",
      "Integrated perimeter lighting framework",
      "Asymmetrical open display cubbies",
      "Floating low storage drawer modules",
      "Graphic contemporary living aesthetic"
    ],
    tagline: "Dynamic • Graphic • Modern",
    image: "/assets/catalogues/tv-units/tv-45.jpg"
  },
  {
    number: 46,
    modelName: "RADIANCE",
    modelCode: "TV-S46-RADIANCE",
    variant: "Timber Batten Grid & Warm Halo Glow",
    pageNumber: "P/46",
    description: "A warm residential media center defined by vertical timber battens, illuminated symmetrical display alcoves, and a floating lower console.",
    highlights: [
      "Vertical timber batten grid backdrop",
      "Warm perimeter LED halo backlighting",
      "Symmetrical framed display alcoves",
      "Full-width floating lower console",
      "Inviting balanced residential ambiance"
    ],
    tagline: "Symmetrical • Ambient • Inviting",
    image: "/assets/catalogues/tv-units/tv-46.jpg"
  },
  {
    number: 47,
    modelName: "HORIZON",
    modelCode: "TV-S47-HORIZON",
    variant: "Parametric Wood Canopy & Textured Stone",
    pageNumber: "P/47",
    description: "A breathtaking architectural feature wall showcasing an organic flowing timber canopy, textured stone backdrop, and a tiered floating credenza.",
    highlights: [
      "Flowing parametric timber wave canopy",
      "Textured natural stone background",
      "Tiered floating console drawer bench",
      "Multi-level integrated ambient lights",
      "Masterpiece interior craft and luxury"
    ],
    tagline: "Dramatic • Organic • Masterpiece",
    image: "/assets/catalogues/tv-units/tv-47.jpg"
  },
  {
    number: 48,
    modelName: "METROPOLITAN",
    modelCode: "TV-S48-METROPOLITAN",
    variant: "Black Shaker Library & Fluted Oak Center",
    pageNumber: "P/48",
    description: "A stately entertainment center marrying classic black shaker cabinetry and glass vitrines with a central fluted oak TV niche and lower audio credenza.",
    highlights: [
      "Black shaker architectural millwork",
      "Central fluted oak TV accent niche",
      "Glass door illuminated display vitrines",
      "Integrated overhead display downlights",
      "Stately transitional timeless elegance"
    ],
    tagline: "Stately • Transitional • Timeless",
    image: "/assets/catalogues/tv-units/tv-48.jpg"
  }
];

export const defaultTVUnitModel: TVUnitModel = tvUnitLuxuryData[0];
