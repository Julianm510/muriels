import { useEffect, useState } from "react";
import { Products } from "../../Products";

let myProductsProm = new Promise((res, rej) => {
  const prod = [];
  if (prod.length === 0) {
    rej("productos vacios");
  } else {
    res(Products);
  }
});

export const MyPromise = () => {
  myProductsProm
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
