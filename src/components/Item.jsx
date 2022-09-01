import React from "react";
import Card from "react-bootstrap/Card";

const Item = ({ results }) => {
  console.log("item", results);
  const urlImage =
    "https://http2.mlstatic.com/D_NQ_NP_" + results.thumbnail_id + "-O.webp";

  return (
    <>
      <Card
        style={{
          width: "18rem",
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
          <Card.Text>Precio: {results.price} COP</Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Link href={results.permalink}>Conocer más detalles</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default Item;
