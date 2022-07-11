import firebase from "firebase";

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

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
