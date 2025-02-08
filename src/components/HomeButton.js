import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function HomeButton() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === '/' || location.pathname === '/404') {
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