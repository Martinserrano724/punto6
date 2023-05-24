import React from 'react';
import ItemColores from "./ItemColores";
import {  Col } from "react-bootstrap";

const ListaColores = ({listaColores,eliminarColor}) => {
    return (
      
        <div className="d-flex-column ">
            {listaColores.map((color , key)=>{
                return <div  className='d-inline-block  listaCajas ' key={key}><ItemColores color={color} key={key} posicion={key}  className="" eliminarColor={eliminarColor}></ItemColores></div>
            })}
        </div>
    );
};

export default ListaColores;