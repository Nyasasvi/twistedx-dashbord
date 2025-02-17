import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ITTools from './pages/ITTools';
import Development from './pages/Development';
import Schedules from './pages/Schedules';
import TradingPartners from './pages/TradingPartners';
import Analytics from './pages/Analytics';
import Documentation from './pages/Documentation';

const App: React.FC = () => {
  return (
    <Router>
      <Dashboard>
        <Routes>
          <Route path="/" element={<ITTools />} />
          <Route path="/development" element={<Development />} />
          <Route path="/schedules" element={<Schedules />} />
          <Route path="/trading-partners" element={<TradingPartners />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/documentation" element={<Documentation/>} />
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </Dashboard>
    </Router>
  );
};

export default App;
