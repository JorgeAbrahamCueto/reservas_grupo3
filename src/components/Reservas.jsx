import React from 'react';
import './ReservaCliente.css';

export const Reservas = () => {
    const [fecha, setFecha] = React.useState('');
        const [hora, setHora] = React.useState('');
        const [advertencia, setAdvertencia] = React.useState('');
        const [personas, setPersonas] = React.useState('1');
        const [piso, setPiso] = React.useState('1');
        const [seleccionadas, setSeleccionadas] = React.useState([]);
        const [mostrarPopup, setMostrarPopup] = React.useState(false);
        const [mostrarFormulario, setMostrarFormulario] = React.useState(false);
    
        const [cliente, setCliente] = React.useState({
            nombre: '',
            dni: '',
            email: '',
            telefono: '',
            requerimientos: '',
        });
    
        const [mesas, setMesas] = React.useState(
            Array.from({ length: 30 }, (_, i) => ({
                id: i + 1,
                reservas: [],
                piso: (Math.floor(i / 10) + 1).toString(),
            }))
        );
    
        const handleSeleccionMesa = (id) => {
            if (!fecha || !hora || advertencia) return;
            setSeleccionadas((prev) =>
                prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
            );
        }
    
        const bloquearMesas = () => {
            if (!fecha || !hora) return [];
    
            const horaSeleccionada = parseInt(hora.split(':')[0], 10);
    
            return mesas
                .filter((mesa) =>
                    mesa.reservas.some((r) => {
                        if (r.fecha !== fecha) return false;
                        const horaReserva = parseInt(r.hora.split(':')[0], 10);
                        return (
                            horaSeleccionada >= horaReserva &&
                            horaSeleccionada < horaReserva + 3
                        );
                    })
                )
                .map((m) => m.id);
        }
    
        const mesasBloqueadas = bloquearMesas();
    
        const handleContinuar = () => {
            if (!fecha || !hora || seleccionadas.length === 0 || advertencia) return;
            setMostrarPopup(true);
        };
    
        const confirmarPopup = () => {
            setMostrarPopup(false);
            setMostrarFormulario(true);
        };
    
        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setCliente({ ...cliente, [name]: value });
        };
    
        const handleEnviarReserva = () => {
            setMesas((prevMesas) =>
                prevMesas.map((mesa) =>
                    seleccionadas.includes(mesa.id)
                        ? {
                              ...mesa,
                              reservas: [...mesa.reservas, { fecha, hora }],
                          }
                        : mesa
                )
            );
    
            alert('Reserva completada exitosamente');
            setCliente({
                nombre: '',
                dni: '',
                email: '',
                telefono: '',
                requerimientos: '',
            });
            setSeleccionadas([]);
            setMostrarFormulario(false);
            setFecha('');
            setHora('');
            setPersonas('1');
            setAdvertencia('');
        };
    
            return (
                <div 
                    className="container mt-4"
                    style={{
                        background: 'linear-gradient(200deg, #000000 0%, #CC3300  100%)',
                        minHeight: '100vh',
                        borderRadius: '16px',
                        boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
                        padding: '32px',
                    }}
                >
                    {/* Fondo oscuro para áreas en blanco */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            background: '#181818',
                            zIndex: -1,
                        }}
                    />
                    <h2 style={{ color: '#fff', textShadow: '1px 1px 4px #000' }}>Reserva de Mesas</h2>

                    {!mostrarFormulario && (
                        <>
                            <div className="mb-3 col-md-3">
                                <label className="form-label" style={{ color: '#fff' }}>Cantidad de personas</label>
                                <select
                                    className="form-select"
                                    value={personas}
                                    onChange={(e) => setPersonas(e.target.value)}
                                    style={{ background: '#222', color: '#fff', border: '1px solid #444' }}
                                >
                                    {[...Array(8)].map((_, i) => (
                                        <option key={i + 1} value={i + 1}>
                                            {i + 1}
                                        </option>
                                    ))}
                                    <option value="8+">8+</option>
                                </select>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <label className="form-label" style={{ color: '#fff' }}>Fecha</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={fecha}
                                        onChange={(e) => setFecha(e.target.value)}
                                        style={{ background: '#222', color: '#fff', border: '1px solid #444' }}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label" style={{ color: '#fff' }}>Hora</label>
                                    <input
                                        type="time"
                                        className="form-control"
                                        value={hora}
                                        onChange={(e) => {
                                            const nuevaHora = e.target.value;
                                            setHora(nuevaHora);

                                            const horaSeleccionada = parseInt(nuevaHora.split(':')[0], 10);
                                            if (horaSeleccionada < 12) {
                                                setAdvertencia('⚠️ La atención es a partir del mediodía (12:00 PM).');
                                            } else {
                                                setAdvertencia('');
                                            }
                                        }}
                                        style={{ background: '#222', color: '#fff', border: '1px solid #444' }}
                                    />
                                    {advertencia && (
                                        <div className="alert alert-warning mt-2" role="alert">
                                            {advertencia}
                                        </div>
                                    )}
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label" style={{ color: '#fff' }}>Piso</label>
                                    <select
                                        className="form-select"
                                        value={piso}
                                        onChange={(e) => setPiso(e.target.value)}
                                        style={{ background: '#222', color: '#fff', border: '1px solid #444' }}
                                    >
                                        <option value="1">Piso 1</option>
                                        <option value="2">Piso 2</option>
                                        <option value="3">Piso 3</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mb-3">
                                <div className="row">
                                    {mesas
                                        .filter((mesa) => mesa.piso === piso)
                                        .map((mesa) => {
                                            const bloqueada = mesasBloqueadas.includes(mesa.id);
                                            const seleccionada = seleccionadas.includes(mesa.id);
                                            const estadoMesa = seleccionada
                                                ? 'mesa-seleccionada'
                                                : bloqueada
                                                ? 'mesa-reservada'
                                                : 'mesa-disponible';

                                            return (
                                                <div className="col-2 mb-3" key={mesa.id}>
                                                    <button
                                                        className={`btn w-100 ${estadoMesa}`}
                                                        disabled={bloqueada || !fecha || !hora || advertencia}
                                                        onClick={() => handleSeleccionMesa(mesa.id)}
                                                        style={{
                                                            background: bloqueada
                                                                ? '#000' // Negro para bloqueadas
                                                                : seleccionada
                                                                ? '#FF9933'
                                                                : '#181818',
                                                            color: '#fff', // Siempre blanco
                                                            border: seleccionada
                                                                ? '2px solid #FF9903'
                                                                : '1px solid #444',
                                                            boxShadow: seleccionada
                                                                ? '0 0 8px 2px #FF990088'
                                                                : undefined,
                                                        }}
                                                    >
                                                        Mesa {mesa.id}
                                                    </button>
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>

                            <button 
                                className="btn btn-primary"
                                disabled={!fecha || !hora || seleccionadas.length === 0 || advertencia}
                                onClick={handleContinuar}
                                style={{
                                    background: (!fecha || !hora || seleccionadas.length === 0 || advertencia)
                                        ? '#222'
                                        : '#FF9903',
                                    border: '1px solid #444',
                                    borderRadius: '32px',
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    padding: '12px 32px',
                                    transition: 'background 0.2s, color 0.2s',
                                    boxShadow: (!fecha || !hora || seleccionadas.length === 0 || advertencia)
                                        ? undefined
                                        : '0 0 12px 2px #FF990088'
                                }}
                            >
                                CONTINUAR 
                            </button>
                            <div className="mt-4" style={{ color: '#fff' }}>
                                <div>
                                    <strong>Dirección:</strong> Jr, Av. Rivera Navarrete 2605
                                </div>
                                <div className="mt-2">
                                    <strong>Teléfonos:</strong>
                                    <span style={{ marginLeft: 8 }}>
                                        <span role="img" aria-label="Teléfono" style={{ marginRight: 4 }}>📞</span>
                                        014240302
                                    </span>
                                    <span style={{ marginLeft: 16 }}>
                                        <span role="img" aria-label="WhatsApp" style={{ marginRight: 4 }}>🟢</span>
                                        924423658
                                    </span>
                                </div>
                                <div className="mt-3" style={{ fontSize: '0.95em', color: '#ffd700' }}>
                                    <strong>Nota:</strong> En caso se requiera una reserva corporativa, por favor comunicarse al número de WhatsApp.
                                </div>
                            </div>
                        </>
                    )}

                    {mostrarPopup && (
                        <div
                            className="popup-overlay"
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '100vw',
                                height: '100vh',
                                background: 'rgba(0,0,0,0.7)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 9999,
                            }}
                        >
                            <div
                                className="popup-content"
                                style={{
                                    background: '#222',
                                    color: '#fff',
                                    borderRadius: '12px',
                                    padding: '32px',
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                                    minWidth: '320px',
                                    maxWidth: '90vw',
                                }}
                            >
                                <h4>Confirmación de Reserva</h4>
                                <p><strong>Fecha:</strong> {fecha}</p>
                                <p><strong>Hora:</strong> {hora}</p>
                                <p><strong>Personas:</strong> {personas}</p>
                                <p><strong>Piso:</strong> {piso}</p>
                                <p>
                                    <strong>Mesas seleccionadas:</strong>{" "}
                                    {seleccionadas.join(", ")}
                                </p>
                                <p className="text-warning">
                                    ⚠ Tolerancia máxima de <strong>15 minutos</strong> después de la hora indicada.
                                </p>
                                <button className="btn btn-success me-2" onClick={confirmarPopup}>
                                    Confirmar
                                </button>
                                <button className="btn btn-secondary" onClick={() => setMostrarPopup(false)}>
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    )}

                    {mostrarFormulario && (
                        <div className="mt-4">
                            <h4 style={{ color: '#fff' }}>Datos del Cliente</h4>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label style={{ color: '#fff' }}>Nombre</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="nombre"
                                        value={cliente.nombre}
                                        onChange={handleInputChange}
                                        style={{ background: '#222', color: '#fff', border: '1px solid #444' }}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label style={{ color: '#fff' }}>DNI</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="dni"
                                        value={cliente.dni}
                                        onChange={handleInputChange}
                                        style={{ background: '#222', color: '#fff', border: '1px solid #444' }}
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label style={{ color: '#fff' }}>Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={cliente.email}
                                        onChange={handleInputChange}
                                        style={{ background: '#222', color: '#fff', border: '1px solid #444' }}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label style={{ color: '#fff' }}>Teléfono</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        name="telefono"
                                        value={cliente.telefono}
                                        onChange={handleInputChange}
                                        style={{ background: '#222', color: '#fff', border: '1px solid #444' }}
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label style={{ color: '#fff' }}>Requerimientos adicionales</label>
                                <textarea
                                    className="form-control"
                                    name="requerimientos"
                                    rows="3"
                                    value={cliente.requerimientos}
                                    onChange={handleInputChange}
                                    style={{ background: '#222', color: '#fff', border: '1px solid #444' }}
                                />
                            </div>
                            <button
                                className="btn btn-primary"
                                onClick={handleEnviarReserva}
                                style={{ background: '#222', border: '1px solid #444' }}
                            >
                                Enviar Reserva
                            </button>
                        </div>
                    )}
                </div>
            );
        };