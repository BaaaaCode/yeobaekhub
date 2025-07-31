import React from 'react';
import { useParams } from 'react-router-dom';
import FloatingChatbotButton from '../components/FloatingChatbotButton'; // Import the floating button
import './LabDashboard.css';

function LabDashboard({ setIsChatbotVisible, isChatbotVisible }) { // Receive state and setter
  const { labId } = useParams(); // Get the lab ID from the URL

  // You can use labId to fetch lab-specific data later

  return (
    <div className="lab-dashboard-container">
      <div className="dashboard-sidebar"> {/* Left sidebar */}
        <h3>Lab Navigation</h3>
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
          {/* Add more lab-specific navigation items here */}
        </ul>
      </div>
      <div className="dashboard-main-content"> {/* Main content area */}
        <div className="dashboard-header"> {/* Dashboard header */}
          <h2>Lab: {labId}</h2> {/* Display lab ID in the header */}
          {/* Add user profile or other header elements */}
        </div>
        <div className="dashboard-sections"> {/* Sections for input, output, etc. */}
          <div className="dashboard-section"> {/* Input Parameters */}
            <h3>Input Parameters</h3>
            <div className="placeholder-content">Placeholder for input forms/controls</div>
          </div>
          <div className="dashboard-section"> {/* Output */}
            <h3>Output</h3>
            <div className="placeholder-content">Placeholder for output results</div>
          </div>
          <div className="dashboard-section full-width-section"> {/* Results Table */}
            <h3>Results Table</h3>
            <div className="placeholder-content">Placeholder for a data table</div>
          </div>
          <div className="dashboard-section"> {/* Visualization 1 */}
            <h3>Visualization 1</h3>
            <div className="placeholder-content">Placeholder for a chart or graph</div>
          </div>
          <div className="dashboard-section"> {/* Visualization 2 */}
            <h3>Visualization 2</h3>
            <div className="placeholder-content">Placeholder for another chart or graph</div>
          </div>
        </div>
      </div>
      <FloatingChatbotButton setIsChatbotVisible={setIsChatbotVisible} isChatbotVisible={isChatbotVisible} /> {/* Include the floating button */}
    </div>
  );
}

export default LabDashboard;