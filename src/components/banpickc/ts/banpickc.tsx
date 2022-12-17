import React, { useEffect, useRef, useState } from "react";
import '../scss/banpickc.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes, faPlay, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faDiscord } from "@fortawesome/free-brands-svg-icons"
import { storageRef } from "../../../firebaseConfig/firebase-config";
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import domtoimage from "dom-to-image";
import CopyToClipboard from 'react-copy-to-clipboard';
import html2canvas from 'html2canvas';
import * as htmlToImage from 'html-to-image';

function UseEffect() {
  const script = document.createElement('script')
  script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
  script.async = true
  
  document.body.appendChild(script)
  return () => {
    document.body.removeChild(script)
  }
} 
UseEffect();
function Banpickc() {
  const domEl = useRef(null);
 
  const downloadImage = async () => {
    console.log('started banpickc')
    var dataBlob = await htmlToImage.toBlob(domEl.current as any);

    const uploadTask = uploadBytesResumable(storageRef, dataBlob);
    uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
    console.log(error);
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
      const url = window.location.href; 
      window.Kakao.init(process.env.REACT_APP_kakaoJavascriptKey);
      console.log(window.Kakao.isInitialized());

      // window.Kakao.Auth.authorize({
      //   redirectUri: url,
      // });

      window.Kakao.Link.createDefaultButton({
        container: '#test',
        objectType: 'feed',
        content: {
          title: 'banpick',
          description: 'banpick',
          imageUrl: downloadURL,
          link: {
            mobileWebUrl: url,
            webUrl: url
          }
        },
        buttons: [
          {
            title: '버튼 타이틀',
            link: {
              mobileWebUrl: url,
              webUrl: url
            }
          }
        ]
      });

    });
    }
  );

  const dataUrl = await htmlToImage.toPng(domEl.current as any);

    // // download image
    // const link = document.createElement('a');
    // link.download = "html-to-img.png";
    // link.href = dataUrl;
    // link.click();
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
      <div className="share" onClick={downloadImage}>
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
    <div className='test' id='test' style={{color:"white"}}>checkcheck</div> 
    <div className="banpickbox" id='banpickbox' ref={domEl}>
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
  <div className="recommend">
    <div className="recom-elem"></div>
    <div className="recom-elem"></div>
    <div className="recom-elem"></div>
    <div className="recom-elem"></div>
    <div className="recom-elem"></div>          
  </div>
  <div className="searchchar">
    <div className="search"></div>
    <div className="champs"></div>
  </div>

</div>
  )
}

export default Banpickc; 