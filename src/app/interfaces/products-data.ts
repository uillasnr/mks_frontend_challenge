export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  photo: string;
  quantity: number;
}

export interface ProductResponse {
  products: Product[];
}

