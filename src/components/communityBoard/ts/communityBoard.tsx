import React , { useState, useRef }from 'react';
import "../scss/communityBoard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { getFirestore, collection, addDoc  } from "firebase/firestore";
import { app } from "../../../firebaseConfig/firebase-config";


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
        </div>
      </div>

    </div>
  );
}

export default CommunityBoard;