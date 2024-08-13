import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate(); 
  const navigateToDashboard = () => {
    navigate('/dashboard'); 
  };

  return (
    <div className="home-page">
      <h1>Welcome to Your Dashboard App</h1>
      <p>Personalize your experience and manage your widgets effortlessly.</p>
      <button className="enter-button" onClick={navigateToDashboard}>
        Go to Dashboard
      </button>
    </div>
  );
};

export default HomePage;
