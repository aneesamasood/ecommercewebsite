import React from 'react';

// Define the styles for the About component
const aboutStyles = {
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#1a1a1a',
  color: '#ffffff',
  lineHeight: 1.6,
  textAlign: 'center', // Align text in the center
  padding: '20px',
};

// Heading styles
const headingStyles = {
  fontSize: '32px',
  marginBottom: '20px',
};

// Paragraph styles
const paragraphStyles = {
  marginBottom: '20px',
};

// Container styles
const containerStyles = {
  maxWidth: '900px',
  margin: '0 auto',
  padding: '20px',
};

// Button styles
const buttonStyles = {
  display: 'inline-block',
  padding: '12px 24px',
  backgroundColor: '#4caf50',
  color: '#ffffff',
  textAlign: 'center',
  textDecoration: 'none',
  borderRadius: '4px',
  transition: 'background-color 0.3s',
};

// Button hover styles
const buttonHoverStyles = {
  backgroundColor: '#45a049',
};

// About component
const About = () => {
  return (
    <div style={aboutStyles}>
      <div style={containerStyles}>
        {/* Heading */}
        <h1 style={headingStyles}>About Us</h1>
        {/* Paragraph */}
        <p style={paragraphStyles}>
          In the face of COVID-19 challenges, my friend and I envisioned a solution: bringing the shopping experience directly to doorsteps. Thus, our online venture emerged – a virtual wardrobe designed for your convenience. Welcome to a new way of shopping, where style meets you right at your door!
        </p>
        {/* Learn More Button */}
        <a href="#" style={{ ...buttonStyles, ...buttonHoverStyles }}>
          Learn More
        </a>
      </div>
    </div>
  );
};

export default About;