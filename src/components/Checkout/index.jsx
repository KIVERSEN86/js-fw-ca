import { CartContext } from "../Cart/CartState";
import { useContext } from "react";
import { Link } from "react-router-dom";
import * as S from "../Layout/Layout.styles";

export default function Checkout() {
  const { cart, handleCheckout, removeFromCart } = useContext(CartContext);

  return (
    <S.Container>
      <div>
        {cart.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.price}</p>
            <S.DefaultButton onClick={removeFromCart}>Remove product</S.DefaultButton>
          </div>
        ))}
        <Link to={`/CheckoutSucc`}>
          <S.DefaultButton onClick={handleCheckout}>Checkout</S.DefaultButton>
        </Link>
      </div>
    </S.Container>
  );
}
