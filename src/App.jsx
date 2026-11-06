import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './views/Dashboard';
import Ejemplares from './views/Ejemplares';
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
          {vistaActual === 'sanidad' && (
            <div>
              <h2>Módulo de Salud</h2>
              <p>Próximamente plan sanitario y vacunas.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}