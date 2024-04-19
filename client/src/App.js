// src/App.js
import React, { useState } from 'react';
import  {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Horas from './pages/horasxdia.js'
import Pacientes from './pages/pacienteprofile.js'
import EditProfile from './pages/editprofile';
import AddProfile from './pages/addprofile';
import Home from './pages/home';
import Login from './pages/login';
import Logout from './pages/logout';
import ReservaHoras from './pages/reservahoras.js';


function App() {
  const [isLogin, setIsLogin] = useState(false);

  const goToLogin = () => {
    setIsLogin(true);
  };
  return (
    <authProvider>
      <BrowserRouter>
        <Routes>
          <Route path= '/' element={<Home></Home>}></Route>
          <Route path= '/login' element={<Login></Login>}></Route>
          <Route path= '/logout' element={<Logout></Logout>}></Route>
          <Route path= '/reservaHoras' element={<ReservaHoras></ReservaHoras>}></Route>
          <Route path= '/horasxdia' element={<Horas></Horas>}></Route>
          <Route path= '/pacienteprofile' element={<Pacientes></Pacientes>}></Route>
          <Route path= '/editprofile' element={<EditProfile></EditProfile>}></Route>
          <Route path= '/addprofile' element={<AddProfile></AddProfile>}></Route>
        </Routes>
      </BrowserRouter>
    </authProvider>
  );
}

export default App;
