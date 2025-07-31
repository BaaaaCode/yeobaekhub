import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <div className="hero-section">
        <h1>AI-based Automation Assistant</h1>
        <button className="start-button">Start Assistant</button>
      </div>
      <div className="sections-container">
        <div className="section mcp-section">
          <h2>MCP</h2>
          <p>Modular Command Processing</p>
          <p>Prompt Engineering</p>
          <p>Intent Parsing</p>
          <p>LLM API Integration</p>
        </div>
        <div className="section project-goals-section">
          <h2>Project Goals</h2>
          <p>MVP: [ technologies ]</p>
          <p>Core: [ core integrates ]</p>
          <p>Final Product: [ Final Product Visions ]</p>
        </div>
      </div>
       <div className="sections-container">
         <div className="section you-meet-section">
            <h2>You Meet</h2>
            {/* Add icons or images here */}
            <div className="icons">
                <img src="/placeholder-icon.svg" alt="Icon 1" />
                <img src="/placeholder-icon.svg" alt="Icon 2" />
                <img src="/placeholder-icon.svg" alt="Icon 3" />
                <img src="/placeholder-icon.svg" alt="Icon 4" />
            </div>
         </div>
         <div className="section tech-stack-section">
            <h2>Tech Stack</h2>
            <p>Python, Groovy, Firebase</p>
            <p>Gemini</p>
         </div>
       </div>
    </div>
  );
}

export default HomePage;