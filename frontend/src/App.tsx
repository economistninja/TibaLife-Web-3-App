import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import PatientDashboard from './pages/PatientDashboard';
import DoctorDashboard from './pages/DoctorDashboard';
import AMRAuditDashboard from './pages/AMRAuditDashboard';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Ethics from './pages/Ethics';
import Disclaimer from './pages/Disclaimer';
import Careers from './pages/Careers';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/ethics" element={<Ethics />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/audit" element={<AMRAuditDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;