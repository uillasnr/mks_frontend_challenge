import React, { useContext } from "react";
import { motion } from "framer-motion";
import { CartContext } from "@/app/context/cart";
import {
  StyledSidebarContainer,
  SidebarContent,
  SidebarHeader,
  Content,
  CardPoduct,
  ButtonQuantity,
  TotalValueContainer,
  Button,
} from "./styles";
import Image from "next/image";
import { formatCurrency } from "@/app/utils/price";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenModal: () => void;
}

const Sidebar = ({ isOpen, onClose, onOpenModal }: SidebarProps) => {
  const {
    products,
    increaseQuantity,
    decreaseQuantity,
    removeProductFromCart,
    totalPrice,
    clearCart,
  } = useContext(CartContext);

  const handleCheckout = () => {
    onClose();
    clearCart();
    onOpenModal();
  };

  return (
    <StyledSidebarContainer style={{ display: isOpen ? "block" : "none" }}>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.5 }}
      >
        <SidebarContent>
          <SidebarHeader>
            <h1>Carrinho de compras</h1>
            <button onClick={onClose}>×</button>
          </SidebarHeader>

          <Content>
            {products.length === 0 ? (
              <h1>Seu carrinho está vazio.</h1>
            ) : (
              <>
                {products.map((product) => (
                  <CardPoduct key={product.id}>
                    <button
                      className="delete-button"
                      onClick={() => removeProductFromCart(product.id)}
                    >
                      X
                    </button>
                    <Image
                      src={product.photo}
                      alt={product.name}
                      width={60}
                      height={60}
                      layout="intrinsic"
                    />

                    <p>{product.name}</p>

                    <ButtonQuantity>
                      <h3>Qtd:</h3>

                      <div>
                        <button onClick={() => decreaseQuantity(product.id)}>
                          -
                        </button>

                        <span>{product.quantity}</span>

                        <button onClick={() => increaseQuantity(product.id)}>
                          +
                        </button>
                      </div>
                    </ButtonQuantity>

                    <h2>{formatCurrency(product.price)}</h2>
                  </CardPoduct>
                ))}
              </>
            )}
          </Content>

          {products.length > 0 && (
            <TotalValueContainer>
              <div>
                <h1>Total:</h1>
                <h1>{formatCurrency(totalPrice)}</h1>
              </div>
            </TotalValueContainer>
          )}
        </SidebarContent>

        {products.length > 0 && (
          <Button onClick={handleCheckout}>Finalizar Compra</Button>
        )}
      </motion.div>
    </StyledSidebarContainer>
  );
};
export default Sidebar;
