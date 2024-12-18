import type { Banner, ProductItem, Story } from "./Banner";

export interface HomePageDto {
  slidersData: Banner[];
  cardsData: Banner[];
  categories: {
    name: string;
    products: ProductItem[];
  }[];
  stories: Story[];
}
