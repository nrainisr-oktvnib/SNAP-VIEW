import { useState } from "react";

function Gallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
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
