// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDth8vJBoehdXfIR1J1YM0TM-aLlw2oFn8",
  authDomain: "diet-app-795b5.firebaseapp.com",
  projectId: "diet-app-795b5",
  storageBucket: "diet-app-795b5.firebasestorage.app",
  messagingSenderId: "646454969167",
  appId: "1:646454969167:web:37afea5f0a344f99183b3a",
  measurementId: "G-EQ2Z7Y5MZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
export const auth = getAuth(app);
export const db = getFirestore(app);