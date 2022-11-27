import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/mainPage/ts/mainPage';
import './App.css';
import './firebaseConfig/firebase-config';
import Banpick from './pages/banpick/ts/bankpick';

function App() {
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
