import React , { useState, useRef }from 'react';
import "../scss/writing.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { getFirestore, collection, addDoc  } from "firebase/firestore";
import { app, auth, onAuthStateChanged  } from "../../../firebaseConfig/firebase-config";

var uid = '';

function Writing() {
  var getValue ='';
  // const [message, setMessage] = useState('');
  const handleMessageChange = event => {
    getValue = event.target.value;
    // console.log(getValue);
  };

  var titleValue = '';
  const handleTitleChange = event => {
    titleValue = event.target.value;
    // console.log(titleValue);
  };

  var boardValue = '';
  const handleBoardChange = event => {
    boardValue = event.target.value;
    // console.log(boardValue);
  };  
  
  onAuthStateChanged(auth,(user)=>{
    if(user){
      uid = user.displayName;
    } else{
      uid = 'oo';
    }
  })

  async function putDB(){
    const currentDate = new Date();
    const currentDayOfMonth = currentDate.getDate();
    const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
    const currentYear = currentDate.getFullYear();
    // const ref = useRef(null);
    console.log('upload to firebase DB')
    // var txt = ref.current.value;
    const db = getFirestore(app);
    const docRef = await addDoc(collection(db, "write"), {
      recommend:0,
      view:0,
      author:uid, //TODO: need to change later
      board: boardValue,
      title: titleValue,
      text: getValue,
      time: currentYear+ "-" + (currentMonth + 1) + "-" + currentDayOfMonth,
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
          <div className='board'>
            <div className='boardtitle'>게시판</div>
            <select name='게시판 설정' className='boardSetting' onClick={handleBoardChange}>
              <option value="게시판선택">게시판선택</option>
              <option value="밴픽게시판">밴픽게시판</option>
              <option value="자유게시판">자유게시판</option>
            </select>
            </div>
          <div className='title'>
            <div className='titleUser'>제목</div>
            <input className='titleWrite' placeholder="제목을 입력해 주세요" onChange={handleTitleChange}></input>
          </div>
          <div className='attach'></div>
          <textarea name="textbody" id='textbody' className="textbody"
          // value={message}
          spellCheck='false'
          onChange={handleMessageChange}/>
        </div>
      {/* 하이하이 */}
      </div>
    </div>
  );
}

export default Writing;