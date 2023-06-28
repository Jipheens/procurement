import React from 'react';
import './App.css';
import LoginPage from "./components/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterPage from './components/register';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



// import Admindashboard from './Admindashboard';
function App() {

  return (
  
<div className='App'>
    <Router>
    <Routes>
     <Route path="/" element={<LoginPage />} />  
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/register" element={<RegisterPage  />} />

    </Routes>
    </Router>
    </div>





    );
}

export default App;
