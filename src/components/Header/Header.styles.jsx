import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #faf7d7;
`;

export const Logo = styled(Link)`
  margin-left: 20px;
  font-family: "Lobster", sans-serif;
  font-size: 2rem;
`;

export const Cart = styled.div`
  margin-right: 20px;
`;
