import React from 'react';
import './Protokol.css';
// import Jump from 'react-reveal/Jump';
import Bounce from 'react-reveal/Bounce';
import Rotate from 'react-reveal/Rotate';

const Protokol = () => {
  return (
    <section className="protokol-container">
      <Bounce>
        <div>
          <p>Diharapakan kepada tamu undangan untuk mematuhi</p>
          <h3>Protokol Kesehatan</h3>
        </div>
      </Bounce>

      <Rotate bottom right duration={2000} delay={500}>
        <img
          className="protocol-img"
          src={require('../images/protocol-02.png').default}
          alt=""
        />
      </Rotate>
      <Rotate bottom left duration={2000} delay={500}>
        <img
          className="protocol-img"
          src={require('../images/protocol-03.png').default}
          alt=""
        />
      </Rotate>
      <Rotate bottom right duration={2000} delay={500}>
        <img
          className="protocol-img"
          src={require('../images/protocol-04.png').default}
          alt=""
        />
      </Rotate>
      <Rotate bottom left duration={2000} delay={500}>
        <img
          className="protocol-img"
          src={require('../images/protocol-05.png').default}
          alt=""
        />
      </Rotate>
    </section>
  );
};

export default Protokol;
