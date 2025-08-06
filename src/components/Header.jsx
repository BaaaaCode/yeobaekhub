import React from 'react';
// import { NavLink, Link } from 'react-router-dom'; // Not needed for this simple version
// import './Header.css'; // Not needed for inline styles

function Header() {
  return (
    <header style={{ backgroundColor: '#f0f0f0', padding: '10px', textAlign: 'center' }}>
      <h1 style={{ margin: 0, fontSize: '24px', color: '#333' }}>Yeobaek HUB</h1>
    </header>
  );
}

export default Header;