import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import Timer from './components/timer/Timer';
import './App.css';

  
  function App() {
    return (
     <div className="App">
      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Timer/>
          
          <a className="App-link">
            Learn React
          </a>
        </header>
     
      </div>
    );
  }


export default App;
