import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const ItemListContainer = (props) => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <h1>{props.greeting}</h1>
        <CircularProgress />
      </Box>
    </>
  );
};

export default ItemListContainer;
