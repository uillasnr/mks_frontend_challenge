import React, { useContext, useEffect, useRef } from "react";
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
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleCheckout = () => {
    onClose();
    onOpenModal();
    clearCart;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <StyledSidebarContainer style={{ display: isOpen ? "block" : "none" }}>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.5 }}
      >
        <SidebarContent ref={sidebarRef}>
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
          <button onClick={handleCheckout} className="finalizar-compra-button">
            Finalizar Compra
          </button>
        )}
      </motion.div>
    </StyledSidebarContainer>
  );
};
export default Sidebar;
