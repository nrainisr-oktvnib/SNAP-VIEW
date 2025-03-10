function AlbumSelector({ albums, onSelect }) {
    return (
      <div className="album-container">
        <h2>Pilih Album</h2>
        <div className="album-buttons">
          {albums.map((album) => (
            <button key={album} onClick={() => onSelect(album)} className="album-btn">
              {album}
            </button>
          ))}
        </div>
      </div>
    );
  }
  
  export default AlbumSelector;
  