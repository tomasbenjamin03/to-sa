export type ProductCategory = 'joyeria' | 'celulares' | 'charms' | 'sets';

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: ProductCategory;
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  rating: number;
  reviewsCount: number;
  material: string;
  description: string;
  features: string[];
  inStock: boolean;
  compatibility?: string[]; // For phone accessories
  sizes?: string[]; // For rings or bracelets
  colors?: { name: string; hex: string }[];
  isNewArrival?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedModel?: string;
  selectedSize?: string;
  giftWrap?: boolean;
}

export interface CustomerDetails {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  notes?: string;
  paymentMethod: 'card' | 'bizum' | 'cod' | 'applepay';
}

export interface PlacedOrder {
  orderId: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
  customer: CustomerDetails;
}

export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  tag: string;
  productRef?: string;
}

