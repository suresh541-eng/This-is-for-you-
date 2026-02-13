import React, { useState, useEffect, useRef } from "react";
import Confetti from "react-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const LoveProposal = () => {
  // Password protection
  const SECRET_PASSWORD = "june-24"; // change this
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // General states
  const [name, setName] = useState("");
  const [step, setStep] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [dark, setDark] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const [noPos, setNoPos] = useState({ top: "60%", left: "55%" });
  const [imgIndex, setImgIndex] = useState(0);
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  const audioRef = useRef(null);

  const images = ["/Haritha4.jpeg", "/haritha1.jpeg", "/haritha3.jpeg", "/haritha2.jpeg"]; // customize
  const proposalDate = "31 Augest 2025"; // customize

  // Initialize audio
  useEffect(() => {
    audioRef.current = new Audio("/music/love.mp3");
    audioRef.current.loop = true;
  }, []);

  // Window resize for Confetti
  useEffect(() => {
    const resize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // Memory slideshow
  useEffect(() => {
    if (step >= 1) {
      const timer = setInterval(() => setImgIndex((i) => (i + 1) % images.length), 2500);
      return () => clearInterval(timer);
    }
  }, [step]);

  // Music toggle
  const toggleMusic = () => {
    if (!musicOn) audioRef.current.play();
    else audioRef.current.pause();
    setMusicOn(!musicOn);
  };

  // NO button move
  const moveNo = () => setNoPos({ top: Math.random() * 75 + "%", left: Math.random() * 75 + "%" });

  // Check password
  const checkPassword = () => {
    if (password === SECRET_PASSWORD) {
      setUnlocked(true);
      setError("");
    } else setError("Hmm… idi correct kaadu 🙈");
  };

  return (
    <div className={`container ${dark ? "dark" : ""}`}>
      {/* Floating Hearts */}
      <div className="hearts">
        {[...Array(20)].map((_, i) => (
          <span key={i} className="heart" style={{ left: `${Math.random() * 100}%` }}>❤️</span>
        ))}
      </div>

      {/* Top Controls */}
      {unlocked && (
        <div className="topControls">
          
          <button onClick={() => setDark(!dark)}>{dark ? "☀️ Light" : "🌙 Dark"}</button>
        </div>
      )}

      <AnimatePresence>
        {/* PASSWORD SCREEN */}
        {!unlocked && (
          <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
            <h1 className="heading">🔒 Secret Page</h1>
            <p className="message">
              Ee page open cheyyalante<br />manaki maatrame telisina password kavali 💕
            </p>
            <input
              className="input"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="button" onClick={checkPassword}>Unlock 💖</button>
            {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
          </motion.div>
        )}

        {/* STEP 0: Enter Name */}
        {unlocked && step === 0 && (
          <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
            <h1 className="heading">Hey 💖</h1>
            <input
              className="input"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button className="button" disabled={!name} onClick={() => setStep(1)}>Continue</button>
          </motion.div>
        )}

        {/* STEP 1: Memory Slideshow + Typewriter */}
        {unlocked && step === 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <img src={images[imgIndex]} className="memoryImage" alt="memory" />
            <p className="message">
              <Typewriter
                words={[
                  `Hey ${name} 💕`,
                  "Naa life lo nuvvu chala special…",
                  "Naa heart nunchi oka question 💍"
                ]}
                loop={1}
                cursor
                typeSpeed={50}
                delaySpeed={1200}
              />
            </p>
            <button className="button" onClick={() => setStep(2)}>Next →</button>
          </motion.div>
        )}

        {/* STEP 2: Proposal */}
        {unlocked && step === 2 && !accepted && (
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }}>
            <h2 className="question">Will you be my forever? 💍</h2>
            <div className="actions">
              <button className="yesBtn" onClick={() => setAccepted(true)}>YES 💖</button>
              <button className="noBtn" style={{ top: noPos.top, left: noPos.left }} onMouseEnter={moveNo}>NO 🙈</button>
            </div>
          </motion.div>
        )}

        {/* FINAL ACCEPTED */}
        {unlocked && accepted && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Confetti width={size.width} height={size.height} />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1.4 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="ring"
            >
              💍
            </motion.div>
            <h1 className="heading">She said YES 💖</h1>
            <p className="message">{name}, I promise to love, respect & stand by you forever 💕<br /> ee roju naa life lo marchipoleni roju ❤️</p>
            <div className="memoryCard">
              <h2>📅 {proposalDate}</h2>
              <p>Ee roju nunchi mana story officially start ayyindi 💕 <br />Forever starts here 😘</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS */}
      <style>{`
        .container {
          min-height: 100vh;
          background: #ffe6eb;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
          position: relative;
          overflow: hidden;
          font-family: Segoe UI, sans-serif;
        }

        .dark {
          background: #0f0f0f;
          color: #fff;
        }

        .dark .heading,
        .dark .message {
          color: #ff7aa2;
        }

        .topControls {
          position: absolute;
          top: 15px;
          right: 15px;
          display: flex;
          gap: 10px;
          z-index: 10;
        }

        .topControls button {
          border: none;
          background: #ff3366;
          color: #fff;
          padding: 8px 14px;
          border-radius: 20px;
          cursor: pointer;
        }

        .hearts {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .heart {
          position: absolute;
          bottom: -20px;
          animation: float 6s infinite;
          font-size: 22px;
        }

        @keyframes float {
          0% { transform: translateY(0); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateY(-100vh); opacity: 0; }
        }

        .heading { font-size: 42px; color: #ff3366; }
        .message { font-size: 22px; max-width: 520px; margin: 20px auto; color: #cc0052; }
        .question { color: #ff3366; }
        .input { padding: 12px; font-size: 18px; border-radius: 10px; border: 1px solid #ff99aa; }
        .button { margin-top: 20px; padding: 12px 28px; font-size: 18px; border-radius: 25px; border: none; background: #ff3366; color: #fff; cursor: pointer; }
        .memoryImage { width: 220px; height: 220px; border-radius: 16px; object-fit: cover; margin-bottom: 20px; }
        .actions { position: relative; width: 100%; height: 200px; }
        .yesBtn { padding: 12px 24px; font-size: 18px; border-radius: 25px; background: #ff3366; color: #fff; border: none; }
        .noBtn { position: absolute; padding: 12px 24px; border-radius: 25px; background: #ccc; border: none; cursor: pointer; }
        .ring { font-size: 80px; margin-bottom: 10px; }
        .memoryCard { margin-top: 20px; padding: 20px; border-radius: 16px; background: rgba(255,255,255,0.85); color: #cc0052; max-width: 420px; }
        .dark .memoryCard { background: rgba(0,0,0,0.6); color: #ff9bb5; }
      `}</style>
    </div>
  );
};

export default LoveProposal;
