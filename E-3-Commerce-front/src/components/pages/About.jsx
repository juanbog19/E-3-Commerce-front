import React from 'react';
import './About.css'; // Create a CSS file for styling
import aboutImage from '../assets/about.png'; // Import the PNG image

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="image-container">
        <img src={aboutImage} alt="About Us" />
      </div>
    </div>
  );
};

export default About;

