import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import ItemCount from "./ItemCount";
import Swal from "sweetalert2";
import ItemList from "./ItemList";
import ItemDetailContainer from "./ItemDetailContainer";

const ItemListContainer = (props) => {
  const onAdd = (message) => {
    Swal.fire({ text: `Número de productos: ${message}` });
  };

  const [p, setP] = useState([]);
  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          fetch(
            "https://api.mercadolibre.com/sites/MCO/search?q=smartphone&limit=3"
          )
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              setP(data);
              console.log(data);
            })
            .catch((err) => {
              console.error(err);
            })
        );
      }, 2000);
    });
  }, []);

  return (
    <>
      <ItemList product={p} />
      <ItemDetailContainer productos={p} />
    </>
  );
};

export default ItemListContainer;
