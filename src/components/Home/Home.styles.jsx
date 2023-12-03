import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
`;

export const ProductContainer = styled.div`
  margin: 10px;
  background-color: #fff8f6;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 275px;
  height: 285px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

export const Button = styled.button`
  background-color: #e1d7f9;
  background-image: linear-gradient(#baa7e6, #baa7e6);
  background-size: 0 100%;
  background-repeat: no-repeat;
  transition: 0.4s;
  padding: 8px;
  border: none;
  width: 100%;
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
