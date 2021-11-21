import React from 'react';
import './Wish.css';
import Zoom from 'react-reveal/Zoom';

const Wish = ({ id, wish, name }) => {
  return (
    <Zoom duration={2000}>
      <div className="wish-container" key={id}>
        <h3 className="wish-name">{name}</h3>
        <p>{wish}</p>
      </div>
    </Zoom>
  );
};

export default Wish;
