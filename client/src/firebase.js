// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-78195.firebaseapp.com",
  projectId: "estate-78195",
  storageBucket: "estate-78195.appspot.com",
  messagingSenderId: "944336391570",
  appId: "1:944336391570:web:b9473c840b1c390d42454b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);