import React from 'react';
import '../styles.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text-box">
            <h1 className="hero-title">Learning that gets you</h1>
            <p className="hero-subtitle">
              Skills for your present (and your future). Get started with us.
            </p>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/db24b94e-d190-4d5a-b1dd-958f702cc8f5.jpg"
            alt="Hero"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;