import React from 'react';
import { CartWidget } from '../CartWidget/CartWidget';
import imagen2 from "../../img/imagen2.png";
import "./Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
        <nav>
        <img src={imagen2} alt="imagen2" className="navbar-image" />
          <a href="./inicio">Inicio</a>
          <a href="./productos">Productos</a>
          <a href="./contacto">Contacto</a>
        </nav>
        
        <CartWidget/>
        
        </div>
    );
};

export default Navbar