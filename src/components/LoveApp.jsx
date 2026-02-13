import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

const LoveApp = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={styles.container}>
      {/* Floating Hearts */}
      <div className="hearts">
        {Array.from({ length: 15 }).map((_, i) => (
          <span key={i} className="heart" style={{ '--i': Math.random() }}>❤️</span>
        ))}
      </div>

      <h1 style={styles.heading}>Hey Love 💖</h1>

      {!showMessage && (
        <button style={styles.button} onClick={() => setShowMessage(true)}>
          Click to see my feelings
        </button>
      )}

      {showMessage && (
        <>
          <Confetti
            width={dimensions.width}
            height={dimensions.height}
            numberOfPieces={250}
          />
          <p style={styles.message}>
            Naa heart lo neeku special place undi ❤️ <br />
            Naa feelings words lo cheppadam kashtam… <br />
            Anduke ee small app create chesanu 😘 <br />
            <strong>Love you always 💖</strong>
          </p>
        </>
      )}

      {/* CSS */}
      <style>{`
        .hearts {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          top: 0;
          left: 0;
          z-index: 0;
        }

        .heart {
          position: absolute;
          bottom: -20px;
          font-size: 20px;
          animation: floatUp 6s infinite ease-in;
          opacity: 0.7;
        }

        .heart:nth-child(odd) {
          animation-duration: 8s;
          font-size: 26px;
        }

        .heart:nth-child(even) {
          animation-duration: 5s;
        }

        .heart {
          left: calc(100% * var(--i));
        }

        @keyframes floatUp {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    minHeight: "100vh",
    backgroundColor: "#ffe6eb",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "20px",
    overflow: "hidden",
    fontFamily: "Segoe UI, sans-serif",
  },
  heading: {
    fontSize: "clamp(28px, 6vw, 42px)",
    color: "#ff3366",
    zIndex: 1,
  },
  button: {
    marginTop: "20px",
    padding: "12px 24px",
    fontSize: "18px",
    borderRadius: "25px",
    border: "none",
    backgroundColor: "#ff3366",
    color: "#fff",
    cursor: "pointer",
    zIndex: 1,
  },
  message: {
    marginTop: "30px",
    fontSize: "clamp(18px, 4.5vw, 24px)",
    color: "#cc0052",
    lineHeight: "1.6",
    zIndex: 1,
    maxWidth: "500px",
  },
};

export default LoveApp;
