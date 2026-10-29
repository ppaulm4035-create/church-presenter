'use client';

import { useState, useEffect } from 'react';

export default function MainView() {
  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    const handleStorage = () => {
      const savedLyrics = localStorage.getItem('worship_lyrics');
      if (savedLyrics !== null) setLyrics(savedLyrics);
    };

    handleStorage();
    window.addEventListener('storage', handleStorage);
    
    // Interval check para sa live sync sa parehong browser/tab kung kinakailangan
    const interval = setInterval(handleStorage, 500);

    return () => {
      window.removeEventListener('storage', handleStorage);
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      backgroundColor: '#000', 
      color: '#fff', 
      fontSize: '4vw', 
      textAlign: 'center', 
      padding: '40px',
      fontFamily: 'sans-serif' 
    }}>
      <div style={{ whiteSpace: 'pre-wrap' }}>{lyrics}</div>
    </div>
  );
}
