import React from 'react';
import logo from '../assets/images/logo.svg';
import '../styles/App.css';
import Main from './Main';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello from V2</h1>
        </header>
        <Main/>
      </div>
  );
}

export default App;