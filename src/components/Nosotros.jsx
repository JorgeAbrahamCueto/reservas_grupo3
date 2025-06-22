import React, { useEffect, useRef } from 'react';
import { Carousel } from 'bootstrap';

export const Nosotros = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const instance = Carousel.getOrCreateInstance(carouselRef.current, { interval: 5000 });
    return () => instance.dispose(); // Limpieza al desmontar el componente
  }, []);

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #000 0%, #b71c1c 100%)',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <div className="container mt-5">
        <h2
          className="mb-4 text-center" style={{ color: "#0000", textShadow: "0 2px 8px #fff, 0 0 2px #fff" }}
        >
          Sobre Nosotros
        </h2>
        <div
          id="polleriaCarousel"
          className="carousel slide"
          ref={carouselRef}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/img/1.jpg"
                className="d-block w-100"
                alt="Polleria 1"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
                <h5>Pollo a la Brasa Tradicional</h5>
                <p>Disfruta del auténtico sabor peruano con nuestro pollo a la brasa, jugoso y lleno de especias.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="/img/2.jpg"
                className="d-block w-100"
                alt="Polleria 2"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
                <h5>Parrillada Especial</h5>
                <p>Una mezcla irresistible de carnes a la parrilla, perfecta para compartir en familia o con amigos.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="/img/3.jpg"
                className="d-block w-100"
                alt="Polleria 3"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
                <h5>Pollo Picante a la Leña</h5>
                <p>Para los amantes del picante, nuestro pollo a la leña con salsa especial te sorprenderá.</p>
              </div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#polleriaCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#polleriaCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>
    </div>
  );
};