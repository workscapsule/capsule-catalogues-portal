import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'paints',
    number: '01',
    title: 'Paints',
    shortDesc: 'Beautiful finishes. Quality that lasts.',
    fullDesc: 'Professional painting solutions for homes, offices and commercial spaces — from surface preparation to the final coat.',
    features: [
      'Interior & Exterior Painting',
      'Surface Preparation & Putty',
      'Premium Paint Finishes',
      'Weather-Resistant Exterior Paints',
      'Odor-Free, Non-Toxic & 100% Washable Formulations',
      'Dedicated Masking & Post-Painting Site Cleaning'
    ],
    iconName: 'PaintRoller',
    badgeColor: '#E08A27',
    accentColor: '#F59E0B',
    category: 'interiors',
    image: '/assets/services/service-01-paints.jpg'
  },
  {
    id: 'pop',
    number: '02',
    title: 'POP',
    shortDesc: 'Elegant ceilings. Clean finishes.',
    fullDesc: 'Professional POP and gypsum ceiling solutions designed for homes, offices and commercial spaces.',
    features: [
      'POP False Ceilings',
      'Gypsum False Ceilings',
      'Cove & LED Lighting Designs',
      'Custom Ceiling Designs'
    ],
    iconName: 'POPTrowel',
    badgeColor: '#557849',
    accentColor: '#65A30D',
    category: 'interiors',
    image: '/assets/services/service-02-pop.jpg'
  },
  {
    id: 'carpenter',
    number: '03',
    title: 'Carpenter',
    shortDesc: 'Custom woodwork made for you.',
    fullDesc: 'Quality carpentry solutions for homes, offices and commercial spaces, with clean finishes and attention to detail.',
    features: [
      'Custom Furniture & Woodwork',
      'Wardrobes & Cabinets',
      'TV Units & Wall Panelling',
      'Doors & Other Woodwork'
    ],
    iconName: 'CarpenterFrame',
    badgeColor: '#9B5E34',
    accentColor: '#B45309',
    category: 'interiors',
    image: '/assets/services/service-03-carpenter.jpg'
  },
  {
    id: 'modular-kitchen-wardrobe',
    number: '04',
    title: 'Modular Kitchen / Customized Wardrobe',
    shortDesc: 'Smart storage. Better living.',
    fullDesc: 'Custom modular kitchen and wardrobe solutions designed for homes, offices and commercial spaces.',
    features: [
      'Modular Kitchen Design & Setup',
      'Custom Wardrobes & Closets',
      'Premium Hardware & Soft-Close',
      'Countertops & Storage Solutions'
    ],
    iconName: 'WardrobeDoors',
    badgeColor: '#6A217B',
    accentColor: '#9333EA',
    category: 'interiors',
    image: '/assets/services/service-04-modular-kitchen.jpg'
  },
  {
    id: 'fabrication',
    number: '05',
    title: 'Fabrication',
    shortDesc: 'Strong work. Built to last.',
    fullDesc: 'Reliable metal fabrication solutions for homes, offices and commercial spaces, made to suit your project.',
    features: [
      'MS & Steel Fabrication',
      'Gates & Railings',
      'Glass & Metal Works',
      'Pergolas & Custom Structures'
    ],
    iconName: 'WelderMask',
    badgeColor: '#18727E',
    accentColor: '#06B6D4',
    category: 'construction',
    image: '/assets/services/service-05-fabrication.jpg'
  },
  {
    id: 'plumbing',
    number: '06',
    title: 'Plumbing',
    shortDesc: 'Reliable plumbing. Hassle-free living.',
    fullDesc: 'Complete plumbing solutions for homes, offices and commercial spaces, from installation to repairs and maintenance.',
    features: [
      'Water Supply & Pipe Work',
      'Bathroom & Sanitary Fittings',
      'Drainage & Plumbing Work',
      'Repair & Maintenance'
    ],
    iconName: 'PlumbingPipe',
    badgeColor: '#1D6FB8',
    accentColor: '#3B82F6',
    category: 'utilities',
    image: '/assets/services/service-06-plumbing.jpg'
  },
  {
    id: 'electricals',
    number: '07',
    title: 'Electricals',
    shortDesc: 'Safe wiring. Reliable power.',
    fullDesc: 'Complete electrical solutions for homes, offices and commercial spaces, from wiring and installations to lighting and upgrades.',
    features: [
      'Electrical Wiring & Installation',
      'MCB & Distribution Boards',
      'Lighting & Switches',
      'Smart & Electrical Upgrades'
    ],
    iconName: 'ElectricalLightning',
    badgeColor: '#BA223D',
    accentColor: '#EF4444',
    category: 'utilities',
    image: '/assets/services/service-07-electricals.jpg'
  },
  {
    id: 'tiles-marble-granite',
    number: '08',
    title: 'Tiles / Marble / Granite',
    shortDesc: 'Beautiful surfaces. Perfect finishes.',
    fullDesc: 'Professional tile, marble and granite installation for homes, offices and commercial spaces.',
    features: [
      'Tile Installation',
      'Marble Flooring & Installation',
      'Granite Countertops',
      'Wall & Floor Finishing'
    ],
    iconName: 'TilesDiamond',
    badgeColor: '#3D4A5A',
    accentColor: '#64748B',
    category: 'interiors',
    image: '/assets/services/service-08-tiles.jpg'
  },
  {
    id: 'upvc-windows-doors',
    number: '09',
    title: 'uPVC Windows & Doors',
    shortDesc: 'Modern Designs. Lasting Performance.',
    fullDesc: 'Professional uPVC window and door solutions for modern homes and commercial spaces.',
    features: [
      'uPVC Window Installation',
      'uPVC Door Installation',
      'Sliding Windows & Doors',
      'Custom Window & Door Designs'
    ],
    iconName: 'UPVCWindowsDoors',
    badgeColor: '#0E7490',
    accentColor: '#06B6D4',
    category: 'interiors',
    image: '/assets/services/service-09-upvc.jpg'
  },
  {
    id: 'personal-home-theatre',
    number: '10',
    title: 'Personal Home Theatre',
    shortDesc: 'Cinema Experience. In Your Home.',
    fullDesc: 'Customized home theatre solutions with premium interiors, comfortable seating, acoustic panels, and audiovisual systems.',
    features: [
      'Custom Home Theatre Design',
      'Acoustic Wall Panels',
      'Screen & Projector Setup',
      'Surround Sound Integration'
    ],
    iconName: 'HomeTheatre',
    badgeColor: '#4338CA',
    accentColor: '#6366F1',
    category: 'interiors',
    image: '/assets/services/service-10-home-theatre.jpg'
  }
];
