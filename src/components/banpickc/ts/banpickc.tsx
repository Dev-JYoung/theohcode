import React from "react";
import '../scss/banpickc.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes, faPlay, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faDiscord } from "@fortawesome/free-brands-svg-icons"
import domtoimage from "dom-to-image";

function closetheform() {
  const el = document.getElementById("sharepopup");
  if (el != null ) {
      if (el.style.display === 'none') {
        el.style.display = 'flex';
      } else {
        el.style.display = 'none';
      }
  }
}
function shareKakaoLink () {
  // @ts-ignore
  window.Kakao.Link.sendCustom({
    templateId: 86600 , // 내가 만든 템플릿 아이디를 넣어주면 된다
  });
};
function capturar(){
  var node = document.getElementById("banpickbox") as HTMLImageElement;
  domtoimage.toPng(node)
    .then(function (dataUrl) {
      var img = new Image();
      img.src = dataUrl;
      console.log(dataUrl);
      node.appendChild(img);

      window.Kakao.Share.scrapImage({
        imageUrl: dataUrl,
      });
    });

}
function onShareKakaoClick() {
  capturar();
  // shareKakaoLink();
};
function Banpickc() {
  function useEffect(){
    const script = document.createElement('script')
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  } 
  
  useEffect();
  function sharing() {
    const url = window.location.href;
    window.Kakao.init(process.env.REACT_APP_kakaoJavascriptKey);
    onShareKakaoClick();    
  }
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
      <div className="share" onClick={sharing}>
        <FontAwesomeIcon className="fa-sharp fa-solid fa-share-nodes" icon={faShareNodes}/>
      </div>
      <div className="bar"></div>
      <div className="share" onClick={closetheform}>
        <FontAwesomeIcon className="fa-sharp fa-solid fa-share-nodes" icon={faShareNodes}/>
      </div>
      <div className="bar"></div>
    </div>
    <div className="sharepopup" id='sharepopup'>
      <div className='sharepopupcont'>
        <div className="socialbrand">
          <FontAwesomeIcon className="fa-brands fa-facebook" size="3x" icon={faFacebook}/>
        </div>
        <div className="socialbrand">
          <FontAwesomeIcon className="fa-brands fa-instagram" size="3x" icon={faInstagram}/>
        </div>
        <div className="socialbrand">
          <FontAwesomeIcon className="fa-brands fa-discord" size="3x" icon={faDiscord}/>
        </div>
      </div>
    </div>
    <div className="banpickbox" id='banpickbox'>
    <div className="banbox">
      <div className="banblue">
        <div className="ban" id="blueban1"><img src='assets/cancel.png' alt="logo"></img></div>
        <div className="ban" id="blueban2"><img src='assets/cancel.png' alt="logo"></img></div>
        <div className="ban" id="blueban3"><img src='assets/cancel.png' alt="logo"></img></div>
        <div className="ban" id="blueban4"><img src='assets/cancel.png' alt="logo"></img></div>
        <div className="ban" id="blueban5"><img src='assets/cancel.png' alt="logo"></img></div>
        <span className="blue">BLUE</span>
      </div>
      <div className="banred">
        <span className="red">RED</span>
        <div className="ban" id="redban1"><img src='assets/cancel.png' alt="logo"></img></div>
        <div className="ban" id="redban2"><img src='assets/cancel.png' alt="logo"></img></div>
        <div className="ban" id="redban3"><img src='assets/cancel.png' alt="logo"></img></div>
        <div className="ban" id="redban4"><img src='assets/cancel.png' alt="logo"></img></div>
        <div className="ban" id="redban5"><img src='assets/cancel.png' alt="logo"></img></div>
      </div>
    </div>
    <div className="pickbox">
      <div className='bluepick'>
        <div className="pick" id="bluepick1"></div>
        <div className="pick" id="bluepick2"></div>
        <div className="pick" id="bluepick3"></div>
        <div className="pick" id="bluepick4"></div>
        <div className="pick" id="bluepick5"></div>
      </div>
      <div className='playback'>
        <div className="play" id="play">
          <FontAwesomeIcon className="i" icon={faPlay}/>
        </div>
        <div className="back" id="back">
          <FontAwesomeIcon className="i" icon={faRotateLeft}/>  
        </div>   
      </div>
      <div className='redpick'>       
        <div className="pick" id="redpick1"></div>
        <div className="pick" id="redpick2"></div>
        <div className="pick" id="redpick3"></div>
        <div className="pick" id="redpick4"></div>
        <div className="pick" id="redpick5"></div>
      </div>  
    </div>
  </div>    
</div>
  )
}

export default Banpickc; 