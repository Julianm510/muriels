import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./cartWidget.css";

export const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <Link to="/cart">
        <Badge badgeContent={cart.length} color="primary" showZero>
          <ShoppingCartIcon />
        </Badge>
      </Link>
    </div>
  );
};
