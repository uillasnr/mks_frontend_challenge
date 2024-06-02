import React from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

const SkeletonContainer = styled.div`
  animation: ${shimmer} 1.5s linear infinite forwards;
  background: linear-gradient(to right, #f6f7f8 8%, #edeef1 18%, #f6f7f8 33%);
  background-size: 1000px 104px;
  height: 330px;
  width: 13.598rem;
  min-width: 13.598rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 10px;
  max-height: 330px; 
  max-width: 13.598rem; 
`;

const SkeletonProduct = () => {
  return <SkeletonContainer />;
};

export default SkeletonProduct;
