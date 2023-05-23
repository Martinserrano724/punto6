import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {  Container} from "react-bootstrap";
import FormularioColores from './components/FormularioColores';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    < >
    <Container className=''>
      <FormularioColores/>
    </Container>
      
    </>
  )
}

export default App
