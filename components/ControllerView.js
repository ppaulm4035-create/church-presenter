'use client';

import { useState, useEffect } from 'react';

export default function ControllerView() {
  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    const savedLyrics = localStorage.getItem('worship_lyrics');
    if (savedLyrics) setLyrics(savedLyrics);
  }, []);

  const handleUpdate = (e) => {
    const val = e.target.value;
    setLyrics(val);
    localStorage.setItem('worship_lyrics', val);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Worship Presenter - Controller</h2>
      <textarea
        value={lyrics}
        onChange={handleUpdate}
        rows={10}
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
        placeholder="Type or paste lyrics here..."
      />
    </div>
  );
}
