import "./itemListContainer.css";
import ItemList from "./ItemList";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const { name } = useParams();

  const [items, setItems] = useState([]);
  useEffect(() => {
    const productsCollection = collection(db, "Products");

    let docsRef = productsCollection;
    if (name) {
      docsRef = query(productsCollection, where("category", "==", name));
    }

    getDocs(docsRef).then((res) => {
      let arrayEntendible = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setItems(arrayEntendible);
    });
  }, [name]);
  if (items.length === 0) {
    return <h2>cargando...</h2>;
  }
  return <ItemList items={items} />;
};
