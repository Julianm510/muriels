import { Card } from "../../common/cartWidget/Card/Card";
import ModalCustoms from "../../common/ModalCustoms";
import "./itemListContainer.css";

const ItemList = ({ items }) => {
  return (
    <>
      <div className="pantalla">
        {items.map(({ title, price, stock, id, description, image }) => (
          <Card
            key={id}
            title={title}
            price={price}
            stock={stock}
            description={description}
            image={image}
            id={id}
          />
        ))}
        {/* <ModalCustoms title="titulo custom">
          <div>
            <h2>formulario</h2>
            <input type="text" placeholder="nombre" />
          </div>
        </ModalCustoms>
        <ModalCustoms>
          <div>
            <h2>formulario</h2>
            <button>prueba</button>
          </div>
        </ModalCustoms> */}
      </div>
    </>
  );
};

export default ItemList;
