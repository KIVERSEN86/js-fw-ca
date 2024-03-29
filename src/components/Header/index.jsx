import Nav from "../Nav";
import Cart from "../Cart";
import * as S from "./Header.styles";
import * as A from "../Cart/Cart.styles";

export default function Header() {
  return (
    <>
      <S.Header>
        <S.Logo to="/">eCom</S.Logo>
        <Nav />
        <A.Cart>
          <Cart />
        </A.Cart>
      </S.Header>
    </>
  );
}
