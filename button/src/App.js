import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./components/button/Button.js";

  function App() {
    return (
      <div className="App">
      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button/>
          
          <a className="App-link">
            Learn React
          </a>
        </header>
     
      </div>
    );
  }

export default App;
