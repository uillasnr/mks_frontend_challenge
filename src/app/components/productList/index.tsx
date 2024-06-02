"use client";

import React, { useState, useEffect } from "react";
import { useProductData } from "@/app/hooks/useProductsData";
import { ProductItem } from "../productItem";
import { ProductListContainer } from "./styles";
import SkeletonProduct from "./SkeletonProduct";

const ProductList = () => {
  const { data, isLoading } = useProductData();
  const [showProducts, setShowProducts] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProducts(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading || !showProducts) {
    return (
      <ProductListContainer>
        {[...Array(10)].map((_, index) => (
          <SkeletonProduct key={index} />
        ))}
      </ProductListContainer>
    );
  }

  return (
    <ProductListContainer>
      {data?.products.map((product) => (
        <div key={product.id}>
          <ProductItem product={product} />
        </div>
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
