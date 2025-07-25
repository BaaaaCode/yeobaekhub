import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import LabInfo from './components/LabInfo';
import ProjectGoals from './components/ProjectGoals';
import Chatbot from './components/Chatbot';
import TechStack from './components/TechStack';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <LabInfo />
              <ProjectGoals />
              <Chatbot />
              <TechStack />
            </>
          } />
          {/* Add routes for other pages if needed */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
