import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './views/Dashboard';
import Ejemplares from './views/Ejemplares';
import Sanidad from './views/Sanidad';
import Bitacora from './views/Bitacora';
import './App.css';

export default function App() {
  const [vistaActual, setVistaActual] = useState('dashboard');

  return (
    <div className="app-layout">
      <Navbar />

      <div className="app-body">
        <Sidebar vistaActual={vistaActual} setVistaActual={setVistaActual} />

        <main className="app-content">
          {vistaActual === 'dashboard' && <Dashboard setVistaActual={setVistaActual} />}
          {vistaActual === 'ejemplares' && <Ejemplares />}
          {vistaActual === 'sanidad' && <Sanidad />}
          {vistaActual === 'bitacora' && <Bitacora />}
          {vistaActual === 'reproduccion' && (
            <div>
              <h2>Módulo de Reproducción</h2>
              <p>Próximamente control reproductivo y genealogía.</p>
            </div>
          )}
          {vistaActual === 'nutricion' && (
            <div>
              <h2>Módulo de Nutrición</h2>
              <p>Próximamente raciones y control de alimentación.</p>
            </div>
          )}
          {vistaActual === 'admin' && (
            <div>
              <h2>Módulo de Administración y Reportes</h2>
              <p>Próximamente generación de reportes generales.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}