import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import "./cartcontainer.css";

export const CartContainer = () => {
  const { cart, resetCart, removeById, getTotalAmount } =
    useContext(CartContext);

  let totalCarrito = getTotalAmount();

  return (
    <div className="cart">
      <div className="card-cart">
        <h1> Productos seleccionados</h1>

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

        {cart.length > 0 && (
          <button onClick={resetCart}>Limpiar carrito</button>
        )}

        <h2 style={{ color: cart.length > 0 ? "red" : "blue" }}>
          el total a pagar es {totalCarrito}
        </h2>

        <Link to="/checkout">
          <button>Finalizar Compra</button>
        </Link>
      </div>
    </div>
  );
};
