import useStore from "../store/store";  // Import Zustand store

function Gallery({ images }) {
  const { currentIndex, setCurrentIndex } = useStore();

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  return (
    <div className="gallery-container">
      <img src={images[currentIndex]} alt={`Gambar ${currentIndex + 1}`} className="gallery-image" />
      <div className="button-group">
        <button onClick={prevImage} className="nav-btn">Previous</button>
        <button onClick={nextImage} className="nav-btn">Next</button>
      </div>
      <p className="image-counter">Gambar {currentIndex + 1} dari {images.length}</p>
    </div>
  );
}

export default Gallery;
