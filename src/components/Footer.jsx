import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bottom-right"> {/* Keep only this section */}
        <div className="social-links"> {/* Changed class name */}
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a> {/* Instagram Link */}
          <a href="https://velog.io/" target="_blank" rel="noopener noreferrer">Velog</a> {/* Velog Link */}
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a> {/* GitHub Link */}
        </div>
        <button className="top-button">TOP</button>
      </div>
    </footer>
  );
}

export default Footer;