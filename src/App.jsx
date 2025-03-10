import { useState } from "react";
import AlbumSelector from "./components/AlbumSelector";
import Gallery from "./components/Gallery";
import SlideShow from "./components/SlideShow";
import "./App.css";

import Awan from "./assets/Awan.png";
import Sunset from "./assets/Sunset.png";
import Seminar from "./assets/Seminar.jpg";
import Crc from "./assets/Crc.jpg";




function App() {
  const albums = {
    "Semesta": [Awan, Sunset],
    "HERO": [Seminar, Crc]
  };

  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false); // State untuk slideshow

  return (
    <div className="app-container">
      <h1>SnapView</h1>
      <AlbumSelector albums={Object.keys(albums)} onSelect={setSelectedAlbum} />

      {selectedAlbum && (
        <>
          <Gallery images={albums[selectedAlbum]} isPlaying={isPlaying} />
          <SlideShow isPlaying={isPlaying} onToggle={() => setIsPlaying(!isPlaying)} />
        </>
      )}
    </div>
  );
}

export default App;