import { useNavigate } from "react-router-dom";

function SlideShow({ isPlaying, onToggle }) {
  const navigate = useNavigate(); // Tambahkan navigasi

  return (
    <div className="slideshow-container">
      <button onClick={() => navigate("/")} className="slideshow-btn">
        Pilih Album
      </button>
    </div>
  );
}

export default SlideShow;
