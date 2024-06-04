import { colors } from "@/app/styles/colors";
import styled from "styled-components";

export const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 5rem 10rem;
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
