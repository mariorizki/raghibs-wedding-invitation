import React from 'react';
import Grid from '@mui/material/Grid';
import { SRLWrapper } from 'simple-react-lightbox';
import g1 from '../images/g1.jpg';
import g2 from '../images/g2.jpg';
import g3 from '../images/g3.jpg';
import g4 from '../images/g4.jpg';
import g5 from '../images/g5.jpg';
import g6 from '../images/g6.jpg';
import g7 from '../images/g7.jpg';
import './Gallery.css';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

const Gallery = () => {
  return (
    <SRLWrapper>
      <Grid className="gallery-section" container spacing={2}>
        <Grid xs={12} sm={12}>
          <h3 className="gallery-title">Wedding Gallery</h3>
          <p>(Click picture to zoom)</p>
        </Grid>
        <Grid className="img-gallery-container" xs={6} sm={4}>
          <Fade bottom duration={1500}>
            <img className="img-gallery" src={g1} alt="" />
          </Fade>
        </Grid>
        <Grid className="img-gallery-container" xs={6} sm={4}>
          <Fade bottom duration={1500}>
            <img className="img-gallery" src={g2} alt="" />
          </Fade>
        </Grid>
        <Grid className="img-gallery-container" xs={6} sm={4}>
          <Fade bottom duration={1500}>
            <img className="img-gallery" src={g3} alt="" />
          </Fade>
        </Grid>
        <Grid className="img-gallery-container" xs={6} sm={4}>
          <Fade bottom duration={1500}>
            <img className="img-gallery" src={g4} alt="" />
          </Fade>
        </Grid>
        <Grid className="img-gallery-container" xs={6} sm={4}>
          <Fade bottom duration={1500}>
            <img className="img-gallery" src={g5} alt="" />
          </Fade>
        </Grid>
        <Grid className="img-gallery-container" xs={6} sm={4}>
          <Fade bottom duration={1500}>
            <img className="img-gallery" src={g6} alt="" />
          </Fade>
        </Grid>
        <Grid className="img-gallery-container" xs={6} sm={4}>
          <Fade bottom duration={1500}>
            <img className="img-gallery" src={g7} alt="" />
          </Fade>
        </Grid>
      </Grid>
    </SRLWrapper>
  );
};

export default Gallery;
