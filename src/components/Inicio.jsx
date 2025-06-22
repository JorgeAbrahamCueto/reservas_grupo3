import React from 'react';
//import { Navegacion } from '../components/Navegacion'; 

export const Inicio = () => {
  return (
    // Contenedor principal con la imagen de fondo
    <div className="hero-section d-flex flex-column">
      
      {/* NAVEGACION FUE ELIMINADA DE AQUÍ */}

      {/* Contenido principal de la página */}
        <main className="container text-white d-flex flex-column justify-content-center align-items-center flex-grow-1 text-center">
          
          <h1 className="display-2 fw-bold hero-heading">
            Pollos y Parrilladas
          </h1>
          
          <a href="/reservas" className="btn btn-reserve rounded-pill mt-4">
            Reserva ya 
          </a>

        </main>

        {/* Créditos de la imagen */}
      <div className="position-absolute bottom-0 end-0 p-3 text-white-50">
        Grupo 3 - Proyecto Parcial
      </div>

    </div>
  );
};
