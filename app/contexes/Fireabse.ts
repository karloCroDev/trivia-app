// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8ZWlVgIHw5lu0Vj8cySUMy848P0DuZb8",
  authDomain: "trivia-1dea5.firebaseapp.com",
  projectId: "trivia-1dea5",
  storageBucket: "trivia-1dea5.appspot.com",
  messagingSenderId: "707048864930",
  appId: "1:707048864930:web:deb9b3eece1deba2dd2bfb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
