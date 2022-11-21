// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjthWlWIHVaWuiwihPi3CP7M5TePCU9l0",
  authDomain: "curso-redux-50d0c.firebaseapp.com",
  projectId: "curso-redux-50d0c",
  storageBucket: "curso-redux-50d0c.appspot.com",
  messagingSenderId: "35558835842",
  appId: "1:35558835842:web:b47c991f2228bf2f97169b"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth= getAuth(FirebaseApp);
export const FirebaseDB  = getFirestore(FirebaseApp);