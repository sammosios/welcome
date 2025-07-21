import React from 'react';
import './Splash.css'; // Import your CSS file for styling
import Typewriter from './Typewriter';

const SplashScreen = () => {
  
  return (
    <div className="splash-screen">
      <div className="splash-content">
        <h1 className="title">Sam Mosios</h1>
        <h1 className="title">{'</>'}</h1>
        <Typewriter className='subtitle' text={'Building with purpose'}/>
      </div>
    </div>
  );
};

export default SplashScreen;
