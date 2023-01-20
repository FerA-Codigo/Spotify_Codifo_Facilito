import './App.css';
import {BrowserRouter as Browser, Routes, Route} from 'react-router-dom';
import Main from './pages/Main';
import Album from './pages/Album';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArtistProvider } from './contexts/ArtistContext';
import { SingerDataProvider } from './contexts/SingerDataContext';
import { MusicDataProvider } from './contexts/MusicDataContext';

AOS.init({once: true});

function App() {
  return (
    <ArtistProvider>
     <Browser>
      <Routes>
        <Route path='/' element={<SingerDataProvider><Main/></SingerDataProvider>}/>
        <Route path='/albums/:id' element={<MusicDataProvider><Album/></MusicDataProvider>}/>
        <Route path='/*' element={<SingerDataProvider><Main/></SingerDataProvider>}/>
      </Routes>
    </Browser>
    </ArtistProvider>
  );
}

export default App;
