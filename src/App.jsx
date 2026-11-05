import React, { useState } from 'react';
import Reproduccion from './views/Reproduccion';
import NutricionBitacora from './views/NutricionBitacora';
import ReportesAdmin from './views/ReportesAdmin';
import './App.css';
import './index.css';

export default function App() {
  const [seccionActiva, setSeccionActiva] = useState('reproduccion');

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Barra de Navegación Institucional STL Equinos */}
      <nav className="bg-[#00324D] text-white shadow-md p-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-xl font-bold tracking-wide">
              STL Equinos <span className="text-[#39A900] text-sm font-normal">| Módulos Persona 2</span>
            </h1>
          </div>
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => setSeccionActiva('reproduccion')}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition ${
                seccionActiva === 'reproduccion' ? 'bg-[#39A900] text-white shadow' : 'bg-[#002233] text-gray-300 hover:bg-gray-700'
              }`}
            >
              Control Reproductivo (RFI03)
            </button>
            <button 
              onClick={() => setSeccionActiva('nutricion')}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition ${
                seccionActiva === 'nutricion' ? 'bg-[#39A900] text-white shadow' : 'bg-[#002233] text-gray-300 hover:bg-gray-700'
              }`}
            >
              Nutrición y Bitácora (RFI04)
            </button>
            <button 
              onClick={() => setSeccionActiva('reportes')}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition ${
                seccionActiva === 'reportes' ? 'bg-[#39A900] text-white shadow' : 'bg-[#002233] text-gray-300 hover:bg-gray-700'
              }`}
            >
              Admin y Reportes (RFCS02)
            </button>
          </div>
        </div>
      </nav>

      {/* Contenido Dinámico según la Pestaña Seleccionada */}
      <main className="py-6 px-4">
        {seccionActiva === 'reproduccion' && <Reproduccion />}
        {seccionActiva === 'nutricion' && <NutricionBitacora />}
        {seccionActiva === 'reportes' && <ReportesAdmin />}
      </main>
    </div>
  );
}