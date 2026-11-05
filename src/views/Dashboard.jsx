import React from 'react';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2>Panel Principal - Unidad de Equinos</h2>
      <p className="dashboard-subtitle">Bienvenido al sistema de gestión zootécnica STL Equinos (Sede La Salada).</p>

      {/* Requisito RFCS01: Alerta Sanitaria de Urgencia en Dorado Avena */}
      <div className="alerta-sanitaria-card">
        <div className="alerta-icon">⚠️</div>
        <div className="alerta-content">
          <h4>Alerta Sanitaria de Urgencia (RFCS01)</h4>
          <p>Hay planes sanitarios (vacunación anual) próximos a vencer en menos de 5 días hábiles.</p>
        </div>
        <button className="btn-atender">Marcar como Ejecutada</button>
      </div>

      {/* Tarjetas de Resumen General */}
      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Total Ejemplares</h3>
          <p className="metric-number">24</p>
          <span className="metric-tag active">Activos en Pesebrera</span>
        </div>
        <div className="metric-card">
          <h3>Controles Sanitarios</h3>
          <p className="metric-number">5</p>
          <span className="metric-tag warning">Pendientes de revisión</span>
        </div>
        <div className="metric-card">
          <h3>Raciones de Nutrición</h3>
          <p className="metric-number">120 kg</p>
          <span className="metric-tag info">Consumo diario estimado</span>
        </div>
      </div>
    </div>
  );
}