const fs = require('fs');
const path = require('path');

const models = [
  {
    refId: 'MHT-01',
    fileName: 'home-theater-01.jpg',
    title: 'ACOUSTIC LUXURY SALON',
    category: 'ACOUSTIC FABRIC WALLS',
    subtitle: 'Diamond Quilted Panels • Dolby Atmos 7.1.4 • Capsule Company',
    desc: 'Bespoke private cinema chamber wrapped in hand-stitched diamond-quilted acoustic fabric panels with integrated brass warm sconces. Engineered with high-efficiency sound diffusion foam cores and dual ergonomic leather recliners for an intimate audiophile viewing sanctuary.',
    bullets: [
      'Multi-layer NRC 0.85 acoustic fabric panels dampening flutter echoes and low-frequency boom',
      'Ceiling-mounted 4K true laser projector calibrated for DCI-P3 cinema color reproduction',
      'Concealed Dolby Atmos architectural surround sound speakers embedded behind acoustic walls',
      'Dual electric reclining loungers with whisper-quiet motorized headrests and lumbar support'
    ]
  },
  {
    refId: 'MHT-02',
    fileName: 'home-theater-02.jpg',
    title: 'TIERED RECLINER SUITE',
    category: 'TIERED RECLINER THEATERS',
    subtitle: 'Dual-Tier Elevation • Gallery Poster Backlit • Capsule Company',
    desc: 'Authentic commercial-grade cinema experience scaled for private residences, featuring a two-tier elevated platform with luxury top-grain leather recliners. Complemented by custom LED-backlit acrylic movie poster lightboxes and high-density acoustic carpeting.',
    bullets: [
      'Architectural dual-tier riser platform with vibration-dampening acoustic subflooring',
      'Eight motor-controlled leather cinema seats with individual beverage coolers and USB ports',
      'Bespoke perimeter movie poster lightbox gallery with flush architectural reveal trims',
      '135-inch acoustically transparent woven projection screen hiding front tri-amplified speakers'
    ]
  },
  {
    refId: 'MHT-03',
    fileName: 'home-theater-03.jpg',
    title: 'COFFERED TIMBER CINEMA',
    category: 'COFFERED TIMBER & TUFTED',
    subtitle: 'Solid Teak Beams • Deep Button Tufting • Capsule Company',
    desc: 'Architectural blend of traditional teak coffered ceilings and modern dark acoustic walls. Features deep-buttoned matte black acoustic wall cushions, custom solid wood AV credenza, and an expansive modular sectional designed for family film screenings.',
    bullets: [
      'Artisanal solid teak wood coffered ceiling grid acting as natural acoustic sound scatterers',
      'Wall-to-wall acoustic tufted sound absorption pads minimizing standing room waves',
      'Custom handcrafted walnut media console housing hidden AV receivers with active cooling fans',
      'Plush multi-seat L-sectional sofa upholstered in stain-resistant micro-suede velvet'
    ]
  },
  {
    refId: 'MHT-04',
    fileName: 'home-theater-04.jpg',
    title: 'WARM AMBIENT OLED SANCTUARY',
    category: 'MINIMALIST LUXURY LOUNGES',
    subtitle: '98\" Ultra HD OLED • Halo Cove Backlighting • Capsule Company',
    desc: 'Sophisticated modern home theater living space anchored by an immense 98-inch 4K OLED display surrounded by 2700K indirect halo lighting. Features low-profile Italian-styled floor sectionals and floating media joinery.',
    bullets: [
      'High-dynamic range 98-inch cinema OLED display delivering infinite contrast and zero light bleed',
      'Concealed architectural perimeter LED profile delivering uniform shadowless bias lighting',
      'Ultra-deep Italian-inspired modular chaise lounge in heavy-weave oatmeal chenille fabric',
      'Floating matte lacquer and smoked oak equipment bench with invisible magnetic wiring raceways'
    ]
  },
  {
    refId: 'MHT-05',
    fileName: 'home-theater-05.jpg',
    title: 'ARCHITECTURAL STRIP LIGHT LOUNGE',
    category: 'LINEAR LIGHT ARCHITECTURE',
    subtitle: 'Continuous LED Channels • Deep Modular Cloud • Capsule Company',
    desc: 'Bold contemporary movie lounge defined by continuous architectural LED light ribbons wrapping seamlessly from the wall into the ceiling plane. Finished in deep moody charcoal acoustics with an oversized modular cloud daybed.',
    bullets: [
      'Flush architectural aluminum plaster-in LED channels with smooth 0-100% magnetic dimming',
      'Dark acoustic wall paneling engineered to eliminate reflection glares during movie projection',
      'Deep multi-tier modular lounge seating with feather-down pillow topping for ultimate relaxation',
      'Subwoofer isolation platform integrated beneath seating to deliver tactile sub-bass punch'
    ]
  },
  {
    refId: 'MHT-06',
    fileName: 'home-theater-07.jpg',
    title: 'CONTEMPORARY DUAL-TIER THEATER',
    category: 'TIERED RECLINER THEATERS',
    subtitle: 'Vertical Sconce Blades • Leather Club Seats • Capsule Company',
    desc: 'Refined modern theater room with symmetrical vertical light blades that accentuate wall geometry. Equipped with tiered rows of premium black leather recliners and a dedicated center-stage acoustic sound bar platform.',
    bullets: [
      'Symmetrical architectural vertical sconce lighting providing ambient non-distracting navigation',
      'Dual-tier stepped seating layout ensuring 100% unobstructed sightlines for all viewers',
      'Heavy-duty commercial carpet underlay providing exceptional footstep impact sound deadening',
      'Precision room EQ tuning compensating for room modes and low-frequency resonance'
    ]
  },
  {
    refId: 'MHT-07',
    fileName: 'home-theater-08.jpg',
    title: 'GOLDEN COVE DAYBED CINEMA',
    category: 'WARM COVE & CELESTIAL',
    subtitle: 'Backlit Cloud Fresco • Oversized Velvet Daybed • Capsule Company',
    desc: 'Opulent sensory movie retreat featuring an expansive backlit ceiling cove illuminated with golden warm hues. Centered around a sumptuous double-wide velvet daybed lounger for the ultimate cozy cinematic escape.',
    bullets: [
      'Artisanal hand-textured ceiling cove with indirect 2400K ultra-warm amber perimeter illumination',
      'Double-depth master cinema daybed layered with velvet bolsters and heavyweight acoustic throws',
      'Dark non-reflective matte granite feature wall framing the screen for maximum visual pop',
      'Multi-zone smart automation integrating lighting, climate, and surround audio presets'
    ]
  },
  {
    refId: 'MHT-08',
    fileName: 'home-theater-09.jpg',
    title: 'JAPANDI FLUTED WOOD THEATER',
    category: 'FLUTED ACOUSTIC WOOD',
    subtitle: 'Fluted White Oak • Concealed Acoustic Core • Capsule Company',
    desc: 'Warm and tranquil Japandi entertainment lounge combining natural white oak fluted acoustic wall slats with concealed sound-dampening felt backing. Features relaxed low-profile floor seating and soothing perimeter ceiling illumination.',
    bullets: [
      'Architectural natural oak fluted slats mounted over recycled PET acoustic felt for sound absorption',
      'Recessed continuous cove lighting defining the ceiling perimeter with soft indirect glow',
      'Low-slung modular lounge seating and wool poufs creating an organic, grounded atmosphere',
      'Integrated hidden storage cabinetry concealing game consoles, media players, and switchgear'
    ]
  },
  {
    refId: 'MHT-09',
    fileName: 'home-theater-10.jpg',
    title: 'BOHO CLOUD PIT MOVIE ROOM',
    category: 'COZY CUSHION PITS',
    subtitle: 'Rustic Timber Beams • Wall-to-Wall Floor Pit • Capsule Company',
    desc: 'Intimate boho-chic movie haven featuring exposed natural timber rafters, warm fairy light canopies, and a sunken wall-to-wall cloud cushion pit. Ideal for romantic movie evenings and cozy family gatherings.',
    bullets: [
      'Solid timber ceiling beams paired with warm micro-LED string lighting for dreamy ambiance',
      'Custom wall-to-wall floor pit mattress padded with high-resilience foam and down toppers',
      'Large ultra-short-throw 4K ambient light-rejecting (ALR) projection screen display',
      'Plush textured bouclé and bohemian knit pillows providing flexible ergonomic resting positions'
    ]
  },
  {
    refId: 'MHT-10',
    fileName: 'home-theater-11.jpg',
    title: 'STARLIGHT FIBER-OPTIC VAULT',
    category: 'WARM COVE & CELESTIAL',
    subtitle: 'Twinkling Starlight Ceiling • Wall-to-Wall Screen • Capsule Company',
    desc: 'Immersive deep-space cinema environment boasting a handcrafted fiber-optic starlight ceiling with shooting star effects. Complemented by wall-to-wall acoustic charcoal felt paneling and high-pile shag carpeting.',
    bullets: [
      'Over 600 individually drilled fiber-optic starry constellation points with variable twinkle modes',
      'Full wall-to-wall 2.39:1 Cinemascope acoustic projection screen with motorized side masking',
      'Ultra-dense charcoal polyester fiber wall acoustic panels eliminating room echo and reverberation',
      'Custom low-profile sectional sofa with wide ottomans upholstered in deep graphite performance velvet'
    ]
  },
  {
    refId: 'MHT-11',
    fileName: 'home-theater-12.jpg',
    title: 'SUNKEN ROUND PIT CINEMA',
    category: 'COZY CUSHION PITS',
    subtitle: 'Sunken Circular Lounge • Ambient Sconce Radiance • Capsule Company',
    desc: 'Dramatic architectural sunken conversation and cinema pit framed by multi-tier curved steps and warm indirect perimeter lighting. Centered around a round walnut low-table and framed by rich warm textures.',
    bullets: [
      'Architectural recessed pit construction lined with high-density underlay and plush carpeting',
      'Continuous curved banquet seating accommodating up to 10 guests in total cocooning comfort',
      'Architectural cross-beam ceiling with recessed low-glare dark-light LED spotlights',
      'Hidden 360-degree surround sound system integrated seamlessly inside the perimeter pit rim'
    ]
  },
  {
    refId: 'MHT-12',
    fileName: 'home-theater-13.jpg',
    title: 'CLASSIC ART-DECO WALNUT THEATER',
    category: 'COFFERED TIMBER & TUFTED',
    subtitle: 'Solid Walnut Paneling • LED Stair Step Profiles • Capsule Company',
    desc: 'Grand traditional cinema room showcasing rich natural American walnut wall wainscoting and classical coffered ceiling vaults. Features two elevated tiers with blue LED safety stair lights and commercial recliners.',
    bullets: [
      'Fine architectural walnut millwork with concealed acoustic insulation back cavities',
      'Illuminated dual-tier stepped risers with dimmable low-voltage blue safety step treads',
      'Full motorized black leather club chairs featuring power reclining, lumbar adjustment, and cup holders',
      'Perforated fixed-frame projection screen paired with behind-screen audiophile center-channel array'
    ]
  },
  {
    refId: 'MHT-13',
    fileName: 'home-theater-14.jpg',
    title: 'CURVED LUXURY HORIZON SUITE',
    category: 'MINIMALIST LUXURY LOUNGES',
    subtitle: 'Velvet Crescent Lounge • Copper Architectural Glow • Capsule Company',
    desc: 'State-of-the-art contemporary private screening room featuring an iconic curved crescent velvet sofa and matching armchairs. Accented with warm copper linear architectural lighting and dark acoustic wall linings.',
    bullets: [
      'Custom-engineered curved crescent daybed sofa optimizing viewing angles toward the center screen',
      'Perimeter copper-tinted cove lighting and dark architectural reveals creating theatrical contrast',
      'Reference-grade 4K laser projection delivering vibrant HDR10+ cinematic colors and deep blacks',
      'Concealed discrete acoustic bass traps tucked neatly into room corners behind fabric facades'
    ]
  },
  {
    refId: 'MHT-14',
    fileName: 'home-theater-15.jpg',
    title: 'CELESTIAL STARLIGHT PAVILION',
    category: 'WARM COVE & CELESTIAL',
    subtitle: 'Constellation Ceiling • Champagne Velvet Seating • Capsule Company',
    desc: 'Breathtaking celestial cinema pavilion crowned with a starry constellation ceiling framed by architectural cove borders. Features symmetrical fluted acoustic wall columns and two tiers of champagne velvet cinema recliners.',
    bullets: [
      'Architectural fiber-optic celestial ceiling with custom constellation maps and meteor trails',
      'Vertical fluted timber acoustic pilasters housing bidirectional warm architectural sconces',
      'Two elevated tiers of custom champagne-toned performance velvet motorized recliner loungers',
      'Acoustically calibrated 9.4.4 Dolby Atmos speaker layout providing holographic 3D sound immersion'
    ]
  },
  {
    refId: 'MHT-15',
    fileName: 'home-theater-16.jpg',
    title: 'MINIMALIST SCANDINAVIAN CINEMA',
    category: 'FLUTED ACOUSTIC WOOD',
    subtitle: 'Blonde Oak Cabinetry • High-Gain Screen • Capsule Company',
    desc: 'Clean Nordic-inspired home theater boasting blonde oak custom cabinetry, concealed equipment bays, and soft ambient warm potlights. Perfectly balances daytime multi-use family living with evening high-impact cinema.',
    bullets: [
      'Seamless blonde oak millwork with acoustic perforated speaker grill cloth fronts',
      'Tensioned ambient-light-rejecting (ALR) high-gain projection screen for crisp daytime viewing',
      'Recessed low-glare architectural downlights with circadian warm-dim technology',
      'Modular cream linen floor seating and plush ottoman cubes for versatile casual seating arrangements'
    ]
  }
];

const outputPath = path.join(__dirname, '..', 'public', 'assets', 'mini-home-theater', 'mini-home-theater-data.json');
fs.writeFileSync(outputPath, JSON.stringify({
  collection: 'Capsule Company Mini Home Theater Design Collection 2026',
  totalModels: models.length,
  orderedItems: models
}, null, 2));

console.log(`Generated mini-home-theater-data.json with ${models.length} models!`);
