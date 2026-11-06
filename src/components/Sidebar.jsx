import React from 'react';
import './Sidebar.css';

export default function Sidebar({ vistaActual, setVistaActual }) {
  return (
    <aside className="sidebar-container">
      <div className="sidebar-header">
        <h3>Módulos Zootécnicos</h3>
      </div>
      <nav className="sidebar-nav">
        <button 
          className={`sidebar-btn ${vistaActual === 'dashboard' ? 'active' : ''}`} 
          onClick={() => setVistaActual('dashboard')}
        >
          Dashboard
        </button>

        <button 
          className={`sidebar-btn ${vistaActual === 'ejemplares' ? 'active' : ''}`} 
          onClick={() => setVistaActual('ejemplares')}
        >
          Equinos
        </button>

        <button 
          className={`sidebar-btn ${vistaActual === 'sanidad' ? 'active' : ''}`} 
          onClick={() => setVistaActual('sanidad')}
        >
          Salud
        </button>

        <button 
          className={`sidebar-btn ${vistaActual === 'reproduccion' ? 'active' : ''}`} 
          onClick={() => setVistaActual('reproduccion')}
        >
          Reproducción
        </button>

        <button 
          className={`sidebar-btn ${vistaActual === 'nutricion' ? 'active' : ''}`} 
          onClick={() => setVistaActual('nutricion')}
        >
          Nutrición
        </button>

        <button 
          className={`sidebar-btn ${vistaActual === 'admin' ? 'active' : ''}`} 
          onClick={() => setVistaActual('admin')}
        >
          Admin / Reportes
        </button>
      </nav>
    </aside>
  );
}