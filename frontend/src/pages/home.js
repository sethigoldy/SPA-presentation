import React from 'react';
import './home.css';
import logo from '../../logo.svg';
function Home() {
  return (
    <div className="Home">
      <h3>You're at home</h3>
      <h5>Welcome to the Demo!</h5>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default Home;
