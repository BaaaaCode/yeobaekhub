import React from 'react';
import './Chatbot.css';

function ChatbotSidebar() {
  return (
    <div className="chatbot-sidebar">
      <div className="chatbot-header">
        <h3>Chatbot</h3>
        {/* Add chatbot icon here if needed */}
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