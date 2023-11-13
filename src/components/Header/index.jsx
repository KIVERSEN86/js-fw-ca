import Nav from "../Nav";
import Cart from "../Cart";
import * as S from "./Header.styles";
import { CartStyle } from "../Cart/Cart.styles";

export default function Header() {
  return (
    <S.HeaderStyle>
      <S.Logo>eCommerce</S.Logo>
      <Nav />
      <CartStyle>
        <Cart />
      </CartStyle>
    </S.HeaderStyle>
  );
}
