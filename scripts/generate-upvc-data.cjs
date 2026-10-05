const fs = require('fs');
const path = require('path');

const rawModels = [
  {
    fileName: 'upvc-01.jpg',
    title: 'FRENCH GLASS PATIO DOUBLE DOORS',
    category: 'SLIDING & FRENCH PATIO DOORS',
    subtitle: 'Double Glazed • Multi-Point Lock • Capsule Company',
    desc: 'Bespoke double-leaf French patio doors crafted with heavy-duty multi-chamber UPVC profiles and acoustic double glazing. Seamlessly unites interior sunrooms and living areas with exterior gardens and verandas while providing thermal insulation.',
    bullets: [
      'Multi-chamber lead-free tropicalized UPVC profile with steel reinforcement',
      'Dual EPDM weather-seals ensuring zero dust and rainwater infiltration',
      'High-security European multi-point shootbolt locking hardware',
      'Toughened 24mm argon-filled double glazing for acoustic sound reduction'
    ]
  },
  {
    fileName: 'upvc-02.jpg',
    title: 'GOLDEN WALNUT WOOD-FINISH CASEMENT WINDOW',
    category: 'WOOD-GRAIN UPVC WINDOWS',
    subtitle: 'Walnut Laminate • Friction Stays • Capsule Company',
    desc: 'Architectural two-sash casement window featuring authentic hot-melt wood grain lamination in warm walnut tones. Combines the timeless natural warmth of timber with zero-maintenance, rot-free, and termite-proof UPVC durability.',
    bullets: [
      'High-performance German Renolit exterior-grade woodgrain laminate foil',
      'Heavy-duty stainless steel 304 friction stays supporting up to 90° opening',
      'Integrated overlap sash design preventing air leakage under high wind loads',
      'Low thermal conductivity reducing indoor air conditioning energy load'
    ]
  },
  {
    fileName: 'upvc-03.jpg',
    title: 'CONTEMPORARY MATTE BLACK BI-FOLD DOORS',
    category: 'BI-FOLD MULTI-PANEL DOORS',
    subtitle: 'Multi-Slide • Concertina Fold • Capsule Company',
    desc: 'Expansive concertina folding door system designed to fold completely flat against boundary walls, creating a seamless 90% clear aperture. Finished in sleek architectural matte black to complement modern open-concept residences.',
    bullets: [
      'Smooth-gliding bottom-hung stainless steel roller carriage with nylon wheels',
      'Concealed multi-point panic and security locking bolts on all sashes',
      'Flush threshold track option for barrier-free indoor-to-outdoor transitions',
      'Weather-resistant thermal break design preventing condensation buildup'
    ]
  },
  {
    fileName: 'upvc-04.jpg',
    title: 'SAGE GREEN ARCHITECTURAL FRENCH DOORS',
    category: 'FRENCH & GEORGIAN ENTRANCES',
    subtitle: 'Sage Tone • Dual Leaf • Capsule Company',
    desc: 'Sophisticated twin-leaf entrance doors finished in custom sage green exterior foils with classical molding profiles. Ideal for Mediterranean, colonial, and countryside villa porticos and garden terraces.',
    bullets: [
      'UV-stabilized colored profile resistant to tropical sun discoloration',
      'Heavy-duty 3D adjustable flag hinges engineered for lifelong sag-free swing',
      'Perimeter co-extruded acoustic compression gaskets for sound buffering',
      'Compatible with brass and antique bronze architectural door pull handles'
    ]
  },
  {
    fileName: 'upvc-05.jpg',
    title: 'MINIMALIST SLIDING PATIO GLASS SYSTEM',
    category: 'SLIDING & FRENCH PATIO DOORS',
    subtitle: 'Slim Interlock • Panoramic Glass • Capsule Company',
    desc: 'Ultra-slim interlock sliding glass door system engineered for unobstructed panoramic views. Designed with concealed drainage channels and reinforced aluminum-capped meeting stiles for high-rise wind resistance.',
    bullets: [
      'Ultra-narrow 35mm visual sightline meeting stiles for maximal glass area',
      'Dual-track heavy-duty tandem ball-bearing rollers for effortless glide',
      'Integrated hidden perimeter drainage weeping holes preventing water pooling',
      'High wind-load rating tested up to 2500 Pa positive and negative pressure'
    ]
  },
  {
    fileName: 'upvc-06.jpg',
    title: 'TALL GEORGIAN BAR FRENCH DOORS',
    category: 'FRENCH & GEORGIAN ENTRANCES',
    subtitle: 'Georgian Lattice • Soundproof Glass • Capsule Company',
    desc: 'Full-height interior and exterior passage doors fitted with integrated Georgian glazing bars between insulated glass panes. Delivers timeless heritage elegance without dust entrapment on glass surfaces.',
    bullets: [
      'Internalized Georgian grid bars sealed inside double glazed air cavity',
      'Double rebate frame construction with internal acoustic chambers',
      'Multi-axis adjustable security hinges with anti-lift pins',
      'Superior thermal U-value under 1.6 W/m²K for year-round energy savings'
    ]
  },
  {
    fileName: 'upvc-07.jpg',
    title: 'GOLDEN TEAK CASEMENT GARDEN WINDOW',
    category: 'WOOD-GRAIN UPVC WINDOWS',
    subtitle: 'Natural Teak Foil • Espagnolette Lock • Capsule Company',
    desc: 'Single and dual-sash side-hung casement window featuring natural golden teak grain patterns. Perfectly frames landscaped garden vistas while maintaining rigorous dust and sound isolation.',
    bullets: [
      'Authentic tactile wood-textured grain resistant to scratches and peeling',
      'Multi-point espagnolette locking mechanism operated with a single handle',
      'Double seal technology achieving class 4 air permeability standards',
      'Non-conductive profile preventing heat radiation through window frames'
    ]
  },
  {
    fileName: 'upvc-08.jpg',
    title: 'MODERN MINIMALIST INTERIOR PASSAGE DOOR',
    category: 'BESPOKE INTERIOR & ENTRY DOORS',
    subtitle: 'Flush Timber Grain • Magnetic Latch • Capsule Company',
    desc: 'Precision-engineered flush interior room door featuring continuous vertical grain foil, acoustic honeycomb infill, and concealed silent magnetic latch hardware for serene bedroom and study environments.',
    bullets: [
      'Zero-rattle silent magnetic mortise lock mechanism for soft closing',
      'Waterproof UPVC and composite core immune to moisture and warping',
      'Integrated continuous acoustic drop-seal on door bottom edge',
      'Concealed 3D hinges allowing completely flush frame-to-wall mounting'
    ]
  },
  {
    fileName: 'upvc-09.jpg',
    title: 'ARCHED ENTRANCE DOOR WITH SECURITY GRILLE',
    category: 'ARCHED DOORS & SPECIALTY WINDOWS',
    subtitle: 'Arch Profile • Forged Metal Inlay • Capsule Company',
    desc: 'Custom-bent curved arch entrance door uniting exterior wood-finish UPVC framing with an ornamental wrought-iron security grille and inner operable glass sash for ventilation.',
    bullets: [
      'Precision thermal curve bending maintaining profile structural integrity',
      'Dual-action inner glazed sash opening independently for fresh air flow',
      'Laser-crafted decorative security grille powder-coated in antique brass',
      'High-security multi-point locking with anti-drill Euro cylinder lock'
    ]
  },
  {
    fileName: 'upvc-10.jpg',
    title: 'CHAMPAGNE METALLIC COMMERCIAL PASSAGE DOOR',
    category: 'COMMERCIAL & VILLA DOORS',
    subtitle: 'Metallic Foil • Heavy Commercial Stile • Capsule Company',
    desc: 'High-traffic commercial and executive villa entrance door finished in a premium champagne metallic architectural foil. Equipped with heavy-duty overhead door closer and stainless steel push plates.',
    bullets: [
      'Reinforced internal galvanized steel box sections of 2.0mm thickness',
      'Heavy-duty floor-spring or overhead hydraulic concealed door closer',
      'Laminated safety glass panel providing impact and shatter protection',
      'Commercial-grade perimeter brush and rubber dust-proofing seals'
    ]
  },
  {
    fileName: 'upvc-11.jpg',
    title: 'INTEGRATED CANOPY AWNING WINDOW',
    category: 'AWNING & TILT-TURN WINDOWS',
    subtitle: 'Polycarbonate Canopy • Top-Hung • Capsule Company',
    desc: 'Innovative weather-shielded window system pairing a top-hung UPVC awning sash with an integrated tinted polycarbonate cantilevered awning. Allows open ventilation even during heavy tropical monsoon downpours.',
    bullets: [
      'Cantilevered aerodynamic UV-coated polycarbonate rain canopy',
      'Friction stay geometry allowing sash to hold open at any desired angle',
      'Sloped exterior sill nose channeling rain runoff away from external walls',
      'Interior insect mesh screen compatible with top-hung handle movement'
    ]
  },
  {
    fileName: 'upvc-12.jpg',
    title: 'MODERN VILLA MULTI-WINDOW FACADE',
    category: 'FACADE & VILLA ELEVATIONS',
    subtitle: 'Architectural Chajja • Coordinated Sashes • Capsule Company',
    desc: 'Coordinated residential facade fenestration combining casement windows, louvers, and concrete cantilever reveals. Engineered for unified aesthetic rhythm and climate-responsive solar shading.',
    bullets: [
      'Cohesive exterior color finish across all ground and upper floor apertures',
      'Deep architectural frame setbacks enhancing facade shadow lines',
      'High acoustic attenuation buffering against neighborhood street noise',
      'Comprehensive seismic and wind-resistant anchoring bracket system'
    ]
  },
  {
    fileName: 'upvc-13.jpg',
    title: 'LOFT-STYLE BLACK MULTI-PANE PASSAGE DOOR',
    category: 'FRENCH & GEORGIAN ENTRANCES',
    subtitle: 'Industrial Grid • Clear Glazing • Capsule Company',
    desc: 'Contemporary industrial loft double-hung glass door system featuring slender grid divisions in deep charcoal black. Divides living and dining zones with spatial fluidity and maximum daylight penetration.',
    bullets: [
      'Minimalist profile face widths inspired by classic Crittall architectural styling',
      'Clear tempered monolithic or acoustic laminate safety glass panels',
      'High-tensile corner weld joints cleaned with precision robotic groovers',
      'Slim architectural tubular handles finished in matte black powder coat'
    ]
  },
  {
    fileName: 'upvc-14.jpg',
    title: 'RADIAL FLUTED SUNBURST CARVED MAIN DOOR',
    category: 'BESPOKE INTERIOR & ENTRY DOORS',
    subtitle: 'Sunburst Mandala • High-Relief Timber • Capsule Company',
    desc: 'Monumental grand entrance door featuring an artisanal high-relief carved sunburst medallion and linear fluted border panels. Delivers majestic curb appeal with unmatched thermal insulation.',
    bullets: [
      'Precision CNC-machined radial geometric pattern with multi-depth fluting',
      'High-density insulated core eliminating thermal transfer into entry foyer',
      'Heavy-duty anti-jemmy security bolts locking along vertical jambs',
      'Weather-resistant protective topcoat sealing against monsoonal moisture'
    ]
  },
  {
    fileName: 'upvc-15.jpg',
    title: 'ANTHRACITE GRAY SLIDING WINDOW SYSTEM',
    category: 'CONTEMPORARY SLIDING WINDOWS',
    subtitle: 'Anthracite 7016 • Dual Track • Capsule Company',
    desc: 'Modern two-track sliding window system finished in architectural RAL 7016 Anthracite Gray. Designed with recessed finger pulls and smooth nylon rollers for quiet, effortless horizontal operation.',
    bullets: [
      'UV-reflective cool-skin lamination reducing solar heat absorption',
      'Self-draining sill track with stainless steel guide rails for fluid glide',
      'Interlocking center meeting rail with dual wool-pile draft seals',
      'Optional stainless steel 304 mosquito mesh slider track'
    ]
  },
  {
    fileName: 'upvc-16.jpg',
    title: 'CLASSICAL WHITE GEORGIAN FRENCH DOORS',
    category: 'FRENCH & GEORGIAN ENTRANCES',
    subtitle: 'Pure White • Beveled Astragal Bars • Capsule Company',
    desc: 'Elegant pure white French casement doors featuring external surface-mounted beveled astragal bars and internal spacer grids. Evokes stately Victorian and Georgian conservatory styling.',
    bullets: [
      'Double astragal bar detail creating authentic traditional divided lites',
      'Non-chalking, non-yellowing pure white titanium dioxide profile formulation',
      'Multi-point espagnolette locking system securing both master and slave doors',
      'Low step-over aluminum threshold complying with accessibility codes'
    ]
  },
  {
    fileName: 'upvc-17.jpg',
    title: 'FLUTED SOLID TEAK-FINISH ENTRANCE DOOR',
    category: 'BESPOKE INTERIOR & ENTRY DOORS',
    subtitle: 'Vertical Slat • Brass Hardware • Capsule Company',
    desc: 'Stately residential entry door showcasing vertical rhythmic shadow grooves in rich Burma teak tones. Fitted with a solid brushed brass central designer knob and smart digital keyless lock integration.',
    bullets: [
      'Rhythmically spaced vertical shadow gap detailing adding architectural depth',
      'Steel-reinforced composite core providing exceptional resistance to impact',
      'Integrated acoustic drop-down bottom seal activating upon door closure',
      'Pre-routed for smart biometric and digital mortise lock installations'
    ]
  },
  {
    fileName: 'upvc-18.jpg',
    title: 'HERITAGE MANDALA CARVED ENTRANCE SUITE',
    category: 'BESPOKE INTERIOR & ENTRY DOORS',
    subtitle: 'Mandala Relief • Ambient Coving • Capsule Company',
    desc: 'Grand entrance foyer installation featuring a monumental sunburst relief door framed by matching fluted wood architraves and warm cove-lit ceiling headers. Creates an unforgettable first impression.',
    bullets: [
      'Hand-burnished dual-tone shaded wood finish highlighting radial carvings',
      'Triple-point security deadbolts engaging deep into structural wall anchors',
      'Superior airborne sound insulation rating up to Rw 42 dB',
      'Coordinated solid wood architraves concealing perimeter expansion gaps'
    ]
  },
  {
    fileName: 'upvc-19.jpg',
    title: 'ROYAL FRENCH LIVING ROOM DIVIDER DOORS',
    category: 'FRENCH & GEORGIAN ENTRANCES',
    subtitle: 'Warm Teak • Multi-Pane Glazing • Capsule Company',
    desc: 'Stunning interior French doors with warm teak framing and clear beveled glass panels, creating an open, bright flow between formal living rooms and dining parlors while retaining acoustic privacy.',
    bullets: [
      'Crystal-clear 8mm toughened float glass panels with beveled edges',
      'Reversible master/slave sash design for versatile everyday door access',
      'Sound-dampening perimeter santoprene rubber gaskets for whisper closure',
      'Solid brass architectural levers and matching keyhole escutcheons'
    ]
  },
  {
    fileName: 'upvc-20.jpg',
    title: 'MULTI-TIER AWNING VENTILATION FAÇADE',
    category: 'AWNING & TILT-TURN WINDOWS',
    subtitle: 'Multi-Sash Awning • Light Gray • Capsule Company',
    desc: 'Vertical bank of multi-tier top-hung awning sashes set within an architectural light gray frame. Engineered for high-rise staircase and atrium ventilation with continuous draft-free air exchange.',
    bullets: [
      'Staggered opening angles maximizing natural aerodynamic convective updraft',
      'Heavy-duty friction hinges holding sashes stable even in gusty wind speeds',
      'Centralized multi-sash gear operator or electric actuator compatibility',
      'Fully welded mullion joints ensuring zero water ingress along facade joints'
    ]
  },
  {
    fileName: 'upvc-21.jpg',
    title: 'WHITE 4-PANEL BI-FOLD PATIO DOORS',
    category: 'BI-FOLD MULTI-PANEL DOORS',
    subtitle: '4-Leaf Folding • Garden View • Capsule Company',
    desc: 'Four-panel white UPVC bi-fold glass door system that glides and concertinas effortlessly to one side. Floods living rooms with sunlight and establishes a seamless boundary with outdoor landscaped patios.',
    bullets: [
      'Concealed roller hardware running on heavy-gauge extruded aluminum tracks',
      'High-security shootbolts locking top and bottom of each folding pair',
      'Thermal break multi-chamber profiles eliminating interior condensation',
      'Weather tested to rigorous hurricane-level water tightness standards'
    ]
  },
  {
    fileName: 'upvc-22.jpg',
    title: 'TRIPLE ARCHED WOODEN LOUVER WINDOWS',
    category: 'ARCHED DOORS & SPECIALTY WINDOWS',
    subtitle: 'Arched Top • Plantation Louvers • Capsule Company',
    desc: 'Trio of classical Roman arch windows fitted with integrated operable wood-grain louvers. Blends traditional Mediterranean and colonial charm with controlled ventilation and complete solar shading.',
    bullets: [
      'Smoothly curved circular arch heads fabricated via precision profile bending',
      'Operable louver slats providing complete privacy while allowing breeze circulation',
      'Hot-melt wood-finish lamination tested for tropical weather extremes',
      'Complements classical villa corridors, prayer rooms, and courtyard verandas'
    ]
  },
  {
    fileName: 'upvc-23.jpg',
    title: 'ARCHITECTURAL DEEP BAY READING WINDOW',
    category: 'PANORAMIC BAY & PICTURE WINDOWS',
    subtitle: 'Extended Sill • Reading Nook • Capsule Company',
    desc: 'Bespoke deep bay window installation engineered with an integrated solid wood bench seat. Serves as a serene sunlit reading corner framing panoramic outdoor courtyard views.',
    bullets: [
      'High structural load capacity supporting custom hardwood seat framing',
      'Low-E insulated double glazed sashes preventing uncomfortable solar hot spots',
      'Concealed trickle ventilation slots maintaining fresh indoor air circulation',
      'Custom color-matched exterior trim profiles integrating cleanly with masonry'
    ]
  },
  {
    fileName: 'upvc-24.jpg',
    title: 'CONTEMPORARY WOODEN LOUVER FACADE',
    category: 'FACADE & VILLA ELEVATIONS',
    subtitle: 'Exterior Louver • Teak Finish • Capsule Company',
    desc: 'Modern villa facade windows equipped with exterior-grade vertical teak louver screens and white architectural reveals. Shields bedrooms from direct western solar heat while allowing filtered daylight.',
    bullets: [
      'Zero-fade exterior PVDF foil coating resisting harsh solar ultraviolet rays',
      'Modular frame sizing tailored to standard residential brickwork openings',
      'Integrated hidden perimeter drip molding preventing water run marks on plaster',
      'Termite, woodworm, and moisture-proof composite timber formulation'
    ]
  },
  {
    fileName: 'upvc-25.jpg',
    title: 'HERITAGE SOUTH INDIAN CASEMENT WINDOW',
    category: 'HERITAGE & TRADITIONAL WINDOWS',
    subtitle: 'Traditional Grille • Teak Finish • Capsule Company',
    desc: 'Traditional Kerala-style 4-sash window featuring geometric lattice transoms and raised wood panels beneath the window sill. Honors regional architectural heritage with maintenance-free modern performance.',
    bullets: [
      'Traditional geometric star and diagonal lattice transom panel detailing',
      'Raised wooden sill panels reflecting historic vernacular woodwork traditions',
      'Multi-chamber UPVC internal structure completely immune to seasonal swelling',
      'Fitted with antique brass heritage ring pulls and window stays'
    ]
  },
  {
    fileName: 'upvc-26.jpg',
    title: 'ROMAN ARCH CASEMENT WINDOW SUITE',
    category: 'ARCHED DOORS & SPECIALTY WINDOWS',
    subtitle: 'Semi-Circular Arch • Planter Box • Capsule Company',
    desc: 'Picturesque semi-circular arched casement window set above an exterior masonry flower box. Adds storybook romantic charm to master bedroom suites and garden-facing dining alcoves.',
    bullets: [
      'Continuous curved arch frame manufactured without visible seam lines',
      'Dual operable lower sashes opening outward for generous fresh airflow',
      'High acoustic attenuation buffering against loud urban environmental noise',
      'Drainage weep holes concealed beneath decorative architrave moldings'
    ]
  },
  {
    fileName: 'upvc-27.jpg',
    title: 'WOOD-FINISH SLIDING DOOR WITH TRANSOM',
    category: 'SLIDING & FRENCH PATIO DOORS',
    subtitle: 'High Transom • Wood Laminate • Capsule Company',
    desc: 'Full-height sliding patio door system featuring warm timber-grain frames and an overhead fixed transom window. Maximizes vertical wall transparency while effortlessly opening onto outdoor wooden decks.',
    bullets: [
      'Overhead fixed glass transom drawing abundant ambient daylight indoors',
      'Heavy-duty stainless steel dual tracks supporting oversized 120kg glass sashes',
      'Concealed multipoint edge lock with flush ergonomic lever handles',
      'High-durability weather stripping providing air-tight hurricane protection'
    ]
  },
  {
    fileName: 'upvc-28.jpg',
    title: 'FOUR-SASH WOOD-GRAIN CASEMENT SYSTEM',
    category: 'WOOD-GRAIN UPVC WINDOWS',
    subtitle: 'Quad Sash • Garden Panoramas • Capsule Company',
    desc: 'Sprawling four-sash casement window system opening completely outward to capture unobstructed garden panoramas and fresh cross-ventilation breezes across main living and dining spaces.',
    bullets: [
      'Quad-sash configuration with center floating mullion for 100% open aperture',
      'Heavy-gauge galvanized steel reinforcement preventing sash deflection',
      'Multi-point perimeter locking cams securing all four sashes tightly',
      'Double weather-seals blocking dust, pollen, and monsoonal moisture'
    ]
  },
  {
    fileName: 'upvc-29.jpg',
    title: 'SCANDINAVIAN CLEAN WOOD PASSAGE DOOR',
    category: 'BESPOKE INTERIOR & ENTRY DOORS',
    subtitle: 'Pale Oak Grain • Minimalist Architrave • Capsule Company',
    desc: 'Minimalist Scandinavian interior passage door in pale oak veneer texture, accented by square architectural architraves and satin chrome lever hardware. Ideal for clean Japandi and Nordic interiors.',
    bullets: [
      'Ultra-flat seamless door face with scratch-resistant polymer laminate',
      'Internal cellular acoustic infill absorbing airborne conversation noise',
      'Precision mitred architrave joints ensuring crisp 90° architectural corners',
      'Moisture-impervious bottom rail safe against wet floor mopping'
    ]
  },
  {
    fileName: 'upvc-30.jpg',
    title: 'POLISHED TIMBER BI-FOLD DECK DOORS',
    category: 'BI-FOLD MULTI-PANEL DOORS',
    subtitle: 'Wood Grain Fold • Sunken Track • Capsule Company',
    desc: 'High-end concertina folding patio doors in warm natural timber lamination. Sashes glide and pivot smoothly on a sunken floor track, seamlessly merging indoor hardwood floors with outdoor sundecks.',
    bullets: [
      'Flush sunken threshold track preventing tripping between room and deck',
      'Precision multi-roller carriage ensuring silent finger-touch door movement',
      'Toughened 8mm clear safety glass offering exceptional impact resistance',
      'Anti-pinch gasket profiles protecting hands and fingers during folding'
    ]
  },
  {
    fileName: 'upvc-31.jpg',
    title: 'WOOD-GRAIN UPVC TOP-HUNG AWNING WINDOW',
    category: 'AWNING & TILT-TURN WINDOWS',
    subtitle: 'Warm Teak • Friction Awning • Capsule Company',
    desc: 'Top-hung outward opening awning window finished in rich warm teak lamination. Can remain open during rain showers to provide continuous natural ventilation without water entering the home.',
    bullets: [
      'Top-hinged sash projecting outward to naturally deflect falling rainwater',
      'Adjustable friction stays holding sash securely at desired ventilation gap',
      'Single-handle espagnolette multipoint lock clamping the sash tightly shut',
      'Thermal multi-chamber profile preventing heat transfer into air-conditioned spaces'
    ]
  },
  {
    fileName: 'upvc-32.jpg',
    title: 'WHITE TRIPLE FRENCH GARDEN DOORS',
    category: 'FRENCH & GEORGIAN ENTRANCES',
    subtitle: 'Triple Leaf • Pure White • Capsule Company',
    desc: 'Classical three-panel French door suite finished in bright white UV-stabilized UPVC. Opens directly onto lush landscaped garden lawns, flooding living rooms with crisp morning light.',
    bullets: [
      'Three-leaf configuration providing versatile single-door or full-width opening',
      'Dual-glazed insulating glass units reducing ambient neighborhood noise',
      'Heavy-duty 3D adjustable hinges allowing micro-alignment on site',
      'Non-yellowing profile warranty against tropical sunlight exposure'
    ]
  },
  {
    fileName: 'upvc-33.jpg',
    title: 'EXTERIOR BRICK VILLA BAY WINDOW',
    category: 'PANORAMIC BAY & PICTURE WINDOWS',
    subtitle: 'Multi-Facet Bay • Acoustic Glass • Capsule Company',
    desc: 'Traditional projecting multi-facet bay window system set into exterior face-brick masonry. Captures multi-directional sunlight throughout the day while adding architectural relief to villa elevations.',
    bullets: [
      'Heavy-duty bay pole coupling mullions carrying upper-floor structural loads',
      'Acoustic double glazing dampening external street and traffic noise',
      'Operable side casement sashes providing efficient cross-ventilation',
      'Custom exterior brick sill nose flashing directing rainwater runoff away'
    ]
  },
  {
    fileName: 'upvc-34.jpg',
    title: 'MODERN PIVOT ENTRANCE DOOR WITH GLASS SIDELIGHT',
    category: 'BESPOKE INTERIOR & ENTRY DOORS',
    subtitle: 'Off-Center Pivot • Frosted Sidelight • Capsule Company',
    desc: 'Grand contemporary pivot entrance door featuring an off-center heavy-duty floor pivot hinge and an asymmetric sandblasted frosted glass sidelight. Delivers modern luxury and entrance grandeur.',
    bullets: [
      'Heavy-duty commercial hydraulic floor pivot supporting doors up to 250 kg',
      'Asymmetric frosted tempered glass sidelight admitting soft daylight',
      'Thermal break core preventing heat loss and exterior temperature infiltration',
      'Compatible with smart keyless entry and motorized auto-swing operators'
    ]
  },
  {
    fileName: 'upvc-35.jpg',
    title: 'SOLID TEAK MULTI-PANE INTERIOR FRENCH DOORS',
    category: 'FRENCH & GEORGIAN ENTRANCES',
    subtitle: 'Divided Lite • Clear Tempered • Capsule Company',
    desc: 'Timeless interior French doors in deep natural teak finish featuring 10-lite divided glazing. Accentuates open sightlines between formal living areas and sunny garden corridors.',
    bullets: [
      'Authentic divided lite profile with interior and exterior astragal bars',
      'Precision factory-hung door and frame assembly for effortless installation',
      'Magnetic door stops and silent latch mortise locks for serene operation',
      'Termite and rot-proof composite UPVC structure that never warps or binds'
    ]
  },
  {
    fileName: 'upvc-36.jpg',
    title: 'ORNAMENTAL CARVED TRADITIONAL KERALA WINDOW',
    category: 'HERITAGE & TRADITIONAL WINDOWS',
    subtitle: 'Ornate Relief • Solid Teak Tone • Capsule Company',
    desc: 'Heritage window unit featuring intricately carved relief transoms and vertical window shutter slats. Complements traditional courtyards and Nalukettu homes with modern weather-tight durability.',
    bullets: [
      'Masterfully rendered traditional Kerala architectural carving motifs',
      'Operable inner glazed sash pairing with outer carved decorative shutters',
      'Resistant to monsoonal moisture, wood rot, and fungal decay',
      'Heavy-gauge brass architectural stays and traditional barrel bolts'
    ]
  },
  {
    fileName: 'upvc-37.jpg',
    title: 'CHARCOAL BLACK SLIDING PATIO DOORS',
    category: 'SLIDING & FRENCH PATIO DOORS',
    subtitle: 'Matte Charcoal • Low Threshold • Capsule Company',
    desc: 'Sleek two-panel sliding glass door finished in architectural matte charcoal. Engineered with an ultra-low threshold track that connects indoor tile floors seamlessly to outdoor stone verandas.',
    bullets: [
      'Ultra-flat 15mm accessible threshold profile complying with barrier-free standards',
      'Heavy-duty multi-point hook locks engaging securely along frame jambs',
      'Argon gas-filled Low-E insulated glass units blocking radiant solar heat',
      'Dual wiper seals preventing dust, insects, and draft infiltration'
    ]
  },
  {
    fileName: 'upvc-38.jpg',
    title: 'INDUSTRIAL STEEL-LOOK BAY AWNING WINDOW',
    category: 'AWNING & TILT-TURN WINDOWS',
    subtitle: 'Black Multi-Pane • Outward Awning • Capsule Company',
    desc: 'Industrial-style bay window system featuring slender black multi-pane glazing bars and bottom-projecting awning sashes. Adds contemporary urban warehouse character to brick villa facades.',
    bullets: [
      'Crisp industrial aesthetic inspired by architectural steel fenestration',
      'Bottom-projecting outward awning sash allowing continuous air circulation',
      'Fully welded waterproof frame corners resisting monsoonal downpours',
      'Toughened safety glass certified for high wind-pressure performance'
    ]
  },
  {
    fileName: 'upvc-39.jpg',
    title: 'ZERO-THRESHOLD CORNER SLIDING GLASS DOORS',
    category: 'SLIDING & FRENCH PATIO DOORS',
    subtitle: 'Corner Opening • Zero Threshold • Capsule Company',
    desc: 'State-of-the-art 90-degree corner sliding door system that slides back without a corner post, opening the entire corner of the living room completely to outdoor infinity decks.',
    bullets: [
      'Post-free 90-degree open corner design for completely unobstructed views',
      'Zero-threshold flush floor track embedded level with interior tile flooring',
      'Concealed multipoint motorization or smooth manual glide operation',
      'Structural thermal break engineering tested against extreme weather'
    ]
  },
  {
    fileName: 'upvc-40.jpg',
    title: 'WHITE BI-FOLD KITCHEN & PATIO PARTITION',
    category: 'BI-FOLD MULTI-PANEL DOORS',
    subtitle: 'Kitchen Pass-Through • 4-Panel • Capsule Company',
    desc: 'Versatile four-panel bi-fold glass door system bridging modern gourmet kitchens with outdoor barbecue patios. Folds back cleanly to create a unified entertaining and dining pavilion.',
    bullets: [
      'Space-saving concertina folding configuration maximizing serving aperture',
      'Easy-to-clean white gloss UPVC profiles resistant to kitchen grease and steam',
      'Smooth stainless steel roller mechanisms engineered for tens of thousands of cycles',
      'Dual magnetic catches holding folded door sashes neatly in open position'
    ]
  },
  {
    fileName: 'upvc-41.jpg',
    title: 'HIGH-ACOUSTIC TILT & TURN BALCONY WINDOW',
    category: 'AWNING & TILT-TURN WINDOWS',
    subtitle: 'Dual Action • Anthracite • Capsule Company',
    desc: 'European dual-action tilt and turn window system. Turns inward like a casement door for easy cleaning, and tilts open at the top for secure, draft-free all-day bedroom ventilation.',
    bullets: [
      'Dual-action German hardware operating tilt or turn with a single handle',
      'Tilt mode allows secure nighttime ventilation without intrusion risk',
      'Turn mode opens 90° inward for effortless exterior glass cleaning',
      'High-acoustic laminated glass dampening traffic noise by up to 45 dB'
    ]
  },
  {
    fileName: 'upvc-42.jpg',
    title: 'ARCHITECTURAL RIBBON WINDOW ELEVATION',
    category: 'FACADE & VILLA ELEVATIONS',
    subtitle: 'Ribbon Glass • Slender Transom • Capsule Company',
    desc: 'Elongated horizontal ribbon window set into modern textured villa facades. Emphasizes clean horizontal building lines while distributing uniform natural daylight deep into interior corridors.',
    bullets: [
      'Continuous horizontal aperture creating panoramic perspective views',
      'Reinforced structural mullions engineered to span wide masonry openings',
      'Solar-control reflective glass coating reducing interior solar glare',
      'Integrated hidden drip molds shedding rainwater cleanly off facade walls'
    ]
  },
  {
    fileName: 'upvc-43.jpg',
    title: 'TROPICAL HARDWOOD-FINISH LOUVER WINDOW',
    category: 'HERITAGE & TRADITIONAL WINDOWS',
    subtitle: 'Natural Louver • Planter Integration • Capsule Company',
    desc: 'Tropical villa window installation pairing top-hung outward awning glass with wood-grain louver vents and built-in courtyard planters. Infuses indoor stairwells with natural greenery and breeze.',
    bullets: [
      'Integrated wood-finish louver slats providing private natural airflow',
      'UV-stabilized polymer construction immune to high humidity and garden spray',
      'Combines outward-projecting awning sashes for maximum fresh air capture',
      'Rich golden timber tones complementing indoor balustrades and flooring'
    ]
  },
  {
    fileName: 'upvc-44.jpg',
    title: 'WOOD-LAMINATE SLIDING BALCONY DOORS',
    category: 'SLIDING & FRENCH PATIO DOORS',
    subtitle: 'Warm Teak • Dual Track • Capsule Company',
    desc: 'Spacious two-panel sliding balcony doors wrapped in authentic teak woodgrain foil. Seamlessly opens master bedroom suites to private outdoor balconies while ensuring tight acoustic isolation.',
    bullets: [
      'Smooth-gliding heavy-duty tandem nylon rollers on stainless steel tracks',
      'Full perimeter brush seals and EPDM gaskets preventing dust and draft entry',
      'Cylinder-keyed multi-point deadbolts for enhanced balcony security',
      'Thermal insulating core keeping bedrooms comfortably cool in summer'
    ]
  },
  {
    fileName: 'upvc-45.jpg',
    title: 'TRADITIONAL ARCHED WOODEN CASEMENT WINDOW',
    category: 'ARCHED DOORS & SPECIALTY WINDOWS',
    subtitle: 'Curved Top • Kerala Heritage • Capsule Company',
    desc: 'Graceful arch-topped multi-sash window unit showcasing classic South Indian architectural woodworking details. Features curved radial transoms and operable side casements with sheer curtain styling.',
    bullets: [
      'Radial sunburst arch transom detail crafted with high-precision bending',
      'Operable double casement sashes opening out for expansive cross-breezes',
      'Hot-melt timber grain lamination that will never peel, warp, or require polishing',
      'High-grade brass architectural hardware adding vintage authenticity'
    ]
  },
  {
    fileName: 'upvc-46.jpg',
    title: 'MINIMALIST WAVE-GROOVE DESIGNER PASSAGE DOOR',
    category: 'BESPOKE INTERIOR & ENTRY DOORS',
    subtitle: 'Wave Texture • Matte Beige • Capsule Company',
    desc: 'Contemporary interior bedroom passage door featuring an organic wave groove pattern carved into a smooth matte champagne-taupe face. Exudes calm, modern spa-like serenity.',
    bullets: [
      'Subtle CNC wave relief routing adding tactile architectural elegance',
      'Waterproof composite core impervious to bathroom steam and bedroom AC',
      'Soft-closing perimeter magnetic latches eliminating door slamming noise',
      'Complements minimalist travertine, warm linen, and microcement interiors'
    ]
  },
  {
    fileName: 'upvc-47.jpg',
    title: 'SCANDINAVIAN TEAK BEDROOM FLUSH DOOR',
    category: 'BESPOKE INTERIOR & ENTRY DOORS',
    subtitle: 'Solid Teak Foil • Flush Frame • Capsule Company',
    desc: 'Understated Scandinavian luxury flush door finished in warm teak woodgrain foil with matching architrave framing. Accentuates organic modern interiors with refined simplicity.',
    bullets: [
      'Continuous vertical wood grain with scratch-resistant protective lacquer',
      'Engineered multi-layer core achieving high sound dampening between rooms',
      'Heavy-duty stainless steel ball-bearing butt hinges for buttery swing motion',
      'Pre-finished and ready for rapid installation with zero on-site painting'
    ]
  },
  {
    fileName: 'upvc-48.jpg',
    title: 'CLASSIC DUAL-SASH WOOD-FINISH CASEMENT WINDOW',
    category: 'WOOD-GRAIN UPVC WINDOWS',
    subtitle: 'Double Sash • Walnut Finish • Capsule Company',
    desc: 'Twin-sash outward opening casement window finished in warm architectural walnut foil. Designed with divided window lights that flood interior bedrooms with soft natural daylight.',
    bullets: [
      'Dual side-hung sashes with friction stays holding position in breezy weather',
      'Multi-point locking system securing sash tightly against frame gaskets',
      'High-durability woodgrain foil resisting tropical moisture and fading',
      'Low-maintenance finish that wipes clean effortlessly with a damp cloth'
    ]
  },
  {
    fileName: 'upvc-49.jpg',
    title: 'PANORAMIC THREE-SASH LIVING ROOM WINDOW',
    category: 'PANORAMIC BAY & PICTURE WINDOWS',
    subtitle: 'Pure White • Garden View • Capsule Company',
    desc: 'Expansive three-sash panoramic living room window system. Combines a wide central picture window with dual flanking operable casements, framing sweeping outdoor garden vistas with maximum daylight.',
    bullets: [
      'Oversized central picture pane delivering uninterrupted panoramic landscape views',
      'Flanking operable casement sashes providing customizable fresh ventilation',
      'Double-sealed fusion-welded corners guaranteeing zero rainwater leakage',
      'Acoustic double glazing insulating interior living spaces from city street noise'
    ]
  }
];

function generateData() {
  const assetsDir = path.join(__dirname, '..', 'public', 'assets', 'upvc-windows-doors');
  
  const orderedItems = rawModels.map((item, idx) => {
    const code = `UPVC-${String(idx + 1).padStart(2, '0')}`;
    return {
      id: code.toLowerCase(),
      code,
      title: item.title,
      category: item.category,
      subtitle: item.subtitle,
      desc: item.desc,
      bullets: item.bullets,
      fileName: item.fileName,
      relPath: `assets/upvc-windows-doors/${item.fileName}`
    };
  });

  const categories = Array.from(new Set(orderedItems.map(m => m.category)));

  const fullData = {
    catalogueTitle: 'Capsule Company - UPVC Windows & Doors Design Catalogue 2026',
    company: 'CAPSULE COMPANY',
    tagline: 'YOUR SPACE MAKER',
    year: '2026',
    totalModels: orderedItems.length,
    categories,
    orderedItems
  };

  const outPath = path.join(assetsDir, 'upvc-windows-doors-data.json');
  fs.writeFileSync(outPath, JSON.stringify(fullData, null, 2));
  console.log(`Generated architectural data for ${orderedItems.length} UPVC models (UPVC-01 to UPVC-${String(orderedItems.length).padStart(2, '0')}) at: ${outPath}`);
}

generateData();
