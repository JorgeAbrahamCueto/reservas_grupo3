import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Importamos useNavigate

export const ReservaCliente = () => {
  const navigate = useNavigate(); // ✅ Para redireccionar

      // Oculta la barra de menú
      React.useEffect(() => {
        const menu = document.querySelector('nav, .navbar, #menu, header');
        if (menu) {
          menu.style.display = 'none';
        }
        return () => {
          if (menu) {
            menu.style.display = '';
          }
        };
      }, []);

  const reservas = []; // A futuro, puedes cargar desde localStorage o una API

  return (
    <div>
      <div className="container mt-4">
        <h2 className="mb-4">Reporte de Reservas del Cliente</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Piso</th>
                <th>Mesa</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(reservas) && reservas.length > 0 ? (
                reservas.map((reserva, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{reserva.nombre}</td>
                    <td>{reserva.fecha}</td>
                    <td>{reserva.hora}</td>
                    <td>{reserva.piso}</td>
                    <td>{reserva.mesa}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    No hay reservas registradas.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        

        {/* ✅ Botón para volver al menú principal */}
        <div className="text-center mt-4">
          <button
            onClick={() => navigate('/login')}
            style={{
              background: '#374151',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              padding: '8px 16px',
              cursor: 'pointer'
            }}
          >
            Volver a Menú Principal
          </button>
        </div>
      </div>
    </div>
  );
};