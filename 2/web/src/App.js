import React from 'react';
import logo from 'common/assets/cover.png';
import './App.css';
import data from 'common/data.json'
import style from 'common/style'

function App() {
  return (
    <div className="App">
      <header style={style} className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
       {data.label}
        </p>
       
      </header>
    </div>
  );
}

export default App;
