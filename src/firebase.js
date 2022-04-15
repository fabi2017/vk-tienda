// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt1boqwuJWWuMGwRKr1hosMgIG3WBGiBI",
  authDomain: "tienda-vk.firebaseapp.com",
  projectId: "tienda-vk",
  storageBucket: "tienda-vk.appspot.com",
  messagingSenderId: "1095483033635",
  appId: "1:1095483033635:web:b8de30aeaf585cf4348996",
  measurementId: "G-0DLBCV70T0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db