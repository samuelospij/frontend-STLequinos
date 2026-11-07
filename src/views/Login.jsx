import React, { useState } from 'react';
import senaLogo from '../assets/sena_logo.png'; /* Corrección de extensión a .png */
import './Login.css';

export default function Login({ onLoginSuccess }) {
  const [credenciales, setCredenciales] = useState({ correo: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const usuariosRegistrados = [
    { id: 1, correo: 'admin.salada@sena.edu.co', password: 'admin123', nombre: 'Administrador Principal', rol: 'Administrador' },
    { id: 2, correo: 'instructor@sena.edu.co', password: 'instructor123', nombre: 'Instructor Zootecnia', rol: 'Instructor' },
    { id: 3, correo: 'aprendiz@misena.edu.co', password: 'aprendiz123', nombre: 'Aprendiz Operario', rol: 'Aprendiz' }
  ];

  const handleChange = (e) => {
    setCredenciales({ ...credenciales, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (!credenciales.correo || !credenciales.password) {
        setError('Por favor, ingresa tu correo y contraseña.');
        setIsLoading(false);
        return;
      }

      const usuarioAutenticado = usuariosRegistrados.find(
        (user) => user.correo === credenciales.correo && user.password === credenciales.password
      );

      if (usuarioAutenticado) {
        onLoginSuccess(usuarioAutenticado);
      } else {
        setError('Credenciales incorrectas. Verifica tu correo institucional o contraseña.');
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="login-page-container">
      <div className="login-card">
        
        {/* Panel Izquierdo Institucional */}
        <div className="login-brand-section">
          <div style={{ marginBottom: '2rem' }}>
            <img 
              src={senaLogo} 
              alt="Logo SENA" 
              style={{ width: '65px', height: 'auto', objectFit: 'contain', filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.1))' }} 
            />
          </div>
          <span className="brand-badge">SENA - Regional Antioquia</span>
          <h1 className="brand-title">STL EQUINOS</h1>
          <h3 className="brand-subtitle">Sistema de Gestión Zootécnica</h3>
          <p className="brand-description">
            Plataforma integral de trazabilidad biométrica, sanitaria y reproductiva para la unidad de equinos del Centro de los Recursos Naturales Renovables La Salada.
          </p>
          
          <div className="brand-footer">
            <span>Versión 2.0 (2026)</span>
            <span className="status-indicator">
              <span className="status-dot"></span> Servidor Conectado
            </span>
          </div>
        </div>

        {/* Panel Derecho de Formulario */}
        <div className="login-form-section">
          <div className="login-form-header">
            <h2>Iniciar Sesión</h2>
            <p>Ingresa con tu correo institucional (@sena.edu.co o @misena.edu.co).</p>
          </div>

          {error && <div className="login-error-msg">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="login-form-group">
              <label>Correo Electrónico Institucional</label>
              <input
                type="email"
                name="correo"
                value={credenciales.correo}
                onChange={handleChange}
                className="login-input"
                placeholder="nombre.apellido@sena.edu.co"
                autoComplete="email"
              />
            </div>

            <div className="login-form-group">
              <label>Contraseña</label>
              <input
                type="password"
                name="password"
                value={credenciales.password}
                onChange={handleChange}
                className="login-input"
                placeholder="••••••••••••"
                autoComplete="current-password"
              />
            </div>

            <div className="login-options">
              <label className="login-checkbox-group">
                <input type="checkbox" /> Recordar credenciales
              </label>
              <a href="#" className="login-forgot-link">¿Olvidaste tu contraseña?</a>
            </div>

            <button type="submit" className="btn-login" disabled={isLoading}>
              {isLoading ? 'Verificando...' : 'INICIAR SESIÓN →'}
            </button>
          </form>

          <p className="login-help-text">
            ¿Necesitas ayuda para ingresar? Contacta a la Mesa de Ayuda Técnica de La Salada.
          </p>
        </div>
      </div>
    </div>
  );
}