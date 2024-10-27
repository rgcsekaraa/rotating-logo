import React from 'react';
import './App.css';

import { useEffect } from 'react';

function ComingSoon() {
  useEffect(() => {
    const audio = document.getElementById('background-music');
    if (audio) {
      audio.volume = 0.5;
    }
  }, []);
  return (
    <div className="coming-soon-container">
      <div className="image-container">
        <img
          src="backgroundImage.jpg"
          alt="Background"
          className="background-image"
        />
        <img src="foregroundImage.jpg" className="foreground-image" />
      </div>
      <div className="coming-soon-text">
        <h1>PonKanchi </h1>
        <p>Coming Soon...</p>
      </div>
      <audio id="background-music" src="bgMusic.mp3" autoPlay loop />
    </div>
  );
}

export default ComingSoon;
