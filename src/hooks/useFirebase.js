// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCCRhlYhffVv5-Phevig1AMWrkjeBbuE0",
  authDomain: "laptop-shorom-imranrx.firebaseapp.com",
  projectId: "laptop-shorom-imranrx",
  storageBucket: "laptop-shorom-imranrx.appspot.com",
  messagingSenderId: "62330195109",
  appId: "1:62330195109:web:36083ebc060af2b080114c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;