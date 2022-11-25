import React from 'react';
import {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/mainPage/ts/mainPage';
import './App.css';
import './firebase-config';
import {db} from './firebase-config';
import {collection, getDocs} from 'firebase/firestore';
import Banpick from './pages/banpick/ts/bankpick';

function App() {
  const [users,setUsers] = useState([]);
  const usersCollectionRef = collection(db, 'users');
  useEffect(()=> {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data);
    }
    getUsers()
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/banpick" element={<Banpick />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
