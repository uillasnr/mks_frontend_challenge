import styled from "styled-components";
import { colors } from "@/styles/colors";
import { motion } from "framer-motion";

export const ProductCardContainer = styled(motion.div)`
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.primary};
  align-items: center;
  box-shadow: 0px 2px 8px 0px #00000022;
  width: 13.598rem;
  height: 330px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;
  margin-bottom: 0.8rem;

  .ImageProduct {
    margin: 10px 0px 10px 0px;
  }

  &:hover {
    transform: scale(1.02);
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 2.5rem;
  background-color: ${colors.secondary};
  cursor: pointer;
  border: none;
  border-radius: 0 0 0.5rem 0.5rem;
  color: white;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  position: absolute;
  bottom: 0;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

export const ProductDetails = styled.div`
  padding: 16px;
  width: 100%;
  flex-grow: 1;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    gap: 0.313rem;
  }

  h1 {
    font-size: 1rem;
    line-height: 1.188rem;
    font-weight: 400;
    color: ${colors.MediumGray};
  }

  h2 {
    width: 4.875rem;
    height: 1.625rem;
    color: ${colors.primary};
    background-color: ${colors.MediumGray};
    border-radius: 0.313rem;
    font-size: 0.938rem;
    line-height: 1.625rem;
    font-weight: 700;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.625rem;
  }

  p {
    font-size: 0.75rem;
    font-weight: 300;
    line-height: 1rem;
    color: ${colors.MediumGray};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
