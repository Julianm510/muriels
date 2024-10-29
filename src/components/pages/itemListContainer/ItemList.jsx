import { Card } from "../../common/cartWidget/Card/Card";
import "./itemListContainer.css";

const ItemList = ({ items }) => {
  return (
    <>
      <div className="pantalla">
        <h2 className="">Listado de productos</h2>

        {items.map(({ title, price, stock, id, description, image }) => (
          <Card
            key={id}
            title={title}
            price={price}
            stock={stock}
            description={description}
            image={image}
          />
        ))}
      </div>
    </>
  );
};

export default ItemList;
