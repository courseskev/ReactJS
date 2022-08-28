import React from "react";
import Card from "react-bootstrap/Card";

const Item = ({ results, query }) => {
  return (
    <>
      <Card
        key={results.id}
        style={{
          width: "18rem",
          float: "left",
          margin: "10px",
          display: "grid",
        }}
      >
        <Card.Img
          variant="top"
          src={results.thumbnail}
          style={{ objectFit: "contain", height: "300px" }}
        />
        <Card.Body>
          <Card.Title>{query}</Card.Title>
          <Card.Text>{results.title}</Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Link href="#">Conocer más detalles</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default Item;
