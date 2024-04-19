import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Navbar.css'; // Importamos el archivo de estilos CSS

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

const Horas = () => {
    const token = localStorage.getItem('token');
    if (!token) {
        throw new Error('Token no encontrada');
      }  
    return (
      <body>
      <div>
      <Navbar />
      <div class="container">
        <li>
          <Link to="/editprofile">
            <button type="button">Editar o eliminar pacientes</button>
          </Link>
        </li>
        <li>
          <div></div>
          <Link to="/addprofile">
            <button type="button">Añadir nuevo paciente</button>
          </Link>
        </li>
      </div>
      </div>
      </body>
      
    );
  };

  export default Horas;