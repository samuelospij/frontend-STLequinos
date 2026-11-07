import React, { useState } from 'react';
import senaLogo from '../assets/sena_logo.png';
import './Login.css'; // Reutilizamos los estilos del login para mantener la misma estructura visual

export default function RecuperarClave({ onVolverLogin }) {
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRecuperar = (e) => {
    e.preventDefault();
    setError('');
    setMensaje('');

    if (!correo) {
      setError('Por favor, ingresa tu correo institucional.');
      return;
    }

    if (!correo.endsWith('@sena.edu.co') && !correo.endsWith('@misena.edu.co')) {
      setError('Debes ingresar un correo institucional válido (@sena.edu.co o @misena.edu.co).');
      return;
    }

    setIsLoading(true);

    // Simulando el envío de instrucciones mediante el servicio SMTP del sistema
    setTimeout(() => {
      setIsLoading(false);
      setEnviado(true);
      setMensaje(`Se han enviado las instrucciones de recuperación al correo: ${correo}`);
    }, 800);
  };

  return (
    <div className="login-page-container">
      <div className="login-card">
        
        {/* Panel Izquierdo Institucional */}
        <div className="login-brand-section">
          <h1 className="brand-title">STL EQUINOS</h1>
          <h3 className="brand-subtitle">Recuperación de Acceso</h3>
          <p className="brand-description">
            Sistema de gestión Equina y seguridad de la información. Restablece tus credenciales de manera segura.
          </p>
          <div className="brand-footer">
            <span>Versión 1.0 (2026)</span>
            <span className="status-indicator">

            </span>
          </div>
        </div>

        {/* Panel Derecho del Formulario */}
        <div className="login-form-section">
          <div className="login-form-content">
            
            <div className="login-form-header">
              <img src={senaLogo} alt="Logo SENA" className="login-logo-top" />
              <h2>¿Olvidaste tu contraseña?</h2>
              <p>Ingresa tu correo y te enviaremos los pasos para restablecerla</p>
            </div>

            {error && <div className="login-error-msg">{error}</div>}
            {mensaje && (
              <div style={{ backgroundColor: '#F0FDF4', borderLeft: '4px solid #39A900', color: '#166534', padding: '0.75rem 1rem', borderRadius: '0.25rem', fontSize: '0.875rem', marginBottom: '1.5rem', fontWeight: 500 }}>
                {mensaje}
              </div>
            )}

            {!enviado ? (
              <form onSubmit={handleRecuperar}>
                <div className="login-form-group">
                  <label>Correo Electrónico</label>
                  <input
                    type="email"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    className="login-input"
                    placeholder="nombre.apellido@sena.edu.co"
                  />
                </div>

                <button type="submit" className="btn-login" disabled={isLoading} style={{ marginBottom: '1rem' }}>
                  {isLoading ? 'Enviando...' : 'Enviar Instrucciones'}
                </button>
              </form>
            ) : null}

            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <button 
                type="button"
                onClick={onVolverLogin} 
                style={{ background: 'none', border: 'none', color: '#FF6A13', fontWeight: 600, cursor: 'pointer', fontSize: '0.85rem' }}
              >
              Volver al inicio de sesión
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}