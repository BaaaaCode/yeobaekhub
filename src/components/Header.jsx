import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/">
          <img src="/vite.svg" alt="Yeobaek HUB Logo" className="header-logo" />
          <h1 className="full-title">Yeobaek HUB</h1> {/* Full title */}
          <h1 className="short-title">HUB</h1> {/* Shorter title */}
        </Link>
      </div>
      <nav className="header-right">
        <NavLink to="/" exact activeClassName="active">Home</NavLink>
        <NavLink to="/community" activeClassName="active">Community</NavLink>
        <NavLink to="/labinfo" activeClassName="active">Lab Info</NavLink>
        <NavLink to="/getstarted" activeClassName="active">Get Started</NavLink>
      </nav>
    </header>
  );
}

export default Header;