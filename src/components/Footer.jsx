import React from 'react';
import './/Footer.css';

function Footer() {
  return (
    <footer className="Footer">
      <div className="container">
        <p>&copy; 2023 Yeobaek HUB</p>
        <div className="social-links">
          <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Tistory</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
