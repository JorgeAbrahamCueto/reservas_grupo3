import React from 'react'

export const ReservaCliente = () => {
  // Define reservas as an empty array or fetch data as needed
  const reservas = [];
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
                    ) : null}
                        <tr>
                            <td colSpan="6" className="text-center">No hay reservas registradas.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
