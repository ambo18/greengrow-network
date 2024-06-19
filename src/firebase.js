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
  apiKey: "AIzaSyCJjBdVX-moxoI7MIEVEyacT8JGAeiTK2A",
  authDomain: "greengrow-network.firebaseapp.com",
  projectId: "greengrow-network",
  storageBucket: "greengrow-network.appspot.com",
  messagingSenderId: "816423830828",
  appId: "1:816423830828:web:e35438c5a0ad77a1f09889",
  measurementId: "G-ZRWJPLJE70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
