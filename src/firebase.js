// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-next-79687.firebaseapp.com",
  projectId: "x-next-79687",
  storageBucket: "x-next-79687.appspot.com",
  messagingSenderId: "600740940166",
  appId: "1:600740940166:web:1a919ad57438598aea8407",
  measurementId: "G-72XC78WYBH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
