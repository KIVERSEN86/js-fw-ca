import { useReducer, createContext } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

const Reducer = (state, action) => {
  let productIndex;
  let cart;

  switch (action.type) {
    case "addProduct":
      cart = [...state.cart];

      productIndex = cart.findIndex((product) => product.id === action.payload.id);
      if (productIndex === -1) {
        cart.push({ ...action.payload, quantity: 1 });
      } else {
        cart = [
          ...cart.slice(0, productIndex),
          { ...cart[productIndex], quantity: cart[productIndex].quantity + 1 },
          ...cart.slice(productIndex + 1),
        ];
      }

      return { ...state, cart: cart };

    case "removeProduct":
      cart = [...state.cart];

      productIndex = cart.findIndex((product) => product.id === action.payload.id);

      if (productIndex !== -1) {
        if (cart[productIndex].quantity > 1) {
          cart = [
            ...cart.slice(0, productIndex),
            {
              ...cart[productIndex],
              quantity: cart[productIndex].quantity - 1,
            },
            ...cart.slice(productIndex + 1),
          ];
        } else {
          cart = [...cart.slice(0, productIndex), ...cart.slice(productIndex + 1)];
        }
      }

      return { ...state, cart: cart };

    case "clearCart":
      return { cart: [] };

    default:
      return state;
  }
};

const CartStates = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, { cart: [] });

  const addToCart = (product) => {
    dispatch({ type: "addProduct", payload: product });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "removeProduct", payload: id });
  };

  return <CartContext.Provider value={{ cart: state.cart, addToCart, removeFromCart }}>{children}</CartContext.Provider>;
};

export { CartContext, CartStates };

CartStates.propTypes = {
  children: PropTypes.node.isRequired,
};
