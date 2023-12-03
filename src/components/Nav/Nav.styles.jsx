import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
`;

export const Ul = styled.ul`
  text-decoration: none;
  display: flex;
`;

export const Li = styled.li`
  margin: 10px;
  list-style: none;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 4px;
    background-color: #18272f;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  :hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
`;
