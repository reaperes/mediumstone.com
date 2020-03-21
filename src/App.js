import React from 'react';
import stone from './stone.png';
import cx from 'classnames';
import { isMobile } from 'react-device-detect';
import './App.css';

function App() {
  return (
    <div className={cx("App", {mobile: isMobile})}>
      <img src={stone} className="logo" alt="logo" />
      <h2 className="title">Medium Stone</h2>
      <p className="description">
        미디엄 스톤은 바쁘고 복잡한 도심 한 가운데서 항상 같은 자리에서 묵묵히 중심을 지키고 있는 공간 입니다.
        <br />
        고요하게 천천히 쉬었다 가시길 바랍니다.
        <br />
        The silence in your Life.
      </p>
    </div>
  );
}

export default App;
