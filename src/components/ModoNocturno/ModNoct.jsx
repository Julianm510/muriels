import { useEffect, useState } from "react";

export const ModNoct = () => {
  const [modoDark, setmodoDark] = useState(false);
  const [nombre, setNombre] = useState("julian");

  const interruptor = () => {
    setmodoDark(!modoDark);
  };

  const cambiarNombre = () => {
    setNombre(nombre === "julian" ? "muriel" : "julian");
  };
  console.log(modoDark);
  console.log("Modo noche");

  useEffect(() => {
    console.log("probando use");
  }, []);

  return (
    <>
      <h1>{nombre}</h1>
      <button onClick={cambiarNombre}>cambiar nombre</button>
      <h1>{modoDark}</h1>
      <button onClick={interruptor}>Cambiar Modo</button>
    </>
  );
};
