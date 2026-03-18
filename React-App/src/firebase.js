import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// 🔥 your config (already correct)
const firebaseConfig = {
  apiKey: "AIzaSyBI0UbzDgJ4R_7EToLpAwpBR6mWtIOrY4s",
  authDomain: "issabella-7f6aa.firebaseapp.com",
  projectId: "issabella-7f6aa",
  storageBucket: "issabella-7f6aa.firebasestorage.app",
  messagingSenderId: "4880265840",
  appId: "1:4880265840:web:97c358613db95a1679fab5",
  measurementId: "G-ZD41ZN87EQ"
};

const app = initializeApp(firebaseConfig);

// ✅ Auth setup
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();