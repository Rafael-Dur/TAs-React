import React, { useState, useEffect } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${count}`;
  }, [count]); // Se ejecuta cada vez que 'count' cambia

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <div className="box">
        <h1>Contador: {count}</h1>
        <button onClick={handleIncrement} className="increment-button">Aumentar</button>
        <button onClick={handleDecrement} className="decrement-button">Disminuir</button>
      </div>
    </div>
  );
};

export default Counter;
