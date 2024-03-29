import styled from "styled-components";
import { DefaultButton } from "../Layout/Layout.styles";

export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Img = styled.img`
  max-width: 400px;
  max-height: 400px;
  object-fit: cover;
  border-radius: 5px;
`;

export const DetailsContainer = styled.div`
  max-width: 350px;

  @media (min-width: 500px) {
    margin-left: 20px;
  }
`;

export const Button = styled(DefaultButton)`
  border-radius: 10px;
  margin: 4px 0 20px 0;
`;

export const reviewContainer = styled.div``;

export const NormalPrice = styled.p`
  text-decoration: line-through;
`;

export const SalePrice = styled.p`
  color: red;
`;
