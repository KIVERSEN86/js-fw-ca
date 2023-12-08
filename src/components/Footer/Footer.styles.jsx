import styled from "styled-components";
import { Link } from "react-router-dom";

export const Footer = styled.footer`
  background-color: #faf7d7;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
`;

export const FooterLink = styled(Link)`
  margin: 10px;
`;
