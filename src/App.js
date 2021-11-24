import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Hero from './components/Hero';
import Wishes from './components/Wishes';
import Details from './components/Details';
import Gallery from './components/Gallery';
import SimpleReactLightbox from 'simple-react-lightbox';
import Protokol from './components/Protokol';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function App() {
  return (
    <SimpleReactLightbox>
      <div className="App">
        <Welcome />
        <Navbar />

        <Hero />
        <Details />
        <Gallery />
        <Protokol />
        <Wishes />
        {/* <Footer /> */}
      </div>
    </SimpleReactLightbox>
  );
}

export default App;
