import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import confetti from 'canvas-confetti';

const ValentineApp = () => {
  const [phase, setPhase] = useState('coding');

  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff0000', '#ff69b4', '#ffffff']
    });
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono flex flex-col">
      
      {/* --- Sleek Navbar --- */}
      <nav className="flex items-center justify-between px-6 py-4 bg-[#161b22] border-b border-[#30363d] shadow-lg">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          <span className="font-bold tracking-widest text-pink-500">LOVE-OS v2.0</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm text-gray-400">
          <span className="hover:text-pink-400 cursor-pointer transition">Connection: Secure</span>
          <span className="hover:text-pink-400 cursor-pointer transition">Status: Online</span>
          <span className="hover:text-pink-400 cursor-pointer transition underline decoration-pink-500">Target: Haritha ❤️</span>
        </div>
      </nav>

      {/* --- Main Content --- */}
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-3xl bg-[#161b22] rounded-xl shadow-2xl border border-[#30363d] overflow-hidden">
          
          {/* Terminal Header */}
          <div className="bg-[#21262d] px-4 py-2 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <span className="text-xs text-gray-500 ml-2">~/heart/core-logic.js — 120fps</span>
          </div>

          <div className="p-6 md:p-10 min-h-[350px]">
            {phase === 'coding' && (
              <div className="text-lg md:text-xl leading-relaxed">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('<span class="text-blue-400">></span> Initializing Love.exe...<br/>')
                      .pauseFor(800)
                      .typeString('<span class="text-blue-400">></span> Scanning memory blocks... [DONE]<br/>')
                      .typeString('<span class="text-blue-400">></span> Matching DNA compatibility... <span class="text-green-400">99.9%</span><br/>')
                      .typeString('<span class="text-pink-500">> Warning: Emotional Overflow Detected!</span><br/>')
                      .pauseFor(1000)
                      .typeString('<span class="text-blue-400">></span> Executing <span class="text-yellow-400">proposal_script.sh</span>...<br/>')
                      .callFunction(() => setPhase('proposal'))
                      .start();
                  }}
                  options={{ delay: 40, cursor: '▋' }}
                />
              </div>
            )}

            {phase === 'proposal' && (
              <div className="animate-in fade-in duration-700">
                <h2 className="text-2xl font-bold text-pink-500 mb-4">CRITICAL SYSTEM MESSAGE:</h2>
                <div className="bg-[#0d1117] p-4 rounded border border-pink-900/30 mb-6">
                  <code className="text-blue-300">
                    while (myHeart.isBeating()) {'{'} <br/>
                    &nbsp;&nbsp;us.happiness = Infinity;<br/>
                    &nbsp;&nbsp;myWorld.currentFocus = "Haritha"; <br/>
                    {'}'}
                  </code>
                </div>
                <p className="text-xl mb-8">Will you be the <span className="text-green-400 font-bold">Admin</span> of my heart forever?</p>
                
                <div className="flex flex-wrap gap-4 relative">
                  <button 
                    onClick={() => { setPhase('success'); triggerConfetti(); }}
                    className="px-8 py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg font-bold transition-transform active:scale-95 shadow-lg shadow-green-900/20"
                  >
                    SUDO EXECUTE: YES
                  </button>
                  <button 
                    onMouseEnter={(e) => {
                      e.target.style.position = 'absolute';
                      e.target.style.top = Math.random() * 80 + '%';
                      e.target.style.left = Math.random() * 80 + '%';
                    }}
                    className="px-6 py-3 border border-red-500 text-red-500 rounded-lg hover:bg-red-500/10 transition-all cursor-not-allowed"
                  >
                    Error 404: NO Not Found
                  </button>
                </div>
              </div>
            )}

            {phase === 'success' && (
              <div className="text-center animate-in zoom-in duration-500">
                {/* --- Image Space --- */}
                <div className="mb-6 relative inline-block">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-red-600 rounded-full blur opacity-75 animate-pulse"></div>
                  <img 
                    src="https://via.placeholder.com/150" 
                    alt="Haritha" 
                    className="relative w-32 h-32 rounded-full object-cover border-4 border-[#161b22]"
                  />
                </div>
                
                <h1 className="text-4xl mb-2">❤️</h1>
                <h2 className="text-3xl font-bold text-green-400 mb-2">DEPLOYMENT SUCCESSFUL!</h2>
                <p className="text-gray-400 italic">Status: Infinite Love Loop Started...</p>
                <div className="mt-6 p-4 bg-pink-500/10 rounded-lg border border-pink-500/20">
                  <p className="text-lg text-pink-300 font-semibold uppercase tracking-widest">Haritha 😊</p>
                  <p className="mt-2 text-sm text-gray-300">Nuvvu lekunda naa code ki logic ledu, naa life ki meaning ledu.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-xs text-gray-600 border-t border-[#30363d]">
        &copy; 2026 Developed with ❤️ for a Special Person
      </footer>
    </div>
  );
};

export default ValentineApp;