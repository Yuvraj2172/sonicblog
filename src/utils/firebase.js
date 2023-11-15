// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  process.env.FIREBASE,
  authDomain: "blog-d1bd2.firebaseapp.com",
  projectId: "blog-d1bd2",
  storageBucket: "blog-d1bd2.appspot.com",
  messagingSenderId: "803612697041",
  appId: "1:803612697041:web:5d78be7e2a5e091ea3c0f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);