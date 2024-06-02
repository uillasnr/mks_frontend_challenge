"use client";

import { TagHeader, Logo, Card } from "./styles";
import { useContext, useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { motion } from "framer-motion";
import { CartContext } from "@/app/context/cart";
import Sidebar from "../Sidebar";

export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { products } = useContext(CartContext);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const openModal = () => {};

  return (
    <TagHeader>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ type: "tween", duration: 0.5 }}
      >
        <Logo>
          <h1>MKS</h1>
          <h3>Sistemas</h3>
        </Logo>
      </motion.div>

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ type: "tween", duration: 0.5 }}
      >
        <Card onClick={toggleSidebar}>
          <TiShoppingCart size={21} />
          <span>{products.length > 0 ? products.length : 0}</span>
        </Card>
      </motion.div>
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
        onOpenModal={openModal}
      />
    </TagHeader>
  );
};

export default Header;
