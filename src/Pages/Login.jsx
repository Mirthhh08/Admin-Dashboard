import React from "react";
import { useContext } from "react";
// import signuppage from "../assets/signuppage.png";
// import IconGoogle from "../assets/IconGoogle.png";
import { useState } from "react";
import UserLogin from "../Components/Login_Components/UserLogin";
import UserSignUp from "../Components/Login_Components/UserSignUp";
import { StateContext } from "../Context/StateContext";

const Login = () => {
  const [state, setState] = useState("Sign Up");

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { signUp, setSignUp } = useContext(StateContext);

  return <div>{signUp ? <UserSignUp /> : <UserLogin />}</div>;
};

export default Login;
