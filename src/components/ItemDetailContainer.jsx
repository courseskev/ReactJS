import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [p, setP] = useState([]);
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MCO/search?q=tech&limit=1")
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
        return setP(data.results);
      })
      .catch((err) => console.error(err));

    console.log("get p", p);
    setTimeout(() => {
      console.log("values of p:", Object.values(p));
      setItem(Object.values(p).find((element) => element.id === id));
    }, 500);

    //console.log("get item", item);
  }, [id]);

  return (
    <>{Object.getOwnPropertyNames(item).length && <ItemDetail item={item} />}</>
  );
};

export default ItemDetailContainer;
