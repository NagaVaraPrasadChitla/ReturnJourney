import React, { useState } from 'react';
import UserRegistration from './components/User Registration';
import GreenLightRedLight from './components/GreenLightRedLight';
import "./App.css"

function App() {
  const [user, setUser] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const handleStartGame = (name, email, mobile, difficulty) => {
   
    setUser({ name, email, mobile, difficulty });
    setGameStarted(true);
  };

  const handleGameEnd = (win) => {
    setGameWon(win);
    setGameStarted(false);
  };

  return (
    <div className="App">
      {!user ? (
        <UserRegistration onStartGame={handleStartGame} />
      ) : (
        <>
          {gameStarted ? (
            <GreenLightRedLight onGameEnd={handleGameEnd} />
          ) : (
            <>
              {gameWon ? (
                <div className='contain'>
                <div className='green' style={{background:"green"}}>
                <p className='win'>Congratulations, {user.name}! You win!</p>
                </div>
                </div>
              ) : (
                <div className='contain'>
                <div className='green' style={{background:"red"}}>
                <p className='lose'>Game Over! Better luck next time, {user.name}.</p>
                </div>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
