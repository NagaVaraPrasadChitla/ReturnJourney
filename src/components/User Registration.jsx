import React, { useState } from 'react';
import "./user.css"
function UserRegistration({ onStartGame }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');

  const handleStartGame = () => {
    // Validate user inputs here (e.g., check if fields are not empty)
    onStartGame(name, email, mobile, difficulty);
  };

  return (
    <div className='container'>
      <h2 className='head'>User Registration</h2>
      <form>
        <label className='label'>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='name'/>
        </label>
        <br />
        <label className='label'>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='name'/>
        </label>
        <br />
        <label className='label'>
          Mobile :
          <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} className='name'/>
        </label>
        <br />
        <label className='label'>
          Difficulty Level:
          <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className='name'>
            <option value="Easy" className='easy'>Easy</option>
            <option value="Medium" className='medium'>Medium</option>
            <option value="Hard" className='hard'>Hard</option>
          </select>
        </label>
        <br />
     
        
       
      </form>
      <button type="button" onClick={handleStartGame} className='button'>
          Start Game
        </button>
    </div>
  );
}

export default UserRegistration;
