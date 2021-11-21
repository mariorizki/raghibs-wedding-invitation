import React from 'react';
import Countdown from './Countdown';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <h1 className="hero-text">
        Raghib & Irna's <br />
        Wedding{' '}
      </h1>

      <Countdown />
    </div>
  );
};

export default Hero;
