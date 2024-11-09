import { Margin } from "@mui/icons-material";
import { useState } from "react";

export const Counter = ({ stock, agregarAlCarrito }) => {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    stock > contador ? setContador(contador + 1) : alert("Stock maximo");
  };

  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };

  return (
    <div style={{ margin: "30px" }}>
      <h2>contador: {contador}</h2>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      {/* <button onClick={saludar}>Saludar</button> */}

      <button onClick={() => agregarAlCarrito(contador)}>
        Agregar al carrito
      </button>
    </div>
  );
};
