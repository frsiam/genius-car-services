// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVzyfUt4_qh4uGUS0NPqJufKumzY-NI0M",
  authDomain: "genius-car-services-f19fb.firebaseapp.com",
  projectId: "genius-car-services-f19fb",
  storageBucket: "genius-car-services-f19fb.appspot.com",
  messagingSenderId: "31986512314",
  appId: "1:31986512314:web:63963057bbf4124ae0ad83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;