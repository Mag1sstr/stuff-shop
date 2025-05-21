export interface ICategories {
  id: number;
  name: string;
  slug: string;
  image: string;
}
export interface IProducts {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
    slug: string;
  };
  images: string[];
}
export interface IProductsParams {
  title?: string;
  price_min?: string;
  price_max?: string;
  categoryId?: string;
}
