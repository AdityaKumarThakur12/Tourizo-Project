import { createContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebaseConfig/firebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [authError, setAuthError] = useState(null); // Added to store error messages

  const handleSignUp = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Sign-up successful:", userCredential.user);
      setIsLoggedin(true);
      setAuthError(null); // Clear previous errors
    } catch (error) {
      console.error("Sign-up failed:", error.message);
      setAuthError(error.message); // Store the error message
    }
  };

  const handleLogin = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful:", userCredential.user);
      setIsLoggedin(true);
      setAuthError(null); // Clear previous errors
      return true;
    } catch (error) {
      console.error("Login failed:", error.message);
      setAuthError("wrong email or password"); // Store the error message
      // alert("Wrong email or password")
      return false
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Logout successful");
      setIsLoggedin(false);
      setAuthError(null); // Clear previous errors
    } catch (error) {
      console.error("Logout failed:", error.message);
      setAuthError(error.message); // Store the error message
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedin,
        authError, // Provide authError for UI feedback
        handleSignUp,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
