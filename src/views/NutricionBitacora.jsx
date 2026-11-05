import React, { useState } from 'react';
import '../index.css';

export default function NutricionBitacora() {
  const [nutricionData, setNutricionData] = useState({
    equinoId: '',
    tipoConcentrado: 'Mantenimiento',
    kilosRacion: '',
    novedadCampo: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Guardando consumo y bitácora de nutrición:", nutricionData);
    alert("Registro de nutrición y bitácora guardado con éxito.");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-[#F8F9FA] rounded-lg shadow-md mt-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-[#2C5E3E] mb-4">
        Nutrición y Bitácora Operativa de Campo (RFI04)
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Ejemplar / Número de Pesebrera</label>
          <input 
            type="text" 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#39A900] focus:border-[#39A900]"
            value={nutricionData.equinoId}
            onChange={(e) => setNutricionData({...nutricionData, equinoId: e.target.value})}
            placeholder="Ej. Rayo / Pesebrera 03"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Tipo de Concentrado / Suplemento</label>
            <select 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#39A900] focus:border-[#39A900]"
              value={nutricionData.tipoConcentrado}
              onChange={(e) => setNutricionData({...nutricionData, tipoConcentrado: e.target.value})}
            >
              <option value="Mantenimiento">Concentrado Mantenimiento</option>
              <option value="Cría y Reproducción">Cría y Reproducción</option>
              <option value="Alto Rendimiento">Alto Rendimiento / Trabajo</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Ración Diaria (Kilogramos)</label>
            <input 
              type="number" 
              step="0.1"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#39A900] focus:border-[#39A900]"
              value={nutricionData.kilosRacion}
              onChange={(e) => setNutricionData({...nutricionData, kilosRacion: e.target.value})}
              placeholder="Ej. 4.5"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Bitácora de Novedades y Tareas Diarias</label>
          <textarea 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#39A900] focus:border-[#39A900]"
            rows="3"
            value={nutricionData.novedadCampo}
            onChange={(e) => setNutricionData({...nutricionData, novedadCampo: e.target.value})}
            placeholder="Describa el comportamiento en pesebrera, consumo total o novedades operativas..."
          ></textarea>
        </div>

        <button 
          type="submit"
          className="w-full bg-[#39A900] text-white p-2 rounded-md hover:bg-[#2C5E3E] transition font-semibold"
        >
          Registrar Consumo y Novedad
        </button>
      </form>
    </div>
  );
}