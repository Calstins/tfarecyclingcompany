export type ProductCategory =
  | 'tables'
  | 'chairs'
  | 'sets'
  | 'decor'
  | 'seating'
  | 'garden';

export interface ProductDimensions {
  height?: string;
  width?: string;
  depth?: string;
  diameter?: string;
  seatHeight?: string;
  chairs?: string;
  table?: string;
  oneSeat?: string;
  twoSeat?: string;
  threeSeat?: string;
  [key: string]: string | undefined;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  price: number;
  images: string[];
  description: string;
  longDescription: string;
  features: string[];
  dimensions: ProductDimensions;
  inStock: boolean;
  featured: boolean;
  tags: string[];
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone?: string;
  product: string;
  quantity: number;
  message: string;
}

// SEO Types
export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  openGraph?: {
    type?: string;
    locale?: string;
    url?: string;
    title?: string;
    description?: string;
    images?: {
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }[];
  };
}

// Gallery Types
export interface GalleryImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface GalleryVideo {
  url: string;
  title: string;
  thumbnail?: string;
}

// Slider Types
export interface SlideContent {
  image: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}
