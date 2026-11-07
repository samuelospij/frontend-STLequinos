import React, { useState } from 'react';
import './Sanidad.css';

export default function Sanidad() {
  const [tratamientos, setTratamientos] = useState([
    { id: 1, equino: 'Relámpago', tipo: 'Vacunación Encefalitis', fecha: '2026-10-15', veterinario: 'Dr. Carlos Pérez', estado: 'Completado' },
    { id: 2, equino: 'Gitana', tipo: 'Desparasitación General', fecha: '2026-10-20', veterinario: 'Dra. Ana Gómez', estado: 'Completado' },
    { id: 3, equino: 'Lucero', tipo: 'Revisión Dental', fecha: '2026-11-10', veterinario: 'Dr. Carlos Pérez', estado: 'Programado' },
    { id: 4, equino: 'Canelo', tipo: 'Tratamiento Vitamínico', fecha: '2026-11-12', veterinario: 'Dra. Ana Gómez', estado: 'Pendiente' }
  ]);

  const [nuevoTratamiento, setNuevoTratamiento] = useState({
    equino: '',
    tipo: '',
    fecha: '',
    veterinario: '',
    estado: 'Programado'
  });

  const handleChange = (e) => {
    setNuevoTratamiento({ ...nuevoTratamiento, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nuevoTratamiento.equino || !nuevoTratamiento.tipo || !nuevoTratamiento.fecha) {
      alert('Por favor completa los campos obligatorios del registro sanitario.');
      return;
    }

    setTratamientos([
      ...tratamientos,
      { ...nuevoTratamiento, id: Date.now() }
    ]);

    setNuevoTratamiento({
      equino: '',
      tipo: '',
      fecha: '',
      veterinario: '',
      estado: 'Programado'
    });
  };

  return (
    <div className="sanidad-container">
      <div className="sanidad-header">
        <div>
          <h2>Plan Sanitario y Control Médico</h2>
          <p className="sanidad-subtitle">Seguimiento clínico, vacunaciones y tratamientos de la caballada SENA La Salada.</p>
        </div>
      </div>

      <div className="form-card">
        <h3>Programar o Registrar Control Sanitario</h3>
        <form onSubmit={handleSubmit} className="sanidad-form">
          <div className="form-group">
            <label>Nombre del Equino</label>
            <input type="text" name="equino" placeholder="Ej. Relámpago" value={nuevoTratamiento.equino} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Tipo de Procedimiento</label>
            <input type="text" name="tipo" placeholder="Ej. Vacunación Antirrábica" value={nuevoTratamiento.tipo} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Fecha Programada / Aplicada</label>
            <input type="date" name="fecha" value={nuevoTratamiento.fecha} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Responsable / Veterinario</label>
            <input type="text" name="veterinario" placeholder="Ej. Dr. Carlos Pérez" value={nuevoTratamiento.veterinario} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Estado</label>
            <select name="estado" value={nuevoTratamiento.estado} onChange={handleChange}>
              <option value="Programado">Programado</option>
              <option value="Pendiente">Pendiente</option>
              <option value="Completado">Completado</option>
            </select>
          </div>
          <div className="form-actions">
            <button type="submit" className="btn-guardar">Registrar Control</button>
          </div>
        </form>
      </div>

      <div className="table-card">
        <h3>Historial de Controles y Tratamientos Sanitarios</h3>
        <div className="table-responsive">
          <table className="sanidad-table">
            <thead>
              <tr>
                <th>Ejemplar</th>
                <th>Procedimiento / Tratamiento</th>
                <th>Fecha</th>
                <th>Veterinario Responsable</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {tratamientos.map((t) => (
                <tr key={t.id}>
                  <td className="col-equino">{t.equino}</td>
                  <td>{t.tipo}</td>
                  <td className="col-fecha">{t.fecha}</td>
                  <td>{t.veterinario}</td>
                  <td>
                    <span className={`badge-estado ${t.estado.toLowerCase()}`}>
                      {t.estado}
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