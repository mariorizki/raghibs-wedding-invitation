import React, { useState } from 'react';
import './Welcome.css';
import a from '../audio/music.mp3';

const Welcome = () => {
  const [isOpen, setIsOpen] = useState(true);
  let music = new Audio(a);
  const play = () => {
    music.play();
  };

  return (
    <div
      className={isOpen ? 'welcome-layout' : 'welcome-layout inactive'}
      onClick={() => {
        play();
        setIsOpen(false);
      }}
    >
      Welcome to Nikahan Raghib
    </div>
  );
};

export default Welcome;
