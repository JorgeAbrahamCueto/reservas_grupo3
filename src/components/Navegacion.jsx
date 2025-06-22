import React from 'react'
//import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

export const Navegacion = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom-black">
      <div className="container-fluid mx-3">
        
        {/* --- LOGO REESTRUCTURADO --- */}
        <NavLink className="navbar-brand" to="/">
          <div className="d-flex flex-column align-items-center">
            {/* Usamos la ruta que mencionaste: public/img/logo.png */}
            <img 
              src="/img/logo.png" 
              alt="Logo" 
              style={{height: '100px' }} // Ajustamos un poco la altura
            />
          </div>
        </NavLink>

        {/* Botón para menú en móviles */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* --- LINKS DE NAVEGACIÓN --- */}
        {/* Quitamos fw-bold de cada link */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/nosotros">Nosotros</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/carta">Carta</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contactos">Contactos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/reservas">Reservas</NavLink>
            </li>
             <li className="nav-item">
              <NavLink className="nav-link" to="/reservasclientes">ReservasCliente</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}
