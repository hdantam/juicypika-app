// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from 'firebase/functions';


const firebaseConfig = {
  apiKey: "AIzaSyBaSI53QIJzzWyTxvTCVgACCq_ofrnz4mY",
  authDomain: "juicypika-c4682.firebaseapp.com",
  projectId: "juicypika-c4682",
  storageBucket: "juicypika-c4682.appspot.com",
  messagingSenderId: "973186119111",
  appId: "1:973186119111:web:1432d4aa9378e6b3e255e2",
  measurementId: "G-DE9DJD7N0V",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
const functions = getFunctions(app);