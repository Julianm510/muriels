import { Card } from "../../common/cartWidget/Card/Card";
import "./itemListContainer.css";
import { Greeting } from "../../common/cartWidget/Card/Greeting";

export const ItemListContainer = () => {
  return (
    <div>
      {/* <Card title="Corti" price={500} stock={25} />
      <Card title="Everlast" price={700} stock={15} />
      <Card title="Winning" price={1500} stock={5} />
      <Card title="Winning" price={1500} stock={5} /> */}
      <h1>
        <Greeting
          title="¡Bienvenidos a nuestra tienda! , pronto estaremos disponibles."
          hora="15:30"
        />
      </h1>
    </div>
  );
};
