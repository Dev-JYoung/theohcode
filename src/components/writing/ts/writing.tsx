import React , { useState, useRef }from 'react';
import "../scss/writing.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { getFirestore, collection, addDoc  } from "firebase/firestore";
import { app } from "../../../firebaseConfig/firebase-config";


function Writing() {
  var getValue =''
  const [message, setMessage] = useState('');
  const handleMessageChange = event => {
    // 👇️ access textarea value
    getValue = event.target.value;
    console.log(getValue);
  };
  async function putDB(){
    // const ref = useRef(null);
    console.log('abcabc')
    // var txt = ref.current.value;
    const db = getFirestore(app);
    const docRef = await addDoc(collection(db, "write"), {
      text: getValue
    });
  }
  return (
    <div className='writePage'>
      <div className='colBar'>
      </div>
      <div className='content'>
        <div className='window'>
          <div className='windowHead'>
            <div className='titlehead'>
              글쓰기
            </div>
            <div className='enrollbtn' onClick={putDB}>등록</div>
          </div>
          <div className='headbar'></div>
          <textarea name="textbody" id='textbody' className="textbody"
          // value={message}
          spellCheck='false'
          onChange={handleMessageChange}/>
        </div>
      하이하이
      </div>
    </div>
  );
}

export default Writing;