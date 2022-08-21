import Card from "react-bootstrap/Card";

const ItemList = ({ product }) => {
  return (
    <>
      <>
        {product.map((p) => {
          return (
            <>
              <Card
                key={p.id}
                style={{
                  width: "18rem",
                  float: "left",
                  margin: "10px",
                  display: "grid",
                }}
              >
                <Card.Img
                  variant="top"
                  src={p.foto}
                  style={{ objectFit: "contain", height: "300px" }}
                />
                <Card.Body>
                  <Card.Title>{p.titulo}</Card.Title>
                  <Card.Text>{p.descripcion}</Card.Text>
                </Card.Body>

                <Card.Body>
                  <Card.Link href="#">Conocer más detalles</Card.Link>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </>
    </>
  );
};

export default ItemList;
