import React from 'react'
//import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

export const Navegacion = () => {
  // Estado para controlar si el menú está abierto o cerrado
  const [menuAbierto, setMenuAbierto] = React.useState(false);

  // Función para alternar el menú
  const toggleMenu = () => setMenuAbierto((prev) => !prev);

  // Cierra el menú al hacer clic en un enlace
  const handleNavLinkClick = () => setMenuAbierto(false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom-black">
        <div className="container-fluid mx-3">
          {/* --- LOGO REESTRUCTURADO --- */}
          <NavLink className="navbar-brand" to="/">
            <div className="d-flex flex-column align-items-center">
              <img 
                src="/img/logo.png" 
                alt="Logo" 
                style={{height: '100px' }}
              />
            </div>
          </NavLink>

          {/* Botón para menú en móviles */}
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={menuAbierto}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* --- LINKS DE NAVEGACIÓN --- */}
          <div
            className={`collapse navbar-collapse justify-content-end${menuAbierto ? ' show' : ''}`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" onClick={handleNavLinkClick}>Inicio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/nosotros" onClick={handleNavLinkClick}>Nosotros</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/carta" onClick={handleNavLinkClick}>Carta</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contactos" onClick={handleNavLinkClick}>Contactos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/reservas" onClick={handleNavLinkClick}>Reservas</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/reservasclientes" onClick={handleNavLinkClick}>ReservasCliente</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
