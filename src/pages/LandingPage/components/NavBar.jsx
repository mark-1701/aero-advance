import React from 'react';
import styled from 'styled-components';
import logo from '/src/assets/logo.png';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="flex justify-between items-center w-full h-20 px-8 shadow-md bg-gray-100 sm:px-14">
      <div className="flex items-center gap-4">
        <img src={logo} alt="Logo" className="w-32 mr-4" />
        <div className="max-sm:hidden flex gap-4">
          <a href="#" className="text-gray-800 hover:text-gray-600">
            Inicio
          </a>
          <a href="#about" className="text-gray-800 hover:text-gray-600">
            Nosotros
          </a>
          <a href="#contact" className="text-gray-800 hover:text-gray-600">
            Contacto
          </a>
        </div>
      </div>
      <div className="flex gap-4">
        <Link to={`login`} className="p-1 px-4 rounded bg-gray-400 text-white shadow hover:bg-gray-400">Iniciar Sesión</Link>
        <button className="btn hidden sm:block">Registrarse</button>
      </div>
    </div>
  );
}

export default NavBar;
