export interface Banner {
  link: string;
  source: string;
  title: string;
}
export interface Story {
  content: string;
  description: string;
  image: string;
  link: string;
  title: string;
}
export interface ProductItem {
  id: number;
  name: string;
  image: string;
  is_special: number;
  off_percent: string;
  price: string;
  categoryName: string;
  categories: {
    id: number;
    name: string;
  }[];
  images: Banner[];
}
