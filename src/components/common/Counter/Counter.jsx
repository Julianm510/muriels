import { Margin } from "@mui/icons-material";
import { useState } from "react";

export const Counter = ({ stock }) => {
  const [contador, setContador] = useState(0);
  const [saludo, setSaludo] = useState(false);

  const sumar = () => {
    stock > contador ? setContador(contador + 1) : alert("Stock maximo");
  };

  const restar = () => {
    setContador(contador - 1);
  };

  const saludar = () => {
    setSaludo(!saludo);
  };

  console.log(saludo);

  return (
    <div style={{ margin: "30px" }}>
      <h2>contador: {contador}</h2>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      {/* <button onClick={saludar}>Saludar</button> */}

      <button>Agregar al carrito</button>
    </div>
  );
};
