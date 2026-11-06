import React from 'react';
import './Sidebar.css';

export default function Sidebar({ vistaActual, setVistaActual }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '🎛️' },
    { id: 'ejemplares', label: 'Equinos', icon: '🐴' },
    { id: 'sanidad', label: 'Salud', icon: '➕' },
    { id: 'reproduccion', label: 'Reproducción', icon: '🧬' },
    { id: 'nutricion', label: 'Nutrición', icon: '🌾' },
    { id: 'reportes', label: 'Admin/Reportes', icon: '📊' }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-section-title">Módulos Zootécnicos</div>
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button key={item.id} className={`sidebar-link ${vistaActual === item.id ? 'activo' : ''}`} onClick={() => setVistaActual(item.id)}>
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-label">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}