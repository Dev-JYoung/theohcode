import React , { useState, useRef }from 'react';
import "../scss/firing.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { getFirestore, collection, addDoc  } from "firebase/firestore";
import { app } from "../../../firebaseConfig/firebase-config";


function Firing() {

  return (
    <div className='writePage'>
      <div className='colBar'>
      </div>
      <div className='content1'>
        <div className='window1'>
          <div className='windowHead'>
            <div className='titlehead'>
              화제의 글
            </div>
          </div>
          <div className='headbar'></div>
          
        </div>
      </div>

    </div>
  );
}

export default Firing;