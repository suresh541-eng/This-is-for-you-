import React, { useState } from "react";

const LoveCard = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#ffe6e6",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <h1 style={{ color: "#ff4d6d" }}>Hey love 💖</h1>
      <button
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
          backgroundColor: "#ff4d6d",
          color: "#fff",
          marginTop: "20px"
        }}
      >
        Click to see my feelings
      </button>

      {showMessage && (
        <p style={{
          marginTop: "30px",
          fontSize: "22px",
          textAlign: "center",
          color: "#ff1a75",
          lineHeight: "1.5"
        }}>
          Naa heart lo neeku special place undi 💖<br/>
          Neeku prema chupinchadaniki ee app create chesanu 😘<br/>
          Love you always ❤️
        </p>
      )}
    </div>
  );
};

export default LoveCard;
