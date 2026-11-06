import React, { useState } from 'react';
import './NutricionBitacora.css';

export default function NutricionBitacora() {
  const [nutricionData, setNutricionData] = useState({
    equinoId: '',
    tipoConcentrado: 'Concentrado Mantenimiento',
    kilosRacion: '',
    frecuencia: '2 Veces al Día (Mañana y Tarde)',
    stockActual: '',
    novedadCampo: ''
  });

  const [registros, setRegistros] = useState([
    { 
      id: 1, 
      equino: 'Rayo / Pesebrera 01', 
      concentrado: 'Alto Rendimiento / Trabajo', 
      kilos: '5.0 kg', 
      frecuencia: '2 Veces al Día', 
      stock: '40 kg', 
      novedad: 'Consumo total sin novedad en pesebrera.' 
    },
    { 
      id: 2, 
      equino: 'Lucero / Pesebrera 03', 
      concentrado: 'Cría y Reproducción', 
      kilos: '4.5 kg', 
      frecuencia: '3 Veces al Día (Fraccionada)', 
      stock: '25 kg', 
      novedad: 'Se ajusta suplemento vitamínico por gestación.' 
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const nuevoRegistro = {
      id: Date.now(),
      equino: nutricionData.equinoId,
      concentrado: nutricionData.tipoConcentrado,
      kilos: `${nutricionData.kilosRacion} kg`,
      frecuencia: nutricionData.frecuencia,
      stock: nutricionData.stockActual ? `${nutricionData.stockActual} kg` : 'N/A',
      novedad: nutricionData.novedadCampo || 'Sin novedades registradas.'
    };

    setRegistros([nuevoRegistro, ...registros]);
    alert("¡Registro de nutrición y bitácora guardado con éxito (RFI04)!");
    
    setNutricionData({
      equinoId: '',
      tipoConcentrado: 'Concentrado Mantenimiento',
      kilosRacion: '',
      frecuencia: '2 Veces al Día (Mañana y Tarde)',
      stockActual: '',
      novedadCampo: ''
    });
  };

  return (
    <div className="nutricion-container">
      {/* Encabezado del Módulo */}
      <div className="nutricion-header">
        <h2>Nutrición y Bitácora Operativa de Campo (RFI04)</h2>
        <p>Control estricto de raciones alimenticias, consumo diario por ejemplar, frecuencia e inventario de insumos productivos en la unidad.</p>
      </div>
      
      {/* Formulario de Registro */}
      <form onSubmit={handleSubmit} className="nutricion-form">
        <h3>Registrar Consumo y Dieta Diaria</h3>
        
        <div className="nutricion-form-grid-2">
          <div className="nutricion-form-group">
            <label>Ejemplar / Número de Pesebrera</label>
            <input 
              type="text" 
              value={nutricionData.equinoId}
              onChange={(e) => setNutricionData({...nutricionData, equinoId: e.target.value})}
              placeholder="Ej. Rayo / Pesebrera 03"
              required
            />
          </div>

          <div className="nutricion-form-group">
            <label>Tipo de Concentrado / Suplemento</label>
            <select 
              value={nutricionData.tipoConcentrado}
              onChange={(e) => setNutricionData({...nutricionData, tipoConcentrado: e.target.value})}
            >
              <option value="Concentrado Mantenimiento">Concentrado Mantenimiento</option>
              <option value="Cría y Reproducción">Cría y Reproducción</option>
              <option value="Alto Rendimiento / Trabajo">Alto Rendimiento / Trabajo</option>
              <option value="Suplemento Mineral / Vitaminas">Suplemento Mineral / Vitaminas</option>
            </select>
          </div>
        </div>

        <div className="nutricion-form-grid-3">
          <div className="nutricion-form-group">
            <label>Ración Diaria (kg)</label>
            <input 
              type="number" 
              step="0.1"
              value={nutricionData.kilosRacion}
              onChange={(e) => setNutricionData({...nutricionData, kilosRacion: e.target.value})}
              placeholder="Ej. 4.5"
              required
            />
          </div>

          <div className="nutricion-form-group">
            <label>Frecuencia de Alimentación</label>
            <select 
              value={nutricionData.frecuencia}
              onChange={(e) => setNutricionData({...nutricionData, frecuencia: e.target.value})}
            >
              <option value="1 Vez al Día">1 Vez al Día</option>
              <option value="2 Veces al Día (Mañana y Tarde)">2 Veces al Día (Mañana y Tarde)</option>
              <option value="3 Veces al Día (Fraccionada)">3 Veces al Día (Fraccionada)</option>
            </select>
          </div>

          <div className="nutricion-form-group">
            <label>Stock en Bodega (kg)</label>
            <input 
              type="number" 
              step="1"
              value={nutricionData.stockActual}
              onChange={(e) => setNutricionData({...nutricionData, stockActual: e.target.value})}
              placeholder="Ej. 50"
            />
          </div>
        </div>

        <div className="nutricion-form-group" style={{ marginBottom: '1.25rem' }}>
          <label>Bitácora de Novedades y Comportamiento en Pesebrera</label>
          <textarea 
            rows="2"
            value={nutricionData.novedadCampo}
            onChange={(e) => setNutricionData({...nutricionData, novedadCampo: e.target.value})}
            placeholder="Describa el consumo total, rechazo parcial de alimento o novedades operativas..."
          ></textarea>
        </div>

        <button type="submit" className="btn-nutricion-submit">
          Registrar Consumo y Actualizar Bitácora
        </button>
      </form>

      {/* Historial de Registros */}
      <div className="tabla-nutricion-container">
        <h3>Historial de Consumo y Bitácora de Campo</h3>
        <div className="tabla-nutricion-wrapper">
          <table className="tabla-nutricion">
            <thead>
              <tr>
                <th>Ejemplar / Pesebrera</th>
                <th>Concentrado</th>
                <th>Ración</th>
                <th>Frecuencia</th>
                <th>Stock</th>
                <th>Novedad de Campo</th>
              </tr>
            </thead>
            <tbody>
              {registros.map((item) => (
                <tr key={item.id}>
                  <td style={{ fontWeight: 500 }}>{item.equino}</td>
                  <td style={{ color: '#00324D' }}>{item.concentrado}</td>
                  <td style={{ fontWeight: 700, color: '#39A900' }}>{item.kilos}</td>
                  <td style={{ color: '#4B5563', fontSize: '0.8rem' }}>{item.frecuencia}</td>
                  <td style={{ fontWeight: 600 }}>{item.stock}</td>
                  <td style={{ fontStyle: 'italic', fontSize: '0.8rem' }}>{item.novedad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}