import { Card } from "../../common/cartWidget/Card/Card";

const ItemList = (myProducts) => {
  return (
    <>
      <h2>Listado de productos</h2>
      <div>
        {myProducts.map(({ title, price, stock, id, description }) => (
          <Card
            key={id}
            title={title}
            price={price}
            stock={stock}
            description={description}
          />
        ))}
      </div>
    </>
  );
};

export default ItemList;
