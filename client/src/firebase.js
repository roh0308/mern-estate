// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-249ad.firebaseapp.com",
  projectId: "mern-estate-249ad",
  storageBucket: "mern-estate-249ad.appspot.com",
  messagingSenderId: "464353256891",
  appId: "1:464353256891:web:a79d5940aec312c033109e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);