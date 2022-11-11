import React from "react";
import "../scss/menuBar.scss";
import { Link } from "react-router-dom"

function MenuBar() {
  return(
    <div className="mainPageMenu">
      <div className="mainPageMenuDetail">
        <span className="mainPageMenuHome"><Link style={{ textDecoration: 'none', color: 'rgba(250,250,250,1)'}} to="/asdad">홈</Link></span>
        <div className="bar"></div>
        <span className="mainPageMenuBanPick"><Link style={{ textDecoration: 'none', color: 'rgba(250,250,250,1)'}} to="/asdad">롤툴1</Link></span>
        <div className="bar"></div>
        <span className="mainPageMenuBanPick"><Link style={{ textDecoration: 'none', color: 'rgba(250,250,250,1)'}} to="/asdad">DRX 우승</Link></span>
        <div className="bar"></div>
        <span className="mainPageMenuBanPick"><Link style={{ textDecoration: 'none', color: 'rgba(250,250,250,1)'}} to="/asdad">데프트 캬</Link></span>
        <div className="bar"></div>
        <span className="mainPageMenuBanPick"><Link style={{ textDecoration: 'none', color: 'rgba(250,250,250,1)'}} to="/asdad">밴픽 추천봇</Link></span>
        <span className="mainPageBeta">Beta</span>
      </div>
    </div>
  )
}

export default MenuBar;