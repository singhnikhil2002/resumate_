// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIY6AUAOUifWncdYaamg9alI2XF3zurB4",
  authDomain: "resumate-db839.firebaseapp.com",
  projectId: "resumate-db839",
  storageBucket: "resumate-db839.appspot.com",
  messagingSenderId: "911400492937",
  appId: "1:911400492937:web:d165cc2adb63a16b2a4b58",
  measurementId: "G-MVSK2WE7N8"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
