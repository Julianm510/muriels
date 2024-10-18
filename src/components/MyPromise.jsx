import { useEffect, useState } from "react";
import { Products } from "../../Products";

let myProductsProm = new Promise((res, rej) => {
  if (Products.length === 0) {
    rej("productos vacios");
  } else {
    res(Products);
  }
});

export const MyPromise = () => {
  const [misProductos, setMisProductos] = useState([]);

  useEffect(() => {
    misProductos

      .then((data) => {
        setMisProductos(data);
      })
      .cath((err) => {
        console.log(err);
      });
  });

  console.log(misProductos);

  return <div></div>;
};
