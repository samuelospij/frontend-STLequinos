import React, { useState } from 'react';
import './Bitacora.css';

export default function Bitacora() {
  const [registros, setRegistros] = useState([
    { id: 1, fecha: '2026-11-06', turno: 'Mañana (06:00 - 14:00)', responsable: 'Tatiana Castaño', novedad: 'Revisión general de pesebreras y suministro de agua fresca.', estado: 'Normal' },
    { id: 2, fecha: '2026-11-05', turno: 'Tarde (14:00 - 22:00)', responsable: 'Carlos Pérez', novedad: 'Observación de comportamiento en el lote de potrero principal.', estado: 'Atención' },
    { id: 3, fecha: '2026-11-05', turno: 'Mañana (06:00 - 14:00)', responsable: 'Tatiana Castaño', novedad: 'Ingreso de nuevos insumos de pesebrera y mantenimiento de comederos.', estado: 'Normal' }
  ]);

  const [nuevaBitacora, setNuevaBitacora] = useState({
    fecha: '',
    turno: 'Mañana (06:00 - 14:00)',
    responsable: '',
    novedad: '',
    estado: 'Normal'
  });

  const handleChange = (e) => {
    setNuevaBitacora({ ...nuevaBitacora, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nuevaBitacora.fecha || !nuevaBitacora.responsable || !nuevaBitacora.novedad) {
      alert('Por favor completa los campos obligatorios de la bitácora.');
      return;
    }

    setRegistros([
      { ...nuevaBitacora, id: Date.now() },
      ...registros
    ]);

    setNuevaBitacora({
      fecha: '',
      turno: 'Mañana (06:00 - 14:00)',
      responsable: '',
      novedad: '',
      estado: 'Normal'
    });
  };

  return (
    <div className="bitacora-container">
      <div className="bitacora-header">
        <div>
          <h2>Bitácora de Novedades Diarias</h2>
          <p className="bitacora-subtitle">Registro de eventos, turnos y observaciones operativas de la pesebrera SENA La Salada.</p>
        </div>
      </div>

      <div className="form-card">
        <h3>Registrar Nueva Novedad en Bitácora</h3>
        <form onSubmit={handleSubmit} className="bitacora-form">
          <div className="form-group">
            <label>Fecha del Turno</label>
            <input 
              type="date" 
              name="fecha" 
              value={nuevaBitacora.fecha} 
              onChange={handleChange} 
            />
          </div>

          <div className="form-group">
            <label>Turno Operativo</label>
            <select name="turno" value={nuevaBitacora.turno} onChange={handleChange}>
              <option value="Mañana (06:00 - 14:00)">Mañana (06:00 - 14:00)</option>
              <option value="Tarde (14:00 - 22:00)">Tarde (14:00 - 22:00)</option>
              <option value="Noche (22:00 - 06:00)">Noche (22:00 - 06:00)</option>
            </select>
          </div>

          <div className="form-group">
            <label>Responsable a Cargo</label>
            <input 
              type="text" 
              name="responsable" 
              placeholder="Ej. Tatiana Castaño" 
              value={nuevaBitacora.responsable} 
              onChange={handleChange} 
            />
          </div>

          <div className="form-group full-width">
            <label>Descripción de la Novedad / Evento</label>
            <input 
              type="text" 
              name="novedad" 
              placeholder="Ej. Novedad reportada en área de pesebreras..." 
              value={nuevaBitacora.novedad} 
              onChange={handleChange} 
            />
          </div>

          <div className="form-group">
            <label>Estado de la Novedad</label>
            <select name="estado" value={nuevaBitacora.estado} onChange={handleChange}>
              <option value="Normal">Normal</option>
              <option value="Atención">Requiere Atención</option>
              <option value="Urgente">Urgente</option>
            </select>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-guardar">Guardar Registro</button>
          </div>
        </form>
      </div>

      <div className="table-card">
        <h3>Historial de Registros y Novedades</h3>
        <div className="table-responsive">
          <table className="bitacora-table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Turno</th>
                <th>Responsable</th>
                <th>Novedad Registrada</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {registros.map((reg) => (
                <tr key={reg.id}>
                  <td className="col-fecha">{reg.fecha}</td>
                  <td>{reg.turno}</td>
                  <td className="col-responsable">{reg.responsable}</td>
                  <td title={reg.novedad}>{reg.novedad}</td>
                  <td>
                    <span className={`badge-estado ${reg.estado.toLowerCase().replace(' ', '-')}`}>
                      {reg.estado}
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