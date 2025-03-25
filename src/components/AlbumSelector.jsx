import { useNavigate } from "react-router-dom";

function AlbumSelector({ albums, onSelect }) {
  const navigate = useNavigate();

  const handleSelect = (album) => {
    onSelect(album);
    navigate("/gallery"); // Pindah ke halaman gallery setelah memilih album
  };

  return (
    <div className="album-container">
      <h2>Pilih Album</h2>
      <div className="album-buttons">
        {albums.map((album) => (
          <button key={album} onClick={() => handleSelect(album)} className="album-btn">{album} </button>
        ))}
      </div>
    </div>
  );
}

export default AlbumSelector;
