export interface IProductData {
    imageSrc: string;
    imageGallery: Array<{
      imageSrc: string;
      imageAlt: string;
    }>;
    title: string;
    price: number;
    discountPercent: number;
    category: string;
    parentCategory: string;
  }
  