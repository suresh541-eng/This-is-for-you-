import React, { useState, useEffect, useRef } from "react";
import Confetti from "react-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const LoveProposal = () => {
  const SECRET_PASSWORD = "june-24"; 
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [step, setStep] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [noPos, setNoPos] = useState({ top: "50%", left: "60%" });
  const [imgIndex, setImgIndex] = useState(0);
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  const images = [
    "/Haritha4.jpeg", // Replace with /Haritha4.jpeg
    "/haritha1.jpeg", // Replace with /haritha1.jpeg
    "/haritha3.jpeg" , // Replace with /haritha3.jpeg
    "/haritha2.jpeg"
  ];
  const proposalDate = "31 August 2025";

  useEffect(() => {
    const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (step === 1) {
      const timer = setInterval(() => setImgIndex((i) => (i + 1) % images.length), 3000);
      return () => clearInterval(timer);
    }
  }, [step]);

  const checkPassword = () => {
    if (password.toLowerCase() === SECRET_PASSWORD) {
      setUnlocked(true);
      setError("");
    } else {
      setError("Hmm… adi correct kaadu 🙈");
    }
  };

  const moveNo = () => {
    const randomTop = Math.random() * 80 + 10;
    const randomLeft = Math.random() * 80 + 10;
    setNoPos({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-red-50 to-pink-200 flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans">
      
      {/* Background Floating Hearts Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: "-10vh", opacity: [0, 1, 0] }}
            transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, delay: Math.random() * 5 }}
            className="absolute text-2xl"
            style={{ left: `${Math.random() * 100}%` }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* --- PASSWORD SCREEN --- */}
        {!unlocked && (
          <motion.div 
            key="unlock"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white w-full max-w-sm text-center z-10"
          >
            <div className="text-5xl mb-4">🔒</div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Secret Access</h1>
            <p className="text-gray-600 mb-6 text-sm">Meeku maatrame telisina password enter cheyyandi 💕</p>
            <input
              type="password"
              className="w-full p-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all text-center mb-4"
              placeholder="Password ikkada..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={checkPassword} className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 rounded-xl shadow-lg transition-transform active:scale-95">
              Unlock Memories 💖
            </button>
            {error && <p className="text-red-500 text-xs mt-3 font-medium animate-bounce">{error}</p>}
          </motion.div>
        )}

        {/* --- STEP 0: NAME --- */}
        {unlocked && step === 0 && (
          <motion.div 
            key="step0"
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, x: -100 }}
            className="bg-white/70 backdrop-blur-lg p-10 rounded-[2rem] shadow-2xl border border-white text-center z-10"
          >
            <h1 className="text-4xl mb-6 text-rose-600 font-serif italic font-bold text-shadow">Namaste! ✨</h1>
            <input
              className="w-full p-4 text-lg border-b-4 border-rose-300 focus:border-rose-500 outline-none bg-transparent text-center mb-8"
              placeholder="Mee peru cheppandi..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button 
              disabled={!name} 
              onClick={() => setStep(1)}
              className="px-10 py-3 bg-rose-500 text-white rounded-full font-bold shadow-xl hover:bg-rose-600 disabled:bg-gray-300 transition-all"
            >
              Start Magic ✨
            </button>
          </motion.div>
        )}

        {/* --- STEP 1: SLIDESHOW --- */}
        {unlocked && step === 1 && (
          <motion.div 
            key="step1"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center z-10 max-w-lg w-full"
          >
            <div className="relative group mb-8">
               <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-pink-500 rounded-2xl blur opacity-40 group-hover:opacity-100 transition duration-1000"></div>
               <img src={images[imgIndex]} className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-2xl border-4 border-white" alt="memory" />
            </div>
            
            <div className="h-24 text-center">
              <p className="text-2xl md:text-3xl font-medium text-rose-700 leading-relaxed italic">
                <Typewriter
                  words={[`Hey ${name} 💕`, "Nuvvante naku chala ishtam...", "Mana memories chala sweet...", "Oka chinna vishayam adagali..."]}
                  loop={1} cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1500}
                />
              </p>
            </div>
            <button onClick={() => setStep(2)} className="mt-10 px-12 py-3 bg-white text-rose-500 rounded-full font-bold shadow-lg hover:shadow-2xl transition-all">
              Next →
            </button>
          </motion.div>
        )}

        {/* --- STEP 2: PROPOSAL --- */}
        {unlocked && step === 2 && !accepted && (
          <motion.div 
            key="step2"
            initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            className="text-center z-10"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-rose-600 mb-12 drop-shadow-md">
              Will you be my <br/> forever? 💍
            </h2>
            <div className="flex justify-center items-center gap-8 min-h-[200px] w-full max-w-md relative">
              <button 
                className="z-20 px-10 py-4 bg-green-500 text-white text-xl rounded-full font-extrabold shadow-green-200 shadow-2xl hover:bg-green-600 hover:scale-110 transition-all"
                onClick={() => setAccepted(true)}
              >
                YES! 💖
              </button>
              <button 
                className="absolute z-10 px-8 py-3 bg-gray-400/50 text-white rounded-full font-bold backdrop-blur-sm transition-all duration-75"
                style={{ top: noPos.top, left: noPos.left }}
                onMouseEnter={moveNo}
                onClick={moveNo} // For mobile touch
              >
                NO 🙈
              </button>
            </div>
          </motion.div>
        )}

        {/* --- FINAL: SUCCESS --- */}
        {unlocked && accepted && (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
            className="text-center z-20 bg-white/40 backdrop-blur-xl p-10 rounded-[3rem] border border-white/50 shadow-2xl"
          >
            <Confetti width={size.width} height={size.height} numberOfPieces={200} gravity={0.1} colors={['#f43f5e', '#fb7185', '#fff']} />
            <motion.div
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-9xl mb-6"
            >
              💍
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-black text-rose-600 mb-4 animate-pulse uppercase tracking-tighter">She said YES! 💖</h1>
            <p className="text-lg text-rose-800 max-w-sm mx-auto mb-8 font-medium italic">
              "{name}, I promise to love, respect & stand by you forever 💕 ."
            </p>
            
            <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white p-6 rounded-2xl shadow-inner inline-block transform -rotate-2">
              <h2 className="text-xl font-bold">📅 {proposalDate}</h2>
              <p className="text-sm opacity-90">It started from here 😘</p>
              <p className="mt-2 font-mono text-xs">HARITHA 😊</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoveProposal;