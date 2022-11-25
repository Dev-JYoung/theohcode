import React from "react";
import '../scss/wallpaper.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLock } from "@fortawesome/free-solid-svg-icons";

function Wallpaper() {

  return(
    <div className="wallpaper">
      <div className="wallpaperimage">
        <img src="assets/ornn.jpg" alt="Ornn" className="mainimage"></img>
      </div>
    </div>
  )
}

export default Wallpaper; 