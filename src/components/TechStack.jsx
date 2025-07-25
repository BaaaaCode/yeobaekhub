import React from 'react';
import './/TechStack.css';

// Assuming you have icons for Python, Gemini, and Firebase in your assets folder
// import pythonIcon from '../assets/python-icon.png';
// import geminiIcon from '../assets/gemini-icon.png';
// import firebaseIcon from '../assets/firebase-icon.png';

function TechStack() {
  const techItems = [
    { name: 'Python', icon: '../assets/python-icon.png' }, // Replace with actual path
    { name: 'Gemini', icon: '../assets/gemini-icon.png' }, // Replace with actual path
    { name: 'Firebase', icon: '../assets/firebase-icon.png' }, // Replace with actual path
  ];

  return (
    <section className="TechStack">
      <div className="container">
        <h3>Tech Stack</h3>
        <div className="tech-icons">
          {techItems.map((tech, index) => (
            <div key={index} className="tech-item">
              {/* <img src={tech.icon} alt={tech.name} /> */}
              <div className="tech-icon-placeholder"></div> {/* Placeholder for icons */}
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
