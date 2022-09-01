import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import ItemCount from "./ItemCount";
import Swal from "sweetalert2";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
  const onAdd = (message) => {
    Swal.fire({ text: `Número de productos: ${message}` });
  };

  const [p, setP] = useState([]);

  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MCO/search?q=smartphone&limit=3")
      .then((res) => res.json())
      .then((data) => setP(data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <ItemList productos={p} />
    </>
  );
};

export default ItemListContainer;
