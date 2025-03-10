const Navigation = ({ onNext, onPrev }) => {
    return (
      <div style={{ marginTop: "20px" }}>
        <button onClick={onPrev} style={buttonStyle}>Previous</button>
        <button onClick={onNext} style={{ ...buttonStyle, marginLeft: "10px" }}>Next</button>
      </div>
    );
  };
  
  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
  };
  
  export default Navigation;
  