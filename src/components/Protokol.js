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
          src={require('../images/p-1.png').default}
          alt=""
        />
        <p>Cuci Tangan</p>
      </Rotate>
      <Rotate bottom left duration={2000} delay={500}>
        <img
          className="protocol-img"
          src={require('../images/p-2.png').default}
          alt=""
        />
        <p>Gunakan Masker</p>
      </Rotate>
      <Rotate bottom right duration={2000} delay={500}>
        <img
          className="protocol-img"
          src={require('../images/p-3.png').default}
          alt=""
        />
        <p>Menjaga Jarak</p>
      </Rotate>
      <Rotate bottom left duration={2000} delay={500}>
        <img
          className="protocol-img"
          src={require('../images/p-4.png').default}
          alt=""
        />
        <p>Hindari Kerumunan</p>
      </Rotate>
      <Rotate bottom right duration={2000} delay={500}>
        <img
          className="protocol-img"
          src={require('../images/p-5.png').default}
          alt=""
        />
        <p>Gunakan Handsanitizer</p>
      </Rotate>
    </section>
  );
};

export default Protokol;
