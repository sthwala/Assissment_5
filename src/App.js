import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Questionnaire from './components/Questionnaire';
import Dashboard from './components/Dashboard';


const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            padding: '10px',
            width: '20%',
            background: '#f0f0f0',
          }}
        >
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/questionnaire">Questionnaire</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>

        <div style={{ flex: 1, padding: '10px' }}>
          <Routes>
          <Route path="/" element={<Home/>} />
      <Route path="/questionnaire" element={<Questionnaire/>} />
     <Route path="/dashboard" element={<Dashboard/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
