import React, { useState } from 'react';
import './Input.css';

const Input = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Escribe algo..."
        value={inputValue}
        onChange={handleChange}
        className="input-field"
      />
      <p className="input-text">{inputValue}</p>
    </div>
  );
};

export default Input;
