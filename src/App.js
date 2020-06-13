import React from 'react';
import cx from 'classnames';
import { isMobile } from 'react-device-detect';
import './App.css';

function App() {
  return (
    <div className={cx("App", {mobile: isMobile})}>
      <section className="section background" />
      <section className="section mediumstone">
        <img src="/mediumstone.com/mediumstone.png" alt="mediumstone"/>
      </section>
      <section className="section description">
        <div>미디엄 스톤은 바쁘고 복잡한 도심 한 가운데서</div>
        <div>항상 같은 자리에서 묵묵히 중심을 지키고 있는 공간 입니다.</div>
        <div>고요하게 천천히 쉬었다 가시길 바랍니다.</div>
        <div className="slogan">We love still your smile, we love still your medium.</div>
      </section>
    </div>
  );
}

export default App;
