import Image from "next/image";
import { ProductCardContainer, ProductDetails, Button } from "./styles";
import { Product } from "@/app/interfaces/products-data";
import { formatCurrency } from "@/app/utils/price";
import { useContext } from "react";
import { CartContext } from "@/app/context/cart";
import { motion } from "framer-motion";

export function ProductItem({ product }: { product: Product }) {
  const { addProductToCart } = useContext(CartContext);

  const handleAddToCartClick = () => {
    addProductToCart({ ...product, quantity: 1 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ProductCardContainer>
        <Image
          src={product.photo}
          alt={product.name}
          width={121.64}
          height={138}
          className="ImageProduct"
        />
        <ProductDetails>
          <div>
            <h1>{product.name}</h1>
            <h2>{formatCurrency(product.price)}</h2>
          </div>
          {/*   <p>{product.brand}</p> */}
          <p>{product.description}</p>
        </ProductDetails>
        <Button onClick={handleAddToCartClick}>
          <Image src="/Path.png" alt="Carrinho" width={12} height={13} />
          Comprar
        </Button>
      </ProductCardContainer>
    </motion.div>
  );
}
