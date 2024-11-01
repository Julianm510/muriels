import React from "react";

export const Checkout = () => {
  const funcionDelForm = (evento) => {
    event.preventDefault();
    console.log("se envia");
    console.log(evento);
  };
  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={funcionDelForm}>
        <button>comprar</button>
      </form>
      <button>cancelar</button>
    </div>
  );
};
