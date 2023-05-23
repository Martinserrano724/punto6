import React from 'react';
import ItemColores from "./ItemColores";
import {  Col } from "react-bootstrap";

const ListaColores = ({listaColores}) => {
    return (
      
        <div className="d-flex-column ">
            {listaColores.map((color , key)=>{
                console.log(`color: ${color}`);
                return <div  className='d-inline-block  listaCajas '><ItemColores color={color} key={key} className=""></ItemColores></div>
            })}
        </div>
    );
};

export default ListaColores;