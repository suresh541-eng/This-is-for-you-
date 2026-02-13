import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import confetti from 'canvas-confetti';

const AdvancedLoveTerminal = () => {
  const [phase, setPhase] = useState('coding'); // phases: coding, proposal, success

  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff0000', '#ff69b4', '#ffffff']
    });
  };

  const handleYes = () => {
    setPhase('success');
    triggerConfetti();
  };

  return (
    <div style={styles.body}>
      <div style={styles.terminal}>
        <div style={styles.header}>
          <div style={{...styles.dot, backgroundColor: '#ff5f56'}}></div>
          <div style={{...styles.dot, backgroundColor: '#ffbd2e'}}></div>
          <div style={{...styles.dot, backgroundColor: '#27c93f'}}></div>
          <span style={styles.title}>~/heart/core-logic.js</span>
        </div>

        <div style={styles.content}>
          {phase === 'coding' && (
            <div style={styles.codeText}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString('> Initializing Love.exe...<br/>')
                    .pauseFor(1000)
                    .typeString('> Scanning memories... [DONE]<br/>')
                    .typeString('> Checking compatibility... 100%<br/>')
                    .typeString('> <span style="color: #ff00ff">Error: Heart rate increasing!</span><br/>')
                    .pauseFor(1000)
                    .typeString('> Executing proposal_script.sh...<br/>')
                    .callFunction(() => setPhase('proposal'))
                    .start();
                }}
                options={{ delay: 50, cursor: '_' }}
              />
            </div>
          )}

          {phase === 'proposal' && (
            <div style={styles.proposalBox}>
              <h2 style={styles.glitchText}>System Message:</h2>
              <p style={styles.mainQuestion}>
                While(me.alive()) {'{'} <br/>
                &nbsp;&nbsp;us.together = true;<br/>
                &nbsp;&nbsp;happiness++; <br/>
                {'}'}
              </p>
              <p style={{color: '#00ff00'}}>Will you be my forever partner?</p>
              
              <div style={styles.actions}>
                <button onClick={handleYes} style={styles.yesBtn}>Execute YES</button>
                <button 
                  onMouseEnter={(e) => {
                    e.target.style.position = 'absolute';
                    e.target.style.top = Math.random() * 90 + '%';
                    e.target.style.left = Math.random() * 90 + '%';
                  }}
                  style={styles.noBtn}
                >
                  Null Pointer Exception (NO)
                </button>
              </div>
            </div>
          )}

          {phase === 'success' && (
            <div style={styles.success}>
              <h1 style={styles.bigHeart}>❤️</h1>
              <h2 style={{color: '#00ff00'}}>Deployment Successful!</h2>
              <p>Status: In Love Forever</p>
              <p style={styles.footerNote}>Nuvvu lekunda naa code ki logic ledu, naa life ki meaning ledu. Happy Valentine's Day!</p>
              <p style={styles.footerNote}>HARITHA 😊</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: { backgroundColor: '#0d1117', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#c9d1d9', fontFamily: 'monospace' },
  terminal: { width: '90%', maxWidth: '700px', height: '450px', backgroundColor: '#161b22', borderRadius: '10px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', overflow: 'hidden', border: '1px solid #30363d' },
  header: { backgroundColor: '#21262d', padding: '10px', display: 'flex', alignItems: 'center', gap: '8px' },
  dot: { width: '12px', height: '12px', borderRadius: '50%' },
  title: { fontSize: '12px', marginLeft: '10px', color: '#8b949e' },
  content: { padding: '20px', fontSize: '18px', lineHeight: '1.6' },
  yesBtn: { padding: '10px 30px', backgroundColor: '#238636', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' },
  noBtn: { padding: '10px 20px', backgroundColor: 'transparent', color: '#f85149', border: '1px solid #f85149', borderRadius: '6px', cursor: 'not-allowed' },
  actions: { marginTop: '40px', display: 'flex', gap: '20px' },
  bigHeart: { fontSize: '80px', margin: '0' },
  success: { textAlign: 'center', marginTop: '30px' },
  footerNote: { fontSize: '14px', fontStyle: 'italic', color: '#8b949e', marginTop: '20px' }
};

export default AdvancedLoveTerminal;