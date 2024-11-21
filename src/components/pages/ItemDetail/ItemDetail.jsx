import "./itemDetails.css";
import { Counter } from "../../common/Counter/Counter";

const ItemDetail = ({ item, agregarAlCarrito, totalInCart }) => {
  return (
    <div>
      <div className="card-grid">
        <div className="card">
          <h2>{item.title}</h2>
          <img className="producto1" src={item.image} />
          <Counter
            stock={item.stock}
            agregarAlCarrito={agregarAlCarrito}
            totalInCart={totalInCart}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
