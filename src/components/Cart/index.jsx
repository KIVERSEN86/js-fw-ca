import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
  return (
    <Link to="checkout">
      <FontAwesomeIcon icon={faCartShopping} />
    </Link>
  );
}
