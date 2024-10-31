import React from "react";
import { Link } from "react-router-dom";

export const CartContainer = () => {
  return (
    <div>
      <h1> Acá el Carrito</h1>
      <Link to="/checkout">
        <button>Finalizar Compra</button>
      </Link>
    </div>
  );
};
