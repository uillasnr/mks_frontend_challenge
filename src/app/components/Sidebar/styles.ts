import styled from "styled-components";
import { colors } from "@/app/styles/colors";

export const StyledSidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 30.375rem;
  background-color: ${colors.secondary};
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  transform: translateX(0);
  transition: transform 0.3s ease-in-out;
  min-height: 100vh;

  
  

  @media (max-width: 30rem) {
    width: 100%;
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    color: ${colors.primary};
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2.057rem;
    width: 11.25rem;
    padding-left: 1rem;
  }

  button {
    border-radius: 100%;
    width: 3.125rem;
    height: 3.125rem;
    background-color: ${colors.black};
    color: ${colors.primary};
    border: none;
    cursor: pointer;
    font-size: 1.75rem;
    font-weight: 400;
    line-height: 1.875rem;
    transition: opacity 0.3s ease;
    opacity: 1;

    &:hover {
      opacity: 0.75;
    }
  }
`;

export const SidebarContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarContent = styled.div`
  position: relative;
  padding: 1.125rem;
  min-height: 88vh;
  height: 88vh;
  display: flex;

  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.125rem;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  h1 {
    color: ${colors.primary};
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.063rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20rem;
  }

  h2 {
    color: ${colors.black};
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.063rem;
    width: 5.125rem;
    margin-left: 0.5rem;
  }
`;

export const TotalValueContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 30.375rem;
  background-color: ${colors.secondary};
  padding: 1.125rem;
  display: flex;
  justify-content: space-between;

  h1 {
    color: ${colors.primary};
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2.057rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-right: 1.8rem;
  }

  @media (max-width: 470px) {
    div {
      width: 93%;
    }
    @media (max-width: 430px) {
      div {
        width: 85%;
      }
    }
    @media (max-width: 415px) {
      div {
        width: 78%;
      }
    }
  }
`;

export const CardPoduct = styled.div`
  border: 0.0625rem solid ${colors.primary};
  border-radius: 0.5rem;
  background-color: ${colors.primary};
  box-shadow: 0px 0.125rem 0.5rem 0px #00000022;
  transition: transform 0.3s ease;
  width: 100%;
  height: 5.938rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding: 0.625rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    transform: scale(1.02);
  }

  p {
    flex: 1;
    font-size: 0.813rem;
    font-weight: 400;
    line-height: 1rem;
    color: ${colors.MediumGray};
    margin-left: 0.625rem;
  }

  .delete-button {
    position: absolute;
    top: -0.687rem;
    right: -0.687rem;
    border: none;
    background-color: ${colors.black};
    color: ${colors.primary};
    width: 1.125rem;
    height: 1.125rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 0.625rem;
    padding: 10px;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.75;
    }
  }
`;
export const Button = styled.div`

    background-color: ${colors.black};
    border: none;
    width: 100%;
    cursor: pointer;
    height: 7.063rem;
    color: ${colors.primary};
    font-weight: 700;
    font-size: 1.75rem;
    line-height: 0.938rem;
    transition: opacity 0.3s ease;
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      opacity: 0.75;
    }
  
`
export const ButtonQuantity = styled.div`
  display: flex;
  flex-direction: column;
  width: 4.125rem;
  margin-bottom: 1.25rem;

  h3 {
    font-size: 0.5rem;
    font-weight: 400;
    line-height: 1rem;
    color: ${colors.MediumGray};
    margin-bottom: 0.25rem;
  }

  div {
    border-radius: 0.25rem;
    border: 0.0625rem solid ${colors.SilverGray};
    background-color: ${colors.primary};
    display: flex;
    box-shadow: 0px 0.125rem 0.5rem 0px #00000022;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: ${colors.black};
    text-align: center;
    font-size: 1.125rem;
    font-weight: 400;
    width: 1.25rem;
    border-radius: 0.25rem;
    &:hover {
      background-color: lightgray;
    }
  }

  span {
    font-size: 0.75rem;
    font-weight: 300;
    line-height: 1rem;
    color: ${colors.black};
    border-left: 1px solid ${colors.SilverGray};
    border-right: 1px solid ${colors.SilverGray};
    margin: 0.3125rem 0;
    width: 1.5rem;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-align: center;
  }
`;
