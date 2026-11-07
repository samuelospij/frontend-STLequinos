import React from 'react';
import senaLogo from '../assets/sena_logo.png';
import './Navbar.css';

export default function Navbar({ usuarioActivo }) {
  return (
    <header className="sena-navbar">
      <div className="navbar-brand">
        <img src={senaLogo} alt="SENA Logo" className="navbar-logo" />
        <div className="navbar-titles">
          <span className="sena-logo-text">SENA</span>
          <span className="divider">|</span>
          <span className="project-title">STL Equinos - Sede La Salada</span>
        </div>
      </div>

      <div className="navbar-user">
        <span className="role-badge">
          {usuarioActivo?.nombre || 'Usuario'} ({usuarioActivo?.rol || 'Invitado'})
        </span>
      </div>
    </header>
  );
}