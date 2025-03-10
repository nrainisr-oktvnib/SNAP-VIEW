function SlideShow({ isPlaying, onToggle }) {
    return (
      <div className="slideshow-container">
        <button onClick={onToggle} className="slideshow-btn">
          {isPlaying ? "Stop Slideshow" : "Start Slideshow"}
        </button>
      </div>
    );
  }
  
  export default SlideShow;
  