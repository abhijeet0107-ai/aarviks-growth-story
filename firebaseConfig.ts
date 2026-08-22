// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3EwCZkEfeRJDBnl_b8altqdaA3AmeG7Y",
  authDomain: "aarvik-s-growth-story.firebaseapp.com",
  projectId: "aarvik-s-growth-story",
  storageBucket: "aarvik-s-growth-story.firebasestorage.app",
  messagingSenderId: "1017730478541",
  appId: "1:1017730478541:web:b83176bd2a8f7b76d0d484",
  measurementId: "G-HLLR6JZ3NH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);