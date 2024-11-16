import "./itemListContainer.css";
import { Products } from "../../../../Products";
import ItemList from "./ItemList";

// export const ItemListContainer = ({ darkMode }) => {
//   console.log("darkmode");|
//   console.log(darkMode);
//   console.log(Products);
//   // console.log(Products);

//   return (
//     <>
//       <div className={darkMode ? "pantalla-dark" : "pantalla "}>
//         <Greeting
//           title="¡Bienvenidos a nuestra tienda! , pronto estaremos disponibles."
//           hora="15:30"
//         />
//         <MyPromise />
//       </div>
//     </>
//   );
// };

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GiH2O } from "react-icons/gi";

export const ItemListContainer = () => {
  const { name } = useParams();

  const [items, setItems] = useState([]);
  useEffect(() => {
    const unaFraccion = Products.filter(
      (producto) => producto.category === name
    );

    const getProducts = new Promise((resolve) => {
      resolve(name ? unaFraccion : Products);
    });
    getProducts.then((res) => {
      setTimeout(() => {
        setTimeout;
        setItems(res);
      }, 2000);
    });
  }, [name]);
  if (items.length === 0) {
    return <h2>cargando...</h2>;
  }
  return <ItemList items={items} />;
};
