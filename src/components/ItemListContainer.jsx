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
  const productos = [
    {
      id: 1,
      titulo: "Zapatos De Fibra De Kevlar",
      descripcion:
        "La punta de acero puede proteger mejor tus pies. Suela anticlavos antiderrapante",
      precio: "163.195 COP",
      foto: "https://http2.mlstatic.com/D_NQ_NP_741497-CBT48339251775_112021-O.webp",
    },
    {
      id: 2,
      titulo: "Phone 13 128gb",
      descripcion:
        "Apple ya ha puesto sobre la mesa su propuesta para conquistar el terreno de los móviles premium, los iPhone 13.",
      precio: "4'299.800 COP",
      foto: "https://http2.mlstatic.com/D_NQ_NP_966454-MCO49472413925_032022-O.webp",
    },
    {
      id: 3,
      titulo: "Freidora De Aire Black + Decker",
      descripcion:
        "Cocina sin culpa y disfruta deliciosos alimentos fritos con 50% menos grasa.",
      precio: "399.000 COP",
      foto: "https://http2.mlstatic.com/D_NQ_NP_907873-MCO47779814075_102021-O.webp",
    },
  ];

  const [p, setP] = useState([]);
  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(setP(productos));
      }, 2000);
    });
  });
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <h1>{props.greeting}</h1>
        <CircularProgress />
      </Box>
      <ItemCount stock={5} initial={0} onAdd={onAdd} />
      <ItemList product={p} />
    </>
  );
};

export default ItemListContainer;
