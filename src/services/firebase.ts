import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBmavie-595kEopzH4fxRBJWrydqdrKsro",
  authDomain: "auth-9f443.firebaseapp.com",
  projectId: "auth-9f443",
  storageBucket: "auth-9f443.appspot.com",
  messagingSenderId: "347313582638",
  appId: "1:347313582638:web:20fa88123dc9a1d87a25bf"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);