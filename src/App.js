import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Hero from './components/Hero';
import Wishes from './components/Wishes';
import Details from './components/Details';
import Gallery from './components/Gallery';
import SimpleReactLightbox from 'simple-react-lightbox';
import Protokol from './components/Protokol';

function App() {
  return (
    <SimpleReactLightbox>
      <div className="App">
        <Welcome />
        <Hero />
        <Details />
        <Gallery />
        <Protokol />
        <Wishes />
      </div>
    </SimpleReactLightbox>
  );
}

export default App;
