export interface Product {
   size: string;
   title: string;
   model: string;
   diaCoupling?: string;
   diaPipe?: string;
   weight: string;
   price: number;
   priceDiscount: number | string;
   imageBig: string;
   image: string;
   imagesFeatures: string[];
}

export interface Products {
   [key: string]: Product[];
}
