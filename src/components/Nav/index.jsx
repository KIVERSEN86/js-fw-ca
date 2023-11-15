import { Link } from "react-router-dom";
import * as S from "./Nav.styles";

export default function Nav() {
  return (
    <S.Nav>
      <S.A>
        <Link to="/">Home</Link>
      </S.A>
      <S.A>
        <Link to="/product">Product</Link>
      </S.A>
      <S.A>
        <Link to="/contact">Contact</Link>
      </S.A>
    </S.Nav>
  );
}
