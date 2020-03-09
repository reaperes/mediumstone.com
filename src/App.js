import React from 'react';
import stone from './stone.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={stone} className="logo" alt="logo" />
      <h2 className="title">Medium Stone</h2>
      <p className="description">
        Medium stone 은 바쁜 현대인들이 일상에서 잠시 쉬어 갈 수 있도록 만들어진 공간입니다.
      </p>
    </div>
  );
}

export default App;
