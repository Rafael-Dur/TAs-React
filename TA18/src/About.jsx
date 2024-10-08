// About.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      {/* Otros contenidos de About */}
      <p>Estas en la página de información de la empresa</p>
      <Link to="/home">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default About;
