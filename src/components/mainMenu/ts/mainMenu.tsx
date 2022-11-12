import React from 'react';
import "../scss/mainMenu.scss";

function MainMenu() {
  return(
    <div className='mainPageBoardMenu'>
      <div className='mainPageMenuLeft'>
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
          </div>
        </div>
      </div>
      <div className='mainPageMenuRight'>
        안녕하세요
      </div>
    </div>
  )
}

export default MainMenu;