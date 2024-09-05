export interface Product {
  id: number;
  title: string;
  brand: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

export interface ProductResponse {
  products: Product[];
}

