import React, { useEffect, useRef, useState} from "react";
import '../scss/banpickc.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes, faPlay, faRotateLeft, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faDiscord } from "@fortawesome/free-brands-svg-icons"
import { storageRef } from "../../../firebaseConfig/firebase-config";
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import domtoimage from "dom-to-image";
import CopyToClipboard from 'react-copy-to-clipboard';
import html2canvas from 'html2canvas';
import * as htmlToImage from 'html-to-image';

function popup(){
const el = document.getElementById("sharepopup");
if (el != null ) {
    if (el.style.display === 'none') {
      el.style.display = 'block';
      el.style.display = 'flex';
    } else {
      el.style.display = 'none';
    }
  }
}

// HAN 20221219 to make a search bar
var champ = [
  {title:'Aatrox', path:'assets/champsquare/Aatrox.png'},
  {title:'Ahri', path:'assets/champsquare/Ahri.png'},
  {title:'Akali', path:'assets/champsquare/Akali.png'},
  {title:'Akshan', path:'assets/champsquare/Akshan.png'},
  {title:'Alistar', path:'assets/champsquare/Alistar.png'},
  {title:'Amumu', path:'assets/champsquare/Amumu.png'},
  {title:'Anivia', path:'assets/champsquare/Anivia.png'},
  {title:'Annie', path:'assets/champsquare/Annie.png'},
  {title:'Aphelios', path:'assets/champsquare/Aphelios.png'},
  {title:'Ashe', path:'assets/champsquare/Ashe.png'},
  {title:'AurelionSol', path:'assets/champsquare/AurelionSol.png'},
  {title:'Azir', path:'assets/champsquare/Azir.png'},
  {title:'Bard', path:'assets/champsquare/Bard.png'},
  {title:'Belveth', path:'assets/champsquare/Belveth.png'},
  {title:'Blitzcrank', path:'assets/champsquare/Blitzcrank.png'},
  {title:'Brand', path:'assets/champsquare/Brand.png'},
  {title:'Braum', path:'assets/champsquare/Braum.png'},
  {title:'Caitlyn', path:'assets/champsquare/Caitlyn.png'},
  {title:'Camille', path:'assets/champsquare/Camille.png'},
  {title:'Cassiopeia', path:'assets/champsquare/Cassiopeia.png'},
  {title:'Chogath', path:'assets/champsquare/Chogath.png'},
  {title:'Corki', path:'assets/champsquare/Corki.png'},
  {title:'Darius', path:'assets/champsquare/Darius.png'},
  {title:'Diana', path:'assets/champsquare/Diana.png'},
  {title:'Draven', path:'assets/champsquare/Draven.png'},
  {title:'DrMundo', path:'assets/champsquare/DrMundo.png'},
  {title:'Ekko', path:'assets/champsquare/Ekko.png'},
  {title:'Elise', path:'assets/champsquare/Elise.png'},
  {title:'Evelynn', path:'assets/champsquare/Evelynn.png'},
  {title:'Ezreal', path:'assets/champsquare/Ezreal.png'},
  {title:'Fiddlesticks', path:'assets/champsquare/Fiddlesticks.png'},
  {title:'Fiora', path:'assets/champsquare/Fiora.png'},
  {title:'Fizz', path:'assets/champsquare/Fizz.png'},
  {title:'Galio', path:'assets/champsquare/Galio.png'},
  {title:'Gangplank', path:'assets/champsquare/Gangplank.png'},
  {title:'Garen', path:'assets/champsquare/Garen.png'},
  {title:'Gnar', path:'assets/champsquare/Gnar.png'},
  {title:'Gragas', path:'assets/champsquare/Gragas.png'},
  {title:'Graves', path:'assets/champsquare/Graves.png'},
  {title:'Gwen', path:'assets/champsquare/Gwen.png'},
  {title:'Hecarim', path:'assets/champsquare/Hecarim.png'},
  {title:'Heimerdinger', path:'assets/champsquare/Heimerdinger.png'},
  {title:'Illaoi', path:'assets/champsquare/Illaoi.png'},
  {title:'Irelia', path:'assets/champsquare/Irelia.png'},
  {title:'Ivern', path:'assets/champsquare/Ivern.png'},
  {title:'Janna', path:'assets/champsquare/Janna.png'},
  {title:'JarvanIV', path:'assets/champsquare/JarvanIV.png'},
  {title:'Jax', path:'assets/champsquare/Jax.png'},
  {title:'Jayce', path:'assets/champsquare/Jayce.png'},
  {title:'Jhin', path:'assets/champsquare/Jhin.png'},
  {title:'Jinx', path:'assets/champsquare/Jinx.png'},
  {title:'Kaisa', path:'assets/champsquare/Kaisa.png'},
  {title:'Kalista', path:'assets/champsquare/Kalista.png'},
  {title:'Karma', path:'assets/champsquare/Karma.png'},
  {title:'Karthus', path:'assets/champsquare/Karthus.png'},
  {title:'Kassadin', path:'assets/champsquare/Kassadin.png'},
  {title:'Katarina', path:'assets/champsquare/Katarina.png'},
  {title:'Kayle', path:'assets/champsquare/Kayle.png'},
  {title:'Kayn', path:'assets/champsquare/Kayn.png'},
  {title:'Kennen', path:'assets/champsquare/Kennen.png'},
  {title:'Khazix', path:'assets/champsquare/Khazix.png'},
  {title:'Kindred', path:'assets/champsquare/Kindred.png'},
  {title:'Kled', path:'assets/champsquare/Kled.png'},
  {title:'KogMaw', path:'assets/champsquare/KogMaw.png'},
  {title:'KSante', path:'assets/champsquare/KSante.png'},
  {title:'Leblanc', path:'assets/champsquare/Leblanc.png'},
  {title:'LeeSin', path:'assets/champsquare/LeeSin.png'},
  {title:'Leona', path:'assets/champsquare/Leona.png'},
  {title:'Lillia', path:'assets/champsquare/Lillia.png'},
  {title:'Lissandra', path:'assets/champsquare/Lissandra.png'},
  {title:'Lucian', path:'assets/champsquare/Lucian.png'},
  {title:'Lulu', path:'assets/champsquare/Lulu.png'},
  {title:'Lux', path:'assets/champsquare/Lux.png'},
  {title:'Malphite', path:'assets/champsquare/Malphite.png'},
  {title:'Malzahar', path:'assets/champsquare/Malzahar.png'},
  {title:'Maokai', path:'assets/champsquare/Maokai.png'},
  {title:'MasterYi', path:'assets/champsquare/MasterYi.png'},
  {title:'MissFortune', path:'assets/champsquare/MissFortune.png'},
  {title:'MonkeyKing', path:'assets/champsquare/MonkeyKing.png'},
  {title:'Mordekaiser', path:'assets/champsquare/Mordekaiser.png'},
  {title:'Morgana', path:'assets/champsquare/Morgana.png'},
  {title:'Nami', path:'assets/champsquare/Nami.png'},
  {title:'Nasus', path:'assets/champsquare/Nasus.png'},
  {title:'Nautilus', path:'assets/champsquare/Nautilus.png'},
  {title:'Neeko', path:'assets/champsquare/Neeko.png'},
  {title:'Nidalee', path:'assets/champsquare/Nidalee.png'},
  {title:'Nilah', path:'assets/champsquare/Nilah.png'},
  {title:'Nocturne', path:'assets/champsquare/Nocturne.png'},
  {title:'Nunu', path:'assets/champsquare/Nunu.png'},
  {title:'Olaf', path:'assets/champsquare/Olaf.png'},
  {title:'Orianna', path:'assets/champsquare/Orianna.png'},
  {title:'Ornn', path:'assets/champsquare/Ornn.png'},
  {title:'Pantheon', path:'assets/champsquare/Pantheon.png'},
  {title:'Poppy', path:'assets/champsquare/Poppy.png'},
  {title:'Pyke', path:'assets/champsquare/Pyke.png'},
  {title:'Qiyana', path:'assets/champsquare/Qiyana.png'},
  {title:'Quinn', path:'assets/champsquare/Quinn.png'},
  {title:'Rakan', path:'assets/champsquare/Rakan.png'},
  {title:'Rammus', path:'assets/champsquare/Rammus.png'},
  {title:'RekSai', path:'assets/champsquare/RekSai.png'},
  {title:'Rell', path:'assets/champsquare/Rell.png'},
  {title:'Renata', path:'assets/champsquare/Renata.png'},
  {title:'Renekton', path:'assets/champsquare/Renekton.png'},
  {title:'Rengar', path:'assets/champsquare/Rengar.png'},
  {title:'Riven', path:'assets/champsquare/Riven.png'},
  {title:'Rumble', path:'assets/champsquare/Rumble.png'},
  {title:'Ryze', path:'assets/champsquare/Ryze.png'},
  {title:'Samira', path:'assets/champsquare/Samira.png'},
  {title:'Sejuani', path:'assets/champsquare/Sejuani.png'},
  {title:'Senna', path:'assets/champsquare/Senna.png'},
  {title:'Seraphine', path:'assets/champsquare/Seraphine.png'},
  {title:'Sett', path:'assets/champsquare/Sett.png'},
  {title:'Shaco', path:'assets/champsquare/Shaco.png'},
  {title:'Shen', path:'assets/champsquare/Shen.png'},
  {title:'Shyvana', path:'assets/champsquare/Shyvana.png'},
  {title:'Singed', path:'assets/champsquare/Singed.png'},
  {title:'Sion', path:'assets/champsquare/Sion.png'},
  {title:'Sivir', path:'assets/champsquare/Sivir.png'},
  {title:'Skarner', path:'assets/champsquare/Skarner.png'},
  {title:'Sona', path:'assets/champsquare/Sona.png'},
  {title:'Soraka', path:'assets/champsquare/Soraka.png'},
  {title:'Swain', path:'assets/champsquare/Swain.png'},
  {title:'Sylas', path:'assets/champsquare/Sylas.png'},
  {title:'Syndra', path:'assets/champsquare/Syndra.png'},
  {title:'TahmKench', path:'assets/champsquare/TahmKench.png'},
  {title:'Taliyah', path:'assets/champsquare/Taliyah.png'},
  {title:'Talon', path:'assets/champsquare/Talon.png'},
  {title:'Taric', path:'assets/champsquare/Taric.png'},
  {title:'Teemo', path:'assets/champsquare/Teemo.png'},
  {title:'Thresh', path:'assets/champsquare/Thresh.png'},
  {title:'Tristana', path:'assets/champsquare/Tristana.png'},
  {title:'Trundle', path:'assets/champsquare/Trundle.png'},
  {title:'Tryndamere', path:'assets/champsquare/Tryndamere.png'},
  {title:'TwistedFate', path:'assets/champsquare/TwistedFate.png'},
  {title:'Twitch', path:'assets/champsquare/Twitch.png'},
  {title:'Udyr', path:'assets/champsquare/Udyr.png'},
  {title:'Urgot', path:'assets/champsquare/Urgot.png'},
  {title:'Varus', path:'assets/champsquare/Varus.png'},
  {title:'Vayne', path:'assets/champsquare/Vayne.png'},
  {title:'Veigar', path:'assets/champsquare/Veigar.png'},
  {title:'Velkoz', path:'assets/champsquare/Velkoz.png'},
  {title:'Vex', path:'assets/champsquare/Vex.png'},
  {title:'Vi', path:'assets/champsquare/Vi.png'},
  {title:'Viego', path:'assets/champsquare/Viego.png'},
  {title:'Viktor', path:'assets/champsquare/Viktor.png'},
  {title:'Vladimir', path:'assets/champsquare/Vladimir.png'},
  {title:'Volibear', path:'assets/champsquare/Volibear.png'},
  {title:'Warwick', path:'assets/champsquare/Warwick.png'},
  {title:'Xayah', path:'assets/champsquare/Xayah.png'},
  {title:'Xerath', path:'assets/champsquare/Xerath.png'},
  {title:'XinZhao', path:'assets/champsquare/XinZhao.png'},
  {title:'Yasuo', path:'assets/champsquare/Yasuo.png'},
  {title:'Yone', path:'assets/champsquare/Yone.png'},
  {title:'Yorick', path:'assets/champsquare/Yorick.png'},
  {title:'Yuumi', path:'assets/champsquare/Yuumi.png'},
  {title:'Zac', path:'assets/champsquare/Zac.png'},
  {title:'Zed', path:'assets/champsquare/Zed.png'},
  {title:'Zeri', path:'assets/champsquare/Zeri.png'},
  {title:'Ziggs', path:'assets/champsquare/Ziggs.png'},
  {title:'Zilean', path:'assets/champsquare/Zilean.png'},
  {title:'Zoe', path:'assets/champsquare/Zoe.png'},
  {title:'Zyra', path:'assets/champsquare/Zyra.png'}];

function UseEffect() {
  const script = document.createElement('script')
  script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
  script.async = true
  
  document.body.appendChild(script)
  return () => {
    document.body.removeChild(script)
  }
} 

function echoing(something){
  console.log(something);
}

UseEffect();
function Banpickc() {

  const [search, setSearch] = useState("");
  const onChange = (e) => {
          setSearch(e.target.value)
      }
  const filterTitle = champ.filter((p) => {
        return p.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    })

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
      window.open("http://www.facebook.com/sharer/sharer.php?u=" + downloadURL);
      console.log('downloaded')

      // const url = window.location.href; 
      // window.Kakao.init(process.env.REACT_APP_kakaoJavascriptKey);
      // console.log(window.Kakao.isInitialized());

      // window.Kakao.Link.createDefaultButton({
      //   container: '#test',
      //   objectType: 'feed',
      //   content: {
      //     title: 'banpick',
      //     description: 'banpick',
      //     imageUrl: downloadURL,
      //     link: {
      //       mobileWebUrl: url,
      //       webUrl: url
      //     }
      //   },
      //   buttons: [
      //     {
      //       title: '버튼 타이틀',
      //       link: {
      //         mobileWebUrl: url,
      //         webUrl: url
      //       }
      //     }
      //   ]
      // });

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
      <div className="share" onClick={popup}>
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
    <div className="search">
      <div className="locseach">
        <input type="text" value={search} onChange={onChange} />
        <FontAwesomeIcon className="i" icon={faMagnifyingGlass}/>  
      </div>
      <div className="champsearched">
        <ul>
          {filterTitle.map(champ => 
          <li className="searched" onClick={()=>echoing(champ)}>
          <img src={champ.path}></img>
          <span>{champ.title}</span>
          </li>)}
        </ul>
      </div>
    </div>
  </div>

</div>
  )
}

export default Banpickc; 