import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  console.log(productos);
  return (
    <>
      <h1>itemlist</h1>
      {Object.values(productos).map((p) => (
        <Item results={p} key={p.id} />
      ))}
    </>
  );
};

export default ItemList;
