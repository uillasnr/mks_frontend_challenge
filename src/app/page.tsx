"use client";
import React, { useState, useEffect } from "react";
import Header from "./components/header";
import ProductList from "./components/productList";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCloseSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Header />
      <ProductList />
      <Sidebar
        isOpen={isOpen}
        onClose={handleCloseSidebar}
        onOpenModal={handleOpenModal}
      />

      <Modal isOpen={showModal} onClose={handleCloseModal} />
    </div>
  );
}
