import React, { createContext, ReactNode, useEffect, useState } from "react";
import { Product } from "../interfaces/products-data";


interface CartContextType {
  products: Product[];
  totalPrice: number;
  addProductToCart: (product: Product, emptyCart?: boolean) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  removeProductFromCart: (productId: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType>({
  products: [],
  totalPrice: 0,
  addProductToCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  removeProductFromCart: () => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {

  const [products, setProducts] = useState<Product[]>([]);
//Erro next.js
/*   const [products, setProducts] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem("MKS_frontend");
    return storagedCart ? JSON.parse(storagedCart) : [];
  }); */


  const totalPrice = products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  
  useEffect(() => {
    localStorage.setItem("MKS_frontend", JSON.stringify(products));
  }, [products]);

  const addProductToCart = (product: Product, emptyCart?: boolean) => {
    if (emptyCart) {
     
      setProducts([product]);
      return;
    }

  
    const isProductAlreadyOnCart = products.some(
      (cartProduct) => cartProduct.id === product.id
    );

    if (isProductAlreadyOnCart) {
  
      setProducts((prev) =>
        prev.map((cartProduct) =>
          cartProduct.id === product.id
            ? {
                ...cartProduct,
                quantity: cartProduct.quantity + product.quantity,
              }
            : cartProduct
        )
      );
    } else {
   
      setProducts((prev) => [...prev, product]);
    }
  };

  const increaseQuantity = (productId: number) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decreaseQuantity = (productId: number) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === productId && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

 
  const removeProductFromCart = (productId: number) => {
    setProducts((prev) => {
      const updatedProducts = prev.filter(
        (product) => product.id !== productId
      );
      localStorage.setItem("MKS_frontend", JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  };

 
  const clearCart = () => {
    setProducts([]); 
    localStorage.removeItem("MKS_frontend");
  };

  return (
    <CartContext.Provider
      value={{
        products,
        totalPrice,
        addProductToCart,
        increaseQuantity,
        decreaseQuantity,
        removeProductFromCart,
        clearCart, 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
