import React, { useState } from 'react';
import '../index.css';

export default function Reproduccion() {
  const [formData, setFormData] = useState({
    equinoId: '',
    tipoEvento: 'Palpación',
    fechaServicio: '',
    observaciones: ''
  });

  // Cálculo automático de la fecha probable de parto (gestación equina aprox. 340 días)
  const calcularFechaParto = (fecha) => {
    if (!fecha) return '';
    const d = new Date(fecha);
    d.setDate(d.getDate() + 340);
    return d.toISOString().split('T')[0];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registrando evento reproductivo:", formData);
    alert("Evento reproductivo registrado correctamente.");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-[#F8F9FA] rounded-lg shadow-md mt-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-[#2C5E3E] mb-4">
        Control Reproductivo y Trazabilidad de Gestación (RFI03)
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Microchip o Nombre del Equino</label>
          <input 
            type="text" 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#39A900] focus:border-[#39A900]"
            value={formData.equinoId}
            onChange={(e) => setFormData({...formData, equinoId: e.target.value})}
            placeholder="Ej. Yegua Lucero / Chip-004"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Tipo de Evento</label>
          <select 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#39A900] focus:border-[#39A900]"
            value={formData.tipoEvento}
            onChange={(e) => setFormData({...formData, tipoEvento: e.target.value})}
          >
            <option value="Palpación">Palpación</option>
            <option value="Celo">Control de Celo</option>
            <option value="Monta/IA">Monta / Inseminación Artificial</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Fecha del Servicio / Evento</label>
          <input 
            type="date" 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#39A900] focus:border-[#39A900]"
            value={formData.fechaServicio}
            onChange={(e) => setFormData({...formData, fechaServicio: e.target.value})}
            required
          />
        </div>

        {formData.fechaServicio && (
          <div className="p-3 bg-green-50 border border-green-200 rounded-md text-[#2C5E3E]">
            <strong>Fecha Probable de Parto (+340 días): </strong> 
            {calcularFechaParto(formData.fechaServicio)}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700">Observaciones Clínicas</label>
          <textarea 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#39A900] focus:border-[#39A900]"
            rows="3"
            value={formData.observaciones}
            onChange={(e) => setFormData({...formData, observaciones: e.target.value})}
            placeholder="Detalles del diagnóstico ecográfico o novedades del ciclo..."
          ></textarea>
        </div>

        <button 
          type="submit"
          className="w-full bg-[#39A900] text-white p-2 rounded-md hover:bg-[#2C5E3E] transition font-semibold"
        >
          Guardar Registro Reproductivo
        </button>
      </form>
    </div>
  );
}