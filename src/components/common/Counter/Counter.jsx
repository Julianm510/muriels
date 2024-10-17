import { useState } from "react";

export const Counter = () => {
  const [contador, setContador] = useState(0);
  const [saludo, setSaludo] = useState(false);

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  const saludar = () => {
    setSaludo(!saludo);
  };

  console.log(saludo);

  return (
    <div>
      <h2>contador: {contador}</h2>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      <button onClick={saludar}>Saludar</button>
    </div>
  );
};
