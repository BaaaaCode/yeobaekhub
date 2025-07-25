import React from 'react';
import './/LabInfo.css';

function LabInfo() {
  const infoBoxes = [
    { title: 'MCP', description: 'Modular Command Processing' },
    { title: 'Modular Command Processing', description: 'Break down complex tasks' },
    { title: 'Prompt Engineering', description: 'Craft effective prompts for AI' },
    { title: 'Intent Parsing', description: 'Understand user intentions' },
    { title: 'LLM API Integration', description: 'Integrate with Large Language Models' },
  ];

  return (
    <section className="LabInfo">
      <div className="container">
        <h3>Lab Info</h3>
        <div className="info-boxes">
          {infoBoxes.map((box, index) => (
            <div key={index} className="info-box">
              <h4>{box.title}</h4>
              <p>{box.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LabInfo;
