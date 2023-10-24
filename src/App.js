import React from 'react';
import Navbar from './Componentes/Navbar/Navbar';
import Titulo from './Componentes/Titulo/Titulo';
import Formulario from './Componentes/Formulario/Formulario';
import Mensaje from './Componentes/Footer/Footer';
import './App.css';



function App() {
  return (
      <div >
        <Navbar/>
        <Titulo/>
        <Formulario/>
        <Mensaje greeting='Muchas Gracias por su Compra'/>

      </div>  
    
  );
}

export default App;


