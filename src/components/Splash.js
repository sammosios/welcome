import React, { useEffect } from 'react';
import './Splash.css'; // Import your CSS file for styling
import logo from '../assets/logo-transparent-small.png';
import { Avatar } from 'antd';

const SplashScreen = ({ onFadeOut }) => {
  
  return (
    <div className="splash-screen">
      <div className="splash-content">
        <h1 className="title">Sam Mosios</h1>
        <h1 className="title">{'</>'}</h1>
        <p className="subtitle">Building with purpose</p>
      </div>
    </div>
  );
};

export default SplashScreen;
