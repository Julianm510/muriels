import "./itemListContainer.css";
import { Greeting } from "../../common/cartWidget/Card/Greeting";
import { Products } from "../../../../Products";
import { MyPromise } from "../../MyPromise";

export const ItemListContainer = ({ darkMode }) => {
  console.log("darkmode");
  console.log(darkMode);
  console.log(Products);
  // console.log(Products);

  return (
    <>
      <div className={darkMode ? "pantalla-dark" : "pantalla "}>
        <Greeting
          title="¡Bienvenidos a nuestra tienda! , pronto estaremos disponibles."
          hora="15:30"
        />
        <MyPromise />
      </div>
    </>
  );
};
