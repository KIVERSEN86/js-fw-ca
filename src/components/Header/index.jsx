import Nav from "../Nav";
import Cart from "../Cart";
import * as S from "./Header.styles";
import * as C from "../Cart/Cart.styles";

export default function Header() {
  return (
    <S.Header>
      <S.Logo>eCommerce</S.Logo>
      <Nav />
      <C.Cart>
        <Cart />
      </C.Cart>
    </S.Header>
  );
}
