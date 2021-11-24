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
        <Zoom>
          <p>
            وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا
            لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً
            ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
          </p>
          <p>
            Dan diantara tanda - tanda kekuasaan-Nya ialah diciptakan-Nya
            untukmu pasangan hidup dari jenismu sendiri supaya kamu mendapat
            ketenangan hati dan dijadikan-Nya kasih sayang diantara kamu.
            Sesungguhnya yang demikian itu menjadi tanda - tanda kebesaran-Nya
            bagi orang - orang yang berfikir.
          </p>
          <p>(QS. Ar-Rum : 21)</p>
        </Zoom>
      </Grid>
      <Grid>
        <Zoom duration={2000}>
          <p>
            Assalamualaikum Warahmatullahi Wabarakatuh. Maha Suci Allah SWT
            telah menciptakan mahluk-Nya berpasang - pasangan dengan mengharap
            Rahmat dan RidhoMu, ya Allah perkenankanlah kami untuk Menikah.
          </p>
        </Zoom>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Fade left duration={2000}>
          <img className="couple-img" src={raghib} alt="" />
          <p className="couple-name">Raghib</p>
        </Fade>
        <Fade bottom duration={2500}>
          <div className="name-container">
            <h5>
              Raghib Filhaq, S.Psi. <br /> Putra Ke Empat Dari <br />
              Bapak Prof. Dr. Dede Rosyada, MA. <br />& Ibu Dr. Andriyani,
              M.Kes.
            </h5>
          </div>
        </Fade>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Fade left duration={2000}>
          <img className="couple-img" src={irna} alt="" />
          <p className="couple-name">Irna</p>
        </Fade>
        <Fade bottom duration={2500}>
          <div className="name-container">
            <h5>
              Irna Hasanah, S.Pd. <br /> Putri Ke Dua Dari <br />
              Bapak Asep Hasanudin
              <br />& Ibu Dedeh Kurniasih
            </h5>
          </div>
        </Fade>
      </Grid>
      <Grid>
        <Zoom duration={2000} delay={1000}>
          <p className="save">Save the Date:</p>
        </Zoom>
        <Zoom bottom duration={2000} delay={1000}>
          <hr style={{ marginTop: '3rem' }} />
          <h3>
            Minggu,
            <br /> 12 Desember 2021{' '}
          </h3>

          <hr />
        </Zoom>
        <div className="name-container">
          <Zoom duration={2000} delay={1000}>
            <img
              style={{ width: '20%', marginTop: '3rem' }}
              src={require('../images/akad.png').default}
              alt=""
            />
            <h3>Akad Nikah</h3>
            <p className="time">08:00 - 10:00</p>
          </Zoom>
          <Zoom duration={2000} delay={1000}>
            <img
              style={{ width: '20%', marginTop: '3rem' }}
              src={require('../images/resepsi.png').default}
              alt=""
            />
            <h3>Resepsi</h3>
            <p className="time">11:00 - 14:00</p>
          </Zoom>
        </div>
        <Zoom duration={2000} delay={1000}>
          <h3 style={{ marginTop: '3rem' }}>Bale Panghegar</h3>
          <p>
            Jl. Cisinga (Singaparna- Ciawi) 4km Gombong / Ciawi (Jalur Car Free
            Day), Kabupaten Tasikmalaya, Jawa Barat.
          </p>
        </Zoom>
        {/* <Zoom duration={2000} delay={1000}>
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
        </Zoom> */}
      </Grid>
    </Grid>
  );
};

export default Details;
