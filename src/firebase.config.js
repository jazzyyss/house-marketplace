// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz1dtbV6kGfOS-vI05alljSQk--uF8eTI",
  authDomain: "house-marketplace-24025.firebaseapp.com",
  projectId: "house-marketplace-24025",
  storageBucket: "house-marketplace-24025.appspot.com",
  messagingSenderId: "792495865617",
  appId: "1:792495865617:web:13ef8c2b19de0da69f16b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();