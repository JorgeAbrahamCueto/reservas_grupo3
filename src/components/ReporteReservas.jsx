import React, { createContext, useState } from 'react';

export const ReporteReservas = createContext();

export const ProveedorReporteReservas = ({ children }) => {
  const [reservas, setReservas] = useState([]);

  return (
    <ReporteReservas.Provider value={{ reservas, setReservas }}>
      {children}
    </ReporteReservas.Provider>
  );
};