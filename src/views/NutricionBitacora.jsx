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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Lógica para guardar la información
    alert("¡Registro de consumo y bitácora guardado con éxito!");
    
    // Limpiar el formulario
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

        <div className="nutricion-form-group">
          <label>Bitácora de Novedades y Comportamiento en Pesebrera</label>
          <textarea 
            value={nutricionData.novedadCampo}
            onChange={(e) => setNutricionData({...nutricionData, novedadCampo: e.target.value})}
            placeholder="Describa el consumo total, rechazo parcial de alimento o novedades operativas..."
          ></textarea>
        </div>

        <div className="btn-nutricion-submit-container">
          <button type="submit" className="btn-nutricion-submit">
            Registrar Consumo y Actualizar Bitácora
          </button>
        </div>
      </form>
    </div>
  );
}