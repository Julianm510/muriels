import { Card } from "../../common/cartWidget/Card/Card";
import "./itemListContainer.css";

const ItemList = ({ items }) => {
  return (
    <>
      <h2 className="prod">Listado de productos</h2>

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
      </div>
    </>
  );
};

export default ItemList;
