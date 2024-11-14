import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const CartWidget = () => {
  const { cart, getTotalProducts } = useContext(CartContext);

  let sumaCarrito = getTotalProducts();
  return (
    <Link to="/cart">
      <div style={{ margin: "50px" }}>
        <FaShoppingCart />

        <span>{sumaCarrito}</span>
      </div>
    </Link>
  );
};
