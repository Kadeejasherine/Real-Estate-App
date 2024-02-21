// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-cdc80.firebaseapp.com",
  projectId: "real-estate-cdc80",
  storageBucket: "real-estate-cdc80.appspot.com",
  messagingSenderId: "811920122689",
  appId: "1:811920122689:web:b89971dee04f9e8bedb7c0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);