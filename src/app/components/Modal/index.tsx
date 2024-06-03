import React from "react";
import { ModalContainer, ModalContent, CloseButton, Title } from "./styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return ;

  return (
    <ModalContainer onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>X</CloseButton>
        <Title>Compra Efetuada</Title>
        <p>Sua compra foi realizada com sucesso!</p>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
