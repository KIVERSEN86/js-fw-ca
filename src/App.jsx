import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Checkout from "./components/Checkout";
import Product from "./components/Product";
import CheckoutSucc from "./components/CheckoutSucc";
import { CartStates } from "./components/Cart/CartState";

function App() {
  return (
    <CartStates>
      <>
        <div>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="checkoutsucc" element={<CheckoutSucc />} />
              <Route path="product/:id" element={<Product />} />
            </Route>
          </Routes>
        </div>
      </>
    </CartStates>
  );
}

export default App;
