import React from 'react';

import Grid from '@mui/material/Grid';
import raghib from '../images/raghib.jpg';
import irna from '../images/irna.jpg';
import './Details.css';

import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const Details = () => {
  return (
    <Grid className="details-container" container spacing={2}>
      <Grid>
        <Zoom duration={2000} opposite={true}>
          <p>
            Assalamualaikum Warahmatullahi Wabarakatuh. Maha Suci Allah SWT
            telah menciptakan mahluk-Nya berpasang - pasangan dengan mengharap
            Rahmat dan RidhoMu, ya Allah perkenankanlah kami untuk Menikah.
          </p>
        </Zoom>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Fade left duration={2500}>
          <img className="couple-img" src={raghib} alt="" />
          <p className="couple-name">Raghib</p>
        </Fade>
        <Fade bottom duration={2500}>
          <p>
            Raghib Filhaq, S.Psi. <br /> Putra Ke Tiga Dari <br />
            Bapak Prof. Dr. Dede Rosyada, MA. <br />& Ibu Dr. Andriyani, M.Kes.
          </p>
        </Fade>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Fade right duration={2500}>
          <img className="couple-img" src={irna} alt="" />
          <p className="couple-name">Irna</p>
        </Fade>
        <Fade bottom duration={2500}>
          <p>
            Irna Hasanah, S.Pd. <br /> Putri Ke Dua Dari <br />
            Bapak Asep Hasanudin
            <br />& Ibu Dedeh Kurniasih
          </p>
        </Fade>
      </Grid>
      <Grid>
        <Zoom duration={2000} delay={1000}>
          <p>
            Dengan penuh rasa syukur kami ingin memberikan informasi kepada
            Bapak/Ibu/Saudara/i mengenai acara pernikahan dan dapat disaksikan
            melalui live streaming yang akan diselenggarakan pada :
          </p>
        </Zoom>
        <Zoom bottom duration={2000} delay={1000}>
          <hr style={{ marginTop: '3rem' }} />
          <h3>
            Minggu,
            <br /> 12 Desember 2021{' '}
          </h3>

          <hr />
        </Zoom>
        <Zoom duration={2000} delay={1000}>
          <img
            style={{ width: '20%', marginTop: '3rem' }}
            src={require('../images/akad.png').default}
            alt=""
          />
          <h3>Akad Nikah</h3>
          <p>08:00</p>
        </Zoom>
        <Zoom duration={2000} delay={1000}>
          <img
            style={{ width: '20%', marginTop: '3rem' }}
            src={require('../images/resepsi.png').default}
            alt=""
          />
          <h3>Resepsi</h3>
          <p>11:00</p>
        </Zoom>
        <Zoom duration={2000} delay={1000}>
          <h3 style={{ marginTop: '3rem' }}>Balai Panghegar</h3>
          <p>
            Jl. Cisinga (Singaparna- Ciawi) 4km Gombong / Ciawi (Jalur Car Free
            Day)
          </p>
        </Zoom>
        <Zoom duration={2000} delay={1000}>
          <h3 style={{ marginTop: '3rem' }}>Hadiah Pernikahan</h3>
          <p>Anda dapat memberikan hadiah pernikahan secara virtual melalui:</p>
          <p>Bank BCA</p>
          <p>No. Rekening: 0670531465</p>
          <p>A/n Raghib Filhaq</p>
          <img
            className="qr"
            src={require('../images/qr.jpg').default}
            alt=""
          />
        </Zoom>
      </Grid>
    </Grid>
  );
};

export default Details;
