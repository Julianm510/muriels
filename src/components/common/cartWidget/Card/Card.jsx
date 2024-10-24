export const Card = ({ title, price, stock, id, description }) => {
  return (
    <div>
      <div
        style={{
          border: "3px solid black",
          height: "170px",
          width: "250px",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <h2>Producto: {title}</h2>
        <h3>Precio: {price}</h3>
        <h3>Stock: {stock}</h3>
        <h3> {id}</h3>
        <h3>descripcion: {description}</h3>
        <button>Detalles</button>
      </div>
    </div>
  );
};
