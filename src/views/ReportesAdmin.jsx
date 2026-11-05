import React, { useState } from 'react';
import '../index.css';

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
    alert(`¡Copia de seguridad generada y exportada con éxito en formato .${tipo} (Requisito RFCS02)!`);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto bg-[#F8F9FA] rounded-lg shadow-md mt-6 border border-gray-200 space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-[#00324D]">
          Panel Administrativo, Control de Roles (RFRN01) y Respaldos (RFCS02)
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Gestión centralizada de seguridad de la información, permisos institucionales y extracción de copias de seguridad de la unidad equina.
        </p>
      </div>

      <div className="p-5 bg-white border border-gray-200 rounded-lg shadow-sm space-y-3">
        <label className="block text-sm font-medium text-gray-700">
          Simulación de Control de Acceso Basado en Roles (RBAC) - RFRN01
        </label>
        <select 
          className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-[#39A900] focus:border-[#39A900]"
          value={rolActual}
          onChange={(e) => setRolActual(e.target.value)}
        >
          <option value="Administrador">Administrador (Acceso Total a Reportes y Backups)</option>
          <option value="Instructor">Instructor (Gestión Zootécnica y Sanitaria)</option>
          <option value="Aprendiz">Aprendiz (Consulta y Registro Operativo)</option>
        </select>
        <div className="flex items-center justify-between text-xs text-gray-500 pt-1">
          <span>Nivel de permisos actual: <strong className="text-[#39A900]">{rolActual}</strong></span>
          <span className="italic">Modifique el selector para probar la restricción de vistas.</span>
        </div>
      </div>

      {rolActual === 'Administrador' ? (
        <div className="space-y-6">
          <div className="p-6 bg-green-50 border border-green-200 rounded-lg space-y-4 shadow-sm">
            <h3 className="text-lg font-semibold text-[#2C5E3E]">
              Centro de Respaldos y Exportación de Base de Datos (RFCS02)
            </h3>
            <p className="text-sm text-gray-700">
              Herramienta exclusiva para administradores que permite extraer la información zootécnica, clínica e histórica del sistema en formatos obligatorios <span className="font-semibold">.SQL</span> y <span className="font-semibold">.CSV</span>.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded border border-green-200 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-[#00324D] text-sm">Respaldo Completo de Base de Datos (.SQL)</h4>
                  <p className="text-xs text-gray-500 mt-1">Incluye esquemas, tablas relacionales, registros e integridad referencial.</p>
                </div>
                <button 
                  onClick={() => handleExport('SQL')}
                  className="mt-4 bg-[#00324D] text-white px-4 py-2 rounded-md hover:bg-[#002233] transition text-sm font-semibold shadow"
                >
                  Generar y Descargar .SQL
                </button>
              </div>

              <div className="bg-white p-4 rounded border border-green-200 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-[#2C5E3E] text-sm">Reportes Zootécnicos e Historiales (.CSV)</h4>
                  <p className="text-xs text-gray-500 mt-1">Exportación tabular de consumo de concentrado, sanidad y reproducción.</p>
                </div>
                <button 
                  onClick={() => handleExport('CSV')}
                  className="mt-4 bg-[#39A900] text-white px-4 py-2 rounded-md hover:bg-[#2C5E3E] transition text-sm font-semibold shadow"
                >
                  Generar y Descargar .CSV
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-[#00324D] mb-4">Historial de Copias de Seguridad Recientes</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100 text-gray-700 border-b">
                    <th className="p-3">Nombre del Archivo</th>
                    <th className="p-3">Formato</th>
                    <th className="p-3">Fecha y Hora</th>
                    <th className="p-3">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {historialBackups.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium text-gray-900">{item.archivo}</td>
                      <td className="p-3 font-semibold text-[#00324D]">{item.tipo}</td>
                      <td className="p-3 text-gray-600">{item.fecha}</td>
                      <td className="p-3">
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                          {item.estado}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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