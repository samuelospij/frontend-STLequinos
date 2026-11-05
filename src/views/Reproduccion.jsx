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
    <div className="p-6 max-w-5xl mx-auto bg-[#F8F9FA] rounded-lg shadow-md mt-6 border border-gray-200 space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-[#2C5E3E]">
          Control Reproductivo y Trazabilidad de Gestación (RFI03)
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Gestión avanzada de ciclos, palpaciones, servicios de monta y cálculo automático de períodos de gestación equina.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
        <h3 className="text-lg font-semibold text-[#00324D] border-b pb-2">Registrar Nuevo Evento Reproductivo</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Microchip o Nombre del Ejemplar (Yegua)</label>
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
              <option value="Palpación">Palpación / Diagnóstico</option>
              <option value="Celo">Control de Celo</option>
              <option value="Monta/IA">Monta / Inseminación Artificial</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

          <div>
            <label className="block text-sm font-medium text-gray-700">Estado de Preñez Actual</label>
            <select 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#39A900] focus:border-[#39A900]"
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
          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre o Código del Semental (Padrillo)</label>
            <input 
              type="text" 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#39A900] focus:border-[#39A900]"
              value={formData.semental}
              onChange={(e) => setFormData({...formData, semental: e.target.value})}
              placeholder="Ej. Príncipe Negro / Chip-S09"
            />
          </div>
        )}

        {formData.fechaServicio && formData.tipoEvento === 'Monta/IA' && (
          <div className="p-3 bg-green-50 border border-green-200 rounded-md text-[#2C5E3E]">
            <strong>Fecha Probable de Parto (+340 días): </strong> 
            {calcularFechaParto(formData.fechaServicio)}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700">Observaciones Clínicas y Trazabilidad</label>
          <textarea 
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-[#39A900] focus:border-[#39A900]"
            rows="3"
            value={formData.observaciones}
            onChange={(e) => setFormData({...formData, observaciones: e.target.value})}
            placeholder="Detalles ecográficos, comportamiento o historial de parentesco..."
          ></textarea>
        </div>

        <button 
          type="submit"
          className="w-full bg-[#39A900] text-white p-2.5 rounded-md hover:bg-[#2C5E3E] transition font-semibold shadow"
        >
          Guardar Registro Reproductivo
        </button>
      </form>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-[#00324D] mb-4">Historial Reciente de Eventos</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-700 border-b">
                <th className="p-3">Equino</th>
                <th className="p-3">Evento</th>
                <th className="p-3">Fecha</th>
                <th className="p-3">Parto Probable</th>
                <th className="p-3">Estado</th>
              </tr>
            </thead>
            <tbody>
              {registros.map((reg) => (
                <tr key={reg.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium text-gray-900">{reg.equino}</td>
                  <td className="p-3">{reg.evento}</td>
                  <td className="p-3">{reg.fecha}</td>
                  <td className="p-3 text-[#2C5E3E] font-semibold">{reg.partoProbable}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      reg.estado === 'Gestante' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
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