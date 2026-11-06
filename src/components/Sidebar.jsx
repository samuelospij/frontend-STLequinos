import React from 'react';
import './Sidebar.css';

export default function Sidebar({ vistaActual, setVistaActual }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'ejemplares', label: 'Equinos' },
    { id: 'sanidad', label: 'Salud'}
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-section-title">Módulos Clínicos</div>
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`sidebar-link ${vistaActual === item.id ? 'activo' : ''}`}
            onClick={() => setVistaActual(item.id)}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-label">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}