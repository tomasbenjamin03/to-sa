import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'toysa-coll-01',
    name: 'Collar Doble Cadena Aureum',
    subtitle: 'Cadena Fígaro y dije con engaste de circonio en baño dorado',
    category: 'joyeria',
    categoryLabel: 'Joyería Fina',
    price: 18500,
    originalPrice: 24000,
    image: '/src/assets/images/jewelry_gold_necklace_1793883346820.jpg',
    badge: 'Más Vendido',
    rating: 4.9,
    reviewsCount: 124,
    material: 'Acero quirúrgico 316L con triple baño dorado hipoalergénico',
    description: 'Una composición sutil de dos cadenas de diferentes eslabones unidas por un solo cierre de seguridad. Acabado dorado brillante de alta durabilidad que no se oscurece con el uso diario.',
    features: [
      'Resistente al agua y al sudor (acabado Waterproof)',
      'Hipoalergénico, libre de níquel y plomo',
      'Largo ajustable: 40cm + 5cm de cadena extensora',
      'Cierre reforzado con grabado de la marca'
    ],
    inStock: true,
    colors: [
      { name: 'Baño Dorado Clásico', hex: '#D4AF37' },
      { name: 'Acero Plateado Brillante', hex: '#E5E7EB' }
    ],
    isNewArrival: false,
  },
  {
    id: 'toysa-case-01',
    name: 'Funda Atelier MagSafe Rose & Gold',
    subtitle: 'Cuero ecológico suave con marcos y botones electrochapados dorados',
    category: 'celulares',
    categoryLabel: 'Accesorios Celular',
    price: 16900,
    originalPrice: 21000,
    image: '/src/assets/images/phone_case_pearl_strap_1793883347692.jpg',
    badge: 'Exclusivo TOYSA',
    rating: 4.9,
    reviewsCount: 98,
    material: 'Piel vegana premium y aleación con bisel en baño dorado',
    description: 'La combinación perfecta entre estética y máxima protección para tu teléfono. Tacto aterciopelado, anillo magnético MagSafe de alta adherencia y borde sobreelevado de 1.5mm para proteger lentes y pantalla.',
    features: [
      'Aro magnético MagSafe integrado de alta potencia N52',
      'Interior de microfibra aterciopelada anti-rayas',
      'Orificios reforzados para enganchar correas y colgantes',
      'Protección anti-golpes en esquinas con cámara de aire'
    ],
    inStock: true,
    compatibility: [
      'iPhone 16 Pro Max',
      'iPhone 16 Pro',
      'iPhone 16',
      'iPhone 15 Pro Max',
      'iPhone 15 Pro',
      'iPhone 15',
      'iPhone 14 / 13',
      'Samsung Galaxy S25 Ultra',
      'Samsung Galaxy S24 Ultra'
    ],
    colors: [
      { name: 'Rosa Pastel & Dorado', hex: '#E8B4B8' },
      { name: 'Champagne Satinado', hex: '#F0E6D2' },
      { name: 'Negro Azabache & Dorado', hex: '#1C1917' }
    ],
    isNewArrival: true,
  },
  {
    id: 'toysa-strap-01',
    name: 'Colgante de Muñeca Perlas Barrocas & Dijes Dorados',
    subtitle: 'Perlas naturales de río y esferas metálicas con baño dorado',
    category: 'charms',
    categoryLabel: 'Charms & Correas',
    price: 9800,
    image: '/src/assets/images/phone_case_pearl_strap_1793883347692.jpg',
    badge: 'Hecho a Mano',
    rating: 5.0,
    reviewsCount: 86,
    material: 'Perlas de agua dulce auténticas y detalles en baño dorado',
    description: 'Transformá tu celular en una joya lista para lucir en la muñeca. Cada perla es seleccionada a mano y armada sobre hilo trenzado de acero ultra resistente para máxima seguridad.',
    features: [
      'Mosquetón universal compatible con cualquier funda de celular',
      'Incluye tarjeta adaptadora transparente para colocar sin pegamento',
      'Soporta hasta 6 kg de tensión continua',
      'Largo total: 22 cm con dije colgante TOYSA'
    ],
    inStock: true,
    colors: [
      { name: 'Perla Blanca Natural', hex: '#FAF9F6' },
      { name: 'Perla Rosa & Dorado', hex: '#FDE2D2' }
    ],
    isNewArrival: true,
  },
  {
    id: 'toysa-ring-01',
    name: 'Trilogía de Anillos Martillados Lumina',
    subtitle: 'Set de tres aros apilables en baño dorado y plateado',
    category: 'joyeria',
    categoryLabel: 'Joyería Fina',
    price: 14500,
    originalPrice: 19000,
    image: '/src/assets/images/collection_rings_tech_1793883347132.jpg',
    badge: 'Tendencia',
    rating: 4.8,
    reviewsCount: 67,
    material: 'Acero quirúrgico con baño dorado multicapa y circonitas',
    description: 'Diseño anatómico con textura martillada a mano. Incluye un anillo con incrustaciones de micro-circonias brillantes, una alianza trenzada y un aro liso pulido a espejo.',
    features: [
      'Tres aros independientes para usar juntos o en diferentes dedos',
      'Resistente al agua, alcohol en gel y cremas de manos',
      'Acabado pulido confort que no raspa ni engancha la ropa',
      'Presentación en estuche joyero protector'
    ],
    inStock: true,
    sizes: ['Talla 6 (16.5mm)', 'Talla 7 (17.3mm)', 'Talla 8 (18.1mm)', 'Talla 9 (18.9mm)'],
    colors: [
      { name: 'Dúo Dorado & Plateado', hex: '#D4AF37' },
      { name: 'Dorado Cálido Total', hex: '#E5C158' }
    ]
  },
  {
    id: 'toysa-stand-01',
    name: 'Soporte de Carga MagSafe de Escritorio',
    subtitle: 'Aluminio anodizado tono champagne con base porta-joyas',
    category: 'celulares',
    categoryLabel: 'Accesorios Celular',
    price: 19900,
    image: '/src/assets/images/collection_rings_tech_1793883347132.jpg',
    badge: 'Diseño Minimal',
    rating: 4.9,
    reviewsCount: 42,
    material: 'Aluminio mecanizado CNC en tono champagne dorado',
    description: 'Mantené tu teléfono en el ángulo visual perfecto para trabajar, ver videos o hacer videollamadas. La base cóncava inferior funciona como platillo para apoyar tus anillos y pulseras.',
    features: [
      'Bandeja inferior acolchada para apoyar anillos o reloj',
      'Paso de cable oculto para cargador MagSafe',
      'Ángulo ergonómico de 60º ideal para Face ID y videollamadas',
      'Base antideslizante con almohadillas nano-grip'
    ],
    inStock: true,
    colors: [
      { name: 'Champagne Dorado', hex: '#D8C3A5' },
      { name: 'Titanio Natural', hex: '#C0C0C0' }
    ]
  },
  {
    id: 'toysa-set-01',
    name: 'Set Dúo TOYSA: Joya & Funda con Correa',
    subtitle: 'Funda Rose MagSafe + Collar Aureum + Correa de Perlas',
    category: 'sets',
    categoryLabel: 'Sets de Regalo',
    price: 38500,
    originalPrice: 45200,
    image: '/src/assets/images/hero_jewelry_tech_1793883345697.jpg',
    badge: 'Ahorro 15% Dúo',
    rating: 5.0,
    reviewsCount: 153,
    material: 'Baño dorado de alta duración, perlas naturales y eco-cuero',
    description: 'El conjunto insignia de TOYSA. La armonía total entre tus accesorios favoritos y tu celular. Viene listo para regalar en caja rígida con lazo de raso y tarjeta dedicatoria.',
    features: [
      'Incluye Funda MagSafe en el modelo de teléfono que elijas',
      'Incluye Collar Doble Aureum bañado en tono dorado',
      'Incluye Correa de muñeca en perlas naturales de río',
      'Caja de regalo artesanal TOYSA sin costo adicional'
    ],
    inStock: true,
    compatibility: [
      'iPhone 16 Pro Max',
      'iPhone 16 Pro',
      'iPhone 15 Pro Max',
      'iPhone 15 Pro',
      'iPhone 14 Pro Max',
      'Samsung Galaxy S25 Ultra',
      'Samsung Galaxy S24 Ultra'
    ],
    colors: [
      { name: 'Colección Rosa Pastel', hex: '#E8B4B8' },
      { name: 'Colección Marfil Clásico', hex: '#FAF9F6' }
    ],
    isNewArrival: true,
  },
  {
    id: 'toysa-ear-01',
    name: 'Aros Huggies Mini con Zirconias y Baño Dorado',
    subtitle: 'Argollitas de cierre clicker con micropavé brillante',
    category: 'joyeria',
    categoryLabel: 'Joyería Fina',
    price: 8900,
    image: '/src/assets/images/jewelry_gold_necklace_1793883346820.jpg',
    badge: 'Básico Diario',
    rating: 4.7,
    reviewsCount: 89,
    material: 'Acero quirúrgico 316L con enchapado dorado brillante',
    description: 'Argollitas ultra cómodas con cierre clicker seguro. Pensadas para usar todos los días sin molestias, incluso al dormir o hablar por teléfono con el celular pegado a la oreja.',
    features: [
      'Cierre clicker automático de alta retención',
      'Diámetro: 10mm (grosor 2mm)',
      'No se despintan ni causan alergias',
      'Aptas para pileta y uso bajo la ducha'
    ],
    inStock: true,
    colors: [
      { name: 'Dorado Brillante', hex: '#D4AF37' },
      { name: 'Plateado Espejo', hex: '#E5E7EB' }
    ]
  },
  {
    id: 'toysa-wallet-01',
    name: 'Billetera MagSafe con Cadena Cruzada',
    subtitle: 'Tarjetero magnético con correa desmontable en eslabones dorados',
    category: 'celulares',
    categoryLabel: 'Accesorios Celular',
    price: 15500,
    originalPrice: 19500,
    image: '/src/assets/images/hero_jewelry_tech_1793883345697.jpg',
    badge: 'Manos Libres',
    rating: 4.9,
    reviewsCount: 74,
    material: 'Eco-cuero texturado y cadena de eslabones con baño dorado',
    description: 'Llevá tu celular como una mini bandolera de moda. Capacidad para hasta 3 tarjetas o documentos con protección magnética y cadena metálica dorada de 115cm.',
    features: [
      'Capacidad para 3 tarjetas de crédito o SUBE/DNI',
      'Cadena metálica liviana y desmontable de 115 cm',
      'Agarre magnético ultra firme sobre cualquier funda MagSafe',
      'Costuras reforzadas a tono'
    ],
    inStock: true,
    colors: [
      { name: 'Suela / Caramelo', hex: '#C68B59' },
      { name: 'Negro Clásico', hex: '#1C1917' },
      { name: 'Rosa Pastel', hex: '#E8B4B8' }
    ]
  }
];

export const BRAND_INFO = {
  name: 'TOYSA',
  tagline: 'Joyería & Accesorios para Celulares',
  instagramHandle: '@toysa_23',
  instagramUrl: 'https://www.instagram.com/toysa_23?utm_source=ig_web_button_share_sheet&dlrf=ZDNlZDc0MzIxNw==',
  whatsappUrl: 'https://wa.me/?text=Hola%20TOYSA%20vi%20su%20página%20y%20me%20gustaría%20más%20información%20sobre%20un%20producto',
  description: 'Boutique especializada en joyería contemporánea, cadenas, anillos y los accesorios más exclusivos para celulares (fundas de tendencia, colgantes de perlas y protección con estilo).',
};

export const INSTAGRAM_POSTS = [
  {
    id: 'ig-1',
    image: '/src/assets/images/hero_jewelry_tech_1793883345697.jpg',
    caption: 'Combinaciones que enamoran ✨ Joyas en oro con tu funda favorita. Disponibles en @toysa_23 🤍',
    likes: 342,
    comments: 28,
    tag: '#toysa #joyeria #accesorioscelular',
  },
  {
    id: 'ig-2',
    image: '/src/assets/images/phone_case_pearl_strap_1793883347692.jpg',
    caption: 'Correas de perlas naturales de río para que lleves tu celular como una verdadera joya 📿📱',
    likes: 519,
    comments: 44,
    tag: '#phonecharm #perlas #cases',
  },
  {
    id: 'ig-3',
    image: '/src/assets/images/jewelry_gold_necklace_1793883346820.jpg',
    caption: 'Nuevos ingresos de collares y aros en acero con baño dorado waterproof. No te quedes sin el tuyo ✨',
    likes: 412,
    comments: 31,
    tag: '#bañodorado #joyasunicas',
  },
  {
    id: 'ig-4',
    image: '/src/assets/images/collection_rings_tech_1793883347132.jpg',
    caption: 'Detalles que marcan la diferencia en tu día a día. Anillos combinados + base MagSafe @toysa_23',
    likes: 289,
    comments: 19,
    tag: '#estilo #toysa_23',
  },
];

export const CATEGORIES = [
  { id: 'all', name: 'Toda la Colección' },
  { id: 'joyeria', name: 'Joyería Fina' },
  { id: 'celulares', name: 'Accesorios Celular' },
  { id: 'charms', name: 'Charms & Correas' },
  { id: 'sets', name: 'Sets de Regalo Dúo' },
];

export const REVIEWS = [
  {
    id: 'rev-1',
    name: 'Valentina Morales',
    location: 'Madrid, España',
    date: 'Hace 3 días',
    productName: 'Funda TOYSA Rose & Colgante Perlas',
    rating: 5,
    comment: 'La calidad del cuero y las perlas supera con creces lo que esperaba. Me encanta que mi móvil ahora parece una joya más a juego con mis collares de oro. La entrega tardó solo 24 horas.',
    verified: true,
  },
  {
    id: 'rev-2',
    name: 'Sofía Carrión',
    location: 'Barcelona, España',
    date: 'Hace 1 semana',
    productName: 'Collar Doble Cadena Aureum',
    rating: 5,
    comment: 'El baño de oro tiene un tono dorado cálido y elegante, nada artificial. Me he duchado con él y sigue impecable. El empaque venía perfumado y con tarjeta caligrafiada, un detallazo.',
    verified: true,
  },
  {
    id: 'rev-3',
    name: 'Camila Restrepo',
    location: 'Valencia, España',
    date: 'Hace 2 semanas',
    productName: 'Set Co-Creation: Dúo Joya & Funda',
    rating: 5,
    comment: 'Fue el regalo perfecto para mi aniversario. Poder elegir el modelo de iPhone exacto y el tamaño del anillo en el mismo pedido fue súper fácil. Los acabados metálicos son de primera.',
    verified: true,
  }
];

