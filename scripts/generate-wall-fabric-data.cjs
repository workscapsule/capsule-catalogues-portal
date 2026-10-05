const fs = require('fs');
const path = require('path');

const models = [
  // 1
  {
    code: 'WFB-01',
    name: 'GRID CUSHION ACOUSTIC WALL',
    category: 'ACOUSTIC PADDED & CHANNEL FLUTED',
    image: 'assets/wall-fabric/wfb-01.jpg',
    desc: 'Floor-to-ceiling square modular upholstered wall panels wrapped in neutral woven bouclé, providing exceptional acoustic dampening for luxury salon lounges.',
    highlights: [
      'High-performance woven bouclé fabric with stain-resistant nanocoat',
      'High-density 40mm acoustic memory foam core absorbing sound flutter',
      'Modular Z-clip rail mounting system allowing easy panel removal',
      'Class 1 fire-retardant commercial acoustic textile rating'
    ],
    tagline: 'Woven Bouclé • Acoustic Cushion • Capsule Company'
  },
  // 2
  {
    code: 'WFB-02',
    name: 'PLUM VELVET GEOMETRIC TILES',
    category: 'GEOMETRIC & CHEVRON PADDED PANELS',
    image: 'assets/wall-fabric/wfb-02.jpg',
    desc: 'Deep plum crushed velvet upholstered square blocks framed with subtle shadow lines, creating an opulent and dramatic master headboard accent wall.',
    highlights: [
      'Heavyweight 450 GSM short-pile crushed Italian velvet',
      'Beveled edge cushion profile casting elegant dimensional shadows',
      'Concealed French cleat structural wall fastening framework',
      'High-resilience foam core maintaining plump shape permanently'
    ],
    tagline: 'Italian Velvet • Beveled Cushion • Capsule Company'
  },
  // 3
  {
    code: 'WFB-03',
    name: 'SLENDER FLUTED VELVET',
    category: 'ACOUSTIC PADDED & CHANNEL FLUTED',
    image: 'assets/wall-fabric/wfb-03.jpg',
    desc: 'Vertical ribbed upholstered channel panels in soft beige chenille, visually elevating room height while providing a tactile headboard backdrop.',
    highlights: [
      'Soft-touch microfiber chenille with subtle matte sheen',
      'Continuous 50mm vertical rounded fluted profile ribs',
      'Integrated acoustic batting reducing room reverberation by 18dB',
      'Precision tongue-and-groove side seam alignment'
    ],
    tagline: 'Fluted Chenille • Vertical Ribs • Capsule Company'
  },
  // 4
  {
    code: 'WFB-04',
    name: 'RAW ORGANIC TEXTURED WEAVE',
    category: 'TEXTURED WOVEN LINEN & BOUCLE',
    image: 'assets/wall-fabric/wfb-04.jpg',
    desc: 'Artisanal coarse-weave textured wall upholstery illuminated with integrated perimeter LED cove lighting, offering earthy Wabi-Sabi serenity.',
    highlights: [
      '100% natural organic flax linen and jute composite weave',
      'Concealed perimeter LED halo channel grazing tactile texture',
      'Moisture-permeable breathable acoustic backing material',
      'Hand-tensioned onto custom lightweight aluminum stretcher frames'
    ],
    tagline: 'Raw Flax Linen • Cove Illumination • Capsule Company'
  },
  // 5
  {
    code: 'WFB-05',
    name: 'HERITAGE DAMASK TEXTILE',
    category: 'CLASSICAL SILK & ARTISANAL MURALS',
    image: 'assets/wall-fabric/wfb-05.jpg',
    desc: 'Classical jacquard damask woven fabric panels paired with architectural lower boiserie wainscoting, evoking timeless Parisian salon elegance.',
    highlights: [
      'Intricate floral jacquard damask weave with fine filament sheen',
      'Framed within classical polyurethane shadow-box moulding profiles',
      'Dust-repellent Scotchgard protective surface treatment',
      'Bespoke residential backdrop for formal drawing rooms'
    ],
    tagline: 'Jacquard Damask • Classical Boiserie • Capsule Company'
  },
  // 6
  {
    code: 'WFB-06',
    name: 'MONUMENTAL SCULPTURAL ROCK WEAVE',
    category: 'SCULPTURAL 3D & WAVE FABRICS',
    image: 'assets/wall-fabric/wfb-06.jpg',
    desc: 'Grand full-height sculpted stone-textured fabric feature wall washed with dramatic warm linear grazing illumination in contemporary living pavilions.',
    highlights: [
      'Continuous sculpted dimensional fabric relief with 50mm topography',
      'Recessed ceiling linear warm 3000K LED wash illumination',
      'Reinforced acoustic substrate absorbing bass frequency reverberation',
      'Seamless monolithic continuous installation with hidden joins'
    ],
    tagline: 'Sculpted Topography • LED Wash • Capsule Company'
  },
  // 7
  {
    code: 'WFB-07',
    name: 'TERRACOTTA COLOR-BLOCK MODULES',
    category: 'GEOMETRIC & CHEVRON PADDED PANELS',
    image: 'assets/wall-fabric/wfb-07.jpg',
    desc: 'Modern asymmetrical color-blocked upholstered blocks uniting warm terracotta, desert sand, and cream fabrics into an architectural wall tapestry.',
    highlights: [
      'Dual-tone warm terracotta and natural beige upholstery fabrics',
      'Asymmetric modular grid casting staggered tactile relief',
      'Individual magnetic clip-on tiles for effortless reconfiguration',
      'Antimicrobial memory foam core maintaining crisp geometric edges'
    ],
    tagline: 'Terracotta Palette • Color Block • Capsule Company'
  },
  // 8
  {
    code: 'WFB-08',
    name: 'BOTANICAL TAPESTRY ACCENT',
    category: 'CLASSICAL SILK & ARTISANAL MURALS',
    image: 'assets/wall-fabric/wfb-08.jpg',
    desc: 'Lush verdant botanical tapestry fabric wall paneling framed by dark fluted timber slats, creating an immersive indoor greenhouse ambiance.',
    highlights: [
      'High-definition jacquard woven panoramic forest foliage motif',
      'Flanked by vertical dark-stained architectural timber louvers',
      'UV-resistant non-fading dyes preserving rich emerald tones',
      'Padded acoustic backing dampening open living space echo'
    ],
    tagline: 'Botanical Tapestry • Timber Louvers • Capsule Company'
  },
  // 9
  {
    code: 'WFB-09',
    name: 'ILLUMINATED FLUID RIBBON WAVE',
    category: 'SCULPTURAL 3D & WAVE FABRICS',
    image: 'assets/wall-fabric/wfb-09.jpg',
    desc: 'Sensuous curved organic wave wall upholstery embedded with concealed perimeter warm halo illumination, sculpted for luxury lounge spaces.',
    highlights: [
      'Sculptural multi-tier contoured wave relief with velvet skin',
      'Integrated continuous warm 2700K indirect perimeter LED channel',
      'Custom CNC-milled structural foam armature with curved returns',
      'Statement centerpiece wall for private screening rooms'
    ],
    tagline: 'Fluid Waves • Halo Illumination • Capsule Company'
  },
  // 10
  {
    code: 'WFB-10',
    name: 'ARCHED BOTANICAL SILK PANELS',
    category: 'CLASSICAL SILK & ARTISANAL MURALS',
    image: 'assets/wall-fabric/wfb-10.jpg',
    desc: 'Classical arched wall panels inset with hand-painted silk effect botanical fabric murals, framed with neoclassical architectural mouldings.',
    highlights: [
      'Fine silk-blend textile with delicate weeping willow illustration',
      'Dual concentric Roman arched moulding surround with gold accents',
      'Soft-sheen surface reflecting subtle ambient chandelier light',
      'Pre-stretched onto moisture-resistant backer boards'
    ],
    tagline: 'Silk Botanical • Neoclassical Arch • Capsule Company'
  },
  // 11
  {
    code: 'WFB-11',
    name: 'GEOMETRIC CUSHION SCONCE WALL',
    category: 'GEOMETRIC & CHEVRON PADDED PANELS',
    image: 'assets/wall-fabric/wfb-11.jpg',
    desc: 'Padded diamond-embossed acoustic fabric wall tiles with warm integrated brass sconces, creating a calm cocoon in contemporary master bedrooms.',
    highlights: [
      'Embossed geometric relief tiles wrapped in pearl beige textile',
      'Pre-routed electrical pass-throughs for seamless brass sconce mounting',
      'Sound absorption coefficient NRC 0.75 for peaceful rest',
      'Commercial-grade Scotchgard stain resistant protection'
    ],
    tagline: 'Embossed Textile • Brass Sconce • Capsule Company'
  },
  // 12
  {
    code: 'WFB-12',
    name: 'GOLDEN LOTUS PETAL RELIEF',
    category: 'SCULPTURAL 3D & WAVE FABRICS',
    image: 'assets/wall-fabric/wfb-12.jpg',
    desc: 'Three-dimensional lotus leaf fabric relief wall accented with delicate brushed brass vein trims and warm ceiling trough illumination.',
    highlights: [
      'Sculptural undulating lotus petal modules wrapped in suede fabric',
      'Electroplated hairline brushed gold dividing vein inserts',
      'Integrated recessed ceiling cove grazing lighting',
      'Showpiece backdrop for grand salon seating areas'
    ],
    tagline: 'Lotus Petals • Brass Veins • Capsule Company'
  },
  // 13
  {
    code: 'WFB-13',
    name: 'SCULPTURAL MONOCHROME WAVE',
    category: 'SCULPTURAL 3D & WAVE FABRICS',
    image: 'assets/wall-fabric/wfb-13.jpg',
    desc: 'Grand fluid wave panels sculpted in ivory bouclé fabric, forming an expansive flowing topography that transforms with directional spotlighting.',
    highlights: [
      'Organic fluid topographical relief with 45mm sculpted depth',
      'Tactile ivory bouclé upholstery with dense loop construction',
      'Rear sub-frame engineering for direct stud wall mounting',
      'Superior acoustic dampening for double-height living salons'
    ],
    tagline: 'Bouclé Waves • Fluid Sculpture • Capsule Company'
  },
  // 14
  {
    code: 'WFB-14',
    name: 'FRENCH BOISERIE SILK MURAL',
    category: 'CLASSICAL SILK & ARTISANAL MURALS',
    image: 'assets/wall-fabric/wfb-14.jpg',
    desc: 'Full-wall Parisian boiserie wall paneling integrating delicate chinoiserie scenic silk murals within symmetrical painted picture-rail mouldings.',
    highlights: [
      'Panoramic chinoiserie landscape painted on fine silk weave',
      'Multi-tier architectural polyurethane wainscoting surround',
      'Anti-glare satin topcoat shielding colors against sun exposure',
      'Classical dining room showpiece radiating heritage charm'
    ],
    tagline: 'Chinoiserie Silk • French Boiserie • Capsule Company'
  },
  // 15
  {
    code: 'WFB-15',
    name: 'CHARCOAL LOUVER & FABRIC FOYER',
    category: 'ARCHITECTURAL GRID & BOISERIE UPHOLSTERY',
    image: 'assets/wall-fabric/wfb-15.jpg',
    desc: 'Contrasting black vertical timber louvers paired with dark acoustic felt door surrounds, lending architectural drama to modern entryway foyers.',
    highlights: [
      'Matte black vertical timber fins with acoustic felt infill',
      'Flush integrated interior door seamlessly aligned with panel face',
      'High-impact durability for heavy-traffic entrance foyers',
      'Concealed magnetic latching and invisible hardware'
    ],
    tagline: 'Matte Charcoal • Hidden Door • Capsule Company'
  },
  // 16
  {
    code: 'WFB-16',
    name: 'NEOCLASSICAL CREAM LINEN BOXES',
    category: 'ARCHITECTURAL GRID & BOISERIE UPHOLSTERY',
    image: 'assets/wall-fabric/wfb-16.jpg',
    desc: 'Symmetrical double-frame wall paneling with hand-stretched warm cream linen insets, framing curated gallery art and sconce lighting.',
    highlights: [
      'Hand-stretched organic Belgian linen fabric inserts',
      'Symmetric neoclassical box mouldings with mitred corners',
      'Neutral warm oyster white palette complementing minimalist art',
      'Acoustic reverberation control in open living salons'
    ],
    tagline: 'Belgian Linen • Symmetrical Boxes • Capsule Company'
  },
  // 17
  {
    code: 'WFB-17',
    name: 'FLUTED CHENILLE SEPARATION WALL',
    category: 'ACOUSTIC PADDED & CHANNEL FLUTED',
    image: 'assets/wall-fabric/wfb-17.jpg',
    desc: 'Architectural vertical fluted fabric partition wall flanked by carved tribal timber screens, separating formal living and reading zones.',
    highlights: [
      'Wide-flute upholstered chenille panels in warm taupe',
      'Flanked by hand-carved solid wood decorative accent panels',
      'Dual-sided acoustic baffling dampening adjacent room chatter',
      'Floor-to-ceiling modular tension assembly with zero visible screws'
    ],
    tagline: 'Fluted Taupe • Carved Timber • Capsule Company'
  },
  // 18
  {
    code: 'WFB-18',
    name: 'CHINOISERIE SILK SLIDING SCREENS',
    category: 'CLASSICAL SILK & ARTISANAL MURALS',
    image: 'assets/wall-fabric/wfb-18.jpg',
    desc: 'Floor-to-ceiling sliding partition panels surfaced in peach silk textile embroidered with delicate blossoming trees and birds.',
    highlights: [
      'Exquisite hand-embroidered chinoiserie blossom & avian motifs',
      'Concealed overhead ceiling track with silent soft-close damper',
      'Translucent fabric backing diffusing soft daylight between rooms',
      'Lightweight rigid honeycomb core resisting warp or flex'
    ],
    tagline: 'Embroidered Silk • Sliding Screens • Capsule Company'
  },
  // 19
  {
    code: 'WFB-19',
    name: '3D INTERLOCKING SCULPTED SUEDE',
    category: 'SCULPTURAL 3D & WAVE FABRICS',
    image: 'assets/wall-fabric/wfb-19.jpg',
    desc: 'Complex geometric interlocking 3D wall modules wrapped in charcoal faux-suede with warm overhead spotlight grazing across sculptural peaks.',
    highlights: [
      'Interlocking geometric puzzle tile layout with dynamic 3D contours',
      'Ultra-matte faux-suede microfiber with rich tactile hand-feel',
      'Directional spotlighting casts dramatic architectural shadows',
      'High sound absorption NRC 0.82 for high-end home theaters'
    ],
    tagline: 'Sculpted Suede • Geometric Puzzle • Capsule Company'
  },
  // 20
  {
    code: 'WFB-20',
    name: 'VELVET CHANNEL BACKLIT HEADBOARD',
    category: 'ACOUSTIC PADDED & CHANNEL FLUTED',
    image: 'assets/wall-fabric/wfb-20.jpg',
    desc: 'Expansive vertical grey velvet channel panels bordered by natural walnut timber flutes and warm integrated ambient LED light strips.',
    highlights: [
      'Plush grey micro-velvet vertical channel upholstered headboard',
      'Flanked by natural quarter-cut American walnut timber louvers',
      'Integrated dual vertical warm 3000K LED light channels',
      'Flush concealed nightstand attachment structural subframe'
    ],
    tagline: 'Grey Velvet • Walnut Louvers • Capsule Company'
  },
  // 21
  {
    code: 'WFB-21',
    name: 'BOTANICAL DAMASK DRAWING ROOM',
    category: 'CLASSICAL SILK & ARTISANAL MURALS',
    image: 'assets/wall-fabric/wfb-21.jpg',
    desc: 'Grand salon wall clad in silvery-grey botanical fabric panels framed with classical wainscot trims, creating a refined European salon backdrop.',
    highlights: [
      'Woven silver-grey textile with intricate botanical floral vines',
      'Full height wall coverage divided by architectural wood trims',
      'Provides subtle thermal insulation and luxurious acoustic calm',
      'Stain-resistant top finish protecting against household dust'
    ],
    tagline: 'Silver Botanical • Classical Trims • Capsule Company'
  },
  // 22
  {
    code: 'WFB-22',
    name: 'EMERALD VELVET FLUTED SANCTUARY',
    category: 'ACOUSTIC PADDED & CHANNEL FLUTED',
    image: 'assets/wall-fabric/wfb-22.jpg',
    desc: 'Dramatic floor-to-ceiling jewel-tone emerald green velvet channel wall panelling, creating an opulent statement wall in luxury master suites.',
    highlights: [
      'Rich jewel-tone emerald green heavyweight architectural velvet',
      'Floor-to-ceiling 75mm wide vertical channel padded flutes',
      'Superior acoustic dampening reducing ambient bedroom noise',
      'Custom cutouts for reading lights and wall sconce mounting'
    ],
    tagline: 'Emerald Velvet • Floor-to-Ceiling • Capsule Company'
  },
  // 23
  {
    code: 'WFB-23',
    name: 'SAGE LINEN GEOMETRIC GRID',
    category: 'ARCHITECTURAL GRID & BOISERIE UPHOLSTERY',
    image: 'assets/wall-fabric/wfb-23.jpg',
    desc: 'Modular square grid panelling wrapped in muted sage green washed linen with natural oak framing, establishing tranquil biophilic warmth.',
    highlights: [
      'Washed organic sage linen with delicate natural weave texture',
      'Natural white oak perimeter divider trim grid',
      'Modular lightweight acoustic composite core panels',
      'Calming biophilic aesthetic ideal for wellness lounges'
    ],
    tagline: 'Sage Linen • Oak Divider Grid • Capsule Company'
  },
  // 24
  {
    code: 'WFB-24',
    name: 'STAGGERED MULTI-TONE BLOCK WALL',
    category: 'GEOMETRIC & CHEVRON PADDED PANELS',
    image: 'assets/wall-fabric/wfb-24.jpg',
    desc: 'Checkerboard composition of alternating grey, oatmeal, and charcoal upholstered blocks with integrated floor and ceiling LED illumination.',
    highlights: [
      'Dynamic three-tone neutral palette: Charcoal, Grey, and Oatmeal',
      'Multi-depth staggered cushion topography casting soft shadows',
      'Integrated top ceiling wash and bottom baseboard LED grazing',
      'High acoustic absorption rating ideal for expansive loft salons'
    ],
    tagline: 'Multi-Tone Blocks • Baseboard Glow • Capsule Company'
  },
  // 25
  {
    code: 'WFB-25',
    name: 'CHEVRON PADDED VELVET SUITE',
    category: 'GEOMETRIC & CHEVRON PADDED PANELS',
    image: 'assets/wall-fabric/wfb-25.jpg',
    desc: 'Architectural chevron patterned upholstered wall clad in champagne velvet, highlighted by concealed warm perimeter lighting channels.',
    highlights: [
      'Angled 45-degree chevron padded modules in champagne velvet',
      'Concealed perimeter LED halo lighting accentuating angles',
      'Factory precision-milled acoustic backing with tight tolerances',
      'Signature luxury master suite focal wall installation'
    ],
    tagline: 'Champagne Velvet • Chevron Geometry • Capsule Company'
  },
  // 26
  {
    code: 'WFB-26',
    name: 'CURVILINEAR NEON WAVE BEDROOM',
    category: 'SCULPTURAL 3D & WAVE FABRICS',
    image: 'assets/wall-fabric/wfb-26.jpg',
    desc: 'Futuristic sculptural upholstered wave wall panelling with embedded organic LED linear light ribbons flowing across contemporary master chambers.',
    highlights: [
      'Curvilinear undulating foam channels wrapped in grey velvet',
      'Integrated flexible silicone LED neon light guides (3000K)',
      'Custom radius bending engineered for sculptural organic fluidity',
      'Statement modern centerpiece wall for penthouse master suites'
    ],
    tagline: 'Neon Wave • Sculptural Velvet • Capsule Company'
  },
  // 27
  {
    code: 'WFB-27',
    name: 'EXECUTIVE WOVEN LINEN WALL',
    category: 'TEXTURED WOVEN LINEN & BOUCLE',
    image: 'assets/wall-fabric/wfb-27.jpg',
    desc: 'Monolithic seamless commercial woven linen wall fabric installed across executive office suites, offering glare-free elegance and acoustic quiet.',
    highlights: [
      'Heavy-duty commercial grade woven linen acoustic wall covering',
      'Type II commercial wallcovering rating resisting daily scuffs',
      'Acoustic NRC 0.65 reducing conversational reverberation',
      'Neutral warm oatmeal tone providing calm visual ergonomics'
    ],
    tagline: 'Executive Linen • Acoustic Quiet • Capsule Company'
  },
  // 28
  {
    code: 'WFB-28',
    name: 'FOREST GREEN FLUTED BEDROOM',
    category: 'ACOUSTIC PADDED & CHANNEL FLUTED',
    image: 'assets/wall-fabric/wfb-28.jpg',
    desc: 'Architectural vertical upholstered channels in deep forest green velvet, integrated with hanging pendant lamps and dark oak accents.',
    highlights: [
      'Rich forest green matte velvet vertical fluting',
      'High-resilience foam padding creating a soft tactile backrest',
      'Flanked by vertical dark-stained architectural timber reveals',
      'Integrated wire raceways for floating bedside pendant fixtures'
    ],
    tagline: 'Forest Green • Fluted Padding • Capsule Company'
  },
  // 29
  {
    code: 'WFB-29',
    name: 'COCOA TUFTED LEATHER BEDROOM',
    category: 'GEOMETRIC & CHEVRON PADDED PANELS',
    image: 'assets/wall-fabric/wfb-29.jpg',
    desc: 'Floor-to-ceiling vertical fluted channels in warm champagne chenille, framed with continuous warm LED ambient cove lighting for serene evenings.',
    highlights: [
      'Vertical fluted channel padding in soft warm champagne chenille',
      'Dual concealed warm vertical LED grazing light troughs',
      'Anti-static and dust-resistant Scotchgard fabric shield',
      'Complete full-height modular installation with seamless joints'
    ],
    tagline: 'Champagne Chenille • Warm Cove • Capsule Company'
  },
  // 30
  {
    code: 'WFB-30',
    name: 'BISCUIT TUFTED LEATHER HEADBOARD',
    category: 'GEOMETRIC & CHEVRON PADDED PANELS',
    image: 'assets/wall-fabric/wfb-30.jpg',
    desc: 'Deep button-tufted biscuit leather upholstered wall panelling in rich cognac brown, delivering masculine mid-century craftsmanship.',
    highlights: [
      'Full-grain Italian aniline leather with hand-pulled button tufting',
      'Deep 50mm biscuit tufting geometry with natural leather creases',
      'High-density acoustic foam core reducing sound flutter',
      'Heirloom craftsmanship for stately residential master suites'
    ],
    tagline: 'Cognac Leather • Biscuit Tufted • Capsule Company'
  },
  // 31
  {
    code: 'WFB-31',
    name: 'BURGUNDY GEOMETRIC VELVET',
    category: 'GEOMETRIC & CHEVRON PADDED PANELS',
    image: 'assets/wall-fabric/wfb-31.jpg',
    desc: 'Deep burgundy velvet square cushion panels with prominent beveled edges, creating a luxurious hotel-suite feature headboard wall.',
    highlights: [
      'Plush burgundy architectural velvet with rich light reflections',
      'Geometric square module array with 35mm beveled edges',
      'Concealed interlocking clip mounting system for rapid assembly',
      'Fire-retardant B1 class interior building certification'
    ],
    tagline: 'Burgundy Velvet • Beveled Blocks • Capsule Company'
  },
  // 32
  {
    code: 'WFB-32',
    name: 'CHOCOLATE SUEDE CHEVRON HEADBOARD',
    category: 'GEOMETRIC & CHEVRON PADDED PANELS',
    image: 'assets/wall-fabric/wfb-32.jpg',
    desc: 'Contemporary chevron-stitched dark chocolate micro-suede panels highlighted by overhead directional pin-spots, radiating masculine luxury.',
    highlights: [
      'Ultra-fine microfiber chocolate suede with water-repellent seal',
      'Geometric chevron angled segment alignment with saddle stitching',
      'Sound absorption NRC 0.70 ensuring acoustic privacy',
      'Modular wall-hung construction with zero visible fasteners'
    ],
    tagline: 'Chocolate Suede • Chevron Stitch • Capsule Company'
  },
  // 33
  {
    code: 'WFB-33',
    name: 'SANDSTONE ANGLED GEOMETRIC',
    category: 'GEOMETRIC & CHEVRON PADDED PANELS',
    image: 'assets/wall-fabric/wfb-33.jpg',
    desc: 'Full-wall geometric tessellation composed of angled triangle and rhombus fabric tiles in neutral sandstone, bathed in natural sunlight.',
    highlights: [
      'Artisanal geometric triangular and rhombic tile tessellation',
      'Neutral textured sandstone woven fabric reflecting natural light',
      'Dynamic shadow variations as sun moves across the bedroom',
      'Multi-ply moisture-resistant substrate ensuring dimensional rigidity'
    ],
    tagline: 'Sandstone Weave • Geometric Tessellation • Capsule Company'
  },
  // 34
  {
    code: 'WFB-34',
    name: 'FLORAL SILK TAPESTRY HEADBOARD',
    category: 'CLASSICAL SILK & ARTISANAL MURALS',
    image: 'assets/wall-fabric/wfb-34.jpg',
    desc: 'Charming vintage botanical floral tapestry fabric panel framed by warm vertical timber flutes and gentle ambient light channels.',
    highlights: [
      'Authentic botanical floral jacquard woven tapestry textile',
      'Warm indirect LED ambient backlighting outlining frame',
      'Flanked by vertical natural oak fluted architectural pilasters',
      'Provides romantic countryside elegance in modern bedrooms'
    ],
    tagline: 'Floral Tapestry • Backlit Oak • Capsule Company'
  },
  // 35
  {
    code: 'WFB-35',
    name: 'MONUMENTAL LINEN CORRIDOR',
    category: 'TEXTURED WOVEN LINEN & BOUCLE',
    image: 'assets/wall-fabric/wfb-35.jpg',
    desc: 'Seamless architectural natural linen wallcovering extending through grand hallways and foyers, illuminated with wall sconces.',
    highlights: [
      'Seamless multi-width architectural linen wall upholstery',
      'Micro-perforated acoustic backing eliminating gallery hall echo',
      'Neutral textured oatmeal hue complementing natural stone floors',
      'Washable protective nanofinish resisting scuffs and hand marks'
    ],
    tagline: 'Architectural Linen • Seamless Hallway • Capsule Company'
  },
  // 36
  {
    code: 'WFB-36',
    name: 'OVERSIZED OATMEAL PADDED BLOCKS',
    category: 'ARCHITECTURAL GRID & BOISERIE UPHOLSTERY',
    image: 'assets/wall-fabric/wfb-36.jpg',
    desc: 'Extra-large rectangular upholstered modules in soft oatmeal bouclé, establishing an expansive and comforting architectural headboard.',
    highlights: [
      'Extra-wide 900x450mm rectangular upholstered cushion modules',
      'Premium textured oatmeal bouclé with soft looped yarns',
      'High-resilience foam core providing firm yet plush back support',
      'Modular wall cleat system enabling individual panel servicing'
    ],
    tagline: 'Oatmeal Bouclé • Oversized Blocks • Capsule Company'
  },
  // 37
  {
    code: 'WFB-37',
    name: 'MINIMALIST GRID WAINSCOT FABRIC',
    category: 'ARCHITECTURAL GRID & BOISERIE UPHOLSTERY',
    image: 'assets/wall-fabric/wfb-37.jpg',
    desc: 'Architectural grey grid wall moulding with upholstered acoustic fabric insets, paired with brass wall sconces and modern sofa seating.',
    highlights: [
      'Contemporary square architectural grid with fabric insets',
      'Finished in rich designer dove grey architectural lacquer',
      'Impact-resistant construction suitable for living salons',
      'Integrated acoustic dampening breaking room sound reverberation'
    ],
    tagline: 'Dove Grey • Architectural Grid • Capsule Company'
  },
  // 38
  {
    code: 'WFB-38',
    name: 'SYMMETRIC GRID ACCENT SALON',
    category: 'ARCHITECTURAL GRID & BOISERIE UPHOLSTERY',
    image: 'assets/wall-fabric/wfb-38.jpg',
    desc: 'Symmetric architectural boiserie grid paneling with acoustic fabric center field, flanked by twin modern brass disc wall sconces.',
    highlights: [
      'Precision symmetrical 40-cell grid division with fabric insets',
      'Flanked by vertical picture-moulding panels with designer sconces',
      'High-density moisture-resistant architectural substrate',
      'Clean contemporary focal point for luxury living room salons'
    ],
    tagline: 'Symmetric Grid • Brass Sconces • Capsule Company'
  }
];

const wallFabricData = {
  catalogueTitle: 'Wall Fabric Design Catalogue 2026',
  company: 'Capsule Company',
  tagline: 'Your Space Maker',
  totalPages: 40,
  totalModels: 38,
  orderedItems: models
};

const outPath = path.join(__dirname, '..', 'public', 'assets', 'wall-fabric', 'wall-fabric-data.json');
fs.writeFileSync(outPath, JSON.stringify(wallFabricData, null, 2), 'utf8');
console.log(`Saved Wall Fabric data to ${outPath} (${models.length} models)`);
