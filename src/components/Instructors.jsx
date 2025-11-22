import React from 'react';
import '../styles.css';

function Instructors() {
  return (
    <div className="instructor-section">
      <div className="container">
        <div className="instructor-content">
          <div className="instructor-image">
            <img 
              src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg"
              alt="Become an instructor"
            />
          </div>
          <div className="instructor-text">
            <h2 className="instructor-title">Become an instructor</h2>
            <p className="instructor-description">
              Instructors from around the world teach millions of learners on Udemy. We provide the tools and skills to teach what you love.
            </p>
            <button className="instructor-btn">Start teaching today</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instructors;