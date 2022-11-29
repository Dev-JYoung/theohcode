import React from "react";
import '../scss/banpickc.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes, faPlay, faRotateLeft } from "@fortawesome/free-solid-svg-icons";


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
  function loginWithKakao() {
    window.Kakao.Auth.authorize({
      redirectUri: 'https://developers.kakao.com/tool/demo/oauth',
    });
  }
  function sharing() {
    const url = window.location.href; //현재 url가져오기

    window.Kakao.init('process.env.REACT_APP_kakaoJavascriptKey');
    console.log(window.Kakao.isInitialized());
    loginWithKakao();
    window.Kakao.Link.sendDefault({ 
      objectType: 'feed',
      content: {
        title: 'Ornn',
        description: '#fav',
        imageUrl: "assets/ornn.jpg",
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845,
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
        {
          title: '앱으로 보기',
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
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
    </div>
    <div className="banpickbox">
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