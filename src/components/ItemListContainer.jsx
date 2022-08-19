import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import ItemCount from "./ItemCount";
import Swal from "sweetalert2";

const ItemListContainer = (props) => {
  const onAdd = (message) => {
    alert(message);
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <h1>{props.greeting}</h1>
        <CircularProgress />
      </Box>
      <ItemCount stock={5} initial={0} onAdd={onAdd} />
    </>
  );
};

export default ItemListContainer;
