import React, { useState, useEffect } from 'react';
import "./green.css"

function GreenLightRedLight({ onGameEnd }) {
  const [boxColor, setBoxColor] = useState('red');
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(40);

  const getRandomColor = () => (Math.random() < 0.5 ? 'green' : 'red');

  useEffect(() => {
    const timer = setInterval(() => {
      setBoxColor(getRandomColor());
    }, Math.floor(Math.random() * 1000) + 1000);

    const countdown = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      clearInterval(countdown);
    };
  }, []);

  const handleClick = () => {
    if (boxColor === 'green') {
      setScore((prevScore) => prevScore + 1);
    } else {
      onGameEnd(false);
    }
  };

  useEffect(() => {
    if (score >= 10) {
      onGameEnd(true);
    }
    if (timeRemaining <= 0) {
      onGameEnd(false);
    }
  }, [score, timeRemaining, onGameEnd]);

  return (
    <div className='container'>
      <h2>Green Light, Red Light Game</h2>
      <button style={{padding:20}}className= {`box ${boxColor}`} onClick={handleClick} ></button>
      <p className='box'>Score: {score}</p>
      <p className='box'>Time Remaining: {timeRemaining} secs</p>
    </div>
  );
}

export default GreenLightRedLight;
