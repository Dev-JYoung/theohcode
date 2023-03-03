import React from "react";
import '../scss/header.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { signInWithGoogle, auth } from "../../../firebaseConfig/firebase-config";

function Header() {
  var user = auth.currentUser;
  var loginchange = '';
  if (user){
    loginchange = user.displayName;
  }
  else{
    loginchange = '<FontAwesomeIcon className="lockIcon" icon={faLock}/>Log In';
  }

  return(
    <div className="mainPageHeader">
      <div className="mainPageDetail">
        <span className="mainPageLogoText">THEOHCODE</span>
        <div className="mainPageLogIn" onClick={signInWithGoogle}>  
        {
          user ? 
          <span className="mainPageLoginText">{user.displayName}</span>
          :<span className="mainPageLoginText"> <FontAwesomeIcon className="lockIcon" icon={faLock}/>Log In</span>
        }
        </div>
      </div>
    </div>
  )
}

export default Header; 