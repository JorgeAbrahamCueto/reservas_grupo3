import React from 'react'
import { Link } from 'react-router-dom';

export const Inicio = () => {
  const images = [
    {
      src: 'img/Combinalo_como_quieras.jpg',
      //alt: 'Combínalo como quieras',
      link: '/combinalo'
    },
    {
      src: 'img/Carretillero.jpg',
      //alt: 'Imagen 2',
      link: '/Carretillero'
    },
    {
      src: 'img/Happy_Day.jpg',
      //alt: 'Imagen 3',
      link: '/Happy'
    }
  ];

  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    // Contenedor principal con la imagen de fondo y gradiente
    <div
      className="hero-section d-flex flex-column"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #000000 0%, #b71c1c 100%)',
      }}
    >
      {/* Ejemplo de uso de estado en React */}
      {/* Puedes agregar hooks o lógica aquí si lo necesitas */}

      {/* Contenido principal de la página */}
      <main 
        className="container text-white d-flex flex-column justify-content-center align-items-center flex-grow-1 text-center"
        style={{
          minHeight: '80vh',
          background: 'linear-gradient(135deg, #000 60%, #b71c1c 100%)',
          borderRadius: '1rem',
          boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
        }}
      >
        <h1 className="display-2 fw-bold hero-heading">
          Pollos y Parrilladas
        </h1>
        {/* Galería dinámica de tarjetas interactivas */}
        <div className="d-flex flex-wrap justify-content-center gap-3 my-4">
          {[
            {
              src: "img/1pollo_a_la_brasa.jpg",
              alt: "Pollo a las brasas",
              text: "Delicioso Pollo a las Brasas, jugoso y dorado."
            },
            {
              src: "img/parrilla_familiar.jpg",
              alt: "Parrilla",
              text: "Parrilla familiar, ideal para compartir en grupo."
            },
            {
              src: "img/Alitas-BBQ.jpg",
              alt: "Alitas BBQ",
              text: "Alitas BBQ, sabor ahumado y salsa especial."
            }
          ].map((item, idx) => (
            <FlipCard
              key={idx}
              src={item.src}
              alt={item.alt}
              text={item.text}
            />
          ))}
        </div>
        <a href="/reservas" className="btn btn-reserve rounded-pill mt-4">
          Reserva ya 
        </a>
      </main>
      <div className="position-absolute bottom-0 end-0 p-3 text-white-50 d-flex flex-column align-items-end">
        <span>
          Grupo 3 - Proyecto Parcial - Anthony Ariza, Cindy Alcala, Jorge Cueto
        </span>
        <a href="/login" className="text-white-50 mt-2" style={{ textDecoration: 'underline', fontWeight: 'bold' }}>
          Portal del Administrador
        </a>
      </div>
    </div>
  );
}
