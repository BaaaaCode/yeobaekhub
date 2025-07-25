import React from 'react';
import { Link } from 'react-router-dom';
import './/Header.css';

function Header() {
  return (
    <header className="Header">
      <div className="container">
        <h1>Yeobaek HUB</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/community">Community</Link></li>
            <li><Link to="/lab-info">Lab Info</Link></li>
            <li><Link to="/get-started">Get Started</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
