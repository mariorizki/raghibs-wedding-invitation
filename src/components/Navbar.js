import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <img
        className="nav-logo"
        src={require('../images/welcome-logo.png').default}
        alt=""
      />
    </nav>
  );
};

export default Navbar;
