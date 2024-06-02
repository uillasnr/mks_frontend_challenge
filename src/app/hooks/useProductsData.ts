import { useQuery } from "react-query";
import { ProductResponse } from "../interfaces/products-data";

const fetchProducts = async (): Promise<ProductResponse> => {
  const response = await fetch(
    "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=50&sortBy=id&orderBy=DESC"
  );

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
