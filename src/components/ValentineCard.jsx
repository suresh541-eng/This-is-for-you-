import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ValentineCard = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ top: '0px', left: '0px' });

  // "No" button ni escape cheyinche logic
  const moveNoButton = () => {
    const randomTop = Math.floor(Math.random() * 200) + 'px';
    const randomLeft = Math.floor(Math.random() * 200) + 'px';
    setNoButtonPos({ top: randomTop, left: randomLeft });
  };

  return (
    <div style={styles.container}>
      {!isAccepted ? (
        <motion.div 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          style={styles.card}
        >
          <h1 style={styles.text}>Hey Beautiful! ❤️</h1>
          <p style={styles.subText}>Will you be my Valentine forever?</p>
          
          <div style={styles.btnContainer}>
            <button 
              style={styles.yesBtn} 
              onClick={() => setIsAccepted(true)}
            >
              YES! 💍
            </button>

            <button 
              style={{ ...styles.noBtn, position: 'relative', ...noButtonPos }}
              onMouseEnter={moveNoButton}
            >
              No 😢
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          style={styles.successCard}
        >
          <h1 style={styles.heart}>❤️</h1>
          <h2 style={styles.text}>I Knew You'd Say Yes!</h2>
          <p style={styles.subText}>Meeru Naa Jeevitham loki vachina tharvatha prathi roju special-e. I Love You!</p>
          <p style={{fontSize: '12px', marginTop: '20px'}}>Executed with ❤️ by Your Developer</p>
        </motion.div>
      )}
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffebee',
    fontFamily: "'Poppins', sans-serif",
  },
  card: {
    padding: '40px',
    borderRadius: '20px',
    backgroundColor: 'white',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  successCard: {
    textAlign: 'center',
    color: '#d32f2f',
  },
  text: { color: '#c2185b', marginBottom: '10px' },
  subText: { color: '#555', fontSize: '18px' },
  btnContainer: { marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '20px' },
  yesBtn: {
    padding: '10px 25px',
    fontSize: '18px',
    backgroundColor: '#e91e63',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
  },
  noBtn: {
    padding: '10px 25px',
    fontSize: '18px',
    backgroundColor: '#9e9e9e',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    transition: '0.2s',
  },
  heart: { fontSize: '80px', animation: 'beat 1s infinite' }
};

export default ValentineCard;