import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ setDarkMode }) {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/table">Table</Link>
        <Link to="/chart">Chart</Link>
        <Link to="/calendar">Calendar</Link>
        <Link to="/kanban">Kanban</Link>
      </nav>
      <button onClick={() => setDarkMode(prev => !prev)}>
        Toggle Theme
      </button>
    </div>
  );
}

export default Sidebar;
