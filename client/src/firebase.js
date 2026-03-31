// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "genwebai-9bb7a.firebaseapp.com",
  projectId: "genwebai-9bb7a",
  storageBucket: "genwebai-9bb7a.firebasestorage.app",
  messagingSenderId: "419085826545",
  appId: "1:419085826545:web:fe920bb79faa287283ac50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}

