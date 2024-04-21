import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../components/Navbar.css'; // Importamos el archivo de estilos CSS

const API = "http://localhost:5000/be/horas/"

const Navbar = () => {
  const token = localStorage.getItem('token');
  const sesion = token ? true : false; // Verificar si existe el token

  return (
    <nav className="navbar">
      <ul>
        {sesion ? (
          <li>
            <Link to="/logout">
              <button type="button">Cerrar Sesión</button>
            </Link>
            <Link to="/">
              <button type="button">Inicio</button>
            </Link>
          </li>
        ) : (
          <li>
            <Link to="/login">
              <button type="button">Iniciar Sesión</button>
            </Link>
            <Link to="/">
              <button type="button">Inicio</button>
            </Link>
          </li>
        )}
        {/* Agrega más elementos de la barra de navegación con botones y enlaces según sea necesario */}
      </ul>
    </nav>
  );
};

const CreateUserForm = () => {
  const [formData, setFormData] = useState({
    rut: '',
    telefono: '',
    fecha: '',
    hora: '',
    correo: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/Routes/paciente', formData);
      alert('Usuario creado exitosamente');
      setFormData({  rut: '',telefono: '',fecha: '',hora: '',correo: '',});
    } catch (error) {
      console.error('Error al crear usuario:', error);
    }
  };

  return (
    <div>
      <h2>Crear Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={formData.correo} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="rut">RUT:</label>
          <input type="text" id="rut" name="rut" value={formData.rut} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="telefono">Telefono:</label>
          <input type="text" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="fecha">Fecha:</label>
          <input type="text" id="fecha" name="fecha" value={formData.fecha} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="hora">Hora:</label>
          <input type="text" id="hora" name="hora" value={formData.hora} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="correo">Correo:</label>
          <input type="text" id="correo" name="correo" value={formData.correo} onChange={handleChange} />
        </div>
        <button type="submit">Crear Usuario</button>
      </form>
    </div>
  );
};

export default CreateUserForm;