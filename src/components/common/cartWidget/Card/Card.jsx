import { Link } from "react-router-dom";
import "./card.css";

export const Card = ({ title, price, id, image }) => {
  return (
    <div>
      <div className="card-grid">
        <div className="card">
          <img className="producto" src={image} />

          <h3>Producto: {title}</h3>
          <h3>Precio: ${price}</h3>
          <Link to={`/itemDetail/${id}`}>
            <button>Detalles</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
