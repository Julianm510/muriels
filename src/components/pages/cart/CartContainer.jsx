import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

export const CartContainer = () => {
  const { cart, resetCart, removeById, getTotalAmount } =
    useContext(CartContext);

  let totalCarrito = getTotalAmount();

  return (
    <div>
      <h1> Acá el Carrito</h1>

      {cart.map((product) => {
        return (
          <div
            key={product.id}
            style={{
              border: "2px solid black",
              width: "200px",
              marginBottom: "10px",
              padding: "10px",
            }}
          >
            <h2>{product.title}</h2>
            <h2>cantidad: {product.quantity}</h2>
            <button onClick={() => removeById(product.id)}>Eliminar</button>
          </div>
        );
      })}

      <button onClick={resetCart}>Limpiar carrito</button>

      <h2>el total a pagar es {totalCarrito}</h2>

      <Link to="/checkout">
        <button>Finalizar Compra</button>
      </Link>
    </div>
  );
};
