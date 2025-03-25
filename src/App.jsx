import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AlbumSelector from "./components/AlbumSelector";
import Gallery from "./components/Gallery";
import SlideShow from "./components/SlideShow";
import "./App.css";

import Awan from "./assets/Awan.png";
import Sunset from "./assets/Sunset.png";
import Seminar from "./assets/Seminar.jpg";
import Crc from "./assets/Crc.jpg";
import useStore from "./store/store";

function App() {
  const albums = {
    "Semesta": [Awan, Sunset],
    "HERO": [Seminar, Crc]
  };

  const selectedAlbum = useStore((state) => state.selectedAlbum);
  const setSelectedAlbum = useStore((state) => state.setSelectedAlbum);
  const isPlaying = useStore((state) => state.isPlaying);
  const setIsPlaying = useStore((state) => state.setIsPlaying);

  return (
    <Router>
      <div className="app-container">
        <h1>SnapView</h1>
        <Routes>
          <Route path="/" element={<AlbumSelector albums={Object.keys(albums)} onSelect={setSelectedAlbum} />} />
          <Route path="/gallery" element={<Gallery images={albums[selectedAlbum] || []} isPlaying={isPlaying} />} />
          <Route path="/slideshow" element={<SlideShow isPlaying={isPlaying} onToggle={() => setIsPlaying(!isPlaying)} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
