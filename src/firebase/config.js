// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Development Database
// const firebaseConfig = {
//   apiKey: "AIzaSyCk2xsyObY719uFGJ_ushv93XnWHrA6bMQ",
//   authDomain: "react-apps-40c86.firebaseapp.com",
//   projectId: "react-apps-40c86",
//   storageBucket: "react-apps-40c86.appspot.com",
//   messagingSenderId: "674751915890",
//   appId: "1:674751915890:web:5e05fb7330fa5ccdbddfeb",
// };

// Testing Database
const firebaseConfig = {
  apiKey: "AIzaSyBYRROKooy1Lo5ll6C9_hkPt3tqeOymcIs",
  authDomain: "react-apps-test-75582.firebaseapp.com",
  projectId: "react-apps-test-75582",
  storageBucket: "react-apps-test-75582.appspot.com",
  messagingSenderId: "130060395917",
  appId: "1:130060395917:web:55672fc51e5280c84e49c4"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDatabase = getFirestore(FirebaseApp);
