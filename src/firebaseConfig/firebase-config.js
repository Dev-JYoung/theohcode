import {initializeApp} from 'firebase/app';
import { 
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,} from '@firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

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

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    console.log(user);
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  signInWithGoogle,
  logout,
};