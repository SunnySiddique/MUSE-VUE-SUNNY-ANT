import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useFirebase = () => useContext(FirebaseContext);

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyD4or7Yawm9JbHTHH2cBVCbYXLvxH2RifM",
  authDomain: "musevewproject.firebaseapp.com",
  projectId: "musevewproject",
  storageBucket: "musevewproject.appspot.com",
  messagingSenderId: "805965056138",
  appId: "1:805965056138:web:d853d9fae18f86e7188573",
};

const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState();
  const [err, setErr] = useState();

  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const SignUp = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErr("Email is already in use.");
      } else if (error.code === "auth/weak-password") {
        setErr("Password should be at least 6 characters");
      } else {
        setErr("");
      }
    }
  };

  const SignupWithGoogle = () => {
    signInWithPopup(firebaseAuth, googleProvider);
  };

  const LogInPage = async (email, password) => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        setErr("user not found");
      } else {
        // setErr("")
      }
    }
  };

  const handleLogOut = () => {
    signOut(firebaseAuth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    const unscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unscribe();
    };
  }, []);

  const LogedIn = user ? true : false;

  return (
    <FirebaseContext.Provider
      value={{
        SignUp,
        LogInPage,
        handleLogOut,
        SignupWithGoogle,
        user,
        LogedIn,
        err,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
