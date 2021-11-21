import React, { useState } from 'react';
import './Welcome.css';
import a from '../audio/music.mp3';
import Button from '@mui/material/Button';

const Welcome = () => {
  const [isOpen, setIsOpen] = useState(true);
  let music = new Audio(a);
  const play = () => {
    music.play();
  };

  return (
    <div className={isOpen ? 'welcome-layout' : 'welcome-layout inactive'}>
      <h3>
        Raghib & Irna's <br /> Wedding Invitation
      </h3>
      <img src={require('../images/welcome-logo.png').default} alt="" />
      <Button
        className="welcome-btn"
        variant="contained"
        onClick={() => {
          play();
          setIsOpen(false);
        }}
      >
        Buka Undangan
      </Button>
    </div>
  );
};

export default Welcome;
