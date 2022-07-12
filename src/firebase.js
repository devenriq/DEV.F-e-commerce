import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzYZp1YL7Bquo9NEzOYI_oZGHgClNtD9A",
  authDomain: "e-commerce-ff69b.firebaseapp.com",
  projectId: "e-commerce-ff69b",
  storageBucket: "e-commerce-ff69b.appspot.com",
  messagingSenderId: "80333711177",
  appId: "1:80333711177:web:eec8dcc738c45417951c98",
  measurementId: "G-93Y9G41KJD",
};
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
