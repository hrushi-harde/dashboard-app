import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Table from './components/Table';
import Chart from './components/Chart';
import CalendarView from './components/CalendarView';
import KanbanBoard from './components/KanbanBoard';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Router>
        <Sidebar setDarkMode={setDarkMode} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/table" element={<Table />} />
            <Route path="/chart" element={<Chart />} />
            <Route path="/calendar" element={<CalendarView />} />
            <Route path="/kanban" element={<KanbanBoard />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
