'use client';

import { useState, useEffect } from 'react';

export default function BandView() {
  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    const handleStorage = () => {
      const savedLyrics = localStorage.getItem('worship_lyrics');
      if (savedLyrics !== null) setLyrics(savedLyrics);
    };

    handleStorage();
    window.addEventListener('storage', handleStorage);

    const interval = setInterval(handleStorage, 500);

    return () => {
      window.removeEventListener('storage', handleStorage);
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      backgroundColor: '#111', 
      color: '#00ffcc', 
      fontSize: '3vw', 
      textAlign: 'center', 
      padding: '30px',
      fontFamily: 'monospace' 
    }}>
      <div style={{ fontSize: '1.2rem', color: '#888', marginBottom: '20px' }}>[ BAND MONITOR ]</div>
      <div style={{ whiteSpace: 'pre-wrap' }}>{lyrics}</div>
    </div>
  );
}
