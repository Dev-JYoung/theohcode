import React , { useState, useRef }from 'react';
import "../scss/communityBoard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { collection, query, where, getDocs, getFirestore  } from "firebase/firestore";
import { app } from "../../../firebaseConfig/firebase-config";

async function putDB(){
  // const ref = useRef(null);
  console.log('upload to firebase DB')
  // var txt = ref.current.value;
  const db = getFirestore(app);
  // const q = query(collection(db, "cities"), where("capital", "==", true));
  const q = query(collection(db, "write"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
}

function CommunityBoard() {

  return (
    <div className='writePage'>
      <div className='colBar'>
      </div>
      <div className='content'>
        <div className='window1'>
          <div className='comm'>
            커뮤니티
          </div>
          <div className='windowHead'>
            <div className='titlehead'>
              자유게시판
            </div>
            <div className='titlehead'>
              밴픽게시판
            </div>            
          </div> 
          <div className='enrollbtn' onClick={putDB}>등록</div>         
        </div>
      </div>

    </div>
  );
}

export default CommunityBoard;