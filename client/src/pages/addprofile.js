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

const initialState = {
  rut: '',
  telefono: '',
  fecha: '',
  hora: '',
  correo: '',
};

const CreateUserForm = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.post('/Routes/paciente', formData);
        console.log('API response:', response); // Log the entire response object
        if (response.data.success) { // Check for a success property in the response
            alert('Usuario creado exitosamente');
            setFormData({ ...initialState }); // Reset form data
        } else {
            console.error('API error:', response.data.error); // Log any specific error message
        }
    } catch (error) {
        console.error('Error al crear usuario:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div class="container">
      <h2>Crear Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
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
    </div>
  );
};

export default CreateUserForm;