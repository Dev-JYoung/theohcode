import React from "react";
import "../scss/warning.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWarning } from "@fortawesome/free-solid-svg-icons";

function Warning({warning}:{warning: string}) {
  return(
    <div className="mainPageWarning">
      <div className="mainPageWarningDetail">
        <FontAwesomeIcon className="iconWarning" icon={faWarning}/>
        <span className="mainPageWarningText">{warning}</span>
      </div>
    </div>
  )
}

export default Warning;