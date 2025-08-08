import React from 'react';
import { Terminal, Database } from 'lucide-react';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-icon">
          <Terminal size={24} />
        </div>
        <div className="header-text">
          <h1 className="header-title">Task Management System</h1>
          <p className="header-subtitle">Operational Database Interface</p>
        </div>
        <div className="header-status">
          <Database size={16} />
          <span className="status-text">ONLINE</span>
        </div>
      </div>
      <div className="header-border"></div>
    </header>
  );
};

export default Header;