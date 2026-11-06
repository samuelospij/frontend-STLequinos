import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="sena-navbar">
      <div className="navbar-brand">
        <span className="sena-logo-text">SENA</span>
        <span className="divider">|</span>
        <span className="project-title">STL Equinos - Sede La Salada</span>
      </div>
      <div className="navbar-user">
        <span className="role-badge">Persona 1</span>
      </div>
    </header>
  );
}