import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4or7Yawm9JbHTHH2cBVCbYXLvxH2RifM",
  authDomain: "musevewproject.firebaseapp.com",
  projectId: "musevewproject",
  storageBucket: "musevewproject.appspot.com",
  messagingSenderId: "805965056138",
  appId: "1:805965056138:web:d853d9fae18f86e7188573",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export { firebaseAuth, googleProvider };
