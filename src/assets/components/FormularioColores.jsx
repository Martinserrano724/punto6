import React from 'react';
import { Form, Button, Container, Row , Col } from "react-bootstrap";
import { useState,useEffect } from "react";

const FormularioColores = () => {

    let coloresLocalStorage = JSON.parse(localStorage.getItem('listaColores')) || [];

  const [color, setcolor] = useState("");
  const [arrayColores, setArrayColores] = useState(coloresLocalStorage);
  

  useEffect(()=>{
    localStorage.setItem('listaColores',JSON.stringify(arrayColores));
  },[arrayColores])

  const handleSubmit = (e) => {
    if(color !=''){
      e.preventDefault();
      //cargo los valores en el localStorage
      setArrayColores([...arrayColores, color]);
        //limpia input
        setcolor("");
    }
    
  
  };
 
  const eliminarTarea = (nombreFiltrado) => {
    let tareasFiltradas = arrayTareas.filter(
      (itemTarea) => itemTarea != nombreFiltrado
    );
    setArrayTareas(tareasFiltradas); 
  };
  
    return (
        <div>
            <Row className="   justify-content-center mt-5 ">
        <Col xs="11" sm="11" md="12" lg="10" className="bg-white m-0">
          <h3 className="text-center bg-white ">Bienvenidos</h3>
          <hr />
          <Form className="bg-white " onSubmit={handleSubmit}>
            <Form.Group className="mb-3 bg-white" >
              <Form.Label className=" bg-white text-center">Ingresa un Color</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese un Color"
                required
                maxLength={100}
                minLength={1}
                className="bg-white"
                onChange={(e) => setcolor(e.target.value)}
                value={color}
              />
            </Form.Group>
            <Button
              className="primary"
              type="submit"
              
            >
              Enviar
            </Button>
          </Form>
          
       
          </Col>
        </Row>
        </div>
    );
};

export default FormularioColores;