const fs = require('fs');
const path = require('path');

const models = [
  {
    refId: 'LTG-01',
    fileName: 'lighting-01.jpg',
    title: 'BI-DIRECTIONAL FACADE WALL WASHER',
    category: 'OUTDOOR & LANDSCAPE LIGHTING',
    subtitle: 'IP65 Waterproof • Dual-Beam Optics • Capsule Company',
    desc: 'Precision architectural exterior wall sconce casting dramatic upward and downward light blades across exterior plaster and stone masonry. Engineered with an IP65 sealed aluminum housing and high-efficiency Cree COB LEDs for contemporary villas and perimeter boundary walls.',
    bullets: [
      'Heavy-duty die-cast aluminum chassis with anti-corrosion powder coating',
      'High-precision optical lenses producing sharp 30° architectural light beams',
      'IP65 water and dust ingress protection rated for tropical monsoon conditions',
      'Warm 3000K illumination enhancing exterior architectural facade depth'
    ]
  },
  {
    refId: 'LTG-02',
    fileName: 'lighting-02.jpg',
    title: 'MODERN CYLINDER PATHWAY BOLLARD',
    category: 'OUTDOOR & LANDSCAPE LIGHTING',
    subtitle: 'Anti-Glare Louver • Ground Stake • Capsule Company',
    desc: 'Sleek cylindrical pathway bollard luminaire designed for landscaped garden promenades, gravel walkways, and terrace pathways. Features frosted 360-degree glare-free diffusers that cast uniform pools of warm light across foliage and stone steps.',
    bullets: [
      'Weather-resistant anodized extruded aluminum body with ground anchor base',
      '360° uniform horizontal light distribution with downward glare cutoff',
      'Integrated surge protection with internal moisture-wicking breathing vents',
      'Low power consumption 12W LED module delivering 900+ lumens output'
    ]
  },
  {
    refId: 'LTG-03',
    fileName: 'lighting-03.jpg',
    title: 'HERITAGE VERANDA PENDANT LANTERN',
    category: 'OUTDOOR & LANDSCAPE LIGHTING',
    subtitle: 'Beveled Glass • Matte Black Chain • Capsule Company',
    desc: 'Classical exterior hanging pendant lantern crafted with wrought-iron framing and clear beveled tempered glass panels. Perfectly illuminates covered porticos, outdoor veranda seating, and colonial heritage entryways with timeless warmth.',
    bullets: [
      'Rust-proof powder-coated iron canopy and adjustable suspension chain',
      'High-clarity beveled glass providing brilliant atmospheric dispersion',
      'Standard E27 porcelain socket compatible with filament amber LED bulbs',
      'Damp-rated enclosure certified for covered patios and outdoor porticos'
    ]
  },
  {
    refId: 'LTG-04',
    fileName: 'lighting-04.jpg',
    title: 'ROMANTIC COTTAGE GARDEN POST',
    category: 'OUTDOOR & LANDSCAPE LIGHTING',
    subtitle: 'Heritage Lantern • Dusk-to-Dawn • Capsule Company',
    desc: 'Charming vintage-inspired garden lamp post nestled along stone garden trails and perennial flowerbeds. Delivers warm romantic evening radiance through textured water-glass panes, transforming landscape gardens into magical nightscapes.',
    bullets: [
      'Solid cast-aluminum lantern housing resistant to heavy rain and UV exposure',
      'Textured water-glass panels softening glare and scattering warm light',
      'Compatible with smart dusk-to-dawn astronomical timer integration',
      'Direct-burial or flanged ground pedestal mounting for stone and turf'
    ]
  },
  {
    refId: 'LTG-05',
    fileName: 'lighting-05.jpg',
    title: 'GEOMETRIC FLUSH CEILING PROFILE',
    category: 'ARCHITECTURAL PROFILE LIGHTS',
    subtitle: 'Plaster-In Profile • Dotless COB • Capsule Company',
    desc: 'Architectural plaster-in linear profile system configured in a modern geometric pattern across gypsum false ceilings. Features seamless silicone diffusers delivering completely dotless illumination without visible aluminum trim lines.',
    bullets: [
      'Ultra-shallow 15mm trimless mud-in aluminum extrusion for flush drywall',
      'High-density 480 LED/m continuous COB strip producing zero hotspot diode glare',
      'High color rendering CRI 95+ for accurate representation of interior tones',
      'Dimmable TRIAC and DALI 2.0 driver integration for scene control'
    ]
  },
  {
    refId: 'LTG-06',
    fileName: 'lighting-06.jpg',
    title: 'COMPACT GARDEN BOLLARD LUMINAIRE',
    category: 'OUTDOOR & LANDSCAPE LIGHTING',
    subtitle: '360° Opal Diffuser • IP65 Rated • Capsule Company',
    desc: 'Minimalist low-profile pathway light engineered for rock gardens, poolside paths, and driveway perimeters. Delivers a soft horizontal wash of light that keeps pathways safely illuminated while preserving night sky ambiance.',
    bullets: [
      'Impact-resistant polycarbonate opal diffuser tested to IK08 standards',
      'Durable dark grey electrophoretic coating resistant to soil moisture',
      'Low thermal conductivity keeping fixture cool to the touch near pets and plants',
      'Warm 2700K-3000K warm white tone blending naturally with outdoor shrubbery'
    ]
  },
  {
    refId: 'LTG-07',
    fileName: 'lighting-07.jpg',
    title: 'WALL-TO-CEILING RUNNER PROFILE',
    category: 'ARCHITECTURAL PROFILE LIGHTS',
    subtitle: 'Continuous Corner Join • Edge-Lit • Capsule Company',
    desc: 'Continuous architectural profile light transitioning seamlessly from vertical plasterboard walls into ceiling planes with clean 90-degree mitered corners. Creates dynamic architectural perspective and visual elongation in hallways and modern staircases.',
    bullets: [
      'Precision CNC-mitered internal corner connectors for continuous light lines',
      'Satin milky PMMA diffuser providing uniform 120-degree light dispersion',
      'Aircraft-grade 6063-T5 aluminum housing for optimal LED heat sinking',
      'Custom length fabrication available up to 4 meters per unbroken segment'
    ]
  },
  {
    refId: 'LTG-08',
    fileName: 'lighting-08.jpg',
    title: 'ASYMMETRIC RECESSED WALL GRAZER',
    category: 'ARCHITECTURAL PROFILE LIGHTS',
    subtitle: 'Vertical Blade Profiles • Shadowline • Capsule Company',
    desc: 'Minimalist architectural vertical wall slot lighting creating elegant light blades that accentuate wall texturing and corridor artwork. Recessed flush within drywall for an ultra-clean gallery look.',
    bullets: [
      'Recessed channel design concealing direct light sources from viewer sightlines',
      'Micro-prismatic optical diffuser minimizing glare in narrow transition areas',
      'Integrated magnetic snap-in LED tray for tool-free future maintenance',
      'Circadian rhythm support with tunable white (2700K to 6500K) options'
    ]
  },
  {
    refId: 'LTG-09',
    fileName: 'lighting-09.jpg',
    title: 'TERRACE STEP & PLANTER CONTOUR LIGHT',
    category: 'OUTDOOR & LANDSCAPE LIGHTING',
    subtitle: 'IP67 Silicone Neon • Step Grazing • Capsule Company',
    desc: 'Flexible outdoor-grade continuous LED contour lighting recessed beneath planter copings and patio step edges. Outlines outdoor entertaining decks and pool terraces with safe, luxurious ground illumination.',
    bullets: [
      'IP67 UV-resistant food-grade silicone extrusion submersible up to 1 meter',
      'Uniform dotless linear glow without scalloping on stone step risers',
      'Low-voltage 24V DC operation ensuring absolute safety in wet outdoor zones',
      'Salt spray and chlorine resistant for coastal and swimming pool terraces'
    ]
  },
  {
    refId: 'LTG-10',
    fileName: 'lighting-10.jpg',
    title: 'FLOATING BED & COVE PROFILE SUITE',
    category: 'ARCHITECTURAL PROFILE LIGHTS',
    subtitle: 'Indirect Cove Channel • Ambient Halo • Capsule Company',
    desc: 'Sophisticated master suite lighting architecture combining floating bed platform underglow with multi-tier ceiling cove profile ribbons. Creates a tranquil, relaxing retreat with soft indirect indirect illumination.',
    bullets: [
      '45-degree angled aluminum cove profile throwing light smoothly across ceiling',
      'Warm 2400K sunset tone stimulating melatonin for optimal sleep relaxation',
      'Flicker-free PWM dimming down to 0.1% for delicate nightlight operation',
      'Concealed wiring paths integrated into bespoke bedroom carpentry'
    ]
  },
  {
    refId: 'LTG-11',
    fileName: 'lighting-11.jpg',
    title: 'KITCHEN CEILING COVE REVEAL PROFILE',
    category: 'ARCHITECTURAL PROFILE LIGHTS',
    subtitle: 'Perimeter Shadow Gap • High CRI • Capsule Company',
    desc: 'Flush architectural shadowline cove system outlining kitchen island ceiling drop-downs. Pairs functional high-output task lighting with a floating architectural ceiling aesthetic.',
    bullets: [
      'High-output 1800 lm/m LED strip providing ambient kitchen illumination',
      'High CRI >95 ensuring natural, vibrant food preparation colors',
      'Thermally optimized profile preventing LED lumen depreciation over time',
      'Compatible with smart voice and motion automation sensor controls'
    ]
  },
  {
    refId: 'LTG-12',
    fileName: 'lighting-12.jpg',
    title: 'MINIMALIST LINEAR CYLINDER PENDANT',
    category: 'STATEMENT CHANDELIERS & PENDANTS',
    subtitle: 'Matte Black Rail • Focused Downlights • Capsule Company',
    desc: 'Understated contemporary dining chandelier featuring a slim horizontal matte black suspension beam equipped with precision directional cylinder spotlights. Ideal for long Scandinavian and minimalist dining tables.',
    bullets: [
      'Precision machined solid aluminum bar with micro-braided suspension wires',
      'Deep-set anti-glare reflector lenses with 24° concentrated dining beam spread',
      'Adjustable suspension height up to 2.5 meters to suit varying ceiling volumes',
      'Warm 3000K LED chips casting flattering illumination across dining settings'
    ]
  },
  {
    refId: 'LTG-13',
    fileName: 'lighting-13.jpg',
    title: 'RADIAL FLUSH CRYSTAL RING CHANDELIER',
    category: 'STATEMENT CHANDELIERS & PENDANTS',
    subtitle: 'Prismatic Crystal • Ceiling Burst Refraction • Capsule Company',
    desc: 'Opulent circular flush-mount crystal luminaire engineered with precision-cut K9 crystal prisms. When illuminated, casts breathtaking kaleidoscopic refraction patterns across surrounding ceiling planes.',
    bullets: [
      'High-purity optic K9 crystal blocks refracting pure diamond-like sparkle',
      'Polished chrome mirror ceiling plate multiplying reflected crystal brilliance',
      'Flush mount profile ideal for standard 9-foot to 10-foot ceiling clearances',
      'Tri-color switchable CCT (3000K / 4000K / 6000K) via wall switch control'
    ]
  },
  {
    refId: 'LTG-14',
    fileName: 'lighting-14.jpg',
    title: 'STEPPED COVE TRAY WITH PENDANT CENTER',
    category: 'ARCHITECTURAL PROFILE LIGHTS',
    subtitle: 'Deep Cove Tray • Fabric Shade • Capsule Company',
    desc: 'Refined living room ceiling composition featuring a deep gypsum cove tray framed by continuous warm LED strip profiles, anchored by a tailored drum pendant centerpiece.',
    bullets: [
      'Multi-tier stepped ceiling recess hiding LED light strips from all viewing angles',
      'Soft diffused perimeter glow creating perceived ceiling height enhancement',
      'Natural linen textured drum pendant providing centered conversational focus',
      'Independent two-switch circuit for mood ambient lighting vs central fixture'
    ]
  },
  {
    refId: 'LTG-15',
    fileName: 'lighting-15.jpg',
    title: 'HEXAGONAL HONEYCOMB CEILING SYSTEM',
    category: 'ARCHITECTURAL PROFILE LIGHTS',
    subtitle: 'Modular Hex Grid • Seamless Extrusion • Capsule Company',
    desc: 'Striking modular honeycomb ceiling light installation composed of interlocking hexagonal aluminum profile modules. Converts expansive entrance galleries and auto pavilions into state-of-the-art visual statements.',
    bullets: [
      'Modular snap-together hexagonal aluminum profiles with seamless corner joints',
      'Even frosted diffusion eliminating tube shadows and harsh optical glare',
      'High luminous efficacy delivering over 110 lumens per watt energy efficiency',
      'Versatile surface mount or aircraft cable suspended ceiling installation'
    ]
  },
  {
    refId: 'LTG-16',
    fileName: 'lighting-16.jpg',
    title: 'OVAL FACETED CRYSTAL DINING CHANDELIER',
    category: 'STATEMENT CHANDELIERS & PENDANTS',
    subtitle: 'Layered Crystal Tier • Warm Candle Radiance • Capsule Company',
    desc: 'Grand banquet dining chandelier featuring an expansive oval halo of hand-cut crystal baguettes arranged in double cascading tiers. Illuminates formal banquets with dazzling crystal warmth and regal sophistication.',
    bullets: [
      'Hand-assembled optical crystal prisms capturing and dispersing warm dining light',
      'Champagne gold brushed electroplated steel frame resistant to oxidation',
      'Dual-circuit dimming allowing intimate candlelight dinners or full banquet glow',
      'Reinforced steel suspension cables supporting heavy crystal load securely'
    ]
  },
  {
    refId: 'LTG-17',
    fileName: 'lighting-17.jpg',
    title: 'ASYMMETRIC GEOMETRIC CEILING TRAY',
    category: 'ARCHITECTURAL PROFILE LIGHTS',
    subtitle: 'Intersecting Profiles • Classical Chandelier • Capsule Company',
    desc: 'Transitional ceiling architecture pairing classical iron chandelier focal fixtures with asymmetric intersecting linear ceiling profile ribbons in a formal drawing room.',
    bullets: [
      'Geometric linear profile tracks framing the perimeter and intersecting coffer',
      'Warm 2700K ambient illumination highlighting classical ceiling moldings',
      'Central structural cross-beam supporting heavy multi-arm metal chandeliers',
      'Smart home automation enabling synchronized or independent circuit control'
    ]
  },
  {
    refId: 'LTG-18',
    fileName: 'lighting-18.jpg',
    title: 'INDUSTRIAL OPEN-GRID SPIDER PENDANTS',
    category: 'STATEMENT CHANDELIERS & PENDANTS',
    subtitle: 'Mesh Grid Canopy • Edison Bulb Cluster • Capsule Company',
    desc: 'Dramatic industrial loft lighting concept featuring an open steel mesh ceiling canopy suspending a randomized constellation of black braided cord pendant lamps with exposed filament bulbs.',
    bullets: [
      'Black powder-coated expanded metal ceiling grid acting as cable routing bay',
      'Individual height-adjustable braided fabric drop cables for staggered heights',
      'Vintage amber spiral filament LED bulbs casting cozy 2200K golden warmth',
      'Ideal for industrial lofts, home brew bars, and urban recreation spaces'
    ]
  },
  {
    refId: 'LTG-19',
    fileName: 'lighting-19.jpg',
    title: 'GOLDEN BRANCH CRYSTAL DRAPED CHANDELIER',
    category: 'STATEMENT CHANDELIERS & PENDANTS',
    subtitle: 'Organic Botanical • Champagne Crystals • Capsule Company',
    desc: 'Sculptural masterpiece inspired by frosted forest tree canopies, featuring hand-cast brass tree branches draped with teardrop crystal pendants. Forms a breathtaking dining room centerpiece.',
    bullets: [
      'Hand-forged brass tree branches with artisanal antique champagne gold leafing',
      'Faceted teardrop and spear crystal prisms that chime and sparkle with motion',
      'G9 socket arrangement providing 360-degree radiant light from within foliage',
      'Elongated horizontal 1.5m profile perfectly proportioned for 8 to 12-seater tables'
    ]
  },
  {
    refId: 'LTG-20',
    fileName: 'lighting-20.jpg',
    title: 'CLASSIC SPANISH COACH WALL SCONCE',
    category: 'OUTDOOR & LANDSCAPE LIGHTING',
    subtitle: 'Traditional Lantern • Amber Glow • Capsule Company',
    desc: 'Timeless colonial coach wall lantern finished in textured matte black with seeded glass panels. Mounted beside timber patio entrances and rustic villa verandas for warm welcoming illumination.',
    bullets: [
      'Heavy-gauge die-cast metal frame engineered to withstand harsh exterior climates',
      'Seeded glass panes imparting historic craftsmanship and softening bulb glare',
      'IP54 weather rating preventing dust entry and splashing rain water',
      'Universal wall bracket allowing straightforward electrical conduit hookup'
    ]
  },
  {
    refId: 'LTG-21',
    fileName: 'lighting-21.jpg',
    title: 'MINIMALIST ARCHITECTURAL BOLLARD ROW',
    category: 'OUTDOOR & LANDSCAPE LIGHTING',
    subtitle: 'Square Post • Glare-Free Louver • Capsule Company',
    desc: 'Clean geometric bollard row guiding visitors along stepping stone pathways and manicured lawns. Delivers sharp architectural lines during the day and subtle path guidance by night.',
    bullets: [
      'Minimalist square extrusion in architectural graphite textured powder coat',
      'Downward-directed louver optics minimizing light pollution into the night sky',
      'Internal waterproof driver bay with quick-disconnect terminal blocks',
      'High impact resistance IK09 rating against garden tools and accidental knocks'
    ]
  },
  {
    refId: 'LTG-22',
    fileName: 'lighting-22.jpg',
    title: 'MONOLITHIC STONE GARDEN BOLLARD',
    category: 'OUTDOOR & LANDSCAPE LIGHTING',
    subtitle: 'Cast Concrete Finish • Recessed Aperture • Capsule Company',
    desc: 'Sculptural outdoor bollard resembling natural monolithic stone masonry. Features a recessed angled light aperture that softly washes stone aggregate walkways and ornamental grasses.',
    bullets: [
      'Architectural fiber-reinforced concrete body blending organically with nature',
      'Concealed recessed light source preventing direct eye glare along footpaths',
      'Integrated heavy-duty stainless ground spike for firm lawn and soil anchoring',
      'Extremely durable weatherproof structure impervious to garden sprinklers'
    ]
  },
  {
    refId: 'LTG-23',
    fileName: 'lighting-23.jpg',
    title: 'ARTISANAL WOVEN TEXTURED PENDANT CLUSTER',
    category: 'STATEMENT CHANDELIERS & PENDANTS',
    subtitle: 'Natural Rattan • Bohemian Cluster • Capsule Company',
    desc: 'Cluster of handcrafted woven light fixtures in staggered globes and teardrop forms. Casts intricate lattice shadow patterns across dining surfaces and walls for a cozy bohemian aesthetic.',
    bullets: [
      'Hand-woven natural organic plant fibers treated with fire-retardant coating',
      'Multi-canopy black cord cluster allowing bespoke height and spacing adjustments',
      'Warm atmospheric ambient light filtering gently through woven textures',
      'Perfect centerpiece for coastal, Mediterranean, and wabi-sabi interiors'
    ]
  },
  {
    refId: 'LTG-24',
    fileName: 'lighting-24.jpg',
    title: 'CASCADING WAVE CRYSTAL RIBBON CHANDELIER',
    category: 'STATEMENT CHANDELIERS & PENDANTS',
    subtitle: 'Fluid Crystal Wave • Dynamic Curve • Capsule Company',
    desc: 'Monumental contemporary chandelier featuring a flowing wave-like ribbon of sparkling crystal droplets suspended on invisible aircraft cables. Delivers an illusion of liquid crystal floating in mid-air.',
    bullets: [
      'Precision fluid wave curve engineered to create movement in static living rooms',
      'Hundreds of faceted crystal strands suspended at graduated micro-heights',
      'Concealed internal high-CRI LED light bar providing uniform inner brilliance',
      'Adjustable dual suspension points adaptable to level and vaulted ceilings'
    ]
  },
  {
    refId: 'LTG-25',
    fileName: 'lighting-25.jpg',
    title: 'TRIPLE-TIER CONCENTRIC CRYSTAL HALO',
    category: 'STATEMENT CHANDELIERS & PENDANTS',
    subtitle: 'Triple Halo Rings • Brushed Brass • Capsule Company',
    desc: 'Stately three-tier chandelier composed of concentric circular rings encased in faceted crystal prisms and brushed champagne gold frames. Adjustable to display symmetrical or interlocking cascading angles.',
    bullets: [
      'Three concentric rings (80cm / 60cm / 40cm) providing magnificent scale',
      'Independently adjustable steel cables enabling angled or horizontal configurations',
      '360-degree crystal refraction casting shimmering rainbows across ceilings',
      'Integrated dimmable driver compatible with universal architectural dimmers'
    ]
  },
  {
    refId: 'LTG-26',
    fileName: 'lighting-26.jpg',
    title: 'EXPLODING FIREWORKS CRYSTAL SPHERE',
    category: 'STATEMENT CHANDELIERS & PENDANTS',
    subtitle: 'Dandelion Spoke • Starburst Crystal • Capsule Company',
    desc: 'Dramatic celestial starburst chandelier resembling a frozen cosmic explosion of crystal sparks. Center sphere extends hundreds of polished brass spokes tipped with faceted crystal blossoms.',
    bullets: [
      'Sculptural starburst geometry acting as an instant conversational focal piece',
      'Faceted K9 crystal blossoms capturing and reflecting ambient room light',
      'Central spherical core housing multiple low-voltage micro LED capsule lamps',
      'Spectacular visual presence in double-height foyer staircases and salons'
    ]
  },
  {
    refId: 'LTG-27',
    fileName: 'lighting-27.jpg',
    title: 'SPIRALING HELICAL CRYSTAL RIBBON',
    category: 'STATEMENT CHANDELIERS & PENDANTS',
    subtitle: 'Double Helix Curve • Contemporary Glamour • Capsule Company',
    desc: 'Hypnotic spiraling helix chandelier twisting gracefully downward through vertical air space. Crafted with interlocking chrome ribbons embedded with high-sparkle crystals and internal LED runners.',
    bullets: [
      'Fluid continuous double-helix spiral design drawing eyes upward to high ceilings',
      'High-grade precision crystal inlay along the outer ribbon boundaries',
      'Integrated high-efficiency LED strip producing smooth continuous ribbon light',
      'Mirror-finish polished chrome ceiling canopy reflecting the twisting sculpture'
    ]
  },
  {
    refId: 'LTG-28',
    fileName: 'lighting-28.jpg',
    title: 'MAGNETIC TRACK & RECESSED PROFILE CEILING',
    category: 'ARCHITECTURAL PROFILE LIGHTS',
    subtitle: 'Multi-Track System • Moveable Modules • Capsule Company',
    desc: 'Ultra-modern living room architectural ceiling integrating recessed magnetic tracks with perimeter indirect cove profiles. Allows effortless repositioning of floodlights, spotlights, and pendant drops along tracks.',
    bullets: [
      '48V DC safe low-voltage magnetic track system with tool-free click-in modules',
      'Mix-and-match linear diffusers, adjustable directional spots, and pendant lights',
      'Coordinated perimeter ceiling cove providing soft ambient background glow',
      'Smart app and scene controller integration with programmable lighting zones'
    ]
  },
  {
    refId: 'LTG-29',
    fileName: 'lighting-29.jpg',
    title: 'CASCADING WALL PROFILE LIGHT BLADES',
    category: 'ARCHITECTURAL PROFILE LIGHTS',
    subtitle: 'Asymmetric Vertical Fins • Plaster-In • Capsule Company',
    desc: 'Avant-garde architectural feature wall boasting staggered vertical plaster-in profile lines of varying heights. Replaces traditional wall decor with pure sculpted luminescence.',
    bullets: [
      'Staggered vertical light blade composition creating dramatic rhythm on accent walls',
      'Trimless mud-in aluminum channels painted directly into wall surface for clean finish',
      'Uniform 3000K warm white tone without visible LED diode spotting',
      'Ideal for hotel elevator lobbies, luxury stairwells, and contemporary foyer walls'
    ]
  },
  {
    refId: 'LTG-30',
    fileName: 'lighting-30.jpg',
    title: 'MODERN CUBIC PILLAR TOP FENCE LANTERN',
    category: 'OUTDOOR & LANDSCAPE LIGHTING',
    subtitle: 'Gate Post Fixture • Geometric Grid • Capsule Company',
    desc: 'Crisp contemporary cubic gate post and boundary wall fixture. Features an architectural dark grey louver grid enclosing an internal frosted diffuser for safe boundary perimeter illumination.',
    bullets: [
      'Heavy-duty cast aluminum base designed for pillar caps and boundary walls',
      'Four-sided horizontal light distribution illuminating driveway entrance gates',
      'IP65 water protection withstands intense monsoon rains and direct garden hoses',
      'Compatible with smart automation photocell relays for automated dusk activation'
    ]
  },
  {
    refId: 'LTG-31',
    fileName: 'lighting-31.jpg',
    title: 'CURVING MEANDERING GARDEN PATH CONTOUR',
    category: 'OUTDOOR & LANDSCAPE LIGHTING',
    subtitle: 'Flexible IP68 Neon • Seamless Curve • Capsule Company',
    desc: 'Enchanting winding garden walkway defined by continuous flexible waterproof LED contour ribbons nestled alongside stone pebble borders and lush green lawns.',
    bullets: [
      'Flexible silicone IP68 neon strip capable of following fluid organic curved paths',
      'Zero-glare horizontal beam washing walking path without blinding strolling guests',
      'Low 24V safe operating voltage safely installed near irrigation and lawn turf',
      'Warm 2700K temperature creating a magical fairy-tale evening garden landscape'
    ]
  },
  {
    refId: 'LTG-32',
    fileName: 'lighting-32.jpg',
    title: 'MODERN MULTI-BAR LINEAR CEILING FIXTURE',
    category: 'ARCHITECTURAL PROFILE LIGHTS',
    subtitle: 'Layered Golden Tubes • Flush Mount • Capsule Company',
    desc: 'Bold modern ceiling chandelier composed of staggered horizontal brass tubes with integrated acrylic diffusers. Provides wide-angle ambient room coverage in rooms with standard ceiling heights.',
    bullets: [
      'Layered multi-axis linear profile rods creating dynamic geometric depth',
      'Brushed warm gold electroplated finish complementing contemporary luxury furnishings',
      'High-lumen output (5000+ lm) capable of serving as primary living room illumination',
      'Flush mount ceiling canopy for spaces where low hanging chandeliers are unsuitable'
    ]
  },
  {
    refId: 'LTG-33',
    fileName: 'lighting-33.jpg',
    title: 'ARCHITECTURAL SLIT BEAM GARDEN BOLLARD',
    category: 'OUTDOOR & LANDSCAPE LIGHTING',
    subtitle: 'Integrated Grazing Slit • Dark Grey • Capsule Company',
    desc: 'Sophisticated architectural garden bollard post featuring an angled internal light slit that directs a crisp sheet of light down onto walkway pavers and surrounding ornamental shrubs.',
    bullets: [
      'Precision concealed optical chamber directing light strictly toward foot paths',
      'Rugged powder-coated aluminum column impervious to coastal salt and humidity',
      'Internal anchor flange bolted to concrete footing for rock-solid stability',
      'Warm 3000K LED module providing high visibility with zero upward light pollution'
    ]
  },
  {
    refId: 'LTG-35',
    fileName: 'lighting-35.jpg',
    title: 'GRAND EMPIRE FACETED CRYSTAL CHANDELIER',
    category: 'STATEMENT CHANDELIERS & PENDANTS',
    subtitle: 'Faceted Waterfall • Matte Black Rim • Capsule Company',
    desc: 'Sumptuous statement chandelier combining a bold matte black metal crown with cascading concentric tiers of triangular multifaceted crystal icicles. Radiates opulent amber crystal sparkle.',
    bullets: [
      'Bold architectural matte black outer rim creating dramatic color contrast',
      'Dense triple-layer crystal waterfall reflecting warm amber internal lighting',
      'Impressive 90cm diameter making it a breathtaking foyer and living room centerpiece',
      'Pre-assembled crystal tiers for straightforward ceiling suspension installation'
    ]
  },
  {
    refId: 'LTG-36',
    fileName: 'lighting-36.jpg',
    title: 'SUSPENDED HONEYCOMB LED GRID SYSTEM',
    category: 'ARCHITECTURAL PROFILE LIGHTS',
    subtitle: 'Suspended Hex Grid • High Bay Output • Capsule Company',
    desc: 'Suspended aircraft-cable hexagonal matrix lighting system. Features interlocking black aluminum profiles emitting high-output uniform white light, ideal for design studios and luxury vehicle bays.',
    bullets: [
      'High-rigidity lightweight aluminum extrusion frame suspended on steel cables',
      'Interlocking multi-hex grid distributing uniform shadow-free work lighting',
      'High energy efficiency delivering 120 lm/W with flicker-free constant current driver',
      'Industrial-grade powder coating resistant to humidity, heat, and airborne dust'
    ]
  },
  {
    refId: 'LTG-37',
    fileName: 'lighting-37.jpg',
    title: 'FLOWERBED AMBIENT BOLLARD POST',
    category: 'OUTDOOR & LANDSCAPE LIGHTING',
    subtitle: 'Soft White Opal • Landscape Post • Capsule Company',
    desc: 'Refined garden bollard posts nestled amongst blooming white hydrangeas and stone garden pavers. Bathes surrounding shrubbery in gentle pools of warm white light.',
    bullets: [
      'Opal cylindrical diffuser softening diode glare while providing wide ground reach',
      'Matte black body contrasting beautifully against natural garden foliage',
      'Submersible waterproof wiring connections preventing moisture short-circuits',
      'Low energy consumption making whole-night garden illumination cost-effective'
    ]
  },
  {
    refId: 'LTG-38',
    fileName: 'lighting-38.jpg',
    title: 'LINEAR BRASS DINING BAR WITH FROSTED GLOBES',
    category: 'STATEMENT CHANDELIERS & PENDANTS',
    subtitle: 'Brushed Brass Rail • Opal Spheres • Capsule Company',
    desc: 'Sleek mid-century modern linear pendant chandelier featuring a horizontal brushed brass beam suspending five frosted opal glass globes. Casts soft, flattering light across dining tables and breakfast counters.',
    bullets: [
      'Warm brushed brass electroplated finish protected by transparent anti-tarnish lacquer',
      'Hand-blown matte opal glass globes creating 360-degree glare-free illumination',
      'Linear 1.3m horizontal bar proportioned for 6 to 8-seat contemporary dining tables',
      'Adjustable dual suspension rods accommodating flat or sloped ceiling planes'
    ]
  },
  {
    refId: 'LTG-39',
    fileName: 'lighting-39.jpg',
    title: 'MODERN INFINITY LOOP TWISTED CHANDELIER',
    category: 'STATEMENT CHANDELIERS & PENDANTS',
    subtitle: 'Interlocking Infinity Curves • Gold Finish • Capsule Company',
    desc: 'Mesmerizing sculptural modern pendant featuring two interwoven infinity ribbon loops with seamless silicone LED diffusers. Floats gracefully above contemporary living room lounges.',
    bullets: [
      'Continuous seamless fluid ribbon sculpture with zero visible fasteners',
      'Warm brushed champagne gold exterior finish with inward-glowing silicone diffuser',
      'Smooth 0-100% dimming compatible with architectural smart wall dimmers',
      'Ultra-thin aircraft cables giving the impression of weightless golden loops'
    ]
  },
  {
    refId: 'LTG-40',
    fileName: 'lighting-40.jpg',
    title: 'CELESTIAL ORB WITH INTERLOCKING HALO RINGS',
    category: 'STATEMENT CHANDELIERS & PENDANTS',
    subtitle: 'Pivoting Gimbal Rings • Crystal Core • Capsule Company',
    desc: 'Futuristic sculptural chandelier combining nested concentric gold gimbal rings that pivot around an illuminated central crystal orb. A dazzling conversation piece for double-height entrances.',
    bullets: [
      'Three concentric rings that can be independently rotated into custom orbital geometries',
      'Central multifaceted crystal core capturing and scattering intense sparkling highlights',
      'Integrated LED strips along ring edges creating multi-angle dimensional light',
      'Durable polished brass plating with high-spec silicone protective overcoat'
    ]
  },
  {
    refId: 'LTG-41',
    fileName: 'lighting-41.jpg',
    title: 'MINIMALIST LIVING ROOM RECESSED PROFILE TRAY',
    category: 'ARCHITECTURAL PROFILE LIGHTS',
    subtitle: 'Perimeter LED Cove • Slender Pendant • Capsule Company',
    desc: 'Sophisticated living room ceiling composition featuring a perimeter recessed profile channel with asymmetrical linear accents, complemented by a delicate black pendant cluster.',
    bullets: [
      'Perimeter indirect cove throwing gentle ambient light across the ceiling vault',
      'Asymmetric linear profile details adding modern architectural personality',
      'Independent circuiting allowing soft cove evening relaxation or full room brightness',
      'Concealed aluminum profile preventing light leaks into gypsum joints'
    ]
  },
  {
    refId: 'LTG-42',
    fileName: 'lighting-42.jpg',
    title: 'STEPPED GARDEN LANDSCAPE STAIR PROFILE',
    category: 'OUTDOOR & LANDSCAPE LIGHTING',
    subtitle: 'Under-Tread Profile • Planter Wash • Capsule Company',
    desc: 'Exquisite outdoor landscape stair installation featuring concealed warm LED profiles embedded beneath natural stone treads. Accented by discrete spotlighting on lush garden greenery.',
    bullets: [
      'Custom IP67 aluminum step-nosing extrusion with downward-angled diffuser',
      'Illuminates stair treads clearly to prevent tripping while hiding the light diode',
      'Concealed low-voltage DC conduit runs embedded within stone masonry steps',
      'Harmonious warm 2700K hue highlighting the rich natural grain of slate and granite'
    ]
  },
  {
    refId: 'LTG-43',
    fileName: 'lighting-43.jpg',
    title: 'VILLA ENTRANCE CROSS-BEAM WALL SCONCE',
    category: 'OUTDOOR & LANDSCAPE LIGHTING',
    subtitle: 'Bi-Directional Sconce • Facade Accent • Capsule Company',
    desc: 'Architectural entrance lighting showcasing twin bi-directional black wall sconces flanking a solid wood entrance door. Projects sharp triangular light beams against concrete and stone walls.',
    bullets: [
      'Symmetrical upward and downward light cones emphasizing entrance door height',
      'IP65 sealed tempered glass lenses resistant to driving rain and tropical storms',
      'Dark non-glare fixture exterior disappearing into nighttime facade backgrounds',
      'High-efficiency COB LED array providing 50,000 hours of maintenance-free service'
    ]
  },
  {
    refId: 'LTG-44',
    fileName: 'lighting-44.jpg',
    title: 'CONCENTRIC OVAL TRAY WITH MAGNETIC SPOTS',
    category: 'ARCHITECTURAL PROFILE LIGHTS',
    subtitle: 'Double Oval Cove • Recessed Cylinders • Capsule Company',
    desc: 'Magnificent architectural ceiling feature comprising twin concentric oval gypsum trays bordered by warm LED cove profiles and centered by flush round spotlight pods.',
    bullets: [
      'Double curved oval ceiling coffer adding softness and luxury to formal living zones',
      'Indirect 2700K warm ambient glow bouncing off pure white reflective ceilings',
      'Centered architectural recessed downlight pods with dark micro-louvers',
      'Masterfully engineered profile curves fabricated with flexible gypsum profiles'
    ]
  },
  {
    refId: 'LTG-45',
    fileName: 'lighting-45.jpg',
    title: 'MODERN MATTE BLACK L-BAR OUTDOOR SCONCE',
    category: 'OUTDOOR & LANDSCAPE LIGHTING',
    subtitle: 'Minimalist L-Form • Wall Grazer • Capsule Company',
    desc: 'Ultra-contemporary outdoor wall light composed of a clean vertical black bar with an perpendicular horizontal return. Projects clean architectural illumination against exterior terrace walls.',
    bullets: [
      'Minimalist architectural silhouette crafted from precision-milled aluminum',
      'Sealed silicone gaskets and anti-corrosion marine powder coating',
      'Indirect wall reflection eliminating direct glare when viewing from patio chairs',
      'Slim profile complying with ADA walkway projection guidelines'
    ]
  },
  {
    refId: 'LTG-46',
    fileName: 'lighting-46.jpg',
    title: '4-WAY CROSS-BEAM OUTDOOR WALL WASHER',
    category: 'OUTDOOR & LANDSCAPE LIGHTING',
    subtitle: 'Quad-Beam Optics • Sculptural Facade • Capsule Company',
    desc: 'Compact square architectural wall washer projecting four crisp geometric light beams in an X-pattern across exterior walls. Turns exterior surfaces into luminous architectural sculptures.',
    bullets: [
      'Four precision optical collimator lenses casting 45-degree angled beam fans',
      'IP65 waterproof die-cast aluminum cube with internal heat-dissipating ribs',
      'Creates show-stopping decorative facade patterns on brick, stucco, and wood',
      'Energy efficient 8W total system power drawing minimal electricity'
    ]
  },
  {
    refId: 'LTG-47',
    fileName: 'lighting-47.jpg',
    title: 'CONTEMPORARY RECTANGULAR PERIMETER SCONCE',
    category: 'OUTDOOR & LANDSCAPE LIGHTING',
    subtitle: 'Perimeter Wall Row • Frosted Panel • Capsule Company',
    desc: 'Linear array of modern rectangular outdoor wall fixtures installed along a boundary wall walkway. Delivers clean uniform corridor illumination for villa perimeters and garden driveways.',
    bullets: [
      'Frosted tempered glass diffuser providing comfortable eye-level brightness',
      'Black architectural aluminum frame with hidden wall mounting screws',
      'Continuous row installation providing rhythm and safe nighttime navigation',
      'IP65 water and bug-sealed interior chamber preventing spiderwebs inside glass'
    ]
  },
  {
    refId: 'LTG-48',
    fileName: 'lighting-48.jpg',
    title: 'CONCENTRIC FLOATING HALO DOWNLIGHTS',
    category: 'ARCHITECTURAL PROFILE LIGHTS',
    subtitle: 'Recessed Ring Profile • Tri-CCT Switchable • Capsule Company',
    desc: 'Sleek concentric circular ring downlight fixture recessed flush into contemporary ceilings. Emits a smooth ring of warm indirect light, ideal for modern entrance lobbies and master suites.',
    bullets: [
      'Clean circular ring aperture with edge-lit micro-prism diffusion',
      'Tri-CCT switchable selector on driver for custom warm or neutral daylighting',
      'Super-slim ceiling recess profile fitting into shallow 50mm ceiling plenums',
      'High-performance 90 lm/W efficacy providing bright, glare-free ambient spread'
    ]
  },
  {
    refId: 'LTG-49',
    fileName: 'lighting-49.jpg',
    title: 'INDUSTRIAL CAGE PORCH PENDANT LANTERN',
    category: 'OUTDOOR & LANDSCAPE LIGHTING',
    subtitle: 'Cylindrical Slats • Amber Filament • Capsule Company',
    desc: 'Dramatic industrial exterior pendant lamp suspended by a rugged chain beneath an outdoor entryway arch. Features vertical metal cage slats surrounding an interior seeded glass cylinder.',
    bullets: [
      'Slotted vertical cage design creating dynamic shadow and light striations on walls',
      'Inner cylindrical seeded glass chamber protecting vintage LED filament bulb',
      'Heavy-duty adjustable steel chain rated for high exterior wind loads',
      'Damp-rated weatherproofing for outdoor porticos, cabanas, and covered gazebos'
    ]
  }
];

const finalModels = models.map((m, idx) => ({
  ...m,
  refId: `LTG-${String(idx + 1).padStart(2, '0')}`
}));

const outputPath = path.join(__dirname, '..', 'public', 'assets', 'lighting-fixtures', 'lighting-fixtures-data.json');
fs.writeFileSync(outputPath, JSON.stringify({
  collection: 'Capsule Company Lighting Design Collection 2026',
  totalModels: finalModels.length,
  orderedItems: finalModels
}, null, 2));

console.log(`Generated lighting-fixtures-data.json with ${finalModels.length} models!`);
