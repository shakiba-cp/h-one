import type { Banner, ProductItem, Story } from "./Banner";

export interface HomePageDto {
  slidersData: Banner[];
  cardsData: Banner[];
  categories: {
    title: string;
    products: ProductItem[];
  }[];
  stories: Story[];
}
