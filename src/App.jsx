import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import TrustedCompanies from './components/TrustedCompanies';
import FeaturedCourses from './components/FeaturedCourses';
import Instructors from './components/Instructors';
import './styles.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <TrustedCompanies />
      <FeaturedCourses />
      <Instructors />
    </div>
  );
}

export default App;