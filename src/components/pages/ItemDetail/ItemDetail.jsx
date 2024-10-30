import React from "react";

const ItemDetail = ({ item }) => {
  return (
    <div>
      <h2>{item.description}</h2>
      <img src={item.image} alt="" />
    </div>
  );
};

export default ItemDetail;
