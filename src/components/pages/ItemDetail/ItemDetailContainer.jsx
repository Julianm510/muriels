import React, { useEffect, useState } from "react";
import { Products } from "../../../../Products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  let id = "1";
  const [item, setItem] = useState({});

  useEffect(() => {
    let productSelected = Products.find((producto) => producto.id === id);
    setItem(productSelected);
  }, [id]);
  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
