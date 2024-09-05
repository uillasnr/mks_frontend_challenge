import { useQuery } from "react-query";
import { ProductResponse } from "../interfaces/products-data";

const fetchProducts = async (): Promise<ProductResponse> => {
  const response = await fetch("https://fakestoreapi.in/api/products?limit=10");

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return await response.json();
};

export function useProductData() {
  const query = useQuery({
    queryFn: fetchProducts,
    queryKey: ["product-data"],
  });

  return query;
}
