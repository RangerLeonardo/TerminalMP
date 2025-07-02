export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  features: string[];
  badge?: string;
  popular?: boolean;
  category: string;
  description: string;
  specifications: {
    screen?: string;
    connectivity: string[];
    battery?: string;
    dimensions: string;
    weight: string;
  };
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Point Smart",
    price: 2499,
    image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg",
    features: [
      "Pantalla táctil de 5 pulgadas",
      "WiFi y 4G integrado",
      "Batería de larga duración",
      "Acepta chip, contactless y QR",
      "Impresora térmica integrada"
    ],
    badge: "Más Popular",
    popular: true,
    category: "Terminal Inteligente",
    description: "La terminal más completa para negocios medianos y grandes. Perfecta para restaurantes, tiendas y servicios.",
    specifications: {
      screen: "5 pulgadas táctil",
      connectivity: ["WiFi", "4G", "Bluetooth"],
      battery: "8 horas de uso continuo",
      dimensions: "180 x 85 x 55 mm",
      weight: "450g"
    },
    inStock: true
  },
  {
    id: 2,
    name: "Point Pro",
    price: 3999,
    originalPrice: 4499,
    image: "https://images.pexels.com/photos/4386295/pexels-photo-4386295.jpeg",
    features: [
      "Pantalla táctil de 7 pulgadas",
      "Android integrado",
      "Cámara para códigos QR",
      "Múltiples conectividades",
      "Sistema POS completo"
    ],
    badge: "Premium",
    popular: false,
    category: "Terminal Premium",
    description: "La solución más avanzada con sistema POS completo. Ideal para negocios que requieren gestión integral.",
    specifications: {
      screen: "7 pulgadas táctil HD",
      connectivity: ["WiFi", "4G", "Bluetooth", "Ethernet"],
      battery: "12 horas de uso continuo",
      dimensions: "220 x 120 x 65 mm",
      weight: "680g"
    },
    inStock: true
  },
  {
    id: 3,
    name: "Point Mini",
    price: 1299,
    image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg",
    features: [
      "Diseño compacto",
      "Conexión Bluetooth",
      "Batería recargable",
      "Chip y contactless",
      "App móvil incluida"
    ],
    popular: false,
    category: "Terminal Compacta",
    description: "Perfecta para pequeños comercios y vendedores ambulantes. Fácil de transportar y usar.",
    specifications: {
      connectivity: ["Bluetooth"],
      battery: "6 horas de uso continuo",
      dimensions: "120 x 70 x 25 mm",
      weight: "180g"
    },
    inStock: true
  },
  {
    id: 4,
    name: "Point Desk",
    price: 1899,
    image: "https://images.pexels.com/photos/5632381/pexels-photo-5632381.jpeg",
    features: [
      "Base fija para mostrador",
      "Pantalla de 4 pulgadas",
      "Conexión WiFi",
      "Lector de códigos QR",
      "Impresora de tickets"
    ],
    popular: false,
    category: "Terminal Fija",
    description: "Diseñada para puntos de venta fijos. Robusta y confiable para uso intensivo diario.",
    specifications: {
      screen: "4 pulgadas LCD",
      connectivity: ["WiFi", "Ethernet"],
      dimensions: "200 x 150 x 80 mm",
      weight: "520g"
    },
    inStock: true
  },
  {
    id: 5,
    name: "Point Flex",
    price: 1799,
    originalPrice: 1999,
    image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg",
    features: [
      "Diseño flexible 2 en 1",
      "Pantalla táctil de 5 pulgadas",
      "Base desmontable",
      "WiFi y Bluetooth",
      "Batería intercambiable"
    ],
    badge: "Nuevo",
    popular: false,
    category: "Terminal Híbrida",
    description: "La versatilidad que necesitas. Úsala como terminal fija o portátil según tus necesidades.",
    specifications: {
      screen: "5 pulgadas táctil",
      connectivity: ["WiFi", "Bluetooth"],
      battery: "10 horas de uso continuo",
      dimensions: "185 x 90 x 50 mm",
      weight: "380g"
    },
    inStock: true
  },
  {
    id: 6,
    name: "Point Express",
    price: 899,
    image: "https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg",
    features: [
      "Ultra compacta",
      "Solo contactless",
      "Conexión smartphone",
      "Batería de 48 horas",
      "Perfecta para delivery"
    ],
    popular: false,
    category: "Terminal Básica",
    description: "La opción más económica para emprendedores. Ideal para delivery y ventas ocasionales.",
    specifications: {
      connectivity: ["Bluetooth"],
      battery: "48 horas en standby",
      dimensions: "80 x 50 x 15 mm",
      weight: "85g"
    },
    inStock: false
  }
];