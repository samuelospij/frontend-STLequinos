import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Reproduccion from './views/Reproduccion';
import NutricionBitacora from './views/NutricionBitacora';
import ReportesAdmin from './views/ReportesAdmin';
import './App.css';

export default function App() {
  const [vistaActual, setVistaActual] = useState('reproduccion');

  const renderizarVista = () => {
    switch (vistaActual) {
      case 'reproduccion': return <Reproduccion />;
      case 'nutricion': return <NutricionBitacora />;
      case 'reportes': return <ReportesAdmin />;
      default: return (
        <div className="text-center p-8 bg-white rounded-lg shadow-sm border">
          <span className="text-4xl">🚧</span>
          <h2 className="text-2xl font-bold mt-2">Módulo en Construcción</h2>
          <p className="text-gray-600">Pertenece a la Persona 1. Usa el menú para navegar a Reproducción, Nutrición o Reportes.</p>
        </div>
      );
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