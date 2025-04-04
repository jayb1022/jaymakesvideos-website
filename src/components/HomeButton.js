import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function HomeButton() {
  const navigate = useNavigate();
  const location = useLocation();

  // Hide the button on home, 404, and pages with their own navigation
  if (location.pathname === '/' || 
      location.pathname === '/404' || 
      location.pathname === '/content' || 
      location.pathname === '/homepage') {
    return null;
  }

  return (
    <div className="home-button-overlay">
      <button 
        className="home-button-persistent"
        onClick={() => navigate('/')}
      >
        Return Home
      </button>
    </div>
  );
}

export default HomeButton;