import Nav from "../Nav";
import Cart from "../Cart";
import * as S from "./Header.styles";
import * as A from "../Cart/Cart.styles";
import * as B from "../Layout/Layout.styles";

export default function Header() {
  return (
    <>
      <S.Header>
        <S.Logo>eCommerce</S.Logo>
        <Nav />
        <A.Cart>
          <Cart />
        </A.Cart>
      </S.Header>
      <B.DefaultHr />
    </>
  );
}
