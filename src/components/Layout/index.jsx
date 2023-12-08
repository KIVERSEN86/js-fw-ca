import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import { Wrapper } from "./Layout.styles";

export default function Layout() {
  return (
    <Wrapper>
      <Header />
      <Outlet />
      <Footer />
    </Wrapper>
  );
}
