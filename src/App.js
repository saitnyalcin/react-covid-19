import React from 'react';
import logo from './corona.png';
import './App.css';
import Covid from './widgets/Covid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <Covid />
    </div>
  );
}

export default App;
