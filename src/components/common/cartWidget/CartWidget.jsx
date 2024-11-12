import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const CartWidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <Link to="/cart">
      <div style={{ margin: "50px" }}>
        <FaShoppingCart />

        <span>{cart.length}</span>
      </div>
    </Link>
  );
};
