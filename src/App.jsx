import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './views/Dashboard';
import Ejemplares from './views/Ejemplares';
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
      case 'reproduccion':
        return <Reproduccion />;
      case 'nutricion':
        return <NutricionBitacora />;
      case 'reportes':
        return <ReportesAdmin />;
      case 'sanidad':
        return (
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-[#00324D]">Módulo de Salud</h2>
            <p className="text-gray-600 mt-2">Próximamente plan sanitario y vacunas (RFI02).</p>
          </div>
        );
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