// Contact.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      {/* Otros contenidos de Contact */}
      <p>Estas en la página de contacto de la empresa.</p>
      <Link to="/home">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default Contact;
