import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <h1 className="counter-title">Contador: {count}</h1> {}
      <div>
        <button onClick={increaseCount} className="counter-button">
          Aumentar
        </button>
        <button onClick={decreaseCount} className="counter-button">
          Disminuir
        </button>
      </div>
    </div>
  );
};

export default Counter;
