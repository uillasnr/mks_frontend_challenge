export const colors = {
  bg:"#F9F9F9",
  primary: "#FFFFFF",
  secondary: "#0F52BA",
  black: "#000000",
  gray: "#EEEEEE",
  MediumGray: "#2C2C2C",
  SilverGray: "#BFBFBF"
};


/* import React, { createContext, ReactNode, useEffect, useState } from "react";
import { Product } from "../interfaces/products-data";

// Defina o tipo do contexto como CartContextType
interface CartContextType {
  products: Product[];
  totalPrice: number;
  addProductToCart: (product: Product, emptyCart?: boolean) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  removeProductFromCart: (productId: number) => void;
  clearCart: () => void;
}

// Crie o contexto com o tipo definido
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
  // Inicializa o estado do carrinho com os dados do localStorage

  const [products, setProducts] = useState<Product[]>([]);

   const [products, setProducts] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem("MKS_frontend");
    return storagedCart ? JSON.parse(storagedCart) : [];
  }); 

   const [products, setProducts] = useState<Product[]>(() => {
    if (typeof window !== 'undefined') {
      const storagedCart = localStorage.getItem("MKS_frontend");
      return storagedCart ? JSON.parse(storagedCart) : [];
    }
    return [];
  });
 
  // Calcula o preço total dos produtos no carrinho
  const totalPrice = products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  // Efeito para salvar o carrinho no localStorage sempre que ele mudar
  useEffect(() => {
    localStorage.setItem("MKS_frontend", JSON.stringify(products));
  }, [products]);

  const addProductToCart = (product: Product, emptyCart?: boolean) => {
    if (emptyCart) {
      // Esvazia o carrinho se o parâmetro emptyCart for verdadeiro
      setProducts([product]);
      return;
    }

    // Verifica se o produto já está no carrinho
    const isProductAlreadyOnCart = products.some(
      (cartProduct) => cartProduct.id === product.id
    );

    if (isProductAlreadyOnCart) {
      // Se o produto já está no carrinho, aumenta a quantidade do produto
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
      // Se o produto não está no carrinho, adiciona o produto ao carrinho
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

  //Remover produto do carrinho
  const removeProductFromCart = (productId: number) => {
    setProducts((prev) => {
      const updatedProducts = prev.filter(
        (product) => product.id !== productId
      );
      localStorage.setItem("MKS_frontend", JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  };

  // Defina a função clearCart para remover todos os produtos do carrinho
  const clearCart = () => {
    console.log("Limpando o carrinho...");
    setProducts([]); // Define a lista de produtos como vazia
    localStorage.removeItem("MKS_frontend"); // Remove o carrinho do localStorage
    console.log("Carrinho limpo.");
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
        clearCart, // Passe a função clearCart para o contexto
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
 */