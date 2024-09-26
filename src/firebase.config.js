// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "house-marketplace-24025.firebaseapp.com",
  projectId: "house-marketplace-24025",
  storageBucket: "house-marketplace-24025.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_messagingSenderId,
  appId: import.meta.env.VITE_FIREBASE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();