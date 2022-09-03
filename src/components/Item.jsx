import { Link } from "react-router-dom";
import React from "react";
import Card from "react-bootstrap/Card";

const Item = ({ results }) => {
  const urlImage =
    "https://http2.mlstatic.com/D_NQ_NP_" + results.thumbnail_id + "-O.webp";

  //console.log(results);

  return (
    <>
      <Card
        style={{
          width: "18rem",
          height: "580px",
          float: "left",
          margin: "10px",
          display: "grid",
        }}
      >
        <Card.Img
          variant="top"
          src={urlImage}
          style={{ objectFit: "contain", height: "300px" }}
        />
        <Card.Body>
          <Card.Title>{results.title}</Card.Title>
          <br />
          <Card.Text>Precio: {results.price} COP</Card.Text>
          <Link to={`/item/${results.id}`}>Conocer más detalles</Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default Item;
