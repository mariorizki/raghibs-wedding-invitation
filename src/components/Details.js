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
          <h3>Raghib</h3>
        </Fade>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Fade right duration={2500}>
          <img className="couple-img" src={irna} alt="" />
          <h3>Irna</h3>
        </Fade>
      </Grid>
      <Grid>
        <Zoom duration={2000}>
          <p>
            Dengan penuh rasa syukur kami ingin memberikan informasi kepada
            Bapak/Ibu/Saudara/i mengenai acara pernikahan dan dapat disaksikan
            melalui live streaming yang akan diselenggarakan pada :
          </p>
        </Zoom>
      </Grid>
    </Grid>
  );
};

export default Details;
