import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage({ setIsChatbotVisible, isChatbotVisible }) {
  const handleStartAssistantClick = () => {
    setIsChatbotVisible(!isChatbotVisible); // Toggle chatbot visibility
  };

  const labsData = [
    {
      title: 'Automatation Lab',
      subtitle: 'LAB 1',
      description: '#AIAssistant #Automation #Chatbot #GeminiAPI',
      link: '/labs/automation'
    },
    {
      title: 'Archive Lab',
      subtitle: 'LAB 2',
      description: '#DocumentManagement #AcademicResources #Search #Collaboration',
      link: '/labs/archive'
    },
    {
      title: 'AICurator Lab',
      subtitle: 'Lab 3',
      description: '#RecommendationSystem #LibraryScience #Personalization #LearningSupport',
      link: '/labs/aicurator'
    },
    {
        title: 'Idea Lab',
        subtitle: 'LAB 6',
        description: '# Idea # Experiment',
        link: '/labs/idea' // Add link for the new lab
    }
  ];

  return (
    <div className="homepage">
      <div className="hero-and-image-container"> {/* Two-column container */}
        <div className="hero-section-left"> {/* Left column for text and button */}
          <h1>between 0 and 1, fill the 'blanket' of knowledge!</h1> {/* Updated title */}
          <button className="start-button" onClick={handleStartAssistantClick}>Start Assistant</button>
        </div>
        <div className="hero-image-right"> {/* Right column for images */}
          {/* Add your image elements here */}
          <img src="/placeholder-image-1.svg" alt="Placeholder Image 1" />
          {/* Add more images as needed */}
        </div>
      </div>
      <div className="separator"></div> {/* Add separator */}
      <div className="lab-info-header"> {/* Container for Lab Info title and phrase */}
        <h2>Lab Info</h2>
        <p>Lab Info</p>
      </div>
      <div className="labs-sections-container"> {/* New container for lab boxes */}
        {labsData.map((lab, index) => (
          <Link to={lab.link} key={index} className="section lab-section-link"> {/* Wrap content in Link */}
            <div className="lab-section-content"> {/* Add a div for content to apply flex styles */}
              <h4>{lab.subtitle}: {lab.title}</h4>
              <p>{lab.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="separator"></div> {/* Add second separator */}
      <div className="section main-project-section"> {/* Main Project section */}
        <h2>Main Project</h2>
        <div className="main-project-placeholder"> {/* Placeholder for content */}
          <h3>Work in Progress Updates:</h3>
          <ul>
            <li>Implementing core features...</li>
            <li>Designing UI components...</li>
            <li>Integrating APIs...</li>
            <li>Setting up database...</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePage;