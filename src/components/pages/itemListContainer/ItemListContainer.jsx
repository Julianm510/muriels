import "./itemListContainer.css";
import ItemList from "./ItemList";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { Products } from "../../../../Products";
import { CircularProgress } from "@mui/material";

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
    return <CircularProgress />;
  }

  // const funcionAgregar = () => {
  //   const productsCollection = collection(db, "Products");
  //   Products.forEach((product) => {
  //     addDoc(productsCollection, product);
  //   });
  // };
  return (
    <div>
      <ItemList items={items} />;
      {/* <button onClick={funcionAgregar}>cargar productos</button> */}
    </div>
  );
};
