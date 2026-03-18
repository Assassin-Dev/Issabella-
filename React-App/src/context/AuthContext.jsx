import { createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // ✅ Keep user logged in automatically
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // only set if Firebase says user is logged in
    });
    return () => unsubscribe();
  }, []);

  // ✅ SIGN UP
  async function signup(email, password) {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      setUser(res.user);
      return res.user;
    } catch (err) {
      throw err; // propagate error to Auth.jsx
    }
  }

  // ✅ LOGIN
  async function login(email, password) {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      setUser(res.user);
      return res.user;
    } catch (err) {
      throw err; // propagate error to Auth.jsx
    }
  }

  // ✅ GOOGLE LOGIN
  async function googleLogin() {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      setUser(res.user);
      return res.user;
    } catch (err) {
      throw err;
    }
  }

  // ✅ LOGOUT
  async function logout() {
    await signOut(auth);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, googleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}