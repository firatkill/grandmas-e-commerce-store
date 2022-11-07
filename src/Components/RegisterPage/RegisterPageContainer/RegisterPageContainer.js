import React, { useState } from "react";
import RegisterPageContainerCSS from "./RegisterPageContainer.module.css";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useAddUserToDb, useUserRegister } from "../../../Hooks/CustomHooks";

function RegisterPageContainer() {
  const styled = RegisterPageContainerCSS;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const userRegister = useUserRegister();
  const addUserToDb = useAddUserToDb();

  const changeHandler = (e) => {
    if (e.currentTarget.id === "registerEmailInput") {
      setEmail(e.currentTarget.value);
    } else if (e.currentTarget.id === "registerFirstPasswordInput") {
      setPassword(e.currentTarget.value);
    } else if (e.currentTarget.id === "registerSecondPasswordInput") {
      setConfirmPassword(e.currentTarget.value);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      userRegister.userRegister(email, password);
    } else {
      alert("passwords are not the same");
      setPassword("");
      setConfirmPassword("");
    }
  };
  return (
    <div className={styled.RegisterPageContainer}>
      <h2 className={styled.title}>Register</h2>
      <hr />
      <form onSubmit={submitHandler} className={styled.form}>
        <div className={styled.inputGroup}>
          <label>E-mail</label>
          <input
            required
            id="registerEmailInput"
            onChange={changeHandler}
            type="email"
            value={email}
            placeholder="enter your email"
          />
        </div>
        <div className={styled.inputGroup}>
          <label>Password</label>
          <input
            required
            minLength={5}
            id="registerFirstPasswordInput"
            onChange={changeHandler}
            type="password"
            value={password}
            placeholder="enter your password"
          />
        </div>
        <div className={styled.inputGroup}>
          <label>Confirm Password</label>
          <input
            required
            minLength={5}
            id="registerSecondPasswordInput"
            value={confirmPassword}
            onChange={changeHandler}
            type="password"
            placeholder="enter your password again"
          />
        </div>
        <small>
          Already Registered? <Link to="/login">Log in.</Link>
        </small>
        <input className={styled.submitButton} type="submit" value="Register" />
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

export default RegisterPageContainer;
