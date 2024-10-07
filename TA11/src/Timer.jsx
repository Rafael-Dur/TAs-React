import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000); // 1000 ms = 1 segundo

    // Cleanup: se ejecuta cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []); // Dependencias vacías para ejecutar solo una vez

  return (
    <div className="timer-container">
      <h1>Temporizador</h1>
      <p>{seconds} segundos</p>
    </div>
  );
};

export default Timer;
