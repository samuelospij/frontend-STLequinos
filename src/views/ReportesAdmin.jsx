import React, { useState } from 'react';
import senaLogo from '../assets/sena_logo.png';
import './ReportesAdmin.css';

export default function ReportesAdmin() {
  const [rolActual, setRolActual] = useState('Administrador');
  const [historialBackups, setHistorialBackups] = useState([
    { id: 1, archivo: 'backup_stl_equinos_2026_06_24.sql', tipo: 'SQL', fecha: '2026-06-24 23:00', estado: 'Completado' },
    { id: 2, archivo: 'reporte_nutricion_sanidad_junio.csv', tipo: 'CSV', fecha: '2026-06-20 14:30', estado: 'Completado' }
  ]);

  const handleExport = (tipo) => {
    const fechaActual = new Date().toISOString().split('T')[0];
    const nuevoBackup = {
      id: Date.now(),
      archivo: `respaldo_sistema_${fechaActual}.${tipo.toLowerCase()}`,
      tipo: tipo,
      fecha: new Date().toLocaleString(),
      estado: 'Exitoso'
    };

    setHistorialBackups([nuevoBackup, ...historialBackups]);
    alert(`¡Copia de seguridad generada y exportada con éxito en formato .${tipo}!`);
  };

  return (
    <div className="admin-container">
      <div className="admin-header" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '2rem', borderBottom: '1px solid #E5E7EB', paddingBottom: '1.25rem' }}>
        <img 
          src={senaLogo} 
          alt="Logo SENA" 
          style={{ width: '50px', height: 'auto', objectFit: 'contain' }} 
        />
        <div>
          <h2>Panel Administrativo, Control de Roles y Respaldos</h2>
          <p style={{ margin: 0 }}>Gestión centralizada de seguridad de la información, permisos institucionales y extracción de copias de seguridad de la unidad equina.</p>
        </div>
      </div>

      {/* Resto del contenido del panel de administración */}
    </div>
  );
}