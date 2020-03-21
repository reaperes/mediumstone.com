import React from 'react';
import stone from './stone.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={stone} className="logo" alt="logo" />
      <h2 className="title">Medium Stone</h2>
      <p className="description">
        미디엄 스톤은 바쁘고 복잡한 도심 한 가운데서 항상 같은 자리에서 묵묵히 중심을 지키고 있는 공간 입니다.
        고요하게 천천히 쉬었다 가시길 바랍니다.
        The silence in your Life.
      </p>
    </div>
  );
}

export default App;
