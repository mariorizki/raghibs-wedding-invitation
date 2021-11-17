import React from 'react';
import Grid from '@mui/material/Grid';
import g1 from '../images/g1.jpg';
import g2 from '../images/g2.jpg';
import g3 from '../images/g3.jpg';
import g4 from '../images/g4.jpg';
import g5 from '../images/g5.jpg';
import g6 from '../images/g6.jpg';
import g7 from '../images/g7.jpg';
import './Gallery.css';
import Slide from 'react-reveal/Slide';

const Gallery = () => {
  return (
    <Grid container spacing={2}>
      <Grid className="img-gallery-container" xs={6} sm={4}>
        <Slide bottom duration={3000}>
          <img className="img-gallery" src={g1} alt="" />
        </Slide>
      </Grid>
      <Grid className="img-gallery-container" xs={6} sm={4}>
        <Slide bottom duration={3000}>
          <img className="img-gallery" src={g2} alt="" />
        </Slide>
      </Grid>
      <Grid className="img-gallery-container" xs={6} sm={4}>
        <Slide bottom duration={3000}>
          <img className="img-gallery" src={g3} alt="" />
        </Slide>
      </Grid>
      <Grid className="img-gallery-container" xs={6} sm={4}>
        <Slide bottom duration={3000}>
          <img className="img-gallery" src={g4} alt="" />
        </Slide>
      </Grid>
      <Grid className="img-gallery-container" xs={6} sm={4}>
        <Slide bottom duration={3000}>
          <img className="img-gallery" src={g5} alt="" />
        </Slide>
      </Grid>
      <Grid className="img-gallery-container" xs={6} sm={4}>
        <Slide bottom duration={3000}>
          <img className="img-gallery" src={g6} alt="" />
        </Slide>
      </Grid>
      <Grid className="img-gallery-container" xs={6} sm={4}>
        <Slide bottom duration={3000}>
          <img className="img-gallery" src={g7} alt="" />
        </Slide>
      </Grid>
    </Grid>
  );
};

export default Gallery;
