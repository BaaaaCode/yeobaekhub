import React from 'react';
import './FloatingChatbotButton.css';

function FloatingChatbotButton({ setIsChatbotVisible, isChatbotVisible }) {
  const handleButtonClick = () => {
    setIsChatbotVisible(!isChatbotVisible); // Toggle chatbot visibility
  };

  return (
    <button className="floating-chatbot-button" onClick={handleButtonClick}>
      {/* You can add an icon here, e.g., a chat icon */}
      Chat
    </button>
  );
}

export default FloatingChatbotButton;