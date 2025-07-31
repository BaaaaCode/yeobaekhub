import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ChatbotSidebar from './components/Chatbot';
import LabDashboard from './pages/LabDashboard';
import Footer from './components/Footer'; // Import Footer
import './App.css';

function App() {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <div className="main-layout">
          <Routes>
            <Route path="/" element={<HomePage setIsChatbotVisible={setIsChatbotVisible} isChatbotVisible={isChatbotVisible} />} />
            <Route path="/labs/:labId" element={<LabDashboard setIsChatbotVisible={setIsChatbotVisible} isChatbotVisible={isChatbotVisible} />} />
            {/* Add routes for other pages here */}
          </Routes>
          {isChatbotVisible && <ChatbotSidebar setIsChatbotVisible={setIsChatbotVisible} />} 
        </div>
        <Footer /> {/* Include Footer */}
      </div>
    </BrowserRouter>
  );
}

export default App;