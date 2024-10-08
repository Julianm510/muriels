export const Card = ({ title, price, stock }) => {
  return (
    <div style={{ border: "3px solid black", height: "150px", width: "150px" }}>
      <h1>Producto: {title}</h1>
      <h2>Precio: {price}</h2>
      <h2>Stock: {stock}</h2>
    </div>
  );
};
