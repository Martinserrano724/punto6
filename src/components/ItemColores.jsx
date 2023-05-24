import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
const ItemColores = ({ color , eliminarColor ,posicion }) => {
  const cardCaja = {
    height: "100px",
    width: "100px",
    backgroundColor: color,
  };
  return (
    <Col >
      <article className="">
      <Card className="text-center col-4 my-1 w-auto itemCard">
          <Card.Body>
            <Card.Title>{color}</Card.Title>
            <div className="d-flex justify-content-center">
              <div style={cardCaja}></div>
            </div>
            <Button variant="danger" className="my-2" onClick={()=>eliminarColor({posicion})} >
              Borrar
            </Button>
          </Card.Body>
        </Card>
      </article>
    </Col>
  );
};

export default ItemColores;
