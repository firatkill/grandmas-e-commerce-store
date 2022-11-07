import React, { useState } from "react";
import LoginPageContainerCSS from "./LoginPageContainer.module.css";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useUserLogin } from "../../../Hooks/CustomHooks";
function LoginPageContainer() {
  const styled = LoginPageContainerCSS;
  const userLogin = useUserLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const changeHandler = (e) => {
    if (e.currentTarget.id === "loginEmail") {
      setEmail(e.currentTarget.value);
    } else if (e.currentTarget.id === "loginPassword") {
      setPassword(e.currentTarget.value);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    userLogin(email, password);
  };
  return (
    <div className={styled.RegisterPageContainer}>
      <h2 className={styled.title}>Login</h2>
      <hr />
      <form onSubmit={submitHandler} className={styled.form}>
        <div className={styled.inputGroup}>
          <label>E-mail</label>
          <input
            value={email}
            id="loginEmail"
            onChange={changeHandler}
            type="email"
            placeholder="enter your email"
          />
        </div>
        <div className={styled.inputGroup}>
          <label>Password</label>
          <input
            value={password}
            id="loginPassword"
            onChange={changeHandler}
            type="password"
            placeholder="enter your password"
          />
        </div>

        <small>
          Not yet registered? <Link to="/login">Log in.</Link>
        </small>
        <input className={styled.submitButton} type="submit" value="Login" />
      </form>
      <div className={styled.googleButton}>
        <h3>OR</h3>
        <button className={styled.googleButton}>
          <FcGoogle /> Sign in using Google
        </button>
      </div>
    </div>
  );
}

export default LoginPageContainer;
