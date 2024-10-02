import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyf6mGZTxdP5eSmzv1zHYCze3PfwHoeP8",
  authDomain: "musevue-dashobard.firebaseapp.com",
  projectId: "musevue-dashobard",
  storageBucket: "musevue-dashobard.appspot.com",
  messagingSenderId: "295490503472",
  appId: "1:295490503472:web:bb5fde9f799f5dfe97bef5",
};
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export { firebaseAuth, googleProvider };
