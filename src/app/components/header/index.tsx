"use client";
import Image from "next/image";
import { TagHeader, Logo, Card } from "./style";
import { useContext, useState } from "react";
import Sidebar from "../sidebar";
import { motion } from "framer-motion";
import { CartContext } from "@/app/context/cart";

export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { products } = useContext(CartContext);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
          <Image src="/vector.png" alt="Carrinho" width={19} height={18} />
          <span>{products.length > 0 ? products.length : 0}</span>
        </Card>
      </motion.div>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </TagHeader>
  );
};

export default Header;