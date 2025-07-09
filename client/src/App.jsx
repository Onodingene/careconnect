import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Register from './Pages/DRegister';
import Login from './Pages/DLogin';
import Home from './Pages/Homes';
import Navbar from './Components/Navbar';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <Router>
      <div>
       <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/signup" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
       </Routes>
      </div>
    </Router>
  )
}

export default App;
