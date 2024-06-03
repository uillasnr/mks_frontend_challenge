import { colors } from "@/app/styles/colors";
import styled from "styled-components";

export const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 6rem;
  background-color: ${colors.secondary};
  height: 6.3rem;
  width: 100%;

  @media (max-width: 768px) {
    padding: 10px 2rem;
  }

  @media (max-width: 480px) {
    padding: 10px 1rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  gap: 0.5rem;

  h1 {
    color: ${colors.primary};
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 1.1rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  h3 {
    margin-top: 0.5rem;
    color: ${colors.primary};
    font-weight: 300;
    font-size: 1.25rem;
    line-height: 1.1rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.875rem;
    }
  }
`;

export const Card = styled.div`
  cursor: pointer;
  border-radius: 0.5rem;
  height: 2.8rem;
  width: 5.6rem;
  background-color: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;

  span {
    font-size: 1.12rem;
    font-weight: 700;
    line-height: 1.371rem;
    color: ${colors.black};

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.875rem;
    }
  }

  @media (max-width: 768px) {
    height: 2.5rem;
    width: 5rem;
  }

  @media (max-width: 480px) {
    height: 2.2rem;
    width: 4.5rem;
  }
`;
