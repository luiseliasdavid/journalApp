// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7B97hCRYP_-JiLYWgSodnG_cpTDQ6LO8",
  authDomain: "react-cursos-6dab4.firebaseapp.com",
  projectId: "react-cursos-6dab4",
  storageBucket: "react-cursos-6dab4.appspot.com",
  messagingSenderId: "583653011483",
  appId: "1:583653011483:web:d5e01e71cabc1d605808be"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp )
export const FireBaseDB = getFirestore( FirebaseApp )