import React from 'react';
import "../scss/mainMenu.scss";

function MainMenu() {
  return(
    <div className='mainPageBoardMenu'>
      <div className='mainPageMenuLeft'></div>
      <div className='mainPageMenuMiddle'>
        <div className='mainPageMenuMiddleLeft'>
          <div className='mainPagePickBanStatus'>
            <span className='mainPagePickBanStatusTitle'>픽밴 현황</span>
            <div className='mainPagePickBanStatusLeague'>
              <span className='mainPagePickBanStatusLeagueTitle'>WORLDS</span>
              <div className="bar"></div>
              <span className='mainPagePickBanStatusLeagueTitle'>LCK</span>
              <div className="bar"></div>
              <span className='mainPagePickBanStatusLeagueTitle'>LPL</span>
              <div className="bar"></div>
              <span className='mainPagePickBanStatusLeagueTitle'>LEC</span>
              <div className="bar"></div>
              <span className='mainPagePickBanStatusLeagueTitle'>LCS</span>
              <div className="bar"></div>
              <span className='mainPagePickBanStatusLeagueTitle'>LJL</span>
              <div className="bar"></div>
            </div>
          </div>
          <div className='mainPageLeagueBanPickStatus'>
            <span className='mainPageLeagueBanPickStatusTitle'>2022 스토브리그</span>
            <div className='BanPickBar'></div>
            <div className='mainPageLeagueBanPickStatusMain'>
              <div className='mainPageLeagueBanPickStatusMainLeft'>
                <div className='mainPageLeagueBanPickStatusMainBox'>
                  <img src='assets/deftdwg.jpeg'></img>
                  <span className='mainPageLeagueBanPickStatusMainBoxTitle'>굿바이 데프트</span>
                </div>
                <div className='mainPageLeagueBanPickStatusMainBox'>
                  <img src='assets/deftdwg.jpeg'></img>
                  <span className='mainPageLeagueBanPickStatusMainBoxTitle'>굿바이 데프트</span>
                </div>
              </div>
              <div className='mainPageLeagueBanPickStatusMainRight'>
                <div className='mainPageLeagueBanPickStatusMainBox'>
                  <img src='assets/deftdwg.jpeg'></img>
                  <span className='mainPageLeagueBanPickStatusMainBoxTitle'>굿바이 데프트</span>
                </div>
                <div className='mainPageLeagueBanPickStatusMainBox'>
                  <img src='assets/deftdwg.jpeg'></img>
                  <span className='mainPageLeagueBanPickStatusMainBoxTitle'>굿바이 데프트</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mainPageMenuMiddleRight'>
          안녕하세요
        </div>
      </div>
      <div className='mainPageMenuRight'></div>
    </div>
  )
}

export default MainMenu;