import React , { useState, useRef, useEffect } from 'react';
import "../scss/communityBoard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { collection, query, where, getDocs, getFirestore  } from "firebase/firestore";
import { app } from "../../../firebaseConfig/firebase-config";



// async function putDB(){
//   // const ref = useRef(null);
//   console.log('upload to firebase DB')
//   // var txt = ref.current.value;
//   const db = getFirestore(app);
//   // const q = query(collection(db, "cities"), where("capital", "==", true));
//   const q = query(collection(db, "write"));
//   const querySnapshot = await getDocs(q);
//   querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, " => ", doc.data());
//   });
// }

function CommunityBoard() {
  const db = getFirestore(app);
  const [todos, setTodos] = useState([]);
   
  const fetchPost = async () => {
     
      await getDocs(collection(db, "write"))
          .then((querySnapshot)=>{               
              const newData = querySnapshot.docs
                  .map((doc) => ({...doc.data(), id:doc.id }));
              setTodos(newData);                
              console.log(todos, newData);
          })
     
  }
  
  useEffect(()=>{
      fetchPost();
  }, []);

  return (
    <div className='writePage'>
      <div className='colBar'>
      </div>
      <div className='content1'>
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
        {/* <div className='enrollbtn' onClick={putDB}>등록</div>          */}
        <div className="todo-content">

          <div className='table'>
            <div className='tableTitle'>
              <div className='table-rec'>추천수</div>
              <div className='table-cnt'>조회수</div>
              <div className='table-aut'>글쓴이</div>
              <div className='table-tit'>제목</div>
            </div>
            {
                todos?.map((todo,i)=>(
                    <p key={i}>
                      <div className='tableData'>
                        <div className='table-rec'>{todo.board}</div>
                        <div className='table-cnt'>{todo.title}</div>
                        <div className='table-aut'>{todo.text}</div>
                        <div className='table-tit'>제목</div>
                      </div>
                    </p>
                ))
            }

          </div>   
        </div>
      </div>

    </div>
  );
}

export default CommunityBoard;