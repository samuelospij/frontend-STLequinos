import React, { useState } from 'react';
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
      <div className="admin-header">
        <h2>Panel Administrativo, Control de Roles y Respaldos</h2>
        <p>Gestión centralizada de seguridad de la información, permisos institucionales y extracción de copias de seguridad de la unidad equina.</p>
      </div>

      <div className="admin-card">
        <label>
          Simulación de Control de Acceso Basado en Roles (RBAC)
        </label>
        <select 
          className="admin-select"
          value={rolActual}
          onChange={(e) => setRolActual(e.target.value)}
        >
          <option value="Administrador">Administrador (Acceso Total a Reportes y Backups)</option>
          <option value="Instructor">Instructor (Gestión Zootécnica y Sanitaria)</option>
          <option value="Aprendiz">Aprendiz (Consulta y Registro Operativo)</option>
        </select>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', fontSize: '0.75rem', color: '#6B7280', marginTop: '0.75rem' }}>
          <span>Nivel de permisos actual: <strong style={{ color: '#39A900' }}>{rolActual}</strong></span>
          <span style={{ fontStyle: 'italic' }}>Modifique el selector para probar la restricción de vistas.</span>
        </div>
      </div>

      {rolActual === 'Administrador' ? (
        <div>
          <div className="admin-backup-box">
            <h3>Centro de Respaldos y Exportación de Base de Datos</h3>
            <p>
              Herramienta exclusiva para administradores que permite extraer la información zootécnica, clínica e histórica del sistema en formatos obligatorios <span style={{ fontWeight: 600 }}>.SQL</span> y <span style={{ fontWeight: 600 }}>.CSV</span>.
            </p>
            
            <div className="admin-grid-2">
              <div className="admin-action-card">
                <div>
                  <h4>Respaldo Completo de Base de Datos (.SQL)</h4>
                  <p>Incluye esquemas, tablas relacionales, registros e integridad referencial.</p>
                </div>
                <button 
                  onClick={() => handleExport('SQL')}
                  className="btn-admin-sql"
                >
                  Generar y Descargar .SQL
                </button>
              </div>

              <div className="admin-action-card">
                <div>
                  <h4>Reportes Zootécnicos e Historiales (.CSV)</h4>
                  <p>Exportación tabular de consumo de concentrado, sanidad y reproducción.</p>
                </div>
                <button 
                  onClick={() => handleExport('CSV')}
                  className="btn-admin-csv"
                >
                  Generar y Descargar .CSV
                </button>
              </div>
            </div>
          </div>

          <div className="admin-card">
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#00324D', marginBottom: '1rem', textAlign: 'center' }}>
              Historial de Copias de Seguridad Recientes
            </h3>
            <div className="tabla-admin-wrapper">
              <table className="tabla-admin">
                <thead>
                  <tr>
                    <th>Nombre del Archivo</th>
                    <th>Formato</th>
                    <th>Fecha y Hora</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {historialBackups.map((item) => (
                    <tr key={item.id}>
                      <td style={{ fontWeight: 500 }}>{item.archivo}</td>
                      <td style={{ fontWeight: 700, color: '#00324D' }}>{item.tipo}</td>
                      <td style={{ color: '#4B5563' }}>{item.fecha}</td>
                      <td>
                        <span className="badge-completado">
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
        <div className="admin-restriction-box">
          <h4>
            <span>⚠️</span>
            <span>Aviso de Restricción de Acceso</span>
          </h4>
          <p>
            Las opciones de respaldo, exportación masiva de bases de datos y administración general están restringidas exclusivamente al rol de <strong>Administrador</strong>. Como <strong>{rolActual}</strong>, cuentas con permisos limitados a las funciones operativas y de consulta zootécnica correspondientes.
          </p>
        </div>
      )}
    </div>
  );
}