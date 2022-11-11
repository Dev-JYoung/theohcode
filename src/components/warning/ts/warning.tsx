import React from "react";
import "../scss/warning.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWarning } from "@fortawesome/free-solid-svg-icons";

function Warning() {
  return(
    <div className="mainPageWarning">
      <div className="mainPageWarningDetail">
        <FontAwesomeIcon className="iconWarning" icon={faWarning}/>
        <span className="mainPageWarningText">Website will go down 2022-10-25 18:00 due to maintence. Sorry for Inconvinience.</span>
      </div>
    </div>
  )
}

export default Warning;