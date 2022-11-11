import React from "react";
import '../scss/header.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLock } from "@fortawesome/free-solid-svg-icons";

function Header() {

  return(
    <div className="mainPageHeader">
      <div className="mainPageDetail">
        <span className="mainPageLogoText">THEOHCODE</span>
        <div className="mainPageLogIn">
          <span className="mainPageLoginText"><FontAwesomeIcon className="lockIcon" icon={faLock}/>Log In</span>
        </div>
      </div>
    </div>
  )
}

export default Header; 