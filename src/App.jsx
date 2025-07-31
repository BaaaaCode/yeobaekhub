import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ChatbotSidebar from './components/Chatbot';
import './App.css';

function App() {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <div className="main-layout">
          <div className="main-content">
            <Routes>
              <Route path="/" element={<HomePage setIsChatbotVisible={setIsChatbotVisible} isChatbotVisible={isChatbotVisible} />} /> {/* Pass isChatbotVisible */}
              {/* Add routes for other pages here */}
            </Routes>
          </div>
          {isChatbotVisible && <ChatbotSidebar setIsChatbotVisible={setIsChatbotVisible} />} {/* Conditionally render ChatbotSidebar */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;