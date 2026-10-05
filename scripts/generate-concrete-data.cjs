const fs = require('fs');

const models = [
  {
    number: 1,
    modelName: 'VETRO',
    modelCode: 'CU-S1-VETRO',
    variant: 'Glass-Fronted Tall Vitrine',
    pageNumber: 'P/01',
    description: 'An elegant transitional tall crockery showcase featuring quad-panel mullioned glass doors in an architectural warm grey lacquer finish. Outfitted with bespoke black ironmongery and integrated display shelving.',
    highlights: [
      'Quad-door architectural glass vitrine with dark slender mullions',
      'Dual deep lower utility drawers for fine cutlery and silverware linen',
      'Integrated warm warm-white internal illumination across all tiers',
      'Matte graphite transitional door pulls and matching hinges',
      'Hardwood carcass structure finished in durable anti-scratch lacquer'
    ],
    tagline: 'Architectural • Refined • Contemporary',
    image: '/assets/catalogues/concrete-unit/concrete-01.jpg'
  },
  {
    number: 2,
    modelName: 'AURA',
    modelCode: 'CU-S2-AURA',
    variant: 'Backlit Ambient Vitrine',
    pageNumber: 'P/02',
    description: 'A striking statement dining sideboard and showcase combining smoked bronze glass fronts with continuous LED ambient perimeter glow. Features ribbed base cabinetry and recessed horizontal handles.',
    highlights: [
      'Edge-to-edge smoked bronze glass doors with ultra-slim aluminium profiles',
      'Continuous warm 3000K recessed LED ribbon lighting behind each shelf',
      'Fluted charcoal base cabinetry with ample concealed dining storage',
      'Floating wall-aligned silhouette maximizing dining room spatial perception',
      'Toughened shatterproof glass shelves rated for luxury crystalware'
    ],
    tagline: 'Luminous • Sleek • Statement',
    image: '/assets/catalogues/concrete-unit/concrete-02.jpg'
  },
  {
    number: 3,
    modelName: 'NOIR',
    modelCode: 'CU-S3-NOIR',
    variant: 'Classic Arched China Hutch',
    pageNumber: 'P/03',
    description: 'A stately timber display hutch crafted in rich American walnut with cathedral arched glass upper doors. Lower section features a solid five-drawer buffet chest with brushed antique hardware.',
    highlights: [
      'Graceful architectural cathedral arch mullions on upper glass display doors',
      'Five-tier spacious interior shelving for dinner sets and tea services',
      'Solid timber buffet base with 5 dovetail-joint utility drawers',
      'Warm internal halogen-tone downlighters highlighting porcelain collections',
      'Hand-waxed walnut finish with authentic moisture-resistant sealing'
    ],
    tagline: 'Timeless • Stately • Heritage',
    image: '/assets/catalogues/concrete-unit/concrete-03.jpg'
  },
  {
    number: 4,
    modelName: 'PRISM',
    modelCode: 'CU-S4-PRISM',
    variant: 'Industrial Glass Showcase',
    pageNumber: 'P/04',
    description: 'An urban industrial display vitrine pairing black powder-coated steel framework with fluted and clear glass infills. Ideal for modern lofts, contemporary penthouses, and dining lounges.',
    highlights: [
      'Matte black electrostatically powder-coated steel frame and legs',
      'Full-perimeter tempered glass panels offering unobstructed 180° viewing',
      'Slender tubular handle bars with precision magnetic door latches',
      'Dual top-mounted articulation directional spot luminaires',
      'Raised open base frame creating an airy, weightless aesthetic'
    ],
    tagline: 'Urban • Minimalist • Industrial',
    image: '/assets/catalogues/concrete-unit/concrete-04.jpg'
  },
  {
    number: 5,
    modelName: 'MERIDIAN',
    modelCode: 'CU-S5-MERIDIAN',
    variant: 'Natural Oak Dining Hutch',
    pageNumber: 'P/05',
    description: 'A Scandinavian-inspired two-piece crockery hutch rendered in warm natural white oak. Upper glass showcase beautifully displays tableware while the lower twin-door credenza handles heavy serving dishes.',
    highlights: [
      'Premium white oak veneer with clear matte protective polyurethane finish',
      'Twin oversized glass doors with minimal mullion framing',
      'Adjustable shelf pins with brass sleeve grommets for flexible staging',
      'Lower two-door storage cupboard with quiet soft-close European hinges',
      'Ergonomic brushed brass pill-shaped door knobs'
    ],
    tagline: 'Nordic • Organic • Functional',
    image: '/assets/catalogues/concrete-unit/concrete-05.jpg'
  },
  {
    number: 6,
    modelName: 'ECLIPSE',
    modelCode: 'CU-S6-ECLIPSE',
    variant: 'Deep Graphite Sideboard Showcase',
    pageNumber: 'P/06',
    description: 'A wide-format dining sideboard unit featuring deep graphite cabinetry, glass vitrine wings, and a central quartz serving station. Designed to anchor upscale formal dining rooms.',
    highlights: [
      'Deep anthracite matte lacquer finish with anti-fingerprint coating',
      'Dual central multi-pane display vitrines flanked by storage piers',
      'Integrated counter depth ideal for festive buffet and hors d’oeuvres service',
      'Concealed ambient back-panel lighting highlighting fine stemware',
      'Heavy-duty tandembox drawers with 40kg dynamic load capacity'
    ],
    tagline: 'Dramatic • Sophisticated • Grand',
    image: '/assets/catalogues/concrete-unit/concrete-06.jpg'
  },
  {
    number: 7,
    modelName: 'KINETIC',
    modelCode: 'CU-S7-KINETIC',
    variant: 'Modern Bar & Crockery Credenza',
    pageNumber: 'P/07',
    description: 'A multi-functional entertainment hutch featuring an open cocktail prep alcove, stemware hanging rails, glass showcase cabinets, and dual-tone monochromatic base storage.',
    highlights: [
      'Central illuminated prep recess with mirror splashback and power points',
      'Under-shelf overhead stemware rack for up to 16 wine and champagne glasses',
      'Smoked glass upper cabinets with vertical LED profile illumination',
      'High-contrast matte black and pure alpine white exterior finish',
      'Lower push-to-open flat-panel storage modules for bar accessories'
    ],
    tagline: 'Versatile • Monochromatic • Social',
    image: '/assets/catalogues/concrete-unit/concrete-07.jpg'
  },
  {
    number: 8,
    modelName: 'LINEA',
    modelCode: 'CU-S8-LINEA',
    variant: 'Fluted Glass Contemporary Buffet',
    pageNumber: 'P/08',
    description: 'A balanced dining room credenza featuring fluted glass upper doors that obscure silhouettes with sophistication, set over wide reeded drawer fronts in soft basalt grey.',
    highlights: [
      'Tactile fluted Moru glass door inserts creating alluring diffused light',
      'Basalt grey architectural satin finish resilient against daily dining spills',
      'Quadruple horizontal soft-close cutlery and linen pull-out drawers',
      'Warm LED warm-light light strips integrated beneath each shelf ledge',
      'Concealed finger-pull design maintaining an uninterrupted linear profile'
    ],
    tagline: 'Textured • Linear • Balanced',
    image: '/assets/catalogues/concrete-unit/concrete-08.jpg'
  },
  {
    number: 9,
    modelName: 'BASTION',
    modelCode: 'CU-S9-BASTION',
    variant: 'Floor-to-Ceiling Wall Vitrine',
    pageNumber: 'P/09',
    description: 'A majestic full-height architectural crockery installation spanning four vertical bays with smoked glass doors and warm illuminated vertical mullions.',
    highlights: [
      'Four-bay full-height custom installation designed to maximize vertical volume',
      'Smoked grey tempered glass doors with ultra-narrow champagne gold frames',
      'Vertical LED strip diffusers recessed into each structural upright',
      'Base plinth integration ensuring seamless alignment with room skirting',
      'Multi-compartment storage accommodating over 100 fine dining place settings'
    ],
    tagline: 'Monumental • Architectural • Prestige',
    image: '/assets/catalogues/concrete-unit/concrete-09.jpg'
  },
  {
    number: 10,
    modelName: 'STERLING',
    modelCode: 'CU-S10-STERLING',
    variant: 'Classic Curio Vitrine',
    pageNumber: 'P/10',
    description: 'A classic standalone double-door curio display in obsidian black, featuring floor-to-cornice clear glazing for complete 360-degree illumination of heirloom crystal and china.',
    highlights: [
      'Obsidian black hardwood exterior with timeless bevelled edge detailing',
      'Full-length clear tempered glass doors with discreet key-lock latch',
      'Four polished thick-edge glass shelves with adjustable vertical spacing',
      'Overhead directional spotlight providing dramatic museum-grade illumination',
      'Compact footprint making it ideal for dining room niches or entryway halls'
    ],
    tagline: 'Curated • Classic • Polished',
    image: '/assets/catalogues/concrete-unit/concrete-10.jpg'
  },
  {
    number: 11,
    modelName: 'LUMEN',
    modelCode: 'CU-S11-LUMEN',
    variant: 'Backlit Architectural Bar & China Unit',
    pageNumber: 'P/11',
    description: 'A symmetrical dining room bar and display centrepiece featuring a central 24-bottle wine lattice grid framed by twin backlit glass showcases and lower buffet drawers.',
    highlights: [
      'Integrated geometric timber wine honeycomb rack holding up to 24 bottles',
      'Twin glass vitrines with warm perimeter backlight diffusers',
      'Deep buffet countertop for serving desserts, decanting, or dining prep',
      'Warm greige woodgrain texture paired with satin bronze hardware',
      'Quiet-motion soft-closing hinges and synchronized undermount drawer runners'
    ],
    tagline: 'Symmetrical • Ambient • Entertaining',
    image: '/assets/catalogues/concrete-unit/concrete-11.jpg'
  },
  {
    number: 12,
    modelName: 'SOLIS',
    modelCode: 'CU-S12-SOLIS',
    variant: 'Arched Niche Luxury Buffet',
    pageNumber: 'P/12',
    description: 'An ultra-luxury bespoke dining wall combining warm off-white lacquer with open arched display alcoves and integrated coffee bar counter with backlit natural stone backing.',
    highlights: [
      'Curved arch niches with indirect crown lighting creating soft ambient halos',
      'Dedicated beverage and espresso station with quartz counter surface',
      'Flanking full-height glass storage towers with precision bronze hardware',
      'Seamless push-to-open lower cabinetry for clutter-free dining storage',
      'Built-in wire management and concealed power hubs for beverage machines'
    ],
    tagline: 'Sculptural • Warm • Bespoke',
    image: '/assets/catalogues/concrete-unit/concrete-12.jpg'
  },
  {
    number: 13,
    modelName: 'TITAN',
    modelCode: 'CU-S13-TITAN',
    variant: 'Full-Height Minimalist Vitrine',
    pageNumber: 'P/13',
    description: 'A dramatic floor-to-ceiling built-in crockery wall with dark smoked glass fronts, contrasting light interior carcass, and touch-to-open concealed drawers.',
    highlights: [
      'Floor-to-ceiling smoked reflective glass fronts reflecting ambient dining light',
      'High-contrast light oak internal carcass ensuring optimal dish visibility',
      'Precision concealed pivot hinges for a flawless frameless appearance',
      'Full-depth lower storage compartments for oversized platters and tureens',
      'Architectural shadow-line perimeter reveal separating unit from drywall'
    ],
    tagline: 'Bold • Seamless • Monolithic',
    image: '/assets/catalogues/concrete-unit/concrete-13.jpg'
  },
  {
    number: 14,
    modelName: 'BLANC',
    modelCode: 'CU-S14-BLANC',
    variant: 'Transitional White Shaker Hutch',
    pageNumber: 'P/14',
    description: 'A crisp modern farmhouse crockery hutch featuring clean white shaker cabinetry, grid-mullion glass display doors, and a natural warm butcher-block timber countertop.',
    highlights: [
      'Crisp alpine white polyurethane finish with subtle bevelled shaker frames',
      'Solid oak edge-glued butcher block counter treated with food-grade oil',
      'Six-pane glass upper showcase providing charming provincial elegance',
      'Dual cutlery drawers paired with double-door base cupboards',
      'Brushed stainless steel cup pulls and matching door knobs'
    ],
    tagline: 'Crisp • Farmhouse • Homely',
    image: '/assets/catalogues/concrete-unit/concrete-14.jpg'
  },
  {
    number: 15,
    modelName: 'ORBIT',
    modelCode: 'CU-S15-ORBIT',
    variant: 'Contemporary Two-Tone Vitrine',
    pageNumber: 'P/15',
    description: 'A contemporary mid-sized dining sideboard showcasing warm biscuit woodgrain paired with silk-white lacquered doors and backlit open display cubbies.',
    highlights: [
      'Harmonious two-tone composition pairing biscuit oak with matte silk white',
      'Open display recess with overhead warm 2700K spot illumination',
      'Upper twin glass cabinets with smoked glass doors and aluminium frames',
      'Floating wall-hung look supported by a recessed structural kickboard',
      'Durable heat- and stain-resistant acrylic worktop surface'
    ],
    tagline: 'Modern • Harmonious • Compact',
    image: '/assets/catalogues/concrete-unit/concrete-15.jpg'
  },
  {
    number: 16,
    modelName: 'PALAZZO',
    modelCode: 'CU-S16-PALAZZO',
    variant: 'Neoclassical Grand Vitrine',
    pageNumber: 'P/16',
    description: 'A majestic grand dining room showcase wall finished in soft dove grey with classical crown cornicing, vertical fluted pilasters, and mirrored back panels.',
    highlights: [
      'Classical architectural crown moulding and decorative fluted side pilasters',
      'Antique mirror back panels reflecting chandelier light and crystal sparkle',
      'Full-length glass doors with polished brass bar handles',
      'Warm integrated LED shelf illumination accentuating fine chinaware',
      'Substantial lower storage credenza with panelled cabinet doors'
    ],
    tagline: 'Grand • Neoclassical • Opulent',
    image: '/assets/catalogues/concrete-unit/concrete-16.jpg'
  },
  {
    number: 17,
    modelName: 'SIERRA',
    modelCode: 'CU-S17-SIERRA',
    variant: 'Dark Espresso Timber Hutch',
    pageNumber: 'P/17',
    description: 'An elegant dark espresso-toned timber hutch featuring glass side panels for multi-angle viewing, open central display, and lower double-door cabinet.',
    highlights: [
      'Glazed side panels providing 270-degree illumination and visibility',
      'Deep espresso stain over solid ash wood highlighting rich organic grain',
      'Central display niche for statement vases and silver serving pieces',
      'Heavy-gauge antique brass ring pulls and classical escutcheon plates',
      'Sturdy mortise-and-tenon jointed structural framework'
    ],
    tagline: 'Warm • Rich • Dimensional',
    image: '/assets/catalogues/concrete-unit/concrete-17.jpg'
  },
  {
    number: 18,
    modelName: 'HARBOR',
    modelCode: 'CU-S18-HARBOR',
    variant: 'Coastal Slate Blue Dresser',
    pageNumber: 'P/18',
    description: 'A charming coastal-inspired kitchen and dining dresser finished in matte slate blue, paired with natural light oak open plate racks and glass display cupboards.',
    highlights: [
      'Refined matte slate blue exterior hue bringing serene color to dining spaces',
      'Open central plate display racks with solid brass retaining rails',
      'Glass-fronted flanking vitrines with adjustable interior timber shelves',
      'Natural white oak service countertop with water-resistant sealer',
      'Deep lower drawers for table linens, napkins, and cutlery trays'
    ],
    tagline: 'Coastal • Serene • Welcoming',
    image: '/assets/catalogues/concrete-unit/concrete-18.jpg'
  },
  {
    number: 19,
    modelName: 'ONYX',
    modelCode: 'CU-S19-ONYX',
    variant: 'Luxury Backlit Bar Showcase',
    pageNumber: 'P/19',
    description: 'An opulent contemporary bar and crockery vitrine with dark smoked glass doors, warm backlit horizontal shelves, and a rich dark timber base credenza.',
    highlights: [
      'Smoked reflective bronze glass with ultra-thin matte black metal frames',
      'Integrated LED light bars beneath each shelf casting a warm, ambient glow',
      'Rich dark oak veneer carcass with seamless 45-degree mitred corners',
      'Floating aesthetic with under-cabinet shadow reveal and concealed supports',
      'Dedicated liquor and stemware zoning with non-slip velvet drawer liners'
    ],
    tagline: 'Dramatic • Luminous • Exclusive',
    image: '/assets/catalogues/concrete-unit/concrete-19.jpg'
  },
  {
    number: 20,
    modelName: 'EMERALD',
    modelCode: 'CU-S20-EMERALD',
    variant: 'Arched British Racing Green Vitrine',
    pageNumber: 'P/20',
    description: 'A magnificent custom architectural installation in deep British racing green with graceful arched glass doors and gleaming satin brass door furniture.',
    highlights: [
      'Statement racing green satin finish delivering unmatched personality',
      'Arched upper glass mullions reminiscent of traditional Victorian orangeries',
      'Solid satin brass long-lever bar handles and decorative surface bolts',
      'Warm LED spotlights highlighting interior collection of glassware',
      'Full wall-height footprint designed to elevate high-ceiling dining rooms'
    ],
    tagline: 'Eclectic • Regal • Distinctive',
    image: '/assets/catalogues/concrete-unit/concrete-20.jpg'
  },
  {
    number: 21,
    modelName: 'IVORY',
    modelCode: 'CU-S21-IVORY',
    variant: 'Provincial French China Armoire',
    pageNumber: 'P/21',
    description: 'A romantic French provincial china armoire finished in antique chalk ivory, featuring subtle distressing, shaped base aprons, and multi-light glazed doors.',
    highlights: [
      'Antique chalk ivory hand-painted finish with delicate aged patina',
      'Multi-pane glazed upper doors revealing 3 tiers of curated dining porcelain',
      'Shaped traditional plinth base with elegant serpentine apron details',
      'Antiqued pewter drop pulls and authentic surface-mounted bolt latches',
      'Lower two-door cupboard providing concealed overflow storage'
    ],
    tagline: 'Provincial • Romantic • Artisanal',
    image: '/assets/catalogues/concrete-unit/concrete-21.jpg'
  },
  {
    number: 22,
    modelName: 'COBALT',
    modelCode: 'CU-S22-COBALT',
    variant: 'Slate Grey Classic Hutch',
    pageNumber: 'P/22',
    description: 'A timeless dining hutch in refined slate grey featuring multi-tier glass upper vitrine, recessed spot illumination, and a six-drawer wide buffet base.',
    highlights: [
      'Multi-compartment upper display vitrine with 6 individually glazed doors',
      'Recessed warm downlighters casting balanced illumination across all shelves',
      'Wide six-drawer lower storage bank with smooth ball-bearing glides',
      'Refined slate grey satin lacquer durable against everyday family dining',
      'Polished chrome cup handles and matching round door knobs'
    ],
    tagline: 'Timeless • Proportional • Functional',
    image: '/assets/catalogues/concrete-unit/concrete-22.jpg'
  },
  {
    number: 23,
    modelName: 'VANGUARD',
    modelCode: 'CU-S23-VANGUARD',
    variant: 'Grand Kitchen & Dining Wall Unit',
    pageNumber: 'P/23',
    description: 'A substantial architectural installation in deep navy blue featuring expansive glass cabinetry, natural wood service top, and comprehensive storage bays.',
    highlights: [
      'Expansive multi-bay layout linking kitchen and dining entertainment zones',
      'Deep navy blue lacquer finish contrasted with warm honey oak worktop',
      'Full-depth lower cabinets engineered for large stockpots and platters',
      'Glass-fronted top showcases with interior lighting for festive dinnerware',
      'Solid brass knurled bar pulls offering tactile luxury with every touch'
    ],
    tagline: 'Expansive • Commanding • Prestigious',
    image: '/assets/catalogues/concrete-unit/concrete-23.jpg'
  },
  {
    number: 24,
    modelName: 'MIDNIGHT',
    modelCode: 'CU-S24-MIDNIGHT',
    variant: 'Traditional Midnight Blue Hutch',
    pageNumber: 'P/24',
    description: 'A traditional dining room Welsh dresser in deep midnight navy with decorative multi-pane glass doors, open display cubbies, and lower drawer storage.',
    highlights: [
      'Deep midnight navy hue providing a dramatic backdrop for white china',
      'Traditional multi-pane glazing bars with authentic bevelled glass inserts',
      'Open mid-level serving ledge ideal for tea sets and decanters',
      'Stout bracket feet and solid frame construction with dovetailed joints',
      'Antiqued brass hardware with matching functional lock and key'
    ],
    tagline: 'Classic • Majestic • Midnight',
    image: '/assets/catalogues/concrete-unit/concrete-24.jpg'
  },
  {
    number: 25,
    modelName: 'MATRIX',
    modelCode: 'CU-S25-MATRIX',
    variant: 'Modern Wall-to-Wall Crockery Credenza',
    pageNumber: 'P/25',
    description: 'An ultra-modern built-in dining media and crockery wall combining seamless white upper cabinets, illuminated glass vitrine towers, and long horizontal buffet.',
    highlights: [
      'Full wall integration pairing vertical glass display towers with buffet counter',
      'Linear LED profile lighting running across the full breadth of the unit',
      'Two-tone alpine white and warm timber aesthetic with zero visible handles',
      'Quartz stone counter surface resistant to hot dishes and wine spills',
      'Soft-close lift-up pneumatic upper doors and touch-latch base drawers'
    ],
    tagline: 'Seamless • Linear • Ultra-Modern',
    image: '/assets/catalogues/concrete-unit/concrete-25.jpg'
  },
  {
    number: 26,
    modelName: 'SILVA',
    modelCode: 'CU-S26-SILVA',
    variant: 'Dove Grey Display Vitrine',
    pageNumber: 'P/26',
    description: 'A serene standalone dining vitrine in dove grey featuring 4-door glass showcase with internal illumination and lower double-door linen cabinet.',
    highlights: [
      'Soothing dove grey palette coordinating effortlessly with modern interiors',
      'Quad-door glass upper display with polished edge interior glass shelves',
      'Discreet integrated micro-LED puck lights for glare-free illumination',
      'Lower enclosed storage ensuring everyday serving clutter remains unseen',
      'Sleek brushed nickel hardware with understated minimalist profiles'
    ],
    tagline: 'Serene • Understated • Refined',
    image: '/assets/catalogues/concrete-unit/concrete-26.jpg'
  },
  {
    number: 27,
    modelName: 'CEDAR',
    modelCode: 'CU-S27-CEDAR',
    variant: 'Warm Walnut Dining Bar Unit',
    pageNumber: 'P/27',
    description: 'A handsome dining and lounge cabinet crafted in natural walnut veneer featuring vertical smoked glass vitrine, open display shelves, and lower drawers.',
    highlights: [
      'Rich straight-grain American walnut veneer with protective satin sheen',
      'Smoked tempered glass front offering a moody, sophisticated reveal',
      'Open display niches optimized for art ceramics and fine glassware',
      'Soft-closing drawer slides with precision ball-bearing engineering',
      'Compact upright profile designed for modern urban apartments'
    ],
    tagline: 'Warm • Urban • Handsome',
    image: '/assets/catalogues/concrete-unit/concrete-27.jpg'
  },
  {
    number: 28,
    modelName: 'PROVENCE',
    modelCode: 'CU-S28-PROVENCE',
    variant: 'Double-Arch French Provincial Armoire',
    pageNumber: 'P/28',
    description: 'A mastercrafted provincial showcase featuring graceful twin arches, delicate floral crest carvings, and full-height glass doors in antique pure white.',
    highlights: [
      'Double-arched upper door frames crowned with hand-carved floral cartouches',
      'Antique white finish with subtle edge rub-through highlighting architectural contours',
      'Full-height glass panels providing maximum light entry for fine porcelain',
      'Decorative antique bronze key escutcheons and functional turn-latch hardware',
      'Generous shelf depths accommodating oversized soup tureens and dinner chargers'
    ],
    tagline: 'Charming • Ornamental • Heritage',
    image: '/assets/catalogues/concrete-unit/concrete-28.jpg'
  },
  {
    number: 29,
    modelName: 'MODENA',
    modelCode: 'CU-S29-MODENA',
    variant: 'Matte Graphite Multi-Zone Hutch',
    pageNumber: 'P/29',
    description: 'A sleek contemporary dining console with matte graphite finish, asymmetric display cubbies, smoked glass showcase, and brushed brass bar pulls.',
    highlights: [
      'Asymmetric shelving arrangement creating dynamic visual rhythm',
      'Smoked glass cabinet door with ultra-thin black aluminium framing',
      'Matte graphite finish resistant to fingerprints and everyday wear',
      'Brushed champagne brass handles providing an upscale warm metallic contrast',
      'Generous storage layout accommodating tableware, glassware, and table linens'
    ],
    tagline: 'Dynamic • Asymmetric • Contemporary',
    image: '/assets/catalogues/concrete-unit/concrete-29.jpg'
  },
  {
    number: 30,
    modelName: 'RUSTIC',
    modelCode: 'CU-S30-RUSTIC',
    variant: 'Warm Amber Backlit Dining Hutch',
    pageNumber: 'P/30',
    description: 'A rich and welcoming dining room display unit featuring dark timber finishes, warm continuous perimeter lighting, and ample base buffet drawers.',
    highlights: [
      'Warm 2700K ambient backlighting making crystal glassware glisten',
      'Textured dark oak carcass with organic woodgrain tactile texture',
      'Smoked glass door panels reducing glare while showcasing fine china',
      'Spacious lower storage credenza with heavy-duty soft-close drawers',
      'Engineered with internal heat-dissipating channels for LED longevity'
    ],
    tagline: 'Atmospheric • Inviting • Rich',
    image: '/assets/catalogues/concrete-unit/concrete-30.jpg'
  },
  {
    number: 31,
    modelName: 'ARIA',
    modelCode: 'CU-S31-ARIA',
    variant: 'Transitional Slender China Cabinet',
    pageNumber: 'P/31',
    description: 'A slender and graceful dining showcase finished in warm alabaster white with clean vertical profiles, multi-tier glass display, and lower storage drawers.',
    highlights: [
      'Slender vertical proportions tailored for dining alcoves and smaller dining zones',
      'Warm alabaster white finish reflecting room light with soft radiance',
      'Quadruple adjustable glass shelves with polished pencil edge finishing',
      'Dual base drawers for silverware cutlery rolls and fine table napery',
      'Polished chrome slender bar pulls for a clean transitional aesthetic'
    ],
    tagline: 'Slender • Luminous • Graceful',
    image: '/assets/catalogues/concrete-unit/concrete-31.jpg'
  },
  {
    number: 32,
    modelName: 'SAGE',
    modelCode: 'CU-S32-SAGE',
    variant: 'Vintage Sage Green Dresser',
    pageNumber: 'P/32',
    description: 'A nostalgic vintage dining dresser finished in heritage sage green, featuring arched glass doors, turned knob hardware, and open plate display recesses.',
    highlights: [
      'Heritage sage green chalk-matte lacquer offering timeless natural charm',
      'Arched glazed doors framing curated displays of vintage china and stoneware',
      'Open mid-tier display area ideal for cookbooks, carafes, and fresh florals',
      'Lower panelled cupboard doors hiding bulky appliances and punch bowls',
      'Handmade wooden door turn-buttons and turned timber knobs'
    ],
    tagline: 'Nostalgic • Earthy • Vintage',
    image: '/assets/catalogues/concrete-unit/concrete-32.jpg'
  },
  {
    number: 33,
    modelName: 'CARBON',
    modelCode: 'CU-S33-CARBON',
    variant: 'Charcoal Black Welsh Dresser',
    pageNumber: 'P/33',
    description: 'A bold statement dresser in deep carbon black, combining glass-fronted upper storage with open display shelving and lower storage cupboards.',
    highlights: [
      'Deep carbon matte finish creating a dramatic focal point in light-filled rooms',
      'Symmetrical multi-door upper glass vitrines with fine timber glazing bars',
      'Spacious middle serving surface accommodating buffet-style dining spreads',
      'Twin lower utility drawers with smooth-glide metal runners',
      'Solid brass antique cup pulls providing striking metallic contrast'
    ],
    tagline: 'Bold • Dramatic • Iconic',
    image: '/assets/catalogues/concrete-unit/concrete-33.jpg'
  },
  {
    number: 34,
    modelName: 'LIGNUM',
    modelCode: 'CU-S34-LIGNUM',
    variant: 'Narrow Teal-Grey Showcase',
    pageNumber: 'P/34',
    description: 'A chic narrow dining vitrine in contemporary teal-grey with tall clear glass doors, internal shelf lighting, and a lower concealed drawer.',
    highlights: [
      'Contemporary teal-grey designer tone bringing understated sophistication',
      'Tall clear glass door offering unobstructed display of crystal stemware',
      'Vertical micro-LED lighting channel recessed into cabinet uprights',
      'Lower concealed drawer with soft-close motion for silver cutlery',
      'Minimalist brushed bronze pull handles matching contemporary décor'
    ],
    tagline: 'Chic • Tailored • Minimalist',
    image: '/assets/catalogues/concrete-unit/concrete-34.jpg'
  },
  {
    number: 35,
    modelName: 'OPUS',
    modelCode: 'CU-S35-OPUS',
    variant: 'Fluted Glass Sliding Vitrine',
    pageNumber: 'P/35',
    description: 'A luxury dining vitrine with sliding fluted glass panels, integrated shelf lighting, and warm natural oak framing that creates gentle shadow textures.',
    highlights: [
      'Smooth-gliding sliding glass doors with reeded texture for visual privacy',
      'Integrated continuous warm LED striplights beneath every shelf level',
      'Precision aluminium top-hung sliding hardware ensuring whisper-quiet glide',
      'Natural blonde oak interior carcass radiating organic warmth',
      'Designed to operate seamlessly in compact dining spaces without door swing'
    ],
    tagline: 'Textured • Fluid • Modern',
    image: '/assets/catalogues/concrete-unit/concrete-35.jpg'
  },
  {
    number: 36,
    modelName: 'VELOX',
    modelCode: 'CU-S36-VELOX',
    variant: 'Modern Charcoal Buffet Hutch',
    pageNumber: 'P/36',
    description: 'A contemporary urban dining hutch in charcoal grey featuring upper glass vitrine, open serving alcove, and a four-drawer buffet base.',
    highlights: [
      'Matte charcoal grey exterior finish with high scratch and water resistance',
      'Upper glass showcase with black anodised aluminium framing',
      'Open serving counter with mirrored back panel enhancing room depth',
      'Four wide cutlery and placemat drawers with integrated soft-close dampening',
      'Concealed recessed LED downlights illuminating the serving station'
    ],
    tagline: 'Urban • Functional • Crisp',
    image: '/assets/catalogues/concrete-unit/concrete-36.jpg'
  },
  {
    number: 37,
    modelName: 'ALTO',
    modelCode: 'CU-S37-ALTO',
    variant: 'Warm White Tall China Cabinet',
    pageNumber: 'P/37',
    description: 'A light-filled tall dining cabinet in warm white with fluted glass upper doors, generous glass shelving, and illuminated display compartments.',
    highlights: [
      'Warm white satin lacquer reflecting daylight and keeping dining spaces airy',
      'Fluted glass upper door panels diffusing lighting and adding depth',
      'Toughened glass shelves with polished edges and solid brass supports',
      'Lower two-door cabinet for larger serving platters and chafing dishes',
      'Brushed satin brass hardware adding warmth and bespoke luxury'
    ],
    tagline: 'Airy • Luminous • Elegant',
    image: '/assets/catalogues/concrete-unit/concrete-37.jpg'
  },
  {
    number: 38,
    modelName: 'LUXOR',
    modelCode: 'CU-S38-LUXOR',
    variant: 'Champagne Gold Luxury Vitrine',
    pageNumber: 'P/38',
    description: 'An ultra-luxurious bespoke display installation featuring champagne gold metal trims, open coffee/cocktail counter, and grid-lit display cubbies.',
    highlights: [
      'Champagne gold brushed metal trims framing every display shelf module',
      'Individual LED halo backlighting behind each curated glassware cubby',
      'Central bar and espresso prep counter with heat-resistant quartz surface',
      'Floating lower credenza base with touch-latch handleless doors',
      'Integrated mirror backings multiplying illumination and spatial grandeur'
    ],
    tagline: 'Prestigious • Radiant • Opulent',
    image: '/assets/catalogues/concrete-unit/concrete-38.jpg'
  },
  {
    number: 39,
    modelName: 'GOTHIC',
    modelCode: 'CU-S39-GOTHIC',
    variant: 'Antique Black Traditional Hutch',
    pageNumber: 'P/39',
    description: 'An antique reproduction Welsh hutch in distressed jet black featuring traditional glazed mullions, open serving recess, and lower panelled storage.',
    highlights: [
      'Distressed antique black finish with authentic hand-rubbed timber edges',
      'Multi-pane glazed upper doors revealing 3 tiers of display storage',
      'Open mid-height buffet counter for dining room staging and decanters',
      'Three top cutlery drawers over double-door lower storage cupboards',
      'Hand-cast iron teardrop pulls and authentic decorative butterfly hinges'
    ],
    tagline: 'Historic • Stately • Artisanal',
    image: '/assets/catalogues/concrete-unit/concrete-39.jpg'
  },
  {
    number: 40,
    modelName: 'VILLA',
    modelCode: 'CU-S40-VILLA',
    variant: 'Grand Countryside Dining Wall',
    pageNumber: 'P/40',
    description: 'A grand architectural dining room installation in warm cream, spanning full wall width with upper glass display cabinets and spacious lower sideboard.',
    highlights: [
      'Expansive built-in wall installation designed to anchor large dining halls',
      'Warm cream lacquer finish with delicate traditional bead-board backing',
      'Multiple glass-fronted vitrines equipped with concealed warm LED spotlights',
      'Extra-wide service counter ideal for festive feasts and family gatherings',
      'Comprehensive lower cabinet storage for full 12-person dinnerware sets'
    ],
    tagline: 'Expansive • Countryside • Welcoming',
    image: '/assets/catalogues/concrete-unit/concrete-40.jpg'
  },
  {
    number: 41,
    modelName: 'TUSCAN',
    modelCode: 'CU-S41-TUSCAN',
    variant: 'Warm Walnut Arched Credenza',
    pageNumber: 'P/41',
    description: 'A Mediterranean-inspired dining credenza in rich Tuscan walnut with arched glass display panels and warm ambient interior spotlighting.',
    highlights: [
      'Rich Tuscan walnut finish displaying dramatic cathedral woodgrain patterns',
      'Softly curved arch glass doors lending classical Mediterranean charm',
      'Dual overhead directional halogen-tone downlights for crystal sparkle',
      'Spacious lower drawers with soft-close slides for silverware and placemats',
      'Brushed antique brass hardware completing the warm organic aesthetic'
    ],
    tagline: 'Mediterranean • Warm • Cathedral',
    image: '/assets/catalogues/concrete-unit/concrete-41.jpg'
  },
  {
    number: 42,
    modelName: 'INDIGO',
    modelCode: 'CU-S42-INDIGO',
    variant: 'Royal Navy Tall Hutch',
    pageNumber: 'P/42',
    description: 'A commanding two-piece dining hutch in royal navy blue featuring glass display upper doors, natural timber countertop, and lower drawer bank.',
    highlights: [
      'Deep royal navy lacquer delivering a bold, tailored design statement',
      'Natural honey-toned timber counter creating an inviting warm contrast',
      'Four-pane glass upper vitrines with adjustable display shelves',
      'Four deep drawers and double lower cupboards for comprehensive dining storage',
      'Satin gold cup handles and matching knurled cabinet knobs'
    ],
    tagline: 'Regal • Tailored • Commanding',
    image: '/assets/catalogues/concrete-unit/concrete-42.jpg'
  },
  {
    number: 43,
    modelName: 'IMPERIAL',
    modelCode: 'CU-S43-IMPERIAL',
    variant: 'Neoclassical White Grand Hutch',
    pageNumber: 'P/43',
    description: 'A neoclassical dining wall unit in antique white with full-height glass cabinetry, classical crown moulding, and lower panelled buffet doors.',
    highlights: [
      'Neoclassical crown cornicing and symmetrical vertical architectural pilasters',
      'Pure antique white finish enhancing room brightness and elegance',
      'Multi-bay glass display vitrine with illuminated interior shelving',
      'Solid timber construction with multi-coat moisture-sealed lacquer',
      'Polished brass hardware with classical reeded details'
    ],
    tagline: 'Palatial • Timeless • Pure',
    image: '/assets/catalogues/concrete-unit/concrete-43.jpg'
  },
  {
    number: 44,
    modelName: 'HORIZON',
    modelCode: 'CU-S44-HORIZON',
    variant: 'Modern Architectural Vitrine Wall',
    pageNumber: 'P/44',
    description: 'A sophisticated modern dining display wall featuring floor-to-ceiling smoked glass doors, backlit natural timber backing, and open prep shelf.',
    highlights: [
      'Floor-to-ceiling smoked glass vitrines with ultra-thin black profiles',
      'Continuous warm back-panel LED illumination casting soft ambient glow',
      'Integrated quartz preparation shelf with concealed power outlets',
      'Seamless push-to-open handleless cabinetry for minimal visual clutter',
      'Heavy-duty tempered glass shelves rated for luxury decanters and crystal'
    ],
    tagline: 'Architectural • Luminous • Contemporary',
    image: '/assets/catalogues/concrete-unit/concrete-44.jpg'
  },
  {
    number: 45,
    modelName: 'CYPRESS',
    modelCode: 'CU-S45-CYPRESS',
    variant: 'Heritage Duck-Egg Blue Vitrine',
    pageNumber: 'P/45',
    description: 'A charming standalone dining vitrine in heritage duck-egg blue with cross-hatch glazing bars, lower drawers, and delicate turned bun feet.',
    highlights: [
      'Heritage duck-egg blue finish infusing dining spaces with vintage elegance',
      'Decorative cross-hatch glazing bars over clear tempered glass panes',
      'Dual bottom utility drawers with dovetail construction and smooth runners',
      'Turned solid wood bun feet providing sturdy and graceful floor elevation',
      'Antiqued pewter knobs with subtle floral backplates'
    ],
    tagline: 'Vintage • Charming • Graceful',
    image: '/assets/catalogues/concrete-unit/concrete-45.jpg'
  },
  {
    number: 46,
    modelName: 'CLASSIC',
    modelCode: 'CU-S46-CLASSIC',
    variant: 'Traditional Cream Country Dresser',
    pageNumber: 'P/46',
    description: 'A traditional country kitchen and dining dresser in warm cream with glazed upper cabinets, central hanging rails, and wooden worktop.',
    highlights: [
      'Traditional tongue-and-groove vertical beaded backboard detailing',
      'Glass-fronted upper cabinets flanking open display shelves and mug pegs',
      'Warm natural butcher-block timber work surface with smooth bevelled edge',
      'Multi-drawer lower bank for cutlery, placemats, and dining accessories',
      'Classic cup pulls and round timber knobs finished in satin nickel'
    ],
    tagline: 'Traditional • Countryside • Homely',
    image: '/assets/catalogues/concrete-unit/concrete-46.jpg'
  },
  {
    number: 47,
    modelName: 'METRO',
    modelCode: 'CU-S47-METRO',
    variant: 'Graphite Slimline Vitrine',
    pageNumber: 'P/47',
    description: 'A sleek modern urban vitrine in dark graphite featuring full-height glass display door, quartz service counter, and lower storage cupboard.',
    highlights: [
      'Slimline footprint ideal for modern apartments and dining hallways',
      'Dark graphite satin lacquer with high resistance to marks and scratches',
      'Upper glass vitrine with overhead spot lighting highlighting tableware',
      'Lower two-door cupboard with soft-close European concealed hinges',
      'Brushed stainless steel vertical bar handles with modern clean lines'
    ],
    tagline: 'Sleek • Urban • Tailored',
    image: '/assets/catalogues/concrete-unit/concrete-47.jpg'
  },
  {
    number: 48,
    modelName: 'MEADOW',
    modelCode: 'CU-S48-MEADOW',
    variant: 'Olive Green Country Hutch',
    pageNumber: 'P/48',
    description: 'A serene country dining hutch in earthy olive green featuring multi-pane glass display doors, open serving surface, and lower drawer bank.',
    highlights: [
      'Earthy olive green lacquer creating a calming connection to nature',
      'Upper display cabinet with multi-light glazed doors and interior lighting',
      'Solid natural wood countertop adding warmth and tactile richness',
      'Lower two-door cabinet and dual cutlery drawers with soft-close mechanisms',
      'Hand-finished wooden door knobs and matching drawer pulls'
    ],
    tagline: 'Earthy • Serene • Organic',
    image: '/assets/catalogues/concrete-unit/concrete-48.jpg'
  },
  {
    number: 49,
    modelName: 'FOREST',
    modelCode: 'CU-S49-FOREST',
    variant: 'Built-In Forest Green Dining Unit',
    pageNumber: 'P/49',
    description: 'A luxurious built-in dining display and bar wall in deep forest green with tall glass vitrine, overhead wine stemware rack, and brass hardware.',
    highlights: [
      'Rich forest green cabinetry providing a stunning backdrop in modern dining rooms',
      'Tall multi-tier glass showcase with warm integrated vertical LED strip lights',
      'Suspended ceiling brass bar rack for hanging wine glasses and barware',
      'Seamless built-in look tailored to the architectural dimensions of the room',
      'Solid satin brass long-bar handles providing an opulent metallic contrast'
    ],
    tagline: 'Luxurious • Deep • Architectural',
    image: '/assets/catalogues/concrete-unit/concrete-49.jpg'
  },
  {
    number: 50,
    modelName: 'MONARCH',
    modelCode: 'CU-S50-MONARCH',
    variant: 'Antique Black Farmhouse Vitrine',
    pageNumber: 'P/50',
    description: 'A commanding farmhouse dining vitrine in antique black with multi-compartment glass display, open wine cubbies, and lower storage drawers.',
    highlights: [
      'Bold antique black satin finish delivering unmatched visual presence',
      'Multi-door glass display showcase with interior spotlight illumination',
      'Open wine bottle storage cubbies and mid-level staging counter',
      'Lower cabinet bank with deep drawers for table linens and dinner sets',
      'Antiqued brass shell cup handles and matching classic door hardware'
    ],
    tagline: 'Commanding • Farmhouse • Timeless',
    image: '/assets/catalogues/concrete-unit/concrete-50.jpg'
  }
];

const tsContent = `// Autogenerated Concrete Unit Luxury Catalogue Data (50 Models)
// Strictly mapped: Image -> Name -> Variant -> Description -> Highlights -> Code
export interface ConcreteUnitModel {
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

export const concreteUnitLuxuryData: ConcreteUnitModel[] = ${JSON.stringify(models, null, 2)};

export default concreteUnitLuxuryData;
`;

fs.writeFileSync('src/data/concreteUnitLuxuryData.ts', tsContent);
console.log('Successfully written src/data/concreteUnitLuxuryData.ts with 50 models!');
