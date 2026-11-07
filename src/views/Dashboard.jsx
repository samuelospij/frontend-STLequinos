import React, { useState } from 'react';
import './Dashboard.css';

export default function Dashboard({ setVistaActual }) {
  const [metricas] = useState({
    totalEquinos: 24,
    activos: 21,
    tratamientosPendientes: 5,
    controlesAlDia: 19,
  });

  const [actividades] = useState([
    { id: 1, hora: '08:30 AM', evento: 'Registro de vacunación completado para el ejemplar', equino: 'Relámpago', estado: 'Completado' },
    { id: 2, hora: '09:15 AM', evento: 'Actualización de ficha zootécnica realizada en', equino: 'Gitana', estado: 'Al Día' },
    { id: 3, hora: '10:40 AM', evento: 'Programación de desparasitación agendada para', equino: 'Lucero', estado: 'Pendiente' },
    { id: 4, hora: '11:00 AM', evento: 'Verificación de condición física y pesaje de', equino: 'Canelo', estado: 'Al Día' },
  ]);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div>
          <h2>Panel de Control General</h2>
          <p className="dashboard-subtitle">
            Resumen del estado zootécnico y operativo de la caballada SENA Sede La Salada.
          </p>
        </div>
        <div className="dashboard-actions">
          <button className="btn-secundario" onClick={() => setVistaActual('sanidad')}>
            Ir a Salud
          </button>
          <button className="btn-primario" onClick={() => setVistaActual('ejemplares')}>
            Ir a Equinos
          </button>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-indicator verde-oscuro"></div>
          <div className="stat-info">
            <span className="stat-label">Total Ejemplares</span>
            <p className="stat-number">{metricas.totalEquinos}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-indicator verde"></div>
          <div className="stat-info">
            <span className="stat-label">Ejemplares Activos</span>
            <p className="stat-number">{metricas.activos}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-indicator naranja"></div>
          <div className="stat-info">
            <span className="stat-label">Tratamientos Pendientes</span>
            <p className="stat-number">{metricas.tratamientosPendientes}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-indicator gris"></div>
          <div className="stat-info">
            <span className="stat-label">Controles Sanitarios al Día</span>
            <p className="stat-number">{metricas.controlesAlDia}</p>
          </div>
        </div>
      </div>

      <div className="dashboard-card">
        <div className="card-header">
          <h3>Registro de Actividades Recientes</h3>
          <span className="badge-live">Actualizado hoy</span>
        </div>
        <div className="table-responsive">
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Hora</th>
                <th>Descripción del Evento</th>
                <th>Ejemplar</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {actividades.map((act) => (
                <tr key={act.id}>
                  <td className="col-hora">{act.hora}</td>
                  <td>{act.evento}</td>
                  <td className="col-equino">{act.equino}</td>
                  <td>
                    <span className={`badge-status ${act.estado.toLowerCase().replace(' ', '-')}`}>
                      {act.estado}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}