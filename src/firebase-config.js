import {initializeApp} from 'firebase/app';
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC5WVi9PIMBNO1B-1O39d0PLGHjbNJIHpc",
    authDomain: "the-oh--code.firebaseapp.com",
    projectId: "the-oh--code",
    storageBucket: "the-oh--code.appspot.com",
    messagingSenderId: "1065793139893",
    appId: "1:1065793139893:web:bb1bc1e0e5dd12898c7afc",
    measurementId: "G-1X9PRFKRFE"
  };
const app = initializeApp(firebaseConfig);  
export const db = getFirestore(app);
