import styled from "styled-components";
import { colors } from "@/styles/colors";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.gray};
  width: 100%;
  height: 2.125rem;

  h2 {
    font-size: 0.914rem;
    font-weight: 400;
    color: ${colors.black};
  }
`;
