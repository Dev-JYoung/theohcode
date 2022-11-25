import React from "react";
import "../scss/banpick.scss";
import Header from "../../../components/header/ts/header";
import MenuBar from "../../../components/menuBar/ts/menuBar";
import Wallpaper from "../../../components/wallpaper/ts/wallpaper";
function Banpick() {
  return(
    <div className="mainPageBanPick">
      <Header/>
      <MenuBar/>
      <Wallpaper/>
      안녕하세요
    </div>
  )
}

export default Banpick;