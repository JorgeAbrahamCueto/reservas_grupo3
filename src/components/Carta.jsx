import React from 'react'

export const Carta = () => {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #000 0%, #b71c1c 100%)" }}>
      <style>
        {`
          .menu-img {
            transition: transform 0.3s cubic-bezier(.4,2,.6,1);
            cursor: pointer;
          }
          .menu-img:hover {
            transform: scale(2);
            z-index: 10;
            box-shadow: 0 8px 32px rgba(0,0,0,0.3);
            position: relative;
          }
          .gradient-header-entradas {
            background: linear-gradient(90deg, #000 0%, #FFD600 100%);
            color: #fff !important;
          }
          .gradient-header-parrillas{
            background: linear-gradient(90deg, #000 0%,  #990000  100%);
            color: #fff !important;          
          }
          .gradient-header-pollos{
            background: linear-gradient(90deg, #000 0%,  #e73b00  100%);
            color: #fff !important;          
          }
          .gradient-header-bebida{
            background: linear-gradient(90deg, #000 0%,  #1919e6  100%);
            color: #fff !important;          
          }
        `}
      </style>
      <div className="container my-4">
        <h2 className="mb-4" style={{ color: "#0000", textShadow: "0 2px 8px #fff, 0 0 2px #fff" }}>Carta</h2>
        <div className="card mb-4">
          <div className="card-header gradient-header-entradas" style={{ textShadow: "0 2px 8px #fff, 0 0 2px #fff" }}>
            Entradas y Piqueos
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src="img/Alitas-BBQ.jpg" alt="Alitas BBQ" width={150} height={100} className="me-2 rounded menu-img" />
                Alitas BBQ
              </div>
              <span className="badge bg-success rounded-pill">S/ 18.00</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src="img/salchipapa.jpg" alt="Salchipapas" width={150} height={100} className="me-2 rounded menu-img" />
                Salchipapas
              </div>
              <span className="badge bg-success rounded-pill">S/ 12.00</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src="img/chicharron_pollo.jpg" alt="Chicharrón de Pollo" width={150} height={100} className="me-2 rounded menu-img" />
                Chicharrón de Pollo
              </div>
              <span className="badge bg-success rounded-pill">S/ 20.00</span>
            </li>
          </ul>
        </div>

        <div className="card mb-4">
          <div className="card-header bg-secondary text-white gradient-header-parrillas" style={{ textShadow: "0 2px 8px #fff, 0 0 2px #fff" }}>
            Parrillas
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src="img/parrilla_personal.jpg" alt="Parrilla Personal" width={150} height={100} className="me-2 rounded menu-img" />
                Parrilla Personal
              </div>
              <span className="badge bg-success rounded-pill">S/ 28.00</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src="img/parrilla_mixta_para2.jpg" alt="Parrilla Mixta para 2" width={150} height={100} className="me-2 rounded menu-img" />
                Parrilla Mixta para 2
              </div>
              <span className="badge bg-success rounded-pill">S/ 32.00</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src="img/parrilla_familiar.jpg" alt="Parrilla Familiar" width={150} height={100} className="me-2 rounded menu-img" />
                Parrilla Familiar
              </div>
              <span className="badge bg-success rounded-pill">S/ 75.00</span>
            </li>
          </ul>
        </div>

        <div className="card mb-4">
          <div className="card-header bg-warning text-dark gradient-header-pollos" style={{ textShadow: "0 2px 8px #fff, 0 0 2px #fff" }}>
            Pollos a la Brasa 
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img src="img/1pollo_a_la_brasa.jpg" alt="1 Pollo a la Brasa" width={150} height={100} className="me-2 rounded menu-img" />
                  1 Pollo a la Brasa
                </div>
                <span className="badge bg-success rounded-pill">S/ 60.00</span>
              </div>
              <small className="text-muted">Incluye papas y ensalada</small>
            </li>
            <li className="list-group-item">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img src="img/medio_pollo_a_la_brasa.jpg" alt="1/2 Pollo a la Brasa" width={150} height={100} className="me-2 rounded menu-img" />
                  1/2 Pollo a la Brasa
                </div>
                <span className="badge bg-success rounded-pill">S/ 32.00</span>
              </div>
              <small className="text-muted">Incluye papas y ensalada</small>
            </li>
            <li className="list-group-item">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img src="img/cuarto_pollo_a_la_brasa.jpg" alt="1/4 Pollo a la Brasa" width={150} height={100} className="me-2 rounded menu-img" />
                  1/4 Pollo a la Brasa
                </div>
                <span className="badge bg-success rounded-pill">S/ 17.00</span>
              </div>
              <small className="text-muted">Incluye papas y ensalada</small>
            </li>
          </ul>
        </div>

        <div className="card mb-4">
          <div className="card-header bg-info text-white gradient-header-bebida" style={{ textShadow: "0 2px 8px #fff, 0 0 2px #fff" }}>
            Bebidas y Tragos
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src="img/litro_y_medio.jpg" alt="Gaseosa 1 1/2 Litro" width={150} height={100} className="me-2 rounded menu-img" />
                Gaseosa 1 1/2 Litro
              </div>
              <span className="badge bg-success rounded-pill">S/ 10.00</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src="img/cerveza_cristal.jpg" alt="Cerveza Cristal 620ml" width={150} height={100} className="me-2 rounded menu-img" />
                Cerveza Cristal 620ml
              </div>
              <span className="badge bg-success rounded-pill">S/ 10.00</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src="img/pisco_sour.jpg" alt="Pisco Sour" width={150} height={100} className="me-2 rounded menu-img" />
                Pisco Sour
              </div>
              <span className="badge bg-success rounded-pill">S/ 18.00</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src="img/chicha_morada_vaso.jpg" alt="Chicha Morada Vaso" width={150} height={100} className="me-2 rounded menu-img" />
                Chicha Morada Vaso
              </div>
              <span className="badge bg-success rounded-pill">S/ 4.00</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src="img/agua_san_mateo.jpg" alt="Agua Mineral San Mateo" width={150} height={100} className="me-2 rounded menu-img" />
                Agua Mineral San Mateo
              </div>
              <span className="badge bg-success rounded-pill">S/ 4.00</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
