import React from "react";
import '../scss/header.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { auth, signInWithGoogle } from "../../../firebase-config";

function Header() {

  return(
    <div className="mainPageHeader">
      <div className="mainPageDetail">
        <span className="mainPageLogoText">THEOHCODE</span>
        <div className="mainPageLogIn">
          <span className="mainPageLoginText"><FontAwesomeIcon className="lockIcon" icon={faLock}/>Log In</span>
        </div>
        <button className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </button>        
      </div>
    </div>
  )
}

export default Header; 