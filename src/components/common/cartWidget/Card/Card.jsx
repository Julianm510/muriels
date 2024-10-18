export const Card = ({ title, price, stock, id }) => {
  return (
    <div>
      <div
        style={{ border: "3px solid black", height: "250px", width: "250px" }}
      >
        <h2>Producto: {title}</h2>
        <h2>Precio: {price}</h2>
        <h2>Stock: {stock}</h2>
        <h2>Id: {id}</h2>
      </div>
    </div>
  );
};
