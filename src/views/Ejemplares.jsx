import React, { useState } from 'react';
import './Ejemplares.css';

export default function Ejemplares() {
  const [equinos, setEquinos] = useState([
    { id: 1, nombre: 'Relámpago', raza: 'Paso Fino', edad: '6 años', genero: 'Macho', estado: 'Activo' },
    { id: 2, nombre: 'Gitana', raza: 'Trote y Galope', edad: '5 años', genero: 'Hembra', estado: 'Activo' },
    { id: 3, nombre: 'Lucero', raza: 'Moro', edad: '8 años', genero: 'Macho', estado: 'En Observación' },
    { id: 4, nombre: 'Canelo', raza: 'Cuarto de Milla', edad: '4 años', genero: 'Macho', estado: 'Activo' }
  ]);

  const [nuevoEquino, setNuevoEquino] = useState({
    nombre: '',
    raza: '',
    edad: '',
    genero: 'Macho',
    estado: 'Activo'
  });

  const handleChange = (e) => {
    setNuevoEquino({ ...nuevoEquino, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nuevoEquino.nombre || !nuevoEquino.raza || !nuevoEquino.edad) {
      alert('Por favor completa los campos obligatorios del ejemplar.');
      return;
    }

    setEquinos([
      ...equinos,
      { ...nuevoEquino, id: Date.now() }
    ]);

    setNuevoEquino({
      nombre: '',
      raza: '',
      edad: '',
      genero: 'Macho',
      estado: 'Activo'
    });
  };

  return (
    <div className="ejemplares-container">
      <div className="ejemplares-header">
        <div>
          <h2>Gestión de Ejemplares Equinos</h2>
          <p className="ejemplares-subtitle">Registro y control de fichas zootécnicas de la caballada SENA La Salada.</p>
        </div>
      </div>

      <div className="form-card">
        <h3>Registrar Nuevo Ejemplar</h3>
        <form onSubmit={handleSubmit} className="ejemplares-form">
          <div className="form-group">
            <label>Nombre del Equino</label>
            <input type="text" name="nombre" placeholder="Ej. Centauro" value={nuevoEquino.nombre} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Raza o Tipo</label>
            <input type="text" name="raza" placeholder="Ej. Paso Fino Colombiano" value={nuevoEquino.raza} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Edad</label>
            <input type="text" name="edad" placeholder="Ej. 5 años" value={nuevoEquino.edad} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Género</label>
            <select name="genero" value={nuevoEquino.genero} onChange={handleChange}>
              <option value="Macho">Macho</option>
              <option value="Hembra">Hembra</option>
            </select>
          </div>
          <div className="form-actions">
            <button type="submit" className="btn-guardar">Guardar Ejemplar</button>
          </div>
        </form>
      </div>

      <div className="table-card">
        <h3>Inventario de Ejemplares Registrados</h3>
        <div className="table-responsive">
          <table className="ejemplares-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Raza</th>
                <th>Edad</th>
                <th>Género</th>
                <th>Estado Zootécnico</th>
              </tr>
            </thead>
            <tbody>
              {equinos.map((eq) => (
                <tr key={eq.id}>
                  <td className="col-nombre">{eq.nombre}</td>
                  <td>{eq.raza}</td>
                  <td>{eq.edad}</td>
                  <td>{eq.genero}</td>
                  <td>
                    <span className={`badge-estado ${eq.estado.toLowerCase().replace(' ', '-')}`}>
                      {eq.estado}
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