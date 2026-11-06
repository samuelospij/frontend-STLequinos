import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './views/Dashboard';
import Ejemplares from './views/Ejemplares';
import Sanidad from './views/Sanidad';
import Reproduccion from './views/Reproduccion';
import NutricionBitacora from './views/NutricionBitacora';
import ReportesAdmin from './views/ReportesAdmin';

// Importación de las hojas de estilo específicas de los módulos
import './views/Reproduccion.css';
import './views/NutricionBitacora.css';
import './views/ReportesAdmin.css';
import './App.css';

export default function App() {
  const [vistaActual, setVistaActual] = useState('dashboard');

  const renderizarVista = () => {
    switch (vistaActual) {
      case 'dashboard':
        return <Dashboard setVistaActual={setVistaActual} />;
      case 'ejemplares':
        return <Ejemplares />;
      case 'sanidad':
        return <Sanidad />;
      case 'reproduccion':
        return <Reproduccion />;
      case 'nutricion':
        return <NutricionBitacora />;
      case 'reportes':
      case 'admin':
        return <ReportesAdmin />;
      default:
        return <Dashboard setVistaActual={setVistaActual} />;
    }
  };

  return (
    <div className="app-layout min-h-screen bg-[#F8F9FA] flex flex-col">
      <Navbar />

      <div className="app-body flex flex-grow">
        <Sidebar vistaActual={vistaActual} setVistaActual={setVistaActual} />

        <main className="app-content flex-grow p-6">
          {renderizarVista()}
        </main>
      </div>
    </div>
  );
}