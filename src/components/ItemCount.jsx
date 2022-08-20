import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const onAddCall = () => {
    onAdd(counter);
  };
  const increaseCounter = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };
  const decreaseCounter = () => {
    if (counter > initial) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <Card style={{ width: "18rem", margin: "auto" }}>
        <Card.Img
          variant="top"
          src="https://http2.mlstatic.com/D_NQ_NP_761750-MCO49834626177_052022-O.webp"
        />
        <Card.Body>
          <Card.Title>Camisa Trigger</Card.Title>
          <div style={{ width: "45px", float: "left" }}>&nbsp;</div>

          <Button
            style={{ float: "left", margin: "auto" }}
            variant="primary"
            onClick={decreaseCounter}
          >
            -
          </Button>
          <div
            style={{
              width: "50px",
              float: "left",
              textAlign: "center",
              verticalAlign: "bottom",
            }}
          >
            {counter}
          </div>
          <Button
            style={{ float: "left", margin: "auto" }}
            variant="primary"
            onClick={increaseCounter}
          >
            +
          </Button>
        </Card.Body>
        <Button
          style={{ margin: "auto" }}
          variant="primary"
          onClick={onAddCall}
        >
          Agregar al Carrito
        </Button>
      </Card>
      ;
    </>
  );
};

export default ItemCount;
