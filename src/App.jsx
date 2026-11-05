import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './views/Dashboard';
import Ejemplares from './views/Ejemplares';
import Sanidad from './views/Sanidad';
// Vistas de tu compañera (Persona 2)
import Reproduccion from './views/Reproduccion';
import NutricionBitacora from './views/NutricionBitacora';
import ReportesAdmin from './views/ReportesAdmin';
import './App.css';
import './index.css';

export default function App() {
  const [seccionActiva, setSeccionActiva] = useState('dashboard');

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col">
      {/* Barra de Navegación Institucional */}
      <Navbar />

      {/* Menú Superior unificado para Persona 1 y Persona 2 */}
      <nav className="bg-[#00324D] text-white shadow-md px-4 py-2 sticky top-[65px] z-40 border-t border-[#39A900]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-bold">Módulos del Sistema:</span>
          <div className="flex flex-wrap gap-2">
            {/* Tus módulos (Persona 1) */}
            <button 
              onClick={() => setSeccionActiva('dashboard')}
              className={`px-3 py-1.5 rounded-md text-sm font-semibold transition ${
                seccionActiva === 'dashboard' ? 'bg-[#39A900] text-white shadow' : 'bg-[#002233] text-gray-300 hover:bg-gray-700'
              }`}
            >
              Dashboard
            </button>
            <button 
              onClick={() => setSeccionActiva('ejemplares')}
              className={`px-3 py-1.5 rounded-md text-sm font-semibold transition ${
                seccionActiva === 'ejemplares' ? 'bg-[#39A900] text-white shadow' : 'bg-[#002233] text-gray-300 hover:bg-gray-700'
              }`}
            >
              Equinos
            </button>
            <button 
              onClick={() => setSeccionActiva('sanidad')}
              className={`px-3 py-1.5 rounded-md text-sm font-semibold transition ${
                seccionActiva === 'sanidad' ? 'bg-[#39A900] text-white shadow' : 'bg-[#002233] text-gray-300 hover:bg-gray-700'
              }`}
            >
              Salud
            </button>

            {/* Módulos de tu compañera (Persona 2) */}
            <button 
              onClick={() => setSeccionActiva('reproduccion')}
              className={`px-3 py-1.5 rounded-md text-sm font-semibold transition ${
                seccionActiva === 'reproduccion' ? 'bg-[#39A900] text-white shadow' : 'bg-[#002233] text-gray-300 hover:bg-gray-700'
              }`}
            >
              Reproducción
            </button>
            <button 
              onClick={() => setSeccionActiva('nutricion')}
              className={`px-3 py-1.5 rounded-md text-sm font-semibold transition ${
                seccionActiva === 'nutricion' ? 'bg-[#39A900] text-white shadow' : 'bg-[#002233] text-gray-300 hover:bg-gray-700'
              }`}
            >
              Nutrición y Bitácora
            </button>
            <button 
              onClick={() => setSeccionActiva('reportes')}
              className={`px-3 py-1.5 rounded-md text-sm font-semibold transition ${
                seccionActiva === 'reportes' ? 'bg-[#39A900] text-white shadow' : 'bg-[#002233] text-gray-300 hover:bg-gray-700'
              }`}
            >
              Admin y Reportes
            </button>
          </div>
        </div>
      </nav>

      {/* Contenido Dinámico según la sección seleccionada */}
      <main className="flex-1 py-6 px-4 max-w-7xl mx-auto w-full">
        {seccionActiva === 'dashboard' && <Dashboard />}
        {seccionActiva === 'ejemplares' && <Ejemplares />}
        {seccionActiva === 'sanidad' && <Sanidad />}
        {seccionActiva === 'reproduccion' && <Reproduccion />}
        {seccionActiva === 'nutricion' && <NutricionBitacora />}
        {seccionActiva === 'reportes' && <ReportesAdmin />}
      </main>
    </div>
  );
}