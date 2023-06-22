import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from "./Login";
import Dashboard from "./Dashboard";
import NavBarTop from './components/Navbar';
// import Admindashboard from './Admindashboard';
function App() {

  return (
    <div className='App'>
    <Router>
    <Routes>
    <Route path="/" element={<NavBarTop />} />

     <Route path="/" element={<LoginPage />} />
    <Route path="/dashboard" element={<Dashboard />} />
    {/* <Route path="/admindashboard" element={<Admindashboard />} />  */}
    </Routes>
    </Router>
    </div>
    );
}

export default App;
