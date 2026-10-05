const fs = require('fs');
const path = require('path');

const catalogueDefinitions = [
  {
    id: 'wardrobe',
    name: 'Wardrobe',
    codePrefix: 'WARD',
    categoryEyebrow: 'WARDROBE CATALOGUE',
    coverTitle: 'WARDROBE',
    coverSubtitle: 'BESPOKE STORAGE & DRESSING SUITES',
    editionYear: 'LATEST 2026',
    count: 30,
    imageFn: (i) => `/assets/gallery/customized-wardrobe/customized-wardrobe-${String(i).padStart(2, '0')}.jpg`,
    names: [
      'AURORA', 'NOVA', 'ELARA', 'SIERRA', 'VERA', 'ALBA', 'EMBER', 'WALNUT', 'SORA', 'TERRA',
      'SAGE', 'BOTANICA', 'MINTA', 'TAUPE', 'GRAPHITE', 'CYPRESS', 'NORDEN', 'DUNE', 'HEARTH', 'REGALIA',
      'VERDANT', 'SIENNA', 'BOSCO', 'AURELIA', 'EIRA', 'NOIRE', 'LUMERA', 'VERONA', 'VANTA', 'LUMORA'
    ],
    moods: [
      'Contemporary • High-Gloss • Refined', 'Bronze Glass • Architectural • Ambient', 'Matte Charcoal • Smoked Glass • Layered',
      'Minimal Linear • Frosted Glass • Pure', 'Warm Oak • Seamless Profile • Scandinavian', 'Fluted Texture • Integrated LED • Luxury',
      'Two-Tone Monolith • Soft Close • Modern', 'Walk-In Dressing • Backlit Shelving • Elite', 'Dark Espresso • Gold Accents • Tailored',
      'Muted Cashmere • Handleless Push • Clean', 'Tinted Mirror • Black Aluminum • Sleek', 'Natural Walnut • Open Niches • Warm',
      'Urban Industrial • Steel Accents • Geometric', 'Soft Champagne • Velvet Liners • Elegant', 'Floating Wardrobe • Underglow • Minimal',
      'Sliding Panels • Trackless Glide • Quiet', 'Dual Tone • Ash Veneer • Composed', 'Linear Louvres • Natural Ventilation • Calm',
      'Gloss White • Rose Gold Trims • Polished', 'Full Height Storage • Corner Optimizer • Grand', 'Fluted Oak • Concealed Hardware • Organic',
      'Midnight Blue • Warm Glow • Statement', 'Slate Grey • Textured Finish • Urban', 'Frameless Glass • Ambient Vitrine • Chic',
      'Warm Greige • Integrated Dresser • Balanced', 'Lacquered Ebony • Brass Inlay • Haute', 'Sand Dune • Subtle Geometry • Timeless',
      'Modular Dressing • Central Island • Prestige', 'Opal Glass • Slim Profiles • Luminous', 'Architectural Suite • Master Bedroom • Supreme'
    ],
    descTemplates: [
      'A contemporary full-height wardrobe featuring flush high-gloss lacquer panels, integrated gold profile handles, and lower concealed soft-close drawers for refined bedroom organization.',
      'An architectural tinted glass wardrobe framed in slim black profiles with warm interior lighting. The transparent composition showcases clothing with boutique elegance while maintaining an airy spatial feel.',
      'A sophisticated dual-zone wardrobe blending matte charcoal cabinetry with illuminated smoked-glass sections and integrated open display shelving. The contrast between solid and luminous volumes creates an inviting bedroom focal point.',
      'A streamlined floor-to-ceiling wardrobe defined by its seamless flush doors, integrated vertical j-pull channels, and clean monolithic presence suited for minimal urban bedrooms.',
      'Warm natural oak cabinetry detailed with subtle horizontal grain continuity and concealed soft-close runners, creating a serene and grounded bedroom aesthetic.',
      'A tactile wardrobe design featuring rhythmic vertical fluting, integrated warm perimeter lighting, and brushed metallic hardware for a rich textural experience.',
      'A two-tone contemporary wardrobe pairing deep matte graphite doors with warm timber display bays, balancing concealed hanging storage with open accessory shelves.',
      'An open-concept walk-in dressing wardrobe equipped with continuous LED shelf illumination, specialized tie and jewelry trays, and full-height shoe galleries.',
      'Rich espresso-stained wood cabinetry accentuated with delicate champagne gold handles and crown-to-skirting architectural framing for high-end master suites.',
      'Soft cashmere-toned wardrobe shutters with handleless touch-to-open mechanisms and uninterrupted vertical planes that maximize perceived bedroom space.',
      'Floor-to-ceiling tinted mirror wardrobe shutters that reflect ambient bedroom light while visually doubling the sense of room depth and openness.',
      'Natural walnut veneer paired with integrated warm-lit display alcoves, providing dedicated spaces for evening accessories and decorative interior accents.',
      'Industrial-inspired contemporary wardrobe with dark powder-coated framing, charcoal matte laminates, and exposed architectural hardware detailing.',
      'Gentle champagne lacquer wardrobe panels complemented by plush interior textile linings and bespoke modular compartments for comprehensive wardrobe organization.',
      'A cantilevered floating wardrobe module featuring subtle under-cabinet ambient floor wash lighting, evoking a feeling of effortless lightness and modern poise.',
      'Smooth sliding wardrobe system with top-hung silent tracks, expansive acoustic-dampened sliding leaves, and integrated dust-seal edge profiles.',
      'Balanced dual-tone wardrobe composition contrasting Nordic ash wood grain with satin white upper lofts, providing ample high-capacity seasonal storage.',
      'Fine louvred timber shutters that encourage subtle air circulation while introducing a timeless, handcrafted character into modern bedroom interiors.',
      'Crisp high-gloss white wardrobe shutters accented with slim vertical rose gold trims, offering a luminous and spotless aesthetic for sunlit bedrooms.',
      'Full-height architectural wardrobe extending into corner alcoves with bi-fold corner access hardware, ensuring zero wasted storage space.',
      'Vertical fluted oak panels paired with seamless push-latch upper lofts, establishing an organic textural rhythm across the bedroom accent wall.',
      'Deep midnight blue wardrobe cabinetry featuring warm brass knurled handles and integrated wardrobe rail illumination for a dramatic luxury statement.',
      'Textured slate grey laminate panels with contrasting matte black profile channels, designed for durable everyday functionality in contemporary apartments.',
      'Full-aperture frameless glass wardrobe featuring sensor-activated internal strip lighting and micro-perforated dark aluminum rear ventilation panels.',
      'Warm greige-toned wardrobe with an integrated vanity mirror console, built-in drawer organizers, and dedicated dressing lighting.',
      'Lacquered ebony cabinetry detailed with geometric brass inlays and soft-touch interior surfaces, crafted for bespoke master bedroom penthouses.',
      'Earthy sand-dune textured finish with soft shadowline bevels, harmonizing effortlessly with neutral bedroom textiles and warm timber flooring.',
      'Comprehensive master dressing system incorporating modular wardrobe columns, an integrated accessory dresser, and full-length dressing mirrors.',
      'Opaline frosted glass wardrobe doors that softly diffuse internal illumination while keeping garment storage completely private and uncluttered.',
      'An expansive architectural wardrobe suite featuring tailored hanging heights, pull-out trouser racks, and ceiling-integrated perimeter coves.'
    ]
  },
  {
    id: 'modular-kitchen',
    name: 'Modular Kitchen',
    codePrefix: 'KIT',
    categoryEyebrow: 'MODULAR KITCHEN CATALOGUE',
    coverTitle: 'MODULAR KITCHEN',
    coverSubtitle: 'INNOVATIVE CULINARY ARCHITECTURE & JOINERY',
    editionYear: 'LATEST 2026',
    count: 30,
    imageFn: (i) => `/assets/gallery/modular-kitchen/modular-kitchen-${String(i).padStart(2, '0')}.jpg`,
    names: [
      'AZURE', 'OAKLINE', 'VERA', 'ALBA', 'EMBER', 'WALNUT', 'SORA', 'TERRA', 'SAGE', 'BOTANICA',
      'MINTA', 'TAUPE', 'GRAPHITE', 'CYPRESS', 'NORDEN', 'DUNE', 'HEARTH', 'REGALIA', 'VERDANT', 'SIENNA',
      'BOSCO', 'AURELIA', 'EIRA', 'NOIRE', 'LUMERA', 'VERONA', 'VANTA', 'VANTERA', 'NORELLE', 'MARLOWE'
    ],
    moods: [
      'Cool • Contemporary • Clean • Sophisticated', 'Warm • Natural • Minimal • Architectural', 'Natural • Calm • Organic • Inviting',
      'Clean • Bright • Refined • Modern', 'Warm • Refined • Inviting • Detailed', 'Rich • Timeless • Sophisticated • Natural',
      'Minimal • Seamless • Contemporary • Pure', 'Earthy • Bold • Contemporary • Grounded', 'Calm • Refined • Contemporary • Soft',
      'Organic • Expressive • Warm • Connected', 'Fresh • Sleek • Contemporary • Luminous', 'Warm • Compact • Sophisticated • Linear',
      'Bold • Sleek • Architectural • Monolith', 'Elegant • Earthy • Composed • Timeless', 'Light • Natural • Functional • Nordic',
      'Soft • Warm • Minimal • Elegant', 'Warm • Refined • Inviting • Culinary', 'Luxurious • Warm • Sophisticated • Grand',
      'Natural • Refined • Contemporary • Olive', 'Warm • Natural • Elegant • Residential', 'Rich • Organic • Timeless • Textured',
      'Calm • Contemporary • Sophisticated • Blue', 'Warm • Organic • Effortless • Oak', 'Bold • Warm • Sophisticated • Charcoal',
      'Elegant • Bright • Functional • Polished', 'Classic • Rich • Elegant • Traditional', 'Elegant • Contemporary • Refined • Champagne',
      'Sophisticated • Warm • Contemporary • Fluted', 'Minimal • Textured • Sophisticated • Linear', 'Bold • Classic • Refined • Heritage'
    ],
    descTemplates: [
      'A refined contemporary kitchen combining soft azure cabinetry with crisp white overhead units, dark glass accents and a marble-inspired backsplash for an airy spatial feel.',
      'A thoughtfully composed straight kitchen featuring continuous light-oak cabinetry, clean flat-panel fronts and seamlessly integrated built-in appliances.',
      'A warm nature-inspired kitchen bringing together light wood textures, open display shelving and understated black hardware designed for relaxed everyday living.',
      'A sophisticated composition of warm light-wood cabinetry and crisp white fronts, centered around linear simplicity and ergonomic workflow efficiency.',
      'A contemporary wood-finished kitchen featuring open spice display shelving, integrated warm LED under-cabinet illumination, and a seamless stone backsplash.',
      'A statement kitchen built around rich walnut tones, soft neutral overhead cabinetry, and integrated appliances that establish a timeless luxury aesthetic.',
      'A minimalist straight-line kitchen defined by its uninterrupted continuous fronts, handleless Gola profiles, and subtle fluted ceramic backsplash.',
      'A character-rich kitchen balancing textured natural timber with muted blue-grey cabinetry and integrated full-height pantry storage.',
      'A sophisticated culinary space defined by muted sage cabinetry, deep charcoal countertops, and warm illuminated wood display niches.',
      'A biophilic-inspired kitchen combining muted botanical green cabinetry with natural timber overheads and expansive counter prep surfaces.',
      'A fresh contemporary kitchen pairing soft mint cabinetry with warm timber countertops, high-gloss upper storage, and integrated cooking appliances.',
      'A refined compact straight-line kitchen designed around a soft taupe palette, integrated oven and hob, and slimline open bottle storage.',
      'A dramatic monochromatic kitchen featuring deep graphite grey fronts, crisp white engineered stone counters, and concealed soft-close drawers.',
      'A balanced two-tone kitchen pairing muted olive lower units with warm beige overheads, illuminated display niches, and a marble splashback.',
      'A Scandinavian-inspired kitchen combining matte white cabinetry, natural wood accents, open display shelves, and classic subway wall tiling.',
      'A calm and elegant kitchen defined by warm taupe finishes, continuous linear geometry, and subtle under-cabinet ambient glow.',
      'A welcoming culinary space featuring natural wood textures, soft neutral cabinetry, and an integrated dining extension counter.',
      'A luxury statement kitchen showcasing rich walnut woodwork, champagne cabinetry, gold hardware accents, and illuminated glass display bays.',
      'An earthy composition of muted olive cabinetry, natural stone counters, full-height appliance integration, and warm wooden accent shelves.',
      'A refined residential kitchen pairing warm natural timber with soft cream upper cabinets, minimal hardware, and a durable quartz countertop.',
      'A textured artisanal kitchen bringing together rich timber cabinetry, deep green glossy wall tiles, and warm brass kitchen fixtures.',
      'A serene kitchen composition defined by soft blue-grey cabinetry, illuminated fluted-glass display units, and clean white quartz worktops.',
      'An organic minimalist kitchen celebrating natural oak wood grains, generous drawer organization, and contrasting deep black hardware.',
      'A striking contrast of rich wood-grain overhead units and deep charcoal base cabinets anchored by a continuous full-height stone backsplash.',
      'A luminous contemporary kitchen pairing soft grey matte cabinetry with illuminated display units, tall pantry storage, and black profile handles.',
      'A timeless traditional-modern kitchen with rich walnut raised-panel shutters, arched glass cabinets, and warm ambient cornice lighting.',
      'A sophisticated kitchen uniting warm beige cabinetry with bold black frame profiles, fluted glass displays, and integrated extractor housing.',
      'A modern kitchen featuring matte taupe fronts, illuminated display showcases, fluted texture back panels, and deep pot-and-pan drawers.',
      'An understated linear kitchen defined by soft beige cabinetry, fluted vertical textures, and continuous concealed baseboard lighting.',
      'A distinguished kitchen design bringing together deep navy shaker cabinetry, glass-front display storage, and brushed metallic hardware.'
    ]
  },
  {
    id: 'beds',
    name: 'Beds',
    codePrefix: 'BED',
    categoryEyebrow: 'BEDS CATALOGUE',
    coverTitle: 'BEDS COLLECTION',
    coverSubtitle: 'BESPOKE BEDROOM SUITES & ARCHITECTURAL PLATFORMS',
    editionYear: 'LATEST 2026',
    count: 28,
    imageFn: (i) => `/assets/catalogues/beds/bed-${String(i).padStart(2, '0')}.jpg`,
    names: [
      'LUNA', 'ARLO', 'MIRA', 'SOL', 'KREA', 'HAVEN', 'SERENE', 'DORMIO', 'SLEEK', 'NEST',
      'PLUSH', 'VALE', 'OASIS', 'SOMNUS', 'VELVET', 'NOCTURNE', 'ALCOVE', 'SNOOZE', 'MEADOW', 'SILK',
      'DRIFT', 'MORPHEUS', 'CLOUD', 'ZEPHYR', 'HORIZON', 'ASTRAL', 'COVE', 'ZEN'
    ],
    moods: [
      'Upholstered Luxury • Fluted Wall • Ambient', 'Low Platform • Walnut Veneer • Minimal', 'Channel Tufted • Warm Bouclé • Soft',
      'Floating Frame • Concealed Lighting • Modern', 'Architectural Headboard • Integrated Nightstands • Sleek', 'Curved Headboard • Linen Weave • Relaxed',
      'Wingback Profile • Velvet Finish • Regal', 'Hydraulic Storage • Tailored Fabric • Practical', 'Scandinavian Ash • Slatted Headboard • Airy',
      'Padded Leatherette • Deep Charcoal • Monolith', 'Oversized Backing • Brass Inlays • Luxury', 'Japanese Minimal • Solid Teak • Grounded',
      'Dual Cushion Headrest • Sand Fabric • Ergonomic', 'Extended Wall Paneling • Warm LED Coves • Grand', 'Textured Suede • Floating Base • Urban',
      'Curved Geometry • Ivory Upholstery • Organic', 'Linear Fluting • Oak Framework • Refined', 'Low Slung Bed • Integrated Bedside Shelves • Zen',
      'Tufted Velvet • Champagne Trims • Sophisticated', 'Heavy Timber Plinth • Rustic Modern • Timeless', 'Wrap-Around Headboard • Acoustic Padding • Cozy',
      'Slimline Metal Frame • Leather Accents • Contemporary', 'Cantilevered Platform • Underbed Glow • Sleek', 'Soft Pillow Back • Neutral Weave • Comfort',
      'Monolithic Stone Effect • Integrated Ledges • Bold', 'Modular Bedroom Suite • Walnut & Linen • Master', 'Subtle Arc Headboard • Warm Neutral • Serene',
      'Grid Tufted Headboard • Compact Frame • Clean'
    ],
    descTemplates: [
      'An exquisite master suite bed featuring an extended fluted wall backdrop, plush velvet headboard upholstery, and integrated warm vertical LED light channels.',
      'A low-profile minimalist platform bed crafted in warm walnut veneer with cantilevered floating bedside ledges and seamless structural joints.',
      'A luxurious bed defined by vertical channel-tufted bouclé upholstery, soft curved corners, and an inviting tactile warmth designed for tranquil rest.',
      'A modern floating bed frame engineered with concealed interior supports and perimeter floor wash lighting for a weightless, architectural appearance.',
      'A full-wall architectural headboard system incorporating integrated nightstands, recessed reading spotlights, and warm acoustic timber slats.',
      'An organic curved-headboard bed upholstered in breathable natural linen weave, resting on understated cylindrical solid-oak support legs.',
      'A dramatic contemporary wingback bed with deep-padded charcoal velvet cushioning and tailored piping details suited for luxury master bedrooms.',
      'A functional luxury storage bed equipped with heavy-duty hydraulic lift mechanisms, generous dust-free base storage, and tailored fabric encasement.',
      'A Scandinavian-inspired light ash bed featuring an open slatted headboard that allows natural light and airflow to pass through effortlessly.',
      'A bold modern bed upholstered in durable matte leatherette with a monolithic square-quilted headboard and recessed matte black plinth.',
      'An oversized feature bed design with floor-to-ceiling upholstered modular panels accented by delicate brushed brass vertical separation inlays.',
      'A grounded Japanese-aesthetic platform bed showcasing solid teak joinery, wide perimeter borders, and low-center-of-gravity proportions.',
      'An ergonomic bed design featuring twin reclining soft-padded headrest cushions wrapped in textured oatmeal fabric for comfortable late-night reading.',
      'An expansive bedroom feature suite with extended acoustic fabric panels, integrated wireless charging nightstands, and soft ambient halo lighting.',
      'A sleek urban bed design combining textured suede upholstery with an elevated dark-stained floating timber base and clean shadowline profiles.',
      'A soft sculptural bed characterized by gentle organic curves, ivory textured upholstery, and seamlessly integrated cylindrical side tables.',
      'A refined bed design highlighting rhythmic vertical oak fluting across the headboard structure, paired with a low-profile tailored fabric mattress base.',
      'A serene low-slung bed frame with continuous side shelving that connects the sleeping platform with room joinery for a cohesive architectural feel.',
      'A sophisticated tufted bed framed in warm champagne metallic trims, featuring deep button detailing and ultra-dense supportive padding.',
      'A substantial solid-timber plinth bed celebrating the natural texture of aged hardwood, finished in an organic matte protective coat.',
      'A cocooning wrap-around bed with gently curved side wings that enhance bedroom acoustic tranquility and personal privacy.',
      'A contemporary bed featuring slimline dark steel corner profiles paired with hand-stitched tan saddle leather headboard straps.',
      'An architectural cantilevered bed frame with hidden center supports and warm underbed strip lighting that illuminates nighttime pathways.',
      'A deeply comfortable bed incorporating dual oversized pillow-style back cushions with removable, washable linen covers and a compact footprint.',
      'A modern stone-finish laminate feature bed framed with integrated bedside display ledges and concealed reading lighting.',
      'A comprehensive modular master bed suite that unifies the headboard, storage drawers, and matching wardrobe finishes into a single harmonious design.',
      'An elegant bed featuring a subtle arched headboard profile in warm neutral upholstery, bringing soft architectural geometry to modern bedrooms.',
      'A crisp grid-tufted platform bed with a compact structural frame, tailored corners, and generous clearance for effortless cleaning.'
    ]
  },
  {
    id: 'tv-units',
    name: 'TV Units',
    codePrefix: 'TV',
    categoryEyebrow: 'TV UNITS CATALOGUE',
    coverTitle: 'TV & MEDIA WALLS',
    coverSubtitle: 'ARCHITECTURAL ENTERTAINMENT CENTRES & MEDIA UNITS',
    editionYear: 'LATEST 2026',
    count: 28,
    imageFn: (i) => `/assets/catalogues/tv-units/tv-${String(i).padStart(2, '0')}.jpg`,
    names: [
      'VISTA', 'MONOLITH', 'FORUM', 'SYMPHONY', 'OPUS', 'KINETIC', 'PANORAMA', 'SLATE', 'MERIDIAN', 'AERO',
      'VELOX', 'CANOPY', 'RESONANCE', 'KRONOS', 'ECHO', 'VALIANT', 'HELIOS', 'SPECTRA', 'HORIZON', 'PULSE',
      'LINEAR', 'SOLUM', 'TITAN', 'CUBE', 'MODENA', 'NEXUS', 'PRISM', 'STRATA'
    ],
    moods: [
      'Marble Backdrop • Floating Console • Luxury', 'Fluted Oak • Slatted Detail • Warm', 'Minimal Floating • Push-Latch • Clean',
      'Backlit Slabs • Bronze Glass • Dramatic', 'Asymmetric Layout • Open Shelving • Architectural', 'Monochrome Charcoal • Matte Black • Sleek',
      'Integrated Media Wall • Acoustic Fabric • Tech', 'Full Height Storage • Concealed Wires • Practical', 'Natural Timber • White Quartz • Balanced',
      'Cantilevered Ledge • Low Profile • Minimal', 'Geometric Paneling • Warm LED Coves • Modern', 'Compact Media Console • Hairpin Base • Apartment',
      'Grand Living Wall • Display Niches • Prestige', 'Textured Concrete • Floating Oak • Urban', 'Dual Zone Entertainment • Bookcase Wall • Grand',
      'Smoked Glass Storage • Gold Trims • Elegant', 'Vertical Wood Battens • Matte Grey • Contemporary', 'Curved Corner Console • Soft Form • Organic',
      'Lacquered Black • Brass Reveals • Haute', 'Sliding Louvred Doors • Cable Management • Clean', 'Minimalist Backplate • Ambient Halo • Sleek',
      'Warm Walnut • Inset Fireplace Niche • Cozy', 'Floating Glass Top • Backlit Marble • Opulent', 'Modular Wall Cubes • Creative Layout • Vibrant',
      'Slate Stone Wall • Teak Storage • Earthy', 'Full Width Media Credenza • Push Open • Streamlined', 'Integrated Display Tower • Accent Lights • Refined',
      'Slimline Media Shelf • Hidden Soundbar • Precision'
    ],
    descTemplates: [
      'A statement living room media wall featuring a large-format bookmatched marble backdrop, floating dark wood console, and warm perimeter ambient cove lighting.',
      'A warm architectural TV unit composed of rhythmic vertical oak slats, a cantilevered low-profile drawer module, and fully concealed audio-video cable tracks.',
      'A sleek floating TV console with seamless push-latch drawers, satin white lacquer finish, and an airy wall-mounted presence that maximizes floor space.',
      'A dramatic entertainment wall pairing backlit translucent stone panels with bronze-tinted glass display showcases and integrated subwoofer housings.',
      'An artfully balanced asymmetric TV unit combining open illuminated book display niches with closed horizontal storage in contrasting timber and charcoal.',
      'A monochromatic modern TV wall finished in deep matte graphite, featuring seamless acoustic speaker cloth integration and clean shadowline joints.',
      'A high-tech media wall incorporating sound-dampening textured acoustic wall panels, flush TV mounting brackets, and dedicated concealed equipment bays.',
      'A full-height living room entertainment center combining extensive closed cabinetry with central TV framing and integrated ambient display lighting.',
      'A harmonious media wall balancing warm natural timber wall paneling with a crisp white quartz countertop and soft under-cabinet night illumination.',
      'A minimalist cantilevered TV ledge with an ultra-slim profile, concealed wire pass-through channels, and durable scratch-resistant surface finish.',
      'A dynamic TV backdrop featuring geometric wall panel sections highlighted by recessed indirect LED lighting strips and a floating media bench.',
      'A compact and functional TV console tailored for modern apartments, featuring clean horizontal drawers and elevated slim metal support legs.',
      'A grand living room media wall featuring multi-tier illuminated glass shelving for art display, anchored by a monolithic stone-clad television alcove.',
      'An urban industrial media wall pairing raw concrete-look architectural wall cladding with a rich floating oak storage console.',
      'A comprehensive dual-zone living wall that merges an expansive library bookshelf with a dedicated home theater audio-visual center.',
      'An elegant media unit with smoked-glass drop-down component doors, brushed champagne gold trims, and internal ventilation slots for gaming consoles.',
      'A contemporary TV unit design combining fine vertical wooden battens with a matte grey wall backplate and flush handleless drawer fronts.',
      'A softly curved media console featuring rounded radius corners, textured fluted side wraps, and a warm natural timber countertop.',
      'A high-gloss lacquered black entertainment wall accented with razor-thin brass shadowline reveals and integrated ambient display showcases.',
      'A functional media wall with smooth sliding louvred timber doors that conceal soundbars and equipment while allowing remote signals to pass through.',
      'A minimalist media backplate with integrated 360-degree ambient halo lighting, creating a theater-like viewing environment with reduced eye strain.',
      'A cozy living room entertainment wall integrating a modern electric fireplace beneath the television with flanking walnut display niches.',
      'A luxury TV credenza featuring a floating glass top surface, backlit Italian marble back panel, and precision soft-close tandem drawer boxes.',
      'A creative modular media arrangement with floating wall cubes and offset shelves, offering versatile storage and display combinations.',
      'A natural slate-textured television accent wall complemented by warm solid-teak lower drawers and concealed perimeter power distribution.',
      'A full-width living room media credenza spanning wall-to-wall with continuous grain matching and touch-to-open soft-closing compartments.',
      'A sophisticated media tower unit combining an illuminated vertical curio cabinet with a low-profile media bench and integrated cord concealment.',
      'An ultra-slimline floating media shelf designed to house soundbars and slim TV decoders with zero visible wires and maximum floor clearance.'
    ]
  },
  {
    id: 'bar-counter',
    name: 'Bar Counter – Residential',
    codePrefix: 'BAR',
    categoryEyebrow: 'RESIDENTIAL BAR COUNTER CATALOGUE',
    coverTitle: 'RESIDENTIAL BAR',
    coverSubtitle: 'CURATED HOME ENTERTAINMENT & BEVERAGE LOUNGES',
    editionYear: 'LATEST 2026',
    count: 28,
    imageFn: (i) => `/assets/catalogues/bar-counter/bar-${String(i).padStart(2, '0')}.jpg`,
    names: [
      'CELLAR', 'SPIRIT', 'TAVERN', 'COPPER', 'BACCHUS', 'HIGHLAND', 'CASK', 'AMBER', 'MELLOW', 'RESERVE',
      'CHATEAU', 'BARREL', 'NOCTURNE', 'SHAKER', 'CITRUS', 'VINTAGE', 'FLUTE', 'ONYX', 'STERLING', 'TIPPLE',
      'CORNER', 'VINE', 'APERITIF', 'SALON', 'DECANTER', 'MODERNO', 'VELVET', 'SUMMIT'
    ],
    moods: [
      'Residential Luxury • Backlit Marble • Intimate', 'Compact Wall Bar • Fluted Glass • Chic', 'Wooden Counter • Wine Rack • Warm',
      'Dining Area Bar • Waterfall Edge • Sleek', 'Cabinet Bar • Pull-Out Prep • Practical', 'Smoked Mirror • Brass Accents • Glamour',
      'Island Bar Counter • Footrest Rail • Social', 'Recessed Niche Bar • Warm Coves • Minimal', 'Dark Walnut • Integrated Chiller • Executive',
      'Under-Stair Bar • Custom Fit • Efficient', 'Curved Countertop • Leather Stools • Organic', 'Two-Tier Home Bar • Serving Ledge • Culinary',
      'Fluted Wood Base • Stone Top • Modern', 'Cantilevered Counter • Metal Supports • Urban', 'High-Gloss Lacquer • Glass Stemware • Refined',
      'Pantry Bar Unit • Bi-Fold Doors • Discreet', 'Rustic Teak • Industrial Accents • Warm', 'Onyx Feature Wall • Ambient Illumination • Bold',
      'Minimalist Bar Cart Cabinet • Mobile • Versatile', 'Integrated Cocktail Bar • Ice Trough • Entertaining', 'Linear Dining Bar • Breakfast Combo • Multifunctional',
      'Framed Display Bar • Mirrored Backing • Classic', 'Floating Bar Ledge • Stemware Hangers • Airy', 'Monolithic Black Quartz • Integrated Sink • Sharp',
      'Open Wine Cellar Wall • Temperature Display • Connoisseur', 'Arched Bar Niche • Warm Timber • Cozy', 'Satin Champagne • Concealed Storage • Sophisticated',
      'Terrace Lounge Bar • Weather-Resistant Finishes • Leisure'
    ],
    descTemplates: [
      'An intimate residential home bar featuring a backlit translucent onyx bottle display wall, rich timber counter base, and integrated stemware hanging racks.',
      'A chic compact wall-mounted home bar designed for contemporary apartments, equipped with fluted glass doors and sensor-activated warm interior spotlights.',
      'A warm wooden home bar counter incorporating custom diamond wine bottle cubbies, solid oak preparation counter, and integrated accessory drawers.',
      'A sleek dining-area bar counter featuring a continuous waterfall quartz countertop edge and under-counter concealed beverage refrigeration.',
      'A versatile cabinet bar that opens to reveal a mirrored preparation counter, pull-out cocktail mixing tray, and specialized glassware organization.',
      'A glamorous residential bar backplate featuring antique smoked mirrors, brushed brass shelf supports, and warm ambient perimeter glow.',
      'A social island bar counter with an integrated brass footrest rail, durable stain-resistant stone worktop, and comfortable stool seating clearance.',
      'A clean recessed niche bar unit built seamlessly into the living room wall, combining floating glass shelves with lower storage cabinetry.',
      'An executive dark walnut home bar featuring integrated wine chiller enclosures, lockable liquor cabinets, and soft-closing drawer mechanisms.',
      'An ingeniously designed under-stair residential bar that transforms unused architectural space into a bespoke beverage and glassware lounge.',
      'A contemporary curved bar counter with tailored fluted timber cladding, rounded stone countertop edge, and ergonomic service clearance.',
      'A two-tier residential bar separating the wet prep sink area from the elevated guest serving counter, ideal for seamless evening entertaining.',
      'A tactile modern home bar featuring a rhythmic fluted wood counter base, durable granite countertop, and integrated under-counter LED strip.',
      'A cantilevered residential bar ledge supported by structural steel posts, creating an open and airy bar seating zone within modern dining rooms.',
      'A refined high-gloss residential bar unit featuring illuminated glass-front cabinets for crystal stemware and concealed bottle storage below.',
      'A discreet pantry bar concealed behind smooth bi-fold pocket doors that tuck away completely during hosting and blend flush when closed.',
      'A rustic-modern residential bar crafted with reclaimed teak wood surfaces, matte black metal framing, and warm ambient filament lighting.',
      'A showpiece home bar characterized by an exotic onyx stone backplate that radiates soft warmth through concealed LED lighting grids.',
      'A versatile multi-functional home bar cabinet with pull-out preparation cutting boards, built-in cutlery dividers, and dedicated shaker storage.',
      'A fully equipped entertainer bar featuring an integrated insulated ice trough, stainless steel wet sink, and dedicated bottle optics.',
      'A linear dining bar counter that transitions effortlessly from a casual morning breakfast counter to a sophisticated evening beverage bar.',
      'A classic residential bar display framed in warm hardwood molding with mirrored backing that visually accentuates prized spirits and decanters.',
      'A minimalist floating bar ledge with built-in overhead wine glass tracks, designed to occupy minimal wall footprint with maximum visual lightness.',
      'A sharp monolithic black quartz bar unit featuring an integrated undermount sink, concealed trash pull-out, and matte black plumbing fixtures.',
      'An architectural residential wine wall bar combining temperature-monitored bottle pegs, label-forward displays, and tasting ledges.',
      'An arched niche home bar incorporating soft curved architectural plasterwork, warm wood display shelves, and integrated downlights.',
      'A sophisticated satin champagne finished bar console with hidden touch-latch liquor compartments and a polished marble preparation top.',
      'A residential lounge bar designed for covered verandas or entertainment decks, featuring water-resistant joinery and durable composite counters.'
    ]
  },
  {
    id: 'temple-space',
    name: 'Temple Space',
    codePrefix: 'TMP',
    categoryEyebrow: 'TEMPLE SPACE CATALOGUE',
    coverTitle: 'TEMPLE SPACE',
    coverSubtitle: 'SACRED SANCTUMS & CONTEMPORARY POOJA ARCHITECTURE',
    editionYear: 'LATEST 2026',
    count: 28,
    imageFn: (i) => `/assets/catalogues/temple-space/temple-${String(i).padStart(2, '0')}.jpg`,
    names: [
      'MANDIR', 'PRANAV', 'DIVINE', 'SHANTI', 'SANCTUM', 'AURA', 'BRAHMA', 'LOTUS', 'MOKSHA', 'ANANYA',
      'VEDIC', 'DHARMA', 'SAMADHI', 'TEJAS', 'ANANDA', 'PAVITRA', 'ISHTA', 'NIRVANA', 'ADVAITA', 'ARCHANA',
      'OM', 'ARADHANA', 'SHRADHA', 'KALYAN', 'PRASAD', 'SATYA', 'VAIDIK', 'DEVAM'
    ],
    moods: [
      'Backlit Jaali • Teak Wood • Sacred', 'Pooja Sanctum • CNC Panels • Peaceful', 'Compact Mandir • Pull-Out Diya • Warm',
      'Marble Altar • Brass Accents • Pristine', 'Full Height Mandir • Dedicated Storage • Devotional', 'Contemporary Niche • Gold Leaf • Serene',
      'Carved Teak • Traditional Modern • Graceful', 'Illuminated Lotus • Warm Amber • Spiritual', 'Floating Mandir Unit • Minimal Ledge • Pure',
      'Laser-Cut Jaali Doors • Brass Bells • Sacred', 'Granite Base • Floating Shrine • Enduring', 'Arched Sanctum • Concealed Lighting • Harmonious',
      'Pooja Room Suite • Acoustic Warmth • Intimate', 'Backlit Corian • Sacred Geometry • Translucent', 'Dual Shutter Mandir • Polished Brass • Timeless',
      'Wall Mount Pooja • Incense Storage • Efficient', 'White Marble Mandir • Intricate Relief • Luminous', 'Dark Wood Mandir • Bell Inlays • Reverent',
      'Freestanding Shrine • Pyramid Shikhara • Classical', 'Glass Enclosed Pooja • Dust-Free Sanctum • Modern', 'Fluted Timber Mandir • Soft Ambient Glow • Calm',
      'Floor-to-Ceiling Jaali • Prayer Nook • Elevated', 'Step-Platform Mandir • Tiered Idols • Traditional', 'Compact Corner Mandir • Angled Shrine • Practical',
      'Veneer Clad Pooja • CNC Om Accent • Meaningful', 'Floating Drawer Mandir • Diya Extension • Functional', 'Subtle Mandala Backlit • Warm Gold • Auspicious',
      'Minimalist Marble Plinth • Brass Trim • Pure'
    ],
    descTemplates: [
      'A sacred residential pooja unit featuring an intricately laser-cut backlit jaali backplate, warm teak woodwork, and a dedicated pull-out brass diya tray.',
      'A serene contemporary pooja sanctum framed in natural wood with CNC-carved sacred geometry, warm indirect lighting, and lower storage for prayer essentials.',
      'A space-efficient compact home mandir designed for apartments, featuring floating construction, brass bell accents, and a concealed incense drawer.',
      'A pristine marble-lined altar unit with softly rounded corners, integrated warm LED perimeter coves, and dedicated pedestals for sacred deities.',
      'A comprehensive full-height pooja room cabinetry system incorporating sacred idol display tiers, brass bell hangings, and ample organized storage.',
      'A contemporary prayer niche with delicate gold-leaf back paneling, gentle recessed downlighting, and clean handleless lower storage drawers.',
      'A handcrafted teakwood home temple blending traditional pillar silhouettes with clean contemporary lines and rich natural wood grain.',
      'A spiritual feature sanctum highlighted by a central backlit lotus motif carved in translucent stone, creating a peaceful ambient aura.',
      'A minimalist floating temple shelf with a polished white quartz top, concealed mounting brackets, and soft downward night lighting.',
      'An authentic pooja unit equipped with laser-cut fretwork doors inset with suspended brass bells that chime gently upon opening.',
      'A grounded home temple design combining an enduring dark granite idol platform with floating wooden storage compartments beneath.',
      'An arched sanctum inspired by classical Indian temple architecture, reinterpreted with smooth architectural curves and warm concealed halo lighting.',
      'A dedicated residential pooja room suite featuring acoustic timber wall cladding, custom prayer seating benches, and full-height sanctum cabinetry.',
      'A luminous modern mandir crafted with translucent backlit Corian panels engraved with sacred Vedic hymns and geometric yantras.',
      'A dual-shutter home temple featuring folding doors that open wide during daily rituals and secure the sanctum gracefully when closed.',
      'A clean wall-mounted pooja unit with dedicated upper idol shelving, a pull-out oil lamp preparation board, and lower storage for holy books.',
      'A luminous white composite marble mandir showcasing delicate relief carvings, polished surfaces, and seamless easy-to-clean corner joints.',
      'A reverent dark wood home temple detailed with rhythmic brass bell inlays and warm accent spotlights focused on sacred idols.',
      'A freestanding home temple crowned with a contemporary tiered pyramid shikhara and handcrafted solid-timber support pilasters.',
      'A dust-free glass-enclosed pooja sanctum combining ultra-clear glass shutters with warm wood framing and internal filtered ventilation.',
      'A tranquil prayer space detailed with fine vertical wooden fluting, a cantilevered idol plinth, and soft indirect floor wash lighting.',
      'A floor-to-ceiling architectural pooja screen with integrated open sanctum niches, separating the prayer area while maintaining an airy home flow.',
      'A stepped-tier home temple platform facilitating tiered idol arrangements, finished in water-resistant matte polyurethane polish.',
      'A smart corner pooja unit engineered to transform challenging corner spaces into a peaceful and harmonious devotional corner.',
      'A modern veneer-clad temple wall featuring a precision-engraved backlit Om emblem, surrounded by warm ambient perimeter illumination.',
      'A functional wall-hung pooja unit with a heavy-duty telescopic diya drawer, brass-plated handles, and organized agarbatti storage.',
      'A meditative home temple space centered around an illuminated golden mandala backplate, casting delicate shadows across the sacred platform.',
      'An understated minimalist marble plinth shrine with micro-beveled brass edges, celebrating pure materiality and spiritual clarity.'
    ]
  },
  {
    id: 'crockery-unit',
    name: 'Crockery Unit',
    codePrefix: 'CRK',
    categoryEyebrow: 'CROCKERY UNIT CATALOGUE',
    coverTitle: 'CROCKERY & DISPLAY',
    coverSubtitle: 'FINE DINING STORAGE & ARCHITECTURAL VITRINES',
    editionYear: 'LATEST 2026',
    count: 28,
    imageFn: (i) => `/assets/catalogues/crockery-unit/crockery-${String(i).padStart(2, '0')}.jpg`,
    names: [
      'VITRINE', 'BUFFET', 'PORCELAIN', 'CRYSTAL', 'GOBLET', 'CREDENZA', 'CERAMIC', 'DISPLAY', 'SHINE', 'CONSOLE',
      'GLAZE', 'TABLEAU', 'HERITAGE', 'REFLECTION', 'CHANDELIER', 'FEAST', 'MEZZA', 'CLAIR', 'TRANSLUCENT', 'ARTISAN',
      'HARMONY', 'BANQUET', 'LUSTER', 'SHOWCASE', 'ELEGANCE', 'GRACE', 'CANVAS', 'SYMPHONY'
    ],
    moods: [
      'Glass Showcase • Interior Lighting • Elegant', 'Dining Sideboard • Marble Top • Functional', 'Fluted Glass • Slim Black Frame • Chic',
      'Full Height Vitrine • Backlit Shelves • Luxury', 'Two-Tone Buffet • Cutlery Drawers • Modern', 'Wall-Mounted Display • Floating Base • Minimal',
      'Smoked Glass • Dark Walnut • Executive', 'Open Display Niches • Wine Storage • Social', 'Satin Champagne • Brass Trim • Sophisticated',
      'Curved End Credenza • Soft Geometry • Refined', 'Tall Dining Pantry • Pull-Out Trays • Practical', 'Mirrored Backing • Glass Shelves • Luminous',
      'Textured Oak • Concealed Hardware • Natural', 'Cantilevered Buffet • Under-Cabinet Glow • Sleek', 'High-Gloss White • Tempered Glass • Luminous',
      'Asymmetric Vitrine • Feature Lighting • Contemporary', 'Sliding Glass Fronts • Dust-Proof Seals • Practical', 'Integrated Bar Crockery • Wine Glass Rails • Entertaining',
      'Fluted Wood Base • Glass Top • Sculptural', 'Monolithic Charcoal • Bronze Accents • Bold', 'Modular Dining Storage • Flexible Layout • Modern',
      'Corner Crockery Cabinet • Angled Display • Space-Saving', 'Lacquered Buffet • Geometric Inlays • Art Deco', 'Minimalist Floating Box • Shadowline • Pure',
      'Dual-Sided Partition Unit • Dining Divider • Open', 'Tiered Glass Curio • Spotlight Accent • Showcase', 'Matte Cashmere • Soft Close • Timeless',
      'Architectural Display Suite • Ceiling Height • Grand'
    ],
    descTemplates: [
      'A refined dining room crockery vitrine featuring full-height clear glass shutters, slim matte black aluminum frames, and integrated vertical LED shelf lighting.',
      'A contemporary dining sideboard combining a polished Italian marble serving top with deep push-to-open soft-close drawers for fine tableware.',
      'A chic crockery unit with fluted textured glass doors that softly veil fine dinnerware while catching and diffusing ambient dining room light.',
      'An expansive full-height display vitrine with illuminated glass shelves, mirror-backed compartments, and specialized velvet-lined cutlery drawer inserts.',
      'A functional two-tone buffet unit pairing warm timber cabinetry with crisp white storage fronts, designed for practical dining service storage.',
      'A minimalist floating crockery console mounted securely to the dining wall, offering generous storage while maintaining complete floor openness.',
      'An executive dark walnut crockery showcase featuring smoked glass panels, brass hardware accents, and integrated under-shelf warm strip lights.',
      'A versatile dining display unit integrating open horizontal display ledges with a central wine bottle grid and lower concealed dinner set storage.',
      'An elegant dining credenza finished in satin champagne lacquer with brushed gold profile trims and a durable stain-resistant quartz top.',
      'A sculptural dining sideboard characterized by gently curved side tambour doors, seamless touch-latches, and a warm natural timber finish.',
      'A tall multifunctional dining pantry unit with heavy-duty pull-out tandem trays for effortless access to heavy ceramic platters and serving bowls.',
      'A luminous crockery display unit with high-reflectivity mirror back panels that amplify interior lighting and showcase crystal stemware.',
      'A tactile crockery cabinet crafted with textured natural oak veneers, concealed concealed-cup hinges, and soft interior cabinet lighting.',
      'A modern cantilevered dining buffet featuring concealed wall mounting and soft floor-wash LED lighting that creates a floating architectural effect.',
      'A clean high-gloss white crockery showcase with tempered glass display doors, providing a dust-free and radiant home for fine porcelain.',
      'An asymmetric dining display unit blending varied shelf heights to accommodate tall carafes, medium dinner sets, and compact glassware.',
      'A practical crockery cabinet featuring smooth-gliding sliding glass shutters with integrated brush seals to ensure complete dust protection.',
      'An entertainer crockery unit combining dedicated dinner plate racks, stemware hanging rails, and an open bar preparation niche.',
      'A striking crockery credenza with a rhythmic fluted wood base, clear glass display top, and concealed internal cable routing.',
      'A bold monochromatic charcoal crockery showcase featuring bronze metallic frame profiles and deep pull-out linen and napkin drawers.',
      'A versatile modular dining storage system with adjustable shelf heights and interchangeable display panels to fit evolving tableware collections.',
      'An ergonomic corner crockery cabinet designed to utilize awkward dining angles while providing full panoramic glass display visibility.',
      'A statement dining buffet inspired by modern Art Deco aesthetics, featuring glossy geometric door inlays and polished metallic plinth trim.',
      'An understated minimalist floating crockery shelf with a precision shadowline perimeter bevel and seamless integrated push-open mechanisms.',
      'A dual-sided dining partition crockery unit that displays crystal glassware from both the living and dining zones while defining spatial boundaries.',
      'A tiered glass curio display unit equipped with top-mounted directional focus spotlights that illuminate prized heirloom chinaware.',
      'A serene matte cashmere crockery cabinet with soft-close tandem drawers and subtle warm wood accents suited for contemporary dining rooms.',
      'A grand architectural crockery suite stretching from floor to ceiling, integrating high-capacity dinnerware storage with museum-grade vitrine display bays.'
    ]
  },
  {
    id: 'pop',
    name: 'POP',
    codePrefix: 'POP',
    categoryEyebrow: 'POP / FALSE CEILING CATALOGUE',
    coverTitle: 'POP & CEILINGS',
    coverSubtitle: 'ARCHITECTURAL FALSE CEILINGS & COVE LIGHTING',
    editionYear: 'LATEST 2026',
    count: 30,
    imageFn: (i) => `/assets/gallery/pop/pop-${String(i).padStart(2, '0')}.jpg`,
    names: [
      'AURA', 'CELESTE', 'ZENITH', 'STRATA', 'RADIANCE', 'LUMEN', 'COVE', 'PRISM', 'LINEA', 'HALO',
      'VORTEX', 'CIRRUS', 'NEXUS', 'STELLA', 'SOLACE', 'ORBIT', 'HORIZON', 'CASCADE', 'MONOLITH', 'MATRIX',
      'ECLIPSE', 'REFLECT', 'ELEVATE', 'SKYLINE', 'TESSERA', 'AMBIENT', 'SCULPT', 'KINETIC', 'BEACON', 'VELUM'
    ],
    moods: [
      'Gypsum False Ceiling • Perimeter Cove • Warm', 'Floating Ceiling Island • Recessed Spots • Modern', 'Geometric Profile • LED Channels • Architectural',
      'Coffered Grid • Master Bedroom • Classical', 'Dining Ceiling Island • Pendant Recess • Social', 'Magnetic Track Lighting • Clean Reveal • High-Tech',
      'Stepped Tray Ceiling • Indirect Glow • Elegant', 'Minimalist Drop Ceiling • Seamless Gypsum • Pure', 'Curved Cove Lighting • Organic Form • Soft',
      'Double Tiered Ceiling • Dual Tone Glow • Luxury', 'Wooden Rafter Inset • POP Border • Warm', 'Perimeter Pelmet • Curtain Concealment • Sleek',
      'Hexagonal Ceiling Recess • Contemporary • Dynamic', 'Acoustic Plasterboard • Shadowline Edge • Technical', 'Central Chandelier Tray • Deep Cove • Grand',
      'Linear Slot Diffusers • Minimal Aesthetic • Sharp', 'Multi-Level Step Ceiling • Spatial Depth • Bold', 'Concealed LED Strip Profile • Glare-Free • Ambient',
      'Living Room Drop Island • Accent Spotlights • Urban', 'Bedroom Halo Ceiling • Dimmable Mood • Relaxing', 'Circular Ceiling Dome • Warm Halo • Classical',
      'Fluted POP Reveal • Subtle Texture • Refined', 'Asymmetric Ceiling Slopes • Modern Loft • Expressive', 'Dual Zone Living-Dining Ceiling • Defined Flow • Harmonious',
      'Floating Ceiling Plinth • Razor-Thin Edge • Sleek', 'Recessed Track System • Tunable White • Modern', 'Grid Coffers • Contemporary Trim • Balanced',
      'Perimeter Floating Border • Center Fan Recess • Practical', 'Minimalist Monolithic Ceiling • Flush Light Slots • Pure', 'Comprehensive Ceiling Architecture • Full Home • Supreme'
    ],
    descTemplates: [
      'A modern high-grade gypsum false ceiling featuring seamless perimeter cove lighting, soft shadowline perimeter reveals, and glare-free warm ambient illumination.',
      'A contemporary living room floating false ceiling island with concealed perimeter LED channels and strategically positioned recessed focus spotlights.',
      'An architectural ceiling design defined by crisp geometric drop profiles, recessed magnetic track lighting channels, and razor-sharp drywall finishing.',
      'A stately coffered grid false ceiling engineered for master bedrooms, offering timeless architectural structure and enhanced acoustic comfort.',
      'A dining room ceiling island designed with an integrated pendant light recess, indirect perimeter glow, and clean flush transitions.',
      'A high-tech minimalist ceiling incorporating recessed magnetic track lighting profiles that allow flexible repositioning of spotlights and floodlights.',
      'A stepped tray false ceiling design that creates an illusion of greater room height through multi-tier indirect warm LED lighting channels.',
      'A seamless monolithic drop ceiling executed with precision shadowline borders and flush-mounted modular air-conditioning diffusers.',
      'A fluid organic ceiling feature featuring gentle curved coves that soften room geometry and cast an evenly diffused warm ambient glow.',
      'A luxury double-tiered false ceiling pairing warm 3000K cove lighting with cool white task spotlights for layered evening ambiance.',
      'An architectural hybrid ceiling combining clean white POP perimeter drops with warm natural wooden rafter insets over the central living space.',
      'A functional perimeter pelmet false ceiling that cleanly conceals motorized curtain tracks and full-height window blind hardware.',
      'A dynamic contemporary ceiling design featuring precision-cut geometric recesses with embedded continuous linear LED light strips.',
      'An acoustic-rated gypsum plasterboard false ceiling designed with micro-perforations and acoustic backing to reduce reverberation in open living areas.',
      'A grand living room ceiling tray designed to frame statement chandeliers, bordered by deep coves and subtle architectural cornice details.',
      'A sleek false ceiling incorporating continuous linear slot diffusers and hidden return-air plenums for central ducted climate control.',
      'A multi-level stepped ceiling composition that visually delineates distinct functional zones within an open-concept luxury residence.',
      'A glare-free ambient ceiling system featuring deeply recessed aluminum profiles that emit soft, indirect illumination without visible light sources.',
      'An urban living room ceiling island designed with contrasting darker inner recesses and surface-mounted architectural spotlights.',
      'A relaxing bedroom halo ceiling with fully dimmable perimeter warm LED strips designed for smooth circadian nighttime transitions.',
      'A refined circular ceiling dome feature designed to center dining tables or foyer rotundas with a dramatic circular warm light ring.',
      'A tactile ceiling design introducing subtle fluted drywall textures along lighting coves for a sophisticated play of light and shadow.',
      'An expressive asymmetric ceiling drop tailored for modern penthouses and double-height living areas with sloping architectural planes.',
      'A comprehensive dual-zone false ceiling layout that harmonizes living and dining areas while establishing clear visual boundaries between spaces.',
      'An ultra-slim floating ceiling plinth with knife-edge perimeter detailing that appears to hover weightlessly beneath the structural slab.',
      'A modern architectural ceiling equipped with low-voltage recessed tracks and tunable-white fixtures for daytime focus and evening warmth.',
      'A contemporary coffer ceiling featuring clean rectangular grids with subtle internal stepped bevels and centered warm downlights.',
      'A practical and elegant ceiling layout incorporating perimeter lighting coves while leaving an unhindered recessed bay for ceiling fan mounting.',
      'A purist minimalist ceiling featuring ultra-narrow continuous light slots cut directly into the gypsum board for a futuristic architectural look.',
      'An expansive whole-home false ceiling masterplan uniting living, dining, and passage zones into a cohesive architectural lighting canvas.'
    ]
  }
];

function generateFiles() {
  const outDir = path.join('src', 'data', 'catalogues');
  fs.mkdirSync(outDir, { recursive: true });

  const categoryModules = [];

  for (const def of catalogueDefinitions) {
    const items = [];
    for (let i = 1; i <= def.count; i++) {
      const idx = i - 1;
      const refId = `${def.codePrefix}-${String(i).padStart(2, '0')}`;
      const name = def.names[idx] || `${def.codePrefix} DESIGN ${i}`;
      const image = def.imageFn(i);
      const description = def.descTemplates[idx] || `A contemporary ${def.name.toLowerCase()} design featuring clean lines, functional storage, and refined finishes.`;
      const moodTags = def.moods[idx] || 'Contemporary • Refined • Modern';
      const pageNumber = `P/${String(i).padStart(2, '0')}`;

      items.push({
        id: `${def.id}-${String(i).padStart(2, '0')}`,
        refId,
        name,
        category: def.name.toUpperCase(),
        image,
        description,
        moodTags,
        pageNumber
      });
    }

    const varName = `${def.id.replace(/-([a-z])/g, (_, c) => c.toUpperCase())}CatalogueData`;
    const fileName = `${def.id.replace(/-([a-z])/g, (_, c) => c.toUpperCase())}Data.ts`;
    const filePath = path.join(outDir, fileName);

    const tsContent = `import { CatalogueCategoryConfig } from '../../types/catalogue';

export const ${varName}: CatalogueCategoryConfig = {
  id: '${def.id}',
  name: '${def.name}',
  codePrefix: '${def.codePrefix}',
  categoryEyebrow: '${def.categoryEyebrow}',
  coverTitle: '${def.coverTitle}',
  coverSubtitle: '${def.coverSubtitle}',
  editionYear: '${def.editionYear}',
  items: ${JSON.stringify(items, null, 2)}
};
`;

    fs.writeFileSync(filePath, tsContent, 'utf8');
    console.log(`Generated ${fileName} (${items.length} items)`);
    categoryModules.push({ id: def.id, name: def.name, varName, fileName: fileName.replace('.ts', '') });
  }

  // Generate Master Index file
  const indexImports = categoryModules.map(m => `import { ${m.varName} } from './${m.fileName}';`).join('\n');
  const indexMap = categoryModules.map(m => `  '${m.id}': ${m.varName},`).join('\n');
  const listItems = categoryModules.map(m => `  { id: '${m.id}', name: '${m.name}', config: ${m.varName}, count: ${m.varName}.items.length },`).join('\n');

  const indexContent = `import { CatalogueCategoryConfig } from '../../types/catalogue';
${indexImports}

export const allCatalogues: Record<string, CatalogueCategoryConfig> = {
${indexMap}
};

export interface CatalogueCategoryMeta {
  id: string;
  name: string;
  config: CatalogueCategoryConfig;
  count: number;
}

export const catalogueCategoryList: CatalogueCategoryMeta[] = [
${listItems}
];

export const defaultCatalogueId = 'wardrobe';
`;

  fs.writeFileSync(path.join(outDir, 'index.ts'), indexContent, 'utf8');
  console.log(`Generated index.ts master registry with ${categoryModules.length} catalogues.`);
}

generateFiles();
