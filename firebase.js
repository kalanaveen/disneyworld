// Import the functions you need from the SDKs you need
import { initializeApp,getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVX62lU33K1q8ofYK72m89ErI2rCVcios",
  authDomain: "dineyworld-dca56.firebaseapp.com",
  projectId: "dineyworld-dca56",
  storageBucket: "dineyworld-dca56.appspot.com",
  messagingSenderId: "662657199285",
  appId: "1:662657199285:web:ec47474245af92c6aae2fc"
};

// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const db = getFirestore(app);

export { db };