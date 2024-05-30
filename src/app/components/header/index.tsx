"use client";
import Image from "next/image";
import { TagHeader, Logo, Card } from "./style";

export const Header = () => {
  return (
    <TagHeader>
      <Logo>
        <h1>MKS</h1>
        <h3>Sistemas</h3>
      </Logo>
      <Card>
        <Image src="/vector.png" alt="Carrinho" width={19} height={18} />
        <span>0</span>
      </Card>
    </TagHeader>
  );
};

export default Header;
