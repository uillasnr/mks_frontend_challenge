import { colors } from "@/app/styles/colors";
import styled from "styled-components";

export const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 5rem 5rem;
  background-color: ${colors.bg};

  @media (max-width: 1030px) {
    padding: 5rem 5rem;
  }
  @media (max-width: 870px) {
    padding: 5rem 4rem;
  }

  @media (max-width: 576px) {
    padding: 5rem 1rem;
  }
`;

export const EmptyMessage = styled.div`
  font-size: 1.2rem;
  color: ${colors.MediumGray};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
