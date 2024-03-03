// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk2xsyObY719uFGJ_ushv93XnWHrA6bMQ",
  authDomain: "react-apps-40c86.firebaseapp.com",
  projectId: "react-apps-40c86",
  storageBucket: "react-apps-40c86.appspot.com",
  messagingSenderId: "674751915890",
  appId: "1:674751915890:web:5e05fb7330fa5ccdbddfeb",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDatabase = getFirestore(FirebaseApp);
