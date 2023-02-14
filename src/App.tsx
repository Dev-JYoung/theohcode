import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/mainPage/ts/mainPage';
import './App.css';
import './firebaseConfig/firebase-config';
import Banpick from './pages/banpick/ts/bankpick';
import WritePage from './pages/write/ts/write';
import FreeBoardPage from './pages/boardfree/ts/boardfree';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/banpick" element={<Banpick />}/>
        <Route path="/write" element={<WritePage />}/>
        <Route path="/boardfree" element={<FreeBoardPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
