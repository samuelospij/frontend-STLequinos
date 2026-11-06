import React, { useState } from 'react';
import './Login.css';

export default function Login({ onLoginSuccess }) {
  const [credenciales, setCredenciales] = useState({
    correo: '',
    password: ''
  });
  
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Arreglo de usuarios quemado para simular la base de datos y el RBAC
  const usuariosRegistrados = [
    {
      id: 1,
      correo: 'admin.salada@sena.edu.co',
      password: 'admin123',
      nombre: 'Administrador Principal',
      rol: 'Administrador'
    },
    {
      id: 2,
      correo: 'instructor@sena.edu.co',
      password: 'instructor123',
      nombre: 'Instructor Zootecnia',
      rol: 'Instructor'
    },
    {
      id: 3,
      correo: 'aprendiz@misena.edu.co',
      password: 'aprendiz123',
      nombre: 'Aprendiz Operario',
      rol: 'Aprendiz'
    }
  ];

  const handleChange = (e) => {
    setCredenciales({
      ...credenciales,
      [e.target.name]: e.target.value
    });
    setError(''); // Limpia el error al escribir
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulación de latencia de red (800ms)
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
        // En una app real, guardaríamos el token/usuario en localStorage o Context
        // Aquí pasamos los datos del usuario al App.jsx para permitir el acceso
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
        
        {/* Sección de Marca - Panel Izquierdo */}
        <div className="login-brand-section">
          <span className="brand-badge">SENA - Regional Antioquia</span>
          <h1 className="brand-title">STL EQUINOS</h1>
          <h3 className="brand-subtitle">Sistema de Gestión Zootécnica</h3>
          <p className="brand-description">
            Plataforma integral de trazabilidad biométrica, sanitaria y reproductiva para la unidad de equinos del Centro de los Recursos Naturales Renovables La Salada.
          </p>
          
          <div className="brand-footer">
            <span>Versión 1.0 (2026)</span>
            <span className="status-indicator">
              <span className="status-dot"></span> Servidor Conectado
            </span>
          </div>
        </div>

        {/* Sección de Formulario - Panel Derecho */}
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