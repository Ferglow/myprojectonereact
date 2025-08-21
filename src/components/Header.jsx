/* se importa React y el archivo CSS del encabezado */
import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    /* Aquí va el contenido del encabezado */
    <header className="header">
      <h1>ElectroSalud</h1>
      <nav>
        {/* Aquí van los enlaces de navegación */}
        <a href="/">Inicio</a>
        <a href="/cart">Carrito</a>
      </nav>
      {/* input de tipo texto en jsx, utilizado comunmente en formularios */}
      <input type="text" placeholder="Buscar productos..." />
    </header>
  );
};

export default Header;
