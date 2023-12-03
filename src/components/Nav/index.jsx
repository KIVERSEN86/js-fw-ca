import { NavLink } from "react-router-dom";
import * as S from "./Nav.styles";

export default function Nav() {
  return (
    <S.Nav>
      <S.Ul>
        <S.Li>
          <NavLink to="/">Home</NavLink>
        </S.Li>
        <S.Li>
          <NavLink to="/product">Product</NavLink>
        </S.Li>
        <S.Li>
          <NavLink to="/contact">Contact</NavLink>
        </S.Li>
      </S.Ul>
    </S.Nav>
  );
}
