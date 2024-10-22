import { useEffect, useState } from "react";
import { Products } from "../../Products";
import { dividerClasses } from "@mui/material";
import { Card } from "./common/cartWidget/Card/Card";

let myProductsProm = new Promise((res, rej) => {
  setTimeout(() => {
    if (Products.length === 0) {
      rej("productos vacios");
    } else {
      res(Products);
    }
  }, 2000);
});

export const MyPromise = () => {
  const [myProducts, setMyProducts] = useState([]);
  useEffect(() => {
    myProductsProm
      .then((data) => {
        // if (data.length === 4) throw new Error("Error");
        setMyProducts(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        // console.log("SIEMPRE SE EJECUTA")
      });
  }, []);

  console.log(myProducts);

  return (
    <div>
      {myProducts.map(({ id, title, price, stock, description }) => (
        <Card
          key={id}
          title={title}
          price={price}
          stock={stock}
          description={description}
        />
      ))}
    </div>
  );
};
