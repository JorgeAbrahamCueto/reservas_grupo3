import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Importar useNavigate

export const Mantemiento = () => {
  const navigate = useNavigate(); // ✅ Hook para redirección

  const [mesas, setMesas] = React.useState([
    ...Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      nombre: `Piso 1 - Mesa ${i + 1}`,
      piso: 1,
      bloqueada: false,
    })),
    ...Array.from({ length: 10 }, (_, i) => ({
      id: i + 11,
      nombre: `Piso 2 - Mesa ${i + 11}`,
      piso: 2,
      bloqueada: false,
    })),
    ...Array.from({ length: 10 }, (_, i) => ({
      id: i + 21,
      nombre: `Piso 3 - Mesa ${i + 21}`,
      piso: 3,
      bloqueada: false,
    })),
  ]);

  const [nuevaMesa, setNuevaMesa] = React.useState('');
  const [horario, setHorario] = React.useState({ apertura: '09:00', cierre: '22:00' });
  const [reporte, setReporte] = React.useState(null);
  const [pisoSeleccionado, setPisoSeleccionado] = React.useState(1);
  const [busqueda, setBusqueda] = React.useState('');

  const agregarMesa = () => {
    if (nuevaMesa.trim() === '') return;
    setMesas([
      ...mesas,
      {
        id: Date.now(),
        nombre: `Piso ${pisoSeleccionado} - ${nuevaMesa}`,
        piso: pisoSeleccionado,
        bloqueada: false,
      },
    ]);
    setNuevaMesa('');
  };

  const eliminarMesa = (id) => {
    setMesas(mesas.filter(m => m.id !== id));
  };

  const toggleBloqueo = (id) => {
    setMesas(mesas.map(m => m.id === id ? { ...m, bloqueada: !m.bloqueada } : m));
  };

  const cambiarHorario = (e) => {
    setHorario({ ...horario, [e.target.name]: e.target.value });
  };

  const generarReporte = () => {
    const bloqueadas = mesas.filter(m => m.bloqueada).length;
    setReporte({
      total: mesas.length,
      bloqueadas,
      disponibles: mesas.length - bloqueadas,
      horario,
    });
  };

  const mesasFiltradas = mesas
    .filter(m => m.piso === pisoSeleccionado)
    .filter(m => m.nombre.toLowerCase().includes(busqueda.toLowerCase()));

  const pageStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #000000 0%, #b71c1c 100%)',
    padding: '40px 0',
  };
  const cardStyle = {
    background: '#fff',
    borderRadius: 12,
    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
    maxWidth: 600,
    margin: '0 auto',
    padding: 32,
  };
  const buttonStyle = {
    background: '#6366f1',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    padding: '6px 16px',
    cursor: 'pointer',
    marginLeft: 8,
  };
  const dangerButtonStyle = {
    ...buttonStyle,
    background: '#ef4444',
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h2 style={{ color: '#3730a3', marginBottom: 24 }}>Mantenimiento de Mesas</h2>

        <div style={{ marginBottom: 16 }}>
          <label style={{ marginRight: 8 }}>
            Piso:
            <select
              value={pisoSeleccionado}
              onChange={e => setPisoSeleccionado(Number(e.target.value))}
              style={{
                marginLeft: 8,
                padding: '6px 10px',
                borderRadius: 6,
                border: '1px solid #c7d2fe',
              }}
            >
              <option value={1}>Piso 1</option>
              <option value={2}>Piso 2</option>
              <option value={3}>Piso 3</option>
            </select>
          </label>
        </div>

        <div style={{ marginBottom: 16 }}>
          <input
            type="text"
            placeholder="Buscar mesa..."
            value={busqueda}
            onChange={e => setBusqueda(e.target.value)}
            style={{
              padding: '6px 10px',
              borderRadius: 6,
              border: '1px solid #c7d2fe',
              width: '100%',
            }}
          />
        </div>

        <div style={{ marginBottom: 16 }}>
          <input
            type="text"
            placeholder="Nombre de la mesa"
            value={nuevaMesa}
            onChange={e => setNuevaMesa(e.target.value)}
            style={{
              padding: '6px 10px',
              borderRadius: 6,
              border: '1px solid #c7d2fe',
              marginRight: 8,
            }}
          />
          <button onClick={agregarMesa} style={buttonStyle}>Agregar Mesa</button>
        </div>

        <ul style={{ padding: 0, listStyle: 'none' }}>
          {mesasFiltradas.map(mesa => (
            <li key={mesa.id} style={{ margin: '8px 0', display: 'flex', alignItems: 'center' }}>
              <span style={{ flex: 1 }}>
                {mesa.nombre} {mesa.bloqueada && <span style={{ color: '#ef4444' }}>(Bloqueada)</span>}
              </span>
              <button onClick={() => toggleBloqueo(mesa.id)} style={buttonStyle}>
                {mesa.bloqueada ? 'Desbloquear' : 'Bloquear'}
              </button>
              <button onClick={() => eliminarMesa(mesa.id)} style={dangerButtonStyle}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>

        <h3 style={{ color: '#3730a3', marginTop: 32 }}>Horario de Atención</h3>
        <div style={{ marginBottom: 16 }}>
          <label>
            Apertura:
            <input
              type="time"
              name="apertura"
              value={horario.apertura}
              onChange={cambiarHorario}
              style={{
                marginLeft: 8,
                padding: '4px 8px',
                borderRadius: 6,
                border: '1px solid #c7d2fe',
              }}
            />
          </label>
          <label style={{ marginLeft: 24 }}>
            Cierre:
            <input
              type="time"
              name="cierre"
              value={horario.cierre}
              onChange={cambiarHorario}
              style={{
                marginLeft: 8,
                padding: '4px 8px',
                borderRadius: 6,
                border: '1px solid #c7d2fe',
              }}
            />
          </label>
        </div>

        <div style={{ marginTop: 32 }}>
          <button onClick={generarReporte} style={buttonStyle}>Generar Reporte</button>
          {reporte && (
            <div style={{
              marginTop: 20,
              background: '#f1f5f9',
              padding: 16,
              borderRadius: 8,
            }}>
              <h4 style={{ color: '#3730a3' }}>Reporte</h4>
              <p>Total de mesas: {reporte.total}</p>
              <p>Mesas bloqueadas: {reporte.bloqueadas}</p>
              <p>Mesas disponibles: {reporte.disponibles}</p>
              <p>Horario: {reporte.horario.apertura} - {reporte.horario.cierre}</p>
            </div>
          )}
        </div>

        {/* ✅ Botón para volver al menú */}
        <div style={{ marginTop: 24, textAlign: 'center' }}>
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