import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const CartWigdet = (props) => {
  return (
    <>
      <ShoppingCartIcon color={props.color} fontSize={props.size} />
    </>
  );
};
export default CartWigdet;
