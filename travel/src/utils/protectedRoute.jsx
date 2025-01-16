import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isLoggedin } = useContext(AuthContext);

  if (!isLoggedin) {
    return <Navigate to="/login" />;
  }

 
  return children;
};

export default ProtectedRoute;
