import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUhTX6-deI0mNjmSmmt2QDOEYo9ElsuB0",
  authDomain: "tourizo-22c90.firebaseapp.com",
  databaseURL: "https://tourizo-22c90-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tourizo-22c90",
  storageBucket: "tourizo-22c90.firebasestorage.app",
  messagingSenderId: "440059443547",
  appId: "1:440059443547:web:cbd72663ea7f576e19c27e"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
export const auth = getAuth(app)