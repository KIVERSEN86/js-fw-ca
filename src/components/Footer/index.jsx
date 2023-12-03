import * as S from "./Footer.styles";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <S.Footer>
      <Link>Home</Link>
      <Link>Contact</Link>
      <Link>Products</Link>
    </S.Footer>
  );
}
