import { Hit } from "@algolia/client-search";

type ProductRecord = {
  brand: string;
  categories: string[];
  comments: number;
  description: string;
  free_shipping: boolean;
  hierarchicalCategories: {
    lvl0: string;
    lvl1?: string;
    lvl2?: string;
    lvl3?: string;
    lvl4?: string;
    lvl5?: string;
    lvl6?: string;
  };
  image: string;
  name: string;
  popularity: number;
  price: number;
  prince_range: string;
  rating: number;
  sale: boolean;
  sale_price: number;
  type: string;
};

export type ProductHit = Hit<ProductRecord>;
