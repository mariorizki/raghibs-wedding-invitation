import React, { useState } from 'react';
import './Welcome.css';
import a from '../audio/music.mp3';
import Button from '@mui/material/Button';
// import Play from './Play';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Welcome = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isPlay, setIsPlay] = useState(false);
  let music = new Audio(a);
  const play = () => {
    music.play();
    // setIsPlay(true);
  };

  const pause = () => {
    music.pause();
    // setIsPlay(false);
  };

  return (
    <>
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
    </>
  );
};

export default Welcome;
