// /types/product.d.ts

export interface Product {
  id: number;
  brand: string;
  title: string;
  price: number;
  image: string;
  description?: string;
  rating: number;
  sold: number;
}
