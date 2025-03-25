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

  // Panggil Zustand dengan selector
  const selectedAlbum = useStore((state) => state.selectedAlbum);
  const setSelectedAlbum = useStore((state) => state.setSelectedAlbum);
  const isPlaying = useStore((state) => state.isPlaying);
  const setIsPlaying = useStore((state) => state.setIsPlaying);

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
