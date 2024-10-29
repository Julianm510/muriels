import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  return (
    <Link to="/cart">
      <div style={{ margin: "50px" }}>
        <FaShoppingCart />

        <span>0</span>
      </div>
    </Link>
  );
};
