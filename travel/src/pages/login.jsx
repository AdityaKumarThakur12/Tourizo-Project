import React, { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/login.css"
import logo from "../images/tourLogo.png"
import { useToast } from '@chakra-ui/react'


const Login = () => {
  const { handleLogin, authError } = useContext(AuthContext);
  const [email, setEmail] = useState("aditya1@gmail.com");
  const [password, setPassword] = useState("aditya12");
  const navigate = useNavigate();
  const toast = useToast();
 

  const handleSubmit = async (e) => {
    e.preventDefault();
      const success = await handleLogin(email, password);
      if(success){
        navigate("/")
      }
      toast({
        title: 'Login Successfull.',
        description: "Here is Your Dashboard.",
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
  };

  return (
    <div className="login-body">
    <div className="login-container">
      <img src={logo} style={{height:"70px"}}/>
      <h1 style={{fontSize:"24px", fontWeight:"600"}}>Welcome </h1>
      <p>Login to your Tourizo account</p>
      {authError && <p className="error-message">{authError}</p>}
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Login
        </button>
        <p style={{marginTop:"20px", marginBottom:"10px"}}>Don't have account Sign Up</p>
        
      </form>
      <button className="submit-button" onClick={()=> navigate("/signIn")}>Sign Up</button>
    </div>
    </div>
  );
};

export default Login;
