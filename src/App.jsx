import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.css';

export default function App() {
  const [vistaActual, setVistaActual] = useState('dashboard');

  return (
    <div className="app-layout">
      <Navbar />

      <div className="app-body">
        <Sidebar vistaActual={vistaActual} setVistaActual={setVistaActual} />

        <main className="app-content">
          <h1>Bienvenida al Sistema STL Equinos</h1>
          <p>Selecciona una opción en la barra lateral para comenzar.</p>
        </main>
      </div>
    </div>
  );
}