import React from "react";
import '../scss/banpickc.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";

function Banpickc() {

  return(
  <div className='banpickMain'>
    <div className="banpickselect">
      <div className="banpickmenumain">
        <span className="banpickmenu">Ban/Pick Menu</span>
      </div>
      <div className="bar"></div>
      <div className="prefselectmain">
        <span className="prefselect">Preference Select</span>
      </div>          
      <div className="bar"></div>
      <span className="share">
        <FontAwesomeIcon className="fa-sharp fa-solid fa-share-nodes" icon={faShareNodes}/>
      </span>
    </div>
    <div className="banpickbox">
    <div className="banbox">
      <div className="banblue">
        <div className="ban" id="blueban1"><img src='assets/cancel.png'></img></div>
        <div className="ban" id="blueban2"><img src='assets/cancel.png'></img></div>
        <div className="ban" id="blueban3"><img src='assets/cancel.png'></img></div>
        <div className="ban" id="blueban4"><img src='assets/cancel.png'></img></div>
        <div className="ban" id="blueban5"><img src='assets/cancel.png'></img></div>
        <span className="blue">BLUE</span>
      </div>
      <div className="banred">
        <span className="red">RED</span>
        <div className="ban" id="redban1"><img src='assets/cancel.png'></img></div>
        <div className="ban" id="redban2"><img src='assets/cancel.png'></img></div>
        <div className="ban" id="redban3"><img src='assets/cancel.png'></img></div>
        <div className="ban" id="redban4"><img src='assets/cancel.png'></img></div>
        <div className="ban" id="redban5"><img src='assets/cancel.png'></img></div>
      </div>
    </div>
    <div className="pickbox">
      <div className="pick" id="bluepick1"></div>
      <div className="pick" id="bluepick2"></div>
      <div className="pick" id="bluepick3"></div>
      <div className="pick" id="bluepick4"></div>
      <div className="pick" id="bluepick5"></div>
      <div className="play" id="play"><i className="fa-solid fa-play"></i></div>
      <div className="back"><i className="fa-solid fa-square-caret-left"></i></div>            
      <div className="pick" id="redpick1"></div>
      <div className="pick" id="redpick2"></div>
      <div className="pick" id="redpick3"></div>
      <div className="pick" id="redpick4"></div>
      <div className="pick" id="redpick5"></div>
    </div>
  </div>    
</div>
  )
}

export default Banpickc; 