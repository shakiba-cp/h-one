import type { Banner, ProductItem } from "./Banner";
import type { Category } from "./Category";

export interface Product {
  attributed: [];
  colors: ProductColor[];
  categories: Category[];
  description: string;
  id: number;
  images: ProductImage[];
  name: string;
  offPercent: string;
  price: string;
  relatedProducts: ProductItem[];
  sizingTable: [];
}
export interface ProductColor {
  color_name: string;
  color_hex: string;
  color_sizes: {};
}
export interface ProductImage {
  sourece: string;
  title: string;
  color_name: string;
}