import React, { useState } from 'react';
import './Reproduccion.css';

export default function Reproduccion() {
  const [formData, setFormData] = useState({
    equinoId: '',
    tipoEvento: 'Palpación',
    fechaServicio: '',
    estadoPrenez: 'En Observación',
    semental: '',
    observaciones: ''
  });

  const [registros, setRegistros] = useState([
    { id: 1, equino: 'Yegua Lucero', evento: 'Monta/IA', fecha: '2025-10-15', partoProbable: '2026-09-20', estado: 'Gestante' },
    { id: 2, equino: 'Alazán Relámpago', evento: 'Palpación', fecha: '2026-01-10', partoProbable: 'N/A', estado: 'En Observación' }
  ]);

  // Algoritmo zootécnico: Cálculo de fecha probable de parto (+340 días)
  const calcularFechaParto = (fecha) => {
    if (!fecha) return '';
    const d = new Date(fecha);
    d.setDate(d.getDate() + 340);
    return d.toISOString().split('T')[0];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaFechaParto = calcularFechaParto(formData.fechaServicio);
    
    const nuevoRegistro = {
      id: Date.now(),
      equino: formData.equinoId,
      evento: formData.tipoEvento,
      fecha: formData.fechaServicio,
      partoProbable: formData.tipoEvento !== 'Palpación' ? nuevaFechaParto : 'N/A',
      estado: formData.estadoPrenez
    };

    setRegistros([nuevoRegistro, ...registros]);
    alert("¡Registro reproductivo guardado correctamente (RFI03)!");
    
    setFormData({
      equinoId: '',
      tipoEvento: 'Palpación',
      fechaServicio: '',
      estadoPrenez: 'En Observación',
      semental: '',
      observaciones: ''
    });
  };

  return (
    <div className="reproduccion-container">
      <div className="reproduccion-header">
        <h2>Control Reproductivo y Trazabilidad de Gestación (RFI03)</h2>
        <p>Gestión avanzada de ciclos, palpaciones, servicios de monta y cálculo automático de períodos de gestación equina[cite: 4, 7].</p>
      </div>
      
      <form onSubmit={handleSubmit} className="reproduccion-form">
        <h3>Registrar Nuevo Evento Reproductivo</h3>
        
        <div className="form-grid">
          <div className="form-group">
            <label>Microchip o Nombre del Equino (Yegua)</label>
            <input 
              type="text" 
              value={formData.equinoId}
              onChange={(e) => setFormData({...formData, equinoId: e.target.value})}
              placeholder="Ej. Yegua Lucero / Chip-004"
              required
            />
          </div>

          <div className="form-group">
            <label>Tipo de Evento</label>
            <select 
              value={formData.tipoEvento}
              onChange={(e) => setFormData({...formData, tipoEvento: e.target.value})}
            >
              <option value="Palpación">Palpación / Diagnóstico</option>
              <option value="Celo">Control de Celo</option>
              <option value="Monta/IA">Monta / Inseminación Artificial</option>
            </select>
          </div>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>Fecha del Servicio / Evento</label>
            <input 
              type="date" 
              value={formData.fechaServicio}
              onChange={(e) => setFormData({...formData, fechaServicio: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label>Estado de Preñez Actual</label>
            <select 
              value={formData.estadoPrenez}
              onChange={(e) => setFormData({...formData, estadoPrenez: e.target.value})}
            >
              <option value="En Observación">En Observación</option>
              <option value="Gestante">Gestante (Preñada)</option>
              <option value="Vacía">Vacía / Sin Éxito</option>
            </select>
          </div>
        </div>

        {formData.tipoEvento === 'Monta/IA' && (
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label>Nombre o Código del Semental (Padrillo)</label>
            <input 
              type="text" 
              value={formData.semental}
              onChange={(e) => setFormData({...formData, semental: e.target.value})}
              placeholder="Ej. Príncipe Negro / Chip-S09"
            />
          </div>
        )}

        {formData.fechaServicio && formData.tipoEvento === 'Monta/IA' && (
          <div className="alerta-parto">
            <strong>Fecha Probable de Parto (+340 días): </strong> 
            {calcularFechaParto(formData.fechaServicio)}
          </div>
        )}

        <div className="form-group" style={{ marginBottom: '1.25rem' }}>
          <label>Observaciones Clínicas y Trazabilidad</label>
          <textarea 
            rows="3"
            value={formData.observaciones}
            onChange={(e) => setFormData({...formData, observaciones: e.target.value})}
            placeholder="Detalles ecográficos, comportamiento o historial de parentesco..."
          ></textarea>
        </div>

        <button type="submit" className="btn-submit">
          Guardar Registro Reproductivo
        </button>
      </form>

      <div className="tabla-historial-container">
        <h3>Historial Reciente de Eventos</h3>
        <div className="tabla-wrapper">
          <table className="tabla-reproduccion">
            <thead>
              <tr>
                <th>Equino</th>
                <th>Evento</th>
                <th>Fecha</th>
                <th>Parto Probable</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {registros.map((reg) => (
                <tr key={reg.id}>
                  <td style={{ fontWeight: 500 }}>{reg.equino}</td>
                  <td>{reg.evento}</td>
                  <td>{reg.fecha}</td>
                  <td style={{ fontWeight: 600, color: '#2C5E3E' }}>{reg.partoProbable}</td>
                  <td>
                    <span className={`badge-estado ${
                      reg.estado === 'Gestante' ? 'badge-gestante' : 
                      reg.estado === 'En Observación' ? 'badge-observacion' : 'badge-vacia'
                    }`}>
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