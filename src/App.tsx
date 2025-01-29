import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../src/pages/landing-page'; // Import the LandingPage component
import BrowseCompanies from './pages/browse-companies';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        

        <Routes>
          {/* Define routes here */}
          <Route path="/" element={<LandingPage />} />  {/* Landing page route */}
          <Route path="/browse-companies" element={<BrowseCompanies />} />  {/* Landing page route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
