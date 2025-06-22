import React from 'react'

export const Contactos = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #000 0%, #ff0000 100%)',
      padding: '2rem'
    }}>
      <h2 style={{ color: "#0000", textShadow: "0 2px 8px #fff, 0 0 2px #fff" }}>Contáctanos</h2>
      <form className="contact-form" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        maxWidth: '400px',
        margin: '0 auto',
        background: 'linear-gradient(135deg, #000 0%, #FFD600 100%)',
        padding: '2rem',
        borderRadius: '24px', // Más redondeado
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
      }}>
        <div>
          <label htmlFor="nombres" style={{ color: '#fff' }}>Nombres</label>
          <input type="text" id="nombres" name="nombres" required style={{
            width: '100%',
            padding: '0.5rem',
            borderRadius: '12px', // Más redondeado
            border: '1px solid #ccc'
          }}/>
        </div>
        <div>
          <label htmlFor="apellidos" style={{ color: '#fff' }}>Apellidos</label>
          <input type="text" id="apellidos" name="apellidos" required style={{
            width: '100%',
            padding: '0.5rem',
            borderRadius: '12px', // Más redondeado
            border: '1px solid #ccc'
          }}/>
        </div>
        <div>
          <label htmlFor="telefono" style={{ color: '#fff' }}>Teléfono</label>
          <input type="tel" id="telefono" name="telefono" required style={{
            width: '100%',
            padding: '0.5rem',
            borderRadius: '12px', // Más redondeado
            border: '1px solid #ccc'
          }}/>
        </div>
        <div>
          <label htmlFor="direccion" style={{ color: '#fff' }}>Dirección</label>
          <input type="text" id="direccion" name="direccion" required style={{
            width: '100%',
            padding: '0.5rem',
            borderRadius: '12px', // Más redondeado
            border: '1px solid #ccc'
          }}/>
        </div>
        <div>
          <label htmlFor="comentarios" style={{ color: '#fff' }}>Comentarios</label>
          <textarea id="comentarios" name="comentarios" rows="4" style={{
            width: '100%',
            padding: '0.5rem',
            borderRadius: '12px', // Más redondeado
            border: '1px solid #ccc'
          }}></textarea>
        </div>
        <button
          type="submit"
          style={{
            background: '#007bff',
            color: '#fff',
            padding: '0.75rem',
            border: 'none',
            borderRadius: '12px', // Más redondeado
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
          onMouseOver={e => (e.currentTarget.style.background = '#0056b3')}
          onMouseOut={e => (e.currentTarget.style.background = '#007bff')}
        >
          Enviar
        </button>
      </form>
    </div>
  )
}
