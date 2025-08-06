import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Hero from '../components/Hero';
import LabInfo from '../components/LabInfo';
import ProjectGoals from '../components/ProjectGoals';
import TechStack from '../components/TechStack';
import Chatbot from '../components/Chatbot';

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
    <div>
      <Hero />
      <LabInfo labsData={labsData} />
      <ProjectGoals />
      <TechStack />
      {isChatbotVisible && (
        <div className="chatbot-overlay">
          <Chatbot setIsChatbotVisible={setIsChatbotVisible} />
        </div>
      )}
    </div>
  );
}

export default HomePage;