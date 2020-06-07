import React from 'react';
import cx from 'classnames';
import { isMobile } from 'react-device-detect';
import './App.css';

// import stone from './mediumstone.png';
// https://blog.naver.com/reaperes/221993076994
const stone = "https://blogfiles.pstatic.net/MjAyMDA2MDdfMjYy/MDAxNTkxNTI0NjE0Mjg3.Hy1SEWPZ22YHXIo4zBfkyo35hB0XxUvkg3HbTcY0E58g.-rMPXWBq3L_Pq4rd5dt5dC-1rikF39ydv1C3CzcE9yEg.PNG.reaperes/mediumstone.png"

function App() {
  return (
    <div className={cx("App", {mobile: isMobile})}>
      <img referrerPolicy="no-referrer" src={stone} className="logo" alt="logo">
      </img>
      <p className="description">
        미디엄 스톤은 바쁘고 복잡한 도심 한 가운데서
        <br />
        항상 같은 자리에서 묵묵히 중심을 지키고 있는 공간 입니다.
        <br />
        고요하게 천천히 쉬었다 가시길 바랍니다.
        <br />
        <span className="slogan">
          We love still your smile, we love still your medium.
        </span>
      </p>
    </div>
  );
}

export default App;
