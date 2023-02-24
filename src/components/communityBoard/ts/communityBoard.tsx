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

function pageAlgo(total, bottomSize, listSize, cursor ){
  //total = 총 갯수
  //bottomSize = 하단크기
  //listSize = 화면에서 보여줄 크기
  //cursor = 현재 나의 페이지

  let totalPageSize = Math.ceil(total / listSize)  //한 화면에 보여줄 갯수에서 구한 하단 총 갯수 

  let firstBottomNumber = cursor - cursor % bottomSize + 1;  //하단 최초 숫자
  let lastBottomNumber = cursor - cursor % bottomSize + bottomSize;  //하단 마지막 숫자

  if(lastBottomNumber > totalPageSize) lastBottomNumber = totalPageSize  //총 갯수보다 큰 경우 방지

  return {
      firstBottomNumber,
      lastBottomNumber,
      totalPageSize,
      total,
      bottomSize,
      listSize,
      cursor
  }
}


function CommunityBoard() {
  var numberDB = 0;
  const db = getFirestore(app);
  
  const [todos, setTodos] = useState([]);
   
  const fetchPost = async () => {
     
      await getDocs(collection(db, "write"))
          .then((querySnapshot)=>{               
              const newData = querySnapshot.docs
                  .map((doc) => ({...doc.data(), id:doc.id }));
              setTodos(newData);                
              console.log(todos, newData);
              numberDB = querySnapshot.size;
              console.log(numberDB)
              
          })
     
  }
  console.log('check point 3')
  console.log(numberDB)
  var MyDiv2 = document.getElementById('page');
  // var doc = document.getElementsByClassName("page");
  let pagenums = '';

  let info = pageAlgo(numberDB, 20, 10, 1);
  console.log(numberDB);
  console.log(info.lastBottomNumber);
  console.log(info.firstBottomNumber);
  for(let i = info.firstBottomNumber ; i <= info.lastBottomNumber; i++){
    console.log("check");
    console.log(i);
    // i === info.cursor ? console.log(`<span>cur : ${i}</span>`) : console.log(`<span>${i}</span>`);
    // MyDiv2 = MyDiv2 + '<h3>hello<h3>';
    MyDiv2.innerHTML = MyDiv2.innerHTML + {i};
    // pagenums.concat('<span>${i}</span>')
  }
  console.log(pagenums)
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
        <div className='page' id='page'>
            {pagenums}
        </div>
      </div>

    </div>
  );
}

export default CommunityBoard;