import React, { useState } from 'react';
import '../index.css';

export default function ReportesAdmin() {
  const [rolActual, setRolActual] = useState('Administrador');

  const handleExport = (tipo) => {
    alert(`Generando copia de seguridad y exportando en formato .${tipo} (Requisito RFCS02)...`);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-[#F8F9FA] rounded-lg shadow-md mt-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-[#00324D] mb-4">
        Panel Administrativo, Control de Roles (RFRN01) y Respaldos (RFCS02)
      </h2>
      
      <div className="mb-6 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Simulación de Control de Acceso Basado en Roles (RBAC)
        </label>
        <select 
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-[#39A900] focus:border-[#39A900]"
          value={rolActual}
          onChange={(e) => setRolActual(e.target.value)}
        >
          <option value="Administrador">Administrador (Acceso Total a Reportes y Backups)</option>
          <option value="Instructor">Instructor (Gestión Zootécnica y Sanitaria)</option>
          <option value="Aprendiz">Aprendiz (Consulta y Registro Operativo)</option>
        </select>
        <p className="text-xs text-gray-500 mt-2">
          Rol activo actual: <span className="font-bold text-[#39A900]">{rolActual}</span>
        </p>
      </div>

      {rolActual === 'Administrador' ? (
        <div className="space-y-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h3 className="text-lg font-semibold text-[#2C5E3E]">
            Centro de Respaldos y Exportación de Base de Datos (RFCS02)
          </h3>
          <p className="text-sm text-gray-600">
            Herramienta exclusiva para administradores que permite extraer la información zootécnica e histórica del sistema en formatos obligatorios <span className="font-semibold">.SQL</span> y <span className="font-semibold">.CSV</span>[cite: 6].
          </p>
          <div className="flex gap-4 pt-2">
            <button 
              onClick={() => handleExport('SQL')}
              className="bg-[#00324D] text-white px-4 py-2 rounded-md hover:bg-[#002233] transition text-sm font-semibold shadow"
            >
              Exportar Respaldo (.SQL)
            </button>
            <button 
              onClick={() => handleExport('CSV')}
              className="bg-[#39A900] text-white px-4 py-2 rounded-md hover:bg-[#2C5E3E] transition text-sm font-semibold shadow"
            >
              Exportar Reportes (.CSV)
            </button>
          </div>
        </div>
      ) : (
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800 text-sm">
          <span className="font-bold">Aviso de Restrició (RFRN01):</span> Las opciones de respaldo, exportación masiva y administración de usuarios están restringidas exclusivamente al rol de Administrador.
        </div>
      )}
    </div>
  );
}