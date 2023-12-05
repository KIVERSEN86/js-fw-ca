import styled from "styled-components";
import { Link } from "react-router-dom";
import { DefaultButton } from "../Layout/Layout.styles";

export const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ProductContainer = styled.div`
  margin: 10px;
  background-color: #fff8f6;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;

export const Image = styled.img`
  width: 275px;
  height: 285px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

export const Button = styled(DefaultButton)`
  border-radius: 0 0 10px 10px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover ${Button} {
    background-color: #baa7e6;
    cursor: pointer;
    background-size: 100% 100%;
  }
`;
