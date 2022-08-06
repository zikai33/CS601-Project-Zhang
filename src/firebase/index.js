// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "project-80d47.firebaseapp.com",
  projectId: "project-80d47",
  storageBucket: "project-80d47.appspot.com",
  messagingSenderId: "1013757987787",
  appId: "1:1013757987787:web:2638c8fb4ab3a6b105c44e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };