// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword,  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlYD3d8Y0EEmQRa0AdmUx0N67LooOplqk",
  authDomain: "horizon-2-0-1.firebaseapp.com",
  projectId: "horizon-2-0-1",
  storageBucket: "horizon-2-0-1.appspot.com",
  messagingSenderId: "600878196036",
  appId: "1:600878196036:web:f73b1fa0b4306c226f2311"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { app, auth, db, firebaseSignInWithEmailAndPassword };