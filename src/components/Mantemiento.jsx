import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Importar useNavigate

export const Mantemiento = () => {
  const navigate = useNavigate();

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

  // Responsive styles
  const dashboardStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #000000 0%, #b71c1c 100%)',
    padding: '40px 0',
    fontFamily: 'Segoe UI, Arial, sans-serif',
  };
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 1fr',
    gap: 32,
    maxWidth: 1200,
    margin: '0 auto',
    alignItems: 'flex-start',
  };
  const cardStyle = {
    background: '#fff',
    borderRadius: 12,
    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
    padding: 24,
    marginBottom: 24,
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
    marginLeft: 8,
  };
  const statBox = {
    background: '#f1f5f9',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    textAlign: 'center',
  };

  // Responsive: use a media query to adjust layout for mobile
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Ajustes para mejorar el espaciado y evitar amontonamiento
  const responsiveContainerStyle = isMobile
    ? {
        ...containerStyle,
        display: 'block',
        maxWidth: '100%',
        padding: '0 8px',
      }
    : containerStyle;

  const responsiveCardStyle = isMobile
    ? { ...cardStyle, marginBottom: 24, padding: 16 }
    : cardStyle;

  const inputGroupStyle = isMobile
    ? { display: 'block', marginBottom: 16 }
    : { display: 'flex', alignItems: 'center', marginBottom: 16 };

  const inputStyle = {
    padding: '6px 10px',
    borderRadius: 6,
    border: '1px solid #c7d2fe',
    marginRight: isMobile ? 0 : 12,
    marginBottom: isMobile ? 12 : 0,
    flex: 1,
    width: isMobile ? '100%' : undefined,
    minWidth: 0,
  };

  const selectStyle = {
    marginLeft: 8,
    padding: '6px 10px',
    borderRadius: 6,
    border: '1px solid #c7d2fe',
    minWidth: 90,
  };

  return (
    <div style={dashboardStyle}>
      <h2 style={{ color: '#fff', textAlign: 'center', marginBottom: 32, letterSpacing: 1, fontSize: isMobile ? 20 : 28 }}>
        Dashboard de Mantenimiento de Mesas
      </h2>
      <div style={responsiveContainerStyle}>
        {/* Sidebar: Estadísticas y Horario */}
        <div style={isMobile ? { marginBottom: 24 } : {}}>
          <div style={responsiveCardStyle}>
            <h3 style={{ color: '#3730a3', marginBottom: 16, fontSize: isMobile ? 16 : 20 }}>Estadísticas</h3>
            <div style={statBox}>
              <div style={{ fontSize: isMobile ? 20 : 28, fontWeight: 700 }}>{mesas.length}</div>
              <div>Total Mesas</div>
            </div>
            <div style={statBox}>
              <div style={{ fontSize: isMobile ? 20 : 28, fontWeight: 700 }}>{mesas.filter(m => m.bloqueada).length}</div>
              <div>Bloqueadas</div>
            </div>
            <div style={statBox}>
              <div style={{ fontSize: isMobile ? 20 : 28, fontWeight: 700 }}>{mesas.filter(m => !m.bloqueada).length}</div>
              <div>Disponibles</div>
            </div>
          </div>
          <div style={responsiveCardStyle}>
            <h3 style={{ color: '#3730a3', marginBottom: 16, fontSize: isMobile ? 16 : 20 }}>Horario de Atención</h3>
            <div style={{ marginBottom: 16, display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 12 }}>
              <label style={{ marginBottom: isMobile ? 8 : 0 }}>
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
                    width: isMobile ? 110 : 110,
                  }}
                />
              </label>
              <label>
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
                    width: isMobile ? 110 : 110,
                  }}
                />
              </label>
            </div>
          </div>
        </div>

        {/* Main: Gestión de Mesas */}
        <div style={isMobile ? { marginBottom: 24 } : {}}>
          <div style={responsiveCardStyle}>
            <div
              style={{
                display: isMobile ? 'block' : 'flex',
                justifyContent: 'space-between',
                alignItems: isMobile ? 'stretch' : 'center',
                marginBottom: 20,
                gap: isMobile ? 12 : 24,
              }}
            >
              <div style={isMobile ? { marginBottom: 12 } : {}}>
                <label style={{ marginRight: 8 }}>
                  Piso:
                  <select
                    value={pisoSeleccionado}
                    onChange={e => setPisoSeleccionado(Number(e.target.value))}
                    style={selectStyle}
                  >
                    <option value={1}>Piso 1</option>
                    <option value={2}>Piso 2</option>
                    <option value={3}>Piso 3</option>
                  </select>
                </label>
              </div>
              <input
                type="text"
                placeholder="Buscar mesa..."
                value={busqueda}
                onChange={e => setBusqueda(e.target.value)}
                style={{
                  ...inputStyle,
                  width: isMobile ? '100%' : 220,
                  marginTop: isMobile ? 8 : 0,
                  marginBottom: 0,
                }}
              />
            </div>
            <div style={inputGroupStyle}>
              <input
                type="text"
                placeholder="Nombre de la mesa"
                value={nuevaMesa}
                onChange={e => setNuevaMesa(e.target.value)}
                style={inputStyle}
              />
              <button
                onClick={agregarMesa}
                style={{
                  ...buttonStyle,
                  width: isMobile ? '100%' : undefined,
                  marginLeft: isMobile ? 0 : 8,
                  marginTop: isMobile ? 8 : 0,
                }}
              >
                Agregar Mesa
              </button>
            </div>
            <div style={{ maxHeight: isMobile ? 220 : 350, overflowY: 'auto', marginTop: 12 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: isMobile ? 13 : 16 }}>
                <thead>
                  <tr style={{ background: '#f1f5f9' }}>
                    <th style={{ padding: 8, borderRadius: 4, textAlign: 'left' }}>Nombre</th>
                    <th style={{ padding: 8, borderRadius: 4 }}>Estado</th>
                    <th style={{ padding: 8, borderRadius: 4 }}>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {mesasFiltradas.map(mesa => (
                    <tr key={mesa.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                      <td style={{ padding: 8 }}>{mesa.nombre}</td>
                      <td style={{ padding: 8 }}>
                        {mesa.bloqueada
                          ? <span style={{ color: '#ef4444', fontWeight: 600 }}>Bloqueada</span>
                          : <span style={{ color: '#22c55e', fontWeight: 600 }}>Disponible</span>
                        }
                      </td>
                      <td style={{ padding: 8 }}>
                        <button
                          onClick={() => toggleBloqueo(mesa.id)}
                          style={{
                            ...buttonStyle,
                            fontSize: isMobile ? 12 : 14,
                            padding: isMobile ? '4px 8px' : '6px 16px',
                            marginLeft: 0,
                            marginRight: 8,
                          }}
                        >
                          {mesa.bloqueada ? 'Desbloquear' : 'Bloquear'}
                        </button>
                        <button
                          onClick={() => eliminarMesa(mesa.id)}
                          style={{
                            ...dangerButtonStyle,
                            fontSize: isMobile ? 12 : 14,
                            padding: isMobile ? '4px 8px' : '6px 16px',
                            marginLeft: 0,
                          }}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                  {mesasFiltradas.length === 0 && (
                    <tr>
                      <td colSpan={3} style={{ textAlign: 'center', padding: 16, color: '#888' }}>
                        No hay mesas para mostrar.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar: Reporte y Navegación */}
        <div>
          <div style={responsiveCardStyle}>
            <h3 style={{ color: '#3730a3', marginBottom: 16, fontSize: isMobile ? 16 : 20 }}>Reporte</h3>
            <button onClick={generarReporte} style={buttonStyle}>Generar Reporte</button>
            {reporte && (
              <div style={{
                marginTop: 20,
                background: '#f1f5f9',
                padding: 16,
                borderRadius: 8,
                fontSize: isMobile ? 13 : 16,
              }}>
                <p>Total de mesas: <b>{reporte.total}</b></p>
                <p>Mesas bloqueadas: <b>{reporte.bloqueadas}</b></p>
                <p>Mesas disponibles: <b>{reporte.disponibles}</b></p>
                <p>Horario: <b>{reporte.horario.apertura} - {reporte.horario.cierre}</b></p>
              </div>
            )}
          </div>
          <div style={responsiveCardStyle}>
            <button
              onClick={() => navigate('/login')}
              style={{
                background: '#374151',
                color: '#fff',
                border: 'none',
                borderRadius: 6,
                padding: isMobile ? '10px 12px' : '12px 24px',
                cursor: 'pointer',
                width: '100%',
                fontSize: isMobile ? 14 : 16,
                fontWeight: 600,
              }}
            >
              Volver a Menú Principal
            </button>
          </div>
        </div>
      </div>
      {/* Extra: Responsive para dispositivos moviles */}
      <style>
        {`
          @media (max-width: 900px) {
            table, thead, tbody, th, td, tr {
              display: block;
              width: 100%;
            }
            thead tr {
              display: none;
            }
            tbody tr {
              margin-bottom: 12px;
              border-radius: 8px;
              box-shadow: 0 1px 4px rgba(0,0,0,0.04);
              background: #fff;
            }
            td {
              padding: 8px 8px 8px 40%;
              position: relative;
              min-height: 32px;
              border: none;
              text-align: left;
            }
            td:before {
              position: absolute;
              left: 8px;
              top: -8px;
              width: 35%;
              white-space: nowrap;
              font-weight: bold;
              color: #888;
            }
            tbody tr td:nth-child(1):before { content: "Nombre"; }
            tbody tr td:nth-child(2):before { content: "Estado"; }
            tbody tr td:nth-child(3):before { content: "Acciones"; }
          }
        `}
      </style>
    </div>
  );
};