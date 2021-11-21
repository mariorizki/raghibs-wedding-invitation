import React, { useState } from 'react';
import './Welcome.css';

const Welcome = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={isOpen ? 'welcome-layout' : 'welcome-layout inactive'}
      onClick={() => setIsOpen(false)}
    >
      Welcome to Nikahan Raghib
    </div>
  );
};

export default Welcome;
