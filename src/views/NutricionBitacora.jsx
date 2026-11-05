import React, { useState } from 'react';
import '../index.css';

export default function NutricionBitacora() {
  const [nutricionData, setNutricionData] = useState({
    equinoId: '',
    tipoConcentrdo: 'Concentrado Mantenimiento',
    kilosRacion: '',
    frecuencia: '2 Veces al Día (Mañana y Tarde)',
    novedadCampo: ''
  });

  const [registrosNutricion, setRegistrosNutricion] = useState([
    { id: 1, equino: 'Rayo / Pesebrera 01', concentrado: 'Alto Rendimiento / Trabajo', kilos: '5.0 kg', frecuencia: '2 Veces al Día', novedad: 'Consumo total sin novedad en pesebrera.' },
    { id: 2, equino: 'Lucero / Pesebrera 03', concentrado: 'Cría y Reproducción', kilos: '4.5 kg', frecuencia: '3 Veces al Día', novedad: 'Se ajusta suplemento vitamínico por gestación.' }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const nuevoRegistro = {
      id: Date.now(),
      equino: nutricionData.equinoId,
      concentrado: nutricionData.tipoConcentrado,
      kilos: `${nutricionData.kilosRacion} kg`,
      frecuencia: nutricionData.frecuencia,
      novedad: nutricionData.novedadCampo || 'Sin novedades registradas.'
    };

    setRegistrosNutricion([nuevoRegistro, ...registrosNutricion]);
    alert("¡Registro de nutrición y bitácora guardado y sincronizado con éxito (RFI04)!");
    
    setNutricionData({
      equinoId: '',
      tipoConcentrado: 'Concentrado Mantenimiento',
      kilosRacion: '',
      frecuencia: '2 Veces al Día (Mañana y Tarde)',
      novedadCampo: ''
    });
  };

  return (
    <div className="p-6 max-w-5xl mx-auto bg-[#F8F9FA] rounded-lg shadow-md mt-6 border border-gray-200 space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-[#2C5E3E]">
          Nutrición y Bitácora Operativa de Campo (RFI04)
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Control estricto de raciones alimenticias, consumo diario por ejemplar e inventario de insumos productivos en la unidad.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
        <h3 className="text-lg font-semibold text-[#00324D] border-b pb-2">Registrar Consumo y Dieta Diaria</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

          <div>
            <label className="block text-sm font-medium text-gray-700">Tipo de Concentrado / Suplemento</label>
            <select 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#39A900] focus:border-[#39A900]"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

          <div>
            <label className="block text-sm font-medium text-gray-700">Frecuencia de Alimentación</label>
            <select 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#39A900] focus:border-[#39A900]"
              value={nutricionData.frecuencia}
              onChange={(e) => setNutricionData({...nutricionData, frecuencia: e.target.value})}
            >
              <option value="1 Vez al Día">1 Vez al Día</option>
              <option value="2 Veces al Día (Mañana y Tarde)">2 Veces al Día (Mañana y Tarde)</option>
              <option value="3 Veces al Día (Fraccionada)">3 Veces al Día (Fraccionada)</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Bitácora de Novedades y Comportamiento en Pesebrera</label>
          <textarea 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#39A900] focus:border-[#39A900]"
            rows="3"
            value={nutricionData.novedadCampo}
            onChange={(e) => setNutricionData({...nutricionData, novedadCampo: e.target.value})}
            placeholder="Describa el consumo total, rechazo parcial de alimento, estado delatore o novedades operativas..."
          ></textarea>
        </div>

        <button 
          type="submit"
          className="w-full bg-[#39A900] text-white p-2.5 rounded-md hover:bg-[#2C5E3E] transition font-semibold shadow"
        >
          Registrar Consumo y Novedad
        </button>
      </form>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-[#00324D] mb-4">Historial de Consumo y Bitácora de Campo</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-700 border-b">
                <th className="p-3">Ejemplar / Pesebrera</th>
                <th className="p-3">Concentrado</th>
                <th className="p-3">Ración (kg)</th>
                <th className="p-3">Frecuencia</th>
                <th className="p-3">Novedad de Campo</th>
              </tr>
            </thead>
            <tbody>
              {registrosNutricion.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium text-gray-900">{item.equino}</td>
                  <td className="p-3 text-[#00324D]">{item.concentrado}</td>
                  <td className="p-3 font-bold text-[#39A900]">{item.kilos}</td>
                  <td className="p-3 text-gray-600">{item.frecuencia}</td>
                  <td className="p-3 text-gray-700 italic">{item.novedad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}