import React from "react";
import Item from "./Item";

const ItemList = ({ product }) => {
  return (
    <>
      <>
        {product.map((p) => {
          return <Item results={p.results} query={p.query} />;
        })}
      </>
    </>
  );
};

export default ItemList;
