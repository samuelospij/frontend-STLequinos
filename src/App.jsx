import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Login from './views/Login'; // Asegúrate de tener tu vista de Login importada
import Dashboard from './views/Dashboard';
import Ejemplares from './views/Ejemplares';
import Sanidad from './views/Sanidad';
import Reproduccion from './views/Reproduccion';
import NutricionBitacora from './views/NutricionBitacora';
import ReportesAdmin from './views/ReportesAdmin';
import './App.css';

export default function App() {
  const [vistaActual, setVistaActual] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [usuarioActivo, setUsuarioActivo] = useState(null);

  const handleLoginSuccess = (usuario) => {
    setUsuarioActivo(usuario);
    setIsAuthenticated(true);
    setVistaActual('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsuarioActivo(null);
    setVistaActual('dashboard'); 
  };

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
      case 'bitacora':
        return <NutricionBitacora />;
      case 'reportes':
      case 'admin':
        return <ReportesAdmin usuarioActivo={usuarioActivo} />;
      default:
        return <Dashboard setVistaActual={setVistaActual} />;
    }
  };

  // Si no está autenticado, muestra la pantalla de inicio de sesión
  if (!isAuthenticated) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="app-layout min-h-screen bg-[#F8F9FA] flex flex-col">
      <Navbar usuarioActivo={usuarioActivo} setIsAuthenticated={setIsAuthenticated} />

      <div className="app-body flex flex-grow">
        <Sidebar 
          vistaActual={vistaActual} 
          setVistaActual={setVistaActual} 
          rolUsuario={usuarioActivo?.rol} 
          onLogout={handleLogout} 
        />

        <main className="app-content flex-grow p-6">
          {renderizarVista()}
        </main>
      </div>
    </div>
  );
}