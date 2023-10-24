import React from 'react';

const Formulario = () => {
    return (
      <form>
        <label htmlFor="name">Apellido y Nombre</label>
        <input type="text" id="name" placeholder="Ingrese su Nombre y Apellido" />
      </form>
    );
  };
  
  export default Formulario;