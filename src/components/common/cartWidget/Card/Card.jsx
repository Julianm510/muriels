import { Link } from "react-router-dom";
import "./card.css";

export const Card = ({ title, price, id, image }) => {
  return (
    // <div>
    //   <div
    //     style={{
    //       border: "3px solid black",
    //       height: "320px",
    //       width: "250px",
    //       display: "flex",
    //       justifyContent: "space-around",
    //       flexWrap: "wrap",
    //     }}
    //   >
    //     <img src={image} style={{ width: "150px", height: "150px" }} />
    //     <h2>Producto: {title}</h2>
    //     <h3>Precio: {price}</h3>
    //     <h3>Stock: {stock}</h3>
    //     <h3>descripcion: {description}</h3>
    //     <Link to={`/itemDetail/${id}`}>
    //       <button>Detalles</button>
    //     </Link>
    //   </div>
    // </div>

    <div>
      <div className="card-grid">
        <div className="card">
          <img className="producto" src={image} />

          <h3>Producto: {title}</h3>
          <h3>Precio: {price}</h3>
          <Link to={`/itemDetail/${id}`}>
            <button>Detalles</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
