import React, { useEffect, useState } from "react";
import { Products } from "../../../../Products";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    let productSelected = Products.find((producto) => producto.id === id);
    setItem(productSelected);
  }, [id]);
  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
