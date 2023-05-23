import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import '../formulario.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import ListaColores from "./ListaColores";



const FormularioColores = () => {
  let coloresLocalStorage =
    JSON.parse(localStorage.getItem("listaColores")) || [];
  let listaColores = [
    "rojo",
    "verde",
    "amarillo",
    "azul",
    "blanco",
    "celeste",
    "gris",
    "negro",
    "marron",
    "naranja",
    "rosa",
    "morado",
    "plateado",
  ];
  let colorList = [
    "red",
    "green",
    "yellow",
    "blue",
    "white",
    "skyblue",
    "gray",
    "black",
    "brown",
    "orange",
    "pink",
    "purple",
    " silver",
  ];
  let posicion;
  const [color, setColor] = useState("");
  const [arrayColores, setArrayColores] = useState(coloresLocalStorage);

  useEffect(() => {
    localStorage.setItem("listaColores", JSON.stringify(arrayColores));
  }, [arrayColores]);


  const controlarColores = () => {
    let txtMin = color.toLowerCase();
    listaColores.map((col, index) => {
      if (col === txtMin) {
        posicion = index;
        return true;
      } else {
        return false;
      }
    });
    return posicion;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    posicion = controlarColores();
   
    if (posicion != -1 && posicion != undefined) {
      //cargo los valores en el localStorage
      setArrayColores([...arrayColores, colorList[posicion]]);
      //limpia input
      setColor("");
    }
  };
 

  const eliminarTarea = (nombreFiltrado) => {
    let tareasFiltradas = arrayTareas.filter(
      (itemTarea) => itemTarea != nombreFiltrado
    );
    setArrayTareas(tareasFiltradas);
  };
  const cardCaja = {
    backgroundColor:colorList[posicion]
  }
  return (
    <div>
      <Row className="   justify-content-center mt-5 ">
        <Col xs="11" sm="11" md="12" lg="10" className="bg-white m-0">
          <h3 className="text-center bg-white ">Bienvenidos</h3>
          <hr />
          <Form className="bg-white " onSubmit={handleSubmit}>
            <Form.Group className="mb-3 bg-white">
            
              <Form.Label className=" bg-white text-center">
                Ingresa un Color en español
              </Form.Label>
              <div className="d-flex ">
              <div className="colorContainer" style={{ background: 'colorList[posicion]' }}>

            </div>
              <Form.Control
                type="text"
                placeholder="Ingrese un Color"
                required
                maxLength={100}
                minLength={1}
                className="bg-white h-25 align-self-center"
                onChange={(e) =>{
                  return setColor(e.target.value)
                }}
                value={color}
              /></div>
            </Form.Group>
            <Button className="primary" type="submit">
              Enviar
            </Button>
          </Form>
         
        </Col>
        <section  className="cajaContendor">
        <ListaColores listaColores={arrayColores} ></ListaColores>
        </section>
      </Row>
      
    </div>
  );
};

export default FormularioColores;
