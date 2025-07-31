import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ChatbotSidebar from './components/Chatbot';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <div className="main-layout">
          <div className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* Add routes for other pages here */}
            </Routes>
          </div>
          <ChatbotSidebar />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;