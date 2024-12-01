import type { IProductData } from "./ProductModel";

export interface IProductList {
    products: IProductData[]
}


export interface IHomePageData {
    newestBags: IProductList,
    newestCoats: IProductList,
    newestProducts: IProductList,
    newestJeans: IProductList,
    newestMens: IProductList,
    newestPalto: IProductList
}


export interface ICategories {
    id: number;
    imageSrc: string;
}
export interface IBanner {
    id: number;
    link: string;
    imageSrc: string;
}
export interface IBlog {
    imageSrc: string;
    title: string;
    date: string;
    category: string;
    link: string;
}
export interface IStory {
    id: number;
    href: string;
    title: string;
    target: string;
    dataToggle: string;
    dataType: string;
    dataSrc: string;
    dataUrl: string;
    dataTarget: string;
    imageSrc: string;
    text: string;
}