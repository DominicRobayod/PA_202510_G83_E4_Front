// src/Components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Images/logo.png";
import iniciarSesion from "../Images/iniciarsesion.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="Kapchy Market Logo" className="logo" />
        </Link>
        <ul className="nav-links">
          <li><Link to="/tienda">TIENDA</Link></li>
          <li><Link to="/productores">PRODUCTORES</Link></li>
          <li><a href="#">¿QUIÉNES SOMOS?</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={iniciarSesion} alt="Iniciar Sesión" className="icono-user" />
        <a href="#">Iniciar Sesión</a>
        <a href="#">Registrarse</a>
      </div>
    </nav>
  );
}

export default Navbar;
