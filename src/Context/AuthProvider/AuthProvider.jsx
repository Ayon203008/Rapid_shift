import React, { useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider()
// must import this , with out this google login will be not working

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // function for login with google
  const signInWithGoogle=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
  }

  // function for registration
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // function for login
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };


  // function for signout for a user

  const Logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // observer to observe everything
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const AuthInfo = { createUser,signInWithGoogle, signIn, loading, user, setUser, Logout };

  return <AuthContext value={AuthInfo}>{children}</AuthContext>;
};

export default AuthProvider;
