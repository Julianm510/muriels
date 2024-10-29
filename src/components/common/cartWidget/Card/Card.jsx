export const Card = ({ title, price, stock, id, description, image }) => {
  return (
    <div>
      <div
        style={{
          border: "3px solid black",
          height: "320px",
          width: "250px",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <img src={image} style={{ width: "150px", height: "150px" }} />

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
