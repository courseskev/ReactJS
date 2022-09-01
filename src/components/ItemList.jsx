import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div
      style={{
        position: "absolute",
        margin: "0 auto",
      }}
    >
      {Object.values(productos).map((p) => (
        <Item results={p} key={p.id} />
      ))}
    </div>
  );
};

export default ItemList;
