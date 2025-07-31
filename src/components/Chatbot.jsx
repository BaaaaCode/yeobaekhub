import React from 'react';
import './Chatbot.css';

function ChatbotSidebar({ setIsChatbotVisible }) {
  const handleCloseClick = () => {
    setIsChatbotVisible(false);
  };

  return (
    <div className="chatbot-sidebar">
      <div className="chatbot-header">
        <h3>Chatbot</h3> {/* Change title text back to Chatbot */}
        <button className="close-button" onClick={handleCloseClick}>X</button>
      </div>
      <div className="chatbot-messages">
        <p>Hello, Seungbin</p>
        <p>How can I help you?</p>
        {/* Add conversation history here */}
      </div>
      <div className="chatbot-suggestions">
        <button>Run my unit tests</button>
        <button>Add a dependency...</button>
        <button>Which processes...</button>
      </div>
      <div className="chatbot-input-area">
        <input type="text" placeholder="Ask a question..."></input>
        <button>Send</button>
      </div>
      <div className="chatbot-footer">
        <p>Built-in Gemini model</p>
      </div>
    </div>
  );
}

export default ChatbotSidebar;