import "./itemDetails.css";
import { Counter } from "../../common/Counter/Counter";

const ItemDetail = ({ item, agregarAlCarrito }) => {
  return (
    <div
      style={{
        border: "3px solid black",
        height: "360px",
        width: "300px",
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      <h2>{item.title}</h2>
      <h2>{item.description}</h2>
      <img src={item.image} style={{ width: "250px", height: "250px" }} />
      <Counter stock={item.stock} agregarAlCarrito={agregarAlCarrito} />
    </div>
  );
};

export default ItemDetail;
