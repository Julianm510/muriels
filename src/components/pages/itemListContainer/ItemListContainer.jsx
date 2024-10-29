import "./itemListContainer.css";
import { Greeting } from "../../common/cartWidget/Card/Greeting";
import { Products } from "../../../../Products";
import { MyPromise } from "../../common/cartWidget/Card/MyPromise";
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

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getProducts = new Promise((resolve) => {
      resolve(Products);
    });
    getProducts.then((res) => {
      setItems(res);
    });
  }, []);
  return <ItemList items={items} />;
};
