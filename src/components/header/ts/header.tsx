import React from "react";
import '../scss/header.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { signInWithGoogle } from "../../../firebaseConfig/firebase-config";

function Header() {

  return(
    <div className="mainPageHeader">
      <div className="mainPageDetail">
        <span className="mainPageLogoText">THEOHCODE</span>
        <div className="mainPageLogIn" onClick={signInWithGoogle}>
          <span className="mainPageLoginText"><FontAwesomeIcon className="lockIcon" icon={faLock}/>Log In</span>
        </div>
      </div>
    </div>
  )
}

export default Header; 