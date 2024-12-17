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
  name: string;
  is_special: number;
  off_percent: string;
  price: string;
  images: Banner[];
}
