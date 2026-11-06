import React from 'react';
import './Sidebar.css';

export default function Sidebar({ vistaActual, setVistaActual, rolUsuario, onLogout }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'ejemplares', label: 'Equinos' },
    { id: 'sanidad', label: 'Salud' },
    { id: 'reproduccion', label: 'Reproducción' },
    { id: 'nutricion', label: 'Nutrición' },
    { id: 'reportes', label: 'Admin / Reportes' }
  ];

  return (
    <aside className="sidebar-container">
      <div>
        <div className="sidebar-header">
          <h3 className="sidebar-title">Módulos Zootécnicos</h3>
        </div>
        
        <nav className="sidebar-nav">
          <ul className="sidebar-list">
            {menuItems.map(item => (
              <li key={item.id}>
                <button
                  className={`sidebar-btn ${vistaActual === item.id ? 'active' : ''}`}
                  onClick={() => setVistaActual(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="sidebar-footer">
        <div className="user-role-badge">
          Rol Activo: {rolUsuario || 'Invitado'}
        </div>
        
        {/* El evento onClick llama a la función de App.jsx */}
        <button className="btn-logout" onClick={onLogout}>
          Salir de la sesión
        </button>
      </div>
    </aside>
  );
}