import { Link } from "react-router-dom";
import * as S from "./Nav.styles";

export default function Nav() {
  return (
    <S.NavStyle>
      <S.A>
        <Link to="/">Home</Link>
      </S.A>
      <S.A>
        <Link to="/products">Products</Link>
      </S.A>
      <S.A>
        <Link to="/contact">Contact</Link>
      </S.A>
    </S.NavStyle>
  );
}
